import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsService } from './friends.service';
import { FriendsComponent } from './friends/friends.component';
import { EditFriendsComponent } from './edit-friends/edit-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatIconModule,
  MatPaginatorModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    EditFriendsComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
