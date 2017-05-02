<template lang="pug">
  div 
    h2 Agregar Usuario
    el-row(type='flex' justify="center") 
      el-col(:span='8')
        el-form(:model='frmAdd', :rules='rules', ref='frmAdd', label-width='120px')
          el-form-item(label='Nombres', prop='name')
            el-input(v-model='frmAdd.name')
          el-form-item(label='Apellidos')
            el-input(v-model='frmAdd.lastname')
          el-form-item(label='Email', prop='email')
            el-input(v-model='frmAdd.email')
          el-form-item(label='Categorías')
            el-checkbox-group(v-model='frmAdd.categories')
                el-checkbox(label='Belleza')
                el-checkbox(label='Comida')
                el-checkbox(label='Viajes')
          el-form-item(label='Género')
            el-radio-group(v-model='frmAdd.gender')
                el-radio(label='Masculino')
                el-radio(label='Femenino')

          el-form-item
            el-button(type='primary', @click="submitForm('frmAdd')") Agregar
            el-button(@click="resetForm('frmAdd')") Reset
</template>


<script>
  import axios from 'axios'

  let urlList = 'http://172.18.60.50:3004/persons'

  export default {
    data() {
      return {
        frmAdd: {
          name: '',
          lastname: '',
          categories: [],
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
            
            axios.post(urlList, {
              "id"         : Math.random().toString(36).substr(2, 9), 
              "names"      : this.frmAdd.name,
              "lastname"   : this.frmAdd.lastname,
              "categories" : [
                  this.frmAdd.categories.beauty,
                  this.frmAdd.categories.foods,
                  this.frmAdd.categories.travels
              ],
              "mail"       : this.frmAdd.email,
              "sex"        : this.frmAdd.gender
            }).then((response) => {
              console.log(response, 'response')
              this.$router.push('listar')
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
