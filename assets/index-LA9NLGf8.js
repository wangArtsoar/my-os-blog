(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();function up(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ho={exports:{}},Tu={};var Sh;function gb(){if(Sh)return Tu;Sh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(o,d,p){var v=null;if(p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),"key"in d){p={};for(var D in d)D!=="key"&&(p[D]=d[D])}else p=d;return d=p.ref,{$$typeof:n,type:o,key:v,ref:d!==void 0?d:null,props:p}}return Tu.Fragment=c,Tu.jsx=f,Tu.jsxs=f,Tu}var xh;function Ab(){return xh||(xh=1,Ho.exports=gb()),Ho.exports}var ft=Ab(),$o={exports:{}},pt={};var Eh;function Sb(){if(Eh)return pt;Eh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.iterator;function K(m){return m===null||typeof m!="object"?null:(m=L&&m[L]||m["@@iterator"],typeof m=="function"?m:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,I={};function k(m,M,H){this.props=m,this.context=M,this.refs=I,this.updater=H||Z}k.prototype.isReactComponent={},k.prototype.setState=function(m,M){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,M,"setState")},k.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function V(){}V.prototype=k.prototype;function N(m,M,H){this.props=m,this.context=M,this.refs=I,this.updater=H||Z}var J=N.prototype=new V;J.constructor=N,F(J,k.prototype),J.isPureReactComponent=!0;var W=Array.isArray;function Y(){}var R={H:null,A:null,T:null,S:null},rt=Object.prototype.hasOwnProperty;function yt(m,M,H){var Q=H.ref;return{$$typeof:n,type:m,key:M,ref:Q!==void 0?Q:null,props:H}}function dt(m,M){return yt(m.type,M,m.props)}function At(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function st(m){var M={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(H){return M[H]})}var Lt=/\/+/g;function Mt(m,M){return typeof m=="object"&&m!==null&&m.key!=null?st(""+m.key):M.toString(36)}function Ot(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Y,Y):(m.status="pending",m.then(function(M){m.status==="pending"&&(m.status="fulfilled",m.value=M)},function(M){m.status==="pending"&&(m.status="rejected",m.reason=M)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function C(m,M,H,Q,P){var tt=typeof m;(tt==="undefined"||tt==="boolean")&&(m=null);var at=!1;if(m===null)at=!0;else switch(tt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(m.$$typeof){case n:case c:at=!0;break;case U:return at=m._init,C(at(m._payload),M,H,Q,P)}}if(at)return P=P(m),at=Q===""?"."+Mt(m,0):Q,W(P)?(H="",at!=null&&(H=at.replace(Lt,"$&/")+"/"),C(P,M,H,"",function(ot){return ot})):P!=null&&(At(P)&&(P=dt(P,H+(P.key==null||m&&m.key===P.key?"":(""+P.key).replace(Lt,"$&/")+"/")+at)),M.push(P)),1;at=0;var Ct=Q===""?".":Q+":";if(W(m))for(var j=0;j<m.length;j++)Q=m[j],tt=Ct+Mt(Q,j),at+=C(Q,M,H,tt,P);else if(j=K(m),typeof j=="function")for(m=j.call(m),j=0;!(Q=m.next()).done;)Q=Q.value,tt=Ct+Mt(Q,j++),at+=C(Q,M,H,tt,P);else if(tt==="object"){if(typeof m.then=="function")return C(Ot(m),M,H,Q,P);throw M=String(m),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return at}function G(m,M,H){if(m==null)return m;var Q=[],P=0;return C(m,Q,"","",function(tt){return M.call(H,tt,P++)}),Q}function X(m){if(m._status===-1){var M=m._result;M=M(),M.then(function(H){(m._status===0||m._status===-1)&&(m._status=1,m._result=H)},function(H){(m._status===0||m._status===-1)&&(m._status=2,m._result=H)}),m._status===-1&&(m._status=0,m._result=M)}if(m._status===1)return m._result.default;throw m._result}var ut=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ht={map:G,forEach:function(m,M,H){G(m,function(){M.apply(this,arguments)},H)},count:function(m){var M=0;return G(m,function(){M++}),M},toArray:function(m){return G(m,function(M){return M})||[]},only:function(m){if(!At(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return pt.Activity=A,pt.Children=ht,pt.Component=k,pt.Fragment=f,pt.Profiler=d,pt.PureComponent=N,pt.StrictMode=o,pt.Suspense=S,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,pt.__COMPILER_RUNTIME={__proto__:null,c:function(m){return R.H.useMemoCache(m)}},pt.cache=function(m){return function(){return m.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(m,M,H){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var Q=F({},m.props),P=m.key;if(M!=null)for(tt in M.key!==void 0&&(P=""+M.key),M)!rt.call(M,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&M.ref===void 0||(Q[tt]=M[tt]);var tt=arguments.length-2;if(tt===1)Q.children=H;else if(1<tt){for(var at=Array(tt),Ct=0;Ct<tt;Ct++)at[Ct]=arguments[Ct+2];Q.children=at}return yt(m.type,P,Q)},pt.createContext=function(m){return m={$$typeof:v,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:p,_context:m},m},pt.createElement=function(m,M,H){var Q,P={},tt=null;if(M!=null)for(Q in M.key!==void 0&&(tt=""+M.key),M)rt.call(M,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=M[Q]);var at=arguments.length-2;if(at===1)P.children=H;else if(1<at){for(var Ct=Array(at),j=0;j<at;j++)Ct[j]=arguments[j+2];P.children=Ct}if(m&&m.defaultProps)for(Q in at=m.defaultProps,at)P[Q]===void 0&&(P[Q]=at[Q]);return yt(m,tt,P)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(m){return{$$typeof:D,render:m}},pt.isValidElement=At,pt.lazy=function(m){return{$$typeof:U,_payload:{_status:-1,_result:m},_init:X}},pt.memo=function(m,M){return{$$typeof:b,type:m,compare:M===void 0?null:M}},pt.startTransition=function(m){var M=R.T,H={};R.T=H;try{var Q=m(),P=R.S;P!==null&&P(H,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(Y,ut)}catch(tt){ut(tt)}finally{M!==null&&H.types!==null&&(M.types=H.types),R.T=M}},pt.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},pt.use=function(m){return R.H.use(m)},pt.useActionState=function(m,M,H){return R.H.useActionState(m,M,H)},pt.useCallback=function(m,M){return R.H.useCallback(m,M)},pt.useContext=function(m){return R.H.useContext(m)},pt.useDebugValue=function(){},pt.useDeferredValue=function(m,M){return R.H.useDeferredValue(m,M)},pt.useEffect=function(m,M){return R.H.useEffect(m,M)},pt.useEffectEvent=function(m){return R.H.useEffectEvent(m)},pt.useId=function(){return R.H.useId()},pt.useImperativeHandle=function(m,M,H){return R.H.useImperativeHandle(m,M,H)},pt.useInsertionEffect=function(m,M){return R.H.useInsertionEffect(m,M)},pt.useLayoutEffect=function(m,M){return R.H.useLayoutEffect(m,M)},pt.useMemo=function(m,M){return R.H.useMemo(m,M)},pt.useOptimistic=function(m,M){return R.H.useOptimistic(m,M)},pt.useReducer=function(m,M,H){return R.H.useReducer(m,M,H)},pt.useRef=function(m){return R.H.useRef(m)},pt.useState=function(m){return R.H.useState(m)},pt.useSyncExternalStore=function(m,M,H){return R.H.useSyncExternalStore(m,M,H)},pt.useTransition=function(){return R.H.useTransition()},pt.version="19.2.3",pt}var Th;function of(){return Th||(Th=1,$o.exports=Sb()),$o.exports}var w=of();const z=up(w);var jo={exports:{}},zu={},Lo={exports:{}},Qo={};var zh;function xb(){return zh||(zh=1,(function(n){function c(C,G){var X=C.length;C.push(G);t:for(;0<X;){var ut=X-1>>>1,ht=C[ut];if(0<d(ht,G))C[ut]=G,C[X]=ht,X=ut;else break t}}function f(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var G=C[0],X=C.pop();if(X!==G){C[0]=X;t:for(var ut=0,ht=C.length,m=ht>>>1;ut<m;){var M=2*(ut+1)-1,H=C[M],Q=M+1,P=C[Q];if(0>d(H,X))Q<ht&&0>d(P,H)?(C[ut]=P,C[Q]=X,ut=Q):(C[ut]=H,C[M]=X,ut=M);else if(Q<ht&&0>d(P,X))C[ut]=P,C[Q]=X,ut=Q;else break t}}return G}function d(C,G){var X=C.sortIndex-G.sortIndex;return X!==0?X:C.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var v=Date,D=v.now();n.unstable_now=function(){return v.now()-D}}var S=[],b=[],U=1,A=null,L=3,K=!1,Z=!1,F=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function J(C){for(var G=f(b);G!==null;){if(G.callback===null)o(b);else if(G.startTime<=C)o(b),G.sortIndex=G.expirationTime,c(S,G);else break;G=f(b)}}function W(C){if(F=!1,J(C),!Z)if(f(S)!==null)Z=!0,Y||(Y=!0,st());else{var G=f(b);G!==null&&Ot(W,G.startTime-C)}}var Y=!1,R=-1,rt=5,yt=-1;function dt(){return I?!0:!(n.unstable_now()-yt<rt)}function At(){if(I=!1,Y){var C=n.unstable_now();yt=C;var G=!0;try{t:{Z=!1,F&&(F=!1,V(R),R=-1),K=!0;var X=L;try{e:{for(J(C),A=f(S);A!==null&&!(A.expirationTime>C&&dt());){var ut=A.callback;if(typeof ut=="function"){A.callback=null,L=A.priorityLevel;var ht=ut(A.expirationTime<=C);if(C=n.unstable_now(),typeof ht=="function"){A.callback=ht,J(C),G=!0;break e}A===f(S)&&o(S),J(C)}else o(S);A=f(S)}if(A!==null)G=!0;else{var m=f(b);m!==null&&Ot(W,m.startTime-C),G=!1}}break t}finally{A=null,L=X,K=!1}G=void 0}}finally{G?st():Y=!1}}}var st;if(typeof N=="function")st=function(){N(At)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Mt=Lt.port2;Lt.port1.onmessage=At,st=function(){Mt.postMessage(null)}}else st=function(){k(At,0)};function Ot(C,G){R=k(function(){C(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return L},n.unstable_next=function(C){switch(L){case 1:case 2:case 3:var G=3;break;default:G=L}var X=L;L=G;try{return C()}finally{L=X}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(C,G){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var X=L;L=C;try{return G()}finally{L=X}},n.unstable_scheduleCallback=function(C,G,X){var ut=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ut+X:ut):X=ut,C){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=X+ht,C={id:U++,callback:G,priorityLevel:C,startTime:X,expirationTime:ht,sortIndex:-1},X>ut?(C.sortIndex=X,c(b,C),f(S)===null&&C===f(b)&&(F?(V(R),R=-1):F=!0,Ot(W,X-ut))):(C.sortIndex=ht,c(S,C),Z||K||(Z=!0,Y||(Y=!0,st()))),C},n.unstable_shouldYield=dt,n.unstable_wrapCallback=function(C){var G=L;return function(){var X=L;L=G;try{return C.apply(this,arguments)}finally{L=X}}}})(Qo)),Qo}var Dh;function Eb(){return Dh||(Dh=1,Lo.exports=xb()),Lo.exports}var qo={exports:{}},ve={};var Oh;function Tb(){if(Oh)return ve;Oh=1;var n=of();function c(S){var b="https://react.dev/errors/"+S;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)b+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+S+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(S,b,U){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:A==null?null:""+A,children:S,containerInfo:b,implementation:U}}var v=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(S,b){if(S==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ve.createPortal=function(S,b){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return p(S,b,null,U)},ve.flushSync=function(S){var b=v.T,U=o.p;try{if(v.T=null,o.p=2,S)return S()}finally{v.T=b,o.p=U,o.d.f()}},ve.preconnect=function(S,b){typeof S=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(S,b))},ve.prefetchDNS=function(S){typeof S=="string"&&o.d.D(S)},ve.preinit=function(S,b){if(typeof S=="string"&&b&&typeof b.as=="string"){var U=b.as,A=D(U,b.crossOrigin),L=typeof b.integrity=="string"?b.integrity:void 0,K=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;U==="style"?o.d.S(S,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:A,integrity:L,fetchPriority:K}):U==="script"&&o.d.X(S,{crossOrigin:A,integrity:L,fetchPriority:K,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ve.preinitModule=function(S,b){if(typeof S=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var U=D(b.as,b.crossOrigin);o.d.M(S,{crossOrigin:U,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(S)},ve.preload=function(S,b){if(typeof S=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var U=b.as,A=D(U,b.crossOrigin);o.d.L(S,U,{crossOrigin:A,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ve.preloadModule=function(S,b){if(typeof S=="string")if(b){var U=D(b.as,b.crossOrigin);o.d.m(S,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:U,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(S)},ve.requestFormReset=function(S){o.d.r(S)},ve.unstable_batchedUpdates=function(S,b){return S(b)},ve.useFormState=function(S,b,U){return v.H.useFormState(S,b,U)},ve.useFormStatus=function(){return v.H.useHostTransitionStatus()},ve.version="19.2.3",ve}var Ch;function ip(){if(Ch)return qo.exports;Ch=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),qo.exports=Tb(),qo.exports}var Mh;function zb(){if(Mh)return zu;Mh=1;var n=Eb(),c=of(),f=ip();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(p(t)!==t)throw Error(o(188))}function b(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return S(u),t;if(i===a)return S(u),e;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=u,a=i;else{for(var r=!1,s=u.child;s;){if(s===l){r=!0,l=u,a=i;break}if(s===a){r=!0,a=u,l=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===l){r=!0,l=i,a=u;break}if(s===a){r=!0,a=i,l=u;break}s=s.sibling}if(!r)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function U(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=U(t),e!==null)return e;t=t.sibling}return null}var A=Object.assign,L=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),N=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Profiler";case I:return"StrictMode";case W:return"Suspense";case Y:return"SuspenseList";case yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case N:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case rt:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var Ot=Array.isArray,C=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ut=[],ht=-1;function m(t){return{current:t}}function M(t){0>ht||(t.current=ut[ht],ut[ht]=null,ht--)}function H(t,e){ht++,ut[ht]=t.current,t.current=e}var Q=m(null),P=m(null),tt=m(null),at=m(null);function Ct(t,e){switch(H(tt,e),H(P,t),H(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?k0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=k0(e),t=X0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(Q),H(Q,t)}function j(){M(Q),M(P),M(tt)}function ot(t){t.memoizedState!==null&&H(at,t);var e=Q.current,l=X0(e,t.type);e!==l&&(H(P,t),H(Q,l))}function mt(t){P.current===t&&(M(Q),M(P)),at.current===t&&(M(at),Au._currentValue=X)}var St,Rt;function Ut(t){if(St===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);St=e&&e[1]||"",Rt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+Rt}var Ht=!1;function me(t,e){if(!t||Ht)return"";Ht=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(O){var T=O}Reflect.construct(t,[],$)}else{try{$.call()}catch(O){T=O}t.call($.prototype)}}else{try{throw Error()}catch(O){T=O}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var h=r.split(`
`),E=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===E.length)for(a=h.length-1,u=E.length-1;1<=a&&0<=u&&h[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==E[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{Ht=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ut(l):""}function Ke(t,e){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==e&&e!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return me(t.type,!1);case 11:return me(t.type.render,!1);case 1:return me(t.type,!0);case 31:return Ut("Activity");default:return""}}function ll(t){try{var e="",l=null;do e+=Ke(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var He=Object.prototype.hasOwnProperty,ia=n.unstable_scheduleCallback,ca=n.unstable_cancelCallback,ra=n.unstable_shouldYield,Bu=n.unstable_requestPaint,ye=n.unstable_now,Pp=n.unstable_getCurrentPriorityLevel,xf=n.unstable_ImmediatePriority,Ef=n.unstable_UserBlockingPriority,Nu=n.unstable_NormalPriority,tm=n.unstable_LowPriority,Tf=n.unstable_IdlePriority,em=n.log,lm=n.unstable_setDisableYieldValue,Rn=null,De=null;function wl(t){if(typeof em=="function"&&lm(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Rn,t)}catch{}}var Oe=Math.clz32?Math.clz32:um,am=Math.log,nm=Math.LN2;function um(t){return t>>>=0,t===0?32:31-(am(t)/nm|0)|0}var Uu=256,Hu=262144,$u=4194304;function oa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ju(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=oa(a):(r&=s,r!==0?u=oa(r):l||(l=s&~t,l!==0&&(u=oa(l))))):(s=a&~i,s!==0?u=oa(s):r!==0?u=oa(r):l||(l=a&~t,l!==0&&(u=oa(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Bn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function im(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(){var t=$u;return $u<<=1,($u&62914560)===0&&($u=4194304),t}function Ec(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function cm(t,e,l,a,u,i){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,E=t.hiddenUpdates;for(l=r&~l;0<l;){var _=31-Oe(l),$=1<<_;s[_]=0,h[_]=-1;var T=E[_];if(T!==null)for(E[_]=null,_=0;_<T.length;_++){var O=T[_];O!==null&&(O.lane&=-536870913)}l&=~$}a!==0&&Df(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function Df(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Oe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Of(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Oe(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function Cf(t,e){var l=e&-e;return l=(l&42)!==0?1:Tc(l),(l&(t.suspendedLanes|e))!==0?0:l}function Tc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mf(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:ph(t.type))}function wf(t,e){var l=G.p;try{return G.p=t,e()}finally{G.p=l}}var _l=Math.random().toString(36).slice(2),oe="__reactFiber$"+_l,ge="__reactProps$"+_l,Ha="__reactContainer$"+_l,Dc="__reactEvents$"+_l,rm="__reactListeners$"+_l,om="__reactHandles$"+_l,_f="__reactResources$"+_l,Un="__reactMarker$"+_l;function Oc(t){delete t[oe],delete t[ge],delete t[Dc],delete t[rm],delete t[om]}function $a(t){var e=t[oe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ha]||l[oe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=I0(t);t!==null;){if(l=t[oe])return l;t=I0(t)}return e}t=l,l=t.parentNode}return null}function ja(t){if(t=t[oe]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function La(t){var e=t[_f];return e||(e=t[_f]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ie(t){t[Un]=!0}var Rf=new Set,Bf={};function fa(t,e){Qa(t,e),Qa(t+"Capture",e)}function Qa(t,e){for(Bf[t]=e,t=0;t<e.length;t++)Rf.add(e[t])}var fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nf={},Uf={};function sm(t){return He.call(Uf,t)?!0:He.call(Nf,t)?!1:fm.test(t)?Uf[t]=!0:(Nf[t]=!0,!1)}function Lu(t,e,l){if(sm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Qu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function fl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dm(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cc(t){if(!t._valueTracker){var e=Hf(t)?"checked":"value";t._valueTracker=dm(t,e,""+t[e])}}function $f(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Hf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hm=/[\n"\\]/g;function je(t){return t.replace(hm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Mc(t,e,l,a,u,i,r,s){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?wc(t,r,$e(e)):l!=null?wc(t,r,$e(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+$e(s):t.removeAttribute("name")}function jf(t,e,l,a,u,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Cc(t);return}l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Cc(t)}function wc(t,e,l){e==="number"&&qu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function qa(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Lf(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Qf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(Ot(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Cc(t)}function Ya(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||pm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Yf(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&qf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&qf(t,i,e[i])}function _c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yu(t){return vm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sl(){}var Rc=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ga=null,ka=null;function Gf(t){var e=ja(t);if(e&&(t=e.stateNode)){var l=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(Mc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+je(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ge]||null;if(!u)throw Error(o(90));Mc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&$f(a)}break t;case"textarea":Lf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&qa(t,!!l.multiple,e,!1)}}}var Nc=!1;function kf(t,e,l){if(Nc)return t(e,l);Nc=!0;try{var a=t(e);return a}finally{if(Nc=!1,(Ga!==null||ka!==null)&&(Mi(),Ga&&(e=Ga,t=ka,ka=Ga=null,Gf(e),t)))for(e=0;e<t.length;e++)Gf(t[e])}}function $n(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ge]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=!1;if(dl)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Uc=!1}var Rl=null,Hc=null,Gu=null;function Xf(){if(Gu)return Gu;var t,e=Hc,l=e.length,a,u="value"in Rl?Rl.value:Rl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===u[i-a];a++);return Gu=u.slice(t,1<a?1-a:void 0)}function ku(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function Vf(){return!1}function Ae(t){function e(l,a,u,i,r){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xu:Vf,this.isPropagationStopped=Vf,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=Ae(sa),Ln=A({},sa,{view:0,detail:0}),bm=Ae(Ln),$c,jc,Qn,Zu=A({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qn&&(Qn&&t.type==="mousemove"?($c=t.screenX-Qn.screenX,jc=t.screenY-Qn.screenY):jc=$c=0,Qn=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Zf=Ae(Zu),ym=A({},Zu,{dataTransfer:0}),gm=Ae(ym),Am=A({},Ln,{relatedTarget:0}),Lc=Ae(Am),Sm=A({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),xm=Ae(Sm),Em=A({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tm=Ae(Em),zm=A({},sa,{data:0}),Kf=Ae(zm),Dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cm[t])?!!e[t]:!1}function Qc(){return Mm}var wm=A({},Ln,{key:function(t){if(t.key){var e=Dm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Om[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_m=Ae(wm),Rm=A({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Ae(Rm),Bm=A({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Nm=Ae(Bm),Um=A({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hm=Ae(Um),$m=A({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Ae($m),Lm=A({},sa,{newState:0,oldState:0}),Qm=Ae(Lm),qm=[9,13,27,32],qc=dl&&"CompositionEvent"in window,qn=null;dl&&"documentMode"in document&&(qn=document.documentMode);var Ym=dl&&"TextEvent"in window&&!qn,Wf=dl&&(!qc||qn&&8<qn&&11>=qn),Ff=" ",If=!1;function Pf(t,e){switch(t){case"keyup":return qm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xa=!1;function Gm(t,e){switch(t){case"compositionend":return ts(e);case"keypress":return e.which!==32?null:(If=!0,Ff);case"textInput":return t=e.data,t===Ff&&If?null:t;default:return null}}function km(t,e){if(Xa)return t==="compositionend"||!qc&&Pf(t,e)?(t=Xf(),Gu=Hc=Rl=null,Xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wf&&e.locale!=="ko"?null:e.data;default:return null}}var Xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xm[t.type]:e==="textarea"}function ls(t,e,l,a){Ga?ka?ka.push(a):ka=[a]:Ga=a,e=Hi(e,"onChange"),0<e.length&&(l=new Vu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Yn=null,Gn=null;function Vm(t){j0(t,0)}function Ku(t){var e=Hn(t);if($f(e))return t}function as(t,e){if(t==="change")return e}var ns=!1;if(dl){var Yc;if(dl){var Gc="oninput"in document;if(!Gc){var us=document.createElement("div");us.setAttribute("oninput","return;"),Gc=typeof us.oninput=="function"}Yc=Gc}else Yc=!1;ns=Yc&&(!document.documentMode||9<document.documentMode)}function is(){Yn&&(Yn.detachEvent("onpropertychange",cs),Gn=Yn=null)}function cs(t){if(t.propertyName==="value"&&Ku(Gn)){var e=[];ls(e,Gn,t,Bc(t)),kf(Vm,e)}}function Zm(t,e,l){t==="focusin"?(is(),Yn=e,Gn=l,Yn.attachEvent("onpropertychange",cs)):t==="focusout"&&is()}function Km(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Gn)}function Jm(t,e){if(t==="click")return Ku(e)}function Wm(t,e){if(t==="input"||t==="change")return Ku(e)}function Fm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:Fm;function kn(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!He.call(e,u)||!Ce(t[u],e[u]))return!1}return!0}function rs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function os(t,e){var l=rs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=rs(l)}}function fs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ss(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=qu(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Im=dl&&"documentMode"in document&&11>=document.documentMode,Va=null,Xc=null,Xn=null,Vc=!1;function ds(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vc||Va==null||Va!==qu(a)||(a=Va,"selectionStart"in a&&kc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xn&&kn(Xn,a)||(Xn=a,a=Hi(Xc,"onSelect"),0<a.length&&(e=new Vu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Va)))}function da(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Za={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Zc={},hs={};dl&&(hs=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function ha(t){if(Zc[t])return Zc[t];if(!Za[t])return t;var e=Za[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in hs)return Zc[t]=e[l];return t}var ps=ha("animationend"),ms=ha("animationiteration"),vs=ha("animationstart"),Pm=ha("transitionrun"),tv=ha("transitionstart"),ev=ha("transitioncancel"),bs=ha("transitionend"),ys=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function Je(t,e){ys.set(t,e),fa(e,[t])}var Ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Le=[],Ka=0,Jc=0;function Wu(){for(var t=Ka,e=Jc=Ka=0;e<t;){var l=Le[e];Le[e++]=null;var a=Le[e];Le[e++]=null;var u=Le[e];Le[e++]=null;var i=Le[e];if(Le[e++]=null,a!==null&&u!==null){var r=a.pending;r===null?u.next=u:(u.next=r.next,r.next=u),a.pending=u}i!==0&&gs(l,u,i)}}function Fu(t,e,l,a){Le[Ka++]=t,Le[Ka++]=e,Le[Ka++]=l,Le[Ka++]=a,Jc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Wc(t,e,l,a){return Fu(t,e,l,a),Iu(t)}function pa(t,e){return Fu(t,null,null,e),Iu(t)}function gs(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Oe(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Iu(t){if(50<hu)throw hu=0,uo=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ja={};function lv(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(t,e,l,a){return new lv(t,e,l,a)}function Fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hl(t,e){var l=t.alternate;return l===null?(l=Me(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function As(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pu(t,e,l,a,u,i){var r=0;if(a=t,typeof t=="function")Fc(t)&&(r=1);else if(typeof t=="string")r=cb(t,l,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case yt:return t=Me(31,l,e,u),t.elementType=yt,t.lanes=i,t;case F:return ma(l.children,u,i,e);case I:r=8,u|=24;break;case k:return t=Me(12,l,e,u|2),t.elementType=k,t.lanes=i,t;case W:return t=Me(13,l,e,u),t.elementType=W,t.lanes=i,t;case Y:return t=Me(19,l,e,u),t.elementType=Y,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:r=10;break t;case V:r=9;break t;case J:r=11;break t;case R:r=14;break t;case rt:r=16,a=null;break t}r=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=Me(r,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ma(t,e,l,a){return t=Me(7,t,a,e),t.lanes=l,t}function Ic(t,e,l){return t=Me(6,t,null,e),t.lanes=l,t}function Ss(t){var e=Me(18,null,null,0);return e.stateNode=t,e}function Pc(t,e,l){return e=Me(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var xs=new WeakMap;function Qe(t,e){if(typeof t=="object"&&t!==null){var l=xs.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ll(e)},xs.set(t,e),e)}return{value:t,source:e,stack:ll(e)}}var Wa=[],Fa=0,ti=null,Vn=0,qe=[],Ye=0,Bl=null,al=1,nl="";function pl(t,e){Wa[Fa++]=Vn,Wa[Fa++]=ti,ti=t,Vn=e}function Es(t,e,l){qe[Ye++]=al,qe[Ye++]=nl,qe[Ye++]=Bl,Bl=t;var a=al;t=nl;var u=32-Oe(a)-1;a&=~(1<<u),l+=1;var i=32-Oe(e)+u;if(30<i){var r=u-u%5;i=(a&(1<<r)-1).toString(32),a>>=r,u-=r,al=1<<32-Oe(e)+u|l<<u|a,nl=i+t}else al=1<<i|l<<u|a,nl=t}function tr(t){t.return!==null&&(pl(t,1),Es(t,1,0))}function er(t){for(;t===ti;)ti=Wa[--Fa],Wa[Fa]=null,Vn=Wa[--Fa],Wa[Fa]=null;for(;t===Bl;)Bl=qe[--Ye],qe[Ye]=null,nl=qe[--Ye],qe[Ye]=null,al=qe[--Ye],qe[Ye]=null}function Ts(t,e){qe[Ye++]=al,qe[Ye++]=nl,qe[Ye++]=Bl,al=e.id,nl=e.overflow,Bl=t}var fe=null,kt=null,Dt=!1,Nl=null,Ge=!1,lr=Error(o(519));function Ul(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(Qe(e,t)),lr}function zs(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[oe]=t,e[ge]=a,l){case"dialog":Et("cancel",e),Et("close",e);break;case"iframe":case"object":case"embed":Et("load",e);break;case"video":case"audio":for(l=0;l<mu.length;l++)Et(mu[l],e);break;case"source":Et("error",e);break;case"img":case"image":case"link":Et("error",e),Et("load",e);break;case"details":Et("toggle",e);break;case"input":Et("invalid",e),jf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Et("invalid",e);break;case"textarea":Et("invalid",e),Qf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Y0(e.textContent,l)?(a.popover!=null&&(Et("beforetoggle",e),Et("toggle",e)),a.onScroll!=null&&Et("scroll",e),a.onScrollEnd!=null&&Et("scrollend",e),a.onClick!=null&&(e.onclick=sl),e=!0):e=!1,e||Ul(t,!0)}function Ds(t){for(fe=t.return;fe;)switch(fe.tag){case 5:case 31:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:fe=fe.return}}function Ia(t){if(t!==fe)return!1;if(!Dt)return Ds(t),Dt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||So(t.type,t.memoizedProps)),l=!l),l&&kt&&Ul(t),Ds(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));kt=F0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));kt=F0(t)}else e===27?(e=kt,Jl(t.type)?(t=Do,Do=null,kt=t):kt=e):kt=fe?Xe(t.stateNode.nextSibling):null;return!0}function va(){kt=fe=null,Dt=!1}function ar(){var t=Nl;return t!==null&&(Te===null?Te=t:Te.push.apply(Te,t),Nl=null),t}function Zn(t){Nl===null?Nl=[t]:Nl.push(t)}var nr=m(null),ba=null,ml=null;function Hl(t,e,l){H(nr,e._currentValue),e._currentValue=l}function vl(t){t._currentValue=nr.current,M(nr)}function ur(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function ir(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var r=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),ur(i.return,l,t),a||(r=null);break t}i=s.next}}else if(u.tag===18){if(r=u.return,r===null)throw Error(o(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),ur(r,l,t),r=null}else r=u.child;if(r!==null)r.return=u;else for(r=u;r!==null;){if(r===t){r=null;break}if(u=r.sibling,u!==null){u.return=r.return,r=u;break}r=r.return}u=r}}function Pa(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var r=u.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=u.type;Ce(u.pendingProps.value,r.value)||(t!==null?t.push(s):t=[s])}}else if(u===at.current){if(r=u.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Au):t=[Au])}u=u.return}t!==null&&ir(e,t,l,a),e.flags|=262144}function ei(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ya(t){ba=t,ml=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function se(t){return Os(ba,t)}function li(t,e){return ba===null&&ya(t),Os(t,e)}function Os(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ml===null){if(t===null)throw Error(o(308));ml=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ml=ml.next=e;return l}var av=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},nv=n.unstable_scheduleCallback,uv=n.unstable_NormalPriority,Pt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cr(){return{controller:new av,data:new Map,refCount:0}}function Kn(t){t.refCount--,t.refCount===0&&nv(uv,function(){t.controller.abort()})}var Jn=null,rr=0,tn=0,en=null;function iv(t,e){if(Jn===null){var l=Jn=[];rr=0,tn=so(),en={status:"pending",value:void 0,then:function(a){l.push(a)}}}return rr++,e.then(Cs,Cs),e}function Cs(){if(--rr===0&&Jn!==null){en!==null&&(en.status="fulfilled");var t=Jn;Jn=null,tn=0,en=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function cv(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Ms=C.S;C.S=function(t,e){d0=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&iv(t,e),Ms!==null&&Ms(t,e)};var ga=m(null);function or(){var t=ga.current;return t!==null?t:Gt.pooledCache}function ai(t,e){e===null?H(ga,ga.current):H(ga,e.pool)}function ws(){var t=or();return t===null?null:{parent:Pt._currentValue,pool:t}}var ln=Error(o(460)),fr=Error(o(474)),ni=Error(o(542)),ui={then:function(){}};function _s(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rs(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(sl,sl),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ns(t),t;default:if(typeof e.status=="string")e.then(sl,sl);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ns(t),t}throw Sa=e,ln}}function Aa(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Sa=l,ln):l}}var Sa=null;function Bs(){if(Sa===null)throw Error(o(459));var t=Sa;return Sa=null,t}function Ns(t){if(t===ln||t===ni)throw Error(o(483))}var an=null,Wn=0;function ii(t){var e=Wn;return Wn+=1,an===null&&(an=[]),Rs(an,t,e)}function Fn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ci(t,e){throw e.$$typeof===L?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Us(t){function e(g,y){if(t){var x=g.deletions;x===null?(g.deletions=[y],g.flags|=16):x.push(y)}}function l(g,y){if(!t)return null;for(;y!==null;)e(g,y),y=y.sibling;return null}function a(g){for(var y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function u(g,y){return g=hl(g,y),g.index=0,g.sibling=null,g}function i(g,y,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<y?(g.flags|=67108866,y):x):(g.flags|=67108866,y)):(g.flags|=1048576,y)}function r(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function s(g,y,x,B){return y===null||y.tag!==6?(y=Ic(x,g.mode,B),y.return=g,y):(y=u(y,x),y.return=g,y)}function h(g,y,x,B){var it=x.type;return it===F?_(g,y,x.props.children,B,x.key):y!==null&&(y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&Aa(it)===y.type)?(y=u(y,x.props),Fn(y,x),y.return=g,y):(y=Pu(x.type,x.key,x.props,null,g.mode,B),Fn(y,x),y.return=g,y)}function E(g,y,x,B){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Pc(x,g.mode,B),y.return=g,y):(y=u(y,x.children||[]),y.return=g,y)}function _(g,y,x,B,it){return y===null||y.tag!==7?(y=ma(x,g.mode,B,it),y.return=g,y):(y=u(y,x),y.return=g,y)}function $(g,y,x){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ic(""+y,g.mode,x),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case K:return x=Pu(y.type,y.key,y.props,null,g.mode,x),Fn(x,y),x.return=g,x;case Z:return y=Pc(y,g.mode,x),y.return=g,y;case rt:return y=Aa(y),$(g,y,x)}if(Ot(y)||st(y))return y=ma(y,g.mode,x,null),y.return=g,y;if(typeof y.then=="function")return $(g,ii(y),x);if(y.$$typeof===N)return $(g,li(g,y),x);ci(g,y)}return null}function T(g,y,x,B){var it=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return it!==null?null:s(g,y,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case K:return x.key===it?h(g,y,x,B):null;case Z:return x.key===it?E(g,y,x,B):null;case rt:return x=Aa(x),T(g,y,x,B)}if(Ot(x)||st(x))return it!==null?null:_(g,y,x,B,null);if(typeof x.then=="function")return T(g,y,ii(x),B);if(x.$$typeof===N)return T(g,y,li(g,x),B);ci(g,x)}return null}function O(g,y,x,B,it){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return g=g.get(x)||null,s(y,g,""+B,it);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case K:return g=g.get(B.key===null?x:B.key)||null,h(y,g,B,it);case Z:return g=g.get(B.key===null?x:B.key)||null,E(y,g,B,it);case rt:return B=Aa(B),O(g,y,x,B,it)}if(Ot(B)||st(B))return g=g.get(x)||null,_(y,g,B,it,null);if(typeof B.then=="function")return O(g,y,x,ii(B),it);if(B.$$typeof===N)return O(g,y,x,li(y,B),it);ci(y,B)}return null}function lt(g,y,x,B){for(var it=null,wt=null,nt=y,bt=y=0,zt=null;nt!==null&&bt<x.length;bt++){nt.index>bt?(zt=nt,nt=null):zt=nt.sibling;var _t=T(g,nt,x[bt],B);if(_t===null){nt===null&&(nt=zt);break}t&&nt&&_t.alternate===null&&e(g,nt),y=i(_t,y,bt),wt===null?it=_t:wt.sibling=_t,wt=_t,nt=zt}if(bt===x.length)return l(g,nt),Dt&&pl(g,bt),it;if(nt===null){for(;bt<x.length;bt++)nt=$(g,x[bt],B),nt!==null&&(y=i(nt,y,bt),wt===null?it=nt:wt.sibling=nt,wt=nt);return Dt&&pl(g,bt),it}for(nt=a(nt);bt<x.length;bt++)zt=O(nt,g,bt,x[bt],B),zt!==null&&(t&&zt.alternate!==null&&nt.delete(zt.key===null?bt:zt.key),y=i(zt,y,bt),wt===null?it=zt:wt.sibling=zt,wt=zt);return t&&nt.forEach(function(ta){return e(g,ta)}),Dt&&pl(g,bt),it}function ct(g,y,x,B){if(x==null)throw Error(o(151));for(var it=null,wt=null,nt=y,bt=y=0,zt=null,_t=x.next();nt!==null&&!_t.done;bt++,_t=x.next()){nt.index>bt?(zt=nt,nt=null):zt=nt.sibling;var ta=T(g,nt,_t.value,B);if(ta===null){nt===null&&(nt=zt);break}t&&nt&&ta.alternate===null&&e(g,nt),y=i(ta,y,bt),wt===null?it=ta:wt.sibling=ta,wt=ta,nt=zt}if(_t.done)return l(g,nt),Dt&&pl(g,bt),it;if(nt===null){for(;!_t.done;bt++,_t=x.next())_t=$(g,_t.value,B),_t!==null&&(y=i(_t,y,bt),wt===null?it=_t:wt.sibling=_t,wt=_t);return Dt&&pl(g,bt),it}for(nt=a(nt);!_t.done;bt++,_t=x.next())_t=O(nt,g,bt,_t.value,B),_t!==null&&(t&&_t.alternate!==null&&nt.delete(_t.key===null?bt:_t.key),y=i(_t,y,bt),wt===null?it=_t:wt.sibling=_t,wt=_t);return t&&nt.forEach(function(yb){return e(g,yb)}),Dt&&pl(g,bt),it}function Yt(g,y,x,B){if(typeof x=="object"&&x!==null&&x.type===F&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case K:t:{for(var it=x.key;y!==null;){if(y.key===it){if(it=x.type,it===F){if(y.tag===7){l(g,y.sibling),B=u(y,x.props.children),B.return=g,g=B;break t}}else if(y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&Aa(it)===y.type){l(g,y.sibling),B=u(y,x.props),Fn(B,x),B.return=g,g=B;break t}l(g,y);break}else e(g,y);y=y.sibling}x.type===F?(B=ma(x.props.children,g.mode,B,x.key),B.return=g,g=B):(B=Pu(x.type,x.key,x.props,null,g.mode,B),Fn(B,x),B.return=g,g=B)}return r(g);case Z:t:{for(it=x.key;y!==null;){if(y.key===it)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){l(g,y.sibling),B=u(y,x.children||[]),B.return=g,g=B;break t}else{l(g,y);break}else e(g,y);y=y.sibling}B=Pc(x,g.mode,B),B.return=g,g=B}return r(g);case rt:return x=Aa(x),Yt(g,y,x,B)}if(Ot(x))return lt(g,y,x,B);if(st(x)){if(it=st(x),typeof it!="function")throw Error(o(150));return x=it.call(x),ct(g,y,x,B)}if(typeof x.then=="function")return Yt(g,y,ii(x),B);if(x.$$typeof===N)return Yt(g,y,li(g,x),B);ci(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,y!==null&&y.tag===6?(l(g,y.sibling),B=u(y,x),B.return=g,g=B):(l(g,y),B=Ic(x,g.mode,B),B.return=g,g=B),r(g)):l(g,y)}return function(g,y,x,B){try{Wn=0;var it=Yt(g,y,x,B);return an=null,it}catch(nt){if(nt===ln||nt===ni)throw nt;var wt=Me(29,nt,null,g.mode);return wt.lanes=B,wt.return=g,wt}}}var xa=Us(!0),Hs=Us(!1),$l=!1;function sr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function jl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ll(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Bt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Iu(t),gs(t,null,l),e}return Fu(t,a,e,l),Iu(t)}function In(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Of(t,l)}}function hr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var pr=!1;function Pn(){if(pr){var t=en;if(t!==null)throw t}}function tu(t,e,l,a){pr=!1;var u=t.updateQueue;$l=!1;var i=u.firstBaseUpdate,r=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,E=h.next;h.next=null,r===null?i=E:r.next=E,r=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==r&&(s===null?_.firstBaseUpdate=E:s.next=E,_.lastBaseUpdate=h))}if(i!==null){var $=u.baseState;r=0,_=E=h=null,s=i;do{var T=s.lane&-536870913,O=T!==s.lane;if(O?(Tt&T)===T:(a&T)===T){T!==0&&T===tn&&(pr=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var lt=t,ct=s;T=e;var Yt=l;switch(ct.tag){case 1:if(lt=ct.payload,typeof lt=="function"){$=lt.call(Yt,$,T);break t}$=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ct.payload,T=typeof lt=="function"?lt.call(Yt,$,T):lt,T==null)break t;$=A({},$,T);break t;case 2:$l=!0}}T=s.callback,T!==null&&(t.flags|=64,O&&(t.flags|=8192),O=u.callbacks,O===null?u.callbacks=[T]:O.push(T))}else O={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(E=_=O,h=$):_=_.next=O,r|=T;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;O=s,s=O.next,O.next=null,u.lastBaseUpdate=O,u.shared.pending=null}}while(!0);_===null&&(h=$),u.baseState=h,u.firstBaseUpdate=E,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),kl|=r,t.lanes=r,t.memoizedState=$}}function $s(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function js(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)$s(l[t],e)}var nn=m(null),ri=m(0);function Ls(t,e){t=zl,H(ri,t),H(nn,e),zl=t|e.baseLanes}function mr(){H(ri,zl),H(nn,nn.current)}function vr(){zl=ri.current,M(nn),M(ri)}var we=m(null),ke=null;function Ql(t){var e=t.alternate;H(Ft,Ft.current&1),H(we,t),ke===null&&(e===null||nn.current!==null||e.memoizedState!==null)&&(ke=t)}function br(t){H(Ft,Ft.current),H(we,t),ke===null&&(ke=t)}function Qs(t){t.tag===22?(H(Ft,Ft.current),H(we,t),ke===null&&(ke=t)):ql()}function ql(){H(Ft,Ft.current),H(we,we.current)}function _e(t){M(we),ke===t&&(ke=null),M(Ft)}var Ft=m(0);function oi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||To(l)||zo(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=0,vt=null,Qt=null,te=null,fi=!1,un=!1,Ea=!1,si=0,eu=0,cn=null,rv=0;function Kt(){throw Error(o(321))}function yr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ce(t[l],e[l]))return!1;return!0}function gr(t,e,l,a,u,i){return bl=i,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?Ed:Nr,Ea=!1,i=l(a,u),Ea=!1,un&&(i=Ys(e,l,a,u)),qs(t),i}function qs(t){C.H=nu;var e=Qt!==null&&Qt.next!==null;if(bl=0,te=Qt=vt=null,fi=!1,eu=0,cn=null,e)throw Error(o(300));t===null||ee||(t=t.dependencies,t!==null&&ei(t)&&(ee=!0))}function Ys(t,e,l,a){vt=t;var u=0;do{if(un&&(cn=null),eu=0,un=!1,25<=u)throw Error(o(301));if(u+=1,te=Qt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Td,i=e(l,a)}while(un);return i}function ov(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?lu(e):e,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(vt.flags|=1024),e}function Ar(){var t=si!==0;return si=0,t}function Sr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function xr(t){if(fi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fi=!1}bl=0,te=Qt=vt=null,un=!1,eu=si=0,cn=null}function be(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?vt.memoizedState=te=t:te=te.next=t,te}function It(){if(Qt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var e=te===null?vt.memoizedState:te.next;if(e!==null)te=e,Qt=t;else{if(t===null)throw vt.alternate===null?Error(o(467)):Error(o(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},te===null?vt.memoizedState=te=t:te=te.next=t}return te}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lu(t){var e=eu;return eu+=1,cn===null&&(cn=[]),t=Rs(cn,t,e),e=vt,(te===null?e.memoizedState:te.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?Ed:Nr),t}function hi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lu(t);if(t.$$typeof===N)return se(t)}throw Error(o(438,String(t)))}function Er(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=di(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=dt;return e.index++,l}function yl(t,e){return typeof e=="function"?e(t):e}function pi(t){var e=It();return Tr(e,Qt,t)}function Tr(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var r=u.next;u.next=i.next,i.next=r}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=r=null,h=null,E=e,_=!1;do{var $=E.lane&-536870913;if($!==E.lane?(Tt&$)===$:(bl&$)===$){var T=E.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),$===tn&&(_=!0);else if((bl&T)===T){E=E.next,T===tn&&(_=!0);continue}else $={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=$,r=i):h=h.next=$,vt.lanes|=T,kl|=T;$=E.action,Ea&&l(i,$),i=E.hasEagerState?E.eagerState:l(i,$)}else T={lane:$,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=T,r=i):h=h.next=T,vt.lanes|=$,kl|=$;E=E.next}while(E!==null&&E!==e);if(h===null?r=i:h.next=s,!Ce(i,t.memoizedState)&&(ee=!0,_&&(l=en,l!==null)))throw l;t.memoizedState=i,t.baseState=r,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function zr(t){var e=It(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var r=u=u.next;do i=t(i,r.action),r=r.next;while(r!==u);Ce(i,e.memoizedState)||(ee=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Gs(t,e,l){var a=vt,u=It(),i=Dt;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=e();var r=!Ce((Qt||u).memoizedState,l);if(r&&(u.memoizedState=l,ee=!0),u=u.queue,Cr(Vs.bind(null,a,u,t),[t]),u.getSnapshot!==e||r||te!==null&&te.memoizedState.tag&1){if(a.flags|=2048,rn(9,{destroy:void 0},Xs.bind(null,a,u,l,e),null),Gt===null)throw Error(o(349));i||(bl&127)!==0||ks(a,e,l)}return l}function ks(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=di(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Xs(t,e,l,a){e.value=l,e.getSnapshot=a,Zs(e)&&Ks(t)}function Vs(t,e,l){return l(function(){Zs(e)&&Ks(t)})}function Zs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ce(t,l)}catch{return!0}}function Ks(t){var e=pa(t,2);e!==null&&ze(e,t,2)}function Dr(t){var e=be();if(typeof t=="function"){var l=t;if(t=l(),Ea){wl(!0);try{l()}finally{wl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e}function Js(t,e,l,a){return t.baseState=l,Tr(t,Qt,typeof a=="function"?a:yl)}function fv(t,e,l,a,u){if(bi(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};C.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Ws(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Ws(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=C.T,r={};C.T=r;try{var s=l(u,a),h=C.S;h!==null&&h(r,s),Fs(t,e,s)}catch(E){Or(t,e,E)}finally{i!==null&&r.types!==null&&(i.types=r.types),C.T=i}}else try{i=l(u,a),Fs(t,e,i)}catch(E){Or(t,e,E)}}function Fs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Is(t,e,a)},function(a){return Or(t,e,a)}):Is(t,e,l)}function Is(t,e,l){e.status="fulfilled",e.value=l,Ps(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Ws(t,l)))}function Or(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Ps(e),e=e.next;while(e!==a)}t.action=null}function Ps(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function td(t,e){return e}function ed(t,e){if(Dt){var l=Gt.formState;if(l!==null){t:{var a=vt;if(Dt){if(kt){e:{for(var u=kt,i=Ge;u.nodeType!==8;){if(!i){u=null;break e}if(u=Xe(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){kt=Xe(u.nextSibling),a=u.data==="F!";break t}}Ul(a)}a=!1}a&&(e=l[0])}}return l=be(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:td,lastRenderedState:e},l.queue=a,l=Ad.bind(null,vt,a),a.dispatch=l,a=Dr(!1),i=Br.bind(null,vt,!1,a.queue),a=be(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=fv.bind(null,vt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function ld(t){var e=It();return ad(e,Qt,t)}function ad(t,e,l){if(e=Tr(t,e,td)[0],t=pi(yl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=lu(e)}catch(r){throw r===ln?ni:r}else a=e;e=It();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(vt.flags|=2048,rn(9,{destroy:void 0},sv.bind(null,u,l),null)),[a,i,t]}function sv(t,e){t.action=e}function nd(t){var e=It(),l=Qt;if(l!==null)return ad(e,l,t);It(),e=e.memoizedState,l=It();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function rn(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=vt.updateQueue,e===null&&(e=di(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ud(){return It().memoizedState}function mi(t,e,l,a){var u=be();vt.flags|=t,u.memoizedState=rn(1|e,{destroy:void 0},l,a===void 0?null:a)}function vi(t,e,l,a){var u=It();a=a===void 0?null:a;var i=u.memoizedState.inst;Qt!==null&&a!==null&&yr(a,Qt.memoizedState.deps)?u.memoizedState=rn(e,i,l,a):(vt.flags|=t,u.memoizedState=rn(1|e,i,l,a))}function id(t,e){mi(8390656,8,t,e)}function Cr(t,e){vi(2048,8,t,e)}function dv(t){vt.flags|=4;var e=vt.updateQueue;if(e===null)e=di(),vt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function cd(t){var e=It().memoizedState;return dv({ref:e,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function rd(t,e){return vi(4,2,t,e)}function od(t,e){return vi(4,4,t,e)}function fd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sd(t,e,l){l=l!=null?l.concat([t]):null,vi(4,4,fd.bind(null,e,t),l)}function Mr(){}function dd(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&yr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function hd(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&yr(e,a[1]))return a[0];if(a=t(),Ea){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a}function wr(t,e,l){return l===void 0||(bl&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=p0(),vt.lanes|=t,kl|=t,l)}function pd(t,e,l,a){return Ce(l,e)?l:nn.current!==null?(t=wr(t,l,a),Ce(t,e)||(ee=!0),t):(bl&42)===0||(bl&1073741824)!==0&&(Tt&261930)===0?(ee=!0,t.memoizedState=l):(t=p0(),vt.lanes|=t,kl|=t,e)}function md(t,e,l,a,u){var i=G.p;G.p=i!==0&&8>i?i:8;var r=C.T,s={};C.T=s,Br(t,!1,e,l);try{var h=u(),E=C.S;if(E!==null&&E(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=cv(h,a);au(t,e,_,Ne(t))}else au(t,e,a,Ne(t))}catch($){au(t,e,{then:function(){},status:"rejected",reason:$},Ne())}finally{G.p=i,r!==null&&s.types!==null&&(r.types=s.types),C.T=r}}function hv(){}function _r(t,e,l,a){if(t.tag!==5)throw Error(o(476));var u=vd(t).queue;md(t,u,e,X,l===null?hv:function(){return bd(t),l(a)})}function vd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:X},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bd(t){var e=vd(t);e.next===null&&(e=t.alternate.memoizedState),au(t,e.next.queue,{},Ne())}function Rr(){return se(Au)}function yd(){return It().memoizedState}function gd(){return It().memoizedState}function pv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ne();t=jl(l);var a=Ll(e,t,l);a!==null&&(ze(a,e,l),In(a,e,l)),e={cache:cr()},t.payload=e;return}e=e.return}}function mv(t,e,l){var a=Ne();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bi(t)?Sd(e,l):(l=Wc(t,e,l,a),l!==null&&(ze(l,t,a),xd(l,e,a)))}function Ad(t,e,l){var a=Ne();au(t,e,l,a)}function au(t,e,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(bi(t))Sd(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,s=i(r,l);if(u.hasEagerState=!0,u.eagerState=s,Ce(s,r))return Fu(t,e,u,0),Gt===null&&Wu(),!1}catch{}if(l=Wc(t,e,u,a),l!==null)return ze(l,t,a),xd(l,e,a),!0}return!1}function Br(t,e,l,a){if(a={lane:2,revertLane:so(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bi(t)){if(e)throw Error(o(479))}else e=Wc(t,l,a,2),e!==null&&ze(e,t,2)}function bi(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Sd(t,e){un=fi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function xd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Of(t,l)}}var nu={readContext:se,use:hi,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};nu.useEffectEvent=Kt;var Ed={readContext:se,use:hi,useCallback:function(t,e){return be().memoizedState=[t,e===void 0?null:e],t},useContext:se,useEffect:id,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,mi(4194308,4,fd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return mi(4194308,4,t,e)},useInsertionEffect:function(t,e){mi(4,2,t,e)},useMemo:function(t,e){var l=be();e=e===void 0?null:e;var a=t();if(Ea){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=be();if(l!==void 0){var u=l(e);if(Ea){wl(!0);try{l(e)}finally{wl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=mv.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=be();return t={current:t},e.memoizedState=t},useState:function(t){t=Dr(t);var e=t.queue,l=Ad.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Mr,useDeferredValue:function(t,e){var l=be();return wr(l,t,e)},useTransition:function(){var t=Dr(!1);return t=md.bind(null,vt,t.queue,!0,!1),be().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,u=be();if(Dt){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),Gt===null)throw Error(o(349));(Tt&127)!==0||ks(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,id(Vs.bind(null,a,i,t),[t]),a.flags|=2048,rn(9,{destroy:void 0},Xs.bind(null,a,i,l,e),null),l},useId:function(){var t=be(),e=Gt.identifierPrefix;if(Dt){var l=nl,a=al;l=(a&~(1<<32-Oe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=si++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=rv++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rr,useFormState:ed,useActionState:ed,useOptimistic:function(t){var e=be();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Br.bind(null,vt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Er,useCacheRefresh:function(){return be().memoizedState=pv.bind(null,vt)},useEffectEvent:function(t){var e=be(),l={impl:t};return e.memoizedState=l,function(){if((Bt&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Nr={readContext:se,use:hi,useCallback:dd,useContext:se,useEffect:Cr,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:od,useMemo:hd,useReducer:pi,useRef:ud,useState:function(){return pi(yl)},useDebugValue:Mr,useDeferredValue:function(t,e){var l=It();return pd(l,Qt.memoizedState,t,e)},useTransition:function(){var t=pi(yl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:lu(t),e]},useSyncExternalStore:Gs,useId:yd,useHostTransitionStatus:Rr,useFormState:ld,useActionState:ld,useOptimistic:function(t,e){var l=It();return Js(l,Qt,t,e)},useMemoCache:Er,useCacheRefresh:gd};Nr.useEffectEvent=cd;var Td={readContext:se,use:hi,useCallback:dd,useContext:se,useEffect:Cr,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:od,useMemo:hd,useReducer:zr,useRef:ud,useState:function(){return zr(yl)},useDebugValue:Mr,useDeferredValue:function(t,e){var l=It();return Qt===null?wr(l,t,e):pd(l,Qt.memoizedState,t,e)},useTransition:function(){var t=zr(yl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:lu(t),e]},useSyncExternalStore:Gs,useId:yd,useHostTransitionStatus:Rr,useFormState:nd,useActionState:nd,useOptimistic:function(t,e){var l=It();return Qt!==null?Js(l,Qt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Er,useCacheRefresh:gd};Td.useEffectEvent=cd;function Ur(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:A({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=jl(a);u.payload=e,l!=null&&(u.callback=l),e=Ll(t,u,a),e!==null&&(ze(e,t,a),In(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=jl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Ll(t,u,a),e!==null&&(ze(e,t,a),In(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ne(),a=jl(l);a.tag=2,e!=null&&(a.callback=e),e=Ll(t,a,l),e!==null&&(ze(e,t,l),In(e,t,l))}};function zd(t,e,l,a,u,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,r):e.prototype&&e.prototype.isPureReactComponent?!kn(l,a)||!kn(u,i):!0}function Dd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Hr.enqueueReplaceState(e,e.state,null)}function Ta(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=A({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function Od(t){Ju(t)}function Cd(t){console.error(t)}function Md(t){Ju(t)}function yi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function wd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $r(t,e,l){return l=jl(l),l.tag=3,l.payload={element:null},l.callback=function(){yi(t,e)},l}function _d(t){return t=jl(t),t.tag=3,t}function Rd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){wd(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){wd(e,l,a),typeof u!="function"&&(Xl===null?Xl=new Set([this]):Xl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function vv(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Pa(e,l,u,!0),l=we.current,l!==null){switch(l.tag){case 31:case 13:return ke===null?wi():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ui?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),ro(t,a,u)),!1;case 22:return l.flags|=65536,a===ui?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),ro(t,a,u)),!1}throw Error(o(435,l.tag))}return ro(t,a,u),wi(),!1}if(Dt)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==lr&&(t=Error(o(422),{cause:a}),Zn(Qe(t,l)))):(a!==lr&&(e=Error(o(423),{cause:a}),Zn(Qe(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Qe(a,l),u=$r(t.stateNode,a,u),hr(t,u),Jt!==4&&(Jt=2)),!1;var i=Error(o(520),{cause:a});if(i=Qe(i,l),du===null?du=[i]:du.push(i),Jt!==4&&(Jt=2),e===null)return!0;a=Qe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=$r(l.stateNode,a,t),hr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xl===null||!Xl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=_d(u),Rd(u,t,l,a),hr(l,u),!1}l=l.return}while(l!==null);return!1}var jr=Error(o(461)),ee=!1;function de(t,e,l,a){e.child=t===null?Hs(e,null,l,a):xa(e,t.child,l,a)}function Bd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}else r=a;return ya(e),a=gr(t,e,l,r,i,u),s=Ar(),t!==null&&!ee?(Sr(t,e,u),gl(t,e,u)):(Dt&&s&&tr(e),e.flags|=1,de(t,e,a,u),e.child)}function Nd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Fc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Ud(t,e,i,a,u)):(t=Pu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Vr(t,u)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:kn,l(r,a)&&t.ref===e.ref)return gl(t,e,u)}return e.flags|=1,t=hl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Ud(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(kn(i,a)&&t.ref===e.ref)if(ee=!1,e.pendingProps=a=i,Vr(t,u))(t.flags&131072)!==0&&(ee=!0);else return e.lanes=t.lanes,gl(t,e,u)}return Lr(t,e,l,a,u)}function Hd(t,e,l,a){var u=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~i}else a=0,e.child=null;return $d(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ai(e,i!==null?i.cachePool:null),i!==null?Ls(e,i):mr(),Qs(e);else return a=e.lanes=536870912,$d(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ai(e,i.cachePool),Ls(e,i),ql(),e.memoizedState=null):(t!==null&&ai(e,null),mr(),ql());return de(t,e,u,l),e.child}function uu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function $d(t,e,l,a,u){var i=or();return i=i===null?null:{parent:Pt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ai(e,null),mr(),Qs(e),t!==null&&Pa(t,e,a,!0),e.childLanes=u,null}function gi(t,e){return e=Si({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function jd(t,e,l){return xa(e,t.child,null,l),t=gi(e,e.pendingProps),t.flags|=2,_e(e),e.memoizedState=null,t}function bv(t,e,l){var a=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Dt){if(a.mode==="hidden")return t=gi(e,a),e.lanes=536870912,uu(null,t);if(br(e),(t=kt)?(t=W0(t,Ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bl!==null?{id:al,overflow:nl}:null,retryLane:536870912,hydrationErrors:null},l=Ss(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw Ul(e);return e.lanes=536870912,null}return gi(e,a)}var i=t.memoizedState;if(i!==null){var r=i.dehydrated;if(br(e),u)if(e.flags&256)e.flags&=-257,e=jd(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(ee||Pa(t,e,l,!1),u=(l&t.childLanes)!==0,ee||u){if(a=Gt,a!==null&&(r=Cf(a,l),r!==0&&r!==i.retryLane))throw i.retryLane=r,pa(t,r),ze(a,t,r),jr;wi(),e=jd(t,e,l)}else t=i.treeContext,kt=Xe(r.nextSibling),fe=e,Dt=!0,Nl=null,Ge=!1,t!==null&&Ts(e,t),e=gi(e,a),e.flags|=4096;return e}return t=hl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Lr(t,e,l,a,u){return ya(e),l=gr(t,e,l,a,void 0,u),a=Ar(),t!==null&&!ee?(Sr(t,e,u),gl(t,e,u)):(Dt&&a&&tr(e),e.flags|=1,de(t,e,l,u),e.child)}function Ld(t,e,l,a,u,i){return ya(e),e.updateQueue=null,l=Ys(e,a,l,u),qs(t),a=Ar(),t!==null&&!ee?(Sr(t,e,i),gl(t,e,i)):(Dt&&a&&tr(e),e.flags|=1,de(t,e,l,i),e.child)}function Qd(t,e,l,a,u){if(ya(e),e.stateNode===null){var i=Ja,r=l.contextType;typeof r=="object"&&r!==null&&(i=se(r)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},sr(e),r=l.contextType,i.context=typeof r=="object"&&r!==null?se(r):Ja,i.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(Ur(e,l,r,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Hr.enqueueReplaceState(i,i.state,null),tu(e,a,i,u),Pn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=Ta(l,s);i.props=h;var E=i.context,_=l.contextType;r=Ja,typeof _=="object"&&_!==null&&(r=se(_));var $=l.getDerivedStateFromProps;_=typeof $=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||E!==r)&&Dd(e,i,a,r),$l=!1;var T=e.memoizedState;i.state=T,tu(e,a,i,u),Pn(),E=e.memoizedState,s||T!==E||$l?(typeof $=="function"&&(Ur(e,l,$,a),E=e.memoizedState),(h=$l||zd(e,l,h,a,T,E,r))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=r,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,dr(t,e),r=e.memoizedProps,_=Ta(l,r),i.props=_,$=e.pendingProps,T=i.context,E=l.contextType,h=Ja,typeof E=="object"&&E!==null&&(h=se(E)),s=l.getDerivedStateFromProps,(E=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==$||T!==h)&&Dd(e,i,a,h),$l=!1,T=e.memoizedState,i.state=T,tu(e,a,i,u),Pn();var O=e.memoizedState;r!==$||T!==O||$l||t!==null&&t.dependencies!==null&&ei(t.dependencies)?(typeof s=="function"&&(Ur(e,l,s,a),O=e.memoizedState),(_=$l||zd(e,l,_,a,T,O,h)||t!==null&&t.dependencies!==null&&ei(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),i.props=a,i.state=O,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ai(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=xa(e,t.child,null,u),e.child=xa(e,null,l,u)):de(t,e,l,u),e.memoizedState=i.state,t=e.child):t=gl(t,e,u),t}function qd(t,e,l,a){return va(),e.flags|=256,de(t,e,l,a),e.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(t){return{baseLanes:t,cachePool:ws()}}function Yr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Be),t}function Yd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),r&&(u=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Dt){if(u?Ql(e):ql(),(t=kt)?(t=W0(t,Ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bl!==null?{id:al,overflow:nl}:null,retryLane:536870912,hydrationErrors:null},l=Ss(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw Ul(e);return zo(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,u?(ql(),u=e.mode,s=Si({mode:"hidden",children:s},u),a=ma(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=qr(l),a.childLanes=Yr(t,r,l),e.memoizedState=Qr,uu(null,a)):(Ql(e),Gr(e,s))}var h=t.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(Ql(e),e.flags&=-257,e=kr(t,e,l)):e.memoizedState!==null?(ql(),e.child=t.child,e.flags|=128,e=null):(ql(),s=a.fallback,u=e.mode,a=Si({mode:"visible",children:a.children},u),s=ma(s,u,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,xa(e,t.child,null,l),a=e.child,a.memoizedState=qr(l),a.childLanes=Yr(t,r,l),e.memoizedState=Qr,e=uu(null,a));else if(Ql(e),zo(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var E=r.dgst;r=E,a=Error(o(419)),a.stack="",a.digest=r,Zn({value:a,source:null,stack:null}),e=kr(t,e,l)}else if(ee||Pa(t,e,l,!1),r=(l&t.childLanes)!==0,ee||r){if(r=Gt,r!==null&&(a=Cf(r,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,pa(t,a),ze(r,t,a),jr;To(s)||wi(),e=kr(t,e,l)}else To(s)?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,kt=Xe(s.nextSibling),fe=e,Dt=!0,Nl=null,Ge=!1,t!==null&&Ts(e,t),e=Gr(e,a.children),e.flags|=4096);return e}return u?(ql(),s=a.fallback,u=e.mode,h=t.child,E=h.sibling,a=hl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,E!==null?s=hl(E,s):(s=ma(s,u,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,uu(null,a),a=e.child,s=t.child.memoizedState,s===null?s=qr(l):(u=s.cachePool,u!==null?(h=Pt._currentValue,u=u.parent!==h?{parent:h,pool:h}:u):u=ws(),s={baseLanes:s.baseLanes|l,cachePool:u}),a.memoizedState=s,a.childLanes=Yr(t,r,l),e.memoizedState=Qr,uu(t.child,a)):(Ql(e),l=t.child,t=l.sibling,l=hl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function Gr(t,e){return e=Si({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Si(t,e){return t=Me(22,t,null,e),t.lanes=0,t}function kr(t,e,l){return xa(e,t.child,null,l),t=Gr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ur(t.return,e,l)}function Xr(t,e,l,a,u,i){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:i}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=l,r.tailMode=u,r.treeForkCount=i)}function kd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;a=a.children;var r=Ft.current,s=(r&2)!==0;if(s?(r=r&1|2,e.flags|=128):r&=1,H(Ft,r),de(t,e,a,l),a=Dt?Vn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gd(t,l,e);else if(t.tag===19)Gd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&oi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),Xr(e,!1,u,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&oi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}Xr(e,!0,l,null,i,a);break;case"together":Xr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function gl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),kl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Pa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=hl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=hl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Vr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ei(t)))}function yv(t,e,l){switch(e.tag){case 3:Ct(e,e.stateNode.containerInfo),Hl(e,Pt,t.memoizedState.cache),va();break;case 27:case 5:ot(e);break;case 4:Ct(e,e.stateNode.containerInfo);break;case 10:Hl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,br(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Ql(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Yd(t,e,l):(Ql(e),t=gl(t,e,l),t!==null?t.sibling:null);Ql(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Pa(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return kd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Ft,Ft.current),a)break;return null;case 22:return e.lanes=0,Hd(t,e,l,e.pendingProps);case 24:Hl(e,Pt,t.memoizedState.cache)}return gl(t,e,l)}function Xd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ee=!0;else{if(!Vr(t,l)&&(e.flags&128)===0)return ee=!1,yv(t,e,l);ee=(t.flags&131072)!==0}else ee=!1,Dt&&(e.flags&1048576)!==0&&Es(e,Vn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Aa(e.elementType),e.type=t,typeof t=="function")Fc(t)?(a=Ta(t,a),e.tag=1,e=Qd(null,e,t,a,l)):(e.tag=0,e=Lr(null,e,t,a,l));else{if(t!=null){var u=t.$$typeof;if(u===J){e.tag=11,e=Bd(null,e,t,a,l);break t}else if(u===R){e.tag=14,e=Nd(null,e,t,a,l);break t}}throw e=Mt(t)||t,Error(o(306,e,""))}}return e;case 0:return Lr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=Ta(a,e.pendingProps),Qd(t,e,a,u,l);case 3:t:{if(Ct(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,dr(t,e),tu(e,a,null,l);var r=e.memoizedState;if(a=r.cache,Hl(e,Pt,a),a!==i.cache&&ir(e,[Pt],l,!0),Pn(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=qd(t,e,a,l);break t}else if(a!==u){u=Qe(Error(o(424)),e),Zn(u),e=qd(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,kt=Xe(t.firstChild),fe=e,Dt=!0,Nl=null,Ge=!0,l=Hs(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(va(),a===u){e=gl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return Ai(t,e),t===null?(l=lh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Dt||(l=e.type,t=e.pendingProps,a=$i(tt.current).createElement(l),a[oe]=e,a[ge]=t,he(a,l,t),ie(a),e.stateNode=a):e.memoizedState=lh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ot(e),t===null&&Dt&&(a=e.stateNode=P0(e.type,e.pendingProps,tt.current),fe=e,Ge=!0,u=kt,Jl(e.type)?(Do=u,kt=Xe(a.firstChild)):kt=u),de(t,e,e.pendingProps.children,l),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Dt&&((u=a=kt)&&(a=Kv(a,e.type,e.pendingProps,Ge),a!==null?(e.stateNode=a,fe=e,kt=Xe(a.firstChild),Ge=!1,u=!0):u=!1),u||Ul(e)),ot(e),u=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,a=i.children,So(u,i)?a=null:r!==null&&So(u,r)&&(e.flags|=32),e.memoizedState!==null&&(u=gr(t,e,ov,null,null,l),Au._currentValue=u),Ai(t,e),de(t,e,a,l),e.child;case 6:return t===null&&Dt&&((t=l=kt)&&(l=Jv(l,e.pendingProps,Ge),l!==null?(e.stateNode=l,fe=e,kt=null,t=!0):t=!1),t||Ul(e)),null;case 13:return Yd(t,e,l);case 4:return Ct(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=xa(e,null,a,l):de(t,e,a,l),e.child;case 11:return Bd(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Hl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,ya(e),u=se(u),a=a(u),e.flags|=1,de(t,e,a,l),e.child;case 14:return Nd(t,e,e.type,e.pendingProps,l);case 15:return Ud(t,e,e.type,e.pendingProps,l);case 19:return kd(t,e,l);case 31:return bv(t,e,l);case 22:return Hd(t,e,l,e.pendingProps);case 24:return ya(e),a=se(Pt),t===null?(u=or(),u===null&&(u=Gt,i=cr(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},sr(e),Hl(e,Pt,u)):((t.lanes&l)!==0&&(dr(t,e),tu(e,null,null,l),Pn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Hl(e,Pt,a)):(a=i.cache,Hl(e,Pt,a),a!==u.cache&&ir(e,[Pt],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Al(t){t.flags|=4}function Zr(t,e,l,a,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw Sa=ui,fr}else t.flags&=-16777217}function Vd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ch(e))if(y0())t.flags|=8192;else throw Sa=ui,fr}function xi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zf():536870912,t.lanes|=e,dn|=e)}function iu(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function gv(t,e,l){var a=e.pendingProps;switch(er(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return Xt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),vl(Pt),j(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?Al(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ar())),Xt(e),null;case 26:var u=e.type,i=e.memoizedState;return t===null?(Al(e),i!==null?(Xt(e),Vd(e,i)):(Xt(e),Zr(e,u,null,a,l))):i?i!==t.memoizedState?(Al(e),Xt(e),Vd(e,i)):(Xt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Al(e),Xt(e),Zr(e,u,t,a,l)),null;case 27:if(mt(e),l=tt.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}t=Q.current,Ia(e)?zs(e):(t=P0(u,a,l),e.stateNode=t,Al(e))}return Xt(e),null;case 5:if(mt(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}if(i=Q.current,Ia(e))zs(e);else{var r=$i(tt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(u,{is:a.is}):r.createElement(u)}}i[oe]=e,i[ge]=a;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=i;t:switch(he(i,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Al(e)}}return Xt(e),Zr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=tt.current,Ia(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=fe,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[oe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Y0(t.nodeValue,l)),t||Ul(e,!0)}else t=$i(t).createTextNode(a),t[oe]=e,e.stateNode=t}return Xt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Ia(e),l!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[oe]=e}else va(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),t=!1}else l=ar(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(_e(e),e):(_e(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Xt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[oe]=e}else va(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),u=!1}else u=ar(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(_e(e),e):(_e(e),null)}return _e(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),xi(e,e.updateQueue),Xt(e),null);case 4:return j(),t===null&&vo(e.stateNode.containerInfo),Xt(e),null;case 10:return vl(e.type),Xt(e),null;case 19:if(M(Ft),a=e.memoizedState,a===null)return Xt(e),null;if(u=(e.flags&128)!==0,i=a.rendering,i===null)if(u)iu(a,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=oi(t),i!==null){for(e.flags|=128,iu(a,!1),t=i.updateQueue,e.updateQueue=t,xi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)As(l,t),l=l.sibling;return H(Ft,Ft.current&1|2),Dt&&pl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ye()>Oi&&(e.flags|=128,u=!0,iu(a,!1),e.lanes=4194304)}else{if(!u)if(t=oi(i),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,xi(e,t),iu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Dt)return Xt(e),null}else 2*ye()-a.renderingStartTime>Oi&&l!==536870912&&(e.flags|=128,u=!0,iu(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,l=Ft.current,H(Ft,u?l&1|2:l&1),Dt&&pl(e,a.treeForkCount),t):(Xt(e),null);case 22:case 23:return _e(e),vr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),l=e.updateQueue,l!==null&&xi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&M(ga),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),vl(Pt),Xt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Av(t,e){switch(er(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vl(Pt),j(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 31:if(e.memoizedState!==null){if(_e(e),e.alternate===null)throw Error(o(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(_e(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return M(Ft),null;case 4:return j(),null;case 10:return vl(e.type),null;case 22:case 23:return _e(e),vr(),t!==null&&M(ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vl(Pt),null;case 25:return null;default:return null}}function Zd(t,e){switch(er(e),e.tag){case 3:vl(Pt),j();break;case 26:case 27:case 5:mt(e);break;case 4:j();break;case 31:e.memoizedState!==null&&_e(e);break;case 13:_e(e);break;case 19:M(Ft);break;case 10:vl(e.type);break;case 22:case 23:_e(e),vr(),t!==null&&M(ga);break;case 24:vl(Pt)}}function cu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==u)}}catch(s){jt(e,e.return,s)}}function Yl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var r=a.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,u=e;var h=l,E=s;try{E()}catch(_){jt(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){jt(e,e.return,_)}}function Kd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{js(e,l)}catch(a){jt(t,t.return,a)}}}function Jd(t,e,l){l.props=Ta(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){jt(t,e,a)}}function ru(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){jt(t,e,u)}}function ul(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){jt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){jt(t,e,u)}else l.current=null}function Wd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){jt(t,t.return,u)}}function Kr(t,e,l){try{var a=t.stateNode;Yv(a,t.type,l,e),a[ge]=e}catch(u){jt(t,t.return,u)}}function Fd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Jl(t.type)||t.tag===4}function Jr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Jl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=sl));else if(a!==4&&(a===27&&Jl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Wr(t,e,l),t=t.sibling;t!==null;)Wr(t,e,l),t=t.sibling}function Ei(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Jl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ei(t,e,l),t=t.sibling;t!==null;)Ei(t,e,l),t=t.sibling}function Id(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);he(e,a,l),e[oe]=t,e[ge]=l}catch(i){jt(t,t.return,i)}}var Sl=!1,le=!1,Fr=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Sv(t,e){if(t=t.containerInfo,go=ki,t=ss(t),kc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var r=0,s=-1,h=-1,E=0,_=0,$=t,T=null;e:for(;;){for(var O;$!==l||u!==0&&$.nodeType!==3||(s=r+u),$!==i||a!==0&&$.nodeType!==3||(h=r+a),$.nodeType===3&&(r+=$.nodeValue.length),(O=$.firstChild)!==null;)T=$,$=O;for(;;){if($===t)break e;if(T===l&&++E===u&&(s=r),T===i&&++_===a&&(h=r),(O=$.nextSibling)!==null)break;$=T,T=$.parentNode}$=O}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ao={focusedElem:t,selectionRange:l},ki=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){switch(e=ce,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var lt=Ta(l.type,u);t=a.getSnapshotBeforeUpdate(lt,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(ct){jt(l,l.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Eo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function t0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:El(t,l),a&4&&cu(5,l);break;case 1:if(El(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){jt(l,l.return,r)}else{var u=Ta(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){jt(l,l.return,r)}}a&64&&Kd(l),a&512&&ru(l,l.return);break;case 3:if(El(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{js(t,e)}catch(r){jt(l,l.return,r)}}break;case 27:e===null&&a&4&&Id(l);case 26:case 5:El(t,l),e===null&&a&4&&Wd(l),a&512&&ru(l,l.return);break;case 12:El(t,l);break;case 31:El(t,l),a&4&&a0(t,l);break;case 13:El(t,l),a&4&&n0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=wv.bind(null,l),Wv(t,l))));break;case 22:if(a=l.memoizedState!==null||Sl,!a){e=e!==null&&e.memoizedState!==null||le,u=Sl;var i=le;Sl=a,(le=e)&&!i?Tl(t,l,(l.subtreeFlags&8772)!==0):El(t,l),Sl=u,le=i}break;case 30:break;default:El(t,l)}}function e0(t){var e=t.alternate;e!==null&&(t.alternate=null,e0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Se=!1;function xl(t,e,l){for(l=l.child;l!==null;)l0(t,e,l),l=l.sibling}function l0(t,e,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Rn,l)}catch{}switch(l.tag){case 26:le||ul(l,e),xl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:le||ul(l,e);var a=Zt,u=Se;Jl(l.type)&&(Zt=l.stateNode,Se=!1),xl(t,e,l),bu(l.stateNode),Zt=a,Se=u;break;case 5:le||ul(l,e);case 6:if(a=Zt,u=Se,Zt=null,xl(t,e,l),Zt=a,Se=u,Zt!==null)if(Se)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(l.stateNode)}catch(i){jt(l,e,i)}else try{Zt.removeChild(l.stateNode)}catch(i){jt(l,e,i)}break;case 18:Zt!==null&&(Se?(t=Zt,K0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),An(t)):K0(Zt,l.stateNode));break;case 4:a=Zt,u=Se,Zt=l.stateNode.containerInfo,Se=!0,xl(t,e,l),Zt=a,Se=u;break;case 0:case 11:case 14:case 15:Yl(2,l,e),le||Yl(4,l,e),xl(t,e,l);break;case 1:le||(ul(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Jd(l,e,a)),xl(t,e,l);break;case 21:xl(t,e,l);break;case 22:le=(a=le)||l.memoizedState!==null,xl(t,e,l),le=a;break;default:xl(t,e,l)}}function a0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{An(t)}catch(l){jt(e,e.return,l)}}}function n0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{An(t)}catch(l){jt(e,e.return,l)}}function xv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Pd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Pd),e;default:throw Error(o(435,t.tag))}}function Ti(t,e){var l=xv(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var u=_v.bind(null,t,a);a.then(u,u)}})}function xe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,r=e,s=r;t:for(;s!==null;){switch(s.tag){case 27:if(Jl(s.type)){Zt=s.stateNode,Se=!1;break t}break;case 5:Zt=s.stateNode,Se=!1;break t;case 3:case 4:Zt=s.stateNode.containerInfo,Se=!0;break t}s=s.return}if(Zt===null)throw Error(o(160));l0(i,r,u),Zt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)u0(e,t),e=e.sibling}var We=null;function u0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xe(e,t),Ee(t),a&4&&(Yl(3,t,t.return),cu(3,t),Yl(5,t,t.return));break;case 1:xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),a&64&&Sl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=We;if(xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Un]||i[oe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),he(i,a,l),i[oe]=t,ie(i),a=i;break t;case"link":var r=uh("link","href",u).get(a+(l.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;case"meta":if(r=uh("meta","content",u).get(a+(l.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;default:throw Error(o(468,a))}i[oe]=t,ie(i),a=i}t.stateNode=a}else ih(u,t.type,t.stateNode);else t.stateNode=nh(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?ih(u,t.type,t.stateNode):nh(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Kr(t,t.memoizedProps,l.memoizedProps)}break;case 27:xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),l!==null&&a&4&&Kr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),t.flags&32){u=t.stateNode;try{Ya(u,"")}catch(lt){jt(t,t.return,lt)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Kr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Fr=!0);break;case 6:if(xe(e,t),Ee(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(lt){jt(t,t.return,lt)}}break;case 3:if(Qi=null,u=We,We=ji(e.containerInfo),xe(e,t),We=u,Ee(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{An(e.containerInfo)}catch(lt){jt(t,t.return,lt)}Fr&&(Fr=!1,i0(t));break;case 4:a=We,We=ji(t.stateNode.containerInfo),xe(e,t),Ee(t),We=a;break;case 12:xe(e,t),Ee(t);break;case 31:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 13:xe(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Di=ye()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,E=Sl,_=le;if(Sl=E||u,le=_||h,xe(e,t),le=_,Sl=E,Ee(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||Sl||le||za(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=h.stateNode;var $=h.memoizedProps.style,T=$!=null&&$.hasOwnProperty("display")?$.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(lt){jt(h,h.return,lt)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(lt){jt(h,h.return,lt)}}}else if(e.tag===18){if(l===null){h=e;try{var O=h.stateNode;u?J0(O,!0):J0(h.stateNode,!1)}catch(lt){jt(h,h.return,lt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ti(t,l))));break;case 19:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 30:break;case 21:break;default:xe(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Fd(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var u=l.stateNode,i=Jr(t);Ei(t,i,u);break;case 5:var r=l.stateNode;l.flags&32&&(Ya(r,""),l.flags&=-33);var s=Jr(t);Ei(t,s,r);break;case 3:case 4:var h=l.stateNode.containerInfo,E=Jr(t);Wr(t,E,h);break;default:throw Error(o(161))}}catch(_){jt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;i0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function El(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)t0(t,e.alternate,e),e=e.sibling}function za(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yl(4,e,e.return),za(e);break;case 1:ul(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Jd(e,e.return,l),za(e);break;case 27:bu(e.stateNode);case 26:case 5:ul(e,e.return),za(e);break;case 22:e.memoizedState===null&&za(e);break;case 30:za(e);break;default:za(e)}t=t.sibling}}function Tl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:Tl(u,i,l),cu(4,i);break;case 1:if(Tl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){jt(a,a.return,E)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)$s(h[u],s)}catch(E){jt(a,a.return,E)}}l&&r&64&&Kd(i),ru(i,i.return);break;case 27:Id(i);case 26:case 5:Tl(u,i,l),l&&a===null&&r&4&&Wd(i),ru(i,i.return);break;case 12:Tl(u,i,l);break;case 31:Tl(u,i,l),l&&r&4&&a0(u,i);break;case 13:Tl(u,i,l),l&&r&4&&n0(u,i);break;case 22:i.memoizedState===null&&Tl(u,i,l),ru(i,i.return);break;case 30:break;default:Tl(u,i,l)}e=e.sibling}}function Ir(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Kn(l))}function Pr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t))}function Fe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)c0(t,e,l,a),e=e.sibling}function c0(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(t,e,l,a),u&2048&&cu(9,e);break;case 1:Fe(t,e,l,a);break;case 3:Fe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t)));break;case 12:if(u&2048){Fe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){jt(e,e.return,h)}}else Fe(t,e,l,a);break;case 31:Fe(t,e,l,a);break;case 13:Fe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?Fe(t,e,l,a):ou(t,e):i._visibility&2?Fe(t,e,l,a):(i._visibility|=2,on(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Ir(r,e);break;case 24:Fe(t,e,l,a),u&2048&&Pr(e.alternate,e);break;default:Fe(t,e,l,a)}}function on(t,e,l,a,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,r=e,s=l,h=a,E=r.flags;switch(r.tag){case 0:case 11:case 15:on(i,r,s,h,u),cu(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?on(i,r,s,h,u):ou(i,r):(_._visibility|=2,on(i,r,s,h,u)),u&&E&2048&&Ir(r.alternate,r);break;case 24:on(i,r,s,h,u),u&&E&2048&&Pr(r.alternate,r);break;default:on(i,r,s,h,u)}e=e.sibling}}function ou(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:ou(l,a),u&2048&&Ir(a.alternate,a);break;case 24:ou(l,a),u&2048&&Pr(a.alternate,a);break;default:ou(l,a)}e=e.sibling}}var fu=8192;function fn(t,e,l){if(t.subtreeFlags&fu)for(t=t.child;t!==null;)r0(t,e,l),t=t.sibling}function r0(t,e,l){switch(t.tag){case 26:fn(t,e,l),t.flags&fu&&t.memoizedState!==null&&rb(l,We,t.memoizedState,t.memoizedProps);break;case 5:fn(t,e,l);break;case 3:case 4:var a=We;We=ji(t.stateNode.containerInfo),fn(t,e,l),We=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fu,fu=16777216,fn(t,e,l),fu=a):fn(t,e,l));break;default:fn(t,e,l)}}function o0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function su(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,s0(a,t)}o0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)f0(t),t=t.sibling}function f0(t){switch(t.tag){case 0:case 11:case 15:su(t),t.flags&2048&&Yl(9,t,t.return);break;case 3:su(t);break;case 12:su(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zi(t)):su(t);break;default:su(t)}}function zi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,s0(a,t)}o0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yl(8,e,e.return),zi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,zi(e));break;default:zi(e)}t=t.sibling}}function s0(t,e){for(;ce!==null;){var l=ce;switch(l.tag){case 0:case 11:case 15:Yl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ce=a;else t:for(l=t;ce!==null;){a=ce;var u=a.sibling,i=a.return;if(e0(a),a===l){ce=null;break t}if(u!==null){u.return=i,ce=u;break t}ce=i}}}var Ev={getCacheForType:function(t){var e=se(Pt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return se(Pt).controller.signal}},Tv=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Gt=null,xt=null,Tt=0,$t=0,Re=null,Gl=!1,sn=!1,to=!1,zl=0,Jt=0,kl=0,Da=0,eo=0,Be=0,dn=0,du=null,Te=null,lo=!1,Di=0,d0=0,Oi=1/0,Ci=null,Xl=null,ne=0,Vl=null,hn=null,Dl=0,ao=0,no=null,h0=null,hu=0,uo=null;function Ne(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:C.T!==null?so():Mf()}function p0(){if(Be===0)if((Tt&536870912)===0||Dt){var t=Hu;Hu<<=1,(Hu&3932160)===0&&(Hu=262144),Be=t}else Be=536870912;return t=we.current,t!==null&&(t.flags|=32),Be}function ze(t,e,l){(t===Gt&&($t===2||$t===9)||t.cancelPendingCommit!==null)&&(pn(t,0),Zl(t,Tt,Be,!1)),Nn(t,l),((Bt&2)===0||t!==Gt)&&(t===Gt&&((Bt&2)===0&&(Da|=l),Jt===4&&Zl(t,Tt,Be,!1)),il(t))}function m0(t,e,l){if((Bt&6)!==0)throw Error(o(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Bn(t,e),u=a?Ov(t,e):co(t,e,!0),i=a;do{if(u===0){sn&&!a&&Zl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!zv(l)){u=co(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var s=t;u=du;var h=s.current.memoizedState.isDehydrated;if(h&&(pn(s,r).flags|=256),r=co(s,r,!1),r!==2){if(to&&!h){s.errorRecoveryDisabledLanes|=i,Da|=i,u=4;break t}i=Te,Te=u,i!==null&&(Te===null?Te=i:Te.push.apply(Te,i))}u=r}if(i=!1,u!==2)continue}}if(u===1){pn(t,0),Zl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Zl(a,e,Be,!Gl);break t;case 2:Te=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=Di+300-ye(),10<u)){if(Zl(a,e,Be,!Gl),ju(a,0,!0)!==0)break t;Dl=e,a.timeoutHandle=V0(v0.bind(null,a,l,Te,Ci,lo,e,Be,Da,dn,Gl,i,"Throttled",-0,0),u);break t}v0(a,l,Te,Ci,lo,e,Be,Da,dn,Gl,i,null,-0,0)}}break}while(!0);il(t)}function v0(t,e,l,a,u,i,r,s,h,E,_,$,T,O){if(t.timeoutHandle=-1,$=e.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sl},r0(e,i,$);var lt=(i&62914560)===i?Di-ye():(i&4194048)===i?d0-ye():0;if(lt=ob($,lt),lt!==null){Dl=i,t.cancelPendingCommit=lt(T0.bind(null,t,e,i,l,a,u,r,s,h,_,$,null,T,O)),Zl(t,i,r,!E);return}}T0(t,e,i,l,a,u,r,s,h)}function zv(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!Ce(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zl(t,e,l,a){e&=~eo,e&=~Da,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Oe(u),r=1<<i;a[i]=-1,u&=~r}l!==0&&Df(t,l,e)}function Mi(){return(Bt&6)===0?(pu(0),!1):!0}function io(){if(xt!==null){if($t===0)var t=xt.return;else t=xt,ml=ba=null,xr(t),an=null,Wn=0,t=xt;for(;t!==null;)Zd(t.alternate,t),t=t.return;xt=null}}function pn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Xv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Dl=0,io(),Gt=t,xt=l=hl(t.current,null),Tt=e,$t=0,Re=null,Gl=!1,sn=Bn(t,e),to=!1,dn=Be=eo=Da=kl=Jt=0,Te=du=null,lo=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Oe(a),i=1<<u;e|=t[u],a&=~i}return zl=e,Wu(),l}function b0(t,e){vt=null,C.H=nu,e===ln||e===ni?(e=Bs(),$t=3):e===fr?(e=Bs(),$t=4):$t=e===jr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,xt===null&&(Jt=1,yi(t,Qe(e,t.current)))}function y0(){var t=we.current;return t===null?!0:(Tt&4194048)===Tt?ke===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===ke:!1}function g0(){var t=C.H;return C.H=nu,t===null?nu:t}function A0(){var t=C.A;return C.A=Ev,t}function wi(){Jt=4,Gl||(Tt&4194048)!==Tt&&we.current!==null||(sn=!0),(kl&134217727)===0&&(Da&134217727)===0||Gt===null||Zl(Gt,Tt,Be,!1)}function co(t,e,l){var a=Bt;Bt|=2;var u=g0(),i=A0();(Gt!==t||Tt!==e)&&(Ci=null,pn(t,e)),e=!1;var r=Jt;t:do try{if($t!==0&&xt!==null){var s=xt,h=Re;switch($t){case 8:io(),r=6;break t;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var E=$t;if($t=0,Re=null,mn(t,s,h,E),l&&sn){r=0;break t}break;default:E=$t,$t=0,Re=null,mn(t,s,h,E)}}Dv(),r=Jt;break}catch(_){b0(t,_)}while(!0);return e&&t.shellSuspendCounter++,ml=ba=null,Bt=a,C.H=u,C.A=i,xt===null&&(Gt=null,Tt=0,Wu()),r}function Dv(){for(;xt!==null;)S0(xt)}function Ov(t,e){var l=Bt;Bt|=2;var a=g0(),u=A0();Gt!==t||Tt!==e?(Ci=null,Oi=ye()+500,pn(t,e)):sn=Bn(t,e);t:do try{if($t!==0&&xt!==null){e=xt;var i=Re;e:switch($t){case 1:$t=0,Re=null,mn(t,e,i,1);break;case 2:case 9:if(_s(i)){$t=0,Re=null,x0(e);break}e=function(){$t!==2&&$t!==9||Gt!==t||($t=7),il(t)},i.then(e,e);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:_s(i)?($t=0,Re=null,x0(e)):($t=0,Re=null,mn(t,e,i,7));break;case 5:var r=null;switch(xt.tag){case 26:r=xt.memoizedState;case 5:case 27:var s=xt;if(r?ch(r):s.stateNode.complete){$t=0,Re=null;var h=s.sibling;if(h!==null)xt=h;else{var E=s.return;E!==null?(xt=E,_i(E)):xt=null}break e}}$t=0,Re=null,mn(t,e,i,5);break;case 6:$t=0,Re=null,mn(t,e,i,6);break;case 8:io(),Jt=6;break t;default:throw Error(o(462))}}Cv();break}catch(_){b0(t,_)}while(!0);return ml=ba=null,C.H=a,C.A=u,Bt=l,xt!==null?0:(Gt=null,Tt=0,Wu(),Jt)}function Cv(){for(;xt!==null&&!ra();)S0(xt)}function S0(t){var e=Xd(t.alternate,t,zl);t.memoizedProps=t.pendingProps,e===null?_i(t):xt=e}function x0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ld(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Ld(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:xr(e);default:Zd(l,e),e=xt=As(e,zl),e=Xd(l,e,zl)}t.memoizedProps=t.pendingProps,e===null?_i(t):xt=e}function mn(t,e,l,a){ml=ba=null,xr(e),an=null,Wn=0;var u=e.return;try{if(vv(t,u,e,l,Tt)){Jt=1,yi(t,Qe(l,t.current)),xt=null;return}}catch(i){if(u!==null)throw xt=u,i;Jt=1,yi(t,Qe(l,t.current)),xt=null;return}e.flags&32768?(Dt||a===1?t=!0:sn||(Tt&536870912)!==0?t=!1:(Gl=t=!0,(a===2||a===9||a===3||a===6)&&(a=we.current,a!==null&&a.tag===13&&(a.flags|=16384))),E0(e,t)):_i(e)}function _i(t){var e=t;do{if((e.flags&32768)!==0){E0(e,Gl);return}t=e.return;var l=gv(e.alternate,e,zl);if(l!==null){xt=l;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Jt===0&&(Jt=5)}function E0(t,e){do{var l=Av(t.alternate,t);if(l!==null){l.flags&=32767,xt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){xt=t;return}xt=t=l}while(t!==null);Jt=6,xt=null}function T0(t,e,l,a,u,i,r,s,h){t.cancelPendingCommit=null;do Ri();while(ne!==0);if((Bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=Jc,cm(t,l,i,r,s,h),t===Gt&&(xt=Gt=null,Tt=0),hn=e,Vl=t,Dl=l,ao=i,no=u,h0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Rv(Nu,function(){return M0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,u=G.p,G.p=2,r=Bt,Bt|=4;try{Sv(t,e,l)}finally{Bt=r,G.p=u,C.T=a}}ne=1,z0(),D0(),O0()}}function z0(){if(ne===1){ne=0;var t=Vl,e=hn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=G.p;G.p=2;var u=Bt;Bt|=4;try{u0(e,t);var i=Ao,r=ss(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&fs(s.ownerDocument.documentElement,s)){if(h!==null&&kc(s)){var E=h.start,_=h.end;if(_===void 0&&(_=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(_,s.value.length);else{var $=s.ownerDocument||document,T=$&&$.defaultView||window;if(T.getSelection){var O=T.getSelection(),lt=s.textContent.length,ct=Math.min(h.start,lt),Yt=h.end===void 0?ct:Math.min(h.end,lt);!O.extend&&ct>Yt&&(r=Yt,Yt=ct,ct=r);var g=os(s,ct),y=os(s,Yt);if(g&&y&&(O.rangeCount!==1||O.anchorNode!==g.node||O.anchorOffset!==g.offset||O.focusNode!==y.node||O.focusOffset!==y.offset)){var x=$.createRange();x.setStart(g.node,g.offset),O.removeAllRanges(),ct>Yt?(O.addRange(x),O.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),O.addRange(x))}}}}for($=[],O=s;O=O.parentNode;)O.nodeType===1&&$.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<$.length;s++){var B=$[s];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ki=!!go,Ao=go=null}finally{Bt=u,G.p=a,C.T=l}}t.current=e,ne=2}}function D0(){if(ne===2){ne=0;var t=Vl,e=hn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=G.p;G.p=2;var u=Bt;Bt|=4;try{t0(t,e.alternate,e)}finally{Bt=u,G.p=a,C.T=l}}ne=3}}function O0(){if(ne===4||ne===3){ne=0,Bu();var t=Vl,e=hn,l=Dl,a=h0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,hn=Vl=null,C0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xl=null),zc(l),e=e.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Rn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,u=G.p,G.p=2,C.T=null;try{for(var i=t.onRecoverableError,r=0;r<a.length;r++){var s=a[r];i(s.value,{componentStack:s.stack})}}finally{C.T=e,G.p=u}}(Dl&3)!==0&&Ri(),il(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===uo?hu++:(hu=0,uo=t):hu=0,pu(0)}}function C0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Kn(e)))}function Ri(){return z0(),D0(),O0(),M0()}function M0(){if(ne!==5)return!1;var t=Vl,e=ao;ao=0;var l=zc(Dl),a=C.T,u=G.p;try{G.p=32>l?32:l,C.T=null,l=no,no=null;var i=Vl,r=Dl;if(ne=0,hn=Vl=null,Dl=0,(Bt&6)!==0)throw Error(o(331));var s=Bt;if(Bt|=4,f0(i.current),c0(i,i.current,r,l),Bt=s,pu(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Rn,i)}catch{}return!0}finally{G.p=u,C.T=a,C0(t,e)}}function w0(t,e,l){e=Qe(l,e),e=$r(t.stateNode,e,2),t=Ll(t,e,2),t!==null&&(Nn(t,2),il(t))}function jt(t,e,l){if(t.tag===3)w0(t,t,l);else for(;e!==null;){if(e.tag===3){w0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xl===null||!Xl.has(a))){t=Qe(l,t),l=_d(2),a=Ll(e,l,2),a!==null&&(Rd(l,a,e,t),Nn(a,2),il(a));break}}e=e.return}}function ro(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Tv;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(to=!0,u.add(l),t=Mv.bind(null,t,e,l),e.then(t,t))}function Mv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Gt===t&&(Tt&l)===l&&(Jt===4||Jt===3&&(Tt&62914560)===Tt&&300>ye()-Di?(Bt&2)===0&&pn(t,0):eo|=l,dn===Tt&&(dn=0)),il(t)}function _0(t,e){e===0&&(e=zf()),t=pa(t,e),t!==null&&(Nn(t,e),il(t))}function wv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),_0(t,l)}function _v(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),_0(t,l)}function Rv(t,e){return ia(t,e)}var Bi=null,vn=null,oo=!1,Ni=!1,fo=!1,Kl=0;function il(t){t!==vn&&t.next===null&&(vn===null?Bi=vn=t:vn=vn.next=t),Ni=!0,oo||(oo=!0,Nv())}function pu(t,e){if(!fo&&Ni){fo=!0;do for(var l=!1,a=Bi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var r=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Oe(42|t)+1)-1,i&=u&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,U0(a,i))}else i=Tt,i=ju(a,a===Gt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Bn(a,i)||(l=!0,U0(a,i));a=a.next}while(l);fo=!1}}function Bv(){R0()}function R0(){Ni=oo=!1;var t=0;Kl!==0&&kv()&&(t=Kl);for(var e=ye(),l=null,a=Bi;a!==null;){var u=a.next,i=B0(a,e);i===0?(a.next=null,l===null?Bi=u:l.next=u,u===null&&(vn=l)):(l=a,(t!==0||(i&3)!==0)&&(Ni=!0)),a=u}ne!==0&&ne!==5||pu(t),Kl!==0&&(Kl=0)}function B0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-Oe(i),s=1<<r,h=u[r];h===-1?((s&l)===0||(s&a)!==0)&&(u[r]=im(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=Gt,l=Tt,l=ju(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&($t===2||$t===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ca(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Bn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ca(a),zc(l)){case 2:case 8:l=Ef;break;case 32:l=Nu;break;case 268435456:l=Tf;break;default:l=Nu}return a=N0.bind(null,t),l=ia(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ca(a),t.callbackPriority=2,t.callbackNode=null,2}function N0(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ri()&&t.callbackNode!==l)return null;var a=Tt;return a=ju(t,t===Gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(m0(t,a,e),B0(t,ye()),t.callbackNode!=null&&t.callbackNode===l?N0.bind(null,t):null)}function U0(t,e){if(Ri())return null;m0(t,e,!0)}function Nv(){Vv(function(){(Bt&6)!==0?ia(xf,Bv):R0()})}function so(){if(Kl===0){var t=tn;t===0&&(t=Uu,Uu<<=1,(Uu&261888)===0&&(Uu=256)),Kl=t}return Kl}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yu(""+t)}function $0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Uv(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=H0((u[ge]||null).action),r=a.submitter;r&&(e=(e=r[ge]||null)?H0(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var s=new Vu("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kl!==0){var h=r?$0(u,r):new FormData(u);_r(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=r?$0(u,r):new FormData(u),_r(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var ho=0;ho<Kc.length;ho++){var po=Kc[ho],Hv=po.toLowerCase(),$v=po[0].toUpperCase()+po.slice(1);Je(Hv,"on"+$v)}Je(ps,"onAnimationEnd"),Je(ms,"onAnimationIteration"),Je(vs,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(Pm,"onTransitionRun"),Je(tv,"onTransitionStart"),Je(ev,"onTransitionCancel"),Je(bs,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function j0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var r=a.length-1;0<=r;r--){var s=a[r],h=s.instance,E=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(_){Ju(_)}u.currentTarget=null,i=h}else for(r=0;r<a.length;r++){if(s=a[r],h=s.instance,E=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(_){Ju(_)}u.currentTarget=null,i=h}}}}function Et(t,e){var l=e[Dc];l===void 0&&(l=e[Dc]=new Set);var a=t+"__bubble";l.has(a)||(L0(e,t,2,!1),l.add(a))}function mo(t,e,l){var a=0;e&&(a|=4),L0(l,t,a,e)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[Ui]){t[Ui]=!0,Rf.forEach(function(l){l!=="selectionchange"&&(jv.has(l)||mo(l,!1,t),mo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ui]||(e[Ui]=!0,mo("selectionchange",!1,e))}}function L0(t,e,l,a){switch(ph(e)){case 2:var u=db;break;case 8:u=hb;break;default:u=_o}l=u.bind(null,e,l,t),u=void 0,!Uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function bo(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===u)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===u)return;r=r.return}for(;s!==null;){if(r=$a(s),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=i=r;continue t}s=s.parentNode}}a=a.return}kf(function(){var E=i,_=Bc(l),$=[];t:{var T=ys.get(t);if(T!==void 0){var O=Vu,lt=t;switch(t){case"keypress":if(ku(l)===0)break t;case"keydown":case"keyup":O=_m;break;case"focusin":lt="focus",O=Lc;break;case"focusout":lt="blur",O=Lc;break;case"beforeblur":case"afterblur":O=Lc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Nm;break;case ps:case ms:case vs:O=xm;break;case bs:O=Hm;break;case"scroll":case"scrollend":O=bm;break;case"wheel":O=jm;break;case"copy":case"cut":case"paste":O=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Jf;break;case"toggle":case"beforetoggle":O=Qm}var ct=(e&4)!==0,Yt=!ct&&(t==="scroll"||t==="scrollend"),g=ct?T!==null?T+"Capture":null:T;ct=[];for(var y=E,x;y!==null;){var B=y;if(x=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||x===null||g===null||(B=$n(y,g),B!=null&&ct.push(vu(y,B,x))),Yt)break;y=y.return}0<ct.length&&(T=new O(T,lt,null,l,_),$.push({event:T,listeners:ct}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",T&&l!==Rc&&(lt=l.relatedTarget||l.fromElement)&&($a(lt)||lt[Ha]))break t;if((O||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,O?(lt=l.relatedTarget||l.toElement,O=E,lt=lt?$a(lt):null,lt!==null&&(Yt=p(lt),ct=lt.tag,lt!==Yt||ct!==5&&ct!==27&&ct!==6)&&(lt=null)):(O=null,lt=E),O!==lt)){if(ct=Zf,B="onMouseLeave",g="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Jf,B="onPointerLeave",g="onPointerEnter",y="pointer"),Yt=O==null?T:Hn(O),x=lt==null?T:Hn(lt),T=new ct(B,y+"leave",O,l,_),T.target=Yt,T.relatedTarget=x,B=null,$a(_)===E&&(ct=new ct(g,y+"enter",lt,l,_),ct.target=x,ct.relatedTarget=Yt,B=ct),Yt=B,O&&lt)e:{for(ct=Lv,g=O,y=lt,x=0,B=g;B;B=ct(B))x++;B=0;for(var it=y;it;it=ct(it))B++;for(;0<x-B;)g=ct(g),x--;for(;0<B-x;)y=ct(y),B--;for(;x--;){if(g===y||y!==null&&g===y.alternate){ct=g;break e}g=ct(g),y=ct(y)}ct=null}else ct=null;O!==null&&Q0($,T,O,ct,!1),lt!==null&&Yt!==null&&Q0($,Yt,lt,ct,!0)}}t:{if(T=E?Hn(E):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var wt=as;else if(es(T))if(ns)wt=Wm;else{wt=Km;var nt=Zm}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&_c(E.elementType)&&(wt=as):wt=Jm;if(wt&&(wt=wt(t,E))){ls($,wt,l,_);break t}nt&&nt(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&wc(T,"number",T.value)}switch(nt=E?Hn(E):window,t){case"focusin":(es(nt)||nt.contentEditable==="true")&&(Va=nt,Xc=E,Xn=null);break;case"focusout":Xn=Xc=Va=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,ds($,l,_);break;case"selectionchange":if(Im)break;case"keydown":case"keyup":ds($,l,_)}var bt;if(qc)t:{switch(t){case"compositionstart":var zt="onCompositionStart";break t;case"compositionend":zt="onCompositionEnd";break t;case"compositionupdate":zt="onCompositionUpdate";break t}zt=void 0}else Xa?Pf(t,l)&&(zt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(zt="onCompositionStart");zt&&(Wf&&l.locale!=="ko"&&(Xa||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Xa&&(bt=Xf()):(Rl=_,Hc="value"in Rl?Rl.value:Rl.textContent,Xa=!0)),nt=Hi(E,zt),0<nt.length&&(zt=new Kf(zt,t,null,l,_),$.push({event:zt,listeners:nt}),bt?zt.data=bt:(bt=ts(l),bt!==null&&(zt.data=bt)))),(bt=Ym?Gm(t,l):km(t,l))&&(zt=Hi(E,"onBeforeInput"),0<zt.length&&(nt=new Kf("onBeforeInput","beforeinput",null,l,_),$.push({event:nt,listeners:zt}),nt.data=bt)),Uv($,t,E,l,_)}j0($,e)})}function vu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Hi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=$n(t,l),u!=null&&a.unshift(vu(t,u,i)),u=$n(t,e),u!=null&&a.push(vu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function Lv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,e,l,a,u){for(var i=e._reactName,r=[];l!==null&&l!==a;){var s=l,h=s.alternate,E=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||E===null||(h=E,u?(E=$n(l,i),E!=null&&r.unshift(vu(l,E,h))):u||(E=$n(l,i),E!=null&&r.push(vu(l,E,h)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var Qv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(qv,"")}function Y0(t,e){return e=q0(e),q0(t)===e}function qt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ya(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ya(t,""+a);break;case"className":Qu(t,"class",a);break;case"tabIndex":Qu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(t,l,a);break;case"style":Yf(t,a,i);break;case"data":if(e!=="object"){Qu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&qt(t,e,"name",u.name,u,null),qt(t,e,"formEncType",u.formEncType,u,null),qt(t,e,"formMethod",u.formMethod,u,null),qt(t,e,"formTarget",u.formTarget,u,null)):(qt(t,e,"encType",u.encType,u,null),qt(t,e,"method",u.method,u,null),qt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=sl);break;case"onScroll":a!=null&&Et("scroll",t);break;case"onScrollEnd":a!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Lu(t,"popover",a);break;case"xlinkActuate":fl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Lu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=mm.get(l)||l,Lu(t,l,a))}}function yo(t,e,l,a,u,i){switch(l){case"style":Yf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ya(t,a):(typeof a=="number"||typeof a=="bigint")&&Ya(t,""+a);break;case"onScroll":a!=null&&Et("scroll",t);break;case"onScrollEnd":a!=null&&Et("scrollend",t);break;case"onClick":a!=null&&(t.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ge]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Lu(t,l,a)}}}function he(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:qt(t,e,i,r,l,null)}}u&&qt(t,e,"srcSet",l.srcSet,l,null),a&&qt(t,e,"src",l.src,l,null);return;case"input":Et("invalid",t);var s=i=r=u=null,h=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":r=_;break;case"checked":h=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:qt(t,e,a,_,l,null)}}jf(t,i,s,h,E,r,u,!1);return;case"select":Et("invalid",t),a=r=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":a=s;default:qt(t,e,u,s,l,null)}e=i,l=r,t.multiple=!!a,e!=null?qa(t,!!a,e,!1):l!=null&&qa(t,!!a,l,!0);return;case"textarea":Et("invalid",t),i=u=a=null;for(r in l)if(l.hasOwnProperty(r)&&(s=l[r],s!=null))switch(r){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:qt(t,e,r,s,l,null)}Qf(t,a,u,i);return;case"option":for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null)&&(h==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":qt(t,e,h,a,l,null));return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(a=0;a<mu.length;a++)Et(mu[a],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:qt(t,e,E,a,l,null)}return;default:if(_c(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&yo(t,e,_,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&qt(t,e,s,a,l,null))}function Yv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,r=null,s=null,h=null,E=null,_=null;for(O in l){var $=l[O];if(l.hasOwnProperty(O)&&$!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":h=$;default:a.hasOwnProperty(O)||qt(t,e,O,null,a,$)}}for(var T in a){var O=a[T];if($=l[T],a.hasOwnProperty(T)&&(O!=null||$!=null))switch(T){case"type":i=O;break;case"name":u=O;break;case"checked":E=O;break;case"defaultChecked":_=O;break;case"value":r=O;break;case"defaultValue":s=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));break;default:O!==$&&qt(t,e,T,O,a,$)}}Mc(t,r,s,h,E,_,i,u);return;case"select":O=r=s=T=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":O=h;default:a.hasOwnProperty(i)||qt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==h&&qt(t,e,u,i,a,h)}e=s,l=r,a=O,T!=null?qa(t,!!l,T,!1):!!a!=!!l&&(e!=null?qa(t,!!l,e,!0):qa(t,!!l,l?[]:"",!1));return;case"textarea":O=T=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:qt(t,e,s,null,a,u)}for(r in a)if(u=a[r],i=l[r],a.hasOwnProperty(r)&&(u!=null||i!=null))switch(r){case"value":T=u;break;case"defaultValue":O=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==i&&qt(t,e,r,u,a,i)}Lf(t,T,O);return;case"option":for(var lt in l)T=l[lt],l.hasOwnProperty(lt)&&T!=null&&!a.hasOwnProperty(lt)&&(lt==="selected"?t.selected=!1:qt(t,e,lt,null,a,T));for(h in a)T=a[h],O=l[h],a.hasOwnProperty(h)&&T!==O&&(T!=null||O!=null)&&(h==="selected"?t.selected=T&&typeof T!="function"&&typeof T!="symbol":qt(t,e,h,T,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in l)T=l[ct],l.hasOwnProperty(ct)&&T!=null&&!a.hasOwnProperty(ct)&&qt(t,e,ct,null,a,T);for(E in a)if(T=a[E],O=l[E],a.hasOwnProperty(E)&&T!==O&&(T!=null||O!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:qt(t,e,E,T,a,O)}return;default:if(_c(e)){for(var Yt in l)T=l[Yt],l.hasOwnProperty(Yt)&&T!==void 0&&!a.hasOwnProperty(Yt)&&yo(t,e,Yt,void 0,a,T);for(_ in a)T=a[_],O=l[_],!a.hasOwnProperty(_)||T===O||T===void 0&&O===void 0||yo(t,e,_,T,a,O);return}}for(var g in l)T=l[g],l.hasOwnProperty(g)&&T!=null&&!a.hasOwnProperty(g)&&qt(t,e,g,null,a,T);for($ in a)T=a[$],O=l[$],!a.hasOwnProperty($)||T===O||T==null&&O==null||qt(t,e,$,T,a,O)}function G0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],i=u.transferSize,r=u.initiatorType,s=u.duration;if(i&&s&&G0(r)){for(r=0,s=u.responseEnd,a+=1;a<l.length;a++){var h=l[a],E=h.startTime;if(E>s)break;var _=h.transferSize,$=h.initiatorType;_&&G0($)&&(h=h.responseEnd,r+=_*(h<s?1:(s-E)/(h-E)))}if(--a,e+=8*(i+r)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var go=null,Ao=null;function $i(t){return t.nodeType===9?t:t.ownerDocument}function k0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function So(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xo=null;function kv(){var t=window.event;return t&&t.type==="popstate"?t===xo?!1:(xo=t,!0):(xo=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(Zv)}:V0;function Zv(t){setTimeout(function(){throw t})}function Jl(t){return t==="head"}function K0(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(u),An(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")bu(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,bu(l);for(var i=l.firstChild;i;){var r=i.nextSibling,s=i.nodeName;i[Un]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=r}}else l==="body"&&bu(t.ownerDocument.body);l=u}while(l);An(e)}function J0(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Eo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Eo(l),Oc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Kv(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Un])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function Jv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Xe(t.nextSibling),t===null))return null;return t}function W0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Xe(t.nextSibling),t===null))return null;return t}function To(t){return t.data==="$?"||t.data==="$~"}function zo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wv(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Do=null;function F0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Xe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function I0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function P0(t,e,l){switch(e=$i(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function bu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oc(t)}var Ve=new Map,th=new Set;function ji(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ol=G.d;G.d={f:Fv,r:Iv,D:Pv,C:tb,L:eb,m:lb,X:nb,S:ab,M:ub};function Fv(){var t=Ol.f(),e=Mi();return t||e}function Iv(t){var e=ja(t);e!==null&&e.tag===5&&e.type==="form"?bd(e):Ol.r(t)}var bn=typeof document>"u"?null:document;function eh(t,e,l){var a=bn;if(a&&typeof e=="string"&&e){var u=je(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),th.has(u)||(th.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function Pv(t){Ol.D(t),eh("dns-prefetch",t,null)}function tb(t,e){Ol.C(t,e),eh("preconnect",t,e)}function eb(t,e,l){Ol.L(t,e,l);var a=bn;if(a&&t&&e){var u='link[rel="preload"][as="'+je(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+je(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+je(l.imageSizes)+'"]')):u+='[href="'+je(t)+'"]';var i=u;switch(e){case"style":i=yn(t);break;case"script":i=gn(t)}Ve.has(i)||(t=A({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ve.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(yu(i))||e==="script"&&a.querySelector(gu(i))||(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function lb(t,e){Ol.m(t,e);var l=bn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+je(a)+'"][href="'+je(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=gn(t)}if(!Ve.has(i)&&(t=A({rel:"modulepreload",href:t},e),Ve.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gu(i)))return}a=l.createElement("link"),he(a,"link",t),ie(a),l.head.appendChild(a)}}}function ab(t,e,l){Ol.S(t,e,l);var a=bn;if(a&&t){var u=La(a).hoistableStyles,i=yn(t);e=e||"default";var r=u.get(i);if(!r){var s={loading:0,preload:null};if(r=a.querySelector(yu(i)))s.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ve.get(i))&&Oo(t,l);var h=r=a.createElement("link");ie(h),he(h,"link",t),h._p=new Promise(function(E,_){h.onload=E,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:s},u.set(i,r)}}}function nb(t,e){Ol.X(t,e);var l=bn;if(l&&t){var a=La(l).hoistableScripts,u=gn(t),i=a.get(u);i||(i=l.querySelector(gu(u)),i||(t=A({src:t,async:!0},e),(e=Ve.get(u))&&Co(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function ub(t,e){Ol.M(t,e);var l=bn;if(l&&t){var a=La(l).hoistableScripts,u=gn(t),i=a.get(u);i||(i=l.querySelector(gu(u)),i||(t=A({src:t,async:!0,type:"module"},e),(e=Ve.get(u))&&Co(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function lh(t,e,l,a){var u=(u=tt.current)?ji(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=yn(l.href),l=La(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=yn(l.href);var i=La(u).hoistableStyles,r=i.get(t);if(r||(u=u.ownerDocument||u,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=u.querySelector(yu(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ve.set(t,l),i||ib(u,t,l,r.state))),e&&a===null)throw Error(o(528,""));return r}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gn(l),l=La(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function yn(t){return'href="'+je(t)+'"'}function yu(t){return'link[rel="stylesheet"]['+t+"]"}function ah(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function ib(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),he(e,"link",l),ie(e),t.head.appendChild(e))}function gn(t){return'[src="'+je(t)+'"]'}function gu(t){return"script[async]"+t}function nh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+je(l.href)+'"]');if(a)return e.instance=a,ie(a),a;var u=A({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ie(a),he(a,"style",u),Li(a,l.precedence,t),e.instance=a;case"stylesheet":u=yn(l.href);var i=t.querySelector(yu(u));if(i)return e.state.loading|=4,e.instance=i,ie(i),i;a=ah(l),(u=Ve.get(u))&&Oo(a,u),i=(t.ownerDocument||t).createElement("link"),ie(i);var r=i;return r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),he(i,"link",a),e.state.loading|=4,Li(i,l.precedence,t),e.instance=i;case"script":return i=gn(l.src),(u=t.querySelector(gu(i)))?(e.instance=u,ie(u),u):(a=l,(u=Ve.get(i))&&(a=A({},l),Co(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ie(u),he(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Li(a,l.precedence,t));return e.instance}function Li(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,r=0;r<a.length;r++){var s=a[r];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Oo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Co(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Qi=null;function uh(t,e,l){if(Qi===null){var a=new Map,u=Qi=new Map;u.set(l,a)}else u=Qi,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Un]||i[oe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var s=a.get(r);s?s.push(i):a.set(r,[i])}}return a}function ih(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function cb(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ch(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rb(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=yn(a.href),i=e.querySelector(yu(u));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=qi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,ie(i);return}i=e.ownerDocument||e,a=ah(a),(u=Ve.get(u))&&Oo(a,u),i=i.createElement("link"),ie(i);var r=i;r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),he(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=qi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Mo=0;function ob(t,e){return t.stylesheets&&t.count===0&&Gi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Mo===0&&(Mo=62500*Gv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Mo?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yi=null;function Gi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yi=new Map,e.forEach(fb,t),Yi=null,qi.call(t))}function fb(t,e){if(!(e.state.loading&4)){var l=Yi.get(t);if(l)var a=l.get(null);else{l=new Map,Yi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var r=u[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}u=e.instance,r=u.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,u),l.set(r,u),this.count++,a=qi.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Au={$$typeof:N,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function sb(t,e,l,a,u,i,r,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ec(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.hiddenUpdates=Ec(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function rh(t,e,l,a,u,i,r,s,h,E,_,$){return t=new sb(t,e,l,r,h,E,_,$,s),e=1,i===!0&&(e|=24),i=Me(3,null,null,e),t.current=i,i.stateNode=t,e=cr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},sr(i),t}function oh(t){return t?(t=Ja,t):Ja}function fh(t,e,l,a,u,i){u=oh(u),a.context===null?a.context=u:a.pendingContext=u,a=jl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ll(t,a,e),l!==null&&(ze(l,t,e),In(l,t,e))}function sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function wo(t,e){sh(t,e),(t=t.alternate)&&sh(t,e)}function dh(t){if(t.tag===13||t.tag===31){var e=pa(t,67108864);e!==null&&ze(e,t,67108864),wo(t,67108864)}}function hh(t){if(t.tag===13||t.tag===31){var e=Ne();e=Tc(e);var l=pa(t,e);l!==null&&ze(l,t,e),wo(t,e)}}var ki=!0;function db(t,e,l,a){var u=C.T;C.T=null;var i=G.p;try{G.p=2,_o(t,e,l,a)}finally{G.p=i,C.T=u}}function hb(t,e,l,a){var u=C.T;C.T=null;var i=G.p;try{G.p=8,_o(t,e,l,a)}finally{G.p=i,C.T=u}}function _o(t,e,l,a){if(ki){var u=Ro(a);if(u===null)bo(t,e,a,Xi,l),mh(t,a);else if(mb(u,t,e,l,a))a.stopPropagation();else if(mh(t,a),e&4&&-1<pb.indexOf(t)){for(;u!==null;){var i=ja(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=oa(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var h=1<<31-Oe(r);s.entanglements[1]|=h,r&=~h}il(i),(Bt&6)===0&&(Oi=ye()+500,pu(0))}}break;case 31:case 13:s=pa(i,2),s!==null&&ze(s,i,2),Mi(),wo(i,2)}if(i=Ro(a),i===null&&bo(t,e,a,Xi,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else bo(t,e,a,null,l)}}function Ro(t){return t=Bc(t),Bo(t)}var Xi=null;function Bo(t){if(Xi=null,t=$a(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=v(e),t!==null)return t;t=null}else if(l===31){if(t=D(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xi=t,null}function ph(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pp()){case xf:return 2;case Ef:return 8;case Nu:case tm:return 32;case Tf:return 268435456;default:return 32}default:return 32}}var No=!1,Wl=null,Fl=null,Il=null,Su=new Map,xu=new Map,Pl=[],pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mh(t,e){switch(t){case"focusin":case"focusout":Wl=null;break;case"dragenter":case"dragleave":Fl=null;break;case"mouseover":case"mouseout":Il=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(e.pointerId)}}function Eu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=ja(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function mb(t,e,l,a,u){switch(e){case"focusin":return Wl=Eu(Wl,t,e,l,a,u),!0;case"dragenter":return Fl=Eu(Fl,t,e,l,a,u),!0;case"mouseover":return Il=Eu(Il,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return Su.set(i,Eu(Su.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,xu.set(i,Eu(xu.get(i)||null,t,e,l,a,u)),!0}return!1}function vh(t){var e=$a(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=v(l),e!==null){t.blockedOn=e,wf(t.priority,function(){hh(l)});return}}else if(e===31){if(e=D(l),e!==null){t.blockedOn=e,wf(t.priority,function(){hh(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Ro(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Rc=a,l.target.dispatchEvent(a),Rc=null}else return e=ja(l),e!==null&&dh(e),t.blockedOn=l,!1;e.shift()}return!0}function bh(t,e,l){Vi(t)&&l.delete(e)}function vb(){No=!1,Wl!==null&&Vi(Wl)&&(Wl=null),Fl!==null&&Vi(Fl)&&(Fl=null),Il!==null&&Vi(Il)&&(Il=null),Su.forEach(bh),xu.forEach(bh)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,No||(No=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vb)))}var Ki=null;function yh(t){Ki!==t&&(Ki=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ki===t&&(Ki=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Bo(a||l)===null)continue;break}var i=ja(l);i!==null&&(t.splice(e,3),e-=3,_r(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function An(t){function e(h){return Zi(h,t)}Wl!==null&&Zi(Wl,t),Fl!==null&&Zi(Fl,t),Il!==null&&Zi(Il,t),Su.forEach(e),xu.forEach(e);for(var l=0;l<Pl.length;l++){var a=Pl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Pl.length&&(l=Pl[0],l.blockedOn===null);)vh(l),l.blockedOn===null&&Pl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],r=u[ge]||null;if(typeof i=="function")r||yh(l);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,r=i[ge]||null)s=r.formAction;else if(Bo(u)!==null)continue}else s=r.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),yh(l)}}}function gh(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return u=r})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function Uo(t){this._internalRoot=t}Ji.prototype.render=Uo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=Ne();fh(l,a,t,e,null,null)},Ji.prototype.unmount=Uo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fh(t.current,2,null,t,null,null),Mi(),e[Ha]=null}};function Ji(t){this._internalRoot=t}Ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Pl.length&&e!==0&&e<Pl[l].priority;l++);Pl.splice(l,0,t),l===0&&vh(t)}};var Ah=c.version;if(Ah!=="19.2.3")throw Error(o(527,Ah,"19.2.3"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=b(e),t=t!==null?U(t):null,t=t===null?null:t.stateNode,t};var bb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Rn=Wi.inject(bb),De=Wi}catch{}}return zu.createRoot=function(t,e){if(!d(t))throw Error(o(299));var l=!1,a="",u=Od,i=Cd,r=Md;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rh(t,1,!1,null,null,l,a,null,u,i,r,gh),t[Ha]=e.current,vo(t),new Uo(e)},zu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(o(299));var a=!1,u="",i=Od,r=Cd,s=Md,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),e=rh(t,1,!0,e,l??null,a,u,h,i,r,s,gh),e.context=oh(null),l=e.current,a=Ne(),a=Tc(a),u=jl(a),u.callback=null,Ll(l,u,a),l=a,e.current.lanes=l,Nn(e,l),il(e),t[Ha]=e.current,vo(t),new Ji(e)},zu.version="19.2.3",zu}var wh;function Db(){if(wh)return jo.exports;wh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),jo.exports=zb(),jo.exports}var Ob=Db(),re=function(){return re=Object.assign||function(c){for(var f,o=1,d=arguments.length;o<d;o++){f=arguments[o];for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(c[p]=f[p])}return c},re.apply(this,arguments)};function Cu(n,c,f){if(f||arguments.length===2)for(var o=0,d=c.length,p;o<d;o++)(p||!(o in c))&&(p||(p=Array.prototype.slice.call(c,0,o)),p[o]=c[o]);return n.concat(p||Array.prototype.slice.call(c))}var Vt="-ms-",Ou="-moz-",Nt="-webkit-",cp="comm",pc="rule",ff="decl",Cb="@import",Mb="@namespace",rp="@keyframes",wb="@layer",op=Math.abs,sf=String.fromCharCode,Jo=Object.assign;function _b(n,c){return ue(n,0)^45?(((c<<2^ue(n,0))<<2^ue(n,1))<<2^ue(n,2))<<2^ue(n,3):0}function fp(n){return n.trim()}function Ml(n,c){return(n=c.exec(n))?n[0]:n}function gt(n,c,f){return n.replace(c,f)}function tc(n,c,f){return n.indexOf(c,f)}function ue(n,c){return n.charCodeAt(c)|0}function _a(n,c,f){return n.slice(c,f)}function Ie(n){return n.length}function sp(n){return n.length}function Du(n,c){return c.push(n),n}function Rb(n,c){return n.map(c).join("")}function _h(n,c){return n.filter(function(f){return!Ml(f,c)})}var mc=1,On=1,dp=0,Ze=0,ae=0,_n="";function vc(n,c,f,o,d,p,v,D){return{value:n,root:c,parent:f,type:o,props:d,children:p,line:mc,column:On,length:v,return:"",siblings:D}}function ea(n,c){return Jo(vc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function Sn(n){for(;n.root;)n=ea(n.root,{children:[n]});Du(n,n.siblings)}function Bb(){return ae}function Nb(){return ae=Ze>0?ue(_n,--Ze):0,On--,ae===10&&(On=1,mc--),ae}function Pe(){return ae=Ze<dp?ue(_n,Ze++):0,On++,ae===10&&(On=1,mc++),ae}function la(){return ue(_n,Ze)}function ec(){return Ze}function bc(n,c){return _a(_n,n,c)}function Mu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ub(n){return mc=On=1,dp=Ie(_n=n),Ze=0,[]}function Hb(n){return _n="",n}function Yo(n){return fp(bc(Ze-1,Wo(n===91?n+2:n===40?n+1:n)))}function $b(n){for(;(ae=la())&&ae<33;)Pe();return Mu(n)>2||Mu(ae)>3?"":" "}function jb(n,c){for(;--c&&Pe()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return bc(n,ec()+(c<6&&la()==32&&Pe()==32))}function Wo(n){for(;Pe();)switch(ae){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Wo(ae);break;case 40:n===41&&Wo(n);break;case 92:Pe();break}return Ze}function Lb(n,c){for(;Pe()&&n+ae!==57;)if(n+ae===84&&la()===47)break;return"/*"+bc(c,Ze-1)+"*"+sf(n===47?n:Pe())}function Qb(n){for(;!Mu(la());)Pe();return bc(n,Ze)}function qb(n){return Hb(lc("",null,null,null,[""],n=Ub(n),0,[0],n))}function lc(n,c,f,o,d,p,v,D,S){for(var b=0,U=0,A=v,L=0,K=0,Z=0,F=1,I=1,k=1,V=0,N="",J=d,W=p,Y=o,R=N;I;)switch(Z=V,V=Pe()){case 40:if(Z!=108&&ue(R,A-1)==58){tc(R+=gt(Yo(V),"&","&\f"),"&\f",op(b?D[b-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:R+=Yo(V);break;case 9:case 10:case 13:case 32:R+=$b(Z);break;case 92:R+=jb(ec()-1,7);continue;case 47:switch(la()){case 42:case 47:Du(Yb(Lb(Pe(),ec()),c,f,S),S),(Mu(Z||1)==5||Mu(la()||1)==5)&&Ie(R)&&_a(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*F:D[b++]=Ie(R)*k;case 125*F:case 59:case 0:switch(V){case 0:case 125:I=0;case 59+U:k==-1&&(R=gt(R,/\f/g,"")),K>0&&(Ie(R)-A||F===0&&Z===47)&&Du(K>32?Bh(R+";",o,f,A-1,S):Bh(gt(R," ","")+";",o,f,A-2,S),S);break;case 59:R+=";";default:if(Du(Y=Rh(R,c,f,b,U,d,D,N,J=[],W=[],A,p),p),V===123)if(U===0)lc(R,c,Y,Y,J,p,A,D,W);else{switch(L){case 99:if(ue(R,3)===110)break;case 108:if(ue(R,2)===97)break;default:U=0;case 100:case 109:case 115:}U?lc(n,Y,Y,o&&Du(Rh(n,Y,Y,0,0,d,D,N,d,J=[],A,W),W),d,W,A,D,o?J:W):lc(R,Y,Y,Y,[""],W,0,D,W)}}b=U=K=0,F=k=1,N=R="",A=v;break;case 58:A=1+Ie(R),K=Z;default:if(F<1){if(V==123)--F;else if(V==125&&F++==0&&Nb()==125)continue}switch(R+=sf(V),V*F){case 38:k=U>0?1:(R+="\f",-1);break;case 44:D[b++]=(Ie(R)-1)*k,k=1;break;case 64:la()===45&&(R+=Yo(Pe())),L=la(),U=A=Ie(N=R+=Qb(ec())),V++;break;case 45:Z===45&&Ie(R)==2&&(F=0)}}return p}function Rh(n,c,f,o,d,p,v,D,S,b,U,A){for(var L=d-1,K=d===0?p:[""],Z=sp(K),F=0,I=0,k=0;F<o;++F)for(var V=0,N=_a(n,L+1,L=op(I=v[F])),J=n;V<Z;++V)(J=fp(I>0?K[V]+" "+N:gt(N,/&\f/g,K[V])))&&(S[k++]=J);return vc(n,c,f,d===0?pc:D,S,b,U,A)}function Yb(n,c,f,o){return vc(n,c,f,cp,sf(Bb()),_a(n,2,-2),0,o)}function Bh(n,c,f,o,d){return vc(n,c,f,ff,_a(n,0,o),_a(n,o+1,-1),o,d)}function hp(n,c,f){switch(_b(n,c)){case 5103:return Nt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Nt+n+n;case 4855:return Nt+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ou+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nt+n+Ou+n+Vt+n+n;case 5936:switch(ue(n,c+11)){case 114:return Nt+n+Vt+gt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nt+n+Vt+gt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nt+n+Vt+gt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Nt+n+Vt+n+n;case 6165:return Nt+n+Vt+"flex-"+n+n;case 5187:return Nt+n+gt(n,/(\w+).+(:[^]+)/,Nt+"box-$1$2"+Vt+"flex-$1$2")+n;case 5443:return Nt+n+Vt+"flex-item-"+gt(n,/flex-|-self/g,"")+(Ml(n,/flex-|baseline/)?"":Vt+"grid-row-"+gt(n,/flex-|-self/g,""))+n;case 4675:return Nt+n+Vt+"flex-line-pack"+gt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Nt+n+Vt+gt(n,"shrink","negative")+n;case 5292:return Nt+n+Vt+gt(n,"basis","preferred-size")+n;case 6060:return Nt+"box-"+gt(n,"-grow","")+Nt+n+Vt+gt(n,"grow","positive")+n;case 4554:return Nt+gt(n,/([^-])(transform)/g,"$1"+Nt+"$2")+n;case 6187:return gt(gt(gt(n,/(zoom-|grab)/,Nt+"$1"),/(image-set)/,Nt+"$1"),n,"")+n;case 5495:case 3959:return gt(n,/(image-set\([^]*)/,Nt+"$1$`$1");case 4968:return gt(gt(n,/(.+:)(flex-)?(.*)/,Nt+"box-pack:$3"+Vt+"flex-pack:$3"),/space-between/,"justify")+Nt+n+n;case 4200:if(!Ml(n,/flex-|baseline/))return Vt+"grid-column-align"+_a(n,c)+n;break;case 2592:case 3360:return Vt+gt(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(o,d){return c=d,Ml(o.props,/grid-\w+-end/)})?~tc(n+(f=f[c].value),"span",0)?n:Vt+gt(n,"-start","")+n+Vt+"grid-row-span:"+(~tc(f,"span",0)?Ml(f,/\d+/):+Ml(f,/\d+/)-+Ml(n,/\d+/))+";":Vt+gt(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(o){return Ml(o.props,/grid-\w+-start/)})?n:Vt+gt(gt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return gt(n,/(.+)-inline(.+)/,Nt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(n)-1-c>6)switch(ue(n,c+1)){case 109:if(ue(n,c+4)!==45)break;case 102:return gt(n,/(.+:)(.+)-([^]+)/,"$1"+Nt+"$2-$3$1"+Ou+(ue(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~tc(n,"stretch",0)?hp(gt(n,"stretch","fill-available"),c,f)+n:n}break;case 5152:case 5920:return gt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,d,p,v,D,S,b){return Vt+d+":"+p+b+(v?Vt+d+"-span:"+(D?S:+S-+p)+b:"")+n});case 4949:if(ue(n,c+6)===121)return gt(n,":",":"+Nt)+n;break;case 6444:switch(ue(n,ue(n,14)===45?18:11)){case 120:return gt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Nt+(ue(n,14)===45?"inline-":"")+"box$3$1"+Nt+"$2$3$1"+Vt+"$2box$3")+n;case 100:return gt(n,":",":"+Vt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return gt(n,"scroll-","scroll-snap-")+n}return n}function uc(n,c){for(var f="",o=0;o<n.length;o++)f+=c(n[o],o,n,c)||"";return f}function Gb(n,c,f,o){switch(n.type){case wb:if(n.children.length)break;case Cb:case Mb:case ff:return n.return=n.return||n.value;case cp:return"";case rp:return n.return=n.value+"{"+uc(n.children,o)+"}";case pc:if(!Ie(n.value=n.props.join(",")))return""}return Ie(f=uc(n.children,o))?n.return=n.value+"{"+f+"}":""}function kb(n){var c=sp(n);return function(f,o,d,p){for(var v="",D=0;D<c;D++)v+=n[D](f,o,d,p)||"";return v}}function Xb(n){return function(c){c.root||(c=c.return)&&n(c)}}function Vb(n,c,f,o){if(n.length>-1&&!n.return)switch(n.type){case ff:n.return=hp(n.value,n.length,f);return;case rp:return uc([ea(n,{value:gt(n.value,"@","@"+Nt)})],o);case pc:if(n.length)return Rb(f=n.props,function(d){switch(Ml(d,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sn(ea(n,{props:[gt(d,/:(read-\w+)/,":"+Ou+"$1")]})),Sn(ea(n,{props:[d]})),Jo(n,{props:_h(f,o)});break;case"::placeholder":Sn(ea(n,{props:[gt(d,/:(plac\w+)/,":"+Nt+"input-$1")]})),Sn(ea(n,{props:[gt(d,/:(plac\w+)/,":"+Ou+"$1")]})),Sn(ea(n,{props:[gt(d,/:(plac\w+)/,Vt+"input-$1")]})),Sn(ea(n,{props:[d]})),Jo(n,{props:_h(f,o)});break}return""})}}var Zb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},Cn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",pp="active",mp="data-styled-version",yc="6.3.8",df=`/*!sc*/
`,ic=typeof window<"u"&&typeof document<"u",cl=z.createContext===void 0,Kb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Jb={},gc=Object.freeze([]),Mn=Object.freeze({});function vp(n,c,f){return f===void 0&&(f=Mn),n.theme!==f.theme&&n.theme||c||f.theme}var bp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Wb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fb=/(^-|-$)/g;function Nh(n){return n.replace(Wb,"-").replace(Fb,"")}var Ib=/(a)(d)/gi,Uh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Fo(n){var c,f="";for(c=Math.abs(n);c>52;c=c/52|0)f=Uh(c%52)+f;return(Uh(c%52)+f).replace(Ib,"$1-$2")}var Go,En=function(n,c){for(var f=c.length;f;)n=33*n^c.charCodeAt(--f);return n},yp=function(n){return En(5381,n)};function gp(n){return Fo(yp(n)>>>0)}function Pb(n){return n.displayName||n.name||"Component"}function ko(n){return typeof n=="string"&&!0}var Ap=typeof Symbol=="function"&&Symbol.for,Sp=Ap?Symbol.for("react.memo"):60115,ty=Ap?Symbol.for("react.forward_ref"):60112,ey={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ly={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ay=((Go={})[ty]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Go[Sp]=xp,Go);function Hh(n){return("type"in(c=n)&&c.type.$$typeof)===Sp?xp:"$$typeof"in n?ay[n.$$typeof]:ey;var c}var ny=Object.defineProperty,uy=Object.getOwnPropertyNames,$h=Object.getOwnPropertySymbols,iy=Object.getOwnPropertyDescriptor,cy=Object.getPrototypeOf,jh=Object.prototype;function Ep(n,c,f){if(typeof c!="string"){if(jh){var o=cy(c);o&&o!==jh&&Ep(n,o,f)}var d=uy(c);$h&&(d=d.concat($h(c)));for(var p=Hh(n),v=Hh(c),D=0;D<d.length;++D){var S=d[D];if(!(S in ly||f&&f[S]||v&&S in v||p&&S in p)){var b=iy(c,S);try{ny(n,S,b)}catch{}}}}return n}function Ra(n){return typeof n=="function"}function hf(n){return typeof n=="object"&&"styledComponentId"in n}function Ca(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Io(n,c){if(n.length===0)return"";for(var f=n[0],o=1;o<n.length;o++)f+=n[o];return f}function wu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Po(n,c,f){if(f===void 0&&(f=!1),!f&&!wu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var o=0;o<c.length;o++)n[o]=Po(n[o],c[o]);else if(wu(c))for(var o in c)n[o]=Po(n[o],c[o]);return n}function pf(n,c){Object.defineProperty(n,"toString",{value:c})}function Ba(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var ry=(function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var f=0,o=0;o<c;o++)f+=this.groupSizes[o];return f},n.prototype.insertRules=function(c,f){if(c>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,p=d;c>=p;)if((p<<=1)<0)throw Ba(16,"".concat(c));this.groupSizes=new Uint32Array(p),this.groupSizes.set(o),this.length=p;for(var v=d;v<p;v++)this.groupSizes[v]=0}for(var D=this.indexOfGroup(c+1),S=(v=0,f.length);v<S;v++)this.tag.insertRule(D,f[v])&&(this.groupSizes[c]++,D++)},n.prototype.clearGroup=function(c){if(c<this.length){var f=this.groupSizes[c],o=this.indexOfGroup(c),d=o+f;this.groupSizes[c]=0;for(var p=o;p<d;p++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(c){var f="";if(c>=this.length||this.groupSizes[c]===0)return f;for(var o=this.groupSizes[c],d=this.indexOfGroup(c),p=d+o,v=d;v<p;v++)f+="".concat(this.tag.getRule(v)).concat(df);return f},n})(),ac=new Map,cc=new Map,nc=1,Tn=function(n){if(ac.has(n))return ac.get(n);for(;cc.has(nc);)nc++;var c=nc++;return ac.set(n,c),cc.set(c,n),c},oy=function(n,c){nc=c+1,ac.set(n,c),cc.set(c,n)},fy="style[".concat(Cn,"][").concat(mp,'="').concat(yc,'"]'),sy=new RegExp("^".concat(Cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dy=function(n,c,f){for(var o,d=f.split(","),p=0,v=d.length;p<v;p++)(o=d[p])&&n.registerName(c,o)},hy=function(n,c){for(var f,o=((f=c.textContent)!==null&&f!==void 0?f:"").split(df),d=[],p=0,v=o.length;p<v;p++){var D=o[p].trim();if(D){var S=D.match(sy);if(S){var b=0|parseInt(S[1],10),U=S[2];b!==0&&(oy(U,b),dy(n,U,S[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(D)}}},Lh=function(n){for(var c=document.querySelectorAll(fy),f=0,o=c.length;f<o;f++){var d=c[f];d&&d.getAttribute(Cn)!==pp&&(hy(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tp=function(n){var c=document.head,f=n||c,o=document.createElement("style"),d=(function(D){var S=Array.from(D.querySelectorAll("style[".concat(Cn,"]")));return S[S.length-1]})(f),p=d!==void 0?d.nextSibling:null;o.setAttribute(Cn,pp),o.setAttribute(mp,yc);var v=py();return v&&o.setAttribute("nonce",v),f.insertBefore(o,p),o},my=(function(){function n(c){this.element=Tp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var o=document.styleSheets,d=0,p=o.length;d<p;d++){var v=o[d];if(v.ownerNode===f)return v}throw Ba(17)})(this.element),this.length=0}return n.prototype.insertRule=function(c,f){try{return this.sheet.insertRule(f,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var f=this.sheet.cssRules[c];return f&&f.cssText?f.cssText:""},n})(),vy=(function(){function n(c){this.element=Tp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,f){if(c<=this.length&&c>=0){var o=document.createTextNode(f);return this.element.insertBefore(o,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n})(),by=(function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,f){return c<=this.length&&(this.rules.splice(c,0,f),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n})(),Qh=ic,yy={isServer:!ic,useCSSOMInjection:!Kb},rc=(function(){function n(c,f,o){c===void 0&&(c=Mn),f===void 0&&(f={});var d=this;this.options=re(re({},yy),c),this.gs=f,this.names=new Map(o),this.server=!!c.isServer,!this.server&&ic&&Qh&&(Qh=!1,Lh(this)),pf(this,function(){return(function(p){for(var v=p.getTag(),D=v.length,S="",b=function(A){var L=(function(k){return cc.get(k)})(A);if(L===void 0)return"continue";var K=p.names.get(L),Z=v.getGroup(A);if(K===void 0||!K.size||Z.length===0)return"continue";var F="".concat(Cn,".g").concat(A,'[id="').concat(L,'"]'),I="";K!==void 0&&K.forEach(function(k){k.length>0&&(I+="".concat(k,","))}),S+="".concat(Z).concat(F,'{content:"').concat(I,'"}').concat(df)},U=0;U<D;U++)b(U);return S})(d)})}return n.registerId=function(c){return Tn(c)},n.prototype.rehydrate=function(){!this.server&&ic&&Lh(this)},n.prototype.reconstructWithOptions=function(c,f){return f===void 0&&(f=!0),new n(re(re({},this.options),c),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(f){var o=f.useCSSOMInjection,d=f.target;return f.isServer?new by(d):o?new my(d):new vy(d)})(this.options),new ry(c)));var c},n.prototype.hasNameForId=function(c,f){return this.names.has(c)&&this.names.get(c).has(f)},n.prototype.registerName=function(c,f){if(Tn(c),this.names.has(c))this.names.get(c).add(f);else{var o=new Set;o.add(f),this.names.set(c,o)}},n.prototype.insertRules=function(c,f,o){this.registerName(c,f),this.getTag().insertRules(Tn(c),o)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Tn(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n})(),gy=/&/g,zn=47;function qh(n){if(n.indexOf("}")===-1)return!1;for(var c=n.length,f=0,o=0,d=!1,p=0;p<c;p++){var v=n.charCodeAt(p);if(o!==0||d||v!==zn||n.charCodeAt(p+1)!==42)if(d)v===42&&n.charCodeAt(p+1)===zn&&(d=!1,p++);else if(v!==34&&v!==39||p!==0&&n.charCodeAt(p-1)===92){if(o===0){if(v===123)f++;else if(v===125&&--f<0)return!0}}else o===0?o=v:o===v&&(o=0);else d=!0,p++}return f!==0||o!==0}function zp(n,c){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(c," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(c," ")),f.props=f.props.map(function(o){return"".concat(c," ").concat(o)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=zp(f.children,c)),f})}function Ay(n){var c,f,o,d=Mn,p=d.options,v=p===void 0?Mn:p,D=d.plugins,S=D===void 0?gc:D,b=function(L,K,Z){return Z.startsWith(f)&&Z.endsWith(f)&&Z.replaceAll(f,"").length>0?".".concat(c):L},U=S.slice();U.push(function(L){L.type===pc&&L.value.includes("&")&&(L.props[0]=L.props[0].replace(gy,f).replace(o,b))}),v.prefix&&U.push(Vb),U.push(Gb);var A=function(L,K,Z,F){K===void 0&&(K=""),Z===void 0&&(Z=""),F===void 0&&(F="&"),c=F,f=K,o=new RegExp("\\".concat(f,"\\b"),"g");var I=(function(N){if(!qh(N))return N;for(var J=N.length,W="",Y=0,R=0,rt=0,yt=!1,dt=0;dt<J;dt++){var At=N.charCodeAt(dt);if(rt!==0||yt||At!==zn||N.charCodeAt(dt+1)!==42)if(yt)At===42&&N.charCodeAt(dt+1)===zn&&(yt=!1,dt++);else if(At!==34&&At!==39||dt!==0&&N.charCodeAt(dt-1)===92){if(rt===0)if(At===123)R++;else if(At===125){if(--R<0){for(var st=dt+1;st<J;){var Lt=N.charCodeAt(st);if(Lt===59||Lt===10)break;st++}st<J&&N.charCodeAt(st)===59&&st++,R=0,dt=st-1,Y=st;continue}R===0&&(W+=N.substring(Y,dt+1),Y=dt+1)}else At===59&&R===0&&(W+=N.substring(Y,dt+1),Y=dt+1)}else rt===0?rt=At:rt===At&&(rt=0);else yt=!0,dt++}if(Y<J){var Mt=N.substring(Y);qh(Mt)||(W+=Mt)}return W})((function(N){if(N.indexOf("//")===-1)return N;for(var J=N.length,W=[],Y=0,R=0,rt=0,yt=0;R<J;){var dt=N.charCodeAt(R);if(dt!==34&&dt!==39||R!==0&&N.charCodeAt(R-1)===92)if(rt===0)if(dt===40&&R>=3&&(32|N.charCodeAt(R-1))==108&&(32|N.charCodeAt(R-2))==114&&(32|N.charCodeAt(R-3))==117)yt=1,R++;else if(yt>0)dt===41?yt--:dt===40&&yt++,R++;else if(dt===zn&&R+1<J&&N.charCodeAt(R+1)===zn){for(R>Y&&W.push(N.substring(Y,R));R<J&&N.charCodeAt(R)!==10;)R++;Y=R}else R++;else R++;else rt===0?rt=dt:rt===dt&&(rt=0),R++}return Y===0?N:(Y<J&&W.push(N.substring(Y)),W.join(""))})(L)),k=qb(Z||K?"".concat(Z," ").concat(K," { ").concat(I," }"):I);v.namespace&&(k=zp(k,v.namespace));var V=[];return uc(k,kb(U.concat(Xb(function(N){return V.push(N)})))),V};return A.hash=S.length?S.reduce(function(L,K){return K.name||Ba(15),En(L,K.name)},5381).toString():"",A}var Sy=new rc,tf=Ay(),ef={shouldForwardProp:void 0,styleSheet:Sy,stylis:tf},Dp=cl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(ef)}}:z.createContext(ef);Dp.Consumer;cl||z.createContext(void 0);function lf(){return cl?ef:z.useContext(Dp)}var xy=(function(){function n(c,f){var o=this;this.inject=function(d,p){p===void 0&&(p=tf);var v=o.name+p.hash;d.hasNameForId(o.id,v)||d.insertRules(o.id,v,p(o.rules,v,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=f,pf(this,function(){throw Ba(12,String(o.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=tf),this.name+c.hash},n})();function Ey(n,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||n in Zb||n.startsWith("--")?String(c).trim():"".concat(c,"px")}var Ty=function(n){return n>="A"&&n<="Z"};function Yh(n){for(var c="",f=0;f<n.length;f++){var o=n[f];if(f===1&&o==="-"&&n[0]==="-")return n;Ty(o)?c+="-"+o.toLowerCase():c+=o}return c.startsWith("ms-")?"-"+c:c}var Op=function(n){return n==null||n===!1||n===""},Cp=function(n){var c=[];for(var f in n){var o=n[f];n.hasOwnProperty(f)&&!Op(o)&&(Array.isArray(o)&&o.isCss||Ra(o)?c.push("".concat(Yh(f),":"),o,";"):wu(o)?c.push.apply(c,Cu(Cu(["".concat(f," {")],Cp(o),!1),["}"],!1)):c.push("".concat(Yh(f),": ").concat(Ey(f,o),";")))}return c};function aa(n,c,f,o){if(Op(n))return[];if(hf(n))return[".".concat(n.styledComponentId)];if(Ra(n)){if(!Ra(p=n)||p.prototype&&p.prototype.isReactComponent||!c)return[n];var d=n(c);return aa(d,c,f,o)}var p;return n instanceof xy?f?(n.inject(f,o),[n.getName(o)]):[n]:wu(n)?Cp(n):Array.isArray(n)?Array.prototype.concat.apply(gc,n.map(function(v){return aa(v,c,f,o)})):[n.toString()]}function Mp(n){for(var c=0;c<n.length;c+=1){var f=n[c];if(Ra(f)&&!hf(f))return!1}return!0}var zy=yp(yc),Dy=(function(){function n(c,f,o){this.rules=c,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Mp(c),this.componentId=f,this.baseHash=En(zy,f),this.baseStyle=o,rc.registerId(f)}return n.prototype.generateAndInjectStyles=function(c,f,o){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,f,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=Ca(d,this.staticRulesId);else{var p=Io(aa(this.rules,c,f,o)),v=Fo(En(this.baseHash,p)>>>0);if(!f.hasNameForId(this.componentId,v)){var D=o(p,".".concat(v),void 0,this.componentId);f.insertRules(this.componentId,v,D)}d=Ca(d,v),this.staticRulesId=v}else{for(var S=En(this.baseHash,o.hash),b="",U=0;U<this.rules.length;U++){var A=this.rules[U];if(typeof A=="string")b+=A;else if(A){var L=Io(aa(A,c,f,o));S=En(S,L+U),b+=L}}if(b){var K=Fo(S>>>0);if(!f.hasNameForId(this.componentId,K)){var Z=o(b,".".concat(K),void 0,this.componentId);f.insertRules(this.componentId,K,Z)}d=Ca(d,K)}}return{className:d,css:typeof window>"u"?f.getTag().getGroup(Tn(this.componentId)):""}},n})(),_u=cl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:z.createContext(void 0);_u.Consumer;function Oy(n){if(cl)return n.children;var c=z.useContext(_u),f=z.useMemo(function(){return(function(o,d){if(!o)throw Ba(14);if(Ra(o)){var p=o(d);return p}if(Array.isArray(o)||typeof o!="object")throw Ba(8);return d?re(re({},d),o):o})(n.theme,c)},[n.theme,c]);return n.children?z.createElement(_u.Provider,{value:f},n.children):null}var Xo={};function Cy(n,c,f){var o=hf(n),d=n,p=!ko(n),v=c.attrs,D=v===void 0?gc:v,S=c.componentId,b=S===void 0?(function(J,W){var Y=typeof J!="string"?"sc":Nh(J);Xo[Y]=(Xo[Y]||0)+1;var R="".concat(Y,"-").concat(gp(yc+Y+Xo[Y]));return W?"".concat(W,"-").concat(R):R})(c.displayName,c.parentComponentId):S,U=c.displayName,A=U===void 0?(function(J){return ko(J)?"styled.".concat(J):"Styled(".concat(Pb(J),")")})(n):U,L=c.displayName&&c.componentId?"".concat(Nh(c.displayName),"-").concat(c.componentId):c.componentId||b,K=o&&d.attrs?d.attrs.concat(D).filter(Boolean):D,Z=c.shouldForwardProp;if(o&&d.shouldForwardProp){var F=d.shouldForwardProp;if(c.shouldForwardProp){var I=c.shouldForwardProp;Z=function(J,W){return F(J,W)&&I(J,W)}}else Z=F}var k=new Dy(f,L,o?d.componentStyle:void 0);function V(J,W){return(function(Y,R,rt){var yt=Y.attrs,dt=Y.componentStyle,At=Y.defaultProps,st=Y.foldedComponentIds,Lt=Y.styledComponentId,Mt=Y.target,Ot=cl?void 0:z.useContext(_u),C=lf(),G=Y.shouldForwardProp||C.shouldForwardProp,X=vp(R,Ot,At)||Mn,ut=(function(Ct,j,ot){for(var mt,St=re(re({},j),{className:void 0,theme:ot}),Rt=0;Rt<Ct.length;Rt+=1){var Ut=Ra(mt=Ct[Rt])?mt(St):mt;for(var Ht in Ut)Ht==="className"?St.className=Ca(St.className,Ut[Ht]):Ht==="style"?St.style=re(re({},St.style),Ut[Ht]):St[Ht]=Ut[Ht]}return"className"in j&&typeof j.className=="string"&&(St.className=Ca(St.className,j.className)),St})(yt,R,X),ht=ut.as||Mt,m={};for(var M in ut)ut[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&ut.theme===X||(M==="forwardedAs"?m.as=ut.forwardedAs:G&&!G(M,ht)||(m[M]=ut[M]));var H=(function(Ct,j){var ot=lf(),mt=Ct.generateAndInjectStyles(j,ot.styleSheet,ot.stylis);return mt})(dt,ut),Q=H.className,P=H.css,tt=Ca(st,Lt);Q&&(tt+=" "+Q),ut.className&&(tt+=" "+ut.className),m[ko(ht)&&!bp.has(ht)?"class":"className"]=tt,rt&&(m.ref=rt);var at=w.createElement(ht,m);return cl&&P?z.createElement(z.Fragment,null,z.createElement("style",{precedence:"styled-components",href:"sc-".concat(Lt,"-").concat(Q),children:P}),at):at})(N,J,W)}V.displayName=A;var N=z.forwardRef(V);return N.attrs=K,N.componentStyle=k,N.displayName=A,N.shouldForwardProp=Z,N.foldedComponentIds=o?Ca(d.foldedComponentIds,d.styledComponentId):"",N.styledComponentId=L,N.target=o?d.target:n,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=o?(function(W){for(var Y=[],R=1;R<arguments.length;R++)Y[R-1]=arguments[R];for(var rt=0,yt=Y;rt<yt.length;rt++)Po(W,yt[rt],!0);return W})({},d.defaultProps,J):J}}),pf(N,function(){return".".concat(N.styledComponentId)}),p&&Ep(N,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function Gh(n,c){for(var f=[n[0]],o=0,d=c.length;o<d;o+=1)f.push(c[o],n[o+1]);return f}var kh=function(n){return Object.assign(n,{isCss:!0})};function et(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];if(Ra(n)||wu(n))return kh(aa(Gh(gc,Cu([n],c,!0))));var o=n;return c.length===0&&o.length===1&&typeof o[0]=="string"?aa(o):kh(aa(Gh(o,c)))}function af(n,c,f){if(f===void 0&&(f=Mn),!c)throw Ba(1,c);var o=function(d){for(var p=[],v=1;v<arguments.length;v++)p[v-1]=arguments[v];return n(c,f,et.apply(void 0,Cu([d],p,!1)))};return o.attrs=function(d){return af(n,c,re(re({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},o.withConfig=function(d){return af(n,c,re(re({},f),d))},o}var wp=function(n){return af(Cy,n)},q=wp;bp.forEach(function(n){q[n]=wp(n)});var My=(function(){function n(c,f){this.rules=c,this.componentId=f,this.isStatic=Mp(c),rc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,f,o,d){var p=d(Io(aa(this.rules,f,o,d)),""),v=this.componentId+c;o.insertRules(v,v,p)},n.prototype.removeStyles=function(c,f){f.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,f,o,d){c>2&&rc.registerId(this.componentId+c);var p=this.componentId+c;this.isStatic?o.hasNameForId(p,p)||this.createStyles(c,f,o,d):(this.removeStyles(c,o),this.createStyles(c,f,o,d))},n})();function wy(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];var o=et.apply(void 0,Cu([n],c,!1)),d="sc-global-".concat(gp(JSON.stringify(o))),p=new My(o,d),v=new WeakMap,D=function(S){var b=lf(),U=cl?void 0:z.useContext(_u),A=v.get(b.styleSheet);if(A===void 0&&(A=b.styleSheet.allocateGSInstance(d),v.set(b.styleSheet,A)),(typeof window>"u"||!b.styleSheet.server)&&(function(I,k,V,N,J){if(p.isStatic)p.renderStyles(I,Jb,V,J);else{var W=re(re({},k),{theme:vp(k,N,D.defaultProps)});p.renderStyles(I,W,V,J)}})(A,S,b.styleSheet,U,b.stylis),!cl){var L=z.useRef(!0);z.useLayoutEffect(function(){return L.current=!1,function(){L.current=!0,queueMicrotask(function(){L.current&&(p.removeStyles(A,b.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(I){return I.remove()}))})}},[A,b.styleSheet])}if(cl){var K=d+A,Z=typeof window>"u"?b.styleSheet.getTag().getGroup(Tn(K)):"";if(Z){var F="".concat(d,"-").concat(A);return z.createElement("style",{key:F,"data-styled-global":d,precedence:"styled-components",href:F,children:Z})}}return null};return z.memo(D)}var _y=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const mf="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",vf="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>et`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,el=({background:n="material",color:c="materialText"}={})=>et`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:f})=>f[n]};
  color: ${({theme:f})=>f[c]};
`,Ru=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:f=2})=>et`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${c};
  background-size: ${`${f*2}px ${f*2}px`};
  background-position: 0 0, ${`${f}px ${f}px`};
`,Na=()=>et`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,xn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Ry=({theme:n,topLeftInner:c,bottomRightInner:f,hasShadow:o=!1,hasInsetShadow:d=!1})=>[o?mf:!1,d?vf:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,f!==null?`inset -1px -1px 0 1px ${n[f]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:c="button"}={})=>{const f={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return et`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[xn[c][f.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[xn[c][f.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[xn[c][f.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[xn[c][f.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:d})=>Ry({theme:o,topLeftInner:xn[c][f.topLeftInner],bottomRightInner:xn[c][f.bottomRightInner],hasShadow:d})};
  `},wn=()=>et`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,By=n=>Buffer.from(n).toString("base64"),Ny=typeof btoa<"u"?btoa:By,Fi=(n,c=0)=>{const f=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ny(f)})`},bf=(n="default")=>et`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Ru({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Na():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${el()}
    ${n==="flat"?Na():Wt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${n==="default"?Wt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>Fi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>Fi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>Fi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>Fi(c.materialText,0)};
  }
`,Uy=q.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Hy=w.forwardRef(({children:n,underline:c=!0,...f},o)=>z.createElement(Uy,{ref:o,underline:c,...f},n));Hy.displayName="Anchor";const $y=q.header`
  ${Wt()};
  ${el()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,_p=w.forwardRef(({children:n,fixed:c=!0,position:f="fixed",...o},d)=>z.createElement($y,{fixed:c,position:c!==!1?f:void 0,ref:d,...o},n));_p.displayName="AppBar";const Ua=()=>{};function Ma(n,c,f){return f!==null&&n>f?f:c!==null&&n<c?c:n}function jy(n){if(Math.abs(n)<1){const f=n.toExponential().split("e-"),o=f[0].split(".")[1];return(o?o.length:0)+parseInt(f[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function Xh(n,c,f){const o=Math.round((n-f)/c)*c+f;return Number(o.toFixed(jy(c)))}function na(n){return typeof n=="number"?`${n}px`:n}const Ly=q.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:c})=>!n&&`
    border-top: 2px solid ${c.borderDark};
    border-left: 2px solid ${c.borderDark};
    border-bottom: 2px solid ${c.borderLightest};
    border-right: 2px solid ${c.borderLightest};
    background: ${c.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Qy=q.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,qy=w.forwardRef(({alt:n="",children:c,noBorder:f=!1,size:o=35,square:d=!1,src:p,...v},D)=>z.createElement(Ly,{noBorder:f,ref:D,size:na(o),square:d,src:p,...v},p?z.createElement(Qy,{src:p,alt:n}):c));qy.displayName="Avatar";const pe={sm:"28px",md:"36px",lg:"44px"},Yy=et`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>pe[n]};
  width: ${({fullWidth:n,size:c="md",square:f})=>n?"100%":f?pe[c]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:c})=>n&&!c&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Ac=q.button`
  ${({active:n,disabled:c,primary:f,theme:o,variant:d})=>d==="flat"?et`
          ${Na()}
          ${f?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!c&&wn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?et`
          ${el()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Wt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Wt({style:"buttonThinPressed"})}
          }
          ${n&&Wt({style:"buttonThinPressed"})}
          ${c&&tl()}
        `:et`
          ${el()};
          border: none;
          ${c&&tl()}
          ${n?Ru({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${f?et`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:et`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Wt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Wt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!c&&wn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Yy}
`,wa=w.forwardRef(({onClick:n,disabled:c=!1,children:f,type:o="button",fullWidth:d=!1,size:p="md",square:v=!1,active:D=!1,onTouchStart:S=Ua,primary:b=!1,variant:U="default",...A},L)=>z.createElement(Ac,{active:D,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:S,primary:b,ref:L,size:p,square:v,type:o,variant:U,...A},f));wa.displayName="Button";function ua({defaultValue:n,onChange:c,onChangePropName:f="onChange",readOnly:o,value:d,valuePropName:p="value"}){const v=d!==void 0,[D,S]=w.useState(n),b=w.useCallback(U=>{v||S(U)},[v]);if(v&&typeof c!="function"&&!o){const U=`Warning: You provided a \`${p}\` prop to a component without an \`${f}\` handler.${p==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${f}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${f}\` function that updates \`${p}\`.`}`;console.warn(U)}return[v?d:D,b]}const nf=q.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>pe[n.size]};
  width: ${n=>n.square?pe[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>pe[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:c})=>!c&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&tl()}
`,Rp=w.forwardRef(({size:n="lg",disabled:c,square:f,children:o,onClick:d,primary:p,...v},D)=>z.createElement(nf,{$disabled:c,size:n,square:f,onClick:c?void 0:d,primary:p,role:"menuitem",ref:D,"aria-disabled":c,...v},o));Rp.displayName="MenuListItem";const Bp=q.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Wt({style:"window"})}
  ${el()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Bp.displayName="MenuList";const rl=20,oc=q.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${rl}px;
  height: ${rl}px;
  opacity: 0;
  z-index: -1;
`,yf=q.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&tl()}

  ${nf} & {
    margin: 0;
    height: 100%;
  }
  ${nf}:hover & {
    ${({$disabled:n,theme:c})=>!n&&et`
        color: ${c.materialTextInvert};
      `};
  }
`,gf=q.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${oc}:focus ~ & {
    ${wn}
  }
  ${oc}:not(:disabled) ~ &:active {
    ${wn}
  }
`,ol=q.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${vf};`}
  }
`,Gy=q.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${bf()}
`,Sc=w.forwardRef(({children:n,shadow:c=!0,...f},o)=>z.createElement(ol,{ref:o,shadow:c,...f},z.createElement(Gy,null,n)));Sc.displayName="ScrollView";const Np=et`
  width: ${rl}px;
  height: ${rl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ky=q(ol)`
  ${Np}
  width: ${rl}px;
  height: ${rl}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,Xy=q.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${Np}
  width: ${rl-4}px;
  height: ${rl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Vy=q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:n,theme:c})=>n?c.checkmarkDisabled:c.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Zy=q.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>Ru({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Ky={flat:Xy,default:ky},Jy=w.forwardRef(({checked:n,className:c="",defaultChecked:f=!1,disabled:o=!1,indeterminate:d=!1,label:p="",onChange:v=Ua,style:D={},value:S,variant:b="default",...U},A)=>{var L;const[K,Z]=ua({defaultValue:f,onChange:v,readOnly:(L=U.readOnly)!==null&&L!==void 0?L:o,value:n}),F=w.useCallback(V=>{const N=V.target.checked;Z(N),v(V)},[v,Z]),I=Ky[b];let k=null;return d?k=Zy:K&&(k=Vy),z.createElement(yf,{$disabled:o,className:c,style:D},z.createElement(oc,{disabled:o,onChange:o?void 0:F,readOnly:o,type:"checkbox",value:S,checked:K,"data-indeterminate":d,ref:A,...U}),z.createElement(I,{$disabled:o,role:"presentation"},k&&z.createElement(k,{$disabled:o,variant:b})),p&&z.createElement(gf,null,p))});Jy.displayName="Checkbox";const Af=q.div`
  ${({orientation:n,theme:c,size:f="100%"})=>n==="vertical"?`
    height: ${na(f)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${na(f)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;Af.displayName="Separator";const Wy=q(Ac)`
  padding-left: 8px;
`,Fy=q(Af)`
  height: 21px;
  position: relative;
  top: 0;
`,Up=q.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Iy=q.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?et`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:et`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${Up}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wn}
    outline-offset: -8px;
  }
`,Py=q.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?et`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:et`
          border-top: 6px solid ${({theme:c})=>c.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,tg=w.forwardRef(({value:n,defaultValue:c,onChange:f=Ua,disabled:o=!1,variant:d="default",...p},v)=>{var D;const[S,b]=ua({defaultValue:c,onChange:f,readOnly:(D=p.readOnly)!==null&&D!==void 0?D:o,value:n}),U=A=>{const L=A.target.value;b(L),f(A)};return z.createElement(Wy,{disabled:o,as:"div",variant:d,size:"md"},z.createElement(Up,{onChange:U,readOnly:o,disabled:o,value:S??"#008080",type:"color",ref:v,...p}),z.createElement(Iy,{$disabled:o,color:S??"#008080",role:"presentation"}),d==="default"&&z.createElement(Fy,{orientation:"vertical"}),z.createElement(Py,{$disabled:o,variant:d}))});tg.displayName="ColorInput";const eg=q.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>et`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Ru({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,Vh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],lg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function ag({digit:n=0,pixelSize:c=2,...f}){const o=lg[Number(n)].map((d,p)=>d?`${Vh[p]} active`:Vh[p]);return z.createElement(eg,{pixelSize:c,...f},o.map((d,p)=>z.createElement("span",{className:d,key:p})))}const ng=q.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ug={sm:1,md:2,lg:3,xl:4},ig=w.forwardRef(({value:n=0,minLength:c=3,size:f="md",...o},d)=>{const p=w.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return z.createElement(ng,{ref:d,...o},p.map((v,D)=>z.createElement(ag,{digit:v,pixelSize:ug[f],key:D})))});ig.displayName="Counter";const Hp=et`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${pe.md};
`,cg=q(ol).attrs({"data-testid":"variant-default"})`
  ${Hp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,rg=q.div.attrs({"data-testid":"variant-flat"})`
  ${Na()}
  ${Hp}
  position: relative;
`,$p=et`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&tl()}
`,og=q.input`
  ${$p}
  padding: 0 8px;
`,fg=q.textarea`
  ${$p}
  padding: 8px;
  resize: none;
  ${({variant:n})=>bf(n)}
`,jp=w.forwardRef(({className:n,disabled:c=!1,fullWidth:f,onChange:o=Ua,shadow:d=!0,style:p,variant:v="default",...D},S)=>{const b=v==="flat"?rg:cg,U=w.useMemo(()=>{var A;return D.multiline?z.createElement(fg,{disabled:c,onChange:c?void 0:o,readOnly:c,ref:S,variant:v,...D}):z.createElement(og,{disabled:c,onChange:c?void 0:o,readOnly:c,ref:S,type:(A=D.type)!==null&&A!==void 0?A:"text",variant:v,...D})},[c,o,D,S,v]);return z.createElement(b,{className:n,fullWidth:f,$disabled:c,shadow:d,style:p},U)});jp.displayName="TextInput";const sg=q.div`
  display: inline-flex;
  align-items: center;
`,uf=q(wa)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?et`
          height: calc(50% - 1px);
        `:et`
          height: 50%;
        `}
`,dg=q.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?et`
          height: calc(${pe.md} - 4px);
        `:et`
          height: ${pe.md};
          margin-left: 2px;
        `}
`,Zh=q.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?et`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:et`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${uf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?et`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:et`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,Lp=w.forwardRef(({className:n,defaultValue:c,disabled:f=!1,max:o,min:d,onChange:p,readOnly:v,step:D=1,style:S,value:b,variant:U="default",width:A,...L},K)=>{const[Z,F]=ua({defaultValue:c,onChange:p,readOnly:v,value:b}),I=w.useCallback(Y=>{const R=parseFloat(Y.target.value);F(R)},[F]),k=w.useCallback(Y=>{const R=Ma(parseFloat(((Z??0)+Y).toFixed(2)),d??null,o??null);F(R),p?.(R)},[o,d,p,F,Z]),V=w.useCallback(()=>{Z!==void 0&&p?.(Z)},[p,Z]),N=w.useCallback(()=>{k(D)},[k,D]),J=w.useCallback(()=>{k(-D)},[k,D]),W=U==="flat"?"flat":"raised";return z.createElement(sg,{className:n,style:{...S,width:A!==void 0?na(A):"auto"},...L},z.createElement(jp,{value:Z,variant:U,onChange:I,disabled:f,type:"number",readOnly:v,ref:K,fullWidth:!0,onBlur:V}),z.createElement(dg,{variant:U},z.createElement(uf,{"data-testid":"increment",variant:W,disabled:f||v,onClick:N},z.createElement(Zh,{invert:!0})),z.createElement(uf,{"data-testid":"decrement",variant:W,disabled:f||v,onClick:J},z.createElement(Zh,null))))});Lp.displayName="NumberInput";function hg(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let f=0;f<10;f+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Qp=n=>w.useMemo(()=>hg(),[n]),qp=et`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Yp=et`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,Sf=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,pg=q.div`
  ${qp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Sf}:focus & {
    ${Yp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Gp=et`
  height: ${pe.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?tl():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,mg=q(ol)`
  ${Gp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,vg=q.div`
  ${Na()}
  ${Gp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,bg=q.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${qp}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,kp=q(Ac).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?et`
          height: 100%;
          margin-right: 0;
        `:et`
          height: 100%;
        `}
  ${({native:n=!1,variant:c="default"})=>n&&(c==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:c=!1})=>n||c?"none":"auto"}
`,yg=q.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:n=!1,theme:c})=>n?c.materialTextDisabled:c.materialText};
  ${({$disabled:n=!1,theme:c})=>n&&`
    filter: drop-shadow(1px 1px 0px ${c.materialTextDisabledShadow});
    border-top-color: ${c.materialTextDisabled};
    `}
  ${kp}:active & {
    margin-top: 2px;
  }
`,gg=q.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${mf};
  ${({variant:n="default"})=>n==="flat"?et`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:et`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>bf(n)}
`,Ag=q.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${pe.md} - 4px);
  line-height: calc(${pe.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Yp:""}
  user-select: none;
`,Sg=[],Xp=({className:n,defaultValue:c,disabled:f,native:o,onChange:d,options:p=Sg,readOnly:v,style:D,value:S,variant:b,width:U})=>{var A;const L=w.useMemo(()=>p.filter(Boolean),[p]),[K,Z]=ua({defaultValue:c??((A=L?.[0])===null||A===void 0?void 0:A.value),onChange:d,readOnly:v,value:S}),F=!(f||v),I=w.useMemo(()=>({className:n,style:{...D,width:U}}),[n,D,U]),k=w.useMemo(()=>z.createElement(kp,{as:"div","data-testid":"select-button",$disabled:f,native:o,tabIndex:-1,variant:b==="flat"?"flat":"raised"},z.createElement(yg,{"data-testid":"select-icon",$disabled:f})),[f,o,b]),V=w.useMemo(()=>b==="flat"?vg:mg,[b]);return w.useMemo(()=>({isEnabled:F,options:L,value:K,setValue:Z,wrapperProps:I,DropdownButton:k,Wrapper:V}),[k,V,F,L,Z,K,I])},xg={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Eg=1e3,Tg=({onBlur:n,onChange:c,onClose:f,onFocus:o,onKeyDown:d,onMouseDown:p,onOpen:v,open:D,options:S,readOnly:b,value:U,selectRef:A,setValue:L,wrapperRef:K})=>{const Z=w.useRef(null),F=w.useRef([]),I=w.useRef(0),k=w.useRef(0),V=w.useRef(),N=w.useRef("search"),J=w.useRef(""),W=w.useRef(),[Y,R]=ua({defaultValue:!1,onChange:v,onChangePropName:"onOpen",readOnly:b,value:D,valuePropName:"open"}),rt=w.useMemo(()=>{const j=S.findIndex(ot=>ot.value===U);return I.current=Ma(j,0,null),S[j]},[S,U]),[yt,dt]=w.useState(S[0]),At=w.useCallback(j=>{const ot=Z.current,mt=F.current[j];if(!mt||!ot){V.current=j;return}V.current=void 0;const St=ot.clientHeight,Rt=ot.scrollTop,Ut=ot.scrollTop+St,Ht=mt.offsetTop,me=mt.offsetHeight,Ke=mt.offsetTop+mt.offsetHeight;Ht<Rt&&ot.scrollTo(0,Ht),Ke>Ut&&ot.scrollTo(0,Ht-St+me),mt.focus({preventScroll:!0})},[Z]),st=w.useCallback((j,{scroll:ot}={})=>{var mt;const St=S.length-1;let Rt;switch(j){case"first":{Rt=0;break}case"last":{Rt=St;break}case"next":{Rt=Ma(k.current+1,0,St);break}case"previous":{Rt=Ma(k.current-1,0,St);break}case"selected":{Rt=Ma((mt=I.current)!==null&&mt!==void 0?mt:0,0,St);break}default:Rt=j}k.current=Rt,dt(S[Rt]),ot&&At(Rt)},[k,S,At]),Lt=w.useCallback(({fromEvent:j})=>{R(!0),st("selected",{scroll:!0}),v?.({fromEvent:j})},[st,v,R]),Mt=w.useCallback(()=>{N.current="search",J.current="",clearTimeout(W.current)},[]),Ot=w.useCallback(({focusSelect:j,fromEvent:ot})=>{var mt;f?.({fromEvent:ot}),R(!1),dt(S[0]),Mt(),V.current=void 0,j&&((mt=A.current)===null||mt===void 0||mt.focus())},[Mt,f,S,A,R]),C=w.useCallback(({fromEvent:j})=>{Y?Ot({focusSelect:!1,fromEvent:j}):Lt({fromEvent:j})},[Ot,Lt,Y]),G=w.useCallback((j,{fromEvent:ot})=>{I.current!==j&&(I.current=j,L(S[j].value),c?.(S[j],{fromEvent:ot}))},[c,S,L]),X=w.useCallback(({focusSelect:j,fromEvent:ot})=>{G(k.current,{fromEvent:ot}),Ot({focusSelect:j,fromEvent:ot})},[Ot,G]),ut=w.useCallback((j,{fromEvent:ot,select:mt})=>{var St;switch(N.current==="cycleFirstLetter"&&j!==J.current&&(N.current="search"),j===J.current?N.current="cycleFirstLetter":J.current+=j,N.current){case"search":{let Rt=S.findIndex(Ut=>{var Ht;return((Ht=Ut.label)===null||Ht===void 0?void 0:Ht.toLocaleUpperCase().indexOf(J.current))===0});Rt<0&&(Rt=S.findIndex(Ut=>{var Ht;return((Ht=Ut.label)===null||Ht===void 0?void 0:Ht.toLocaleUpperCase().indexOf(j))===0}),J.current=j),Rt>=0&&(mt?G(Rt,{fromEvent:ot}):st(Rt,{scroll:!0}));break}case"cycleFirstLetter":{const Rt=mt?(St=I.current)!==null&&St!==void 0?St:-1:k.current;let Ut=S.findIndex((Ht,me)=>{var Ke;return me>Rt&&((Ke=Ht.label)===null||Ke===void 0?void 0:Ke.toLocaleUpperCase().indexOf(j))===0});Ut<0&&(Ut=S.findIndex(Ht=>{var me;return((me=Ht.label)===null||me===void 0?void 0:me.toLocaleUpperCase().indexOf(j))===0})),Ut>=0&&(mt?G(Ut,{fromEvent:ot}):st(Ut,{scroll:!0}));break}}clearTimeout(W.current),W.current=setTimeout(()=>{N.current==="search"&&(J.current="")},Eg)},[st,S,G]),ht=w.useCallback(j=>{var ot;j.button===0&&(j.preventDefault(),(ot=A.current)===null||ot===void 0||ot.focus(),C({fromEvent:j}),p?.(j))},[p,A,C]),m=w.useCallback(j=>{X({focusSelect:!0,fromEvent:j})},[X]),M=w.useCallback(j=>{const{altKey:ot,code:mt,ctrlKey:St,metaKey:Rt,shiftKey:Ut}=j,{ARROW_DOWN:Ht,ARROW_UP:me,END:Ke,ENTER:ll,ESC:He,HOME:ia,SPACE:ca,TAB:ra}=xg,Bu=ot||St||Rt||Ut;if(!(mt===ra&&(ot||St||Rt)||mt!==ra&&Bu))switch(mt){case Ht:{if(j.preventDefault(),!Y){Lt({fromEvent:j});return}st("next",{scroll:!0});break}case me:{if(j.preventDefault(),!Y){Lt({fromEvent:j});return}st("previous",{scroll:!0});break}case Ke:{if(j.preventDefault(),!Y){Lt({fromEvent:j});return}st("last",{scroll:!0});break}case ll:{if(!Y)return;j.preventDefault(),X({focusSelect:!0,fromEvent:j});break}case He:{if(!Y)return;j.preventDefault(),Ot({focusSelect:!0,fromEvent:j});break}case ia:{if(j.preventDefault(),!Y){Lt({fromEvent:j});return}st("first",{scroll:!0});break}case ca:{j.preventDefault(),Y?X({focusSelect:!0,fromEvent:j}):Lt({fromEvent:j});break}case ra:{if(!Y)return;Ut||j.preventDefault(),X({focusSelect:!Ut,fromEvent:j});break}default:!Bu&&mt.match(/^Key/)&&(j.preventDefault(),j.stopPropagation(),ut(mt.replace(/^Key/,""),{select:!Y,fromEvent:j}))}},[st,Ot,Y,Lt,ut,X]),H=w.useCallback(j=>{M(j),d?.(j)},[M,d]),Q=w.useCallback(j=>{st(j)},[st]),P=w.useCallback(j=>{Y||(Mt(),n?.(j))},[Mt,n,Y]),tt=w.useCallback(j=>{Mt(),o?.(j)},[Mt,o]),at=w.useCallback(j=>{Z.current=j,V.current!==void 0&&At(V.current)},[At]),Ct=w.useCallback((j,ot)=>{F.current[ot]=j,V.current===ot&&At(V.current)},[At]);return w.useEffect(()=>{if(!Y)return()=>{};const j=ot=>{var mt;const St=ot.target;!((mt=K.current)===null||mt===void 0)&&mt.contains(St)||(ot.preventDefault(),Ot({focusSelect:!1,fromEvent:ot}))};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[Ot,Y,K]),w.useMemo(()=>({activeOption:yt,handleActivateOptionIndex:Q,handleBlur:P,handleButtonKeyDown:H,handleDropdownKeyDown:M,handleFocus:tt,handleMouseDown:ht,handleOptionClick:m,handleSetDropdownRef:at,handleSetOptionRef:Ct,open:Y,selectedOption:rt}),[yt,Q,P,H,tt,M,ht,m,at,Ct,Y,rt])},zg=w.forwardRef(({className:n,defaultValue:c,disabled:f,onChange:o,options:d,readOnly:p,style:v,value:D,variant:S,width:b,...U},A)=>{const{isEnabled:L,options:K,setValue:Z,value:F,DropdownButton:I,Wrapper:k}=Xp({defaultValue:c,disabled:f,native:!0,onChange:o,options:d,readOnly:p,value:D,variant:S}),V=w.useCallback(N=>{const J=K.find(W=>W.value===N.target.value);J&&(Z(J.value),o?.(J,{fromEvent:N}))},[o,K,Z]);return z.createElement(k,{className:n,style:{...v,width:b}},z.createElement(Sf,null,z.createElement(bg,{...U,disabled:f,onChange:L?V:Ua,ref:A,value:F},K.map((N,J)=>{var W;return z.createElement("option",{key:`${N.value}-${J}`,value:N.value},(W=N.label)!==null&&W!==void 0?W:N.value)})),I))});zg.displayName="SelectNative";function Dg({activateOptionIndex:n,active:c,index:f,onClick:o,option:d,selected:p,setRef:v}){const D=w.useCallback(()=>{n(f)},[n,f]),S=w.useCallback(U=>{v(U,f)},[f,v]),b=Qp();return z.createElement(Ag,{active:c,"aria-selected":p?"true":void 0,"data-value":d.value,id:b,onClick:o,onMouseEnter:D,ref:S,role:"option",tabIndex:0},d.label)}function Og({"aria-label":n,"aria-labelledby":c,className:f,defaultValue:o,disabled:d=!1,formatDisplay:p,inputProps:v,labelId:D,menuMaxHeight:S,name:b,onBlur:U,onChange:A,onClose:L,onFocus:K,onKeyDown:Z,onMouseDown:F,onOpen:I,open:k,options:V,readOnly:N,shadow:J=!0,style:W,variant:Y="default",value:R,width:rt="auto",...yt},dt){const{isEnabled:At,options:st,setValue:Lt,value:Mt,wrapperProps:Ot,DropdownButton:C,Wrapper:G}=Xp({className:f,defaultValue:o,disabled:d,native:!1,onChange:A,options:V,style:W,readOnly:N,value:R,variant:Y,width:rt}),X=w.useRef(null),ut=w.useRef(null),ht=w.useRef(null),{activeOption:m,handleActivateOptionIndex:M,handleBlur:H,handleButtonKeyDown:Q,handleDropdownKeyDown:P,handleFocus:tt,handleMouseDown:at,handleOptionClick:Ct,handleSetDropdownRef:j,handleSetOptionRef:ot,open:mt,selectedOption:St}=Tg({onBlur:U,onChange:A,onClose:L,onFocus:K,onKeyDown:Z,onMouseDown:F,onOpen:I,open:k,options:st,value:Mt,selectRef:ut,setValue:Lt,wrapperRef:ht});w.useImperativeHandle(dt,()=>({focus:ll=>{var He;(He=ut.current)===null||He===void 0||He.focus(ll)},node:X.current,value:String(Mt)}),[Mt]);const Rt=w.useMemo(()=>St?typeof p=="function"?p(St):St.label:"",[p,St]),Ut=At?1:void 0,Ht=w.useMemo(()=>S?{overflow:"auto",maxHeight:S}:void 0,[S]),me=Qp(),Ke=w.useMemo(()=>st.map((ll,He)=>{const ia=`${Mt}-${He}`,ca=ll===m,ra=ll===St;return z.createElement(Dg,{activateOptionIndex:M,active:ca,index:He,key:ia,onClick:Ct,option:ll,selected:ra,setRef:ot})}),[m,M,Ct,ot,st,St,Mt]);return z.createElement(G,{...Ot,$disabled:d,ref:ht,shadow:J,style:{...W,width:rt}},z.createElement("input",{name:b,ref:X,type:"hidden",value:String(Mt),...v}),z.createElement(Sf,{"aria-disabled":d,"aria-expanded":mt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??D,"aria-owns":At&&mt?me:void 0,onBlur:H,onFocus:tt,onKeyDown:Q,onMouseDown:At?at:F,ref:ut,role:"button",tabIndex:Ut,...yt},z.createElement(pg,null,Rt),C),At&&mt&&z.createElement(gg,{id:me,onKeyDown:P,ref:j,role:"listbox",style:Ht,tabIndex:0,variant:Y},Ke))}const Vp=w.forwardRef(Og);Vp.displayName="Select";const Cg=q.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,fc=w.forwardRef(function({children:c,noPadding:f=!1,...o},d){return z.createElement(Cg,{noPadding:f,ref:d,...o},c)});fc.displayName="Toolbar";const Mg=q.div`
  padding: 16px;
`,sc=w.forwardRef(function({children:c,...f},o){return z.createElement(Mg,{ref:o,...f},c)});sc.displayName="WindowContent";const wg=q.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?et`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:et`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${Ac} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,dc=w.forwardRef(function({active:c=!0,children:f,...o},d){return z.createElement(wg,{active:c,ref:d,...o},f)});dc.displayName="WindowHeader";const _g=q.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${el()}
`,Rg=q.span`
  ${({theme:n})=>et`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,hc=w.forwardRef(({children:n,resizable:c=!1,resizeRef:f,shadow:o=!0,...d},p)=>z.createElement(_g,{ref:p,shadow:o,...d},n,c&&z.createElement(Rg,{"data-testid":"resizeHandle",ref:f})));hc.displayName="Window";const Bg=q(Sc)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,Ng=q.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Ug=q.div`
  display: flex;
  flex-wrap: wrap;
`,Cl=q.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Hg=q.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,$g=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function jg(n,c){return new Date(n,c+1,0).getDate()}function Lg(n,c,f){return new Date(n,c,f).getDay()}function Qg(n){const c=new Date(Date.parse(n)),f=c.getUTCDate(),o=c.getUTCMonth(),d=c.getUTCFullYear();return{day:f,month:o,year:d}}const qg=w.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:f,onCancel:o,shadow:d=!0},p)=>{const[v,D]=w.useState(()=>Qg(c)),{year:S,month:b,day:U}=v,A=w.useCallback(({value:I})=>{D(k=>({...k,month:I}))},[]),L=w.useCallback(I=>{D(k=>({...k,year:I}))},[]),K=w.useCallback(I=>{D(k=>({...k,day:I}))},[]),Z=w.useCallback(()=>{const I=[v.year,v.month+1,v.day].map(k=>String(k).padStart(2,"0")).join("-");f?.(I)},[v.day,v.month,v.year,f]),F=w.useMemo(()=>{const I=Array.from({length:42}),k=Lg(S,b,1);let V=U;const N=jg(S,b);return V=V<N?V:N,I.forEach((J,W)=>{if(W>=k&&W<N+k){const Y=W-k+1;I[W]=z.createElement(Cl,{key:W,onClick:()=>{K(Y)}},z.createElement(Hg,{active:Y===V},Y))}else I[W]=z.createElement(Cl,{key:W})}),I},[U,K,b,S]);return z.createElement(hc,{className:n,ref:p,shadow:d,style:{margin:20}},z.createElement(dc,null,z.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),z.createElement(sc,null,z.createElement(fc,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(Vp,{options:$g,value:b,onChange:A,width:128,menuMaxHeight:200}),z.createElement(Lp,{value:S,onChange:L,width:100})),z.createElement(Bg,null,z.createElement(Ng,null,z.createElement(Cl,null,"S"),z.createElement(Cl,null,"M"),z.createElement(Cl,null,"T"),z.createElement(Cl,null,"W"),z.createElement(Cl,null,"T"),z.createElement(Cl,null,"F"),z.createElement(Cl,null,"S")),z.createElement(Ug,null,F)),z.createElement(fc,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(wa,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),z.createElement(wa,{fullWidth:!0,onClick:f?Z:void 0,disabled:!f},"OK"))))});qg.displayName="DatePicker";const Yg=n=>{switch(n){case"status":case"well":return et`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return et`
        ${Wt({style:"window"})}
      `;case"field":return et`
        ${Wt({style:"field"})}
      `;default:return et`
        ${Wt()}
      `}},Gg=q.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Yg(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,kg=w.forwardRef(({children:n,shadow:c=!1,variant:f="window",...o},d)=>z.createElement(Gg,{ref:d,shadow:c,variant:f,...o},n));kg.displayName="Frame";const Xg=q.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&et`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&tl()}
`,Vg=q.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Zg=w.forwardRef(({label:n,disabled:c=!1,variant:f="default",children:o,...d},p)=>z.createElement(Xg,{"aria-disabled":c,$disabled:c,variant:f,ref:p,...d},n&&z.createElement(Vg,{variant:f},n),o));Zg.displayName="GroupBox";const Kg=q.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${na(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Kg.displayName="Handle";const Jg="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Wg=q.div`
  display: inline-block;
  height: ${({size:n})=>na(n)};
  width: ${({size:n})=>na(n)};
`,Fg=q.span`
  display: block;
  background: ${Jg};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ig=w.forwardRef(({size:n=30,...c},f)=>z.createElement(Wg,{size:n,ref:f,...c},z.createElement(Fg,null)));Ig.displayName="Hourglass";const Pg=q.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,t1=q.div`
  position: relative;
`,e1=q.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,l1=q(ol).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,a1=q.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,n1=w.forwardRef(({backgroundStyles:n,children:c,...f},o)=>z.createElement(Pg,{ref:o,...f},z.createElement(t1,null,z.createElement(e1,null,z.createElement(l1,{style:n},c)),z.createElement(a1,null))));n1.displayName="Monitor";const u1=q.div`
  display: inline-block;
  height: ${pe.md};
  width: 100%;
`,i1=q(ol)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Zp=et`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,c1=q.div`
  position: relative;
  top: 4px;
  ${Zp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,r1=q.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Zp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,o1=q.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Kp=17,f1=q.span`
  display: inline-block;
  width: ${Kp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,s1=w.forwardRef(({hideValue:n=!1,shadow:c=!0,value:f,variant:o="default",...d},p)=>{const v=n?null:`${f}%`,D=w.useRef(null),[S,b]=w.useState([]),U=w.useCallback(()=>{if(!D.current||f===void 0)return;const A=D.current.getBoundingClientRect().width,L=Math.round(f/100*A/Kp);b(Array.from({length:L}))},[f]);return w.useEffect(()=>(U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)),[U]),z.createElement(u1,{"aria-valuenow":f!==void 0?Math.round(f):void 0,ref:p,role:"progressbar",variant:o,...d},z.createElement(i1,{variant:o,shadow:c},o==="default"?z.createElement(z.Fragment,null,z.createElement(c1,{"data-testid":"defaultProgress1"},v),z.createElement(r1,{"data-testid":"defaultProgress2",value:f},v)):z.createElement(o1,{ref:D,"data-testid":"tileProgress"},S.map((A,L)=>z.createElement(f1,{key:L})))))});s1.displayName="ProgressBar";const Jp=et`
  width: ${rl}px;
  height: ${rl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,d1=q(ol)`
  ${Jp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,h1=q.div`
  ${Na()}
  ${Jp}
  outline: none;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,p1=q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,m1={flat:h1,default:d1},v1=w.forwardRef(({checked:n,className:c="",disabled:f=!1,label:o="",onChange:d,style:p={},variant:v="default",...D},S)=>{const b=m1[v];return z.createElement(yf,{$disabled:f,className:c,style:p},z.createElement(b,{$disabled:f,role:"presentation"},n&&z.createElement(p1,{$disabled:f,variant:v})),z.createElement(oc,{disabled:f,onChange:f?void 0:d,readOnly:f,type:"radio",checked:n,ref:S,...D}),o&&z.createElement(gf,null,o))});v1.displayName="Radio";const b1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function Oa(n){const c=w.useRef(n);return b1(()=>{c.current=n}),w.useCallback((...f)=>(0,c.current)(...f),[])}function Kh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function Jh(n,c){return w.useMemo(()=>n==null&&c==null?null:f=>{Kh(n,f),Kh(c,f)},[n,c])}var y1=ip();let xc=!0,cf=!1,Wh;const g1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function A1(n){if("type"in n){const{type:c,tagName:f}=n;if(f==="INPUT"&&g1[c]&&!n.readOnly||f==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function S1(n){n.metaKey||n.altKey||n.ctrlKey||(xc=!0)}function Vo(){xc=!1}function x1(){this.visibilityState==="hidden"&&cf&&(xc=!0)}function E1(n){n.addEventListener("keydown",S1,!0),n.addEventListener("mousedown",Vo,!0),n.addEventListener("pointerdown",Vo,!0),n.addEventListener("touchstart",Vo,!0),n.addEventListener("visibilitychange",x1,!0)}function T1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return xc||A1(c)}function z1(){cf=!0,window.clearTimeout(Wh),Wh=window.setTimeout(()=>{cf=!1},100)}function D1(){const n=w.useCallback(c=>{const f=y1.findDOMNode(c);f!=null&&E1(f.ownerDocument)},[]);return{isFocusVisible:T1,onBlurVisible:z1,ref:n}}function O1(n,c,f){return(f-c)*n+c}function Ii(n,c){if(c!==void 0&&"changedTouches"in n){for(let f=0;f<n.changedTouches.length;f+=1){const o=n.changedTouches[f];if(o.identifier===c)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Pi(n){return n&&n.ownerDocument||document}function C1(n,c){var f;const{index:o}=(f=n.reduce((d,p,v)=>{const D=Math.abs(c-p);return d===null||D<d.distance||D===d.distance?{distance:D,index:v}:d},null))!==null&&f!==void 0?f:{};return o??-1}const M1=q.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:c})=>n&&`
        outline: 2px dotted ${c.materialText};
        `}
  }

  ${({orientation:n,size:c})=>n==="vertical"?et`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `:et`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,Wp=()=>et`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?et`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:et`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,w1=q(ol)`
  ${Wp()}
`,_1=q(ol)`
  ${Wp()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,R1=q.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?et`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:et`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?et`
          ${Na()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:et`
          ${el()}
          ${Wt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&Ru({mainColor:c.material,secondaryColor:c.borderLightest})}
`,Dn=6,B1=q.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?et`
          right: ${-Dn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Dn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:et`
          bottom: ${-Dn}px;
          height: ${Dn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&et`
      ${tl()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,N1=q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?et`
          transform: translate(${Dn+2}px, ${Dn+1}px);
        `:et`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,U1=w.forwardRef(({defaultValue:n,disabled:c=!1,marks:f=!1,max:o=100,min:d=0,name:p,onChange:v,onChangeCommitted:D,onMouseDown:S,orientation:b="horizontal",size:U="100%",step:A=1,value:L,variant:K="default",...Z},F)=>{const I=K==="flat"?_1:w1,k=b==="vertical",[V=d,N]=ua({defaultValue:n,onChange:v??D,value:L}),{isFocusVisible:J,onBlurVisible:W,ref:Y}=D1(),[R,rt]=w.useState(!1),yt=w.useRef(),dt=w.useRef(null),At=Jh(Y,yt),st=Jh(F,At),Lt=Oa(H=>{J(H)&&rt(!0)}),Mt=Oa(()=>{R!==!1&&(rt(!1),W())}),Ot=w.useRef(),C=w.useMemo(()=>f===!0&&Number.isFinite(A)?[...Array(Math.round((o-d)/A)+1)].map((H,Q)=>({label:void 0,value:d+A*Q})):Array.isArray(f)?f:[],[f,o,d,A]),G=Oa(H=>{const Q=(o-d)/10,P=C.map(Ct=>Ct.value),tt=P.indexOf(V);let at=0;switch(H.key){case"Home":at=d;break;case"End":at=o;break;case"PageUp":A&&(at=V+Q);break;case"PageDown":A&&(at=V-Q);break;case"ArrowRight":case"ArrowUp":A?at=V+A:at=P[tt+1]||P[P.length-1];break;case"ArrowLeft":case"ArrowDown":A?at=V-A:at=P[tt-1]||P[0];break;default:return}H.preventDefault(),A&&(at=Xh(at,A,d)),at=Ma(at,d,o),N(at),rt(!0),v?.(at),D?.(at)}),X=w.useCallback(H=>{if(!yt.current)return 0;const Q=yt.current.getBoundingClientRect();let P;k?P=(Q.bottom-H.y)/Q.height:P=(H.x-Q.left)/Q.width;let tt;if(tt=O1(P,d,o),A)tt=Xh(tt,A,d);else{const at=C.map(j=>j.value),Ct=C1(at,tt);tt=at[Ct]}return tt=Ma(tt,d,o),tt},[C,o,d,A,k]),ut=Oa(H=>{var Q;const P=Ii(H,Ot.current);if(!P)return;const tt=X(P);(Q=dt.current)===null||Q===void 0||Q.focus(),N(tt),rt(!0),v?.(tt)}),ht=Oa(H=>{const Q=Ii(H,Ot.current);if(!Q)return;const P=X(Q);D?.(P),Ot.current=void 0;const tt=Pi(yt.current);tt.removeEventListener("mousemove",ut),tt.removeEventListener("mouseup",ht),tt.removeEventListener("touchmove",ut),tt.removeEventListener("touchend",ht)}),m=Oa(H=>{var Q;S?.(H),H.preventDefault(),(Q=dt.current)===null||Q===void 0||Q.focus(),rt(!0);const P=Ii(H,Ot.current);if(P){const at=X(P);N(at),v?.(at)}const tt=Pi(yt.current);tt.addEventListener("mousemove",ut),tt.addEventListener("mouseup",ht)}),M=Oa(H=>{var Q;H.preventDefault();const P=H.changedTouches[0];P!=null&&(Ot.current=P.identifier),(Q=dt.current)===null||Q===void 0||Q.focus(),rt(!0);const tt=Ii(H,Ot.current);if(tt){const Ct=X(tt);N(Ct),v?.(Ct)}const at=Pi(yt.current);at.addEventListener("touchmove",ut),at.addEventListener("touchend",ht)});return w.useEffect(()=>{const{current:H}=yt;H?.addEventListener("touchstart",M);const Q=Pi(H);return()=>{H?.removeEventListener("touchstart",M),Q.removeEventListener("mousemove",ut),Q.removeEventListener("mouseup",ht),Q.removeEventListener("touchmove",ut),Q.removeEventListener("touchend",ht)}},[ht,ut,M]),z.createElement(M1,{$disabled:c,hasMarks:!!C.length,isFocused:R,onMouseDown:m,orientation:b,ref:st,size:na(U),...Z},z.createElement("input",{disabled:c,name:p,type:"hidden",value:V??0}),C&&C.map(H=>z.createElement(B1,{$disabled:c,"data-testid":"tick",key:H.value/(o-d)*100,orientation:b,style:{[k?"bottom":"left"]:`${(H.value-d)/(o-d)*100}%`}},H.label&&z.createElement(N1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},H.label))),z.createElement(I,{orientation:b,variant:K}),z.createElement(R1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":o,"aria-valuemin":d,"aria-valuenow":V,onBlur:Mt,onFocus:Lt,onKeyDown:G,orientation:b,ref:dt,role:"slider",style:{[k?"bottom":"left"]:`${(k?-100:0)+100*(V-d)/(o-d)}%`},tabIndex:c?void 0:0,variant:K}))});U1.displayName="Slider";const H1=q.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${vf};
  overflow-y: auto;
`,$1=w.forwardRef(function({children:c,...f},o){return z.createElement(H1,{ref:o,...f},c)});$1.displayName="TableBody";const j1=q.td`
  padding: 0 8px;
`,L1=w.forwardRef(function({children:c,...f},o){return z.createElement(j1,{ref:o,...f},c)});L1.displayName="TableDataCell";const Q1=q.thead`
  display: table-header-group;
`,q1=w.forwardRef(function({children:c,...f},o){return z.createElement(Q1,{ref:o,...f},c)});q1.displayName="TableHead";const Y1=q.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Wt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&et`
      &:active {
        &:before {
          ${Wt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&tl()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&tl()}
  }
`,G1=w.forwardRef(function({disabled:c=!1,children:f,onClick:o,onTouchStart:d=Ua,sort:p,...v},D){const S=p==="asc"?"ascending":p==="desc"?"descending":void 0;return z.createElement(Y1,{$disabled:c,"aria-disabled":c,"aria-sort":S,onClick:c?void 0:o,onTouchStart:c?void 0:d,ref:D,...v},z.createElement("div",null,f))});G1.displayName="TableHeadCell";const k1=q.tr`
  color: inherit;
  display: table-row;
  height: calc(${pe.md} - 2px);
  line-height: calc(${pe.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,X1=w.forwardRef(function({children:c,...f},o){return z.createElement(k1,{ref:o,...f},c)});X1.displayName="TableRow";const V1=q.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Z1=q(ol)`
  &:before {
    box-shadow: none;
  }
`,K1=w.forwardRef(({children:n,...c},f)=>z.createElement(Z1,null,z.createElement(V1,{ref:f,...c},n)));K1.displayName="Table";const J1=q.button`
  ${el()}
  ${Wt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${pe.md};
  line-height: ${pe.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${pe.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,W1=w.forwardRef(({value:n,onClick:c,selected:f=!1,children:o,...d},p)=>z.createElement(J1,{"aria-selected":f,selected:f,onClick:v=>c?.(n,v),ref:p,role:"tab",...d},o));W1.displayName="Tab";const F1=q.div`
  ${el()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,I1=w.forwardRef(({children:n,...c},f)=>z.createElement(F1,{ref:f,...c},n));I1.displayName="TabBody";const P1=q.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,tA=q.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function eA(n,c){const f=[];for(let o=c;o>0;o-=1)f.push(n.splice(0,Math.ceil(n.length/o)));return f}const lA=w.forwardRef(({value:n,onChange:c=Ua,children:f,rows:o=1,...d},p)=>{const v=w.useMemo(()=>{var D;const S=(D=z.Children.map(f,A=>{if(!z.isValidElement(A))return null;const L={selected:A.props.value===n,onClick:c};return z.cloneElement(A,L)}))!==null&&D!==void 0?D:[],b=eA(S,o).map((A,L)=>({key:L,tabs:A})),U=b.findIndex(A=>A.tabs.some(L=>L.props.selected));return b.push(b.splice(U,1)[0]),b},[f,c,o,n]);return z.createElement(P1,{...d,isMultiRow:o>1,role:"tablist",ref:p},v.map(D=>z.createElement(tA,{key:D.key},D.tabs)))});lA.displayName="Tabs";const aA=["blur","focus"],nA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Fh(n){return"nativeEvent"in n&&aA.includes(n.type)}function Ih(n){return"nativeEvent"in n&&nA.includes(n.type)}const uA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},iA=q.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${mf};
  text-align: center;
  font-size: 1rem;
  ${n=>uA[n.position]}
`,cA=q.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,rA=w.forwardRef(({className:n,children:c,disableFocusListener:f=!1,disableMouseListener:o=!1,enterDelay:d=1e3,leaveDelay:p=0,onBlur:v,onClose:D,onFocus:S,onMouseEnter:b,onMouseLeave:U,onOpen:A,style:L,text:K,position:Z="top",...F},I)=>{const[k,V]=w.useState(!1),[N,J]=w.useState(),[W,Y]=w.useState(),R=!f,rt=!o,yt=X=>{window.clearTimeout(N),window.clearTimeout(W);const ut=window.setTimeout(()=>{V(!0),A?.(X)},d);J(ut)},dt=X=>{X.persist(),Fh(X)?S?.(X):Ih(X)&&b?.(X),yt(X)},At=X=>{window.clearTimeout(N),window.clearTimeout(W);const ut=window.setTimeout(()=>{V(!1),D?.(X)},p);Y(ut)},st=X=>{X.persist(),Fh(X)?v?.(X):Ih(X)&&U?.(X),At(X)},Lt=R?st:void 0,Mt=R?dt:void 0,Ot=rt?dt:void 0,C=rt?st:void 0,G=R?0:void 0;return z.createElement(cA,{"data-testid":"tooltip-wrapper",onBlur:Lt,onFocus:Mt,onMouseEnter:Ot,onMouseLeave:C,tabIndex:G},z.createElement(iA,{className:n,"data-testid":"tooltip",position:Z,ref:I,show:k,style:L,...F},K),c)});rA.displayName="Tooltip";const rf=q(gf)`
  white-space: nowrap;
`,Fp=et`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":et`
          cursor: pointer;

          :focus {
            ${rf} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,oA=q.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&et`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:c})=>c.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,fA=q.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?et`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `:et`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,sA=q.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,dA=q.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Fp};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Ph=q(yf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Fp};
`,hA=q.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function tp(n,c){return n.includes(c)?n.filter(f=>f!==c):[...n,c]}function ep(n){n.preventDefault()}function Ip({className:n,disabled:c,expanded:f,innerRef:o,level:d,select:p,selected:v,style:D,tree:S=[]}){const b=d===0,U=w.useCallback(A=>{var L,K;const Z=!!(A.items&&A.items.length>0),F=f.includes(A.id),I=(L=c||A.disabled)!==null&&L!==void 0?L:!1,k=I?ep:W=>p(W,A),V=I?ep:W=>p(W,A),N=v===A.id,J=z.createElement(hA,{"aria-hidden":!0},A.icon);return z.createElement(fA,{key:A.label,isRootLevel:b,role:"treeitem","aria-expanded":F,"aria-selected":N,hasItems:Z},Z?z.createElement(sA,{open:F},z.createElement(dA,{onClick:k,$disabled:I},z.createElement(Ph,{$disabled:I},J,z.createElement(rf,null,A.label))),F&&z.createElement(Ip,{className:n,disabled:I,expanded:f,level:d+1,select:p,selected:v,style:D,tree:(K=A.items)!==null&&K!==void 0?K:[]})):z.createElement(Ph,{as:"button",$disabled:I,onClick:V},J,z.createElement(rf,null,A.label)))},[n,c,f,b,d,p,v,D]);return z.createElement(oA,{className:b?n:void 0,style:b?D:void 0,ref:b?o:void 0,role:b?"tree":"group",isRootLevel:b},S.map(U))}function pA({className:n,defaultExpanded:c=[],defaultSelected:f,disabled:o=!1,expanded:d,onNodeSelect:p,onNodeToggle:v,selected:D,style:S,tree:b=[]},U){const[A,L]=ua({defaultValue:c,onChange:v,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[K,Z]=ua({defaultValue:f,onChange:p,onChangePropName:"onNodeSelect",value:D,valuePropName:"selected"}),F=w.useCallback((V,N)=>{if(v){const J=tp(A,N);v(V,J)}L(J=>tp(J,N))},[A,v,L]),I=w.useCallback((V,N)=>{Z(N),p&&p(V,N)},[p,Z]),k=w.useCallback((V,N)=>{V.preventDefault(),I(V,N.id),N.items&&N.items.length&&F(V,N.id)},[I,F]);return z.createElement(Ip,{className:n,disabled:o,expanded:A,level:0,innerRef:U,select:k,selected:K,style:S,tree:b})}const mA=w.forwardRef(pA);mA.displayName="TreeView";const lp=Sc,vA=Af,bA=Bp,ap=Rp;var Zo,np;function yA(){if(np)return Zo;np=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Zo=n,Zo}var gA=yA();const AA=up(gA),SA=wy`
  ${_y}
  body {
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; 
    background-color: teal; 
    overflow: hidden; 
  }
`,Ko=[{id:"v1",title:"我的第一条抖音",src:"./videos/douyin_1.mp4",type:"video/mp4"},{id:"v2",title:"",src:"./videos/douyin_2.mp4",type:"video/mp4"},{id:"v3",title:"搞笑合集",src:"./videos/douyin_3.mp4",type:"video/mp4"},{id:"v4",title:"",src:"https://player.bilibili.com/player.html?bvid=BV1GJ411x7h7",isIframe:!0}];function xA(){const[n,c]=w.useState(!1),[f,o]=w.useState(null),[d,p]=w.useState(!1),[v,D]=w.useState(Ko[0]),[S,b]=w.useState(new Date);w.useEffect(()=>{const A=setInterval(()=>b(new Date),1e3);return()=>clearInterval(A)},[]);const U=[{id:1,title:"你好，世界.txt",content:"这是我的第一篇博客。"},{id:2,title:"关于我.doc",content:"全栈开发者，喜欢复古风。"}];return ft.jsxs(ft.Fragment,{children:[ft.jsx(SA,{}),ft.jsxs(Oy,{theme:AA,children:[ft.jsxs("div",{style:{height:"calc(100vh - 50px)",padding:"20px",position:"relative"},children:[f&&ft.jsxs(hc,{style:{width:400,position:"absolute",top:"10%",left:"10%",zIndex:10},children:[ft.jsxs(dc,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[ft.jsx("span",{children:f.title}),ft.jsx(wa,{onClick:()=>o(null),size:"sm",square:!0,children:ft.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),ft.jsx(sc,{children:ft.jsx("p",{children:f.content})})]}),d&&ft.jsxs(hc,{style:{width:600,height:450,position:"absolute",top:"15%",left:"20%",zIndex:20},children:[ft.jsxs(dc,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[ft.jsx("span",{children:"📺 抖音播放器.exe"}),ft.jsx(wa,{onClick:()=>p(!1),size:"sm",square:!0,children:ft.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),ft.jsxs(sc,{style:{display:"flex",gap:"10px",height:"100%",paddingBottom:"30px"},children:[ft.jsxs("div",{style:{width:"150px",display:"flex",flexDirection:"column"},children:[ft.jsx("p",{style:{marginBottom:8},children:"播放列表:"}),ft.jsx(lp,{style:{flex:1,background:"white"},children:ft.jsx(Sc,{style:{height:"100%"},children:Ko.map((A,L)=>ft.jsx("div",{onClick:()=>D(A),style:{padding:"8px",cursor:"pointer",backgroundColor:v.id===A.id?"#000080":"transparent",color:v.id===A.id?"white":"black",userSelect:"none"},children:A.title?A.title:`${L+1}`},A.id))})})]}),ft.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[ft.jsx(lp,{style:{flex:1,backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:v.isIframe?ft.jsx("iframe",{src:v.src,style:{width:"100%",height:"100%",border:"none"},title:"video",allowFullScreen:!0}):ft.jsxs("video",{controls:!0,autoPlay:!0,style:{maxWidth:"100%",maxHeight:"100%"},children:[ft.jsx("source",{src:v.src,type:v.type}),"您的浏览器不支持视频标签。"]},v.src)}),ft.jsxs("div",{style:{marginTop:"10px",textAlign:"center"},children:["当前播放: ",v.title||"频道 "+(Ko.indexOf(v)+1)]})]})]})]}),ft.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[ft.jsxs("div",{style:{textAlign:"center",width:80,cursor:"pointer"},onClick:()=>o(U[1]),children:[ft.jsx("span",{style:{fontSize:"40px"},children:"💻"}),ft.jsx("p",{style:{color:"white",textShadow:"1px 1px black"},children:"我的电脑"})]}),ft.jsxs("div",{style:{textAlign:"center",width:80,cursor:"pointer"},onClick:()=>p(!0),children:[ft.jsx("span",{style:{fontSize:"40px"},children:"📺"}),ft.jsx("p",{style:{color:"white",textShadow:"1px 1px black"},children:"抖音TV"})]})]})]}),ft.jsx(_p,{position:"fixed",style:{top:"auto",bottom:0,zIndex:999},children:ft.jsxs(fc,{style:{justifyContent:"space-between"},children:[ft.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[ft.jsxs(wa,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[ft.jsx("span",{style:{marginRight:4},children:"🏁"})," Start"]}),n&&ft.jsxs(bA,{style:{position:"absolute",left:"0",bottom:"100%"},onClick:()=>c(!1),children:[ft.jsx(ap,{onClick:()=>p(!0),children:"📺 打开电视"}),ft.jsx(vA,{}),ft.jsx(ap,{children:"🚪 关机"})]})]}),ft.jsx("div",{style:{paddingRight:"10px"},children:S.toLocaleTimeString()})]})})]})]})}Ob.createRoot(document.getElementById("root")).render(ft.jsx(w.StrictMode,{children:ft.jsx(xA,{})}));
