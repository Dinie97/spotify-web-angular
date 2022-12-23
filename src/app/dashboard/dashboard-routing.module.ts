import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: '', redirectTo: 'main' },
      { path: 'main', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
