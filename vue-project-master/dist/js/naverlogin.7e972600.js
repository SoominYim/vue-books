(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["naverlogin"],{aa84:function(n,o,e){"use strict";e.r(o);var i=e("7a23"),t={id:"naverIdLogin"};function r(n,o,e,r,a,l){return Object(i["p"])(),Object(i["d"])("div",t)}var a={data:function(){return{naverLogin:null}},mounted:function(){var n=this;this.naverLogin=new window.naver.LoginWithNaverId({clientId:"VUONbLcphM_bO2LIQzqJ",callbackUrl:"http://localhost:8080/naverlogin",isPopup:!1,loginButton:{color:"green",type:3,height:60}}),this.naverLogin.init(),this.naverLogin.getLoginStatus((function(o){if(o){console.log(o),console.log(n.naverLogin.user);var e=n.naverLogin.user.getEmail();if(void 0==e||null==e)return alert("이메일은 필수정보입니다. 정보제공을 동의해주세요."),void n.naverLogin.reprompt()}else console.log("callback 처리에 실패하였습니다.")}))},methods:{logout:function(){this.naverLgoin.logout()}}};a.render=r;o["default"]=a}}]);
//# sourceMappingURL=naverlogin.7e972600.js.map