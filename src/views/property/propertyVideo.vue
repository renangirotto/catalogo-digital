<template>
    <div class="viewPropertyVideo">
        <section class="viewPropertyVideo__container fullscreen">
            <iframe
                v-if="getProperties.length > 0"
                :src="getPropertyImage(getProperties)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ViewPropertyVideo",
    computed: {
        ...mapGetters([
            'getProperties'
        ]),
    },
    methods: {
        getPropertyImage(array) {
            if (array.length > 0) {
                let property = array.find((element) => {
                    if (element.url == this.$route.params.propertyName) {
                        return element;
                    }
                });

                return property.video;
            } else {
                return [];
            }
        },
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