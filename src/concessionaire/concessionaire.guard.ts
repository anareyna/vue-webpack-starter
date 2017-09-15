// import guardSite from './../common/oauth/site.guard'

export default {

  user: {
    isConcessionaire: false,
    idConcessionaire: 2
  },

  isLogged (UserType = 2) {
    if (UserType === this.user.idConcessionaire) {
      this.user.isConcessionaire = true
    } else {
      log('user invalid!!')
    }
  }
}
