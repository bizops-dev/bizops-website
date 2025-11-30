import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as b}from"./index-3521aefc.js";import{B as A}from"./Button-b38a60bb.js";import{c as i}from"./createLucideIcon-f25c75cd.js";import{C as N}from"./circle-alert-00d710d4.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=i("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),k={"no-data":m,"no-results":v,error:N,empty:T},c=b.memo(({type:l="no-data",icon:u,title:y,description:h,actionLabel:d,onAction:p,className:g=""})=>{const f=u||k[l],x=l==="error"?"text-red-500":"text-slate-400";return e.jsxs("div",{className:`flex flex-col items-center justify-center py-16 px-4 text-center ${g}`,children:[e.jsx("div",{className:`w-16 h-16 ${x} mb-4 flex items-center justify-center`,children:e.jsx(f,{className:"w-full h-full",strokeWidth:1.5})}),e.jsx("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mb-2",children:y}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed",children:h}),d&&p&&e.jsx(A,{onClick:p,variant:"primary",children:d})]})});c.displayName="EmptyState";c.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{type:{required:!1,tsType:{name:"union",raw:"'no-data' | 'no-results' | 'error' | 'empty'",elements:[{name:"literal",value:"'no-data'"},{name:"literal",value:"'no-results'"},{name:"literal",value:"'error'"},{name:"literal",value:"'empty'"}]},description:"",defaultValue:{value:"'no-data'",computed:!1}},icon:{required:!1,tsType:{name:"LucideIcon"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const C={title:"Components/EmptyState",component:c,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["no-data","no-results","error","empty"]}}},t={args:{type:"no-data",title:"No data available",description:"There is no data to display at this time. Please check back later or create new data."}},a={args:{type:"no-results",title:"No results found",description:"We couldn't find any results matching your search criteria. Try adjusting your filters.",actionLabel:"Clear Filters",onAction:()=>alert("Filters cleared")}},r={args:{type:"error",title:"Something went wrong",description:"We encountered an error while loading this data. Please try again or contact support if the problem persists.",actionLabel:"Try Again",onAction:()=>alert("Retrying...")}},s={args:{type:"empty",title:"Empty list",description:"This list is currently empty. Add your first item to get started.",actionLabel:"Add Item",onAction:()=>alert("Adding item...")}},o={args:{title:"Custom empty state",description:"This empty state uses a custom icon instead of the default.",icon:m,actionLabel:"Get Started",onAction:()=>alert("Getting started...")}},n={args:{type:"no-data",title:"No data available",description:"There is no data to display. No action button is shown."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'no-data',
    title: 'No data available',
    description: 'There is no data to display at this time. Please check back later or create new data.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'no-results',
    title: 'No results found',
    description: 'We couldn\\'t find any results matching your search criteria. Try adjusting your filters.',
    actionLabel: 'Clear Filters',
    onAction: () => alert('Filters cleared')
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Something went wrong',
    description: 'We encountered an error while loading this data. Please try again or contact support if the problem persists.',
    actionLabel: 'Try Again',
    onAction: () => alert('Retrying...')
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'empty',
    title: 'Empty list',
    description: 'This list is currently empty. Add your first item to get started.',
    actionLabel: 'Add Item',
    onAction: () => alert('Adding item...')
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom empty state',
    description: 'This empty state uses a custom icon instead of the default.',
    icon: Inbox,
    actionLabel: 'Get Started',
    onAction: () => alert('Getting started...')
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'no-data',
    title: 'No data available',
    description: 'There is no data to display. No action button is shown.'
  }
}`,...n.parameters?.docs?.source}}};const L=["NoData","NoResults","Error","Empty","CustomIcon","WithoutAction"];export{o as CustomIcon,s as Empty,r as Error,t as NoData,a as NoResults,n as WithoutAction,L as __namedExportsOrder,C as default};
