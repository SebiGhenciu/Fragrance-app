import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalProductsComponent } from './original-products.component';

describe('OriginalProductsComponent', () => {
  let component: OriginalProductsComponent;
  let fixture: ComponentFixture<OriginalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OriginalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
