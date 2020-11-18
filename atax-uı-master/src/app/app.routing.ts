import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';
import {AnalysisFileComponent} from './modules/analysisFile/analysisFile.component';
import {AnalysisResultComponent} from './modules/analysisResult/analysisResult.component';
import {CompanyListingComponent} from './modules/company-listing/company-listing.component';
import {PackageBuyComponent} from './modules/package-buy/package-buy.component';
import {AddCompanyComponent} from './modules/add-company/add-company.component';
import {AdminComponent} from './modules/admin/admin.component';
import {AddUserComponent} from './modules/add-user/add-user.component';


const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'analysisfile',  component: AnalysisFileComponent },
    { path: 'analysisresult',  component: AnalysisResultComponent},
    { path: 'companylisting',  component: CompanyListingComponent},
    { path: 'packagebuy',  component: PackageBuyComponent},
    { path: 'addcompany',  component: AddCompanyComponent},
    { path: 'admin',  component: AdminComponent},
    { path: 'adduser',  component: AddUserComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
