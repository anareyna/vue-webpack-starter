<template lang="pug"> 
    div        
        el-table(:data='tableData')
            el-table-column(label="e-mail")
                template(scope="scope")
                    span {{ scope.row.mail }}
            el-table-column(label="Apellido")
                template(scope="scope")
                    span {{  scope.row.lastname }}
            el-table-column(label="Nombres")
                template(scope="scope")
                    span {{ scope.row.names }}
            el-table-column(label="Sexo")
                template(scope="scope")
                    span {{ scope.row.sex }}  
            el-table-column(label="Categorias")
                template(scope="scope")
                    span
                        cats(:data="scope.row.categories")
            el-table-column(label='Opciones' width="220")
                template(scope='scope')                    
                    el-button(size='small', type='primary', icon="edit" @click='handleEdit(scope.row.id)') Editar                        
                    el-button(size='small', type='danger',icon="delete" @click='handleDelete(scope.$index, scope.row.id)') Delete
                    el-button(size='small', type='info',icon="view" @click='handleView(scope.$index, scope.row.id)') View
        .block
            el-pagination(
                layout="prev, pager, next",
                :total="totalPage",
                :page-size="pageSize",
                @current-change="handleChangePage",
                :current-page="currentPage"
                )
</template>

<script type="text/javascript">
    
    import Cats from "components/Cats.vue";
    
    export default {
        components : {Cats},
        props      : ["listCategories", "urlServer"],
        data() {
            return {
                tableData  : [],
                totalPage  : 0,
                pageSize   : 10,
                currentPage: 1
            }
        },
        mounted(){
            this.getdata()
        },
        methods: {           
            getdata(){
                this.$axios.get(this.urlServer).then((response) => {
                    this.totalPage = response.data.length
                    
                    let data = response.data.filter((row, index) => {
                        if ( (this.currentPage-1) * this.pageSize <= index && index < this.currentPage * this.pageSize) {
                            console.log("index", index)
                            row.categories = this.formatCategories(row.categories)
                            return row
                        }
                    })
                    
                    this.tableData = data;
                })
            },
            formatCategories(ids) {
                let names = [];
                for(let cat in this.listCategories){
                    if(ids.includes(this.listCategories[cat].id)){
                        names.push(this.listCategories[cat].name)
                    }
                }         
                return names;
            },
            handleDelete(index, id) {
                console.log(index, id);
                this.$confirm('Seguro que quiere eliminar?', 'Warning', {
                    cancelButtonText : 'Cancelar',
                    confirmButtonText: 'Eliminar',
                    type             : 'warning'
                }).then(() => {
                    this.$axios.delete(this.urlServer + "/" + id).then((response) => {
                        this.tableData.splice(index, 1)
                        if (this.currentPage * this.pageSize > this.totalPage-1 && this.currentPage - 1 * this.pageSize == this.totalPage-1) {
                            this.currentPage--
                        }
                        else{
                            this.getdata()
                        }
                    })
                    this.$notify({
                        message: 'Se eliminó usuario.',
                        type: 'success'
                    })
                }).catch(() => {
                                
                });                    
            },
            handleChangePage(currentPage){
                this.currentPage = currentPage
                this.getdata()
            }
        }         
    } 
</script>

<style media="screen">
</style>
