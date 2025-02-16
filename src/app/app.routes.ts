import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticatedComponent } from './pages/authenticated/authenticated.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path:"authenticated",
        component: AuthenticatedComponent,
        canActivate: [AuthGuard]
    },
];
