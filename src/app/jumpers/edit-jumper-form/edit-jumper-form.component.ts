import { Component, OnInit } from "@angular/core";
import { JumperChangeEvent } from "../jumper-form/jumper-form.component";
import { JumperService } from "../jumper.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Jumper } from "../../Jumper";

@Component({
    selector: "app-edit-jumper-form",
    templateUrl: "./edit-jumper-form.component.html",
    styleUrls: ["./edit-jumper-form.component.scss"],
})
export class EditJumperFormComponent implements OnInit {
    originalJumper: Jumper | undefined;
    updatedJumper: Omit<Jumper, "id"> | undefined;
    isJumperLoaded = false;
    isValid = false;

    constructor(
        private jumperService: JumperService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const params = this.route.snapshot.paramMap;
        const jumperId = params.get("jumperId");
        if (!jumperId) return;
        this.jumperService.getJumper(jumperId).subscribe((jumper) => {
            this.originalJumper = jumper;
            this.isJumperLoaded = true;
        });
    }

    onJumperChange(event: JumperChangeEvent): void {
        this.isValid = event.valid;
        this.updatedJumper = event.jumper;
    }

    updateJumper(): void {
        if (!this.originalJumper) return;
        if (!this.updatedJumper) return;

        const id = this.originalJumper.id;
        const pendingUpdate: Jumper = { ...this.updatedJumper, id };
        this.jumperService.updateJumper(pendingUpdate).subscribe(async () => {
            await this.router.navigate(["jumpers", id]);
        });
    }
}
