import ServicePackages from 'concessionaire/services/packages.service'
let oServicePackages = new ServicePackages()

export default {
  getPackagesOnDemand ({ commit, state }, { params, cb }) {
    oServicePackages.getPackagesOnDemand(params)
    .then(({ data }) => {
      if (cb) cb()
      commit('UPDATE_CURRENT_PACKAGE', { data, currentPackage: params.currentTab })
    })
  },

  getHeaderPackage ({ commit, state }, idSeller) {
    oServicePackages.getHeaderPackage(idSeller)
    .then((data) => {
      commit('UPDATE_HEADER_PACKAGE', data.data)
    })
  },

  getPackages ({ commit, state }, idSeller) {
    oServicePackages.getPackages(idSeller)
    .then((data) => {
      commit('UPDATE_PACKAGES', data)
    })
  },

  deletePackage ({ commit, state }, { params, cb }) {
    oServicePackages.deletePackage(params.id)
    .then((data) => {
      if (cb) cb()
      setTimeout(() => {
        oServicePackages.getPackagesOnDemand(params)
        .then(({data}) => {
          let position = -1
          if (cb) cb(position)
          commit('UPDATE_CURRENT_PACKAGE', { data, currentPackage: params.currentTab })
        })
      }, 500)
    })
  },
  showDetailPackage ({ commit, state }, {typePackage, idPackage, idPackageDurationPrice, id}) {
    state.packages[typePackage].items.find((item, index) => {
      if (item.id === id && !item['detail']) {
        oServicePackages.getDetailToolTip(idPackage, idPackageDurationPrice)
        .then(({data}) => {
          let durationMonth = data.prices[0].durationMonth

          let printsByMonth = data.details.find(item => item.packageDetailSlug === 'PRINTSBYMONTH')
          let notesByBlog = data.details.find(item => item.packageDetailSlug === 'NEWS')
          let postInFacebook = data.details.find(item => item.packageDetailSlug === 'FACEBOOK')
          let sendsByEmail = data.details.find(item => item.packageDetailSlug === 'MAILING')

          state.packages[typePackage].items[index]['detail'] = [{
            total: durationMonth * printsByMonth.packageDetailValue,
            text: 'Avisos impresos'
          }, {
            total: durationMonth * notesByBlog.packageDetailValue,
            text: 'Notas de blog'
          }, {
            total: durationMonth * postInFacebook.packageDetailValue,
            text: 'Post en facebook'
          }, {
            total: durationMonth * sendsByEmail.packageDetailValue,
            text: 'Envíos por mail'
          }]

          commit('UPDATE_PACKAGES', state.packages)
        })
      }
    })
  }
}
