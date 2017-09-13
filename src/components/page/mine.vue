<template>
    <div class="mine" >
      <div class="">
          {{this.text}}
          <button type="button" name="button" @click="linkToPath('login')">backgtologin</button>
      </div>
    </div>
</template>

<script>

export default {
    name: 'mine',
    data () {
        return {
          text: 'mine here'
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
