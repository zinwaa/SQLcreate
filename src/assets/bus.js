import { getCurrentInstance } from 'vue';

export default {
    setup() {
        let $bus = getCurrentInstance().appContext.config.globalProperties.$bus

        //发送
        $bus.emit('bus-event',data)

        //接收
        $bus.on('bus-event',(data) => {
            console.log(data);
        })
        return {
        };
    },
};



