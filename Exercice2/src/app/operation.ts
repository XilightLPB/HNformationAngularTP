export class Operation{
    id:number;
    firstInput: number;
    secondInput:number;
    OperationSymbol: string;
    result:number;
    date:Date;

    constructor (OPid:number, Input1:number, Input2:number, OperationType:string, result:number, CurrentDate: Date ){
        this.id =OPid;
        this.firstInput = Input1;
        this.secondInput = Input2;
        this.OperationSymbol = OperationType;
        this.result = result;
        this.date = CurrentDate;
    }
}