<template>	
	<div>
		<h1>Avisos Activos</h1>		
		
		<!-- <breadcrumb :breadcrumb="BreadcrumbAvisosActivos"></breadcrumb> -->
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
		  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
		  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
		  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
		</el-breadcrumb>
		
		 <template>
		  <el-table
		    :data="tableData"
		    stripe
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="Date"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="Name"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="Address">
		    </el-table-column>
		  </el-table> 
		</template>
	</div>

</template>

<script type="text/javascript">	

	import axios from 'axios'
	let urlBreadcrumbs 	 = 'http://www.json-generator.com/api/json/get/cvGPhPaniq?indent=2';
	let urlAvisosActivos = 'https://randomuser.me/api/?results=20';

	export default {	
		mounted(){
			this.loadBreadcrumb();			
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
				BreadcrumbAvisosActivos: [],
				tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
			}
		}
	}

</script>