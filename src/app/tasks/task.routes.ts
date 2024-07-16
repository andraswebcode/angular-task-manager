import { Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { TasksComponent } from './tasks.component';

export const routes: Routes = [
	{
		path: '',
		component: TasksComponent
	},
	{
		path: 'new',
		component: NewComponent
	}
];
