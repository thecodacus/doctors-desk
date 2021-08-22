import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { faEdit, faPlusCircle, faPrint, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { GeneralService } from "src/app/services/general.service";

@Component({
	selector: "app-new-prescription",
	templateUrl: "./new-prescription.component.html",
	styleUrls: ["./new-prescription.component.scss"],
})
export class NewPrescriptionComponent implements OnInit {
	prescriptionForm = new FormGroup({
		patientInfo: new FormGroup({
			firstName: new FormControl(""),
			lastName: new FormControl(""),
			age: new FormControl(""),
			sex: new FormControl(""),
			weight: new FormControl(""),
			address: new FormControl(""),
		}),
		complains: new FormGroup({
			cheifComplain: new FormControl(""),
		}),
		observations: new FormGroup({
			clinical: new FormControl(""),
		}),
		medicineInfo: new FormArray([
			new FormGroup({
				name: new FormControl(""),
				dosage: new FormControl(""),
				timings: new FormControl(""),
				periods: new FormControl(""),
				instruction: new FormControl(""),
			}),
		]),
	});
	openMedForm: boolean = false;
	addIcon = faPlusCircle;
	editIcon = faEdit;
	delIcon = faTrashAlt;
	saveIcon = faSave;
	printIcon = faPrint;

	constructor(private generalSvc: GeneralService) {
		this.generalSvc.setCurrentPageName("Prescription");
	}

	ngOnInit(): void {}
	medicineArray(): FormArray {
		return this.prescriptionForm.get("medicineInfo") as FormArray;
	}
	openNewMedicineForm() {
		// this.openMedForm = true;
		// this.newMedForm.reset();
	}
	addNewMedicine() {
		//this.openMedForm = false;
		//this.this.newMedForm.getRawValue()
		(this.prescriptionForm.get("medicineInfo") as FormArray).push(
			new FormGroup({
				name: new FormControl(""),
				dosage: new FormControl(""),
				timings: new FormControl(""),
				periods: new FormControl(""),
				instruction: new FormControl(""),
			})
		);
	}
	removeMedicine(index: number) {
		(this.prescriptionForm.get("medicineInfo") as FormArray).removeAt(index);
	}

	savePrescription() {}
	printPrescription() {}
}
