webpackJsonp([34097248331033],{162:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(2),u=a(l),c=n(8),r=function(e){var t=u.default.createElement("div",{className:"nextMeetup__content"},"Aucune rencontre à venir");return e&&(t=u.default.createElement("div",{className:"nextMeetup__content"},u.default.createElement("div",{className:"nextMeetup__content__name"},e.name),u.default.createElement("div",{className:"nextMeetup__content__rsvp"},e.yes_rsvp_count," participants"),u.default.createElement("a",{href:e.link,target:"_blank",className:"nextMeetup__content__link"},"S'inscrire"))),u.default.createElement("div",{className:"nextMeetup"},u.default.createElement("h5",{className:"nextMeetup__title"},"Prochaine rencontre"),t)};t.default=function(e){var t=e.meetup;return u.default.createElement(c.RightColumn,null,u.default.createElement("a",{className:"linkToCallForPaper",href:"/call-for-paper"},"Proposer un talk"),u.default.createElement("a",{className:"linkToWelcomeUs",href:"/welcome-us"},"Accueillez-nous !"),u.default.createElement("a",{className:"linkToCodingDojo",href:"/coding-dojo"},"Le Dojo"),r(t))},e.exports=t.default},174:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(10),u=n(2),c=a(u),r=n(8),o=n(162),s=a(o),m=n(16);t.default=function(e){var t=e.nextMeetup;return t&&(t=(0,m.formatMeetup)(t)),c.default.createElement("div",null,c.default.createElement(l.Helmet,{title:"CaenCamp: soutenez-nous"},c.default.createElement("meta",{name:"description",content:"Accueillez les CaenCamp"})),c.default.createElement(r.Content,{id:"welcomeUsContent"},c.default.createElement(r.LeftColumn,null,c.default.createElement("h1",null,"Accueillez nous")),c.default.createElement(s.default,{meetup:t})))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-welcome-us-js-f29c4bd2b9f91827022c.js.map