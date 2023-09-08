import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { HeaderComponent } from './components/header/header.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormRegisterComponent,
    HeaderComponent,
    FormTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
