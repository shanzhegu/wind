(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageTest"],{"0d5b":function(t,e,n){"use strict";var o=n("ca2c"),a=n.n(o);a.a},"726d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 新页面，用来测试路由，稍后会制作子页面 "),n("p",[t._v("观察去不同页面时需要的路由")]),t._v(" 栏目默认页 和 栏目子页面 "),n("br"),n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" | "),n("router-link",{attrs:{to:"/page"}},[t._v("栏目默认页面")]),t._v(" | "),n("router-link",{attrs:{to:"/page/index"}},[t._v("栏目 index 页面")]),t._v(" | "),n("router-link",{attrs:{to:"/page/son"}},[t._v("正常子栏目")]),n("hr"),n("router-view"),n("hr"),n("h3",[t._v("我是新内容，注意观察")]),n("div",{staticClass:"main"},[t._v(" "+t._s(t.title)+" ")])],1)},a=[],i=(n("4160"),n("159b"),n("6bae")),r={name:"pageDemo",data:function(){return{title:"Imooc",demo:i["default"],navRoutes:i["navRoutes"]}},mounted:function(){this.demo.forEach((function(t,e){console.log(e,t.path)}))},activated:function(){console.log("由 主栏目系列 切换到 page 的时候","我就会被激活")},deactivated:function(){console.log("由 page 切换回 主栏目系列 的时候","我就失去激活")}},c=r,s=(n("0d5b"),n("2877")),u=Object(s["a"])(c,o,a,!1,null,"e62eaf86",null);e["default"]=u.exports},ca2c:function(t,e,n){}}]);
//# sourceMappingURL=PageTest.32e3a95b.js.map