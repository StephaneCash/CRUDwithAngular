import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KikoniComponent } from './kikoni.component';

describe('KikoniComponent', () => {
  let component: KikoniComponent;
  let fixture: ComponentFixture<KikoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KikoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KikoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
