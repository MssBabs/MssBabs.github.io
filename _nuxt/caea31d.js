(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7,8,9,12],{367:function(t,e,n){"use strict";n.r(e);var r={},c=n(65),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"blog-header py-3"},[n("b-row",{staticClass:"flex-nowrap justify-content-between align-items-center"},[n("b-col",{staticClass:"col-4 pt-1"}),t._v(" "),n("b-col",{staticClass:"col-4 text-center"},[n("h1",{staticClass:"blog-header-logo display-6"},[t._v("- Mss Babs -")])]),t._v(" "),n("b-col",{staticClass:"col-4 d-flex justify-content-end align-items-center"},[n("b-row",[n("b-col",[n("a",{staticClass:"link-secondary",attrs:{href:"https://github.com/MssBabs"}},[n("svg",{staticClass:"bi bi-github",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n.r(e);var r={},c=n(65),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("hr"),t._v(" "),n("p",{staticClass:"text-center"},[t._v(" - MssBabsBlog - ")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("©2022 Copyright")])])}],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n.r(e);var r={},c=n(65),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"nav-scroller py-1 mb-2"},[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{staticClass:"justify-content-center",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/"}},[t._v("\n              Home\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/languages"}},[t._v("\n            Lenguajes\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/projects"}},[t._v("\n            Proyectos\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/trends"}},[t._v("\n            Tendencias\n          ")])],1),t._v(" "),n("b-nav-item",[n("NuxtLink",{staticClass:"p-2 link-secondary",attrs:{to:"/about-me"}},[t._v("\n            Sobre mi\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";var r=n(373)().bucket({slug:"blogbvn-blog",read_key:"zWDzAqZUqjPIBB0SkedW72Q5IzFxlEYnNH9o2LpMtWzrgfrQQZ"});e.a=r},394:function(t,e,n){"use strict";n.r(e);var r={props:{posts:{type:Object,required:!1},paginatedFetch:{type:Function}},data:function(){return{currentPage:1}},methods:{updatePosts:function(){this.paginatedFetch(this.currentPage-1)}}},c=n(65),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"m-3",attrs:{"cols-md":"3","cols-sm":"2","no-gutters":""}},t._l(t.posts.objects,(function(e){return n("b-col",{key:e.slug,staticClass:"p-1"},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"25rem",height:"100vh"},attrs:{title:e.title,"sub-title":e.metadata.publicationdate,"img-src":e.metadata.previewimg.url,"img-alt":"Image","img-height":"350rem","img-top":"",tag:"article"}},[n("b-card-text",[t._v("\n                "+t._s(e.metadata.description)+"\n                ")]),t._v(" "),n("NuxtLink",{staticClass:"stretched-link",attrs:{to:"/post/"+e.slug}},[t._v("Mas...»")])],1)],1)})),1),t._v(" "),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"auto"}},[n("b-pagination",{staticClass:"btn-custom",attrs:{"total-rows":t.posts.total,"per-page":t.posts.limit},on:{input:t.updatePosts},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},426:function(t,e,n){"use strict";n.r(e);var r=n(34),c=(n(82),n(367)),o=n(369),l=n(368),v=n(394),d=n(371),m={name:"ProjectsView",components:{Head:c.default,NavBar:o.default,Footer:l.default,ProjectsPreview:v.default},data:function(){return{posts:{}}},methods:{paginatedFetch:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:{type:"posts","metadata.category":{$in:["projects"]}},limit:12,skip:12*t,sort:"-created_at",props:"slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate"},n.next=3,d.a.getObjects(r).then((function(t){return t}));case 3:e.posts=n.sent;case 4:case"end":return n.stop()}}),n)})))()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.paginatedFetch(0);case 1:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1},f=n(65),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("Head"),t._v(" "),n("NavBar"),t._v(" "),n("main",{staticClass:"py-lg-4"},[n("h3",{staticClass:"pb-4 mb-4 fst-italic border-bottom"},[t._v("\n        Proyectos\n    ")]),t._v(" "),n("div",{staticClass:"row mb-2"},[n("ProjectsPreview",{attrs:{posts:t.posts,paginatedFetch:t.paginatedFetch}})],1)]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);