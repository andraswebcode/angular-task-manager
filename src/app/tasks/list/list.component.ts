import { Component, Signal, computed } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../../types';
import { ItemComponent } from '../item/item.component';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [ItemComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss'
})
export class ListComponent {
	todoTasks: Signal<TaskModel[]>;
	doneTasks: Signal<TaskModel[]>;

	constructor(private readonly taskService: TaskService) {
		this.todoTasks = computed(() => taskService.tasks().filter((task) => !task.done));
		this.doneTasks = computed(() => taskService.tasks().filter((task) => task.done));
	}
}
