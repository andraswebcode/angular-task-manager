import { Injectable, signal } from '@angular/core';
import { TaskModel } from './../types';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private _tasks = signal<TaskModel[]>([]);

	get tasks() {
		return this._tasks.asReadonly();
	}

	constructor() {
		this.fetchTasks();
	}

	fetchTasks() {
		let tasks = [];

		// Használjunk try-t, mert ha esetleg nem tudná validálni a JSON.parse az értéket, akkor hibát szokott kiírni.
		try {
			tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
		} catch (e) {
			//
		}

		this._tasks.set(tasks);
	}

	saveTasks() {
		localStorage.setItem('tasks', JSON.stringify(this._tasks()));
	}

	addTask(task: TaskModel) {
		this._tasks.update((tasks) => [...tasks, task]);
		this.saveTasks();
	}

	doneTask(task: TaskModel) {
		this._tasks.update((tasks) => {
			tasks[tasks.indexOf(task)].done = true;
			return [...tasks];
		});
		this.saveTasks();
	}
}
