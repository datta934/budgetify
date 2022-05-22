import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionsComponent } from './get-transactions.component';

describe('GetTransactionsComponent', () => {
  let component: GetTransactionsComponent;
  let fixture: ComponentFixture<GetTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
