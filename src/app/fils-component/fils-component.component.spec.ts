import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsComponentComponent } from './fils-component.component';

describe('FilsComponentComponent', () => {
  let component: FilsComponentComponent;
  let fixture: ComponentFixture<FilsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
