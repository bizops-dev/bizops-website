import{r as S}from"./index-3521aefc.js";import{u as b}from"./index-9eaa3f16.js";import"./_commonjsHelpers-725317a4.js";const z=({title:f,description:r,image:c="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",url:E,type:g="website",noindex:h=!1,canonical:O,structuredData:l})=>{const y=b(),d=E||`https://bizops.id${y.pathname}`,w="BizOps - The Adaptive Business Operating System",a=`${f} | BizOps`;return S.useEffect(()=>{document.title=a;const e=(s,u,t="name")=>{let n=document.querySelector(`meta[${t}="${s}"]`);n||(n=document.createElement("meta"),n.setAttribute(t,s),document.head.appendChild(n)),n.setAttribute("content",u)},B=(s,u)=>{let t=document.querySelector(`link[rel="${s}"]`);t||(t=document.createElement("link"),t.setAttribute("rel",s),document.head.appendChild(t)),t.setAttribute("href",u)};r&&e("description",r),h?e("robots","noindex, nofollow"):e("robots","index, follow"),B("canonical",O||d),e("og:site_name",w,"property"),e("og:title",a,"property"),r&&e("og:description",r,"property"),e("og:url",d,"property"),e("og:type",g,"property"),e("og:image",c,"property"),e("twitter:card","summary_large_image"),e("twitter:title",a),r&&e("twitter:description",r),e("twitter:image",c);let o=null;return l&&(o=document.createElement("script"),o.type="application/ld+json",o.textContent=JSON.stringify(l),document.head.appendChild(o)),()=>{o&&document.head.contains(o)&&document.head.removeChild(o)}},[f,r,c,d,g,h,O,l,a]),null},T={title:"Components/SEO",component:z,parameters:{layout:"fullscreen"},tags:["autodocs"]},i={args:{title:"BizOps | The Adaptive Business Operating System",description:"Transform your business operations with BizOps - an integrated ERP platform."}},p={args:{title:"BizOps Platform - Enterprise ERP Solution",description:"Complete ERP solution for modern businesses. Manage HR, Finance, Operations, and more.",keywords:"ERP, Business Operations, Enterprise Software, HR Management, Finance Software"}},m={args:{title:"BizOps - Product Tour",description:"Explore BizOps platform features and capabilities.",image:"https://bizops.id/og-image.jpg"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'BizOps | The Adaptive Business Operating System',
    description: 'Transform your business operations with BizOps - an integrated ERP platform.'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'BizOps Platform - Enterprise ERP Solution',
    description: 'Complete ERP solution for modern businesses. Manage HR, Finance, Operations, and more.',
    keywords: 'ERP, Business Operations, Enterprise Software, HR Management, Finance Software'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'BizOps - Product Tour',
    description: 'Explore BizOps platform features and capabilities.',
    image: 'https://bizops.id/og-image.jpg'
  }
}`,...m.parameters?.docs?.source}}};const x=["Default","WithKeywords","WithImage"];export{i as Default,m as WithImage,p as WithKeywords,x as __namedExportsOrder,T as default};
