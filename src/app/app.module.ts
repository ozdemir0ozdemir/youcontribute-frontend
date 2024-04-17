import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {ImportComponent} from './import/import.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { IssueListComponent } from './issue-list/issue-list.component';
import { AcceptComponent } from './challenge/accept/accept.component';
import { RejectComponent } from './challenge/reject/reject.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { StatusComponent } from './badge/status/status.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CallbackComponent } from './auth/callback/callback.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ImportComponent,
        IssueListComponent,
        AcceptComponent,
        RejectComponent,
        ChallengeListComponent,
        StatusComponent,
        SigninComponent,
        CallbackComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		HttpClientModule,
		ToastrModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
