import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReactionsComponent } from './post-reactions.component';

describe('PostReactionsComponent', () => {
  let component: PostReactionsComponent;
  let fixture: ComponentFixture<PostReactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostReactionsComponent]
    });
    fixture = TestBed.createComponent(PostReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
