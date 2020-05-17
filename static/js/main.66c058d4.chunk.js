(this["webpackJsonpcovid19-visualizer"]=this["webpackJsonpcovid19-visualizer"]||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__2rcre",card:"Cards_card__1N7pj",infected:"Cards_infected__wcxcq",recovered:"Cards_recovered__3R3u8",deaths:"Cards_deaths__2xaEy"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(71),d=a(72),p=a(84),f=a(83),m=a(224),v=a(228),h=a(225),b=a(226),y=a(16),g=a.n(y),_=a(73),x=a.n(_),E=a(74),C=a.n(E),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;if(!a)return"Loading...";var u=[{name:"Infected",style:g.a.infected,data:a.value},{name:"Recovered",style:g.a.recovered,data:n.value},{name:"Deaths",style:g.a.deaths,data:c.value}];return r.a.createElement("div",{className:g.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},u.map((function(e,t){return r.a.createElement(m.a,{key:t,item:!0,component:v.a,xs:12,md:3,className:C()(g.a.card,e.style)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},e.name),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:e.data,duration:2,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"number of active cases of COVID-19")))}))))},w=a(31),O=a(32),k=a.n(O),D="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(43),B=a(80),R=a.n(B),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:R.a.container},u?a?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lebel:"People",data:[a.value,c.value,o.value],backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"]}]},option:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null:p.length>0?r.a.createElement(A.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Death",borderColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null)},z=a(229),J=a(227),M=a(81),P=a.n(M),Q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(z.a,{className:P.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},V=a(44),q=a.n(V),G=a(82),L=a.n(G),F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:q.a.container},r.a.createElement("img",{src:L.a,alt:"covid-19",className:q.a.image}),r.a.createElement(j,{data:this.state.data}),r.a.createElement(Q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:this.state.data,country:this.state.country}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__2Qe1l"}},81:function(e,t,a){e.exports={formControl:"Picker_formControl__8OB8v"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.66c058d4.chunk.js.map