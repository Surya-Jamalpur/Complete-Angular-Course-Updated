

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
      addAccount(name:string, no:number, type:string, bankName:string){
        this.allAccounts.push({name:name, no:no, type:type, bankName:bankName});
      }
      // updateAccount(name:string, no:number, type:string, bankName:string){
      //   this.allAccounts.push();
      // }
}