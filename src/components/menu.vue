<script>
import MenuItem from "./menuitem.vue";
import { reactive, ref } from "vue";
import Hr from "./hr.vue";

export default {
  setup() {
    let isactive = ref(true)
    let updataItem = ref("代码生成")

    const MenuLists = reactive(["代码生成"
    //  "表大全",
    //   "字段大全"
    ]);
    return {
      MenuLists,
      isactive,
      updataItem
    }
  },
  components: {
    MenuItem,
    Hr
},
}
</script>
<template>
  <div class="header">
    <div><a href="">SQL语句生成器</a></div>
    <ul>
      <li v-for="(item, i) in MenuLists" :key="i">
        <MenuItem :menu="item" :class="{ active: item === updataItem }" @isActive="updataItem = item" />
      </li>
    </ul>
  </div>
  <Hr />
</template>

<style scoped>
.active {
  background-color: var(--BacHovorColor);
}

ul {
  display: flex;
  margin: 0;
  gap: 20px;
  flex: 1 1 0;

}

li {
  display: inline-block;
  width: 90px;
  cursor: pointer;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  margin: 10px 0px;
  margin-left: 50px;
}
a{
  text-decoration:none;
  color: var(--fontColor);
  font-size: 26px;
  font-weight: 800;
}
</style>