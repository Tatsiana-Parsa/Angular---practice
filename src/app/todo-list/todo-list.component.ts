import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  providers: [TaskService],
})
export class TodoListComponent implements OnInit {
  public taskList: Task[] = [{
    id: 0,
    title: 'Task',
    description: 'Descr',
    assignee: 'John',
    isUrgent: false,
    completed:false
  }];
  public newTask: string;
  public editing: boolean;
  public date: Date;

  private lastId: number = 0;
  private editedTaskId: number;
  private users: string[] = ["John", "Alex", "Matt"]

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.date = new Date();
    this.taskList = this.taskService.getTasks();
    this.users = this.taskService.getUser();
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

    dialogRef.afterClosed().subscribe(result => {
     if(result) {
        this.taskList.push({
          ...result,
          id: ++this.lastId,
          completed: false
        })
     }
    });
  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }

  editTask(taskId: number): void {
    /*this.editedTaskId = taskId;
    this.editing = true;
    this.newTask = this.taskList.find(task => task.id === taskId).title;*/
    let task = this.taskList.find(task => task.id === taskId);
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: {task, users: this.users},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        /* task = {
          ...task,
          ...result
        }; */
        const taskInd = this.taskList.findIndex(task => task.id === taskId);
        this.taskList.splice(taskInd, 1);
        this.taskList.push({
          ...task,
          ...result
        })
      }
     });
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