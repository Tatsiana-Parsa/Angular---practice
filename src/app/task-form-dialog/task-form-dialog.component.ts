import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.sass']
})
export class TaskFormDialogComponent {
  public taskForm: FormGroup = this.fb.group({
    title: new FormControl<string>(null),
    description: new FormControl<string>(null),
    assignee: new FormControl<string>(null),
    isUrgent: new FormControl<boolean>(null),
});

  constructor(
    public dialogRef: MatDialogRef<TaskFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {users: string[]},
    private fb: FormBuilder
  ) {
    //this.taskForm.value
  }
}
