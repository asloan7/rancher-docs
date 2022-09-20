"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79129],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Rancher HA",weight:104},c=void 0,p={unversionedId:"troubleshooting/other-troubleshooting-tips/rancher-ha",id:"troubleshooting/other-troubleshooting-tips/rancher-ha",title:"Rancher HA",description:"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u4f60\u7684 Rancher Kubernetes \u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/other-troubleshooting-tips/rancher-ha.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/rancher-ha",permalink:"/zh/troubleshooting/other-troubleshooting-tips/rancher-ha",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/rancher-ha.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Rancher HA",weight:104},sidebar:"tutorialSidebar",previous:{title:"DNS",permalink:"/zh/troubleshooting/other-troubleshooting-tips/dns"},next:{title:"\u6ce8\u518c\u96c6\u7fa4",permalink:"/zh/troubleshooting/other-troubleshooting-tips/registered-clusters"}},s={},u=[{value:"\u68c0\u67e5 Rancher Pod",id:"\u68c0\u67e5-rancher-pod",level:3},{value:"Pod \u8be6\u7ec6\u4fe1\u606f",id:"pod-\u8be6\u7ec6\u4fe1\u606f",level:4},{value:"Pod \u5bb9\u5668\u65e5\u5fd7",id:"pod-\u5bb9\u5668\u65e5\u5fd7",level:4},{value:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6",id:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6",level:4},{value:"\u68c0\u67e5 Ingress",id:"\u68c0\u67e5-ingress",level:3},{value:"\u68c0\u67e5 Ingress Controller \u65e5\u5fd7",id:"\u68c0\u67e5-ingress-controller-\u65e5\u5fd7",level:3},{value:"Leader \u9009\u4e3e",id:"leader-\u9009\u4e3e",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u4f60\u7684 Rancher Kubernetes \u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u914d\u7f6e\u4e86\u6b63\u786e\u7684 kubeconfig\uff08\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml"),"\uff09\u3002"),(0,a.kt)("h3",{id:"\u68c0\u67e5-rancher-pod"},"\u68c0\u67e5 Rancher Pod"),(0,a.kt)("p",null,"Rancher pod \u4f1a\u90e8\u7f72\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u4e00\u4e2a Deployment\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5 pod \u662f\u5426\u8fd0\u884c\u5728\u6240\u6709\u8282\u70b9\u4e0a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=rancher -o wide\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS    RESTARTS   AGE   IP          NODE\nrancher-7dbd7875f7-n6t5t   1/1     Running   0          8m    x.x.x.x     x.x.x.x\nrancher-7dbd7875f7-qbj5k   1/1     Running   0          8m    x.x.x.x     x.x.x.x\nrancher-7dbd7875f7-qw7wb   1/1     Running   0          8m    x.x.x.x     x.x.x.x\n")),(0,a.kt)("p",null,"\u5982\u679c pod \u65e0\u6cd5\u8fd0\u884c\uff08\u5373\u72b6\u6001\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff0cReady \u72b6\u6001\u672a\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"1/1"),"\uff0c\u6216\u8005\u6709\u5927\u91cf Restarts\uff09\uff0c\u8bf7\u68c0\u67e5 pod \u8be6\u7ec6\u4fe1\u606f\uff0c\u65e5\u5fd7\u548c\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6\u3002"),(0,a.kt)("h4",{id:"pod-\u8be6\u7ec6\u4fe1\u606f"},"Pod \u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe pods -l app=rancher\n")),(0,a.kt)("h4",{id:"pod-\u5bb9\u5668\u65e5\u5fd7"},"Pod \u5bb9\u5668\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=rancher\n")),(0,a.kt)("h4",{id:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6"},"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get events\n")),(0,a.kt)("h3",{id:"\u68c0\u67e5-ingress"},"\u68c0\u67e5 Ingress"),(0,a.kt)("p",null,"Ingress \u5e94\u8be5\u5177\u6709\u6b63\u786e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"HOSTS"),"\uff08\u663e\u793a\u914d\u7f6e\u7684 FQDN\uff09\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ADDRESS"),"\uff08\u5c06\u88ab\u8def\u7531\u5230\u8be5\u4e3b\u673a\u5730\u5740\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get ingress\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME      HOSTS                    ADDRESS                   PORTS     AGE\nrancher   rancher.yourdomain.com   x.x.x.x,x.x.x.x,x.x.x.x   80, 443   2m\n")),(0,a.kt)("h3",{id:"\u68c0\u67e5-ingress-controller-\u65e5\u5fd7"},"\u68c0\u67e5 Ingress Controller \u65e5\u5fd7"),(0,a.kt)("p",null,"\u5982\u679c\u8bbf\u95ee\u4f60\u914d\u7f6e\u7684 Rancher FQDN \u65f6\u6ca1\u6709\u663e\u793a UI\uff0c\u8bf7\u68c0\u67e5 Ingress Controller \u65e5\u5fd7\u4ee5\u67e5\u770b\u5c1d\u8bd5\u8bbf\u95ee Rancher \u65f6\u53d1\u751f\u4e86\u4ec0\u4e48\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -l app=ingress-nginx\n")),(0,a.kt)("h3",{id:"leader-\u9009\u4e3e"},"Leader \u9009\u4e3e"),(0,a.kt)("p",null,"Leader \u7531 Leader \u9009\u4e3e\u786e\u5b9a\u3002\u786e\u5b9a Leader \u540e\uff0cLeader\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"holderIdentity"),"\uff09\u4f1a\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-controllers")," ConfigMap \u4e2d\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-7dbd7875f7-qbj5k"),"\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n kube-system get configmap cattle-controllers -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"rancher-7dbd7875f7-qbj5k","leaseDurationSeconds":45,"acquireTime":"2019-04-04T11:53:12Z","renewTime":"2019-04-04T12:24:08Z","leaderTransitions":0}\n')))}h.isMDXComponent=!0}}]);