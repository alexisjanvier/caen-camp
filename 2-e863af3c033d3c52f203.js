(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,n){var i;e.exports=(i=n(154))&&i.default||i},150:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l});var i=n(146),r=i.b.section.withConfig({displayName:"Content",componentId:"ttbhv6-0"})(["display:flex;flex-direction:row;align-items:top;justify-content:center;@media (max-width:","){margin-top:1rem;}"],function(e){return e.theme.mobileSize}),a=i.b.div.withConfig({displayName:"Content__SingleColumn",componentId:"ttbhv6-1"})(["width:100%;"]),o=i.b.div.withConfig({displayName:"Content__LeftColumn",componentId:"ttbhv6-2"})(["padding:1rem;flex:3 0 0;min-height:600px;"]),l=i.b.aside.withConfig({displayName:"Content__RightColumn",componentId:"ttbhv6-3"})(["padding:1rem 0.5rem;flex:1 0 0;display:flex;flex-direction:column;"])},151:function(e,t,n){"use strict";var i=n(7),r=n.n(i),a=n(155),o=n(0),l=n.n(o),c=n(4),m=n.n(c),d=n(152),u=n(146),s=n(149),f=n(156),p=n.n(f),h=u.b.div.withConfig({displayName:"aboutCode__CodeContainer",componentId:"sc-1ev8gzo-0"})(["display:flex;flex-direction:column;align-self:flex-start;width:30%;@media (max-width:","){width:100%;margin-bottom:1rem;font-size:0.8rem;}text-align:left;p{margin:0;line-height:1.5rem;@media (max-width:","){line-height:1rem;}a{color:",";font-weight:bold;-webkit-transition:color 0.2s;&:hover{color:crimson;}}}"],function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize},function(e){return e.theme.black}),g=u.b.h4.withConfig({displayName:"aboutCode__Title",componentId:"sc-1ev8gzo-1"})(["border-bottom:1px solid ",";padding:0.5rem 1rem;font-size:1.2rem;margin:0 0 1rem 0;@media (max-width:","){padding:0.5rem 0.2rem;}"],function(e){return e.theme.black},function(e){return e.theme.mobileSize}),b=function(){return l.a.createElement(h,null,l.a.createElement(g,null,"Du code justement"),l.a.createElement("p",null,"Ce site est réalisé grâce à"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")," et il est hébergé sur ",l.a.createElement("a",{href:"https://github.com/CaenCamp"},"Github"),"."),l.a.createElement("p",null,"Le code est disponible sur"," ",l.a.createElement("a",{href:"https://github.com/CaenCamp/new-website"},"un dépôt")," git et chaque"," ",l.a.createElement("a",{href:"https://github.com/CaenCamp/new-website/blob/master/.github/CONTRIBUTING.md"},"PR")," ","permettant d'améliorer le site est la bienvenue ;)"))},w=n(147),A=n.n(w),y=function(){return l.a.createElement(h,null,l.a.createElement(g,null,"Call for speakers"),l.a.createElement("p",null,"Faites vivre les CaenCamp.s grâce à votre expérience:"," ",l.a.createElement(A.a,{to:"/call-for-speakers"},"proposez un sujet de talk !")))},x=(n(47),u.b.div.withConfig({displayName:"Links__LinksContainer",componentId:"sc-1i865cl-0"})(["width:100%;display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:center;margin-top:1rem;a{color:",";margin:0 1rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}}"],function(e){return e.theme.grey})),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.links;return l.a.createElement(x,null,e.length>0&&e.map(function(e){return l.a.createElement("a",{key:e.title,href:e.url},l.a.createElement("i",{className:"fa fa-"+e.title.toLowerCase()+" fa-2x"}))}))},t}(o.Component),v=u.b.div.withConfig({displayName:"stayInTouch__ContactContainer",componentId:"sc-11ahlf9-0"})(["display:flex;flex-direction:column;align-self:flex-start;width:30%;@media (max-width:","){width:100%;margin-bottom:1rem;font-size:0.8rem;}text-align:left;p{margin:0;line-height:1.5rem;@media (max-width:","){line-height:1rem;}}"],function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),E=u.b.h4.withConfig({displayName:"stayInTouch__Title",componentId:"sc-11ahlf9-1"})(["border-bottom:1px solid ",";padding:0.5rem 1rem;font-size:1.2rem;margin:0 0 1rem 0;"],function(e){return e.theme.black}),k=function(e){var t=e.links;return l.a.createElement(v,null,l.a.createElement(E,null,"Restons en contact"),l.a.createElement(C,{links:t}))},z=u.b.footer.withConfig({displayName:"Footer",componentId:"sc-1qyw9rl-0"})(["display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;align-items:center;align-contents:center;text-align:center;padding:1rem 10%;background-color:#f6f7f8;@media (max-width:","){flex-direction:column;padding:0.5rem;margin:0;}"],function(e){return e.theme.mobileSize}),I=u.b.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-1qyw9rl-1"})(["text-align:center;width:100%;font-style:italic;margin-top:1rem;"]),N=function(e){var t=e.socialLinks;return l.a.createElement(z,null,l.a.createElement(k,{links:t}),l.a.createElement(y,null),l.a.createElement(b,null),l.a.createElement(I,null,"@caencamp 2018"))},S=n(157),T=n.n(S),_=u.b.img.attrs({src:T.a}).withConfig({displayName:"Logo",componentId:"c4twbk-0"})(["height:5rem;margin:0;padding:0.5rem 5rem 0 5rem;@media (max-width:","){height:2rem;padding:1rem 0 0 0;}"],function(e){return e.theme.mobileSize}),R=n(158),V=n.n(R),j=u.b.img.attrs({src:V.a}).withConfig({displayName:"LogoCCC",componentId:"cmtlkn-0"})(["height:3rem;margin:0;padding:0;@media (max-width:","){height:2rem;padding:0;}"],function(e){return e.theme.mobileSize}),M=u.b.nav.withConfig({displayName:"Nav",componentId:"n7c6p4-0"})(["margin-top:0;margin-left:auto;margin-right:5rem;a{font-size:1.4rem;display:inline-block;color:",";padding:2.1rem 0;font-variant:small-caps;margin-right:2rem;font-weight:bold;@media (max-width:","){font-size:1rem;padding:0.5rem;margin-right:0;}}@media (max-width:","){margin:0;}"],function(e){return e.theme.grey},function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),U={fontSize:"bold",borderBottom:"2px solid #193744",color:"black",outline:"none"},G=function(){return l.a.createElement(M,null,l.a.createElement(A.a,{to:"/",activeStyle:U},"accueil"),l.a.createElement(A.a,{to:"/speakers",activeStyle:U},"les speakers"),l.a.createElement(A.a,{to:"/talks",activeStyle:U},"les talks"),l.a.createElement(A.a,{to:"/coding-caen-camp",activeStyle:U},l.a.createElement(j,null)))},O=u.b.div.withConfig({displayName:"Header__HeaderContent",componentId:"sc-1yvrxs-0"})(["align-items:center;background-color:#fff;display:flex;flex-direction:row;left:0;position:fixed;right:0;top:0;width:100%;border-bottom:1px solid #ececec;@media (max-width:","){flex-direction:column;}"],function(e){return e.theme.mobileSize}),L=function(){return l.a.createElement(O,null,l.a.createElement("div",null,l.a.createElement(A.a,{to:"/"},l.a.createElement(_,null))),l.a.createElement(G,null))},W=n(169),Y=n.n(W);function F(){var e=Y()(["\n  html {\n    font-family: 'Work Sans', sans-serif;\n    font-size: 14px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: #262626;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n    font-variant: small-caps;\n  }\n\n  a {\n    text-decoration: none;\n  }\n  a:active {\n    outline: none;\n  }\n  iframe {\n    margin 1rem auto;\n  }\n"]);return F=function(){return e},e}Object(u.c)(F());var Z={white:"#fff",black:"#000",greyLight:"#EBEBEB",grey:"#696969",greyDark:"#262626",blue:"#193744",green:"#1E8804",mobileSize:"799px"},B=u.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1y3411e-0"})(["height:100%;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:5rem 1fr auto;grid-template-areas:'h h h h h h h h h h h h' '. . c c c c c c c c . .' 'f f f f f f f f f f f f';@media (max-width:","){grid-template-columns:repeat(3,1fr);grid-template-rows:0.2rem 1fr auto;grid-template-areas:'h h h' 'c c c' 'f f f';}"],function(e){return e.theme.mobileSize}),D=u.b.header.withConfig({displayName:"layout__Header",componentId:"sc-1y3411e-1"})(["grid-area:h;z-index:9;position:1;"]),H=u.b.section.withConfig({displayName:"layout__Content",componentId:"sc-1y3411e-2"})(["grid-area:c;z-index:8;position:2;padding:3rem 0;@media (max-width:","){padding:5rem 0;}"],function(e){return e.theme.mobileSize}),Q=u.b.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1y3411e-3"})(["grid-area:f;position:3;"]),q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(d.StaticQuery,{query:"809062563",render:function(t){return l.a.createElement(u.a,{theme:Z},l.a.createElement("div",null,l.a.createElement(B,null,l.a.createElement(s.Helmet,null,l.a.createElement("link",{rel:"icon",href:p.a,type:"image/x-icon"})),l.a.createElement(D,null,l.a.createElement(L,null)),l.a.createElement(H,null,e),l.a.createElement(Q,null,l.a.createElement(N,{socialLinks:t.site.siteMetadata.socialLinks})))))},data:a})},t}(o.Component);q.propTypes={children:m.a.object};t.a=q},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return f});var i=n(0),r=n.n(i),a=n(4),o=n.n(a),l=n(147),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var m=n(148),d=n.n(m);n.d(t,"PageRenderer",function(){return d.a});var u=n(34);n.d(t,"parsePath",function(){return u.a});var s=r.a.createContext({}),f=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return l});n(77),n(48),n(164),n(76),n(165),n(51),n(82),n(47),n(75),n(33);var i=function(e){return Object.assign({id:e.id||null,html:e.html||null},e.frontmatter)},r=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=[]);var r=i(e),a=n.map(function(n){return e.frontmatter.edition===n.node.frontmatter.edition?function(e,t){return void 0===t&&(t=[]),Object.assign({},i(e),{speakers:e.frontmatter.speakers.map(function(e){var n=t.find(function(t){return t.node.frontmatter.slug===e});return n?i(n.node):null}).filter(function(e){return null!==e})})}(n.node,t):null}).filter(function(e){return null!==e}),o=a.length?r.tags.concat(a.reduce(function(e,t){return e.concat(t.tags)},[])):r.tags,l=e.frontmatter.speakers.map(function(e){var n=t.find(function(t){return t.node.frontmatter.slug===e});return n?i(n.node):null}).filter(function(e){return null!==e}),c=a.length?l.concat(a.reduce(function(e,t){return e.concat(t.speakers)},[])):l;return Object.assign({},r,{lightnings:a,speakers:l,globalTags:Array.from(new Set(o)),globalSpeakers:c})},a=function(e,t){return void 0===t&&(t=[]),Object.assign({},i(e),{craftsmen:e.frontmatter.craftsmen.map(function(e){var n=t.find(function(t){return t.node.frontmatter.slug===e});return n?i(n.node):null}).filter(function(e){return null!==e})})},o=function(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=[]);var a=t.map(function(e){return i(e.node)}).filter(function(t){return t.speakers.find(function(t){return t===e.frontmatter.slug})}),o=n.map(function(e){return i(e.node)}).filter(function(t){return t.speakers.find(function(t){return t===e.frontmatter.slug})}).map(function(e){var n=t.map(function(e){return i(e.node)}).find(function(t){return t.edition===e.edition});return Object.assign({},e,{slug:n?n.slug:""})});return Object.assign({},i(e),{talks:a,lightning:o,dojos:r.map(function(e){return i(e.node)}).filter(function(t){return t.craftsmen.find(function(t){return t===e.frontmatter.slug})})})},l=function(e){var t=null;return null===e?t:(e.edges.map(function(e){t=e.node}),t)}},154:function(e,t,n){"use strict";n.r(t);n(33);var i=n(0),r=n.n(i),a=n(4),o=n.n(a),l=n(49),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"CaenCamp",baseline:"Ici la baseline des Caencamp quand nous en aurons une.",socialLinks:[{title:"Twitter",url:"https://twitter.com/caencamp"},{title:"GitHub",url:"https://github.com/CaenCamp"},{title:"Meetup",url:"https://www.meetup.com/CaenCamp"},{title:"YouTube",url:"https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw"},{title:"Trello",url:"https://trello.com/b/ROiO9tng/caencamp"},{title:"Facebook",url:"https://www.facebook.com/CaenCamp/"},{title:"Rss",url:"https://www.meetup.com/fr-FR/CaenCamp/events/rss/"}]}},nextMeetup:{edges:[{node:{name:"CCC #2 : On fait quoi ?",link:"https://www.meetup.com/CaenCamp/events/255797424/",yes_rsvp_count:15}}]}}}},156:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAASBQTFRF////+vr78fPz6uzt6u3u8vP0+vv79fb3z9XXmqascICJWm12UmZwUmdwW253c4SLn6qw09ja9/j52NzffYyUV2t0K0RQJ0BMLEVROFBbJT9LIz1KKUJOS2BrgZCX4OTm5ejpXnF6LUZSOVBbTWJsZ3mBanyEZniBN05aVmp0ZXeAbX6HcIGJJj9Mbn+H7vDxytDTOE9aQFZhbH2GcYGJP1VgdoaOgI+WHTdERFpk2t/h7/HxeYmRP1ZhPlRfRVtlNk5ZPFNeRFplPVRfOlFdNU1YJD5KiZee7O7vnaiuVWlzMEhUIDpGGTRBFzI/FzNAIDtHM0tXprC18fLz/f3+zNLVqrS5j5yjfo2Vf46Wkp6lrbe7z9XY/v7++/z8/Pz8RVigfgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAACMSURBVBjTY2AAAUYmZhZWNgYoYOfg5OLm4eXjFxAUAvGFRUTFxMQlJKWkZWTl5BkYFBSVlFVU1dQ1NLW0dXT19BkMDCWMFI0VTUzVzcwVLSytGKxtdG3t7B0cnWydXVzd3NkZGDw8vbx9fP38fQMC+YKCQaaGeISGhUdERkXH6MfCbGaIjYtHcAYCAAAzGxSG3k8iSQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0yNVQwNzo1NzozOCswMDowMFDYb6cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTEtMjVUMDc6NTc6MzgrMDA6MDAhhdcbAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTE1OTY2NTheyORXAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMTctMTEtMjUvYzhmNDY5MmUxOGMxNzFiZjdhZTExYTczNDNhMzc0M2EuaWNvLnBuZw3iVSkAAAAASUVORK5CYII="},157:function(e,t,n){e.exports=n.p+"static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png"},158:function(e,t,n){e.exports=n.p+"static/logoSquareCCC-f72566cba8d4a6afc1dca732979bb49f.jpg"},162:function(e,t,n){"use strict";n(83);var i=n(0),r=n.n(i),a=n(146),o=n(181),l=n.n(o),c=n(182),m=n.n(c),d=a.b.div.withConfig({displayName:"Calendar__Container",componentId:"sc-13pye41-0"})(["border-radius:0.5rem;background-color:",";color:",";padding:0;width:80px;height:",";@media (max-width:","){border-radius:0;background-color:",";width:100%;height:auto;}"],function(e){return e.theme.black},function(e){return e.theme.white},function(e){return e.displaySchedules?"122px":"103px"},function(e){return e.theme.mobileSize},function(e){return e.theme.white}),u=a.b.div.withConfig({displayName:"Calendar__DateContainer",componentId:"sc-13pye41-1"})(["border-radius:0.5rem;background-color:",";color:",";margin:2px;display:flex;flex-direction:column;align-items:center;width:76px;text-align:center;@media (max-width:","){flex-direction:row;border-radius:0;background-color:",";width:100%;align-items:baseline;justify-content:center;padding-bottom:0.5rem;margin:0.5rem 0;border-bottom:1px solid ",";}"],function(e){return e.theme.white},function(e){return e.theme.black},function(e){return e.theme.mobileSize},function(e){return e.theme.white},function(e){return e.theme.greyLight}),s=a.b.span.withConfig({displayName:"Calendar__Day",componentId:"sc-13pye41-2"})(["width:100%;font-size:1rem;margin:0;padding:0;@media (max-width:","){font-size:1.2rem;font-weight:bold;text-transform:none;width:auto;margin:0 0.2rem;}"],function(e){return e.theme.mobileSize}),f=a.b.span.withConfig({displayName:"Calendar__Month",componentId:"sc-13pye41-3"})(["width:100%;font-size:1.8rem;text-transform:uppercase;margin:0;padding:0;@media (max-width:","){font-size:1.2rem;font-weight:bold;text-transform:none;width:auto;margin:0 0.2rem;}"],function(e){return e.theme.mobileSize}),p=a.b.span.withConfig({displayName:"Calendar__Year",componentId:"sc-13pye41-4"})(["width:100%;font-size:1.4rem;margin-bottom:0.5rem;@media (max-width:","){font-size:1.2rem;font-weight:bold;text-transform:none;width:auto;margin:0 0.2rem;}"],function(e){return e.theme.mobileSize}),h=a.b.div.withConfig({displayName:"Calendar__Edition",componentId:"sc-13pye41-5"})(["width:100%;font-size:1.2rem;text-align:center;font-weight:bold;margin:0.2rem 0;@media (max-width:","){display:none;}"],function(e){return e.theme.mobileSize}),g=a.b.span.withConfig({displayName:"Calendar__Schedule",componentId:"sc-13pye41-6"})(["width:100%;font-size:1.2rem;margin:0;padding:0;@media (max-width:","){font-size:1.2rem;font-weight:bold;text-transform:none;width:auto;margin:0 0.2rem;}"],function(e){return e.theme.mobileSize});t.a=function(e){var t=e.date,n=e.edition,i=m()(t,"DD-MMM-YYYY-HH:mm",{locale:l.a}).split("-"),a=i[0],o=i[1],c=i[2],b=i[3],w=parseInt(c,10)>=2017;return r.a.createElement(d,{displaySchedules:w},r.a.createElement(h,null,"# ",n),r.a.createElement(u,null,r.a.createElement(s,null,a),r.a.createElement(f,null,o),r.a.createElement(p,null,c),w&&r.a.createElement(g,null,b)))}},166:function(e,t,n){"use strict";n(170),n(47);var i=n(0),r=n.n(i),a=n(146),o=n(147),l=n.n(o),c=a.b.ul.withConfig({displayName:"Tags",componentId:"sc-1mg3606-0"})(["list-style:none;margin:0;overflow:hidden;padding:0;& > li{float:left;}"]),m=a.b.li.withConfig({displayName:"Tags__Tag",componentId:"sc-1mg3606-1"})(["background:#eee;border-radius:3px 0 0 3px;color:#999;display:inline-block;height:26px;line-height:26px;padding:0 20px 0 23px;position:relative;margin:0 10px 10px 0;text-decoration:none;-webkit-transition:color 0.2s;a{color:black;}&::before{background:#fff;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,0.25);content:'';height:6px;left:10px;position:absolute;width:6px;top:10px;}&::after{background:#fff;border-bottom:13px solid transparent;border-left:10px solid #eee;border-top:13px solid transparent;content:'';position:absolute;right:0;top:0;}&.current,&:hover{background-color:crimson;color:white;a{color:white;}}&.current::after,&:hover::after{border-left-color:crimson;}"]);t.a=function(e){var t=e.tags,n=e.currentTag;return r.a.createElement(c,null,t.sort(function(e,t){var n=e.toLowerCase(),i=t.toLowerCase();return n<i?-1:n>i?1:0}).map(function(e){return r.a.createElement(m,{className:e==n?"current":"",key:e},r.a.createElement(l.a,{to:"/talks?tag="+e},e))}))}},171:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(146),o=a.b.div.withConfig({displayName:"MinimalView__Item",componentId:"sc-1sd2yp7-0"})(["display:flex;flex-direction:row;align-items:center;margin-right:1rem;"]),l=a.b.img.withConfig({displayName:"MinimalView__Profile",componentId:"sc-1sd2yp7-1"})(["border-radius:50%;width:30px;height:30px;margin-right:0.5rem;"]),c=a.b.span.withConfig({displayName:"MinimalView__Name",componentId:"sc-1sd2yp7-2"})(["font-size:1rem;text-align:left;padding:0;color:",";"],function(e){return e.theme.black});t.a=function(e){var t=e.speaker;return r.a.createElement(o,null,r.a.createElement(l,{src:"/speakers/"+t.picture}),r.a.createElement(c,null,t.firstName," ",t.lastName))}}}]);
//# sourceMappingURL=2-e863af3c033d3c52f203.js.map