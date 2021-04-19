<template>
    <div class="viewPropertyModel">
        <section class="viewPropertyModel__container fullscreen">
            <iframe
                :src="property.model"
            ></iframe>
        </section>
    </div>
</template>

<script>
export default {
    name: "ViewPropertyModel",
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
.viewPropertyModel {
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