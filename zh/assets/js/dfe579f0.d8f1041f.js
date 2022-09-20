"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62189],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(t),d=o,b=h["".concat(u,".").concat(d)]||h[d]||p[d]||l;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48251:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={title:"Troubleshooting Controlplane Nodes",weight:2},u=void 0,s={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",id:"version-2.0-2.4/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",title:"Troubleshooting Controlplane Nodes",description:"This section applies to nodes with the controlplane role.",source:"@site/versioned_docs/version-2.0-2.4/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",permalink:"/zh/v2.0-v2.4/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Troubleshooting Controlplane Nodes",weight:2},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting etcd Nodes",permalink:"/zh/v2.0-v2.4/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},next:{title:"Troubleshooting nginx-proxy",permalink:"/zh/v2.0-v2.4/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"}},c={},p=[],h={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section applies to nodes with the ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,l.kt)("h1",{id:"check-if-the-controlplane-containers-are-running"},"Check if the Controlplane Containers are Running"),(0,l.kt)("p",null,"There are three specific containers launched on nodes with the ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," role:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube-scheduler"))),(0,l.kt)("p",null,"The containers should have status ",(0,l.kt)("strong",{parentName:"p"},"Up"),". The duration shown after ",(0,l.kt)("strong",{parentName:"p"},"Up")," is the time the container has been running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kube-apiserver|kube-controller-manager|kube-scheduler'\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n26c7159abbcc        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-apiserver\nf3d287ca4549        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-scheduler\nbdf3898b8063        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-controller-manager\n')),(0,l.kt)("h1",{id:"controlplane-container-logging"},"Controlplane Container Logging"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you added multiple nodes with the ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," role, both ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," use a leader election process to determine the leader. Only the current leader will log the performed actions. See ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/kubernetes-resources#kubernetes-leader-election"},"Kubernetes leader election")," how to retrieve the current leader.")),(0,l.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker logs kube-apiserver\ndocker logs kube-controller-manager\ndocker logs kube-scheduler\n")))}d.isMDXComponent=!0}}]);