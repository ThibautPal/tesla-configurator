import { TestBed, getTestBed } from '@angular/core/testing';
import { OptionsService } from './options.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Option } from '../../models/option.model';

describe('OptionsService', () => {

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let service: OptionsService;
	let testUrl: string = "/options/C"
	let testData: Option = {
		"configs": [
			{
				"id": 1,
				"description": "Rear Wheel Drive",
				"range": 250,
				"speed": 110,
				"price": 60990
			},
			{
				"id": 2,
				"description": "Dual Motor All-Wheel Drive",
				"range": 340,
				"speed": 112,
				"price": 79990
			},
			{
				"id": 3,
				"description": "Cyberbeast - Tri Motor All-Wheel Drive",
				"range": 320,
				"speed": 130,
				"price": 99990
			}
		],
		"towHitch": true,
		"yoke": true
	}
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [OptionsService]
		})
		service = TestBed.inject(OptionsService);
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return option', () => {
		service.getOption('C')
			.subscribe(result =>
				expect(result).toEqual(testData)
			);
		const req = httpTestingController.expectOne('/options/C');
		expect(req.request.method).toEqual('GET');
		req.flush(testData);
		httpTestingController.verify();
	});
});
