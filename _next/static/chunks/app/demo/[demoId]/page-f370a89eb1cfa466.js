(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{5402:function(e,t,r){Promise.resolve().then(r.bind(r,1437)),Promise.resolve().then(r.bind(r,3945)),Promise.resolve().then(r.bind(r,7364)),Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23))},5639:function(e,t,r){"use strict";r.d(t,{u:function(){return n.usePageTrackerStore}});var n=r(7768);r(2050)},7768:function(e,t,r){"use strict";r.d(t,{Z:function(){return a},usePageTrackerStore:function(){return s}});var n=r(2265);let i={pageIndex:0,referrer:"",pageEvent:void 0,isFirstPage:!0,isLastPage:!0,pageHistory:[],pageHistoryLength:0},a={state:{...i},listeners:new Set,getState(){return this.state},getImmutablePageHistory(){return this.state.pageHistory.slice()},setState:e=>{a.state={...a.state,...e},requestAnimationFrame(()=>{a.listeners.forEach(e=>e())})},subscribe:e=>(a.listeners.add(e),()=>a.listeners.delete(e))},s=e=>{let t;return(0,n.useSyncExternalStore)(a.subscribe,()=>{let r=e(a.getState());return JSON.stringify(t)!==JSON.stringify(r)&&(t=r),t},()=>i)}},2050:function(e,t,r){"use strict";r.d(t,{PageTracker:function(){return l}});var n=r(2265),i=r(7768);let a=()=>{let e=(0,n.useRef)(0),t=(0,n.useRef)(1);(0,n.useEffect)(()=>{o();let r=window.onpopstate,n=history.pushState.bind(history);return window.onpopstate=r=>{var n,a,s,o,l;let u=r.state,c=null!==(o=null===(n=u.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===n?void 0:n.pageIndex)&&void 0!==o?o:0,d=e.current>c?"back":"forward";"forward"===d?e.current++:e.current=null!=c?c:0;let f=[...(null===(a=u.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===a?void 0:a.pageHistory)||[]];i.Z.setState({pageIndex:e.current,isFirstPage:0===e.current,isLastPage:f.length===t.current,referrer:null!==(l=null===(s=u.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===s?void 0:s.referrer)&&void 0!==l?l:"",pageHistory:f,pageHistoryLength:t.current,pageEvent:d})},history.pushState=(r,a,o)=>{var l,u;let c=(null!==(u=null===(l=history.state.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===l?void 0:l.pageIndex)&&void 0!==u?u:0)+1;e.current=c;let d=i.Z.getImmutablePageHistory();d.push(o),t.current=d.length;let f={pageIndex:c,referrer:window.location.href,pageHistory:d,pageHistoryLength:t.current},g={...r,__REACT_PAGE_TRACKER_INTERNAL__:{...f}};return i.Z.setState({...f,isFirstPage:!1,isLastPage:!0,pageEvent:"push"}),s("pushState: stateWithPageInfo.pageIndex -->".concat(g.__REACT_PAGE_TRACKER_INTERNAL__.pageIndex," ,pageIndex.current --> ").concat(e.current," referrer -->").concat(g.__REACT_PAGE_TRACKER_INTERNAL__.referrer)),n(g,a||"",o||"")},()=>{window.onpopstate=r,history.pushState=n}},[])},s=e=>{},o=()=>{let e={__REACT_PAGE_TRACKER_INTERNAL__:{pageIndex:0,referrer:document.referrer,pageHistory:[window.location.pathname],pageHistoryLength:1}};"object"==typeof history.state&&null!==history.state?history.replaceState({...history.state,...e},location.href):history.replaceState(e,""),i.Z.setState(e.__REACT_PAGE_TRACKER_INTERNAL__)},l=()=>(a(),null)},1437:function(e,t,r){"use strict";var n=r(7437);r(2265);var i=r(5639),a=r(2869),s=r(4508);t.default=e=>{let{className:t,children:r,...o}=e,{isFirstPage:l,isLastPage:u,pageHistory:c,pageHistoryLength:d}=(0,i.u)(e=>e);return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...o,children:[(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(a.z,{variant:"outline",disabled:c.length<3,onClick:()=>history.go(-2),children:"⏪️ (history.go(-2)"}),(0,n.jsx)(a.z,{variant:"outline",disabled:l,onClick:()=>history.back(),children:"◀️ (history.back)"}),(0,n.jsx)(a.z,{variant:"outline",disabled:u,onClick:()=>history.forward(),children:"️▶️ (history.forward)"}),(0,n.jsx)(a.z,{variant:"outline",disabled:d-c.length<2||u,onClick:()=>history.go(2),children:"⏩️ (history.go(2)"})]}),r]})}},3945:function(e,t,r){"use strict";var n=r(7437);r(2265);var i=r(5639),a=r(4508);t.default=e=>{let{className:t,...r}=e,s=Object.entries((0,i.u)(e=>e)).map(e=>{let[t,r]=e;return'"'.concat(t,'": ').concat("string"==typeof r?'"'.concat(r,'"'):JSON.stringify(r))});return(0,n.jsxs)("div",{className:(0,a.cn)("flex flex-col overflow-auto rounded-md border bg-gray-200/40 px-4 py-3 font-bold",t),...r,children:["{",s.map((e,t)=>(0,n.jsxs)("span",{className:"pl-4",children:[e,","]},t)),"}"]})}},7364:function(e,t,r){"use strict";var n=r(7437);r(2265);var i=r(8667),a=r(4508);t.default=e=>{let{id:t,slot:r,layout:s,format:o="auto",channel:l="react-page-tracker",className:u}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5359135355025668",crossOrigin:"anonymous"}),(0,n.jsx)("ins",{className:(0,a.cn)("adsbygoogle",u),style:{display:"block"},"data-ad-client":"ca-pub-5359135355025668","data-ad-slot":r,"data-ad-layout":s,"data-ad-format":o,"data-full-width-responsive":"true","data-ad-channel":l}),(0,n.jsx)(i.default,{id:t,strategy:"afterInteractive",children:"\n            (adsbygoogle = window.adsbygoogle || []).push({});\n        "})]})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(7437),i=r(2265),a=r(7053),s=r(7712),o=r(4508);let l=(0,s.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:r,variant:i,size:s,asChild:u=!1,...c}=e,d=u?a.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(l({variant:i,size:s,className:r})),ref:t,...c})});u.displayName="Button"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(1994),i=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},8575:function(e,t,r){"use strict";r.d(t,{F:function(){return i},e:function(){return a}});var n=r(2265);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return n.useCallback(i(...e),e)}},7053:function(e,t,r){"use strict";r.d(t,{A4:function(){return l},g7:function(){return s}});var n=r(2265),i=r(8575),a=r(7437),s=n.forwardRef((e,t)=>{let{children:r,...i}=e,s=n.Children.toArray(r),l=s.find(u);if(l){let e=l.props.children,r=s.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(o,{...i,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,a.jsx)(o,{...i,ref:t,children:r})});s.displayName="Slot";var o=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e,s;let o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let i=e[n],a=t[n];/^on[A-Z]/.test(n)?i&&a?r[n]=(...e)=>{a(...e),i(...e)}:i&&(r[n]=i):"style"===n?r[n]={...i,...a}:"className"===n&&(r[n]=[i,a].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props),ref:t?(0,i.F)(t,o):o})}return n.Children.count(r)>1?n.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function u(e){return n.isValidElement(e)&&e.type===l}},7712:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n},a=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:o}=t,l=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],i=null==o?void 0:o[e];if(null===t)return null;let a=n(t)||n(i);return s[e][a]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,l,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...u}[t]):({...o,...u})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[972,667,330,971,117,744],function(){return e(e.s=5402)}),_N_E=e.O()}]);