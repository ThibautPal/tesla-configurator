import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step2Component } from './step2.component';
import { Config } from '../../models/config.model';
import { Option } from '../../models/option.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Configuration } from '../../models/configuration.model';

describe('Step2Component', () => {
	let component: Step2Component;
	let fixture: ComponentFixture<Step2Component>;
	let configurationService: ConfigurationService
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let testUrl: string = "/options/X"
	let testDataConfiguration: Configuration = { model: { "code": "X", "description": "Model X", }, color: { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }, config: { "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }, towHitch: true, yoke: true }
	let testDataOption: Option = { "configs": [{ "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }, { "id": 2, "description": "Plaid - Tri Motor All-Wheel Drive", "range": 333, "speed": 149, "price": 94990 }], "towHitch": true, "yoke": true }

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ConfigurationService]
		}).compileComponents();

		fixture = TestBed.createComponent(Step2Component);
		component = fixture.componentInstance
		configurationService = TestBed.inject(ConfigurationService);
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		configurationService.configuration = testDataConfiguration
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should compare config', () => {
		let config1: Config = { "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }
		let config2: Config = { "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }
		let config3: Config = { "id": 2, "description": "Dual Motor All-Wheel Drive", "range": 340, "speed": 112, "price": 79990 }
		expect(component.compareConfig(config1, config2)).toBe(true)
		expect(component.compareConfig(config1, config3)).toBe(false)
	});

	it('should check option value', () => {
		const req = httpTestingController.expectOne(testUrl);
		expect(req.request.method).toEqual('GET');
		req.flush(testDataOption);
		httpTestingController.verify();
		expect(component.option).toEqual(
			{ "configs": [{ "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }, { "id": 2, "description": "Plaid - Tri Motor All-Wheel Drive", "range": 333, "speed": 149, "price": 94990 }], "towHitch": true, "yoke": true }
		)
	});


});
