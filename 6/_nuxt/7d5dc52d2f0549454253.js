(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{456:function(t,e,n){},457:function(t,e,n){},463:function(t,e,n){t.exports=n.p+"img/db6de2e.svg"},469:function(t,e,n){"use strict";n(13),n(10),n(7),n(6),n(11);var l=n(28),r=n(2),o=(n(456),n(8)),c=n(179),d=n(96),v=n(27),m=n(97),h=n(22),f=n(38),C=n(66),y=n(99),_=n(12);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(v.a,y.a,C.a,h.a,Object(m.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return x({"v-chip":!0},C.a.options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(C.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(l.a)(e,2),r=n[0],o=n[1];t.$attrs.hasOwnProperty(r)&&Object(_.a)(r,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),l=n.tag,data=n.data;data.attrs=x({},data.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(l,this.setTextColor(r,data),e)}})},472:function(t,e,n){t.exports=n.p+"img/59e65a7.png"},473:function(t,e,n){"use strict";n(25);var l=n(1).default.extend({name:"TimelineItem",props:{active:{type:Boolean,required:!1,default:!1},activeAfter:{type:Number,required:!1,default:0},activeBefore:{type:Number,required:!1,default:0},date:{type:String,required:!0},monthYear:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!1,default:""}},computed:{isActive:function(){if(this.active)return!0;var t=Date.now();return t>=this.activeAfter&&t<=this.activeBefore}}}),r=(n(474),n(20)),o=n(23),c=n.n(o),d=n(440),v=n(167),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{class:{active:t.isActive},attrs:{id:"timeline-item","fill-height":""}},[n("v-responsive",{staticClass:"pa-0 ma-0 align-self-start",attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?3:1}},[n("div",{staticStyle:{width:"100%"},attrs:{align:"left"}},[n("div",{staticClass:"display-2 font-weight-black date"},[t._v("\n        "+t._s(t.date)+"\n      ")]),t._v(" "),n("div",{staticClass:"title mt-2 font-weight-black date"},[t._v("\n        "+t._s(t.monthYear)+"\n      ")]),t._v(" "),n("div",{staticClass:"subtitle-1 mt-2 font-weight-black mainevent-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"caption font-weight-light description"},[t._v("\n        "+t._s(t.description)+"\n      ")])])])],1)}),[],!1,null,"4de74da0",null);e.a=component.exports;c()(component,{VContainer:d.a,VResponsive:v.a})},474:function(t,e,n){"use strict";var l=n(457);n.n(l).a},476:function(t,e,n){"use strict";n(143);var l=n(100);e.a=Object(l.a)("flex")},477:function(t,e,n){t.exports=n.p+"img/97cd106.png"},488:function(t,e,n){t.exports=n.p+"img/eb7cc88.png"},498:function(t,e,n){t.exports=n.p+"img/fa5a4d9.png"},499:function(t,e,n){t.exports=n.p+"img/2509a9f.png"},500:function(t,e,n){t.exports=n.p+"img/6eec2ee.jpg"},501:function(t,e,n){},566:function(t,e,n){"use strict";var l=n(501);n.n(l).a},633:function(t,e,n){"use strict";n.r(e);var l=n(1),r=l.default.extend({name:"CaptureTheFlagIntro"}),o=(n(566),n(20)),c=n(23),d=n.n(c),v=n(429),m=n(469),h=n(439),f=n(440),C=n(139),y=n(441),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{staticClass:"d-flex flex-column",staticStyle:{"min-height":"100vh"},attrs:{"py-0":"","px-4":""}},[l("div",{staticClass:"d-flex flex-column",staticStyle:{flex:"1"}},[l("div",{staticClass:"d-flex mt-12",staticStyle:{flex:"1"}},[l("v-row",{attrs:{wrap:""}},[l("v-col",{attrs:{cols:12,md:7,"align-self":"center"}},[l("div",{staticClass:"display-1 font-weight-bold",staticStyle:{color:"#0B909A"}},[t._v("\n            Capture the Flag\n          ")]),t._v(" "),l("p",{staticClass:"mt-4 grey--text text--darken-1"},[t._v("\n            Capture the Flag adalah kompetisi dimana setiap peserta harus saling bersaing sebagai tim untuk mengumpulkan poin sebanyak mungkin dengan memecahkan persoalan yang diberikan.\n            Dalam kurun waktu yang terbatas, peserta harus menggunakan setiap kakas dan pengetahuan yang mereka miliki untuk mencari, mengakali, dan mengeksploitasi celah-celah keamanan untuk mendapatkan poin dalam bentuk flag tersembunyi dalam setiap soal.\n          ")]),t._v(" "),l("div",{staticClass:"mt-8 caption"},[t._v("\n            Kategori\n             \n            "),l("v-chip",{staticClass:"black white--text caption",attrs:{small:"",color:"black"}},[t._v("\n              Mahasiswa & SMA/Sederajat\n            ")])],1),t._v(" "),l("div",{staticClass:"mt-2 caption"},[t._v("\n            Biaya Pendaftaran\n\n            "),l("v-chip",{staticClass:"white--text caption",attrs:{small:"",color:"#21C7C5"}},[t._v("\n              Rp150.000,-\n            ")])],1),t._v(" "),l("div",{staticClass:"mt-8"},[l("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://arkav.me/guidebook-ctf"}},[l("v-btn",{staticClass:"text-none mr-2 mt-2",attrs:{large:"",rounded:"",outlined:"",color:"#0B909A"}},[t._v("\n                Download guidebook\n              ")])],1),t._v(" "),l("v-btn",{staticClass:"text-none mt-2",attrs:{large:"",rounded:"",color:"primary",elevation:"0",to:"/dashboard/competition/capture-the-flag",disabled:""}},[t._v("\n              Pendaftaran ditutup\n            ")])],1)]),t._v(" "),l("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:12,lg:3,"offset-lg":2,md:4,"offset-md":1,align:"center","align-self":"center"}},[l("v-img",{attrs:{width:"100%","fill-height":"",cover:"","aspect-ratio":.8,src:n(500)}})],1)],1)],1),t._v(" "),l("div",{staticClass:"pa-6",attrs:{align:"center"}},[l("div",{staticClass:"font-weight-bold",staticStyle:{color:"#0435B5"}},[t._v("\n        Penasaran?\n      ")]),t._v(" "),l("v-img",{staticClass:"mt-2 vert-move",attrs:{src:n(463),width:"20"}})],1)])])}),[],!1,null,"0c1e73c8",null),_=component.exports;d()(component,{VBtn:v.a,VChip:m.a,VCol:h.a,VContainer:f.a,VImg:C.a,VRow:y.a});var k=l.default.extend({name:"CaptureTheFlagPrize"}),x=n(167),w=Object(o.a)(k,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{"px-4":""}},[l("div",{staticClass:"headline font-weight-bold"},[t._v("\n    Hadiah Pemenang\n  ")]),t._v(" "),l("div",[l("v-row",{staticClass:"mt-4"},[l("v-col",{staticClass:"hidden-xs-only",attrs:{cols:4,"align-self":"end"}},[l("v-img",{attrs:{src:n(498)}})],1),t._v(" "),l("v-col",{attrs:{cols:12,sm:4,"align-self":"end"}},[l("v-responsive",{staticClass:"white--text pa-0 ma-0",staticStyle:{background:"#FF084F"},attrs:{"aspect-ratio":3}},[l("v-container",{staticClass:"pa-0",attrs:{"fill-height":"","justify-content-center":""}},[l("div",{staticStyle:{width:"100%"},attrs:{align:"center"}},[l("div",{staticClass:"display-1 font-weight-bold"},[t._v("\n                Rp 10.000.000,-\n              ")]),t._v(" "),l("div",{staticClass:"title mt-2"},[t._v("\n                Juara 1\n              ")])])])],1)],1),t._v(" "),l("v-col",{staticClass:"hidden-xs-only",attrs:{cols:4,"align-self":"end"}},[l("v-img",{attrs:{src:n(488)}})],1)],1),t._v(" "),l("v-row",[l("v-col",{attrs:{cols:12,sm:4,"align-self":"end"}},[l("v-responsive",{staticClass:"white--text pa-0 ma-0",staticStyle:{background:"#0578D3"},attrs:{"aspect-ratio":3}},[l("v-container",{staticClass:"pa-0",attrs:{"fill-height":"","justify-content-center":""}},[l("div",{staticStyle:{width:"100%"},attrs:{align:"center"}},[l("div",{staticClass:"display-1 font-weight-bold"},[t._v("\n                Rp 7.500.000,-\n              ")]),t._v(" "),l("div",{staticClass:"title mt-2"},[t._v("\n                Juara 2\n              ")])])])],1)],1),t._v(" "),l("v-col",{staticClass:"hidden-xs-only",attrs:{cols:4,"align-self":"end"}},[l("v-img",{attrs:{src:n(477)}})],1),t._v(" "),l("v-col",{attrs:{cols:12,sm:4,"align-self":"end"}},[l("v-responsive",{staticClass:"white--text pa-0 ma-0",staticStyle:{background:"#7608FF"},attrs:{"aspect-ratio":3}},[l("v-container",{staticClass:"pa-0",attrs:{"fill-height":"","justify-content-center":""}},[l("div",{staticStyle:{width:"100%"},attrs:{align:"center"}},[l("div",{staticClass:"display-1 font-weight-bold"},[t._v("\n                Rp 5.000.000,-\n              ")]),t._v(" "),l("div",{staticClass:"title mt-2"},[t._v("\n                Juara 3\n              ")])])])],1)],1)],1),t._v(" "),l("v-row",[l("v-col",{staticClass:"hidden-xs-only",attrs:{cols:4,"align-self":"end"}},[l("v-img",{attrs:{src:n(499)}})],1),t._v(" "),l("v-col",{attrs:{cols:12,sm:4,"align-self":"end"}},[l("v-responsive",{staticClass:"white--text pa-0 ma-0",staticStyle:{background:"#FFBA07"},attrs:{"aspect-ratio":3}},[l("v-container",{staticClass:"pa-0",attrs:{"fill-height":"","justify-content-center":""}},[l("div",{staticStyle:{width:"100%"},attrs:{align:"center"}},[l("div",{staticClass:"display-1 font-weight-bold"},[t._v("\n                Rp 3.000.000,-\n              ")]),t._v(" "),l("div",{staticClass:"title mt-2"},[t._v("\n                SMA Terbaik\n              ")])])])],1)],1),t._v(" "),l("v-col",{staticClass:"hidden-xs-only",attrs:{cols:4,"align-self":"end"}},[l("v-img",{attrs:{src:n(472)}})],1)],1)],1)])}),[],!1,null,"31aea013",null),T=w.exports;d()(w,{VCol:h.a,VContainer:f.a,VImg:C.a,VResponsive:x.a,VRow:y.a});var S=n(473),O=l.default.extend({name:"CaptureTheFlagTimeline",components:{TimelineItem:S.a}}),j=Object(o.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"px-4":""}},[e("div",{staticClass:"headline font-weight-bold"},[this._v("\n    Timeline Kegiatan\n  ")]),this._v(" "),e("v-row",{staticClass:"mt-4",attrs:{align:"stretch"}},[e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-before":Date.parse("2019-12-01T00:00:00+07:00"),date:"28","month-year":"Oktober 2019",title:"Pembukaan Pendaftaran",description:"Pendaftaran dilakukan secara online"}})],1),this._v(" "),e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-after":Date.parse("2019-12-01T00:00:00+07:00"),"active-before":Date.parse("2019-12-01T23:59:59+07:00"),date:"01","month-year":"Desember 2019",title:"Penutupan Pendaftaran & Batas Pembayaran"}})],1),this._v(" "),e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-after":Date.parse("2019-11-25T00:00:00+07:00"),"active-before":Date.parse("2020-01-04T23:59:59+07:00"),date:"04","month-year":"Januari 2020",title:"Warmup"}})],1),this._v(" "),e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-after":Date.parse("2020-01-05T00:00:00+07:00"),"active-before":Date.parse("2020-01-05T23:59:59+07:00"),date:"05","month-year":"Januari 2020",title:"Penyisihan"}})],1),this._v(" "),e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-after":Date.parse("2020-01-06T00:00:00+07:00"),"active-before":Date.parse("2020-01-17T23:59:59+07:00"),date:"10-17","month-year":"Januari 2020",title:"Pengumuman Finalis",description:"Finalis akan diumumkan di website Arkavidia"}})],1),this._v(" "),e("v-col",{attrs:{cols:6,sm:3}},[e("TimelineItem",{attrs:{"active-after":Date.parse("2020-01-18T00:00:00+07:00"),"active-before":Date.parse("2020-02-09T23:59:59+07:00"),date:"09","month-year":"Februari 2020",title:"Final & Awarding Night",description:"Final & Awarding Night dilaksanakan di Institut Teknologi Bandung"}})],1)],1)],1)}),[],!1,null,"031ccd88",null),F=j.exports;d()(j,{VCol:h.a,VContainer:f.a,VRow:y.a});var P=l.default.extend({components:{CaptureTheFlagIntro:_,CaptureTheFlagPrize:T,CaptureTheFlagTimeline:F},data:function(){return{faqItems:[{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}},head:function(){return{title:"Capture the Flag"}}}),B=n(476),D=n(442),I=Object(o.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticStyle:{background:"white"},attrs:{column:""}},[e("v-flex",[e("CaptureTheFlagIntro"),this._v(" "),e("CaptureTheFlagPrize"),this._v(" "),e("CaptureTheFlagTimeline")],1)],1)}),[],!1,null,null,null);e.default=I.exports;d()(I,{VFlex:B.a,VLayout:D.a})}}]);