"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7297],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43280:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Fleet - GitOps at Scale"},s=void 0,p={unversionedId:"pages-for-subheaders/fleet-gitops-at-scale",id:"version-2.5/pages-for-subheaders/fleet-gitops-at-scale",title:"Fleet - GitOps at Scale",description:"Available as of Rancher v2.5",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/fleet-gitops-at-scale.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/fleet-gitops-at-scale",permalink:"/zh/v2.5/pages-for-subheaders/fleet-gitops-at-scale",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/fleet-gitops-at-scale.md",tags:[],version:"2.5",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Fleet - GitOps at Scale"},sidebar:"tutorialSidebar",previous:{title:"Creating a Custom Benchmark Version for Running a Cluster Scan",permalink:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/custom-benchmark"},next:{title:"Architecture",permalink:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"}},c={},u=[{value:"Architecture",id:"architecture",level:2},{value:"Accessing Fleet in the Rancher UI",id:"accessing-fleet-in-the-rancher-ui",level:2},{value:"Windows Support",id:"windows-support",level:2},{value:"GitHub Repository",id:"github-repository",level:2},{value:"Using Fleet Behind a Proxy",id:"using-fleet-behind-a-proxy",level:2},{value:"Helm Chart Dependencies",id:"helm-chart-dependencies",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Documentation",id:"documentation",level:2}],h={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of Rancher v2.5")),(0,o.kt)("p",null,"Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It\u2019s also lightweight enough that it works great for a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/single-cluster-install/"},"single cluster")," too, but it really shines when you get to a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/multi-cluster-install/"},"large scale"),". By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization."),(0,o.kt)("p",null,"Fleet is a separate project from Rancher, and can be installed on any Kubernetes cluster with Helm."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"For information about how Fleet works, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"},"this page"),"."),(0,o.kt)("h2",{id:"accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI"),(0,o.kt)("p",null,"Fleet comes preinstalled in Rancher v2.5. Users can leverage continuous delivery to deploy their applications to the Kubernetes clusters in the git repository without any manual operation by following ",(0,o.kt)("strong",{parentName:"p"},"gitops")," practice. For additional information on Continuous Delivery and other Fleet troubleshooting tips, refer ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/troubleshooting/"},"here"),"."),(0,o.kt)("p",null,"Follow the steps below to access Continuous Delivery in the Rancher UI:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer")," in the Rancher UI.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the top left dropdown menu, click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer > Continuous Delivery"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your namespace at the top of the menu, noting the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, ",(0,o.kt)("strong",{parentName:"p"},"fleet-default")," is selected which includes all downstream clusters that are registered through Rancher.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may switch to ",(0,o.kt)("strong",{parentName:"p"},"fleet-local"),", which only contains the ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster, or you may create your own workspace to which you may assign and move clusters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can then manage clusters by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," on the left navigation bar.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Gitrepos")," on the left navigation bar to deploy the gitrepo into your clusters in the current workspace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-add/"},"git repository")," and ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-structure/"},"target clusters/cluster group"),". You can also create the cluster group in the UI by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Cluster Groups")," from the left navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the gitrepo is deployed, you can monitor the application through the Rancher UI."))),(0,o.kt)("h2",{id:"windows-support"},"Windows Support"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.5.6")),(0,o.kt)("p",null,"For details on support for clusters with Windows nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support"},"this page"),"."),(0,o.kt)("h2",{id:"github-repository"},"GitHub Repository"),(0,o.kt)("p",null,"The Fleet Helm charts are available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/tag/v0.3.10"},"here"),"."),(0,o.kt)("h2",{id:"using-fleet-behind-a-proxy"},"Using Fleet Behind a Proxy"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,o.kt)("p",null,"For details on using Fleet behind a proxy, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},"this page"),"."),(0,o.kt)("h2",{id:"helm-chart-dependencies"},"Helm Chart Dependencies"),(0,o.kt)("p",null,"In order for Helm charts with dependencies to deploy successfully, you must run a manual command (as listed below), as it is up to the user to fulfill the dependency list. If you do not do this and proceed to clone your repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install"),", your installation will fail because the dependencies will be missing."),(0,o.kt)("p",null,"The Helm chart in the git repository must include its dependencies in the charts subdirectory. You must either manually run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," locally, then commit the complete charts directory to your git repository. Note that you will update your commands with the applicable parameters"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Known Issue"),": Fleet becomes inoperable after a restore using the ",(0,o.kt)("a",{parentName:"p",href:"../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher#1-install-the-rancher-backup-operator"},"backup-restore-operator"),". We will update the community once a permanent solution is in place.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Temporary Workaround"),":"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Find the two service account tokens listed in the fleet-controller and the fleet-controller-bootstrap service accounts. These are under the fleet-system namespace of the local cluster."),(0,o.kt)("li",{parentName:"ol"},"Remove the non-existent token secret. Doing so allows for only one entry to be present for the service account token secret that actually exists."),(0,o.kt)("li",{parentName:"ol"},"Delete the fleet-controller Pod in the fleet-system namespace to reschedule."),(0,o.kt)("li",{parentName:"ol"},"After the service account token issue is resolved, you can force redeployment of the fleet-agents. In the Rancher UI, go to ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),", click on ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, then click ",(0,o.kt)("strong",{parentName:"li"},"Force Update"),"."),(0,o.kt)("li",{parentName:"ol"},"If the fleet-agent bundles remain in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Modified")," state after Step 4, update the field ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.forceSyncGeneration")," for the fleet-agent bundle to force re-creation.")))),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Known Issue"),": clientSecretName and helmSecretName secrets for Fleet gitrepos are not included in the backup nor restore created by the ",(0,o.kt)("a",{parentName:"p",href:"../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher#1-install-the-rancher-backup-operator"},"backup-restore-operator"),". We will update the community once a permanent solution is in place.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Temporary Workaround"),": By default, user-defined secrets are not backed up in Fleet. It is necessary to recreate secrets if performing a disaster recovery restore or migration of Rancher into a fresh cluster. To modify resourceSet to include extra resources you want to backup, refer to docs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator#user-flow"},"here"),"."))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The Fleet documentation is at ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"https://fleet.rancher.io/"),"."))}m.isMDXComponent=!0}}]);