import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './Counter/Counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProfileComponent,
    CounterComponent,
    GetterInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-basics';
  counter: number = 20;
}
