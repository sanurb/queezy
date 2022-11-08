import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { PlayPageComponent } from '@modules/play/pages/play-page/play-page.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'play',
    component: PlayPageComponent,
    loadChildren: () => import(`./modules/play/play.module`).then(m => m.PlayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
