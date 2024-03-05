import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgTeslaComponent } from './img-tesla.component';

describe('ImgTeslaComponent', () => {
	let component: ImgTeslaComponent;
	let fixture: ComponentFixture<ImgTeslaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ImgTeslaComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ImgTeslaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
