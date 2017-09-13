<template>
    <div class="monitor" >
      <div class="">
          {{this.text}}
      </div>
    </div>
</template>

<script>

export default {
    name: 'monitor',
    data () {
        return {
          text: 'monitor here'
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
