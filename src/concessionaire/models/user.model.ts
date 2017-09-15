import { Entity } from './entity.model'
import { Concessionarie } from './concessionarie.model'
import { Package } from './package.model'

export class User{ 
  name: string
  id: number
  idUserType: number
  entity: Entity  
  concessionarie: Concessionarie

  constructor () {}
  setUser(id: number, idUserType: number, name: string) {
    this.id= id
    this.idUserType = idUserType   
    this.name = name
  }
  addEntity (entity: Entity){
    this.entity = entity
  }

  addConcessionaire (concessionarie: Concessionarie){
    this.concessionarie = concessionarie
  }
}