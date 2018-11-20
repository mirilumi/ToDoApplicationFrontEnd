import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsettingsComponent } from './appsettings.component';

describe('AppsettingsComponent', () => {
  let component: AppsettingsComponent;
  let fixture: ComponentFixture<AppsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
