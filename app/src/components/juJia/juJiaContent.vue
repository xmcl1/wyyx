<template>
    <div class="juJia1">
        <swiper class="slideImg" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(val,index) in result.lunbo" :key="index"><img :src="val"/></swiper-slide>
        </swiper>
        <div class="sort">
            <div class="sortOne" v-for="(val,index) in result.classify" :key="index">
                <div class="imgBox1">
                    <img :src="val.img"/>
                </div>
                <p>{{val.discription}}</p>
            </div>
        </div>
        <div class="filter">
            <span>综合</span>
            <span>
                <span class="spanWord">价格</span>
                <span class="icons">
                    <i class="iconfont icon-shang"></i>
                    <i class="iconfont icon-xia"></i>
                </span>
            </span>
            <span>
                <span class="spanWord">上新</span>
                <span class="icons">
                    <i class="iconfont icon-shang"></i>
                    <i class="iconfont icon-xia"></i>
                </span>
            </span>
            <span>
                筛选
                <i class="iconfont icon-shaixuan"></i>
            </span>
        </div>
        <div class="chuangPinJianTao" v-for="(val,index) in result.allSort" :key="index">
            <h3>{{val.title}}</h3>
            <p>{{val.discription}}</p>
            <div class="chuangPinJianTaoCon">
                <div class="productOne" v-for="(val2,index) in val.products" :key="index">
                    <div class="top">
                        <div class="imgBox">
                            <img :src="val2.img[0]"/>
                        </div>
                        <p>{{val2.disc}}</p>
                    </div>
                    <div class="bottom">
                        <div class="spanBoxOuter">
                            <span class="spanBox"  v-for="(val3,key,index) in val2.status" :key="index">
                                  <span class="xinPin" v-if='key=="xinPin"'>{{val3}}</span>
                                  <span class="tuiJian" v-if='key=="tuiJian"'>{{val3}}</span>
                                  <span class="manZeng" v-if='key=="manZeng"'>{{val3}}</span>
                                  <span class="renXuan" v-if='key=="renXuan"'>{{val3}}</span>
                                  <span class="teHui" v-if='key=="teHui"'>{{val3}}</span>
                                  <span class="manZhe" v-if='key=="manZhe"'>{{val3}}</span>
                                  <span class="manEJian" v-if='key=="manEJian"'>{{val3}}</span>
                                  <span class="manJJian" v-if='key=="manJJian"'>{{val3}}</span>
                                  <span class="manEZe" v-if='key=="manEZe"'>{{val3}}</span>
                                  <span class="baoPin" v-if='key=="baoPin"'>{{val3}}</span>
                            </span>
                        </div>
                        <p>{{val2.name}}</p>
                        <div class="priceBox">
                            ￥<span>{{val2.price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { juJiaServer1 } from "../../apis/wyyxServer";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: "jujiaContent",
  components:{
    swiper,
    swiperSlide
  },
  data() {
    return {
      result: [],
      swiperOption: {
        autoplay: true,
        // loop: true
      },
    };
  },
  methods: {
    foucs() {
      juJiaServer1.aaa(data => {
        this.result = data;
      });
    }
  },
  mounted() {
    this.foucs();
  }
};
</script>

<style scoped>
@import url(../../assets/icon/font/iconfont.css);
.slideImg img{
    width:100%;
}
.sort{
  width:100%;
  font-size:.1rem;
  display: flex;
  flex-wrap: wrap;
  text-align:center;
  padding:.12rem 0;
  color:#444444;
  border-bottom:.09rem solid #f4f4f4;
}
.sortOne{
  width:20%;
  margin-bottom:.17rem;
}
.imgBox1{
  width:.5rem;
  height:.5rem;
  margin:auto;
  margin-bottom:.02rem;
}
.imgBox1 img{
  width:100%;
  height:100%;
}
.filter{
  width:100%;
  height:.34rem;
  border-bottom:1px solid #f2f2f2;
  font-size:.13rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.filter .spanWord{
  line-height: .34rem;
}
.filter i{
  color:#cfcfcf;
}
.filter span{
  display: flex;
}
.filter .icons{
  flex-direction: column;
  justify-content: center;
}
.filter .icons>i{
  position: relative;
  font-size: 0.13rem;
}
.filter .icons>i:nth-of-type(1){
  top:.05rem;
}
.filter .icons>i:nth-of-type(2){
  bottom:.02rem;
}
.filter>span:first-child{
  color:#a72224;
}
.chuangPinJianTao{
  overflow: hidden;
  border-bottom:.09rem solid #f4f4f4;
}
.chuangPinJianTao>h3{
  font-size:.13rem;
  color:#3e3e3e;
  text-align:center;
  line-height: .22rem;
  margin-top:.11rem;
}
.chuangPinJianTao>p{
  font-size:.1rem;
  color:#949494;
  text-align:center;
  line-height: .19rem;
  margin-bottom:.12rem;
}
.chuangPinJianTaoCon{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  padding:0 .09rem;
  box-sizing:border-box;
}
.productOne{
  width:1.74rem;
}
.productOne:nth-of-type(2n+1){
  margin-right:.08rem;
}
.productOne .imgBox{
  background:#f4f4f4;
}
.productOne .imgBox img{
  width:100%;
  height:1.74rem;
}
.productOne>.top>p{
  font-size:.12rem;
  color:#a7966e;
  padding:.09rem 0;
  background:#f0ece1;
  text-indent: .05rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.productOne>.bottom .spanBoxOuter{
  display: flex;
}
.productOne>.bottom .spanBox{
    display: flex;
}
.productOne>.bottom .spanBox>span{
  font-size:.1rem;
  color:white;
  margin:.1rem .04rem 0;
  border-radius:.015rem;
  /* border:1px solid #beaa81; */
  padding:1px .06rem;
}
.spanBox>.xinPin{
  background:#cab690;
}
.spanBox>.tuiJian{
  background:#F28F2D;
}
.spanBox>.manZeng{
  background:#FA9766;
}
.spanBox>.renXuan{
  background:#E36844;
}
.spanBox>.teHui{
  background:#F8BC59;
}
.spanBox>.manZhe{
  background:rgb(236, 90, 22);
}
.spanBox>.manEJian{
  background:#EA3636;
}
.spanBox>.manJJian{
  background:#FF8000;
}
.spanBox>.manEZe{
  background:#F28F2D;
}
.spanBox>.baoPin{
  background:#EA366D;
}
.productOne>.bottom>p{
  font-size:.12rem;
  color:#393939;
  line-height:.25rem;
}
.productOne>.bottom>.priceBox{
  font-size:.12rem;
  color:#ac2e30;
  margin-bottom: .17rem;
}
</style>
