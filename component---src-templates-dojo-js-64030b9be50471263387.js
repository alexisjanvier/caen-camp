webpackJsonp([99054644627273],{60:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return e.raw=n,e}n.__esModule=!0,n.Name=n.Profile=n.Item=void 0;var r=l(["\n    text-align: center;\n    border: 1px solid ",";\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    margin: 1rem 0;\n    width: 80px;\n    a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 1rem 0;\n    }\n"],["\n    text-align: center;\n    border: 1px solid ",";\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    margin: 1rem 0;\n    width: 80px;\n    a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 1rem 0;\n    }\n"]),i=l(["\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n"],["\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n"]),d=l(["\n    font-size: 1rem;\n    text-align: center;\n    padding: 1rem;\n    color: ",";\n    font-variant: small-caps;\n"],["\n    font-size: 1rem;\n    text-align: center;\n    padding: 1rem;\n    color: ",";\n    font-variant: small-caps;\n"]),u=t(2),o=a(u),f=t(3),c=a(f),m=t(5),s=a(m),g=n.Item=c.default.div(r,function(e){var n=e.theme;return n.greyLight}),p=n.Profile=c.default.img(i),x=n.Name=c.default.span(d,function(e){var n=e.theme;return n.black});n.default=function(e){var n=e.speaker;return o.default.createElement(g,null,o.default.createElement(s.default,{to:"/speakers/"+n.slug},o.default.createElement(p,{src:"/speakers/"+n.picture}),o.default.createElement(x,null,n.firstName," ",n.lastName)))}},175:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return e.raw=n,e}n.__esModule=!0,n.query=n.Title=void 0;var r=l(["\n    color: ",";\n"],["\n    color: ",";\n"]),i=l(["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n    margin: 4rem 0;\n"],["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n    margin: 4rem 0;\n"]),d=l(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-right: 2rem;\n"],["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-right: 2rem;\n"]),u=l(["\n    display: flex;\n    flex-direction: column;\n"],["\n    display: flex;\n    flex-direction: column;\n"]),o=l(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 0;\n    margin: 0;\n    color: ",";\n"],["\n    font-size: 2rem;\n    text-align: left;\n    padding: 0;\n    margin: 0;\n    color: ",";\n"]),f=t(10),c=a(f),m=t(2),s=a(m),g=t(5),p=a(g),x=t(3),h=a(x),E=t(16),v=t(8),y=t(60),b=a(y),w=t(18),k=a(w),_=t(19),j=a(_),M=(0,h.default)(p.default)(r,function(e){var n=e.theme;return n.black}),N=h.default.div(i),z=h.default.div(d),q=h.default.div(u),I=n.Title=h.default.h1(o,function(e){var n=e.theme;return n.black});n.default=function(e){var n=e.data,t=(0,E.formatDojoWithCraftsmen)(n.rawDojo,n.craftsmen.edges);return s.default.createElement(v.SingleColumn,null,s.default.createElement(c.default,null,s.default.createElement("title",null,t.title),s.default.createElement("meta",{name:"description",content:t.description}),s.default.createElement("meta",{name:"keywords",content:""+t.tags})),s.default.createElement(M,{to:"/coding-dojo"},s.default.createElement("i",{className:"fa fa-list-alt","aria-hidden":"true"})," Retour à la liste"),s.default.createElement(N,null,s.default.createElement(z,null,s.default.createElement(k.default,{date:t.date,edition:t.edition}),t.craftsmen.map(function(e){return s.default.createElement(b.default,{key:e.slug,speaker:e})})),s.default.createElement(q,null,s.default.createElement(I,null,t.title),s.default.createElement(j.default,{tags:t.tags}),s.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))};n.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-dojo-js-64030b9be50471263387.js.map