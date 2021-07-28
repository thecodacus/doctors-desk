import { Component } from "@angular/core";
import { GeneralService } from "./services/general.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "DoctorsDesk";
	constructor(public generalSvc: GeneralService) {}
}
