import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HandleUsersDataService {
  private usersUrl = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.usersUrl);
  }
  getUser(id: any) {
    return this.http.get(this.usersUrl + '/' + id);
  }
  updateUser(id: any, user: any) {
    return this.http.patch(this.usersUrl + '/' + id, user);
  }
  addUser(user: any) {
    console.log(user);
    return this.http.post(this.usersUrl, user);
  }
  deleteUser(id: any) {
    console.log('Deleted');
    return this.http.delete(this.usersUrl + '/' + id);
  }
}
