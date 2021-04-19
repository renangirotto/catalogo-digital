<template>
    <div class="viewPropertyInfos">
        <section class="viewPropertyInfos__container fullscreen">
            <h2 class="sectionTitle">Infos</h2>
            <p class="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <carousel-gallery type="infos" :images="property.infos" />
        </section>
    </div>
</template>

<script>
import CarouselGallery from "@/components/carouselGallery";

export default {
    name: "ViewPropertyInfos",
    components: {
        CarouselGallery,
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
.viewPropertyInfos {
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