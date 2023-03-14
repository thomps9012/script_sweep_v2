"use strict";(self.webpackChunkscript_sweep_docs=self.webpackChunkscript_sweep_docs||[]).push([[573],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="Organize Text",s={unversionedId:"endpoints/organize",id:"endpoints/organize",title:"Organize Text",description:"Organizes a given piece of text based upon the language it's scripted in. The only headers necessary for this route are those associated with authorization, _JWT and email_",source:"@site/docs/endpoints/organize.md",sourceDirName:"endpoints",slug:"/endpoints/organize",permalink:"/script_sweep/docs/endpoints/organize",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Available Endpoints and Methods",permalink:"/script_sweep/docs/endpoints/"},next:{title:"Scripts & Filter",permalink:"/script_sweep/docs/endpoints/scripts"}},p={},c=[{value:"Request Parts",id:"request-parts",level:3},{value:"Sample Request",id:"sample-request",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Sample Response",id:"sample-response",level:2}],l={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"organize-text"},"Organize Text"),(0,a.kt)("h1",{id:"post-apiorganize"},"POST /api/organize"),(0,a.kt)("p",null,"Organizes a given piece of text based upon the language it's scripted in. The only headers necessary for this route are those associated with authorization, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"JWT and email"))),(0,a.kt)("h3",{id:"request-parts"},"Request Parts"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A request body that contains a ",(0,a.kt)("em",{parentName:"li"},"text")," key with a string value"),(0,a.kt)("li",{parentName:"ol"},"Headers specifying the requestor's email and secure JSON Web Token")),(0,a.kt)("h2",{id:"sample-request"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const response = await fetch("", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n    email: "sgfunk@email.com",\n    token:\n      "eaLhcDciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhRMqU2In0..aHVUcEE7IewIDEnfFdPw5g.UammvwKUHOBY7IX8b6xduplxL1JbLGOeLfnPDW_s7-5Xp06methCJns4TZZ2OPBq-mlRRqV-C8MBmKZOEXp-8JwamrN3r_0CCahbzeus2zcDTcUwQD3D69niSlyMk7S30b4v1OYpnKED8cXI_TY-C1woqnCUSIc6aC6wDLHHtByYrfbhX3PvN6hj--5Msh51NnNqHV6IYRlbieYt3MWS0kfQiFNNnOWbpNzXVw-PSMShyvjg9iFueS7WZgW85PlqeZEYVVTw0QNOxQVVz7eLVw.oqpBOqt-riAwoYGa3Y7KPq",\n  },\n  body: JSON.stringify({\n    text: "hello goodbye \u0432 \u82f1\u56fd\u7684 \u0627\u0642\u062b\u0642\u0646\u062d",\n  }),\n});\n')),(0,a.kt)("h3",{id:"response-body"},"Response Body"),(0,a.kt)("p",null,"The response body consists of a status, HTTP code, and the input text organized by unicode script and descending word percentage. Character percentage makeup is also provided."),(0,a.kt)("h2",{id:"sample-response"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "status": "OK",\n    "code": 200,\n    "organized_text": [\n        {\n            "script": "Latin",\n            "words": [\n                "hello",\n                "goodbye"\n            ],\n            "word_percent": 40,\n            "character_percent": 54\n        },\n        {\n            "script": "Cyrillic",\n            "words": [\n                "\u0432"\n            ],\n            "word_percent": 20,\n            "character_percent": 4\n        },\n        {\n            "script": "Han",\n            "words": [\n                "\u82f1\u56fd\u7684"\n            ],\n            "word_percent": 20,\n            "character_percent": 13\n        },\n        {\n            "script": "Arabic",\n            "words": [\n                "\u0627\u0642\u062b\u0642\u0646\u062d"\n            ],\n            "word_percent": 20,\n            "character_percent": 27\n        }\n    ]\n}\n\n')))}u.isMDXComponent=!0}}]);