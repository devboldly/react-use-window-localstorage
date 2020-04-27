(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{IKtg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),l=a("TjRS"),r=a("5qHj");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useLocalStorageObject.mdx"}});var i={_frontmatter:b},c=l.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(c,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"useLocalStorageObject"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"This hook gets and sets an ",Object(n.b)("inlineCode",{parentName:"p"},"Object")," in ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage"),". This includes arrays."),Object(n.b)("p",null,"Uses ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"}),Object(n.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"}),Object(n.b)("inlineCode",{parentName:"a"},"JSON.parse()"))," for string encoding, so make sure your object is compatible with that interface. For objects that ",Object(n.b)("inlineCode",{parentName:"p"},"JSON.stringify()")," can't handle, provide your own encoding via ",Object(n.b)("a",o({parentName:"p"},{href:"/react-use-local-storage/useLocalStorageItem"}),"useLocalStorageItem"),"."),Object(n.b)("p",null,"Features synchronization across hooks sharing the same key name."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageObject } from 'react-use-local-storage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue] = useLocalStorageObject('myObj', { a: 'hello', b: 123 });\n")),Object(n.b)("p",null,"The hook takes a key name and an optional default value argument. The default value will be immediately written to localStorage and returned if no value is present already. Uses ",Object(n.b)("inlineCode",{parentName:"p"},"null")," when no default value is provided."),Object(n.b)("p",null,"Because localStorage accepts strings only, the value is encoded using\n",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"}),Object(n.b)("inlineCode",{parentName:"a"},"JSON.stringify()")),"\nand decoded using ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"}),Object(n.b)("inlineCode",{parentName:"a"},"JSON.parse()")),". Make sure your object is compatible with that interface."),Object(n.b)("h3",{id:"additional-features"},"Additional Features"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue, loading, reset, restore] = useLocalStorageObject('myObj', { a: 'hello', b: 123 });\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(n.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from localStorage."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(n.b)("inlineCode",{parentName:"li"},"null")," if none was given."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"restore()")," function retrieves the latest value from localStorage. Use this if the localStorage value changes outside of this hook and you need to restore it to the latest.")),Object(n.b)("h2",{id:"signature"},"Signature"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"useLocalStorageObject(keyName: string, defaultValue?: Object | null) => [Object | null, (value: Object | null) => void, boolean, () => void, () => void]")),Object(n.b)("h3",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"keyName"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," Key name to use in localStorage.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"defaultValue"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"Object")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"null")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Optional. Provide a default ",Object(n.b)("inlineCode",{parentName:"td"},"Object")," value when the key's value is not found in localStorage. Will be immediately written to localStorage if not present. Use ",Object(n.b)("inlineCode",{parentName:"td"},"null")," for no default.")))),Object(n.b)("h3",{id:"return"},"Return"),Object(n.b)("p",null,"The hook returns an array containing:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Index"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"value"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"Object")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"null")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The ",Object(n.b)("inlineCode",{parentName:"td"},"Object")," value from localStorage, when ",Object(n.b)("inlineCode",{parentName:"td"},"loading")," is ",Object(n.b)("inlineCode",{parentName:"td"},"false"),". Will be the default value (or ",Object(n.b)("inlineCode",{parentName:"td"},"null")," if none provided) while loading is ",Object(n.b)("inlineCode",{parentName:"td"},"true"),". If ",Object(n.b)("inlineCode",{parentName:"td"},"null")," when not loading, the key was not found in localStorage.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"setValue"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"(value: Object")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"null) => void")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the value in localStorage. Provide ",Object(n.b)("inlineCode",{parentName:"td"},"null")," to set it back to the default value. Providing ",Object(n.b)("inlineCode",{parentName:"td"},"null")," will delete the key from localStorage if the default value is ",Object(n.b)("inlineCode",{parentName:"td"},"null"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"loading"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"true")," while the value loads from localStorage, ",Object(n.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"reset"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"() => void")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Reset the value to the default.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"restore"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"() => void")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Retrieve the latest value from localStorage. Use this if the localStorage value changes outside of this hook and you need to restore it to the latest.")))),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(n.b)(r.a,{mdxType:"UseLocalStorageObjectExample"})),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { useLocalStorageObject } from 'react-use-local-storage';\n\nexport function UseLocalStorageObjectExample() {\n  const defaultValue = { first: 'Ron', last: 'Burgundy' };\n  const [enteredFirstName, setEnteredFirstName] = React.useState(defaultValue.first);\n  const [enteredLastName, setEnteredLastName] = React.useState(defaultValue.last);\n  const enteredObj = { first: enteredFirstName, last: enteredLastName };\n  const [value, setValue, loading, reset] = useLocalStorageObject('objValue', defaultValue);\n  const [value2, setValue2, loading2] = useLocalStorageObject('objValue', defaultValue);\n\n  return (\n    <div>\n      {!loading && (\n        <div>\n          <div>\n            Key \"objValue\": {'{'} first:\n            <input\n              type=\"text\"\n              value={enteredFirstName}\n              onChange={e => setEnteredFirstName(e.target.value)}\n              onKeyPress={e => e.key === 'Enter' && setValue(enteredObj)}\n            />\n            , last:\n            <input\n              type=\"text\"\n              value={enteredLastName}\n              onChange={e => setEnteredLastName(e.target.value)}\n              onKeyPress={e => e.key === 'Enter' && setValue(enteredObj)}\n            />\n            {' } '}\n            <button onClick={() => setValue(enteredObj)}>Set</button>\n          </div>\n          <div>\n            <strong>Stored value:</strong> {JSON.stringify(value)}\n          </div>\n        </div>\n      )}\n      <div>\n        <button onClick={() => reset()}>Reset \"objValue\" to default</button>\n      </div>\n      <hr />\n      {!loading2 && <div>Another \"objValue\" hook (different hook, will synchronize): {JSON.stringify(value2)}</div>}\n    </div>\n  );\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useLocalStorageObject.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-local-storage-object-mdx-40a3b28ef0b01880e090.js.map