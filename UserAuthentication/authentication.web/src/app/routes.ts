import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'index', component: DashboardComponent },
    {
        path: 'sign-up', component: DashboardComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: DashboardComponent,
        children: [{ path: '', component: SignInComponent }]
    }
];
