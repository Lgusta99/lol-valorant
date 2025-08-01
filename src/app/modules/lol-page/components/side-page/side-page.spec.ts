import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePage } from './side-page';

describe('SidePage', () => {
  let component: SidePage;
  let fixture: ComponentFixture<SidePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
