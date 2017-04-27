<template>	
	<div>
		<h1>Avisos Activos</h1>		
		<breadcrumb :breadcrumb="BreadcrumbAvisosActivos"></breadcrumb>
	</div>

</template>

<script type="text/javascript">
	
	import Breadcrumb from './../../../components/Breadcrumb.vue'	
	import axios from 'axios'	

	let urlBreadcrumbs 	 = 'http://www.json-generator.com/api/json/get/cvGPhPaniq?indent=2';
	let urlAvisosActivos = 'https://randomuser.me/api/?results=20';

	export default {
		components : {Breadcrumb},		
		mounted(){
			this.loadBreadcrumb();
			this.loadAvisosActivos();
		},
		methods : {
			loadBreadcrumb(){
				axios.get(urlBreadcrumbs)
					.then((response)=>{					  
					  this.BreadcrumbAvisosActivos = response.data.tags;	  
					})
			}			
		},
		data(){
			return {
				BreadcrumbAvisosActivos: []	
			}
		}
	}

</script>