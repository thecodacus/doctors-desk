import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IPatient } from "src/app/interfaces/patient.interface";
import { GeneralService } from "src/app/services/general.service";
import { PatientService } from "src/app/services/patient.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	filteredPatients: Observable<IPatient[]>;
	filterQuery: BehaviorSubject<string> = new BehaviorSubject("");
	constructor(public patientSvc: PatientService, public generalSvc: GeneralService) {
		this.generalSvc.setCurrentPageName("Patients");
		this.filteredPatients = combineLatest([patientSvc.getPatients(), this.filterQuery]).pipe(
			map(([patients, query]) => {
				if (query == "") return patients;
				return patients.filter((p) => p.name.includes(query));
			})
		);
	}

	ngOnInit(): void {}
	onSearch(query: string) {
		this.filterQuery.next(query);
	}
}
