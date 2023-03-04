"use strict";(self.webpackChunkscript_sweep_docs=self.webpackChunkscript_sweep_docs||[]).push([[9861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,b=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o="Available Endpoints and Methods",s={unversionedId:"endpoints/index",id:"endpoints/index",title:"Available Endpoints and Methods",description:"POST /api/classify",source:"@site/docs/endpoints/index.md",sourceDirName:"endpoints",slug:"/endpoints/",permalink:"/docs/endpoints/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Classify Text",permalink:"/docs/endpoints/classify"},next:{title:"Organize Text",permalink:"/docs/endpoints/organize"}},p={},l=[{value:"POST <br />/api/classify",id:"post-apiclassify",level:3},{value:"POST <br />/api/organize",id:"post-apiorganize",level:3},{value:"GET <br />/api/scripts <br /> /api/scripts/:id",id:"get-apiscripts--apiscriptsid",level:3},{value:"GET <br />/api/scripts/filter",id:"get-apiscriptsfilter",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"available-endpoints-and-methods"},"Available Endpoints and Methods"),(0,i.kt)("h3",{id:"post-apiclassify"},"POST ",(0,i.kt)("br",null),"/api/classify"),(0,i.kt)("p",null,"Classifies text based on it's scripting language, either by character or word"),(0,i.kt)("h3",{id:"post-apiorganize"},"POST ",(0,i.kt)("br",null),"/api/organize"),(0,i.kt)("p",null,"Organizes and classifies words in a given piece of text based on scripting language"),(0,i.kt)("h3",{id:"get-apiscripts--apiscriptsid"},"GET ",(0,i.kt)("br",null),"/api/scripts ",(0,i.kt)("br",null)," /api/scripts/:id"),(0,i.kt)("p",null,"Provide detailed information about scripts, one such as name, unicode characters, year created, and text direction"),(0,i.kt)("h3",{id:"get-apiscriptsfilter"},"GET ",(0,i.kt)("br",null),"/api/scripts/filter"),(0,i.kt)("p",null,"Gives the option to filter scripts based on creation year, text direction, and more"))}u.isMDXComponent=!0}}]);