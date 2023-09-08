import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateComponent } from './components/form-template/form-template.component';

const routes: Routes = [
  { path: 'create', component: FormTemplateComponent },
  { path: 'read', component: FormTemplateComponent },
  { path: 'update', component: FormTemplateComponent },
  { path: 'delete', component: FormTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
