import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrls: ['./get-accounts.component.scss']
})
export class GetAccountsComponent implements OnInit {
  allAccounts: any = [];
  panelOpenState = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((data) => {
      let allAccounts = data;
      const group = allAccounts.reduce((acc, item) => {
        if (!acc[item.accountType]) {
          acc[item.accountType] = [];
        }
        acc[item.accountType].push(item);
        return acc;
      }, {})
      for (let [accountType, name] of Object.entries(group)) {
        this.allAccounts.push(name);
      }
      console.log(this.allAccounts)
    });

  }

}
