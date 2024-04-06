import { PaymentComponent } from './Pages/Profile/payment/payment.component';
import { SettingsComponent } from './Pages/Profile/settings/settings.component';
import { NgModule, Component } from '@angular/core';
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
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';
import { AddPlaceComponent } from './Pages/Place/add-place/add-place.component';
import { EditPlaceComponent } from './Pages/Place/edit-place/edit-place.component';
const routes: Routes = [

// Start Client LayOut 
  {path : "", component : ClientLayoutComponent , children : [
  {path : "" , redirectTo : "Home" , pathMatch : "full"},
  {path : "Home" , component : HomeComponent},
  {path : "About" , component : AboutComponent},
  {path:"ContactUs", component:ContactComponent},

  {path : "FilterPlaces" , component : FilterPlacesComponent},
  {path : "Booking" , component : BookingComponent},
  {path : "Search" , component : SearchComponent},
  {path : "Payment" , component : PaymentsComponent},
  {path : "PlaceDetails:id" , component : PlaceDetailsComponent},
  // start Profile Routes
  {path : "MyProfile", component : ProfilePageComponent , children : [
    { path: '', redirectTo: 'Profile', pathMatch: 'full' }, 
    {path : "Profile" , component : ProfileComponent },
    {path : "Settings" , component : SettingsComponent },
    {path : "Security" , component : SecurityComponent },
    {path : "Payment" , component : PaymentComponent },
    {path : "Help" , component : HelpComponent },
  ]},  
]},
// end Client LayOut 


// start Auth Layout
{path : "", component : AuthLayoutComponent , children : [
  { path: '', redirectTo: 'SignUp', pathMatch: 'full' }, 
  {path : "SignUp" , component : SignUpComponent},
  {path : "Login" , component : LoginComponent},
  { path: "forgotpassword", component: ForgotPasswordComponent},
  {path : "ResetPassword" , component : ResetPasswordComponent},
  {path : "NewPassword" , component : NewPasswordComponent},
]},
// end Auth Layout


// start Host Layout
{path : "AddPlace" , component : AddPlaceComponent },
{path: "EditPlace" , component : EditPlaceComponent },

// end Host Layout
// End Host Layout


// start Admin Layout
// End Admin Layout





// End Profile 
  {path:  '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
