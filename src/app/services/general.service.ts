import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";
import { IUser } from "../interfaces/user.interface";

@Injectable({
	providedIn: "root",
})
export class GeneralService {
	private currentPage$: BehaviorSubject<string> = new BehaviorSubject("");
	private currentUser$: Subject<IUser> = new ReplaySubject(1);
	constructor() {}
	getCurrentPageName() {
		return this.currentPage$.asObservable();
	}
	setCurrentPageName(name: string) {
		this.currentPage$.next(name);
	}
	getCurrentUser() {
		return this.currentUser$.asObservable();
	}
	setCurrentUser(user: IUser) {
		this.currentUser$.next(user);
	}
}
