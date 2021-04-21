<template>
    <nav class="nav" :class="{ active: this.trigger }">
        <button class="nav__trigger" @click="toggleNav">
            <font-awesome-icon v-if="!this.trigger" icon="bars" size="2x" />
            <font-awesome-icon v-if="this.trigger" icon="times" size="2x" />
        </button>
        <transition-group name="fade" tag="ul" class="nav__list">
            <router-link
                :to="
                    index == menu.length - 1
                        ? `/`
                        : `/imovel/${$route.params.propertyName}/${item.route}`
                "
                tag="li"
                v-for="(item, index) in menu"
                @click.native="toggleNav"
                :key="item.name"
                :class="
                    index == menu.length - 1
                        ? 'nav__list__item--all'
                        : 'nav__list__item'
                "
                v-show="item.active"
            >
                <span class="nav__list__item__icon">
                    <font-awesome-icon :icon="item.icon" />
                </span>
                {{ item.name }}
            </router-link>
        </transition-group>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data: function () {
        return {
            trigger: false,
            menu: [
                {
                    name: "Início",
                    icon: "home",
                    route: "",
                    active: false,
                },
                {
                    name: "Infos",
                    icon: "images",
                    route: "infos",
                    active: false,
                },
                {
                    name: "Área de Lazer",
                    icon: "images",
                    route: "lazer",
                    active: false,
                },
                {
                    name: "Decorado",
                    icon: "images",
                    route: "decorado",
                    active: false,
                },
                {
                    name: "Plantas",
                    icon: "ruler-combined",
                    route: "plantas",
                    active: false,
                },
                {
                    name: "Vídeos",
                    icon: "play-circle",
                    route: "video",
                    active: false,
                },
                {
                    name: "Modelo 3D",
                    icon: "cubes",
                    route: "modelo-3d",
                    active: false,
                },
                {
                    name: "Mapa",
                    icon: "map-marker-alt",
                    route: `mapa`,
                    active: false,
                },
                {
                    name: "Outros empreendimentos",
                    icon: "building",
                    route: "",
                    active: false,
                },
            ],
        };
    },
    methods: {
        toggleNav: function () {
            //Change the state of the trigger button and global menu state
            this.trigger = !this.trigger;

            //Change individually the state of every menu item
            this.menu.map((element, index) => {
                //Timeout to control list animation
                setTimeout(function () {
                    element.active = !element.active;
                }, 100 * index);
            });
        },
    },
};
</script>

<style lang="scss">
.nav {
    position: absolute;
    top: calc(100% + 16px);
    left: 16px;
    z-index: $z-index-2;

    @media #{$mq-md} {
        top: calc(100% + 32px);
        left: 32px;
    }

    &::before {
        content: "";
        display: block;
        width: 0vw;
        height: 100vh;
        position: absolute;
        top: -16px;
        left: -16px;
        z-index: $z-index-1;
        background: rgba(29, 29, 29, 0.72);
        background: -moz-linear-gradient(
            -45deg,
            rgba(29, 29, 29, 0.72) 0%,
            rgba(255, 255, 255, 0) 50%
        );
        background: -webkit-gradient(
            left top,
            right bottom,
            color-stop(0%, rgba(29, 29, 29, 0.72)),
            color-stop(50%, rgba(255, 255, 255, 0))
        );
        background: -webkit-linear-gradient(
            -45deg,
            rgba(29, 29, 29, 0.72) 0%,
            rgba(255, 255, 255, 0) 50%
        );
        background: -o-linear-gradient(
            -45deg,
            rgba(29, 29, 29, 0.72) 0%,
            rgba(255, 255, 255, 0) 50%
        );
        background: -ms-linear-gradient(
            -45deg,
            rgba(29, 29, 29, 0.72) 0%,
            rgba(255, 255, 255, 0) 50%
        );
        background: linear-gradient(
            135deg,
            rgba(29, 29, 29, 0.72) 0%,
            rgba(255, 255, 255, 0) 50%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d1d1d', endColorstr='#ffffff', GradientType=1 );
        opacity: 0;
        transition: width 1s, opacity .5s;

        @media #{$mq-md} {
            height: calc(100vh - #{$navbarTopHeight});
            top: -32px;
            left: -32px;
        }
    }

    &.active {
        &::before {
            width: 100vw;
            opacity: 1;
        }
    }

    @include element(trigger) {
        min-width: 56px;
        max-width: 56px;
        min-height: 56px;
        max-height: 56px;
        border: 0;
        border-radius: 50%;
        position: relative;
        z-index: $z-index-2;
        color: $white;
        background-color: $brand;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
        -moz-box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
        box-shadow: 0px 2px 5px 0px rgba(68, 68, 68, 0.3);
        cursor: pointer;
    }

    @include element(list) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 16px;

        @include element(item) {
            padding: 8px 12px;
            border: 1px solid $brand;
            border-radius: 4px;
            position: relative;
            left: 0px;
            z-index: $z-index-2;
            font-size: 20px;
            color: $white;
            background-color: $brand;
            -webkit-box-shadow: 0px 1px 1px 0px rgba(68, 68, 68, 0.15);
            -moz-box-shadow: 0px 1px 1px 0px rgba(68, 68, 68, 0.15);
            box-shadow: 0px 1px 1px 0px rgba(68, 68, 68, 0.15);
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 12px;
            }

            @include element(icon) {
                margin-right: 4px;
                font-size: 24px;
            }

            @include modifier(all) {
                @extend .nav__list__item;
                border: 1px solid $grey-2;
                color: $brand;
                background-color: $white;
            }
        }
    }
}

.fade-enter-active {
    transition: left 0.5s, opacity 1s;
}
.fade-leave-active {
    transition: left 1s, opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    left: -8px;
}
</style>