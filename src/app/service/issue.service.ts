import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Issue} from "../model/issue";

@Injectable({
	providedIn: 'root'
})
export class IssueService {

	constructor(private http: HttpClient) {
	}

	list(repositoryId:number): Observable<Issue[]> {
		return this.http.get<Issue[]>(
			`${environment.API_URL}/repository/${repositoryId}/issues`
		);
	}
}
