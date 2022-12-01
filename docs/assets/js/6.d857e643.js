(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{275:function(t,e,i){},297:function(t,e,i){"use strict";i(275)},302:function(t,e,i){"use strict";i.r(e);const a=t=>{let e={height:()=>t.clientHeight,width:()=>t.clientWidth};if(!t)for(const t in e)e[t]=()=>0;return e};var s={name:"Panel",data:()=>({scrollStyle:{height:""},bodyStyle:{height:""},panelStyle:{height:""}}),props:{isNavbar:{type:Boolean,default:!0},title:{type:String,default:""},titlePosition:{type:String,default:"center"},leftText:{type:String,default:""},rightText:{type:String,default:""},leftArrow:{type:Boolean,default:!1},rightArrow:{type:Boolean,default:!1},scroll:{type:Boolean,default:!0},fullWindow:{type:Boolean,default:!1},height:{type:Number,default:null},loading:{type:Boolean,default:!1},padding:{type:Boolean,default:!0},className:{type:String,default:"begda-panel"},shadow:{type:String,default:"always"}},computed:{isShadow(){switch(this.shadow){case"always":return"shadow-md";case"hover":return" hover:shadow-md";case"never":return""}},titlePositionClass(){switch(this.titlePosition){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right"}}},created:function(){},mounted:function(){this.viewResize()},methods:{view(){let t=this;const e=window.innerHeight,i=a(this.$refs.header).height()+a(this.$refs.top).height()+a(this.$refs.bottom).height()+a(this.$refs.bottombar).height();t.padding||(t.bodyStyle.padding=0),t.fullWindow?t.panelStyle.height=e+"px":t.panelStyle.height=t.height+"px",t.scrollStyle.height=`calc(100% - ${i}px)`;const s=a(this.$refs.body).height(),n=a(this.$refs.body).width();t.$emit("resize",s,n)},viewResize(){this.view(),window.addEventListener("resize",()=>{this.view()})}}},n=i(11),l=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"panel",class:[t.className,t.isShadow],style:t.panelStyle},[t.isNavbar?[t.$slots.header?[e("div",{ref:"header"},[t._t("header")],2)]:[e("div",{ref:"header",staticClass:"begda-panel__header"},[t.leftText?[e("div",{staticClass:"begda-panel__header-left",on:{click:function(e){return t.$emit("left")}}},[t.leftArrow?e("i",{staticClass:"el-icon-arrow-left"}):t._e(),t._v(t._s(t.leftText)+"\n            ")])]:[t._t("left")],t._v(" "),e("div",{class:["begda-panel__header-title",t.titlePositionClass]},[t._v(t._s(t.title))]),t._v(" "),t.rightText?[e("div",{staticClass:"begda-panel__header-right",on:{click:function(e){return t.$emit("right")}}},[t._v("\n              "+t._s(t.rightText)),t.rightArrow?e("i",{staticClass:"el-icon-arrow-right"}):t._e()])]:[t._t("right")]],2)]]:t._e(),t._v(" "),t.$slots.top?e("div",{ref:"top",staticClass:"top"},[t._t("top")],2):t._e(),t._v(" "),t.scroll?[e("ba-scrollbar",{staticClass:"begda-scrollbar",style:t.scrollStyle},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"body",staticClass:"begda-panel__body",style:t.bodyStyle},[t._t("default")],2)])]:[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"body",staticClass:"begda-panel__body",style:t.bodyStyle},[t._t("default")],2)],t._v(" "),t.$slots.bottom?e("div",{ref:"bottom"},[t._t("bottom")],2):t._e(),t._v(" "),t.$slots.bottombar?e("div",{ref:"bottombar"},[t._t("bottombar")],2):t._e()],2)])}),[],!1,null,"6ded1b7f",null).exports,o={name:"BaPanelData",data:()=>({className:"begda-panel-data",componentName:"dv-border-box-11"}),props:{theme:{type:String,default:"panel-1"}},watch:{theme(t,e){this.onTheme(t)}},created:function(){this.onTheme(this.theme)},mounted:function(){},methods:{onTheme(t){switch(t){case"panel-1":this.className="begda-panel-data",this.componentName="dv-border-box-12";break;case"panel-2":this.className="begda-panel-data-2",this.componentName="dv-border-box-11";break;case"panel-3":this.className="begda-panel-data-3",this.componentName="dv-border-box-13";break;case"panel-4":this.className="begda-panel-data-4",this.componentName="dv-border-box-9"}}}},r={name:"home",components:{BaPanelData:Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e(t.componentName,{tag:"component"},[e("panel",t._g(t._b({attrs:{className:t.className,shadow:"never"}},"panel",t.$attrs,!1),t.$listeners),[t._l(t.$slots,(function(i,a){return[e("template",{slot:a},[t._t(a)],2)]}))],2)],1)],1)}),[],!1,null,null,null).exports,Panel:l},data:()=>({logo:"",nav:[],sidebar:[],Copyright:"0000",author:{}}),created(){this.logo="."+this.$site.themeConfig.logo,this.sidebar=this.$site.themeConfig.sidebar,this.Copyright=(new Date).getFullYear(),this.author=this.$site.themeConfig.author,this.nav=this.$site.themeConfig.nav},mounted(){console.log(this.$site)},methods:{onClick(t,e){e?window.open(`.${t}${e}.html`):window.open(""+t)}}},d=(i(297),Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{position:"fixed",top:"10px",right:"10px",color:"#5ba17c"}},[t._l(t.nav,(function(i){return[e("a",{attrs:{href:"."+i.link}},[t._v(t._s(i.text))]),t._v("   \n    ")]}))],2),t._v(" "),e("div",{staticClass:"home-header"},[e("img",{staticStyle:{width:"120px","border-radius":"50%",padding:"5px",background:"#ffffff",margin:"auto"},attrs:{src:t.logo}}),t._v(" "),e("div",{staticStyle:{"font-size":"40px","margin-bottom":"20px","margin-top":"10px"}},[t._v(t._s(t.$site.locales["/"].title))]),t._v(" "),e("h3",{staticStyle:{"font-size":"20px",color:"#fbec56"}},[t._v(t._s(t.$site.locales["/"].description))])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticStyle:{width:"1200px",margin:"auto"}},[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.sidebar,(function(i,a){return e("div",{staticStyle:{width:"25%"}},[e("panel",{staticStyle:{margin:"15px"},attrs:{"is-navbar":!1,height:400},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticStyle:{"border-radius":"5px 5px 0 0",color:"#ffffff",width:"100%",height:"130px",background:"#02407a","font-size":"30px","font-weight":"300","text-align":"center","line-height":"130px","border-bottom":"4px #ffcc00 solid"}},[t._v("\n              "+t._s(i[0].title)+"\n            ")])]},proxy:!0}],null,!0)},[t._v(" "),t._l(i[0].children,(function(s){return[s?[e("van-cell",{attrs:{title:s,"is-link":""},on:{click:function(e){return t.onClick(a,s)}}})]:[e("van-cell",{attrs:{title:i[0].title+"首页","is-link":""},on:{click:function(e){return t.onClick(a)}}})]]}))],2)],1)})),0),t._v(" "),t._m(1),t._v(" "),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.$site.pages,(function(i){return e("div",[i.title?[e("panel",{staticStyle:{margin:"5px"},attrs:{"is-navbar":!1,shadow:"hover"}},[e("a",{attrs:{href:"."+i.path}},[t._v(t._s(i.title))])])]:t._e()],2)})),0)]),t._v(" "),e("div",{staticStyle:{"margin-top":"100px","text-align":"center",padding:"20px","border-top":"1px #ececec solid"}},[t._v("\n    Copyright © "+t._s(t.Copyright)+" | "),e("a",{attrs:{href:t.author.link}},[t._v(t._s(t.author.name))]),t._v(" |\n    "),t._l(t.nav,(function(i){return[e("a",{attrs:{href:"."+i.link}},[t._v(t._s(i.text))]),t._v(" |\n    ")]}))],2)])}),[function(){var t=this._self._c;return t("div",{staticStyle:{padding:"20px","text-align":"center","margin-top":"30px"}},[t("h1",[this._v("我自己常用的项目")]),this._v(" "),t("div",{staticStyle:{height:"20px"}}),this._v(" "),t("h4",[this._v("这些项目都是频繁使用或者需要查看手册的项目")])])},function(){var t=this._self._c;return t("div",{staticStyle:{padding:"20px","text-align":"center","margin-top":"30px"}},[t("h1",[this._v("所有文章")]),this._v(" "),t("div",{staticStyle:{height:"20px"}}),this._v(" "),t("h4",[this._v("这是给搜索引擎用的")])])}],!1,null,"52086bbf",null));e.default=d.exports}}]);