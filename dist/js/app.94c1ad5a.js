(function(t){function e(e){for(var o,i,u=e[0],d=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var d=n[u];0!==r[d]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"30d6":function(t,e,n){},4211:function(t,e,n){"use strict";var o=n("ead7"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar",{attrs:{title:t.title}}),n("add-todo",{on:{"add-todo":t.addTodo}}),n("ul",[t._l(t.items,function(e){return n("todo-item",{key:e._id,attrs:{item:e},on:{"delete-todo":t.deleteTodo}})}),n("p",{staticClass:"error"},[t._v(t._s(t.error))])],2)],1)},a=[],i=n("bc3a"),u=n.n(i),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mock-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",name:"todo",id:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:t.addTodo}},[t._v("Add Todo")])])},c=[],s={name:"AddTodo",data:function(){return{text:""}},methods:{addTodo:function(){this.$emit("add-todo",this.text),this.text=""}}},l=s,f=(n("4211"),n("2877")),p=Object(f["a"])(l,d,c,!1,null,null,null),h=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("h1",[t._v(t._s(t.title))])])])},m=[],b={name:"Navbar",props:["title"],data:function(){return{}}},_=b,g=(n("5dfc"),Object(f["a"])(_,v,m,!1,null,null,null)),T=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(t._s(t.item.title)+" "),n("span",{staticClass:"x",on:{click:t.deleteTodo}},[t._v("x")])])},y=[],w={name:"TodoItem",props:["item"],methods:{deleteTodo:function(){this.$emit("delete-todo",this.item._id)}}},O=w,j=(n("6959"),Object(f["a"])(O,x,y,!1,null,null,null)),k=j.exports,P=(n("96cf"),n("3b8d")),$={getTodos:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,u.a.get("http://localhost:3000/todos").then(function(t){e={status:"success",data:t.data}}).catch(function(t){e={status:"error",data:t.data}});case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),addTodo:function(t){var e={statusCo:200,data:t};return e},editTodo:function(t){var e={status:200,data:t};return e},deleteTodo:function(t){var e={status:200,data:t};return e}},S={name:"app",components:{Navbar:T,TodoItem:k,AddTodo:h},data:function(){return{title:"Todo Application",items:[],error:"",endpoint:"http://localhost:3000/todos/"}},methods:{getTodos:function(){var t=this,e=$.getTodos();e.then(function(e){"success"===e.status?t.items=e.data:(t.error="unknown error occured",console.log(e.data))})},addTodo:function(t){var e=this,n={userId:1,title:t,completed:!1};u.a.post(this.endpoint,n).then(function(t){e.items.push(t.data)}).catch(function(){e.error="error occured while adding todo"})},deleteTodo:function(t){var e=this;u.a.delete(this.endpoint+t).then(function(n){e.items=e.items.filter(function(e){return e._id!=t})}).catch(function(){e.error="error occured while deleting todo"})}},created:function(){this.getTodos()}},A=S,C=(n("034f"),Object(f["a"])(A,r,a,!1,null,null,null)),E=C.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(E)}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var o=n("30d6"),r=n.n(o);r.a},"64a9":function(t,e,n){},6959:function(t,e,n){"use strict";var o=n("e074"),r=n.n(o);r.a},e074:function(t,e,n){},ead7:function(t,e,n){}});
//# sourceMappingURL=app.94c1ad5a.js.map