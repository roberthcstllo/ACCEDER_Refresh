import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverComponentComponent } from './cover-component.component';

describe('CoverComponentComponent', () => {
  let component: CoverComponentComponent;
  let fixture: ComponentFixture<CoverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
