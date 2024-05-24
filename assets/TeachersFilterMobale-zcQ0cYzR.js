import{r as _,u as lc,R as tr,a as cc,p as S,j as c,c as uc,b as dn,d as dc,M as hc,e as fc,f as pc,g as gc,h as mc,i as vc,k as _c,l as yc,m as bc,n as xc,o as Cc,q as wc,s as Ct,t as wt,v as St,w as Et,x as It,y as hn,z as Sc,A as wi,B as Ec,C as Ic,D as Tc,E as Rc,S as Oc,F as Pc,G as Mc,H as kc,J as nr,K as ir,N as To,O as Ro,P as Oo,Q as rt,T as sr,U as rr,V as En,W as Nc,X as Lc,Y as Ac,Z as or,_ as ar,$ as lr,a0 as cr,I as Dc,a1 as Fc,a2 as x,a3 as en,a4 as jc,a5 as Vc,a6 as Hc,a7 as Wc,a8 as Uc,a9 as $c,aa as ur,ab as se,ac as as,ad as Ve,ae as Bc,af as zc,ag as qc,ah as pt,ai as In,aj as Po,ak as tn,al as Gc,am as Mo,an as ko,ao as Yc,ap as Kc,aq as dr,ar as No,as as Qc,at as Xc,au as Kn,av as Zc,aw as Jc,ax as eu}from"./index-D4DX1ZHI.js";function tu(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}function Xe(t){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(t)}function nu(t,e){if(Xe(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Xe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Lo(t){var e=nu(t,"string");return Xe(e)=="symbol"?e:e+""}function At(t,e,n){return e=Lo(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hr(Object(n),!0).forEach(function(i){At(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hr(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function iu(t){if(Array.isArray(t))return t}function su(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,r,o,l=[],a=!0,u=!1;try{if(r=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(i=r.call(n)).done)&&(l.push(i.value),l.length!==e);a=!0);}catch(d){u=!0,s=d}finally{try{if(!a&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return l}}function Wi(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Ao(t,e){if(t){if(typeof t=="string")return Wi(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wi(t,e)}}function ru(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(t,e){return iu(t)||su(t,e)||Ao(t,e)||ru()}function ou(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function He(t,e){if(t==null)return{};var n=ou(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var au=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function lu(t){var e=t.defaultInputValue,n=e===void 0?"":e,i=t.defaultMenuIsOpen,s=i===void 0?!1:i,r=t.defaultValue,o=r===void 0?null:r,l=t.inputValue,a=t.menuIsOpen,u=t.onChange,d=t.onInputChange,h=t.onMenuClose,f=t.onMenuOpen,p=t.value,g=He(t,au),m=_.useState(l!==void 0?l:n),v=Ae(m,2),y=v[0],w=v[1],b=_.useState(a!==void 0?a:s),C=Ae(b,2),I=C[0],T=C[1],E=_.useState(p!==void 0?p:o),k=Ae(E,2),$=k[0],X=k[1],oe=_.useCallback(function(he,z){typeof u=="function"&&u(he,z),X(he)},[u]),N=_.useCallback(function(he,z){var Z;typeof d=="function"&&(Z=d(he,z)),w(Z!==void 0?Z:he)},[d]),Ce=_.useCallback(function(){typeof f=="function"&&f(),T(!0)},[f]),fe=_.useCallback(function(){typeof h=="function"&&h(),T(!1)},[h]),Y=l!==void 0?l:y,K=a!==void 0?a:I,de=p!==void 0?p:$;return O(O({},g),{},{inputValue:Y,menuIsOpen:K,onChange:oe,onInputChange:N,onMenuClose:fe,onMenuOpen:Ce,value:de})}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},P.apply(this,arguments)}function cu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fr(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Lo(i.key),i)}}function uu(t,e,n){return e&&fr(t.prototype,e),n&&fr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ui(t,e){return Ui=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Ui(t,e)}function du(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ui(t,e)}function Tn(t){return Tn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tn(t)}function Do(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Do=function(){return!!t})()}function hu(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fu(t,e){if(e&&(Xe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hu(t)}function pu(t){var e=Do();return function(){var i=Tn(t),s;if(e){var r=Tn(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return fu(this,s)}}function gu(t){if(Array.isArray(t))return Wi(t)}function mu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ls(t){return gu(t)||mu(t)||Ao(t)||vu()}function _u(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function yu(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var bu=function(){function t(n){var i=this;this._insertTag=function(s){var r;i.tags.length===0?i.insertionPoint?r=i.insertionPoint.nextSibling:i.prepend?r=i.container.firstChild:r=i.before:r=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,r),i.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(yu(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var r=_u(s);try{r.insertRule(i,r.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),le="-ms-",Rn="-moz-",F="-webkit-",Fo="comm",cs="rule",us="decl",xu="@import",jo="@keyframes",Cu="@layer",wu=Math.abs,Qn=String.fromCharCode,Su=Object.assign;function Eu(t,e){return ae(t,0)^45?(((e<<2^ae(t,0))<<2^ae(t,1))<<2^ae(t,2))<<2^ae(t,3):0}function Vo(t){return t.trim()}function Iu(t,e){return(t=e.exec(t))?t[0]:t}function j(t,e,n){return t.replace(e,n)}function $i(t,e){return t.indexOf(e)}function ae(t,e){return t.charCodeAt(e)|0}function Wt(t,e,n){return t.slice(e,n)}function Oe(t){return t.length}function ds(t){return t.length}function fn(t,e){return e.push(t),t}function Tu(t,e){return t.map(e).join("")}var Xn=1,gt=1,Ho=0,me=0,Q=0,yt="";function Zn(t,e,n,i,s,r,o){return{value:t,root:e,parent:n,type:i,props:s,children:r,line:Xn,column:gt,length:o,return:""}}function Tt(t,e){return Su(Zn("",null,null,"",null,null,0),t,{length:-t.length},e)}function Ru(){return Q}function Ou(){return Q=me>0?ae(yt,--me):0,gt--,Q===10&&(gt=1,Xn--),Q}function ye(){return Q=me<Ho?ae(yt,me++):0,gt++,Q===10&&(gt=1,Xn++),Q}function Me(){return ae(yt,me)}function bn(){return me}function nn(t,e){return Wt(yt,t,e)}function Ut(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wo(t){return Xn=gt=1,Ho=Oe(yt=t),me=0,[]}function Uo(t){return yt="",t}function xn(t){return Vo(nn(me-1,Bi(t===91?t+2:t===40?t+1:t)))}function Pu(t){for(;(Q=Me())&&Q<33;)ye();return Ut(t)>2||Ut(Q)>3?"":" "}function Mu(t,e){for(;--e&&ye()&&!(Q<48||Q>102||Q>57&&Q<65||Q>70&&Q<97););return nn(t,bn()+(e<6&&Me()==32&&ye()==32))}function Bi(t){for(;ye();)switch(Q){case t:return me;case 34:case 39:t!==34&&t!==39&&Bi(Q);break;case 40:t===41&&Bi(t);break;case 92:ye();break}return me}function ku(t,e){for(;ye()&&t+Q!==57;)if(t+Q===84&&Me()===47)break;return"/*"+nn(e,me-1)+"*"+Qn(t===47?t:ye())}function Nu(t){for(;!Ut(Me());)ye();return nn(t,me)}function Lu(t){return Uo(Cn("",null,null,null,[""],t=Wo(t),0,[0],t))}function Cn(t,e,n,i,s,r,o,l,a){for(var u=0,d=0,h=o,f=0,p=0,g=0,m=1,v=1,y=1,w=0,b="",C=s,I=r,T=i,E=b;v;)switch(g=w,w=ye()){case 40:if(g!=108&&ae(E,h-1)==58){$i(E+=j(xn(w),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:E+=xn(w);break;case 9:case 10:case 13:case 32:E+=Pu(g);break;case 92:E+=Mu(bn()-1,7);continue;case 47:switch(Me()){case 42:case 47:fn(Au(ku(ye(),bn()),e,n),a);break;default:E+="/"}break;case 123*m:l[u++]=Oe(E)*y;case 125*m:case 59:case 0:switch(w){case 0:case 125:v=0;case 59+d:y==-1&&(E=j(E,/\f/g,"")),p>0&&Oe(E)-h&&fn(p>32?gr(E+";",i,n,h-1):gr(j(E," ","")+";",i,n,h-2),a);break;case 59:E+=";";default:if(fn(T=pr(E,e,n,u,d,s,l,b,C=[],I=[],h),r),w===123)if(d===0)Cn(E,e,T,T,C,r,h,l,I);else switch(f===99&&ae(E,3)===110?100:f){case 100:case 108:case 109:case 115:Cn(t,T,T,i&&fn(pr(t,T,T,0,0,s,l,b,s,C=[],h),I),s,I,h,l,i?C:I);break;default:Cn(E,T,T,T,[""],I,0,l,I)}}u=d=p=0,m=y=1,b=E="",h=o;break;case 58:h=1+Oe(E),p=g;default:if(m<1){if(w==123)--m;else if(w==125&&m++==0&&Ou()==125)continue}switch(E+=Qn(w),w*m){case 38:y=d>0?1:(E+="\f",-1);break;case 44:l[u++]=(Oe(E)-1)*y,y=1;break;case 64:Me()===45&&(E+=xn(ye())),f=Me(),d=h=Oe(b=E+=Nu(bn())),w++;break;case 45:g===45&&Oe(E)==2&&(m=0)}}return r}function pr(t,e,n,i,s,r,o,l,a,u,d){for(var h=s-1,f=s===0?r:[""],p=ds(f),g=0,m=0,v=0;g<i;++g)for(var y=0,w=Wt(t,h+1,h=wu(m=o[g])),b=t;y<p;++y)(b=Vo(m>0?f[y]+" "+w:j(w,/&\f/g,f[y])))&&(a[v++]=b);return Zn(t,e,n,s===0?cs:l,a,u,d)}function Au(t,e,n){return Zn(t,e,n,Fo,Qn(Ru()),Wt(t,2,-2),0)}function gr(t,e,n,i){return Zn(t,e,n,us,Wt(t,0,i),Wt(t,i+1,-1),i)}function ut(t,e){for(var n="",i=ds(t),s=0;s<i;s++)n+=e(t[s],s,t,e)||"";return n}function Du(t,e,n,i){switch(t.type){case Cu:if(t.children.length)break;case xu:case us:return t.return=t.return||t.value;case Fo:return"";case jo:return t.return=t.value+"{"+ut(t.children,i)+"}";case cs:t.value=t.props.join(",")}return Oe(n=ut(t.children,i))?t.return=t.value+"{"+n+"}":""}function Fu(t){var e=ds(t);return function(n,i,s,r){for(var o="",l=0;l<e;l++)o+=t[l](n,i,s,r)||"";return o}}function ju(t){return function(e){e.root||(e=e.return)&&t(e)}}var Vu=function(e,n,i){for(var s=0,r=0;s=r,r=Me(),s===38&&r===12&&(n[i]=1),!Ut(r);)ye();return nn(e,me)},Hu=function(e,n){var i=-1,s=44;do switch(Ut(s)){case 0:s===38&&Me()===12&&(n[i]=1),e[i]+=Vu(me-1,n,i);break;case 2:e[i]+=xn(s);break;case 4:if(s===44){e[++i]=Me()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Qn(s)}while(s=ye());return e},Wu=function(e,n){return Uo(Hu(Wo(e),n))},mr=new WeakMap,Uu=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,s=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!mr.get(i))&&!s){mr.set(e,!0);for(var r=[],o=Wu(n,r),l=i.props,a=0,u=0;a<o.length;a++)for(var d=0;d<l.length;d++,u++)e.props[u]=r[a]?o[a].replace(/&\f/g,l[d]):l[d]+" "+o[a]}}},$u=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function $o(t,e){switch(Eu(t,e)){case 5103:return F+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return F+t+Rn+t+le+t+t;case 6828:case 4268:return F+t+le+t+t;case 6165:return F+t+le+"flex-"+t+t;case 5187:return F+t+j(t,/(\w+).+(:[^]+)/,F+"box-$1$2"+le+"flex-$1$2")+t;case 5443:return F+t+le+"flex-item-"+j(t,/flex-|-self/,"")+t;case 4675:return F+t+le+"flex-line-pack"+j(t,/align-content|flex-|-self/,"")+t;case 5548:return F+t+le+j(t,"shrink","negative")+t;case 5292:return F+t+le+j(t,"basis","preferred-size")+t;case 6060:return F+"box-"+j(t,"-grow","")+F+t+le+j(t,"grow","positive")+t;case 4554:return F+j(t,/([^-])(transform)/g,"$1"+F+"$2")+t;case 6187:return j(j(j(t,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),t,"")+t;case 5495:case 3959:return j(t,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return j(j(t,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+t+t;case 4095:case 3583:case 4068:case 2532:return j(t,/(.+)-inline(.+)/,F+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Oe(t)-1-e>6)switch(ae(t,e+1)){case 109:if(ae(t,e+4)!==45)break;case 102:return j(t,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Rn+(ae(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$i(t,"stretch")?$o(j(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ae(t,e+1)!==115)break;case 6444:switch(ae(t,Oe(t)-3-(~$i(t,"!important")&&10))){case 107:return j(t,":",":"+F)+t;case 101:return j(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(ae(t,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+le+"$2box$3")+t}break;case 5936:switch(ae(t,e+11)){case 114:return F+t+le+j(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return F+t+le+j(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return F+t+le+j(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return F+t+le+t+t}return t}var Bu=function(e,n,i,s){if(e.length>-1&&!e.return)switch(e.type){case us:e.return=$o(e.value,e.length);break;case jo:return ut([Tt(e,{value:j(e.value,"@","@"+F)})],s);case cs:if(e.length)return Tu(e.props,function(r){switch(Iu(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ut([Tt(e,{props:[j(r,/:(read-\w+)/,":"+Rn+"$1")]})],s);case"::placeholder":return ut([Tt(e,{props:[j(r,/:(plac\w+)/,":"+F+"input-$1")]}),Tt(e,{props:[j(r,/:(plac\w+)/,":"+Rn+"$1")]}),Tt(e,{props:[j(r,/:(plac\w+)/,le+"input-$1")]})],s)}return""})}},zu=[Bu],qu=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var v=m.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=e.stylisPlugins||zu,r={},o,l=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var v=m.getAttribute("data-emotion").split(" "),y=1;y<v.length;y++)r[v[y]]=!0;l.push(m)});var a,u=[Uu,$u];{var d,h=[Du,ju(function(m){d.insert(m)})],f=Fu(u.concat(s,h)),p=function(v){return ut(Lu(v),f)};a=function(v,y,w,b){d=w,p(v?v+"{"+y.styles+"}":y.styles),b&&(g.inserted[y.name]=!0)}}var g={key:n,sheet:new bu({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:r,registered:{},insert:a};return g.sheet.hydrate(l),g},Bo={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=typeof Symbol=="function"&&Symbol.for,hs=re?Symbol.for("react.element"):60103,fs=re?Symbol.for("react.portal"):60106,Jn=re?Symbol.for("react.fragment"):60107,ei=re?Symbol.for("react.strict_mode"):60108,ti=re?Symbol.for("react.profiler"):60114,ni=re?Symbol.for("react.provider"):60109,ii=re?Symbol.for("react.context"):60110,ps=re?Symbol.for("react.async_mode"):60111,si=re?Symbol.for("react.concurrent_mode"):60111,ri=re?Symbol.for("react.forward_ref"):60112,oi=re?Symbol.for("react.suspense"):60113,Gu=re?Symbol.for("react.suspense_list"):60120,ai=re?Symbol.for("react.memo"):60115,li=re?Symbol.for("react.lazy"):60116,Yu=re?Symbol.for("react.block"):60121,Ku=re?Symbol.for("react.fundamental"):60117,Qu=re?Symbol.for("react.responder"):60118,Xu=re?Symbol.for("react.scope"):60119;function xe(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case hs:switch(t=t.type,t){case ps:case si:case Jn:case ti:case ei:case oi:return t;default:switch(t=t&&t.$$typeof,t){case ii:case ri:case li:case ai:case ni:return t;default:return e}}case fs:return e}}}function zo(t){return xe(t)===si}H.AsyncMode=ps;H.ConcurrentMode=si;H.ContextConsumer=ii;H.ContextProvider=ni;H.Element=hs;H.ForwardRef=ri;H.Fragment=Jn;H.Lazy=li;H.Memo=ai;H.Portal=fs;H.Profiler=ti;H.StrictMode=ei;H.Suspense=oi;H.isAsyncMode=function(t){return zo(t)||xe(t)===ps};H.isConcurrentMode=zo;H.isContextConsumer=function(t){return xe(t)===ii};H.isContextProvider=function(t){return xe(t)===ni};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs};H.isForwardRef=function(t){return xe(t)===ri};H.isFragment=function(t){return xe(t)===Jn};H.isLazy=function(t){return xe(t)===li};H.isMemo=function(t){return xe(t)===ai};H.isPortal=function(t){return xe(t)===fs};H.isProfiler=function(t){return xe(t)===ti};H.isStrictMode=function(t){return xe(t)===ei};H.isSuspense=function(t){return xe(t)===oi};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jn||t===si||t===ti||t===ei||t===oi||t===Gu||typeof t=="object"&&t!==null&&(t.$$typeof===li||t.$$typeof===ai||t.$$typeof===ni||t.$$typeof===ii||t.$$typeof===ri||t.$$typeof===Ku||t.$$typeof===Qu||t.$$typeof===Xu||t.$$typeof===Yu)};H.typeOf=xe;Bo.exports=H;var Zu=Bo.exports,qo=Zu,Ju={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ed={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Go={};Go[qo.ForwardRef]=Ju;Go[qo.Memo]=ed;var td=!0;function nd(t,e,n){var i="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):i+=s+" "}),i}var Yo=function(e,n,i){var s=e.key+"-"+n.name;(i===!1||td===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},id=function(e,n,i){Yo(e,n,i);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var r=n;do e.insert(n===r?"."+s:"",r,e.sheet,!0),r=r.next;while(r!==void 0)}};function sd(t){for(var e=0,n,i=0,s=t.length;s>=4;++i,s-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var rd=/[A-Z]|^ms/g,od=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ko=function(e){return e.charCodeAt(1)===45},vr=function(e){return e!=null&&typeof e!="boolean"},Si=tu(function(t){return Ko(t)?t:t.replace(rd,"-$&").toLowerCase()}),_r=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(od,function(i,s,r){return Pe={name:s,styles:r,next:Pe},s})}return lc[e]!==1&&!Ko(e)&&typeof n=="number"&&n!==0?n+"px":n};function $t(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Pe={name:n.name,styles:n.styles,next:Pe},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)Pe={name:i.name,styles:i.styles,next:Pe},i=i.next;var s=n.styles+";";return s}return ad(t,e,n)}case"function":{if(t!==void 0){var r=Pe,o=n(t);return Pe=r,$t(t,e,o)}break}}return n}function ad(t,e,n){var i="";if(Array.isArray(n))for(var s=0;s<n.length;s++)i+=$t(t,e,n[s])+";";else for(var r in n){var o=n[r];if(typeof o!="object")vr(o)&&(i+=Si(r)+":"+_r(r,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&e==null)for(var l=0;l<o.length;l++)vr(o[l])&&(i+=Si(r)+":"+_r(r,o[l])+";");else{var a=$t(t,e,o);switch(r){case"animation":case"animationName":{i+=Si(r)+":"+a+";";break}default:i+=r+"{"+a+"}"}}}return i}var yr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Pe,Qo=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var s=!0,r="";Pe=void 0;var o=e[0];o==null||o.raw===void 0?(s=!1,r+=$t(i,n,o)):r+=o[0];for(var l=1;l<e.length;l++)r+=$t(i,n,e[l]),s&&(r+=o[l]);yr.lastIndex=0;for(var a="",u;(u=yr.exec(r))!==null;)a+="-"+u[1];var d=sd(r)+a;return{name:d,styles:r,next:Pe}},ld=function(e){return e()},cd=tr.useInsertionEffect?tr.useInsertionEffect:!1,ud=cd||ld,gs={}.hasOwnProperty,Xo=_.createContext(typeof HTMLElement<"u"?qu({key:"css"}):null);Xo.Provider;var dd=function(e){return _.forwardRef(function(n,i){var s=_.useContext(Xo);return e(n,s,i)})},hd=_.createContext({}),zi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fd=function(e,n){var i={};for(var s in n)gs.call(n,s)&&(i[s]=n[s]);return i[zi]=e,i},pd=function(e){var n=e.cache,i=e.serialized,s=e.isStringTag;return Yo(n,i,s),ud(function(){return id(n,i,s)}),null},gd=dd(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var s=t[zi],r=[i],o="";typeof t.className=="string"?o=nd(e.registered,r,t.className):t.className!=null&&(o=t.className+" ");var l=Qo(r,void 0,_.useContext(hd));o+=e.key+"-"+l.name;var a={};for(var u in t)gs.call(t,u)&&u!=="css"&&u!==zi&&(a[u]=t[u]);return a.ref=n,a.className=o,_.createElement(_.Fragment,null,_.createElement(pd,{cache:e,serialized:l,isStringTag:typeof s=="string"}),_.createElement(s,a))}),md=gd,R=function(e,n){var i=arguments;if(n==null||!gs.call(n,"css"))return _.createElement.apply(void 0,i);var s=i.length,r=new Array(s);r[0]=md,r[1]=fd(e,n);for(var o=2;o<s;o++)r[o]=i[o];return _.createElement.apply(null,r)};function ms(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Qo(e)}var vd=function(){var e=ms.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function _d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const yd=Math.min,bd=Math.max,On=Math.round,pn=Math.floor,Pn=t=>({x:t,y:t});function xd(t){const{x:e,y:n,width:i,height:s}=t;return{width:i,height:s,top:n,left:e,right:e+i,bottom:n+s,x:e,y:n}}function Zo(t){return ea(t)?(t.nodeName||"").toLowerCase():"#document"}function Fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Jo(t){var e;return(e=(ea(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ea(t){return t instanceof Node||t instanceof Fe(t).Node}function Cd(t){return t instanceof Element||t instanceof Fe(t).Element}function vs(t){return t instanceof HTMLElement||t instanceof Fe(t).HTMLElement}function br(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Fe(t).ShadowRoot}function ta(t){const{overflow:e,overflowX:n,overflowY:i,display:s}=_s(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(s)}function wd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Sd(t){return["html","body","#document"].includes(Zo(t))}function _s(t){return Fe(t).getComputedStyle(t)}function Ed(t){if(Zo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||br(t)&&t.host||Jo(t);return br(e)?e.host:e}function na(t){const e=Ed(t);return Sd(e)?t.ownerDocument?t.ownerDocument.body:t.body:vs(e)&&ta(e)?e:na(e)}function Mn(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=na(t),r=s===((i=t.ownerDocument)==null?void 0:i.body),o=Fe(s);return r?e.concat(o,o.visualViewport||[],ta(s)?s:[],o.frameElement&&n?Mn(o.frameElement):[]):e.concat(s,Mn(s,[],n))}function Id(t){const e=_s(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=vs(t),r=s?t.offsetWidth:n,o=s?t.offsetHeight:i,l=On(n)!==r||On(i)!==o;return l&&(n=r,i=o),{width:n,height:i,$:l}}function ys(t){return Cd(t)?t:t.contextElement}function xr(t){const e=ys(t);if(!vs(e))return Pn(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:r}=Id(e);let o=(r?On(n.width):n.width)/i,l=(r?On(n.height):n.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Td=Pn(0);function Rd(t){const e=Fe(t);return!wd()||!e.visualViewport?Td:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Od(t,e,n){return!1}function Cr(t,e,n,i){e===void 0&&(e=!1);const s=t.getBoundingClientRect(),r=ys(t);let o=Pn(1);e&&(o=xr(t));const l=Od()?Rd(r):Pn(0);let a=(s.left+l.x)/o.x,u=(s.top+l.y)/o.y,d=s.width/o.x,h=s.height/o.y;if(r){const f=Fe(r),p=i;let g=f,m=g.frameElement;for(;m&&i&&p!==g;){const v=xr(m),y=m.getBoundingClientRect(),w=_s(m),b=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*v.x,C=y.top+(m.clientTop+parseFloat(w.paddingTop))*v.y;a*=v.x,u*=v.y,d*=v.x,h*=v.y,a+=b,u+=C,g=Fe(m),m=g.frameElement}}return xd({width:d,height:h,x:a,y:u})}function Pd(t,e){let n=null,i;const s=Jo(t);function r(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:u,top:d,width:h,height:f}=t.getBoundingClientRect();if(l||e(),!h||!f)return;const p=pn(d),g=pn(s.clientWidth-(u+h)),m=pn(s.clientHeight-(d+f)),v=pn(u),w={rootMargin:-p+"px "+-g+"px "+-m+"px "+-v+"px",threshold:bd(0,yd(1,a))||1};let b=!0;function C(I){const T=I[0].intersectionRatio;if(T!==a){if(!b)return o();T?o(!1,T):i=setTimeout(()=>{o(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(C,{...w,root:s.ownerDocument})}catch{n=new IntersectionObserver(C,w)}n.observe(t)}return o(!0),r}function Md(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,u=ys(t),d=s||r?[...u?Mn(u):[],...Mn(e)]:[];d.forEach(y=>{s&&y.addEventListener("scroll",n,{passive:!0}),r&&y.addEventListener("resize",n)});const h=u&&l?Pd(u,n):null;let f=-1,p=null;o&&(p=new ResizeObserver(y=>{let[w]=y;w&&w.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),n()}),u&&!a&&p.observe(u),p.observe(e));let g,m=a?Cr(t):null;a&&v();function v(){const y=Cr(t);m&&(y.x!==m.x||y.y!==m.y||y.width!==m.width||y.height!==m.height)&&n(),m=y,g=requestAnimationFrame(v)}return n(),()=>{var y;d.forEach(w=>{s&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),h==null||h(),(y=p)==null||y.disconnect(),p=null,a&&cancelAnimationFrame(g)}}var qi=_.useLayoutEffect,kd=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],kn=function(){};function Nd(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Ld(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=[].concat(i);if(e&&t)for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push("".concat(Nd(t,o)));return r.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var wr=function(e){return $d(e)?e.filter(Boolean):Xe(e)==="object"&&e!==null?[e]:[]},ia=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=He(e,kd);return O({},n)},G=function(e,n,i){var s=e.cx,r=e.getStyles,o=e.getClassNames,l=e.className;return{css:r(n,e),className:s(i??{},o(n,e),l)}};function ci(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Ad(t){return ci(t)?window.innerHeight:t.clientHeight}function sa(t){return ci(t)?window.pageYOffset:t.scrollTop}function Nn(t,e){if(ci(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Dd(t){var e=getComputedStyle(t),n=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var s=t;s=s.parentElement;)if(e=getComputedStyle(s),!(n&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return s;return document.documentElement}function Fd(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:kn,s=sa(t),r=e-s,o=10,l=0;function a(){l+=o;var u=Fd(l,s,r,n);Nn(t,u),l<n?window.requestAnimationFrame(a):i(t)}a()}function Sr(t,e){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=e.offsetHeight/3;i.bottom+s>n.bottom?Nn(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+s,t.scrollHeight)):i.top-s<n.top&&Nn(t,Math.max(e.offsetTop-s,0))}function jd(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Er(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Vd(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ra=!1,Hd={get passive(){return ra=!0}},mn=typeof window<"u"?window:{};mn.addEventListener&&mn.removeEventListener&&(mn.addEventListener("p",kn,Hd),mn.removeEventListener("p",kn,!1));var Wd=ra;function Ud(t){return t!=null}function $d(t){return Array.isArray(t)}function vn(t,e,n){return t?e:n}var Bd=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var r=Object.entries(e).filter(function(o){var l=Ae(o,1),a=l[0];return!i.includes(a)});return r.reduce(function(o,l){var a=Ae(l,2),u=a[0],d=a[1];return o[u]=d,o},{})},zd=["children","innerProps"],qd=["children","innerProps"];function Gd(t){var e=t.maxHeight,n=t.menuEl,i=t.minHeight,s=t.placement,r=t.shouldScroll,o=t.isFixedPosition,l=t.controlHeight,a=Dd(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var d=a.getBoundingClientRect(),h=d.height,f=n.getBoundingClientRect(),p=f.bottom,g=f.height,m=f.top,v=n.offsetParent.getBoundingClientRect(),y=v.top,w=o?window.innerHeight:Ad(a),b=sa(a),C=parseInt(getComputedStyle(n).marginBottom,10),I=parseInt(getComputedStyle(n).marginTop,10),T=y-I,E=w-m,k=T+b,$=h-b-m,X=p-w+b+C,oe=b+m-I,N=160;switch(s){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:e};if($>=g&&!o)return r&&gn(a,X,N),{placement:"bottom",maxHeight:e};if(!o&&$>=i||o&&E>=i){r&&gn(a,X,N);var Ce=o?E-C:$-C;return{placement:"bottom",maxHeight:Ce}}if(s==="auto"||o){var fe=e,Y=o?T:k;return Y>=i&&(fe=Math.min(Y-C-l,e)),{placement:"top",maxHeight:fe}}if(s==="bottom")return r&&Nn(a,X),{placement:"bottom",maxHeight:e};break;case"top":if(T>=g)return{placement:"top",maxHeight:e};if(k>=g&&!o)return r&&gn(a,oe,N),{placement:"top",maxHeight:e};if(!o&&k>=i||o&&T>=i){var K=e;return(!o&&k>=i||o&&T>=i)&&(K=o?T-I:k-I),r&&gn(a,oe,N),{placement:"top",maxHeight:K}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(s,'".'))}return u}function Yd(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var oa=function(e){return e==="auto"?"bottom":e},Kd=function(e,n){var i,s=e.placement,r=e.theme,o=r.borderRadius,l=r.spacing,a=r.colors;return O((i={label:"menu"},At(i,Yd(s),"100%"),At(i,"position","absolute"),At(i,"width","100%"),At(i,"zIndex",1),i),n?{}:{backgroundColor:a.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},aa=_.createContext(null),Qd=function(e){var n=e.children,i=e.minMenuHeight,s=e.maxMenuHeight,r=e.menuPlacement,o=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,u=_.useContext(aa)||{},d=u.setPortalPlacement,h=_.useRef(null),f=_.useState(s),p=Ae(f,2),g=p[0],m=p[1],v=_.useState(null),y=Ae(v,2),w=y[0],b=y[1],C=a.spacing.controlHeight;return qi(function(){var I=h.current;if(I){var T=o==="fixed",E=l&&!T,k=Gd({maxHeight:s,menuEl:I,minHeight:i,placement:r,shouldScroll:E,isFixedPosition:T,controlHeight:C});m(k.maxHeight),b(k.placement),d==null||d(k.placement)}},[s,r,o,l,i,d,C]),n({ref:h,placerProps:O(O({},e),{},{placement:w||oa(r),maxHeight:g})})},Xd=function(e){var n=e.children,i=e.innerRef,s=e.innerProps;return R("div",P({},G(e,"menu",{menu:!0}),{ref:i},s),n)},Zd=Xd,Jd=function(e,n){var i=e.maxHeight,s=e.theme.spacing.baseUnit;return O({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:s,paddingTop:s})},eh=function(e){var n=e.children,i=e.innerProps,s=e.innerRef,r=e.isMulti;return R("div",P({},G(e,"menuList",{"menu-list":!0,"menu-list--is-multi":r}),{ref:s},i),n)},la=function(e,n){var i=e.theme,s=i.spacing.baseUnit,r=i.colors;return O({textAlign:"center"},n?{}:{color:r.neutral40,padding:"".concat(s*2,"px ").concat(s*3,"px")})},th=la,nh=la,ih=function(e){var n=e.children,i=n===void 0?"No options":n,s=e.innerProps,r=He(e,zd);return R("div",P({},G(O(O({},r),{},{children:i,innerProps:s}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),s),i)},sh=function(e){var n=e.children,i=n===void 0?"Loading...":n,s=e.innerProps,r=He(e,qd);return R("div",P({},G(O(O({},r),{},{children:i,innerProps:s}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),s),i)},rh=function(e){var n=e.rect,i=e.offset,s=e.position;return{left:n.left,position:s,top:i,width:n.width,zIndex:1}},oh=function(e){var n=e.appendTo,i=e.children,s=e.controlElement,r=e.innerProps,o=e.menuPlacement,l=e.menuPosition,a=_.useRef(null),u=_.useRef(null),d=_.useState(oa(o)),h=Ae(d,2),f=h[0],p=h[1],g=_.useMemo(function(){return{setPortalPlacement:p}},[]),m=_.useState(null),v=Ae(m,2),y=v[0],w=v[1],b=_.useCallback(function(){if(s){var E=jd(s),k=l==="fixed"?0:window.pageYOffset,$=E[f]+k;($!==(y==null?void 0:y.offset)||E.left!==(y==null?void 0:y.rect.left)||E.width!==(y==null?void 0:y.rect.width))&&w({offset:$,rect:E})}},[s,l,f,y==null?void 0:y.offset,y==null?void 0:y.rect.left,y==null?void 0:y.rect.width]);qi(function(){b()},[b]);var C=_.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),s&&a.current&&(u.current=Md(s,a.current,b,{elementResize:"ResizeObserver"in window}))},[s,b]);qi(function(){C()},[C]);var I=_.useCallback(function(E){a.current=E,C()},[C]);if(!n&&l!=="fixed"||!y)return null;var T=R("div",P({ref:I},G(O(O({},e),{},{offset:y.offset,position:l,rect:y.rect}),"menuPortal",{"menu-portal":!0}),r),i);return R(aa.Provider,{value:g},n?cc.createPortal(T,n):T)},ah=function(e){var n=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},lh=function(e){var n=e.children,i=e.innerProps,s=e.isDisabled,r=e.isRtl;return R("div",P({},G(e,"container",{"--is-disabled":s,"--is-rtl":r}),i),n)},ch=function(e,n){var i=e.theme.spacing,s=e.isMulti,r=e.hasValue,o=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:s&&r&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},uh=function(e){var n=e.children,i=e.innerProps,s=e.isMulti,r=e.hasValue;return R("div",P({},G(e,"valueContainer",{"value-container":!0,"value-container--is-multi":s,"value-container--has-value":r}),i),n)},dh=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},hh=function(e){var n=e.children,i=e.innerProps;return R("div",P({},G(e,"indicatorsContainer",{indicators:!0}),i),n)},Ir,fh=["size"],ph=["innerProps","isRtl","size"],gh={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},ca=function(e){var n=e.size,i=He(e,fh);return R("svg",P({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gh},i))},bs=function(e){return R(ca,P({size:20},e),R("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ua=function(e){return R(ca,P({size:20},e),R("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},da=function(e,n){var i=e.isFocused,s=e.theme,r=s.spacing.baseUnit,o=s.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?o.neutral60:o.neutral20,padding:r*2,":hover":{color:i?o.neutral80:o.neutral40}})},mh=da,vh=function(e){var n=e.children,i=e.innerProps;return R("div",P({},G(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||R(ua,null))},_h=da,yh=function(e){var n=e.children,i=e.innerProps;return R("div",P({},G(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||R(bs,null))},bh=function(e,n){var i=e.isDisabled,s=e.theme,r=s.spacing.baseUnit,o=s.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?o.neutral10:o.neutral20,marginBottom:r*2,marginTop:r*2})},xh=function(e){var n=e.innerProps;return R("span",P({},n,G(e,"indicatorSeparator",{"indicator-separator":!0})))},Ch=vd(Ir||(Ir=_d([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),wh=function(e,n){var i=e.isFocused,s=e.size,r=e.theme,o=r.colors,l=r.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:s,lineHeight:1,marginRight:s,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?o.neutral60:o.neutral20,padding:l*2})},Ei=function(e){var n=e.delay,i=e.offset;return R("span",{css:ms({animation:"".concat(Ch," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Sh=function(e){var n=e.innerProps,i=e.isRtl,s=e.size,r=s===void 0?4:s,o=He(e,ph);return R("div",P({},G(O(O({},o),{},{innerProps:n,isRtl:i,size:r}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),R(Ei,{delay:0,offset:i}),R(Ei,{delay:160,offset:!0}),R(Ei,{delay:320,offset:!i}))},Eh=function(e,n){var i=e.isDisabled,s=e.isFocused,r=e.theme,o=r.colors,l=r.borderRadius,a=r.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?o.neutral5:o.neutral0,borderColor:i?o.neutral10:s?o.primary:o.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:s?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:s?o.primary:o.neutral30}})},Ih=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,r=e.innerRef,o=e.innerProps,l=e.menuIsOpen;return R("div",P({ref:r},G(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":s,"control--menu-is-open":l}),o,{"aria-disabled":i||void 0}),n)},Th=Ih,Rh=["data"],Oh=function(e,n){var i=e.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Ph=function(e){var n=e.children,i=e.cx,s=e.getStyles,r=e.getClassNames,o=e.Heading,l=e.headingProps,a=e.innerProps,u=e.label,d=e.theme,h=e.selectProps;return R("div",P({},G(e,"group",{group:!0}),a),R(o,P({},l,{selectProps:h,theme:d,getStyles:s,getClassNames:r,cx:i}),u),R("div",null,n))},Mh=function(e,n){var i=e.theme,s=i.colors,r=i.spacing;return O({label:"group",cursor:"default",display:"block"},n?{}:{color:s.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:r.baseUnit*3,paddingRight:r.baseUnit*3,textTransform:"uppercase"})},kh=function(e){var n=ia(e);n.data;var i=He(n,Rh);return R("div",P({},G(e,"groupHeading",{"group-heading":!0}),i))},Nh=Ph,Lh=["innerRef","isDisabled","isHidden","inputClassName"],Ah=function(e,n){var i=e.isDisabled,s=e.value,r=e.theme,o=r.spacing,l=r.colors;return O(O({visibility:i?"hidden":"visible",transform:s?"translateZ(0)":""},Dh),n?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:l.neutral80})},ha={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Dh={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},ha)},Fh=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},ha)},jh=function(e){var n=e.cx,i=e.value,s=ia(e),r=s.innerRef,o=s.isDisabled,l=s.isHidden,a=s.inputClassName,u=He(s,Lh);return R("div",P({},G(e,"input",{"input-container":!0}),{"data-value":i||""}),R("input",P({className:n({input:!0},a),ref:r,style:Fh(l),disabled:o},u)))},Vh=jh,Hh=function(e,n){var i=e.theme,s=i.spacing,r=i.borderRadius,o=i.colors;return O({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:o.neutral10,borderRadius:r/2,margin:s.baseUnit/2})},Wh=function(e,n){var i=e.theme,s=i.borderRadius,r=i.colors,o=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:s/2,color:r.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Uh=function(e,n){var i=e.theme,s=i.spacing,r=i.borderRadius,o=i.colors,l=e.isFocused;return O({alignItems:"center",display:"flex"},n?{}:{borderRadius:r/2,backgroundColor:l?o.dangerLight:void 0,paddingLeft:s.baseUnit,paddingRight:s.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},fa=function(e){var n=e.children,i=e.innerProps;return R("div",i,n)},$h=fa,Bh=fa;function zh(t){var e=t.children,n=t.innerProps;return R("div",P({role:"button"},n),e||R(bs,{size:14}))}var qh=function(e){var n=e.children,i=e.components,s=e.data,r=e.innerProps,o=e.isDisabled,l=e.removeProps,a=e.selectProps,u=i.Container,d=i.Label,h=i.Remove;return R(u,{data:s,innerProps:O(O({},G(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),r),selectProps:a},R(d,{data:s,innerProps:O({},G(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),R(h,{data:s,innerProps:O(O({},G(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},Gh=qh,Yh=function(e,n){var i=e.isDisabled,s=e.isFocused,r=e.isSelected,o=e.theme,l=o.spacing,a=o.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:r?a.primary:s?a.primary25:"transparent",color:i?a.neutral20:r?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:r?a.primary:a.primary50}})},Kh=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,r=e.isSelected,o=e.innerRef,l=e.innerProps;return R("div",P({},G(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":s,"option--is-selected":r}),{ref:o,"aria-disabled":i},l),n)},Qh=Kh,Xh=function(e,n){var i=e.theme,s=i.spacing,r=i.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:r.neutral50,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},Zh=function(e){var n=e.children,i=e.innerProps;return R("div",P({},G(e,"placeholder",{placeholder:!0}),i),n)},Jh=Zh,ef=function(e,n){var i=e.isDisabled,s=e.theme,r=s.spacing,o=s.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?o.neutral40:o.neutral80,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2})},tf=function(e){var n=e.children,i=e.isDisabled,s=e.innerProps;return R("div",P({},G(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),s),n)},nf=tf,sf={ClearIndicator:yh,Control:Th,DropdownIndicator:vh,DownChevron:ua,CrossIcon:bs,Group:Nh,GroupHeading:kh,IndicatorsContainer:hh,IndicatorSeparator:xh,Input:Vh,LoadingIndicator:Sh,Menu:Zd,MenuList:eh,MenuPortal:oh,LoadingMessage:sh,NoOptionsMessage:ih,MultiValue:Gh,MultiValueContainer:$h,MultiValueLabel:Bh,MultiValueRemove:zh,Option:Qh,Placeholder:Jh,SelectContainer:lh,SingleValue:nf,ValueContainer:uh},rf=function(e){return O(O({},sf),e.components)},Tr=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function of(t,e){return!!(t===e||Tr(t)&&Tr(e))}function af(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!of(t[n],e[n]))return!1;return!0}function lf(t,e){e===void 0&&(e=af);var n=null;function i(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];if(n&&n.lastThis===this&&e(s,n.lastArgs))return n.lastResult;var o=t.apply(this,s);return n={lastResult:o,lastArgs:s,lastThis:this},o}return i.clear=function(){n=null},i}var cf={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},uf=function(e){return R("span",P({css:cf},e))},Rr=uf,df={guidance:function(e){var n=e.isSearchable,i=e.isMulti,s=e.tabSelectsValue,r=e.context,o=e.isInitialFocus;switch(r){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(s?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,i=e.label,s=i===void 0?"":i,r=e.labels,o=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(s,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(r.length>1?"s":""," ").concat(r.join(","),", selected.");case"select-option":return o?"option ".concat(s," is disabled. Select another option."):"option ".concat(s,", selected.");default:return""}},onFocus:function(e){var n=e.context,i=e.focused,s=e.options,r=e.label,o=r===void 0?"":r,l=e.selectValue,a=e.isDisabled,u=e.isSelected,d=e.isAppleDevice,h=function(m,v){return m&&m.length?"".concat(m.indexOf(v)+1," of ").concat(m.length):""};if(n==="value"&&l)return"value ".concat(o," focused, ").concat(h(l,i),".");if(n==="menu"&&d){var f=a?" disabled":"",p="".concat(u?" selected":"").concat(f);return"".concat(o).concat(p,", ").concat(h(s,i),".")}return""},onFilter:function(e){var n=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},hf=function(e){var n=e.ariaSelection,i=e.focusedOption,s=e.focusedValue,r=e.focusableOptions,o=e.isFocused,l=e.selectValue,a=e.selectProps,u=e.id,d=e.isAppleDevice,h=a.ariaLiveMessages,f=a.getOptionLabel,p=a.inputValue,g=a.isMulti,m=a.isOptionDisabled,v=a.isSearchable,y=a.menuIsOpen,w=a.options,b=a.screenReaderStatus,C=a.tabSelectsValue,I=a.isLoading,T=a["aria-label"],E=a["aria-live"],k=_.useMemo(function(){return O(O({},df),h||{})},[h]),$=_.useMemo(function(){var Y="";if(n&&k.onChange){var K=n.option,de=n.options,he=n.removedValue,z=n.removedValues,Z=n.value,st=function(Ne){return Array.isArray(Ne)?null:Ne},J=he||K||st(Z),_e=J?f(J):"",ke=de||z||void 0,We=ke?ke.map(f):[],Se=O({isDisabled:J&&m(J,l),label:_e,labels:We},n);Y=k.onChange(Se)}return Y},[n,k,m,l,f]),X=_.useMemo(function(){var Y="",K=i||s,de=!!(i&&l&&l.includes(i));if(K&&k.onFocus){var he={focused:K,label:f(K),isDisabled:m(K,l),isSelected:de,options:r,context:K===i?"menu":"value",selectValue:l,isAppleDevice:d};Y=k.onFocus(he)}return Y},[i,s,f,m,k,r,l,d]),oe=_.useMemo(function(){var Y="";if(y&&w.length&&!I&&k.onFilter){var K=b({count:r.length});Y=k.onFilter({inputValue:p,resultsMessage:K})}return Y},[r,p,y,k,w,b,I]),N=(n==null?void 0:n.action)==="initial-input-focus",Ce=_.useMemo(function(){var Y="";if(k.guidance){var K=s?"value":y?"menu":"input";Y=k.guidance({"aria-label":T,context:K,isDisabled:i&&m(i,l),isMulti:g,isSearchable:v,tabSelectsValue:C,isInitialFocus:N})}return Y},[T,i,s,g,m,v,y,k,l,C,N]),fe=R(_.Fragment,null,R("span",{id:"aria-selection"},$),R("span",{id:"aria-focused"},X),R("span",{id:"aria-results"},oe),R("span",{id:"aria-guidance"},Ce));return R(_.Fragment,null,R(Rr,{id:u},N&&fe),R(Rr,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!N&&fe))},ff=hf,Gi=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],pf=new RegExp("["+Gi.map(function(t){return t.letters}).join("")+"]","g"),pa={};for(var Ii=0;Ii<Gi.length;Ii++)for(var Ti=Gi[Ii],Ri=0;Ri<Ti.letters.length;Ri++)pa[Ti.letters[Ri]]=Ti.base;var ga=function(e){return e.replace(pf,function(n){return pa[n]})},gf=lf(ga),Or=function(e){return e.replace(/^\s+|\s+$/g,"")},mf=function(e){return"".concat(e.label," ").concat(e.value)},vf=function(e){return function(n,i){if(n.data.__isNew__)return!0;var s=O({ignoreCase:!0,ignoreAccents:!0,stringify:mf,trim:!0,matchFrom:"any"},e),r=s.ignoreCase,o=s.ignoreAccents,l=s.stringify,a=s.trim,u=s.matchFrom,d=a?Or(i):i,h=a?Or(l(n)):l(n);return r&&(d=d.toLowerCase(),h=h.toLowerCase()),o&&(d=gf(d),h=ga(h)),u==="start"?h.substr(0,d.length)===d:h.indexOf(d)>-1}},_f=["innerRef"];function yf(t){var e=t.innerRef,n=He(t,_f),i=Bd(n,"onExited","in","enter","exit","appear");return R("input",P({ref:e},i,{css:ms({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var bf=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function xf(t){var e=t.isEnabled,n=t.onBottomArrive,i=t.onBottomLeave,s=t.onTopArrive,r=t.onTopLeave,o=_.useRef(!1),l=_.useRef(!1),a=_.useRef(0),u=_.useRef(null),d=_.useCallback(function(v,y){if(u.current!==null){var w=u.current,b=w.scrollTop,C=w.scrollHeight,I=w.clientHeight,T=u.current,E=y>0,k=C-I-b,$=!1;k>y&&o.current&&(i&&i(v),o.current=!1),E&&l.current&&(r&&r(v),l.current=!1),E&&y>k?(n&&!o.current&&n(v),T.scrollTop=C,$=!0,o.current=!0):!E&&-y>b&&(s&&!l.current&&s(v),T.scrollTop=0,$=!0,l.current=!0),$&&bf(v)}},[n,i,s,r]),h=_.useCallback(function(v){d(v,v.deltaY)},[d]),f=_.useCallback(function(v){a.current=v.changedTouches[0].clientY},[]),p=_.useCallback(function(v){var y=a.current-v.changedTouches[0].clientY;d(v,y)},[d]),g=_.useCallback(function(v){if(v){var y=Wd?{passive:!1}:!1;v.addEventListener("wheel",h,y),v.addEventListener("touchstart",f,y),v.addEventListener("touchmove",p,y)}},[p,f,h]),m=_.useCallback(function(v){v&&(v.removeEventListener("wheel",h,!1),v.removeEventListener("touchstart",f,!1),v.removeEventListener("touchmove",p,!1))},[p,f,h]);return _.useEffect(function(){if(e){var v=u.current;return g(v),function(){m(v)}}},[e,g,m]),function(v){u.current=v}}var Pr=["boxSizing","height","overflow","paddingRight","position"],Mr={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function kr(t){t.preventDefault()}function Nr(t){t.stopPropagation()}function Lr(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function Ar(){return"ontouchstart"in window||navigator.maxTouchPoints}var Dr=!!(typeof window<"u"&&window.document&&window.document.createElement),Rt=0,ot={capture:!1,passive:!1};function Cf(t){var e=t.isEnabled,n=t.accountForScrollbars,i=n===void 0?!0:n,s=_.useRef({}),r=_.useRef(null),o=_.useCallback(function(a){if(Dr){var u=document.body,d=u&&u.style;if(i&&Pr.forEach(function(g){var m=d&&d[g];s.current[g]=m}),i&&Rt<1){var h=parseInt(s.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,p=window.innerWidth-f+h||0;Object.keys(Mr).forEach(function(g){var m=Mr[g];d&&(d[g]=m)}),d&&(d.paddingRight="".concat(p,"px"))}u&&Ar()&&(u.addEventListener("touchmove",kr,ot),a&&(a.addEventListener("touchstart",Lr,ot),a.addEventListener("touchmove",Nr,ot))),Rt+=1}},[i]),l=_.useCallback(function(a){if(Dr){var u=document.body,d=u&&u.style;Rt=Math.max(Rt-1,0),i&&Rt<1&&Pr.forEach(function(h){var f=s.current[h];d&&(d[h]=f)}),u&&Ar()&&(u.removeEventListener("touchmove",kr,ot),a&&(a.removeEventListener("touchstart",Lr,ot),a.removeEventListener("touchmove",Nr,ot)))}},[i]);return _.useEffect(function(){if(e){var a=r.current;return o(a),function(){l(a)}}},[e,o,l]),function(a){r.current=a}}var wf=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},Sf={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Ef(t){var e=t.children,n=t.lockEnabled,i=t.captureEnabled,s=i===void 0?!0:i,r=t.onBottomArrive,o=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,u=xf({isEnabled:s,onBottomArrive:r,onBottomLeave:o,onTopArrive:l,onTopLeave:a}),d=Cf({isEnabled:n}),h=function(p){u(p),d(p)};return R(_.Fragment,null,n&&R("div",{onClick:wf,css:Sf}),e(h))}var If={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Tf=function(e){var n=e.name,i=e.onFocus;return R("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:If,value:"",onChange:function(){}})},Rf=Tf;function xs(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Of(){return xs(/^iPhone/i)}function ma(){return xs(/^Mac/i)}function Pf(){return xs(/^iPad/i)||ma()&&navigator.maxTouchPoints>1}function Mf(){return Of()||Pf()}function kf(){return ma()||Mf()}var Nf=function(e){return e.label},Lf=function(e){return e.label},Af=function(e){return e.value},Df=function(e){return!!e.isDisabled},Ff={clearIndicator:_h,container:ah,control:Eh,dropdownIndicator:mh,group:Oh,groupHeading:Mh,indicatorsContainer:dh,indicatorSeparator:bh,input:Ah,loadingIndicator:wh,loadingMessage:nh,menu:Kd,menuList:Jd,menuPortal:rh,multiValue:Hh,multiValueLabel:Wh,multiValueRemove:Uh,noOptionsMessage:th,option:Yh,placeholder:Xh,singleValue:ef,valueContainer:ch},jf={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Vf=4,va=4,Hf=38,Wf=va*2,Uf={baseUnit:va,controlHeight:Hf,menuGutter:Wf},Oi={borderRadius:Vf,colors:jf,spacing:Uf},$f={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Er(),captureMenuScroll:!Er(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:vf(),formatGroupLabel:Nf,getOptionLabel:Lf,getOptionValue:Af,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Df,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Vd(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Fr(t,e,n,i){var s=ba(t,e,n),r=xa(t,e,n),o=ya(t,e),l=Ln(t,e);return{type:"option",data:e,isDisabled:s,isSelected:r,label:o,value:l,index:i}}function wn(t,e){return t.options.map(function(n,i){if("options"in n){var s=n.options.map(function(o,l){return Fr(t,o,e,l)}).filter(function(o){return Vr(t,o)});return s.length>0?{type:"group",data:n,options:s,index:i}:void 0}var r=Fr(t,n,e,i);return Vr(t,r)?r:void 0}).filter(Ud)}function _a(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,ls(n.options.map(function(i){return i.data}))):e.push(n.data),e},[])}function jr(t,e){return t.reduce(function(n,i){return i.type==="group"?n.push.apply(n,ls(i.options.map(function(s){return{data:s.data,id:"".concat(e,"-").concat(i.index,"-").concat(s.index)}}))):n.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),n},[])}function Bf(t,e){return _a(wn(t,e))}function Vr(t,e){var n=t.inputValue,i=n===void 0?"":n,s=e.data,r=e.isSelected,o=e.label,l=e.value;return(!wa(t)||!r)&&Ca(t,{label:o,value:l,data:s},i)}function zf(t,e){var n=t.focusedValue,i=t.selectValue,s=i.indexOf(n);if(s>-1){var r=e.indexOf(n);if(r>-1)return n;if(s<e.length)return e[s]}return null}function qf(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var Pi=function(e,n){var i,s=(i=e.find(function(r){return r.data===n}))===null||i===void 0?void 0:i.id;return s||null},ya=function(e,n){return e.getOptionLabel(n)},Ln=function(e,n){return e.getOptionValue(n)};function ba(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function xa(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var i=Ln(t,e);return n.some(function(s){return Ln(t,s)===i})}function Ca(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var wa=function(e){var n=e.hideSelectedOptions,i=e.isMulti;return n===void 0?i:n},Gf=1,Sa=function(t){du(n,t);var e=pu(n);function n(i){var s;if(cu(this,n),s=e.call(this,i),s.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},s.blockOptionHover=!1,s.isComposing=!1,s.commonProps=void 0,s.initialTouchX=0,s.initialTouchY=0,s.openAfterFocus=!1,s.scrollToFocusedOptionOnUpdate=!1,s.userIsDragging=void 0,s.isAppleDevice=kf(),s.controlRef=null,s.getControlRef=function(a){s.controlRef=a},s.focusedOptionRef=null,s.getFocusedOptionRef=function(a){s.focusedOptionRef=a},s.menuListRef=null,s.getMenuListRef=function(a){s.menuListRef=a},s.inputRef=null,s.getInputRef=function(a){s.inputRef=a},s.focus=s.focusInput,s.blur=s.blurInput,s.onChange=function(a,u){var d=s.props,h=d.onChange,f=d.name;u.name=f,s.ariaOnChange(a,u),h(a,u)},s.setValue=function(a,u,d){var h=s.props,f=h.closeMenuOnSelect,p=h.isMulti,g=h.inputValue;s.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(s.setState({inputIsHiddenAfterUpdate:!p}),s.onMenuClose()),s.setState({clearFocusValueOnUpdate:!0}),s.onChange(a,{action:u,option:d})},s.selectOption=function(a){var u=s.props,d=u.blurInputOnSelect,h=u.isMulti,f=u.name,p=s.state.selectValue,g=h&&s.isOptionSelected(a,p),m=s.isOptionDisabled(a,p);if(g){var v=s.getOptionValue(a);s.setValue(p.filter(function(y){return s.getOptionValue(y)!==v}),"deselect-option",a)}else if(!m)h?s.setValue([].concat(ls(p),[a]),"select-option",a):s.setValue(a,"select-option");else{s.ariaOnChange(a,{action:"select-option",option:a,name:f});return}d&&s.blurInput()},s.removeValue=function(a){var u=s.props.isMulti,d=s.state.selectValue,h=s.getOptionValue(a),f=d.filter(function(g){return s.getOptionValue(g)!==h}),p=vn(u,f,f[0]||null);s.onChange(p,{action:"remove-value",removedValue:a}),s.focusInput()},s.clearValue=function(){var a=s.state.selectValue;s.onChange(vn(s.props.isMulti,[],null),{action:"clear",removedValues:a})},s.popValue=function(){var a=s.props.isMulti,u=s.state.selectValue,d=u[u.length-1],h=u.slice(0,u.length-1),f=vn(a,h,h[0]||null);s.onChange(f,{action:"pop-value",removedValue:d})},s.getFocusedOptionId=function(a){return Pi(s.state.focusableOptionsWithIds,a)},s.getFocusableOptionsWithIds=function(){return jr(wn(s.props,s.state.selectValue),s.getElementId("option"))},s.getValue=function(){return s.state.selectValue},s.cx=function(){for(var a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return Ld.apply(void 0,[s.props.classNamePrefix].concat(u))},s.getOptionLabel=function(a){return ya(s.props,a)},s.getOptionValue=function(a){return Ln(s.props,a)},s.getStyles=function(a,u){var d=s.props.unstyled,h=Ff[a](u,d);h.boxSizing="border-box";var f=s.props.styles[a];return f?f(h,u):h},s.getClassNames=function(a,u){var d,h;return(d=(h=s.props.classNames)[a])===null||d===void 0?void 0:d.call(h,u)},s.getElementId=function(a){return"".concat(s.state.instancePrefix,"-").concat(a)},s.getComponents=function(){return rf(s.props)},s.buildCategorizedOptions=function(){return wn(s.props,s.state.selectValue)},s.getCategorizedOptions=function(){return s.props.menuIsOpen?s.buildCategorizedOptions():[]},s.buildFocusableOptions=function(){return _a(s.buildCategorizedOptions())},s.getFocusableOptions=function(){return s.props.menuIsOpen?s.buildFocusableOptions():[]},s.ariaOnChange=function(a,u){s.setState({ariaSelection:O({value:a},u)})},s.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),s.focusInput())},s.onMenuMouseMove=function(a){s.blockOptionHover=!1},s.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=s.props.openMenuOnClick;s.state.isFocused?s.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&s.onMenuClose():u&&s.openMenu("first"):(u&&(s.openAfterFocus=!0),s.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},s.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!s.props.isDisabled){var u=s.props,d=u.isMulti,h=u.menuIsOpen;s.focusInput(),h?(s.setState({inputIsHiddenAfterUpdate:!d}),s.onMenuClose()):s.openMenu("first"),a.preventDefault()}},s.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(s.clearValue(),a.preventDefault(),s.openAfterFocus=!1,a.type==="touchend"?s.focusInput():setTimeout(function(){return s.focusInput()}))},s.onScroll=function(a){typeof s.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&ci(a.target)&&s.props.onMenuClose():typeof s.props.closeMenuOnScroll=="function"&&s.props.closeMenuOnScroll(a)&&s.props.onMenuClose()},s.onCompositionStart=function(){s.isComposing=!0},s.onCompositionEnd=function(){s.isComposing=!1},s.onTouchStart=function(a){var u=a.touches,d=u&&u.item(0);d&&(s.initialTouchX=d.clientX,s.initialTouchY=d.clientY,s.userIsDragging=!1)},s.onTouchMove=function(a){var u=a.touches,d=u&&u.item(0);if(d){var h=Math.abs(d.clientX-s.initialTouchX),f=Math.abs(d.clientY-s.initialTouchY),p=5;s.userIsDragging=h>p||f>p}},s.onTouchEnd=function(a){s.userIsDragging||(s.controlRef&&!s.controlRef.contains(a.target)&&s.menuListRef&&!s.menuListRef.contains(a.target)&&s.blurInput(),s.initialTouchX=0,s.initialTouchY=0)},s.onControlTouchEnd=function(a){s.userIsDragging||s.onControlMouseDown(a)},s.onClearIndicatorTouchEnd=function(a){s.userIsDragging||s.onClearIndicatorMouseDown(a)},s.onDropdownIndicatorTouchEnd=function(a){s.userIsDragging||s.onDropdownIndicatorMouseDown(a)},s.handleInputChange=function(a){var u=s.props.inputValue,d=a.currentTarget.value;s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange(d,{action:"input-change",prevInputValue:u}),s.props.menuIsOpen||s.onMenuOpen()},s.onInputFocus=function(a){s.props.onFocus&&s.props.onFocus(a),s.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(s.openAfterFocus||s.props.openMenuOnFocus)&&s.openMenu("first"),s.openAfterFocus=!1},s.onInputBlur=function(a){var u=s.props.inputValue;if(s.menuListRef&&s.menuListRef.contains(document.activeElement)){s.inputRef.focus();return}s.props.onBlur&&s.props.onBlur(a),s.onInputChange("",{action:"input-blur",prevInputValue:u}),s.onMenuClose(),s.setState({focusedValue:null,isFocused:!1})},s.onOptionHover=function(a){if(!(s.blockOptionHover||s.state.focusedOption===a)){var u=s.getFocusableOptions(),d=u.indexOf(a);s.setState({focusedOption:a,focusedOptionId:d>-1?s.getFocusedOptionId(a):null})}},s.shouldHideSelectedOptions=function(){return wa(s.props)},s.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),s.focus()},s.onKeyDown=function(a){var u=s.props,d=u.isMulti,h=u.backspaceRemovesValue,f=u.escapeClearsValue,p=u.inputValue,g=u.isClearable,m=u.isDisabled,v=u.menuIsOpen,y=u.onKeyDown,w=u.tabSelectsValue,b=u.openMenuOnFocus,C=s.state,I=C.focusedOption,T=C.focusedValue,E=C.selectValue;if(!m&&!(typeof y=="function"&&(y(a),a.defaultPrevented))){switch(s.blockOptionHover=!0,a.key){case"ArrowLeft":if(!d||p)return;s.focusValue("previous");break;case"ArrowRight":if(!d||p)return;s.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(T)s.removeValue(T);else{if(!h)return;d?s.popValue():g&&s.clearValue()}break;case"Tab":if(s.isComposing||a.shiftKey||!v||!w||!I||b&&s.isOptionSelected(I,E))return;s.selectOption(I);break;case"Enter":if(a.keyCode===229)break;if(v){if(!I||s.isComposing)return;s.selectOption(I);break}return;case"Escape":v?(s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange("",{action:"menu-close",prevInputValue:p}),s.onMenuClose()):g&&f&&s.clearValue();break;case" ":if(p)return;if(!v){s.openMenu("first");break}if(!I)return;s.selectOption(I);break;case"ArrowUp":v?s.focusOption("up"):s.openMenu("last");break;case"ArrowDown":v?s.focusOption("down"):s.openMenu("first");break;case"PageUp":if(!v)return;s.focusOption("pageup");break;case"PageDown":if(!v)return;s.focusOption("pagedown");break;case"Home":if(!v)return;s.focusOption("first");break;case"End":if(!v)return;s.focusOption("last");break;default:return}a.preventDefault()}},s.state.instancePrefix="react-select-"+(s.props.instanceId||++Gf),s.state.selectValue=wr(i.value),i.menuIsOpen&&s.state.selectValue.length){var r=s.getFocusableOptionsWithIds(),o=s.buildFocusableOptions(),l=o.indexOf(s.state.selectValue[0]);s.state.focusableOptionsWithIds=r,s.state.focusedOption=o[l],s.state.focusedOptionId=Pi(r,o[l])}return s}return uu(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Sr(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(s){var r=this.props,o=r.isDisabled,l=r.menuIsOpen,a=this.state.isFocused;(a&&!o&&s.isDisabled||a&&l&&!s.menuIsOpen)&&this.focusInput(),a&&o&&!s.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!o&&s.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Sr(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(s,r){this.props.onInputChange(s,r)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(s){var r=this,o=this.state,l=o.selectValue,a=o.isFocused,u=this.buildFocusableOptions(),d=s==="first"?0:u.length-1;if(!this.props.isMulti){var h=u.indexOf(l[0]);h>-1&&(d=h)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return r.onMenuOpen()})}},{key:"focusValue",value:function(s){var r=this.state,o=r.selectValue,l=r.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=o.indexOf(l);l||(a=-1);var u=o.length-1,d=-1;if(o.length){switch(s){case"previous":a===0?d=0:a===-1?d=u:d=a-1;break;case"next":a>-1&&a<u&&(d=a+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:o[d]})}}}},{key:"focusOption",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",r=this.props.pageSize,o=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(o);o||(u=-1),s==="up"?a=u>0?u-1:l.length-1:s==="down"?a=(u+1)%l.length:s==="pageup"?(a=u-r,a<0&&(a=0)):s==="pagedown"?(a=u+r,a>l.length-1&&(a=l.length-1)):s==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oi):O(O({},Oi),this.props.theme):Oi}},{key:"getCommonProps",value:function(){var s=this.clearValue,r=this.cx,o=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,d=this.setValue,h=this.props,f=h.isMulti,p=h.isRtl,g=h.options,m=this.hasValue();return{clearValue:s,cx:r,getStyles:o,getClassNames:l,getValue:a,hasValue:m,isMulti:f,isRtl:p,options:g,selectOption:u,selectProps:h,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var s=this.state.selectValue;return s.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var s=this.props,r=s.isClearable,o=s.isMulti;return r===void 0?o:r}},{key:"isOptionDisabled",value:function(s,r){return ba(this.props,s,r)}},{key:"isOptionSelected",value:function(s,r){return xa(this.props,s,r)}},{key:"filterOption",value:function(s,r){return Ca(this.props,s,r)}},{key:"formatOptionLabel",value:function(s,r){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(s,{context:r,inputValue:o,selectValue:l})}else return this.getOptionLabel(s)}},{key:"formatGroupLabel",value:function(s){return this.props.formatGroupLabel(s)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var s=this.props,r=s.isDisabled,o=s.isSearchable,l=s.inputId,a=s.inputValue,u=s.tabIndex,d=s.form,h=s.menuIsOpen,f=s.required,p=this.getComponents(),g=p.Input,m=this.state,v=m.inputIsHidden,y=m.ariaSelection,w=this.commonProps,b=l||this.getElementId("input"),C=O(O(O({"aria-autocomplete":"list","aria-expanded":h,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},h&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(y==null?void 0:y.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?_.createElement(g,P({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:r,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:a},C)):_.createElement(yf,P({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:kn,onFocus:this.onInputFocus,disabled:r,tabIndex:u,inputMode:"none",form:d,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var s=this,r=this.getComponents(),o=r.MultiValue,l=r.MultiValueContainer,a=r.MultiValueLabel,u=r.MultiValueRemove,d=r.SingleValue,h=r.Placeholder,f=this.commonProps,p=this.props,g=p.controlShouldRenderValue,m=p.isDisabled,v=p.isMulti,y=p.inputValue,w=p.placeholder,b=this.state,C=b.selectValue,I=b.focusedValue,T=b.isFocused;if(!this.hasValue()||!g)return y?null:_.createElement(h,P({},f,{key:"placeholder",isDisabled:m,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),w);if(v)return C.map(function(k,$){var X=k===I,oe="".concat(s.getOptionLabel(k),"-").concat(s.getOptionValue(k));return _.createElement(o,P({},f,{components:{Container:l,Label:a,Remove:u},isFocused:X,isDisabled:m,key:oe,index:$,removeProps:{onClick:function(){return s.removeValue(k)},onTouchEnd:function(){return s.removeValue(k)},onMouseDown:function(Ce){Ce.preventDefault()}},data:k}),s.formatOptionLabel(k,"value"))});if(y)return null;var E=C[0];return _.createElement(d,P({},f,{data:E,isDisabled:m}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var s=this.getComponents(),r=s.ClearIndicator,o=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!r||a||!this.hasValue()||u)return null;var h={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:h,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var s=this.getComponents(),r=s.LoadingIndicator,o=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!r||!u)return null;var h={"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:h,isDisabled:a,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var s=this.getComponents(),r=s.DropdownIndicator,o=s.IndicatorSeparator;if(!r||!o)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return _.createElement(o,P({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var s=this.getComponents(),r=s.DropdownIndicator;if(!r)return null;var o=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var s=this,r=this.getComponents(),o=r.Group,l=r.GroupHeading,a=r.Menu,u=r.MenuList,d=r.MenuPortal,h=r.LoadingMessage,f=r.NoOptionsMessage,p=r.Option,g=this.commonProps,m=this.state.focusedOption,v=this.props,y=v.captureMenuScroll,w=v.inputValue,b=v.isLoading,C=v.loadingMessage,I=v.minMenuHeight,T=v.maxMenuHeight,E=v.menuIsOpen,k=v.menuPlacement,$=v.menuPosition,X=v.menuPortalTarget,oe=v.menuShouldBlockScroll,N=v.menuShouldScrollIntoView,Ce=v.noOptionsMessage,fe=v.onMenuScrollToTop,Y=v.onMenuScrollToBottom;if(!E)return null;var K=function(_e,ke){var We=_e.type,Se=_e.data,Ue=_e.isDisabled,Ne=_e.isSelected,un=_e.label,rc=_e.value,Zs=m===Se,Js=Ue?void 0:function(){return s.onOptionHover(Se)},oc=Ue?void 0:function(){return s.selectOption(Se)},er="".concat(s.getElementId("option"),"-").concat(ke),ac={id:er,onClick:oc,onMouseMove:Js,onMouseOver:Js,tabIndex:-1,role:"option","aria-selected":s.isAppleDevice?void 0:Ne};return _.createElement(p,P({},g,{innerProps:ac,data:Se,isDisabled:Ue,isSelected:Ne,key:er,label:un,type:We,value:rc,isFocused:Zs,innerRef:Zs?s.getFocusedOptionRef:void 0}),s.formatOptionLabel(_e.data,"menu"))},de;if(this.hasOptions())de=this.getCategorizedOptions().map(function(J){if(J.type==="group"){var _e=J.data,ke=J.options,We=J.index,Se="".concat(s.getElementId("group"),"-").concat(We),Ue="".concat(Se,"-heading");return _.createElement(o,P({},g,{key:Se,data:_e,options:ke,Heading:l,headingProps:{id:Ue,data:J.data},label:s.formatGroupLabel(J.data)}),J.options.map(function(Ne){return K(Ne,"".concat(We,"-").concat(Ne.index))}))}else if(J.type==="option")return K(J,"".concat(J.index))});else if(b){var he=C({inputValue:w});if(he===null)return null;de=_.createElement(h,g,he)}else{var z=Ce({inputValue:w});if(z===null)return null;de=_.createElement(f,g,z)}var Z={minMenuHeight:I,maxMenuHeight:T,menuPlacement:k,menuPosition:$,menuShouldScrollIntoView:N},st=_.createElement(Qd,P({},g,Z),function(J){var _e=J.ref,ke=J.placerProps,We=ke.placement,Se=ke.maxHeight;return _.createElement(a,P({},g,Z,{innerRef:_e,innerProps:{onMouseDown:s.onMenuMouseDown,onMouseMove:s.onMenuMouseMove},isLoading:b,placement:We}),_.createElement(Ef,{captureEnabled:y,onTopArrive:fe,onBottomArrive:Y,lockEnabled:oe},function(Ue){return _.createElement(u,P({},g,{innerRef:function(un){s.getMenuListRef(un),Ue(un)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:s.getElementId("listbox")},isLoading:b,maxHeight:Se,focusedOption:m}),de)}))});return X||$==="fixed"?_.createElement(d,P({},g,{appendTo:X,controlElement:this.controlRef,menuPlacement:k,menuPosition:$}),st):st}},{key:"renderFormField",value:function(){var s=this,r=this.props,o=r.delimiter,l=r.isDisabled,a=r.isMulti,u=r.name,d=r.required,h=this.state.selectValue;if(d&&!this.hasValue()&&!l)return _.createElement(Rf,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(o){var f=h.map(function(m){return s.getOptionValue(m)}).join(o);return _.createElement("input",{name:u,type:"hidden",value:f})}else{var p=h.length>0?h.map(function(m,v){return _.createElement("input",{key:"i-".concat(v),name:u,type:"hidden",value:s.getOptionValue(m)})}):_.createElement("input",{name:u,type:"hidden",value:""});return _.createElement("div",null,p)}else{var g=h[0]?this.getOptionValue(h[0]):"";return _.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var s=this.commonProps,r=this.state,o=r.ariaSelection,l=r.focusedOption,a=r.focusedValue,u=r.isFocused,d=r.selectValue,h=this.getFocusableOptions();return _.createElement(ff,P({},s,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:l,focusedValue:a,isFocused:u,selectValue:d,focusableOptions:h,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var s=this.getComponents(),r=s.Control,o=s.IndicatorsContainer,l=s.SelectContainer,a=s.ValueContainer,u=this.props,d=u.className,h=u.id,f=u.isDisabled,p=u.menuIsOpen,g=this.state.isFocused,m=this.commonProps=this.getCommonProps();return _.createElement(l,P({},m,{className:d,innerProps:{id:h,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),_.createElement(r,P({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:p}),_.createElement(a,P({},m,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),_.createElement(o,P({},m,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(s,r){var o=r.prevProps,l=r.clearFocusValueOnUpdate,a=r.inputIsHiddenAfterUpdate,u=r.ariaSelection,d=r.isFocused,h=r.prevWasFocused,f=r.instancePrefix,p=s.options,g=s.value,m=s.menuIsOpen,v=s.inputValue,y=s.isMulti,w=wr(g),b={};if(o&&(g!==o.value||p!==o.options||m!==o.menuIsOpen||v!==o.inputValue)){var C=m?Bf(s,w):[],I=m?jr(wn(s,w),"".concat(f,"-option")):[],T=l?zf(r,w):null,E=qf(r,C),k=Pi(I,E);b={selectValue:w,focusedOption:E,focusedOptionId:k,focusableOptionsWithIds:I,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=a!=null&&s!==o?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},X=u,oe=d&&h;return d&&!oe&&(X={value:vn(y,w,w[0]||null),options:w,action:"initial-input-focus"},oe=!h),(u==null?void 0:u.action)==="initial-input-focus"&&(X=null),O(O(O({},b),$),{},{prevProps:s,ariaSelection:X,prevWasFocused:oe})}}]),n}(_.Component);Sa.defaultProps=$f;var Yf=_.forwardRef(function(t,e){var n=lu(t);return _.createElement(Sa,P({ref:e},n))}),Mi=Yf;const Kf=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  gap: 20px;
  @media (min-width: 768px) {
    align-items: center;
    padding-left: 0px;
    flex-direction: row;
    padding-top: 20px;
  }
`,ki=S.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`,Qf=S.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 220px;
  }
`,Xf=S.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 200px;
  }
`,Zf=S.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 125px;
  }
`,Jf=S.div`
  background-color: #fff;
  width: 60%;
  height: 50%;
  padding: 20px 20px;
  border-radius: 0 30px 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.01, 0.01, 0.58, 1),
    opacity 0.7s ease;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }
`,Hr=S.button`
  display: flex;
  align-items: center;
  gap: 15px;

  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #121417;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ep=S.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 20%;
`,Ni={padding:"0",indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(t,e)=>({...t,color:e.isFocused?"#F4C550":"#121417",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)",":hover":{color:e.isFocused?"#F4C550":"#121417"},":active":{transform:"rotate(0deg)"}}),control:(t,e)=>({...t,fontSize:"16px",paddingLeft:"18px",border:"none",borderRadius:"14px",cursor:"pointer",overflowY:"hidden",width:"100%",height:"52px",boxShadow:e.isFocused?"0 0 0 1px #FBE9BA":"none","&:hover":{boxShadow:"0 0 0 1px #FBE9BA"}}),menu:t=>({...t,border:"none",borderRadius:"12px",width:"100%",boxShadow:"0 20px 69px 0 rgba(0, 0, 0, 0.07)","&::-webkit-scrollbar":{display:"none"}}),menuList:t=>({...t,overflowY:"auto",paddingTop:"0px"}),option:(t,e)=>({...t,padding:"8px",backgroundColor:"transparent",color:e.isFocused?"#121417":e.isSelected?"#000 bolt":"rgba(18, 20, 23, 0.2)",cursor:"pointer",overflowY:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-start",fontWeight:"500",lineHeight:"125%",fontSize:"18px"}),singleValue:t=>({...t,fontWeight:"bold"})},tp=({data:t,setTeachersFilter:e})=>{const[n,i]=_.useState(null),[s,r]=_.useState(null),[o,l]=_.useState(null),[a,u]=_.useState(null);_.useEffect(()=>{let b=t;s&&(b=b.filter(C=>C.languages.includes(s))),a&&(b=b.filter(C=>C.levels.includes(a))),o&&(b=b.filter(C=>C.price_per_hour===o)),i(b)},[t,s,a,o,e]);const d=n?n.reduce((b,C)=>(C.languages.forEach(I=>{b.includes(I)||b.push(I)}),b),[]):[],h=n?n.reduce((b,C)=>(b.includes(C.price_per_hour)||b.push(C.price_per_hour),b),[]):[],f=n?n.reduce((b,C)=>(C.levels.forEach(I=>{b.includes(I)||b.push(I)}),b),[]):[],p=[{value:"All",label:"All"},...d.map(b=>({value:b,label:b}))],g=[{value:"All",label:"All"},...h.map(b=>({value:b,label:b==="All"?"All":`${b} $`}))],m=[{value:"All",label:"All"},...f.map(b=>({value:b,label:b}))],v=b=>{let C=b?b.value:null;if(C==="All")r(null),l(null),u(null),e(t);else{r(C);const I=n.filter(T=>T.languages.includes(C));e(I)}},y=b=>{const C=b?b.value:null;if(C==="All")r(null),l(null),u(null),e(t);else{u(C);const I=n.filter(T=>T.levels.includes(C));e(I)}},w=b=>{const C=b?b.value:null;if(C==="All")r(null),l(null),u(null),e(t);else{l(C);const I=n.filter(T=>T.price_per_hour===C);e(I)}};return c.jsx(c.Fragment,{children:c.jsx(c.Fragment,{children:c.jsx("section",{children:c.jsxs(Kf,{children:[c.jsxs(Qf,{children:[c.jsx(ki,{children:"Languages"}),c.jsx(Mi,{options:p,styles:Ni,onChange:v,value:s?{value:s,label:s}:null,placeholder:"All"})]}),c.jsxs(Xf,{children:[c.jsx(ki,{children:"Level of knowledge"}),c.jsx(Mi,{options:m,styles:Ni,onChange:y,value:a?{value:a,label:a}:null,placeholder:"All"})]}),c.jsxs(Zf,{children:[c.jsx(ki,{children:"Price"}),c.jsx(Mi,{options:g,styles:Ni,onChange:w,value:o?{value:o,label:`${o} $`}:null,placeholder:"All"})]})]})})})})},np=S.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 96px;
`,ip=S.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 32px;
`,sp=S.li`
  display: flex;
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  gap: 48px;
  width: 100%;
  max-width: 1184px;
`,ui=S.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,di=S.div`
  position: relative;
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;S.svg`
  position: absolute;
`;const Ea=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 192px;
`,Ia=S.div`
  display: flex;
  align-items: center;

  gap: 64px;
  width: 100%;
  justify-content: space-between;
`,Ta=S.ul`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 16px;
    gap: 8px;
  }
  > li:not(:first-child) {
    padding-left: 16px;
  }

  > li {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > li:last-child {
    gap: 4px;
  }
`,ie=S.li`
  display: flex;
`,An=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
`,rp=S.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: transparent;
  border-radius: 12px;
  padding: 8px 24px;
  border: none;
  display: flex;
  align-items: center;
`,op=S.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 8px 24px;
  border: none;
  display: flex;
  align-items: center;
`,we=S.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`,Ra=S.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`,hi=S.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  white-space: nowrap;
`,Oa=S.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100%;
`,ap=S.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #121417;
  background-color: transparent;
  border: none;
`,Pa=S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,Be=S.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`,fi=S.ul`
  display: flex;
  flex-direction: row;

  align-items: center;
  white-space: nowrap;
  text-decoration-skip-ink: none;
  text-decoration: underline;
  color: #121417;
  > li:not(:last-child)::after {
    content: ",";
  }
  > li {
    text-decoration: underline;
  }
`,Ma=S.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`,Cs=S.li`
  justify-content: center;
  border-radius: 35px;
  padding: 8px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
`,Bt=S.span`
  color: #38cd3e;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`,lp=S.button`
  border-radius: 12px;
  padding: 16px 48px;

  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  justify-content: center;
  background: #f4c550;
  border: none;
`,cp=S.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-direction: column;
`,up=S.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`,dp="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let hp=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=dp[n[t]&63];return e};const zt=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:26,height:26,fill:"none",...t,children:c.jsx("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M22.577 4.994a5.959 5.959 0 0 0-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"})}),fp=S.svg`
  position: absolute;
  top: 12%;
  right: 19%;
`,pi=t=>c.jsxs(fp,{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,fill:"none",...t,children:[c.jsx("circle",{cx:6,cy:6,r:6,fill:"#fff"}),c.jsx("circle",{cx:6,cy:6,r:4,fill:"#38CD3E"})]}),gi=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...t,children:c.jsx("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M14.667 4.133c0-.746 0-1.12-.146-1.405a1.333 1.333 0 0 0-.582-.583C13.653 2 13.28 2 12.533 2h-.266c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166C8 4.026 8 4.773 8 6.266V14l.067-.1c.463-.695.694-1.042 1-1.293.271-.223.583-.39.919-.492.378-.115.796-.115 1.63-.115h.917c.747 0 1.12 0 1.406-.145.25-.128.454-.332.582-.583.146-.285.146-.659.146-1.405V4.133ZM1.333 4.133c0-.746 0-1.12.146-1.405.127-.25.331-.455.582-.583C2.347 2 2.72 2 3.467 2h.266c1.494 0 2.24 0 2.81.29.503.256.91.664 1.166 1.166C8 4.026 8 4.773 8 6.266V14l-.067-.1c-.463-.695-.694-1.042-1-1.293a2.665 2.665 0 0 0-.919-.492C5.635 12 5.218 12 4.384 12h-.917c-.747 0-1.12 0-1.406-.145a1.334 1.334 0 0 1-.582-.583c-.146-.285-.146-.659-.146-1.405V4.133Z"})}),qt=t=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...t,children:[c.jsx("g",{clipPath:"url(#a)",children:c.jsx("path",{fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2,d:"M6.2 4.697 8 1.286l1.8 3.411c.159.302.45.512.785.57l3.8.658-2.688 2.766a1.1 1.1 0 0 0-.3.923l.55 3.818-3.462-1.702a1.1 1.1 0 0 0-.97 0l-3.462 1.702.55-3.818a1.1 1.1 0 0 0-.3-.923L1.614 5.925l3.8-.657a1.1 1.1 0 0 0 .786-.571Z"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"a",children:c.jsx("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]}),Gt=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:26,height:26,fill:"none",...t,children:c.jsx("path",{fill:"#F4C550",stroke:"#F4C550",strokeLinecap:"round",strokeLinejoin:"round",d:"M22.577 4.994a5.959 5.959 0 0 0-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 1 0-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"})}),ka=S.div`
  min-width: 300px;
  background-color: #fff;
  padding: 24px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.05); /* Enlarge on hover */
  }
`,pp=S.div`
  display: flex;

  gap: 48px;
`,Na=S.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  max-width: 968px;
`,La=S.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`,Aa=S.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`,Da=S.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
`,Fa=S.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #121417;
`,ja=S.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`,Va=S.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`,gp=S.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px 48px;
  border: none;
`,mp=S.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 8px 24px;
  border: none;
`,vp=S.div`
  display: flex;
`,_p=S.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`,Ha=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none",...t,children:c.jsx("path",{fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2,d:"M6.2 4.697 8 1.286l1.8 3.411c.159.302.45.512.785.57l3.8.658-2.688 2.766a1.1 1.1 0 0 0-.3.923l.55 3.818-3.462-1.702a1.1 1.1 0 0 0-.97 0l-3.462 1.702.55-3.818a1.1 1.1 0 0 0-.3-.923L1.614 5.925l3.8-.657a1.1 1.1 0 0 0 .786-.571Z"})}),Wa="/learn-lingo/assets/imageForComent-CnDD77wP.png",yp=({item:t,checked:e,handleToggleFavorite:n,handleTrialLesson:i})=>{const s=()=>{n(t)};return console.log(t),c.jsx(c.Fragment,{children:c.jsx(ka,{children:c.jsxs(pp,{children:[c.jsx("div",{children:c.jsxs(di,{children:[c.jsx(ui,{src:t.avatar_url,alt:"Teacher"}),c.jsx(pi,{})]})}),c.jsx(c.Fragment,{children:c.jsxs(Oa,{children:[c.jsxs(Ea,{children:[c.jsxs(Ra,{children:[c.jsx(we,{children:"Languages"}),c.jsxs(hi,{children:[t.name," ",t.surname]})]}),c.jsxs(Ia,{children:[c.jsxs(Ta,{children:[c.jsxs(ie,{children:[c.jsx(gi,{}),c.jsx("span",{children:"Lessons online"})]}),c.jsx(ie,{children:c.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),c.jsxs(ie,{children:[c.jsx(qt,{}),c.jsxs("span",{children:["Rating: ",t.rating]})]}),c.jsxs(ie,{children:[c.jsx("span",{children:"Price / 1 hour:"}),c.jsxs(Bt,{children:[t.price_per_hour,"$"]})]})]}),c.jsx(An,{onClick:s,children:e?c.jsx(Gt,{}):c.jsx(zt,{})})]})]}),c.jsxs(Pa,{children:[c.jsxs("ul",{children:[c.jsxs(Be,{children:[c.jsx(we,{children:"Speaks:"}),c.jsx(fi,{children:t.languages.map((r,o)=>c.jsxs("li",{children:["  "+r," "]},o))})]}),c.jsxs(Be,{children:[c.jsx(we,{children:"Lesson Info:"}),c.jsx("p",{children:t.lesson_info})]}),c.jsxs(Be,{children:[c.jsx(we,{children:"Conditions:"}),c.jsx("p",{children:t.conditions})]})]}),c.jsx(Na,{children:t.experience})]}),c.jsx("ul",{children:t.reviews.map((r,o)=>c.jsxs("li",{children:[c.jsxs(Aa,{children:[c.jsx(La,{children:r.avatar_url?c.jsx("img",{src:r.avatar_url,alt:"Teacher"}):c.jsx("img",{src:Wa,alt:"Image Person For Coment "})}),c.jsxs("div",{children:[c.jsx(ja,{children:r.reviewer_name}),c.jsxs(Da,{children:[c.jsx(Ha,{}),c.jsxs(Fa,{children:[r.reviewer_rating,".0"]})]})]})]}),c.jsx(Va,{children:r.comment})]},o))}),c.jsx("div",{children:c.jsx(Ma,{children:t.levels.map((r,o)=>c.jsxs(Cs,{children:["#",r]},o))})}),c.jsx("div",{children:c.jsx(gp,{onClick:i,children:"Book trial lesson"})})]})})]})})})},Ot=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t,children:c.jsx("rect",{width:18,height:18,x:3,y:3,stroke:"#121417",strokeOpacity:.2,strokeWidth:2,rx:9})}),Pt=t=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t,children:[c.jsx("rect",{width:18,height:18,x:3,y:3,stroke:"#F4C550",strokeWidth:2,rx:9}),c.jsx("rect",{width:10,height:10,x:7,y:7,fill:"#F4C550",rx:5})]}),bp=uc({name:dn().min(3,"The name must contain a min of 3 characters").max(15,"The name must contain a maximum of 32 characters").required("The name is required"),email:dn().email("Please write a valid email").matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required("The email is required"),phone:dn().matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,"Please enter a valid phone number").required("The phone number is required"),reason:dn().required("Необхідно вибрати")}),xp=({item:t})=>{var a,u,d,h;const{register:e,handleSubmit:n,formState:{errors:i}}=dc({mode:"onChange",resolver:Ic(bp)}),[s,r]=_.useState(""),o=f=>{r(f.target.value)},l=({name:f,email:p,phone:g,reason:m})=>{console.log({name:f,email:p,phone:g,reason:m})};return c.jsx(hc,{children:c.jsx(fc,{children:c.jsxs("form",{onSubmit:n(l),children:[c.jsxs(pc,{children:[c.jsx(gc,{children:"Book trial lesson"}),c.jsx(mc,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),c.jsxs(vc,{children:[c.jsx("div",{children:c.jsx(_c,{src:t.avatar_url})}),c.jsxs(yc,{children:[c.jsx(bc,{children:"Your teacher"}),c.jsxs(xc,{children:[t.name," ",t.surname]})]})]})]}),c.jsx(Cc,{children:"What is your main reason for learning English?"}),c.jsxs(wc,{children:[c.jsxs(Ct,{children:[c.jsxs(wt,{children:[c.jsx(St,{children:s==="Career and business"?c.jsx(Pt,{}):c.jsx(Ot,{})}),c.jsx(Et,{...e("reason"),type:"radio",id:"career",value:"Career and business",onChange:o})]}),c.jsx(It,{htmlFor:"career",children:"Career and business"})]}),c.jsxs(Ct,{children:[c.jsxs(wt,{children:[c.jsx(St,{children:s==="Lesson for kids"?c.jsx(Pt,{}):c.jsx(Ot,{})}),c.jsx(Et,{...e("reason"),type:"radio",id:"Lesson",value:"Lesson for kids",onChange:o})]}),c.jsx(It,{htmlFor:"Lesson",children:"Lesson for kids"})]}),c.jsxs(Ct,{children:[c.jsxs(wt,{children:[c.jsx(St,{children:s==="Living abroad"?c.jsx(Pt,{}):c.jsx(Ot,{})}),c.jsx(Et,{...e("reason"),type:"radio",id:"Living",value:"Living abroad",onChange:o})]}),c.jsx(It,{htmlFor:"Living",children:"Living abroad"})]}),c.jsxs(Ct,{children:[c.jsxs(wt,{children:[c.jsx(St,{children:s==="Exams and coursework"?c.jsx(Pt,{}):c.jsx(Ot,{})}),c.jsx(Et,{...e("reason"),type:"radio",id:"Exams",value:"Exams and coursework",onChange:o})]}),c.jsx(It,{htmlFor:"Exams",children:"Exams and coursework"})]}),c.jsxs(Ct,{children:[c.jsxs(wt,{children:[c.jsx(St,{children:s==="Culture, travel or hobby"?c.jsx(Pt,{}):c.jsx(Ot,{})}),c.jsx(Et,{...e("reason"),type:"radio",id:"Culture",value:"Culture, travel or hobby",onChange:o})]}),c.jsx(It,{htmlFor:"Culture",children:"Culture, travel or hobby"})]})]}),c.jsx(hn,{children:(a=i.reason)==null?void 0:a.message}),c.jsxs(Sc,{children:[c.jsxs(c.Fragment,{children:[c.jsx(wi,{...e("name"),type:"text",id:"name",placeholder:"Your name"}),c.jsx(hn,{children:((u=i.name)==null?void 0:u.message)||""})]}),c.jsxs(c.Fragment,{children:[c.jsx(wi,{...e("email"),type:"email",id:"email",placeholder:"Your email"}),c.jsx(hn,{children:(d=i.email)==null?void 0:d.message})]}),c.jsxs(c.Fragment,{children:[c.jsx(wi,{...e("phone"),type:"tel",id:"phone",placeholder:"Your phone"}),c.jsx(hn,{children:(h=i.phone)==null?void 0:h.message})]})]}),c.jsx(Ec,{type:"submit",children:"Book"})]})})})},Wr=t=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none",...t,children:[c.jsx("path",{fill:"url(#paint0_linear)",d:"M9.451 14.34c-.771 0-1.03-.672-1.03-.978l.005-2.295a.179.179 0 0 0-.07-.142.173.173 0 0 0-.156-.028 1.65 1.65 0 0 1-.476.075 1.15 1.15 0 0 1-.897-.42.678.678 0 0 0-.73-.203.87.87 0 0 1-.272.042c-.15 0-.314-.036-.48-.108a1.305 1.305 0 0 1-.485-.388c-.106-.132-.323-.355-.586-.355a.426.426 0 0 0-.116.016.753.753 0 0 1-.194.023c-.32 0-.74-.16-.952-.607-.194-.403-.189-2.634-.187-3.367C2.83 3.677 4.158.932 4.172.904a.218.218 0 0 0 .012-.03.294.294 0 0 1 .28-.213l4.657.04c.133.002.25.096.28.227l.036.151c.173.747.61 1.411 1.26 1.925.14.11.259.241.356.39.52.803.807 1.508 1.084 2.19.261.646.509 1.255.93 1.884.093.141.161.528.058.837a.585.585 0 0 1-.368.395c-.143.05-.273.075-.397.075-.442 0-.829-.33-1.255-1.069-.456-.788-.484-.996-.486-1.004a.174.174 0 0 0-.175-.168h-.003a.179.179 0 0 0-.173.179l-.014 6.687c0 .245-.148.94-.803.94Z"}),c.jsx("path",{fill:"#EDA600",d:"m4.465.485.002.352 4.651.04c.054.002.101.038.113.091l.035.151c.183.785.64 1.485 1.323 2.022.124.098.23.215.318.348.512.788.794 1.486 1.068 2.16.265.655.516 1.272.946 1.917.053.08.13.408.038.684-.066.196-.18.257-.26.285a.997.997 0 0 1-.34.065c-.249 0-.6-.11-1.102-.98-.383-.665-.452-.897-.462-.938a.352.352 0 0 0-.336-.323h-.014a.351.351 0 0 0-.35.324c-.002.01-.002.02-.002.03l-.014 6.689c0 .007-.027.76-.627.76-.702 0-.854-.642-.854-.8l.005-2.296a.353.353 0 0 0-.352-.352.327.327 0 0 0-.1.016c-.15.045-.294.068-.426.068a.966.966 0 0 1-.763-.359.854.854 0 0 0-.919-.257.695.695 0 0 1-.218.034 1.055 1.055 0 0 1-.827-.428c-.125-.157-.386-.421-.723-.421a.587.587 0 0 0-.163.022.6.6 0 0 1-.148.018.878.878 0 0 1-.794-.508c-.08-.167-.175-.874-.17-3.29C3.005 3.72 4.316 1.008 4.329.98A.355.355 0 0 0 4.35.922a.118.118 0 0 1 .113-.085V.485Zm0 0a.47.47 0 0 0-.451.341s-1.36 2.788-1.364 4.78c-.003 1.353.016 3.05.204 3.442.253.53.746.707 1.112.707a.93.93 0 0 0 .24-.03.29.29 0 0 1 .07-.009c.169 0 .34.152.448.288.123.155.307.334.553.44.209.089.393.122.55.122.126 0 .235-.021.327-.05a.506.506 0 0 1 .543.151c.191.226.522.481 1.03.481.157 0 .332-.024.525-.083l-.004 2.296c0 .371.307 1.153 1.206 1.153.742 0 .978-.743.978-1.112l.014-6.688c.001.028.025.245.508 1.081.452.784.887 1.157 1.407 1.157.144 0 .296-.03.456-.086.675-.24.593-1.2.397-1.495-.85-1.275-.988-2.496-2.012-4.073a1.798 1.798 0 0 0-.395-.433c-.59-.464-1.028-1.094-1.198-1.825L9.574.888a.472.472 0 0 0-.453-.362L4.47.486h-.005Z"}),c.jsx("path",{fill:"#EDA600",d:"m8.544 8.706.053 2.48-.287-.2c-.069 0-.122-.09-.113-.193l.09-2.09c.016-.208.246-.206.257.003ZM10.438 5.774l.329.817.11.29-.39-.103-.378-.11.01-.877c0-.161.253-.145.319-.017ZM6.538 8.66l.09 1.53c.006.07-.295.03-.295.03a.117.117 0 0 1-.113-.132l.09-1.434c.015-.141.217-.138.228.005ZM4.59 8.686l.09.825c.006.037-.295.015-.295.015-.07 0-.122-.033-.114-.071l.09-.771c.017-.077.218-.074.229.002Z"}),c.jsx("defs",{children:c.jsxs("linearGradient",{id:"paint0_linear",x1:7.985,x2:8.014,y1:14.335,y2:.67,gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:.128,stopColor:"#FFB300"}),c.jsx("stop",{offset:.647,stopColor:"#FFCA28"})]})})]}),Ur=({openModalLogin:t,openModalRegister:e,closeModal:n})=>c.jsxs(Tc,{children:[c.jsx(Rc,{onClick:n,children:c.jsx(Oc,{})}),c.jsxs(Pc,{children:[c.jsx(Mc,{children:"Hello, friend!"}),c.jsxs(kc,{children:[c.jsxs(c.Fragment,{children:[c.jsxs(nr,{children:["To continue using extra possibilities of service you need to log in by clicking the button below ",c.jsx(Wr,{})]}),c.jsx(ir,{onClick:t,children:"Log In"})]}),c.jsxs(c.Fragment,{children:[c.jsxs(nr,{children:["Friend, in case you have not registered yet, please be sure to press the button below to continue ",c.jsx(Wr,{})]}),c.jsx(ir,{onClick:e,children:"Register"})]})]})]})]}),Ua=S.div`
  display: flex;
`,$a=S.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
`,Cp=S.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 20px;
  background-color: white;
  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,wp=S.div`
  min-width: 1px;
`,Ba=S.div`
  display: flex;
  gap: 8px;
`,Sp=S.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  justify-content: space-between;
`,$r=S.button`
  border-radius: 12px;
  padding: 4px 10px;
  border: none;
  background: #f4c550;

  font-weight: 500;
  font-size: 16px;
  line-height: 156%;
  color: #121417;
`,Ep=S.div`
  position: relative;
`,Ip=S.div`
  position: absolute;
  top: -225%;
  right: 0%;
`,Tp=({item:t,handleFavoriteClick:e,checked:n,handleShowModalItem:i})=>{const[s,r]=_.useState(window.innerWidth);return _.useEffect(()=>{const o=()=>{r(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),c.jsxs(Cp,{children:[c.jsx("div",{children:c.jsxs(c.Fragment,{children:[c.jsxs(di,{children:[c.jsx(ui,{src:t.avatar_url,alt:"Teacher"}),c.jsx(pi,{})]}),c.jsxs(hi,{children:[t.name," ",t.surname]}),c.jsxs(Ba,{children:[c.jsx(we,{children:"Speaks:"}),c.jsx(fi,{children:t.languages.map((o,l)=>c.jsxs("li",{children:["  "+o," "]},l))})]})]})}),c.jsx(c.Fragment,{children:s<568?c.jsx(c.Fragment,{children:c.jsxs(Ep,{children:[c.jsxs("ul",{children:[c.jsxs(ie,{children:[c.jsx(qt,{}),c.jsxs("span",{children:["Rating: ",t.rating]})]}),c.jsxs(ie,{children:[c.jsx("span",{children:"Price / 1 hour:"}),c.jsxs(Bt,{children:[t.price_per_hour,"$"]})]})]}),c.jsx("div",{children:c.jsx(c.Fragment,{children:c.jsx($r,{onClick:i,children:"Read more"})})}),c.jsx(Ip,{children:c.jsx(c.Fragment,{children:c.jsx(An,{onClick:e,children:n?c.jsx(Gt,{}):c.jsx(zt,{})})})})]})}):c.jsx(c.Fragment,{children:c.jsxs(wp,{children:[c.jsx(Ua,{children:c.jsxs($a,{children:[c.jsxs(ie,{children:[c.jsx(gi,{}),c.jsx("span",{children:"Lessons online"})]}),c.jsx(ie,{children:c.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),c.jsxs(ie,{children:[c.jsx(qt,{}),c.jsxs("span",{children:["Rating: ",t.rating]})]}),c.jsxs(ie,{children:[c.jsx("span",{children:"Price / 1 hour:"}),c.jsxs(Bt,{children:[t.price_per_hour,"$"]})]})]})}),c.jsxs(Sp,{children:[c.jsx(c.Fragment,{children:c.jsx($r,{onClick:i,children:"Read more"})}),c.jsx(c.Fragment,{children:c.jsx(An,{onClick:e,children:n?c.jsx(Gt,{}):c.jsx(zt,{})})})]})]})})})]})},Rp=({item:t,checked:e,handleToggleFavorite:n,handleTrialLesson:i})=>{const s=()=>{n(t)};return c.jsx(ka,{children:c.jsxs("div",{children:[c.jsxs(vp,{children:[c.jsxs("div",{children:[c.jsxs(di,{children:[c.jsx(ui,{src:t.avatar_url,alt:"Teacher"}),c.jsx(pi,{})]}),c.jsxs(hi,{children:[t.name," ",t.surname]}),c.jsxs(Ba,{children:[c.jsx(we,{children:"Speaks:"}),c.jsx(fi,{children:t.languages.map((r,o)=>c.jsxs("li",{children:["  "+r," "]},o))})]})]}),c.jsxs("div",{children:[c.jsx(Ua,{children:c.jsxs($a,{children:[c.jsxs(ie,{children:[c.jsx(gi,{}),c.jsx("span",{children:"Lessons online"})]}),c.jsx(ie,{children:c.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),c.jsxs(ie,{children:[c.jsx(qt,{}),c.jsxs("span",{children:["Rating: ",t.rating]})]}),c.jsxs(ie,{children:[c.jsx("span",{children:"Price / 1 hour:"}),c.jsxs(Bt,{children:[t.price_per_hour,"$"]})]})]})}),c.jsx(_p,{children:t.levels.map((r,o)=>c.jsxs(Cs,{children:["#",r]},o))})]})]}),c.jsxs(c.Fragment,{children:[c.jsxs("ul",{children:[c.jsxs(Be,{children:[c.jsx(we,{children:"Lesson Info:"}),c.jsx("p",{children:t.lesson_info})]}),c.jsxs(Be,{children:[c.jsx(we,{children:"Conditions:"}),c.jsx("p",{children:t.conditions})]})]}),c.jsx(Na,{children:t.experience})]}),c.jsx(c.Fragment,{children:c.jsx("ul",{children:t.reviews.map((r,o)=>c.jsxs("li",{children:[c.jsxs(Aa,{children:[c.jsx(La,{children:r.avatar_url?c.jsx("img",{src:r.avatar_url,alt:"Teacher"}):c.jsx("img",{src:Wa,alt:"Image Person For Coment "})}),c.jsxs("div",{children:[c.jsx(ja,{children:r.reviewer_name}),c.jsxs(Da,{children:[c.jsx(Ha,{}),c.jsxs(Fa,{children:[r.reviewer_rating,".0"]})]})]})]}),c.jsx(Va,{children:r.comment})]},o))})}),c.jsxs(up,{children:[c.jsx(mp,{onClick:i,children:"Book trial lesson"}),c.jsx(c.Fragment,{children:e?c.jsxs(rp,{onClick:s,children:[c.jsx(Gt,{}),c.jsx("span",{children:"Remove from favorites"})]}):c.jsxs(op,{onClick:s,children:[c.jsx(zt,{}),c.jsx("span",{children:"Add to favorites"})]})})]})]})})},$e=JSON.parse(localStorage.getItem("favorites"))??[],Op=({item:t,handleFavoriteChange:e})=>{var he;const[n,i]=_.useState(!1),[s,r]=_.useState(null),[o,l]=_.useState(null),a=To(Ro),[u,d]=_.useState(!1),[h,f]=_.useState(!1),[p,g]=_.useState(!1),[m,v]=_.useState(!1),[y,w]=_.useState(!1),[b,C]=_.useState(!1),I=Oo(),[T,E]=_.useState(window.innerWidth);_.useEffect(()=>(h||b||m||y||p||u||o?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[h,b,m,y,p,u,o]);const k=()=>{v(!0),g(!1),d(!1)},$=()=>{w(!0),g(!1),d(!1)},X=()=>{f(!0),l(!1)},oe=()=>{a?(r(t),l(!0)):d(!0)},N=()=>{l(!1),f(!1),d(!1),g(!1),v(!1),w(!1)};_.useEffect(()=>{const z=Z=>{Z.key==="Escape"&&N()};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[]);const Ce=()=>{g(!0)},fe=({id:z})=>{if(a)if($e!=null&&$e.includes(z)){const Z=$e.indexOf(z);$e.splice(Z,1),localStorage.setItem("favorites",JSON.stringify($e)),i(!n)}else $e.push(z),localStorage.setItem("favorites",JSON.stringify($e)),i(!n);else Ce()},Y=()=>{I.pathname==="/favorites"?C(!0):a?fe(t):Ce()},K=()=>{fe(t),e(),N(),window.location.reload()};_.useEffect(()=>{const z=()=>{E(window.innerWidth)},Z=st=>{st.key==="Escape"&&N()};return window.addEventListener("resize",z),window.addEventListener("keydown",Z),()=>{window.removeEventListener("resize",z),window.removeEventListener("keydown",Z)}},[]);const de=a?(he=JSON.parse(localStorage.getItem("favorites")))==null?void 0:he.includes(t.id):!1;return c.jsxs(c.Fragment,{children:[m&&c.jsxs(c.Fragment,{children:[c.jsx(rt,{closeModal:N}),c.jsx(sr,{closeModal:N})]}),y&&c.jsxs(c.Fragment,{children:[c.jsx(rt,{closeModal:N}),c.jsx(rr,{closeModal:N})]}),b&&c.jsx(c.Fragment,{children:c.jsxs("div",{children:[c.jsx("button",{onClick:K,children:"Видалити"}),c.jsx("button",{onClick:N,children:"Залишити"})]})}),m&&c.jsxs(c.Fragment,{children:[c.jsx(sr,{closeModal:N}),c.jsx(rt,{closeModal:N})]}),y&&c.jsxs(c.Fragment,{children:[c.jsx(rr,{closeModal:N}),c.jsx(rt,{closeModal:N})]}),p&&c.jsxs(c.Fragment,{children:[c.jsx(Ur,{item:s,openModalLogin:k,openModalRegister:$,closeModal:N}),c.jsx(rt,{closeModal:N})]}),h&&c.jsxs(c.Fragment,{children:[c.jsx(xp,{item:s,closeModal:N}),c.jsx(En,{closeModal:N})]}),c.jsx(c.Fragment,{children:u&&c.jsxs(c.Fragment,{children:[c.jsx(Ur,{closeModal:N,item:s,openModalLogin:k,openModalRegister:$}),c.jsx(rt,{closeModal:N})]})}),o&&c.jsxs(c.Fragment,{children:[c.jsx(c.Fragment,{children:T<1280?c.jsx(c.Fragment,{children:c.jsx(Rp,{item:s,checked:de,handleToggleFavorite:fe,handleTrialLesson:X,trialLesson:h,closeModal:N})}):c.jsx(yp,{item:s,checked:de,handleToggleFavorite:fe,handleTrialLesson:X,trialLesson:h,closeModal:N})}),c.jsx(En,{closeModal:N})]}),c.jsx(c.Fragment,{children:T<1280?c.jsx(Tp,{item:t,handleFavoriteClick:Y,checked:de,handleShowModalItem:oe}):c.jsx(c.Fragment,{children:c.jsxs(sp,{children:[c.jsx("div",{children:c.jsxs(di,{children:[c.jsx(ui,{src:t.avatar_url,alt:"Teacher"}),c.jsx(pi,{})]})}),c.jsxs(Oa,{children:[c.jsxs(cp,{children:[c.jsxs(Ea,{children:[c.jsx(Ra,{children:c.jsx(we,{children:"Languages"})}),c.jsxs(Ia,{children:[c.jsxs(Ta,{children:[c.jsxs(ie,{children:[c.jsx(gi,{}),c.jsx("span",{children:"Lessons online"})]}),c.jsx(ie,{children:c.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),c.jsxs(ie,{children:[c.jsx(qt,{}),c.jsxs("span",{children:["Rating: ",t.rating]})]}),c.jsxs(ie,{children:[c.jsx("span",{children:"Price / 1 hour:"}),c.jsxs(Bt,{children:[t.price_per_hour,"$"]})]})]}),c.jsx(An,{onClick:Y,children:de?c.jsx(Gt,{}):c.jsx(zt,{})})]})]}),c.jsxs(hi,{children:[t.name," ",t.surname]})]}),c.jsxs(Pa,{children:[c.jsxs("ul",{children:[c.jsxs(Be,{children:[c.jsx(we,{children:"Speaks:"}),c.jsx(fi,{children:t.languages.map((z,Z)=>c.jsxs("li",{children:["  "+z," "]},Z))})]}),c.jsxs(Be,{children:[c.jsx(we,{children:"Lesson Info:"}),c.jsx("p",{children:t.lesson_info})]}),c.jsxs(Be,{children:[c.jsx(we,{children:"Conditions:"}),c.jsx("p",{children:t.conditions})]})]}),c.jsx(c.Fragment,{children:c.jsx(ap,{onClick:oe,children:"Read more"})})]}),c.jsx("div",{children:c.jsx(Ma,{children:t.levels.map((z,Z)=>c.jsxs(Cs,{children:["#",z]},Z))})})]})]})})})]})},Pp=()=>{const t=Oo(),e=Nc(),[n,i]=_.useState(9),s=To(Ro);return _.useEffect(()=>{if(n<=0){t.pathname==="/favorites"?e("/teachers"):t.pathname==="/teachers"&&e("/");return}const r=setTimeout(()=>{i(n-1)},1e3);return()=>clearTimeout(r)},[n,t.pathname,e]),c.jsx(Lc,{children:c.jsx(Ac,{children:t.pathname==="/favorites"?c.jsxs(c.Fragment,{children:[c.jsxs(or,{children:["Hello, ",s&&s.name?s.name:"Friend","!"]}),c.jsxs(ar,{children:["You haven't chose a favorite teacher. You will be redirected to the Teachers page in"," ",c.jsx(lr,{children:n})," seconds. Press the button to move faster."]}),c.jsx(cr,{to:"/teachers","aria-label":"Home teachers",style:{textDecoration:"none"},children:"button"})]}):t.pathname==="/teachers"?c.jsxs(c.Fragment,{children:[c.jsxs(or,{children:["Hello, ",s&&s.name?s.name:"Friend","!"]}),c.jsxs(ar,{children:["We're sorry, but a technical error occured. Service is unavaliable. Please, try again later. You will be redirected to the Main page in ",c.jsx(lr,{children:n})," ","seconds. Press the button to move faster."]}),c.jsx(cr,{to:"/","aria-label":"Home button",style:{textDecoration:"none"},children:"button"})]}):null})})},Wv=({dataList:t})=>{const[e,n]=_.useState(null),[i,s]=_.useState(4),[r,o]=_.useState(!1),[l,a]=_.useState(!1),u=()=>{a(!l)};_.useEffect(()=>{t&&(o(!0),n(t),o(!1))},[t,l]);const d=()=>{s(h=>h+4)};return c.jsxs(c.Fragment,{children:[r&&c.jsx(c.Fragment,{children:c.jsx(Dc,{})}),e?c.jsxs(np,{children:[c.jsx(ip,{children:e.slice(0,i).map(h=>c.jsx(Op,{item:h,handleFavoriteChange:u},hp()))}),e.length>i&&c.jsx(lp,{onClick:d,children:"Load more"})]}):c.jsxs(c.Fragment,{children:[c.jsx(Pp,{}),c.jsx(En,{})]})]})};var Br={};const zr="@firebase/database",qr="1.0.5";/**
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
 */let za="";function Mp(t){za=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kp(e)}}catch{}return new Np},Qe=qa("localStorage"),Lp=qa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Fc("@firebase/database"),Ap=function(){let t=1;return function(){return t++}}(),Ga=function(t){const e=Bc(t),n=new zc;n.update(e);const i=n.digest();return qc.encodeByteArray(i)},sn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=sn.apply(null,i):typeof i=="object"?e+=se(i):e+=i,e+=" "}return e};let Dt=null,Gr=!0;const Dp=function(t,e){x(!e,"Can't turn on custom loggers persistently."),dt.logLevel=Gc.VERBOSE,Dt=dt.log.bind(dt)},ce=function(...t){if(Gr===!0&&(Gr=!1,Dt===null&&Lp.get("logging_enabled")===!0&&Dp()),Dt){const e=sn.apply(null,t);Dt(e)}},rn=function(t){return function(...e){ce(t,...e)}},Yi=function(...t){const e="FIREBASE INTERNAL ERROR: "+sn(...t);dt.error(e)},je=function(...t){const e=`FIREBASE FATAL ERROR: ${sn(...t)}`;throw dt.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+sn(...t);dt.warn(e)},Fp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ya=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mt="[MIN_NAME]",Ze="[MAX_NAME]",bt=function(t,e){if(t===e)return 0;if(t===mt||e===Ze)return-1;if(e===mt||t===Ze)return 1;{const n=Yr(t),i=Yr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Vp=function(t,e){return t===e?0:t<e?-1:1},Mt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+se(e))},ws=function(t){if(typeof t!="object"||t===null)return se(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=se(e[i]),n+=":",n+=ws(t[e[i]]);return n+="}",n},Ka=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qa=function(t){x(!Ya(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Hp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Wp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Up(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const $p=new RegExp("^-?(0*)\\d{1,10}$"),Bp=-2147483648,zp=2147483647,Yr=function(t){if($p.test(t)){const e=Number(t);if(e>=Bp&&e<=zp)return e}return null},on=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},qp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ft=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Gp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="5",Xa="v",Za="s",Ja="r",el="f",tl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nl="ls",il="p",Ki="ac",sl="websocket",rl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Kp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function al(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let i;if(e===sl)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===rl)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kp(t)&&(n.ns=t.namespace);const s=[];return ve(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.counters_={}}incrementCounter(e,n=1){Ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Zc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={},Ai={};function Es(t){const e=t.toString();return Li[e]||(Li[e]=new Qp),Li[e]}function Xp(t,e){const n=t.toString();return Ai[n]||(Ai[n]=e()),Ai[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&on(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="start",Jp="close",eg="pLPCommand",tg="pRTLPCB",ll="id",cl="pw",ul="ser",ng="cb",ig="seg",sg="ts",rg="d",og="dframe",dl=1870,hl=30,ag=dl-hl,lg=25e3,cg=3e4;class lt{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rn(e),this.stats_=Es(n),this.urlFn=a=>(this.appCheckToken&&(a[Ki]=this.appCheckToken),al(n,rl,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cg)),jp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Is((...r)=>{const[o,l,a,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kr)this.id=l,this.password=a;else if(o===Jp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Kr]="t",i[ul]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ng]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Xa]=Ss,this.transportSessionId&&(i[Za]=this.transportSessionId),this.lastSessionId&&(i[nl]=this.lastSessionId),this.applicationId&&(i[il]=this.applicationId),this.appCheckToken&&(i[Ki]=this.appCheckToken),typeof location<"u"&&location.hostname&&tl.test(location.hostname)&&(i[Ja]=el);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lt.forceAllow_=!0}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){return lt.forceAllow_?!0:!lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hp()&&!Wp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=eu(n),s=Ka(i,ag);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[og]="t",i[ll]=e,i[cl]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Is{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ap(),window[eg+this.uniqueCallbackIdentifier]=e,window[tg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Is.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ce("frame writing exception"),l.stack&&ce(l.stack),ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ll]=this.myID,e[cl]=this.myPW,e[ul]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hl+i.length<=dl;){const o=this.pendingSegs.shift();i=i+"&"+ig+s+"="+o.seg+"&"+sg+s+"="+o.ts+"&"+rg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(lg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=16384,dg=45e3;let Dn=null;typeof MozWebSocket<"u"?Dn=MozWebSocket:typeof WebSocket<"u"&&(Dn=WebSocket);class Ee{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rn(this.connId),this.stats_=Es(n),this.connURL=Ee.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Xa]=Ss,typeof location<"u"&&location.hostname&&tl.test(location.hostname)&&(o[Ja]=el),n&&(o[Za]=n),i&&(o[nl]=i),s&&(o[Ki]=s),r&&(o[il]=r),al(e,sl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qe.set("previous_websocket_failure",!0);try{let i;Mo(),this.mySock=new Dn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Dn!==null&&!Ee.forceDisallow_}static previouslyFailed(){return Qe.isInMemoryStorage||Qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=as(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ka(n,ug);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ee.responsesRequiredToBeHealthy=2;Ee.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[lt,Ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ee&&Ee.isAvailable();let i=n&&!Ee.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ee];else{const s=this.transports_=[];for(const r of Yt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=6e4,fg=5e3,pg=10*1024,gg=100*1024,Di="t",Qr="d",mg="s",Xr="r",vg="e",Zr="o",Jr="a",eo="n",to="p",_g="h";class yg{constructor(e,n,i,s,r,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rn("c:"+this.id+":"),this.transportManager_=new Yt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ft(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Di in e){const n=e[Di];n===Jr?this.upgradeIfSecondaryHealthy_():n===Xr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mt("t",e),i=Mt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:to,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mt("t",e),i=Mt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mt(Di,e);if(Qr in e){const i=e[Qr];if(n===_g){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===eo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mg?this.onConnectionShutdown_(i):n===Xr?this.onReset_(i):n===vg?Yi("Server Error: "+i):n===Zr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ss!==i&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ft(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ft(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:to,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends pl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!No()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fn}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=32,io=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new W("")}function A(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qe(t){return t.pieces_.length-t.pieceNum_}function U(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function gl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ml(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new W(n,0)}function D(t){return t.pieceNum_>=t.pieces_.length}function pe(t,e){const n=A(t),i=A(e);if(n===null)return e;if(n===i)return pe(U(t),U(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ts(t,e){if(qe(t)!==qe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ie(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(qe(t)>qe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class xg{constructor(e,n){this.errorPrefix_=n,this.parts_=ml(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Kn(this.parts_[i]);_l(this)}}function Cg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kn(e),_l(t)}function wg(t){const e=t.parts_.pop();t.byteLength_-=Kn(e),t.parts_.length>0&&(t.byteLength_-=1)}function _l(t){if(t.byteLength_>io)throw new Error(t.errorPrefix_+"has a key path longer than "+io+" bytes ("+t.byteLength_+").");if(t.parts_.length>no)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+no+") or object contains a cycle "+Ke(t))}function Ke(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends pl{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Rs}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1e3,Sg=60*5*1e3,so=30*1e3,Eg=1.3,Ig=3e4,Tg="server_kill",ro=3;class De extends fl{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=De.nextPersistentConnectionId_++,this.log_=rn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kt,this.maxReconnectDelay_=Sg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Mo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(se(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ko,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;De.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ve(e,"w")){const i=pt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=so)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yi("Unrecognized action received from server: "+se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ig&&(this.reconnectDelay_=kt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Eg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+De.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},u=function(h){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new yg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{be(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&be(h),a())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dr(this.interruptReasons_)&&(this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ws(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new W(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ro&&(this.reconnectDelay_=so,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ro&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+za.replace(/\./g,"-")]=1,No()?e["framework.cordova"]=1:Qc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fn.getInstance().currentlyOnline();return dr(this.interruptReasons_)&&e}}De.nextPersistentConnectionId_=0;De.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new L(mt,e),s=new L(mt,n);return this.compare(i,s)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n;class yl extends mi{static get __EMPTY_NODE(){return _n}static set __EMPTY_NODE(e){_n=e}compare(e,n){return bt(e.name,n.name)}isDefinedOn(e){throw tn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Ze,_n)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,_n)}toString(){return".key"}}const ht=new yl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??ne.RED,this.left=s??ge.EMPTY_NODE,this.right=r??ge.EMPTY_NODE}copy(e,n,i,s,r){return new ne(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class Rg{copy(e,n,i,s,r){return this}insert(e,n,i){return new ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ge{constructor(e,n=ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yn(this.root_,null,this.comparator_,!0,e)}}ge.EMPTY_NODE=new Rg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e){return bt(t.name,e.name)}function Os(t,e){return bt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;function Pg(t){Qi=t}const bl=function(t){return typeof t=="number"?"number:"+Qa(t):"string:"+t},xl=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ve(e,".sv"),"Priority must be a string or number.")}else x(t===Qi||t.isEmpty(),"priority of unexpected type.");x(t===Qi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;class te{constructor(e,n=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xl(this.priorityNode_)}static set __childrenNodeConstructor(e){oo=e}static get __childrenNodeConstructor(){return oo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:A(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=A(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(U(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qa(this.value_):e+=this.value_,this.lazyHash_=Ga(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=te.VALUE_TYPE_ORDER.indexOf(n),r=te.VALUE_TYPE_ORDER.indexOf(i);return x(s>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl,wl;function Mg(t){Cl=t}function kg(t){wl=t}class Ng extends mi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?bt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Ze,new te("[PRIORITY-POST]",wl))}makePost(e,n){const i=Cl(e);return new L(n,new te("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new Ng;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=Math.log(2);class Ag{constructor(e){const n=r=>parseInt(Math.log(r)/Lg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jn=function(t,e,n,i){t.sort(e);const s=function(a,u){const d=u-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new ne(f,h.node,ne.BLACK,null,null);{const p=parseInt(d/2,10)+a,g=s(a,p),m=s(p+1,u);return h=t[p],f=n?n(h):h,new ne(f,h.node,ne.BLACK,g,m)}},r=function(a){let u=null,d=null,h=t.length;const f=function(g,m){const v=h-g,y=h;h-=g;const w=s(v+1,y),b=t[v],C=n?n(b):b;p(new ne(C,b.node,m,null,w))},p=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<a.count;++g){const m=a.nextBitIsOne(),v=Math.pow(2,a.count-(g+1));m?f(v,ne.BLACK):(f(v,ne.BLACK),f(v,ne.RED))}return d},o=new Ag(t.length),l=r(o);return new ge(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;const at={};class Le{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(at&&q,"ChildrenNode.ts has not been loaded"),Fi=Fi||new Le({".priority":at},{".priority":q}),Fi}get(e){const n=pt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ge?n:null}hasIndex(e){return Ve(this.indexSet_,e.toString())}addIndex(e,n){x(e!==ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=jn(i,e.getCompare()):l=at;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Le(d,u)}addToIndexes(e,n){const i=In(this.indexes_,(s,r)=>{const o=pt(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),s===at)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),jn(l,o.getCompare())}else return at;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Le(i,this.indexSet_)}removeFromIndexes(e,n){const i=In(this.indexes_,s=>{if(s===at)return s;{const r=n.get(e.name);return r?s.remove(new L(e.name,r)):s}});return new Le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt;class M{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&xl(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Nt||(Nt=new M(new ge(Os),null,Le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nt}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Nt:n}}getChild(e){const n=A(e);return n===null?this:this.getImmediateChild(n).getChild(U(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new L(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Nt:this.priorityNode_;return new M(s,o,r)}}updateChild(e,n){const i=A(e);if(i===null)return n;{x(A(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(U(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,l)=>{n[o]=l.val(e),i++,r&&M.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bl(this.getPriority().val())+":"),this.forEachChild(q,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ga(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===an?-1:0}withIndex(e){if(e===ht||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(q),s=n.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ht?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dg extends M{constructor(){super(new ge(Os),M.EMPTY_NODE,Le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const an=new Dg;Object.defineProperties(L,{MIN:{value:new L(mt,M.EMPTY_NODE)},MAX:{value:new L(Ze,an)}});yl.__EMPTY_NODE=M.EMPTY_NODE;te.__childrenNodeConstructor=M;Pg(an);kg(an);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=!0;function ue(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new te(n,ue(e))}if(!(t instanceof Array)&&Fg){const n=[];let i=!1;if(ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return M.EMPTY_NODE;const r=jn(n,Og,o=>o.name,Os);if(i){const o=jn(n,q.getCompare());return new M(r,ue(e),new Le({".priority":o},{".priority":q}))}else return new M(r,ue(e),Le.Default)}else{let n=M.EMPTY_NODE;return ve(t,(i,s)=>{if(Ve(t,i)&&i.substring(0,1)!=="."){const r=ue(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ue(e))}}Mg(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends mi{constructor(e){super(),this.indexPath_=e,x(!D(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?bt(e.name,n.name):r}makePost(e,n){const i=ue(e),s=M.EMPTY_NODE.updateChild(this.indexPath_,i);return new L(n,s)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,an);return new L(Ze,e)}toString(){return ml(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends mi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?bt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const i=ue(e);return new L(n,i)}toString(){return".value"}}const Hg=new Vg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return{type:"value",snapshotNode:t}}function vt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Wg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Kt(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vt(n,i)):o.trackChildChange(Qt(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{n.hasChild(s)||i.trackChildChange(Kt(s,r))}),n.isLeafNode()||n.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Qt(s,r,o))}else i.trackChildChange(vt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.indexedFilter_=new Ps(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xt.getStartPost_(e),this.endPost_=Xt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new L(n,i))||(i=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=M.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(q,(o,l)=>{r.matches(new L(o,l))||(s=s.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Xt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new L(n,i))||(i=M.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new L(n,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Qt(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Kt(n,h));const m=l.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(vt(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return i.isEmpty()?e:d&&o(u,a)>=0?(r!=null&&(r.trackChildChange(Kt(u.name,u.node)),r.trackChildChange(vt(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ze}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new Ms;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $g(t){return t.loadsAllData()?new Ps(t.getIndex()):t.hasLimit()?new Ug(t):new Xt(t)}function ao(t){const e={};if(t.isDefault())return e;let n;if(t.index_===q?n="$priority":t.index_===Hg?n="$value":t.index_===ht?n="$key":(x(t.index_ instanceof jg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=se(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=se(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+se(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=se(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==q&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends fl{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=rn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vn.getListenId_(e,i),l={};this.listens_[o]=l;const a=ao(e._queryParams);this.restRequest_(r+".json",a,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),pt(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const i=Vn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ao(e._queryParams),i=e._path.toString(),s=new ko;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xc(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=as(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return{value:null,children:new Map}}function El(t,e,n){if(D(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=A(e);t.children.has(i)||t.children.set(i,Hn());const s=t.children.get(i);e=U(e),El(s,e,n)}}function Xi(t,e,n){t.value!==null?n(e,t.value):zg(t,(i,s)=>{const r=new W(e.toString()+"/"+i);Xi(s,r,n)})}function zg(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ve(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=10*1e3,Gg=30*1e3,Yg=5*60*1e3;class Kg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qg(e);const i=co+(Gg-co)*Math.random();Ft(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ve(e,(s,r)=>{r>0&&Ve(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ft(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Te||(Te={}));function Il(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ns(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Te.ACK_USER_WRITE,this.source=Il()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new Wn(V(),n,this.revert)}}else return x(A(this.path)===e,"operationForChild called for unrelated child."),new Wn(U(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.source=e,this.path=n,this.type=Te.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Zt(this.source,V()):new Zt(this.source,U(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Te.OVERWRITE}operationForChild(e){return D(this.path)?new Je(this.source,V(),this.snap.getImmediateChild(e)):new Je(this.source,U(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Te.MERGE}operationForChild(e){if(D(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new Je(this.source,V(),n.value):new Jt(this.source,V(),n)}else return x(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,U(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const n=A(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Wg(o.childName,o.snapshotNode))}),Lt(t,s,"child_removed",e,i,n),Lt(t,s,"child_added",e,i,n),Lt(t,s,"child_moved",r,i,n),Lt(t,s,"child_changed",e,i,n),Lt(t,s,"value",e,i,n),s}function Lt(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>Jg(t,l,a)),o.forEach(l=>{const a=Zg(t,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Zg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Jg(t,e,n){if(e.childName==null||n.childName==null)throw tn("Should only compare child_ events.");const i=new L(e.childName,e.snapshotNode),s=new L(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e){return{eventCache:t,serverCache:e}}function jt(t,e,n,i){return vi(new et(e,n,i),t.serverCache)}function Tl(t,e,n,i){return vi(t.eventCache,new et(e,n,i))}function Zi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;const em=()=>(ji||(ji=new ge(Vp)),ji);class B{constructor(e,n=em()){this.value=e,this.children=n}static fromObject(e){let n=new B(null);return ve(e,(i,s)=>{n=n.set(new W(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(D(e))return null;{const i=A(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(U(e),n);return r!=null?{path:ee(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const n=A(e),i=this.children.get(n);return i!==null?i.subtree(U(e)):new B(null)}}set(e,n){if(D(e))return new B(n,this.children);{const i=A(e),r=(this.children.get(i)||new B(null)).set(U(e),n),o=this.children.insert(i,r);return new B(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const n=A(e),i=this.children.get(n);if(i){const s=i.remove(U(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const n=A(e),i=this.children.get(n);return i?i.get(U(e)):null}}setTree(e,n){if(D(e))return n;{const i=A(e),r=(this.children.get(i)||new B(null)).setTree(U(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ee(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(D(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(U(e),ee(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,i){if(D(e))return this;{this.value&&i(n,this.value);const s=A(e),r=this.children.get(s);return r?r.foreachOnPath_(U(e),ee(n,s),i):new B(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.writeTree_=e}static empty(){return new Re(new B(null))}}function Vt(t,e,n){if(D(e))return new Re(new B(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=pe(s,e);return r=r.updateChild(o,n),new Re(t.writeTree_.set(s,r))}else{const s=new B(n),r=t.writeTree_.setTree(e,s);return new Re(r)}}}function uo(t,e,n){let i=t;return ve(n,(s,r)=>{i=Vt(i,ee(e,s),r)}),i}function ho(t,e){if(D(e))return Re.empty();{const n=t.writeTree_.setTree(e,new B(null));return new Re(n)}}function Ji(t,e){return nt(t,e)!=null}function nt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(pe(n.path,e)):null}function fo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(q,(i,s)=>{e.push(new L(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new L(i,s.value))}),e}function ze(t,e){if(D(e))return t;{const n=nt(t,e);return n!=null?new Re(new B(n)):new Re(t.writeTree_.subtree(e))}}function es(t){return t.writeTree_.isEmpty()}function _t(t,e){return Rl(V(),t.writeTree_,e)}function Rl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Rl(ee(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ee(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e){return kl(e,t)}function tm(t,e,n,i,s){x(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Vt(t.visibleWrites,e,n)),t.lastWriteId=i}function nm(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function im(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&sm(l,i.path)?s=!1:Ie(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return rm(t),!0;if(i.snap)t.visibleWrites=ho(t.visibleWrites,i.path);else{const l=i.children;ve(l,a=>{t.visibleWrites=ho(t.visibleWrites,ee(i.path,a))})}return!0}else return!1}function sm(t,e){if(t.snap)return Ie(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ie(ee(t.path,n),e))return!0;return!1}function rm(t){t.visibleWrites=Ol(t.allWrites,om,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function om(t){return t.visible}function Ol(t,e,n){let i=Re.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)Ie(n,o)?(l=pe(n,o),i=Vt(i,l,r.snap)):Ie(o,n)&&(l=pe(o,n),i=Vt(i,V(),r.snap.getChild(l)));else if(r.children){if(Ie(n,o))l=pe(n,o),i=uo(i,l,r.children);else if(Ie(o,n))if(l=pe(o,n),D(l))i=uo(i,V(),r.children);else{const a=pt(r.children,A(l));if(a){const u=a.getChild(U(l));i=Vt(i,V(),u)}}}else throw tn("WriteRecord should have .snap or .children")}}return i}function Pl(t,e,n,i,s){if(!i&&!s){const r=nt(t.visibleWrites,e);if(r!=null)return r;{const o=ze(t.visibleWrites,e);if(es(o))return n;if(n==null&&!Ji(o,V()))return null;{const l=n||M.EMPTY_NODE;return _t(o,l)}}}else{const r=ze(t.visibleWrites,e);if(!s&&es(r))return n;if(!s&&n==null&&!Ji(r,V()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Ie(u.path,e)||Ie(e,u.path))},l=Ol(t.allWrites,o,e),a=n||M.EMPTY_NODE;return _t(l,a)}}}function am(t,e,n){let i=M.EMPTY_NODE;const s=nt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ze(t.visibleWrites,e);return n.forEachChild(q,(o,l)=>{const a=_t(ze(r,new W(o)),l);i=i.updateImmediateChild(o,a)}),fo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ze(t.visibleWrites,e);return fo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function lm(t,e,n,i,s){x(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ee(e,n);if(Ji(t.visibleWrites,r))return null;{const o=ze(t.visibleWrites,r);return es(o)?s.getChild(n):_t(o,s.getChild(n))}}function cm(t,e,n,i){const s=ee(e,n),r=nt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ze(t.visibleWrites,s);return _t(o,i.getNode().getImmediateChild(n))}else return null}function um(t,e){return nt(t.visibleWrites,e)}function dm(t,e,n,i,s,r,o){let l;const a=ze(t.visibleWrites,e),u=nt(a,V());if(u!=null)l=u;else if(n!=null)l=_t(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=f.getNext();for(;p&&d.length<s;)h(p,i)!==0&&d.push(p),p=f.getNext();return d}else return[]}function hm(){return{visibleWrites:Re.empty(),allWrites:[],lastWriteId:-1}}function Un(t,e,n,i){return Pl(t.writeTree,t.treePath,e,n,i)}function As(t,e){return am(t.writeTree,t.treePath,e)}function po(t,e,n,i){return lm(t.writeTree,t.treePath,e,n,i)}function $n(t,e){return um(t.writeTree,ee(t.treePath,e))}function fm(t,e,n,i,s,r){return dm(t.writeTree,t.treePath,e,n,i,s,r)}function Ds(t,e,n){return cm(t.writeTree,t.treePath,e,n)}function Ml(t,e){return kl(ee(t.treePath,e),t.writeTree)}function kl(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Qt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Kt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,vt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Qt(i,e.snapshotNode,s.oldSnap));else throw tn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Nl=new gm;class Fs{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ds(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tt(this.viewCache_),r=fm(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){return{filter:t}}function vm(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _m(t,e,n,i,s){const r=new pm;let o,l;if(n.type===Te.OVERWRITE){const u=n;u.source.fromUser?o=ts(t,e,u.path,u.snap,i,s,r):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!D(u.path),o=Bn(t,e,u.path,u.snap,i,s,l,r))}else if(n.type===Te.MERGE){const u=n;u.source.fromUser?o=bm(t,e,u.path,u.children,i,s,r):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ns(t,e,u.path,u.children,i,s,l,r))}else if(n.type===Te.ACK_USER_WRITE){const u=n;u.revert?o=wm(t,e,u.path,i,s,r):o=xm(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===Te.LISTEN_COMPLETE)o=Cm(t,e,n.path,i,r);else throw tn("Unknown operation type: "+n.type);const a=r.getChanges();return ym(e,o,a),{viewCache:o,changes:a}}function ym(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Zi(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Sl(Zi(e)))}}function Ll(t,e,n,i,s,r){const o=e.eventCache;if($n(i,n)!=null)return e;{let l,a;if(D(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tt(e),d=u instanceof M?u:M.EMPTY_NODE,h=As(i,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Un(i,tt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=A(n);if(u===".priority"){x(qe(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=po(i,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=U(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=po(i,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Ds(i,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,d,s,r):l=o.getNode()}}return jt(e,l,o.isFullyInitialized()||D(n),t.filter.filtersNodes())}}function Bn(t,e,n,i,s,r,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(D(n))u=d.updateFullNode(a.getNode(),i,null);else if(d.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,i);u=d.updateFullNode(a.getNode(),p,null)}else{const p=A(n);if(!a.isCompleteForPath(n)&&qe(n)>1)return e;const g=U(n),v=a.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?u=d.updatePriority(a.getNode(),v):u=d.updateChild(a.getNode(),p,v,g,Nl,null)}const h=Tl(e,u,a.isFullyInitialized()||D(n),d.filtersNodes()),f=new Fs(s,h,r);return Ll(t,h,n,s,f,l)}function ts(t,e,n,i,s,r,o){const l=e.eventCache;let a,u;const d=new Fs(s,e,r);if(D(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=jt(e,u,!0,t.filter.filtersNodes());else{const h=A(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),a=jt(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=U(n),p=l.getNode().getImmediateChild(h);let g;if(D(f))g=i;else{const m=d.getCompleteChild(h);m!=null?gl(f)===".priority"&&m.getChild(vl(f)).isEmpty()?g=m:g=m.updateChild(f,i):g=M.EMPTY_NODE}if(p.equals(g))a=e;else{const m=t.filter.updateChild(l.getNode(),h,g,f,d,o);a=jt(e,m,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function go(t,e){return t.eventCache.isCompleteForChild(e)}function bm(t,e,n,i,s,r,o){let l=e;return i.foreach((a,u)=>{const d=ee(n,a);go(e,A(d))&&(l=ts(t,l,d,u,s,r,o))}),i.foreach((a,u)=>{const d=ee(n,a);go(e,A(d))||(l=ts(t,l,d,u,s,r,o))}),l}function mo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ns(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;D(n)?u=i:u=new B(null).setTree(n,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=mo(t,p,f);a=Bn(t,a,new W(h),g,s,r,o,l)}}),u.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=mo(t,g,f);a=Bn(t,a,new W(h),m,s,r,o,l)}}),a}function xm(t,e,n,i,s,r,o){if($n(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(D(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Bn(t,e,n,a.getNode().getChild(n),s,r,l,o);if(D(n)){let u=new B(null);return a.getNode().forEachChild(ht,(d,h)=>{u=u.set(new W(d),h)}),ns(t,e,n,u,s,r,l,o)}else return e}else{let u=new B(null);return i.foreach((d,h)=>{const f=ee(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),ns(t,e,n,u,s,r,l,o)}}function Cm(t,e,n,i,s){const r=e.serverCache,o=Tl(e,r.getNode(),r.isFullyInitialized()||D(n),r.isFiltered());return Ll(t,o,n,i,Nl,s)}function wm(t,e,n,i,s,r){let o;if($n(i,n)!=null)return e;{const l=new Fs(i,e,s),a=e.eventCache.getNode();let u;if(D(n)||A(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Un(i,tt(e));else{const h=e.serverCache.getNode();x(h instanceof M,"serverChildren would be complete if leaf node"),d=As(i,h)}d=d,u=t.filter.updateFullNode(a,d,r)}else{const d=A(n);let h=Ds(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?u=t.filter.updateChild(a,d,h,U(n),l,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,M.EMPTY_NODE,U(n),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Un(i,tt(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||$n(i,V())!=null,jt(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ps(i.getIndex()),r=$g(i);this.processor_=mm(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(M.EMPTY_NODE,l.getNode(),null),d=new et(a,o.isFullyInitialized(),s.filtersNodes()),h=new et(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=vi(h,d),this.eventGenerator_=new Qg(this.query_)}get query(){return this.query_}}function Em(t){return t.viewCache_.serverCache.getNode()}function Im(t,e){const n=tt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!D(e)&&!n.getImmediateChild(A(e)).isEmpty())?n.getChild(e):null}function vo(t){return t.eventRegistrations_.length===0}function Tm(t,e){t.eventRegistrations_.push(e)}function _o(t,e,n){const i=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function yo(t,e,n,i){e.type===Te.MERGE&&e.source.queryId!==null&&(x(tt(t.viewCache_),"We should always have a full cache before handling merges"),x(Zi(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=_m(t.processor_,s,e,n,i);return vm(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Al(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Rm(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(q,(r,o)=>{i.push(vt(r,o))}),n.isFullyInitialized()&&i.push(Sl(n.getNode())),Al(t,i,n.getNode(),e)}function Al(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Xg(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;class Om{constructor(){this.views=new Map}}function Pm(t){x(!zn,"__referenceConstructor has already been defined"),zn=t}function Mm(){return x(zn,"Reference.ts has not been loaded"),zn}function km(t){return t.views.size===0}function js(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return x(r!=null,"SyncTree gave us an op for an invalid query."),yo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(yo(o,e,n,i));return r}}function Nm(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Un(n,s?i:null),a=!1;l?a=!0:i instanceof M?(l=As(n,i),a=!1):(l=M.EMPTY_NODE,a=!1);const u=vi(new et(l,a,!1),new et(i,s,!1));return new Sm(e,u)}return o}function Lm(t,e,n,i,s,r){const o=Nm(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tm(o,n),Rm(o,n)}function Am(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Ge(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(_o(u,n,i)),vo(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(_o(a,n,i)),vo(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ge(t)&&r.push(new(Mm())(e._repo,e._path)),{removed:r,events:o}}function Dl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ft(t,e){let n=null;for(const i of t.views.values())n=n||Im(i,e);return n}function Fl(t,e){if(e._queryParams.loadsAllData())return _i(t);{const i=e._queryIdentifier;return t.views.get(i)}}function jl(t,e){return Fl(t,e)!=null}function Ge(t){return _i(t)!=null}function _i(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;function Dm(t){x(!qn,"__referenceConstructor has already been defined"),qn=t}function Fm(){return x(qn,"Reference.ts has not been loaded"),qn}let jm=1;class bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=hm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vm(t,e,n,i,s){return tm(t.pendingWriteTree_,e,n,i,s),s?ln(t,new Je(Il(),e,n)):[]}function ct(t,e,n=!1){const i=nm(t.pendingWriteTree_,e);if(im(t.pendingWriteTree_,e)){let r=new B(null);return i.snap!=null?r=r.set(V(),!0):ve(i.children,o=>{r=r.set(new W(o),!0)}),ln(t,new Wn(i.path,r,n))}else return[]}function yi(t,e,n){return ln(t,new Je(ks(),e,n))}function Hm(t,e,n){const i=B.fromObject(n);return ln(t,new Jt(ks(),e,i))}function Wm(t,e){return ln(t,new Zt(ks(),e))}function Um(t,e,n){const i=Vs(t,n);if(i){const s=Hs(i),r=s.path,o=s.queryId,l=pe(r,e),a=new Zt(Ns(o),l);return Ws(t,r,a)}else return[]}function is(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||jl(o,e))){const a=Am(o,e,n,i);km(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,p)=>Ge(p));if(d&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=zm(f);for(let g=0;g<p.length;++g){const m=p[g],v=m.query,y=Ul(t,m);t.listenProvider_.startListening(Ht(v),Gn(t,v),y.hashFn,y.onComplete)}}}!h&&u.length>0&&!i&&(d?t.listenProvider_.stopListening(Ht(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(bi(f));t.listenProvider_.stopListening(Ht(f),p)}))}qm(t,u)}return l}function $m(t,e,n,i){const s=Vs(t,i);if(s!=null){const r=Hs(s),o=r.path,l=r.queryId,a=pe(o,e),u=new Je(Ns(l),a,n);return Ws(t,o,u)}else return[]}function Bm(t,e,n,i){const s=Vs(t,i);if(s){const r=Hs(s),o=r.path,l=r.queryId,a=pe(o,e),u=B.fromObject(n),d=new Jt(Ns(l),a,u);return Ws(t,o,d)}else return[]}function xo(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const g=pe(f,s);r=r||ft(p,g),o=o||Ge(p)});let l=t.syncPointTree_.get(s);l?(o=o||Ge(l),r=r||ft(l,V())):(l=new Om,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const m=ft(g,V());m&&(r=r.updateImmediateChild(p,m))}));const u=jl(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=bi(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Gm();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=Ls(t.pendingWriteTree_,s);let h=Lm(l,e,n,d,r,a);if(!u&&!o&&!i){const f=Fl(l,e);h=h.concat(Ym(t,e,f))}return h}function Vl(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=pe(o,e),u=ft(l,a);if(u)return u});return Pl(s,e,r,n,!0)}function ln(t,e){return Hl(e,t.syncPointTree_,null,Ls(t.pendingWriteTree_,V()))}function Hl(t,e,n,i){if(D(t.path))return Wl(t,e,n,i);{const s=e.get(V());n==null&&s!=null&&(n=ft(s,V()));let r=[];const o=A(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Ml(i,o);r=r.concat(Hl(l,a,u,d))}return s&&(r=r.concat(js(s,t,i,n))),r}}function Wl(t,e,n,i){const s=e.get(V());n==null&&s!=null&&(n=ft(s,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ml(i,o),d=t.operationForChild(o);d&&(r=r.concat(Wl(d,l,a,u)))}),s&&(r=r.concat(js(s,t,i,n))),r}function Ul(t,e){const n=e.query,i=Gn(t,n);return{hashFn:()=>(Em(e)||M.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Um(t,n._path,i):Wm(t,n._path);{const r=Up(s,n);return is(t,n,null,r)}}}}function Gn(t,e){const n=bi(e);return t.queryToTagMap.get(n)}function bi(t){return t._path.toString()+"$"+t._queryIdentifier}function Vs(t,e){return t.tagToQueryMap.get(e)}function Hs(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function Ws(t,e,n){const i=t.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const s=Ls(t.pendingWriteTree_,e);return js(i,n,s,null)}function zm(t){return t.fold((e,n,i)=>{if(n&&Ge(n))return[_i(n)];{let s=[];return n&&(s=Dl(n)),ve(i,(r,o)=>{s=s.concat(o)}),s}})}function Ht(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Fm())(t._repo,t._path):t}function qm(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=bi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Gm(){return jm++}function Ym(t,e,n){const i=e._path,s=Gn(t,e),r=Ul(t,n),o=t.listenProvider_.startListening(Ht(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)x(!Ge(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,h)=>{if(!D(u)&&d&&Ge(d))return[_i(d).query];{let f=[];return d&&(f=f.concat(Dl(d).map(p=>p.query))),ve(h,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ht(d),Gn(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Us(n)}node(){return this.node_}}class $s{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ee(this.path_,e);return new $s(this.syncTree_,n)}node(){return Vl(this.syncTree_,this.path_)}}const Km=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Co=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Qm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xm(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Qm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Xm=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Zm=function(t,e,n,i){return Bs(e,new $s(n,t),i)},Jm=function(t,e,n){return Bs(t,new Us(e),n)};function Bs(t,e,n){const i=t.getPriority().val(),s=Co(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Co(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new te(l,ue(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new te(s))),o.forEachChild(q,(l,a)=>{const u=Bs(a,e.getImmediateChild(l),n);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function qs(t,e){let n=e instanceof W?e:new W(e),i=t,s=A(n);for(;s!==null;){const r=pt(i.node.children,s)||{children:{},childCount:0};i=new zs(s,i,r),n=U(n),s=A(n)}return i}function xt(t){return t.node.value}function $l(t,e){t.node.value=e,ss(t)}function Bl(t){return t.node.childCount>0}function ev(t){return xt(t)===void 0&&!Bl(t)}function xi(t,e){ve(t.node.children,(n,i)=>{e(new zs(n,t,i))})}function zl(t,e,n,i){n&&!i&&e(t),xi(t,s=>{zl(s,e,!0,i)}),n&&i&&e(t)}function tv(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function cn(t){return new W(t.parent===null?t.name:cn(t.parent)+"/"+t.name)}function ss(t){t.parent!==null&&nv(t.parent,t.name,t)}function nv(t,e,n){const i=ev(n),s=Ve(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ss(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ss(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/[\[\].#$\/\u0000-\u001F\u007F]/,sv=/[\[\].#$\u0000-\u001F\u007F]/,Vi=10*1024*1024,ql=function(t){return typeof t=="string"&&t.length!==0&&!iv.test(t)},Gl=function(t){return typeof t=="string"&&t.length!==0&&!sv.test(t)},rv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gl(t)},Yl=function(t,e,n){const i=n instanceof W?new xg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ke(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ke(i)+" with contents = "+e.toString());if(Ya(e))throw new Error(t+"contains "+e.toString()+" "+Ke(i));if(typeof e=="string"&&e.length>Vi/3&&Kn(e)>Vi)throw new Error(t+"contains a string greater than "+Vi+" utf8 bytes "+Ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ve(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ql(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cg(i,o),Yl(t,l,i),wg(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ke(i)+" in addition to actual children.")}},Kl=function(t,e,n,i){if(!Gl(n))throw new Error(Po(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ov=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Kl(t,e,n)},av=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ql(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rv(n))throw new Error(Po(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ql(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ts(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Xl(t,e,n){Ql(t,n),Zl(t,i=>Ts(i,e))}function it(t,e,n){Ql(t,n),Zl(t,i=>Ie(i,e)||Ie(e,i))}function Zl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(cv(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Dt&&ce("event: "+n.toString()),on(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="repo_interrupt",dv=25;class hv{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hn(),this.transactionQueueTree_=new zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fv(t,e,n){if(t.stats_=Es(t.repoInfo_),t.forceRestClient_||qp())t.server_=new Vn(t.repoInfo_,(i,s,r,o)=>{wo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>So(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new De(t.repoInfo_,e,(i,s,r,o)=>{wo(t,i,s,r,o)},i=>{So(t,i)},i=>{gv(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Xp(t.repoInfo_,()=>new Kg(t.stats_,t.server_)),t.infoData_=new Bg,t.infoSyncTree_=new bo({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=yi(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Gs(t,"connected",!1),t.serverSyncTree_=new bo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const u=o(l,a);it(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function pv(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jl(t){return Km({timestamp:pv(t)})}function wo(t,e,n,i,s){t.dataUpdateCount++;const r=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=In(n,u=>ue(u));o=Bm(t.serverSyncTree_,r,a,s)}else{const a=ue(n);o=$m(t.serverSyncTree_,r,a,s)}else if(i){const a=In(n,u=>ue(u));o=Hm(t.serverSyncTree_,r,a)}else{const a=ue(n);o=yi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ks(t,r)),it(t.eventQueue_,l,o)}function So(t,e){Gs(t,"connected",e),e===!1&&vv(t)}function gv(t,e){ve(e,(n,i)=>{Gs(t,n,i)})}function Gs(t,e,n){const i=new W("/.info/"+e),s=ue(n);t.infoData_.updateSnapshot(i,s);const r=yi(t.infoSyncTree_,i,s);it(t.eventQueue_,i,r)}function mv(t){return t.nextWriteId_++}function vv(t){ec(t,"onDisconnectEvents");const e=Jl(t),n=Hn();Xi(t.onDisconnect_,V(),(s,r)=>{const o=Zm(s,r,t.serverSyncTree_,e);El(n,s,o)});let i=[];Xi(n,V(),(s,r)=>{i=i.concat(yi(t.serverSyncTree_,s,r));const o=wv(t,s);Ks(t,o)}),t.onDisconnect_=Hn(),it(t.eventQueue_,V(),i)}function _v(t,e,n){let i;A(e._path)===".info"?i=xo(t.infoSyncTree_,e,n):i=xo(t.serverSyncTree_,e,n),Xl(t.eventQueue_,e._path,i)}function yv(t,e,n){let i;A(e._path)===".info"?i=is(t.infoSyncTree_,e,n):i=is(t.serverSyncTree_,e,n),Xl(t.eventQueue_,e._path,i)}function bv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uv)}function ec(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function tc(t,e,n){return Vl(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Ys(t,e=t.transactionQueueTree_){if(e||Ci(t,e),xt(e)){const n=ic(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&xv(t,cn(e),n)}else Bl(e)&&xi(e,n=>{Ys(t,n)})}function xv(t,e,n){const i=n.map(u=>u.currentWriteId),s=tc(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=pe(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ec(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ct(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ci(t,qs(t.transactionQueueTree_,e)),Ys(t,t.transactionQueueTree_),it(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)on(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Ks(t,e)}},o)}function Ks(t,e){const n=nc(t,e),i=cn(n),s=ic(t,n);return Cv(t,s,i),i}function Cv(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=pe(n,a.path);let d=!1,h;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,s=s.concat(ct(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=dv)d=!0,h="maxretry",s=s.concat(ct(t.serverSyncTree_,a.currentWriteId,!0));else{const f=tc(t,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){Yl("transaction failed: Data returned ",p,a.path);let g=ue(p);typeof p=="object"&&p!=null&&Ve(p,".priority")||(g=g.updatePriority(f.getPriority()));const v=a.currentWriteId,y=Jl(t),w=Jm(g,f,y);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=w,a.currentWriteId=mv(t),o.splice(o.indexOf(v),1),s=s.concat(Vm(t.serverSyncTree_,a.path,w,a.currentWriteId,a.applyLocally)),s=s.concat(ct(t.serverSyncTree_,v,!0))}else d=!0,h="nodata",s=s.concat(ct(t.serverSyncTree_,a.currentWriteId,!0))}it(t.eventQueue_,n,s),s=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ci(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)on(i[l]);Ys(t,t.transactionQueueTree_)}function nc(t,e){let n,i=t.transactionQueueTree_;for(n=A(e);n!==null&&xt(i)===void 0;)i=qs(i,n),e=U(e),n=A(e);return i}function ic(t,e){const n=[];return sc(t,e,n),n.sort((i,s)=>i.order-s.order),n}function sc(t,e,n){const i=xt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);xi(e,s=>{sc(t,s,n)})}function Ci(t,e){const n=xt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,$l(e,n.length>0?n:void 0)}xi(e,i=>{Ci(t,i)})}function wv(t,e){const n=cn(nc(t,e)),i=qs(t.transactionQueueTree_,e);return tv(i,s=>{Hi(t,s)}),Hi(t,i),zl(i,s=>{Hi(t,s)}),n}function Hi(t,e){const n=xt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ct(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$l(e,void 0):n.length=r+1,it(t.eventQueue_,cn(e),s);for(let o=0;o<i.length;o++)on(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ev(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eo=function(t,e){const n=Iv(t),i=n.namespace;n.domain==="firebase.com"&&je(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&je("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Fp();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ol(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new W(n.pathString)}},Iv=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=Sv(t.substring(d,h)));const f=Ev(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}class Rv{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Qs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:gl(this._path)}get ref(){return new Ye(this._repo,this._path)}get _queryIdentifier(){const e=lo(this._queryParams),n=ws(e);return n==="{}"?"default":n}get _queryObject(){return lo(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof Qs))return!1;const n=this._repo===e._repo,i=Ts(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+bg(this._path)}}class Ye extends Qs{constructor(e,n){super(e,n,new Ms,!1)}get parent(){const e=vl(this._path);return e===null?null:new Ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),i=rs(this.ref,e);return new Yn(this._node.getChild(n),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Yn(s,rs(this.ref,i),q)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uv(t,e){return t=en(t),t._checkNotDeleted("ref"),e!==void 0?rs(t._root,e):t._root}function rs(t,e){return t=en(t),A(t._path)===null?ov("child","path",e):Kl("child","path",e),new Ye(t._repo,ee(t._path,e))}class Xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Tv("value",this,new Yn(e.snapshotNode,new Ye(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Rv(this,e,n):null}matches(e){return e instanceof Xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Pv(t,e,n,i,s){const r=new Ov(n,void 0),o=new Xs(r);return _v(t._repo,t,o),()=>yv(t._repo,t,o)}function $v(t,e,n,i){return Pv(t,"value",e)}function Bv(t,...e){let n=en(t);for(const i of e)n=i._apply(n);return n}Pm(Ye);Dm(Ye);/**
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
 */const Mv="FIREBASE_DATABASE_EMULATOR_HOST",os={};let kv=!1;function Nv(t,e,n,i){t.repoInfo_=new ol(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Lv(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||je("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eo(r,s),l=o.repoInfo,a;typeof process<"u"&&Br&&(a=Br[Mv]),a?(r=`http://${a}?ns=${l.namespace}`,o=Eo(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new Yp(t.name,t.options,e);av("Invalid Firebase Database URL",o),D(o.path)||je("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Dv(l,t,u,new Gp(t.name,n));return new Fv(d,t)}function Av(t,e){const n=os[e];(!n||n[t.key]!==t)&&je(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bv(t),delete n[t.key]}function Dv(t,e,n,i){let s=os[e.name];s||(s={},os[e.name]=s);let r=s[t.toURLString()];return r&&je("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hv(t,kv,n,i),s[t.toURLString()]=r,r}class Fv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ye(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Av(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&je("Cannot call "+e+" on a deleted database.")}}function zv(t=Hc(),e){const n=jc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Vc("database");i&&jv(n,...i)}return n}function jv(t,e,n,i={}){t=en(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&je("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&je('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Sn(Sn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Wc(i.mockUserToken,t.app.options.projectId);r=new Sn(o)}Nv(s,e,n,r)}/**
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
 */function Vv(t){Mp(Jc),Uc(new $c("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Lv(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ur(zr,qr,t),ur(zr,qr,"esm2017")}De.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};De.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Vv();const qv=S.section`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  max-width: 1184px;
`,Io=t=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:31,height:30,fill:"none",...t,children:c.jsx("path",{fill:"#F4C550",d:"M25.445 0H5.368A4.967 4.967 0 0 0 .407 4.961V25.04A4.967 4.967 0 0 0 5.368 30h20.077a4.967 4.967 0 0 0 4.962-4.961V4.96A4.967 4.967 0 0 0 25.445 0Zm.302 23.165h-7.089a2.904 2.904 0 0 1-2.72 1.902 2.904 2.904 0 0 1-2.722-1.902h-8.15a1 1 0 1 1 0-2h8.15a2.904 2.904 0 0 1 2.721-1.902c1.249 0 2.312.794 2.721 1.902h7.09a1 1 0 1 1 0 2Zm0-7.165H12.118a2.904 2.904 0 0 1-2.72 1.902A2.904 2.904 0 0 1 6.676 16h-1.61a1 1 0 1 1 0-2h1.61a2.904 2.904 0 0 1 2.72-1.902c1.25 0 2.313.794 2.722 1.902h13.63a1 1 0 1 1-.002 2Zm0-7.165h-2.746a2.905 2.905 0 0 1-2.72 1.902 2.904 2.904 0 0 1-2.721-1.902H5.066a1 1 0 1 1 0-2H17.56a2.904 2.904 0 0 1 2.72-1.903c1.249 0 2.313.794 2.721 1.903h2.746a1 1 0 1 1 0 2Z"})}),Gv=({data:t,setTeachersFilter:e})=>{const[n,i]=_.useState(!1),[s,r]=_.useState(!1),o=()=>{i(!n),r(!0)},l=()=>{i(!1),r(!1)};return c.jsxs("div",{children:[c.jsxs(c.Fragment,{children:[s&&c.jsx(En,{closeModal:l}),i&&c.jsx(c.Fragment,{children:c.jsxs(Jf,{className:n?"open":"",children:[c.jsx(tp,{data:t,setTeachersFilter:e}),c.jsx(ep,{children:c.jsxs(Hr,{onClick:l,children:[c.jsx(Io,{}),c.jsx("span",{children:"Close Filter"})]})})]})})]}),c.jsxs(Hr,{onClick:o,children:[c.jsx(Io,{}),c.jsx("span",{children:"Filter"})]})]})};export{qv as S,Gv as T,tp as a,Wv as b,zv as g,$v as o,Bv as q,Uv as r};
