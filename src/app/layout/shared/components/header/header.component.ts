import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/core/services/account-service/account-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public name:string;
  constructor(
    private accountService: AccountServiceService
  ) {
    this.name = accountService.getCurrentName();

  }

  ngOnInit() {
  }

}
