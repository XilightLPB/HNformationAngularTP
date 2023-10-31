import { Component, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Transaction } from 'src/assets/data/transaction';
import { GetDataService } from '../get-data.service';
import {MatSortModule} from '@angular/material/sort';
import { Sort } from '@angular/material/sort';
import { formatDate, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: [ "style.css" 
  ],
})
export class TransactionsListComponent {

  DataSource: GetDataService = inject(GetDataService);
  transactions: Transaction[] = [];

  sortedData: Transaction[];

  constructor() {
    this.sortedData = [];
    // Getting all transaction
    this.DataSource.getAllTransactions().subscribe((transactions) => {
      this.transactions = transactions as Transaction[];
      this.sortedData = this.transactions.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => 
    {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'amount':
          return compare(a.amount, b.amount, isAsc);
        case 'balance':
          return compare(a.balance, b.balance, isAsc);
        case 'label':
          return compare(a.label, b.label, isAsc);
        case 'date':
          return compareDate(a.date, b.date, isAsc);
        default:
          return 0;
      }
    }
    );
  }

}




function compareDate(a: string, b: string, isAsc: boolean) {
  a = a.split('/').reverse().join('');
  b = b.split('/').reverse().join('');
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


