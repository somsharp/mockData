import{r as s,h as t,H as i}from"./p-ac6f7314.js";import{g as o}from"./p-62d15a4b.js";import"./p-f3a0c163.js";import"./p-71c4eb61.js";import"./p-a494fa22.js";import{m as a}from"./p-e170b9a3.js";import{u as e}from"./p-4038662e.js";class r{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await e(this.menu)}render(){const s=o(this),a=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":a?"true":null,class:{[s]:!0,"menu-toggle-hidden":a}},t("slot",null))}}r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}