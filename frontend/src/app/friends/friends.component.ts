import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend.model';
import { FriendsService } from '../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[];
  showMsg : boolean = true;
  constructor(private fS: FriendsService, private router: Router) { }

  ngOnInit() {
    this.listFriends();
  }

  listFriends() {
    this.fS.getFriends().subscribe((data: Friend[]) => {
      this.friends = data;
    });
  }

  editFriend(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteFriend(id) {
    this.fS.deleteFriendById(id).subscribe(() => {
      this.listFriends();
    });
  }
}
