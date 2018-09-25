<template>
      <div v-if="tuijianzhuanqu.length != 0" class="fenleiMenu">
        <div class="fenlei-left">
          <div class="fenlei-left-content">
            <a class="fenlei-left-menus" v-for="(val,index) in tuijianzhuanqu" :key="index" @click="custormAnchor(`${index}`);huanse(index)" >{{ val.leftMenu }}</a>
          </div>
        </div>
        <div class="fenlei-right">
          <div @scroll="gundong($event.target.scrollTop)" class="fenlei-right-content">

              <div  class="baopinqu" v-for="(value,index) in tuijianzhuanqu" :key="index" :id="index">
                <div>
                  <a href="#">
                    <img :src="value.rightContent.contentBanner" alt="" />
                  </a>
                </div>
                <div v-for="(val,index) in value.rightContent.fenleiContent" :key="index">
                  <p v-if="val.fenleitext != null">{{ val.fenleitext }}</p>
                  <div>
                    <a v-for="(vas,index) in val.fenleiContent" href="#"  :key="index">
                      <img :src="vas.imgs" alt="" />
                      <span>{{ vas.text }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

    export default {
        name: "fenlei-content-menu",
        data(){
          return{
            "targetMenu":[],
            "tuijianzhuanqu":[
              {
                "leftMenu":"精品专区",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-tuijian-00.png"),
                  "fenleiContent":[
                    {"fenleitext":null,"fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-0.png"),"text":"配件低至2折"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-1.png"),"text":"服饰低至2折"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-2.png"),"text":"餐厨99元任选6件"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-3.png"),"text":"居家2件85折"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-4.png"),"text":"婴童中秋特惠"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-5.png"),"text":"实用电器低至8折"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-6.png"),"text":"美食中秋特惠"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-7.png"),"text":"中秋好礼"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-8.png"),"text":"丁磊的好货推荐"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tuijian-9.png"),"text":"999+好评"
                        },
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"爆品区",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-baopin-00.png"),
                  "fenleiContent":[
                    {"fenleitext":null,"fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-0.png"),"text":"居家床品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-1.png"),"text":"功能箱包"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-2.png"),"text":"女装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-3.png"),"text":"男装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-4.png"),"text":"男鞋女鞋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-5.png"),"text":"保健养生"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-6.png"),"text":"清洁日用"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-7.png"),"text":"宝贝专用"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-8.png"),"text":"游戏周边"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-baopin-9.png"),"text":"海外好物"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"秋季专区",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-quji-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":null,"fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(1).png"),"text":"女士秋装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(2).png"),"text":"男士秋装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(3).png"),"text":"萌宝秋装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(4).png"),"text":"爽秋出行"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(5).png"),"text":"养生茶饮"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(6).png"),"text":"丰收果粮"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(7).png"),"text":"干季滋润护理"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-quji-(8).png"),"text":"秋日精致配件"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                  "leftMenu":"居家",
                  "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-juJia-00.jpg"),
                    "fenleiContent":[
                    {"fenleitext":"床品","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(1).png"),"text":"床品件套"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(2).png"),"text":"被枕"
                        }
                      ]
                    },
                    {"fenleitext":"家具家装","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(3).png"),"text":"家具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(4).png"),"text":"灯具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(5).png"),"text":"布艺软装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(6).png"),"text":"家饰"
                        }
                      ]
                    },
                    {"fenleitext":"收纳","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(7).png"),"text":"收纳"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(8).png"),"text":"旅行用品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(9).png"),"text":"晾晒除味"
                        }
                      ]
                    },
                    {"fenleitext":"医疗宠物","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(10).png"),"text":"家庭医疗"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-juJia-(11).png"),"text":"宠物"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"鞋包配饰",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-xiebao-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"箱包","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(1).png"),"text":"行李箱"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(2).png"),"text":"女士包袋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(3).png"),"text":"男士包袋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(4).png"),"text":"钱包及小皮件"
                        }
                      ]
                    },
                    {"fenleitext":"鞋靴","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(5).png"),"text":"男鞋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(6).png"),"text":"拖鞋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(7).png"),"text":"鞋配"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(8).png"),"text":"女鞋"
                        },
                      ]
                    },
                    {"fenleitext":"配饰配件","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(9).png"),"text":"晾晒除味"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(10).png"),"text":"旅行用品"
                        }
                      ]
                    },
                    {"fenleitext":"医疗宠物","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(11).png"),"text":"丝袜"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(12).png"),"text":"围巾件套"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(13).png"),"text":"首饰"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xiebao-(14).png"),"text":"配件"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"服装",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-fuzhuang-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"当季流行","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(1).png"),"text":"毛衫"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(2).png"),"text":"羽绒"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(3).png"),"text":"风衣毛呢"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(4).png"),"text":"牛仔裤"
                        }
                      ]
                    },
                    {"fenleitext":"女装","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(5).png"),"text":"女式T恤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(6).png"),"text":"女式外套"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(7).png"),"text":"女式裤装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(8).png"),"text":"女式裙装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(9).png"),"text":"女士衬衫"
                        }
                      ]
                    },
                    {"fenleitext":"男装","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(10).png"),"text":"男士T恤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(11).png"),"text":"男式外套"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(12).png"),"text":"男式衬衫"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(13).png"),"text":"男式裤装"
                        }
                      ]
                    },
                    {"fenleitext":"内衣家居服","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(14).png"),"text":"男式家居服"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(15).png"),"text":"女式家居服"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(16).png"),"text":"男士内裤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(17).png"),"text":"男式内衣"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(18).png"),"text":"女士文胸"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(19).png"),"text":"女士内裤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(20).png"),"text":"女式内衣"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(21).png"),"text":"塑身美体"
                        }
                      ]
                    },
                    {"fenleitext":"运动","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(22).png"),"text":"运动T恤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(23).png"),"text":"运动外套"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(24).png"),"text":"运动卫衣"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(25).png"),"text":"运动裤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(26).png"),"text":"运动文胸"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(27).png"),"text":"紧身裤"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(28).png"),"text":"泳装"
                        }
                      ]
                    },
                    {"fenleitext":"Yessing轻运动","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(29).png"),"text":"Yessing上装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-fuzhuang-(30).png"),"text":"Yessing下装"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"电器",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-dianqi-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"家用电器","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-dianqi-(1).png"),"text":"生活电器"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-dianqi-(2).png"),"text":"厨房电器"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-dianqi-(3).png"),"text":"个护健康"
                        }
                      ]
                    },
                    {"fenleitext":"3C数码","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-dianqi-(4).png"),"text":"数码"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-dianqi-(5).png"),"text":"影音娱乐"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"洗护",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-xihu-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"纸品清洁","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(1).png"),"text":"纸品湿巾"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(2).png"),"text":"家庭清洁"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(3).png"),"text":"浴室用具"
                        }
                      ]
                    },
                    {"fenleitext":"护理彩妆","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(4).png"),"text":"毛巾浴巾"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(5).png"),"text":"美妆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(6).png"),"text":"香水香氛"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(7).png"),"text":"面部口腔护理"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(8).png"),"text":"身体护理"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(9).png"),"text":"洗发护发"
                        }
                      ]
                    },
                    {"fenleitext":"生理用品","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(10).png"),"text":"生理用品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-xihu-(11).png"),"text":"女性用品"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"饮食",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-yinshi-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"中秋送礼","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(1).png"),"text":"中秋送礼美食"
                        }
                      ]
                    },
                    {"fenleitext":"休闲零食","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(2).png"),"text":"饼干糕点"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(3).png"),"text":"小食糖巧"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(4).png"),"text":"坚果炒货"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(5).png"),"text":"肉类零食"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(6).png"),"text":"蜜饯果干"
                        }
                      ]
                    },
                    {"fenleitext":"冲饮茗茶","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(7).png"),"text":"冲调饮品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(8).png"),"text":"茶包花茶"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(9).png"),"text":"传统茗茶"
                        }
                      ]
                    },
                    {"fenleitext":"粮调速食","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(10).png"),"text":"方便食品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(11).png"),"text":"米面粮油"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(12).png"),"text":"南北干货"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(13).png"),"text":"调味酱菜"
                        }
                      ]
                    },
                    {"fenleitext":"酒水饮料","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(14).png"),"text":"酒类"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(15).png"),"text":"乳品饮料"
                        }
                      ]
                    },
                    {"fenleitext":"滋补保健","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(16).png"),"text":"滋补食材"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(17).png"),"text":"保健品"
                        }
                      ]
                    },
                    {"fenleitext":"生鲜甜点","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(18).png"),"text":"甜品鲜花"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(19).png"),"text":"果鲜肉蛋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(20).png"),"text":"网易黑猪"
                        }
                      ]
                    },
                    {"fenleitext":"生鲜甜点","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yinshi-(21).png"),"text":"海外美食"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"餐厨",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-canchu-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"厨房用品","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(1).png"),"text":"锅具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(2).png"),"text":"清洁保鲜"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(3).png"),"text":"厨房配件"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(4).png"),"text":"刀剪砧板"
                        }
                      ]
                    },
                    {"fenleitext":"餐厅用品","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(5).png"),"text":"餐具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(6).png"),"text":"水具杯壶"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-canchu-(7).png"),"text":"茶具咖啡具酒具"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"婴童",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-yingtong-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"婴童生活","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(1).png"),"text":"套装礼盒"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(2).png"),"text":"婴童洗护"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(3).png"),"text":"婴童床品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(4).png"),"text":"毛巾口水巾"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(5).png"),"text":"儿童家具收纳"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(6).png"),"text":"喂养用品"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(7).png"),"text":"玩具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(8).png"),"text":"童车童床"
                        }
                      ]
                    },
                    {"fenleitext":"童鞋童包","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(9).png"),"text":"童鞋"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(10).png"),"text":"童包"
                        }
                      ]
                    },
                    {"fenleitext":"服饰配搭","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(11).png"),"text":"新生儿服装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(12).png"),"text":"小童服装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(13).png"),"text":"中大童服装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(14).png"),"text":"婴童配搭"
                        }
                      ]
                    },
                    {"fenleitext":"孕产妈咪","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(15).png"),"text":"孕产内衣"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(16).png"),"text":"孕妈装"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-yingtong-(17).png"),"text":"妈咪用品"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"文体",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-wenti-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"文体音像","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(1).png"),"text":"文具"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(2).png"),"text":"运动户外"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(3).png"),"text":"乐器唱片"
                        }
                      ]
                    },
                    {"fenleitext":"礼品点卡","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(4).png"),"text":"礼品卡"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(5).png"),"text":"游戏点卡"
                        }
                      ]
                    },
                    {"fenleitext":"周边商品","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(6).png"),"text":"云音乐周边"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(7).png"),"text":"我的世界"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(8).png"),"text":"梦幻西游"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(9).png"),"text":"大话西游"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(10).png"),"text":"阴阳师"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(11).png"),"text":"游戏表情"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(12).png"),"text":"文创周边"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(13).png"),"text":"影视周边"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-wenti-(14).png"),"text":"动漫电玩"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "leftMenu":"特色区",
                "rightContent":{
                  "contentBanner":require("../../assets/img/img4/fenlei-tese-00.jpg"),
                  "fenleiContent":[
                    {"fenleitext":"海外制造馆","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(1).png"),"text":"日本馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(2).png"),"text":"韩国馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(3).png"),"text":"东南亚馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(4).png"),"text":"欧美馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(5).png"),"text":"澳新馆"
                        }
                      ]
                    },
                    {"fenleitext":"特色品牌馆","fenleiContent":[
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(6).png"),"text":"智造馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(7).png"),"text":"春风馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(8).png"),"text":"味央馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(9).png"),"text":"Yessing馆"
                        },
                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(10).png"),"text":"国风馆"
                        }
                      ]
                    },
                    {"fenleitext":"推荐品牌馆","fenleiContent":[

                        {
                          "imgs":require("../../assets/img/img4/fenlei-tese-(11).png"),"text":"严选推荐馆"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          } 
        },
        mounted(){
          $(".fenlei-left-menus").eq(0).addClass("sign");
          this.initData()
        },
        methods:{
          custormAnchor(anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView(); }
          },
          initData(){
            var _this = this;
            $(function (){
              $(".baopinqu").each(function(index){
                _this.targetMenu.push({"index":index,"height":this.offsetTop});
              })
            })
          },
          gundong(height){
            let index = 0;
            let tepData = this.targetMenu;
            for(let j=0;j<tepData.length;j ++){
              let heights = (parseInt(tepData[j].height)-69);
              if(heights==height || (parseInt(tepData[j].height)-69)<=height){
                index = tepData[j].index;
              }
            }
            this.huanse(index);
          },
          huanse(index){
            $(".fenlei-left-menus").siblings().removeClass("sign")
            $(".fenlei-left-menus").eq(index).addClass("sign")
            return;
          }
        }
    }
