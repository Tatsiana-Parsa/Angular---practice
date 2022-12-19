import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-progress',
  templateUrl: './todo-progress.component.html',
  styleUrls: ['./todo-progress.component.sass']
})
export class TodoProgressComponent implements OnChanges {
  @Input() currentNumber: number;

  public total: number = 5;
  public gradient: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['currentNumber']) {
      const percentage = this.currentNumber / this.total * 100;
      this.gradient = `linear-gradient(90deg, black ${percentage}%, #ccc ${percentage}%)`;
    }
  }

/* getGradient(): string {
  const percentage = this.currentNumber / this.total * 100;
  return this.gradient = `linear-gradient(90deg, black ${percentage}%, #ccc ${percentage}%)`;
} */

}