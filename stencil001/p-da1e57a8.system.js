var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,e=0,n=arguments.length;e<n;e++)r+=arguments[e].length;for(var t=Array(r),a=0,e=0;e<n;e++)for(var i=arguments[e],o=0,u=i.length;o<u;o++,a++)t[a]=i[o];return t};System.register([],(function(r){"use strict";return{execute:function(){var e=r("g",(function(r,e){if(e===void 0){e=r}return r.shadowRoot||e}));var n=r("r",(function(r){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(r)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(r)}return setTimeout(r)}));var t=r("h",(function(r){return!!r.shadowRoot&&!!r.attachShadow}));var a=r("f",(function(r){var e=r.closest("ion-item");if(e){return e.querySelector("ion-label")}return null}));var i=r("a",(function(r,e,n,a,i){if(r||t(e)){var o=e.querySelector("input.aux-input");if(!o){o=e.ownerDocument.createElement("input");o.type="hidden";o.classList.add("aux-input");e.appendChild(o)}o.disabled=i;o.name=n;o.value=a||""}}));var o=r("c",(function(r,e,n){return Math.max(r,Math.min(e,n))}));var u=r("b",(function(r,e){if(!r){var n="ASSERT: "+e;console.error(n);debugger;throw new Error(n)}}));var f=r("n",(function(r){return r.timeStamp||Date.now()}));var s=r("p",(function(r){if(r){var e=r.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(r.pageX!==undefined){return{x:r.pageX,y:r.pageY}}}return{x:0,y:0}}));var c=r("i",(function(r){var e=document.dir==="rtl";switch(r){case"start":return e;case"end":return!e;default:throw new Error('"'+r+'" is not a valid value for [side]. Use "start" or "end" instead.')}}));var v=r("d",(function(r,e){var n=r._original||r;return{_original:r,emit:d(n.emit.bind(n),e)}}));var d=r("e",(function(r,e){if(e===void 0){e=0}var n;return function(){var t=[];for(var a=0;a<arguments.length;a++){t[a]=arguments[a]}clearTimeout(n);n=setTimeout.apply(void 0,__spreadArrays([r,e],t))}}))}}}));