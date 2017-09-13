<template>
    <div class="recommon" >
      <div class="">
          {{this.text}}
      </div>
    </div>
</template>

<script>

export default {
    name: 'recommon',
    data () {
        return {
          text: 'recommon here'
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
