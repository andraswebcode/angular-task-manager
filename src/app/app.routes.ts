import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'tasks',
		canActivate: [authGuard],
		loadChildren: () => import('./tasks/task.routes').then((m) => m.routes)
	},
	{
		path: 'login',
		component: LoginComponent
	}
];
