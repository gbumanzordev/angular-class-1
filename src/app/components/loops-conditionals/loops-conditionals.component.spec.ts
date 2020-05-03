import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsConditionalsComponent } from './loops-conditionals.component';

describe('LoopsConditionalsComponent', () => {
  let component: LoopsConditionalsComponent;
  let fixture: ComponentFixture<LoopsConditionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopsConditionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopsConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
