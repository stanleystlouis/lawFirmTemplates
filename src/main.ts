import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { Home } from './app/home/home';
import { AboutUs } from './app/about-us/about-us';
import { Contact } from './app/contact/contact';
import { DisclaimerPrivacyPolicy } from './app/disclaimer-privacy-policy/disclaimer-privacy-policy';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: Contact },
  { path: 'disclaimer', component: DisclaimerPrivacyPolicy }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
/* bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err)); */
