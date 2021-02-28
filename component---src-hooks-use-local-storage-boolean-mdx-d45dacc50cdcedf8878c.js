(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{pUVx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("Fcif"),l=a("+I+c"),o=(a("mXGw"),a("/FXl")),r=a("TjRS"),b=a("+OnN"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useLocalStorageBoolean.mdx"}});var d={_frontmatter:i},c=r.a;function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"useLocalStorageBoolean"),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This hook gets and sets a ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," in ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage"),". "),Object(o.b)("p",null,"Features synchronization across hooks sharing the same key name."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useLocalStorageBoolean } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useLocalStorageBoolean('swordEquipped', true);\n")),Object(o.b)("p",null,"The hook takes a key name and an optional default value argument. The default value will be immediately written to localStorage and returned if no value is present already. Uses ",Object(o.b)("inlineCode",{parentName:"p"},"null")," when no default value is provided."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"value")," and ",Object(o.b)("inlineCode",{parentName:"p"},"setValue")," to read and write the value."),Object(o.b)("p",null,"Because localStorage accepts strings only, the value is encoded using\n",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},Object(o.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand decoded using ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},Object(o.b)("inlineCode",{parentName:"a"},"JSON.parse()")),"."),Object(o.b)("h3",{id:"additional-features"},"Additional Features"),Object(o.b)("p",null,"The hook provides additional features in its return array, should you be interested:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue, loading, available, reset] = useLocalStorageBoolean('swordEquipped', true);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from localStorage."),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(o.b)("inlineCode",{parentName:"li"},"localStorage")," is supported and available for use. "),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(o.b)("inlineCode",{parentName:"li"},"null")," if none was given.")),Object(o.b)("h2",{id:"signature"},"Signature"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useLocalStorageBoolean(keyName: string, defaultValue?: boolean | null) => [boolean | null, (value: boolean | null) => void, boolean, () => void, () => void]")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Prop"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"keyName"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Required.")," Key name to use in localStorage.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"null")),Object(o.b)("td",{parentName:"tr",align:null},"Optional. Provide a default ",Object(o.b)("inlineCode",{parentName:"td"},"boolean")," value when the key's value is not found in localStorage. Will be immediately written to localStorage if not present. Use ",Object(o.b)("inlineCode",{parentName:"td"},"null")," for no default.")))),Object(o.b)("h3",{id:"return"},"Return"),Object(o.b)("p",null,"The hook returns an array containing:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Index"),Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"0"),Object(o.b)("td",{parentName:"tr",align:null},"value"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"null")),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"boolean")," value from localStorage, when ",Object(o.b)("inlineCode",{parentName:"td"},"loading")," is ",Object(o.b)("inlineCode",{parentName:"td"},"false"),". Will be the default value (or ",Object(o.b)("inlineCode",{parentName:"td"},"null")," if none provided) while loading is ",Object(o.b)("inlineCode",{parentName:"td"},"true"),". If ",Object(o.b)("inlineCode",{parentName:"td"},"null")," when not loading, the key was not found in localStorage.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"1"),Object(o.b)("td",{parentName:"tr",align:null},"setValue"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"(value: boolean")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"null) => void")),Object(o.b)("td",{parentName:"tr",align:null},"Sets the value in localStorage. Provide ",Object(o.b)("inlineCode",{parentName:"td"},"null")," to set it back to the default value. Providing ",Object(o.b)("inlineCode",{parentName:"td"},"null")," will delete the key from localStorage if the default value is ",Object(o.b)("inlineCode",{parentName:"td"},"null"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"2"),Object(o.b)("td",{parentName:"tr",align:null},"loading"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"boolean")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"true")," while the value loads from localStorage, ",Object(o.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"3"),Object(o.b)("td",{parentName:"tr",align:null},"available"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"boolean")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"true")," if localStorage is supported and available for use, ",Object(o.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"4"),Object(o.b)("td",{parentName:"tr",align:null},"reset"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"() => void")),Object(o.b)("td",{parentName:"tr",align:null},"Reset the value to the default.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(o.b)(b.a,{mdxType:"UseLocalStorageBooleanExample"})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { useLocalStorageBoolean } from 'react-use-window-localstorage';\n\nexport function UseLocalStorageBooleanExample() {\n  const defaultValue = true;\n  const [value, setValue, loading, available, reset] = useLocalStorageBoolean('boolValue', defaultValue);\n  const [value2, setValue2, loading2] = useLocalStorageBoolean('boolValue', defaultValue);\n\n  return (\n    <div>\n      {!loading && (\n        <div>\n          <div>\n            Key \"boolValue\": <button onClick={() => setValue(!value)}>Toggle</button>\n          </div>\n          <div>\n            <strong>Stored value:</strong> {value + ''}\n          </div>\n        </div>\n      )}\n      <div>\n        <button onClick={() => reset()}>Reset \"boolValue\" to default</button>\n      </div>\n      <hr />\n      {!loading2 && <div>Another \"boolValue\" hook (different hook, will synchronize): {value2 + ''}</div>}\n    </div>\n  );\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useLocalStorageBoolean.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-local-storage-boolean-mdx-d45dacc50cdcedf8878c.js.map