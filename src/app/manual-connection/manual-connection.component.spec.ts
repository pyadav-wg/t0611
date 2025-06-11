import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualConnectionComponent } from './manual-connection.component';

describe('ManualConnectionComponent', () => {
  let component: ManualConnectionComponent;
  let fixture: ComponentFixture<ManualConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
