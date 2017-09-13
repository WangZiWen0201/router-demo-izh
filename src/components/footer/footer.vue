<template>
  <div class="app-footer">
    <div class="" @click="linkToPath('monitor')">輿情檢測</div>
    <div class="" @click="linkToPath('recommon')">推荐文章</div>
    <div class="" @click="linkToPath('articleTrace')">专题追踪</div>
    <div class="" @click="linkToPath('mine')">个人中心</div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your homedex'
    }
  },
  methods: {
    linkToPath (path) {
      this.$router.push({
        path: path
      })
    }
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
.app-footer{
  display: flex;
  justify-content: space-around;
}
</style>
