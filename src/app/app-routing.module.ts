import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewItemComponent } from './Components/view-item/view-item.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  {path:"",redirectTo:"view",pathMatch:"full"},
  {path:"view",component:ViewItemComponent},
  {path:"add-Item",component:AddItemComponent},
  {path:"edit/:id",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
