(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(10),i=(t(0),t(176)),o={id:"creating-tasks",title:"Creating Tasks",hide_title:!0,sidebar_label:"Creating Tasks"},s={id:"getting-started/creating-tasks",isDocsHomePage:!1,title:"Creating Tasks",description:"Creating Tasks",source:"@site/docs/getting-started/3-creating-tasks.md",permalink:"/docs/en/getting-started/creating-tasks",sidebar_label:"Creating Tasks",sidebar:"docs",previous:{title:"JavaScript and Gulpfiles",permalink:"/docs/en/getting-started/javascript-and-gulpfiles"},next:{title:"Async Completion",permalink:"/docs/en/getting-started/async-completion"}},c=[{value:"Exporting",id:"exporting",children:[]},{value:"Compose tasks",id:"compose-tasks",children:[]}],l={rightToc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-tasks"},"Creating Tasks"),Object(i.b)("p",null,"Each gulp task is an asynchronous JavaScript function - a function that accepts an error-first callback or returns a stream, promise, event emitter, child process, or observable (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/async-completion"}),"more on that later"),"). Due to some platform limitations, synchronous tasks aren't supported, though there is a pretty nifty ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/async-completion#using-async-await"}),"alternative"),"."),Object(i.b)("h2",{id:"exporting"},"Exporting"),Object(i.b)("p",null,"Tasks can be considered ",Object(i.b)("strong",{parentName:"p"},"public")," or ",Object(i.b)("strong",{parentName:"p"},"private"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Public tasks")," are exported from your gulpfile, which allows them to be run by the ",Object(i.b)("inlineCode",{parentName:"li"},"gulp")," command."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Private tasks")," are made to be used internally, usually used as part of ",Object(i.b)("inlineCode",{parentName:"li"},"series()")," or ",Object(i.b)("inlineCode",{parentName:"li"},"parallel()")," composition.")),Object(i.b)("p",null,"A private task looks and acts like any other task, but an end-user can't ever execute it independently. To register a task publicly, export it from your gulpfile."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { series } = require('gulp');\n\n// The `clean` function is not exported so it can be considered a private task.\n// It can still be used within the `series()` composition.\nfunction clean(cb) {\n  // body omitted\n  cb();\n}\n\n// The `build` function is exported so it is public and can be run with the `gulp` command.\n// It can also be used within the `series()` composition.\nfunction build(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = build;\nexports.default = series(clean, build);\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-gulp-tasks-command.png",alt:"ALT TEXT MISSING"}))),Object(i.b)("small",null,"In the past, `task()` was used to register your functions as tasks. While that API is still available, exporting should be the primary registration mechanism, except in edge cases where exports won't work."),Object(i.b)("h2",{id:"compose-tasks"},"Compose tasks"),Object(i.b)("p",null,"Gulp provides two powerful composition methods, ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()"),", allowing individual tasks to be composed into larger operations. Both methods accept any number of task functions or composed operations.  ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()")," can be nested within themselves or each other to any depth."),Object(i.b)("p",null,"To have your tasks execute in order, use the ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { series } = require('gulp');\n\nfunction transpile(cb) {\n  // body omitted\n  cb();\n}\n\nfunction bundle(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = series(transpile, bundle);\n")),Object(i.b)("p",null,"For tasks to run at maximum concurrency, combine them with the ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { parallel } = require('gulp');\n\nfunction javascript(cb) {\n  // body omitted\n  cb();\n}\n\nfunction css(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = parallel(javascript, css);\n")),Object(i.b)("p",null,"Tasks are composed immediately when either ",Object(i.b)("inlineCode",{parentName:"p"},"series()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()")," is called.  This allows variation in the composition instead of conditional behavior inside individual tasks."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { series } = require('gulp');\n\nfunction minify(cb) {\n  // body omitted\n  cb();\n}\n\n\nfunction transpile(cb) {\n  // body omitted\n  cb();\n}\n\nfunction livereload(cb) {\n  // body omitted\n  cb();\n}\n\nif (process.env.NODE_ENV === 'production') {\n  exports.build = series(transpile, minify);\n} else {\n  exports.build = series(transpile, livereload);\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"series()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parallel()")," can be nested to any arbitrary depth."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { series, parallel } = require('gulp');\n\nfunction clean(cb) {\n  // body omitted\n  cb();\n}\n\nfunction cssTranspile(cb) {\n  // body omitted\n  cb();\n}\n\nfunction cssMinify(cb) {\n  // body omitted\n  cb();\n}\n\nfunction jsTranspile(cb) {\n  // body omitted\n  cb();\n}\n\nfunction jsBundle(cb) {\n  // body omitted\n  cb();\n}\n\nfunction jsMinify(cb) {\n  // body omitted\n  cb();\n}\n\nfunction publish(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = series(\n  clean,\n  parallel(\n    cssTranspile,\n    series(jsTranspile, jsBundle)\n  ),\n  parallel(cssMinify, jsMinify),\n  publish\n);\n")),Object(i.b)("p",null,"When a composed operation is run, each task will be executed every time it was referenced.  For example, a ",Object(i.b)("inlineCode",{parentName:"p"},"clean")," task referenced before two different tasks would be run twice and lead to undesired results.  Instead, refactor the ",Object(i.b)("inlineCode",{parentName:"p"},"clean")," task to be specified in the final composition."),Object(i.b)("p",null,"If you have code like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// This is INCORRECT\nconst { series, parallel } = require('gulp');\n\nconst clean = function(cb) {\n  // body omitted\n  cb();\n};\n\nconst css = series(clean, function(cb) {\n  // body omitted\n  cb();\n});\n\nconst javascript = series(clean, function(cb) {\n  // body omitted\n  cb();\n});\n\nexports.build = parallel(css, javascript);\n")),Object(i.b)("p",null,"Migrate to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { series, parallel } = require('gulp');\n\nfunction clean(cb) {\n  // body omitted\n  cb();\n}\n\nfunction css(cb) {\n  // body omitted\n  cb();\n}\n\nfunction javascript(cb) {\n  // body omitted\n  cb();\n}\n\nexports.build = series(clean, parallel(css, javascript));\n")))}b.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(m,s(s({ref:n},l),{},{components:t})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);