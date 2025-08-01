import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCenter } from './home-center';

describe('HomeCenter', () => {
  let component: HomeCenter;
  let fixture: ComponentFixture<HomeCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
