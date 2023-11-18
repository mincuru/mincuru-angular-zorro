import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: 'cars', component: CarsComponent, title: 'Cars' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
