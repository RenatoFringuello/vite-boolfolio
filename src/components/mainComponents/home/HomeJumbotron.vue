<script>
    export default {
    name: "HomeJumbotron",
    data() {
        return {};
    },
    methods: {},
}
</script>

<template>
    <div class="container p-0 jumbotron-container bg-danger rounded-4">
        <div class="wrapper d-flex bg-white">
            <h1 class="p-3 m-auto fw-bold">Home</h1>
            <div class="left-100 curved-corner top-left"></div>
            <div class="top-100 curved-corner top-left"></div>
        </div>
        <div class="wrapper d-flex bg-white">
            <div class="cc-wrapper">
                <div class="right-100 curved-corner bottom-right"></div>
                <div class="bottom-100 right-0 curved-corner bottom-right"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/partials/mixins' as *;

    .jumbotron-container{
        position: relative;
        height: 500px;
        
        .wrapper{
            position: relative;
            width: 34%;
            height: 100px;
            border-radius: 0 0 1rem 0;
            
            &:last-child{
                position: absolute;
                bottom: 0;
                right: 0;
                border-radius: 1rem 0 0 0;

                .cc-wrapper{
                    position: relative;
                    width: 100%;
                }
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