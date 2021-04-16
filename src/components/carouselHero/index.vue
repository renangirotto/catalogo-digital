<template>
    <transition-group
        name="carouselHero"
        mode="in-out"
        tag="div"
        class="carouselHero"
    >
        <figure
            v-for="image in dataImages"
            v-show="image.active"
            :key="image.name"
            class="carouselHero__item"
        >
            <img :src="require(`@/assets/images/home/${image.name}`)" alt="" />
        </figure>
    </transition-group>
</template>

<script>
export default {
    name: "CarouselHero",
    props: {
        images: Array,
    },
    data: function () {
        return {
            dataImages: [],
            slideInitial: 0,
            slideSpeed: 8, //in seconds
        };
    },
    beforeMount() {
        //Clear slide items
        this.dataImages = [];

        //Push prop itens into data array to create slide
        this.images.map((element, index) => {
            this.dataImages.push({
                name: element,
                active: index == 0 ? true : false,
                zLvl: index == 0 ? 1 : 0,
            });
        });
    },
    mounted() {
        //Since setInterval has his interal reference to $this need to use a global reference inside a const
        const _this = this;

        //Every x seconds change the slide, based on the component global data status of 'slideInitial'
        setInterval(function () {
            if (_this.slideInitial + 1 >= _this.dataImages.length) {
                _this.slideInitial = 0;
            } else {
                _this.slideInitial++;
            }

            _this.dataImages.find((element, index) => {
                //If element index is equal to slideInitial value and his status is active
                if (index == _this.slideInitial) {
                    element.active = true;
                    element.zLvl = 1;
                } else {
                    element.active = false;
                    element.zLvl = 0;
                }
            });
        }, this.slideSpeed * 1000);
    },
};
</script>

<style lang="scss">
.carouselHero {
    height: calc(100vh - 60px);
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: rgba(255, 255, 255, 0);
        background: -moz-linear-gradient(
            top,
            rgba(255, 255, 255, 0) 48%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.8) 100%
        );
        background: -webkit-gradient(
            left top,
            left bottom,
            color-stop(48%, rgba(255, 255, 255, 0)),
            color-stop(50%, rgba(255, 255, 255, 0.03)),
            color-stop(100%, rgba(0, 0, 0, 0.8))
        );
        background: -webkit-linear-gradient(
            top,
            rgba(255, 255, 255, 0) 48%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.8) 100%
        );
        background: -o-linear-gradient(
            top,
            rgba(255, 255, 255, 0) 48%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.8) 100%
        );
        background: -ms-linear-gradient(
            top,
            rgba(255, 255, 255, 0) 48%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.8) 100%
        );
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 48%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.8) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 );
    }

    @include element(item) {
        position: absolute;
        width: 100%;
        height: 100%;

        img {
            width: 180%;
            min-height: 180%;
            position: absolute;

            @media #{$mq-md} {
                width: 120%;
                min-height: 120%;
            }
        }

        &:nth-child(odd) {
            img {
                bottom: 0px;
                left: 0px;
                animation-name: image-to-left;
                animation-duration: 8s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
            }
        }

        &:nth-child(even) {
            img {
                bottom: 0px;
                right: 0px;
                animation-name: image-to-right;
                animation-duration: 8s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
            }
        }
    }
}

@keyframes image-to-left {
    0% {
        bottom: 0px;
        left: 0px;
    }
    100% {
        bottom: -20%;
        left: -20%;
    }
}

@keyframes image-to-right {
    0% {
        bottom: 0px;
        right: 0px;
    }
    100% {
        bottom: -20%;
        right: -20%;
    }
}

.carouselHero-enter-active,
.carouselHero-leave-active {
    transition: opacity 1s;
}

.carouselHero-enter,
.carouselHero-leave-to {
    opacity: 0;
}
</style>