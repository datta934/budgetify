import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogModalComponent } from './open-dialog-modal.component';

describe('OpenDialogModalComponent', () => {
  let component: OpenDialogModalComponent;
  let fixture: ComponentFixture<OpenDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
