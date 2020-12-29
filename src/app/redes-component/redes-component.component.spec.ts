import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesComponentComponent } from './redes-component.component';

describe('RedesComponentComponent', () => {
  let component: RedesComponentComponent;
  let fixture: ComponentFixture<RedesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
