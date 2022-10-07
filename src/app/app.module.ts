import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import {SkillsService} from "./skills.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
