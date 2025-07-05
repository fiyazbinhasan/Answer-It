import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Howto } from './howto';

describe('Howto', () => {
  let component: Howto;
  let fixture: ComponentFixture<Howto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Howto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Howto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
