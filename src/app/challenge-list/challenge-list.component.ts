import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../service/challenge.service";
import {IssueChallenge} from "../model/issue-challenge";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrl: './challenge-list.component.css'
})
export class ChallengeListComponent implements OnInit {

	issueChallenges: IssueChallenge[] = [];


	constructor(private challengeService: ChallengeService) {
	}
	ngOnInit() {
		this.challengeService.findAll().subscribe({
			next: next=> { this.issueChallenges = next; },
			error: err => { console.log(err); },
		});
	}

}
