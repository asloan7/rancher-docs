"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20787],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"1. Enable Istio in the Cluster",weight:1,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-cluster","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-cluster","/rancher/v2.x/en/istio/v2.5/setup/enable-istio-in-cluster/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",id:"version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",title:"1. Enable Istio in the Cluster",description:"Prerequisites:",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster.md",tags:[],version:"2.5",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"1. Enable Istio in the Cluster",weight:1,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-cluster","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-cluster","/rancher/v2.x/en/istio/v2.5/setup/enable-istio-in-cluster/"]},sidebar:"tutorialSidebar",previous:{title:"Setup Guide",permalink:"/zh/v2.5/pages-for-subheaders/istio-setup-guide"},next:{title:"2. Enable Istio in a Namespace",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"}},c={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Only a user with the ",(0,o.kt)("inlineCode",{parentName:"li"},"cluster-admin")," ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"Kubernetes default role")," assigned can configure and install Istio in a Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"If you have pod security policies, you will need to install Istio with the CNI enabled. For details, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},"this section.")),(0,o.kt)("li",{parentName:"ul"},"To install Istio on an RKE2 cluster, additional steps are required. For details, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"this section.")),(0,o.kt)("li",{parentName:"ul"},"To install Istio in a cluster where project network isolation is enabled, additional steps are required. For details, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation"},"this section.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer"),", navigate to available ",(0,o.kt)("strong",{parentName:"li"},"Charts")," in ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace")),(0,o.kt)("li",{parentName:"ol"},"Select the Istio chart from the rancher provided charts"),(0,o.kt)("li",{parentName:"ol"},"If you have not already installed your own monitoring app, you will be prompted to install the rancher-monitoring app. Optional: Set your Selector or Scrape config options on rancher-monitoring app install."),(0,o.kt)("li",{parentName:"ol"},"Optional: Configure member access and ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"resource limits")," for the Istio components. Ensure you have enough resources on your worker nodes to enable Istio."),(0,o.kt)("li",{parentName:"ol"},"Optional: Make additional configuration changes to values.yaml if needed."),(0,o.kt)("li",{parentName:"ol"},"Optional: Add additional resources or configuration via the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/pages-for-subheaders/configuration-options#overlay-file"},"overlay file.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Install"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Istio is installed at the cluster level."),(0,o.kt)("h1",{id:"additional-config-options"},"Additional Config Options"),(0,o.kt)("p",null,"For more information on configuring Istio, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/configuration-options"},"configuration reference.")))}f.isMDXComponent=!0}}]);