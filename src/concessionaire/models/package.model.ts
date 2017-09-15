interface IPackage {  
  id: number
  startDate: Date
  endDate: Date
  printedAvailable: number
}

export class Package implements IPackage{
  id: number
  startDate: Date
  endDate: Date
  printedAvailable: number

  constructor (id: number, startDate: Date, endDate: Date, printedAvailable: number) {
    this.id = id
    this.startDate = startDate
    this.endDate = endDate
    this.printedAvailable = printedAvailable
  }
}