<template>
    <div class="viewPropertyLazer">
        <section class="viewPropertyLazer__container">
            <h2 class="sectionTitle">Lazer</h2>
            <p class="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <gallery :items="property.lazer" target="lazer" />
        </section>
    </div>
</template>

<script>
import Gallery from "@/components/gallery";

export default {
    name: "ViewPropertyLazer",
    components: {
        Gallery
    },
    data: function () {
        return {
            property: Object,
        };
    },
    beforeMount() {
        this.property = this.$store.state.properties.find((element) => {
            if (element.url == this.$route.params.propertyName) {
                return element;
            }
        });
    },
};
</script>

<style lang="scss">
.viewPropertyLazer {
    @include element(container) {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-height: 100vh;
        padding: 56px 16px;

        @media #{$mq-md} {
            min-height: 0;
            height: calc(100vh - #{$navbarTopHeight});
        }
    }
}
</style>