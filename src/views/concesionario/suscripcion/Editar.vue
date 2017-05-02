<template lang="pug">
	div
		h2 Editar Usuario
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
						el-button(type='primary', @click='onSubmit') Actualizar
						el-button Cancelar

</template>

<script type="text/javascript">	

	import axios from 'axios'	

	let urlList 	 = 'http://localhost:3004/persons';

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
					let cats = []
					for(let cat in this.form.categories){
						if(cat.true){
							cats.push(cat);
						}
					}
					console.log("cats", cats);
	      	//console.log(this.form.categories);        
	        // Object.keys(this.form.categories).map()
	        // for(let cat in this.form.categories){
	        // 	console.log(cat);
	        // }
	        //console.log(this.form.categories);
					axios.put(urlList+"/"+this.$route.params.id, {
						"categories" : cats,
						"lastname"   : this.form.lastname,
						"mail"       : this.form.email,
						"names"      : this.form.name,
						"sex"        : this.form.gender
					})
      //     .then((response)=>{					  
          	
      //     })	
	   //      firebase.database().ref('/suscribe').push({
    //          "categories" : {
    //          	"beauty": this.form.categories.beauty,
    //          	"foods": this.form.categories.foods, 
    //          	"travels": this.form.categories.travels
    //          },
    //          "lastname"   : this.form.lastname,
    //          "mail"       : this.form.email,
    //          "names"      : this.form.name,
    //          "sex"        : this.form.gender
    //     	}).then(() => {
    //     		console.log("victor")
				// firebase.database().ref('/suscribe').once('value').then(function(snapshot) {
			 //    console.log("-list-", snapshot.val());
			 //    });	
    //     	})
	      }
	    },
	  

		mounted(){

			axios.get(urlList+"/"+this.$route.params.id)
				.then((response) => {					
					this.form.name       = response.data.names
					this.form.email      = response.data.mail
					this.form.gender     = response.data.sex
					this.form.lastname   = response.data.lastname
					let cats = response.data.categories;
					let ocats = {}
					for(let i in cats){
						ocats[cats[i]] = true;
					}					
					this.form.categories = ocats;
				})		 
		}
	}
</script>

<style media="screen">
	i{
		width: 350px;
		display: inline-block;
	}
</style>