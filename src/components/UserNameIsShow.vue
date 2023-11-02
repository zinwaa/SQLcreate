<template>
    <div>
        <span v-if="isShow()"> {{ UserName }}</span>
        <span v-else>
            <LoginBtn />
        </span>
    </div>
</template>


<script>

import { ref } from 'vue';
import LoginBtn from './LoginBtn.vue';

export default {
    components: { LoginBtn },
    props: {},
    setup() {
        const UserName = ref("")
        const isShow = () => (UserName.value === "") ? false : true
        return {
            UserName, isShow
        };
    },
};

</script>


<style scoped>
div {
    width: 70px;
    height: 100%;
}
</style>