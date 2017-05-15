import { Component } from '@angular/core';
import { Todo } from './shared/todo';
//import { todos } from './shared/todo.data';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.components.css']
})
export class AppComponent{
	title: string = 'Medical Note';
}
