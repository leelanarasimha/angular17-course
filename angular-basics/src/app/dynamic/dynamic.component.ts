import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css',
})
export class DynamicComponent {
  @Input() message: string = 'Default message';
  @Output() action = new EventEmitter<string>();

  sendEvent() {
    this.action.emit('event sent');
  }
}
