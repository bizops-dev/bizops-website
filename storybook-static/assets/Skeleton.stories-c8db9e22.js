import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as i}from"./index-3521aefc.js";import"./_commonjsHelpers-725317a4.js";const s=i.memo(({className:r=""})=>e.jsx("div",{className:`bg-slate-200 dark:bg-slate-800 animate-pulse rounded ${r}`}));s.displayName="Skeleton";const a=i.memo(({lines:r=3,className:x=""})=>e.jsx("div",{className:`space-y-3 ${x}`,children:Array.from({length:r}).map((N,p)=>e.jsx(s,{className:`h-4 w-${p===r-1?"2/3":"full"}`},p))}));a.displayName="SkeletonText";const u=i.memo(()=>e.jsxs("div",{className:"p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900",children:[e.jsx(s,{className:"h-48 w-full rounded-xl mb-6"}),e.jsx(s,{className:"h-6 w-3/4 mb-4"}),e.jsx(a,{lines:2}),e.jsx("div",{className:"mt-6 flex gap-4",children:e.jsx(s,{className:"h-10 w-24 rounded-lg"})})]}));u.displayName="SkeletonCard";s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"SkeletonText",props:{lines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"SkeletonCard"};const S={title:"Components/Skeleton",component:s,parameters:{layout:"padded"},tags:["autodocs"]},l={render:()=>e.jsx(s,{className:"h-4 w-full"})},d={render:()=>e.jsx(s,{className:"h-16 w-16 rounded-full"})},n={render:()=>e.jsx(s,{className:"h-32 w-full rounded-lg"})},o={render:()=>e.jsx("div",{className:"space-y-4 max-w-md",children:e.jsx(a,{lines:3})})},c={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(u,{})})},t={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-4",children:[e.jsx(s,{className:"h-8 w-3/4 rounded"}),e.jsx(s,{className:"h-4 w-full rounded"}),e.jsx(s,{className:"h-4 w-5/6 rounded"}),e.jsx(s,{className:"h-64 w-full rounded-lg"}),e.jsx(a,{lines:4})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"h-16 w-16 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"h-4 w-1/3 rounded"}),e.jsx(s,{className:"h-3 w-1/2 rounded"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-4 w-full" />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-16 w-16 rounded-full" />
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-32 w-full rounded-lg" />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <SkeletonText lines={3} />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <SkeletonCard />
    </div>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-4">
      <Skeleton className="h-8 w-3/4 rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-5/6 rounded" />
      <Skeleton className="h-64 w-full rounded-lg" />
      <SkeletonText lines={4} />
    </div>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/3 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const j=["Default","Circle","Rectangle","Text","Card","Article","Profile"];export{t as Article,c as Card,d as Circle,l as Default,m as Profile,n as Rectangle,o as Text,j as __namedExportsOrder,S as default};
