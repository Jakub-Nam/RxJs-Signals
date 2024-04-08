import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockMusicComponent } from './mock-music.component';

describe('MockMusicComponent', () => {
  let component: MockMusicComponent;
  let fixture: ComponentFixture<MockMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
