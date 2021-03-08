import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserCreateComponent } from "./user/views/user-create/user-create.component";
import { UserDetailsComponent } from "./user/views/user-details/user-details.component";
import { UserListComponent } from "./user/views/user-list/user-list.component";
import { UserUpdateComponent } from "./user/views/user-update/user-update.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'update-user/:id', component: UserUpdateComponent },
  { path: 'details-user/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
