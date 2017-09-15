import { Brand } from './brand.model'

export class Seller {
  id: number
  idVehicleType: number
  nameVehicleType: string  
  brands: Array<Brand> = []

  constructor (id: number, idVehicleType: number, nameVehicleType: string ) {
    this.id = id
    this.idVehicleType = idVehicleType
    this.nameVehicleType = nameVehicleType
  }

  addBrands (brand: Brand) {
    let filter = this.brands.find(_brand => _brand.id === brand.id )
    if (!filter){
      this.brands.push(brand)
    }
  }

  getBrand (id: number) {
    return this.brands.filter(brand => brand.id === id)[0]
  }
}