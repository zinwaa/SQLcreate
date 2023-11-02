<template>
    <input type="">
</template>

<script>
export default {
    setup(){
    },
    mounted(){
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

input {
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid var(--hrColor);
    transition: all 0.3s;
    padding: 2px 10px;
    border-radius: 2px;
    font-size: 14px;
}
input:hover {
    border: 1px solid var(--BlueBorder);
}
input:focus-visible {
    outline: none;
    border: 1px solid var(--BlueBorder);
    box-shadow: 2px 0 4px 1px var(--blueHovor), -2px 0 4px 1px var(--blueHovor);
}
input[type="checkbox"]{
    padding: 0;
    height: 15px;
    cursor: pointer;
    width: 15px;
}

</style>