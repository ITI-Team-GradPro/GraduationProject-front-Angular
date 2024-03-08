import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componant/navbar/navbar.component';
import { FooterComponent } from './Componant/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { SignUpComponent } from './Componant/Pages/Sign/sign-up/sign-up.component';
import { LoginComponent } from './Pages/Sign/login/login.component';
import { ForgotPasswordComponent } from './Pages/Sign/forgot-password/forgot-password.component';
import { ResetpasswprdComponent } from './Pages/Sign/resetpasswprd/resetpasswprd.component';
import { ResetPasswordComponent } from './Pages/Sign/reset-password/reset-password.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AddPlaceComponent } from './Pages/Place/add-place/add-place.component';
import { PlaceDetailsComponent } from './Pages/Place/place-details/place-details.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { PaymentsComponent } from './Pages/payments/payments.component';
import { WishListComponent } from './Pages/wish-list/wish-list.component';
import { SearchComponent } from './Pages/search/search.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { SettingsComponent } from './Pages/Profile/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetpasswprdComponent,
    ResetPasswordComponent,
    ContactComponent,
    AddPlaceComponent,
    PlaceDetailsComponent,
    BookingComponent,
    PaymentsComponent,
    WishListComponent,
    SearchComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }