webpackJsonp([15],{"1ty3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"login",data:function(){return{modal:{userName:"",yzm:"",pwd:""},text:"获取验证码",time:60,isPwd:!0}},methods:{sendCode:function(){var t=this;setInterval(function(e){t.time--,t.text=t.time+"s"},1e3)},login:function(){this.back()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{staticClass:"main_page"},[a("mt-header",{staticClass:"primary_bg",staticStyle:{"-webkit-transform":"translateZ(0)"},attrs:{slot:"header",title:"登陆",fixed:!0},slot:"header"},[a("mt-button",{attrs:{slot:"left"},on:{click:t.back},slot:"left"},[a("img",{staticStyle:{width:"17px"},attrs:{src:"static/img/icon/close.png",alt:""}})]),t._v(" "),a("mt-button",{attrs:{slot:"right"},on:{click:function(e){t.isPwd=!t.isPwd}},slot:"right"},[t._v("\n\t\t\t"+t._s(t.isPwd?"密码登陆":"账号登陆")+"\n\t\t")])],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[t.isPwd?a("div",[a("div",{staticClass:"has-header login_content"},[a("div",{staticStyle:{position:"relative"}},[a("mt-field",{attrs:{placeholder:"手机号码"},model:{value:t.modal.userName,callback:function(e){t.$set(t.modal,"userName",e)},expression:"modal.userName"}}),t._v(" "),a("mt-button",{staticClass:"btn_yzm",attrs:{disabled:60!=t.time,type:"primary",size:"small"},on:{click:t.sendCode}},[t._v(t._s(t.text))])],1),t._v(" "),a("mt-field",{attrs:{placeholder:"验证码"},model:{value:t.modal.yzm,callback:function(e){t.$set(t.modal,"yzm",e)},expression:"modal.yzm"}}),t._v(" "),a("p",{staticClass:"waring fn-12"},[t._v("温馨提示，未注册饿了么账号的手机号，登录时将自动注册，且表示您已同意《用户协议》")])],1)]):a("div",[a("div",{staticClass:"has-header login_content"},[a("mt-field",{attrs:{placeholder:"手机号码"},model:{value:t.modal.userName,callback:function(e){t.$set(t.modal,"userName",e)},expression:"modal.userName"}}),t._v(" "),a("mt-field",{attrs:{placeholder:"密码",type:"password"},model:{value:t.modal.pwd,callback:function(e){t.$set(t.modal,"pwd",e)},expression:"modal.pwd"}}),t._v(" "),a("p",{staticClass:"waring fn-12"},[t._v("温馨提示，未注册饿了么账号的手机号，登录时将自动注册，且表示您已同意《用户协议》")])],1)]),t._v(" "),a("mt-button",{staticStyle:{margin:"0 3%",width:"94%"},attrs:{type:"primary",size:"large"},nativeOn:{click:function(e){return t.login(e)}}},[t._v("登陆")])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("j4Xf")},"data-v-7578f85e",null);e.default=l.exports},j4Xf:function(t,e){}});
//# sourceMappingURL=15.76a4e64bc38bac87f676.js.map