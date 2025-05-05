import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  {path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) }, 
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];

const routing = RouterModule.forRoot(routes);
