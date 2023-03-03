<script>
  import AppHeader from '../components/AppHeader.vue';
  import AppMain from '../components/mainComponents/AppProjects.vue';

  export default{
    name:'AppHome',
    components:{
      AppHeader,
      AppMain,
    }
  }
</script>

<template>
  <AppHeader />
  <main class="container">
    hello
  </main>
</template>

<style lang="scss">
  @use '../style/general.scss' as *;
</style>
