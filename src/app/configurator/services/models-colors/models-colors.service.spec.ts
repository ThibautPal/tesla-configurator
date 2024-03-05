import { TestBed } from '@angular/core/testing';
import { ModelsColorsService } from './models-colors.service';
import { HttpClientModule } from '@angular/common/http';

describe('ModelsColorsService', () => {
    let service: ModelsColorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientModule] });
        service = TestBed.inject(ModelsColorsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
