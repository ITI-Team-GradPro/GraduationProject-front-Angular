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
import { WishListComponent } from './Pages/wish-list/wish-list.component';
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
// register Swiper custom elements
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
    WishListComponent,
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
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
