import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
  { path: 'loginPage', loadChildren: () => import('./pages/login-page/login-page.module').then(x => x.LoginPageModule), canActivate: [AuthGuard] },
  { path: 'error', loadChildren: () => import('./pages/error-page/error-page.module').then(x => x.ErrorPageModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
