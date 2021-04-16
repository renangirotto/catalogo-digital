<template>
    <div id="app">
        <navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/navbar";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style lang="scss">
#app {
    min-height: 100vh;

    @media #{$mq-md} {
        max-height: 100vh;
        overflow: hidden;
    }

    section {
        &.fullscreen {
            width: 100%;
            min-height: 100vh;

            @media #{$mq-md} {
                height: calc(100vh - #{$navbarTopHeight});
            }
        }
    }
}
</style>
