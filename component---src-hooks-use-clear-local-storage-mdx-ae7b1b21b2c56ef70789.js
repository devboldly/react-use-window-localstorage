(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{uqFV:function(e,a,l){"use strict";l.r(a),l.d(a,"_frontmatter",(function(){return i})),l.d(a,"default",(function(){return u}));var n=l("Fcif"),t=l("+I+c"),o=(l("mXGw"),l("/FXl")),r=l("TjRS"),c=l("wcmV"),i=(l("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useClearLocalStorage.mdx"}});var s={_frontmatter:i},b=r.a;function u(e){var a=e.components,l=Object(t.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},s,l,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"useClearLocalStorage"),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This hook calls ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage.clear()")," to clear all items from ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage"),". "),Object(o.b)("p",null,"All hooks will be reset back to their default values, or to ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if none was provided."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useClearLocalStorage } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const clearLocalStorage = useClearLocalStorage();\n")),Object(o.b)("p",null,"Call ",Object(o.b)("inlineCode",{parentName:"p"},"clearLocalStorage()")," to clear localStorage."),Object(o.b)("h2",{id:"signature"},"Signature"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useClearLocalStorage() => (() => void)")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,"The hook takes no props."),Object(o.b)("h3",{id:"return"},"Return"),Object(o.b)("p",null,"The hook returns a function, ",Object(o.b)("inlineCode",{parentName:"p"},"clearLocalStorage"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"clearLocalStorage() => void\n")),Object(o.b)("p",null,"Calling this function clears localStorage and synchronizes all hooks."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In the following example, four numbers are defaulted to ",Object(o.b)("inlineCode",{parentName:"p"},"0")," and can be set to randomly generated values. The fifth value has no default. Calling ",Object(o.b)("inlineCode",{parentName:"p"},"clearLocalStorage()")," will clear\nlocalStorage using ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage.clear()")," and synchronize all hooks."),Object(o.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(o.b)(c.a,{mdxType:"UseClearExample"})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { useClearLocalStorage, useLocalStorageNumber } from 'react-use-window-localstorage';\n\nexport function UseClearExample() {\n  const [val1, setVal1] = useLocalStorageNumber('val1', 0);\n  const [val2, setVal2] = useLocalStorageNumber('val2', 0);\n  const [val3, setVal3] = useLocalStorageNumber('val3', 0);\n  const [val4, setVal4] = useLocalStorageNumber('val4', 0);\n  const [val5, setVal5] = useLocalStorageNumber('val5');\n  const clearLocalStorage = useClearLocalStorage();\n\n  return (\n    <div>\n      <div>\n        <div>\n          <strong>Stored values:</strong>\n          <ul>\n            <li>val1: {val1}</li>\n            <li>val2: {val2}</li>\n            <li>val3: {val3}</li>\n            <li>val4: {val4}</li>\n            <li>val5 (no default): {val5}</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <button\n          onClick={() => {\n            setVal1(Math.random());\n            setVal2(Math.random());\n            setVal3(Math.random());\n            setVal4(Math.random());\n            setVal5(Math.random());\n          }}\n        >\n          Generate Random Values\n        </button>\n      </div>\n      <div>\n        <button onClick={() => clearLocalStorage()}>Clear</button>\n      </div>\n    </div>\n  );\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useClearLocalStorage.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-clear-local-storage-mdx-ae7b1b21b2c56ef70789.js.map