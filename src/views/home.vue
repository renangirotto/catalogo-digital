<template>
    <div class="viewHome">
        <transition name="hero" mode="out-in">
            <section class="viewHome__hero" v-show="activeHero">
                <carousel-hero :images="hero" />
                <div class="viewHome__hero__anchor">
                    <button @click="toggleHero" class="more">
                        Nossos imóveis!
                        <font-awesome-icon icon="angle-down" />
                    </button>
                </div>
            </section>
        </transition>
        <section class="viewHome__properties">
            <button @click="toggleHero" class="viewHome__properties__anchor">
                <span class="viewHome__properties__anchor__icon"
                    ><font-awesome-icon icon="angle-up"
                /></span>
                <span class="viewHome__properties__anchor__text">Voltar</span>
            </button>
            <div class="viewHome__properties__container">
                <h2 class="viewHome__properties__title">Nossos imóveis</h2>
                <p class="viewHome__properties__text">
                    Escolha e navegue por nossas galerias!
                </p>
                <div class="viewHome__properties__carousel">
                    <button class="arrow prev" @click="showPrev">
                        <font-awesome-icon icon="angle-left" />
                    </button>
                    <vue-slick-carousel
                        ref="carouselProperties"
                        v-bind="carouselSettings"
                    >
                        <div
                            v-for="propertie in properties"
                            :key="propertie.name"
                        >
                            <card-propertie
                                :name="propertie.name"
                                :imageUrl="propertie.imageUrl"
                            />
                        </div>
                    </vue-slick-carousel>
                    <button class="arrow next" @click="showNext">
                        <font-awesome-icon icon="angle-right" />
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import CarouselHero from "@/components/carouselHero";
import CardPropertie from "@/components/cardPropertie";

export default {
    name: "ViewHome",
    components: {
        CarouselHero,
        CardPropertie,
    },
    data: function () {
        return {
            activeHero: true,
            hero: [
                "infos-02-Portaria.jpg",
                "infos-03-Hall.jpg",
                "lazer-01-piscina.jpg",
            ],
            carouselSettings: {
                dots: true,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [
                    {
                        breakpoint: 1599,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        },
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
            properties: [
                {
                    name: "Imóvel 01",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 02",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 03",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 04",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 05",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 06",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 07",
                    imageUrl: "propertie-1.jpg",
                },
                {
                    name: "Imóvel 08",
                    imageUrl: "propertie-1.jpg",
                },
            ],
        };
    },
    methods: {
        toggleHero: function () {
            this.activeHero = !this.activeHero;
        },
        showPrev: function () {
            this.$refs.carouselProperties.prev();
        },
        showNext: function () {
            this.$refs.carouselProperties.next();
        },
    },
};
</script>

<style lang="scss">
.viewHome {
    position: relative;

    @include element(hero) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: $z-index-2;
        background-color: $white;

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

    @include element(properties) {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 56px 16px;
        position: relative;

        @media #{$mq-md} {
            padding: 16px;
            height: calc(100vh - 60px);
        }

        @include element(anchor) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border: 0;
            border-radius: 50%;
            position: absolute;
            left: 16px;
            top: 16px;
            font-size: 24px;
            color: $white;
            background-color: $brand;
            cursor: pointer;
            transition: background-color 0.5s ease;

            @media #{$mq-md} {
                width: auto;
                height: auto;
                padding: 8px 12px;
                border-radius: 4px;
                position: static;
                margin-right: auto;
                margin-left: 24px;
                color: $brand;
                background-color: $white;
            }

            &:hover {
                @media #{$mq-md} {
                    background-color: $grey-3;
                }
            }

            @include element(icon) {
                font-size: 36px;

                @media #{$mq-md} {
                    margin-right: 4px;
                    font-size: 22px;
                }
            }

            @include element(text) {
                display: none;

                @media #{$mq-md} {
                    display: inline;
                }
            }
        }

        @include element(container) {
            max-width: 80vw;
        }

        @include element(title) {
            font-weight: 500;
            font-size: clamp(32px, 5vw, 44px);
            text-align: center;
            color: $brand;

            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }

        @include element(text) {
            font-size: clamp(16px, 5vw, 24px);
            text-align: center;

            &:not(:last-child) {
                margin-bottom: 28px;

                @media #{$mq-md} {
                    margin-bottom: 44px;
                }
            }
        }

        @include element(carousel) {
            position: relative;

            .arrow {
                display: none;
                min-width: 56px;
                max-width: 56px;
                min-height: 56px;
                max-height: 56px;
                border: 0;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                z-index: $z-index-1;
                margin-top: -64px;
                font-size: 24px;
                color: $white;
                background-color: $brand;
                -webkit-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                -moz-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
                cursor: pointer;

                &.prev {
                    left: -20px;
                }

                &.next {
                    right: -20px;
                }

                @media #{$mq-sm} {
                    display: block;
                }
            }

            .slick-dots {
                position: static;
                margin-top: 24px;

                li {
                    display: inline-flex;
                    justify-content: center;
                    width: auto;
                    height: auto;
                    margin: 0 8px;

                    button {
                        display: flex;
                        justify-content: center;
                        width: 10px;
                        height: 10px;
                        padding: 0;
                        border-radius: 10px;
                        background-color: rgba($color: $brand, $alpha: 0.5);
                        transition: all 0.25s ease-in-out;

                        &::before {
                            content: none;
                        }

                        &:hover {
                            background: rgba($color: $brand, $alpha: 1);
                        }
                    }

                    &.slick-active {
                        button {
                            width: 16px;
                            background-color: rgba($color: $brand, $alpha: 1);
                        }
                    }
                }
            }
        }
    }
}

.hero-enter-active {
    transition: top 1s;
}

.hero-leave-active {
    transition: top 1s;
}
.hero-enter,
.hero-leave-to {
    top: -100vh;
}
</style>