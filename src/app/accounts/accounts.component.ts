import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers:[AccountsService]
})
export class AccountsComponent implements OnInit {
  accounts:any[] = [];
  constructor(private accountsService:AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.allAccounts;
  }
  
}
