var paths = {}

// pro
paths.prod = {}
paths.prod.baseUrl = 'http://www.neoauto.com'
paths.prod.staticUrl = 'http://cds.neoauto.g3c.pe/dashboard/'
paths.prod.serviceUrl = 'https://services.neoauto.com/v1'

// pre
paths.pre = {}
paths.pre.baseUrl = 'http://pre.2e.neoauto.com'
paths.pre.staticUrl = 'http://cds.pre.2e.neoauto.g3c.pe/dashboard/'
paths.pre.serviceUrl = 'https://pre.services.neoauto.com/v1'

// dev
paths.dev = {}
paths.dev.baseUrl = 'http://dev.2e.neoauto.com'
paths.dev.staticUrl = 'http://cds.dev.2e.neoauto.g3c.pe/dashboard/'
paths.dev.serviceUrl = 'https://dev.services.neoauto.com/v1'

// local
paths.local = {}
paths.local.baseUrl = 'http://local.neoauto3.com'
paths.local.staticUrl = 'http://local.neoauto3.com/neoauto3/public/static/dashboard/'
paths.local.serviceUrl = 'http://local.services.neoauto.com:9292/v1'

module.exports = paths
