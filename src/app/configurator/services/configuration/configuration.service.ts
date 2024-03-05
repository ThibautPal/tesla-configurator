import { Injectable } from '@angular/core';
import { Configuration } from '../../models/configuration.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {
	private configuration: Configuration = {}

	configurationSubject = new Subject<Configuration>();

	emitConfiguration() {
		this.configurationSubject.next(this.configuration)
	}
}
