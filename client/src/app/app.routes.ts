import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { ServicesComponent } from './features/feature-2/services/services.component';
import { ProjectsComponent } from './features/feature-2/projects/projects.component';
import { ContactUsComponent } from './features/feature-2/contact-us/contact-us.component';
import { HomeComponent } from './features/feature-2/HomeSection/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Common/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'Common',
    component: MinimalLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
  {
    path: 'Common',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'Common/sign-in' },
];
