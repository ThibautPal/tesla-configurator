import { TestBed } from '@angular/core/testing';
import { ModelsColorsService } from './models-colors.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ModelsColors } from '../../models/modelsColors.model';

describe('ModelsColorsService', () => {
    let service: ModelsColorsService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let testUrl: string = "/models"
    let testData: ModelsColors[] = [{ "code": "S", "description": "Model S", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }, { "code": "black", "description": "Solid Black", "price": 0 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }, { "code": "grey", "description": "Stealth Grey", "price": 0 }, { "code": "red", "description": "Ultra Red", "price": 0 }] }, { "code": "X", "description": "Model X", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 0 }, { "code": "black", "description": "Solid Black", "price": 0 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 0 }, { "code": "grey", "description": "Stealth Grey", "price": 0 }, { "code": "red", "description": "Ultra Red", "price": 0 }] }, { "code": "C", "description": "Cybertruck", "colors": [{ "code": "grey", "description": "Stainless Steel", "price": 0 }, { "code": "black", "description": "Satin Black", "price": 6500 }, { "code": "white", "description": "Satin White", "price": 6500 }] }, { "code": "3", "description": "Model 3", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 1000 }, { "code": "black", "description": "Solid Black", "price": 1500 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 1000 }, { "code": "grey", "description": "Midnight Silver Metallic", "price": 0 }, { "code": "red", "description": "Red Multi-Coat", "price": 2000 }] }, { "code": "Y", "description": "Model Y", "colors": [{ "code": "white", "description": "Pearl White Multi-Coat", "price": 1000 }, { "code": "black", "description": "Solid Black", "price": 2000 }, { "code": "blue", "description": "Deep Blue Metallic", "price": 1000 }, { "code": "grey", "description": "Midnight Silver Metallic", "price": 0 }, { "code": "red", "description": "Red Multi-Coat", "price": 2000 }] }]

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ModelsColorsService]
        });
        service = TestBed.inject(ModelsColorsService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return modelsColors', () => {
        service.getModelsColors()
            .subscribe(result =>
                expect(result).toEqual(testData)
            );
        const req = httpTestingController.expectOne(testUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(testData);
        httpTestingController.verify();
    });
});
