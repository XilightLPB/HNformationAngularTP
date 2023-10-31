import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionsListComponent} from './transactions-list/transactions-list.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path: 'TransactionsList', component: TransactionsListComponent, title:"Accueil" },
  {path: 'TransactionDetail/:id', component: TransactionDetailsComponent, title:"Récapitulatif de transaction"},
  {path: '', redirectTo:'TransactionsList', pathMatch:'full', title:"Accueil"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
