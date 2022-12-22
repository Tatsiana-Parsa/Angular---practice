import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipDirective } from './directives/tooltip.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UrgentPipe } from './pipes/urgent.pipe';
import { TaskFormDialogComponent } from './task-form-dialog/task-form-dialog.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoProgressComponent } from './todo-progress/todo-progress.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    TodoListComponent,
    TodoTaskComponent,
    TaskFormDialogComponent,
    TodoProgressComponent,
    UrgentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}