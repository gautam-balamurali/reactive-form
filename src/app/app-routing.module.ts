import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './config/route-constants';
import { HomeComponent } from './features';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: RouteConstants.ROUTES.HOME,
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
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
