<template>
    <div class="fleidMenu">
        <!-- <Btn name="保存" @click.stop="" type="button"/> -->
        <Btn name="删除" class="deleteFleid"  @click.stop="deleteFleid" type="button" />
    </div>
</template>


<script>
import Btn from './btn.vue';
export default {
    components: { Btn },
    props: {listkey:{type:Number}},
    setup(props,content) {
        const deleteFleid=()=>{
            content.emit('deleteFleid')
        }
        return {
            deleteFleid
        };
    },
};
</script>


<style scoped>
.fleidMenu {
    /* display: flex; */
    display: block;
    flex-direction: row;
    box-sizing: border-box;
    border: none;
    flex: 0;
    width: 56px;
}
.fleidMenu button {
    height: 100%;
    outline: none;
    border: none;
    background-color: var(--hrColor);
    width: 56px;
}
.deleteFleid {
    color: var(--delete);
}
.deleteFleid :hover{
    color: var(--required);
}

</style>