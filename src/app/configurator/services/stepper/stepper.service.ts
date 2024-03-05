import { Injectable } from '@angular/core';
import { Step } from '../../models/step.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StepperService {
	private steps: Step[] = [];
	stepsSubject = new Subject<Step[]>();
	emitSteps(): void {
		this.stepsSubject.next(this.steps)
	}
	newSteps(): void {
		this.steps = [
			{ label: "Step 1", link: 'step1' },
			{ label: "Step 2", link: 'step2' },
			{ label: "Step 3", link: 'step3' }
		]
		this.emitSteps()
	}
}
