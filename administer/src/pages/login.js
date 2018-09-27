import React,{Component} from "react"
import "../assets/css/login.css"

import LoginHeader from "../components/login/login-header"
import LoginContent from "../components/login/login-content"

export default class Login extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={ "cotentLogin" }>
                <LoginHeader></LoginHeader>
                <LoginContent></LoginContent>
            </div>
        )
     }
  }