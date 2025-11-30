import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as g}from"./index-3521aefc.js";import{C as k}from"./circle-alert-00d710d4.js";import{c as I}from"./createLucideIcon-f25c75cd.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=I("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=I("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=I("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),E=(r,a,s)=>{if(!r)return{};const l=a?`${r}-error`:void 0,t=s?`${r}-helper`:void 0,n=[l,t].filter(Boolean).join(" ");return{errorId:l,helperId:t,describedBy:n}},i=g.memo(({label:r,error:a,helperText:s,icon:l,className:t="",...n})=>{const o=n.id||n.name,{errorId:d,helperId:c,describedBy:N}=E(o,!!a,!!s);return e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{htmlFor:o,className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5",children:r}),e.jsxs("div",{className:"relative",children:[l&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400",children:l}),e.jsx("input",{className:`w-full h-11 ${l?"pl-10":"px-4"} py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed ${a?"border-red-500 focus:border-red-500 focus:ring-red-500/20 pr-10":"border-slate-300 dark:border-slate-700"} ${t}`,"aria-invalid":!!a,"aria-describedby":N||void 0,...n}),a&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500 animate-pulse",children:e.jsx(k,{className:"w-5 h-5"})})]}),s&&!a&&e.jsx("p",{id:c,className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:s}),a&&e.jsx("div",{role:"alert",id:d,className:"mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1",children:a})]})});i.displayName="Input";const p=g.memo(({label:r,error:a,helperText:s,options:l,icon:t,className:n="",...o})=>{const d=o.id||o.name,{errorId:c,helperId:N,describedBy:T}=E(d,!!a,!!s);return e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{htmlFor:d,className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5",children:r}),e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400",children:t}),e.jsx("select",{className:`w-full h-11 ${t?"pl-10":"px-4"} py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed appearance-none ${a?"border-red-500 focus:border-red-500 focus:ring-red-500/20":"border-slate-300 dark:border-slate-700"} ${n}`,"aria-invalid":!!a,"aria-describedby":T||void 0,...o,children:l.map(j=>e.jsx("option",{value:j.value,children:j.label},j.value))}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]}),s&&!a&&e.jsx("p",{id:N,className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:s}),a&&e.jsxs("div",{role:"alert",id:c,className:"mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1",children:[e.jsx(k,{className:"w-4 h-4"})," ",a]})]})});p.displayName="Select";const w=g.memo(({label:r,error:a,helperText:s,className:l="",...t})=>{const n=t.id||t.name,{errorId:o,helperId:d,describedBy:c}=E(n,!!a,!!s);return e.jsxs("div",{className:"w-full",children:[r&&e.jsx("label",{htmlFor:n,className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5",children:r}),e.jsx("textarea",{className:`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[120px] ${a?"border-red-500 focus:border-red-500 focus:ring-red-500/20":"border-slate-300 dark:border-slate-700"} ${l}`,"aria-invalid":!!a,"aria-describedby":c||void 0,...t}),s&&!a&&e.jsx("p",{id:d,className:"mt-1 text-xs text-slate-500 dark:text-slate-400",children:s}),a&&e.jsxs("div",{role:"alert",id:o,className:"mt-1 text-xs text-red-500 font-medium animate-fade-in-up flex items-center gap-1",children:[e.jsx(k,{className:"w-4 h-4"})," ",a]})]})});w.displayName="TextArea";const m=g.memo(({label:r,className:a="",...s})=>e.jsxs("label",{className:"flex items-start gap-3 cursor-pointer group",children:[e.jsxs("div",{className:"relative flex items-center mt-0.5",children:[e.jsx("input",{type:"checkbox",className:`peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 dark:border-slate-600 shadow-sm checked:border-primary-600 checked:bg-primary-600 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all ${a}`,...s}),e.jsx("svg",{className:"pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})})]}),e.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors select-none",children:r})]}));m.displayName="Checkbox";i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A={title:"Components/Form",parameters:{layout:"padded"},tags:["autodocs"]},u={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(i,{label:"Email",type:"email",placeholder:"Enter your email",icon:e.jsx(q,{className:"w-5 h-5"})}),e.jsx(i,{label:"Password",type:"password",placeholder:"Enter your password",icon:e.jsx(S,{className:"w-5 h-5"})}),e.jsx(i,{label:"Username",placeholder:"Enter your username",icon:e.jsx(P,{className:"w-5 h-5"})})]})},x={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(i,{label:"Email",type:"email",placeholder:"Enter your email",error:"Please enter a valid email address"}),e.jsx(i,{label:"Password",type:"password",placeholder:"Enter your password",error:"Password must be at least 8 characters"})]})},b={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(i,{label:"Username",placeholder:"Enter your username",helperText:"Username must be unique and contain only letters and numbers"}),e.jsx(i,{label:"Email",type:"email",placeholder:"Enter your email",helperText:"We'll never share your email with anyone else"})]})},h={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(p,{label:"Country",options:[{value:"us",label:"United States"},{value:"id",label:"Indonesia"},{value:"sg",label:"Singapore"}]}),e.jsx(p,{label:"Plan",options:[{value:"basic",label:"Basic Plan"},{value:"pro",label:"Pro Plan"},{value:"enterprise",label:"Enterprise Plan"}]})]})},y={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(w,{label:"Message",placeholder:"Enter your message",rows:4}),e.jsx(w,{label:"Description",placeholder:"Enter description",rows:6,helperText:"Maximum 500 characters"})]})},f={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(m,{label:"I agree to the terms and conditions",name:"terms"}),e.jsx(m,{label:"Subscribe to newsletter",name:"newsletter",defaultChecked:!0}),e.jsx(m,{label:"Enable notifications",name:"notifications"})]})},v={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(i,{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}),e.jsx(p,{label:"Disabled Select",options:[{value:"1",label:"Option 1"}],disabled:!0})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Email" type="email" placeholder="Enter your email" icon={<Mail className="w-5 h-5" />} />
      <Input label="Password" type="password" placeholder="Enter your password" icon={<Lock className="w-5 h-5" />} />
      <Input label="Username" placeholder="Enter your username" icon={<User className="w-5 h-5" />} />
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Email" type="email" placeholder="Enter your email" error="Please enter a valid email address" />
      <Input label="Password" type="password" placeholder="Enter your password" error="Password must be at least 8 characters" />
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Username" placeholder="Enter your username" helperText="Username must be unique and contain only letters and numbers" />
      <Input label="Email" type="email" placeholder="Enter your email" helperText="We'll never share your email with anyone else" />
    </div>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Select label="Country" options={[{
      value: 'us',
      label: 'United States'
    }, {
      value: 'id',
      label: 'Indonesia'
    }, {
      value: 'sg',
      label: 'Singapore'
    }]} />
      <Select label="Plan" options={[{
      value: 'basic',
      label: 'Basic Plan'
    }, {
      value: 'pro',
      label: 'Pro Plan'
    }, {
      value: 'enterprise',
      label: 'Enterprise Plan'
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <TextArea label="Message" placeholder="Enter your message" rows={4} />
      <TextArea label="Description" placeholder="Enter description" rows={6} helperText="Maximum 500 characters" />
    </div>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Checkbox label="I agree to the terms and conditions" name="terms" />
      <Checkbox label="Subscribe to newsletter" name="newsletter" defaultChecked />
      <Checkbox label="Enable notifications" name="notifications" />
    </div>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Disabled Input" placeholder="This input is disabled" disabled />
      <Select label="Disabled Select" options={[{
      value: '1',
      label: 'Option 1'
    }]} disabled />
    </div>
}`,...v.parameters?.docs?.source}}};const L=["TextInput","WithError","WithHelperText","SelectInput","TextAreaInput","CheckboxInput","Disabled"];export{f as CheckboxInput,v as Disabled,h as SelectInput,y as TextAreaInput,u as TextInput,x as WithError,b as WithHelperText,L as __namedExportsOrder,A as default};
