<template>
    <div class="YXLookCon">
        <h3>严选LOOK</h3>
        <div class="picOne">
            <img src="../../../assets/img/img1/yx9.jpg" alt="">
        </div>
        <div class="bottom">
            <div class="top">
                <div>
                    <img src="../../../assets/img/img1/pic1.jpg" alt="">
                    <span>B****N</span>
                </div>
            </div>
            <p>很好用，质感很好。</p>
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
.YXLookCon{
    width:100%;
}
.YXLookCon>h3{
    text-align: center;
    color: #3d3d3d;
    padding: .22rem 0;
}
.YXLookCon>.picOne{
    width:100%;
    height:2.5rem;
}
.YXLookCon>.picOne>img{
    width:100%;
    height:100%;
}
.YXLookCon>.bottom>*{
    padding-left:.15rem;
}
.YXLookCon>.bottom img{
    vertical-align: middle;
    width:.25rem;
    height:.25rem;
}
.YXLookCon>.bottom span{
    vertical-align: middle;
}
.YXLookCon>.bottom>.top{
    margin:.12rem 0;
}
.YXLookCon>.bottom>p{
    line-height: .2rem;
    padding-bottom: .25rem;
    color: #9f9f9f;
}
</style>