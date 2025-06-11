import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerConnectionComponent } from './answer-connection.component';

describe('AnswerConnectionComponent', () => {
  let component: AnswerConnectionComponent;
  let fixture: ComponentFixture<AnswerConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
