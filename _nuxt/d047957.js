(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(t,e,n){"use strict";n.r(e);var r={props:{posts:{type:Object,required:!1},paginatedFetch:{type:Function}},data:function(){return{currentPage:1}},methods:{updatePosts:function(){this.paginatedFetch(this.currentPage-1)}}},c=n(65),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"m-3",attrs:{"cols-md":"3","cols-sm":"2","no-gutters":""}},t._l(t.posts.objects,(function(e){return n("b-col",{key:e.slug,staticClass:"p-1"},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"25rem",height:"100vh"},attrs:{title:e.title,"sub-title":e.metadata.publicationdate,"img-src":e.metadata.previewimg.url,"img-alt":"Image","img-height":"350rem","img-top":"",tag:"article"}},[n("b-card-text",[t._v("\n                "+t._s(e.metadata.description)+"\n                ")]),t._v(" "),n("NuxtLink",{staticClass:"stretched-link",attrs:{to:"/post/"+e.slug}},[t._v("Mas...»")])],1)],1)})),1),t._v(" "),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"auto"}},[n("b-pagination",{attrs:{"total-rows":t.posts.total,"per-page":t.posts.limit,"align-h":"center"},on:{input:t.updatePosts},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);