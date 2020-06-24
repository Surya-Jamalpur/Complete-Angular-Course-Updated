import { Component, OnInit, EventEmitter  } from '@angular/core';
import { LoggingService } from '../../Services/logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-cockpit',
  templateUrl: './account-cockpit.component.html',
  styleUrls: ['./account-cockpit.component.scss'],
  providers:[LoggingService]
})
export class AccountCockpitComponent implements OnInit {
  newName:string = '';
  newAccountNo:number;
  newAccType:string = '';
  newBankName:string = '';
  constructor(private loggingservice:LoggingService,
              private accountsService:AccountsService) { }

  ngOnInit() {
  }
  onAddAccount(name:string, no:number, type:string, bankName:string) {
    this.accountsService.addAccount(name, no, type, bankName);
    this.loggingservice.LogStatus(this.newName);
  };
  updateAcc() {

  }
}
