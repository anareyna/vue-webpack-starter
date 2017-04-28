<template lang="pug">
	div
		h2 Agregar Usuario
		el-row(type='flex' justify="center") 
			el-col(:span='8')
				el-form(ref='form', :model='form', label-width='120px')
					el-form-item(label='Nombres')
						el-input(v-model='form.name')
					el-form-item(label='Apellidos')
						el-input(v-model='form.lastname')
					el-form-item(label='Email')
						el-input(v-model='form.email')
					el-form-item(label='Categorías')
						el-checkbox-group(v-model='form.categories.beauty')
							el-checkbox(label='Belleza')
						el-checkbox-group(v-model='form.categories.foods')
							el-checkbox(label='Comida')
						el-checkbox-group(v-model='form.categories.travels')
							el-checkbox(label='Viajes')
					el-form-item(label='Género')
						el-radio-group(v-model='form.gender')
							el-radio(label='Masculino')
							el-radio(label='Femenino')
					el-form-item
						el-button(type='primary', @click='onSubmit') Agregar
						el-button Cancelar

</template>

<script type="text/javascript">	
	export default {
		data() {
	      return {
	        form: {
	          name: '',
	          lastname: '',
	          categories: {
	          	"beauty": false,
             	"foods": false, 
             	"travels": false
	          },
	          email: '',
	          gender: 'M'
	        }
	      }
	    },
	    methods: {
	      onSubmit() {
	        console.log('submit!');
	        firebase.database().ref('/suscribe').push({
             "categories" : {
             	"beauty": this.form.categories.beauty,
             	"foods": this.form.categories.foods, 
             	"travels": this.form.categories.travels
             },
             "lastname"   : this.form.lastname,
             "mail"       : this.form.email,
             "names"      : this.form.name,
             "sex"        : this.form.gender
        	}).then(() => {
        		console.log("victor")
				firebase.database().ref('/suscribe').once('value').then(function(snapshot) {
			    console.log("-list-", snapshot.val());
			    });	
        	})
	      }
	    }
	  

		//mounted(){			
			// firebase.database().ref('/suscribe').push({
			// 	 "categories" : {"beauty": true, "foods": false, "travels": false},
			// 	 "lastname"   : "AAAAACastro Vivela  23423432",
			// 	 "mail"       : "dfdsfjjcv@gmail.com",
			// 	 "names"      : "dsfdsf sJulio Jhonnatan 1",
			// 	 "sex"        : "M"
			// }).then(()=>{
			// 	console.log("victor")
			// 	firebase.database().ref('/suscribe').once('value').then(function(snapshot) {
		 //      console.log("-list-", snapshot.val());
		 //    });	

			// })

					
		//}
	}
</script>

<style media="screen">
	i{
		width: 350px;
		display: inline-block;
	}
</style>