"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64044],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64602:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Template Creator Permissions",weight:10},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",title:"Template Creator Permissions",description:"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Template Creator Permissions",weight:10},sidebar:"tutorialSidebar",previous:{title:"RKE Templates",permalink:"/pages-for-subheaders/about-rke1-templates"},next:{title:"Access and Sharing",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"}},u={},c=[{value:"Allowing a User to Create Templates",id:"allowing-a-user-to-create-templates",level:3},{value:"Allowing New Users to Create Templates by Default",id:"allowing-new-users-to-create-templates-by-default",level:3},{value:"Revoking Permission to Create Templates",id:"revoking-permission-to-create-templates",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Administrators have the permission to create RKE templates, and only administrators can give that permission to other users."),(0,o.kt)("p",null,"For more information on administrator permissions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"documentation on global permissions"),"."),(0,o.kt)("h1",{id:"giving-users-permission-to-create-templates"},"Giving Users Permission to Create Templates"),(0,o.kt)("p",null,"Templates can only be created by users who have the global permission ",(0,o.kt)("strong",{parentName:"p"},"Create RKE Templates"),"."),(0,o.kt)("p",null,"Administrators have the global permission to create templates, and only administrators can give that permission to other users."),(0,o.kt)("p",null,"For information on allowing users to modify existing templates, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"Sharing Templates.")),(0,o.kt)("p",null,"Administrators can give users permission to create RKE templates in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By editing the permissions of an ",(0,o.kt)("a",{parentName:"li",href:"#allowing-a-user-to-create-templates"},"individual user")),(0,o.kt)("li",{parentName:"ul"},"By changing the ",(0,o.kt)("a",{parentName:"li",href:"#allowing-new-users-to-create-templates-by-default"},"default permissions of new users"))),(0,o.kt)("h3",{id:"allowing-a-user-to-create-templates"},"Allowing a User to Create Templates"),(0,o.kt)("p",null,"An administrator can individually grant the role ",(0,o.kt)("strong",{parentName:"p"},"Create RKE Templates")," to any existing user by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Users"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the user you want to edit and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Built-in")," section, check the box for ",(0,o.kt)("strong",{parentName:"li"},"Create new RKE Cluster Templates")," role along with any other roles the user should have. You may want to also check the box for ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Template Revisions"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user has permission to create RKE templates."),(0,o.kt)("h3",{id:"allowing-new-users-to-create-templates-by-default"},"Allowing New Users to Create Templates by Default"),(0,o.kt)("p",null,"Alternatively, the administrator can give all new users the default permission to create RKE templates by following the following steps. This will not affect the permissions of existing users."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Roles"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the role named ",(0,o.kt)("strong",{parentName:"li"},"Create new RKE Cluster Templates and click "),"\u22ee > Edit Config**."),(0,o.kt)("li",{parentName:"ol"},"Select the option ",(0,o.kt)("strong",{parentName:"li"},"Yes: Default role for new users"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),"."),(0,o.kt)("li",{parentName:"ol"},"If you would like new users to also be able to create RKE template revisions, enable that role as default as well.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Any new user created in this Rancher installation will be able to create RKE templates. Existing users will not get this permission."),(0,o.kt)("h3",{id:"revoking-permission-to-create-templates"},"Revoking Permission to Create Templates"),(0,o.kt)("p",null,"Administrators can remove a user's permission to create templates with the following steps. Note: Administrators have full control over all resources regardless of whether fine-grained permissions are selected."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Users"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the user you want to edit permissions for and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Built-in")," section, un-check the box for ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Templates")," and ",(0,o.kt)("strong",{parentName:"li"},"Create RKE Template Revisions,")," if applicable. In this section, you can change the user back to a standard user, or give the user a different set of permissions."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user cannot create RKE templates."))}d.isMDXComponent=!0}}]);