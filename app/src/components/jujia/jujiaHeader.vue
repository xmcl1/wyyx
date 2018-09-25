<template>
 <div class="jujia-header">
     <!-- 轮播图 -->
    <div class="jujia-banner">

    </div>
    <!-- F10 -->
    <div class="F10-box">
        <a href="#">
            <img src="img/jjf10-1.jpg">
            <span>床品件套</span>
        </a>
        <a href="#">
            <img src="img/jjf10-2.jpg">
            <span>被枕</span>
        </a>
        <a href="#">
            <img src="img/jjf10-3.jpg">
            <span>家具</span>
        </a>
        <a href="#">
            <img src="img/jjf10-4.jpg">
            <span>灯具</span>
        </a>
        <a href="#">
            <img src="img/jjf10-5.jpg">
            <span>布艺软装</span>
        </a>
        <a href="#">
            <img src="img/jjf10-6.jpg">
            <span>家饰</span>
        </a>
        <a href="#">
            <img src="img/jjf10-7.jpg">
            <span>收纳</span>
        </a>
        <a href="#">
            <img src="img/jjf10-8.jpg">
            <span>旅行用品</span>
        </a>
        <a href="#">
            <img src="img/jjf10-9.jpg">
            <span>晾晒除味</span>
        </a>
        <a href="#">
            <img src="img/jjf10-10.jpg">
            <span>全部</span>
        </a>
    </div>
    <!-- 空盒子 -->
    <div class="null-box"></div>
 </div>
</template>

<script>
export default {

}

</script>
<style>
    /* 轮播图 */
.jujia-banner{
    width: 100%;
    height:1.84rem;
    background: pink;
}


/* F10 */
.F10-box{
    width: 100%;
    /* height: 1.5rem; */
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
}
.F10-box a{
    display: block;
    width:20%;
    height: 0.8rem;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.1rem;
}
.F10-box img{
    width: 0.5rem;
    height: 0.4rem;
}
.F10-box span{
    color: #333333;
    font-size: 0.14rem;
    /* margin-top: -0.15rem; */
}
/* 空盒子 */
.null-box {
    width: 100%;
    height: 0.1rem;
    background: #f4f4f4;
    float: left;
}

</style>