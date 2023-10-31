import { Component } from '@angular/core';
import { Operation } from './operation';

@Component({
  selector: 'app-root',
  templateUrl: `AppComponent.component.html`,
  styleUrls: ['style.css'],
})

export class AppComponent {
  OperationsList: Operation[] =[];
  LastOp:Operation;
  NextOPid: number = 0;
  OperationType:number = 1;
  ActualSymbol:string = "+";
  
  //Since we use id to know what operation is being processed we need to change the operation symbol somewhere
  changeSymbol (OperationType:number){
    switch (OperationType){
      case 1:
        this.ActualSymbol = "+";
        break;
      case 2:
        this.ActualSymbol = "-";
        break;
      case 3:
        this.ActualSymbol = "x";
        break;
      case 4:
        this.ActualSymbol = "/";
        break;
    }
    this.OperationType = OperationType;
  }

  //Call the function do math and export the operation into historique, and display results
  CalcAndExport( Input1: string, input2: string){
    let ToStore: Operation = this.DoMath(this.OperationType, Number(Input1), Number(input2));
    this.LastOp = ToStore;
    this.OperationsList.push(ToStore);
    let currentResult: number = ToStore.result;
    let ResultDisplay = document.getElementById("Result");

    if (ResultDisplay!=null)
    {
      ResultDisplay.innerHTML = currentResult.toString();
      //console.log("change result successfully");
    }
    let LastResultDisplay = document.getElementById("LastResult");
    if (LastResultDisplay!=null)
    {
      LastResultDisplay.innerHTML = currentResult.toString();
      //console.log("change result successfully");
    }
    
  }

  
  DoMath(OperationType: number, FirstInput:number, SecondInput:number)
  {
    let CurrentDate = new Date();
    let result = 0;
    let OperationSymbol ="";
    switch (OperationType){
      case 1:
        result = FirstInput + SecondInput;
        OperationSymbol = "+";
        break;
      case 2:
        result = FirstInput-SecondInput;
        OperationSymbol = "-";
        break;
      case 3:
        result = FirstInput*SecondInput;
        OperationSymbol = "x";
        break;
      case 4:
        result = FirstInput/SecondInput;
        OperationSymbol = "/";
        break;
    }

    let OPid = this.NextOPid;
    this.NextOPid+=1;
    CurrentDate = new Date();

    let resultOP = new Operation(OPid, FirstInput, SecondInput, OperationSymbol, result, CurrentDate);
    return resultOP;
  }

  ClearHistorique(){
    this.OperationsList = [];
  }
  
  removeOP(Operation:Operation){
    let IdToDelete = Operation.id;
    this.OperationsList=this.OperationsList.filter(x => x.id !== IdToDelete )
  }
}
