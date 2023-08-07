import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  public items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: '/'
      },
      {
        label: 'Smart Contracts',
        routerLink: '/smartContracts'
      },
      {
        label: 'Blocks',
        routerLink: '/'
      },
      {
        label: 'Transactions',
        routerLink: '/transaction/page'
      },
      {
        label: 'Accounts',
        routerLink: '/accounts'
      },
      {
        label: 'Tokens',
        routerLink: '/token/page'
      }
    ];

    if(!environment.production) {
      this.items.push({
        label: 'Debug'
      });
    }
  }

}
