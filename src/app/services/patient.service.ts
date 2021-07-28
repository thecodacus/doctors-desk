import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPatient } from "../interfaces/patient.interface";

let patientData: IPatient[] = [
	{
		name: "test",
		age: 28,
		address: "abcd",
		sex: "m",
		phone: "8768",
	},
	{
		name: "test2",
		age: 28,
		address: "abcd",
		sex: "m",
		phone: "8768",
	},
	{
		name: "test3",
		age: 28,
		address: "abcd",
		sex: "m",
		phone: "8768",
	},
	{
		name: "test4",
		age: 28,
		address: "abcd",
		sex: "m",
		phone: "8768",
	},
];

@Injectable({
	providedIn: "root",
})
export class PatientService {
	private patients$: BehaviorSubject<IPatient[]> = new BehaviorSubject([] as IPatient[]);
	constructor() {
		this.patients$.next(patientData);
	}
	getPatients() {
		return this.patients$.asObservable();
	}
}
