<script>
  import HomeJumbotron from '../components/mainComponents/home/HomeJumbotron.vue';
  
  export default{
    name: "AppHome",
    components: { 
      HomeJumbotron,
    }
}
</script>

<template>
  <HomeJumbotron class="mt-3" />
</template>

<style lang="scss">
  @use '../style/general.scss' as *;
</style>
