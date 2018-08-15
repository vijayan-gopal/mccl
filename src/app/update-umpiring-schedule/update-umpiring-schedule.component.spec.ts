import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUmpiringScheduleComponent } from './update-umpiring-schedule.component';

describe('UpdateUmpiringScheduleComponent', () => {
  let component: UpdateUmpiringScheduleComponent;
  let fixture: ComponentFixture<UpdateUmpiringScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUmpiringScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUmpiringScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
