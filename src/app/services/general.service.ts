import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class GeneralService {
	private currentPage$: BehaviorSubject<string> = new BehaviorSubject("");
	constructor() {}
	getCurrentPageName() {
		return this.currentPage$.asObservable();
	}
	setCurrentPageName(name: string) {
		this.currentPage$.next(name);
	}
}
