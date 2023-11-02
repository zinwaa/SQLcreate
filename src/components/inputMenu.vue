<template>
    <div class="inputMenu">
        <div v-for="(item, i) in items" :key="i">
            <Btn :name="item" :class="{ required: item === '智能导入', sfont: item === '智能导入' }" @click="getWin(item)" />
        </div>
    </div>
</template>


<script>
import Btn from './btn.vue';
import { inputItem } from '../assets/obj.js'
import { getCurrentInstance } from 'vue';
export default {
    components: { Btn },
    props: {},
    setup() {
        const items = inputItem
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const openInputWin = (item) => {
            $bus.emit('openInputWin', item)
        }
        const getWin = (item) => {
            if (item !== '导入表') { openInputWin(item) }
            else{console.log('导入表');}
        }
        return {
            items, openInputWin, getWin
        };
    },
};
</script>


<style scoped>
.inputMenu {
    display: flex;
    gap: 20px;
}
</style>