

export class AccountsService {
    allAccounts: any[] = [
        {
          name:'J. Surya',
          no:62041958963,
          type:"savings",
          bankName:'SBI Bank'
        },
        {
          name:'Surya Prakash',
          no:7766544000,
          type:"savings",
          bankName:'Icici Bank'
        },
        {
          name:'Jamalpur Surya',
          no:223366880098,
          type:"savings",
          bankName:'HDFC Bank'
        },
      ];
      onAddAcc(newAccInfo:{name:string, no:number, type:string, bankName:string}){
        this.allAccounts.push({
          name:newAccInfo.name,
          no:newAccInfo.no,
          type:newAccInfo.type,
          bankName:newAccInfo.bankName
        });
      }
}