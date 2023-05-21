import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ListAllComponent } from './component/list-all/list-all.component';
import { EditComponent } from './component/edit/edit.component';
import { StoreComponent } from './store/store.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddComponent } from './component/add/add.component'
@NgModule({
  declarations: [
    ListAllComponent,
    EditComponent,
    StoreComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ApiModule { }
