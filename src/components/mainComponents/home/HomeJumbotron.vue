<script>
    import CanvasThreejs from '../../partials/CanvasThreejs.vue';

    export default {
    name: "HomeJumbotron",
    components: { 
        CanvasThreejs 
    },
    data() {
        return {

        }
    },
    methods: {},
}
</script>

<template>
    <div class="container p-0 jumbotron-container invert-color rounded-4 overflow-hidden">
        <div class="wrapper bg-white">
            <h1 class="p-3 fw-bold text-background position-absolute top-50 start-50 translate-middle">Home</h1>
            <div class="cc-wrapper">
                <div class="left-100 curved-corner top-left"></div>
                <div class="top-100 curved-corner top-left"></div>
            </div>
        </div>
        <div class="wrapper b-r d-flex bg-white">
            <div class="cc-wrapper">
                <div class="right-100 curved-corner bottom-right"></div>
                <div class="bottom-100 right-0 curved-corner bottom-right"></div>
            </div>
        </div>
        <!-- <div class="glassmorphism-bg glass">
        </div> -->
        <CanvasThreejs />
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/partials/mixins' as *;
    @use '../../../style/partials/variables' as *;

    .jumbotron-container{
        background: url('../../../assets/images/hero.jpg') no-repeat;
        background-size: cover;
        position: relative;
        height: 500px;
        
        .wrapper{
            position: absolute;
            width: 34%;
            height: 100px;
            border-radius: 0 0 1rem 0;
            z-index: 2;
            .cc-wrapper{
                position: relative;
                width: 100%;
                height: 100%;
            }
            h1{
                background: url('../../../assets/images/hero.jpg') no-repeat;
                background-size: cover;
            }
            
            &.b-r{
                bottom: 0;
                right: 0;
                border-radius: 1rem 0 0 0;
            }
        }

        .glassmorphism-bg{
            position: relative;
            width: 100%;
            height: 100%;
            &.glass{
                background: #fff3;
                box-shadow: 0 4px 30px #0000001a;
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(5px);
            }
        }

    }

    .top-left::before{
        @include curved-corner();
    }
    .bottom-right::before{
        @include curved-corner('bottom-right');
    }
</style>