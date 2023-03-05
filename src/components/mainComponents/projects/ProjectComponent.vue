<script>
    export default {
        name:'ProjectComponent',
        props:{
            'project':{
                type : Object,
                required: true
            },
            'baseUrl':{
                type: String,
                required:false,
                default:'pass-the-baseUrl-props'
            },
            'isShow':{
                type : Boolean,
                required : false,
                default : false
            }
        },
        data() {
            return {

            }
        },
    }
</script>

<template>
    <div class="border-card main-bg-gradient rounded-3 h-100" :class="!isShow ? 'index':'show'">
        <div class="card p-3 h-100 justify-content-between"
            :class="(isShow)?'flex-lg-row':''">
            <div v-if="isShow" class="left w-100">
                <img class="img-fluid object-fit-cover" :src="baseUrl + project.image" :alt="project.slug + '\'s image'">
            </div>
            <div class="right">
                <div class="top">
                    <h4 class="main-bg-gradient d-inline-block">{{ project.title }}</h4>
                    <div class="text-capitalize" :class="(project.type.id == 1)?'text-success':((project.type.id == 2)?'text-danger':'text-primary')">{{ project.type.name }}</div>
                    <pre class="text-secondary">{{ project.user.name + ' ' + project.user.lastname }}</pre>
                    <p>{{ project.content }}</p>
                </div>
                <div class="bottom">
                    <div>{{ project.start_date.slice(0, 10) }}</div>
                    <div class="end-date text-success" :class="project.end_date ? '' : 'text-danger'">{{ project.end_date ? project.end_date.slice(0, 10): 'work in progress'  }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../../style/partials/variables' as *;
    .border-card{
        padding:4px;
        &.index:hover{
            cursor: pointer;
            box-shadow: 0 4px 10px 2px #0002 ;
            -webkit-filter: hue-rotate(180deg);
            filter: hue-rotate(180deg);;
            .end-date{
                // it roate twice so 180deg(hover) + 180deg(.end-date) = no rotation
                -webkit-filter: hue-rotate(180deg);
                filter: hue-rotate(180deg);;
            }
        } 
        .card{
            transition: all .5s ease-in-out;

            img{
                height: 70vh;
            }

            h4{
                //main-bg-gradient
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>