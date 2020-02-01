import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelBoardComponent } from './pixel-board.component';

describe('PixelBoardComponent', () => {
  let component: PixelBoardComponent;
  let fixture: ComponentFixture<PixelBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
