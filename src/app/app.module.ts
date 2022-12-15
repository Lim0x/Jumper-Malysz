import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { JumperListComponent } from "./jumpers/jumper-list/jumper-list.component";
import { AgePipe } from "./age.pipe";
import { JumperDetailsComponent } from "./jumpers/jumper-details/jumper-details.component";
import { NewJumperFormComponent } from "./jumpers/new-jumper-form/new-jumper-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditJumperFormComponent } from "./jumpers/edit-jumper-form/edit-jumper-form.component";
import { JumperFormComponent } from "./jumpers/jumper-form/jumper-form.component";

@NgModule({
    declarations: [
        AgePipe,
        AppComponent,
        JumperListComponent,
        NavigationComponent,
        JumperDetailsComponent,
        NewJumperFormComponent,
        EditJumperFormComponent,
        JumperFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
