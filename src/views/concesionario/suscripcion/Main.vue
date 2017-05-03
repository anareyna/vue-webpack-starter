<template>
    <main>
        <h1>Suscripción:</h1>
        <div class="btns">
            <router-link :to="{name:'listarSuscripcion'}" active-class="activo">
                <el-button type='primary'>Listar</el-button>
            </router-link>
            <router-link :to="{name:'agregarSuscripcion'}" active-class="activo">
                <el-button type='success'>Agregar</el-button>
            </router-link>
        </div>
        <router-view :listCategories="listCategories" :urlServer="urlServer"></router-view>
    </main>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                urlServer      : 'http://172.18.60.50:3004/persons',            
                listCategories : [{name:"beauty", id:1}, {name:"foods", id:5}, {name:"travels", id:3}]
            }
        }
    }
</script>

<style media="screen">
    .btns{
        margin-bottom: 10px;
    }
</style>
