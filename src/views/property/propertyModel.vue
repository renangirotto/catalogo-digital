<template>
    <div class="viewPropertyModel">
        <section class="viewPropertyModel__container fullscreen">
            <iframe v-if="getProperties.length > 0"
                :src="getPropertyImage(getProperties)"
            ></iframe>
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ViewPropertyModel",
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

                return property.model;
            } else {
                return [];
            }
        },
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