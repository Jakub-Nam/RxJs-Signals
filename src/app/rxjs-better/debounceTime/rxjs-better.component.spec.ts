import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBetterComponent } from './rxjs-better.component';

describe('RxjsBetterComponent', () => {
  let component: RxjsBetterComponent;
  let fixture: ComponentFixture<RxjsBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
