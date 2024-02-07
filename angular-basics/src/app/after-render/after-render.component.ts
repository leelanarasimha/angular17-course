import {
  AfterRenderPhase,
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  afterRender,
} from '@angular/core';

@Component({
  selector: 'app-after-render',
  standalone: true,
  imports: [],
  templateUrl: './after-render.component.html',
  styleUrl: './after-render.component.css',
})
export class AfterRenderComponent {
  @ViewChild('leela') leela!: ElementRef;
  constructor() {
    afterNextRender(
      () => {
        this.leela.nativeElement.style.color = 'red';
        console.log('after next render fired');
      },
      { phase: AfterRenderPhase.Write }
    );

    afterRender(
      () => {
        console.log(this.leela.nativeElement.style.color);
        console.log('after render fired');
      },
      { phase: AfterRenderPhase.Read }
    );
  }
}
