import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class RepositoryService {

	constructor(private http: HttpClient) {

	}

	import( organization: string, repository: string ): Observable<any> {
		return this.http.post<any>(`${environment.API_URL}/repository`, {organization: organization, repository: repository});
	}
}
