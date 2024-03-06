import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Component } from './step3.component';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from '../../models/configuration.model';

describe('Step3Component', () => {
	let component: Step3Component;
	let fixture: ComponentFixture<Step3Component>;
	let testDataConfiguration1: Configuration = {
		model: {
			"code": "X",
			"description": "Model X",
		},
		color: {
			"code": "blue",
			"description": "Deep Blue Metallic",
			"price": 0
		},
		config: {
			"id": 1,
			"description": "Dual Motor All-Wheel Drive",
			"range": 348,
			"speed": 149,
			"price": 79990
		},
		towHitch: true,
		yoke: true
	}
	let testDataConfiguration2: Configuration = {
		model: {
			"code": "X",
			"description": "Model X",
		},
		color: {
			"code": "white",
			"description": "Pearl White Multi-Coat",
			"price": 6500
		},
		config: {
			"id": 1,
			"description": "Dual Motor All-Wheel Drive",
			"range": 348,
			"speed": 149,
			"price": 79990
		},
		towHitch: false,
		yoke: false
	}
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Step3Component, HttpClientModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Step3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should get total cost', () => {
		component.configuration = testDataConfiguration1
		expect(component.getTotalCost()).toEqual(81990);
		component.configuration = testDataConfiguration2
		expect(component.getTotalCost()).toEqual(86490);
	});
});
