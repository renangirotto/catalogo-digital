<template>
    <div class="viewPropertyVideo">
        <section class="viewPropertyVideo__container">
            <h2 class="sectionTitle">Lazer</h2>
            <p class="sectionText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div
                class="viewPropertyVideo__gallery"
                v-if="getProperties.length > 0"
            >
                <div
                    class="viewPropertyVideo__gallery__item"
                    v-for="video in getPropertyVideo(getProperties)"
                    :key="video.src"
                    :data-title="video.title"
                    @click="openVideo(video.src)"
                >
                    <div
                        class="viewPropertyVideo__gallery__thumbnail"
                        :style="{
                            backgroundImage: `url(${getThumbnail(video.src)})`,
                        }"
                    ></div>
                </div>
            </div>
        </section>
        <div class="viewPropertyVideo__video" v-if="modalActive">
            <div class="viewPropertyVideo__video__container">
                <button class="viewPropertyVideo__video__close" @click="closeVideo()">
                    <font-awesome-icon icon="times" size="2x" />
                </button>
                <iframe
                    :src="modalSrc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ViewPropertyVideo",
    data: function () {
        return {
            modalActive: false,
            modalSrc: "",
        };
    },
    computed: {
        ...mapGetters(["getProperties"]),
    },
    methods: {
        getPropertyVideo(array) {
            if (array.length > 0) {
                let property = array.find((element) => {
                    if (element.url == this.$route.params.propertyName) {
                        return element;
                    }
                });

                return property.videos;
            } else {
                return [];
            }
        },
        getThumbnail(src) {
            let srcId = src.split("/").pop();
            return `https://img.youtube.com/vi/${srcId}/0.jpg`;
        },
        openVideo(src) {
            this.modalSrc = src;
            this.modalActive = true;
        },
        closeVideo() {
            this.modalActive = false;
            this.modalSrc = "";
        }
    },
};
</script>

<style lang="scss">
.viewPropertyVideo {
    @include element(container) {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 56px 16px;

        @media #{$mq-md} {
            min-height: 0;
            height: calc(100vh - #{$navbarTopHeight});
        }
    }

    @include element(gallery) {
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
            margin: 8px 0 !important;
            overflow: hidden;
            cursor: pointer;
            transition: border-color 0.5s;

            @media #{$mq-md} {
                width: calc(50% - 8px);
                margin: 4px !important;
            }

            @media #{$mq-lg} {
                width: calc(20% - 8px);
                height: 150px;
                border: 2px solid $grey-3;
            }

            &::before {
                content: attr(data-title);
                box-sizing: border-box;
                display: flex;
                align-items: flex-end;
                width: 100%;
                height: 100%;
                padding: 16px;
                position: absolute;
                z-index: 1;
                opacity: 0;
                font-weight: 600;
                color: $white;
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

            &:hover {
                border-color: $brand;

                &::before {
                    opacity: 1;
                }

                .viewPropertyVideo__gallery__thumbnail {
                    transform: scale(1.1);
                }
            }
        }

        @include element(thumbnail) {
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
    }

    @include element(video) {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 16px;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: $z-index-3;
        background-color: rgba($color: black, $alpha: 0.85);

        @media #{$mq-md} {
            padding: 56px;
        }

        @include element(close) {
            min-width: 56px;
            max-width: 56px;
            min-height: 56px;
            max-height: 56px;
            border: 0;
            border-radius: 50%;
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: $z-index-2;
            color: $white;
            background-color: $brand;
            -webkit-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
            -moz-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
            box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
            cursor: pointer;

            @media #{$mq-md} {
                top: -28px;
                right: -28px;
            }
        }

        @include element(container) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40vh;

            @media #{$mq-md} {
                max-width: 1080px;
                height: 610px;
                position: relative;
            }

            iframe {
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>