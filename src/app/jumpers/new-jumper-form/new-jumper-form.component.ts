import { Component } from "@angular/core";
import { JumperService } from "../jumper.service";
import { Router } from "@angular/router";
import { JumperChangeEvent } from "../jumper-form/jumper-form.component";
import { Jumper } from "../../Jumper";

@Component({
    selector: "app-new-jumper-form",
    templateUrl: "./new-jumper-form.component.html",
    styleUrls: ["./new-jumper-form.component.scss"],
})
export class NewJumperFormComponent {
    isValid = false;
    jumper!: Omit<Jumper, "id">;

    constructor(private jumperService: JumperService, private router: Router) {}

    onJumperChange(event: JumperChangeEvent): void {
        this.isValid = event.valid;
        this.jumper = event.jumper;
    }

    createJumper() {
        this.jumperService
            .createJumper(this.jumper)
            .subscribe(async (jumper) => {
                await this.router.navigate(["jumpers", jumper.id]);
            });
    }
}
