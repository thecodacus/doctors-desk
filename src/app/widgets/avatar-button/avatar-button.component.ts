import { Component, Input, OnInit } from "@angular/core";
import { IUser } from "src/app/interfaces/user.interface";

@Component({
	selector: "app-avatar-button",
	templateUrl: "./avatar-button.component.html",
	styleUrls: ["./avatar-button.component.scss"],
})
export class AvatarButtonComponent implements OnInit {
	@Input() options: IUser = { name: " ", role: "", username: "" };
	constructor() {}

	ngOnInit(): void {}
}
