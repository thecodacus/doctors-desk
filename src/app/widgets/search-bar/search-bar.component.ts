import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounce, debounceTime, takeUntil } from "rxjs/operators";

@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit, OnDestroy {
	content: string;
	@Output() data: EventEmitter<string> = new EventEmitter(true);
	dataObs: Subject<string> = new Subject();
	unsubscribe$: Subject<boolean> = new Subject();
	constructor() {
		this.content = "";
		this.dataObs.pipe(debounceTime(100), takeUntil(this.unsubscribe$)).subscribe((data) => {
			this.data.emit(data);
		});
	}

	ngOnInit(): void {}
	onKeyPress(event: KeyboardEvent) {
		this.dataObs.next((event.target as any).innerText);
		console.log((event.target as any).innerText);
	}
	ngOnDestroy() {
		this.unsubscribe$.next(true);
	}
}
