<script>
  import {store} from './store';

  import AppHeader from './components/AppHeader.vue';

  export default{
    components:{
      AppHeader,
    },
    data() {
      return {
        store,
      }
    },
    methods:{
      
    }
  }
</script>

<template>
  <AppHeader/>
  <main class="container-fluid px-4">
    <div v-if="store.getDataAfter(500)" class="row g-3">
      <router-view></router-view>
    </div>
    <!-- loader -->
    <div v-else class="loading-container d-flex justify-content-center align-items-center align-content-center">
      <div class="m-auto">
        <div class="loader"></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables' as *;

  .loading-container{
      height: calc(100vh - 80px);
      .loader{
          width: 8vmax;
          height: 8vmax;
          border-right: 4px solid $main-text-color;
          border-radius: 100%;
          animation: spinRight 800ms linear infinite;
          
          &:before, &:after {
              content: '';
              width: 6vmax;
              height: 6vmax;
              display: block;
              position: absolute;
              top: calc(50% - 3vmax);
              left: calc(50% - 3vmax);
              border-left: 3px solid $second-text-color;
              border-radius: 100%;
              animation: spinLeft 800ms linear infinite;
          }
          
          &:after {
              width: 4vmax;
              height: 4vmax;
              top: calc(50% - 2vmax);
              left: calc(50% - 2vmax);
              border: 0;
              border-right: 2px solid $main-text-color;
              animation: none;
          }
      }
  }
</style>