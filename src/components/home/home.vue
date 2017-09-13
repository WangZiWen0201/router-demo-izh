<template>
  <div class="home">
      <div class="content" id="printHtml">
        <router-view></router-view>
      </div>
      <div class="footer">
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
import appFooter from '../footer/footer.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your homedex'
    }
  },
  components: {
    appFooter: appFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
.footer{
  position: fixed;
  width: 100%;
  background-color: #666;
  bottom: 0;
}
</style>
