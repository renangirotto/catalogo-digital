<template>
    <nav class="nav">
        <button class="nav__trigger" @click="toggleNav">
            <font-awesome-icon v-if="!this.trigger" icon="bars" size="2x" />
            <font-awesome-icon v-if="this.trigger" icon="times" size="2x" />
        </button>
        <transition-group name="fade" tag="ul" class="nav__list">
            <li
                v-for="(item, index) in menu"
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
            </li>
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
                    name: "Infos",
                    icon: "images",
                    route: "",
                    active: false,
                },
                {
                    name: "Área de Lazer",
                    icon: "images",
                    route: "",
                    active: false,
                },
                {
                    name: "Decorado",
                    icon: "images",
                    route: "",
                    active: false,
                },
                {
                    name: "Plantas",
                    icon: "ruler-combined",
                    route: "",
                    active: false,
                },
                {
                    name: "Vídeos",
                    icon: "play-circle",
                    route: "",
                    active: false,
                },
                {
                    name: "Modelo 3D",
                    icon: "cubes",
                    route: "",
                    active: false,
                },
                {
                    name: "Mapa",
                    icon: "map-marker-alt",
                    route: "",
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

    @include element(trigger) {
        min-width: 56px;
        max-width: 56px;
        min-height: 56px;
        max-height: 56px;
        border: 0;
        border-radius: 50%;
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
.fade-enter, .fade-leave-to {
    opacity: 0;
    left: -8px;
}
</style>