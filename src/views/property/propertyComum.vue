<template>
    <div class="viewPropertyComum">
        <section class="viewPropertyComum__container">
            <h2 class="sectionTitle">Área Comum</h2>
            <gallery v-if="getProperties.length > 0" :items="getPropertyComum(getProperties)" target="comum" />
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import Gallery from "@/components/gallery";

export default {
    name: "ViewPropertyComum",
    components: {
        Gallery
    },
    computed: {
        ...mapGetters([
            'getProperties'
        ]),
    },
    methods: {
        getPropertyComum(array) {
            if (array.length > 0) {
                let property = array.find((element) => {
                    if (element.url == this.$route.params.propertyName) {
                        return element;
                    }
                });

                return property.comum;
            } else {
                return [];
            }
        },
    },
};
</script>

<style lang="scss">
.viewPropertyComum {
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