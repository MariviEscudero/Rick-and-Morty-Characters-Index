(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(15),i=t.n(c),s=t(7),r=t(10),l=t(2);var o=function(){return fetch("https://rickandmortyapi.com/api/character ").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,specie:e.species,origin:e.origin.name,image:e.image,episodes:e.episode.length}}))}))},j=(t(22),t(23),t(24),t(0)),d=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.b,{to:"/characterDetail/".concat(e.characterData.id),className:"link",children:[Object(j.jsx)("img",{className:"main__section--list__item--image",src:e.characterData.image,alt:e.characterData.name}),Object(j.jsx)("h1",{className:"main__section--list__item--name",children:e.characterData.name}),Object(j.jsxs)("p",{className:"main__section--list__item--specie",children:["Especie: ",e.characterData.specie]})]})})},m=function(e){var a=e.data.sort((function(e,a){return e.name>a.name?1:-1})).map((function(e){return Object(j.jsx)("li",{className:"main__section--list__item",children:Object(j.jsx)(d,{characterData:e})},e.id)}));return a.length?Object(j.jsx)("ul",{className:"main__section--list",children:a}):Object(j.jsx)("p",{className:"main__section--charactererror",children:"Personaje no encontrado en esta dimensi\xf3n..."})},u=(t(31),function(e){return void 0===e.detailData?Object(j.jsx)("p",{children:"Un momento, que ya casi est\xe1...."}):Object(j.jsxs)("section",{className:"main__section--detail",children:[Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)("p",{className:"link",children:"Volver"})}),Object(j.jsx)("img",{className:"main__section--detail__image",src:e.detailData.image,alt:e.detailData.name}),Object(j.jsxs)("ul",{className:"main__section--detail__list",children:[Object(j.jsx)("li",{className:"main__section--detail__name",children:e.detailData.name}),Object(j.jsxs)("li",{className:"main__section--detail__data",children:["Especie: ","Alien"===e.detailData.specie?Object(j.jsx)("span",{children:" \ud83d\udc7e "}):"Humano o clon humano, qui\xe9n sabe ya..."]}),Object(j.jsxs)("li",{className:"main__section--detail__data",children:["Planeta de origen: ",e.detailData.origin]}),Object(j.jsxs)("li",{className:"main__section--detail__data",children:["Aparece en la serie en ",e.detailData.episodes," episodios"]}),Object(j.jsxs)("li",{className:"main__section--detail__data",children:["Estado en este universo: ","Dead"===e.detailData.status?Object(j.jsx)("span",{children:" \ud83d\udc80 "}):"Sigue vivo"]})]})]})}),h=(t(32),function(){return Object(j.jsx)("section",{className:"main__errorpage",children:Object(j.jsxs)("p",{children:["Wubba Lubba Dub Dub!!! la p\xe1gina que buscas no existe en este universo...Prueba con otra direcci\xf3n o ve a inicio",Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)("span",{className:"main__errorpage--span",children:" aqu\xed"})})]})})}),b=(t(33),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{children:"\xa9 Marivi Escudero"}),Object(j.jsx)("p",{children:"Adalab Front-endian"})]})})}),p=(t(34),t.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),_=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("img",{className:"header__image",src:p,alt:""})})})},O=(t(35),function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"main__form--label",htmlFor:e.name,children:"Nombre"}),Object(j.jsx)("input",{className:e.className,name:e.inputName,id:e.id,placeholder:e.placeHolder,value:e.value,onChange:function(a){a.preventDefault(),e.handleSearchInput(a.currentTarget.value)}})]})});O.defaultProps={inputType:"text",require:!1};var x=O;t(36);var f=function(e){return Object(j.jsxs)("div",{className:"display",children:[Object(j.jsx)("label",{className:"main__form--label",htmlFor:e.name,children:"Especie "}),Object(j.jsxs)("select",{className:e.className,name:e.name,id:e.id,value:e.value,onChange:function(a){e.handleSearchSpecie(a.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"Todos"}),Object(j.jsx)("option",{value:"Human",children:"Humano"}),Object(j.jsx)("option",{value:"Alien",children:"Alien"})]})]})},N=(t(37),function(e){return Object(j.jsxs)("form",{className:"main__form",action:"",children:[Object(j.jsx)(x,{className:"main__form--input",inputName:"name",id:"name",placeHolder:"buscar personaje",value:e.inputValue,handleSearchInput:e.handleSearchInput}),Object(j.jsx)(f,{className:"main__form--select",name:"specie",id:"specie",value:e.selectValue,handleSearchSpecie:e.handleSearchSpecie})]})}),g=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(""),s=Object(r.a)(i,2),d=s[0],p=s[1],O=Object(n.useState)("all"),x=Object(r.a)(O,2),f=x[0],g=x[1];Object(n.useEffect)((function(){o().then((function(e){c(e)}))}),[]);var v=Object(l.f)("/characterDetail/:id"),D=null!==v?v.params.id:"",S=t.find((function(e){return parseInt(e.id)===parseInt(D)})),k=t.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"all"===f||e.specie===f}));return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(_,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/characterDetail/:id",children:Object(j.jsx)(u,{detailData:S})}),Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("section",{children:Object(j.jsx)(N,{handleSearchInput:function(e){p(e)},handleSearchSpecie:function(e){g(e)},inputValue:d,selectValue:f})}),Object(j.jsx)("section",{className:"main__section",children:Object(j.jsx)(m,{data:k})})]})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(h,{})})]}),Object(j.jsx)(b,{})]})};i.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.50051dbf.chunk.js.map