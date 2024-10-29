(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function El(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Me={},fs=[],$t=()=>{},Ay=()=>!1,aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wl=t=>t.startsWith("onUpdate:"),tt=Object.assign,Tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},by=Object.prototype.hasOwnProperty,Ie=(t,e)=>by.call(t,e),ce=Array.isArray,ps=t=>Fi(t)==="[object Map]",ca=t=>Fi(t)==="[object Set]",Ph=t=>Fi(t)==="[object Date]",de=t=>typeof t=="function",He=t=>typeof t=="string",mn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",rp=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),sp=Object.prototype.toString,Fi=t=>sp.call(t),Ry=t=>Fi(t).slice(8,-1),ip=t=>Fi(t)==="[object Object]",Il=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sy=/-(\w)/g,Gt=la(t=>t.replace(Sy,(e,n)=>n?n.toUpperCase():"")),Cy=/\B([A-Z])/g,Kr=la(t=>t.replace(Cy,"-$1").toLowerCase()),ua=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),ic=la(t=>t?`on${ua(t)}`:""),or=(t,e)=>!Object.is(t,e),So=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ap=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Py=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let kh;const cp=()=>kh||(kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Dy(r):Gr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Le(t))return t}const ky=/;(?![^(]*\))/g,Oy=/:([^]+)/,Ny=/\/\*[^]*?\*\//g;function Dy(t){const e={};return t.replace(Ny,"").split(ky).forEach(n=>{if(n){const r=n.split(Oy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Al(t){let e="";if(He(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Al(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ly=El(xy);function lp(t){return!!t||t===""}function Vy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ha(t[r],e[r]);return n}function ha(t,e){if(t===e)return!0;let n=Ph(t),r=Ph(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?Vy(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ha(t[o],e[o]))return!1}}return String(t)===String(e)}function My(t,e){return t.findIndex(n=>ha(n,e))}const up=t=>!!(t&&t.__v_isRef===!0),Fe=t=>He(t)?t:t==null?"":ce(t)||Le(t)&&(t.toString===sp||!de(t.toString))?up(t)?Fe(t.value):JSON.stringify(t,hp,2):String(t),hp=(t,e)=>up(e)?hp(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[oc(r,i)+" =>"]=s,n),{})}:ca(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oc(n))}:mn(e)?oc(e):Le(e)&&!ce(e)&&!ip(e)?String(e):e,oc=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uy(t,e=Ht){e&&e.active&&e.effects.push(t)}function $y(){return Ht}let kr;class bl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Uy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(By(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),pr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=er,n=kr;try{return er=!0,kr=this,this._runnings++,Oh(this),this.fn()}finally{Nh(this),this._runnings--,kr=n,er=e}}stop(){this.active&&(Oh(this),Nh(this),this.onStop&&this.onStop(),this.active=!1)}}function By(t){return t.value}function Oh(t){t._trackId++,t._depsLength=0}function Nh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)dp(t.deps[e],t);t.deps.length=t._depsLength}}function dp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let er=!0,Dc=0;const fp=[];function fr(){fp.push(er),er=!1}function pr(){const t=fp.pop();er=t===void 0?!0:t}function Rl(){Dc++}function Sl(){for(Dc--;!Dc&&xc.length;)xc.shift()()}function pp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&dp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const xc=[];function gp(t,e,n){Rl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&xc.push(r.scheduler)))}Sl()}const mp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Lc=new WeakMap,Or=Symbol(""),Vc=Symbol("");function Ct(t,e,n){if(er&&kr){let r=Lc.get(t);r||Lc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=mp(()=>r.delete(n))),pp(kr,s)}}function Sn(t,e,n,r,s,i){const o=Lc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ce(t)){const l=Number(r);o.forEach((h,d)=>{(d==="length"||!mn(d)&&d>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ce(t)?Il(n)&&c.push(o.get("length")):(c.push(o.get(Or)),ps(t)&&c.push(o.get(Vc)));break;case"delete":ce(t)||(c.push(o.get(Or)),ps(t)&&c.push(o.get(Vc)));break;case"set":ps(t)&&c.push(o.get(Or));break}Rl();for(const l of c)l&&gp(l,4);Sl()}const jy=El("__proto__,__v_isRef,__isVue"),_p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn)),Dh=zy();function zy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=be(this);for(let i=0,o=this.length;i<o;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(be)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fr(),Rl();const r=be(this)[e].apply(this,n);return Sl(),pr(),r}}),t}function qy(t){mn(t)||(t=String(t));const e=be(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class yp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rv:Tp:i?wp:Ep).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){if(o&&Ie(Dh,n))return Reflect.get(Dh,n,r);if(n==="hasOwnProperty")return qy}const c=Reflect.get(e,n,r);return(mn(n)?_p.has(n):jy(n))||(s||Ct(e,"get",n),i)?c:Pt(c)?o&&Il(n)?c:c.value:Le(c)?s?Ip(c):Jt(c):c}}class vp extends yp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Vr(i);if(!ws(r)&&!Vr(r)&&(i=be(i),r=be(r)),!ce(e)&&Pt(i)&&!Pt(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Il(n)?Number(n)<e.length:Ie(e,n),c=Reflect.set(e,n,r,s);return e===be(s)&&(o?or(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!_p.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",ce(e)?"length":Or),Reflect.ownKeys(e)}}class Hy extends yp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ky=new vp,Gy=new Hy,Wy=new vp(!0);const Cl=t=>t,da=t=>Reflect.getPrototypeOf(t);function fo(t,e,n=!1,r=!1){t=t.__v_raw;const s=be(t),i=be(e);n||(or(e,i)&&Ct(s,"get",e),Ct(s,"get",i));const{has:o}=da(s),c=r?Cl:n?Ol:Ei;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function po(t,e=!1){const n=this.__v_raw,r=be(n),s=be(t);return e||(or(t,s)&&Ct(r,"has",t),Ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function go(t,e=!1){return t=t.__v_raw,!e&&Ct(be(t),"iterate",Or),Reflect.get(t,"size",t)}function xh(t,e=!1){!e&&!ws(t)&&!Vr(t)&&(t=be(t));const n=be(this);return da(n).has.call(n,t)||(n.add(t),Sn(n,"add",t,t)),this}function Lh(t,e,n=!1){!n&&!ws(e)&&!Vr(e)&&(e=be(e));const r=be(this),{has:s,get:i}=da(r);let o=s.call(r,t);o||(t=be(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?or(e,c)&&Sn(r,"set",t,e):Sn(r,"add",t,e),this}function Vh(t){const e=be(this),{has:n,get:r}=da(e);let s=n.call(e,t);s||(t=be(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Sn(e,"delete",t,void 0),i}function Mh(){const t=be(this),e=t.size!==0,n=t.clear();return e&&Sn(t,"clear",void 0,void 0),n}function mo(t,e){return function(r,s){const i=this,o=i.__v_raw,c=be(o),l=e?Cl:t?Ol:Ei;return!t&&Ct(c,"iterate",Or),o.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function _o(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Cl:e?Ol:Ei;return!e&&Ct(i,"iterate",l?Vc:Or),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qy(){const t={get(i){return fo(this,i)},get size(){return go(this)},has:po,add:xh,set:Lh,delete:Vh,clear:Mh,forEach:mo(!1,!1)},e={get(i){return fo(this,i,!1,!0)},get size(){return go(this)},has:po,add(i){return xh.call(this,i,!0)},set(i,o){return Lh.call(this,i,o,!0)},delete:Vh,clear:Mh,forEach:mo(!1,!0)},n={get(i){return fo(this,i,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:mo(!0,!1)},r={get(i){return fo(this,i,!0,!0)},get size(){return go(this,!0)},has(i){return po.call(this,i,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:mo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=_o(i,!1,!1),n[i]=_o(i,!0,!1),e[i]=_o(i,!1,!0),r[i]=_o(i,!0,!0)}),[t,n,e,r]}const[Yy,Jy,Xy,Zy]=Qy();function Pl(t,e){const n=e?t?Zy:Xy:t?Jy:Yy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const ev={get:Pl(!1,!1)},tv={get:Pl(!1,!0)},nv={get:Pl(!0,!1)};const Ep=new WeakMap,wp=new WeakMap,Tp=new WeakMap,rv=new WeakMap;function sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iv(t){return t.__v_skip||!Object.isExtensible(t)?0:sv(Ry(t))}function Jt(t){return Vr(t)?t:kl(t,!1,Ky,ev,Ep)}function ar(t){return kl(t,!1,Wy,tv,wp)}function Ip(t){return kl(t,!0,Gy,nv,Tp)}function kl(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=iv(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ci(t){return Vr(t)?ci(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function ws(t){return!!(t&&t.__v_isShallow)}function Ap(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function ov(t){return Object.isExtensible(t)&&op(t,"__v_skip",!0),t}const Ei=t=>Le(t)?Jt(t):t,Ol=t=>Le(t)?Ip(t):t;class bp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>e(this._value),()=>Co(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=be(this);return(!e._cacheable||e.effect.dirty)&&or(e._value,e._value=e.effect.run())&&Co(e,4),Rp(e),e.effect._dirtyLevel>=2&&Co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function av(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=$t):(r=t.get,s=t.set),new bp(r,s,i||!s,n)}function Rp(t){var e;er&&kr&&(t=be(t),pp(kr,(e=t.dep)!=null?e:t.dep=mp(()=>t.dep=void 0,t instanceof bp?t:void 0)))}function Co(t,e=4,n,r){t=be(t);const s=t.dep;s&&gp(s,e)}function Pt(t){return!!(t&&t.__v_isRef===!0)}function ke(t){return Sp(t,!1)}function cv(t){return Sp(t,!0)}function Sp(t,e){return Pt(t)?t:new lv(t,e)}class lv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:Ei(e)}get value(){return Rp(this),this._value}set value(e){const n=this.__v_isShallow||ws(e)||Vr(e);e=n?e:be(e),or(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ei(e),Co(this,4))}}function Z(t){return Pt(t)?t.value:t}const uv={get:(t,e,n)=>Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pt(s)&&!Pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return ci(t)?t:new Proxy(t,uv)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(t,e,n,r){try{return r?t(...r):t()}catch(s){fa(s,e,n)}}function Bt(t,e,n,r){if(de(t)){const s=tr(t,e,n,r);return s&&rp(s)&&s.catch(i=>{fa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function fa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){fr(),tr(l,null,10,[t,o,c]),pr();return}}hv(t,n,s,r)}function hv(t,e,n,r=!0){console.error(t)}let wi=!1,Mc=!1;const yt=[];let sn=0;const gs=[];let jn=null,Rr=0;const Pp=Promise.resolve();let Nl=null;function Mr(t){const e=Nl||Pp;return t?e.then(this?t.bind(this):t):e}function dv(t){let e=sn+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=Ti(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Dl(t){(!yt.length||!yt.includes(t,wi&&t.allowRecurse?sn+1:sn))&&(t.id==null?yt.push(t):yt.splice(dv(t.id),0,t),kp())}function kp(){!wi&&!Mc&&(Mc=!0,Nl=Pp.then(Np))}function fv(t){const e=yt.indexOf(t);e>sn&&yt.splice(e,1)}function pv(t){ce(t)?gs.push(...t):(!jn||!jn.includes(t,t.allowRecurse?Rr+1:Rr))&&gs.push(t),kp()}function Fh(t,e,n=wi?sn+1:0){for(;n<yt.length;n++){const r=yt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r()}}}function Op(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Ti(n)-Ti(r));if(gs.length=0,jn){jn.push(...e);return}for(jn=e,Rr=0;Rr<jn.length;Rr++){const n=jn[Rr];n.active!==!1&&n()}jn=null,Rr=0}}const Ti=t=>t.id==null?1/0:t.id,gv=(t,e)=>{const n=Ti(t)-Ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Np(t){Mc=!1,wi=!0,yt.sort(gv);try{for(sn=0;sn<yt.length;sn++){const e=yt[sn];e&&e.active!==!1&&tr(e,e.i,e.i?15:14)}}finally{sn=0,yt.length=0,Op(),wi=!1,Nl=null,(yt.length||gs.length)&&Np()}}let et=null,pa=null;function $o(t){const e=et;return et=t,pa=t&&t.type.__scopeId||null,e}function Ui(t){pa=t}function $i(){pa=null}function ga(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qh(-1);const i=$o(e);let o;try{o=t(...s)}finally{$o(i),r._d&&Qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Uh(t,e){if(et===null)return t;const n=Ta(et),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Me]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(fr(),Bt(l,n,8,[t.el,c,t,e]),pr())}}const zn=Symbol("_leaveCb"),yo=Symbol("_enterCb");function mv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qr(()=>{t.isMounted=!0}),Fp(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],Dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},xp=t=>{const e=t.subTree;return e.component?xp(e.component):e},_v={name:"BaseTransition",props:Dp,setup(t,{slots:e}){const n=fE(),r=mv();return()=>{const s=e.default&&Vp(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==Rt){i=g;break}}const o=be(t),{mode:c}=o;if(r.isLeaving)return ac(i);const l=$h(i);if(!l)return ac(i);let h=Fc(l,o,r,n,g=>h=g);Bo(l,h);const d=n.subTree,p=d&&$h(d);if(p&&p.type!==Rt&&!Sr(l,p)&&xp(n).type!==Rt){const g=Fc(p,o,r,n);if(Bo(p,g),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ac(i);c==="in-out"&&l.type!==Rt&&(g.delayLeave=(_,C,P)=>{const O=Lp(r,p);O[String(p.key)]=p,_[zn]=()=>{C(),_[zn]=void 0,delete h.delayedLeave},h.delayedLeave=P})}return i}}},yv=_v;function Lp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fc(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:O,onAppear:j,onAfterAppear:M,onAppearCancelled:L}=e,z=String(t.key),le=Lp(n,t),B=(E,A)=>{E&&Bt(E,r,9,A)},I=(E,A)=>{const R=A[1];B(E,A),ce(E)?E.every(b=>b.length<=1)&&R():E.length<=1&&R()},y={mode:o,persisted:c,beforeEnter(E){let A=l;if(!n.isMounted)if(i)A=O||l;else return;E[zn]&&E[zn](!0);const R=le[z];R&&Sr(t,R)&&R.el[zn]&&R.el[zn](),B(A,[E])},enter(E){let A=h,R=d,b=p;if(!n.isMounted)if(i)A=j||h,R=M||d,b=L||p;else return;let w=!1;const Ne=E[yo]=st=>{w||(w=!0,st?B(b,[E]):B(R,[E]),y.delayedLeave&&y.delayedLeave(),E[yo]=void 0)};A?I(A,[E,Ne]):Ne()},leave(E,A){const R=String(t.key);if(E[yo]&&E[yo](!0),n.isUnmounting)return A();B(g,[E]);let b=!1;const w=E[zn]=Ne=>{b||(b=!0,A(),Ne?B(P,[E]):B(C,[E]),E[zn]=void 0,le[R]===t&&delete le[R])};le[R]=t,_?I(_,[E,w]):w()},clone(E){const A=Fc(E,e,n,r,s);return s&&s(A),A}};return y}function ac(t){if(ma(t))return t=cr(t),t.children=null,t}function $h(t){if(!ma(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Bo(t,e){t.shapeFlag&6&&t.component?Bo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&s++,r=r.concat(Vp(o.children,e,c))):(e||o.type!==Rt)&&r.push(c!=null?cr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Wr(t,e){return de(t)?tt({name:t.name},e,{setup:t}):t}const li=t=>!!t.type.__asyncLoader,ma=t=>t.type.__isKeepAlive;function vv(t,e){Mp(t,"a",e)}function Ev(t,e){Mp(t,"da",e)}function Mp(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ma(s.parent.vnode)&&wv(r,e,n,s),s=s.parent}}function wv(t,e,n,r){const s=_a(e,t,r,!0);ya(()=>{Tl(r[e],s)},n)}function _a(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{fr();const c=Bi(n),l=Bt(e,n,t,o);return c(),pr(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=ct)=>{(!wa||t==="sp")&&_a(t,(...r)=>e(...r),n)},Tv=On("bm"),Qr=On("m"),Iv=On("bu"),Av=On("u"),Fp=On("bum"),ya=On("um"),bv=On("sp"),Rv=On("rtg"),Sv=On("rtc");function Cv(t,e=ct){_a("ec",t,e)}const Up="components";function xl(t,e){return Bp(Up,t,!0,e)||t}const $p=Symbol.for("v-ndc");function jo(t){return He(t)?Bp(Up,t,!1)||t:t||$p}function Bp(t,e,n=!0,r=!1){const s=et||ct;if(s){const i=s.type;{const c=yE(i,!1);if(c&&(c===e||c===Gt(e)||c===ua(Gt(e))))return i}const o=Bh(s[t]||i[t],e)||Bh(s.appContext[t],e);return!o&&r?i:o}}function Bh(t,e){return t&&(t[e]||t[Gt(e)]||t[ua(Gt(e))])}function Ii(t,e,n,r){let s;const i=n;if(ce(t)||He(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function as(t,e,n={},r,s){if(et.isCE||et.parent&&li(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),Xe("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),pe();const o=i&&jp(i(n)),c=ln(at,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function jp(t){return t.some(e=>qo(e)?!(e.type===Rt||e.type===at&&!jp(e.children)):!0)?t:null}const Uc=t=>t?ag(t)?Ta(t):Uc(t.parent):null,ui=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uc(t.parent),$root:t=>Uc(t.root),$emit:t=>t.emit,$options:t=>Ll(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Dl(t.update)}),$nextTick:t=>t.n||(t.n=Mr.bind(t.proxy)),$watch:t=>Jv.bind(t)}),cc=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ie(t,e),Pv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cc(r,e))return o[e]=1,r[e];if(s!==Me&&Ie(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ie(h,e))return o[e]=3,i[e];if(n!==Me&&Ie(n,e))return o[e]=4,n[e];$c&&(o[e]=0)}}const d=ui[e];let p,g;if(d)return e==="$attrs"&&Ct(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Ie(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ie(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cc(s,e)?(s[e]=n,!0):r!==Me&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Me&&Ie(t,o)||cc(e,o)||(c=i[0])&&Ie(c,o)||Ie(r,o)||Ie(ui,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $c=!0;function kv(t){const e=Ll(t),n=t.proxy,r=t.ctx;$c=!1,e.beforeCreate&&zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:P,deactivated:O,beforeDestroy:j,beforeUnmount:M,destroyed:L,unmounted:z,render:le,renderTracked:B,renderTriggered:I,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:R,components:b,directives:w,filters:Ne}=e;if(h&&Ov(h,r,null),o)for(const ye in o){const me=o[ye];de(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Le(ye)&&(t.data=Jt(ye))}if($c=!0,i)for(const ye in i){const me=i[ye],Ot=de(me)?me.bind(n,n):de(me.get)?me.get.bind(n,n):$t,zt=!de(me)&&de(me.set)?me.set.bind(n):$t,Vt=Qe({get:Ot,set:zt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Be=>Vt.value=Be})}if(c)for(const ye in c)zp(c[ye],r,n,ye);if(l){const ye=de(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{Po(me,ye[me])})}d&&zh(d,t,"c");function $e(ye,me){ce(me)?me.forEach(Ot=>ye(Ot.bind(n))):me&&ye(me.bind(n))}if($e(Tv,p),$e(Qr,g),$e(Iv,_),$e(Av,C),$e(vv,P),$e(Ev,O),$e(Cv,y),$e(Sv,B),$e(Rv,I),$e(Fp,M),$e(ya,z),$e(bv,E),ce(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Ot=>n[me]=Ot})})}else t.exposed||(t.exposed={});le&&t.render===$t&&(t.render=le),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),w&&(t.directives=w)}function Ov(t,e,n=$t){ce(t)&&(t=Bc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),Pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zh(t,e,n){Bt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zp(t,e,n,r){const s=r.includes(".")?rg(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&cn(s,i)}else if(de(t))cn(s,t.bind(n));else if(Le(t))if(ce(t))t.forEach(i=>zp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&cn(s,i,t)}}function Ll(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>zo(l,h,o,!0)),zo(l,e,o)),Le(e)&&i.set(e,l),l}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Nv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Nv={data:qh,props:Hh,emits:Hh,methods:ei,computed:ei,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ei,directives:ei,watch:xv,provide:qh,inject:Dv};function qh(t,e){return e?t?function(){return tt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return ei(Bc(t),Bc(e))}function Bc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?tt(Object.create(null),t,e):e}function Hh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:tt(Object.create(null),jh(t),jh(e??{})):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function qp(){return{app:null,config:{isNativeTag:Ay,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lv=0;function Vv(t,e){return function(r,s=null){de(r)||(r=tt({},r)),s!=null&&!Le(s)&&(s=null);const i=qp(),o=new WeakSet;let c=!1;const l=i.app={_uid:Lv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:EE,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(l,...d)):de(h)&&(o.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!c){const g=Xe(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,Ta(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){const d=hi;hi=l;try{return h()}finally{hi=d}}};return l}}let hi=null;function Po(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=ct||et;if(r||hi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const Hp={},Kp=()=>Object.create(Hp),Gp=t=>Object.getPrototypeOf(t)===Hp;function Mv(t,e,n,r=!1){const s={},i=Kp();t.propsDefaults=Object.create(null),Wp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ar(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(va(t.emitsOptions,g))continue;const _=e[g];if(l)if(Ie(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=Gt(g);s[C]=jc(l,c,C,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Wp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ie(e,p)&&((d=Kr(p))===p||!Ie(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=jc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&Sn(t.attrs,"set","")}function Wp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ai(l))continue;const h=e[l];let d;s&&Ie(s,d=Gt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:va(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=be(n),h=c||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=jc(s,l,p,h[p],t,!Ie(h,p))}}return o}function jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ie(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Bi(s);r=h[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const Uv=new WeakMap;function Qp(t,e,n=!1){const r=n?Uv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=p=>{l=!0;const[g,_]=Qp(p,e,!0);tt(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Le(t)&&r.set(t,fs),fs;if(ce(i))for(let d=0;d<i.length;d++){const p=Gt(i[d]);Kh(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Gt(d);if(Kh(p)){const g=i[d],_=o[p]=ce(g)||de(g)?{type:g}:tt({},g),C=_.type;let P=!1,O=!0;if(ce(C))for(let j=0;j<C.length;++j){const M=C[j],L=de(M)&&M.name;if(L==="Boolean"){P=!0;break}else L==="String"&&(O=!1)}else P=de(C)&&C.name==="Boolean";_[0]=P,_[1]=O,(P||Ie(_,"default"))&&c.push(p)}}const h=[o,c];return Le(t)&&r.set(t,h),h}function Kh(t){return t[0]!=="$"&&!ai(t)}const Yp=t=>t[0]==="_"||t==="$stable",Vl=t=>ce(t)?t.map(rn):[rn(t)],$v=(t,e,n)=>{if(e._n)return e;const r=ga((...s)=>Vl(e(...s)),n);return r._c=!1,r},Jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yp(s))continue;const i=t[s];if(de(i))e[s]=$v(s,i,r);else if(i!=null){const o=Vl(i);e[s]=()=>o}}},Xp=(t,e)=>{const n=Vl(e);t.slots.default=()=>n},Zp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Bv=(t,e,n)=>{const r=t.slots=Kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Zp(r,e,n),n&&op(r,"_",s,!0)):Jp(e,r)}else e&&Xp(t,e)},jv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Zp(s,e,n):(i=!e.$stable,Jp(e,s)),o=e}else e&&(Xp(t,e),o={default:1});if(i)for(const c in s)!Yp(c)&&o[c]==null&&delete s[c]};function zc(t,e,n,r,s=!1){if(ce(t)){t.forEach((g,_)=>zc(g,e&&(ce(e)?e[_]:e),n,r,s));return}if(li(r)&&!s)return;const i=r.shapeFlag&4?Ta(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Me?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(He(h)?(d[h]=null,Ie(p,h)&&(p[h]=null)):Pt(h)&&(h.value=null)),de(l))tr(l,c,12,[o,d]);else{const g=He(l),_=Pt(l);if(g||_){const C=()=>{if(t.f){const P=g?Ie(p,l)?p[l]:d[l]:l.value;s?ce(P)&&Tl(P,i):ce(P)?P.includes(i)||P.push(i):g?(d[l]=[i],Ie(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,Ie(p,l)&&(p[l]=o)):_&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,bt(C,n)):C()}}}const zv=Symbol("_vte"),qv=t=>t.__isTeleport,bt=iE;function Hv(t){return Kv(t)}function Kv(t,e){const n=cp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=$t,insertStaticContent:C}=t,P=(v,T,k,V=null,D=null,$=null,W=void 0,q=null,G=!!T.dynamicChildren)=>{if(v===T)return;v&&!Sr(v,T)&&(V=x(v),Be(v,D,$,!0),v=null),T.patchFlag===-2&&(G=!1,T.dynamicChildren=null);const{type:U,ref:J,shapeFlag:ie}=T;switch(U){case Ea:O(v,T,k,V);break;case Rt:j(v,T,k,V);break;case hc:v==null&&M(T,k,V,W);break;case at:b(v,T,k,V,D,$,W,q,G);break;default:ie&1?le(v,T,k,V,D,$,W,q,G):ie&6?w(v,T,k,V,D,$,W,q,G):(ie&64||ie&128)&&U.process(v,T,k,V,D,$,W,q,G,ee)}J!=null&&D&&zc(J,v&&v.ref,$,T||v,!T)},O=(v,T,k,V)=>{if(v==null)r(T.el=c(T.children),k,V);else{const D=T.el=v.el;T.children!==v.children&&h(D,T.children)}},j=(v,T,k,V)=>{v==null?r(T.el=l(T.children||""),k,V):T.el=v.el},M=(v,T,k,V)=>{[v.el,v.anchor]=C(v.children,T,k,V,v.el,v.anchor)},L=({el:v,anchor:T},k,V)=>{let D;for(;v&&v!==T;)D=g(v),r(v,k,V),v=D;r(T,k,V)},z=({el:v,anchor:T})=>{let k;for(;v&&v!==T;)k=g(v),s(v),v=k;s(T)},le=(v,T,k,V,D,$,W,q,G)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),v==null?B(T,k,V,D,$,W,q,G):E(v,T,D,$,W,q,G)},B=(v,T,k,V,D,$,W,q)=>{let G,U;const{props:J,shapeFlag:ie,transition:se,dirs:re}=v;if(G=v.el=o(v.type,$,J&&J.is,J),ie&8?d(G,v.children):ie&16&&y(v.children,G,null,V,D,lc(v,$),W,q),re&&wr(v,null,V,"created"),I(G,v,v.scopeId,W,V),J){for(const Ce in J)Ce!=="value"&&!ai(Ce)&&i(G,Ce,null,J[Ce],$,V);"value"in J&&i(G,"value",null,J.value,$),(U=J.onVnodeBeforeMount)&&en(U,V,v)}re&&wr(v,null,V,"beforeMount");const ae=Gv(D,se);ae&&se.beforeEnter(G),r(G,T,k),((U=J&&J.onVnodeMounted)||ae||re)&&bt(()=>{U&&en(U,V,v),ae&&se.enter(G),re&&wr(v,null,V,"mounted")},D)},I=(v,T,k,V,D)=>{if(k&&_(v,k),V)for(let $=0;$<V.length;$++)_(v,V[$]);if(D){let $=D.subTree;if(T===$){const W=D.vnode;I(v,W,W.scopeId,W.slotScopeIds,D.parent)}}},y=(v,T,k,V,D,$,W,q,G=0)=>{for(let U=G;U<v.length;U++){const J=v[U]=q?qn(v[U]):rn(v[U]);P(null,J,T,k,V,D,$,W,q)}},E=(v,T,k,V,D,$,W)=>{const q=T.el=v.el;let{patchFlag:G,dynamicChildren:U,dirs:J}=T;G|=v.patchFlag&16;const ie=v.props||Me,se=T.props||Me;let re;if(k&&Tr(k,!1),(re=se.onVnodeBeforeUpdate)&&en(re,k,T,v),J&&wr(T,v,k,"beforeUpdate"),k&&Tr(k,!0),(ie.innerHTML&&se.innerHTML==null||ie.textContent&&se.textContent==null)&&d(q,""),U?A(v.dynamicChildren,U,q,k,V,lc(T,D),$):W||me(v,T,q,null,k,V,lc(T,D),$,!1),G>0){if(G&16)R(q,ie,se,k,D);else if(G&2&&ie.class!==se.class&&i(q,"class",null,se.class,D),G&4&&i(q,"style",ie.style,se.style,D),G&8){const ae=T.dynamicProps;for(let Ce=0;Ce<ae.length;Ce++){const Te=ae[Ce],qe=ie[Te],Nt=se[Te];(Nt!==qe||Te==="value")&&i(q,Te,qe,Nt,D,k)}}G&1&&v.children!==T.children&&d(q,T.children)}else!W&&U==null&&R(q,ie,se,k,D);((re=se.onVnodeUpdated)||J)&&bt(()=>{re&&en(re,k,T,v),J&&wr(T,v,k,"updated")},V)},A=(v,T,k,V,D,$,W)=>{for(let q=0;q<T.length;q++){const G=v[q],U=T[q],J=G.el&&(G.type===at||!Sr(G,U)||G.shapeFlag&70)?p(G.el):k;P(G,U,J,null,V,D,$,W,!0)}},R=(v,T,k,V,D)=>{if(T!==k){if(T!==Me)for(const $ in T)!ai($)&&!($ in k)&&i(v,$,T[$],null,D,V);for(const $ in k){if(ai($))continue;const W=k[$],q=T[$];W!==q&&$!=="value"&&i(v,$,q,W,D,V)}"value"in k&&i(v,"value",T.value,k.value,D)}},b=(v,T,k,V,D,$,W,q,G)=>{const U=T.el=v?v.el:c(""),J=T.anchor=v?v.anchor:c("");let{patchFlag:ie,dynamicChildren:se,slotScopeIds:re}=T;re&&(q=q?q.concat(re):re),v==null?(r(U,k,V),r(J,k,V),y(T.children||[],k,J,D,$,W,q,G)):ie>0&&ie&64&&se&&v.dynamicChildren?(A(v.dynamicChildren,se,k,D,$,W,q),(T.key!=null||D&&T===D.subTree)&&eg(v,T,!0)):me(v,T,k,J,D,$,W,q,G)},w=(v,T,k,V,D,$,W,q,G)=>{T.slotScopeIds=q,v==null?T.shapeFlag&512?D.ctx.activate(T,k,V,W,G):Ne(T,k,V,D,$,W,G):st(v,T,G)},Ne=(v,T,k,V,D,$,W)=>{const q=v.component=dE(v,V,D);if(ma(v)&&(q.ctx.renderer=ee),pE(q,!1,W),q.asyncDep){if(D&&D.registerDep(q,$e,W),!v.el){const G=q.subTree=Xe(Rt);j(null,G,T,k)}}else $e(q,v,T,k,D,$,W)},st=(v,T,k)=>{const V=T.component=v.component;if(nE(v,T,k))if(V.asyncDep&&!V.asyncResolved){ye(V,T,k);return}else V.next=T,fv(V.update),V.effect.dirty=!0,V.update();else T.el=v.el,V.vnode=T},$e=(v,T,k,V,D,$,W)=>{const q=()=>{if(v.isMounted){let{next:J,bu:ie,u:se,parent:re,vnode:ae}=v;{const Mt=tg(v);if(Mt){J&&(J.el=ae.el,ye(v,J,W)),Mt.asyncDep.then(()=>{v.isUnmounted||q()});return}}let Ce=J,Te;Tr(v,!1),J?(J.el=ae.el,ye(v,J,W)):J=ae,ie&&So(ie),(Te=J.props&&J.props.onVnodeBeforeUpdate)&&en(Te,re,J,ae),Tr(v,!0);const qe=uc(v),Nt=v.subTree;v.subTree=qe,P(Nt,qe,p(Nt.el),x(Nt),v,D,$),J.el=qe.el,Ce===null&&rE(v,qe.el),se&&bt(se,D),(Te=J.props&&J.props.onVnodeUpdated)&&bt(()=>en(Te,re,J,ae),D)}else{let J;const{el:ie,props:se}=T,{bm:re,m:ae,parent:Ce}=v,Te=li(T);if(Tr(v,!1),re&&So(re),!Te&&(J=se&&se.onVnodeBeforeMount)&&en(J,Ce,T),Tr(v,!0),ie&&De){const qe=()=>{v.subTree=uc(v),De(ie,v.subTree,v,D,null)};Te?T.type.__asyncLoader().then(()=>!v.isUnmounted&&qe()):qe()}else{const qe=v.subTree=uc(v);P(null,qe,k,V,v,D,$),T.el=qe.el}if(ae&&bt(ae,D),!Te&&(J=se&&se.onVnodeMounted)){const qe=T;bt(()=>en(J,Ce,qe),D)}(T.shapeFlag&256||Ce&&li(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&v.a&&bt(v.a,D),v.isMounted=!0,T=k=V=null}},G=v.effect=new bl(q,$t,()=>Dl(U),v.scope),U=v.update=()=>{G.dirty&&G.run()};U.i=v,U.id=v.uid,Tr(v,!0),U()},ye=(v,T,k)=>{T.component=v;const V=v.vnode.props;v.vnode=T,v.next=null,Fv(v,T.props,V,k),jv(v,T.children,k),fr(),Fh(v),pr()},me=(v,T,k,V,D,$,W,q,G=!1)=>{const U=v&&v.children,J=v?v.shapeFlag:0,ie=T.children,{patchFlag:se,shapeFlag:re}=T;if(se>0){if(se&128){zt(U,ie,k,V,D,$,W,q,G);return}else if(se&256){Ot(U,ie,k,V,D,$,W,q,G);return}}re&8?(J&16&&At(U,D,$),ie!==U&&d(k,ie)):J&16?re&16?zt(U,ie,k,V,D,$,W,q,G):At(U,D,$,!0):(J&8&&d(k,""),re&16&&y(ie,k,V,D,$,W,q,G))},Ot=(v,T,k,V,D,$,W,q,G)=>{v=v||fs,T=T||fs;const U=v.length,J=T.length,ie=Math.min(U,J);let se;for(se=0;se<ie;se++){const re=T[se]=G?qn(T[se]):rn(T[se]);P(v[se],re,k,null,D,$,W,q,G)}U>J?At(v,D,$,!0,!1,ie):y(T,k,V,D,$,W,q,G,ie)},zt=(v,T,k,V,D,$,W,q,G)=>{let U=0;const J=T.length;let ie=v.length-1,se=J-1;for(;U<=ie&&U<=se;){const re=v[U],ae=T[U]=G?qn(T[U]):rn(T[U]);if(Sr(re,ae))P(re,ae,k,null,D,$,W,q,G);else break;U++}for(;U<=ie&&U<=se;){const re=v[ie],ae=T[se]=G?qn(T[se]):rn(T[se]);if(Sr(re,ae))P(re,ae,k,null,D,$,W,q,G);else break;ie--,se--}if(U>ie){if(U<=se){const re=se+1,ae=re<J?T[re].el:V;for(;U<=se;)P(null,T[U]=G?qn(T[U]):rn(T[U]),k,ae,D,$,W,q,G),U++}}else if(U>se)for(;U<=ie;)Be(v[U],D,$,!0),U++;else{const re=U,ae=U,Ce=new Map;for(U=ae;U<=se;U++){const vt=T[U]=G?qn(T[U]):rn(T[U]);vt.key!=null&&Ce.set(vt.key,U)}let Te,qe=0;const Nt=se-ae+1;let Mt=!1,Vs=0;const Dn=new Array(Nt);for(U=0;U<Nt;U++)Dn[U]=0;for(U=re;U<=ie;U++){const vt=v[U];if(qe>=Nt){Be(vt,D,$,!0);continue}let Ft;if(vt.key!=null)Ft=Ce.get(vt.key);else for(Te=ae;Te<=se;Te++)if(Dn[Te-ae]===0&&Sr(vt,T[Te])){Ft=Te;break}Ft===void 0?Be(vt,D,$,!0):(Dn[Ft-ae]=U+1,Ft>=Vs?Vs=Ft:Mt=!0,P(vt,T[Ft],k,null,D,$,W,q,G),qe++)}const Zr=Mt?Wv(Dn):fs;for(Te=Zr.length-1,U=Nt-1;U>=0;U--){const vt=ae+U,Ft=T[vt],es=vt+1<J?T[vt+1].el:V;Dn[U]===0?P(null,Ft,k,es,D,$,W,q,G):Mt&&(Te<0||U!==Zr[Te]?Vt(Ft,k,es,2):Te--)}}},Vt=(v,T,k,V,D=null)=>{const{el:$,type:W,transition:q,children:G,shapeFlag:U}=v;if(U&6){Vt(v.component.subTree,T,k,V);return}if(U&128){v.suspense.move(T,k,V);return}if(U&64){W.move(v,T,k,ee);return}if(W===at){r($,T,k);for(let ie=0;ie<G.length;ie++)Vt(G[ie],T,k,V);r(v.anchor,T,k);return}if(W===hc){L(v,T,k);return}if(V!==2&&U&1&&q)if(V===0)q.beforeEnter($),r($,T,k),bt(()=>q.enter($),D);else{const{leave:ie,delayLeave:se,afterLeave:re}=q,ae=()=>r($,T,k),Ce=()=>{ie($,()=>{ae(),re&&re()})};se?se($,ae,Ce):Ce()}else r($,T,k)},Be=(v,T,k,V=!1,D=!1)=>{const{type:$,props:W,ref:q,children:G,dynamicChildren:U,shapeFlag:J,patchFlag:ie,dirs:se,cacheIndex:re}=v;if(ie===-2&&(D=!1),q!=null&&zc(q,null,k,v,!0),re!=null&&(T.renderCache[re]=void 0),J&256){T.ctx.deactivate(v);return}const ae=J&1&&se,Ce=!li(v);let Te;if(Ce&&(Te=W&&W.onVnodeBeforeUnmount)&&en(Te,T,v),J&6)Zt(v.component,k,V);else{if(J&128){v.suspense.unmount(k,V);return}ae&&wr(v,null,T,"beforeUnmount"),J&64?v.type.remove(v,T,k,ee,V):U&&!U.hasOnce&&($!==at||ie>0&&ie&64)?At(U,T,k,!1,!0):($===at&&ie&384||!D&&J&16)&&At(G,T,k),V&&je(v)}(Ce&&(Te=W&&W.onVnodeUnmounted)||ae)&&bt(()=>{Te&&en(Te,T,v),ae&&wr(v,null,T,"unmounted")},k)},je=v=>{const{type:T,el:k,anchor:V,transition:D}=v;if(T===at){Nn(k,V);return}if(T===hc){z(v);return}const $=()=>{s(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:q}=D,G=()=>W(k,$);q?q(v.el,$,G):G()}else $()},Nn=(v,T)=>{let k;for(;v!==T;)k=g(v),s(v),v=k;s(T)},Zt=(v,T,k)=>{const{bum:V,scope:D,update:$,subTree:W,um:q,m:G,a:U}=v;Gh(G),Gh(U),V&&So(V),D.stop(),$&&($.active=!1,Be(W,v,T,k)),q&&bt(q,T),bt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},At=(v,T,k,V=!1,D=!1,$=0)=>{for(let W=$;W<v.length;W++)Be(v[W],T,k,V,D)},x=v=>{if(v.shapeFlag&6)return x(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),k=T&&T[zv];return k?g(k):T};let X=!1;const Y=(v,T,k)=>{v==null?T._vnode&&Be(T._vnode,null,null,!0):P(T._vnode||null,v,T,null,null,null,k),X||(X=!0,Fh(),Op(),X=!1),T._vnode=v},ee={p:P,um:Be,m:Vt,r:je,mt:Ne,mc:y,pc:me,pbc:A,n:x,o:t};let ve,De;return{render:Y,hydrate:ve,createApp:Vv(Y,ve)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=qn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&eg(o,c)),c.type===Ea&&(c.el=o.el)}}function Wv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function Gh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Qv=Symbol.for("v-scx"),Yv=()=>Kt(Qv),vo={};function cn(t,e,n){return ng(t,e,n)}function ng(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Me){if(e&&i){const B=e;e=(...I)=>{B(...I),le()}}const l=ct,h=B=>r===!0?B:Kn(B,r===!1?1:void 0);let d,p=!1,g=!1;if(Pt(t)?(d=()=>t.value,p=ws(t)):ci(t)?(d=()=>h(t),p=!0):ce(t)?(g=!0,p=t.some(B=>ci(B)||ws(B)),d=()=>t.map(B=>{if(Pt(B))return B.value;if(ci(B))return h(B);if(de(B))return tr(B,l,2)})):de(t)?e?d=()=>tr(t,l,2):d=()=>(_&&_(),Bt(t,l,3,[C])):d=$t,e&&r){const B=d;d=()=>Kn(B())}let _,C=B=>{_=L.onStop=()=>{tr(B,l,4),_=L.onStop=void 0}},P;if(wa)if(C=$t,e?n&&Bt(e,l,3,[d(),g?[]:void 0,C]):d(),s==="sync"){const B=Yv();P=B.__watcherHandles||(B.__watcherHandles=[])}else return $t;let O=g?new Array(t.length).fill(vo):vo;const j=()=>{if(!(!L.active||!L.dirty))if(e){const B=L.run();(r||p||(g?B.some((I,y)=>or(I,O[y])):or(B,O)))&&(_&&_(),Bt(e,l,3,[B,O===vo?void 0:g&&O[0]===vo?[]:O,C]),O=B)}else L.run()};j.allowRecurse=!!e;let M;s==="sync"?M=j:s==="post"?M=()=>bt(j,l&&l.suspense):(j.pre=!0,l&&(j.id=l.uid),M=()=>Dl(j));const L=new bl(d,$t,M),z=$y(),le=()=>{L.stop(),z&&Tl(z.effects,L)};return e?n?j():O=L.run():s==="post"?bt(L.run.bind(L),l&&l.suspense):L.run(),P&&P.push(le),le}function Jv(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?rg(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Bi(this),c=ng(s,i.bind(r),n);return o(),c}function rg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pt(t))Kn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Kn(t[r],e,n);else if(ca(t)||ps(t))t.forEach(r=>{Kn(r,e,n)});else if(ip(t)){for(const r in t)Kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Kn(t[r],e,n)}return t}const Xv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function Zv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&Xv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>He(d)?d.trim():d)),o.number&&(s=n.map(ap)));let c,l=r[c=ic(e)]||r[c=ic(Gt(e))];!l&&i&&(l=r[c=ic(Kr(e))]),l&&Bt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(h,t,6,s)}}function sg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const d=sg(h,e,!0);d&&(c=!0,tt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):tt(o,i),Le(t)&&r.set(t,o),o)}function va(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Kr(e))||Ie(t,e))}function uc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:_,ctx:C,inheritAttrs:P}=t,O=$o(t);let j,M;try{if(n.shapeFlag&4){const z=s||r,le=z;j=rn(h.call(le,z,d,p,_,g,C)),M=c}else{const z=e;j=rn(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),M=e.props?c:eE(c)}}catch(z){di.length=0,fa(z,t,1),j=Xe(Rt)}let L=j;if(M&&P!==!1){const z=Object.keys(M),{shapeFlag:le}=L;z.length&&le&7&&(i&&z.some(wl)&&(M=tE(M,i)),L=cr(L,M,!1,!0))}return n.dirs&&(L=cr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),j=L,$o(O),j}const eE=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},tE=(t,e)=>{const n={};for(const r in t)(!wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!va(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Wh(r,o,h):!0:!!o;return!1}function Wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function rE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sE=t=>t.__isSuspense;function iE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):pv(t)}const at=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),hc=Symbol.for("v-stc"),di=[];let xt=null;function pe(t=!1){di.push(xt=t?null:[])}function oE(){di.pop(),xt=di[di.length-1]||null}let Ai=1;function Qh(t){Ai+=t,t<0&&xt&&(xt.hasOnce=!0)}function ig(t){return t.dynamicChildren=Ai>0?xt||fs:null,oE(),Ai>0&&xt&&xt.push(t),t}function Se(t,e,n,r,s,i){return ig(ne(t,e,n,r,s,i,!0))}function ln(t,e,n,r,s){return ig(Xe(t,e,n,r,s,!0))}function qo(t){return t?t.__v_isVNode===!0:!1}function Sr(t,e){return t.type===e.type&&t.key===e.key}const og=({key:t})=>t??null,ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Pt(t)||de(t)?{i:et,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&og(e),ref:e&&ko(e),scopeId:pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return c?(Ml(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Ai>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const Xe=aE;function aE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$p)&&(t=Rt),qo(t)){const c=cr(t,e,!0);return n&&Ml(c,n),Ai>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag=-2,c}if(vE(t)&&(t=t.__vccOpts),e){e=cE(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=Al(c)),Le(l)&&(Ap(l)&&!ce(l)&&(l=tt({},l)),e.style=Gr(l))}const o=He(t)?1:sE(t)?128:qv(t)?64:Le(t)?4:de(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function cE(t){return t?Ap(t)||Gp(t)?tt({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Fl(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&og(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(ko(e)):[i,ko(e)]:ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Bo(d,l.clone(d)),d}function lE(t=" ",e=0){return Xe(Ea,null,t,e)}function nn(t="",e=!1){return e?(pe(),ln(Rt,null,t)):Xe(Rt,null,t)}function rn(t){return t==null||typeof t=="boolean"?Xe(Rt):ce(t)?Xe(at,null,t.slice()):typeof t=="object"?qn(t):Xe(Ea,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Ml(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ml(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gp(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[lE(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Al([e.class,r.class]));else if(s==="style")e.style=Gr([e.style,r.style]);else if(aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Bt(t,e,7,[n,r])}const uE=qp();let hE=0;function dE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uE,i={uid:hE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qp(r,s),emitsOptions:sg(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zv.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const fE=()=>ct||et;let Ho,qc;{const t=cp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),qc=e("__VUE_SSR_SETTERS__",n=>wa=n)}const Bi=t=>{const e=ct;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},Yh=()=>{ct&&ct.scope.off(),Ho(null)};function ag(t){return t.vnode.shapeFlag&4}let wa=!1;function pE(t,e=!1,n=!1){e&&qc(e);const{props:r,children:s}=t.vnode,i=ag(t);Mv(t,r,i,e),Bv(t,s,n);const o=i?gE(t,e):void 0;return e&&qc(!1),o}function gE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Pv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_E(t):null,i=Bi(t);fr();const o=tr(r,t,0,[t.props,s]);if(pr(),i(),rp(o)){if(o.then(Yh,Yh),e)return o.then(c=>{Jh(t,c,e)}).catch(c=>{fa(c,t,0)});t.asyncDep=o}else Jh(t,o,e)}else cg(t,e)}function Jh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Cp(e)),cg(t,n)}let Xh;function cg(t,e,n){const r=t.type;if(!t.render){if(!e&&Xh&&!r.render){const s=r.template||Ll(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=tt(tt({isCustomElement:i,delimiters:c},o),l);r.render=Xh(s,h)}}t.render=r.render||$t}{const s=Bi(t);fr();try{kv(t)}finally{pr(),s()}}}const mE={get(t,e){return Ct(t,"get",""),t[e]}};function _E(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,mE),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cp(ov(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function yE(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function vE(t){return de(t)&&"__vccOpts"in t}const Qe=(t,e)=>av(t,e,wa);function Ul(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ce(e)?qo(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qo(n)&&(n=[n]),Xe(t,e,n))}const EE="3.4.35";/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wE="http://www.w3.org/2000/svg",TE="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,Zh=In&&In.createElement("template"),IE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?In.createElementNS(wE,t):e==="mathml"?In.createElementNS(TE,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fn="transition",Ys="animation",bi=Symbol("_vtc"),$l=(t,{slots:e})=>Ul(yv,AE(t),e);$l.displayName="Transition";const lg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$l.props=tt({},Dp,lg);const Ir=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},ed=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function AE(t){const e={};for(const b in t)b in lg||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=bE(s),P=C&&C[0],O=C&&C[1],{onBeforeEnter:j,onEnter:M,onEnterCancelled:L,onLeave:z,onLeaveCancelled:le,onBeforeAppear:B=j,onAppear:I=M,onAppearCancelled:y=L}=e,E=(b,w,Ne)=>{Ar(b,w?d:c),Ar(b,w?h:o),Ne&&Ne()},A=(b,w)=>{b._isLeaving=!1,Ar(b,p),Ar(b,_),Ar(b,g),w&&w()},R=b=>(w,Ne)=>{const st=b?I:M,$e=()=>E(w,b,Ne);Ir(st,[w,$e]),td(()=>{Ar(w,b?l:i),Un(w,b?d:c),ed(st)||nd(w,r,P,$e)})};return tt(e,{onBeforeEnter(b){Ir(j,[b]),Un(b,i),Un(b,o)},onBeforeAppear(b){Ir(B,[b]),Un(b,l),Un(b,h)},onEnter:R(!1),onAppear:R(!0),onLeave(b,w){b._isLeaving=!0;const Ne=()=>A(b,w);Un(b,p),Un(b,g),CE(),td(()=>{b._isLeaving&&(Ar(b,p),Un(b,_),ed(z)||nd(b,r,O,Ne))}),Ir(z,[b,Ne])},onEnterCancelled(b){E(b,!1),Ir(L,[b])},onAppearCancelled(b){E(b,!0),Ir(y,[b])},onLeaveCancelled(b){A(b),Ir(le,[b])}})}function bE(t){if(t==null)return null;if(Le(t))return[dc(t.enter),dc(t.leave)];{const e=dc(t);return[e,e]}}function dc(t){return Py(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bi]||(t[bi]=new Set)).add(e)}function Ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bi];n&&(n.delete(e),n.size||(t[bi]=void 0))}function td(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let RE=0;function nd(t,e,n,r){const s=t._endId=++RE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=SE(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=_=>{_.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,g)}function SE(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Fn}Delay`),i=r(`${Fn}Duration`),o=rd(s,i),c=r(`${Ys}Delay`),l=r(`${Ys}Duration`),h=rd(c,l);let d=null,p=0,g=0;e===Fn?o>0&&(d=Fn,p=o,g=i.length):e===Ys?h>0&&(d=Ys,p=h,g=l.length):(p=Math.max(o,h),d=p>0?o>h?Fn:Ys:null,g=d?d===Fn?i.length:l.length:0);const _=d===Fn&&/\b(transform|all)(,|$)/.test(r(`${Fn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:_}}function rd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>sd(n)+sd(t[r])))}function sd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function CE(){return document.body.offsetHeight}function PE(t,e,n){const r=t[bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const id=Symbol("_vod"),kE=Symbol("_vsh"),OE=Symbol(""),NE=/(^|;)\s*display\s*:/;function DE(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Oo(r,c,"")}else for(const o in e)n[o]==null&&Oo(r,o,"");for(const o in n)o==="display"&&(i=!0),Oo(r,o,n[o])}else if(s){if(e!==n){const o=r[OE];o&&(n+=";"+o),r.cssText=n,i=NE.test(n)}}else e&&t.removeAttribute("style");id in t&&(t[id]=i?r.display:"",t[kE]&&(r.display="none"))}const od=/\s*!important$/;function Oo(t,e,n){if(ce(n))n.forEach(r=>Oo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xE(t,e);od.test(n)?t.setProperty(Kr(r),n.replace(od,""),"important"):t[r]=n}}const ad=["Webkit","Moz","ms"],fc={};function xE(t,e){const n=fc[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return fc[e]=r;r=ua(r);for(let s=0;s<ad.length;s++){const i=ad[s]+r;if(i in t)return fc[e]=i}return e}const cd="http://www.w3.org/1999/xlink";function ld(t,e,n,r,s,i=Ly(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cd,e.slice(6,e.length)):t.setAttributeNS(cd,e,n):n==null||i&&!lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function LE(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=lp(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function ug(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}const ud=Symbol("_vei");function ME(t,e,n,r,s=null){const i=t[ud]||(t[ud]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=FE(e);if(r){const h=i[e]=BE(r,s);ug(t,c,h,l)}else o&&(VE(t,c,o,l),i[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function FE(t){let e;if(hd.test(t)){e={};let r;for(;r=t.match(hd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let pc=0;const UE=Promise.resolve(),$E=()=>pc||(UE.then(()=>pc=0),pc=Date.now());function BE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(jE(r,n.value),e,5,[r])};return n.value=t,n.attached=$E(),n}function jE(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?PE(t,r,o):e==="style"?DE(t,n,r):aa(e)?wl(e)||ME(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qE(t,e,r,o))?(LE(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ld(t,e,r,o))};function qE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&dd(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dd(e)&&He(n)?!1:e in t}const fd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>So(e,n):e},gc=Symbol("_assign"),pd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ca(e);ug(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ap(Ko(o)):Ko(o));t[gc](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Mr(()=>{t._assigning=!1})}),t[gc]=fd(r)},mounted(t,{value:e,modifiers:{number:n}}){gd(t,e)},beforeUpdate(t,e,n){t[gc]=fd(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||gd(t,e)}};function gd(t,e,n){const r=t.multiple,s=ce(e);if(!(r&&!s&&!ca(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Ko(c);if(r)if(s){const h=typeof l;h==="string"||h==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=My(e,l)>-1}else c.selected=e.has(l);else if(ha(Ko(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ko(t){return"_value"in t?t._value:t.value}const HE=["ctrl","shift","alt","meta"],KE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HE.some(n=>t[`${n}Key`]&&!e.includes(n))},GE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=KE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},WE=tt({patchProp:zE},IE);let md;function QE(){return md||(md=Hv(WE))}const YE=(...t)=>{const e=QE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=XE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,JE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function JE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function XE(t){return He(t)?document.querySelector(t):t}function ZE(){return hg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function hg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const ew=typeof Proxy=="function",tw="devtools-plugin:setup",nw="plugin:settings:set";let is,Hc;function rw(){var t;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,Hc=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(is=!0,Hc=globalThis.perf_hooks.performance):is=!1),is}function sw(){return rw()?Hc.now():Date.now()}class iw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return sw()}},n&&n.on(nw,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:c,args:l,resolve:h})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function ow(t,e){const n=t,r=hg(),s=ZE(),i=ew&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(tw,t,e);else{const o=i?new iw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var aw="store";function ks(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function cw(t){return t!==null&&typeof t=="object"}function lw(t){return t&&typeof t.then=="function"}function uw(t,e){return function(){return t(e)}}function dg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function fg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ia(t,n,[],t._modules.root,!0),Bl(t,n,e)}function Bl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};ks(s,function(o,c){i[c]=uw(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=Jt({data:e}),t.strict&&gw(t),r&&n&&t._withCommit(function(){r.data=null})}function Ia(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=jl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var h=r.context=hw(t,o,n);r.forEachMutation(function(d,p){var g=o+p;dw(t,g,d,h)}),r.forEachAction(function(d,p){var g=d.root?p:o+p,_=d.handler||d;fw(t,g,_,h)}),r.forEachGetter(function(d,p){var g=o+p;pw(t,g,d,h)}),r.forEachChild(function(d,p){Ia(t,e,n.concat(p),d,s)})}function hw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=Go(i,o,c),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,h)},commit:r?t.commit:function(i,o,c){var l=Go(i,o,c),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=e+p),t.commit(p,h,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return pg(t,e)}},state:{get:function(){return jl(t.state,n)}}}),s}function pg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function dw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function fw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return lw(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function pw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function gw(t){cn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function jl(t,e){return e.reduce(function(n,r){return n[r]},t)}function Go(t,e,n){return cw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var mw="vuex bindings",_d="vuex:mutations",mc="vuex:actions",os="vuex",_w=0;function yw(t,e){ow({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[mw]},function(n){n.addTimelineLayer({id:_d,label:"Vuex Mutations",color:yd}),n.addTimelineLayer({id:mc,label:"Vuex Actions",color:yd}),n.addInspector({id:os,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===os)if(r.filter){var s=[];yg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[_g(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===os){var s=r.nodeId;pg(e,s),r.state=ww(Iw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===os){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(os),n.sendInspectorState(os),n.addTimelineEvent({layerId:_d,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=_w++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:mc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:mc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var yd=8702998,vw=6710886,Ew=16777215,gg={label:"namespaced",textColor:Ew,backgroundColor:vw};function mg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function _g(t,e){return{id:e||"root",label:mg(e),tags:t.namespaced?[gg]:[],children:Object.keys(t._children).map(function(n){return _g(t._children[n],e+n+"/")})}}function yg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[gg]:[]}),Object.keys(e._children).forEach(function(s){yg(t,e._children[s],n,r+s+"/")})}function ww(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=Tw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?mg(o):o,editable:!1,value:Kc(function(){return i[o]})}})}return s}function Tw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Kc(function(){return t[n]})}else e[n]=Kc(function(){return t[n]})}),e}function Iw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Kc(t){try{return t()}catch(e){return e}}var Xt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},vg={namespaced:{configurable:!0}};vg.namespaced.get=function(){return!!this._rawModule.namespaced};Xt.prototype.addChild=function(e,n){this._children[e]=n};Xt.prototype.removeChild=function(e){delete this._children[e]};Xt.prototype.getChild=function(e){return this._children[e]};Xt.prototype.hasChild=function(e){return e in this._children};Xt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Xt.prototype.forEachChild=function(e){ks(this._children,e)};Xt.prototype.forEachGetter=function(e){this._rawModule.getters&&ks(this._rawModule.getters,e)};Xt.prototype.forEachAction=function(e){this._rawModule.actions&&ks(this._rawModule.actions,e)};Xt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ks(this._rawModule.mutations,e)};Object.defineProperties(Xt.prototype,vg);var Yr=function(e){this.register([],e,!1)};Yr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Yr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Yr.prototype.update=function(e){Eg([],this.root,e)};Yr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Xt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ks(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Yr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Yr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Eg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Eg(t.concat(r),e.getChild(r),n.modules[r])}}function Aw(t){return new kt(t)}var kt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Yr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,h=c.commit;this.dispatch=function(g,_){return l.call(o,g,_)},this.commit=function(g,_,C){return h.call(o,g,_,C)},this.strict=s;var d=this._modules.root.state;Ia(this,d,[],this._modules.root),Bl(this,d),r.forEach(function(p){return p(n)})},zl={state:{configurable:!0}};kt.prototype.install=function(e,n){e.provide(n||aw,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&yw(e,this)};zl.state.get=function(){return this._state.data};zl.state.set=function(t){};kt.prototype.commit=function(e,n,r){var s=this,i=Go(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},h=this._mutations[o];h&&(this._withCommit(function(){h.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(d){return d(l,s.state)}))};kt.prototype.dispatch=function(e,n){var r=this,s=Go(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(c,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(o)})):l[0](o);return new Promise(function(d,p){h.then(function(g){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}d(g)},function(g){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,g)})}catch{}p(g)})})}};kt.prototype.subscribe=function(e,n){return dg(e,this._subscribers,n)};kt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return dg(r,this._actionSubscribers,n)};kt.prototype.watch=function(e,n,r){var s=this;return cn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};kt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};kt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ia(this,this.state,e,this._modules.get(e),r.preserveState),Bl(this,this.state)};kt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=jl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),fg(this)};kt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};kt.prototype.hotUpdate=function(e){this._modules.update(e),fg(this,!0)};kt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(kt.prototype,zl);const bw={user:null,status:""};var vd={};/**
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
 */const wg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Sw;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cw=function(t){const e=wg(t);return Tg.encodeByteArray(e,!0)},Wo=function(t){return Cw(t).replace(/\./g,"")},Ig=function(t){try{return Tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kw=()=>Pw().__FIREBASE_DEFAULTS__,Ow=()=>{if(typeof process>"u"||typeof vd>"u")return;const t=vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ig(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return kw()||Ow()||Nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ag=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bg=t=>{const e=Ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rg=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},Sg=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Lw(){var t;const e=(t=Aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fw(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uw(){return!Lw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $w(){try{return typeof indexedDB=="object"}catch{return!1}}function Bw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const jw="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jw,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function zw(t,e){return t.replace(qw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qw=/\{\$([^}]+)}/g;function Hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!Qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kw(t,e){const n=new Gw(t,e);return n.subscribe.bind(n)}class Gw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_c),s.error===void 0&&(s.error=_c),s.complete===void 0&&(s.complete=_c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class Qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jw(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(t){return t===br?void 0:t}function Jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const Zw={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},eT=_e.INFO,tT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},nT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=eT,this._logHandler=nT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const rT=(t,e)=>e.some(n=>t instanceof n);let wd,Td;function sT(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return Td||(Td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,Gc=new WeakMap,kg=new WeakMap,yc=new WeakMap,Hl=new WeakMap;function oT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pg.set(n,t)}).catch(()=>{}),Hl.set(e,t),e}function aT(t){if(Gc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cT(t){Wc=t(Wc)}function lT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return kg.set(r,e.sort?e.sort():[e]),nr(r)}:iT().includes(t)?function(...e){return t.apply(vc(this),e),nr(Pg.get(this))}:function(...e){return nr(t.apply(vc(this),e))}}function uT(t){return typeof t=="function"?lT(t):(t instanceof IDBTransaction&&aT(t),rT(t,sT())?new Proxy(t,Wc):t)}function nr(t){if(t instanceof IDBRequest)return oT(t);if(yc.has(t))return yc.get(t);const e=uT(t);return e!==t&&(yc.set(t,e),Hl.set(e,t)),e}const vc=t=>Hl.get(t);function hT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const dT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],Ec=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ec.set(e,i),i}cT(t=>({...t,get:(e,n,r)=>Id(e,n)||t.get(e,n,r),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
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
 */class pT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Ad="0.10.8";/**
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
 */const Fr=new ql("@firebase/app"),mT="@firebase/app-compat",_T="@firebase/analytics-compat",yT="@firebase/analytics",vT="@firebase/app-check-compat",ET="@firebase/app-check",wT="@firebase/auth",TT="@firebase/auth-compat",IT="@firebase/database",AT="@firebase/database-compat",bT="@firebase/functions",RT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",PT="@firebase/messaging",kT="@firebase/messaging-compat",OT="@firebase/performance",NT="@firebase/performance-compat",DT="@firebase/remote-config",xT="@firebase/remote-config-compat",LT="@firebase/storage",VT="@firebase/storage-compat",MT="@firebase/firestore",FT="@firebase/vertexai-preview",UT="@firebase/firestore-compat",$T="firebase",BT="10.12.5";/**
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
 */const Yc="[DEFAULT]",jT={[Qc]:"fire-core",[mT]:"fire-core-compat",[yT]:"fire-analytics",[_T]:"fire-analytics-compat",[ET]:"fire-app-check",[vT]:"fire-app-check-compat",[wT]:"fire-auth",[TT]:"fire-auth-compat",[IT]:"fire-rtdb",[AT]:"fire-rtdb-compat",[bT]:"fire-fn",[RT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[PT]:"fire-fcm",[kT]:"fire-fcm-compat",[OT]:"fire-perf",[NT]:"fire-perf-compat",[DT]:"fire-rc",[xT]:"fire-rc-compat",[LT]:"fire-gcs",[VT]:"fire-gcs-compat",[MT]:"fire-fst",[UT]:"fire-fst-compat",[FT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
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
 */const Yo=new Map,zT=new Map,Jc=new Map;function bd(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(Jc.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Yo.values())bd(n,t);for(const n of zT.values())bd(n,t);return!0}function ba(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const qT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new ji("app","Firebase",qT);/**
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
 */class HT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=BT;function Ra(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=Rg()),!n)throw rr.create("no-options");const i=Yo.get(s);if(i){if(Qo(n,i.options)&&Qo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new Xw(s);for(const l of Jc.values())o.addComponent(l);const c=new HT(n,r,o);return Yo.set(s,c),c}function Kl(t=Yc){const e=Yo.get(t);if(!e&&t===Yc&&Rg())return Ra();if(!e)throw rr.create("no-app",{appName:t});return e}function un(t,e,n){var r;let s=(r=jT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(c.join(" "));return}Ur(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const KT="firebase-heartbeat-database",GT=1,Ri="firebase-heartbeat-store";let wc=null;function Og(){return wc||(wc=hT(KT,GT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),wc}async function WT(t){try{const n=(await Og()).transaction(Ri),r=await n.objectStore(Ri).get(Ng(t));return await n.done,r}catch(e){if(e instanceof vn)Fr.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function Rd(t,e){try{const r=(await Og()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,Ng(t)),await r.done}catch(n){if(n instanceof vn)Fr.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function Ng(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QT=1024,YT=30*24*60*60*1e3;class JT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=YT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sd(),{heartbeatsToSend:r,unsentEntries:s}=XT(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sd(){return new Date().toISOString().substring(0,10)}function XT(t,e=QT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?Bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eI(t){Ur(new lr("platform-logger",e=>new pT(e),"PRIVATE")),Ur(new lr("heartbeat",e=>new JT(e),"PRIVATE")),un(Qc,Ad,t),un(Qc,Ad,"esm2017"),un("fire-js","")}eI("");function Gl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tI=Dg,xg=new ji("auth","Firebase",Dg());/**
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
 */const Jo=new ql("@firebase/auth");function nI(t,...e){Jo.logLevel<=_e.WARN&&Jo.warn(`Auth (${Jr}): ${t}`,...e)}function No(t,...e){Jo.logLevel<=_e.ERROR&&Jo.error(`Auth (${Jr}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Wl(t,...e)}function hn(t,...e){return Wl(t,...e)}function Lg(t,e,n){const r=Object.assign(Object.assign({},tI()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return Lg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xg.create(t,...e)}function he(t,e,...n){if(!t)throw Wl(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Pn(t,e){t||An(e)}/**
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
 */function Xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rI(){return Pd()==="http:"||Pd()==="https:"}function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rI()||Vw()||"connection"in navigator)?navigator.onLine:!0}function iI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=xw()||Mw()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ql(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aI=new qi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,s={}){return Mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Vg.fetch()(Fg(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Mg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oI),e);try{const s=new lI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lg(t,d,h);Wt(t,d)}}catch(s){if(s instanceof vn)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function Hi(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ql(t.config,s):`${t.config.apiScheme}://${s}`}function cI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),aI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function kd(t){return t!==void 0&&t.enterprise!==void 0}class uI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hI(t,e){return mr(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
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
 */async function dI(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function Ug(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fI(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=Yl(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(Tc(s.auth_time)),issuedAtTime:fi(Tc(s.iat)),expirationTime:fi(Tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function Yl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ig(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Od(t){const e=Yl(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&pI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,Ug(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$g(i.providerUserInfo):[],c=_I(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function mI(t){const e=jt(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _I(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $g(t){return t.map(e=>{var{providerId:n}=e,r=Gl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yI(t,e){const n=await Mg(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Fg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vI(t,e){return mr(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function $n(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fI(this,e)}reload(){return mI(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Si(this,dI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:z,isAnonymous:le,providerData:B,stsTokenManager:I}=n;he(L&&I,e,"internal-error");const y=ms.fromJSON(this.name,I);he(typeof L=="string",e,"internal-error"),$n(p,e.name),$n(g,e.name),he(typeof z=="boolean",e,"internal-error"),he(typeof le=="boolean",e,"internal-error"),$n(_,e.name),$n(C,e.name),$n(P,e.name),$n(O,e.name),$n(j,e.name),$n(M,e.name);const E=new bn({uid:L,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:le,photoURL:C,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:j,lastLoginAt:M});return B&&Array.isArray(B)&&(E.providerData=B.map(A=>Object.assign({},A))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$g(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ms;c.updateFromIdToken(r);const l=new bn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Nd=new Map;function Rn(t){Pn(t instanceof Function,"Expected a class definition");let e=Nd.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nd.set(t,e),e)}/**
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
 */class Bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bg.type="NONE";const Dd=Bg;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(Rn(Dd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(Dd);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=bn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new _s(i,e,r))}}/**
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
 */function xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kg(e))return"Blackberry";if(Gg(e))return"Webos";if(Jl(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jg(t=ht()){return/firefox\//i.test(t)}function Jl(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(t=ht()){return/crios\//i.test(t)}function qg(t=ht()){return/iemobile/i.test(t)}function Hg(t=ht()){return/android/i.test(t)}function Kg(t=ht()){return/blackberry/i.test(t)}function Gg(t=ht()){return/webos/i.test(t)}function Sa(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EI(t=ht()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wI(){return Fw()&&document.documentMode===10}function Wg(t=ht()){return Sa(t)||Hg(t)||Gg(t)||Kg(t)||/windows phone/i.test(t)||qg(t)}function TI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qg(t,e=[]){let n;switch(t){case"Browser":n=xd(ht());break;case"Worker":n=`${xd(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
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
 */class II{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AI(t,e={}){return mr(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
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
 */const bI=6;class RI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class SI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ld(this),this.idTokenSubscription=new Ld(this),this.beforeStateQueue=new II(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ug(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(Cn(this));const n=e?jt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AI(this),n=new RI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return jt(t)}class Ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kw(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CI(t){Ca=t}function Yg(t){return Ca.loadJS(t)}function PI(){return Ca.recaptchaEnterpriseScript}function kI(){return Ca.gapiScript}function OI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NI="recaptcha-enterprise",DI="NO_RECAPTCHA";class xI{constructor(e){this.type=NI,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{hI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new uI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(DI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&kd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PI();l.length!==0&&(l+=c),Yg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Vd(t,e,n,r=!1){const s=new xI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function el(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function LI(t,e){const n=ba(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qo(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function VI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MI(t,e,n){const r=Xr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jg(e),{host:o,port:c}=FI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),UI()}function Jg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FI(t){const e=Jg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Md(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Md(o)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function $I(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BI(t,e){return Hi(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
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
 */async function jI(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function zI(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
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
 */class Ci extends Xl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return el(e,n,"signInWithPassword",BI);case"emailLink":return jI(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return el(e,r,"signUpPassword",$I);case"emailLink":return zI(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return Hi(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
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
 */const qI="http://localhost";class $r extends Xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:qI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */function HI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KI(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,r=ti(ni(t)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||e||t}class Zl{constructor(e){var n,r,s,i,o,c;const l=ti(ni(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=HI((s=l.mode)!==null&&s!==void 0?s:null);he(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=KI(e);try{return new Zl(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zl.parseLink(n);return he(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends Xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Ki{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Ki{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function GI(t,e){return Hi(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
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
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Fd(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fd(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zo extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zo(e,n,r,s)}}function Zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,r):i})}async function WI(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
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
 */async function QI(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await Si(t,Zg(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Yl(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
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
 */async function em(t,e,n=!1){if(an(t.app))return Promise.reject(Cn(t));const r="signIn",s=await Zg(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function YI(t,e){return em(Xr(t),e)}/**
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
 */async function tm(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JI(t,e,n){if(an(t.app))return Promise.reject(Cn(t));const r=Xr(t),o=await el(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tm(t),l}),c=await Br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function XI(t,e,n){return an(t.app)?Promise.reject(Cn(t)):YI(jt(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tm(t),r})}function ZI(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function e0(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}const ea="__sak";/**
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
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function t0(){const t=ht();return Jl(t)||Sa(t)}const n0=1e3,r0=10;class rm extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=t0()&&TI(),this.fallbackToPolling=Wg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,r0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},n0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const s0=rm;/**
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
 */class sm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sm.type="SESSION";const im=sm;/**
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
 */function i0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await i0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class o0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=eu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function a0(t){dn().location.href=t}/**
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
 */function om(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function c0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function u0(){return om()?self:null}/**
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
 */const am="firebaseLocalStorageDb",h0=1,ta="firebaseLocalStorage",cm="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function d0(){const t=indexedDB.deleteDatabase(am);return new Gi(t).toPromise()}function tl(){const t=indexedDB.open(am,h0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ta,{keyPath:cm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ta)?e(r):(r.close(),await d0(),e(await tl()))})})}async function Ud(t,e,n){const r=ka(t,!0).put({[cm]:e,value:n});return new Gi(r).toPromise()}async function f0(t,e){const n=ka(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function $d(t,e){const n=ka(t,!0).delete(e);return new Gi(n).toPromise()}const p0=800,g0=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>g0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(u0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c0(),!this.activeServiceWorker)return;this.sender=new o0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await Ud(e,ea,"1"),await $d(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ka(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const m0=lm;new qi(3e4,6e4);/**
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
 */function _0(t,e){return e?Rn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tu extends Xl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y0(t){return em(t.auth,new tu(t),t.bypassAuthState)}function v0(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),QI(n,new tu(t),t.bypassAuthState)}async function E0(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),WI(n,new tu(t),t.bypassAuthState)}/**
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
 */class um{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y0;case"linkViaPopup":case"linkViaRedirect":return E0;case"reauthViaPopup":case"reauthViaRedirect":return v0;default:Wt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w0=new qi(2e3,1e4);class ds extends um{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w0.get())};e()}}ds.currentPopupAction=null;/**
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
 */const T0="pendingRedirect",xo=new Map;class I0 extends um{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await A0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A0(t,e){const n=S0(e),r=R0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function b0(t,e){xo.set(t._key(),e)}function R0(t){return Rn(t._redirectPersistence)}function S0(t){return Do(T0,t.config.apiKey,t.name)}async function C0(t,e,n=!1){if(an(t.app))return Promise.reject(Cn(t));const r=Xr(t),s=_0(r,e),o=await new I0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const P0=10*60*1e3;class k0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bd(e))}saveEventToCache(e){this.cachedEventUids.add(Bd(e)),this.lastProcessedEventTime=Date.now()}}function Bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
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
 */async function N0(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
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
 */const D0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x0=/^https?/;async function L0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N0(t);for(const n of e)try{if(V0(n))return}catch{}Wt(t,"unauthorized-domain")}function V0(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!x0.test(n))return!1;if(D0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const M0=new qi(3e4,6e4);function jd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function F0(t){return new Promise((e,n)=>{var r,s,i;function o(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(hn(t,"network-request-failed"))},timeout:M0.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const c=OI("iframefcb");return dn()[c]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},Yg(`${kI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function U0(t){return Lo=Lo||F0(t),Lo}/**
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
 */const $0=new qi(5e3,15e3),B0="__/auth/iframe",j0="emulator/auth/iframe",z0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H0(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ql(e,j0):`https://${t.config.authDomain}/${B0}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},s=q0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function K0(t){const e=await U0(t),n=dn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:H0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},$0.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const G0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W0=500,Q0=600,Y0="_blank",J0="http://localhost";class zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X0(t,e,n,r=W0,s=Q0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},G0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(c=zg(h)?Y0:n),jg(h)&&(e=e||J0,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(EI(h)&&c!=="_self")return Z0(e||"",c),new zd(null);const p=window.open(e||"",c,d);he(p,t,"popup-blocked");try{p.focus()}catch{}return new zd(p)}function Z0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eA="__/auth/handler",tA="emulator/auth/handler",nA=encodeURIComponent("fac");async function qd(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:s};if(e instanceof Xg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${nA}=${encodeURIComponent(l)}`:"";return`${rA(t)}?${zi(c).slice(1)}${h}`}function rA({config:t}){return t.emulator?Ql(t,tA):`https://${t.authDomain}/${eA}`}/**
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
 */const Ic="webStorageSupport";class sA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=C0,this._overrideRedirectResult=b0}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qd(e,n,r,Xc(),s);return X0(e,o,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qd(e,n,r,Xc(),s);return a0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K0(e),r=new k0(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wg()||Jl()||Sa()}}const iA=sA;var Hd="@firebase/auth",Kd="1.7.6";/**
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
 */class oA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cA(t){Ur(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qg(t)},h=new SI(r,s,i,l);return VI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new lr("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new oA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Hd,Kd,aA(t)),un(Hd,Kd,"esm2017")}/**
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
 */const lA=5*60,uA=Sg("authIdTokenMaxAge")||lA;let Gd=null;const hA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uA)return;const s=n==null?void 0:n.token;Gd!==s&&(Gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dm(t=Kl()){const e=ba(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LI(t,{popupRedirectResolver:iA,persistence:[m0,s0,im]}),r=Sg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hA(i.toString());e0(n,o,()=>o(n.currentUser)),ZI(n,c=>o(c))}}const s=Ag("auth");return s&&MI(n,`http://${s}`),n}function dA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cA("Browser");const nu=(t,e)=>{t.user=e},Nr=(t,e)=>{t.status=e},fA=Object.freeze(Object.defineProperty({__proto__:null,SET_STATUS:Nr,SET_USER:nu},Symbol.toStringTag,{value:"Module"})),pA=async({commit:t},{email:e,password:n})=>{t(Nr,"loading");const r=dm();try{const s=await JI(r,e,n);t(nu,s.user),t(Nr,"success")}catch(s){t(Nr,`error: ${s.message}`)}},gA=async({commit:t},{email:e,password:n})=>{t(Nr,"loading");const r=dm();try{const s=await XI(r,e,n);t(nu,s.user),t(Nr,"success")}catch(s){t(Nr,`error: ${s.message}`)}},mA=Object.freeze(Object.defineProperty({__proto__:null,loginUser:gA,registerUser:pA},Symbol.toStringTag,{value:"Module"})),_A=Aw({state:bw,mutations:fA,actions:mA});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function fm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fm(t.default)}const Oe=Object.assign;function Ac(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const pi=()=>{},Qt=Array.isArray,pm=/#/g,vA=/&/g,EA=/\//g,wA=/=/g,TA=/\?/g,gm=/\+/g,IA=/%5B/g,AA=/%5D/g,mm=/%5E/g,bA=/%60/g,_m=/%7B/g,RA=/%7C/g,ym=/%7D/g,SA=/%20/g;function ru(t){return encodeURI(""+t).replace(RA,"|").replace(IA,"[").replace(AA,"]")}function CA(t){return ru(t).replace(_m,"{").replace(ym,"}").replace(mm,"^")}function nl(t){return ru(t).replace(gm,"%2B").replace(SA,"+").replace(pm,"%23").replace(vA,"%26").replace(bA,"`").replace(_m,"{").replace(ym,"}").replace(mm,"^")}function PA(t){return nl(t).replace(wA,"%3D")}function kA(t){return ru(t).replace(pm,"%23").replace(TA,"%3F")}function OA(t){return t==null?"":kA(t).replace(EA,"%2F")}function Pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NA=/\/$/,DA=t=>t.replace(NA,"");function bc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=MA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pi(o)}}function xA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ts(e.matched[r],n.matched[s])&&vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VA(t[n],e[n]))return!1;return!0}function VA(t,e){return Qt(t)?Qd(t,e):Qt(e)?Qd(e,t):t===e}function Qd(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function MA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gi||(gi={}));function FA(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DA(t)}const UA=/^[^#]+#/;function $A(t,e){return t.replace(UA,"#")+e}function BA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function jA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=BA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yd(t,e){return(history.state?history.state.position-e:-1)+t}const rl=new Map;function zA(t,e){rl.set(t,e)}function qA(t){const e=rl.get(t);return rl.delete(t),e}let HA=()=>location.protocol+"//"+location.host;function Em(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Wd(l,"")}return Wd(n,t)+r+s}function KA(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Em(t,location),C=n.value,P=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}O=P?g.position-P.position:0}else r(_);s.forEach(j=>{j(n.value,C,{delta:O,type:ki.pop,direction:O?O>0?gi.forward:gi.back:gi.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Oe({},g.state,{scroll:Oa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Jd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function GA(t){const{history:e,location:n}=window,r={value:Em(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:HA()+t+l;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(l,h){const d=Oe({},e.state,Jd(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Oe({},s.value,e.state,{forward:l,scroll:Oa()});i(d.current,d,!0);const p=Oe({},Jd(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function WA(t){t=FA(t);const e=GA(t),n=KA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:$A.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function QA(t){return typeof t=="string"||t&&typeof t=="object"}function wm(t){return typeof t=="string"||typeof t=="symbol"}const Tm=Symbol("");var Xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xd||(Xd={}));function Is(t,e){return Oe(new Error,{type:t,[Tm]:!0},e)}function Tn(t,e){return t instanceof Error&&Tm in t&&(e==null||!!(t.type&e))}const Zd="[^/]+?",YA={sensitive:!1,strict:!1,start:!0,end:!0},JA=/[.+*?^${}()[\]/\\]/g;function XA(t,e){const n=Oe({},YA,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(JA,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:P,optional:O,regexp:j}=g;i.push({name:C,repeatable:P,optional:O});const M=j||Zd;if(M!==Zd){_+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+z.message)}}let L=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(L=O&&h.length<2?`(?:/${L})`:"/"+L),O&&(L+="?"),s+=L,_+=20,O&&(_+=-8),P&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:P,optional:O}=_,j=C in h?h[C]:"";if(Qt(j)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Qt(j)?j.join("/"):j;if(!M)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ZA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Im(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ZA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ef(r))return 1;if(ef(s))return-1}return s.length-r.length}function ef(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eb={type:0,value:""},tb=/[a-zA-Z0-9_]/;function nb(t){if(!t)return[[]];if(t==="/")return[[eb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:tb.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function rb(t,e,n){const r=XA(nb(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sb(t,e){const n=[],r=new Map;e=sf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,P=nf(p);P.aliasOf=_&&_.record;const O=sf(e,p),j=[P];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)j.push(nf(Oe({},P,{components:_?_.record.components:P.components,path:le,aliasOf:_?_.record:P})))}let M,L;for(const z of j){const{path:le}=z;if(g&&le[0]!=="/"){const B=g.record.path,I=B[B.length-1]==="/"?"":"/";z.path=g.record.path+(le&&I+le)}if(M=rb(z,g,O),_?_.alias.push(M):(L=L||M,L!==M&&L.alias.push(M),C&&p.name&&!rf(M)&&o(p.name)),Am(M)&&l(M),P.children){const B=P.children;for(let I=0;I<B.length;I++)i(B[I],M,_&&_.children[I])}_=_||M}return L?()=>{o(L)}:pi}function o(p){if(wm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=ab(p,n);n.splice(g,0,p),p.record.name&&!rf(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},P,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Is(1,{location:p});O=_.record.name,C=Oe(tf(g.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&tf(p.params,_.keys.map(L=>L.name))),P=_.stringify(C)}else if(p.path!=null)P=p.path,_=n.find(L=>L.re.test(P)),_&&(C=_.parse(P),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!_)throw Is(1,{location:p,currentLocation:g});O=_.record.name,C=Oe({},g.params,p.params),P=_.stringify(C)}const j=[];let M=_;for(;M;)j.unshift(M.record),M=M.parent;return{name:O,path:P,params:C,matched:j,meta:ob(j)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function tf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ib(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ib(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ob(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ab(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Im(t,e[i])<0?r=i:n=i+1}const s=cb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function cb(t){let e=t;for(;e=e.parent;)if(Am(e)&&Im(t,e)===0)return e}function Am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gm," "),o=i.indexOf("="),c=Pi(o<0?i:i.slice(0,o)),l=o<0?null:Pi(i.slice(o+1));if(c in e){let h=e[c];Qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function of(t){let e="";for(let n in t){const r=t[n];if(n=PA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&nl(i)):[r&&nl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ub(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hb=Symbol(""),af=Symbol(""),Na=Symbol(""),su=Symbol(""),sl=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(Is(4,{from:n,to:e})):g instanceof Error?l(g):QA(g)?l(Is(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Rc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(fm(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Hn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=yA(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Hn(_,n,r,o,c,s)()}))}}return i}function cf(t){const e=Kt(Na),n=Kt(su),r=Qe(()=>{const l=Z(t.to);return e.resolve(l)}),s=Qe(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ts.bind(null,d));if(g>-1)return g;const _=lf(l[h-2]);return h>1&&lf(d)===_&&p[p.length-1].path!==_?p.findIndex(Ts.bind(null,l[h-2])):g}),i=Qe(()=>s.value>-1&&gb(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&vm(n.params,r.value.params));function c(l={}){return pb(l)?e[Z(t.replace)?"replace":"push"](Z(t.to)).catch(pi):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const db=Wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(t,{slots:e}){const n=Jt(cf(t)),{options:r}=Kt(Na),s=Qe(()=>({[uf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fb=db;function pb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uf=(t,e,n)=>t??e??n,mb=Wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(sl),s=Qe(()=>t.route||r.value),i=Kt(af,0),o=Qe(()=>{let h=Z(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Qe(()=>s.value.matched[o.value]);Po(af,Qe(()=>o.value+1)),Po(hb,c),Po(sl,s);const l=ke();return cn(()=>[l.value,c.value,t.name],([h,d,p],[g,_,C])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Ts(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return hf(n.default,{Component:g,route:h});const _=p.props[d],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=Ul(g,Oe({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return hf(n.default,{Component:O,route:h})||O}}});function hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _b=mb;function yb(t){const e=sb(t.routes,t),n=t.parseQuery||lb,r=t.stringifyQuery||of,s=t.history,i=Js(),o=Js(),c=Js(),l=cv(Bn);let h=Bn;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ac.bind(null,x=>""+x),p=Ac.bind(null,OA),g=Ac.bind(null,Pi);function _(x,X){let Y,ee;return wm(x)?(Y=e.getRecordMatcher(x),ee=X):ee=x,e.addRoute(ee,Y)}function C(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function P(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function j(x,X){if(X=Oe({},X||l.value),typeof x=="string"){const T=bc(n,x,X.path),k=e.resolve({path:T.path},X),V=s.createHref(T.fullPath);return Oe(T,k,{params:g(k.params),hash:Pi(T.hash),redirectedFrom:void 0,href:V})}let Y;if(x.path!=null)Y=Oe({},x,{path:bc(n,x.path,X.path).path});else{const T=Oe({},x.params);for(const k in T)T[k]==null&&delete T[k];Y=Oe({},x,{params:p(T)}),X.params=p(X.params)}const ee=e.resolve(Y,X),ve=x.hash||"";ee.params=d(g(ee.params));const De=xA(r,Oe({},x,{hash:CA(ve),path:ee.path})),v=s.createHref(De);return Oe({fullPath:De,hash:ve,query:r===of?ub(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:v})}function M(x){return typeof x=="string"?bc(n,x,l.value.path):Oe({},x)}function L(x,X){if(h!==x)return Is(8,{from:X,to:x})}function z(x){return I(x)}function le(x){return z(Oe(M(x),{replace:!0}))}function B(x){const X=x.matched[x.matched.length-1];if(X&&X.redirect){const{redirect:Y}=X;let ee=typeof Y=="function"?Y(x):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=M(ee):{path:ee},ee.params={}),Oe({query:x.query,hash:x.hash,params:ee.path!=null?{}:x.params},ee)}}function I(x,X){const Y=h=j(x),ee=l.value,ve=x.state,De=x.force,v=x.replace===!0,T=B(Y);if(T)return I(Oe(M(T),{state:typeof T=="object"?Oe({},ve,T.state):ve,force:De,replace:v}),X||Y);const k=Y;k.redirectedFrom=X;let V;return!De&&LA(r,ee,Y)&&(V=Is(16,{to:k,from:ee}),Vt(ee,ee,!0,!1)),(V?Promise.resolve(V):A(k,ee)).catch(D=>Tn(D)?Tn(D,2)?D:zt(D):me(D,k,ee)).then(D=>{if(D){if(Tn(D,2))return I(Oe({replace:v},M(D.to),{state:typeof D.to=="object"?Oe({},ve,D.to.state):ve,force:De}),X||k)}else D=b(k,ee,!0,v,ve);return R(k,ee,D),D})}function y(x,X){const Y=L(x,X);return Y?Promise.reject(Y):Promise.resolve()}function E(x){const X=Nn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function A(x,X){let Y;const[ee,ve,De]=vb(x,X);Y=Rc(ee.reverse(),"beforeRouteLeave",x,X);for(const T of ee)T.leaveGuards.forEach(k=>{Y.push(Hn(k,x,X))});const v=y.bind(null,x,X);return Y.push(v),At(Y).then(()=>{Y=[];for(const T of i.list())Y.push(Hn(T,x,X));return Y.push(v),At(Y)}).then(()=>{Y=Rc(ve,"beforeRouteUpdate",x,X);for(const T of ve)T.updateGuards.forEach(k=>{Y.push(Hn(k,x,X))});return Y.push(v),At(Y)}).then(()=>{Y=[];for(const T of De)if(T.beforeEnter)if(Qt(T.beforeEnter))for(const k of T.beforeEnter)Y.push(Hn(k,x,X));else Y.push(Hn(T.beforeEnter,x,X));return Y.push(v),At(Y)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),Y=Rc(De,"beforeRouteEnter",x,X,E),Y.push(v),At(Y))).then(()=>{Y=[];for(const T of o.list())Y.push(Hn(T,x,X));return Y.push(v),At(Y)}).catch(T=>Tn(T,8)?T:Promise.reject(T))}function R(x,X,Y){c.list().forEach(ee=>E(()=>ee(x,X,Y)))}function b(x,X,Y,ee,ve){const De=L(x,X);if(De)return De;const v=X===Bn,T=cs?history.state:{};Y&&(ee||v?s.replace(x.fullPath,Oe({scroll:v&&T&&T.scroll},ve)):s.push(x.fullPath,ve)),l.value=x,Vt(x,X,Y,v),zt()}let w;function Ne(){w||(w=s.listen((x,X,Y)=>{if(!Zt.listening)return;const ee=j(x),ve=B(ee);if(ve){I(Oe(ve,{replace:!0}),ee).catch(pi);return}h=ee;const De=l.value;cs&&zA(Yd(De.fullPath,Y.delta),Oa()),A(ee,De).catch(v=>Tn(v,12)?v:Tn(v,2)?(I(v.to,ee).then(T=>{Tn(T,20)&&!Y.delta&&Y.type===ki.pop&&s.go(-1,!1)}).catch(pi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),me(v,ee,De))).then(v=>{v=v||b(ee,De,!1),v&&(Y.delta&&!Tn(v,8)?s.go(-Y.delta,!1):Y.type===ki.pop&&Tn(v,20)&&s.go(-1,!1)),R(ee,De,v)}).catch(pi)}))}let st=Js(),$e=Js(),ye;function me(x,X,Y){zt(x);const ee=$e.list();return ee.length?ee.forEach(ve=>ve(x,X,Y)):console.error(x),Promise.reject(x)}function Ot(){return ye&&l.value!==Bn?Promise.resolve():new Promise((x,X)=>{st.add([x,X])})}function zt(x){return ye||(ye=!x,Ne(),st.list().forEach(([X,Y])=>x?Y(x):X()),st.reset()),x}function Vt(x,X,Y,ee){const{scrollBehavior:ve}=t;if(!cs||!ve)return Promise.resolve();const De=!Y&&qA(Yd(x.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return Mr().then(()=>ve(x,X,De)).then(v=>v&&jA(v)).catch(v=>me(v,x,X))}const Be=x=>s.go(x);let je;const Nn=new Set,Zt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:j,options:t,push:z,replace:le,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:$e.add,isReady:Ot,install(x){const X=this;x.component("RouterLink",fb),x.component("RouterView",_b),x.config.globalProperties.$router=X,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(l)}),cs&&!je&&l.value===Bn&&(je=!0,z(s.location).catch(ve=>{}));const Y={};for(const ve in Bn)Object.defineProperty(Y,ve,{get:()=>l.value[ve],enumerable:!0});x.provide(Na,X),x.provide(su,ar(Y)),x.provide(sl,l);const ee=x.unmount;Nn.add(x),x.unmount=function(){Nn.delete(x),Nn.size<1&&(h=Bn,w&&w(),w=null,l.value=Bn,je=!1,ye=!1),ee()}}};function At(x){return x.reduce((X,Y)=>X.then(()=>E(Y)),Promise.resolve())}return Zt}function vb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Ts(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Ts(h,l))||s.push(l))}return[n,r,s]}function iu(){return Kt(Na)}function Eb(t){return Kt(su)}var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,bm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.D=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(A,R,b){for(var w=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)w[Ne-2]=arguments[Ne];return y.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)A[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],R=I.g[2];var b=I.g[3],w=y+(b^E&(R^b))+A[0]+3614090360&4294967295;y=E+(w<<7&4294967295|w>>>25),w=b+(R^y&(E^R))+A[1]+3905402710&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(E^b&(y^E))+A[2]+606105819&4294967295,R=b+(w<<17&4294967295|w>>>15),w=E+(y^R&(b^y))+A[3]+3250441966&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(b^E&(R^b))+A[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=b+(R^y&(E^R))+A[5]+1200080426&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(E^b&(y^E))+A[6]+2821735955&4294967295,R=b+(w<<17&4294967295|w>>>15),w=E+(y^R&(b^y))+A[7]+4249261313&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(b^E&(R^b))+A[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=b+(R^y&(E^R))+A[9]+2336552879&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(E^b&(y^E))+A[10]+4294925233&4294967295,R=b+(w<<17&4294967295|w>>>15),w=E+(y^R&(b^y))+A[11]+2304563134&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(b^E&(R^b))+A[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=b+(R^y&(E^R))+A[13]+4254626195&4294967295,b=y+(w<<12&4294967295|w>>>20),w=R+(E^b&(y^E))+A[14]+2792965006&4294967295,R=b+(w<<17&4294967295|w>>>15),w=E+(y^R&(b^y))+A[15]+1236535329&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(R^b&(E^R))+A[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=b+(E^R&(y^E))+A[6]+3225465664&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(b^y))+A[11]+643717713&4294967295,R=b+(w<<14&4294967295|w>>>18),w=E+(b^y&(R^b))+A[0]+3921069994&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(E^R))+A[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=b+(E^R&(y^E))+A[10]+38016083&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(b^y))+A[15]+3634488961&4294967295,R=b+(w<<14&4294967295|w>>>18),w=E+(b^y&(R^b))+A[4]+3889429448&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(E^R))+A[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=b+(E^R&(y^E))+A[14]+3275163606&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(b^y))+A[3]+4107603335&4294967295,R=b+(w<<14&4294967295|w>>>18),w=E+(b^y&(R^b))+A[8]+1163531501&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^b&(E^R))+A[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=b+(E^R&(y^E))+A[2]+4243563512&4294967295,b=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(b^y))+A[7]+1735328473&4294967295,R=b+(w<<14&4294967295|w>>>18),w=E+(b^y&(R^b))+A[12]+2368359562&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(E^R^b)+A[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=b+(y^E^R)+A[8]+2272392833&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^E)+A[11]+1839030562&4294967295,R=b+(w<<16&4294967295|w>>>16),w=E+(R^b^y)+A[14]+4259657740&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^b)+A[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=b+(y^E^R)+A[4]+1272893353&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^E)+A[7]+4139469664&4294967295,R=b+(w<<16&4294967295|w>>>16),w=E+(R^b^y)+A[10]+3200236656&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^b)+A[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=b+(y^E^R)+A[0]+3936430074&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^E)+A[3]+3572445317&4294967295,R=b+(w<<16&4294967295|w>>>16),w=E+(R^b^y)+A[6]+76029189&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^b)+A[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=b+(y^E^R)+A[12]+3873151461&4294967295,b=y+(w<<11&4294967295|w>>>21),w=R+(b^y^E)+A[15]+530742520&4294967295,R=b+(w<<16&4294967295|w>>>16),w=E+(R^b^y)+A[2]+3299628645&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(R^(E|~b))+A[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=b+(E^(y|~R))+A[7]+1126891415&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~E))+A[14]+2878612391&4294967295,R=b+(w<<15&4294967295|w>>>17),w=E+(b^(R|~y))+A[5]+4237533241&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~b))+A[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=b+(E^(y|~R))+A[3]+2399980690&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~E))+A[10]+4293915773&4294967295,R=b+(w<<15&4294967295|w>>>17),w=E+(b^(R|~y))+A[1]+2240044497&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~b))+A[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=b+(E^(y|~R))+A[15]+4264355552&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~E))+A[6]+2734768916&4294967295,R=b+(w<<15&4294967295|w>>>17),w=E+(b^(R|~y))+A[13]+1309151649&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~b))+A[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=b+(E^(y|~R))+A[11]+3174756917&4294967295,b=y+(w<<10&4294967295|w>>>22),w=R+(y^(b|~E))+A[2]+718787259&4294967295,R=b+(w<<15&4294967295|w>>>17),w=E+(b^(R|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var E=y-this.blockSize,A=this.B,R=this.h,b=0;b<y;){if(R==0)for(;b<=E;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<y;)if(A[R++]=I.charCodeAt(b++),R==this.blockSize){s(this,A),R=0;break}}else for(;b<y;)if(A[R++]=I[b++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var E=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=E&255,E/=256;for(this.u(I),I=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)I[E++]=this.g[y]>>>A&255;return I};function i(I,y){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;for(var E=[],A=!0,R=I.length-1;0<=R;R--){var b=I[R]|0;A&&b==y||(E[R]=b,A=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var y=[],E=1,A=0;I>=E;A++)y[A]=I/E|0,E*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return O(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),A=p,R=0;R<I.length;R+=8){var b=Math.min(8,I.length-R),w=parseInt(I.substring(R,R+b),y);8>b?(b=h(Math.pow(y,b)),A=A.j(b).add(h(w))):(A=A.j(E),A=A.add(h(w)))}return A}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var I=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(P(this))return"-"+O(this).toString(I);for(var y=h(Math.pow(I,6)),E=this,A="";;){var R=z(E,y).g;E=j(E,R.j(y));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=R,C(E))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=j(this,I),P(I)?-1:C(I)?0:1};function O(I){for(var y=I.g.length,E=[],A=0;A<y;A++)E[A]=~I.g[A];return new o(E,~I.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],A=0,R=0;R<=y;R++){var b=A+(this.i(R)&65535)+(I.i(R)&65535),w=(b>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=w>>>16,b&=65535,w&=65535,E[R]=w<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(I,y){return I.add(O(y))}t.j=function(I){if(C(this)||C(I))return p;if(P(this))return P(I)?O(this).j(O(I)):O(O(this).j(I));if(P(I))return O(this.j(O(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var b=this.i(A)>>>16,w=this.i(A)&65535,Ne=I.i(R)>>>16,st=I.i(R)&65535;E[2*A+2*R]+=w*st,M(E,2*A+2*R),E[2*A+2*R+1]+=b*st,M(E,2*A+2*R+1),E[2*A+2*R+1]+=w*Ne,M(E,2*A+2*R+1),E[2*A+2*R+2]+=b*Ne,M(E,2*A+2*R+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function M(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function L(I,y){this.g=I,this.h=y}function z(I,y){if(C(y))throw Error("division by zero");if(C(I))return new L(p,p);if(P(I))return y=z(O(I),y),new L(O(y.g),O(y.h));if(P(y))return y=z(I,O(y)),new L(O(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,A=y;0>=A.l(I);)E=le(E),A=le(A);var R=B(E,1),b=B(A,1);for(A=B(A,2),E=B(E,2);!C(A);){var w=b.add(A);0>=w.l(I)&&(R=R.add(E),b=w),A=B(A,1),E=B(E,1)}return y=j(I,R.j(y)),new L(R,y)}for(R=p;0<=I.l(y);){for(E=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=h(E),w=b.j(y);P(w)||0<w.l(I);)E-=A,b=h(E),w=b.j(y);C(b)&&(b=g),R=R.add(b),I=j(I,w)}return new L(R,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&I.i(A);return new o(E,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|I.i(A);return new o(E,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^I.i(A);return new o(E,this.h^I.h)};function le(I){for(var y=I.g.length+1,E=[],A=0;A<y;A++)E[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(E,I.h)}function B(I,y){var E=y>>5;y%=32;for(var A=I.g.length-E,R=[],b=0;b<A;b++)R[b]=0<y?I.i(b+E)>>>y|I.i(b+E+1)<<32-y:I.i(b+E);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Dr=o}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rm,Sm,ri,Cm,Vo,il,Pm,km,Om;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wo=="object"&&wo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,N){for(var H=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)H[xe-2]=arguments[xe];return u.prototype[S].apply(m,H)}}function P(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const S=a.length||0,N=m.length||0;a.length=S+N;for(let H=0;H<N;H++)a[S+H]=m[H]}else a.push(m)}}class j{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var le=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function B(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let N=0;N<E.length;N++)f=E[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Ot;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ne{constructor(){this.h=this.g=null}add(u,f){const m=st.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var st=new j(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Ot=new Ne,zt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){b(f)}var u=st;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Nn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(le){e:{try{z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}C(Zt,je);var At={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(a,u,f,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,u,f,m,S){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var H=v(a,u,m,S);return-1<H?(u=a[H],f||(u.fa=!1)):(u=new Y(u,this.src,N,!!m,S),u.fa=f,a.push(u)),u};function De(a,u){var f=u.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=S)&&Array.prototype.splice.call(m,S,1),N&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,u,f,m){for(var S=0;S<a.length;++S){var N=a[S];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==m)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),k={};function V(a,u,f,m,S){if(Array.isArray(u)){for(var N=0;N<u.length;N++)V(a,u[N],f,m,S);return null}return f=se(f),a&&a[x]?a.K(u,f,h(m)?!!m.capture:!!m,S):D(a,u,f,!1,m,S)}function D(a,u,f,m,S,N){if(!u)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,xe=J(a);if(xe||(a[T]=xe=new ve(a)),f=xe.add(u,f,m,H,N),f.proxy)return f;if(m=$(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Nn||(S=H),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(G(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return u.call(a.src,a.listener,f)}const u=U;return a}function W(a,u,f,m,S){if(Array.isArray(u))for(var N=0;N<u.length;N++)W(a,u[N],f,m,S);else m=h(m)?!!m.capture:!!m,f=se(f),a&&a[x]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=v(N,f,m,S),-1<f&&(ee(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,f,m,S)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[x])De(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(G(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(De(f,a),f.h==0&&(f.src=null,u[T]=null)):ee(a)}}}function G(a){return a in k?k[a]:k[a]="on"+a}function U(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&q(a),a=f.call(m,u)}return a}function J(a){return a=a[T],a instanceof ve?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(u){return a.handleEvent(u)}),a[ie])}function re(){Be.call(this),this.i=new ve(this),this.M=this,this.F=null}C(re,Be),re.prototype[x]=!0,re.prototype.removeEventListener=function(a,u,f,m){W(this,a,u,f,m)};function ae(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new je(u,a);else if(u instanceof je)u.target=u.target||a;else{var S=u;u=new je(m,a),A(u,S)}if(S=!0,f)for(var N=f.length-1;0<=N;N--){var H=u.g=f[N];S=Ce(H,m,!0,u)&&S}if(H=u.g=a,S=Ce(H,m,!0,u)&&S,S=Ce(H,m,!1,u)&&S,f)for(N=0;N<f.length;N++)H=u.g=f[N],S=Ce(H,m,!1,u)&&S}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)ee(f[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},re.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ce(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,N=0;N<u.length;++N){var H=u[N];if(H&&!H.da&&H.capture==f){var xe=H.listener,it=H.ha||H.src;H.fa&&De(a.i,H),S=xe.call(it,m)!==!1&&S}}return S&&!m.defaultPrevented}function Te(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function qe(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,qe(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Nt extends Be{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(a){Be.call(this),this.h=a,this.g={}}C(Mt,Be);var Vs=[];function Dn(a){B(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}Mt.prototype.N=function(){Mt.aa.N.call(this),Dn(this)},Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=c.JSON.stringify,vt=c.JSON.parse,Ft=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function es(){}es.prototype.h=null;function Fu(a){return a.h||(a.h=a.i())}function Uu(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ha(){je.call(this,"d")}C(Ha,je);function Ka(){je.call(this,"c")}C(Ka,je);var _r={},$u=null;function Xi(){return $u=$u||new re}_r.La="serverreachability";function Bu(a){je.call(this,_r.La,a)}C(Bu,je);function Fs(a){const u=Xi();ae(u,new Bu(u))}_r.STAT_EVENT="statevent";function ju(a,u){je.call(this,_r.STAT_EVENT,a),this.stat=u}C(ju,je);function Et(a){const u=Xi();ae(u,new ju(u,a))}_r.Ma="timingevent";function zu(a,u){je.call(this,_r.Ma,a),this.size=u}C(zu,je);function Us(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function $s(){this.g=!0}$s.prototype.xa=function(){this.g=!1};function ty(a,u,f,m,S,N){a.info(function(){if(a.g)if(N)for(var H="",xe=N.split("&"),it=0;it<xe.length;it++){var Re=xe[it].split("=");if(1<Re.length){var ft=Re[0];Re=Re[1];var pt=ft.split("_");H=2<=pt.length&&pt[1]=="type"?H+(ft+"="+Re+"&"):H+(ft+"=redacted&")}}else H=null;else H=N;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+H})}function ny(a,u,f,m,S,N,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+N+" "+H})}function ts(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+sy(a,f)+(m?" "+m:"")})}function ry(a,u){a.info(function(){return"TIMEOUT: "+u})}$s.prototype.info=function(){};function sy(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var N=S[0];if(N!="noop"&&N!="stop"&&N!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return Zr(f)}catch{return u}}var Zi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ga;function eo(){}C(eo,es),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},Ga=new eo;function xn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new Mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hu}function Hu(){this.i=null,this.g="",this.h=!1}var Ku={},Wa={};function Qa(a,u,f){a.L=1,a.v=so(En(u)),a.m=f,a.P=!0,Gu(a,null)}function Gu(a,u){a.F=Date.now(),to(a),a.A=En(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ah(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Hu,a.g=bh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Nt(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Vs[0]=S.toString()),S=Vs);for(var N=0;N<S.length;N++){var H=V(f,S[N],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Fs(),ty(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const u=this.M;u&&wn(a)==3?u.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const pt=wn(this.g);var u=this.g.Ba();const ss=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||ph(this.g)))){this.J||pt!=4||u==7||(u==8||0>=ss?Fs(3):Fs(2)),Ya(this);var f=this.g.Z();this.X=f;t:if(Wu(this)){var m=ph(this.g);a="";var S=m.length,N=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Bs(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(N&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,ny(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,it=this.g;if((xe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(xe)){var Re=xe;break t}}Re=null}if(f=Re)ts(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,f);else{this.o=!1,this.s=3,Et(12),yr(this),Bs(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<H.length;)if(qt=iy(this,H),qt==Wa){pt==4&&(this.s=4,Et(14),f=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Ku){this.s=4,Et(15),ts(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else ts(this.i,this.l,qt,null),Ja(this,qt);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||H.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)ts(this.i,this.l,H,"[Invalid Chunked Response]"),yr(this),Bs(this);else if(0<H.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),rc(ft),ft.M=!0,Et(11))}}else ts(this.i,this.l,H,null),Ja(this,H);pt==4&&yr(this),this.o&&!this.J&&(pt==4?wh(this.j,this):(this.o=!1,to(this)))}else Ty(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),yr(this),Bs(this)}}}catch{}finally{}};function Wu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function iy(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Wa:(f=Number(u.substring(f,m)),isNaN(f)?Ku:(m+=1,m+f>u.length?Wa:(u=u.slice(m,m+f),a.C=m+f,u)))}xn.prototype.cancel=function(){this.J=!0,yr(this)};function to(a){a.S=Date.now()+a.I,Qu(a,a.I)}function Qu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(g(a.ba,a),u)}function Ya(a){a.B&&(c.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ry(this.i,this.A),this.L!=2&&(Fs(),Et(17)),yr(this),this.s=2,Bs(this)):Qu(this,this.S-a)};function Bs(a){a.j.G==0||a.J||wh(a.j,a)}function yr(a){Ya(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Dn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ja(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Xa(f.h,a))){if(!a.K&&Xa(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)lo(f),ao(f);else break e;nc(f),Et(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Us(g(f.Za,f),6e3));if(1>=Xu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Er(f,11)}else if((a.K||f.g==a)&&lo(f),!M(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Re=S[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const ft=Re[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=Re[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const ss=Re[5];ss!=null&&typeof ss=="number"&&0<ss&&(m=1.5*ss,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const qt=a.g;if(qt){const ho=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ho){var N=m.h;N.g||ho.indexOf("spdy")==-1&&ho.indexOf("quic")==-1&&ho.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Za(N,N.h),N.h=null))}if(m.D){const sc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(m.ya=sc,Ve(m.I,m.D,sc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var H=a;if(m.qa=Ah(m,m.J?m.ia:null,m.W),H.K){Zu(m.h,H);var xe=H,it=m.L;it&&(xe.I=it),xe.B&&(Ya(xe),to(xe)),m.g=H}else vh(m);0<f.i.length&&co(f)}else Re[0]!="stop"&&Re[0]!="close"||Er(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Er(f,7):tc(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}Fs(4)}catch{}}var oy=class{constructor(a,u){this.g=a,this.map=u}};function Yu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xu(a){return a.h?1:a.g?a.g.size:0}function Xa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Za(a,u){a.g?a.g.add(u):a.h=u}function Zu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Yu.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return P(a.i)}function ay(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function cy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function th(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=cy(a),m=ay(a),S=m.length,N=0;N<S;N++)u.call(void 0,m[N],f&&f[N],a)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ly(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var N=a[f].substring(0,m);S=a[f].substring(m+1)}else N=a[f];u(N,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,no(this,a.j),this.o=a.o,this.g=a.g,ro(this,a.s),this.l=a.l;var u=a.i,f=new qs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),rh(this,f),this.m=a.m}else a&&(u=String(a).match(nh))?(this.h=!1,no(this,u[1]||"",!0),this.o=js(u[2]||""),this.g=js(u[3]||"",!0),ro(this,u[4]),this.l=js(u[5]||"",!0),rh(this,u[6]||"",!0),this.m=js(u[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(zs(u,sh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(zs(u,sh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?dy:hy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,py)),a.join("")};function En(a){return new vr(a)}function no(a,u,f){a.j=f?js(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ro(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function rh(a,u,f){u instanceof qs?(a.i=u,gy(a.i,a.h)):(f||(u=zs(u,fy)),a.i=new qs(u,a.h))}function Ve(a,u,f){a.i.set(u,f)}function so(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,uy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sh=/[#\/\?@]/g,hy=/[#\?:]/g,dy=/[#\?]/g,fy=/[#\?@]/g,py=/#/g;function qs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&ly(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=qs.prototype,t.add=function(a,u){Ln(this),this.i=null,a=ns(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function ih(a,u){Ln(a),u=ns(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function oh(a,u){return Ln(a),u=ns(a,u),a.g.has(u)}t.forEach=function(a,u){Ln(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=a[m];for(let N=0;N<S.length;N++)f.push(u[m])}return f},t.V=function(a){Ln(this);let u=[];if(typeof a=="string")oh(this,a)&&(u=u.concat(this.g.get(ns(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Ln(this),this.i=null,a=ns(this,a),oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ah(a,u,f){ih(a,u),0<f.length&&(a.i=null,a.g.set(ns(a,u),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const N=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var S=N;H[m]!==""&&(S+="="+encodeURIComponent(String(H[m]))),a.push(S)}}return this.i=a.join("&")};function ns(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function gy(a,u){u&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(ih(this,m),ah(this,S,f))},a)),a.j=u}function my(a,u){const f=new $s;if(c.Image){const m=new Image;m.onload=_(Vn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Vn,f,"TestLoadImage: error",!1,u,m),m.onabort=_(Vn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Vn,f,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function _y(a,u){const f=new $s,m=new AbortController,S=setTimeout(()=>{m.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(S),N.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Vn(f,"TestPingServer: error",!1,u)})}function Vn(a,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function yy(){this.g=new Ft}function vy(a,u,f){const m=f||"";try{th(a,function(S,N){let H=S;h(S)&&(H=Zr(S)),u.push(m+N+"="+encodeURIComponent(H))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Hs(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Hs,es),Hs.prototype.g=function(){return new io(this.l,this.j)},Hs.prototype.i=function(a){return function(){return a}}({});function io(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(io,re),t=io.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ch(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ch(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ks(this):Gs(this),this.readyState==3&&ch(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},t.Qa=function(a){this.g&&(this.response=a,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lh(a){let u="";return B(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function ec(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=lh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ve(a,u,f))}function ze(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ze,re);var Ey=/^https?$/i,wy=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?Fu(this.o):Fu(Ga),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){uh(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wy,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of f)this.g.setRequestHeader(N,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){uh(this,N)}};function uh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,hh(a),oo(a)}function hh(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dh(this):this.bb())},t.bb=function(){dh(this)};function dh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)Te(a.Ea,0,a);else if(ae(a,"readystatechange"),wn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=H===0){var S=String(a.D).match(nh)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!Ey.test(S?S.toLowerCase():"")}f=m}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var N=2<wn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",hh(a)}}finally{oo(a)}}}}function oo(a,u){if(a.g){fh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ae(a,"ready");try{f.onreadystatechange=m}catch{}}}function fh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vt(u)}};function ph(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ty(a){const u={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=R(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[S]||[];u[S]=N,N.push(f)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function gh(a){this.Aa=0,this.i=[],this.j=new $s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yu(a&&a.concurrentRequestLimit),this.Da=new yy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Et(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ah(this,null,this.W),co(this)};function tc(a){if(mh(a),a.G==3){var u=a.U++,f=En(a.I);if(Ve(f,"SID",a.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Qs(a,f),u=new xn(a,a.j,u),u.L=2,u.v=so(En(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=bh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),to(u)}Ih(a)}function ao(a){a.g&&(rc(a),a.g.cancel(),a.g=null)}function mh(a){ao(a),a.u&&(c.clearTimeout(a.u),a.u=null),lo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function co(a){if(!Ju(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||zt(),me||(ye(),me=!0),Ot.add(u,a),a.B=0}}function Iy(a,u){return Xu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(g(a.Ga,a,u),Th(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new xn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(S.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=yh(this,S,u),f=En(this.I),Ve(f,"RID",a),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Qs(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(lh(N)))+"&"+u:this.m&&ec(f,this.m,N)),Za(this.h,S),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),S.T=!0,Qa(S,f,null)):Qa(S,f,u),this.G=2}}else this.G==3&&(a?_h(this,a):this.i.length==0||Ju(this.h)||_h(this))};function _h(a,u){var f;u?f=u.l:f=a.U++;const m=En(a.I);Ve(m,"SID",a.K),Ve(m,"RID",f),Ve(m,"AID",a.T),Qs(a,m),a.m&&a.o&&ec(m,a.m,a.o),f=new xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=yh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Za(a.h,f),Qa(f,m,u)}function Qs(a,u){a.H&&B(a.H,function(f,m){Ve(u,m,f)}),a.l&&th({},function(f,m){Ve(u,m,f)})}function yh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let N=-1;for(;;){const H=["count="+f];N==-1?0<f?(N=S[0].g,H.push("ofs="+N)):N=0:H.push("ofs="+N);let xe=!0;for(let it=0;it<f;it++){let Re=S[it].g;const ft=S[it].map;if(Re-=N,0>Re)N=Math.max(0,S[it].g-100),xe=!1;else try{vy(ft,H,"req"+Re+"_")}catch{m&&m(ft)}}if(xe){m=H.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function vh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||zt(),me||(ye(),me=!0),Ot.add(u,a),a.v=0}}function nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(g(a.Fa,a),Th(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),ao(this),Eh(this))};function rc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Eh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=En(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Qs(a,u),a.m&&a.o&&ec(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=so(En(u)),f.m=null,f.P=!0,Gu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ao(this),nc(this),Et(19))};function lo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function wh(a,u){var f=null;if(a.g==u){lo(a),rc(a),a.g=null;var m=2}else if(Xa(a.h,u))f=u.D,Zu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=Xi(),ae(m,new zu(m,f)),co(a)}else vh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&Iy(a,u)||m==2&&nc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function Th(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Er(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new vr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||no(m,"https"),so(m),S?my(m.toString(),f):_y(m.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),Ih(a),mh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ih(a){if(a.G=0,a.ka=[],a.l){const u=eh(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Ah(a,u,f){var m=f instanceof vr?En(f):new vr(f);if(m.g!="")u&&(m.g=u+"."+m.g),ro(m,m.s);else{var S=c.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var N=new vr(null);m&&no(N,m),u&&(N.g=u),S&&ro(N,S),f&&(N.l=f),m=N}return f=a.D,u=a.ya,f&&u&&Ve(m,f,u),Ve(m,"VER",a.la),Qs(a,m),m}function bh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ze(new Hs({eb:f})):new ze(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rh(){}t=Rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uo(){}uo.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){re.call(this),this.g=new gh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new rs(this)}C(Dt,re),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){tc(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Zr(a),a=f);u.i.push(new oy(u.Ya++,a)),u.G==3&&co(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,tc(this.g),delete this.g,Dt.aa.N.call(this)};function Sh(a){Ha.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Sh,Ha);function Ch(){Ka.call(this),this.status=1}C(Ch,Ka);function rs(a){this.g=a}C(rs,Rh),rs.prototype.ua=function(){ae(this.g,"a")},rs.prototype.ta=function(a){ae(this.g,new Sh(a))},rs.prototype.sa=function(a){ae(this.g,new Ch)},rs.prototype.ra=function(){ae(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Om=function(){return new uo},km=function(){return Xi()},Pm=_r,il={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Vo=Zi,qu.COMPLETE="complete",Cm=qu,Uu.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",re.prototype.listen=re.prototype.K,ri=Uu,Sm=Hs,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Rm=ze}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});const ff="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Ns="10.12.5";/**
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
 */const jr=new ql("@firebase/firestore");function Xs(){return jr.logLevel}function te(t,...e){if(jr.logLevel<=_e.DEBUG){const n=e.map(ou);jr.debug(`Firestore (${Ns}): ${t}`,...n)}}function kn(t,...e){if(jr.logLevel<=_e.ERROR){const n=e.map(ou);jr.error(`Firestore (${Ns}): ${t}`,...n)}}function As(t,...e){if(jr.logLevel<=_e.WARN){const n=e.map(ou);jr.warn(`Firestore (${Ns}): ${t}`,...n)}}function ou(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Ye(t,e){t||ge()}function we(t,e){return t}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Nm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class Tb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ib{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string"),new Nm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new mt(e)}}class Ab{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ab(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new Rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class St{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new St(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new St(0,0))}static max(){return new fe(new St(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Oi{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const Pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Oi{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return Pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ue.fromString(e))}static fromName(e){return new ue(Ue.fromString(e).popFirst(5))}static empty(){return new ue(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ue(e.slice()))}}function kb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new ur(s,ue.empty(),e)}function Ob(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(fe.min(),ue.empty(),-1)}static max(){return new ur(fe.max(),ue.empty(),-1)}}function Nb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Db="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function au(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==Db)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Lb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cu.oe=-1;function Da(t){return t==null}function ol(t){return t===0&&1/t==-1/0}/**
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
 */function pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(e){return new gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new ut(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xm("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=Mb.exec(t);if(Ye(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uu(t){const e=t.mapValue.fields.__previous_value__;return lu(e)?uu(e):e}function Ni(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
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
 */class Fb{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lu(t)?4:Ub(t)?9007199254740991:10:ge()}function _n(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),c=hr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return zr(s.bytesValue).isEqual(zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?ol(o)===ol(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(pf(o)!==pf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!_n(o[l],c[l])))return!1;return!0}(t,e);default:return ge()}}function xi(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return mf(t.timestampValue,e.timestampValue);case 4:return mf(Ni(t),Ni(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const c=zr(i),l=zr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Pe(c[h],l[h]);if(d!==0)return d}return Pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Pe(We(i.latitude),We(o.latitude));return c!==0?c:Pe(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const d=Rs(c[h],l[h]);if(d)return d}return Pe(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Pe(l[p],d[p]);if(g!==0)return g;const _=Rs(c[l[p]],h[d[p]]);if(_!==0)return _}return Pe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=hr(t),r=hr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Ss(t){return al(t)}function al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=al(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${al(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function cl(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sc(t){return!!t&&"mapValue"in t}function mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Sc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mi(n)}setAll(e){let n=It.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=mi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Sc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Sc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xa(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new on(mi(this.value))}}/**
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
 */class _t{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _t(e,0,fe.min(),fe.min(),fe.min(),on.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,fe.min(),fe.min(),on.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,fe.min(),fe.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ra{constructor(e,n="asc"){this.field=e,this.dir=n}}function $b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lm{}class Je extends Lm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jb(e,n,r):n==="array-contains"?new Hb(e,r):n==="in"?new Kb(e,r):n==="not-in"?new Gb(e,r):n==="array-contains-any"?new Wb(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zb(e,r):new qb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Lm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return Vm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vm(t){return t.op==="and"}function Mm(t){return Bb(t)&&Vm(t)}function Bb(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function ll(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(Mm(t))return t.filters.map(e=>ll(e)).join(",");{const e=t.filters.map(n=>ll(n)).join(",");return`${t.op}(${e})`}}function Fm(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Fm(o,s.filters[c]),!0):!1}(t,e):void ge()}function Um(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Um).join(" ,")+"}"}(t):"Filter"}class jb extends Je{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class zb extends Je{constructor(e,n){super(e,"in",n),this.keys=$m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qb extends Je{constructor(e,n){super(e,"not-in",n),this.keys=$m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class Hb extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&xi(n.arrayValue,this.value)}}class Kb extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class Gb extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class Wb extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xi(this.value.arrayValue,r))}}/**
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
 */class Qb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qb(t,e,n,r,s,i,o)}function du(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function ul(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class La{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yb(t,e,n,r,s,i,o,c){return new La(t,e,n,r,s,i,o,c)}function pu(t){return new La(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jb(t){return t.collectionGroup!==null}function _i(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ut(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ra(i,r))}),n.has(It.keyField().canonicalString())||e.ce.push(new ra(It.keyField(),r))}return e.ce}function fn(t){const e=we(t);return e.le||(e.le=Xb(e,_i(t))),e.le}function Xb(t,e){if(t.limitType==="F")return wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ra(s.field,i)});const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hl(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Va(t,e){return fu(fn(t),fn(e))&&t.limitType===e.limitType}function Bm(t){return`${du(fn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Um(s)).join(", ")}]`),Da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=vf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,c,l){const h=vf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,_i(r),s))}(t,e)}function Zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jm(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=eR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eR(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Rs(l,h):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xa(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vb(this.inner)}size(){return this.innerSize}}/**
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
 */const tR=new Ke(ue.comparator);function dr(){return tR}const zm=new Ke(ue.comparator);function si(...t){let e=zm;for(const n of t)e=e.insert(n.key,n);return e}function nR(t){let e=zm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return yi()}function qm(){return yi()}function yi(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const rR=new ut(ue.comparator);function Ae(...t){let e=rR;for(const n of t)e=e.add(n);return e}const sR=new ut(Pe);function iR(){return sR}/**
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
 */function oR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ol(e)?"-0":e}}function aR(t){return{integerValue:""+t}}/**
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
 */class Fa{constructor(){this._=void 0}}function cR(t,e,n){return t instanceof dl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lu(i)&&(i=uu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof sa?Hm(t,e):t instanceof ia?Km(t,e):function(s,i){const o=uR(s,i),c=If(o)+If(s.Pe);return cl(o)&&cl(s.Pe)?aR(c):oR(s.serializer,c)}(t,e)}function lR(t,e,n){return t instanceof sa?Hm(t,e):t instanceof ia?Km(t,e):n}function uR(t,e){return t instanceof fl?function(r){return cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class dl extends Fa{}class sa extends Fa{constructor(e){super(),this.elements=e}}function Hm(t,e){const n=Gm(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends Fa{constructor(e){super(),this.elements=e}}function Km(t,e){let n=Gm(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class fl extends Fa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function If(t){return We(t.integerValue||t.doubleValue)}function Gm(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof sa&&s instanceof sa||r instanceof ia&&s instanceof ia?bs(r.elements,s.elements,_n):r instanceof fl&&s instanceof fl?_n(r.Pe,s.Pe):r instanceof dl&&s instanceof dl}(t.transform,e.transform)}class xr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function Wm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fR(t.key,xr.none()):new mu(t.key,t.data,xr.none());{const n=t.data,r=on.empty();let s=new ut(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ua(t.key,r,new Jn(s.toArray()),xr.none())}}function dR(t,e,n){t instanceof mu?function(s,i,o){const c=s.value.clone(),l=bf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ua?function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=bf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Qm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof mu?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const h=i.value.clone(),d=Rf(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ua?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const h=Rf(i.fieldTransforms,l,o),d=o.data;return d.setAll(Qm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>hR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends gu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ua extends gu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bf(t,e,n){const r=new Map;Ye(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,lR(o,c,n[s]))}return r}function Rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,cR(i,o,e))}return r}class fR extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Wm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>Af(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>Af(n,r))}}/**
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
 */class gR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,Ee;function Ym(t){if(t===void 0)return kn("GRPC error has no .code"),K.UNKNOWN;switch(t){case Ge.OK:return K.OK;case Ge.CANCELLED:return K.CANCELLED;case Ge.UNKNOWN:return K.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return K.INTERNAL;case Ge.UNAVAILABLE:return K.UNAVAILABLE;case Ge.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Ge.NOT_FOUND:return K.NOT_FOUND;case Ge.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Ge.ABORTED:return K.ABORTED;case Ge.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Ge.DATA_LOSS:return K.DATA_LOSS;default:return ge()}}(Ee=Ge||(Ge={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _R(){return new TextEncoder}/**
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
 */const yR=new Dr([4294967295,4294967295],0);function Sf(t){const e=_R().encode(t),n=new bm;return n.update(e),new Uint8Array(n.digest())}function Cf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class _u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(yR)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _u(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(fe.min(),s,new Ke(Pe),dr(),Ae())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,Ae(),Ae(),Ae())}}/**
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
 */class Fo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Jm{constructor(e,n){this.targetId=e,this.me=n}}class Xm{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.fe=0,this.ge=Of(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new Qi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Of()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vR{constructor(e){this.Le=e,this.Be=new Map,this.ke=dr(),this.qe=kf(),this.Qe=new Ke(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ul(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,_t.newNoDocument(o,fe.min()))}else Ye(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=zr(r).toUint8Array()}catch(l){if(l instanceof xm)return As("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _u(o,s,i)}catch(l){return As(l instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&ul(c.target)){const l=new ue(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,_t.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Ae();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.Qe,this.ke,r);return this.ke=dr(),this.qe=kf(),this.Qe=new Ke(Pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Pf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kf(){return new Ke(ue.comparator)}function Of(){return new Ke(ue.comparator)}const ER={asc:"ASCENDING",desc:"DESCENDING"},wR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TR={and:"AND",or:"OR"};class IR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pl(t,e){return t.useProto3Json||Da(e)?e:{value:e}}function AR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vs(t){return Ye(!!t),fe.fromTimestamp(function(n){const r=hr(n);return new St(r.seconds,r.nanos)}(t))}function RR(t,e){return gl(t,e).canonicalString()}function gl(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zm(t){const e=Ue.fromString(t);return Ye(s_(e)),e}function Cc(t,e){const n=Zm(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(t_(n))}function e_(t,e){return RR(t.databaseId,e)}function SR(t){const e=Zm(t);return e.length===4?Ue.emptyPath():t_(e)}function Nf(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t_(t){return Ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ye(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(Ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?K.UNKNOWN:Ym(h.code);return new oe(d,h.message||"")}(o);n=new Xm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cc(t,r.document.name),i=vs(r.document.updateTime),o=r.document.createTime?vs(r.document.createTime):fe.min(),c=new on({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Fo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cc(t,r.document),i=r.readTime?vs(r.readTime):fe.min(),o=_t.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mR(s,i),c=r.targetId;n=new Jm(c,o)}}return n}function PR(t,e){return{documents:[e_(t,e.path)]}}function kR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=e_(t,s);const i=function(h){if(h.length!==0)return r_(yn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:us(g.field),direction:DR(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=pl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function OR(t){let e=SR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ye(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=n_(p);return g instanceof yn&&Mm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new ra(hs(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Da(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new na(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new na(_,g)}(n.endAt)),Yb(e,s,o,i,c,"F",l,h)}function NR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>n_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function DR(t){return ER[t]}function xR(t){return wR[t]}function LR(t){return TR[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return It.fromServerFormat(t.fieldPath)}function r_(t){return t instanceof Je?function(n){if(n.op==="=="){if(yf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(_f(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(_f(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:xR(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>r_(s));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):ge()}function s_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Xn{constructor(e,n,r,s,i=fe.min(),o=fe.min(),c=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VR{constructor(e){this.ct=e}}function MR(t){const e=OR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
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
 */class FR{constructor(){this.an=new UR}addToCollectionParentIndex(e,n){return this.an.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ur.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class UR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Ue.comparator)).toArray()}}/**
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
 */class Cs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Cs(0)}static Bn(){return new Cs(-1)}}/**
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
 */class $R{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Jn.empty(),St.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=dr();const o=yi(),c=function(){return yi()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ua)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),vi(d.mutation,h,d.mutation.getFieldMask(),St.now())):o.set(h.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new BR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new Ke((o,c)=>o-c),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Jn.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||Ae()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=qm();d.forEach(g=>{if(!i.has(g)){const _=Wm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Pr());let c=-1,l=i;return o.next(h=>F.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ae())).next(d=>({batchId:c,changes:nR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const h=function(p,g){return new La(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let c=si();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&vi(d.mutation,h,Jn.empty(),St.now()),Ma(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class zR{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return F.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vs(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:MR(s.bundledQuery),readTime:vs(s.readTime)}}(n)),F.resolve()}}/**
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
 */class qR{constructor(){this.overlays=new Ke(ue.comparator),this.Pr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new ue(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return F.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gR(n,r));let i=this.Pr.get(n);i===void 0&&(i=Ae(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class HR{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class yu{constructor(){this.Ir=new ut(Ze.Tr),this.Er=new ut(Ze.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ue(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Er.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ue(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=Ae();return this.Er.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ue.comparator(e.key,n.key)||Pe(e.yr,n.yr)}static dr(e,n){return Pe(e.yr,n.yr)||ue.comparator(e.key,n.key)}}/**
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
 */class KR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ut(Ze.Tr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Sr=this.Sr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const c=this.br(o.yr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Pe);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],c=>{r=r.add(c.yr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new ue(i),0);let c=new ut(Pe);return this.Sr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.yr)),!0)},o),F.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ye(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return F.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Sr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GR{constructor(e){this.Fr=e,this.docs=function(){return new Ke(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dr();const o=n.path,c=new ue(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nb(Ob(d),r)<=0||(s.has(d.key)||Ma(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Mr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WR(this)}getSize(e){return F.resolve(this.size)}}class WR extends $R{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class QR{constructor(e){this.persistence=e,this.Or=new Ds(n=>du(n),fu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new yu,this.targetCount=0,this.Br=Cs.Ln()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),F.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Qn(n),F.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Lr.containsKey(n))}}/**
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
 */class YR{constructor(e,n){this.kr={},this.overlays={},this.qr=new cu(0),this.Qr=!1,this.Qr=!0,this.Kr=new HR,this.referenceDelegate=e(this),this.$r=new QR(this),this.indexManager=new FR,this.remoteDocumentCache=function(s){return new GR(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new VR(n),this.Wr=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new KR(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new JR(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(i=>this.referenceDelegate.zr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}jr(e,n){return F.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class JR extends xb{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Hr=new yu,this.Jr=null}static Yr(e){return new vu(e)}get Zr(){if(this.Jr)return this.Jr;throw ge()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Zr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Zr,r=>{const s=ue.fromPath(r);return this.Xr(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return F.or([()=>F.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
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
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=s}static Ui(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
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
 */class XR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZR{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Uw()?8:Lb(ht())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Yi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XR;return this.Zi(e,n,o).next(c=>{if(i.result=c,this.Gi)return this.Xi(e,n,o,c.size)})}).next(()=>i.result)}Xi(e,n,r,s){return r.documentReadCount<this.zi?(Xs()<=_e.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),F.resolve()):(Xs()<=_e.DEBUG&&te("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(Xs()<=_e.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):F.resolve())}Ji(e,n){if(Tf(n))return F.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hl(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.Hi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.es(n,c);return this.ts(n,h,o,l.readTime)?this.Ji(e,hl(n,null,"F")):this.ns(e,h,n,l)}))})))}Yi(e,n,r,s){return Tf(n)||s.isEqual(fe.min())?F.resolve(null):this.Hi.getDocuments(e,r).next(i=>{const o=this.es(n,i);return this.ts(n,o,r,s)?F.resolve(null):(Xs()<=_e.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.ns(e,o,n,kb(s,-1)).next(c=>c))})}es(e,n){let r=new ut(jm(e));return n.forEach((s,i)=>{Ma(e,i)&&(r=r.add(i))}),r}ts(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zi(e,n,r){return Xs()<=_e.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Hi.getDocumentsMatchingQuery(e,n,ur.min(),r)}ns(e,n,r,s){return this.Hi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class eS{constructor(e,n,r,s){this.persistence=e,this.rs=n,this.serializer=s,this.ss=new Ke(Pe),this.os=new Ds(i=>du(i),fu),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function tS(t,e,n,r){return new eS(t,e,n,r)}async function i_(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ae();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function o_(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function nS(t,e){const n=we(t),r=e.snapshotVersion;let s=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.us.newChangeBuffer({trackRemovals:!0});s=n.ss;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.$r.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.$r.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(dt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,O,j){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,_,d)&&c.push(n.$r.updateTargetData(i,_))});let l=dr(),h=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(rS(i,o,e.documentUpdates).next(d=>{l=d.hs,h=d.Ps})),!r.isEqual(fe.min())){const d=n.$r.getLastRemoteSnapshotVersion(i).next(p=>n.$r.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ss=s,i))}function rS(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=dr();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):te("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{hs:o,Ps:s}})}function sS(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.$r.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.$r.allocateTargetId(r).next(o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function ml(t,e,n){const r=we(t),s=r.ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(s.target)}function Df(t,e,n){const r=we(t);let s=fe.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=we(l),g=p.os.get(d);return g!==void 0?F.resolve(p.ss.get(g)):p.$r.getTargetData(h,d)}(r,o,fn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ae())).next(c=>(iS(r,Zb(e),c),{documents:c,Is:i})))}function iS(t,e,n){let r=t._s.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t._s.set(e,r)}class xf{constructor(){this.activeTargetIds=iR()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oS{constructor(){this.io=new xf,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new xf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aS{oo(e){}shutdown(){}}/**
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
 */class Lf{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Pc(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
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
 */const cS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lS{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const gt="WebChannelConnection";class uS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get vo(){return!1}Fo(n,r,s,i,o){const c=Pc(),l=this.Mo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,i,o),this.Oo(n,l,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw As("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}No(n,r,s,i,o,c){return this.Fo(n,r,s,i,o)}xo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Mo(n,r){const s=cS[n];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,s){const i=Pc();return new Promise((o,c)=>{const l=new Rm;l.setWithCredentials(!0),l.listenOnce(Cm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vo.NO_ERROR:const d=l.getResponseJson();te(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Vo.TIMEOUT:te(gt,`RPC '${e}' ${i} timed out`),c(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case Vo.HTTP_ERROR:const p=l.getStatus();if(te(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const C=function(O){const j=O.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(j)>=0?j:K.UNKNOWN}(_.status);c(new oe(C,_.message))}else c(new oe(K.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new oe(K.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{te(gt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(gt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Lo(e,n,r){const s=Pc(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Om(),c=km(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Sm({})),this.xo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");te(gt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,_=!1;const C=new lS({Po:O=>{_?te(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(te(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(gt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Io:()=>p.close()}),P=(O,j,M)=>{O.listen(j,L=>{try{M(L)}catch(z){setTimeout(()=>{throw z},0)}})};return P(p,ri.EventType.OPEN,()=>{_||(te(gt,`RPC '${e}' stream ${s} transport opened.`),C.po())}),P(p,ri.EventType.CLOSE,()=>{_||(_=!0,te(gt,`RPC '${e}' stream ${s} transport closed`),C.wo())}),P(p,ri.EventType.ERROR,O=>{_||(_=!0,As(gt,`RPC '${e}' stream ${s} transport errored:`,O),C.wo(new oe(K.UNAVAILABLE,"The operation could not be completed")))}),P(p,ri.EventType.MESSAGE,O=>{var j;if(!_){const M=O.data[0];Ye(!!M);const L=M,z=L.error||((j=L[0])===null||j===void 0?void 0:j.error);if(z){te(gt,`RPC '${e}' stream ${s} received error:`,z);const le=z.status;let B=function(E){const A=Ge[E];if(A!==void 0)return Ym(A)}(le),I=z.message;B===void 0&&(B=K.INTERNAL,I="Unknown error status: "+le+" with message "+z.message),_=!0,C.wo(new oe(B,I)),p.close()}else te(gt,`RPC '${e}' stream ${s} received:`,M),C.So(M)}}),P(c,Pm.STAT_EVENT,O=>{O.stat===il.PROXY?te(gt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===il.NOPROXY&&te(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.yo()},0),C}}function kc(){return typeof document<"u"?document:null}/**
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
 */function a_(t){return new IR(t,!0)}/**
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
 */class c_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=s,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class hS{constructor(e,n,r,s,i,o,c,l){this.ai=e,this.jo=r,this.Ho=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new c_(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===n&&this.h_(r,s)},r=>{e(()=>{const s=new oe(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dS extends hS{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?vs(o.readTime):fe.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ul(l)?{documents:PR(i,l)}:{query:kR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bR(i,o.resumeToken);const h=pl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){c.readTime=AR(i,o.snapshotVersion.toTimestamp());const h=pl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=NR(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.__(n)}}/**
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
 */class fS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,gl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(K.UNKNOWN,i.toString())})}No(e,n,r,s,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.No(e,gl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(K.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class pS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(kn(n),this.b_=!1):te("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class gS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=we(l);h.N_.add(4),await Yi(h),h.k_.set("Unknown"),h.N_.delete(4),await Ba(h)}(this))})}),this.k_=new pS(r,s)}}async function Ba(t){if(Ji(t))for(const e of t.L_)await e(!0)}async function Yi(t){for(const e of t.L_)await e(!1)}function l_(t,e){const n=we(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Au(n)?Iu(n):xs(n).n_()&&Tu(n,e))}function wu(t,e){const n=we(t),r=xs(n);n.O_.delete(e),r.n_()&&u_(n,e),n.O_.size===0&&(r.n_()?r.s_():Ji(n)&&n.k_.set("Unknown"))}function Tu(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).d_(e)}function u_(t,e){t.q_.xe(e),xs(t).A_(e)}function Iu(t){t.q_=new vR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.k_.D_()}function Au(t){return Ji(t)&&!xs(t).t_()&&t.O_.size>0}function Ji(t){return we(t).N_.size===0}function h_(t){t.q_=void 0}async function mS(t){t.k_.set("Online")}async function _S(t){t.O_.forEach((e,n)=>{Tu(t,e)})}async function yS(t,e){h_(t),Au(t)?(t.k_.F_(e),Iu(t)):t.k_.set("Unknown")}async function vS(t,e,n){if(t.k_.set("Online"),e instanceof Xm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.O_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.O_.delete(c),s.q_.removeTarget(c))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vf(t,r)}else if(e instanceof Fo?t.q_.Ke(e):e instanceof Jm?t.q_.He(e):t.q_.We(e),!n.isEqual(fe.min()))try{const r=await o_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.O_.get(h);d&&i.O_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.O_.get(l);if(!d)return;i.O_.set(l,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),u_(i,l);const p=new Xn(d.target,l,h,d.sequenceNumber);Tu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Vf(t,r)}}async function Vf(t,e,n){if(!Wi(e))throw e;t.N_.add(1),await Yi(t),t.k_.set("Offline"),n||(n=()=>o_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Ba(t)})}async function Mf(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.N_.add(3),await Yi(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Ba(n)}async function ES(t,e){const n=we(t);e?(n.N_.delete(2),await Ba(n)):e||(n.N_.add(2),await Yi(n),n.k_.set("Unknown"))}function xs(t){return t.Q_||(t.Q_=function(n,r,s){const i=we(n);return i.y_(),new dS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{To:mS.bind(null,t),Ao:_S.bind(null,t),Vo:yS.bind(null,t),E_:vS.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Au(t)?Iu(t):t.k_.set("Unknown")):(await t.Q_.stop(),h_(t))})),t.Q_}/**
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
 */class bu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new bu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function d_(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Wi(t))return new oe(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ff{constructor(){this.U_=new Ke(ue.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):ge():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ps(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wS{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class TS{constructor(){this.queries=Uf(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=Uf(),i.forEach((o,c)=>{for(const l of c.z_)l.onError(r)})})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function Uf(){return new Ds(t=>Bm(t),Va)}async function f_(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.j_()&&e.H_()&&(r=2):(i=new wS,r=e.H_()?0:1);try{switch(r){case 0:i.G_=await n.onListen(s,!0);break;case 1:i.G_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=d_(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.z_.push(e),e.Y_(n.onlineState),i.G_&&e.Z_(i.G_)&&Ru(n)}async function p_(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.z_.indexOf(e);o>=0&&(i.z_.splice(o,1),i.z_.length===0?s=e.H_()?0:1:!i.j_()&&e.H_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IS(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.z_)c.Z_(s)&&(r=!0);o.G_=s}}r&&Ru(n)}function AS(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.z_)i.onError(n);r.queries.delete(e)}function Ru(t){t.J_.forEach(e=>{e.next()})}var _l,$f;($f=_l||(_l={})).X_="default",$f.Cache="cache";class g_{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==_l.Cache}}/**
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
 */class m_{constructor(e){this.key=e}}class __{constructor(e){this.key=e}}class bS{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=Ae(),this.mutatedKeys=Ae(),this.da=jm(e),this.Aa=new Es(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new Ff,s=n?n.Aa:this.Aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=Ma(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?C!==P&&(r.track({type:3,doc:_}),O=!0):this.fa(g,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.da(_,l)>0||h&&this.da(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:c,mutatedKeys:i}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,p)=>function(_,C){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return P(_)-P(C)}(d.type,p.type)||this.da(d.doc,p.doc)),this.ga(r),s=s!=null&&s;const c=n&&!s?this.pa():[],l=this.Ea.size===0&&this.current&&!s?1:0,h=l!==this.Ta;return this.Ta=l,o.length!==0||h?{snapshot:new Ps(this.query,e.Aa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Ff,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=Ae(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new __(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new m_(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=Ae();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Ps.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class RS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SS{constructor(e){this.key=e,this.Da=!1}}class CS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Ds(c=>Bm(c),Va),this.Fa=new Map,this.Ma=new Set,this.xa=new Ke(ue.comparator),this.Oa=new Map,this.Na=new yu,this.La={},this.Ba=new Map,this.ka=Cs.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function PS(t,e,n=!0){const r=T_(t);let s;const i=r.va.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ba()):s=await y_(r,e,n,!0),s}async function kS(t,e){const n=T_(t);await y_(n,e,!0,!1)}async function y_(t,e,n,r){const s=await sS(t.localStore,fn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await OS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&l_(t.remoteStore,s),c}async function OS(t,e,n,r,s){t.Qa=(p,g,_)=>async function(P,O,j,M){let L=O.view.Va(j);L.ts&&(L=await Df(P.localStore,O.query,!1).then(({documents:I})=>O.view.Va(I,L)));const z=M&&M.targetChanges.get(O.targetId),le=M&&M.targetMismatches.get(O.targetId)!=null,B=O.view.applyChanges(L,P.isPrimaryClient,z,le);return jf(P,O.targetId,B.ya),B.snapshot}(t,p,g,_);const i=await Df(t.localStore,e,!0),o=new bS(e,i.Is),c=o.Va(i.documents),l=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);jf(t,n,h.ya);const d=new RS(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),h.snapshot}async function NS(t,e,n){const r=we(t),s=r.va.get(e),i=r.Fa.get(s.targetId);if(i.length>1)return r.Fa.set(s.targetId,i.filter(o=>!Va(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ml(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),yl(r,s.targetId)}).catch(au)):(yl(r,s.targetId),await ml(r.localStore,s.targetId,!0))}async function DS(t,e){const n=we(t),r=n.va.get(e),s=n.Fa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function v_(t,e){const n=we(t);try{const r=await nS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Oa.get(i);o&&(Ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Da=!0:s.modifiedDocuments.size>0?Ye(o.Da):s.removedDocuments.size>0&&(Ye(o.Da),o.Da=!1))}),await w_(n,r,e)}catch(r){await au(r)}}function Bf(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.va.forEach((i,o)=>{const c=o.view.Y_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=we(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.z_)g.Y_(c)&&(h=!0)}),h&&Ru(l)}(r.eventManager,e),s.length&&r.Ca.E_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xS(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Oa.get(e),i=s&&s.key;if(i){let o=new Ke(ue.comparator);o=o.insert(i,_t.newNoDocument(i,fe.min()));const c=Ae().add(i),l=new $a(fe.min(),new Map,new Ke(Pe),o,c);await v_(r,l),r.xa=r.xa.remove(i),r.Oa.delete(e),Su(r)}else await ml(r.localStore,e,!1).then(()=>yl(r,e,n)).catch(au)}function yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||E_(t,r)})}function E_(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(wu(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Su(t))}function jf(t,e,n){for(const r of n)r instanceof m_?(t.Na.addReference(r.key,e),LS(t,r)):r instanceof __?(te("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||E_(t,r.key)):ge()}function LS(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Su(t))}function Su(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ue(Ue.fromString(e)),r=t.ka.next();t.Oa.set(r,new SS(n)),t.xa=t.xa.insert(n,r),l_(t.remoteStore,new Xn(fn(pu(n.path)),r,"TargetPurposeLimboResolution",cu.oe))}}async function w_(t,e,n){const r=we(t),s=[],i=[],o=[];r.va.isEmpty()||(r.va.forEach((c,l)=>{o.push(r.Qa(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Eu.Ui(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.E_(s),await async function(l,h){const d=we(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.Ki,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>F.forEach(g.$i,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Wi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=d.ss.get(g),C=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(C);d.ss=d.ss.insert(g,P)}}}(r.localStore,i))}async function VS(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await i_(n.localStore,e);n.currentUser=e,function(i,o){i.Ba.forEach(c=>{c.forEach(l=>{l.reject(new oe(K.CANCELLED,o))})}),i.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await w_(n,r.ls)}}function MS(t,e){const n=we(t),r=n.Oa.get(e);if(r&&r.Da)return Ae().add(r.key);{let s=Ae();const i=n.Fa.get(e);if(!i)return s;for(const o of i){const c=n.va.get(o);s=s.unionWith(c.view.Ra)}return s}}function T_(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xS.bind(null,e),e.Ca.E_=IS.bind(null,e.eventManager),e.Ca.Ka=AS.bind(null,e.eventManager),e}class zf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=a_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tS(this.persistence,new ZR,e.initialUser,this.serializer)}createPersistence(e){return new YR(vu.Yr,this.serializer)}createSharedClientState(e){return new oS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VS.bind(null,this.syncEngine),await ES(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TS}()}createDatastore(e){const n=a_(e.databaseInfo.databaseId),r=function(i){return new uS(i)}(e.databaseInfo);return function(i,o,c,l){return new fS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new gS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Bf(this.syncEngine,n,0),function(){return Lf.D()?new Lf:new aS}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new CS(s,i,o,c,l,h);return d&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);te("RemoteStore","RemoteStore shutting down."),i.N_.add(5),await Yi(i),i.B_.shutdown(),i.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class I_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class US{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{te("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(te("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=d_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await i_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BS(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Mf(e.remoteStore,s)),t._onlineComponents=e}function $S(t){return t.name==="FirebaseError"?t.code===K.FAILED_PRECONDITION||t.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$S(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await Oc(t,new zf)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Oc(t,new zf);return t._offlineComponents}async function jS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await qf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await qf(t,new FS))),t._onlineComponents}async function A_(t){const e=await jS(t),n=e.eventManager;return n.onListen=PS.bind(null,e.syncEngine),n.onUnlisten=NS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DS.bind(null,e.syncEngine),n}function zS(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new I_({next:g=>{o.enqueueAndForget(()=>p_(i,p));const _=g.docs.has(c);!_&&g.fromCache?h.reject(new oe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?h.reject(new oe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new g_(pu(c.path),d,{includeMetadataChanges:!0,oa:!0});return f_(i,p)}(await A_(t),t.asyncQueue,e,n,r)),r.promise}function qS(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new I_({next:g=>{o.enqueueAndForget(()=>p_(i,p)),g.fromCache&&l.source==="server"?h.reject(new oe(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new g_(c,d,{includeMetadataChanges:!0,oa:!0});return f_(i,p)}(await A_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function b_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hf=new Map;/**
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
 */function R_(t,e,n){if(!n)throw new oe(K.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HS(t,e,n,r){if(e===!0&&r===!0)throw new oe(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!ue.isDocumentKey(t))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gf(t){if(ue.isDocumentKey(t))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function KS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Li(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=KS(t);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wb;switch(r.type){case"firstParty":return new bb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hf.get(n);r&&(te("ComponentProvider","Removing Datastore"),Hf.delete(n),r.terminate())}(this),Promise.resolve()}}function GS(t,e,n,r={}){var s;const i=(t=Li(t,ja))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=Cg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(h)}t._authCredentials=new Tb(new Nm(c,l))}}/**
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
 */class za{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new za(this.firestore,e,this._query)}}class pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class ir extends za{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new ue(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function S_(t,e,...n){if(t=jt(t),R_("collection","path",e),t instanceof ja){const r=Ue.fromString(e,...n);return Gf(r),new ir(t,null,r)}{if(!(t instanceof pn||t instanceof ir))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Gf(r),new ir(t.firestore,null,r)}}function Vi(t,e,...n){if(t=jt(t),arguments.length===1&&(e=Dm.newId()),R_("doc","path",e),t instanceof ja){const r=Ue.fromString(e,...n);return Kf(r),new pn(t,null,new ue(r))}{if(!(t instanceof pn||t instanceof ir))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Kf(r),new pn(t.firestore,t instanceof ir?t.converter:null,new ue(r))}}/**
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
 */class WS{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new c_(this,"async_queue_retry"),this.Tu=()=>{const n=kc();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new sr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Wi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const s=bu.createAndSchedule(this,e,n,r,i=>this.Ru(i));return this.cu.push(s),s}Eu(){this.lu&&ge()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class Cu extends ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new WS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||P_(this),this._firestoreClient.terminate()}}function qa(t,e){const n=typeof t=="object"?t:Kl(),r=typeof t=="string"?t:"(default)",s=ba(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bg("firestore");i&&GS(s,...i)}return s}function C_(t){return t._firestoreClient||P_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function P_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new Fb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,b_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new US(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(dt.fromBase64String(e))}catch(n){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oa(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class k_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class QS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}const YS=new RegExp("[~\\*/\\[\\]]");function JS(t,e,n){if(e.search(YS)>=0)throw Qf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new k_(...e.split("."))._internalPath}catch{throw Qf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Qf(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let o="";return new oe(K.INVALID_ARGUMENT,i+t+o)}/**
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
 */class O_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(N_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XS extends O_{data(){return super.data()}}function N_(t,e){return typeof e=="string"?JS(t,e):e instanceof k_?e._internalPath:e._delegate._internalPath}/**
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
 */function ZS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eC{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xa(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new QS(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=hr(e);return new St(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ye(s_(r));const s=new Di(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D_ extends O_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(N_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uo extends D_{data(e={}){return super.data(e)}}class tC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:nC(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function Mi(t){t=Li(t,pn);const e=Li(t.firestore,Cu);return zS(C_(e),t._key).then(n=>rC(e,t,n))}class x_ extends eC{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,n)}}function L_(t){t=Li(t,za);const e=Li(t.firestore,Cu),n=C_(e),r=new x_(e);return ZS(t._query),qS(n,t._query).then(s=>new tC(e,r,t,s))}function rC(t,e,n){const r=n.docs.get(e._key),s=new x_(t);return new D_(t,s,e._key,r,new oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ns=s})(Jr),Ur(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Cu(new Ib(r.getProvider("auth-internal")),new Sb(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),un(ff,"4.6.5",e),un(ff,"4.6.5","esm2017")})();/**
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
 */const V_="firebasestorage.googleapis.com",M_="storageBucket",sC=2*60*1e3,iC=10*60*1e3;/**
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
 */class rt extends vn{constructor(e,n,r=0){super(Nc(e),`Firebase Storage: ${n} (${Nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Nc(t){return"storage/"+t}function F_(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function oC(t){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function aC(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function lC(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uC(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function hC(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dC(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function fC(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function pC(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gC(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M_+"' property when initializing the app?")}function mC(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vl(t){return new rt(nt.INVALID_ARGUMENT,t)}function U_(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function _C(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw pC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(z){z.path_=decodeURIComponent(z.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},P=n===V_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",j=new RegExp(`^https?://${P}/${s}/${O}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let z=0;z<L.length;z++){const le=L[z],B=le.regex.exec(e);if(B){const I=B[le.indices.bucket];let y=B[le.indices.path];y||(y=""),r=new Lt(I,y),le.postModify(r);break}}if(r==null)throw fC(e);return r}}class yC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function g(){i&&clearTimeout(i)}function _(O,...j){if(h){g();return}if(O){g(),d.call(null,O,...j);return}if(l()||o){g(),d.call(null,O,...j);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let C=!1;function P(O){C||(C=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function EC(t){t(!1)}/**
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
 */function wC(t){return t!==void 0}function TC(t){return typeof t=="object"&&!Array.isArray(t)}function $_(t){return typeof t=="string"||t instanceof String}function Yf(t,e,n,r){if(r<e)throw vl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function B_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lr||(Lr={}));/**
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
 */function IC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class AC{constructor(e,n,r,s,i,o,c,l,h,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Lr.NO_ERROR,l=i.getStatus();if(!c||IC(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Lr.ABORT;r(!1,new bo(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new bo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());wC(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=F_();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?U_():dC();o(l)}else{const l=hC();o(l)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=vC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function CC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PC(t,e,n,r,s,i,o=!0){const c=j_(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return SC(h,e),bC(h,n),RC(h,i),CC(h,r),new AC(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function z_(t){let e;try{e=JSON.parse(t)}catch{return null}return TC(e)?e:null}/**
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
 */function kC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function q_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function NC(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||NC}}let Ro=null;function DC(t){return!$_(t)||t.length<2?t:q_(t)}function xC(){if(Ro)return Ro;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return DC(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Ro=t,Ro}function LC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Lt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function VC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return LC(r,t),r}function MC(t,e,n){const r=z_(e);return r===null?null:VC(t,r,n)}function FC(t,e,n,r){const s=z_(e);if(s===null||!$_(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),_=B_(g,n,r),C=j_({alt:"media",token:h});return _+C})[0]}class UC{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $C(t){if(!t)throw F_()}function BC(t,e){function n(r,s){const i=MC(t,s,e);return $C(i!==null),FC(i,s,t.host,t._protocol)}return n}function jC(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=lC():s=cC():n.getStatus()===402?s=aC(t.bucket):n.getStatus()===403?s=uC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function zC(t){const e=jC(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=oC(t.path)),i.serverResponse=s.serverResponse,i}return n}function qC(t,e,n){const r=e.fullServerUrl(),s=B_(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new UC(s,i,BC(t,n),o);return c.errorHandler=zC(e),c}class HC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KC extends HC{initXhr(){this.xhr_.responseType="text"}}function GC(){return new KC}/**
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
 */class Hr{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return q_(this._location.path)}get storage(){return this._service}get parent(){const e=kC(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _C(e)}}function WC(t){t._throwIfRoot("getDownloadURL");const e=qC(t.storage,t._location,xC());return t.storage.makeRequestWithTokens(e,GC).then(n=>{if(n===null)throw mC();return n})}function QC(t,e){const n=OC(t._location.path,e),r=new Lt(t._location.bucket,n);return new Hr(t.storage,r)}/**
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
 */function YC(t){return/^[A-Za-z]+:\/\//.test(t)}function JC(t,e){return new Hr(t,e)}function H_(t,e){if(t instanceof Pu){const n=t;if(n._bucket==null)throw gC();const r=new Hr(n,n._bucket);return e!=null?H_(r,e):r}else return e!==void 0?QC(t,e):t}function XC(t,e){if(e&&YC(e)){if(t instanceof Pu)return JC(t,e);throw vl("To use ref(service, url), the first argument must be a Storage instance.")}else return H_(t,e)}function Jf(t,e){const n=e==null?void 0:e[M_];return n==null?null:Lt.makeFromBucketSpec(n,t)}function ZC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Cg(s,t.app.options.projectId))}class Pu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=V_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sC,this._maxUploadRetryTime=iC,this._requests=new Set,s!=null?this._bucket=Lt.makeFromBucketSpec(s,this._host):this._bucket=Jf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=Jf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new yC(U_());{const o=PC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Xf="@firebase/storage",Zf="0.12.6";/**
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
 */const K_="storage";function ku(t){return t=jt(t),WC(t)}function Ou(t,e){return t=jt(t),XC(t,e)}function Nu(t=Kl(),e){t=jt(t);const r=ba(t,K_).getImmediate({identifier:e}),s=bg("storage");return s&&eP(r,...s),r}function eP(t,e,n,r={}){ZC(t,e,n,r)}function tP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Pu(n,r,s,e,Jr)}function nP(){Ur(new lr(K_,tP,"PUBLIC").setMultipleInstances(!0)),un(Xf,Zf,""),un(Xf,Zf,"esm2017")}nP();var rP="firebase",sP="10.12.5";/**
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
 */un(rP,sP,"app");const Du={apiKey:"AIzaSyDzVzCFGlNkkc0mdtGZosh7Zg5zDIzEtks",authDomain:"nahkakauppa-74e44.firebaseapp.com",projectId:"nahkakauppa-74e44",storageBucket:"nahkakauppa-74e44.appspot.com",messagingSenderId:"169300472765",appId:"1:169300472765:web:aa3eb5ec4d15d60ddd18d4"},iP=Ra(Du),G_=qa(iP),Ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},oP=t=>(Ui("data-v-443e2096"),t=t(),$i(),t),aP=oP(()=>ne("h2",{class:"products-heading"},"Products",-1)),cP={class:"product-grid"},lP=["src"],uP={class:"product-name"},hP={class:"product-description"},dP={__name:"Products",setup(t){const e=Ra(Du),n=qa(e),r=Nu(e),s=ke([]),i=async()=>{try{const o=await L_(S_(n,"products")),c=[];for(const l of o.docs){const h=l.data(),d=await ku(Ou(r,h.imagePath));c.push({id:l.id,name:h.name,description:h.description,imageUrl:d})}s.value=c}catch(o){console.error("Error fetching products:",o)}};return Qr(()=>{i()}),(o,c)=>{const l=xl("router-link");return pe(),Se("div",null,[aP,ne("div",cP,[(pe(!0),Se(at,null,Ii(s.value,h=>(pe(),Se("div",{key:h.id,class:"product-item"},[Xe(l,{to:{name:"ProductDetails",params:{id:h.id}},class:"product-link"},{default:ga(()=>[ne("img",{src:h.imageUrl,alt:"Product image",class:"product-image"},null,8,lP),ne("h3",uP,Fe(h.name),1)]),_:2},1032,["to"]),ne("div",hP,Fe(h.description),1)]))),128))])])}}},fP=Ls(dP,[["__scopeId","data-v-443e2096"]]);var pP=Object.defineProperty,gP=(t,e,n)=>e in t?pP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Q=(t,e,n)=>(gP(t,typeof e!="symbol"?e+"":e,n),n);const mP=({width:t,height:e})=>t/e;class ep{constructor({top:e=null,left:n=null}={top:null,left:null}){Q(this,"top",ke(null)),Q(this,"left",ke(null)),this.update({top:e,left:n})}reset(){this.top.value=null,this.left.value=null}isValid(){return![this.top.value,this.left.value].includes(null)}update({top:e,left:n}){this.top.value=e??null,this.left.value=n??null}toValue(){const e={top:void 0,left:void 0};return this.top.value!==null&&(e.top=this.top.value),this.left.value!==null&&(e.left=this.left.value),e}toPx(){if(!this.isValid())throw new RangeError("Invalid position in pixels");return{top:this.top.value.toString()+"px",left:this.left.value.toString()+"px"}}}class _P{constructor(e,n,r=tn.fill,s=null,i,o,c){Q(this,"src"),Q(this,"loader",null),Q(this,"errorMessage"),Q(this,"status",ke(Zn.notLoaded)),Q(this,"realSize",new Yt),Q(this,"displaySize",new Yt),Q(this,"caption",""),Q(this,"resizeType"),Q(this,"backgroundColor",null),Q(this,"display"),Q(this,"transition"),Q(this,"isLoading",()=>this.status.value===Zn.loading),Q(this,"isLoaded",()=>this.status.value===Zn.loaded),Q(this,"isError",()=>this.status.value===Zn.error),Q(this,"resizeProps",Qe(()=>this.calcResizeProps(this.displaySize))),this.src=e,this.caption=n,this.resizeType=r,this.backgroundColor=s,this.display=i,this.transition=o,this.errorMessage=c}calcResizeProps(e){if([e.isValid(),this.realSize.isValid()].includes(!1))return{};const n=new vP(this.realSize),{size:r,position:s}=n.resizeTo(e,this.resizeType);return{...r.toValue(),...s.toValue()}}getResizeProps(e,n){const r={width:0,height:0,top:0,left:0};return this.displaySize.isValid()||this.displaySize.update(e.toValue()),Object.assign(r,e.equals(this.displaySize)?this.resizeProps.value:this.calcResizeProps(e)),n!==void 0&&(r.top-=n.top.value||0,r.left-=n.left.value||0),r}}class yP extends _P{constructor(e,n="",r=tn.fill,s=null){const i={component:np,props:{}},o={component:np,props:{}},c=`Image ${e} could not be loaded`;super(e,n,r,s,i,o,c)}load(){return this.loader!==null?this.loader:(this.loader=new Promise((e,n)=>{this.status.value=Zn.loading;const r=new Image;r.onload=()=>this.onLoad(r,e),r.onerror=()=>this.onError(n),r.src=this.src}),this.loader)}onLoad(e,n){this.realSize=new Yt({width:e.naturalWidth||e.width,height:e.naturalHeight||e.height}),this.status.value=Zn.loaded,n()}onError(e){this.status.value=Zn.error,e(this.errorMessage)}}var W_=(t=>(t.notLoaded="notLoaded",t.loading="loading",t.loaded="loaded",t.error="error",t))(W_||{});const Zn=W_;var Q_=(t=>(t.fill="fill",t.fit="fit",t))(Q_||{});const tn=Q_,tp=t=>t>=1?"landscape":"portrait";class vP{constructor(e){if(Q(this,"realSize"),Q(this,"realAspectRatio"),Q(this,"realOrientation"),e.isValid()===!1)throw new RangeError("Invalid real size");this.realSize=e,this.realAspectRatio=this.realSize.getAspectRatio(),this.realOrientation=tp(this.realAspectRatio)}resizeTo(e,n){if(e.isValid()===!1)throw new RangeError("Invalid size to resize");const r=e.getAspectRatio(),s=tp(r),i=this.getAdaptedSize(e,r,s,n),o=this.getAdaptedPosition(e,r,i,n);return{size:i,position:o}}getAdaptedSize(e,n,r,s){return r==="landscape"&&this.realOrientation==="portrait"&&s===tn.fill?this.getAdaptedSizeByWith(e):r==="landscape"&&this.realOrientation==="landscape"&&n>=this.realAspectRatio&&s===tn.fill?this.getAdaptedSizeByWith(e):r==="landscape"&&this.realOrientation==="landscape"&&n<this.realAspectRatio&&s===tn.fit?this.getAdaptedSizeByWith(e):r==="portrait"&&this.realOrientation==="landscape"&&s===tn.fit?this.getAdaptedSizeByWith(e):r==="portrait"&&this.realOrientation==="portrait"&&n>this.realAspectRatio&&s===tn.fill?this.getAdaptedSizeByWith(e):r==="portrait"&&this.realOrientation==="portrait"&&n<=this.realAspectRatio&&s===tn.fit?this.getAdaptedSizeByWith(e):this.getAdaptedSizeByHeight(e)}getAdaptedSizeByWith(e){return new Yt({width:e.width.value,height:e.width.value/this.realAspectRatio})}getAdaptedSizeByHeight(e){return new Yt({width:this.realAspectRatio*e.height.value,height:e.height.value})}getAdaptedPosition(e,n,r,s){return this.realAspectRatio<=n&&s===tn.fill?this.getAdaptedPositionVertically(e,r):this.realAspectRatio>n&&s===tn.fit?this.getAdaptedPositionVertically(e,r):this.getAdaptedPositionHorizontally(e,r)}getAdaptedPositionVertically(e,n){return new ep({top:(e.height.value-n.height.value)/2,left:0})}getAdaptedPositionHorizontally(e,n){return new ep({top:0,left:(e.width.value-n.width.value)/2})}}class EP{constructor(e,n,r,s,i,o,c,l){Q(this,"rscs",[]),Q(this,"counter",{success:0,error:0,total:0}),Q(this,"toPreload"),Q(this,"preLoading",[]),Q(this,"lazyLoading",[]),Q(this,"progress",ke(0)),Q(this,"displaySize"),Q(this,"onPreloadStart"),Q(this,"onPreloadEnd"),Q(this,"onLazyLoadStart"),Q(this,"onLazyLoadEnd"),Q(this,"isCancelled",!1),Q(this,"reject"),this.rscs=e,this.toPreload=n>e.length?e.length:n,this.displaySize=r,this.onPreloadStart=s,this.onPreloadEnd=i,this.onLazyLoadStart=o,this.onLazyLoadEnd=c,this.reject=l,this.preloadStart()}preloadStart(){this.onPreloadStart();const{counter:e}=this,n=this.rscs.slice(e.total,e.total+this.toPreload-e.success);this.preLoading=this.preLoading.concat(n),n.forEach(r=>this.load(r))}preloadEnd(){const{counter:e,toPreload:n}=this;if(e.success<n&&e.total<this.rscs.length){this.preloadStart();return}const r=this.preLoading.filter(s=>s.resource.isLoaded());this.onPreloadEnd(r),this.preLoading.length=0,e.total<this.rscs.length&&this.lazyLoadStart()}lazyLoadStart(){this.onLazyLoadStart(),this.lazyLoading=this.rscs.slice(this.counter.total),this.lazyLoading.forEach(e=>this.load(e))}lazyLoadEnd(){const e=this.lazyLoading.filter(n=>n.resource.isLoaded());this.onLazyLoadEnd(e),this.lazyLoading.length=0}load(e){e.resource.load().then(()=>{this.loadSuccess(e)}).catch(n=>{this.loadError(n)}).finally(()=>{this.counter.total++,!this.isCancelled&&(this.preLoading.length!==0&&this.updateProgress(),this.counter.total===this.toPreload?this.preloadEnd():this.counter.total===this.rscs.length&&this.lazyLoadEnd())})}loadSuccess(e){this.counter.success++,!this.isCancelled&&e.resource.displaySize.update(this.displaySize.toValue())}loadError(e){this.counter.error++,!this.isCancelled&&console.error(e)}updateProgress(){this.progress.value=Math.ceil(this.counter.success*100/this.toPreload)||0}hasFinished(){return this.counter.total===this.rscs.length}cancel(){this.isCancelled=!0,this.reject("Resources loading cancelled",this.rscs)}}class Yt{constructor({width:e=null,height:n=null}={width:null,height:null}){Q(this,"width",ke(null)),Q(this,"height",ke(null)),this.update({width:e,height:n})}reset(){this.width.value=null,this.height.value=null}isValid(){return![this.width.value,this.height.value].includes(null)}update({width:e,height:n}){this.width.value=e??null,this.height.value=n??null}getAspectRatio(){if(!this.isValid())throw new RangeError("Could not get aspect ratio due to invalid size");return mP(this.toValue())}clone(){return new Yt(this.toValue())}equals(e){return!(this.width.value!==e.width.value||this.height.value!==e.height.value)}toValue(){const e={};return this.width.value!==null&&(e.width=this.width.value),this.height.value!==null&&(e.height=this.height.value),e}toPx(){if(!this.isValid())throw new RangeError("Invalid size in pixels");return{width:this.width.value.toString()+"px",height:this.height.value.toString()+"px"}}}function Y_(t,e,n){n.base===void 0&&(n.base={});const r=Qe(()=>{const{size:o,viewSize:c=new Yt}=e,{width:l=o.width.value,height:h=o.height.value}=c.toValue(),d=new Yt({width:l,height:h});return d.isValid()?d.toPx():{}}),s=Qe(()=>({...Z(r),...Z(n.color),...Z(n.rsc),...Z(e.css),...Z(n.base)})),i=o=>{Object.assign(n.base,o)};return{style:s,setCss:i,transform:o=>{t.value!==null&&(t.value.clientHeight,i(o))},show:()=>{i({visibility:"visible"})},hide:()=>{i({visibility:"hidden"})}}}const np=Wr({__name:"FluxImage",props:{color:{},rsc:{},size:{},viewSize:{},offset:{},css:{}},setup(t,{expose:e}){const n=t,r=ke(null),s=Jt({base:{overflow:"hidden"},color:Qe(()=>{var d,p;const g={};return n.color!==void 0&&(g.backgroundColor=n.color),((d=n.rsc)==null?void 0:d.backgroundColor)!==null&&(g.backgroundColor=(p=n.rsc)==null?void 0:p.backgroundColor),g}),rsc:Qe(()=>{const{rsc:d,size:p,offset:g}=n;if(!d)return{};if(d.status.value===Zn.notLoaded)return d.load(),{};if(!d.isLoaded()||!p.isValid()||!r.value)return{};const{width:_,height:C,top:P,left:O}=d.getResizeProps(p,g);return{backgroundImage:`url(${d.src})`,backgroundSize:`${_}px ${C}px`,backgroundPosition:`${O}px ${P}px`,backgroundRepeat:"no-repeat"}})}),{style:i,setCss:o,transform:c,show:l,hide:h}=Y_(r,n,s);return e({setCss:o,transform:c,show:l,hide:h}),(d,p)=>(pe(),Se("div",{ref_key:"$el",ref:r,class:"flux-image",style:Gr(Z(i))},null,4))}}),wP=Wr({__name:"FluxTransition",props:{size:{},transition:{},from:{},to:{},displayComponent:{},options:{default:()=>({})}},emits:["ready","start","end"],setup(t,{expose:e,emit:n}){const r=t,s=ke(null),i=ke(null),o=n,c=Jt({base:{overflow:"hidden",perspective:"none",zIndex:3}}),l=Qe(()=>{const{width:g,height:_}=r.size.toPx();return{...c.base,width:g,height:_}}),h=ke(1);Qr(async()=>{await Mr(),i.value!==null&&(h.value=i.value.totalDuration),o("ready",{transition:r.transition,from:r.from,to:r.to,options:r.options,duration:h.value})});async function d(){o("start",{transition:r.transition,from:r.from,to:r.to,options:r.options,duration:h.value}),await Mr(),i.value===null?console.error("Transition component not available",r.transition):i.value.onPlay(),setTimeout(()=>p(),h.value)}function p(){o("end",{transition:r.transition,from:r.from,to:r.to,options:r.options,duration:h.value})}return ya(()=>{r.displayComponent&&r.displayComponent.show()}),e({start:d}),(g,_)=>(pe(),Se("div",{ref_key:"$el",ref:s,class:"flux-transition",style:Gr(l.value)},[(pe(),ln(jo(g.transition),{ref_key:"$transition",ref:i,size:g.size,from:g.from,to:g.to,"display-component":g.displayComponent,options:g.options,"mask-style":c.base},null,8,["size","from","to","display-component","options","mask-style"]))],4))}}),TP=Wr({__name:"FluxWrapper",props:{color:{},rsc:{},size:{},viewSize:{},offset:{},css:{}},setup(t,{expose:e}){const n=t,r=ke(null),s=Jt({base:{overflow:"hidden"}}),{style:i,setCss:o,transform:c,show:l,hide:h}=Y_(r,n,s);return e({setCss:o,transform:c,show:l,hide:h}),(d,p)=>(pe(),Se("div",{ref_key:"$el",ref:r,class:"flux-wrapper",style:Gr(Z(i))},[as(d.$slots,"default")],4))}});var lt=(t=>(t.prev="prev",t.next="next",t))(lt||{}),Cr=(t=>(t.stopped="stopped",t.playing="playing",t))(Cr||{});class IP{constructor(){Q(this,"current",null),Q(this,"from",null),Q(this,"to",null)}reset(){this.current=null,this.from=null,this.to=null}init(e){this.current=e.getFirst()}currentSameAs(e){return this.current.index===e.index}prepareTo(e){this.from=this.current,this.to=e}}class AP{constructor(){Q(this,"current",null),Q(this,"last",null)}reset(){this.current=null,this.last=null}init(e){this.last=e.getLast()}setCurrentFinished(){this.last=this.current,this.current=null}}class bP{static withOptions(e){return e.map(n=>{let r=n,s={};return"resource"in n&&(r=n.resource,"options"in n&&(s=n.options)),{resource:r,options:s}})}}class RP{constructor(e){Q(this,"list",ar([])),Q(this,"loader",ke(null)),Q(this,"emit"),this.emit=e}getPrev(e){return this.getByIndex(e>0?e-1:this.list.length-1)}getNext(e){return this.getByIndex(e===this.list.length-1?0:e+1)}getFirst(){return this.getByIndex(0)}getLast(){return this.getByOrder(lt.prev,0)}getByIndex(e){if(this.list[e]===void 0)throw new ReferenceError(`Resource index ${e} not found`);return{index:e,rsc:this.list[e].resource,options:JSON.parse(JSON.stringify(this.list[e].options))}}getByOrder(e,n){return{prev:()=>this.getPrev(n),next:()=>this.getNext(n)}[e]()}find(e,n){if(typeof e=="number")return this.getByIndex(e);if(n===void 0)throw new ReferenceError("Missing currentIndex parameter");return this.getByOrder(e,n)}update(e,n,r){var s,i;((s=this.loader.value)==null?void 0:s.hasFinished())===!1&&((i=this.loader.value)==null||i.cancel()),this.list.splice(0);const o=bP.withOptions(e);return new Promise((c,l)=>{this.loader.value=new EP(o,n,r,()=>this.preloadStart(),h=>this.preloadEnd(h,c),()=>this.lazyLoadStart(),h=>this.lazyLoadEnd(h),l)})}preloadStart(){this.emit("resourcesPreloadStart")}preloadEnd(e,n){this.list.push(...e),this.emit("resourcesPreloadEnd"),n()}lazyLoadStart(){this.emit("resourcesLazyloadStart")}lazyLoadEnd(e){this.list.push(...e),this.emit("resourcesLazyloadEnd")}}class SP{static withOptions(e){return e.map(n=>{let r=n,s={};return"component"in n&&(r=n.component,"options"in n&&(s=n.options)),{component:r,options:s}})}}class CP{constructor(){Q(this,"list",ar([]))}getPrev(e){return this.getByIndex(e>0?e-1:this.list.length-1)}getNext(e){return this.getByIndex(e===this.list.length-1?0:e+1)}getFirst(){return this.getByIndex(0)}getLast(){return this.getByOrder(lt.prev,0)}getByIndex(e){return{index:e,component:this.list[e].component,options:JSON.parse(JSON.stringify(this.list[e].options))}}getByOrder(e,n){return{prev:()=>this.getPrev(n),next:()=>this.getNext(n)}[e]()}update(e){this.list.splice(0);const n=SP.withOptions(e);this.list.push(...n)}}class PP{constructor(e,n,r){Q(this,"resource"),Q(this,"transition"),Q(this,"status",ke(Cr.stopped)),Q(this,"config"),Q(this,"timers"),Q(this,"emit"),Q(this,"resources"),Q(this,"transitions"),Q(this,"$displayComponent",ke(null)),this.config=e,this.timers=n,this.emit=r,this.resources=new RP(r),this.transitions=new CP,this.resource=ar(new IP),this.transition=ar(new AP)}setup(e){this.$displayComponent=e}play(e=lt.next,n){var r,s;const{config:i,timers:o,resource:c}=this;if(this.status.value=Cr.playing,this.transition.current!==null)return;const l=(s=this.resources)==null?void 0:s.find(e,(r=c.current)==null?void 0:r.index);o.set("transition",n||(l==null?void 0:l.options.delay)||i.delay,()=>{this.show(e)}),this.emit("play",e,n)}async stop(e=!1){const{timers:n}=this;this.status.value=Cr.stopped,n.clear("transition"),this.transition.current!==null&&e===!0&&await this.end(e),this.emit("stop")}isReadyToShow(){if(this.resource.current===null)throw new ReferenceError("Current resource not set");if(this.resources===null)throw new ReferenceError("Resources list not set");if(this.resources.list.length===0)throw new RangeError("Resources list empty");if(this.transition.last===null)throw new ReferenceError("Last transition not set");if(this.transitions===null)throw new ReferenceError("Transitions list not set");if(this.transitions.list.length===0)throw new RangeError("Transitions list empty");if(this.$displayComponent.value===null)throw new ReferenceError("Display component not set");return!0}async show(e=lt.next,n=lt.next){if(!this.isReadyToShow())return;const{resource:r,resources:s,config:i,transitions:o}=this;if(this.transition.current!==null){i.allowToSkipTransition&&(await this.end(!0),this.show(e,n));return}const c=s.find(e,r.current.index);if(r.currentSameAs(c))return;r.prepareTo(c),this.timers.clear("transition");const l=typeof n=="number"?o.getByIndex(n):o.getByOrder(n,this.transition.last.index);l.options.direction===void 0&&(typeof e!="number"?l.options.direction=e:l.options.direction=this.resource.from.index<this.resource.to.index?lt.next:lt.prev),this.transition.current=l,this.emit("show",this.resource,this.transition)}start(){this.resource.current=this.resource.to,this.emit("transitionStart",this.resource,this.transition)}async end(e=!1){const{config:n,resource:r,resources:s,timers:i,transition:o}=this;if(!(r.current===null||s===null)){if(o.setCurrentFinished(),await Mr(),e===!0?this.emit("transitionCancel",this.resource,this.transition):this.emit("transitionEnd",this.resource,this.transition),this.shouldStopPlaying(n.infinite,r.current,s.list.length-1)){this.stop();return}this.shouldPlayNext()&&i.set("transition",r.current.options.delay||n.delay,()=>{this.show()})}}shouldStopPlaying(e,n,r){return e===!1&&n.index>=r&&this.status.value===Cr.playing||n.options.stop===!0}shouldPlayNext(){return this.status.value===Cr.playing}}class xu{constructor(e,n=null,r=null){Q(this,"node"),Q(this,"config"),Q(this,"emit",null),Q(this,"size",new Yt),Q(this,"inFullScreen",()=>!!document.fullscreenElement),this.node=e,this.config=n,this.emit=r}static async getSize(e){const n=new xu(e);return await n.updateSize(),n.size}addResizeListener(){window.addEventListener("resize",()=>this.updateSize(),{passive:!0})}removeResizeListener(){window.removeEventListener("resize",this.updateSize)}getAspectRatio(){if(this.config!==null){const[e,n]=this.config.aspectRatio.split(":");return[parseFloat(e),parseFloat(n)]}return[16,9]}async updateSize(){if(this.size.reset(),await Mr(),this.node.value===null)return;const e=getComputedStyle(this.node.value),n=parseFloat(e.width);let r=parseFloat(e.height);if(["0px","auto",null].includes(e.height)){const[s,i]=this.getAspectRatio();r=n/s*i}this.size.update({width:n,height:r})}toggleFullScreen(){this.inFullScreen()?this.exitFullScreen():this.enterFullScreen()}async enterFullScreen(){var e,n;((e=this.node)==null?void 0:e.value)===null||!((n=this.config)!=null&&n.allowFullscreen)||(await this.node.value.requestFullscreen(),this.emit!==null&&this.emit("fullscreenEnter"))}async exitFullScreen(){await document.exitFullscreen(),this.emit!==null&&this.emit("fullscreenExit")}}class kP{constructor(e,n){Q(this,"config"),Q(this,"player"),this.config=e,this.player=n}setup(){this.removeKeyListener(),this.config.bindKeys&&this.addKeyListener()}addKeyListener(){window.addEventListener("keydown",e=>this.keydown(e),{passive:!0})}removeKeyListener(){window.removeEventListener("keydown",()=>this.keydown)}keydown(e){if(["ArrowLeft","Left"].includes(e.key)){this.player.show(lt.prev);return}if(["ArrowRight","Right"].includes(e.key)){this.player.show(lt.next);return}}}class OP{constructor(){Q(this,"isOver",ke(!1))}setup(e,n){n.clear("mouseOver"),e.autohideTime===0&&(this.isOver.value=!0)}toggle(e,n,r){e.autohideTime!==0&&(this.isOver.value=r,this[r?"over":"out"](e,n))}out(e,n){n.clear("mouseOver")}over(e,n){n.set("mouseOver",e.autohideTime,()=>this.isOver.value=!1)}}class NP{constructor(){Q(this,"timers",{})}set(e,n,r){this.clear(e),this.timers[e]=setTimeout(r,n)}clear(e){(e!==void 0?[e]:Object.keys(this.timers)).forEach(n=>{clearTimeout(this.timers[n]),delete this.timers[n]})}}class DP{constructor(){Q(this,"startX",0),Q(this,"startY",0),Q(this,"startTime",0),Q(this,"endTime",0),Q(this,"prevTouchTime",0),Q(this,"tapThreshold",5),Q(this,"doubleTapThreshold",200),Q(this,"slideTrigger",.3),Q(this,"tap",(e,n)=>Math.abs(e)<this.tapThreshold&&Math.abs(n)<this.tapThreshold),Q(this,"doubleTap",()=>this.endTime-this.prevTouchTime<this.doubleTapThreshold),Q(this,"slideLeft",(e,n)=>n.size.isValid()&&e<0&&e<-(n.size.width.value*this.slideTrigger)),Q(this,"slideRight",(e,n)=>n.size.isValid()&&e>0&&e>n.size.width.value*this.slideTrigger),Q(this,"slideUp",(e,n)=>n.size.isValid()&&e<0&&e<-(n.size.height.value*this.slideTrigger)),Q(this,"slideDown",(e,n)=>n.size.isValid()&&e>0&&e>n.size.height.value*this.slideTrigger)}start(e,n){n.enableGestures&&(this.startTime=Date.now(),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY)}end(e,n,r,s,i,o){this.prevTouchTime=this.endTime,this.endTime=Date.now();const c=e.changedTouches[0].clientX-this.startX,l=e.changedTouches[0].clientY-this.startY;if(this.tap(c,l)){o.toggle(n,i,!0);return}n.enableGestures&&(this.slideRight(c,s)?r.show(lt.prev):this.slideLeft(c,s)&&r.show(lt.next))}}const xP={key:2,class:"complements"},LP=ne("div",{class:"remainder upper"},null,-1),VP=ne("div",{class:"remainder lower"},null,-1),MP=Wr({__name:"VueFlux",props:{options:{default:()=>({})},rscs:{},transitions:{}},emits:["created","mounted","unmounted","play","stop","show","optionsUpdated","transitionsUpdated","resourcesPreloadStart","resourcesPreloadEnd","resourcesLazyloadStart","resourcesLazyloadEnd","fullscreenEnter","fullscreenExit","transitionStart","transitionCancel","transitionEnd"],setup(t,{expose:e,emit:n}){const r=t,s=n,i=ke(null),o=ke(null),c=ke(null),l=Jt({allowFullscreen:!1,allowToSkipTransition:!0,aspectRatio:"16:9",autohideTime:2500,autoplay:!1,bindKeys:!1,delay:5e3,enableGestures:!1,infinite:!0,lazyLoad:!0,lazyLoadAfter:5}),h=new NP,d=new PP(l,h,s),p=d.resources,g=d.transitions,_=new xu(i,l,s),C=new kP(l,d),P=new OP,O=new DP,j=()=>{Object.assign(l,r.options),P.setup(l,h),C.setup()};cn(r.options,()=>{j(),s("optionsUpdated")});async function M(B){const I=d.status.value===Cr.playing;I&&await d.stop(!0),await{rscs:async()=>await L(),transitions:()=>z()}[B](),I&&d.play()}async function L(){d.resource.reset();const B=l.lazyLoad?l.lazyLoadAfter:r.rscs.length;try{await p.update(be(r.rscs),B,_.size)}catch(I){console.error(I)}p.list.length&&d.resource.init(p)}cn(()=>r.rscs,async()=>{await M("rscs")},{deep:!1});function z(){d.transition.reset(),g.update(be(r.transitions)),d.transition.init(g)}cn(r.transitions,async()=>{await M("transitions"),s("transitionsUpdated")},{deep:!1}),Qr(async()=>{j(),await _.updateSize(),_.addResizeListener(),d.setup(c),z(),await L(),l.autoplay===!0&&d.play(),s("mounted")}),ya(()=>{h.clear(),_.removeResizeListener(),C.removeKeyListener(),s("unmounted")});const le=Qe(()=>_.size.isValid()?_.inFullScreen()?{width:"100% !important",height:"100% !important"}:_.size.toPx():{});return e({show:d.show.bind(d),play:d.play.bind(d),stop:d.stop.bind(d),getPlayer:()=>d,size:_.size}),s("created"),(B,I)=>(pe(),Se("div",{ref_key:"$el",ref:i,class:"vue-flux",style:Gr(le.value),onMousemove:I[3]||(I[3]=y=>Z(P).toggle(l,Z(h),!0)),onMouseleave:I[4]||(I[4]=y=>Z(P).toggle(l,Z(h),!1)),onDblclick:I[5]||(I[5]=y=>Z(_).toggleFullScreen()),onTouchstart:I[6]||(I[6]=y=>Z(O).start(y,l)),onTouchend:I[7]||(I[7]=y=>Z(O).end(y,l,Z(d),Z(_),Z(h),Z(P)))},[Z(d).transition.current!==null&&Z(_).size.isValid()&&Z(d).resource.from!==null&&Z(d).resource.to!==null?(pe(),ln(Z(wP),{key:0,ref_key:"$transition",ref:o,transition:Z(d).transition.current.component,size:Z(_).size,from:Z(d).resource.from.rsc,to:Z(d).resource.to.rsc,"display-component":c.value,options:Z(d).transition.current.options,onReady:I[0]||(I[0]=y=>{var E;return(E=o.value)==null?void 0:E.start()}),onStart:I[1]||(I[1]=y=>Z(d).start()),onEnd:I[2]||(I[2]=y=>Z(d).end())},null,8,["transition","size","from","to","display-component","options"])):nn("",!0),Z(d).resource.current!==null?(pe(),ln(jo(Z(d).resource.current.rsc.display.component),Fl({key:1,ref_key:"$displayComponent",ref:c,size:Z(_).size,rsc:Z(d).resource.current.rsc},Z(d).resource.current.rsc.display.props),null,16,["size","rsc"])):nn("",!0),Z(_).size.isValid()?(pe(),Se("div",xP,[as(B.$slots,"preloader",{loader:Z(p).loader}),as(B.$slots,"caption",{player:Z(d)}),LP,as(B.$slots,"controls",{mouseOver:Z(P).isOver,player:Z(d)}),VP,as(B.$slots,"index",{mouseOver:Z(P).isOver,displaySize:Z(_).size,player:Z(d)}),as(B.$slots,"pagination",{player:Z(d)})])):nn("",!0)],36))}});function FP(t,e){Object.assign(t,{direction:lt.next},e)}const UP=Wr({__name:"Slide",props:{options:{},size:{},from:{},to:{},maskStyle:{},displayComponent:{}},setup(t,{expose:e}){const n=t,r=ke(null),s=ke(null),i=ke(null),o=Jt({totalDuration:1400,easing:"ease-in-out"});FP(o,n.options);const c=`transform ${o.totalDuration}ms ${o.easing}`,l={size:new Yt({width:n.size.width.value*2,height:n.size.height.value}),css:{display:"flex",flexWrap:"nowrap"}};let h,d;({[lt.prev]:()=>{h=n.to,d=n.from,l.css.transform="translateX(-50%)"},[lt.next]:()=>{h=n.from,d=n.to}})[o.direction]();const p={[lt.prev]:()=>{r.value.transform({transition:c,transform:"translateX(0)"})},[lt.next]:()=>{r.value.transform({transition:c,transform:"translateX(-50%)"})}};return e({onPlay:()=>{p[o.direction]()},totalDuration:o.totalDuration}),(g,_)=>(pe(),ln(Z(TP),Fl({ref_key:"$wrapper",ref:r},l),{default:ga(()=>[(pe(),ln(jo(Z(h).transition.component),{ref_key:"$left",ref:s,rsc:Z(h),size:g.size},null,8,["rsc","size"])),(pe(),ln(jo(Z(d).transition.component),{ref_key:"$right",ref:i,rsc:Z(d),size:g.size},null,8,["rsc","size"]))]),_:1},16))}}),gn=ke([]),$P=Qe(()=>gn.value.reduce((t,e)=>t+e.price*e.quantity,0)),BP=async(t,e,n)=>{const r=Vi(G_,`products/${t}/variations`,e),s=await Mi(r);if(s.exists()){const o=s.data().colors[n];if(o&&o.imageUrl)return o.imageUrl;console.error("Color or image URL not found")}else console.error("Variation not found")},jP=()=>{const t=JSON.parse(localStorage.getItem("shoppingCart"))||[];gn.value=t.map(e=>({...e,price:e.price||0}))},Lu=()=>{localStorage.setItem("shoppingCart",JSON.stringify(gn.value))},zP=async(t,e)=>{console.log("Fetching price for:",t,e);try{const n=Vi(G_,`products/${t}/variations`,e),r=await Mi(n);if(r.exists()){const s=r.data().price;return console.log("Fetched price from Firebase:",s),s}else return console.error("Variation document not found."),0}catch(n){return console.error("Error fetching price:",n),0}},qP=async t=>{const e=await zP(t.id,t.variation.quality),n=gn.value.find(r=>r.id===t.id&&r.variation.quality===t.variation.quality&&r.variation.color===t.variation.color);n?n.quantity+=1:gn.value.push({...t,price:e,quantity:1}),console.log("Current cart items:",gn.value),Lu()},J_=t=>{gn.value=gn.value.filter(e=>!(e.id===t.id&&e.variation.quality===t.variation.quality&&e.variation.color===t.variation.color)),Lu()},HP=(t,e)=>{const n=gn.value.find(r=>r.id===t.id&&r.variation.quality===t.variation.quality&&r.variation.color===t.variation.color);n&&(n.quantity+=e,n.quantity<=0?J_(t):Lu())};function Vu(){return{fetchColorImage:BP,cartItems:gn,loadCart:jP,addToCart:qP,removeFromCart:J_,updateQuantity:HP,totalAmount:$P}}const Mu=t=>(Ui("data-v-c98847b9"),t=t(),$i(),t),KP={key:0,class:"product-details"},GP={class:"product-content"},WP={class:"left-section"},QP={class:"text-3xl font-bold"},YP={class:"description"},JP={class:"mt-4"},XP={class:"right-section"},ZP={key:0,class:"variation-selection mt-4"},ek=Mu(()=>ne("label",{for:"variation"},"Choose a variation:",-1)),tk=["value"],nk={key:1,class:"color-selection mt-4"},rk=Mu(()=>ne("label",{for:"color"},"Choose a color:",-1)),sk=["value"],ik={key:2,class:"text-xl font-semibold mt-4"},ok={key:4,class:"popup-alert"},ak={key:1},ck=Mu(()=>ne("p",null,"Loading product details...",-1)),lk=[ck],uk={__name:"ProductDetails",setup(t){const e=ke(null),n=ke([]),r=ke(null),s=ke(null),i=ar([]),o=ke(!1),c=Eb(),l=iu(),h=qa(),d=Nu(),p=Jt({allowFullscreen:!1,allowToSkipTransition:!1,autohideTime:2500,autoplay:!1,bindKeys:!1,delay:5e3,enableGestures:!1,infinite:!1,lazyLoad:!1,lazyLoadAfter:3}),g=ar([UP]),_=async()=>{const M=c.params.id,L=Vi(h,"products",M),z=await Mi(L);if(z.exists()){const le=z.data();e.value={...le,id:M};const B=await L_(S_(L,"variations"));n.value=B.docs.map(I=>({id:I.id,...I.data()})),n.value.length>0&&(r.value=n.value[0],s.value=Object.keys(r.value.colors)[0],C())}else console.log("Product not found")},C=async()=>{if(r.value){i.length=0;for(const M in r.value.colors){const L=r.value.colors[M],z=Array.isArray(L.imagePaths)?L.imagePaths:[L.imagePath];for(const le of z){const B=Ou(d,le),I=await ku(B);i.push(new yP(I))}}}},{addToCart:P}=Vu(),O=()=>{l.push("/dashboard")},j=async()=>{var M;e.value&&r.value&&s.value&&(await P({id:e.value.id,name:e.value.name,variation:{quality:r.value.id,color:s.value},quantity:1,imageUrl:((M=i[0])==null?void 0:M.src)||""}),o.value=!0,setTimeout(()=>{o.value=!1},3e3))};return Qr(()=>{_()}),(M,L)=>e.value?(pe(),Se("div",KP,[ne("div",{class:"back-button-container"},[ne("button",{class:"back-button",onClick:O},"← Back to Dashboard")]),ne("div",GP,[ne("div",WP,[ne("h1",QP,Fe(e.value.name),1),Z(i).length>0?(pe(),ln(Z(MP),{key:0,ref:"$vueFlux",images:Z(i),options:p,transitions:Z(g)},null,8,["images","options","transitions"])):nn("",!0),ne("div",YP,[ne("p",JP,Fe(e.value.description),1)])]),ne("div",XP,[n.value.length>0&&r.value?(pe(),Se("div",ZP,[ek,Uh(ne("select",{"onUpdate:modelValue":L[0]||(L[0]=z=>r.value=z),onChange:C},[(pe(!0),Se(at,null,Ii(n.value,z=>(pe(),Se("option",{key:z.id,value:z},Fe(z.id),9,tk))),128))],544),[[pd,r.value]])])):nn("",!0),r.value&&r.value.colors?(pe(),Se("div",nk,[rk,Uh(ne("select",{"onUpdate:modelValue":L[1]||(L[1]=z=>s.value=z)},[(pe(!0),Se(at,null,Ii(Object.keys(r.value.colors),z=>(pe(),Se("option",{key:z,value:z},Fe(z),9,sk))),128))],512),[[pd,s.value]])])):nn("",!0),r.value?(pe(),Se("p",ik,"Price: "+Fe(r.value.price)+" €",1)):nn("",!0),r.value&&s.value?(pe(),Se("button",{key:3,class:"add-to-cart-button",onClick:j},"Add to Cart")):nn("",!0),o.value?(pe(),Se("div",ok,[ne("p",null,Fe(e.value.name)+" "+Fe(r.value.id)+" ("+Fe(s.value)+") has been added to your cart!",1)])):nn("",!0)])])])):(pe(),Se("div",ak,lk))}},hk=Ls(uk,[["__scopeId","data-v-c98847b9"]]);function dk(t,e){return pe(),Se("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ne("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})])}const X_=t=>(Ui("data-v-26d02062"),t=t(),$i(),t),fk={class:"checkout"},pk=X_(()=>ne("h1",null,"Checkout",-1)),gk=X_(()=>ne("p",null,"Proceed with your purchase here!",-1)),mk={class:"item-info"},_k=["src"],yk={class:"item-details"},vk={class:"product-name"},Ek={class:"product-description"},wk={class:"product-variation"},Tk={class:"product-price"},Ik={class:"item-actions"},Ak={class:"quantity-control"},bk=["onClick"],Rk=["onClick"],Sk={class:"quantity"},Ck=["onClick"],Pk={class:"total-amount"},kk={__name:"Checkout",setup(t){const e=Ra(Du),n=qa(e),r=Nu(e),{cartItems:s,loadCart:i,updateQuantity:o,removeFromCart:c,totalAmount:l}=Vu(),h=iu(),d=()=>{h.push("/dashboard")},p=async _=>{try{const C=Vi(n,"products",_.id),P=await Mi(C);if(P.exists()){const O=P.data();_.name=O.name,_.description=O.description;const j=Vi(n,`products/${_.id}/variations`,_.variation.quality),M=await Mi(j);if(M.exists()?_.price=M.data().price:console.error("Variation price not found for:",_.variation.quality),O.imagePath){const L=Ou(r,O.imagePath);_.imageUrl=await ku(L)}}else console.log("Product not found:",_.id)}catch(C){console.error("Error fetching product details:",C)}},g=async()=>{const _=s.value.map(C=>p(C));await Promise.all(_)};return Qr(()=>{i(),g()}),(_,C)=>(pe(),Se("div",fk,[ne("div",{class:"back-button-container"},[ne("button",{class:"back-button",onClick:d},"← Back to Dashboard")]),pk,gk,(pe(!0),Se(at,null,Ii(Z(s),P=>(pe(),Se("div",{key:`${P.id}-${P.variation.quality}-${P.variation.color}`,class:"checkout-item"},[ne("div",mk,[ne("img",{src:P.imageUrl,alt:"Product image",class:"product-image"},null,8,_k),ne("div",yk,[ne("h3",vk,Fe(P.name),1),ne("p",Ek,Fe(P.description),1),ne("p",wk,"Laatu: "+Fe(P.variation.quality)+", Väri: "+Fe(P.variation.color),1),ne("p",Tk,"Hinta: "+Fe(P.price)+" €",1)])]),ne("div",Ik,[ne("div",Ak,[P.quantity>1?(pe(),Se("button",{key:0,onClick:O=>Z(o)(P,-1),class:"quantity-btn"},"-",8,bk)):(pe(),Se("button",{key:1,onClick:O=>Z(c)(P),class:"remove-btn"},[Xe(Z(dk),{class:"h-5 w-5 text-white"})],8,Rk)),ne("span",Sk,Fe(P.quantity),1),ne("button",{onClick:O=>Z(o)(P,1),class:"quantity-btn"},"+",8,Ck)])])]))),128)),ne("p",Pk,"Total: "+Fe(Z(l))+" €",1)]))}},Ok=Ls(kk,[["__scopeId","data-v-26d02062"]]),Nk=[{path:"/",redirect:"/dashboard"},{path:"/checkout",name:"Checkout",component:Ok},{path:"/dashboard",component:fP},{path:"/products/:id",component:hk,name:"ProductDetails",props:!0}],Dk=yb({history:WA(),routes:Nk}),Z_=t=>(Ui("data-v-86d03bdb"),t=t(),$i(),t),xk=Z_(()=>ne("h2",null,"Your Cart",-1)),Lk={key:0},Vk={class:"cart-items"},Mk=["src"],Fk={class:"cart-item-info"},Uk={class:"cart-item-name"},$k={class:"cart-item-details"},Bk={class:"cart-item-price"},jk={class:"cart-item-quantity"},zk=["onClick"],qk=["onClick"],Hk={key:1},Kk=Z_(()=>ne("p",null,"Your cart is empty.",-1)),Gk=[Kk],Wk={__name:"ShoppingCartPopup",props:{visible:{type:Boolean,required:!0}},emits:["update:visible"],setup(t,{emit:e}){const n=t,r=e,{cartItems:s,loadCart:i,updateQuantity:o,removeFromCart:c}=Vu(),l=()=>{r("update:visible",!1)},h=()=>{l()};cn(()=>n.visible,C=>{C&&i()});const d=Qe(()=>{const C={};return s.value.forEach(P=>{const O=`${P.id}-${P.variation.quality}-${P.variation.color}`;C[O]?C[O].quantity+=P.quantity:C[O]={...P}}),Object.values(C)}),p=(C,P)=>{C.quantity+P<=0?c(C):o(C,P)},g=iu(),_=()=>{l(),g.push({name:"Checkout"})};return(C,P)=>(pe(),ln($l,{name:"transitionPopUp"},{default:ga(()=>[t.visible?(pe(),Se("div",{key:0,class:"popup-overlay",onClick:h},[ne("div",{class:"popup-content",onClick:P[0]||(P[0]=GE(()=>{},["stop"]))},[ne("button",{class:"popup-close",onClick:l},"X"),xk,d.value.length>0?(pe(),Se("div",Lk,[ne("ul",Vk,[(pe(!0),Se(at,null,Ii(d.value,(O,j)=>(pe(),Se("li",{key:j,class:"cart-item"},[ne("img",{src:O.imageUrl,alt:"Product image",class:"cart-item-image"},null,8,Mk),ne("div",Fk,[ne("p",Uk,Fe(O.quantity)+" x "+Fe(O.name),1),ne("p",$k,"Laatu: "+Fe(O.variation.quality)+", Väri: "+Fe(O.variation.color),1),ne("p",Bk,"Hinta: "+Fe(O.price)+" €",1),ne("div",jk,[ne("button",{onClick:M=>p(O,-1)},"-",8,zk),ne("span",null,Fe(O.quantity),1),ne("button",{onClick:M=>p(O,1)},"+",8,qk)])])]))),128))]),ne("button",{class:"checkout-button",onClick:_}," Proceed to Checkout ")])):(pe(),Se("div",Hk,Gk))])])):nn("",!0)]),_:1}))}},Qk=Ls(Wk,[["__scopeId","data-v-86d03bdb"]]),ey=t=>(Ui("data-v-7898f6e8"),t=t(),$i(),t),Yk={class:"min-h-screen bg-gray-50 flex flex-col items-center"},Jk={class:"w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8"},Xk=ey(()=>ne("h1",{class:"text-3xl font-bold text-gray-900 mb-4"},"Josali",-1)),Zk=ey(()=>ne("p",{class:"text-gray-600 mb-6"},"Tervetuloa nahkakaupan u.",-1)),e1={class:"flex justify-end mb-8"},t1={class:"bg-white shadow rounded-lg p-6"},n1={__name:"Dashboard",setup(t){const e=ke(!1),n=()=>{e.value=!0};return(r,s)=>{const i=xl("router-view");return pe(),Se("div",Yk,[ne("div",Jk,[Xk,Zk,ne("div",e1,[ne("button",{onClick:n,class:"bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"}," 🛒 Open Cart "),Xe(Qk,{visible:e.value,"onUpdate:visible":s[0]||(s[0]=o=>e.value=o)},null,8,["visible"])]),ne("div",t1,[Xe(i)])])])}}},r1=Ls(n1,[["__scopeId","data-v-7898f6e8"]]),s1={components:{Dashboard:r1}},i1={id:"app"};function o1(t,e,n,r,s,i){const o=xl("Dashboard");return pe(),Se("div",i1,[Xe(o)])}const a1=Ls(s1,[["render",o1]]);YE(a1).use(_A).use(Dk).mount("#app");
