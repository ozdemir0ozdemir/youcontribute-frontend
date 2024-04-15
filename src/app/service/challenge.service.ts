import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IssueChallenge} from "../model/issue-challenge";

@Injectable({
	providedIn: 'root'
})
export class ChallengeService {

	constructor(private http: HttpClient) {
	}

	public accept(id:number): Observable<any> {
		return this.http.patch<any>(`${environment.API_URL}/challenge/${id}`, { status: "ACCEPTED" });
	}

	public reject(id:number): Observable<any> {
		return this.http.patch<any>(`${environment.API_URL}/challenge/${id}`, { status: "REJECTED" });
	}

	public findAll(): Observable<IssueChallenge[]> {
		return this.http.get<IssueChallenge[]>(`${environment.API_URL}/challenge`);
	}
}
