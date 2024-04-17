import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {IssueListComponent} from "./issue-list/issue-list.component";
import {AcceptComponent} from "./challenge/accept/accept.component";
import {RejectComponent} from "./challenge/reject/reject.component";
import {ChallengeListComponent} from "./challenge-list/challenge-list.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {CallbackComponent} from "./auth/callback/callback.component";
import {PermissionService} from "./service/permission.service";

const routes: Routes = [
	{ path: "home", component: HomeComponent, canActivate: [PermissionService] },
	{ path: "import", component: ImportComponent, canActivate: [PermissionService] },
	{ path: "repository/:id/issues", component: IssueListComponent, canActivate: [PermissionService] },
	{ path: "challenge/:id/accept", component: AcceptComponent, canActivate: [PermissionService] },
	{ path: "challenge/:id/reject", component: RejectComponent, canActivate: [PermissionService] },
	{ path: "challenge", component: ChallengeListComponent, canActivate: [PermissionService] },
	{ path: "signin", component: SigninComponent },
	{ path: "auth/github/callback", component: CallbackComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
