import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../../models/option.model';

@Injectable({
	providedIn: 'root'
})
export class OptionsService {

	constructor(private httpClient: HttpClient) { }

	getOption(modelCode: string | undefined): Observable<Option> {
		return this.httpClient.get<Option>('/options/' + modelCode);
	}

}
