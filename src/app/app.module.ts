import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { ManualComponent } from './manual/manual';
import { Activity3Component } from './activity3/activity3.component';
import { Activity4Component } from './activity4/activity4.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Activity4ChildComponent } from './activity4-child/activity4-child.component';
import { Activity5ParentComponent } from './activity5-parent/activity5-parent.component';
import { Activity5ChildComponent } from './activity5-child/activity5-child.component';
import { Activity7DrivenComponent } from './activity7-driven/activity7-driven.component';
import { Activity7TemplateComponent } from './activity7-template/activity7-template.component';


@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    ManualComponent,
    Activity3Component,
    Activity4Component,
    Activity4ChildComponent,
    Activity5ParentComponent,
    Activity5ChildComponent,
    Activity7DrivenComponent,
    Activity7TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
