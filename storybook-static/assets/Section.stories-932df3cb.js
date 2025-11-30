import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as p}from"./index-3521aefc.js";import"./_commonjsHelpers-725317a4.js";const n=p.memo(({children:r,className:o="",id:l,containerClassName:i="",noPadding:d=!1,dark:c=!1})=>{const m=c?"bg-slate-900 text-white":"bg-white dark:bg-slate-950 text-slate-900 dark:text-white",x=d?"":"py-16 md:py-20 lg:py-24";return e.jsx("section",{id:l,className:`${m} ${x} ${o} transition-colors duration-300`,children:e.jsx("div",{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${i}`,children:r})})});n.displayName="Section";n.__docgenInfo={description:"",methods:[],displayName:"Section",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},noPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const f={title:"Components/Section",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{dark:{control:"boolean"},noPadding:{control:"boolean"}}},a={args:{children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Section Title"}),e.jsx("p",{className:"text-slate-600",children:"This is a default section with standard padding and styling."})]})}},t={args:{dark:!0,children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 text-white",children:"Dark Section"}),e.jsx("p",{className:"text-slate-300",children:"This is a dark section variant."})]})}},s={args:{noPadding:!0,children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"No Padding Section"}),e.jsx("p",{className:"text-slate-600",children:"Section without default padding."})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Section Title</h2>
        <p className="text-slate-600">This is a default section with standard padding and styling.</p>
      </div>
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dark: true,
    children: <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Dark Section</h2>
        <p className="text-slate-300">This is a dark section variant.</p>
      </div>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    noPadding: true,
    children: <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">No Padding Section</h2>
        <p className="text-slate-600">Section without default padding.</p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};const N=["Default","Dark","NoPadding"];export{t as Dark,a as Default,s as NoPadding,N as __namedExportsOrder,f as default};
