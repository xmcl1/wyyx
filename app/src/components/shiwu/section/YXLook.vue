<template>
    <div class="YXLookCon">
        <h3>{{YXLook.title}}</h3>
        <div class="picOne">
            <img :src="YXLook.pic" alt="">
        </div>
        <div class="bottom">
            <div class="top">
                <img :src="YXLook.photo" alt="">
                <span>{{YXLook.span}}</span>
            </div>
            <p>{{YXLook.p}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    props:["YXLook"],
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
    display: flex;
    align-items: center;
}
.YXLookCon>.bottom>.top>img{
    margin-right:.05rem;
}
.YXLookCon>.bottom>p{
    line-height: .2rem;
    padding-bottom: .25rem;
    color: #9f9f9f;
}
</style>