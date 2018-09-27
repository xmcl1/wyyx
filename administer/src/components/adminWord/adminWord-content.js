import React,{Component} from "react"
import {  DateRangePicker,Table  } from "element-react"

import "element-theme-default"

export default class adminWordHeader extends Component{
    constructor(){
        super();
        this.state = {
            timeOne: null, timeTwo: null,
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "ID",
                    prop: "id",
                    width: 150
                },
                {
                    label: "用户名称",
                    prop: "username",
                    width: 160
                },
                {
                    label: "用户密码",
                    prop: "userpass",
                    width: 160
                },
                {
                    label: "申请时间",
                    prop: "addTime"
                }
            ],
            data: [{
                id: 1001,
                username: 'admin',
                userpass: '123',
                addTime: '2018-09-07'
            }]
        }
    }
    render(){
        const {timeOne, timeTwo} = this.state
        return (
            <div className="main">
                <div className="main_con">
                    <div className="left_tab">
                        <ul className="firstUL">
                            <li className="firstLI">
                                <a href="#"><i className="i1"></i>用户管理<i className="iconfont icon-xiala"></i></a>
                            </li>
                            <li className="firstLI">
                                <a href="#"><i className="i1"></i>商品管理<i className="iconfont icon-xiala"></i></a>
                            </li>
                            <li className="firstLI">
                                <a href="#"><i className="i1"></i>购物车<i className="iconfont icon-xiala"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className="right_content">
                        <div className="box">
                            <div className="right_tab">
                                <a href="javascript:;"><img src={ require("../../assets/img/icon4.png") } alt=""/>用户管理</a>
                            </div>
                            <div className="right_detail">
                                <div className="ts">
                                    <p><span>日期范围 :</span><DateRangePicker
                                        value={timeTwo}
                                        isShowTime={true}
                                        placeholder="选择日期范围"
                                        align="right"
                                        ref={e=>this.daterangepicker2 = e}
                                        onChange={date=>{
                                            console.debug('DateRangePicker2 changed: ', date)
                                            this.setState({timeTwo: date})
                                        }}
                                        shortcuts={[{
                                            text: '最近一周',
                                            onClick: ()=> {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

                                                this.setState({timeTwo: [start, end]})
                                                this.daterangepicker2.togglePickerVisible()
                                            }
                                        }, {
                                            text: '最近一个月',
                                            onClick: ()=> {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);

                                                this.setState({timeTwo: [start, end]})
                                                this.daterangepicker2.togglePickerVisible()
                                            }
                                        }, {
                                            text: '最近三个月',
                                            onClick: ()=> {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                                this.setState({timeTwo: [start, end]})
                                                this.daterangepicker2.togglePickerVisible()
                                            }
                                        }]}
                                    /></p>
                                    <p>
                                        <input type="text" placeholder="ID、用户名称、用户密码、申请时间" />
                                        <input type="submit" value="搜用户" />
                                    </p>
                                </div>

                                <div className="operation">
                                    <a href=""><i className="iconfont icon-shanchu"></i>批量删除</a>
                                    <a href=""><i className="iconfont icon-jiahao"></i>添加用户</a>
                                </div>

                                <div className="data">

                                    <Table
                                        style={{width: '100%',height:"100%"}}
                                        columns={this.state.columns}
                                        data={this.state.data}
                                        border={true}
                                        height={250}
                                        onSelectChange={(selection) => { console.log(selection) }}
                                        onSelectAll={(selection) => { console.log(selection) }}
                                    />

                                    <div className="tab_foot">
                                        <p>显示 1 到 5 ，共 5 条</p>
                                        <p>
                                            <a href="">上一页</a>
                                            <span>
										<a href="" className="on">1</a>
									</span>
                                            <a href="">下一页</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
     }
  }