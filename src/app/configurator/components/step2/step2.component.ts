import { Component } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-step2',
	standalone: true,
	imports: [StepperComponent],
	templateUrl: './step2.component.html',
	styleUrl: './step2.component.scss'
})
export class Step2Component {
	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private configurationService: ConfigurationService
	) { }

	ngOnInit(): void {
		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()

		console.log(this.configuration.model)
		console.log(this.configuration.color)
	}
	ngOnDestroy(): void {
		this.configurationSubscription.unsubscribe()
	}
}
