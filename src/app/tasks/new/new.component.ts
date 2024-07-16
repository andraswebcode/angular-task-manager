import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../task.service';
import { AuthService } from '../../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-new',
	standalone: true,
	imports: [RouterLink, FormsModule],
	templateUrl: './new.component.html',
	styleUrl: './new.component.scss'
})
export class NewComponent {
	title = '';
	description = '';

	constructor(
		private readonly taskService: TaskService,
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	addNew() {
		const { title, description } = this;
		this.taskService.addTask({
			title,
			description,
			userName: this.authService.user()?.userName || '',
			done: false
		});
		this.router.navigateByUrl('tasks');
	}
}
