<template>
  <div class="phone-register-bigbox">
      <phone-register-header></phone-register-header>
      <phone-register-content></phone-register-content>
  </div>
</template>

<script>
    import PhoneRegisterHeader from "../components/phoneRegister/phoneRegisterHeader";
    import PhoneRegisterContent from "../components/phoneRegister/phoneRegisterContent";
    export default {
        name: "phoneRegister",
      components: {PhoneRegisterContent, PhoneRegisterHeader}
    }
</script>

<style scoped>

</style>
