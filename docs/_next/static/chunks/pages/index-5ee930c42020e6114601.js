_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,o,u,i){try{var c=n[u](i),a=c.value}catch(l){return void e(l)}c.done?t(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var i=n.apply(t,e);function c(n){r(i,o,u,c,a,"next",n)}function a(n){r(i,o,u,c,a,"throw",n)}c(void 0)}))}}e.d(t,"a",(function(){return o}))},RNiq:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return h}));var r=e("o0o1"),o=e.n(r),u=e("HaE+"),i=e("8Kt/"),c=e.n(i),a=e("q1tI"),l=e.n(a),f=e("B+aG"),s=e("w/jj"),p=e("iuuf"),d=l.a.createElement;function h(){var n=Object(a.useState)([]),t=n[0],e=n[1];return Object(a.useEffect)((function(){(function(){var n=Object(u.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.a)();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),d("div",{className:"container"},d(c.a,null,d("title",null,"HOME | CeroyUno"),d("link",{rel:"icon",href:"/favicon.ico"})),d("main",null,d(f.a,null),d("h1",{className:"title"},"HOME | CeroyUno | Test rewrite"),d("div",null,t&&d(p.a,{content:t}))))}},iuuf:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,"a",(function(){return f}));var u=e("q1tI"),i=e.n(u),c=e("YFqc"),a=e.n(c),l=i.a.createElement;function f(n){var t=o(n.content),e=t[0],r=t.slice(1);return l("section",null,l("h2",null,e&&e.title),l("ul",null,r&&r.map((function(n,t){return l("li",{key:t},l(a.a,{href:{pathname:"/blog/[slug]",query:{slug:"first-new-".concat(t)}}},l("a",null,n.title)))}))))}},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])},"w/jj":function(n,t,e){"use strict";function r(){return new Promise((function(n,t){fetch("https://jsonplaceholder.typicode.com/posts").then((function(n){return n.json()})).then((function(t){return n(t)})).catch((function(n){return t(n)}))}))}e.d(t,"a",(function(){return r}))}},[["vlRD",0,2,1,3]]]);