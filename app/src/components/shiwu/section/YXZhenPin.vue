<template>
        <div class="top">
            <img :src="YXZhenPin.YXZhenPinTop.photo" alt="">
            <div class="topBottom">
                <h3><span>{{YXZhenPin.YXZhenPinTop.h3}}</span></h3>
                <p>{{YXZhenPin.YXZhenPinTop.p}}</p>
            </div>
            <div class="topBottom2" v-for="(val,index) in YXZhenPin.YXZhenPinCon" :key="index">
                <div class="left">
                    <h3>{{val.h3}}</h3>
                    <p>{{val.p}}</p>
                </div>
                <div class="right">
                    <img :src="val.pic" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'',
    props:["YXZhenPin"],
    components:{
        
    }
}

</script>
<style scoped>
.top{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
.top>img{
    width:3.44rem;
    height:2rem;
}
.top>div{
    margin-bottom:.14rem;
}
.topBottom{
    width:100%;
    border:2px solid #f2f2f2;
    border-radius:.03rem;
    border-top:none;
    padding:0 0.1rem .31rem;
    box-sizing: border-box;
}
.topBottom>h3{
    margin:.16rem 0;
    color:#3d3d3d;
    font-size: .16rem;
}
.topBottom>p{
    font-size: .14rem;
    color:#878787;
}
.topBottom2{
    width:100%;
    border:2px solid #f2f2f2;
    border-radius:.03rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.topBottom2>.left{
    height:1.43rem;
    padding:.19rem .16rem 0 .1rem;
    box-sizing: border-box;
}
.topBottom2>.right>img{
    width:1.46rem;
    height:1.43rem;
    display: block;
}
.topBottom2>.left>h3{
    padding:.18rem 0 .1rem 0;
    color:#595959;
    font-size: .16rem;
    width:1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
}
.topBottom2>.left>p{
    line-height: .18rem;
    color:#9f9f9f;
    width:1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
}
</style>