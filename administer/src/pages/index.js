import React,{Component} from "react"
import "../assets/css/index.css"
import IndexHeader from "../components/index/index-header"
import IndexContent from "../components/index/index-content"

export default class Index extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={ "indexContent" }>
                <IndexHeader></IndexHeader>
                <IndexContent></IndexContent>
            </div>
        )
     }
  }