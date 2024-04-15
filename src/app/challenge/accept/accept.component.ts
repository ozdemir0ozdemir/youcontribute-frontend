import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChallengeService} from "../../service/challenge.service";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.css'
})
export class AcceptComponent implements OnInit {

	constructor( private challengeService: ChallengeService,
	             private activatedRoute: ActivatedRoute ) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe({
			next: params => {
				this.accept(params['id']);

			}
		});

	}

	private accept( id:number ): void {
		this.challengeService.accept(id).subscribe({
			next: next => { console.log(next)},
			error: err => { console.log(err)},
		});
	}

}
