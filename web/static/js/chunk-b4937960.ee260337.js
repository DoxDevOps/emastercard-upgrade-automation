(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4937960"],{"141f":function(e,t,r){"use strict";var n=r("7c04"),a=r.n(n);a.a},"336a":function(e,t,r){"use strict";var n=r("df61"),a=r.n(n);a.a},"4dfe":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:e.submitDates}},[e._v("Submit")])])])])])},a=[],o=r("f0ca"),s=r.n(o),i=r("c1df"),l=r.n(i),c=(r("6f3c"),r("1789")),u={components:{DatePick:s.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:c["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=l()(this.startDate).format("YYYY-MM-DD"),this.endDate=l()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(e,t){return c["a"].parse(e,t)},formatDate:function(e,t){return c["a"].format(e,t)}},mounted:function(){var e=this;setTimeout((function(){return e.initDates()}),300)}},d=u,p=(r("336a"),r("2877")),f=Object(p["a"])(d,n,a,!1,null,"15deca72",null);t["a"]=f.exports},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),s=r("50c4"),i=r("a691"),l=r("1d80"),c=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,_=v?"$":"$0";return[function(r,n){var a=l(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!v&&b||"string"===typeof n&&-1===n.indexOf(_)){var o=r(t,e,this,n);if(o.done)return o.value}var l=a(e),f=String(this),h="function"===typeof n;h||(n=String(n));var g=l.global;if(g){var w=l.unicode;l.lastIndex=0}var y=[];while(1){var Y=u(l,f);if(null===Y)break;if(y.push(Y),!g)break;var M=String(Y[0]);""===M&&(l.lastIndex=c(f,s(l.lastIndex),w))}for(var k="",O=0,C=0;C<y.length;C++){Y=y[C];for(var S=String(Y[0]),P=d(p(i(Y.index),f.length),0),x=[],E=1;E<Y.length;E++)x.push(m(Y[E]));var j=Y.groups;if(h){var A=[S].concat(x,P,f);void 0!==j&&A.push(j);var R=String(n.apply(void 0,A))}else R=D(S,f,P,x,j,n);P>=O&&(k+=f.slice(O,P)+R,O=P+S.length)}return k+f.slice(O)}];function D(e,r,n,a,s,i){var l=n+e.length,c=a.length,u=g;return void 0!==s&&(s=o(s),u=h),t.call(i,u,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(l);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>c){var d=f(u/10);return 0===d?t:d<=c?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):t}i=a[u-1]}return void 0===i?"":i}))}}))},"75a6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:e.fetchDates}})],1)]),r("report-overlay",{attrs:{reportLoading:e.reportLoading}},[r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config,"show-loader":e.reportLoading,actions:e.actions},on:{"on-download":e.onDownload},scopedSlots:e._u([e._l(e.slots,(function(t){return{key:t,fn:function(n){return[r("span",{key:t,class:n.cell_value.length>0?"drillable":"",on:{click:function(t){return e.fetchDrillDown(n.cell_value)}}},[e._v(e._s(n.cell_value.length>0?n.cell_value.length:0))])]}}}))],null,!0)})],1)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:e.drillClients,fields:e.columns,"per-page":e.perPage,"current-page":e.currentPage}}),r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rowCount,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[e._v("Current Page: "+e._s(e.currentPage))])],1)],1)},a=[],o=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),s=(r("96cf"),r("1da1")),i=r("8051"),l=r("8e71"),c=r("7c08"),u=r("4dfe"),d=(r("8d9f"),r("ebd8")),p=r("12f9"),f=r("c1df"),h=r.n(f),g=r("2f62");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"txML",components:{ReportOverlay:l["a"],"top-nav":d["a"],"side-bar":c["a"],sdPicker:u["a"],VueBootstrap4Table:p["a"]},methods:{redirect:function(e){this.$router.push(e)},fetchDates:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.rows=[],r.prev=1,t.startDate=e[0],t.endDate=e[1],t.reportTitle="PEPFAR "+sessionStorage.location_name+" TX ML report ",t.reportTitle+=h()(e[0]).format("DDMMMYYYY"),t.reportTitle+=" - "+h()(e[1]).format("DDMMMYYYY"),t.reportLoading=!0,r.next=10,t.loadXLdata();case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](1),console.error(r.t0),t.router.push({name:"error",params:{message:r.t0.message}});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loadXLdata:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="tx_ml?date="+h()().format("YYYY-MM-DD"),t+="&start_date="+this.startDate,t+="&end_date="+this.endDate,t+="&program_id=1",e.next=6,i["a"].get(t);case 6:if(r=e.sent,200!==r.status){e.next=13;break}return e.t0=this,e.next=11,r.json();case 11:e.t1=e.sent,e.t0.loadGroupData.call(e.t0,e.t1);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchDrillDown:function(e){var t=this;e.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],e.forEach((function(e){t.getClient(e)})))},getClient:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="patients/"+t,e.next=3,i["a"].get(r,{},{});case 3:n=e.sent,200===n.status&&n.json().then((function(e){return a.drillClients.push(a.parsePatient(e))}));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),parsePatient:function(e){var t=e.person.birthdate,r=e.person.gender,n="";e.person.names[0].given_name,e.person.names[0].family_name,e.patient_identifiers.filter((function(e){return 4===e.identifier_type?e.identifier:""}));try{var a=e.person.addresses[0].city_village;e.person.addresses[0].address2,e.person.person_attributes[1].value}catch(i){a=""}try{for(var o=0;o<e.patient_identifiers.length;o++)4==e.patient_identifiers[o]["identifier_type"]&&(n=e.patient_identifiers[o]["identifier"])}catch(i){console.log(i)}var s={};return s.dob=t,s.arv_number=n,s.gender=r,s.current_village=a,s},hasRow:function(e,t){return this.rows.filter((function(t){t.age_group===e&&t.gender})).length>0},loadGroupData:function(e){for(var t=1,r=["F","M"],n=this.ageGroups,a=0;a<r.length;a++)for(var o=0;o<n.length;o++){var s=n[o];if(e.hasOwnProperty(s)){var i=e[s],l=r[a];if(i.hasOwnProperty(l)&&!this.hasRow(s,l)){var c=i[l];this.rows.push({number:t++,age_group:s,gender:l,defaulted_new_registration:c[0],defaulted_old_registration:c[1],died:c[2],stopped:c[3],transferred_out:c[4],unknown:c[5]})}else this.rows.push({number:t++,age_group:n[o],gender:r[a],defaulted_new_registration:0,defaulted_old_registration:0,died:0,stopped:0,transferred_out:0,unknown:0})}else this.rows.push({number:t++,age_group:n[o],gender:r[a],defaulted_new_registration:0,defaulted_old_registration:0,died:0,stopped:0,transferred_out:0,unknown:0})}this.reportLoading=!1},onDownload:function(){var e=null;this.columns.forEach((function(t){e+='"'.concat(t.label,'",')})),e=e.replace("null",""),this.rows.forEach((function(t){e+="\n",Object.keys(t).forEach((function(r){var n=t[r];Array.isArray(t[r])&&(n=t[r].length),e+='"'.concat(n,'",')}))})),e+="\n",e+="Date Created:  ".concat(h()().format("YYYY-MM-DD:h:m:s")," \n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion," \n                          API Version ").concat(sessionStorage.APIVersion);for(var t=0;t<34;t++)e+=",";var r=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var n=document.createElement("a");n.href=window.URL.createObjectURL(r),n.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},data:function(){var e;return e={drillClients:[],perPage:15,currentPage:1,columns:[{key:"arv_number",label:"ARV Number"},{key:"dob",label:"DOB"},{key:"gender",label:"Gender"},{key:"current_village",label:"Village"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"],showLoader:!1,slots:["defaulted_new_registration","defaulted_old_registration","died","stopped","transferred_out","unknown"],rows:[]},Object(o["a"])(e,"columns",[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group",sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"Defaulted (new registration)",name:"defaulted_new_registration",slot_name:"defaulted_new_registration",sort:!0},{label:"Defaulted (old registration)",name:"defaulted_old_registration",slot_name:"defaulted_old_registration",sort:!0},{label:"Died",name:"died",slot_name:"died",sort:!0},{label:"Stopped",name:"stopped",slot_name:"stopped",sort:!0},{label:"Transferred out",name:"transferred_out",slot_name:"transferred_out",sort:!0},{label:"Unknown",name:"unknown",slot_name:"unknown",sort:!0}]),Object(o["a"])(e,"config",{card_title:"TX ML: Clients that were Alive and on treatment before the reporting period and their “next appointment date / drug runout” date falls within the reporting period. 30 or more days have gone between their appointment date and the end of the reporting period without any clinical dispensation visit.",show_refresh_button:!1,show_reset_button:!1}),Object(o["a"])(e,"actions",[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]),e},computed:v({},Object(g["c"])(["location"]),{rowCount:function(){return this.drillClients.length}}),mounted:function(){}},_=b,D=(r("141f"),r("2877")),w=Object(D["a"])(_,n,a,!1,null,"72888252",null);t["default"]=w.exports},"7c04":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8d9f":function(e,t,r){"use strict";var n=r("c1df"),a=r.n(n);t["a"]=function(){var e="YYYY-MM-DD",t="DD/MM/YYYY";function r(e){var t=e.getMonth(),r=e.getFullYear();return t<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:t<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:t<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function n(e){var t=e.getMonth(),r=e.getFullYear();return t<3?"Q1-".concat(r):t<6?"Q2-".concat(r):t<9?"Q3-".concat(r):"Q4-".concat(r)}function o(t){return a()(t).format(e)}function s(e){return a()(e).format(t)}return{ISO_FORMAT:e,LOCAL_FORMAT:t,dateQuarter:r,dateQuarterStr:n,isoDate:o,localDate:s}}()},"8e71":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-overlay",{attrs:{show:e.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:e._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[e.reportSelected?e._e():r("h1",[e._v("No Report Selected")]),e.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):e._e()],1)]},proxy:!0}])},[e._t("default")],2)},a=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},s=o,i=r("2877"),l=Object(i["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},df61:function(e,t,r){}}]);
//# sourceMappingURL=chunk-b4937960.ee260337.js.map