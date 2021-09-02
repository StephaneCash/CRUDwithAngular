import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StephComponent } from './steph.component';

describe('StephComponent', () => {
  let component: StephComponent;
  let fixture: ComponentFixture<StephComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StephComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StephComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
