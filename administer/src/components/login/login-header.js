import React,{Component} from "react"

export default class LoginHeader extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="headertitle">
                <p><img className="weiyi" src={ require("../../assets/img/gif-4.png")} alt=""/>
                    <img className="weiyi" src={ require("../../assets/img/gif-5.png")} alt=""/>
                    <img className="zong" src={ require("../../assets/img/gif-5-1.png")} alt=""/></p>
                <p><span>网易严选大数据服务平台</span></p>
            </div>
        )
     }
  }