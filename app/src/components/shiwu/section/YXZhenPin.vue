<template>
        <div class="top">
            <img src="../../../assets/img/img1/recommend1.jpg" alt="">
            <div class="topBottom">
                <h3><span>严选原创设计系列</span></h3>
                <p>用设计点亮生活光</p>
            </div>
            <div class="topBottom2">
                <div class="left">
                    <h3>送爸妈不会错的中秋礼物。</h3>
                    <p>中秋节快到了，远在他乡的时候心中总是惦念着，好不容易放一次中秋假。</p>
                </div>
                <div class="right">
                    <img src="../../../assets/img/img1/pic5.jpg" alt="">
                </div>
            </div>
            <div class="topBottom2">
                <div class="left">
                    <h3>送爸妈不会错的中秋礼物。</h3>
                    <p>中秋节快到了，远在他乡的时候心中总是惦念着。</p>
                </div>
                <div class="right">
                    <img src="../../../assets/img/img1/pic6.jpg" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'',
    components:{
        
    }
}

</script>
<style scoped>
.top{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 .15rem;
    box-sizing: border-box;
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