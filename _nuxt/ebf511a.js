(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(t,e,n){"use strict";n.r(e);n(33);var o={name:"LangSwitcher",props:{locales:{type:Array,required:!0},defaultLocale:{type:String,required:!1,default:null}},data:function(){return{languageMenu:!1,activeLang:this.defaultLocale?this.defaultLocale:this.locales.length>0?this.locales[0]:null,open:!1}},methods:{linkHandler:function(option){this.activeLang=option.code.charAt(0).toUpperCase()+option.code.slice(1),this.open=!1,this.$router.push(this.switchLocalePath(option.code))}}},r=n(83),l=n(93),c=n.n(l),d=n(319),f=n(223),m=n(224),v=n(139),h=n(486),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{text:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[t._v("mdi-translate")]),t._v("\n                    "+t._s(t.activeLang)+"\n                "),n("v-icon",{attrs:{small:"",right:""}},[t._v("mdi-menu-down")])],1)]}}]),model:{value:t.languageMenu,callback:function(e){t.languageMenu=e},expression:"languageMenu"}},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.locales,(function(e,o){return n("v-list-item",{key:o,on:{click:function(n){return t.linkHandler(e)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VList:m.a,VListItem:v.a,VMenu:h.a})},277:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("48517564",content,!0,{sourceMap:!1})},288:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("6899f8aa",content,!0,{sourceMap:!1})},310:function(t){t.exports=JSON.parse('{"pages":{"main":{"title":"Головна","heroParagraph":"{siteName} - це онлайн платформа для внутрішньо переміщених особ (ВПО), яка має на меті надавати необхідну інформаційну підтримку внутрішньо переміщеним особам на території України.","actionCards":{"getMigrantReference":"Отримати довідку переселенця","getFinancialAssistance":"Отримати грошову допомогу","getMedicalAssistance":"Отримати медичну допомогу","getLegalAssistance":"Безкоштовна правова допомога"}}},"asideMenu":{"homepage":"Домашня сторінка","migrantReference":"Довідка переселенця","financialAssistance":"Фінансова допомога","medicalAssistance":"Медична допомога","legalAssistance":"Юридична допомога","news":"Новини","stopFake":"Стоп фейк"}}')},311:function(t){t.exports=JSON.parse('{"pages":{"main":{"title":"Main","heroParagraph":"{siteName} is an online platform for internally displaced persons (IDPs), which aims to provide the necessary information support to internally displaced persons in Ukraine.","actionCards":{"getMigrantReference":"Get migrant reference","getFinancialAssistance":"Get financial assistance","getMedicalAssistance":"Get medical assistance","getLegalAssistance":"Get legal assistance"}}},"asideMenu":{"homepage":"Homepage","migrantReference":"Migrant reference","financialAssistance":"Financial assistance","medicalAssistance":"Medical assistance","legalAssistance":"Legal assistance","news":"News","stopFake":"Stop fake"}}')},312:function(t){t.exports=JSON.parse('{"pages":{"main":{"title":"Главная","heroParagraph":"{siteName} - это онлайн платформа для внутриперемещенных лиц (ВПЛ), которая имеет целью оказывать необходимую информационную поддержку внутриперемещенным лицам на территории Украины.","actionCards":{"getMigrantReference":"Получить справку переселенца","getFinancialAssistance":"Получить денежную помощь","getMedicalAssistance":"Получить медицинскую помощь","getLegalAssistance":"Бесплатная правовая помощь"}}},"asideMenu":{"homepage":"Домашняя страница","migrantReference":"Справка переселенца","financialAssistance":"Финансовая помощь","medicalAssistance":"Медицинская помощь","legalAssistance":"Юридическая помощь","news":"Новости","stopFake":"Стоп фэйк"}}')},318:function(t,e,n){"use strict";n(8),n(3);var o={name:"DefaultLayout",components:{LangSwitcher:n(226).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-home",title:"asideMenu.homepage",to:"/"},{icon:"mdi-card-account-details",title:"asideMenu.migrantReference",to:"/migrant-reference"},{icon:"mdi-account-cash",title:"asideMenu.financialAssistance",to:"/financial-assistance"},{icon:"mdi-medical-bag",title:"asideMenu.medicalAssistance",to:"/medical-assistance"},{icon:"mdi-scale-balance",title:"asideMenu.legalAssistance",to:"/legal-assistance"},{icon:"mdi-newspaper-variant",title:"asideMenu.news",to:"/news"},{icon:"mdi-close-octagon",title:"asideMenu.stopFake",to:"/stop-fake"}],miniVariant:!1,right:!0}},computed:{defaultLang:function(){return this.$i18n.locale},availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},methods:{switchDrawer:function(){this.drawer=!this.drawer}}},r=(n(410),n(83)),l=n(93),c=n.n(l),d=n(480),f=n(488),m=n(481),v=n(482),h=n(489),_=n(483),w=n(223),x=n(224),L=n(139),A=n(225),M=n(81),C=n(484),V=n(487),y=n(485),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{light:""}},[o("v-navigation-drawer",{attrs:{right:"",temporary:"","mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:"",color:"#fed82f"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{staticClass:"justify-space-between",attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"#fed82f"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"mx-auto",attrs:{cols:"12",sm:"10",lg:"6"}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"pl-0",attrs:{cols:"6",sm:"8",lg:"7"}},[o("nuxt-link",{staticClass:"d-flex align-center main-title",attrs:{to:"/"}},[o("img",{staticClass:"mr-2",attrs:{src:n(377),alt:"Dopomoga site logo",height:"auto",width:"60"}}),t._v(" "),o("h1",{staticClass:"text-subtitle-1 font-weight-bold"},[t._v("ДОПОМОГА")])])],1),t._v(" "),o("v-col",{attrs:{cols:"4",sm:"3",lg:"4"}},[o("LangSwitcher",{attrs:{locales:t.availableLocales,defaultLocale:t.defaultLang}})],1),t._v(" "),o("v-col",{staticClass:"pr-0",attrs:{cols:"1"}},[o("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.switchDrawer.apply(null,arguments)}}})],1)],1)],1)],1)],1)],1),t._v(" "),o("v-main",[o("v-container",[o("Nuxt")],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:"",color:"#fed82f"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"mx-auto",attrs:{cols:"12",sm:"10",lg:"6"}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"pl-0",attrs:{cols:"12",sm:"6",lg:"7"}},[o("span",[t._v("© ГО СОБОРНІСТЬ "+t._s((new Date).getFullYear()))])]),t._v(" "),o("v-col",{staticClass:"pl-0",attrs:{cols:"12",sm:"3",lg:"4"}},[o("a",{staticClass:"d-flex",staticStyle:{"text-decoration":"none",color:"#0461ab"},attrs:{href:"mailto:sobornist.sobornist@gmail.com"}},[o("v-icon",{staticClass:"mr-1",attrs:{color:"#0461ab"}},[t._v("mdi-email")]),t._v("\n                            sobornist.sobornist@gmail.com\n                            ")],1)])],1)],1)],1)],1)],1)],1)}),[],!1,null,"3a046281",null);e.a=component.exports;c()(component,{LangSwitcher:n(226).default}),c()(component,{VApp:d.a,VAppBar:f.a,VAppBarNavIcon:m.a,VCol:v.a,VContainer:h.a,VFooter:_.a,VIcon:w.a,VList:x.a,VListItem:L.a,VListItemAction:A.a,VListItemContent:M.a,VListItemTitle:M.b,VMain:C.a,VNavigationDrawer:V.a,VRow:y.a})},325:function(t,e,n){n(326),t.exports=n(327)},369:function(t,e,n){"use strict";n(277)},370:function(t,e,n){var o=n(23)(!1);o.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=o},377:function(t,e,n){t.exports=n.p+"img/dopomoga-logo-mini.b2a1a19.png"},410:function(t,e,n){"use strict";n(288)},411:function(t,e,n){var o=n(23)(!1);o.push([t.i,".main-title[data-v-3a046281]{color:#0461ab;font-weight:700;text-decoration:none}",""]),t.exports=o},91:function(t,e,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(369),n(83)),l=n(93),c=n.n(l),d=n(480),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[325,9,1,10]]]);