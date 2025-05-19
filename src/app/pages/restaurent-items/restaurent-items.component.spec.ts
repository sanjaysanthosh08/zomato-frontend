import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentItemsComponent } from './restaurent-items.component';

describe('RestaurentItemsComponent', () => {
  let component: RestaurentItemsComponent;
  let fixture: ComponentFixture<RestaurentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
