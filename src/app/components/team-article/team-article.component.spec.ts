import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamArticleComponent } from './team-article.component';

describe('TeamArticleComponent', () => {
  let component: TeamArticleComponent;
  let fixture: ComponentFixture<TeamArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
