import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.sass'],
  providers: [TaskService]
})
export class TaskFormDialogComponent implements OnInit, OnDestroy {
  public taskForm: FormGroup = this.fb.group({
    title: new FormControl<string>(null, [Validators.required]),
    description: new FormControl<string>(null, [Validators.maxLength(100)]),
    assignee: new FormControl<string>(null, [Validators.required]),
    isUrgent: new FormControl<boolean>(null),
});

  constructor(
    public dialogRef: MatDialogRef<TaskFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {task: Task, users: string[]},
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    if(this.data.task) {
      this.setFormValue();
    }
  }

  ngOnDestroy(): void {

  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.taskForm.value);
  }

  private setFormValue(): void {
    this.taskForm.setValue({
      title: this.data.task.title,
      description: this.data.task.description || null,
      isUrgent: this.data.task.isUrgent,
      assignee: this.data.task.assignee,
    });
  }

}
