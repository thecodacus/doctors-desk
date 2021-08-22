import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { GeneralService } from "./general.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(public geberalSvc: GeneralService) {}
	async login(email: string, password: string): Promise<boolean> {
		this.loggedIn$.next(true); //TODO: Remove this after login is implemented
		return true; //TODO: Remove this after login is implemented
		if (email == "anirbankar21@gmail.com" && password == "admin") {
			this.geberalSvc.setCurrentUser({
				name: "Anirban Kar",
				role: "admin",
				username: "anirbankar21@gmail.com",
			});
			this.loggedIn$.next(true);
			return true;
		}
		this.loggedIn$.next(false);
		return false;
	}
	isLoggedIn() {
		return this.loggedIn$.asObservable();
	}
	register(email: string, password: string) {}
}
