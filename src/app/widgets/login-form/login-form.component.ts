import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
	@Output() login: EventEmitter<{ username: string; password: string; remember: boolean }> = new EventEmitter();
	username: string = "";
	password: string = "";
	remember: boolean = false;
	constructor() {}

	ngOnInit(): void {}
	onLogin(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.login.emit({
			username: this.username,
			password: this.password,
			remember: this.remember,
		});
	}
}
