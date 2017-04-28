<template lang="pug">	
	div
		template
			el-table(:data='tableData', style='width: 100%')
				el-table-column(label="lastname" width='180')
					template(scope="scope")
						span {{ scope.row.lastname }}
				el-table-column(label="mail" width='180')
					template(scope="scope")
						span {{ scope.row.mail }}
				el-table-column(label="names" width='180')
					template(scope="scope")
						span {{ scope.row.names }}
				el-table-column(label="sex" width='180')
					template(scope="scope")
						span {{ scope.row.sex }}	

				el-table-column(label='Operations')
					template(scope='scope')
						el-button(size='small', @click='handleEdit(scope.$index, scope.row)') Edit
						el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row)') Delete
</template>

<script type="text/javascript">	
	export default {		
			mounted(){
				let persons = [];
				firebase.database().ref('/suscribe').once('value').then((success)=>{
		      let data = success.val();
		      for(let v in data){
		      	persons.push({
		      		lastname : data[v].lastname,
		      		mail     : data[v].mail,
		      		names    : data[v].names,
		      		sex      : data[v].sex
		      	});
		      }
		      //console.log(persons);
		      //this.tableData = 
		      //console.log(data.val())
		      this.tableData = persons; 
		    })
			},
			data() {
				return {
					tableData: []	
				}
			},
			methods: {
				handleEdit(index, row) {
					console.log(index, row);
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
