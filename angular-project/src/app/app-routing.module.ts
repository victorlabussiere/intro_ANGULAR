import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './component/first-component/first-component.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
import { ListRenderComponent } from './component/list-render/list-render.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'list/:id', component: ItemDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
