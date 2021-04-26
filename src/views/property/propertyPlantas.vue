<template>
    <div class="viewPropertyPlantas">
        <section class="viewPropertyPlantas__container fullscreen">
            <h2 class="sectionTitle">Plantas</h2>
            <p class="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <gallery v-if="getProperties.length > 0" :items="getPropertyImage(getProperties)" target="plantas" />
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Gallery from "@/components/gallery";

export default {
    name: "ViewPropertyPlantas",
    components: {
        Gallery,
    },
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

                return property.plantas;
            } else {
                return [];
            }
        },
    },
};
</script>

<style lang="scss">
.viewPropertyPlantas {
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