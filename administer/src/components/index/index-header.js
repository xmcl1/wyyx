import React,{Component} from "react"

export default class IndexHeader extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let canvas1 = this.refs.canvas_top;
        let ctx=canvas1.getContext("2d");
        ctx.beginPath()
        ctx.moveTo(0,35);
        ctx.lineTo(15,0);
        ctx.lineTo(canvas1.width-15,0);
        ctx.lineTo(canvas1.width,35);
        ctx.closePath();
        ctx.fillStyle="#1b1a28";
        ctx.fill();
        ctx.strokeStyle="transparent";
        ctx.stroke();
    }
    render(){
        return (
            <header ref="hea">
                <div className="header_left">
                    <span>2018-3-16</span>
                    <span>11:46:42</span>
                    <span>星期天</span>
                </div>
                <div className="header_con">
                    <canvas ref={"canvas_top"} id="canvas_top" width="514" height="35"></canvas>
                    <div>
                        <span>在线用户&ensp;13254</span>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <span>商品数量&ensp;13254</span>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_right_con">
                        <span>温度：58%</span>
                        <span>PM2.5:125</span>
                        <span>天气：晴</span>
                        <span>27℃</span>
                    </div>
                </div>
            </header>
        )
     }
  }