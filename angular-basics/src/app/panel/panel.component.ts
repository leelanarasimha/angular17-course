import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  outputs: ['dataEvent: childEvent'],
})
export class PanelComponent {
  @Output('childEvent') dataEvent = new EventEmitter<string>();
  sendData() {
    this.dataEvent.emit('data from child');
  }
}
