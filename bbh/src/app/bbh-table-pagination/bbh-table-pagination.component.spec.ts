import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbhTablePaginationComponent } from './bbh-table-pagination.component';

describe('BbhTablePaginationComponent', () => {
  let component: BbhTablePaginationComponent;
  let fixture: ComponentFixture<BbhTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbhTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbhTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
