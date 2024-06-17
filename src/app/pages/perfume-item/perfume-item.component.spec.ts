import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeItemComponent } from './perfume-item.component';

describe('PerfumeItemComponent', () => {
  let component: PerfumeItemComponent;
  let fixture: ComponentFixture<PerfumeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
