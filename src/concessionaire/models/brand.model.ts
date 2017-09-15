import { Model } from './model.model'

export class Brand {
  id: number
  name: string
  models: Array<Model> = []


  constructor (id: number, name: string){
    this.id = id
    this.name = name
  }

  addModel(model: Model) {
    let filter = this.models.find(_model => _model.id === model.id )
    if (!filter){
      this.models.push(model)
    }
  }

  getModels () {
    return this.models
  }
}