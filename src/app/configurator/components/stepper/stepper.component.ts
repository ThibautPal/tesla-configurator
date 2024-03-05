import { Component, OnInit, OnDestroy } from '@angular/core';
import { Step } from '../../models/step.model';
import { Subscription } from 'rxjs'
import { StepperService } from '../../services/stepper/stepper.service';
import { Router } from '@angular/router';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';

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

	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private stepperService: StepperService,
		private router: Router,
		private configurationService: ConfigurationService
	) { }

	ngOnInit(): void {
		this.stepsSubscription = this.stepperService.stepsSubject.subscribe(
			(steps: Step[]) => {
				this.steps = steps
			}
		);
		this.stepperService.emitSteps()

		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()

		if (this.steps.length === 0) {
			this.stepperService.newSteps()
		}
	}
	ngOnDestroy(): void {
		this.stepsSubscription.unsubscribe()
	}
	navigateTo(link: string): void {
		this.router.navigate([link])
	}
	isStepDisabled(step: string): boolean {
		return this.configurationService.hasRight(step)
	}
}

