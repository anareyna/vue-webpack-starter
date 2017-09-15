const faker = require('faker');
const fn = require("../util/util.js")
var firebase = require('../../config/firebase.config')
var db = firebase.database();

function createFakeData() {

	let result = {
		items: {}
	}
	function setData(id) {
		return {
			id: id,
			idEntity: faker.random.number(),
			idUserAdvertiser: fn.integerBetween(10,20),
			entityPackageName: fn.random(["DESTACADO", "PREMIUM", "SIMPLE"]),
			registerDateEntityPackage: faker.date.future(),
			paymentDateEntityPackage: faker.date.past(),
			startDateEntityPackage: faker.date.past(),
			endDateEntityPackage: faker.date.past(),
			activationDateEntityPackage: faker.date.past(),
			activeEntityPackage: fn.numberBetween(0,1),
			flagAnnouncementPaperPhoto: fn.integerBetween(0,1),
			announcementPaperPhotoEntityPackage: fn.integerBetween(1,200),
			announcementPaperPhotoAvailable: fn.integerBetween(1,200),
			showStoreEntityPackage: fn.integerBetween(0,1),
			durationDayEntityPackage: fn.random([30,60,90,120]),
			priceEntityPackage: fn.random([1500,2500,3000]),
			paymentTypeEntityPackage: fn.integerBetween(1,5),
			contractNumber: faker.random.number(),
			unitPriceEntityPackage: fn.numberBetween(1,2),
			unitPriceTalanEntityPackage: fn.numberBetween(0,1),
			orderSearch: fn.numberBetween(0,1),
			numberAdditionalWords: fn.numberBetween(0,1),
			financialRecharge: fn.numberBetween(0,1),
			evaluationClient: fn.random([1,2,3,5]),
			idAdecsys: faker.random.number(),
			numberPostFacebook: fn.numberBetween(0,5),
			webPriceEntityPackage: faker.random.number(),
			printedPriceEntityPackage: faker.random.number(),
			idConcessionaire: fn.random([1,2,3,5]),
			idVehicleType: fn.random([1,2,3,5]),
			idPackage: fn.random([1,2,3,5]),
			idPackageDurationPrice: fn.random([1,2,3,5]),
			idStatusEntityPackage: fn.random([1,2,3,5])
		}
	}

	for (var i = 0; i < 400; i++) {
		let index = faker.random.number()
		result.items[index] = setData(index)
	}
	db.ref('package/').set(result);
}
module.exports = createFakeData