import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/post-list/post-list.module').then(
        (m) => m.PostListModule
      ),
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./modules/post-details/post-details.module').then(
        (m) => m.PostDetailsModule
      ),
    canActivate: [RouteGuardService]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
