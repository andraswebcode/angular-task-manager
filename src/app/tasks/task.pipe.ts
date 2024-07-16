import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../types';

@Pipe({
	name: 'task',
	standalone: true
})
export class TaskPipe implements PipeTransform {
	transform(value: TaskModel): string {
		const { title, description, userName } = value;
		return `${title} - ${description} by ${userName}`;
	}
}
