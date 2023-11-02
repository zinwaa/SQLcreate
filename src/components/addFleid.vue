<template>
    <div class="container">
        <Btn name="+ 新增字段" @click="addFleid" type="button"/>
        <!-- <Btn name="+ 导入字段" type="button"/> -->
    </div>
</template>


<script>
import Btn from './btn.vue';
import { getCurrentInstance } from 'vue';

export default {
    components: { Btn },
    props: {},
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus

        //增加字段配置条
        const addFleid = () => {
            $bus.emit('addFleid')
        }
        return {
            addFleid
        };
    },
};
</script>


<style scoped>
.container {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: var(--hrColor) 1px dashed;
    ;
}

.container button {
    width: 100%;
}
</style>