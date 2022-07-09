import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowColleagueComponent } from './show-colleague.component';

describe('ShowColleagueComponent', () => {
  let component: ShowColleagueComponent;
  let fixture: ComponentFixture<ShowColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowColleagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
