import { Component, InputSignal, input, OutputEmitterRef, output} from '@angular/core';
import { DialogType } from '../../enums/dialog-type.enum';
import { Dialog } from '../../interfaces/dialog.interface';

@Component({
  selector: 'app-bootstrap-dialog',
  templateUrl: './bootstrap-dialog.component.html',
  styleUrls: ['./bootstrap-dialog.component.scss']
})
export class BootstrapDialogComponent {

  readonly dialog: InputSignal<Dialog | null> = input<Dialog | null>(null);

  readonly getConfirmation: OutputEmitterRef<boolean> = output<boolean>()

  closeDialog() : void {
    this.getConfirmation.emit(false);
  }

  cancel() : void {
    this.getConfirmation.emit(false);
  }

  ok() : void {
    this.getConfirmation.emit(true);
  }

  getType(): typeof DialogType {
    return DialogType;
  }

}