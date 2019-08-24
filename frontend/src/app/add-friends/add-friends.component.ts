import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {

  createForm: FormGroup;
  showMsg: boolean = false;
  constructor(private fS: FriendsService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      expertise: ['', Validators.required],
      salary: ['', Validators.required],
      birthday: ['', Validators.required]
    });
   }

  addFriend(name, location, expertise, salary, birthday) {

    this.fS.addFriends(name, location, expertise, salary, birthday).subscribe(() => {
      this.showMsg = true;
      // this.router.navigate([`/friends`]);
    });
  }

  ngOnInit() {
  }

}
