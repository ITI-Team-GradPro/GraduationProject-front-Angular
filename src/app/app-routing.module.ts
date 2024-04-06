import { DManagusersComponent } from './AdminDashboard/d-managusers/d-managusers.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';
import { PaymentComponent } from './Pages/Profile/payment/payment.component';
import { SettingsComponent } from './Pages/Profile/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AllPlacesComponent } from './Pages/home/all-places/all-places.component';
import { CategoriesComponent } from './Pages/home/categories/categories.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { PlaceDetailsComponent } from './Pages/Place/place-details/place-details.component';
import { ProfilePageComponent } from './Pages/Profile/profile-page/profile-page.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { SecurityComponent } from './Pages/Profile/security/security.component';
import { HelpComponent } from './Pages/Profile/help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { SignUpComponent } from './Pages/Sign/sign-up/sign-up.component';
import { LoginComponent } from './Pages/Sign/login/login.component';
import { ForgotPasswordComponent } from './Pages/Sign/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/Sign/reset-password/reset-password.component';
import { NewPasswordComponent } from './Pages/Sign/new-password/new-password.component';
import { AddPlaceComponent } from './Pages/Place/add-place/add-place.component';
import { MyPlacesComponent } from './Pages/Place/my-places/my-places.component';
import { SearchComponent } from './Pages/search/search.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DHomeComponent } from './AdminDashboard/d-home/d-home.component';
import { DAddAdminsComponent } from './AdminDashboard/d-add-admins/d-add-admins.component';
import { DPlacesComponent } from './AdminDashboard/d-places/d-places.component';
import { DBookingComponent } from './AdminDashboard/d-booking/d-booking.component';
import { FilterComponent } from './Pages/filter/filter.component';
import { EditPlaceComponent } from './Pages/Place/edit-place/edit-place.component';


const routes: Routes = [

// Start Client LayOut 
  {path : "", component : ClientLayoutComponent , children : [
  {path : "" , redirectTo : "Home" , pathMatch : "full"}, // done
  {path : "" , component : HomeComponent , children : [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {path : "Home" , component : AllPlacesComponent}, 
    {path : "Places/:category" , component : CategoriesComponent }, 
    {path : "Search/:name" , component : SearchComponent }, 
    {path : "Filter/:location/:capacity/:Category/:price/:rate" , component : FilterComponent }, 
  ]}, //done
  {path : "About" , component : AboutComponent}, //done
  {path:"ContactUs", component:ContactComponent}, //done
  {path : "Wishlist/:id" , component : WishlistComponent}, // for cilent only
  {path : "Booking" , component : BookingComponent}, // for cilent only
  {path : "Payment" , component : PaymentsComponent}, // for cilent only
  {path : "MyBooking" , component : PaymentsComponent}, // for cilent only
  {path : "PlaceDetails/:id" , component : PlaceDetailsComponent}, //for all
  {path : "AddPlace" , component : AddPlaceComponent}, //for all
  {path : "EditPlace" , component : EditPlaceComponent}, //for all

  {path : "addNewPlace" , component : AddPlaceComponent}, // only for Host

  {path : "Profile/:id" , component : UserProfileComponent}, // only for Host

  {path : "MyPlaces" , component : MyPlacesComponent}, // only for Host

  // start Profile Routes
  {path : "MyProfile", component : ProfilePageComponent , children : [ //for cilent and host
    { path: '', redirectTo: 'Profile', pathMatch: 'full' }, 
    {path : "Profile" , component : ProfileComponent },
    {path : "Settings" , component : SettingsComponent },
    {path : "Security" , component : SecurityComponent },
    {path : "Payment" , component : PaymentComponent }, // not done
    {path : "Help" , component : HelpComponent },
    
// End Profile 
  // {path:  '**' , component: NotFoundComponent}
  ]},  
]},
// end Client LayOut 

// start Auth Layout
{path : "", component : AuthLayoutComponent , children : [
  { path: '', redirectTo: 'SignUp', pathMatch: 'full' }, //done
  {path : "SignUp" , component : SignUpComponent}, //done
  {path : "Login" , component : LoginComponent}, //done
  { path: "forgotpassword", component: ForgotPasswordComponent}, //done
  {path : "ResetPassword" , component : ResetPasswordComponent}, // done
  {path : "NewPassword" , component : NewPasswordComponent},
// End Profile 
// {path:  '**' , component: NotFoundComponent}
]},
// end Auth Layout

// // start Admin Layout
{path : "", component : AdminLayoutComponent , children : [
  { path: '', redirectTo: 'HomeDashboard', pathMatch: 'full' }, //done
  {path : "HomeDashboard" , component : DHomeComponent}, //done
  {path : "ManageUsers" , component : DManagusersComponent}, //done
  { path: "AddNewadmin", component: DAddAdminsComponent}, //done
  {path : "Places" , component : DPlacesComponent}, // done
  {path : "NewPassword" , component : DBookingComponent},

// 
]},


// End Admin Layout


// start Admin Layout
// End Admin Layout



{path:  '**' , component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



