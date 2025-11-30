import{j as e}from"./jsx-runtime-9bc08dc0.js";import{C as l}from"./Card-152ed556.js";import"./index-3521aefc.js";import"./_commonjsHelpers-725317a4.js";const h={title:"Components/Card",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{hoverEffect:{control:"boolean"},padding:{control:"select",options:["none","sm","md","lg"]}}},a={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-slate-600",children:"This is a default card with some content inside."})]})}},s={args:{hoverEffect:!0,children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Hoverable Card"}),e.jsx("p",{className:"text-slate-600",children:"Hover over this card to see the effect."})]})}},r={args:{padding:"sm",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-1",children:"Small Padding"}),e.jsx("p",{className:"text-slate-600",children:"Card with small padding."})]})}},t={args:{padding:"lg",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-3",children:"Large Padding"}),e.jsx("p",{className:"text-slate-600",children:"Card with large padding for more spacious content."})]})}},d={args:{padding:"none",children:e.jsx("img",{src:"https://via.placeholder.com/400x200",alt:"Placeholder",className:"w-full h-auto"})}},o={args:{className:"border-2 border-primary-500",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Custom Styled Card"}),e.jsx("p",{className:"text-slate-600",children:"This card has custom border styling."})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-slate-600">This is a default card with some content inside.</p>
      </div>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hoverEffect: true,
    children: <div>
        <h3 className="text-xl font-bold mb-2">Hoverable Card</h3>
        <p className="text-slate-600">Hover over this card to see the effect.</p>
      </div>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm',
    children: <div>
        <h3 className="text-lg font-bold mb-1">Small Padding</h3>
        <p className="text-slate-600">Card with small padding.</p>
      </div>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'lg',
    children: <div>
        <h3 className="text-xl font-bold mb-3">Large Padding</h3>
        <p className="text-slate-600">Card with large padding for more spacious content.</p>
      </div>
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="w-full h-auto" />
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'border-2 border-primary-500',
    children: <div>
        <h3 className="text-xl font-bold mb-2">Custom Styled Card</h3>
        <p className="text-slate-600">This card has custom border styling.</p>
      </div>
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","WithHover","SmallPadding","LargePadding","NoPadding","WithCustomClass"];export{a as Default,t as LargePadding,d as NoPadding,r as SmallPadding,o as WithCustomClass,s as WithHover,p as __namedExportsOrder,h as default};
