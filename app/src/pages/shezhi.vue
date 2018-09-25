<template>
  <div class="set-box">
  <shezhi-header></shezhi-header>
  <shezhi-content></shezhi-content>
  </div>

</template>

<script>
    import ShezhiHeader from "../components/shezhi/shezhiHeader";
    import ShezhiContent from "../components/shezhi/shezhiContent";
    export default {
        name: "shezhi",
      components: {ShezhiContent, ShezhiHeader}
    }
</script>

<style scoped>
  .set-box{
    width: 100%;
    height: 100%;
    background: #f3f3f3;
  }
</style>
