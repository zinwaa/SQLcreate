<template>
    <div class="tip">{{ title }}
    </div>
</template>


<script>
import { getCurrentInstance,ref } from 'vue';
export default {
    components: {},
    props: {},
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        let title = ref('')
        $bus.on('createOk', () => {
            let tipDom = document.querySelector("#app > div.tip")
            title.value = "已成功生成"
            tipDom.classList.add("ok")
            setTimeout(()=>tipout("ok"),3000)
        })
        $bus.on('error',(data)=>{
            let tipDom = document.querySelector("#app > div.tip")
            title.value = data
            tipDom.classList.add("error")
            setTimeout(()=>tipout("error"),3000)
        })
        const tipout = (tip) => {
            let tipDom = document.querySelector("#app > div.tip")
            tipDom.classList.remove(tip)
        }
        return {
            title, tipout
        };
    },
};
</script>


<style scoped>
.tip {
    position: fixed;
    top: 60px;
    left: 48%;
    height: 40px;
    transition: all 0.25s ease-in-out;
    background-color: var(--white);
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    border-radius: 8px;
    padding: 0px 20px;
    opacity: 0;
}
.error{
    border: 1px solid var(--required);
    box-shadow: 2px 1px 10px -1px var(--delete);
    color: var(--delete);
    transform:translateY(20px);
    opacity: 1;
}
.ok{
    border: 1px solid var(--BlueBac);
    box-shadow: 2px 1px 10px -1px var(--BlueBorder);
    color: var(--BlueBorder);
    transform:translateY(20px);
    opacity: 1;
}


</style>