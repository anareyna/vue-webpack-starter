import { Seller } from './seller.model'
import { Models } from './models.model'

export class Concessionarie {
  id: number
  name: string
  Autos: Seller
  Motos: Seller
  BusesyCamiones: Seller
  models: Array<Models> =[]


  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }

  addSeller (seller: Seller) {
    switch (seller.nameVehicleType) {
      case 'Autos':
      this.Autos = seller
      break;
      case 'Motos':
      this.Motos = seller
      break;
      case 'Buses y Camiones':
      this.BusesyCamiones = seller
      break;
    }
  }

  addModels (model: Array<Models>) {
    this.models = model
  }

}