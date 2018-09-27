import React,{Component} from "react"
import echarts from "echarts"

export default class IndexContent extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this._initUID()
        this._initEcharts();
    }
    _initUID(){

    }
    _initEcharts(){
        let myChart1=echarts.init(document.querySelector(".middle_left"));
        let option1 = {
            title:{
                text:"商品平均价格",
                x:"10",
                y:"8",
                textStyle:{color:"#68d1cc",fontSize:"15"},
                subtext:"Average market price of commodities",
                subtextStyle:{
                    color:"#68d1cc",
                    fontSize:"12"
                }
            },
            grid:{
                y2:"22px",
                x2:"8px"
            },
            xAxis: {
                axisPointer:{
                    show:true,
                    type:"shadow"
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24'],
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            yAxis: {
                splitLine:{show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            tooltip:{
                triggle:"axis"
            },
            series: [{
                data: [345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345,345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345],
                type: 'line',
                areaStyle: {color:"#282735"},
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#4d919c',
                            width:1,
                            type:"dashed"
                        }
                    }
                }
            }]
        };
        myChart1.setOption(option1);

        let myChart2=echarts.init(document.querySelector(".middle_cen"));
        let option2 = {
            color:["#DBEDF8","#D9B63A","#2E2AA4","#9F2E61","#4D670C","#BF675F","#1F814A","#357F88","#673509","#310937","#ff0","#F7393C"],
            title:{
                text:"商品分类",
                x:"10",
                y:"8",
                textStyle:{color:"#68d1cc",fontSize:"15"},
                subtext:"Goods category ",
                subtextStyle:{
                    color:"#68d1cc",
                    fontSize:"12"
                }
            },
            legend: {
                selectedMode: true,  //取消图例上的点击事件
                orient: 'vertical',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                align:"auto",
                width: 5,   //图例组件的宽度,默认自适应
                icon : "circle",
                x: '50%',   //图例显示在右边
                y: '40%',   //图例在垂直方向上面显示居中
                data: ['推荐',"新品","福利社","限购",'居家', '鞋包配饰',"服装","电器","洗护","饮食","餐厨","婴童","文体"],
                textStyle: {    //图例文字的样式
                    color: '#fffeff',  //文字颜色
                    fontSize: 12    //文字大小
                },
                "y":"52px"
            },
            series: [
                {
                    name:'商品分类',
                    type:'pie',
                    radius: ['40%', '60%'],
                    center:["20%","60%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'推荐'},
                        {value:310, name:'新品'},
                        {value:234, name:'限购'},
                        {value:234, name:'居家'},
                        {value:234, name:'鞋包配饰'},
                        {value:234, name:'服装'},
                        {value:234, name:'电器'},
                        {value:234, name:'洗护'},
                        {value:234, name:'饮食'},
                        {value:234, name:'餐厨'},
                        {value:234, name:'婴童'},
                        {value:234, name:'文体'}
                    ],
                }
            ]
        };
        myChart2.setOption(option2);

        let myChart3=echarts.init(document.querySelector(".middle_right"));
        let option3 = {
            title:{
                text:"购物车数量",
                x:"10",
                y:"8",
                textStyle:{color:"#68d1cc",fontSize:"15"},
                subtext:"Quantitative restrictions on shopping cart",
                subtextStyle:{
                    color:"#68d1cc",
                    fontSize:"12"
                }
            },
            grid:{
                x:"40px",
                y2:"20px",
                x2:"15px"
            },
            xAxis: {
                axisPointer:{
                    show:true,
                    type:"shadow"
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24'],
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            yAxis: {
                splitLine:{show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            tooltip:{
                triggle:"axis"
            },
            series: [{
                data: [345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345,345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345],
                type: 'line',
                areaStyle: {color:"#282735"},
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#4d919c',
                            width:1,
                            type:"dashed"
                        }
                    }
                }
            }]
        };
        myChart3.setOption(option3);

        let myChart4=echarts.init(document.querySelector(".bottom>.left"));
        let option4 = {
            title:[{
                text:"在线用户",
                x:"10",
                y:"8",
                textStyle:{color:"#68d1cc",fontSize:"15"},
                subtext:["Active User"],
                subtextStyle:{
                    color:"#68d1cc",
                    fontSize:"12"
                }
            },{
                text:"最大在线用户人数",
                // link:"http://www.baidu.com",
                // x:"60%",
                x2:"65",
                y:"8",
                textStyle:{color:"#b5b3be",fontSize:"10"},
                subtext:"2015年10月30日",
                subtextStyle:{
                    color:"#b5b3be",
                    fontSize:"8",
                    lineHeight:"1",
                }
            },{
                text:"47,678",
                x2:"0",
                y:"15",
                textStyle:{color:"#e83656",fontSize:"20"},
            }  ],
            grid:{
                x:"40px",
                y2:"30px",
                x2:"15px"
            },
            xAxis: {
                axisPointer:{
                    show:true,
                    type:"shadow"
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24'],
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            yAxis: {
                splitLine:{show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            tooltip:{
                triggle:"axis"
            },
            series: [{
                data: [345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345,345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345],
                type: 'line',
                areaStyle: {color:"#282735"},
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#4d919c',
                            width:1,
                            type:"dashed"
                        }
                    }
                }
            }]
        };
        myChart4.setOption(option4);

        let myChart5=echarts.init(document.querySelector(".bottom>.right"));
        let option5 = {
            title:[{
                text:"商品数量",
                x:"10",
                y:"8",
                textStyle:{color:"#68d1cc",fontSize:"15"},
                subtext:["Quantity of Goods"],
                subtextStyle:{
                    color:"#68d1cc",
                    fontSize:"12"
                }
            },{
                text:"最大商品数量",
                // link:"http://www.baidu.com",
                // x:"60%",
                x2:"65",
                // padding:[10,10,10,10],
                y:"8",
                textStyle:{color:"#b5b3be",fontSize:"10"},
                subtext:"2015年10月30日",
                subtextStyle:{
                    color:"#b5b3be",
                    fontSize:"8",
                    lineHeight:"1",
                }
            },{
                text:"47,678",
                x2:"0",
                y:"15",
                textStyle:{color:"#e83656",fontSize:"20"},
            }  ],
            grid:{
                x:"40px",
                y2:"30px",
                x2:"15px"
            },
            xAxis: {
                axisPointer:{
                    show:true,
                    type:"shadow"
                },
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24'],
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            yAxis: {
                splitLine:{show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#b7b6be'
                    }
                }
            },
            tooltip:{
                triggle:"axis"
            },
            series: [{
                data: [345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345,345, 430, 400,410, 350, 360,345, 430, 400,410, 350, 360,345],
                type: 'line',
                areaStyle: {color:"#282735"},
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#4d919c',
                            width:1,
                            type:"dashed"
                        }
                    }
                }
            }]
        };
        myChart5.setOption(option5);

        // 跟随浏览器窗口自适应大小
        window.onresize = function () {
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
            myChart5.resize();
        }
    }
    test(){

    }
    render(){
        return (
            <section>
                <div className="top">
                    <span onClick={ this.test }>管理员&nbsp;:&nbsp;&nbsp;&nbsp;admin</span>
                    <span><a href="#">数据管理</a></span>
                </div>
                <div className="middle">
                    <div className="middle_left" ref={"middle_left"}>

                    </div>
                    <div className="middle_cen" ref={ "middle_cen" }>

                    </div>
                    <div className="middle_right" ref={ "middle_right" }>

                    </div>
                </div>
                <div className="bottom">
                    <div className="left" ref={ "bottom_left" }></div>
                    <div className="right" ref={ "bottom_right" }></div>
                </div>
            </section>
        )
     }
  }