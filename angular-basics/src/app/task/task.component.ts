import { Component, Inject, Input } from '@angular/core';
import { SUB_ITEM } from '../subitem.token';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  providers: [{ provide: SUB_ITEM, useValue: 'task component value' }],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() taskName!: string;

  constructor(@Inject(SUB_ITEM) public injectedItem: string) {}
}
