export default {
  log () {
    window['log'] = (...args) => {
      if(process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'pre'){
        console.log.apply(console, args)
      }
    }
  }
}
