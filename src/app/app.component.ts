import { Component } from '@angular/core';
import {User} from './address-card/user.model';
import {TestService} from './test.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first app';
  user: User;
  inputText: String = "Initial value";

  constructor(
      private svc: TestService,
      private htttp: HttpClient
  ){
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Developer";
    this.user.address = "1234 Main St, City, State, 100010";
    this.user.phone = [
            '123-123-1234',
            '456-456-4567',
            '789-789-7890'
    ]

    this.svc.printToConsole('Got the service!');
  }

  ngOnInit(){
    let url = 'https://api.github.com/users/logofatu';
    let obs = this.htttp.get(url);
    obs.subscribe((response) => console.log(response));

    // this.htttp.post(URL);
  }

}
