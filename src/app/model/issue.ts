import {Repository} from "./repository";

export interface Issue {
	id:number;
	url:string;
	githubId:number;
	repository:Repository;
	state:string;
	title:string;
	body:string;
	issueNumber:number;
}
