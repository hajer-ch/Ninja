import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCupEventComponent } from './world-cup-event.component';

describe('WorldCupEventComponent', () => {
  let component: WorldCupEventComponent;
  let fixture: ComponentFixture<WorldCupEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCupEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
