<template>
    <div class="box">
        <div class="titleBox">
            <span>{{ title }}</span>
        </div>
        <div class="detailsBox">
            <slot>
                
            </slot>
        </div>
    </div>
</template>


<script>
import Result from './result.vue';

export default {
    components: { Result },
    props: {title:{type:String}},
    setup(props) {
        const title =  props.title
        return {
            title
        };
    },
};
</script>


<style scoped>
.titleBox{
    padding: 20px 20px;
    border-bottom: 1px solid var(--hrColor);
}
.titleBox span{
    font-size: 17px;
    font-weight: 400;
}
.detailsBox {
    padding: 30px 25px;
}
.box {
    border: 1px solid var(--hrColor);
}
</style>