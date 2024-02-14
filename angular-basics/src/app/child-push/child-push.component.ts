import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-push',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPushComponent {
  count = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 1000);
  }

  updateCount() {
    //this.count++;
  }
}
