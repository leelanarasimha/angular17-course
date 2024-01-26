import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  standalone: true,
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css',
  host: {
    role: 'presentation',

    '[class.hovered]': 'isHovered',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
  },
})
export class HoverClickComponent {
  isHovered = false;
  otherId = 'hi leela';

  onClick() {
    console.log('element clicked');
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
