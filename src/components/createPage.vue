<template>
    <div>
        <Menu />
    </div>
    <div class="page" ref="page">
        <div class="box">
            <Box :title="'输入配置'">
                <InputMenu />
                <tableItem />
                <div class="fleidBox">
                    <FleidItem v-for="(item, i) in List" @deleteFleid="deleteFleid(i)" :List="item" :key="symbol(i)"
                        :id="i" />
                </div>
                <AddFleid />
                <CreateMenu :list="List"/>
            </Box>
        </div>
        <div class="box">
            <Box :title="'输出结果'">
                <Result />
            </Box>
        </div>
    </div>
    <InputWin />
    <tip />
</template>


<script>
import Box from './box.vue';
import Menu from './menu.vue'
import fleidItem from './fleidItem.vue'
import InputMenu from './inputMenu.vue'
import FleidItem from './fleidItem.vue'
import AddFleid from './addFleid.vue';
import tableItem from './tableItem.vue'
import CreateMenu from './createMenu.vue';
import Result from './result.vue'
import elementResizeDetectorMaker from "element-resize-detector";
import { reactive, ref, watch, onMounted, getCurrentInstance, readonly } from 'vue';
import InputWin from './window/inputWin.vue';
import tip from './window/tip.vue';
import {FList} from '../assets/obj'
export default {
    components: {
        Menu, Box, fleidItem,
        InputMenu, FleidItem, AddFleid,
        tableItem, CreateMenu, Result,
        InputWin,tip
    },
    props: {},
    setup(props, content) {
        const instance = getCurrentInstance();
        const fleidList = readonly(FList)
        //字段配置条列表
        let List = reactive([])
        //删除一条字段配置
        const deleteFleid = (data) => {
            List.splice(data, 1)
        }
        const fieldShow = ref(true)
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus

        //增加一条空的字段配置
        $bus.on('addFleid', () => {
            let temp = fleidList
            List.push(temp)
        })
        //智能导入
        $bus.on('fieldList', (data) => {
            List.splice(0, List.length)
            for (let index = 0; index < data.length; index++) {
                let temp = JSON.parse(JSON.stringify(fleidList))
                temp.fleidName.default = data[index].fieldName
                List.push(temp)
            }
        })
        //导入多条字段
        $bus.on('tableList', (obj) => {
            List.splice(0, List.length)

            document.getElementById("databaseName").value = obj.dbName
            document.getElementById("tableName").value = obj.tableName
            document.getElementById("tableComment").value = obj.tableComment

            let list = obj.fieldList
            for (let i = 0; i < list.length; i++) {
                let temp = JSON.parse(JSON.stringify(fleidList))
                temp.fleidName.default = list[i].fieldName
                temp.fleidType.default = list[i].fieldType
                temp.fleidDefault.default = list[i].defaultValue
                temp.fleidComment.default = list[i].comment
                temp.fleidOnUpdata.default = list[i].fieldOnUpdata
                temp.fleidIsEmpty.default = list[i].notNull
                temp.fleidPrimaryKey.default = list[i].primaryKey
                temp.fleidAddition.default = list[i].autoIncrement
                List.push(JSON.parse(JSON.stringify(temp)))
            }
        })


        onMounted(() => {
            watch(List, () => {
                instance.proxy.$forceUpdate()
            })
        })

        const symbol = (i) => Symbol(i)
        return {
            List, deleteFleid, fieldShow, symbol
        };
    },
    mounted() {
        let erd = elementResizeDetectorMaker();
        var pageWidth = 0;
        const pageDom = document.getElementsByClassName("page")[0]
        erd.listenTo(pageDom, (e) => {
            pageWidth = Number(getComputedStyle(e, null).width.slice(0, -2))
            if (pageWidth < 1000) {
                document.getElementsByClassName("page")[0].style.flexDirection = "column"
            }
            if (pageWidth >= 1000) {
                document.getElementsByClassName("page")[0].style.flexDirection = "row"
            }
        })



    },
};
</script>


<style scoped>
.page {
    display: flex;
    /* justify-content: space-evenly; */
    flex-direction: row;
    padding: 20px 100px;
    column-gap: 40px;
    row-gap: 40px;
}

.box {
    flex: 1;
}

.fleidBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>