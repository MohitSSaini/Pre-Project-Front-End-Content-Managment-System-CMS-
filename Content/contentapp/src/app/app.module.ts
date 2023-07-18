import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContentComponent } from './content/content.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Loginguard } from './loginguard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContentComponent,
    AddcontentComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,MatToolbarModule
  ],
  providers: [Loginguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
