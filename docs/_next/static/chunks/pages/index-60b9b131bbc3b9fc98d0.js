_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"HaE+":function(n,t,r){"use strict";function e(n,t,r,e,o,u,i){try{var c=n[u](i),a=c.value}catch(l){return void r(l)}c.done?t(a):Promise.resolve(a).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,u){var i=n.apply(t,r);function c(n){e(i,o,u,c,a,"next",n)}function a(n){e(i,o,u,c,a,"throw",n)}c(void 0)}))}}r.d(t,"a",(function(){return o}))},RNiq:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var e=r("o0o1"),o=r.n(e),u=r("HaE+"),i=r("8Kt/"),c=r.n(i),a=r("q1tI"),l=r.n(a),f=r("B+aG"),s=r("w/jj"),p=r("iuuf"),d=l.a.createElement;function h(){var n=Object(a.useState)([]),t=n[0],r=n[1];return Object(a.useEffect)((function(){(function(){var n=Object(u.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.a)();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),d("div",{className:"container"},d(c.a,null,d("title",null,"HOME | CeroyUno"),d("link",{rel:"icon",href:"/favicon.ico"})),d("main",null,d(f.a,null),d("h1",{className:"title"},"HOME | CeroyUno | Error"),d("div",null,t&&d(p.a,{content:t}))))}},iuuf:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function o(n){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return f}));var u=r("q1tI"),i=r.n(u),c=r("YFqc"),a=r.n(c),l=i.a.createElement;function f(n){var t=o(n.content),r=t[0],e=t.slice(1);return l("section",null,l("h2",null,r&&r.title),l("ul",null,e&&e.map((function(n,t){return l("li",{key:t},l(a.a,{href:{pathname:"/blog/[slug]",query:{slug:"first-new-".concat(t)}}},l("a",null,n.title)))}))))}},vlRD:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},"w/jj":function(n,t,r){"use strict";function e(){return new Promise((function(n,t){fetch("https://jsonplaceholder.typicode.com/posts").then((function(n){return n.json()})).then((function(t){return n(t)})).catch((function(n){return t(n)}))}))}r.d(t,"a",(function(){return e}))}},[["vlRD",0,2,1,3]]]);