import { createApp } from "vue";
import  App  from './App.vue';
import mitt from "mitt";

const app = createApp(App);
// app.config.globalProperties.$Bus = new mitt()
const $bus = {}
const emitter = mitt()
$bus.on = emitter.on
$bus.emit = emitter.emit
$bus.off = emitter.off
app.config.globalProperties.$bus = $bus


app.mount('#app');


