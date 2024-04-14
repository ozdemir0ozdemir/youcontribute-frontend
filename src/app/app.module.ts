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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ImportComponent
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
