(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},r=[];function n(e){return o.p+"js/"+({"client-form~forms":"client-form~forms","client-form":"client-form",forms:"forms",profile:"profile",tables:"tables"}[e]||e)+"."+{"client-form~forms":"37625e1f","client-form":"722a0abc",forms:"3c172c80",profile:"65cbe869",tables:"925b1a35"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin-one-vue-bulma-dashboard/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",e._l(e.titleStack,(function(t,s){return a("li",{key:s},[e._v(e._s(t))])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-primary",attrs:{href:"https://admin-one.justboil.me/",target:"_blank"}},[a("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),a("span",[e._v("Premium Demo")])],1)])])])])])},i=[],r={name:"TitleBar",props:{titleStack:{type:Array,default:()=>[]}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);t["a"]=l.exports},"226e":function(e,t,a){e.exports=a.p+"img/justboil-logo.7298fabb.svg"},"503b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])])},i=[],r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);t["a"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("b107");var s=a("2b0e"),i=a("289d"),r=(a("e6cf"),a("8c4f")),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-bar",{attrs:{"title-stack":e.titleStack}}),a("hero-bar",{attrs:{"has-right-visible":!1}},[e._v(" Dashboard ")]),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":e.fillChartData}},[e.defaultChart.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":e.defaultChart.chartData,"extra-options":e.defaultChart.extraOptions}})],1):e._e()]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients"}},[a("clients-table-sample",{attrs:{"data-url":e.$router.options.base+"data-sources/clients.json"}})],1)],1)],1)},o=[],l=a("5530");const c={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},u={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},d=Object(l["a"])({},u,{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}});var m=a("1e1d"),p=a("503b"),h=a("9e7c"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},v=[],f=a("6df7"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" "+e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix)+" ")])},C=[],w=a("6612"),_=a.n(w),y={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data(){return{newValue:0,step:0}},computed:{newValueFormatted(){return this.newValue<1e3?this.newValue:_()(this.newValue).format("0,0")}},mounted(){this.growInit()},methods:{growInit(){const e=this.value/(this.duration/25);this.grow(e)},grow(e){const t=Math.ceil(this.newValue+e);if(t>this.value)return this.newValue=this.value,!1;this.newValue=t,setTimeout(()=>{this.grow(e)},25)}},watch:{value(){this.growInit()}}},k=y,x=a("2877"),A=Object(x["a"])(k,g,C,!1,null,null,null),O=A.exports,j={name:"CardWidget",components:{GrowingNumber:O,CardComponent:f["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},B=j,D=Object(x["a"])(B,b,v,!1,null,null,null),M=D.exports,N=a("1fca"),S={name:"line-chart",extends:N["a"],mixins:[N["b"].reactiveProp],props:{extraOptions:Object},data(){return{ctx:null}},mounted(){this.$watch("chartData",(e,t)=>{t||this.renderChart(this.chartData,this.extraOptions)},{immediate:!0})}},E=a("7080"),$={name:"home",components:{ClientsTableSample:E["a"],LineChart:S,CardComponent:f["a"],CardWidget:M,Tiles:h["a"],HeroBar:p["a"],TitleBar:m["a"]},data(){return{defaultChart:{chartData:null,extraOptions:d}}},computed:{titleStack(){return["Admin","Dashboard"]}},mounted(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData(e){const t=[];for(let a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},fillChartData(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:c.default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:c.default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:c.default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:c.default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},P=$,T=Object(x["a"])(P,n,o,!1,null,null,null),L=T.exports;s["a"].use(r["a"]);const z=[{meta:{title:"Dashboard"},path:"/",name:"home",component:L},{meta:{title:"Tables"},path:"/tables",name:"tables",component:()=>a.e("tables").then(a.bind(null,"8840"))},{meta:{title:"Forms"},path:"/forms",name:"forms",component:()=>Promise.all([a.e("client-form~forms"),a.e("forms")]).then(a.bind(null,"0894"))},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>a.e("profile").then(a.bind(null,"c66d"))},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:()=>Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:()=>Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b")),props:!0}],V=new r["a"]({base:"/admin-one-vue-bulma-dashboard/",routes:z,scrollBehavior(e,t,a){return a||{x:0,y:0}}});var I=V,F=a("2f62");s["a"].use(F["a"]);var R=new F["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1},mutations:{basic(e,t){e[t.key]=t.value},user(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},asideMobileStateToggle(e,t=null){const a="has-aside-mobile-expanded";let s;s=null!==t?t:!e.isAsideMobileExpanded,s?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideMobileExpanded=s}},actions:{}}),H=a("9483");Object(H["a"])("/admin-one-vue-bulma-dashboard/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},U=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[a("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1),e._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[a("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[e._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[a("user-avatar"),a("div",{staticClass:"is-user-name"},[a("span",[e._v(e._s(e.userName))])]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",attrs:{href:"https://justboil.me/bulma-admin-template/one",title:"About"}},[a("b-icon",{attrs:{icon:"help-circle-outline","custom-size":"default"}}),a("span",[e._v("About")])],1),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log out")])],1)],1)])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search everywhere..."}})])])}],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),a("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},K=[],Q={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon(){return this.isDropdownActive?"chevron-up":"chevron-down"}},created(){window.addEventListener("click",this.forceClose)},beforeDestroy(){window.removeEventListener("click",this.forceClose)},methods:{toggle(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},X=Q,Y=Object(x["a"])(X,G,K,!1,null,null,null),Z=Y.exports,ee=a("808f"),te={name:"NavBar",components:{UserAvatar:ee["a"],NavBarMenu:Z},data(){return{isMenuNavBarActive:!1}},computed:Object(l["a"])({menuNavBarToggleIcon(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon(){return this.isAsideMobileExpanded?"backburger":"forwardburger"}},Object(F["b"])(["isNavBarVisible","isAsideMobileExpanded","userName"])),methods:{menuToggleMobile(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},ae=te,se=Object(x["a"])(ae,q,J,!1,null,null,null),ie=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[a("aside-tools",{attrs:{"is-main-menu":!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("b",[e._v("Admin")]),e._v(" One ")])]),a("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,s){return["string"===typeof t?a("p",{key:s,staticClass:"menu-label"},[e._v(e._s(t))]):a("aside-menu-list",{key:s,attrs:{menu:t},on:{"menu-click":e.menuClick}})]}))],2)],1)},ne=[],oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-tools"},[a("div",{staticClass:"aside-tools-label"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._t("label")],2)])},le=[],ce={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null}}},ue=ce,de=Object(x["a"])(ue,oe,le,!1,null,null,null),me=de.exports,pe=a("9a7b"),he={name:"AsideMenu",components:{AsideTools:me,AsideMenuList:pe["default"]},props:{menu:{type:Array,default:()=>[]}},computed:Object(l["a"])({},Object(F["b"])(["isAsideVisible"])),methods:{menuClick(e){}}},be=he,ve=Object(x["a"])(be,re,ne,!1,null,null,null),fe=ve.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[e._v("© "+e._s(e.year)+", JustBoil.me")]),e._v(" — Admin One Demo "),a("span",{staticClass:"tag"},[e._v("v1.3.0")])])])]),e._m(0)])])])},Ce=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://justboil.me"}},[s("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],we=a("5a0c"),_e=a.n(we),ye={name:"FooterBar",computed:Object(l["a"])({year(){return _e()().year()}},Object(F["b"])(["isFooterBarVisible"]))},ke=ye,xe=Object(x["a"])(ke,ge,Ce,!1,null,null,null),Ae=xe.exports,Oe={name:"home",components:{FooterBar:Ae,AsideMenu:fe,NavBar:ie},computed:{menu(){return["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"}],"Examples",[{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}],"About",[{href:"https://admin-one.justboil.me",label:"Premium Demo",icon:"credit-card"},{href:"https://justboil.me/bulma-admin-template/one",label:"About",icon:"help-circle"}]]}},created(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/v2/gridy/John-Doe.svg"})}},je=Oe,Be=Object(x["a"])(je,W,U,!1,null,null,null),De=Be.exports;const Me="Admin One Bulma";I.afterEach(e=>{R.commit("asideMobileStateToggle",!1),e.meta&&e.meta.title?document.title=`${e.meta.title} — ${Me}`:document.title=Me}),s["a"].config.productionTip=!1,s["a"].use(i["a"]),new s["a"]({router:I,store:R,render:e=>e(De)}).$mount("#app")},"6df7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v(" "+e._s(e.title)+" ")],1),e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),a("div",{staticClass:"card-content"},[e._t("default")],2)])},i=[],r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick(){this.$emit("header-icon-click")}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);t["a"]=l.exports},7080:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObjectName},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{"checked-rows":e.checkedRows,checkable:e.checkable,loading:e.isLoading,paginated:e.paginated,"per-page":e.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:e.clients},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{staticClass:"has-no-head-mobile is-image-cell"},[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:t.row.avatar,alt:t.row.name}})])]),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""}},[e._v(" "+e._s(t.row.name)+" ")]),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""}},[e._v(" "+e._s(t.row.company)+" ")]),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""}},[e._v(" "+e._s(t.row.city)+" ")]),a("b-table-column",{staticClass:"is-progress-col",attrs:{label:"Progress",field:"progress",sortable:""}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.row.progress}},[e._v(e._s(t.row.progress))])]),a("b-table-column",{attrs:{label:"Created"}},[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:t.row.created}},[e._v(e._s(t.row.created))])]),a("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"}},[a("div",{staticClass:"buttons is-right"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:t.row.id}}}},[a("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),e.trashModal(t.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)])]}}])},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])]],2)])])],1)},i=[],r=a("bc3a"),n=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v("This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:e.confirm}},[e._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isModalActive:!1}},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}},watch:{isActive(e){this.isModalActive=e},isModalActive(e){e||this.cancel()}}},u=c,d=a("2877"),m=Object(d["a"])(u,o,l,!1,null,null,null),p=m.exports,h={name:"ClientsTableSample",components:{ModalBox:p},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.dataUrl&&(this.isLoading=!0,n.a.get(this.dataUrl).then(e=>{this.isLoading=!1,e.data&&e.data.data&&(e.data.data.length>this.perPage&&(this.paginated=!0),this.clients=e.data.data)}).catch(e=>{this.isLoading=!1,this.$buefy.toast.open({message:`Error: ${e.message}`,type:"is-danger"})}))},methods:{trashModal(e){this.trashObject=e,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1}}},b=h,v=Object(d["a"])(b,s,i,!1,null,null,null);t["a"]=v.exports},"808f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])},i=[],r=(a("5319"),a("5530")),n=a("2f62"),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(r["a"])({newUserAvatar(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;let e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),`https://avatars.dicebear.com/v2/human/${e}.svg?options[mood][]=happy`}},Object(n["b"])(["userAvatar","userName"]))},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports},"9a7b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,s){return a("aside-menu-item",{key:s,attrs:{item:t},on:{"menu-click":e.menuClick}})})),1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:{"has-icon":!!e.item.icon,"has-dropdown-icon":e.hasDropdown},attrs:{to:e.itemTo,href:e.itemHref,"exact-active-class":"is-active"},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e(),e.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:e.dropdownIcon,"custom-size":"default"}})],1):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,isSubmenuList:!0}}):e._e()],1)},n=[],o=(a("e6cf"),{name:"AsideMenuItem",components:{AsideMenuList:()=>Promise.resolve().then(a.bind(null,"9a7b"))},data(){return{isDropdownActive:!1}},props:{item:{type:Object,default:null}},methods:{menuClick(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}},computed:{componentIs(){return this.item.to?"router-link":"a"},hasDropdown(){return!!this.item.menu},dropdownIcon(){return this.isDropdownActive?"minus":"plus"},itemTo(){return this.item.to?this.item.to:null},itemHref(){return this.item.href?this.item.href:null}}}),l=o,c=a("2877"),u=Object(c["a"])(l,r,n,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:()=>[]}},methods:{menuClick(e){this.$emit("menu-click",e)}}},p=m,h=Object(c["a"])(p,s,i,!1,null,null,null);t["default"]=h.exports},"9e7c":function(e,t,a){"use strict";var s,i,r=a("91c8"),n=a.n(r),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},render(e){return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},n()(this.$slots.default,this.maxPerRow).map(t=>this.renderAncestor(e,t)))},methods:{renderAncestor(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map(t=>e("div",{attrs:{class:"tile is-parent"}},[t])))}}},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){},c32d:function(e,t){if("undefined"===typeof moment){var a=new Error("Cannot find module 'moment'");throw a.code="MODULE_NOT_FOUND",a}e.exports=moment}});
//# sourceMappingURL=app.78bc0bd2.js.map