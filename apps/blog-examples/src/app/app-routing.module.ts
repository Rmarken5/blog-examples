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
          import('@blog-examples/home').then((m) => m.HomeModule),
      },
      {
        path: 'testing',
        loadChildren: () =>
          import('@blog-examples/testing').then((m) => m.TestingModule),
      },
      {
        path: 'state-management',
        loadChildren: () =>
          import('@blog-examples/state-management/feature').then(
            (m) => m.StateManagementFeatureModule
          ),
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
