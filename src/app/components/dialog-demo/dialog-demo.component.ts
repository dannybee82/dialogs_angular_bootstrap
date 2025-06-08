import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { BootstrapDialogComponent } from '../bootstrap-dialog/bootstrap-dialog.component';
import { Dialog } from '../../interfaces/dialog.interface';
import { DialogType } from '../../enums/dialog-type.enum';

@Component({
  selector: 'app-dialog-demo',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BootstrapDialogComponent
  ],
  templateUrl: './dialog-demo.component.html',
  styleUrl: './dialog-demo.component.scss'
})
export class DialogDemoComponent implements OnInit {

  protected isDialogVisible: WritableSignal<boolean> = signal(false);
  protected showDialogResult: WritableSignal<boolean> = signal(false);
  protected currentReturnedValue: WritableSignal<boolean> = signal(false);
  protected dialogData: WritableSignal<Dialog | null> = signal(null);
  
  protected dialogForm: UntypedFormGroup = new FormGroup({});

  protected allDialogTypes: DialogType[] = [DialogType.NONE, DialogType.INFO, DialogType.QUESTION, DialogType.WARNING, DialogType.ERROR];

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.dialogForm = this.fb.group({
      dialogType: [DialogType.NONE, Validators.required],
      dialogTitle: ['', Validators.required],
      dialogMessage: ['', Validators.required],
      dialogAdditionalText: [''],
      dialogCancellationText: ['Cancel', Validators.required],
      dialogConfirmationText: ['Ok', Validators.required],
    });

    this.dialogForm.controls['dialogType'].valueChanges.subscribe((dialogType: DialogType) => {
      if(dialogType === DialogType.INFO) {
        this.dialogForm.controls['dialogCancellationText'].removeValidators([Validators.required]);
      } else {
        this.dialogForm.controls['dialogCancellationText'].addValidators([Validators.required]);
      }
    });
  }

  submit(): void {
    if(this.dialogForm.valid) {
      this.showDialogResult.set(false);
      this.dialogData.set(Object.assign(this.dialogForm.value));
      this.isDialogVisible.set(true);
    } else {
      this.dialogForm.markAllAsTouched();
    }
  }

  callback(confirmation: boolean): void {
    this.isDialogVisible.set(false);
    this.showDialogResult.set(true);
    this.currentReturnedValue.set(confirmation);
  }

}