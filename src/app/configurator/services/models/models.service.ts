import { Injectable } from '@angular/core';
import { Model } from '../../models/model.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ModelsService {
	constructor(private httpClient: HttpClient) { }

	getModels(): Observable<Model[]> {
		return this.httpClient.get<Model[]>('/models');
	}
}
