webpackJsonp([17685752154261],{59:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0,n.DojoListItem=void 0;var r=i(["\n    border: 1px solid ",";\n    width: 100%;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: row;\n        align-items: left;\n        @media (max-width: ",") {\n            flex-direction: column;\n        }\n    }\n    @media (max-width: ",") {\n        margin: 0.5rem;\n        padding: 0.2rem;\n    }\n"],["\n    border: 1px solid ",";\n    width: 100%;\n    margin: 1rem;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);\n    a {\n        display: flex;\n        flex-direction: row;\n        align-items: left;\n        @media (max-width: ",") {\n            flex-direction: column;\n        }\n    }\n    @media (max-width: ",") {\n        margin: 0.5rem;\n        padding: 0.2rem;\n    }\n"]),l=i(["\n    margin-left: 2rem;\n"],["\n    margin-left: 2rem;\n"]),d=i(["\n    font-size: 2rem;\n    margin: 0;\n    padding: 0;\n    @media (max-width: ",") {\n        font-size: 1.4rem;\n        margin: 0.8rem 0;\n    }\n"],["\n    font-size: 2rem;\n    margin: 0;\n    padding: 0;\n    @media (max-width: ",") {\n        font-size: 1.4rem;\n        margin: 0.8rem 0;\n    }\n"]),o=i(["\n    color: ",";\n    margin: 1rem 0;\n    padding: 0;\n    font-style: italic;\n"],["\n    color: ",";\n    margin: 1rem 0;\n    padding: 0;\n    font-style: italic;\n"]),m=i(["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n"],["\n    display: flex;\n    flex-direction: row;\n    align-items: left;\n"]),f=t(5),u=a(f),c=t(2),s=a(c),p=t(3),g=a(p),x=t(45),w=t(18),h=a(w),j=t(34),y=a(j),E=t(19),v=a(E),b=g.default.div(r,function(e){var n=e.theme;return n.greyLight},function(e){return e.theme.mobileSize},function(e){return e.theme.mobileSize}),C=g.default.div(l),z=g.default.h3(d,function(e){return e.theme.mobileSize}),_=g.default.p(o,function(e){var n=e.theme;return n.black}),D=g.default.div(m),k=n.DojoListItem=function(e){var n=e.dojo;return s.default.createElement(b,null,s.default.createElement(u.default,{to:"/coding-dojo/"+n.slug},s.default.createElement(h.default,{date:n.date,edition:n.edition}),s.default.createElement(C,null,s.default.createElement(z,null,n.title),s.default.createElement(D,null,n.craftsmen.length>0&&n.craftsmen.map(function(e){return s.default.createElement(y.default,{speaker:e})})),s.default.createElement(_,null,n.description),s.default.createElement(v.default,{tags:n.tags}))))};k.propTypes={dojo:x.dojoPropType}},169:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0,n.query=n.DojoContainer=void 0;var r=i(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"],["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: top;\n    justify-content: left;\n"]),l=t(10),d=t(2),o=a(d),m=t(3),f=a(m),u=t(8),c=t(16),s=t(59),p=n.DojoContainer=f.default.div(r);n.default=function(e){var n=e.data,t=n.dojos.edges.map(function(e){return(0,c.formatDojoWithCraftsmen)(e.node,n.craftsmen.edges)});return o.default.createElement("div",null,o.default.createElement(l.Helmet,{title:"CaenCamp: les coding dojos"},o.default.createElement("meta",{name:"description",content:"Affutez vos skills au Dojo des CaenCamp"})),o.default.createElement(u.Content,{id:"dojoContent"},o.default.createElement(u.SingleColumn,null,o.default.createElement(p,null,t.map(function(e){return o.default.createElement(s.DojoListItem,{key:e.id,dojo:e})})))))};n.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-coding-dojo-js-da01996ad455ef17a68e.js.map