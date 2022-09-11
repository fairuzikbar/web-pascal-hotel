import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


// Konsep Eager Load
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '',   redirectTo: '/component-a', pathMatch: 'full' }, // redirect to `component-a`
  { path: '**', component: NotFoundComponent }, // wildcard route for a 404 page
] 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }