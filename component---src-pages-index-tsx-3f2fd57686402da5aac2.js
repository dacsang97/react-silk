(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(238),i=a(226),l=(a(261),a(53),a(290)),c=a(10),s=a(51),u=a(214),d=a(219);function m(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(a[n[r]]=t[n[r]])}return a}var b=c.a.create({baseText:{marginBottom:10},text:{fontSize:16},h1:{fontSize:30},h2:{fontSize:28},h3:{fontSize:26},h4:{fontSize:24},h5:{fontSize:22},h6:{fontSize:20}}),g=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.text,e]},a))},h=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h1,e]},a))},y=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h2,e]},a))},f=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h3,e]},a))},p=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h4,e]},a))},v=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h5,e]},a))},E=function(t){var e=t.style,a=m(t,["style"]);return Object(n.createElement)(l.a.Text,Object.assign({style:[b.baseText,b.h6,e]},a))},k={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#343a40",transparent:"transparent",white:"#FFF",black:"#555"},x=c.a.create({primaryText:{color:k.primary},secondaryText:{color:k.secondary},successText:{color:k.success},dangerText:{color:k.danger},warningText:{color:k.warning},infoText:{color:k.info},lightText:{color:k.light},darkText:{color:k.dark}}),w=c.a.create({containerNatural:{alignSelf:"flex-start"},button:{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",paddingVertical:10,paddingHorizontal:15},disabledButton:{opacity:.6},primaryButton:{backgroundColor:k.primary,borderColor:k.primary},secondaryButton:{backgroundColor:k.secondary,borderColor:k.secondary},successButton:{backgroundColor:k.success,borderColor:k.success},dangerButton:{backgroundColor:k.danger,borderColor:k.danger},warningButton:{backgroundColor:k.warning,borderColor:k.warning},infoButton:{backgroundColor:k.info,borderColor:k.info},lightButton:{backgroundColor:k.light,borderColor:k.light},darkButton:{backgroundColor:k.dark,borderColor:k.dark},linkButton:{backgroundColor:k.transparent,borderColor:k.transparent},primaryGhostButton:{borderColor:k.primary},secondaryGhostButton:{borderColor:k.secondary},successGhostButton:{borderColor:k.success},dangerGhostButton:{borderColor:k.danger},warningGhostButton:{borderColor:k.warning},infoGhostButton:{borderColor:k.info},lightGhostButton:{borderColor:k.light},darkGhostButton:{borderColor:k.dark},linkGhostButton:{borderColor:k.transparent},lightText:{color:k.white},darkText:{color:k.black},buttonBorder:{borderWidth:1}}),T=["light","link"],I=function(t){var e=t.children,a=t.onPress,r=t.variant,o=t.disabled,i=t.block,l=t.ghost,c=[w.buttonBorder,w[r+(l?"Ghost":"")+"Button"]],m=[],b=function(t){return!~T.indexOf(t)}(r);l&&b?m.push(x[r+"Text"]):m.push(b?w.lightText:w.darkText),o&&c.push(w.disabledButton);var g=Object(n.createElement)(s.a,{style:[w.button].concat(c)},Object(n.createElement)(u.a,{style:m},e)),h=[];return i||h.push(w.containerNatural),a&&o?Object(n.createElement)(d.a,{style:h},g):Object(n.createElement)(s.a,{style:h},g)};I.defaultProps={variant:"primary",ghost:!1,disabled:!1,block:!1};e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(h,null,"This is heading 1"),r.a.createElement(y,null,"This is heading 2"),r.a.createElement(f,null,"This is heading 3"),r.a.createElement(p,null,"This is heading 4"),r.a.createElement(v,null,"This is heading 5"),r.a.createElement(E,null,"This is heading 6"),r.a.createElement(g,null,"This is normal text"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",null,r.a.createElement(I,null,"I am a button"),r.a.createElement(I,{variant:"secondary"},"I am a button"),r.a.createElement(I,{variant:"danger"},"I am a button"),r.a.createElement(I,{variant:"success"},"I am a button"),r.a.createElement(I,{variant:"warning"},"I am a button"),r.a.createElement(I,{variant:"info"},"I am a button"),r.a.createElement(I,{variant:"light"},"I am a button"),r.a.createElement(I,{variant:"dark"},"I am a button"),r.a.createElement(I,{variant:"link"},"I am a button")),r.a.createElement("div",null,r.a.createElement(I,{disabled:!0},"I am a button"),r.a.createElement(I,{variant:"secondary",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"danger",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"success",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"warning",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"info",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"light",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"dark",disabled:!0},"I am a button"),r.a.createElement(I,{variant:"link",disabled:!0},"I am a button")),r.a.createElement("div",null,r.a.createElement(I,{ghost:!0},"I am a button"),r.a.createElement(I,{variant:"secondary",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"danger",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"success",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"warning",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"info",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"light",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"dark",ghost:!0},"I am a button"),r.a.createElement(I,{variant:"link",ghost:!0},"I am a button")),r.a.createElement("div",{style:{width:200}},r.a.createElement(I,{block:!0},"I am a button"),r.a.createElement(I,{variant:"secondary",block:!0},"I am a button"),r.a.createElement(I,{variant:"danger",block:!0},"I am a button"),r.a.createElement(I,{variant:"success",block:!0},"I am a button"),r.a.createElement(I,{variant:"warning",block:!0},"I am a button"),r.a.createElement(I,{variant:"info",block:!0},"I am a button"),r.a.createElement(I,{variant:"light",block:!0},"I am a button"),r.a.createElement(I,{variant:"dark",block:!0},"I am a button"),r.a.createElement(I,{variant:"link",block:!0},"I am a button")))))}},204:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return g}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return b});var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(199),c=a.n(l);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return l.withPrefix}),a.d(e,"navigate",function(){return l.navigate}),a.d(e,"push",function(){return l.push}),a.d(e,"replace",function(){return l.replace}),a.d(e,"navigateTo",function(){return l.navigateTo});var s=a(212),u=a.n(s);a.d(e,"PageRenderer",function(){return u.a});var d=a(55);a.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),b=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},212:function(t,e,a){var n;t.exports=(n=a(224))&&n.default||n},223:function(t){t.exports={data:{site:{siteMetadata:{title:"React Silk"}}}}},224:function(t,e,a){"use strict";a.r(e);a(53);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(80),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},225:function(t,e,a){},226:function(t,e,a){"use strict";var n=a(227),r=a(0),o=a.n(r),i=a(239),l=a.n(i),c=a(204),s=function(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,s=void 0===i?[]:i,d=t.title;return o.a.createElement(c.StaticQuery,{query:u,render:function(t){var n=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:d},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s;var u="1025518380"},227:function(t){t.exports={data:{site:{siteMetadata:{title:"React Silk",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@youngtailors"}}}}},238:function(t,e,a){"use strict";var n=a(223),r=a(0),o=a.n(r),i=a(3),l=a.n(i),c=a(204),s=function(t){var e=t.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};s.defaultProps={siteTitle:""};var u=s,d=(a(225),function(t){var e=t.children;return o.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Young Tailors")))},data:n})});d.propTypes={children:l.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3f2fd57686402da5aac2.js.map