<template>
    <div class="index" v-if="xiangqings">
      <div class="contents" @scroll="gundong($event)">
        <product-header :xiangqings="xiangqings"></product-header>
        <product-guige :xiangqings="xiangqings"></product-guige>
        <product-pinglun :xiangqings="xiangqings"></product-pinglun>
        <product-tuijian :xiangqings="xiangqings"></product-tuijian>
      </div>
      <product-bottom-menu :xiangqings="xiangqings"></product-bottom-menu>
    </div>
</template>

<script>
  import productHeader from "../components/productGoods/product-header"
  import productGuige from "../components/productGoods/product-guige"
  import productPinglun from "../components/productGoods/product-pinglun"
  import productTuijian from "../components/productGoods/product-tuijian"
  import productBottomMenu from "../components/productGoods/product-bottom-menu"
    export default {
        data(){
          return{
            xiangqings:null
          }
        },
        methods:{
          gundong(evt){
            if(evt.target.scrollTop > 0){
              $(".target-xi").css({"position":"fixed","backgroundColor":"rgba(0,0,0,.4)"})
            }else{
              $(".target-xi").css({"position":"absolute","backgroundColor":"rgba(0,0,0,0)"})
            }
          }
        },
        name: "productGoods",
        components:{
          productHeader,
          productGuige,
          productPinglun,
          productTuijian,
          productBottomMenu
        },
        created(){
          let tepParams = this.$route.params;
          let urls = `fenleimenu=${tepParams.fenleimenu}&xiaofenlei=${tepParams.xiaofenlei}&shangpinId=${tepParams.shangpinId}`;
          fetch(`http://localhost:3000/api/productgoods?${urls}`).then(response => {
            response.json().then(data => {
              this.xiangqings = data.products;
            })
          })
        },

    }
</script>

<style scoped>
  *{
    font-size: 0.14rem;
  }
  .contents{
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
  }

  .index{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
