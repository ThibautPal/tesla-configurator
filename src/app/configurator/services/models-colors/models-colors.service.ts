import { Injectable } from '@angular/core';
import { ModelsColors } from '../../models/modelsColors.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ModelsColorsService {
	constructor(private httpClient: HttpClient) { }

	getModelsColors(): Observable<ModelsColors[]> {
		return this.httpClient.get<ModelsColors[]>('/models');
	}
}
