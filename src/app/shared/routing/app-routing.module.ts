import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { ConversationComponent } from '../../conversation/conversation.component';
import { ProfileComponent } from '../../profile/profile.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'conversation/:user_id', component: ConversationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 