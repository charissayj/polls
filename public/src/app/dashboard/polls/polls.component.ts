import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

    private polls
    private name

  constructor(
      private _pollService: PollService,
      private _router: Router,
      private _userService: UserService
  ) { }

  @Input() set displaypolls(newpolls){
      this.polls = newpolls
  }


  ngOnInit() {
      this.getID()
  }

  getID(){
        this._userService.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }

  deletePoll(id){
      this._pollService.deletePoll(id)
      .then(data => this._router.navigateByUrl('/'))
      .catch((err) => console.warn(err))
  }
}
