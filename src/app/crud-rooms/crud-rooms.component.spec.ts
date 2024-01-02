import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRoomsComponent } from './crud-rooms.component';

describe('CrudRoomsComponent', () => {
  let component: CrudRoomsComponent;
  let fixture: ComponentFixture<CrudRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudRoomsComponent]
    });
    fixture = TestBed.createComponent(CrudRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
