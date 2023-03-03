<script>
    export default {
        name:'ProjectComponent',
        props:{
            'project':Object
        },
        data() {
            return {
                test:'hello world'
            }
        },
    }
</script>

<template>
    <div class="border-card rounded-3 h-100">
        <div class="card p-3 h-100 d-flex flex-column justify-content-between">
            <div class="top">
                <h4>{{ project.title }}</h4>
                <div class="text-capitalize {{(project.type.id == 1)?'text-success':((project.type.id == 2)?'text-danger':'text-primary')}}">{{ project.type.name }}</div>
                <pre class="text-secondary">{{ project.user.name + ' ' + project.user.lastname }}</pre>
                <p>{{ project.content }}</p>
            </div>
            <div class="bottom">
                <div>{{ project.start_date.slice(0, 10) }}</div>
                <div class="end-date text-success" :class="project.end_date ? '' : 'text-danger'">{{ project.end_date ? project.end_date.slice(0, 10): 'work in progress'  }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../../style/partials/variables' as *;
    .border-card{
        padding:4px;
        background: -webkit-linear-gradient(45deg,$main-text-color, $second-text-color);
        &:hover{
            box-shadow: 0 4px 10px 2px #0002 ;
            -webkit-filter: hue-rotate(180deg);
            .end-date{
                // it roate twice so 180deg(hover) + 180deg(.end-date) = no rotation
                -webkit-filter: hue-rotate(180deg);
            }
        } 
        .card{
            cursor: pointer;
            transition: all .5s ease-in-out;

            h4{
                // -webkit-filter: hue-rotate(180deg);
                background: -webkit-linear-gradient(45deg,$main-text-color, $second-text-color);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>