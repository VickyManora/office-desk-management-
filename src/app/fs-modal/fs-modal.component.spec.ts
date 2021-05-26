import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsModalComponent } from './fs-modal.component';

describe('FsModalComponent', () => {
  let component: FsModalComponent;
  let fixture: ComponentFixture<FsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
