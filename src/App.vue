<script>
  import AppHeader from './components/AppHeader.vue';

  export default{
    components:{
      AppHeader,
    }
  }
</script>

<template>
  <AppHeader/>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
