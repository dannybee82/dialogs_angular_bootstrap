import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootstrapDialogComponent } from './bootstrap-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: BootstrapDialogComponent;
  let fixture: ComponentFixture<BootstrapDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
		  imports: [BootstrapDialogComponent]
    });
    fixture = TestBed.createComponent(BootstrapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});