<template>
    <ul>
        <li v-for="bread in breadcrumb"> {{bread}} </li>
    </ul>
</template>

<script type="text/javascript">
    export default{		
        props: ["breadcrumb"]		
    }
</script>

<style scope lang="stylus">
    ul
        padding 0
        
        li
            display inline-block
            
            &:after
                content "/"
                display inline-block				
    
</style>
