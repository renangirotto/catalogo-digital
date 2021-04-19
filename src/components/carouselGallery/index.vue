<template>
    <div class="carouselGallery">
        <div
            class="carouselGallery__item"
            v-for="image in images"
            :key="image.title"
        >
            <div
                class="carouselGallery__item__thumb"
                :style="{
                    backgroundImage: `url(${require(`./../../assets/images/properties/${$route.params.propertyName}/${type}/${image.imageUrl}`)})`,
                }"
            ></div>
            <div class="carouselGallery__item__body">
                <h4 class="carouselGallery__item__title">{{ image.title }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarouselGallery",
    props: {
        type: String,
        images: Array,
    },
};
</script>

<style lang="scss">
.carouselGallery {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;

    @include element(item) {
        box-sizing: border-box;
        width: 100%;
        height: 240px;
        border: 2px solid $brand;
        position: relative;
        margin: 8px 0;
        overflow: hidden;
        cursor: pointer;
        transition: border-color 0.5s;

        @media #{$mq-md} {
            width: calc(50% - 8px);
            margin: 4px;
        }

        @media #{$mq-lg} {
            width: calc(20% - 8px);
            height: 150px;
            border: 2px solid $grey-3;
        }

        &:hover {
            border-color: $brand;

            .carouselGallery__item__thumb {
                transform: scale(1.1);
            }

            .carouselGallery__item__body {
                opacity: 1;
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

        @include element(body) {
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100%;
            padding: 16px;
            position: absolute;
            z-index: 1;
            opacity: 0;
            background: rgba(255, 255, 255, 0);
            background: -moz-linear-gradient(
                top,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            background: -webkit-gradient(
                left top,
                left bottom,
                color-stop(0%, rgba(255, 255, 255, 0)),
                color-stop(100%, rgba(0, 0, 0, 0.7))
            );
            background: -webkit-linear-gradient(
                top,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            background: -o-linear-gradient(
                top,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            background: -ms-linear-gradient(
                top,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.7) 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 );
            transition: opacity 0.5s;
        }

        @include element(title) {
            font-weight: 600;
            color: $white;
        }
    }
}
</style>