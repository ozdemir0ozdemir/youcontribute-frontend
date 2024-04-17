import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	authorizeGithub() {
		window.location.href = `${environment.API_URL}/auth/github`;
	}
}
