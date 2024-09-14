import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AmazingFeaturesComponent } from './amazing-features/amazing-features.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';
import { ScreenshotComponent } from './screenshot/screenshot.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeesTaxesComponent } from './fees-taxes/fees-taxes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DialogComponent } from './register/dialog/dialog.component';
import { DialogPassengerComponent } from './register/dialog-passenger/dialog-passenger.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { RegisterService } from './services/register.service';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HowItWorksComponent,
    AmazingFeaturesComponent,
    DownloadComponent,
    FaqComponent,
    ScreenshotComponent,
    ContactUsComponent,
    FooterComponent,
    FeesTaxesComponent,
    PageNotFoundComponent,
    DashboardComponent,
    RegisterComponent,
    DialogComponent,
    DialogPassengerComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
