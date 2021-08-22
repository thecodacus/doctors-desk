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
			link: "/app/patient",
		},
		{
			name: "prescription",
			icon: faFilePrescription,
			link: "/app/prescribe",
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
