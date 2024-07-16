import { Injectable, signal } from '@angular/core';
import { UserModel } from '../types';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _user = signal<UserModel | null>(null);

	get user() {
		return this._user.asReadonly();
	}

	constructor(private readonly router: Router) {
		try {
			const user = JSON.parse(localStorage.getItem('user') || '[]');
			this._user.set(user);
		} catch (e) {
			//
		}
	}

	login(userName: string) {
		this._user.set({ userName });
		localStorage.setItem('user', JSON.stringify(this._user()));
		this.router.navigateByUrl('');
	}

	logout() {
		this._user.set(null);
		localStorage.removeItem('user');
		this.router.navigateByUrl('login');
	}
}
