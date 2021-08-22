import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./pages/private/home/home.component";
import { NewPrescriptionComponent } from "./pages/private/new-prescription/new-prescription.component";
import { PrivateComponent } from "./pages/private/private.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { PublicComponent } from "./pages/public/public.component";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "/app",
	},
	{
		path: "app",
		canActivate: [AuthGuard],

		component: PrivateComponent,
		children: [
			{
				path: "",
				pathMatch: "full",
				redirectTo: "patient",
			},
			{
				path: "patient",
				pathMatch: "full",
				component: HomeComponent,
			},
			{
				path: "prescribe",
				pathMatch: "full",
				component: NewPrescriptionComponent,
			},
		],
	},
	{
		path: "public",
		component: PublicComponent,
		children: [
			{
				path: "login",
				pathMatch: "full",
				component: LoginComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
