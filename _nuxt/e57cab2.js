(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,7,8,9,10],{367:function(t,e,n){"use strict";n.r(e);var r={},l=n(65),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"blog-header py-3"},[n("b-row",{staticClass:"flex-nowrap justify-content-between align-items-center"},[n("b-col",{staticClass:"col-4 pt-1"}),t._v(" "),n("b-col",{staticClass:"col-4 text-center"},[n("h1",{staticClass:"blog-header-logo display-6"},[t._v("- Mss Babs -")])]),t._v(" "),n("b-col",{staticClass:"col-4 d-flex justify-content-end align-items-center"},[n("b-row",[n("b-col",[n("a",{staticClass:"link-secondary",attrs:{href:"https://github.com/MssBabs"}},[n("svg",{staticClass:"bi bi-github",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n.r(e);var r={},l=n(65),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("hr"),t._v(" "),n("p",{staticClass:"text-center"},[t._v(" - MssBabsBlog - ")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("©2022 Copyright")])])}],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n.r(e);var r={},l=n(65),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"nav-scroller py-1 mb-2"},[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{staticClass:"justify-content-center",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/"}},[t._v("\n              Home\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/languages"}},[t._v("\n            Lenguajes\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/projects"}},[t._v("\n            Proyectos\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/trends"}},[t._v("\n            Tendencias\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/about-me"}},[t._v("\n            Sobre mi\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";var r=n(373)().bucket({slug:"blogbvn-blog",read_key:"zWDzAqZUqjPIBB0SkedW72Q5IzFxlEYnNH9o2LpMtWzrgfrQQZ"});e.a=r},380:function(t,e,n){"use strict";n.r(e);var r={fetch:function(){var t=document,s=t.createElement("script");s.src="https://https-mssbabs-github-io.disqus.com/embed.js",s.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(s)}},l=n(65),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,required:!1}},data:function(){return{infoPost:{},mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"}}}},l=n(65),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"rounded container-post m-5"},[n("b-row",[n("b-col",[n("h3",{staticClass:"display-3 p-4 p-md-5 mb-4 fst-italic border-bottom"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),n("div",[n("p",{staticClass:"lead my-3 text-white"},[t._v("\n          "+t._s(t.post.metadata.publicationdate)+"\n        ")])])])],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"p-5"},[n("div",{attrs:{id:"post"},domProps:{innerHTML:t._s(t.$md.render(t.post.metadata.content))}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,n){"use strict";n.r(e);var r=n(34),l=(n(82),n(367)),o=n(369),c=n(368),d=n(391),v=n(380),f=n(371),m={name:"Index",components:{Head:l.default,NavBar:o.default,Footer:c.default,Post:d.default,Disqus:v.default},data:function(){return{post:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:{type:"posts",slug:t.$route.params.slug},limit:1,props:"slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate,metadata.content"},e.next=3,f.a.getObjects(n).then((function(t){return t}));case 3:t.post=e.sent;case 4:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1},h=n(65),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("Head"),t._v(" "),n("NavBar"),t._v(" "),n("b-container",[t.$fetchState.pending?n("div",[n("div",{staticClass:"d-flex justify-content-center mb-3"},[n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Spinning",type:"grow"}})],1)]):n("div",[n("b-row",[n("b-col",[n("b-row",[n("b-col",{staticClass:"container-post rounded "},[n("Post",{attrs:{post:t.post.objects[0]}})],1)],1)],1)],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"p-5"},[n("Disqus")],1)],1)],1)]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Disqus:n(380).default})}}]);