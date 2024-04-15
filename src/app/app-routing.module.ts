import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ImportComponent} from "./import/import.component";
import {IssueListComponent} from "./issue-list/issue-list.component";
import {AcceptComponent} from "./challenge/accept/accept.component";
import {RejectComponent} from "./challenge/reject/reject.component";
import {ChallengeListComponent} from "./challenge-list/challenge-list.component";

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", component: HomeComponent },
	{ path: "import", component: ImportComponent },
	{ path: "repository/:id/issues", component: IssueListComponent },
	{ path: "challenge/:id/accept", component: AcceptComponent },
	{ path: "challenge/:id/reject", component: RejectComponent },
	{ path: "challenge", component: ChallengeListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
