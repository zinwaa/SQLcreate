<template>
    <div v-for="(item,i) in items" :key="i">
        <InputItem :value="item"/>
    </div>
</template>


<script>
import InputItem from './inputItem.vue';
import { tableItem } from '../assets/obj.js'


export default {
    components: { InputItem },
    props: {},
    setup() {
        const items = tableItem
        return {
            items
        };
    },
};
</script>


<style scoped></style>