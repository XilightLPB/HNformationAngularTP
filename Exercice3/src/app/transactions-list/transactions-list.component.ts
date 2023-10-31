import { Component, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Transaction } from 'src/assets/data/transaction';
import { GetDataService } from '../get-data.service';
import {MatSortModule} from '@angular/material/sort';
import { Sort } from '@angular/material/sort';
import { formatDate, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: [ "style.css" 
  ],
  standalone: true,
  imports: [MatSortModule, NgFor, RouterModule],
})
export class TransactionsListComponent {

  DataSource: GetDataService = inject(GetDataService);
  transactions: Transaction[] = [];

  sortedData: Transaction[];

  /*exemple test:
  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedDataT: Dessert[];

  

  sortDataT(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedDataT = data;
      return;
    }

    this.sortedDataT = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  end of test*/

  constructor() {
    this.sortedData = [];
    //this.sortedDataT = this.desserts.slice(); this line belongs to exemple
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