</script>

<style scoped>
  /*fenleiMenu*/
  .fenleiMenu{
    width: 100%;
    height: 100%;
    display:  flex;
    border-top: 1px solid #e7e7e7;
    box-sizing: border-box;
  }
  .fenleiMenu > div:nth-of-type(1){
    overflow-y: scroll;
    width: 0.76rem;
    border-right: 1px solid #e7e7e7;
    background-color: #fff;
  }
  .fenleiMenu > div:nth-of-type(2){
    overflow-y: scroll;
    flex: 1;
    box-sizing: border-box;
    padding: 0.16rem;
  }
  .fenleiMenu .fenlei-left-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e7e7e7;
  }
  .fenleiMenu .fenlei-left-content > a{
    display: block;
    width: 100%;
    text-align: center;
    margin: 0.06rem 0;
    padding: 0.07rem 0;
    box-sizing: border-box;
    border-left: 4px solid transparent;
  }
  .fenleiMenu .fenlei-left-content .sign{
    border-left-color: #b51d24;
    color: #b51d24;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(1) img{
    width: 2.7rem;
  }
  .fenleiMenu .fenlei-right-content{
    height: 100%;
    overflow-y: scroll;
  }


  .fenleiMenu .fenlei-right-content > div > div > div{
    display: flex;
    flex-wrap: wrap;
  }
  .fenleiMenu .fenlei-right-content > div > div > p {
    width: 100%;
    padding-bottom: 0.05rem;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 0.2rem;
    font-size: 0.14rem;
  }
  .fenleiMenu .fenlei-right-content > div > div > div > a:nth-of-type(1),
  .fenleiMenu .fenlei-right-content > div > div > div > a:nth-of-type(2),
  .fenleiMenu .fenlei-right-content > div > div > div > a:nth-of-type(3){
    padding-top: 0rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(1){
    padding-bottom: 0.22rem;
  }
  .fenleiMenu .fenlei-right-content > div > div > div > a{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.42rem;
    width: 0.75rem;
    margin-left: 0.066rem;
    margin-right: 0.066rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2) > div > a > span{
    display: inline-block;
    max-width: 0.75rem;
    font-size: 0.12rem;
    padding-top: 0.15rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(2)  > div> a > img{
    height: 0.55rem;
  }
  .fenleiMenu .fenlei-right-content > div > div:nth-of-type(n+2) > div > a > img{
    height: 0.55rem;
  }
</style>
