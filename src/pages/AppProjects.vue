<script>
  import ProjectsList from '../components/mainComponents/projects/ProjectsList.vue';
  export default{
    name:'AppProject',
    components:{
      ProjectsList
    }
  }
</script>

<template>
  <h1 class="p-3 pb-0 m-0 fw-bold">Projects</h1>
  <ProjectsList />
</template>

<style lang="scss">
  @use '../style/general.scss' as *;
</style>
