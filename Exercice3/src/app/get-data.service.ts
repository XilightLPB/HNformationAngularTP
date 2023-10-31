import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../assets/data/transaction';
import { catchError, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  readonly pathToData = '/assets/data';
  
  constructor(private com:HttpClient){
  }

  getAllTransactions(): Observable<Transaction[]>{
    return this.com.get<Transaction[]>(`${this.pathToData}/transactions.json`).pipe(
      catchError(
        (error => 
        { 
          console.log(error); 
          return of([]);
        })
      )
      );
  }

  getTransaction(id:string): Observable<Transaction>{
    return this.com.get<Transaction>(`${this.pathToData}/${id}.json`);
  }

}
