import { Injectable } from '@angular/core';
import { Step } from '../../models/step.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StepperService {
	private steps: Step[] = [];
	stepsSubject = new Subject<Step[]>();
	emitSteps() {
		this.stepsSubject.next(this.steps)
	}

	newSteps() {
		this.steps = [
			{ label: "Step 1", disabled: false, link: 'step1' },
			{ label: "Step 2", disabled: true, link: 'step2' },
			{ label: "Step 3", disabled: true, link: 'step3' }
		]
		this.emitSteps()
	}
}
