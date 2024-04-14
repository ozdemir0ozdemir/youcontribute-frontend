import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RepositoryService} from "../services/repository.service";
import {ToastrService} from "ngx-toastr";
import {timeout} from "rxjs";


@Component({
	selector: 'app-import',
	templateUrl: './import.component.html',
	styleUrl: './import.component.css'
})
export class ImportComponent implements OnInit {

	importForm!: FormGroup<{ organization: FormControl<string | null>;
							 repository: FormControl<string | null>;
							}>;

	loading:boolean = false;

	constructor( private formBuilder: FormBuilder,
	             private repositoryService: RepositoryService,
	             private toastr: ToastrService) {
	}

	ngOnInit(): void {

		this.importForm = this.formBuilder.group({
			organization: ['', Validators.required],
			repository: ['', Validators.required]
		});

	}

	import(): void {
		this.loading = true;

		const organization:any = this.importForm.get("organization")?.value;
		const repository:any = this.importForm.get("repository")?.value;

		this.repositoryService.import( organization, repository )
			.subscribe({
				next: next => {
					this.loading = false;
					this.toastr.success("Repository başarıyla kaydedildi", "İşlem Başarılı")
				},
				error: err => {
					console.log(err );
					this.loading = false;
					this.toastr.error( JSON.stringify(err.error.message) , "İşlem Başarısız", {timeOut: 10000})
				},
				complete: () => {
					this.loading = false;
					console.log("Complated");
				}
			});

	}

}
