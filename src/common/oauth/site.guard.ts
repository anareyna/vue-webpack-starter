import { ServiceToken } from './../services/token.service'
import { BASE_URL } from './../services/constants'

export default {

  user: {
    authenticated: false,
    type: 2
  },

  login (cb) {
    let obj = new ServiceToken()
    obj.getToken()
    .then(response => {
      if (response.data.token) {
        log('login from service token')
        this.user.authenticated = true
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('idUser', response.data.idUser)
        // window.localStorage.setItem('typeUser', 2)
        this.user.type = 2
        if (typeof cb === 'function') {
          cb()
        }
      } else {
        window.location.href = BASE_URL
      }
    })
  },

  autoLogin (cb) {
    this.checkAuth()
    if (!this.user.authenticated) {
      this.login(cb)
    }
  },

  checkAuth () {
    var jwt = window.localStorage.getItem('token')
    if (jwt) {
      log('login from token')
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  error (message) {
    this.$message.error({
      message: message
    })
  },

  logout () {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('idUser')
    window.localStorage.removeItem('typeUser')
    window.location.href = BASE_URL + '/cuenta/logout'
  }
}
