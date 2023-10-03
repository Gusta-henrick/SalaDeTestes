import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesPageComponent } from './pages/observables-page/observables-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';

const routes: Routes = [
  {path: 'observables', component: ObservablesPageComponent},
  {path: 'forms', component: FormsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
