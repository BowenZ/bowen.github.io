(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t(0),u=t.n(r),i=t(2),o=t.n(i),a=t(4),l=t(8),d=t(5),s=t(13);function b(){var n=Object(a.a)(["\n  width: 100px;\n  height: 30px;\n  background: linear-gradient(90deg, pink, red);\n  border-radius: 20px;\n  color: #fff;\n  line-height: 30px;\n  text-align: center;\n"]);return b=function(){return n},n}function j(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  height: calc(100vh - 45px);\n  input[type='text'] {\n    padding: 0.2em;\n    width: 150px;\n    max-width: 150px;\n  }\n  button {\n    outline: none;\n    appearance: none;\n    padding: 0.2em 1.45em;\n    margin: 0.1em;\n    border: 0.15em solid #cccccc;\n    color: #000000;\n    background-color: #cccccc;\n    &:hover {\n      border-color: #7a7a7a;\n    }\n    &:active {\n      background-color: #999999;\n    }\n  }\n  .danmaku-wrapper {\n    width: 90%;\n    height: 60vw;\n    max-height: 500px;\n    background-color: #000;\n  }\n"]);return j=function(){return n},n}var p=Array.from("\u901a\u8fc7\u5bf9\u5e73\u9762\u4e2d\u7ad6\u76f4\u548c\u6c34\u5e73\u65b9\u5411\u7684\u5206\u6790\u6211\u4eec\u5c06\u5bbd\u6cdb\u7684\u5f39\u5e55\u91cd\u53e0\u95ee\u9898\u6536\u655b\u4e3a\u8f68\u9053\u4e2d\u76f8\u90bb\u5f39\u5e55\u4e24\u4e24\u4e4b\u95f4\u7684\u8ffd\u53ca\u95ee\u9898\u6700\u7ec8\u83b7\u5f97\u4e86\u5c06\u5019\u9009\u5f39\u5e55\u6302\u8f7d\u5230\u5408\u9002\u8f68\u9053\u4e2d\u7684\u8c03\u5ea6\u7b56\u7565");function h(){var n=Math.floor(19*Math.random())+1;return Array(n).fill(null).map((function(){return p[function(n){return Math.floor(Math.random()*n)}(p.length)]})).join("")}var f=function(){var n=Object(r.useRef)(null),e=Object(r.useState)(!1),t=Object(l.a)(e,2),u=t[0],i=t[1],o=Object(r.useRef)(""),a=Object(r.useState)(!1),d=Object(l.a)(a,2),b=d[0],j=d[1];return Object(r.useEffect)((function(){var e=new s.a(".danmaku-wrapper",{rowHeight:60,speed:120,opacity:1,maxRow:void 0,minGapWidth:30});n.current=e}),[]),Object(r.useEffect)((function(){u&&(o.current=document.querySelector(".color-piker").value)}),[u]),Object(r.useEffect)((function(){n.current&&(b?n.current.pause():n.current.resume())}),[b]),Object(c.jsxs)(x,{className:"test-danmaku",children:[Object(c.jsx)("div",{className:"danmaku-wrapper"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"\u900f\u660e\u5ea6"}),Object(c.jsx)("input",{type:"range",min:"0",max:"1",step:"0.1",onChange:function(e){if(n.current){var t=e.target.value;n.current.opacity=Number(t)}}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"\u5f69\u8272\u5f39\u5e55\uff1a"}),Object(c.jsx)("input",{type:"checkbox",onChange:function(n){var e=n.target.checked;i(e)}}),"\xa0\xa0\xa0",Object(c.jsx)("input",{className:"color-piker",type:"color",defaultValue:"#ff0000",style:{visibility:u?"visible":"hidden"},onChange:function(n){var e=n.target.value;o.current=e}})]}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.emit(h(),{color:u?o.current:void 0})},children:"\u53d1\u9001\u968f\u673a\u6587\u672c\uff08\u8fc7\u591a\u4f1a\u91cd\u53e0\uff09"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"\u8f93\u5165\u6587\u672c\uff1a"}),Object(c.jsx)("input",{type:"text",className:"danmaku-text-input"}),Object(c.jsx)("button",{type:"button",onClick:function(){if(n.current){var e=document.querySelector(".danmaku-text-input");e.value&&e.value.trim()&&n.current.emit(e.value,{color:u?o.current:void 0}),e.value="",e.focus()}},children:"\u53d1\u9001"})]}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.emit(Object(c.jsx)(m,{children:"react node"}))},children:"\u53d1\u9001react\u8282\u70b9"}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.push(h(),{color:u?o.current:void 0})},children:"\u63a8\u9001\u968f\u673a\u6587\u5b57\u5230\u53d1\u9001\u961f\u5217\uff08\u8fc7\u591a\u4e0d\u4f1a\u91cd\u53e0\uff0c\u4f1a\u5ef6\u8fdf\u53d1\u9001\uff09"}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.push(Object(c.jsx)(m,{children:"react node"}))},children:"\u63a8\u9001React\u8282\u70b9\u5230\u53d1\u9001\u961f\u5217\uff08\u8fc7\u591a\u4e0d\u4f1a\u91cd\u53e0\uff0c\u4f1a\u5ef6\u8fdf\u53d1\u9001\uff09"}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.pushAll(Array(20).fill(null).map((function(){return h()})),{color:u?o.current:void 0})},children:"\u968f\u673a\u63a8\u900120\u6761\u6587\u5b57\u5f39\u5e55"}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&n.current.pushAll(Array(20).fill(null).map((function(){return Object(c.jsx)(m,{children:"react node"})})))},children:"\u968f\u673a\u63a8\u900120\u6761React\u8282\u70b9"}),Object(c.jsx)("div",{children:b?Object(c.jsx)("span",{style:{color:"red"},children:"\u6682\u505c\u4e2d"}):Object(c.jsx)("span",{style:{color:"green"},children:"\u8fd0\u884c\u4e2d"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"button",onClick:function(){j((function(n){return!n}))},children:b?"\u7ee7\u7eed":"\u6682\u505c"})}),Object(c.jsx)("button",{type:"button",onClick:function(){n.current&&(n.current.destroy(),alert("\u7ec4\u4ef6\u5df2\u7ecf\u88ab\u9500\u6bc1\uff0c\u4efb\u4f55\u64cd\u4f5c\u5c06\u4f1a\u65e0\u76f8\u5e94\uff0c\u91cd\u65b0\u5237\u65b0\u9875\u9762\u518d\u6d4b\u5427"))},children:"\u9500\u6bc1\uff08\u9500\u6bc1\u540e\u65e0\u6cd5\u518d\u53d1\u9001\u5f39\u5e55\uff09"})]})},x=d.a.div(j()),m=d.a.div(b());o.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.79c2d98d.chunk.js.map