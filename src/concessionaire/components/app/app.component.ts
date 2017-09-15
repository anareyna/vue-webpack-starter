import guard from './../../concessionaire.guard'
export default {
  data () {
    return {
      user: guard.user
    }
  }
}
