var gC=Object.defineProperty;var mC=(t,e,n)=>e in t?gC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var un=(t,e,n)=>(mC(t,typeof e!="symbol"?e+"":e,n),n);function Qh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Fi(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ge(s)?wC(s):Fi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ge(t))return t;if(Ve(t))return t}}const yC=/;(?![^(]*\))/g,_C=/:([^]+)/,vC=/\/\*.*?\*\//gs;function wC(t){const e={};return t.replace(vC,"").split(yC).forEach(n=>{if(n){const s=n.split(_C);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ui(t){let e="";if(Ge(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=Ui(t[n]);s&&(e+=s+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function rB(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ge(e)&&(t.class=Ui(e)),n&&(t.style=Fi(n)),t}const EC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bC=Qh(EC);function zy(t){return!!t||t===""}const oB=t=>Ge(t)?t:t==null?"":oe(t)||Ve(t)&&(t.toString===Xy||!ue(t.toString))?JSON.stringify(t,Gy,2):String(t),Gy=(t,e)=>e&&e.__v_isRef?Gy(t,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Qy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!oe(e)&&!Jy(e)?String(e):e,je={},Ti=[],rn=()=>{},TC=()=>!1,CC=/^on[^a-z]/,Do=t=>CC.test(t),Yh=t=>t.startsWith("onUpdate:"),at=Object.assign,Xh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},IC=Object.prototype.hasOwnProperty,Ce=(t,e)=>IC.call(t,e),oe=Array.isArray,Ci=t=>Ll(t)==="[object Map]",Qy=t=>Ll(t)==="[object Set]",ue=t=>typeof t=="function",Ge=t=>typeof t=="string",Jh=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Yy=t=>Ve(t)&&ue(t.then)&&ue(t.catch),Xy=Object.prototype.toString,Ll=t=>Xy.call(t),SC=t=>Ll(t).slice(8,-1),Jy=t=>Ll(t)==="[object Object]",Zh=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=Qh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},AC=/-(\w)/g,vn=Ml(t=>t.replace(AC,(e,n)=>n?n.toUpperCase():"")),RC=/\B([A-Z])/g,or=Ml(t=>t.replace(RC,"-$1").toLowerCase()),Fl=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=Ml(t=>t?`on${Fl(t)}`:""),to=(t,e)=>!Object.is(t,e),$r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ba=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xp;const kC=()=>xp||(xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let hn;class Zy{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function e_(t){return new Zy(t)}function NC(t,e=hn){e&&e.active&&e.effects.push(t)}const ed=t=>{const e=new Set(t);return e.w=0,e.n=0,e},t_=t=>(t.w&ws)>0,n_=t=>(t.n&ws)>0,PC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ws},DC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];t_(i)&&!n_(i)?i.delete(t):e[n++]=i,i.w&=~ws,i.n&=~ws}e.length=n}},Du=new WeakMap;let Pr=0,ws=1;const Ou=30;let en;const js=Symbol(""),xu=Symbol("");class td{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,NC(this,s)}run(){if(!this.active)return this.fn();let e=en,n=ds;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,ds=!0,ws=1<<++Pr,Pr<=Ou?PC(this):Lp(this),this.fn()}finally{Pr<=Ou&&DC(this),ws=1<<--Pr,en=this.parent,ds=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Lp(this),this.onStop&&this.onStop(),this.active=!1)}}function Lp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ds=!0;const s_=[];function ar(){s_.push(ds),ds=!1}function lr(){const t=s_.pop();ds=t===void 0?!0:t}function Wt(t,e,n){if(ds&&en){let s=Du.get(t);s||Du.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ed()),i_(i)}}function i_(t,e){let n=!1;Pr<=Ou?n_(t)||(t.n|=ws,n=!t_(t)):n=!t.has(en),n&&(t.add(en),en.deps.push(t))}function Ln(t,e,n,s,i,r){const o=Du.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&oe(t)){const l=Ul(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":oe(t)?Zh(n)&&a.push(o.get("length")):(a.push(o.get(js)),Ci(t)&&a.push(o.get(xu)));break;case"delete":oe(t)||(a.push(o.get(js)),Ci(t)&&a.push(o.get(xu)));break;case"set":Ci(t)&&a.push(o.get(js));break}if(a.length===1)a[0]&&Lu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Lu(ed(l))}}function Lu(t,e){const n=oe(t)?t:[...t];for(const s of n)s.computed&&Mp(s);for(const s of n)s.computed||Mp(s)}function Mp(t,e){(t!==en||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const OC=Qh("__proto__,__v_isRef,__isVue"),r_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jh)),xC=nd(),LC=nd(!1,!0),MC=nd(!0),Fp=FC();function FC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Te(this);for(let r=0,o=this.length;r<o;r++)Wt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ar();const s=Te(this)[e].apply(this,n);return lr(),s}}),t}function nd(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?ZC:u_:e?c_:l_).get(s))return s;const o=oe(s);if(!t&&o&&Ce(Fp,i))return Reflect.get(Fp,i,r);const a=Reflect.get(s,i,r);return(Jh(i)?r_.has(i):OC(i))||(t||Wt(s,"get",i),e)?a:We(a)?o&&Zh(i)?a:a.value:Ve(a)?t?h_(a):an(a):a}}const UC=o_(),$C=o_(!0);function o_(t=!1){return function(n,s,i,r){let o=n[s];if($i(o)&&We(o)&&!We(i))return!1;if(!t&&(!Va(i)&&!$i(i)&&(o=Te(o),i=Te(i)),!oe(n)&&We(o)&&!We(i)))return o.value=i,!0;const a=oe(n)&&Zh(s)?Number(s)<n.length:Ce(n,s),l=Reflect.set(n,s,i,r);return n===Te(r)&&(a?to(i,o)&&Ln(n,"set",s,i):Ln(n,"add",s,i)),l}}function BC(t,e){const n=Ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ln(t,"delete",e,void 0),s}function VC(t,e){const n=Reflect.has(t,e);return(!Jh(e)||!r_.has(e))&&Wt(t,"has",e),n}function HC(t){return Wt(t,"iterate",oe(t)?"length":js),Reflect.ownKeys(t)}const a_={get:xC,set:UC,deleteProperty:BC,has:VC,ownKeys:HC},jC={get:MC,set(t,e){return!0},deleteProperty(t,e){return!0}},qC=at({},a_,{get:LC,set:$C}),sd=t=>t,$l=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,s=!1){t=t.__v_raw;const i=Te(t),r=Te(e);n||(e!==r&&Wt(i,"get",e),Wt(i,"get",r));const{has:o}=$l(i),a=s?sd:n?od:no;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,s=Te(n),i=Te(t);return e||(t!==i&&Wt(s,"has",t),Wt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function la(t,e=!1){return t=t.__v_raw,!e&&Wt(Te(t),"iterate",js),Reflect.get(t,"size",t)}function Up(t){t=Te(t);const e=Te(this);return $l(e).has.call(e,t)||(e.add(t),Ln(e,"add",t,t)),this}function $p(t,e){e=Te(e);const n=Te(this),{has:s,get:i}=$l(n);let r=s.call(n,t);r||(t=Te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?to(e,o)&&Ln(n,"set",t,e):Ln(n,"add",t,e),this}function Bp(t){const e=Te(this),{has:n,get:s}=$l(e);let i=n.call(e,t);i||(t=Te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ln(e,"delete",t,void 0),r}function Vp(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&Ln(t,"clear",void 0,void 0),n}function ca(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Te(o),l=e?sd:t?od:no;return!t&&Wt(a,"iterate",js),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ua(t,e,n){return function(...s){const i=this.__v_raw,r=Te(i),o=Ci(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?sd:e?od:no;return!e&&Wt(r,"iterate",l?xu:js),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Xn(t){return function(...e){return t==="delete"?!1:this}}function WC(){const t={get(r){return oa(this,r)},get size(){return la(this)},has:aa,add:Up,set:$p,delete:Bp,clear:Vp,forEach:ca(!1,!1)},e={get(r){return oa(this,r,!1,!0)},get size(){return la(this)},has:aa,add:Up,set:$p,delete:Bp,clear:Vp,forEach:ca(!1,!0)},n={get(r){return oa(this,r,!0)},get size(){return la(this,!0)},has(r){return aa.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:ca(!0,!1)},s={get(r){return oa(this,r,!0,!0)},get size(){return la(this,!0)},has(r){return aa.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ua(r,!1,!1),n[r]=ua(r,!0,!1),e[r]=ua(r,!1,!0),s[r]=ua(r,!0,!0)}),[t,n,e,s]}const[KC,zC,GC,QC]=WC();function id(t,e){const n=e?t?QC:GC:t?zC:KC;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ce(n,i)&&i in s?n:s,i,r)}const YC={get:id(!1,!1)},XC={get:id(!1,!0)},JC={get:id(!0,!1)},l_=new WeakMap,c_=new WeakMap,u_=new WeakMap,ZC=new WeakMap;function e0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function t0(t){return t.__v_skip||!Object.isExtensible(t)?0:e0(SC(t))}function an(t){return $i(t)?t:rd(t,!1,a_,YC,l_)}function n0(t){return rd(t,!1,qC,XC,c_)}function h_(t){return rd(t,!0,jC,JC,u_)}function rd(t,e,n,s,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=t0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Nn(t){return $i(t)?Nn(t.__v_raw):!!(t&&t.__v_isReactive)}function $i(t){return!!(t&&t.__v_isReadonly)}function Va(t){return!!(t&&t.__v_isShallow)}function d_(t){return Nn(t)||$i(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Bi(t){return Ba(t,"__v_skip",!0),t}const no=t=>Ve(t)?an(t):t,od=t=>Ve(t)?h_(t):t;function f_(t){ds&&en&&(t=Te(t),i_(t.dep||(t.dep=ed())))}function p_(t,e){t=Te(t),t.dep&&Lu(t.dep)}function We(t){return!!(t&&t.__v_isRef===!0)}function Pn(t){return g_(t,!1)}function Mu(t){return g_(t,!0)}function g_(t,e){return We(t)?t:new s0(t,e)}class s0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:no(e)}get value(){return f_(this),this._value}set value(e){const n=this.__v_isShallow||Va(e)||$i(e);e=n?e:Te(e),to(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:no(e),p_(this))}}function qt(t){return We(t)?t.value:t}const i0={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return We(i)&&!We(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function m_(t){return Nn(t)?t:new Proxy(t,i0)}function r0(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Bl(t,n);return e}class o0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Bl(t,e,n){const s=t[e];return We(s)?s:new o0(t,e,n)}var y_;class a0{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[y_]=!1,this._dirty=!0,this.effect=new td(e,()=>{this._dirty||(this._dirty=!0,p_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Te(this);return f_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}y_="__v_isReadonly";function l0(t,e,n=!1){let s,i;const r=ue(t);return r?(s=t,i=rn):(s=t.get,i=t.set),new a0(s,i,r||!i,n)}function fs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){cr(r,e,n)}return i}function Xt(t,e,n,s){if(ue(t)){const r=fs(t,e,n,s);return r&&Yy(r)&&r.catch(o=>{cr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Xt(t[r],e,n,s));return i}function cr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){fs(l,null,10,[t,o,a]);return}}c0(t,n,i,s)}function c0(t,e,n,s=!0){console.error(t)}let so=!1,Fu=!1;const Ct=[];let fn=0;const Ii=[];let In=null,Ms=0;const __=Promise.resolve();let ad=null;function As(t){const e=ad||__;return t?e.then(this?t.bind(this):t):e}function u0(t){let e=fn+1,n=Ct.length;for(;e<n;){const s=e+n>>>1;io(Ct[s])<t?e=s+1:n=s}return e}function Vl(t){(!Ct.length||!Ct.includes(t,so&&t.allowRecurse?fn+1:fn))&&(t.id==null?Ct.push(t):Ct.splice(u0(t.id),0,t),v_())}function v_(){!so&&!Fu&&(Fu=!0,ad=__.then(E_))}function h0(t){const e=Ct.indexOf(t);e>fn&&Ct.splice(e,1)}function w_(t){oe(t)?Ii.push(...t):(!In||!In.includes(t,t.allowRecurse?Ms+1:Ms))&&Ii.push(t),v_()}function Hp(t,e=so?fn+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function Ha(t){if(Ii.length){const e=[...new Set(Ii)];if(Ii.length=0,In){In.push(...e);return}for(In=e,In.sort((n,s)=>io(n)-io(s)),Ms=0;Ms<In.length;Ms++)In[Ms]();In=null,Ms=0}}const io=t=>t.id==null?1/0:t.id,d0=(t,e)=>{const n=io(t)-io(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function E_(t){Fu=!1,so=!0,Ct.sort(d0);const e=rn;try{for(fn=0;fn<Ct.length;fn++){const n=Ct[fn];n&&n.active!==!1&&fs(n,null,14)}}finally{fn=0,Ct.length=0,Ha(),so=!1,ad=null,(Ct.length||Ii.length)&&E_()}}function f0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||je;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||je;d&&(i=n.map(f=>Ge(f)?f.trim():f)),h&&(i=n.map(Ul))}let a,l=s[a=Bc(e)]||s[a=Bc(vn(e))];!l&&r&&(l=s[a=Bc(or(e))]),l&&Xt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(c,t,6,i)}}function b_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ue(t)){const l=c=>{const u=b_(c,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ve(t)&&s.set(t,null),null):(oe(r)?r.forEach(l=>o[l]=null):at(o,r),Ve(t)&&s.set(t,o),o)}function Hl(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,or(e))||Ce(t,e))}let It=null,jl=null;function ja(t){const e=It;return It=t,jl=t&&t.type.__scopeId||null,e}function aB(t){jl=t}function lB(){jl=null}function Oo(t,e=It,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zp(-1);const r=ja(e);let o;try{o=t(...i)}finally{ja(r),s._d&&Zp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:v}=t;let b,_;const g=ja(t);try{if(n.shapeFlag&4){const C=i||s;b=Qt(u.call(C,C,h,r,f,d,p)),_=l}else{const C=e;b=Qt(C.length>1?C(r,{attrs:l,slots:a,emit:c}):C(r,null)),_=e.props?l:g0(l)}}catch(C){Vr.length=0,cr(C,t,1),b=Ke(xt)}let w=b;if(_&&v!==!1){const C=Object.keys(_),{shapeFlag:P}=w;C.length&&P&7&&(o&&C.some(Yh)&&(_=m0(_,o)),w=Mn(w,_))}return n.dirs&&(w=Mn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,ja(g),b}function p0(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(qi(s)){if(s.type!==xt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const g0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},m0=(t,e)=>{const n={};for(const s in t)(!Yh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function y0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?jp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Hl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jp(s,o,c):!0:!!o;return!1}function jp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hl(n,r))return!0}return!1}function ld({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const T_=t=>t.__isSuspense,_0={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?v0(e,n,s,i,r,o,a,l,c):w0(t,e,n,s,i,o,a,l,c)},hydrate:E0,create:cd,normalize:b0},C_=_0;function ro(t,e){const n=t.props&&t.props[e];ue(n)&&n()}function v0(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=cd(t,i,s,e,h,n,r,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,s,d,r,o),d.deps>0?(ro(t,"onPending"),ro(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Si(d,t.ssFallback)):d.resolve()}function w0(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:v,isInFallback:b,isHydrating:_}=h;if(v)h.pendingBranch=d,pn(d,v)?(l(v,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():b&&(l(p,f,n,s,i,null,r,o,a),Si(h,f))):(h.pendingId++,_?(h.isHydrating=!1,h.activeBranch=v):c(v,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),b?(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(p,f,n,s,i,null,r,o,a),Si(h,f))):p&&pn(d,p)?(l(p,d,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&pn(d,p))l(p,d,n,s,i,h,r,o,a),Si(h,d);else if(ro(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:w}=h;g>0?setTimeout(()=>{h.pendingId===w&&h.fallback(f)},g):g===0&&h.fallback(f)}}function cd(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:d,um:f,n:p,o:{parentNode:v,remove:b}}=c,_=Ul(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1){const{vnode:C,activeBranch:P,pendingBranch:B,pendingId:R,effects:I,parentComponent:L,container:q}=g;if(g.isHydrating)g.isHydrating=!1;else if(!w){const ie=P&&B.transition&&B.transition.mode==="out-in";ie&&(P.transition.afterLeave=()=>{R===g.pendingId&&d(B,q,W,0)});let{anchor:W}=g;P&&(W=p(P),f(P,L,g,!0)),ie||d(B,q,W,0)}Si(g,B),g.pendingBranch=null,g.isInFallback=!1;let J=g.parent,H=!1;for(;J;){if(J.pendingBranch){J.effects.push(...I),H=!0;break}J=J.parent}H||w_(I),g.effects=[],ro(C,"onResolve")},fallback(w){if(!g.pendingBranch)return;const{vnode:C,activeBranch:P,parentComponent:B,container:R,isSVG:I}=g;ro(C,"onFallback");const L=p(P),q=()=>{!g.isInFallback||(h(null,w,R,L,B,null,I,a,l),Si(g,w))},J=w.transition&&w.transition.mode==="out-in";J&&(P.transition.afterLeave=q),g.isInFallback=!0,f(P,B,null,!0),J||q()},move(w,C,P){g.activeBranch&&d(g.activeBranch,w,C,P),g.container=w},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(w,C){const P=!!g.pendingBranch;P&&g.deps++;const B=w.vnode.el;w.asyncDep.catch(R=>{cr(R,w,0)}).then(R=>{if(w.isUnmounted||g.isUnmounted||g.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:I}=w;Hu(w,R,!1),B&&(I.el=B);const L=!B&&w.subTree.el;C(w,I,v(B||w.subTree.el),B?null:p(w.subTree),g,o,l),L&&b(L),ld(w,I.el),P&&--g.deps===0&&g.resolve()})},unmount(w,C){g.isUnmounted=!0,g.activeBranch&&f(g.activeBranch,n,w,C),g.pendingBranch&&f(g.pendingBranch,n,w,C)}};return g}function E0(t,e,n,s,i,r,o,a,l){const c=e.suspense=cd(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function b0(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=qp(s?n.default:n),t.ssFallback=s?qp(n.fallback):Ke(xt)}function qp(t){let e;if(ue(t)){const n=ji&&t._c;n&&(t._d=!1,Ft()),t=t(),n&&(t._d=!0,e=Yt,q_())}return oe(t)&&(t=p0(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function I_(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):w_(t)}function Si(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,ld(s,i))}function Ai(t,e){if(et){let n=et.provides;const s=et.parent&&et.parent.provides;s===n&&(n=et.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=et||It;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(s.proxy):e}}function T0(t,e){return ud(t,null,e)}const ha={};function qs(t,e,n){return ud(t,e,n)}function ud(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=je){const a=et;let l,c=!1,u=!1;if(We(t)?(l=()=>t.value,c=Va(t)):Nn(t)?(l=()=>t,s=!0):oe(t)?(u=!0,c=t.some(w=>Nn(w)||Va(w)),l=()=>t.map(w=>{if(We(w))return w.value;if(Nn(w))return _i(w);if(ue(w))return fs(w,a,2)})):ue(t)?e?l=()=>fs(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Xt(t,a,3,[d])}:l=rn,e&&s){const w=l;l=()=>_i(w())}let h,d=w=>{h=_.onStop=()=>{fs(w,a,4)}},f;if(Ki)if(d=rn,e?n&&Xt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const w=mI();f=w.__watcherHandles||(w.__watcherHandles=[])}else return rn;let p=u?new Array(t.length).fill(ha):ha;const v=()=>{if(!!_.active)if(e){const w=_.run();(s||c||(u?w.some((C,P)=>to(C,p[P])):to(w,p)))&&(h&&h(),Xt(e,a,3,[w,p===ha?void 0:u&&p[0]===ha?[]:p,d]),p=w)}else _.run()};v.allowRecurse=!!e;let b;i==="sync"?b=v:i==="post"?b=()=>dt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),b=()=>Vl(v));const _=new td(l,b);e?n?v():p=_.run():i==="post"?dt(_.run.bind(_),a&&a.suspense):_.run();const g=()=>{_.stop(),a&&a.scope&&Xh(a.scope.effects,_)};return f&&f.push(g),g}function C0(t,e,n){const s=this.proxy,i=Ge(t)?t.includes(".")?S_(s,t):()=>s[t]:t.bind(s,s);let r;ue(e)?r=e:(r=e.handler,n=e);const o=et;Wi(this);const a=ud(i,r.bind(s),n);return o?Wi(o):Ks(),a}function S_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function _i(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))_i(t.value,e);else if(oe(t))for(let n=0;n<t.length;n++)_i(t[n],e);else if(Qy(t)||Ci(t))t.forEach(n=>{_i(n,e)});else if(Jy(t))for(const n in t)_i(t[n],e);return t}function A_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wl(()=>{t.isMounted=!0}),Lo(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],I0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(t,{slots:e}){const n=Wn(),s=A_();let i;return()=>{const r=e.default&&hd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const v of r)if(v.type!==xt){o=v;break}}const a=Te(t),{mode:l}=a;if(s.isLeaving)return Hc(o);const c=Wp(o);if(!c)return Hc(o);const u=oo(c,a,s,n);Vi(c,u);const h=n.subTree,d=h&&Wp(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,f=!0)}if(d&&d.type!==xt&&(!pn(c,d)||f)){const v=oo(d,a,s,n);if(Vi(d,v),l==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Hc(o);l==="in-out"&&c.type!==xt&&(v.delayLeave=(b,_,g)=>{const w=k_(s,d);w[String(d.key)]=d,b._leaveCb=()=>{_(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},R_=I0;function k_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function oo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:v,onAppear:b,onAfterAppear:_,onAppearCancelled:g}=e,w=String(t.key),C=k_(n,t),P=(I,L)=>{I&&Xt(I,s,9,L)},B=(I,L)=>{const q=L[1];P(I,L),oe(I)?I.every(J=>J.length<=1)&&q():I.length<=1&&q()},R={mode:r,persisted:o,beforeEnter(I){let L=a;if(!n.isMounted)if(i)L=v||a;else return;I._leaveCb&&I._leaveCb(!0);const q=C[w];q&&pn(t,q)&&q.el._leaveCb&&q.el._leaveCb(),P(L,[I])},enter(I){let L=l,q=c,J=u;if(!n.isMounted)if(i)L=b||l,q=_||c,J=g||u;else return;let H=!1;const ie=I._enterCb=W=>{H||(H=!0,W?P(J,[I]):P(q,[I]),R.delayedLeave&&R.delayedLeave(),I._enterCb=void 0)};L?B(L,[I,ie]):ie()},leave(I,L){const q=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return L();P(h,[I]);let J=!1;const H=I._leaveCb=ie=>{J||(J=!0,L(),ie?P(p,[I]):P(f,[I]),I._leaveCb=void 0,C[q]===t&&delete C[q])};C[q]=t,d?B(d,[I,H]):H()},clone(I){return oo(I,e,n,s)}};return R}function Hc(t){if(xo(t))return t=Mn(t),t.children=null,t}function Wp(t){return xo(t)?t.children?t.children[0]:void 0:t}function Vi(t,e){t.shapeFlag&6&&t.component?Vi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===bt?(o.patchFlag&128&&i++,s=s.concat(hd(o.children,e,a))):(e||o.type!==xt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function En(t){return ue(t)?{setup:t,name:t.name}:t}const Ws=t=>!!t.type.__asyncLoader;function S0(t){ue(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,b)=>{a(p,()=>v(h()),()=>b(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return En({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=et;if(c)return()=>jc(c,f);const p=g=>{l=null,cr(g,f,13,!s)};if(o&&f.suspense||Ki)return d().then(g=>()=>jc(g,f)).catch(g=>(p(g),()=>s?Ke(s,{error:g}):null));const v=Pn(!1),b=Pn(),_=Pn(!!i);return i&&setTimeout(()=>{_.value=!1},i),r!=null&&setTimeout(()=>{if(!v.value&&!b.value){const g=new Error(`Async component timed out after ${r}ms.`);p(g),b.value=g}},r),d().then(()=>{v.value=!0,f.parent&&xo(f.parent.vnode)&&Vl(f.parent.update)}).catch(g=>{p(g),b.value=g}),()=>{if(v.value&&c)return jc(c,f);if(b.value&&s)return Ke(s,{error:b.value});if(n&&!_.value)return Ke(n)}}})}function jc(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=Ke(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const xo=t=>t.type.__isKeepAlive,A0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Wn(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,d=h("div");s.activate=(g,w,C,P,B)=>{const R=g.component;c(g,w,C,0,a),l(R.vnode,g,w,C,R,a,P,g.slotScopeIds,B),dt(()=>{R.isDeactivated=!1,R.a&&$r(R.a);const I=g.props&&g.props.onVnodeMounted;I&&Mt(I,R.parent,g)},a)},s.deactivate=g=>{const w=g.component;c(g,d,null,1,a),dt(()=>{w.da&&$r(w.da);const C=g.props&&g.props.onVnodeUnmounted;C&&Mt(C,w.parent,g),w.isDeactivated=!0},a)};function f(g){qc(g),u(g,n,a,!0)}function p(g){i.forEach((w,C)=>{const P=ju(w.type);P&&(!g||!g(P))&&v(C)})}function v(g){const w=i.get(g);!o||w.type!==o.type?f(w):o&&qc(o),i.delete(g),r.delete(g)}qs(()=>[t.include,t.exclude],([g,w])=>{g&&p(C=>Dr(g,C)),w&&p(C=>!Dr(w,C))},{flush:"post",deep:!0});let b=null;const _=()=>{b!=null&&i.set(b,Wc(n.subTree))};return Wl(_),dd(_),Lo(()=>{i.forEach(g=>{const{subTree:w,suspense:C}=n,P=Wc(w);if(g.type===P.type){qc(P);const B=P.component.da;B&&dt(B,C);return}f(g)})}),()=>{if(b=null,!e.default)return null;const g=e.default(),w=g[0];if(g.length>1)return o=null,g;if(!qi(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let C=Wc(w);const P=C.type,B=ju(Ws(C)?C.type.__asyncResolved||{}:P),{include:R,exclude:I,max:L}=t;if(R&&(!B||!Dr(R,B))||I&&B&&Dr(I,B))return o=C,w;const q=C.key==null?P:C.key,J=i.get(q);return C.el&&(C=Mn(C),w.shapeFlag&128&&(w.ssContent=C)),b=q,J?(C.el=J.el,C.component=J.component,C.transition&&Vi(C,C.transition),C.shapeFlag|=512,r.delete(q),r.add(q)):(r.add(q),L&&r.size>parseInt(L,10)&&v(r.values().next().value)),C.shapeFlag|=256,o=C,T_(w.type)?w:C}}},R0=A0;function Dr(t,e){return oe(t)?t.some(n=>Dr(n,e)):Ge(t)?t.split(",").includes(e):t.test?t.test(e):!1}function k0(t,e){N_(t,"a",e)}function N0(t,e){N_(t,"da",e)}function N_(t,e,n=et){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ql(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xo(i.parent.vnode)&&P0(s,e,n,i),i=i.parent}}function P0(t,e,n,s){const i=ql(e,t,s,!0);fd(()=>{Xh(s[e],i)},n)}function qc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Wc(t){return t.shapeFlag&128?t.ssContent:t}function ql(t,e,n=et,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ar(),Wi(n);const a=Xt(e,n,t,o);return Ks(),lr(),a});return s?i.unshift(r):i.push(r),r}}const qn=t=>(e,n=et)=>(!Ki||t==="sp")&&ql(t,(...s)=>e(...s),n),D0=qn("bm"),Wl=qn("m"),O0=qn("bu"),dd=qn("u"),Lo=qn("bum"),fd=qn("um"),x0=qn("sp"),L0=qn("rtg"),M0=qn("rtc");function P_(t,e=et){ql("ec",t,e)}function dn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ar(),Xt(l,n,8,[t.el,a,t,e]),lr())}}const pd="components";function F0(t,e){return O_(pd,t,!0,e)||t}const D_=Symbol();function U0(t){return Ge(t)?O_(pd,t,!1)||t:t||D_}function O_(t,e,n=!0,s=!1){const i=It||et;if(i){const r=i.type;if(t===pd){const a=ju(r,!1);if(a&&(a===e||a===vn(e)||a===Fl(vn(e))))return r}const o=Kp(i[t]||r[t],e)||Kp(i.appContext[t],e);return!o&&s?r:o}}function Kp(t,e){return t&&(t[e]||t[vn(e)]||t[Fl(vn(e))])}function $0(t,e,n,s){let i;const r=n&&n[s];if(oe(t)||Ge(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function gd(t,e,n={},s,i){if(It.isCE||It.parent&&Ws(It.parent)&&It.parent.isCE)return e!=="default"&&(n.name=e),Ke("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Ft();const o=r&&x_(r(n)),a=Dn(bt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function x_(t){return t.some(e=>qi(e)?!(e.type===xt||e.type===bt&&!x_(e.children)):!0)?t:null}const Uu=t=>t?G_(t)?vd(t)||t.proxy:Uu(t.parent):null,Br=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uu(t.parent),$root:t=>Uu(t.root),$emit:t=>t.emit,$options:t=>md(t),$forceUpdate:t=>t.f||(t.f=()=>Vl(t.update)),$nextTick:t=>t.n||(t.n=As.bind(t.proxy)),$watch:t=>C0.bind(t)}),Kc=(t,e)=>t!==je&&!t.__isScriptSetup&&Ce(t,e),B0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Kc(s,e))return o[e]=1,s[e];if(i!==je&&Ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ce(c,e))return o[e]=3,r[e];if(n!==je&&Ce(n,e))return o[e]=4,n[e];$u&&(o[e]=0)}}const u=Br[e];let h,d;if(u)return e==="$attrs"&&Wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==je&&Ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Kc(i,e)?(i[e]=n,!0):s!==je&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==je&&Ce(t,o)||Kc(e,o)||(a=r[0])&&Ce(a,o)||Ce(s,o)||Ce(Br,o)||Ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $u=!0;function V0(t){const e=md(t),n=t.proxy,s=t.ctx;$u=!1,e.beforeCreate&&zp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:v,deactivated:b,beforeDestroy:_,beforeUnmount:g,destroyed:w,unmounted:C,render:P,renderTracked:B,renderTriggered:R,errorCaptured:I,serverPrefetch:L,expose:q,inheritAttrs:J,components:H,directives:ie,filters:W}=e;if(c&&H0(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const De in o){const we=o[De];ue(we)&&(s[De]=we.bind(n))}if(i){const De=i.call(n,n);Ve(De)&&(t.data=an(De))}if($u=!0,r)for(const De in r){const we=r[De],ut=ue(we)?we.bind(n,n):ue(we.get)?we.get.bind(n,n):rn,cn=!ue(we)&&ue(we.set)?we.set.bind(n):rn,Y=mt({get:ut,set:cn});Object.defineProperty(s,De,{enumerable:!0,configurable:!0,get:()=>Y.value,set:A=>Y.value=A})}if(a)for(const De in a)L_(a[De],s,n,De);if(l){const De=ue(l)?l.call(n):l;Reflect.ownKeys(De).forEach(we=>{Ai(we,De[we])})}u&&zp(u,t,"c");function me(De,we){oe(we)?we.forEach(ut=>De(ut.bind(n))):we&&De(we.bind(n))}if(me(D0,h),me(Wl,d),me(O0,f),me(dd,p),me(k0,v),me(N0,b),me(P_,I),me(M0,B),me(L0,R),me(Lo,g),me(fd,C),me(x0,L),oe(q))if(q.length){const De=t.exposed||(t.exposed={});q.forEach(we=>{Object.defineProperty(De,we,{get:()=>n[we],set:ut=>n[we]=ut})})}else t.exposed||(t.exposed={});P&&t.render===rn&&(t.render=P),J!=null&&(t.inheritAttrs=J),H&&(t.components=H),ie&&(t.directives=ie)}function H0(t,e,n=rn,s=!1){oe(t)&&(t=Bu(t));for(const i in t){const r=t[i];let o;Ve(r)?"default"in r?o=Jt(r.from||i,r.default,!0):o=Jt(r.from||i):o=Jt(r),We(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function zp(t,e,n){Xt(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function L_(t,e,n,s){const i=s.includes(".")?S_(n,s):()=>n[s];if(Ge(t)){const r=e[t];ue(r)&&qs(i,r)}else if(ue(t))qs(i,t.bind(n));else if(Ve(t))if(oe(t))t.forEach(r=>L_(r,e,n,s));else{const r=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(r)&&qs(i,r,t)}}function md(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qa(l,c,o,!0)),qa(l,e,o)),Ve(e)&&r.set(e,l),l}function qa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qa(t,r,n,!0),i&&i.forEach(o=>qa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=j0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const j0={data:Gp,props:Os,emits:Os,methods:Os,computed:Os,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Os,directives:Os,watch:W0,provide:Gp,inject:q0};function Gp(t,e){return e?t?function(){return at(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function q0(t,e){return Os(Bu(t),Bu(e))}function Bu(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?at(at(Object.create(null),t),e):e}function W0(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=Nt(t[s],e[s]);return n}function K0(t,e,n,s=!1){const i={},r={};Ba(r,Kl,1),t.propsDefaults=Object.create(null),M_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:n0(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function z0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Hl(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ce(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=vn(d);i[p]=Vu(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{M_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Ce(e,h)&&((u=or(h))===h||!Ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Vu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Ce(e,h)&&!0)&&(delete r[h],c=!0)}c&&Ln(t,"set","$attrs")}function M_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ur(l))continue;const c=e[l];let u;i&&Ce(i,u=vn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Te(n),c=a||je;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vu(i,l,h,c[h],t,!Ce(c,h))}}return o}function Vu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ue(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Wi(i),s=c[n]=l.call(null,e),Ks())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===or(n))&&(s=!0))}return s}function F_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ue(t)){const u=h=>{l=!0;const[d,f]=F_(h,e,!0);at(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ve(t)&&s.set(t,Ti),Ti;if(oe(r))for(let u=0;u<r.length;u++){const h=vn(r[u]);Qp(h)&&(o[h]=je)}else if(r)for(const u in r){const h=vn(u);if(Qp(h)){const d=r[u],f=o[h]=oe(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const p=Jp(Boolean,f.type),v=Jp(String,f.type);f[0]=p>-1,f[1]=v<0||p<v,(p>-1||Ce(f,"default"))&&a.push(h)}}}const c=[o,a];return Ve(t)&&s.set(t,c),c}function Qp(t){return t[0]!=="$"}function Yp(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xp(t,e){return Yp(t)===Yp(e)}function Jp(t,e){return oe(e)?e.findIndex(n=>Xp(n,t)):ue(e)&&Xp(e,t)?0:-1}const U_=t=>t[0]==="_"||t==="$stable",yd=t=>oe(t)?t.map(Qt):[Qt(t)],G0=(t,e,n)=>{if(e._n)return e;const s=Oo((...i)=>yd(e(...i)),n);return s._c=!1,s},$_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(U_(i))continue;const r=t[i];if(ue(r))e[i]=G0(i,r,s);else if(r!=null){const o=yd(r);e[i]=()=>o}}},B_=(t,e)=>{const n=yd(e);t.slots.default=()=>n},Q0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),Ba(e,"_",n)):$_(e,t.slots={})}else t.slots={},e&&B_(t,e);Ba(t.slots,Kl,1)},Y0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=je;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(at(i,e),!n&&a===1&&delete i._):(r=!e.$stable,$_(e,i)),o=e}else e&&(B_(t,e),o={default:1});if(r)for(const a in i)!U_(a)&&!(a in o)&&delete i[a]};function V_(){return{app:null,config:{isNativeTag:TC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X0=0;function J0(t,e){return function(s,i=null){ue(s)||(s=Object.assign({},s)),i!=null&&!Ve(i)&&(i=null);const r=V_(),o=new Set;let a=!1;const l=r.app={_uid:X0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Y_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ue(c.install)?(o.add(c),c.install(l,...u)):ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ke(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,vd(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wa(t,e,n,s,i=!1){if(oe(t)){t.forEach((d,f)=>Wa(d,e&&(oe(e)?e[f]:e),n,s,i));return}if(Ws(s)&&!i)return;const r=s.shapeFlag&4?vd(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ge(c)?(u[c]=null,Ce(h,c)&&(h[c]=null)):We(c)&&(c.value=null)),ue(l))fs(l,a,12,[o,u]);else{const d=Ge(l),f=We(l);if(d||f){const p=()=>{if(t.f){const v=d?Ce(h,l)?h[l]:u[l]:l.value;i?oe(v)&&Xh(v,r):oe(v)?v.includes(r)||v.push(r):d?(u[l]=[r],Ce(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ce(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,dt(p,n)):p()}}}let Jn=!1;const da=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",fa=t=>t.nodeType===8;function Z0(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,g)=>{if(!g.hasChildNodes()){n(null,_,g),Ha(),g._vnode=_;return}Jn=!1,h(g.firstChild,_,null,null,null),Ha(),g._vnode=_,Jn&&console.error("Hydration completed but contains mismatches.")},h=(_,g,w,C,P,B=!1)=>{const R=fa(_)&&_.data==="[",I=()=>v(_,g,w,C,P,R),{type:L,ref:q,shapeFlag:J,patchFlag:H}=g;let ie=_.nodeType;g.el=_,H===-2&&(B=!1,g.dynamicChildren=null);let W=null;switch(L){case Hi:ie!==3?g.children===""?(l(g.el=i(""),o(_),_),W=_):W=I():(_.data!==g.children&&(Jn=!0,_.data=g.children),W=r(_));break;case xt:ie!==8||R?W=I():W=r(_);break;case ka:if(R&&(_=r(_),ie=_.nodeType),ie===1||ie===3){W=_;const ke=!g.children.length;for(let me=0;me<g.staticCount;me++)ke&&(g.children+=W.nodeType===1?W.outerHTML:W.data),me===g.staticCount-1&&(g.anchor=W),W=r(W);return R?r(W):W}else I();break;case bt:R?W=p(_,g,w,C,P,B):W=I();break;default:if(J&1)ie!==1||g.type.toLowerCase()!==_.tagName.toLowerCase()?W=I():W=d(_,g,w,C,P,B);else if(J&6){g.slotScopeIds=P;const ke=o(_);if(e(g,ke,null,w,C,da(ke),B),W=R?b(_):r(_),W&&fa(W)&&W.data==="teleport end"&&(W=r(W)),Ws(g)){let me;R?(me=Ke(bt),me.anchor=W?W.previousSibling:ke.lastChild):me=_.nodeType===3?z_(""):Ke("div"),me.el=_,g.component.subTree=me}}else J&64?ie!==8?W=I():W=g.type.hydrate(_,g,w,C,P,B,t,f):J&128&&(W=g.type.hydrate(_,g,w,C,da(o(_)),P,B,t,h))}return q!=null&&Wa(q,null,C,g),W},d=(_,g,w,C,P,B)=>{B=B||!!g.dynamicChildren;const{type:R,props:I,patchFlag:L,shapeFlag:q,dirs:J}=g,H=R==="input"&&J||R==="option";if(H||L!==-1){if(J&&dn(g,null,w,"created"),I)if(H||!B||L&48)for(const W in I)(H&&W.endsWith("value")||Do(W)&&!Ur(W))&&s(_,W,null,I[W],!1,void 0,w);else I.onClick&&s(_,"onClick",null,I.onClick,!1,void 0,w);let ie;if((ie=I&&I.onVnodeBeforeMount)&&Mt(ie,w,g),J&&dn(g,null,w,"beforeMount"),((ie=I&&I.onVnodeMounted)||J)&&I_(()=>{ie&&Mt(ie,w,g),J&&dn(g,null,w,"mounted")},C),q&16&&!(I&&(I.innerHTML||I.textContent))){let W=f(_.firstChild,g,_,w,C,P,B);for(;W;){Jn=!0;const ke=W;W=W.nextSibling,a(ke)}}else q&8&&_.textContent!==g.children&&(Jn=!0,_.textContent=g.children)}return _.nextSibling},f=(_,g,w,C,P,B,R)=>{R=R||!!g.dynamicChildren;const I=g.children,L=I.length;for(let q=0;q<L;q++){const J=R?I[q]:I[q]=Qt(I[q]);if(_)_=h(_,J,C,P,B,R);else{if(J.type===Hi&&!J.children)continue;Jn=!0,n(null,J,w,null,C,P,da(w),B)}}return _},p=(_,g,w,C,P,B)=>{const{slotScopeIds:R}=g;R&&(P=P?P.concat(R):R);const I=o(_),L=f(r(_),g,I,w,C,P,B);return L&&fa(L)&&L.data==="]"?r(g.anchor=L):(Jn=!0,l(g.anchor=c("]"),I,L),L)},v=(_,g,w,C,P,B)=>{if(Jn=!0,g.el=null,B){const L=b(_);for(;;){const q=r(_);if(q&&q!==L)a(q);else break}}const R=r(_),I=o(_);return a(_),n(null,g,I,R,w,C,da(I),P),R},b=_=>{let g=0;for(;_;)if(_=r(_),_&&fa(_)&&(_.data==="["&&g++,_.data==="]")){if(g===0)return r(_);g--}return _};return[u,h]}const dt=I_;function eI(t){return H_(t)}function tI(t){return H_(t,Z0)}function H_(t,e){const n=kC();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=rn,insertStaticContent:p}=t,v=(m,y,E,S=null,k=null,U=null,j=!1,M=null,V=!!y.dynamicChildren)=>{if(m===y)return;m&&!pn(m,y)&&(S=D(m),A(m,k,U,!0),m=null),y.patchFlag===-2&&(V=!1,y.dynamicChildren=null);const{type:N,ref:Z,shapeFlag:z}=y;switch(N){case Hi:b(m,y,E,S);break;case xt:_(m,y,E,S);break;case ka:m==null&&g(y,E,S,j);break;case bt:H(m,y,E,S,k,U,j,M,V);break;default:z&1?P(m,y,E,S,k,U,j,M,V):z&6?ie(m,y,E,S,k,U,j,M,V):(z&64||z&128)&&N.process(m,y,E,S,k,U,j,M,V,he)}Z!=null&&k&&Wa(Z,m&&m.ref,U,y||m,!y)},b=(m,y,E,S)=>{if(m==null)s(y.el=a(y.children),E,S);else{const k=y.el=m.el;y.children!==m.children&&c(k,y.children)}},_=(m,y,E,S)=>{m==null?s(y.el=l(y.children||""),E,S):y.el=m.el},g=(m,y,E,S)=>{[m.el,m.anchor]=p(m.children,y,E,S,m.el,m.anchor)},w=({el:m,anchor:y},E,S)=>{let k;for(;m&&m!==y;)k=d(m),s(m,E,S),m=k;s(y,E,S)},C=({el:m,anchor:y})=>{let E;for(;m&&m!==y;)E=d(m),i(m),m=E;i(y)},P=(m,y,E,S,k,U,j,M,V)=>{j=j||y.type==="svg",m==null?B(y,E,S,k,U,j,M,V):L(m,y,k,U,j,M,V)},B=(m,y,E,S,k,U,j,M)=>{let V,N;const{type:Z,props:z,shapeFlag:ee,transition:ae,dirs:de}=m;if(V=m.el=o(m.type,U,z&&z.is,z),ee&8?u(V,m.children):ee&16&&I(m.children,V,null,S,k,U&&Z!=="foreignObject",j,M),de&&dn(m,null,S,"created"),z){for(const Se in z)Se!=="value"&&!Ur(Se)&&r(V,Se,null,z[Se],U,m.children,S,k,F);"value"in z&&r(V,"value",null,z.value),(N=z.onVnodeBeforeMount)&&Mt(N,S,m)}R(V,m,m.scopeId,j,S),de&&dn(m,null,S,"beforeMount");const Ne=(!k||k&&!k.pendingBranch)&&ae&&!ae.persisted;Ne&&ae.beforeEnter(V),s(V,y,E),((N=z&&z.onVnodeMounted)||Ne||de)&&dt(()=>{N&&Mt(N,S,m),Ne&&ae.enter(V),de&&dn(m,null,S,"mounted")},k)},R=(m,y,E,S,k)=>{if(E&&f(m,E),S)for(let U=0;U<S.length;U++)f(m,S[U]);if(k){let U=k.subTree;if(y===U){const j=k.vnode;R(m,j,j.scopeId,j.slotScopeIds,k.parent)}}},I=(m,y,E,S,k,U,j,M,V=0)=>{for(let N=V;N<m.length;N++){const Z=m[N]=M?is(m[N]):Qt(m[N]);v(null,Z,y,E,S,k,U,j,M)}},L=(m,y,E,S,k,U,j)=>{const M=y.el=m.el;let{patchFlag:V,dynamicChildren:N,dirs:Z}=y;V|=m.patchFlag&16;const z=m.props||je,ee=y.props||je;let ae;E&&Ps(E,!1),(ae=ee.onVnodeBeforeUpdate)&&Mt(ae,E,y,m),Z&&dn(y,m,E,"beforeUpdate"),E&&Ps(E,!0);const de=k&&y.type!=="foreignObject";if(N?q(m.dynamicChildren,N,M,E,S,de,U):j||we(m,y,M,null,E,S,de,U,!1),V>0){if(V&16)J(M,y,z,ee,E,S,k);else if(V&2&&z.class!==ee.class&&r(M,"class",null,ee.class,k),V&4&&r(M,"style",z.style,ee.style,k),V&8){const Ne=y.dynamicProps;for(let Se=0;Se<Ne.length;Se++){const Me=Ne[Se],jt=z[Me],Qn=ee[Me];(Qn!==jt||Me==="value")&&r(M,Me,jt,Qn,k,m.children,E,S,F)}}V&1&&m.children!==y.children&&u(M,y.children)}else!j&&N==null&&J(M,y,z,ee,E,S,k);((ae=ee.onVnodeUpdated)||Z)&&dt(()=>{ae&&Mt(ae,E,y,m),Z&&dn(y,m,E,"updated")},S)},q=(m,y,E,S,k,U,j)=>{for(let M=0;M<y.length;M++){const V=m[M],N=y[M],Z=V.el&&(V.type===bt||!pn(V,N)||V.shapeFlag&70)?h(V.el):E;v(V,N,Z,null,S,k,U,j,!0)}},J=(m,y,E,S,k,U,j)=>{if(E!==S){if(E!==je)for(const M in E)!Ur(M)&&!(M in S)&&r(m,M,E[M],null,j,y.children,k,U,F);for(const M in S){if(Ur(M))continue;const V=S[M],N=E[M];V!==N&&M!=="value"&&r(m,M,N,V,j,y.children,k,U,F)}"value"in S&&r(m,"value",E.value,S.value)}},H=(m,y,E,S,k,U,j,M,V)=>{const N=y.el=m?m.el:a(""),Z=y.anchor=m?m.anchor:a("");let{patchFlag:z,dynamicChildren:ee,slotScopeIds:ae}=y;ae&&(M=M?M.concat(ae):ae),m==null?(s(N,E,S),s(Z,E,S),I(y.children,E,Z,k,U,j,M,V)):z>0&&z&64&&ee&&m.dynamicChildren?(q(m.dynamicChildren,ee,E,k,U,j,M),(y.key!=null||k&&y===k.subTree)&&j_(m,y,!0)):we(m,y,E,Z,k,U,j,M,V)},ie=(m,y,E,S,k,U,j,M,V)=>{y.slotScopeIds=M,m==null?y.shapeFlag&512?k.ctx.activate(y,E,S,j,V):W(y,E,S,k,U,j,V):ke(m,y,V)},W=(m,y,E,S,k,U,j)=>{const M=m.component=cI(m,S,k);if(xo(m)&&(M.ctx.renderer=he),uI(M),M.asyncDep){if(k&&k.registerDep(M,me),!m.el){const V=M.subTree=Ke(xt);_(null,V,y,E)}return}me(M,m,y,E,k,U,j)},ke=(m,y,E)=>{const S=y.component=m.component;if(y0(m,y,E))if(S.asyncDep&&!S.asyncResolved){De(S,y,E);return}else S.next=y,h0(S.update),S.update();else y.el=m.el,S.vnode=y},me=(m,y,E,S,k,U,j)=>{const M=()=>{if(m.isMounted){let{next:Z,bu:z,u:ee,parent:ae,vnode:de}=m,Ne=Z,Se;Ps(m,!1),Z?(Z.el=de.el,De(m,Z,j)):Z=de,z&&$r(z),(Se=Z.props&&Z.props.onVnodeBeforeUpdate)&&Mt(Se,ae,Z,de),Ps(m,!0);const Me=Vc(m),jt=m.subTree;m.subTree=Me,v(jt,Me,h(jt.el),D(jt),m,k,U),Z.el=Me.el,Ne===null&&ld(m,Me.el),ee&&dt(ee,k),(Se=Z.props&&Z.props.onVnodeUpdated)&&dt(()=>Mt(Se,ae,Z,de),k)}else{let Z;const{el:z,props:ee}=y,{bm:ae,m:de,parent:Ne}=m,Se=Ws(y);if(Ps(m,!1),ae&&$r(ae),!Se&&(Z=ee&&ee.onVnodeBeforeMount)&&Mt(Z,Ne,y),Ps(m,!0),z&&ne){const Me=()=>{m.subTree=Vc(m),ne(z,m.subTree,m,k,null)};Se?y.type.__asyncLoader().then(()=>!m.isUnmounted&&Me()):Me()}else{const Me=m.subTree=Vc(m);v(null,Me,E,S,m,k,U),y.el=Me.el}if(de&&dt(de,k),!Se&&(Z=ee&&ee.onVnodeMounted)){const Me=y;dt(()=>Mt(Z,Ne,Me),k)}(y.shapeFlag&256||Ne&&Ws(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&m.a&&dt(m.a,k),m.isMounted=!0,y=E=S=null}},V=m.effect=new td(M,()=>Vl(N),m.scope),N=m.update=()=>V.run();N.id=m.uid,Ps(m,!0),N()},De=(m,y,E)=>{y.component=m;const S=m.vnode.props;m.vnode=y,m.next=null,z0(m,y.props,S,E),Y0(m,y.children,E),ar(),Hp(),lr()},we=(m,y,E,S,k,U,j,M,V=!1)=>{const N=m&&m.children,Z=m?m.shapeFlag:0,z=y.children,{patchFlag:ee,shapeFlag:ae}=y;if(ee>0){if(ee&128){cn(N,z,E,S,k,U,j,M,V);return}else if(ee&256){ut(N,z,E,S,k,U,j,M,V);return}}ae&8?(Z&16&&F(N,k,U),z!==N&&u(E,z)):Z&16?ae&16?cn(N,z,E,S,k,U,j,M,V):F(N,k,U,!0):(Z&8&&u(E,""),ae&16&&I(z,E,S,k,U,j,M,V))},ut=(m,y,E,S,k,U,j,M,V)=>{m=m||Ti,y=y||Ti;const N=m.length,Z=y.length,z=Math.min(N,Z);let ee;for(ee=0;ee<z;ee++){const ae=y[ee]=V?is(y[ee]):Qt(y[ee]);v(m[ee],ae,E,null,k,U,j,M,V)}N>Z?F(m,k,U,!0,!1,z):I(y,E,S,k,U,j,M,V,z)},cn=(m,y,E,S,k,U,j,M,V)=>{let N=0;const Z=y.length;let z=m.length-1,ee=Z-1;for(;N<=z&&N<=ee;){const ae=m[N],de=y[N]=V?is(y[N]):Qt(y[N]);if(pn(ae,de))v(ae,de,E,null,k,U,j,M,V);else break;N++}for(;N<=z&&N<=ee;){const ae=m[z],de=y[ee]=V?is(y[ee]):Qt(y[ee]);if(pn(ae,de))v(ae,de,E,null,k,U,j,M,V);else break;z--,ee--}if(N>z){if(N<=ee){const ae=ee+1,de=ae<Z?y[ae].el:S;for(;N<=ee;)v(null,y[N]=V?is(y[N]):Qt(y[N]),E,de,k,U,j,M,V),N++}}else if(N>ee)for(;N<=z;)A(m[N],k,U,!0),N++;else{const ae=N,de=N,Ne=new Map;for(N=de;N<=ee;N++){const wt=y[N]=V?is(y[N]):Qt(y[N]);wt.key!=null&&Ne.set(wt.key,N)}let Se,Me=0;const jt=ee-de+1;let Qn=!1,br=0;const Yn=new Array(jt);for(N=0;N<jt;N++)Yn[N]=0;for(N=ae;N<=z;N++){const wt=m[N];if(Me>=jt){A(wt,k,U,!0);continue}let zt;if(wt.key!=null)zt=Ne.get(wt.key);else for(Se=de;Se<=ee;Se++)if(Yn[Se-de]===0&&pn(wt,y[Se])){zt=Se;break}zt===void 0?A(wt,k,U,!0):(Yn[zt-de]=N+1,zt>=br?br=zt:Qn=!0,v(wt,y[zt],E,null,k,U,j,M,V),Me++)}const Tr=Qn?nI(Yn):Ti;for(Se=Tr.length-1,N=jt-1;N>=0;N--){const wt=de+N,zt=y[wt],Ze=wt+1<Z?y[wt+1].el:S;Yn[N]===0?v(null,zt,E,Ze,k,U,j,M,V):Qn&&(Se<0||N!==Tr[Se]?Y(zt,E,Ze,2):Se--)}}},Y=(m,y,E,S,k=null)=>{const{el:U,type:j,transition:M,children:V,shapeFlag:N}=m;if(N&6){Y(m.component.subTree,y,E,S);return}if(N&128){m.suspense.move(y,E,S);return}if(N&64){j.move(m,y,E,he);return}if(j===bt){s(U,y,E);for(let z=0;z<V.length;z++)Y(V[z],y,E,S);s(m.anchor,y,E);return}if(j===ka){w(m,y,E);return}if(S!==2&&N&1&&M)if(S===0)M.beforeEnter(U),s(U,y,E),dt(()=>M.enter(U),k);else{const{leave:z,delayLeave:ee,afterLeave:ae}=M,de=()=>s(U,y,E),Ne=()=>{z(U,()=>{de(),ae&&ae()})};ee?ee(U,de,Ne):Ne()}else s(U,y,E)},A=(m,y,E,S=!1,k=!1)=>{const{type:U,props:j,ref:M,children:V,dynamicChildren:N,shapeFlag:Z,patchFlag:z,dirs:ee}=m;if(M!=null&&Wa(M,null,E,m,!0),Z&256){y.ctx.deactivate(m);return}const ae=Z&1&&ee,de=!Ws(m);let Ne;if(de&&(Ne=j&&j.onVnodeBeforeUnmount)&&Mt(Ne,y,m),Z&6)T(m.component,E,S);else{if(Z&128){m.suspense.unmount(E,S);return}ae&&dn(m,null,y,"beforeUnmount"),Z&64?m.type.remove(m,y,E,k,he,S):N&&(U!==bt||z>0&&z&64)?F(N,y,E,!1,!0):(U===bt&&z&384||!k&&Z&16)&&F(V,y,E),S&&X(m)}(de&&(Ne=j&&j.onVnodeUnmounted)||ae)&&dt(()=>{Ne&&Mt(Ne,y,m),ae&&dn(m,null,y,"unmounted")},E)},X=m=>{const{type:y,el:E,anchor:S,transition:k}=m;if(y===bt){Ee(E,S);return}if(y===ka){C(m);return}const U=()=>{i(E),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:j,delayLeave:M}=k,V=()=>j(E,U);M?M(m.el,U,V):V()}else U()},Ee=(m,y)=>{let E;for(;m!==y;)E=d(m),i(m),m=E;i(y)},T=(m,y,E)=>{const{bum:S,scope:k,update:U,subTree:j,um:M}=m;S&&$r(S),k.stop(),U&&(U.active=!1,A(j,m,y,E)),M&&dt(M,y),dt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},F=(m,y,E,S=!1,k=!1,U=0)=>{for(let j=U;j<m.length;j++)A(m[j],y,E,S,k)},D=m=>m.shapeFlag&6?D(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),G=(m,y,E)=>{m==null?y._vnode&&A(y._vnode,null,null,!0):v(y._vnode||null,m,y,null,null,null,E),Hp(),Ha(),y._vnode=m},he={p:v,um:A,m:Y,r:X,mt:W,mc:I,pc:we,pbc:q,n:D,o:t};let ve,ne;return e&&([ve,ne]=e(he)),{render:G,hydrate:ve,createApp:J0(G,ve)}}function Ps({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function j_(t,e,n=!1){const s=t.children,i=e.children;if(oe(s)&&oe(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=is(i[r]),a.el=o.el),n||j_(o,a)),a.type===Hi&&(a.el=o.el)}}function nI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const sI=t=>t.__isTeleport,bt=Symbol(void 0),Hi=Symbol(void 0),xt=Symbol(void 0),ka=Symbol(void 0),Vr=[];let Yt=null;function Ft(t=!1){Vr.push(Yt=t?null:[])}function q_(){Vr.pop(),Yt=Vr[Vr.length-1]||null}let ji=1;function Zp(t){ji+=t}function W_(t){return t.dynamicChildren=ji>0?Yt||Ti:null,q_(),ji>0&&Yt&&Yt.push(t),t}function pa(t,e,n,s,i,r){return W_(Ka(t,e,n,s,i,r,!0))}function Dn(t,e,n,s,i){return W_(Ke(t,e,n,s,i,!0))}function qi(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Kl="__vInternal",K_=({key:t})=>t!=null?t:null,Na=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ge(t)||We(t)||ue(t)?{i:It,r:t,k:e,f:!!n}:t:null;function Ka(t,e=null,n=null,s=0,i=null,r=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&K_(e),ref:e&&Na(e),scopeId:jl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:It};return a?(_d(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),ji>0&&!o&&Yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yt.push(l),l}const Ke=iI;function iI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===D_)&&(t=xt),qi(t)){const a=Mn(t,e,!0);return n&&_d(a,n),ji>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(pI(t)&&(t=t.__vccOpts),e){e=rI(e);let{class:a,style:l}=e;a&&!Ge(a)&&(e.class=Ui(a)),Ve(l)&&(d_(l)&&!oe(l)&&(l=at({},l)),e.style=Fi(l))}const o=Ge(t)?1:T_(t)?128:sI(t)?64:Ve(t)?4:ue(t)?2:0;return Ka(t,e,n,s,i,o,r,!0)}function rI(t){return t?d_(t)||Kl in t?at({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?oI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&K_(a),ref:e&&e.ref?n&&i?oe(i)?i.concat(Na(e)):[i,Na(e)]:Na(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function z_(t=" ",e=0){return Ke(Hi,null,t,e)}function eg(t="",e=!1){return e?(Ft(),Dn(xt,null,t)):Ke(xt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Ke(xt):oe(t)?Ke(bt,null,t.slice()):typeof t=="object"?is(t):Ke(Hi,null,String(t))}function is(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function _d(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),_d(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Kl in e)?e._ctx=It:i===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:It},n=32):(e=String(e),s&64?(n=16,e=[z_(e)]):n=8);t.children=e,t.shapeFlag|=n}function oI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ui([e.class,s.class]));else if(i==="style")e.style=Fi([e.style,s.style]);else if(Do(i)){const r=e[i],o=s[i];o&&r!==o&&!(oe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Mt(t,e,n,s=null){Xt(t,e,7,[n,s])}const aI=V_();let lI=0;function cI(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||aI,r={uid:lI++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:F_(s,i),emitsOptions:b_(s,i),emit:null,emitted:null,propsDefaults:je,inheritAttrs:s.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=f0.bind(null,r),t.ce&&t.ce(r),r}let et=null;const Wn=()=>et||It,Wi=t=>{et=t,t.scope.on()},Ks=()=>{et&&et.scope.off(),et=null};function G_(t){return t.vnode.shapeFlag&4}let Ki=!1;function uI(t,e=!1){Ki=e;const{props:n,children:s}=t.vnode,i=G_(t);K0(t,n,i,e),Q0(t,s);const r=i?hI(t,e):void 0;return Ki=!1,r}function hI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bi(new Proxy(t.ctx,B0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?fI(t):null;Wi(t),ar();const r=fs(s,t,0,[t.props,i]);if(lr(),Ks(),Yy(r)){if(r.then(Ks,Ks),e)return r.then(o=>{Hu(t,o,e)}).catch(o=>{cr(o,t,0)});t.asyncDep=r}else Hu(t,r,e)}else Q_(t,e)}function Hu(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=m_(e)),Q_(t,n)}let tg;function Q_(t,e,n){const s=t.type;if(!t.render){if(!e&&tg&&!s.render){const i=s.template||md(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=at(at({isCustomElement:r,delimiters:a},o),l);s.render=tg(i,c)}}t.render=s.render||rn}Wi(t),ar(),V0(t),lr(),Ks()}function dI(t){return new Proxy(t.attrs,{get(e,n){return Wt(t,"get","$attrs"),e[n]}})}function fI(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=dI(t))},slots:t.slots,emit:t.emit,expose:e}}function vd(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(m_(Bi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Br)return Br[n](t)},has(e,n){return n in e||n in Br}}))}function ju(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function pI(t){return ue(t)&&"__vccOpts"in t}const mt=(t,e)=>l0(t,e,Ki);function Zt(t,e,n){const s=arguments.length;return s===2?Ve(e)&&!oe(e)?qi(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qi(n)&&(n=[n]),Ke(t,e,n))}const gI=Symbol(""),mI=()=>Jt(gI),Y_="3.2.45",yI="http://www.w3.org/2000/svg",Fs=typeof document<"u"?document:null,ng=Fs&&Fs.createElement("template"),_I={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Fs.createElementNS(yI,t):Fs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Fs.createTextNode(t),createComment:t=>Fs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ng.innerHTML=s?`<svg>${t}</svg>`:t;const a=ng.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wI(t,e,n){const s=t.style,i=Ge(n);if(n&&!i){for(const r in n)qu(s,r,n[r]);if(e&&!Ge(e))for(const r in e)n[r]==null&&qu(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const sg=/\s*!important$/;function qu(t,e,n){if(oe(n))n.forEach(s=>qu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=EI(t,e);sg.test(n)?t.setProperty(or(s),n.replace(sg,""),"important"):t[s]=n}}const ig=["Webkit","Moz","ms"],zc={};function EI(t,e){const n=zc[e];if(n)return n;let s=vn(e);if(s!=="filter"&&s in t)return zc[e]=s;s=Fl(s);for(let i=0;i<ig.length;i++){const r=ig[i]+s;if(r in t)return zc[e]=r}return e}const rg="http://www.w3.org/1999/xlink";function bI(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rg,e.slice(6,e.length)):t.setAttributeNS(rg,e,n);else{const r=bC(e);n==null||r&&!zy(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function TI(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zy(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function CI(t,e,n,s){t.addEventListener(e,n,s)}function II(t,e,n,s){t.removeEventListener(e,n,s)}function SI(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=AI(e);if(s){const c=r[e]=NI(s,i);CI(t,a,c,l)}else o&&(II(t,a,o,l),r[e]=void 0)}}const og=/(?:Once|Passive|Capture)$/;function AI(t){let e;if(og.test(t)){e={};let s;for(;s=t.match(og);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let Gc=0;const RI=Promise.resolve(),kI=()=>Gc||(RI.then(()=>Gc=0),Gc=Date.now());function NI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(PI(s,n.value),e,5,[s])};return n.value=t,n.attached=kI(),n}function PI(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ag=/^on[a-z]/,DI=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?vI(t,s,i):e==="style"?wI(t,n,s):Do(e)?Yh(e)||SI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OI(t,e,s,i))?TI(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bI(t,e,s,i))};function OI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ag.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ag.test(e)&&Ge(n)?!1:e in t}const Zn="transition",Cr="animation",wd=(t,{slots:e})=>Zt(R_,J_(t),e);wd.displayName="Transition";const X_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xI=wd.props=at({},R_.props,X_),Ds=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},lg=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function J_(t){const e={};for(const H in t)H in X_||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=LI(i),v=p&&p[0],b=p&&p[1],{onBeforeEnter:_,onEnter:g,onEnterCancelled:w,onLeave:C,onLeaveCancelled:P,onBeforeAppear:B=_,onAppear:R=g,onAppearCancelled:I=w}=e,L=(H,ie,W)=>{ns(H,ie?u:a),ns(H,ie?c:o),W&&W()},q=(H,ie)=>{H._isLeaving=!1,ns(H,h),ns(H,f),ns(H,d),ie&&ie()},J=H=>(ie,W)=>{const ke=H?R:g,me=()=>L(ie,H,W);Ds(ke,[ie,me]),cg(()=>{ns(ie,H?l:r),Cn(ie,H?u:a),lg(ke)||ug(ie,s,v,me)})};return at(e,{onBeforeEnter(H){Ds(_,[H]),Cn(H,r),Cn(H,o)},onBeforeAppear(H){Ds(B,[H]),Cn(H,l),Cn(H,c)},onEnter:J(!1),onAppear:J(!0),onLeave(H,ie){H._isLeaving=!0;const W=()=>q(H,ie);Cn(H,h),ev(),Cn(H,d),cg(()=>{!H._isLeaving||(ns(H,h),Cn(H,f),lg(C)||ug(H,s,b,W))}),Ds(C,[H,W])},onEnterCancelled(H){L(H,!1),Ds(w,[H])},onAppearCancelled(H){L(H,!0),Ds(I,[H])},onLeaveCancelled(H){q(H),Ds(P,[H])}})}function LI(t){if(t==null)return null;if(Ve(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return Ul(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ns(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function cg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let MI=0;function ug(t,e,n,s){const i=t._endId=++MI,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Z_(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Z_(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(`${Zn}Delay`),r=s(`${Zn}Duration`),o=hg(i,r),a=s(`${Cr}Delay`),l=s(`${Cr}Duration`),c=hg(a,l);let u=null,h=0,d=0;e===Zn?o>0&&(u=Zn,h=o,d=r.length):e===Cr?c>0&&(u=Cr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Zn:Cr:null,d=u?u===Zn?r.length:l.length:0);const f=u===Zn&&/\b(transform|all)(,|$)/.test(s(`${Zn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function hg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>dg(n)+dg(t[s])))}function dg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ev(){return document.body.offsetHeight}const tv=new WeakMap,nv=new WeakMap,FI={name:"TransitionGroup",props:at({},xI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Wn(),s=A_();let i,r;return dd(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!VI(i[0].el,n.vnode.el,o))return;i.forEach(UI),i.forEach($I);const a=i.filter(BI);ev(),a.forEach(l=>{const c=l.el,u=c.style;Cn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,ns(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Te(t),a=J_(o);let l=o.tag||bt;i=r,r=e.default?hd(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Vi(u,oo(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Vi(u,oo(u,a,s,n)),tv.set(u,u.el.getBoundingClientRect())}return Ke(l,null,r)}}},sv=FI;function UI(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function $I(t){nv.set(t,t.el.getBoundingClientRect())}function BI(t){const e=tv.get(t),n=nv.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function VI(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Z_(s);return i.removeChild(s),r}const iv=at({patchProp:DI},_I);let Hr,fg=!1;function HI(){return Hr||(Hr=eI(iv))}function jI(){return Hr=fg?Hr:tI(iv),fg=!0,Hr}const qI=(...t)=>{const e=HI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rv(s);if(!i)return;const r=e._component;!ue(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},WI=(...t)=>{const e=jI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rv(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function rv(t){return Ge(t)?document.querySelector(t):t}const KI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,zI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,GI=/^["[{]|^-?\d[\d.]{0,14}$/;function QI(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function YI(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!GI.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return KI.test(t)||zI.test(t)?JSON.parse(t,QI):JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}const XI=/#/g,JI=/&/g,ZI=/=/g,ov=/\+/g,eS=/%5b/gi,tS=/%5d/gi,nS=/%5e/gi,sS=/%60/gi,iS=/%7b/gi,rS=/%7c/gi,oS=/%7d/gi,aS=/%20/gi;function lS(t){return encodeURI(""+t).replace(rS,"|").replace(eS,"[").replace(tS,"]")}function Wu(t){return lS(t).replace(ov,"%2B").replace(aS,"+").replace(XI,"%23").replace(JI,"%26").replace(sS,"`").replace(iS,"{").replace(oS,"}").replace(nS,"^")}function Yc(t){return Wu(t).replace(ZI,"%3D")}function av(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function cS(t){return av(t.replace(ov," "))}function uS(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const i=av(s[1]);if(i==="__proto__"||i==="constructor")continue;const r=cS(s[2]||"");e[i]?Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]:e[i]=r}return e}function hS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Yc(t)}=${Wu(n)}`).join("&"):`${Yc(t)}=${Wu(e)}`:Yc(t)}function dS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>hS(e,t[e])).join("&")}const fS=/^\w+:(\/\/)?/,pS=/^\/\/[^/]+/;function zl(t,e=!1){return fS.test(t)||e&&pS.test(t)}const gS=/\/$|\/\?/;function Ku(t="",e=!1){return e?gS.test(t):t.endsWith("/")}function lv(t="",e=!1){if(!e)return(Ku(t)?t.slice(0,-1):t)||"/";if(!Ku(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function mS(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Ku(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function yS(t=""){return t.startsWith("/")}function _S(t=""){return(yS(t)?t.slice(1):t)||"/"}function vS(t,e){if(cv(e)||zl(t))return t;const n=lv(e);return t.startsWith(n)?t:Ed(n,t)}function pg(t,e){if(cv(e))return t;const n=lv(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function wS(t,e){const n=bd(t),s={...uS(n.search),...e};return n.search=dS(s),bS(n)}function cv(t){return!t||t==="/"}function ES(t){return t&&t!=="/"}function Ed(t,...e){let n=t||"";for(const s of e.filter(i=>ES(i)))n=n?mS(n)+_S(s):s;return n}function bd(t="",e){if(!zl(t,!0))return e?bd(e+t):gg(t);const[n="",s,i=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[r="",o=""]=(i.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=gg(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:r,pathname:a,search:l,hash:c}}function gg(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function bS(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class TS extends Error{constructor(){super(...arguments),this.name="FetchError"}}function CS(t,e,n){let s="";t&&n&&(s=`${n.status} ${n.statusText} (${t.toString()})`),e&&(s=`${e.message} (${s})`);const i=new TS(s);return Object.defineProperty(i,"request",{get(){return t}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),Object.defineProperty(i,"status",{get(){return n&&n.status}}),Object.defineProperty(i,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(i,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(i,"statusMessage",{get(){return n&&n.statusText}}),i}const IS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function mg(t="GET"){return IS.has(t.toUpperCase())}function SS(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const AS=new Set(["image/svg","application/xml","application/xhtml","application/html"]),RS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function kS(t=""){if(!t)return"json";const e=t.split(";").shift();return RS.test(e)?"json":AS.has(e)||e.startsWith("text/")?"text":"blob"}const NS=new Set([408,409,425,429,500,502,503,504]);function uv(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const c=typeof o.options.retry=="number"?o.options.retry:mg(o.options.method)?0:1,u=o.response&&o.response.status||500;if(c>0&&NS.has(u))return i(o.request,{...o.options,retry:c-1})}const l=CS(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(a,l={}){const c={request:a,options:{...t.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=vS(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=wS(c.request,{...c.options.params,...c.options.query})),c.options.body&&mg(c.options.method)&&SS(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async h=>(c.error=h,c.options.onRequestError&&await c.options.onRequestError(c),s(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||kS(c.response.headers.get("content-type")||"");if(u==="json"){const h=await c.response.text(),d=c.options.parseResponse||YI;c.response._data=d(h)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),s(c)):c.response},r=function(a,l){return i(a,l).then(c=>c._data)};return r.raw=i,r.native=e,r.create=(o={})=>uv({...t,defaults:{...t.defaults,...o}}),r}const hv=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),PS=hv.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),DS=hv.Headers,OS=uv({fetch:PS,Headers:DS}),xS=OS,LS=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},za=LS().app,MS=()=>za.baseURL,FS=()=>za.buildAssetsDir,US=(...t)=>Ed(dv(),FS(),...t),dv=(...t)=>{const e=za.cdnURL||za.baseURL;return t.length?Ed(e,...t):e};globalThis.__buildAssetsURL=US,globalThis.__publicAssetsURL=dv;function zu(t,e={},n){for(const s in t){const i=t[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?zu(i,e,r):typeof i=="function"&&(e[r]=i)}return e}function $S(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve())}function BS(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function Xc(t,e){for(const n of t)n(e)}class VS{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(e,i),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=zu(e),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(e){const n=zu(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith($S,e,...n)}callHookParallel(e,...n){return this.callHookWith(BS,e,...n)}callHookWith(e,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Xc(this._before,i);const r=e(this._hooks[n]||[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&Xc(this._after,i)}):(this._after&&i&&Xc(this._after,i),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function fv(){return new VS}function HS(){let t,e=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(s,i)=>{i||n(s),t=s,e=!0},unset:()=>{t=void 0,e=!1},call:(s,i)=>{n(s),t=s;try{return i()}finally{e||(t=void 0)}},async callAsync(s,i){t=s;const r=()=>{t=s},o=()=>t===s?r:void 0;Gu.add(o);try{const a=i();return e||(t=void 0),await a}finally{Gu.delete(o)}}}}function jS(){const t={};return{get(e){return t[e]||(t[e]=HS()),t[e],t[e]}}}const Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},yg="__unctx__",qS=Ga[yg]||(Ga[yg]=jS()),WS=t=>qS.get(t),_g="__unctx_async_handlers__",Gu=Ga[_g]||(Ga[_g]=new Set);function pv(t){const e=[];for(const i of Gu){const r=i();r&&e.push(r)}const n=()=>{for(const i of e)i()};let s=t();return"catch"in s&&(s=s.catch(i=>{throw n(),i})),[s,n]}const gv=WS("nuxt-app"),KS="__nuxt_plugin";function zS(t){let e=0;const n={provide:void 0,globalName:"nuxt",payload:an({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...t};n.hooks=fv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,o)=>{const a="$"+r;ga(n,a,o),ga(n.vueApp.config.globalProperties,a,o)},ga(n.vueApp,"$nuxt",n),ga(n.vueApp.config.globalProperties,"$nuxt",n);const s=an(n.payload.config),i=new Proxy(s,{get(r,o){var a;return o==="public"?r.public:(a=r[o])!=null?a:r.public[o]},set(r,o,a){return o==="public"||o==="app"?!1:(r[o]=a,r.public[o]=a,!0)}});return n.provide("config",i),n}async function GS(t,e){if(typeof e!="function")return;const{provide:n}=await rs(t,e,[t])||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function QS(t,e){for(const n of e)await GS(t,n)}function YS(t){return t.map(n=>typeof n!="function"?null:n.length>1?s=>n(s,s.provide):n).filter(Boolean)}function ci(t){return t[KS]=!0,t}function rs(t,e,n){const s=()=>n?e(...n):e();return gv.set(t),s()}function Lt(){const t=gv.tryUse();if(!t){const e=Wn();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function mv(){return Lt().$config}function ga(t,e,n){Object.defineProperty(t,e,{get:()=>n})}class Qu extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(e.statusMessage=this.statusMessage),this.data!==void 0&&(e.data=this.data),e}}Qu.__h3_error__=!0;function Yu(t){var n;if(typeof t=="string")return new Qu(t);if(XS(t))return t;const e=new Qu((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.data&&(e.data=t.data),t.statusCode?e.statusCode=t.statusCode:t.status&&(e.statusCode=t.status),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function XS(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Gl=()=>Bl(Lt().payload,"error"),Or=t=>{const e=yv(t);try{Lt().callHook("app:error",e);const s=Gl();s.value=s.value||e}catch{throw e}return e},JS=async(t={})=>{const e=Lt(),n=Gl();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},ZS=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),yv=t=>{const e=Yu(t);return e.__nuxt_error=!0,e};function eA(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const i="$s"+n,r=Lt(),o=Bl(r.payload.state,i);if(o.value===void 0&&s){const a=s();if(We(a))return r.payload.state[i]=a,a;o.value=a}return o}const Td=()=>{var t;return(t=Lt())==null?void 0:t.$router},tA=()=>Wn()?Jt("_route",Lt()._route):Lt()._route,nA=t=>t,sA=()=>{try{if(Lt()._processingMiddleware)return!0}catch{return!0}return!1},iA=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=zl(n,!0);if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(s&&bd(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!s&&sA())return t;const i=Td();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)};async function _v(t,e=Td()){if(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(t))return;e._routePreloaded.add(t);const n=e._preloadPromises=e._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>_v(t,e));const s=e.resolve(t).matched.map(i=>{var r;return(r=i.components)==null?void 0:r.default}).filter(i=>typeof i=="function");for(const i of s){const r=Promise.resolve(i()).catch(()=>{}).finally(()=>n.splice(n.indexOf(r)));n.push(r)}await Promise.all(n)}const rA="modulepreload",oA=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},vg={},Pa=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=oA(r,s),r in vg)return;vg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":rA,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},aA=(...t)=>t.find(e=>e!==void 0),lA="noopener noreferrer",cA=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),uA=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});function hA(t){const e=t.componentName||"NuxtLink";return En({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:s}){const i=Td(),r=mt(()=>n.to||n.href||""),o=mt(()=>n.external||n.target&&n.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||zl(r.value,!0)),a=Pn(!1),l=Pn(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof r.value=="string"&&n.target!=="_blank"&&!fA()){const u=Lt(),h=dA();let d,f=null;Wl(()=>{d=cA(()=>{var p;(p=l==null?void 0:l.value)!=null&&p.tagName&&(f=h.observe(l.value,async()=>{f==null||f(),f=null,await Promise.all([u.hooks.callHook("link:prefetch",r.value).catch(()=>{}),!o.value&&_v(r.value,i).catch(()=>{})]),a.value=!0}))})}),Lo(()=>{d&&uA(d),f==null||f(),f=null})}return()=>{var f,p,v;if(!o.value)return Zt(F0("RouterLink"),{ref:b=>{l.value=b==null?void 0:b.$el},to:r.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},s.default);const c=typeof r.value=="object"?(p=(f=i.resolve(r.value))==null?void 0:f.href)!=null?p:null:r.value||null,u=n.target||null,h=n.noRel?null:aA(n.rel,t.externalRelAttribute,c?lA:"")||null,d=()=>iA(c,{replace:n.replace});return n.custom?s.default?s.default({href:c,navigate:d,route:i.resolve(c),rel:h,target:u,isExternal:o.value,isActive:!1,isExactActive:!1}):null:Zt("a",{ref:l,href:c,rel:h,target:u},(v=s.default)==null?void 0:v.call(s))}}})}const cB=hA({componentName:"NuxtLink"});function dA(){const t=Lt();if(t._observer)return t._observer;let e=null;const n=new Map,s=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(r,o),e.observe(r),()=>{n.delete(r),e.unobserve(r),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:s}}function fA(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}function Jc(t){return t!==null&&typeof t=="object"}function Xu(t,e,n=".",s){if(!Jc(e))return Xu(t,{},n,s);const i=Object.assign({},e);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=[...o,...i[r]]:Jc(o)&&Jc(i[r])?i[r]=Xu(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function vv(t){return(...e)=>e.reduce((n,s)=>Xu(n,s,"",t),{})}const pA=vv(),gA=vv((t,e,n,s)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0}),mA={};gA(mA);const Zc={},yA=ci(t=>{for(const e in Zc)t.vueApp.component(e,Zc[e]),t.vueApp.component("Lazy"+e,Zc[e])}),_A=["script","style","noscript"],vA=["base","meta","link","style","script","noscript"],wA=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function EA(t,e){const{props:n,tag:s}=t;if(wA.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];s==="meta"&&i.push("name","property","http-equiv");for(const r of i)if(typeof n[r]<"u"){const o=String(n[r]);return e&&!e(o)?!1:`${s}:${r}:${o}`}return!1}const ma=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([i,r])=>{r=String(r);const o=`attr:${i}`;if(i==="class"){if(!r)return;for(const a of r.split(" ")){const l=`${o}:${a}`;e&&e(t,l,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!i.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(i)),s.getAttribute(i)!==r&&s.setAttribute(i,r)}),_A.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function Cd(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function wv(t,e={}){var u,h;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,i=t._popSideEffectQueue();t.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([f,p])=>{i[f]=p})});const r=async d=>{const f=t.headEntries().find(v=>v._i===d._e),p={renderId:d._d||Cd(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:f,staleSideEffects:i};return await t.hooks.callHook("dom:beforeRenderTag",p),p},o=[],a={body:[],head:[]},l=(d,f,p)=>{f=`${d.renderId}:${f}`,d.entry&&(d.entry._sde[f]=p),delete i[f]},c=d=>{t._elMap[d.renderId]=d.$el,o.push(d),l(d,"el",()=>{var f;(f=d.$el)==null||f.remove(),delete t._elMap[d.renderId]})};for(const d of await t.resolveTags()){const f=await r(d);if(!f.shouldRender)continue;const{tag:p}=f;if(p.tag==="title"){s.title=p.children||"",o.push(f);continue}if(p.tag==="htmlAttrs"||p.tag==="bodyAttrs"){f.$el=s[p.tag==="htmlAttrs"?"documentElement":"body"],ma(f,l),o.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&p._hash&&(f.$el=s.querySelector(`${(u=p.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${p.tag}[data-h-${p._hash}]`)),f.$el){f.tag._d&&ma(f),c(f);continue}f.$el=s.createElement(p.tag),ma(f),a[(h=p.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(f)}Object.entries(a).forEach(([d,f])=>{if(!!f.length){for(const p of[...s[d].children].reverse()){const v=p.tagName.toLowerCase();if(!vA.includes(v))continue;const b=EA({tag:v,props:p.getAttributeNames().reduce((g,w)=>({...g,[w]:p.getAttribute(w)}),{})}),_=f.findIndex(g=>g&&(g.tag._d===b||p.isEqualNode(g.$el)));if(_!==-1){const g=f[_];g.$el=p,ma(g),c(g),delete f[_]}}f.forEach(p=>{if(!!p.$el){switch(p.tag.tagPosition){case"bodyClose":s.body.appendChild(p.$el);break;case"bodyOpen":s.body.insertBefore(p.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(p.$el);break}c(p)}})}});for(const d of o)await t.hooks.callHook("dom:renderTag",d);Object.values(i).forEach(d=>d())}let Da=null;async function bA(t,e={}){function n(){return Da=null,wv(t,e)}const s=e.delayFn||(i=>setTimeout(i,10));return Da=Da||new Promise(i=>s(()=>i(n())))}const TA={__proto__:null,debouncedRenderDOMHead:bA,get domUpdatePromise(){return Da},hashCode:Cd,renderDOMHead:wv},CA=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],IA=["tagPosition","tagPriority","tagDuplicateStrategy"];async function SA(t,e){const n={tag:t,props:{}};return t==="title"||t==="titleTemplate"?(n.children=e instanceof Promise?await e:e,n):(n.props=await AA({...e}),["children","innerHtml","innerHTML"].forEach(s=>{typeof n.props[s]<"u"&&(n.children=n.props[s],delete n.props[s])}),Object.keys(n.props).filter(s=>IA.includes(s)).forEach(s=>{n[s]=n.props[s],delete n.props[s]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(s=>n.props.class[s])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((s,i)=>{const r={...n,props:{...n.props}};return r.props.content=s,r.key=`${n.props.name||n.props.property}:${i}`,r}):n)}async function AA(t){for(const e of Object.keys(t))t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]="":String(t[e])==="false"&&delete t[e];return t}const wg=t=>{if(typeof t.tagPriority=="number")return t.tagPriority;switch(t.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(t.tag){case"base":return-1;case"title":return 1;case"meta":return t.props.charset?-2:t.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},RA=(t,e)=>wg(t)-wg(e),kA=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function NA(t,e){const{props:n,tag:s}=t;if(kA.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];s==="meta"&&i.push("name","property","http-equiv");for(const r of i)if(typeof n[r]<"u"){const o=String(n[r]);return e&&!e(o)?!1:`${s}:${r}:${o}`}return!1}const Eg=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e!=null?e:"");function PA(t){let e=t.findIndex(s=>s.tag==="titleTemplate");const n=t.findIndex(s=>s.tag==="title");if(n!==-1&&e!==-1){const s=Eg(t[e].children,t[n].children);s!==null?t[n].children=s||t[n].children:delete t[n]}else if(e!==-1){const s=Eg(t[e].children);s!==null&&(t[e].children=s,t[e].tag="title",e=-1)}return e!==-1&&delete t[e],t.filter(Boolean)}const DA=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const s=n.key?`${n.tag}:${n.key}`:NA(n);s&&(n._d=s)},"tags:resolve":function(n){const s={};n.tags.forEach(i=>{let r=i._d||i._p;const o=s[r];if(o){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&(i.tag==="htmlAttrs"||i.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(u=>{i.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),i.props[u]=`${c[u]} ${i.props[u]}`)}),s[r].props={...c,...i.props};return}else i._e===o._e&&(r=i._d=`${r}:${i._p}`);const l=Object.keys(i.props).length;if((l===0||l===1&&typeof i.props["data-h-key"]<"u")&&!i.children){delete s[r];return}}s[r]=i}),n.tags=Object.values(s)}}}},OA=()=>({hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(i=>i._d===n))==null?void 0:s._p};for(const n of t.tags){if(!n.tagPriority||typeof n.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:i,offset:r}of s)if(n.tagPriority.startsWith(i)){const o=n.tagPriority.replace(i,""),a=e(o);typeof a<"u"&&(n._p=a+r)}}t.tags.sort((n,s)=>n._p-s._p).sort(RA)}}}),xA=()=>({hooks:{"tags:resolve":t=>{t.tags=PA(t.tags)}}}),LA=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),MA=typeof window<"u",FA=()=>({hooks:{"tag:normalise":t=>{var i,r;const{tag:e,entry:n}=t,s=typeof e.props._dynamic<"u";!Ev.includes(e.tag)||!e.key||(e._hash=Cd(JSON.stringify({tag:e.tag,key:e.key})),!(MA||((r=(i=Tv())==null?void 0:i.resolvedOptions)==null?void 0:r.document))&&(n._m==="server"||s)&&(e.props[`data-h-${e._hash}`]=""))},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),UA=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Promise.resolve().then(function(){return TA}).then(({debouncedRenderDOMHead:s})=>{s(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})})}}}),$A=()=>{const t=(e,n)=>{const s={},i={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?i[o]=a:s[o]=a});let r;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof i.onload<"u"&&(r=s.src,delete s.src),{props:s,eventHandlers:i,delayedSrc:r}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(n.props=t("ssr",n).props,n))},"dom:beforeRenderTag":function(e){const{props:n,eventHandlers:s,delayedSrc:i}=t("dom",e.tag);!Object.keys(s).length||(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=i)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([i,r])=>{const o=`${e.tag._d||e.tag._p}:${i}`,a=i.slice(2).toLowerCase(),l=`data-h-${a}`;if(delete e.staleSideEffects[o],n.hasAttribute(l))return;const c=r;n.setAttribute(l,""),s.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{s.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}};function BA(t){return Array.isArray(t)?t:[t]}const Ev=["base","meta","link","style","script","noscript"];let bv;const VA=t=>bv=t,Tv=()=>bv,HA=10;async function jA(t){const e=[];return Object.entries(t.resolvedInput||t.input).filter(([n,s])=>typeof s<"u"&&CA.includes(n)).forEach(([n,s])=>{const i=BA(s);e.push(...i.map(r=>SA(n,r)).flat())}),(await Promise.all(e)).flat().map((n,s)=>(n._e=t._i,n._p=(t._i<<HA)+s,n))}const qA=()=>[DA(),OA(),xA(),FA(),$A(),LA()],WA=(t={})=>[UA({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function KA(t={}){const e=zA({...t,plugins:[...WA(t),...(t==null?void 0:t.plugins)||[]]});return VA(e),e}function zA(t={}){let e=[],n={},s=0;const i=fv();t!=null&&t.hooks&&i.addHooks(t.hooks),t.plugins=[...qA(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&i.addHooks(a.hooks));const r=()=>i.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return i},push(a,l){const c={_i:s++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),e.push(c),r(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},r(),!1))},patch(u){e=e.map(h=>(h._i===c._i&&(c.input=h.input=u,r()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await i.callHook("entries:resolve",a);for(const l of a.entries)for(const c of await jA(l)){const u={tag:c,entry:l};await i.callHook("tag:normalise",u),a.tags.push(u.tag)}return await i.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return o.hooks.callHook("init",o),o}function GA(t){return typeof t=="function"?t():qt(t)}function Qa(t,e=""){if(t instanceof Promise)return t;const n=GA(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(s=>Qa(s,e));if(typeof n=="object"){let s=!1;const i=Object.fromEntries(Object.entries(n).map(([r,o])=>r==="titleTemplate"||r.startsWith("on")?[r,qt(o)]:((typeof o=="function"||We(o))&&(s=!0),[r,Qa(o,r)])));return s&&Ev.includes(String(e))&&(i._dynamic=!0),i}return n}const QA=Y_.startsWith("3"),YA=typeof window<"u",Cv="usehead";function Id(){return Wn()&&Jt(Cv)||Tv()}function XA(t={}){const e=KA({...t,domDelayFn:s=>setTimeout(()=>As(()=>s()),10),plugins:[JA(),...(t==null?void 0:t.plugins)||[]]}),n={install(s){QA&&(s.config.globalProperties.$unhead=e,s.provide(Cv,e))}};return e.install=n.install,e}const JA=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Qa(e.input)}}});function ZA(t,e={}){const n=Id();if(!Wn())return n.push(t,e);const i=Pn({});T0(()=>{i.value=Qa(t)});const r=n.push(i.value,e);return qs(i,o=>r.patch(o)),Lo(()=>{r.dispose()}),r}function eR(t,e={}){return Id().push(t,e)}function Iv(t,e={}){var i;const n=Id(),s=YA||!!((i=n.resolvedOptions)!=null&&i.document);if(!(e.mode==="server"&&s||e.mode==="client"&&!s))return s?ZA(t,e):eR(t,e)}const tR=["script","style","noscript"],nR=["base","meta","link","style","script","noscript"],sR=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function iR(t,e){const{props:n,tag:s}=t;if(sR.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];s==="meta"&&i.push("name","property","http-equiv");for(const r of i)if(typeof n[r]<"u"){const o=String(n[r]);return e&&!e(o)?!1:`${s}:${r}:${o}`}return!1}const ya=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([i,r])=>{r=String(r);const o=`attr:${i}`;if(i==="class"){if(!r)return;for(const a of r.split(" ")){const l=`${o}:${a}`;e&&e(t,l,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!i.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(i)),s.getAttribute(i)!==r&&s.setAttribute(i,r)}),tR.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function rR(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Sv(t,e={}){var u,h;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,i=t._popSideEffectQueue();t.headEntries().map(d=>d._sde).forEach(d=>{Object.entries(d).forEach(([f,p])=>{i[f]=p})});const r=async d=>{const f=t.headEntries().find(v=>v._i===d._e),p={renderId:d._d||rR(JSON.stringify({...d,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:d,entry:f,staleSideEffects:i};return await t.hooks.callHook("dom:beforeRenderTag",p),p},o=[],a={body:[],head:[]},l=(d,f,p)=>{f=`${d.renderId}:${f}`,d.entry&&(d.entry._sde[f]=p),delete i[f]},c=d=>{t._elMap[d.renderId]=d.$el,o.push(d),l(d,"el",()=>{var f;(f=d.$el)==null||f.remove(),delete t._elMap[d.renderId]})};for(const d of await t.resolveTags()){const f=await r(d);if(!f.shouldRender)continue;const{tag:p}=f;if(p.tag==="title"){s.title=p.children||"",o.push(f);continue}if(p.tag==="htmlAttrs"||p.tag==="bodyAttrs"){f.$el=s[p.tag==="htmlAttrs"?"documentElement":"body"],ya(f,l),o.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&p._hash&&(f.$el=s.querySelector(`${(u=p.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${p.tag}[data-h-${p._hash}]`)),f.$el){f.tag._d&&ya(f),c(f);continue}f.$el=s.createElement(p.tag),ya(f),a[(h=p.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(f)}Object.entries(a).forEach(([d,f])=>{if(!!f.length){for(const p of[...s[d].children].reverse()){const v=p.tagName.toLowerCase();if(!nR.includes(v))continue;const b=iR({tag:v,props:p.getAttributeNames().reduce((g,w)=>({...g,[w]:p.getAttribute(w)}),{})}),_=f.findIndex(g=>g&&(g.tag._d===b||p.isEqualNode(g.$el)));if(_!==-1){const g=f[_];g.$el=p,ya(g),c(g),delete f[_]}}f.forEach(p=>{if(!!p.$el){switch(p.tag.tagPosition){case"bodyClose":s.body.appendChild(p.$el);break;case"bodyOpen":s.body.insertBefore(p.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(p.$el);break}c(p)}})}});for(const d of o)await t.hooks.callHook("dom:renderTag",d);Object.values(i).forEach(d=>d())}let eu=null;async function oR(t,e={}){function n(){return eu=null,Sv(t,e)}const s=e.delayFn||(i=>setTimeout(i,10));return eu=eu||new Promise(i=>s(()=>i(n())))}function aR(t){const e=XA(),n={unhead:e,install(s){s.config.globalProperties&&(s.config.globalProperties.$head=e),s.provide("usehead",e)},resolveTags(){return e.resolveTags()},headEntries(){return e.headEntries()},headTags(){return e.resolveTags()},push(s,i){return e.push(s,i)},addEntry(s,i){return e.push(s,i)},addHeadObjs(s,i){return e.push(s,i)},addReactiveEntry(s,i){const r=Iv(s,i);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?Sv(e,{document:s}):oR(e,{delayFn:r=>setTimeout(()=>r(),50),document:s})},internalHooks:e.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return e.addHeadObjs=n.addHeadObjs,e.updateDOM=n.updateDOM,e.hooks.hook("dom:beforeRender",s=>{for(const i of n.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),t&&n.addHeadObjs(t),n}const lR={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Ju=!1,cR=!1,uR="__nuxt",hR=ci(t=>{const e=aR();e.push(lR),t.vueApp.use(e);{let n=!0;const s=()=>{n=!1,e.internalHooks.callHook("entries:updated",e.unhead)};e.internalHooks.hook("dom:beforeRender",i=>{i.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",s),t.hooks.hook("app:mounted",s)}t._useHead=Iv});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yi=typeof window<"u";function dR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function tu(t,e){const n={};for(const s in e){const i=e[s];n[s]=ln(i)?i.map(t):t(i)}return n}const jr=()=>{},ln=Array.isArray,fR=/\/$/,pR=t=>t.replace(fR,"");function nu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_R(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function gR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&zi(e.matched[s],n.matched[i])&&Av(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Av(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yR(t[n],e[n]))return!1;return!0}function yR(t,e){return ln(t)?Tg(t,e):ln(e)?Tg(e,t):t===e}function Tg(t,e){return ln(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _R(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ao;(function(t){t.pop="pop",t.push="push"})(ao||(ao={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function vR(t){if(!t)if(yi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pR(t)}const wR=/^[^#]+#/;function ER(t,e){return t.replace(wR,"#")+e}function bR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ql=()=>({left:window.pageXOffset,top:window.pageYOffset});function TR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cg(t,e){return(history.state?history.state.position-e:-1)+t}const Zu=new Map;function CR(t,e){Zu.set(t,e)}function IR(t){const e=Zu.get(t);return Zu.delete(t),e}let SR=()=>location.protocol+"//"+location.host;function Rv(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),bg(l,"")}return bg(n,t)+s+i}function AR(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=Rv(t,location),p=n.value,v=e.value;let b=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}b=v?d.position-v.position:0}else s(f);i.forEach(_=>{_(n.value,p,{delta:b,type:ao.pop,direction:b?b>0?qr.forward:qr.back:qr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return r.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:Ql()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ig(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ql():null}}function RR(t){const{history:e,location:n}=window,s={value:Rv(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:SR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Oe({},e.state,Ig(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Oe({},i.value,e.state,{forward:l,scroll:Ql()});r(u.current,u,!0);const h=Oe({},Ig(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function kv(t){t=vR(t);const e=RR(t),n=AR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:ER.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function kR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),kv(t)}function NR(t){return typeof t=="string"||t&&typeof t=="object"}function Nv(t){return typeof t=="string"||typeof t=="symbol"}const es={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pv=Symbol("");var Sg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sg||(Sg={}));function Gi(t,e){return Oe(new Error,{type:t,[Pv]:!0},e)}function bn(t,e){return t instanceof Error&&Pv in t&&(e==null||!!(t.type&e))}const Ag="[^/]+?",PR={sensitive:!1,strict:!1,start:!0,end:!0},DR=/[.+*?^${}()[\]/\\]/g;function OR(t,e){const n=Oe({},PR,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(DR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:v,optional:b,regexp:_}=d;r.push({name:p,repeatable:v,optional:b});const g=_||Ag;if(g!==Ag){f+=10;try{new RegExp(`(${g})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+C.message)}}let w=v?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(w=b&&c.length<2?`(?:/${w})`:"/"+w),b&&(w+="?"),i+=w,f+=20,b&&(f+=-8),v&&(f+=-20),g===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=r[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:v,optional:b}=f,_=p in c?c[p]:"";if(ln(_)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=ln(_)?_.join("/"):_;if(!g)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function xR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function LR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=xR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Rg(s))return 1;if(Rg(i))return-1}return i.length-s.length}function Rg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MR={type:0,value:""},FR=/[a-zA-Z0-9_]/;function UR(t){if(!t)return[[]];if(t==="/")return[[MR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:FR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function $R(t,e,n){const s=OR(UR(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BR(t,e){const n=[],s=new Map;e=Pg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,p=VR(u);p.aliasOf=d&&d.record;const v=Pg(e,u),b=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of w)b.push(Oe({},p,{components:d?d.record.components:p.components,path:C,aliasOf:d?d.record:p}))}let _,g;for(const w of b){const{path:C}=w;if(h&&C[0]!=="/"){const P=h.record.path,B=P[P.length-1]==="/"?"":"/";w.path=h.record.path+(C&&B+C)}if(_=$R(w,h,v),d?d.alias.push(_):(g=g||_,g!==_&&g.alias.push(_),f&&u.name&&!Ng(_)&&o(u.name)),p.children){const P=p.children;for(let B=0;B<P.length;B++)r(P[B],_,d&&d.children[B])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return g?()=>{o(g)}:jr}function o(u){if(Nv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&LR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Dv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ng(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},p,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Gi(1,{location:u});v=d.record.name,f=Oe(kg(h.params,d.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&kg(u.params,d.keys.map(g=>g.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(g=>g.re.test(p)),d&&(f=d.parse(p),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(g=>g.re.test(h.path)),!d)throw Gi(1,{location:u,currentLocation:h});v=d.record.name,f=Oe({},h.params,u.params),p=d.stringify(f)}const b=[];let _=d;for(;_;)b.unshift(_.record),_=_.parent;return{name:v,path:p,params:f,matched:b,meta:jR(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function kg(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function VR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:HR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function HR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ng(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jR(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Pg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Dv(t,e){return e.children.some(n=>n===t||Dv(t,n))}const Ov=/#/g,qR=/&/g,WR=/\//g,KR=/=/g,zR=/\?/g,xv=/\+/g,GR=/%5B/g,QR=/%5D/g,Lv=/%5E/g,YR=/%60/g,Mv=/%7B/g,XR=/%7C/g,Fv=/%7D/g,JR=/%20/g;function Sd(t){return encodeURI(""+t).replace(XR,"|").replace(GR,"[").replace(QR,"]")}function ZR(t){return Sd(t).replace(Mv,"{").replace(Fv,"}").replace(Lv,"^")}function eh(t){return Sd(t).replace(xv,"%2B").replace(JR,"+").replace(Ov,"%23").replace(qR,"%26").replace(YR,"`").replace(Mv,"{").replace(Fv,"}").replace(Lv,"^")}function ek(t){return eh(t).replace(KR,"%3D")}function tk(t){return Sd(t).replace(Ov,"%23").replace(zR,"%3F")}function nk(t){return t==null?"":tk(t).replace(WR,"%2F")}function Ya(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(xv," "),o=r.indexOf("="),a=Ya(o<0?r:r.slice(0,o)),l=o<0?null:Ya(r.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Dg(t){let e="";for(let n in t){const s=t[n];if(n=ek(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(s)?s.map(r=>r&&eh(r)):[s&&eh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ik(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ln(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const rk=Symbol(""),Og=Symbol(""),Ad=Symbol(""),Uv=Symbol(""),th=Symbol("");function Ir(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function os(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Gi(4,{from:n,to:e})):h instanceof Error?a(h):NR(h)?a(Gi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function su(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ok(a)){const c=(a.__vccOpts||a)[e];c&&i.push(os(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=dR(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&os(d,n,s,r,o)()}))}}return i}function ok(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xg(t){const e=Jt(Ad),n=Jt(Uv),s=mt(()=>e.resolve(qt(t.to))),i=mt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zi.bind(null,u));if(d>-1)return d;const f=Lg(l[c-2]);return c>1&&Lg(u)===f&&h[h.length-1].path!==f?h.findIndex(zi.bind(null,l[c-2])):d}),r=mt(()=>i.value>-1&&uk(n.params,s.value.params)),o=mt(()=>i.value>-1&&i.value===n.matched.length-1&&Av(n.params,s.value.params));function a(l={}){return ck(l)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(jr):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ak=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xg,setup(t,{slots:e}){const n=an(xg(t)),{options:s}=Jt(Ad),i=mt(()=>({[Mg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Zt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lk=ak;function ck(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uk(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ln(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Lg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mg=(t,e,n)=>t!=null?t:e!=null?e:n,hk=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Jt(th),i=mt(()=>t.route||s.value),r=Jt(Og,0),o=mt(()=>{let c=qt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=mt(()=>i.value.matched[o.value]);Ai(Og,mt(()=>o.value+1)),Ai(rk,a),Ai(th,i);const l=Pn();return qs(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!zi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Fg(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=Zt(d,Oe({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fg(n.default,{Component:b,route:c})||b}}});function Fg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $v=hk;function dk(t){const e=BR(t.routes,t),n=t.parseQuery||sk,s=t.stringifyQuery||Dg,i=t.history,r=Ir(),o=Ir(),a=Ir(),l=Mu(es);let c=es;yi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tu.bind(null,T=>""+T),h=tu.bind(null,nk),d=tu.bind(null,Ya);function f(T,F){let D,G;return Nv(T)?(D=e.getRecordMatcher(T),G=F):G=T,e.addRoute(G,D)}function p(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function _(T,F){if(F=Oe({},F||l.value),typeof T=="string"){const m=nu(n,T,F.path),y=e.resolve({path:m.path},F),E=i.createHref(m.fullPath);return Oe(m,y,{params:d(y.params),hash:Ya(m.hash),redirectedFrom:void 0,href:E})}let D;if("path"in T)D=Oe({},T,{path:nu(n,T.path,F.path).path});else{const m=Oe({},T.params);for(const y in m)m[y]==null&&delete m[y];D=Oe({},T,{params:h(T.params)}),F.params=h(F.params)}const G=e.resolve(D,F),he=T.hash||"";G.params=u(d(G.params));const ve=gR(s,Oe({},T,{hash:ZR(he),path:G.path})),ne=i.createHref(ve);return Oe({fullPath:ve,hash:he,query:s===Dg?ik(T.query):T.query||{}},G,{redirectedFrom:void 0,href:ne})}function g(T){return typeof T=="string"?nu(n,T,l.value.path):Oe({},T)}function w(T,F){if(c!==T)return Gi(8,{from:F,to:T})}function C(T){return R(T)}function P(T){return C(Oe(g(T),{replace:!0}))}function B(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let G=typeof D=="function"?D(T):D;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=g(G):{path:G},G.params={}),Oe({query:T.query,hash:T.hash,params:"path"in G?{}:T.params},G)}}function R(T,F){const D=c=_(T),G=l.value,he=T.state,ve=T.force,ne=T.replace===!0,m=B(D);if(m)return R(Oe(g(m),{state:typeof m=="object"?Oe({},he,m.state):he,force:ve,replace:ne}),F||D);const y=D;y.redirectedFrom=F;let E;return!ve&&mR(s,G,D)&&(E=Gi(16,{to:y,from:G}),cn(G,G,!0,!1)),(E?Promise.resolve(E):L(y,G)).catch(S=>bn(S)?bn(S,2)?S:ut(S):De(S,y,G)).then(S=>{if(S){if(bn(S,2))return R(Oe({replace:ne},g(S.to),{state:typeof S.to=="object"?Oe({},he,S.to.state):he,force:ve}),F||y)}else S=J(y,G,!0,ne,he);return q(y,G,S),S})}function I(T,F){const D=w(T,F);return D?Promise.reject(D):Promise.resolve()}function L(T,F){let D;const[G,he,ve]=fk(T,F);D=su(G.reverse(),"beforeRouteLeave",T,F);for(const m of G)m.leaveGuards.forEach(y=>{D.push(os(y,T,F))});const ne=I.bind(null,T,F);return D.push(ne),fi(D).then(()=>{D=[];for(const m of r.list())D.push(os(m,T,F));return D.push(ne),fi(D)}).then(()=>{D=su(he,"beforeRouteUpdate",T,F);for(const m of he)m.updateGuards.forEach(y=>{D.push(os(y,T,F))});return D.push(ne),fi(D)}).then(()=>{D=[];for(const m of T.matched)if(m.beforeEnter&&!F.matched.includes(m))if(ln(m.beforeEnter))for(const y of m.beforeEnter)D.push(os(y,T,F));else D.push(os(m.beforeEnter,T,F));return D.push(ne),fi(D)}).then(()=>(T.matched.forEach(m=>m.enterCallbacks={}),D=su(ve,"beforeRouteEnter",T,F),D.push(ne),fi(D))).then(()=>{D=[];for(const m of o.list())D.push(os(m,T,F));return D.push(ne),fi(D)}).catch(m=>bn(m,8)?m:Promise.reject(m))}function q(T,F,D){for(const G of a.list())G(T,F,D)}function J(T,F,D,G,he){const ve=w(T,F);if(ve)return ve;const ne=F===es,m=yi?history.state:{};D&&(G||ne?i.replace(T.fullPath,Oe({scroll:ne&&m&&m.scroll},he)):i.push(T.fullPath,he)),l.value=T,cn(T,F,D,ne),ut()}let H;function ie(){H||(H=i.listen((T,F,D)=>{if(!Ee.listening)return;const G=_(T),he=B(G);if(he){R(Oe(he,{replace:!0}),G).catch(jr);return}c=G;const ve=l.value;yi&&CR(Cg(ve.fullPath,D.delta),Ql()),L(G,ve).catch(ne=>bn(ne,12)?ne:bn(ne,2)?(R(ne.to,G).then(m=>{bn(m,20)&&!D.delta&&D.type===ao.pop&&i.go(-1,!1)}).catch(jr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),De(ne,G,ve))).then(ne=>{ne=ne||J(G,ve,!1),ne&&(D.delta&&!bn(ne,8)?i.go(-D.delta,!1):D.type===ao.pop&&bn(ne,20)&&i.go(-1,!1)),q(G,ve,ne)}).catch(jr)}))}let W=Ir(),ke=Ir(),me;function De(T,F,D){ut(T);const G=ke.list();return G.length?G.forEach(he=>he(T,F,D)):console.error(T),Promise.reject(T)}function we(){return me&&l.value!==es?Promise.resolve():new Promise((T,F)=>{W.add([T,F])})}function ut(T){return me||(me=!T,ie(),W.list().forEach(([F,D])=>T?D(T):F()),W.reset()),T}function cn(T,F,D,G){const{scrollBehavior:he}=t;if(!yi||!he)return Promise.resolve();const ve=!D&&IR(Cg(T.fullPath,0))||(G||!D)&&history.state&&history.state.scroll||null;return As().then(()=>he(T,F,ve)).then(ne=>ne&&TR(ne)).catch(ne=>De(ne,T,F))}const Y=T=>i.go(T);let A;const X=new Set,Ee={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:b,getRoutes:v,resolve:_,options:t,push:C,replace:P,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:we,install(T){const F=this;T.component("RouterLink",lk),T.component("RouterView",$v),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),yi&&!A&&l.value===es&&(A=!0,C(i.location).catch(he=>{}));const D={};for(const he in es)D[he]=mt(()=>l.value[he]);T.provide(Ad,F),T.provide(Uv,an(D)),T.provide(th,l);const G=T.unmount;X.add(T),T.unmount=function(){X.delete(T),X.size<1&&(c=es,H&&H(),H=null,l.value=es,A=!1,me=!1),G()}}};return Ee}function fi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fk(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>zi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>zi(c,l))||i.push(l))}return[n,s,i]}const Ug=[];var pk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bv={exports:{}};/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */(function(t,e){(function(n,s){t.exports=s()})(pk,function(){function n(Y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(A){return typeof A}:n=function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},n(Y)}function s(){return s=Object.assign||function(Y){for(var A=1;A<arguments.length;A++){var X=arguments[A];for(var Ee in X)Object.prototype.hasOwnProperty.call(X,Ee)&&(Y[Ee]=X[Ee])}return Y},s.apply(this,arguments)}var i=4,r=.001,o=1e-7,a=10,l=11,c=1/(l-1),u=typeof Float32Array=="function";function h(Y,A){return 1-3*A+3*Y}function d(Y,A){return 3*A-6*Y}function f(Y){return 3*Y}function p(Y,A,X){return((h(A,X)*Y+d(A,X))*Y+f(A))*Y}function v(Y,A,X){return 3*h(A,X)*Y*Y+2*d(A,X)*Y+f(A)}function b(Y,A,X,Ee,T){var F,D,G=0;do D=A+(X-A)/2,F=p(D,Ee,T)-Y,F>0?X=D:A=D;while(Math.abs(F)>o&&++G<a);return D}function _(Y,A,X,Ee){for(var T=0;T<i;++T){var F=v(A,X,Ee);if(F===0)return A;var D=p(A,X,Ee)-Y;A-=D/F}return A}function g(Y){return Y}var w=function(A,X,Ee,T){if(!(0<=A&&A<=1&&0<=Ee&&Ee<=1))throw new Error("bezier x values must be in [0, 1] range");if(A===X&&Ee===T)return g;for(var F=u?new Float32Array(l):new Array(l),D=0;D<l;++D)F[D]=p(D*c,A,Ee);function G(he){for(var ve=0,ne=1,m=l-1;ne!==m&&F[ne]<=he;++ne)ve+=c;--ne;var y=(he-F[ne])/(F[ne+1]-F[ne]),E=ve+y*c,S=v(E,A,Ee);return S>=r?_(he,E,A,Ee):S===0?E:b(he,ve,ve+c,A,Ee)}return function(ve){return ve===0?0:ve===1?1:p(G(ve),X,T)}},C={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},P=!1;try{var B=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,B)}catch{}var R={$:function(A){return typeof A!="string"?A:document.querySelector(A)},on:function(A,X,Ee){var T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{passive:!1};X instanceof Array||(X=[X]);for(var F=0;F<X.length;F++)A.addEventListener(X[F],Ee,P?T:!1)},off:function(A,X,Ee){X instanceof Array||(X=[X]);for(var T=0;T<X.length;T++)A.removeEventListener(X[T],Ee)},cumulativeOffset:function(A){var X=0,Ee=0;do X+=A.offsetTop||0,Ee+=A.offsetLeft||0,A=A.offsetParent;while(A);return{top:X,left:Ee}}},I=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],L={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function q(Y){L=s({},L,Y)}var J=function(){var A,X,Ee,T,F,D,G,he,ve,ne,m,y,E,S,k,U,j,M,V,N,Z,z,ee,ae=function(ht){!he||(ee=ht,N=!0)},de,Ne,Se,Me;function jt(Ze){var ht=Ze.scrollTop;return Ze.tagName.toLowerCase()==="body"&&(ht=ht||document.documentElement.scrollTop),ht}function Qn(Ze){var ht=Ze.scrollLeft;return Ze.tagName.toLowerCase()==="body"&&(ht=ht||document.documentElement.scrollLeft),ht}function br(){Z=R.cumulativeOffset(X),z=R.cumulativeOffset(A),y&&(k=z.left-Z.left+D,M=k-S),E&&(j=z.top-Z.top+D,V=j-U)}function Yn(Ze){if(N)return Tr();Ne||(Ne=Ze),F||br(),Se=Ze-Ne,Me=Math.min(Se/Ee,1),Me=de(Me),wt(X,U+V*Me,S+M*Me),Se<Ee?window.requestAnimationFrame(Yn):Tr()}function Tr(){N||wt(X,j,k),Ne=!1,R.off(X,I,ae),N&&m&&m(ee,A),!N&&ne&&ne(A)}function wt(Ze,ht,He){E&&(Ze.scrollTop=ht),y&&(Ze.scrollLeft=He),Ze.tagName.toLowerCase()==="body"&&(E&&(document.documentElement.scrollTop=ht),y&&(document.documentElement.scrollLeft=He))}function zt(Ze,ht){var He=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n(ht)==="object"?He=ht:typeof ht=="number"&&(He.duration=ht),A=R.$(Ze),!A)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+Ze);if(X=R.$(He.container||L.container),Ee=He.hasOwnProperty("duration")?He.duration:L.duration,F=He.hasOwnProperty("lazy")?He.lazy:L.lazy,T=He.easing||L.easing,D=He.hasOwnProperty("offset")?He.offset:L.offset,G=He.hasOwnProperty("force")?He.force!==!1:L.force,he=He.hasOwnProperty("cancelable")?He.cancelable!==!1:L.cancelable,ve=He.onStart||L.onStart,ne=He.onDone||L.onDone,m=He.onCancel||L.onCancel,y=He.x===void 0?L.x:He.x,E=He.y===void 0?L.y:He.y,typeof D=="function"&&(D=D(A,X)),S=Qn(X),U=jt(X),br(),N=!1,!G){var dC=X.tagName.toLowerCase()==="body"?document.documentElement.clientHeight||window.innerHeight:X.offsetHeight,Dp=U,fC=Dp+dC,Op=j-D,pC=Op+A.offsetHeight;if(Op>=Dp&&pC<=fC){ne&&ne(A);return}}if(ve&&ve(A),!V&&!M){ne&&ne(A);return}return typeof T=="string"&&(T=C[T]||C.ease),de=w.apply(w,T),R.on(X,I,ae,{passive:!0}),window.requestAnimationFrame(Yn),function(){ee=null,N=!0}}return zt},H=J(),ie=[];function W(Y){for(var A=0;A<ie.length;++A)if(ie[A].el===Y)return ie.splice(A,1),!0;return!1}function ke(Y){for(var A=0;A<ie.length;++A)if(ie[A].el===Y)return ie[A]}function me(Y){var A=ke(Y);return A||(ie.push(A={el:Y,binding:{}}),A)}function De(Y){var A=me(this).binding;if(!!A.value){if(Y.preventDefault(),typeof A.value=="string")return H(A.value);H(A.value.el||A.value.element,A.value)}}var we={bind:function(A,X){me(A).binding=X,R.on(A,"click",De)},unbind:function(A){W(A),R.off(A,"click",De)},update:function(A,X){me(A).binding=X}},ut={bind:we.bind,unbind:we.unbind,update:we.update,beforeMount:we.bind,unmounted:we.unbind,updated:we.update,scrollTo:H,bindings:ie},cn=function(A,X){X&&q(X),A.directive("scroll-to",ut);var Ee=A.config.globalProperties||A.prototype;Ee.$scrollTo=ut.scrollTo};return typeof window<"u"&&window.Vue&&(window.VueScrollTo=ut,window.VueScrollTo.setDefaults=q,window.VueScrollTo.scroller=J,window.Vue.use&&window.Vue.use(cn)),ut.install=cn,ut})})(Bv);const Vv=Bv.exports,gk=[{path:"/404",name:"NotFound",component:()=>Pa(()=>import("./NotFound.1d2c6e80.js"),["./NotFound.1d2c6e80.js","./NotFound.e65cb5c7.css"],import.meta.url)},{path:"/live/:previewId/:pageId*",name:"Live",component:()=>Pa(()=>import("./_previewId.ffbd375e.js"),["./_previewId.ffbd375e.js","./index.head.composable.fce1f87c.js","./composables.3d6553f4.js","./index.head.1c01c68b.css","./_previewId.570b4e3c.css"],import.meta.url)},{path:"/templates/:templateId/:pageId*",name:"Templates",component:()=>Pa(()=>import("./_templateId.68255cd6.js"),["./_templateId.68255cd6.js","./index.head.composable.fce1f87c.js","./composables.3d6553f4.js","./index.head.1c01c68b.css","./_templateId.f8d971ea.css"],import.meta.url)}],mk={scrollBehavior(t,e,n){const s=Lt();if(e.path===t.path&&e.hash!==t.hash){const r=t.hash||"body";return Vv.scrollTo(r,500,{easing:"ease-in-out"}),!1}let i=!1;return t.matched.length<2&&(i={left:0,top:0}),n&&(i=n),new Promise(r=>{s.hooks.hookOnce("page:finish",async()=>{await As(),t.hash&&document.querySelector(t.hash)&&(i={el:t.hash}),r(i)})})},routes(t){return gk}},yk={scrollBehavior(t,e,n){const s=Lt();let i=n||void 0;if(!i&&e&&t&&t.meta.scrollToTop!==!1&&_k(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:$g(t.hash)}}const r=a=>{var l;return!!((l=a.meta.pageTransition)!=null?l:Ju)},o=r(e)&&r(t)?"page:transition:finish":"page:finish";return new Promise(a=>{s.hooks.hookOnce(o,async()=>{await As(),t.hash&&(i={el:t.hash,top:$g(t.hash)}),a(i)})})}};function $g(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function _k(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const vk={},Tn={...vk,...yk,...mk},wk=nA(async t=>{var i;let e,n;if(!((i=t.meta)!=null&&i.validate))return;const s=([e,n]=pv(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);return typeof s=="boolean"?s:yv(s)}),Ek=[wk],iu={};function bk(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){const a=i.includes(t.slice(r))?t.slice(r).length:1;let l=i.slice(a);return l[0]!=="/"&&(l="/"+l),pg(l,"")}return pg(n,t)+s+i}const Tk=ci(async t=>{var p,v,b,_;let e,n,s=mv().app.baseURL;Tn.hashMode&&!s.includes("#")&&(s+="#");const i=(v=(p=Tn.history)==null?void 0:p.call(Tn,s))!=null?v:Tn.hashMode?kR(s):kv(s),r=(_=(b=Tn.routes)==null?void 0:b.call(Tn,Ug))!=null?_:Ug,o=bk(s,window.location),a=dk({...Tn,history:i,routes:r});t.vueApp.use(a);const l=Mu(a.currentRoute.value);a.afterEach((g,w)=>{l.value=w}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=Mu(a.resolve(o)),u=()=>{c.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((g,w)=>{var C,P,B,R;((P=(C=g.matched[0])==null?void 0:C.components)==null?void 0:P.default)===((R=(B=w.matched[0])==null?void 0:B.components)==null?void 0:R.default)&&u()});const h={};for(const g in c.value)h[g]=mt(()=>c.value[g]);t._route=an(h),t._middleware=t._middleware||{global:[],named:{}};const d=Gl();try{[e,n]=pv(()=>a.isReady()),await e,n()}catch(g){rs(t,Or,[g])}const f=eA("_layout");return a.beforeEach(async(g,w)=>{var P,B;g.meta=an(g.meta),t.isHydrating&&(g.meta.layout=(P=f.value)!=null?P:g.meta.layout),t._processingMiddleware=!0;const C=new Set([...Ek,...t._middleware.global]);for(const R of g.matched){const I=R.meta.middleware;if(!!I)if(Array.isArray(I))for(const L of I)C.add(L);else C.add(I)}for(const R of C){const I=typeof R=="string"?t._middleware.named[R]||await((B=iu[R])==null?void 0:B.call(iu).then(q=>q.default||q)):R;if(!I)throw new Error(`Unknown route middleware: '${R}'.`);const L=await rs(t,I,[g,w]);if(!t.payload.serverRendered&&t.isHydrating&&(L===!1||L instanceof Error)){const q=L||Yu({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await rs(t,Or,[q]),!1}if(L||L===!1)return L}}),a.afterEach(async g=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await rs(t,JS),g.matched.length===0&&rs(t,Or,[Yu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${g.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(g){rs(t,Or,[g])}}),{provide:{router:a}}}),Ck=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Hv;const Mo=t=>Hv=t,jv=Symbol();function nh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wr||(Wr={}));function Ik(){const t=e_(!0),e=t.run(()=>Pn({}));let n=[],s=[];const i=Bi({install(r){Mo(i),i._a=r,r.provide(jv,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Ck?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const qv=()=>{};function Bg(t,e,n,s=qv){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Wn()&&fd(i),i}function pi(t,...e){t.slice().forEach(n=>{n(...e)})}function sh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];nh(i)&&nh(s)&&t.hasOwnProperty(n)&&!We(s)&&!Nn(s)?t[n]=sh(i,s):t[n]=s}return t}const Sk=Symbol();function Ak(t){return!nh(t)||!t.hasOwnProperty(Sk)}const{assign:as}=Object;function Rk(t){return!!(We(t)&&t.effect)}function kk(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=r0(n.state.value[t]);return as(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Bi(mt(()=>{Mo(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Wv(t,c,e,n,s,!0),l.$reset=function(){const h=i?i():{};this.$patch(d=>{as(d,h)})},l}function Wv(t,e,n={},s,i,r){let o;const a=as({actions:{}},n),l={deep:!0};let c,u,h=Bi([]),d=Bi([]),f;const p=s.state.value[t];!r&&!p&&(s.state.value[t]={}),Pn({});let v;function b(R){let I;c=u=!1,typeof R=="function"?(R(s.state.value[t]),I={type:Wr.patchFunction,storeId:t,events:f}):(sh(s.state.value[t],R),I={type:Wr.patchObject,payload:R,storeId:t,events:f});const L=v=Symbol();As().then(()=>{v===L&&(c=!0)}),u=!0,pi(h,I,s.state.value[t])}const _=qv;function g(){o.stop(),h=[],d=[],s._s.delete(t)}function w(R,I){return function(){Mo(s);const L=Array.from(arguments),q=[],J=[];function H(ke){q.push(ke)}function ie(ke){J.push(ke)}pi(d,{args:L,name:R,store:P,after:H,onError:ie});let W;try{W=I.apply(this&&this.$id===t?this:P,L)}catch(ke){throw pi(J,ke),ke}return W instanceof Promise?W.then(ke=>(pi(q,ke),ke)).catch(ke=>(pi(J,ke),Promise.reject(ke))):(pi(q,W),W)}}const C={_p:s,$id:t,$onAction:Bg.bind(null,d),$patch:b,$reset:_,$subscribe(R,I={}){const L=Bg(h,R,I.detached,()=>q()),q=o.run(()=>qs(()=>s.state.value[t],J=>{(I.flush==="sync"?u:c)&&R({storeId:t,type:Wr.direct,events:f},J)},as({},l,I)));return L},$dispose:g},P=an(C);s._s.set(t,P);const B=s._e.run(()=>(o=e_(),o.run(()=>e())));for(const R in B){const I=B[R];if(We(I)&&!Rk(I)||Nn(I))r||(p&&Ak(I)&&(We(I)?I.value=p[R]:sh(I,p[R])),s.state.value[t][R]=I);else if(typeof I=="function"){const L=w(R,I);B[R]=L,a.actions[R]=I}}return as(P,B),as(Te(P),B),Object.defineProperty(P,"$state",{get:()=>s.state.value[t],set:R=>{b(I=>{as(I,R)})}}),s._p.forEach(R=>{as(P,o.run(()=>R({store:P,app:s._a,pinia:s,options:a})))}),p&&r&&n.hydrate&&n.hydrate(P.$state,p),c=!0,u=!0,P}function uB(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Wn();return a=a||c&&Jt(jv),a&&Mo(a),a=Hv,a._s.has(s)||(r?Wv(s,e,i,a):kk(s,i,a)),a._s.get(s)}return o.$id=s,o}function hB(t){{t=Te(t);const e={};for(const n in t){const s=t[n];(We(s)||Nn(s))&&(e[n]=Bl(t,n))}return e}}const Nk=ci(t=>{const e=Ik();return t.vueApp.use(e),Mo(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}});class Pk{constructor(e){un(this,"repository");this.repository=e}signIn(e){return this.repository.signIn(e)}}let Kv;function Dk(t){Kv=new Pk(t)}const dB=()=>Kv;/**
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
 */const zv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(t,e){if(!t)throw ur(e)},ur=function(t){return new Error("Firebase Database ("+zv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Gv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ok=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ok(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qv=function(t){const e=Gv(t);return Rd.encodeByteArray(e,!0)},Xa=function(t){return Qv(t).replace(/\./g,"")},Ja=function(t){try{return Rd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xk(t){return Yv(void 0,t)}function Yv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lk(n)||(t[n]=Yv(t[n],e[n]));return t}function Lk(t){return t!=="__proto__"}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function Mk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fk(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jv(){return zv.NODE_ADMIN===!0}function Uk(){return typeof indexedDB=="object"}function $k(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Bk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vk=()=>Bk().__FIREBASE_DEFAULTS__,Hk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ja(t[1]);return e&&JSON.parse(e)},Nd=()=>{try{return Vk()||Hk()||jk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zv=t=>{var e,n;return(n=(e=Nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ew=t=>{const e=Zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qk=()=>{var t;return(t=Nd())===null||t===void 0?void 0:t.config},tw=t=>{var e;return(e=Nd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xa(JSON.stringify(n)),Xa(JSON.stringify(o)),a].join(".")}/**
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
 */const Wk="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wk,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Kk(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kn(i,a,s)}}function Kk(t,e){return t.replace(zk,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zk=/\{\$([^}]+)}/g;/**
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
 */function lo(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
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
 */const sw=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=lo(Ja(r[0])||""),n=lo(Ja(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Gk=function(t){const e=sw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qk=function(t){const e=sw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function el(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vg(r)&&Vg(o)){if(!el(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vg(t){return t!==null&&typeof t=="object"}/**
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
 */function hr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Yk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xk(t,e){const n=new Jk(t,e);return n.subscribe.bind(n)}class Jk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ru),i.error===void 0&&(i.error=ru),i.complete===void 0&&(i.complete=ru);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}function Pd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eN=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,$(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class Es{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xs="[DEFAULT]";/**
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
 */class tN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sN(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nN(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nN(t){return t===xs?void 0:t}function sN(t){return t.instantiationMode==="EAGER"}/**
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
 */class iN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const rN={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},oN=Ae.INFO,aN={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},lN=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=aN[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=oN,this._logHandler=lN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const cN=(t,e)=>e.some(n=>t instanceof n);let Hg,jg;function uN(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hN(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iw=new WeakMap,rh=new WeakMap,rw=new WeakMap,ou=new WeakMap,Dd=new WeakMap;function dN(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ps(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iw.set(n,t)}).catch(()=>{}),Dd.set(e,t),e}function fN(t){if(rh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pN(t){oh=t(oh)}function gN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(au(this),e,...n);return rw.set(s,e.sort?e.sort():[e]),ps(s)}:hN().includes(t)?function(...e){return t.apply(au(this),e),ps(iw.get(this))}:function(...e){return ps(t.apply(au(this),e))}}function mN(t){return typeof t=="function"?gN(t):(t instanceof IDBTransaction&&fN(t),cN(t,uN())?new Proxy(t,oh):t)}function ps(t){if(t instanceof IDBRequest)return dN(t);if(ou.has(t))return ou.get(t);const e=mN(t);return e!==t&&(ou.set(t,e),Dd.set(e,t)),e}const au=t=>Dd.get(t);function yN(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ps(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _N=["get","getKey","getAll","getAllKeys","count"],vN=["put","add","delete","clear"],lu=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lu.get(e))return lu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=vN.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_N.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lu.set(e,r),r}pN(t=>({...t,get:(e,n,s)=>qg(e,n)||t.get(e,n,s),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
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
 */class wN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EN(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function EN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",Wg="0.8.2";/**
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
 */const Zs=new Jl("@firebase/app"),bN="@firebase/app-compat",TN="@firebase/analytics-compat",CN="@firebase/analytics",IN="@firebase/app-check-compat",SN="@firebase/app-check",AN="@firebase/auth",RN="@firebase/auth-compat",kN="@firebase/database",NN="@firebase/database-compat",PN="@firebase/functions",DN="@firebase/functions-compat",ON="@firebase/installations",xN="@firebase/installations-compat",LN="@firebase/messaging",MN="@firebase/messaging-compat",FN="@firebase/performance",UN="@firebase/performance-compat",$N="@firebase/remote-config",BN="@firebase/remote-config-compat",VN="@firebase/storage",HN="@firebase/storage-compat",jN="@firebase/firestore",qN="@firebase/firestore-compat",WN="firebase",KN="9.12.1";/**
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
 */const lh="[DEFAULT]",zN={[ah]:"fire-core",[bN]:"fire-core-compat",[CN]:"fire-analytics",[TN]:"fire-analytics-compat",[SN]:"fire-app-check",[IN]:"fire-app-check-compat",[AN]:"fire-auth",[RN]:"fire-auth-compat",[kN]:"fire-rtdb",[NN]:"fire-rtdb-compat",[PN]:"fire-fn",[DN]:"fire-fn-compat",[ON]:"fire-iid",[xN]:"fire-iid-compat",[LN]:"fire-fcm",[MN]:"fire-fcm-compat",[FN]:"fire-perf",[UN]:"fire-perf-compat",[$N]:"fire-rc",[BN]:"fire-rc-compat",[VN]:"fire-gcs",[HN]:"fire-gcs-compat",[jN]:"fire-fst",[qN]:"fire-fst-compat","fire-js":"fire-js",[WN]:"fire-js-all"};/**
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
 */const tl=new Map,ch=new Map;function GN(t,e){try{t.container.addComponent(e)}catch(n){Zs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(ch.has(e))return Zs.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of tl.values())GN(n,t);return!0}function Zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new Fo("app","Firebase",QN);/**
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
 */class YN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=KN;function ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=qk()),!n)throw gs.create("no-options");const r=tl.get(i);if(r){if(el(n,r.options)&&el(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new iN(i);for(const l of ch.values())o.addComponent(l);const a=new YN(n,s,o);return tl.set(i,a),a}function Od(t=lh){const e=tl.get(t);if(!e&&t===lh)return ow();if(!e)throw gs.create("no-app",{appName:t});return e}function On(t,e,n){var s;let i=(s=zN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zs.warn(a.join(" "));return}ei(new Es(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XN="firebase-heartbeat-database",JN=1,co="firebase-heartbeat-store";let cu=null;function aw(){return cu||(cu=yN(XN,JN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(co)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),cu}async function ZN(t){var e;try{return(await aw()).transaction(co).objectStore(co).get(lw(t))}catch(n){if(n instanceof Kn)Zs.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zs.warn(s.message)}}}async function Kg(t,e){var n;try{const i=(await aw()).transaction(co,"readwrite");return await i.objectStore(co).put(e,lw(t)),i.done}catch(s){if(s instanceof Kn)Zs.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Zs.warn(i.message)}}}function lw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eP=1024,tP=30*24*60*60*1e3;class nP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=tP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zg(),{heartbeatsToSend:n,unsentEntries:s}=sP(this._heartbeatsCache.heartbeats),i=Xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zg(){return new Date().toISOString().substring(0,10)}function sP(t,e=eP){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gg(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uk()?$k().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gg(t){return Xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rP(t){ei(new Es("platform-logger",e=>new wN(e),"PRIVATE")),ei(new Es("heartbeat",e=>new nP(e),"PRIVATE")),On(ah,Wg,t),On(ah,Wg,"esm2017"),On("fire-js","")}rP("");const Qg="@firebase/database",Yg="0.13.9";/**
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
 */let cw="";function oP(t){cw=t}/**
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
 */class aP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const uw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aP(e)}}catch{}return new lP},Us=uw("localStorage"),uh=uw("sessionStorage");/**
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
 */const Ri=new Jl("@firebase/database"),cP=function(){let t=1;return function(){return t++}}(),hw=function(t){const e=eN(t),n=new Yk;n.update(e);const s=n.digest();return Rd.encodeByteArray(s)},Uo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Uo.apply(null,s):typeof s=="object"?e+=ot(s):e+=s,e+=" "}return e};let zs=null,Xg=!0;const uP=function(t,e){$(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ri.logLevel=Ae.VERBOSE,zs=Ri.log.bind(Ri),e&&uh.set("logging_enabled",!0)):typeof t=="function"?zs=t:(zs=null,uh.remove("logging_enabled"))},Tt=function(...t){if(Xg===!0&&(Xg=!1,zs===null&&uh.get("logging_enabled")===!0&&uP(!0)),zs){const e=Uo.apply(null,t);zs(e)}},$o=function(t){return function(...e){Tt(t,...e)}},hh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Uo(...t);Ri.error(e)},Fn=function(...t){const e=`FIREBASE FATAL ERROR: ${Uo(...t)}`;throw Ri.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+Uo(...t);Ri.warn(e)},hP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",ti="[MAX_NAME]",fr=function(t,e){if(t===e)return 0;if(t===Yi||e===ti)return-1;if(e===Yi||t===ti)return 1;{const n=Jg(t),s=Jg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fP=function(t,e){return t===e?0:t<e?-1:1},Sr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},xd=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ot(e[s]),n+=":",n+=xd(t[e[s]]);return n+="}",n},fw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pw=function(t){$(!dw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},pP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const yP=new RegExp("^-?(0*)\\d{1,10}$"),_P=-2147483648,vP=2147483647,Jg=function(t){if(yP.test(t)){const e=Number(t);if(e>=_P&&e<=vP)return e}return null},pr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},wP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class EP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ki.OWNER="owner";/**
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
 */const Ld="5",gw="v",mw="s",yw="r",_w="f",vw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ww="ls",Ew="p",dh="ac",bw="websocket",Tw="long_polling";/**
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
 */class Cw{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Us.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Us.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iw(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let s;if(e===bw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TP(t)&&(n.ns=t.namespace);const i=[];return Ht(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class CP{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xk(this.counters_)}}/**
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
 */const uu={},hu={};function Md(t){const e=t.toString();return uu[e]||(uu[e]=new CP),uu[e]}function IP(t,e){const n=t.toString();return hu[n]||(hu[n]=e()),hu[n]}/**
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
 */class SP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&pr(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zg="start",AP="close",RP="pLPCommand",kP="pRTLPCB",Sw="id",Aw="pw",Rw="ser",NP="cb",PP="seg",DP="ts",OP="d",xP="dframe",kw=1870,Nw=30,LP=kw-Nw,MP=25e3,FP=3e4;class vi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$o(e),this.stats_=Md(n),this.urlFn=l=>(this.appCheckToken&&(l[dh]=this.appCheckToken),Iw(n,Tw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FP)),dP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zg)this.id=a,this.password=l;else if(o===AP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zg]="t",s[Rw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[NP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gw]=Ld,this.transportSessionId&&(s[mw]=this.transportSessionId),this.lastSessionId&&(s[ww]=this.lastSessionId),this.applicationId&&(s[Ew]=this.applicationId),this.appCheckToken&&(s[dh]=this.appCheckToken),typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(s[yw]=_w);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vi.forceAllow_=!0}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){return vi.forceAllow_?!0:!vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pP()&&!gP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qv(n),i=fw(s,LP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xP]="t",s[Sw]=e,s[Aw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cP(),window[RP+this.uniqueCallbackIdentifier]=e,window[kP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Tt("frame writing exception"),a.stack&&Tt(a.stack),Tt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Tt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sw]=this.myID,e[Aw]=this.myPW,e[Rw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nw+s.length<=kw;){const o=this.pendingSegs.shift();s=s+"&"+PP+i+"="+o.seg+"&"+DP+i+"="+o.ts+"&"+OP+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(MP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const UP=16384,$P=45e3;let nl=null;typeof MozWebSocket<"u"?nl=MozWebSocket:typeof WebSocket<"u"&&(nl=WebSocket);class tn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$o(this.connId),this.stats_=Md(n),this.connURL=tn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gw]=Ld,typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(o[yw]=_w),n&&(o[mw]=n),s&&(o[ww]=s),i&&(o[dh]=i),r&&(o[Ew]=r),Iw(e,bw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Us.set("previous_websocket_failure",!0);try{let s;Jv(),this.mySock=new nl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&nl!==null&&!tn.forceDisallow_}static previouslyFailed(){return Us.isInMemoryStorage||Us.get("previous_websocket_failure")===!0}markConnectionHealthy(){Us.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=lo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fw(n,UP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($P))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vi,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let s=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tn];else{const i=this.transports_=[];for(const r of uo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}uo.globalTransportInitialized_=!1;/**
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
 */const BP=6e4,VP=5e3,HP=10*1024,jP=100*1024,du="t",em="d",qP="s",tm="r",WP="e",nm="o",sm="a",im="n",rm="p",KP="h";class zP{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$o("c:"+this.id+":"),this.transportManager_=new uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Kr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(du in e){const n=e[du];n===sm?this.upgradeIfSecondaryHealthy_():n===tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Sr("t",e),s=Sr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Sr("t",e),s=Sr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Sr(du,e);if(em in e){const s=e[em];if(n===KP)this.onHandshake_(s);else if(n===im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qP?this.onConnectionShutdown_(s):n===tm?this.onReset_(s):n===WP?hh("Server Error: "+s):n===nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ld!==s&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Kr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Us.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Dw{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class sl extends Dw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sl}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const om=32,am=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Pe(){return new Le("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bs(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function Ow(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function tt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Le(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=pe(t),s=pe(e);if(n===null)return e;if(n===s)return Ut(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ud(t,e){if(bs(t)!==bs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function nn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(bs(t)>bs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class QP{constructor(e,n){this.errorPrefix_=n,this.parts_=xw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xl(this.parts_[s]);Mw(this)}}function YP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xl(e),Mw(t)}function XP(t){const e=t.parts_.pop();t.byteLength_-=Xl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mw(t){if(t.byteLength_>am)throw new Error(t.errorPrefix_+"has a key path longer than "+am+" bytes ("+t.byteLength_+").");if(t.parts_.length>om)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+om+") or object contains a cycle "+Ls(t))}function Ls(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $d extends Dw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $d}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ar=1e3,JP=60*5*1e3,lm=30*1e3,ZP=1.3,eD=3e4,tD="server_kill",cm=3;class xn extends Pw{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xn.nextPersistentConnectionId_++,this.log_=$o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ar,this.maxReconnectDelay_=JP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Jv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$d.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ot(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Yl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const s=Qi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gk(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hh("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ar,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ar,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eD&&(this.reconnectDelay_=Ar),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Tt("getToken() completed but was canceled"):(Tt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new zP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Bt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(tD)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Bt(h),l())}}}interrupt(e){Tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ih(this.interruptReasons_)&&(this.reconnectDelay_=Ar,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>xd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cm&&(this.reconnectDelay_=lm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cw.replace(/\./g,"-")]=1,kd()?e["framework.cordova"]=1:Xv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sl.getInstance().currentlyOnline();return ih(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
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
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
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
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ge(Yi,e),i=new ge(Yi,n);return this.compare(s,i)!==0}minPost(){return ge.MIN}}/**
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
 */let _a;class Fw extends ec{static get __EMPTY_NODE(){return _a}static set __EMPTY_NODE(e){_a=e}compare(e,n){return fr(e.name,n.name)}isDefinedOn(e){throw ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(ti,_a)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,_a)}toString(){return".key"}}const Ni=new Fw;/**
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
 */class va{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:rt.RED,this.left=i!=null?i:$t.EMPTY_NODE,this.right=r!=null?r:$t.EMPTY_NODE}copy(e,n,s,i,r){return new rt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $t.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class nD{copy(e,n,s,i,r){return this}insert(e,n,s){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,n=$t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new va(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new va(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new va(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new nD;/**
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
 */function sD(t,e){return fr(t.name,e.name)}function Bd(t,e){return fr(t,e)}/**
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
 */let fh;function iD(t){fh=t}const Uw=function(t){return typeof t=="number"?"number:"+pw(t):"string:"+t},$w=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else $(t===fh||t.isEmpty(),"priority of unexpected type.");$(t===fh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let um;class st{constructor(e,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$w(this.priorityNode_)}static set __childrenNodeConstructor(e){um=e}static get __childrenNodeConstructor(){return um}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:pe(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=pe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:($(s!==".priority"||bs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pw(this.value_):e+=this.value_,this.lazyHash_=hw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=st.VALUE_TYPE_ORDER.indexOf(n),r=st.VALUE_TYPE_ORDER.indexOf(s);return $(i>=0,"Unknown leaf type: "+n),$(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bw,Vw;function rD(t){Bw=t}function oD(t){Vw=t}class aD extends ec{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(ti,new st("[PRIORITY-POST]",Vw))}makePost(e,n){const s=Bw(e);return new ge(n,new st("[PRIORITY-POST]",s))}toString(){return".priority"}}const ze=new aD;/**
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
 */const lD=Math.log(2);class cD{constructor(e){const n=r=>parseInt(Math.log(r)/lD,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const il=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new rt(d,h.node,rt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),v=i(f+1,c);return h=t[f],d=n?n(h):h,new rt(d,h.node,rt.BLACK,p,v)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,v){const b=h-p,_=h;h-=p;const g=i(b+1,_),w=t[b],C=n?n(w):w;f(new rt(C,w.node,v,null,g))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),b=Math.pow(2,l.count-(p+1));v?d(b,rt.BLACK):(d(b,rt.BLACK),d(b,rt.RED))}return u},o=new cD(t.length),a=r(o);return new $t(s||e,a)};/**
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
 */let fu;const gi={};class Sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(gi&&ze,"ChildrenNode.ts has not been loaded"),fu=fu||new Sn({".priority":gi},{".priority":ze}),fu}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $t?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=il(s,e.getCompare()):a=gi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Sn(u,c)}addToIndexes(e,n){const s=Za(this.indexes_,(i,r)=>{const o=Qi(this.indexSet_,r);if($(o,"Missing index implementation for "+r),i===gi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),il(a,o.getCompare())}else return gi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ge(e.name,a))),l.insert(e,e.node)}});return new Sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Za(this.indexes_,i=>{if(i===gi)return i;{const r=n.get(e.name);return r?i.remove(new ge(e.name,r)):i}});return new Sn(s,this.indexSet_)}}/**
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
 */let Rr;class re{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$w(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rr||(Rr=new re(new $t(Bd),null,Sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rr}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rr:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ge(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Rr:this.priorityNode_;return new re(i,o,r)}}updateChild(e,n){const s=pe(e);if(s===null)return n;{$(pe(e)!==".priority"||bs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ze,(o,a)=>{n[o]=a.val(e),s++,r&&re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uw(this.getPriority().val())+":"),this.forEachChild(ze,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bo?-1:0}withIndex(e){if(e===Ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ze),i=n.getIterator(ze);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ni?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uD extends re{constructor(){super(new $t(Bd),re.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const Bo=new uD;Object.defineProperties(ge,{MIN:{value:new ge(Yi,re.EMPTY_NODE)},MAX:{value:new ge(ti,Bo)}});Fw.__EMPTY_NODE=re.EMPTY_NODE;st.__childrenNodeConstructor=re;iD(Bo);oD(Bo);/**
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
 */const hD=!0;function pt(t,e=null){if(t===null)return re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new st(n,pt(e))}if(!(t instanceof Array)&&hD){const n=[];let s=!1;if(Ht(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=pt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ge(o,l)))}}),n.length===0)return re.EMPTY_NODE;const r=il(n,sD,o=>o.name,Bd);if(s){const o=il(n,ze.getCompare());return new re(r,pt(e),new Sn({".priority":o},{".priority":ze}))}else return new re(r,pt(e),Sn.Default)}else{let n=re.EMPTY_NODE;return Ht(t,(s,i)=>{if(zn(t,s)&&s.substring(0,1)!=="."){const r=pt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pt(e))}}rD(pt);/**
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
 */class dD extends ec{constructor(e){super(),this.indexPath_=e,$(!ye(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}makePost(e,n){const s=pt(e),i=re.EMPTY_NODE.updateChild(this.indexPath_,s);return new ge(n,i)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,Bo);return new ge(ti,e)}toString(){return xw(this.indexPath_,0).join("/")}}/**
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
 */class fD extends ec{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const s=pt(e);return new ge(n,s)}toString(){return".value"}}const pD=new fD;/**
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
 */function Hw(t){return{type:"value",snapshotNode:t}}function Xi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ho(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Vd{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ho(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xi(n,s)):o.trackChildChange(fo(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,r)=>{n.hasChild(i)||s.trackChildChange(ho(i,r))}),n.isLeafNode()||n.forEachChild(ze,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fo(i,r,o))}else s.trackChildChange(Xi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?re.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class po{constructor(e){this.indexedFilter_=new Vd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=po.getStartPost_(e),this.endPost_=po.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new ge(n,s))||(s=re.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=re.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(re.EMPTY_NODE);const r=this;return n.forEachChild(ze,(o,a)=>{r.matches(new ge(o,a))||(i=i.updateImmediateChild(o,re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class mD{constructor(e){this.rangedFilter_=new po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ge(n,s))||(s=re.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=re.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(re.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new ge(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(fo(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ho(n,h));const v=a.updateImmediateChild(n,re.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Xi(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ho(c.name,c.node)),r.trackChildChange(Xi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,re.EMPTY_NODE)):e}}/**
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
 */class Hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new Hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yD(t){return t.loadsAllData()?new Vd(t.getIndex()):t.hasLimit()?new mD(t):new po(t)}function hm(t){const e={};if(t.isDefault())return e;let n;return t.index_===ze?n="$priority":t.index_===pD?n="$value":t.index_===Ni?n="$key":($(t.index_ instanceof dD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_&&(e.startAt=ot(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ot(t.indexStartName_))),t.endSet_&&(e.endAt=ot(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ot(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
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
 */class rl extends Pw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=rl.getListenId_(e,s),a={};this.listens_[o]=a;const l=hm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Qi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=rl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=hm(e._queryParams),s=e._path.toString(),i=new Yl;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=lo(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _D{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ol(){return{value:null,children:new Map}}function jw(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=pe(e);t.children.has(s)||t.children.set(s,ol());const i=t.children.get(s);e=Fe(e),jw(i,e,n)}}function ph(t,e,n){t.value!==null?n(e,t.value):vD(t,(s,i)=>{const r=new Le(e.toString()+"/"+s);ph(i,r,n)})}function vD(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class wD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ht(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const fm=10*1e3,ED=30*1e3,bD=5*60*1e3;class TD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wD(e);const s=fm+(ED-fm)*Math.random();Kr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ht(e,(i,r)=>{r>0&&zn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Kr(this.reportStats_.bind(this),Math.floor(Math.random()*2*bD))}}/**
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
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function qw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class al{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=sn.ACK_USER_WRITE,this.source=qw()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new al(Pe(),n,this.revert)}}else return $(pe(this.path)===e,"operationForChild called for unrelated child."),new al(Fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class go{constructor(e,n){this.source=e,this.path=n,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new go(this.source,Pe()):new go(this.source,Fe(this.path))}}/**
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
 */class ni{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=sn.OVERWRITE}operationForChild(e){return ye(this.path)?new ni(this.source,Pe(),this.snap.getImmediateChild(e)):new ni(this.source,Fe(this.path),this.snap)}}/**
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
 */class mo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=sn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new ni(this.source,Pe(),n.value):new mo(this.source,Pe(),n)}else return $(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class si{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class CD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ID(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gD(o.childName,o.snapshotNode))}),kr(t,i,"child_removed",e,s,n),kr(t,i,"child_added",e,s,n),kr(t,i,"child_moved",r,s,n),kr(t,i,"child_changed",e,s,n),kr(t,i,"value",e,s,n),i}function kr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>AD(t,a,l)),o.forEach(a=>{const l=SD(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function SD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AD(t,e,n){if(e.childName==null||n.childName==null)throw ur("Should only compare child_ events.");const s=new ge(e.childName,e.snapshotNode),i=new ge(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function tc(t,e){return{eventCache:t,serverCache:e}}function zr(t,e,n,s){return tc(new si(e,n,s),t.serverCache)}function Ww(t,e,n,s){return tc(t.eventCache,new si(e,n,s))}function gh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pu;const RD=()=>(pu||(pu=new $t(fP)),pu);class $e{constructor(e,n=RD()){this.value=e,this.children=n}static fromObject(e){let n=new $e(null);return Ht(e,(s,i)=>{n=n.set(new Le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Pe(),value:this.value};if(ye(e))return null;{const s=pe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Fe(e),n);return r!=null?{path:tt(new Le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=pe(e),s=this.children.get(n);return s!==null?s.subtree(Fe(e)):new $e(null)}}set(e,n){if(ye(e))return new $e(n,this.children);{const s=pe(e),r=(this.children.get(s)||new $e(null)).set(Fe(e),n),o=this.children.insert(s,r);return new $e(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=pe(e),s=this.children.get(n);if(s){const i=s.remove(Fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new $e(null):new $e(this.value,r)}else return this}}get(e){if(ye(e))return this.value;{const n=pe(e),s=this.children.get(n);return s?s.get(Fe(e)):null}}setTree(e,n){if(ye(e))return n;{const s=pe(e),r=(this.children.get(s)||new $e(null)).setTree(Fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $e(this.value,o)}}fold(e){return this.fold_(Pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Pe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ye(e))return null;{const r=pe(e),o=this.children.get(r);return o?o.findOnPath_(Fe(e),tt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Pe(),n)}foreachOnPath_(e,n,s){if(ye(e))return this;{this.value&&s(n,this.value);const i=pe(e),r=this.children.get(i);return r?r.foreachOnPath_(Fe(e),tt(n,i),s):new $e(null)}}foreach(e){this.foreach_(Pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new $e(null))}}function Gr(t,e,n){if(ye(e))return new on(new $e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new on(t.writeTree_.set(i,r))}else{const i=new $e(n),r=t.writeTree_.setTree(e,i);return new on(r)}}}function pm(t,e,n){let s=t;return Ht(n,(i,r)=>{s=Gr(s,tt(e,i),r)}),s}function gm(t,e){if(ye(e))return on.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new on(n)}}function mh(t,e){return ui(t,e)!=null}function ui(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function mm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(s,i)=>{e.push(new ge(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ge(s,i.value))}),e}function ms(t,e){if(ye(e))return t;{const n=ui(t,e);return n!=null?new on(new $e(n)):new on(t.writeTree_.subtree(e))}}function yh(t){return t.writeTree_.isEmpty()}function Ji(t,e){return Kw(Pe(),t.writeTree_,e)}function Kw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Kw(tt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(tt(t,".priority"),s)),n}}/**
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
 */function Wd(t,e){return Yw(e,t)}function kD(t,e,n,s,i){$(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gr(t.visibleWrites,e,n)),t.lastWriteId=s}function ND(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function PD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&DD(a,s.path)?i=!1:nn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return OD(t),!0;if(s.snap)t.visibleWrites=gm(t.visibleWrites,s.path);else{const a=s.children;Ht(a,l=>{t.visibleWrites=gm(t.visibleWrites,tt(s.path,l))})}return!0}else return!1}function DD(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(tt(t.path,n),e))return!0;return!1}function OD(t){t.visibleWrites=zw(t.allWrites,xD,Pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xD(t){return t.visible}function zw(t,e,n){let s=on.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)nn(n,o)?(a=Ut(n,o),s=Gr(s,a,r.snap)):nn(o,n)&&(a=Ut(o,n),s=Gr(s,Pe(),r.snap.getChild(a)));else if(r.children){if(nn(n,o))a=Ut(n,o),s=pm(s,a,r.children);else if(nn(o,n))if(a=Ut(o,n),ye(a))s=pm(s,Pe(),r.children);else{const l=Qi(r.children,pe(a));if(l){const c=l.getChild(Fe(a));s=Gr(s,Pe(),c)}}}else throw ur("WriteRecord should have .snap or .children")}}return s}function Gw(t,e,n,s,i){if(!s&&!i){const r=ui(t.visibleWrites,e);if(r!=null)return r;{const o=ms(t.visibleWrites,e);if(yh(o))return n;if(n==null&&!mh(o,Pe()))return null;{const a=n||re.EMPTY_NODE;return Ji(o,a)}}}else{const r=ms(t.visibleWrites,e);if(!i&&yh(r))return n;if(!i&&n==null&&!mh(r,Pe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},a=zw(t.allWrites,o,e),l=n||re.EMPTY_NODE;return Ji(a,l)}}}function LD(t,e,n){let s=re.EMPTY_NODE;const i=ui(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ms(t.visibleWrites,e);return n.forEachChild(ze,(o,a)=>{const l=Ji(ms(r,new Le(o)),a);s=s.updateImmediateChild(o,l)}),mm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ms(t.visibleWrites,e);return mm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MD(t,e,n,s,i){$(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,n);if(mh(t.visibleWrites,r))return null;{const o=ms(t.visibleWrites,r);return yh(o)?i.getChild(n):Ji(o,i.getChild(n))}}function FD(t,e,n,s){const i=tt(e,n),r=ui(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ms(t.visibleWrites,i);return Ji(o,s.getNode().getImmediateChild(n))}else return null}function UD(t,e){return ui(t.visibleWrites,e)}function $D(t,e,n,s,i,r,o){let a;const l=ms(t.visibleWrites,e),c=ui(l,Pe());if(c!=null)a=c;else if(n!=null)a=Ji(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function BD(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function ll(t,e,n,s){return Gw(t.writeTree,t.treePath,e,n,s)}function Kd(t,e){return LD(t.writeTree,t.treePath,e)}function ym(t,e,n,s){return MD(t.writeTree,t.treePath,e,n,s)}function cl(t,e){return UD(t.writeTree,tt(t.treePath,e))}function VD(t,e,n,s,i,r){return $D(t.writeTree,t.treePath,e,n,s,i,r)}function zd(t,e,n){return FD(t.writeTree,t.treePath,e,n)}function Qw(t,e){return Yw(tt(t.treePath,e),t.writeTree)}function Yw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class HD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fo(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ho(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Xi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fo(s,e.snapshotNode,i.oldSnap));else throw ur("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jD{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xw=new jD;class Gd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ii(this.viewCache_),r=VD(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function qD(t){return{filter:t}}function WD(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KD(t,e,n,s,i){const r=new HD;let o,a;if(n.type===sn.OVERWRITE){const c=n;c.source.fromUser?o=_h(t,e,c.path,c.snap,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=ul(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===sn.MERGE){const c=n;c.source.fromUser?o=GD(t,e,c.path,c.children,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===sn.ACK_USER_WRITE){const c=n;c.revert?o=XD(t,e,c.path,s,i,r):o=QD(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===sn.LISTEN_COMPLETE)o=YD(t,e,n.path,s,r);else throw ur("Unknown operation type: "+n.type);const l=r.getChanges();return zD(e,o,l),{viewCache:o,changes:l}}function zD(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hw(gh(e)))}}function Jw(t,e,n,s,i,r){const o=e.eventCache;if(cl(s,n)!=null)return e;{let a,l;if(ye(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ii(e),u=c instanceof re?c:re.EMPTY_NODE,h=Kd(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ll(s,ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=pe(n);if(c===".priority"){$(bs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ym(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ym(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=zd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return zr(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function ul(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=pe(n);if(!l.isCompleteForPath(n)&&bs(n)>1)return e;const p=Fe(n),b=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,p,Xw,null)}const h=Ww(e,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Gd(i,h,r);return Jw(t,h,n,i,d,a)}function _h(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Gd(i,e,r);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=zr(e,c,!0,t.filter.filtersNodes());else{const h=pe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=zr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Fe(n),f=a.getNode().getImmediateChild(h);let p;if(ye(d))p=s;else{const v=u.getCompleteChild(h);v!=null?Ow(d)===".priority"&&v.getChild(Lw(d)).isEmpty()?p=v:p=v.updateChild(d,s):p=re.EMPTY_NODE}if(f.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=zr(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function _m(t,e){return t.eventCache.isCompleteForChild(e)}function GD(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=tt(n,l);_m(e,pe(u))&&(a=_h(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=tt(n,l);_m(e,pe(u))||(a=_h(t,a,u,c,i,r,o))}),a}function vm(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function vh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=s:c=new $e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=vm(t,f,d);l=ul(t,l,new Le(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),v=vm(t,p,d);l=ul(t,l,new Le(h),v,i,r,o,a)}}),l}function QD(t,e,n,s,i,r,o){if(cl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ul(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ye(n)){let c=new $e(null);return l.getNode().forEachChild(Ni,(u,h)=>{c=c.set(new Le(u),h)}),vh(t,e,n,c,i,r,a,o)}else return e}else{let c=new $e(null);return s.foreach((u,h)=>{const d=tt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),vh(t,e,n,c,i,r,a,o)}}function YD(t,e,n,s,i){const r=e.serverCache,o=Ww(e,r.getNode(),r.isFullyInitialized()||ye(n),r.isFiltered());return Jw(t,o,n,s,Xw,i)}function XD(t,e,n,s,i,r){let o;if(cl(s,n)!=null)return e;{const a=new Gd(s,e,i),l=e.eventCache.getNode();let c;if(ye(n)||pe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ll(s,ii(e));else{const h=e.serverCache.getNode();$(h instanceof re,"serverChildren would be complete if leaf node"),u=Kd(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=pe(n);let h=zd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Fe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,re.EMPTY_NODE,Fe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ll(s,ii(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||cl(s,Pe())!=null,zr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class JD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vd(s.getIndex()),r=yD(s);this.processor_=qD(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(re.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(re.EMPTY_NODE,a.getNode(),null),u=new si(l,o.isFullyInitialized(),i.filtersNodes()),h=new si(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=tc(h,u),this.eventGenerator_=new CD(this.query_)}get query(){return this.query_}}function ZD(t){return t.viewCache_.serverCache.getNode()}function eO(t,e){const n=ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function wm(t){return t.eventRegistrations_.length===0}function tO(t,e){t.eventRegistrations_.push(e)}function Em(t,e,n){const s=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function bm(t,e,n,s){e.type===sn.MERGE&&e.source.queryId!==null&&($(ii(t.viewCache_),"We should always have a full cache before handling merges"),$(gh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=KD(t.processor_,i,e,n,s);return WD(t.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zw(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(r,o)=>{s.push(Xi(r,o))}),n.isFullyInitialized()&&s.push(Hw(n.getNode())),Zw(t,s,n.getNode(),e)}function Zw(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ID(t.eventGenerator_,e,n,i)}/**
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
 */let hl;class sO{constructor(){this.views=new Map}}function iO(t){$(!hl,"__referenceConstructor has already been defined"),hl=t}function rO(){return $(hl,"Reference.ts has not been loaded"),hl}function oO(t){return t.views.size===0}function Qd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return $(r!=null,"SyncTree gave us an op for an invalid query."),bm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(bm(o,e,n,s));return r}}function aO(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ll(n,i?s:null),l=!1;a?l=!0:s instanceof re?(a=Kd(n,s),l=!1):(a=re.EMPTY_NODE,l=!1);const c=tc(new si(a,l,!1),new si(s,i,!1));return new JD(e,c)}return o}function lO(t,e,n,s,i,r){const o=aO(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tO(o,n),nO(o,n)}function cO(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ts(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Em(c,n,s)),wm(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Em(l,n,s)),wm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ts(t)&&r.push(new(rO())(e._repo,e._path)),{removed:r,events:o}}function eE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pi(t,e){let n=null;for(const s of t.views.values())n=n||eO(s,e);return n}function tE(t,e){if(e._queryParams.loadsAllData())return nc(t);{const s=e._queryIdentifier;return t.views.get(s)}}function nE(t,e){return tE(t,e)!=null}function Ts(t){return nc(t)!=null}function nc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let dl;function uO(t){$(!dl,"__referenceConstructor has already been defined"),dl=t}function hO(){return $(dl,"Reference.ts has not been loaded"),dl}let dO=1;class Tm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=BD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sE(t,e,n,s,i){return kD(t.pendingWriteTree_,e,n,s,i),i?Vo(t,new ni(qw(),e,n)):[]}function $s(t,e,n=!1){const s=ND(t.pendingWriteTree_,e);if(PD(t.pendingWriteTree_,e)){let r=new $e(null);return s.snap!=null?r=r.set(Pe(),!0):Ht(s.children,o=>{r=r.set(new Le(o),!0)}),Vo(t,new al(s.path,r,n))}else return[]}function sc(t,e,n){return Vo(t,new ni(jd(),e,n))}function fO(t,e,n){const s=$e.fromObject(n);return Vo(t,new mo(jd(),e,s))}function pO(t,e){return Vo(t,new go(jd(),e))}function gO(t,e,n){const s=Xd(t,n);if(s){const i=Jd(s),r=i.path,o=i.queryId,a=Ut(r,e),l=new go(qd(o),a);return Zd(t,r,l)}else return[]}function wh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||nE(o,e))){const l=cO(o,e,n,s);oO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>Ts(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=_O(d);for(let p=0;p<f.length;++p){const v=f[p],b=v.query,_=oE(t,v);t.listenProvider_.startListening(Qr(b),fl(t,b),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Qr(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(ic(d));t.listenProvider_.stopListening(Qr(d),f)}))}vO(t,c)}return a}function mO(t,e,n,s){const i=Xd(t,s);if(i!=null){const r=Jd(i),o=r.path,a=r.queryId,l=Ut(o,e),c=new ni(qd(a),l,n);return Zd(t,o,c)}else return[]}function yO(t,e,n,s){const i=Xd(t,s);if(i){const r=Jd(i),o=r.path,a=r.queryId,l=Ut(o,e),c=$e.fromObject(n),u=new mo(qd(a),l,c);return Zd(t,o,u)}else return[]}function Cm(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Ut(d,i);r=r||Pi(f,p),o=o||Ts(f)});let a=t.syncPointTree_.get(i);a?(o=o||Ts(a),r=r||Pi(a,Pe())):(a=new sO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=re.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const v=Pi(p,Pe());v&&(r=r.updateImmediateChild(f,v))}));const c=nE(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ic(e);$(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=wO();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Wd(t.pendingWriteTree_,i);let h=lO(a,e,n,u,r,l);if(!c&&!o&&!s){const d=tE(a,e);h=h.concat(EO(t,e,d))}return h}function Yd(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),c=Pi(a,l);if(c)return c});return Gw(i,e,r,n,!0)}function Vo(t,e){return iE(e,t.syncPointTree_,null,Wd(t.pendingWriteTree_,Pe()))}function iE(t,e,n,s){if(ye(t.path))return rE(t,e,n,s);{const i=e.get(Pe());n==null&&i!=null&&(n=Pi(i,Pe()));let r=[];const o=pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Qw(s,o);r=r.concat(iE(a,l,c,u))}return i&&(r=r.concat(Qd(i,t,s,n))),r}}function rE(t,e,n,s){const i=e.get(Pe());n==null&&i!=null&&(n=Pi(i,Pe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qw(s,o),u=t.operationForChild(o);u&&(r=r.concat(rE(u,a,l,c)))}),i&&(r=r.concat(Qd(i,t,s,n))),r}function oE(t,e){const n=e.query,s=fl(t,n);return{hashFn:()=>(ZD(e)||re.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?gO(t,n._path,s):pO(t,n._path);{const r=mP(i,n);return wh(t,n,null,r)}}}}function fl(t,e){const n=ic(e);return t.queryToTagMap.get(n)}function ic(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Jd(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function Zd(t,e,n){const s=t.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const i=Wd(t.pendingWriteTree_,e);return Qd(s,n,i,null)}function _O(t){return t.fold((e,n,s)=>{if(n&&Ts(n))return[nc(n)];{let i=[];return n&&(i=eE(n)),Ht(s,(r,o)=>{i=i.concat(o)}),i}})}function Qr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hO())(t._repo,t._path):t}function vO(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ic(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function wO(){return dO++}function EO(t,e,n){const s=e._path,i=fl(t,e),r=oE(t,n),o=t.listenProvider_.startListening(Qr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)$(!Ts(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ye(c)&&u&&Ts(u))return[nc(u).query];{let d=[];return u&&(d=d.concat(eE(u).map(f=>f.query))),Ht(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Qr(u),fl(t,u))}}return o}/**
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
 */class ef{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ef(n)}node(){return this.node_}}class tf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new tf(this.syncTree_,n)}node(){return Yd(this.syncTree_,this.path_)}}const bO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Im=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CO(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},CO=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},IO=function(t,e,n,s){return nf(e,new tf(n,t),s)},aE=function(t,e,n){return nf(t,new ef(e),n)};function nf(t,e,n){const s=t.getPriority().val(),i=Im(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Im(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new st(a,pt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new st(i))),o.forEachChild(ze,(a,l)=>{const c=nf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class sf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function rf(t,e){let n=e instanceof Le?e:new Le(e),s=t,i=pe(n);for(;i!==null;){const r=Qi(s.node.children,i)||{children:{},childCount:0};s=new sf(i,s,r),n=Fe(n),i=pe(n)}return s}function gr(t){return t.node.value}function lE(t,e){t.node.value=e,Eh(t)}function cE(t){return t.node.childCount>0}function SO(t){return gr(t)===void 0&&!cE(t)}function rc(t,e){Ht(t.node.children,(n,s)=>{e(new sf(n,t,s))})}function uE(t,e,n,s){n&&!s&&e(t),rc(t,i=>{uE(i,e,!0,s)}),n&&s&&e(t)}function AO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ho(t){return new Le(t.parent===null?t.name:Ho(t.parent)+"/"+t.name)}function Eh(t){t.parent!==null&&RO(t.parent,t.name,t)}function RO(t,e,n){const s=SO(n),i=zn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Eh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Eh(t))}/**
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
 */const kO=/[\[\].#$\/\u0000-\u001F\u007F]/,NO=/[\[\].#$\u0000-\u001F\u007F]/,gu=10*1024*1024,hE=function(t){return typeof t=="string"&&t.length!==0&&!kO.test(t)},dE=function(t){return typeof t=="string"&&t.length!==0&&!NO.test(t)},PO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dE(t)},DO=function(t,e,n,s){s&&e===void 0||of(Pd(t,"value"),e,n)},of=function(t,e,n){const s=n instanceof Le?new QP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ls(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ls(s)+" with contents = "+e.toString());if(dw(e))throw new Error(t+"contains "+e.toString()+" "+Ls(s));if(typeof e=="string"&&e.length>gu/3&&Xl(e)>gu)throw new Error(t+"contains a string greater than "+gu+" utf8 bytes "+Ls(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ht(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ls(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YP(s,o),of(t,a,s),XP(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ls(s)+" in addition to actual children.")}},fE=function(t,e,n,s){if(!(s&&n===void 0)&&!dE(n))throw new Error(Pd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OO=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fE(t,e,n,s)},pE=function(t,e){if(pe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!PO(n))throw new Error(Pd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function af(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ud(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gE(t,e,n){af(t,n),mE(t,s=>Ud(s,e))}function Un(t,e,n){af(t,n),mE(t,s=>nn(s,e)||nn(e,s))}function mE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(MO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zs&&Tt("event: "+n.toString()),pr(s)}}}/**
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
 */const FO="repo_interrupt",UO=25;class $O{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ol(),this.transactionQueueTree_=new sf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BO(t,e,n){if(t.stats_=Md(t.repoInfo_),t.forceRestClient_||wP())t.server_=new rl(t.repoInfo_,(s,i,r,o)=>{Sm(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Am(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new xn(t.repoInfo_,e,(s,i,r,o)=>{Sm(t,s,i,r,o)},s=>{Am(t,s)},s=>{HO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=IP(t.repoInfo_,()=>new TD(t.stats_,t.server_)),t.infoData_=new _D,t.infoSyncTree_=new Tm({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=sc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cf(t,"connected",!1),t.serverSyncTree_=new Tm({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Un(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VO(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lf(t){return bO({timestamp:VO(t)})}function Sm(t,e,n,s,i){t.dataUpdateCount++;const r=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Za(n,c=>pt(c));o=yO(t.serverSyncTree_,r,l,i)}else{const l=pt(n);o=mO(t.serverSyncTree_,r,l,i)}else if(s){const l=Za(n,c=>pt(c));o=fO(t.serverSyncTree_,r,l)}else{const l=pt(n);o=sc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=oc(t,r)),Un(t.eventQueue_,a,o)}function Am(t,e){cf(t,"connected",e),e===!1&&qO(t)}function HO(t,e){Ht(e,(n,s)=>{cf(t,n,s)})}function cf(t,e,n){const s=new Le("/.info/"+e),i=pt(n);t.infoData_.updateSnapshot(s,i);const r=sc(t.infoSyncTree_,s,i);Un(t.eventQueue_,s,r)}function yE(t){return t.nextWriteId_++}function jO(t,e,n,s,i){uf(t,"set",{path:e.toString(),value:n,priority:s});const r=lf(t),o=pt(n,s),a=Yd(t.serverSyncTree_,e),l=aE(o,a,r),c=yE(t),u=sE(t.serverSyncTree_,e,l,c,!0);af(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Bt("set at "+e+" failed: "+d);const v=$s(t.serverSyncTree_,c,!p);Un(t.eventQueue_,e,v),zO(t,i,d,f)});const h=bE(t,e);oc(t,h),Un(t.eventQueue_,h,[])}function qO(t){uf(t,"onDisconnectEvents");const e=lf(t),n=ol();ph(t.onDisconnect_,Pe(),(i,r)=>{const o=IO(i,r,t.serverSyncTree_,e);jw(n,i,o)});let s=[];ph(n,Pe(),(i,r)=>{s=s.concat(sc(t.serverSyncTree_,i,r));const o=bE(t,i);oc(t,o)}),t.onDisconnect_=ol(),Un(t.eventQueue_,Pe(),s)}function WO(t,e,n){let s;pe(e._path)===".info"?s=Cm(t.infoSyncTree_,e,n):s=Cm(t.serverSyncTree_,e,n),gE(t.eventQueue_,e._path,s)}function Rm(t,e,n){let s;pe(e._path)===".info"?s=wh(t.infoSyncTree_,e,n):s=wh(t.serverSyncTree_,e,n),gE(t.eventQueue_,e._path,s)}function KO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FO)}function uf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Tt(n,...e)}function zO(t,e,n,s){e&&pr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function _E(t,e,n){return Yd(t.serverSyncTree_,e,n)||re.EMPTY_NODE}function hf(t,e=t.transactionQueueTree_){if(e||ac(t,e),gr(e)){const n=wE(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GO(t,Ho(e),n)}else cE(e)&&rc(e,n=>{hf(t,n)})}function GO(t,e,n){const s=n.map(c=>c.currentWriteId),i=_E(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{uf(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat($s(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ac(t,rf(t.transactionQueueTree_,e)),hf(t,t.transactionQueueTree_),Un(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)pr(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Bt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}oc(t,e)}},o)}function oc(t,e){const n=vE(t,e),s=Ho(n),i=wE(t,n);return QO(t,i,s),s}function QO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ut(n,l.path);let u=!1,h;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat($s(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=UO)u=!0,h="maxretry",i=i.concat($s(t.serverSyncTree_,l.currentWriteId,!0));else{const d=_E(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){of("transaction failed: Data returned ",f,l.path);let p=pt(f);typeof f=="object"&&f!=null&&zn(f,".priority")||(p=p.updatePriority(d.getPriority()));const b=l.currentWriteId,_=lf(t),g=aE(p,d,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=yE(t),o.splice(o.indexOf(b),1),i=i.concat(sE(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat($s(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat($s(t.serverSyncTree_,l.currentWriteId,!0))}Un(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ac(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)pr(s[a]);hf(t,t.transactionQueueTree_)}function vE(t,e){let n,s=t.transactionQueueTree_;for(n=pe(e);n!==null&&gr(s)===void 0;)s=rf(s,n),e=Fe(e),n=pe(e);return s}function wE(t,e){const n=[];return EE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function EE(t,e,n){const s=gr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);rc(e,i=>{EE(t,i,n)})}function ac(t,e){const n=gr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lE(e,n.length>0?n:void 0)}rc(e,s=>{ac(t,s)})}function bE(t,e){const n=Ho(vE(t,e)),s=rf(t.transactionQueueTree_,e);return AO(s,i=>{mu(t,i)}),mu(t,s),uE(s,i=>{mu(t,i)}),n}function mu(t,e){const n=gr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($s(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lE(e,void 0):n.length=r+1,Un(t.eventQueue_,Ho(e),i);for(let o=0;o<s.length;o++)pr(s[o])}}/**
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
 */function YO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function XO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const km=function(t,e){const n=JO(t),s=n.namespace;n.domain==="firebase.com"&&Fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cw(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Le(n.pathString)}},JO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=YO(t.substring(u,h)));const d=XO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class TE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class CE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ZO{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class df{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ye(this._path)?null:Ow(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=dm(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return dm(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof df))return!1;const n=this._repo===e._repo,s=Ud(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GP(this._path)}}class Gn extends df{constructor(e,n){super(e,n,new Hd,!1)}get parent(){const e=Lw(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Le(e),s=pl(this.ref,e);return new yo(this._node.getChild(n),s,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new yo(i,pl(this.ref,s),ze)))}hasChild(e){const n=new Le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ff(t,e){return t=_t(t),t._checkNotDeleted("ref"),e!==void 0?pl(t._root,e):t._root}function pl(t,e){return t=_t(t),pe(t._path)===null?OO("child","path",e,!1):fE("child","path",e,!1),new Gn(t._repo,tt(t._path,e))}function ex(t){return pE("remove",t._path),IE(t,null)}function IE(t,e){t=_t(t),pE("set",t._path),DO("set",e,t._path,!1);const n=new Yl;return jO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class pf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new TE("value",this,new yo(e.snapshotNode,new Gn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CE(this,e,n):null}matches(e){return e instanceof pf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CE(this,e,n):null}createEvent(e,n){$(e.childName!=null,"Child events should have a childName.");const s=pl(new Gn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new TE(e.type,this,new yo(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tx(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Rm(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ZO(n,r||void 0),a=e==="value"?new pf(o):new gf(e,o);return WO(t._repo,t,a),()=>Rm(t._repo,t,a)}function Nm(t,e,n,s){return tx(t,"value",e,n,s)}iO(Gn);uO(Gn);/**
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
 */const nx="FIREBASE_DATABASE_EMULATOR_HOST",bh={};let sx=!1;function ix(t,e,n,s){t.repoInfo_=new Cw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function rx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=km(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[nx]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=km(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ki(ki.OWNER):new bP(t.name,t.options,e);xO("Invalid Firebase Database URL",o),ye(o.path)||Fn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ax(a,t,u,new EP(t.name,n));return new lx(h,t)}function ox(t,e){const n=bh[e];(!n||n[t.key]!==t)&&Fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KO(t),delete n[t.key]}function ax(t,e,n,s){let i=bh[e.name];i||(i={},bh[e.name]=i);let r=i[t.toURLString()];return r&&Fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $O(t,sx,n,s),i[t.toURLString()]=r,r}class lx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,Pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ox(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fn("Cannot call "+e+" on a deleted database.")}}function cx(t=Od(),e){const n=Zl(t,"database").getImmediate({identifier:e}),s=ew("database");return s&&ux(n,...s),n}function ux(t,e,n,s={}){t=_t(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ki(ki.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:nw(s.mockUserToken,t.app.options.projectId);r=new ki(o)}ix(i,e,n,r)}/**
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
 */function hx(t){oP(dr),ei(new Es("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),On(Qg,Yg,t),On(Qg,Yg,"esm2017")}xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hx();function mf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function SE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dx=SE,AE=new Fo("auth","Firebase",SE());/**
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
 */const Pm=new Jl("@firebase/auth");function Oa(t,...e){Pm.logLevel<=Ae.ERROR&&Pm.error(`Auth (${dr}): ${t}`,...e)}/**
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
 */function $n(t,...e){throw yf(t,...e)}function yn(t,...e){return yf(t,...e)}function fx(t,e,n){const s=Object.assign(Object.assign({},dx()),{[e]:n});return new Fo("auth","Firebase",s).create(e,{appName:t.name})}function yf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return AE.create(t,...e)}function le(t,e,...n){if(!t)throw yf(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function Bn(t,e){t||An(e)}/**
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
 */const Dm=new Map;function Rn(t){Bn(t instanceof Function,"Expected a class definition");let e=Dm.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dm.set(t,e),e)}/**
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
 */function px(t,e){const n=Zl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(el(r,e!=null?e:{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function gx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mx(){return Om()==="http:"||Om()==="https:"}function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mx()||Mk()||"connection"in navigator)?navigator.onLine:!0}function _x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=kd()||Xv()}get(){return yx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class RE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wx=new jo(3e4,6e4);function kE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lc(t,e,n,s,i={}){return NE(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),RE.fetch()(DE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function NE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vx),e);try{const i=new Ex(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fx(t,u,c);$n(t,u)}}catch(i){if(i instanceof Kn)throw i;$n(t,"network-request-failed")}}async function PE(t,e,n,s,i={}){const r=await lc(t,e,n,s,i);return"mfaPendingCredential"in r&&$n(t,"multi-factor-auth-required",{_serverResponse:r}),r}function DE(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?_f(t.config,i):`${t.config.apiScheme}://${i}`}class Ex{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),wx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=yn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function bx(t,e){return lc(t,"POST","/v1/accounts:delete",e)}async function Tx(t,e){return lc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cx(t,e=!1){const n=_t(t),s=await n.getIdToken(e),i=vf(s);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yr(yu(i.auth_time)),issuedAtTime:Yr(yu(i.iat)),expirationTime:Yr(yu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yu(t){return Number(t)*1e3}function vf(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ja(s);return r?JSON.parse(r):(Oa("Failed to decode base64 JWT payload"),null)}catch(r){return Oa("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Ix(t){const e=vf(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kn&&Sx(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ax{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class OE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _o(t,Tx(n,{idToken:s}));le(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Nx(r.providerUserInfo):[],a=kx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new OE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Rx(t){const e=_t(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kx(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Nx(t){return t.map(e=>{var{providerId:n}=e,s=mf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Px(t,e){const n=await NE(t,{},async()=>{const s=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=DE(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ix(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Px(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new vo;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(le(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function ts(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ax(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new OE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cx(this,e)}reload(){return Rx(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _o(this,bx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:C,isAnonymous:P,providerData:B,stsTokenManager:R}=n;le(w&&R,e,"internal-error");const I=vo.fromJSON(this.name,R);le(typeof w=="string",e,"internal-error"),ts(h,e.name),ts(d,e.name),le(typeof C=="boolean",e,"internal-error"),le(typeof P=="boolean",e,"internal-error"),ts(f,e.name),ts(p,e.name),ts(v,e.name),ts(b,e.name),ts(_,e.name),ts(g,e.name);const L=new Gs({uid:w,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:P,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:I,createdAt:_,lastLoginAt:g});return B&&Array.isArray(B)&&(L.providerData=B.map(q=>Object.assign({},q))),b&&(L._redirectEventId=b),L}static async _fromIdTokenResponse(e,n,s=!1){const i=new vo;i.updateFromServerResponse(n);const r=new Gs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await gl(r),r}}/**
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
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xE.type="NONE";const xm=xE;/**
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
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,r),this.fullPersistenceKey=xa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Di(Rn(xm),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Rn(xm);const o=xa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Gs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Di(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Di(r,e,s))}}/**
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
 */function Lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($E(e))return"Blackberry";if(BE(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||ME(e))&&!e.includes("edge/"))return"Chrome";if(UE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function LE(t=Rt()){return/firefox\//i.test(t)}function wf(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ME(t=Rt()){return/crios\//i.test(t)}function FE(t=Rt()){return/iemobile/i.test(t)}function UE(t=Rt()){return/android/i.test(t)}function $E(t=Rt()){return/blackberry/i.test(t)}function BE(t=Rt()){return/webos/i.test(t)}function cc(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dx(t=Rt()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ox(){return Fk()&&document.documentMode===10}function VE(t=Rt()){return cc(t)||UE(t)||BE(t)||$E(t)||/windows phone/i.test(t)||FE(t)}function xx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function HE(t,e=[]){let n;switch(t){case"Browser":n=Lm(Rt());break;case"Worker":n=`${Lm(Rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${s}`}/**
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
 */class Lx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Mx{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mm(this),this.idTokenSubscription=new Mm(this),this.beforeStateQueue=new Lx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await gl(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_t(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return le(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function uc(t){return _t(t)}class Mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xk(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Fx(t,e,n){const s=uc(t);le(s._canInitEmulator,s,"emulator-config-failed"),le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=jE(e),{host:o,port:a}=Ux(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$x()}function jE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ux(t){const e=jE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fm(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fm(o)}}}function Fm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function Oi(t,e){return PE(t,"POST","/v1/accounts:signInWithIdp",kE(t,e))}/**
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
 */const Bx="http://localhost";class ri extends qE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=mf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ri(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Oi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:Bx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hr(n)}return e}}/**
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
 */class WE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends WE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ls extends qo{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
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
 */class cs extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.GOOGLE_SIGN_IN_METHOD="google.com";cs.PROVIDER_ID="google.com";/**
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
 */class us extends qo{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
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
 */class hs extends qo{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.TWITTER_SIGN_IN_METHOD="twitter.com";hs.PROVIDER_ID="twitter.com";/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Gs._fromIdTokenResponse(e,s,i),o=Um(s);return new oi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Um(s);return new oi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ml extends Kn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ml(e,n,s,i)}}function KE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,r,e,s):r})}async function Vx(t,e,n=!1){const s=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",s)}/**
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
 */async function Hx(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await _o(t,KE(i,r,e,t),n);le(o.idToken,i,"internal-error");const a=vf(o.idToken);le(a,i,"internal-error");const{sub:l}=a;return le(t.uid===l,i,"user-mismatch"),oi._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),o}}/**
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
 */async function jx(t,e,n=!1){const s="signIn",i=await KE(t,s,e),r=await oi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
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
 */async function qx(t,e){return PE(t,"POST","/v1/accounts:signInWithCustomToken",kE(t,e))}/**
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
 */async function Wx(t,e){const n=uc(t),s=await qx(n,{token:e,returnSecureToken:!0}),i=await oi._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(i.user),i}function Kx(t,e,n,s){return _t(t).onIdTokenChanged(e,n,s)}function zx(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}const yl="__sak";/**
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
 */class zE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Gx(){const t=Rt();return wf(t)||cc(t)}const Qx=1e3,Yx=10;class GE extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gx()&&xx(),this.fallbackToPolling=VE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ox()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yx):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GE.type="LOCAL";const Xx=GE;/**
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
 */class QE extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QE.type="SESSION";const YE=QE;/**
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
 */function Jx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new hc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Jx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Ef(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ef("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function e1(t){_n().location.href=t}/**
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
 */function XE(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function t1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s1(){return XE()?self:null}/**
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
 */const JE="firebaseLocalStorageDb",i1=1,_l="firebaseLocalStorage",ZE="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function r1(){const t=indexedDB.deleteDatabase(JE);return new Wo(t).toPromise()}function Ch(){const t=indexedDB.open(JE,i1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_l,{keyPath:ZE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_l)?e(s):(s.close(),await r1(),e(await Ch()))})})}async function $m(t,e,n){const s=dc(t,!0).put({[ZE]:e,value:n});return new Wo(s).toPromise()}async function o1(t,e){const n=dc(t,!1).get(e),s=await new Wo(n).toPromise();return s===void 0?null:s.value}function Bm(t,e){const n=dc(t,!0).delete(e);return new Wo(n).toPromise()}const a1=800,l1=3;class eb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>l1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(s1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await t1(),!this.activeServiceWorker)return;this.sender=new Zx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||n1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await $m(e,yl,"1"),await Bm(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$m(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>o1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=dc(i,!1).getAll();return new Wo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eb.type="LOCAL";const c1=eb;/**
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
 */function u1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function h1(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=yn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",u1().appendChild(s)})}function d1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jo(3e4,6e4);/**
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
 */function f1(t,e){return e?Rn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bf extends qE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p1(t){return jx(t.auth,new bf(t),t.bypassAuthState)}function g1(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Hx(n,new bf(t),t.bypassAuthState)}async function m1(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Vx(n,new bf(t),t.bypassAuthState)}/**
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
 */class tb{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p1;case"linkViaPopup":case"linkViaRedirect":return m1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:$n(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const y1=new jo(2e3,1e4);class wi extends tb{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,y1.get())};e()}}wi.currentPopupAction=null;/**
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
 */const _1="pendingRedirect",La=new Map;class v1 extends tb{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const s=await w1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w1(t,e){const n=T1(e),s=b1(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function E1(t,e){La.set(t._key(),e)}function b1(t){return Rn(t._redirectPersistence)}function T1(t){return xa(_1,t.config.apiKey,t.name)}async function C1(t,e,n=!1){const s=uc(t),i=f1(s,e),o=await new v1(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const I1=10*60*1e3;class S1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!nb(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vm(e))}saveEventToCache(e){this.cachedEventUids.add(Vm(e)),this.lastProcessedEventTime=Date.now()}}function Vm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nb(t);default:return!1}}/**
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
 */async function R1(t,e={}){return lc(t,"GET","/v1/projects",e)}/**
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
 */const k1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N1=/^https?/;async function P1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R1(t);for(const n of e)try{if(D1(n))return}catch{}$n(t,"unauthorized-domain")}function D1(t){const e=Th(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!N1.test(n))return!1;if(k1.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const O1=new jo(3e4,6e4);function Hm(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x1(t){return new Promise((e,n)=>{var s,i,r;function o(){Hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(yn(t,"network-request-failed"))},timeout:O1.get()})}if(!((i=(s=_n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=_n().gapi)===null||r===void 0)&&r.load)o();else{const a=d1("iframefcb");return _n()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},h1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function L1(t){return Ma=Ma||x1(t),Ma}/**
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
 */const M1=new jo(5e3,15e3),F1="__/auth/iframe",U1="emulator/auth/iframe",$1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,U1):`https://${t.config.authDomain}/${F1}`,s={apiKey:e.apiKey,appName:t.name,v:dr},i=B1.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hr(s).slice(1)}`}async function H1(t){const e=await L1(t),n=_n().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:V1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$1,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=_n().setTimeout(()=>{r(o)},M1.get());function l(){_n().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const j1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q1=500,W1=600,K1="_blank",z1="http://localhost";class jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(t,e,n,s=q1,i=W1){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},j1),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Rt().toLowerCase();n&&(a=ME(c)?K1:n),LE(c)&&(e=e||z1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Dx(c)&&a!=="_self")return Q1(e||"",a),new jm(null);const h=window.open(e||"",a,u);le(h,t,"popup-blocked");try{h.focus()}catch{}return new jm(h)}function Q1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Y1="__/auth/handler",X1="emulator/auth/handler";function qm(t,e,n,s,i,r){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:dr,eventId:i};if(e instanceof WE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof qo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${J1(t)}?${hr(a).slice(1)}`}function J1({config:t}){return t.emulator?_f(t,X1):`https://${t.authDomain}/${Y1}`}/**
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
 */const _u="webStorageSupport";class Z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YE,this._completeRedirectFn=C1,this._overrideRedirectResult=E1}async _openPopup(e,n,s,i){var r;Bn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=qm(e,n,s,Th(),i);return G1(e,o,Ef())}async _openRedirect(e,n,s,i){return await this._originValidation(e),e1(qm(e,n,s,Th(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await H1(e),s=new S1(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_u];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VE()||wf()||cc()}}const eL=Z1;var Wm="@firebase/auth",Km="0.20.10";/**
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
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sL(t){ei(new Es("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{le(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),le(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HE(t)},u=new Mx(a,l,c);return gx(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ei(new Es("auth-internal",e=>{const n=uc(e.getProvider("auth").getImmediate());return(s=>new tL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Wm,Km,nL(t)),On(Wm,Km,"esm2017")}/**
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
 */const iL=5*60,rL=tw("authIdTokenMaxAge")||iL;let zm=null;const oL=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rL)return;const i=n==null?void 0:n.token;zm!==i&&(zm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aL(t=Od()){const e=Zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=px(t,{popupRedirectResolver:eL,persistence:[c1,Xx,YE]}),s=tw("authTokenSyncURL");if(s){const r=oL(s);zx(n,r,()=>r(n.currentUser)),Kx(n,o=>r(o))}const i=Zv("auth");return i&&Fx(n,`http://${i}`),n}sL("Browser");var lL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,Tf=Tf||{},ce=lL||self;function vl(){}function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cL(t){return Object.prototype.hasOwnProperty.call(t,vu)&&t[vu]||(t[vu]=++uL)}var vu="closure_uid_"+(1e9*Math.random()>>>0),uL=0;function hL(t,e,n){return t.call.apply(t.bind,arguments)}function dL(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=hL:St=dL,St.apply(null,arguments)}function Ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Rs(){this.s=this.s,this.o=this.o}var fL=0;Rs.prototype.s=!1;Rs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fL!=0)&&cL(this)};Rs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(fc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var pL=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",vl,e),ce.removeEventListener("test",vl,e)}catch{}return t}();function wl(t){return/^[\s\xa0]*$/.test(t)}var Qm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wu(t,e){return t<e?-1:t>e?1:0}function pc(){var t=ce.navigator;return t&&(t=t.userAgent)?t:""}function gn(t){return pc().indexOf(t)!=-1}function If(t){return If[" "](t),t}If[" "]=vl;function gL(t){var e=_L;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mL=gn("Opera"),Zi=gn("Trident")||gn("MSIE"),ib=gn("Edge"),Ih=ib||Zi,rb=gn("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge"))&&!(gn("Trident")||gn("MSIE"))&&!gn("Edge"),yL=pc().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge");function ob(){var t=ce.document;return t?t.documentMode:void 0}var El;e:{var Eu="",bu=function(){var t=pc();if(rb)return/rv:([^\);]+)(\)|;)/.exec(t);if(ib)return/Edge\/([\d\.]+)/.exec(t);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yL)return/WebKit\/(\S+)/.exec(t);if(mL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bu&&(Eu=bu?bu[1]:""),Zi){var Tu=ob();if(Tu!=null&&Tu>parseFloat(Eu)){El=String(Tu);break e}}El=Eu}var _L={};function vL(){return gL(function(){let t=0;const e=Qm(String(El)).split("."),n=Qm("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=wu(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||wu(i[2].length==0,r[2].length==0)||wu(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Sh;if(ce.document&&Zi){var Ym=ob();Sh=Ym||parseInt(El,10)||void 0}else Sh=void 0;var wL=Sh;function wo(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rb){e:{try{If(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:EL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wo.X.h.call(this)}}vt(wo,At);var EL={2:"touch",3:"pen",4:"mouse"};wo.prototype.h=function(){wo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zo="closure_listenable_"+(1e6*Math.random()|0),bL=0;function TL(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++bL,this.ba=this.ea=!1}function gc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Sf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ab(t){const e={};for(const n in t)e[n]=t[n];return e}const Xm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Xm.length;r++)n=Xm[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function mc(t){this.src=t,this.g={},this.h=0}mc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Rh(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new TL(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ah(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=sb(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Af="closure_lm_"+(1e6*Math.random()|0),Cu={};function cb(t,e,n,s,i){if(s&&s.once)return hb(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)cb(t,e[r],n,s,i);return null}return n=Nf(n),t&&t[zo]?t.N(e,n,Ko(s)?!!s.capture:!!s,i):ub(t,e,n,!1,s,i)}function ub(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ko(i)?!!i.capture:!!i,a=kf(t);if(a||(t[Af]=a=new mc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=CL(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(fb(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CL(){function t(n){return e.call(t.src,t.listener,n)}const e=IL;return t}function hb(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)hb(t,e[r],n,s,i);return null}return n=Nf(n),t&&t[zo]?t.O(e,n,Ko(s)?!!s.capture:!!s,i):ub(t,e,n,!0,s,i)}function db(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)db(t,e[r],n,s,i);else s=Ko(s)?!!s.capture:!!s,n=Nf(n),t&&t[zo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Rh(r,n,s,i),-1<n&&(gc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=kf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rh(e,n,s,i)),(n=-1<t?e[t]:null)&&Rf(n))}function Rf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zo])Ah(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fb(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=kf(e))?(Ah(n,t),n.h==0&&(n.src=null,e[Af]=null)):gc(t)}}}function fb(t){return t in Cu?Cu[t]:Cu[t]="on"+t}function IL(t,e){if(t.ba)t=!0;else{e=new wo(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Rf(t),t=n.call(s,e)}return t}function kf(t){return t=t[Af],t instanceof mc?t:null}var Iu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nf(t){return typeof t=="function"?t:(t[Iu]||(t[Iu]=function(e){return t.handleEvent(e)}),t[Iu])}function lt(){Rs.call(this),this.i=new mc(this),this.P=this,this.I=null}vt(lt,Rs);lt.prototype[zo]=!0;lt.prototype.removeEventListener=function(t,e,n,s){db(this,t,e,n,s)};function yt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var i=e;e=new At(s,t),lb(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ba(o,s,!0,e)&&i}if(o=e.g=t,i=ba(o,s,!0,e)&&i,i=ba(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ba(o,s,!1,e)&&i}lt.prototype.M=function(){if(lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)gc(n[s]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};lt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ba(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ah(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Pf=ce.JSON.stringify;function SL(){var t=mb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AL{constructor(){this.h=this.g=null}add(e,n){const s=pb.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RL,t=>t.reset());class RL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kL(t){ce.setTimeout(()=>{throw t},0)}function gb(t,e){kh||NL(),Nh||(kh(),Nh=!0),mb.add(t,e)}var kh;function NL(){var t=ce.Promise.resolve(void 0);kh=function(){t.then(PL)}}var Nh=!1,mb=new AL;function PL(){for(var t;t=SL();){try{t.h.call(t.g)}catch(n){kL(n)}var e=pb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nh=!1}function yc(t,e){lt.call(this),this.h=t||1,this.g=e||ce,this.j=St(this.lb,this),this.l=Date.now()}vt(yc,lt);Q=yc.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),yt(this,"tick"),this.ca&&(Df(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Df(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){yc.X.M.call(this),Df(this),delete this.g};function Of(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function yb(t){t.g=Of(()=>{t.g=null,t.i&&(t.i=!1,yb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DL extends Rs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yb(this)}M(){super.M(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){Rs.call(this),this.h=t,this.g={}}vt(Eo,Rs);var Jm=[];function _b(t,e,n,s){Array.isArray(n)||(n&&(Jm[0]=n.toString()),n=Jm);for(var i=0;i<n.length;i++){var r=cb(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function vb(t){Sf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rf(e)},t),t.g={}}Eo.prototype.M=function(){Eo.X.M.call(this),vb(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _c(){this.g=!0}_c.prototype.Aa=function(){this.g=!1};function OL(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xL(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ei(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ML(t,n)+(s?" "+s:"")})}function LL(t,e){t.info(function(){return"TIMEOUT: "+e})}_c.prototype.info=function(){};function ML(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pf(n)}catch{return e}}var hi={},Zm=null;function vc(){return Zm=Zm||new lt}hi.Pa="serverreachability";function wb(t){At.call(this,hi.Pa,t)}vt(wb,At);function bo(t){const e=vc();yt(e,new wb(e))}hi.STAT_EVENT="statevent";function Eb(t,e){At.call(this,hi.STAT_EVENT,t),this.stat=e}vt(Eb,At);function Dt(t){const e=vc();yt(e,new Eb(e,t))}hi.Qa="timingevent";function bb(t,e){At.call(this,hi.Qa,t),this.size=e}vt(bb,At);function Go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Tb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xf(){}xf.prototype.h=null;function ey(t){return t.h||(t.h=t.i())}function Cb(){}var Qo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lf(){At.call(this,"d")}vt(Lf,At);function Mf(){At.call(this,"c")}vt(Mf,At);var Ph;function Ec(){}vt(Ec,xf);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};Ph=new Ec;function Yo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Eo(this),this.O=FL,t=Ih?125:void 0,this.T=new yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ib}function Ib(){this.i=null,this.g="",this.h=!1}var FL=45e3,Dh={},bl={};Q=Yo.prototype;Q.setTimeout=function(t){this.O=t};function Oh(t,e,n){t.K=1,t.v=Tc(Vn(e)),t.s=n,t.P=!0,Sb(t,null)}function Sb(t,e){t.F=Date.now(),Xo(t),t.A=Vn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),xb(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ib,t.g=tT(t.l,n?e:null,!t.s),0<t.N&&(t.L=new DL(St(t.La,t,t.g),t.N)),_b(t.S,t.g,"readystatechange",t.ib),e=t.H?ab(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bo(),OL(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&kn(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const u=kn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ih||this.g&&(this.h.h||this.g.fa()||iy(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?bo(3):bo(2)),bc(this);var n=this.g.aa();this.Y=n;t:if(Ab(this)){var s=iy(this.g);t="";var i=s.length,r=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bs(this),Xr(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,xL(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wl(a)){var c=a;break t}}c=null}if(n=c)Ei(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xh(this,n);else{this.i=!1,this.o=3,Dt(12),Bs(this),Xr(this);break e}}this.P?(Rb(this,u,o),Ih&&this.i&&u==3&&(_b(this.S,this.T,"tick",this.hb),this.T.start())):(Ei(this.j,this.m,o,null),xh(this,o)),u==4&&Bs(this),this.i&&!this.I&&(u==4?Xb(this.l,this):(this.i=!1,Xo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),Bs(this),Xr(this)}}}catch{}finally{}};function Ab(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Rb(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=UL(t,n),i==bl){e==4&&(t.o=4,Dt(14),s=!1),Ei(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dh){t.o=4,Dt(15),Ei(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ei(t.j,t.m,i,null),xh(t,i);Ab(t)&&i!=bl&&i!=Dh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),jf(e),e.K=!0,Dt(11))):(Ei(t.j,t.m,n,"[Invalid Chunked Response]"),Bs(t),Xr(t))}Q.hb=function(){if(this.g){var t=kn(this.g),e=this.g.fa();this.C<e.length&&(bc(this),Rb(this,t,e),this.i&&t!=4&&Xo(this))}};function UL(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?bl:(n=Number(e.substring(n,s)),isNaN(n)?Dh:(s+=1,s+n>e.length?bl:(e=e.substr(s,n),t.C=s+n,e)))}Q.cancel=function(){this.I=!0,Bs(this)};function Xo(t){t.V=Date.now()+t.O,kb(t,t.O)}function kb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Go(St(t.gb,t),e)}function bc(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(LL(this.j,this.A),this.K!=2&&(bo(),Dt(17)),Bs(this),this.o=2,Xr(this)):kb(this,this.V-t)};function Xr(t){t.l.G==0||t.I||Xb(t.l,t)}function Bs(t){bc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Df(t.T),vb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lh(n.h,t))){if(!t.J&&Lh(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Il(n),Sc(n);else break e;Hf(n),Dt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Go(St(n.cb,n),6e3));if(1>=Fb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vs(n,11)}else if((t.J||n.g==t)&&Il(n),!wl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ff(r,r.h),r.h=null))}if(s.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,qe(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=eT(s,s.H?s.ka:null,s.V),o.J){Ub(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(bc(a),Xo(a)),s.g=o}else Qb(s);0<n.i.length&&Ac(n)}else c[0]!="stop"&&c[0]!="close"||Vs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vs(n,7):Vf(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}bo(4)}catch{}}function $L(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function BL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BL(t),s=$L(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Pb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qs){this.h=e!==void 0?e:t.h,Tl(this,t.j),this.s=t.s,this.g=t.g,Cl(this,t.m),this.l=t.l,e=t.i;var n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ty(this,n),this.o=t.o}else t&&(n=String(t).match(Pb))?(this.h=!!e,Tl(this,n[1]||"",!0),this.s=xr(n[2]||""),this.g=xr(n[3]||"",!0),Cl(this,n[4]),this.l=xr(n[5]||"",!0),ty(this,n[6]||"",!0),this.o=xr(n[7]||"")):(this.h=!!e,this.i=new To(null,this.h))}Qs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,ny,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lr(e,ny,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lr(n,n.charAt(0)=="/"?qL:jL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,KL)),t.join("")};function Vn(t){return new Qs(t)}function Tl(t,e,n){t.j=n?xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ty(t,e,n){e instanceof To?(t.i=e,zL(t.i,t.h)):(n||(e=Lr(e,WL)),t.i=new To(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function Tc(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ny=/[#\/\?@]/g,jL=/[#\?:]/g,qL=/[#\?]/g,WL=/[#\?@]/g,KL=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ks(t){t.g||(t.g=new Map,t.h=0,t.i&&VL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=To.prototype;Q.add=function(t,e){ks(this),this.i=null,t=mr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Db(t,e){ks(t),e=mr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ob(t,e){return ks(t),e=mr(t,e),t.g.has(e)}Q.forEach=function(t,e){ks(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};Q.oa=function(){ks(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};Q.W=function(t){ks(this);let e=[];if(typeof t=="string")Ob(this,t)&&(e=e.concat(this.g.get(mr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return ks(this),this.i=null,t=mr(this,t),Ob(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xb(t,e,n){Db(t,e),0<n.length&&(t.i=null,t.g.set(mr(t,e),Cf(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function mr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zL(t,e){e&&!t.j&&(ks(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Db(this,s),xb(this,i,n))},t)),t.j=e}var GL=class{constructor(t,e){this.h=t,this.g=e}};function Lb(t){this.l=t||QL,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ga&&ce.g.Ga()&&ce.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QL=10;function Mb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fb(t){return t.h?1:t.g?t.g.size:0}function Lh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ff(t,e){t.g?t.g.add(e):t.h=e}function Ub(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lb.prototype.cancel=function(){if(this.i=$b(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $b(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cf(t.i)}function Uf(){}Uf.prototype.stringify=function(t){return ce.JSON.stringify(t,void 0)};Uf.prototype.parse=function(t){return ce.JSON.parse(t,void 0)};function YL(){this.g=new Uf}function XL(t,e,n){const s=n||"";try{Nb(t,function(i,r){let o=i;Ko(i)&&(o=Pf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function JL(t,e){const n=new _c;if(ce.Image){const s=new Image;s.onload=Ea(Ta,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ea(Ta,n,s,"TestLoadImage: error",!1,e),s.onabort=Ea(Ta,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ea(Ta,n,s,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ta(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Jo(t){this.l=t.ac||null,this.j=t.jb||!1}vt(Jo,xf);Jo.prototype.g=function(){return new Cc(this.l,this.j)};Jo.prototype.i=function(t){return function(){return t}}({});function Cc(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$f,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(Cc,lt);var $f=0;Q=Cc.prototype;Q.open=function(t,e){if(this.readyState!=$f)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ce).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=$f};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ce.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Bb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zo(this):Co(this),this.readyState==3&&Bb(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,Zo(this))};Q.Ua=function(t){this.g&&(this.response=t,Zo(this))};Q.ga=function(){this.g&&Zo(this)};function Zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZL=ce.JSON.parse;function Qe(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vb,this.K=this.L=!1}vt(Qe,lt);var Vb="",eM=/^https?$/i,tM=["POST","PUT"];Q=Qe.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?ey(this.u):ey(Ph),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){sy(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ce.FormData&&t instanceof ce.FormData,!(0<=sb(tM,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qb(this),0<this.B&&((this.K=nM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=Of(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){sy(this,r)}};function nM(t){return Zi&&vL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof Tf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function sy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hb(t),Ic(t)}function Hb(t){t.D||(t.D=!0,yt(t,"complete"),yt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),Ic(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),Qe.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?jb(this):this.fb())};Q.fb=function(){jb(this)};function jb(t){if(t.h&&typeof Tf<"u"&&(!t.C[1]||kn(t)!=4||t.aa()!=2)){if(t.v&&kn(t)==4)Of(t.Ha,0,t);else if(yt(t,"readystatechange"),kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Pb)[1]||null;if(!i&&ce.self&&ce.self.location){var r=ce.self.location.protocol;i=r.substr(0,r.length-1)}s=!eM.test(i?i.toLowerCase():"")}n=s}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var o=2<kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Hb(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){qb(t);const n=t.g,s=t.C[0]?vl:null;t.g=null,t.C=null,e||yt(t,"ready");try{n.onreadystatechange=s}catch{}}}function qb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZL(e)}};function iy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wb(t){let e="";return Sf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Bf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Wb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):qe(t,e,n))}function Nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kb(t){this.Ca=0,this.i=[],this.j=new _c,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Nr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Nr("baseRetryDelayMs",5e3,t),this.bb=Nr("retryDelaySeedMs",1e4,t),this.$a=Nr("forwardChannelMaxRetries",2,t),this.ta=Nr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Lb(t&&t.concurrentRequestLimit),this.Fa=new YL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=Kb.prototype;Q.ma=8;Q.G=1;function Vf(t){if(zb(t),t.G==3){var e=t.U++,n=Vn(t.F);qe(n,"SID",t.I),qe(n,"RID",e),qe(n,"TYPE","terminate"),ea(t,n),e=new Yo(t,t.j,e,void 0),e.K=2,e.v=Tc(Vn(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon&&(n=ce.navigator.sendBeacon(e.v.toString(),"")),!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=tT(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xo(e)}Zb(t)}function Sc(t){t.g&&(jf(t),t.g.cancel(),t.g=null)}function zb(t){Sc(t),t.u&&(ce.clearTimeout(t.u),t.u=null),Il(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function Ac(t){Mb(t.h)||t.m||(t.m=!0,gb(t.Ja,t),t.C=0)}function sM(t,e){return Fb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Go(St(t.Ja,t,e),Jb(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Yo(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ab(r),lb(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gb(this,i,e),n=Vn(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),ea(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Wb(r)))+"&"+e:this.o&&Bf(n,this.o,r)),Ff(this.h,i),this.Ya&&qe(n,"TYPE","init"),this.O?(qe(n,"$req",e),qe(n,"SID","null"),i.Z=!0,Oh(i,n,null)):Oh(i,n,e),this.G=2}}else this.G==3&&(t?ry(this,t):this.i.length==0||Mb(this.h)||ry(this))};function ry(t,e){var n;e?n=e.m:n=t.U++;const s=Vn(t.F);qe(s,"SID",t.I),qe(s,"RID",n),qe(s,"AID",t.T),ea(t,s),t.o&&t.s&&Bf(s,t.o,t.s),n=new Yo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Gb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ff(t.h,n),Oh(n,s,e)}function ea(t,e){t.ia&&Sf(t.ia,function(n,s){qe(e,s,n)}),t.l&&Nb({},function(n,s){qe(e,s,n)})}function Gb(t,e,n){n=Math.min(t.i.length,n);var s=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{XL(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Qb(t){t.g||t.u||(t.Z=1,gb(t.Ia,t),t.A=0)}function Hf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Go(St(t.Ia,t),Jb(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,Yb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Go(St(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Dt(10),Sc(this),Yb(this))};function jf(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function Yb(t){t.g=new Yo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Vn(t.sa);qe(e,"RID","rpc"),qe(e,"SID",t.I),qe(e,"CI",t.L?"0":"1"),qe(e,"AID",t.T),qe(e,"TYPE","xmlhttp"),ea(t,e),t.o&&t.s&&Bf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Tc(Vn(e)),n.s=null,n.P=!0,Sb(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,Sc(this),Hf(this),Dt(19))};function Il(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function Xb(t,e){var n=null;if(t.g==e){Il(t),jf(t),t.g=null;var s=2}else if(Lh(t.h,e))n=e.D,Ub(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=vc(),yt(s,new bb(s,n)),Ac(t)}else Qb(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&sM(t,e)||s==2&&Hf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Vs(t,5);break;case 4:Vs(t,10);break;case 3:Vs(t,6);break;default:Vs(t,2)}}}function Jb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Vs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=St(t.kb,t);n||(n=new Qs("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||Tl(n,"https"),Tc(n)),JL(n.toString(),s)}else Dt(2);t.G=0,t.l&&t.l.va(e),Zb(t),zb(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Zb(t){if(t.G=0,t.la=[],t.l){const e=$b(t.h);(e.length!=0||t.i.length!=0)&&(Gm(t.la,e),Gm(t.la,t.i),t.h.i.length=0,Cf(t.i),t.i.length=0),t.l.ua()}}function eT(t,e,n){var s=n instanceof Qs?Vn(n):new Qs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Cl(s,s.m);else{var i=ce.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Qs(null,void 0);s&&Tl(r,s),e&&(r.g=e),i&&Cl(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&qe(s,n,e),qe(s,"VER",t.ma),ea(t,s),s}function tT(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Qe(new Jo({jb:!0})):new Qe(t.ra),e.Ka(t.H),e}function nT(){}Q=nT.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function Sl(){if(Zi&&!(10<=Number(wL)))throw Error("Environmental error: no available transport.")}Sl.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){lt.call(this),this.g=new Kb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}vt(Kt,lt);Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=eT(t,null,t.V),Ac(t)};Kt.prototype.close=function(){Vf(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pf(t),t=n);e.i.push(new GL(e.ab++,t)),e.G==3&&Ac(e)};Kt.prototype.M=function(){this.g.l=null,delete this.j,Vf(this.g),delete this.g,Kt.X.M.call(this)};function sT(t){Lf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(sT,Lf);function iT(){Mf.call(this),this.status=1}vt(iT,Mf);function yr(t){this.g=t}vt(yr,nT);yr.prototype.xa=function(){yt(this.g,"a")};yr.prototype.wa=function(t){yt(this.g,new sT(t))};yr.prototype.va=function(t){yt(this.g,new iT)};yr.prototype.ua=function(){yt(this.g,"b")};Sl.prototype.createWebChannel=Sl.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;Tb.COMPLETE="complete";Cb.EventType=Qo;Qo.OPEN="a";Qo.CLOSE="b";Qo.ERROR="c";Qo.MESSAGE="d";lt.prototype.listen=lt.prototype.N;Qe.prototype.listenOnce=Qe.prototype.O;Qe.prototype.getLastError=Qe.prototype.Oa;Qe.prototype.getLastErrorCode=Qe.prototype.Ea;Qe.prototype.getStatus=Qe.prototype.aa;Qe.prototype.getResponseJson=Qe.prototype.Sa;Qe.prototype.getResponseText=Qe.prototype.fa;Qe.prototype.send=Qe.prototype.da;Qe.prototype.setWithCredentials=Qe.prototype.Ka;var iM=function(){return new Sl},rM=function(){return vc()},Su=wc,oM=Tb,aM=hi,oy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lM=Jo,Ca=Cb,cM=Qe;const ay="@firebase/firestore";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let _r="9.12.1";/**
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
 */const ai=new Jl("@firebase/firestore");function ly(){return ai.logLevel}function te(t,...e){if(ai.logLevel<=Ae.DEBUG){const n=e.map(qf);ai.debug(`Firestore (${_r}): ${t}`,...n)}}function Hn(t,...e){if(ai.logLevel<=Ae.ERROR){const n=e.map(qf);ai.error(`Firestore (${_r}): ${t}`,...n)}}function Mh(t,...e){if(ai.logLevel<=Ae.WARN){const n=e.map(qf);ai.warn(`Firestore (${_r}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function Je(t,e){t||fe()}function Re(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ys{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class hM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dM{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ys,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ys)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string"),new rT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new Et(e)}}class fM{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Je(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class pM{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new fM(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mM{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.A=n.token,new gM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class oT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=yM(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function xe(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Ue(0,0))}static max(){return new _e(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Io{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(),s===void 0?s=e.length-n:s>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Io.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Io?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Io{construct(e,n,s){return new Be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const _M=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Io{construct(e,n,s){return new Pt(e,n,s)}static isValidIdentifier(e){return _M.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}function vM(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new Cs(i,se.empty(),e)}function wM(t){return new Cs(t.readTime,t.key,-1)}class Cs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Cs(_e.min(),se.empty(),-1)}static max(){return new Cs(_e.max(),se.empty(),-1)}}function EM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const bM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wf(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==bM)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(i=>i?O.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new O((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new O((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function na(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Kf.at=-1;class ct{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=r!=null?r:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ft(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uy(this.data.getIterator())}getIteratorFrom(e){return new uy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class uy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ys{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Ys([])}unionWith(e){let n=new nt(Pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ys(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const CM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(Je(!!t),typeof t=="string"){let e=0;const n=CM.exec(t);if(Je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function lT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cT(t){const e=t.mapValue.fields.__previous_value__;return lT(e)?cT(e):e}function So(t){const e=Is(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class IM{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}function Rc(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function SM(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lT(t)?4:AM(t)?9007199254740991:10:fe()}function wn(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Is(s.timestampValue),o=Is(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Xe(s.doubleValue),o=Xe(i.doubleValue);return r===o?Al(r)===Al(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(cy(r)!==cy(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wn(r[a],o[a])))return!1;return!0}(t,e);default:return fe()}}function Ro(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function nr(t,e){if(t===e)return 0;const n=li(t),s=li(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Xe(i.integerValue||i.doubleValue),a=Xe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(So(t),So(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=tr(i),a=tr(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=xe(o[l],a[l]);if(c!==0)return c}return xe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=xe(Xe(i.latitude),Xe(r.latitude));return o!==0?o:xe(Xe(i.longitude),Xe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=nr(o[l],a[l]);if(c)return c}return xe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Sa.mapValue&&r===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(r===Sa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=xe(a[u],c[u]);if(h!==0)return h;const d=nr(o[a[u]],l[c[u]]);if(d!==0)return d}return xe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw fe()}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Is(t),s=Is(e),i=xe(n.seconds,s.seconds);return i!==0?i:xe(n.nanos,s.nanos)}function xi(t){return Fh(t)}function Fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Is(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,se.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Fh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Fh(s.fields[a])}`;return r+"}"}(t.mapValue):fe();var e,n}function dy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uh(t){return!!t&&"integerValue"in t}function zf(t){return!!t&&"arrayValue"in t}function fy(t){return!!t&&"nullValue"in t}function py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Au(t){return!!t&&"mapValue"in t}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return na(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=Pt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Jr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Au(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){na(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new mn(Jr(this.value))}}/**
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
 */class gt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new gt(e,0,_e.min(),_e.min(),mn.empty(),0)}static newFoundDocument(e,n,s){return new gt(e,1,n,_e.min(),s,0)}static newNoDocument(e,n){return new gt(e,2,n,_e.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,_e.min(),mn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class RM{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function gy(t,e=null,n=[],s=[],i=null,r=null,o=null){return new RM(t,e,n,s,i,r,o)}function Gf(t){const e=Re(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+xi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>xi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>xi(s)).join(",")),e.ht=n}return e.ht}function kM(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xi(s.value)}`;var s}).join(", ")}]`),Rc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>xi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>xi(n)).join(",")),`Target(${e})`}function Qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!FM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!wn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yy(t.startAt,e.startAt)&&yy(t.endAt,e.endAt)}function $h(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ot extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new NM(e,n,s):n==="array-contains"?new OM(e,s):n==="in"?new xM(e,s):n==="not-in"?new LM(e,s):n==="array-contains-any"?new MM(e,s):new Ot(e,n,s)}static lt(e,n,s){return n==="in"?new PM(e,s):new DM(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(nr(n,this.value)):n!==null&&li(this.value)===li(n)&&this.ft(nr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class NM extends Ot{constructor(e,n,s){super(e,n,s),this.key=se.fromName(s.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.ft(n)}}class PM extends Ot{constructor(e,n){super(e,"in",n),this.keys=uT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DM extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=uT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>se.fromName(s.referenceValue))}class OM extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zf(n)&&Ro(n.arrayValue,this.value)}}class xM extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class LM extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ro(this.value.arrayValue,n)}}class MM extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ro(this.value.arrayValue,s))}}class Rl{constructor(e,n){this.position=e,this.inclusive=n}}class Li{constructor(e,n="asc"){this.field=e,this.dir=n}}function FM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function my(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=se.comparator(se.fromName(o.referenceValue),n.key):s=nr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vr{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function UM(t,e,n,s,i,r,o,a){return new vr(t,e,n,s,i,r,o,a)}function kc(t){return new vr(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xf(t){for(const e of t.filters)if(e.dt())return e.field;return null}function hT(t){return t.collectionGroup!==null}function ko(t){const e=Re(t);if(e._t===null){e._t=[];const n=Xf(e),s=Yf(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Li(n)),e._t.push(new Li(Pt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Li(Pt.keyField(),r))}}}return e._t}function jn(t){const e=Re(t);if(!e.wt)if(e.limitType==="F")e.wt=gy(e.path,e.collectionGroup,ko(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ko(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Li(r.field,o))}const s=e.endAt?new Rl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rl(e.startAt.position,e.startAt.inclusive):null;e.wt=gy(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function kl(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return Qf(jn(t),jn(e))&&t.limitType===e.limitType}function dT(t){return`${Gf(jn(t))}|lt:${t.limitType}`}function Bh(t){return`Query(target=${kM(jn(t))}; limitType=${t.limitType})`}function Jf(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):se.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=my(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ko(n),s)||n.endAt&&!function(i,r,o){const a=my(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ko(n),s))}(t,e)}function $M(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let s=!1;for(const i of ko(t)){const r=BM(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function BM(t,e,n){const s=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?nr(a,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe()}}/**
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
 */function pT(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function gT(t){return{integerValue:""+t}}function VM(t,e){return SM(e)?gT(e):pT(t,e)}/**
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
 */class Pc{constructor(){this._=void 0}}function HM(t,e,n){return t instanceof Vh?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Nl?mT(t,e):t instanceof Pl?yT(t,e):function(s,i){const r=qM(s,i),o=vy(r)+vy(s.yt);return Uh(r)&&Uh(s.yt)?gT(o):pT(s.It,o)}(t,e)}function jM(t,e,n){return t instanceof Nl?mT(t,e):t instanceof Pl?yT(t,e):n}function qM(t,e){return t instanceof Hh?Uh(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Vh extends Pc{}class Nl extends Pc{constructor(e){super(),this.elements=e}}function mT(t,e){const n=_T(e);for(const s of t.elements)n.some(i=>wn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Pl extends Pc{constructor(e){super(),this.elements=e}}function yT(t,e){let n=_T(e);for(const s of t.elements)n=n.filter(i=>!wn(i,s));return{arrayValue:{values:n}}}class Hh extends Pc{constructor(e,n){super(),this.It=e,this.yt=n}}function vy(t){return Xe(t.integerValue||t.doubleValue)}function _T(t){return zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WM(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Nl&&s instanceof Nl||n instanceof Pl&&s instanceof Pl?er(n.elements,s.elements,wn):n instanceof Hh&&s instanceof Hh?wn(n.yt,s.yt):n instanceof Vh&&s instanceof Vh}(t.transform,e.transform)}class Xs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xs}static exists(e){return new Xs(void 0,e)}static updateTime(e){return new Xs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zf{}function vT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zM(t.key,Xs.none()):new ep(t.key,t.data,Xs.none());{const n=t.data,s=mn.empty();let i=new nt(Pt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Dc(t.key,s,new Ys(i.toArray()),Xs.none())}}function KM(t,e,n){t instanceof ep?function(s,i,r){const o=s.value.clone(),a=Ey(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dc?function(s,i,r){if(!Fa(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ey(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(wT(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Zr(t,e,n,s){return t instanceof ep?function(i,r,o,a){if(!Fa(i.precondition,r))return o;const l=i.value.clone(),c=by(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Dc?function(i,r,o,a){if(!Fa(i.precondition,r))return o;const l=by(i.fieldTransforms,a,r),c=r.data;return c.setAll(wT(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Fa(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&er(n,s,(i,r)=>WM(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ep extends Zf{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dc extends Zf{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ey(t,e,n){const s=new Map;Je(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,jM(o,a,n[i]))}return s}function by(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,HM(r,o,e))}return s}class zM extends Zf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GM{constructor(e){this.count=e}}/**
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
 */var Ye,be;function ET(t){if(t===void 0)return Hn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ye.OK:return x.OK;case Ye.CANCELLED:return x.CANCELLED;case Ye.UNKNOWN:return x.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return x.INTERNAL;case Ye.UNAVAILABLE:return x.UNAVAILABLE;case Ye.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ye.NOT_FOUND:return x.NOT_FOUND;case Ye.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ye.ABORTED:return x.ABORTED;case Ye.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ye.DATA_LOSS:return x.DATA_LOSS;default:return fe()}}(be=Ye||(Ye={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){na(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return aT(this.inner)}size(){return this.innerSize}}/**
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
 */const QM=new ct(se.comparator);function Ss(){return QM}const bT=new ct(se.comparator);function Mr(...t){let e=bT;for(const n of t)e=e.insert(n.key,n);return e}function YM(t){let e=bT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Hs(){return eo()}function TT(){return eo()}function eo(){return new wr(t=>t.toString(),(t,e)=>t.isEqual(e))}new ct(se.comparator);const XM=new nt(se.comparator);function Ie(...t){let e=XM;for(const n of t)e=e.add(n);return e}const JM=new nt(xe);function CT(){return JM}/**
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
 */class Oc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Oc(_e.min(),i,CT(),Ss(),Ie())}}class sa{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new sa(s,n,Ie(),Ie(),Ie())}}/**
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
 */class Ua{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class IT{constructor(e,n){this.targetId=e,this.At=n}}class ST{constructor(e,n,s=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ty{constructor(){this.Rt=0,this.bt=Iy(),this.Pt=kt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Ie(),n=Ie(),s=Ie();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:fe()}}),new sa(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Iy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ZM{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ss(),this.qt=Cy(),this.Kt=new nt(xe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if($h(r))if(s===0){const o=new se(r.path);this.jt(n,o,gt.newNoDocument(o,_e.min()))}else Je(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&$h(a.target)){const l=new se(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,gt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Oc(e,n,this.Kt,this.Ut,s);return this.Ut=Ss(),this.qt=Cy(),this.Kt=new nt(xe),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Ty,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new nt(xe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ty),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Cy(){return new ct(se.comparator)}function Iy(){return new ct(se.comparator)}/**
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
 */const eF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class nF{constructor(e,n){this.databaseId=e,this.gt=n}}function jh(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AT(t,e){return t.gt?e.toBase64():e.toUint8Array()}function No(t){return Je(!!t),_e.fromTimestamp(function(e){const n=Is(e);return new Ue(n.seconds,n.nanos)}(t))}function RT(t,e){return function(n){return new Be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kT(t){const e=Be.fromString(t);return Je(DT(e)),e}function Ru(t,e){const n=kT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(NT(n))}function qh(t,e){return RT(t.databaseId,e)}function sF(t){const e=kT(t);return e.length===4?Be.emptyPath():NT(e)}function Sy(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NT(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iF(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(Je(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Je(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:ET(l.code);return new K(c,l.message||"")}(o);n=new ST(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ru(t,s.document.name),r=No(s.document.updateTime),o=new mn({mapValue:{fields:s.document.fields}}),a=gt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Ua(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ru(t,s.document),r=s.readTime?No(s.readTime):_e.min(),o=gt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ru(t,s.document),r=s.removedTargetIds||[];n=new Ua([],r,i,null)}else{if(!("filter"in e))return fe();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new GM(i),o=s.targetId;n=new IT(o,r)}}return n}function rF(t,e){return{documents:[qh(t,e.path)]}}function oF(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=qh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(py(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NAN"}};if(fy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(py(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NOT_NAN"}};if(fy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(h.field),op:uF(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:mi(u.field),direction:cF(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||Rc(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function aF(t){let e=sF(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Je(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=PT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Li(bi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Rc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Rl(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Rl(d,h)}(n.endAt)),UM(e,i,o,r,a,"F",l,c)}function lF(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function PT(t){return t?t.unaryFilter!==void 0?[dF(t)]:t.fieldFilter!==void 0?[hF(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>PT(e)).reduce((e,n)=>e.concat(n)):fe():[]}function cF(t){return eF[t]}function uF(t){return tF[t]}function mi(t){return{fieldPath:t.canonicalString()}}function bi(t){return Pt.fromServerFormat(t.fieldPath)}function hF(t){return Ot.create(bi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(t.fieldFilter.op),t.fieldFilter.value)}function dF(t){switch(t.unaryFilter.op){case"IS_NAN":const e=bi(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=bi(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bi(t.unaryFilter.field);return Ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bi(t.unaryFilter.field);return Ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}function DT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fF{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&KM(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=TT();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=vT(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>wy(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>wy(n,s))}}/**
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
 */class pF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Js{constructor(e,n,s,i,r=_e.min(),o=_e.min(),a=kt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class gF{constructor(e){this.re=e}}function mF(t){const e=aF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kl(e,e.limit,"L"):e}/**
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
 */class yF{constructor(){this.Ye=new _F}addToCollectionParentIndex(e,n){return this.Ye.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Cs.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Cs.min())}updateCollectionGroup(e,n,s){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class _F{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new nt(Be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */class sr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sr(0)}static vn(){return new sr(-1)}}/**
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
 */class vF{constructor(){this.changes=new wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EF{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Zr(s.mutation,i,Ys.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ie()){const i=Hs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Mr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Hs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ss();const o=eo(),a=eo();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Dc)?r=r.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Zr(u.mutation,c,u.mutation.getFieldMask(),Ue.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new wF(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=eo();let i=new ct((o,a)=>o-a),r=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ys.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=TT();u.forEach(d=>{if(!r.has(d)){const f=vT(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):O.resolve(Hs());let a=-1,l=r;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?O.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ie())).next(u=>({batchId:a,changes:YM(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(s=>{let i=Mr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Mr();return this.indexManager.getCollectionParents(e,i).next(o=>O.forEach(o,a=>{const l=function(c,u){return new vr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,gt.newInvalidDocument(c)))});let o=Mr();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Zr(c.mutation,l,Ys.empty(),Ue.now()),Jf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):O.resolve(gt.newInvalidDocument(n))}}/**
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
 */class bF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return O.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:No(s.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:mF(s.bundledQuery),readTime:No(s.readTime)}}(n)),O.resolve()}}/**
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
 */class TF{constructor(){this.overlays=new ct(se.comparator),this.es=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hs();return O.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),O.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),O.resolve()}getOverlaysForCollection(e,n,s){const i=Hs(),r=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Hs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Hs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return O.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pF(n,s));let r=this.es.get(n);r===void 0&&(r=Ie(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class tp{constructor(){this.ns=new nt(it.ss),this.rs=new nt(it.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new it(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new it(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new se(new Be([])),s=new it(n,e),i=new it(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new se(new Be([])),s=new it(n,e),i=new it(n,e+1);let r=Ie();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new it(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class it{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return se.comparator(e.key,n.key)||xe(e._s,n._s)}static os(e,n){return xe(e._s,n._s)||se.comparator(e.key,n.key)}}/**
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
 */class CF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new nt(it.ss)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fF(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new it(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return O.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),O.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new nt(xe);return n.forEach(i=>{const r=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),O.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;se.isDocumentKey(r)||(r=r.child(""));const o=new it(new se(r),0);let a=new nt(xe);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),O.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Je(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return O.forEach(n.mutations,i=>{const r=new it(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new it(n,0),i=this.gs.firstAfterOrEqual(s);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IF{constructor(e){this.Es=e,this.docs=new ct(se.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=Ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():gt.newInvalidDocument(i))}),O.resolve(s)}getAllFromCollection(e,n,s){let i=Ss();const r=new se(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||EM(wM(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,s,i){fe()}As(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new SF(this)}getSize(e){return O.resolve(this.size)}}class SF extends vF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class AF{constructor(e){this.persistence=e,this.Rs=new wr(n=>Gf(n),Qf),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tp,this.targetCount=0,this.vs=sr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),O.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Dn(n),O.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(r).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Ps.containsKey(n))}}/**
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
 */class RF{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Kf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new AF(this),this.indexManager=new yF,this.remoteDocumentCache=function(s){return new IF(s)}(s=>this.referenceDelegate.xs(s)),this.It=new gF(n),this.Ns=new bF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new CF(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const i=new kF(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return O.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class kF extends TM{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Fs=new tp,this.$s=null}static Bs(e){return new np(e)}get Ls(){if(this.$s)return this.$s;throw fe()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),O.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Ls,s=>{const i=se.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,_e.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return O.or([()=>O.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class sp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Ie(),i=Ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new sp(e,n.fromCache,s,i)}}/**
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
 */class NF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(_y(n))return O.resolve(null);let s=jn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kl(n,null,"F"),s=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ie(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,kl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return _y(n)||i.isEqual(_e.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(ly()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bh(n)),this.Bi(e,o,n,vM(i,-1)))})}Fi(e,n){let s=new nt(fT(e));return n.forEach((i,r)=>{Jf(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return ly()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Bh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Cs.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class PF{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ct(xe),this.qi=new wr(r=>Gf(r),Qf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function DF(t,e,n,s){return new PF(t,e,n,s)}async function OT(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Ie();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function xT(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function OF(t,e){const n=Re(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(kt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,v,b){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=Ss(),c=Ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(xF(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(_e.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return O.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function xF(t,e,n){let s=Ie(),i=Ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ss();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function LF(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,O.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Js(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Wh(t,e,n){const s=Re(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Ay(t,e,n){const s=Re(t);let i=_e.min(),r=Ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Re(a),h=u.qi.get(c);return h!==void 0?O.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(s,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:_e.min(),n?r:Ie())).next(a=>(MF(s,$M(e),a),{documents:a,Hi:r})))}function MF(t,e,n){let s=t.Ki.get(e)||_e.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Ry{constructor(){this.activeTargetIds=CT()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FF{constructor(){this.Lr=new Ry,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ry,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UF{qr(e){}shutdown(){}}/**
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
 */class ky{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const $F={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class BF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class VF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);te("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(te("RestConnection","Received: ",l),l),l=>{throw Mh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+_r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=$F[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new cM;a.setWithCredentials(!0),a.listenOnce(oM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Su.NO_ERROR:const c=a.getResponseJson();te("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Su.TIMEOUT:te("Connection",'RPC "'+e+'" timed out'),o(new K(x.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const u=a.getStatus();if(te("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(p)>=0?p:x.UNKNOWN}(h.status);o(new K(d,h.message))}else o(new K(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(x.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{te("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=iM(),o=rM(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lM({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");te("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new BF({Hr:p=>{h?te("Connection","Not sending because WebChannel is closed:",p):(u||(te("Connection","Opening WebChannel transport."),c.open(),u=!0),te("Connection","WebChannel sending:",p),c.send(p))},Jr:()=>c.close()}),f=(p,v,b)=>{p.listen(v,_=>{try{b(_)}catch(g){setTimeout(()=>{throw g},0)}})};return f(c,Ca.EventType.OPEN,()=>{h||te("Connection","WebChannel transport opened.")}),f(c,Ca.EventType.CLOSE,()=>{h||(h=!0,te("Connection","WebChannel transport closed"),d.io())}),f(c,Ca.EventType.ERROR,p=>{h||(h=!0,Mh("Connection","WebChannel transport errored:",p),d.io(new K(x.UNAVAILABLE,"The operation could not be completed")))}),f(c,Ca.EventType.MESSAGE,p=>{var v;if(!h){const b=p.data[0];Je(!!b);const _=b,g=_.error||((v=_[0])===null||v===void 0?void 0:v.error);if(g){te("Connection","WebChannel received error:",g);const w=g.status;let C=function(B){const R=Ye[B];if(R!==void 0)return ET(R)}(w),P=g.message;C===void 0&&(C=x.INTERNAL,P="Unknown error status: "+w+" with message "+g.message),h=!0,d.io(new K(C,P)),c.close()}else te("Connection","WebChannel received:",b),d.ro(b)}}),f(o,aM.STAT_EVENT,p=>{p.stat===oy.PROXY?te("Connection","Detected buffering proxy"):p.stat===oy.NOPROXY&&te("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ku(){return typeof document<"u"?document:null}/**
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
 */function xc(t){return new nF(t,!0)}class LT{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class HF{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new LT(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new K(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jF extends HF{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=iF(this.It,e),s=function(i){if(!("targetChange"in i))return _e.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?_e.min():r.readTime?No(r.readTime):_e.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Sy(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=$h(a)?{documents:rF(i,a)}:{query:oF(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=AT(i,r.resumeToken):r.snapshotVersion.compareTo(_e.min())>0&&(o.readTime=jh(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=lF(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Sy(this.It),n.removeTarget=e,this.Lo(n)}}/**
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
 */class qF extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(x.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(x.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class WF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Hn(n),this.uu=!1):te("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class KF{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{ra(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Re(a);l.wu.add(4),await ia(l),l.yu.set("Unknown"),l.wu.delete(4),await Lc(l)}(this))})}),this.yu=new WF(s,i)}}async function Lc(t){if(ra(t))for(const e of t.mu)await e(!0)}async function ia(t){for(const e of t.mu)await e(!1)}function MT(t,e){const n=Re(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),op(n)?rp(n):Er(n).Oo()&&ip(n,e))}function FT(t,e){const n=Re(t),s=Er(n);n._u.delete(e),s.Oo()&&UT(n,e),n._u.size===0&&(s.Oo()?s.$o():ra(n)&&n.yu.set("Unknown"))}function ip(t,e){t.pu.Mt(e.targetId),Er(t).Ho(e)}function UT(t,e){t.pu.Mt(e),Er(t).Jo(e)}function rp(t){t.pu=new ZM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Er(t).start(),t.yu.cu()}function op(t){return ra(t)&&!Er(t).ko()&&t._u.size>0}function ra(t){return Re(t).wu.size===0}function $T(t){t.pu=void 0}async function zF(t){t._u.forEach((e,n)=>{ip(t,e)})}async function GF(t,e){$T(t),op(t)?(t.yu.lu(e),rp(t)):t.yu.set("Unknown")}async function QF(t,e,n){if(t.yu.set("Online"),e instanceof ST&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ny(t,s)}else if(e instanceof Ua?t.pu.Gt(e):e instanceof IT?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(_e.min()))try{const s=await xT(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(kt.EMPTY_BYTE_STRING,l.snapshotVersion)),UT(i,a);const c=new Js(l.target,a,1,l.sequenceNumber);ip(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Ny(t,s)}}async function Ny(t,e,n){if(!ta(e))throw e;t.wu.add(1),await ia(t),t.yu.set("Offline"),n||(n=()=>xT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Lc(t)})}async function Py(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=ra(n);n.wu.add(3),await ia(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Lc(n)}async function YF(t,e){const n=Re(t);e?(n.wu.delete(2),await Lc(n)):e||(n.wu.add(2),await ia(n),n.yu.set("Unknown"))}function Er(t){return t.Iu||(t.Iu=function(e,n,s){const i=Re(e);return i.iu(),new jF(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:zF.bind(null,t),Zr:GF.bind(null,t),zo:QF.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),op(t)?rp(t):t.yu.set("Unknown")):(await t.Iu.stop(),$T(t))})),t.Iu}/**
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
 */class ap{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ap(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function BT(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),ta(t))return new K(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||se.comparator(n.key,s.key):(n,s)=>se.comparator(n.key,s.key),this.keyedMap=Mr(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Dy{constructor(){this.Eu=new ct(se.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):fe():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ir{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ir(e,n,Mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class XF{constructor(){this.Ru=void 0,this.listeners=[]}}class JF{constructor(){this.queries=new wr(e=>dT(e),Nc),this.onlineState="Unknown",this.bu=new Set}}async function lp(t,e){const n=Re(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new XF),i)try{r.Ru=await n.onListen(s)}catch(o){const a=BT(o,`Initialization of query '${Bh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&up(n)}async function cp(t,e){const n=Re(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ZF(t,e){const n=Re(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&up(n)}function eU(t,e,n){const s=Re(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function up(t){t.bu.forEach(e=>{e.next()})}class hp{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ir(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class VT{constructor(e){this.key=e}}class HT{constructor(e){this.key=e}}class tU{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ie(),this.mutatedKeys=Ie(),this.Gu=fT(e),this.Qu=new Mi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Dy,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Jf(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(s.track({type:3,doc:f}),b=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),b=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),b=!0):d&&!f&&(s.track({type:1,doc:d}),b=!0,(l||c)&&(a=!0)),b&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return f(h)-f(d)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new ir(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Dy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new HT(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new VT(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ir.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class nU{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class sU{constructor(e){this.key=e,this.nc=!1}}class iU{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new wr(a=>dT(a),Nc),this.rc=new Map,this.oc=new Set,this.uc=new ct(se.comparator),this.cc=new Map,this.ac=new tp,this.hc={},this.lc=new Map,this.fc=sr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function rU(t,e){const n=dU(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await LF(n.localStore,jn(e));n.isPrimaryClient&&MT(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await oU(n,e,s,a==="current",o.resumeToken)}return i}async function oU(t,e,n,s,i){t._c=(h,d,f)=>async function(p,v,b,_){let g=v.view.Wu(b);g.$i&&(g=await Ay(p.localStore,v.query,!1).then(({documents:P})=>v.view.Wu(P,g)));const w=_&&_.targetChanges.get(v.targetId),C=v.view.applyChanges(g,p.isPrimaryClient,w);return xy(p,v.targetId,C.Xu),C.snapshot}(t,h,d,f);const r=await Ay(t.localStore,e,!0),o=new tU(e,r.Hi),a=o.Wu(r.documents),l=sa.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);xy(t,n,c.Xu);const u=new nU(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function aU(t,e){const n=Re(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Nc(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Wh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),FT(n.remoteStore,s.targetId),Kh(n,s.targetId)}).catch(Wf)):(Kh(n,s.targetId),await Wh(n.localStore,s.targetId,!0))}async function jT(t,e){const n=Re(t);try{const s=await OF(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Je(o.nc):i.removedDocuments.size>0&&(Je(o.nc),o.nc=!1))}),await WT(n,s,e)}catch(s){await Wf(s)}}function Oy(t,e,n){const s=Re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Re(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&up(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lU(t,e,n){const s=Re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ct(se.comparator);o=o.insert(r,gt.newNoDocument(r,_e.min()));const a=Ie().add(r),l=new Oc(_e.min(),new Map,new nt(xe),o,a);await jT(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),dp(s)}else await Wh(s.localStore,e,!1).then(()=>Kh(s,e,n)).catch(Wf)}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||qT(t,s)})}function qT(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(FT(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),dp(t))}function xy(t,e,n){for(const s of n)s instanceof VT?(t.ac.addReference(s.key,e),cU(t,s)):s instanceof HT?(te("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||qT(t,s.key)):fe()}function cU(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(te("SyncEngine","New document in limbo: "+n),t.oc.add(s),dp(t))}function dp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new se(Be.fromString(e)),s=t.fc.next();t.cc.set(s,new sU(n)),t.uc=t.uc.insert(n,s),MT(t.remoteStore,new Js(jn(kc(n.path)),s,2,Kf.at))}}async function WT(t,e,n){const s=Re(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=sp.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(l,h=>O.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>O.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ta(u))throw u;te("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ui.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Ui=c.Ui.insert(h,p)}}}(s.localStore,r))}async function uU(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await OT(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new K(x.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await WT(n,s.ji)}}function hU(t,e){const n=Re(t),s=n.cc.get(e);if(s&&s.nc)return Ie().add(s.key);{let i=Ie();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function dU(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lU.bind(null,e),e.sc.zo=ZF.bind(null,e.eventManager),e.sc.wc=eU.bind(null,e.eventManager),e}class fU{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=xc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return DF(this.persistence,new NF,e.initialUser,this.It)}yc(e){return new RF(np.Bs,this.It)}gc(e){return new FF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Oy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uU.bind(null,this.syncEngine),await YF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JF}createDatastore(e){const n=xc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new VF(i));var i;return function(r,o,a,l){return new qF(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Oy(this.syncEngine,a,0),o=ky.C()?new ky:new UF,new KF(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new iU(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Re(e);te("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await ia(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function KT(t,e,n){if(!n)throw new K(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gU(t,e,n,s){if(e===!0&&s===!0)throw new K(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ly(t){if(!se.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function My(t){if(se.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function _s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new K(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mU(t,e){if(e<=0)throw new K(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Fy=new Map;class Uy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uM;switch(n.type){case"gapi":const s=n.client;return new pM(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fy.get(e);n&&(te("ComponentProvider","Removing Datastore"),Fy.delete(e),n.terminate())}(this),Promise.resolve()}}function yU(t,e,n,s={}){var i;const r=(t=_s(t,Fc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Mh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Et.MOCK_USER;else{o=nw(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new K(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Et(l)}t._authCredentials=new hM(new rT(o,a))}}/**
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
 */class Vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Ns{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class vs extends Ns{constructor(e,n,s){super(e,n,kc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new se(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function Uc(t,e,...n){if(t=_t(t),KT("collection","path",e),t instanceof Fc){const s=Be.fromString(e,...n);return My(s),new vs(t,null,s)}{if(!(t instanceof Vt||t instanceof vs))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return My(s),new vs(t.firestore,null,s)}}function fp(t,e,...n){if(t=_t(t),arguments.length===1&&(e=oT.R()),KT("doc","path",e),t instanceof Fc){const s=Be.fromString(e,...n);return Ly(s),new Vt(t,null,new se(s))}{if(!(t instanceof Vt||t instanceof vs))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return Ly(s),new Vt(t.firestore,t instanceof vs?t.converter:null,new se(s))}}/**
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
 */class pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _U{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=oT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=BT(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vU(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await OT(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wU(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EU(t);te("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Py(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Py(e.remoteStore,r)),t.onlineComponents=e}async function EU(t){return t.offlineComponents||(te("FirestoreClient","Using default OfflineComponentProvider"),await vU(t,new fU)),t.offlineComponents}async function bU(t){return t.onlineComponents||(te("FirestoreClient","Using default OnlineComponentProvider"),await wU(t,new pU)),t.onlineComponents}async function Dl(t){const e=await bU(t),n=e.eventManager;return n.onListen=rU.bind(null,e.syncEngine),n.onUnlisten=aU.bind(null,e.syncEngine),n}function TU(t,e,n={}){const s=new ys;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new pp({next:h=>{r.enqueueAndForget(()=>cp(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new K(x.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new K(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hp(kc(o.path),c,{includeMetadataChanges:!0,ku:!0});return lp(i,u)}(await Dl(t),t.asyncQueue,e,n,s)),s.promise}function CU(t,e,n={}){const s=new ys;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new pp({next:h=>{r.enqueueAndForget(()=>cp(i,u)),h.fromCache&&a.source==="server"?l.reject(new K(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hp(o,c,{includeMetadataChanges:!0,ku:!0});return lp(i,u)}(await Dl(t),t.asyncQueue,e,n,s)),s.promise}class IU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new LT(this,"async_queue_retry"),this.Wc=()=>{const n=ku();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=ku();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ys;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!ta(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Hn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ap.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&fe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function $y(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Po extends Fc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new IU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zT(this),this._firestoreClient.terminate()}}function SU(t,e){const n=typeof t=="object"?t:Od(),s=typeof t=="string"?t:e||"(default)",i=Zl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ew("firestore");r&&yU(i,...r)}return i}function gp(t){return t._firestoreClient||zT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zT(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new IM(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _U(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class rr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rr(kt.fromBase64String(e))}catch(n){throw new K(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rr(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class GT{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class QT{constructor(e){this._methodName=e}}/**
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
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const AU=/^__.*__$/;function YT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class yp{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return zh(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(YT(this.sa)&&AU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class RU{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||xc(e)}da(e,n,s,i=!1){return new yp({sa:e,methodName:n,fa:s,path:Pt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function kU(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new RU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NU(t,e,n,s=!1){return _p(n,t.da(s?4:3,e))}function _p(t,e){if(XT(t=_t(t)))return DU("Unsupported field value:",e,t),PU(t,e);if(t instanceof QT)return function(n,s){if(!YT(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=_p(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=_t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return VM(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ue.fromDate(n);return{timestampValue:jh(s.It,i)}}if(n instanceof Ue){const i=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jh(s.It,i)}}if(n instanceof mp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rr)return{bytesValue:AT(s.It,n._byteString)};if(n instanceof Vt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:RT(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Mc(n)}`)}(t,e)}function PU(t,e){const n={};return aT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):na(t,(s,i)=>{const r=_p(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function XT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof mp||t instanceof rr||t instanceof Vt||t instanceof QT)}function DU(t,e,n){if(!XT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Mc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}const OU=new RegExp("[~\\*/\\[\\]]");function xU(t,e,n){if(e.search(OU)>=0)throw zh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new GT(...e.split("."))._internalPath}catch{throw zh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zh(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new K(x.INVALID_ARGUMENT,a+t+l)}/**
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
 */class JT{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LU extends JT{data(){return super.data()}}function $c(t,e){return typeof e=="string"?xU(t,e):e instanceof GT?e._internalPath:e._delegate._internalPath}/**
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
 */function ZT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}function wp(t,...e){for(const n of e)t=n._apply(t);return t}class MU extends vp{constructor(e,n,s){super(),this.ma=e,this.ga=n,this.ya=s,this.type="where"}_apply(e){const n=kU(e.firestore),s=function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new K(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Vy(u,c);const f=[];for(const p of u)f.push(By(a,i,p));h={arrayValue:{values:f}}}else h=By(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Vy(u,c),h=NU(o,r,u,c==="in"||c==="not-in");const d=Ot.create(l,c,h);return function(f,p){if(p.dt()){const b=Xf(f);if(b!==null&&!b.isEqual(p.field))throw new K(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${p.field.toString()}'`);const _=Yf(f);_!==null&&eC(f,p.field,_)}const v=function(b,_){for(const g of b.filters)if(_.indexOf(g.op)>=0)return g.op;return null}(f,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(v!==null)throw v===p.op?new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Ns(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function Ol(t,e,n){const s=e,i=$c("where",t);return new MU(i,s,n)}class FU extends vp{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Li(i,r);return function(a,l){if(Yf(a)===null){const c=Xf(a);c!==null&&eC(a,c,l.field)}}(s,o),o}(e._query,this.ma,this.pa);return new Ns(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new vr(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ep(t,e="asc"){const n=e,s=$c("orderBy",t);return new FU(s,n)}class UU extends vp{constructor(e,n,s){super(),this.type=e,this.Ia=n,this.Ta=s}_apply(e){return new Ns(e.firestore,e.converter,kl(e._query,this.Ia,this.Ta))}}function $U(t){return mU("limit",t),new UU("limit",t,"F")}function By(t,e,n){if(typeof(n=_t(n))=="string"){if(n==="")throw new K(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hT(e)&&n.indexOf("/")!==-1)throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Be.fromString(n));if(!se.isDocumentKey(s))throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dy(t,new se(s))}if(n instanceof Vt)return dy(t,n._key);throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function Vy(t,e){if(!Array.isArray(t)||t.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new K(x.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function eC(t,e,n){if(!n.isEqual(e))throw new K(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class BU{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){const s={};return na(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new mp(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=cT(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=Is(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Be.fromString(e);Je(DT(s));const i=new Ao(s.get(1),s.get(3)),r=new se(s.popFirst(5));return i.isEqual(n)||Hn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class Fr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tC extends JT{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field($c("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $a extends tC{data(e={}){return super.data(e)}}class nC{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $a(this._firestore,this._userDataWriter,s.key,s,new Fr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new $a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:VU(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function Hy(t){t=_s(t,Vt);const e=_s(t.firestore,Po);return TU(gp(e),t._key).then(n=>sC(e,t,n))}class bp extends BU{constructor(e){super(),this.firestore=e}convertBytes(e){return new rr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function HU(t){t=_s(t,Ns);const e=_s(t.firestore,Po),n=gp(e),s=new bp(e);return ZT(t._query),CU(n,t._query).then(i=>new nC(e,s,t,i))}function Tp(t,...e){var n,s,i;t=_t(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$y(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if($y(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Vt)c=_s(t.firestore,Po),u=kc(t._key.path),l={next:h=>{e[o]&&e[o](sC(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_s(t,Ns);c=_s(h.firestore,Po),u=h._query;const d=new bp(c);l={next:f=>{e[o]&&e[o](new nC(c,d,h,f))},error:e[o+1],complete:e[o+2]},ZT(t._query)}return function(h,d,f,p){const v=new pp(p),b=new hp(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>lp(await Dl(h),b)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>cp(await Dl(h),b))}}(gp(c),u,a,l)}function sC(t,e,n){const s=n.docs.get(e._key),i=new bp(t);return new tC(t,i,e._key,s,new Fr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){_r=n})(dr),ei(new Es("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Po(new dM(n.getProvider("auth-internal")),new mM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),On(ay,"3.7.1",t),On(ay,"3.7.1","esm2017")})();let Gh=!0;try{Gh=!window}catch{Gh=!0}const fB=()=>Gh,ss={cmsApiBaseURL:"",apiBaseURL:"",apiProxyUrl:"",isDev:!1,firebaseConfig:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},rssApiPath:"",studioDomain:""};function jU(t,e,n,s,i,r,o){ss.cmsApiBaseURL=t,ss.apiBaseURL=e,ss.apiProxyUrl=n,ss.isDev=s,ss.firebaseConfig=i,ss.rssApiPath=r,ss.studioDomain=o}let Aa;const Cp=()=>Aa||(Aa=ow(ss.firebaseConfig),Aa),Ip=()=>cx(Cp()),qU=()=>aL(Cp()),di=()=>SU(Cp());class WU{async signIn(e){await Wx(qU(),e)}}class KU{constructor(e){un(this,"repository");this.repository=e}subscribe(e,n){this.repository.setId(e).subscribe(n)}}let iC;function zU(t){iC=new KU(t)}const pB=()=>iC;class Sp{constructor(e,n){un(this,"refBuilder");un(this,"converter");this.refBuilder=e,this.converter=n}async get(){return new Promise(e=>{Nm(this.refBuilder(),n=>{e(this.converter.fromFirebase(n.val()))})})}async remove(){await ex(this.refBuilder())}subscribe(e){const n=s=>{e(this.converter.fromFirebase(s.val()))};return Nm(this.refBuilder(),n)}async update(e){await IE(this.refBuilder(),this.converter.toFirebase(e))}}const GU={setId:t=>new Sp(()=>ff(Ip(),`v2/projects/${t}/design`),{toFirebase:e=>e.product,fromFirebase:e=>e})};class QU{constructor(e,n){un(this,"templateDataRepository");un(this,"templateMetaRepository");this.templateDataRepository=e,this.templateMetaRepository=n}getData(e){return this.templateDataRepository.setId(e).get()}getMeta(e){return this.templateMetaRepository.setId(e).get()}}let rC;function YU(t,e){rC=new QU(t,e)}const gB=()=>rC,XU={setId(t){return new Sp(()=>ff(Ip(),`/v2/templates/data/${t}/design`),{toFirebase:e=>e.product,fromFirebase:e=>e})}},JU={setId(t){return new Sp(()=>ff(Ip(),`/v2/templates/data/${t}/design`),{toFirebase:e=>e,fromFirebase:e=>e})}};class ZU{constructor(e,n,s){un(this,"projectQuery");un(this,"schemaQuery");un(this,"contentsQuery");this.projectQuery=n,this.schemaQuery=s,this.contentsQuery=e}findContentBySlug(e){return this.contentsQuery.findPublishedContentBySlug(e)}findPublishedContent(e){return this.contentsQuery.findPublishedContent(e)}subscribeProject(e){return this.projectQuery.findSubScribe(e)}subscribeSchema(e,n){return this.schemaQuery.findSubscribe(e,n)}subscribeContents(e,n){return this.contentsQuery.findSubscribe(e,n)}}let oC;function e$(t,e,n){oC=new ZU(t,e,n)}const mB=()=>oC,t$=!1,n$="transparent",s$=t=>t==="boolean"?t$:t==="color"?n$:void 0,i$={toContentMetaEntity(t){const e={order:t.order||-1,project:{id:t.project.id},publishType:t.publishType,createdAt:t.createdAt?Ue.fromDate(t.createdAt):Ue.now(),schema:{...t.schema},uid:t.uid,audit:{createdAt:t.createdAt?Ue.fromDate(t.createdAt):Ue.now()}};t.updatedAt&&(e.updatedAt=Ue.fromDate(t.updatedAt)),t.publishedAt&&(e.publishedAt=Ue.fromDate(t.publishedAt));const n=t.audit;return n&&n.updatedAt&&(e.audit.updatedAt=Ue.fromDate(n.updatedAt)),n&&n.publishedAt&&(e.audit.publishedAt=Ue.fromDate(n.publishedAt)),e},toContentMeta(t){var e,n,s,i,r,o,a,l;return{project:{id:t.project.id},publishType:t.publishType,createdAt:t.createdAt.toDate(),updatedAt:(e=t.updatedAt)==null?void 0:e.toDate(),publishedAt:(n=t.publishedAt)==null?void 0:n.toDate(),schema:{...t.schema},uid:t.uid,order:t.order,audit:{createdAt:(i=(s=t.audit)==null?void 0:s.createdAt)==null?void 0:i.toDate(),updatedAt:(o=(r=t.audit)==null?void 0:r.updatedAt)==null?void 0:o.toDate(),publishedAt:(l=(a=t.audit)==null?void 0:a.publishedAt)==null?void 0:l.toDate()}}}};function r$(t){return fp(di(),`projects/${t}`)}function o$(t,e){return Uc(di(),`projects/${t}/schemas/${e}/contents`)}function a$(t,e){return Uc(di(),`templates/${t}/schemas/${e}/contents`)}function aC(t){return Uc(di(),`projects/${t}/schemas`)}function l$(t){return Uc(di(),`templates/${t}/schemas`)}function lC(t,e){return fp(di(),`projects/${t}/schemas/${e}`)}function cC(t,e){return fp(di(),`templates/${t}/schemas/${e}`)}function c$(t){return t?Array.isArray(t)?!0:t.path!==void 0&&t.path!==null:!1}function u$(t,e=!1){const{projectId:n}=t.path,s={fieldName:"_meta.createdAt",direction:"desc",...t.orderBy},i=e?l$(n):aC(n),r=[Ep(s.fieldName,s.direction)];(t.where||[]).forEach(l=>{if(l.value&&l.value.projectId){const c=l.value,u=e?cC(c.projectId,c.schemaId):lC(c.projectId,c.schemaId);r.push(Ol(l.fieldName,l.operation,u))}else r.push(Ol(l.fieldName,l.operation,l.value))});const a=wp.apply({},[i,...r]);return Tp(a,async l=>{const c=await Promise.all(l.docs.map(u=>Ap(u)));t.subscribe(c)})}async function h$(t,e,n){const{projectId:s}=n,i=e?await Hy(cC(s,t)):await Hy(lC(s,t));return Ap(i)}async function d$(t){const{projectId:e}=t;return(await HU(wp(aC(e),Ep("_meta.createdAt","desc")))).docs.map(Ap)}function Ap(t){const e=t.data();return{name:e.name,_meta:e._meta,icon:e.icon,key:e.key,id:t.id,fields:e.fields||[],postType:e.postType||"post"}}const uC={findSubscribe:u$,findById:h$,all:d$};function f$(t,e=!1){const{projectId:n,schemaId:s}=t.path,i={fieldName:"_meta.createdAt",direction:"desc",...t.orderBy},r=t.limit||2e3,o=e?a$(n,s):o$(n,s),a=[Ep(i.fieldName,i.direction),$U(r)];(t.where&&t.where.filter(u=>u.fieldName&&u.operation&&u.value)||[]).map(u=>{u.fieldName==="_meta.createdAt"||u.fieldName==="_meta.updatedAt"||u.fieldName==="_meta.publishedAt"?a.push(Ol(u.fieldName,u.operation,new Date(u.value))):a.push(Ol(u.fieldName,u.operation,u.value))});const c=wp.apply(null,[o,...a]);return Tp(c,async u=>{const h=await uC.findById(s,e,{projectId:n});if(!h){console.error("Schema not Found: ContentsQuery.findSubscribe onSnapshot");return}const d=h.fields.map(p=>{const v=s$(p.type);return v!==void 0?{key:p.key,defaultValue:v}:null}).filter(p=>Boolean(p)),f=u.docs.map(p=>p$(p,t.lang?t.lang:"default")).filter(p=>Boolean(p)).map(p=>(d.forEach(({key:v,defaultValue:b})=>{p[v]===void 0&&(p[v]=b)}),p));t.subscribe(f)})}function p$(t,e="default"){const n=t.data();if(!n)return null;const s=n[e],i=Object.keys(s).reduce((r,o)=>{if(c$(s[o])){const a=g$(s[o]);a&&(r[o]=a)}else r[o]=s[o];return r},{});return{id:t.id,title:n[e].title,slug:n[e].slug,_filter:n._filter,_meta:i$.toContentMeta(n._meta),...i}}function g$(t){var e;return t?Array.isArray(t)?t.map(n=>{var s;return{contentId:n.id,schemaId:((s=n.parent.parent)==null?void 0:s.id)||""}}):{contentId:t.id,schemaId:((e=t.parent.parent)==null?void 0:e.id)||""}:null}async function m$(t){throw new Error("Firestore SDK\u3067\u306F\u516C\u958B\u30C7\u30FC\u30BF\u3092\u6271\u308F\u306A\u3044")}async function y$(t){throw new Error("Firestore SDK\u7D4C\u7531\u3067\u306F\u516C\u958B\u30C7\u30FC\u30BF\u3092\u6271\u308F\u306A\u3044")}const _$={findSubscribe:f$,findPublishedContentBySlug:m$,findPublishedContent:y$};function v$(t){return Tp(r$(t.path.cmsId),e=>{t.subscribe(e.data())})}const w$={findSubScribe:v$};function E$(){Dk(new WU),zU(GU),YU(XU,JU),e$(_$,w$,uC)}const b$=ci(()=>{const t=mv();jU(t.public.cmsApiBaseUrl,t.public.apiBaseUrl,t.public.apiProxyUrl,t.public.isDev,{apiKey:t.public.firebaseApiKey,authDomain:t.public.firebaseAuthDomain,databaseURL:t.public.firebaseDatabaseURL,projectId:t.public.firebaseProjectId,storageBucket:t.public.firebaseStorageBucket,messagingSenderId:t.public.firebaseMessagingSenderId,appId:t.public.firebaseAppId},t.public.rssApiPath,t.public.studioDomain),t.public.studioPublishIndexUrl,t.public.studioPublishUrl,E$()});function T$(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(i){i(n)}),(s=t.get("*"))&&s.slice().map(function(i){i(e,n)})}}}const xl=T$(),hC=new Map,jy={x:["left","center","right"],y:["top","bottom"]},C$=(t=>()=>t++)(0),I$=t=>typeof t!="string"?[]:t.split(/\s+/gi).filter(e=>e),S$=t=>{typeof t=="string"&&(t=I$(t));let e=null,n=null;return t.forEach(s=>{jy.y.indexOf(s)!==-1&&(n=s),jy.x.indexOf(s)!==-1&&(e=s)}),{x:e,y:n}};class A${constructor(e,n,s){this.remaining=n,this.callback=e,this.notifyItem=s,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}var Nu={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:t=>({height:[t.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},Rp=En({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(t,e){this.$emit("enter",t,e)},leave(t,e){this.$emit("leave",t,e)},afterLeave(){this.$emit("after-leave")}}});function R$(t,e,n,s,i,r){return Ft(),Dn(sv,{tag:"span",css:!1,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.afterLeave},{default:Oo(()=>[gd(t.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}Rp.render=R$;Rp.__file="src/VelocityGroup.vue";var kp=En({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function k$(t,e,n,s,i,r){return Ft(),Dn(sv,{tag:"span",name:t.name},{default:Oo(()=>[gd(t.$slots,"default")]),_:3},8,["name"])}kp.render=k$;kp.__file="src/CssGroup.vue";const Pu="[-+]?[0-9]*.?[0-9]+",qy=[{name:"px",regexp:new RegExp(`^${Pu}px$`)},{name:"%",regexp:new RegExp(`^${Pu}%$`)},{name:"px",regexp:new RegExp(`^${Pu}$`)}],N$=t=>{if(t==="auto")return{type:t,value:0};for(let e=0;e<qy.length;e++){const n=qy[e];if(n.regexp.test(t))return{type:n.name,value:parseFloat(t)}}return{type:"",value:t}},P$=t=>{switch(typeof t){case"number":return{type:"px",value:t};case"string":return N$(t);default:return{type:"",value:t}}},Ra={IDLE:0,DESTROYED:2};var Np=En({name:"notifications",components:{VelocityGroup:Rp,CssGroup:kp},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:Nu.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:Nu.velocityAnimation},animationName:{type:String,default:Nu.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:hC.get("velocity"),timerControl:null}},computed:{actualWidth(){return P$(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:t,y:e}=S$(this.position),n=this.actualWidth.value,s=this.actualWidth.type,i={width:n+s};return e&&(i[e]="0px"),t&&(t==="center"?i.left=`calc(50% - ${+n/2}${s})`:i[t]="0px"),i},active(){return this.list.filter(t=>t.state!==Ra.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){xl.on("add",this.addItem),xl.on("close",this.closeItem)},methods:{destroyIfNecessary(t){this.$emit("click",t),this.closeOnClick&&this.destroy(t)},pauseTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.pause())},resumeTimeout(){var t;this.pauseOnHover&&((t=this.timerControl)===null||t===void 0||t.resume())},addItem(t={}){if(t.group||(t.group=""),t.data||(t.data={}),this.group!==t.group)return;if(t.clean||t.clear){this.destroyAll();return}const e=typeof t.duration=="number"?t.duration:this.duration,n=typeof t.speed=="number"?t.speed:this.speed,s=typeof t.ignoreDuplicates=="boolean"?t.ignoreDuplicates:this.ignoreDuplicates,{title:i,text:r,type:o,data:a,id:l}=t,c={id:l||C$(),title:i,text:r,type:o,state:Ra.IDLE,speed:n,length:e+2*n,data:a};e>=0&&(this.timerControl=new A$(()=>this.destroy(c),c.length,c));const u=this.reverse?!this.botToTop:this.botToTop;let h=-1;const d=this.active.some(p=>p.title===t.title&&p.text===t.text);(!s||!d)&&(u?(this.list.push(c),this.active.length>this.max&&(h=0)):(this.list.unshift(c),this.active.length>this.max&&(h=this.active.length-1)),h!==-1&&this.destroy(this.active[h]))},closeItem(t){this.destroyById(t)},notifyClass(t){var e;return["vue-notification-template",this.classes,(e=t.type)!==null&&e!==void 0?e:""]},notifyWrapperStyle(t){return this.isVA?void 0:{transition:`all ${t.speed}ms`}},destroy(t){clearTimeout(t.timer),t.state=Ra.DESTROYED,this.clean(),this.$emit("destroy",t)},destroyById(t){const e=this.list.find(n=>n.id===t);e&&this.destroy(e)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(t,e){var n;const s=(n=this.animation)===null||n===void 0?void 0:n[t];return typeof s=="function"?s.call(this,e):s},enter(t,e){if(!this.isVA)return;const n=this.getAnimation("enter",t);this.velocity(t,n,{duration:this.speed,complete:e})},leave(t,e){if(!this.isVA)return;const n=this.getAnimation("leave",t);this.velocity(t,n,{duration:this.speed,complete:e})},clean(){this.list=this.list.filter(t=>t.state!==Ra.DESTROYED)}}});const D$=["data-id"],O$=["onClick"],x$=["innerHTML"],L$=["innerHTML"];function M$(t,e,n,s,i,r){return Ft(),pa("div",{class:"vue-notification-group",style:Fi(t.styles)},[(Ft(),Dn(U0(t.componentName),{name:t.animationName,onEnter:t.enter,onLeave:t.leave,onAfterLeave:t.clean},{default:Oo(()=>[(Ft(!0),pa(bt,null,$0(t.active,o=>(Ft(),pa("div",{key:o.id,class:"vue-notification-wrapper",style:Fi(t.notifyWrapperStyle(o)),"data-id":o.id,onMouseenter:e[0]||(e[0]=(...a)=>t.pauseTimeout&&t.pauseTimeout(...a)),onMouseleave:e[1]||(e[1]=(...a)=>t.resumeTimeout&&t.resumeTimeout(...a))},[gd(t.$slots,"body",{class:Ui([t.classes,o.type]),item:o,close:()=>t.destroy(o)},()=>[eg(" Default slot template "),Ka("div",{class:Ui(t.notifyClass(o)),onClick:a=>t.destroyIfNecessary(o)},[o.title?(Ft(),pa("div",{key:0,class:"notification-title",innerHTML:o.title},null,8,x$)):eg("v-if",!0),Ka("div",{class:"notification-content",innerHTML:o.text},null,8,L$)],10,O$)])],44,D$))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}function F$(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var U$=`
.vue-notification-group {
  display: block;
  position: fixed;
  z-index: 5000;
}
.vue-notification-wrapper {
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
.notification-title {
  font-weight: 600;
}
.vue-notification-template {
  display: block;
  box-sizing: border-box;
  background: white;
  text-align: left;
}
.vue-notification {
  display: block;
  box-sizing: border-box;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  margin: 0 5px 5px;

  color: white;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
}
.vue-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}
.vue-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}
.vue-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}
.vn-fade-enter-active, .vn-fade-leave-active, .vn-fade-move  {
  transition: all .5s;
}
.vn-fade-enter-from, .vn-fade-leave-to {
  opacity: 0;
}

`;F$(U$);Np.render=M$;Np.__file="src/Notifications.vue";const Pp=t=>{typeof t=="string"&&(t={title:"",text:t}),typeof t=="object"&&xl.emit("add",t)};Pp.close=function(t){xl.emit("close",t)};function $$(t,e={}){Object.entries(e).forEach(s=>hC.set(...s));const n=e.name||"notify";t.config.globalProperties["$"+n]=Pp,t.component(e.componentName||"notifications",Np)}var B$={install:$$};const V$=ci(t=>(t.vueApp.use(B$,{property:{}}),{provide:{notify:Pp}})),H$=ci(t=>{t.vueApp.use(Vv)}),j$=[yA,hR,Tk,Nk,b$,V$,H$],q$=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),W$=(t,e)=>{var i;const n=e.route.matched.find(r=>{var o;return((o=r.components)==null?void 0:o.default)===e.Component.type}),s=(i=t!=null?t:n==null?void 0:n.meta.key)!=null?i:n&&q$(e.route,n);return typeof s=="function"?s(e.route):s},K$=(t,e)=>({default:()=>t?Zt(R0,t===!0?{}:t,e):e}),z$=En({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),G$=(t,e,n)=>({default:()=>e?Zt(t,e===!0?{}:e,n):Zt(z$,{},n)}),Q$=En({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=Lt();return()=>Zt($v,{name:t.name,route:t.route,...e},{default:s=>{var l,c,u,h;if(!s.Component)return;const i=W$(t.pageKey,s),r=n.deferHydration(),o=!!((c=(l=t.transition)!=null?l:s.route.meta.pageTransition)!=null?c:Ju),a=o&&X$([t.transition,s.route.meta.pageTransition,Ju,{onAfterLeave:()=>{n.callHook("page:transition:finish",s.Component)}}].filter(Boolean));return G$(wd,o&&a,K$((h=(u=t.keepalive)!=null?u:s.route.meta.keepalive)!=null?h:cR,Zt(C_,{onPending:()=>n.callHook("page:start",s.Component),onResolve:()=>{As(()=>n.callHook("page:finish",s.Component).finally(r))}},{default:()=>Zt(J$,{key:i,routeProps:s,pageKey:i,hasTransition:o})}))).default()}})}});function Y$(t){return Array.isArray(t)?t:t?[t]:[]}function X$(t){const e=t.map(n=>({...n,onAfterLeave:Y$(n.onAfterLeave)}));return pA(...e)}const J$=En({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const i in t.routeProps.route)s[i]=mt(()=>e===t.pageKey?t.routeProps.route[i]:n[i]);return Ai("_route",an(s)),()=>Zt(t.routeProps.Component)}}),Z$=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},eB={};function tB(t,e){const n=Q$;return Ft(),Dn(n,{transition:{name:"page"}})}const nB=Z$(eB,[["render",tB]]),Wy={__name:"nuxt-root",setup(t){const e=S0(()=>Pa(()=>import("./error-component.aec40400.js"),[],import.meta.url).then(r=>r.default||r)),n=Lt(),s=n.deferHydration();Ai("_route",tA()),n.hooks.callHookWith(r=>r.map(o=>o()),"vue:setup");const i=Gl();return P_((r,o,a)=>{n.hooks.callHook("vue:error",r,o,a).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),ZS(r)&&(r.fatal||r.unhandled)&&rs(n,Or,[r])}),(r,o)=>(Ft(),Dn(C_,{onResolve:qt(s)},{default:Oo(()=>[qt(i)?(Ft(),Dn(qt(e),{key:0,error:qt(i)},null,8,["error"])):(Ft(),Dn(qt(nB),{key:1}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=xS.create({baseURL:MS()}));let Ky;const sB=YS(j$);Ky=async function(){var i;const n=Boolean((i=window.__NUXT__)==null?void 0:i.serverRendered)?WI(Wy):qI(Wy),s=zS({vueApp:n});try{await QS(s,sB)}catch(r){await s.callHook("app:error",r),s.payload.error=s.payload.error||r}try{await s.hooks.callHook("app:created",n),await s.hooks.callHook("app:beforeMount",n),n.mount("#"+uR),await s.hooks.callHook("app:mounted",n),await As()}catch(r){await s.callHook("app:error",r),s.payload.error=s.payload.error||r}},Ky().catch(t=>{console.error("Error while mounting app:",t)});export{cB as $,dB as A,mt as B,pk as C,Zt as D,uB as E,bt as F,ss as G,Td as H,mB as I,qs as J,an as K,fB as L,Lt as M,Lo as N,Fi as O,pB as P,fd as Q,r0 as R,Vv as S,Ui as T,wd as U,D0 as V,$0 as W,sv as X,gB as Y,z_ as Z,Pa as _,Z$ as a,pa as b,Dn as c,S0 as d,lB as e,Ka as f,rI as g,tA as h,En as i,Ke as j,eg as k,Wl as l,F0 as m,rB as n,Ft as o,aB as p,Mu as q,Pn as r,hB as s,oB as t,qt as u,T0 as v,Oo as w,h_ as x,Wn as y,As as z};
