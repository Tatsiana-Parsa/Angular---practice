import { Task } from "../types/task.type";

export const tasks: Task[] = [
{
    id: 0,
    title: 'Task',
    description: 'Descr',
    assignee: 'John',
    isUrgent: false,
    completed:false
  },

{
    id: 0,
    title: 'Task 1',
    description: '',
    assignee: 'Matt',
    isUrgent: true,
    completed:false
},

{
    id: 0,
    title: 'Task 2',
    description: '',
    assignee: 'Alex',
    isUrgent: true,
    completed:false
}

];

export const users: string[] = ["John", "Alex", "Matt"];