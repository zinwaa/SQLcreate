<template>
    <div @click="close">
        <div class="windowBac">
            <slot>

            </slot>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { getCurrentInstance } from 'vue';
export default {
    components: {},
    props: { show: { type: Boolean } },
    setup(props) {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const show = ref(props.show)
        const close=()=>{
            $bus.emit('closeWindow')
        }
        return {
            show,close,
        };
    },
};
</script>


<style scoped>
.windowBac {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100%;
    background-color: var(--windowBac);
}
</style>