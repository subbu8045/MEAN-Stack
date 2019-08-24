import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { EditFriendsComponent } from './edit-friends/edit-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

const routes: Routes = [
  { path: 'add', component: AddFriendsComponent },
  { path: 'edit/:id', component: EditFriendsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: '', redirectTo: 'friends', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
