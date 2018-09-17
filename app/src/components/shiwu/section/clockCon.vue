<template>
    <div>
        <div class="con1">
            <div class="top">
                <span></span>
                <span>今日话题</span>
                <span></span>
            </div>
            <h1>你有哪些租房经历</h1>
            <p>聊聊你用过的租房神器</p>
            <div class="bottom">
                <div class="imgs">
                    <img src="../../../assets/img/img1/pic1.jpg" alt="">
                    <img src="../../../assets/img/img1/pic2.jpg" alt="">
                    <img src="../../../assets/img/img1/pic3.jpg" alt="">
                    <img src="../../../assets/img/img1/pic4.jpg" alt="">
                </div>
                <p><span>1167</span>人参与话题</p>
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
.con1{
    width:2.93rem;
    height:1.91rem;
    background:#fbfbfb;
    border:.06rem solid #e8e8e8;
    margin:0 auto;
}
.con1>.top{
    display: inline-block;
    position: relative;
    line-height: .4rem;
    margin-bottom:.07rem;
    color:#161616;
}
.con1>h1{
    line-height: .31rem;
    color:#161616;
    font-size:.18rem;
}
.con1>p{
    line-height: .31rem;
    color:#323232;
    font-size:.14rem;
    margin-bottom:.22rem;
}
.con1>.top>span:nth-of-type(1){
    width:.14rem;
    height:.01rem;
    background:#696969;
    position: absolute;
    left:-.18rem;
    top:50%;
}
.con1>.top>span:nth-of-type(3){
    width:.14rem;
    height:.01rem;
    background:#696969;
    position: absolute;
    right:-.18rem;
    top:50%;
}
.con1>.bottom{
    display: flex;
    justify-content: center;
}
.con1>.bottom>.imgs>img{
    border-radius: 50%;
    width:.25rem;
    height:.25rem;
    position: relative;
    left:0;
    z-index: 100;
}
.con1>.bottom>.imgs>img:nth-of-type(2){
    left:-.1rem;
    z-index: 99;
}
.con1>.bottom>.imgs>img:nth-of-type(3){
    left:-.2rem;
    z-index: 98;
}
.con1>.bottom>.imgs>img:nth-of-type(4){
    left:-.3rem;
    z-index: 97;
}
.con1>.bottom>p{
    line-height: .25rem;
    margin-left:-.2rem;
    color:#a7a7a7;
}
</style>