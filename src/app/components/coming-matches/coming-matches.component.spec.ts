import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingMatchesComponent } from './coming-matches.component';

describe('ComingMatchesComponent', () => {
  let component: ComingMatchesComponent;
  let fixture: ComponentFixture<ComingMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
