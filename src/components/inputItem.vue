<template>
    <div :class="item.key" v-if="item.key !== 'fleidName'">
        <label :class="{ requrid: item.isrequrid }">{{ item.itemName }}</label>
        <InputBox type="text" :id="item.key" :placeholder="item.placeholderText" v-if="item.isText === 'text'"
            :value="item.defaultValue"/>
        <InputBox type="checkbox" :id="item.key" :checked="item.defaultValue" v-else />
    </div>
    <div :class="item.key" v-else>
        <span><img src="./icons/triangular.svg" alt="" :class="{ isRevolve: show }"></span>
        <label>{{ item.itemName }}</label>
        <InputBox type="text" :id="item.key" :placeholder="item.placeholderText" :value="item.defaultValue"
            @click.stop=""/>
    </div>
</template>


<script>
import { ref, watch } from 'vue';
import InputBox from './inputBox.vue';


export default {
    components: { InputBox },
    props: {
        value: {
        },
        show: {
            type: Boolean
        }
    },
    setup(props) {
        //元素信息
        const item = {
            itemName: props.value.title,
            placeholderText: props.value.text,
            isrequrid: props.value.requrid,
            isText: props.value.isText,
            defaultValue: props.value.default,
            key: props.value.key,
        }
        const show = ref(false)
        watch(() => props.show, (newVal) => {
            show.value = newVal;
        });
        return {
            show, item
        };
    },
};
</script>


<style scoped>
div {
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin: 15px 0px;
    justify-content: flex-start;
    height: 32px;
}

.requrid::before {
    content: " * ";
    color: var(--required);
}

label {
    font-size: 14px;
    text-align: justify;
    flex: none;
    min-width: 60px;
    margin-right: 10px;
}
label::after{
    content: ":";
}

.fleidName {
    padding: 15px 0;
    flex: 1;
    padding-left: 20px;
    background-color: var(--hrColor);
    margin-top: 0;
    margin-bottom: 0;
}

.fleidName input {
    border: 1px solid var(--hrBorder);
    margin-right: 11px;
    width: 50%;
}

.fleidName input:hover {
    border: 1px solid var(--BlueBorder);
}

.fleidName input:focus-visible {
    outline: none;
    border: 1px solid var(--BlueBorder);
    box-shadow: 2px 0 4px 1px var(--blueHovor), -2px 0 4px 1px var(--blueHovor);
}

span {
    position: relative;
    width: 30px;
    height: 20px;
    top: 1px;
}

img {
    width: 10px;
    height: 15px;
    transform-origin: center center;
    transform: rotate(-90deg);
    transition: all 0.3s;
}

.isRevolve {
    transform: rotate(0deg);
}
</style>