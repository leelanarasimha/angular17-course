import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import ProfileComponent from '../profile.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
})
export class LifeCycleHooksComponent {
  @Input() title = { name: '' };
  @Input() counter = 0;
  loading = true;
  @ContentChild(ProfileComponent) profileContent!: ProfileComponent;

  @ViewChild('leela') leelaElement!: ElementRef;
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
    setTimeout(() => {
      console.log('set time out');
      this.name = this.title.name + 'added on nginint';
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchange fired');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngdocheck fired');
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  ngAfterContentInit() {
    console.log(this.profileContent);
    console.log('after contentinit fired');
  }

  ngAfterViewInit() {
    console.log(this.leelaElement.nativeElement);
    console.log('after view init initialized');
  }
}
