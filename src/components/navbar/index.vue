<template>
    <div class="navbar">
        <div class="navbar__top">
            <router-link to="/" tag="figure" class="navbar__top__logo">
                <img
                    :src="require('@/assets/images/company/logo-company.svg')"
                    :alt="companyName"
                />
            </router-link>
            <h1 v-if="this.$route.name == 'Home'" class="navbar__top__title">Catálogo Digital</h1>
            <select v-else v-model="selectedProperty" class="navbar__top__select">
                <option v-for="property in properties" :key="property.name" :value="property.url">{{property.name}}</option>
            </select>
            <button class="navbar__top__expand" @click="toggleFullscreen">
                <font-awesome-icon icon="expand" size="2x" />
            </button>
        </div>
        <navbar-nav v-if="this.$route.name != 'Home'" />
    </div>
</template>

<script>
import Nav from "./nav";

export default {
    components: {
        "navbar-nav": Nav,
    },
    data: function () {
        return {
            companyName: "Construtora Patriani",
            properties: this.$store.state.properties,
            selectedProperty: this.$route.params.propertyName //bind with the properties select
        };
    },
    watch: {
        selectedProperty: function(val) {
            //Check if the next route is diferente from now
            if (val != this.$route.params.propertyName) {
                this.$router.push(`/imovel/${val}`)
            }
        },
        '$route.params.propertyName': function(val) {
            this.selectedProperty = val
        }
    },
    methods: {
        toggleFullscreen: function () {
            //Get document html
            const elem = document.documentElement;

            console.log(this.$route.name);

            //Check if the element is of fullscreen
            if (!document.fullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                    /* Safari */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    /* IE11 */
                    elem.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    /* IE11 */
                    document.msExitFullscreen();
                }
            }
        },
    },
};
</script>

<style lang="scss">
.navbar {
    position: relative;
    z-index: $z-index-3;

    @include element(top) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 16px;
        border-bottom: 1px solid $grey-2;
        background-color: $white;

        @media #{$mq-md} {
            box-sizing: border-box;
            flex-direction: row;
            padding-bottom: 0px;
            height: $navbarTopHeight;
        }

        @include element(logo) {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            padding: 20px;
            text-align: center;
            background-color: $brand;
            cursor: pointer;

            @media #{$mq-md} {
                width: auto;
            }

            &:not(:last-child) {
                margin-bottom: 16px;

                @media #{$mq-md} {
                    margin-right: 16px;
                    margin-bottom: 0px;
                }
            }

            img {
                width: 140px;
            }
        }

        @include element(title) {
            font-size: 22px;
            padding: 8px 0;
        }

        @include element(select) {
            -moz-appearance: none; /* Firefox */
            -webkit-appearance: none; /* Safari and Chrome */
            appearance: none;
            padding: 8px 20px 8px 0px;
            border: none;
            position: relative;
            font-family: $rubik;
            font-size: 20px;
            color: $text-grey;
            background-image: url("../../assets/images/icons/caret-down.svg");
            background-position: right;
            background-size: 12px;
            background-repeat: no-repeat;
            cursor: pointer;
        }

        @include element(expand) {
            padding: 8px;
            border: none;
            border-radius: 4px;
            position: absolute;
            top: 8px;
            right: 8px;
            margin-left: auto;
            color: $text-white;
            background-color: transparent;
            cursor: pointer;
            transition: background-color 0.5s ease;

            @media #{$mq-md} {
                position: static;
                margin-right: 16px;
                color: $text-grey;
            }

            &:hover {
                background-color: darken($color: $brand, $amount: 5);

                @media #{$mq-md} {
                    background-color: $grey-3;
                }
            }
        }
    }
}
</style>