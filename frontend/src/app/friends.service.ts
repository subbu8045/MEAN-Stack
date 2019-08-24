import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  uri = 'http://localhost:3000/friends';
  constructor(private http: HttpClient) { }

  getFriends() {
    return this.http.get(`${this.uri}`, { responseType: 'json' });
  }

  getFriendById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }

  addFriends(name, location, expertise, salary, birthday) {
    const friend = {
      name: name,
      location: location,
      expertise: expertise,
      salary: salary,
      birthday: birthday
    };
    return this.http.post(`${this.uri}/add`, friend);
  }
  updateFriend(id, name, location, expertise, salary, birthday) {
    const friend = {
      name: name,
      location: location,
      expertise: expertise,
      salary: salary,
      birthday: birthday
    };
    return this.http.patch(`${this.uri}/update/${id}`, friend);
  }

  deleteFriendById(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
