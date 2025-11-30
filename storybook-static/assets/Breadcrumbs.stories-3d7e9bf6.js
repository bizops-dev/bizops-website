import{j as c}from"./jsx-runtime-9bc08dc0.js";import{r as u,a as B}from"./index-3521aefc.js";import"./index-5094bf61.js";import{c as F,R as I,N as A,s as q,a as K,b as V,u as E,d as z,e as L}from"./index-9eaa3f16.js";import{H as W}from"./house-81903ef0.js";import{c as $}from"./createLucideIcon-f25c75cd.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},w.apply(this,arguments)}function M(e,r){if(e==null)return{};var l={},a=Object.keys(e),s,n;for(n=0;n<a.length;n++)s=a[n],!(r.indexOf(s)>=0)&&(l[s]=e[s]);return l}function G(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J(e,r){return e.button===0&&(!r||r==="_self")&&!G(e)}const X=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Q="6";try{window.__reactRouterVersion=Q}catch{}const Y="startTransition",T=B[Y];function Z(e){let{basename:r,children:l,future:a,window:s}=e,n=u.useRef();n.current==null&&(n.current=F({window:s,v5Compat:!0}));let t=n.current,[i,p]=u.useState({action:t.action,location:t.location}),{v7_startTransition:o}=a||{},m=u.useCallback(d=>{o&&T?T(()=>p(d)):p(d)},[p,o]);return u.useLayoutEffect(()=>t.listen(m),[t,m]),u.createElement(I,{basename:r,children:l,location:i.location,navigationType:i.action,navigator:t,future:a})}const ee=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C=u.forwardRef(function(r,l){let{onClick:a,relative:s,reloadDocument:n,replace:t,state:i,target:p,to:o,preventScrollReset:m,unstable_viewTransition:d}=r,v=M(r,X),{basename:P}=u.useContext(A),R,S=!1;if(typeof o=="string"&&te.test(o)&&(R=o,ee))try{let h=new URL(window.location.href),f=o.startsWith("//")?new URL(h.protocol+o):new URL(o),j=q(f.pathname,P);f.origin===h.origin&&j!=null?o=j+f.search+f.hash:S=!0}catch{}let O=K(o,{relative:s}),k=ae(o,{replace:t,state:i,target:p,preventScrollReset:m,relative:s,unstable_viewTransition:d});function H(h){a&&a(h),h.defaultPrevented||k(h)}return u.createElement("a",w({},v,{href:R||O,onClick:S||n?a:H,ref:l,target:p}))});var N;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(N||(N={}));var _;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_||(_={}));function ae(e,r){let{target:l,replace:a,state:s,preventScrollReset:n,relative:t,unstable_viewTransition:i}=r===void 0?{}:r,p=V(),o=E(),m=z(e,{relative:t});return u.useCallback(d=>{if(J(d,l)){d.preventDefault();let v=a!==void 0?a:L(o)===L(m);p(e,{replace:v,state:s,preventScrollReset:n,relative:t,unstable_viewTransition:i})}},[o,p,m,a,s,l,e,n,t,i])}const U=({items:e,className:r=""})=>{const a=E().pathname.split("/").filter(t=>t),s=e||a.map((t,i)=>{const p=`/${a.slice(0,i+1).join("/")}`;return{label:t.charAt(0).toUpperCase()+t.slice(1).replace(/-/g," "),path:p}}),n={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://bizops.id/"},...s.map((t,i)=>({"@type":"ListItem",position:i+2,name:t.label,item:`https://bizops.id${t.path}`}))]};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",children:JSON.stringify(n)}),c.jsx("nav",{"aria-label":"Breadcrumb",className:`flex mb-6 text-sm text-slate-500 animate-fade-in-up ${r}`,children:c.jsxs("ol",{className:"flex items-center space-x-2",children:[c.jsx("li",{children:c.jsxs(C,{to:"/",className:"hover:text-primary-600 flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1",children:[c.jsx(W,{className:"w-4 h-4"}),c.jsx("span",{className:"sr-only",children:"Home"})]})}),s.map((t,i)=>c.jsxs("li",{className:"flex items-center",children:[c.jsx(D,{className:"w-4 h-4 text-slate-400 mx-1"}),c.jsx(C,{to:t.path,className:`hover:text-primary-600 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1 ${i===s.length-1?"text-slate-900 font-bold pointer-events-none":""}`,"aria-current":i===s.length-1?"page":void 0,children:t.label})]},t.path))]})})]})};U.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; path: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"path",value:{name:"string",required:!0}}]}}],raw:"{ label: string; path: string }[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const re=e=>c.jsx(Z,{children:c.jsx(U,{...e})}),ue={title:"Components/Breadcrumbs",component:re,parameters:{layout:"padded"},tags:["autodocs"]},b={args:{items:[{label:"Home",path:"/"},{label:"Products",path:"/products"},{label:"Details",path:"/products/details"}]}},g={args:{items:[{label:"Home",path:"/"},{label:"About",path:"/about"}]}},y={args:{items:[{label:"Home",path:"/"},{label:"Platform",path:"/platform"},{label:"Modules",path:"/platform/modules"},{label:"Finance",path:"/platform/modules/finance"},{label:"Reports",path:"/platform/modules/finance/reports"}]}},x={args:{items:[{label:"Home",path:"/"}]}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'Products',
      path: '/products'
    }, {
      label: 'Details',
      path: '/products/details'
    }]
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'About',
      path: '/about'
    }]
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }, {
      label: 'Platform',
      path: '/platform'
    }, {
      label: 'Modules',
      path: '/platform/modules'
    }, {
      label: 'Finance',
      path: '/platform/modules/finance'
    }, {
      label: 'Reports',
      path: '/platform/modules/finance/reports'
    }]
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      path: '/'
    }]
  }
}`,...x.parameters?.docs?.source}}};const me=["Default","ShortPath","LongPath","SingleLevel"];export{b as Default,y as LongPath,g as ShortPath,x as SingleLevel,me as __namedExportsOrder,ue as default};
