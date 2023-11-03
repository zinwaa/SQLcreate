<template>
    <div>
        <WindowBac v-show="show" :show="show">
            <div class="window" @click.stop="">
                <div class="title">
                    <div>
                        <span class="titleText">{{ title }}</span>
                    </div>
                    <div>
                        <span>
                            <close />
                        </span>
                    </div>
                </div>
                <div class="mainPart">
                    <div class="inputPart">
                        <div class="inputTitle">
                            <span class="requrid" v-if="title === '智能导入'">{{ ex.fieldList.placeholder }}</span>
                            <span class="requrid" v-else-if="title === '导入多条字段'">{{ ex.fleidJson.placeholder }}</span>
                            <Btn :name="'导入示例'" @click="textEx" />
                        </div>
                        <div class="text">
                            <textarea name="" id="" :key="title" :placeholder="placeholder"></textarea>
                        </div>
                    </div>
                    <div class="btnPart">
                        <Btn :name="'导入'" class="required sfont" style="width: 120px;" @click="submit" />
                        <Btn :name="'重置'" @click="reset" />
                    </div>
                </div>

            </div>
        </WindowBac>
    </div>
</template>


<script>
import WindowBac from './windowBac.vue';
import close from './close.vue'
import { getCurrentInstance, ref } from 'vue';
import Btn from '../btn.vue';
import { example } from '../../assets/obj';
export default {
    components: { WindowBac, close, Btn },
    props: {},
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus
        const title = ref('')
        const show = ref(false)
        const ex = example
        const placeholder = ref('')
        $bus.on('openInputWin', (data) => {
            title.value = data
            show.value = true
            if (title.value === '智能导入') {
                placeholder.value = ex.fieldList.placeholder
            } else {
                placeholder.value = ex.fleidJson.placeholder
            }
        })
        $bus.on('closeWindow', () => {
            show.value = false
        })
        const textEx = () => {
            const textDom = document.getElementsByTagName('textarea')[0]
            if (title.value === '智能导入') {
                textDom.value = ex.fieldList.ex
            } else textDom.value = ex.fleidJson.ex
        }
        const reset = () => {
            const textDom = document.getElementsByTagName('textarea')[0]
            textDom.value = ''
        }
        const submit = () => {
            const text = document.getElementsByTagName('textarea')[0].value
            if (text === '') {
                console.error("该空不能为空");
            }
            else {
                if (title.value === '智能导入') {
                    const list = text.split(/,|，/gi)
                    let data = []
                    for (let i = 0; i < list.length; i++) {
                        data.push({ 'fieldName': list[i] })
                    }
                    $bus.emit('fieldList', data)
                } else {
                    const obj = eval('(' + '{' + text + '}' + ')')
                    $bus.emit('tableList', obj)
                }
                show.value = false
            }

        }

        return {
            title, show, ex, placeholder, textEx, reset, submit
        };
    },
};
</script>


<style scoped>
.window {
    width: 550px;
    height: 600px;
    background-color: var(--white);
    position: fixed;
    top: calc(50% - 350px);
    left: calc(50% - 275px);
    z-index: 1000;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid var(--hrBorder);
}

.title span {
    line-height: 50px;
}

.titleText {
    margin-left: 30px;
    font-size: 18px;
    font-weight: 500;
}

.requrid {
    font-size: 15px;
    margin-right: 20px;
}

.requrid::before {
    content: " * ";
    color: var(--required);
}

.mainPart {
    padding: 10px 20px 0 20px;
}

textarea {
    width: 95%;
    height: 350px;
    resize: none;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 10px;
    transition: all 0.5s;
    font-family: 'FangSong_GB2312';
    border: 1px solid var(--hrBorder);
}

textarea:focus-visible {
    outline: none;
}

textarea:focus {
    border: 1px solid var(--BlueBorder);

}

.text {
    margin-top: 20px;
}

.btnPart {
    display: flex;
    margin-top: 10px;
    gap: 30px;
}
</style>