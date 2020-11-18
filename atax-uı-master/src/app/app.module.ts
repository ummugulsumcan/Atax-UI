import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LandingComponent } from './modules/landing/landing.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './modules/home/home.module';
import { LoginComponent } from './modules/login/login.component';
import { AnalysisFileComponent } from './modules/analysisFile/analysisFile.component';
import { AnalysisResultComponent } from './modules/analysisResult/analysisResult.component';
import { PackageBuyComponent } from './modules/package-buy/package-buy.component';
import { CompanyListingComponent } from './modules/company-listing/company-listing.component';
import { AddCompanyComponent } from './modules/add-company/add-company.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AddUserComponent } from './modules/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AnalysisFileComponent,
    AnalysisResultComponent,
    PackageBuyComponent,
    CompanyListingComponent,
    AddCompanyComponent,
    AdminComponent,
    AddUserComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
