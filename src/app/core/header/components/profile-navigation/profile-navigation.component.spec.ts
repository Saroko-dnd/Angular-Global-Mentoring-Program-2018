import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavigationComponent } from './profile-navigation.component';

describe('ProfileNavigationComponent', () => {
  let component: ProfileNavigationComponent;
  let fixture: ComponentFixture<ProfileNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
