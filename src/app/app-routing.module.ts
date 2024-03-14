import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/Sign/login/login.component';
import { SignUpComponent } from './Pages/Sign/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Pages/Sign/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/Sign/reset-password/reset-password.component';
import { AboutComponent } from './Pages/about/about.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { PlaceDetailsComponent } from './Pages/Place/place-details/place-details.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { SearchComponent } from './Pages/search/search.component';
import { WishListComponent } from './Pages/wish-list/wish-list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'booking' , component:BookingComponent},
  {path:'contact' , component:ContactComponent},
  {path:'payments' , component:PaymentsComponent},
  {path:'places' , component:PlaceDetailsComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'search' , component:SearchComponent},
  {path:'wishlist' , component:WishListComponent},

  {path:'register' , component:SignUpComponent},
  {path:'login' , component:LoginComponent},
  {path:'forget password' , component:ForgotPasswordComponent},
  {path:'reset password' , component:ResetPasswordComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
