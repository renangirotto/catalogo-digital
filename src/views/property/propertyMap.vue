<template>
    <div class="viewPropertyMap">
        <section class="viewPropertyMap__container fullscreen">
            <iframe
            v-if="getProperties.length > 0"
            :src="getPropertyImage(getProperties)"
            style="border: 0"
            allowfullscreen=""
        ></iframe>
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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

                return property.mapUrl;
            } else {
                return [];
            }
        },
    },
};
</script>

<style lang="scss">
.viewPropertyMap {
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