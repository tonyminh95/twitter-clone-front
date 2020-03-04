<template>
    <div id="app">
        <div class="main-layout">
            <div class="main-layout__left-side">
                <the-left-sidebar></the-left-sidebar>
            </div>
            <div class="main-layout__main">
                <!-- <home-page v-if="false"></home-page> -->
                Bui Dang Minh
            </div>
        </div>
    </div>
</template>

<script>
    import TheLeftSidebar from './components/layouts/TheLeftSidebar'
    // import HomePage from './pages/HomePage'

    export default {
        name: 'App',

        components: {
            TheLeftSidebar
            // HomePage
        }
    }
</script>

<style lang="scss">
    @import './styles/main';
</style>
