<template lang="pug">
  div 
    h2 Agregar Usuario
    el-row(type='flex' justify="center") 
      el-col(:span='8')
        el-form(:model='frm', :rules='rules', ref='frm', label-width='120px')
          el-form-item(label='Nombres', prop='name')
            el-input(v-model='frm.name')
          el-form-item(label='Apellidos')
            el-input(v-model='frm.lastname')
          el-form-item(label='Email', prop='email')
            el-input(v-model='frm.email')
          el-form-item(label='Categorías', prop='categories')
            el-checkbox-group(v-model='frm.categories')
              el-checkbox(v-for="category in listCategories" ,:label="category.id", :key="category.id") {{category.name}}        
          el-form-item(label='Género')
            el-radio-group(v-model='frm.gender')
                el-radio(label='Masculino')
                el-radio(label='Femenino')
          el-form-item           
            el-button(type='primary', @click="submitForm('frm')") Agregar
            el-button(@click="resetForm('frm')") Reset            
</template>


<script>
  export default {
    props : ["listCategories", "urlServer"],
    data() {
      return {        
        frm: {
          name: '',
          lastname: '',
          categories : [],
          email: '',
          gender: ''
        },
        rules: {
          name: [
            { required: true, message: 'Ingrese nombre', trigger: 'blur' },
            { min: 3, message: 'Minimo 3 caracteres', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Ingrese email', trigger: 'blur' },
            { type: 'email', message: 'Ingrese mail válido', trigger: 'blur' }
          ],
          categories: [
            { type: 'array', required: true, message: 'Selecciona al menos una categoría', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {        
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              message: 'Usuario suscrito.',
              type: 'success'
            })
            
            this.$axios.post(this.urlServer, {
              "id"         : Math.random().toString(36).substr(2, 9), 
              "names"      : this.frm.name,
              "lastname"   : this.frm.lastname,
              "categories" : this.frm.categories,
              "mail"       : this.frm.email,
              "sex"        : this.frm.gender
              
            }).then((response) => {
              console.log(response, 'response')
              this.$router.push({name:'listarSuscripcion'})
            })
          } else {
            console.log('error submit!!')
            return false
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
