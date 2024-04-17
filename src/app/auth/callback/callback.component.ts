import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {GithubAccessTokenReponse} from "../../model/github-access-token-reponse";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.css'
})
export class CallbackComponent implements OnInit {


	constructor( private activatedRoute: ActivatedRoute,
				 private router: Router,
	             private authService: AuthService ) {
	}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe({
			next: next => {
				this.getAccessToken( next['code']);
			},
			error: err => {
				// console.log(err);
			}
		});
	}

	getAccessToken(code: string) {

		this.authService.getGithubAccessToken(code).subscribe({
			next: (token: GithubAccessTokenReponse) => {
				localStorage.setItem("token", token.access_token);
				setTimeout(()=>{ this.router.navigate(['home'])}, 1000);
			}
		});
	}

}
