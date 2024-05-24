import{r as _,u as xc,R as _r,a as yc,p as C,j as a,S as en,c as bc,b as vn,d as Cc,M as wc,e as Sc,f as Ic,g as Ec,h as Tc,i as Rc,k as Oc,l as Pc,m as Mc,n as kc,o as jc,q as Nc,s as Et,t as Tt,v as Rt,w as Ot,x as Pt,y as _n,z as Lc,A as Ii,B as Dc,C as Ac,D as Fc,E as Vc,F as Hc,G as Wc,H as Uc,J as xr,K as yr,L as cs,O as us,P as Go,Q as rt,T as br,U as Cr,V as Mn,W as $c,X as Bc,Y as zc,Z as wr,_ as Sr,$ as Ir,a0 as Er,I as qc,a1 as Gc,a2 as b,a3 as tn,a4 as Yc,a5 as Kc,a6 as Qc,a7 as Xc,a8 as Zc,a9 as Jc,aa as Tr,ab as re,ac as ds,ad as He,ae as eu,af as tu,ag as nu,ah as pt,ai as kn,aj as Yo,ak as nn,al as iu,am as Ko,an as Qo,ao as su,ap as ru,aq as Rr,ar as Xo,as as ou,at as au,au as ti,av as lu,aw as cu,ax as uu}from"./index-C6FyNhEE.js";function du(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}function Xe(t){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(t)}function hu(t,e){if(Xe(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Xe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zo(t){var e=hu(t,"string");return Xe(e)=="symbol"?e:e+""}function Vt(t,e,n){return e=Zo(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Or(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Or(Object(n),!0).forEach(function(i){Vt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Or(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function fu(t){if(Array.isArray(t))return t}function pu(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,r,o,c=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(c.push(i.value),c.length!==e);l=!0);}catch(d){u=!0,s=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return c}}function $i(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Jo(t,e){if(t){if(typeof t=="string")return $i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $i(t,e)}}function gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(t,e){return fu(t)||pu(t,e)||Jo(t,e)||gu()}function mu(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function We(t,e){if(t==null)return{};var n=mu(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var vu=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function _u(t){var e=t.defaultInputValue,n=e===void 0?"":e,i=t.defaultMenuIsOpen,s=i===void 0?!1:i,r=t.defaultValue,o=r===void 0?null:r,c=t.inputValue,l=t.menuIsOpen,u=t.onChange,d=t.onInputChange,h=t.onMenuClose,f=t.onMenuOpen,p=t.value,g=We(t,vu),m=_.useState(c!==void 0?c:n),v=De(m,2),x=v[0],S=v[1],y=_.useState(l!==void 0?l:s),w=De(y,2),E=w[0],T=w[1],I=_.useState(p!==void 0?p:o),k=De(I,2),$=k[0],Q=k[1],ae=_.useCallback(function(pe,q){typeof u=="function"&&u(pe,q),Q(pe)},[u]),J=_.useCallback(function(pe,q){var ee;typeof d=="function"&&(ee=d(pe,q)),S(ee!==void 0?ee:pe)},[d]),D=_.useCallback(function(){typeof f=="function"&&f(),T(!0)},[f]),we=_.useCallback(function(){typeof h=="function"&&h(),T(!1)},[h]),z=c!==void 0?c:x,K=l!==void 0?l:E,ce=p!==void 0?p:$;return O(O({},g),{},{inputValue:z,menuIsOpen:K,onChange:ae,onInputChange:J,onMenuClose:we,onMenuOpen:D,value:ce})}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},P.apply(this,arguments)}function xu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pr(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Zo(i.key),i)}}function yu(t,e,n){return e&&Pr(t.prototype,e),n&&Pr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Bi(t,e){return Bi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Bi(t,e)}function bu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Bi(t,e)}function jn(t){return jn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},jn(t)}function ea(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ea=function(){return!!t})()}function Cu(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function wu(t,e){if(e&&(Xe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cu(t)}function Su(t){var e=ea();return function(){var i=jn(t),s;if(e){var r=jn(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return wu(this,s)}}function Iu(t){if(Array.isArray(t))return $i(t)}function Eu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Tu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hs(t){return Iu(t)||Eu(t)||Jo(t)||Tu()}function Ru(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Ou(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Pu=function(){function t(n){var i=this;this._insertTag=function(s){var r;i.tags.length===0?i.insertionPoint?r=i.insertionPoint.nextSibling:i.prepend?r=i.container.firstChild:r=i.before:r=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,r),i.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ou(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var r=Ru(s);try{r.insertRule(i,r.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},t}(),ue="-ms-",Nn="-moz-",A="-webkit-",ta="comm",fs="rule",ps="decl",Mu="@import",na="@keyframes",ku="@layer",ju=Math.abs,ni=String.fromCharCode,Nu=Object.assign;function Lu(t,e){return le(t,0)^45?(((e<<2^le(t,0))<<2^le(t,1))<<2^le(t,2))<<2^le(t,3):0}function ia(t){return t.trim()}function Du(t,e){return(t=e.exec(t))?t[0]:t}function F(t,e,n){return t.replace(e,n)}function zi(t,e){return t.indexOf(e)}function le(t,e){return t.charCodeAt(e)|0}function zt(t,e,n){return t.slice(e,n)}function Pe(t){return t.length}function gs(t){return t.length}function xn(t,e){return e.push(t),t}function Au(t,e){return t.map(e).join("")}var ii=1,gt=1,sa=0,ve=0,X=0,wt="";function si(t,e,n,i,s,r,o){return{value:t,root:e,parent:n,type:i,props:s,children:r,line:ii,column:gt,length:o,return:""}}function Mt(t,e){return Nu(si("",null,null,"",null,null,0),t,{length:-t.length},e)}function Fu(){return X}function Vu(){return X=ve>0?le(wt,--ve):0,gt--,X===10&&(gt=1,ii--),X}function ye(){return X=ve<sa?le(wt,ve++):0,gt++,X===10&&(gt=1,ii++),X}function ke(){return le(wt,ve)}function En(){return ve}function sn(t,e){return zt(wt,t,e)}function qt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ra(t){return ii=gt=1,sa=Pe(wt=t),ve=0,[]}function oa(t){return wt="",t}function Tn(t){return ia(sn(ve-1,qi(t===91?t+2:t===40?t+1:t)))}function Hu(t){for(;(X=ke())&&X<33;)ye();return qt(t)>2||qt(X)>3?"":" "}function Wu(t,e){for(;--e&&ye()&&!(X<48||X>102||X>57&&X<65||X>70&&X<97););return sn(t,En()+(e<6&&ke()==32&&ye()==32))}function qi(t){for(;ye();)switch(X){case t:return ve;case 34:case 39:t!==34&&t!==39&&qi(X);break;case 40:t===41&&qi(t);break;case 92:ye();break}return ve}function Uu(t,e){for(;ye()&&t+X!==57;)if(t+X===84&&ke()===47)break;return"/*"+sn(e,ve-1)+"*"+ni(t===47?t:ye())}function $u(t){for(;!qt(ke());)ye();return sn(t,ve)}function Bu(t){return oa(Rn("",null,null,null,[""],t=ra(t),0,[0],t))}function Rn(t,e,n,i,s,r,o,c,l){for(var u=0,d=0,h=o,f=0,p=0,g=0,m=1,v=1,x=1,S=0,y="",w=s,E=r,T=i,I=y;v;)switch(g=S,S=ye()){case 40:if(g!=108&&le(I,h-1)==58){zi(I+=F(Tn(S),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:I+=Tn(S);break;case 9:case 10:case 13:case 32:I+=Hu(g);break;case 92:I+=Wu(En()-1,7);continue;case 47:switch(ke()){case 42:case 47:xn(zu(Uu(ye(),En()),e,n),l);break;default:I+="/"}break;case 123*m:c[u++]=Pe(I)*x;case 125*m:case 59:case 0:switch(S){case 0:case 125:v=0;case 59+d:x==-1&&(I=F(I,/\f/g,"")),p>0&&Pe(I)-h&&xn(p>32?kr(I+";",i,n,h-1):kr(F(I," ","")+";",i,n,h-2),l);break;case 59:I+=";";default:if(xn(T=Mr(I,e,n,u,d,s,c,y,w=[],E=[],h),r),S===123)if(d===0)Rn(I,e,T,T,w,r,h,c,E);else switch(f===99&&le(I,3)===110?100:f){case 100:case 108:case 109:case 115:Rn(t,T,T,i&&xn(Mr(t,T,T,0,0,s,c,y,s,w=[],h),E),s,E,h,c,i?w:E);break;default:Rn(I,T,T,T,[""],E,0,c,E)}}u=d=p=0,m=x=1,y=I="",h=o;break;case 58:h=1+Pe(I),p=g;default:if(m<1){if(S==123)--m;else if(S==125&&m++==0&&Vu()==125)continue}switch(I+=ni(S),S*m){case 38:x=d>0?1:(I+="\f",-1);break;case 44:c[u++]=(Pe(I)-1)*x,x=1;break;case 64:ke()===45&&(I+=Tn(ye())),f=ke(),d=h=Pe(y=I+=$u(En())),S++;break;case 45:g===45&&Pe(I)==2&&(m=0)}}return r}function Mr(t,e,n,i,s,r,o,c,l,u,d){for(var h=s-1,f=s===0?r:[""],p=gs(f),g=0,m=0,v=0;g<i;++g)for(var x=0,S=zt(t,h+1,h=ju(m=o[g])),y=t;x<p;++x)(y=ia(m>0?f[x]+" "+S:F(S,/&\f/g,f[x])))&&(l[v++]=y);return si(t,e,n,s===0?fs:c,l,u,d)}function zu(t,e,n){return si(t,e,n,ta,ni(Fu()),zt(t,2,-2),0)}function kr(t,e,n,i){return si(t,e,n,ps,zt(t,0,i),zt(t,i+1,-1),i)}function ut(t,e){for(var n="",i=gs(t),s=0;s<i;s++)n+=e(t[s],s,t,e)||"";return n}function qu(t,e,n,i){switch(t.type){case ku:if(t.children.length)break;case Mu:case ps:return t.return=t.return||t.value;case ta:return"";case na:return t.return=t.value+"{"+ut(t.children,i)+"}";case fs:t.value=t.props.join(",")}return Pe(n=ut(t.children,i))?t.return=t.value+"{"+n+"}":""}function Gu(t){var e=gs(t);return function(n,i,s,r){for(var o="",c=0;c<e;c++)o+=t[c](n,i,s,r)||"";return o}}function Yu(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ku=function(e,n,i){for(var s=0,r=0;s=r,r=ke(),s===38&&r===12&&(n[i]=1),!qt(r);)ye();return sn(e,ve)},Qu=function(e,n){var i=-1,s=44;do switch(qt(s)){case 0:s===38&&ke()===12&&(n[i]=1),e[i]+=Ku(ve-1,n,i);break;case 2:e[i]+=Tn(s);break;case 4:if(s===44){e[++i]=ke()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=ni(s)}while(s=ye());return e},Xu=function(e,n){return oa(Qu(ra(e),n))},jr=new WeakMap,Zu=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,s=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!jr.get(i))&&!s){jr.set(e,!0);for(var r=[],o=Xu(n,r),c=i.props,l=0,u=0;l<o.length;l++)for(var d=0;d<c.length;d++,u++)e.props[u]=r[l]?o[l].replace(/&\f/g,c[d]):c[d]+" "+o[l]}}},Ju=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function aa(t,e){switch(Lu(t,e)){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+Nn+t+ue+t+t;case 6828:case 4268:return A+t+ue+t+t;case 6165:return A+t+ue+"flex-"+t+t;case 5187:return A+t+F(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+ue+"flex-$1$2")+t;case 5443:return A+t+ue+"flex-item-"+F(t,/flex-|-self/,"")+t;case 4675:return A+t+ue+"flex-line-pack"+F(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+ue+F(t,"shrink","negative")+t;case 5292:return A+t+ue+F(t,"basis","preferred-size")+t;case 6060:return A+"box-"+F(t,"-grow","")+A+t+ue+F(t,"grow","positive")+t;case 4554:return A+F(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return F(F(F(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return F(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return F(F(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return F(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(t)-1-e>6)switch(le(t,e+1)){case 109:if(le(t,e+4)!==45)break;case 102:return F(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Nn+(le(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~zi(t,"stretch")?aa(F(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(le(t,e+1)!==115)break;case 6444:switch(le(t,Pe(t)-3-(~zi(t,"!important")&&10))){case 107:return F(t,":",":"+A)+t;case 101:return F(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(le(t,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+ue+"$2box$3")+t}break;case 5936:switch(le(t,e+11)){case 114:return A+t+ue+F(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+ue+F(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+ue+F(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+ue+t+t}return t}var ed=function(e,n,i,s){if(e.length>-1&&!e.return)switch(e.type){case ps:e.return=aa(e.value,e.length);break;case na:return ut([Mt(e,{value:F(e.value,"@","@"+A)})],s);case fs:if(e.length)return Au(e.props,function(r){switch(Du(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ut([Mt(e,{props:[F(r,/:(read-\w+)/,":"+Nn+"$1")]})],s);case"::placeholder":return ut([Mt(e,{props:[F(r,/:(plac\w+)/,":"+A+"input-$1")]}),Mt(e,{props:[F(r,/:(plac\w+)/,":"+Nn+"$1")]}),Mt(e,{props:[F(r,/:(plac\w+)/,ue+"input-$1")]})],s)}return""})}},td=[ed],nd=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var v=m.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var s=e.stylisPlugins||td,r={},o,c=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var v=m.getAttribute("data-emotion").split(" "),x=1;x<v.length;x++)r[v[x]]=!0;c.push(m)});var l,u=[Zu,Ju];{var d,h=[qu,Yu(function(m){d.insert(m)})],f=Gu(u.concat(s,h)),p=function(v){return ut(Bu(v),f)};l=function(v,x,S,y){d=S,p(v?v+"{"+x.styles+"}":x.styles),y&&(g.inserted[x.name]=!0)}}var g={key:n,sheet:new Pu({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:r,registered:{},insert:l};return g.sheet.hydrate(c),g},la={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe=typeof Symbol=="function"&&Symbol.for,ms=oe?Symbol.for("react.element"):60103,vs=oe?Symbol.for("react.portal"):60106,ri=oe?Symbol.for("react.fragment"):60107,oi=oe?Symbol.for("react.strict_mode"):60108,ai=oe?Symbol.for("react.profiler"):60114,li=oe?Symbol.for("react.provider"):60109,ci=oe?Symbol.for("react.context"):60110,_s=oe?Symbol.for("react.async_mode"):60111,ui=oe?Symbol.for("react.concurrent_mode"):60111,di=oe?Symbol.for("react.forward_ref"):60112,hi=oe?Symbol.for("react.suspense"):60113,id=oe?Symbol.for("react.suspense_list"):60120,fi=oe?Symbol.for("react.memo"):60115,pi=oe?Symbol.for("react.lazy"):60116,sd=oe?Symbol.for("react.block"):60121,rd=oe?Symbol.for("react.fundamental"):60117,od=oe?Symbol.for("react.responder"):60118,ad=oe?Symbol.for("react.scope"):60119;function Ce(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ms:switch(t=t.type,t){case _s:case ui:case ri:case ai:case oi:case hi:return t;default:switch(t=t&&t.$$typeof,t){case ci:case di:case pi:case fi:case li:return t;default:return e}}case vs:return e}}}function ca(t){return Ce(t)===ui}H.AsyncMode=_s;H.ConcurrentMode=ui;H.ContextConsumer=ci;H.ContextProvider=li;H.Element=ms;H.ForwardRef=di;H.Fragment=ri;H.Lazy=pi;H.Memo=fi;H.Portal=vs;H.Profiler=ai;H.StrictMode=oi;H.Suspense=hi;H.isAsyncMode=function(t){return ca(t)||Ce(t)===_s};H.isConcurrentMode=ca;H.isContextConsumer=function(t){return Ce(t)===ci};H.isContextProvider=function(t){return Ce(t)===li};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ms};H.isForwardRef=function(t){return Ce(t)===di};H.isFragment=function(t){return Ce(t)===ri};H.isLazy=function(t){return Ce(t)===pi};H.isMemo=function(t){return Ce(t)===fi};H.isPortal=function(t){return Ce(t)===vs};H.isProfiler=function(t){return Ce(t)===ai};H.isStrictMode=function(t){return Ce(t)===oi};H.isSuspense=function(t){return Ce(t)===hi};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ri||t===ui||t===ai||t===oi||t===hi||t===id||typeof t=="object"&&t!==null&&(t.$$typeof===pi||t.$$typeof===fi||t.$$typeof===li||t.$$typeof===ci||t.$$typeof===di||t.$$typeof===rd||t.$$typeof===od||t.$$typeof===ad||t.$$typeof===sd)};H.typeOf=Ce;la.exports=H;var ld=la.exports,ua=ld,cd={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ud={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},da={};da[ua.ForwardRef]=cd;da[ua.Memo]=ud;var dd=!0;function hd(t,e,n){var i="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):i+=s+" "}),i}var ha=function(e,n,i){var s=e.key+"-"+n.name;(i===!1||dd===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},fd=function(e,n,i){ha(e,n,i);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var r=n;do e.insert(n===r?"."+s:"",r,e.sheet,!0),r=r.next;while(r!==void 0)}};function pd(t){for(var e=0,n,i=0,s=t.length;s>=4;++i,s-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var gd=/[A-Z]|^ms/g,md=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fa=function(e){return e.charCodeAt(1)===45},Nr=function(e){return e!=null&&typeof e!="boolean"},Ei=du(function(t){return fa(t)?t:t.replace(gd,"-$&").toLowerCase()}),Lr=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(md,function(i,s,r){return Me={name:s,styles:r,next:Me},s})}return xc[e]!==1&&!fa(e)&&typeof n=="number"&&n!==0?n+"px":n};function Gt(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Me={name:n.name,styles:n.styles,next:Me},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)Me={name:i.name,styles:i.styles,next:Me},i=i.next;var s=n.styles+";";return s}return vd(t,e,n)}case"function":{if(t!==void 0){var r=Me,o=n(t);return Me=r,Gt(t,e,o)}break}}return n}function vd(t,e,n){var i="";if(Array.isArray(n))for(var s=0;s<n.length;s++)i+=Gt(t,e,n[s])+";";else for(var r in n){var o=n[r];if(typeof o!="object")Nr(o)&&(i+=Ei(r)+":"+Lr(r,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&e==null)for(var c=0;c<o.length;c++)Nr(o[c])&&(i+=Ei(r)+":"+Lr(r,o[c])+";");else{var l=Gt(t,e,o);switch(r){case"animation":case"animationName":{i+=Ei(r)+":"+l+";";break}default:i+=r+"{"+l+"}"}}}return i}var Dr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Me,pa=function(e,n,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var s=!0,r="";Me=void 0;var o=e[0];o==null||o.raw===void 0?(s=!1,r+=Gt(i,n,o)):r+=o[0];for(var c=1;c<e.length;c++)r+=Gt(i,n,e[c]),s&&(r+=o[c]);Dr.lastIndex=0;for(var l="",u;(u=Dr.exec(r))!==null;)l+="-"+u[1];var d=pd(r)+l;return{name:d,styles:r,next:Me}},_d=function(e){return e()},xd=_r.useInsertionEffect?_r.useInsertionEffect:!1,yd=xd||_d,xs={}.hasOwnProperty,ga=_.createContext(typeof HTMLElement<"u"?nd({key:"css"}):null);ga.Provider;var bd=function(e){return _.forwardRef(function(n,i){var s=_.useContext(ga);return e(n,s,i)})},Cd=_.createContext({}),Gi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",wd=function(e,n){var i={};for(var s in n)xs.call(n,s)&&(i[s]=n[s]);return i[Gi]=e,i},Sd=function(e){var n=e.cache,i=e.serialized,s=e.isStringTag;return ha(n,i,s),yd(function(){return fd(n,i,s)}),null},Id=bd(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var s=t[Gi],r=[i],o="";typeof t.className=="string"?o=hd(e.registered,r,t.className):t.className!=null&&(o=t.className+" ");var c=pa(r,void 0,_.useContext(Cd));o+=e.key+"-"+c.name;var l={};for(var u in t)xs.call(t,u)&&u!=="css"&&u!==Gi&&(l[u]=t[u]);return l.ref=n,l.className=o,_.createElement(_.Fragment,null,_.createElement(Sd,{cache:e,serialized:c,isStringTag:typeof s=="string"}),_.createElement(s,l))}),Ed=Id,R=function(e,n){var i=arguments;if(n==null||!xs.call(n,"css"))return _.createElement.apply(void 0,i);var s=i.length,r=new Array(s);r[0]=Ed,r[1]=wd(e,n);for(var o=2;o<s;o++)r[o]=i[o];return _.createElement.apply(null,r)};function ys(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return pa(e)}var Td=function(){var e=ys.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Rd(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const Od=Math.min,Pd=Math.max,Ln=Math.round,yn=Math.floor,Dn=t=>({x:t,y:t});function Md(t){const{x:e,y:n,width:i,height:s}=t;return{width:i,height:s,top:n,left:e,right:e+i,bottom:n+s,x:e,y:n}}function ma(t){return _a(t)?(t.nodeName||"").toLowerCase():"#document"}function Fe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function va(t){var e;return(e=(_a(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _a(t){return t instanceof Node||t instanceof Fe(t).Node}function kd(t){return t instanceof Element||t instanceof Fe(t).Element}function bs(t){return t instanceof HTMLElement||t instanceof Fe(t).HTMLElement}function Ar(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Fe(t).ShadowRoot}function xa(t){const{overflow:e,overflowX:n,overflowY:i,display:s}=Cs(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(s)}function jd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Nd(t){return["html","body","#document"].includes(ma(t))}function Cs(t){return Fe(t).getComputedStyle(t)}function Ld(t){if(ma(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ar(t)&&t.host||va(t);return Ar(e)?e.host:e}function ya(t){const e=Ld(t);return Nd(e)?t.ownerDocument?t.ownerDocument.body:t.body:bs(e)&&xa(e)?e:ya(e)}function An(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=ya(t),r=s===((i=t.ownerDocument)==null?void 0:i.body),o=Fe(s);return r?e.concat(o,o.visualViewport||[],xa(s)?s:[],o.frameElement&&n?An(o.frameElement):[]):e.concat(s,An(s,[],n))}function Dd(t){const e=Cs(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=bs(t),r=s?t.offsetWidth:n,o=s?t.offsetHeight:i,c=Ln(n)!==r||Ln(i)!==o;return c&&(n=r,i=o),{width:n,height:i,$:c}}function ws(t){return kd(t)?t:t.contextElement}function Fr(t){const e=ws(t);if(!bs(e))return Dn(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:r}=Dd(e);let o=(r?Ln(n.width):n.width)/i,c=(r?Ln(n.height):n.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!c||!Number.isFinite(c))&&(c=1),{x:o,y:c}}const Ad=Dn(0);function Fd(t){const e=Fe(t);return!jd()||!e.visualViewport?Ad:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vd(t,e,n){return!1}function Vr(t,e,n,i){e===void 0&&(e=!1);const s=t.getBoundingClientRect(),r=ws(t);let o=Dn(1);e&&(o=Fr(t));const c=Vd()?Fd(r):Dn(0);let l=(s.left+c.x)/o.x,u=(s.top+c.y)/o.y,d=s.width/o.x,h=s.height/o.y;if(r){const f=Fe(r),p=i;let g=f,m=g.frameElement;for(;m&&i&&p!==g;){const v=Fr(m),x=m.getBoundingClientRect(),S=Cs(m),y=x.left+(m.clientLeft+parseFloat(S.paddingLeft))*v.x,w=x.top+(m.clientTop+parseFloat(S.paddingTop))*v.y;l*=v.x,u*=v.y,d*=v.x,h*=v.y,l+=y,u+=w,g=Fe(m),m=g.frameElement}}return Md({width:d,height:h,x:l,y:u})}function Hd(t,e){let n=null,i;const s=va(t);function r(){var c;clearTimeout(i),(c=n)==null||c.disconnect(),n=null}function o(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:u,top:d,width:h,height:f}=t.getBoundingClientRect();if(c||e(),!h||!f)return;const p=yn(d),g=yn(s.clientWidth-(u+h)),m=yn(s.clientHeight-(d+f)),v=yn(u),S={rootMargin:-p+"px "+-g+"px "+-m+"px "+-v+"px",threshold:Pd(0,Od(1,l))||1};let y=!0;function w(E){const T=E[0].intersectionRatio;if(T!==l){if(!y)return o();T?o(!1,T):i=setTimeout(()=>{o(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(w,{...S,root:s.ownerDocument})}catch{n=new IntersectionObserver(w,S)}n.observe(t)}return o(!0),r}function Wd(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=ws(t),d=s||r?[...u?An(u):[],...An(e)]:[];d.forEach(x=>{s&&x.addEventListener("scroll",n,{passive:!0}),r&&x.addEventListener("resize",n)});const h=u&&c?Hd(u,n):null;let f=-1,p=null;o&&(p=new ResizeObserver(x=>{let[S]=x;S&&S.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(e)})),n()}),u&&!l&&p.observe(u),p.observe(e));let g,m=l?Vr(t):null;l&&v();function v(){const x=Vr(t);m&&(x.x!==m.x||x.y!==m.y||x.width!==m.width||x.height!==m.height)&&n(),m=x,g=requestAnimationFrame(v)}return n(),()=>{var x;d.forEach(S=>{s&&S.removeEventListener("scroll",n),r&&S.removeEventListener("resize",n)}),h==null||h(),(x=p)==null||x.disconnect(),p=null,l&&cancelAnimationFrame(g)}}var Yi=_.useLayoutEffect,Ud=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Fn=function(){};function $d(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Bd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=[].concat(i);if(e&&t)for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push("".concat($d(t,o)));return r.filter(function(c){return c}).map(function(c){return String(c).trim()}).join(" ")}var Hr=function(e){return Jd(e)?e.filter(Boolean):Xe(e)==="object"&&e!==null?[e]:[]},ba=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=We(e,Ud);return O({},n)},Y=function(e,n,i){var s=e.cx,r=e.getStyles,o=e.getClassNames,c=e.className;return{css:r(n,e),className:s(i??{},o(n,e),c)}};function gi(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function zd(t){return gi(t)?window.innerHeight:t.clientHeight}function Ca(t){return gi(t)?window.pageYOffset:t.scrollTop}function Vn(t,e){if(gi(t)){window.scrollTo(0,e);return}t.scrollTop=e}function qd(t){var e=getComputedStyle(t),n=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var s=t;s=s.parentElement;)if(e=getComputedStyle(s),!(n&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return s;return document.documentElement}function Gd(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}function bn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Fn,s=Ca(t),r=e-s,o=10,c=0;function l(){c+=o;var u=Gd(c,s,r,n);Vn(t,u),c<n?window.requestAnimationFrame(l):i(t)}l()}function Wr(t,e){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=e.offsetHeight/3;i.bottom+s>n.bottom?Vn(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+s,t.scrollHeight)):i.top-s<n.top&&Vn(t,Math.max(e.offsetTop-s,0))}function Yd(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ur(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Kd(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var wa=!1,Qd={get passive(){return wa=!0}},Cn=typeof window<"u"?window:{};Cn.addEventListener&&Cn.removeEventListener&&(Cn.addEventListener("p",Fn,Qd),Cn.removeEventListener("p",Fn,!1));var Xd=wa;function Zd(t){return t!=null}function Jd(t){return Array.isArray(t)}function wn(t,e,n){return t?e:n}var eh=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var r=Object.entries(e).filter(function(o){var c=De(o,1),l=c[0];return!i.includes(l)});return r.reduce(function(o,c){var l=De(c,2),u=l[0],d=l[1];return o[u]=d,o},{})},th=["children","innerProps"],nh=["children","innerProps"];function ih(t){var e=t.maxHeight,n=t.menuEl,i=t.minHeight,s=t.placement,r=t.shouldScroll,o=t.isFixedPosition,c=t.controlHeight,l=qd(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var d=l.getBoundingClientRect(),h=d.height,f=n.getBoundingClientRect(),p=f.bottom,g=f.height,m=f.top,v=n.offsetParent.getBoundingClientRect(),x=v.top,S=o?window.innerHeight:zd(l),y=Ca(l),w=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),T=x-E,I=S-m,k=T+y,$=h-y-m,Q=p-S+y+w,ae=y+m-E,J=160;switch(s){case"auto":case"bottom":if(I>=g)return{placement:"bottom",maxHeight:e};if($>=g&&!o)return r&&bn(l,Q,J),{placement:"bottom",maxHeight:e};if(!o&&$>=i||o&&I>=i){r&&bn(l,Q,J);var D=o?I-w:$-w;return{placement:"bottom",maxHeight:D}}if(s==="auto"||o){var we=e,z=o?T:k;return z>=i&&(we=Math.min(z-w-c,e)),{placement:"top",maxHeight:we}}if(s==="bottom")return r&&Vn(l,Q),{placement:"bottom",maxHeight:e};break;case"top":if(T>=g)return{placement:"top",maxHeight:e};if(k>=g&&!o)return r&&bn(l,ae,J),{placement:"top",maxHeight:e};if(!o&&k>=i||o&&T>=i){var K=e;return(!o&&k>=i||o&&T>=i)&&(K=o?T-E:k-E),r&&bn(l,ae,J),{placement:"top",maxHeight:K}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(s,'".'))}return u}function sh(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var Sa=function(e){return e==="auto"?"bottom":e},rh=function(e,n){var i,s=e.placement,r=e.theme,o=r.borderRadius,c=r.spacing,l=r.colors;return O((i={label:"menu"},Vt(i,sh(s),"100%"),Vt(i,"position","absolute"),Vt(i,"width","100%"),Vt(i,"zIndex",1),i),n?{}:{backgroundColor:l.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:c.menuGutter,marginTop:c.menuGutter})},Ia=_.createContext(null),oh=function(e){var n=e.children,i=e.minMenuHeight,s=e.maxMenuHeight,r=e.menuPlacement,o=e.menuPosition,c=e.menuShouldScrollIntoView,l=e.theme,u=_.useContext(Ia)||{},d=u.setPortalPlacement,h=_.useRef(null),f=_.useState(s),p=De(f,2),g=p[0],m=p[1],v=_.useState(null),x=De(v,2),S=x[0],y=x[1],w=l.spacing.controlHeight;return Yi(function(){var E=h.current;if(E){var T=o==="fixed",I=c&&!T,k=ih({maxHeight:s,menuEl:E,minHeight:i,placement:r,shouldScroll:I,isFixedPosition:T,controlHeight:w});m(k.maxHeight),y(k.placement),d==null||d(k.placement)}},[s,r,o,c,i,d,w]),n({ref:h,placerProps:O(O({},e),{},{placement:S||Sa(r),maxHeight:g})})},ah=function(e){var n=e.children,i=e.innerRef,s=e.innerProps;return R("div",P({},Y(e,"menu",{menu:!0}),{ref:i},s),n)},lh=ah,ch=function(e,n){var i=e.maxHeight,s=e.theme.spacing.baseUnit;return O({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:s,paddingTop:s})},uh=function(e){var n=e.children,i=e.innerProps,s=e.innerRef,r=e.isMulti;return R("div",P({},Y(e,"menuList",{"menu-list":!0,"menu-list--is-multi":r}),{ref:s},i),n)},Ea=function(e,n){var i=e.theme,s=i.spacing.baseUnit,r=i.colors;return O({textAlign:"center"},n?{}:{color:r.neutral40,padding:"".concat(s*2,"px ").concat(s*3,"px")})},dh=Ea,hh=Ea,fh=function(e){var n=e.children,i=n===void 0?"No options":n,s=e.innerProps,r=We(e,th);return R("div",P({},Y(O(O({},r),{},{children:i,innerProps:s}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),s),i)},ph=function(e){var n=e.children,i=n===void 0?"Loading...":n,s=e.innerProps,r=We(e,nh);return R("div",P({},Y(O(O({},r),{},{children:i,innerProps:s}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),s),i)},gh=function(e){var n=e.rect,i=e.offset,s=e.position;return{left:n.left,position:s,top:i,width:n.width,zIndex:1}},mh=function(e){var n=e.appendTo,i=e.children,s=e.controlElement,r=e.innerProps,o=e.menuPlacement,c=e.menuPosition,l=_.useRef(null),u=_.useRef(null),d=_.useState(Sa(o)),h=De(d,2),f=h[0],p=h[1],g=_.useMemo(function(){return{setPortalPlacement:p}},[]),m=_.useState(null),v=De(m,2),x=v[0],S=v[1],y=_.useCallback(function(){if(s){var I=Yd(s),k=c==="fixed"?0:window.pageYOffset,$=I[f]+k;($!==(x==null?void 0:x.offset)||I.left!==(x==null?void 0:x.rect.left)||I.width!==(x==null?void 0:x.rect.width))&&S({offset:$,rect:I})}},[s,c,f,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Yi(function(){y()},[y]);var w=_.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),s&&l.current&&(u.current=Wd(s,l.current,y,{elementResize:"ResizeObserver"in window}))},[s,y]);Yi(function(){w()},[w]);var E=_.useCallback(function(I){l.current=I,w()},[w]);if(!n&&c!=="fixed"||!x)return null;var T=R("div",P({ref:E},Y(O(O({},e),{},{offset:x.offset,position:c,rect:x.rect}),"menuPortal",{"menu-portal":!0}),r),i);return R(Ia.Provider,{value:g},n?yc.createPortal(T,n):T)},vh=function(e){var n=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},_h=function(e){var n=e.children,i=e.innerProps,s=e.isDisabled,r=e.isRtl;return R("div",P({},Y(e,"container",{"--is-disabled":s,"--is-rtl":r}),i),n)},xh=function(e,n){var i=e.theme.spacing,s=e.isMulti,r=e.hasValue,o=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:s&&r&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},yh=function(e){var n=e.children,i=e.innerProps,s=e.isMulti,r=e.hasValue;return R("div",P({},Y(e,"valueContainer",{"value-container":!0,"value-container--is-multi":s,"value-container--has-value":r}),i),n)},bh=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Ch=function(e){var n=e.children,i=e.innerProps;return R("div",P({},Y(e,"indicatorsContainer",{indicators:!0}),i),n)},$r,wh=["size"],Sh=["innerProps","isRtl","size"],Ih={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ta=function(e){var n=e.size,i=We(e,wh);return R("svg",P({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ih},i))},Ss=function(e){return R(Ta,P({size:20},e),R("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ra=function(e){return R(Ta,P({size:20},e),R("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Oa=function(e,n){var i=e.isFocused,s=e.theme,r=s.spacing.baseUnit,o=s.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?o.neutral60:o.neutral20,padding:r*2,":hover":{color:i?o.neutral80:o.neutral40}})},Eh=Oa,Th=function(e){var n=e.children,i=e.innerProps;return R("div",P({},Y(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||R(Ra,null))},Rh=Oa,Oh=function(e){var n=e.children,i=e.innerProps;return R("div",P({},Y(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||R(Ss,null))},Ph=function(e,n){var i=e.isDisabled,s=e.theme,r=s.spacing.baseUnit,o=s.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?o.neutral10:o.neutral20,marginBottom:r*2,marginTop:r*2})},Mh=function(e){var n=e.innerProps;return R("span",P({},n,Y(e,"indicatorSeparator",{"indicator-separator":!0})))},kh=Td($r||($r=Rd([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),jh=function(e,n){var i=e.isFocused,s=e.size,r=e.theme,o=r.colors,c=r.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:s,lineHeight:1,marginRight:s,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?o.neutral60:o.neutral20,padding:c*2})},Ti=function(e){var n=e.delay,i=e.offset;return R("span",{css:ys({animation:"".concat(kh," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Nh=function(e){var n=e.innerProps,i=e.isRtl,s=e.size,r=s===void 0?4:s,o=We(e,Sh);return R("div",P({},Y(O(O({},o),{},{innerProps:n,isRtl:i,size:r}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),R(Ti,{delay:0,offset:i}),R(Ti,{delay:160,offset:!0}),R(Ti,{delay:320,offset:!i}))},Lh=function(e,n){var i=e.isDisabled,s=e.isFocused,r=e.theme,o=r.colors,c=r.borderRadius,l=r.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?o.neutral5:o.neutral0,borderColor:i?o.neutral10:s?o.primary:o.neutral20,borderRadius:c,borderStyle:"solid",borderWidth:1,boxShadow:s?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:s?o.primary:o.neutral30}})},Dh=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,r=e.innerRef,o=e.innerProps,c=e.menuIsOpen;return R("div",P({ref:r},Y(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":s,"control--menu-is-open":c}),o,{"aria-disabled":i||void 0}),n)},Ah=Dh,Fh=["data"],Vh=function(e,n){var i=e.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Hh=function(e){var n=e.children,i=e.cx,s=e.getStyles,r=e.getClassNames,o=e.Heading,c=e.headingProps,l=e.innerProps,u=e.label,d=e.theme,h=e.selectProps;return R("div",P({},Y(e,"group",{group:!0}),l),R(o,P({},c,{selectProps:h,theme:d,getStyles:s,getClassNames:r,cx:i}),u),R("div",null,n))},Wh=function(e,n){var i=e.theme,s=i.colors,r=i.spacing;return O({label:"group",cursor:"default",display:"block"},n?{}:{color:s.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:r.baseUnit*3,paddingRight:r.baseUnit*3,textTransform:"uppercase"})},Uh=function(e){var n=ba(e);n.data;var i=We(n,Fh);return R("div",P({},Y(e,"groupHeading",{"group-heading":!0}),i))},$h=Hh,Bh=["innerRef","isDisabled","isHidden","inputClassName"],zh=function(e,n){var i=e.isDisabled,s=e.value,r=e.theme,o=r.spacing,c=r.colors;return O(O({visibility:i?"hidden":"visible",transform:s?"translateZ(0)":""},qh),n?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:c.neutral80})},Pa={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},qh={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Pa)},Gh=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Pa)},Yh=function(e){var n=e.cx,i=e.value,s=ba(e),r=s.innerRef,o=s.isDisabled,c=s.isHidden,l=s.inputClassName,u=We(s,Bh);return R("div",P({},Y(e,"input",{"input-container":!0}),{"data-value":i||""}),R("input",P({className:n({input:!0},l),ref:r,style:Gh(c),disabled:o},u)))},Kh=Yh,Qh=function(e,n){var i=e.theme,s=i.spacing,r=i.borderRadius,o=i.colors;return O({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:o.neutral10,borderRadius:r/2,margin:s.baseUnit/2})},Xh=function(e,n){var i=e.theme,s=i.borderRadius,r=i.colors,o=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:s/2,color:r.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Zh=function(e,n){var i=e.theme,s=i.spacing,r=i.borderRadius,o=i.colors,c=e.isFocused;return O({alignItems:"center",display:"flex"},n?{}:{borderRadius:r/2,backgroundColor:c?o.dangerLight:void 0,paddingLeft:s.baseUnit,paddingRight:s.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},Ma=function(e){var n=e.children,i=e.innerProps;return R("div",i,n)},Jh=Ma,ef=Ma;function tf(t){var e=t.children,n=t.innerProps;return R("div",P({role:"button"},n),e||R(Ss,{size:14}))}var nf=function(e){var n=e.children,i=e.components,s=e.data,r=e.innerProps,o=e.isDisabled,c=e.removeProps,l=e.selectProps,u=i.Container,d=i.Label,h=i.Remove;return R(u,{data:s,innerProps:O(O({},Y(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),r),selectProps:l},R(d,{data:s,innerProps:O({},Y(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},n),R(h,{data:s,innerProps:O(O({},Y(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},c),selectProps:l}))},sf=nf,rf=function(e,n){var i=e.isDisabled,s=e.isFocused,r=e.isSelected,o=e.theme,c=o.spacing,l=o.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:r?l.primary:s?l.primary25:"transparent",color:i?l.neutral20:r?l.neutral0:"inherit",padding:"".concat(c.baseUnit*2,"px ").concat(c.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:r?l.primary:l.primary50}})},of=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,r=e.isSelected,o=e.innerRef,c=e.innerProps;return R("div",P({},Y(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":s,"option--is-selected":r}),{ref:o,"aria-disabled":i},c),n)},af=of,lf=function(e,n){var i=e.theme,s=i.spacing,r=i.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:r.neutral50,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},cf=function(e){var n=e.children,i=e.innerProps;return R("div",P({},Y(e,"placeholder",{placeholder:!0}),i),n)},uf=cf,df=function(e,n){var i=e.isDisabled,s=e.theme,r=s.spacing,o=s.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?o.neutral40:o.neutral80,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2})},hf=function(e){var n=e.children,i=e.isDisabled,s=e.innerProps;return R("div",P({},Y(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),s),n)},ff=hf,pf={ClearIndicator:Oh,Control:Ah,DropdownIndicator:Th,DownChevron:Ra,CrossIcon:Ss,Group:$h,GroupHeading:Uh,IndicatorsContainer:Ch,IndicatorSeparator:Mh,Input:Kh,LoadingIndicator:Nh,Menu:lh,MenuList:uh,MenuPortal:mh,LoadingMessage:ph,NoOptionsMessage:fh,MultiValue:sf,MultiValueContainer:Jh,MultiValueLabel:ef,MultiValueRemove:tf,Option:af,Placeholder:uf,SelectContainer:_h,SingleValue:ff,ValueContainer:yh},gf=function(e){return O(O({},pf),e.components)},Br=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function mf(t,e){return!!(t===e||Br(t)&&Br(e))}function vf(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!mf(t[n],e[n]))return!1;return!0}function _f(t,e){e===void 0&&(e=vf);var n=null;function i(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];if(n&&n.lastThis===this&&e(s,n.lastArgs))return n.lastResult;var o=t.apply(this,s);return n={lastResult:o,lastArgs:s,lastThis:this},o}return i.clear=function(){n=null},i}var xf={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},yf=function(e){return R("span",P({css:xf},e))},zr=yf,bf={guidance:function(e){var n=e.isSearchable,i=e.isMulti,s=e.tabSelectsValue,r=e.context,o=e.isInitialFocus;switch(r){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(s?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,i=e.label,s=i===void 0?"":i,r=e.labels,o=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(s,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(r.length>1?"s":""," ").concat(r.join(","),", selected.");case"select-option":return o?"option ".concat(s," is disabled. Select another option."):"option ".concat(s,", selected.");default:return""}},onFocus:function(e){var n=e.context,i=e.focused,s=e.options,r=e.label,o=r===void 0?"":r,c=e.selectValue,l=e.isDisabled,u=e.isSelected,d=e.isAppleDevice,h=function(m,v){return m&&m.length?"".concat(m.indexOf(v)+1," of ").concat(m.length):""};if(n==="value"&&c)return"value ".concat(o," focused, ").concat(h(c,i),".");if(n==="menu"&&d){var f=l?" disabled":"",p="".concat(u?" selected":"").concat(f);return"".concat(o).concat(p,", ").concat(h(s,i),".")}return""},onFilter:function(e){var n=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},Cf=function(e){var n=e.ariaSelection,i=e.focusedOption,s=e.focusedValue,r=e.focusableOptions,o=e.isFocused,c=e.selectValue,l=e.selectProps,u=e.id,d=e.isAppleDevice,h=l.ariaLiveMessages,f=l.getOptionLabel,p=l.inputValue,g=l.isMulti,m=l.isOptionDisabled,v=l.isSearchable,x=l.menuIsOpen,S=l.options,y=l.screenReaderStatus,w=l.tabSelectsValue,E=l.isLoading,T=l["aria-label"],I=l["aria-live"],k=_.useMemo(function(){return O(O({},bf),h||{})},[h]),$=_.useMemo(function(){var z="";if(n&&k.onChange){var K=n.option,ce=n.options,pe=n.removedValue,q=n.removedValues,ee=n.value,st=function(Ne){return Array.isArray(Ne)?null:Ne},te=pe||K||st(ee),xe=te?f(te):"",je=ce||q||void 0,Ue=je?je.map(f):[],Se=O({isDisabled:te&&m(te,c),label:xe,labels:Ue},n);z=k.onChange(Se)}return z},[n,k,m,c,f]),Q=_.useMemo(function(){var z="",K=i||s,ce=!!(i&&c&&c.includes(i));if(K&&k.onFocus){var pe={focused:K,label:f(K),isDisabled:m(K,c),isSelected:ce,options:r,context:K===i?"menu":"value",selectValue:c,isAppleDevice:d};z=k.onFocus(pe)}return z},[i,s,f,m,k,r,c,d]),ae=_.useMemo(function(){var z="";if(x&&S.length&&!E&&k.onFilter){var K=y({count:r.length});z=k.onFilter({inputValue:p,resultsMessage:K})}return z},[r,p,x,k,S,y,E]),J=(n==null?void 0:n.action)==="initial-input-focus",D=_.useMemo(function(){var z="";if(k.guidance){var K=s?"value":x?"menu":"input";z=k.guidance({"aria-label":T,context:K,isDisabled:i&&m(i,c),isMulti:g,isSearchable:v,tabSelectsValue:w,isInitialFocus:J})}return z},[T,i,s,g,m,v,x,k,c,w,J]),we=R(_.Fragment,null,R("span",{id:"aria-selection"},$),R("span",{id:"aria-focused"},Q),R("span",{id:"aria-results"},ae),R("span",{id:"aria-guidance"},D));return R(_.Fragment,null,R(zr,{id:u},J&&we),R(zr,{"aria-live":I,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!J&&we))},wf=Cf,Ki=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Sf=new RegExp("["+Ki.map(function(t){return t.letters}).join("")+"]","g"),ka={};for(var Ri=0;Ri<Ki.length;Ri++)for(var Oi=Ki[Ri],Pi=0;Pi<Oi.letters.length;Pi++)ka[Oi.letters[Pi]]=Oi.base;var ja=function(e){return e.replace(Sf,function(n){return ka[n]})},If=_f(ja),qr=function(e){return e.replace(/^\s+|\s+$/g,"")},Ef=function(e){return"".concat(e.label," ").concat(e.value)},Tf=function(e){return function(n,i){if(n.data.__isNew__)return!0;var s=O({ignoreCase:!0,ignoreAccents:!0,stringify:Ef,trim:!0,matchFrom:"any"},e),r=s.ignoreCase,o=s.ignoreAccents,c=s.stringify,l=s.trim,u=s.matchFrom,d=l?qr(i):i,h=l?qr(c(n)):c(n);return r&&(d=d.toLowerCase(),h=h.toLowerCase()),o&&(d=If(d),h=ja(h)),u==="start"?h.substr(0,d.length)===d:h.indexOf(d)>-1}},Rf=["innerRef"];function Of(t){var e=t.innerRef,n=We(t,Rf),i=eh(n,"onExited","in","enter","exit","appear");return R("input",P({ref:e},i,{css:ys({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Pf=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Mf(t){var e=t.isEnabled,n=t.onBottomArrive,i=t.onBottomLeave,s=t.onTopArrive,r=t.onTopLeave,o=_.useRef(!1),c=_.useRef(!1),l=_.useRef(0),u=_.useRef(null),d=_.useCallback(function(v,x){if(u.current!==null){var S=u.current,y=S.scrollTop,w=S.scrollHeight,E=S.clientHeight,T=u.current,I=x>0,k=w-E-y,$=!1;k>x&&o.current&&(i&&i(v),o.current=!1),I&&c.current&&(r&&r(v),c.current=!1),I&&x>k?(n&&!o.current&&n(v),T.scrollTop=w,$=!0,o.current=!0):!I&&-x>y&&(s&&!c.current&&s(v),T.scrollTop=0,$=!0,c.current=!0),$&&Pf(v)}},[n,i,s,r]),h=_.useCallback(function(v){d(v,v.deltaY)},[d]),f=_.useCallback(function(v){l.current=v.changedTouches[0].clientY},[]),p=_.useCallback(function(v){var x=l.current-v.changedTouches[0].clientY;d(v,x)},[d]),g=_.useCallback(function(v){if(v){var x=Xd?{passive:!1}:!1;v.addEventListener("wheel",h,x),v.addEventListener("touchstart",f,x),v.addEventListener("touchmove",p,x)}},[p,f,h]),m=_.useCallback(function(v){v&&(v.removeEventListener("wheel",h,!1),v.removeEventListener("touchstart",f,!1),v.removeEventListener("touchmove",p,!1))},[p,f,h]);return _.useEffect(function(){if(e){var v=u.current;return g(v),function(){m(v)}}},[e,g,m]),function(v){u.current=v}}var Gr=["boxSizing","height","overflow","paddingRight","position"],Yr={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Kr(t){t.preventDefault()}function Qr(t){t.stopPropagation()}function Xr(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function Zr(){return"ontouchstart"in window||navigator.maxTouchPoints}var Jr=!!(typeof window<"u"&&window.document&&window.document.createElement),kt=0,ot={capture:!1,passive:!1};function kf(t){var e=t.isEnabled,n=t.accountForScrollbars,i=n===void 0?!0:n,s=_.useRef({}),r=_.useRef(null),o=_.useCallback(function(l){if(Jr){var u=document.body,d=u&&u.style;if(i&&Gr.forEach(function(g){var m=d&&d[g];s.current[g]=m}),i&&kt<1){var h=parseInt(s.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,p=window.innerWidth-f+h||0;Object.keys(Yr).forEach(function(g){var m=Yr[g];d&&(d[g]=m)}),d&&(d.paddingRight="".concat(p,"px"))}u&&Zr()&&(u.addEventListener("touchmove",Kr,ot),l&&(l.addEventListener("touchstart",Xr,ot),l.addEventListener("touchmove",Qr,ot))),kt+=1}},[i]),c=_.useCallback(function(l){if(Jr){var u=document.body,d=u&&u.style;kt=Math.max(kt-1,0),i&&kt<1&&Gr.forEach(function(h){var f=s.current[h];d&&(d[h]=f)}),u&&Zr()&&(u.removeEventListener("touchmove",Kr,ot),l&&(l.removeEventListener("touchstart",Xr,ot),l.removeEventListener("touchmove",Qr,ot)))}},[i]);return _.useEffect(function(){if(e){var l=r.current;return o(l),function(){c(l)}}},[e,o,c]),function(l){r.current=l}}var jf=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},Nf={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Lf(t){var e=t.children,n=t.lockEnabled,i=t.captureEnabled,s=i===void 0?!0:i,r=t.onBottomArrive,o=t.onBottomLeave,c=t.onTopArrive,l=t.onTopLeave,u=Mf({isEnabled:s,onBottomArrive:r,onBottomLeave:o,onTopArrive:c,onTopLeave:l}),d=kf({isEnabled:n}),h=function(p){u(p),d(p)};return R(_.Fragment,null,n&&R("div",{onClick:jf,css:Nf}),e(h))}var Df={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Af=function(e){var n=e.name,i=e.onFocus;return R("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:Df,value:"",onChange:function(){}})},Ff=Af;function Is(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Vf(){return Is(/^iPhone/i)}function Na(){return Is(/^Mac/i)}function Hf(){return Is(/^iPad/i)||Na()&&navigator.maxTouchPoints>1}function Wf(){return Vf()||Hf()}function Uf(){return Na()||Wf()}var $f=function(e){return e.label},Bf=function(e){return e.label},zf=function(e){return e.value},qf=function(e){return!!e.isDisabled},Gf={clearIndicator:Rh,container:vh,control:Lh,dropdownIndicator:Eh,group:Vh,groupHeading:Wh,indicatorsContainer:bh,indicatorSeparator:Ph,input:zh,loadingIndicator:jh,loadingMessage:hh,menu:rh,menuList:ch,menuPortal:gh,multiValue:Qh,multiValueLabel:Xh,multiValueRemove:Zh,noOptionsMessage:dh,option:rf,placeholder:lf,singleValue:df,valueContainer:xh},Yf={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Kf=4,La=4,Qf=38,Xf=La*2,Zf={baseUnit:La,controlHeight:Qf,menuGutter:Xf},Mi={borderRadius:Kf,colors:Yf,spacing:Zf},Jf={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ur(),captureMenuScroll:!Ur(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Tf(),formatGroupLabel:$f,getOptionLabel:Bf,getOptionValue:zf,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:qf,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Kd(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function eo(t,e,n,i){var s=Fa(t,e,n),r=Va(t,e,n),o=Aa(t,e),c=Hn(t,e);return{type:"option",data:e,isDisabled:s,isSelected:r,label:o,value:c,index:i}}function On(t,e){return t.options.map(function(n,i){if("options"in n){var s=n.options.map(function(o,c){return eo(t,o,e,c)}).filter(function(o){return no(t,o)});return s.length>0?{type:"group",data:n,options:s,index:i}:void 0}var r=eo(t,n,e,i);return no(t,r)?r:void 0}).filter(Zd)}function Da(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,hs(n.options.map(function(i){return i.data}))):e.push(n.data),e},[])}function to(t,e){return t.reduce(function(n,i){return i.type==="group"?n.push.apply(n,hs(i.options.map(function(s){return{data:s.data,id:"".concat(e,"-").concat(i.index,"-").concat(s.index)}}))):n.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),n},[])}function ep(t,e){return Da(On(t,e))}function no(t,e){var n=t.inputValue,i=n===void 0?"":n,s=e.data,r=e.isSelected,o=e.label,c=e.value;return(!Wa(t)||!r)&&Ha(t,{label:o,value:c,data:s},i)}function tp(t,e){var n=t.focusedValue,i=t.selectValue,s=i.indexOf(n);if(s>-1){var r=e.indexOf(n);if(r>-1)return n;if(s<e.length)return e[s]}return null}function np(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var ki=function(e,n){var i,s=(i=e.find(function(r){return r.data===n}))===null||i===void 0?void 0:i.id;return s||null},Aa=function(e,n){return e.getOptionLabel(n)},Hn=function(e,n){return e.getOptionValue(n)};function Fa(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function Va(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var i=Hn(t,e);return n.some(function(s){return Hn(t,s)===i})}function Ha(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var Wa=function(e){var n=e.hideSelectedOptions,i=e.isMulti;return n===void 0?i:n},ip=1,Ua=function(t){bu(n,t);var e=Su(n);function n(i){var s;if(xu(this,n),s=e.call(this,i),s.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},s.blockOptionHover=!1,s.isComposing=!1,s.commonProps=void 0,s.initialTouchX=0,s.initialTouchY=0,s.openAfterFocus=!1,s.scrollToFocusedOptionOnUpdate=!1,s.userIsDragging=void 0,s.isAppleDevice=Uf(),s.controlRef=null,s.getControlRef=function(l){s.controlRef=l},s.focusedOptionRef=null,s.getFocusedOptionRef=function(l){s.focusedOptionRef=l},s.menuListRef=null,s.getMenuListRef=function(l){s.menuListRef=l},s.inputRef=null,s.getInputRef=function(l){s.inputRef=l},s.focus=s.focusInput,s.blur=s.blurInput,s.onChange=function(l,u){var d=s.props,h=d.onChange,f=d.name;u.name=f,s.ariaOnChange(l,u),h(l,u)},s.setValue=function(l,u,d){var h=s.props,f=h.closeMenuOnSelect,p=h.isMulti,g=h.inputValue;s.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(s.setState({inputIsHiddenAfterUpdate:!p}),s.onMenuClose()),s.setState({clearFocusValueOnUpdate:!0}),s.onChange(l,{action:u,option:d})},s.selectOption=function(l){var u=s.props,d=u.blurInputOnSelect,h=u.isMulti,f=u.name,p=s.state.selectValue,g=h&&s.isOptionSelected(l,p),m=s.isOptionDisabled(l,p);if(g){var v=s.getOptionValue(l);s.setValue(p.filter(function(x){return s.getOptionValue(x)!==v}),"deselect-option",l)}else if(!m)h?s.setValue([].concat(hs(p),[l]),"select-option",l):s.setValue(l,"select-option");else{s.ariaOnChange(l,{action:"select-option",option:l,name:f});return}d&&s.blurInput()},s.removeValue=function(l){var u=s.props.isMulti,d=s.state.selectValue,h=s.getOptionValue(l),f=d.filter(function(g){return s.getOptionValue(g)!==h}),p=wn(u,f,f[0]||null);s.onChange(p,{action:"remove-value",removedValue:l}),s.focusInput()},s.clearValue=function(){var l=s.state.selectValue;s.onChange(wn(s.props.isMulti,[],null),{action:"clear",removedValues:l})},s.popValue=function(){var l=s.props.isMulti,u=s.state.selectValue,d=u[u.length-1],h=u.slice(0,u.length-1),f=wn(l,h,h[0]||null);s.onChange(f,{action:"pop-value",removedValue:d})},s.getFocusedOptionId=function(l){return ki(s.state.focusableOptionsWithIds,l)},s.getFocusableOptionsWithIds=function(){return to(On(s.props,s.state.selectValue),s.getElementId("option"))},s.getValue=function(){return s.state.selectValue},s.cx=function(){for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];return Bd.apply(void 0,[s.props.classNamePrefix].concat(u))},s.getOptionLabel=function(l){return Aa(s.props,l)},s.getOptionValue=function(l){return Hn(s.props,l)},s.getStyles=function(l,u){var d=s.props.unstyled,h=Gf[l](u,d);h.boxSizing="border-box";var f=s.props.styles[l];return f?f(h,u):h},s.getClassNames=function(l,u){var d,h;return(d=(h=s.props.classNames)[l])===null||d===void 0?void 0:d.call(h,u)},s.getElementId=function(l){return"".concat(s.state.instancePrefix,"-").concat(l)},s.getComponents=function(){return gf(s.props)},s.buildCategorizedOptions=function(){return On(s.props,s.state.selectValue)},s.getCategorizedOptions=function(){return s.props.menuIsOpen?s.buildCategorizedOptions():[]},s.buildFocusableOptions=function(){return Da(s.buildCategorizedOptions())},s.getFocusableOptions=function(){return s.props.menuIsOpen?s.buildFocusableOptions():[]},s.ariaOnChange=function(l,u){s.setState({ariaSelection:O({value:l},u)})},s.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),s.focusInput())},s.onMenuMouseMove=function(l){s.blockOptionHover=!1},s.onControlMouseDown=function(l){if(!l.defaultPrevented){var u=s.props.openMenuOnClick;s.state.isFocused?s.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&s.onMenuClose():u&&s.openMenu("first"):(u&&(s.openAfterFocus=!0),s.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},s.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!s.props.isDisabled){var u=s.props,d=u.isMulti,h=u.menuIsOpen;s.focusInput(),h?(s.setState({inputIsHiddenAfterUpdate:!d}),s.onMenuClose()):s.openMenu("first"),l.preventDefault()}},s.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(s.clearValue(),l.preventDefault(),s.openAfterFocus=!1,l.type==="touchend"?s.focusInput():setTimeout(function(){return s.focusInput()}))},s.onScroll=function(l){typeof s.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&gi(l.target)&&s.props.onMenuClose():typeof s.props.closeMenuOnScroll=="function"&&s.props.closeMenuOnScroll(l)&&s.props.onMenuClose()},s.onCompositionStart=function(){s.isComposing=!0},s.onCompositionEnd=function(){s.isComposing=!1},s.onTouchStart=function(l){var u=l.touches,d=u&&u.item(0);d&&(s.initialTouchX=d.clientX,s.initialTouchY=d.clientY,s.userIsDragging=!1)},s.onTouchMove=function(l){var u=l.touches,d=u&&u.item(0);if(d){var h=Math.abs(d.clientX-s.initialTouchX),f=Math.abs(d.clientY-s.initialTouchY),p=5;s.userIsDragging=h>p||f>p}},s.onTouchEnd=function(l){s.userIsDragging||(s.controlRef&&!s.controlRef.contains(l.target)&&s.menuListRef&&!s.menuListRef.contains(l.target)&&s.blurInput(),s.initialTouchX=0,s.initialTouchY=0)},s.onControlTouchEnd=function(l){s.userIsDragging||s.onControlMouseDown(l)},s.onClearIndicatorTouchEnd=function(l){s.userIsDragging||s.onClearIndicatorMouseDown(l)},s.onDropdownIndicatorTouchEnd=function(l){s.userIsDragging||s.onDropdownIndicatorMouseDown(l)},s.handleInputChange=function(l){var u=s.props.inputValue,d=l.currentTarget.value;s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange(d,{action:"input-change",prevInputValue:u}),s.props.menuIsOpen||s.onMenuOpen()},s.onInputFocus=function(l){s.props.onFocus&&s.props.onFocus(l),s.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(s.openAfterFocus||s.props.openMenuOnFocus)&&s.openMenu("first"),s.openAfterFocus=!1},s.onInputBlur=function(l){var u=s.props.inputValue;if(s.menuListRef&&s.menuListRef.contains(document.activeElement)){s.inputRef.focus();return}s.props.onBlur&&s.props.onBlur(l),s.onInputChange("",{action:"input-blur",prevInputValue:u}),s.onMenuClose(),s.setState({focusedValue:null,isFocused:!1})},s.onOptionHover=function(l){if(!(s.blockOptionHover||s.state.focusedOption===l)){var u=s.getFocusableOptions(),d=u.indexOf(l);s.setState({focusedOption:l,focusedOptionId:d>-1?s.getFocusedOptionId(l):null})}},s.shouldHideSelectedOptions=function(){return Wa(s.props)},s.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),s.focus()},s.onKeyDown=function(l){var u=s.props,d=u.isMulti,h=u.backspaceRemovesValue,f=u.escapeClearsValue,p=u.inputValue,g=u.isClearable,m=u.isDisabled,v=u.menuIsOpen,x=u.onKeyDown,S=u.tabSelectsValue,y=u.openMenuOnFocus,w=s.state,E=w.focusedOption,T=w.focusedValue,I=w.selectValue;if(!m&&!(typeof x=="function"&&(x(l),l.defaultPrevented))){switch(s.blockOptionHover=!0,l.key){case"ArrowLeft":if(!d||p)return;s.focusValue("previous");break;case"ArrowRight":if(!d||p)return;s.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(T)s.removeValue(T);else{if(!h)return;d?s.popValue():g&&s.clearValue()}break;case"Tab":if(s.isComposing||l.shiftKey||!v||!S||!E||y&&s.isOptionSelected(E,I))return;s.selectOption(E);break;case"Enter":if(l.keyCode===229)break;if(v){if(!E||s.isComposing)return;s.selectOption(E);break}return;case"Escape":v?(s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange("",{action:"menu-close",prevInputValue:p}),s.onMenuClose()):g&&f&&s.clearValue();break;case" ":if(p)return;if(!v){s.openMenu("first");break}if(!E)return;s.selectOption(E);break;case"ArrowUp":v?s.focusOption("up"):s.openMenu("last");break;case"ArrowDown":v?s.focusOption("down"):s.openMenu("first");break;case"PageUp":if(!v)return;s.focusOption("pageup");break;case"PageDown":if(!v)return;s.focusOption("pagedown");break;case"Home":if(!v)return;s.focusOption("first");break;case"End":if(!v)return;s.focusOption("last");break;default:return}l.preventDefault()}},s.state.instancePrefix="react-select-"+(s.props.instanceId||++ip),s.state.selectValue=Hr(i.value),i.menuIsOpen&&s.state.selectValue.length){var r=s.getFocusableOptionsWithIds(),o=s.buildFocusableOptions(),c=o.indexOf(s.state.selectValue[0]);s.state.focusableOptionsWithIds=r,s.state.focusedOption=o[c],s.state.focusedOptionId=ki(r,o[c])}return s}return yu(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Wr(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(s){var r=this.props,o=r.isDisabled,c=r.menuIsOpen,l=this.state.isFocused;(l&&!o&&s.isDisabled||l&&c&&!s.menuIsOpen)&&this.focusInput(),l&&o&&!s.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!o&&s.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Wr(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(s,r){this.props.onInputChange(s,r)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(s){var r=this,o=this.state,c=o.selectValue,l=o.isFocused,u=this.buildFocusableOptions(),d=s==="first"?0:u.length-1;if(!this.props.isMulti){var h=u.indexOf(c[0]);h>-1&&(d=h)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return r.onMenuOpen()})}},{key:"focusValue",value:function(s){var r=this.state,o=r.selectValue,c=r.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=o.indexOf(c);c||(l=-1);var u=o.length-1,d=-1;if(o.length){switch(s){case"previous":l===0?d=0:l===-1?d=u:d=l-1;break;case"next":l>-1&&l<u&&(d=l+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:o[d]})}}}},{key:"focusOption",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",r=this.props.pageSize,o=this.state.focusedOption,c=this.getFocusableOptions();if(c.length){var l=0,u=c.indexOf(o);o||(u=-1),s==="up"?l=u>0?u-1:c.length-1:s==="down"?l=(u+1)%c.length:s==="pageup"?(l=u-r,l<0&&(l=0)):s==="pagedown"?(l=u+r,l>c.length-1&&(l=c.length-1)):s==="last"&&(l=c.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:c[l],focusedValue:null,focusedOptionId:this.getFocusedOptionId(c[l])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Mi):O(O({},Mi),this.props.theme):Mi}},{key:"getCommonProps",value:function(){var s=this.clearValue,r=this.cx,o=this.getStyles,c=this.getClassNames,l=this.getValue,u=this.selectOption,d=this.setValue,h=this.props,f=h.isMulti,p=h.isRtl,g=h.options,m=this.hasValue();return{clearValue:s,cx:r,getStyles:o,getClassNames:c,getValue:l,hasValue:m,isMulti:f,isRtl:p,options:g,selectOption:u,selectProps:h,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var s=this.state.selectValue;return s.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var s=this.props,r=s.isClearable,o=s.isMulti;return r===void 0?o:r}},{key:"isOptionDisabled",value:function(s,r){return Fa(this.props,s,r)}},{key:"isOptionSelected",value:function(s,r){return Va(this.props,s,r)}},{key:"filterOption",value:function(s,r){return Ha(this.props,s,r)}},{key:"formatOptionLabel",value:function(s,r){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,c=this.state.selectValue;return this.props.formatOptionLabel(s,{context:r,inputValue:o,selectValue:c})}else return this.getOptionLabel(s)}},{key:"formatGroupLabel",value:function(s){return this.props.formatGroupLabel(s)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var s=this.props,r=s.isDisabled,o=s.isSearchable,c=s.inputId,l=s.inputValue,u=s.tabIndex,d=s.form,h=s.menuIsOpen,f=s.required,p=this.getComponents(),g=p.Input,m=this.state,v=m.inputIsHidden,x=m.ariaSelection,S=this.commonProps,y=c||this.getElementId("input"),w=O(O(O({"aria-autocomplete":"list","aria-expanded":h,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},h&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?_.createElement(g,P({},S,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:r,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:l},w)):_.createElement(Of,P({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Fn,onFocus:this.onInputFocus,disabled:r,tabIndex:u,inputMode:"none",form:d,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var s=this,r=this.getComponents(),o=r.MultiValue,c=r.MultiValueContainer,l=r.MultiValueLabel,u=r.MultiValueRemove,d=r.SingleValue,h=r.Placeholder,f=this.commonProps,p=this.props,g=p.controlShouldRenderValue,m=p.isDisabled,v=p.isMulti,x=p.inputValue,S=p.placeholder,y=this.state,w=y.selectValue,E=y.focusedValue,T=y.isFocused;if(!this.hasValue()||!g)return x?null:_.createElement(h,P({},f,{key:"placeholder",isDisabled:m,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),S);if(v)return w.map(function(k,$){var Q=k===E,ae="".concat(s.getOptionLabel(k),"-").concat(s.getOptionValue(k));return _.createElement(o,P({},f,{components:{Container:c,Label:l,Remove:u},isFocused:Q,isDisabled:m,key:ae,index:$,removeProps:{onClick:function(){return s.removeValue(k)},onTouchEnd:function(){return s.removeValue(k)},onMouseDown:function(D){D.preventDefault()}},data:k}),s.formatOptionLabel(k,"value"))});if(x)return null;var I=w[0];return _.createElement(d,P({},f,{data:I,isDisabled:m}),this.formatOptionLabel(I,"value"))}},{key:"renderClearIndicator",value:function(){var s=this.getComponents(),r=s.ClearIndicator,o=this.commonProps,c=this.props,l=c.isDisabled,u=c.isLoading,d=this.state.isFocused;if(!this.isClearable()||!r||l||!this.hasValue()||u)return null;var h={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:h,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var s=this.getComponents(),r=s.LoadingIndicator,o=this.commonProps,c=this.props,l=c.isDisabled,u=c.isLoading,d=this.state.isFocused;if(!r||!u)return null;var h={"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:h,isDisabled:l,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var s=this.getComponents(),r=s.DropdownIndicator,o=s.IndicatorSeparator;if(!r||!o)return null;var c=this.commonProps,l=this.props.isDisabled,u=this.state.isFocused;return _.createElement(o,P({},c,{isDisabled:l,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var s=this.getComponents(),r=s.DropdownIndicator;if(!r)return null;var o=this.commonProps,c=this.props.isDisabled,l=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return _.createElement(r,P({},o,{innerProps:u,isDisabled:c,isFocused:l}))}},{key:"renderMenu",value:function(){var s=this,r=this.getComponents(),o=r.Group,c=r.GroupHeading,l=r.Menu,u=r.MenuList,d=r.MenuPortal,h=r.LoadingMessage,f=r.NoOptionsMessage,p=r.Option,g=this.commonProps,m=this.state.focusedOption,v=this.props,x=v.captureMenuScroll,S=v.inputValue,y=v.isLoading,w=v.loadingMessage,E=v.minMenuHeight,T=v.maxMenuHeight,I=v.menuIsOpen,k=v.menuPlacement,$=v.menuPosition,Q=v.menuPortalTarget,ae=v.menuShouldBlockScroll,J=v.menuShouldScrollIntoView,D=v.noOptionsMessage,we=v.onMenuScrollToTop,z=v.onMenuScrollToBottom;if(!I)return null;var K=function(xe,je){var Ue=xe.type,Se=xe.data,$e=xe.isDisabled,Ne=xe.isSelected,mn=xe.label,mc=xe.value,gr=m===Se,mr=$e?void 0:function(){return s.onOptionHover(Se)},vc=$e?void 0:function(){return s.selectOption(Se)},vr="".concat(s.getElementId("option"),"-").concat(je),_c={id:vr,onClick:vc,onMouseMove:mr,onMouseOver:mr,tabIndex:-1,role:"option","aria-selected":s.isAppleDevice?void 0:Ne};return _.createElement(p,P({},g,{innerProps:_c,data:Se,isDisabled:$e,isSelected:Ne,key:vr,label:mn,type:Ue,value:mc,isFocused:gr,innerRef:gr?s.getFocusedOptionRef:void 0}),s.formatOptionLabel(xe.data,"menu"))},ce;if(this.hasOptions())ce=this.getCategorizedOptions().map(function(te){if(te.type==="group"){var xe=te.data,je=te.options,Ue=te.index,Se="".concat(s.getElementId("group"),"-").concat(Ue),$e="".concat(Se,"-heading");return _.createElement(o,P({},g,{key:Se,data:xe,options:je,Heading:c,headingProps:{id:$e,data:te.data},label:s.formatGroupLabel(te.data)}),te.options.map(function(Ne){return K(Ne,"".concat(Ue,"-").concat(Ne.index))}))}else if(te.type==="option")return K(te,"".concat(te.index))});else if(y){var pe=w({inputValue:S});if(pe===null)return null;ce=_.createElement(h,g,pe)}else{var q=D({inputValue:S});if(q===null)return null;ce=_.createElement(f,g,q)}var ee={minMenuHeight:E,maxMenuHeight:T,menuPlacement:k,menuPosition:$,menuShouldScrollIntoView:J},st=_.createElement(oh,P({},g,ee),function(te){var xe=te.ref,je=te.placerProps,Ue=je.placement,Se=je.maxHeight;return _.createElement(l,P({},g,ee,{innerRef:xe,innerProps:{onMouseDown:s.onMenuMouseDown,onMouseMove:s.onMenuMouseMove},isLoading:y,placement:Ue}),_.createElement(Lf,{captureEnabled:x,onTopArrive:we,onBottomArrive:z,lockEnabled:ae},function($e){return _.createElement(u,P({},g,{innerRef:function(mn){s.getMenuListRef(mn),$e(mn)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:s.getElementId("listbox")},isLoading:y,maxHeight:Se,focusedOption:m}),ce)}))});return Q||$==="fixed"?_.createElement(d,P({},g,{appendTo:Q,controlElement:this.controlRef,menuPlacement:k,menuPosition:$}),st):st}},{key:"renderFormField",value:function(){var s=this,r=this.props,o=r.delimiter,c=r.isDisabled,l=r.isMulti,u=r.name,d=r.required,h=this.state.selectValue;if(d&&!this.hasValue()&&!c)return _.createElement(Ff,{name:u,onFocus:this.onValueInputFocus});if(!(!u||c))if(l)if(o){var f=h.map(function(m){return s.getOptionValue(m)}).join(o);return _.createElement("input",{name:u,type:"hidden",value:f})}else{var p=h.length>0?h.map(function(m,v){return _.createElement("input",{key:"i-".concat(v),name:u,type:"hidden",value:s.getOptionValue(m)})}):_.createElement("input",{name:u,type:"hidden",value:""});return _.createElement("div",null,p)}else{var g=h[0]?this.getOptionValue(h[0]):"";return _.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var s=this.commonProps,r=this.state,o=r.ariaSelection,c=r.focusedOption,l=r.focusedValue,u=r.isFocused,d=r.selectValue,h=this.getFocusableOptions();return _.createElement(wf,P({},s,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:c,focusedValue:l,isFocused:u,selectValue:d,focusableOptions:h,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var s=this.getComponents(),r=s.Control,o=s.IndicatorsContainer,c=s.SelectContainer,l=s.ValueContainer,u=this.props,d=u.className,h=u.id,f=u.isDisabled,p=u.menuIsOpen,g=this.state.isFocused,m=this.commonProps=this.getCommonProps();return _.createElement(c,P({},m,{className:d,innerProps:{id:h,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),_.createElement(r,P({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:p}),_.createElement(l,P({},m,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),_.createElement(o,P({},m,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(s,r){var o=r.prevProps,c=r.clearFocusValueOnUpdate,l=r.inputIsHiddenAfterUpdate,u=r.ariaSelection,d=r.isFocused,h=r.prevWasFocused,f=r.instancePrefix,p=s.options,g=s.value,m=s.menuIsOpen,v=s.inputValue,x=s.isMulti,S=Hr(g),y={};if(o&&(g!==o.value||p!==o.options||m!==o.menuIsOpen||v!==o.inputValue)){var w=m?ep(s,S):[],E=m?to(On(s,S),"".concat(f,"-option")):[],T=c?tp(r,S):null,I=np(r,w),k=ki(E,I);y={selectValue:S,focusedOption:I,focusedOptionId:k,focusableOptionsWithIds:E,focusedValue:T,clearFocusValueOnUpdate:!1}}var $=l!=null&&s!==o?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},Q=u,ae=d&&h;return d&&!ae&&(Q={value:wn(x,S,S[0]||null),options:S,action:"initial-input-focus"},ae=!h),(u==null?void 0:u.action)==="initial-input-focus"&&(Q=null),O(O(O({},y),$),{},{prevProps:s,ariaSelection:Q,prevWasFocused:ae})}}]),n}(_.Component);Ua.defaultProps=Jf;var sp=_.forwardRef(function(t,e){var n=_u(t);return _.createElement(Ua,P({ref:e},n))}),ji=sp;const rp=C.div`
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
`,Ni=C.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`,op=C.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 220px;
  }
`,ap=C.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 200px;
  }
`,lp=C.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 125px;
  }
`,cp=C.div`
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
`,io=C.button`
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
`,up=C.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 20%;
`,Li={padding:"0",indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(t,e)=>({...t,color:e.isFocused?"#F4C550":"#121417",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)",":hover":{color:e.isFocused?"#F4C550":"#121417"},":active":{transform:"rotate(0deg)"}}),control:(t,e)=>({...t,fontSize:"16px",paddingLeft:"18px",border:"none",borderRadius:"14px",cursor:"pointer",overflowY:"hidden",width:"100%",height:"52px",boxShadow:e.isFocused?"0 0 0 1px #FBE9BA":"none","&:hover":{boxShadow:"0 0 0 1px #FBE9BA"}}),menu:t=>({...t,border:"none",borderRadius:"12px",width:"100%",boxShadow:"0 20px 69px 0 rgba(0, 0, 0, 0.07)","&::-webkit-scrollbar":{display:"none"}}),menuList:t=>({...t,overflowY:"auto",paddingTop:"0px"}),option:(t,e)=>({...t,padding:"8px",backgroundColor:"transparent",color:e.isFocused?"#121417":e.isSelected?"#000 bolt":"rgba(18, 20, 23, 0.2)",cursor:"pointer",overflowY:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-start",fontWeight:"500",lineHeight:"125%",fontSize:"18px"}),singleValue:t=>({...t,fontWeight:"bold"})},dp=({data:t,setTeachersFilter:e})=>{const[n,i]=_.useState(null),[s,r]=_.useState(null),[o,c]=_.useState(null),[l,u]=_.useState(null);_.useEffect(()=>{let y=t;s&&(y=y.filter(w=>w.languages.includes(s))),l&&(y=y.filter(w=>w.levels.includes(l))),o&&(y=y.filter(w=>w.price_per_hour===o)),i(y)},[t,s,l,o,e]);const d=n?n.reduce((y,w)=>(w.languages.forEach(E=>{y.includes(E)||y.push(E)}),y),[]):[],h=n?n.reduce((y,w)=>(y.includes(w.price_per_hour)||y.push(w.price_per_hour),y),[]):[],f=n?n.reduce((y,w)=>(w.levels.forEach(E=>{y.includes(E)||y.push(E)}),y),[]):[],p=[{value:"All",label:"All"},...d.map(y=>({value:y,label:y}))],g=[{value:"All",label:"All"},...h.map(y=>({value:y,label:y==="All"?"All":`${y} $`}))],m=[{value:"All",label:"All"},...f.map(y=>({value:y,label:y}))],v=y=>{let w=y?y.value:null;if(w==="All")r(null),c(null),u(null),e(t);else{r(w);const E=n.filter(T=>T.languages.includes(w));e(E)}},x=y=>{const w=y?y.value:null;if(w==="All")r(null),c(null),u(null),e(t);else{u(w);const E=n.filter(T=>T.levels.includes(w));e(E)}},S=y=>{const w=y?y.value:null;if(w==="All")r(null),c(null),u(null),e(t);else{c(w);const E=n.filter(T=>T.price_per_hour===w);e(E)}};return a.jsx(a.Fragment,{children:a.jsx(a.Fragment,{children:a.jsx("section",{children:a.jsxs(rp,{children:[a.jsxs(op,{children:[a.jsx(Ni,{children:"Languages"}),a.jsx(ji,{options:p,styles:Li,onChange:v,value:s?{value:s,label:s}:null,placeholder:"All"})]}),a.jsxs(ap,{children:[a.jsx(Ni,{children:"Level of knowledge"}),a.jsx(ji,{options:m,styles:Li,onChange:x,value:l?{value:l,label:l}:null,placeholder:"All"})]}),a.jsxs(lp,{children:[a.jsx(Ni,{children:"Price"}),a.jsx(ji,{options:g,styles:Li,onChange:S,value:o?{value:o,label:`${o} $`}:null,placeholder:"All"})]})]})})})})},hp=C.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 96px;
`,fp=C.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 32px;
`,pp=C.li`
  display: flex;
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  gap: 48px;
  width: 100%;
  max-width: 1184px;
`,rn=C.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,on=C.div`
  position: relative;
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;C.svg`
  position: absolute;
`;const $a=C.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 192px;
`,Ba=C.div`
  display: flex;
  align-items: center;

  gap: 64px;
  width: 100%;
  justify-content: space-between;
`,Es=C.ul`
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
`,Z=C.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`,gp=C.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`,Wn=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`,za=C.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: transparent;
  border-radius: 12px;
  padding: 8px 24px;
  border: 2px solid #ffdc86;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ffd700;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,qa=C.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: none;
  border-radius: 12px;
  padding: 8px 24px;
  border: 2px solid #f4c550;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #ffd700;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,fe=C.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`,so=C.span`
  color: #121417;
`,Ga=C.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`,an=C.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  white-space: nowrap;
`,Ya=C.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100%;
`,mp=C.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #121417;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,Ka=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,Re=C.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`,ln=C.ul`
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
`,Ts=C.ul`
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-width: 300px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`,mi=C.li`
  @media (max-width: 650px) {
    padding: 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  justify-content: center;
  border-radius: 35px;
  padding: 8px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
`,mt=C.span`
  color: #38cd3e;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`,vp=C.button`
  border-radius: 12px;
  padding: 16px 48px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  justify-content: center;
  background: #f4c550;
  border: none;
`,_p=C.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-direction: column;
`,Qa=C.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
    padding-bottom: 15px;
  }
  width: 100%;
  justify-content: space-around;
`,xp="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let yp=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=xp[n[t]&63];return e};const vt=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:26,height:26,fill:"none",...t,children:a.jsx("path",{stroke:"#121417",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M22.577 4.994a5.959 5.959 0 0 0-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"})}),bp=C.svg`
  position: absolute;
  top: 12%;
  right: 19%;
`,cn=t=>a.jsxs(bp,{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,fill:"none",...t,children:[a.jsx("circle",{cx:6,cy:6,r:6,fill:"#fff"}),a.jsx("circle",{cx:6,cy:6,r:4,fill:"#38CD3E"})]}),vi=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...t,children:a.jsx("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M14.667 4.133c0-.746 0-1.12-.146-1.405a1.333 1.333 0 0 0-.582-.583C13.653 2 13.28 2 12.533 2h-.266c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166C8 4.026 8 4.773 8 6.266V14l.067-.1c.463-.695.694-1.042 1-1.293.271-.223.583-.39.919-.492.378-.115.796-.115 1.63-.115h.917c.747 0 1.12 0 1.406-.145.25-.128.454-.332.582-.583.146-.285.146-.659.146-1.405V4.133ZM1.333 4.133c0-.746 0-1.12.146-1.405.127-.25.331-.455.582-.583C2.347 2 2.72 2 3.467 2h.266c1.494 0 2.24 0 2.81.29.503.256.91.664 1.166 1.166C8 4.026 8 4.773 8 6.266V14l-.067-.1c-.463-.695-.694-1.042-1-1.293a2.665 2.665 0 0 0-.919-.492C5.635 12 5.218 12 4.384 12h-.917c-.747 0-1.12 0-1.406-.145a1.334 1.334 0 0 1-.582-.583c-.146-.285-.146-.659-.146-1.405V4.133Z"})}),_t=t=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",...t,children:[a.jsx("g",{clipPath:"url(#a)",children:a.jsx("path",{fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2,d:"M6.2 4.697 8 1.286l1.8 3.411c.159.302.45.512.785.57l3.8.658-2.688 2.766a1.1 1.1 0 0 0-.3.923l.55 3.818-3.462-1.702a1.1 1.1 0 0 0-.97 0l-3.462 1.702.55-3.818a1.1 1.1 0 0 0-.3-.923L1.614 5.925l3.8-.657a1.1 1.1 0 0 0 .786-.571Z"})}),a.jsx("defs",{children:a.jsx("clipPath",{id:"a",children:a.jsx("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]}),xt=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:26,height:26,fill:"none",...t,children:a.jsx("path",{fill:"#F4C550",stroke:"#F4C550",strokeLinecap:"round",strokeLinejoin:"round",d:"M22.577 4.994a5.959 5.959 0 0 0-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 1 0-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"})}),Rs=C.div`
  @media (max-width: 650px) {
    padding: 12px;
    overflow-y: auto;
    max-height: 80vh;
    width: 80%;
  }
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
    transform: translate(-50%, -50%) scale(1.05);
  }
`,Cp=C.div`
  display: flex;

  gap: 48px;
`,wp=C.div`
  display: flex;

  gap: 4px;
`,Os=C.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  max-width: 968px;
`,Ps=C.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`,Xa=C.div`
  position: absolute;
  @media (max-width: 650px) {
    top: 0%;
    right: -1%;
  }
  top: -2%;
  right: -2%;
`,Ms=C.div`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  position: relative;
`,ks=C.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
`,js=C.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`,Ns=C.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
`,Ls=C.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #121417;
`,Ds=C.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`,As=C.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`,Sp=C.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px 48px;
  border: none;
  cursor: pointer;
`,Za=C.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
`,Ip=C.div`
  display: flex;
  position: relative;
`,Ep=C.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
  > li:first-child {
    border: none;
    background: #f4c550;
  }
`,Tp=C.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,Rp=C.div`
  display: flex;
  gap: 20px;
`,Op=C.div`
  display: flex;
  flex-direction: column;
`,Pp=C.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,Mp=C.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 20px;
`,Fs=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none",...t,children:a.jsx("path",{fill:"#FFC531",stroke:"#FFC531",strokeWidth:1.2,d:"M6.2 4.697 8 1.286l1.8 3.411c.159.302.45.512.785.57l3.8.658-2.688 2.766a1.1 1.1 0 0 0-.3.923l.55 3.818-3.462-1.702a1.1 1.1 0 0 0-.97 0l-3.462 1.702.55-3.818a1.1 1.1 0 0 0-.3-.923L1.614 5.925l3.8-.657a1.1 1.1 0 0 0 .786-.571Z"})}),Vs="/learn-lingo/assets/imageForComent-CnDD77wP.png",kp=({item:t,checked:e,handleToggleFavorite:n,closeModal:i,handleTrialLesson:s})=>{const r=()=>{n(t)};return console.log(t),a.jsx(a.Fragment,{children:a.jsx(Rs,{children:a.jsxs(Cp,{children:[a.jsx("div",{children:a.jsxs(on,{children:[a.jsx(rn,{src:t.avatar_url,alt:"Teacher"}),a.jsx(cn,{})]})}),a.jsx(a.Fragment,{children:a.jsxs(Ya,{children:[a.jsxs($a,{children:[a.jsxs(Ga,{children:[a.jsx(fe,{children:"Languages"}),a.jsxs(an,{children:[t.name," ",t.surname]})]}),a.jsxs(Ba,{children:[a.jsxs(Es,{children:[a.jsxs(Z,{children:[a.jsx(vi,{}),a.jsx("span",{children:"Lessons online"})]}),a.jsx(Z,{children:a.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]}),a.jsxs(wp,{children:[a.jsx(Wn,{onClick:r,children:e?a.jsx(xt,{}):a.jsx(vt,{})}),a.jsx(Ps,{onClick:i,children:a.jsx(en,{})})]})]})]}),a.jsxs(Ka,{children:[a.jsxs("ul",{children:[a.jsxs(Re,{children:[a.jsx(fe,{children:"Speaks:"}),a.jsx(ln,{children:t.languages.map((o,c)=>a.jsxs("li",{children:["  "+o," "]},c))})]}),a.jsxs(Re,{children:[a.jsx(fe,{children:"Lesson Info:"}),a.jsx("p",{children:t.lesson_info})]}),a.jsxs(Re,{children:[a.jsx(fe,{children:"Conditions:"}),a.jsx("p",{children:t.conditions})]})]}),a.jsx(Os,{children:t.experience})]}),a.jsx("ul",{children:t.reviews.map((o,c)=>a.jsxs("li",{children:[a.jsxs(js,{children:[a.jsx(ks,{children:o.avatar_url?a.jsx("img",{src:o.avatar_url,alt:"Teacher"}):a.jsx("img",{src:Vs,alt:"Image Person For Coment "})}),a.jsxs("div",{children:[a.jsx(Ds,{children:o.reviewer_name}),a.jsxs(Ns,{children:[a.jsx(Fs,{}),a.jsxs(Ls,{children:[o.reviewer_rating,".0"]})]})]})]}),a.jsx(As,{children:o.comment})]},c))}),a.jsx("div",{children:a.jsx(Ts,{children:t.levels.map((o,c)=>a.jsxs(mi,{children:["#",o]},c))})}),a.jsx("div",{children:a.jsx(Sp,{onClick:s,children:"Book trial lesson"})})]})})]})})})},jt=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t,children:a.jsx("rect",{width:18,height:18,x:3,y:3,stroke:"#121417",strokeOpacity:.2,strokeWidth:2,rx:9})}),Nt=t=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...t,children:[a.jsx("rect",{width:18,height:18,x:3,y:3,stroke:"#F4C550",strokeWidth:2,rx:9}),a.jsx("rect",{width:10,height:10,x:7,y:7,fill:"#F4C550",rx:5})]}),jp=bc({name:vn().min(3,"The name must contain a min of 3 characters").max(15,"The name must contain a maximum of 32 characters").required("The name is required"),email:vn().email("Please write a valid email").matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required("The email is required"),phone:vn().matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,"Please enter a valid phone number").required("The phone number is required"),reason:vn().required("Необхідно вибрати")}),Np=({item:t})=>{var l,u,d,h;const{register:e,handleSubmit:n,formState:{errors:i}}=Cc({mode:"onChange",resolver:Ac(jp)}),[s,r]=_.useState(""),o=f=>{r(f.target.value)},c=({name:f,email:p,phone:g,reason:m})=>{console.log({name:f,email:p,phone:g,reason:m})};return a.jsx(wc,{children:a.jsx(Sc,{children:a.jsxs("form",{onSubmit:n(c),children:[a.jsxs(Ic,{children:[a.jsx(Ec,{children:"Book trial lesson"}),a.jsx(Tc,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),a.jsxs(Rc,{children:[a.jsx("div",{children:a.jsx(Oc,{src:t.avatar_url})}),a.jsxs(Pc,{children:[a.jsx(Mc,{children:"Your teacher"}),a.jsxs(kc,{children:[t.name," ",t.surname]})]})]})]}),a.jsx(jc,{children:"What is your main reason for learning English?"}),a.jsxs(Nc,{children:[a.jsxs(Et,{children:[a.jsxs(Tt,{children:[a.jsx(Rt,{children:s==="Career and business"?a.jsx(Nt,{}):a.jsx(jt,{})}),a.jsx(Ot,{...e("reason"),type:"radio",id:"career",value:"Career and business",onChange:o})]}),a.jsx(Pt,{htmlFor:"career",children:"Career and business"})]}),a.jsxs(Et,{children:[a.jsxs(Tt,{children:[a.jsx(Rt,{children:s==="Lesson for kids"?a.jsx(Nt,{}):a.jsx(jt,{})}),a.jsx(Ot,{...e("reason"),type:"radio",id:"Lesson",value:"Lesson for kids",onChange:o})]}),a.jsx(Pt,{htmlFor:"Lesson",children:"Lesson for kids"})]}),a.jsxs(Et,{children:[a.jsxs(Tt,{children:[a.jsx(Rt,{children:s==="Living abroad"?a.jsx(Nt,{}):a.jsx(jt,{})}),a.jsx(Ot,{...e("reason"),type:"radio",id:"Living",value:"Living abroad",onChange:o})]}),a.jsx(Pt,{htmlFor:"Living",children:"Living abroad"})]}),a.jsxs(Et,{children:[a.jsxs(Tt,{children:[a.jsx(Rt,{children:s==="Exams and coursework"?a.jsx(Nt,{}):a.jsx(jt,{})}),a.jsx(Ot,{...e("reason"),type:"radio",id:"Exams",value:"Exams and coursework",onChange:o})]}),a.jsx(Pt,{htmlFor:"Exams",children:"Exams and coursework"})]}),a.jsxs(Et,{children:[a.jsxs(Tt,{children:[a.jsx(Rt,{children:s==="Culture, travel or hobby"?a.jsx(Nt,{}):a.jsx(jt,{})}),a.jsx(Ot,{...e("reason"),type:"radio",id:"Culture",value:"Culture, travel or hobby",onChange:o})]}),a.jsx(Pt,{htmlFor:"Culture",children:"Culture, travel or hobby"})]})]}),a.jsx(_n,{children:(l=i.reason)==null?void 0:l.message}),a.jsxs(Lc,{children:[a.jsxs(a.Fragment,{children:[a.jsx(Ii,{...e("name"),type:"text",id:"name",placeholder:"Your name"}),a.jsx(_n,{children:((u=i.name)==null?void 0:u.message)||""})]}),a.jsxs(a.Fragment,{children:[a.jsx(Ii,{...e("email"),type:"email",id:"email",placeholder:"Your email"}),a.jsx(_n,{children:(d=i.email)==null?void 0:d.message})]}),a.jsxs(a.Fragment,{children:[a.jsx(Ii,{...e("phone"),type:"tel",id:"phone",placeholder:"Your phone"}),a.jsx(_n,{children:(h=i.phone)==null?void 0:h.message})]})]}),a.jsx(Dc,{type:"submit",children:"Book"})]})})})},ro=t=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none",...t,children:[a.jsx("path",{fill:"url(#paint0_linear)",d:"M9.451 14.34c-.771 0-1.03-.672-1.03-.978l.005-2.295a.179.179 0 0 0-.07-.142.173.173 0 0 0-.156-.028 1.65 1.65 0 0 1-.476.075 1.15 1.15 0 0 1-.897-.42.678.678 0 0 0-.73-.203.87.87 0 0 1-.272.042c-.15 0-.314-.036-.48-.108a1.305 1.305 0 0 1-.485-.388c-.106-.132-.323-.355-.586-.355a.426.426 0 0 0-.116.016.753.753 0 0 1-.194.023c-.32 0-.74-.16-.952-.607-.194-.403-.189-2.634-.187-3.367C2.83 3.677 4.158.932 4.172.904a.218.218 0 0 0 .012-.03.294.294 0 0 1 .28-.213l4.657.04c.133.002.25.096.28.227l.036.151c.173.747.61 1.411 1.26 1.925.14.11.259.241.356.39.52.803.807 1.508 1.084 2.19.261.646.509 1.255.93 1.884.093.141.161.528.058.837a.585.585 0 0 1-.368.395c-.143.05-.273.075-.397.075-.442 0-.829-.33-1.255-1.069-.456-.788-.484-.996-.486-1.004a.174.174 0 0 0-.175-.168h-.003a.179.179 0 0 0-.173.179l-.014 6.687c0 .245-.148.94-.803.94Z"}),a.jsx("path",{fill:"#EDA600",d:"m4.465.485.002.352 4.651.04c.054.002.101.038.113.091l.035.151c.183.785.64 1.485 1.323 2.022.124.098.23.215.318.348.512.788.794 1.486 1.068 2.16.265.655.516 1.272.946 1.917.053.08.13.408.038.684-.066.196-.18.257-.26.285a.997.997 0 0 1-.34.065c-.249 0-.6-.11-1.102-.98-.383-.665-.452-.897-.462-.938a.352.352 0 0 0-.336-.323h-.014a.351.351 0 0 0-.35.324c-.002.01-.002.02-.002.03l-.014 6.689c0 .007-.027.76-.627.76-.702 0-.854-.642-.854-.8l.005-2.296a.353.353 0 0 0-.352-.352.327.327 0 0 0-.1.016c-.15.045-.294.068-.426.068a.966.966 0 0 1-.763-.359.854.854 0 0 0-.919-.257.695.695 0 0 1-.218.034 1.055 1.055 0 0 1-.827-.428c-.125-.157-.386-.421-.723-.421a.587.587 0 0 0-.163.022.6.6 0 0 1-.148.018.878.878 0 0 1-.794-.508c-.08-.167-.175-.874-.17-3.29C3.005 3.72 4.316 1.008 4.329.98A.355.355 0 0 0 4.35.922a.118.118 0 0 1 .113-.085V.485Zm0 0a.47.47 0 0 0-.451.341s-1.36 2.788-1.364 4.78c-.003 1.353.016 3.05.204 3.442.253.53.746.707 1.112.707a.93.93 0 0 0 .24-.03.29.29 0 0 1 .07-.009c.169 0 .34.152.448.288.123.155.307.334.553.44.209.089.393.122.55.122.126 0 .235-.021.327-.05a.506.506 0 0 1 .543.151c.191.226.522.481 1.03.481.157 0 .332-.024.525-.083l-.004 2.296c0 .371.307 1.153 1.206 1.153.742 0 .978-.743.978-1.112l.014-6.688c.001.028.025.245.508 1.081.452.784.887 1.157 1.407 1.157.144 0 .296-.03.456-.086.675-.24.593-1.2.397-1.495-.85-1.275-.988-2.496-2.012-4.073a1.798 1.798 0 0 0-.395-.433c-.59-.464-1.028-1.094-1.198-1.825L9.574.888a.472.472 0 0 0-.453-.362L4.47.486h-.005Z"}),a.jsx("path",{fill:"#EDA600",d:"m8.544 8.706.053 2.48-.287-.2c-.069 0-.122-.09-.113-.193l.09-2.09c.016-.208.246-.206.257.003ZM10.438 5.774l.329.817.11.29-.39-.103-.378-.11.01-.877c0-.161.253-.145.319-.017ZM6.538 8.66l.09 1.53c.006.07-.295.03-.295.03a.117.117 0 0 1-.113-.132l.09-1.434c.015-.141.217-.138.228.005ZM4.59 8.686l.09.825c.006.037-.295.015-.295.015-.07 0-.122-.033-.114-.071l.09-.771c.017-.077.218-.074.229.002Z"}),a.jsx("defs",{children:a.jsxs("linearGradient",{id:"paint0_linear",x1:7.985,x2:8.014,y1:14.335,y2:.67,gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:.128,stopColor:"#FFB300"}),a.jsx("stop",{offset:.647,stopColor:"#FFCA28"})]})})]}),oo=({openModalLogin:t,openModalRegister:e,closeModal:n})=>a.jsxs(Fc,{children:[a.jsx(Vc,{onClick:n,children:a.jsx(en,{})}),a.jsxs(Hc,{children:[a.jsx(Wc,{children:"Hello, friend!"}),a.jsxs(Uc,{children:[a.jsxs(a.Fragment,{children:[a.jsxs(xr,{children:["To continue using extra possibilities of service you need to log in by clicking the button below ",a.jsx(ro,{})]}),a.jsx(yr,{onClick:t,children:"Log In"})]}),a.jsxs(a.Fragment,{children:[a.jsxs(xr,{children:["Friend, in case you have not registered yet, please be sure to press the button below to continue ",a.jsx(ro,{})]}),a.jsx(yr,{onClick:e,children:"Register"})]})]})]})]}),Ja=C.div`
  display: flex;
`,el=C.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
`,Lp=C.li`
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
`,Dp=C.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
`,Ap=C.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: center;
`,Fp=C.div`
  min-width: 1px;
`,tl=C.div`
  display: flex;
  gap: 8px;
`,Vp=C.div`
  display: flex;
  padding-top: 30px;
  width: 100%;
  justify-content: space-between;
`,ao=C.button`
  border-radius: 12px;
  padding: 4px 10px;
  border: none;
  background: #f4c550;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 156%;
  color: #121417;
`,Hp=C.div`
  position: relative;
`,Wp=C.div`
  position: absolute;
  top: -225%;
  right: 0%;
`,Up=({item:t,handleFavoriteClick:e,checked:n,handleShowModalItem:i})=>{const[s,r]=_.useState(window.innerWidth);return _.useEffect(()=>{const o=()=>{r(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),a.jsxs(Lp,{children:[a.jsx("div",{children:a.jsxs(a.Fragment,{children:[a.jsx(Ap,{children:a.jsxs(on,{children:[a.jsx(rn,{src:t.avatar_url,alt:"Teacher"}),a.jsx(cn,{})]})}),a.jsxs(an,{children:[t.name," ",t.surname]}),a.jsxs(tl,{children:[a.jsx(fe,{children:"Speaks:"}),a.jsx(ln,{children:t.languages.map((o,c)=>a.jsxs("li",{children:["  "+o," "]},c))})]})]})}),a.jsx(a.Fragment,{children:s<568?a.jsx(a.Fragment,{children:a.jsxs(Hp,{children:[a.jsxs("ul",{children:[a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]}),a.jsx(Dp,{children:a.jsx(a.Fragment,{children:a.jsx(ao,{onClick:i,children:"Read more"})})}),a.jsx(Wp,{children:a.jsx(a.Fragment,{children:a.jsx(Wn,{onClick:e,children:n?a.jsx(xt,{}):a.jsx(vt,{})})})})]})}):a.jsx(a.Fragment,{children:a.jsxs(Fp,{children:[a.jsx(Ja,{children:a.jsxs(el,{children:[a.jsxs(Z,{children:[a.jsx(vi,{}),a.jsx("span",{children:"Lessons online"})]}),a.jsx(Z,{children:a.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]})}),a.jsxs(Vp,{children:[a.jsx(a.Fragment,{children:a.jsx(ao,{onClick:i,children:"Read more"})}),a.jsx(a.Fragment,{children:a.jsx(Wn,{onClick:e,children:n?a.jsx(xt,{}):a.jsx(vt,{})})})]})]})})})]})},$p=({item:t,checked:e,handleToggleFavorite:n,closeModal:i,handleTrialLesson:s})=>{const r=()=>{n(t)};return a.jsx(Rs,{children:a.jsxs(Ms,{children:[a.jsx(Xa,{children:a.jsx(Ps,{onClick:i,children:a.jsx(en,{})})}),a.jsxs(Ip,{children:[a.jsxs("div",{children:[a.jsxs(on,{children:[a.jsx(rn,{src:t.avatar_url,alt:"Teacher"}),a.jsx(cn,{})]}),a.jsxs(an,{children:[t.name," ",t.surname]}),a.jsxs(tl,{children:[a.jsx(fe,{children:"Speaks:"}),a.jsx(ln,{children:t.languages.map((o,c)=>a.jsxs("li",{children:["  "+o," "]},c))})]})]}),a.jsxs("div",{children:[a.jsx(Ja,{children:a.jsxs(el,{children:[a.jsxs(Z,{children:[a.jsx(vi,{}),a.jsx("span",{children:"Lessons online"})]}),a.jsx(Z,{children:a.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]})}),a.jsx(Ep,{children:t.levels.map((o,c)=>a.jsxs(mi,{children:["#",o]},c))})]})]}),a.jsxs(a.Fragment,{children:[a.jsxs("ul",{children:[a.jsxs(Re,{children:[a.jsx(fe,{children:"Lesson Info:"}),a.jsx("p",{children:t.lesson_info})]}),a.jsxs(Re,{children:[a.jsx(fe,{children:"Conditions:"}),a.jsx("p",{children:t.conditions})]})]}),a.jsx(Os,{children:t.experience})]}),a.jsx(a.Fragment,{children:a.jsx("ul",{children:t.reviews.map((o,c)=>a.jsxs("li",{children:[a.jsxs(js,{children:[a.jsx(ks,{children:o.avatar_url?a.jsx("img",{src:o.avatar_url,alt:"Teacher"}):a.jsx("img",{src:Vs,alt:"Image Person For Coment "})}),a.jsxs("div",{children:[a.jsx(Ds,{children:o.reviewer_name}),a.jsxs(Ns,{children:[a.jsx(Fs,{}),a.jsxs(Ls,{children:[o.reviewer_rating,".0"]})]})]})]}),a.jsx(As,{children:o.comment})]},c))})}),a.jsxs(Qa,{children:[a.jsx(Za,{onClick:s,children:"Book trial lesson"}),a.jsx(a.Fragment,{children:e?a.jsxs(za,{onClick:r,children:[a.jsx(xt,{}),a.jsx("span",{children:"Remove from favorites"})]}):a.jsxs(qa,{onClick:r,children:[a.jsx(vt,{}),a.jsx("span",{children:"Add to favorites"})]})})]})]})})},Bp=({item:t,checked:e,handleToggleFavorite:n,closeModal:i,handleTrialLesson:s})=>{const r=()=>{n(t)};return a.jsx(Rs,{children:a.jsxs(Ms,{children:[a.jsx(Xa,{children:a.jsx(Ps,{onClick:i,children:a.jsx(en,{})})}),a.jsx(a.Fragment,{children:a.jsxs(Rp,{children:[a.jsxs(on,{children:[a.jsx(rn,{src:t.avatar_url,alt:"Teacher"}),a.jsx(cn,{})]}),a.jsxs(Tp,{children:[a.jsxs(Op,{children:[a.jsx(fe,{children:"Languages"}),a.jsxs(an,{children:[t.name," ",t.surname]})]}),a.jsx("span",{children:"Lessons online"})]})]})}),a.jsxs(a.Fragment,{children:[a.jsxs(Pp,{children:[a.jsx("ul",{children:a.jsxs(Re,{children:[a.jsx(fe,{children:"Speaks:"}),a.jsx(ln,{children:t.languages.map((o,c)=>a.jsxs("li",{children:["  "+o," "]},c))})]})}),a.jsxs(Es,{children:[a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]}),a.jsx(gp,{children:a.jsxs("span",{children:["Lessons done: ",t.lessons_done]})})]}),a.jsx(a.Fragment,{children:a.jsxs("div",{children:[a.jsxs(Mp,{children:[a.jsx(Re,{children:a.jsxs(fe,{children:["Lesson Info:"," ",a.jsx(so,{children:t.lesson_info})]})}),a.jsx(Re,{children:a.jsxs(fe,{children:["Conditions:"," ",a.jsx(so,{children:t.conditions})]})})]}),a.jsx(Os,{children:t.experience})]})}),a.jsx(a.Fragment,{children:a.jsx("div",{children:a.jsx("ul",{children:t.reviews.map((o,c)=>a.jsxs("li",{children:[a.jsxs(js,{children:[a.jsx(ks,{children:o.avatar_url?a.jsx("img",{src:o.avatar_url,alt:"Teacher"}):a.jsx("img",{src:Vs,alt:"Image Person For Coment "})}),a.jsxs("div",{children:[a.jsx(Ds,{children:o.reviewer_name}),a.jsxs(Ns,{children:[a.jsx(Fs,{}),a.jsxs(Ls,{children:[o.reviewer_rating,".0"]})]})]})]}),a.jsx(As,{children:o.comment})]},c))})})}),a.jsx(a.Fragment,{children:a.jsx("div",{children:a.jsx(Ts,{children:t.levels.map((o,c)=>a.jsxs(mi,{children:["#",o.slice(0,2)]},c))})})})]}),a.jsxs(Qa,{children:[a.jsx(Za,{onClick:s,children:"Book trial lesson"}),a.jsx(a.Fragment,{children:e?a.jsxs(za,{onClick:r,children:[a.jsx(xt,{}),a.jsx("span",{children:"Remove from favorites"})]}):a.jsxs(qa,{onClick:r,children:[a.jsx(vt,{}),a.jsx("span",{children:"Add to favorites"})]})})]})]})})},zp=C.h1`
  @media (max-width: 650px) {
    font-size: 30px;
  }
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  max-width: 678px;
`,lo=C.span`
  color: #f4c550;
`,qp=C.div`
  @media (max-width: 650px) {
    padding: 24px;
    overflow-y: auto;
    min-width: 320px;
    width: 80%;
  }
  width: 708px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }
`,Gp=C.button`
  border: none;
  background: transparent;
  position: absolute;
  @media (max-width: 650px) {
    top: -5%;
    right: -7%;
  }
  top: -49px;
  right: -7%;
`,Yp=C.div`
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`,co=C.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;
  background: #f4c550;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  padding: 16px 88px;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:focus,
  &:hover {
    background: #ffdc86;
    transform: scale(1.05);
  }
`,Kp=({handleRemoveFavorite:t,closeModal:e,item:n})=>{const i=cs(us);return a.jsx(qp,{children:a.jsxs(Ms,{children:[a.jsx(Gp,{onClick:e,children:a.jsx(en,{})}),a.jsxs(zp,{children:[a.jsx(lo,{children:i.name}),", are you sure you want to remove teacher"," ",a.jsxs(lo,{children:[n.name," ",n.surname]})," ","from your favorites?"]}),a.jsxs(Yp,{children:[a.jsx(co,{onClick:t,children:"Delete"}),a.jsx(co,{onClick:e,children:"Cancel"})]})]})})},Be=JSON.parse(localStorage.getItem("favorites"))??[],Qp=({item:t,handleFavoriteChange:e})=>{var pe;const[n,i]=_.useState(!1),[s,r]=_.useState(null),[o,c]=_.useState(null),l=cs(us),[u,d]=_.useState(!1),[h,f]=_.useState(!1),[p,g]=_.useState(!1),[m,v]=_.useState(!1),[x,S]=_.useState(!1),[y,w]=_.useState(!1),E=Go(),[T,I]=_.useState(window.innerWidth);_.useEffect(()=>(h||y||m||x||p||u||o?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[h,y,m,x,p,u,o]);const k=()=>{v(!0),g(!1),d(!1)},$=()=>{S(!0),g(!1),d(!1)},Q=()=>{f(!0),c(!1)},ae=()=>{l?(r(t),c(!0)):d(!0)},J=()=>{E.pathname==="/favorites"?w(!0):l?z(t):we(),r(t)},D=()=>{c(!1),f(!1),d(!1),g(!1),w(!1),v(!1),S(!1)};_.useEffect(()=>{const q=ee=>{ee.key==="Escape"&&D()};return window.addEventListener("keydown",q),()=>{window.removeEventListener("keydown",q)}},[]);const we=()=>{g(!0)},z=({id:q})=>{if(l)if(Be!=null&&Be.includes(q)){const ee=Be.indexOf(q);Be.splice(ee,1),localStorage.setItem("favorites",JSON.stringify(Be)),i(!n)}else Be.push(q),localStorage.setItem("favorites",JSON.stringify(Be)),i(!n);else we()},K=()=>{z(t),e(),D(),window.location.reload()};_.useEffect(()=>{const q=()=>{I(window.innerWidth)},ee=st=>{st.key==="Escape"&&D()};return window.addEventListener("resize",q),window.addEventListener("keydown",ee),()=>{window.removeEventListener("resize",q),window.removeEventListener("keydown",ee)}},[]);const ce=l?(pe=JSON.parse(localStorage.getItem("favorites")))==null?void 0:pe.includes(t.id):!1;return a.jsxs(a.Fragment,{children:[m&&a.jsxs(a.Fragment,{children:[a.jsx(rt,{closeModal:D}),a.jsx(br,{closeModal:D})]}),x&&a.jsxs(a.Fragment,{children:[a.jsx(rt,{closeModal:D}),a.jsx(Cr,{closeModal:D})]}),y&&a.jsx(a.Fragment,{children:a.jsx(a.Fragment,{children:a.jsx(Kp,{handleRemoveFavorite:K,closeModal:D,item:s})})}),m&&a.jsxs(a.Fragment,{children:[a.jsx(br,{closeModal:D}),a.jsx(rt,{closeModal:D})]}),x&&a.jsxs(a.Fragment,{children:[a.jsx(Cr,{closeModal:D}),a.jsx(rt,{closeModal:D})]}),p&&a.jsxs(a.Fragment,{children:[a.jsx(oo,{item:s,openModalLogin:k,openModalRegister:$,closeModal:D}),a.jsx(rt,{closeModal:D})]}),h&&a.jsxs(a.Fragment,{children:[a.jsx(Np,{item:s,closeModal:D}),a.jsx(Mn,{closeModal:D})]}),a.jsx(a.Fragment,{children:u&&a.jsxs(a.Fragment,{children:[a.jsx(oo,{closeModal:D,item:s,openModalLogin:k,openModalRegister:$}),a.jsx(rt,{closeModal:D})]})}),o&&a.jsxs(a.Fragment,{children:[a.jsx(a.Fragment,{children:T<650?a.jsx(Bp,{item:s,checked:ce,handleToggleFavorite:z,handleTrialLesson:Q,trialLesson:h,closeModal:D}):T<1280?a.jsx($p,{item:s,checked:ce,handleToggleFavorite:z,handleTrialLesson:Q,trialLesson:h,closeModal:D}):a.jsx(kp,{item:s,checked:ce,handleToggleFavorite:z,handleTrialLesson:Q,trialLesson:h,closeModal:D})}),a.jsx(Mn,{closeModal:D})]}),a.jsx(a.Fragment,{children:T<1280?a.jsx(Up,{item:t,handleFavoriteClick:J,checked:ce,handleShowModalItem:ae}):a.jsx(a.Fragment,{children:a.jsxs(pp,{children:[a.jsx("div",{children:a.jsxs(on,{children:[a.jsx(rn,{src:t.avatar_url,alt:"Teacher"}),a.jsx(cn,{})]})}),a.jsxs(Ya,{children:[a.jsxs(_p,{children:[a.jsxs($a,{children:[a.jsx(Ga,{children:a.jsx(fe,{children:"Languages"})}),a.jsxs(Ba,{children:[a.jsxs(Es,{children:[a.jsxs(Z,{children:[a.jsx(vi,{}),a.jsx("span",{children:"Lessons online"})]}),a.jsx(Z,{children:a.jsxs("span",{children:["Lessons done: ",t.lessons_done]})}),a.jsxs(Z,{children:[a.jsx(_t,{}),a.jsxs("span",{children:["Rating: ",t.rating]})]}),a.jsxs(Z,{children:[a.jsx("span",{children:"Price / 1 hour:"}),a.jsxs(mt,{children:[t.price_per_hour,"$"]})]})]}),a.jsx(Wn,{onClick:J,children:ce?a.jsx(xt,{}):a.jsx(vt,{})})]})]}),a.jsxs(an,{children:[t.name," ",t.surname]})]}),a.jsxs(Ka,{children:[a.jsxs("ul",{children:[a.jsxs(Re,{children:[a.jsx(fe,{children:"Speaks:"}),a.jsx(ln,{children:t.languages.map((q,ee)=>a.jsxs("li",{children:["  "+q," "]},ee))})]}),a.jsxs(Re,{children:[a.jsx(fe,{children:"Lesson Info:"}),a.jsx("p",{children:t.lesson_info})]}),a.jsxs(Re,{children:[a.jsx(fe,{children:"Conditions:"}),a.jsx("p",{children:t.conditions})]})]}),a.jsx(a.Fragment,{children:a.jsx(mp,{onClick:ae,children:"Read more"})})]}),a.jsx("div",{children:a.jsx(Ts,{children:t.levels.map((q,ee)=>a.jsxs(mi,{children:["#",q]},ee))})})]})]})})})]})},Xp=()=>{const t=Go(),e=$c(),[n,i]=_.useState(9),s=cs(us);return _.useEffect(()=>{if(n<=0){t.pathname==="/favorites"?e("/teachers"):t.pathname==="/teachers"&&e("/");return}const r=setTimeout(()=>{i(n-1)},1e3);return()=>clearTimeout(r)},[n,t.pathname,e]),a.jsx(Bc,{children:a.jsx(zc,{children:t.pathname==="/favorites"?a.jsxs(a.Fragment,{children:[a.jsxs(wr,{children:["Hello, ",s&&s.name?s.name:"Friend","!"]}),a.jsxs(Sr,{children:["You haven't chose a favorite teacher. You will be redirected to the Teachers page in"," ",a.jsx(Ir,{children:n})," seconds. Press the button to move faster."]}),a.jsx(Er,{to:"/teachers","aria-label":"Home teachers",style:{textDecoration:"none"},children:"button"})]}):t.pathname==="/teachers"?a.jsxs(a.Fragment,{children:[a.jsxs(wr,{children:["Hello, ",s&&s.name?s.name:"Friend","!"]}),a.jsxs(Sr,{children:["We're sorry, but a technical error occured. Service is unavaliable. Please, try again later. You will be redirected to the Main page in ",a.jsx(Ir,{children:n})," ","seconds. Press the button to move faster."]}),a.jsx(Er,{to:"/","aria-label":"Home button",style:{textDecoration:"none"},children:"button"})]}):null})})},l_=({dataList:t})=>{const[e,n]=_.useState(null),[i,s]=_.useState(4),[r,o]=_.useState(!1),[c,l]=_.useState(!1),u=()=>{l(!c)};_.useEffect(()=>{t&&(o(!0),n(t),o(!1))},[t,c]);const d=()=>{s(h=>h+4)};return a.jsxs(a.Fragment,{children:[r&&a.jsx(a.Fragment,{children:a.jsx(qc,{})}),e?a.jsxs(hp,{children:[a.jsx(fp,{children:e.slice(0,i).map(h=>a.jsx(Qp,{item:h,handleFavoriteChange:u},yp()))}),e.length>i&&a.jsx(vp,{onClick:d,children:"Load more"})]}):a.jsxs(a.Fragment,{children:[a.jsx(Xp,{}),a.jsx(Mn,{})]})]})};var uo={};const ho="@firebase/database",fo="1.0.5";/**
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
 */let nl="";function Zp(t){nl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return He(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jp(e)}}catch{}return new eg},Qe=il("localStorage"),tg=il("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Gc("@firebase/database"),ng=function(){let t=1;return function(){return t++}}(),sl=function(t){const e=eu(t),n=new tu;n.update(e);const i=n.digest();return nu.encodeByteArray(i)},un=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=un.apply(null,i):typeof i=="object"?e+=re(i):e+=i,e+=" "}return e};let Ht=null,po=!0;const ig=function(t,e){b(!e,"Can't turn on custom loggers persistently."),dt.logLevel=iu.VERBOSE,Ht=dt.log.bind(dt)},de=function(...t){if(po===!0&&(po=!1,Ht===null&&tg.get("logging_enabled")===!0&&ig()),Ht){const e=un.apply(null,t);Ht(e)}},dn=function(t){return function(...e){de(t,...e)}},Qi=function(...t){const e="FIREBASE INTERNAL ERROR: "+un(...t);dt.error(e)},Ve=function(...t){const e=`FIREBASE FATAL ERROR: ${un(...t)}`;throw dt.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+un(...t);dt.warn(e)},sg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yt="[MIN_NAME]",Ze="[MAX_NAME]",St=function(t,e){if(t===e)return 0;if(t===yt||e===Ze)return-1;if(e===yt||t===Ze)return 1;{const n=go(t),i=go(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},og=function(t,e){return t===e?0:t<e?-1:1},Lt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},Hs=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=re(e[i]),n+=":",n+=Hs(t[e[i]]);return n+="}",n},ol=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function _e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const al=function(t){b(!rl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,c,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=c+i,o=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ag=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const ug=new RegExp("^-?(0*)\\d{1,10}$"),dg=-2147483648,hg=2147483647,go=function(t){if(ug.test(t)){const e=Number(t);if(e>=dg&&e<=hg)return e}return null},hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},fg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(de("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Pn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="5",ll="v",cl="s",ul="r",dl="f",hl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fl="ls",pl="p",Xi="ac",gl="websocket",ml="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,i,s,r=!1,o="",c=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _l(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let i;if(e===gl)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ml)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mg(t)&&(n.ns=t.namespace);const s=[];return _e(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.counters_={}}incrementCounter(e,n=1){He(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={},Ai={};function Us(t){const e=t.toString();return Di[e]||(Di[e]=new vg),Di[e]}function _g(t,e){const n=t.toString();return Ai[n]||(Ai[n]=e()),Ai[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&hn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="start",yg="close",bg="pLPCommand",Cg="pRTLPCB",xl="id",yl="pw",bl="ser",wg="cb",Sg="seg",Ig="ts",Eg="d",Tg="dframe",Cl=1870,wl=30,Rg=Cl-wl,Og=25e3,Pg=3e4;class lt{constructor(e,n,i,s,r,o,c){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dn(e),this.stats_=Us(n),this.urlFn=l=>(this.appCheckToken&&(l[Xi]=this.appCheckToken),_l(n,ml,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pg)),rg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $s((...r)=>{const[o,c,l,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mo)this.id=c,this.password=l;else if(o===yg)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,c]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const i={};i[mo]="t",i[bl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[wg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ll]=Ws,this.transportSessionId&&(i[cl]=this.transportSessionId),this.lastSessionId&&(i[fl]=this.lastSessionId),this.applicationId&&(i[pl]=this.applicationId),this.appCheckToken&&(i[Xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&hl.test(location.hostname)&&(i[ul]=dl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lt.forceAllow_=!0}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){return lt.forceAllow_?!0:!lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ag()&&!lg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=uu(n),s=ol(i,Rg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Tg]="t",i[xl]=e,i[yl]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $s{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ng(),window[bg+this.uniqueCallbackIdentifier]=e,window[Cg+this.uniqueCallbackIdentifier]=n,this.myIFrame=$s.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){de("frame writing exception"),c.stack&&de(c.stack),de(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||de("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xl]=this.myID,e[yl]=this.myPW,e[bl]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wl+i.length<=Cl;){const o=this.pendingSegs.shift();i=i+"&"+Sg+s+"="+o.seg+"&"+Ig+s+"="+o.ts+"&"+Eg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Og)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{de("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=16384,kg=45e3;let Un=null;typeof MozWebSocket<"u"?Un=MozWebSocket:typeof WebSocket<"u"&&(Un=WebSocket);class Ie{constructor(e,n,i,s,r,o,c){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dn(this.connId),this.stats_=Us(n),this.connURL=Ie.connectionURL_(n,o,c,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[ll]=Ws,typeof location<"u"&&location.hostname&&hl.test(location.hostname)&&(o[ul]=dl),n&&(o[cl]=n),i&&(o[fl]=i),s&&(o[Xi]=s),r&&(o[pl]=r),_l(e,gl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qe.set("previous_websocket_failure",!0);try{let i;Ko(),this.mySock=new Un(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Un!==null&&!Ie.forceDisallow_}static previouslyFailed(){return Qe.isInMemoryStorage||Qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ds(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ol(n,Mg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ie.responsesRequiredToBeHealthy=2;Ie.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[lt,Ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ie&&Ie.isAvailable();let i=n&&!Ie.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ie];else{const s=this.transports_=[];for(const r of Yt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=6e4,Ng=5e3,Lg=10*1024,Dg=100*1024,Fi="t",vo="d",Ag="s",_o="r",Fg="e",xo="o",yo="a",bo="n",Co="p",Vg="h";class Hg{constructor(e,n,i,s,r,o,c,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dn("c:"+this.id+":"),this.transportManager_=new Yt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Wt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fi in e){const n=e[Fi];n===yo?this.upgradeIfSecondaryHealthy_():n===_o?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Lt("t",e),i=Lt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Co,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Lt("t",e),i=Lt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Lt(Fi,e);if(vo in e){const i=e[vo];if(n===Vg){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===bo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ag?this.onConnectionShutdown_(i):n===_o?this.onReset_(i):n===Fg?Qi("Server Error: "+i):n===xo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ws!==i&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Wt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ng))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Co,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Il{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $n}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=32,So=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new W("")}function N(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qe(t){return t.pieces_.length-t.pieceNum_}function U(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function El(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Wg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Tl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Rl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function ne(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new W(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ge(t,e){const n=N(t),i=N(e);if(n===null)return e;if(n===i)return ge(U(t),U(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bs(t,e){if(qe(t)!==qe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ee(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(qe(t)>qe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Ug{constructor(e,n){this.errorPrefix_=n,this.parts_=Tl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ti(this.parts_[i]);Ol(this)}}function $g(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ti(e),Ol(t)}function Bg(t){const e=t.parts_.pop();t.byteLength_-=ti(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ol(t){if(t.byteLength_>So)throw new Error(t.errorPrefix_+"has a key path longer than "+So+" bytes ("+t.byteLength_+").");if(t.parts_.length>wo)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wo+") or object contains a cycle "+Ke(t))}function Ke(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Il{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new zs}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=1e3,zg=60*5*1e3,Io=30*1e3,qg=1.3,Gg=3e4,Yg="server_kill",Eo=3;class Ae extends Sl{constructor(e,n,i,s,r,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=Ae.nextPersistentConnectionId_++,this.log_=dn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dt,this.maxReconnectDelay_=zg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ko())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(re(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Qo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?n.resolve(c):n.reject(c)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const c={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,c=>{const l=c.d,u=c.s;Ae.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",c),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&He(e,"w")){const i=pt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||su(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Io)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ru(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qi("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gg&&(this.reconnectDelay_=Dt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ae.nextConnectionId_++,r=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,i())},u=function(h){b(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?de("getToken() completed but was canceled"):(de("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,c=new Hg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{be(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&be(h),l())}}}interrupt(e){de("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){de("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rr(this.interruptReasons_)&&(this.reconnectDelay_=Dt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Hs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new W(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){de("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eo&&(this.reconnectDelay_=Io,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){de("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nl.replace(/\./g,"-")]=1,Xo()?e["framework.cordova"]=1:ou()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$n.getInstance().currentlyOnline();return Rr(this.interruptReasons_)&&e}}Ae.nextPersistentConnectionId_=0;Ae.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new j(yt,e),s=new j(yt,n);return this.compare(i,s)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;class Pl extends _i{static get __EMPTY_NODE(){return Sn}static set __EMPTY_NODE(e){Sn=e}compare(e,n){return St(e.name,n.name)}isDefinedOn(e){throw nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Ze,Sn)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Sn)}toString(){return".key"}}const ht=new Pl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class se{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??se.RED,this.left=s??me.EMPTY_NODE,this.right=r??me.EMPTY_NODE}copy(e,n,i,s,r){return new se(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}se.RED=!0;se.BLACK=!1;class Kg{copy(e,n,i,s,r){return this}insert(e,n,i){return new se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class me{constructor(e,n=me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,se.BLACK,null,null))}remove(e){return new me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,se.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new In(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new In(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new In(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new In(this.root_,null,this.comparator_,!0,e)}}me.EMPTY_NODE=new Kg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){return St(t.name,e.name)}function qs(t,e){return St(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;function Xg(t){Zi=t}const Ml=function(t){return typeof t=="number"?"number:"+al(t):"string:"+t},kl=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&He(e,".sv"),"Priority must be a string or number.")}else b(t===Zi||t.isEmpty(),"priority of unexpected type.");b(t===Zi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;class ie{constructor(e,n=ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kl(this.priorityNode_)}static set __childrenNodeConstructor(e){To=e}static get __childrenNodeConstructor(){return To}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:N(e)===".priority"?this.priorityNode_:ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=N(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(U(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ml(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=al(this.value_):e+=this.value_,this.lazyHash_=sl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ie.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ie.VALUE_TYPE_ORDER.indexOf(n),r=ie.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl,Nl;function Zg(t){jl=t}function Jg(t){Nl=t}class em extends _i{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?St(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Ze,new ie("[PRIORITY-POST]",Nl))}makePost(e,n){const i=jl(e);return new j(n,new ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const G=new em;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=Math.log(2);class nm{constructor(e){const n=r=>parseInt(Math.log(r)/tm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bn=function(t,e,n,i){t.sort(e);const s=function(l,u){const d=u-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new se(f,h.node,se.BLACK,null,null);{const p=parseInt(d/2,10)+l,g=s(l,p),m=s(p+1,u);return h=t[p],f=n?n(h):h,new se(f,h.node,se.BLACK,g,m)}},r=function(l){let u=null,d=null,h=t.length;const f=function(g,m){const v=h-g,x=h;h-=g;const S=s(v+1,x),y=t[v],w=n?n(y):y;p(new se(w,y.node,m,null,S))},p=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));m?f(v,se.BLACK):(f(v,se.BLACK),f(v,se.RED))}return d},o=new nm(t.length),c=r(o);return new me(i||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;const at={};class Le{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(at&&G,"ChildrenNode.ts has not been loaded"),Vi=Vi||new Le({".priority":at},{".priority":G}),Vi}get(e){const n=pt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof me?n:null}hasIndex(e){return He(this.indexSet_,e.toString())}addIndex(e,n){b(e!==ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let c;s?c=Bn(i,e.getCompare()):c=at;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=c,new Le(d,u)}addToIndexes(e,n){const i=kn(this.indexes_,(s,r)=>{const o=pt(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),s===at)if(o.isDefinedOn(e.node)){const c=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&c.push(u),u=l.getNext();return c.push(e),Bn(c,o.getCompare())}else return at;else{const c=n.get(e.name);let l=s;return c&&(l=l.remove(new j(e.name,c))),l.insert(e,e.node)}});return new Le(i,this.indexSet_)}removeFromIndexes(e,n){const i=kn(this.indexes_,s=>{if(s===at)return s;{const r=n.get(e.name);return r?s.remove(new j(e.name,r)):s}});return new Le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At;class M{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&kl(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return At||(At=new M(new me(qs),null,Le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||At}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?At:n}}getChild(e){const n=N(e);return n===null?this:this.getImmediateChild(n).getChild(U(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new j(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?At:this.priorityNode_;return new M(s,o,r)}}updateChild(e,n){const i=N(e);if(i===null)return n;{b(N(e)!==".priority"||qe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(U(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(G,(o,c)=>{n[o]=c.val(e),i++,r&&M.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const c in n)o[c]=n[c];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ml(this.getPriority().val())+":"),this.forEachChild(G,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":sl(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fn?-1:0}withIndex(e){if(e===ht||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(G),s=n.getIterator(G);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ht?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class im extends M{constructor(){super(new me(qs),M.EMPTY_NODE,Le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const fn=new im;Object.defineProperties(j,{MIN:{value:new j(yt,M.EMPTY_NODE)},MAX:{value:new j(Ze,fn)}});Pl.__EMPTY_NODE=M.EMPTY_NODE;ie.__childrenNodeConstructor=M;Xg(fn);Jg(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=!0;function he(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ie(n,he(e))}if(!(t instanceof Array)&&sm){const n=[];let i=!1;if(_e(t,(o,c)=>{if(o.substring(0,1)!=="."){const l=he(c);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return M.EMPTY_NODE;const r=Bn(n,Qg,o=>o.name,qs);if(i){const o=Bn(n,G.getCompare());return new M(r,he(e),new Le({".priority":o},{".priority":G}))}else return new M(r,he(e),Le.Default)}else{let n=M.EMPTY_NODE;return _e(t,(i,s)=>{if(He(t,i)&&i.substring(0,1)!=="."){const r=he(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(he(e))}}Zg(he);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends _i{constructor(e){super(),this.indexPath_=e,b(!L(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?St(e.name,n.name):r}makePost(e,n){const i=he(e),s=M.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(n,s)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,fn);return new j(Ze,e)}toString(){return Tl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends _i{compare(e,n){const i=e.node.compareTo(n.node);return i===0?St(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const i=he(e);return new j(n,i)}toString(){return".value"}}const am=new om;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){return{type:"value",snapshotNode:t}}function bt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(n);return c.getChild(s).equals(i.getChild(s))&&c.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Kt(n,c)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?o.trackChildChange(bt(n,i)):o.trackChildChange(Qt(n,i,c))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(G,(s,r)=>{n.hasChild(s)||i.trackChildChange(Kt(s,r))}),n.isLeafNode()||n.forEachChild(G,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Qt(s,r,o))}else i.trackChildChange(bt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.indexedFilter_=new Gs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xt.getStartPost_(e),this.endPost_=Xt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new j(n,i))||(i=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=M.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(G,(o,c)=>{r.matches(new j(o,c))||(s=s.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Xt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new j(n,i))||(i=M.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const c=r.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))s=s.updateImmediateChild(c.name,c.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const c=r.getNext();o<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?o++:s=s.updateImmediateChild(c.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const c=e;b(c.numChildren()===this.limit_,"");const l=new j(n,i),u=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(c.hasChild(n)){const h=c.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||c.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Qt(n,i,h)),c.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Kt(n,h));const m=c.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(bt(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return i.isEmpty()?e:d&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Kt(u.name,u.node)),r.trackChildChange(bt(n,i))),c.updateImmediateChild(n,i).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=G}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yt}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ze}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===G}copy(){const e=new Ys;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function um(t){return t.loadsAllData()?new Gs(t.getIndex()):t.hasLimit()?new cm(t):new Xt(t)}function Ro(t){const e={};if(t.isDefault())return e;let n;if(t.index_===G?n="$priority":t.index_===am?n="$value":t.index_===ht?n="$key":(b(t.index_ instanceof rm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=re(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+re(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=re(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Oo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==G&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Sl{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=dn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=zn.getListenId_(e,i),c={};this.listens_[o]=c;const l=Ro(e._queryParams);this.restRequest_(r+".json",l,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),pt(this.listens_,o)===c){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const i=zn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ro(e._queryParams),i=e._path.toString(),s=new Qo;return this.restRequest_(i+".json",n,(r,o)=>{let c=o;r===404&&(c=null,r=null),r===null?(this.onDataUpdate_(i,c,!1,null),s.resolve(c)):s.reject(new Error(c))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+au(n);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(i&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=ds(c.responseText)}catch{be("Failed to parse JSON response for "+o+": "+c.responseText)}i(null,l)}else c.status!==401&&c.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+c.status),i(c.status);i=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return{value:null,children:new Map}}function Dl(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=N(e);t.children.has(i)||t.children.set(i,qn());const s=t.children.get(i);e=U(e),Dl(s,e,n)}}function Ji(t,e,n){t.value!==null?n(e,t.value):hm(t,(i,s)=>{const r=new W(e.toString()+"/"+i);Ji(s,r,n)})}function hm(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_e(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=10*1e3,pm=30*1e3,gm=5*60*1e3;class mm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fm(e);const i=Po+(pm-Po)*Math.random();Wt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;_e(e,(s,r)=>{r>0&&He(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Wt(this.reportStats_.bind(this),Math.floor(Math.random()*2*gm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Te||(Te={}));function Al(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Te.ACK_USER_WRITE,this.source=Al()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new Gn(V(),n,this.revert)}}else return b(N(this.path)===e,"operationForChild called for unrelated child."),new Gn(U(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.source=e,this.path=n,this.type=Te.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Zt(this.source,V()):new Zt(this.source,U(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Te.OVERWRITE}operationForChild(e){return L(this.path)?new Je(this.source,V(),this.snap.getImmediateChild(e)):new Je(this.source,U(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Te.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new Je(this.source,V(),n.value):new Jt(this.source,V(),n)}else return b(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,U(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=N(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _m(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lm(o.childName,o.snapshotNode))}),Ft(t,s,"child_removed",e,i,n),Ft(t,s,"child_added",e,i,n),Ft(t,s,"child_moved",r,i,n),Ft(t,s,"child_changed",e,i,n),Ft(t,s,"value",e,i,n),s}function Ft(t,e,n,i,s,r){const o=i.filter(c=>c.type===n);o.sort((c,l)=>ym(t,c,l)),o.forEach(c=>{const l=xm(t,c,r);s.forEach(u=>{u.respondsTo(c.type)&&e.push(u.createEvent(l,t.query_))})})}function xm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ym(t,e,n){if(e.childName==null||n.childName==null)throw nn("Should only compare child_ events.");const i=new j(e.childName,e.snapshotNode),s=new j(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){return{eventCache:t,serverCache:e}}function Ut(t,e,n,i){return xi(new et(e,n,i),t.serverCache)}function Fl(t,e,n,i){return xi(t.eventCache,new et(e,n,i))}function es(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;const bm=()=>(Hi||(Hi=new me(og)),Hi);class B{constructor(e,n=bm()){this.value=e,this.children=n}static fromObject(e){let n=new B(null);return _e(e,(i,s)=>{n=n.set(new W(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(L(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(U(e),n);return r!=null?{path:ne(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=N(e),i=this.children.get(n);return i!==null?i.subtree(U(e)):new B(null)}}set(e,n){if(L(e))return new B(n,this.children);{const i=N(e),r=(this.children.get(i)||new B(null)).set(U(e),n),o=this.children.insert(i,r);return new B(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const n=N(e),i=this.children.get(n);if(i){const s=i.remove(U(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=N(e),i=this.children.get(n);return i?i.get(U(e)):null}}setTree(e,n){if(L(e))return n;{const i=N(e),r=(this.children.get(i)||new B(null)).setTree(U(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ne(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(L(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(U(e),ne(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,i){if(L(e))return this;{this.value&&i(n,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(U(e),ne(n,s),i):new B(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ne(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.writeTree_=e}static empty(){return new Oe(new B(null))}}function $t(t,e,n){if(L(e))return new Oe(new B(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ge(s,e);return r=r.updateChild(o,n),new Oe(t.writeTree_.set(s,r))}else{const s=new B(n),r=t.writeTree_.setTree(e,s);return new Oe(r)}}}function Mo(t,e,n){let i=t;return _e(n,(s,r)=>{i=$t(i,ne(e,s),r)}),i}function ko(t,e){if(L(e))return Oe.empty();{const n=t.writeTree_.setTree(e,new B(null));return new Oe(n)}}function ts(t,e){return nt(t,e)!=null}function nt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ge(n.path,e)):null}function jo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(G,(i,s)=>{e.push(new j(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new j(i,s.value))}),e}function ze(t,e){if(L(e))return t;{const n=nt(t,e);return n!=null?new Oe(new B(n)):new Oe(t.writeTree_.subtree(e))}}function ns(t){return t.writeTree_.isEmpty()}function Ct(t,e){return Vl(V(),t.writeTree_,e)}function Vl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Vl(ne(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ne(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e){return $l(e,t)}function Cm(t,e,n,i,s){b(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=$t(t.visibleWrites,e,n)),t.lastWriteId=i}function wm(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Sm(t,e){const n=t.allWrites.findIndex(c=>c.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const c=t.allWrites[o];c.visible&&(o>=n&&Im(c,i.path)?s=!1:Ee(i.path,c.path)&&(r=!0)),o--}if(s){if(r)return Em(t),!0;if(i.snap)t.visibleWrites=ko(t.visibleWrites,i.path);else{const c=i.children;_e(c,l=>{t.visibleWrites=ko(t.visibleWrites,ne(i.path,l))})}return!0}else return!1}function Im(t,e){if(t.snap)return Ee(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ee(ne(t.path,n),e))return!0;return!1}function Em(t){t.visibleWrites=Hl(t.allWrites,Tm,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tm(t){return t.visible}function Hl(t,e,n){let i=Oe.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let c;if(r.snap)Ee(n,o)?(c=ge(n,o),i=$t(i,c,r.snap)):Ee(o,n)&&(c=ge(o,n),i=$t(i,V(),r.snap.getChild(c)));else if(r.children){if(Ee(n,o))c=ge(n,o),i=Mo(i,c,r.children);else if(Ee(o,n))if(c=ge(o,n),L(c))i=Mo(i,V(),r.children);else{const l=pt(r.children,N(c));if(l){const u=l.getChild(U(c));i=$t(i,V(),u)}}}else throw nn("WriteRecord should have .snap or .children")}}return i}function Wl(t,e,n,i,s){if(!i&&!s){const r=nt(t.visibleWrites,e);if(r!=null)return r;{const o=ze(t.visibleWrites,e);if(ns(o))return n;if(n==null&&!ts(o,V()))return null;{const c=n||M.EMPTY_NODE;return Ct(o,c)}}}else{const r=ze(t.visibleWrites,e);if(!s&&ns(r))return n;if(!s&&n==null&&!ts(r,V()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Ee(u.path,e)||Ee(e,u.path))},c=Hl(t.allWrites,o,e),l=n||M.EMPTY_NODE;return Ct(c,l)}}}function Rm(t,e,n){let i=M.EMPTY_NODE;const s=nt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(G,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ze(t.visibleWrites,e);return n.forEachChild(G,(o,c)=>{const l=Ct(ze(r,new W(o)),c);i=i.updateImmediateChild(o,l)}),jo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ze(t.visibleWrites,e);return jo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Om(t,e,n,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,n);if(ts(t.visibleWrites,r))return null;{const o=ze(t.visibleWrites,r);return ns(o)?s.getChild(n):Ct(o,s.getChild(n))}}function Pm(t,e,n,i){const s=ne(e,n),r=nt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ze(t.visibleWrites,s);return Ct(o,i.getNode().getImmediateChild(n))}else return null}function Mm(t,e){return nt(t.visibleWrites,e)}function km(t,e,n,i,s,r,o){let c;const l=ze(t.visibleWrites,e),u=nt(l,V());if(u!=null)c=u;else if(n!=null)c=Ct(l,n);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const d=[],h=o.getCompare(),f=r?c.getReverseIteratorFrom(i,o):c.getIteratorFrom(i,o);let p=f.getNext();for(;p&&d.length<s;)h(p,i)!==0&&d.push(p),p=f.getNext();return d}else return[]}function jm(){return{visibleWrites:Oe.empty(),allWrites:[],lastWriteId:-1}}function Yn(t,e,n,i){return Wl(t.writeTree,t.treePath,e,n,i)}function Zs(t,e){return Rm(t.writeTree,t.treePath,e)}function No(t,e,n,i){return Om(t.writeTree,t.treePath,e,n,i)}function Kn(t,e){return Mm(t.writeTree,ne(t.treePath,e))}function Nm(t,e,n,i,s,r){return km(t.writeTree,t.treePath,e,n,i,s,r)}function Js(t,e,n){return Pm(t.writeTree,t.treePath,e,n)}function Ul(t,e){return $l(ne(t.treePath,e),t.writeTree)}function $l(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Qt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Kt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,bt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Qt(i,e.snapshotNode,s.oldSnap));else throw nn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Bl=new Dm;class er{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Js(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tt(this.viewCache_),r=Nm(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){return{filter:t}}function Fm(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Vm(t,e,n,i,s){const r=new Lm;let o,c;if(n.type===Te.OVERWRITE){const u=n;u.source.fromUser?o=is(t,e,u.path,u.snap,i,s,r):(b(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered()&&!L(u.path),o=Qn(t,e,u.path,u.snap,i,s,c,r))}else if(n.type===Te.MERGE){const u=n;u.source.fromUser?o=Wm(t,e,u.path,u.children,i,s,r):(b(u.source.fromServer,"Unknown source."),c=u.source.tagged||e.serverCache.isFiltered(),o=ss(t,e,u.path,u.children,i,s,c,r))}else if(n.type===Te.ACK_USER_WRITE){const u=n;u.revert?o=Bm(t,e,u.path,i,s,r):o=Um(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===Te.LISTEN_COMPLETE)o=$m(t,e,n.path,i,r);else throw nn("Unknown operation type: "+n.type);const l=r.getChanges();return Hm(e,o,l),{viewCache:o,changes:l}}function Hm(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=es(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ll(es(e)))}}function zl(t,e,n,i,s,r){const o=e.eventCache;if(Kn(i,n)!=null)return e;{let c,l;if(L(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tt(e),d=u instanceof M?u:M.EMPTY_NODE,h=Zs(i,d);c=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Yn(i,tt(e));c=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=N(n);if(u===".priority"){b(qe(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=No(i,n,d,l);h!=null?c=t.filter.updatePriority(d,h):c=o.getNode()}else{const d=U(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=No(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Js(i,u,e.serverCache);h!=null?c=t.filter.updateChild(o.getNode(),u,h,d,s,r):c=o.getNode()}}return Ut(e,c,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function Qn(t,e,n,i,s,r,o,c){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(L(n))u=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);u=d.updateFullNode(l.getNode(),p,null)}else{const p=N(n);if(!l.isCompleteForPath(n)&&qe(n)>1)return e;const g=U(n),v=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?u=d.updatePriority(l.getNode(),v):u=d.updateChild(l.getNode(),p,v,g,Bl,null)}const h=Fl(e,u,l.isFullyInitialized()||L(n),d.filtersNodes()),f=new er(s,h,r);return zl(t,h,n,s,f,c)}function is(t,e,n,i,s,r,o){const c=e.eventCache;let l,u;const d=new er(s,e,r);if(L(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ut(e,u,!0,t.filter.filtersNodes());else{const h=N(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ut(e,u,c.isFullyInitialized(),c.isFiltered());else{const f=U(n),p=c.getNode().getImmediateChild(h);let g;if(L(f))g=i;else{const m=d.getCompleteChild(h);m!=null?El(f)===".priority"&&m.getChild(Rl(f)).isEmpty()?g=m:g=m.updateChild(f,i):g=M.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(c.getNode(),h,g,f,d,o);l=Ut(e,m,c.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lo(t,e){return t.eventCache.isCompleteForChild(e)}function Wm(t,e,n,i,s,r,o){let c=e;return i.foreach((l,u)=>{const d=ne(n,l);Lo(e,N(d))&&(c=is(t,c,d,u,s,r,o))}),i.foreach((l,u)=>{const d=ne(n,l);Lo(e,N(d))||(c=is(t,c,d,u,s,r,o))}),c}function Do(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ss(t,e,n,i,s,r,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;L(n)?u=i:u=new B(null).setTree(n,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Do(t,p,f);l=Qn(t,l,new W(h),g,s,r,o,c)}}),u.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=Do(t,g,f);l=Qn(t,l,new W(h),m,s,r,o,c)}}),l}function Um(t,e,n,i,s,r,o){if(Kn(s,n)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(L(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qn(t,e,n,l.getNode().getChild(n),s,r,c,o);if(L(n)){let u=new B(null);return l.getNode().forEachChild(ht,(d,h)=>{u=u.set(new W(d),h)}),ss(t,e,n,u,s,r,c,o)}else return e}else{let u=new B(null);return i.foreach((d,h)=>{const f=ne(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),ss(t,e,n,u,s,r,c,o)}}function $m(t,e,n,i,s){const r=e.serverCache,o=Fl(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return zl(t,o,n,i,Bl,s)}function Bm(t,e,n,i,s,r){let o;if(Kn(i,n)!=null)return e;{const c=new er(i,e,s),l=e.eventCache.getNode();let u;if(L(n)||N(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yn(i,tt(e));else{const h=e.serverCache.getNode();b(h instanceof M,"serverChildren would be complete if leaf node"),d=Zs(i,h)}d=d,u=t.filter.updateFullNode(l,d,r)}else{const d=N(n);let h=Js(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?u=t.filter.updateChild(l,d,h,U(n),c,r):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,M.EMPTY_NODE,U(n),c,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yn(i,tt(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Kn(i,V())!=null,Ut(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gs(i.getIndex()),r=um(i);this.processor_=Am(r);const o=n.serverCache,c=n.eventCache,l=s.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(M.EMPTY_NODE,c.getNode(),null),d=new et(l,o.isFullyInitialized(),s.filtersNodes()),h=new et(u,c.isFullyInitialized(),r.filtersNodes());this.viewCache_=xi(h,d),this.eventGenerator_=new vm(this.query_)}get query(){return this.query_}}function qm(t){return t.viewCache_.serverCache.getNode()}function Gm(t,e){const n=tt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(N(e)).isEmpty())?n.getChild(e):null}function Ao(t){return t.eventRegistrations_.length===0}function Ym(t,e){t.eventRegistrations_.push(e)}function Fo(t,e,n){const i=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Vo(t,e,n,i){e.type===Te.MERGE&&e.source.queryId!==null&&(b(tt(t.viewCache_),"We should always have a full cache before handling merges"),b(es(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Vm(t.processor_,s,e,n,i);return Fm(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ql(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Km(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(G,(r,o)=>{i.push(bt(r,o))}),n.isFullyInitialized()&&i.push(Ll(n.getNode())),ql(t,i,n.getNode(),e)}function ql(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return _m(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn;class Qm{constructor(){this.views=new Map}}function Xm(t){b(!Xn,"__referenceConstructor has already been defined"),Xn=t}function Zm(){return b(Xn,"Reference.ts has not been loaded"),Xn}function Jm(t){return t.views.size===0}function tr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return b(r!=null,"SyncTree gave us an op for an invalid query."),Vo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Vo(o,e,n,i));return r}}function ev(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let c=Yn(n,s?i:null),l=!1;c?l=!0:i instanceof M?(c=Zs(n,i),l=!1):(c=M.EMPTY_NODE,l=!1);const u=xi(new et(c,l,!1),new et(i,s,!1));return new zm(e,u)}return o}function tv(t,e,n,i,s,r){const o=ev(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ym(o,n),Km(o,n)}function nv(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const c=Ge(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(Fo(u,n,i)),Ao(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(Fo(l,n,i)),Ao(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return c&&!Ge(t)&&r.push(new(Zm())(e._repo,e._path)),{removed:r,events:o}}function Gl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ft(t,e){let n=null;for(const i of t.views.values())n=n||Gm(i,e);return n}function Yl(t,e){if(e._queryParams.loadsAllData())return yi(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Kl(t,e){return Yl(t,e)!=null}function Ge(t){return yi(t)!=null}function yi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;function iv(t){b(!Zn,"__referenceConstructor has already been defined"),Zn=t}function sv(){return b(Zn,"Reference.ts has not been loaded"),Zn}let rv=1;class Ho{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=jm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ov(t,e,n,i,s){return Cm(t.pendingWriteTree_,e,n,i,s),s?pn(t,new Je(Al(),e,n)):[]}function ct(t,e,n=!1){const i=wm(t.pendingWriteTree_,e);if(Sm(t.pendingWriteTree_,e)){let r=new B(null);return i.snap!=null?r=r.set(V(),!0):_e(i.children,o=>{r=r.set(new W(o),!0)}),pn(t,new Gn(i.path,r,n))}else return[]}function bi(t,e,n){return pn(t,new Je(Ks(),e,n))}function av(t,e,n){const i=B.fromObject(n);return pn(t,new Jt(Ks(),e,i))}function lv(t,e){return pn(t,new Zt(Ks(),e))}function cv(t,e,n){const i=nr(t,n);if(i){const s=ir(i),r=s.path,o=s.queryId,c=ge(r,e),l=new Zt(Qs(o),c);return sr(t,r,l)}else return[]}function rs(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let c=[];if(o&&(e._queryIdentifier==="default"||Kl(o,e))){const l=nv(o,e,n,i);Jm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(c=l.events,!s){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,p)=>Ge(p));if(d&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=hv(f);for(let g=0;g<p.length;++g){const m=p[g],v=m.query,x=Jl(t,m);t.listenProvider_.startListening(Bt(v),Jn(t,v),x.hashFn,x.onComplete)}}}!h&&u.length>0&&!i&&(d?t.listenProvider_.stopListening(Bt(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Ci(f));t.listenProvider_.stopListening(Bt(f),p)}))}fv(t,u)}return c}function uv(t,e,n,i){const s=nr(t,i);if(s!=null){const r=ir(s),o=r.path,c=r.queryId,l=ge(o,e),u=new Je(Qs(c),l,n);return sr(t,o,u)}else return[]}function dv(t,e,n,i){const s=nr(t,i);if(s){const r=ir(s),o=r.path,c=r.queryId,l=ge(o,e),u=B.fromObject(n),d=new Jt(Qs(c),l,u);return sr(t,o,d)}else return[]}function Wo(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const g=ge(f,s);r=r||ft(p,g),o=o||Ge(p)});let c=t.syncPointTree_.get(s);c?(o=o||Ge(c),r=r||ft(c,V())):(c=new Qm,t.syncPointTree_=t.syncPointTree_.set(s,c));let l;r!=null?l=!0:(l=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const m=ft(g,V());m&&(r=r.updateImmediateChild(p,m))}));const u=Kl(c,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ci(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=pv();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=Xs(t.pendingWriteTree_,s);let h=tv(c,e,n,d,r,l);if(!u&&!o&&!i){const f=Yl(c,e);h=h.concat(gv(t,e,f))}return h}function Ql(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,c)=>{const l=ge(o,e),u=ft(c,l);if(u)return u});return Wl(s,e,r,n,!0)}function pn(t,e){return Xl(e,t.syncPointTree_,null,Xs(t.pendingWriteTree_,V()))}function Xl(t,e,n,i){if(L(t.path))return Zl(t,e,n,i);{const s=e.get(V());n==null&&s!=null&&(n=ft(s,V()));let r=[];const o=N(t.path),c=t.operationForChild(o),l=e.children.get(o);if(l&&c){const u=n?n.getImmediateChild(o):null,d=Ul(i,o);r=r.concat(Xl(c,l,u,d))}return s&&(r=r.concat(tr(s,t,i,n))),r}}function Zl(t,e,n,i){const s=e.get(V());n==null&&s!=null&&(n=ft(s,V()));let r=[];return e.children.inorderTraversal((o,c)=>{const l=n?n.getImmediateChild(o):null,u=Ul(i,o),d=t.operationForChild(o);d&&(r=r.concat(Zl(d,c,l,u)))}),s&&(r=r.concat(tr(s,t,i,n))),r}function Jl(t,e){const n=e.query,i=Jn(t,n);return{hashFn:()=>(qm(e)||M.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?cv(t,n._path,i):lv(t,n._path);{const r=cg(s,n);return rs(t,n,null,r)}}}}function Jn(t,e){const n=Ci(e);return t.queryToTagMap.get(n)}function Ci(t){return t._path.toString()+"$"+t._queryIdentifier}function nr(t,e){return t.tagToQueryMap.get(e)}function ir(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function sr(t,e,n){const i=t.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=Xs(t.pendingWriteTree_,e);return tr(i,n,s,null)}function hv(t){return t.fold((e,n,i)=>{if(n&&Ge(n))return[yi(n)];{let s=[];return n&&(s=Gl(n)),_e(i,(r,o)=>{s=s.concat(o)}),s}})}function Bt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sv())(t._repo,t._path):t}function fv(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Ci(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function pv(){return rv++}function gv(t,e,n){const i=e._path,s=Jn(t,e),r=Jl(t,n),o=t.listenProvider_.startListening(Bt(e),s,r.hashFn,r.onComplete),c=t.syncPointTree_.subtree(i);if(s)b(!Ge(c.value),"If we're adding a query, it shouldn't be shadowed");else{const l=c.fold((u,d,h)=>{if(!L(u)&&d&&Ge(d))return[yi(d).query];{let f=[];return d&&(f=f.concat(Gl(d).map(p=>p.query))),_e(h,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Bt(d),Jn(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rr(n)}node(){return this.node_}}class or{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new or(this.syncTree_,n)}node(){return Ql(this.syncTree_,this.path_)}}const mv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uo=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _v(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},_v=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},xv=function(t,e,n,i){return ar(e,new or(n,t),i)},yv=function(t,e,n){return ar(t,new rr(e),n)};function ar(t,e,n){const i=t.getPriority().val(),s=Uo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,c=Uo(o.getValue(),e,n);return c!==o.getValue()||s!==o.getPriority().val()?new ie(c,he(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ie(s))),o.forEachChild(G,(c,l)=>{const u=ar(l,e.getImmediateChild(c),n);u!==l&&(r=r.updateImmediateChild(c,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function cr(t,e){let n=e instanceof W?e:new W(e),i=t,s=N(n);for(;s!==null;){const r=pt(i.node.children,s)||{children:{},childCount:0};i=new lr(s,i,r),n=U(n),s=N(n)}return i}function It(t){return t.node.value}function ec(t,e){t.node.value=e,os(t)}function tc(t){return t.node.childCount>0}function bv(t){return It(t)===void 0&&!tc(t)}function wi(t,e){_e(t.node.children,(n,i)=>{e(new lr(n,t,i))})}function nc(t,e,n,i){n&&!i&&e(t),wi(t,s=>{nc(s,e,!0,i)}),n&&i&&e(t)}function Cv(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gn(t){return new W(t.parent===null?t.name:gn(t.parent)+"/"+t.name)}function os(t){t.parent!==null&&wv(t.parent,t.name,t)}function wv(t,e,n){const i=bv(n),s=He(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,os(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,os(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=/[\[\].#$\/\u0000-\u001F\u007F]/,Iv=/[\[\].#$\u0000-\u001F\u007F]/,Wi=10*1024*1024,ic=function(t){return typeof t=="string"&&t.length!==0&&!Sv.test(t)},sc=function(t){return typeof t=="string"&&t.length!==0&&!Iv.test(t)},Ev=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sc(t)},rc=function(t,e,n){const i=n instanceof W?new Ug(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ke(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ke(i)+" with contents = "+e.toString());if(rl(e))throw new Error(t+"contains "+e.toString()+" "+Ke(i));if(typeof e=="string"&&e.length>Wi/3&&ti(e)>Wi)throw new Error(t+"contains a string greater than "+Wi+" utf8 bytes "+Ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(_e(e,(o,c)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ic(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$g(i,o),rc(t,c,i),Bg(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ke(i)+" in addition to actual children.")}},oc=function(t,e,n,i){if(!sc(n))throw new Error(Yo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tv=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oc(t,e,n)},Rv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ic(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ev(n))throw new Error(Yo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ac(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Bs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function lc(t,e,n){ac(t,n),cc(t,i=>Bs(i,e))}function it(t,e,n){ac(t,n),cc(t,i=>Ee(i,e)||Ee(e,i))}function cc(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Pv(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ht&&de("event: "+n.toString()),hn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="repo_interrupt",kv=25;class jv{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ov,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qn(),this.transactionQueueTree_=new lr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nv(t,e,n){if(t.stats_=Us(t.repoInfo_),t.forceRestClient_||fg())t.server_=new zn(t.repoInfo_,(i,s,r,o)=>{$o(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ae(t.repoInfo_,e,(i,s,r,o)=>{$o(t,i,s,r,o)},i=>{Bo(t,i)},i=>{Dv(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=_g(t.repoInfo_,()=>new mm(t.stats_,t.server_)),t.infoData_=new dm,t.infoSyncTree_=new Ho({startListening:(i,s,r,o)=>{let c=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(c=bi(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),ur(t,"connected",!1),t.serverSyncTree_=new Ho({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(c,l)=>{const u=o(c,l);it(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Lv(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uc(t){return mv({timestamp:Lv(t)})}function $o(t,e,n,i,s){t.dataUpdateCount++;const r=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=kn(n,u=>he(u));o=dv(t.serverSyncTree_,r,l,s)}else{const l=he(n);o=uv(t.serverSyncTree_,r,l,s)}else if(i){const l=kn(n,u=>he(u));o=av(t.serverSyncTree_,r,l)}else{const l=he(n);o=bi(t.serverSyncTree_,r,l)}let c=r;o.length>0&&(c=hr(t,r)),it(t.eventQueue_,c,o)}function Bo(t,e){ur(t,"connected",e),e===!1&&Fv(t)}function Dv(t,e){_e(e,(n,i)=>{ur(t,n,i)})}function ur(t,e,n){const i=new W("/.info/"+e),s=he(n);t.infoData_.updateSnapshot(i,s);const r=bi(t.infoSyncTree_,i,s);it(t.eventQueue_,i,r)}function Av(t){return t.nextWriteId_++}function Fv(t){dc(t,"onDisconnectEvents");const e=uc(t),n=qn();Ji(t.onDisconnect_,V(),(s,r)=>{const o=xv(s,r,t.serverSyncTree_,e);Dl(n,s,o)});let i=[];Ji(n,V(),(s,r)=>{i=i.concat(bi(t.serverSyncTree_,s,r));const o=Bv(t,s);hr(t,o)}),t.onDisconnect_=qn(),it(t.eventQueue_,V(),i)}function Vv(t,e,n){let i;N(e._path)===".info"?i=Wo(t.infoSyncTree_,e,n):i=Wo(t.serverSyncTree_,e,n),lc(t.eventQueue_,e._path,i)}function Hv(t,e,n){let i;N(e._path)===".info"?i=rs(t.infoSyncTree_,e,n):i=rs(t.serverSyncTree_,e,n),lc(t.eventQueue_,e._path,i)}function Wv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Mv)}function dc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),de(n,...e)}function hc(t,e,n){return Ql(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function dr(t,e=t.transactionQueueTree_){if(e||Si(t,e),It(e)){const n=pc(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Uv(t,gn(e),n)}else tc(e)&&wi(e,n=>{dr(t,n)})}function Uv(t,e,n){const i=n.map(u=>u.currentWriteId),s=hc(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];b(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=ge(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const c=r.val(!0),l=e;t.server_.put(l.toString(),c,u=>{dc(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ct(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Si(t,cr(t.transactionQueueTree_,e)),dr(t,t.transactionQueueTree_),it(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)hn(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{be("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}hr(t,e)}},o)}function hr(t,e){const n=fc(t,e),i=gn(n),s=pc(t,n);return $v(t,s,i),i}function $v(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],u=ge(n,l.path);let d=!1,h;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(ct(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kv)d=!0,h="maxretry",s=s.concat(ct(t.serverSyncTree_,l.currentWriteId,!0));else{const f=hc(t,l.path,o);l.currentInputSnapshot=f;const p=e[c].update(f.val());if(p!==void 0){rc("transaction failed: Data returned ",p,l.path);let g=he(p);typeof p=="object"&&p!=null&&He(p,".priority")||(g=g.updatePriority(f.getPriority()));const v=l.currentWriteId,x=uc(t),S=yv(g,f,x);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=Av(t),o.splice(o.indexOf(v),1),s=s.concat(ov(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(ct(t.serverSyncTree_,v,!0))}else d=!0,h="nodata",s=s.concat(ct(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,s),s=[],d&&(e[c].status=2,function(f){setTimeout(f,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(h==="nodata"?i.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):i.push(()=>e[c].onComplete(new Error(h),!1,null))))}Si(t,t.transactionQueueTree_);for(let c=0;c<i.length;c++)hn(i[c]);dr(t,t.transactionQueueTree_)}function fc(t,e){let n,i=t.transactionQueueTree_;for(n=N(e);n!==null&&It(i)===void 0;)i=cr(i,n),e=U(e),n=N(e);return i}function pc(t,e){const n=[];return gc(t,e,n),n.sort((i,s)=>i.order-s.order),n}function gc(t,e,n){const i=It(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);wi(e,s=>{gc(t,s,n)})}function Si(t,e){const n=It(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ec(e,n.length>0?n:void 0)}wi(e,i=>{Si(t,i)})}function Bv(t,e){const n=gn(fc(t,e)),i=cr(t.transactionQueueTree_,e);return Cv(i,s=>{Ui(t,s)}),Ui(t,i),nc(i,s=>{Ui(t,s)}),n}function Ui(t,e){const n=It(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ct(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ec(e,void 0):n.length=r+1,it(t.eventQueue_,gn(e),s);for(let o=0;o<i.length;o++)hn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function qv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const zo=function(t,e){const n=Gv(t),i=n.namespace;n.domain==="firebase.com"&&Ve(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ve("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sg();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vl(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new W(n.pathString)}},Gv=function(t){let e="",n="",i="",s="",r="",o=!0,c="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(c=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=zv(t.substring(d,h)));const f=qv(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:c,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class Kv{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fr{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return L(this._path)?null:El(this._path)}get ref(){return new Ye(this._repo,this._path)}get _queryIdentifier(){const e=Oo(this._queryParams),n=Hs(e);return n==="{}"?"default":n}get _queryObject(){return Oo(this._queryParams)}isEqual(e){if(e=tn(e),!(e instanceof fr))return!1;const n=this._repo===e._repo,i=Bs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wg(this._path)}}class Ye extends fr{constructor(e,n){super(e,n,new Ys,!1)}get parent(){const e=Rl(this._path);return e===null?null:new Ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ei{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),i=as(this.ref,e);return new ei(this._node.getChild(n),i,G)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ei(s,as(this.ref,i),G)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function c_(t,e){return t=tn(t),t._checkNotDeleted("ref"),e!==void 0?as(t._root,e):t._root}function as(t,e){return t=tn(t),N(t._path)===null?Tv("child","path",e):oc("child","path",e),new Ye(t._repo,ne(t._path,e))}class pr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Yv("value",this,new ei(e.snapshotNode,new Ye(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Kv(this,e,n):null}matches(e){return e instanceof pr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Xv(t,e,n,i,s){const r=new Qv(n,void 0),o=new pr(r);return Vv(t._repo,t,o),()=>Hv(t._repo,t,o)}function u_(t,e,n,i){return Xv(t,"value",e)}function d_(t,...e){let n=tn(t);for(const i of e)n=i._apply(n);return n}Xm(Ye);iv(Ye);/**
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
 */const Zv="FIREBASE_DATABASE_EMULATOR_HOST",ls={};let Jv=!1;function e_(t,e,n,i){t.repoInfo_=new vl(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function t_(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ve("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),de("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zo(r,s),c=o.repoInfo,l;typeof process<"u"&&uo&&(l=uo[Zv]),l?(r=`http://${l}?ns=${c.namespace}`,o=zo(r,s),c=o.repoInfo):o.repoInfo.secure;const u=new gg(t.name,t.options,e);Rv("Invalid Firebase Database URL",o),L(o.path)||Ve("Database URL must point to the root of a Firebase Database (not including a child path).");const d=i_(c,t,u,new pg(t.name,n));return new s_(d,t)}function n_(t,e){const n=ls[e];(!n||n[t.key]!==t)&&Ve(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Wv(t),delete n[t.key]}function i_(t,e,n,i){let s=ls[e.name];s||(s={},ls[e.name]=s);let r=s[t.toURLString()];return r&&Ve("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jv(t,Jv,n,i),s[t.toURLString()]=r,r}class s_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ye(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ve("Cannot call "+e+" on a deleted database.")}}function h_(t=Qc(),e){const n=Yc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Kc("database");i&&r_(n,...i)}return n}function r_(t,e,n,i={}){t=tn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ve("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ve('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Pn(Pn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Xc(i.mockUserToken,t.app.options.projectId);r=new Pn(o)}e_(s,e,n,r)}/**
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
 */function o_(t){Zp(cu),Zc(new Jc("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return t_(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Tr(ho,fo,t),Tr(ho,fo,"esm2017")}Ae.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ae.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};o_();const f_=C.section`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  max-width: 1184px;
`,qo=t=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:31,height:30,fill:"none",...t,children:a.jsx("path",{fill:"#F4C550",d:"M25.445 0H5.368A4.967 4.967 0 0 0 .407 4.961V25.04A4.967 4.967 0 0 0 5.368 30h20.077a4.967 4.967 0 0 0 4.962-4.961V4.96A4.967 4.967 0 0 0 25.445 0Zm.302 23.165h-7.089a2.904 2.904 0 0 1-2.72 1.902 2.904 2.904 0 0 1-2.722-1.902h-8.15a1 1 0 1 1 0-2h8.15a2.904 2.904 0 0 1 2.721-1.902c1.249 0 2.312.794 2.721 1.902h7.09a1 1 0 1 1 0 2Zm0-7.165H12.118a2.904 2.904 0 0 1-2.72 1.902A2.904 2.904 0 0 1 6.676 16h-1.61a1 1 0 1 1 0-2h1.61a2.904 2.904 0 0 1 2.72-1.902c1.25 0 2.313.794 2.722 1.902h13.63a1 1 0 1 1-.002 2Zm0-7.165h-2.746a2.905 2.905 0 0 1-2.72 1.902 2.904 2.904 0 0 1-2.721-1.902H5.066a1 1 0 1 1 0-2H17.56a2.904 2.904 0 0 1 2.72-1.903c1.249 0 2.313.794 2.721 1.903h2.746a1 1 0 1 1 0 2Z"})}),p_=({data:t,setTeachersFilter:e})=>{const[n,i]=_.useState(!1),[s,r]=_.useState(!1),o=()=>{i(!n),r(!0)},c=()=>{i(!1),r(!1)};return a.jsxs("div",{children:[a.jsxs(a.Fragment,{children:[s&&a.jsx(Mn,{closeModal:c}),i&&a.jsx(a.Fragment,{children:a.jsxs(cp,{className:n?"open":"",children:[a.jsx(dp,{data:t,setTeachersFilter:e}),a.jsx(up,{children:a.jsxs(io,{onClick:c,children:[a.jsx(qo,{}),a.jsx("span",{children:"Close Filter"})]})})]})})]}),a.jsxs(io,{onClick:o,children:[a.jsx(qo,{}),a.jsx("span",{children:"Filter"})]})]})};export{f_ as S,p_ as T,dp as a,l_ as b,h_ as g,u_ as o,d_ as q,c_ as r};
