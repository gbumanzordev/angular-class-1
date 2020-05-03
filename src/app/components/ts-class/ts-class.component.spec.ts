import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsClassComponent } from './ts-class.component';

describe('TsClassComponent', () => {
  let component: TsClassComponent;
  let fixture: ComponentFixture<TsClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
