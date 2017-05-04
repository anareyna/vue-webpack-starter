<template lang="pug"> 
    div
        template
            el-table(:data='tableData', style='width: 100%')
                el-table-column(label="e-mail" width='180')
                    template(scope="scope")
                        span {{ scope.row.mail }}
                el-table-column(label="Apellido" width='180')
                    template(scope="scope")
                        span {{  scope.row.lastname }}
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
                        el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row.id)') Delete
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
