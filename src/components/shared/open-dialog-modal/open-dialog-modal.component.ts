import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dialog-modal',
  templateUrl: './open-dialog-modal.component.html',
  styleUrls: ['./open-dialog-modal.component.scss']
})
export class OpenDialogModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OpenDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
  ) { }

  ngOnInit() { }

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
