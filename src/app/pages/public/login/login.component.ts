import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	constructor(public authSvc: AuthService, private router: Router) {}

	ngOnInit(): void {}
	onLogin(data: { username: string; password: string; remember: boolean }) {
		this.authSvc.login(data.username, data.password).then((success) => {
			if (success) this.router.navigate(["/app"]);
			else {
				console.log("error login");
			}
		});
	}
}
