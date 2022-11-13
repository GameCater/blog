"use strict";(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[490],{8490:function(t,e,a){a.r(e),a.d(e,{default:function(){return M}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},[e("div",{staticStyle:{width:"80vw",margin:"0 auto","min-height":"100vh"}},[e("div",{staticClass:"row flex-top flex-spaces"},[e("div",{class:{hide:t.hideSide,col:!0,"md-3":!0,aside:!0},staticStyle:{"min-width":"250px"}},[e("div",{style:{height:t.sideHeight}},[e("AvatarBox",{staticClass:"paper"}),e("TagsBox",{staticClass:"paper"}),e("router-view",{staticStyle:{position:"sticky",top:"30px"},attrs:{name:"sidebar"}})],1)]),e("div",{staticClass:"col sm-12 md-9"},[e("InputBar"),e("router-view",{key:t.$route.fullPath,attrs:{hideImage:t.hideImage,name:"default"}})],1)])]),e("Footer"),e("div",{staticClass:"tools"},[e("span",{staticClass:"paper-btn btn-small"},[t._v("工具推荐")]),e("span",{staticClass:"paper-btn btn-small animate__animated animate__fadeInRight",class:{"tool-hide":"/home"===t.$route.fullPath},on:{click:t.backHome}},[t._v("返回首页")]),e("span",{staticClass:"paper-btn btn-small",on:{click:t.switchThemeMode}},[t._v("切换主题")]),e("span",{staticClass:"paper-btn btn-small",on:{click:t.backTop}},[t._v("回到顶部")])])],1)},i=[],r=(a(7658),function(){var t=this;t._self._c;return t._m(0)}),l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{staticClass:"footer border paper",staticStyle:{margin:"0",height:"60px","text-align":"center","line-height":"50px"}},[t._v(" © Designed and developed by Alo ")]),e("div",{staticClass:"area"},[e("ul",{staticClass:"circles"},[e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li")])])])}],n=a(1001),o={},c=(0,n.Z)(o,r,l,!1,null,"700c1de8",null),d=c.exports,h=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-sm border border-primary",staticStyle:{"text-align":"center"}},[e("h4",{staticStyle:{margin:"10px"}},[t._v("AVATAR")]),e("div",{staticClass:"avatar"},[e("img",{attrs:{src:a(2792)}})]),e("h5",{staticStyle:{margin:"5px"}},[t._v("Alo")]),e("div",{staticClass:"container-sm",staticStyle:{margin:"10px"}},[e("label",{staticClass:"paper-btn btn-small",attrs:{for:"modal"}},[t._v("Contact Me")])]),e("input",{staticClass:"modal-state",attrs:{id:"modal",type:"checkbox"}}),e("div",{staticClass:"modal"},[e("label",{staticClass:"modal-bg",attrs:{for:"modal"}}),e("div",{staticClass:"modal-body"},[e("label",{staticClass:"btn-close",attrs:{for:"modal"}},[t._v("X")]),e("h4",{staticClass:"modal-title"},[t._v("联系方式")]),e("p",{staticClass:"modal-text"},[t._v("QQ 、微信、Twitter、Github、Gitee")])])])])}],m={data(){return{avatarHovered:!1}}},p=m,v=(0,n.Z)(p,h,u,!1,null,"10434172",null),g=v.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-sm border border-primary",staticStyle:{"text-align":"center","margin-top":"10px"}},[e("h4",{staticStyle:{margin:"10px"}},[t._v("TAGS")]),e("div",t._l(t.tags,(function(a,s){return e("span",{key:s,staticClass:"badge",class:{selected:t.tagsToSearch.includes(a._id)},staticStyle:{margin:"5px 6px",cursor:"pointer"},on:{click:function(e){return t.search(a._id)}}},[t._v(t._s(a.name))])})),0)])},y=[],b={data(){return{tags:[],tagsToSearch:[]}},methods:{fetchTags(){this.$http.get("/tag/list").then((t=>{this.tags=t.data.data}))},search(t){const e=this.tagsToSearch.indexOf(t);-1!==e?this.tagsToSearch.splice(e,1):this.tagsToSearch.push(t),this.$bus.$emit("tagsChanged",this.tagsToSearch)}},mounted(){this.fetchTags()},beforeDestroy(){this.tagsToSearch=[]}},_=b,x=(0,n.Z)(_,f,y,!1,null,"0cab4be0",null),C=x.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-sm header fixed",staticStyle:{height:"60px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"select",staticStyle:{border:"none",width:"2px","margin-right":"5px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.keyword=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"title"}},[t._v("文章标题")]),e("option",{attrs:{value:"date"}},[t._v("文章日期")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticStyle:{width:"calc(120px + 20vw)"},attrs:{type:"text",placeholder:"search..."},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchSearchResults.apply(null,arguments)},input:function(e){e.target.composing||(t.value=e.target.value)}}})])},k=[],w={data(){return{keyword:"title",value:"",paging:{page:1,pageSize:5}}},methods:{fetchSearchResults(){this.keyword.trim()&&this.$http.get("/article/search",{params:{keyword:this.keyword,value:this.value,...this.paging}}).then((t=>{console.log("Search results",t.data),this.$router.push(`/home/search?results=${encodeURIComponent(JSON.stringify(t.data))}&page=${this.paging.page}`),this.value=""}))}},created(){this.$bus.$on("search",(t=>{this.paging=t,this.fetchSearchResults()}))}},T=w,$=(0,n.Z)(T,S,k,!1,null,"5eec7c66",null),I=$.exports,W={name:"Home",components:{Footer:d,AvatarBox:g,TagsBox:C,InputBar:I},data(){return{hideSide:!1,screenWidth:document.body.clientWidth,timer:!1,hideImage:!1,themeMode:!0,sideHeight:""}},watch:{screenWidth(t){this.timer||(this.timer=!0,this.screenWidth=t,this.transformLayout(),setTimeout((()=>{this.timer=!1}),50))}},mounted(){let t=this;window.onresize=()=>(()=>{window.screenWidth=document.body.clientWidth,t.screenWidth=window.screenWidth})()},methods:{transformLayout(){this.screenWidth<1280?this.hideSide=!0:this.hideSide=!1,this.screenWidth<685?this.hideImage=!0:this.hideImage=!1},backTop(){let t=document.documentElement.scrollTop||document.body.scrollTop;const e=setInterval((()=>{document.documentElement.scrollTop=document.body.scrollTop=t-=30,t<=0&&clearInterval(e)}),10)},backHome(){this.$router.push("/home")},switchThemeMode(){this.themeMode=!this.themeMode;const t=document.documentElement;this.themeMode?t.classList.remove("dark"):t.classList.add("dark")}},created(){this.transformLayout(),this.$bus.$on("on-height-change",(t=>{this.sideHeight=t.replace("px","")/3*2+"px"}))}},A=W,H=(0,n.Z)(A,s,i,!1,null,"116d57d2",null),M=H.exports},2792:function(t,e,a){t.exports=a.p+"static/img/logo_v0.5.8ca6f7e3.png"}}]);