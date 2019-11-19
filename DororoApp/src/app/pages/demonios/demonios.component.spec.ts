import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoniosComponent } from './demonios.component';

describe('DemoniosComponent', () => {
  let component: DemoniosComponent;
  let fixture: ComponentFixture<DemoniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
