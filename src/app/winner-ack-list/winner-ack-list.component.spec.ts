import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerAckListComponent } from './winner-ack-list.component';

describe('WinnerAckListComponent', () => {
  let component: WinnerAckListComponent;
  let fixture: ComponentFixture<WinnerAckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerAckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerAckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
