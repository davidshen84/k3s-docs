"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),o=n(7392),u=n(7094),s=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,k=e.values,f=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),C=y.tabGroupChoices,T=y.setTabGroupChoices,w=(0,r.useState)(g),S=w[0],E=w[1],O=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var K=C[f];null!=K&&K!==S&&v.some((function(e){return e.value===K}))&&E(K)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==S&&(L(t),E(a),null!=f&&T(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;n=null!=(l=O[i])?l:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onClick:D},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(5488),o=n(5162),u=["components"],s={title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879",weight:50},p=void 0,d={unversionedId:"installation/datastore",id:"installation/datastore",title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879",description:"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5728\u4e8e K3s \u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5b58\u50a8\u9009\u9879\u3002\u4f8b\u5982\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/datastore.md",sourceDirName:"installation",slug:"/installation/datastore",permalink:"/zh/installation/datastore",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/datastore.md",tags:[],version:"current",lastUpdatedAt:1670005687,formattedLastUpdatedAt:"2022\u5e7412\u67082\u65e5",frontMatter:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879",weight:50},sidebar:"mySidebar",previous:{title:"\u5177\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528",permalink:"/zh/installation/ha-embedded"},next:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/installation/private-registry"}},c={},m=[{value:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570",id:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd",id:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd",level:3}],k={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5728\u4e8e K3s \u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5b58\u50a8\u9009\u9879\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u56e2\u961f\u6ca1\u6709\u64cd\u4f5c etcd \u7684\u4e13\u4e1a\u77e5\u8bc6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 MySQL \u6216 PostgreSQL \u7b49\u4f01\u4e1a\u7ea7 SQL \u6570\u636e\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981\u5728 CI/CD \u73af\u5883\u4e2d\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u3001\u77ed\u671f\u7684\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8fb9\u7f18\u90e8\u7f72 Kubernetes \u5e76\u9700\u8981\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u53c8\u65e0\u6cd5\u627f\u62c5\u5728\u8fb9\u7f18\u7ba1\u7406\u6570\u636e\u5e93\u7684\u8fd0\u8425\u5f00\u9500\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 K3s \u7684\u5d4c\u5165\u5f0f HA \u6570\u636e\u5b58\u50a8\uff0c\u8be5\u6570\u636e\u5b58\u50a8\u6784\u5efa\u5728\u5d4c\u5165\u5f0f etcd \u4e4b\u4e0a\u3002")),(0,l.kt)("p",null,"K3s \u652f\u6301\u4ee5\u4e0b\u6570\u636e\u5b58\u50a8\u9009\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f ",(0,l.kt)("a",{parentName:"li",href:"https://www.sqlite.org/index.html"},"SQLite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL"),"\uff08\u9488\u5bf9\u7248\u672c 10.7\u300111.5 \u548c 14.2 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL"),"\uff08\u9488\u5bf9\u7248\u672c 5.7 \u548c 8.0 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB"),"\uff08\u9488\u5bf9\u7248\u672c 10.6.8 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd"),"\uff08\u9488\u5bf9\u7248\u672c 3.5.4 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f etcd \u4ee5\u5b9e\u73b0\u9ad8\u53ef\u7528")),(0,l.kt)("h3",{id:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570"},"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\uff08\u4f8b\u5982 PostgreSQL\u3001MySQL \u6216 etcd\uff09\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\uff0c\u4ee5\u4fbf K3s \u77e5\u9053\u5982\u4f55\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u6765\u914d\u7f6e\u8fde\u63a5\u7684\u8ba4\u8bc1\u548c\u52a0\u5bc6\u3002\u4e0b\u8868\u603b\u7ed3\u4e86\u8fd9\u4e9b\u53c2\u6570\uff0c\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a CLI \u6807\u5fd7\u6216\u73af\u5883\u53d8\u91cf\u4f20\u9012\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLI \u6807\u5fd7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--datastore-endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_ENDPOINT")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a PostgreSQL\u3001MySQL \u6216 etcd \u8fde\u63a5\u5b57\u7b26\u4e32\u3002\u8be5\u5b57\u7b26\u4e32\u7528\u4e8e\u63cf\u8ff0\u4e0e\u6570\u636e\u5b58\u50a8\u7684\u8fde\u63a5\u3002\u4e0d\u540c\u7684\u540e\u7aef\u5bf9\u5e94\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\u7ed3\u6784\uff0c\u4e0b\u6587\u6709\u8be6\u7ec6\u8bf4\u660e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--datastore-cafile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CAFILE")),(0,l.kt)("td",{parentName:"tr",align:null},"TLS \u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08CA\uff09\u6587\u4ef6\uff0c\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u5b58\u50a8\u7684\u901a\u4fe1\u5b89\u5168\u3002\u5982\u679c\u4f60\u7684\u6570\u636e\u5b58\u50a8\u4f7f\u7528\u81ea\u5b9a\u4e49\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u7b7e\u7f72\u7684\u8bc1\u4e66\u901a\u8fc7 TLS \u5904\u7406\u8bf7\u6c42\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u6b64\u53c2\u6570\u6307\u5b9a CA\uff0c\u4ee5\u4fbf K3s \u5ba2\u6237\u7aef\u53ef\u4ee5\u6b63\u786e\u9a8c\u8bc1\u8bc1\u4e66\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--datastore-certfile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CERTFILE")),(0,l.kt)("td",{parentName:"tr",align:null},"TLS \u8bc1\u4e66\u6587\u4ef6\uff0c\u7528\u4e8e\u5bf9\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u9a8c\u8bc1\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u5c06\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u4e3a\u652f\u6301\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u8ba4\u8bc1\u3002\u8981\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u4f60\u8fd8\u5fc5\u987b\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"td"},"datastore-keyfile")," \u53c2\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--datastore-keyfile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_KEYFILE")),(0,l.kt)("td",{parentName:"tr",align:null},"TLS \u5bc6\u94a5\u6587\u4ef6\uff0c\u7528\u4e8e\u5bf9\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u9a8c\u8bc1\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u524d\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"datastore-certfile")," \u53c2\u6570\u3002")))),(0,l.kt)("p",null,"\u4f5c\u4e3a\u6700\u4f73\u5b9e\u8df5\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u8fd9\u4e9b\u53c2\u6570\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u8fd9\u6837\u4f60\u7684\u6570\u636e\u5e93\u8bc1\u4e66\u6216\u5176\u4ed6\u654f\u611f\u4fe1\u606f\u5c31\u4e0d\u4f1a\u4f5c\u4e3a\u8fdb\u7a0b\u4fe1\u606f\u7684\u4e00\u90e8\u5206\u66b4\u9732\u51fa\u6765\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd"},"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd"),(0,l.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\u7684\u503c\u7684\u683c\u5f0f\u53d6\u51b3\u4e8e\u6570\u636e\u5b58\u50a8\u540e\u7aef\u3002\u4e0b\u6587\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u6bcf\u4e2a\u652f\u6301\u7684\u5916\u90e8\u6570\u636e\u5b58\u50a8\u7684\u683c\u5f0f\u548c\u529f\u80fd\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684 PostgreSQL \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"postgres://username:password@hostname:port/database-name")),(0,l.kt)("p",null,"\u652f\u6301\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u914d\u7f6e\u53c2\u6570\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/lib/pq%E3%80%82"},"https://godoc.org/github.com/lib/pq\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u4e0d\u5b58\u5728\uff0cserver \u5c06\u5c1d\u8bd5\u521b\u5efa\u5b83\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"postgres://")," \u4f5c\u4e3a\u7aef\u70b9\uff0cK3s \u5c06\u5c1d\u8bd5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres")," \u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fde\u63a5\u5230 localhost"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes")," \u7684\u6570\u636e\u5e93"))),(0,l.kt)(o.Z,{value:"MySQL / MariaDB",mdxType:"TabItem"},(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684 MySQL \u548c MariaDB \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mysql://username:password@tcp(hostname:3306)/database-name")),(0,l.kt)("p",null,"\u652f\u6301\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u914d\u7f6e\u53c2\u6570\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"https://github.com/go-sql-driver/mysql#dsn-data-source-name")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e K3s \u7684\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/issues/1093"},"\u5df2\u77e5\u95ee\u9898"),"\uff0c\u4f60\u65e0\u6cd5\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"tls")," \u53c2\u6570\u3002TLS \u901a\u4fe1\u662f\u652f\u6301\u7684\uff0c\u4f46\u4f60\u4e0d\u80fd\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a \u201cskip-verify\u201d \u4ee5\u4f7f K3s \u8df3\u8fc7\u8bc1\u4e66\u9a8c\u8bc1\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u4e0d\u5b58\u5728\uff0cserver \u5c06\u5c1d\u8bd5\u521b\u5efa\u5b83\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql://")," \u4f5c\u4e3a\u7aef\u70b9\uff0cK3s \u5c06\u5c1d\u8bd5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," \u7528\u6237\uff0c\u4e0d\u4f7f\u7528\u5bc6\u7801\u8fde\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/run/mysqld/mysqld.sock")," \u7684 MySQL socket"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes")," \u7684\u6570\u636e\u5e93"))),(0,l.kt)(o.Z,{value:"etcd",mdxType:"TabItem"},(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684 etcd \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5047\u8bbe\u4f7f\u7528\u7684\u662f\u5178\u578b\u7684\u4e09\u8282\u70b9 etcd \u96c6\u7fa4\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u518d\u63a5\u53d7\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684 etcd URL\u3002"))))}f.isMDXComponent=!0}}]);