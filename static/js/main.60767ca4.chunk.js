(this["webpackJsonphealth-dashboard"]=this["webpackJsonphealth-dashboard"]||[]).push([[0],{166:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(41),r=t.n(c),i=(t(62),t(63),t(56)),o=t(42),s=t(44),m=t(45),d=t(46),u=t(14),E=t(15),v=t(43),f=t.n(v),h=(t(64),[{icon:l.a.createElement(s.a,null),label:"Activity"},{icon:l.a.createElement(m.a,null),label:"Body"},{icon:l.a.createElement(d.a,null),label:"Features"},{icon:l.a.createElement(u.a,null),label:"Diet"},{icon:l.a.createElement(E.a,null),label:"Heart"},{icon:l.a.createElement(u.b,null),label:"Hearing"},{icon:l.a.createElement(E.b,null),label:"Sleep"}]),b=function(e){Object(o.a)(e);var a=Object(n.useState)(0),t=Object(i.a)(a,2),c=t[0],r=t[1];return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("div",{className:"logo-icon"}),l.a.createElement("div",{className:"logo-text"},"Bequt")),l.a.createElement("div",{className:"navbar-buttons-container"},h.map((function(e,a){return l.a.createElement("div",{key:a,className:"button-container "+(c===a?"active":""),onClick:function(){r(a)}},l.a.createElement("div",{className:"icon"},e.icon),l.a.createElement("div",{className:"label"},e.label))}))),l.a.createElement("div",{className:"bottom-info"},l.a.createElement("img",{className:"bottom-img",src:f.a,alt:"girl-runing"}),l.a.createElement("div",{className:"img-text"},"You can change ",l.a.createElement("br",null),"the dashboard settings"),l.a.createElement("button",{className:"button-settings"},"Settings")))},g=(t(65),function(e){var a=e.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(b,null),l.a.createElement("div",{className:"layout-content"},a))}),N=t(47),p=t(49),y=t(7),x=t(48),k=(t(66),function(){var e=Object(n.useRef)(null);return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"search-bar",onClick:function(){e.current.focus()}},l.a.createElement("div",{className:"search-icon"},l.a.createElement(N.a,null)),l.a.createElement("input",{id:"search-input",type:"text",placeholder:"Search...",ref:e})),l.a.createElement("div",{className:"menu-icons-container"},l.a.createElement("div",{className:"messages-icon"},l.a.createElement(x.a,null)),l.a.createElement("div",{className:"notifications-icon"},l.a.createElement(y.a,null)),l.a.createElement("div",{className:"user-icon"},l.a.createElement(p.a,null))))}),B=t(51),w=t(50),C=(t(166),{labels:["3h ago","2h 50 min ago","2h 40 min ago","2h 30 min ago","2h 20 min ago","2h 10 min ago","2h ago","1h 50 min ago","1h 40 min ago","1h 30 min ago","1h 20 min ago","1h 10 min ago","60 min ago","50 min ago","40 min ago","30 min ago","20 min ago","10 min ago","Now"],datasets:[{label:"Rate",fill:!1,lineTension:0,backgroundColor:"#ffffff",borderColor:"#ffbc95",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffbc95",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffbc95",pointHoverBorderColor:"#ff8b48",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[60,80,75,63,120,180,60,79,60,80,75,63,120,180,60,79,60,80,75,63,120,180,60,79]}]}),H={legend:{display:!1},responsive:!0,scales:{yAxes:[{ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],xAxes:[{ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}]}},P=function(){return l.a.createElement("div",{className:"heart-rate-main-card"},l.a.createElement("div",{className:"title-graph-container"},l.a.createElement("div",{className:"title-container"},l.a.createElement("div",{className:"heart-icon"},l.a.createElement(B.a,null)),l.a.createElement("div",{className:"heart-title"},"Heart rate")),l.a.createElement("div",{className:"graph-heart-rate"},l.a.createElement(w.Line,{data:C,options:H,width:350,height:100}))),l.a.createElement("div",{className:"bpm-today-container"},l.a.createElement("div",{className:"bpm-today"},"82"),l.a.createElement("div",{className:"bpm-today-text"},"Your BPM today")))},S=(t(167),function(e){var a=e.icon,t=e.value,n=e.label;return l.a.createElement("div",{className:"heart-rate-second-card"},l.a.createElement("div",{className:"icon"},a),l.a.createElement("div",{className:"info-container"},l.a.createElement("div",{className:"value"},t),l.a.createElement("div",{className:"label"},n)))}),O=(t(168),function(){return l.a.createElement("div",{className:"heart-rate"},l.a.createElement(P,null),l.a.createElement("div",{className:"second-cards"},l.a.createElement(S,{icon:l.a.createElement(y.b,null),value:"74",label:"BPM per week"}),l.a.createElement(S,{icon:l.a.createElement(y.b,null),value:"60-80",label:"Normal BPM"})))}),R=(t(169),function(e){var a=e.img,t=e.text,n=e.value,c=e.color;return l.a.createElement("div",{className:"todays-card",style:{backgroundColor:c}},l.a.createElement("img",{className:"card-img",src:a,alt:"card-image"}),l.a.createElement("div",{className:"card-text"},t),l.a.createElement("div",{className:"value"},n))}),W=t(52),j=t.n(W),G=t(53),M=t.n(G),z=t(54),A=t.n(z),D=(t(170),function(){return l.a.createElement("div",{className:"todays-activity"},l.a.createElement(R,{img:j.a,text:"Overflights completed",value:"1st floor",color:"#f4f2ff"}),l.a.createElement(R,{img:M.a,text:"Steps per week",value:"54000",color:"#fff2ec"}),l.a.createElement(R,{img:A.a,text:"Walking and running distance",value:"12 miles",color:"#ecfbff"}))}),J=(t(171),function(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:"title "+a},t)}),L=t(55),Y=(t(172),function(e){var a=e.children;return l.a.createElement("div",{className:"section-header"},l.a.createElement(J,{size:"s"},a),l.a.createElement("div",{className:"three-dots-button"},l.a.createElement(L.a,null)))}),T=(t(173),function(e){var a=e.children,t=e.title;return l.a.createElement("div",{className:"section"},l.a.createElement(Y,null,t),a)}),q=(t(174),function(){return l.a.createElement("div",{className:"activity"},l.a.createElement(k,null),l.a.createElement("div",{className:"content"},l.a.createElement(J,{size:"l"},"Your Performance"),l.a.createElement(T,{title:"Today's activity"},l.a.createElement(D,null)),l.a.createElement(T,{title:"Health"},l.a.createElement(O,null))))});var F=function(){return l.a.createElement("div",{className:"health-dashboard"},l.a.createElement(g,null,l.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,a,t){e.exports=t.p+"static/media/girl-running.41d9cca5.PNG"},52:function(e,a,t){e.exports=t.p+"static/media/stairs.60b3bff8.PNG"},53:function(e,a,t){e.exports=t.p+"static/media/calendar.63f30793.PNG"},54:function(e,a,t){e.exports=t.p+"static/media/shoes.30cc12b7.PNG"},57:function(e,a,t){e.exports=t(175)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.60767ca4.chunk.js.map