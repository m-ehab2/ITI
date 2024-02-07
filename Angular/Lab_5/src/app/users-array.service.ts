import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersArrayService {
  users: any[] = [];

  constructor() {}
}
