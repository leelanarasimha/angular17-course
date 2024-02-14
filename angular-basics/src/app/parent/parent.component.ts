import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subitem.token';
import { ChildDefaultComponent } from '../child-default/child-default.component';
import { ChildPushComponent } from '../child-push/child-push.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildDefaultComponent, ChildPushComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ContentChildren(SUB_ITEM)
  subItemTypes!: QueryList<string>;

  count = 0;

  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngAfterContentInit() {
    this.subItemTypes.forEach((element) => {
      console.log(element);
    });
  }
}
