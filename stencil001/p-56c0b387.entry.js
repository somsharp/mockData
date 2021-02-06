import{r as t,h as o,d as i,H as s}from"./p-ac6f7314.js";import{A as e}from"./p-9fb74208.js";class r{constructor(o){t(this,o),this.stockInputValid=!1,this.loading=!1}stockSymbolChanged(t,o){t!==o&&(this.stockUserInput=t,this.stockInputValid=!0,this.fetchStockPrice(t))}onUserInput(t){this.stockUserInput=t.target.value,this.stockInputValid=""!==this.stockUserInput.trim()}onFetchStockPrice(t){t.preventDefault(),this.stockSymbol=this.stockInput.value}componentWillLoad(){console.log("componentWillLoad"),console.log(this.stockSymbol)}componentDidLoad(){console.log("componentDidLoad"),this.stockSymbol&&(this.stockUserInput=this.stockSymbol,this.stockInputValid=!0,this.fetchStockPrice(this.stockSymbol))}componentWillUpdate(){console.log("componentWillUpdate")}componentDidUpdate(){console.log("componentDidUpdate")}componentDidUnload(){console.log("componentDidUnload")}onStockSymbolSelected(t){console.log("stock symbol selected: "+t.detail),t.detail&&t.detail!==this.stockSymbol&&(this.stockSymbol=t.detail)}fetchStockPrice(t){this.loading=!0,fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${t}&apikey=${e}`).then(t=>{if(200!==t.status)throw new Error("Invalid!");return t.json()}).then(t=>{if(!t["Global Quote"]["05. price"])throw new Error("Invalid symbol!");this.error=null,this.fetchedPrice=+t["Global Quote"]["05. price"],this.loading=!1}).catch(t=>{this.error=t.message,this.fetchedPrice=null,this.loading=!1})}hostData(){return{class:this.error?"error":""}}__stencil_render(){let t=o("p",null,"Please enter a symbol!");return this.error&&(t=o("p",null,this.error)),this.fetchedPrice&&(t=o("p",null,"Price: $",this.fetchedPrice)),this.loading&&(t=o("uc-spinner",null)),[o("form",{onSubmit:this.onFetchStockPrice.bind(this)},o("input",{id:"stock-symbol",ref:t=>this.stockInput=t,value:this.stockUserInput,onInput:this.onUserInput.bind(this)}),o("button",{type:"submit",disabled:!this.stockInputValid||this.loading},"Fetch")),o("div",null,t)]}get el(){return i(this)}static get watchers(){return{stockSymbol:["stockSymbolChanged"]}}render(){return o(s,this.hostData(),this.__stencil_render())}}r.style=":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:#e79804}form input{font:inherit;color:#3b013b;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid #3b013b;background:#3b013b;color:white;cursor:pointer}form button:hover,form button:active{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}";export{r as uc_stock_price}