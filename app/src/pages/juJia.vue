<template>
      <div>
          <ju-jia-content></ju-jia-content>
      </div>
</template>

<script>
import juJiaContent from "../components/juJia/juJiaContent";
export default {
    name: "juJia",
    components: {juJiaContent}
}
</script>

<style scoped>
    div{
        flex: 1;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
