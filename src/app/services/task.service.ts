import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { tasks, users } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return tasks;
  }

  getUser(): string[] {
    return users;
  }

}
