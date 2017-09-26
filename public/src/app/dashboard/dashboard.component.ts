import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private name: String
    private polls: Array<any>
    private deletedPollID
    private displaypolls: Array<any>

  constructor(
      private _userService: UserService,
      private _router: Router,
      private _pollService: PollService
  ) { }

  ngOnInit() {
      this.getID()
      this.displayPolls()
  }

  getID(){
        this._userService.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }

    logout() {
        this._userService.logout()
        .then(data => this._router.navigateByUrl('/'))
        .catch(err => console.warn(err))
    }

    displayPolls(){
        this._pollService.displayPolls()
        .then(data => {
            this.polls = data;
            this.displaypolls = data;
        })
        .catch(err => console.warn(err))
    }
}
