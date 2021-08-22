import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { HomeComponent } from "./pages/private/home/home.component";
import { SearchBarComponent } from "./widgets/search-bar/search-bar.component";
import { PatientProfileComponent } from "./pages/private/patient-profile/patient-profile.component";
import { NewPatientComponent } from "./pages/private/new-patient/new-patient.component";
import { PatientCardComponent } from "./widgets/patient-card/patient-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AvatarButtonComponent } from "./widgets/avatar-button/avatar-button.component";
import { LoginFormComponent } from "./widgets/login-form/login-form.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { PrivateComponent } from "./pages/private/private.component";
import { PublicComponent } from "./pages/public/public.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrandLogoComponent } from "./widgets/brand-logo/brand-logo.component";
import { NewPrescriptionComponent } from "./pages/private/new-prescription/new-prescription.component";
import { PrescribeMedFormComponent } from './widgets/prescribe-med-form/prescribe-med-form.component';
import { AutoFillComponent } from './widgets/auto-fill/auto-fill.component';

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
		LoginFormComponent,
		LoginComponent,
		PrivateComponent,
		PublicComponent,
		BrandLogoComponent,
		NewPrescriptionComponent,
  PrescribeMedFormComponent,
  AutoFillComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
