import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { ModelsService } from '../../services/models/models.service';
import { Model } from '../../models/model.model';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { provideImgixLoader } from '@angular/common';

@Component({
	selector: 'app-step1',
	standalone: true,
	imports: [StepperComponent, FormsModule],
	templateUrl: './step1.component.html',
	styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit, OnDestroy {

	models: Model[] = []
	modelsSubscription: Subscription = Subscription.EMPTY;

	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private modelsService: ModelsService,
		private configurationService: ConfigurationService
	) { }

	ngOnInit(): void {
		this.modelsSubscription = this.modelsService.getModels().subscribe(models => {
			this.models = models
		})

		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()

		console.log(this.models)
		console.log(this.configuration)
	}
	ngOnDestroy(): void {
		this.modelsSubscription.unsubscribe()
		this.configurationSubscription.unsubscribe()
	}

	getColorsConfig() {
		return this.models.find(x => x.code === this.configuration?.model?.code)?.colors
	}

	resetColor() {
		this.configuration.color = this.models.find(x => x.code === this.configuration?.model?.code)?.colors[0]
	}

	getUrlImg() {
		return "https://interstate21.com/tesla-app/images/" + this.configuration?.model?.code + "/" + this.configuration?.color?.code + ".jpg"
	}
}
