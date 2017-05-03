<template lang="pug">   
    div        
        el-popover(ref='popover1', placement='top-start', title='Title', width='200')
            div 
                p ¿Seguro que deseas eliminar?
                    el-button(size="mini", type="text", @click="visiblePopup = false") Cancelar
                    el-button(size="mini", type="primary", @click="visiblePopup = false") Confirmar
        el-button(v-popover:popover1="") test

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
                        el-button(size='small', type='danger', @click='handleDelete(scope.$index, tableData)') Delete

                
</template>

<script type="text/javascript"> 

    import axios from 'axios'
    let urlList      = 'http://172.18.60.50:3004/persons';
    
    export default {
            mounted(){              
             axios.get(urlList)
                .then((response) => {
                 this.tableData = response.data;            
                })          
            },
            data() {
                return {
                    listCategories: [{name:"beauty", id:1}, {name:"foods", id:5}, {name:"travels", id:3}],
                    tableData: [],
                    visiblePopup: false
                }
            },
            methods: {
                handleEdit(index, row) {
                    //console.log(index, row);
                },
                loadData(data){
                    console.log("asas", data)
                },
                handleDelete(index, rows) {
                    console.log(index, rows);

                    axios.delete(urlList + "/" + rows[0].id).then((response) => {
                        this.$router.push({ name:'listarSuscripcion' })
                        rows.splice(index, 1)
                    })
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
