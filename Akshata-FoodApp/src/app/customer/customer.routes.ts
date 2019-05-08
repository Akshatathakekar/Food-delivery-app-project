import {  Routes } from '@angular/router';
import { Component } from '@angular/core';
// import { CustomerLoginComponent } from './customer-login.component';
import { WelcomeComponent } from '../welcome.component';
import { ProfileDetailsComponent } from './profile-details.component';
// import { CustomerSignUpComponent } from './customer-signup.component';

export const CustomerRoutes:Routes=[
    //{path:"login",component:CustomerLoginComponent},
    //{path:"home/login",component:CustomerLoginComponent},
    {path:"profile",component:ProfileDetailsComponent},
    {path:"home/profile",component:ProfileDetailsComponent},
    {path:"logout",component:WelcomeComponent},
    {path:"profile/logout",component:WelcomeComponent},
    //{path:"signup",component:CustomerSignUpComponent},
    // {path:"login/home",component:WelcomeComponent},
    // {path:"home/login",component:WelcomeComponent}


]