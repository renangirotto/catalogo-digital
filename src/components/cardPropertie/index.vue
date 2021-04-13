<template>
    <router-link :to="`/imovel/${handleRoute(name)}`" tag="div" class="cardPropertie">
        <div
            class="cardPropertie__content"
            :style="{
                backgroundImage: `url(${require(`./../../assets/images/properties/${imageUrl}`)})`,
            }"
        >
            <h3 class="cardPropertie__content__name">{{ name }}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "CardPropertie",
    props: {
        imageUrl: String,
        name: String,
    },
    methods: {
        handleRoute: function(name) {
            return name.toLowerCase().replace(" ", '-')
        }
    }
};
</script>

<style lang="scss">
.cardPropertie {
    @media #{$mq-sm} {
        margin: 0 8px;
    }

    @include element(content) {
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        min-height: 440px;
        max-height: 440px;
        border: 2px solid $grey-3;
        border-radius: 8px;
        margin: 0 auto;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        overflow: hidden;
        transition: border-color 0.5s ease-in-out, background-size 1s ease;

        @media #{$mq-sm} {
            max-width: 280px;
        }

        &:hover {
            border-color: $brand;
            background-size: 105% 105%;
        }

        @include element(name) {
            width: 100%;
            padding: 12px 16px;
            font-weight: 400;
            font-size: 22px;
            color: $white;
            background-color: rgba($color: $brand, $alpha: 0.8);
        }
    }
}
</style>