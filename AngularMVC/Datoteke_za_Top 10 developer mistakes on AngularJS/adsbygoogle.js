(function(){var n=this,ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ca:da;return q.apply(null,arguments)},r=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},u=Date.now||function(){return+new Date},ea=function(a,b){function c(){}c.prototype=b.prototype;a.Za=b.prototype;a.prototype=new c;a.Xa=function(a,c,g){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[c].apply(a,f)}};var fa=(new Date).getTime();var w=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ga=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},ha=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ia=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ja=function(a,b){if(!a)return b;var c=a.match(ia);return c?c[0]:b};var ka=ga("101",-1),la=ga("98",0),na=w("0.05"),oa=w("0.001"),pa=w("0.0"),qa=w(""),ra=w("0.001"),sa=ha("true",!0),ta=w(""),ua=w("0.001"),va=w("0.0"),
wa=w(""),xa=w("0.1");var ya=function(){return"r20160126"},za=ha("false",!1),Aa=ha("false",!1),Ba=ha("false",!1),Ca=Ba||!Aa;var Da=function(a,b){this.width=a;this.height=b};Da.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};Da.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Ea=function(a){Ea[" "](a);return a};Ea[" "]=function(){};var Fa=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ea(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Ga=function(a,b){var c=a.createElement("script");c.src=b;var d=a.getElementsByTagName("script")[0];return d&&d.parentNode?(d.parentNode.insertBefore(c,d),c):null},Ha=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},y=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Ia(window),a[Math.floor(c*a.length)]}return null},
Ia=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ka=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},La=/^([0-9.]+)px$/,Ma=/^(-?[0-9.]{1,30})$/,Na=function(a){return Ma.test(a)&&(a=Number(a),!isNaN(a))?a:null},Oa=function(a){return(a=
La.exec(a))?+a[1]:null};var Pa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var Sa=function(a,b,c,d,e,g){try{if((d?a.da:Math.random())<(e||a.V)){var f=a.T+b+Qa(c),f=f.substring(0,2E3);"undefined"===typeof g?Ra(f):Ra(f,g)}}catch(h){}},Qa=function(a){var b="";Ja(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},Ra=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};Pa(c,"load",d);Pa(c,"error",d)}c.src=a;n.google_image_requests.push(c)};var Ta=function(a,b,c){this.aa=a;this.X=b;this.H=c;this.G=null;this.W=this.u;this.ja=!1},Ua=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},Va=function(a){z.G=a},Xa=function(a,b,c,d,e,g){var f;try{f=c()}catch(k){var h=a.H;try{var l=Wa(k),h=(g||a.W).call(a,b,l,void 0,d)}catch(m){a.u("pAR",m)}if(!h)throw k;}finally{if(e)try{e()}catch(k){}}return f},B=function(a,b,c){var d=z;return function(){var e=arguments;return Xa(d,a,function(){return b.apply(void 0,e)},void 0,c)}};
Ta.prototype.u=function(a,b,c,d,e){var g={};g.context=a;b instanceof Ua||(b=Wa(b));g.msg=b.message.substring(0,512);b.fileName&&(g.file=b.fileName);0<b.lineNumber&&(g.line=b.lineNumber.toString());a=n.document;g.url=a.URL.substring(0,512);g.ref=a.referrer.substring(0,512);Ya(this,g,d);Sa(this.aa,e||this.X,g,this.ja,c);return this.H};
var Ya=function(a,b,c){if(a.G)try{a.G(b)}catch(d){}if(c)try{c(b)}catch(d){}},Wa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(g){b=d}}return new Ua(b,a.fileName,a.lineNumber)};var Za=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},$a=/&/g,ab=/</g,bb=/>/g,cb=/"/g,db=/'/g,eb=/\x00/g,fb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},gb={"'":"\\'"},hb=function(a,b){return a<b?-1:a>b?1:0};var ib=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)};var C;a:{var jb=n.navigator;if(jb){var kb=jb.userAgent;if(kb){C=kb;break a}}C=""}var F=function(a){return-1!=C.indexOf(a)};var lb=function(){return F("Opera")||F("OPR")};var mb=lb(),G=F("Trident")||F("MSIE"),nb=F("Edge"),ob=F("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),pb=-1!=C.toLowerCase().indexOf("webkit")&&!F("Edge"),qb=function(){var a=C;if(ob)return/rv\:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a)},rb=function(){var a=n.document;return a?a.documentMode:void 0},sb=function(){if(mb&&n.opera){var a;
var b=n.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=qb())&&(a=b?b[1]:"");return G&&(b=rb(),b>parseFloat(a))?String(b):a}(),tb={},ub=function(a){if(!tb[a]){for(var b=0,c=Za(String(sb)).split("."),d=Za(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(f)||["","",""],p=k.exec(h)||["","",""];if(0==m[0].length&&0==p[0].length)break;b=hb(0==m[1].length?0:parseInt(m[1],10),0==
p[1].length?0:parseInt(p[1],10))||hb(0==m[2].length,0==p[2].length)||hb(m[2],p[2])}while(0==b)}tb[a]=0<=b}},vb=n.document,wb=vb&&G?rb()||("CSS1Compat"==vb.compatMode?parseInt(sb,10):5):void 0;var xb;if(!(xb=!ob&&!G)){var yb;if(yb=G)yb=9<=Number(wb);xb=yb}xb||ob&&ub("1.9.1");G&&ub("9");var zb=document,H=window;var Ab=Object.prototype.hasOwnProperty,Bb=function(a,b){for(var c in a)Ab.call(a,c)&&b.call(void 0,a[c],c,a)},J=function(a){return!(!a||!a.call)&&"function"===typeof a},Cb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},K=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Db=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},Eb=/(^| )adsbygoogle($| )/,Fb={"http://googleads.g.doubleclick.net":!0,
"http://pagead2.googlesyndication.com":!0,"https://googleads.g.doubleclick.net":!0,"https://pagead2.googlesyndication.com":!0},Gb=/\.google\.com(:\d+)?$/,Hb=function(){return za&&window.google_cafe_host||ja("","pagead2.googlesyndication.com")},Ib=function(a){a=za&&a.google_top_window||a.top;return Fa(a)?a:null};var Jb,z;Jb=new function(){this.T="http"+("http:"===H.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";this.V=.01;this.da=Math.random()};z=new Ta(Jb,"jserror",!0);var Lb=function(){var a=[Kb];Va(function(b){ib(a,function(a){a(b)})})},Mb=function(a,b,c,d){Xa(z,a,c,d,void 0,b)},Nb=z.u,Ob=function(a,b,c){Sa(Jb,a,b,"jserror"!=a,c,void 0)},Qb=function(a){return B("aa:reactiveTag",a,void 0)};var Rb=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var Sb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Ia(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Tb=null,Ub=function(){if(!Tb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Fa(a))b=a;else break;Tb=b}return Tb};var L={pa:{},Wa:{j:"453848100",i:"453848101"},Ea:{j:"828064124",ta:"828064125",ua:"828064172",wa:"828064173"},Da:{j:"828064127",i:"828064128"},Fa:{j:"828064170",i:"828064171"},Ia:{j:"24819308",i:"24819309",ma:"24819320",ra:"24819321"},Ha:{j:"24819330",i:"24819331"},Ka:{j:"828064162",i:"828064163"},Ja:{j:"828064164",i:"828064165",xa:"828064166"},Aa:{j:"86724438",i:"86724439"},Ba:{j:"828064190",i:"828064191"},Oa:{j:"10573505",i:"10573506"},D:{j:"10573595",i:"10573596"},Ua:{j:"10573511",i:"10573512"},
F:{j:"10573581",i:"10573582"},Pa:{j:"10573531",i:"10573532"},v:{j:"10573561",i:"10573562"},Qa:{j:"10573551",i:"10573552"},Na:{j:"312815006",i:"312815007"},C:{j:"312815106",i:"312815107"},qa:{j:"26835105",i:"26835106"},za:{j:"35923720",i:"35923721"},I:{j:"35923760",i:"35923761"},J:{j:"20040000",i:"20040001"},na:{j:"20040016",i:"20040017"},ya:{j:"828064202",i:"828064203"},La:{j:"19188000",i:"19188001"},Ma:{j:"20040026",i:"20040027"},oa:{la:"314159230",Ga:"314159231"},Ca:{Ra:"27285692",Ta:"27285712",
Sa:"27285713"},Va:{j:"111849357",va:"111849358",sa:"111849359"}};var Vb=function(){},Xb=function(a,b,c){switch(typeof b){case "string":Wb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),Xb(a,b[g],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(g=b[e],"function"!=typeof g&&
(c.push(d),Wb(e,c),c.push(":"),Xb(a,g,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Yb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Zb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Wb=function(a,b){b.push('"');b.push(a.replace(Zb,function(a){if(a in Yb)return Yb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Yb[a]=
e+b.toString(16)}));b.push('"')};var $b=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!lb()&&!F("Edge")||F("Coast")||lb()||F("Edge")||F("Silk")||F("Android"))&&!(F("iPhone")&&!F("iPod")&&!F("iPad")||F("iPad")||F("iPod"));var ac=null,bc=ob||pb&&!$b||mb||"function"==typeof n.btoa;var cc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},dc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Bb(a,function(a,d){if(null!=a){var e;try{var g=[];Xb(new Vb,a,g);e=g.join("")}catch(f){}e&&(e=e.replace(/\//g,"\\$&"),Cb(b,d,"=",e,";"))}});return b.join("")};var ec=function(a,b,c){Mb("files::getSrc",Nb,function(){if("https:"==H.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},fc=function(a,b,c){c||(c=Ca?"https":"http");return ec(a,b,c)};var O=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},gc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var hc=function(a){var b=Sb(n);a=a.mods;if(isNaN(b)||!a)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=d.max,g=d.eids;if(b>=d.min&&b<=e){if(g)for(b=g,a=n.google_ad_modifications=n.google_ad_modifications||{},a=a.loeids=a.loeids||[],c=0;c<b.length;c++)a.push(b[c]);return!0}}return!1},ic=function(a,b){a.location.href&&a.location.href.substring&&(b.url=a.location.href.substring(0,200));Ob("ama",b,.01)};var jc={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var P=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var kc=new function(){this.ba=new Rb(100,199)};var lc=function(a,b,c){return H.location&&H.location.hash=="#google_plle_"+c?c:y([b,c],a)},mc=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];return K(O(b),c)?(a.push(c),c):K(O(b),d)?(a.push(d),d):null};var nc=function(a){this.s=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.ia,this)});this.fa=a.google_iframe_oncopy},oc;var R="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(R)&&(-1!=R.indexOf("&")&&(R=R.replace($a,"&amp;")),-1!=R.indexOf("<")&&(R=R.replace(ab,"&lt;")),-1!=R.indexOf(">")&&(R=R.replace(bb,"&gt;")),-1!=R.indexOf('"')&&(R=R.replace(cb,"&quot;")),-1!=R.indexOf("'")&&(R=R.replace(db,"&#39;")),-1!=R.indexOf("\x00")&&(R=R.replace(eb,"&#0;")));oc=R;nc.prototype.set=function(a,b){this.fa.handlers[a]=b;this.s.addEventListener&&this.s.addEventListener("load",q(this.Y,this,a),!1)};
nc.prototype.Y=function(a){a=this.s.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};nc.prototype.ia=function(a,b){var c=pc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var pc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};ob||pb||G&&ub(11);var qc=!1,rc=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Cb(d,e+"="+a[e]);e="left:0;position:absolute;top:0;";qc&&(e=e+"width:"+b+"px;height:"+c+"px;");d.push('style="'+e+'"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var sc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var tc=null;var uc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var vc="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),wc=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var xc,S=function(a){this.B=[];this.s=a||window;this.o=0;this.A=null;this.S=0},yc=function(a,b){this.Z=a;this.ka=b};S.prototype.enqueue=function(a,b){0!=this.o||0!=this.B.length||b&&b!=window?this.L(a,b):(this.o=2,this.P(new yc(a,window)))};S.prototype.L=function(a,b){this.B.push(new yc(a,b||this.s));zc(this)};S.prototype.$=function(a){this.o=1;if(a){var b=q(this.O,this,!0);this.A=this.s.setTimeout(B("sjr::timeout",b,void 0),a)}};
S.prototype.O=function(a){a&&++this.S;1==this.o&&(null!=this.A&&(this.s.clearTimeout(this.A),this.A=null),this.o=0);zc(this)};S.prototype.ea=function(){return!(!window||!Array)};S.prototype.ga=function(){return this.S};S.prototype.nq=S.prototype.enqueue;S.prototype.nqa=S.prototype.L;S.prototype.al=S.prototype.$;S.prototype.rl=S.prototype.O;S.prototype.sz=S.prototype.ea;S.prototype.tc=S.prototype.ga;var zc=function(a){var b=q(a.ha,a);a.s.setTimeout(B("sjr::tryrun",b,void 0),0)};
S.prototype.ha=function(){if(0==this.o&&this.B.length){var a=this.B.shift();this.o=2;var b=q(this.P,this,a);a.ka.setTimeout(B("sjr::run",b,void 0),0);zc(this)}};S.prototype.P=function(a){this.o=0;a.Z()};
var Ac=function(a){try{return a.sz()}catch(b){return!1}},Bc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&Ac(a)&&J(a.nq)&&J(a.nqa)&&J(a.al)&&J(a.rl)},Cc=function(){if(xc&&Ac(xc))return xc;var a=Ub(),b=a.google_jobrunner;return Bc(b)?xc=b:a.google_jobrunner=xc=new S(a)},Dc=function(a,b){Cc().nq(a,b)},Ec=function(a,b){Cc().nqa(a,b)};var T=function(a){this.name="TagError";this.message=a||"";Error.captureStackTrace?Error.captureStackTrace(this,T):this.stack=Error().stack||""};ea(T,Error);
var Fc=function(){var a=Ba?"https":"http",b=Ea("script");return["<",b,' src="',fc(Hb(),["/pagead/js/",ya(),"/r20151006/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},Gc=function(a,b,c,d){return function(){var e=!1;d&&Cc().al(3E4);try{var g=a.document.getElementById(b).contentWindow;if(Fa(g)){var f=a.document.getElementById(b).contentWindow,h=f.document;
if(!h.body||!h.body.firstChild){var l=a.history.length;h.open();f.google_async_iframe_close=a.history.length>l?2:1;h.write(c)}}else{for(var k=a.document.getElementById(b).contentWindow,g=c,g=String(g),f=['"'],h=0;h<g.length;h++){var m=g.charAt(h),p=m.charCodeAt(0),l=h+1,D;if(!(D=fb[m])){var I;if(31<p&&127>p)I=m;else{var x=m;if(x in gb)I=gb[x];else if(x in fb)I=gb[x]=fb[x];else{var v=x,t=x.charCodeAt(0);if(31<t&&127>t)v=x;else{if(256>t){if(v="\\x",16>t||256<t)v+="0"}else v="\\u",4096>t&&(v+="0");v+=
t.toString(16).toUpperCase()}I=gb[x]=v}}D=I}f[l]=D}f.push('"');k.location.replace("javascript:"+f.join(""))}e=!0}catch(E){k=Ub().google_jobrunner,Bc(k)&&k.rl()}e&&(e=pc("google_async_rrc",c),(new nc(a)).set(b,Gc(a,b,e,!1)))}},Hc=function(a){var b=["<iframe"];Bb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Jc=function(a,b,c){Ic(a,b,c,function(a,b,g){for(var f=a.document,h=b.id,l=0;!h||f.getElementById(h);)h="aswift_"+l++;b.id=h;b.name=h;var h=Number(g.google_ad_width),
l=Number(g.google_ad_height),k=L.I;mc(g,a,k.j,k.i);qc=K(O(a),k.i);16==g.google_reactive_ad_format?(a=f.createElement("div"),g=rc(b,h,l),a.innerHTML=g,c.appendChild(a.firstChild)):(a=rc(b,h,l),c.innerHTML=a);return b.id})},Ic=function(a,b,c,d){var e=Ea("script"),g,f;a:{try{var h=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof h){f=h;break a}h=y(["C","E"],ta)||null;a.top.google_pubvars_reuse_experiment=h;if(a.top.google_pubvars_reuse_experiment===h){f=h;break a}}catch(ma){}f=null}if("E"===
f){g=null!=b.google_ad_client;f=null!=b.google_ad_width;var h=null!=b.google_ad_height,l=wc(a);if(l){for(var k=0;k<vc.length;k++){var m=vc[k];null!=b[m]&&(l[m]=b[m])}if(l=wc(a)){var k=l.google_ad_width,m=l.google_ad_height,p=l.google_ad_format;k&&m&&p&&(p=(p=p&&p.match(/(\d+)x(\d+)/))?{width:p[1],height:p[2]}:null,!p||p.width==k&&p.height==m||delete l.google_ad_format)}}if(l=wc(a))for(k=0;k<vc.length;k++)m=vc[k],null==b[m]&&null!=l[m]&&(b[m]=l[m]);l=null!=b.google_ad_client;k=null!=b.google_ad_width;
m=null!=b.google_ad_height;g=[g?"c2":l?"c1":"c0",f?"w2":k?"w1":"w0",h?"h2":m?"h1":"h0"].join()}f={};h=b.google_ad_height;f.width='"'+b.google_ad_width+'"';f.height='"'+h+'"';f.frameborder='"0"';f.marginwidth='"0"';f.marginheight='"0"';f.vspace='"0"';f.hspace='"0"';f.allowtransparency='"true"';f.scrolling='"no"';f.allowfullscreen='"true"';f.onload='"'+oc+'"';d=d(a,f,b);h=b.google_ad_output;f=b.google_ad_format;f||"html"!=h&&null!=h||(f=b.google_ad_width+"x"+b.google_ad_height,b.google_ad_format_suffix&&
(f+=b.google_ad_format_suffix));h=!b.google_ad_slot||b.google_override_format||!uc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;f=f&&h?f.toLowerCase():"";b.google_ad_format=f;f=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];h=[];l=0;for(k=c;k&&25>l;k=k.parentNode,++l)h.push(9!==k.nodeType&&k.id||"");(h=h.join())&&f.push(h);b.google_ad_unit_key=Ka(f.join(":")).toString();f=a.google_adk2_experiment=a.google_adk2_experiment||y(["C",
"E"],ra)||"N";if("E"==f){f=[];for(h=0;c&&25>h;++h){l="";l=(l=9!==c.nodeType&&c.id)?"/"+l:"";a:{if(c&&c.nodeName&&c.parentElement)for(var k=c.nodeName.toString().toLowerCase(),m=c.parentElement.childNodes,D=p=0;D<m.length;++D){var I=m[D];if(I.nodeName&&I.nodeName.toString().toLowerCase()===k){if(c===I){k="."+p;break a}++p}}k=""}f.push((c.nodeName&&c.nodeName.toString().toLowerCase())+l+k);c=c.parentElement}c=f.join()+":";f=a;h=[];if(f)try{for(var x=f.parent,l=0;x&&x!==f&&25>l;++l){for(var v=x.frames,
k=0;k<v.length;++k)if(f===v[k]){h.push(k);break}f=x;x=f.parent}}catch(ma){}b.google_ad_dom_fingerprint=Ka(c+h.join()).toString()}else"C"==f&&(b.google_ad_dom_fingerprint="ctrl");x=dc(b);v=null;c=y(["C","E"],ua);if("E"==c){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var t=encodeURIComponent(window.JSON.stringify(b)),E;if(bc)E=n.btoa(t);else{f=[];for(l=h=0;l<t.length;l++){for(var Q=t.charCodeAt(l);255<Q;)f[h++]=Q&255,Q>>=8;f[h++]=Q}if(!ac)for(ac={},t=0;65>t;t++)ac[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t);
t=ac;Q=[];for(h=0;h<f.length;h+=3){var M=f[h],V=h+1<f.length,W=V?f[h+1]:0,aa=h+2<f.length,Pb=aa?f[h+2]:0,l=M>>2,k=(M&3)<<4|W>>4,m=(W&15)<<2|Pb>>6,p=Pb&63;aa||(p=64,V||(m=64));Q.push(t[l],t[k],t[m],t[p])}E=Q.join("")}v=E;break a}Ob("sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0})}catch(ma){z.u("sblob",ma,void 0,void 0)}v=""}v||(v="{X}")}else"C"==c&&(v="{C}");var A;b=b.google_ad_client;if(!tc)b:{M=[n.top];E=[];for(V=0;W=M[V++];){E.push(W);try{if(W.frames)for(var N=W.frames.length,
aa=0;aa<N&&1024>M.length;++aa)M.push(W.frames[aa])}catch(ma){}}for(N=0;N<E.length;N++)try{if(A=E[N].frames.google_esf){tc=A;break b}}catch(ma){}tc=null}tc?A="":(A={style:"display:none"},A["data-ad-client"]=sc(b),A.id="google_esf",A.name="google_esf",A.src=fc(ja("","googleads.g.doubleclick.net"),["/pagead/html/",ya(),"/r20151006/zrt_lookup.html"].join("")),A=Hc(A));N=fa;b=(new Date).getTime();if(E=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;M=a.google_always_use_delayed_impressions_experiment;V=a.google_unique_id;A=["<!doctype html><html><body>",A,"<",e,">",x,"google_show_ads_impl=true;google_unique_id=","number"===typeof V?V:0,';google_async_iframe_id="',d,'";google_start_time=',N,";",c?'google_pub_vars = "'+v+'";':"",g?'google_pubvars_reuse_experiment_result = "'+g+'";':"",E?'google_async_for_oa_experiment="'+E+'";':"",M?'google_always_use_delayed_impressions_experiment="'+M+'";':"","google_bpp=",b>N?b-N:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",
e,">",Fc(),"</body></html>"].join("");(a.document.getElementById(d)?Dc:Ec)(Gc(a,d,A,!0))},Kc=function(a,b){var c=navigator;if(sa&&a&&b&&c){var c=a.document,d=fc("pagead2.googlesyndication.com","/pub-config/"+sc(b)+".js");Ga(c,d)}};var U=function(a,b){this.N=a;this.M=b};U.prototype.minWidth=function(){return this.N};U.prototype.height=function(){return this.M};U.prototype.w=function(a){return 300<a&&300<this.M?this.N:1200<a?1200:Math.round(a)};var Lc={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},X=function(a,b,c){U.call(this,a,b);this.ca=c};ea(X,U);var Mc=function(a){return function(b){return!!(b.ca&a)}},Nc=[new X(970,90,2),new X(728,90,2),new X(468,60,2),new X(336,280,1),new X(320,100,2),new X(320,50,2),new X(300,600,4),new X(300,250,1),new X(250,250,1),new X(234,60,2),new X(200,200,1),new X(180,150,1),new X(160,600,4),new X(125,125,1),new X(120,600,4),new X(120,240,4)];var Oc=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var g;g=Oa(a[c[d]]);g=null===g?null:Math.round(g);null!=g&&(b[e]=g)}}},Pc=function(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(e){return null}},Qc=function(a){var b=0,c;for(c in Lc)-1!=a.indexOf(c)&&(b|=Lc[c]);return b};var Rc=function(a){return function(b){return b.minWidth()<=a}},Tc=function(a,b,c){var d=a&&Sc(c,b);return function(a){return!(d&&250<=a.height())}},Sc=function(a,b){var c=Math.min(P(b).clientHeight,16*P(b).clientWidth/9),d=Pc(a,b);return(d?d.y:0)<c-100},Vc=function(a,b){var c=b,d=Infinity;do{var e=Uc(c,a,"height");e&&(d=Math.min(d,e));(e=Uc(c,a,"maxHeight"))&&(d=Math.min(d,e))}while((c=c.parentElement)&&"HTML"!=c.tagName);return d},Uc=function(a,b,c){if(a.style){var d=Oa(a.style[c]);if(d)return d}if(a=
Ha(a,b))if(d=Oa(a[c]))return d;return null};var Wc=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},Xc=function(a,b,c){for(var d=a.length,e=null,g=0;g<d;++g){var f=a[g];if(b(f)){if(!c||c(f))return f;null===e&&(e=f)}}return e};var Zc=function(a,b,c,d){var e=Nc.slice(0);if(K(O(c),L.F.i))for(var g=Math.random,f=e.length-1;0<f;f--){var h=Math.floor(g()*(f+1)),l=e[f];e[f]=e[h];e[h]=l}g=488>P(c).clientWidth;b=[Rc(a),Yc(g),Tc(g,c,d),Mc(b)];e=Xc(e,Wc(b));if(!e)throw new T("adsbygoogle.push() error: No slot size for availableWidth="+a);return e},Yc=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}};var Y=function(a,b){U.call(this,a,b)};ea(Y,U);Y.prototype.w=function(a){return Math.min(1200,Math.round(a))};var $c=[new Y(468,350),new Y(414,828),new Y(384,768),new Y(375,750),new Y(360,720),new Y(320,640),new Y(120,600)],ad=[new Y(468,300),new Y(414,828),new Y(384,768),new Y(375,750),new Y(360,720),new Y(320,640),new Y(120,600)],bd=function(a,b){var c=Xc(a,Rc(b));if(!c)throw new T("adsbygoogle.push() error: No autorelaxed size for width="+b+"px");return c};var dd=function(){return!cd()&&(F("iPod")||F("iPhone")||F("Android")||F("IEMobile"))},cd=function(){return F("iPad")||F("Android")&&!F("Mobile")||F("Silk")};var ed=[{l:[3,0,0],m:[6,12,14,0,1,3,2,4,13,5,7,8,9,10,11,15]},{l:[3,0,1],m:[6,15,0,1,2,3,4,13,5,7,8,9,10,11,12,14]},{l:[3,0,2],m:[6,15,0,1,2,3,4,7,8,9,10,13,5,11,12,14]},{l:[3,1,0],m:[6,12,15,0,1,3,4,13,2,5,7,8,9,10,11,14]},{l:[3,1,1],m:[6,15,0,1,7,8,11,2,3,4,5,9,10,12,13,14]},{l:[3,1,2],m:[6,15,0,1,2,3,4,7,9,11,5,8,10,12,13,14]},{l:[3,2,0],m:[0,6,12,15,1,2,3,4,13,5,7,8,9,10,11,14]},{l:[3,2,1],m:[0,6,12,14,1,2,3,4,13,5,7,8,9,10,11,15]},{l:[3,2,2],m:[0,15,1,2,3,4,13,9,5,6,7,8,10,11,12,14]},{l:[2,0,
0],m:[6,15,0,1,3,2,7,8,10,13,9,4,5,11,12,14]},{l:[2,0,1],m:[6,15,0,1,2,3,7,8,4,10,9,13,5,11,12,14]},{l:[2,0,2],m:[0,15,1,2,3,4,7,8,13,5,6,9,10,11,12,14]},{l:[4,0,0],m:[6,12,14,15,0,1,7,2,8,11,9,3,4,5,10,13]},{l:[4,0,1],m:[6,12,14,0,1,2,3,4,7,8,11,13,5,9,10,15]},{l:[4,0,2],m:[6,15,0,1,2,3,5,7,8,13,9,4,10,11,12,14]}],fd=function(a,b,c){return"auto"==c?(b/=Math.min(1200,P(a).clientWidth),.6<b&&!(488>P(a).clientWidth)?2:.25>=b?4:3):Qc(c)},gd=function(a,b){var c=Vc(a,b);return function(a){return a.height()<=
c}},id=function(a,b,c,d,e){var g;a:{var f;f=dd()?2:cd()?4:3;g=Pc(d,c);f=[f,g&&3==f?83>g.x?0:265>g.x?1:2:0,hd(f,g)];for(g=0;g<ed.length;++g){var h=ed[g],l;b:if(l=h.l,f&&"number"===typeof f.length&&l&&"number"===typeof l.length&&f.length===l.length){for(var k=f.length,m=0;m<k;m++)if(f[m]!==l[m]){l=!1;break b}l=!0}else l=!1;if(l){g=h.m;break a}}throw Error("No format for "+f);}f=[];for(h=0;h<g.length;++h)f.push(Nc[g[h]]);g=488>P(c).clientWidth;a=[gd(c,d),Rc(a),Tc(g,c,d)];c=[];(e?c:a).push(Mc(b));return Xc(f,
Wc(a),Wc(c))},hd=function(a,b){if(!b)return 0;var c=b.y;switch(a){case 2:return 285>c?0:1396>c?1:2;case 4:return 275>c?0:1057>c?1:2;default:return 216>c?0:838>c?1:2}};var Z=function(a,b){U.call(this,a,b)};ea(Z,U);Z.prototype.w=function(){return this.minWidth()};var jd=[new Z(728,15),new Z(468,15),new Z(200,90),new Z(180,90),new Z(160,90),new Z(120,90)];var nd=function(){var a=window;if(void 0===a.google_dre){var b="";a.postMessage&&Ib(a)&&dd()&&(b=y(["20050000","20050001"],va))&&(a.google_ad_modifications=a.google_ad_modifications||{},a.google_ad_modifications.eids=a.google_ad_modifications.eids||[],a.google_ad_modifications.eids.push(b));a.google_dre=b;"20050001"==a.google_dre&&(Pa(a.top,"message",B("dr::mh",r(kd,a),r(ld,a))),a.setTimeout(B("dr::to",r(md,a,!0),r(ld,a)),2E3),a.google_drc=0,a.google_q=a.google_q||{},a.google_q.tags=a.google_q.tags||
[])}},od=function(a){"20050001"==n.google_dre&&(a.params=a.params||{},a.params.google_delay_requests_delay=0,a.params.google_delay_requests_count=n.google_drc++,a.U=u())},pd=function(a){if("20050001"==n.google_dre){var b=u()-a.U;a.params.google_delay_requests_delay=b}},kd=function(a,b){var c;if(c=b&&"afb"==b.data)c=b.origin,c=!!Fb[c]||za&&Gb.test(c);c&&md(a,!1)},md=function(a,b){if(a.google_q&&a.google_q.tags){var c=a.google_q.tags;ld(a);c.length&&(b&&Ob("drt",{Ya:c.length,duration:2E3},1),qd(c))}};var Kb=function(a){a.shv=ya()};z.H=!za;var rd=function(a){return Eb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},td=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");sd(a,b,c)},sd=function(a,b,c){ud(a,b,c);if(!vd(a,b,c)){if(b.google_reactive_ads_config){if(wd)throw new T("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");wd=!0}else Db(c);xd||(xd=!0,Kc(c,b.google_ad_client));Bb(cc,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;
if(d&&"html"!=d)throw new T("adsbygoogle.push() error: No support for google_ad_output="+d);Mb("aa::load",Nb,function(){Jc(c,b,a)})}},vd=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var e=d.page_level_pubvars,g=(ba(e)?e:{}).google_tag_origin;var f=b.google_ad_slot,e=c.google_ad_modifications;!e||gc(e.ad_whitelist,f,g||b.google_tag_origin)?e=null:(g=e.space_collapsing||"none",e=(f=gc(e.ad_blacklist,f))?{K:!0,R:f.space_collapsing||g}:e.remove_ads_by_default?{K:!0,R:g}:null);return e&&e.K&&
"on"!=b.google_adtest?("slot"==e.R&&(null!==Na(a.getAttribute("width"))&&a.setAttribute("width",0),null!==Na(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(e=Ha(a,c))||"none"!=e.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},yd=function(a,b){var c;try{c=a.getBoundingClientRect()}catch(e){}if(!c||
0==c.left&&0==c.right&&0==c.width&&0==c.height)return!1;var d=Ha(a,b);if(!d)return!1;c=Oa(d.width);d=Oa(d.height);return null==c||null==d||uc[c+"x"+d]?!1:!0},ud=function(a,b,c){for(var d=a.attributes,e=d.length,g=0;g<e;g++){var f=d[g];if(/data-/.test(f.name)){var h=f.name.replace("data","google").replace(/-/g,"_");if(!b.hasOwnProperty(h)){var f=f.value,l={google_reactive_ad_format:ga,google_allow_expandable_ads:ha},f=l.hasOwnProperty(h)?l[h](f,null):f;null===f||(b[h]=f)}}}if(b.google_enable_content_recommendations&&
1==b.google_reactive_ad_format)b.google_ad_width=P(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=P(c).clientWidth||0,b.google_ad_height=P(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=P(c).clientWidth||0,b.google_ad_height=P(c).clientHeight||0,a.style.display="none";else{d=
b.google_ad_format;"autorelaxed"==d?(d=L.C,mc(b,c,d.j,d.i),d=K(O(c),L.C.i)?3:2):"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)?(d=L.D,mc(b,c,d.j,d.i),d=K(O(c),L.D.i)||K(O(c),L.v.i)?5:1):d="link"==d?4:void 0;if(e=!d)yd(a,c)?(e=L.v,mc(b,c,e.j,e.i)!==e.i?e=!1:(b.google_ad_format="auto",e=!0)):e=!1;e&&(d=5);if(d){var k=a.offsetWidth;a:{var m=b.google_ad_format;switch(d){default:case 1:var p="auto"==m?.25>=k/Math.min(1200,P(c).clientWidth)?4:3:Qc(m);b&&(b.google_responsive_formats=
p,m=L.F,mc(b,c,m.j,m.i));c=Zc(k,p,c,a);break a;case 2:c=bd($c,k);break a;case 3:c=bd(ad,k);break a;case 5:m=fd(c,k,m);b.google_responsive_formats=m;var D=K(O(c),L.v.i);b:{d=a;do if((e=Ha(d,c))&&"fixed"==e.position){d=!1;break b}while(d=d.parentElement);d=!0}d&&(p=id(k,m,c,a,D));c=p||Zc(k,m,c,a);break a;case 4:c=Xc(jd,Rc(k));if(!c)throw new T("adsbygoogle.push() error: No link unit size for width="+k+"px");b.google_ad_format_suffix="_0ads_al";b.google_override_format=1}}b.google_ad_width=c.w(k);b.google_ad_height=
c.height();a.style.height=c.height()+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{p=yd(a,c)?(p=y(["LC","LE"],qa))?"LE"==(b.google_responsive_override_logs_experiment=p):!1:!1;if(p)try{m=a.offsetWidth,D=id(m,fd(c,m,"auto"),c,a,!0),k=new Da(D.w(m),D.height()),b.google_ember_w=k.width,b.google_ember_h=k.height}catch(I){b.google_ember_w=b.google_ember_h="e"}!Ma.test(b.google_ad_width)&&!La.test(a.style.width)||!Ma.test(b.google_ad_height)&&!La.test(a.style.height)?
(c=Ha(a,c),a.style.width=c.width,a.style.height=c.height,Oc(c,b),b.google_ad_width||(b.google_ad_width=a.offsetWidth),b.google_ad_height||(b.google_ad_height=a.offsetHeight),b.google_loader_features_used=256):(Oc(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(c=a.style.width,a.style.width="100%",p=a.offsetWidth,a.style.width=c,b.google_available_width=p))}}},zd=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=
b[++c]){var e=d;if(rd(e)&&"reserved"!=e.getAttribute("data-adsbygoogle-status")&&(!a||d.id==a))return d}return null},wd=!1,xd=!1,Cd=function(a){if(dd()&&!n.google_q){n.google_q={};var b;a:{try{b=n.JSON.parse(n.localStorage.getItem("google_ama_config")||"");break a}catch(e){}b=null}if(b)if(b.exp>u()&&hc(b)){n.google_q.tags=[];b=fc(Hb(),b.lib);var c=Ga(n.document,b),d=u();c.onload=B("aa::amarn",r(Ad,n,d,a),r(ld,n));n.setTimeout(function(){var a=u();n.setTimeout(B("aa::amaabt",r(Bd,n,c,a),r(ld,n)),100);
ic(n,{td:a-d})},0)}else try{n.localStorage.removeItem("google_ama_config")}catch(e){ic(n,{lserr:1})}}},Ad=function(a,b,c){a.google_q.tags&&(ic(a,{stg:1,t:u()-b}),(b=a.google_amar)&&J(b)&&Mb("aa::amar",Nb,r(b,a,c)),Dd(a))},Bd=function(a,b,c){a.google_q.tags&&(b.onload=function(){ic(a,{stg:0,t:u()-c})},Dd(a))},Dd=function(a){var b=a.google_q.tags;a.google_q.tags=void 0;qd(b)},ld=function(a){a.google_q.tags=void 0},qd=function(a){if(a&&a.shift)try{for(var b,c=20;0<a.length&&(b=a.shift())&&0<c;)Ed(b),
--c}catch(d){throw window.setTimeout(Fd,0),d;}},Gd=function(a,b){var c={};Bb(jc,function(b,d){a.hasOwnProperty(d)&&(c[d]=a[d])});ba(a.enable_page_level_ads)&&(c.page_level_pubvars=a.enable_page_level_ads);var d=document.createElement("ins");d.className="adsbygoogle";d.style.display="none";b?zb.body.appendChild(d):zb.documentElement.appendChild(d);td(d,{google_reactive_ads_config:c,google_ad_client:a.google_ad_client})},Hd=function(a){if(!Ib(window))throw new T("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
var b=K(O(H),L.J.i),c=!b;zb.body||b?Gd(a,c):Pa(zb,"DOMContentLoaded",Qb(function(){Gd(a,c)}))},Id=function(a,b,c,d){if(0==b.message.indexOf("TagError")){var e={};Ya(z,e,d);e.context=a;e.msg=b.message.substring(0,512);a=n.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);Sa(Jb,"puberror",e,!0,c||.01);return!1}return z.u(a,b,c,d)},Jd=function(a,b,c,d){return 0==b.message.indexOf("TagError")?!1:z.u(a,b,c,d)},Ed=function(a){var b={};Mb("aa::hqe",Id,function(){Kd(a,b)},function(c){c.client=
c.client||b.google_ad_client||a.google_ad_client;c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})},Kd=function(a,b){fa=(new Date).getTime();if(n.google_q&&n.google_q.tags)od(a),n.google_q.tags.push(a);else{var c;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){c=!0;break a}throw new T("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");}c=!1}if(c)Cd(a.google_ad_client),Hd(a);else{n.google_q?pd(a):(nd(),od(a));
c=a.element;var d=a.params;d&&Bb(d,function(a,c){b[c]=a});if(c){if(!rd(c)&&(c=c.id?zd(c.id):null,!c))throw new T("adsbygoogle.push() error: 'element' has already been filled.");if(!("innerHTML"in c))throw new T("adsbygoogle.push() error: 'element' is not a good DOM element.");}else if(c=zd(),!c)throw new T("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");td(c,b)}}},Fd=function(){Lb();Mb("aa::main",Jd,Ld)},Ld=function(){var a=H.google_ad_modifications=
H.google_ad_modifications||{};if(!a.plle){a.plle=!0;var a=a.loeids=a.loeids||[],b=L.D,c=b.i;if(H.location&&H.location.hash=="#google_plle_"+c)b=c;else{var b=[b.j,c],c=new Rb(ka,ka+la-1),d;(d=0>=la||la%b.length)||(d=kc.ba,d=!(d.start<=c.start&&d.end>=c.end));d?b=null:(d=Sb(H),b=null!==d&&c.start<=d&&c.end>=d?b[(d-ka)%b.length]:null)}b&&a.push(b);b=L.C;(b=lc(na,b.j,b.i))&&a.push(b);b=L.F;(b=lc(oa,b.j,b.i))&&a.push(b);b=L.v;(b=lc(pa,b.j,b.i))&&a.push(b);b=L.I;(b=lc(wa,b.j,b.i))&&a.push(b);zb.body||(b=
L.J,(b=lc(xa,b.j,b.i))&&a.push(b))}a=window.adsbygoogle;qd(a);if(!a||!a.loaded){window.adsbygoogle={push:Ed,loaded:!0};a&&Md(a.onload);try{Object.defineProperty(window.adsbygoogle,"onload",{set:Md})}catch(e){}}},Md=function(a){J(a)&&window.setTimeout(a,0)};Fd();}).call(this);
