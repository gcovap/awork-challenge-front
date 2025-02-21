import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericWrapperComponent } from './generic-wrapper.component';

describe('GenericWrapperComponent', () => {
  let component: GenericWrapperComponent;
  let fixture: ComponentFixture<GenericWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
