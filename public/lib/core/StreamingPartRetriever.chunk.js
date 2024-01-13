/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{557:function(wa,ta,h){h.r(ta);var pa=h(0),na=h(1);h.n(na);var oa=h(3),ka=h(183);wa=h(55);var la=h(117),ha=h(305),z=h(90),y=h(304);h=h(469);var r=window,n=function(){function e(f,w,ca){var ea=-1===f.indexOf("?")?"?":"&";switch(w){case z.a.NEVER_CACHE:this.url=f+ea+"_="+Object(na.uniqueId)();break;default:this.url=f}this.vg=ca;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}e.prototype.start=function(f,w){var ca=this,ea=this,fa=this.request,x;ea.AB=0;f&&Object.keys(f).forEach(function(ba){ca.request.setRequestHeader(ba,f[ba])});w&&(this.request.withCredentials=w);this.uJ=setInterval(function(){var ba=0===window.document.URL.indexOf("file:///");ba=200===fa.status||
ba&&0===fa.status;if(fa.readyState!==y.b.DONE||ba){try{fa.responseText}catch(aa){return}ea.AB<fa.responseText.length&&(x=ea.Swa())&&ea.trigger(e.Events.DATA,[x]);0===fa.readyState&&(clearInterval(ea.uJ),ea.trigger(e.Events.DONE))}else clearInterval(ea.uJ),ea.trigger(e.Events.DONE,["Error received return status "+fa.status])},1E3);this.request.send(null);this.status=y.a.STARTED};e.prototype.Swa=function(){var f=this.request,w=f.responseText;if(0!==w.length)if(this.AB===w.length)clearInterval(this.uJ),
this.trigger(e.Events.DONE);else return w=Math.min(this.AB+3E6,w.length),f=r.o2(f,this.AB,!0,w),this.AB=w,f};e.prototype.abort=function(){clearInterval(this.uJ);var f=this;this.request.onreadystatechange=function(){Object(oa.j)("StreamingRequest aborted");f.status=y.a.ABORTED;return f.trigger(e.Events.ABORTED)};this.request.abort()};e.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=y.a.SUCCESS;return f.trigger(e.Events.DONE)};this.request.abort()};e.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return e}();Object(wa.a)(n);var b;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(b||(b={}));var a=function(e){function f(){var w=e.call(this)||this;w.buffer="";w.state=b.LOCAL_HEADER;w.oU=4;w.Mo=null;w.Qw=ka.c;w.xq={};return w}Object(pa.c)(f,e);f.prototype.Kwa=function(w){var ca;for(w=this.buffer+w;w.length>=this.Qw;)switch(this.state){case b.LOCAL_HEADER:this.Mo=ca=this.Wwa(w.slice(0,this.Qw));if(ca.Fx!==
ka.g)throw Error("Wrong signature in local header: "+ca.Fx);w=w.slice(this.Qw);this.state=b.FILE;this.Qw=ca.wN+ca.Ht+ca.gA+this.oU;this.trigger(f.Events.HEADER,[ca]);break;case b.FILE:this.Mo.name=w.slice(0,this.Mo.Ht);this.xq[this.Mo.name]=this.Mo;ca=this.Qw-this.oU;var ea=w.slice(this.Mo.Ht+this.Mo.gA,ca);this.trigger(f.Events.FILE,[this.Mo.name,ea,this.Mo.QN]);w=w.slice(ca);if(w.slice(0,this.oU)===ka.h)this.state=b.LOCAL_HEADER,this.Qw=ka.c;else return this.state=b.CENTRAL_DIR,!0}this.buffer=w;
return!1};f.Events={HEADER:"header",FILE:"file"};return f}(ha.a);Object(wa.a)(a);wa=function(e){function f(w,ca,ea,fa,x){ea=e.call(this,w,ea,fa)||this;ea.url=w;ea.stream=new n(w,ca);ea.we=new a;ea.C6=window.createPromiseCapability();ea.g7={};ea.vg=x;return ea}Object(pa.c)(f,e);f.prototype.zC=function(w){var ca=this;this.request([this.kl,this.ln,this.jl]);this.stream.addEventListener(n.Events.DATA,function(ea){try{if(ca.we.Kwa(ea))return ca.stream.finish()}catch(fa){throw ca.stream.abort(),ca.Os(fa),
w(fa),fa;}});this.stream.addEventListener(n.Events.DONE,function(ea){ca.kwa=!0;ca.C6.resolve();ea&&(ca.Os(ea),w(ea))});this.we.addEventListener(a.Events.HEADER,Object(na.bind)(this.f7,this));this.we.addEventListener(a.Events.FILE,Object(na.bind)(this.mxa,this));return this.stream.start(this.vg,this.withCredentials)};f.prototype.i2=function(w){var ca=this;this.C6.promise.then(function(){w(Object.keys(ca.we.xq))})};f.prototype.kr=function(){return!0};f.prototype.request=function(w){var ca=this;this.kwa&&
w.forEach(function(ea){ca.g7[ea]||ca.iDa(ea)})};f.prototype.f7=function(){};f.prototype.abort=function(){this.stream&&this.stream.abort()};f.prototype.iDa=function(w){this.trigger(la.a.Events.PART_READY,[{Db:w,error:"Requested part not found",kk:!1,xh:!1}])};f.prototype.mxa=function(w,ca,ea){this.g7[w]=!0;this.trigger(la.a.Events.PART_READY,[{Db:w,data:ca,kk:!1,xh:!1,error:null,Zd:ea}])};return f}(la.a);Object(h.a)(wa);Object(h.b)(wa);ta["default"]=wa}}]);}).call(this || window)
