<template>
    <div class="container">
        <Btn class="required" name="一键生成" @click.stop="create" />
        <!-- <Btn name="保存" /> -->
        <Btn name="重置" @click.stop="reset" type="button" />
    </div>
</template>


<script>
import Btn from './btn.vue'
import { getCurrentInstance } from 'vue';
export default {
    components: { Btn },
    props: { list: {} },
    setup(props, contexts) {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const reset = () => {
            props.list.splice(0, props.list.length)
            document.getElementById("databaseName").value = ''
            document.getElementById("tableName").value = 'test_table'
            document.getElementById("tableComment").value = ''
        }
        const create = () => {
            let doms = {
                inputDom: document.getElementsByTagName("input"),
                boxDom: document.getElementsByClassName("fleidBox")[0].children,
                requrid: document.getElementsByClassName("requrid"),
                fieldName:document.getElementsByClassName("fleidName")
            }
            let temp = {}
            for (let i = 0; i < doms.requrid.length; i++) {
                if(doms.requrid[i].nextElementSibling.value ===""){
                    $bus.emit('error', `${doms.requrid[i].innerHTML}为必填项`)
                    return
                }
            }
            for (let i = 0; i < doms.fieldName.length; i++) {
                if(doms.fieldName[i].children[2].value ===""){
                    $bus.emit('error', `第${i+1}项字段名未填写`)
                    return
                }
            }
            if (doms.boxDom.length === 0) {
                $bus.emit('error', "至少要有一个字段")
            }
            else {
                for (let i = 0; i < doms.boxDom.length; i++) {
                    let key = doms.boxDom[i].id
                    temp[key] = []
                    let id = ''
                    let value = ''
                    temp["table"] =
                    {
                        dbName: doms.inputDom[0].value,
                        tableName: doms.inputDom[1].value,
                        tableComment: doms.inputDom[2].value
                    }
                    for (var j = 3; j < doms.inputDom.length; j++) {
                        if (Math.trunc((j - 3) / 8) == i) {
                            if (doms.inputDom[j].type == "text") {
                                id = doms.inputDom[j].id
                                value = doms.inputDom[j].value
                            }
                            else {
                                id = doms.inputDom[j].id
                                value = doms.inputDom[j].checked
                            }
                            temp[key][id] = value
                        }
                    }
                }
                $bus.emit('create', temp)
            }


        }
        return {
            reset, create
        };
    },
};
</script>


<style scoped>
.required {
    width: 180px;
    color: var(--white);
    background-color: var(--BlueBac);
}

.container {
    display: flex;
    column-gap: 30px;
}
</style>