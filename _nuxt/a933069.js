(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(44),n(15),n(79),n(23),n(35),{data:function(){return{releases:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.github.com/repos/Skylyxx/SkriptDocsGenerator/releases",{method:"GET"}).then((function(t){return t.json()})).then((function(e){var n=[];e.forEach((function(element){var t={title:element.name,description:element.body,link:element.html_url,download:element.assets[0].browser_download_url};n.push(t)})),t.releases=n}));case 1:case"end":return e.stop()}}),e)})))()}))}),l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.releases,(function(e){return n("li",{key:e.title,staticClass:"download-item"},[n("a",{attrs:{href:e.link,target:"_blank"}},[n("h1",[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"text-left py-5",domProps:{innerHTML:t._s(t.$markdown(e.description))}}),t._v(" "),n("a",{staticClass:"button",attrs:{href:e.link,target:"_blank"}},[t._v("Read more")]),t._v(" "),n("a",{staticClass:"button",attrs:{href:e.download}},[t._v("Download")])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);