<template>
    <div class="viewPropertyHome">
        <section class="viewPropertyHome__container fullscreen">
            <div
                class="viewPropertyHome__container__image"
                :style="{
                    backgroundImage: `url(${require(`./../../assets/images/properties/${propertyHero}/hero.jpg`)})`,
                }"
            ></div>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        //Filter properties to get selected property hero
        propertyHero: function () {
            let target = this.$store.state.properties.find((element) => {
                if (element.url == this.$route.params.propertyName) {
                    return element;
                }
            });

            return target.imageUrl;
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