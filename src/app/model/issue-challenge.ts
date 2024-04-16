import {Issue} from "./issue";
import {IssueChallengeStatus} from "./issue-challenge-status";

export class IssueChallenge {
	id?:number;
	issue?: Issue;
	status:IssueChallengeStatus = IssueChallengeStatus.PENDING;
	createdAt?:Date;
	updatedAt?:string;
}
