<script>
    import {store} from '../store'
    import ProjectComponent from './mainComponents/ProjectComponent.vue'
    export default {
        name:'AppMain',
        components:{
            ProjectComponent,
        },  
        data() {
            return {
                store,
                prevLink : store.prevPageLink,
                nextLink : store.nextPageLink,
                isAvailable : false,
            }
        },
        methods:{
            getDataAfter(n){
                setTimeout(()=>{
                    this.isAvailable = true;
                },n);
                return this.isAvailable;
            },
        },
        created(){
            store.getData('/projects');
        }
    }
</script>

<template>
    <main class="container">
        <div v-if="store.isLoaded && getDataAfter(250)" class="row g-3 py-3">
            <div v-for="project in store.data" class="col-12 col-sm-6 col-lg-4">
                <ProjectComponent :project="project"/>
            </div>
            <div class="links d-flex justify-content-between">
                <button class="btn btn-primary" :class="(!store.isPrevAvailable)?'btn-secondary':''" 
                        :disabled="(!store.isPrevAvailable)" @click="store.getPrevPage()">Prev</button>
                <button class="btn btn-primary" :class="(!store.isNextAvailable)?'btn-secondary':''" 
                        :disabled="(!store.isNextAvailable)" @click="store.getNextPage()">Next</button>
            </div>
        </div>
        <div v-else class="loading-container d-flex justify-content-center align-items-center align-content-center">
            <div class="m-auto">
                <div class="loader"></div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

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