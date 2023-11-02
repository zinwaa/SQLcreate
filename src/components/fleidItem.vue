<template>
    <div class="container">
        <div class="foldTitle" @click="isShow">
            <InputItem :value="itemsTitle" :show="show" />
            <FleidMenu @deleteFleid="deleteFleid" />
        </div>
        <transition>
            <div class="fleiditem" v-show="show">
                <div v-for="(item) in itemsMain">
                    <InputItem :value="item" />
                </div>
            </div>
        </transition>

    </div>
</template>


<script>
import { ref } from "vue";
import FleidMenu from "./fleidMenu.vue";
import InputItem from "./inputItem.vue";
export default {
    components: { InputItem, FleidMenu },
    props: { List: { type: Object } },
    setup(props,content) {
        const list = JSON.parse(JSON.stringify(props.List))
        //字段名与字段信息分离
        const itemsTitle =  list.fleidName 
        const { fleidName, ...itemsMain } = list
        //是否展开字段信息
        const show = ref(false)
        const isShow = () => {
            show.value = !show.value;
        }
        const deleteFleid = () => {
            content.emit('deleteFleid')
        }
        return {
            itemsTitle, itemsMain, show, deleteFleid, isShow
        };
    },
};
</script>


<style scoped>
.container {
    border: 1px solid var(--hrBorder);
    display: flex;
    flex-direction: column;
    flex: none;
}

.fleiditem {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 30px;
    margin: 5px 20px;
}

.fleidMenu button :active {
    border: none;
    background-color: var(--hrColor);
    box-shadow: none;
}

.foldTitle {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

.v-enter-active,
.v-leave-active {
    transition: all .1s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}
</style>