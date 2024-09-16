import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeToughtsComponent } from './exclude-toughts.component';

describe('ExcludeToughtsComponent', () => {
  let component: ExcludeToughtsComponent;
  let fixture: ComponentFixture<ExcludeToughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeToughtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeToughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
