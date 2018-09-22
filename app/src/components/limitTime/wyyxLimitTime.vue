<template>
  <div class="time">
    <p class="line"><img :src="ts.line"></p>
    <a class="timeP">
      {{ ts.title }}
      <a href="" v-if="ts.flag == true">
        <span>{{ hour | num}}</span><b> {{ts.spanTxt.b}}</b>
        <span>{{ minutes | num}}</span><b> {{ts.spanTxt.b}}</b>
        <span>{{ seconds | num}}</span>
      </a>
    </a>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
      name: "wyyxLimitTime",
      props: ["ts"],
      data(){
        return{
          hour:this.ts.spanTxt.hour,
          minutes:this.ts.spanTxt.minutes,
          seconds:this.ts.spanTxt.seconds,
          myTimer:null
        }
      },
      methods:{
        downTime(){
          if (this.myTimer == null){
            this.myTimer = setInterval(this.calculateTime,1000)
          }
        },
        calculateTime(){
          this.seconds--;
          if (this.seconds<0){
            if(this.minutes<=0){
              if(this.hour<=0){
                clearInterval(this.myTimer);
                this.mytimer = null;
                return;
              }else{
                this.hour--;
                this.minutes=59;
                this.seconds = 59;

              }
            }else{
              this.minutes--;
              this.seconds = 59;
            }
          }
        },

        // num(n){
        //   return n < 10 ? '0' + n : '' + n
        // }
      },
      //过滤器
      filters:{
        num(data){
          return data < 10 ? '0' + data :data
        }
      },
      mounted(){
        this.calculateTime();
        this.downTime();
      },
      // watch: {
      //   hours: {
      //     handler (newVal) {
      //       this.num(newVal)
      //     }
      //   },
      //   second: {
      //     handler (newVal) {
      //       this.num(newVal)
      //     }
      //   },
      //   minute: {
      //     handler (newVal) {
      //       this.num(newVal)
      //     }
      //   }
      // },
      // computed: {
      //   hours: function () {
      //     return this.num(this.hour)
      //   },
      //   second: function () {
      //     return this.num(this.seconds)
      //   },
      //   minute: function () {
      //     return this.num(this.minutes)
      //   }
      // }
    }
</script>

<style scoped>
  .detailBox .time{
    background: #ffffff;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem;
    text-align: center;
    position: relative;
    padding: 0 0.13rem;
  }
  .time .timeP{
    font-size: 0.14rem;
    padding: 0 0.15rem;
    background: #ffffff;
    z-index: 10;
    position: relative;
  }
  .time span{
    font-size: 0.18rem;
    color: #292929;
    font-weight: bold;
  }
  .time span:first-child{
    margin-left: 0.1rem;
  }
  .time b{
    font-size: 0.18rem;
    color: #292929;
  }
  .time .line{
    width: 3.45rem;
    height: 2px;
    position: absolute;
    left: 0.15rem;
    top: 0.25rem;
    z-index: 0;
  }
  .time .line img{
    height: 100%;
  }
</style>
