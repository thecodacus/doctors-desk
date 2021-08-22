import { Component, OnInit } from "@angular/core";
import { GeneralService } from "src/app/services/general.service";

@Component({
	selector: "app-private",
	templateUrl: "./private.component.html",
	styleUrls: ["./private.component.scss"],
})
export class PrivateComponent implements OnInit {
	constructor(public generalSvc: GeneralService) {}

	ngOnInit(): void {}
}
