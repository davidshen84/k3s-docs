"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1388],{7946:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var d=n(5893),r=n(1151);const i={title:"\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0"},l=void 0,h={id:"reference/resource-profiling",title:"\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s\u306e\u6700\u5c0f\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306e\u30c6\u30b9\u30c8\u7d50\u679c\u3092\u8a18\u9332\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/resource-profiling.md",sourceDirName:"reference",slug:"/reference/resource-profiling",permalink:"/ja/reference/resource-profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md",tags:[],version:"current",lastUpdatedAt:1728924809e3,frontMatter:{title:"\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0"},sidebar:"mySidebar",previous:{title:"\u30d5\u30e9\u30b0\u306e\u975e\u63a8\u5968\u5316",permalink:"/ja/reference/flag-deprecation"},next:{title:"v1.30.X",permalink:"/ja/release-notes/v1.30.X"}},t={},c=[{value:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306e\u7bc4\u56f2",id:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306e\u7bc4\u56f2",level:2},{value:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6e2c\u5b9a\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6e2c\u5b9a\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2},{value:"\u65b9\u6cd5\u8ad6",id:"\u65b9\u6cd5\u8ad6",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:2},{value:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6",id:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6",level:2},{value:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc",id:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064k3s\u30b5\u30fc\u30d0\u30fc",level:3},{value:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc",id:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064k3s\u30af\u30e9\u30b9\u30bf\u30fc",level:3},{value:"K3s\u30b5\u30fc\u30d0\u30fc",id:"k3s\u30b5\u30fc\u30d0\u30fc",level:4},{value:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",id:"k3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:2},{value:"\u4e3b\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u5229\u7528\u30c9\u30e9\u30a4\u30d0\u30fc",id:"\u4e3b\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u5229\u7528\u30c9\u30e9\u30a4\u30d0\u30fc",level:3},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5",level:3}];function x(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s\u306e\u6700\u5c0f\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306e\u30c6\u30b9\u30c8\u7d50\u679c\u3092\u8a18\u9332\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),(0,d.jsx)(s.th,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5"}),(0,d.jsx)(s.th,{children:"\u6700\u5c0fCPU"}),(0,d.jsx)(s.th,{children:"Kine/SQLite\u4f7f\u7528\u6642\u306e\u6700\u5c0fRAM"}),(0,d.jsx)(s.th,{children:"\u7d44\u307f\u8fbc\u307fetcd\u4f7f\u7528\u6642\u306e\u6700\u5c0fRAM"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc"}),(0,d.jsx)(s.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e6%"}),(0,d.jsx)(s.td,{children:"1596 M"}),(0,d.jsx)(s.td,{children:"1606 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc"}),(0,d.jsx)(s.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e5%"}),(0,d.jsx)(s.td,{children:"1428 M"}),(0,d.jsx)(s.td,{children:"1450 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),(0,d.jsx)(s.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e3%"}),(0,d.jsx)(s.td,{children:"275 M"}),(0,d.jsx)(s.td,{children:"275 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc"}),(0,d.jsx)(s.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e30%"}),(0,d.jsx)(s.td,{children:"1588 M"}),(0,d.jsx)(s.td,{children:"1613 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc"}),(0,d.jsx)(s.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e25%"}),(0,d.jsx)(s.td,{children:"1215 M"}),(0,d.jsx)(s.td,{children:"1413 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),(0,d.jsx)(s.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e10%"}),(0,d.jsx)(s.td,{children:"268 M"}),(0,d.jsx)(s.td,{children:"268 M"})]})]})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E7%AF%84%E5%9B%B2",children:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306e\u7bc4\u56f2"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3%E6%B8%AC%E5%AE%9A%E3%81%AB%E5%90%AB%E3%81%BE%E3%82%8C%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88",children:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6e2c\u5b9a\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E6%96%B9%E6%B3%95%E8%AB%96",children:"\u65b9\u6cd5\u8ad6"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E7%92%B0%E5%A2%83",children:"\u74b0\u5883"})}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"#%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E8%A6%81%E4%BB%B6",children:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%89%E3%82%92%E6%8C%81%E3%81%A4K3s%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC",children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E5%8D%98%E4%B8%80%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%92%E6%8C%81%E3%81%A4K3s%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%BF%E3%83%BC",children:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#K3s%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88",children:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"#%E5%88%86%E6%9E%90",children:"\u5206\u6790"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E4%B8%BB%E8%A6%81%E3%81%AA%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E5%88%A9%E7%94%A8%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC",children:"\u4e3b\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u5229\u7528\u30c9\u30e9\u30a4\u30d0\u30fc"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%81%A8%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%89%E3%81%8C%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%BF%E3%83%BC%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2%E3%81%AB%E5%B9%B2%E6%B8%89%E3%81%97%E3%81%AA%E3%81%84%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306e\u7bc4\u56f2",children:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306e\u7bc4\u56f2"}),"\n",(0,d.jsx)(s.p,{children:"\u30ea\u30bd\u30fc\u30b9\u30c6\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u554f\u984c\u6587\u306b\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\u5358\u4e00\u30ce\u30fc\u30c9\u30af\u30e9\u30b9\u30bf\u30fc\u3067\u3001\u5b9f\u969b\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u3053\u3068\u3092\u524d\u63d0\u306b\u3001K3s\u30b9\u30bf\u30c3\u30af\u30b5\u30fc\u30d0\u30fc\u30b9\u30bf\u30c3\u30af\u5168\u4f53\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u78ba\u4fdd\u3059\u3079\u304d\u6b63\u5f53\u306a\u6700\u5c0fCPU\u3001\u30e1\u30e2\u30ea\u3001\u304a\u3088\u3073IOPs\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff08\u30ef\u30fc\u30ab\u30fc\uff09\u30ce\u30fc\u30c9\u3067\u3001Kubernetes\u304a\u3088\u3073K3s\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08kubelet\u304a\u3088\u3073k3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff09\u306e\u305f\u3081\u306b\u78ba\u4fdd\u3059\u3079\u304d\u6b63\u5f53\u306a\u6700\u5c0fCPU\u3001\u30e1\u30e2\u30ea\u3001\u304a\u3088\u3073IOPs\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6e2c\u5b9a\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6e2c\u5b9a\u306b\u542b\u307e\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,d.jsx)(s.p,{children:"\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6709\u52b9\u306aK3s v1.26.5"}),"\n",(0,d.jsx)(s.li,{children:"Prometheus + Grafana\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b9\u30bf\u30c3\u30af"}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"Kubernetes\u306eNginx\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u4f8b"})}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u308c\u3089\u306f\u3001K3s\u30d1\u30c3\u30b1\u30fc\u30b8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08Traefik Ingress\u3001Klipper lb\u3001local-path storage\uff09\u306e\u307f\u3092\u4f7f\u7528\u3057\u3001\u6a19\u6e96\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b9\u30bf\u30c3\u30af\uff08Prometheus\u3068Grafana\uff09\u304a\u3088\u3073Guestbook\u4f8b\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u5b89\u5b9a\u3057\u305f\u30b7\u30b9\u30c6\u30e0\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u6570\u5024\u3067\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"IOPS\u3092\u542b\u3080\u30ea\u30bd\u30fc\u30b9\u6570\u5024\u306fKubernetes\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304a\u3088\u3073\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306e\u307f\u306e\u3082\u306e\u3067\u3042\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u306e\u7ba1\u7406\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3084\u30ed\u30b0\u3001\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u7ba1\u7406\u3001\u307e\u305f\u306f\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u56fa\u6709\u306e\u8981\u4ef6\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,d.jsx)(s.h2,{id:"\u65b9\u6cd5\u8ad6",children:"\u65b9\u6cd5\u8ad6"}),"\n",(0,d.jsxs)(s.p,{children:["Prometheus v2.43.0\u306e\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,d.jsx)(s.code,{children:"prometheus-node-exporter"}),"\u3092apt\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30db\u30b9\u30c8\u306eCPU\u3001\u30e1\u30e2\u30ea\u3001\u304a\u3088\u3073\u30c7\u30a3\u30b9\u30afIO\u7d71\u8a08\u3092\u53ce\u96c6\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"systemd-cgtop"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001systemd cgroup\u30ec\u30d9\u30eb\u306eCPU\u304a\u3088\u3073\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u3092\u30b9\u30dd\u30c3\u30c8\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3057\u305f\u3002",(0,d.jsx)(s.code,{children:"system.slice/k3s.service"}),"\u306fK3s\u304a\u3088\u3073containerd\u306e\u30ea\u30bd\u30fc\u30b9\u4f7f\u7528\u91cf\u3092\u8ffd\u8de1\u3057\u3001\u500b\u3005\u306e\u30dd\u30c3\u30c9\u306f",(0,d.jsx)(s.code,{children:"kubepods"}),"\u968e\u5c64\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u8ffd\u52a0\u306e\u8a73\u7d30\u306aK3s\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u30c7\u30fc\u30bf\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304a\u3088\u3073\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e\u305f\u3081\u306b\u7d71\u5408\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u7528\u3057\u3066",(0,d.jsx)(s.code,{children:"kubectl top node"}),"\u304b\u3089\u53ce\u96c6\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"\u4f7f\u7528\u91cf\u6570\u5024\u306f\u3001\u8a18\u8ff0\u3055\u308c\u305f\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u30ce\u30fc\u30c9\u306e\u5b9a\u5e38\u72b6\u614b\u64cd\u4f5c\u304b\u3089\u306e95\u30d1\u30fc\u30bb\u30f3\u30bf\u30a4\u30eb\u306e\u8aad\u307f\u53d6\u308a\u5024\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.h2,{id:"\u74b0\u5883",children:"\u74b0\u5883"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}),(0,d.jsx)(s.th,{children:"OS"}),(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"CPU"}),(0,d.jsx)(s.th,{children:"RAM"}),(0,d.jsx)(s.th,{children:"\u30c7\u30a3\u30b9\u30af"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"x86_64"}),(0,d.jsx)(s.td,{children:"Ubuntu 22.04"}),(0,d.jsx)(s.td,{children:"AWS c6id.xlarge"}),(0,d.jsx)(s.td,{children:"Intel Xeon Platinum 8375C CPU, 4 Core 2.90 GHz"}),(0,d.jsx)(s.td,{children:"8 GB"}),(0,d.jsx)(s.td,{children:"NVME SSD"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"aarch64"}),(0,d.jsx)(s.td,{children:"Raspberry Pi OS 11"}),(0,d.jsx)(s.td,{children:"Raspberry Pi 4 Model B"}),(0,d.jsx)(s.td,{children:"BCM2711, 4 Core 1.50 GHz"}),(0,d.jsx)(s.td,{children:"8 GB"}),(0,d.jsx)(s.td,{children:"UHS-III SDXC"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6",children:"\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6"}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u57fa\u672c\u7684\u306aK3s\u64cd\u4f5c\u306e\u305f\u3081\u306e\u6700\u5c0f\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306e\u30c6\u30b9\u30c8\u7d50\u679c\u3092\u8a18\u9332\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.h3,{id:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064k3s\u30b5\u30fc\u30d0\u30fc",children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc"}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u308c\u306f\u3001K3s\u30b5\u30fc\u30d0\u30fc\u304c",(0,d.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"\u30b7\u30f3\u30d7\u30eb\u306a\u30ef\u30fc\u30af\u30ed\u30fc\u30c9"}),"\u3068\u30ea\u30bd\u30fc\u30b9\u3092\u5171\u6709\u3059\u308b\u5358\u4e00\u30ce\u30fc\u30c9\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u8981\u4ef6\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"CPU\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"CPU\u30b3\u30a2\u4f7f\u7528\u7387"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e6%"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e30%"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u30e1\u30e2\u30ea\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"}),(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"\u30e1\u30e2\u30ea"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Kine/SQLite"}),(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"1596 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"1588 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u7d44\u307f\u8fbc\u307fetcd"}),(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"1606 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"1613 M"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u30c7\u30a3\u30b9\u30af\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"}),(0,d.jsx)(s.th,{children:"IOPS"}),(0,d.jsx)(s.th,{children:"KiB/\u79d2"}),(0,d.jsx)(s.th,{children:"\u30ec\u30a4\u30c6\u30f3\u30b7"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Kine/SQLite"}),(0,d.jsx)(s.td,{children:"10"}),(0,d.jsx)(s.td,{children:"500"}),(0,d.jsx)(s.td,{children:"< 10 ms"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u7d44\u307f\u8fbc\u307fetcd"}),(0,d.jsx)(s.td,{children:"50"}),(0,d.jsx)(s.td,{children:"250"}),(0,d.jsx)(s.td,{children:"< 5 ms"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064k3s\u30af\u30e9\u30b9\u30bf\u30fc",children:"\u5358\u4e00\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc"}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u308c\u306f\u3001K3s\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3068K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u8981\u4ef6\u3067\u3059\u304c\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,d.jsx)(s.h4,{id:"k3s\u30b5\u30fc\u30d0\u30fc",children:"K3s\u30b5\u30fc\u30d0\u30fc"}),"\n",(0,d.jsx)(s.p,{children:"CPU\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"CPU\u30b3\u30a2\u4f7f\u7528\u7387"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e5%"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e25%"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u30e1\u30e2\u30ea\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"}),(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"\u30e1\u30e2\u30ea"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Kine/SQLite"}),(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"1428 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"1215 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u7d44\u307f\u8fbc\u307fetcd"}),(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"1450 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"1413 M"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"k3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",children:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),"\n",(0,d.jsx)(s.p,{children:"\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u30b7\u30b9\u30c6\u30e0"}),(0,d.jsx)(s.th,{children:"CPU\u30b3\u30a2\u4f7f\u7528\u7387"}),(0,d.jsx)(s.th,{children:"RAM"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Intel 8375C"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e3%"}),(0,d.jsx)(s.td,{children:"275 M"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Pi4B"}),(0,d.jsx)(s.td,{children:"\u30b3\u30a2\u306e5%"}),(0,d.jsx)(s.td,{children:"268 M"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s\u30b5\u30fc\u30d0\u30fc\u304a\u3088\u3073\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u5229\u7528\u306b\u6700\u3082\u5927\u304d\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304a\u3088\u3073\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8a18\u9332\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.h3,{id:"\u4e3b\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u5229\u7528\u30c9\u30e9\u30a4\u30d0\u30fc",children:"\u4e3b\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u5229\u7528\u30c9\u30e9\u30a4\u30d0\u30fc"}),"\n",(0,d.jsx)(s.p,{children:"K3s\u30b5\u30fc\u30d0\u30fc\u306e\u5229\u7528\u6570\u5024\u306f\u4e3b\u306b\u3001Kubernetes\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\uff08kine\u307e\u305f\u306fetcd\uff09\u3001API\u30b5\u30fc\u30d0\u30fc\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3001\u304a\u3088\u3073\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u30fc\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30eb\u30fc\u30d7\u306e\u30b5\u30dd\u30fc\u30c8\u306b\u3088\u3063\u3066\u99c6\u52d5\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u72b6\u614b\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u7ba1\u7406\u30bf\u30b9\u30af\u3082\u542b\u307e\u308c\u307e\u3059\u3002Kubernetes\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306b\u8ffd\u52a0\u306e\u8ca0\u8377\u3092\u304b\u3051\u308b\u64cd\u4f5c\uff08\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210/\u5909\u66f4/\u524a\u9664\u306a\u3069\uff09\u306f\u3001\u4e00\u6642\u7684\u306a\u5229\u7528\u306e\u30b9\u30d1\u30a4\u30af\u3092\u5f15\u304d\u8d77\u3053\u3057\u307e\u3059\u3002Rancher\u3084\u4ed6\u306e\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u30bf\u30a4\u30d7\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u3001Kubernetes\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u5e83\u7bc4\u306b\u4f7f\u7528\u3059\u308b\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u3084\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u304c\u5897\u52a0\u3057\u307e\u3059\u3002\u8ffd\u52a0\u306e\u30ce\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u591a\u304f\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u304c\u5897\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u5229\u7528\u6570\u5024\u306f\u4e3b\u306b\u3001\u30b3\u30f3\u30c6\u30ca\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30eb\u30fc\u30d7\u306e\u30b5\u30dd\u30fc\u30c8\u306b\u3088\u3063\u3066\u99c6\u52d5\u3055\u308c\u307e\u3059\u3002\u30a4\u30e1\u30fc\u30b8\u306e\u7ba1\u7406\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u4f5c\u6210/\u7834\u68c4\u3092\u542b\u3080\u64cd\u4f5c\u306f\u3001\u4e00\u6642\u7684\u306a\u5229\u7528\u306e\u30b9\u30d1\u30a4\u30af\u3092\u5f15\u304d\u8d77\u3053\u3057\u307e\u3059\u3002\u7279\u306b\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30eb\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30c7\u30a3\u30b9\u30af\u306b\u89e3\u51cd\u3059\u308b\u305f\u3081\u3001\u901a\u5e38\u306f\u9ad8\u3044CPU\u304a\u3088\u3073IO\u8ca0\u8377\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u53ef\u80fd\u3067\u3042\u308c\u3070\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30b9\u30c8\u30ec\u30fc\u30b8\uff08\u30dd\u30c3\u30c9\u306e\u4e00\u6642\u30b9\u30c8\u30ec\u30fc\u30b8\u304a\u3088\u3073\u30dc\u30ea\u30e5\u30fc\u30e0\uff09\u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08/var/lib/rancher/k3s/agent\uff09\u304b\u3089\u5206\u96e2\u3057\u3066\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u7af6\u5408\u304c\u767a\u751f\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n",(0,d.jsx)(s.h3,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5"}),"\n",(0,d.jsx)(s.p,{children:"\u30b5\u30fc\u30d0\u30fc\u304c\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30dd\u30c3\u30c9\u3082\u30db\u30b9\u30c8\u3057\u3066\u3044\u308b\u74b0\u5883\u3067\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304a\u3088\u3073\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306eIOPS\u304c\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u5e72\u6e09\u3057\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u308c\u3092\u6700\u3082\u52b9\u679c\u7684\u306b\u9054\u6210\u3059\u308b\u65b9\u6cd5\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08/var/lib/rancher/k3s/server\uff09\u3092\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff08/var/lib/rancher/k3s/agent\uff09\u3068\u306f\u7570\u306a\u308b\u30b9\u30c8\u30ec\u30fc\u30b8\u30e1\u30c7\u30a3\u30a2\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306fcontainerd\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30b9\u30c8\u30ec\u30fc\u30b8\uff08\u30dd\u30c3\u30c9\u306e\u4e00\u6642\u30b9\u30c8\u30ec\u30fc\u30b8\u304a\u3088\u3073\u30dc\u30ea\u30e5\u30fc\u30e0\uff09\u3082\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304b\u3089\u5206\u96e2\u3059\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u304a\u3088\u3073\u30ec\u30a4\u30c6\u30f3\u30b7\u8981\u4ef6\u3092\u6e80\u305f\u3055\u306a\u3044\u5834\u5408\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306e\u5fdc\u7b54\u304c\u9045\u5ef6\u3057\u305f\u308a\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u304c\u30b7\u30b9\u30c6\u30e0\u72b6\u614b\u3092\u7dad\u6301\u3067\u304d\u306a\u304f\u306a\u3063\u305f\u308a\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>l});var d=n(7294);const r={},i=d.createContext(r);function l(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);