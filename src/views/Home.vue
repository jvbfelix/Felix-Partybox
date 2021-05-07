<template>
  <div class="home">
    <Container v-if="mural" :end=invision />
    <section class="page">
      <div class="cont">
        <h1>Breguinha do Felix</h1>
        <p>Bem-Vindo ao breguinha do Felix, a minha festa de aniversário</p>
        <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/-WykqQzZspA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        <div class="video" id="player" data-plyr-provider="youtube" data-plyr-embed-id="-WykqQzZspA"></div>
        <br><router-link to="/about"><button class="ntx">Continuar para a Festa</button></router-link>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'
import Plyr from 'plyr'
import 'plyr/src/sass/plyr.scss'

export default {
  name: 'Home',
  components: {
    Container
  },
  data() {
    return {
      mural:false,
    };
  },
  computed: {
    invision: () => process.env.VUE_APP_INVISION,
  },
  mounted() {
    new Plyr("#player");
  }
}
</script>

<style lang="scss">
.page {
  background-image: url("https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  min-height: 100vh;
  background-size: cover;
  background-position: center;

  .cont {
    background: #33353499;
    color: #FFFFFF;
    min-height: 100vh;
  }
  h1 {
    padding-top: 80px;
    margin-top: 0;
  }

  .ntx {
    margin-top: 25px;
    padding: 10px 20px;
    color: #FFFFFF;
    background-color: #4caf50;
    border-radius: 5px;
    border: solid;
  }

  .plyr {
    width: 40%;
    margin-left: 30%;
    --plyr-color-main: #51468F;
  }
}


@media (max-width: 600px){
  .page {
    .plyr {
    width: 90%;
    margin-left: 5%;
  }
  }
}

</style>
