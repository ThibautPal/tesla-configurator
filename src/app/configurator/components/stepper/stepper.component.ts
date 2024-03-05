import { Component, OnInit, OnDestroy } from '@angular/core';
import { Step } from '../../models/step.model';
import { Subscription } from 'rxjs'
import { StepperService } from '../../services/stepper/stepper.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-stepper',
	standalone: true,
	imports: [],
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit, OnDestroy {

	steps: Step[] = []
	stepsSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private stepperService: StepperService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.stepsSubscription = this.stepperService.stepsSubject.subscribe(
			(steps: Step[]) => {
				this.steps = steps
			}
		);
		this.stepperService.emitSteps()

		if (this.steps.length === 0) {
			this.stepperService.newSteps()
		}
	}
	ngOnDestroy(): void {
		this.stepsSubscription.unsubscribe()
	}
	navigateTo(link: string) {
		this.router.navigate([link])
	}
}

