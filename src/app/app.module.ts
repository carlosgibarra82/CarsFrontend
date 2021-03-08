import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { CarListComponent } from './car/views/car-list/car-list.component';
import { UserListComponent } from './user/views/user-list/user-list.component';
import { UserCreateComponent } from './user/views/user-create/user-create.component';
import { UserUpdateComponent } from './user/views/user-update/user-update.component';
import { UserDetailsComponent } from './user/views/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
