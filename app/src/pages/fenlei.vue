<template>
  <div class="index">
    <fenlei-header></fenlei-header>
    <fenlei-content-menu></fenlei-content-menu>
  </div>
</template>

<script>
  import fenleiHeader from '../components/fenlei/fenlei-header.vue';
  import fenleiContentMenu from '../components/fenlei/fenlei-content-menu.vue';
  export default {
    components: {
      fenleiHeader,
      fenleiContentMenu,
    }
  }
</script>

<style scoped>
* {
  color: #000;
  font-size: 0.14rem;
  outline: none;
  font-style: normal;
}
.index{
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
</style>
