import{e,w as o,r as t,h as n,H as i,d as a}from"./p-ac6f7314.js";import{g as s}from"./p-62d15a4b.js";import{c as r}from"./p-71c4eb61.js";const l=e=>{const o=document.querySelector(e+".ion-cloned-element");if(null!==o)return o;const t=document.createElement(e);return t.classList.add("ion-cloned-element"),t.style.setProperty("display","none"),document.body.appendChild(t),t},c=e=>{if(!e)return;const o=e.querySelectorAll("ion-toolbar");return{el:e,toolbars:Array.from(o).map(e=>{const o=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))||[]}})||[]}},d=(e,o)=>{void 0===o?e.background.style.removeProperty("--opacity"):e.background.style.setProperty("--opacity",o.toString())},h=(e,o=!0)=>{o?e.el.classList.remove("header-collapse-condense-inactive"):e.el.classList.add("header-collapse-condense-inactive")};class p{constructor(e){t(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}componentDidUnload(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const e="condense"===this.collapse,t=!(!e||"ios"!==s(this))&&e;if(!t&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(t&&!this.collapsibleHeaderInitialized){const e=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),t=e?e.querySelector("ion-content"):null;o(()=>{l("ion-title").size="large",l("ion-back-button")}),await this.setupCollapsibleHeader(t,e)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCollapsibleHeader(t,n){if(!t||!n)return void console.error("ion-header requires a content to collapse, make sure there is an ion-content.");if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await t.getScrollElement();const i=n.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(i).find(e=>"condense"!==e.collapse),!this.collapsibleMainHeader)return;const a=c(this.collapsibleMainHeader),s=c(this.el);a&&s&&(h(a,!1),a.toolbars.forEach(e=>{d(e,0)}),this.intersectionObserver=new IntersectionObserver(e=>{((e,t,n)=>{o(()=>{((e,o)=>{if(!e[0].isIntersecting)return;const t=e[0].intersectionRatio>.9?0:100*(1-e[0].intersectionRatio)/75;o.toolbars.forEach(e=>{d(e,1===t?void 0:t)})})(e,t);const o=e[0],i=o.intersectionRect,a=i.width*i.height,s=0===a&&0==o.rootBounds.width*o.rootBounds.height,r=Math.abs(i.left-o.boundingClientRect.left),l=Math.abs(i.right-o.boundingClientRect.right);s||a>0&&(r>=5||l>=5)||(o.isIntersecting?(h(t,!1),h(n)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(h(t),h(n,!1),d(t.toolbars[0])))})})(e,a,s)},{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(s.toolbars[s.toolbars.length-1].el),this.contentScrollCallback=()=>{((t,n,i)=>{e(()=>{const e=r(1,1+-t.scrollTop/500,1.1);null===i.querySelector("ion-refresher.refresher-native")&&o(()=>{((e=[],o=1,t=!1)=>{e.forEach(e=>{const n=e.ionTitleEl,i=e.innerTitleEl;n&&"large"===n.size&&(i.style.transformOrigin="left center",i.style.transition=t?"all 0.2s ease-in-out":"",i.style.transform=`scale3d(${o}, ${o}, 1)`)})})(n.toolbars,e)})})})(this.scrollEl,s,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),o(()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")}),this.collapsibleHeaderInitialized=!0)}render(){const{translucent:e}=this,o=s(this);return n(i,{role:"banner",class:{[o]:!0,["header-"+o]:!0,"header-translucent":this.translucent,["header-collapse-"+(this.collapse||"none")]:!0,["header-translucent-"+o]:this.translucent}},"ios"===o&&e&&n("div",{class:"header-background"}),n("slot",null))}get el(){return a(this)}}p.style={ios:"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}"};export{p as ion_header}