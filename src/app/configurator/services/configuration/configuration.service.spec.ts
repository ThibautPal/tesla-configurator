import { TestBed } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';
import { Configuration } from '../../models/configuration.model';

describe('ConfigurationService', () => {
	let service: ConfigurationService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ConfigurationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should disable step 2 and 3', () => {
		service.configuration = {
			model: undefined,
			color: undefined,
			config: undefined,
			towHitch: undefined,
			yoke: undefined,
		};
		expect(service.hasRight('step1')).toBe(true);
		expect(service.hasRight('step2')).toBe(false);
		expect(service.hasRight('step3')).toBe(false);
	})

	it('should disable step 3', () => {

		service.configuration = {
			model: {
				"code": "X",
				"description": "Model X",
			},
			color: {
				"code": "blue",
				"description": "Deep Blue Metallic",
				"price": 0
			},
			config: undefined
		}
		expect(service.hasRight('step1')).toBe(true);
		expect(service.hasRight('step2')).toBe(true);
		expect(service.hasRight('step3')).toBe(false);
	})

	it('should enable all step', () => {
		service.configuration = {
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
			yoke: undefined
		}

		expect(service.hasRight('step1')).toBe(true);
		expect(service.hasRight('step2')).toBe(true);
		expect(service.hasRight('step3')).toBe(true);
	})
});
