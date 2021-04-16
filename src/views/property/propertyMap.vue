<template>
    <div class="viewPropertyMap">
        <section class="viewPropertyMap__container fullscreen">
            <iframe
            :src="propertyMap"
            style="border: 0"
            allowfullscreen=""
        ></iframe>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        //Filter properties to get selected property map
        propertyMap: function() {
            let target = this.$store.state.properties.find(element => {
                if (element.url == this.$route.params.propertyName) {
                    return element
                }
            })
            
            return target.mapUrl
        }
    }
};
</script>

<style lang="scss">
.viewPropertyMap {
    @include element(container) {
        position: relative;
    }

    iframe {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
</style>