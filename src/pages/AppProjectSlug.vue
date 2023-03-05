<script>
  import {store} from '../store'
  import ProjectComponent from '../components/mainComponents/ProjectComponent.vue';

  export default{
    name: "AppProjectSlug",
    components: { 
      ProjectComponent 
    },
    data() {
      return {
        store,
      }
    },
    created(){
      store.getData('/projects/'+this.$route.params.slug);
    }
  }
</script>

<template>
  <ProjectComponent v-if="store.isLoaded" 
                    :project="store.dataRaw.data.result"
                    :baseUrl="store.dataRaw.data.baseStorageUrl"
                    :isShow="true"
  />
</template>

<style lang="scss">
  @use '../style/general.scss' as *;
</style>
