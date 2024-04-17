import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {GithubAccessTokenReponse} from "../model/github-access-token-reponse";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) {
	}

	getGithubAccessToken(code:string): Observable<GithubAccessTokenReponse> {
		return this.http.post<GithubAccessTokenReponse>(
			`${environment.API_URL}/auth/github`,
			{'code' : code}
		);
	}
}
