<script>
import CreatePage from './components/createPage.vue';




export default {
  components: {
    CreatePage,
}
}
</script>
<template>
  <CreatePage />
</template>
<style>
body {
  margin: 0px;
  padding: 0;
}

.fleiditem label {
  min-width: 0px;
}

:root {
  --fontColor: rgba(0, 0, 0, 0.95);
  --BacColor: rgba(0, 0, 0, 0.02);
  --windowBac:rgba(0, 0, 0, 0.5);
  --BacHovorColor: rgba(0, 0, 0, 0.06);
  --BlueBorder: rgb(24, 144, 255);
  --white: rgb(255, 255, 255);
  --BlueBac: rgb(39, 139, 253);
  --hrColor: rgba(0, 0, 0, 0.08);
  --hrBorder: rgba(0, 0, 0, 0.15);
  --required: rgb(255, 0, 0);
  --blueHovor: rgb(142, 195, 255);
  --delete: rgba(255, 0, 0, 0.8);
}
</style>