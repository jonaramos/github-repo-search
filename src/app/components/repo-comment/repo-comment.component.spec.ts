import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCommentComponent } from './repo-comment.component';

describe('RepoCommentComponent', () => {
  let component: RepoCommentComponent;
  let fixture: ComponentFixture<RepoCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
