<template>
    <div class="index" v-if="shangpin.length != 0 && zengpin.length != 0">
      <shoppcart-header></shoppcart-header>
      <div class="contents">
        <shoppcart-content  :shangpin="shangpin" :zengpin="zengpin"></shoppcart-content>
        <shoppcart-tuijian></shoppcart-tuijian>
       </div>
      <shoppcart-jiesuan></shoppcart-jiesuan>
    </div>
</template>

<script>
      import shoppcartHeader from '../components/shoppingCart/shoppcart-header';
      import shoppcartContent from '../components/shoppingCart/shoppcart-content';
      import shoppcartTuijian from '../components/shoppingCart/shoppcart-tuixi';
      import shoppcartJiesuan from '../components/shoppingCart/shoppcart-jiesuan';
    export default {
        name: "shoppingCart" ,
        components:{
          shoppcartHeader,
          shoppcartContent,
          shoppcartTuijian,
          shoppcartJiesuan
        },
      data(){
        return{
          "shangpin":[
            { "id":"1001","xuanzhong":false,"imgs":"/static/img/shoppcart-shangpin-gouwuche.02698d4.png","mingcheng":"花鸟集四件套","canshu":"蓝色（床单款）;1.5m","jiage":339.00,"count":1 }
            ],
          "zengpin":[
            { "id":"1001","mingcheng":"圆形护颈苦荞麦枕","imgs":"/static/img/shoppcart-zengpine.02698d4.png","canshu":"圆形" }
          ]
        }
      }
    }
</script>

<style scoped>
.index {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.contents{
  height: 100%;
  overflow-y: scroll;
}

</style>
