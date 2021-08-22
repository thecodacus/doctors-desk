import { Component, ElementRef, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-auto-fill",
	templateUrl: "./auto-fill.component.html",
	styleUrls: ["./auto-fill.component.scss"],
})
export class AutoFillComponent implements OnInit {
	@Input() inputField: any | undefined;
	constructor() {}

	ngOnInit(): void {
		this.inputField?.addEventListener("keydown", this.onInputChange.bind(this));
	}
	onInputChange() {
		console.log(event);
	}
}
