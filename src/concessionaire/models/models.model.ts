export class Models {
  id: number
  name: string
  versionsCount: number
  status: number
  interestedCount: number 
  idBrand: number

  constructor (id: number, name: string, versionsCount: number, status: number, interestedCount: number, idBrand: number) {
    this.id = id
    this.name = name
    this.versionsCount = versionsCount
    this.status = status
    this.interestedCount = interestedCount
    this.idBrand = idBrand 
  }
}