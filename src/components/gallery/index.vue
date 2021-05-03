<template>
    <div class="gallery">
        <vue-picture-swipe :items="itemsGallery" :options="options"  v-on:open="toggleGallery" v-on:close="toggleGallery"></vue-picture-swipe>
        <button class="drawTrigger" v-if="galleryOpen" @click="toggleDraw">
            <font-awesome-icon v-if="!this.draw" icon="pen" size="2x" />
            <font-awesome-icon v-if="this.draw" icon="times" size="2x" />
        </button>
        <draw-area v-if="this.draw"  />
    </div>
</template>

<script>
import DrawArea from "./../drawArea";

export default {
    name: "Gallery",
    components: {
        DrawArea
    },
    props: {
        target: String,
        items: Array,
    },
    data: function () {
        return {
            publicPath: process.env.BASE_URL,
            itemsGallery: [],
            options: {
                closeOnScroll: false,
            },
            draw: false,
            galleryOpen: false,
        };
    },
    beforeMount() {
        this.items.map((element) => {
            //Push prop element inside new array
            this.itemsGallery.push({
                //Change src prop to a request of the image
                src: `${this.publicPath}static/images/properties/${this.$route.params.propertyName}/${this.target}/${element.src}`,
                //Change thumbnail prop to a request of the image
                thumbnail: `${this.publicPath}static/images/properties/${this.$route.params.propertyName}/${this.target}/${element.thumbnail}`,
                w: element.w,
                h: element.h,
                title: element.title,
            });
        });
    },
    methods: {
        toggleDraw: function() {
            //Change the state of the trigger button
            this.draw = !this.draw;
        },
        toggleGallery: function() {
            //Change the state of gallery
            this.galleryOpen = !this.galleryOpen;
            //Disable body scroll
            if(this.galleryOpen) {
                document.getElementsByTagName("body")[0].style.overflowY = 'hidden';
            } else {
                document.getElementsByTagName("body")[0].style.overflowY = 'auto';
            }
        }
    }
};
</script>

<style lang="scss">
.my-gallery {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;

    .gallery-thumbnail {
        box-sizing: border-box;
        width: 100%;
        height: 240px;
        border: 2px solid $brand;
        position: relative;
        margin: 8px 0 !important;
        overflow: hidden;
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

        &:hover {
            border-color: $brand;

            > a {
                &::before {
                    opacity: 1;
                }

                img {
                    transform: scale(1.1);
                }
            }
        }

        > a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;

            &::before {
                content: attr(title);
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

            img {
                min-width: 180%;
                transition: transform 0.5s;
            }
        }
    }
}

.pswp {
    &.pswp--supports-fs {
        .pswp__button--fs {
            display: none!important;
        }
    }
}

.drawTrigger {
    min-width: 56px;
    max-width: 56px;
    min-height: 56px;
    max-height: 56px;
    border: 0;
    border-radius: 50%;
    position: fixed;
    top: 48px;
    left: 24px;
    z-index: 10000;
    color: $white;
    background-color: $brand;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
    -moz-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
    box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
    cursor: pointer;

    @media #{$mq-md} {
        left: 48px;
    }
}
</style>