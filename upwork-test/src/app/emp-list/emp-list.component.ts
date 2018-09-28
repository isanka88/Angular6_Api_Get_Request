import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services";
import { UserModelVM } from "../shared/models";
@Component({
  selector: "app-emp-list",
  templateUrl: "./emp-list.component.html",
  styleUrls: ["./emp-list.component.css"]
})
export class EmpListComponent implements OnInit {
  _usersList: Array<UserModelVM> = new Array<UserModelVM>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.initializeChatServer();
  }

  initializeChatServer() {
    this.userService.getUsers().subscribe(
      data => {
        this._usersList = data as UserModelVM[];
      },
      error => console.log(error)
    );
  }

  removeUser(index) {
    this._usersList.splice(index, 1);
  }
}
