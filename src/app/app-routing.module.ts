import { FooterComponent } from './components/footer/footer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StepperComponent } from './components/general_info/stepper/stepper.component';
import { CategoryComponent } from './components/general_info/category/category.component';
import { PublicPrivateComponent } from './components/general_info/public-private/public-private.component';
import { DateTimeComponent } from './components/general_info/date-time/date-time.component';
import { EventtitleComponent } from './components/general_info/eventtitle/eventtitle.component';
import { AbouteventComponent } from './components/general_info/aboutevent/aboutevent.component';
import { EventpictureComponent } from './components/general_info/eventpicture/eventpicture.component';
import { LocationComponent } from './components/pricing_location/location/location.component';
import { PriceComponent } from './components/pricing_location/price/price.component';
import { RestrictionsComponent } from './components/add_info/restrictions/restrictions.component';
import { NumberofpeopleComponent } from './components/add_info/numberofpeople/numberofpeople.component';
import { SpecialguestsComponent } from './components/add_info/specialguests/specialguests.component';
import { AuthoritiesComponent } from './components/add_info/authorities/authorities.component';


const routes: Routes = [
  { path:'header', component:HeaderComponent },
  { path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HeaderComponent,
  FooterComponent,
  StepperComponent,
  CategoryComponent,
  PublicPrivateComponent,
  DateTimeComponent,
  EventtitleComponent,
  AbouteventComponent,
  EventpictureComponent,
  LocationComponent,
  PriceComponent,
  RestrictionsComponent,
  NumberofpeopleComponent,
  SpecialguestsComponent,
  AuthoritiesComponent
];
