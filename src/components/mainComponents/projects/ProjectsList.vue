<script>
    import {store} from '../../../store'
    import ProjectComponent from './ProjectComponent.vue'

    export default {
        name:'ProjectsList',
        components:{
            ProjectComponent,
        },  
        data() {
            return {
                store,
                prevLink : store.prevPageLink,
                nextLink : store.nextPageLink,
            }
        },
        created(){
            store.getData('/projects');
        }
    }
</script>

<template>
    <div v-if="store.isLoaded" class="row g-3 m-0">
        <div v-for="project in store.data" class="col-12 col-sm-6 col-lg-4">
            <router-link :to="{name:'project', params:{slug:project.slug}}" class="text-decoration-none text-black">
                <ProjectComponent :project="project"/>
            </router-link>
        </div>
        <div class="links d-flex justify-content-between">
            <button class="btn btn-primary" :class="(!store.isPrevAvailable)?'btn-secondary':''" 
            :disabled="(!store.isPrevAvailable)" @click="store.getPrevPage()">Prev</button>
            <button class="btn btn-primary" :class="(!store.isNextAvailable)?'btn-secondary':''" 
            :disabled="(!store.isNextAvailable)" @click="store.getNextPage()">Next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>