<template lang="pug">	
	div
		template
			el-table(:data='tableData', style='width: 100%')
				el-table-column(label="Apellido" width='180')
					template(scope="scope")
						span {{  scope.row.lastname }}
				el-table-column(label="e-mail" width='180')
					template(scope="scope")
						span {{ scope.row.mail }}
				el-table-column(label="Nombres" width='180')
					template(scope="scope")
						span {{ scope.row.names }}
				el-table-column(label="Sexo" width='180')
					template(scope="scope")
						span {{ scope.row.sex }}	
				el-table-column(label="Categorias" width='180')
					template(scope="scope")
						span {{ scope.row.categories }}
				el-table-column(label='Opciones')
					template(scope='scope')
						router-link(:to="{name:'editarSuscripcion', params: {id: scope.row.id}}") Edit						
						el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row)') Delete
</template>

<script type="text/javascript">	

	import axios from 'axios'
	let urlList 	 = 'http://172.18.60.50:3004/persons';
	
	export default {
			mounted(){				
		  	 axios.get(urlList)
          .then((response) =>{
          	this.tableData = response.data;          	
          })		  	
			},
			data() {
				return {
					listCategories: [{name:"beauty", id:1}, {name:"foods", id:5}, {name:"travels", id:3}],
					tableData: []	
				}
			},
			methods: {
				handleEdit(index, row) {
					//console.log(index, row);
				},
				loadData(data){
					console.log("asas", data)
				},
				handleDelete(index, row) {
					console.log(index, row);
				}
			}					
		}	
</script>

<style media="screen">
	i{
		width: 350px;
		display: inline-block;
	}
</style>
