import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccederComponentComponent } from './info-acceder-component.component';

describe('InfoAccederComponentComponent', () => {
  let component: InfoAccederComponentComponent;
  let fixture: ComponentFixture<InfoAccederComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAccederComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAccederComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
