<template>
  <div class="geren">
    <geren-header></geren-header>
    <geren-content></geren-content>
  </div>
</template>

<script>
    import GerenHeader from "../components/geren/gerenHeader";
    import GerenContent from "../components/geren/gerenContent";
    export default {
        name: "geren",
      components: {GerenContent, GerenHeader}
    }
</script>

<style scoped>
  .geren{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
</style>
