import {Component} from '@angular/core';
import {OneSignal} from "onesignal-ngx";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'You Contribute';

	constructor(private oneSignal: OneSignal) {
		this.oneSignal.init({
			appId: "b4a87e78-7a84-4fc8-b06c-8cd46f9ba1be"
		}).then(() => {
			console.log("Abone Olundu!")
		});
	}
}
