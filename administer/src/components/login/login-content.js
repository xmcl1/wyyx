import React,{Component} from "react"

export default class LoginContent extends Component{
    constructor(){
        super()
    }
    login(){
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let dataLogin =  JSON.stringify({"username":username ,"password": password})
        fetch("http://localhost:3000/admin/tar", {
            method:'post',//改成post
            headers: {//请求头
                 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:  "username:1"
        }).then(response=>response.json())
            .then((data) => {
                console.log(data)
            })
    }
    render(){
        return (
            <div>
                <div className="addh">
                    <span></span>
                </div>
                <form action="javascript:;" method="#">
                    <p><input name="username" ref={"username"} type="text" placeholder="请输入账号"/></p>
                    <p><input name="password"  ref={"password"} type="password" placeholder="请输入密码"/></p>
                    <p><input type="text" placeholder="请输入验证码"/><span><img src={ require("../../assets/img/CalculateValidateCode(0).jpg") } alt=""/></span></p>
                    <p><span onClick={()=>this.login()}>登&nbsp;录</span></p>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                </form>
                <div className="dong dong1">
                    <h2></h2>
                </div>
                <div className="dong dong2">
                    <div className="dong dg02">
                        <img src={ require("../../assets/img/gif-13-1.png") } alt=""/>
                        <img src={ require("../../assets/img/gif-13-2.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-3.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-4.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-5.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-6.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-7.png")} alt=""/>
                        <img src={ require("../../assets/img/gif-13-8.png")} alt=""/>
                    </div>
                    <div className="dong dg002">
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                    </div>
                </div>
            </div>
        )
     }
  }