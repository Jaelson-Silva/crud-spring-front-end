import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccontComponent } from './create-accont.component';

describe('CreateAccontComponent', () => {
  let component: CreateAccontComponent;
  let fixture: ComponentFixture<CreateAccontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
