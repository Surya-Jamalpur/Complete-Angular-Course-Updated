import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { LoggingService } from '../../Services/logging.service';

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

  @Output() accountCreated = new EventEmitter<{name:string, no:number, type:string, bankName:string}>();

  constructor(private loggingservice:LoggingService) { }

  ngOnInit() {
  }
  addAcc() {
    this.accountCreated.emit({
      name:this.newName,
      no:this.newAccountNo,
      type:this.newAccType,
      bankName:this.newBankName
    });
    this.loggingservice.LogStatus(this.newName);
  };
  updateAcc() {

  }
}
