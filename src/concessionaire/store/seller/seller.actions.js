import ServiceSeller from 'concessionaire/services/seller.service'
let oServiceSeller = new ServiceSeller()

const utils = {
  filterFields (fields) {
    let fieldsValids = ['description', 'email1', 'address', 'sellerNameConcessionaire', 'email2', 'longitude', 'phone1', 'latitude', 'idUbigeo', 'phone2']
    fields = utils.formatDataToObject(fields)
    fields = utils.redefineFields(fields)

    let data = {}
    for (let key in fields) {
      if (fieldsValids.includes(key)) {
        data[key] = fields[key]
      }
    }
    return data
  },

  redefineFields (fields) {
    fields['idUbigeo'] = fields['district']
    if (fields['annex1']) {
      fields['phone1'] = fields['phone1'] + '-' + fields['annex1']
    }
    if (fields['annex2']) {
      fields['phone2'] = fields['phone2'] + '-' + fields['annex2']
    }
    return fields
  },

  formatDataToObject (fields) {
    let data = {}
    for (let key in fields) {
      data[key] = fields[key]
    }
    return data
  }
}

export default {
  updateSeller ({ commit, state }, params) {
    params.fields = utils.filterFields(params.fields)
    oServiceSeller.updateSeller(params)
    .then(response => commit('UPDATE_RESPONSE', response))
  }
}
