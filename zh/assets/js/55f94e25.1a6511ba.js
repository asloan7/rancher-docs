"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21155],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(n),f=a,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86509:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Nutanix \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:2},p=void 0,d={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",title:"Nutanix \u8282\u70b9\u6a21\u677f\u914d\u7f6e",description:"\u8d26\u53f7\u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Nutanix \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:2},sidebar:"tutorialSidebar",previous:{title:"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},next:{title:"\u4e3b\u673a\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/machine-configuration"}},c={},u=[{value:"\u8d26\u53f7\u8bbf\u95ee",id:"\u8d26\u53f7\u8bbf\u95ee",level:2},{value:"\u8c03\u5ea6",id:"\u8c03\u5ea6",level:2},{value:"\u5b9e\u4f8b\u9009\u9879",id:"\u5b9e\u4f8b\u9009\u9879",level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u865a\u62df\u673a\u7c7b\u522b",id:"\u865a\u62df\u673a\u7c7b\u522b",level:2},{value:"cloud-init",id:"cloud-init",level:2}],m={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8d26\u53f7\u8bbf\u95ee"},"\u8d26\u53f7\u8bbf\u95ee"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7ba1\u7406\u7aef\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Prism Central \u7684\u4e3b\u673a\u540d/IP \u5730\u5740"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Prism Central \u7528\u6237\u7684\u7528\u6237\u540d"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Prism Central \u7528\u6237\u7684\u5bc6\u7801"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u4e0d\u5b89\u5168\u7684\u901a\u4fe1"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4e3a true \u4ee5\u5141\u8bb8\u4e0e Prism Central \u8fdb\u884c\u4e0d\u5b89\u5168\u7684 SSL \u901a\u4fe1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"False")))),(0,i.kt)("h2",{id:"\u8c03\u5ea6"},"\u8c03\u5ea6"),(0,i.kt)("p",null,"\u9009\u62e9\u865a\u62df\u673a\u8981\u8c03\u5ea6\u5230\u54ea\u4e2a Nutanix \u96c6\u7fa4\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u96c6\u7fa4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u7f72\u865a\u62df\u673a\u7684 Nutanix \u96c6\u7fa4\u7684\u540d\u79f0\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09")))),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u9009\u9879"},"\u5b9e\u4f8b\u9009\u9879"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\u53c2\u6570"),"\u4e2d\uff0c\u914d\u7f6e\u6b64\u6a21\u677f\u521b\u5efa\u7684 VM \u7684 vCPU \u6570\u91cf\u3001\u5185\u5b58\u548c\u78c1\u76d8\u5927\u5c0f\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u914d\u7ed9 VM \u7684 vCPU \u6570\u91cf\uff08\u6838\u5fc3\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5206\u914d\u7ed9 VM \u7684 RAM \u91cf (MB)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2 GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Template Image"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u4f5c\u4e3a\u865a\u62df\u673a\u4e3b\u78c1\u76d8\u8fdb\u884c\u514b\u9686\u7684\u78c1\u76d8\u955c\u50cf\u6a21\u677f\u7684\u540d\u79f0\uff08\u5fc5\u987b\u652f\u6301 cloud-init\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u865a\u62df\u673a\u78c1\u76d8\u5927\u5c0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u865a\u62df\u673a\u4e3b\u78c1\u76d8\u7684\u65b0\u5927\u5c0f\uff08\u4ee5 GiB \u4e3a\u5355\u4f4d\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5176\u4ed6\u78c1\u76d8\u5927\u5c0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u6dfb\u52a0\u5230\u865a\u62df\u673a\u7684\u5176\u4ed6\u78c1\u76d8\u7684\u5927\u5c0f\uff08\u4ee5 GiB \u4e3a\u5355\u4f4d\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u50a8\u5b58\u5bb9\u5668"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u914d\u7f6e\u5176\u4ed6\u78c1\u76d8\u7684\u5b58\u50a8\u5bb9\u5668 ",(0,i.kt)("em",{parentName:"td"},"UUID")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cloud Config YAML"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u63d0\u4f9b\u7ed9\u865a\u62df\u673a\u7684 cloud-init\uff08\u5c06\u4f7f\u7528 Rancher root \u7528\u6237\u4fee\u8865\uff09"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u9644\u52a0\u5230\u865a\u62df\u673a\u7684\u7f51\u7edc\u7684\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u865a\u62df\u673a\u7c7b\u522b"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u5e94\u7528\u4e8e\u865a\u62df\u673a\u7684\u7c7b\u522b\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"\u865a\u62df\u673a\u652f\u6301\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html"},"Config Drive v2 datasource")," \u6765\u652f\u6301 ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"cloud-init")," \u7684\u4efb\u4f55\u73b0\u4ee3 Linux \u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,i.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,i.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u5141\u8bb8\u4f60\u4e3a\u865a\u62df\u673a\u914d\u7f6e\u591a\u4e2a\u7f51\u7edc\u3002\u5728",(0,i.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u5b57\u6bb5\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0"),"\uff0c\u7136\u540e\u5728 AOS \u4e2d\u6dfb\u52a0\u4efb\u4f55\u53ef\u7528\u7684\u7f51\u7edc\u3002"),(0,i.kt)("h2",{id:"\u865a\u62df\u673a\u7c7b\u522b"},"\u865a\u62df\u673a\u7c7b\u522b"),(0,i.kt)("p",null,"\u7c7b\u522b\u7528\u4e8e\u5c06\u5b9e\u4f53\u5206\u7ec4\u6210\u952e\u503c\u5bf9\u3002\u901a\u5e38\u4f1a\u6839\u636e\u67d0\u4e9b\u6807\u51c6\u4e3a\u865a\u62df\u673a\u5206\u914d\u4e00\u4e2a\u7c7b\u522b\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u7b56\u7565\u7ed1\u5b9a\u5230\u5206\u914d\uff08\u5206\u7ec4\uff09\u4e86\u7279\u5b9a\u7c7b\u522b\u503c\u7684\u5b9e\u4f53\u3002"),(0,i.kt)("h2",{id:"cloud-init"},"cloud-init"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," \u5141\u8bb8\u4f60\u5728\u9996\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u914d\u7f6e\uff0c\u4ece\u800c\u521d\u59cb\u5316\u8282\u70b9\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u521b\u5efa\u7528\u6237\u6216\u6388\u6743 SSH \u5bc6\u94a5\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528 cloud-init \u521d\u59cb\u5316\uff0c\u8bf7\u5c06\u4f7f\u7528\u6709\u6548 YAML \u8bed\u6cd5\u7684 cloud config \u7c98\u8d34\u5230 ",(0,i.kt)("strong",{parentName:"p"},"Cloud Config YAML")," \u5b57\u6bb5\u4e2d\u3002\u8981\u83b7\u53d6\u652f\u6301\u7684 cloud config \u6307\u4ee4\u7684\u6ce8\u91ca\u793a\u4f8b\u96c6\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud-init \u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528\u57fa\u4e8e cloud-init \u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u4ec5\u652f\u6301\u4f7f\u7528\u7528\u6237\u6570\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"runcmd"),"\uff0c\u4e0d\u652f\u6301 NoCloud \u6216\u5176\u4ed6\u7f51\u7edc\u914d\u7f6e\u6570\u636e\u6e90\u3002"),(0,i.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528 Nutanix IP Address Management\uff08IPAM) \u6216\u5176\u4ed6 DHCP \u670d\u52a1\u3002"))}f.isMDXComponent=!0}}]);