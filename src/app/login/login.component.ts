import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	userName?: string;

	constructor(private readonly authService: AuthService, private readonly router: Router) {}

	login() {
		if (this.userName) {
			this.authService.login(this.userName);
		}
		this.router.navigateByUrl('tasks');
	}
}
