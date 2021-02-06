System.register(["./p-2cf3beef.system.js","./p-fd600129.system.js"],(function(o){"use strict";var r,t,e,n;return{setters:[function(o){r=o.r;t=o.c;e=o.h},function(o){n=o.A}],execute:function(){var i=":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background:var(--color-primary, black);color:var(--color-primary-inverse, white);cursor:pointer}form button:hover,form button:active{background:var(--color-primary-highlight, grey);border-color:var(--color-primary-highlight, grey)}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem 0;padding:0.25rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background:var(--color-primary, black);color:var(--color-primary-inverse, white)}";var c=function(){function o(o){r(this,o);this.searchResults=[];this.loading=false;this.ucSymbolSelected=t(this,"ucSymbolSelected",7)}o.prototype.onFindStocks=function(o){var r=this;o.preventDefault();this.loading=true;var t=this.stockNameInput.value;fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+t+"&apikey="+n).then((function(o){return o.json()})).then((function(o){r.searchResults=o["bestMatches"].map((function(o){return{name:o["2. name"],symbol:o["1. symbol"]}}));console.log(r.searchResults);r.loading=false})).catch((function(o){console.log(o);r.loading=false}))};o.prototype.onSelectSymbol=function(o){console.log("clicked symbol:",o);this.ucSymbolSelected.emit(o)};o.prototype.render=function(){var o=this;var r=e("ul",null,this.searchResults.map((function(r){return e("li",{onClick:o.onSelectSymbol.bind(o,r.symbol)},e("strong",null,r.symbol)," - ",r.name)})));if(this.loading){r=e("uc-spinner",null)}return[e("form",{onSubmit:this.onFindStocks.bind(this)},e("input",{id:"stock-symbol",ref:function(r){return o.stockNameInput=r}}),e("button",{type:"submit"},"Find!")),r]};return o}();o("uc_stock_finder",c);c.style=i}}}));