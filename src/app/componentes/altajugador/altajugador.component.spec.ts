import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltajugadorComponent } from './altajugador.component';

describe('AltajugadorComponent', () => {
  let component: AltajugadorComponent;
  let fixture: ComponentFixture<AltajugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltajugadorComponent]
    });
    fixture = TestBed.createComponent(AltajugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
