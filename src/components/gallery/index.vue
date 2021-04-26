<template>
    <vue-picture-swipe
        :items="itemsGallery"
    ></vue-picture-swipe>
</template>

<script>
export default {
    name: "Gallery",
    props: {
        target: String,
        items: Array,
    },
    data: function () {
        return {
            publicPath: process.env.BASE_URL,
            itemsGallery: [],
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
</style>