import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLiftComponent } from './personal-lift.component';

describe('PersonalLiftComponent', () => {
  let component: PersonalLiftComponent;
  let fixture: ComponentFixture<PersonalLiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalLiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
