import React,{Component} from "react"
import "../assets/css/adminWord.css"
import "../assets/css/iconfont.css"
import AdminHeader from "../components/adminWord/adminWord-header"
import AdminContent from "../components/adminWord/adminWord-content"


export default class adminWord extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={ "adminwordcontent" }>
                <AdminHeader></AdminHeader>
                <AdminContent></AdminContent>
            </div>
        )
     }
  }