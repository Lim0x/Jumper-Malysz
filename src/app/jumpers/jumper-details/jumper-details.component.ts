import { Component, OnInit } from "@angular/core";
import { JumperService } from "../jumper.service";
import { Jumper } from "../../Jumper";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-jumper-details",
    templateUrl: "./jumper-details.component.html",
    styleUrls: ["./jumper-details.component.scss"],
})
export class JumperDetailsComponent implements OnInit {
    jumper: Jumper | undefined;
    isJumperLoaded = false;

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
            this.jumper = jumper;
            this.isJumperLoaded = true;
        });
    }

    deleteJumper(): void {
        if (!this.jumper) return;
        this.jumperService.deleteJumper(this.jumper.id).subscribe(() => {
            // noinspection JSIgnoredPromiseFromCall
            this.router.navigate(["jumpers"]);
        });
    }
}
