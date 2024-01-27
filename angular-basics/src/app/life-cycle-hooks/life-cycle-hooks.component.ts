import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
})
export class LifeCycleHooksComponent {
  @Input() title = '';
  name = '';
  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log(this.title);
    console.log('ngoninit fired');
    this.name = this.title + 'added on nginint';
  }
}
