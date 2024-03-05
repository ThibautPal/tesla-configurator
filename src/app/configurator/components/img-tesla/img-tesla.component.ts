import { Component, Input, OnInit } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
	selector: 'app-img-tesla',
	standalone: true,
	imports: [],
	templateUrl: './img-tesla.component.html',
	styleUrl: './img-tesla.component.scss'
})
export class ImgTeslaComponent implements OnInit {

	constructor(
		private configurationService: ConfigurationService
	) { }

	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	ngOnInit(): void {
		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()
	}
	getUrlImg() {
		return "https://interstate21.com/tesla-app/images/" + this.configuration?.model?.code + "/" + this.configuration?.color?.code + ".jpg"
	}
}
