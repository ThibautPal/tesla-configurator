import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Step3Component } from '../step3/step3.component';


describe('StepperComponent', () => {
	let component: StepperComponent;
	let fixture: ComponentFixture<StepperComponent>;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [StepperComponent, RouterTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(StepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		router = TestBed.inject(Router);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should route to dashboard route when click on navigateTo', () => {
		const spy = spyOn(router, 'navigate');
		component.navigateTo('step3');
		expect(router.navigate).toHaveBeenCalledWith(['step3']);
	})

});
