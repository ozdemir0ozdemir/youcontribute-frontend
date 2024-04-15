import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IssueService} from "../service/issue.service";
import {Issue} from "../model/issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit{

	issues?: Issue[] = []

	constructor(private activatedRoute: ActivatedRoute,
	            private issueService: IssueService ) {


	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe({
			next: params => {
				this.issueService.list(params['id']).subscribe({
					next: value => { this.issues = value; }
				});
			}
		});
    }


}
