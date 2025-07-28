import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Contact } from './contact/contact';
import { DisclaimerPrivacyPolicy } from './disclaimer-privacy-policy/disclaimer-privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'contact', component: Contact },
  { path: 'disclaimer', component: DisclaimerPrivacyPolicy }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
