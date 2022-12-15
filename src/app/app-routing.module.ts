import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JumperListComponent } from "./jumpers/jumper-list/jumper-list.component";
import { JumperDetailsComponent } from "./jumpers/jumper-details/jumper-details.component";
import { NewJumperFormComponent } from "./jumpers/new-jumper-form/new-jumper-form.component";
import { EditJumperFormComponent } from "./jumpers/edit-jumper-form/edit-jumper-form.component";

const routes: Routes = [
    { path: "", redirectTo: "/jumpers", pathMatch: "full" },
    { path: "jumpers", component: JumperListComponent },
    { path: "jumpers/new", component: NewJumperFormComponent },
    { path: "jumpers/:jumperId", component: JumperDetailsComponent },
    { path: "jumpers/:jumperId/edit", component: EditJumperFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
