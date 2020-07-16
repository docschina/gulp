(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(2),a=n(10),r=(n(0),n(176)),l={id:"javascript-and-gulpfiles",title:"JavaScript and Gulpfiles",hide_title:!0,sidebar_label:"JavaScript and Gulpfiles"},o={id:"getting-started/javascript-and-gulpfiles",isDocsHomePage:!1,title:"JavaScript and Gulpfiles",description:"JavaScript and Gulpfiles",source:"@site/docs/getting-started/2-javascript-and-gulpfiles.md",permalink:"/docs/en/getting-started/javascript-and-gulpfiles",sidebar_label:"JavaScript and Gulpfiles",sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/en/getting-started/quick-start"},next:{title:"Creating Tasks",permalink:"/docs/en/getting-started/creating-tasks"}},p=[{value:"Gulpfile explained",id:"gulpfile-explained",children:[]},{value:"Transpilation",id:"transpilation",children:[]},{value:"Splitting a gulpfile",id:"splitting-a-gulpfile",children:[]}],s={rightToc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"javascript-and-gulpfiles"},"JavaScript and Gulpfiles"),Object(r.b)("p",null,"Gulp allows you to use existing JavaScript knowledge to write gulpfiles or to use your experience with gulpfiles to write plain JavaScript. Although a few utilities are provided to simplify working with the filesystem and command line, everything else you write is pure JavaScript."),Object(r.b)("h2",{id:"gulpfile-explained"},"Gulpfile explained"),Object(r.b)("p",null,"A gulpfile is a file in your project directory titled ",Object(r.b)("inlineCode",{parentName:"p"},"gulpfile.js")," (or capitalized as ",Object(r.b)("inlineCode",{parentName:"p"},"Gulpfile.js"),", like Makefile), that automatically loads when you run the ",Object(r.b)("inlineCode",{parentName:"p"},"gulp")," command. Within this file, you'll often see gulp APIs, like ",Object(r.b)("inlineCode",{parentName:"p"},"src()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dest()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"series()"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"parallel()")," but any vanilla JavaScript or Node modules can be used. Any exported functions will be registered into gulp's task system."),Object(r.b)("h2",{id:"transpilation"},"Transpilation"),Object(r.b)("p",null,"You can write a gulpfile using a language that requires transpilation, like TypeScript or Babel, by changing the extension on your ",Object(r.b)("inlineCode",{parentName:"p"},"gulpfile.js")," to indicate the language and install the matching transpiler module."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For TypeScript, rename to ",Object(r.b)("inlineCode",{parentName:"li"},"gulpfile.ts")," and install the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/ts-node"}),"ts-node")," module."),Object(r.b)("li",{parentName:"ul"},"For Babel, rename to ",Object(r.b)("inlineCode",{parentName:"li"},"gulpfile.babel.js")," and install the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@babel/register"}),"@babel/register")," module.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Most new versions of node support most features that TypeScript or Babel provide, except the ",Object(r.b)("inlineCode",{parentName:"strong"},"import"),"/",Object(r.b)("inlineCode",{parentName:"strong"},"export")," syntax. When only that syntax is desired, rename to ",Object(r.b)("inlineCode",{parentName:"strong"},"gulpfile.esm.js")," and install the ",Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/esm"}),"esm")," module.")),Object(r.b)("p",null,"For a more advanced dive into this topic and the full list of supported extensions, see our ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/en/documentation-missing"}),"gulpfile transpilation")," documentation."),Object(r.b)("h2",{id:"splitting-a-gulpfile"},"Splitting a gulpfile"),Object(r.b)("p",null,"Many users start by adding all logic to a gulpfile. If it ever grows too big, it can be refactored into separate files."),Object(r.b)("p",null,"Each task can be split into its own file, then imported into your gulpfile for composition. Not only does this keep things organized, but it allows you to test each task independently or vary composition based on conditions."),Object(r.b)("p",null,"Node's module resolution allows you to replace your ",Object(r.b)("inlineCode",{parentName:"p"},"gulpfile.js")," file with a directory named ",Object(r.b)("inlineCode",{parentName:"p"},"gulpfile.js")," that contains an ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file which is treated as a ",Object(r.b)("inlineCode",{parentName:"p"},"gulpfile.js"),". This directory could then contain your individual modules for tasks.  If you are using a transpiler, name the folder and file accordingly."))}c.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);