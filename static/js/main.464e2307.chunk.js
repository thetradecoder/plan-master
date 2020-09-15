(this["webpackJsonpplan-master"]=this["webpackJsonpplan-master"]||[]).push([[0],{164:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(31),c=t.n(r),s=(t(82),t(23)),o=t(7);t(20),t(44),t(83);function m(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("a",{href:"/plan-master/",className:"navbar-brand"},"tradecoder")),n.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#main-menu"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{id:"main-menu",className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/plan-master/",className:"nav-link"},"Set Plans")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/plan-master/shortplan/",className:"nav-link"},"Short Term Plan")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/plan-master/longplan/",className:"nav-link"},"Long Term Plan")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{to:"/plan-master/todos/",className:"nav-link"},"Todos"))))))}var u=t(4),i=(t(45),t(19)),d=t.n(i),p=t(15),E=t.n(p);t(34);function b(){var e=Object(l.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!0),s=Object(u.a)(c,2),o=s[0],m=s[1];function i(e){e.preventDefault()}return Object(l.useEffect)((function(){d.a.get("http://localhost:5000/shortplan").then((function(e){r(e.data.reverse())})).catch((function(e){return console.log(e)}))})),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("select",{selected:o,onChange:function(e){m(!0!==o)},className:"form-control"},n.a.createElement("option",null,"Open plans"),n.a.createElement("option",null,"Closed plans"))),t.filter((function(e){return e.open=o})).map((function(e){return n.a.createElement("div",{className:"shadow p-3"},n.a.createElement("h4",{className:"text-primary"},e.title),n.a.createElement("p",null,e.details),n.a.createElement("p",null,"Progress: ",e.progress),n.a.createElement("p",null,"Open date: ",e.plandate?e.plandate.substring(0,10):e.plandate,", Start Date: ",e.startdate?e.startdate.substring(0,10):e.startdate,", Deadline: ",e.deadline?e.deadline.substring(0,10):e.deadline," "),n.a.createElement("button",{className:"btn btn-primary","data-toggle":"collapse","data-target":"#planid".concat(e._id)},"Edit"),n.a.createElement("div",{className:"collapse",id:"planid".concat(e._id)},n.a.createElement("form",{onSubmit:i},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan details: "),n.a.createElement("textarea",{cols:"50",rows:"5",className:"form-control"},e.details)),n.a.createElement("div",{className:"d-flex justify-content-start"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Progress: "),n.a.createElement("input",{type:"text",className:"form-control",value:e.progress})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Deadline: "),n.a.createElement("br",null),n.a.createElement(E.a,{selected:new Date(e.deadline),className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Open/Close: "),n.a.createElement("br",null),n.a.createElement("select",{selected:e.open,className:"form-control"},n.a.createElement("option",null,"Open"),n.a.createElement("option",null,"Closed")))),n.a.createElement("button",{type:"submit",className:"btn btn-warning"},"Submit"))))}))))}function f(){var e=Object(l.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!0),s=Object(u.a)(c,2),o=s[0],m=s[1];function i(e){e.preventDefault()}return Object(l.useEffect)((function(){d.a.get("http://localhost:5000/longplan").then((function(e){r(e.data.reverse())})).catch((function(e){return console.log(e)}))})),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("select",{selected:o,onChange:function(e){m(!0!==o)},className:"form-control"},n.a.createElement("option",null,"Open plans"),n.a.createElement("option",null,"Closed plans"))),t.filter((function(e){return e.open=o})).map((function(e){return n.a.createElement("div",{className:"shadow p-3"},n.a.createElement("h4",{className:"text-primary"},e.title),n.a.createElement("p",null,e.details," "),n.a.createElement("p",null,"Progress: ",e.progress),n.a.createElement("p",null,"Open date: ",e.plandate?e.plandate.substring(0,10):e.plandate,", Start Date: ",e.startdate?e.startdate.substring(0,10):e.startdate,", Deadline: ",e.deadline?e.deadline.substring(0,10):e.deadline," "),n.a.createElement("button",{className:"btn btn-primary","data-toggle":"collapse","data-target":"#planid".concat(e._id)},"Edit"),n.a.createElement("div",{className:"collapse",id:"planid".concat(e._id)},n.a.createElement("form",{onSubmit:i},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan details: "),n.a.createElement("textarea",{cols:"50",rows:"5",className:"form-control"},e.details)),n.a.createElement("div",{className:"d-flex justify-content-start"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Progress: "),n.a.createElement("input",{type:"text",className:"form-control",value:e.progress})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Deadline: "),n.a.createElement("br",null),n.a.createElement(E.a,{selected:new Date(e.deadline),className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Open/Close: "),n.a.createElement("br",null),n.a.createElement("select",{selected:e.open,className:"form-control"},n.a.createElement("option",null,"Open"),n.a.createElement("option",null,"Closed")))),n.a.createElement("button",{type:"submit",className:"btn btn-warning"},"Submit"))))}))))}function v(){var e=Object(l.useState)("mamun"),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)("shortplan"),s=Object(u.a)(c,2),o=s[0],m=s[1],i=Object(l.useState)(new Date),p=Object(u.a)(i,2),b=p[0],f=p[1],v=Object(l.useState)(new Date),g=Object(u.a)(v,2),N=g[0],h=g[1],O=Object(l.useState)(!0),j=Object(u.a)(O,2),S=j[0],w=j[1],y=Object(l.useState)(1),x=Object(u.a)(y,2),D=x[0],C=x[1],P=Object(l.useState)(""),k=Object(u.a)(P,2),q=k[0],_=k[1],T=Object(l.useState)(""),B=Object(u.a)(T,2),J=B[0],U=B[1],W=Object(l.useState)(""),A=Object(u.a)(W,2),I=A[0],L=A[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t,type:o,startdate:b,duration:D,deadline:N,open:S,title:q,details:J,progress:I};d.a.post("http://localhost:5000/".concat(o,"/add"),a).then((function(e){window.location="/plan-master/".concat(o)})).catch((function(e){return console.log(e)}))}},n.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Username:"),n.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){r(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan type:"),n.a.createElement("select",{selected:o,onChange:function(e){m(e.target.value)},className:"form-control",required:!0},n.a.createElement("option",null,"shortplan"),n.a.createElement("option",null,"longplan"),n.a.createElement("option",null,"todos"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan duration:"),n.a.createElement("input",{type:"number",min:"0",className:"form-control",value:D,onChange:function(e){C(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Start date:"),n.a.createElement("br",null),n.a.createElement(E.a,{selected:b,onChange:function(e){f(e>=new Date?e:new Date),h(e)},className:"form-control",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Deadline:"),n.a.createElement("br",null),n.a.createElement(E.a,{selected:N,onChange:function(e){h(e>=b?e:b)},className:"form-control",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Open:"),n.a.createElement("select",{selected:S,onChange:function(e){w(e.target.value)},className:"form-control",required:!0},n.a.createElement("option",null,"true"),n.a.createElement("option",null,"false")))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan title:"),n.a.createElement("input",{type:"text",className:"form-control",value:q,onChange:function(e){_(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Plan details:"),n.a.createElement("textarea",{className:"form-control",rows:"5",cols:"50",value:J,onChange:function(e){U(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Progress:"),n.a.createElement("input",{type:"text",className:"form-control",value:I,onChange:function(e){L(e.target.value)},required:!0})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add plan"))))}function g(){var e=Object(l.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!0),s=Object(u.a)(c,2),o=s[0],m=s[1];return Object(l.useEffect)((function(){d.a.get("http://localhost:5000/todos").then((function(e){r(e.data.reverse())})).catch((function(e){return console.log(e)}))})),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("select",{selected:o,onChange:function(e){m(!0!==o)},className:"form-control"},n.a.createElement("option",null,"Open tasks"),n.a.createElement("option",null,"Closed tasks"))),t.filter((function(e){return e.open=o})).map((function(e){return n.a.createElement("div",{className:"shadow p-3"},n.a.createElement("h4",{className:"text-primary"},e.title),n.a.createElement("p",null,e.details),n.a.createElement("p",null,"Progress: ",e.progress),n.a.createElement("p",null,"Open date: ",e.plandate?e.plandate.substring(0,10):e.plandate,", Start Date: ",e.startdate?e.startdate.substring(0,10):e.startdate,", Deadline: ",e.deadline?e.deadline.substring(0,10):e.deadline," "),n.a.createElement("button",{className:"btn btn-primary"},"Edit"))}))))}function N(){var e=Object(l.useState)(""),a=Object(u.a)(e,1)[0],t=Object(l.useState)(""),r=Object(u.a)(t,1)[0],c=Object(l.useState)(""),s=Object(u.a)(c,1)[0],o=Object(l.useState)(""),m=Object(u.a)(o,1)[0],i=Object(l.useState)(""),d=Object(u.a)(i,1)[0],p=Object(l.useState)(""),b=Object(u.a)(p,1)[0],f=Object(l.useState)(""),v=Object(u.a)(f,1)[0];return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"text-center"},"Edit plans"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("p",null,"Username: ",a),n.a.createElement("h4",null,r),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Start Date:"),n.a.createElement("br",null),n.a.createElement(E.a,{selected:s,className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Deadline:"),n.a.createElement("br",null),n.a.createElement(E.a,{selected:m,className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Open/Close: "),n.a.createElement("select",{selected:d,className:"form-control"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Details:"),n.a.createElement("textarea",{rows:"5",cols:"50",className:"form-control"},b)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Progress:"),n.a.createElement("input",{type:"text",className:"form-control",value:v})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}var h=function(){return n.a.createElement(s.a,null,n.a.createElement(m,null),n.a.createElement("div",{className:"p-4"},n.a.createElement("h6",{className:"text-center"},"Plan master- a roadmap for ultimate goals")),n.a.createElement(o.a,{path:"/plan-master/",exact:!0,component:v}),n.a.createElement(o.a,{path:"/plan-master/shortplan/",component:b}),n.a.createElement(o.a,{path:"/plan-master/longplan/",component:f}),n.a.createElement(o.a,{path:"/plan-master/todos/",component:g}),n.a.createElement(o.a,{path:"/plan-master/editplan/",component:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){e.exports=t(164)},82:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.464e2307.chunk.js.map