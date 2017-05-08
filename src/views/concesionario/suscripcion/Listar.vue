<template lang="pug">
    div
        .block
            el-pagination(
                layout="prev, pager, next",
                :total="totalPage",
                :page-size="pageSize",
                @current-change="handleChangePage",
                :current-page="currentPage"
                )
        el-table(:data='tableData' v-loading="loading")
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
                    el-button(size='small', type='info',icon="view" @click='onViewInfo(scope.row)') View
        .block
            el-pagination(
                layout="prev, pager, next",
                :total="totalPage",
                :page-size="pageSize",
                @current-change="handleChangePage",
                :current-page="currentPage"
                )
        el-dialog(title="Suscripción" v-model="dialogViewInfo" size="tiny")
            el-row(:gutter="10")
                el-col(:span="6")
                    .grid-content.bg-purple Nombres
                el-col(:span="18")
                    .grid-content.bg-purple-light {{dialogViewInfoData.names}}
            el-row(:gutter="10")
                el-col(:span="6")
                    .grid-content.bg-purple Apellifos
                el-col(:span="18")
                    .grid-content.bg-purple-light {{dialogViewInfoData.lastname}}
            el-row(:gutter="10")
                el-col(:span="6")
                    .grid-content.bg-purple Email
                el-col(:span="18")
                    .grid-content.bg-purple-light {{dialogViewInfoData.mail}}
            el-row(:gutter="10")
                el-col(:span="6")
                    .grid-content.bg-purple Categorias
                el-col(:span="18")
                    .grid-content.bg-purple-light
                        cats(:data="dialogViewInfoData.categories")
            span(slot="footer", class="dialog-footer")
                el-button(@click="dialogViewInfo = false") Cerrar
</template>

<script type="text/javascript">
    
import Vue from 'vue'
import Component from 'vue-class-component'
import serviceSuscripcion from 'services/service.suscripcion.js'

import Cats from "components/Cats.vue";

@Component({
    props : ["listCategories", "urlServer"],
    components : {Cats}    
})

class Listar extends Vue {

    tableData = []
    totalPage = 0
    pageSize = 10
    currentPage = 1
    loading = true
    dialogViewInfo = false
    dialogViewInfoData = {}
    oService = new serviceSuscripcion()

    mounted () {
        this.getdata()
    }

    getdata(){
        this.loading = true
        
        setTimeout(()=> {            
            this.oService.getSuscripciones().then((response)=>{
                this.totalPage = response.data.length
                this.loading   = false
                this.tableData = response.data.filter((row, index) => {
                    if ( (this.currentPage-1) * this.pageSize <= index && index < this.currentPage * this.pageSize) {
                        row.categories = this.formatCategories(row.categories)
                        return row
                    }
                })
            })            
        }, 500);
    }

    handleChangePage(currentPage){
        this.currentPage = currentPage
        this.getdata()
    }

    formatCategories(ids){
        let names = [];
        for(let cat in this.listCategories){
            if(ids.includes(this.listCategories[cat].id)){
                names.push(this.listCategories[cat].name)
            }
        }         
        return names;
    }

    handleClose(){
        this.$confirm('Are you sure to close this dialog?') .then(_ => {
            done();
        }).catch(_ => {});
    }
    
    onViewInfo(row){
        this.dialogViewInfoData = row
        this.dialogViewInfo     = true
    }

    handleDelete(index, id) {
        this.$confirm('Seguro que quiere eliminar?', 'Warning', {
            cancelButtonText : 'Cancelar',
            confirmButtonText: 'Eliminar',
            type             : 'warning'
        }).then(() => {
            this.oService.deleteSuscripcion(id).then((response) => {            
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
    }
}

export default Listar;

</script>

<style lang="stylus">
    .block
        text-align: right
    
    .el-row
        margin-bottom 15px
        
</style>
