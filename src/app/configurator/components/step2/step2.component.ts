import { Component } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Subscription } from 'rxjs';
import { OptionsService } from '../../services/options/options.service';
import { Option } from '../../models/option.model';
import { FormsModule } from '@angular/forms';
import { Config } from '../../models/config.model';
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-step2',
	standalone: true,
	imports: [FormsModule, CurrencyPipe],
	templateUrl: './step2.component.html',
	styleUrl: './step2.component.scss'
})
export class Step2Component {

	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	option: Option = {}
	optionsSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private configurationService: ConfigurationService,
		private optionsService: OptionsService
	) { }

	ngOnInit(): void {

		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()

		this.optionsSubscription = this.optionsService.getOption(this.configuration?.model?.code).subscribe(option => {
			this.option = option
		})

	}
	ngOnDestroy(): void {
		this.configurationSubscription.unsubscribe()
	}

	public compareConfig(object1: Config, object2: Config): boolean {
		if (object1.id === object2.id) {
			return true;
		}
		else {
			return false
		}
	}
}
