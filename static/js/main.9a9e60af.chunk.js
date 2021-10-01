(this["webpackJsonpcountry-api"]=this["webpackJsonpcountry-api"]||[]).push([[0],{20:function(e,c,t){},21:function(e,c,t){},22:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(15),o=t.n(s),i=(t(20),t(4)),l=(t.p,t(21),t(22),t(3)),r=t.n(l),d=t(0);var j=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),l=o[0],j=o[1],u=Object(n.useState)([]),h=Object(i.a)(u,2),b=h[0],m=h[1];return Object(n.useEffect)((function(){r.a.get("https://restcountries.com/v3.1/all").then((function(e){console.log(e.data),a(e.data)}))}),[]),Object(n.useEffect)((function(){r.a.get("https://restcountries.com/v3.1/region/".concat(l)).then((function(e){console.log("running second use effect"),a(e.data)}))}),[l]),Object(n.useEffect)((function(){!1===b?(console.log("false in useeffect"),r.a.get("https://restcountries.com/v3.1/all").then((function(e){console.log(e.data),a(e.data)}))):r.a.get("https://restcountries.com/v3.1/name/".concat(b)).then((function(e){console.log("running third use effect"),a(e.data)}))}),[b]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("div",{className:"logo",children:"Where in the world?"}),Object(d.jsx)("div",{className:"mode",children:"Dark Mode"})]})}),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"search-filter-container",children:[Object(d.jsx)("div",{className:"searchBox",children:Object(d.jsx)("input",{className:"searchCountry",type:"text",placeholder:"Search for a country..",onChange:function(e){console.log(e.target.value);var c=[];t.map((function(t){e.target.value===t.name.common&&(c.push(t.name.common),console.log("present in countries"))})),c.length>0?(console.log(c),m(c)):(console.log("nothing in array"),m(!1))}})}),Object(d.jsx)("div",{className:"filterBox",children:Object(d.jsxs)("select",{name:"",id:"",onChange:function(e){console.log(e.target.value),j(e.target.value)},children:[Object(d.jsx)("option",{selected:"selected",disabled:"disabled",children:"Filter by Region"}),Object(d.jsx)("option",{value:"Africa",children:"Africa"}),Object(d.jsx)("option",{value:"Americas",children:"America"}),Object(d.jsx)("option",{value:"Asia",children:"Asia"}),Object(d.jsx)("option",{value:"Europe",children:"Europe"}),Object(d.jsx)("option",{value:"Oceania",children:"Oceania"})]})})]}),Object(d.jsx)("div",{className:"countries-container",children:t.map((function(e){return Object(d.jsxs)("div",{className:"countryBox",children:[Object(d.jsx)("img",{className:"countryLogo",src:e.flags.svg,alt:""}),Object(d.jsxs)("div",{className:"country-details",children:[Object(d.jsx)("h3",{className:"country-name",children:e.name.common}),Object(d.jsxs)("div",{className:"population",children:[Object(d.jsx)("span",{className:"sub-heading",children:"Population"})," :"," ",e.population]}),Object(d.jsxs)("div",{className:"region",children:[Object(d.jsx)("span",{className:"sub-heading",children:"Region"})," : ",e.region]}),Object(d.jsxs)("div",{className:"capital",children:[Object(d.jsx)("span",{className:"sub-heading",children:"Capital"})," :"," ",e.capital]})]})]})}))})]})})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,o=c.getTTFB;t(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.9a9e60af.chunk.js.map