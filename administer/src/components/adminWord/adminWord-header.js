import React,{Component} from "react"

export default class adminWordHeader extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="header">
                <ul className="new">
                    <a href="/index"><img height="55" src={ require("../../assets/img/login-admin.jpg") } alt=""/></a>
                </ul>
                <div className="rightInfo">
                    <a href="">超级管理员</a>
                    <div className="p">
                        <b>admin <i className="iconfont icon-xiala"></i></b>
                        <ul className="pos_ul2">
                            <li><a href="">个人信息</a></li>
                            <li><a href="">切换账号</a></li>
                            <li><a href="">退出</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
     }
  }