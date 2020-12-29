<template>
  <div>
      <h1>
          This is questboard
      </h1>
      <h1>
          {{$store.getters.getcount}}
          <button @click="add"></button>
      </h1>
  </div>
</template>

<script>
export default {
    data(){
        return {count:this.$store.getters.getcount}
    },
    methods:{
        add (){
            this.$store.dispatch('set')
        }
    }

}
</script>

<style>

</style>