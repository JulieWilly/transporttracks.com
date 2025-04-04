import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { ServicesComponent } from './features/feature-2/services/services.component';
import { ProjectsComponent } from './features/feature-2/projects/projects.component';
import { ContactUsComponent } from './features/feature-2/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:"home",
        component:AppComponent
    },
    {
        path:"sign-in",
        component:SignInComponent
    },
    {
        path:"sign-up",
        component:SignUpComponent
    },
    {
        path:"services",
        component:ServicesComponent
    },{
        path:"projects",
        component:ProjectsComponent
    },{
        path:'contact-us',
        component:ContactUsComponent
    }
];
