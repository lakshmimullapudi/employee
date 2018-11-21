import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../sign/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = this.log.userName;
  constructor(private log: LoginService) { }

  ngOnInit() {
  }

}
