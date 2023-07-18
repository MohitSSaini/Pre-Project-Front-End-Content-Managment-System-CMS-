import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { Loginguard } from './loginguard';
import { SignupComponent } from './signup/signup.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: ' ', component: UserdetailsComponent },
  { path: 'signupview', component: SignupComponent },
  { path: 'loginview', component: LoginComponent },
  {
    path: 'contentview',
    component: ContentComponent,
    canActivate: [Loginguard],
  },
  {
    path: 'addcontent',
    component: AddcontentComponent,
    canActivate: [Loginguard],
  },
  {
    path: 'userview',
    component: UserdetailsComponent,
    canActivate: [Loginguard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
