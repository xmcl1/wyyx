<template>
    <div>
        <div class="top">
            <img src="../../../assets/img/img1/recommend1.jpg" alt="">
            <div class="topBottom">
                <h3><span>严选原创设计系列</span><span>39元起</span></h3>
                <p>用设计点亮生活光</p>
            </div>
            <div class="topBottom2">
                <div class="left">
                    <div class="top">
                        <img src="../../../assets/img/img1/pic1.jpg" alt="">
                        <span>电器组：素素</span>
                    </div>
                    <h3>送爸妈不会错的中秋礼物。</h3>
                    <p>中秋节快到了，远在他乡的时候心中总是惦念着，好不容易放一次中秋假。</p>
                </div>
                <div class="right">
                    <img src="../../../assets/img/img1/pic5.jpg" alt="">
                </div>
            </div>
            <div class="topBottom2">
                <div class="left">
                    <div class="top">
                        <img src="../../../assets/img/img1/pic2.jpg" alt="">
                        <span>电器组：素素</span>
                    </div>
                    <h3>送爸妈不会错的中秋礼物。</h3>
                    <p>中秋节快到了，远在他乡的时候心中总是惦念着。</p>
                </div>
                <div class="right">
                    <img src="../../../assets/img/img1/pic6.jpg" alt="">
                </div>
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
}
.top>div{
    margin-bottom:.14rem;
}
.topBottom{
    width:100%;
    border:2px solid #f2f2f2;
    border-radius:.03rem;
}
.topBottom{
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
    padding:.14rem 0 .1rem 0;
    color:#595959;
}
.topBottom2>.left>p{
    line-height: .18rem;
    color:#9f9f9f;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
.topBottom2>.left>.top{
    display: unset;
}
.topBottom2>.left>.top>span{
    color:#9f9f9f;
}
.topBottom2>.left>.top>img{
    vertical-align: middle;
}
</style>