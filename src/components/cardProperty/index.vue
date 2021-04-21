<template>
    <router-link :to="`/imovel/${url}`" tag="div" class="cardProperty">
        <div class="cardProperty__content">
            <div
                class="cardProperty__content__thumb"
                :style="{
                    backgroundImage: `url(${require(`./../../assets/images/properties/${imageUrl}/thumb.jpg`)})`,
                }"
            ></div>
            <h3 class="cardProperty__content__name">{{ name }}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "cardProperty",
    props: {
        imageUrl: String,
        name: String,
        url: String,
    },
};
</script>

<style lang="scss">
.cardProperty {
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
        position: relative;
        margin: 0 auto;
        cursor: pointer;
        overflow: hidden;
        transition: border-color 0.5s ease-in-out, background-size 1s ease;

        @media #{$mq-sm} {
            max-width: 280px;
        }

        &:hover {
            border-color: $brand;
            
            .cardProperty__content__thumb {
                transform: scale(1.1);
            }
        }

        @include element(thumb) {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: transform 0.5s;
        }

        @include element(name) {
            position: relative;
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