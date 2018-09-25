<template>
  <div class="phone-login-box">
    <phone-login-header></phone-login-header>
    <phone-login-content></phone-login-content>
  </div>
</template>

<script>
    import PhoneLoginHeader from "../components/phoneLogin/phoneLoginHeader";
    import PhoneLoginContent from "../components/phoneLogin/phoneLoginContent";
    export default {
        name: "phonelogin",
      components: {PhoneLoginContent, PhoneLoginHeader}
    }
</script>

<style scoped>
  .phone-login-box{
    width: 100%;
    height: 100%;
  }
</style>
