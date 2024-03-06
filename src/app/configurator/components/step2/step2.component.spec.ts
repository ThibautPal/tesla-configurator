import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step2Component } from './step2.component';
import { Config } from '../../models/config.model';
import { Option } from '../../models/option.model';
import { OptionsService } from '../../services/options/options.service';

describe('Step2Component', () => {
	let component: Step2Component;
	let fixture: ComponentFixture<Step2Component>;

	let testDataOption: Option = { "configs": [{ "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }, { "id": 2, "description": "Plaid - Tri Motor All-Wheel Drive", "range": 333, "speed": 149, "price": 94990 }], "towHitch": true, "yoke": true }

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Step2Component],
			providers: [OptionsService]
		}).compileComponents();

		fixture = TestBed.createComponent(Step2Component);
		component = fixture.componentInstance
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


		// const req = httpTestingController.expectOne(testUrl);
		// expect(req.request.method).toEqual('GET');
		// req.flush(testDataOption);
		// httpTestingController.verify();
		// expect(component.option).toEqual(
		// 	{ "configs": [{ "id": 1, "description": "Dual Motor All-Wheel Drive", "range": 348, "speed": 149, "price": 79990 }, { "id": 2, "description": "Plaid - Tri Motor All-Wheel Drive", "range": 333, "speed": 149, "price": 94990 }], "towHitch": true, "yoke": true }
		// )

	});


});
