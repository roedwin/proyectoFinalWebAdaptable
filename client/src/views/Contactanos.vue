<template>
    <div class="mt-5"> 
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="8" >
        <h1 style="text-align:center;">Contactanos</h1>   
        <b-form-group 
        label-cols-lg="3"
        label="Nombre: "
        label-align-sm="center"
        label-for="nombre"
        >
          <b-form-input id="nombre" placeholder="Escribe tu nombre completo" v-model="nombre"></b-form-input>
          <pre>{{ nombre }}</pre>
        </b-form-group> 
        <b-form-group 
        label-cols-lg="3"
        label="Correo: "
        label-align-sm="center"
        label-for="correo">
          <b-form-input v-model="correo" id="correo" placeholder="Escribe tu correo electronico"></b-form-input>
        </b-form-group> 
        <b-form-group 
        label-cols-lg="3"
        label="Telefono: "
        label-align-sm="center"
        label-for="tel">
          <b-form-input v-model="telefono" type="text" id="tel" placeholder="Escribe tu numero de telefono ej: 7777-7777"></b-form-input>
        </b-form-group> 
        <b-form-group 
        label-cols-lg="3"
        label="Mensaje: "
        label-align-sm="center"
        label-for="tel">
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Escribe tu mensaje o sugerencia"
          ></b-form-textarea>
        </b-form-group> 
      </b-col>      
    </b-row>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col cols="auto" class="p-3">
          <b-button @click="AgregarArreglo" variant="success">Enviar</b-button>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <mensaje v-for="(dat,index) in arrayDatos" :key="index"> {{dat.nomb}} </mensaje>
    <pre> {{ $data }} </pre>
  </div>
</template>
<script>
export default {
  name: 'contactanos',  
  data() {
    return {
      nombre: '',
      correo: '',
      telefono: '',
      text: '',
      arrayDatos: [
      ]
    }
  },
  methods: {
    AgregarArreglo () {
      this.arrayDatos.push({
        nomb: this.nombre,
        corr: this.correo,
        tel: this.telefono,
        text0: this.text
        });
        this.nombre = '';
        this.correo = '';
        this.telefono = '';
        this.text = '';
    }
  }
}
</script>