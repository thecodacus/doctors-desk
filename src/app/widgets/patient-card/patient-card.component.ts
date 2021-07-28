import { Component, Input, OnInit } from "@angular/core";
import { IPatient } from "src/app/interfaces/patient.interface";

@Component({
	selector: "app-patient-card",
	templateUrl: "./patient-card.component.html",
	styleUrls: ["./patient-card.component.scss"],
})
export class PatientCardComponent implements OnInit {
	@Input("data") patientData: IPatient = {
		name: "",
		address: "",
		age: 0,
		sex: "",
		phone: "",
	};
	constructor() {}

	ngOnInit(): void {}
}
