(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeakerContainer",(function(){return d})),n.d(t,"query",(function(){return f}));var r=n(119),a=n(5),i=n.n(a),o=n(0),l=n.n(o),c=n(1),s=n(224),u=n(226),m=n(225),p=n(256),d=c.c.div.withConfig({displayName:"speakers__SpeakerContainer",componentId:"sc-13jhkrl-0"})(["display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:left;"]);t.default=function(e){var t=e.data.speakers.edges.map((function(e){return Object(u.d)(e.node)}));return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(r.Helmet,{title:"CaenCamp: proposez un talk"},l.a.createElement("meta",{name:"description",content:"Participez CaenCamp"})),l.a.createElement(s.a,{id:"callForPaperContent"},l.a.createElement(s.d,null,l.a.createElement(d,null,t.map((function(e){return l.a.createElement(p.e,{key:e.id,speaker:e})})),l.a.createElement(p.b,null,l.a.createElement(i.a,{to:"/call-for-speakers"},l.a.createElement(p.d,{src:"/speakers/you.jpg"}),l.a.createElement(p.c,null,"Vous"),l.a.createElement(p.a,null,"Rejoignez les autres speakers ! Proposez un sujet de talk."))))))))};var f="2575707936"},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(120);var r=n(0),a=n.n(r);var i=n(1).c.div.withConfig({displayName:"Links__LinksContainer",componentId:"ati4k1-0"})(["width:100%;display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:center;margin-top:1rem;a{color:",";margin:0 5px;}"],(function(e){return e.theme.grey})),o=["github","hacker-news","linkedin","medium","perso","stack-overflow","twitter"],l=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props.links?function(e){return e.filter((function(e){return o.includes(e.title.toLowerCase())})).map((function(e){return{url:e.url,class:"perso"===e.title?"fa-user-circle":"fa-"+e.title.toLowerCase()}}))}(this.props.links):[];return a.a.createElement(i,null,t.length>0&&t.map((function(t){return a.a.createElement("a",{key:t.class,href:t.url,onClick:e.handleClick},a.a.createElement("i",{className:"fa "+t.class}))})))},r}(r.Component)},256:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(5),a=n.n(r),i=n(0),o=n.n(i),l=n(1),c=(n(229),n(248)),s=l.c.div.withConfig({displayName:"listItem__Item",componentId:"sc-1v0uqkv-0"})(["border:1px solid ",";height:290px;width:190px;margin:1rem 1rem 1rem 0;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);a{display:flex;flex-direction:column;align-items:center;}@media (max-width:","){width:100%;height:auto;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize})),u=l.c.img.withConfig({displayName:"listItem__Profile",componentId:"sc-1v0uqkv-1"})(["border-radius:50%;width:115px;height:115px;margin-bottom:0.8rem;@media (max-width:","){width:75px;height:75px;}"],(function(e){return e.theme.mobileSize})),m=l.c.h3.withConfig({displayName:"listItem__Name",componentId:"sc-1v0uqkv-2"})(["font-size:1.2rem;text-align:center;padding:0;margin:0.3rem 0;"]),p=l.c.p.withConfig({displayName:"listItem__Introduction",componentId:"sc-1v0uqkv-3"})(["text-align:center;font-size:1rem;padding:0;margin:0.2rem 0 0;color:",";"],(function(e){return e.theme.black})),d=function(e){var t=e.speaker;return o.a.createElement(s,null,o.a.createElement(a.a,{to:"/speakers/"+t.slug},o.a.createElement(u,{src:"/speakers/"+t.picture}),o.a.createElement(m,null,t.firstName," ",t.lastName),o.a.createElement(p,null,t.resume),o.a.createElement(c.a,{links:t.links})))}}}]);
//# sourceMappingURL=component---src-pages-speakers-js-3bd82a0839625f71b13d.js.map