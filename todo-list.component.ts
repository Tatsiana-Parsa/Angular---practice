import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {
  public taskList: Task[] = [];
  public newTask: string;
  public editing: boolean;

  private lastId: number = 0;
  private editedTaskId: number;
  private users: string[] = ["John", "Alex", "Bob"]

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  @HostListener('window: keyup.enter')
  showNotification(): void {
    this._snackBar.open('Task has been created', '', {
      duration: 3 * 1000,
    });
  }

  addTask(): void {
    /*if(this.newTask) {
      this.taskList.push({title: this.newTask, id: ++this.lastId, completed: false});
      this.newTask = '';
      this.showNotification();
    }*/
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: {users: this.users},
    });

    dialogRef.afterClosed().subscribe(_result => {
      
    });

  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }

  editTask(taskId: number): void {
    this.editedTaskId = taskId;
    this.editing = true;
    this.newTask = this.taskList.find(task => task.id === taskId).title;
  }

  saveChanges(): void {
    this.taskList.find(task => task.id === this.editedTaskId).title = this.newTask;
    this.cancel();
  }

  cancel(): void {
    this.editing = false;
    this.newTask = '';
    this.editedTaskId = null;
  }
}

/*
export class TodoListComponent {
  public value: string = "text";
  protected protectedValue = 0;
  private privateValue = 'Private';
  
  public tasks = [
    {
      title: 'Visit a dentist',
      description: 'Liberty st. 58, Nov 17, 2022',
      urgent: true
    },
    {
      title: 'Buy cat food',
      description: 'Steal money first'
    },
    {
      title: 'Feed a cat',
      description: 'Then a dog too'
    },
    {
      title: 'Meet Ann',
      description: 'And buy her flowers'
    }
  ];

  getValue(): string {
    return `value: $(this.value)`;
  }

  getFontSize(task: any): string {
    return task.urgent ? '20px' : '14px';
  }

  onButtonClick(): void {
    alert('Hi !')
  }
}
*/