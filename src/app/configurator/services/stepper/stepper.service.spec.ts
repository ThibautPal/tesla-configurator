import { TestBed } from '@angular/core/testing';
import { StepperService } from './stepper.service';

describe('StepperService', () => {
	let service: StepperService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StepperService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create new step', () => {
		expect(service.steps).toEqual([])
		service.newSteps()
		expect(service.steps).toEqual([
			{ label: "Step 1", link: 'step1' },
			{ label: "Step 2", link: 'step2' },
			{ label: "Step 3", link: 'step3' }
		])
	})
});
