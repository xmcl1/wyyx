<template>
    <div>
        <div class="topCon">
            <div class="topBottom2"  v-for="(val,index) in shiWu.recommandForYou" :key='index'>
                <img :src="val.img" alt="">
                <div class="topBottom">
                    <h3><span>{{val.topBottom.h3.span1}}</span><span>{{val.topBottom.h3.price}}</span></h3>
                    <p>{{val.topBottom.p}}</p>
                </div>
                <div class="bottom3">
                    <div class="left">
                        <div class="top">
                            <img :src="val.topBottom2.photo" alt="">
                            <span>{{val.topBottom2.name}}</span>
                        </div>
                        <h3>{{val.topBottom2.h3}}</h3>
                        <p>{{val.topBottom2.p}}</p>
                    </div>
                    <div class="right">
                        <img :src="val.topBottom2.pic" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    data:()=>{
        return{

        }
    },
    components:{
    },
    props:["shiWu"]
}

</script>
<style scoped>
.topBottom2{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.topBottom2>img{
    width:3.44rem;
    height:2rem;
}
.bottom3{
    display: flex;
}
.topCon>img{
    width:3.45rem;
    height:2rem;
}
.topCon>div{
    margin-bottom:.14rem;
}
.topBottom{
    border:2px solid #f2f2f2;
    margin-bottom:.14rem;
    border-top:none;
    padding:0 0.1rem .31rem;
    box-sizing: border-box;
}
.topBottom>h3{
    margin:.16rem 0;
    color:#3d3d3d;
    font-size: .16rem;
    display: flex;
    justify-content: space-between;
}
.topBottom>p{
    font-size: .14rem;
    color:#878787;
}
.topBottom2>.topBottom{
    width:100%;
    border-radius:.03rem;
}
.bottom3{
    border:2px solid #f2f2f2;
}
.bottom3>.left{
    height:1.43rem;
    padding:.19rem .16rem 0 .1rem;
    box-sizing: border-box;
}
.bottom3>.right>img{
    width:1.46rem;
    height:1.43rem;
    display: block;
}
.bottom3>.left>h3{
    padding:.14rem 0 .1rem 0;
    color:#595959;
}
.bottom3>.left>p{
    line-height: .18rem;
    color:#9f9f9f;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
.bottom3>.left>.top{
    display: flex;
    flex-direction: row;
}
.bottom3>.left>.top>span{
    color:#9f9f9f;
}
.bottom3>.left>.top>img{
    vertical-align: middle;
    margin-right:.05rem;
}
</style>