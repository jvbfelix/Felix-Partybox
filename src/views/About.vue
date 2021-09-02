<template>
  <div class="about">
    <iframe
    :src=spatial
    frameborder="0" 
    scrolling="no" 
    allowfullscreen="true" allow="camera;microphone">
    </iframe>
    <div v-if="!presentes" v-on:click="showpresentes()" class="presentes-btn">Sala de Construção 📝</div>
     <Container v-if="presentes" v-on:click="closepresentes()" func="presentesOff" :end=invision />
  </div>
</template>

<script>
import store from '../store'
import Container from '@/components/Container.vue'

export default {
  name: 'About',
  components: {
    Container
  },
  data() {
    return {
      mural:false,
    };
  },
  computed: {
      presentes: () => store.getters.presentes,
      invision: () => process.env.VUE_APP_INVISION,
      spatial: () => process.env.VUE_APP_SPATIAL,
  },
  methods: {
    showpresentes() {
      store.dispatch('presentesOn')
    },
  },
}

</script>

<style lang="scss">
.about {
  height: 100vh;
  width: 100%;
  
  iframe {
    height: 100%;
    width: 100%;
  }

  .presentes-btn {
    position: fixed;
    top: calc(50% - 85px);
    left: -70px;
    background-color: #121212BB;
    color: #FFFFFF;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 10px;
    transform: rotate(90deg);
  }
}

</style>
