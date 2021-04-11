<template>
    <div class="viewHome">
        <section class="viewHome__hero">
            <carousel-hero :images="hero" />
            <div class="viewHome__hero__anchor">
                <button class="more">
                    Nossos imóveis!
                    <font-awesome-icon icon="angle-down" />
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import CarouselHero from "@/components/carouselHero";

export default {
    name: "ViewHome",
    components: {
        CarouselHero,
    },
    data: function () {
        return {
            hero: [
                "infos-02-Portaria.jpg",
                "infos-03-Hall.jpg",
                "lazer-01-piscina.jpg",
            ],
        };
    },
};
</script>

<style lang="scss">
.viewHome {
    @include element(hero) {
        position: relative;

        @include element(anchor) {
            width: 100%;
            position: absolute;
            bottom: 100px;
            left: 0;
            text-align: center;

            .more {
                padding: 12px 20px;
                border: 0;
                border-radius: 40px;
                font-size: 24px;
                color: $white;
                background-color: $brand;
                -webkit-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                -moz-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                cursor: pointer;
            }
        }
    }
}
</style>