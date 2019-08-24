import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FriendsService } from '../friends.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-edit-friends',
  templateUrl: './edit-friends.component.html',
  styleUrls: ['./edit-friends.component.css']
})
export class EditFriendsComponent implements OnInit {
  id: String;
  friend: any = {};
  updateForm: FormGroup;
  showMsg: boolean = false;

  constructor(private fS: FriendsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {

   }

 
  ngOnInit() {
    this.createForm();
  
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.fS.getFriendById(this.id).subscribe(res => {
        this.friend = res;
        console.log(this.friend)
        this.updateForm.get('name').setValue(this.friend.name);
        this.updateForm.get('location').setValue(this.friend.location);
        this.updateForm.get('expertise').setValue(this.friend.expertise);
        this.updateForm.get('salary').setValue(this.friend.salary);
        this.updateForm.get('birthday').setValue(this.friend.birthday);

      });
    });
  }
  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      expertise: ['', Validators.required],
      salary: ['', Validators.required],
      birthday: ['', Validators.required]
        
    });
  }
  updateFriend(name, location, expertise, salary, birthday) {

    this.fS.updateFriend(this.id, name, location, expertise, salary, birthday).subscribe(() => {
      this.showMsg = true;
      // this.router.navigate([`/friends`]);
    });
  }
 
}
