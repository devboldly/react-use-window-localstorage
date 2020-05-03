(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var o=a("/FXl"),l=a("TjRS"),n=a("erf5"),r=a("Vkpr"),c=a.n(r);a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var i={_frontmatter:b},u=l.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(o.b)(u,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{display:"flex",alignItems:"center"}},Object(o.b)("div",null,Object(o.b)("h1",null,"React Use Window.localStorage")),Object(o.b)("div",null,Object(o.b)("a",{href:"https://github.com/devboldly/react-use-window-localstorage/",target:"_blank",rel:"noopener noreferrer"},Object(o.b)(n.SvgIcon,{src:c.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"React hooks for accessing the localStorage Web Storage API.")),Object(o.b)("p",null,"👁️ ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",s({parentName:"strong"},{href:"/react-use-window-localstorage/useLocalStorageString#example"}),"Live Demo"))),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"A set of hooks to easily store and retrieve data from ",Object(o.b)("a",s({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage"),"."),Object(o.b)("p",null,"Encoding is handled for common data types, including ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageBoolean"}),"booleans"),", ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageNumber"}),"numbers"),", ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageString"}),"strings"),", and ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageObject"}),"objects"),", or you can ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageItem"}),"encode data yourself")," if you'd like."),Object(o.b)("p",null,"Changes to localStorage are synchronized across all hooks automatically."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"What is localStorage?")," The ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," property allows you to store ",Object(o.b)("inlineCode",{parentName:"p"},"{key: value}")," string data that is saved across browser sessions. Data stored in ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," has no expiration time.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For sessionStorage, check out sister project ",Object(o.b)("a",s({parentName:"p"},{href:"https://devboldly.github.io/react-use-window-sessionstorage"}),"react-use-window-sessionstorage"),".")),Object(o.b)("h3",{id:"features-include"},"Features include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"💪 Easily add ",Object(o.b)("inlineCode",{parentName:"strong"},"localStorage")," support"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Store data across browser sessions with ease."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🔢 Support for primitives and objects"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Store and retrieve strings, booleans, numbers, and objects effortlessly."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"💁 Default values"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Optional support for defaults is baked right in."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🔄 Automatic synchronization"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Changes are synchronized across hooks automatically."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"👾 Customizable"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Want to store something unusual? Just provide your own encoder."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"⛔ Storage availability detection"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Detects if ",Object(o.b)("inlineCode",{parentName:"li"},"localStorage")," is available for use and lets you know otherwise."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"🧼 Clearing support"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Clear all localStorage values and reset hooks to defaults with one simple call.")))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"npm i react-use-window-localstorage\n")),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("h3",{id:"storing-strings"},"Storing Strings"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageString"}),"useLocalStorageString")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageString } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 'cyan';\nconst [value, setValue] = useLocalStorageString('favColor', defaultValue);\n")),Object(o.b)("h3",{id:"storing-objects"},"Storing Objects"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageObject"}),"useLocalStorageObject")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageObject } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = { a: 'hello', b: 123 };\nconst [value, setValue] = useLocalStorageObject('myObj', defaultValue);\n")),Object(o.b)("p",null,"Note that your objects must be compatible with ",Object(o.b)("a",s({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"}),"JSON.stringify()"),". Use ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageItem"}),"useLocalStorageItem")," otherwise."),Object(o.b)("h3",{id:"storing-booleans"},"Storing Booleans"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageBoolean"}),"useLocalStorageBoolean")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageBoolean } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = true;\nconst [value, setValue] = useLocalStorageBoolean('swordEquipped', defaultValue);\n")),Object(o.b)("h3",{id:"storing-numbers"},"Storing Numbers"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageNumber"}),"useLocalStorageNumber")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageNumber } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 3.14159;\nconst [value, setValue] = useLocalStorageNumber('importantNumber', defaultValue);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: All value defaults are optional. Hooks will return ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if none is provided.")),Object(o.b)("h3",{id:"storing-everything-else"},"Storing Everything Else"),Object(o.b)("p",null,"If you'd like to store something other than the data types above, define your own encoding using the ",Object(o.b)("a",s({parentName:"p"},{href:"/react-use-window-localstorage/useLocalStorageItem"}),"useLocalStorageItem")," hook."),Object(o.b)("p",null,"Here's a starting point:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useLocalStorageItem } from 'react-use-window-localstorage';\n")),Object(o.b)("p",null,"In your function component:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 'something custom';\nconst encode = value => JSON.stringify(value);\nconst decode = itemString => JSON.parse(itemString);\nconst [value, setValue] = useLocalStorageItem('name', defaultValue, encode, decode);\n")),Object(o.b)("p",null,"Provide ",Object(o.b)("inlineCode",{parentName:"p"},"null")," for no default value."),Object(o.b)("h3",{id:"additional-features"},"Additional Features"),Object(o.b)("p",null,"All hooks provide additional features in their return arrays, should you be interested:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue, loading, available, reset, restore] = useLocalStorageString('favColor', 'cyan');\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from localStorage."),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(o.b)("inlineCode",{parentName:"li"},"localStorage")," is supported and available for use. "),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(o.b)("inlineCode",{parentName:"li"},"null")," if none was given."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"restore()")," function retrieves the latest value from localStorage. Use this if the localStorage value changes outside of this hook and you need to restore it to the latest.")),Object(o.b)("h3",{id:"clearing-localstorage"},"Clearing ",Object(o.b)("inlineCode",{parentName:"h3"},"localStorage")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { useClear } from 'react-use-window-localstorage';\n")),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-jsx"}),"const clearLocalStorage = useClearLocalStorage();\n")),Object(o.b)("p",null,"Call ",Object(o.b)("inlineCode",{parentName:"p"},"clearLocalStorage()")," to clear all values in localStorage using ",Object(o.b)("a",s({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage.clear()"),"\nand reset all hooks to their defaults (or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if none provided)."),Object(o.b)("h2",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,"Type definitions have been included for ",Object(o.b)("a",s({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," support."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"Open source software is awesome and so are you. 😎"),Object(o.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),Object(o.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(o.b)("p",null,"See the ",Object(o.b)("a",s({parentName:"p"},{href:"https://tinyurl.com/ya3k258d"}),"library template")," for npm script documentation."),Object(o.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(o.b)("a",s({parentName:"h2"},{href:"https://github.com/devboldly/react-use-window-localstorage/stargazers"}),"Star It!")),Object(o.b)("p",null,"If you found this project helpful, let the community know by giving it a ",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/devboldly/react-use-window-localstorage/stargazers"}),"star"),": ",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/devboldly/react-use-window-localstorage/stargazers"}),"👉⭐")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-2182e5f2343f313c920f.js.map