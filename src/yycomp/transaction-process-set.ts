import { SQLProcess } from './sql-process';

export class TransactionProcessSet {
  _preprocesses : SQLProcess[] = [];
  _mainProcesses : SQLProcess[] = [];
  _postProcesses: SQLProcess[] = [];

  constructor (){
  }

  get preProcesses() : SQLProcess[] {
    return this._preprocesses;
  }
  addPreProcess(process: SQLProcess) {
    this._preprocesses.push(process);
  }

  get mainProcesses(): SQLProcess[]{
    return this._mainProcesses;
  }
  addMainProcess(process: SQLProcess){
    return this._mainProcesses.push(process);
  }

  get postProcesses(): SQLProcess[]{
    return this._postProcesses;
  }
  addPostProcess(process: SQLProcess){
    this._postProcesses.push(process);
  }
}