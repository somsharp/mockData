import{r as t,h as i}from"./p-ac6f7314.js";class e{constructor(i){t(this,i)}showClickHandler(){event.preventDefault(),this.previewElement.innerHTML=this.aboutInput.value.trim()}render(){return i("form",{onSubmit:this.showClickHandler.bind(this)},i("textarea",{id:"about",ref:t=>this.aboutInput=t}),i("button",{type:"submit"},"Preview"),i("div",{id:"Preview",ref:t=>this.previewElement=t}))}}e.style="textarea{width:75%}button{display:block}";export{e as dxp_html_input}