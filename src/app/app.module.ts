import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormReadComponent } from './components/form-read/form-read.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FormTemplateComponent,
    FormCreateComponent,
    FormReadComponent,
    FormUpdateComponent,
    FormDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
