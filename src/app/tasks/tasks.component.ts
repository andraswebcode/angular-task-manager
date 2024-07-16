import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [RouterLink, ListComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss'
})
export class TasksComponent {
	constructor(private readonly authService: AuthService) {}

	logout() {
		this.authService.logout();
	}
}
