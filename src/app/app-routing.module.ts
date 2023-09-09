import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormReadComponent } from './components/form-read/form-read.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';

const routes: Routes = [
  { path: 'create', component: FormCreateComponent },
  { path: 'read', component: FormReadComponent },
  { path: 'update', component: FormUpdateComponent },
  { path: 'delete', component: FormDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
