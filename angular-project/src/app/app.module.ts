import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChangeNumberComponent } from './component/change-number/change-number.component';
import { DiretivasComponent } from './component/diretivas/diretivas.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { EventsComponent } from './component/events/events.component';
import { FirstComponentComponent } from './component/first-component/first-component.component';
import { IfRenderComponent } from './component/if-render/if-render.component';
import { ListRenderComponent } from './component/list-render/list-render.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DiretivasComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ItemDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
