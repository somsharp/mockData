var __awaiter=this&&this.__awaiter||function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function r(t){try{l(o.next(t))}catch(e){a(e)}}function s(t){try{l(o["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):i(t.value).then(r,s)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,i,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(a=r[0]&2?i["return"]:r[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;if(i=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:n.label++;return{value:r[1],done:false};case 5:n.label++;i=r[1];r=[0];continue;case 7:r=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){n.label=r[1];break}if(r[0]===6&&n.label<a[1]){n.label=a[1];a=r;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(r);break}if(a[2])n.ops.pop();n.trys.pop();continue}r=e.call(t,n)}catch(s){r=[6,s];i=0}finally{o=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-2cf3beef.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var o=':host{font-family:"Segoe UI", "Segoe UI Semibold", "Segoe UI Web (West European)",\n  -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;}aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;z-index:100}:host([opened]) aside{left:0}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}#tabs button{all:unset;text-align:left;padding:0.15rem .5rem;margin-right:30px;cursor:pointer}#tabs button.active{border-bottom:2px solid var(--communication-background,rgba(0, 120, 212, 1))}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;pointer-events:none;-webkit-transition:opacity 0.3s ease-out;transition:opacity 0.3s ease-out}:host([opened]) .backdrop{opacity:1;pointer-events:all}.headerRow{width:100%;color:rgb(0, 0, 0)}.headerArea{height:40px;width:100%;display:grid;color:rgb(0, 0, 0);grid-template-columns:auto 40px}.titleTextContainer{height:100%;padding-left:15px;display:table}.titleText{display:table-cell;vertical-align:bottom;color:rgb(66, 63, 63)}.closeIconContainer{height:40px;width:40px;text-align:center;display:table}';var i=function(){function t(t){e(this,t);this.showTab2Info=false}t.prototype.onCloseDrawer=function(){this.opened=false};t.prototype.onContentChange=function(t){this.showTab2Info=t==="tab2"};t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.opened=true;return[2]}))}))};t.prototype.render=function(){var t=n("slot",{name:"tab1"});if(this.showTab2Info){t=n("slot",{name:"tab2"})}return[n("div",{class:"backdrop",onClick:this.onCloseDrawer.bind(this)}),n("aside",null,n("header",null,n("div",{class:"headerRow"},n("div",{class:"headerArea"},n("div",{class:"titleTextContainer"},n("h1",{class:"titleText",tabindex:"0",id:"HeaderOne","aria-label":this.drawerTitle},this.drawerTitle)),n("div",{class:"closeIconContainer"},n("dxp-icon-button",{"button-type":"close","aria-text":"Close Modal",onClick:this.onCloseDrawer.bind(this)}))))),n("section",{id:"tabs"},n("button",{class:!this.showTab2Info?"active":"",onClick:this.onContentChange.bind(this,"tab1")},"Page"),n("button",{class:this.showTab2Info?"active":"",onClick:this.onContentChange.bind(this,"tab2")},"Component")),n("main",null,t))]};return t}();t("dxp_side_drawer",i);i.style=o}}}));