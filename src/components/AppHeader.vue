<script>
    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<template lang="">
    <header class="text-white">
        <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
            <div class="container">
                <router-link :to="{name:'home'}" class="navbar-brand">Logo</router-link>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link :to="{name:'home'}" class="nav-link active" aria-current="page">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'projects'}" class="nav-link active" aria-current="page">Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'about-me'}" class="nav-link active" aria-current="page">About Me</router-link>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
        background: -webkit-linear-gradient(45deg,$main-text-color, $second-text-color);

        a{
            text-decoration: none;
            color:white;
            border-bottom: 2px solid #0000;

            &:hover{
                border-color:white;
            }
        }
    }
</style>