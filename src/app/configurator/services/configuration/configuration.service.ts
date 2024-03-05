import { Injectable } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	private configuration: Configuration = {}

	configurationSubject = new Subject<Configuration>();

	emitConfiguration(): void {
		this.configurationSubject.next(this.configuration)
	}

	hasRight(step: string): boolean {
		let hasRight = false
		switch (step) {
			case "step1":
				hasRight = true;
				break;

			case "step2":
				if (this.configuration.model !== undefined && this.configuration.color !== undefined) {
					hasRight = true;
				}
				break;

			case "step3":
				if (this.configuration.config !== undefined) {
					hasRight = true;
				}
				break;
		}
		return hasRight
	}
}
