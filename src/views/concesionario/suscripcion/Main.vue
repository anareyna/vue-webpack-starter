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
        <router-view></router-view>
    </main>
</template>

<script type="text/javascript">
</script>

<style media="screen">
    .btns{
        margin-bottom: 10px;
    }
</style>
