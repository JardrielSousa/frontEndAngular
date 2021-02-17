import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalizationComponent } from './nacionalization.component';

describe('NacionalizationComponent', () => {
  let component: NacionalizationComponent;
  let fixture: ComponentFixture<NacionalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
