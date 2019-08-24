import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFriendsComponent } from './edit-friends.component';

describe('EditFriendsComponent', () => {
  let component: EditFriendsComponent;
  let fixture: ComponentFixture<EditFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
