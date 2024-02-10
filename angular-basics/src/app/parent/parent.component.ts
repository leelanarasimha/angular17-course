import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ContentChildren(ChildComponent, {read: ChildComponent}) childComponents!: QueryList<ChildComponent>;

  ngAfterContentInit() {
    console.log(this.childComponents.length);
  }
}
