import { Component } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-step3',
	standalone: true,
	imports: [CurrencyPipe],
	templateUrl: './step3.component.html',
	styleUrl: './step3.component.scss'
})
export class Step3Component {
	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;
	otherOptionsPrice: number = 1000

	constructor(
		private configurationService: ConfigurationService
	) { }

	ngOnInit(): void {
		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
				console.log(this.configuration)
			}
		);
		this.configurationService.emitConfiguration()
	}
	ngOnDestroy(): void {
		this.configurationSubscription.unsubscribe()
	}

	getTotalCost(): number {
		let total: number = 0
		if (this.configuration.config?.price) {
			total += this.configuration.config.price
		}
		if (this.configuration.color?.price) {
			total += this.configuration.color.price
		}
		if (this.configuration.towHitch) {
			total += this.otherOptionsPrice
		}
		if (this.configuration.yoke) {
			total += this.otherOptionsPrice
		}
		return total
	}
}
