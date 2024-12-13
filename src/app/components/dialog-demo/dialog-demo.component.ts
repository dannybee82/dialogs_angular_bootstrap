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

  isDialogVisible: WritableSignal<boolean> = signal(false);  
  showDialogResult: WritableSignal<boolean> = signal(false);
  currentReturnedValue: WritableSignal<boolean> = signal(false);
  dialogData: Dialog | null = null;
  
  dialogForm: UntypedFormGroup = new FormGroup({});

  allDialogTypes: DialogType[] = [DialogType.NONE, DialogType.INFO, DialogType.QUESTION, DialogType.WARNING, DialogType.ERROR];

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

      this.dialogData = Object.assign(this.dialogForm.value);

      console.log(this.dialogData);

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