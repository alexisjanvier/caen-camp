(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{143:function(e,t,n){"use strict";n.r(t);var a=n(149),r=n(0),i=n.n(r),o=n(150),l=n(158),c=n(151),m=(n(247),n(249),function(e){var t=e.meetup;return i.a.createElement(o.c,null,i.a.createElement("a",{className:"linkToCallForPaper",href:"/call-for-paper"},"Proposer un talk"),i.a.createElement("a",{className:"linkToWelcomeUs",href:"/welcome-us"},"Accueillez-nous !"),i.a.createElement("a",{className:"linkToCodingDojo",href:"/coding-dojo"},"Le Dojo"),function(e){var t=i.a.createElement("div",{className:"nextMeetup__content"},"Aucune rencontre à venir");return e&&(t=i.a.createElement("div",{className:"nextMeetup__content"},i.a.createElement("div",{className:"nextMeetup__content__name"},e.name),i.a.createElement("div",{className:"nextMeetup__content__rsvp"},e.yes_rsvp_count," participants"),i.a.createElement("a",{href:e.link,target:"_blank",className:"nextMeetup__content__link"},"S'inscrire"))),i.a.createElement("div",{className:"nextMeetup"},i.a.createElement("h5",{className:"nextMeetup__title"},"Prochaine rencontre"),t)}(t))});t.default=function(e){var t=e.nextMeetup;return t&&(t=Object(l.c)(t)),i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(a.Helmet,{title:"CaenCamp: soutenez-nous"},i.a.createElement("meta",{name:"description",content:"Accueillez les CaenCamp"})),i.a.createElement(o.a,{id:"welcomeUsContent"},i.a.createElement(o.b,null,i.a.createElement("h1",null,"Accueillez nous")),i.a.createElement(m,{meetup:t}))))}},148:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},150:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l});var a=n(146),r=a.b.section.withConfig({displayName:"Content",componentId:"ttbhv6-0"})(["display:flex;flex-direction:row;align-items:top;justify-content:center;@media (max-width:","){margin-top:1rem;}"],function(e){return e.theme.mobileSize}),i=a.b.div.withConfig({displayName:"Content__SingleColumn",componentId:"ttbhv6-1"})(["width:100%;"]),o=a.b.div.withConfig({displayName:"Content__LeftColumn",componentId:"ttbhv6-2"})(["padding:1rem;flex:3 0 0;min-height:600px;"]),l=a.b.aside.withConfig({displayName:"Content__RightColumn",componentId:"ttbhv6-3"})(["padding:1rem 0.5rem;flex:1 0 0;display:flex;flex-direction:column;"])},151:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(154),o=n(0),l=n.n(o),c=n(4),m=n.n(c),u=n(152),s=n(146),d=n(149),f=n(155),p=n.n(f),h=s.b.div.withConfig({displayName:"aboutCode__CodeContainer",componentId:"sc-1ev8gzo-0"})(["display:flex;flex-direction:column;align-self:flex-start;width:30%;@media (max-width:","){width:100%;margin-bottom:1rem;font-size:0.8rem;}text-align:left;p{margin:0;line-height:1.5rem;@media (max-width:","){line-height:1rem;}a{color:",";font-weight:bold;-webkit-transition:color 0.2s;&:hover{color:crimson;}}}"],function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize},function(e){return e.theme.black}),g=s.b.h4.withConfig({displayName:"aboutCode__Title",componentId:"sc-1ev8gzo-1"})(["border-bottom:1px solid ",";padding:0.5rem 1rem;font-size:1.2rem;margin:0 0 1rem 0;@media (max-width:","){padding:0.5rem 0.2rem;}"],function(e){return e.theme.black},function(e){return e.theme.mobileSize}),A=function(){return l.a.createElement(h,null,l.a.createElement(g,null,"Du code justement"),l.a.createElement("p",null,"Ce site est réalisé grâce à"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")," et il est hébergé sur ",l.a.createElement("a",{href:"https://github.com/CaenCamp"},"Github"),"."),l.a.createElement("p",null,"Le code est disponible sur"," ",l.a.createElement("a",{href:"https://github.com/CaenCamp/new-website"},"un dépôt")," git et chaque"," ",l.a.createElement("a",{href:"https://github.com/CaenCamp/new-website/blob/master/.github/CONTRIBUTING.md"},"PR")," ","permettant d'améliorer le site est la bienvenue ;)"))},b=n(147),w=n.n(b),y=function(){return l.a.createElement(h,null,l.a.createElement(g,null,"Call for speakers"),l.a.createElement("p",null,"Faites vivre les CaenCamp.s grâce à votre expérience:"," ",l.a.createElement(w.a,{to:"/call-for-speakers"},"proposez un sujet de talk !")))},C=(n(47),s.b.div.withConfig({displayName:"Links__LinksContainer",componentId:"sc-1i865cl-0"})(["width:100%;display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:center;margin-top:1rem;a{color:",";margin:0 1rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}}"],function(e){return e.theme.grey})),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.links;return l.a.createElement(C,null,e.length>0&&e.map(function(e){return l.a.createElement("a",{key:e.title,href:e.url},l.a.createElement("i",{className:"fa fa-"+e.title.toLowerCase()+" fa-2x"}))}))},t}(o.Component),E=s.b.div.withConfig({displayName:"stayInTouch__ContactContainer",componentId:"sc-11ahlf9-0"})(["display:flex;flex-direction:column;align-self:flex-start;width:30%;@media (max-width:","){width:100%;margin-bottom:1rem;font-size:0.8rem;}text-align:left;p{margin:0;line-height:1.5rem;@media (max-width:","){line-height:1rem;}}"],function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),x=s.b.h4.withConfig({displayName:"stayInTouch__Title",componentId:"sc-11ahlf9-1"})(["border-bottom:1px solid ",";padding:0.5rem 1rem;font-size:1.2rem;margin:0 0 1rem 0;"],function(e){return e.theme.black}),k=function(e){var t=e.links;return l.a.createElement(E,null,l.a.createElement(x,null,"Restons en contact"),l.a.createElement(v,{links:t}))},z=s.b.footer.withConfig({displayName:"Footer",componentId:"sc-1qyw9rl-0"})(["display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;align-items:center;align-contents:center;text-align:center;padding:1rem 10%;background-color:#f6f7f8;@media (max-width:","){flex-direction:column;padding:0.5rem;margin:0;}"],function(e){return e.theme.mobileSize}),N=s.b.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-1qyw9rl-1"})(["text-align:center;width:100%;font-style:italic;margin-top:1rem;"]),I=function(e){var t=e.socialLinks;return l.a.createElement(z,null,l.a.createElement(k,{links:t}),l.a.createElement(y,null),l.a.createElement(A,null),l.a.createElement(N,null,"@caencamp 2018"))},_=n(156),T=n.n(_),R=s.b.img.attrs({src:T.a}).withConfig({displayName:"Logo",componentId:"c4twbk-0"})(["height:5rem;margin:0;padding:0.5rem 5rem 0 5rem;@media (max-width:","){height:2rem;padding:1rem 0 0 0;}"],function(e){return e.theme.mobileSize}),S=n(157),j=n.n(S),M=s.b.img.attrs({src:j.a}).withConfig({displayName:"LogoCCC",componentId:"cmtlkn-0"})(["height:3rem;margin:0;padding:0;@media (max-width:","){height:2rem;padding:0;}"],function(e){return e.theme.mobileSize}),U=s.b.nav.withConfig({displayName:"Nav",componentId:"n7c6p4-0"})(["margin-top:0;margin-left:auto;margin-right:5rem;a{font-size:1.4rem;display:inline-block;color:",";padding:2.1rem 0;font-variant:small-caps;margin-right:2rem;font-weight:bold;@media (max-width:","){font-size:1rem;padding:0.5rem;margin-right:0;}}@media (max-width:","){margin:0;}"],function(e){return e.theme.grey},function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),V={fontSize:"bold",borderBottom:"2px solid #193744",color:"black",outline:"none"},G=function(){return l.a.createElement(U,null,l.a.createElement(w.a,{to:"/",activeStyle:V},"accueil"),l.a.createElement(w.a,{to:"/speakers",activeStyle:V},"les speakers"),l.a.createElement(w.a,{to:"/talks",activeStyle:V},"les talks"),l.a.createElement(w.a,{to:"/coding-caen-camp",activeStyle:V},l.a.createElement(M,null)))},F=s.b.div.withConfig({displayName:"Header__HeaderContent",componentId:"sc-1yvrxs-0"})(["align-items:center;background-color:#fff;display:flex;flex-direction:row;left:0;position:fixed;right:0;top:0;width:100%;border-bottom:1px solid #ececec;@media (max-width:","){flex-direction:column;}"],function(e){return e.theme.mobileSize}),O=function(){return l.a.createElement(F,null,l.a.createElement("div",null,l.a.createElement(w.a,{to:"/"},l.a.createElement(R,null))),l.a.createElement(G,null))},W=n(164),L=n.n(W);function B(){var e=L()(["\n  html {\n    font-family: 'Work Sans', sans-serif;\n    font-size: 14px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: #262626;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-variant: small-caps;\n  }\n\n  a {\n    text-decoration: none;\n  }\n  a:active {\n    outline: none;\n  }\n  iframe {\n    margin 1rem auto;\n  }\n"]);return B=function(){return e},e}Object(s.c)(B());var Z={white:"#fff",black:"#000",greyLight:"#EBEBEB",grey:"#696969",greyDark:"#262626",blue:"#193744",green:"#1E8804",mobileSize:"799px"},Y=s.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1y3411e-0"})(["height:100%;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:5rem 1fr auto;grid-template-areas:'h h h h h h h h h h h h' '. . c c c c c c c c . .' 'f f f f f f f f f f f f';@media (max-width:","){grid-template-columns:repeat(3,1fr);grid-template-rows:0.2rem 1fr auto;grid-template-areas:'h h h' 'c c c' 'f f f';}"],function(e){return e.theme.mobileSize}),D=s.b.header.withConfig({displayName:"layout__Header",componentId:"sc-1y3411e-1"})(["grid-area:h;z-index:9;position:1;"]),H=s.b.section.withConfig({displayName:"layout__Content",componentId:"sc-1y3411e-2"})(["grid-area:c;z-index:8;position:2;padding:3rem 0;@media (max-width:","){padding:5rem 0;}"],function(e){return e.theme.mobileSize}),P=s.b.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1y3411e-3"})(["grid-area:f;position:3;"]),Q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(u.StaticQuery,{query:"809062563",render:function(t){return l.a.createElement(s.a,{theme:Z},l.a.createElement("div",null,l.a.createElement(Y,null,l.a.createElement(d.Helmet,null,l.a.createElement("link",{rel:"icon",href:p.a,type:"image/x-icon"})),l.a.createElement(D,null,l.a.createElement(O,null)),l.a.createElement(H,null,e),l.a.createElement(P,null,l.a.createElement(I,{socialLinks:t.site.siteMetadata.socialLinks})))))},data:i})},t}(o.Component);Q.propTypes={children:m.a.object};t.a=Q},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(147),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var m=n(148),u=n.n(m);n.d(t,"PageRenderer",function(){return u.a});var s=n(34);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},154:function(e){e.exports={data:{site:{siteMetadata:{title:"CaenCamp",baseline:"Ici la baseline des Caencamp quand nous en aurons une.",socialLinks:[{title:"Twitter",url:"https://twitter.com/caencamp"},{title:"GitHub",url:"https://github.com/CaenCamp"},{title:"Meetup",url:"https://www.meetup.com/CaenCamp"},{title:"YouTube",url:"https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw"},{title:"Trello",url:"https://trello.com/b/ROiO9tng/caencamp"},{title:"Facebook",url:"https://www.facebook.com/CaenCamp/"},{title:"Rss",url:"https://www.meetup.com/fr-FR/CaenCamp/events/rss/"}]}},nextMeetup:{edges:[{node:{name:"#40 PhpSpec: Les tests unitaires version BDD",link:"https://www.meetup.com/CaenCamp/events/255224585/",yes_rsvp_count:15}}]}}}},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAASBQTFRF////+vr78fPz6uzt6u3u8vP0+vv79fb3z9XXmqascICJWm12UmZwUmdwW253c4SLn6qw09ja9/j52NzffYyUV2t0K0RQJ0BMLEVROFBbJT9LIz1KKUJOS2BrgZCX4OTm5ejpXnF6LUZSOVBbTWJsZ3mBanyEZniBN05aVmp0ZXeAbX6HcIGJJj9Mbn+H7vDxytDTOE9aQFZhbH2GcYGJP1VgdoaOgI+WHTdERFpk2t/h7/HxeYmRP1ZhPlRfRVtlNk5ZPFNeRFplPVRfOlFdNU1YJD5KiZee7O7vnaiuVWlzMEhUIDpGGTRBFzI/FzNAIDtHM0tXprC18fLz/f3+zNLVqrS5j5yjfo2Vf46Wkp6lrbe7z9XY/v7++/z8/Pz8RVigfgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAACMSURBVBjTY2AAAUYmZhZWNgYoYOfg5OLm4eXjFxAUAvGFRUTFxMQlJKWkZWTl5BkYFBSVlFVU1dQ1NLW0dXT19BkMDCWMFI0VTUzVzcwVLSytGKxtdG3t7B0cnWydXVzd3NkZGDw8vbx9fP38fQMC+YKCQaaGeISGhUdERkXH6MfCbGaIjYtHcAYCAAAzGxSG3k8iSQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0yNVQwNzo1NzozOCswMDowMFDYb6cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTEtMjVUMDc6NTc6MzgrMDA6MDAhhdcbAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTE1OTY2NTheyORXAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMTctMTEtMjUvYzhmNDY5MmUxOGMxNzFiZjdhZTExYTczNDNhMzc0M2EuaWNvLnBuZw3iVSkAAAAASUVORK5CYII="},156:function(e,t,n){e.exports=n.p+"static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png"},157:function(e,t,n){e.exports=n.p+"static/logoSquareCCC-f72566cba8d4a6afc1dca732979bb49f.jpg"},158:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return l});n(76),n(47),n(75),n(33);var a=function(e){return Object.assign({id:e.id||null,html:e.html||null},e.frontmatter)},r=function(e,t){return void 0===t&&(t=[]),Object.assign({},a(e),{speakers:e.frontmatter.speakers.map(function(e){var n=t.find(function(t){return t.node.frontmatter.slug===e});return n?a(n.node):null}).filter(function(e){return null!==e})})},i=function(e,t){return void 0===t&&(t=[]),Object.assign({},a(e),{craftsmen:e.frontmatter.craftsmen.map(function(e){var n=t.find(function(t){return t.node.frontmatter.slug===e});return n?a(n.node):null}).filter(function(e){return null!==e})})},o=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=[]),Object.assign({},a(e),{talks:t.map(function(e){return a(e.node)}).filter(function(t){return t.speakers.find(function(t){return t===e.frontmatter.slug})}),dojos:n.map(function(e){return a(e.node)}).filter(function(t){return t.craftsmen.find(function(t){return t===e.frontmatter.slug})})})},l=function(e){var t=null;return null===e?t:(e.edges.map(function(e){t=e.node}),t)}},247:function(e,t,n){"use strict";n(248)("link",function(e){return function(t){return e(this,"a","href",t)}})},248:function(e,t,n){var a=n(5),r=n(16),i=n(27),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},249:function(e,t,n){var a=n(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-welcome-us-js-87fef28c3797e1bfeddf.js.map