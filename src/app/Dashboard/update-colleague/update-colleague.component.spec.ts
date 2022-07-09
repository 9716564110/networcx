import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColleagueComponent } from './update-colleague.component';

describe('UpdateColleagueComponent', () => {
  let component: UpdateColleagueComponent;
  let fixture: ComponentFixture<UpdateColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateColleagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
