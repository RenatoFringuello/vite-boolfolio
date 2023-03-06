<script>
    import {store} from '../store';
    export default {
        data() {
            return {
                store,
                
                navBar : {
                    links:[
                        'home',
                        'projects',
                        'about-me'
                    ],
                    active:0,
                },
            }
        },
        methods: {
            /**
             * reset the isPageAvailable for the loader and set the active link
             * 
             * @param {*} index to set the active likn
             */
            clickLink(index){
                this.navBar.active = index;
                store.isPageAvailable = false;
            }
        },
    }
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid px-4">
                <router-link :to="{name:'home'}" class="fs-3 logo">Logo</router-link>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="me-auto d-flex mb-2 mb-lg-0">

                            <li class="nav-item list-group-item ms-3" v-for="link,i in navBar.links">
                                <router-link @click="clickLink(i)" :to="{name:link}" class="text-capitalize" :class="i == navBar.active ? 'active':''" aria-current="page">{{link}}</router-link>
                            </li>
                            <li class="nav-item list-group-item ms-3 dropdown">
                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    header{
        a{
            text-decoration: none;
            transition: all .21s ease-in-out;
            color:$main-text-color;
            opacity: 65% !important;
            padding: .25rem;
            border-radius: 5px;
            border-bottom: 2px solid #0000;
            border-right:    2px solid #0000;

            &.active,
            &:not(.logo):hover{
                opacity: 100% !important;
                border-color:$main-text-color;
            }
        }
    }
</style>