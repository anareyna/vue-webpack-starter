<template lang="pug">
    #app
        router-link(to="/")
            el-button(type='warning') Home
        router-link(:to="{name:'listarSuscripcion'}")
            el-button(type='warning') Suscribirse
        router-link(to="/")
            el-button(type='warning') Mis Avisos
        router-view
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="stylus">
body
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    
#app {
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
