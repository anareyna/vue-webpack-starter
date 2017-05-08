<template lang="pug">
    div
        h2 Editar Usuario
        el-row(type='flex' justify="center")
            el-col(:span='8')
                el-form(ref='frm', :rules='rules', :model='frm', label-width='120px' @submit.prevent.native="submitForm('frm')")
                    el-form-item(label='Nombres' , prop='name')
                        el-input(v-model='frm.name')
                    el-form-item(label='Apellidos')
                        el-input(v-model='frm.lastname')
                    el-form-item(label='Email' , prop='email')
                        el-input(v-model='frm.email')
                    el-form-item(label='Categorías' prop='categories')
                        el-checkbox-group(v-model='frm.categories')
                            el-checkbox(v-for="category in listCategories" ,:label="category.id" ,:key="category.id") {{category.name}}
                    el-form-item(label='Género')
                        el-radio-group(v-model='frm.gender')
                            el-radio(label='Masculino')
                            el-radio(label='Femenino')
                    el-form-item
                        el-button(type='primary', native-type="submit") Actualizar
                        router-link(:to="{name: 'listarSuscripcion'}")
                            el-button Cancelar
</template>

<script type="text/javascript">
    export default {
        props: ['listCategories', 'urlServer'],
        data() {
            return {
                frm: {
                    categories : [],
                    Email      : '',
                    gender     : '',
                    lastname   : '',
                    name       : '',
                },
                rules: {
                    name: [
                        { required: true, message: 'Ingrese nombre', trigger: 'blur' },
                        { min: 3, message: 'Minimo 3 caracteres', trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: 'Ingrese email', trigger: 'blur' },
                        { type: 'email', message: 'Ingrese mail válido', trigger: 'blur' },
                    ],
                    categories: [
                        { type: 'array', required: true, message: 'Selecciona al menos una categoría', trigger: 'change' },
                    ],
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.put(`${this.urlServer}/${this.$route.params.id}`, {
                            categories : this.frm.categories,
                            lastname   : this.frm.lastname,
                            mail       : this.frm.email,
                            names      : this.frm.name,
                            sex        : this.frm.gender,
                        }).then(() => {
                            this.$notify({
                                message : 'Usuario modificado.',
                                type    : 'success',
                            });
                            this.$router.push({ name: 'listarSuscripcion' });
                        });
                    } else {
                        return false;
                    }
                });
            },
        },
        mounted() {
            this.$axios.get(`${this.urlServer}/${this.$route.params.id}`)
                .then((response) => {
                    this.frm.categories = response.data.categories;
                    this.frm.email      = response.data.mail;
                    this.frm.gender     = response.data.sex;
                    this.frm.lastname   = response.data.lastname;
                    this.frm.name       = response.data.names;
                });
        },
    };
</script>

<style media="screen">
</style>
