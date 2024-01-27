import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

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
  constructor(private destroyRef: DestroyRef) {
    console.log('constructor called');

    destroyRef.onDestroy(() => {
      console.log('destroyref fired');
    });
    //console.log(this.title);
  }

  ngOnInit() {
    //console.log(this.title);
    console.log('ngoninit fired');
    ///this.name = this.title + 'added on nginint';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchange fired');
    console.log(changes);
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }
}
