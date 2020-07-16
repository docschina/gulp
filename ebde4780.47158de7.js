(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(10),a=(t(0),t(176)),o={id:"vinyl-iscustomprop",title:"Vinyl.isCustomProp()",hide_title:!0,sidebar_label:"Vinyl.isCustomProp()"},l={id:"api/vinyl-iscustomprop",isDocsHomePage:!1,title:"Vinyl.isCustomProp()",description:"Vinyl.isCustomProp()",source:"@site/docs/api/vinyl-iscustomprop.md",permalink:"/docs/en/api/vinyl-iscustomprop",sidebar_label:"Vinyl.isCustomProp()",sidebar:"docs",previous:{title:"Vinyl.isVinyl()",permalink:"/docs/en/api/vinyl-isvinyl"},next:{title:"For enterprise",permalink:"/docs/en/support/for-enterprise"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Extending Vinyl",id:"extending-vinyl",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"vinyliscustomprop"},"Vinyl.isCustomProp()"),Object(a.b)("p",null,"Determines if a property is internally managed by Vinyl. Used by Vinyl when setting values inside the constructor or when copying properties in the ",Object(a.b)("inlineCode",{parentName:"p"},"clone()")," instance method."),Object(a.b)("p",null,"This method is useful when extending the Vinyl class. Detailed in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#extending-vinyl"}),"Extending Vinyl")," below."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Vinyl = require('vinyl');\n\nVinyl.isCustomProp('sourceMap') === true;\nVinyl.isCustomProp('path') === false;\n")),Object(a.b)("h2",{id:"signature"},"Signature"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Vinyl.isCustomProp(property)\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"property"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The property name to check.")))),Object(a.b)("h3",{id:"returns"},"Returns"),Object(a.b)("p",null,"True if the property is not internally managed."),Object(a.b)("h2",{id:"extending-vinyl"},"Extending Vinyl"),Object(a.b)("p",null,"When custom properties are managed internally, the static ",Object(a.b)("inlineCode",{parentName:"p"},"isCustomProp")," method must be extended and return false when one of the custom properties is queried."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Vinyl = require('vinyl');\n\nconst builtInProps = ['foo', '_foo'];\n\nclass SuperFile extends Vinyl {\n  constructor(options) {\n    super(options);\n    this._foo = 'example internal read-only value';\n  }\n\n  get foo() {\n    return this._foo;\n  }\n\n  static isCustomProp(name) {\n    return super.isCustomProp(name) && builtInProps.indexOf(name) === -1;\n  }\n}\n")),Object(a.b)("p",null,"In the example above, ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"_foo")," will not be assigned to the new object when cloning or passed in ",Object(a.b)("inlineCode",{parentName:"p"},"options")," to ",Object(a.b)("inlineCode",{parentName:"p"},"new SuperFile(options)"),"."),Object(a.b)("p",null,"If your custom properties or logic require special handling during cloning, override the ",Object(a.b)("inlineCode",{parentName:"p"},"clone")," method while extending Vinyl."))}s.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);