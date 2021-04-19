<template>
    <div class="viewPropertyVideo">
        <section class="viewPropertyVideo__container fullscreen">
            <iframe
                :src="property.video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </section>
    </div>
</template>

<script>
export default {
    name: "ViewPropertyVideo",
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
.viewPropertyVideo {
    @include element(container) {
        position: relative;
    }

    iframe {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
</style>