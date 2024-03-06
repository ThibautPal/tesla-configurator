import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModelsColorsService } from '../../services/models-colors/models-colors.service';
import { Model } from '../../models/model.model';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Configuration } from '../../models/configuration.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Color } from '../../models/color.model';
import { ModelsColors } from '../../models/modelsColors.model';

@Component({
	selector: 'app-step1',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './step1.component.html',
	styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit, OnDestroy {

	modelsColors: ModelsColors[] = []
	modelsColorsSubscription: Subscription = Subscription.EMPTY;

	configuration: Configuration = {}
	configurationSubscription: Subscription = Subscription.EMPTY;

	constructor(
		private modelsColorsService: ModelsColorsService,
		private configurationService: ConfigurationService
	) { }

	ngOnInit(): void {
		this.modelsColorsSubscription = this.modelsColorsService.getModelsColors().subscribe(modelsColors => {
			this.modelsColors = modelsColors
		})

		this.configurationSubscription = this.configurationService.configurationSubject.subscribe(
			(configuration: Configuration) => {
				this.configuration = configuration
			}
		);
		this.configurationService.emitConfiguration()
	}
	ngOnDestroy(): void {
		this.modelsColorsSubscription.unsubscribe()
		this.configurationSubscription.unsubscribe()
	}

	getColorsConfig(): Color[] | undefined {
		return this.modelsColors.find(x => x.code === this.configuration?.model?.code)?.colors
	}

	resetModel(): void {
		this.configuration.color = this.modelsColors.find(x => x.code === this.configuration?.model?.code)?.colors[0]
		delete this.configuration.config
		delete this.configuration.yoke
		delete this.configuration.towHitch
	}

	public compareObject(object1: Model | Color, object2: Model | Color): boolean {
		if (object1.code === object2.code) {
			return true;
		}
		else {
			return false
		}
	}
}
