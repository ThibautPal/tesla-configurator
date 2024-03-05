import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImgTeslaComponent } from './configurator/components/img-tesla/img-tesla.component';
import { StepperComponent } from './configurator/components/stepper/stepper.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AsyncPipe, JsonPipe, RouterOutlet, ImgTeslaComponent, StepperComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title: string = "tesla-configurator"
}
