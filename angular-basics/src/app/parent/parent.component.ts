import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subitem.token';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ContentChildren(SUB_ITEM)
  subItemTypes!: QueryList<string>;

  ngAfterContentInit() {
    this.subItemTypes.forEach((element) => {
      console.log(element);
    });
  }
}
