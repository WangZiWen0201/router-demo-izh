<template>
    <div class="login" >
          {{this.text}}
          <button @click="linkToPath('monitor')">jumpto</button>
    </div>
</template>

<script>

export default {
    name: 'login',
    data () {
        return {
          text: 'login here'
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
