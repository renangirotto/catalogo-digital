<template>
    <div class="viewPropertyDecorado">
        <section class="viewPropertyDecorado__container">
            <h2 class="sectionTitle">Decorado</h2>
            <p class="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <gallery v-if="getProperties.length > 0" :items="getPropertyDecorado(getProperties)" target="decorado" />
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Gallery from "@/components/gallery";

export default {
    name: "ViewPropertyDecorado",
    components: {
        Gallery
    },
    computed: {
        ...mapGetters([
            'getProperties'
        ]),
    },
    methods: {
        getPropertyDecorado(array) {
            if (array.length > 0) {
                let property = array.find((element) => {
                    if (element.url == this.$route.params.propertyName) {
                        return element;
                    }
                });

                return property.decorado;
            } else {
                return [];
            }
        },
    },
};
</script>

<style lang="scss">
.viewPropertyDecorado {
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