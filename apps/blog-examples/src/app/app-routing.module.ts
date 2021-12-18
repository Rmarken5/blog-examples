import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@angular-apps/home').then((m) => m.HomeModule),
      },
      {
        path: 'testing',
        loadChildren: () =>
          import('@angular-apps/testing').then((m) => m.TestingModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
