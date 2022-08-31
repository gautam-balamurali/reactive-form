import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './config/route-constants';
import { HomeComponent } from './features';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        redirectTo: RouteConstants.ROUTES.HOME,
        pathMatch: 'full',
      },
      { path: '**', redirectTo: RouteConstants.ROUTES.HOME },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
