import { Component, Input, booleanAttribute } from '@angular/core';
import { changeValue, trimValue } from './counter.service';
import { CommonModule } from '@angular/common';
import { GetterInputComponent } from '../getter-input/getter-input.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ['count', 'message', 'showcounter', 'title: counterTitle'],
})
export default class CounterComponent extends GetterInputComponent {
  @Input({ required: true, transform: changeValue, alias: 'dummynamecounter' })
  count: string = '';

  @Input({ transform: trimValue }) message: string = '';

  @Input({ transform: booleanAttribute }) showcounter: boolean = false;
}
