var packagesModel = require('../model/packages.model')

function list(req, res) {

	let idStatus = parseInt(req.query.idStatus)
	let page =  parseInt(req.query.page)
	let limit = parseInt(req.query.limit || 20)
	
	packagesModel
		.getListByPage(idStatus, page, limit)
		.then(success => res.send({
			status: true,
			message: 'Petición exitosa.',
			data: { 
				total: success.total,
				items: success.items
			}
		}))
		.catch(error => res.status(500).send({
			'status': false,
			"message": error
		}))
}

function deleted(req, res){
	let id =  parseInt(req.params.id)
	packagesModel
		.deleted(id)
	res.send({
			'status': true,
			'message': 'Datos Eliminados'
		})
}

module.exports = { list, deleted };