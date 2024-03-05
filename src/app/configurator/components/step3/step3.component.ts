import { Component } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Subscription } from 'rxjs';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
	selector: 'app-step3',
	standalone: true,
	imports: [StepperComponent],
	templateUrl: './step3.component.html',
	styleUrl: './step3.component.scss'
})
export class Step3Component {
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
		console.log(this.configuration)
	}
	ngOnDestroy(): void {
		this.configurationSubscription.unsubscribe()
	}
}
