(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},13:function(t,n,o){},15:function(t,n,o){"use strict";o.r(n);var e=o(6),c=o.n(e),s=o(7),i=o(5),a=o(1),r=o.n(a);o(12);o(13);var l=o(0),u=r.a.memo((function(t){var n=t.goods;return Object(l.jsx)("ul",{className:"list",children:n.map((function(t){return Object(l.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})})),d=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],e=n[1],c=Object(a.useState)([]),r=Object(i.a)(c,2),d=r[0],b=r[1],j=function(){fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()})).then((function(t){e(t),b(t)}))};return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("div",{className:"button-holder",children:[Object(l.jsx)("button",{className:"button is-info",type:"button",onClick:function(){0===o.length&&j(),b(o)},children:"Load All goods"}),Object(l.jsx)("button",{className:"button is-info",type:"button",onClick:function(){0===o.length&&j(),b(Object(s.a)(o.sort((function(t,n){return t.name.localeCompare(n.name)}))).slice(0,6))},children:"Load 5 first goods"}),Object(l.jsx)("button",{className:"button is-info",type:"button",onClick:function(){0===o.length&&j(),b(o.filter((function(t){return"red"===t.color})))},children:"Load red goods"})]}),Object(l.jsx)(u,{goods:d})]})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.453f6602.chunk.js.map