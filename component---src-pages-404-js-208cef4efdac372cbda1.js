(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(209),l=a(214);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},201:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(66),l=a.n(r);a.d(t,"a",function(){return l.a});a(202),a(9).default.enqueue,o.a.createContext({})},202:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},205:function(e){e.exports={"Poets of Belarus":"Poets of Belarus","Information Portal":"Information Portal",Home:"Home",Poets:"Poets","Contact us":"Contact us","More about...":"More about...","Author of the day":"Author of the day","Development team":"Development team","Search by name, place of birth":"Search by name, place of birth",Born:"Born",Died:"Died",Genre:"Genre","Literary movement":"Literary movement",Biography:"Biography",Works:"Works",Gallery:"Gallery",Video:"Video",Map:"Map"}},206:function(e){e.exports={"Poets of Belarus":"Поэты Беларуси","Information Portal":"Информационный Портал",Home:"Главная",Poets:"Поэты","Contact us":"Контакты","More about...":"Подробнее...","Author of the day":"Автор дня","Development team":"Команда разработчиков","Search by name, place of birth":"Поиск по имени, месту рождения",Born:"Дата рождения",Died:"Дата смерти",Genre:"Жанр","Literary movement":"Литературное направление",Biography:"Биография",Works:"Работы",Gallery:"Галерея",Video:"Видео",Map:"Карта"}},207:function(e){e.exports={"Poets of Belarus":"Паэты Беларусі","Information Portal":"Інфармацыйны Партал",Home:"Галоўная",Poets:"Паэты","Contact us":"Кантакты","More about...":"Падрабязней...","Author of the day":"Аўтар дня","Development team":"Каманда распрацоўшчыкаў","Search by name, place of birth":"Пошук па імені, месцы нараджэння",Born:"Дата нараджэння",Died:"Дата смерці",Genre:"Жанр","Literary movement":"Літаратурны напрамак",Biography:"Біяграфія",Works:"Працы",Gallery:"Галерэя",Video:"Відэа",Map:"Карта"}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),o=a.n(n),r=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(220),l=a(217),s=a.n(l),c=a(196),i=a(205),m=a(206),u=a(207);r.a.use(s.a).use(c.a).init({resources:{en:{translation:i},ru:{translation:m},by:{translation:u}},fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});r.a,a(204);var p=a(200),f=a.n(p),d=a(199),E=a.n(d),h=a(198),v=a.n(h),y=a(201),b=a(213),g=a.n(b),P=Object(c.b)()(function(e){var t=e.i18n;return o.a.createElement(g.a.Control,{as:"select",size:"sm",defaultValue:t.language,onChange:function(e){t.changeLanguage(e.target.value)}},o.a.createElement("option",null,"en"),o.a.createElement("option",null,"ru"),o.a.createElement("option",null,"by"))}),B=Object(c.b)()(function(e){var t=e.t;return o.a.createElement("header",{style:{background:"tomato",padding:"0.3rem"}},o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(v.a,{md:{span:4,offset:2}},o.a.createElement("h1",{style:{margin:0,fontSize:"2rem"}},o.a.createElement(y.a,{to:"/",style:{color:"white",textDecoration:"none"}},t("Poets of Belarus"))),o.a.createElement("h2",{style:{fontSize:"1.2rem"}},t("Information Portal"))),o.a.createElement(v.a,{md:{span:2,offset:3},lg:{span:1,offset:3},xs:{span:4}},o.a.createElement(P,null)))))}),k=(a(218),Object(c.b)()(function(e){var t=e.t;return o.a.createElement("div",{className:"nav-line"},o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(v.a,{md:{span:8,offset:2}},o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",{className:"nav navbar-ul"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(y.a,{className:"nav-link",to:"/"},t("Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(y.a,{className:"nav-link",to:"/poets"},t("Poets"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(y.a,{className:"nav-link",to:"/"},t("Contact us")))))))))}));t.a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement(k,null),o.a.createElement("main",null,o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(v.a,{lg:{span:8,offset:2}},t)))))}},214:function(e,t,a){"use strict";var n=a(215),o=a(0),r=a.n(o),l=a(224),s=a.n(l);function c(e){var t=e.description,a=e.lang,o=e.meta,l=e.title,c=n.data.site,i=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"Poets of Belarus",description:"Welcome to the information portal about the famous Belarusian poets.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-208cef4efdac372cbda1.js.map