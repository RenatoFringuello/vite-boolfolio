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
        <nav class="container py-4 d-flex justify-content-between align-items-center">
            <div class="logo">Logo</div>
            <ul class="d-flex mb-0 list-unstyled">
                <li class="ms-2">link</li>
                <li class="ms-2">link</li>
                <li class="ms-2">link</li>
                <li class="ms-2">link</li>
                <li class="ms-2">link</li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    header{
        background: -webkit-linear-gradient(45deg,$main-text-color, $second-text-color);
    }
</style>