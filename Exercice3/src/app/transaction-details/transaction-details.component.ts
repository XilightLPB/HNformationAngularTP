import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../assets/data/transaction';
import { GetDataService } from '../get-data.service';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styles: [
  ]
})
export class TransactionDetailsComponent implements OnInit{
  DataSource: GetDataService = inject(GetDataService);
  transaction: Transaction = {} as Transaction;
  
  
  
  constructor(private route:ActivatedRoute){
    const transactionId = this.route.snapshot.params['id'];
    console.log(`going for Transaction ID:${transactionId}`);
    this.DataSource.getTransaction(transactionId).subscribe(
      (transaction) => 
      {
        this.transaction = transaction as Transaction;
        
      }
    );
  }

  ngOnInit(){

  }
}
