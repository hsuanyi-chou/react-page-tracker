(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{6572:function(e,t,r){Promise.resolve().then(r.bind(r,3945)),Promise.resolve().then(r.bind(r,7364)),Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23))},5639:function(e,t,r){"use strict";r.d(t,{u:function(){return n.usePageTrackerStore}});var n=r(7768);r(2050)},7768:function(e,t,r){"use strict";r.d(t,{Z:function(){return s},usePageTrackerStore:function(){return o}});var n=r(2265);let a={pageIndex:0,referrer:"",pageEvent:void 0,isFirstPage:!0,isLastPage:!0,pageHistory:[],pageHistoryLength:0},s={state:{...a},listeners:new Set,getState(){return this.state},getImmutablePageHistory(){return this.state.pageHistory.slice()},setState:e=>{s.state={...s.state,...e},requestAnimationFrame(()=>{s.listeners.forEach(e=>e())})},subscribe:e=>(s.listeners.add(e),()=>s.listeners.delete(e))},o=e=>{let t;return(0,n.useSyncExternalStore)(s.subscribe,()=>{let r=e(s.getState());return JSON.stringify(t)!==JSON.stringify(r)&&(t=r),t},()=>a)}},2050:function(e,t,r){"use strict";r.d(t,{PageTracker:function(){return c}});var n=r(2265),a=r(7768);let s=e=>{let{enableStrictModeHandler:t}=e,{initStrictModeDetector:r,strictModeDetector:s}=o({enableStrictModeHandler:t}),c=(0,n.useRef)(0),l=(0,n.useRef)(1);(0,n.useEffect)(()=>{u(),r();let e=window.onpopstate,t=history.pushState.bind(history);return window.onpopstate=e=>{var t,r,n,s,o;let i=e.state,u=null!==(s=null===(t=i.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===t?void 0:t.pageIndex)&&void 0!==s?s:0,d=c.current>u?"back":"forward";"forward"===d?c.current++:c.current=null!=u?u:0;let _=[...(null===(r=i.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===r?void 0:r.pageHistory)||[]];a.Z.setState({pageIndex:c.current,isFirstPage:0===c.current,isLastPage:_.length===l.current,referrer:null!==(o=null===(n=i.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===n?void 0:n.referrer)&&void 0!==o?o:"",pageHistory:_,pageHistoryLength:l.current,pageEvent:d})},history.pushState=(e,r,n)=>{var o,u;if(s())return t(e,r,n);let d=(null!==(u=null===(o=history.state.__REACT_PAGE_TRACKER_INTERNAL__)||void 0===o?void 0:o.pageIndex)&&void 0!==u?u:0)+1;c.current=d;let _=a.Z.getImmutablePageHistory();_.push(n),l.current=_.length;let g={pageIndex:d,referrer:window.location.href,pageHistory:_,pageHistoryLength:l.current},p={...e,__REACT_PAGE_TRACKER_INTERNAL__:{...g}};return a.Z.setState({...g,isFirstPage:!1,isLastPage:!0,pageEvent:"push"}),i("pushState: stateWithPageInfo.pageIndex -->".concat(p.__REACT_PAGE_TRACKER_INTERNAL__.pageIndex," ,pageIndex.current --> ").concat(c.current," referrer -->").concat(p.__REACT_PAGE_TRACKER_INTERNAL__.referrer)),t(p,r||"",n||"")},()=>{window.onpopstate=e,history.pushState=t}},[])},o=e=>{let{enableStrictModeHandler:t}=e,r=(0,n.useRef)(0),a=(0,n.useRef)(!1),s=()=>!!history.state.__PRIVATE_NEXTJS_INTERNALS_TREE,o=()=>(r.current++,!!a.current&&r.current%2==0);return{initStrictModeDetector:()=>{r.current++,2===r.current&&(a.current=!0)},strictModeDetector:()=>void 0===t?!!s()&&o():!!t&&o()}},i=e=>{},u=()=>{let e={__REACT_PAGE_TRACKER_INTERNAL__:{pageIndex:0,referrer:document.referrer,pageHistory:[location.href.replace(location.origin,"")],pageHistoryLength:1}};"object"==typeof history.state&&null!==history.state?history.replaceState({...history.state,...e},location.href):history.replaceState(e,""),a.Z.setState(e.__REACT_PAGE_TRACKER_INTERNAL__)},c=e=>(s(e),null)},3945:function(e,t,r){"use strict";var n=r(7437);r(2265);var a=r(5639),s=r(4508);t.default=e=>{let{className:t,...r}=e,o=Object.entries((0,a.u)(e=>e)).map(e=>{let[t,r]=e;return'"'.concat(t,'": ').concat("string"==typeof r?'"'.concat(r,'"'):JSON.stringify(r))});return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col overflow-auto rounded-md border bg-gray-200/40 px-4 py-3 font-bold",t),...r,children:["{",o.map((e,t)=>(0,n.jsxs)("span",{className:"pl-4",children:[e,","]},t)),"}"]})}},7364:function(e,t,r){"use strict";var n=r(7437);r(2265);var a=r(8667),s=r(4508);t.default=e=>{let{id:t,slot:r,layout:o,format:i="auto",channel:u="react-page-tracker",className:c}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5359135355025668",crossOrigin:"anonymous"}),(0,n.jsx)("ins",{className:(0,s.cn)("adsbygoogle",c),style:{display:"block"},"data-ad-client":"ca-pub-5359135355025668","data-ad-slot":r,"data-ad-layout":o,"data-ad-format":i,"data-full-width-responsive":"true","data-ad-channel":u}),(0,n.jsx)(a.default,{id:t,strategy:"afterInteractive",children:"\n            (adsbygoogle = window.adsbygoogle || []).push({});\n        "})]})}},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(1994),a=r(3335);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[972,667,330,971,117,744],function(){return e(e.s=6572)}),_N_E=e.O()}]);