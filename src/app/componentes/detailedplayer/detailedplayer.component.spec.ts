import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedplayerComponent } from './detailedplayer.component';

describe('DetailedplayerComponent', () => {
  let component: DetailedplayerComponent;
  let fixture: ComponentFixture<DetailedplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedplayerComponent]
    });
    fixture = TestBed.createComponent(DetailedplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
