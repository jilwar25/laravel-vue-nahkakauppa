(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function cl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const xe={},Zr=[],Ut=()=>{},ry=()=>!1,Go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ll=t=>t.startsWith("onUpdate:"),Je=Object.assign,ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sy=Object.prototype.hasOwnProperty,Ee=(t,e)=>sy.call(t,e),oe=Array.isArray,es=t=>wi(t)==="[object Map]",Wo=t=>wi(t)==="[object Set]",gh=t=>wi(t)==="[object Date]",ue=t=>typeof t=="function",ze=t=>typeof t=="string",cn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",$f=t=>(Ne(t)||ue(t))&&ue(t.then)&&ue(t.catch),Bf=Object.prototype.toString,wi=t=>Bf.call(t),iy=t=>wi(t).slice(8,-1),jf=t=>wi(t)==="[object Object]",hl=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oy=/-(\w)/g,Kt=Qo(t=>t.replace(oy,(e,n)=>n?n.toUpperCase():"")),ay=/\B([A-Z])/g,Vr=Qo(t=>t.replace(ay,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),za=Qo(t=>t?`on${Jo(t)}`:""),Yn=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hf=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let mh;const Kf=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?dy(r):dl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ne(t))return t}const ly=/;(?![^(]*\))/g,uy=/:([^]+)/,hy=/\/\*[^]*?\*\//g;function dy(t){const e={};return t.replace(hy,"").split(ly).forEach(n=>{if(n){const r=n.split(uy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fl(t){let e="";if(ze(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=fl(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",py=cl(fy);function zf(t){return!!t||t===""}function gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Yo(t[r],e[r]);return n}function Yo(t,e){if(t===e)return!0;let n=gh(t),r=gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=cn(t),r=cn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?gy(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Yo(t[o],e[o]))return!1}}return String(t)===String(e)}function my(t,e){return t.findIndex(n=>Yo(n,e))}const Gf=t=>!!(t&&t.__v_isRef===!0),Ve=t=>ze(t)?t:t==null?"":oe(t)||Ne(t)&&(t.toString===Bf||!ue(t.toString))?Gf(t)?Ve(t.value):JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>Gf(e)?Wf(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ga(r,i)+" =>"]=s,n),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ga(n))}:cn(e)?Ga(e):Ne(e)&&!oe(e)&&!jf(e)?String(e):e,Ga=(t,e="")=>{var n;return cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class _y{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yy(t,e=qt){e&&e.active&&e.effects.push(t)}function vy(){return qt}let vr;class pl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,yy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,rr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ey(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),sr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Kn,n=vr;try{return Kn=!0,vr=this,this._runnings++,_h(this),this.fn()}finally{yh(this),this._runnings--,vr=n,Kn=e}}stop(){this.active&&(_h(this),yh(this),this.onStop&&this.onStop(),this.active=!1)}}function Ey(t){return t.value}function _h(t){t._trackId++,t._depsLength=0}function yh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Qf(t.deps[e],t);t.deps.length=t._depsLength}}function Qf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Kn=!0,Ec=0;const Jf=[];function rr(){Jf.push(Kn),Kn=!1}function sr(){const t=Jf.pop();Kn=t===void 0?!0:t}function gl(){Ec++}function ml(){for(Ec--;!Ec&&wc.length;)wc.shift()()}function Yf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Qf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wc=[];function Xf(t,e,n){gl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&wc.push(r.scheduler)))}ml()}const Zf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Tc=new WeakMap,Er=Symbol(""),Ic=Symbol("");function It(t,e,n){if(Kn&&vr){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Zf(()=>r.delete(n))),Yf(vr,s)}}function vn(t,e,n,r,s,i){const o=Tc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&oe(t)){const l=Number(r);o.forEach((h,d)=>{(d==="length"||!cn(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":oe(t)?hl(n)&&c.push(o.get("length")):(c.push(o.get(Er)),es(t)&&c.push(o.get(Ic)));break;case"delete":oe(t)||(c.push(o.get(Er)),es(t)&&c.push(o.get(Ic)));break;case"set":es(t)&&c.push(o.get(Er));break}gl();for(const l of c)l&&Xf(l,4);ml()}const wy=cl("__proto__,__v_isRef,__isVue"),ep=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cn)),vh=Ty();function Ty(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)It(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rr(),gl();const r=Ie(this)[e].apply(this,n);return ml(),sr(),r}}),t}function Iy(t){cn(t)||(t=String(t));const e=Ie(this);return It(e,"has",t),e.hasOwnProperty(t)}class tp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ly:ip:i?sp:rp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){if(o&&Ee(vh,n))return Reflect.get(vh,n,r);if(n==="hasOwnProperty")return Iy}const c=Reflect.get(e,n,r);return(cn(n)?ep.has(n):wy(n))||(s||It(e,"get",n),i)?c:At(c)?o&&hl(n)?c:c.value:Ne(c)?s?ap(c):Ti(c):c}}class np extends tp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Rr(i);if(!as(r)&&!Rr(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&At(i)&&!At(r))return l?!1:(i.value=r,!0)}const o=oe(e)&&hl(n)?Number(n)<e.length:Ee(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?Yn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cn(n)||!ep.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",oe(e)?"length":Er),Reflect.ownKeys(e)}}class Ay extends tp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const by=new np,Ry=new Ay,Sy=new np(!0);const _l=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(Yn(e,i)&&It(s,"get",e),It(s,"get",i));const{has:o}=Xo(s),c=r?_l:n?El:ii;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Xi(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(Yn(t,s)&&It(r,"has",t),It(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zi(t,e=!1){return t=t.__v_raw,!e&&It(Ie(t),"iterate",Er),Reflect.get(t,"size",t)}function Eh(t,e=!1){!e&&!as(t)&&!Rr(t)&&(t=Ie(t));const n=Ie(this);return Xo(n).has.call(n,t)||(n.add(t),vn(n,"add",t,t)),this}function wh(t,e,n=!1){!n&&!as(e)&&!Rr(e)&&(e=Ie(e));const r=Ie(this),{has:s,get:i}=Xo(r);let o=s.call(r,t);o||(t=Ie(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Yn(e,c)&&vn(r,"set",t,e):vn(r,"add",t,e),this}function Th(t){const e=Ie(this),{has:n,get:r}=Xo(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&vn(e,"delete",t,void 0),i}function Ih(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function eo(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?_l:t?El:ii;return!t&&It(c,"iterate",Er),o.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function to(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?_l:e?El:ii;return!e&&It(i,"iterate",l?Ic:Er),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cy(){const t={get(i){return Yi(this,i)},get size(){return Zi(this)},has:Xi,add:Eh,set:wh,delete:Th,clear:Ih,forEach:eo(!1,!1)},e={get(i){return Yi(this,i,!1,!0)},get size(){return Zi(this)},has:Xi,add(i){return Eh.call(this,i,!0)},set(i,o){return wh.call(this,i,o,!0)},delete:Th,clear:Ih,forEach:eo(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return Zi(this,!0)},has(i){return Xi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:eo(!0,!1)},r={get(i){return Yi(this,i,!0,!0)},get size(){return Zi(this,!0)},has(i){return Xi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=to(i,!1,!1),n[i]=to(i,!0,!1),e[i]=to(i,!1,!0),r[i]=to(i,!0,!0)}),[t,n,e,r]}const[Py,ky,Oy,Ny]=Cy();function yl(t,e){const n=e?t?Ny:Oy:t?ky:Py;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const Dy={get:yl(!1,!1)},xy={get:yl(!1,!0)},Vy={get:yl(!0,!1)};const rp=new WeakMap,sp=new WeakMap,ip=new WeakMap,Ly=new WeakMap;function My(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:My(iy(t))}function Ti(t){return Rr(t)?t:vl(t,!1,by,Dy,rp)}function op(t){return vl(t,!1,Sy,xy,sp)}function ap(t){return vl(t,!0,Ry,Vy,ip)}function vl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ws(t){return Rr(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function as(t){return!!(t&&t.__v_isShallow)}function cp(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Fy(t){return Object.isExtensible(t)&&qf(t,"__v_skip",!0),t}const ii=t=>Ne(t)?Ti(t):t,El=t=>Ne(t)?ap(t):t;class lp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new pl(()=>e(this._value),()=>fo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&Yn(e._value,e._value=e.effect.run())&&fo(e,4),up(e),e.effect._dirtyLevel>=2&&fo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $y(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new lp(r,s,i||!s,n)}function up(t){var e;Kn&&vr&&(t=Ie(t),Yf(vr,(e=t.dep)!=null?e:t.dep=Zf(()=>t.dep=void 0,t instanceof lp?t:void 0)))}function fo(t,e=4,n,r){t=Ie(t);const s=t.dep;s&&Xf(s,e)}function At(t){return!!(t&&t.__v_isRef===!0)}function ut(t){return hp(t,!1)}function By(t){return hp(t,!0)}function hp(t,e){return At(t)?t:new jy(t,e)}class jy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ii(e)}get value(){return up(this),this._value}set value(e){const n=this.__v_isShallow||as(e)||Rr(e);e=n?e:Ie(e),Yn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ii(e),fo(this,4))}}function Mt(t){return At(t)?t.value:t}const qy={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dp(t){return Ws(t)?t:new Proxy(t,qy)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function Ft(t,e,n,r){if(ue(t)){const s=zn(t,e,n,r);return s&&$f(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){rr(),zn(l,null,10,[t,o,c]),sr();return}}Hy(t,n,s,r)}function Hy(t,e,n,r=!0){console.error(t)}let oi=!1,Ac=!1;const dt=[];let Xt=0;const ts=[];let xn=null,mr=0;const fp=Promise.resolve();let wl=null;function Tl(t){const e=wl||fp;return t?e.then(this?t.bind(this):t):e}function Ky(t){let e=Xt+1,n=dt.length;for(;e<n;){const r=e+n>>>1,s=dt[r],i=ai(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Il(t){(!dt.length||!dt.includes(t,oi&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?dt.push(t):dt.splice(Ky(t.id),0,t),pp())}function pp(){!oi&&!Ac&&(Ac=!0,wl=fp.then(mp))}function zy(t){const e=dt.indexOf(t);e>Xt&&dt.splice(e,1)}function Gy(t){oe(t)?ts.push(...t):(!xn||!xn.includes(t,t.allowRecurse?mr+1:mr))&&ts.push(t),pp()}function Ah(t,e,n=oi?Xt+1:0){for(;n<dt.length;n++){const r=dt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;dt.splice(n,1),n--,r()}}}function gp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>ai(n)-ai(r));if(ts.length=0,xn){xn.push(...e);return}for(xn=e,mr=0;mr<xn.length;mr++){const n=xn[mr];n.active!==!1&&n()}xn=null,mr=0}}const ai=t=>t.id==null?1/0:t.id,Wy=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mp(t){Ac=!1,oi=!0,dt.sort(Wy);try{for(Xt=0;Xt<dt.length;Xt++){const e=dt[Xt];e&&e.active!==!1&&zn(e,e.i,e.i?15:14)}}finally{Xt=0,dt.length=0,gp(),oi=!1,wl=null,(dt.length||ts.length)&&mp()}}let wt=null,ea=null;function Ro(t){const e=wt;return wt=t,ea=t&&t.type.__scopeId||null,e}function Ii(t){ea=t}function Ai(){ea=null}function Al(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vh(-1);const i=Ro(e);let o;try{o=t(...s)}finally{Ro(i),r._d&&Vh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bh(t,e){if(wt===null)return t;const n=oa(wt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Un(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(rr(),Ft(l,n,8,[t.el,c,t,e]),sr())}}const Vn=Symbol("_leaveCb"),no=Symbol("_enterCb");function Qy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{t.isMounted=!0}),Ip(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],_p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},yp=t=>{const e=t.subTree;return e.component?yp(e.component):e},Jy={name:"BaseTransition",props:_p,setup(t,{slots:e}){const n=Jv(),r=Qy();return()=>{const s=e.default&&Ep(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==Pt){i=m;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return Wa(i);const l=Rh(i);if(!l)return Wa(i);let h=bc(l,o,r,n,m=>h=m);So(l,h);const d=n.subTree,p=d&&Rh(d);if(p&&p.type!==Pt&&!_r(l,p)&&yp(n).type!==Pt){const m=bc(p,o,r,n);if(So(p,m),c==="out-in"&&l.type!==Pt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Wa(i);c==="in-out"&&l.type!==Pt&&(m.delayLeave=(_,C,P)=>{const O=vp(r,p);O[String(p.key)]=p,_[Vn]=()=>{C(),_[Vn]=void 0,delete h.delayedLeave},h.delayedLeave=P})}return i}}},Yy=Jy;function vp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bc(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:O,onAppear:B,onAfterAppear:$,onAppearCancelled:L}=e,J=String(t.key),le=vp(n,t),z=(v,I)=>{v&&Ft(v,r,9,I)},b=(v,I)=>{const R=I[1];z(v,I),oe(v)?v.every(A=>A.length<=1)&&R():v.length<=1&&R()},E={mode:o,persisted:c,beforeEnter(v){let I=l;if(!n.isMounted)if(i)I=O||l;else return;v[Vn]&&v[Vn](!0);const R=le[J];R&&_r(t,R)&&R.el[Vn]&&R.el[Vn](),z(I,[v])},enter(v){let I=h,R=d,A=p;if(!n.isMounted)if(i)I=B||h,R=$||d,A=L||p;else return;let w=!1;const Ce=v[no]=Ze=>{w||(w=!0,Ze?z(A,[v]):z(R,[v]),E.delayedLeave&&E.delayedLeave(),v[no]=void 0)};I?b(I,[v,Ce]):Ce()},leave(v,I){const R=String(t.key);if(v[no]&&v[no](!0),n.isUnmounting)return I();z(m,[v]);let A=!1;const w=v[Vn]=Ce=>{A||(A=!0,I(),Ce?z(P,[v]):z(C,[v]),v[Vn]=void 0,le[R]===t&&delete le[R])};le[R]=t,_?b(_,[v,w]):w()},clone(v){const I=bc(v,e,n,r,s);return s&&s(I),I}};return E}function Wa(t){if(ta(t))return t=Xn(t),t.children=null,t}function Rh(t){if(!ta(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function So(t,e){t.shapeFlag&6&&t.component?So(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ep(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_t?(o.patchFlag&128&&s++,r=r.concat(Ep(o.children,e,c))):(e||o.type!==Pt)&&r.push(c!=null?Xn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wp(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}const po=t=>!!t.type.__asyncLoader,ta=t=>t.type.__isKeepAlive;function Xy(t,e){Tp(t,"a",e)}function Zy(t,e){Tp(t,"da",e)}function Tp(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ta(s.parent.vnode)&&ev(r,e,n,s),s=s.parent}}function ev(t,e,n,r){const s=na(e,t,r,!0);Ap(()=>{ul(r[e],s)},n)}function na(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rr();const c=Ri(n),l=Ft(e,n,t,o);return c(),sr(),l});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=nt)=>{(!ia||t==="sp")&&na(t,(...r)=>e(...r),n)},tv=In("bm"),bi=In("m"),nv=In("bu"),rv=In("u"),Ip=In("bum"),Ap=In("um"),sv=In("sp"),iv=In("rtg"),ov=In("rtc");function av(t,e=nt){na("ec",t,e)}const cv="components";function bl(t,e){return uv(cv,t,!0,e)||t}const lv=Symbol.for("v-ndc");function uv(t,e,n=!0,r=!1){const s=wt||nt;if(s){const i=s.type;{const c=tE(i,!1);if(c&&(c===e||c===Kt(e)||c===Jo(Kt(e))))return i}const o=Sh(s[t]||i[t],e)||Sh(s.appContext[t],e);return!o&&r?i:o}}function Sh(t,e){return t&&(t[e]||t[Kt(e)]||t[Jo(Kt(e))])}function ci(t,e,n,r){let s;const i=n;if(oe(t)||ze(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const Rc=t=>t?Hp(t)?oa(t):Rc(t.parent):null,Qs=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rc(t.parent),$root:t=>Rc(t.root),$emit:t=>t.emit,$options:t=>Rl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Il(t.update)}),$nextTick:t=>t.n||(t.n=Tl.bind(t.proxy)),$watch:t=>Dv.bind(t)}),Qa=(t,e)=>t!==xe&&!t.__isScriptSetup&&Ee(t,e),hv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qa(r,e))return o[e]=1,r[e];if(s!==xe&&Ee(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return o[e]=3,i[e];if(n!==xe&&Ee(n,e))return o[e]=4,n[e];Sc&&(o[e]=0)}}const d=Qs[e];let p,m;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Ee(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ee(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qa(s,e)?(s[e]=n,!0):r!==xe&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==xe&&Ee(t,o)||Qa(e,o)||(c=i[0])&&Ee(c,o)||Ee(r,o)||Ee(Qs,o)||Ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ch(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sc=!0;function dv(t){const e=Rl(t),n=t.proxy,r=t.ctx;Sc=!1,e.beforeCreate&&Ph(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:P,deactivated:O,beforeDestroy:B,beforeUnmount:$,destroyed:L,unmounted:J,render:le,renderTracked:z,renderTriggered:b,errorCaptured:E,serverPrefetch:v,expose:I,inheritAttrs:R,components:A,directives:w,filters:Ce}=e;if(h&&fv(h,r,null),o)for(const ge in o){const fe=o[ge];ue(fe)&&(r[ge]=fe.bind(n))}if(s){const ge=s.call(n,n);Ne(ge)&&(t.data=Ti(ge))}if(Sc=!0,i)for(const ge in i){const fe=i[ge],Rt=ue(fe)?fe.bind(n,n):ue(fe.get)?fe.get.bind(n,n):Ut,Bt=!ue(fe)&&ue(fe.set)?fe.set.bind(n):Ut,Dt=kt({get:Rt,set:Bt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Ue=>Dt.value=Ue})}if(c)for(const ge in c)bp(c[ge],r,n,ge);if(l){const ge=ue(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(fe=>{go(fe,ge[fe])})}d&&Ph(d,t,"c");function Me(ge,fe){oe(fe)?fe.forEach(Rt=>ge(Rt.bind(n))):fe&&ge(fe.bind(n))}if(Me(tv,p),Me(bi,m),Me(nv,_),Me(rv,C),Me(Xy,P),Me(Zy,O),Me(av,E),Me(ov,z),Me(iv,b),Me(Ip,$),Me(Ap,J),Me(sv,v),oe(I))if(I.length){const ge=t.exposed||(t.exposed={});I.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>n[fe],set:Rt=>n[fe]=Rt})})}else t.exposed||(t.exposed={});le&&t.render===Ut&&(t.render=le),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),w&&(t.directives=w)}function fv(t,e,n=Ut){oe(t)&&(t=Cc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),At(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ph(t,e,n){Ft(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bp(t,e,n,r){const s=r.includes(".")?Fp(n,r):()=>n[r];if(ze(t)){const i=e[t];ue(i)&&wr(s,i)}else if(ue(t))wr(s,t.bind(n));else if(Ne(t))if(oe(t))t.forEach(i=>bp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&wr(s,i,t)}}function Rl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Co(l,h,o,!0)),Co(l,e,o)),Ne(e)&&i.set(e,l),l}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=pv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const pv={data:kh,props:Oh,emits:Oh,methods:$s,computed:$s,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:$s,directives:$s,watch:mv,provide:kh,inject:gv};function kh(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function gv(t,e){return $s(Cc(t),Cc(e))}function Cc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?Je(Object.create(null),t,e):e}function Oh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Je(Object.create(null),Ch(t),Ch(e??{})):e}function mv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Rp(){return{app:null,config:{isNativeTag:ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function yv(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!Ne(s)&&(s=null);const i=Rp(),o=new WeakSet;let c=!1;const l=i.app={_uid:_v++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rE,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&ue(h.install)?(o.add(h),h.install(l,...d)):ue(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const m=Qe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),c=!0,l._container=h,h.__vue_app__=l,oa(m.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=Js;Js=l;try{return h()}finally{Js=d}}};return l}}let Js=null;function go(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=nt||wt;if(r||Js){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Js._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Sp={},Cp=()=>Object.create(Sp),Pp=t=>Object.getPrototypeOf(t)===Sp;function vv(t,e,n,r=!1){const s={},i=Cp();t.propsDefaults=Object.create(null),kp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:op(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ev(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ra(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ee(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const C=Kt(m);s[C]=Pc(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{kp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Vr(p))===p||!Ee(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Pc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&vn(t.attrs,"set","")}function kp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Gs(l))continue;const h=e[l];let d;s&&Ee(s,d=Kt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ra(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ie(n),h=c||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Pc(s,l,p,h[p],t,!Ee(h,p))}}return o}function Pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ee(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ri(s);r=h[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}const wv=new WeakMap;function Op(t,e,n=!1){const r=n?wv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const d=p=>{l=!0;const[m,_]=Op(p,e,!0);Je(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ne(t)&&r.set(t,Zr),Zr;if(oe(i))for(let d=0;d<i.length;d++){const p=Kt(i[d]);Nh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=Kt(d);if(Nh(p)){const m=i[d],_=o[p]=oe(m)||ue(m)?{type:m}:Je({},m),C=_.type;let P=!1,O=!0;if(oe(C))for(let B=0;B<C.length;++B){const $=C[B],L=ue($)&&$.name;if(L==="Boolean"){P=!0;break}else L==="String"&&(O=!1)}else P=ue(C)&&C.name==="Boolean";_[0]=P,_[1]=O,(P||Ee(_,"default"))&&c.push(p)}}const h=[o,c];return Ne(t)&&r.set(t,h),h}function Nh(t){return t[0]!=="$"&&!Gs(t)}const Np=t=>t[0]==="_"||t==="$stable",Sl=t=>oe(t)?t.map(Yt):[Yt(t)],Tv=(t,e,n)=>{if(e._n)return e;const r=Al((...s)=>Sl(e(...s)),n);return r._c=!1,r},Dp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Np(s))continue;const i=t[s];if(ue(i))e[s]=Tv(s,i,r);else if(i!=null){const o=Sl(i);e[s]=()=>o}}},xp=(t,e)=>{const n=Sl(e);t.slots.default=()=>n},Vp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Iv=(t,e,n)=>{const r=t.slots=Cp();if(t.vnode.shapeFlag&32){const s=e._;s?(Vp(r,e,n),n&&qf(r,"_",s,!0)):Dp(e,r)}else e&&xp(t,e)},Av=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Vp(s,e,n):(i=!e.$stable,Dp(e,s)),o=e}else e&&(xp(t,e),o={default:1});if(i)for(const c in s)!Np(c)&&o[c]==null&&delete s[c]};function kc(t,e,n,r,s=!1){if(oe(t)){t.forEach((m,_)=>kc(m,e&&(oe(e)?e[_]:e),n,r,s));return}if(po(r)&&!s)return;const i=r.shapeFlag&4?oa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===xe?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(ze(h)?(d[h]=null,Ee(p,h)&&(p[h]=null)):At(h)&&(h.value=null)),ue(l))zn(l,c,12,[o,d]);else{const m=ze(l),_=At(l);if(m||_){const C=()=>{if(t.f){const P=m?Ee(p,l)?p[l]:d[l]:l.value;s?oe(P)&&ul(P,i):oe(P)?P.includes(i)||P.push(i):m?(d[l]=[i],Ee(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else m?(d[l]=o,Ee(p,l)&&(p[l]=o)):_&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,Et(C,n)):C()}}}const bv=Symbol("_vte"),Rv=t=>t.__isTeleport,Et=Bv;function Sv(t){return Cv(t)}function Cv(t,e){const n=Kf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Ut,insertStaticContent:C}=t,P=(y,T,k,V=null,D=null,F=null,G=void 0,j=null,K=!!T.dynamicChildren)=>{if(y===T)return;y&&!_r(y,T)&&(V=x(y),Ue(y,D,F,!0),y=null),T.patchFlag===-2&&(K=!1,T.dynamicChildren=null);const{type:U,ref:Q,shapeFlag:re}=T;switch(U){case sa:O(y,T,k,V);break;case Pt:B(y,T,k,V);break;case Xa:y==null&&$(T,k,V,G);break;case _t:A(y,T,k,V,D,F,G,j,K);break;default:re&1?le(y,T,k,V,D,F,G,j,K):re&6?w(y,T,k,V,D,F,G,j,K):(re&64||re&128)&&U.process(y,T,k,V,D,F,G,j,K,X)}Q!=null&&D&&kc(Q,y&&y.ref,F,T||y,!T)},O=(y,T,k,V)=>{if(y==null)r(T.el=c(T.children),k,V);else{const D=T.el=y.el;T.children!==y.children&&h(D,T.children)}},B=(y,T,k,V)=>{y==null?r(T.el=l(T.children||""),k,V):T.el=y.el},$=(y,T,k,V)=>{[y.el,y.anchor]=C(y.children,T,k,V,y.el,y.anchor)},L=({el:y,anchor:T},k,V)=>{let D;for(;y&&y!==T;)D=m(y),r(y,k,V),y=D;r(T,k,V)},J=({el:y,anchor:T})=>{let k;for(;y&&y!==T;)k=m(y),s(y),y=k;s(T)},le=(y,T,k,V,D,F,G,j,K)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),y==null?z(T,k,V,D,F,G,j,K):v(y,T,D,F,G,j,K)},z=(y,T,k,V,D,F,G,j)=>{let K,U;const{props:Q,shapeFlag:re,transition:te,dirs:ee}=y;if(K=y.el=o(y.type,F,Q&&Q.is,Q),re&8?d(K,y.children):re&16&&E(y.children,K,null,V,D,Ja(y,F),G,j),ee&&hr(y,null,V,"created"),b(K,y,y.scopeId,G,V),Q){for(const Ae in Q)Ae!=="value"&&!Gs(Ae)&&i(K,Ae,null,Q[Ae],F,V);"value"in Q&&i(K,"value",null,Q.value,F),(U=Q.onVnodeBeforeMount)&&Jt(U,V,y)}ee&&hr(y,null,V,"beforeMount");const ie=Pv(D,te);ie&&te.beforeEnter(K),r(K,T,k),((U=Q&&Q.onVnodeMounted)||ie||ee)&&Et(()=>{U&&Jt(U,V,y),ie&&te.enter(K),ee&&hr(y,null,V,"mounted")},D)},b=(y,T,k,V,D)=>{if(k&&_(y,k),V)for(let F=0;F<V.length;F++)_(y,V[F]);if(D){let F=D.subTree;if(T===F){const G=D.vnode;b(y,G,G.scopeId,G.slotScopeIds,D.parent)}}},E=(y,T,k,V,D,F,G,j,K=0)=>{for(let U=K;U<y.length;U++){const Q=y[U]=j?Ln(y[U]):Yt(y[U]);P(null,Q,T,k,V,D,F,G,j)}},v=(y,T,k,V,D,F,G)=>{const j=T.el=y.el;let{patchFlag:K,dynamicChildren:U,dirs:Q}=T;K|=y.patchFlag&16;const re=y.props||xe,te=T.props||xe;let ee;if(k&&dr(k,!1),(ee=te.onVnodeBeforeUpdate)&&Jt(ee,k,T,y),Q&&hr(T,y,k,"beforeUpdate"),k&&dr(k,!0),(re.innerHTML&&te.innerHTML==null||re.textContent&&te.textContent==null)&&d(j,""),U?I(y.dynamicChildren,U,j,k,V,Ja(T,D),F):G||fe(y,T,j,null,k,V,Ja(T,D),F,!1),K>0){if(K&16)R(j,re,te,k,D);else if(K&2&&re.class!==te.class&&i(j,"class",null,te.class,D),K&4&&i(j,"style",re.style,te.style,D),K&8){const ie=T.dynamicProps;for(let Ae=0;Ae<ie.length;Ae++){const ve=ie[Ae],Be=re[ve],St=te[ve];(St!==Be||ve==="value")&&i(j,ve,Be,St,D,k)}}K&1&&y.children!==T.children&&d(j,T.children)}else!G&&U==null&&R(j,re,te,k,D);((ee=te.onVnodeUpdated)||Q)&&Et(()=>{ee&&Jt(ee,k,T,y),Q&&hr(T,y,k,"updated")},V)},I=(y,T,k,V,D,F,G)=>{for(let j=0;j<T.length;j++){const K=y[j],U=T[j],Q=K.el&&(K.type===_t||!_r(K,U)||K.shapeFlag&70)?p(K.el):k;P(K,U,Q,null,V,D,F,G,!0)}},R=(y,T,k,V,D)=>{if(T!==k){if(T!==xe)for(const F in T)!Gs(F)&&!(F in k)&&i(y,F,T[F],null,D,V);for(const F in k){if(Gs(F))continue;const G=k[F],j=T[F];G!==j&&F!=="value"&&i(y,F,j,G,D,V)}"value"in k&&i(y,"value",T.value,k.value,D)}},A=(y,T,k,V,D,F,G,j,K)=>{const U=T.el=y?y.el:c(""),Q=T.anchor=y?y.anchor:c("");let{patchFlag:re,dynamicChildren:te,slotScopeIds:ee}=T;ee&&(j=j?j.concat(ee):ee),y==null?(r(U,k,V),r(Q,k,V),E(T.children||[],k,Q,D,F,G,j,K)):re>0&&re&64&&te&&y.dynamicChildren?(I(y.dynamicChildren,te,k,D,F,G,j),(T.key!=null||D&&T===D.subTree)&&Lp(y,T,!0)):fe(y,T,k,Q,D,F,G,j,K)},w=(y,T,k,V,D,F,G,j,K)=>{T.slotScopeIds=j,y==null?T.shapeFlag&512?D.ctx.activate(T,k,V,G,K):Ce(T,k,V,D,F,G,K):Ze(y,T,K)},Ce=(y,T,k,V,D,F,G)=>{const j=y.component=Qv(y,V,D);if(ta(y)&&(j.ctx.renderer=X),Yv(j,!1,G),j.asyncDep){if(D&&D.registerDep(j,Me,G),!y.el){const K=j.subTree=Qe(Pt);B(null,K,T,k)}}else Me(j,y,T,k,D,F,G)},Ze=(y,T,k)=>{const V=T.component=y.component;if(Uv(y,T,k))if(V.asyncDep&&!V.asyncResolved){ge(V,T,k);return}else V.next=T,zy(V.update),V.effect.dirty=!0,V.update();else T.el=y.el,V.vnode=T},Me=(y,T,k,V,D,F,G)=>{const j=()=>{if(y.isMounted){let{next:Q,bu:re,u:te,parent:ee,vnode:ie}=y;{const xt=Mp(y);if(xt){Q&&(Q.el=ie.el,ge(y,Q,G)),xt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let Ae=Q,ve;dr(y,!1),Q?(Q.el=ie.el,ge(y,Q,G)):Q=ie,re&&ho(re),(ve=Q.props&&Q.props.onVnodeBeforeUpdate)&&Jt(ve,ee,Q,ie),dr(y,!0);const Be=Ya(y),St=y.subTree;y.subTree=Be,P(St,Be,p(St.el),x(St),y,D,F),Q.el=Be.el,Ae===null&&Fv(y,Be.el),te&&Et(te,D),(ve=Q.props&&Q.props.onVnodeUpdated)&&Et(()=>Jt(ve,ee,Q,ie),D)}else{let Q;const{el:re,props:te}=T,{bm:ee,m:ie,parent:Ae}=y,ve=po(T);if(dr(y,!1),ee&&ho(ee),!ve&&(Q=te&&te.onVnodeBeforeMount)&&Jt(Q,Ae,T),dr(y,!0),re&&Pe){const Be=()=>{y.subTree=Ya(y),Pe(re,y.subTree,y,D,null)};ve?T.type.__asyncLoader().then(()=>!y.isUnmounted&&Be()):Be()}else{const Be=y.subTree=Ya(y);P(null,Be,k,V,y,D,F),T.el=Be.el}if(ie&&Et(ie,D),!ve&&(Q=te&&te.onVnodeMounted)){const Be=T;Et(()=>Jt(Q,Ae,Be),D)}(T.shapeFlag&256||Ae&&po(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Et(y.a,D),y.isMounted=!0,T=k=V=null}},K=y.effect=new pl(j,Ut,()=>Il(U),y.scope),U=y.update=()=>{K.dirty&&K.run()};U.i=y,U.id=y.uid,dr(y,!0),U()},ge=(y,T,k)=>{T.component=y;const V=y.vnode.props;y.vnode=T,y.next=null,Ev(y,T.props,V,k),Av(y,T.children,k),rr(),Ah(y),sr()},fe=(y,T,k,V,D,F,G,j,K=!1)=>{const U=y&&y.children,Q=y?y.shapeFlag:0,re=T.children,{patchFlag:te,shapeFlag:ee}=T;if(te>0){if(te&128){Bt(U,re,k,V,D,F,G,j,K);return}else if(te&256){Rt(U,re,k,V,D,F,G,j,K);return}}ee&8?(Q&16&&vt(U,D,F),re!==U&&d(k,re)):Q&16?ee&16?Bt(U,re,k,V,D,F,G,j,K):vt(U,D,F,!0):(Q&8&&d(k,""),ee&16&&E(re,k,V,D,F,G,j,K))},Rt=(y,T,k,V,D,F,G,j,K)=>{y=y||Zr,T=T||Zr;const U=y.length,Q=T.length,re=Math.min(U,Q);let te;for(te=0;te<re;te++){const ee=T[te]=K?Ln(T[te]):Yt(T[te]);P(y[te],ee,k,null,D,F,G,j,K)}U>Q?vt(y,D,F,!0,!1,re):E(T,k,V,D,F,G,j,K,re)},Bt=(y,T,k,V,D,F,G,j,K)=>{let U=0;const Q=T.length;let re=y.length-1,te=Q-1;for(;U<=re&&U<=te;){const ee=y[U],ie=T[U]=K?Ln(T[U]):Yt(T[U]);if(_r(ee,ie))P(ee,ie,k,null,D,F,G,j,K);else break;U++}for(;U<=re&&U<=te;){const ee=y[re],ie=T[te]=K?Ln(T[te]):Yt(T[te]);if(_r(ee,ie))P(ee,ie,k,null,D,F,G,j,K);else break;re--,te--}if(U>re){if(U<=te){const ee=te+1,ie=ee<Q?T[ee].el:V;for(;U<=te;)P(null,T[U]=K?Ln(T[U]):Yt(T[U]),k,ie,D,F,G,j,K),U++}}else if(U>te)for(;U<=re;)Ue(y[U],D,F,!0),U++;else{const ee=U,ie=U,Ae=new Map;for(U=ie;U<=te;U++){const ft=T[U]=K?Ln(T[U]):Yt(T[U]);ft.key!=null&&Ae.set(ft.key,U)}let ve,Be=0;const St=te-ie+1;let xt=!1,Ts=0;const bn=new Array(St);for(U=0;U<St;U++)bn[U]=0;for(U=ee;U<=re;U++){const ft=y[U];if(Be>=St){Ue(ft,D,F,!0);continue}let Vt;if(ft.key!=null)Vt=Ae.get(ft.key);else for(ve=ie;ve<=te;ve++)if(bn[ve-ie]===0&&_r(ft,T[ve])){Vt=ve;break}Vt===void 0?Ue(ft,D,F,!0):(bn[Vt-ie]=U+1,Vt>=Ts?Ts=Vt:xt=!0,P(ft,T[Vt],k,null,D,F,G,j,K),Be++)}const Fr=xt?kv(bn):Zr;for(ve=Fr.length-1,U=St-1;U>=0;U--){const ft=ie+U,Vt=T[ft],$r=ft+1<Q?T[ft+1].el:V;bn[U]===0?P(null,Vt,k,$r,D,F,G,j,K):xt&&(ve<0||U!==Fr[ve]?Dt(Vt,k,$r,2):ve--)}}},Dt=(y,T,k,V,D=null)=>{const{el:F,type:G,transition:j,children:K,shapeFlag:U}=y;if(U&6){Dt(y.component.subTree,T,k,V);return}if(U&128){y.suspense.move(T,k,V);return}if(U&64){G.move(y,T,k,X);return}if(G===_t){r(F,T,k);for(let re=0;re<K.length;re++)Dt(K[re],T,k,V);r(y.anchor,T,k);return}if(G===Xa){L(y,T,k);return}if(V!==2&&U&1&&j)if(V===0)j.beforeEnter(F),r(F,T,k),Et(()=>j.enter(F),D);else{const{leave:re,delayLeave:te,afterLeave:ee}=j,ie=()=>r(F,T,k),Ae=()=>{re(F,()=>{ie(),ee&&ee()})};te?te(F,ie,Ae):Ae()}else r(F,T,k)},Ue=(y,T,k,V=!1,D=!1)=>{const{type:F,props:G,ref:j,children:K,dynamicChildren:U,shapeFlag:Q,patchFlag:re,dirs:te,cacheIndex:ee}=y;if(re===-2&&(D=!1),j!=null&&kc(j,null,k,y,!0),ee!=null&&(T.renderCache[ee]=void 0),Q&256){T.ctx.deactivate(y);return}const ie=Q&1&&te,Ae=!po(y);let ve;if(Ae&&(ve=G&&G.onVnodeBeforeUnmount)&&Jt(ve,T,y),Q&6)Qt(y.component,k,V);else{if(Q&128){y.suspense.unmount(k,V);return}ie&&hr(y,null,T,"beforeUnmount"),Q&64?y.type.remove(y,T,k,X,V):U&&!U.hasOnce&&(F!==_t||re>0&&re&64)?vt(U,T,k,!1,!0):(F===_t&&re&384||!D&&Q&16)&&vt(K,T,k),V&&Fe(y)}(Ae&&(ve=G&&G.onVnodeUnmounted)||ie)&&Et(()=>{ve&&Jt(ve,T,y),ie&&hr(y,null,T,"unmounted")},k)},Fe=y=>{const{type:T,el:k,anchor:V,transition:D}=y;if(T===_t){An(k,V);return}if(T===Xa){J(y);return}const F=()=>{s(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:j}=D,K=()=>G(k,F);j?j(y.el,F,K):K()}else F()},An=(y,T)=>{let k;for(;y!==T;)k=m(y),s(y),y=k;s(T)},Qt=(y,T,k)=>{const{bum:V,scope:D,update:F,subTree:G,um:j,m:K,a:U}=y;Dh(K),Dh(U),V&&ho(V),D.stop(),F&&(F.active=!1,Ue(G,y,T,k)),j&&Et(j,T),Et(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(y,T,k,V=!1,D=!1,F=0)=>{for(let G=F;G<y.length;G++)Ue(y[G],T,k,V,D)},x=y=>{if(y.shapeFlag&6)return x(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=m(y.anchor||y.el),k=T&&T[bv];return k?m(k):T};let Y=!1;const W=(y,T,k)=>{y==null?T._vnode&&Ue(T._vnode,null,null,!0):P(T._vnode||null,y,T,null,null,null,k),Y||(Y=!0,Ah(),gp(),Y=!1),T._vnode=y},X={p:P,um:Ue,m:Dt,r:Fe,mt:Ce,mc:E,pc:fe,pbc:I,n:x,o:t};let me,Pe;return{render:W,hydrate:me,createApp:yv(W,me)}}function Ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ln(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Lp(o,c)),c.type===sa&&(c.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mp(e)}function Dh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Ov=Symbol.for("v-scx"),Nv=()=>Ht(Ov),ro={};function wr(t,e,n){return Up(t,e,n)}function Up(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=xe){if(e&&i){const z=e;e=(...b)=>{z(...b),le()}}const l=nt,h=z=>r===!0?z:Un(z,r===!1?1:void 0);let d,p=!1,m=!1;if(At(t)?(d=()=>t.value,p=as(t)):Ws(t)?(d=()=>h(t),p=!0):oe(t)?(m=!0,p=t.some(z=>Ws(z)||as(z)),d=()=>t.map(z=>{if(At(z))return z.value;if(Ws(z))return h(z);if(ue(z))return zn(z,l,2)})):ue(t)?e?d=()=>zn(t,l,2):d=()=>(_&&_(),Ft(t,l,3,[C])):d=Ut,e&&r){const z=d;d=()=>Un(z())}let _,C=z=>{_=L.onStop=()=>{zn(z,l,4),_=L.onStop=void 0}},P;if(ia)if(C=Ut,e?n&&Ft(e,l,3,[d(),m?[]:void 0,C]):d(),s==="sync"){const z=Nv();P=z.__watcherHandles||(z.__watcherHandles=[])}else return Ut;let O=m?new Array(t.length).fill(ro):ro;const B=()=>{if(!(!L.active||!L.dirty))if(e){const z=L.run();(r||p||(m?z.some((b,E)=>Yn(b,O[E])):Yn(z,O)))&&(_&&_(),Ft(e,l,3,[z,O===ro?void 0:m&&O[0]===ro?[]:O,C]),O=z)}else L.run()};B.allowRecurse=!!e;let $;s==="sync"?$=B:s==="post"?$=()=>Et(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),$=()=>Il(B));const L=new pl(d,Ut,$),J=vy(),le=()=>{L.stop(),J&&ul(J.effects,L)};return e?n?B():O=L.run():s==="post"?Et(L.run.bind(L),l&&l.suspense):L.run(),P&&P.push(le),le}function Dv(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Fp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Ri(this),c=Up(s,i.bind(r),n);return o(),c}function Fp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Un(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))Un(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Un(t[r],e,n);else if(Wo(t)||es(t))t.forEach(r=>{Un(r,e,n)});else if(jf(t)){for(const r in t)Un(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Un(t[r],e,n)}return t}const xv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${Vr(e)}Modifiers`];function Vv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&xv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>ze(d)?d.trim():d)),o.number&&(s=n.map(Hf)));let c,l=r[c=za(e)]||r[c=za(Kt(e))];!l&&i&&(l=r[c=za(Vr(e))]),l&&Ft(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ft(h,t,6,s)}}function $p(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const d=$p(h,e,!0);d&&(c=!0,Je(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):Je(o,i),Ne(t)&&r.set(t,o),o)}function ra(t,e){return!t||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Vr(e))||Ee(t,e))}function Ya(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:C,inheritAttrs:P}=t,O=Ro(t);let B,$;try{if(n.shapeFlag&4){const J=s||r,le=J;B=Yt(h.call(le,J,d,p,_,m,C)),$=c}else{const J=e;B=Yt(J.length>1?J(p,{attrs:c,slots:o,emit:l}):J(p,null)),$=e.props?c:Lv(c)}}catch(J){Ys.length=0,Zo(J,t,1),B=Qe(Pt)}let L=B;if($&&P!==!1){const J=Object.keys($),{shapeFlag:le}=L;J.length&&le&7&&(i&&J.some(ll)&&($=Mv($,i)),L=Xn(L,$,!1,!0))}return n.dirs&&(L=Xn(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),B=L,Ro(O),B}const Lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Go(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const r in t)(!ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!ra(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?xh(r,o,h):!0:!!o;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ra(n,i))return!0}return!1}function Fv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $v=t=>t.__isSuspense;function Bv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Gy(t)}const _t=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Ys=[];let Ot=null;function Se(t=!1){Ys.push(Ot=t?null:[])}function jv(){Ys.pop(),Ot=Ys[Ys.length-1]||null}let li=1;function Vh(t){li+=t,t<0&&Ot&&(Ot.hasOnce=!0)}function Bp(t){return t.dynamicChildren=li>0?Ot||Zr:null,jv(),li>0&&Ot&&Ot.push(t),t}function Oe(t,e,n,r,s,i){return Bp(ne(t,e,n,r,s,i,!0))}function jp(t,e,n,r,s){return Bp(Qe(t,e,n,r,s,!0))}function Oc(t){return t?t.__v_isVNode===!0:!1}function _r(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||At(t)||ue(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&mo(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return c?(Cl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),li>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const Qe=qv;function qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lv)&&(t=Pt),Oc(t)){const c=Xn(t,e,!0);return n&&Cl(c,n),li>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(nE(t)&&(t=t.__vccOpts),e){e=Hv(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=fl(c)),Ne(l)&&(cp(l)&&!oe(l)&&(l=Je({},l)),e.style=dl(l))}const o=ze(t)?1:$v(t)?128:Rv(t)?64:Ne(t)?4:ue(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function Hv(t){return t?cp(t)||Pp(t)?Je({},t):t:null}function Xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?zv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&qp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&So(d,l.clone(d)),d}function Kv(t=" ",e=0){return Qe(sa,null,t,e)}function Gr(t="",e=!1){return e?(Se(),jp(Pt,null,t)):Qe(Pt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?Qe(Pt):oe(t)?Qe(_t,null,t.slice()):typeof t=="object"?Ln(t):Qe(sa,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xn(t)}function Cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pp(e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Kv(e)]):n=8);t.children=e,t.shapeFlag|=n}function zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fl([e.class,r.class]));else if(s==="style")e.style=dl([e.style,r.style]);else if(Go(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){Ft(t,e,7,[n,r])}const Gv=Rp();let Wv=0;function Qv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gv,i={uid:Wv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new _y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Op(r,s),emitsOptions:$p(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vv.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const Jv=()=>nt||wt;let Po,Nc;{const t=Kf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),Nc=e("__VUE_SSR_SETTERS__",n=>ia=n)}const Ri=t=>{const e=nt;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},Lh=()=>{nt&&nt.scope.off(),Po(null)};function Hp(t){return t.vnode.shapeFlag&4}let ia=!1;function Yv(t,e=!1,n=!1){e&&Nc(e);const{props:r,children:s}=t.vnode,i=Hp(t);vv(t,r,i,e),Iv(t,s,n);const o=i?Xv(t,e):void 0;return e&&Nc(!1),o}function Xv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?eE(t):null,i=Ri(t);rr();const o=zn(r,t,0,[t.props,s]);if(sr(),i(),$f(o)){if(o.then(Lh,Lh),e)return o.then(c=>{Mh(t,c,e)}).catch(c=>{Zo(c,t,0)});t.asyncDep=o}else Mh(t,o,e)}else Kp(t,e)}function Mh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=dp(e)),Kp(t,n)}let Uh;function Kp(t,e,n){const r=t.type;if(!t.render){if(!e&&Uh&&!r.render){const s=r.template||Rl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Je(Je({isCustomElement:i,delimiters:c},o),l);r.render=Uh(s,h)}}t.render=r.render||Ut}{const s=Ri(t);rr();try{dv(t)}finally{sr(),s()}}}const Zv={get(t,e){return It(t,"get",""),t[e]}};function eE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zv),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dp(Fy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function tE(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function nE(t){return ue(t)&&"__vccOpts"in t}const kt=(t,e)=>$y(t,e,ia);function Pl(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!oe(e)?Oc(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oc(n)&&(n=[n]),Qe(t,e,n))}const rE="3.4.35";/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const sE="http://www.w3.org/2000/svg",iE="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,Fh=gn&&gn.createElement("template"),oE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gn.createElementNS(sE,t):e==="mathml"?gn.createElementNS(iE,t):n?gn.createElement(t,{is:n}):gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Fh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kn="transition",Ls="animation",ui=Symbol("_vtc"),kl=(t,{slots:e})=>Pl(Yy,aE(t),e);kl.displayName="Transition";const zp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kl.props=Je({},_p,zp);const fr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},$h=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function aE(t){const e={};for(const A in t)A in zp||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=cE(s),P=C&&C[0],O=C&&C[1],{onBeforeEnter:B,onEnter:$,onEnterCancelled:L,onLeave:J,onLeaveCancelled:le,onBeforeAppear:z=B,onAppear:b=$,onAppearCancelled:E=L}=e,v=(A,w,Ce)=>{pr(A,w?d:c),pr(A,w?h:o),Ce&&Ce()},I=(A,w)=>{A._isLeaving=!1,pr(A,p),pr(A,_),pr(A,m),w&&w()},R=A=>(w,Ce)=>{const Ze=A?b:$,Me=()=>v(w,A,Ce);fr(Ze,[w,Me]),Bh(()=>{pr(w,A?l:i),On(w,A?d:c),$h(Ze)||jh(w,r,P,Me)})};return Je(e,{onBeforeEnter(A){fr(B,[A]),On(A,i),On(A,o)},onBeforeAppear(A){fr(z,[A]),On(A,l),On(A,h)},onEnter:R(!1),onAppear:R(!0),onLeave(A,w){A._isLeaving=!0;const Ce=()=>I(A,w);On(A,p),On(A,m),hE(),Bh(()=>{A._isLeaving&&(pr(A,p),On(A,_),$h(J)||jh(A,r,O,Ce))}),fr(J,[A,Ce])},onEnterCancelled(A){v(A,!1),fr(L,[A])},onAppearCancelled(A){v(A,!0),fr(E,[A])},onLeaveCancelled(A){I(A),fr(le,[A])}})}function cE(t){if(t==null)return null;if(Ne(t))return[Za(t.enter),Za(t.leave)];{const e=Za(t);return[e,e]}}function Za(t){return cy(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ui]||(t[ui]=new Set)).add(e)}function pr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ui];n&&(n.delete(e),n.size||(t[ui]=void 0))}function Bh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lE=0;function jh(t,e,n,r){const s=t._endId=++lE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=uE(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=_=>{_.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,m)}function uE(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${kn}Delay`),i=r(`${kn}Duration`),o=qh(s,i),c=r(`${Ls}Delay`),l=r(`${Ls}Duration`),h=qh(c,l);let d=null,p=0,m=0;e===kn?o>0&&(d=kn,p=o,m=i.length):e===Ls?h>0&&(d=Ls,p=h,m=l.length):(p=Math.max(o,h),d=p>0?o>h?kn:Ls:null,m=d?d===kn?i.length:l.length:0);const _=d===kn&&/\b(transform|all)(,|$)/.test(r(`${kn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:_}}function qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hh(n)+Hh(t[r])))}function Hh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hE(){return document.body.offsetHeight}function dE(t,e,n){const r=t[ui];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kh=Symbol("_vod"),fE=Symbol("_vsh"),pE=Symbol(""),gE=/(^|;)\s*display\s*:/;function mE(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&_o(r,c,"")}else for(const o in e)n[o]==null&&_o(r,o,"");for(const o in n)o==="display"&&(i=!0),_o(r,o,n[o])}else if(s){if(e!==n){const o=r[pE];o&&(n+=";"+o),r.cssText=n,i=gE.test(n)}}else e&&t.removeAttribute("style");Kh in t&&(t[Kh]=i?r.display:"",t[fE]&&(r.display="none"))}const zh=/\s*!important$/;function _o(t,e,n){if(oe(n))n.forEach(r=>_o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_E(t,e);zh.test(n)?t.setProperty(Vr(r),n.replace(zh,""),"important"):t[r]=n}}const Gh=["Webkit","Moz","ms"],ec={};function _E(t,e){const n=ec[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return ec[e]=r;r=Jo(r);for(let s=0;s<Gh.length;s++){const i=Gh[s]+r;if(i in t)return ec[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function Qh(t,e,n,r,s,i=py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n):n==null||i&&!zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cn(n)?String(n):n)}function yE(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=zf(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Gp(t,e,n,r){t.addEventListener(e,n,r)}function vE(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function EE(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=wE(e);if(r){const h=i[e]=AE(r,s);Gp(t,c,h,l)}else o&&(vE(t,c,o,l),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function wE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let tc=0;const TE=Promise.resolve(),IE=()=>tc||(TE.then(()=>tc=0),tc=Date.now());function AE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(bE(r,n.value),e,5,[r])};return n.value=t,n.attached=IE(),n}function bE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,RE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?dE(t,r,o):e==="style"?mE(t,n,r):Go(e)?ll(e)||EE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SE(t,e,r,o))?(yE(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qh(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qh(t,e,r,o))};function SE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&ze(n)?!1:e in t}const Zh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ho(e,n):e},nc=Symbol("_assign"),ed={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Wo(e);Gp(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Hf(ko(o)):ko(o));t[nc](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Tl(()=>{t._assigning=!1})}),t[nc]=Zh(r)},mounted(t,{value:e,modifiers:{number:n}}){td(t,e)},beforeUpdate(t,e,n){t[nc]=Zh(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||td(t,e)}};function td(t,e,n){const r=t.multiple,s=oe(e);if(!(r&&!s&&!Wo(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=ko(c);if(r)if(s){const h=typeof l;h==="string"||h==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=my(e,l)>-1}else c.selected=e.has(l);else if(Yo(ko(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ko(t){return"_value"in t?t._value:t.value}const CE=["ctrl","shift","alt","meta"],PE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CE.some(n=>t[`${n}Key`]&&!e.includes(n))},kE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=PE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},OE=Je({patchProp:RE},oE);let nd;function NE(){return nd||(nd=Sv(OE))}const DE=(...t)=>{const e=NE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=VE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,xE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function VE(t){return ze(t)?document.querySelector(t):t}function LE(){return Wp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const ME=typeof Proxy=="function",UE="devtools-plugin:setup",FE="plugin:settings:set";let Kr,Dc;function $E(){var t;return Kr!==void 0||(typeof window<"u"&&window.performance?(Kr=!0,Dc=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Kr=!0,Dc=globalThis.perf_hooks.performance):Kr=!1),Kr}function BE(){return $E()?Dc.now():Date.now()}class jE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return BE()}},n&&n.on(FE,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:c,args:l,resolve:h})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qE(t,e){const n=t,r=Wp(),s=LE(),i=ME&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(UE,t,e);else{const o=i?new jE(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var HE="store";function ms(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function KE(t){return t!==null&&typeof t=="object"}function zE(t){return t&&typeof t.then=="function"}function GE(t,e){return function(){return t(e)}}function Qp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Jp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;aa(t,n,[],t._modules.root,!0),Ol(t,n,e)}function Ol(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};ms(s,function(o,c){i[c]=GE(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=Ti({data:e}),t.strict&&XE(t),r&&n&&t._withCommit(function(){r.data=null})}function aa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Nl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var h=r.context=WE(t,o,n);r.forEachMutation(function(d,p){var m=o+p;QE(t,m,d,h)}),r.forEachAction(function(d,p){var m=d.root?p:o+p,_=d.handler||d;JE(t,m,_,h)}),r.forEachGetter(function(d,p){var m=o+p;YE(t,m,d,h)}),r.forEachChild(function(d,p){aa(t,e,n.concat(p),d,s)})}function WE(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=Oo(i,o,c),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,h)},commit:r?t.commit:function(i,o,c){var l=Oo(i,o,c),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=e+p),t.commit(p,h,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Yp(t,e)}},state:{get:function(){return Nl(t.state,n)}}}),s}function Yp(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function QE(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function JE(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return zE(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function YE(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function XE(t){wr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Nl(t,e){return e.reduce(function(n,r){return n[r]},t)}function Oo(t,e,n){return KE(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ZE="vuex bindings",rd="vuex:mutations",rc="vuex:actions",zr="vuex",ew=0;function tw(t,e){qE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ZE]},function(n){n.addTimelineLayer({id:rd,label:"Vuex Mutations",color:sd}),n.addTimelineLayer({id:rc,label:"Vuex Actions",color:sd}),n.addInspector({id:zr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===zr)if(r.filter){var s=[];tg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[eg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===zr){var s=r.nodeId;Yp(e,s),r.state=sw(ow(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===zr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(zr),n.sendInspectorState(zr),n.addTimelineEvent({layerId:rd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=ew++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:rc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:rc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var sd=8702998,nw=6710886,rw=16777215,Xp={label:"namespaced",textColor:rw,backgroundColor:nw};function Zp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function eg(t,e){return{id:e||"root",label:Zp(e),tags:t.namespaced?[Xp]:[],children:Object.keys(t._children).map(function(n){return eg(t._children[n],e+n+"/")})}}function tg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Xp]:[]}),Object.keys(e._children).forEach(function(s){tg(t,e._children[s],n,r+s+"/")})}function sw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=iw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Zp(o):o,editable:!1,value:xc(function(){return i[o]})}})}return s}function iw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=xc(function(){return t[n]})}else e[n]=xc(function(){return t[n]})}),e}function ow(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function xc(t){try{return t()}catch(e){return e}}var Wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ng={namespaced:{configurable:!0}};ng.namespaced.get=function(){return!!this._rawModule.namespaced};Wt.prototype.addChild=function(e,n){this._children[e]=n};Wt.prototype.removeChild=function(e){delete this._children[e]};Wt.prototype.getChild=function(e){return this._children[e]};Wt.prototype.hasChild=function(e){return e in this._children};Wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wt.prototype.forEachChild=function(e){ms(this._children,e)};Wt.prototype.forEachGetter=function(e){this._rawModule.getters&&ms(this._rawModule.getters,e)};Wt.prototype.forEachAction=function(e){this._rawModule.actions&&ms(this._rawModule.actions,e)};Wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ms(this._rawModule.mutations,e)};Object.defineProperties(Wt.prototype,ng);var Lr=function(e){this.register([],e,!1)};Lr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Lr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Lr.prototype.update=function(e){rg([],this.root,e)};Lr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Wt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ms(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Lr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Lr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function rg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;rg(t.concat(r),e.getChild(r),n.modules[r])}}function aw(t){return new bt(t)}var bt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Lr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,h=c.commit;this.dispatch=function(m,_){return l.call(o,m,_)},this.commit=function(m,_,C){return h.call(o,m,_,C)},this.strict=s;var d=this._modules.root.state;aa(this,d,[],this._modules.root),Ol(this,d),r.forEach(function(p){return p(n)})},Dl={state:{configurable:!0}};bt.prototype.install=function(e,n){e.provide(n||HE,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&tw(e,this)};Dl.state.get=function(){return this._state.data};Dl.state.set=function(t){};bt.prototype.commit=function(e,n,r){var s=this,i=Oo(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},h=this._mutations[o];h&&(this._withCommit(function(){h.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(d){return d(l,s.state)}))};bt.prototype.dispatch=function(e,n){var r=this,s=Oo(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(c,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(o)})):l[0](o);return new Promise(function(d,p){h.then(function(m){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}d(m)},function(m){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,m)})}catch{}p(m)})})}};bt.prototype.subscribe=function(e,n){return Qp(e,this._subscribers,n)};bt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Qp(r,this._actionSubscribers,n)};bt.prototype.watch=function(e,n,r){var s=this;return wr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};bt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};bt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),aa(this,this.state,e,this._modules.get(e),r.preserveState),Ol(this,this.state)};bt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Nl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Jp(this)};bt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};bt.prototype.hotUpdate=function(e){this._modules.update(e),Jp(this,!0)};bt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(bt.prototype,Dl);const cw={user:null,status:""};var id={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new uw;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hw=function(t){const e=sg(t);return ig.encodeByteArray(e,!0)},No=function(t){return hw(t).replace(/\./g,"")},og=function(t){try{return ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=()=>dw().__FIREBASE_DEFAULTS__,pw=()=>{if(typeof process>"u"||typeof id>"u")return;const t=id.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&og(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return fw()||pw()||gw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cg=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lg=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},ug=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function yw(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ww(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tw(){return!yw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Iw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bw,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Rw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new hn(s,c,r)}}function Rw(t,e){return t.replace(Sw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sw=/\{\$([^}]+)}/g;function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(od(i)&&od(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function od(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pw(t,e){const n=new kw(t,e);return n.subscribe.bind(n)}class kw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(t){return t===gr?void 0:t}function xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Lw={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Mw=pe.INFO,Uw={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Fw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=Mw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $w=(t,e)=>e.some(n=>t instanceof n);let ad,cd;function Bw(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jw(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,Vc=new WeakMap,fg=new WeakMap,ic=new WeakMap,Vl=new WeakMap;function qw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),Vl.set(e,t),e}function Hw(t){if(Vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vc.set(t,e)}let Lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kw(t){Lc=t(Lc)}function zw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return fg.set(r,e.sort?e.sort():[e]),Gn(r)}:jw().includes(t)?function(...e){return t.apply(oc(this),e),Gn(dg.get(this))}:function(...e){return Gn(t.apply(oc(this),e))}}function Gw(t){return typeof t=="function"?zw(t):(t instanceof IDBTransaction&&Hw(t),$w(t,Bw())?new Proxy(t,Lc):t)}function Gn(t){if(t instanceof IDBRequest)return qw(t);if(ic.has(t))return ic.get(t);const e=Gw(t);return e!==t&&(ic.set(t,e),Vl.set(e,t)),e}const oc=t=>Vl.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Qw=["get","getKey","getAll","getAllKeys","count"],Jw=["put","add","delete","clear"],ac=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return ac.set(e,i),i}Kw(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",ud="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new xl("@firebase/app"),Zw="@firebase/app-compat",eT="@firebase/analytics-compat",tT="@firebase/analytics",nT="@firebase/app-check-compat",rT="@firebase/app-check",sT="@firebase/auth",iT="@firebase/auth-compat",oT="@firebase/database",aT="@firebase/database-compat",cT="@firebase/functions",lT="@firebase/functions-compat",uT="@firebase/installations",hT="@firebase/installations-compat",dT="@firebase/messaging",fT="@firebase/messaging-compat",pT="@firebase/performance",gT="@firebase/performance-compat",mT="@firebase/remote-config",_T="@firebase/remote-config-compat",yT="@firebase/storage",vT="@firebase/storage-compat",ET="@firebase/firestore",wT="@firebase/vertexai-preview",TT="@firebase/firestore-compat",IT="firebase",AT="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="[DEFAULT]",bT={[Mc]:"fire-core",[Zw]:"fire-core-compat",[tT]:"fire-analytics",[eT]:"fire-analytics-compat",[rT]:"fire-app-check",[nT]:"fire-app-check-compat",[sT]:"fire-auth",[iT]:"fire-auth-compat",[oT]:"fire-rtdb",[aT]:"fire-rtdb-compat",[cT]:"fire-fn",[lT]:"fire-fn-compat",[uT]:"fire-iid",[hT]:"fire-iid-compat",[dT]:"fire-fcm",[fT]:"fire-fcm-compat",[pT]:"fire-perf",[gT]:"fire-perf-compat",[mT]:"fire-rc",[_T]:"fire-rc-compat",[yT]:"fire-gcs",[vT]:"fire-gcs-compat",[ET]:"fire-fst",[TT]:"fire-fst-compat",[wT]:"fire-vertex","fire-js":"fire-js",[IT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,RT=new Map,Fc=new Map;function hd(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(Fc.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of xo.values())hd(n,t);for(const n of RT.values())hd(n,t);return!0}function la(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Si("app","Firebase",ST);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=AT;function ua(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=lg()),!n)throw Wn.create("no-options");const i=xo.get(s);if(i){if(Do(n,i.options)&&Do(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new Vw(s);for(const l of Fc.values())o.addComponent(l);const c=new CT(n,r,o);return xo.set(s,c),c}function Ll(t=Uc){const e=xo.get(t);if(!e&&t===Uc&&lg())return ua();if(!e)throw Wn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=bT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(c.join(" "));return}Cr(new Zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebase-heartbeat-database",kT=1,hi="firebase-heartbeat-store";let cc=null;function pg(){return cc||(cc=Ww(PT,kT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function OT(t){try{const n=(await pg()).transaction(hi),r=await n.objectStore(hi).get(gg(t));return await n.done,r}catch(e){if(e instanceof hn)Sr.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function dd(t,e){try{const r=(await pg()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,gg(t)),await r.done}catch(n){if(n instanceof hn)Sr.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=1024,DT=30*24*60*60*1e3;class xT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=DT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fd(),{heartbeatsToSend:r,unsentEntries:s}=VT(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fd(){return new Date().toISOString().substring(0,10)}function VT(t,e=NT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pd(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){Cr(new Zn("platform-logger",e=>new Yw(e),"PRIVATE")),Cr(new Zn("heartbeat",e=>new xT(e),"PRIVATE")),tn(Mc,ud,t),tn(Mc,ud,"esm2017"),tn("fire-js","")}MT("");function Ml(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UT=mg,_g=new Si("auth","Firebase",mg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new xl("@firebase/auth");function FT(t,...e){Vo.logLevel<=pe.WARN&&Vo.warn(`Auth (${Mr}): ${t}`,...e)}function yo(t,...e){Vo.logLevel<=pe.ERROR&&Vo.error(`Auth (${Mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Ul(t,...e)}function nn(t,...e){return Ul(t,...e)}function yg(t,e,n){const r=Object.assign(Object.assign({},UT()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return yg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ul(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _g.create(t,...e)}function ce(t,e,...n){if(!t)throw Ul(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function wn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $T(){return gd()==="http:"||gd()==="https:"}function gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($T()||vw()||"connection"in navigator)?navigator.onLine:!0}function jT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=_w()||Ew()}get(){return BT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Pi(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return Eg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vg.fetch()(wg(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qT),e);try{const s=new zT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yg(t,d,h);zt(t,d)}}catch(s){if(s instanceof hn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function ki(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fl(t.config,s):`${t.config.apiScheme}://${s}`}function KT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),HT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}function md(t){return t!==void 0&&t.enterprise!==void 0}class GT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WT(t,e){return or(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function Tg(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JT(t,e=!1){const n=$t(t),r=await n.getIdToken(e),s=$l(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(lc(s.auth_time)),issuedAtTime:Xs(lc(s.iat)),expirationTime:Xs(lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lc(t){return Number(t)*1e3}function $l(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=og(n);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _d(t){const e=$l(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&YT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,Tg(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ig(i.providerUserInfo):[],c=eI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function ZT(t){const e=$t(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ig(t){return t.map(e=>{var{providerId:n}=e,r=Ml(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){const n=await Eg(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=wg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nI(t,e){return or(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=_d(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ns;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JT(this,e)}reload(){return ZT(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await di(this,QT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:J,isAnonymous:le,providerData:z,stsTokenManager:b}=n;ce(L&&b,e,"internal-error");const E=ns.fromJSON(this.name,b);ce(typeof L=="string",e,"internal-error"),Nn(p,e.name),Nn(m,e.name),ce(typeof J=="boolean",e,"internal-error"),ce(typeof le=="boolean",e,"internal-error"),Nn(_,e.name),Nn(C,e.name),Nn(P,e.name),Nn(O,e.name),Nn(B,e.name),Nn($,e.name);const v=new _n({uid:L,auth:e,email:m,emailVerified:J,displayName:p,isAnonymous:le,photoURL:C,phoneNumber:_,tenantId:P,stsTokenManager:E,createdAt:B,lastLoginAt:$});return z&&Array.isArray(z)&&(v.providerData=z.map(I=>Object.assign({},I))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new ns;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ig(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ns;c.updateFromIdToken(r);const l=new _n({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Map;function yn(t){wn(t instanceof Function,"Expected a class definition");let e=yd.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ag.type="NONE";const vd=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(yn(vd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(vd);const o=vo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=_n._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new rs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pg(e))return"Blackberry";if(kg(e))return"Webos";if(Bl(e))return"Safari";if((e.includes("chrome/")||Rg(e))&&!e.includes("edge/"))return"Chrome";if(Cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bg(t=st()){return/firefox\//i.test(t)}function Bl(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rg(t=st()){return/crios\//i.test(t)}function Sg(t=st()){return/iemobile/i.test(t)}function Cg(t=st()){return/android/i.test(t)}function Pg(t=st()){return/blackberry/i.test(t)}function kg(t=st()){return/webos/i.test(t)}function ha(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rI(t=st()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sI(){return ww()&&document.documentMode===10}function Og(t=st()){return ha(t)||Cg(t)||kg(t)||Pg(t)||/windows phone/i.test(t)||Sg(t)}function iI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e=[]){let n;switch(t){case"Browser":n=Ed(st());break;case"Worker":n=`${Ed(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e={}){return or(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=6;class lI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wd(this),this.idTokenSubscription=new wd(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_g,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tg(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(En(this));const n=e?$t(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aI(this),n=new lI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ur(t){return $t(t)}class wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hI(t){da=t}function Dg(t){return da.loadJS(t)}function dI(){return da.recaptchaEnterpriseScript}function fI(){return da.gapiScript}function pI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gI="recaptcha-enterprise",mI="NO_RECAPTCHA";class _I{constructor(e){this.type=gI,this.auth=Ur(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{WT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new GT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;md(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(mI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&md(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dI();l.length!==0&&(l+=c),Dg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Td(t,e,n,r=!1){const s=new _I(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Td(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Td(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){const n=la(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function vI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EI(t,e,n){const r=Ur(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xg(e),{host:o,port:c}=wI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),TI()}function xg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wI(t){const e=xg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Id(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Id(o)}}}function Id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function II(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(t,e){return ki(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function RI(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends jl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,n,"signInWithPassword",AI);case"emailLink":return bI(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,r,"signUpPassword",II);case"emailLink":return RI(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return ki(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="http://localhost";class Pr extends jl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ml(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:SI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PI(t){const e=Bs(js(t)).link,n=e?Bs(js(e)).deep_link_id:null,r=Bs(js(t)).deep_link_id;return(r?Bs(js(r)).link:null)||r||n||e||t}class ql{constructor(e){var n,r,s,i,o,c;const l=Bs(js(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=CI((s=l.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=PI(e);try{return new ql(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ql.parseLink(n);return ce(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Oi{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Oi{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){return ki(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=Ad(r);return new kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ad(r);return new kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mo(e,n,r,s)}}function Lg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,i,e,r):i})}async function OI(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await di(t,Lg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=$l(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r="signIn",s=await Lg(t,r,e),i=await kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DI(t,e){return Mg(Ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t){const e=Ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xI(t,e,n){if(en(t.app))return Promise.reject(En(t));const r=Ur(t),o=await jc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ug(t),l}),c=await kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function VI(t,e,n){return en(t.app)?Promise.reject(En(t)):DI($t(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ug(t),r})}function LI(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function MI(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){const t=st();return Bl(t)||ha(t)}const FI=1e3,$I=10;class $g extends Fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UI()&&iI(),this.fallbackToPolling=Og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$I):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const BI=$g;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends Fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const jg=Bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await jI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Hl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function HI(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function KI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GI(){return qg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firebaseLocalStorageDb",WI=1,Fo="firebaseLocalStorage",Kg="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function QI(){const t=indexedDB.deleteDatabase(Hg);return new Ni(t).toPromise()}function qc(){const t=indexedDB.open(Hg,WI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fo,{keyPath:Kg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await QI(),e(await qc()))})})}async function bd(t,e,n){const r=pa(t,!0).put({[Kg]:e,value:n});return new Ni(r).toPromise()}async function JI(t,e){const n=pa(t,!1).get(e),r=await new Ni(n).toPromise();return r===void 0?null:r.value}function Rd(t,e){const n=pa(t,!0).delete(e);return new Ni(n).toPromise()}const YI=800,XI=3;class zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KI(),!this.activeServiceWorker)return;this.sender=new qI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qc();return await bd(e,Uo,"1"),await Rd(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pa(s,!1).getAll();return new Ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zg.type="LOCAL";const ZI=zg;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){return e?yn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends jl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t0(t){return Mg(t.auth,new Kl(t),t.bypassAuthState)}function n0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),NI(n,new Kl(t),t.bypassAuthState)}async function r0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),OI(n,new Kl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t0;case"linkViaPopup":case"linkViaRedirect":return r0;case"reauthViaPopup":case"reauthViaRedirect":return n0;default:zt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new Pi(2e3,1e4);class Xr extends Gg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s0.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="pendingRedirect",Eo=new Map;class o0 extends Gg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await a0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a0(t,e){const n=u0(e),r=l0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c0(t,e){Eo.set(t._key(),e)}function l0(t){return yn(t._redirectPersistence)}function u0(t){return vo(i0,t.config.apiKey,t.name)}async function h0(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r=Ur(t),s=e0(r,e),o=await new o0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=10*60*1e3;class f0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sd(e))}saveEventToCache(e){this.cachedEventUids.add(Sd(e)),this.lastProcessedEventTime=Date.now()}}function Sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_0=/^https?/;async function y0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g0(t);for(const n of e)try{if(v0(n))return}catch{}zt(t,"unauthorized-domain")}function v0(t){const e=$c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_0.test(n))return!1;if(m0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Pi(3e4,6e4);function Cd(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w0(t){return new Promise((e,n)=>{var r,s,i;function o(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),n(nn(t,"network-request-failed"))},timeout:E0.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const c=pI("iframefcb");return rn()[c]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Dg(`${fI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function T0(t){return wo=wo||w0(t),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Pi(5e3,15e3),A0="__/auth/iframe",b0="emulator/auth/iframe",R0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,b0):`https://${t.config.authDomain}/${A0}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=S0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function P0(t){const e=await T0(t),n=rn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:C0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),c=rn().setTimeout(()=>{i(o)},I0.get());function l(){rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O0=500,N0=600,D0="_blank",x0="http://localhost";class Pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V0(t,e,n,r=O0,s=N0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},k0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=st().toLowerCase();n&&(c=Rg(h)?D0:n),bg(h)&&(e=e||x0,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(rI(h)&&c!=="_self")return L0(e||"",c),new Pd(null);const p=window.open(e||"",c,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Pd(p)}function L0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__/auth/handler",U0="emulator/auth/handler",F0=encodeURIComponent("fac");async function kd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof Vg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Oi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${F0}=${encodeURIComponent(l)}`:"";return`${$0(t)}?${Ci(c).slice(1)}${h}`}function $0({config:t}){return t.emulator?Fl(t,U0):`https://${t.authDomain}/${M0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class B0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=h0,this._overrideRedirectResult=c0}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kd(e,n,r,$c(),s);return V0(e,o,Hl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kd(e,n,r,$c(),s);return HI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P0(e),r=new f0(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Og()||Bl()||ha()}}const j0=B0;var Od="@firebase/auth",Nd="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K0(t){Cr(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ng(t)},h=new uI(r,s,i,l);return vI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Zn("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(r=>new q0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Od,Nd,H0(t)),tn(Od,Nd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=5*60,G0=ug("authIdTokenMaxAge")||z0;let Dd=null;const W0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>G0)return;const s=n==null?void 0:n.token;Dd!==s&&(Dd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qg(t=Ll()){const e=la(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yI(t,{popupRedirectResolver:j0,persistence:[ZI,BI,jg]}),r=ug("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=W0(i.toString());MI(n,o,()=>o(n.currentUser)),LI(n,c=>o(c))}}const s=ag("auth");return s&&EI(n,`http://${s}`),n}function Q0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Q0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K0("Browser");const zl=(t,e)=>{t.user=e},Tr=(t,e)=>{t.status=e},J0=Object.freeze(Object.defineProperty({__proto__:null,SET_STATUS:Tr,SET_USER:zl},Symbol.toStringTag,{value:"Module"})),Y0=async({commit:t},{email:e,password:n})=>{t(Tr,"loading");const r=Qg();try{const s=await xI(r,e,n);t(zl,s.user),t(Tr,"success")}catch(s){t(Tr,`error: ${s.message}`)}},X0=async({commit:t},{email:e,password:n})=>{t(Tr,"loading");const r=Qg();try{const s=await VI(r,e,n);t(zl,s.user),t(Tr,"success")}catch(s){t(Tr,`error: ${s.message}`)}},Z0=Object.freeze(Object.defineProperty({__proto__:null,loginUser:X0,registerUser:Y0},Symbol.toStringTag,{value:"Module"})),eA=aw({state:cw,mutations:J0,actions:Z0});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Jg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jg(t.default)}const Re=Object.assign;function hc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Gt(s)?s.map(t):t(s)}return n}const Zs=()=>{},Gt=Array.isArray,Yg=/#/g,nA=/&/g,rA=/\//g,sA=/=/g,iA=/\?/g,Xg=/\+/g,oA=/%5B/g,aA=/%5D/g,Zg=/%5E/g,cA=/%60/g,em=/%7B/g,lA=/%7C/g,tm=/%7D/g,uA=/%20/g;function Gl(t){return encodeURI(""+t).replace(lA,"|").replace(oA,"[").replace(aA,"]")}function hA(t){return Gl(t).replace(em,"{").replace(tm,"}").replace(Zg,"^")}function Hc(t){return Gl(t).replace(Xg,"%2B").replace(uA,"+").replace(Yg,"%23").replace(nA,"%26").replace(cA,"`").replace(em,"{").replace(tm,"}").replace(Zg,"^")}function dA(t){return Hc(t).replace(sA,"%3D")}function fA(t){return Gl(t).replace(Yg,"%23").replace(iA,"%3F")}function pA(t){return t==null?"":fA(t).replace(rA,"%2F")}function pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gA=/\/$/,mA=t=>t.replace(gA,"");function dc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=EA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:pi(o)}}function _A(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&nm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vA(t[n],e[n]))return!1;return!0}function vA(t,e){return Gt(t)?Vd(t,e):Gt(e)?Vd(e,t):t===e}function Vd(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function EA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ei||(ei={}));function wA(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mA(t)}const TA=/^[^#]+#/;function IA(t,e){return t.replace(TA,"#")+e}function AA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function bA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ld(t,e){return(history.state?history.state.position-e:-1)+t}const Kc=new Map;function RA(t,e){Kc.set(t,e)}function SA(t){const e=Kc.get(t);return Kc.delete(t),e}let CA=()=>location.protocol+"//"+location.host;function rm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),xd(l,"")}return xd(n,t)+r+s}function PA(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=rm(t,location),C=n.value,P=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}O=P?m.position-P.position:0}else r(_);s.forEach(B=>{B(n.value,C,{delta:O,type:gi.pop,direction:O?O>0?ei.forward:ei.back:ei.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:ga()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Md(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ga():null}}function kA(t){const{history:e,location:n}=window,r={value:rm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:CA()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,h){const d=Re({},e.state,Md(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Re({},s.value,e.state,{forward:l,scroll:ga()});i(d.current,d,!0);const p=Re({},Md(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function OA(t){t=wA(t);const e=kA(t),n=PA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:IA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NA(t){return typeof t=="string"||t&&typeof t=="object"}function sm(t){return typeof t=="string"||typeof t=="symbol"}const im=Symbol("");var Ud;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ud||(Ud={}));function ls(t,e){return Re(new Error,{type:t,[im]:!0},e)}function pn(t,e){return t instanceof Error&&im in t&&(e==null||!!(t.type&e))}const Fd="[^/]+?",DA={sensitive:!1,strict:!1,start:!0,end:!0},xA=/[.+*?^${}()[\]/\\]/g;function VA(t,e){const n=Re({},DA,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(xA,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:P,optional:O,regexp:B}=m;i.push({name:C,repeatable:P,optional:O});const $=B||Fd;if($!==Fd){_+=10;try{new RegExp(`(${$})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${C}" (${$}): `+J.message)}}let L=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(L=O&&h.length<2?`(?:/${L})`:"/"+L),O&&(L+="?"),s+=L,_+=20,O&&(_+=-8),P&&(_+=-20),$===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:P,optional:O}=_,B=C in h?h[C]:"";if(Gt(B)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const $=Gt(B)?B.join("/"):B;if(!$)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function LA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function om(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=LA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($d(r))return 1;if($d(s))return-1}return s.length-r.length}function $d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MA={type:0,value:""},UA=/[a-zA-Z0-9_]/;function FA(t){if(!t)return[[]];if(t==="/")return[[MA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:UA.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function $A(t,e,n){const r=VA(FA(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function BA(t,e){const n=[],r=new Map;e=Hd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,P=jd(p);P.aliasOf=_&&_.record;const O=Hd(e,p),B=[P];if("alias"in p){const J=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of J)B.push(jd(Re({},P,{components:_?_.record.components:P.components,path:le,aliasOf:_?_.record:P})))}let $,L;for(const J of B){const{path:le}=J;if(m&&le[0]!=="/"){const z=m.record.path,b=z[z.length-1]==="/"?"":"/";J.path=m.record.path+(le&&b+le)}if($=$A(J,m,O),_?_.alias.push($):(L=L||$,L!==$&&L.alias.push($),C&&p.name&&!qd($)&&o(p.name)),am($)&&l($),P.children){const z=P.children;for(let b=0;b<z.length;b++)i(z[b],$,_&&_.children[b])}_=_||$}return L?()=>{o(L)}:Zs}function o(p){if(sm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=HA(p,n);n.splice(m,0,p),p.record.name&&!qd(p)&&r.set(p.record.name,p)}function h(p,m){let _,C={},P,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ls(1,{location:p});O=_.record.name,C=Re(Bd(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Bd(p.params,_.keys.map(L=>L.name))),P=_.stringify(C)}else if(p.path!=null)P=p.path,_=n.find(L=>L.re.test(P)),_&&(C=_.parse(P),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw ls(1,{location:p,currentLocation:m});O=_.record.name,C=Re({},m.params,p.params),P=_.stringify(C)}const B=[];let $=_;for(;$;)B.unshift($.record),$=$.parent;return{name:O,path:P,params:C,matched:B,meta:qA(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Bd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function qd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qA(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Hd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function HA(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;om(t,e[i])<0?r=i:n=i+1}const s=KA(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function KA(t){let e=t;for(;e=e.parent;)if(am(e)&&om(t,e)===0)return e}function am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xg," "),o=i.indexOf("="),c=pi(o<0?i:i.slice(0,o)),l=o<0?null:pi(i.slice(o+1));if(c in e){let h=e[c];Gt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Kd(t){let e="";for(let n in t){const r=t[n];if(n=dA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(i=>i&&Hc(i)):[r&&Hc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function GA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const WA=Symbol(""),zd=Symbol(""),ma=Symbol(""),Wl=Symbol(""),zc=Symbol("");function Ms(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(ls(4,{from:n,to:e})):m instanceof Error?l(m):NA(m)?l(ls(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function fc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Jg(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Mn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=tA(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Mn(_,n,r,o,c,s)()}))}}return i}function Gd(t){const e=Ht(ma),n=Ht(Wl),r=kt(()=>{const l=Mt(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(cs.bind(null,d));if(m>-1)return m;const _=Wd(l[h-2]);return h>1&&Wd(d)===_&&p[p.length-1].path!==_?p.findIndex(cs.bind(null,l[h-2])):m}),i=kt(()=>s.value>-1&&XA(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&nm(n.params,r.value.params));function c(l={}){return YA(l)?e[Mt(t.replace)?"replace":"push"](Mt(t.to)).catch(Zs):Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const QA=wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gd,setup(t,{slots:e}){const n=Ti(Gd(t)),{options:r}=Ht(ma),s=kt(()=>({[Qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JA=QA;function YA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Gt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qd=(t,e,n)=>t??e??n,ZA=wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(zc),s=kt(()=>t.route||r.value),i=Ht(zd,0),o=kt(()=>{let h=Mt(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=kt(()=>s.value.matched[o.value]);go(zd,kt(()=>o.value+1)),go(WA,c),go(zc,s);const l=ut();return wr(()=>[l.value,c.value,t.name],([h,d,p],[m,_,C])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!cs(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Jd(n.default,{Component:m,route:h});const _=p.props[d],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=Pl(m,Re({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Jd(n.default,{Component:O,route:h})||O}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eb=ZA;function tb(t){const e=BA(t.routes,t),n=t.parseQuery||zA,r=t.stringifyQuery||Kd,s=t.history,i=Ms(),o=Ms(),c=Ms(),l=By(Dn);let h=Dn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=hc.bind(null,x=>""+x),p=hc.bind(null,pA),m=hc.bind(null,pi);function _(x,Y){let W,X;return sm(x)?(W=e.getRecordMatcher(x),X=Y):X=x,e.addRoute(X,W)}function C(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function P(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function B(x,Y){if(Y=Re({},Y||l.value),typeof x=="string"){const T=dc(n,x,Y.path),k=e.resolve({path:T.path},Y),V=s.createHref(T.fullPath);return Re(T,k,{params:m(k.params),hash:pi(T.hash),redirectedFrom:void 0,href:V})}let W;if(x.path!=null)W=Re({},x,{path:dc(n,x.path,Y.path).path});else{const T=Re({},x.params);for(const k in T)T[k]==null&&delete T[k];W=Re({},x,{params:p(T)}),Y.params=p(Y.params)}const X=e.resolve(W,Y),me=x.hash||"";X.params=d(m(X.params));const Pe=_A(r,Re({},x,{hash:hA(me),path:X.path})),y=s.createHref(Pe);return Re({fullPath:Pe,hash:me,query:r===Kd?GA(x.query):x.query||{}},X,{redirectedFrom:void 0,href:y})}function $(x){return typeof x=="string"?dc(n,x,l.value.path):Re({},x)}function L(x,Y){if(h!==x)return ls(8,{from:Y,to:x})}function J(x){return b(x)}function le(x){return J(Re($(x),{replace:!0}))}function z(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let X=typeof W=="function"?W(x):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=$(X):{path:X},X.params={}),Re({query:x.query,hash:x.hash,params:X.path!=null?{}:x.params},X)}}function b(x,Y){const W=h=B(x),X=l.value,me=x.state,Pe=x.force,y=x.replace===!0,T=z(W);if(T)return b(Re($(T),{state:typeof T=="object"?Re({},me,T.state):me,force:Pe,replace:y}),Y||W);const k=W;k.redirectedFrom=Y;let V;return!Pe&&yA(r,X,W)&&(V=ls(16,{to:k,from:X}),Dt(X,X,!0,!1)),(V?Promise.resolve(V):I(k,X)).catch(D=>pn(D)?pn(D,2)?D:Bt(D):fe(D,k,X)).then(D=>{if(D){if(pn(D,2))return b(Re({replace:y},$(D.to),{state:typeof D.to=="object"?Re({},me,D.to.state):me,force:Pe}),Y||k)}else D=A(k,X,!0,y,me);return R(k,X,D),D})}function E(x,Y){const W=L(x,Y);return W?Promise.reject(W):Promise.resolve()}function v(x){const Y=An.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let W;const[X,me,Pe]=nb(x,Y);W=fc(X.reverse(),"beforeRouteLeave",x,Y);for(const T of X)T.leaveGuards.forEach(k=>{W.push(Mn(k,x,Y))});const y=E.bind(null,x,Y);return W.push(y),vt(W).then(()=>{W=[];for(const T of i.list())W.push(Mn(T,x,Y));return W.push(y),vt(W)}).then(()=>{W=fc(me,"beforeRouteUpdate",x,Y);for(const T of me)T.updateGuards.forEach(k=>{W.push(Mn(k,x,Y))});return W.push(y),vt(W)}).then(()=>{W=[];for(const T of Pe)if(T.beforeEnter)if(Gt(T.beforeEnter))for(const k of T.beforeEnter)W.push(Mn(k,x,Y));else W.push(Mn(T.beforeEnter,x,Y));return W.push(y),vt(W)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),W=fc(Pe,"beforeRouteEnter",x,Y,v),W.push(y),vt(W))).then(()=>{W=[];for(const T of o.list())W.push(Mn(T,x,Y));return W.push(y),vt(W)}).catch(T=>pn(T,8)?T:Promise.reject(T))}function R(x,Y,W){c.list().forEach(X=>v(()=>X(x,Y,W)))}function A(x,Y,W,X,me){const Pe=L(x,Y);if(Pe)return Pe;const y=Y===Dn,T=Wr?history.state:{};W&&(X||y?s.replace(x.fullPath,Re({scroll:y&&T&&T.scroll},me)):s.push(x.fullPath,me)),l.value=x,Dt(x,Y,W,y),Bt()}let w;function Ce(){w||(w=s.listen((x,Y,W)=>{if(!Qt.listening)return;const X=B(x),me=z(X);if(me){b(Re(me,{replace:!0}),X).catch(Zs);return}h=X;const Pe=l.value;Wr&&RA(Ld(Pe.fullPath,W.delta),ga()),I(X,Pe).catch(y=>pn(y,12)?y:pn(y,2)?(b(y.to,X).then(T=>{pn(T,20)&&!W.delta&&W.type===gi.pop&&s.go(-1,!1)}).catch(Zs),Promise.reject()):(W.delta&&s.go(-W.delta,!1),fe(y,X,Pe))).then(y=>{y=y||A(X,Pe,!1),y&&(W.delta&&!pn(y,8)?s.go(-W.delta,!1):W.type===gi.pop&&pn(y,20)&&s.go(-1,!1)),R(X,Pe,y)}).catch(Zs)}))}let Ze=Ms(),Me=Ms(),ge;function fe(x,Y,W){Bt(x);const X=Me.list();return X.length?X.forEach(me=>me(x,Y,W)):console.error(x),Promise.reject(x)}function Rt(){return ge&&l.value!==Dn?Promise.resolve():new Promise((x,Y)=>{Ze.add([x,Y])})}function Bt(x){return ge||(ge=!x,Ce(),Ze.list().forEach(([Y,W])=>x?W(x):Y()),Ze.reset()),x}function Dt(x,Y,W,X){const{scrollBehavior:me}=t;if(!Wr||!me)return Promise.resolve();const Pe=!W&&SA(Ld(x.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return Tl().then(()=>me(x,Y,Pe)).then(y=>y&&bA(y)).catch(y=>fe(y,x,Y))}const Ue=x=>s.go(x);let Fe;const An=new Set,Qt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:B,options:t,push:J,replace:le,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:Rt,install(x){const Y=this;x.component("RouterLink",JA),x.component("RouterView",eb),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(l)}),Wr&&!Fe&&l.value===Dn&&(Fe=!0,J(s.location).catch(me=>{}));const W={};for(const me in Dn)Object.defineProperty(W,me,{get:()=>l.value[me],enumerable:!0});x.provide(ma,Y),x.provide(Wl,op(W)),x.provide(zc,l);const X=x.unmount;An.add(x),x.unmount=function(){An.delete(x),An.size<1&&(h=Dn,w&&w(),w=null,l.value=Dn,Fe=!1,ge=!1),X()}}};function vt(x){return x.reduce((Y,W)=>Y.then(()=>v(W)),Promise.resolve())}return Qt}function nb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>cs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>cs(h,l))||s.push(l))}return[n,r,s]}function Ql(){return Ht(ma)}function rb(t){return Ht(Wl)}var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,cm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function v(){}v.prototype=E.prototype,b.D=E.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(I,R,A){for(var w=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)w[Ce-2]=arguments[Ce];return E.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,v){v||(v=0);var I=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)I[R]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=b.g[0],v=b.g[1],R=b.g[2];var A=b.g[3],w=E+(A^v&(R^A))+I[0]+3614090360&4294967295;E=v+(w<<7&4294967295|w>>>25),w=A+(R^E&(v^R))+I[1]+3905402710&4294967295,A=E+(w<<12&4294967295|w>>>20),w=R+(v^A&(E^v))+I[2]+606105819&4294967295,R=A+(w<<17&4294967295|w>>>15),w=v+(E^R&(A^E))+I[3]+3250441966&4294967295,v=R+(w<<22&4294967295|w>>>10),w=E+(A^v&(R^A))+I[4]+4118548399&4294967295,E=v+(w<<7&4294967295|w>>>25),w=A+(R^E&(v^R))+I[5]+1200080426&4294967295,A=E+(w<<12&4294967295|w>>>20),w=R+(v^A&(E^v))+I[6]+2821735955&4294967295,R=A+(w<<17&4294967295|w>>>15),w=v+(E^R&(A^E))+I[7]+4249261313&4294967295,v=R+(w<<22&4294967295|w>>>10),w=E+(A^v&(R^A))+I[8]+1770035416&4294967295,E=v+(w<<7&4294967295|w>>>25),w=A+(R^E&(v^R))+I[9]+2336552879&4294967295,A=E+(w<<12&4294967295|w>>>20),w=R+(v^A&(E^v))+I[10]+4294925233&4294967295,R=A+(w<<17&4294967295|w>>>15),w=v+(E^R&(A^E))+I[11]+2304563134&4294967295,v=R+(w<<22&4294967295|w>>>10),w=E+(A^v&(R^A))+I[12]+1804603682&4294967295,E=v+(w<<7&4294967295|w>>>25),w=A+(R^E&(v^R))+I[13]+4254626195&4294967295,A=E+(w<<12&4294967295|w>>>20),w=R+(v^A&(E^v))+I[14]+2792965006&4294967295,R=A+(w<<17&4294967295|w>>>15),w=v+(E^R&(A^E))+I[15]+1236535329&4294967295,v=R+(w<<22&4294967295|w>>>10),w=E+(R^A&(v^R))+I[1]+4129170786&4294967295,E=v+(w<<5&4294967295|w>>>27),w=A+(v^R&(E^v))+I[6]+3225465664&4294967295,A=E+(w<<9&4294967295|w>>>23),w=R+(E^v&(A^E))+I[11]+643717713&4294967295,R=A+(w<<14&4294967295|w>>>18),w=v+(A^E&(R^A))+I[0]+3921069994&4294967295,v=R+(w<<20&4294967295|w>>>12),w=E+(R^A&(v^R))+I[5]+3593408605&4294967295,E=v+(w<<5&4294967295|w>>>27),w=A+(v^R&(E^v))+I[10]+38016083&4294967295,A=E+(w<<9&4294967295|w>>>23),w=R+(E^v&(A^E))+I[15]+3634488961&4294967295,R=A+(w<<14&4294967295|w>>>18),w=v+(A^E&(R^A))+I[4]+3889429448&4294967295,v=R+(w<<20&4294967295|w>>>12),w=E+(R^A&(v^R))+I[9]+568446438&4294967295,E=v+(w<<5&4294967295|w>>>27),w=A+(v^R&(E^v))+I[14]+3275163606&4294967295,A=E+(w<<9&4294967295|w>>>23),w=R+(E^v&(A^E))+I[3]+4107603335&4294967295,R=A+(w<<14&4294967295|w>>>18),w=v+(A^E&(R^A))+I[8]+1163531501&4294967295,v=R+(w<<20&4294967295|w>>>12),w=E+(R^A&(v^R))+I[13]+2850285829&4294967295,E=v+(w<<5&4294967295|w>>>27),w=A+(v^R&(E^v))+I[2]+4243563512&4294967295,A=E+(w<<9&4294967295|w>>>23),w=R+(E^v&(A^E))+I[7]+1735328473&4294967295,R=A+(w<<14&4294967295|w>>>18),w=v+(A^E&(R^A))+I[12]+2368359562&4294967295,v=R+(w<<20&4294967295|w>>>12),w=E+(v^R^A)+I[5]+4294588738&4294967295,E=v+(w<<4&4294967295|w>>>28),w=A+(E^v^R)+I[8]+2272392833&4294967295,A=E+(w<<11&4294967295|w>>>21),w=R+(A^E^v)+I[11]+1839030562&4294967295,R=A+(w<<16&4294967295|w>>>16),w=v+(R^A^E)+I[14]+4259657740&4294967295,v=R+(w<<23&4294967295|w>>>9),w=E+(v^R^A)+I[1]+2763975236&4294967295,E=v+(w<<4&4294967295|w>>>28),w=A+(E^v^R)+I[4]+1272893353&4294967295,A=E+(w<<11&4294967295|w>>>21),w=R+(A^E^v)+I[7]+4139469664&4294967295,R=A+(w<<16&4294967295|w>>>16),w=v+(R^A^E)+I[10]+3200236656&4294967295,v=R+(w<<23&4294967295|w>>>9),w=E+(v^R^A)+I[13]+681279174&4294967295,E=v+(w<<4&4294967295|w>>>28),w=A+(E^v^R)+I[0]+3936430074&4294967295,A=E+(w<<11&4294967295|w>>>21),w=R+(A^E^v)+I[3]+3572445317&4294967295,R=A+(w<<16&4294967295|w>>>16),w=v+(R^A^E)+I[6]+76029189&4294967295,v=R+(w<<23&4294967295|w>>>9),w=E+(v^R^A)+I[9]+3654602809&4294967295,E=v+(w<<4&4294967295|w>>>28),w=A+(E^v^R)+I[12]+3873151461&4294967295,A=E+(w<<11&4294967295|w>>>21),w=R+(A^E^v)+I[15]+530742520&4294967295,R=A+(w<<16&4294967295|w>>>16),w=v+(R^A^E)+I[2]+3299628645&4294967295,v=R+(w<<23&4294967295|w>>>9),w=E+(R^(v|~A))+I[0]+4096336452&4294967295,E=v+(w<<6&4294967295|w>>>26),w=A+(v^(E|~R))+I[7]+1126891415&4294967295,A=E+(w<<10&4294967295|w>>>22),w=R+(E^(A|~v))+I[14]+2878612391&4294967295,R=A+(w<<15&4294967295|w>>>17),w=v+(A^(R|~E))+I[5]+4237533241&4294967295,v=R+(w<<21&4294967295|w>>>11),w=E+(R^(v|~A))+I[12]+1700485571&4294967295,E=v+(w<<6&4294967295|w>>>26),w=A+(v^(E|~R))+I[3]+2399980690&4294967295,A=E+(w<<10&4294967295|w>>>22),w=R+(E^(A|~v))+I[10]+4293915773&4294967295,R=A+(w<<15&4294967295|w>>>17),w=v+(A^(R|~E))+I[1]+2240044497&4294967295,v=R+(w<<21&4294967295|w>>>11),w=E+(R^(v|~A))+I[8]+1873313359&4294967295,E=v+(w<<6&4294967295|w>>>26),w=A+(v^(E|~R))+I[15]+4264355552&4294967295,A=E+(w<<10&4294967295|w>>>22),w=R+(E^(A|~v))+I[6]+2734768916&4294967295,R=A+(w<<15&4294967295|w>>>17),w=v+(A^(R|~E))+I[13]+1309151649&4294967295,v=R+(w<<21&4294967295|w>>>11),w=E+(R^(v|~A))+I[4]+4149444226&4294967295,E=v+(w<<6&4294967295|w>>>26),w=A+(v^(E|~R))+I[11]+3174756917&4294967295,A=E+(w<<10&4294967295|w>>>22),w=R+(E^(A|~v))+I[2]+718787259&4294967295,R=A+(w<<15&4294967295|w>>>17),w=v+(A^(R|~E))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var v=E-this.blockSize,I=this.B,R=this.h,A=0;A<E;){if(R==0)for(;A<=v;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<E;)if(I[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,I),R=0;break}}else for(;A<E;)if(I[R++]=b[A++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var v=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.u(b),b=Array(16),E=v=0;4>E;++E)for(var I=0;32>I;I+=8)b[v++]=this.g[E]>>>I&255;return b};function i(b,E){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=E(b)}function o(b,E){this.h=E;for(var v=[],I=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;I&&A==E||(v[R]=A,I=!1)}this.g=v}var c={};function l(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(h(-b));for(var E=[],v=1,I=0;b>=v;I++)E[I]=b/v|0,v*=4294967296;return new o(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return O(d(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(E,8)),I=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),w=parseInt(b.substring(R,R+A),E);8>A?(A=h(Math.pow(E,A)),I=I.j(A).add(h(w))):(I=I.j(v),I=I.add(h(w)))}return I}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var b=0,E=1,v=0;v<this.g.length;v++){var I=this.i(v);b+=(0<=I?I:4294967296+I)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(P(this))return"-"+O(this).toString(b);for(var E=h(Math.pow(b,6)),v=this,I="";;){var R=J(v,E).g;v=B(v,R.j(E));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=R,C(v))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=B(this,b),P(b)?-1:C(b)?0:1};function O(b){for(var E=b.g.length,v=[],I=0;I<E;I++)v[I]=~b.g[I];return new o(v,~b.h).add(m)}t.abs=function(){return P(this)?O(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],I=0,R=0;R<=E;R++){var A=I+(this.i(R)&65535)+(b.i(R)&65535),w=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=w>>>16,A&=65535,w&=65535,v[R]=w<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,E){return b.add(O(E))}t.j=function(b){if(C(this)||C(b))return p;if(P(this))return P(b)?O(this).j(O(b)):O(O(this).j(b));if(P(b))return O(this.j(O(b)));if(0>this.l(_)&&0>b.l(_))return h(this.m()*b.m());for(var E=this.g.length+b.g.length,v=[],I=0;I<2*E;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var A=this.i(I)>>>16,w=this.i(I)&65535,Ce=b.i(R)>>>16,Ze=b.i(R)&65535;v[2*I+2*R]+=w*Ze,$(v,2*I+2*R),v[2*I+2*R+1]+=A*Ze,$(v,2*I+2*R+1),v[2*I+2*R+1]+=w*Ce,$(v,2*I+2*R+1),v[2*I+2*R+2]+=A*Ce,$(v,2*I+2*R+2)}for(I=0;I<E;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=E;I<2*E;I++)v[I]=0;return new o(v,0)};function $(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function L(b,E){this.g=b,this.h=E}function J(b,E){if(C(E))throw Error("division by zero");if(C(b))return new L(p,p);if(P(b))return E=J(O(b),E),new L(O(E.g),O(E.h));if(P(E))return E=J(b,O(E)),new L(O(E.g),E.h);if(30<b.g.length){if(P(b)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=E;0>=I.l(b);)v=le(v),I=le(I);var R=z(v,1),A=z(I,1);for(I=z(I,2),v=z(v,2);!C(I);){var w=A.add(I);0>=w.l(b)&&(R=R.add(v),A=w),I=z(I,1),v=z(v,1)}return E=B(b,R.j(E)),new L(R,E)}for(R=p;0<=b.l(E);){for(v=Math.max(1,Math.floor(b.m()/E.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(v),w=A.j(E);P(w)||0<w.l(b);)v-=I,A=h(v),w=A.j(E);C(A)&&(A=m),R=R.add(A),b=B(b,w)}return new L(R,b)}t.A=function(b){return J(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)&b.i(I);return new o(v,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)|b.i(I);return new o(v,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],I=0;I<E;I++)v[I]=this.i(I)^b.i(I);return new o(v,this.h^b.h)};function le(b){for(var E=b.g.length+1,v=[],I=0;I<E;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(v,b.h)}function z(b,E){var v=E>>5;E%=32;for(var I=b.g.length-v,R=[],A=0;A<I;A++)R[A]=0<E?b.i(A+v)>>>E|b.i(A+v+1)<<32-E:b.i(A+v);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Ir=o}).apply(typeof Yd<"u"?Yd:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lm,um,qs,hm,To,Gc,dm,fm,pm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,N){for(var q=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)q[ke-2]=arguments[ke];return u.prototype[S].apply(g,q)}}function P(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,N=g.length||0;a.length=S+N;for(let q=0;q<N;q++)a[S+q]=g[q]}else a.push(g)}}class B{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function J(a){return J[" "](a),a}J[" "]=function(){};var le=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function z(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function E(a){const u={};for(const f in a)u[f]=a[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let N=0;N<v.length;N++)f=v[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Rt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ce{constructor(){this.h=this.g=null}add(u,f){const g=Ze.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ze=new B(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,Rt=new Ce,Bt=()=>{const a=c.Promise.resolve(void 0);ge=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){A(f)}var u=Ze;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}fe=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Qt(a,u){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(le){e:{try{J(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Qt.aa.h.call(this)}}C(Qt,Fe);var vt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function W(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++Y,this.da=this.fa=!1}function X(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,u,f,g,S){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var q=y(a,u,g,S);return-1<q?(u=a[q],f||(u.fa=!1)):(u=new W(u,this.src,N,!!g,S),u.fa=f,a.push(u)),u};function Pe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=S)&&Array.prototype.splice.call(g,S,1),N&&(X(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,g){for(var S=0;S<a.length;++S){var N=a[S];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==g)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),k={};function V(a,u,f,g,S){if(Array.isArray(u)){for(var N=0;N<u.length;N++)V(a,u[N],f,g,S);return null}return f=te(f),a&&a[x]?a.K(u,f,h(g)?!!g.capture:!!g,S):D(a,u,f,!1,g,S)}function D(a,u,f,g,S,N){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,ke=Q(a);if(ke||(a[T]=ke=new me(a)),f=ke.add(u,f,g,q,N),f.proxy)return f;if(g=F(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)An||(S=q),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(K(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function G(a,u,f,g,S){if(Array.isArray(u))for(var N=0;N<u.length;N++)G(a,u[N],f,g,S);else g=h(g)?!!g.capture:!!g,f=te(f),a&&a[x]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=y(N,f,g,S),-1<f&&(X(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,g,S)),(f=-1<a?u[a]:null)&&j(f))}function j(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[x])Pe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(K(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Q(u))?(Pe(f,a),f.h==0&&(f.src=null,u[T]=null)):X(a)}}}function K(a){return a in k?k[a]:k[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Qt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&j(a),a=f.call(g,u)}return a}function Q(a){return a=a[T],a instanceof me?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function ee(){Ue.call(this),this.i=new me(this),this.M=this,this.F=null}C(ee,Ue),ee.prototype[x]=!0,ee.prototype.removeEventListener=function(a,u,f,g){G(this,a,u,f,g)};function ie(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Fe(u,a);else if(u instanceof Fe)u.target=u.target||a;else{var S=u;u=new Fe(g,a),I(u,S)}if(S=!0,f)for(var N=f.length-1;0<=N;N--){var q=u.g=f[N];S=Ae(q,g,!0,u)&&S}if(q=u.g=a,S=Ae(q,g,!0,u)&&S,S=Ae(q,g,!1,u)&&S,f)for(N=0;N<f.length;N++)q=u.g=f[N],S=Ae(q,g,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)X(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ae(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,N=0;N<u.length;++N){var q=u[N];if(q&&!q.da&&q.capture==f){var ke=q.listener,et=q.ha||q.src;q.fa&&Pe(a.i,q),S=ke.call(et,g)!==!1&&S}}return S&&!g.defaultPrevented}function ve(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Be(a){a.g=ve(()=>{a.g=null,a.i&&(a.i=!1,Be(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class St extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(a){Ue.call(this),this.h=a,this.g={}}C(xt,Ue);var Ts=[];function bn(a){z(a.g,function(u,f){this.g.hasOwnProperty(f)&&j(u)},a),a.g={}}xt.prototype.N=function(){xt.aa.N.call(this),bn(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=c.JSON.stringify,ft=c.JSON.parse,Vt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function $r(){}$r.prototype.h=null;function Au(a){return a.h||(a.h=a.i())}function bu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){Fe.call(this,"d")}C(Na,Fe);function Da(){Fe.call(this,"c")}C(Da,Fe);var ar={},Ru=null;function Mi(){return Ru=Ru||new ee}ar.La="serverreachability";function Su(a){Fe.call(this,ar.La,a)}C(Su,Fe);function As(a){const u=Mi();ie(u,new Su(u))}ar.STAT_EVENT="statevent";function Cu(a,u){Fe.call(this,ar.STAT_EVENT,a),this.stat=u}C(Cu,Fe);function pt(a){const u=Mi();ie(u,new Cu(u,a))}ar.Ma="timingevent";function Pu(a,u){Fe.call(this,ar.Ma,a),this.size=u}C(Pu,Fe);function bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function x_(a,u,f,g,S,N){a.info(function(){if(a.g)if(N)for(var q="",ke=N.split("&"),et=0;et<ke.length;et++){var Te=ke[et].split("=");if(1<Te.length){var ot=Te[0];Te=Te[1];var at=ot.split("_");q=2<=at.length&&at[1]=="type"?q+(ot+"="+Te+"&"):q+(ot+"=redacted&")}}else q=null;else q=N;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+q})}function V_(a,u,f,g,S,N,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+N+" "+q})}function Br(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+M_(a,f)+(g?" "+g:"")})}function L_(a,u){a.info(function(){return"TIMEOUT: "+u})}Rs.prototype.info=function(){};function M_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var N=S[0];if(N!="noop"&&N!="stop"&&N!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return Fr(f)}catch{return u}}var Ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ku={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xa;function Fi(){}C(Fi,$r),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},xa=new Fi;function Rn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ou}function Ou(){this.i=null,this.g="",this.h=!1}var Nu={},Va={};function La(a,u,f){a.L=1,a.v=qi(dn(u)),a.m=f,a.P=!0,Du(a,null)}function Du(a,u){a.F=Date.now(),$i(a),a.A=dn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Gu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Ou,a.g=hh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new St(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ts[0]=S.toString()),S=Ts);for(var N=0;N<S.length;N++){var q=V(f,S[N],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),As(),x_(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const u=this.M;u&&fn(a)==3?u.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const at=fn(this.g);var u=this.g.Ba();const Hr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||at!=4||u==7||(u==8||0>=Hr?As(3):As(2)),Ma(this);var f=this.g.Z();this.X=f;t:if(xu(this)){var g=eh(this.g);a="";var S=g.length,N=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Ss(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(N&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,V_(this.i,this.u,this.A,this.l,this.R,at,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,et=this.g;if((ke=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ke)){var Te=ke;break t}}Te=null}if(f=Te)Br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ua(this,f);else{this.o=!1,this.s=3,pt(12),cr(this),Ss(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<q.length;)if(jt=U_(this,q),jt==Va){at==4&&(this.s=4,pt(14),f=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Nu){this.s=4,pt(15),Br(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Br(this.i,this.l,jt,null),Ua(this,jt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||q.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)Br(this.i,this.l,q,"[Invalid Chunked Response]"),cr(this),Ss(this);else if(0<q.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ha(ot),ot.M=!0,pt(11))}}else Br(this.i,this.l,q,null),Ua(this,q);at==4&&cr(this),this.o&&!this.J&&(at==4?ah(this.j,this):(this.o=!1,$i(this)))}else ty(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),cr(this),Ss(this)}}}catch{}finally{}};function xu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function U_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Va:(f=Number(u.substring(f,g)),isNaN(f)?Nu:(g+=1,g+f>u.length?Va:(u=u.slice(g,g+f),a.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,cr(this)};function $i(a){a.S=Date.now()+a.I,Vu(a,a.I)}function Vu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=bs(m(a.ba,a),u)}function Ma(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(L_(this.i,this.A),this.L!=2&&(As(),pt(17)),cr(this),this.s=2,Ss(this)):Vu(this,this.S-a)};function Ss(a){a.j.G==0||a.J||ah(a.j,a)}function cr(a){Ma(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,bn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ua(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Fa(f.h,a))){if(!a.K&&Fa(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Wi(f),zi(f);else break e;qa(f),pt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=bs(m(f.Za,f),6e3));if(1>=Uu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ur(f,11)}else if((a.K||f.g==a)&&Wi(f),!$(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const ot=Te[3];ot!=null&&(f.la=ot,f.j.info("VER="+f.la));const at=Te[4];at!=null&&(f.Aa=at,f.j.info("SVER="+f.Aa));const Hr=Te[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(g=1.5*Hr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jt=a.g;if(jt){const Ji=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var N=g.h;N.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&($a(N,N.h),N.h=null))}if(g.D){const Ka=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(g.ya=Ka,De(g.I,g.D,Ka))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=uh(g,g.J?g.ia:null,g.W),q.K){Fu(g.h,q);var ke=q,et=g.L;et&&(ke.I=et),ke.B&&(Ma(ke),$i(ke)),g.g=q}else ih(g);0<f.i.length&&Gi(f)}else Te[0]!="stop"&&Te[0]!="close"||ur(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ur(f,7):ja(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}As(4)}catch{}}var F_=class{constructor(a,u){this.g=a,this.map=u}};function Lu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uu(a){return a.h?1:a.g?a.g.size:0}function Fa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function $a(a,u){a.g?a.g.add(u):a.h=u}function Fu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Lu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $u(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return P(a.i)}function $_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function B_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Bu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=B_(a),g=$_(a),S=g.length,N=0;N<S;N++)u.call(void 0,g[N],f&&f[N],a)}var ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var N=a[f].substring(0,g);S=a[f].substring(g+1)}else N=a[f];u(N,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,Bi(this,a.j),this.o=a.o,this.g=a.g,ji(this,a.s),this.l=a.l;var u=a.i,f=new ks;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),qu(this,f),this.m=a.m}else a&&(u=String(a).match(ju))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Cs(u[2]||""),this.g=Cs(u[3]||"",!0),ji(this,u[4]),this.l=Cs(u[5]||"",!0),qu(this,u[6]||"",!0),this.m=Cs(u[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ps(u,Hu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ps(u,Hu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ps(f,f.charAt(0)=="/"?K_:H_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ps(f,G_)),a.join("")};function dn(a){return new lr(a)}function Bi(a,u,f){a.j=f?Cs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ji(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function qu(a,u,f){u instanceof ks?(a.i=u,W_(a.i,a.h)):(f||(u=Ps(u,z_)),a.i=new ks(u,a.h))}function De(a,u,f){a.i.set(u,f)}function qi(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,q_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hu=/[#\/\?@]/g,H_=/[#\?:]/g,K_=/[#\?]/g,z_=/[#\?@]/g,G_=/#/g;function ks(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sn(a){a.g||(a.g=new Map,a.h=0,a.i&&j_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ks.prototype,t.add=function(a,u){Sn(this),this.i=null,a=jr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Ku(a,u){Sn(a),u=jr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function zu(a,u){return Sn(a),u=jr(a,u),a.g.has(u)}t.forEach=function(a,u){Sn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){Sn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let N=0;N<S.length;N++)f.push(u[g])}return f},t.V=function(a){Sn(this);let u=[];if(typeof a=="string")zu(this,a)&&(u=u.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Sn(this),this.i=null,a=jr(this,a),zu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Gu(a,u,f){Ku(a,u),0<f.length&&(a.i=null,a.g.set(jr(a,u),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const N=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var S=N;q[g]!==""&&(S+="="+encodeURIComponent(String(q[g]))),a.push(S)}}return this.i=a.join("&")};function jr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function W_(a,u){u&&!a.j&&(Sn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Ku(this,g),Gu(this,S,f))},a)),a.j=u}function Q_(a,u){const f=new Rs;if(c.Image){const g=new Image;g.onload=_(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=_(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Cn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function J_(a,u){const f=new Rs,g=new AbortController,S=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(S),N.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Cn(f,"TestPingServer: error",!1,u)})}function Cn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Y_(){this.g=new Vt}function X_(a,u,f){const g=f||"";try{Bu(a,function(S,N){let q=S;h(S)&&(q=Fr(S)),u.push(g+N+"="+encodeURIComponent(q))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Os(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Os,$r),Os.prototype.g=function(){return new Hi(this.l,this.j)},Os.prototype.i=function(a){return function(){return a}}({});function Hi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Hi,ee),t=Hi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ns(this):Ds(this),this.readyState==3&&Wu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ns(this))},t.Qa=function(a){this.g&&(this.response=a,Ns(this))},t.ga=function(){this.g&&Ns(this)};function Ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qu(a){let u="";return z(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ba(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Qu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):De(a,u,f))}function $e(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C($e,ee);var Z_=/^https?$/i,ey=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xa.g(),this.v=this.o?Au(this.o):Au(xa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){Ju(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ey,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,q]of f)this.g.setRequestHeader(N,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zu(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ju(this,N)}};function Ju(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Yu(a),Ki(a)}function Yu(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xu(this):this.bb())},t.bb=function(){Xu(this)};function Xu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)ve(a.Ea,0,a);else if(ie(a,"readystatechange"),fn(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var S=String(a.D).match(ju)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Z_.test(S?S.toLowerCase():"")}f=g}if(f)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var N=2<fn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Yu(a)}}finally{Ki(a)}}}}function Ki(a,u){if(a.g){Zu(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{f.onreadystatechange=g}catch{}}}function Zu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ft(u)}};function eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ty(a){const u={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if($(a[g]))continue;var f=R(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[S]||[];u[S]=N,N.push(f)}b(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function th(a){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,a),this.cb=xs("retryDelaySeedMs",1e4,a),this.Wa=xs("forwardChannelMaxRetries",2,a),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lu(a&&a.concurrentRequestLimit),this.Da=new Y_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=th.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){pt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=uh(this,null,this.W),Gi(this)};function ja(a){if(nh(a),a.G==3){var u=a.U++,f=dn(a.I);if(De(f,"SID",a.K),De(f,"RID",u),De(f,"TYPE","terminate"),Vs(a,f),u=new Rn(a,a.j,u),u.L=2,u.v=qi(dn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=hh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}lh(a)}function zi(a){a.g&&(Ha(a),a.g.cancel(),a.g=null)}function nh(a){zi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Wi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Gi(a){if(!Mu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ge||Bt(),fe||(ge(),fe=!0),Rt.add(u,a),a.B=0}}function ny(a,u){return Uu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=bs(m(a.Ga,a,u),ch(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Rn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=E(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(S.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=sh(this,S,u),f=dn(this.I),De(f,"RID",a),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),Vs(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(Qu(N)))+"&"+u:this.m&&Ba(f,this.m,N)),$a(this.h,S),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",u),De(f,"SID","null"),S.T=!0,La(S,f,null)):La(S,f,u),this.G=2}}else this.G==3&&(a?rh(this,a):this.i.length==0||Mu(this.h)||rh(this))};function rh(a,u){var f;u?f=u.l:f=a.U++;const g=dn(a.I);De(g,"SID",a.K),De(g,"RID",f),De(g,"AID",a.T),Vs(a,g),a.m&&a.o&&Ba(g,a.m,a.o),f=new Rn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=sh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$a(a.h,f),La(f,g,u)}function Vs(a,u){a.H&&z(a.H,function(f,g){De(u,g,f)}),a.l&&Bu({},function(f,g){De(u,g,f)})}function sh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let N=-1;for(;;){const q=["count="+f];N==-1?0<f?(N=S[0].g,q.push("ofs="+N)):N=0:q.push("ofs="+N);let ke=!0;for(let et=0;et<f;et++){let Te=S[et].g;const ot=S[et].map;if(Te-=N,0>Te)N=Math.max(0,S[et].g-100),ke=!1;else try{X_(ot,q,"req"+Te+"_")}catch{g&&g(ot)}}if(ke){g=q.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function ih(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ge||Bt(),fe||(ge(),fe=!0),Rt.add(u,a),a.v=0}}function qa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=bs(m(a.Fa,a),ch(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),zi(this),oh(this))};function Ha(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function oh(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=dn(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),Vs(a,u),a.m&&a.o&&Ba(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=qi(dn(u)),f.m=null,f.P=!0,Du(f,a)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),qa(this),pt(19))};function Wi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ah(a,u){var f=null;if(a.g==u){Wi(a),Ha(a),a.g=null;var g=2}else if(Fa(a.h,u))f=u.D,Fu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=Mi(),ie(g,new Pu(g,f)),Gi(a)}else ih(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&ny(a,u)||g==2&&qa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:ur(a,5);break;case 4:ur(a,10);break;case 3:ur(a,6);break;default:ur(a,2)}}}function ch(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ur(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bi(g,"https"),qi(g),S?Q_(g.toString(),f):J_(g.toString(),f)}else pt(2);a.G=0,a.l&&a.l.sa(u),lh(a),nh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function lh(a){if(a.G=0,a.ka=[],a.l){const u=$u(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function uh(a,u,f){var g=f instanceof lr?dn(f):new lr(f);if(g.g!="")u&&(g.g=u+"."+g.g),ji(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var N=new lr(null);g&&Bi(N,g),u&&(N.g=u),S&&ji(N,S),f&&(N.l=f),g=N}return f=a.D,u=a.ya,f&&u&&De(g,f,u),De(g,"VER",a.la),Vs(a,g),g}function hh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new Os({eb:f})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}t=dh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){ee.call(this),this.g=new th(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new qr(this)}C(Ct,ee),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ja(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fr(a),a=f);u.i.push(new F_(u.Ya++,a)),u.G==3&&Gi(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Ct.aa.N.call(this)};function fh(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(fh,Na);function ph(){Da.call(this),this.status=1}C(ph,Da);function qr(a){this.g=a}C(qr,dh),qr.prototype.ua=function(){ie(this.g,"a")},qr.prototype.ta=function(a){ie(this.g,new fh(a))},qr.prototype.sa=function(a){ie(this.g,new ph)},qr.prototype.ra=function(){ie(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,pm=function(){return new Qi},fm=function(){return Mi()},dm=ar,Gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,To=Ui,ku.COMPLETE="complete",hm=ku,bu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",ee.prototype.listen=ee.prototype.K,qs=bu,um=Os,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,lm=$e}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Xd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new xl("@firebase/firestore");function Us(){return Or.logLevel}function Z(t,...e){if(Or.logLevel<=pe.DEBUG){const n=e.map(Jl);Or.debug(`Firestore (${ys}): ${t}`,...n)}}function Tn(t,...e){if(Or.logLevel<=pe.ERROR){const n=e.map(Jl);Or.error(`Firestore (${ys}): ${t}`,...n)}}function us(t,...e){if(Or.logLevel<=pe.WARN){const n=e.map(Jl);Or.warn(`Firestore (${ys}): ${t}`,...n)}}function Jl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Ke(t,e){t||de()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class ib{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ob{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new gm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new lt(e)}}class ab{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ab(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ub{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Tt(0,0))}static max(){return new he(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends mi{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const db=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends mi{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return db.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Le.fromString(e))}static fromName(e){return new ae(Le.fromString(e).popFirst(5))}static empty(){return new ae(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Le(e.slice()))}}function fb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new er(s,ae.empty(),e)}function pb(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(he.min(),ae.empty(),-1)}static max(){return new er(he.max(),ae.empty(),-1)}}function gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==mb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function yb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xl.oe=-1;function _a(t){return t==null}function Wc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ya(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ef(this.data.getIterator())}getIteratorFrom(e){return new ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new qn([])}unionWith(e){let n=new rt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _m("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=Eb.exec(t);if(Ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eu(t){const e=t.mapValue.fields.__previous_value__;return Zl(e)?eu(e):e}function _i(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zl(t)?4:Tb(t)?9007199254740991:10:de()}function ln(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=tr(s.timestampValue),c=tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?Wc(o)===Wc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Zd(o)!==Zd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ln(o[l],c[l])))return!1;return!0}(t,e);default:return de()}}function vi(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return tf(t.timestampValue,e.timestampValue);case 4:return tf(_i(t),_i(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Nr(i),l=Nr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=be(c[h],l[h]);if(d!==0)return d}return be(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=be(He(i.latitude),He(o.latitude));return c!==0?c:be(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=ds(c[h],l[h]);if(d)return d}return be(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ao.mapValue&&o===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(o===ao.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=be(l[p],d[p]);if(m!==0)return m;const _=ds(c[l[p]],h[d[p]]);if(_!==0)return _}return be(l.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function tf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=tr(t),r=tr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function fs(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qc(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Jc(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pc(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ya(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ti(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];pc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ya(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(ti(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,he.min(),he.min(),he.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,he.min(),he.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,he.min(),he.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{}class Ge extends ym{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bb(e,n,r):n==="array-contains"?new Cb(e,r):n==="in"?new Pb(e,r):n==="not-in"?new kb(e,r):n==="array-contains-any"?new Ob(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rb(e,r):new Sb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ds(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends ym{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return vm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vm(t){return t.op==="and"}function Em(t){return Ab(t)&&vm(t)}function Ab(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Yc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(Em(t))return t.filters.map(e=>Yc(e)).join(",");{const e=t.filters.map(n=>Yc(n)).join(",");return`${t.op}(${e})`}}function wm(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&wm(o,s.filters[c]),!0):!1}(t,e):void de()}function Tm(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(Tm).join(" ,")+"}"}(t):"Filter"}class bb extends Ge{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rb extends Ge{constructor(e,n){super(e,"in",n),this.keys=Im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sb extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class Cb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&vi(n.arrayValue,this.value)}}class Pb extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vi(this.value.arrayValue,n)}}class kb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vi(this.value.arrayValue,n)}}class Ob extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function af(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Nb(t,e,n,r,s,i,o)}function nu(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fs(r)).join(",")),e.ue=n}return e.ue}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function Xc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Db(t,e,n,r,s,i,o,c){return new va(t,e,n,r,s,i,o,c)}function su(t){return new va(t)}function cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xb(t){return t.collectionGroup!==null}function ni(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new rt(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Bo(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new Bo(yt.keyField(),r))}return e.ce}function sn(t){const e=ye(t);return e.le||(e.le=Vb(e,ni(t))),e.le}function Vb(t,e){if(t.limitType==="F")return af(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bo(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return af(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zc(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ea(t,e){return ru(sn(t),sn(e))&&t.limitType===e.limitType}function Am(t){return`${nu(sn(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tm(s)).join(", ")}]`),_a(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fs(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=sf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,c,l){const h=sf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ni(r),s))}(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bm(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=Mb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Mb(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ds(l,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ya(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new je(ae.comparator);function nr(){return Ub}const Rm=new je(ae.comparator);function Hs(...t){let e=Rm;for(const n of t)e=e.insert(n.key,n);return e}function Fb(t){let e=Rm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return ri()}function Sm(){return ri()}function ri(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $b=new rt(ae.comparator);function we(...t){let e=$b;for(const n of t)e=e.add(n);return e}const Bb=new rt(be);function jb(){return Bb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function Hb(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this._=void 0}}function Kb(t,e,n){return t instanceof el?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zl(i)&&(i=eu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof jo?Cm(t,e):t instanceof qo?Pm(t,e):function(s,i){const o=Gb(s,i),c=lf(o)+lf(s.Pe);return Jc(o)&&Jc(s.Pe)?Hb(c):qb(s.serializer,c)}(t,e)}function zb(t,e,n){return t instanceof jo?Cm(t,e):t instanceof qo?Pm(t,e):n}function Gb(t,e){return t instanceof tl?function(r){return Jc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class el extends Ta{}class jo extends Ta{constructor(e){super(),this.elements=e}}function Cm(t,e){const n=km(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class qo extends Ta{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=km(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class tl extends Ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lf(t){return He(t.integerValue||t.doubleValue)}function km(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof jo&&s instanceof jo||r instanceof qo&&s instanceof qo?hs(r.elements,s.elements,ln):r instanceof tl&&s instanceof tl?ln(r.Pe,s.Pe):r instanceof el&&s instanceof el}(t.transform,e.transform)}class Ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ar}static exists(e){return new Ar(void 0,e)}static updateTime(e){return new Ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function Om(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jb(t.key,Ar.none()):new ou(t.key,t.data,Ar.none());{const n=t.data,r=Zt.empty();let s=new rt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ia(t.key,r,new qn(s.toArray()),Ar.none())}}function Qb(t,e,n){t instanceof ou?function(s,i,o){const c=s.value.clone(),l=hf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ia?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=hf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Nm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof ou?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=i.value.clone(),d=df(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ia?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=df(i.fieldTransforms,l,o),d=o.data;return d.setAll(Nm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hs(r,s,(i,o)=>Wb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends iu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ia extends iu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hf(t,e,n){const r=new Map;Ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,zb(o,c,n[s]))}return r}function df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Kb(i,o,e))}return r}class Jb extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Om(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>uf(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>uf(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,_e;function Dm(t){if(t===void 0)return Tn("GRPC error has no .code"),H.UNKNOWN;switch(t){case qe.OK:return H.OK;case qe.CANCELLED:return H.CANCELLED;case qe.UNKNOWN:return H.UNKNOWN;case qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case qe.INTERNAL:return H.INTERNAL;case qe.UNAVAILABLE:return H.UNAVAILABLE;case qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case qe.NOT_FOUND:return H.NOT_FOUND;case qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case qe.ABORTED:return H.ABORTED;case qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case qe.DATA_LOSS:return H.DATA_LOSS;default:return de()}}(_e=qe||(qe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Ir([4294967295,4294967295],0);function ff(t){const e=eR().encode(t),n=new cm;return n.update(e),new Uint8Array(n.digest())}function pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ir.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(tR)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ff(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=ff(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Aa(he.min(),s,new je(be),nr(),we())}}class xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xi(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class xm{constructor(e,n){this.targetId=e,this.me=n}}class Vm{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gf{constructor(){this.fe=0,this.ge=_f(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new xi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=_f()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nR{constructor(e){this.Le=e,this.Be=new Map,this.ke=nr(),this.qe=mf(),this.Qe=new je(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Xc(i))if(r===0){const o=new ae(i.path);this.Ue(n,o,ht.newNoDocument(o,he.min()))}else Ke(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Nr(r).toUint8Array()}catch(l){if(l instanceof _m)return us("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new au(o,s,i)}catch(l){return us(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Xc(c.target)){const l=new ae(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ht.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=we();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Aa(e,n,this.Qe,this.ke,r);return this.ke=nr(),this.qe=mf(),this.Qe=new je(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mf(){return new je(ae.comparator)}function _f(){return new je(ae.comparator)}const rR={asc:"ASCENDING",desc:"DESCENDING"},sR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iR={and:"AND",or:"OR"};class oR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nl(t,e){return t.useProto3Json||_a(e)?e:{value:e}}function aR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function is(t){return Ke(!!t),he.fromTimestamp(function(n){const r=tr(n);return new Tt(r.seconds,r.nanos)}(t))}function lR(t,e){return rl(t,e).canonicalString()}function rl(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lm(t){const e=Le.fromString(t);return Ke(Bm(e)),e}function gc(t,e){const n=Lm(e);if(n.get(1)!==t.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Um(n))}function Mm(t,e){return lR(t.databaseId,e)}function uR(t){const e=Lm(t);return e.length===4?Le.emptyPath():Um(e)}function yf(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Um(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ke(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(Ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?H.UNKNOWN:Dm(h.code);return new se(d,h.message||"")}(o);n=new Vm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gc(t,r.document.name),i=is(r.document.updateTime),o=r.document.createTime?is(r.document.createTime):he.min(),c=new Zt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ao(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gc(t,r.document),i=r.readTime?is(r.readTime):he.min(),o=ht.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gc(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Zb(s,i),c=r.targetId;n=new xm(c,o)}}return n}function dR(t,e){return{documents:[Mm(t,e.path)]}}function fR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mm(t,s);const i=function(h){if(h.length!==0)return $m(un.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Jr(m.field),direction:mR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=nl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function pR(t){let e=uR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ke(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Fm(p);return m instanceof un&&Em(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Bo(Yr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,_a(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new $o(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new $o(_,m)}(n.endAt)),Db(e,s,o,i,c,"F",l,h)}function gR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function mR(t){return rR[t]}function _R(t){return sR[t]}function yR(t){return iR[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return yt.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof Ge?function(n){if(n.op==="=="){if(rf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(nf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(nf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:_R(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:yR(n.op),filters:r}}}(t):de()}function Bm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,s,i=he.min(),o=he.min(),c=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.ct=e}}function ER(t){const e=pR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.an=new TR}addToCollectionParentIndex(e,n){return this.an.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(er.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class TR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new ps(0)}static Bn(){return new ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,qn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=nr();const o=ri(),c=function(){return ri()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ia)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),si(d.mutation,h,d.mutation.getFieldMask(),Tt.now())):o.set(h.key,qn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new AR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new je((o,c)=>o-c),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||qn.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Sm();d.forEach(m=>{if(!i.has(m)){const _=Om(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(yr());let c=-1,l=i;return o.next(h=>M.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,we())).next(d=>({batchId:c,changes:Fb(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,m){return new va(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let c=Hs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&si(d.mutation,h,qn.empty(),Tt.now()),wa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return M.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:is(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:ER(s.bundledQuery),readTime:is(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.overlays=new je(ae.comparator),this.Pr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=yr(),i=n.length+1,o=new ae(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=yr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return M.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xb(n,r));let i=this.Pr.get(n);i===void 0&&(i=we(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Ir=new rt(We.Tr),this.Er=new rt(We.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new We(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new We(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ae(new Le([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Er.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ae(new Le([])),r=new We(n,e),s=new We(n,e+1);let i=we();return this.Er.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ae.comparator(e.key,n.key)||be(e.yr,n.yr)}static dr(e,n){return be(e.yr,n.yr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new rt(We.Tr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Sr=this.Sr.add(new We(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const c=this.br(o.yr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(be);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],c=>{r=r.add(c.yr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new We(new ae(i),0);let c=new rt(be);return this.Sr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.yr)),!0)},o),M.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ke(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return M.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new We(n,0),s=this.Sr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.Fr=e,this.docs=function(){return new je(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=nr();const o=n.path,c=new ae(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||gb(pb(d),r)<=0||(s.has(d.key)||wa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Mr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OR(this)}getSize(e){return M.resolve(this.size)}}class OR extends IR{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.persistence=e,this.Or=new vs(n=>nu(n),ru),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new cu,this.targetCount=0,this.Br=ps.Ln()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),M.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Qn(n),M.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.kr={},this.overlays={},this.qr=new Xl(0),this.Qr=!1,this.Qr=!0,this.Kr=new CR,this.referenceDelegate=e(this),this.$r=new NR(this),this.indexManager=new wR,this.remoteDocumentCache=function(s){return new kR(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new vR(n),this.Wr=new RR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new PR(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new xR(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(i=>this.referenceDelegate.zr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}jr(e,n){return M.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class xR extends _b{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Hr=new cu,this.Jr=null}static Yr(e){return new lu(e)}get Zr(){if(this.Jr)return this.Jr;throw de()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Zr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Zr,r=>{const s=ae.fromPath(r);return this.Xr(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return M.or([()=>M.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=s}static Ui(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Tw()?8:yb(st())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Yi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new VR;return this.Zi(e,n,o).next(c=>{if(i.result=c,this.Gi)return this.Xi(e,n,o,c.size)})}).next(()=>i.result)}Xi(e,n,r,s){return r.documentReadCount<this.zi?(Us()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),M.resolve()):(Us()<=pe.DEBUG&&Z("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(Us()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):M.resolve())}Ji(e,n){if(cf(n))return M.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zc(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Hi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.es(n,c);return this.ts(n,h,o,l.readTime)?this.Ji(e,Zc(n,null,"F")):this.ns(e,h,n,l)}))})))}Yi(e,n,r,s){return cf(n)||s.isEqual(he.min())?M.resolve(null):this.Hi.getDocuments(e,r).next(i=>{const o=this.es(n,i);return this.ts(n,o,r,s)?M.resolve(null):(Us()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.ns(e,o,n,fb(s,-1)).next(c=>c))})}es(e,n){let r=new rt(bm(e));return n.forEach((s,i)=>{wa(e,i)&&(r=r.add(i))}),r}ts(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zi(e,n,r){return Us()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.Hi.getDocumentsMatchingQuery(e,n,er.min(),r)}ns(e,n,r,s){return this.Hi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,s){this.persistence=e,this.rs=n,this.serializer=s,this.ss=new je(be),this.os=new vs(i=>nu(i),ru),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function UR(t,e,n,r){return new MR(t,e,n,r)}async function jm(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=we();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function qm(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function FR(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.us.newChangeBuffer({trackRemovals:!0});s=n.ss;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.$r.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.$r.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,O,B){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,_,d)&&c.push(n.$r.updateTargetData(i,_))});let l=nr(),h=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push($R(i,o,e.documentUpdates).next(d=>{l=d.hs,h=d.Ps})),!r.isEqual(he.min())){const d=n.$r.getLastRemoteSnapshotVersion(i).next(p=>n.$r.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ss=s,i))}function $R(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=nr();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{hs:o,Ps:s}})}function BR(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.$r.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.$r.allocateTargetId(r).next(o=>(s=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function sl(t,e,n){const r=ye(t),s=r.ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(s.target)}function vf(t,e,n){const r=ye(t);let s=he.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ye(l),m=p.os.get(d);return m!==void 0?M.resolve(p.ss.get(m)):p.$r.getTargetData(h,d)}(r,o,sn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:we())).next(c=>(jR(r,Lb(e),c),{documents:c,Is:i})))}function jR(t,e,n){let r=t._s.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t._s.set(e,r)}class Ef{constructor(){this.activeTargetIds=jb()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.io=new Ef,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Ef,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function mc(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class GR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get vo(){return!1}Fo(n,r,s,i,o){const c=mc(),l=this.Mo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,i,o),this.Oo(n,l,h,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw us("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}No(n,r,s,i,o,c){return this.Fo(n,r,s,i,o)}xo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Mo(n,r){const s=KR[n];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,s){const i=mc();return new Promise((o,c)=>{const l=new lm;l.setWithCredentials(!0),l.listenOnce(hm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case To.NO_ERROR:const d=l.getResponseJson();Z(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case To.TIMEOUT:Z(ct,`RPC '${e}' ${i} timed out`),c(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const p=l.getStatus();if(Z(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(O){const B=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(B)>=0?B:H.UNKNOWN}(_.status);c(new se(C,_.message))}else c(new se(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new se(H.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(ct,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Lo(e,n,r){const s=mc(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pm(),c=fm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new um({})),this.xo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Z(ct,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const C=new zR({Po:O=>{_?Z(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ct,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Io:()=>p.close()}),P=(O,B,$)=>{O.listen(B,L=>{try{$(L)}catch(J){setTimeout(()=>{throw J},0)}})};return P(p,qs.EventType.OPEN,()=>{_||(Z(ct,`RPC '${e}' stream ${s} transport opened.`),C.po())}),P(p,qs.EventType.CLOSE,()=>{_||(_=!0,Z(ct,`RPC '${e}' stream ${s} transport closed`),C.wo())}),P(p,qs.EventType.ERROR,O=>{_||(_=!0,us(ct,`RPC '${e}' stream ${s} transport errored:`,O),C.wo(new se(H.UNAVAILABLE,"The operation could not be completed")))}),P(p,qs.EventType.MESSAGE,O=>{var B;if(!_){const $=O.data[0];Ke(!!$);const L=$,J=L.error||((B=L[0])===null||B===void 0?void 0:B.error);if(J){Z(ct,`RPC '${e}' stream ${s} received error:`,J);const le=J.status;let z=function(v){const I=qe[v];if(I!==void 0)return Dm(I)}(le),b=J.message;z===void 0&&(z=H.INTERNAL,b="Unknown error status: "+le+" with message "+J.message),_=!0,C.wo(new se(z,b)),p.close()}else Z(ct,`RPC '${e}' stream ${s} received:`,$),C.So($)}}),P(c,dm.STAT_EVENT,O=>{O.stat===Gc.PROXY?Z(ct,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Gc.NOPROXY&&Z(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.yo()},0),C}}function _c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){return new oR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=s,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s,i,o,c,l){this.ai=e,this.jo=r,this.Ho=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Km(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===n&&this.h_(r,s)},r=>{e(()=>{const s=new se(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QR extends WR{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=hR(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?is(o.readTime):he.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=yf(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Xc(l)?{documents:dR(i,l)}:{query:fR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=cR(i,o.resumeToken);const h=nl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=aR(i,o.snapshotVersion.toTimestamp());const h=nl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=gR(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=yf(this.serializer),n.removeTarget=e,this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,rl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(H.UNKNOWN,i.toString())})}No(e,n,r,s,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.No(e,rl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(H.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class YR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Tn(n),this.b_=!1):Z("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Li(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ye(l);h.N_.add(4),await Vi(h),h.k_.set("Unknown"),h.N_.delete(4),await ba(h)}(this))})}),this.k_=new YR(r,s)}}async function ba(t){if(Li(t))for(const e of t.L_)await e(!0)}async function Vi(t){for(const e of t.L_)await e(!1)}function zm(t,e){const n=ye(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),pu(n)?fu(n):Es(n).n_()&&du(n,e))}function hu(t,e){const n=ye(t),r=Es(n);n.O_.delete(e),r.n_()&&Gm(n,e),n.O_.size===0&&(r.n_()?r.s_():Li(n)&&n.k_.set("Unknown"))}function du(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).d_(e)}function Gm(t,e){t.q_.xe(e),Es(t).A_(e)}function fu(t){t.q_=new nR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.k_.D_()}function pu(t){return Li(t)&&!Es(t).t_()&&t.O_.size>0}function Li(t){return ye(t).N_.size===0}function Wm(t){t.q_=void 0}async function ZR(t){t.k_.set("Online")}async function eS(t){t.O_.forEach((e,n)=>{du(t,e)})}async function tS(t,e){Wm(t),pu(t)?(t.k_.F_(e),fu(t)):t.k_.set("Unknown")}async function nS(t,e,n){if(t.k_.set("Online"),e instanceof Vm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.O_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.O_.delete(c),s.q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tf(t,r)}else if(e instanceof Ao?t.q_.Ke(e):e instanceof xm?t.q_.He(e):t.q_.We(e),!n.isEqual(he.min()))try{const r=await qm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.O_.get(h);d&&i.O_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.O_.get(l);if(!d)return;i.O_.set(l,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),Gm(i,l);const p=new Hn(d.target,l,h,d.sequenceNumber);du(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Tf(t,r)}}async function Tf(t,e,n){if(!Di(e))throw e;t.N_.add(1),await Vi(t),t.k_.set("Offline"),n||(n=()=>qm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await ba(t)})}async function If(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Li(n);n.N_.add(3),await Vi(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await ba(n)}async function rS(t,e){const n=ye(t);e?(n.N_.delete(2),await ba(n)):e||(n.N_.add(2),await Vi(n),n.k_.set("Unknown"))}function Es(t){return t.Q_||(t.Q_=function(n,r,s){const i=ye(n);return i.y_(),new QR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:ZR.bind(null,t),Ao:eS.bind(null,t),Vo:tS.bind(null,t),E_:nS.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),pu(t)?fu(t):t.k_.set("Unknown")):(await t.Q_.stop(),Wm(t))})),t.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new gu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Di(t))return new se(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.U_=new je(ae.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):de():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new gs(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class iS{constructor(){this.queries=bf(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=bf(),i.forEach((o,c)=>{for(const l of c.z_)l.onError(r)})})(this,new se(H.ABORTED,"Firestore shutting down"))}}function bf(){return new vs(t=>Am(t),Ea)}async function Jm(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.j_()&&e.H_()&&(r=2):(i=new sS,r=e.H_()?0:1);try{switch(r){case 0:i.G_=await n.onListen(s,!0);break;case 1:i.G_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Qm(o,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.z_.push(e),e.Y_(n.onlineState),i.G_&&e.Z_(i.G_)&&mu(n)}async function Ym(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.z_.indexOf(e);o>=0&&(i.z_.splice(o,1),i.z_.length===0?s=e.H_()?0:1:!i.j_()&&e.H_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oS(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.z_)c.Z_(s)&&(r=!0);o.G_=s}}r&&mu(n)}function aS(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.z_)i.onError(n);r.queries.delete(e)}function mu(t){t.J_.forEach(e=>{e.next()})}var il,Rf;(Rf=il||(il={})).X_="default",Rf.Cache="cache";class Xm{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==il.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class cS{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=we(),this.mutatedKeys=we(),this.da=bm(e),this.Aa=new os(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new Af,s=n?n.Aa:this.Aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=wa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?C!==P&&(r.track({type:3,doc:_}),O=!0):this.fa(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.da(_,l)>0||h&&this.da(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||h)&&(c=!0)),O&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:c,mutatedKeys:i}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,p)=>function(_,C){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return P(_)-P(C)}(d.type,p.type)||this.da(d.doc,p.doc)),this.ga(r),s=s!=null&&s;const c=n&&!s?this.pa():[],l=this.Ea.size===0&&this.current&&!s?1:0,h=l!==this.Ta;return this.Ta=l,o.length!==0||h?{snapshot:new gs(this.query,e.Aa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Af,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=we(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new e_(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new Zm(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=we();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return gs.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class lS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uS{constructor(e){this.key=e,this.Da=!1}}class hS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new vs(c=>Am(c),Ea),this.Fa=new Map,this.Ma=new Set,this.xa=new je(ae.comparator),this.Oa=new Map,this.Na=new cu,this.La={},this.Ba=new Map,this.ka=ps.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function dS(t,e,n=!0){const r=i_(t);let s;const i=r.va.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ba()):s=await t_(r,e,n,!0),s}async function fS(t,e){const n=i_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const s=await BR(t.localStore,sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await pS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zm(t.remoteStore,s),c}async function pS(t,e,n,r,s){t.Qa=(p,m,_)=>async function(P,O,B,$){let L=O.view.Va(B);L.ts&&(L=await vf(P.localStore,O.query,!1).then(({documents:b})=>O.view.Va(b,L)));const J=$&&$.targetChanges.get(O.targetId),le=$&&$.targetMismatches.get(O.targetId)!=null,z=O.view.applyChanges(L,P.isPrimaryClient,J,le);return Cf(P,O.targetId,z.ya),z.snapshot}(t,p,m,_);const i=await vf(t.localStore,e,!0),o=new cS(e,i.Is),c=o.Va(i.documents),l=xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Cf(t,n,h.ya);const d=new lS(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),h.snapshot}async function gS(t,e,n){const r=ye(t),s=r.va.get(e),i=r.Fa.get(s.targetId);if(i.length>1)return r.Fa.set(s.targetId,i.filter(o=>!Ea(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hu(r.remoteStore,s.targetId),ol(r,s.targetId)}).catch(Yl)):(ol(r,s.targetId),await sl(r.localStore,s.targetId,!0))}async function mS(t,e){const n=ye(t),r=n.va.get(e),s=n.Fa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hu(n.remoteStore,r.targetId))}async function n_(t,e){const n=ye(t);try{const r=await FR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Oa.get(i);o&&(Ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Da=!0:s.modifiedDocuments.size>0?Ke(o.Da):s.removedDocuments.size>0&&(Ke(o.Da),o.Da=!1))}),await s_(n,r,e)}catch(r){await Yl(r)}}function Sf(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.va.forEach((i,o)=>{const c=o.view.Y_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ye(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.z_)m.Y_(c)&&(h=!0)}),h&&mu(l)}(r.eventManager,e),s.length&&r.Ca.E_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _S(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Oa.get(e),i=s&&s.key;if(i){let o=new je(ae.comparator);o=o.insert(i,ht.newNoDocument(i,he.min()));const c=we().add(i),l=new Aa(he.min(),new Map,new je(be),o,c);await n_(r,l),r.xa=r.xa.remove(i),r.Oa.delete(e),_u(r)}else await sl(r.localStore,e,!1).then(()=>ol(r,e,n)).catch(Yl)}function ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||r_(t,r)})}function r_(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(hu(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),_u(t))}function Cf(t,e,n){for(const r of n)r instanceof Zm?(t.Na.addReference(r.key,e),yS(t,r)):r instanceof e_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||r_(t,r.key)):de()}function yS(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ma.add(r),_u(t))}function _u(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ae(Le.fromString(e)),r=t.ka.next();t.Oa.set(r,new uS(n)),t.xa=t.xa.insert(n,r),zm(t.remoteStore,new Hn(sn(su(n.path)),r,"TargetPurposeLimboResolution",Xl.oe))}}async function s_(t,e,n){const r=ye(t),s=[],i=[],o=[];r.va.isEmpty()||(r.va.forEach((c,l)=>{o.push(r.Qa(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=uu.Ui(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.E_(s),await async function(l,h){const d=ye(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ki,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.$i,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Di(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.ss.get(m),C=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(C);d.ss=d.ss.insert(m,P)}}}(r.localStore,i))}async function vS(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(i,o){i.Ba.forEach(c=>{c.forEach(l=>{l.reject(new se(H.CANCELLED,o))})}),i.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await s_(n,r.ls)}}function ES(t,e){const n=ye(t),r=n.Oa.get(e);if(r&&r.Da)return we().add(r.key);{let s=we();const i=n.Fa.get(e);if(!i)return s;for(const o of i){const c=n.va.get(o);s=s.unionWith(c.view.Ra)}return s}}function i_(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_S.bind(null,e),e.Ca.E_=oS.bind(null,e.eventManager),e.Ca.Ka=aS.bind(null,e.eventManager),e}class Pf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UR(this.persistence,new LR,e.initialUser,this.serializer)}createPersistence(e){return new DR(lu.Yr,this.serializer)}createSharedClientState(e){return new qR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vS.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iS}()}createDatastore(e){const n=Hm(e.databaseInfo.databaseId),r=function(i){return new GR(i)}(e.databaseInfo);return function(i,o,c,l){return new JR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new XR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Sf(this.syncEngine,n,0),function(){return wf.D()?new wf:new HR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new hS(s,i,o,c,l,h);return d&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);Z("RemoteStore","RemoteStore shutting down."),i.N_.add(5),await Vi(i),i.B_.shutdown(),i.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=mm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>If(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>If(e.remoteStore,s)),t._onlineComponents=e}function IS(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IS(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Pf)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await yc(t,new Pf);return t._offlineComponents}async function bS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await kf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await kf(t,new wS))),t._onlineComponents}async function a_(t){const e=await bS(t),n=e.eventManager;return n.onListen=dS.bind(null,e.syncEngine),n.onUnlisten=gS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mS.bind(null,e.syncEngine),n}function RS(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new o_({next:m=>{o.enqueueAndForget(()=>Ym(i,p));const _=m.docs.has(c);!_&&m.fromCache?h.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?h.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Xm(su(c.path),d,{includeMetadataChanges:!0,oa:!0});return Jm(i,p)}(await a_(t),t.asyncQueue,e,n,r)),r.promise}function SS(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new o_({next:m=>{o.enqueueAndForget(()=>Ym(i,p)),m.fromCache&&l.source==="server"?h.reject(new se(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Xm(c,d,{includeMetadataChanges:!0,oa:!0});return Jm(i,p)}(await a_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e,n){if(!n)throw new se(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CS(t,e,n,r){if(e===!0&&r===!0)throw new se(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nf(t){if(!ae.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Df(t){if(ae.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function PS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PS(t);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sb;switch(r.type){case"firstParty":return new cb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Of.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Of.delete(n),r.terminate())}(this),Promise.resolve()}}function kS(t,e,n,r={}){var s;const i=(t=Ei(t,Ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=lt.MOCK_USER;else{c=hg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(h)}t._authCredentials=new ib(new gm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sa(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class Jn extends Sa{constructor(e,n,r){super(e,n,su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ae(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function u_(t,e,...n){if(t=$t(t),l_("collection","path",e),t instanceof Ra){const r=Le.fromString(e,...n);return Df(r),new Jn(t,null,r)}{if(!(t instanceof on||t instanceof Jn))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Df(r),new Jn(t.firestore,null,r)}}function Ho(t,e,...n){if(t=$t(t),arguments.length===1&&(e=mm.newId()),l_("doc","path",e),t instanceof Ra){const r=Le.fromString(e,...n);return Nf(r),new on(t,null,new ae(r))}{if(!(t instanceof on||t instanceof Jn))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Nf(r),new on(t.firestore,t instanceof Jn?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Km(this,"async_queue_retry"),this.Tu=()=>{const n=_c();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=_c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Qn;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Di(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const s=gu.createAndSchedule(this,e,n,r,i=>this.Ru(i));return this.cu.push(s),s}Eu(){this.lu&&de()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class yu extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new OS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||d_(this),this._firestoreClient.terminate()}}function Ca(t,e){const n=typeof t=="object"?t:Ll(),r=typeof t=="string"?t:"(default)",s=la(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cg("firestore");i&&kS(s,...i)}return s}function h_(t){return t._firestoreClient||d_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function d_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new wb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,c_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new TS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ko(it.fromBase64String(e))}catch(n){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ko(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}const DS=new RegExp("[~\\*/\\[\\]]");function xS(t,e,n){if(e.search(DS)>=0)throw Vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new f_(...e.split("."))._internalPath}catch{throw Vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Vf(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let o="";return new se(H.INVALID_ARGUMENT,i+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(g_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VS extends p_{data(){return super.data()}}function g_(t,e){return typeof e=="string"?xS(t,e):e instanceof f_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MS{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ya(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new NS(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ke(Bm(r));const s=new yi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m_ extends p_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(g_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bo extends m_{data(e={}){return super.data(e)}}class US{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bo(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new zs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new zs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:FS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){t=Ei(t,on);const e=Ei(t.firestore,yu);return RS(h_(e),t._key).then(n=>$S(e,t,n))}class __ extends MS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function y_(t){t=Ei(t,Sa);const e=Ei(t.firestore,yu),n=h_(e),r=new __(e);return LS(t._query),SS(n,t._query).then(s=>new US(e,r,t,s))}function $S(t,e,n){const r=n.docs.get(e._key),s=new __(t);return new m_(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ys=s})(Mr),Cr(new Zn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new yu(new ob(r.getProvider("auth-internal")),new ub(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tn(Xd,"4.6.5",e),tn(Xd,"4.6.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebasestorage.googleapis.com",E_="storageBucket",BS=2*60*1e3,jS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends hn{constructor(e,n,r=0){super(vc(e),`Firebase Storage: ${n} (${vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function vc(t){return"storage/"+t}function w_(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(Ye.UNKNOWN,t)}function qS(t){return new Xe(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HS(t){return new Xe(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Ye.UNAUTHENTICATED,t)}function zS(){return new Xe(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GS(t){return new Xe(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WS(){return new Xe(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QS(){return new Xe(Ye.CANCELED,"User canceled the upload/download.")}function JS(t){return new Xe(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function YS(t){return new Xe(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XS(){return new Xe(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+E_+"' property when initializing the app?")}function ZS(){return new Xe(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function al(t){return new Xe(Ye.INVALID_ARGUMENT,t)}function T_(){return new Xe(Ye.APP_DELETED,"The Firebase app was deleted.")}function eC(t){return new Xe(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fs(t){throw new Xe(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw YS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(J){J.path_=decodeURIComponent(J.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},P=n===v_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",B=new RegExp(`^https?://${P}/${s}/${O}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:h},{regex:B,indices:{bucket:1,path:2},postModify:h}];for(let J=0;J<L.length;J++){const le=L[J],z=le.regex.exec(e);if(z){const b=z[le.indices.bucket];let E=z[le.indices.path];E||(E=""),r=new Nt(b,E),le.postModify(r);break}}if(r==null)throw JS(e);return r}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function m(){i&&clearTimeout(i)}function _(O,...B){if(h){m();return}if(O){m(),d.call(null,O,...B);return}if(l()||o){m(),d.call(null,O,...B);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let C=!1;function P(O){C||(C=!0,m(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function rC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){return t!==void 0}function iC(t){return typeof t=="object"&&!Array.isArray(t)}function I_(t){return typeof t=="string"||t instanceof String}function Lf(t,e,n,r){if(r<e)throw al(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw al(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function b_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(br||(br={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,s,i,o,c,l,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new lo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===br.NO_ERROR,l=i.getStatus();if(!c||oC(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===br.ABORT;r(!1,new lo(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new lo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());sC(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=w_();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?T_():QS();o(l)}else{const l=WS();o(l)}};this.canceled_?n(!1,new lo(!1,null,!0)):this.backoffId_=nC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dC(t,e,n,r,s,i,o=!0){const c=b_(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return uC(h,e),cC(h,n),lC(h,i),hC(h,r),new aC(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){let e;try{e=JSON.parse(t)}catch{return null}return iC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function S_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||gC}}let uo=null;function mC(t){return!I_(t)||t.length<2?t:S_(t)}function _C(){if(uo)return uo;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return mC(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),uo=t,uo}function yC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return yC(r,t),r}function EC(t,e,n){const r=R_(e);return r===null?null:vC(t,r,n)}function wC(t,e,n,r){const s=R_(e);if(s===null||!I_(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),_=A_(m,n,r),C=b_({alt:"media",token:h});return _+C})[0]}class TC{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){if(!t)throw w_()}function AC(t,e){function n(r,s){const i=EC(t,s,e);return IC(i!==null),wC(i,s,t.host,t._protocol)}return n}function bC(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=zS():s=KS():n.getStatus()===402?s=HS(t.bucket):n.getStatus()===403?s=GS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function RC(t){const e=bC(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=qS(t.path)),i.serverResponse=s.serverResponse,i}return n}function SC(t,e,n){const r=e.fullServerUrl(),s=A_(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new TC(s,i,AC(t,n),o);return c.errorHandler=RC(e),c}class CC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Fs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PC extends CC{initXhr(){this.xhr_.responseType="text"}}function kC(){return new PC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return S_(this._location.path)}get storage(){return this._service}get parent(){const e=fC(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eC(e)}}function OC(t){t._throwIfRoot("getDownloadURL");const e=SC(t.storage,t._location,_C());return t.storage.makeRequestWithTokens(e,kC).then(n=>{if(n===null)throw ZS();return n})}function NC(t,e){const n=pC(t._location.path,e),r=new Nt(t._location.bucket,n);return new xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return/^[A-Za-z]+:\/\//.test(t)}function xC(t,e){return new xr(t,e)}function C_(t,e){if(t instanceof vu){const n=t;if(n._bucket==null)throw XS();const r=new xr(n,n._bucket);return e!=null?C_(r,e):r}else return e!==void 0?NC(t,e):t}function VC(t,e){if(e&&DC(e)){if(t instanceof vu)return xC(t,e);throw al("To use ref(service, url), the first argument must be a Storage instance.")}else return C_(t,e)}function Mf(t,e){const n=e==null?void 0:e[E_];return n==null?null:Nt.makeFromBucketSpec(n,t)}function LC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:hg(s,t.app.options.projectId))}class vu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=v_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BS,this._maxUploadRetryTime=jS,this._requests=new Set,s!=null?this._bucket=Nt.makeFromBucketSpec(s,this._host):this._bucket=Mf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=Mf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tC(T_());{const o=dC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Uf="@firebase/storage",Ff="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="storage";function Pa(t){return t=$t(t),OC(t)}function ka(t,e){return t=$t(t),VC(t,e)}function Oa(t=Ll(),e){t=$t(t);const r=la(t,P_).getImmediate({identifier:e}),s=cg("storage");return s&&MC(r,...s),r}function MC(t,e,n,r={}){LC(t,e,n,r)}function UC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vu(n,r,s,e,Mr)}function FC(){Cr(new Zn(P_,UC,"PUBLIC").setMultipleInstances(!0)),tn(Uf,Ff,""),tn(Uf,Ff,"esm2017")}FC();var $C="firebase",BC="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn($C,BC,"app");const Eu={apiKey:"AIzaSyDzVzCFGlNkkc0mdtGZosh7Zg5zDIzEtks",authDomain:"nahkakauppa-74e44.firebaseapp.com",projectId:"nahkakauppa-74e44",storageBucket:"nahkakauppa-74e44.appspot.com",messagingSenderId:"169300472765",appId:"1:169300472765:web:aa3eb5ec4d15d60ddd18d4"},jC=ua(Eu),qC=Ca(jC),ws=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},HC=t=>(Ii("data-v-443e2096"),t=t(),Ai(),t),KC=HC(()=>ne("h2",{class:"products-heading"},"Products",-1)),zC={class:"product-grid"},GC=["src"],WC={class:"product-name"},QC={class:"product-description"},JC={__name:"Products",setup(t){const e=ua(Eu),n=Ca(e),r=Oa(e),s=ut([]),i=async()=>{try{const o=await y_(u_(n,"products")),c=[];for(const l of o.docs){const h=l.data(),d=await Pa(ka(r,h.imagePath));c.push({id:l.id,name:h.name,description:h.description,imageUrl:d})}s.value=c}catch(o){console.error("Error fetching products:",o)}};return bi(()=>{i()}),(o,c)=>{const l=bl("router-link");return Se(),Oe("div",null,[KC,ne("div",zC,[(Se(!0),Oe(_t,null,ci(s.value,h=>(Se(),Oe("div",{key:h.id,class:"product-item"},[Qe(l,{to:{name:"ProductDetails",params:{id:h.id}},class:"product-link"},{default:Al(()=>[ne("img",{src:h.imageUrl,alt:"Product image",class:"product-image"},null,8,GC),ne("h3",WC,Ve(h.name),1)]),_:2},1032,["to"]),ne("div",QC,Ve(h.description),1)]))),128))])])}}},YC=ws(JC,[["__scopeId","data-v-443e2096"]]),XC=Ca(),ZC=Oa(),eP=async t=>{const e=ut(null),n=ut([]),r=ut(null),s=ut(null),i=ut([]),o=Ho(XC,"products",t),c=await zo(o);if(c.exists()){const l=c.data();e.value={...l,id:t};const h=await y_(u_(o,"variations"));if(n.value=h.docs.map(d=>({id:d.id,...d.data()})),n.value.length>0){r.value=n.value[0],s.value=Object.keys(r.value.colors)[0];for(const d in r.value.colors){const p=r.value.colors[d];if(p&&p.imagePath)try{const m=ka(ZC,p.imagePath),_=await Pa(m);console.log(`Fetched image URL for color ${d}:`,_),i.value.push({url:_})}catch(m){console.error(`Error fetching image for color ${d}:`,m)}}}}else console.log("Product not found");return{product:e,variations:n,selectedVariation:r,selectedColor:s,imageUrls:i}},an=ut([]),tP=Oa(),nP=kt(()=>an.value.reduce((t,e)=>t+e.price*e.quantity,0)),rP=async(t,e)=>{try{const n=`${t}_${e}.jpg`,r=ka(tP,`products/colors/${n}`);return await Pa(r)}catch(n){return console.error("Error fetching image for color:",e,n),null}},sP=()=>{const t=JSON.parse(localStorage.getItem("shoppingCart"))||[];an.value=t.map(e=>({...e,price:e.price||0}))},wu=()=>{localStorage.setItem("shoppingCart",JSON.stringify(an.value))},iP=async(t,e)=>{console.log("Fetching price for:",t,e);try{const n=Ho(qC,`products/${t}/variations`,e),r=await zo(n);if(r.exists()){const s=r.data().price;return console.log("Fetched price from Firebase:",s),s}else return console.error("Variation document not found."),0}catch(n){return console.error("Error fetching price:",n),0}},oP=async t=>{const e=await iP(t.id,t.variation.quality),n=an.value.find(r=>r.id===t.id&&r.variation.quality===t.variation.quality&&r.variation.color===t.variation.color);n?n.quantity+=1:an.value.push({...t,price:e,quantity:1}),console.log("Current cart items:",an.value),wu()},k_=t=>{an.value=an.value.filter(e=>!(e.id===t.id&&e.variation.quality===t.variation.quality&&e.variation.color===t.variation.color)),wu()},aP=(t,e)=>{const n=an.value.find(r=>r.id===t.id&&r.variation.quality===t.variation.quality&&r.variation.color===t.variation.color);n&&(n.quantity+=e,n.quantity<=0?k_(t):wu())};function Tu(){return{fetchImageForColor:rP,cartItems:an,loadCart:sP,addToCart:oP,removeFromCart:k_,updateQuantity:aP,totalAmount:nP}}const Iu=t=>(Ii("data-v-d1add733"),t=t(),Ai(),t),cP={key:0,class:"product-details"},lP={class:"product-content"},uP={class:"left-section"},hP={class:"text-3xl font-bold"},dP={class:"description"},fP={class:"mt-4"},pP={class:"right-section"},gP={key:0,class:"variation-selection mt-4"},mP=Iu(()=>ne("label",{for:"variation"},"Choose a variation:",-1)),_P=["value"],yP={key:1,class:"color-selection mt-4"},vP=Iu(()=>ne("label",{for:"color"},"Choose a color:",-1)),EP=["value"],wP={key:2,class:"text-xl font-semibold mt-4"},TP={key:4,class:"popup-alert"},IP={key:1},AP=Iu(()=>ne("p",null,"Loading product details...",-1)),bP=[AP],RP={__name:"ProductDetails",setup(t){const e=ut(null),n=ut([]),r=ut(null),s=ut(null),i=ut([]),o=ut(!1),c=rb(),l=Ql(),h=ut([]),{addToCart:d}=Tu();bi(async()=>{const _=c.params.id,C=await eP(_);e.value=C.product.value,n.value=C.variations.value,r.value=C.selectedVariation.value,s.value=C.selectedColor.value,i.value=C.imageUrls.value,h.value=i.value.map(P=>new Img(P.url)),console.log("All Images loaded for VueFlux:",h.value)});const p=()=>{l.push("/dashboard")},m=async()=>{var _;e.value&&r.value&&s.value&&(await d({id:e.value.id,name:e.value.name,variation:{quality:r.value.id,color:s.value},quantity:1,imageUrl:((_=h.value[0])==null?void 0:_.src)||""}),o.value=!0,setTimeout(()=>{o.value=!1},3e3))};return(_,C)=>e.value?(Se(),Oe("div",cP,[ne("div",{class:"back-button-container"},[ne("button",{class:"back-button",onClick:p},"← Back to Dashboard")]),ne("div",lP,[ne("div",uP,[ne("h1",hP,Ve(e.value.name),1),ne("div",dP,[ne("p",fP,Ve(e.value.description),1)])]),ne("div",pP,[n.value.length>0&&r.value?(Se(),Oe("div",gP,[mP,bh(ne("select",{"onUpdate:modelValue":C[0]||(C[0]=P=>r.value=P),onChange:C[1]||(C[1]=(...P)=>_.updatePriceAndColorOptions&&_.updatePriceAndColorOptions(...P))},[(Se(!0),Oe(_t,null,ci(n.value,P=>(Se(),Oe("option",{key:P.id,value:P},Ve(P.id),9,_P))),128))],544),[[ed,r.value]])])):Gr("",!0),r.value&&r.value.colors?(Se(),Oe("div",yP,[vP,bh(ne("select",{"onUpdate:modelValue":C[2]||(C[2]=P=>s.value=P)},[(Se(!0),Oe(_t,null,ci(Object.keys(r.value.colors),P=>(Se(),Oe("option",{key:P,value:P},Ve(P),9,EP))),128))],512),[[ed,s.value]])])):Gr("",!0),r.value?(Se(),Oe("p",wP,"Price: "+Ve(r.value.price)+" €",1)):Gr("",!0),r.value&&s.value?(Se(),Oe("button",{key:3,class:"add-to-cart-button",onClick:m},"Add to Cart")):Gr("",!0),o.value?(Se(),Oe("div",TP,[ne("p",null,Ve(e.value.name)+" "+Ve(r.value.id)+" ("+Ve(s.value)+") has been added to your cart!",1)])):Gr("",!0)])])])):(Se(),Oe("div",IP,bP))}},SP=ws(RP,[["__scopeId","data-v-d1add733"]]);function CP(t,e){return Se(),Oe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ne("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})])}const O_=t=>(Ii("data-v-26d02062"),t=t(),Ai(),t),PP={class:"checkout"},kP=O_(()=>ne("h1",null,"Checkout",-1)),OP=O_(()=>ne("p",null,"Proceed with your purchase here!",-1)),NP={class:"item-info"},DP=["src"],xP={class:"item-details"},VP={class:"product-name"},LP={class:"product-description"},MP={class:"product-variation"},UP={class:"product-price"},FP={class:"item-actions"},$P={class:"quantity-control"},BP=["onClick"],jP=["onClick"],qP={class:"quantity"},HP=["onClick"],KP={class:"total-amount"},zP={__name:"Checkout",setup(t){const e=ua(Eu),n=Ca(e),r=Oa(e),{cartItems:s,loadCart:i,updateQuantity:o,removeFromCart:c,totalAmount:l}=Tu(),h=Ql(),d=()=>{h.push("/dashboard")},p=async _=>{try{const C=Ho(n,"products",_.id),P=await zo(C);if(P.exists()){const O=P.data();_.name=O.name,_.description=O.description;const B=Ho(n,`products/${_.id}/variations`,_.variation.quality),$=await zo(B);if($.exists()?_.price=$.data().price:console.error("Variation price not found for:",_.variation.quality),O.imagePath){const L=ka(r,O.imagePath);_.imageUrl=await Pa(L)}}else console.log("Product not found:",_.id)}catch(C){console.error("Error fetching product details:",C)}},m=async()=>{const _=s.value.map(C=>p(C));await Promise.all(_)};return bi(()=>{i(),m()}),(_,C)=>(Se(),Oe("div",PP,[ne("div",{class:"back-button-container"},[ne("button",{class:"back-button",onClick:d},"← Back to Dashboard")]),kP,OP,(Se(!0),Oe(_t,null,ci(Mt(s),P=>(Se(),Oe("div",{key:`${P.id}-${P.variation.quality}-${P.variation.color}`,class:"checkout-item"},[ne("div",NP,[ne("img",{src:P.imageUrl,alt:"Product image",class:"product-image"},null,8,DP),ne("div",xP,[ne("h3",VP,Ve(P.name),1),ne("p",LP,Ve(P.description),1),ne("p",MP,"Laatu: "+Ve(P.variation.quality)+", Väri: "+Ve(P.variation.color),1),ne("p",UP,"Hinta: "+Ve(P.price)+" €",1)])]),ne("div",FP,[ne("div",$P,[P.quantity>1?(Se(),Oe("button",{key:0,onClick:O=>Mt(o)(P,-1),class:"quantity-btn"},"-",8,BP)):(Se(),Oe("button",{key:1,onClick:O=>Mt(c)(P),class:"remove-btn"},[Qe(Mt(CP),{class:"h-5 w-5 text-white"})],8,jP)),ne("span",qP,Ve(P.quantity),1),ne("button",{onClick:O=>Mt(o)(P,1),class:"quantity-btn"},"+",8,HP)])])]))),128)),ne("p",KP,"Total: "+Ve(Mt(l))+" €",1)]))}},GP=ws(zP,[["__scopeId","data-v-26d02062"]]),WP=[{path:"/",redirect:"/dashboard"},{path:"/checkout",name:"Checkout",component:GP},{path:"/dashboard",component:YC},{path:"/products/:id",component:SP,name:"ProductDetails",props:!0}],QP=tb({history:OA(),routes:WP}),N_=t=>(Ii("data-v-86d03bdb"),t=t(),Ai(),t),JP=N_(()=>ne("h2",null,"Your Cart",-1)),YP={key:0},XP={class:"cart-items"},ZP=["src"],ek={class:"cart-item-info"},tk={class:"cart-item-name"},nk={class:"cart-item-details"},rk={class:"cart-item-price"},sk={class:"cart-item-quantity"},ik=["onClick"],ok=["onClick"],ak={key:1},ck=N_(()=>ne("p",null,"Your cart is empty.",-1)),lk=[ck],uk={__name:"ShoppingCartPopup",props:{visible:{type:Boolean,required:!0}},emits:["update:visible"],setup(t,{emit:e}){const n=t,r=e,{cartItems:s,loadCart:i,updateQuantity:o,removeFromCart:c}=Tu(),l=()=>{r("update:visible",!1)},h=()=>{l()};wr(()=>n.visible,C=>{C&&i()});const d=kt(()=>{const C={};return s.value.forEach(P=>{const O=`${P.id}-${P.variation.quality}-${P.variation.color}`;C[O]?C[O].quantity+=P.quantity:C[O]={...P}}),Object.values(C)}),p=(C,P)=>{C.quantity+P<=0?c(C):o(C,P)},m=Ql(),_=()=>{l(),m.push({name:"Checkout"})};return(C,P)=>(Se(),jp(kl,{name:"transitionPopUp"},{default:Al(()=>[t.visible?(Se(),Oe("div",{key:0,class:"popup-overlay",onClick:h},[ne("div",{class:"popup-content",onClick:P[0]||(P[0]=kE(()=>{},["stop"]))},[ne("button",{class:"popup-close",onClick:l},"X"),JP,d.value.length>0?(Se(),Oe("div",YP,[ne("ul",XP,[(Se(!0),Oe(_t,null,ci(d.value,(O,B)=>(Se(),Oe("li",{key:B,class:"cart-item"},[ne("img",{src:O.imageUrl,alt:"Product image",class:"cart-item-image"},null,8,ZP),ne("div",ek,[ne("p",tk,Ve(O.quantity)+" x "+Ve(O.name),1),ne("p",nk,"Laatu: "+Ve(O.variation.quality)+", Väri: "+Ve(O.variation.color),1),ne("p",rk,"Hinta: "+Ve(O.price)+" €",1),ne("div",sk,[ne("button",{onClick:$=>p(O,-1)},"-",8,ik),ne("span",null,Ve(O.quantity),1),ne("button",{onClick:$=>p(O,1)},"+",8,ok)])])]))),128))]),ne("button",{class:"checkout-button",onClick:_}," Proceed to Checkout ")])):(Se(),Oe("div",ak,lk))])])):Gr("",!0)]),_:1}))}},hk=ws(uk,[["__scopeId","data-v-86d03bdb"]]),D_=t=>(Ii("data-v-7898f6e8"),t=t(),Ai(),t),dk={class:"min-h-screen bg-gray-50 flex flex-col items-center"},fk={class:"w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8"},pk=D_(()=>ne("h1",{class:"text-3xl font-bold text-gray-900 mb-4"},"Josali",-1)),gk=D_(()=>ne("p",{class:"text-gray-600 mb-6"},"Tervetuloa nahkakaupan u.",-1)),mk={class:"flex justify-end mb-8"},_k={class:"bg-white shadow rounded-lg p-6"},yk={__name:"Dashboard",setup(t){const e=ut(!1),n=()=>{e.value=!0};return(r,s)=>{const i=bl("router-view");return Se(),Oe("div",dk,[ne("div",fk,[pk,gk,ne("div",mk,[ne("button",{onClick:n,class:"bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"}," 🛒 Open Cart "),Qe(hk,{visible:e.value,"onUpdate:visible":s[0]||(s[0]=o=>e.value=o)},null,8,["visible"])]),ne("div",_k,[Qe(i)])])])}}},vk=ws(yk,[["__scopeId","data-v-7898f6e8"]]),Ek={components:{Dashboard:vk}},wk={id:"app"};function Tk(t,e,n,r,s,i){const o=bl("Dashboard");return Se(),Oe("div",wk,[Qe(o)])}const Ik=ws(Ek,[["render",Tk]]);DE(Ik).use(eA).use(QP).mount("#app");
