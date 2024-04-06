import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componant/navbar/navbar.component';
import { FooterComponent } from './Componant/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { LoginComponent } from './Pages/Sign/login/login.component';
import { ForgotPasswordComponent } from './Pages/Sign/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Pages/Sign/reset-password/reset-password.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AddPlaceComponent } from './Pages/Place/add-place/add-place.component';
import { PlaceDetailsComponent } from './Pages/Place/place-details/place-details.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { SearchComponent } from './Pages/search/search.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './Pages/Sign/new-password/new-password.component';
import { FilterPlacesComponent } from './Pages/filter-places/filter-places.component';
import { SignUpComponent } from './Pages/Sign/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileSidebarComponent } from './Componant/profile-sidebar/profile-sidebar.component';
import { SettingsComponent } from './Pages/Profile/settings/settings.component';
import { ProfilePageComponent } from './Pages/Profile/profile-page/profile-page.component';
import { SecurityComponent } from './Pages/Profile/security/security.component';
import { HelpComponent } from './Pages/Profile/help/help.component';
import { PaymentComponent } from './Pages/Profile/payment/payment.component';
import { FilterbarComponent } from './Componant/filterbar/filterbar.component';
import { register } from 'swiper/element/bundle';
import { PlaceCardComponent } from './Componant/place-card/place-card.component';
import { FilterModalComponent } from './Componant/filter-modal/filter-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { AllPlacesComponent } from './Pages/home/all-places/all-places.component';
import { CategoriesComponent } from './Pages/home/categories/categories.component';
import { MyPlacesComponent } from './Pages/Place/my-places/my-places.component';
import { DetailsLayoutComponent } from './Layouts/details-layout/details-layout.component';
import { StarRatingModule } from 'angular-star-rating';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { DHomeComponent } from './AdminDashboard/d-home/d-home.component';
import { DPlacesComponent } from './AdminDashboard/d-places/d-places.component';
import { DBookingComponent } from './AdminDashboard/d-booking/d-booking.component';
import { DManagusersComponent } from './AdminDashboard/d-managusers/d-managusers.component';
import { DManageadminsComponent } from './AdminDashboard/d-manageadmins/d-manageadmins.component';
import { DAddAdminsComponent } from './AdminDashboard/d-add-admins/d-add-admins.component';
import { ToastComponent } from './Componant/toast/toast.component';
import { FilterComponent } from './Pages/filter/filter.component';
// import { SearchPipePipe } from './Componant/search-pipe.pipe';// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ContactComponent,
    AddPlaceComponent,
    PlaceDetailsComponent,
    BookingComponent,
    PaymentsComponent,
    SearchComponent,
    ProfileComponent,
    SettingsComponent,
    FilterPlacesComponent,
    NotFoundComponent,
    SignUpComponent,
    NewPasswordComponent,
    ProfileSidebarComponent,
    ProfilePageComponent,
    SecurityComponent,
    HelpComponent,
    PaymentComponent,
    FilterbarComponent,
    PlaceCardComponent,
    FilterModalComponent,
    AuthLayoutComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AllPlacesComponent,
    CategoriesComponent,
    MyPlacesComponent,
    DetailsLayoutComponent,
    WishlistComponent,
    UserProfileComponent,
    DHomeComponent,
    DPlacesComponent,
    DBookingComponent,
    DManagusersComponent,
    DManageadminsComponent,
    DAddAdminsComponent,
    ToastComponent,
    FilterComponent,
    // SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    StarRatingModule.forRoot(), // Import StarRatingModule
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
