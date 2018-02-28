import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Promise<Array<User>> {
    return this.http.get<Array<User>>('/api').toPromise();
  }
}
