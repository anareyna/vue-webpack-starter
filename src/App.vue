<template lang="pug">
    #app
        router-link(to="/")
            el-button(type='warning') Mis Avisos
        router-link(to="/concesionario/suscripcion/listar")
            el-button(type='warning') Suscribirse
        router-link(to="/")
            el-button(type='warning') Utilidades
        router-view
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="stylus">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    
    a{
        margin: 0 5px;
    }
}
</style>
