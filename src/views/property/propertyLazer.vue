<template>
    <div class="viewPropertyLazer">
        <section class="viewPropertyLazer__container">
            <h2 class="sectionTitle">Área de Lazer</h2>
            <gallery v-if="getProperties.length > 0" :items="getPropertyLazer(getProperties)" target="lazer" />
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Gallery from "@/components/gallery";

export default {
    name: "ViewPropertyLazer",
    components: {
        Gallery
    },
    computed: {
        ...mapGetters([
            'getProperties'
        ]),
    },
    methods: {
        getPropertyLazer(array) {
            if (array.length > 0) {
                let property = array.find((element) => {
                    if (element.url == this.$route.params.propertyName) {
                        return element;
                    }
                });

                return property.lazer;
            } else {
                return [];
            }
        },
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