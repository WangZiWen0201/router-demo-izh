<template>
    <div class="article-trace" >
      <div class="">
          {{this.text}}
      </div>
    </div>
</template>

<script>

export default {
    name: 'at',
    data () {
        return {
          text: 'at here'
        }
    },
    methods: {
      linkToPath (path, query) {
        this.$router.push({
          path: path
        })
      }
    },
    mounted () {

    }
}
</script>

<style scoped>

</style>
