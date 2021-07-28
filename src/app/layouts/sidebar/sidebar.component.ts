import { Component, OnInit } from "@angular/core";
import { faFilePrescription, faPrescription, faUsers } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
	menuItems: any[] = [
		{
			name: "patients",
			icon: faUsers,
			link: "/",
		},
		{
			name: "prescription",
			icon: faFilePrescription,
			link: "/prescribe",
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
