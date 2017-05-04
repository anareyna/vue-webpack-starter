<template lang="pug"> 
    main
        h1 Suscripción:
        el-row(type="flex", justify="center")
            el-col(:span="18")
                .grid-content
                    .btns
                        router-link(:to="{name:'listarSuscripcion'}", active-class='activo')
                            el-button(type='primary') Listar
                        router-link(:to="{name:'agregarSuscripcion'}", active-class='activo')
                            el-button(type='success') Agregar
                    .container
                        router-view(:listCategories='listCategories', :urlServer='urlServer')
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
    .btns a{
        display: inline-block;
        margin: 0 5px
    }
    .container{
        text-align: left;
    }
</style>
