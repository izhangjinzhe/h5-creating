(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9c7eb92"],{"18c8":function(t,e,n){},c260:function(t,e,n){"use strict";n("18c8")},c897:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("component-ls"),n("div",{staticClass:"right",on:{drop:function(e){return e.stopPropagation(),e.preventDefault(),t.drop.apply(null,arguments)},dragover:function(t){return t.preventDefault(),function(t){return t.dataTransfer.dropEffect="copy"}.apply(null,arguments)}}},[n("edit")],1),n("attr-ls")],1)},s=[],a=n("5530"),c=(n("c740"),n("2f62")),r={computed:Object(a["a"])({},Object(c["b"])(["componentLs"])),methods:{drop:function(t){var e=JSON.parse(t.dataTransfer.getData("dragComponent"));"com-ls"===t.target.className?(e.styles.left=t.offsetX,e.styles.top=t.offsetY):(console.log(t),e.styles.left=this.componentLs[this.componentLs.findIndex((function(e){return e.id===("group-mask"===t.target.className?t.target.id:t.target.dataset.id)}))].styles.left+t.offsetX,e.styles.top=this.componentLs[this.componentLs.findIndex((function(e){return e.id===("group-mask"===t.target.className?t.target.id:t.target.dataset.id)}))].styles.top+t.offsetY),e.id=String((new Date).getTime()),this.$store.commit("componentData/updComponent",{component:e}),this.$store.commit("ctxMenu/showMenu",{top:0,left:0})}},created:function(){}},i=r,p=(n("c260"),n("0c7c")),l=Object(p["a"])(i,o,s,!1,null,"2a72709a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-b9c7eb92.78e4e631.js.map