(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3mA1":function(e,t,n){"use strict";n("zGcK");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),l=n("+ZDr"),o=n.n(l),m=r.c.ul.withConfig({displayName:"Tags",componentId:"sc-1mg3606-0"})(["list-style:none;margin:0;overflow:hidden;padding:0;& > li{float:left;}"]),c=r.c.li.withConfig({displayName:"Tags__Tag",componentId:"sc-1mg3606-1"})(["background:#eee;border-radius:3px 0 0 3px;color:#999;display:inline-block;height:26px;line-height:26px;padding:0 20px 0 23px;position:relative;margin:0 10px 10px 0;text-decoration:none;-webkit-transition:color 0.2s;a{color:black;}&::before{background:#fff;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,0.25);content:'';height:6px;left:10px;position:absolute;width:6px;top:10px;}&::after{background:#fff;border-bottom:13px solid transparent;border-left:10px solid #eee;border-top:13px solid transparent;content:'';position:absolute;right:0;top:0;}&.current,&:hover{background-color:crimson;color:white;a{color:white;}}&.current::after,&:hover::after{border-left-color:crimson;}"]);t.a=function(e){var t=e.tags,n=e.currentTag;return i.a.createElement(m,null,t.sort((function(e,t){var n=e.toLowerCase(),a=t.toLowerCase();return n<a?-1:n>a?1:0})).map((function(e){return i.a.createElement(c,{className:e==n?"current":"",key:e},i.a.createElement(o.a,{to:"/talks?tag="+e},e))})))}},"8PZp":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),l=n.n(r),o=n("vOnD"),m=n("dndX"),c=n("D7tS"),s=n("XZpT");var d=o.c.div.withConfig({displayName:"listItem__Item",componentId:"sc-1ydimle-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);display:flex;flex-direction:row;align-items:top;@media (max-width:","){flex-direction:column;margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize})),p=o.c.div.withConfig({displayName:"listItem__Description",componentId:"sc-1ydimle-1"})(["margin-left:2rem;"]),u=o.c.h3.withConfig({displayName:"listItem__Title",componentId:"sc-1ydimle-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),g=o.c.div.withConfig({displayName:"listItem__Speakers",componentId:"sc-1ydimle-3"})(["display:flex;flex-direction:row;align-items:left;"]),f=o.c.div.withConfig({displayName:"listItem__Registration",componentId:"sc-1ydimle-4"})(["margin-left:2rem;a{color:",";text-align:center;font-variant:small-caps;display:flex;flex-direction:column;align-items:center;font-weight:bold;font-size:1.2rem;padding:0 2rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}@media (max-width:","){padding:0;}i{@media (max-width:","){display:none;}}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.edition;return l.a.createElement(d,null,l.a.createElement(c.a,{date:e.date,edition:e.edition}),l.a.createElement(p,null,e.talks.map((function(t,n){return l.a.createElement("div",{key:"devops-talk-"+e.id+"-"+n,style:{marginBottom:"3rem"}},l.a.createElement(u,null,l.a.createElement(i.a,{to:"/devops-caen-camp/"+e.slug},t.title)),l.a.createElement(g,null,t.speakers.length>0&&t.speakers.map((function(e){return l.a.createElement(s.a,{speaker:e,key:e.slug})}))))}))),Object(m.a)(new Date,new Date(e.date))&&e.meetupId&&l.a.createElement(f,null,l.a.createElement("a",{href:"https://www.meetup.com/fr-FR/CaenCamp/events/"+e.meetupId+"/",onClick:this.handleClick},l.a.createElement("i",{className:"fa fa-meetup fa-5x"}),l.a.createElement("p",null,"Inscrivez-vous !"))))},a}(r.Component)},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("TJpk"),i=n("dndX"),r=n("q1tI"),l=n.n(r),o=n("vOnD"),m=(n("fxB9"),n("KE4F")),c=n("Upz/"),s=n("xel/"),d=n("c7Vk"),p=n("8PZp"),u=n("+ZDr"),g=n.n(u),f=o.c.div.withConfig({displayName:"CaenCamp__CaenCampContainer",componentId:"mjoovr-0"})(["align-items:center;background-color:#fff;display:flex;flex-direction:row;justify-content:space-between;@media (max-width:","){justify-content:center;}h2{font-size:2.5rem;@media (max-width:","){font-size:1.6rem;}}p{font-size:1.3rem;line-height:1.8rem;@media (max-width:","){font-size:1rem;line-height:1.3rem;}}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),h=o.c.div.withConfig({displayName:"CaenCamp__Overview",componentId:"mjoovr-1"})(["text-align:left;width:65%;@media (max-width:","){width:95%;}a{color:",";font-weight:bold;-webkit-transition:color 0.2s;&:hover{color:crimson;}}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),w=o.c.div.withConfig({displayName:"CaenCamp__Stats",componentId:"mjoovr-2"})(["display:flex;flex-direction:column;align-items:flex-start;margin:6rem 2rem 0 2rem;@media (max-width:","){display:none;}"],(function(e){return e.theme.mobileSize})),E=Object(o.c)(g.a).withConfig({displayName:"CaenCamp__StyledLink",componentId:"mjoovr-3"})(["color:",";display:flex;flex-direction:row;align-items:center;justify-content:left;margin-bottom:1rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}span{margin-left:1rem;font-size:2rem;}"],(function(e){return e.theme.black})),v=function(e){var t=e.talks,n=e.speakers,a=e.cccs,i=e.lightnings;return l.a.createElement(f,null,l.a.createElement(h,null,l.a.createElement("h2",null,"Qu’est-ce que les CaenCamp.s ?"),l.a.createElement("p",null,"C'est un collectif de ",l.a.createElement("strong",null,"développeurs caennais"),". Ce collectif organise des rencontres, généralement le dernier mardi du mois, avec un ",l.a.createElement(g.a,{to:"/talks"},"sujet")," technique lié à notre métier présenté par un ",l.a.createElement(g.a,{to:"/speakers"},"speaker")," ","de la communauté, parfois précédé par un"," ",l.a.createElement("a",{href:"https://medium.com/@ckoster22/why-your-company-should-be-doing-lightning-talks-c84b32e8f82b"},"lightning talk"),"."),l.a.createElement("p",null,"Mais d'autres rencontres peuvent librement s'organiser sur des thématiques précises comme les"," ",l.a.createElement(g.a,{to:"/coding-caen-camp"},"Coding CaenCamp.s")," ou les"," ",l.a.createElement(g.a,{to:"/devops-caen-camp"},"Devops CaenCamp.s"),"."),l.a.createElement("p",null,"Les CaenCamp.s ne vivent que par"," ",l.a.createElement(g.a,{to:"/call-for-speakers"},"l","'","investissement des membres de sa communauté")," ","et ne dépendent d'aucune chapelle ni d'aucune entreprise. Pour autant le support des structures caennaises est le bienvenue, et nous tenons particulièrement à remercier le"," ",l.a.createElement("a",{href:"http://www.forum-digital.fr/"},"Forum Digital"),", le"," ",l.a.createElement("a",{href:"http://ledome.info/"},"Dôme")," ainsi que"," ",l.a.createElement("a",{href:"https://www.hey-coworking.com/"},"HEY! coworking")," pour nous permettre d'organiser nos évènements en mettant à notre disposition des lieux pour nous retrouver."),l.a.createElement("p",null,"Sans forme de structure d'organisation formelle, les CaenCamp.s existent depuis ",l.a.createElement("strong",null,"2012"),".")),l.a.createElement(w,null,l.a.createElement(E,{to:"/speakers"},l.a.createElement("i",{className:"fa fa-user-o fa-5x","aria-hidden":"true"}),l.a.createElement("span",null,n," speakers")),l.a.createElement(E,{to:"/talks"},l.a.createElement("i",{className:"fa fa-bullhorn fa-5x","aria-hidden":"true"}),l.a.createElement("span",null,t," talks")),l.a.createElement(E,{to:"/talks"},l.a.createElement("i",{className:"fa fa-bolt fa-5x","aria-hidden":"true"}),l.a.createElement("span",null,i," lightning talks")),l.a.createElement(E,{to:"/coding-caen-camp"},l.a.createElement("i",{className:"fa fa-keyboard-o fa-5x","aria-hidden":"true"}),l.a.createElement("span",null,a," Coding CaenCamp")),l.a.createElement(E,{to:"/devops-caen-camp"},l.a.createElement("i",{className:"fa fa-server fa-5x","aria-hidden":"true"}),l.a.createElement("span",null,"1 Devops CaenCamp"))))},x=n("Bl7J");n.d(t,"query",(function(){return y}));var b=o.c.div.withConfig({displayName:"pages__TalksContainer",componentId:"sc-1vz1p9r-0"})(["display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:left;"]),y=(t.default=function(e){var t=e.data,n=t.talks.edges.map((function(e){return Object(c.g)(e.node,t.speakers.edges,t.lightnings.edges)})),r=null,o=null;Object(i.a)(new Date,new Date(n[0].date))?(r=n[1],o=n[0]):r=n[0];var u=t.cccs.edges.map((function(e){return Object(c.c)(e.node)})),g=null,f=null;Object(i.a)(new Date,new Date(u[0].date))?(g=u[1],f=u[0]):g=u[0];var h=t.devops.edges.map((function(e){return Object(c.a)(e.node,t.speakers.edges)})),w=null,E=null;return Object(i.a)(new Date,new Date(h[0].date))?(w=h[1],E=h[0]):w=h[0],l.a.createElement(x.a,null,l.a.createElement("div",null,l.a.createElement(a.Helmet,{title:"CaenCamp"},l.a.createElement("meta",{name:"description",content:"Welcome on the new CaenCamp site"})),l.a.createElement(m.a,{id:"homeContent"},l.a.createElement(m.d,null,l.a.createElement(v,{cccs:t.cccs.edges.length,dojos:t.dojos.edges.length,lightnings:t.lightnings.edges.length,partners:"3",speakers:t.speakers.edges.length,talks:n[0].edition}),o&&l.a.createElement(b,null,l.a.createElement("h2",null,"Prochain talk"),l.a.createElement(s.a,{talk:o})),E&&l.a.createElement(b,null,l.a.createElement("h2",null,"Prochain CaenCamp Devops"),l.a.createElement(p.a,{edition:E})),f&&l.a.createElement(b,null,l.a.createElement("h2",null,"Prochain coding caen camp"),l.a.createElement(d.a,{camp:f})),r&&l.a.createElement(b,null,l.a.createElement("h2",null,"Dernier talk"),l.a.createElement(s.a,{talk:r})),w&&l.a.createElement(b,null,l.a.createElement("h2",null,"Dernier CaenCamp Devops"),l.a.createElement(p.a,{edition:w})),g&&l.a.createElement(b,null,l.a.createElement("h2",null,"Dernier coding caen camp"),l.a.createElement(d.a,{camp:g}))))))},"3101193069")},XZpT:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),l=r.c.div.withConfig({displayName:"MinimalView__Item",componentId:"sc-1sd2yp7-0"})(["display:flex;flex-direction:row;align-items:center;margin-right:1rem;"]),o=r.c.img.withConfig({displayName:"MinimalView__Profile",componentId:"sc-1sd2yp7-1"})(["border-radius:50%;width:30px;height:30px;margin-right:0.5rem;"]),m=r.c.span.withConfig({displayName:"MinimalView__Name",componentId:"sc-1sd2yp7-2"})(["font-size:1rem;text-align:left;padding:0;color:",";"],(function(e){return e.theme.black}));t.a=function(e){var t=e.speaker;return i.a.createElement(l,null,i.a.createElement(o,{src:"/speakers/"+t.picture}),i.a.createElement(m,null,t.firstName," ",t.lastName))}},c7Vk:function(e,t,n){"use strict";var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),l=n.n(r),o=n("vOnD"),m=(n("qcrV"),n("HQhv"),n("1IEi")),c=n("sWYD"),s=n("4+6U"),d=o.c.div.withConfig({displayName:"date__DateContainer",componentId:"sc-4zh06e-0"})(["background-color:",";color:",";margin:1rem 0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;text-align:center;font-size:1.33rem;"],(function(e){return e.theme.white}),(function(e){return e.theme.black})),p=o.c.span.withConfig({displayName:"date__Day",componentId:"sc-4zh06e-1"})(["margin:0 0.2rem;padding:0;font-weight:bold;"]),u=o.c.span.withConfig({displayName:"date__Month",componentId:"sc-4zh06e-2"})(["margin:0 0.2rem;padding:0;font-weight:bold;"]),g=o.c.span.withConfig({displayName:"date__Year",componentId:"sc-4zh06e-3"})(["margin:0 0.2rem;padding:0;"]),f=o.c.span.withConfig({displayName:"date__Schedule",componentId:"sc-4zh06e-4"})(["margin:0 0.2rem;padding:0;font-weight:bold;"]),h=function(e){var t=e.date,n=Object(c.a)(Object(s.a)(t),"dd-MMM-yyyy-HH:mm",{locale:m.a}).split("-"),a=n[0],i=n[1],r=n[2],o=n[3];return l.a.createElement(d,null,l.a.createElement(p,null,a),l.a.createElement(u,null,i),l.a.createElement(g,null,r,", "),l.a.createElement(f,null,o))};n.d(t,"a",(function(){return y}));var w=o.c.div.withConfig({displayName:"listItem__Item",componentId:"vu9vja-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);a{display:flex;flex-direction:row;align-items:left;@media (max-width:","){flex-direction:column;}}@media (max-width:","){margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),E=o.c.div.withConfig({displayName:"listItem__Description",componentId:"vu9vja-1"})(["margin-left:2rem;"]),v=o.c.h3.withConfig({displayName:"listItem__Title",componentId:"vu9vja-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}"],(function(e){return e.theme.mobileSize})),x=o.c.p.withConfig({displayName:"listItem__Resume",componentId:"vu9vja-3"})(["color:",";margin:1rem 0;padding:0;font-style:italic;"],(function(e){return e.theme.black})),b=o.c.img.withConfig({displayName:"listItem__Image",componentId:"vu9vja-4"})(["margin:0.5rem;height:auto;width:auto;max-width:8rem;max-height:8rem;"]),y=function(e){var t=e.camp;return l.a.createElement(w,null,l.a.createElement(i.a,{to:"/coding-caen-camp/"+t.slug},l.a.createElement(b,{src:"/ccc/"+t.image}),l.a.createElement(E,null,l.a.createElement(v,null,"#",t.edition,": ",t.title),l.a.createElement(h,{date:t.date}),l.a.createElement(x,null,t.description))))}},dndX:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("/Tr7"),i=n("jIYg");function r(e,t){Object(i.a)(2,arguments);var n=Object(a.a)(e),r=Object(a.a)(t);return n.getTime()<r.getTime()}},"xel/":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),l=n.n(r),o=n("vOnD"),m=n("dndX"),c=n("D7tS"),s=n("XZpT"),d=n("3mA1");var p=o.c.div.withConfig({displayName:"listItem__Item",componentId:"snwha5-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);display:flex;flex-direction:row;align-items:top;@media (max-width:","){flex-direction:column;margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize})),u=o.c.div.withConfig({displayName:"listItem__Description",componentId:"snwha5-1"})(["margin-left:2rem;"]),g=o.c.h3.withConfig({displayName:"listItem__Title",componentId:"snwha5-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),f=o.c.h4.withConfig({displayName:"listItem__TitleLightning",componentId:"snwha5-3"})(["font-size:1.3rem;margin:1rem 0 0.5rem 0;padding:0;@media (max-width:","){font-size:1rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),h=o.c.p.withConfig({displayName:"listItem__Resume",componentId:"snwha5-4"})(["color:",";margin:1rem 0;padding:0;font-style:italic;"],(function(e){return e.theme.black})),w=o.c.div.withConfig({displayName:"listItem__Speakers",componentId:"snwha5-5"})(["display:flex;flex-direction:row;align-items:left;"]),E=o.c.div.withConfig({displayName:"listItem__Registration",componentId:"snwha5-6"})(["margin-left:2rem;a{color:",";text-align:center;font-variant:small-caps;display:flex;flex-direction:column;align-items:center;font-weight:bold;font-size:1.2rem;padding:0 2rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}@media (max-width:","){padding:0;}i{@media (max-width:","){display:none;}}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),v=function(e){var t=e.currentTag,n=e.lightning,a=e.talk;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null,l.a.createElement("i",{className:"fa fa-bolt","aria-hidden":"true"})," ",l.a.createElement(i.a,{to:"/talks/"+a.slug},n.title)),l.a.createElement(w,null,n.speakers.length>0&&n.speakers.map((function(e){return l.a.createElement(s.a,{speaker:e,key:e.slug})}))),l.a.createElement(h,null,n.description),l.a.createElement(d.a,{tags:n.tags,currentTag:t}))},x=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.talk,n=e.currentTag;return l.a.createElement(p,null,l.a.createElement(c.a,{date:t.date,edition:t.edition}),l.a.createElement(u,null,l.a.createElement(g,null,t.lightnings&&!!t.lightnings.length&&l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fa fa-bullhorn","aria-hidden":"true"})," "),l.a.createElement(i.a,{to:"/talks/"+t.slug},t.title)),l.a.createElement(w,null,t.speakers.length>0&&t.speakers.map((function(e){return l.a.createElement(s.a,{speaker:e,key:e.slug})}))),l.a.createElement(h,null,t.description),l.a.createElement(d.a,{tags:t.tags,currentTag:n}),t.lightnings&&!!t.lightnings.length&&t.lightnings.map((function(e,a){return l.a.createElement(v,{currentTag:n,lightning:e,talk:t,key:t.edition+"_lightning_"+a})}))),Object(m.a)(new Date,new Date(t.date))&&t.meetupId&&l.a.createElement(E,null,l.a.createElement("a",{href:"https://www.meetup.com/fr-FR/CaenCamp/events/"+t.meetupId+"/",onClick:this.handleClick},l.a.createElement("i",{className:"fa fa-meetup fa-5x"}),l.a.createElement("p",null,"Inscrivez-vous !"))))},a}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-6859c738f7a1e967977a.js.map