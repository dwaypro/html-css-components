import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {DummyDataService} from './dummy-data.service';

import { AppComponent } from './app.component';
import { WidgetTypeComponent } from './widget-type/widget-type.component';
import { WidgetSettingsComponent } from './widget-settings/widget-settings.component';
import { TableSettingsComponent } from './table-settings/table-settings.component';
import { DataTableComponent } from './data-table/data-table.component';

import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'data-table', component: TableSettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WidgetTypeComponent,
    WidgetSettingsComponent,
    TableSettingsComponent,
    DataTableComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
