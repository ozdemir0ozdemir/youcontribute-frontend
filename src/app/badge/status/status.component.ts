import {Component, OnInit} from '@angular/core';
import {IssueChallengeStatus} from "../../model/issue-challenge-status";

@Component({
	selector: 'badge-status',
	templateUrl: './status.component.html',
	styleUrl: './status.component.css',
	inputs: ['badgeStatus: badge-status']
})
export class StatusComponent implements OnInit {

	private badgeMap:Map<IssueChallengeStatus, string> = new Map( [
		[IssueChallengeStatus.PENDING, "bg-secondary"],
		[IssueChallengeStatus.ACCEPTED, "bg-primary"],
		[IssueChallengeStatus.REJECTED, "bg-danger"],
		[IssueChallengeStatus.COMPLETED, "bg-success"],
	]);

	badgeClass: any = "bg-secondary";
	badgeStatus: IssueChallengeStatus = IssueChallengeStatus.PENDING;

	constructor() {

	}

	ngOnInit() {

		this.badgeClass = this.badgeMap.get(this.badgeStatus);
	}


}
