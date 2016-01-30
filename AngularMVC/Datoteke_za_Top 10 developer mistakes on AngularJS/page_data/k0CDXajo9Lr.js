/*!CK:1057379835!*//*1453973634,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WfebW"]); }

__d('isNode',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return !!(i&&(typeof Node==='function'?i instanceof Node:typeof i==='object'&&typeof i.nodeType==='number'&&typeof i.nodeName==='string'));}f.exports=h;},null);
__d('isTextNode',['isNode'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){return h(j)&&j.nodeType==3;}f.exports=i;},null);
__d('containsNode',['isTextNode'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){if(!j||!k){return false;}else if(j===k){return true;}else if(h(j)){return false;}else if(h(k)){return i(j,k.parentNode);}else if(j.contains){return j.contains(k);}else if(j.compareDocumentPosition){return !!(j.compareDocumentPosition(k)&16);}else return false;}f.exports=i;},null);
__d('isElementNode',['isNode'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){return h(j)&&j.nodeType==1;}f.exports=i;},null);
__d('getElementText',['isElementNode','isTextNode'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=null;function k(l){if(i(l)){return l.data;}else if(h(l)){if(j===null){var m=document.createElement('div');j=m.textContent!=null?'textContent':'innerText';}return l[j];}else return '';}f.exports=k;},null);
__d("nativeRequestAnimationFrame",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame;f.exports=h;},null);
__d('requestAnimationFramePolyfill',['emptyFunction','nativeRequestAnimationFrame'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=0,k=i||function(l){var m=Date.now(),n=Math.max(0,16-(m-j));j=m+n;return b.setTimeout(function(){l(Date.now());},n);};k(h);f.exports=k;},null);
__d('requestAnimationFrameAcrossTransitions',['TimeSlice','requestAnimationFramePolyfill'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];k[0]=h.guard(k[0],'requestAnimationFrame');return i.apply(b,k);};},null);
__d('requestAnimationFrame',['TimerStorage','requestAnimationFrameAcrossTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();f.exports=(function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];var m,n=k[0];k[0]=function(){h.unset(h.ANIMATION_FRAME,m);Function.prototype.apply.call(n,this,arguments);};m=i.apply(b,k);h.set(h.ANIMATION_FRAME,m);return m;}).bind(this);},null);
__d('DOMQuery',['CSS','containsNode','createArrayFromMixed','createObjectFrom','ge','isElementNode','isNode'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();function o(q,r){return q.hasAttribute?q.hasAttribute(r):q.getAttribute(r)!==null;}var p={find:function(q,r){var s=p.scry(q,r);return s[0];},findPushSafe:function(q,r,s){var t=p.scry(q,r),u=p.scry(q,s),v;if(t.length===1&&u.length===1&&t[0]===u[0]){v=t;}else v=t.concat(u);return v[0];},scry:function(q,r){if(!q||!q.getElementsByTagName)return [];var s=r.split(' '),t=[q];for(var u=0;u<s.length;u++){if(t.length===0)break;if(s[u]==='')continue;var v=s[u],w=s[u],x=[],y=false;if(v.charAt(0)=='^')if(u===0){y=true;v=v.slice(1);}else return [];v=v.replace(/\[(?:[^=\]]*=(?:"[^"]*"|'[^']*'))?|[.#]/g,' $&');var z=v.split(' '),aa=z[0]||'*',ba=aa=='*',ca=z[1]&&z[1].charAt(0)=='#';if(ca){var da=l(z[1].slice(1),q,aa);if(da&&(ba||da.tagName.toLowerCase()==aa))for(var ea=0;ea<t.length;ea++)if(y&&p.contains(da,t[ea])){x=[da];break;}else if(document==t[ea]||p.contains(t[ea],da)&&t[ea]!==da){x=[da];break;}}else{var fa=[],ga=t.length,ha,ia=!y&&w.indexOf('[')<0&&document.querySelectorAll;for(var ja=0;ja<ga;ja++){if(y){ha=[];var ka=t[ja].parentNode;while(m(ka)){if(ba||ka.tagName.toLowerCase()==aa)ha.push(ka);ka=ka.parentNode;}}else if(ia){ha=t[ja].querySelectorAll(w);}else ha=t[ja].getElementsByTagName(aa);var la=ha.length;for(var ma=0;ma<la;ma++)fa.push(ha[ma]);}if(!ia)for(var na=1;na<z.length;na++){var oa=z[na],pa=oa.charAt(0)=='.',qa=oa.substring(1);for(ja=0;ja<fa.length;ja++){var ra=fa[ja];if(!ra||ra.nodeType!==1)continue;if(pa){if(!h.hasClass(ra,qa))delete fa[ja];continue;}else{var sa=oa.slice(1,oa.length-1),ta=sa.indexOf('=');if(ta<0){if(!o(ra,sa)){delete fa[ja];continue;}}else{var ua=sa.substr(0,ta),va=sa.substr(ta+1);va=va.slice(1,va.length-1);if(ra.getAttribute(ua)!=va){delete fa[ja];continue;}}}}}for(ja=0;ja<fa.length;ja++)if(fa[ja]){x.push(fa[ja]);if(y)break;}}t=x;}return t;},getSelection:function(){var q=window.getSelection,r=document.selection;if(q){return q()+'';}else if(r)return r.createRange().text;return null;},contains:function(q,r){q=l(q);r=l(r);typeof q==='string'||typeof r==='string';return i(q,r);},getRootElement:function(){var q=null;if(window.Quickling&&Quickling.isActive())q=l('content');return q||document.body;},isNodeOfType:function(q,r){var s=j(r).join('|').toUpperCase().split('|'),t=k(s);return n(q)&&q.nodeName in t;},isInputNode:function(q){return p.isNodeOfType(q,['input','textarea'])||q.contentEditable==='true';}};f.exports=p;},null);
__d('csx',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){throw new Error('csx: Unexpected class selector transformation.');}f.exports=h;},null);
__d('cx',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){throw new Error('cx: Unexpected class transformation.');}f.exports=h;},null);