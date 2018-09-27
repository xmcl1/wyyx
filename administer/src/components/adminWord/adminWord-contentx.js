import React,{Component} from "react"

export default class adminWordHeader extends Component{
    constructor(){
        super();
    }
    render(){
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
                        <div className="box" />
                            <div className="right_tab">
                                <a href="">首页</a>
                            </div>
                            <div className="right_detail">
                                <div className="ts">
                                    <p>日期范围 : <input type="date" value="" /> - <input type="date" value="" /></p>
                                    <p>
                                        <input type="text" placeholder="输入会员名称、电话、邮箱"    />
                                            <input type="button" value="搜用户" />
                                    </p>
                                </div>

                                <div className="operation">
                                    <a href=""><i className="iconfont icon-shanchu"></i>批量删除</a>
                                    <a href=""><i className="iconfont icon-jiahao"></i>添加用户</a>
                                    <span>共有数据 : <b>88</b> 条</span>
                                </div>

                                <div className="data">
                                    <div className="show">
                                        <p className="left">
                                            显示
                                            <select>
                                                <option>10</option>
                                                <option>20</option>
                                                <option>30</option>
                                                <option>40</option>
                                                <option>50</option>
                                            </select>
                                            条
                                        </p>
                                        <div className="right">
                                            从当前数据中检索:
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <table className="tab" cellPadding="0" cellSpacing="0">
                                        <tr>
                                            <th width="25"><input type="checkbox" /></th>
                                            <th width="80">ID</th>
                                            <th width="100">用户名</th>
                                            <th width="40">性别</th>
                                            <th width="90">手机</th>
                                            <th width="150">邮箱</th>
                                            <th width="170">地址</th>
                                            <th width="130">加入时间</th>
                                            <th width="70">状态</th>
                                            <th width="100">操作</th>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>1</td>
                                            <td>张三</td>
                                            <td>男</td>
                                            <td>13000000000</td>
                                            <td>admin@mail.com</td>
                                            <td>北京市 海淀区</td>
                                            <td>2014-6-11 11:11:42</td>
                                            <td><span>已启用</span></td>
                                            <td>
                                                <a href=""><i className="iconfont icon-bianji2"></i></a>
                                                <a href=""><i className="iconfont icon-yuechi"></i></a>
                                                <a href=""><i className="iconfont icon-shanchu"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>2</td>
                                            <td>张三</td>
                                            <td>男</td>
                                            <td>13000000000</td>
                                            <td>admin@mail.com</td>
                                            <td>北京市 海淀区</td>
                                            <td>2014-6-11 11:11:42</td>
                                            <td><span>已启用</span></td>
                                            <td>
                                                <a href=""><i className="iconfont icon-bianji2"></i></a>
                                                <a href=""><i className="iconfont icon-yuechi"></i></a>
                                                <a href=""><i className="iconfont icon-shanchu"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>3</td>
                                            <td>张三</td>
                                            <td>男</td>
                                            <td>13000000000</td>
                                            <td>admin@mail.com</td>
                                            <td>北京市 海淀区</td>
                                            <td>2014-6-11 11:11:42</td>
                                            <td><span>已启用</span></td>
                                            <td>
                                                <a href=""><i className="iconfont icon-bianji2"></i></a>
                                                <a href=""><i className="iconfont icon-yuechi"></i></a>
                                                <a href=""><i className="iconfont icon-shanchu"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>4</td>
                                            <td>张三</td>
                                            <td>男</td>
                                            <td>13000000000</td>
                                            <td>admin@mail.com</td>
                                            <td>北京市 海淀区</td>
                                            <td>2014-6-11 11:11:42</td>
                                            <td><span>已启用</span></td>
                                            <td>
                                                <a href=""><i className="iconfont icon-bianji2"></i></a>
                                                <a href=""><i className="iconfont icon-yuechi"></i></a>
                                                <a href=""><i className="iconfont icon-shanchu"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>5</td>
                                            <td>张三</td>
                                            <td>男</td>
                                            <td>13000000000</td>
                                            <td>admin@mail.com</td>
                                            <td>北京市 海淀区</td>
                                            <td>2014-6-11 11:11:42</td>
                                            <td><span>已启用</span></td>
                                            <td>
                                                <a href=""><i className="iconfont icon-bianji2"></i></a>
                                                <a href=""><i className="iconfont icon-yuechi"></i></a>
                                                <a href=""><i className="iconfont icon-shanchu"></i></a>
                                            </td>
                                        </tr>
                                    </table>

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
        )
     }
  }