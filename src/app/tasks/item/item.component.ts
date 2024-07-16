import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../../types';
import { TaskPipe } from '../task.pipe';

@Component({
	selector: 'app-item',
	standalone: true,
	imports: [TaskPipe],
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input({ required: true }) task: TaskModel = {
		title: '',
		description: '',
		userName: '',
		done: false
	};

	constructor(private readonly taskService: TaskService) {}

	done() {
		if (this.task) {
			this.taskService.doneTask(this.task);
		}
	}
}
