(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();function ap(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ro={exports:{}},Tu={};var Ah;function yb(){if(Ah)return Tu;Ah=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(o,d,p){var y=null;if(p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),"key"in d){p={};for(var O in d)O!=="key"&&(p[O]=d[O])}else p=d;return d=p.ref,{$$typeof:n,type:o,key:y,ref:d!==void 0?d:null,props:p}}return Tu.Fragment=c,Tu.jsx=f,Tu.jsxs=f,Tu}var Sh;function gb(){return Sh||(Sh=1,Ro.exports=yb()),Ro.exports}var Lt=gb(),Bo={exports:{}},ht={};var xh;function Ab(){if(xh)return ht;xh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),Q=Symbol.iterator;function K(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,I={};function k(m,M,U){this.props=m,this.context=M,this.refs=I,this.updater=U||Z}k.prototype.isReactComponent={},k.prototype.setState=function(m,M){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,M,"setState")},k.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function V(){}V.prototype=k.prototype;function N(m,M,U){this.props=m,this.context=M,this.refs=I,this.updater=U||Z}var J=N.prototype=new V;J.constructor=N,F(J,k.prototype),J.isPureReactComponent=!0;var W=Array.isArray;function Y(){}var R={H:null,A:null,T:null,S:null},rt=Object.prototype.hasOwnProperty;function bt(m,M,U){var j=U.ref;return{$$typeof:n,type:m,key:M,ref:j!==void 0?j:null,props:U}}function st(m,M){return bt(m.type,M,m.props)}function gt(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function ft(m){var M={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(U){return M[U]})}var Qt=/\/+/g;function Ct(m,M){return typeof m=="object"&&m!==null&&m.key!=null?ft(""+m.key):M.toString(36)}function Dt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Y,Y):(m.status="pending",m.then(function(M){m.status==="pending"&&(m.status="fulfilled",m.value=M)},function(M){m.status==="pending"&&(m.status="rejected",m.reason=M)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function C(m,M,U,j,P){var tt=typeof m;(tt==="undefined"||tt==="boolean")&&(m=null);var at=!1;if(m===null)at=!0;else switch(tt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(m.$$typeof){case n:case c:at=!0;break;case $:return at=m._init,C(at(m._payload),M,U,j,P)}}if(at)return P=P(m),at=j===""?"."+Ct(m,0):j,W(P)?(U="",at!=null&&(U=at.replace(Qt,"$&/")+"/"),C(P,M,U,"",function(ot){return ot})):P!=null&&(gt(P)&&(P=st(P,U+(P.key==null||m&&m.key===P.key?"":(""+P.key).replace(Qt,"$&/")+"/")+at)),M.push(P)),1;at=0;var Ot=j===""?".":j+":";if(W(m))for(var L=0;L<m.length;L++)j=m[L],tt=Ot+Ct(j,L),at+=C(j,M,U,tt,P);else if(L=K(m),typeof L=="function")for(m=L.call(m),L=0;!(j=m.next()).done;)j=j.value,tt=Ot+Ct(j,L++),at+=C(j,M,U,tt,P);else if(tt==="object"){if(typeof m.then=="function")return C(Dt(m),M,U,j,P);throw M=String(m),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return at}function G(m,M,U){if(m==null)return m;var j=[],P=0;return C(m,j,"","",function(tt){return M.call(U,tt,P++)}),j}function X(m){if(m._status===-1){var M=m._result;M=M(),M.then(function(U){(m._status===0||m._status===-1)&&(m._status=1,m._result=U)},function(U){(m._status===0||m._status===-1)&&(m._status=2,m._result=U)}),m._status===-1&&(m._status=0,m._result=M)}if(m._status===1)return m._result.default;throw m._result}var ut=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},dt={map:G,forEach:function(m,M,U){G(m,function(){M.apply(this,arguments)},U)},count:function(m){var M=0;return G(m,function(){M++}),M},toArray:function(m){return G(m,function(M){return M})||[]},only:function(m){if(!gt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ht.Activity=S,ht.Children=dt,ht.Component=k,ht.Fragment=f,ht.Profiler=d,ht.PureComponent=N,ht.StrictMode=o,ht.Suspense=A,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,ht.__COMPILER_RUNTIME={__proto__:null,c:function(m){return R.H.useMemoCache(m)}},ht.cache=function(m){return function(){return m.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(m,M,U){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var j=F({},m.props),P=m.key;if(M!=null)for(tt in M.key!==void 0&&(P=""+M.key),M)!rt.call(M,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&M.ref===void 0||(j[tt]=M[tt]);var tt=arguments.length-2;if(tt===1)j.children=U;else if(1<tt){for(var at=Array(tt),Ot=0;Ot<tt;Ot++)at[Ot]=arguments[Ot+2];j.children=at}return bt(m.type,P,j)},ht.createContext=function(m){return m={$$typeof:y,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:p,_context:m},m},ht.createElement=function(m,M,U){var j,P={},tt=null;if(M!=null)for(j in M.key!==void 0&&(tt=""+M.key),M)rt.call(M,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(P[j]=M[j]);var at=arguments.length-2;if(at===1)P.children=U;else if(1<at){for(var Ot=Array(at),L=0;L<at;L++)Ot[L]=arguments[L+2];P.children=Ot}if(m&&m.defaultProps)for(j in at=m.defaultProps,at)P[j]===void 0&&(P[j]=at[j]);return bt(m,tt,P)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(m){return{$$typeof:O,render:m}},ht.isValidElement=gt,ht.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:X}},ht.memo=function(m,M){return{$$typeof:b,type:m,compare:M===void 0?null:M}},ht.startTransition=function(m){var M=R.T,U={};R.T=U;try{var j=m(),P=R.S;P!==null&&P(U,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(Y,ut)}catch(tt){ut(tt)}finally{M!==null&&U.types!==null&&(M.types=U.types),R.T=M}},ht.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},ht.use=function(m){return R.H.use(m)},ht.useActionState=function(m,M,U){return R.H.useActionState(m,M,U)},ht.useCallback=function(m,M){return R.H.useCallback(m,M)},ht.useContext=function(m){return R.H.useContext(m)},ht.useDebugValue=function(){},ht.useDeferredValue=function(m,M){return R.H.useDeferredValue(m,M)},ht.useEffect=function(m,M){return R.H.useEffect(m,M)},ht.useEffectEvent=function(m){return R.H.useEffectEvent(m)},ht.useId=function(){return R.H.useId()},ht.useImperativeHandle=function(m,M,U){return R.H.useImperativeHandle(m,M,U)},ht.useInsertionEffect=function(m,M){return R.H.useInsertionEffect(m,M)},ht.useLayoutEffect=function(m,M){return R.H.useLayoutEffect(m,M)},ht.useMemo=function(m,M){return R.H.useMemo(m,M)},ht.useOptimistic=function(m,M){return R.H.useOptimistic(m,M)},ht.useReducer=function(m,M,U){return R.H.useReducer(m,M,U)},ht.useRef=function(m){return R.H.useRef(m)},ht.useState=function(m){return R.H.useState(m)},ht.useSyncExternalStore=function(m,M,U){return R.H.useSyncExternalStore(m,M,U)},ht.useTransition=function(){return R.H.useTransition()},ht.version="19.2.3",ht}var Eh;function nf(){return Eh||(Eh=1,Bo.exports=Ab()),Bo.exports}var w=nf();const z=ap(w);var No={exports:{}},zu={},Uo={exports:{}},Ho={};var Th;function Sb(){return Th||(Th=1,(function(n){function c(C,G){var X=C.length;C.push(G);t:for(;0<X;){var ut=X-1>>>1,dt=C[ut];if(0<d(dt,G))C[ut]=G,C[X]=dt,X=ut;else break t}}function f(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var G=C[0],X=C.pop();if(X!==G){C[0]=X;t:for(var ut=0,dt=C.length,m=dt>>>1;ut<m;){var M=2*(ut+1)-1,U=C[M],j=M+1,P=C[j];if(0>d(U,X))j<dt&&0>d(P,U)?(C[ut]=P,C[j]=X,ut=j):(C[ut]=U,C[M]=X,ut=M);else if(j<dt&&0>d(P,X))C[ut]=P,C[j]=X,ut=j;else break t}}return G}function d(C,G){var X=C.sortIndex-G.sortIndex;return X!==0?X:C.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var y=Date,O=y.now();n.unstable_now=function(){return y.now()-O}}var A=[],b=[],$=1,S=null,Q=3,K=!1,Z=!1,F=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function J(C){for(var G=f(b);G!==null;){if(G.callback===null)o(b);else if(G.startTime<=C)o(b),G.sortIndex=G.expirationTime,c(A,G);else break;G=f(b)}}function W(C){if(F=!1,J(C),!Z)if(f(A)!==null)Z=!0,Y||(Y=!0,ft());else{var G=f(b);G!==null&&Dt(W,G.startTime-C)}}var Y=!1,R=-1,rt=5,bt=-1;function st(){return I?!0:!(n.unstable_now()-bt<rt)}function gt(){if(I=!1,Y){var C=n.unstable_now();bt=C;var G=!0;try{t:{Z=!1,F&&(F=!1,V(R),R=-1),K=!0;var X=Q;try{e:{for(J(C),S=f(A);S!==null&&!(S.expirationTime>C&&st());){var ut=S.callback;if(typeof ut=="function"){S.callback=null,Q=S.priorityLevel;var dt=ut(S.expirationTime<=C);if(C=n.unstable_now(),typeof dt=="function"){S.callback=dt,J(C),G=!0;break e}S===f(A)&&o(A),J(C)}else o(A);S=f(A)}if(S!==null)G=!0;else{var m=f(b);m!==null&&Dt(W,m.startTime-C),G=!1}}break t}finally{S=null,Q=X,K=!1}G=void 0}}finally{G?ft():Y=!1}}}var ft;if(typeof N=="function")ft=function(){N(gt)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Ct=Qt.port2;Qt.port1.onmessage=gt,ft=function(){Ct.postMessage(null)}}else ft=function(){k(gt,0)};function Dt(C,G){R=k(function(){C(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return Q},n.unstable_next=function(C){switch(Q){case 1:case 2:case 3:var G=3;break;default:G=Q}var X=Q;Q=G;try{return C()}finally{Q=X}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(C,G){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var X=Q;Q=C;try{return G()}finally{Q=X}},n.unstable_scheduleCallback=function(C,G,X){var ut=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ut+X:ut):X=ut,C){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=X+dt,C={id:$++,callback:G,priorityLevel:C,startTime:X,expirationTime:dt,sortIndex:-1},X>ut?(C.sortIndex=X,c(b,C),f(A)===null&&C===f(b)&&(F?(V(R),R=-1):F=!0,Dt(W,X-ut))):(C.sortIndex=dt,c(A,C),Z||K||(Z=!0,Y||(Y=!0,ft()))),C},n.unstable_shouldYield=st,n.unstable_wrapCallback=function(C){var G=Q;return function(){var X=Q;Q=G;try{return C.apply(this,arguments)}finally{Q=X}}}})(Ho)),Ho}var zh;function xb(){return zh||(zh=1,Uo.exports=Sb()),Uo.exports}var $o={exports:{}},ve={};var Dh;function Eb(){if(Dh)return ve;Dh=1;var n=nf();function c(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)b+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(A,b,$){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:A,containerInfo:b,implementation:$}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ve.createPortal=function(A,b){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return p(A,b,null,$)},ve.flushSync=function(A){var b=y.T,$=o.p;try{if(y.T=null,o.p=2,A)return A()}finally{y.T=b,o.p=$,o.d.f()}},ve.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(A,b))},ve.prefetchDNS=function(A){typeof A=="string"&&o.d.D(A)},ve.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var $=b.as,S=O($,b.crossOrigin),Q=typeof b.integrity=="string"?b.integrity:void 0,K=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;$==="style"?o.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:S,integrity:Q,fetchPriority:K}):$==="script"&&o.d.X(A,{crossOrigin:S,integrity:Q,fetchPriority:K,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ve.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var $=O(b.as,b.crossOrigin);o.d.M(A,{crossOrigin:$,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(A)},ve.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var $=b.as,S=O($,b.crossOrigin);o.d.L(A,$,{crossOrigin:S,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ve.preloadModule=function(A,b){if(typeof A=="string")if(b){var $=O(b.as,b.crossOrigin);o.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:$,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(A)},ve.requestFormReset=function(A){o.d.r(A)},ve.unstable_batchedUpdates=function(A,b){return A(b)},ve.useFormState=function(A,b,$){return y.H.useFormState(A,b,$)},ve.useFormStatus=function(){return y.H.useHostTransitionStatus()},ve.version="19.2.3",ve}var Oh;function np(){if(Oh)return $o.exports;Oh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),$o.exports=Eb(),$o.exports}var Ch;function Tb(){if(Ch)return zu;Ch=1;var n=xb(),c=nf(),f=np();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function p(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(p(t)!==t)throw Error(o(188))}function b(t){var e=t.alternate;if(!e){if(e=p(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return A(u),t;if(i===a)return A(u),e;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=u,a=i;else{for(var r=!1,s=u.child;s;){if(s===l){r=!0,l=u,a=i;break}if(s===a){r=!0,a=u,l=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===l){r=!0,l=i,a=u;break}if(s===a){r=!0,a=i,l=u;break}s=s.sibling}if(!r)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function $(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,Q=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),N=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),bt=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function Ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Profiler";case I:return"StrictMode";case W:return"Suspense";case Y:return"SuspenseList";case bt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case N:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:Ct(t.type)||"Memo";case rt:e=t._payload,t=t._init;try{return Ct(t(e))}catch{}}return null}var Dt=Array.isArray,C=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ut=[],dt=-1;function m(t){return{current:t}}function M(t){0>dt||(t.current=ut[dt],ut[dt]=null,dt--)}function U(t,e){dt++,ut[dt]=t.current,t.current=e}var j=m(null),P=m(null),tt=m(null),at=m(null);function Ot(t,e){switch(U(tt,e),U(P,t),U(j,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?G0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=G0(e),t=k0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(j),U(j,t)}function L(){M(j),M(P),M(tt)}function ot(t){t.memoizedState!==null&&U(at,t);var e=j.current,l=k0(e,t.type);e!==l&&(U(P,t),U(j,l))}function pt(t){P.current===t&&(M(j),M(P)),at.current===t&&(M(at),Au._currentValue=X)}var At,_t;function Nt(t){if(At===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);At=e&&e[1]||"",_t=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+_t}var Ut=!1;function me(t,e){if(!t||Ut)return"";Ut=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(D){var T=D}Reflect.construct(t,[],H)}else{try{H.call()}catch(D){T=D}t.call(H.prototype)}}else{try{throw Error()}catch(D){T=D}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(D){if(D&&T&&typeof D.stack=="string")return[D.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var h=r.split(`
`),E=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<E.length&&!E[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===E.length)for(a=h.length-1,u=E.length-1;1<=a&&0<=u&&h[a]!==E[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==E[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==E[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{Ut=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Nt(l):""}function Ke(t,e){switch(t.tag){case 26:case 27:case 5:return Nt(t.type);case 16:return Nt("Lazy");case 13:return t.child!==e&&e!==null?Nt("Suspense Fallback"):Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return me(t.type,!1);case 11:return me(t.type.render,!1);case 1:return me(t.type,!0);case 31:return Nt("Activity");default:return""}}function ll(t){try{var e="",l=null;do e+=Ke(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var He=Object.prototype.hasOwnProperty,ia=n.unstable_scheduleCallback,ca=n.unstable_cancelCallback,ra=n.unstable_shouldYield,Bu=n.unstable_requestPaint,ye=n.unstable_now,Ip=n.unstable_getCurrentPriorityLevel,Sf=n.unstable_ImmediatePriority,xf=n.unstable_UserBlockingPriority,Nu=n.unstable_NormalPriority,Pp=n.unstable_LowPriority,Ef=n.unstable_IdlePriority,tm=n.log,em=n.unstable_setDisableYieldValue,Rn=null,De=null;function wl(t){if(typeof tm=="function"&&em(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Rn,t)}catch{}}var Oe=Math.clz32?Math.clz32:nm,lm=Math.log,am=Math.LN2;function nm(t){return t>>>=0,t===0?32:31-(lm(t)/am|0)|0}var Uu=256,Hu=262144,$u=4194304;function oa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Lu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?u=oa(a):(r&=s,r!==0?u=oa(r):l||(l=s&~t,l!==0&&(u=oa(l))))):(s=a&~i,s!==0?u=oa(s):r!==0?u=oa(r):l||(l=a&~t,l!==0&&(u=oa(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function Bn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function um(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(){var t=$u;return $u<<=1,($u&62914560)===0&&($u=4194304),t}function gc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Nn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function im(t,e,l,a,u,i){var r=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,E=t.hiddenUpdates;for(l=r&~l;0<l;){var _=31-Oe(l),H=1<<_;s[_]=0,h[_]=-1;var T=E[_];if(T!==null)for(E[_]=null,_=0;_<T.length;_++){var D=T[_];D!==null&&(D.lane&=-536870913)}l&=~H}a!==0&&zf(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function zf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Oe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Df(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Oe(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function Of(t,e){var l=e&-e;return l=(l&42)!==0?1:Ac(l),(l&(t.suspendedLanes|e))!==0?0:l}function Ac(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cf(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:hh(t.type))}function Mf(t,e){var l=G.p;try{return G.p=t,e()}finally{G.p=l}}var _l=Math.random().toString(36).slice(2),oe="__reactFiber$"+_l,ge="__reactProps$"+_l,Ua="__reactContainer$"+_l,xc="__reactEvents$"+_l,cm="__reactListeners$"+_l,rm="__reactHandles$"+_l,wf="__reactResources$"+_l,Un="__reactMarker$"+_l;function Ec(t){delete t[oe],delete t[ge],delete t[xc],delete t[cm],delete t[rm]}function Ha(t){var e=t[oe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ua]||l[oe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=F0(t);t!==null;){if(l=t[oe])return l;t=F0(t)}return e}t=l,l=t.parentNode}return null}function $a(t){if(t=t[oe]||t[Ua]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function La(t){var e=t[wf];return e||(e=t[wf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ie(t){t[Un]=!0}var _f=new Set,Rf={};function fa(t,e){Qa(t,e),Qa(t+"Capture",e)}function Qa(t,e){for(Rf[t]=e,t=0;t<e.length;t++)_f.add(e[t])}var om=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bf={},Nf={};function fm(t){return He.call(Nf,t)?!0:He.call(Bf,t)?!1:om.test(t)?Nf[t]=!0:(Bf[t]=!0,!1)}function Qu(t,e,l){if(fm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function ju(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function fl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sm(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tc(t){if(!t._valueTracker){var e=Uf(t)?"checked":"value";t._valueTracker=sm(t,e,""+t[e])}}function Hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Uf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var dm=/[\n"\\]/g;function Le(t){return t.replace(dm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function zc(t,e,l,a,u,i,r,s){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+$e(e)):t.value!==""+$e(e)&&(t.value=""+$e(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Dc(t,r,$e(e)):l!=null?Dc(t,r,$e(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+$e(s):t.removeAttribute("name")}function $f(t,e,l,a,u,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Tc(t);return}l=l!=null?""+$e(l):"",e=e!=null?""+$e(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Tc(t)}function Dc(t,e,l){e==="number"&&qu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ja(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+$e(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Lf(t,e,l){if(e!=null&&(e=""+$e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+$e(l):""}function Qf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(Dt(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=$e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Tc(t)}function qa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||hm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function qf(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&jf(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&jf(t,i,e[i])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yu(t){return mm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sl(){}var Cc=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ya=null,Ga=null;function Yf(t){var e=$a(t);if(e&&(t=e.stateNode)){var l=t[ge]||null;t:switch(t=e.stateNode,e.type){case"input":if(zc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Le(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ge]||null;if(!u)throw Error(o(90));zc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Hf(a)}break t;case"textarea":Lf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ja(t,!!l.multiple,e,!1)}}}var wc=!1;function Gf(t,e,l){if(wc)return t(e,l);wc=!0;try{var a=t(e);return a}finally{if(wc=!1,(Ya!==null||Ga!==null)&&(Mi(),Ya&&(e=Ya,t=Ga,Ga=Ya=null,Yf(e),t)))for(e=0;e<t.length;e++)Yf(t[e])}}function $n(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ge]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var dl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=!1;if(dl)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){_c=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{_c=!1}var Rl=null,Rc=null,Gu=null;function kf(){if(Gu)return Gu;var t,e=Rc,l=e.length,a,u="value"in Rl?Rl.value:Rl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var r=l-t;for(a=1;a<=r&&e[l-a]===u[i-a];a++);return Gu=u.slice(t,1<a?1-a:void 0)}function ku(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function Xf(){return!1}function Ae(t){function e(l,a,u,i,r){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xu:Xf,this.isPropagationStopped=Xf,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=Ae(sa),Qn=S({},sa,{view:0,detail:0}),vm=Ae(Qn),Bc,Nc,jn,Zu=S({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jn&&(jn&&t.type==="mousemove"?(Bc=t.screenX-jn.screenX,Nc=t.screenY-jn.screenY):Nc=Bc=0,jn=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),Vf=Ae(Zu),bm=S({},Zu,{dataTransfer:0}),ym=Ae(bm),gm=S({},Qn,{relatedTarget:0}),Uc=Ae(gm),Am=S({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=Ae(Am),xm=S({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Em=Ae(xm),Tm=S({},sa,{data:0}),Zf=Ae(Tm),zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Om[t])?!!e[t]:!1}function Hc(){return Cm}var Mm=S({},Qn,{key:function(t){if(t.key){var e=zm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wm=Ae(Mm),_m=S({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Ae(_m),Rm=S({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),Bm=Ae(Rm),Nm=S({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=Ae(Nm),Hm=S({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$m=Ae(Hm),Lm=S({},sa,{newState:0,oldState:0}),Qm=Ae(Lm),jm=[9,13,27,32],$c=dl&&"CompositionEvent"in window,qn=null;dl&&"documentMode"in document&&(qn=document.documentMode);var qm=dl&&"TextEvent"in window&&!qn,Jf=dl&&(!$c||qn&&8<qn&&11>=qn),Wf=" ",Ff=!1;function If(t,e){switch(t){case"keyup":return jm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function Ym(t,e){switch(t){case"compositionend":return Pf(e);case"keypress":return e.which!==32?null:(Ff=!0,Wf);case"textInput":return t=e.data,t===Wf&&Ff?null:t;default:return null}}function Gm(t,e){if(ka)return t==="compositionend"||!$c&&If(t,e)?(t=kf(),Gu=Rc=Rl=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jf&&e.locale!=="ko"?null:e.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!km[t.type]:e==="textarea"}function es(t,e,l,a){Ya?Ga?Ga.push(a):Ga=[a]:Ya=a,e=Hi(e,"onChange"),0<e.length&&(l=new Vu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Yn=null,Gn=null;function Xm(t){$0(t,0)}function Ku(t){var e=Hn(t);if(Hf(e))return t}function ls(t,e){if(t==="change")return e}var as=!1;if(dl){var Lc;if(dl){var Qc="oninput"in document;if(!Qc){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Qc=typeof ns.oninput=="function"}Lc=Qc}else Lc=!1;as=Lc&&(!document.documentMode||9<document.documentMode)}function us(){Yn&&(Yn.detachEvent("onpropertychange",is),Gn=Yn=null)}function is(t){if(t.propertyName==="value"&&Ku(Gn)){var e=[];es(e,Gn,t,Mc(t)),Gf(Xm,e)}}function Vm(t,e,l){t==="focusin"?(us(),Yn=e,Gn=l,Yn.attachEvent("onpropertychange",is)):t==="focusout"&&us()}function Zm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Gn)}function Km(t,e){if(t==="click")return Ku(e)}function Jm(t,e){if(t==="input"||t==="change")return Ku(e)}function Wm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:Wm;function kn(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!He.call(e,u)||!Ce(t[u],e[u]))return!1}return!0}function cs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rs(t,e){var l=cs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=cs(l)}}function os(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?os(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=qu(t.document)}return e}function jc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Fm=dl&&"documentMode"in document&&11>=document.documentMode,Xa=null,qc=null,Xn=null,Yc=!1;function ss(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Yc||Xa==null||Xa!==qu(a)||(a=Xa,"selectionStart"in a&&jc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xn&&kn(Xn,a)||(Xn=a,a=Hi(qc,"onSelect"),0<a.length&&(e=new Vu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Xa)))}function da(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Va={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Gc={},ds={};dl&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ha(t){if(Gc[t])return Gc[t];if(!Va[t])return t;var e=Va[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in ds)return Gc[t]=e[l];return t}var hs=ha("animationend"),ps=ha("animationiteration"),ms=ha("animationstart"),Im=ha("transitionrun"),Pm=ha("transitionstart"),tv=ha("transitioncancel"),vs=ha("transitionend"),bs=new Map,kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kc.push("scrollEnd");function Je(t,e){bs.set(t,e),fa(e,[t])}var Ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qe=[],Za=0,Xc=0;function Wu(){for(var t=Za,e=Xc=Za=0;e<t;){var l=Qe[e];Qe[e++]=null;var a=Qe[e];Qe[e++]=null;var u=Qe[e];Qe[e++]=null;var i=Qe[e];if(Qe[e++]=null,a!==null&&u!==null){var r=a.pending;r===null?u.next=u:(u.next=r.next,r.next=u),a.pending=u}i!==0&&ys(l,u,i)}}function Fu(t,e,l,a){Qe[Za++]=t,Qe[Za++]=e,Qe[Za++]=l,Qe[Za++]=a,Xc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Vc(t,e,l,a){return Fu(t,e,l,a),Iu(t)}function pa(t,e){return Fu(t,null,null,e),Iu(t)}function ys(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-Oe(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Iu(t){if(50<hu)throw hu=0,eo=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ka={};function ev(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(t,e,l,a){return new ev(t,e,l,a)}function Zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hl(t,e){var l=t.alternate;return l===null?(l=Me(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function gs(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pu(t,e,l,a,u,i){var r=0;if(a=t,typeof t=="function")Zc(t)&&(r=1);else if(typeof t=="string")r=ib(t,l,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case bt:return t=Me(31,l,e,u),t.elementType=bt,t.lanes=i,t;case F:return ma(l.children,u,i,e);case I:r=8,u|=24;break;case k:return t=Me(12,l,e,u|2),t.elementType=k,t.lanes=i,t;case W:return t=Me(13,l,e,u),t.elementType=W,t.lanes=i,t;case Y:return t=Me(19,l,e,u),t.elementType=Y,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:r=10;break t;case V:r=9;break t;case J:r=11;break t;case R:r=14;break t;case rt:r=16,a=null;break t}r=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=Me(r,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ma(t,e,l,a){return t=Me(7,t,a,e),t.lanes=l,t}function Kc(t,e,l){return t=Me(6,t,null,e),t.lanes=l,t}function As(t){var e=Me(18,null,null,0);return e.stateNode=t,e}function Jc(t,e,l){return e=Me(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ss=new WeakMap;function je(t,e){if(typeof t=="object"&&t!==null){var l=Ss.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ll(e)},Ss.set(t,e),e)}return{value:t,source:e,stack:ll(e)}}var Ja=[],Wa=0,ti=null,Vn=0,qe=[],Ye=0,Bl=null,al=1,nl="";function pl(t,e){Ja[Wa++]=Vn,Ja[Wa++]=ti,ti=t,Vn=e}function xs(t,e,l){qe[Ye++]=al,qe[Ye++]=nl,qe[Ye++]=Bl,Bl=t;var a=al;t=nl;var u=32-Oe(a)-1;a&=~(1<<u),l+=1;var i=32-Oe(e)+u;if(30<i){var r=u-u%5;i=(a&(1<<r)-1).toString(32),a>>=r,u-=r,al=1<<32-Oe(e)+u|l<<u|a,nl=i+t}else al=1<<i|l<<u|a,nl=t}function Wc(t){t.return!==null&&(pl(t,1),xs(t,1,0))}function Fc(t){for(;t===ti;)ti=Ja[--Wa],Ja[Wa]=null,Vn=Ja[--Wa],Ja[Wa]=null;for(;t===Bl;)Bl=qe[--Ye],qe[Ye]=null,nl=qe[--Ye],qe[Ye]=null,al=qe[--Ye],qe[Ye]=null}function Es(t,e){qe[Ye++]=al,qe[Ye++]=nl,qe[Ye++]=Bl,al=e.id,nl=e.overflow,Bl=t}var fe=null,kt=null,zt=!1,Nl=null,Ge=!1,Ic=Error(o(519));function Ul(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(je(e,t)),Ic}function Ts(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[oe]=t,e[ge]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<mu.length;l++)xt(mu[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),$f(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),Qf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||q0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=sl),e=!0):e=!1,e||Ul(t,!0)}function zs(t){for(fe=t.return;fe;)switch(fe.tag){case 5:case 31:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:fe=fe.return}}function Fa(t){if(t!==fe)return!1;if(!zt)return zs(t),zt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||bo(t.type,t.memoizedProps)),l=!l),l&&kt&&Ul(t),zs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));kt=W0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));kt=W0(t)}else e===27?(e=kt,Jl(t.type)?(t=xo,xo=null,kt=t):kt=e):kt=fe?Xe(t.stateNode.nextSibling):null;return!0}function va(){kt=fe=null,zt=!1}function Pc(){var t=Nl;return t!==null&&(Te===null?Te=t:Te.push.apply(Te,t),Nl=null),t}function Zn(t){Nl===null?Nl=[t]:Nl.push(t)}var tr=m(null),ba=null,ml=null;function Hl(t,e,l){U(tr,e._currentValue),e._currentValue=l}function vl(t){t._currentValue=tr.current,M(tr)}function er(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function lr(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var r=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),er(i.return,l,t),a||(r=null);break t}i=s.next}}else if(u.tag===18){if(r=u.return,r===null)throw Error(o(341));r.lanes|=l,i=r.alternate,i!==null&&(i.lanes|=l),er(r,l,t),r=null}else r=u.child;if(r!==null)r.return=u;else for(r=u;r!==null;){if(r===t){r=null;break}if(u=r.sibling,u!==null){u.return=r.return,r=u;break}r=r.return}u=r}}function Ia(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var r=u.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=u.type;Ce(u.pendingProps.value,r.value)||(t!==null?t.push(s):t=[s])}}else if(u===at.current){if(r=u.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Au):t=[Au])}u=u.return}t!==null&&lr(e,t,l,a),e.flags|=262144}function ei(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ya(t){ba=t,ml=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function se(t){return Ds(ba,t)}function li(t,e){return ba===null&&ya(t),Ds(t,e)}function Ds(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ml===null){if(t===null)throw Error(o(308));ml=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ml=ml.next=e;return l}var lv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},av=n.unstable_scheduleCallback,nv=n.unstable_NormalPriority,Pt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ar(){return{controller:new lv,data:new Map,refCount:0}}function Kn(t){t.refCount--,t.refCount===0&&av(nv,function(){t.controller.abort()})}var Jn=null,nr=0,Pa=0,tn=null;function uv(t,e){if(Jn===null){var l=Jn=[];nr=0,Pa=co(),tn={status:"pending",value:void 0,then:function(a){l.push(a)}}}return nr++,e.then(Os,Os),e}function Os(){if(--nr===0&&Jn!==null){tn!==null&&(tn.status="fulfilled");var t=Jn;Jn=null,Pa=0,tn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function iv(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var Cs=C.S;C.S=function(t,e){s0=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&uv(t,e),Cs!==null&&Cs(t,e)};var ga=m(null);function ur(){var t=ga.current;return t!==null?t:Gt.pooledCache}function ai(t,e){e===null?U(ga,ga.current):U(ga,e.pool)}function Ms(){var t=ur();return t===null?null:{parent:Pt._currentValue,pool:t}}var en=Error(o(460)),ir=Error(o(474)),ni=Error(o(542)),ui={then:function(){}};function ws(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _s(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(sl,sl),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t;default:if(typeof e.status=="string")e.then(sl,sl);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bs(t),t}throw Sa=e,en}}function Aa(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Sa=l,en):l}}var Sa=null;function Rs(){if(Sa===null)throw Error(o(459));var t=Sa;return Sa=null,t}function Bs(t){if(t===en||t===ni)throw Error(o(483))}var ln=null,Wn=0;function ii(t){var e=Wn;return Wn+=1,ln===null&&(ln=[]),_s(ln,t,e)}function Fn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ci(t,e){throw e.$$typeof===Q?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ns(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function l(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function a(g){for(var v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function u(g,v){return g=hl(g,v),g.index=0,g.sibling=null,g}function i(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=67108866,v):x):(g.flags|=67108866,v)):(g.flags|=1048576,v)}function r(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function s(g,v,x,B){return v===null||v.tag!==6?(v=Kc(x,g.mode,B),v.return=g,v):(v=u(v,x),v.return=g,v)}function h(g,v,x,B){var it=x.type;return it===F?_(g,v,x.props.children,B,x.key):v!==null&&(v.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&Aa(it)===v.type)?(v=u(v,x.props),Fn(v,x),v.return=g,v):(v=Pu(x.type,x.key,x.props,null,g.mode,B),Fn(v,x),v.return=g,v)}function E(g,v,x,B){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Jc(x,g.mode,B),v.return=g,v):(v=u(v,x.children||[]),v.return=g,v)}function _(g,v,x,B,it){return v===null||v.tag!==7?(v=ma(x,g.mode,B,it),v.return=g,v):(v=u(v,x),v.return=g,v)}function H(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Kc(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return x=Pu(v.type,v.key,v.props,null,g.mode,x),Fn(x,v),x.return=g,x;case Z:return v=Jc(v,g.mode,x),v.return=g,v;case rt:return v=Aa(v),H(g,v,x)}if(Dt(v)||ft(v))return v=ma(v,g.mode,x,null),v.return=g,v;if(typeof v.then=="function")return H(g,ii(v),x);if(v.$$typeof===N)return H(g,li(g,v),x);ci(g,v)}return null}function T(g,v,x,B){var it=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return it!==null?null:s(g,v,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case K:return x.key===it?h(g,v,x,B):null;case Z:return x.key===it?E(g,v,x,B):null;case rt:return x=Aa(x),T(g,v,x,B)}if(Dt(x)||ft(x))return it!==null?null:_(g,v,x,B,null);if(typeof x.then=="function")return T(g,v,ii(x),B);if(x.$$typeof===N)return T(g,v,li(g,x),B);ci(g,x)}return null}function D(g,v,x,B,it){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return g=g.get(x)||null,s(v,g,""+B,it);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case K:return g=g.get(B.key===null?x:B.key)||null,h(v,g,B,it);case Z:return g=g.get(B.key===null?x:B.key)||null,E(v,g,B,it);case rt:return B=Aa(B),D(g,v,x,B,it)}if(Dt(B)||ft(B))return g=g.get(x)||null,_(v,g,B,it,null);if(typeof B.then=="function")return D(g,v,x,ii(B),it);if(B.$$typeof===N)return D(g,v,x,li(v,B),it);ci(v,B)}return null}function lt(g,v,x,B){for(var it=null,Mt=null,nt=v,vt=v=0,Tt=null;nt!==null&&vt<x.length;vt++){nt.index>vt?(Tt=nt,nt=null):Tt=nt.sibling;var wt=T(g,nt,x[vt],B);if(wt===null){nt===null&&(nt=Tt);break}t&&nt&&wt.alternate===null&&e(g,nt),v=i(wt,v,vt),Mt===null?it=wt:Mt.sibling=wt,Mt=wt,nt=Tt}if(vt===x.length)return l(g,nt),zt&&pl(g,vt),it;if(nt===null){for(;vt<x.length;vt++)nt=H(g,x[vt],B),nt!==null&&(v=i(nt,v,vt),Mt===null?it=nt:Mt.sibling=nt,Mt=nt);return zt&&pl(g,vt),it}for(nt=a(nt);vt<x.length;vt++)Tt=D(nt,g,vt,x[vt],B),Tt!==null&&(t&&Tt.alternate!==null&&nt.delete(Tt.key===null?vt:Tt.key),v=i(Tt,v,vt),Mt===null?it=Tt:Mt.sibling=Tt,Mt=Tt);return t&&nt.forEach(function(ta){return e(g,ta)}),zt&&pl(g,vt),it}function ct(g,v,x,B){if(x==null)throw Error(o(151));for(var it=null,Mt=null,nt=v,vt=v=0,Tt=null,wt=x.next();nt!==null&&!wt.done;vt++,wt=x.next()){nt.index>vt?(Tt=nt,nt=null):Tt=nt.sibling;var ta=T(g,nt,wt.value,B);if(ta===null){nt===null&&(nt=Tt);break}t&&nt&&ta.alternate===null&&e(g,nt),v=i(ta,v,vt),Mt===null?it=ta:Mt.sibling=ta,Mt=ta,nt=Tt}if(wt.done)return l(g,nt),zt&&pl(g,vt),it;if(nt===null){for(;!wt.done;vt++,wt=x.next())wt=H(g,wt.value,B),wt!==null&&(v=i(wt,v,vt),Mt===null?it=wt:Mt.sibling=wt,Mt=wt);return zt&&pl(g,vt),it}for(nt=a(nt);!wt.done;vt++,wt=x.next())wt=D(nt,g,vt,wt.value,B),wt!==null&&(t&&wt.alternate!==null&&nt.delete(wt.key===null?vt:wt.key),v=i(wt,v,vt),Mt===null?it=wt:Mt.sibling=wt,Mt=wt);return t&&nt.forEach(function(bb){return e(g,bb)}),zt&&pl(g,vt),it}function Yt(g,v,x,B){if(typeof x=="object"&&x!==null&&x.type===F&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case K:t:{for(var it=x.key;v!==null;){if(v.key===it){if(it=x.type,it===F){if(v.tag===7){l(g,v.sibling),B=u(v,x.props.children),B.return=g,g=B;break t}}else if(v.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&Aa(it)===v.type){l(g,v.sibling),B=u(v,x.props),Fn(B,x),B.return=g,g=B;break t}l(g,v);break}else e(g,v);v=v.sibling}x.type===F?(B=ma(x.props.children,g.mode,B,x.key),B.return=g,g=B):(B=Pu(x.type,x.key,x.props,null,g.mode,B),Fn(B,x),B.return=g,g=B)}return r(g);case Z:t:{for(it=x.key;v!==null;){if(v.key===it)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){l(g,v.sibling),B=u(v,x.children||[]),B.return=g,g=B;break t}else{l(g,v);break}else e(g,v);v=v.sibling}B=Jc(x,g.mode,B),B.return=g,g=B}return r(g);case rt:return x=Aa(x),Yt(g,v,x,B)}if(Dt(x))return lt(g,v,x,B);if(ft(x)){if(it=ft(x),typeof it!="function")throw Error(o(150));return x=it.call(x),ct(g,v,x,B)}if(typeof x.then=="function")return Yt(g,v,ii(x),B);if(x.$$typeof===N)return Yt(g,v,li(g,x),B);ci(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(l(g,v.sibling),B=u(v,x),B.return=g,g=B):(l(g,v),B=Kc(x,g.mode,B),B.return=g,g=B),r(g)):l(g,v)}return function(g,v,x,B){try{Wn=0;var it=Yt(g,v,x,B);return ln=null,it}catch(nt){if(nt===en||nt===ni)throw nt;var Mt=Me(29,nt,null,g.mode);return Mt.lanes=B,Mt.return=g,Mt}}}var xa=Ns(!0),Us=Ns(!1),$l=!1;function cr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ll(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ql(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Rt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Iu(t),ys(t,null,l),e}return Fu(t,a,e,l),Iu(t)}function In(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Df(t,l)}}function or(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var r={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=r:i=i.next=r,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var fr=!1;function Pn(){if(fr){var t=tn;if(t!==null)throw t}}function tu(t,e,l,a){fr=!1;var u=t.updateQueue;$l=!1;var i=u.firstBaseUpdate,r=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,E=h.next;h.next=null,r===null?i=E:r.next=E,r=h;var _=t.alternate;_!==null&&(_=_.updateQueue,s=_.lastBaseUpdate,s!==r&&(s===null?_.firstBaseUpdate=E:s.next=E,_.lastBaseUpdate=h))}if(i!==null){var H=u.baseState;r=0,_=E=h=null,s=i;do{var T=s.lane&-536870913,D=T!==s.lane;if(D?(Et&T)===T:(a&T)===T){T!==0&&T===Pa&&(fr=!0),_!==null&&(_=_.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var lt=t,ct=s;T=e;var Yt=l;switch(ct.tag){case 1:if(lt=ct.payload,typeof lt=="function"){H=lt.call(Yt,H,T);break t}H=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ct.payload,T=typeof lt=="function"?lt.call(Yt,H,T):lt,T==null)break t;H=S({},H,T);break t;case 2:$l=!0}}T=s.callback,T!==null&&(t.flags|=64,D&&(t.flags|=8192),D=u.callbacks,D===null?u.callbacks=[T]:D.push(T))}else D={lane:T,tag:s.tag,payload:s.payload,callback:s.callback,next:null},_===null?(E=_=D,h=H):_=_.next=D,r|=T;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;D=s,s=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);_===null&&(h=H),u.baseState=h,u.firstBaseUpdate=E,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),kl|=r,t.lanes=r,t.memoizedState=H}}function Hs(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function $s(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Hs(l[t],e)}var an=m(null),ri=m(0);function Ls(t,e){t=zl,U(ri,t),U(an,e),zl=t|e.baseLanes}function sr(){U(ri,zl),U(an,an.current)}function dr(){zl=ri.current,M(an),M(ri)}var we=m(null),ke=null;function jl(t){var e=t.alternate;U(Ft,Ft.current&1),U(we,t),ke===null&&(e===null||an.current!==null||e.memoizedState!==null)&&(ke=t)}function hr(t){U(Ft,Ft.current),U(we,t),ke===null&&(ke=t)}function Qs(t){t.tag===22?(U(Ft,Ft.current),U(we,t),ke===null&&(ke=t)):ql()}function ql(){U(Ft,Ft.current),U(we,we.current)}function _e(t){M(we),ke===t&&(ke=null),M(Ft)}var Ft=m(0);function oi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ao(l)||So(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=0,mt=null,jt=null,te=null,fi=!1,nn=!1,Ea=!1,si=0,eu=0,un=null,cv=0;function Kt(){throw Error(o(321))}function pr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ce(t[l],e[l]))return!1;return!0}function mr(t,e,l,a,u,i){return bl=i,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?xd:wr,Ea=!1,i=l(a,u),Ea=!1,nn&&(i=qs(e,l,a,u)),js(t),i}function js(t){C.H=nu;var e=jt!==null&&jt.next!==null;if(bl=0,te=jt=mt=null,fi=!1,eu=0,un=null,e)throw Error(o(300));t===null||ee||(t=t.dependencies,t!==null&&ei(t)&&(ee=!0))}function qs(t,e,l,a){mt=t;var u=0;do{if(nn&&(un=null),eu=0,nn=!1,25<=u)throw Error(o(301));if(u+=1,te=jt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=Ed,i=e(l,a)}while(nn);return i}function rv(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?lu(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(mt.flags|=1024),e}function vr(){var t=si!==0;return si=0,t}function br(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function yr(t){if(fi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fi=!1}bl=0,te=jt=mt=null,nn=!1,eu=si=0,un=null}function be(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?mt.memoizedState=te=t:te=te.next=t,te}function It(){if(jt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=te===null?mt.memoizedState:te.next;if(e!==null)te=e,jt=t;else{if(t===null)throw mt.alternate===null?Error(o(467)):Error(o(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},te===null?mt.memoizedState=te=t:te=te.next=t}return te}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lu(t){var e=eu;return eu+=1,un===null&&(un=[]),t=_s(un,t,e),e=mt,(te===null?e.memoizedState:te.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?xd:wr),t}function hi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lu(t);if(t.$$typeof===N)return se(t)}throw Error(o(438,String(t)))}function gr(t){var e=null,l=mt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=mt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=di(),mt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=st;return e.index++,l}function yl(t,e){return typeof e=="function"?e(t):e}function pi(t){var e=It();return Ar(e,jt,t)}function Ar(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var r=u.next;u.next=i.next,i.next=r}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=r=null,h=null,E=e,_=!1;do{var H=E.lane&-536870913;if(H!==E.lane?(Et&H)===H:(bl&H)===H){var T=E.revertLane;if(T===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),H===Pa&&(_=!0);else if((bl&T)===T){E=E.next,T===Pa&&(_=!0);continue}else H={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=H,r=i):h=h.next=H,mt.lanes|=T,kl|=T;H=E.action,Ea&&l(i,H),i=E.hasEagerState?E.eagerState:l(i,H)}else T={lane:H,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},h===null?(s=h=T,r=i):h=h.next=T,mt.lanes|=H,kl|=H;E=E.next}while(E!==null&&E!==e);if(h===null?r=i:h.next=s,!Ce(i,t.memoizedState)&&(ee=!0,_&&(l=tn,l!==null)))throw l;t.memoizedState=i,t.baseState=r,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Sr(t){var e=It(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var r=u=u.next;do i=t(i,r.action),r=r.next;while(r!==u);Ce(i,e.memoizedState)||(ee=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Ys(t,e,l){var a=mt,u=It(),i=zt;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=e();var r=!Ce((jt||u).memoizedState,l);if(r&&(u.memoizedState=l,ee=!0),u=u.queue,Tr(Xs.bind(null,a,u,t),[t]),u.getSnapshot!==e||r||te!==null&&te.memoizedState.tag&1){if(a.flags|=2048,cn(9,{destroy:void 0},ks.bind(null,a,u,l,e),null),Gt===null)throw Error(o(349));i||(bl&127)!==0||Gs(a,e,l)}return l}function Gs(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=mt.updateQueue,e===null?(e=di(),mt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function ks(t,e,l,a){e.value=l,e.getSnapshot=a,Vs(e)&&Zs(t)}function Xs(t,e,l){return l(function(){Vs(e)&&Zs(t)})}function Vs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ce(t,l)}catch{return!0}}function Zs(t){var e=pa(t,2);e!==null&&ze(e,t,2)}function xr(t){var e=be();if(typeof t=="function"){var l=t;if(t=l(),Ea){wl(!0);try{l()}finally{wl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e}function Ks(t,e,l,a){return t.baseState=l,Ar(t,jt,typeof a=="function"?a:yl)}function ov(t,e,l,a,u){if(bi(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};C.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Js(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Js(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=C.T,r={};C.T=r;try{var s=l(u,a),h=C.S;h!==null&&h(r,s),Ws(t,e,s)}catch(E){Er(t,e,E)}finally{i!==null&&r.types!==null&&(i.types=r.types),C.T=i}}else try{i=l(u,a),Ws(t,e,i)}catch(E){Er(t,e,E)}}function Ws(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Fs(t,e,a)},function(a){return Er(t,e,a)}):Fs(t,e,l)}function Fs(t,e,l){e.status="fulfilled",e.value=l,Is(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Js(t,l)))}function Er(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Is(e),e=e.next;while(e!==a)}t.action=null}function Is(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ps(t,e){return e}function td(t,e){if(zt){var l=Gt.formState;if(l!==null){t:{var a=mt;if(zt){if(kt){e:{for(var u=kt,i=Ge;u.nodeType!==8;){if(!i){u=null;break e}if(u=Xe(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){kt=Xe(u.nextSibling),a=u.data==="F!";break t}}Ul(a)}a=!1}a&&(e=l[0])}}return l=be(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},l.queue=a,l=gd.bind(null,mt,a),a.dispatch=l,a=xr(!1),i=Mr.bind(null,mt,!1,a.queue),a=be(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=ov.bind(null,mt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function ed(t){var e=It();return ld(e,jt,t)}function ld(t,e,l){if(e=Ar(t,e,Ps)[0],t=pi(yl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=lu(e)}catch(r){throw r===en?ni:r}else a=e;e=It();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(mt.flags|=2048,cn(9,{destroy:void 0},fv.bind(null,u,l),null)),[a,i,t]}function fv(t,e){t.action=e}function ad(t){var e=It(),l=jt;if(l!==null)return ld(e,l,t);It(),e=e.memoizedState,l=It();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function cn(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=mt.updateQueue,e===null&&(e=di(),mt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function nd(){return It().memoizedState}function mi(t,e,l,a){var u=be();mt.flags|=t,u.memoizedState=cn(1|e,{destroy:void 0},l,a===void 0?null:a)}function vi(t,e,l,a){var u=It();a=a===void 0?null:a;var i=u.memoizedState.inst;jt!==null&&a!==null&&pr(a,jt.memoizedState.deps)?u.memoizedState=cn(e,i,l,a):(mt.flags|=t,u.memoizedState=cn(1|e,i,l,a))}function ud(t,e){mi(8390656,8,t,e)}function Tr(t,e){vi(2048,8,t,e)}function sv(t){mt.flags|=4;var e=mt.updateQueue;if(e===null)e=di(),mt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function id(t){var e=It().memoizedState;return sv({ref:e,nextImpl:t}),function(){if((Rt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function cd(t,e){return vi(4,2,t,e)}function rd(t,e){return vi(4,4,t,e)}function od(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fd(t,e,l){l=l!=null?l.concat([t]):null,vi(4,4,od.bind(null,e,t),l)}function zr(){}function sd(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&pr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function dd(t,e){var l=It();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&pr(e,a[1]))return a[0];if(a=t(),Ea){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a}function Dr(t,e,l){return l===void 0||(bl&1073741824)!==0&&(Et&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=h0(),mt.lanes|=t,kl|=t,l)}function hd(t,e,l,a){return Ce(l,e)?l:an.current!==null?(t=Dr(t,l,a),Ce(t,e)||(ee=!0),t):(bl&42)===0||(bl&1073741824)!==0&&(Et&261930)===0?(ee=!0,t.memoizedState=l):(t=h0(),mt.lanes|=t,kl|=t,e)}function pd(t,e,l,a,u){var i=G.p;G.p=i!==0&&8>i?i:8;var r=C.T,s={};C.T=s,Mr(t,!1,e,l);try{var h=u(),E=C.S;if(E!==null&&E(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=iv(h,a);au(t,e,_,Ne(t))}else au(t,e,a,Ne(t))}catch(H){au(t,e,{then:function(){},status:"rejected",reason:H},Ne())}finally{G.p=i,r!==null&&s.types!==null&&(r.types=s.types),C.T=r}}function dv(){}function Or(t,e,l,a){if(t.tag!==5)throw Error(o(476));var u=md(t).queue;pd(t,u,e,X,l===null?dv:function(){return vd(t),l(a)})}function md(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:X},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function vd(t){var e=md(t);e.next===null&&(e=t.alternate.memoizedState),au(t,e.next.queue,{},Ne())}function Cr(){return se(Au)}function bd(){return It().memoizedState}function yd(){return It().memoizedState}function hv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ne();t=Ll(l);var a=Ql(e,t,l);a!==null&&(ze(a,e,l),In(a,e,l)),e={cache:ar()},t.payload=e;return}e=e.return}}function pv(t,e,l){var a=Ne();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bi(t)?Ad(e,l):(l=Vc(t,e,l,a),l!==null&&(ze(l,t,a),Sd(l,e,a)))}function gd(t,e,l){var a=Ne();au(t,e,l,a)}function au(t,e,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(bi(t))Ad(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,s=i(r,l);if(u.hasEagerState=!0,u.eagerState=s,Ce(s,r))return Fu(t,e,u,0),Gt===null&&Wu(),!1}catch{}if(l=Vc(t,e,u,a),l!==null)return ze(l,t,a),Sd(l,e,a),!0}return!1}function Mr(t,e,l,a){if(a={lane:2,revertLane:co(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bi(t)){if(e)throw Error(o(479))}else e=Vc(t,l,a,2),e!==null&&ze(e,t,2)}function bi(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Ad(t,e){nn=fi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Sd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Df(t,l)}}var nu={readContext:se,use:hi,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};nu.useEffectEvent=Kt;var xd={readContext:se,use:hi,useCallback:function(t,e){return be().memoizedState=[t,e===void 0?null:e],t},useContext:se,useEffect:ud,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,mi(4194308,4,od.bind(null,e,t),l)},useLayoutEffect:function(t,e){return mi(4194308,4,t,e)},useInsertionEffect:function(t,e){mi(4,2,t,e)},useMemo:function(t,e){var l=be();e=e===void 0?null:e;var a=t();if(Ea){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=be();if(l!==void 0){var u=l(e);if(Ea){wl(!0);try{l(e)}finally{wl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=pv.bind(null,mt,t),[a.memoizedState,t]},useRef:function(t){var e=be();return t={current:t},e.memoizedState=t},useState:function(t){t=xr(t);var e=t.queue,l=gd.bind(null,mt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:zr,useDeferredValue:function(t,e){var l=be();return Dr(l,t,e)},useTransition:function(){var t=xr(!1);return t=pd.bind(null,mt,t.queue,!0,!1),be().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=mt,u=be();if(zt){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),Gt===null)throw Error(o(349));(Et&127)!==0||Gs(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,ud(Xs.bind(null,a,i,t),[t]),a.flags|=2048,cn(9,{destroy:void 0},ks.bind(null,a,i,l,e),null),l},useId:function(){var t=be(),e=Gt.identifierPrefix;if(zt){var l=nl,a=al;l=(a&~(1<<32-Oe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=si++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=cv++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Cr,useFormState:td,useActionState:td,useOptimistic:function(t){var e=be();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Mr.bind(null,mt,!0,l),l.dispatch=e,[t,e]},useMemoCache:gr,useCacheRefresh:function(){return be().memoizedState=hv.bind(null,mt)},useEffectEvent:function(t){var e=be(),l={impl:t};return e.memoizedState=l,function(){if((Rt&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},wr={readContext:se,use:hi,useCallback:sd,useContext:se,useEffect:Tr,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:rd,useMemo:dd,useReducer:pi,useRef:nd,useState:function(){return pi(yl)},useDebugValue:zr,useDeferredValue:function(t,e){var l=It();return hd(l,jt.memoizedState,t,e)},useTransition:function(){var t=pi(yl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:lu(t),e]},useSyncExternalStore:Ys,useId:bd,useHostTransitionStatus:Cr,useFormState:ed,useActionState:ed,useOptimistic:function(t,e){var l=It();return Ks(l,jt,t,e)},useMemoCache:gr,useCacheRefresh:yd};wr.useEffectEvent=id;var Ed={readContext:se,use:hi,useCallback:sd,useContext:se,useEffect:Tr,useImperativeHandle:fd,useInsertionEffect:cd,useLayoutEffect:rd,useMemo:dd,useReducer:Sr,useRef:nd,useState:function(){return Sr(yl)},useDebugValue:zr,useDeferredValue:function(t,e){var l=It();return jt===null?Dr(l,t,e):hd(l,jt.memoizedState,t,e)},useTransition:function(){var t=Sr(yl)[0],e=It().memoizedState;return[typeof t=="boolean"?t:lu(t),e]},useSyncExternalStore:Ys,useId:bd,useHostTransitionStatus:Cr,useFormState:ad,useActionState:ad,useOptimistic:function(t,e){var l=It();return jt!==null?Ks(l,jt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:gr,useCacheRefresh:yd};Ed.useEffectEvent=id;function _r(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:S({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Rr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=Ll(a);u.payload=e,l!=null&&(u.callback=l),e=Ql(t,u,a),e!==null&&(ze(e,t,a),In(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ne(),u=Ll(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Ql(t,u,a),e!==null&&(ze(e,t,a),In(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ne(),a=Ll(l);a.tag=2,e!=null&&(a.callback=e),e=Ql(t,a,l),e!==null&&(ze(e,t,l),In(e,t,l))}};function Td(t,e,l,a,u,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,r):e.prototype&&e.prototype.isPureReactComponent?!kn(l,a)||!kn(u,i):!0}function zd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Rr.enqueueReplaceState(e,e.state,null)}function Ta(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=S({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function Dd(t){Ju(t)}function Od(t){console.error(t)}function Cd(t){Ju(t)}function yi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Md(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Br(t,e,l){return l=Ll(l),l.tag=3,l.payload={element:null},l.callback=function(){yi(t,e)},l}function wd(t){return t=Ll(t),t.tag=3,t}function _d(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){Md(e,l,a)}}var r=l.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Md(e,l,a),typeof u!="function"&&(Xl===null?Xl=new Set([this]):Xl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function mv(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Ia(e,l,u,!0),l=we.current,l!==null){switch(l.tag){case 31:case 13:return ke===null?wi():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===ui?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),no(t,a,u)),!1;case 22:return l.flags|=65536,a===ui?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),no(t,a,u)),!1}throw Error(o(435,l.tag))}return no(t,a,u),wi(),!1}if(zt)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Ic&&(t=Error(o(422),{cause:a}),Zn(je(t,l)))):(a!==Ic&&(e=Error(o(423),{cause:a}),Zn(je(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=je(a,l),u=Br(t.stateNode,a,u),or(t,u),Jt!==4&&(Jt=2)),!1;var i=Error(o(520),{cause:a});if(i=je(i,l),du===null?du=[i]:du.push(i),Jt!==4&&(Jt=2),e===null)return!0;a=je(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Br(l.stateNode,a,t),or(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xl===null||!Xl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=wd(u),_d(u,t,l,a),or(l,u),!1}l=l.return}while(l!==null);return!1}var Nr=Error(o(461)),ee=!1;function de(t,e,l,a){e.child=t===null?Us(e,null,l,a):xa(e,t.child,l,a)}function Rd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var r={};for(var s in a)s!=="ref"&&(r[s]=a[s])}else r=a;return ya(e),a=mr(t,e,l,r,i,u),s=vr(),t!==null&&!ee?(br(t,e,u),gl(t,e,u)):(zt&&s&&Wc(e),e.flags|=1,de(t,e,a,u),e.child)}function Bd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Zc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Nd(t,e,i,a,u)):(t=Pu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Yr(t,u)){var r=i.memoizedProps;if(l=l.compare,l=l!==null?l:kn,l(r,a)&&t.ref===e.ref)return gl(t,e,u)}return e.flags|=1,t=hl(i,a),t.ref=e.ref,t.return=e,e.child=t}function Nd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(kn(i,a)&&t.ref===e.ref)if(ee=!1,e.pendingProps=a=i,Yr(t,u))(t.flags&131072)!==0&&(ee=!0);else return e.lanes=t.lanes,gl(t,e,u)}return Ur(t,e,l,a,u)}function Ud(t,e,l,a){var u=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~i}else a=0,e.child=null;return Hd(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ai(e,i!==null?i.cachePool:null),i!==null?Ls(e,i):sr(),Qs(e);else return a=e.lanes=536870912,Hd(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(ai(e,i.cachePool),Ls(e,i),ql(),e.memoizedState=null):(t!==null&&ai(e,null),sr(),ql());return de(t,e,u,l),e.child}function uu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Hd(t,e,l,a,u){var i=ur();return i=i===null?null:{parent:Pt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ai(e,null),sr(),Qs(e),t!==null&&Ia(t,e,a,!0),e.childLanes=u,null}function gi(t,e){return e=Si({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function $d(t,e,l){return xa(e,t.child,null,l),t=gi(e,e.pendingProps),t.flags|=2,_e(e),e.memoizedState=null,t}function vv(t,e,l){var a=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(zt){if(a.mode==="hidden")return t=gi(e,a),e.lanes=536870912,uu(null,t);if(hr(e),(t=kt)?(t=J0(t,Ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bl!==null?{id:al,overflow:nl}:null,retryLane:536870912,hydrationErrors:null},l=As(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw Ul(e);return e.lanes=536870912,null}return gi(e,a)}var i=t.memoizedState;if(i!==null){var r=i.dehydrated;if(hr(e),u)if(e.flags&256)e.flags&=-257,e=$d(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(ee||Ia(t,e,l,!1),u=(l&t.childLanes)!==0,ee||u){if(a=Gt,a!==null&&(r=Of(a,l),r!==0&&r!==i.retryLane))throw i.retryLane=r,pa(t,r),ze(a,t,r),Nr;wi(),e=$d(t,e,l)}else t=i.treeContext,kt=Xe(r.nextSibling),fe=e,zt=!0,Nl=null,Ge=!1,t!==null&&Es(e,t),e=gi(e,a),e.flags|=4096;return e}return t=hl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ai(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Ur(t,e,l,a,u){return ya(e),l=mr(t,e,l,a,void 0,u),a=vr(),t!==null&&!ee?(br(t,e,u),gl(t,e,u)):(zt&&a&&Wc(e),e.flags|=1,de(t,e,l,u),e.child)}function Ld(t,e,l,a,u,i){return ya(e),e.updateQueue=null,l=qs(e,a,l,u),js(t),a=vr(),t!==null&&!ee?(br(t,e,i),gl(t,e,i)):(zt&&a&&Wc(e),e.flags|=1,de(t,e,l,i),e.child)}function Qd(t,e,l,a,u){if(ya(e),e.stateNode===null){var i=Ka,r=l.contextType;typeof r=="object"&&r!==null&&(i=se(r)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Rr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},cr(e),r=l.contextType,i.context=typeof r=="object"&&r!==null?se(r):Ka,i.state=e.memoizedState,r=l.getDerivedStateFromProps,typeof r=="function"&&(_r(e,l,r,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Rr.enqueueReplaceState(i,i.state,null),tu(e,a,i,u),Pn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=Ta(l,s);i.props=h;var E=i.context,_=l.contextType;r=Ka,typeof _=="object"&&_!==null&&(r=se(_));var H=l.getDerivedStateFromProps;_=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||E!==r)&&zd(e,i,a,r),$l=!1;var T=e.memoizedState;i.state=T,tu(e,a,i,u),Pn(),E=e.memoizedState,s||T!==E||$l?(typeof H=="function"&&(_r(e,l,H,a),E=e.memoizedState),(h=$l||Td(e,l,h,a,T,E,r))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=E),i.props=a,i.state=E,i.context=r,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,rr(t,e),r=e.memoizedProps,_=Ta(l,r),i.props=_,H=e.pendingProps,T=i.context,E=l.contextType,h=Ka,typeof E=="object"&&E!==null&&(h=se(E)),s=l.getDerivedStateFromProps,(E=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==H||T!==h)&&zd(e,i,a,h),$l=!1,T=e.memoizedState,i.state=T,tu(e,a,i,u),Pn();var D=e.memoizedState;r!==H||T!==D||$l||t!==null&&t.dependencies!==null&&ei(t.dependencies)?(typeof s=="function"&&(_r(e,l,s,a),D=e.memoizedState),(_=$l||Td(e,l,_,a,T,D,h)||t!==null&&t.dependencies!==null&&ei(t.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,D,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,D,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=D),i.props=a,i.state=D,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ai(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=xa(e,t.child,null,u),e.child=xa(e,null,l,u)):de(t,e,l,u),e.memoizedState=i.state,t=e.child):t=gl(t,e,u),t}function jd(t,e,l,a){return va(),e.flags|=256,de(t,e,l,a),e.child}var Hr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $r(t){return{baseLanes:t,cachePool:Ms()}}function Lr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Be),t}function qd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),r&&(u=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(zt){if(u?jl(e):ql(),(t=kt)?(t=J0(t,Ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Bl!==null?{id:al,overflow:nl}:null,retryLane:536870912,hydrationErrors:null},l=As(t),l.return=e,e.child=l,fe=e,kt=null)):t=null,t===null)throw Ul(e);return So(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,u?(ql(),u=e.mode,s=Si({mode:"hidden",children:s},u),a=ma(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=$r(l),a.childLanes=Lr(t,r,l),e.memoizedState=Hr,uu(null,a)):(jl(e),Qr(e,s))}var h=t.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(jl(e),e.flags&=-257,e=jr(t,e,l)):e.memoizedState!==null?(ql(),e.child=t.child,e.flags|=128,e=null):(ql(),s=a.fallback,u=e.mode,a=Si({mode:"visible",children:a.children},u),s=ma(s,u,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,xa(e,t.child,null,l),a=e.child,a.memoizedState=$r(l),a.childLanes=Lr(t,r,l),e.memoizedState=Hr,e=uu(null,a));else if(jl(e),So(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var E=r.dgst;r=E,a=Error(o(419)),a.stack="",a.digest=r,Zn({value:a,source:null,stack:null}),e=jr(t,e,l)}else if(ee||Ia(t,e,l,!1),r=(l&t.childLanes)!==0,ee||r){if(r=Gt,r!==null&&(a=Of(r,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,pa(t,a),ze(r,t,a),Nr;Ao(s)||wi(),e=jr(t,e,l)}else Ao(s)?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,kt=Xe(s.nextSibling),fe=e,zt=!0,Nl=null,Ge=!1,t!==null&&Es(e,t),e=Qr(e,a.children),e.flags|=4096);return e}return u?(ql(),s=a.fallback,u=e.mode,h=t.child,E=h.sibling,a=hl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,E!==null?s=hl(E,s):(s=ma(s,u,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,uu(null,a),a=e.child,s=t.child.memoizedState,s===null?s=$r(l):(u=s.cachePool,u!==null?(h=Pt._currentValue,u=u.parent!==h?{parent:h,pool:h}:u):u=Ms(),s={baseLanes:s.baseLanes|l,cachePool:u}),a.memoizedState=s,a.childLanes=Lr(t,r,l),e.memoizedState=Hr,uu(t.child,a)):(jl(e),l=t.child,t=l.sibling,l=hl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=l,e.memoizedState=null,l)}function Qr(t,e){return e=Si({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Si(t,e){return t=Me(22,t,null,e),t.lanes=0,t}function jr(t,e,l){return xa(e,t.child,null,l),t=Qr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),er(t.return,e,l)}function qr(t,e,l,a,u,i){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:i}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=l,r.tailMode=u,r.treeForkCount=i)}function Gd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;a=a.children;var r=Ft.current,s=(r&2)!==0;if(s?(r=r&1|2,e.flags|=128):r&=1,U(Ft,r),de(t,e,a,l),a=zt?Vn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yd(t,l,e);else if(t.tag===19)Yd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&oi(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),qr(e,!1,u,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&oi(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}qr(e,!0,l,null,i,a);break;case"together":qr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function gl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),kl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Ia(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=hl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=hl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Yr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ei(t)))}function bv(t,e,l){switch(e.tag){case 3:Ot(e,e.stateNode.containerInfo),Hl(e,Pt,t.memoizedState.cache),va();break;case 27:case 5:ot(e);break;case 4:Ot(e,e.stateNode.containerInfo);break;case 10:Hl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(jl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?qd(t,e,l):(jl(e),t=gl(t,e,l),t!==null?t.sibling:null);jl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Ia(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Gd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),U(Ft,Ft.current),a)break;return null;case 22:return e.lanes=0,Ud(t,e,l,e.pendingProps);case 24:Hl(e,Pt,t.memoizedState.cache)}return gl(t,e,l)}function kd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ee=!0;else{if(!Yr(t,l)&&(e.flags&128)===0)return ee=!1,bv(t,e,l);ee=(t.flags&131072)!==0}else ee=!1,zt&&(e.flags&1048576)!==0&&xs(e,Vn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Aa(e.elementType),e.type=t,typeof t=="function")Zc(t)?(a=Ta(t,a),e.tag=1,e=Qd(null,e,t,a,l)):(e.tag=0,e=Ur(null,e,t,a,l));else{if(t!=null){var u=t.$$typeof;if(u===J){e.tag=11,e=Rd(null,e,t,a,l);break t}else if(u===R){e.tag=14,e=Bd(null,e,t,a,l);break t}}throw e=Ct(t)||t,Error(o(306,e,""))}}return e;case 0:return Ur(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=Ta(a,e.pendingProps),Qd(t,e,a,u,l);case 3:t:{if(Ot(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,rr(t,e),tu(e,a,null,l);var r=e.memoizedState;if(a=r.cache,Hl(e,Pt,a),a!==i.cache&&lr(e,[Pt],l,!0),Pn(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=jd(t,e,a,l);break t}else if(a!==u){u=je(Error(o(424)),e),Zn(u),e=jd(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,kt=Xe(t.firstChild),fe=e,zt=!0,Nl=null,Ge=!0,l=Us(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(va(),a===u){e=gl(t,e,l);break t}de(t,e,a,l)}e=e.child}return e;case 26:return Ai(t,e),t===null?(l=eh(e.type,null,e.pendingProps,null))?e.memoizedState=l:zt||(l=e.type,t=e.pendingProps,a=$i(tt.current).createElement(l),a[oe]=e,a[ge]=t,he(a,l,t),ie(a),e.stateNode=a):e.memoizedState=eh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ot(e),t===null&&zt&&(a=e.stateNode=I0(e.type,e.pendingProps,tt.current),fe=e,Ge=!0,u=kt,Jl(e.type)?(xo=u,kt=Xe(a.firstChild)):kt=u),de(t,e,e.pendingProps.children,l),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&zt&&((u=a=kt)&&(a=Zv(a,e.type,e.pendingProps,Ge),a!==null?(e.stateNode=a,fe=e,kt=Xe(a.firstChild),Ge=!1,u=!0):u=!1),u||Ul(e)),ot(e),u=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,a=i.children,bo(u,i)?a=null:r!==null&&bo(u,r)&&(e.flags|=32),e.memoizedState!==null&&(u=mr(t,e,rv,null,null,l),Au._currentValue=u),Ai(t,e),de(t,e,a,l),e.child;case 6:return t===null&&zt&&((t=l=kt)&&(l=Kv(l,e.pendingProps,Ge),l!==null?(e.stateNode=l,fe=e,kt=null,t=!0):t=!1),t||Ul(e)),null;case 13:return qd(t,e,l);case 4:return Ot(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=xa(e,null,a,l):de(t,e,a,l),e.child;case 11:return Rd(t,e,e.type,e.pendingProps,l);case 7:return de(t,e,e.pendingProps,l),e.child;case 8:return de(t,e,e.pendingProps.children,l),e.child;case 12:return de(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Hl(e,e.type,a.value),de(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,ya(e),u=se(u),a=a(u),e.flags|=1,de(t,e,a,l),e.child;case 14:return Bd(t,e,e.type,e.pendingProps,l);case 15:return Nd(t,e,e.type,e.pendingProps,l);case 19:return Gd(t,e,l);case 31:return vv(t,e,l);case 22:return Ud(t,e,l,e.pendingProps);case 24:return ya(e),a=se(Pt),t===null?(u=ur(),u===null&&(u=Gt,i=ar(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},cr(e),Hl(e,Pt,u)):((t.lanes&l)!==0&&(rr(t,e),tu(e,null,null,l),Pn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Hl(e,Pt,a)):(a=i.cache,Hl(e,Pt,a),a!==u.cache&&lr(e,[Pt],l,!0))),de(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Al(t){t.flags|=4}function Gr(t,e,l,a,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(b0())t.flags|=8192;else throw Sa=ui,ir}else t.flags&=-16777217}function Xd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ih(e))if(b0())t.flags|=8192;else throw Sa=ui,ir}function xi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Tf():536870912,t.lanes|=e,sn|=e)}function iu(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function yv(t,e,l){var a=e.pendingProps;switch(Fc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return Xt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),vl(Pt),L(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?Al(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pc())),Xt(e),null;case 26:var u=e.type,i=e.memoizedState;return t===null?(Al(e),i!==null?(Xt(e),Xd(e,i)):(Xt(e),Gr(e,u,null,a,l))):i?i!==t.memoizedState?(Al(e),Xt(e),Xd(e,i)):(Xt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Al(e),Xt(e),Gr(e,u,t,a,l)),null;case 27:if(pt(e),l=tt.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}t=j.current,Fa(e)?Ts(e):(t=I0(u,a,l),e.stateNode=t,Al(e))}return Xt(e),null;case 5:if(pt(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Xt(e),null}if(i=j.current,Fa(e))Ts(e);else{var r=$i(tt.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(u,{is:a.is}):r.createElement(u)}}i[oe]=e,i[ge]=a;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=i;t:switch(he(i,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Al(e)}}return Xt(e),Gr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Al(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=tt.current,Fa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=fe,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[oe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||q0(t.nodeValue,l)),t||Ul(e,!0)}else t=$i(t).createTextNode(a),t[oe]=e,e.stateNode=t}return Xt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Fa(e),l!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[oe]=e}else va(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),t=!1}else l=Pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(_e(e),e):(_e(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Xt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Fa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[oe]=e}else va(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Xt(e),u=!1}else u=Pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(_e(e),e):(_e(e),null)}return _e(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),xi(e,e.updateQueue),Xt(e),null);case 4:return L(),t===null&&so(e.stateNode.containerInfo),Xt(e),null;case 10:return vl(e.type),Xt(e),null;case 19:if(M(Ft),a=e.memoizedState,a===null)return Xt(e),null;if(u=(e.flags&128)!==0,i=a.rendering,i===null)if(u)iu(a,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=oi(t),i!==null){for(e.flags|=128,iu(a,!1),t=i.updateQueue,e.updateQueue=t,xi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)gs(l,t),l=l.sibling;return U(Ft,Ft.current&1|2),zt&&pl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ye()>Oi&&(e.flags|=128,u=!0,iu(a,!1),e.lanes=4194304)}else{if(!u)if(t=oi(i),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,xi(e,t),iu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!zt)return Xt(e),null}else 2*ye()-a.renderingStartTime>Oi&&l!==536870912&&(e.flags|=128,u=!0,iu(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,l=Ft.current,U(Ft,u?l&1|2:l&1),zt&&pl(e,a.treeForkCount),t):(Xt(e),null);case 22:case 23:return _e(e),dr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),l=e.updateQueue,l!==null&&xi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&M(ga),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),vl(Pt),Xt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function gv(t,e){switch(Fc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vl(Pt),L(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pt(e),null;case 31:if(e.memoizedState!==null){if(_e(e),e.alternate===null)throw Error(o(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(_e(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return M(Ft),null;case 4:return L(),null;case 10:return vl(e.type),null;case 22:case 23:return _e(e),dr(),t!==null&&M(ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vl(Pt),null;case 25:return null;default:return null}}function Vd(t,e){switch(Fc(e),e.tag){case 3:vl(Pt),L();break;case 26:case 27:case 5:pt(e);break;case 4:L();break;case 31:e.memoizedState!==null&&_e(e);break;case 13:_e(e);break;case 19:M(Ft);break;case 10:vl(e.type);break;case 22:case 23:_e(e),dr(),t!==null&&M(ga);break;case 24:vl(Pt)}}function cu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,r=l.inst;a=i(),r.destroy=a}l=l.next}while(l!==u)}}catch(s){$t(e,e.return,s)}}function Yl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var r=a.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,u=e;var h=l,E=s;try{E()}catch(_){$t(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){$t(e,e.return,_)}}function Zd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{$s(e,l)}catch(a){$t(t,t.return,a)}}}function Kd(t,e,l){l.props=Ta(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){$t(t,e,a)}}function ru(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){$t(t,e,u)}}function ul(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){$t(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){$t(t,e,u)}else l.current=null}function Jd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){$t(t,t.return,u)}}function kr(t,e,l){try{var a=t.stateNode;qv(a,t.type,l,e),a[ge]=e}catch(u){$t(t,t.return,u)}}function Wd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Jl(t.type)||t.tag===4}function Xr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Jl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=sl));else if(a!==4&&(a===27&&Jl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Vr(t,e,l),t=t.sibling;t!==null;)Vr(t,e,l),t=t.sibling}function Ei(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Jl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Ei(t,e,l),t=t.sibling;t!==null;)Ei(t,e,l),t=t.sibling}function Fd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);he(e,a,l),e[oe]=t,e[ge]=l}catch(i){$t(t,t.return,i)}}var Sl=!1,le=!1,Zr=!1,Id=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Av(t,e){if(t=t.containerInfo,mo=ki,t=fs(t),jc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var r=0,s=-1,h=-1,E=0,_=0,H=t,T=null;e:for(;;){for(var D;H!==l||u!==0&&H.nodeType!==3||(s=r+u),H!==i||a!==0&&H.nodeType!==3||(h=r+a),H.nodeType===3&&(r+=H.nodeValue.length),(D=H.firstChild)!==null;)T=H,H=D;for(;;){if(H===t)break e;if(T===l&&++E===u&&(s=r),T===i&&++_===a&&(h=r),(D=H.nextSibling)!==null)break;H=T,T=H.parentNode}H=D}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(vo={focusedElem:t,selectionRange:l},ki=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){switch(e=ce,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var lt=Ta(l.type,u);t=a.getSnapshotBeforeUpdate(lt,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(ct){$t(l,l.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)go(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":go(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Pd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:El(t,l),a&4&&cu(5,l);break;case 1:if(El(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(r){$t(l,l.return,r)}else{var u=Ta(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){$t(l,l.return,r)}}a&64&&Zd(l),a&512&&ru(l,l.return);break;case 3:if(El(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{$s(t,e)}catch(r){$t(l,l.return,r)}}break;case 27:e===null&&a&4&&Fd(l);case 26:case 5:El(t,l),e===null&&a&4&&Jd(l),a&512&&ru(l,l.return);break;case 12:El(t,l);break;case 31:El(t,l),a&4&&l0(t,l);break;case 13:El(t,l),a&4&&a0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Mv.bind(null,l),Jv(t,l))));break;case 22:if(a=l.memoizedState!==null||Sl,!a){e=e!==null&&e.memoizedState!==null||le,u=Sl;var i=le;Sl=a,(le=e)&&!i?Tl(t,l,(l.subtreeFlags&8772)!==0):El(t,l),Sl=u,le=i}break;case 30:break;default:El(t,l)}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ec(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Se=!1;function xl(t,e,l){for(l=l.child;l!==null;)e0(t,e,l),l=l.sibling}function e0(t,e,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Rn,l)}catch{}switch(l.tag){case 26:le||ul(l,e),xl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:le||ul(l,e);var a=Zt,u=Se;Jl(l.type)&&(Zt=l.stateNode,Se=!1),xl(t,e,l),bu(l.stateNode),Zt=a,Se=u;break;case 5:le||ul(l,e);case 6:if(a=Zt,u=Se,Zt=null,xl(t,e,l),Zt=a,Se=u,Zt!==null)if(Se)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(l.stateNode)}catch(i){$t(l,e,i)}else try{Zt.removeChild(l.stateNode)}catch(i){$t(l,e,i)}break;case 18:Zt!==null&&(Se?(t=Zt,Z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),gn(t)):Z0(Zt,l.stateNode));break;case 4:a=Zt,u=Se,Zt=l.stateNode.containerInfo,Se=!0,xl(t,e,l),Zt=a,Se=u;break;case 0:case 11:case 14:case 15:Yl(2,l,e),le||Yl(4,l,e),xl(t,e,l);break;case 1:le||(ul(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Kd(l,e,a)),xl(t,e,l);break;case 21:xl(t,e,l);break;case 22:le=(a=le)||l.memoizedState!==null,xl(t,e,l),le=a;break;default:xl(t,e,l)}}function l0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gn(t)}catch(l){$t(e,e.return,l)}}}function a0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gn(t)}catch(l){$t(e,e.return,l)}}function Sv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Id),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Id),e;default:throw Error(o(435,t.tag))}}function Ti(t,e){var l=Sv(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var u=wv.bind(null,t,a);a.then(u,u)}})}function xe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,r=e,s=r;t:for(;s!==null;){switch(s.tag){case 27:if(Jl(s.type)){Zt=s.stateNode,Se=!1;break t}break;case 5:Zt=s.stateNode,Se=!1;break t;case 3:case 4:Zt=s.stateNode.containerInfo,Se=!0;break t}s=s.return}if(Zt===null)throw Error(o(160));e0(i,r,u),Zt=null,Se=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}var We=null;function n0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xe(e,t),Ee(t),a&4&&(Yl(3,t,t.return),cu(3,t),Yl(5,t,t.return));break;case 1:xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),a&64&&Sl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=We;if(xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Un]||i[oe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),he(i,a,l),i[oe]=t,ie(i),a=i;break t;case"link":var r=nh("link","href",u).get(a+(l.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){r.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;case"meta":if(r=nh("meta","content",u).get(a+(l.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){r.splice(s,1);break e}}i=u.createElement(a),he(i,a,l),u.head.appendChild(i);break;default:throw Error(o(468,a))}i[oe]=t,ie(i),a=i}t.stateNode=a}else uh(u,t.type,t.stateNode);else t.stateNode=ah(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?uh(u,t.type,t.stateNode):ah(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&kr(t,t.memoizedProps,l.memoizedProps)}break;case 27:xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),l!==null&&a&4&&kr(t,t.memoizedProps,l.memoizedProps);break;case 5:if(xe(e,t),Ee(t),a&512&&(le||l===null||ul(l,l.return)),t.flags&32){u=t.stateNode;try{qa(u,"")}catch(lt){$t(t,t.return,lt)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,kr(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Zr=!0);break;case 6:if(xe(e,t),Ee(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(lt){$t(t,t.return,lt)}}break;case 3:if(ji=null,u=We,We=Li(e.containerInfo),xe(e,t),We=u,Ee(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{gn(e.containerInfo)}catch(lt){$t(t,t.return,lt)}Zr&&(Zr=!1,u0(t));break;case 4:a=We,We=Li(t.stateNode.containerInfo),xe(e,t),Ee(t),We=a;break;case 12:xe(e,t),Ee(t);break;case 31:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 13:xe(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Di=ye()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,E=Sl,_=le;if(Sl=E||u,le=_||h,xe(e,t),le=_,Sl=E,Ee(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||Sl||le||za(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=h.stateNode;var H=h.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null;s.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(lt){$t(h,h.return,lt)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(lt){$t(h,h.return,lt)}}}else if(e.tag===18){if(l===null){h=e;try{var D=h.stateNode;u?K0(D,!0):K0(h.stateNode,!1)}catch(lt){$t(h,h.return,lt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ti(t,l))));break;case 19:xe(e,t),Ee(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ti(t,a)));break;case 30:break;case 21:break;default:xe(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Wd(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var u=l.stateNode,i=Xr(t);Ei(t,i,u);break;case 5:var r=l.stateNode;l.flags&32&&(qa(r,""),l.flags&=-33);var s=Xr(t);Ei(t,s,r);break;case 3:case 4:var h=l.stateNode.containerInfo,E=Xr(t);Vr(t,E,h);break;default:throw Error(o(161))}}catch(_){$t(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;u0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function El(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pd(t,e.alternate,e),e=e.sibling}function za(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yl(4,e,e.return),za(e);break;case 1:ul(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Kd(e,e.return,l),za(e);break;case 27:bu(e.stateNode);case 26:case 5:ul(e,e.return),za(e);break;case 22:e.memoizedState===null&&za(e);break;case 30:za(e);break;default:za(e)}t=t.sibling}}function Tl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:Tl(u,i,l),cu(4,i);break;case 1:if(Tl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(E){$t(a,a.return,E)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Hs(h[u],s)}catch(E){$t(a,a.return,E)}}l&&r&64&&Zd(i),ru(i,i.return);break;case 27:Fd(i);case 26:case 5:Tl(u,i,l),l&&a===null&&r&4&&Jd(i),ru(i,i.return);break;case 12:Tl(u,i,l);break;case 31:Tl(u,i,l),l&&r&4&&l0(u,i);break;case 13:Tl(u,i,l),l&&r&4&&a0(u,i);break;case 22:i.memoizedState===null&&Tl(u,i,l),ru(i,i.return);break;case 30:break;default:Tl(u,i,l)}e=e.sibling}}function Kr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Kn(l))}function Jr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t))}function Fe(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(t,e,l,a),e=e.sibling}function i0(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(t,e,l,a),u&2048&&cu(9,e);break;case 1:Fe(t,e,l,a);break;case 3:Fe(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kn(t)));break;case 12:if(u&2048){Fe(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){$t(e,e.return,h)}}else Fe(t,e,l,a);break;case 31:Fe(t,e,l,a);break;case 13:Fe(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?Fe(t,e,l,a):ou(t,e):i._visibility&2?Fe(t,e,l,a):(i._visibility|=2,rn(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Kr(r,e);break;case 24:Fe(t,e,l,a),u&2048&&Jr(e.alternate,e);break;default:Fe(t,e,l,a)}}function rn(t,e,l,a,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,r=e,s=l,h=a,E=r.flags;switch(r.tag){case 0:case 11:case 15:rn(i,r,s,h,u),cu(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?rn(i,r,s,h,u):ou(i,r):(_._visibility|=2,rn(i,r,s,h,u)),u&&E&2048&&Kr(r.alternate,r);break;case 24:rn(i,r,s,h,u),u&&E&2048&&Jr(r.alternate,r);break;default:rn(i,r,s,h,u)}e=e.sibling}}function ou(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:ou(l,a),u&2048&&Kr(a.alternate,a);break;case 24:ou(l,a),u&2048&&Jr(a.alternate,a);break;default:ou(l,a)}e=e.sibling}}var fu=8192;function on(t,e,l){if(t.subtreeFlags&fu)for(t=t.child;t!==null;)c0(t,e,l),t=t.sibling}function c0(t,e,l){switch(t.tag){case 26:on(t,e,l),t.flags&fu&&t.memoizedState!==null&&cb(l,We,t.memoizedState,t.memoizedProps);break;case 5:on(t,e,l);break;case 3:case 4:var a=We;We=Li(t.stateNode.containerInfo),on(t,e,l),We=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fu,fu=16777216,on(t,e,l),fu=a):on(t,e,l));break;default:on(t,e,l)}}function r0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function su(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,f0(a,t)}r0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)o0(t),t=t.sibling}function o0(t){switch(t.tag){case 0:case 11:case 15:su(t),t.flags&2048&&Yl(9,t,t.return);break;case 3:su(t);break;case 12:su(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zi(t)):su(t);break;default:su(t)}}function zi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ce=a,f0(a,t)}r0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yl(8,e,e.return),zi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,zi(e));break;default:zi(e)}t=t.sibling}}function f0(t,e){for(;ce!==null;){var l=ce;switch(l.tag){case 0:case 11:case 15:Yl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Kn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ce=a;else t:for(l=t;ce!==null;){a=ce;var u=a.sibling,i=a.return;if(t0(a),a===l){ce=null;break t}if(u!==null){u.return=i,ce=u;break t}ce=i}}}var xv={getCacheForType:function(t){var e=se(Pt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return se(Pt).controller.signal}},Ev=typeof WeakMap=="function"?WeakMap:Map,Rt=0,Gt=null,St=null,Et=0,Ht=0,Re=null,Gl=!1,fn=!1,Wr=!1,zl=0,Jt=0,kl=0,Da=0,Fr=0,Be=0,sn=0,du=null,Te=null,Ir=!1,Di=0,s0=0,Oi=1/0,Ci=null,Xl=null,ne=0,Vl=null,dn=null,Dl=0,Pr=0,to=null,d0=null,hu=0,eo=null;function Ne(){return(Rt&2)!==0&&Et!==0?Et&-Et:C.T!==null?co():Cf()}function h0(){if(Be===0)if((Et&536870912)===0||zt){var t=Hu;Hu<<=1,(Hu&3932160)===0&&(Hu=262144),Be=t}else Be=536870912;return t=we.current,t!==null&&(t.flags|=32),Be}function ze(t,e,l){(t===Gt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(hn(t,0),Zl(t,Et,Be,!1)),Nn(t,l),((Rt&2)===0||t!==Gt)&&(t===Gt&&((Rt&2)===0&&(Da|=l),Jt===4&&Zl(t,Et,Be,!1)),il(t))}function p0(t,e,l){if((Rt&6)!==0)throw Error(o(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Bn(t,e),u=a?Dv(t,e):ao(t,e,!0),i=a;do{if(u===0){fn&&!a&&Zl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Tv(l)){u=ao(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var s=t;u=du;var h=s.current.memoizedState.isDehydrated;if(h&&(hn(s,r).flags|=256),r=ao(s,r,!1),r!==2){if(Wr&&!h){s.errorRecoveryDisabledLanes|=i,Da|=i,u=4;break t}i=Te,Te=u,i!==null&&(Te===null?Te=i:Te.push.apply(Te,i))}u=r}if(i=!1,u!==2)continue}}if(u===1){hn(t,0),Zl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Zl(a,e,Be,!Gl);break t;case 2:Te=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=Di+300-ye(),10<u)){if(Zl(a,e,Be,!Gl),Lu(a,0,!0)!==0)break t;Dl=e,a.timeoutHandle=X0(m0.bind(null,a,l,Te,Ci,Ir,e,Be,Da,sn,Gl,i,"Throttled",-0,0),u);break t}m0(a,l,Te,Ci,Ir,e,Be,Da,sn,Gl,i,null,-0,0)}}break}while(!0);il(t)}function m0(t,e,l,a,u,i,r,s,h,E,_,H,T,D){if(t.timeoutHandle=-1,H=e.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sl},c0(e,i,H);var lt=(i&62914560)===i?Di-ye():(i&4194048)===i?s0-ye():0;if(lt=rb(H,lt),lt!==null){Dl=i,t.cancelPendingCommit=lt(E0.bind(null,t,e,i,l,a,u,r,s,h,_,H,null,T,D)),Zl(t,i,r,!E);return}}E0(t,e,i,l,a,u,r,s,h)}function Tv(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!Ce(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zl(t,e,l,a){e&=~Fr,e&=~Da,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-Oe(u),r=1<<i;a[i]=-1,u&=~r}l!==0&&zf(t,l,e)}function Mi(){return(Rt&6)===0?(pu(0),!1):!0}function lo(){if(St!==null){if(Ht===0)var t=St.return;else t=St,ml=ba=null,yr(t),ln=null,Wn=0,t=St;for(;t!==null;)Vd(t.alternate,t),t=t.return;St=null}}function hn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,kv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Dl=0,lo(),Gt=t,St=l=hl(t.current,null),Et=e,Ht=0,Re=null,Gl=!1,fn=Bn(t,e),Wr=!1,sn=Be=Fr=Da=kl=Jt=0,Te=du=null,Ir=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-Oe(a),i=1<<u;e|=t[u],a&=~i}return zl=e,Wu(),l}function v0(t,e){mt=null,C.H=nu,e===en||e===ni?(e=Rs(),Ht=3):e===ir?(e=Rs(),Ht=4):Ht=e===Nr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,St===null&&(Jt=1,yi(t,je(e,t.current)))}function b0(){var t=we.current;return t===null?!0:(Et&4194048)===Et?ke===null:(Et&62914560)===Et||(Et&536870912)!==0?t===ke:!1}function y0(){var t=C.H;return C.H=nu,t===null?nu:t}function g0(){var t=C.A;return C.A=xv,t}function wi(){Jt=4,Gl||(Et&4194048)!==Et&&we.current!==null||(fn=!0),(kl&134217727)===0&&(Da&134217727)===0||Gt===null||Zl(Gt,Et,Be,!1)}function ao(t,e,l){var a=Rt;Rt|=2;var u=y0(),i=g0();(Gt!==t||Et!==e)&&(Ci=null,hn(t,e)),e=!1;var r=Jt;t:do try{if(Ht!==0&&St!==null){var s=St,h=Re;switch(Ht){case 8:lo(),r=6;break t;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var E=Ht;if(Ht=0,Re=null,pn(t,s,h,E),l&&fn){r=0;break t}break;default:E=Ht,Ht=0,Re=null,pn(t,s,h,E)}}zv(),r=Jt;break}catch(_){v0(t,_)}while(!0);return e&&t.shellSuspendCounter++,ml=ba=null,Rt=a,C.H=u,C.A=i,St===null&&(Gt=null,Et=0,Wu()),r}function zv(){for(;St!==null;)A0(St)}function Dv(t,e){var l=Rt;Rt|=2;var a=y0(),u=g0();Gt!==t||Et!==e?(Ci=null,Oi=ye()+500,hn(t,e)):fn=Bn(t,e);t:do try{if(Ht!==0&&St!==null){e=St;var i=Re;e:switch(Ht){case 1:Ht=0,Re=null,pn(t,e,i,1);break;case 2:case 9:if(ws(i)){Ht=0,Re=null,S0(e);break}e=function(){Ht!==2&&Ht!==9||Gt!==t||(Ht=7),il(t)},i.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:ws(i)?(Ht=0,Re=null,S0(e)):(Ht=0,Re=null,pn(t,e,i,7));break;case 5:var r=null;switch(St.tag){case 26:r=St.memoizedState;case 5:case 27:var s=St;if(r?ih(r):s.stateNode.complete){Ht=0,Re=null;var h=s.sibling;if(h!==null)St=h;else{var E=s.return;E!==null?(St=E,_i(E)):St=null}break e}}Ht=0,Re=null,pn(t,e,i,5);break;case 6:Ht=0,Re=null,pn(t,e,i,6);break;case 8:lo(),Jt=6;break t;default:throw Error(o(462))}}Ov();break}catch(_){v0(t,_)}while(!0);return ml=ba=null,C.H=a,C.A=u,Rt=l,St!==null?0:(Gt=null,Et=0,Wu(),Jt)}function Ov(){for(;St!==null&&!ra();)A0(St)}function A0(t){var e=kd(t.alternate,t,zl);t.memoizedProps=t.pendingProps,e===null?_i(t):St=e}function S0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ld(l,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=Ld(l,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:yr(e);default:Vd(l,e),e=St=gs(e,zl),e=kd(l,e,zl)}t.memoizedProps=t.pendingProps,e===null?_i(t):St=e}function pn(t,e,l,a){ml=ba=null,yr(e),ln=null,Wn=0;var u=e.return;try{if(mv(t,u,e,l,Et)){Jt=1,yi(t,je(l,t.current)),St=null;return}}catch(i){if(u!==null)throw St=u,i;Jt=1,yi(t,je(l,t.current)),St=null;return}e.flags&32768?(zt||a===1?t=!0:fn||(Et&536870912)!==0?t=!1:(Gl=t=!0,(a===2||a===9||a===3||a===6)&&(a=we.current,a!==null&&a.tag===13&&(a.flags|=16384))),x0(e,t)):_i(e)}function _i(t){var e=t;do{if((e.flags&32768)!==0){x0(e,Gl);return}t=e.return;var l=yv(e.alternate,e,zl);if(l!==null){St=l;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Jt===0&&(Jt=5)}function x0(t,e){do{var l=gv(t.alternate,t);if(l!==null){l.flags&=32767,St=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){St=t;return}St=t=l}while(t!==null);Jt=6,St=null}function E0(t,e,l,a,u,i,r,s,h){t.cancelPendingCommit=null;do Ri();while(ne!==0);if((Rt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=Xc,im(t,l,i,r,s,h),t===Gt&&(St=Gt=null,Et=0),dn=e,Vl=t,Dl=l,Pr=i,to=u,d0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_v(Nu,function(){return C0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,u=G.p,G.p=2,r=Rt,Rt|=4;try{Av(t,e,l)}finally{Rt=r,G.p=u,C.T=a}}ne=1,T0(),z0(),D0()}}function T0(){if(ne===1){ne=0;var t=Vl,e=dn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=G.p;G.p=2;var u=Rt;Rt|=4;try{n0(e,t);var i=vo,r=fs(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&os(s.ownerDocument.documentElement,s)){if(h!==null&&jc(s)){var E=h.start,_=h.end;if(_===void 0&&(_=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(_,s.value.length);else{var H=s.ownerDocument||document,T=H&&H.defaultView||window;if(T.getSelection){var D=T.getSelection(),lt=s.textContent.length,ct=Math.min(h.start,lt),Yt=h.end===void 0?ct:Math.min(h.end,lt);!D.extend&&ct>Yt&&(r=Yt,Yt=ct,ct=r);var g=rs(s,ct),v=rs(s,Yt);if(g&&v&&(D.rangeCount!==1||D.anchorNode!==g.node||D.anchorOffset!==g.offset||D.focusNode!==v.node||D.focusOffset!==v.offset)){var x=H.createRange();x.setStart(g.node,g.offset),D.removeAllRanges(),ct>Yt?(D.addRange(x),D.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),D.addRange(x))}}}}for(H=[],D=s;D=D.parentNode;)D.nodeType===1&&H.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<H.length;s++){var B=H[s];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ki=!!mo,vo=mo=null}finally{Rt=u,G.p=a,C.T=l}}t.current=e,ne=2}}function z0(){if(ne===2){ne=0;var t=Vl,e=dn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=G.p;G.p=2;var u=Rt;Rt|=4;try{Pd(t,e.alternate,e)}finally{Rt=u,G.p=a,C.T=l}}ne=3}}function D0(){if(ne===4||ne===3){ne=0,Bu();var t=Vl,e=dn,l=Dl,a=d0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,dn=Vl=null,O0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xl=null),Sc(l),e=e.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Rn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,u=G.p,G.p=2,C.T=null;try{for(var i=t.onRecoverableError,r=0;r<a.length;r++){var s=a[r];i(s.value,{componentStack:s.stack})}}finally{C.T=e,G.p=u}}(Dl&3)!==0&&Ri(),il(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===eo?hu++:(hu=0,eo=t):hu=0,pu(0)}}function O0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Kn(e)))}function Ri(){return T0(),z0(),D0(),C0()}function C0(){if(ne!==5)return!1;var t=Vl,e=Pr;Pr=0;var l=Sc(Dl),a=C.T,u=G.p;try{G.p=32>l?32:l,C.T=null,l=to,to=null;var i=Vl,r=Dl;if(ne=0,dn=Vl=null,Dl=0,(Rt&6)!==0)throw Error(o(331));var s=Rt;if(Rt|=4,o0(i.current),i0(i,i.current,r,l),Rt=s,pu(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Rn,i)}catch{}return!0}finally{G.p=u,C.T=a,O0(t,e)}}function M0(t,e,l){e=je(l,e),e=Br(t.stateNode,e,2),t=Ql(t,e,2),t!==null&&(Nn(t,2),il(t))}function $t(t,e,l){if(t.tag===3)M0(t,t,l);else for(;e!==null;){if(e.tag===3){M0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xl===null||!Xl.has(a))){t=je(l,t),l=wd(2),a=Ql(e,l,2),a!==null&&(_d(l,a,e,t),Nn(a,2),il(a));break}}e=e.return}}function no(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ev;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Wr=!0,u.add(l),t=Cv.bind(null,t,e,l),e.then(t,t))}function Cv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Gt===t&&(Et&l)===l&&(Jt===4||Jt===3&&(Et&62914560)===Et&&300>ye()-Di?(Rt&2)===0&&hn(t,0):Fr|=l,sn===Et&&(sn=0)),il(t)}function w0(t,e){e===0&&(e=Tf()),t=pa(t,e),t!==null&&(Nn(t,e),il(t))}function Mv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),w0(t,l)}function wv(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),w0(t,l)}function _v(t,e){return ia(t,e)}var Bi=null,mn=null,uo=!1,Ni=!1,io=!1,Kl=0;function il(t){t!==mn&&t.next===null&&(mn===null?Bi=mn=t:mn=mn.next=t),Ni=!0,uo||(uo=!0,Bv())}function pu(t,e){if(!io&&Ni){io=!0;do for(var l=!1,a=Bi;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var r=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-Oe(42|t)+1)-1,i&=u&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,N0(a,i))}else i=Et,i=Lu(a,a===Gt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Bn(a,i)||(l=!0,N0(a,i));a=a.next}while(l);io=!1}}function Rv(){_0()}function _0(){Ni=uo=!1;var t=0;Kl!==0&&Gv()&&(t=Kl);for(var e=ye(),l=null,a=Bi;a!==null;){var u=a.next,i=R0(a,e);i===0?(a.next=null,l===null?Bi=u:l.next=u,u===null&&(mn=l)):(l=a,(t!==0||(i&3)!==0)&&(Ni=!0)),a=u}ne!==0&&ne!==5||pu(t),Kl!==0&&(Kl=0)}function R0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-Oe(i),s=1<<r,h=u[r];h===-1?((s&l)===0||(s&a)!==0)&&(u[r]=um(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=Gt,l=Et,l=Lu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ca(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Bn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ca(a),Sc(l)){case 2:case 8:l=xf;break;case 32:l=Nu;break;case 268435456:l=Ef;break;default:l=Nu}return a=B0.bind(null,t),l=ia(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ca(a),t.callbackPriority=2,t.callbackNode=null,2}function B0(t,e){if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ri()&&t.callbackNode!==l)return null;var a=Et;return a=Lu(t,t===Gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(p0(t,a,e),R0(t,ye()),t.callbackNode!=null&&t.callbackNode===l?B0.bind(null,t):null)}function N0(t,e){if(Ri())return null;p0(t,e,!0)}function Bv(){Xv(function(){(Rt&6)!==0?ia(Sf,Rv):_0()})}function co(){if(Kl===0){var t=Pa;t===0&&(t=Uu,Uu<<=1,(Uu&261888)===0&&(Uu=256)),Kl=t}return Kl}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yu(""+t)}function H0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Nv(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=U0((u[ge]||null).action),r=a.submitter;r&&(e=(e=r[ge]||null)?U0(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var s=new Vu("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kl!==0){var h=r?H0(u,r):new FormData(u);Or(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=r?H0(u,r):new FormData(u),Or(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var ro=0;ro<kc.length;ro++){var oo=kc[ro],Uv=oo.toLowerCase(),Hv=oo[0].toUpperCase()+oo.slice(1);Je(Uv,"on"+Hv)}Je(hs,"onAnimationEnd"),Je(ps,"onAnimationIteration"),Je(ms,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(Im,"onTransitionRun"),Je(Pm,"onTransitionStart"),Je(tv,"onTransitionCancel"),Je(vs,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));function $0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var r=a.length-1;0<=r;r--){var s=a[r],h=s.instance,E=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(_){Ju(_)}u.currentTarget=null,i=h}else for(r=0;r<a.length;r++){if(s=a[r],h=s.instance,E=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=E;try{i(u)}catch(_){Ju(_)}u.currentTarget=null,i=h}}}}function xt(t,e){var l=e[xc];l===void 0&&(l=e[xc]=new Set);var a=t+"__bubble";l.has(a)||(L0(e,t,2,!1),l.add(a))}function fo(t,e,l){var a=0;e&&(a|=4),L0(l,t,a,e)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Ui]){t[Ui]=!0,_f.forEach(function(l){l!=="selectionchange"&&($v.has(l)||fo(l,!1,t),fo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ui]||(e[Ui]=!0,fo("selectionchange",!1,e))}}function L0(t,e,l,a){switch(hh(e)){case 2:var u=sb;break;case 8:u=db;break;default:u=Oo}l=u.bind(null,e,l,t),u=void 0,!_c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function ho(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===u)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===u)return;r=r.return}for(;s!==null;){if(r=Ha(s),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=i=r;continue t}s=s.parentNode}}a=a.return}Gf(function(){var E=i,_=Mc(l),H=[];t:{var T=bs.get(t);if(T!==void 0){var D=Vu,lt=t;switch(t){case"keypress":if(ku(l)===0)break t;case"keydown":case"keyup":D=wm;break;case"focusin":lt="focus",D=Uc;break;case"focusout":lt="blur",D=Uc;break;case"beforeblur":case"afterblur":D=Uc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Bm;break;case hs:case ps:case ms:D=Sm;break;case vs:D=Um;break;case"scroll":case"scrollend":D=vm;break;case"wheel":D=$m;break;case"copy":case"cut":case"paste":D=Em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Kf;break;case"toggle":case"beforetoggle":D=Qm}var ct=(e&4)!==0,Yt=!ct&&(t==="scroll"||t==="scrollend"),g=ct?T!==null?T+"Capture":null:T;ct=[];for(var v=E,x;v!==null;){var B=v;if(x=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||x===null||g===null||(B=$n(v,g),B!=null&&ct.push(vu(v,B,x))),Yt)break;v=v.return}0<ct.length&&(T=new D(T,lt,null,l,_),H.push({event:T,listeners:ct}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",T&&l!==Cc&&(lt=l.relatedTarget||l.fromElement)&&(Ha(lt)||lt[Ua]))break t;if((D||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,D?(lt=l.relatedTarget||l.toElement,D=E,lt=lt?Ha(lt):null,lt!==null&&(Yt=p(lt),ct=lt.tag,lt!==Yt||ct!==5&&ct!==27&&ct!==6)&&(lt=null)):(D=null,lt=E),D!==lt)){if(ct=Vf,B="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Kf,B="onPointerLeave",g="onPointerEnter",v="pointer"),Yt=D==null?T:Hn(D),x=lt==null?T:Hn(lt),T=new ct(B,v+"leave",D,l,_),T.target=Yt,T.relatedTarget=x,B=null,Ha(_)===E&&(ct=new ct(g,v+"enter",lt,l,_),ct.target=x,ct.relatedTarget=Yt,B=ct),Yt=B,D&&lt)e:{for(ct=Lv,g=D,v=lt,x=0,B=g;B;B=ct(B))x++;B=0;for(var it=v;it;it=ct(it))B++;for(;0<x-B;)g=ct(g),x--;for(;0<B-x;)v=ct(v),B--;for(;x--;){if(g===v||v!==null&&g===v.alternate){ct=g;break e}g=ct(g),v=ct(v)}ct=null}else ct=null;D!==null&&Q0(H,T,D,ct,!1),lt!==null&&Yt!==null&&Q0(H,Yt,lt,ct,!0)}}t:{if(T=E?Hn(E):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var Mt=ls;else if(ts(T))if(as)Mt=Jm;else{Mt=Zm;var nt=Vm}else D=T.nodeName,!D||D.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Oc(E.elementType)&&(Mt=ls):Mt=Km;if(Mt&&(Mt=Mt(t,E))){es(H,Mt,l,_);break t}nt&&nt(t,T,E),t==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Dc(T,"number",T.value)}switch(nt=E?Hn(E):window,t){case"focusin":(ts(nt)||nt.contentEditable==="true")&&(Xa=nt,qc=E,Xn=null);break;case"focusout":Xn=qc=Xa=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,ss(H,l,_);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":ss(H,l,_)}var vt;if($c)t:{switch(t){case"compositionstart":var Tt="onCompositionStart";break t;case"compositionend":Tt="onCompositionEnd";break t;case"compositionupdate":Tt="onCompositionUpdate";break t}Tt=void 0}else ka?If(t,l)&&(Tt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(Tt="onCompositionStart");Tt&&(Jf&&l.locale!=="ko"&&(ka||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&ka&&(vt=kf()):(Rl=_,Rc="value"in Rl?Rl.value:Rl.textContent,ka=!0)),nt=Hi(E,Tt),0<nt.length&&(Tt=new Zf(Tt,t,null,l,_),H.push({event:Tt,listeners:nt}),vt?Tt.data=vt:(vt=Pf(l),vt!==null&&(Tt.data=vt)))),(vt=qm?Ym(t,l):Gm(t,l))&&(Tt=Hi(E,"onBeforeInput"),0<Tt.length&&(nt=new Zf("onBeforeInput","beforeinput",null,l,_),H.push({event:nt,listeners:Tt}),nt.data=vt)),Nv(H,t,E,l,_)}$0(H,e)})}function vu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Hi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=$n(t,l),u!=null&&a.unshift(vu(t,u,i)),u=$n(t,e),u!=null&&a.push(vu(t,u,i))),t.tag===3)return a;t=t.return}return[]}function Lv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,e,l,a,u){for(var i=e._reactName,r=[];l!==null&&l!==a;){var s=l,h=s.alternate,E=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||E===null||(h=E,u?(E=$n(l,i),E!=null&&r.unshift(vu(l,E,h))):u||(E=$n(l,i),E!=null&&r.push(vu(l,E,h)))),l=l.return}r.length!==0&&t.push({event:e,listeners:r})}var Qv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function j0(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(jv,"")}function q0(t,e){return e=j0(e),j0(t)===e}function qt(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qa(t,""+a);break;case"className":ju(t,"class",a);break;case"tabIndex":ju(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ju(t,l,a);break;case"style":qf(t,a,i);break;case"data":if(e!=="object"){ju(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&qt(t,e,"name",u.name,u,null),qt(t,e,"formEncType",u.formEncType,u,null),qt(t,e,"formMethod",u.formMethod,u,null),qt(t,e,"formTarget",u.formTarget,u,null)):(qt(t,e,"encType",u.encType,u,null),qt(t,e,"method",u.method,u,null),qt(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=sl);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Qu(t,"popover",a);break;case"xlinkActuate":fl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Qu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=pm.get(l)||l,Qu(t,l,a))}}function po(t,e,l,a,u,i){switch(l){case"style":qf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?qa(t,a):(typeof a=="number"||typeof a=="bigint")&&qa(t,""+a);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ge]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Qu(t,l,a)}}}function he(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var r=l[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:qt(t,e,i,r,l,null)}}u&&qt(t,e,"srcSet",l.srcSet,l,null),a&&qt(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var s=i=r=u=null,h=null,E=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":r=_;break;case"checked":h=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":s=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:qt(t,e,a,_,l,null)}}$f(t,i,s,h,E,r,u,!1);return;case"select":xt("invalid",t),a=r=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":a=s;default:qt(t,e,u,s,l,null)}e=i,l=r,t.multiple=!!a,e!=null?ja(t,!!a,e,!1):l!=null&&ja(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=u=a=null;for(r in l)if(l.hasOwnProperty(r)&&(s=l[r],s!=null))switch(r){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:qt(t,e,r,s,l,null)}Qf(t,a,u,i);return;case"option":for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null)&&(h==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":qt(t,e,h,a,l,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<mu.length;a++)xt(mu[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in l)if(l.hasOwnProperty(E)&&(a=l[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:qt(t,e,E,a,l,null)}return;default:if(Oc(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&po(t,e,_,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&qt(t,e,s,a,l,null))}function qv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,r=null,s=null,h=null,E=null,_=null;for(D in l){var H=l[D];if(l.hasOwnProperty(D)&&H!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":h=H;default:a.hasOwnProperty(D)||qt(t,e,D,null,a,H)}}for(var T in a){var D=a[T];if(H=l[T],a.hasOwnProperty(T)&&(D!=null||H!=null))switch(T){case"type":i=D;break;case"name":u=D;break;case"checked":E=D;break;case"defaultChecked":_=D;break;case"value":r=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:D!==H&&qt(t,e,T,D,a,H)}}zc(t,r,s,h,E,_,i,u);return;case"select":D=r=s=T=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":D=h;default:a.hasOwnProperty(i)||qt(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":T=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==h&&qt(t,e,u,i,a,h)}e=s,l=r,a=D,T!=null?ja(t,!!l,T,!1):!!a!=!!l&&(e!=null?ja(t,!!l,e,!0):ja(t,!!l,l?[]:"",!1));return;case"textarea":D=T=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:qt(t,e,s,null,a,u)}for(r in a)if(u=a[r],i=l[r],a.hasOwnProperty(r)&&(u!=null||i!=null))switch(r){case"value":T=u;break;case"defaultValue":D=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==i&&qt(t,e,r,u,a,i)}Lf(t,T,D);return;case"option":for(var lt in l)T=l[lt],l.hasOwnProperty(lt)&&T!=null&&!a.hasOwnProperty(lt)&&(lt==="selected"?t.selected=!1:qt(t,e,lt,null,a,T));for(h in a)T=a[h],D=l[h],a.hasOwnProperty(h)&&T!==D&&(T!=null||D!=null)&&(h==="selected"?t.selected=T&&typeof T!="function"&&typeof T!="symbol":qt(t,e,h,T,a,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in l)T=l[ct],l.hasOwnProperty(ct)&&T!=null&&!a.hasOwnProperty(ct)&&qt(t,e,ct,null,a,T);for(E in a)if(T=a[E],D=l[E],a.hasOwnProperty(E)&&T!==D&&(T!=null||D!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,e));break;default:qt(t,e,E,T,a,D)}return;default:if(Oc(e)){for(var Yt in l)T=l[Yt],l.hasOwnProperty(Yt)&&T!==void 0&&!a.hasOwnProperty(Yt)&&po(t,e,Yt,void 0,a,T);for(_ in a)T=a[_],D=l[_],!a.hasOwnProperty(_)||T===D||T===void 0&&D===void 0||po(t,e,_,T,a,D);return}}for(var g in l)T=l[g],l.hasOwnProperty(g)&&T!=null&&!a.hasOwnProperty(g)&&qt(t,e,g,null,a,T);for(H in a)T=a[H],D=l[H],!a.hasOwnProperty(H)||T===D||T==null&&D==null||qt(t,e,H,T,a,D)}function Y0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],i=u.transferSize,r=u.initiatorType,s=u.duration;if(i&&s&&Y0(r)){for(r=0,s=u.responseEnd,a+=1;a<l.length;a++){var h=l[a],E=h.startTime;if(E>s)break;var _=h.transferSize,H=h.initiatorType;_&&Y0(H)&&(h=h.responseEnd,r+=_*(h<s?1:(s-E)/(h-E)))}if(--a,e+=8*(i+r)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var mo=null,vo=null;function $i(t){return t.nodeType===9?t:t.ownerDocument}function G0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function bo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yo=null;function Gv(){var t=window.event;return t&&t.type==="popstate"?t===yo?!1:(yo=t,!0):(yo=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(Vv)}:X0;function Vv(t){setTimeout(function(){throw t})}function Jl(t){return t==="head"}function Z0(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(u),gn(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")bu(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,bu(l);for(var i=l.firstChild;i;){var r=i.nextSibling,s=i.nodeName;i[Un]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=r}}else l==="body"&&bu(t.ownerDocument.body);l=u}while(l);gn(e)}function K0(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function go(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":go(l),Ec(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Zv(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Un])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function Kv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Xe(t.nextSibling),t===null))return null;return t}function J0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Xe(t.nextSibling),t===null))return null;return t}function Ao(t){return t.data==="$?"||t.data==="$~"}function So(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jv(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var xo=null;function W0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Xe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function I0(t,e,l){switch(e=$i(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function bu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ec(t)}var Ve=new Map,P0=new Set;function Li(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ol=G.d;G.d={f:Wv,r:Fv,D:Iv,C:Pv,L:tb,m:eb,X:ab,S:lb,M:nb};function Wv(){var t=Ol.f(),e=Mi();return t||e}function Fv(t){var e=$a(t);e!==null&&e.tag===5&&e.type==="form"?vd(e):Ol.r(t)}var vn=typeof document>"u"?null:document;function th(t,e,l){var a=vn;if(a&&typeof e=="string"&&e){var u=Le(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),P0.has(u)||(P0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function Iv(t){Ol.D(t),th("dns-prefetch",t,null)}function Pv(t,e){Ol.C(t,e),th("preconnect",t,e)}function tb(t,e,l){Ol.L(t,e,l);var a=vn;if(a&&t&&e){var u='link[rel="preload"][as="'+Le(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Le(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Le(l.imageSizes)+'"]')):u+='[href="'+Le(t)+'"]';var i=u;switch(e){case"style":i=bn(t);break;case"script":i=yn(t)}Ve.has(i)||(t=S({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ve.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(yu(i))||e==="script"&&a.querySelector(gu(i))||(e=a.createElement("link"),he(e,"link",t),ie(e),a.head.appendChild(e)))}}function eb(t,e){Ol.m(t,e);var l=vn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Le(a)+'"][href="'+Le(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=yn(t)}if(!Ve.has(i)&&(t=S({rel:"modulepreload",href:t},e),Ve.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gu(i)))return}a=l.createElement("link"),he(a,"link",t),ie(a),l.head.appendChild(a)}}}function lb(t,e,l){Ol.S(t,e,l);var a=vn;if(a&&t){var u=La(a).hoistableStyles,i=bn(t);e=e||"default";var r=u.get(i);if(!r){var s={loading:0,preload:null};if(r=a.querySelector(yu(i)))s.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ve.get(i))&&Eo(t,l);var h=r=a.createElement("link");ie(h),he(h,"link",t),h._p=new Promise(function(E,_){h.onload=E,h.onerror=_}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Qi(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:s},u.set(i,r)}}}function ab(t,e){Ol.X(t,e);var l=vn;if(l&&t){var a=La(l).hoistableScripts,u=yn(t),i=a.get(u);i||(i=l.querySelector(gu(u)),i||(t=S({src:t,async:!0},e),(e=Ve.get(u))&&To(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function nb(t,e){Ol.M(t,e);var l=vn;if(l&&t){var a=La(l).hoistableScripts,u=yn(t),i=a.get(u);i||(i=l.querySelector(gu(u)),i||(t=S({src:t,async:!0,type:"module"},e),(e=Ve.get(u))&&To(t,e),i=l.createElement("script"),ie(i),he(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function eh(t,e,l,a){var u=(u=tt.current)?Li(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=bn(l.href),l=La(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=bn(l.href);var i=La(u).hoistableStyles,r=i.get(t);if(r||(u=u.ownerDocument||u,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=u.querySelector(yu(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ve.set(t,l),i||ub(u,t,l,r.state))),e&&a===null)throw Error(o(528,""));return r}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=yn(l),l=La(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function bn(t){return'href="'+Le(t)+'"'}function yu(t){return'link[rel="stylesheet"]['+t+"]"}function lh(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function ub(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),he(e,"link",l),ie(e),t.head.appendChild(e))}function yn(t){return'[src="'+Le(t)+'"]'}function gu(t){return"script[async]"+t}function ah(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Le(l.href)+'"]');if(a)return e.instance=a,ie(a),a;var u=S({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ie(a),he(a,"style",u),Qi(a,l.precedence,t),e.instance=a;case"stylesheet":u=bn(l.href);var i=t.querySelector(yu(u));if(i)return e.state.loading|=4,e.instance=i,ie(i),i;a=lh(l),(u=Ve.get(u))&&Eo(a,u),i=(t.ownerDocument||t).createElement("link"),ie(i);var r=i;return r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),he(i,"link",a),e.state.loading|=4,Qi(i,l.precedence,t),e.instance=i;case"script":return i=yn(l.src),(u=t.querySelector(gu(i)))?(e.instance=u,ie(u),u):(a=l,(u=Ve.get(i))&&(a=S({},l),To(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ie(u),he(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Qi(a,l.precedence,t));return e.instance}function Qi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,r=0;r<a.length;r++){var s=a[r];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Eo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function To(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ji=null;function nh(t,e,l){if(ji===null){var a=new Map,u=ji=new Map;u.set(l,a)}else u=ji,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Un]||i[oe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var s=a.get(r);s?s.push(i):a.set(r,[i])}}return a}function uh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function ib(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ih(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cb(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=bn(a.href),i=e.querySelector(yu(u));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=qi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,ie(i);return}i=e.ownerDocument||e,a=lh(a),(u=Ve.get(u))&&Eo(a,u),i=i.createElement("link"),ie(i);var r=i;r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),he(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=qi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var zo=0;function rb(t,e){return t.stylesheets&&t.count===0&&Gi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&zo===0&&(zo=62500*Yv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>zo?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yi=null;function Gi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yi=new Map,e.forEach(ob,t),Yi=null,qi.call(t))}function ob(t,e){if(!(e.state.loading&4)){var l=Yi.get(t);if(l)var a=l.get(null);else{l=new Map,Yi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var r=u[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(l.set(r.dataset.precedence,r),a=r)}a&&l.set(null,a)}u=e.instance,r=u.getAttribute("data-precedence"),i=l.get(r)||a,i===a&&l.set(null,u),l.set(r,u),this.count++,a=qi.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var Au={$$typeof:N,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function fb(t,e,l,a,u,i,r,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.hiddenUpdates=gc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function ch(t,e,l,a,u,i,r,s,h,E,_,H){return t=new fb(t,e,l,r,h,E,_,H,s),e=1,i===!0&&(e|=24),i=Me(3,null,null,e),t.current=i,i.stateNode=t,e=ar(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},cr(i),t}function rh(t){return t?(t=Ka,t):Ka}function oh(t,e,l,a,u,i){u=rh(u),a.context===null?a.context=u:a.pendingContext=u,a=Ll(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ql(t,a,e),l!==null&&(ze(l,t,e),In(l,t,e))}function fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Do(t,e){fh(t,e),(t=t.alternate)&&fh(t,e)}function sh(t){if(t.tag===13||t.tag===31){var e=pa(t,67108864);e!==null&&ze(e,t,67108864),Do(t,67108864)}}function dh(t){if(t.tag===13||t.tag===31){var e=Ne();e=Ac(e);var l=pa(t,e);l!==null&&ze(l,t,e),Do(t,e)}}var ki=!0;function sb(t,e,l,a){var u=C.T;C.T=null;var i=G.p;try{G.p=2,Oo(t,e,l,a)}finally{G.p=i,C.T=u}}function db(t,e,l,a){var u=C.T;C.T=null;var i=G.p;try{G.p=8,Oo(t,e,l,a)}finally{G.p=i,C.T=u}}function Oo(t,e,l,a){if(ki){var u=Co(a);if(u===null)ho(t,e,a,Xi,l),ph(t,a);else if(pb(u,t,e,l,a))a.stopPropagation();else if(ph(t,a),e&4&&-1<hb.indexOf(t)){for(;u!==null;){var i=$a(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=oa(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var h=1<<31-Oe(r);s.entanglements[1]|=h,r&=~h}il(i),(Rt&6)===0&&(Oi=ye()+500,pu(0))}}break;case 31:case 13:s=pa(i,2),s!==null&&ze(s,i,2),Mi(),Do(i,2)}if(i=Co(a),i===null&&ho(t,e,a,Xi,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else ho(t,e,a,null,l)}}function Co(t){return t=Mc(t),Mo(t)}var Xi=null;function Mo(t){if(Xi=null,t=Ha(t),t!==null){var e=p(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=y(e),t!==null)return t;t=null}else if(l===31){if(t=O(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xi=t,null}function hh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ip()){case Sf:return 2;case xf:return 8;case Nu:case Pp:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var wo=!1,Wl=null,Fl=null,Il=null,Su=new Map,xu=new Map,Pl=[],hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":Wl=null;break;case"dragenter":case"dragleave":Fl=null;break;case"mouseover":case"mouseout":Il=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(e.pointerId)}}function Eu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=$a(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function pb(t,e,l,a,u){switch(e){case"focusin":return Wl=Eu(Wl,t,e,l,a,u),!0;case"dragenter":return Fl=Eu(Fl,t,e,l,a,u),!0;case"mouseover":return Il=Eu(Il,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return Su.set(i,Eu(Su.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,xu.set(i,Eu(xu.get(i)||null,t,e,l,a,u)),!0}return!1}function mh(t){var e=Ha(t.target);if(e!==null){var l=p(e);if(l!==null){if(e=l.tag,e===13){if(e=y(l),e!==null){t.blockedOn=e,Mf(t.priority,function(){dh(l)});return}}else if(e===31){if(e=O(l),e!==null){t.blockedOn=e,Mf(t.priority,function(){dh(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Co(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Cc=a,l.target.dispatchEvent(a),Cc=null}else return e=$a(l),e!==null&&sh(e),t.blockedOn=l,!1;e.shift()}return!0}function vh(t,e,l){Vi(t)&&l.delete(e)}function mb(){wo=!1,Wl!==null&&Vi(Wl)&&(Wl=null),Fl!==null&&Vi(Fl)&&(Fl=null),Il!==null&&Vi(Il)&&(Il=null),Su.forEach(vh),xu.forEach(vh)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,wo||(wo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,mb)))}var Ki=null;function bh(t){Ki!==t&&(Ki=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ki===t&&(Ki=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(Mo(a||l)===null)continue;break}var i=$a(l);i!==null&&(t.splice(e,3),e-=3,Or(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function gn(t){function e(h){return Zi(h,t)}Wl!==null&&Zi(Wl,t),Fl!==null&&Zi(Fl,t),Il!==null&&Zi(Il,t),Su.forEach(e),xu.forEach(e);for(var l=0;l<Pl.length;l++){var a=Pl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Pl.length&&(l=Pl[0],l.blockedOn===null);)mh(l),l.blockedOn===null&&Pl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],r=u[ge]||null;if(typeof i=="function")r||bh(l);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,r=i[ge]||null)s=r.formAction;else if(Mo(u)!==null)continue}else s=r.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),bh(l)}}}function yh(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return u=r})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function _o(t){this._internalRoot=t}Ji.prototype.render=_o.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=Ne();oh(l,a,t,e,null,null)},Ji.prototype.unmount=_o.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oh(t.current,2,null,t,null,null),Mi(),e[Ua]=null}};function Ji(t){this._internalRoot=t}Ji.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Pl.length&&e!==0&&e<Pl[l].priority;l++);Pl.splice(l,0,t),l===0&&mh(t)}};var gh=c.version;if(gh!=="19.2.3")throw Error(o(527,gh,"19.2.3"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=b(e),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var vb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Rn=Wi.inject(vb),De=Wi}catch{}}return zu.createRoot=function(t,e){if(!d(t))throw Error(o(299));var l=!1,a="",u=Dd,i=Od,r=Cd;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,l,a,null,u,i,r,yh),t[Ua]=e.current,so(t),new _o(e)},zu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(o(299));var a=!1,u="",i=Dd,r=Od,s=Cd,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(r=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),e=ch(t,1,!0,e,l??null,a,u,h,i,r,s,yh),e.context=rh(null),l=e.current,a=Ne(),a=Ac(a),u=Ll(a),u.callback=null,Ql(l,u,a),l=a,e.current.lanes=l,Nn(e,l),il(e),t[Ua]=e.current,so(t),new Ji(e)},zu.version="19.2.3",zu}var Mh;function zb(){if(Mh)return No.exports;Mh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),No.exports=Tb(),No.exports}var Db=zb(),re=function(){return re=Object.assign||function(c){for(var f,o=1,d=arguments.length;o<d;o++){f=arguments[o];for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(c[p]=f[p])}return c},re.apply(this,arguments)};function Cu(n,c,f){if(f||arguments.length===2)for(var o=0,d=c.length,p;o<d;o++)(p||!(o in c))&&(p||(p=Array.prototype.slice.call(c,0,o)),p[o]=c[o]);return n.concat(p||Array.prototype.slice.call(c))}var Vt="-ms-",Ou="-moz-",Bt="-webkit-",up="comm",sc="rule",uf="decl",Ob="@import",Cb="@namespace",ip="@keyframes",Mb="@layer",cp=Math.abs,cf=String.fromCharCode,Xo=Object.assign;function wb(n,c){return ue(n,0)^45?(((c<<2^ue(n,0))<<2^ue(n,1))<<2^ue(n,2))<<2^ue(n,3):0}function rp(n){return n.trim()}function Ml(n,c){return(n=c.exec(n))?n[0]:n}function yt(n,c,f){return n.replace(c,f)}function tc(n,c,f){return n.indexOf(c,f)}function ue(n,c){return n.charCodeAt(c)|0}function wa(n,c,f){return n.slice(c,f)}function Ie(n){return n.length}function op(n){return n.length}function Du(n,c){return c.push(n),n}function _b(n,c){return n.map(c).join("")}function wh(n,c){return n.filter(function(f){return!Ml(f,c)})}var dc=1,Dn=1,fp=0,Ze=0,ae=0,_n="";function hc(n,c,f,o,d,p,y,O){return{value:n,root:c,parent:f,type:o,props:d,children:p,line:dc,column:Dn,length:y,return:"",siblings:O}}function ea(n,c){return Xo(hc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function An(n){for(;n.root;)n=ea(n.root,{children:[n]});Du(n,n.siblings)}function Rb(){return ae}function Bb(){return ae=Ze>0?ue(_n,--Ze):0,Dn--,ae===10&&(Dn=1,dc--),ae}function Pe(){return ae=Ze<fp?ue(_n,Ze++):0,Dn++,ae===10&&(Dn=1,dc++),ae}function la(){return ue(_n,Ze)}function ec(){return Ze}function pc(n,c){return wa(_n,n,c)}function Mu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nb(n){return dc=Dn=1,fp=Ie(_n=n),Ze=0,[]}function Ub(n){return _n="",n}function Lo(n){return rp(pc(Ze-1,Vo(n===91?n+2:n===40?n+1:n)))}function Hb(n){for(;(ae=la())&&ae<33;)Pe();return Mu(n)>2||Mu(ae)>3?"":" "}function $b(n,c){for(;--c&&Pe()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return pc(n,ec()+(c<6&&la()==32&&Pe()==32))}function Vo(n){for(;Pe();)switch(ae){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Vo(ae);break;case 40:n===41&&Vo(n);break;case 92:Pe();break}return Ze}function Lb(n,c){for(;Pe()&&n+ae!==57;)if(n+ae===84&&la()===47)break;return"/*"+pc(c,Ze-1)+"*"+cf(n===47?n:Pe())}function Qb(n){for(;!Mu(la());)Pe();return pc(n,Ze)}function jb(n){return Ub(lc("",null,null,null,[""],n=Nb(n),0,[0],n))}function lc(n,c,f,o,d,p,y,O,A){for(var b=0,$=0,S=y,Q=0,K=0,Z=0,F=1,I=1,k=1,V=0,N="",J=d,W=p,Y=o,R=N;I;)switch(Z=V,V=Pe()){case 40:if(Z!=108&&ue(R,S-1)==58){tc(R+=yt(Lo(V),"&","&\f"),"&\f",cp(b?O[b-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:R+=Lo(V);break;case 9:case 10:case 13:case 32:R+=Hb(Z);break;case 92:R+=$b(ec()-1,7);continue;case 47:switch(la()){case 42:case 47:Du(qb(Lb(Pe(),ec()),c,f,A),A),(Mu(Z||1)==5||Mu(la()||1)==5)&&Ie(R)&&wa(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*F:O[b++]=Ie(R)*k;case 125*F:case 59:case 0:switch(V){case 0:case 125:I=0;case 59+$:k==-1&&(R=yt(R,/\f/g,"")),K>0&&(Ie(R)-S||F===0&&Z===47)&&Du(K>32?Rh(R+";",o,f,S-1,A):Rh(yt(R," ","")+";",o,f,S-2,A),A);break;case 59:R+=";";default:if(Du(Y=_h(R,c,f,b,$,d,O,N,J=[],W=[],S,p),p),V===123)if($===0)lc(R,c,Y,Y,J,p,S,O,W);else{switch(Q){case 99:if(ue(R,3)===110)break;case 108:if(ue(R,2)===97)break;default:$=0;case 100:case 109:case 115:}$?lc(n,Y,Y,o&&Du(_h(n,Y,Y,0,0,d,O,N,d,J=[],S,W),W),d,W,S,O,o?J:W):lc(R,Y,Y,Y,[""],W,0,O,W)}}b=$=K=0,F=k=1,N=R="",S=y;break;case 58:S=1+Ie(R),K=Z;default:if(F<1){if(V==123)--F;else if(V==125&&F++==0&&Bb()==125)continue}switch(R+=cf(V),V*F){case 38:k=$>0?1:(R+="\f",-1);break;case 44:O[b++]=(Ie(R)-1)*k,k=1;break;case 64:la()===45&&(R+=Lo(Pe())),Q=la(),$=S=Ie(N=R+=Qb(ec())),V++;break;case 45:Z===45&&Ie(R)==2&&(F=0)}}return p}function _h(n,c,f,o,d,p,y,O,A,b,$,S){for(var Q=d-1,K=d===0?p:[""],Z=op(K),F=0,I=0,k=0;F<o;++F)for(var V=0,N=wa(n,Q+1,Q=cp(I=y[F])),J=n;V<Z;++V)(J=rp(I>0?K[V]+" "+N:yt(N,/&\f/g,K[V])))&&(A[k++]=J);return hc(n,c,f,d===0?sc:O,A,b,$,S)}function qb(n,c,f,o){return hc(n,c,f,up,cf(Rb()),wa(n,2,-2),0,o)}function Rh(n,c,f,o,d){return hc(n,c,f,uf,wa(n,0,o),wa(n,o+1,-1),o,d)}function sp(n,c,f){switch(wb(n,c)){case 5103:return Bt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Bt+n+n;case 4855:return Bt+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ou+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Bt+n+Ou+n+Vt+n+n;case 5936:switch(ue(n,c+11)){case 114:return Bt+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Bt+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Bt+n+Vt+yt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Bt+n+Vt+n+n;case 6165:return Bt+n+Vt+"flex-"+n+n;case 5187:return Bt+n+yt(n,/(\w+).+(:[^]+)/,Bt+"box-$1$2"+Vt+"flex-$1$2")+n;case 5443:return Bt+n+Vt+"flex-item-"+yt(n,/flex-|-self/g,"")+(Ml(n,/flex-|baseline/)?"":Vt+"grid-row-"+yt(n,/flex-|-self/g,""))+n;case 4675:return Bt+n+Vt+"flex-line-pack"+yt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Bt+n+Vt+yt(n,"shrink","negative")+n;case 5292:return Bt+n+Vt+yt(n,"basis","preferred-size")+n;case 6060:return Bt+"box-"+yt(n,"-grow","")+Bt+n+Vt+yt(n,"grow","positive")+n;case 4554:return Bt+yt(n,/([^-])(transform)/g,"$1"+Bt+"$2")+n;case 6187:return yt(yt(yt(n,/(zoom-|grab)/,Bt+"$1"),/(image-set)/,Bt+"$1"),n,"")+n;case 5495:case 3959:return yt(n,/(image-set\([^]*)/,Bt+"$1$`$1");case 4968:return yt(yt(n,/(.+:)(flex-)?(.*)/,Bt+"box-pack:$3"+Vt+"flex-pack:$3"),/space-between/,"justify")+Bt+n+n;case 4200:if(!Ml(n,/flex-|baseline/))return Vt+"grid-column-align"+wa(n,c)+n;break;case 2592:case 3360:return Vt+yt(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(o,d){return c=d,Ml(o.props,/grid-\w+-end/)})?~tc(n+(f=f[c].value),"span",0)?n:Vt+yt(n,"-start","")+n+Vt+"grid-row-span:"+(~tc(f,"span",0)?Ml(f,/\d+/):+Ml(f,/\d+/)-+Ml(n,/\d+/))+";":Vt+yt(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(o){return Ml(o.props,/grid-\w+-start/)})?n:Vt+yt(yt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return yt(n,/(.+)-inline(.+)/,Bt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(n)-1-c>6)switch(ue(n,c+1)){case 109:if(ue(n,c+4)!==45)break;case 102:return yt(n,/(.+:)(.+)-([^]+)/,"$1"+Bt+"$2-$3$1"+Ou+(ue(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~tc(n,"stretch",0)?sp(yt(n,"stretch","fill-available"),c,f)+n:n}break;case 5152:case 5920:return yt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,d,p,y,O,A,b){return Vt+d+":"+p+b+(y?Vt+d+"-span:"+(O?A:+A-+p)+b:"")+n});case 4949:if(ue(n,c+6)===121)return yt(n,":",":"+Bt)+n;break;case 6444:switch(ue(n,ue(n,14)===45?18:11)){case 120:return yt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Bt+(ue(n,14)===45?"inline-":"")+"box$3$1"+Bt+"$2$3$1"+Vt+"$2box$3")+n;case 100:return yt(n,":",":"+Vt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return yt(n,"scroll-","scroll-snap-")+n}return n}function uc(n,c){for(var f="",o=0;o<n.length;o++)f+=c(n[o],o,n,c)||"";return f}function Yb(n,c,f,o){switch(n.type){case Mb:if(n.children.length)break;case Ob:case Cb:case uf:return n.return=n.return||n.value;case up:return"";case ip:return n.return=n.value+"{"+uc(n.children,o)+"}";case sc:if(!Ie(n.value=n.props.join(",")))return""}return Ie(f=uc(n.children,o))?n.return=n.value+"{"+f+"}":""}function Gb(n){var c=op(n);return function(f,o,d,p){for(var y="",O=0;O<c;O++)y+=n[O](f,o,d,p)||"";return y}}function kb(n){return function(c){c.root||(c=c.return)&&n(c)}}function Xb(n,c,f,o){if(n.length>-1&&!n.return)switch(n.type){case uf:n.return=sp(n.value,n.length,f);return;case ip:return uc([ea(n,{value:yt(n.value,"@","@"+Bt)})],o);case sc:if(n.length)return _b(f=n.props,function(d){switch(Ml(d,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(ea(n,{props:[yt(d,/:(read-\w+)/,":"+Ou+"$1")]})),An(ea(n,{props:[d]})),Xo(n,{props:wh(f,o)});break;case"::placeholder":An(ea(n,{props:[yt(d,/:(plac\w+)/,":"+Bt+"input-$1")]})),An(ea(n,{props:[yt(d,/:(plac\w+)/,":"+Ou+"$1")]})),An(ea(n,{props:[yt(d,/:(plac\w+)/,Vt+"input-$1")]})),An(ea(n,{props:[d]})),Xo(n,{props:wh(f,o)});break}return""})}}var Vb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},On=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",dp="active",hp="data-styled-version",mc="6.3.8",rf=`/*!sc*/
`,ic=typeof window<"u"&&typeof document<"u",cl=z.createContext===void 0,Zb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Kb={},vc=Object.freeze([]),Cn=Object.freeze({});function pp(n,c,f){return f===void 0&&(f=Cn),n.theme!==f.theme&&n.theme||c||f.theme}var mp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Jb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wb=/(^-|-$)/g;function Bh(n){return n.replace(Jb,"-").replace(Wb,"")}var Fb=/(a)(d)/gi,Nh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Zo(n){var c,f="";for(c=Math.abs(n);c>52;c=c/52|0)f=Nh(c%52)+f;return(Nh(c%52)+f).replace(Fb,"$1-$2")}var Qo,xn=function(n,c){for(var f=c.length;f;)n=33*n^c.charCodeAt(--f);return n},vp=function(n){return xn(5381,n)};function bp(n){return Zo(vp(n)>>>0)}function Ib(n){return n.displayName||n.name||"Component"}function jo(n){return typeof n=="string"&&!0}var yp=typeof Symbol=="function"&&Symbol.for,gp=yp?Symbol.for("react.memo"):60115,Pb=yp?Symbol.for("react.forward_ref"):60112,ty={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ey={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ly=((Qo={})[Pb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qo[gp]=Ap,Qo);function Uh(n){return("type"in(c=n)&&c.type.$$typeof)===gp?Ap:"$$typeof"in n?ly[n.$$typeof]:ty;var c}var ay=Object.defineProperty,ny=Object.getOwnPropertyNames,Hh=Object.getOwnPropertySymbols,uy=Object.getOwnPropertyDescriptor,iy=Object.getPrototypeOf,$h=Object.prototype;function Sp(n,c,f){if(typeof c!="string"){if($h){var o=iy(c);o&&o!==$h&&Sp(n,o,f)}var d=ny(c);Hh&&(d=d.concat(Hh(c)));for(var p=Uh(n),y=Uh(c),O=0;O<d.length;++O){var A=d[O];if(!(A in ey||f&&f[A]||y&&A in y||p&&A in p)){var b=uy(c,A);try{ay(n,A,b)}catch{}}}}return n}function _a(n){return typeof n=="function"}function of(n){return typeof n=="object"&&"styledComponentId"in n}function Ca(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Ko(n,c){if(n.length===0)return"";for(var f=n[0],o=1;o<n.length;o++)f+=n[o];return f}function wu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Jo(n,c,f){if(f===void 0&&(f=!1),!f&&!wu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var o=0;o<c.length;o++)n[o]=Jo(n[o],c[o]);else if(wu(c))for(var o in c)n[o]=Jo(n[o],c[o]);return n}function ff(n,c){Object.defineProperty(n,"toString",{value:c})}function Ra(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var cy=(function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var f=0,o=0;o<c;o++)f+=this.groupSizes[o];return f},n.prototype.insertRules=function(c,f){if(c>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,p=d;c>=p;)if((p<<=1)<0)throw Ra(16,"".concat(c));this.groupSizes=new Uint32Array(p),this.groupSizes.set(o),this.length=p;for(var y=d;y<p;y++)this.groupSizes[y]=0}for(var O=this.indexOfGroup(c+1),A=(y=0,f.length);y<A;y++)this.tag.insertRule(O,f[y])&&(this.groupSizes[c]++,O++)},n.prototype.clearGroup=function(c){if(c<this.length){var f=this.groupSizes[c],o=this.indexOfGroup(c),d=o+f;this.groupSizes[c]=0;for(var p=o;p<d;p++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(c){var f="";if(c>=this.length||this.groupSizes[c]===0)return f;for(var o=this.groupSizes[c],d=this.indexOfGroup(c),p=d+o,y=d;y<p;y++)f+="".concat(this.tag.getRule(y)).concat(rf);return f},n})(),ac=new Map,cc=new Map,nc=1,En=function(n){if(ac.has(n))return ac.get(n);for(;cc.has(nc);)nc++;var c=nc++;return ac.set(n,c),cc.set(c,n),c},ry=function(n,c){nc=c+1,ac.set(n,c),cc.set(c,n)},oy="style[".concat(On,"][").concat(hp,'="').concat(mc,'"]'),fy=new RegExp("^".concat(On,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sy=function(n,c,f){for(var o,d=f.split(","),p=0,y=d.length;p<y;p++)(o=d[p])&&n.registerName(c,o)},dy=function(n,c){for(var f,o=((f=c.textContent)!==null&&f!==void 0?f:"").split(rf),d=[],p=0,y=o.length;p<y;p++){var O=o[p].trim();if(O){var A=O.match(fy);if(A){var b=0|parseInt(A[1],10),$=A[2];b!==0&&(ry($,b),sy(n,$,A[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(O)}}},Lh=function(n){for(var c=document.querySelectorAll(oy),f=0,o=c.length;f<o;f++){var d=c[f];d&&d.getAttribute(On)!==dp&&(dy(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function hy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xp=function(n){var c=document.head,f=n||c,o=document.createElement("style"),d=(function(O){var A=Array.from(O.querySelectorAll("style[".concat(On,"]")));return A[A.length-1]})(f),p=d!==void 0?d.nextSibling:null;o.setAttribute(On,dp),o.setAttribute(hp,mc);var y=hy();return y&&o.setAttribute("nonce",y),f.insertBefore(o,p),o},py=(function(){function n(c){this.element=xp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(f){if(f.sheet)return f.sheet;for(var o=document.styleSheets,d=0,p=o.length;d<p;d++){var y=o[d];if(y.ownerNode===f)return y}throw Ra(17)})(this.element),this.length=0}return n.prototype.insertRule=function(c,f){try{return this.sheet.insertRule(f,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var f=this.sheet.cssRules[c];return f&&f.cssText?f.cssText:""},n})(),my=(function(){function n(c){this.element=xp(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,f){if(c<=this.length&&c>=0){var o=document.createTextNode(f);return this.element.insertBefore(o,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n})(),vy=(function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,f){return c<=this.length&&(this.rules.splice(c,0,f),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n})(),Qh=ic,by={isServer:!ic,useCSSOMInjection:!Zb},rc=(function(){function n(c,f,o){c===void 0&&(c=Cn),f===void 0&&(f={});var d=this;this.options=re(re({},by),c),this.gs=f,this.names=new Map(o),this.server=!!c.isServer,!this.server&&ic&&Qh&&(Qh=!1,Lh(this)),ff(this,function(){return(function(p){for(var y=p.getTag(),O=y.length,A="",b=function(S){var Q=(function(k){return cc.get(k)})(S);if(Q===void 0)return"continue";var K=p.names.get(Q),Z=y.getGroup(S);if(K===void 0||!K.size||Z.length===0)return"continue";var F="".concat(On,".g").concat(S,'[id="').concat(Q,'"]'),I="";K!==void 0&&K.forEach(function(k){k.length>0&&(I+="".concat(k,","))}),A+="".concat(Z).concat(F,'{content:"').concat(I,'"}').concat(rf)},$=0;$<O;$++)b($);return A})(d)})}return n.registerId=function(c){return En(c)},n.prototype.rehydrate=function(){!this.server&&ic&&Lh(this)},n.prototype.reconstructWithOptions=function(c,f){return f===void 0&&(f=!0),new n(re(re({},this.options),c),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(f){var o=f.useCSSOMInjection,d=f.target;return f.isServer?new vy(d):o?new py(d):new my(d)})(this.options),new cy(c)));var c},n.prototype.hasNameForId=function(c,f){return this.names.has(c)&&this.names.get(c).has(f)},n.prototype.registerName=function(c,f){if(En(c),this.names.has(c))this.names.get(c).add(f);else{var o=new Set;o.add(f),this.names.set(c,o)}},n.prototype.insertRules=function(c,f,o){this.registerName(c,f),this.getTag().insertRules(En(c),o)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(En(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n})(),yy=/&/g,Tn=47;function jh(n){if(n.indexOf("}")===-1)return!1;for(var c=n.length,f=0,o=0,d=!1,p=0;p<c;p++){var y=n.charCodeAt(p);if(o!==0||d||y!==Tn||n.charCodeAt(p+1)!==42)if(d)y===42&&n.charCodeAt(p+1)===Tn&&(d=!1,p++);else if(y!==34&&y!==39||p!==0&&n.charCodeAt(p-1)===92){if(o===0){if(y===123)f++;else if(y===125&&--f<0)return!0}}else o===0?o=y:o===y&&(o=0);else d=!0,p++}return f!==0||o!==0}function Ep(n,c){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(c," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(c," ")),f.props=f.props.map(function(o){return"".concat(c," ").concat(o)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Ep(f.children,c)),f})}function gy(n){var c,f,o,d=Cn,p=d.options,y=p===void 0?Cn:p,O=d.plugins,A=O===void 0?vc:O,b=function(Q,K,Z){return Z.startsWith(f)&&Z.endsWith(f)&&Z.replaceAll(f,"").length>0?".".concat(c):Q},$=A.slice();$.push(function(Q){Q.type===sc&&Q.value.includes("&")&&(Q.props[0]=Q.props[0].replace(yy,f).replace(o,b))}),y.prefix&&$.push(Xb),$.push(Yb);var S=function(Q,K,Z,F){K===void 0&&(K=""),Z===void 0&&(Z=""),F===void 0&&(F="&"),c=F,f=K,o=new RegExp("\\".concat(f,"\\b"),"g");var I=(function(N){if(!jh(N))return N;for(var J=N.length,W="",Y=0,R=0,rt=0,bt=!1,st=0;st<J;st++){var gt=N.charCodeAt(st);if(rt!==0||bt||gt!==Tn||N.charCodeAt(st+1)!==42)if(bt)gt===42&&N.charCodeAt(st+1)===Tn&&(bt=!1,st++);else if(gt!==34&&gt!==39||st!==0&&N.charCodeAt(st-1)===92){if(rt===0)if(gt===123)R++;else if(gt===125){if(--R<0){for(var ft=st+1;ft<J;){var Qt=N.charCodeAt(ft);if(Qt===59||Qt===10)break;ft++}ft<J&&N.charCodeAt(ft)===59&&ft++,R=0,st=ft-1,Y=ft;continue}R===0&&(W+=N.substring(Y,st+1),Y=st+1)}else gt===59&&R===0&&(W+=N.substring(Y,st+1),Y=st+1)}else rt===0?rt=gt:rt===gt&&(rt=0);else bt=!0,st++}if(Y<J){var Ct=N.substring(Y);jh(Ct)||(W+=Ct)}return W})((function(N){if(N.indexOf("//")===-1)return N;for(var J=N.length,W=[],Y=0,R=0,rt=0,bt=0;R<J;){var st=N.charCodeAt(R);if(st!==34&&st!==39||R!==0&&N.charCodeAt(R-1)===92)if(rt===0)if(st===40&&R>=3&&(32|N.charCodeAt(R-1))==108&&(32|N.charCodeAt(R-2))==114&&(32|N.charCodeAt(R-3))==117)bt=1,R++;else if(bt>0)st===41?bt--:st===40&&bt++,R++;else if(st===Tn&&R+1<J&&N.charCodeAt(R+1)===Tn){for(R>Y&&W.push(N.substring(Y,R));R<J&&N.charCodeAt(R)!==10;)R++;Y=R}else R++;else R++;else rt===0?rt=st:rt===st&&(rt=0),R++}return Y===0?N:(Y<J&&W.push(N.substring(Y)),W.join(""))})(Q)),k=jb(Z||K?"".concat(Z," ").concat(K," { ").concat(I," }"):I);y.namespace&&(k=Ep(k,y.namespace));var V=[];return uc(k,Gb($.concat(kb(function(N){return V.push(N)})))),V};return S.hash=A.length?A.reduce(function(Q,K){return K.name||Ra(15),xn(Q,K.name)},5381).toString():"",S}var Ay=new rc,Wo=gy(),Fo={shouldForwardProp:void 0,styleSheet:Ay,stylis:Wo},Tp=cl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Fo)}}:z.createContext(Fo);Tp.Consumer;cl||z.createContext(void 0);function Io(){return cl?Fo:z.useContext(Tp)}var Sy=(function(){function n(c,f){var o=this;this.inject=function(d,p){p===void 0&&(p=Wo);var y=o.name+p.hash;d.hasNameForId(o.id,y)||d.insertRules(o.id,y,p(o.rules,y,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=f,ff(this,function(){throw Ra(12,String(o.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Wo),this.name+c.hash},n})();function xy(n,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||n in Vb||n.startsWith("--")?String(c).trim():"".concat(c,"px")}var Ey=function(n){return n>="A"&&n<="Z"};function qh(n){for(var c="",f=0;f<n.length;f++){var o=n[f];if(f===1&&o==="-"&&n[0]==="-")return n;Ey(o)?c+="-"+o.toLowerCase():c+=o}return c.startsWith("ms-")?"-"+c:c}var zp=function(n){return n==null||n===!1||n===""},Dp=function(n){var c=[];for(var f in n){var o=n[f];n.hasOwnProperty(f)&&!zp(o)&&(Array.isArray(o)&&o.isCss||_a(o)?c.push("".concat(qh(f),":"),o,";"):wu(o)?c.push.apply(c,Cu(Cu(["".concat(f," {")],Dp(o),!1),["}"],!1)):c.push("".concat(qh(f),": ").concat(xy(f,o),";")))}return c};function aa(n,c,f,o){if(zp(n))return[];if(of(n))return[".".concat(n.styledComponentId)];if(_a(n)){if(!_a(p=n)||p.prototype&&p.prototype.isReactComponent||!c)return[n];var d=n(c);return aa(d,c,f,o)}var p;return n instanceof Sy?f?(n.inject(f,o),[n.getName(o)]):[n]:wu(n)?Dp(n):Array.isArray(n)?Array.prototype.concat.apply(vc,n.map(function(y){return aa(y,c,f,o)})):[n.toString()]}function Op(n){for(var c=0;c<n.length;c+=1){var f=n[c];if(_a(f)&&!of(f))return!1}return!0}var Ty=vp(mc),zy=(function(){function n(c,f,o){this.rules=c,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Op(c),this.componentId=f,this.baseHash=xn(Ty,f),this.baseStyle=o,rc.registerId(f)}return n.prototype.generateAndInjectStyles=function(c,f,o){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,f,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=Ca(d,this.staticRulesId);else{var p=Ko(aa(this.rules,c,f,o)),y=Zo(xn(this.baseHash,p)>>>0);if(!f.hasNameForId(this.componentId,y)){var O=o(p,".".concat(y),void 0,this.componentId);f.insertRules(this.componentId,y,O)}d=Ca(d,y),this.staticRulesId=y}else{for(var A=xn(this.baseHash,o.hash),b="",$=0;$<this.rules.length;$++){var S=this.rules[$];if(typeof S=="string")b+=S;else if(S){var Q=Ko(aa(S,c,f,o));A=xn(A,Q+$),b+=Q}}if(b){var K=Zo(A>>>0);if(!f.hasNameForId(this.componentId,K)){var Z=o(b,".".concat(K),void 0,this.componentId);f.insertRules(this.componentId,K,Z)}d=Ca(d,K)}}return{className:d,css:typeof window>"u"?f.getTag().getGroup(En(this.componentId)):""}},n})(),_u=cl?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:z.createContext(void 0);_u.Consumer;function Dy(n){if(cl)return n.children;var c=z.useContext(_u),f=z.useMemo(function(){return(function(o,d){if(!o)throw Ra(14);if(_a(o)){var p=o(d);return p}if(Array.isArray(o)||typeof o!="object")throw Ra(8);return d?re(re({},d),o):o})(n.theme,c)},[n.theme,c]);return n.children?z.createElement(_u.Provider,{value:f},n.children):null}var qo={};function Oy(n,c,f){var o=of(n),d=n,p=!jo(n),y=c.attrs,O=y===void 0?vc:y,A=c.componentId,b=A===void 0?(function(J,W){var Y=typeof J!="string"?"sc":Bh(J);qo[Y]=(qo[Y]||0)+1;var R="".concat(Y,"-").concat(bp(mc+Y+qo[Y]));return W?"".concat(W,"-").concat(R):R})(c.displayName,c.parentComponentId):A,$=c.displayName,S=$===void 0?(function(J){return jo(J)?"styled.".concat(J):"Styled(".concat(Ib(J),")")})(n):$,Q=c.displayName&&c.componentId?"".concat(Bh(c.displayName),"-").concat(c.componentId):c.componentId||b,K=o&&d.attrs?d.attrs.concat(O).filter(Boolean):O,Z=c.shouldForwardProp;if(o&&d.shouldForwardProp){var F=d.shouldForwardProp;if(c.shouldForwardProp){var I=c.shouldForwardProp;Z=function(J,W){return F(J,W)&&I(J,W)}}else Z=F}var k=new zy(f,Q,o?d.componentStyle:void 0);function V(J,W){return(function(Y,R,rt){var bt=Y.attrs,st=Y.componentStyle,gt=Y.defaultProps,ft=Y.foldedComponentIds,Qt=Y.styledComponentId,Ct=Y.target,Dt=cl?void 0:z.useContext(_u),C=Io(),G=Y.shouldForwardProp||C.shouldForwardProp,X=pp(R,Dt,gt)||Cn,ut=(function(Ot,L,ot){for(var pt,At=re(re({},L),{className:void 0,theme:ot}),_t=0;_t<Ot.length;_t+=1){var Nt=_a(pt=Ot[_t])?pt(At):pt;for(var Ut in Nt)Ut==="className"?At.className=Ca(At.className,Nt[Ut]):Ut==="style"?At.style=re(re({},At.style),Nt[Ut]):At[Ut]=Nt[Ut]}return"className"in L&&typeof L.className=="string"&&(At.className=Ca(At.className,L.className)),At})(bt,R,X),dt=ut.as||Ct,m={};for(var M in ut)ut[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&ut.theme===X||(M==="forwardedAs"?m.as=ut.forwardedAs:G&&!G(M,dt)||(m[M]=ut[M]));var U=(function(Ot,L){var ot=Io(),pt=Ot.generateAndInjectStyles(L,ot.styleSheet,ot.stylis);return pt})(st,ut),j=U.className,P=U.css,tt=Ca(ft,Qt);j&&(tt+=" "+j),ut.className&&(tt+=" "+ut.className),m[jo(dt)&&!mp.has(dt)?"class":"className"]=tt,rt&&(m.ref=rt);var at=w.createElement(dt,m);return cl&&P?z.createElement(z.Fragment,null,z.createElement("style",{precedence:"styled-components",href:"sc-".concat(Qt,"-").concat(j),children:P}),at):at})(N,J,W)}V.displayName=S;var N=z.forwardRef(V);return N.attrs=K,N.componentStyle=k,N.displayName=S,N.shouldForwardProp=Z,N.foldedComponentIds=o?Ca(d.foldedComponentIds,d.styledComponentId):"",N.styledComponentId=Q,N.target=o?d.target:n,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=o?(function(W){for(var Y=[],R=1;R<arguments.length;R++)Y[R-1]=arguments[R];for(var rt=0,bt=Y;rt<bt.length;rt++)Jo(W,bt[rt],!0);return W})({},d.defaultProps,J):J}}),ff(N,function(){return".".concat(N.styledComponentId)}),p&&Sp(N,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function Yh(n,c){for(var f=[n[0]],o=0,d=c.length;o<d;o+=1)f.push(c[o],n[o+1]);return f}var Gh=function(n){return Object.assign(n,{isCss:!0})};function et(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];if(_a(n)||wu(n))return Gh(aa(Yh(vc,Cu([n],c,!0))));var o=n;return c.length===0&&o.length===1&&typeof o[0]=="string"?aa(o):Gh(aa(Yh(o,c)))}function Po(n,c,f){if(f===void 0&&(f=Cn),!c)throw Ra(1,c);var o=function(d){for(var p=[],y=1;y<arguments.length;y++)p[y-1]=arguments[y];return n(c,f,et.apply(void 0,Cu([d],p,!1)))};return o.attrs=function(d){return Po(n,c,re(re({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},o.withConfig=function(d){return Po(n,c,re(re({},f),d))},o}var Cp=function(n){return Po(Oy,n)},q=Cp;mp.forEach(function(n){q[n]=Cp(n)});var Cy=(function(){function n(c,f){this.rules=c,this.componentId=f,this.isStatic=Op(c),rc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,f,o,d){var p=d(Ko(aa(this.rules,f,o,d)),""),y=this.componentId+c;o.insertRules(y,y,p)},n.prototype.removeStyles=function(c,f){f.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,f,o,d){c>2&&rc.registerId(this.componentId+c);var p=this.componentId+c;this.isStatic?o.hasNameForId(p,p)||this.createStyles(c,f,o,d):(this.removeStyles(c,o),this.createStyles(c,f,o,d))},n})();function My(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];var o=et.apply(void 0,Cu([n],c,!1)),d="sc-global-".concat(bp(JSON.stringify(o))),p=new Cy(o,d),y=new WeakMap,O=function(A){var b=Io(),$=cl?void 0:z.useContext(_u),S=y.get(b.styleSheet);if(S===void 0&&(S=b.styleSheet.allocateGSInstance(d),y.set(b.styleSheet,S)),(typeof window>"u"||!b.styleSheet.server)&&(function(I,k,V,N,J){if(p.isStatic)p.renderStyles(I,Kb,V,J);else{var W=re(re({},k),{theme:pp(k,N,O.defaultProps)});p.renderStyles(I,W,V,J)}})(S,A,b.styleSheet,$,b.stylis),!cl){var Q=z.useRef(!0);z.useLayoutEffect(function(){return Q.current=!1,function(){Q.current=!0,queueMicrotask(function(){Q.current&&(p.removeStyles(S,b.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(I){return I.remove()}))})}},[S,b.styleSheet])}if(cl){var K=d+S,Z=typeof window>"u"?b.styleSheet.getTag().getGroup(En(K)):"";if(Z){var F="".concat(d,"-").concat(S);return z.createElement("style",{key:F,"data-styled-global":d,precedence:"styled-components",href:F,children:Z})}}return null};return z.memo(O)}var wy=`
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

`;const sf="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",df="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>et`
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
`,Ba=()=>et`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,Sn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},_y=({theme:n,topLeftInner:c,bottomRightInner:f,hasShadow:o=!1,hasInsetShadow:d=!1})=>[o?sf:!1,d?df:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,f!==null?`inset -1px -1px 0 1px ${n[f]}`:!1].filter(Boolean).join(", "),Wt=({invert:n=!1,style:c="button"}={})=>{const f={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return et`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[Sn[c][f.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[Sn[c][f.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[Sn[c][f.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[Sn[c][f.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:d})=>_y({theme:o,topLeftInner:Sn[c][f.topLeftInner],bottomRightInner:Sn[c][f.bottomRightInner],hasShadow:d})};
  `},Mn=()=>et`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,Ry=n=>Buffer.from(n).toString("base64"),By=typeof btoa<"u"?btoa:Ry,Fi=(n,c=0)=>{const f=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${By(f)})`},hf=(n="default")=>et`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>Ru({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Ba():Wt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${el()}
    ${n==="flat"?Ba():Wt({style:"window"})}
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
`,Ny=q.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Uy=w.forwardRef(({children:n,underline:c=!0,...f},o)=>z.createElement(Ny,{ref:o,underline:c,...f},n));Uy.displayName="Anchor";const Hy=q.header`
  ${Wt()};
  ${el()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Mp=w.forwardRef(({children:n,fixed:c=!0,position:f="fixed",...o},d)=>z.createElement(Hy,{fixed:c,position:c!==!1?f:void 0,ref:d,...o},n));Mp.displayName="AppBar";const Na=()=>{};function Ma(n,c,f){return f!==null&&n>f?f:c!==null&&n<c?c:n}function $y(n){if(Math.abs(n)<1){const f=n.toExponential().split("e-"),o=f[0].split(".")[1];return(o?o.length:0)+parseInt(f[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function kh(n,c,f){const o=Math.round((n-f)/c)*c+f;return Number(o.toFixed($y(c)))}function na(n){return typeof n=="number"?`${n}px`:n}const Ly=q.div`
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
`,jy=w.forwardRef(({alt:n="",children:c,noBorder:f=!1,size:o=35,square:d=!1,src:p,...y},O)=>z.createElement(Ly,{noBorder:f,ref:O,size:na(o),square:d,src:p,...y},p?z.createElement(Qy,{src:p,alt:n}):c));jy.displayName="Avatar";const pe={sm:"28px",md:"36px",lg:"44px"},qy=et`
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
`,bc=q.button`
  ${({active:n,disabled:c,primary:f,theme:o,variant:d})=>d==="flat"?et`
          ${Ba()}
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
            ${!n&&!c&&Mn}
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
            ${!n&&!c&&Mn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${qy}
`,wn=w.forwardRef(({onClick:n,disabled:c=!1,children:f,type:o="button",fullWidth:d=!1,size:p="md",square:y=!1,active:O=!1,onTouchStart:A=Na,primary:b=!1,variant:$="default",...S},Q)=>z.createElement(bc,{active:O,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:b,ref:Q,size:p,square:y,type:o,variant:$,...S},f));wn.displayName="Button";function ua({defaultValue:n,onChange:c,onChangePropName:f="onChange",readOnly:o,value:d,valuePropName:p="value"}){const y=d!==void 0,[O,A]=w.useState(n),b=w.useCallback($=>{y||A($)},[y]);if(y&&typeof c!="function"&&!o){const $=`Warning: You provided a \`${p}\` prop to a component without an \`${f}\` handler.${p==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${f}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${f}\` function that updates \`${p}\`.`}`;console.warn($)}return[y?d:O,b]}const tf=q.li`
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
`,wp=w.forwardRef(({size:n="lg",disabled:c,square:f,children:o,onClick:d,primary:p,...y},O)=>z.createElement(tf,{$disabled:c,size:n,square:f,onClick:c?void 0:d,primary:p,role:"menuitem",ref:O,"aria-disabled":c,...y},o));wp.displayName="MenuListItem";const _p=q.ul.attrs(()=>({role:"menu"}))`
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
`;_p.displayName="MenuList";const rl=20,oc=q.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${rl}px;
  height: ${rl}px;
  opacity: 0;
  z-index: -1;
`,pf=q.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&tl()}

  ${tf} & {
    margin: 0;
    height: 100%;
  }
  ${tf}:hover & {
    ${({$disabled:n,theme:c})=>!n&&et`
        color: ${c.materialTextInvert};
      `};
  }
`,mf=q.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${oc}:focus ~ & {
    ${Mn}
  }
  ${oc}:not(:disabled) ~ &:active {
    ${Mn}
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
    ${n=>n.shadow&&`box-shadow:${df};`}
  }
`,Yy=q.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${hf()}
`,Rp=w.forwardRef(({children:n,shadow:c=!0,...f},o)=>z.createElement(ol,{ref:o,shadow:c,...f},z.createElement(Yy,null,n)));Rp.displayName="ScrollView";const Bp=et`
  width: ${rl}px;
  height: ${rl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Gy=q(ol)`
  ${Bp}
  width: ${rl}px;
  height: ${rl}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,ky=q.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${Bp}
  width: ${rl-4}px;
  height: ${rl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,Xy=q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Vy=q.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,Zy={flat:ky,default:Gy},Ky=w.forwardRef(({checked:n,className:c="",defaultChecked:f=!1,disabled:o=!1,indeterminate:d=!1,label:p="",onChange:y=Na,style:O={},value:A,variant:b="default",...$},S)=>{var Q;const[K,Z]=ua({defaultValue:f,onChange:y,readOnly:(Q=$.readOnly)!==null&&Q!==void 0?Q:o,value:n}),F=w.useCallback(V=>{const N=V.target.checked;Z(N),y(V)},[y,Z]),I=Zy[b];let k=null;return d?k=Vy:K&&(k=Xy),z.createElement(pf,{$disabled:o,className:c,style:O},z.createElement(oc,{disabled:o,onChange:o?void 0:F,readOnly:o,type:"checkbox",value:A,checked:K,"data-indeterminate":d,ref:S,...$}),z.createElement(I,{$disabled:o,role:"presentation"},k&&z.createElement(k,{$disabled:o,variant:b})),p&&z.createElement(mf,null,p))});Ky.displayName="Checkbox";const vf=q.div`
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
`;vf.displayName="Separator";const Jy=q(bc)`
  padding-left: 8px;
`,Wy=q(vf)`
  height: 21px;
  position: relative;
  top: 0;
`,Np=q.input`
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
`,Fy=q.div`
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
  ${Np}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Mn}
    outline-offset: -8px;
  }
`,Iy=q.span`
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
`,Py=w.forwardRef(({value:n,defaultValue:c,onChange:f=Na,disabled:o=!1,variant:d="default",...p},y)=>{var O;const[A,b]=ua({defaultValue:c,onChange:f,readOnly:(O=p.readOnly)!==null&&O!==void 0?O:o,value:n}),$=S=>{const Q=S.target.value;b(Q),f(S)};return z.createElement(Jy,{disabled:o,as:"div",variant:d,size:"md"},z.createElement(Np,{onChange:$,readOnly:o,disabled:o,value:A??"#008080",type:"color",ref:y,...p}),z.createElement(Fy,{$disabled:o,color:A??"#008080",role:"presentation"}),d==="default"&&z.createElement(Wy,{orientation:"vertical"}),z.createElement(Iy,{$disabled:o,variant:d}))});Py.displayName="ColorInput";const tg=q.div`
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
`,Xh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],eg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function lg({digit:n=0,pixelSize:c=2,...f}){const o=eg[Number(n)].map((d,p)=>d?`${Xh[p]} active`:Xh[p]);return z.createElement(tg,{pixelSize:c,...f},o.map((d,p)=>z.createElement("span",{className:d,key:p})))}const ag=q.div`
  ${Wt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ng={sm:1,md:2,lg:3,xl:4},ug=w.forwardRef(({value:n=0,minLength:c=3,size:f="md",...o},d)=>{const p=w.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return z.createElement(ag,{ref:d,...o},p.map((y,O)=>z.createElement(lg,{digit:y,pixelSize:ng[f],key:O})))});ug.displayName="Counter";const Up=et`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${pe.md};
`,ig=q(ol).attrs({"data-testid":"variant-default"})`
  ${Up}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,cg=q.div.attrs({"data-testid":"variant-flat"})`
  ${Ba()}
  ${Up}
  position: relative;
`,Hp=et`
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
`,rg=q.input`
  ${Hp}
  padding: 0 8px;
`,og=q.textarea`
  ${Hp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>hf(n)}
`,$p=w.forwardRef(({className:n,disabled:c=!1,fullWidth:f,onChange:o=Na,shadow:d=!0,style:p,variant:y="default",...O},A)=>{const b=y==="flat"?cg:ig,$=w.useMemo(()=>{var S;return O.multiline?z.createElement(og,{disabled:c,onChange:c?void 0:o,readOnly:c,ref:A,variant:y,...O}):z.createElement(rg,{disabled:c,onChange:c?void 0:o,readOnly:c,ref:A,type:(S=O.type)!==null&&S!==void 0?S:"text",variant:y,...O})},[c,o,O,A,y]);return z.createElement(b,{className:n,fullWidth:f,$disabled:c,shadow:d,style:p},$)});$p.displayName="TextInput";const fg=q.div`
  display: inline-flex;
  align-items: center;
`,ef=q(wn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?et`
          height: calc(50% - 1px);
        `:et`
          height: 50%;
        `}
`,sg=q.div`
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
`,Vh=q.span`
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
  ${ef}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?et`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:et`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,Lp=w.forwardRef(({className:n,defaultValue:c,disabled:f=!1,max:o,min:d,onChange:p,readOnly:y,step:O=1,style:A,value:b,variant:$="default",width:S,...Q},K)=>{const[Z,F]=ua({defaultValue:c,onChange:p,readOnly:y,value:b}),I=w.useCallback(Y=>{const R=parseFloat(Y.target.value);F(R)},[F]),k=w.useCallback(Y=>{const R=Ma(parseFloat(((Z??0)+Y).toFixed(2)),d??null,o??null);F(R),p?.(R)},[o,d,p,F,Z]),V=w.useCallback(()=>{Z!==void 0&&p?.(Z)},[p,Z]),N=w.useCallback(()=>{k(O)},[k,O]),J=w.useCallback(()=>{k(-O)},[k,O]),W=$==="flat"?"flat":"raised";return z.createElement(fg,{className:n,style:{...A,width:S!==void 0?na(S):"auto"},...Q},z.createElement($p,{value:Z,variant:$,onChange:I,disabled:f,type:"number",readOnly:y,ref:K,fullWidth:!0,onBlur:V}),z.createElement(sg,{variant:$},z.createElement(ef,{"data-testid":"increment",variant:W,disabled:f||y,onClick:N},z.createElement(Vh,{invert:!0})),z.createElement(ef,{"data-testid":"decrement",variant:W,disabled:f||y,onClick:J},z.createElement(Vh,null))))});Lp.displayName="NumberInput";function dg(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let f=0;f<10;f+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const Qp=n=>w.useMemo(()=>dg(),[n]),jp=et`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,qp=et`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,bf=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,hg=q.div`
  ${jp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${bf}:focus & {
    ${qp}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Yp=et`
  height: ${pe.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?tl():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,pg=q(ol)`
  ${Yp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,mg=q.div`
  ${Ba()}
  ${Yp}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,vg=q.select`
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
  ${jp}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Gp=q(bc).attrs(()=>({"aria-hidden":"true"}))`
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
`,bg=q.span`
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
  ${Gp}:active & {
    margin-top: 2px;
  }
`,yg=q.ul`
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
  box-shadow: ${sf};
  ${({variant:n="default"})=>n==="flat"?et`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:et`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>hf(n)}
`,gg=q.li`
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
  ${({active:n})=>n?qp:""}
  user-select: none;
`,Ag=[],kp=({className:n,defaultValue:c,disabled:f,native:o,onChange:d,options:p=Ag,readOnly:y,style:O,value:A,variant:b,width:$})=>{var S;const Q=w.useMemo(()=>p.filter(Boolean),[p]),[K,Z]=ua({defaultValue:c??((S=Q?.[0])===null||S===void 0?void 0:S.value),onChange:d,readOnly:y,value:A}),F=!(f||y),I=w.useMemo(()=>({className:n,style:{...O,width:$}}),[n,O,$]),k=w.useMemo(()=>z.createElement(Gp,{as:"div","data-testid":"select-button",$disabled:f,native:o,tabIndex:-1,variant:b==="flat"?"flat":"raised"},z.createElement(bg,{"data-testid":"select-icon",$disabled:f})),[f,o,b]),V=w.useMemo(()=>b==="flat"?mg:pg,[b]);return w.useMemo(()=>({isEnabled:F,options:Q,value:K,setValue:Z,wrapperProps:I,DropdownButton:k,Wrapper:V}),[k,V,F,Q,Z,K,I])},Sg={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},xg=1e3,Eg=({onBlur:n,onChange:c,onClose:f,onFocus:o,onKeyDown:d,onMouseDown:p,onOpen:y,open:O,options:A,readOnly:b,value:$,selectRef:S,setValue:Q,wrapperRef:K})=>{const Z=w.useRef(null),F=w.useRef([]),I=w.useRef(0),k=w.useRef(0),V=w.useRef(),N=w.useRef("search"),J=w.useRef(""),W=w.useRef(),[Y,R]=ua({defaultValue:!1,onChange:y,onChangePropName:"onOpen",readOnly:b,value:O,valuePropName:"open"}),rt=w.useMemo(()=>{const L=A.findIndex(ot=>ot.value===$);return I.current=Ma(L,0,null),A[L]},[A,$]),[bt,st]=w.useState(A[0]),gt=w.useCallback(L=>{const ot=Z.current,pt=F.current[L];if(!pt||!ot){V.current=L;return}V.current=void 0;const At=ot.clientHeight,_t=ot.scrollTop,Nt=ot.scrollTop+At,Ut=pt.offsetTop,me=pt.offsetHeight,Ke=pt.offsetTop+pt.offsetHeight;Ut<_t&&ot.scrollTo(0,Ut),Ke>Nt&&ot.scrollTo(0,Ut-At+me),pt.focus({preventScroll:!0})},[Z]),ft=w.useCallback((L,{scroll:ot}={})=>{var pt;const At=A.length-1;let _t;switch(L){case"first":{_t=0;break}case"last":{_t=At;break}case"next":{_t=Ma(k.current+1,0,At);break}case"previous":{_t=Ma(k.current-1,0,At);break}case"selected":{_t=Ma((pt=I.current)!==null&&pt!==void 0?pt:0,0,At);break}default:_t=L}k.current=_t,st(A[_t]),ot&&gt(_t)},[k,A,gt]),Qt=w.useCallback(({fromEvent:L})=>{R(!0),ft("selected",{scroll:!0}),y?.({fromEvent:L})},[ft,y,R]),Ct=w.useCallback(()=>{N.current="search",J.current="",clearTimeout(W.current)},[]),Dt=w.useCallback(({focusSelect:L,fromEvent:ot})=>{var pt;f?.({fromEvent:ot}),R(!1),st(A[0]),Ct(),V.current=void 0,L&&((pt=S.current)===null||pt===void 0||pt.focus())},[Ct,f,A,S,R]),C=w.useCallback(({fromEvent:L})=>{Y?Dt({focusSelect:!1,fromEvent:L}):Qt({fromEvent:L})},[Dt,Qt,Y]),G=w.useCallback((L,{fromEvent:ot})=>{I.current!==L&&(I.current=L,Q(A[L].value),c?.(A[L],{fromEvent:ot}))},[c,A,Q]),X=w.useCallback(({focusSelect:L,fromEvent:ot})=>{G(k.current,{fromEvent:ot}),Dt({focusSelect:L,fromEvent:ot})},[Dt,G]),ut=w.useCallback((L,{fromEvent:ot,select:pt})=>{var At;switch(N.current==="cycleFirstLetter"&&L!==J.current&&(N.current="search"),L===J.current?N.current="cycleFirstLetter":J.current+=L,N.current){case"search":{let _t=A.findIndex(Nt=>{var Ut;return((Ut=Nt.label)===null||Ut===void 0?void 0:Ut.toLocaleUpperCase().indexOf(J.current))===0});_t<0&&(_t=A.findIndex(Nt=>{var Ut;return((Ut=Nt.label)===null||Ut===void 0?void 0:Ut.toLocaleUpperCase().indexOf(L))===0}),J.current=L),_t>=0&&(pt?G(_t,{fromEvent:ot}):ft(_t,{scroll:!0}));break}case"cycleFirstLetter":{const _t=pt?(At=I.current)!==null&&At!==void 0?At:-1:k.current;let Nt=A.findIndex((Ut,me)=>{var Ke;return me>_t&&((Ke=Ut.label)===null||Ke===void 0?void 0:Ke.toLocaleUpperCase().indexOf(L))===0});Nt<0&&(Nt=A.findIndex(Ut=>{var me;return((me=Ut.label)===null||me===void 0?void 0:me.toLocaleUpperCase().indexOf(L))===0})),Nt>=0&&(pt?G(Nt,{fromEvent:ot}):ft(Nt,{scroll:!0}));break}}clearTimeout(W.current),W.current=setTimeout(()=>{N.current==="search"&&(J.current="")},xg)},[ft,A,G]),dt=w.useCallback(L=>{var ot;L.button===0&&(L.preventDefault(),(ot=S.current)===null||ot===void 0||ot.focus(),C({fromEvent:L}),p?.(L))},[p,S,C]),m=w.useCallback(L=>{X({focusSelect:!0,fromEvent:L})},[X]),M=w.useCallback(L=>{const{altKey:ot,code:pt,ctrlKey:At,metaKey:_t,shiftKey:Nt}=L,{ARROW_DOWN:Ut,ARROW_UP:me,END:Ke,ENTER:ll,ESC:He,HOME:ia,SPACE:ca,TAB:ra}=Sg,Bu=ot||At||_t||Nt;if(!(pt===ra&&(ot||At||_t)||pt!==ra&&Bu))switch(pt){case Ut:{if(L.preventDefault(),!Y){Qt({fromEvent:L});return}ft("next",{scroll:!0});break}case me:{if(L.preventDefault(),!Y){Qt({fromEvent:L});return}ft("previous",{scroll:!0});break}case Ke:{if(L.preventDefault(),!Y){Qt({fromEvent:L});return}ft("last",{scroll:!0});break}case ll:{if(!Y)return;L.preventDefault(),X({focusSelect:!0,fromEvent:L});break}case He:{if(!Y)return;L.preventDefault(),Dt({focusSelect:!0,fromEvent:L});break}case ia:{if(L.preventDefault(),!Y){Qt({fromEvent:L});return}ft("first",{scroll:!0});break}case ca:{L.preventDefault(),Y?X({focusSelect:!0,fromEvent:L}):Qt({fromEvent:L});break}case ra:{if(!Y)return;Nt||L.preventDefault(),X({focusSelect:!Nt,fromEvent:L});break}default:!Bu&&pt.match(/^Key/)&&(L.preventDefault(),L.stopPropagation(),ut(pt.replace(/^Key/,""),{select:!Y,fromEvent:L}))}},[ft,Dt,Y,Qt,ut,X]),U=w.useCallback(L=>{M(L),d?.(L)},[M,d]),j=w.useCallback(L=>{ft(L)},[ft]),P=w.useCallback(L=>{Y||(Ct(),n?.(L))},[Ct,n,Y]),tt=w.useCallback(L=>{Ct(),o?.(L)},[Ct,o]),at=w.useCallback(L=>{Z.current=L,V.current!==void 0&&gt(V.current)},[gt]),Ot=w.useCallback((L,ot)=>{F.current[ot]=L,V.current===ot&&gt(V.current)},[gt]);return w.useEffect(()=>{if(!Y)return()=>{};const L=ot=>{var pt;const At=ot.target;!((pt=K.current)===null||pt===void 0)&&pt.contains(At)||(ot.preventDefault(),Dt({focusSelect:!1,fromEvent:ot}))};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[Dt,Y,K]),w.useMemo(()=>({activeOption:bt,handleActivateOptionIndex:j,handleBlur:P,handleButtonKeyDown:U,handleDropdownKeyDown:M,handleFocus:tt,handleMouseDown:dt,handleOptionClick:m,handleSetDropdownRef:at,handleSetOptionRef:Ot,open:Y,selectedOption:rt}),[bt,j,P,U,tt,M,dt,m,at,Ot,Y,rt])},Tg=w.forwardRef(({className:n,defaultValue:c,disabled:f,onChange:o,options:d,readOnly:p,style:y,value:O,variant:A,width:b,...$},S)=>{const{isEnabled:Q,options:K,setValue:Z,value:F,DropdownButton:I,Wrapper:k}=kp({defaultValue:c,disabled:f,native:!0,onChange:o,options:d,readOnly:p,value:O,variant:A}),V=w.useCallback(N=>{const J=K.find(W=>W.value===N.target.value);J&&(Z(J.value),o?.(J,{fromEvent:N}))},[o,K,Z]);return z.createElement(k,{className:n,style:{...y,width:b}},z.createElement(bf,null,z.createElement(vg,{...$,disabled:f,onChange:Q?V:Na,ref:S,value:F},K.map((N,J)=>{var W;return z.createElement("option",{key:`${N.value}-${J}`,value:N.value},(W=N.label)!==null&&W!==void 0?W:N.value)})),I))});Tg.displayName="SelectNative";function zg({activateOptionIndex:n,active:c,index:f,onClick:o,option:d,selected:p,setRef:y}){const O=w.useCallback(()=>{n(f)},[n,f]),A=w.useCallback($=>{y($,f)},[f,y]),b=Qp();return z.createElement(gg,{active:c,"aria-selected":p?"true":void 0,"data-value":d.value,id:b,onClick:o,onMouseEnter:O,ref:A,role:"option",tabIndex:0},d.label)}function Dg({"aria-label":n,"aria-labelledby":c,className:f,defaultValue:o,disabled:d=!1,formatDisplay:p,inputProps:y,labelId:O,menuMaxHeight:A,name:b,onBlur:$,onChange:S,onClose:Q,onFocus:K,onKeyDown:Z,onMouseDown:F,onOpen:I,open:k,options:V,readOnly:N,shadow:J=!0,style:W,variant:Y="default",value:R,width:rt="auto",...bt},st){const{isEnabled:gt,options:ft,setValue:Qt,value:Ct,wrapperProps:Dt,DropdownButton:C,Wrapper:G}=kp({className:f,defaultValue:o,disabled:d,native:!1,onChange:S,options:V,style:W,readOnly:N,value:R,variant:Y,width:rt}),X=w.useRef(null),ut=w.useRef(null),dt=w.useRef(null),{activeOption:m,handleActivateOptionIndex:M,handleBlur:U,handleButtonKeyDown:j,handleDropdownKeyDown:P,handleFocus:tt,handleMouseDown:at,handleOptionClick:Ot,handleSetDropdownRef:L,handleSetOptionRef:ot,open:pt,selectedOption:At}=Eg({onBlur:$,onChange:S,onClose:Q,onFocus:K,onKeyDown:Z,onMouseDown:F,onOpen:I,open:k,options:ft,value:Ct,selectRef:ut,setValue:Qt,wrapperRef:dt});w.useImperativeHandle(st,()=>({focus:ll=>{var He;(He=ut.current)===null||He===void 0||He.focus(ll)},node:X.current,value:String(Ct)}),[Ct]);const _t=w.useMemo(()=>At?typeof p=="function"?p(At):At.label:"",[p,At]),Nt=gt?1:void 0,Ut=w.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),me=Qp(),Ke=w.useMemo(()=>ft.map((ll,He)=>{const ia=`${Ct}-${He}`,ca=ll===m,ra=ll===At;return z.createElement(zg,{activateOptionIndex:M,active:ca,index:He,key:ia,onClick:Ot,option:ll,selected:ra,setRef:ot})}),[m,M,Ot,ot,ft,At,Ct]);return z.createElement(G,{...Dt,$disabled:d,ref:dt,shadow:J,style:{...W,width:rt}},z.createElement("input",{name:b,ref:X,type:"hidden",value:String(Ct),...y}),z.createElement(bf,{"aria-disabled":d,"aria-expanded":pt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??O,"aria-owns":gt&&pt?me:void 0,onBlur:U,onFocus:tt,onKeyDown:j,onMouseDown:gt?at:F,ref:ut,role:"button",tabIndex:Nt,...bt},z.createElement(hg,null,_t),C),gt&&pt&&z.createElement(yg,{id:me,onKeyDown:P,ref:L,role:"listbox",style:Ut,tabIndex:0,variant:Y},Ke))}const Xp=w.forwardRef(Dg);Xp.displayName="Select";const Og=q.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,fc=w.forwardRef(function({children:c,noPadding:f=!1,...o},d){return z.createElement(Og,{noPadding:f,ref:d,...o},c)});fc.displayName="Toolbar";const Cg=q.div`
  padding: 16px;
`,yf=w.forwardRef(function({children:c,...f},o){return z.createElement(Cg,{ref:o,...f},c)});yf.displayName="WindowContent";const Mg=q.div`
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

  ${bc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,gf=w.forwardRef(function({active:c=!0,children:f,...o},d){return z.createElement(Mg,{active:c,ref:d,...o},f)});gf.displayName="WindowHeader";const wg=q.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Wt({style:"window"})}
  ${el()}
`,_g=q.span`
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
`,Af=w.forwardRef(({children:n,resizable:c=!1,resizeRef:f,shadow:o=!0,...d},p)=>z.createElement(wg,{ref:p,shadow:o,...d},n,c&&z.createElement(_g,{"data-testid":"resizeHandle",ref:f})));Af.displayName="Window";const Rg=q(Rp)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,Bg=q.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Ng=q.div`
  display: flex;
  flex-wrap: wrap;
`,Cl=q.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Ug=q.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,Hg=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function $g(n,c){return new Date(n,c+1,0).getDate()}function Lg(n,c,f){return new Date(n,c,f).getDay()}function Qg(n){const c=new Date(Date.parse(n)),f=c.getUTCDate(),o=c.getUTCMonth(),d=c.getUTCFullYear();return{day:f,month:o,year:d}}const jg=w.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:f,onCancel:o,shadow:d=!0},p)=>{const[y,O]=w.useState(()=>Qg(c)),{year:A,month:b,day:$}=y,S=w.useCallback(({value:I})=>{O(k=>({...k,month:I}))},[]),Q=w.useCallback(I=>{O(k=>({...k,year:I}))},[]),K=w.useCallback(I=>{O(k=>({...k,day:I}))},[]),Z=w.useCallback(()=>{const I=[y.year,y.month+1,y.day].map(k=>String(k).padStart(2,"0")).join("-");f?.(I)},[y.day,y.month,y.year,f]),F=w.useMemo(()=>{const I=Array.from({length:42}),k=Lg(A,b,1);let V=$;const N=$g(A,b);return V=V<N?V:N,I.forEach((J,W)=>{if(W>=k&&W<N+k){const Y=W-k+1;I[W]=z.createElement(Cl,{key:W,onClick:()=>{K(Y)}},z.createElement(Ug,{active:Y===V},Y))}else I[W]=z.createElement(Cl,{key:W})}),I},[$,K,b,A]);return z.createElement(Af,{className:n,ref:p,shadow:d,style:{margin:20}},z.createElement(gf,null,z.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),z.createElement(yf,null,z.createElement(fc,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(Xp,{options:Hg,value:b,onChange:S,width:128,menuMaxHeight:200}),z.createElement(Lp,{value:A,onChange:Q,width:100})),z.createElement(Rg,null,z.createElement(Bg,null,z.createElement(Cl,null,"S"),z.createElement(Cl,null,"M"),z.createElement(Cl,null,"T"),z.createElement(Cl,null,"W"),z.createElement(Cl,null,"T"),z.createElement(Cl,null,"F"),z.createElement(Cl,null,"S")),z.createElement(Ng,null,F)),z.createElement(fc,{noPadding:!0,style:{justifyContent:"space-between"}},z.createElement(wn,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),z.createElement(wn,{fullWidth:!0,onClick:f?Z:void 0,disabled:!f},"OK"))))});jg.displayName="DatePicker";const qg=n=>{switch(n){case"status":case"well":return et`
        ${Wt({style:"status"})}
      `;case"window":case"outside":return et`
        ${Wt({style:"window"})}
      `;case"field":return et`
        ${Wt({style:"field"})}
      `;default:return et`
        ${Wt()}
      `}},Yg=q.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>qg(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Gg=w.forwardRef(({children:n,shadow:c=!1,variant:f="window",...o},d)=>z.createElement(Yg,{ref:d,shadow:c,variant:f,...o},n));Gg.displayName="Frame";const kg=q.fieldset`
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
`,Xg=q.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,Vg=w.forwardRef(({label:n,disabled:c=!1,variant:f="default",children:o,...d},p)=>z.createElement(kg,{"aria-disabled":c,$disabled:c,variant:f,ref:p,...d},n&&z.createElement(Xg,{variant:f},n),o));Vg.displayName="GroupBox";const Zg=q.div`
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
`;Zg.displayName="Handle";const Kg="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Jg=q.div`
  display: inline-block;
  height: ${({size:n})=>na(n)};
  width: ${({size:n})=>na(n)};
`,Wg=q.span`
  display: block;
  background: ${Kg};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Fg=w.forwardRef(({size:n=30,...c},f)=>z.createElement(Jg,{size:n,ref:f,...c},z.createElement(Wg,null)));Fg.displayName="Hourglass";const Ig=q.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Pg=q.div`
  position: relative;
`,t1=q.div`
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
`,e1=q(ol).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,l1=q.div`
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
`,a1=w.forwardRef(({backgroundStyles:n,children:c,...f},o)=>z.createElement(Ig,{ref:o,...f},z.createElement(Pg,null,z.createElement(t1,null,z.createElement(e1,{style:n},c)),z.createElement(l1,null))));a1.displayName="Monitor";const n1=q.div`
  display: inline-block;
  height: ${pe.md};
  width: 100%;
`,u1=q(ol)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Vp=et`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,i1=q.div`
  position: relative;
  top: 4px;
  ${Vp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,c1=q.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Vp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,r1=q.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Zp=17,o1=q.span`
  display: inline-block;
  width: ${Zp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,f1=w.forwardRef(({hideValue:n=!1,shadow:c=!0,value:f,variant:o="default",...d},p)=>{const y=n?null:`${f}%`,O=w.useRef(null),[A,b]=w.useState([]),$=w.useCallback(()=>{if(!O.current||f===void 0)return;const S=O.current.getBoundingClientRect().width,Q=Math.round(f/100*S/Zp);b(Array.from({length:Q}))},[f]);return w.useEffect(()=>($(),window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)),[$]),z.createElement(n1,{"aria-valuenow":f!==void 0?Math.round(f):void 0,ref:p,role:"progressbar",variant:o,...d},z.createElement(u1,{variant:o,shadow:c},o==="default"?z.createElement(z.Fragment,null,z.createElement(i1,{"data-testid":"defaultProgress1"},y),z.createElement(c1,{"data-testid":"defaultProgress2",value:f},y)):z.createElement(r1,{ref:O,"data-testid":"tileProgress"},A.map((S,Q)=>z.createElement(o1,{key:Q})))))});f1.displayName="ProgressBar";const Kp=et`
  width: ${rl}px;
  height: ${rl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,s1=q(ol)`
  ${Kp}
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
`,d1=q.div`
  ${Ba()}
  ${Kp}
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
`,h1=q.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,p1={flat:d1,default:s1},m1=w.forwardRef(({checked:n,className:c="",disabled:f=!1,label:o="",onChange:d,style:p={},variant:y="default",...O},A)=>{const b=p1[y];return z.createElement(pf,{$disabled:f,className:c,style:p},z.createElement(b,{$disabled:f,role:"presentation"},n&&z.createElement(h1,{$disabled:f,variant:y})),z.createElement(oc,{disabled:f,onChange:f?void 0:d,readOnly:f,type:"radio",checked:n,ref:A,...O}),o&&z.createElement(mf,null,o))});m1.displayName="Radio";const v1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function Oa(n){const c=w.useRef(n);return v1(()=>{c.current=n}),w.useCallback((...f)=>(0,c.current)(...f),[])}function Zh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function Kh(n,c){return w.useMemo(()=>n==null&&c==null?null:f=>{Zh(n,f),Zh(c,f)},[n,c])}var b1=np();let yc=!0,lf=!1,Jh;const y1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function g1(n){if("type"in n){const{type:c,tagName:f}=n;if(f==="INPUT"&&y1[c]&&!n.readOnly||f==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function A1(n){n.metaKey||n.altKey||n.ctrlKey||(yc=!0)}function Yo(){yc=!1}function S1(){this.visibilityState==="hidden"&&lf&&(yc=!0)}function x1(n){n.addEventListener("keydown",A1,!0),n.addEventListener("mousedown",Yo,!0),n.addEventListener("pointerdown",Yo,!0),n.addEventListener("touchstart",Yo,!0),n.addEventListener("visibilitychange",S1,!0)}function E1(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return yc||g1(c)}function T1(){lf=!0,window.clearTimeout(Jh),Jh=window.setTimeout(()=>{lf=!1},100)}function z1(){const n=w.useCallback(c=>{const f=b1.findDOMNode(c);f!=null&&x1(f.ownerDocument)},[]);return{isFocusVisible:E1,onBlurVisible:T1,ref:n}}function D1(n,c,f){return(f-c)*n+c}function Ii(n,c){if(c!==void 0&&"changedTouches"in n){for(let f=0;f<n.changedTouches.length;f+=1){const o=n.changedTouches[f];if(o.identifier===c)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Pi(n){return n&&n.ownerDocument||document}function O1(n,c){var f;const{index:o}=(f=n.reduce((d,p,y)=>{const O=Math.abs(c-p);return d===null||O<d.distance||O===d.distance?{distance:O,index:y}:d},null))!==null&&f!==void 0?f:{};return o??-1}const C1=q.div`
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
`,Jp=()=>et`
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
`,M1=q(ol)`
  ${Jp()}
`,w1=q(ol)`
  ${Jp()}

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
`,_1=q.span`
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
          ${Ba()}
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
`,zn=6,R1=q.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?et`
          right: ${-zn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${zn}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:et`
          bottom: ${-zn}px;
          height: ${zn}px;
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
`,B1=q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?et`
          transform: translate(${zn+2}px, ${zn+1}px);
        `:et`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,N1=w.forwardRef(({defaultValue:n,disabled:c=!1,marks:f=!1,max:o=100,min:d=0,name:p,onChange:y,onChangeCommitted:O,onMouseDown:A,orientation:b="horizontal",size:$="100%",step:S=1,value:Q,variant:K="default",...Z},F)=>{const I=K==="flat"?w1:M1,k=b==="vertical",[V=d,N]=ua({defaultValue:n,onChange:y??O,value:Q}),{isFocusVisible:J,onBlurVisible:W,ref:Y}=z1(),[R,rt]=w.useState(!1),bt=w.useRef(),st=w.useRef(null),gt=Kh(Y,bt),ft=Kh(F,gt),Qt=Oa(U=>{J(U)&&rt(!0)}),Ct=Oa(()=>{R!==!1&&(rt(!1),W())}),Dt=w.useRef(),C=w.useMemo(()=>f===!0&&Number.isFinite(S)?[...Array(Math.round((o-d)/S)+1)].map((U,j)=>({label:void 0,value:d+S*j})):Array.isArray(f)?f:[],[f,o,d,S]),G=Oa(U=>{const j=(o-d)/10,P=C.map(Ot=>Ot.value),tt=P.indexOf(V);let at=0;switch(U.key){case"Home":at=d;break;case"End":at=o;break;case"PageUp":S&&(at=V+j);break;case"PageDown":S&&(at=V-j);break;case"ArrowRight":case"ArrowUp":S?at=V+S:at=P[tt+1]||P[P.length-1];break;case"ArrowLeft":case"ArrowDown":S?at=V-S:at=P[tt-1]||P[0];break;default:return}U.preventDefault(),S&&(at=kh(at,S,d)),at=Ma(at,d,o),N(at),rt(!0),y?.(at),O?.(at)}),X=w.useCallback(U=>{if(!bt.current)return 0;const j=bt.current.getBoundingClientRect();let P;k?P=(j.bottom-U.y)/j.height:P=(U.x-j.left)/j.width;let tt;if(tt=D1(P,d,o),S)tt=kh(tt,S,d);else{const at=C.map(L=>L.value),Ot=O1(at,tt);tt=at[Ot]}return tt=Ma(tt,d,o),tt},[C,o,d,S,k]),ut=Oa(U=>{var j;const P=Ii(U,Dt.current);if(!P)return;const tt=X(P);(j=st.current)===null||j===void 0||j.focus(),N(tt),rt(!0),y?.(tt)}),dt=Oa(U=>{const j=Ii(U,Dt.current);if(!j)return;const P=X(j);O?.(P),Dt.current=void 0;const tt=Pi(bt.current);tt.removeEventListener("mousemove",ut),tt.removeEventListener("mouseup",dt),tt.removeEventListener("touchmove",ut),tt.removeEventListener("touchend",dt)}),m=Oa(U=>{var j;A?.(U),U.preventDefault(),(j=st.current)===null||j===void 0||j.focus(),rt(!0);const P=Ii(U,Dt.current);if(P){const at=X(P);N(at),y?.(at)}const tt=Pi(bt.current);tt.addEventListener("mousemove",ut),tt.addEventListener("mouseup",dt)}),M=Oa(U=>{var j;U.preventDefault();const P=U.changedTouches[0];P!=null&&(Dt.current=P.identifier),(j=st.current)===null||j===void 0||j.focus(),rt(!0);const tt=Ii(U,Dt.current);if(tt){const Ot=X(tt);N(Ot),y?.(Ot)}const at=Pi(bt.current);at.addEventListener("touchmove",ut),at.addEventListener("touchend",dt)});return w.useEffect(()=>{const{current:U}=bt;U?.addEventListener("touchstart",M);const j=Pi(U);return()=>{U?.removeEventListener("touchstart",M),j.removeEventListener("mousemove",ut),j.removeEventListener("mouseup",dt),j.removeEventListener("touchmove",ut),j.removeEventListener("touchend",dt)}},[dt,ut,M]),z.createElement(C1,{$disabled:c,hasMarks:!!C.length,isFocused:R,onMouseDown:m,orientation:b,ref:ft,size:na($),...Z},z.createElement("input",{disabled:c,name:p,type:"hidden",value:V??0}),C&&C.map(U=>z.createElement(R1,{$disabled:c,"data-testid":"tick",key:U.value/(o-d)*100,orientation:b,style:{[k?"bottom":"left"]:`${(U.value-d)/(o-d)*100}%`}},U.label&&z.createElement(B1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},U.label))),z.createElement(I,{orientation:b,variant:K}),z.createElement(_1,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":b,"aria-valuemax":o,"aria-valuemin":d,"aria-valuenow":V,onBlur:Ct,onFocus:Qt,onKeyDown:G,orientation:b,ref:st,role:"slider",style:{[k?"bottom":"left"]:`${(k?-100:0)+100*(V-d)/(o-d)}%`},tabIndex:c?void 0:0,variant:K}))});N1.displayName="Slider";const U1=q.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${df};
  overflow-y: auto;
`,H1=w.forwardRef(function({children:c,...f},o){return z.createElement(U1,{ref:o,...f},c)});H1.displayName="TableBody";const $1=q.td`
  padding: 0 8px;
`,L1=w.forwardRef(function({children:c,...f},o){return z.createElement($1,{ref:o,...f},c)});L1.displayName="TableDataCell";const Q1=q.thead`
  display: table-header-group;
`,j1=w.forwardRef(function({children:c,...f},o){return z.createElement(Q1,{ref:o,...f},c)});j1.displayName="TableHead";const q1=q.th`
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
`,Y1=w.forwardRef(function({disabled:c=!1,children:f,onClick:o,onTouchStart:d=Na,sort:p,...y},O){const A=p==="asc"?"ascending":p==="desc"?"descending":void 0;return z.createElement(q1,{$disabled:c,"aria-disabled":c,"aria-sort":A,onClick:c?void 0:o,onTouchStart:c?void 0:d,ref:O,...y},z.createElement("div",null,f))});Y1.displayName="TableHeadCell";const G1=q.tr`
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
`,k1=w.forwardRef(function({children:c,...f},o){return z.createElement(G1,{ref:o,...f},c)});k1.displayName="TableRow";const X1=q.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,V1=q(ol)`
  &:before {
    box-shadow: none;
  }
`,Z1=w.forwardRef(({children:n,...c},f)=>z.createElement(V1,null,z.createElement(X1,{ref:f,...c},n)));Z1.displayName="Table";const K1=q.button`
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
    ${Mn}
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
`,J1=w.forwardRef(({value:n,onClick:c,selected:f=!1,children:o,...d},p)=>z.createElement(K1,{"aria-selected":f,selected:f,onClick:y=>c?.(n,y),ref:p,role:"tab",...d},o));J1.displayName="Tab";const W1=q.div`
  ${el()}
  ${Wt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,F1=w.forwardRef(({children:n,...c},f)=>z.createElement(W1,{ref:f,...c},n));F1.displayName="TabBody";const I1=q.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,P1=q.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function tA(n,c){const f=[];for(let o=c;o>0;o-=1)f.push(n.splice(0,Math.ceil(n.length/o)));return f}const eA=w.forwardRef(({value:n,onChange:c=Na,children:f,rows:o=1,...d},p)=>{const y=w.useMemo(()=>{var O;const A=(O=z.Children.map(f,S=>{if(!z.isValidElement(S))return null;const Q={selected:S.props.value===n,onClick:c};return z.cloneElement(S,Q)}))!==null&&O!==void 0?O:[],b=tA(A,o).map((S,Q)=>({key:Q,tabs:S})),$=b.findIndex(S=>S.tabs.some(Q=>Q.props.selected));return b.push(b.splice($,1)[0]),b},[f,c,o,n]);return z.createElement(I1,{...d,isMultiRow:o>1,role:"tablist",ref:p},y.map(O=>z.createElement(P1,{key:O.key},O.tabs)))});eA.displayName="Tabs";const lA=["blur","focus"],aA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Wh(n){return"nativeEvent"in n&&lA.includes(n.type)}function Fh(n){return"nativeEvent"in n&&aA.includes(n.type)}const nA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},uA=q.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${sf};
  text-align: center;
  font-size: 1rem;
  ${n=>nA[n.position]}
`,iA=q.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,cA=w.forwardRef(({className:n,children:c,disableFocusListener:f=!1,disableMouseListener:o=!1,enterDelay:d=1e3,leaveDelay:p=0,onBlur:y,onClose:O,onFocus:A,onMouseEnter:b,onMouseLeave:$,onOpen:S,style:Q,text:K,position:Z="top",...F},I)=>{const[k,V]=w.useState(!1),[N,J]=w.useState(),[W,Y]=w.useState(),R=!f,rt=!o,bt=X=>{window.clearTimeout(N),window.clearTimeout(W);const ut=window.setTimeout(()=>{V(!0),S?.(X)},d);J(ut)},st=X=>{X.persist(),Wh(X)?A?.(X):Fh(X)&&b?.(X),bt(X)},gt=X=>{window.clearTimeout(N),window.clearTimeout(W);const ut=window.setTimeout(()=>{V(!1),O?.(X)},p);Y(ut)},ft=X=>{X.persist(),Wh(X)?y?.(X):Fh(X)&&$?.(X),gt(X)},Qt=R?ft:void 0,Ct=R?st:void 0,Dt=rt?st:void 0,C=rt?ft:void 0,G=R?0:void 0;return z.createElement(iA,{"data-testid":"tooltip-wrapper",onBlur:Qt,onFocus:Ct,onMouseEnter:Dt,onMouseLeave:C,tabIndex:G},z.createElement(uA,{className:n,"data-testid":"tooltip",position:Z,ref:I,show:k,style:Q,...F},K),c)});cA.displayName="Tooltip";const af=q(mf)`
  white-space: nowrap;
`,Wp=et`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":et`
          cursor: pointer;

          :focus {
            ${af} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,rA=q.ul`
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
`,oA=q.li`
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
`,fA=q.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,sA=q.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Wp};

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
`,Ih=q(pf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Wp};
`,dA=q.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Ph(n,c){return n.includes(c)?n.filter(f=>f!==c):[...n,c]}function tp(n){n.preventDefault()}function Fp({className:n,disabled:c,expanded:f,innerRef:o,level:d,select:p,selected:y,style:O,tree:A=[]}){const b=d===0,$=w.useCallback(S=>{var Q,K;const Z=!!(S.items&&S.items.length>0),F=f.includes(S.id),I=(Q=c||S.disabled)!==null&&Q!==void 0?Q:!1,k=I?tp:W=>p(W,S),V=I?tp:W=>p(W,S),N=y===S.id,J=z.createElement(dA,{"aria-hidden":!0},S.icon);return z.createElement(oA,{key:S.label,isRootLevel:b,role:"treeitem","aria-expanded":F,"aria-selected":N,hasItems:Z},Z?z.createElement(fA,{open:F},z.createElement(sA,{onClick:k,$disabled:I},z.createElement(Ih,{$disabled:I},J,z.createElement(af,null,S.label))),F&&z.createElement(Fp,{className:n,disabled:I,expanded:f,level:d+1,select:p,selected:y,style:O,tree:(K=S.items)!==null&&K!==void 0?K:[]})):z.createElement(Ih,{as:"button",$disabled:I,onClick:V},J,z.createElement(af,null,S.label)))},[n,c,f,b,d,p,y,O]);return z.createElement(rA,{className:b?n:void 0,style:b?O:void 0,ref:b?o:void 0,role:b?"tree":"group",isRootLevel:b},A.map($))}function hA({className:n,defaultExpanded:c=[],defaultSelected:f,disabled:o=!1,expanded:d,onNodeSelect:p,onNodeToggle:y,selected:O,style:A,tree:b=[]},$){const[S,Q]=ua({defaultValue:c,onChange:y,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[K,Z]=ua({defaultValue:f,onChange:p,onChangePropName:"onNodeSelect",value:O,valuePropName:"selected"}),F=w.useCallback((V,N)=>{if(y){const J=Ph(S,N);y(V,J)}Q(J=>Ph(J,N))},[S,y,Q]),I=w.useCallback((V,N)=>{Z(N),p&&p(V,N)},[p,Z]),k=w.useCallback((V,N)=>{V.preventDefault(),I(V,N.id),N.items&&N.items.length&&F(V,N.id)},[I,F]);return z.createElement(Fp,{className:n,disabled:o,expanded:S,level:0,innerRef:$,select:k,selected:K,style:A,tree:b})}const pA=w.forwardRef(hA);pA.displayName="TreeView";const ep=vf,mA=_p,Go=wp;var ko,lp;function vA(){if(lp)return ko;lp=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return ko=n,ko}var bA=vA();const yA=ap(bA),gA=My`
  ${wy}
  body {
    /* 使用像素化字体或系统默认无衬线字体 */
    font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif; 
    background-color: teal; /* 经典的 Windows 95 蓝绿色背景 */
    overflow: hidden; /* 禁止页面滚动，模拟桌面 */
  }
`;function AA(){const[n,c]=w.useState(!1),[f,o]=w.useState(null),d=[{id:1,title:"你好，世界.txt",content:"这是我的第一篇博客，欢迎来到我的 1995 年！"},{id:2,title:"关于我.doc",content:"我是一个全栈开发者，喜欢复古美学。"},{id:3,title:"项目清单.xls",content:`1. 复古博客
2. AI 聊天机器人`}];return Lt.jsxs(Lt.Fragment,{children:[Lt.jsx(gA,{}),Lt.jsxs(Dy,{theme:yA,children:[Lt.jsxs("div",{style:{height:"calc(100vh - 50px)",padding:"20px",position:"relative"},children:[f&&Lt.jsxs(Af,{style:{width:400,position:"absolute",top:"20%",left:"30%",zIndex:10},className:"window",children:[Lt.jsxs(gf,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Lt.jsx("span",{children:f.title}),Lt.jsx(wn,{onClick:()=>o(null),size:"sm",square:!0,children:Lt.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"x"})})]}),Lt.jsx(yf,{children:Lt.jsx("p",{children:f.content})})]}),Lt.jsxs("div",{style:{textAlign:"center",width:80,cursor:"pointer"},onClick:()=>o(d[1]),children:[Lt.jsx("span",{style:{fontSize:"40px"},children:"💻"}),Lt.jsx("p",{style:{color:"white",textShadow:"1px 1px black",marginTop:"5px"},children:"我的电脑"})]})]}),Lt.jsx(Mp,{position:"fixed",style:{top:"auto",bottom:0,zIndex:999},children:Lt.jsxs(fc,{style:{justifyContent:"space-between"},children:[Lt.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[Lt.jsxs(wn,{onClick:()=>c(!n),active:n,style:{fontWeight:"bold"},children:[Lt.jsx("span",{role:"img","aria-label":"start",style:{marginRight:4},children:"🏁"}),"Start"]}),n&&Lt.jsxs(mA,{style:{position:"absolute",left:"0",bottom:"100%"},onClick:()=>c(!1),children:[Lt.jsx(Go,{disabled:!0,children:"👨‍💻 个人主页 v1.0"}),Lt.jsx(ep,{}),d.map(p=>Lt.jsxs(Go,{onClick:()=>o(p),children:["📄 ",p.title]},p.id)),Lt.jsx(ep,{}),Lt.jsx(Go,{children:"🚪 关机 (Shut Down)"})]})]}),Lt.jsx("div",{style:{paddingRight:"10px"},children:new Date().toLocaleTimeString()})]})})]})]})}Db.createRoot(document.getElementById("root")).render(Lt.jsx(w.StrictMode,{children:Lt.jsx(AA,{})}));
