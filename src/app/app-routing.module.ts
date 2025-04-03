import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, 
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }, 
  { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'contact-me', loadChildren: () => import('./contact-me/contact-me.module').then(m => m.ContactMeModule) },
  { path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
