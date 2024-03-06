import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step1Component } from './step1.component';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from '../../models/configuration.model';
import { ModelsColors } from '../../models/modelsColors.model';
import { Color } from '../../models/color.model';
import { Model } from '../../models/model.model';

describe('Step1Component', () => {
	let component: Step1Component;
	let fixture: ComponentFixture<Step1Component>;
	let testDataConfiguration: Configuration = {
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
		yoke: false
	}
	let testDateModelColors: ModelsColors[] = [{ "code": "S", "description": "Model S", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }, { "code": "black", "description": "Solid Black", "price": 0 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }, { "code": "grey", "description": "Stealth Grey", "price": 0 }, { "code": "red", "description": "Ultra Red", "price": 0 }] }, { "code": "X", "description": "Model X", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }, { "code": "black", "description": "Solid Black", "price": 0 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }, { "code": "grey", "description": "Stealth Grey", "price": 0 }, { "code": "red", "description": "Ultra Red", "price": 0 }] }, { "code": "C", "description": "Cybertruck", "colors": [{ "code": "grey", "description": "Stainless Steel", "price": 0 }, { "code": "black", "description": "Satin Black", "price": 6500 }, { "code": "white", "description": "Satin White", "price": 6500 }] }, { "code": "3", "description": "Model 3", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 1000 }, { "code": "black", "description": "Solid Black", "price": 1500 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 1000 }, { "code": "grey", "description": "Midnight Silver Metallic", "price": 0 }, { "code": "red", "description": "Red Multi-Coat", "price": 2000 }] }, { "code": "Y", "description": "Model Y", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 1000 }, { "code": "black", "description": "Solid Black", "price": 2000 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 1000 }, { "code": "grey", "description": "Midnight Silver Metallic", "price": 0 }, { "code": "red", "description": "Red Multi-Coat", "price": 2000 }] }]

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Step1Component, HttpClientModule]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Step1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.modelsColors = testDateModelColors
		component.configuration = testDataConfiguration
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should get Color Config', () => {
		expect(component.getColorsConfig()).toEqual(
			[{ "code": "white", "description": "Pearl White Multi-Coat", "price": 0 },
			{ "code": "black", "description": "Solid Black", "price": 0 },
			{ "code": "blue", "description": "Deep Blue Metallic", "price": 0 },
			{ "code": "grey", "description": "Stealth Grey", "price": 0 },
			{ "code": "red", "description": "Ultra Red", "price": 0 }]
		);
	});

	it('should reset model', () => {
		component.resetModel()
		expect(component.configuration).toEqual({
			model: {
				"code": "X",
				"description": "Model X",
			},
			color: {
				"code": "white",
				"description": "Pearl White Multi-Coat",
				"price": 0
			}
		});
	});

	it('should compare model', () => {
		let model1: Model = { "code": "X", "description": "Model X" }
		let model2: Model = { "code": "X", "description": "Model X" }
		let model3: Model = { "code": "S", "description": "Model S" }
		expect(component.compareObject(model1, model2)).toBe(true)
		expect(component.compareObject(model1, model3)).toBe(false)
	});

	it('should compare color', () => {
		let color1: Color = { "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }
		let color2: Color = { "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }
		let color3: Color = { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }
		expect(component.compareObject(color1, color2)).toBe(true)
		expect(component.compareObject(color1, color3)).toBe(false)
	});
});
