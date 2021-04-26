<template>
    <div class="viewPropertyHome">
        <section class="viewPropertyHome__container fullscreen">
            <div
                class="viewPropertyHome__container__image"
                v-if="getProperties.length > 0"
                :style="{
                    backgroundImage: `url(/static/images/properties/${getPropertyImage(getProperties)}/hero.jpg`,
                }"
            ></div>
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

                return property.imageUrl;
            } else {
                return [];
            }
        },
    },
};
</script>

<style lang="scss">
.viewPropertyHome {
    @include element(container) {
        position: relative;

        @include element(image) {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>