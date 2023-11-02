<template>
    <button>
        <span>
            {{ name }}
        </span>
    </button>
</template>


<script>
export default {
    components: {},
    props: { name },
    setup() {
    },
};
</script>


<style scoped>
* {
    box-sizing: border-box;
}

button {
    height: 35px;
    background-color: var(--white);
    border: var(--hrColor) 1px solid;
    border-radius: 2px;
    transition-property: border, box-shadow;
    transition-duration: 0.3s, 0.1s;
    cursor: pointer;
}

span {
    padding: 0 8px;
    font-size: 14px;
    color: var(--fontColor) inherit;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
}

button:hover {
    border: var(--BlueBac) 1px solid;
}

button:hover span {
    color: var(--BlueBac);
}

button:active {
    box-shadow: 1px 0 4px 1px var(--blueHovor), -1px 0 4px 1px var(--blueHovor);
}

.required {
    border: var(--BlueBac) 1px solid;
}

.required span {
    color: var(--BlueBac) inherit;
}

.required:hover {
    border: var(--BlueBorder) 1px solid;
    background-color: var(--BlueBac);
}

.required:hover span {
    color: var(--white);
}

.required:active {
    border: var(--BlueBorder) 1px solid;
    box-shadow: 1px 0 4px 1px var(--blueHovor), -1px 0 4px 1px var(--blueHovor);
}

.deleteFleid:hover span {
    color: var(--required);
}

.fleidMenu button:active {
    border: none;
    background-color: var(--hrColor);
    box-shadow: none;
}
.sfont span{
    color:var(--BlueBac);
}
</style>