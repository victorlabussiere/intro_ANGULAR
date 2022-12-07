import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './component/first-component/first-component.component';
import { ListRenderComponent } from './component/list-render/list-render.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'lists', component: ListRenderComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
