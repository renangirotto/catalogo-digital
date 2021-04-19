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

    // @media #{$mq-md} {
    //     max-height: 100vh;
    //     overflow: hidden;
    // }

    section {
        &.fullscreen {
            box-sizing: border-box;
            width: 100%;
            min-height: 100vh;

            @media #{$mq-md} {
                min-height: 0;
                height: calc(100vh - #{$navbarTopHeight});
            }
        }
    }

    .sectionTitle {
        font-weight: 500;
        font-size: clamp(36px, 5vw, 44px);
        text-align: center;
        color: $brand;

        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }

    .sectionText {
        font-size: clamp(16px, 4vw, 24px);
        text-align: center;

        &:not(:last-child) {
            margin-bottom: 28px;
        }
    }
}
</style>
