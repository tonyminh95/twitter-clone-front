<template>
    <div id="app">
        <div class="app__left-side"></div>
        <div class="app__main">
            <home-page></home-page>
        </div>
        <div class="app__right-side"></div>
    </div>
</template>

<script>
    import HomePage from './pages/HomePage'

    export default {
        name: 'App',

        components: {
            HomePage
        }
    }
</script>

<style lang="scss">
    @import './styles/main';
</style>
