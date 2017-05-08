<template lang="pug">
    #app
        header
            router-link(to="/")
                el-button(type='warning') Home                    
            router-link(:to="{name:'listarSuscripcion'}")
                el-button(type='warning') Suscribirse
            router-link(to="/")
                el-button(type='warning') Mis Avisos
        router-view
</template>

<script>
    // import Vue from 'vue'
    // import Component from 'vue-class-component'

    
    // export default {
    //     name: 'app',
    // }
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
}

header
    a
        display inline-block
        margin 0 5px

.container
    h2
        text-align center
</style>
