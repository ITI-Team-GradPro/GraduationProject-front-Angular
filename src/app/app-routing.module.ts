import { PaymentComponent } from './Pages/Profile/payment/payment.component';
import { SettingsComponent } from './Pages/Profile/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { SignUpComponent } from './Pages/Sign/sign-up/sign-up.component';
import { LoginComponent } from './Pages/Sign/login/login.component';
import { ForgotPasswordComponent } from './Pages/Sign/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/Sign/reset-password/reset-password.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { SearchComponent } from './Pages/search/search.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { PlaceDetailsComponent } from './Pages/Place/place-details/place-details.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewPasswordComponent } from './Pages/Sign/new-password/new-password.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FilterPlacesComponent } from './Pages/filter-places/filter-places.component';
import { ProfilePageComponent } from './Pages/Profile/profile-page/profile-page.component';
import { SecurityComponent } from './Pages/Profile/security/security.component';
import { HelpComponent } from './Pages/Profile/help/help.component';
const routes: Routes = [
  // start Sign Routes
  {path : "SignUp" , component : SignUpComponent},
  {path : "Login" , component : LoginComponent},
  { path: "forgotpassword", component: ForgotPasswordComponent},
  {path : "ResetPassword" , component : ResetPasswordComponent},
  {path : "NewPassword" , component : NewPasswordComponent},
  {path:"ContactUs", component:ContactComponent},
  {path: "FilterPlaces", component:FilterPlacesComponent},
  // End Sign Routes

  {path : "" , redirectTo : "Home" , pathMatch : "full"},
  {path : "Home" , component : HomeComponent},
  {path : "About" , component : AboutComponent},
  {path : "FilterPlaces" , component : FilterPlacesComponent},

  {path : "Booking" , component : BookingComponent},
  {path : "Search" , component : SearchComponent},
  {path : "Payment" , component : PaymentsComponent},
  {path : "PlaceDetails:id" , component : PlaceDetailsComponent},

// Start Profile 
  {path : "MyProfile", component : ProfilePageComponent , children : [
    { path: '', redirectTo: 'Profile', pathMatch: 'full' }, 
    {path : "Profile" , component : ProfileComponent },
    {path : "Settings" , component : SettingsComponent },
    {path : "Security" , component : SecurityComponent },
    {path : "Payment" , component : PaymentComponent },
    {path : "Help" , component : HelpComponent },
  ]},

// End Profile 
  {path:  '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
