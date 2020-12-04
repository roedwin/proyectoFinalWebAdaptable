<template>
    <div class="container">
        <h1>Acerca de nosotros</h1>
        <p>
        Foto Study somos una empresa con gran trayectoria en el área de desarrollo y ediciones de fotos en nuestro país en donde nos sentimos orgullosos de poder satisfacer a nuestros clientes.
        </p>
        <h3>Misión:</h3> 
        <p>Somos una empresa con emoción a través del poder de la creatividad y la tecnología.</p>
        <h3>Visión:</h3> 
        <p>Ser una empresa reconocida a nivel mundial por nuestro desarrollo de tecnología.</p>
        <h3>Valores:</h3>
        <ul>
            <li v-for="(i, index) in valores" :key="index">
                {{ i }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            valores:['Honestidad','Respeto','Empatia']
        }
    }
}
</script>