import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbhTableComponent } from './bbh-table.component';

describe('BbhTableComponent', () => {
  let component: BbhTableComponent;
  let fixture: ComponentFixture<BbhTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbhTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbhTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
