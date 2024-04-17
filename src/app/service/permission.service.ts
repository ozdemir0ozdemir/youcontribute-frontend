import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class PermissionService implements CanActivate {

	constructor() {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
		return localStorage.getItem("token") != null;
	}


}
