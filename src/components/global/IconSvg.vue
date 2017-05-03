<template lang="pug">
    i.icon(
        :class="getClass()"
        v-html="getContent()"
    )
</template>

<script type="text/javascript">
    import icon from 'static/icons/index.js'

    export default {
        props    : ['name'],
        methods  :{
            getContent(){
                return icon[this.name];
            },
            getClass(){
                return 'icon_' + this.name ;
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
