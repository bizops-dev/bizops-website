import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as u}from"./index-3521aefc.js";import{C as g}from"./Card-152ed556.js";import{c}from"./createLucideIcon-f25c75cd.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),d=({faqs:l})=>{const[n,p]=u.useState(0),m=s=>{p(n===s?null:s)};return e.jsx("div",{className:"space-y-3",children:l.map((s,a)=>e.jsxs(g,{padding:"none",className:"overflow-hidden",children:[e.jsxs("button",{onClick:()=>m(a),className:"w-full flex items-start justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group",children:[e.jsx("h3",{className:"font-bold text-slate-900 dark:text-white pr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors",children:s.q}),e.jsx("div",{className:"flex-shrink-0",children:n===a?e.jsx(f,{className:"w-5 h-5 text-primary-600 dark:text-primary-400"}):e.jsx(h,{className:"w-5 h-5 text-slate-400"})})]}),n===a&&e.jsx("div",{className:"px-6 pb-6 pt-0",children:e.jsx("div",{className:"text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4",children:s.a})})]},a))})};d.__docgenInfo={description:"",methods:[],displayName:"FAQAccordion",props:{faqs:{required:!0,tsType:{name:"Array",elements:[{name:"FAQ"}],raw:"FAQ[]"},description:""}}};const q={title:"Components/FAQAccordion",component:d,parameters:{layout:"padded"},tags:["autodocs"]},i=[{q:"What is BizOps?",a:"BizOps is an adaptive business operating system that helps companies manage their operations efficiently."},{q:"How do I get started?",a:"You can start by booking a demo or signing up for a free trial. Our team will guide you through the setup process."},{q:"What features are included?",a:"BizOps includes modules for HR, Finance, Operations, Sales, Supply Chain, and Governance. All modules are seamlessly integrated."},{q:"Is there a mobile app?",a:"Yes, BizOps has native mobile apps for both iOS and Android, perfect for field work and on-the-go access."},{q:"Can I customize the system?",a:"Yes, BizOps is built on a low-code platform that allows extensive customization without writing code."}],r={args:{faqs:i}},t={args:{faqs:[i[0]]}},o={args:{faqs:[...i,{q:"What is the pricing model?",a:"BizOps uses a flat pricing model based on resources, making costs predictable and scalable."},{q:"Do you offer training?",a:"Yes, we offer comprehensive training programs and have an academy for ongoing learning."},{q:"Is my data secure?",a:"Absolutely. BizOps is ISO 27001 certified and uses enterprise-grade security measures."}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    faqs: sampleFAQs
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    faqs: [sampleFAQs[0]]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    faqs: [...sampleFAQs, {
      q: 'What is the pricing model?',
      a: 'BizOps uses a flat pricing model based on resources, making costs predictable and scalable.'
    }, {
      q: 'Do you offer training?',
      a: 'Yes, we offer comprehensive training programs and have an academy for ongoing learning.'
    }, {
      q: 'Is my data secure?',
      a: 'Absolutely. BizOps is ISO 27001 certified and uses enterprise-grade security measures.'
    }]
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","SingleFAQ","ManyFAQs"];export{r as Default,o as ManyFAQs,t as SingleFAQ,w as __namedExportsOrder,q as default};
