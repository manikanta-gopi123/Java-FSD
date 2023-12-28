import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"employees",component:HomeComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"viewdetails",component:ViewdetailsComponent},
  
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    LoginComponent,
    AddemployeeComponent,
    HomepageComponent,
    ViewdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
