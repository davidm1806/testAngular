import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStreeMapComponent } from './open-stree-map.component';

describe('OpenStreeMapComponent', () => {
  let component: OpenStreeMapComponent;
  let fixture: ComponentFixture<OpenStreeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStreeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
