import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Dashboard/footer/footer.component';
import { HomecomponentComponent } from './Dashboard/homecomponent/homecomponent.component';
import { NavComponent } from './Dashboard/nav/nav.component';
import { UpdateColleagueComponent } from './Dashboard/update-colleague/update-colleague.component';
import { ShowColleagueComponent } from './Dashboard/show-colleague/show-colleague.component';
import { AddColleagueComponent } from './Dashboard/add-colleague/add-colleague.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomecomponentComponent,
    UpdateColleagueComponent,
    ShowColleagueComponent,
    AddColleagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
