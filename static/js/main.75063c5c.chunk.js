(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(14),s=a.n(c),r=(a(21),a(4)),l=a(3),o=a(7),d=a(1);var b=function(e){return Object(d.jsx)("div",{className:"error",children:e.children})};var j=function(e){var t=e.label,a=e.name,i=Object(o.a)(e,["label","name"]);return Object(d.jsxs)("div",{className:"form__control",children:[Object(d.jsx)("label",{htmlFor:a,children:t}),Object(d.jsx)(r.b,Object(l.a)({id:a,name:a},i)),Object(d.jsx)(r.a,{name:a,component:b})]})};a(13);var p=function(e){var t=e.label,a=e.name,i=e.options,c=Object(o.a)(e,["label","name","options"]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:t}),Object(d.jsx)(r.b,Object(l.a)(Object(l.a)({name:a},c),{},{children:function(e){var t=e.field;return i.map((function(e){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("input",Object(l.a)(Object(l.a)({className:"radio__block",type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(d.jsx)("label",{htmlFor:e.value,children:e.key})]})},e.key)}))}})),Object(d.jsx)(r.a,{name:a,component:b})]})};var u=function(e){var t=e.label,a=e.name,i=e.checked,n=Object(o.a)(e,["label","name","checked"]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:a,children:t}),Object(d.jsx)(r.b,Object(l.a)({name:a,type:"checkbox",id:a,checked:i},n)),Object(d.jsx)(r.a,{name:a,component:b})]})};var O=function(e){var t=e.control,a=Object(o.a)(e,["control"]);switch(t){case"input":return Object(d.jsx)(j,Object(l.a)({},a));case"radio":return Object(d.jsx)(p,Object(l.a)({},a));case"checkbox":return Object(d.jsx)(u,Object(l.a)({},a));default:return null}};var m=function(){var e=[{key:"Obtain an IP address automatically (DHCP / BootP)",value:"option1"},{key:"Use the following address:",value:"option2"}],t=[{key:"Obtain DNS server address automatically",value:"option3"},{key:"Use the following DS server address:",value:"option4"}],a=[{key:"Obtain an IP address automatically (DHCP / BootP)",value:"option5"},{key:"Use the following address:",value:"option6"}],i=[{key:"Obtain DNS server address automatically",value:"option7"},{key:"Use the following DS server address:",value:"option8"}];return Object(d.jsx)("div",{children:Object(d.jsx)(r.d,{initialValues:{radioOption:"option1",ipAdress:"",mask:"",getWay:"",radioOptionOne:"option3",prefDNS:"",altDNS:"",chekwifi:!1,wirName:"",checkSeq:!1,seqKey:"",radio1:"option5",ip1:"",mask1:"",way1:"",radio2:"option7",pref1:"",alt1:""},validate:function(e){var t={};return e.ipAdress||"option2"!==e.radioOption||(t.ipAdress="Required"),e.mask||"option2"!==e.radioOption||(t.mask="Required"),e.prefDNS||"option4"!==e.radioOptionOne||(t.prefDNS="Required"),e.wirName||!0!==e.chekwifi||(t.wirName="Required"),e.seqKey||!0!==e.checkSeq||(t.seqKey="Required"),e.ip1||"option6"!==e.radio1||(t.ip1="Required"),e.mask1||"option6"!==e.radio1||(t.mask1="Required"),e.pref1||"option8"!==e.radio2||(t.pref1="Required"),t},onSubmit:function(e){return console.log("Form data",{IpAddrees:{ip:e.ipAdress,mask:e.mask,way:e.getWay},DNS:{pref:e.prefDNS,alt:e.altDNS},Wir:{name:e.wirName,seqKey:e.seqKey},wirForm:{ip:e.ip1,mask:e.mask1,way:e.way1},wirDNS:{preferred:e.pref1,alternative:e.alt1}})},children:function(n){return Object(d.jsxs)(r.c,{className:"wrapper",children:[Object(d.jsxs)("div",{className:"display",children:[Object(d.jsxs)("div",{className:"left__side",children:[Object(d.jsx)("h2",{children:"Ethernet Settings"}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"radio",name:"radioOption",options:e})}),Object(d.jsxs)("div",{className:"input__block",children:[Object(d.jsx)(O,{control:"input",type:"text",label:"IP Adress *",name:"ipAdress",disabled:"option1"===n.values.radioOption}),Object(d.jsx)(O,{control:"input",type:"text",label:"Subnet Mask *",name:"mask",disabled:"option1"===n.values.radioOption}),Object(d.jsx)(O,{control:"input",type:"text",label:"Default Gateway",name:"getWay",disabled:"option1"===n.values.radioOption})]}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"radio",name:"radioOptionOne",options:t})}),Object(d.jsxs)("div",{className:"input__block",children:[Object(d.jsx)(O,{control:"input",type:"text",label:"Preferred DNS server *",name:"prefDNS",disabled:"option3"===n.values.radioOptionOne}),Object(d.jsx)(O,{control:"input",type:"text",label:"Alternative DNS server",name:"altDNS",disabled:"option3"===n.values.radioOptionOne})]})]}),Object(d.jsxs)("div",{className:"right__side",children:[Object(d.jsx)("h2",{children:"Wirelles Settings"}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"checkbox",name:"chekwifi",label:"Enable wifi",checked:n.values.chekwifi})}),Object(d.jsx)("div",{className:"input__block",children:Object(d.jsx)(O,{control:"input",type:"text",label:"Wirelles Network Name* ",name:"wirName",disabled:!1===n.values.chekwifi})}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"checkbox",name:"checkSeq",label:"Enable Wirelles security",checked:n.values.checkSeq,disabled:!1===n.values.chekwifi})}),Object(d.jsx)("div",{className:"input__block",children:Object(d.jsx)(O,{control:"input",type:"text",label:"Security Key* ",name:"seqKey",disabled:!1===n.values.checkSeq})}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"radio",name:"radio1",options:a})}),Object(d.jsxs)("div",{className:"input__block",children:[Object(d.jsx)(O,{control:"input",type:"text",label:"IP Adress *",name:"ip1",disabled:"option5"===n.values.radio1}),Object(d.jsx)(O,{control:"input",type:"text",label:"Subnet Mask *",name:"mask1",disabled:"option5"===n.values.radio1}),Object(d.jsx)(O,{control:"input",type:"text",label:"Default Gateway",name:"way1",disabled:"option5"===n.values.radio1})]}),Object(d.jsx)("div",{className:"radio__block",children:Object(d.jsx)(O,{control:"radio",name:"radio2",options:i})}),Object(d.jsxs)("div",{className:"input__block",children:[Object(d.jsx)(O,{control:"input",type:"text",label:"Preferred DNS server *",name:"pref1",disabled:"option7"===n.values.radio2}),Object(d.jsx)(O,{control:"input",type:"text",label:"Alternative DNS server",name:"alt1",disabled:"option7"===n.values.radio2})]})]})]}),Object(d.jsxs)("div",{className:"btn__block",children:[Object(d.jsx)("button",{type:"submit",children:"SAVE"}),Object(d.jsx)("button",{type:"reset",children:"Cancel"})]})]})}})})},x=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(m,{})})};a(26);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.75063c5c.chunk.js.map