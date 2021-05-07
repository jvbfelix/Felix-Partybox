<template>
  <div class="iframe-container" v-on:click="closefunc()">
    <iframe
    :src= end
    frameborder="0" 
    scrolling="no" 
    allowfullscreen="true" allow="camera;microphone">
    </iframe> 
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Container',
  props: {
    end: String,
    func: String
  },
  methods: {
    closefunc() {
      store.dispatch(this.func)
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iframe-container{
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333534AA;
  z-index: 10;

  iframe {
    height: 80%;
    width: 80%;
    margin: 5%;
  }
}

</style>
