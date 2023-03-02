<script>
    import {store} from '../store'
    export default {
        name:'AppMain',
        data() {
            return {
                store,
                isAvailable : false,
            }
        },
        methods:{
            getDataAfter(n){
                setTimeout(()=>{
                    this.isAvailable = true;
                },n);
                return this.isAvailable;
            }
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
                <div class="card p-2 h-100 d-flex flex-column justify-content-between">
                    <div class="top">
                        <h4>{{ project.title }}</h4>
                        <div class="text-capitalize {{(project.type.id == 1)?'text-success':((project.type.id == 2)?'text-danger':'text-primary')}}">{{ project.type.name }}</div>
                        <pre class="text-secondary">{{ project.user.name + ' ' + project.user.lastname }}</pre>
                        <p>{{ project.content }}</p>
                    </div>
                    <div class="bottom">
                        <div>{{ project.start_date.slice(0, 10) }}</div>
                        <div class="text-success" :class="project.end_date ? '' : 'text-danger'">{{ project.end_date ? project.end_date.slice(0, 10): 'work in progress'  }}</div>
                    </div>
                </div>
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