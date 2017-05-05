<template lang="pug">
    div
        ul
            li(v-for="cat in data") {{cat}}        
</template>

<script type="text/javascript">
    export default{		
        props: ["data"]        
    }
</script>

<style scope lang="stylus">
    ul
        padding 0
        margin 0
        
        li
            display inline-block
            padding 0 5px
    
</style>
