import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'design-system', component: DesignSystemComponent },
  { path: '**', redirectTo: '' },
];
