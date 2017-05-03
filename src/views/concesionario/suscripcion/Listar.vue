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
						span
							cats(:data="scope.row.categories")
				el-table-column(label='Opciones')
					template(scope='scope')
						router-link(:to="{name:'editarSuscripcion', params: {id: scope.row.id}}") Edit						
						el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row)') Delete
</template>

<script type="text/javascript">
	
	import Cats from "components/Cats.vue";
	
	export default {
			components : {Cats},
			mounted(){				
		  	 this.$axios.get(this.urlServer)
          .then((response) => {
          	// response.data = response.data.map((row)=>{ 
          	// 	//console.log("row", row.categories);
          	// 	console.log(this.formatCategories(row.categories)); 
          	// });
          	//console.log(response.data);
          	this.tableData = response.data;          	
          })		  	
			},
			props : ["listCategories", "urlServer"],
			data() {
				return {					
					tableData: []	
				}
			},
			methods: {
				formatCategories(ids) {
					let names = [];
					for(let cat in this.listCategories){
						for(let id in ids){
							console.log("id", ids[id]);
              // if (this.listCategories[cat].id == id){
							// 	names.push(this.listCategories[cat].name)
							// }
						}
					}
					//return names;
					
					// let aa = ids.map((id)=>{
					// 	//console.log(id);
					// 	return this.listCategories.filter((v)=>{v.id==id});
					// });
					// console.log(aa);
					//return 
				},
				loadData(data){
					console.log("asas", data)
				},
				handleDelete(index, id) {
          console.log(index, id);
          this.$confirm('Seguro que quiere eliminar?', 'Warning', {
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            type: 'warning'
          }).then(() => {
            this.$axios.delete(this.urlServer + "/" + id).then((response) => {
              this.tableData.splice(index, 1)
            })
            this.$notify({
              message: 'Se eliminó usuario.',
              type: 'success'
            })
          }).catch(() => {
                  
          });                    
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
