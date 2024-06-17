import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeGridComponent } from './perfume-grid.component';

describe('PerfumeGridComponent', () => {
  let component: PerfumeGridComponent;
  let fixture: ComponentFixture<PerfumeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumeGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
