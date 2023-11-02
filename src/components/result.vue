<template>
    <div class="container">
        <div class="foldTitle"  @click="isShow">
            <span><img src="./icons/triangular.png" alt="" :class="{ isRevolve: show }"></span>
            <div class="title">
                建表语句
            </div>
        </div>
        <transition>
            <div v-show="show" contenteditable class="textDiv">
            </div>
        </transition>
    </div>
</template>


<script>
import { ref,getCurrentInstance } from 'vue';

export default {
    components: {  },
    props: {},
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const show = ref(true)
        const isShow=()=>{
            show.value = !show.value;
        }
        $bus.on('create',(data) => {
            let text = ''
            if(data.table.tableComment) text += `--${data.table.tableComment}\n`
            text += `create table if not exists \`${data.table.tableName}\` \n(\n`
            let {table,...list} = data
            let length = Object.keys(list).length
            for (let i = 0; i < length; i++) {
                let temp = list[String(i)]
                text +=`\`${temp.fleidName}\` ${temp.fleidType}`
                if(temp.fleidDefault) text += ` default ${temp.fleidDefault}`
                if(temp.fleidIsEmpty) text += ' not null' ;else text += ' null'
                if(temp.fleidAddition) text += ' auto_increment'
                if(temp.fleidOnUpdata) text += ` on update ${temp.fleidOnUpdata}`
                if(temp.fleidComment) text += ` comment '${temp.fleidComment}'`
                if(temp.fleidPrimaryKey) text += ` primary key`
                if(i+1 != length) text +=',\n' ;else text +='\n'
            }
            text += `)comment `
            if(data.table.tableComment) text += `${data.table.tableComment};`
            document.getElementsByClassName('textDiv')[0].innerText = text
            $bus.emit('createOk')
        })
        return {
            show,isShow
        };
    },
};

</script>


<style scoped>
.container {
    border: 1px solid var(--hrBorder);
    display: flex;
    flex-direction: column;
}

.foldTitle {
    display: flex;
    flex-grow: 1;
    background-color: var(--hrColor);
    padding: 15px 20px;
    font-size: 14px;
    border-bottom: 1px solid var(--hrBorder);
}

.v-enter-active,
.v-leave-active {
    transition: all .1s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

span {
    position: relative;
    width: 30px;
    height: 20px;
    top: 1px;
}
</style>
<style>
img {
    width: 10px;
    height: 15px;
    transform-origin: center center;
    transform: rotate(-90deg);
    transition: all 0.1s;
}
.textDiv {
    width: calc(100% - 40px);
    min-height: 300px;
    font-size: 15px;
    padding: 15px 20px;
    white-space: nowrap;
    overflow-x: auto;
}
.textDiv:focus-visible {
    outline: none;
}
.isRevolve {
    transform: rotate(0deg);
}
</style>