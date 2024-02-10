import { Component } from '@angular/core';
import { SUB_ITEM } from '../subitem.token';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  providers: [{ provide: SUB_ITEM, useValue: 'child component value' }],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  message: string = 'Hello from child component';

  showMessage() {
    alert(this.message);
  }
}
