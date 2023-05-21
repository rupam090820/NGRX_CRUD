import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllComponent } from './api/component/list-all/list-all.component';
import { EditComponent } from './api/component/edit/edit.component';
import { AddComponent } from './api/component/add/add.component';

const routes: Routes = [
  {path:'list',component:ListAllComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:EditComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
