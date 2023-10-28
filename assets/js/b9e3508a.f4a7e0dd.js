"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),u=a(7392),c=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:a,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(m(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},6147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),s=a(5162);const l={sidebar_position:0},i="ShowColoredShard",u={unversionedId:"ScaleformUI/scaleforms/bigmessage/showcoloredshard",id:"ScaleformUI/scaleforms/bigmessage/showcoloredshard",title:"ShowColoredShard",description:"- Description: Displays a colored shard message on the screen with the specified text, colors, and duration. If manualDispose is set to true, the displayed message will persist on the screen until Dispose is called.",source:"@site/docs/ScaleformUI/scaleforms/bigmessage/showcoloredshard.mdx",sourceDirName:"ScaleformUI/scaleforms/bigmessage",slug:"/ScaleformUI/scaleforms/bigmessage/showcoloredshard",permalink:"/scaleformui/docs/ScaleformUI/scaleforms/bigmessage/showcoloredshard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ScaleformUI/scaleforms/bigmessage/showcoloredshard.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"BigMessage",permalink:"/scaleformui/docs/category/bigmessage"},next:{title:"ShowMissionPassedMessage",permalink:"/scaleformui/docs/ScaleformUI/scaleforms/bigmessage/showmissionpassedmessage"}},c={},m=[],d={toc:m},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"showcoloredshard"},"ShowColoredShard"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"lua",label:"Lua",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'ScaleformUI.Scaleforms.BigMessageInstance:ShowColoredShard("Hey this is a example", "This is a subtitle", 1, 0, 5000, false)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Displays a colored shard message on the screen with the specified text, colors, and duration. If manualDispose is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", the displayed message will persist on the screen until ",(0,n.kt)("a",{parentName:"li",href:"/scaleformui/docs/ScaleformUI/scaleforms/Dispose"},"Dispose")," is called."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"message"),": The main message to be displayed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description"),": The subtitle or description to accompany the main message."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textColor"),": The color index for the text."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bgColor"),": The color index for the background."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration"),": The time duration for which the message is displayed, in milliseconds. Ignored if manualDispose is true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"manualDispose"),": (Optional) If set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", the scaleform message remains on the screen until manually disposed and duration is ignored."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Return"),": None"))),(0,n.kt)(s.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"ScaleformUI.BigMessageInstance.ShowColoredShard(string msg, string desc, HudColor textColor, HudColor bgColor, int time = 5000, bool manualDispose = false);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Displays a mission-passed message on the screen with the specified text and duration. If manualDispose is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", the displayed message will persist on the screen until ",(0,n.kt)("a",{parentName:"li",href:"/scaleformui/docs/ScaleformUI/scaleforms/Dispose"},"Dispose")," is called."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"message"),": The main message to be displayed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description"),": The subtitle or description to accompany the main message."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"textColor"),": The color index for the text."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bgColor"),": The color index for the background."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration"),": The time duration for which the message is displayed, in milliseconds. Ignored if manualDispose is true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"manualDispose"),": (Optional) If set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", the scaleform message remains on the screen until manually disposed and duration is ignored."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Return"),": None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/SjJgTLU.png",alt:"ShowMissionPassedMessage"})))}f.isMDXComponent=!0}}]);