import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../../service/challenge.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrl: './reject.component.css'
})
export class RejectComponent implements OnInit {

	constructor( private challengeService: ChallengeService,
	             private activatedRoute: ActivatedRoute ) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe({
			next: params => {
				this.reject(params['id']);
			}
		});
	}

	private reject( id:number ): void {
		this.challengeService.reject(id).subscribe({
			next: next => { console.log(next)},
			error: err => { console.log(err)},
		});
	}
}
