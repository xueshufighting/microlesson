"use strict";(self["webpackChunkmicrolesson"]=self["webpackChunkmicrolesson"]||[]).push([[904],{1904:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Test23"},[e("button",{staticClass:"button1",on:{click:t.lookAnswer}},[t._v("提交答案")]),e("button",{staticClass:"button",on:{click:t.changeHomePage}},[t._v("返回首页")]),e("br"),e("br"),e("div",{staticClass:"pro2"},[e("div",{staticClass:"pro2-1"},[e("input",{attrs:{type:"radio",name:"answer",value:"F"}}),e("span",{staticClass:"word"},[t._v("3000     ")]),e("input",{attrs:{type:"radio",name:"answer",value:"F"}}),e("span",{staticClass:"word"},[t._v("30     ")]),e("input",{attrs:{type:"radio",name:"answer",value:"T"},domProps:{checked:t.choice}}),e("span",{staticClass:"word",class:t.tStyle},[t._v("30000    ")]),e("input",{attrs:{type:"radio",name:"answer",value:"F"}}),e("span",{staticClass:"word"},[t._v("3")])]),e("div",{staticClass:"countTime"},[e("p",[t._v("倒计时："+t._s(t.count))])])])])},n=[],r=(s(7658),{name:"test23",data(){return{count:20,choice:!1,tStyle:""}},mounted(){this.timer=setInterval((()=>{this.count>0?this.count--:(this.lookAnswer(),clearInterval(this.timer))}),1e3)},beforeDestroy(){clearInterval(this.timer)},methods:{changeHomePage(){this.$router.push({path:"/"})},lookAnswer(){var t=document.getElementsByName("answer");t[2].checked?alert("恭喜你，回答正确！"):alert("回答错误！"),this.choice=!0,this.tStyle="T",setTimeout((()=>{alert("恭喜你完成所有练习！"),this.changeHomePage()}),1e3)}}}),o=r,i=s(1001),c=(0,i.Z)(o,a,n,!1,null,"6e360453",null),l=c.exports}}]);
//# sourceMappingURL=904.f879825f.js.map