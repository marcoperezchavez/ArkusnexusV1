import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
