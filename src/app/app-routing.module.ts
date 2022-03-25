import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['login'])
const redirectLoggedInToLogin = () => redirectLoggedInTo(['dashboard'])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate : [ AngularFireAuthGuard],
  data : {authGuardPipe :redirectLoggedInToLogin }

  },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  canActivate : [ AngularFireAuthGuard],
  data : {authGuardPipe :redirectLoggedInToLogin }
},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate : [ AngularFireAuthGuard],
  data : {authGuardPipe :redirectUnauthorizedToSignIn }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor( private  a: AngularFireAuthGuard){
console.log(a)
  }
}
