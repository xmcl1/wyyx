<template>
  <div class="product">
      <div class="proTop">
          <img :src="pros.pic">
          <p>{{pros.topP}}</p>
      </div>
      <div class="proBottom">
          <p>{{pros.botP}}</p>
          <p>{{pros.price}}</p>
      </div>
  </div>
</template>

<script>
    export default {
        name: "wyyxNewProRecBoxProsT",
        props:["pros"]
    }
</script>

<style scoped>
  .recBox2 .product{
    width: 48.5%;
    margin-top: 0.15rem;
    box-sizing: border-box;
  }
  .recBox2 .product:last-child, .recBox2 .product:nth-last-child(2){
    margin-bottom: 0.15rem;
  }
  .recBox2 .product:nth-child(2n+1){
    margin-right: 1.5%;
  }
  .recBox2 .product:nth-child(2n){
    margin-left: 1.5%;
  }
  .recBox2 .product .proTop{
    background: #f4f4f4;
  }
  .recBox2 .product .proTop p{
    background: #f0ece1;
    height: 0.35rem;
    line-height: 0.35rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a49983;
  }
  .recBox2 .product .proBottom p:first-child{
    line-height: 0.32rem;
    letter-spacing: 1px;
    padding: 0 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recBox2 .product .proBottom p:last-child{
    color: #b8303a;
    font-weight: bold;
  }

</style>
