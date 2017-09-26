import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private newpoll = {
      question: "",
      creator: "",
      optionone: "",
      optiontwo: "",
      optionthree: "",
      optionfour: "",
  }
  private name: string

  constructor(
      private _userService: UserService,
      private _pollService: PollService,
      private _router: Router
  ) { }

  ngOnInit() {
      this.getID()
  }

  getID(){
      this._userService.getID()
      .then(data => this.name = data.name)
      .catch(err => {
          console.warn(err);
          this._router.navigateByUrl('/')})
  }

  create(){
      this.newpoll.creator = this.name;
      this._pollService.create(this.newpoll)
      .then(data => {
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => console.warn(err))
  }
}
