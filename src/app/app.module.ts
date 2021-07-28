import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchBarComponent } from "./widgets/search-bar/search-bar.component";
import { PatientProfileComponent } from "./pages/patient-profile/patient-profile.component";
import { NewPatientComponent } from "./pages/new-patient/new-patient.component";
import { PatientCardComponent } from "./widgets/patient-card/patient-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AvatarButtonComponent } from "./widgets/avatar-button/avatar-button.component";

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		SearchBarComponent,
		HomeComponent,
		PatientProfileComponent,
		NewPatientComponent,
		PatientCardComponent,
		AvatarButtonComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
