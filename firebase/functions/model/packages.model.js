var firebase = require('../config/firebase.config')
var db = firebase.database();

function getListByPage(idStatus, page, limit) {
	return db.ref('/package/items').orderByChild('idStatusEntityPackage').equalTo(idStatus).once('value').then(function(snapshots) {
		let content = []
		let result = {}
		
		snapshots.forEach(function(snapshot){
			content.push(snapshot.val())
		})
		result['total'] = content.length
		result['items'] = content.slice( ( page - 1 ) * limit, page * limit );
		return  result
	})
}

function deleted(id){
	let current = db.ref('/package/items/' + id ).remove()
}

module.exports = { getListByPage, deleted };