<template>
  <div class="login-choose-box">
    <login-choose-header></login-choose-header>
    <login-choose-content></login-choose-content>
    <login-choosebot></login-choosebot>
  </div>
</template>

<script>
    import LoginChooseHeader from "../components/loginChoose/loginChooseHeader";
    import LoginChooseContent from "../components/loginChoose/loginChooseContent";
    import LoginChoosebot from "../components/loginChoose/loginChoosebot";
    export default {
        name: "loginChoose",
      components: {LoginChoosebot, LoginChooseContent, LoginChooseHeader}
    }
</script>

<style scoped>
  .login-choose-box{
    width: 100%;
    height: 100%;
    background: #f2f4f4;
  }
</style>
