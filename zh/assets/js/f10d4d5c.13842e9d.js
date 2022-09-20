"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2334],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(r),h=s,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20004:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),i=["components"],o={title:"User Settings",weight:23,aliases:["/rancher/v2.0-v2.4/en/tasks/user-settings/"]},u=void 0,c={unversionedId:"pages-for-subheaders/user-settings",id:"version-2.0-2.4/pages-for-subheaders/user-settings",title:"User Settings",description:"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the User Settings menu. You can open this menu by clicking your avatar, located within the main menu.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/user-settings.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/user-settings",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/user-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/user-settings.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"User Settings",weight:23,aliases:["/rancher/v2.0-v2.4/en/tasks/user-settings/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Concepts",permalink:"/zh/v2.0-v2.4/reference-guides/kubernetes-concepts"},next:{title:"API Keys",permalink:"/zh/v2.0-v2.4/reference-guides/user-settings/api-keys"}},l={},p=[],f={toc:p};function h(e){var t=e.components,o=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the ",(0,a.kt)("strong",{parentName:"p"},"User Settings")," menu. You can open this menu by clicking your avatar, located within the main menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"User Settings Menu",src:r(72411).Z,width:"288",height:"294"})),(0,a.kt)("p",null,"The available user settings are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/user-settings/api-keys"},"API & Keys"),": If you want to interact with Rancher programmatically, you need an API key. Follow the directions in this section to obtain a key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"Cloud Credentials"),": Manage cloud credentials ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"used by node templates")," to ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"provision nodes for clusters"),". Note: Available as of v2.2.0. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/user-settings/manage-node-templates"},"Node Templates"),": Manage templates ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"used by Rancher to provision nodes for clusters"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/user-settings/user-preferences"},"Preferences"),": Sets superficial preferences for the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},"Log Out: Ends your user session.")))}h.isMDXComponent=!0},72411:function(e,t,r){t.Z=r.p+"assets/images/user-settings-cda0eec8ae28c8bdf1742e2c5367e3d8.png"}}]);