import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './Counter/Counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { CheckedLifeCycleComponent } from './checked-life-cycle/checked-life-cycle.component';
import { AfterRenderComponent } from './after-render/after-render.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { TaskComponent } from './task/task.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProfileComponent,
    CounterComponent,
    GetterInputComponent,
    PanelComponent,
    CardComponent,
    HoverClickComponent,
    LifeCycleHooksComponent,
    CheckedLifeCycleComponent,
    AfterRenderComponent,
    ViewChildExampleComponent,
    TaskComponent,
    ChildComponent,
    ParentComponent,
    AdminProfileComponent,
    UserProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks = ['task 1', 'task 2', 'task 3', 'task 4'];
  title = { name: 'angular-basics' };
  counter: number = 20;
  receivedDataFromChild = '';
  isActive = true;
  isAdmin = true;

  @ViewChildren(TaskComponent, { read: TaskComponent })
  taskComponents!: QueryList<TaskComponent>;

  dataReceived(data: string) {
    this.receivedDataFromChild = data;
  }

  ngAfterViewInit() {
    this.taskComponents.forEach((taskComponent) => {
      console.log(taskComponent.taskName);
    });
    this.taskComponents.changes.subscribe(() => {
      console.log('child components has changed');
    });

    setTimeout(() => {
      this.tasks.push('hi leela');
    }, 3000);
  }

  getProfileComponent() {
    return this.isAdmin ? AdminProfileComponent : UserProfileComponent;
  }

  changeTitle() {
    this.title.name = 'random string ' + Math.random();
  }
  toggleHook() {
    this.isActive = !this.isActive;
  }

  updateCounter() {
    this.counter++;
  }
}
