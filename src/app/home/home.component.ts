import {Component, OnInit} from '@angular/core';
import {Repository} from "../model/repository";
import {RepositoryService} from "../service/repository.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

	 repositories: Repository[] = [];
	 loading:boolean = false;

	constructor( private repositoryService: RepositoryService,
	             private toastr: ToastrService ) {
	}


	ngOnInit(): void {
		this.list();
	}

	 list() {
		this.loading = true;
		 this.repositoryService.list().subscribe({
			 next: ( repos:Repository[] ) => {
				 this.loading = false;
				 this.repositories = repos
			 },
			 error: ( err ) => {
				 this.loading = false;
				 this.toastr.error("Cannot fetch the repositories", "Error");
			 },
			 complete: () => {
				 this.loading = false;
			 }

		 });
	 }

}
