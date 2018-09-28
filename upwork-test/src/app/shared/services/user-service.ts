import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UserModelVM } from "../models";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://dev.api.fooddocs.ee";

  getUsers() {
    return this.http.get<UserModelVM[]>(this.baseUrl + "/testtask");
  }
}
