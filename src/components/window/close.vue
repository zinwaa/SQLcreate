<template>
    <div @click.stop="close">
        <span>
            ×
        </span>
    </div>
</template>


<script>
import { getCurrentInstance } from 'vue';
export default {
    
    components: {},
    props: {},
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const close = ()=>{
            $bus.emit('closeWindow')
        }
        
        return {
            close
        };
    },
};
</script>


<style scoped>
div {
    height: 100%;
    cursor: pointer;
    padding: 0 25px;
}
div span {
    font-size: 25px;
    font-weight: 100;
}

</style>