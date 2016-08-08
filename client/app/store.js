import { observable, computed } from 'mobx';
import TodoModel from './models/to_do_model';
import * as Utils from './utils.js';

export default class TodoStore {
	@observable
	todos = [];

	@computed get activeTodoCount() {
		return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		);
	}

	@computed get completedCount() {
		return this.todos.length - this.activeTodoCount;
	}

	addTodo(title) {
		this.todos.push(new TodoModel(this, Utils.createUUID(), title, false));
	}
}
