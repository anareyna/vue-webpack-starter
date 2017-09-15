const package = require('./modules/package')

let module = process.env.MODULE
console.log("process.env : ", process.env)
switch(modules) {
    case 'package':
        package()
        break;
    case 'all':
        package()
    default:
        console.log("modulo no encontrado")
}