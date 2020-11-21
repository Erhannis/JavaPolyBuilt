(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("browserfs")):"function"==typeof define&&define.amd?define(["browserfs"],e):"object"==typeof exports?exports.Doppio=e(require("browserfs")):t.Doppio=e(t.BrowserFS)}(this,function(__WEBPACK_EXTERNAL_MODULE_4__){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);t.exports=r},function(t,e,n){"use strict";var r=n(2);e.Testing=r;var a=n(30);e.Heap=a;var o=n(47);e.VM=o;var s=n(53);e.Debug=s},function(t,e,n){(function(t){"use strict";function r(t,e,n){var r=Error(t);return r.originalError=e,r.fatal=n,r}function a(t,e){var n=p.resolve(t,p.join("classes","test"));h.readdir(n,function(t,n){e(t?[]:n.filter(function(t){return".java"===p.extname(t)}).map(function(t){return p.join("classes","test",p.basename(t,".java"))}))})}function o(t,e){var n=t.testClasses;null==n||0===n.length?a(t.doppioHomePath,function(n){t.testClasses=n,o(t,e)}):e(n.map(function(e){return new d(t,e)}))}function s(t,e){var n=t.split(/\n/),r=e.split(/\n/),a=c.text_diff(n,r,2);return a.length>0?"Doppio | Java\n"+a.join("\n"):null}function i(e,n,r,a,s,i){function l(e){n||t.stdout.write(e)}o(e,function(t){u.asyncForEach(t,function(t,e){l("["+t.cls+"]: Running... "),t.run(s,function(n,o,s,i){n&&!a&&i&&(n.message+="\n"+i),n?(l("fail.\n\t"+n.message+"\n"),n.originalError&&n.originalError.stack&&l(n.stack+"\n"),!r||n.fatal?(n.message="Failed "+t.cls+": "+n.message,e(n)):e()):(l("pass.\n"),e())})},i)})}var l=n(5),u=n(7),c=n(46),p=n(28),h=n(27),f=function(){function e(){this._stdoutWrite=t.stdout.write,this._stderrWrite=t.stderr.write,this._data="",this._isCapturing=!1}return e.prototype.debugWrite=function(e){this._stdoutWrite.apply(t.stdout,[e,"utf8"])},e.prototype.start=function(e){var n=this;if(this._isCapturing)throw Error("Already capturing.");this._isCapturing=!0,e&&(this._data=""),t.stderr.write=t.stdout.write=function(t,e,r){return"string"!=typeof t&&(t=""+t),n._data+=t,!0}},e.prototype.stop=function(){this._isCapturing&&(this._isCapturing=!1,t.stderr.write=this._stderrWrite,t.stdout.write=this._stdoutWrite)},e.prototype.getOutput=function(t){var e=this._data;return t&&(this._data=""),e},e}(),d=function(){function t(t,e){this.outputCapturer=new f,this.opts=t,e.indexOf(".")!==-1&&(e=u.descriptor2typestr(u.int_classname(e))),this.cls=e,this.outFile=p.resolve(t.doppioHomePath,e)+".runout"}return t.prototype.constructJVM=function(t){new l(u.merge(l.getDefaultOptions(this.opts.doppioHomePath),this.opts,{classpath:[this.opts.doppioHomePath],enableAssertions:!0,enableSystemAssertions:!0}),t)},t.prototype.run=function(t,e){var n=this,a=this.outputCapturer,o=null,i=!1,l=!1,u=!1;t(function(t){if(n)try{n.halt(1)}catch(n){t.message+="\n\nAdditionally, test runner received the following error while trying to halt the JVM: "+n+(n.stack?"\n\n"+n.stack:"")+"\n\nOriginal error's stack trace:"}a.stop(),e(r("Uncaught error. Aborting further tests.\n\t"+t+(t.stack?"\n\n"+t.stack:""),t,!0))}),this.constructJVM(function(t,c){if(o=c,!i){if(l)return e(r("constructJVM returned twice. Aborting further tests.",null,!0));l=!0,t?e(r("Could not construct JVM:\n"+t,t)):(a.start(!0),c.runClass(n.cls,[],function(t){if(!i){if(a.stop(),u)return e(r("JVM triggered completion callback twice. Aborting further tests.",null,!0));u=!0;var o=a.getOutput(!0);h.readFile(n.outFile,{encoding:"utf8"},function(t,n){if(t)e(r("Could not read runout file:\n"+t,t));else{var a=s(o,n),i=null;null!==a&&(i="Output does not match native JVM."),e(i?r(i):null,o,n,a)}})}}))}})},t}();e.DoppioTest=d,e.getTests=o,e.diff=s,e.runTests=i}).call(e,n(3))},function(t,e,n){var r=n(4);t.exports=r.BFSRequire("process")},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE_4__},function(t,e,n){(function(e,r){"use strict";var a,o=n(7),s=n(10),i=(n(11),n(20)),l=n(27),u=n(28),c=n(29),p=n(14),h=n(9),f=n(30),d=(n(13),n(31)),g=n(32),v=n(33),_=(n(18),n(34)),m=n(4),T=n(35),y=n(41),I=n(44),E=n(39),A=n(38);a=n(o.are_in_browser()?45:45);var S=["Ljava/lang/String;","Ljava/lang/Class;","Ljava/lang/ClassLoader;","Ljava/lang/reflect/Constructor;","Ljava/lang/reflect/Field;","Ljava/lang/reflect/Method;","Ljava/lang/Error;","Ljava/lang/StackTraceElement;","Ljava/lang/System;","Ljava/lang/Thread;","Ljava/lang/ThreadGroup;","Ljava/lang/Throwable;","Ljava/nio/ByteOrder;","Lsun/misc/VM;","Lsun/reflect/ConstantPool;","Ljava/lang/Byte;","Ljava/lang/Character;","Ljava/lang/Double;","Ljava/lang/Float;","Ljava/lang/Integer;","Ljava/lang/Long;","Ljava/lang/Short;","Ljava/lang/Void;","Ljava/io/FileDescriptor;","Ljava/lang/Boolean;","[Lsun/management/MemoryManagerImpl;","[Lsun/management/MemoryPoolImpl;","Lsun/nio/fs/UnixConstants;"],C=function(){function t(e,n){var r=this;if(this.systemProperties=null,this.internedStrings=new s,this.bsCl=null,this.threadPool=null,this.natives={},this.heap=new f(20971520),this.nativeClasspath=null,this.startupTime=new Date,this.terminationCb=null,this.firstThread=null,this.responsiveness=null,this.enableSystemAssertions=!1,this.enabledAssertions=!1,this.disabledAssertions=[],this.printJITCompilation=!1,this.systemClassLoader=null,this.nextRef=0,this.vtraceMethods={},this.dumpCompiledCodeDir=null,this.parker=new d,this.status=h.JVMStatus.BOOTING,this.exitCode=0,this.jitDisabled=!1,this.dumpJITStats=!1,this.globalRequire=null,"string"!=typeof e.doppioHomePath)throw new TypeError("opts.doppioHomePath *must* be specified.");e=o.merge(t.getDefaultOptions(e.doppioHomePath),e),this.jitDisabled=e.intMode,this.dumpJITStats=e.dumpJITStats;var a,l,c=e.bootstrapClasspath.map(function(t){return u.resolve(t)}),v=[];if(!Array.isArray(e.bootstrapClasspath)||0===e.bootstrapClasspath.length)throw new TypeError("opts.bootstrapClasspath must be specified as an array of file paths.");if(!Array.isArray(e.classpath))throw new TypeError("opts.classpath must be specified as an array of file paths.");if("string"!=typeof e.javaHomePath)throw new TypeError("opts.javaHomePath must be specified.");if(!Array.isArray(e.nativeClasspath)||0===e.nativeClasspath.length)throw new TypeError("opts.nativeClasspath must be specified as an array of file paths.");this.nativeClasspath=e.nativeClasspath,e.enableSystemAssertions&&(this.enableSystemAssertions=e.enableSystemAssertions),e.enableAssertions&&(this.enabledAssertions=e.enableAssertions),e.disableAssertions&&(this.disabledAssertions=e.disableAssertions),this.responsiveness=e.responsiveness,this._initSystemProperties(c,e.classpath.map(function(t){return u.resolve(t)}),u.resolve(e.javaHomePath),u.resolve(e.tmpDir),e.properties),v.push(function(t){r.initializeNatives(t)}),v.push(function(t){r.bsCl=new i.BootstrapClassLoader(r.systemProperties["java.home"],c,t)}),v.push(function(t){r.threadPool=new g["default"](function(){return r.threadPoolIsEmpty()}),r.bsCl.resolveClass(null,"Ljava/lang/Thread;",function(e){null==e?t("Failed to resolve java/lang/Thread."):(l=new(e.getConstructor(null))(null),l.$thread=a=r.firstThread=new p.JVMThread(r,r.threadPool,l),l.ref=1,l["java/lang/Thread/priority"]=5,l["java/lang/Thread/name"]=o.initCarr(r.bsCl,"main"),l["java/lang/Thread/blockerLock"]=new(r.bsCl.getResolvedClass("Ljava/lang/Object;").getConstructor(a))(a),t())})}),v.push(function(t){o.asyncForEach(S,function(t,e){r.bsCl.initializeClass(a,t,function(n){if(null==n)e("Failed to initialize "+t);else if("Ljava/lang/ThreadGroup;"===t){var r=n.getConstructor(a),o=new r(a);o["<init>()V"](a,null,function(t){l["java/lang/Thread/group"]=o,e(t)})}else e()})},t)}),v.push(function(t){var e=r.bsCl.getInitializedClass(a,"Ljava/lang/System;").getConstructor(a);e["java/lang/System/initializeSystemClass()V"](a,null,t)}),v.push(function(t){var e=r.bsCl.getInitializedClass(a,"Ljava/lang/ClassLoader;").getConstructor(a);e["java/lang/ClassLoader/getSystemClassLoader()Ljava/lang/ClassLoader;"](a,null,function(e,n){if(e)t(e);else{r.systemClassLoader=n.$loader,l["java/lang/Thread/contextClassLoader"]=n;var o=r.enabledAssertions===!0?1:0;n["java/lang/ClassLoader/setDefaultAssertionStatus(Z)V"](a,[o],t)}})}),v.push(function(t){r.bsCl.initializeClass(a,"Ldoppio/security/DoppioProvider;",function(e){t(e?null:Error("Failed to initialize DoppioProvider."))})}),o.asyncSeries(v,function(t){setImmediate(function(){t?(r.status=h.JVMStatus.TERMINATED,n(t)):(r.status=h.JVMStatus.BOOTED,n(null,r))})})}return t.isReleaseBuild=function(){return!0},t.prototype.getResponsiveness=function(){var t=this.responsiveness;return"number"==typeof t?t:"function"==typeof t?t():void 0},t.getDefaultOptions=function(t){var e=u.join(t,"vendor","java_home");return{doppioHomePath:t,classpath:["."],bootstrapClasspath:v.classpath.map(function(t){return u.join(e,t)}),javaHomePath:e,nativeClasspath:[u.join(t,"natives")],enableSystemAssertions:!1,enableAssertions:!1,disableAssertions:null,properties:{},tmpDir:"/tmp",responsiveness:1e3,intMode:!1,dumpJITStats:!1}},t.getCompiledJDKURL=function(){return v.url},t.getJDKInfo=function(){return v},t.prototype.getSystemClassLoader=function(){return this.systemClassLoader},t.prototype.getNextRef=function(){return this.nextRef++},t.prototype.getParker=function(){return this.parker},t.prototype.runClass=function(t,n,r){var a=this;if(this.status!==h.JVMStatus.BOOTED)switch(this.status){case h.JVMStatus.BOOTING:throw Error("JVM is currently booting up. Please wait for it to call the bootup callback, which you passed to the constructor.");case h.JVMStatus.RUNNING:throw Error("JVM is already running.");case h.JVMStatus.TERMINATED:throw Error("This JVM has already terminated. Please create a new JVM.");case h.JVMStatus.TERMINATING:throw Error("This JVM is currently terminating. You should create a new JVM for each class you wish to run.")}this.terminationCb=r;var s=this.firstThread;t=o.int_classname(t),this.systemClassLoader.initializeClass(s,t,function(r){if(null!=r){var i,l=a.bsCl.getInitializedClass(s,"[Ljava/lang/String;").getConstructor(s),u=new l(s,n.length);for(i=0;i<n.length;i++)u.array[i]=o.initString(a.bsCl,n[i]);a.status=h.JVMStatus.RUNNING;var c=r.getConstructor(s);c["main([Ljava/lang/String;)V"]?c["main([Ljava/lang/String;)V"](s,[u]):s.throwNewException("Ljava/lang/NoSuchMethodError;","Could not find main method in class "+r.getExternalName()+".")}else e.stdout.write("Error: Could not find or load main class "+o.ext_classname(t)+"\n"),a.terminationCb(1)})},t.prototype.isJITDisabled=function(){return this.jitDisabled},t.prototype.shouldVtrace=function(t){return this.vtraceMethods[t]===!0},t.prototype.vtraceMethod=function(t){this.vtraceMethods[t]=!0},t.prototype.runJar=function(t,e){this.runClass("doppio.JarLauncher",t,e)},t.prototype.threadPoolIsEmpty=function(){var t,e;switch(this.status){case h.JVMStatus.BOOTING:return!1;case h.JVMStatus.BOOTED:return!1;case h.JVMStatus.RUNNING:return this.status=h.JVMStatus.TERMINATING,t=this.bsCl.getInitializedClass(this.firstThread,"Ljava/lang/System;"),e=t.getConstructor(this.firstThread),e["java/lang/System/exit(I)V"](this.firstThread,[0]),!1;case h.JVMStatus.TERMINATED:return!1;case h.JVMStatus.TERMINATING:return this.status=h.JVMStatus.TERMINATED,this.terminationCb&&this.terminationCb(this.exitCode),this.firstThread.close(),!0}},t.prototype.hasVMBooted=function(){return!(this.status===h.JVMStatus.BOOTING||this.status===h.JVMStatus.BOOTED)},t.prototype.halt=function(t){this.exitCode=t,this.status=h.JVMStatus.TERMINATING,this.threadPool.getThreads().forEach(function(t){t.setStatus(h.ThreadStatus.TERMINATED)})},t.prototype.getSystemProperty=function(t){return this.systemProperties[t]},t.prototype.getSystemPropertyNames=function(){return Object.keys(this.systemProperties)},t.prototype.getHeap=function(){return this.heap},t.prototype.internString=function(t,e){return this.internedStrings.has(t)?this.internedStrings.get(t):(e||(e=o.initString(this.bsCl,t)),this.internedStrings.set(t,e),e)},t.prototype.evalNativeModule=function(t){function a(t){p=t}function s(t){switch(t){case"doppiojvm":case"../doppiojvm":return h;case"fs":return l;case"path":return u;case"buffer":return c;case"browserfs":return m;case"pako/lib/zlib/zstream":return I;case"pako/lib/zlib/inflate":return y;case"pako/lib/zlib/deflate":return T;case"pako/lib/zlib/crc32":return E;case"pako/lib/zlib/adler32":return A;case"crypto":return o.are_in_browser()?null:f("crypto");default:return f(t)}}function i(t,e){var n=[];t.forEach(function(t){switch(t){case"require":n.push(s);break;case"exports":n.push({});break;default:n.push(s(t))}}),e.apply(null,n)}this.globalRequire||(this.globalRequire=_["default"]());var p,h=n(1),f=this.globalRequire,d=Function("require","define","registerNatives","process","DoppioJVM","Buffer",t);return d(s,i,a,e,h,r),p},t.prototype.registerNatives=function(t){var e,n;for(e in t)if(t.hasOwnProperty(e)){this.natives.hasOwnProperty(e)||(this.natives[e]={});var r=t[e];for(n in r)r.hasOwnProperty(n)&&(this.natives[e][n]=r[n])}},t.prototype.registerNative=function(t,e,n){this.registerNatives({clsName:{methSig:n}})},t.prototype.getNative=function(t,e){if(t=o.descriptor2typestr(t),this.natives.hasOwnProperty(t)){var n=this.natives[t];if(n.hasOwnProperty(e))return n[e]}return null},t.prototype.getNatives=function(){return this.natives},t.prototype.initializeNatives=function(t){var e=this,n=function(){if(r===e.nativeClasspath.length){var o=a.length;a.forEach(function(n){l.readFile(n,function(n,r){n||e.registerNatives(e.evalNativeModule(""+r)),0===--o&&t()})})}else{var s=e.nativeClasspath[r++];l.readdir(s,function(e,r){if(e)return t();var o,i;for(o=0;o<r.length;o++)i=r[o],".js"===i.substring(i.length-3,i.length)&&a.push(u.join(s,i));n()})}},r=0,a=[];n()},t.prototype._initSystemProperties=function(t,e,n,r,s){this.systemProperties=o.merge({"java.class.path":e.join(":"),"java.home":n,"java.ext.dirs":u.join(n,"lib","ext"),"java.io.tmpdir":r,"sun.boot.class.path":t.join(":"),"file.encoding":"UTF-8","java.vendor":"Doppio","java.version":"1.8","java.vendor.url":"https://github.com/plasma-umass/doppio","java.class.version":"52.0","java.specification.version":"1.8","line.separator":"\n","file.separator":u.sep,"path.separator":":","user.dir":u.resolve("."),"user.home":".","user.name":"DoppioUser","os.name":"doppio","os.arch":"js","os.version":"0","java.vm.name":"DoppioJVM 32-bit VM","java.vm.version":a.version,"java.vm.vendor":"PLASMA@UMass","java.awt.headless":""+o.are_in_browser(),"java.awt.graphicsenv":"classes.awt.CanvasGraphicsEnvironment","jline.terminal":"jline.UnsupportedTerminal","sun.arch.data.model":"32","sun.jnu.encoding":"UTF-8"},s)},t.prototype.getBootstrapClassLoader=function(){return this.bsCl},t.prototype.getStartupTime=function(){return this.startupTime},t.prototype.areSystemAssertionsEnabled=function(){return this.enableSystemAssertions},t.prototype.getEnabledAssertions=function(){return this.enabledAssertions},t.prototype.getDisabledAssertions=function(){return this.disabledAssertions},t.prototype.setPrintJITCompilation=function(t){this.printJITCompilation=t},t.prototype.shouldPrintJITCompilation=function(){return this.printJITCompilation},t.prototype.dumpCompiledCode=function(t){this.dumpCompiledCodeDir=t},t.prototype.shouldDumpCompiledCode=function(){return null!==this.dumpCompiledCodeDir},t.prototype.dumpObjectDefinition=function(t,e){this.shouldDumpCompiledCode()&&l.writeFile(u.resolve(this.dumpCompiledCodeDir,t.getExternalName()+".js"),e,function(){})},t.prototype.dumpBridgeMethod=function(t,e){this.shouldDumpCompiledCode()&&l.appendFile(u.resolve(this.dumpCompiledCodeDir,"vmtarget_bridge_methods.dump"),t+":\n"+e+"\n\n",function(){})},t.prototype.dumpCompiledMethod=function(t,e,n){this.shouldDumpCompiledCode()&&l.appendFile(u.resolve(this.dumpCompiledCodeDir,"JIT_compiled_methods.dump"),t+":"+e+":\n"+n+"\n\n",function(){})},t.prototype.dumpState=function(t,e){l.appendFile(t,this.threadPool.getThreads().map(function(t){return"Thread "+t.getRef()+":\n"+t.getPrintableStackTrace()}).join("\n\n"),e)},t}();t.exports=C}).call(e,n(3),n(6))},function(t,e,n){var r=n(4);t.exports=r.BFSRequire("buffer").Buffer},function(t,e,n){(function(t,r){"use strict";function a(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n={};return t.forEach(function(t){Object.keys(t).forEach(function(e){n[e]=t[e]})}),n}function o(){return"browser"===t.platform}function s(t){switch(t[0]){case"L":return t.slice(1,t.length-1).replace(/_/g,"__").replace(/[\/.;$<>\[\]:\\=^-]/g,"_");case"[":return"ARR_"+s(t.slice(1));default:return t}}function i(t){return t.replace(/\\/g,"\\\\")}function l(t,e,n){function r(o){o?n(o):(a++,a<t.length?e(t[a],r):n())}var a=-1;r()}function u(t,e){function n(a){a?e(a):(r++,r<t.length?t[r](n):e())}var r=-1;n()}function c(t,e,n){function r(o){o?n(t[a]):(a++,a<t.length?e(t[a],r):n())}var a=-1;r(!1)}function p(t,e,n){return!!n.isPublic()||(n.isProtected()?t.getPackageName()===e.getPackageName()||t.isSubclass(e):n.isPrivate()?t===e:t.getPackageName()===e.getPackageName())}function h(t){return t>rt.Constants.INT_MAX?rt.Constants.INT_MAX:t<rt.Constants.INT_MIN?rt.Constants.INT_MIN:0|t}function f(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=t.length),st&&ArrayBuffer.isView(t)){var a=t.byteOffset;return new r(t.buffer.slice(a,a+t.length))}var o,s=new r(n);for(o=0;o<n;o++)s.writeInt8(t[e+o],o);return s}function d(t){return!!(t&&"undefined"!=typeof Uint8Array&&t instanceof Uint8Array)}function g(t){return!!(t&&"undefined"!=typeof Int8Array&&t instanceof Int8Array)}function v(t,e,n){if(g(t))return new Uint8Array(t.buffer,t.byteOffset+e,n);if(Array.isArray(t)){if("undefined"!=typeof Uint8Array){var r=new Int8Array(n);return 0===e&&n===t.length?r.set(t,0):r.set(t.slice(e,e+n),0),new Uint8Array(r.buffer)}for(var a=Array(n),o=0;o<n;o++)a[o]=255&t[e+o];return a}throw new TypeError("Invalid array.")}function _(t,e,n){if(d(t))return new Int8Array(t.buffer,t.byteOffset+e,n);if(Array.isArray(t)){if("undefined"!=typeof Int8Array){var r=new Uint8Array(n);return 0===e&&n===t.length?r.set(t,0):r.set(t.slice(e,e+n),0),new Int8Array(r.buffer)}for(var a=Array(n),o=0;o<n;o++)a[o]=t[e+o],a[o]>127&&(a[o]|=4294967168);return a}throw new TypeError("Invalid array.")}function m(t){var e=ot.buffer2Arrayish(t);return _(e,0,e.length)}function T(t){return t>3.4028234663852886e38?Number.POSITIVE_INFINITY:0<t&&t<1.401298464324817e-45?0:t<-3.4028234663852886e38?Number.NEGATIVE_INFINITY:0>t&&t>-1.401298464324817e-45?0:t}function y(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.array.length);var r,a=t.array,o="",s=e+n;for(r=e;r<s;r++)o+=String.fromCharCode(a[r]);return o}function I(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}function E(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}function A(t){if("J"===t)return nt.ZERO;var e=t[0];return"["===e||"L"===e?null:0}function S(t){return R(t).replace(/\//g,".")}function C(t){return D(t.replace(/\./g,"/"))}function N(t){var n=t.match(/^\[*/)[0].length;if(n>255)return!1;if(n>0&&(t=t.slice(n)),"L"===t[0]){if(";"!==t[t.length-1])return!1;t=t.slice(1,-1)}if(t in e.internal2external)return!0;if(t.match(/\/{2,}/))return!1;for(var r=t.split("/"),a=0;a<r.length;a++)if(r[a].match(/[^$_a-z0-9]/i))return!1;return!0}function L(t){var e,n=0,r=[];for(n=0;n<t.length;n++)switch(t.charAt(n)){case"(":case")":break;case"L":e=t.indexOf(";",n),r.push(t.slice(n,e+1)),n=e;break;case"[":for(e=n+1;"["===t.charAt(e);)e++;"L"===t.charAt(e)?(e=t.indexOf(";",e),r.push(t.slice(n,e+1))):r.push(t.slice(n,e+1)),n=e;break;default:r.push(t.charAt(n))}return r}function b(t){return t.slice(1)}function O(t){return"["===t[0]}function w(t){return t in e.internal2external}function k(t){return"L"===t[0]}function R(t){var n=t[0];if(n in e.internal2external)return e.internal2external[n];if("L"===n)return t.slice(1,-1);if("["===n)return t;throw Error("Unrecognized type string: "+t)}function F(t){var n=t.shift();if(null==n)return null;if(void 0!==e.internal2external[n])return n;if("L"===n){for(var r="L";";"!==(n=t.shift());)r+=n;return r+";"}if("["===n)return"["+F(t);throw t.unshift(n),Error("Unrecognized descriptor: "+t.join(""))}function D(t){return void 0!==e.external2internal[t]?e.external2internal[t]:"["===t[0]?t:"L"+t+";"}function B(t,e,n){var r,a,o,s=[];for(r=0;r<e.length;r++)a=e[r],o=n[r],w(a)?(s.push(o.unbox()),"J"!==a&&"D"!==a||s.push(null)):s.push(o);return s}function M(t,e,n,r){e.initializeClass(t,"Ljava/lang/invoke/MethodHandleNatives;",function(a){if(null!==a){var o=a.getConstructor(t),s=L(n);s.push("[Ljava/lang/Class;"),e.resolveClasses(t,s,function(e){var n=s.map(function(n){return e[n].getClassObject(t)});n.pop();var a=n.pop(),i=e["[Ljava/lang/Class;"].getConstructor(t),l=new i(t,n.length);l.array=n,o["java/lang/invoke/MethodHandleNatives/findMethodHandleType(Ljava/lang/Class;[Ljava/lang/Class;)Ljava/lang/invoke/MethodType;"](t,[a,l],r)})}})}function j(t){var e,n,r=L(t),a=r.length-1;for(r.pop(),e=0;e<r.length;e++)n=r[e],"D"!==n&&"J"!==n||a++;return a}function U(t,e){var n="(";return void 0!==e&&null!==e&&e.array.forEach(function(t){n+=t.$cls.getInternalName()}),n+=")"+t.$cls.getInternalName()}function P(t,e){return null!=e&&null!=e.$loader?e.$loader:t.getBsCl()}function x(t,e,n,r,a){for(var o=r,s=e+a,i=e;i<s;i++)n.array[o++]=t.array[i]}function V(t,e,n,r,a,o){for(var s=a,i=n+o,l=r.getClass().getComponentClass(),u=n;u<i;u++){if(null!==e.array[u]&&!e.array[u].getClass().isCastable(l))return void t.throwNewException("Ljava/lang/ArrayStoreException;","Array element in src cannot be cast to dest array type.");r.array[s]=e.array[u],s++}}function z(t,e){var n=W(t,e),r=t.getResolvedClass("Ljava/lang/String;").getConstructor(null),a=new r(null);return a["java/lang/String/value"]=n,a}function W(t,e){for(var n=t.getInitializedClass(null,"[C").getConstructor(null),r=new n(null,e.length),a=r.array,o=0;o<e.length;o++)a[o]=e.charCodeAt(o);return r}function G(t,e,n){return new(e.getConstructor(t))(t,n)}function J(t,e,n,r){var a=e.getInitializedClass(t,n);return G(t,a,r)}function K(t,e,n,r){var a=e.getInitializedClass(t,n);return new(a.getConstructor(t))(t,r)}function H(t,e){return new(e.getConstructor(t))(t)}function Y(t,e,n){var r=e.getInitializedClass(t,n);return H(t,r)}function q(t,e,n){return e.getInitializedClass(t,n).getConstructor(t)}function Z(t,e,n){var r=G(t,e,0);return r.array=n,r}function X(t,e,n,r){var a=J(t,e,n,0);return a.array=r,a}function $(t){switch(t){case"B":return"Ljava/lang/Byte;";case"C":return"Ljava/lang/Character;";case"D":return"Ljava/lang/Double;";case"F":return"Ljava/lang/Float;";case"I":return"Ljava/lang/Integer;";case"J":return"Ljava/lang/Long;";case"S":return"Ljava/lang/Short;";case"Z":return"Ljava/lang/Boolean;";case"V":return"Ljava/lang/Void;";default:throw Error("Tried to box a non-primitive class: "+this.className)}}function Q(t,e,n){var r=t.getBsCl().getInitializedClass(t,$(e)),a=r.getConstructor(t);return a.box(n)}function tt(t,e,n,r,a,o){void 0===o&&(o=0);var s,i,l=L(n),u=G(t,e,l.length-(a?1:2)-o),c=0,p=u.array;for(l.pop(),a||l.shift(),o>0&&(l=l.slice(o),r=r.slice(o)),s=0;s<l.length;s++){switch(i=l[s],i[0]){case"[":case"L":p[s]=r[c];break;case"J":case"D":p[s]=Q(t,i,r[c]),c++;break;default:p[s]=Q(t,i,r[c])}c++}return u}function et(t){return function(e,n){e?t.throwException(e):t.asyncReturn(n)}}var nt=n(8),rt=n(9),at=n(4),ot=at.BFSRequire("bfs_utils");e.merge=a,e.are_in_browser=o,e.typedArraysSupported="undefined"!=typeof ArrayBuffer,e.jvmName2JSName=s,e.reescapeJVMName=i,e.asyncForEach=l,e.asyncSeries=u,e.asyncFind=c,Math.imul||(Math.imul=function(t,e){var n=t>>>16&65535,r=65535&t,a=e>>>16&65535,o=65535&e;return r*o+(n*o+r*a<<16>>>0)|0}),Math.expm1||(Math.expm1=function(t){return Math.abs(t)<1e-5?t+.5*t*t:Math.exp(t)-1}),Math.sinh||(Math.sinh=function(t){var e=Math.exp(t);return(e-1/e)/2}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){if(null==this)throw new TypeError;var n=Object(this),r=n.length>>>0;if(0===r)return-1;var a=0;if(void 0!==e&&(a=+e,a!=a?a=0:0!=a&&a!=1/0&&a!=-(1/0)&&(a=((a>0?1:0)||-1)*Math.floor(Math.abs(a)))),a>=r)return-1;for(var o=a>=0?a:Math.max(r-Math.abs(a),0);o<r;o++)if(o in n&&n[o]===t)return o;return-1}),e.checkAccess=p,e.float2int=h;var st="undefined"!=typeof ArrayBuffer;e.byteArray2Buffer=f,e.isUint8Array=d,e.isInt8Array=g,e.i82u8=v,e.u82i8=_,e.buff2i8=m,e.wrapFloat=T,e.chars2jsStr=y,e.bytestr2Array=I,e.array2bytestr=E,function(t){t[t.PUBLIC=1]="PUBLIC",t[t.PRIVATE=2]="PRIVATE",t[t.PROTECTED=4]="PROTECTED",t[t.STATIC=8]="STATIC",t[t.FINAL=16]="FINAL",t[t.SYNCHRONIZED=32]="SYNCHRONIZED",t[t.SUPER=32]="SUPER",t[t.VOLATILE=64]="VOLATILE",t[t.TRANSIENT=128]="TRANSIENT",t[t.VARARGS=128]="VARARGS",t[t.NATIVE=256]="NATIVE",t[t.INTERFACE=512]="INTERFACE",t[t.ABSTRACT=1024]="ABSTRACT",t[t.STRICT=2048]="STRICT"}(e.FlagMasks||(e.FlagMasks={}));var it=e.FlagMasks,lt=function(){function t(t){this["byte"]=t}return t.prototype.isPublic=function(){return(this["byte"]&it.PUBLIC)>0},t.prototype.isPrivate=function(){return(this["byte"]&it.PRIVATE)>0},t.prototype.isProtected=function(){return(this["byte"]&it.PROTECTED)>0},t.prototype.isStatic=function(){return(this["byte"]&it.STATIC)>0},t.prototype.isFinal=function(){return(this["byte"]&it.FINAL)>0},t.prototype.isSynchronized=function(){return(this["byte"]&it.SYNCHRONIZED)>0},t.prototype.isSuper=function(){return(this["byte"]&it.SUPER)>0},t.prototype.isVolatile=function(){return(this["byte"]&it.VOLATILE)>0},t.prototype.isTransient=function(){return(this["byte"]&it.TRANSIENT)>0},t.prototype.isNative=function(){return(this["byte"]&it.NATIVE)>0},t.prototype.isInterface=function(){return(this["byte"]&it.INTERFACE)>0},t.prototype.isAbstract=function(){return(this["byte"]&it.ABSTRACT)>0},t.prototype.isStrict=function(){return(this["byte"]&it.STRICT)>0},t.prototype.setNative=function(t){t?this["byte"]=this["byte"]|it.NATIVE:this["byte"]=this["byte"]&~it.NATIVE},t.prototype.isVarArgs=function(){return(this["byte"]&it.VARARGS)>0},t.prototype.getRawByte=function(){return this["byte"]},t}();e.Flags=lt,e.initialValue=A,e.ext_classname=S,e.int_classname=C,e.verify_int_classname=N,e.internal2external={B:"byte",C:"char",D:"double",F:"float",I:"int",J:"long",S:"short",V:"void",Z:"boolean"},e.external2internal={};for(var ut in e.internal2external)e.external2internal[e.internal2external[ut]]=ut;e.getTypes=L,e.get_component_type=b,e.is_array_type=O,e.is_primitive_type=w,e.is_reference_type=k,e.descriptor2typestr=R,e.carr2descriptor=F,e.typestr2descriptor=D,e.unboxArguments=B,e.createMethodType=M,e.getMethodDescriptorWordSize=j,e.getDescriptorString=U,e.getLoader=P,e.arraycopyNoCheck=x,e.arraycopyCheck=V,e.initString=z,e.initCarr=W,e.newArrayFromClass=G,e.newArray=J,e.multiNewArray=K,e.newObjectFromClass=H,e.newObject=Y,e.getStaticFields=q,e.newArrayFromDataWithClass=Z,e.newArrayFromData=X,e.boxClassName=$,e.boxPrimitiveValue=Q,e.boxArguments=tt,e.forwardResult=et}).call(e,n(3),n(6))},function(t,e){"use strict";var n=function(){function t(t,e){this.low_=0|t,this.high_=0|e}return t.fromInt=function(e){if(-128<=e&&e<128){var n=t.IntCache_[e];if(n)return n}var r=new t(e,e<0?-1:0);return-128<=e&&e<128&&(t.IntCache_[e]=r),r},t.fromNumber=function(e){return isNaN(e)||!isFinite(e)?t.ZERO:e<=-t.TWO_PWR_63_DBL_?t.MIN_VALUE:e+1>=t.TWO_PWR_63_DBL_?t.MAX_VALUE:e<0?t.fromNumber(-e).negate():new t(e%t.TWO_PWR_32_DBL_|0,e/t.TWO_PWR_32_DBL_|0)},t.fromBits=function(e,n){return new t(e,n)},t.fromString=function(e,n){if(0==e.length)throw Error("number format error: empty string");var r=n||10;if(r<2||36<r)throw Error("radix out of range: "+r);if("-"==e.charAt(0))return t.fromString(e.substring(1),r).negate();if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+e);for(var a=t.fromNumber(Math.pow(r,8)),o=t.ZERO,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),l=parseInt(e.substring(s,s+i),r);if(i<8){var u=t.fromNumber(Math.pow(r,i));o=o.multiply(u).add(t.fromNumber(l))}else o=o.multiply(a),o=o.add(t.fromNumber(l))}return o},t.prototype.toInt=function(){return this.low_},t.prototype.toNumber=function(){return this.high_*t.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},t.prototype.toString=function(e){var n=e||10;if(n<2||36<n)throw Error("radix out of range: "+n);if(this.isZero())return"0";if(this.isNegative()){if(this.equals(t.MIN_VALUE)){var r=t.fromNumber(n),a=this.div(r),o=a.multiply(r).subtract(this);return a.toString(n)+o.toInt().toString(n)}return"-"+this.negate().toString(n)}for(var s=t.fromNumber(Math.pow(n,6)),o=this,i="";;){var l=o.div(s),u=o.subtract(l.multiply(s)).toInt(),c=u.toString(n);if(o=l,o.isZero())return c+i;for(;c.length<6;)c="0"+c;i=""+c+i}},t.prototype.getHighBits=function(){return this.high_},t.prototype.getLowBits=function(){return this.low_},t.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:t.TWO_PWR_32_DBL_+this.low_},t.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(t.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var e=0!=this.high_?this.high_:this.low_,n=31;n>0&&0==(e&1<<n);n--);return 0!=this.high_?n+33:n+1},t.prototype.isZero=function(){return 0==this.high_&&0==this.low_},t.prototype.isNegative=function(){return this.high_<0},t.prototype.isOdd=function(){return 1==(1&this.low_)},t.prototype.equals=function(t){return this.high_==t.high_&&this.low_==t.low_},t.prototype.notEquals=function(t){return this.high_!=t.high_||this.low_!=t.low_},t.prototype.lessThan=function(t){return this.compare(t)<0},t.prototype.lessThanOrEqual=function(t){return this.compare(t)<=0},t.prototype.greaterThan=function(t){return this.compare(t)>0},t.prototype.greaterThanOrEqual=function(t){return this.compare(t)>=0},t.prototype.compare=function(t){if(this.equals(t))return 0;var e=this.isNegative(),n=t.isNegative();return e&&!n?-1:!e&&n?1:this.subtract(t).isNegative()?-1:1},t.prototype.negate=function(){return this.equals(t.MIN_VALUE)?t.MIN_VALUE:this.not().add(t.ONE)},t.prototype.add=function(e){var n=this.high_>>>16,r=65535&this.high_,a=this.low_>>>16,o=65535&this.low_,s=e.high_>>>16,i=65535&e.high_,l=e.low_>>>16,u=65535&e.low_,c=0,p=0,h=0,f=0;return f+=o+u,h+=f>>>16,f&=65535,h+=a+l,p+=h>>>16,h&=65535,p+=r+i,c+=p>>>16,p&=65535,c+=n+s,c&=65535,t.fromBits(h<<16|f,c<<16|p)},t.prototype.subtract=function(t){return this.add(t.negate())},t.prototype.multiply=function(e){if(this.isZero())return t.ZERO;if(e.isZero())return t.ZERO;if(this.equals(t.MIN_VALUE))return e.isOdd()?t.MIN_VALUE:t.ZERO;if(e.equals(t.MIN_VALUE))return this.isOdd()?t.MIN_VALUE:t.ZERO;if(this.isNegative())return e.isNegative()?this.negate().multiply(e.negate()):this.negate().multiply(e).negate();if(e.isNegative())return this.multiply(e.negate()).negate();if(this.lessThan(t.TWO_PWR_24_)&&e.lessThan(t.TWO_PWR_24_))return t.fromNumber(this.toNumber()*e.toNumber());var n=this.high_>>>16,r=65535&this.high_,a=this.low_>>>16,o=65535&this.low_,s=e.high_>>>16,i=65535&e.high_,l=e.low_>>>16,u=65535&e.low_,c=0,p=0,h=0,f=0;return f+=o*u,h+=f>>>16,f&=65535,h+=a*u,p+=h>>>16,h&=65535,h+=o*l,p+=h>>>16,h&=65535,p+=r*u,c+=p>>>16,p&=65535,p+=a*l,c+=p>>>16,p&=65535,p+=o*i,c+=p>>>16,p&=65535,c+=n*u+r*l+a*i+o*s,c&=65535,t.fromBits(h<<16|f,c<<16|p)},t.prototype.div=function(e){if(e.isZero())throw Error("division by zero");if(this.isZero())return t.ZERO;if(this.equals(t.MIN_VALUE)){if(e.equals(t.ONE)||e.equals(t.NEG_ONE))return t.MIN_VALUE;if(e.equals(t.MIN_VALUE))return t.ONE;var n=this.shiftRight(1),r=n.div(e).shiftLeft(1);if(r.equals(t.ZERO))return e.isNegative()?t.ONE:t.NEG_ONE;var a=this.subtract(e.multiply(r)),o=r.add(a.div(e));return o}if(e.equals(t.MIN_VALUE))return t.ZERO;if(this.isNegative())return e.isNegative()?this.negate().div(e.negate()):this.negate().div(e).negate();if(e.isNegative())return this.div(e.negate()).negate();for(var s=t.ZERO,a=this;a.greaterThanOrEqual(e);){var i=Math.max(1,Math.floor(a.toNumber()/e.toNumber())),l=Math.ceil(Math.log(i)/Math.LN2),u=1;l>48&&(u=Math.pow(2,l-48));for(var c=t.fromNumber(i),p=c.multiply(e);p.isNegative()||p.greaterThan(a);)i-=u,
c=t.fromNumber(i),p=c.multiply(e);c.isZero()&&(c=t.ONE),s=s.add(c),a=a.subtract(p)}return s},t.prototype.modulo=function(t){return this.subtract(this.div(t).multiply(t))},t.prototype.not=function(){return t.fromBits(~this.low_,~this.high_)},t.prototype.and=function(e){return t.fromBits(this.low_&e.low_,this.high_&e.high_)},t.prototype.or=function(e){return t.fromBits(this.low_|e.low_,this.high_|e.high_)},t.prototype.xor=function(e){return t.fromBits(this.low_^e.low_,this.high_^e.high_)},t.prototype.shiftLeft=function(e){if(e&=63,0==e)return this;var n=this.low_;if(e<32){var r=this.high_;return t.fromBits(n<<e,r<<e|n>>>32-e)}return t.fromBits(0,n<<e-32)},t.prototype.shiftRight=function(e){if(e&=63,0==e)return this;var n=this.high_;if(e<32){var r=this.low_;return t.fromBits(r>>>e|n<<32-e,n>>e)}return t.fromBits(n>>e-32,n>=0?0:-1)},t.prototype.shiftRightUnsigned=function(e){if(e&=63,0==e)return this;var n=this.high_;if(e<32){var r=this.low_;return t.fromBits(r>>>e|n<<32-e,n>>>e)}return 32==e?t.fromBits(n,0):t.fromBits(n>>>e-32,0)},t.IntCache_={},t.TWO_PWR_16_DBL_=65536,t.TWO_PWR_24_DBL_=1<<24,t.TWO_PWR_32_DBL_=t.TWO_PWR_16_DBL_*t.TWO_PWR_16_DBL_,t.TWO_PWR_31_DBL_=t.TWO_PWR_32_DBL_/2,t.TWO_PWR_48_DBL_=t.TWO_PWR_32_DBL_*t.TWO_PWR_16_DBL_,t.TWO_PWR_64_DBL_=t.TWO_PWR_32_DBL_*t.TWO_PWR_32_DBL_,t.TWO_PWR_63_DBL_=t.TWO_PWR_64_DBL_/2,t.ZERO=t.fromInt(0),t.ONE=t.fromInt(1),t.NEG_ONE=t.fromInt(-1),t.MAX_VALUE=t.fromBits(4294967295,2147483647),t.MIN_VALUE=t.fromBits(0,2147483648),t.TWO_PWR_24_=t.fromInt(t.TWO_PWR_24_DBL_),t}();t.exports=n},function(t,e){"use strict";function n(t,e){e.forEach(function(e){o[e]=t})}!function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADED=1]="LOADED",t[t.RESOLVED=2]="RESOLVED",t[t.INITIALIZED=3]="INITIALIZED"}(e.ClassState||(e.ClassState={}));e.ClassState;!function(t){t[t.NEW=0]="NEW",t[t.RUNNABLE=1]="RUNNABLE",t[t.BLOCKED=2]="BLOCKED",t[t.UNINTERRUPTABLY_BLOCKED=3]="UNINTERRUPTABLY_BLOCKED",t[t.WAITING=4]="WAITING",t[t.TIMED_WAITING=5]="TIMED_WAITING",t[t.ASYNC_WAITING=6]="ASYNC_WAITING",t[t.PARKED=7]="PARKED",t[t.TERMINATED=8]="TERMINATED"}(e.ThreadStatus||(e.ThreadStatus={}));e.ThreadStatus;!function(t){t[t.ALIVE=1]="ALIVE",t[t.TERMINATED=2]="TERMINATED",t[t.RUNNABLE=4]="RUNNABLE",t[t.BLOCKED_ON_MONITOR_ENTER=1024]="BLOCKED_ON_MONITOR_ENTER",t[t.WAITING_INDEFINITELY=16]="WAITING_INDEFINITELY",t[t.WAITING_WITH_TIMEOUT=32]="WAITING_WITH_TIMEOUT"}(e.JVMTIThreadState||(e.JVMTIThreadState={}));e.JVMTIThreadState;!function(t){t[t.TRUE=0]="TRUE",t[t.FALSE=1]="FALSE",t[t.INDETERMINATE=2]="INDETERMINATE"}(e.TriState||(e.TriState={}));e.TriState;!function(t){t[t.BOOTING=0]="BOOTING",t[t.BOOTED=1]="BOOTED",t[t.RUNNING=2]="RUNNING",t[t.TERMINATING=3]="TERMINATING",t[t.TERMINATED=4]="TERMINATED"}(e.JVMStatus||(e.JVMStatus={}));e.JVMStatus;!function(t){t[t.INTERNAL=0]="INTERNAL",t[t.BYTECODE=1]="BYTECODE",t[t.NATIVE=2]="NATIVE"}(e.StackFrameType||(e.StackFrameType={}));e.StackFrameType;!function(t){t[t.INT_MAX=Math.pow(2,31)-1]="INT_MAX",t[t.INT_MIN=-t.INT_MAX-1]="INT_MIN",t[t.FLOAT_POS_INFINITY=Math.pow(2,128)]="FLOAT_POS_INFINITY",t[t.FLOAT_NEG_INFINITY=-1*t.FLOAT_POS_INFINITY]="FLOAT_NEG_INFINITY",t[t.FLOAT_POS_INFINITY_AS_INT=2139095040]="FLOAT_POS_INFINITY_AS_INT",t[t.FLOAT_NEG_INFINITY_AS_INT=-8388608]="FLOAT_NEG_INFINITY_AS_INT",t[t.FLOAT_NaN_AS_INT=2143289344]="FLOAT_NaN_AS_INT"}(e.Constants||(e.Constants={}));e.Constants;!function(t){t[t.CLASS=7]="CLASS",t[t.FIELDREF=9]="FIELDREF",t[t.METHODREF=10]="METHODREF",t[t.INTERFACE_METHODREF=11]="INTERFACE_METHODREF",t[t.STRING=8]="STRING",t[t.INTEGER=3]="INTEGER",t[t.FLOAT=4]="FLOAT",t[t.LONG=5]="LONG",t[t.DOUBLE=6]="DOUBLE",t[t.NAME_AND_TYPE=12]="NAME_AND_TYPE",t[t.UTF8=1]="UTF8",t[t.METHOD_HANDLE=15]="METHOD_HANDLE",t[t.METHOD_TYPE=16]="METHOD_TYPE",t[t.INVOKE_DYNAMIC=18]="INVOKE_DYNAMIC"}(e.ConstantPoolItemType||(e.ConstantPoolItemType={}));e.ConstantPoolItemType;!function(t){t[t.SAME_FRAME=0]="SAME_FRAME",t[t.SAME_LOCALS_1_STACK_ITEM_FRAME=1]="SAME_LOCALS_1_STACK_ITEM_FRAME",t[t.SAME_LOCALS_1_STACK_ITEM_FRAME_EXTENDED=2]="SAME_LOCALS_1_STACK_ITEM_FRAME_EXTENDED",t[t.CHOP_FRAME=3]="CHOP_FRAME",t[t.SAME_FRAME_EXTENDED=4]="SAME_FRAME_EXTENDED",t[t.APPEND_FRAME=5]="APPEND_FRAME",t[t.FULL_FRAME=6]="FULL_FRAME"}(e.StackMapTableEntryType||(e.StackMapTableEntryType={}));e.StackMapTableEntryType;!function(t){t[t.GETFIELD=1]="GETFIELD",t[t.GETSTATIC=2]="GETSTATIC",t[t.PUTFIELD=3]="PUTFIELD",t[t.PUTSTATIC=4]="PUTSTATIC",t[t.INVOKEVIRTUAL=5]="INVOKEVIRTUAL",t[t.INVOKESTATIC=6]="INVOKESTATIC",t[t.INVOKESPECIAL=7]="INVOKESPECIAL",t[t.NEWINVOKESPECIAL=8]="NEWINVOKESPECIAL",t[t.INVOKEINTERFACE=9]="INVOKEINTERFACE"}(e.MethodHandleReferenceKind||(e.MethodHandleReferenceKind={}));e.MethodHandleReferenceKind;!function(t){t[t.AALOAD=50]="AALOAD",t[t.AASTORE=83]="AASTORE",t[t.ACONST_NULL=1]="ACONST_NULL",t[t.ALOAD=25]="ALOAD",t[t.ALOAD_0=42]="ALOAD_0",t[t.ALOAD_1=43]="ALOAD_1",t[t.ALOAD_2=44]="ALOAD_2",t[t.ALOAD_3=45]="ALOAD_3",t[t.ANEWARRAY=189]="ANEWARRAY",t[t.ARETURN=176]="ARETURN",t[t.ARRAYLENGTH=190]="ARRAYLENGTH",t[t.ASTORE=58]="ASTORE",t[t.ASTORE_0=75]="ASTORE_0",t[t.ASTORE_1=76]="ASTORE_1",t[t.ASTORE_2=77]="ASTORE_2",t[t.ASTORE_3=78]="ASTORE_3",t[t.ATHROW=191]="ATHROW",t[t.BALOAD=51]="BALOAD",t[t.BASTORE=84]="BASTORE",t[t.BIPUSH=16]="BIPUSH",t[t.BREAKPOINT=202]="BREAKPOINT",t[t.CALOAD=52]="CALOAD",t[t.CASTORE=85]="CASTORE",t[t.CHECKCAST=192]="CHECKCAST",t[t.D2F=144]="D2F",t[t.D2I=142]="D2I",t[t.D2L=143]="D2L",t[t.DADD=99]="DADD",t[t.DALOAD=49]="DALOAD",t[t.DASTORE=82]="DASTORE",t[t.DCMPG=152]="DCMPG",t[t.DCMPL=151]="DCMPL",t[t.DCONST_0=14]="DCONST_0",t[t.DCONST_1=15]="DCONST_1",t[t.DDIV=111]="DDIV",t[t.DLOAD=24]="DLOAD",t[t.DLOAD_0=38]="DLOAD_0",t[t.DLOAD_1=39]="DLOAD_1",t[t.DLOAD_2=40]="DLOAD_2",t[t.DLOAD_3=41]="DLOAD_3",t[t.DMUL=107]="DMUL",t[t.DNEG=119]="DNEG",t[t.DREM=115]="DREM",t[t.DRETURN=175]="DRETURN",t[t.DSTORE=57]="DSTORE",t[t.DSTORE_0=71]="DSTORE_0",t[t.DSTORE_1=72]="DSTORE_1",t[t.DSTORE_2=73]="DSTORE_2",t[t.DSTORE_3=74]="DSTORE_3",t[t.DSUB=103]="DSUB",t[t.DUP=89]="DUP",t[t.DUP_X1=90]="DUP_X1",t[t.DUP_X2=91]="DUP_X2",t[t.DUP2=92]="DUP2",t[t.DUP2_X1=93]="DUP2_X1",t[t.DUP2_X2=94]="DUP2_X2",t[t.F2D=141]="F2D",t[t.F2I=139]="F2I",t[t.F2L=140]="F2L",t[t.FADD=98]="FADD",t[t.FALOAD=48]="FALOAD",t[t.FASTORE=81]="FASTORE",t[t.FCMPG=150]="FCMPG",t[t.FCMPL=149]="FCMPL",t[t.FCONST_0=11]="FCONST_0",t[t.FCONST_1=12]="FCONST_1",t[t.FCONST_2=13]="FCONST_2",t[t.FDIV=110]="FDIV",t[t.FLOAD=23]="FLOAD",t[t.FLOAD_0=34]="FLOAD_0",t[t.FLOAD_1=35]="FLOAD_1",t[t.FLOAD_2=36]="FLOAD_2",t[t.FLOAD_3=37]="FLOAD_3",t[t.FMUL=106]="FMUL",t[t.FNEG=118]="FNEG",t[t.FREM=114]="FREM",t[t.FRETURN=174]="FRETURN",t[t.FSTORE=56]="FSTORE",t[t.FSTORE_0=67]="FSTORE_0",t[t.FSTORE_1=68]="FSTORE_1",t[t.FSTORE_2=69]="FSTORE_2",t[t.FSTORE_3=70]="FSTORE_3",t[t.FSUB=102]="FSUB",t[t.GETFIELD=180]="GETFIELD",t[t.GETSTATIC=178]="GETSTATIC",t[t.GOTO=167]="GOTO",t[t.GOTO_W=200]="GOTO_W",t[t.I2B=145]="I2B",t[t.I2C=146]="I2C",t[t.I2D=135]="I2D",t[t.I2F=134]="I2F",t[t.I2L=133]="I2L",t[t.I2S=147]="I2S",t[t.IADD=96]="IADD",t[t.IALOAD=46]="IALOAD",t[t.IAND=126]="IAND",t[t.IASTORE=79]="IASTORE",t[t.ICONST_M1=2]="ICONST_M1",t[t.ICONST_0=3]="ICONST_0",t[t.ICONST_1=4]="ICONST_1",t[t.ICONST_2=5]="ICONST_2",t[t.ICONST_3=6]="ICONST_3",t[t.ICONST_4=7]="ICONST_4",t[t.ICONST_5=8]="ICONST_5",t[t.IDIV=108]="IDIV",t[t.IF_ACMPEQ=165]="IF_ACMPEQ",t[t.IF_ACMPNE=166]="IF_ACMPNE",t[t.IF_ICMPEQ=159]="IF_ICMPEQ",t[t.IF_ICMPGE=162]="IF_ICMPGE",t[t.IF_ICMPGT=163]="IF_ICMPGT",t[t.IF_ICMPLE=164]="IF_ICMPLE",t[t.IF_ICMPLT=161]="IF_ICMPLT",t[t.IF_ICMPNE=160]="IF_ICMPNE",t[t.IFEQ=153]="IFEQ",t[t.IFGE=156]="IFGE",t[t.IFGT=157]="IFGT",t[t.IFLE=158]="IFLE",t[t.IFLT=155]="IFLT",t[t.IFNE=154]="IFNE",t[t.IFNONNULL=199]="IFNONNULL",t[t.IFNULL=198]="IFNULL",t[t.IINC=132]="IINC",t[t.ILOAD=21]="ILOAD",t[t.ILOAD_0=26]="ILOAD_0",t[t.ILOAD_1=27]="ILOAD_1",t[t.ILOAD_2=28]="ILOAD_2",t[t.ILOAD_3=29]="ILOAD_3",t[t.IMUL=104]="IMUL",t[t.INEG=116]="INEG",t[t.INSTANCEOF=193]="INSTANCEOF",t[t.INVOKEDYNAMIC=186]="INVOKEDYNAMIC",t[t.INVOKEINTERFACE=185]="INVOKEINTERFACE",t[t.INVOKESPECIAL=183]="INVOKESPECIAL",t[t.INVOKESTATIC=184]="INVOKESTATIC",t[t.INVOKEVIRTUAL=182]="INVOKEVIRTUAL",t[t.IOR=128]="IOR",t[t.IREM=112]="IREM",t[t.IRETURN=172]="IRETURN",t[t.ISHL=120]="ISHL",t[t.ISHR=122]="ISHR",t[t.ISTORE=54]="ISTORE",t[t.ISTORE_0=59]="ISTORE_0",t[t.ISTORE_1=60]="ISTORE_1",t[t.ISTORE_2=61]="ISTORE_2",t[t.ISTORE_3=62]="ISTORE_3",t[t.ISUB=100]="ISUB",t[t.IUSHR=124]="IUSHR",t[t.IXOR=130]="IXOR",t[t.JSR=168]="JSR",t[t.JSR_W=201]="JSR_W",t[t.L2D=138]="L2D",t[t.L2F=137]="L2F",t[t.L2I=136]="L2I",t[t.LADD=97]="LADD",t[t.LALOAD=47]="LALOAD",t[t.LAND=127]="LAND",t[t.LASTORE=80]="LASTORE",t[t.LCMP=148]="LCMP",t[t.LCONST_0=9]="LCONST_0",t[t.LCONST_1=10]="LCONST_1",t[t.LDC=18]="LDC",t[t.LDC_W=19]="LDC_W",t[t.LDC2_W=20]="LDC2_W",t[t.LDIV=109]="LDIV",t[t.LLOAD=22]="LLOAD",t[t.LLOAD_0=30]="LLOAD_0",t[t.LLOAD_1=31]="LLOAD_1",t[t.LLOAD_2=32]="LLOAD_2",t[t.LLOAD_3=33]="LLOAD_3",t[t.LMUL=105]="LMUL",t[t.LNEG=117]="LNEG",t[t.LOOKUPSWITCH=171]="LOOKUPSWITCH",t[t.LOR=129]="LOR",t[t.LREM=113]="LREM",t[t.LRETURN=173]="LRETURN",t[t.LSHL=121]="LSHL",t[t.LSHR=123]="LSHR",t[t.LSTORE=55]="LSTORE",t[t.LSTORE_0=63]="LSTORE_0",t[t.LSTORE_1=64]="LSTORE_1",t[t.LSTORE_2=65]="LSTORE_2",t[t.LSTORE_3=66]="LSTORE_3",t[t.LSUB=101]="LSUB",t[t.LUSHR=125]="LUSHR",t[t.LXOR=131]="LXOR",t[t.MONITORENTER=194]="MONITORENTER",t[t.MONITOREXIT=195]="MONITOREXIT",t[t.MULTIANEWARRAY=197]="MULTIANEWARRAY",t[t.NEW=187]="NEW",t[t.NEWARRAY=188]="NEWARRAY",t[t.NOP=0]="NOP",t[t.POP=87]="POP",t[t.POP2=88]="POP2",t[t.PUTFIELD=181]="PUTFIELD",t[t.PUTSTATIC=179]="PUTSTATIC",t[t.RET=169]="RET",t[t.RETURN=177]="RETURN",t[t.SALOAD=53]="SALOAD",t[t.SASTORE=86]="SASTORE",t[t.SIPUSH=17]="SIPUSH",t[t.SWAP=95]="SWAP",t[t.TABLESWITCH=170]="TABLESWITCH",t[t.WIDE=196]="WIDE",t[t.GETSTATIC_FAST32=208]="GETSTATIC_FAST32",t[t.GETSTATIC_FAST64=209]="GETSTATIC_FAST64",t[t.NEW_FAST=210]="NEW_FAST",t[t.ANEWARRAY_FAST=213]="ANEWARRAY_FAST",t[t.CHECKCAST_FAST=214]="CHECKCAST_FAST",t[t.INSTANCEOF_FAST=215]="INSTANCEOF_FAST",t[t.MULTIANEWARRAY_FAST=216]="MULTIANEWARRAY_FAST",t[t.PUTSTATIC_FAST32=217]="PUTSTATIC_FAST32",t[t.PUTSTATIC_FAST64=218]="PUTSTATIC_FAST64",t[t.GETFIELD_FAST32=219]="GETFIELD_FAST32",t[t.GETFIELD_FAST64=220]="GETFIELD_FAST64",t[t.PUTFIELD_FAST32=221]="PUTFIELD_FAST32",t[t.PUTFIELD_FAST64=222]="PUTFIELD_FAST64",t[t.INVOKENONVIRTUAL_FAST=223]="INVOKENONVIRTUAL_FAST",t[t.INVOKESTATIC_FAST=240]="INVOKESTATIC_FAST",t[t.INVOKEVIRTUAL_FAST=241]="INVOKEVIRTUAL_FAST",t[t.INVOKEINTERFACE_FAST=242]="INVOKEINTERFACE_FAST",t[t.INVOKEHANDLE=243]="INVOKEHANDLE",t[t.INVOKEBASIC=244]="INVOKEBASIC",t[t.LINKTOSPECIAL=245]="LINKTOSPECIAL",t[t.LINKTOVIRTUAL=247]="LINKTOVIRTUAL",t[t.INVOKEDYNAMIC_FAST=248]="INVOKEDYNAMIC_FAST"}(e.OpCode||(e.OpCode={}));var r=e.OpCode;!function(t){t[t.OPCODE_ONLY=0]="OPCODE_ONLY",t[t.CONSTANT_POOL_UINT8=1]="CONSTANT_POOL_UINT8",t[t.CONSTANT_POOL=2]="CONSTANT_POOL",t[t.CONSTANT_POOL_AND_UINT8_VALUE=3]="CONSTANT_POOL_AND_UINT8_VALUE",t[t.UINT8_VALUE=4]="UINT8_VALUE",t[t.UINT8_AND_INT8_VALUE=5]="UINT8_AND_INT8_VALUE",t[t.INT8_VALUE=6]="INT8_VALUE",t[t.INT16_VALUE=7]="INT16_VALUE",t[t.INT32_VALUE=8]="INT32_VALUE",t[t.ARRAY_TYPE=9]="ARRAY_TYPE",t[t.WIDE=10]="WIDE"}(e.OpcodeLayoutType||(e.OpcodeLayoutType={}));var a=e.OpcodeLayoutType,o=Array(255);!function(){for(var t=0;t<255;t++)o[t]=a.OPCODE_ONLY}(),n(a.UINT8_VALUE,[r.ALOAD,r.ASTORE,r.DLOAD,r.DSTORE,r.FLOAD,r.FSTORE,r.ILOAD,r.ISTORE,r.LLOAD,r.LSTORE,r.RET]),n(a.CONSTANT_POOL_UINT8,[r.LDC]),n(a.CONSTANT_POOL,[r.LDC_W,r.LDC2_W,r.ANEWARRAY,r.CHECKCAST,r.GETFIELD,r.GETSTATIC,r.INSTANCEOF,r.INVOKEDYNAMIC,r.INVOKESPECIAL,r.INVOKESTATIC,r.INVOKEVIRTUAL,r.NEW,r.PUTFIELD,r.PUTSTATIC,r.MULTIANEWARRAY_FAST,r.INVOKENONVIRTUAL_FAST,r.INVOKESTATIC_FAST,r.CHECKCAST_FAST,r.NEW_FAST,r.ANEWARRAY_FAST,r.INSTANCEOF_FAST,r.GETSTATIC_FAST32,r.GETSTATIC_FAST64,r.PUTSTATIC_FAST32,r.PUTSTATIC_FAST64,r.PUTFIELD_FAST32,r.PUTFIELD_FAST64,r.GETFIELD_FAST32,r.GETFIELD_FAST64,r.INVOKEVIRTUAL_FAST]),n(a.CONSTANT_POOL_AND_UINT8_VALUE,[r.INVOKEINTERFACE,r.INVOKEINTERFACE_FAST,r.MULTIANEWARRAY]),n(a.INT8_VALUE,[r.BIPUSH]),n(a.INT16_VALUE,[r.SIPUSH,r.GOTO,r.IFGT,r.IFEQ,r.IFGE,r.IFLE,r.IFLT,r.IFNE,r.IFNULL,r.IFNONNULL,r.IF_ICMPLE,r.IF_ACMPEQ,r.IF_ACMPNE,r.IF_ICMPEQ,r.IF_ICMPGE,r.IF_ICMPGT,r.IF_ICMPLT,r.IF_ICMPNE,r.JSR]),n(a.INT32_VALUE,[r.GOTO_W,r.JSR_W]),n(a.UINT8_AND_INT8_VALUE,[r.IINC]),n(a.ARRAY_TYPE,[r.NEWARRAY]),e.OpcodeLayouts=o},function(t,e){"use strict";var n=function(){function t(){this.cache=Object.create(null)}return t.prototype.fixKey=function(t){return";"+t},t.prototype.get=function(t){if(t=this.fixKey(t),void 0!==this.cache[t])return this.cache[t]},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){this.cache[this.fixKey(t)]=e},t}();t.exports=n},function(t,e,n){"use strict";function r(t,e){return t=i.descriptor2typestr(t),h.hasOwnProperty(t)&&h[t].hasOwnProperty(e)?h[t][e]:null}function a(t){return t.length>0?"f.opStack.pushAll("+t.join(",")+");":""}function o(){for(var t=Array(256),e=0;e<256;e++)t[e]=e;t.sort(function(t,e){return T[e]-T[t]});var n=t.slice(0,24);console.log("Opcodes that closed a trace (number of times encountered):");for(var e=0;e<n.length;e++){var r=n[e];T[r]>0&&console.log(u.OpCode[r],T[r])}}var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(7),l=n(12),u=(n(14),n(13),n(9)),c=n(17),p=(n(18),n(19)),h={"java/lang/ref/Reference":{"<clinit>()V":function(t){}},"java/lang/System":{"loadLibrary(Ljava/lang/String;)V":function(t,e){var n=""+e;switch(n){case"zip":case"net":case"nio":case"awt":case"fontmanager":case"management":return;default:t.throwNewException("Ljava/lang/UnsatisfiedLinkError;","no "+n+" in java.library.path")}}},"java/lang/Terminator":{"setup()V":function(t){}},"java/nio/charset/Charset$3":{"run()Ljava/lang/Object;":function(t,e){return null}},"sun/nio/fs/DefaultFileSystemProvider":{"create()Ljava/nio/file/spi/FileSystemProvider;":function(t){t.setStatus(u.ThreadStatus.ASYNC_WAITING);var e=t.getBsCl().getInitializedClass(t,"Lsun/nio/fs/DefaultFileSystemProvider;"),n=e.getConstructor(t);n["createProvider(Ljava/lang/String;)Ljava/nio/file/spi/FileSystemProvider;"](t,[t.getJVM().internString("sun.nio.fs.LinuxFileSystemProvider")],i.forwardResult(t))}}},f=function(){function t(t,e,n,r){this.cls=t,this.slot=n,this.accessFlags=new i.Flags(r.getUint16()),this.name=e.get(r.getUint16()).value,this.rawDescriptor=e.get(r.getUint16()).value,this.attrs=l.makeAttributes(r,e)}return t.prototype.getAttribute=function(t){for(var e=0;e<this.attrs.length;e++){var n=this.attrs[e];if(n.getName()===t)return n}return null},t.prototype.getAttributes=function(t){return this.attrs.filter(function(e){return e.getName()===t})},t.prototype.getAnnotationType=function(t,e){var n=this.getAttribute(e);if(null===n)return null;var r,a=t.getBsCl().getInitializedClass(t,"[B").getConstructor(t),o=new a(t,0),s=n.rawBytes.length,i=Array(s);for(r=0;r<s;r++)i[r]=n.rawBytes.readInt8(r);return o.array=i,o},t.prototype.parseDescriptor=function(t){throw Error("Unimplemented error.")},t}();e.AbstractMethodField=f;var d=function(t){function e(e,n,r,a){t.call(this,e,n,r,a),this.fullName=i.descriptor2typestr(e.getInternalName())+"/"+this.name}return s(e,t),e.prototype.reflector=function(t,e){var n=this,r=this.getAttribute("Signature"),a=t.getJVM(),o=t.getBsCl(),s=function(e){var s=o.getInitializedClass(t,"Ljava/lang/reflect/Field;"),l=new(s.getConstructor(t))(t);return l["java/lang/reflect/Field/clazz"]=n.cls.getClassObject(t),l["java/lang/reflect/Field/name"]=a.internString(n.name),l["java/lang/reflect/Field/type"]=e,l["java/lang/reflect/Field/modifiers"]=n.accessFlags.getRawByte(),l["java/lang/reflect/Field/slot"]=n.slot,l["java/lang/reflect/Field/signature"]=null!==r?i.initString(o,r.sig):null,l["java/lang/reflect/Field/annotations"]=n.getAnnotationType(t,"RuntimeVisibleAnnotations"),l};this.cls.getLoader().resolveClass(t,this.rawDescriptor,function(n){e(null!=n?s(n.getClassObject(t)):null)})},e.prototype.getDefaultFieldValue=function(){var t=this.rawDescriptor;if("J"===t)return"gLongZero";var e=t[0];return"["===e||"L"===e?"null":"0"},e.prototype.outputJavaScriptField=function(t,e){this.accessFlags.isStatic()?e.write(t+'["'+i.reescapeJVMName(this.fullName)+'"] = cls._getInitialStaticFieldValue(thread, "'+i.reescapeJVMName(this.name)+'");\n'):e.write('this["'+i.reescapeJVMName(this.fullName)+'"] = '+this.getDefaultFieldValue()+";\n")},e}(f);e.Field=d;var g=function(){var t=[],e=u.OpcodeLayoutType;return t[e.OPCODE_ONLY]=1,t[e.CONSTANT_POOL_UINT8]=2,t[e.CONSTANT_POOL]=3,t[e.CONSTANT_POOL_AND_UINT8_VALUE]=4,t[e.UINT8_VALUE]=2,t[e.UINT8_AND_INT8_VALUE]=3,t[e.INT8_VALUE]=2,t[e.INT16_VALUE]=3,t[e.INT32_VALUE]=5,t[e.ARRAY_TYPE]=2,t[e.WIDE]=1,t}(),v=function(){function t(t,e){this.pc=t,this.jitInfo=e,this.pops=[],this.pushes=[],this.prefixEmit=""}return t}(),_=function(){function t(t,e,n){this.startPC=t,this.code=e,this.method=n,this.infos=[],this.endPc=-1}return t.prototype.emitEndPC=function(t){this.endPc=t},t.prototype.addOp=function(t,e){this.infos.push(new v(t,e))},t.prototype.close=function(t){if(this.infos.length>1){for(var e=[],n=0,r=this.endPc>-1?"f.pc="+this.endPc+";":"",a=0;a<this.infos.length;a++){for(var o=this.infos[a],s=o.jitInfo,i=o.pops,l=s.pops<0?Math.min(-s.pops,e.length):s.pops,u=0;u<l;u++)if(e.length>0)i.push(e.pop());else{var c="s"+n++;o.prefixEmit+="var "+c+" = f.opStack.pop();",i.push(c)}o.onErrorPushes=e.slice();for(var p=o.pushes,u=0;u<s.pushes;u++){var c="s"+n++;e.push(c),p.push(c)}}1===e.length?r+="f.opStack.push("+e[0]+");":e.length>1&&(r+="f.opStack.pushAll("+e.join(",")+");");for(var a=this.infos.length-1;a>=0;a--){var o=this.infos[a],s=o.jitInfo;r=o.prefixEmit+s.emit(o.pops,o.pushes,""+a,r,this.code,o.pc,o.onErrorPushes,this.method)}return Function("f","t","u",r)}return null},t}(),m=function(t){function e(e,n,a,o){t.call(this,e,n,a,o),this.numBBEntries=0,this.compiledFunctions=[],this.failedCompile=[];var s,l,u=i.getTypes(this.rawDescriptor);for(this.signature=this.name+this.rawDescriptor,this.fullSignature=i.descriptor2typestr(this.cls.getInternalName())+"/"+this.signature,this.returnType=u.pop(),this.parameterTypes=u,this.parameterWords=u.length,s=0;s<this.parameterTypes.length;s++)l=this.parameterTypes[s],"D"!==l&&"J"!==l||this.parameterWords++;var c=this.cls.getInternalName();if(null!==r(c,this.signature))this.code=r(c,this.signature),this.accessFlags.setNative(!0);else if(this.accessFlags.isNative())if(this.signature.indexOf("registerNatives()V",0)<0&&this.signature.indexOf("initIDs()V",0)<0){var p=this;this.code=function(t){var e=t.getJVM(),n=e.getNative(c,p.signature);return null!=n?(p.code=n,n.apply(p,arguments)):void t.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method '"+p.getFullSignature()+"' not implemented.\nPlease fix or file a bug at https://github.com/plasma-umass/doppio/issues")}}else this.code=function(){};else if(!this.accessFlags.isAbstract()){this.code=this.getAttribute("Code");var h=this.code.code.length;this.numBBEntries=h>3?200:1e3*h}}return s(e,t),e.prototype.incrBBEntries=function(){this.numBBEntries--},e.prototype.isDefault=function(){return this.accessFlags.isPublic()&&!this.accessFlags.isAbstract()&&!this.accessFlags.isStatic()&&this.cls.accessFlags.isInterface()},e.prototype.getFullSignature=function(){return this.cls.getExternalName()+"."+this.name+this.rawDescriptor},e.prototype.isHidden=function(){var t=this.getAttribute("RuntimeVisibleAnnotations");return null!==t&&t.isHidden},e.prototype.isCallerSensitive=function(){var t=this.getAttribute("RuntimeVisibleAnnotations");return null!==t&&t.isCallerSensitive},e.prototype.getParamWordSize=function(){return this.parameterWords},e.prototype.getCodeAttribute=function(){return this.code},e.prototype.getOp=function(t,e,n){if(this.numBBEntries<=0&&!this.failedCompile[t]){var r=this.compiledFunctions[t];if(r)return r;var a=this.jitCompileFrom(t,n);if(a)return a;this.failedCompile[t]=!0}return e.readUInt8(t)},e.prototype.makeInvokeStaticJitInfo=function(t,e){var n=t.readUInt16BE(e+1),r=this.cls.constantPool.get(n),a=r.paramWordSize;return r.jsConstructor[r.fullSignature],{hasBranch:!0,pops:-a,pushes:0,emit:function(t,r,o,s){var i=a>t.length?"f.opStack.sliceAndDropFromTop("+(a-t.length)+");":"["+t.reduce(function(t,e){return e+","+t},"")+"];",l="var args"+o+"="+i;return a>t.length&&t.length>0&&(l+="args"+o+".push("+t.slice().reverse().join(",")+");"),l+("\nvar methodReference"+o+"=f.method.cls.constantPool.get("+n+");\nf.pc="+e+";\nmethodReference"+o+".jsConstructor[methodReference"+o+".fullSignature](t,args"+o+");\nf.returnToThreadLoop=true;\n"+s)}}},e.prototype.makeInvokeVirtualJitInfo=function(t,e){var n=t.readUInt16BE(e+1),r=this.cls.constantPool.get(n),o=r.paramWordSize;return{hasBranch:!0,pops:-(o+1),pushes:0,emit:function(t,e,n,s,i,l,u){var c=a(u),p=o>t.length?"f.opStack.sliceAndDropFromTop("+(o-t.length)+");":"["+t.slice(0,o).reduce(function(t,e){return e+","+t},"")+"];",h="var args"+n+"="+p;return o>t.length&&t.length>0&&(h+="args"+n+".push("+t.slice().reverse().join(",")+");"),h+("var obj"+n+"="+(o+1===t.length?t[o]:"f.opStack.pop()")+";f.pc="+l+";\nif(!u.isNull(t,f,obj"+n+")){obj"+n+"['"+r.signature+"'](t,args"+n+");f.returnToThreadLoop=true;"+s+"}else{"+c+"}")}}},e.prototype.makeInvokeNonVirtualJitInfo=function(t,e){var n=t.readUInt16BE(e+1),r=this.cls.constantPool.get(n),o=r.paramWordSize;return{hasBranch:!0,pops:-(o+1),pushes:0,emit:function(t,e,n,s,i,l,u){var c=a(u),p=o>t.length?"f.opStack.sliceAndDropFromTop("+(o-t.length)+");":"["+t.slice(0,o).reduce(function(t,e){return e+","+t},"")+"];",h="var args"+n+"="+p;return o>t.length&&t.length>0&&(h+="args"+n+".push("+t.slice().reverse().join(",")+");"),h+("var obj"+n+"="+(o+1===t.length?t[o]:"f.opStack.pop()")+";f.pc="+l+";\nif(!u.isNull(t,f,obj"+n+")){obj"+n+"['"+r.fullSignature+"'](t, args"+n+");f.returnToThreadLoop=true;"+s+"}else{"+c+"}")}}},e.prototype.jitCompileFrom=function(t,e){function n(){if(null!==a){var t=a.close(e);t&&(o.compiledFunctions[a.startPC]=t),a=null}s=!0}for(var r=this.getCodeAttribute().getCode(),a=null,o=this,s=!1,i=t;i<r.length&&!s;){var l=r.readUInt8(i),c=p.opJitInfo[l];if(c)null===a&&(a=new _(i,r,o)),a.addOp(i,c),c.hasBranch&&(this.failedCompile[i]=!0,n());else if(l===u.OpCode.INVOKESTATIC_FAST&&null!==a){var h=this.makeInvokeStaticJitInfo(r,i);a.addOp(i,h),this.failedCompile[i]=!0,n()}else if(l!==u.OpCode.INVOKEVIRTUAL_FAST&&l!==u.OpCode.INVOKEINTERFACE_FAST||null===a)if(l===u.OpCode.INVOKENONVIRTUAL_FAST&&null!==a){var h=this.makeInvokeNonVirtualJitInfo(r,i);a.addOp(i,h),this.failedCompile[i]=!0,n()}else this.failedCompile[i]=!0,a&&a.emitEndPC(i),n();else{var h=this.makeInvokeVirtualJitInfo(r,i);a.addOp(i,h),this.failedCompile[i]=!0,n()}i+=g[u.OpcodeLayouts[l]]}return o.compiledFunctions[t]},e.prototype.getNativeFunction=function(){return this.code},e.prototype._resolveReferencedClasses=function(t,e){var n=this.parameterTypes.concat(this.returnType),r=this.code,a=this.getAttribute("Exceptions");!this.accessFlags.isNative()&&!this.accessFlags.isAbstract()&&r.exceptionHandlers.length>0&&(n.push("Ljava/lang/Throwable;"),n=n.concat(r.exceptionHandlers.filter(function(t){return"<any>"!==t.catchType}).map(function(t){return t.catchType}))),null!==a&&(n=n.concat(a.exceptions)),this.cls.getLoader().resolveClasses(t,n,function(n){t.getBsCl().resolveClasses(t,["Ljava/lang/reflect/Method;","Ljava/lang/reflect/Constructor;"],function(t){null===n||null===t?e(null):(n["Ljava/lang/reflect/Method;"]=t["Ljava/lang/reflect/Method;"],n["Ljava/lang/reflect/Constructor;"]=t["Ljava/lang/reflect/Constructor;"],e(n))})})},e.prototype.reflector=function(t,e){var n=this,r=t.getBsCl(),a=r.getInitializedClass(t,"[Ljava/lang/Class;").getConstructor(t),o=t.getJVM(),s=this.getAttribute("Signature"),i=this.getAttribute("Exceptions");this._resolveReferencedClasses(t,function(r){if(null===r)return e(null);var l=n.cls.getClassObject(t),u=o.internString(n.name),c=new a(t,0),p=r[n.returnType].getClassObject(t),h=new a(t,0),f=n.accessFlags.getRawByte(),d=null!==s?o.internString(s.sig):null;if(c.array=n.parameterTypes.map(function(e){return r[e].getClassObject(t)}),null!==i&&(h.array=i.exceptions.map(function(e){return r[e].getClassObject(t)})),"<init>"===n.name){var g=r["Ljava/lang/reflect/Constructor;"].getConstructor(t),v=new g(t);v["java/lang/reflect/Constructor/clazz"]=l,v["java/lang/reflect/Constructor/parameterTypes"]=c,v["java/lang/reflect/Constructor/exceptionTypes"]=h,v["java/lang/reflect/Constructor/modifiers"]=f,v["java/lang/reflect/Constructor/slot"]=n.slot,v["java/lang/reflect/Constructor/signature"]=d,v["java/lang/reflect/Constructor/annotations"]=n.getAnnotationType(t,"RuntimeVisibleAnnotations"),v["java/lang/reflect/Constructor/parameterAnnotations"]=n.getAnnotationType(t,"RuntimeVisibleParameterAnnotations"),e(v)}else{var _=r["Ljava/lang/reflect/Method;"].getConstructor(t),m=new _(t);m["java/lang/reflect/Method/clazz"]=l,m["java/lang/reflect/Method/name"]=u,m["java/lang/reflect/Method/parameterTypes"]=c,m["java/lang/reflect/Method/returnType"]=p,m["java/lang/reflect/Method/exceptionTypes"]=h,m["java/lang/reflect/Method/modifiers"]=f,m["java/lang/reflect/Method/slot"]=n.slot,m["java/lang/reflect/Method/signature"]=d,m["java/lang/reflect/Method/annotations"]=n.getAnnotationType(t,"RuntimeVisibleAnnotations"),m["java/lang/reflect/Method/annotationDefault"]=n.getAnnotationType(t,"AnnotationDefault"),m["java/lang/reflect/Method/parameterAnnotations"]=n.getAnnotationType(t,"RuntimeVisibleParameterAnnotations"),e(m)}})},e.prototype.convertArgs=function(t,e){if(this.isSignaturePolymorphic())return e.unshift(t),e;var n,r=[t],a=0;for(this.accessFlags.isStatic()||(r.push(e[0]),a=1),n=0;n<this.parameterTypes.length;n++){var o=this.parameterTypes[n];r.push(e[a]),a+="J"===o||"D"===o?2:1}return r},e.prototype.methodLock=function(t,e){return this.accessFlags.isStatic()?this.cls.getClassObject(t).getMonitor():e.locals[0].getMonitor()},e.prototype.isSignaturePolymorphic=function(){return"Ljava/lang/invoke/MethodHandle;"===this.cls.getInternalName()&&this.accessFlags.isNative()&&this.accessFlags.isVarArgs()&&"([Ljava/lang/Object;)Ljava/lang/Object;"===this.rawDescriptor},e.prototype.getVMTargetBridgeMethod=function(t,e){var n=new c,r=!(e===u.MethodHandleReferenceKind.INVOKESTATIC||e===u.MethodHandleReferenceKind.INVOKESPECIAL);this.accessFlags.isStatic()&&n.write("var jsCons = cls.getConstructor(thread);\n"),n.write("function bridgeMethod(thread, descriptor, args, cb) {\n"),this.accessFlags.isStatic()?n.write('  jsCons["'+i.reescapeJVMName(this.fullSignature)+'"](thread, '):(n.write("  var obj = args.shift();\n"),n.write("  if (obj === null) { return thread.throwNewException('Ljava/lang/NullPointerException;', ''); }\n"),n.write('  obj["'+i.reescapeJVMName(r?this.signature:this.fullSignature)+'"](thread, ')),n.write("args"),n.write(", cb);\n  }\n  return bridgeMethod;");var a=n.flush();return Function("thread","cls","util",a)(t,this.cls,i)},e.prototype.outputJavaScriptFunction=function(t,e,n){void 0===n&&(n=!1);var r;if(this.accessFlags.isStatic()?e.write(t+'["'+i.reescapeJVMName(this.fullSignature)+'"] = '+t+'["'+i.reescapeJVMName(this.signature)+'"] = '):(n||e.write(t+'.prototype["'+i.reescapeJVMName(this.signature)+'"] = '),e.write(t+'.prototype["'+i.reescapeJVMName(this.fullSignature)+'"] = ')),e.write("(function(method) {\n  return function(thread, args, cb) {\n    if (typeof cb === 'function') {\n      thread.stack.push(new InternalStackFrame(cb));\n    }\n    thread.stack.push(new "+(this.accessFlags.isNative()?"NativeStackFrame":"BytecodeStackFrame")+"(method, "),this.accessFlags.isStatic())this.parameterWords>0?e.write("args"):e.write("[]");else{for(e.write("[this"),r=0;r<this.parameterWords;r++)e.write(", args["+r+"]");e.write("]")}e.write("));\n    thread.setStatus("+u.ThreadStatus.RUNNABLE+');\n  };\n})(cls.getSpecificMethod("'+i.reescapeJVMName(this.cls.getInternalName())+'", "'+i.reescapeJVMName(this.signature)+'"));\n')},e}(f);e.Method=m;var T=Array(256);e.dumpStats=o},function(t,e,n){"use strict";function r(t,e){for(var n={Code:i,LineNumberTable:l,SourceFile:u,StackMapTable:c,LocalVariableTable:p,LocalVariableTypeTable:h,ConstantValue:g,Exceptions:f,InnerClasses:d,Synthetic:v,Deprecated:_,Signature:m,RuntimeVisibleAnnotations:T,AnnotationDefault:y,EnclosingMethod:I,BootstrapMethods:E,RuntimeVisibleParameterAnnotations:A},r=t.getUint16(),a=[],o=0;o<r;o++){var s=e.get(t.getUint16()).value,S=t.getUint32();if(null!=n[s]){var C=t.size(),N=n[s].parse(t,e,S,s),L=t.size();C-L!==S&&t.skip(S-C+L),a.push(N)}else t.skip(S)}return a}var a=n(7),o=n(9),s=(n(13),function(){function t(t,e,n,r){this.startPC=t,this.endPC=e,this.handlerPC=n,this.catchType=r}return t.prototype.getName=function(){return"ExceptionHandler"},t.parse=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=t.getUint16(),o=t.getUint16(),s=0===o?"<any>":e.get(o).name;return new this(n,r,a,s)},t}());e.ExceptionHandler=s;var i=function(){function t(t,e,n,r,a){this.maxStack=t,this.maxLocals=e,this.exceptionHandlers=n,this.attrs=r,this.code=a}return t.prototype.getName=function(){return"Code"},t.prototype.getMaxStack=function(){return this.maxStack},t.parse=function(t,e){var n=t.getUint16(),a=t.getUint16(),o=t.getUint32();if(0===o)throw"Error parsing code: Code length is zero";for(var i=t.slice(o).getBuffer(),l=t.getUint16(),u=[],c=0;c<l;c++)u.push(s.parse(t,e));var p=r(t,e);return new this(n,a,u,p,i)},t.prototype.getCode=function(){return this.code},t.prototype.getAttribute=function(t){for(var e=0;e<this.attrs.length;e++){var n=this.attrs[e];if(n.getName()===t)return n}return null},t}();e.Code=i;var l=function(){function t(t){this.entries=t}return t.prototype.getName=function(){return"LineNumberTable"},t.prototype.getLineNumber=function(t){var e,n=-1;for(e=0;e<this.entries.length;e++){var r=this.entries[e];if(!(r.startPC<=t))break;n=r.lineNumber}return n},t.parse=function(t,e){for(var n=[],r=t.getUint16(),a=0;a<r;a++){var o=t.getUint16(),s=t.getUint16();n.push({startPC:o,lineNumber:s})}return new this(n)},t}();e.LineNumberTable=l;var u=function(){function t(t){this.filename=t}return t.prototype.getName=function(){return"SourceFile"},t.parse=function(t,e){return new this(e.get(t.getUint16()).value)},t}();e.SourceFile=u;var c=function(){function t(t){this.entries=t}return t.prototype.getName=function(){return"StackMapTable"},t.parse=function(t,e){for(var n=t.getUint16(),r=[],a=0;a<n;a++)r.push(this.parseEntry(t,e));return new this(r)},t.parseEntry=function(t,e){var n,r,a,s=t.getUint8();if(s<64)return{type:o.StackMapTableEntryType.SAME_FRAME,offsetDelta:s};if(s<128)return{type:o.StackMapTableEntryType.SAME_LOCALS_1_STACK_ITEM_FRAME,offsetDelta:s-64,stack:[this.parseVerificationTypeInfo(t,e)]};if(s<247);else{if(247===s)return{type:o.StackMapTableEntryType.SAME_LOCALS_1_STACK_ITEM_FRAME_EXTENDED,offsetDelta:t.getUint16(),stack:[this.parseVerificationTypeInfo(t,e)]};if(s<251)return{type:o.StackMapTableEntryType.CHOP_FRAME,offsetDelta:t.getUint16(),k:251-s};if(251===s)return{type:o.StackMapTableEntryType.SAME_FRAME_EXTENDED,offsetDelta:t.getUint16()};if(s<255){for(r=t.getUint16(),n=[],a=0;a<s-251;a++)n.push(this.parseVerificationTypeInfo(t,e));return{type:o.StackMapTableEntryType.APPEND_FRAME,offsetDelta:r,locals:n}}if(255===s){r=t.getUint16();var i=t.getUint16();for(n=[],a=0;a<i;a++)n.push(this.parseVerificationTypeInfo(t,e));var l=t.getUint16(),u=[];for(a=0;a<l;a++)u.push(this.parseVerificationTypeInfo(t,e));return{type:o.StackMapTableEntryType.FULL_FRAME,offsetDelta:r,numLocals:i,locals:n,numStackItems:l,stack:u}}}},t.parseVerificationTypeInfo=function(t,e){var n=t.getUint8();if(7===n){var r=e.get(t.getUint16()).name;return"class "+(/\w/.test(r[0])?a.descriptor2typestr(r):'"'+r+'"');
}if(8===n)return"uninitialized "+t.getUint16();var o=["bogus","int","float","double","long","null","this","object","uninitialized"];return o[n]},t}();e.StackMapTable=c;var p=function(){function t(t){this.entries=t}return t.prototype.getName=function(){return"LocalVariableTable"},t.parse=function(t,e){for(var n=t.getUint16(),r=[],a=0;a<n;a++)r.push(this.parseEntries(t,e));return new this(r)},t.parseEntries=function(t,e){return{startPC:t.getUint16(),length:t.getUint16(),name:e.get(t.getUint16()).value,descriptor:e.get(t.getUint16()).value,ref:t.getUint16()}},t}();e.LocalVariableTable=p;var h=function(){function t(t){this.entries=t}return t.prototype.getName=function(){return"LocalVariableTypeTable"},t.parse=function(t,e){var n,r=t.getUint16(),a=[];for(n=0;n<r;n++)a.push(this.parseTableEntry(t,e));return new this(a)},t.parseTableEntry=function(t,e){return{startPC:t.getUint16(),length:t.getUint16(),name:e.get(t.getUint16()).value,signature:e.get(t.getUint16()).value,index:t.getUint16()}},t}();e.LocalVariableTypeTable=h;var f=function(){function t(t){this.exceptions=t}return t.prototype.getName=function(){return"Exceptions"},t.parse=function(t,e){for(var n=t.getUint16(),r=[],a=0;a<n;a++)r.push(t.getUint16());return new this(r.map(function(t){return e.get(t).name}))},t}();e.Exceptions=f;var d=function(){function t(t){this.classes=t}return t.prototype.getName=function(){return"InnerClasses"},t.parse=function(t,e){for(var n=t.getUint16(),r=[],a=0;a<n;a++)r.push(this.parseClass(t,e));return new this(r)},t.parseClass=function(t,e){return{innerInfoIndex:t.getUint16(),outerInfoIndex:t.getUint16(),innerNameIndex:t.getUint16(),innerAccessFlags:t.getUint16()}},t}();e.InnerClasses=d;var g=function(){function t(t){this.value=t}return t.prototype.getName=function(){return"ConstantValue"},t.parse=function(t,e){var n=t.getUint16();return new this(e.get(n))},t}();e.ConstantValue=g;var v=function(){function t(){}return t.prototype.getName=function(){return"Synthetic"},t.parse=function(t,e){return new this},t}();e.Synthetic=v;var _=function(){function t(){}return t.prototype.getName=function(){return"Deprecated"},t.parse=function(t,e){return new this},t}();e.Deprecated=_;var m=function(){function t(t){this.sig=t}return t.prototype.getName=function(){return"Signature"},t.parse=function(t,e){return new this(e.get(t.getUint16()).value)},t}();e.Signature=m;var T=function(){function t(t,e,n,r){this.rawBytes=t,this.isHidden=e,this.isCallerSensitive=n,this.isCompiled=r}return t.prototype.getName=function(){return"RuntimeVisibleAnnotations"},t.parse=function(t,e,n){function r(){t.skip(2);var e,n=t.getUint16();for(e=0;e<n;e++)t.skip(2),a()}function a(){var e=String.fromCharCode(t.getUint8());switch(e){case"e":t.skip(2);case"Z":case"B":case"C":case"S":case"I":case"F":case"J":case"D":case"s":case"c":t.skip(2);break;case"@":r();break;case"[":var n,o=t.getUint16();for(n=0;n<o;n++)a()}}var o=t.read(n),s=!1,i=!1,l=!1;t.seek(t.pos()-o.length);var u,c=t.getUint16();for(u=0;u<c;u++){var p=e.get(t.getUint16());switch(t.seek(t.pos()-2),r(),p.value){case"Ljava/lang/invoke/LambdaForm$Hidden;":s=!0;break;case"Lsig/sun/reflect/CallerSensitive;":l=!0;break;case"Lsig/java/lang/invoke/LambdaForm$Compiled":i=!0}}return new this(o,s,l,i)},t}();e.RuntimeVisibleAnnotations=T;var y=function(){function t(t){this.rawBytes=t}return t.prototype.getName=function(){return"AnnotationDefault"},t.parse=function(t,e,n){return new this(t.read(n))},t}();e.AnnotationDefault=y;var I=function(){function t(t,e){this.encClass=t,this.encMethod=e}return t.prototype.getName=function(){return"EnclosingMethod"},t.parse=function(t,e){var n=e.get(t.getUint16()),r=t.getUint16(),a=null;return r>0&&(a=e.get(r)),new this(n,a)},t}();e.EnclosingMethod=I;var E=function(){function t(t){this.bootstrapMethods=t}return t.prototype.getName=function(){return"BootstrapMethods"},t.parse=function(t,e){for(var n=t.getUint16(),r=[],a=0;a<n;a++){for(var o=e.get(t.getUint16()),s=t.getUint16(),i=[],l=0;l<s;l++)i.push(e.get(t.getUint16()));r.push([o,i])}return new this(r)},t}();e.BootstrapMethods=E;var A=function(){function t(t){this.rawBytes=t}return t.prototype.getName=function(){return"RuntimeVisibleParameterAnnotations"},t.parse=function(t,e,n){return new this(t.read(n))},t}();e.RuntimeVisibleParameterAnnotations=A,e.makeAttributes=r},function(t,e){"use strict";function n(t,e,n){if(!t)throw Error("Assertion failed: "+e+"\n"+(n?n.getPrintableStackTrace():""))}t.exports=n},function(t,e,n){"use strict";function r(t){switch(t.getType()){case o.ConstantPoolItemType.METHODREF:var e=t;return u.ext_classname(e.classInfo.name)+"."+e.signature;case o.ConstantPoolItemType.INTERFACE_METHODREF:var n=t;return u.ext_classname(n.classInfo.name)+"."+n.signature;case o.ConstantPoolItemType.FIELDREF:var r=t;return u.ext_classname(r.classInfo.name)+"."+r.nameAndTypeInfo.name+":"+u.ext_classname(r.nameAndTypeInfo.descriptor);case o.ConstantPoolItemType.NAME_AND_TYPE:var a=t;return a.name+":"+a.descriptor;case o.ConstantPoolItemType.CLASS:var s=t;return u.ext_classname(s.name);default:return l.debug_var(t.value)}}function a(t,n,r,a){return e.OpcodeLayoutPrinters[o.OpcodeLayouts[t]](n,r,a)}var o=n(9),s=(n(13),n(8)),i=n(15),l=n(16),u=n(7),c=o.ThreadStatus,p=(l.debug,l.vtrace,l.trace,1e4),h=p,f=1,d=function(){function t(t){this.curr=0,this.store=Array(t)}return t.prototype.push=function(t){this.store[this.curr++]=t},t.prototype.pushAll=function(){for(var t=arguments.length,e=0;e<t;e++)this.store[this.curr++]=arguments[e]},t.prototype.pushWithNull=function(t){this.store[this.curr]=t,this.curr+=2},t.prototype.push6=function(t,e,n,r,a,o){this.store[this.curr++]=t,this.store[this.curr++]=e,this.store[this.curr++]=n,this.store[this.curr++]=r,this.store[this.curr++]=a,this.store[this.curr++]=o},t.prototype.swap=function(){var t=this.store[this.curr-1];this.store[this.curr-1]=this.store[this.curr-2],this.store[this.curr-2]=t},t.prototype.dup=function(){this.store[this.curr]=this.store[this.curr-1],this.curr++},t.prototype.dup2=function(){this.store[this.curr]=this.store[this.curr-2],this.store[this.curr+1]=this.store[this.curr-1],this.curr+=2},t.prototype.dup_x1=function(){var t=this.store[this.curr-1];this.store[this.curr-1]=this.store[this.curr-2],this.store[this.curr]=t,this.store[this.curr-2]=t,this.curr++},t.prototype.dup_x2=function(){var t=this.store[this.curr-1];this.store[this.curr-1]=this.store[this.curr-2],this.store[this.curr-2]=this.store[this.curr-3],this.store[this.curr]=t,this.store[this.curr-3]=t,this.curr++},t.prototype.dup2_x1=function(){var t=this.store[this.curr-1],e=this.store[this.curr-2];this.store[this.curr]=e,this.store[this.curr+1]=t,this.store[this.curr-1]=this.store[this.curr-3],this.store[this.curr-2]=t,this.store[this.curr-3]=e,this.curr+=2},t.prototype.pop=function(){return this.store[--this.curr]},t.prototype.pop2=function(){return this.curr-=2,this.store[this.curr]},t.prototype.bottom=function(){return this.store[0]},t.prototype.top=function(){return this.store[this.curr-1]},t.prototype.fromTop=function(t){return this.store[this.curr-(t+1)]},t.prototype.sliceFromBottom=function(t){return this.store.slice(t,this.curr)},t.prototype.sliceFromTop=function(t){return this.store.slice(this.curr-t,this.curr)},t.prototype.dropFromTop=function(t){this.curr-=t},t.prototype.sliceAndDropFromTop=function(t){var e=this.curr;return this.curr-=t,this.store.slice(e-t,e)},t.prototype.getRaw=function(){return this.store.slice(0,this.curr)},t.prototype.clear=function(){this.curr=0},t}();e.PreAllocatedStack=d;var g={isNull:i.isNull,resolveCPItem:i.resolveCPItem,throwException:i.throwException,gLong:s,float2int:u.float2int,wrapFloat:u.wrapFloat,Constants:o.Constants},v=function(){function t(t,e){this.pc=0,this.returnToThreadLoop=!1,this.lockedMethodLock=!1,this.type=o.StackFrameType.BYTECODE,this.method=t,t.incrBBEntries(),this.locals=e,this.opStack=new d(t.getCodeAttribute().getMaxStack())}return t.prototype.run=function(t){var e=this,n=this.method,r=this.method.getCodeAttribute().getCode(),a=i.LookupTable;if(!n.accessFlags.isSynchronized()||this.lockedMethodLock||(this.lockedMethodLock=n.methodLock(t,this).enter(t,function(){e.lockedMethodLock=!0}),this.lockedMethodLock))if(this.returnToThreadLoop=!1,t.getJVM().isJITDisabled())for(;!this.returnToThreadLoop;){var o=r.readUInt8(this.pc);a[o](t,this,r)}else for(;!this.returnToThreadLoop;){var s=n.getOp(this.pc,r,t);"function"==typeof s?s(this,t,g):a[s](t,this,r)}},t.prototype.scheduleResume=function(t,e,n){var r=this.method.getCodeAttribute().getCode().readUInt8(this.pc);switch(r){case o.OpCode.INVOKEINTERFACE:case o.OpCode.INVOKEINTERFACE_FAST:this.pc+=5;break;case o.OpCode.INVOKESPECIAL:case o.OpCode.INVOKESTATIC:case o.OpCode.INVOKEVIRTUAL:case o.OpCode.INVOKESTATIC_FAST:case o.OpCode.INVOKENONVIRTUAL_FAST:case o.OpCode.INVOKEVIRTUAL_FAST:case o.OpCode.INVOKEHANDLE:case o.OpCode.INVOKEBASIC:case o.OpCode.LINKTOSPECIAL:case o.OpCode.LINKTOVIRTUAL:case o.OpCode.INVOKEDYNAMIC:case o.OpCode.INVOKEDYNAMIC_FAST:this.pc+=3}void 0!==e&&this.opStack.push(e),void 0!==n&&this.opStack.push(n)},t.prototype.scheduleException=function(t,e){for(var n,r=this.method.getCodeAttribute(),a=this.pc,o=this.method,s=r.exceptionHandlers,i=e.getClass(),l=0;l<s.length;l++){var u=s[l];if(u.startPC<=a&&a<u.endPC){if("<any>"===u.catchType){n=u;break}var p=o.cls.getLoader().getResolvedClass(u.catchType);if(null==p){for(var h=[],f=0;f<s.length;f++){var d=s[f];"<any>"!==d.catchType&&h.push(d.catchType)}return t.setStatus(c.ASYNC_WAITING),o.cls.getLoader().resolveClasses(t,h,function(n){null!==n&&t.throwException(e)}),!0}if(i.isCastable(p)){n=u;break}}}return null!=n?(this.opStack.clear(),this.opStack.push(e),this.pc=n.handlerPC,!0):(o.accessFlags.isSynchronized()&&o.methodLock(t,this).exit(t),!1)},t.prototype.getLoader=function(){return this.method.cls.getLoader()},t.prototype.getStackTraceFrame=function(){return{method:this.method,pc:this.pc,stack:this.opStack.sliceFromBottom(0),locals:this.locals.slice(0)}},t}();e.BytecodeStackFrame=v;var _=function(){function t(t,e){this.type=o.StackFrameType.NATIVE,this.method=t,this.args=e,this.nativeMethod=t.getNativeFunction()}return t.prototype.run=function(t){var e=this.nativeMethod.apply(null,this.method.convertArgs(t,this.args));if(t.getStatus()===c.RUNNABLE&&t.currentMethod()===this.method){var n=this.method.returnType;switch(n){case"J":case"D":t.asyncReturn(e,null);break;case"Z":t.asyncReturn(e?1:0);break;default:t.asyncReturn(e)}}},t.prototype.scheduleResume=function(t,e,n){},t.prototype.scheduleException=function(t,e){return!1},t.prototype.getStackTraceFrame=function(){return{method:this.method,pc:-1,stack:[],locals:[]}},t.prototype.getLoader=function(){return this.method.cls.getLoader()},t}();e.NativeStackFrame=_;var m=function(){function t(t){this.isException=!1,this.type=o.StackFrameType.INTERNAL,this.cb=t}return t.prototype.run=function(t){t.framePop(),t.setStatus(c.ASYNC_WAITING),this.isException?this.cb(this.val):this.cb(null,this.val)},t.prototype.scheduleResume=function(t,e){this.isException=!1,this.val=e},t.prototype.scheduleException=function(t,e){return this.isException=!0,this.val=e,!0},t.prototype.getStackTraceFrame=function(){return null},t.prototype.getLoader=function(){throw Error("Internal stack frames have no loader.")},t}();e.InternalStackFrame=m;var T=function(){function t(t,e,n){this.status=c.NEW,this.stack=[],this.interrupted=!1,this.monitor=null,this.jvm=t,this.bsCl=t.getBootstrapClassLoader(),this.tpool=e,this.jvmThreadObj=n}return t.prototype.getJVMObject=function(){return this.jvmThreadObj},t.prototype.isDaemon=function(){return 0!==this.jvmThreadObj["java/lang/Thread/daemon"]},t.prototype.getPriority=function(){return this.jvmThreadObj["java/lang/Thread/priority"]},t.prototype.setJVMObject=function(t){t["java/lang/Thread/threadStatus"]=this.jvmThreadObj["java/lang/Thread/threadStatus"],this.jvmThreadObj=t},t.prototype.getRef=function(){return this.jvmThreadObj.ref},t.prototype.isInterrupted=function(){return this.interrupted},t.prototype.currentMethod=function(){for(var t,e=this.stack,n=e.length;--n>=0;)if(t=e[n].getStackTraceFrame().method,null!==t)return t;return null},t.prototype.setInterrupted=function(t){this.interrupted=t},t.prototype.getBsCl=function(){return this.bsCl},t.prototype.getLoader=function(){var t=this.stack[this.stack.length-1].getLoader();if(t)return t;for(var e=this.stack.length,n=2;n<=e;n++)if(t=this.stack[e-n].getLoader())return t;throw Error("Unable to find loader.")},t.prototype["import"]=function(t,e,n){var r=this;void 0===n&&(n=!0);var a=this.getLoader();if(this.setStatus(c.ASYNC_WAITING),Array.isArray(t)){var o=[];u.asyncForEach(t,function(t,e){r._import(t,a,function(t){o.push(t),e()},n)},function(t){e(o)})}else this._import(t,a,e,n)},t.prototype._import=function(t,e,n,r){var a=this,o=e.getInitializedClass(this,t);o?setImmediate(function(){return n(o.getConstructor(a))}):e.initializeClass(this,t,function(t){t&&n(t.getConstructor(a))},r)},t.prototype.getJVM=function(){return this.jvm},t.prototype.getThreadPool=function(){return this.tpool},t.prototype.getStackTrace=function(){var t,e,n=[];for(t=0;t<this.stack.length;t++)e=this.stack[t].getStackTraceFrame(),null!=e&&n.push(e);return n},t.prototype.getPrintableStackTrace=function(){var t="";return this.getStackTrace().reverse().forEach(function(e){if(t+="\tat "+u.ext_classname(e.method.cls.getInternalName())+"::"+e.method.name+"(",e.pc>=0){var n=e.method.getCodeAttribute(),r=n.getAttribute("LineNumberTable"),a=e.method.cls.getAttribute("SourceFile");if(t+=null!=a?a.filename:"unknown",null!=r){var o=r.getLineNumber(e.pc);t+=":"+o,t+=" Bytecode offset: "+e.pc}}else t+="native";t+=")\n"}),t},t.prototype.run=function(){var t=this.stack,e=(new Date).getTime();for(h=p;this.status===c.RUNNABLE&&t.length>0;){var n=t[t.length-1];if(n.run(this),0===--h){var r=(new Date).getTime(),a=r-e,o=p/a*this.jvm.getResponsiveness()|0;p=(o+f*p)/(f+1)|0,p<=0&&(p=10),f++,this.tpool.quantumOver(this);break}}0===t.length&&this.setStatus(c.TERMINATED)},t.prototype.sanityCheck=function(){switch(this.status){case c.NEW:return!0;case c.RUNNABLE:return!0;case c.TIMED_WAITING:return!0;case c.WAITING:return!0;case c.BLOCKED:case c.UNINTERRUPTABLY_BLOCKED:return!0;case c.ASYNC_WAITING:return!0;case c.TERMINATED:return!0;case c.PARKED:return!0;default:return!1}},t.prototype.rawSetStatus=function(t){var e=0,n=this.status;switch(l.log_level===l.VTRACE,this.status=t,t){case c.NEW:e|=o.JVMTIThreadState.ALIVE;break;case c.RUNNABLE:e|=o.JVMTIThreadState.RUNNABLE;break;case c.BLOCKED:case c.UNINTERRUPTABLY_BLOCKED:e|=o.JVMTIThreadState.BLOCKED_ON_MONITOR_ENTER;break;case c.WAITING:case c.ASYNC_WAITING:case c.PARKED:e|=o.JVMTIThreadState.WAITING_INDEFINITELY;break;case c.TIMED_WAITING:e|=o.JVMTIThreadState.WAITING_WITH_TIMEOUT;break;case c.TERMINATED:e|=o.JVMTIThreadState.TERMINATED;break;default:e=o.JVMTIThreadState.RUNNABLE}this.jvmThreadObj["java/lang/Thread/threadStatus"]=e,this.tpool.statusChange(this,n,this.status)},t.prototype.setStatus=function(t,e){void 0===e&&(e=null),this.status!==t&&(this.status,this.monitor=e,t!==c.TERMINATED?this.rawSetStatus(t):this.exit())},t.prototype.exit=function(){var t=this,e=this.jvmThreadObj.getMonitor();if(!e.isBlocked(this)&&e.getOwner()!==this&&this.status!==c.TERMINATED)if(0===this.stack.length){if(this.setStatus(c.ASYNC_WAITING),this.jvm.hasVMBooted()){var n=function(){t.jvmThreadObj["exit()V"](t,null,function(n){e.notifyAll(t),e.exit(t),t.rawSetStatus(c.TERMINATED)})};e.enter(this,n)&&n()}}else{for(;this.stack.length>0;)this.stack.pop();this.rawSetStatus(c.TERMINATED)}},t.prototype.signalPriorityChange=function(){this.tpool.priorityChange(this)},t.prototype.getMonitorBlock=function(){return this.monitor},t.prototype.getStatus=function(){return this.status},t.prototype.asyncReturn=function(t,e){var n=this.stack,r=n.pop();r.type!=o.StackFrameType.INTERNAL&&r.type===o.StackFrameType.BYTECODE;var a=n.length-1;a>=0&&n[a].scheduleResume(this,t,e),this.setStatus(c.RUNNABLE)},t.prototype.framePop=function(){this.stack.pop()},t.prototype.throwException=function(t){var e=this.stack,n=e.length-1;if(n>=0)for(e[n].type===o.StackFrameType.INTERNAL&&(e.pop(),n--),this.setStatus(c.RUNNABLE);e.length>0&&!e[n].scheduleException(this,t);)e.pop(),n--;0===e.length&&this.handleUncaughtException(t)},t.prototype.throwNewException=function(t,e){var n=this,r=this.getLoader().getInitializedClass(this,t),a=function(){var t=r.getConstructor(n),a=new t(n);a["<init>(Ljava/lang/String;)V"](n,[u.initString(n.bsCl,e)],function(t){t?n.throwException(t):n.throwException(a)})};null!=r?a():(this.setStatus(c.ASYNC_WAITING),this.getLoader().initializeClass(this,t,function(t){null!=t&&(r=t,a())},!1))},t.prototype.handleUncaughtException=function(t){this.jvmThreadObj["dispatchUncaughtException(Ljava/lang/Throwable;)V"](this,[t])},t.prototype.close=function(){this.jvm=null},t}();e.JVMThread=T,e.validTransitions={},e.validTransitions[c.NEW]={},e.validTransitions[c.NEW][c.RUNNABLE]="RunMethod invoked on new thread",e.validTransitions[c.NEW][c.ASYNC_WAITING]="[JVM bootup only] Internal operation occurs on new thread",e.validTransitions[c.NEW][c.TERMINATED]="[JVM halt0 only] When the JVM shuts down, it terminates all threads, including those that have never been run.",e.validTransitions[c.ASYNC_WAITING]={},e.validTransitions[c.ASYNC_WAITING][c.RUNNABLE]="Async operation completes",e.validTransitions[c.ASYNC_WAITING][c.TERMINATED]="RunMethod completes and callstack is empty",e.validTransitions[c.BLOCKED]={},e.validTransitions[c.BLOCKED][c.RUNNABLE]="Acquires monitor, or is interrupted",e.validTransitions[c.BLOCKED][c.TERMINATED]="Thread is terminated whilst blocked.",e.validTransitions[c.PARKED]={},e.validTransitions[c.PARKED][c.ASYNC_WAITING]="Balancing unpark, or is interrupted",e.validTransitions[c.PARKED][c.TERMINATED]="Thread is terminated whilst parked.",e.validTransitions[c.RUNNABLE]={},e.validTransitions[c.RUNNABLE][c.ASYNC_WAITING]="Thread performs an asynchronous JavaScript operation",e.validTransitions[c.RUNNABLE][c.TERMINATED]="Callstack is empty",e.validTransitions[c.RUNNABLE][c.BLOCKED]="Thread waits to acquire monitor",e.validTransitions[c.RUNNABLE][c.WAITING]="Thread waits on monitor (Object.wait)",e.validTransitions[c.RUNNABLE][c.TIMED_WAITING]="Thread waits on monitor with timeout (Object.wait)",e.validTransitions[c.RUNNABLE][c.PARKED]="Thread parks itself",e.validTransitions[c.TERMINATED]={},e.validTransitions[c.TERMINATED][c.NEW]="Thread is resurrected for re-use",e.validTransitions[c.TERMINATED][c.RUNNABLE]="Thread is resurrected for re-use",e.validTransitions[c.TERMINATED][c.ASYNC_WAITING]="[JVM Bootup] Thread is resurrected for internal operation",e.validTransitions[c.TIMED_WAITING]={},e.validTransitions[c.TIMED_WAITING][c.RUNNABLE]="Timer expires, or thread is interrupted, and thread immediately acquires lock",e.validTransitions[c.TIMED_WAITING][c.UNINTERRUPTABLY_BLOCKED]="Thread is interrupted or notified, or timer expires, and lock already owned",e.validTransitions[c.TIMED_WAITING][c.TERMINATED]="Thread is terminated whilst waiting.",e.validTransitions[c.UNINTERRUPTABLY_BLOCKED]={},e.validTransitions[c.UNINTERRUPTABLY_BLOCKED][c.RUNNABLE]="Thread acquires monitor",e.validTransitions[c.UNINTERRUPTABLY_BLOCKED][c.TERMINATED]="Thread is terminated whilst blocked.",e.validTransitions[c.WAITING]={},e.validTransitions[c.WAITING][c.RUNNABLE]="Thread is interrupted, and immediately acquires lock",e.validTransitions[c.WAITING][c.UNINTERRUPTABLY_BLOCKED]="Thread is notified or interrupted, and does not immediately acquire lock",e.validTransitions[c.WAITING][c.TERMINATED]="Thread is terminated whilst waiting.",e.OpcodeLayoutPrinters={},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.OPCODE_ONLY]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.CONSTANT_POOL]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+r(t.cls.constantPool.get(e.readUInt16BE(n+1)))},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.CONSTANT_POOL_UINT8]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+r(t.cls.constantPool.get(e.readUInt8(n+1)))},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.CONSTANT_POOL_AND_UINT8_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+r(t.cls.constantPool.get(e.readUInt16BE(n+1)))+" "+e.readUInt8(n+3)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.UINT8_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+e.readUInt8(n+1)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.UINT8_AND_INT8_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+e.readUInt8(n+1)+" "+e.readInt8(n+2)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.INT8_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+e.readInt8(n+1)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.INT16_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+e.readInt16BE(n+1)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.INT32_VALUE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+e.readInt32BE(n+1)},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.ARRAY_TYPE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()+" "+i.ArrayTypes[e.readUInt8(n+1)]},e.OpcodeLayoutPrinters[o.OpcodeLayoutType.WIDE]=function(t,e,n){return o.OpCode[e.readUInt8(n)].toLowerCase()},e.annotateOpcode=a},function(t,e,n){"use strict";function r(t,e,n){return null==n&&(l(t,e,"Ljava/lang/NullPointerException;",""),!0)}function a(t){return t.pop(),t.pop()}function o(t,e,n){t.setStatus(p.ThreadStatus.ASYNC_WAITING),n.resolve(t,e.getLoader(),e.method.cls,function(e){e&&t.setStatus(p.ThreadStatus.RUNNABLE)},!1),e.returnToThreadLoop=!0}function s(t,e,n){t.setStatus(p.ThreadStatus.ASYNC_WAITING),n.initialize(t,function(e){null!=e&&t.setStatus(p.ThreadStatus.RUNNABLE)},!1),e.returnToThreadLoop=!0}function i(t,e,n){function r(e){e.initialize(t,function(e){null!=e&&t.setStatus(p.ThreadStatus.RUNNABLE)})}t.setStatus(p.ThreadStatus.ASYNC_WAITING),n.isResolved()?r(n.cls):n.resolve(t,e.getLoader(),e.method.cls,function(t){t&&r(n.cls)},!1),e.returnToThreadLoop=!0}function l(t,e,n,r){t.throwNewException(n,r),e.returnToThreadLoop=!0}var u=n(8),c=n(7),p=n(9);n(13);e.isNull=r,e.pop2=a,e.resolveCPItem=o,e.initializeClassFromClass=s,e.initializeClass=i,e.throwException=l,e.ArrayTypes={4:"Z",5:"C",6:"F",7:"D",8:"B",9:"S",10:"I",11:"J"};var h=function(){function t(){}return t._aload_32=function(t,e){var n=e.opStack,a=n.pop(),o=n.pop();if(!r(t,e,o)){var s=o.array.length;a<0||a>=s?l(t,e,"Ljava/lang/ArrayIndexOutOfBoundsException;",a+" not in length "+s+" array of type "+o.getClass().getInternalName()):(n.push(o.array[a]),e.pc++)}},t._aload_64=function(t,e){var n=e.opStack,a=n.pop(),o=n.pop();if(!r(t,e,o)){var s=o.array.length;a<0||a>=s?l(t,e,"Ljava/lang/ArrayIndexOutOfBoundsException;",a+" not in length "+s+" array of type "+o.getClass().getInternalName()):(n.push(o.array[a]),n.push(null),e.pc++)}},t._astore_32=function(t,e){var n=e.opStack,a=n.pop(),o=n.pop(),s=n.pop();if(!r(t,e,s)){var i=s.array.length;o<0||o>=i?l(t,e,"Ljava/lang/ArrayIndexOutOfBoundsException;",o+" not in length "+i+" array of type "+s.getClass().getInternalName()):(s.array[o]=a,e.pc++)}},t._astore_64=function(t,e){var n=e.opStack,a=n.pop2(),o=n.pop(),s=n.pop();if(!r(t,e,s)){var i=s.array.length;o<0||o>=i?l(t,e,"Ljava/lang/ArrayIndexOutOfBoundsException;",o+" not in length "+i+" array of type "+s.getClass().getInternalName()):(s.array[o]=a,e.pc++)}},t.aconst_null=function(t,e){e.opStack.push(null),e.pc++},t._const_0_32=function(t,e){e.opStack.push(0),e.pc++},t._const_1_32=function(t,e){e.opStack.push(1),e.pc++},t._const_2_32=function(t,e){e.opStack.push(2),e.pc++},t.iconst_m1=function(t,e){e.opStack.push(-1),e.pc++},t.iconst_3=function(t,e){e.opStack.push(3),e.pc++},t.iconst_4=function(t,e){e.opStack.push(4),e.pc++},t.iconst_5=function(t,e){e.opStack.push(5),e.pc++},t.lconst_0=function(t,e){e.opStack.pushWithNull(u.ZERO),e.pc++},t.lconst_1=function(t,e){e.opStack.pushWithNull(u.ONE),e.pc++},t.dconst_0=function(t,e){e.opStack.pushWithNull(0),e.pc++},t.dconst_1=function(t,e){e.opStack.pushWithNull(1),e.pc++},t._load_32=function(t,e,n){var r=e.pc;e.opStack.push(e.locals[n.readUInt8(r+1)]),e.pc+=2},t._load_0_32=function(t,e){e.opStack.push(e.locals[0]),e.pc++},t._load_1_32=function(t,e){e.opStack.push(e.locals[1]),e.pc++},t._load_2_32=function(t,e){e.opStack.push(e.locals[2]),e.pc++},t._load_3_32=function(t,e){e.opStack.push(e.locals[3]),e.pc++},t._load_64=function(t,e,n){var r=e.pc;e.opStack.pushWithNull(e.locals[n.readUInt8(r+1)]),e.pc+=2},t._load_0_64=function(t,e){e.opStack.pushWithNull(e.locals[0]),e.pc++},t._load_1_64=function(t,e){e.opStack.pushWithNull(e.locals[1]),e.pc++},t._load_2_64=function(t,e){e.opStack.pushWithNull(e.locals[2]),e.pc++},t._load_3_64=function(t,e){e.opStack.pushWithNull(e.locals[3]),e.pc++},t._store_32=function(t,e,n){var r=e.pc;e.locals[n.readUInt8(r+1)]=e.opStack.pop(),e.pc+=2},t._store_0_32=function(t,e){e.locals[0]=e.opStack.pop(),e.pc++},t._store_1_32=function(t,e){e.locals[1]=e.opStack.pop(),e.pc++},t._store_2_32=function(t,e){e.locals[2]=e.opStack.pop(),e.pc++},t._store_3_32=function(t,e){e.locals[3]=e.opStack.pop(),e.pc++},t._store_64=function(t,e,n){var r=e.pc,a=n.readUInt8(r+1);e.locals[a+1]=e.opStack.pop(),e.locals[a]=e.opStack.pop(),e.pc+=2},t._store_0_64=function(t,e){e.locals[1]=e.opStack.pop(),e.locals[0]=e.opStack.pop(),e.pc++},t._store_1_64=function(t,e){e.locals[2]=e.opStack.pop(),e.locals[1]=e.opStack.pop(),e.pc++},t._store_2_64=function(t,e){e.locals[3]=e.opStack.pop(),e.locals[2]=e.opStack.pop(),e.pc++},t._store_3_64=function(t,e){e.locals[4]=e.opStack.pop(),e.locals[3]=e.opStack.pop(),e.pc++},t.sipush=function(t,e,n){var r=e.pc;e.opStack.push(n.readInt16BE(r+1)),e.pc+=3},t.bipush=function(t,e,n){var r=e.pc;e.opStack.push(n.readInt8(r+1)),e.pc+=2},t.pop=function(t,e){e.opStack.dropFromTop(1),e.pc++},t.pop2=function(t,e){e.opStack.dropFromTop(2),e.pc++},t.dup=function(t,e){e.opStack.dup(),e.pc++},t.dup_x1=function(t,e){e.opStack.dup_x1(),e.pc++},t.dup_x2=function(t,e){e.opStack.dup_x2(),e.pc++},t.dup2=function(t,e){e.opStack.dup2(),e.pc++},t.dup2_x1=function(t,e){e.opStack.dup2_x1(),e.pc++},t.dup2_x2=function(t,e){var n=e.opStack,r=n.pop(),a=n.pop(),o=n.pop(),s=n.pop();n.push6(a,r,s,o,a,r),e.pc++},t.swap=function(t,e){e.opStack.swap(),e.pc++},t.iadd=function(t,e){var n=e.opStack;n.push(n.pop()+n.pop()|0),e.pc++},t.ladd=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().add(n.pop2())),e.pc++},t.fadd=function(t,e){var n=e.opStack;n.push(c.wrapFloat(n.pop()+n.pop())),e.pc++},t.dadd=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2()+n.pop2()),e.pc++},t.isub=function(t,e){var n=e.opStack;n.push(-n.pop()+n.pop()|0),e.pc++},t.fsub=function(t,e){var n=e.opStack;n.push(c.wrapFloat(-n.pop()+n.pop())),e.pc++},t.dsub=function(t,e){var n=e.opStack;n.pushWithNull(-n.pop2()+n.pop2()),e.pc++},t.lsub=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().negate().add(n.pop2())),e.pc++},t.imul=function(t,e){var n=e.opStack;n.push(Math.imul(n.pop(),n.pop())),e.pc++},t.lmul=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().multiply(n.pop2())),e.pc++},t.fmul=function(t,e){var n=e.opStack;n.push(c.wrapFloat(n.pop()*n.pop())),e.pc++},t.dmul=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2()*n.pop2()),e.pc++},t.idiv=function(t,e){var n=e.opStack,r=n.pop(),a=n.pop();0===r?l(t,e,"Ljava/lang/ArithmeticException;","/ by zero"):(a===p.Constants.INT_MIN&&r===-1?n.push(a):n.push(a/r|0),e.pc++)},t.ldiv=function(t,e){var n=e.opStack,r=n.pop2(),a=n.pop2();r.isZero()?l(t,e,"Ljava/lang/ArithmeticException;","/ by zero"):(n.pushWithNull(a.div(r)),e.pc++)},t.fdiv=function(t,e){var n=e.opStack,r=n.pop();n.push(c.wrapFloat(n.pop()/r)),e.pc++},t.ddiv=function(t,e){var n=e.opStack,r=n.pop2();n.pushWithNull(n.pop2()/r),e.pc++},t.irem=function(t,e){var n=e.opStack,r=n.pop(),a=n.pop();0===r?l(t,e,"Ljava/lang/ArithmeticException;","/ by zero"):(n.push(a%r),e.pc++)},t.lrem=function(t,e){var n=e.opStack,r=n.pop2(),a=n.pop2();r.isZero()?l(t,e,"Ljava/lang/ArithmeticException;","/ by zero"):(n.pushWithNull(a.modulo(r)),e.pc++)},t.frem=function(t,e){var n=e.opStack,r=n.pop();n.push(n.pop()%r),e.pc++},t.drem=function(t,e){var n=e.opStack,r=n.pop2();n.pushWithNull(n.pop2()%r),e.pc++},t.ineg=function(t,e){var n=e.opStack;n.push(0|-n.pop()),e.pc++},t.lneg=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().negate()),e.pc++},t.fneg=function(t,e){var n=e.opStack;n.push(-n.pop()),e.pc++},t.dneg=function(t,e){var n=e.opStack;n.pushWithNull(-n.pop2()),e.pc++},t.ishl=function(t,e){var n=e.opStack,r=n.pop();n.push(n.pop()<<r),e.pc++},t.lshl=function(t,e){var n=e.opStack,r=n.pop();n.pushWithNull(n.pop2().shiftLeft(u.fromInt(r))),e.pc++},t.ishr=function(t,e){var n=e.opStack,r=n.pop();n.push(n.pop()>>r),e.pc++},t.lshr=function(t,e){var n=e.opStack,r=n.pop();n.pushWithNull(n.pop2().shiftRight(u.fromInt(r))),e.pc++},t.iushr=function(t,e){var n=e.opStack,r=n.pop();n.push(n.pop()>>>r|0),e.pc++},t.lushr=function(t,e){var n=e.opStack,r=n.pop();n.pushWithNull(n.pop2().shiftRightUnsigned(u.fromInt(r))),e.pc++},t.iand=function(t,e){var n=e.opStack;n.push(n.pop()&n.pop()),e.pc++},t.land=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().and(n.pop2())),e.pc++},t.ior=function(t,e){var n=e.opStack;n.push(n.pop()|n.pop()),e.pc++},t.lor=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().or(n.pop2())),e.pc++},t.ixor=function(t,e){var n=e.opStack;n.push(n.pop()^n.pop()),e.pc++},t.lxor=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().xor(n.pop2())),e.pc++},t.iinc=function(t,e,n){var r=e.pc,a=n.readUInt8(r+1),o=n.readInt8(r+2);e.locals[a]=e.locals[a]+o|0,e.pc+=3},t.i2l=function(t,e){var n=e.opStack;n.pushWithNull(u.fromInt(n.pop())),e.pc++},t.i2f=function(t,e){e.pc++},t.i2d=function(t,e){e.opStack.push(null),e.pc++},t.l2i=function(t,e){var n=e.opStack;n.push(n.pop2().toInt()),e.pc++},t.l2f=function(t,e){var n=e.opStack;n.push(n.pop2().toNumber()),e.pc++},t.l2d=function(t,e){var n=e.opStack;n.pushWithNull(n.pop2().toNumber()),e.pc++},t.f2i=function(t,e){var n=e.opStack;n.push(c.float2int(n.pop())),e.pc++},t.f2l=function(t,e){var n=e.opStack;n.pushWithNull(u.fromNumber(n.pop())),e.pc++},t.f2d=function(t,e){e.opStack.push(null),e.pc++},t.d2i=function(t,e){var n=e.opStack;n.push(c.float2int(n.pop2())),e.pc++},t.d2l=function(t,e){var n=e.opStack,r=n.pop2();r===Number.POSITIVE_INFINITY?n.pushWithNull(u.MAX_VALUE):r===Number.NEGATIVE_INFINITY?n.pushWithNull(u.MIN_VALUE):n.pushWithNull(u.fromNumber(r)),e.pc++},t.d2f=function(t,e){var n=e.opStack;n.pop(),n.push(c.wrapFloat(n.pop())),e.pc++},t.i2b=function(t,e){var n=e.opStack;n.push(n.pop()<<24>>24),e.pc++},t.i2c=function(t,e){var n=e.opStack;n.push(65535&n.pop()),e.pc++},t.i2s=function(t,e){var n=e.opStack;n.push(n.pop()<<16>>16),e.pc++},t.lcmp=function(t,e){var n=e.opStack,r=n.pop2();n.push(n.pop2().compare(r)),e.pc++},t.fcmpl=function(t,e){var n=e.opStack,r=n.pop(),a=n.pop();a===r?n.push(0):a>r?n.push(1):n.push(-1),e.pc++},t.fcmpg=function(t,e){var n=e.opStack,r=n.pop(),a=n.pop();a===r?n.push(0):a<r?n.push(-1):n.push(1),e.pc++},t.dcmpl=function(t,e){var n=e.opStack,r=n.pop2(),a=n.pop2();a===r?n.push(0):a>r?n.push(1):n.push(-1),e.pc++},t.dcmpg=function(t,e){var n=e.opStack,r=n.pop2(),a=n.pop2();a===r?n.push(0):a<r?n.push(-1):n.push(1),e.pc++},t.ifeq=function(t,e,n){var r=e.pc;if(0===e.opStack.pop()){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.ifne=function(t,e,n){var r=e.pc;if(0!==e.opStack.pop()){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.iflt=function(t,e,n){var r=e.pc;if(e.opStack.pop()<0){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.ifge=function(t,e,n){var r=e.pc;if(e.opStack.pop()>=0){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.ifgt=function(t,e,n){var r=e.pc;if(e.opStack.pop()>0){
var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.ifle=function(t,e,n){var r=e.pc;if(e.opStack.pop()<=0){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmpeq=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o===a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmpne=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o!==a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmplt=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o<a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmpge=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o>=a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmpgt=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o>a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_icmple=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o<=a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_acmpeq=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o===a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t.if_acmpne=function(t,e,n){var r=e.pc,a=e.opStack.pop(),o=e.opStack.pop();if(o!==a){var s=n.readInt16BE(r+1);e.pc+=s,s<0&&e.method.incrBBEntries()}else e.pc+=3},t["goto"]=function(t,e,n){var r=e.pc,a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()},t.jsr=function(t,e,n){var r=e.pc;e.opStack.push(r+3);var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()},t.ret=function(t,e,n){var r=e.pc;e.pc=e.locals[n.readUInt8(r+1)]},t.tableswitch=function(t,e,n){var r=e.pc;r+=(4-(r+1)%4)%4+1;var a=n.readInt32BE(r),o=n.readInt32BE(r+4),s=n.readInt32BE(r+8),i=e.opStack.pop();i>=o&&i<=s?e.pc+=n.readInt32BE(r+12+4*(i-o)):e.pc+=a},t.lookupswitch=function(t,e,n){var r=e.pc;r+=(4-(r+1)%4)%4+1;var a,o=n.readInt32BE(r),s=n.readInt32BE(r+4),i=e.opStack.pop();for(r+=8,a=0;a<s;a++){if(n.readInt32BE(r)===i){var l=n.readInt32BE(r+4);return e.pc+=l,void(l<0&&e.method.incrBBEntries())}r+=8}e.pc+=o},t["return"]=function(t,e){e.returnToThreadLoop=!0,e.method.accessFlags.isSynchronized()&&!e.method.methodLock(t,e).exit(t)||t.asyncReturn()},t._return_32=function(t,e){e.returnToThreadLoop=!0,e.method.accessFlags.isSynchronized()&&!e.method.methodLock(t,e).exit(t)||t.asyncReturn(e.opStack.bottom())},t._return_64=function(t,e){e.returnToThreadLoop=!0,e.method.accessFlags.isSynchronized()&&!e.method.methodLock(t,e).exit(t)||t.asyncReturn(e.opStack.bottom(),null)},t.getstatic=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));if(a.isResolved()){var i=a.field.cls;i.isInitialized(t)?("J"===a.nameAndTypeInfo.descriptor||"D"===a.nameAndTypeInfo.descriptor?n.writeUInt8(p.OpCode.GETSTATIC_FAST64,r):n.writeUInt8(p.OpCode.GETSTATIC_FAST32,r),a.fieldOwnerConstructor=i.getConstructor(t)):s(t,e,i)}else o(t,e,a)},t.getstatic_fast32=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));e.opStack.push(a.fieldOwnerConstructor[a.fullFieldName]),e.pc+=3},t.getstatic_fast64=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));e.opStack.pushWithNull(a.fieldOwnerConstructor[a.fullFieldName]),e.pc+=3},t.putstatic=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));if(a.isResolved()){var i=a.field.cls;i.isInitialized(t)?("J"===a.nameAndTypeInfo.descriptor||"D"===a.nameAndTypeInfo.descriptor?n.writeUInt8(p.OpCode.PUTSTATIC_FAST64,r):n.writeUInt8(p.OpCode.PUTSTATIC_FAST32,r),a.fieldOwnerConstructor=i.getConstructor(t)):s(t,e,i)}else o(t,e,a)},t.putstatic_fast32=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.fieldOwnerConstructor[a.fullFieldName]=e.opStack.pop(),e.pc+=3},t.putstatic_fast64=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.fieldOwnerConstructor[a.fullFieldName]=e.opStack.pop2(),e.pc+=3},t.getfield=function(t,e,n){var a=e.pc,s=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),i=(e.getLoader(),e.opStack.top());if(!r(t,e,i))if(s.isResolved()){var l=s.field;"J"==l.rawDescriptor||"D"==l.rawDescriptor?n.writeUInt8(p.OpCode.GETFIELD_FAST64,a):n.writeUInt8(p.OpCode.GETFIELD_FAST32,a)}else o(t,e,s)},t.getfield_fast32=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=e.opStack,i=s.pop();r(t,e,i)||(s.push(i[o.fullFieldName]),e.pc+=3)},t.getfield_fast64=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=e.opStack,i=s.pop();r(t,e,i)||(s.pushWithNull(i[o.fullFieldName]),e.pc+=3)},t.putfield=function(t,e,n){var a=e.pc,s=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),i=(e.getLoader(),"J"==s.nameAndTypeInfo.descriptor||"D"==s.nameAndTypeInfo.descriptor),l=e.opStack.fromTop(i?2:1);if(!r(t,e,l))if(s.isResolved()){var u=s.field;i?n.writeUInt8(p.OpCode.PUTFIELD_FAST64,a):n.writeUInt8(p.OpCode.PUTFIELD_FAST32,a),s.fullFieldName=c.descriptor2typestr(u.cls.getInternalName())+"/"+s.nameAndTypeInfo.name}else o(t,e,s)},t.putfield_fast32=function(t,e,n){var a=e.pc,o=e.opStack,s=o.pop(),i=o.pop(),l=e.method.cls.constantPool.get(n.readUInt16BE(a+1));r(t,e,i)||(i[l.fullFieldName]=s,e.pc+=3)},t.putfield_fast64=function(t,e,n){var a=e.pc,o=e.opStack,s=o.pop2(),i=o.pop(),l=e.method.cls.constantPool.get(n.readUInt16BE(a+1));r(t,e,i)||(i[l.fullFieldName]=s,e.pc+=3)},t.invokevirtual=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));if(a.isResolved()){var s=a.method;if(s.isSignaturePolymorphic())switch(s.name){case"invokeBasic":n.writeUInt8(p.OpCode.INVOKEBASIC,r);break;case"invoke":case"invokeExact":n.writeUInt8(p.OpCode.INVOKEHANDLE,r);break;default:l(t,e,"Ljava/lang/AbstractMethodError;","Invalid signature polymorphic method: "+s.cls.getExternalName()+"."+s.name)}else n.writeUInt8(p.OpCode.INVOKEVIRTUAL_FAST,r)}else o(t,e,a)},t.invokeinterface=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?a.method.cls.isInitialized(t)?n.writeUInt8(p.OpCode.INVOKEINTERFACE_FAST,r):i(t,e,a.classInfo):o(t,e,a)},t.invokedynamic=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));t.setStatus(p.ThreadStatus.ASYNC_WAITING),a.constructCallSiteObject(t,e.getLoader(),e.method.cls,r,function(e){e&&(n.writeUInt8(p.OpCode.INVOKEDYNAMIC_FAST,r),t.setStatus(p.ThreadStatus.RUNNABLE))}),e.returnToThreadLoop=!0},t.invokespecial=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?n.writeUInt8(p.OpCode.INVOKENONVIRTUAL_FAST,r):o(t,e,a)},t.invokestatic=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));if(a.isResolved()){var i=a.method;if(i.cls.isInitialized(t)){var l=p.OpCode.INVOKESTATIC_FAST;if(a.method.isSignaturePolymorphic())switch(a.method.name){case"linkToInterface":case"linkToVirtual":l=p.OpCode.LINKTOVIRTUAL;break;case"linkToStatic":case"linkToSpecial":l=p.OpCode.LINKTOSPECIAL}n.writeUInt8(l,r)}else s(t,e,i.cls)}else o(t,e,a)},t.invokenonvirtual_fast=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=e.opStack,i=o.paramWordSize,l=s.fromTop(i);if(!r(t,e,l)){var u=s.sliceFromTop(i);s.dropFromTop(i+1),l[o.fullSignature](t,u),e.returnToThreadLoop=!0}},t.invokestatic_fast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1)),o=e.opStack,s=a.paramWordSize,i=o.sliceAndDropFromTop(s);a.jsConstructor[a.fullSignature](t,i),e.returnToThreadLoop=!0},t.invokevirtual_fast=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=o.paramWordSize,i=e.opStack,l=i.fromTop(s);r(t,e,l)||(l[o.signature](t,i.sliceFromTop(s)),i.dropFromTop(s+1),e.returnToThreadLoop=!0)},t.invokedynamic_fast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1)),o=a.getCallSiteObject(r),s=o[1],i=o[0].vmtarget,l=e.opStack,u=a.paramWordSize,c=l.sliceAndDropFromTop(u);null!==s&&c.push(s),i(t,null,c),e.returnToThreadLoop=!0},t.invokehandle=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=e.opStack,i=o.memberName.vmtarget,l=o.paramWordSize+1,u=o.appendix,c=s.sliceFromTop(l);null!==u&&c.push(u),r(t,e,c[0])||(s.dropFromTop(l),i(t,null,c),e.returnToThreadLoop=!0)},t.invokebasic=function(t,e,n){var a,o,s=e.pc,i=e.method.cls.constantPool.get(n.readUInt16BE(s+1)),l=i.getParamWordSize(),u=e.opStack,c=u.fromTop(l),p=u.sliceFromTop(l+1);r(t,e,c)||(u.dropFromTop(l+1),a=c["java/lang/invoke/MethodHandle/form"],o=a["java/lang/invoke/LambdaForm/vmentry"],o.vmtarget(t,i.nameAndTypeInfo.descriptor,p),e.returnToThreadLoop=!0)},t.linktospecial=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=e.opStack,i=o.paramWordSize,l=s.sliceFromTop(i),u=l.pop(),c=o.nameAndTypeInfo.descriptor;r(t,e,u)||(s.dropFromTop(i),u.vmtarget(t,c.replace("Ljava/lang/invoke/MemberName;)",")"),l),e.returnToThreadLoop=!0)},t.linktovirtual=function(t,e,n){var a=e.pc,o=e.method.cls.constantPool.get(n.readUInt16BE(a+1)),s=o.paramWordSize,i=e.opStack,l=i.sliceFromTop(s),u=l.pop(),c=o.nameAndTypeInfo.descriptor;r(t,e,u)||(i.dropFromTop(s),u.vmtarget(t,c.replace("Ljava/lang/invoke/MemberName;)",")"),l),e.returnToThreadLoop=!0)},t.breakpoint=function(t,e){l(t,e,"Ljava/lang/Error;","breakpoint not implemented.")},t["new"]=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));if(a.isResolved()){var i=a.cls;i.isInitialized(t)?n.writeUInt8(p.OpCode.NEW_FAST,r):s(t,e,i)}else o(t,e,a)},t.new_fast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));e.opStack.push(new a.clsConstructor(t)),e.pc+=3},t.newarray=function(t,n,r){var a=n.pc,o=n.opStack,s="["+e.ArrayTypes[r.readUInt8(a+1)],i=n.getLoader().getInitializedClass(t,s),u=o.pop();u>=0?(o.push(new(i.getConstructor(t))(t,u)),n.pc+=2):l(t,n,"Ljava/lang/NegativeArraySizeException;","Tried to init "+s+" array with length "+u)},t.anewarray=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?(n.writeUInt8(p.OpCode.ANEWARRAY_FAST,r),a.arrayClass=e.getLoader().getInitializedClass(t,"["+a.cls.getInternalName()),a.arrayClassConstructor=a.arrayClass.getConstructor(t)):o(t,e,a)},t.anewarray_fast=function(t,e,n){var r=e.pc,a=e.opStack,o=e.method.cls.constantPool.get(n.readUInt16BE(r+1)),s=a.pop();s>=0?(a.push(new o.arrayClassConstructor(t,s)),e.pc+=3):l(t,e,"Ljava/lang/NegativeArraySizeException;","Tried to init "+o.arrayClass.getInternalName()+" array with length "+s)},t.arraylength=function(t,e){var n=e.opStack,a=n.pop();r(t,e,a)||(n.push(a.array.length),e.pc++)},t.athrow=function(t,e){t.throwException(e.opStack.pop()),e.returnToThreadLoop=!0},t.checkcast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?n.writeUInt8(p.OpCode.CHECKCAST_FAST,r):o(t,e,a)},t.checkcast_fast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1)),o=a.cls,s=e.opStack,i=s.top();if(null==i||i.getClass().isCastable(o))e.pc+=3;else{var u=o.getExternalName(),c=i.getClass().getExternalName();l(t,e,"Ljava/lang/ClassCastException;",c+" cannot be cast to "+u)}},t["instanceof"]=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?n.writeUInt8(p.OpCode.INSTANCEOF_FAST,r):o(t,e,a)},t.instanceof_fast=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1)),o=a.cls,s=e.opStack,i=s.pop();s.push(null!==i&&i.getClass().isCastable(o)?1:0),e.pc+=3},t.monitorenter=function(t,e){var n=e.opStack,r=n.pop(),a=function(){e.pc++};r.getMonitor().enter(t,a)?a():e.returnToThreadLoop=!0},t.monitorexit=function(t,e){var n=e.opStack.pop();n.getMonitor().exit(t)?e.pc++:e.returnToThreadLoop=!0},t.multianewarray=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?n.writeUInt8(p.OpCode.MULTIANEWARRAY_FAST,r):o(t,e,a)},t.multianewarray_fast=function(t,e,n){var r,a,o=e.pc,s=e.method.cls.constantPool.get(n.readUInt16BE(o+1)),i=e.opStack,u=n.readUInt8(o+3),c=Array(u);for(r=0;r<u;r++)if(a=i.pop(),c[u-r-1]=a,a<0)return void l(t,e,"Ljava/lang/NegativeArraySizeException;","Tried to init "+s.cls.getInternalName()+" array with a dimension of length "+a);i.push(new(s.cls.getConstructor(t))(t,c)),e.pc+=4},t.ifnull=function(t,e,n){var r=e.pc;if(null==e.opStack.pop()){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.ifnonnull=function(t,e,n){var r=e.pc;if(null!=e.opStack.pop()){var a=n.readInt16BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()}else e.pc+=3},t.goto_w=function(t,e,n){var r=e.pc,a=n.readInt32BE(r+1);e.pc+=a,a<0&&e.method.incrBBEntries()},t.jsr_w=function(t,e,n){var r=e.pc;e.opStack.push(e.pc+5),e.pc+=n.readInt32BE(r+1)},t.nop=function(t,e){e.pc+=1},t.ldc=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt8(r+1));a.isResolved()?(e.opStack.push(a.getConstant(t)),e.pc+=2):o(t,e,a)},t.ldc_w=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));a.isResolved()?(e.opStack.push(a.getConstant(t)),e.pc+=3):o(t,e,a)},t.ldc2_w=function(t,e,n){var r=e.pc,a=e.method.cls.constantPool.get(n.readUInt16BE(r+1));e.opStack.pushWithNull(a.value),e.pc+=3},t.wide=function(t,e,n){var r=e.pc,a=n.readUInt16BE(r+2);switch(e.pc+=4,n.readUInt8(r+1)){case p.OpCode.ILOAD:case p.OpCode.FLOAD:case p.OpCode.ALOAD:e.opStack.push(e.locals[a]);break;case p.OpCode.LLOAD:case p.OpCode.DLOAD:e.opStack.pushWithNull(e.locals[a]);break;case p.OpCode.ISTORE:case p.OpCode.FSTORE:case p.OpCode.ASTORE:e.locals[a]=e.opStack.pop();break;case p.OpCode.LSTORE:case p.OpCode.DSTORE:e.locals[a+1]=e.opStack.pop(),e.locals[a]=e.opStack.pop();break;case p.OpCode.RET:e.pc=e.locals[a];break;case p.OpCode.IINC:var o=n.readInt16BE(r+4);e.locals[a]=e.locals[a]+o|0,e.pc+=2}},t.iaload=t._aload_32,t.faload=t._aload_32,t.aaload=t._aload_32,t.baload=t._aload_32,t.caload=t._aload_32,t.saload=t._aload_32,t.daload=t._aload_64,t.laload=t._aload_64,t.iastore=t._astore_32,t.fastore=t._astore_32,t.aastore=t._astore_32,t.bastore=t._astore_32,t.castore=t._astore_32,t.sastore=t._astore_32,t.lastore=t._astore_64,t.dastore=t._astore_64,t.iconst_0=t._const_0_32,t.iconst_1=t._const_1_32,t.iconst_2=t._const_2_32,t.fconst_0=t._const_0_32,t.fconst_1=t._const_1_32,t.fconst_2=t._const_2_32,t.iload=t._load_32,t.iload_0=t._load_0_32,t.iload_1=t._load_1_32,t.iload_2=t._load_2_32,t.iload_3=t._load_3_32,t.fload=t._load_32,t.fload_0=t._load_0_32,t.fload_1=t._load_1_32,t.fload_2=t._load_2_32,t.fload_3=t._load_3_32,t.aload=t._load_32,t.aload_0=t._load_0_32,t.aload_1=t._load_1_32,t.aload_2=t._load_2_32,t.aload_3=t._load_3_32,t.lload=t._load_64,t.lload_0=t._load_0_64,t.lload_1=t._load_1_64,t.lload_2=t._load_2_64,t.lload_3=t._load_3_64,t.dload=t._load_64,t.dload_0=t._load_0_64,t.dload_1=t._load_1_64,t.dload_2=t._load_2_64,t.dload_3=t._load_3_64,t.istore=t._store_32,t.istore_0=t._store_0_32,t.istore_1=t._store_1_32,t.istore_2=t._store_2_32,t.istore_3=t._store_3_32,t.fstore=t._store_32,t.fstore_0=t._store_0_32,t.fstore_1=t._store_1_32,t.fstore_2=t._store_2_32,t.fstore_3=t._store_3_32,t.astore=t._store_32,t.astore_0=t._store_0_32,t.astore_1=t._store_1_32,t.astore_2=t._store_2_32,t.astore_3=t._store_3_32,t.lstore=t._store_64,t.lstore_0=t._store_0_64,t.lstore_1=t._store_1_64,t.lstore_2=t._store_2_64,t.lstore_3=t._store_3_64,t.dstore=t._store_64,t.dstore_0=t._store_0_64,t.dstore_1=t._store_1_64,t.dstore_2=t._store_2_64,t.dstore_3=t._store_3_64,t.ireturn=t._return_32,t.freturn=t._return_32,t.areturn=t._return_32,t.lreturn=t._return_64,t.dreturn=t._return_64,t.invokeinterface_fast=t.invokevirtual_fast,t}();e.Opcodes=h,e.LookupTable=Array(255),function(){for(var t=0;t<255;t++)p.OpCode.hasOwnProperty(""+t)&&(e.LookupTable[t]=h[p.OpCode[t].toLowerCase()])}()},function(t,e,n){"use strict";function r(t){return null===t?"!":void 0===t?"undef":null!=t.ref?"*"+t.ref:t instanceof c?t+"L":t}function a(t){return t.map(r)}function o(t,n){if(t<=e.log_level){var r=n.join(" ");1==t?console.error(r):console.log(r)}}function s(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];o(e.VTRACE,t)}function i(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];o(e.TRACE,t)}function l(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];o(e.DEBUG,t)}function u(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];o(e.ERROR,t)}var c=n(8);e.debug_var=r,e.debug_vars=a,e.VTRACE=10,e.TRACE=9,e.DEBUG=5,e.ERROR=1,e.log_level=e.ERROR,e.vtrace=s,e.trace=i,e.debug=l,e.error=u},function(t,e){"use strict";var n=function(){function t(){this._data=[]}return t.prototype.write=function(t){this._data.push(t)},t.prototype.flush=function(){var t=this._data.join("");return this._data=[],t},t}();t.exports=n},function(t,e){(function(e){"use strict";var n;n="undefined"!=typeof window?window:"undefined"!=typeof self?self:e,t.exports=n}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){return t.length>0?"f.pc="+e+";f.opStack.pushAll("+t.join(",")+");":"f.pc="+e+";"}var a=n(9),o=n(15),s=/\\/g;e.opJitInfo=function(){var t=[],e=a.OpCode;t[e.ACONST_NULL]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=null;"+r}},t[e.ICONST_M1]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=-1;"+r}};var n={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[0];"+r}},i={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[1];"+r}},l={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[2];"+r}},u={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[3];"+r}};t[e.ALOAD_0]=n,t[e.ILOAD_0]=n,t[e.FLOAD_0]=n,t[e.ALOAD_1]=i,t[e.ILOAD_1]=i,t[e.FLOAD_1]=i,t[e.ALOAD_2]=l,t[e.ILOAD_2]=l,t[e.FLOAD_2]=l,t[e.ALOAD_3]=u,t[e.ILOAD_3]=u,t[e.FLOAD_3]=u;var c={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[0],"+e[1]+"=null;"+r}},p={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[1],"+e[1]+"=null;"+r}},h={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[2],"+e[1]+"=null;"+r}},f={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=f.locals[3],"+e[1]+"=null;"+r}};t[e.LLOAD_0]=c,t[e.DLOAD_0]=c,t[e.LLOAD_1]=p,t[e.DLOAD_1]=p,t[e.LLOAD_2]=h,t[e.DLOAD_2]=h,t[e.LLOAD_3]=f,t[e.DLOAD_3]=f;var d={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r){return"f.locals[0]="+t[0]+";"+r}},g={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r){return"f.locals[1]="+t[0]+";"+r}},v={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r){return"f.locals[2]="+t[0]+";"+r}},_={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r){return"f.locals[3]="+t[0]+";"+r}};t[e.ASTORE_0]=d,t[e.ISTORE_0]=d,t[e.FSTORE_0]=d,t[e.ASTORE_1]=g,t[e.ISTORE_1]=g,t[e.FSTORE_1]=g,t[e.ASTORE_2]=v,t[e.ISTORE_2]=v,t[e.FSTORE_2]=v,t[e.ASTORE_3]=_,t[e.ISTORE_3]=_,t[e.FSTORE_3]=_;var m={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r,a,o){var s=a.readUInt8(o+1);return"f.locals["+(s+1)+"]="+t[0]+";f.locals["+s+"]="+t[1]+";"+r}},T={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r){return"f.locals[1]="+t[0]+";f.locals[0]="+t[1]+";"+r}},y={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r){return"f.locals[2]="+t[0]+";f.locals[1]="+t[1]+";"+r}},I={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r){return"f.locals[3]="+t[0]+";f.locals[2]="+t[1]+";"+r}},E={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r){return"f.locals[4]="+t[0]+";f.locals[3]="+t[1]+";"+r}};t[e.LSTORE]=m,t[e.DSTORE]=m,t[e.LSTORE_0]=T,t[e.DSTORE_0]=T,t[e.LSTORE_1]=y,t[e.DSTORE_1]=y,t[e.LSTORE_2]=I,t[e.DSTORE_2]=I,t[e.LSTORE_3]=E,t[e.DSTORE_3]=E;var A={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=0;"+r}},S={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=1;"+r}},C={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=2;"+r}};t[e.ICONST_0]=A,t[e.ICONST_1]=S,t[e.ICONST_2]=C,t[e.FCONST_0]=A,t[e.FCONST_1]=S,t[e.FCONST_2]=C,t[e.ICONST_3]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=3;"+r}},t[e.ICONST_4]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=4;"+r}},t[e.ICONST_5]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=5;"+r}},t[e.LCONST_0]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=u.gLong.ZERO,"+e[1]+"=null;"+r}},t[e.LCONST_1]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=u.gLong.ONE,"+e[1]+"=null;"+r}},t[e.DCONST_0]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=0,"+e[1]+"=null;"+r}},t[e.DCONST_1]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=1,"+e[1]+"=null;"+r}};var N={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif(!u.isNull(t,f,"+t[1]+")){\nvar len"+n+"="+t[1]+".array.length;\nif("+t[0]+"<0||"+t[0]+">=len"+n+"){\n"+l+"\nu.throwException(t,f,'Ljava/lang/ArrayIndexOutOfBoundsException;',\"\"+"+t[0]+'+" not in length "+len'+n+'+" array of type "+'+t[1]+".getClass().getInternalName());\n}else{var "+e[0]+"="+t[1]+".array["+t[0]+"];"+a+"}\n}else{"+l+"}"}};t[e.IALOAD]=N,t[e.FALOAD]=N,t[e.AALOAD]=N,t[e.BALOAD]=N,t[e.CALOAD]=N,t[e.SALOAD]=N;var L={hasBranch:!1,pops:2,pushes:2,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif(!u.isNull(t,f,"+t[1]+")){\nvar len"+n+"="+t[1]+".array.length;\nif("+t[0]+"<0||"+t[0]+">=len"+n+"){\n"+l+"\nu.throwException(t,f,'Ljava/lang/ArrayIndexOutOfBoundsException;',\"\"+"+t[0]+'+" not in length "+len'+n+'+" array of type "+'+t[1]+".getClass().getInternalName());\n}else{var "+e[0]+"="+t[1]+".array["+t[0]+"],"+e[1]+"=null;"+a+"}\n}else{"+l+"}"}};t[e.DALOAD]=L,t[e.LALOAD]=L;var b={hasBranch:!1,pops:3,pushes:0,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif(!u.isNull(t,f,"+t[2]+")){\nvar len"+n+"="+t[2]+".array.length;\nif("+t[1]+"<0||"+t[1]+">=len"+n+"){\n"+l+"\nu.throwException(t,f,'Ljava/lang/ArrayIndexOutOfBoundsException;',\"\"+"+t[1]+'+" not in length "+len'+n+'+" array of type "+'+t[2]+".getClass().getInternalName());\n}else{"+t[2]+".array["+t[1]+"]="+t[0]+";"+a+"}\n}else{"+l+"}"}};t[e.IASTORE]=b,t[e.FASTORE]=b,t[e.AASTORE]=b,t[e.BASTORE]=b,t[e.CASTORE]=b,t[e.SASTORE]=b;var O={hasBranch:!1,pops:4,pushes:0,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif(!u.isNull(t,f,"+t[3]+")){\nvar len"+n+"="+t[3]+".array.length;\nif("+t[2]+"<0||"+t[2]+">=len"+n+"){\n"+l+"\nu.throwException(t,f,'Ljava/lang/ArrayIndexOutOfBoundsException;',\"\"+"+t[2]+'+" not in length "+len'+n+'+" array of type "+'+t[3]+".getClass().getInternalName());\n}else{"+t[3]+".array["+t[2]+"]="+t[1]+";"+a+"}\n}else{"+l+"}"}};t[e.DASTORE]=O,t[e.LASTORE]=O,t[e.LDC]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,a,o,s,i){var l=o.readUInt8(s+1),u=r(i,s);return"\nvar cnst"+n+"=f.method.cls.constantPool.get("+l+");\nif(cnst"+n+".isResolved()){var "+e[0]+"=cnst"+n+".getConstant(t);"+a+"\n}else{"+u+"u.resolveCPItem(t,f,cnst"+n+");}"}},t[e.LDC_W]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,a,o,s,i){var l=o.readUInt16BE(s+1),u=r(i,s);return"\nvar cnst"+n+"=f.method.cls.constantPool.get("+l+");\nif(cnst"+n+".isResolved()){var "+e[0]+"=cnst"+n+".getConstant(t);"+a+"\n}else{"+u+"u.resolveCPItem(t,f,cnst"+n+");}"}},t[e.LDC2_W]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r,a,o){var s=a.readUInt16BE(o+1);return"var "+e[0]+"=f.method.cls.constantPool.get("+s+").value,"+e[1]+"=null;"+r}},t[e.GETSTATIC_FAST32]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readUInt16BE(o+1);return"var fi"+n+"=f.method.cls.constantPool.get("+s+"),"+e[0]+"=fi"+n+".fieldOwnerConstructor[fi"+n+".fullFieldName];"+r}},t[e.GETSTATIC_FAST64]={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r,a,o){var s=a.readUInt16BE(o+1);return"\nvar fi"+n+"=f.method.cls.constantPool.get("+s+"),"+e[0]+"=fi"+n+".fieldOwnerConstructor[fi"+n+".fullFieldName],\n"+e[1]+"=null;"+r}},t[e.GETFIELD_FAST32]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,a,o,i,l,u){var c=r(l,i),p=o.readUInt16BE(i+1),h=u.cls.constantPool.get(p),f=h.fullFieldName.replace(s,"\\\\");return"if(!u.isNull(t,f,"+t[0]+")){var "+e[0]+"="+t[0]+"['"+f+"'];"+a+"}else{"+c+"}"}},t[e.GETFIELD_FAST64]={hasBranch:!1,pops:1,pushes:2,emit:function(t,e,n,a,o,i,l,u){var c=r(l,i),p=o.readUInt16BE(i+1),h=u.cls.constantPool.get(p),f=h.fullFieldName.replace(s,"\\\\");return"if(!u.isNull(t,f,"+t[0]+")){var "+e[0]+"="+t[0]+"['"+f+"'],"+e[1]+"=null;"+a+"}else{"+c+"}"}},t[e.PUTFIELD_FAST32]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,i,l,u){var c=r(l,i),p=o.readUInt16BE(i+1),h=u.cls.constantPool.get(p),f=h.fullFieldName.replace(s,"\\\\");return"if(!u.isNull(t,f,"+t[1]+")){"+t[1]+"['"+f+"']="+t[0]+";"+a+"}else{"+c+"}"}},t[e.PUTFIELD_FAST64]={hasBranch:!1,pops:3,pushes:0,emit:function(t,e,n,a,o,i,l,u){var c=r(l,i),p=o.readUInt16BE(i+1),h=u.cls.constantPool.get(p),f=h.fullFieldName.replace(s,"\\\\");return"if(!u.isNull(t,f,"+t[2]+")){"+t[2]+"['"+f+"']="+t[1]+";"+a+"}else{"+c+"}"}},t[e.INSTANCEOF_FAST]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readUInt16BE(o+1);return"var cls"+n+"=f.method.cls.constantPool.get("+s+").cls,"+e[0]+"="+t[0]+"!==null?("+t[0]+".getClass().isCastable(cls"+n+")?1:0):0;"+r}},t[e.CHECKCAST_FAST]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r,a,o,s,i){var l=a.readUInt16BE(o+1),u=i.cls.constantPool.get(l),c=u.cls.getExternalName();return"var cls"+n+"=f.method.cls.constantPool.get("+l+").cls;\nif(("+t[0]+"!=null)&&!"+t[0]+".getClass().isCastable(cls"+n+")){\nu.throwException(t,f,'Ljava/lang/ClassCastException;',"+t[0]+".getClass().getExternalName()+' cannot be cast to "+c+"');\n}else{var "+e[0]+"="+t[0]+";"+r+"}"}},t[e.ARRAYLENGTH]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"if(!u.isNull(t,f,"+t[0]+")){var "+e[0]+"="+t[0]+".array.length;"+a+"}else{"+l+"}"}};var w={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readUInt8(o+1);return"var "+e[0]+"=f.locals["+s+"];"+r}};t[e.ILOAD]=w,t[e.ALOAD]=w,t[e.FLOAD]=w;var k={hasBranch:!1,pops:0,pushes:2,emit:function(t,e,n,r,a,o){var s=a.readUInt8(o+1);return"var "+e[0]+"=f.locals["+s+"],"+e[1]+"=null;"+r}};t[e.LLOAD]=k,t[e.DLOAD]=k;var R={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r,a,o){var s=a.readUInt8(o+1);return"f.locals["+s+"]="+t[0]+";"+r}};t[e.ISTORE]=R,t[e.ASTORE]=R,t[e.FSTORE]=R,t[e.BIPUSH]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readInt8(o+1);return"var "+e[0]+"="+s+";"+r}},t[e.SIPUSH]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readInt16BE(o+1);return"var "+e[0]+"="+s+";"+r}},t[e.IINC]={hasBranch:!1,pops:0,pushes:0,emit:function(t,e,n,r,a,o){var s=a.readUInt8(o+1),i=a.readInt8(o+2);return"f.locals["+s+"]=(f.locals["+s+"]+"+i+")|0;"+r}},t[e.ATHROW]={hasBranch:!0,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return l+"t.throwException("+t[0]+");f.returnToThreadLoop=true;"}},t[e.GOTO]={hasBranch:!0,pops:0,pushes:0,emit:function(t,e,n,r,a,o){var s=a.readInt16BE(o+1);return"f.pc="+(o+s)+";"+r}},t[e.TABLESWITCH]={hasBranch:!0,pops:1,pushes:0,emit:function(t,e,n,r,a,o){var s=o+(4-(o+1)%4)%4+1,i=a.readInt32BE(s),l=a.readInt32BE(s+4),u=a.readInt32BE(s+8);if(u-l<8){for(var c="switch("+t[0]+"){",p=l;p<=u;p++){var h=a.readInt32BE(s+12+4*(p-l));c+="case "+p+":f.pc="+(o+h)+";break;"}return c+="default:f.pc="+(o+i)+"}"+r}return"if("+t[0]+">="+l+"&&"+t[0]+"<="+u+"){f.pc="+o+"+f.method.getCodeAttribute().getCode().readInt32BE("+(s+12)+"+(("+t[0]+" - "+l+")*4))}else{f.pc="+(o+i)+"}"+r}};var F={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"==="+t[1]+"){"+u+"}else{"+a+"}"}};t[e.IF_ICMPEQ]=F,t[e.IF_ACMPEQ]=F;var D={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"!=="+t[1]+"){"+u+"}else{"+a+"}"}};t[e.IF_ICMPNE]=D,t[e.IF_ACMPNE]=D,t[e.IF_ICMPGE]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[1]+">="+t[0]+"){"+u+"}else{"+a+"}"}},t[e.IF_ICMPGT]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[1]+">"+t[0]+"){"+u+"}else{"+a+"}"}},t[e.IF_ICMPLE]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[1]+"<="+t[0]+"){"+u+"}else{"+a+"}"}},t[e.IF_ICMPLT]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[1]+"<"+t[0]+"){"+u+"}else{"+a+"}"}},t[e.IFNULL]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"==null){"+u+"}else{"+a+"}"}},t[e.IFNONNULL]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"!=null){"+u+"}else{"+a+"}"}},t[e.IFEQ]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"===0){"+u+"}else{"+a+"}"}},t[e.IFNE]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"!==0){"+u+"}else{"+a+"}"}},t[e.IFGT]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+">0){"+u+"}else{"+a+"}"}},t[e.IFLT]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"<0){"+u+"}else{"+a+"}"}},t[e.IFGE]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+">=0){"+u+"}else{"+a+"}"}},t[e.IFLE]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=o.readInt16BE(s+1),u=r(i,s+l);return"if("+t[0]+"<=0){"+u+"}else{"+a+"}"}},t[e.LCMP]={hasBranch:!1,pops:4,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+".compare("+t[1]+");"+r}},t[e.FCMPL]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"==="+t[1]+"?0:("+t[1]+">"+t[0]+"?1:-1);"+r}},t[e.DCMPL]={hasBranch:!1,pops:4,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"==="+t[1]+"?0:("+t[3]+">"+t[1]+"?1:-1);"+r}},t[e.FCMPG]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"==="+t[1]+"?0:("+t[1]+"<"+t[0]+"?-1:1);"+r}},t[e.DCMPG]={hasBranch:!1,pops:4,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"==="+t[1]+"?0:("+t[3]+"<"+t[1]+"?-1:1);"+r}},t[e.RETURN]={hasBranch:!0,pops:0,pushes:0,emit:function(t,e,n,r,a,o,s,i){return i.accessFlags.isSynchronized()?"f.pc="+o+";f.returnToThreadLoop=true;if(!f.method.methodLock(t,f).exit(t)){return}t.asyncReturn();":"f.pc="+o+";f.returnToThreadLoop=true;t.asyncReturn();"}};var B={hasBranch:!0,pops:1,pushes:0,emit:function(t,e,n,r,a,o,s,i){return i.accessFlags.isSynchronized()?"f.pc="+o+";f.returnToThreadLoop=true;if(!f.method.methodLock(t,f).exit(t)){return}t.asyncReturn("+t[0]+");":"f.pc="+o+";f.returnToThreadLoop=true;t.asyncReturn("+t[0]+");"}};t[e.IRETURN]=B,t[e.FRETURN]=B,t[e.ARETURN]=B;var M={hasBranch:!0,pops:2,pushes:0,emit:function(t,e,n,r,a,o,s,i){return i.accessFlags.isSynchronized()?"f.pc="+o+";f.returnToThreadLoop=true;if(!f.method.methodLock(t,f).exit(t)){return}t.asyncReturn("+t[1]+",null);":"f.pc="+o+";f.returnToThreadLoop=true;t.asyncReturn("+t[1]+",null);"}};return t[e.LRETURN]=M,t[e.DRETURN]=M,t[e.MONITOREXIT]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"if("+t[0]+".getMonitor().exit(t)){"+a+"}else{"+l+"f.returnToThreadLoop=true;}"}},t[e.IXOR]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"^"+t[1]+";"+r}},t[e.LXOR]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".xor("+t[3]+"),"+e[1]+"=null;"+r;
}},t[e.IOR]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"|"+t[1]+";"+r}},t[e.LOR]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+".or("+t[1]+"),"+e[1]+"=null;"+r}},t[e.IAND]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"&"+t[1]+";"+r}},t[e.LAND]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+".and("+t[1]+"),"+e[1]+"=null;"+r}},t[e.IADD]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=("+t[0]+"+"+t[1]+")|0;"+r}},t[e.LADD]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".add("+t[3]+"),"+e[1]+"=null;"+r}},t[e.DADD]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+"+"+t[3]+","+e[1]+"=null;"+r}},t[e.IMUL]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=Math.imul("+t[0]+", "+t[1]+");"+r}},t[e.FMUL]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=u.wrapFloat("+t[0]+"*"+t[1]+");"+r}},t[e.LMUL]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+".multiply("+t[1]+"),"+e[1]+"= null;"+r}},t[e.DMUL]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"*"+t[1]+","+e[1]+"=null;"+r}},t[e.IDIV]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif("+t[0]+"===0){"+l+"u.throwException(t,f,'Ljava/lang/ArithmeticException;','/ by zero');\n}else{var "+e[0]+"=("+t[1]+"===u.Constants.INT_MIN&&"+t[0]+"===-1)?"+t[1]+":(("+t[1]+"/"+t[0]+")|0);"+a+"}"}},t[e.LDIV]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"\nif("+t[1]+".isZero()){"+l+"u.throwException(t,f,'Ljava/lang/ArithmeticException;','/ by zero');\n}else{var "+e[0]+"="+t[3]+".div("+t[1]+"),"+e[1]+"=null;"+a+"}"}},t[e.DDIV]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"/"+t[1]+","+e[1]+"=null;"+r}},t[e.ISUB]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=("+t[1]+"-"+t[0]+")|0;"+r}},t[e.LSUB]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".negate().add("+t[3]+"),"+e[1]+"= null;"+r}},t[e.DSUB]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"-"+t[1]+","+e[1]+"=null;"+r}},t[e.IREM]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"if("+t[0]+"===0){"+l+"u.throwException(t,f,'Ljava/lang/ArithmeticException;','/ by zero');\n}else{var "+e[0]+"="+t[1]+"%"+t[0]+";"+a+"}"}},t[e.LREM]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,a,o,s,i){var l=r(i,s);return"if("+t[1]+".isZero()){"+l+"u.throwException(t,f,'Ljava/lang/ArithmeticException;','/ by zero');\n}else{var "+e[0]+"="+t[3]+".modulo("+t[1]+"),"+e[1]+"=null;"+a+"}"}},t[e.DREM]={hasBranch:!1,pops:4,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[3]+"%"+t[1]+","+e[1]+"=null;"+r}},t[e.INEG]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=(-"+t[0]+")|0;"+r}},t[e.LNEG]={hasBranch:!1,pops:2,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".negate(),"+e[1]+"=null;"+r}},t[e.ISHL]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+"<<"+t[0]+";"+r}},t[e.LSHL]={hasBranch:!1,pops:3,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[2]+".shiftLeft(u.gLong.fromInt("+t[0]+")),"+e[1]+"=null;"+r}},t[e.ISHR]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+">>"+t[0]+";"+r}},t[e.LSHR]={hasBranch:!1,pops:3,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[2]+".shiftRight(u.gLong.fromInt("+t[0]+")),"+e[1]+"=null;"+r}},t[e.IUSHR]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=("+t[1]+">>>"+t[0]+")|0;"+r}},t[e.LUSHR]={hasBranch:!1,pops:3,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[2]+".shiftRightUnsigned(u.gLong.fromInt("+t[0]+")),"+e[1]+"=null;"+r}},t[e.I2B]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=("+t[0]+"<<24)>>24;"+r}},t[e.I2S]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=("+t[0]+"<<16)>>16;"+r}},t[e.I2C]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+"&0xFFFF;"+r}},t[e.I2L]={hasBranch:!1,pops:1,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"=u.gLong.fromInt("+t[0]+"),"+e[1]+"=null;"+r}},t[e.I2F]={hasBranch:!1,pops:0,pushes:0,emit:function(t,e,n,r){return""+r}},t[e.I2D]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=null;"+r}},t[e.F2I]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=u.float2int("+t[0]+");"+r}},t[e.F2D]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=null;"+r}},t[e.L2I]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".toInt();"+r}},t[e.L2D]={hasBranch:!1,pops:2,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+".toNumber(),"+e[1]+"=null;"+r}},t[e.D2I]={hasBranch:!1,pops:2,pushes:1,emit:function(t,e,n,r){return"var "+e[0]+"=u.float2int("+t[1]+");"+r}},t[e.DUP]={hasBranch:!1,pops:1,pushes:2,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+","+e[1]+"="+t[0]+";"+r}},t[e.DUP2]={hasBranch:!1,pops:2,pushes:4,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+","+e[1]+"="+t[0]+","+e[2]+"="+t[1]+","+e[3]+"="+t[0]+";"+r}},t[e.DUP_X1]={hasBranch:!1,pops:2,pushes:3,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+","+e[1]+"="+t[1]+","+e[2]+"="+t[0]+";"+r}},t[e.DUP_X2]={hasBranch:!1,pops:3,pushes:4,emit:function(t,e,n,r){return"var "+e[0]+"="+t[0]+","+e[1]+"="+t[2]+","+e[2]+"="+t[1]+","+e[3]+"="+t[0]+";"+r}},t[e.DUP2_X1]={hasBranch:!1,pops:3,pushes:5,emit:function(t,e,n,r){return"var "+e[0]+"="+t[1]+","+e[1]+"="+t[0]+","+e[2]+"="+t[2]+","+e[3]+"="+t[1]+","+e[4]+"="+t[0]+";"+r}},t[e.NEW_FAST]={hasBranch:!1,pops:0,pushes:1,emit:function(t,e,n,r,a,o){var s=a.readUInt16BE(o+1);return"var cr"+n+"=f.method.cls.constantPool.get("+s+"),"+e[0]+"=(new cr"+n+".clsConstructor(t));"+r}},t[e.NEWARRAY]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,a,s,i,l){var u=s.readUInt8(i+1),c="["+o.ArrayTypes[u],p=r(l,i);return"\nvar cls"+n+"=f.getLoader().getInitializedClass(t,'"+c+"');\nif("+t[0]+">=0){var "+e[0]+"=new (cls"+n+".getConstructor(t))(t,"+t[0]+");"+a+"\n}else{"+p+"u.throwException(t,f,'Ljava/lang/NegativeArraySizeException;','Tried to init "+c+" array with length '+"+t[0]+");}"}},t[e.ANEWARRAY_FAST]={hasBranch:!1,pops:1,pushes:1,emit:function(t,e,n,a,s,i,l){var u=s.readUInt16BE(i+1),c=("["+o.ArrayTypes[u],r(l,i));return"\nvar cr"+n+"=f.method.cls.constantPool.get("+u+");\nif("+t[0]+">=0){var "+e[0]+"=new cr"+n+".arrayClassConstructor(t,"+t[0]+");"+a+"\n}else{"+c+"u.throwException(t,f,'Ljava/lang/NegativeArraySizeException;','Tried to init '+cr"+n+".arrayClass.getInternalName()+' array with length '+"+t[0]+");}"}},t[e.NOP]={hasBranch:!1,pops:0,pushes:0,emit:function(t,e,n,r){return""+r}},t[e.POP]={hasBranch:!1,pops:1,pushes:0,emit:function(t,e,n,r){return""+r}},t[e.POP2]={hasBranch:!1,pops:2,pushes:0,emit:function(t,e,n,r){return""+r}},t}()},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},a=n(21),o=n(24),s=n(26),i=n(9),l=n(7),u=n(16),c=(n(13),u.debug,function(){function t(){this.locks={}}return t.prototype.tryLock=function(t,e,n){return void 0===this.locks[t]&&(this.locks[t]=new o),this.locks[t].tryLock(e,n)},t.prototype.unlock=function(t,e){this.locks[t].unlock(e),delete this.locks[t]},t.prototype.getOwner=function(t){return this.locks[t]?this.locks[t].getOwner():null},t}()),p=function(){function t(t){this.bootstrap=t,this.loadedClasses={},this.loadClassLocks=new c}return t.prototype.getLoadedClassNames=function(){return Object.keys(this.loadedClasses)},t.prototype.addClass=function(t,e){this.loadedClasses[t]=e},t.prototype.getClass=function(t){return this.loadedClasses[t]},t.prototype.defineClass=function(t,e,n,r){try{var o=new a.ReferenceClassData(n,r,this);return this.addClass(e,o),o}catch(o){return null===t?(u.error("JVM initialization failed: "+o),u.error(o.stack)):t.throwNewException("Ljava/lang/ClassFormatError;",o),null}},t.prototype.defineArrayClass=function(t){var e=new a.ArrayClassData(l.get_component_type(t),this);return this.addClass(t,e),e},t.prototype.getLoadedClass=function(t){var e=this.loadedClasses[t];if(null!=e)return e;if(l.is_primitive_type(t))return this.bootstrap.getPrimitiveClass(t);if(l.is_array_type(t)){var n=this.getLoadedClass(l.get_component_type(t));if(null!=n){var r=n.getLoader();return r===this?this.defineArrayClass(t):(e=r.getLoadedClass(t),this.addClass(t,e),e)}}return null},t.prototype.getResolvedClass=function(t){var e=this.getLoadedClass(t);return null!==e&&(e.isResolved()||e.tryToResolve())?e:null},t.prototype.getInitializedClass=function(t,e){var n=this.getLoadedClass(e);return null!==n?n.isInitialized(t)||n.tryToInitialize()?n:null:n},t.prototype.loadClass=function(t,e,n,r){var a=this;void 0===r&&(r=!0);var o=this.getLoadedClass(e);o?setImmediate(function(){n(o)}):this.loadClassLocks.tryLock(e,t,n)&&(l.is_reference_type(e)?this._loadClass(t,e,function(t){a.loadClassLocks.unlock(e,t)},r):this.loadClass(t,l.get_component_type(e),function(t){null!=t&&a.loadClassLocks.unlock(e,a.getLoadedClass(e))},r))},t.prototype.resolveClasses=function(t,e,n){var r=this,a={};l.asyncForEach(e,function(e,n){r.resolveClass(t,e,function(t){null===t?n("Error resolving class: "+e):(a[e]=t,n())})},function(t){n(t?null:a)})},t.prototype.resolveClass=function(t,e,n,r){void 0===r&&(r=!0),this.loadClass(t,e,function(e){null===e||e.isResolved()?setImmediate(function(){n(e)}):e.resolve(t,n,r)},r)},t.prototype.initializeClass=function(t,e,n,r){void 0===r&&(r=!0),this.resolveClass(t,e,function(e){null===e||e.isInitialized(t)?setImmediate(function(){n(e)}):e.initialize(t,n,r)},r)},t.prototype.throwClassNotFoundException=function(t,e,n){t.throwNewException(n?"Ljava/lang/ClassNotFoundException;":"Ljava/lang/NoClassDefFoundError;","Cannot load class: "+l.ext_classname(e))},t}();e.ClassLoader=p;var h=function(t){function e(e,n,r){var a=this;t.call(this,null),this.bootstrap=this,this.classpath=null,this.loadedPackages={},s.ClasspathFactory(e,n,function(t){a.classpath=t.reverse(),r()})}return r(e,t),e.prototype._registerLoadedClass=function(t,e){var n=t.slice(0,t.lastIndexOf("/")),r=this.loadedPackages[n];r?r[0]!==e&&r.indexOf(e)===-1&&r.push(e):this.loadedPackages[n]=[e]},e.prototype.getPackages=function(){var t=this;return Object.keys(this.loadedPackages).map(function(e){return[e,t.loadedPackages[e].map(function(t){return t.getPath()})]})},e.prototype.getPrimitiveClass=function(t){var e=this.getClass(t);return null==e&&(e=new a.PrimitiveClassData(t,this),this.addClass(t,e)),e},e.prototype._loadClass=function(t,e,n,r){var a=this;void 0===r&&(r=!0);var o,s=l.descriptor2typestr(e),u=this.classpath.length,c=[];t:for(var p=0;p<u;p++){var h=this.classpath[p];switch(h.hasClass(s)){case i.TriState.INDETERMINATE:c.push(h);break;case i.TriState.TRUE:c.push(h);break t}}l.asyncFind(c,function(t,e){t.loadClass(s,function(t,n){t?e(!1):(o=n,e(!0))})},function(i){if(i){var l=a.defineClass(t,e,o,null);null!==l&&a._registerLoadedClass(s,i),n(l)}else a.throwClassNotFoundException(t,e,r),n(null)})},e.prototype.getLoadedClassFiles=function(){var t=this.getLoadedClassNames();return t.filter(function(t){return l.is_reference_type(t)})},e.prototype.getLoaderObject=function(){return null},e.prototype.getClassPath=function(){for(var t=this.classpath.length,e=Array(t),n=0;n<t;n++)e[n]=this.classpath[t-n-1].getPath();return e},e.prototype.getClassPathItems=function(){return this.classpath.slice(0)},e}(p);e.BootstrapClassLoader=h;var f=function(t){function e(e,n){t.call(this,e),this.loaderObj=n}return r(e,t),e.prototype._loadClass=function(t,e,n,r){var a=this;void 0===r&&(r=!0),this.loaderObj["loadClass(Ljava/lang/String;)Ljava/lang/Class;"](t,[l.initString(this.bootstrap,l.ext_classname(e))],function(o,s){if(o)a.throwClassNotFoundException(t,e,r),n(null);else{var i=s.$cls;a.addClass(e,i),n(i)}})},e.prototype.getLoaderObject=function(){return this.loaderObj},e}(p);e.CustomClassLoader=f},function(t,e,n){"use strict";function r(){return m++}function a(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},s=n(7),i=n(22),l=n(23),u=n(12),c=n(14),p=n(16),h=n(11),f=n(9),d=n(24),g=(n(13),n(8)),v=n(17),_=f.ClassState,m=(p.trace,p.debug,n(18),1),T={"Ljava/lang/invoke/MemberName;":{vmtarget:["(thread: JVMThread, descriptor: string, args: any[], cb?: (e?: JVMTypes.java_lang_Throwable, rv?: any) => void) => void","null"],vmindex:["number","-1"]},"Ljava/lang/Object;":{ref:["number","getRef()"],$monitor:["Monitor","null"]},"Ljava/net/PlainSocketImpl;":{$is_shutdown:["boolean","false"],$ws:["Interfaces.IWebsock","null"]},"Ljava/lang/Class;":{$cls:["ClassData","null"],signers:["JVMTypes.java_lang_Object[]","null"]},"Ljava/lang/ClassLoader;":{$loader:["ClassLoader","new ClassLoader.CustomClassLoader(thread.getBsCl(), this);"]},"Ljava/lang/Thread;":{$thread:["JVMThread","thread ? new thread.constructor(thread.getJVM(), thread.getThreadPool(), this) : null"]}},y={"Ljava/lang/Object;":{getClass:["(): ClassData","function() { return this.constructor.cls }"],getMonitor:["(): Monitor","function() {\n  if (this.$monitor === null) {\n    this.$monitor = new Monitor();\n  }\n  return this.$monitor;\n}"]},"Ljava/lang/String;":{toString:["(): string","function() { return util.chars2jsStr(this['java/lang/String/value']); }"]},"Ljava/lang/Byte;":{unbox:["(): number","function() { return this['java/lang/Byte/value']; }"]},"Ljava/lang/Character;":{unbox:["(): number","function() { return this['java/lang/Character/value']; }"]},"Ljava/lang/Double;":{unbox:["(): number","function() { return this['java/lang/Double/value']; }"]},"Ljava/lang/Float;":{unbox:["(): number","function() { return this['java/lang/Float/value']; }"]},"Ljava/lang/Integer;":{unbox:["(): number","function() { return this['java/lang/Integer/value']; }"]},"Ljava/lang/Long;":{unbox:["(): Long","function() { return this['java/lang/Long/value']; }"]},"Ljava/lang/Short;":{unbox:["(): number","function() { return this['java/lang/Short/value']; }"]},"Ljava/lang/Boolean;":{unbox:["(): number","function() { return this['java/lang/Boolean/value']; }"]},"Ljava/lang/Void;":{unbox:["(): number",'function() { throw new Error("Cannot unbox a Void type."); }']},"Ljava/lang/invoke/MethodType;":{toString:["(): string",'function() { return "(" + this[\'java/lang/invoke/MethodType/ptypes\'].array.map(function (type) { return type.$cls.getInternalName(); }).join("") + ")" + this[\'java/lang/invoke/MethodType/rtype\'].$cls.getInternalName(); }']}},I={"Ljava/lang/Byte;":{box:["(val: number): java_lang_Byte","function(val) { var rv = new this(null); rv['java/lang/Byte/value'] = val; return rv; }"]},"Ljava/lang/Character;":{box:["(val: number): java_lang_Character","function(val) { var rv = new this(null); rv['java/lang/Character/value'] = val; return rv; }"]},"Ljava/lang/Double;":{box:["(val: number): java_lang_Double","function(val) { var rv = new this(null); rv['java/lang/Double/value'] = val; return rv; }"]},"Ljava/lang/Float;":{box:["(val: number): java_lang_Float","function(val) { var rv = new this(null); rv['java/lang/Float/value'] = val; return rv; }"]},"Ljava/lang/Integer;":{box:["(val: number): java_lang_Integer","function(val) { var rv = new this(null); rv['java/lang/Integer/value'] = val; return rv; }"]},"Ljava/lang/Long;":{box:["(val: Long): java_lang_Long","function(val) { var rv = new this(null); rv['java/lang/Long/value'] = val; return rv; }"]},"Ljava/lang/Short;":{box:["(val: number): java_lang_Short","function(val) { var rv = new this(null); rv['java/lang/Short/value'] = val; return rv; }"]},"Ljava/lang/Boolean;":{box:["(val: number): java_lang_Boolean","function(val) { var rv = new this(null); rv['java/lang/Boolean/value'] = val; return rv; }"]},"Ljava/lang/Void;":{box:["(): java_lang_Void","function() { return new this(null); }"]}},E=function(){function t(t){this.accessFlags=null,this.state=f.ClassState.LOADED,this.jco=null,this.superClass=null,this.loader=t}return t.prototype.getExternalName=function(){return s.ext_classname(this.className)},t.prototype.getInternalName=function(){return this.className},t.prototype.getPackageName=function(){var t,e=this.getExternalName();for(t=e.length-1;t>=0&&"."!==e[t];t--);return t>=0?e.slice(0,t):""},t.prototype.getLoader=function(){return this.loader},t.prototype.getSuperClass=function(){return this.superClass},t.prototype.getInterfaces=function(){return[]},t.prototype.getInjectedFields=function(){var t={};if(void 0!==T[this.getInternalName()]){var e=T[this.getInternalName()];Object.keys(e).forEach(function(n){t[n]=e[n][0]})}return t},t.prototype.getInjectedMethods=function(){var t={},e=this.getInternalName();if("["===e[0]&&(e="["),void 0!==y[e]){var n=y[e];Object.keys(n).forEach(function(e){t[e]=n[e][0]})}return t},t.prototype.getInjectedStaticMethods=function(){var t={},e=this.getInternalName();if("["===e[0]&&(e="["),void 0!==I[e]){var n=I[e];Object.keys(n).forEach(function(e){t[e]=n[e][0]})}return t},t.prototype.getClassObject=function(t){return null===this.jco&&(this.jco=new(t.getBsCl().getResolvedClass("Ljava/lang/Class;").getConstructor(t))(t),this.jco.$cls=this,this.jco["java/lang/Class/classLoader"]=this.getLoader().getLoaderObject()),this.jco},t.prototype.getProtectionDomain=function(){return null},t.prototype.getMethod=function(t){return null},t.prototype.getMethods=function(){return[]},t.prototype.getFields=function(){return[]},t.prototype.setState=function(t){this.state=t},t.prototype.getState=function(){if(this.state===_.RESOLVED&&null===this.getMethod("<clinit>()V")){var t=this.getSuperClass();null!==t&&t.getState()===_.INITIALIZED&&(this.state=_.INITIALIZED)}return this.state},t.prototype.isInitialized=function(t){return this.getState()===_.INITIALIZED},t.prototype.isResolved=function(){return this.getState()!==_.LOADED},t.prototype.isSubinterface=function(t){return!1},t.prototype.isSubclass=function(t){return this===t||null!==this.getSuperClass()&&this.getSuperClass().isSubclass(t)},t.prototype.resolve=function(t,e,n){throw void 0===n&&(n=!0),Error("Unimplemented.")},t.prototype.initialize=function(t,e,n){throw void 0===n&&(n=!0),Error("Unimplemented.")},t.prototype.outputInjectedMethods=function(t,e){var n=this.getInternalName();if("["===n[0]&&(n="["),void 0!==y[n]){var r=y[n];Object.keys(r).forEach(function(n){e.write("  "+t+".prototype."+n+" = "+r[n][1]+";\n")})}if(void 0!==I[n]){var a=I[n];Object.keys(a).forEach(function(n){e.write("  "+t+"."+n+" = "+a[n][1]+";\n")})}},t}();e.ClassData=E;var A=function(t){function e(e,n){t.call(this,n),this.className=e,this.accessFlags=new s.Flags(1041),this.setState(_.INITIALIZED)}return o(e,t),e.prototype.isCastable=function(t){return this.className===t.getInternalName()},e.prototype.boxClassName=function(){return s.boxClassName(this.className)},e.prototype.createWrapperObject=function(t,e){var n=this.boxClassName(),r=t.getBsCl().getInitializedClass(t,n),a=r.getConstructor(t),o=new a(t);return"V"!==n&&(o[s.descriptor2typestr(n)+"/value"]=e),o},e.prototype.tryToResolve=function(){return!0},e.prototype.tryToInitialize=function(){return!0},e.prototype.resolve=function(t,e,n){var r=this;void 0===n&&(n=!0),setImmediate(function(){return e(r)})},e}(E);e.PrimitiveClassData=A;var S=function(t){function e(e,n){t.call(this,n),this._constructor=null,this.className="["+e,this.accessFlags=new s.Flags(1041),this.componentClassName=e}return o(e,t),e.prototype.methodLookup=function(t){return this.superClass.methodLookup(t)},e.prototype.fieldLookup=function(t){return this.superClass.fieldLookup(t)},e.prototype.resolve=function(t,e,n){var r=this;return void 0===n&&(n=!0),this.isResolved()?void setImmediate(function(){return e(r)}):void s.asyncForEach(["Ljava/lang/Object;",this.componentClassName],function(e,n){r.loader.resolveClass(t,e,function(t){null!==t?n():n("Failed.")})},function(t){t?e(null):(r.setResolved(r.loader.getResolvedClass("Ljava/lang/Object;"),r.loader.getResolvedClass(r.componentClassName)),e(r))})},e.prototype.getComponentClass=function(){return this.componentClass},e.prototype.setResolved=function(t,e){this.superClass=t,this.componentClass=e,this.setState(_.INITIALIZED)},e.prototype.tryToResolve=function(){var t=this.loader,e=t.getResolvedClass("Ljava/lang/Object;"),n=t.getResolvedClass(this.componentClassName);return null!==e&&null!==n&&(this.setResolved(e,n),!0)},e.prototype.tryToInitialize=function(){return this.tryToResolve()},e.prototype.isCastable=function(t){if(!(t instanceof e)){if(t instanceof A)return!1;if(t.accessFlags.isInterface()){var n=t.getInternalName();return"Ljava/lang/Cloneable;"===n||"Ljava/io/Serializable;"===n}return"Ljava/lang/Object;"===t.getInternalName()}return this.getComponentClass().isCastable(t.getComponentClass())},e.prototype.initialize=function(t,e,n){void 0===n&&(n=!0),this.resolve(t,e,n)},e.prototype.getJSArrayConstructor=function(){if(!s.typedArraysSupported)return"Array";switch(this.componentClassName){case"B":return"Int8Array";case"C":return"Uint16Array";case"S":return"Int16Array";case"I":return"Int32Array";case"F":return"Float32Array";case"D":return"Float64Array";default:return"Array"}},e.prototype.getJSDefaultArrayElement=function(){switch(this.componentClassName[0]){case"[":return"new (cls.getComponentClass().getConstructor())(thread, otherLengths)";case"L":return"null";case"J":return"gLongZero";default:return"0"}},e.prototype._getSliceMethod=function(){var t=new v,e=this.getJSArrayConstructor();if(t.write("function(start, end) {\n    var newObj = new this.constructor(null, 0);\n"),"Array"===e)t.write("    newObj.array = this.array.slice(start, end);\n");else{var n;switch(e){case"Int8Array":n=1;break;case"Int16Array":case"Uint16Array":n=2;break;case"Int32Array":case"Float32Array":n=4;break;case"Float64Array":n=8}t.write("    if (end === undefined) end = this.array.length;\n      "+(n>1?"start *= "+n+";\nend *= "+n+";":"")+"\n      newObj.array = new "+e+"(this.array.buffer.slice(start, end));\n")}return t.write("    return newObj;\n  }"),t.flush()},e.prototype._constructConstructor=function(t){var e=new v,n=s.jvmName2JSName(this.getInternalName());e.write("extendClass("+n+", superCls.getConstructor(thread));\n  function "+n+"(thread, lengths) {\n"),this.superClass.outputInjectedFields(e),"["!==this.componentClassName[0]?(e.write("    this.array = new "+this.getJSArrayConstructor()+"(lengths);\n"),"Array"===this.getJSArrayConstructor()&&e.write("    for (var i = 0; i < lengths; i++) {\n      this.array[i] = "+this.getJSDefaultArrayElement()+";\n    }\n")):e.write("    if (typeof lengths === 'number') {\n        this.array = new "+this.getJSArrayConstructor()+"(lengths);\n        for (var i = 0; i < length; i++) {\n          this.array[i] = null;\n        }\n      } else {\n        var length = lengths[0], otherLengths = lengths.length > 2 ? lengths.slice(1) : lengths[1];\n        this.array = new "+this.getJSArrayConstructor()+"(length);\n        for (var i = 0; i < length; i++) {\n          this.array[i] = "+this.getJSDefaultArrayElement()+";\n        }\n      }\n"),e.write("  }\n\n  "+n+".prototype.slice = "+this._getSliceMethod()+";\n  "+n+".cls = cls;\n"),this.outputInjectedMethods(n,e),e.write("\n  return "+n+";");var o=Function("extendClass","cls","superCls","gLongZero","thread","getRef","util",e.flush());return o(a,this,this.superClass,g.ZERO,t,r,s)},e.prototype.getConstructor=function(t){return null===this._constructor&&(this._constructor=this._constructConstructor(t)),this._constructor},e}(E);e.ArrayClassData=S;var C=function(t){function e(e,n,r,a){t.call(this,r),this.interfaceClasses=null,this.superClassRef=null,this.initLock=new d,this._constructor=null,this._fieldLookup={},this._objectFields=[],this._staticFields=[],this._methodLookup={},this._vmTable=[],this._uninheritedDefaultMethods=[],this._protectionDomain=n?n:null;var o=new i(e),c=0;if(3405691582!==o.getUint32())throw Error("Magic number invalid");if(this.minorVersion=o.getUint16(),this.majorVersion=o.getUint16(),!(45<=this.majorVersion&&this.majorVersion<=52))throw Error("Major version invalid");this.constantPool=new l.ConstantPool,this.constantPool.parse(o,a),this.accessFlags=new s.Flags(o.getUint16()),this.className=this.constantPool.get(o.getUint16()).name;var p=o.getUint16();0!==p&&(this.superClassRef=this.constantPool.get(p));var f=o.getUint16();for(this.interfaceRefs=Array(f),c=0;c<f;++c)this.interfaceRefs[c]=this.constantPool.get(o.getUint16());var g=o.getUint16();for(this.fields=Array(g),c=0;c<g;++c)this.fields[c]=new h.Field(this,this.constantPool,c,o);var v=o.getUint16();for(this.methods=Array(v),c=0;c<v;c++){var _=new h.Method(this,this.constantPool,c,o);this.methods[c]=_}if(this.attrs=u.makeAttributes(o,this.constantPool),o.hasBytes())throw"Leftover bytes in classfile: "+o}return o(e,t),e.prototype.getSuperClassReference=function(){return this.superClassRef},e.prototype.getInterfaceClassReferences=function(){return this.interfaceRefs.slice(0)},e.prototype.getInterfaces=function(){return this.interfaceClasses},e.prototype.getFields=function(){return this.fields},e.prototype.getVMTable=function(){return this._vmTable},e.prototype.getVMIndexForMethod=function(t){return this._vmTable.indexOf(this.methodLookup(t.signature))},e.prototype.getMethodFromVMIndex=function(t){return void 0!==this._vmTable[t]?this._vmTable[t]:null},e.prototype.getVMIndexForField=function(t){return t.accessFlags.isStatic()?this._staticFields.indexOf(t):this._objectFields.indexOf(t)},e.prototype.getStaticFieldFromVMIndex=function(t){var e=this._staticFields[t];return void 0!==e?e:null},e.prototype.getObjectFieldFromVMIndex=function(t){var e=this._objectFields[t];return void 0!==e?e:null},e.prototype.getFieldFromSlot=function(t){return this.fields[t]},e.prototype.getMethodFromSlot=function(t){return this.methods[t]},e.prototype.getMethod=function(t){var e=this._methodLookup[t];return e.cls===this?e:null},e.prototype.getSpecificMethod=function(t,e){if(this.getInternalName()===t)return this.getMethod(e);var n,r=this.interfaceClasses.slice(0);this.superClass&&r.push(this.superClass);for(var a=0;a<r.length;a++)if(null!==(n=r[a].getSpecificMethod(t,e)))return n;return null},e.prototype.getMethods=function(){return this.methods},e.prototype.getUninheritedDefaultMethods=function(){return this._uninheritedDefaultMethods},e.prototype.getProtectionDomain=function(){return this._protectionDomain},e.prototype._resolveMethods=function(){var t=this;null!==this.superClass&&(this._vmTable=this._vmTable.concat(this.superClass._vmTable),Object.keys(this.superClass._methodLookup).forEach(function(e){t._methodLookup[e]=t.superClass._methodLookup[e]})),this.methods.forEach(function(e){var n=t._methodLookup[e.signature];e.accessFlags.isStatic()||"<init>"===e.name||(void 0===n?t._vmTable.push(e):t._vmTable[t._vmTable.indexOf(n)]=e),t._methodLookup[e.signature]=e}),this.interfaceClasses.forEach(function(e){Object.keys(e._methodLookup).forEach(function(n){var r=e._methodLookup[n];void 0===t._methodLookup[n]?(r.accessFlags.isStatic()||t._vmTable.push(r),t._methodLookup[n]=r):r.isDefault()&&t._uninheritedDefaultMethods.push(r)})})},e.prototype._resolveFields=function(){var t=this;null!==this.superClass&&(this._objectFields=this._objectFields.concat(this.superClass._objectFields),Object.keys(this.superClass._fieldLookup).forEach(function(e){t._fieldLookup[e]=t.superClass._fieldLookup[e]})),this.interfaceClasses.forEach(function(e){Object.keys(e._fieldLookup).forEach(function(n){var r=e._fieldLookup[n];t._fieldLookup[n]=r})}),this.fields.forEach(function(e){t._fieldLookup[e.name]=e,e.accessFlags.isStatic()?t._staticFields.push(e):t._objectFields.push(e)})},e.prototype.methodLookup=function(t){var e=this._methodLookup[t];return void 0!==e?e:null},e.prototype.signaturePolymorphicAwareMethodLookup=function(t){var e;if(null!==(e=this.methodLookup(t)))return e;if("Ljava/lang/invoke/MethodHandle;"===this.className){var n=t.slice(0,t.indexOf("("))+"([Ljava/lang/Object;)Ljava/lang/Object;",e=this._methodLookup[n];if(void 0!==e&&e.accessFlags.isNative()&&e.accessFlags.isVarArgs()&&e.cls===this)return e}else if(null!==this.superClass)return this.superClass.signaturePolymorphicAwareMethodLookup(t);return null},e.prototype.fieldLookup=function(t){var e=this._fieldLookup[t];return void 0!==e?e:null},e.prototype.getAttribute=function(t){for(var e=this.attrs,n=0;n<e.length;n++){var r=e[n];if(r.getName()===t)return r}return null},e.prototype.getAttributes=function(t){for(var e=this.attrs,n=[],r=0;r<e.length;r++){var a=e[r];a.getName()===t&&n.push(a)}return n},e.prototype.getBootstrapMethod=function(t){var e=this.getAttribute("BootstrapMethods");return e.bootstrapMethods[t]},e.prototype._getInitialStaticFieldValue=function(t,e){var n=this.fieldLookup(e);if(null!==n&&n.accessFlags.isStatic()){var r=n.getAttribute("ConstantValue");if(null===r)return s.initialValue(n.rawDescriptor);switch(r.value.getType()){case f.ConstantPoolItemType.STRING:var a=r.value;return null===a.value&&(a.value=t.getJVM().internString(a.stringValue)),a.value;default:return r.value.value}}},e.prototype.setResolved=function(t,e){this.superClass=t,this.interfaceClasses=e,this._resolveMethods(),this._resolveFields(),this.setState(_.RESOLVED)},e.prototype.tryToResolve=function(){if(this.getState()===_.LOADED){var t,e,n=this.loader,r=null!==this.superClassRef?this.interfaceRefs.concat(this.superClassRef):this.interfaceRefs,a=[];for(t=0;t<r.length;t++){if(e=r[t],!e.tryResolve(n))return!1;a.push(e.cls)}this.setResolved(null!==this.superClassRef?a.pop():null,a)}return!0},e.prototype.tryToInitialize=function(){if(this.getState()===_.INITIALIZED)return!0;if(this.getState()===_.RESOLVED||this.tryToResolve()){if(null!==this.superClass&&!this.superClass.tryToInitialize())return!1;var t=this.getMethod("<clinit>()V");return null===t&&(this.setState(_.INITIALIZED),!0)}return!1},e.prototype.isCastable=function(t){return t instanceof e&&(this.accessFlags.isInterface()?t.accessFlags.isInterface()?this.isSubinterface(t):t.accessFlags.isInterface()?void 0:"Ljava/lang/Object;"===t.getInternalName():t.accessFlags.isInterface()?this.isSubinterface(t):this.isSubclass(t))},e.prototype.isSubinterface=function(t){if(this.className===t.getInternalName())return!0;for(var e=this.getInterfaces(),n=0;n<e.length;n++){var r=e[n];if(r.isSubinterface(t))return!0}return null!=this.getSuperClass()&&this.getSuperClass().isSubinterface(t)},e.prototype.initialize=function(t,e,n){var r=this;void 0===n&&(n=!0),this.isResolved()?this.isInitialized(t)?setImmediate(function(){e(r)}):this.initLock.tryLock(t,e)&&(null!=this.superClass?this.superClass.initialize(t,function(e){null==e?r.initLock.unlock(null):r._initialize(t,function(t){r.initLock.unlock(t)})},n):this._initialize(t,function(t){r.initLock.unlock(t)})):this.resolve(t,function(a){null!==a?r.initialize(t,e,n):e(a)},n)},e.prototype._initialize=function(t,e){var n=this,r=this.getConstructor(t);void 0!==r["<clinit>()V"]?r["<clinit>()V"](t,null,function(r){r?(n.setState(f.ClassState.RESOLVED),r.getClass().isCastable(t.getBsCl().getResolvedClass("Ljava/lang/Error;"))?(t.throwException(r),e(null)):t.getBsCl().initializeClass(t,"Ljava/lang/ExceptionInInitializerError;",function(n){if(null==n)e(null);else{var a=n.getConstructor(t),o=new a(t);o["<init>(Ljava/lang/Throwable;)V"](t,[r],function(n){t.throwException(o),e(null)})}})):(n.setState(f.ClassState.INITIALIZED),e(n))}):(this.setState(f.ClassState.INITIALIZED),e(this));
},e.prototype.isInitialized=function(t){return this.getState()===_.INITIALIZED||this.initLock.getOwner()===t},e.prototype.resolve=function(t,e,n){var r=this;void 0===n&&(n=!0);var a=this.interfaceRefs.slice(0);null!==this.superClassRef&&a.push(this.superClassRef),a=a.filter(function(t){return!t.isResolved()}),s.asyncForEach(a,function(e,a){e.resolve(t,r.loader,r,function(t){t?a():a("Failed.")},n)},function(t){t?e(null):(r.setResolved(null!==r.superClassRef?r.superClassRef.cls:null,r.interfaceRefs.map(function(t){return t.cls})),e(r))})},e.prototype.getMirandaAndDefaultMethods=function(){var t=this,e=null!==this.superClass?this.superClass.getVMTable():[];return this.getVMTable().slice(e.length).filter(function(e){return e.cls!==t})},e.prototype.outputInjectedFields=function(t){null!==this.superClass&&this.superClass.outputInjectedFields(t);var e=T[this.getInternalName()];void 0!==e&&Object.keys(e).forEach(function(n){t.write("this."+n+" = "+e[n][1]+";\n")})},e.prototype._constructConstructor=function(t){var e=s.jvmName2JSName(this.getInternalName()),o=new v;o.write("if (cls.superClass !== null) {\n    extendClass("+e+", cls.superClass.getConstructor(thread));\n  }\n  function "+e+"(thread) {\n"),this.outputInjectedFields(o),this._objectFields.forEach(function(t){return t.outputJavaScriptField(e,o)}),o.write("  }\n  "+e+".cls = cls;\n"),this.outputInjectedMethods(e,o),this._staticFields.forEach(function(t){return t.outputJavaScriptField(e,o)}),this.getMethods().forEach(function(t){return t.outputJavaScriptFunction(e,o)}),this.getMirandaAndDefaultMethods().forEach(function(t){return t.outputJavaScriptFunction(e,o)}),this.getUninheritedDefaultMethods().forEach(function(t){return t.outputJavaScriptFunction(e,o,!0)}),o.write("  return "+e+";");var i=o.flush(),l=Function("extendClass","cls","InternalStackFrame","NativeStackFrame","BytecodeStackFrame","gLongZero","ClassLoader","Monitor","thread","getRef","util",i);return l(a,this,c.InternalStackFrame,c.NativeStackFrame,c.BytecodeStackFrame,g.ZERO,n(20),n(25),t,r,s)},e.prototype.getConstructor=function(t){return null==this._constructor&&(this._constructor=this._constructConstructor(t)),this._constructor},e}(E);e.ReferenceClassData=C},function(t,e,n){"use strict";var r=n(8),a=(n(13),function(){function t(t){this.buffer=t,this._index=0}return t.prototype.incIndex=function(t){var e=this._index;return this._index+=t,e},t.prototype.rewind=function(){this._index=0},t.prototype.seek=function(t){this._index=t},t.prototype.pos=function(){return this._index},t.prototype.skip=function(t){this._index+=t},t.prototype.hasBytes=function(){return this._index<this.buffer.length},t.prototype.getFloat=function(){return this.buffer.readFloatBE(this.incIndex(4))},t.prototype.getDouble=function(){return this.buffer.readDoubleBE(this.incIndex(8))},t.prototype.getUint=function(t){switch(t){case 1:return this.getUint8();case 2:return this.getUint16();case 4:return this.getUint32();default:throw Error("Invalid byte count for getUint: "+t)}},t.prototype.getInt=function(t){switch(t){case 1:return this.getInt8();case 2:return this.getInt16();case 4:return this.getInt32();default:throw Error("Invalid byte count for getUint: "+t)}},t.prototype.getUint8=function(){return this.buffer.readUInt8(this.incIndex(1))},t.prototype.getUint16=function(){return this.buffer.readUInt16BE(this.incIndex(2))},t.prototype.getUint32=function(){return this.buffer.readUInt32BE(this.incIndex(4))},t.prototype.getInt8=function(){return this.buffer.readInt8(this.incIndex(1))},t.prototype.getInt16=function(){return this.buffer.readInt16BE(this.incIndex(2))},t.prototype.getInt32=function(){return this.buffer.readInt32BE(this.incIndex(4))},t.prototype.getInt64=function(){var t=this.getUint32(),e=this.getUint32();return r.fromBits(e,t)},t.prototype.read=function(t){var e=this.buffer.slice(this._index,this._index+t);return this._index+=t,e},t.prototype.peek=function(){return this.buffer.readUInt8(this._index)},t.prototype.size=function(){return this.buffer.length-this._index},t.prototype.slice=function(e){var n=new t(this.buffer.slice(this._index,this._index+e));return this._index+=e,n},t.prototype.getBuffer=function(){return this.buffer},t}());t.exports=a},function(t,e,n){"use strict";var r=n(7),a=n(9),o=(n(13),{}),s=function(){function t(t){this.value=this.bytes2str(t)}return t.prototype.bytes2str=function(t){for(var e,n,r,a,o=0,s="";o<t.length;)r=255&t.readUInt8(o++),r<=127?a=r:r<=223?(e=t.readUInt8(o++),a=((31&r)<<6)+(63&e)):(e=t.readUInt8(o++),n=t.readUInt8(o++),a=((15&r)<<12)+((63&e)<<6)+(63&n)),s+=String.fromCharCode(a);return s},t.prototype.getType=function(){return a.ConstantPoolItemType.UTF8},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){var n=t.getUint16();return new this(t.read(n))},t.size=1,t.infoByteSize=0,t}();e.ConstUTF8=s,o[a.ConstantPoolItemType.UTF8]=s;var i=function(){function t(t){this.value=t}return t.prototype.getType=function(){return a.ConstantPoolItemType.INTEGER},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){return new this(t.getInt32())},t.size=1,t.infoByteSize=4,t}();e.ConstInt32=i,o[a.ConstantPoolItemType.INTEGER]=i;var l=function(){function t(t){this.value=t}return t.prototype.getType=function(){return a.ConstantPoolItemType.FLOAT},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){return new this(t.getFloat())},t.size=1,t.infoByteSize=4,t}();e.ConstFloat=l,o[a.ConstantPoolItemType.FLOAT]=l;var u=function(){function t(t){this.value=t}return t.prototype.getType=function(){return a.ConstantPoolItemType.LONG},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){return new this(t.getInt64())},t.size=2,t.infoByteSize=8,t}();e.ConstLong=u,o[a.ConstantPoolItemType.LONG]=u;var c=function(){function t(t){this.value=t}return t.prototype.getType=function(){return a.ConstantPoolItemType.DOUBLE},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){return new this(t.getDouble())},t.size=2,t.infoByteSize=8,t}();e.ConstDouble=c,o[a.ConstantPoolItemType.DOUBLE]=c;var p=function(){function t(t){this.cls=null,this.clsConstructor=null,this.arrayClass=null,this.arrayClassConstructor=null,this.name=t}return t.prototype.tryResolve=function(t){return null===this.cls&&(this.cls=t.getResolvedClass(this.name)),null!==this.cls},t.prototype.resolve=function(t,e,n,r,a){var o=this;if(void 0===a&&(a=!0),null!==t){var s=t.currentMethod();if(null!==s&&this.name===s.cls.getInternalName())return this.setResolved(t,t.currentMethod().cls),r(!0)}e.resolveClass(t,this.name,function(e){o.setResolved(t,e),r(null!==e)},a)},t.prototype.setResolved=function(t,e){this.cls=e,null!==e&&(this.clsConstructor=e.getConstructor(t))},t.prototype.getType=function(){return a.ConstantPoolItemType.CLASS},t.prototype.getConstant=function(t){return this.cls.getClassObject(t)},t.prototype.isResolved=function(){return null!==this.cls},t.fromBytes=function(t,e){var n=t.getUint16(),a=e.get(n);return new this(r.typestr2descriptor(a.value))},t.size=1,t.infoByteSize=2,t}();e.ClassReference=p,o[a.ConstantPoolItemType.CLASS]=p;var h=function(){function t(t,e){this.name=t,this.descriptor=e}return t.prototype.getType=function(){return a.ConstantPoolItemType.NAME_AND_TYPE},t.prototype.isResolved=function(){return!0},t.fromBytes=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=e.get(n),o=e.get(r);return new this(a.value,o.value)},t.size=1,t.infoByteSize=4,t}();e.NameAndTypeInfo=h,o[a.ConstantPoolItemType.NAME_AND_TYPE]=h;var f=function(){function t(t){this.value=null,this.stringValue=t}return t.prototype.getType=function(){return a.ConstantPoolItemType.STRING},t.prototype.resolve=function(t,e,n,r){this.value=t.getJVM().internString(this.stringValue),setImmediate(function(){return r(!0)})},t.prototype.getConstant=function(t){return this.value},t.prototype.isResolved=function(){return null!==this.value},t.fromBytes=function(t,e){var n=t.getUint16(),r=e.get(n);return new this(r.value)},t.size=1,t.infoByteSize=2,t}();e.ConstString=f,o[a.ConstantPoolItemType.STRING]=f;var d=function(){function t(t){this.methodType=null,this.descriptor=t}return t.prototype.resolve=function(t,e,n,a){var o=this;r.createMethodType(t,e,this.descriptor,function(e,n){e?(t.throwException(e),a(!1)):(o.methodType=n,a(!0))})},t.prototype.getConstant=function(t){return this.methodType},t.prototype.getType=function(){return a.ConstantPoolItemType.METHOD_TYPE},t.prototype.isResolved=function(){return null!==this.methodType},t.fromBytes=function(t,e){var n=t.getUint16(),r=e.get(n);return new this(r.value)},t.size=1,t.infoByteSize=2,t}();e.MethodType=d,o[a.ConstantPoolItemType.METHOD_TYPE]=d;var g=function(){function t(t,e){this.method=null,this.fullSignature=null,this.paramWordSize=-1,this.memberName=null,this.appendix=null,this.jsConstructor=null,this.classInfo=t,this.nameAndTypeInfo=e,this.signature=this.nameAndTypeInfo.name+this.nameAndTypeInfo.descriptor}return t.prototype.getType=function(){return a.ConstantPoolItemType.METHODREF},t.prototype.hasAccess=function(t,e,n){var a=this.method,o=e.method.cls;return a.accessFlags.isStatic()!==n?(t.throwNewException("Ljava/lang/IncompatibleClassChangeError;","Method "+a.name+" from class "+a.cls.getExternalName()+" is "+(n?"not ":"")+"static."),e.returnToThreadLoop=!0,!1):!!r.checkAccess(o,a.cls,a.accessFlags)||(t.throwNewException("Ljava/lang/IllegalAccessError;",o.getExternalName()+" cannot access "+a.cls.getExternalName()+"."+a.name),e.returnToThreadLoop=!0,!1)},t.prototype.resolveMemberName=function(t,e,n,o,s){var i=this,l=e.getBsCl().getInitializedClass(e,"Ljava/lang/invoke/MethodHandleNatives;").getConstructor(e),u=new(e.getBsCl().getInitializedClass(e,"[Ljava/lang/Object;").getConstructor(e))(e,1);r.createMethodType(e,n,this.nameAndTypeInfo.descriptor,function(t,n){t?(e.throwException(t),s(!1)):l["java/lang/invoke/MethodHandleNatives/linkMethod(Ljava/lang/Class;ILjava/lang/Class;Ljava/lang/String;Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/invoke/MemberName;"](e,[o.getClassObject(e),a.MethodHandleReferenceKind.INVOKEVIRTUAL,i.classInfo.cls.getClassObject(e),e.getJVM().internString(i.nameAndTypeInfo.name),n,u],function(t,n){null!==t?(e.throwException(t),s(!1)):(i.appendix=u.array[0],i.memberName=n,s(!0))})})},t.prototype.resolve=function(t,e,n,a,o){var s=this;if(void 0===o&&(o=!0),this.classInfo.isResolved()){var i=this.classInfo.cls,l=i.methodLookup(this.signature);if(null===l&&r.is_reference_type(i.getInternalName())&&(l=i.signaturePolymorphicAwareMethodLookup(this.signature),null!==l&&("invoke"===l.name||"invokeExact"===l.name)))return this.resolveMemberName(l,t,e,n,function(e){e===!0?s.setResolved(t,l):t.throwNewException("Ljava/lang/NoSuchMethodError;","Method "+s.signature+" does not exist in class "+s.classInfo.cls.getExternalName()+"."),a(e)});null!==l?(this.setResolved(t,l),a(!0)):(t.throwNewException("Ljava/lang/NoSuchMethodError;","Method "+this.signature+" does not exist in class "+this.classInfo.cls.getExternalName()+"."),a(!1))}else this.classInfo.resolve(t,e,n,function(r){r?s.resolve(t,e,n,a,o):a(!1)},o)},t.prototype.setResolved=function(t,e){this.method=e,this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor),this.fullSignature=this.method.fullSignature,this.jsConstructor=this.method.cls.getConstructor(t)},t.prototype.isResolved=function(){return null!==this.method},t.prototype.getParamWordSize=function(){return this.paramWordSize===-1&&(this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor)),this.paramWordSize},t.fromBytes=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=e.get(n),o=e.get(r);return new this(a,o)},t.size=1,t.infoByteSize=4,t}();e.MethodReference=g,o[a.ConstantPoolItemType.METHODREF]=g;var v=function(){function t(t,e){this.fullSignature=null,this.method=null,this.paramWordSize=-1,this.jsConstructor=null,this.classInfo=t,this.nameAndTypeInfo=e,this.signature=this.nameAndTypeInfo.name+this.nameAndTypeInfo.descriptor}return t.prototype.getType=function(){return a.ConstantPoolItemType.INTERFACE_METHODREF},t.prototype.hasAccess=function(t,e,n){var a=this.method,o=e.method.cls;return a.accessFlags.isStatic()!==n?(t.throwNewException("Ljava/lang/IncompatibleClassChangeError;","Method "+a.name+" from class "+a.cls.getExternalName()+" is "+(n?"not ":"")+"static."),e.returnToThreadLoop=!0,!1):!!r.checkAccess(o,a.cls,a.accessFlags)||(t.throwNewException("Ljava/lang/IllegalAccessError;",o.getExternalName()+" cannot access "+a.cls.getExternalName()+"."+a.name),e.returnToThreadLoop=!0,!1)},t.prototype.resolve=function(t,e,n,a,o){var s=this;if(void 0===o&&(o=!0),this.classInfo.isResolved()){var i=this.classInfo.cls,l=i.methodLookup(this.signature);this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor),null!==l?(this.setResolved(t,l),a(!0)):(t.throwNewException("Ljava/lang/NoSuchMethodError;","Method "+this.signature+" does not exist in class "+this.classInfo.cls.getExternalName()+"."),a(!1))}else this.classInfo.resolve(t,e,n,function(r){r?s.resolve(t,e,n,a,o):a(!1)},o)},t.prototype.setResolved=function(t,e){this.method=e,this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor),this.fullSignature=this.method.fullSignature,this.jsConstructor=this.method.cls.getConstructor(t)},t.prototype.getParamWordSize=function(){return this.paramWordSize===-1&&(this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor)),this.paramWordSize},t.prototype.isResolved=function(){return null!==this.method},t.fromBytes=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=e.get(n),o=e.get(r);return new this(a,o)},t.size=1,t.infoByteSize=4,t}();e.InterfaceMethodReference=v,o[a.ConstantPoolItemType.INTERFACE_METHODREF]=v;var _=function(){function t(t,e){this.field=null,this.fullFieldName=null,this.fieldOwnerConstructor=null,this.classInfo=t,this.nameAndTypeInfo=e}return t.prototype.getType=function(){return a.ConstantPoolItemType.FIELDREF},t.prototype.hasAccess=function(t,e,n){var a=this.field,o=e.method.cls;return a.accessFlags.isStatic()!==n?(t.throwNewException("Ljava/lang/IncompatibleClassChangeError;","Field "+name+" from class "+a.cls.getExternalName()+" is "+(n?"not ":"")+"static."),e.returnToThreadLoop=!0,!1):!!r.checkAccess(o,a.cls,a.accessFlags)||(t.throwNewException("Ljava/lang/IllegalAccessError;",o.getExternalName()+" cannot access "+a.cls.getExternalName()+"."+name),e.returnToThreadLoop=!0,!1)},t.prototype.resolve=function(t,e,n,a,o){var s=this;if(void 0===o&&(o=!0),this.classInfo.isResolved()){var i=this.classInfo.cls,l=i.fieldLookup(this.nameAndTypeInfo.name);null!==l?(this.fullFieldName=r.descriptor2typestr(l.cls.getInternalName())+"/"+l.name,this.field=l,a(!0)):(t.throwNewException("Ljava/lang/NoSuchFieldError;","Field "+this.nameAndTypeInfo.name+" does not exist in class "+this.classInfo.cls.getExternalName()+"."),a(!1))}else this.classInfo.resolve(t,e,n,function(r){r?s.resolve(t,e,n,a,o):a(!1)},o)},t.prototype.isResolved=function(){return null!==this.field},t.fromBytes=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=e.get(n),o=e.get(r);return new this(a,o)},t.size=1,t.infoByteSize=4,t}();e.FieldReference=_,o[a.ConstantPoolItemType.FIELDREF]=_;var m=function(){function t(t,e){this.callSiteObjects={},this.methodType=null,this.bootstrapMethodAttrIndex=t,this.nameAndTypeInfo=e,this.paramWordSize=r.getMethodDescriptorWordSize(this.nameAndTypeInfo.descriptor)}return t.prototype.getType=function(){return a.ConstantPoolItemType.INVOKE_DYNAMIC},t.prototype.isResolved=function(){return null!==this.methodType},t.prototype.resolve=function(t,e,n,a){var o=this;r.createMethodType(t,e,this.nameAndTypeInfo.descriptor,function(e,n){e?(t.throwException(e),a(!1)):(o.methodType=n,a(!0))})},t.prototype.getCallSiteObject=function(t){var e=this.callSiteObjects[t];return e?e:null},t.prototype.constructCallSiteObject=function(t,e,n,o,s,i){function l(){var n,r,o=c[1],s=new(t.getBsCl().getInitializedClass(t,"[Ljava/lang/Object;").getConstructor(t))(t,o.length),i=s.array;for(n=0;n<o.length;n++)switch(r=o[n],r.getType()){case a.ConstantPoolItemType.CLASS:i[n]=r.cls.getClassObject(t);break;case a.ConstantPoolItemType.METHOD_HANDLE:i[n]=r.methodHandle;break;case a.ConstantPoolItemType.METHOD_TYPE:i[n]=r.methodType;break;case a.ConstantPoolItemType.STRING:i[n]=r.value;break;case a.ConstantPoolItemType.UTF8:i[n]=t.getJVM().internString(r.value);break;case a.ConstantPoolItemType.INTEGER:i[n]=e.getInitializedClass(t,"I").createWrapperObject(t,r.value);break;case a.ConstantPoolItemType.LONG:i[n]=e.getInitializedClass(t,"J").createWrapperObject(t,r.value);break;case a.ConstantPoolItemType.FLOAT:i[n]=e.getInitializedClass(t,"F").createWrapperObject(t,r.value);break;case a.ConstantPoolItemType.DOUBLE:i[n]=e.getInitializedClass(t,"D").createWrapperObject(t,r.value)}return s}var u=this;void 0===i&&(i=!0);var c=n.getBootstrapMethod(this.bootstrapMethodAttrIndex),p=c[1].concat(c[0],this).filter(function(t){return!t.isResolved()});if(p.length>0)return r.asyncForEach(p,function(r,a){r.resolve(t,e,n,function(t){t?a():a("Failed.")},i)},function(r){r?s(!1):u.constructCallSiteObject(t,e,n,o,s,i)});var h=t.getJVM().internString(this.nameAndTypeInfo.name),f=new(e.getInitializedClass(t,"[Ljava/lang/Object;").getConstructor(t))(t,1),d=l(),g=e.getInitializedClass(t,"Ljava/lang/invoke/MethodHandleNatives;").getConstructor(t);g["java/lang/invoke/MethodHandleNatives/linkCallSite(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/invoke/MemberName;"](t,[n.getClassObject(t),c[0].methodHandle,h,this.methodType,d,f],function(e,n){e?(t.throwException(e),s(!1)):(u.setResolved(o,[n,f.array[0]]),s(!0))})},t.prototype.setResolved=function(t,e){void 0===this.callSiteObjects[t]&&(this.callSiteObjects[t]=e)},t.fromBytes=function(t,e){var n=t.getUint16(),r=t.getUint16(),a=e.get(r);return new this(n,a)},t.size=1,t.infoByteSize=4,t}();e.InvokeDynamic=m,o[a.ConstantPoolItemType.INVOKE_DYNAMIC]=m;var T=function(){function t(t,e){this.methodHandle=null,this.reference=t,this.referenceType=e}return t.prototype.getType=function(){return a.ConstantPoolItemType.METHOD_HANDLE},t.prototype.isResolved=function(){return null!==this.methodHandle},t.prototype.getConstant=function(t){return this.methodHandle},t.prototype.resolve=function(t,e,n,r,a){var o=this;return this.reference.isResolved()?void this.constructMethodHandleType(t,e,function(a){if(null===a)r(!1);else{var s=e.getInitializedClass(t,"Ljava/lang/invoke/MethodHandleNatives;").getConstructor(t);s["linkMethodHandleConstant(Ljava/lang/Class;ILjava/lang/Class;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/invoke/MethodHandle;"](t,[n.getClassObject(t),o.referenceType,o.getDefiningClassObj(t),t.getJVM().internString(o.reference.nameAndTypeInfo.name),a],function(e,n){e?(t.throwException(e),r(!1)):(o.methodHandle=n,r(!0))})}}):this.reference.resolve(t,e,n,function(s){s?o.resolve(t,e,n,r,a):r(!1)},a)},t.prototype.getDefiningClassObj=function(t){return this.reference.getType()===a.ConstantPoolItemType.FIELDREF?this.reference.field.cls.getClassObject(t):this.reference.method.cls.getClassObject(t)},t.prototype.constructMethodHandleType=function(t,e,n){if(this.reference.getType()===a.ConstantPoolItemType.FIELDREF){var o=this.reference.nameAndTypeInfo.descriptor;e.resolveClass(t,o,function(e){n(null!==e?e.getClassObject(t):null)})}else r.createMethodType(t,e,this.reference.nameAndTypeInfo.descriptor,function(e,r){e?(t.throwException(e),n(null)):n(r)})},t.fromBytes=function(t,e){var n=t.getUint8(),r=t.getUint16(),a=e.get(r);return new this(a,n)},t.size=1,t.infoByteSize=3,t}();e.MethodHandle=T,o[a.ConstantPoolItemType.METHOD_HANDLE]=T;var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];!function(t){t.forEach(function(t,e){t.forEach(function(t){y[t]=e})})}([[a.ConstantPoolItemType.UTF8,a.ConstantPoolItemType.INTEGER,a.ConstantPoolItemType.FLOAT,a.ConstantPoolItemType.LONG,a.ConstantPoolItemType.DOUBLE],[a.ConstantPoolItemType.CLASS,a.ConstantPoolItemType.STRING,a.ConstantPoolItemType.NAME_AND_TYPE,a.ConstantPoolItemType.METHOD_TYPE],[a.ConstantPoolItemType.FIELDREF,a.ConstantPoolItemType.METHODREF,a.ConstantPoolItemType.INTERFACE_METHODREF,a.ConstantPoolItemType.INVOKE_DYNAMIC],[a.ConstantPoolItemType.METHOD_HANDLE]]);var I=function(){function t(){}return t.prototype.parse=function(t,e){var n=this;void 0===e&&(e=null);var r=t.getUint16(),a=[[],[],[]],s=0,i=1,l=0,u=0,c=0;for(this.constantPool=Array(r);i<r;)u=t.pos(),l=t.getUint8(),c=y[l],c>0?(a[c-1].push({offset:u,index:i}),t.skip(o[l].infoByteSize)):this.constantPool[i]=o[l].fromBytes(t,this),i+=o[l].size;return s=t.pos(),a.forEach(function(r){r.forEach(function(r){if(t.seek(r.offset),l=t.getUint8(),n.constantPool[r.index]=o[l].fromBytes(t,n),null!==e&&null!==e.array[r.index]&&void 0!==e.array[r.index]){var a=e.array[r.index];switch(a.getClass().getInternalName()){case"Ljava/lang/Integer;":n.constantPool[r.index].value=a["java/lang/Integer/value"];break;case"Ljava/lang/Long;":n.constantPool[r.index].value=a["java/lang/Long/value"];break;case"Ljava/lang/Float;":n.constantPool[r.index].value=a["java/lang/Float/value"];break;case"Ljava/lang/Double;":n.constantPool[r.index].value=a["java/lang/Double/value"];break;case"Ljava/lang/String;":n.constantPool[r.index].value=""+a;break;case"Ljava/lang/Class;":n.constantPool[r.index].name=a.$cls.getInternalName(),n.constantPool[r.index].cls=a.$cls;break;default:n.constantPool[r.index].stringValue="",n.constantPool[r.index].value=a}}})}),t.seek(s),t},t.prototype.get=function(t){return this.constantPool[t]},t.prototype.each=function(t){this.constantPool.forEach(function(e,n){void 0!==e&&t(n,e)})},t}();e.ConstantPool=I},function(t,e){"use strict";var n=function(){function t(){this.queue=[]}return t.prototype.tryLock=function(t,e){return 1===this.queue.push({thread:t,cb:e})},t.prototype.unlock=function(t){var e,n=this.queue.length;for(e=0;e<n;e++)this.queue[e].cb(t);this.queue=[]},t.prototype.getOwner=function(){return this.queue.length>0?this.queue[0].thread:null},t}();t.exports=n},function(t,e,n){"use strict";var r=n(9),a=(n(13),function(){function t(){this.owner=null,this.count=0,this.blocked={},this.waiting={}}return t.prototype.enter=function(t,e){return this.owner===t?(this.count++,!0):this.contendForLock(t,1,r.ThreadStatus.BLOCKED,e)},t.prototype.contendForLock=function(t,e,n,r){var a=this.owner;return null===a?(this.owner=t,this.count=e,!0):(this.blocked[t.getRef()]={thread:t,cb:r,count:e},t.setStatus(n,this),!1)},t.prototype.exit=function(t){var e=this.owner;return e===t?0===--this.count&&(this.owner=null,this.appointNewOwner()):t.throwNewException("Ljava/lang/IllegalMonitorStateException;","Cannot exit a monitor that you do not own."),e===t},t.prototype.appointNewOwner=function(){var t=Object.keys(this.blocked);if(t.length>0){var e=t[Math.floor(Math.random()*t.length)],n=this.blocked[e];this.unblock(n.thread,!1)}},t.prototype.wait=function(t,e,n,a){var o=this;return this.getOwner()===t?(this.waiting[t.getRef()]={thread:t,cb:e,count:this.count,isTimed:null!=n&&0!==n},this.owner=null,this.count=0,null!=n&&0!==n?(this.waiting[t.getRef()].timer=setTimeout(function(){o.unwait(t,!0)},n),t.setStatus(r.ThreadStatus.TIMED_WAITING,this)):t.setStatus(r.ThreadStatus.WAITING,this),this.appointNewOwner(),!0):(t.throwNewException("Ljava/lang/IllegalMonitorStateException;","Cannot wait on an object that you do not own."),!1)},t.prototype.unwait=function(t,e,n,a){void 0===n&&(n=!1),void 0===a&&(a=null);var o=this.waiting[t.getRef()],s=r.ThreadStatus.UNINTERRUPTABLY_BLOCKED,i=function(){t.setStatus(r.ThreadStatus.RUNNABLE),n?a():o.cb(e)};if(delete this.waiting[t.getRef()],t.getStatus()===r.ThreadStatus.TIMED_WAITING&&!e){var l=o.timer;clearTimeout(l)}this.contendForLock(t,o.count,s,i)&&i()},t.prototype.unblock=function(t,e){void 0===e&&(e=!1);var n=this.blocked[t.getRef()];null!=n&&(delete this.blocked[t.getRef()],t.setStatus(r.ThreadStatus.RUNNABLE),e||(this.owner=t,this.count=n.count,n.cb()))},t.prototype.notify=function(t){if(this.owner===t){var e=Object.keys(this.waiting);e.length>0&&this.unwait(this.waiting[e[Math.floor(Math.random()*e.length)]].thread,!1)}else t.throwNewException("Ljava/lang/IllegalMonitorStateException;","Cannot notify on a monitor that you do not own.")},t.prototype.notifyAll=function(t){if(this.owner===t){var e,n=Object.keys(this.waiting);for(e=0;e<n.length;e++)this.unwait(this.waiting[n[e]].thread,!1)}else t.throwNewException("Ljava/lang/IllegalMonitorStateException;","Cannot notifyAll on a monitor that you do not own.")},t.prototype.getOwner=function(){return this.owner},t.prototype.isWaiting=function(t){return null!=this.waiting[t.getRef()]&&!this.waiting[t.getRef()].isTimed},t.prototype.isTimedWaiting=function(t){return null!=this.waiting[t.getRef()]&&this.waiting[t.getRef()].isTimed},t.prototype.isBlocked=function(t){return null!=this.blocked[t.getRef()]},t}());t.exports=a},function(t,e,n){"use strict";function r(t){return t.replace(/\\/g,"/")}function a(t){for(var e=t.split("\n"),n={},r=null,a=0;a<e.length;a++){var o=e[a];if(o.length>0)switch(o[0]){case"%":case"@":continue;case"!":case"#":var s=o.slice(2);n[s]=r={};break;default:"/"===o[o.length-1]&&(o=o.slice(0,o.length-1));var i=o.split("/"),l=r,u=void 0;for(u=0;u<i.length-1;u++){var c=i[u],p=l[c];l=p?l[c]:l[c]={}}l[i[u]]=!0}}return n}function o(t,e,n){var r=Array(e.length),o=0;l.readFile(p.join(t,"lib","meta-index"),function(s,i){var u={};s||(u=a(""+i)),h.asyncForEach(e,function(e,n){var a=p.relative(t+"/lib",e);l.stat(e,function(t,s){var i;i=t?new T(e):s.isDirectory()?new m(e):u[a]?new _(u[a],e):new v(e),r[o++]=i,i.initialize(n)})},function(t){n(r)})})}var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(9),l=(n(13),n(27)),u=n(4),c=u.BFSRequire("path"),p=n(28),h=n(7),f=u.BFSRequire("fs"),d=u.FileSystem.ZipFS,g=function(){function t(t){this._fs=new f.FS,this._jarRead=i.TriState.INDETERMINATE,this._path=t}return t.prototype.getPath=function(){return this._path},t.prototype.loadJar=function(t){var e=this;this._jarRead!==i.TriState.TRUE?l.readFile(this._path,function(n,r){if(n)e._jarRead=i.TriState.FALSE,t(n);else try{d.computeIndex(r,function(n){try{e._fs.initialize(new d(n,c.basename(e._path))),e._jarRead=i.TriState.TRUE,t()}catch(r){e._jarRead=i.TriState.FALSE,t(r)}})}catch(a){e._jarRead=i.TriState.FALSE,t(a)}}):setImmediate(function(){return t(e._jarRead===i.TriState.TRUE?null:Error("Failed to load JAR file."))})},t.prototype.tryLoadClassSync=function(t){if(this._jarRead!==i.TriState.TRUE)return null;if(this.hasClass(t)===i.TriState.FALSE)return null;try{return this._fs.readFileSync("/"+t+".class")}catch(e){return null}},t.prototype._wrapOp=function(t,e){var n=this;switch(this._jarRead){case i.TriState.TRUE:t();break;case i.TriState.FALSE:setImmediate(function(){return e(Error("Unable to load JAR file."))});break;default:this.loadJar(function(){n._wrapOp(t,e)})}},t.prototype._wrapSyncOp=function(t){if(this._jarRead!==i.TriState.TRUE)return null;try{return t()}catch(e){return null}},t.prototype.loadClass=function(t,e){var n=this;this._wrapOp(function(){n._fs.readFile("/"+t+".class",e)},e)},t.prototype.statResource=function(t,e){var n=this;this._wrapOp(function(){n._fs.stat(t,e)},e)},t.prototype.readdir=function(t,e){var n=this;this._wrapOp(function(){n._fs.readdir(r(t),e)},e)},t.prototype.tryReaddirSync=function(t){var e=this;return this._wrapSyncOp(function(){return e._fs.readdirSync(r(t))})},t.prototype.tryStatSync=function(t){var e=this;return this._wrapSyncOp(function(){return e._fs.statSync(r(t))})},t.prototype.getFS=function(){return this._fs.getRootFS()},t}();e.AbstractClasspathJar=g;var v=function(t){function e(e){t.call(this,e),this._classList=null}return s(e,t),e.prototype.hasClass=function(t){return this._jarRead===i.TriState.FALSE?i.TriState.FALSE:this._hasClass(t)},e.prototype._hasClass=function(t){return this._classList?this._classList[t]?i.TriState.TRUE:i.TriState.FALSE:i.TriState.INDETERMINATE},e.prototype.initializeWithClasslist=function(t){this._classList={};for(var e=t.length,n=0;n<e;n++)this._classList[t[n]]=!0},e.prototype.initialize=function(t){var e=this;this.loadJar(function(n){if(n)t();else{for(var r=["/"],a=[],o=e._fs;r.length>0;){var s=r.pop();try{var i=o.statSync(s);if(i.isDirectory())for(var l=o.readdirSync(s),u=0;u<l.length;u++)r.push(c.join(s,l[u]));else".class"===c.extname(s)&&a.push(s.slice(1,s.length-6))}catch(a){}}e.initializeWithClasslist(a),t()}})},e}(g);e.UnindexedClasspathJar=v;var _=function(t){function e(e,n){t.call(this,n),this._metaIndex=e,this._metaName=c.basename(n)}return s(e,t),e.prototype.initialize=function(t){setImmediate(function(){return t()})},e.prototype.hasClass=function(t){if(this._jarRead===i.TriState.FALSE)return i.TriState.FALSE;var e=t.split("/"),n=this._metaIndex;e.pop();for(var r=0;r<e.length;r++){var a=n[e[r]];if(!a)return i.TriState.FALSE;if(a===!0)return i.TriState.INDETERMINATE;n=a}return i.TriState.FALSE},e}(g);e.IndexedClasspathJar=_;var m=function(){function t(t){this._path=t}return t.prototype.getPath=function(){return this._path},t.prototype.hasClass=function(t){return i.TriState.INDETERMINATE},t.prototype.initialize=function(t){setImmediate(t)},t.prototype.tryLoadClassSync=function(t){try{return l.readFileSync(p.resolve(this._path,t+".class"))}catch(e){return null}},t.prototype.loadClass=function(t,e){l.readFile(p.resolve(this._path,t+".class"),e)},t.prototype.statResource=function(t,e){l.stat(p.resolve(this._path,t),e)},t.prototype.readdir=function(t,e){l.readdir(p.resolve(this._path,t),e)},t.prototype.tryReaddirSync=function(t){try{return l.readdirSync(p.resolve(this._path,t))}catch(e){return null}},t.prototype.tryStatSync=function(t){try{return l.statSync(p.resolve(this._path,t))}catch(e){return null}},t}();e.ClasspathFolder=m;var T=function(){function t(t){this._path=t}return t.prototype.getPath=function(){return this._path},t.prototype.hasClass=function(t){return i.TriState.FALSE},t.prototype.initialize=function(t){setImmediate(t)},t.prototype.initializeWithClasslist=function(t){},t.prototype.tryLoadClassSync=function(t){return null},t.prototype._notFoundError=function(t){setImmediate(function(){return t(Error("Class cannot be found."))})},t.prototype.loadClass=function(t,e){this._notFoundError(e)},t.prototype.statResource=function(t,e){this._notFoundError(e)},t.prototype.readdir=function(t,e){this._notFoundError(e)},t.prototype.tryReaddirSync=function(t){return null},t.prototype.tryStatSync=function(t){return null},t}();e.ClasspathNotFound=T,e.ClasspathFactory=o},function(t,e,n){var r=n(4);t.exports=r.BFSRequire("fs")},function(t,e,n){var r=n(4);t.exports=r.BFSRequire("path")},function(t,e,n){var r=n(4);t.exports=r.BFSRequire("buffer")},function(t,e,n){(function(e){"use strict";var n=function(){function t(n){this.size=n,this._sizeMap={},this._buffer=new e(n),this._remaining=n,this._offset=0,this._freeLists=Array(t._numSizeClasses);for(var r=0;r<t._numSizeClasses;r++)this._freeLists[r]=[]}return t.prototype.malloc=function(e){if(e<=4&&(e=4),this._remaining<e)throw"out of memory";var n,r;return r=t.size_to_class(e),n=this._freeLists[r].pop(),void 0===n&&(n=this.refill(r)),n},t.prototype.free=function(e){var n=e&~(t._chunkSize-1),r=this._sizeMap[n];this._freeLists[r].push(e)},t.prototype.store_word=function(t,e){this._buffer.writeInt32LE(e,t)},t.prototype.get_byte=function(t){return this._buffer.readUInt8(t)},t.prototype.get_word=function(t){return this._buffer.readInt32LE(t)},t.prototype.get_buffer=function(t,e){
return this._buffer.slice(t,t+e)},t.prototype.get_signed_byte=function(t){return this._buffer.readInt8(t)},t.prototype.set_byte=function(t,e){this._buffer.writeUInt8(e,t)},t.prototype.set_signed_byte=function(t,e){this._buffer.writeInt8(e,t)},t.prototype.memcpy=function(t,e,n){this._buffer.copy(this._buffer,e,t,t+n)},t.prototype.refill=function(e){var n=this.cl_to_size(e),r=Math.floor(t._chunkSize/n);r<1&&(r=1);var a=this._offset;this._sizeMap[a]=e;for(var o=0;o<r;o++)this._remaining-=n,a=this._offset,this._freeLists[e].push(a),this._offset+=n;return a},t.ilog2=function(t){for(var e=0,n=1;n<t;)n<<=1,e++;return e},t.size_to_class=function(e){return t.ilog2(e)},t.prototype.cl_to_size=function(t){return 1<<t},t._numSizeClasses=64,t._chunkSize=4096,t}();t.exports=n}).call(e,n(6))},function(t,e,n){"use strict";var r=n(9),a=(n(13),function(){function t(){this._parkCounts={},this._parkCallbacks={}}return t.prototype.park=function(t,e){var n=t.getRef();this._parkCallbacks[n]=e,this._mutateParkCount(t,1),this.isParked(t)&&t.setStatus(r.ThreadStatus.PARKED)},t.prototype.unpark=function(t){this._mutateParkCount(t,-1)},t.prototype.completelyUnpark=function(t){var e=t.getRef(),n=this._parkCounts[e];n&&this._mutateParkCount(t,-n)},t.prototype._mutateParkCount=function(t,e){var n,a=t.getRef();this._parkCounts[a]||(this._parkCounts[a]=0),0===(this._parkCounts[a]+=e)&&(n=this._parkCallbacks[a],delete this._parkCounts[a],delete this._parkCallbacks[a],t.getStatus()===r.ThreadStatus.PARKED&&(t.setStatus(r.ThreadStatus.ASYNC_WAITING),n()))},t.prototype.isParked=function(t){return!!this._parkCounts[t.getRef()]},t}());t.exports=a},function(t,e,n){"use strict";function r(t){return t===a.ThreadStatus.RUNNABLE}var a=n(9),o=(n(13),function(){function t(){this._count=0,this._queue=[],this._threadScheduled=!1}return t.prototype.scheduleThread=function(t){this._queue.push(t),1===this._queue.length&&this.runThread()},t.prototype.runThread=function(){var t=this;this._threadScheduled||(this._threadScheduled=!0,setImmediate(function(){var e=t._queue;if(t._threadScheduled=!1,e.length>0){var n=t._queue[0];n.run()}}))},t.prototype.unscheduleThread=function(t){var e=this._queue,n=e[0]===t;n?(e.shift(),this._count=0,this.runThread()):e.splice(e.indexOf(t),1)},t.prototype.getRunningThread=function(){var t=this._queue;return t.length>0?t[0]:null},t.prototype.priorityChange=function(t){},t.prototype.quantumOver=function(t){this._count++,(this._count>=t.getPriority()||t.getStatus()!==a.ThreadStatus.RUNNABLE)&&(this._count=0,this._queue.push(this._queue.shift())),this.runThread()},t}()),s=function(){function t(t){this.threads=[],this.scheduler=new o,this.emptyCallback=t}return t.prototype.getThreads=function(){return this.threads.slice(0)},t.prototype.anyNonDaemonicThreads=function(){for(var t=0;t<this.threads.length;t++){var e=this.threads[t];if(!e.isDaemon()){var n=e.getStatus();if(n!==a.ThreadStatus.NEW&&n!==a.ThreadStatus.TERMINATED)return!0}}return!1},t.prototype.threadTerminated=function(t){var e=this.threads.indexOf(t);if(this.threads.splice(e,1),!this.anyNonDaemonicThreads()){var n=this.emptyCallback();n&&(this.emptyCallback=null)}},t.prototype.statusChange=function(t,e,n){var o=r(e),s=r(n);e!==a.ThreadStatus.NEW&&e!==a.ThreadStatus.TERMINATED||this.threads.indexOf(t)===-1&&this.threads.push(t),o!==s&&(o?this.scheduler.unscheduleThread(t):this.scheduler.scheduleThread(t)),n===a.ThreadStatus.TERMINATED&&this.threadTerminated(t)},t.prototype.priorityChange=function(t){this.scheduler.priorityChange(t)},t.prototype.quantumOver=function(t){this.scheduler.quantumOver(t)},t}();e.__esModule=!0,e["default"]=s},function(t,e){t.exports={url:"https://github.com/plasma-umass/doppio_jcl/releases/download/v3.2/java_home.tar.gz",classpath:["lib/rt.jar","lib/charsets.jar","lib/doppio.jar","lib/dt.jar","lib/jce.jar","lib/jconsole.jar","lib/jsse.jar","lib/management-agent.jar","lib/resources.jar","lib/sa-jdi.jar","lib/tools.jar"]}},function(module,exports){"use strict";function getGlobalRequire(){var reqVar=eval('typeof(require)!=="undefined"?require:null');return reqVar?reqVar:function(t){throw Error("Cannot find module "+t)}}exports.__esModule=!0,exports["default"]=getGlobalRequire},function(t,e,n){"use strict";function r(t,e){return t.msg=D[e],e}function a(t){return(t<<1)-(t>4?9:0)}function o(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(w.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function i(t,e){k._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function u(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function c(t,e,n,r){var a=t.avail_in;return a>r&&(a=r),0===a?0:(t.avail_in-=a,w.arraySet(e,t.input,t.next_in,a,n),1===t.state.wrap?t.adler=R(t.adler,e,a,n):2===t.state.wrap&&(t.adler=F(t.adler,e,a,n)),t.next_in+=a,t.total_in+=a,a)}function p(t,e){var n,r,a=t.max_chain_length,o=t.strstart,s=t.prev_length,i=t.nice_match,l=t.strstart>t.w_size-pt?t.strstart-(t.w_size-pt):0,u=t.window,c=t.w_mask,p=t.prev,h=t.strstart+ct,f=u[o+s-1],d=u[o+s];t.prev_length>=t.good_match&&(a>>=2),i>t.lookahead&&(i=t.lookahead);do if(n=e,u[n+s]===d&&u[n+s-1]===f&&u[n]===u[o]&&u[++n]===u[o+1]){o+=2,n++;do;while(u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&o<h);if(r=ct-(h-o),o=h-ct,r>s){if(t.match_start=e,s=r,r>=i)break;f=u[o+s-1],d=u[o+s]}}while((e=p[e&c])>l&&0!==--a);return s<=t.lookahead?s:t.lookahead}function h(t){var e,n,r,a,o,s=t.w_size;do{if(a=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-pt)){w.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,n=t.hash_size,e=n;do r=t.head[--e],t.head[e]=r>=s?r-s:0;while(--n);n=s,e=n;do r=t.prev[--e],t.prev[e]=r>=s?r-s:0;while(--n);a+=s}if(0===t.strm.avail_in)break;if(n=c(t.strm,t.window,t.strstart+t.lookahead,a),t.lookahead+=n,t.lookahead+t.insert>=ut)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+ut-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<ut)););}while(t.lookahead<pt&&0!==t.strm.avail_in)}function f(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(h(t),0===t.lookahead&&e===B)return yt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,i(t,!1),0===t.strm.avail_out))return yt;if(t.strstart-t.block_start>=t.w_size-pt&&(i(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(i(t,!0),0===t.strm.avail_out?Et:At):t.strstart>t.block_start&&(i(t,!1),0===t.strm.avail_out)?yt:yt}function d(t,e){for(var n,r;;){if(t.lookahead<pt){if(h(t),t.lookahead<pt&&e===B)return yt;if(0===t.lookahead)break}if(n=0,t.lookahead>=ut&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ut-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-pt&&(t.match_length=p(t,n)),t.match_length>=ut)if(r=k._tr_tally(t,t.strstart-t.match_start,t.match_length-ut),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ut){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ut-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=k._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(i(t,!1),0===t.strm.avail_out))return yt}return t.insert=t.strstart<ut-1?t.strstart:ut-1,e===U?(i(t,!0),0===t.strm.avail_out?Et:At):t.last_lit&&(i(t,!1),0===t.strm.avail_out)?yt:It}function g(t,e){for(var n,r,a;;){if(t.lookahead<pt){if(h(t),t.lookahead<pt&&e===B)return yt;if(0===t.lookahead)break}if(n=0,t.lookahead>=ut&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ut-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ut-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-pt&&(t.match_length=p(t,n),t.match_length<=5&&(t.strategy===K||t.match_length===ut&&t.strstart-t.match_start>4096)&&(t.match_length=ut-1)),t.prev_length>=ut&&t.match_length<=t.prev_length){a=t.strstart+t.lookahead-ut,r=k._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ut),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=a&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ut-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ut-1,t.strstart++,r&&(i(t,!1),0===t.strm.avail_out))return yt}else if(t.match_available){if(r=k._tr_tally(t,0,t.window[t.strstart-1]),r&&i(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return yt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=k._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ut-1?t.strstart:ut-1,e===U?(i(t,!0),0===t.strm.avail_out?Et:At):t.last_lit&&(i(t,!1),0===t.strm.avail_out)?yt:It}function v(t,e){for(var n,r,a,o,s=t.window;;){if(t.lookahead<=ct){if(h(t),t.lookahead<=ct&&e===B)return yt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=ut&&t.strstart>0&&(a=t.strstart-1,r=s[a],r===s[++a]&&r===s[++a]&&r===s[++a])){o=t.strstart+ct;do;while(r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&a<o);t.match_length=ct-(o-a),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=ut?(n=k._tr_tally(t,1,t.match_length-ut),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=k._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(i(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(i(t,!0),0===t.strm.avail_out?Et:At):t.last_lit&&(i(t,!1),0===t.strm.avail_out)?yt:It}function _(t,e){for(var n;;){if(0===t.lookahead&&(h(t),0===t.lookahead)){if(e===B)return yt;break}if(t.match_length=0,n=k._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(i(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(i(t,!0),0===t.strm.avail_out?Et:At):t.last_lit&&(i(t,!1),0===t.strm.avail_out)?yt:It}function m(t,e,n,r,a){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=a}function T(t){t.window_size=2*t.w_size,o(t.head),t.max_lazy_match=O[t.level].max_lazy,t.good_match=O[t.level].good_length,t.nice_match=O[t.level].nice_length,t.max_chain_length=O[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ut-1,t.match_available=0,t.ins_h=0}function y(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new w.Buf16(2*it),this.dyn_dtree=new w.Buf16(2*(2*ot+1)),this.bl_tree=new w.Buf16(2*(2*st+1)),o(this.dyn_ltree),o(this.dyn_dtree),o(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new w.Buf16(lt+1),this.heap=new w.Buf16(2*at+1),o(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new w.Buf16(2*at+1),o(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function I(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=X,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ft:mt,t.adler=2===e.wrap?0:1,e.last_flush=B,k._tr_init(e),x):r(t,z)}function E(t){var e=I(t);return e===x&&T(t.state),e}function A(t,e){return t&&t.state?2!==t.state.wrap?z:(t.state.gzhead=e,x):z}function S(t,e,n,a,o,s){if(!t)return z;var i=1;if(e===J&&(e=6),a<0?(i=0,a=-a):a>15&&(i=2,a-=16),o<1||o>Q||n!==$||a<8||a>15||e<0||e>9||s<0||s>q)return r(t,z);8===a&&(a=9);var l=new y;return t.state=l,l.strm=t,l.wrap=i,l.gzhead=null,l.w_bits=a,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=o+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ut-1)/ut),l.window=new w.Buf8(2*l.w_size),l.head=new w.Buf16(l.hash_size),l.prev=new w.Buf16(l.w_size),l.lit_bufsize=1<<o+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new w.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=n,E(t)}function C(t,e){return S(t,e,$,tt,et,Z)}function N(t,e){var n,i,c,p;if(!t||!t.state||e>P||e<0)return t?r(t,z):z;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||i.status===Tt&&e!==U)return r(t,0===t.avail_out?G:z);if(i.strm=t,n=i.last_flush,i.last_flush=e,i.status===ft)if(2===i.wrap)t.adler=0,l(i,31),l(i,139),l(i,8),i.gzhead?(l(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),l(i,255&i.gzhead.time),l(i,i.gzhead.time>>8&255),l(i,i.gzhead.time>>16&255),l(i,i.gzhead.time>>24&255),l(i,9===i.level?2:i.strategy>=H||i.level<2?4:0),l(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(l(i,255&i.gzhead.extra.length),l(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=F(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=dt):(l(i,0),l(i,0),l(i,0),l(i,0),l(i,0),l(i,9===i.level?2:i.strategy>=H||i.level<2?4:0),l(i,St),i.status=mt);else{var h=$+(i.w_bits-8<<4)<<8,f=-1;f=i.strategy>=H||i.level<2?0:i.level<6?1:6===i.level?2:3,h|=f<<6,0!==i.strstart&&(h|=ht),h+=31-h%31,i.status=mt,u(i,h),0!==i.strstart&&(u(i,t.adler>>>16),u(i,65535&t.adler)),t.adler=1}if(i.status===dt)if(i.gzhead.extra){for(c=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),s(t),c=i.pending,i.pending!==i.pending_buf_size));)l(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=gt)}else i.status=gt;if(i.status===gt)if(i.gzhead.name){c=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),s(t),c=i.pending,i.pending===i.pending_buf_size)){p=1;break}p=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,l(i,p)}while(0!==p);i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),0===p&&(i.gzindex=0,i.status=vt)}else i.status=vt;if(i.status===vt)if(i.gzhead.comment){c=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),s(t),c=i.pending,i.pending===i.pending_buf_size)){p=1;break}p=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,l(i,p)}while(0!==p);i.gzhead.hcrc&&i.pending>c&&(t.adler=F(t.adler,i.pending_buf,i.pending-c,c)),0===p&&(i.status=_t)}else i.status=_t;if(i.status===_t&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&s(t),i.pending+2<=i.pending_buf_size&&(l(i,255&t.adler),l(i,t.adler>>8&255),t.adler=0,i.status=mt)):i.status=mt),0!==i.pending){if(s(t),0===t.avail_out)return i.last_flush=-1,x}else if(0===t.avail_in&&a(e)<=a(n)&&e!==U)return r(t,G);if(i.status===Tt&&0!==t.avail_in)return r(t,G);if(0!==t.avail_in||0!==i.lookahead||e!==B&&i.status!==Tt){var d=i.strategy===H?_(i,e):i.strategy===Y?v(i,e):O[i.level].func(i,e);if(d!==Et&&d!==At||(i.status=Tt),d===yt||d===Et)return 0===t.avail_out&&(i.last_flush=-1),x;if(d===It&&(e===M?k._tr_align(i):e!==P&&(k._tr_stored_block(i,0,0,!1),e===j&&(o(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),s(t),0===t.avail_out))return i.last_flush=-1,x}return e!==U?x:i.wrap<=0?V:(2===i.wrap?(l(i,255&t.adler),l(i,t.adler>>8&255),l(i,t.adler>>16&255),l(i,t.adler>>24&255),l(i,255&t.total_in),l(i,t.total_in>>8&255),l(i,t.total_in>>16&255),l(i,t.total_in>>24&255)):(u(i,t.adler>>>16),u(i,65535&t.adler)),s(t),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?x:V)}function L(t){var e;return t&&t.state?(e=t.state.status,e!==ft&&e!==dt&&e!==gt&&e!==vt&&e!==_t&&e!==mt&&e!==Tt?r(t,z):(t.state=null,e===mt?r(t,W):x)):z}function b(t,e){var n,r,a,s,i,l,u,c,p=e.length;if(!t||!t.state)return z;if(n=t.state,s=n.wrap,2===s||1===s&&n.status!==ft||n.lookahead)return z;for(1===s&&(t.adler=R(t.adler,e,p,0)),n.wrap=0,p>=n.w_size&&(0===s&&(o(n.head),n.strstart=0,n.block_start=0,n.insert=0),c=new w.Buf8(n.w_size),w.arraySet(c,e,p-n.w_size,n.w_size,0),e=c,p=n.w_size),i=t.avail_in,l=t.next_in,u=t.input,t.avail_in=p,t.next_in=0,t.input=e,h(n);n.lookahead>=ut;){r=n.strstart,a=n.lookahead-(ut-1);do n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+ut-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++;while(--a);n.strstart=r,n.lookahead=ut-1,h(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=ut-1,n.match_available=0,t.next_in=l,t.input=u,t.avail_in=i,n.wrap=s,x}var O,w=n(36),k=n(37),R=n(38),F=n(39),D=n(40),B=0,M=1,j=3,U=4,P=5,x=0,V=1,z=-2,W=-3,G=-5,J=-1,K=1,H=2,Y=3,q=4,Z=0,X=2,$=8,Q=9,tt=15,et=8,nt=29,rt=256,at=rt+1+nt,ot=30,st=19,it=2*at+1,lt=15,ut=3,ct=258,pt=ct+ut+1,ht=32,ft=42,dt=69,gt=73,vt=91,_t=103,mt=113,Tt=666,yt=1,It=2,Et=3,At=4,St=3;O=[new m(0,0,0,0,f),new m(4,4,8,4,d),new m(4,5,16,8,d),new m(4,6,32,32,d),new m(4,4,16,16,g),new m(8,16,32,32,g),new m(8,16,128,128,g),new m(8,32,128,256,g),new m(32,128,258,1024,g),new m(32,258,258,4096,g)],e.deflateInit=C,e.deflateInit2=S,e.deflateReset=E,e.deflateResetKeep=I,e.deflateSetHeader=A,e.deflate=N,e.deflateEnd=L,e.deflateSetDictionary=b,e.deflateInfo="pako deflate (from Nodeca project)"},function(t,e){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,n,r,a){if(e.subarray&&t.subarray)return void t.set(e.subarray(n,n+r),a);for(var o=0;o<r;o++)t[a+o]=e[n+o]},flattenChunks:function(t){var e,n,r,a,o,s;for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length;for(s=new Uint8Array(r),a=0,e=0,n=t.length;e<n;e++)o=t[e],s.set(o,a),a+=o.length;return s}},a={arraySet:function(t,e,n,r,a){for(var o=0;o<r;o++)t[a+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,r)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,a))},e.setTyped(n)},function(t,e,n){"use strict";function r(t){for(var e=t.length;--e>=0;)t[e]=0}function a(t,e,n,r,a){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=a,this.has_stree=t&&t.length}function o(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?lt[t]:lt[256+(t>>>7)]}function i(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,n){t.bi_valid>q-n?(t.bi_buf|=e<<t.bi_valid&65535,i(t,t.bi_buf),t.bi_buf=e>>q-t.bi_valid,t.bi_valid+=n-q):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function u(t,e,n){l(t,n[2*e],n[2*e+1])}function c(t,e){var n=0;do n|=1&t,t>>>=1,n<<=1;while(--e>0);return n>>>1}function p(t){16===t.bi_valid?(i(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function h(t,e){var n,r,a,o,s,i,l=e.dyn_tree,u=e.max_code,c=e.stat_desc.static_tree,p=e.stat_desc.has_stree,h=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,d=e.stat_desc.max_length,g=0;for(o=0;o<=Y;o++)t.bl_count[o]=0;for(l[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<H;n++)r=t.heap[n],o=l[2*l[2*r+1]+1]+1,o>d&&(o=d,g++),l[2*r+1]=o,r>u||(t.bl_count[o]++,s=0,r>=f&&(s=h[r-f]),i=l[2*r],t.opt_len+=i*(o+s),p&&(t.static_len+=i*(c[2*r+1]+s)));if(0!==g){do{for(o=d-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[d]--,g-=2}while(g>0);for(o=d;0!==o;o--)for(r=t.bl_count[o];0!==r;)a=t.heap[--n],a>u||(l[2*a+1]!==o&&(t.opt_len+=(o-l[2*a+1])*l[2*a],l[2*a+1]=o),r--)}}function f(t,e,n){var r,a,o=Array(Y+1),s=0;for(r=1;r<=Y;r++)o[r]=s=s+n[r-1]<<1;for(a=0;a<=e;a++){var i=t[2*a+1];0!==i&&(t[2*a]=c(o[i]++,i))}}function d(){var t,e,n,r,o,s=Array(Y+1);for(n=0,r=0;r<z-1;r++)for(ct[r]=n,t=0;t<1<<et[r];t++)ut[n++]=r;for(ut[n-1]=r,o=0,r=0;r<16;r++)for(pt[r]=o,t=0;t<1<<nt[r];t++)lt[o++]=r;for(o>>=7;r<J;r++)for(pt[r]=o<<7,t=0;t<1<<nt[r]-7;t++)lt[256+o++]=r;for(e=0;e<=Y;e++)s[e]=0;for(t=0;t<=143;)st[2*t+1]=8,t++,s[8]++;for(;t<=255;)st[2*t+1]=9,t++,s[9]++;for(;t<=279;)st[2*t+1]=7,t++,s[7]++;for(;t<=287;)st[2*t+1]=8,t++,s[8]++;for(f(st,G+1,s),t=0;t<J;t++)it[2*t+1]=5,it[2*t]=c(t,5);ht=new a(st,et,W+1,G,Y),ft=new a(it,nt,0,J,Y),dt=new a(Array(0),rt,0,K,Z)}function g(t){var e;for(e=0;e<G;e++)t.dyn_ltree[2*e]=0;for(e=0;e<J;e++)t.dyn_dtree[2*e]=0;for(e=0;e<K;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*X]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function v(t){t.bi_valid>8?i(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function _(t,e,n,r){v(t),r&&(i(t,n),i(t,~n)),R.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}function m(t,e,n,r){var a=2*e,o=2*n;return t[a]<t[o]||t[a]===t[o]&&r[e]<=r[n]}function T(t,e,n){for(var r=t.heap[n],a=n<<1;a<=t.heap_len&&(a<t.heap_len&&m(e,t.heap[a+1],t.heap[a],t.depth)&&a++,!m(e,r,t.heap[a],t.depth));)t.heap[n]=t.heap[a],n=a,a<<=1;t.heap[n]=r}function y(t,e,n){var r,a,o,i,c=0;if(0!==t.last_lit)do r=t.pending_buf[t.d_buf+2*c]<<8|t.pending_buf[t.d_buf+2*c+1],a=t.pending_buf[t.l_buf+c],c++,0===r?u(t,a,e):(o=ut[a],u(t,o+W+1,e),i=et[o],0!==i&&(a-=ct[o],l(t,a,i)),r--,o=s(r),u(t,o,n),i=nt[o],0!==i&&(r-=pt[o],l(t,r,i)));while(c<t.last_lit);u(t,X,e)}function I(t,e){var n,r,a,o=e.dyn_tree,s=e.stat_desc.static_tree,i=e.stat_desc.has_stree,l=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=H,n=0;n<l;n++)0!==o[2*n]?(t.heap[++t.heap_len]=u=n,t.depth[n]=0):o[2*n+1]=0;for(;t.heap_len<2;)a=t.heap[++t.heap_len]=u<2?++u:0,o[2*a]=1,t.depth[a]=0,t.opt_len--,i&&(t.static_len-=s[2*a+1]);for(e.max_code=u,n=t.heap_len>>1;n>=1;n--)T(t,o,n);a=l;do n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],T(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*a]=o[2*n]+o[2*r],t.depth[a]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=a,t.heap[1]=a++,T(t,o,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],h(t,e),f(o,u,t.bl_count)}function E(t,e,n){var r,a,o=-1,s=e[1],i=0,l=7,u=4;for(0===s&&(l=138,u=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)a=s,s=e[2*(r+1)+1],++i<l&&a===s||(i<u?t.bl_tree[2*a]+=i:0!==a?(a!==o&&t.bl_tree[2*a]++,t.bl_tree[2*$]++):i<=10?t.bl_tree[2*Q]++:t.bl_tree[2*tt]++,i=0,o=a,0===s?(l=138,u=3):a===s?(l=6,u=3):(l=7,u=4))}function A(t,e,n){var r,a,o=-1,s=e[1],i=0,c=7,p=4;for(0===s&&(c=138,p=3),r=0;r<=n;r++)if(a=s,s=e[2*(r+1)+1],!(++i<c&&a===s)){if(i<p){do u(t,a,t.bl_tree);while(0!==--i)}else 0!==a?(a!==o&&(u(t,a,t.bl_tree),i--),u(t,$,t.bl_tree),l(t,i-3,2)):i<=10?(u(t,Q,t.bl_tree),l(t,i-3,3)):(u(t,tt,t.bl_tree),l(t,i-11,7));i=0,o=a,0===s?(c=138,p=3):a===s?(c=6,p=3):(c=7,p=4)}}function S(t){var e;for(E(t,t.dyn_ltree,t.l_desc.max_code),E(t,t.dyn_dtree,t.d_desc.max_code),I(t,t.bl_desc),e=K-1;e>=3&&0===t.bl_tree[2*at[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function C(t,e,n,r){var a;for(l(t,e-257,5),l(t,n-1,5),l(t,r-4,4),a=0;a<r;a++)l(t,t.bl_tree[2*at[a]+1],3);A(t,t.dyn_ltree,e-1),A(t,t.dyn_dtree,n-1)}function N(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return D;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return B;for(e=32;e<W;e++)if(0!==t.dyn_ltree[2*e])return B;return D}function L(t){gt||(d(),gt=!0),t.l_desc=new o(t.dyn_ltree,ht),t.d_desc=new o(t.dyn_dtree,ft),t.bl_desc=new o(t.bl_tree,dt),t.bi_buf=0,t.bi_valid=0,g(t)}function b(t,e,n,r){l(t,(j<<1)+(r?1:0),3),_(t,e,n,!0)}function O(t){l(t,U<<1,3),u(t,X,st),p(t)}function w(t,e,n,r){var a,o,s=0;t.level>0?(t.strm.data_type===M&&(t.strm.data_type=N(t)),I(t,t.l_desc),I(t,t.d_desc),s=S(t),a=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,o<=a&&(a=o)):a=o=n+5,n+4<=a&&e!==-1?b(t,e,n,r):t.strategy===F||o===a?(l(t,(U<<1)+(r?1:0),3),y(t,st,it)):(l(t,(P<<1)+(r?1:0),3),C(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),y(t,t.dyn_ltree,t.dyn_dtree)),g(t),r&&v(t)}function k(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(ut[n]+W+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1}var R=n(36),F=4,D=0,B=1,M=2,j=0,U=1,P=2,x=3,V=258,z=29,W=256,G=W+1+z,J=30,K=19,H=2*G+1,Y=15,q=16,Z=7,X=256,$=16,Q=17,tt=18,et=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],nt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],at=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ot=512,st=Array(2*(G+2));r(st);var it=Array(2*J);r(it);var lt=Array(ot);r(lt);var ut=Array(V-x+1);r(ut);var ct=Array(z);r(ct);var pt=Array(J);r(pt);var ht,ft,dt,gt=!1;e._tr_init=L,e._tr_stored_block=b,e._tr_flush_block=w,e._tr_tally=k,e._tr_align=O},function(t,e){"use strict";function n(t,e,n,r){for(var a=65535&t|0,o=t>>>16&65535|0,s=0;0!==n;){s=n>2e3?2e3:n,n-=s;do a=a+e[r++]|0,o=o+a|0;while(--s);a%=65521,o%=65521}return a|o<<16|0}t.exports=n},function(t,e){"use strict";function n(){for(var t,e=[],n=0;n<256;n++){t=n;for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}function r(t,e,n,r){var o=a,s=r+n;t^=-1;for(var i=r;i<s;i++)t=t>>>8^o[255&(t^e[i])];return t^-1}var a=n();t.exports=r},function(t,e){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(t,e,n){"use strict";function r(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new m.Buf16(320),this.work=new m.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=j,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new m.Buf32(gt),e.distcode=e.distdyn=new m.Buf32(vt),e.sane=1,e.back=-1,O):R}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,o(t)):R}function i(t,e){var n,r;return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15)?R:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,s(t))):R}function l(t,e){var n,r;return t?(r=new a,t.state=r,r.window=null,n=i(t,e),n!==O&&(t.state=null),n):R}function u(t){return l(t,mt)}function c(t){if(Tt){var e;for(v=new m.Buf32(512),_=new m.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(E(S,t.lens,0,288,v,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;E(C,t.lens,0,32,_,0,t.work,{bits:5}),Tt=!1}t.lencode=v,t.lenbits=9,t.distcode=_,t.distbits=5}function p(t,e,n,r){var a,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new m.Buf8(o.wsize)),r>=o.wsize?(m.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(a=o.wsize-o.wnext,a>r&&(a=r),m.arraySet(o.window,e,n-r,a,o.wnext),r-=a,r?(m.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}function h(t,e){var n,a,o,s,i,l,u,h,f,d,g,v,_,gt,vt,_t,mt,Tt,yt,It,Et,At,St,Ct,Nt=0,Lt=new m.Buf8(4),bt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return R;n=t.state,n.mode===Y&&(n.mode=q),i=t.next_out,o=t.output,u=t.avail_out,s=t.next_in,a=t.input,l=t.avail_in,h=n.hold,f=n.bits,d=l,g=u,At=O;t:for(;;)switch(n.mode){case j:if(0===n.wrap){n.mode=q;break}for(;f<16;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(2&n.wrap&&35615===h){n.check=0,Lt[0]=255&h,Lt[1]=h>>>8&255,n.check=y(n.check,Lt,2,0),h=0,f=0,n.mode=U;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",n.mode=ht;break}if((15&h)!==M){t.msg="unknown compression method",n.mode=ht;break}if(h>>>=4,f-=4,Et=(15&h)+8,0===n.wbits)n.wbits=Et;else if(Et>n.wbits){t.msg="invalid window size",n.mode=ht;break}n.dmax=1<<Et,t.adler=n.check=1,n.mode=512&h?K:Y,h=0,f=0;break;case U:for(;f<16;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(n.flags=h,(255&n.flags)!==M){t.msg="unknown compression method",n.mode=ht;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=ht;break}n.head&&(n.head.text=h>>8&1),512&n.flags&&(Lt[0]=255&h,Lt[1]=h>>>8&255,n.check=y(n.check,Lt,2,0)),h=0,f=0,n.mode=P;case P:for(;f<32;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.head&&(n.head.time=h),512&n.flags&&(Lt[0]=255&h,Lt[1]=h>>>8&255,Lt[2]=h>>>16&255,Lt[3]=h>>>24&255,n.check=y(n.check,Lt,4,0)),h=0,f=0,n.mode=x;case x:for(;f<16;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.head&&(n.head.xflags=255&h,n.head.os=h>>8),512&n.flags&&(Lt[0]=255&h,Lt[1]=h>>>8&255,n.check=y(n.check,Lt,2,0)),h=0,f=0,n.mode=V;case V:if(1024&n.flags){for(;f<16;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.length=h,n.head&&(n.head.extra_len=h),512&n.flags&&(Lt[0]=255&h,Lt[1]=h>>>8&255,n.check=y(n.check,Lt,2,0)),h=0,f=0}else n.head&&(n.head.extra=null);n.mode=z;case z:if(1024&n.flags&&(v=n.length,v>l&&(v=l),v&&(n.head&&(Et=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),m.arraySet(n.head.extra,a,s,v,Et)),512&n.flags&&(n.check=y(n.check,a,v,s)),l-=v,s+=v,n.length-=v),n.length))break t;n.length=0,n.mode=W;case W:if(2048&n.flags){if(0===l)break t;v=0;do Et=a[s+v++],n.head&&Et&&n.length<65536&&(n.head.name+=String.fromCharCode(Et));while(Et&&v<l);if(512&n.flags&&(n.check=y(n.check,a,v,s)),l-=v,s+=v,Et)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=G;case G:if(4096&n.flags){if(0===l)break t;v=0;do Et=a[s+v++],n.head&&Et&&n.length<65536&&(n.head.comment+=String.fromCharCode(Et));while(Et&&v<l);if(512&n.flags&&(n.check=y(n.check,a,v,s)),l-=v,s+=v,Et)break t}else n.head&&(n.head.comment=null);n.mode=J;case J:if(512&n.flags){for(;f<16;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(h!==(65535&n.check)){t.msg="header crc mismatch",n.mode=ht;break}h=0,f=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=Y;break;case K:for(;f<32;){if(0===l)break t;l--,
h+=a[s++]<<f,f+=8}t.adler=n.check=r(h),h=0,f=0,n.mode=H;case H:if(0===n.havedict)return t.next_out=i,t.avail_out=u,t.next_in=s,t.avail_in=l,n.hold=h,n.bits=f,k;t.adler=n.check=1,n.mode=Y;case Y:if(e===L||e===b)break t;case q:if(n.last){h>>>=7&f,f-=7&f,n.mode=ut;break}for(;f<3;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}switch(n.last=1&h,h>>>=1,f-=1,3&h){case 0:n.mode=Z;break;case 1:if(c(n),n.mode=nt,e===b){h>>>=2,f-=2;break t}break;case 2:n.mode=Q;break;case 3:t.msg="invalid block type",n.mode=ht}h>>>=2,f-=2;break;case Z:for(h>>>=7&f,f-=7&f;f<32;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if((65535&h)!==(h>>>16^65535)){t.msg="invalid stored block lengths",n.mode=ht;break}if(n.length=65535&h,h=0,f=0,n.mode=X,e===b)break t;case X:n.mode=$;case $:if(v=n.length){if(v>l&&(v=l),v>u&&(v=u),0===v)break t;m.arraySet(o,a,s,v,i),l-=v,s+=v,u-=v,i+=v,n.length-=v;break}n.mode=Y;break;case Q:for(;f<14;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(n.nlen=(31&h)+257,h>>>=5,f-=5,n.ndist=(31&h)+1,h>>>=5,f-=5,n.ncode=(15&h)+4,h>>>=4,f-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=ht;break}n.have=0,n.mode=tt;case tt:for(;n.have<n.ncode;){for(;f<3;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.lens[bt[n.have++]]=7&h,h>>>=3,f-=3}for(;n.have<19;)n.lens[bt[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,St={bits:n.lenbits},At=E(A,n.lens,0,19,n.lencode,0,n.work,St),n.lenbits=St.bits,At){t.msg="invalid code lengths set",n.mode=ht;break}n.have=0,n.mode=et;case et:for(;n.have<n.nlen+n.ndist;){for(;Nt=n.lencode[h&(1<<n.lenbits)-1],vt=Nt>>>24,_t=Nt>>>16&255,mt=65535&Nt,!(vt<=f);){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(mt<16)h>>>=vt,f-=vt,n.lens[n.have++]=mt;else{if(16===mt){for(Ct=vt+2;f<Ct;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(h>>>=vt,f-=vt,0===n.have){t.msg="invalid bit length repeat",n.mode=ht;break}Et=n.lens[n.have-1],v=3+(3&h),h>>>=2,f-=2}else if(17===mt){for(Ct=vt+3;f<Ct;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}h>>>=vt,f-=vt,Et=0,v=3+(7&h),h>>>=3,f-=3}else{for(Ct=vt+7;f<Ct;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}h>>>=vt,f-=vt,Et=0,v=11+(127&h),h>>>=7,f-=7}if(n.have+v>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=ht;break}for(;v--;)n.lens[n.have++]=Et}}if(n.mode===ht)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=ht;break}if(n.lenbits=9,St={bits:n.lenbits},At=E(S,n.lens,0,n.nlen,n.lencode,0,n.work,St),n.lenbits=St.bits,At){t.msg="invalid literal/lengths set",n.mode=ht;break}if(n.distbits=6,n.distcode=n.distdyn,St={bits:n.distbits},At=E(C,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,St),n.distbits=St.bits,At){t.msg="invalid distances set",n.mode=ht;break}if(n.mode=nt,e===b)break t;case nt:n.mode=rt;case rt:if(l>=6&&u>=258){t.next_out=i,t.avail_out=u,t.next_in=s,t.avail_in=l,n.hold=h,n.bits=f,I(t,g),i=t.next_out,o=t.output,u=t.avail_out,s=t.next_in,a=t.input,l=t.avail_in,h=n.hold,f=n.bits,n.mode===Y&&(n.back=-1);break}for(n.back=0;Nt=n.lencode[h&(1<<n.lenbits)-1],vt=Nt>>>24,_t=Nt>>>16&255,mt=65535&Nt,!(vt<=f);){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(_t&&0===(240&_t)){for(Tt=vt,yt=_t,It=mt;Nt=n.lencode[It+((h&(1<<Tt+yt)-1)>>Tt)],vt=Nt>>>24,_t=Nt>>>16&255,mt=65535&Nt,!(Tt+vt<=f);){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}h>>>=Tt,f-=Tt,n.back+=Tt}if(h>>>=vt,f-=vt,n.back+=vt,n.length=mt,0===_t){n.mode=lt;break}if(32&_t){n.back=-1,n.mode=Y;break}if(64&_t){t.msg="invalid literal/length code",n.mode=ht;break}n.extra=15&_t,n.mode=at;case at:if(n.extra){for(Ct=n.extra;f<Ct;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.length+=h&(1<<n.extra)-1,h>>>=n.extra,f-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=ot;case ot:for(;Nt=n.distcode[h&(1<<n.distbits)-1],vt=Nt>>>24,_t=Nt>>>16&255,mt=65535&Nt,!(vt<=f);){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(0===(240&_t)){for(Tt=vt,yt=_t,It=mt;Nt=n.distcode[It+((h&(1<<Tt+yt)-1)>>Tt)],vt=Nt>>>24,_t=Nt>>>16&255,mt=65535&Nt,!(Tt+vt<=f);){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}h>>>=Tt,f-=Tt,n.back+=Tt}if(h>>>=vt,f-=vt,n.back+=vt,64&_t){t.msg="invalid distance code",n.mode=ht;break}n.offset=mt,n.extra=15&_t,n.mode=st;case st:if(n.extra){for(Ct=n.extra;f<Ct;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}n.offset+=h&(1<<n.extra)-1,h>>>=n.extra,f-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=ht;break}n.mode=it;case it:if(0===u)break t;if(v=g-u,n.offset>v){if(v=n.offset-v,v>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=ht;break}v>n.wnext?(v-=n.wnext,_=n.wsize-v):_=n.wnext-v,v>n.length&&(v=n.length),gt=n.window}else gt=o,_=i-n.offset,v=n.length;v>u&&(v=u),u-=v,n.length-=v;do o[i++]=gt[_++];while(--v);0===n.length&&(n.mode=rt);break;case lt:if(0===u)break t;o[i++]=n.length,u--,n.mode=rt;break;case ut:if(n.wrap){for(;f<32;){if(0===l)break t;l--,h|=a[s++]<<f,f+=8}if(g-=u,t.total_out+=g,n.total+=g,g&&(t.adler=n.check=n.flags?y(n.check,o,g,i-g):T(n.check,o,g,i-g)),g=u,(n.flags?h:r(h))!==n.check){t.msg="incorrect data check",n.mode=ht;break}h=0,f=0}n.mode=ct;case ct:if(n.wrap&&n.flags){for(;f<32;){if(0===l)break t;l--,h+=a[s++]<<f,f+=8}if(h!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=ht;break}h=0,f=0}n.mode=pt;case pt:At=w;break t;case ht:At=F;break t;case ft:return D;case dt:default:return R}return t.next_out=i,t.avail_out=u,t.next_in=s,t.avail_in=l,n.hold=h,n.bits=f,(n.wsize||g!==t.avail_out&&n.mode<ht&&(n.mode<ut||e!==N))&&p(t,t.output,t.next_out,g-t.avail_out)?(n.mode=ft,D):(d-=t.avail_in,g-=t.avail_out,t.total_in+=d,t.total_out+=g,n.total+=g,n.wrap&&g&&(t.adler=n.check=n.flags?y(n.check,o,g,t.next_out-g):T(n.check,o,g,t.next_out-g)),t.data_type=n.bits+(n.last?64:0)+(n.mode===Y?128:0)+(n.mode===nt||n.mode===X?256:0),(0===d&&0===g||e===N)&&At===O&&(At=B),At)}function f(t){if(!t||!t.state)return R;var e=t.state;return e.window&&(e.window=null),t.state=null,O}function d(t,e){var n;return t&&t.state?(n=t.state,0===(2&n.wrap)?R:(n.head=e,e.done=!1,O)):R}function g(t,e){var n,r,a,o=e.length;return t&&t.state?(n=t.state,0!==n.wrap&&n.mode!==H?R:n.mode===H&&(r=1,r=T(r,e,o,0),r!==n.check)?F:(a=p(t,e,o,o))?(n.mode=ft,D):(n.havedict=1,O)):R}var v,_,m=n(36),T=n(38),y=n(39),I=n(42),E=n(43),A=0,S=1,C=2,N=4,L=5,b=6,O=0,w=1,k=2,R=-2,F=-3,D=-4,B=-5,M=8,j=1,U=2,P=3,x=4,V=5,z=6,W=7,G=8,J=9,K=10,H=11,Y=12,q=13,Z=14,X=15,$=16,Q=17,tt=18,et=19,nt=20,rt=21,at=22,ot=23,st=24,it=25,lt=26,ut=27,ct=28,pt=29,ht=30,ft=31,dt=32,gt=852,vt=592,_t=15,mt=_t,Tt=!0;e.inflateReset=s,e.inflateReset2=i,e.inflateResetKeep=o,e.inflateInit=u,e.inflateInit2=l,e.inflate=h,e.inflateEnd=f,e.inflateGetHeader=d,e.inflateSetDictionary=g,e.inflateInfo="pako inflate (from Nodeca project)"},function(t,e){"use strict";var n=30,r=12;t.exports=function(t,e){var a,o,s,i,l,u,c,p,h,f,d,g,v,_,m,T,y,I,E,A,S,C,N,L,b;a=t.state,o=t.next_in,L=t.input,s=o+(t.avail_in-5),i=t.next_out,b=t.output,l=i-(e-t.avail_out),u=i+(t.avail_out-257),c=a.dmax,p=a.wsize,h=a.whave,f=a.wnext,d=a.window,g=a.hold,v=a.bits,_=a.lencode,m=a.distcode,T=(1<<a.lenbits)-1,y=(1<<a.distbits)-1;t:do{v<15&&(g+=L[o++]<<v,v+=8,g+=L[o++]<<v,v+=8),I=_[g&T];e:for(;;){if(E=I>>>24,g>>>=E,v-=E,E=I>>>16&255,0===E)b[i++]=65535&I;else{if(!(16&E)){if(0===(64&E)){I=_[(65535&I)+(g&(1<<E)-1)];continue e}if(32&E){a.mode=r;break t}t.msg="invalid literal/length code",a.mode=n;break t}A=65535&I,E&=15,E&&(v<E&&(g+=L[o++]<<v,v+=8),A+=g&(1<<E)-1,g>>>=E,v-=E),v<15&&(g+=L[o++]<<v,v+=8,g+=L[o++]<<v,v+=8),I=m[g&y];n:for(;;){if(E=I>>>24,g>>>=E,v-=E,E=I>>>16&255,!(16&E)){if(0===(64&E)){I=m[(65535&I)+(g&(1<<E)-1)];continue n}t.msg="invalid distance code",a.mode=n;break t}if(S=65535&I,E&=15,v<E&&(g+=L[o++]<<v,v+=8,v<E&&(g+=L[o++]<<v,v+=8)),S+=g&(1<<E)-1,S>c){t.msg="invalid distance too far back",a.mode=n;break t}if(g>>>=E,v-=E,E=i-l,S>E){if(E=S-E,E>h&&a.sane){t.msg="invalid distance too far back",a.mode=n;break t}if(C=0,N=d,0===f){if(C+=p-E,E<A){A-=E;do b[i++]=d[C++];while(--E);C=i-S,N=b}}else if(f<E){if(C+=p+f-E,E-=f,E<A){A-=E;do b[i++]=d[C++];while(--E);if(C=0,f<A){E=f,A-=E;do b[i++]=d[C++];while(--E);C=i-S,N=b}}}else if(C+=f-E,E<A){A-=E;do b[i++]=d[C++];while(--E);C=i-S,N=b}for(;A>2;)b[i++]=N[C++],b[i++]=N[C++],b[i++]=N[C++],A-=3;A&&(b[i++]=N[C++],A>1&&(b[i++]=N[C++]))}else{C=i-S;do b[i++]=b[C++],b[i++]=b[C++],b[i++]=b[C++],A-=3;while(A>2);A&&(b[i++]=b[C++],A>1&&(b[i++]=b[C++]))}break}}break}}while(o<s&&i<u);A=v>>3,o-=A,v-=A<<3,g&=(1<<v)-1,t.next_in=o,t.next_out=i,t.avail_in=o<s?5+(s-o):5-(o-s),t.avail_out=i<u?257+(u-i):257-(i-u),a.hold=g,a.bits=v}},function(t,e,n){"use strict";var r=n(36),a=15,o=852,s=592,i=0,l=1,u=2,c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(t,e,n,d,g,v,_,m){var T,y,I,E,A,S,C,N,L,b=m.bits,O=0,w=0,k=0,R=0,F=0,D=0,B=0,M=0,j=0,U=0,P=null,x=0,V=new r.Buf16(a+1),z=new r.Buf16(a+1),W=null,G=0;for(O=0;O<=a;O++)V[O]=0;for(w=0;w<d;w++)V[e[n+w]]++;for(F=b,R=a;R>=1&&0===V[R];R--);if(F>R&&(F=R),0===R)return g[v++]=20971520,g[v++]=20971520,m.bits=1,0;for(k=1;k<R&&0===V[k];k++);for(F<k&&(F=k),M=1,O=1;O<=a;O++)if(M<<=1,M-=V[O],M<0)return-1;if(M>0&&(t===i||1!==R))return-1;for(z[1]=0,O=1;O<a;O++)z[O+1]=z[O]+V[O];for(w=0;w<d;w++)0!==e[n+w]&&(_[z[e[n+w]]++]=w);if(t===i?(P=W=_,S=19):t===l?(P=c,x-=257,W=p,G-=257,S=256):(P=h,W=f,S=-1),U=0,w=0,O=k,A=v,D=F,B=0,I=-1,j=1<<F,E=j-1,t===l&&j>o||t===u&&j>s)return 1;for(var J=0;;){J++,C=O-B,_[w]<S?(N=0,L=_[w]):_[w]>S?(N=W[G+_[w]],L=P[x+_[w]]):(N=96,L=0),T=1<<O-B,y=1<<D,k=y;do y-=T,g[A+(U>>B)+y]=C<<24|N<<16|L|0;while(0!==y);for(T=1<<O-1;U&T;)T>>=1;if(0!==T?(U&=T-1,U+=T):U=0,w++,0===--V[O]){if(O===R)break;O=e[n+_[w]]}if(O>F&&(U&E)!==I){for(0===B&&(B=F),A+=k,D=O-B,M=1<<D;D+B<R&&(M-=V[D+B],!(M<=0));)D++,M<<=1;if(j+=1<<D,t===l&&j>o||t===u&&j>s)return 1;I=U&E,g[I]=F<<24|D<<16|A-v|0}}return 0!==U&&(g[A+U]=O-B<<24|64<<16|0),m.bits=F,0}},function(t,e){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=n},function(t,e){t.exports={name:"doppiojvm",version:"0.4.2",engine:"node >= 4.0.0",license:"MIT",main:"dist/release/doppio.js",typings:"dist/typings/src/doppiojvm",dependencies:{async:"^2.0.0",browserfs:"^0.5.12",glob:"^7.0.3","gunzip-maybe":"^1.3.1",optimist:"~0.6",pako:"^1.0.1",rimraf:"^2.5.2","source-map-support":"^0.4.0","tar-fs":"^1.12.0"},devDependencies:{"bfs-buffer":"^0.1.7","bfs-path":"^0.1.2","bfs-process":"^0.1.6","body-parser":"^1.15.1",cpr:"^2.0.0","detect-browser":"^1.3.1",escodegen:"^1.8.0",esprima:"^2.7.2",estraverse:"^4.2.0",express:"^4.13.4",grunt:"^1.0","grunt-cli":"^1.2","grunt-contrib-compress":"^1.2.0","grunt-contrib-connect":"^1.0","grunt-contrib-copy":"^1.0","grunt-contrib-uglify":"^2.0","grunt-karma":"^2.0","grunt-lineending":"^1.0.0","grunt-merge-source-maps":"^0.1.0","grunt-newer":"^1.2.0","grunt-ts":"^5.5","grunt-webpack":"^1.0.11","imports-loader":"^0.6.5","jasmine-core":"^2.3.4","json-loader":"^0.5.4",karma:"^1.2.0","karma-chrome-launcher":"^2.0","karma-firefox-launcher":"^1.0","karma-ie-launcher":"^1.0","karma-jasmine":"^1.0","karma-opera-launcher":"^1.0","karma-safari-launcher":"^1.0","locate-java-home":"^0.1.6",semver:"^5.1.0","source-map-loader":"^0.1.5",typescript:"^1.8.10","uglify-js":"^2.7.3",underscore:"^1.8.3",webpack:"^1.13.1","webpack-dev-server":"^1.14.1"},scripts:{test:"grunt test",prepublish:"node ./prepublish.js",install:"node ./install.js","appveyor-test":"grunt --stack test-browser-appveyor"},repository:{type:"git",url:"http://github.com/plasma-umass/doppio.git"},bin:{doppio:"./bin/doppio",doppioh:"./bin/doppioh","doppio-dev":"./bin/doppio-dev","doppio-fast-dev":"./bin/doppio-fast-dev"}}},function(t,e){"use strict";function n(t,e,n){return new o(t,e).text_diff(n)}function r(t,e){for(var n=Math.max(t.length,e.length),r=0;r<n;r++){if(t[r]<e[r])return-1;if(t[r]>e[r])return 1}return t.length==e.length?0:t.length<e.length?-1:1}function a(t,e,n){return t.hasOwnProperty(e)?t[e]:n}e.text_diff=n;var o=function(){function t(t,e){this.a=t,this.b=e,this.b2j={};for(var n=0;n<e.length;n++){var r=e[n];this.b2j.hasOwnProperty(r)?this.b2j[r].push(n):this.b2j[r]=[n]}}return t.prototype.find_longest_match=function(t,e,n,r){for(var o=this.a,s=this.b,i=this.b2j,l=t,u=n,c=0,p={},h=t;h<e;h++){var f={},d=a(i,o[h],[]);for(var g in d)if(d.hasOwnProperty(g)){var v=d[g];if(v<n)continue;if(v>=r)break;var _=a(p,v-1,0)+1;f[v]=_,_>c&&(l=h-_+1,u=v-_+1,c=_)}p=f}for(;l>t&&u>n&&o[l-1]==s[u-1];)l--,u--,c++;for(;l+c<e&&u+c<r&&o[l+c]==s[u+c];)c++;return[l,u,c]},t.prototype.get_matching_blocks=function(){if(null!=this.matching_blocks)return this.matching_blocks;for(var t=this.a.length,e=this.b.length,n=[[0,t,0,e]],a=[];n.length;){var o=n.pop(),s=o[0],i=o[1],l=o[2],u=o[3],c=this.find_longest_match(s,i,l,u),p=c[0],h=c[1],f=c[2];f&&(a.push(c),s<p&&l<h&&n.push([s,p,l,h]),p+f<i&&h+f<u&&n.push([p+f,i,h+f,u]))}a.sort(r);for(var d=0,g=0,v=0,_=[],m=0;m<a.length;m++){var T=a[m],y=T[0],I=T[1],E=T[2];d+v==y&&g+v==I?v+=E:(v&&_.push([d,g,v]),d=y,g=I,v=E)}return v&&_.push([d,g,v]),_.push([t,e,0]),this.matching_blocks=_,this.matching_blocks},t.prototype.get_opcodes=function(){if(null!=this.opcodes)return this.opcodes;var t=0,e=0,n=[];this.opcodes=n;for(var r=this.get_matching_blocks(),a=0;a<r.length;a++){var o=r[a],s=o[0],i=o[1],l=o[2],u="";t<s&&e<i?u="replace":t<s?u="delete":e<i&&(u="insert"),u&&n.push([u,t,s,e,i]),t=s+l,e=i+l,l&&n.push(["equal",s,t,i,e])}return n},t.prototype.text_diff=function(t){for(var e=this.get_opcodes(),n=[],r=[],a=[],o=0,s=-1,i=0;i<e.length;i++){var l=e[i];if("equal"!==l[0]){var u=l[1],c=l[3],p=l[2]-1,h=l[4]-1,f=Math.min(u,c),d=Math.max(p,h),g="";switch(l[0]){case"delete":g=" < ";break;case"insert":g=" > ";break;case"replace":g=" | "}for(var v=Math.max(s+1,f-t);v<f;v++){var _=v+": ";v<this.a.length?(r.push(_+this.a[v]),o=Math.max(o,this.a[v].length+_.length)):r.push(_),v<this.b.length?a.push(this.b[v]):a.push(""),n.push("   ")}for(var v=f;v<=d;v++){var _=v+": ";v>=u&&v<=p?(r.push(_+this.a[v]),o=Math.max(o,this.a[v].length+_.length)):r.push(_),v>=c&&v<=h?a.push(this.b[v]):a.push(""),n.push(g)}s=d}}for(var v=0;v<n.length;v++){var m=r[v],T=a[v];m.length<o&&(m+=Array(o-m.length+1).join(" ")),n[v]=m+n[v]+T}return n},t}();e.SequenceMatcher=o},function(t,e,n){"use strict";var r=n(5);e.JVM=r;var a=n(48);e.CLI=a;var o=n(50);e.ClassFile=o;var s=n(14);e.Threading=s;var i=n(8);e.Long=i;var l=n(7);e.Util=l;var u=n(9);e.Enums=u;var c=n(51);e.Interfaces=c;var p=n(25);e.Monitor=p;var h=n(52);e.FDState=h["default"]},function(t,e,n){(function(e){"use strict";function r(t,n,r,i){void 0===i&&(i=function(t){});var u,h=p.parse(t),f=h["default"],d=h.X;if(n.properties=f.mapOption("D"),f.flag("help",!1))return o(n.launcherName,p.help("default"),r,0);if(f.flag("X",!1))return s(n.launcherName,p.help("X"),r,0);var g=d.stringOption("log","ERROR");if(n.intMode=d.flag("int",!1),n.dumpJITStats=d.flag("dump-JIT-stats",!1),/^[0-9]+$/.test(g))c.log_level=parseInt(g,10);else{var v=c[g.toUpperCase()];if(null==v)return e.stderr.write("Unrecognized log level: "+g+"."),o(n.launcherName,p.help("default"),r,1);c.log_level=v}d.flag("list-class-cache",!1)&&(r=function(t){return function(n){var r=u.getBootstrapClassLoader().getLoadedClassFiles();e.stdout.write(r.join("\n")+"\n"),t(n)}}(r)),f.flag("enablesystemassertions",!1)&&(n.enableSystemAssertions=!0),f.flag("disablesystemassertions",!1)&&(n.enableSystemAssertions=!1),f.flag("enableassertions",!1)?n.enableAssertions=!0:f.stringOption("enableassertions",null)&&(n.enableAssertions=f.stringOption("enableassertions",null).split(":")),f.stringOption("disableassertions",null)&&(n.disableAssertions=f.stringOption("disableassertions",null).split(":"));var _=d.stringOption("bootclasspath",null);null!==_&&(n.bootstrapClasspath=_.split(":"));var m=d.stringOption("bootclasspath/a",null);m&&(n.bootstrapClasspath=n.bootstrapClasspath.concat(m.split(":")));var T=d.stringOption("bootclasspath/p",null);T&&(n.bootstrapClasspath=T.split(":").concat(n.bootstrapClasspath)),n.classpath||(n.classpath=[]),f.stringOption("jar",null)?n.classpath.push(f.stringOption("jar",null)):f.stringOption("classpath",null)?n.classpath=n.classpath.concat(f.stringOption("classpath",null).split(":")):n.classpath.push(e.cwd());var y=f.stringOption("native-classpath",null);y&&(n.nativeClasspath=n.nativeClasspath.concat(y.split(":"))),u=new l(n,function(t){t?(e.stderr.write("Error constructing JVM:\n"),e.stderr.write(""+t+"\n"),r(1)):a(f,n,u,r,i)}),u.setPrintJITCompilation(d.flag("X:+PrintCompilation",!1));var I=d.stringOption("vtrace-methods",null);I&&I.split(":").forEach(function(t){return u.vtraceMethod(t)});var E=d.stringOption("dump-compiled-code",null);E&&u.dumpCompiledCode(E)}function a(t,e,n,r,a){var s=t.unparsedArgs();if(t.stringOption("jar",null))n.runJar(s,r),a(n);else if(s.length>0){var i=s[0];".class"===i.slice(-6)&&(i=i.slice(0,-6)),i.indexOf(".")!==-1&&(i=u.descriptor2typestr(u.int_classname(i))),n.runClass(i,s.slice(1),r),a(n)}else o(e.launcherName,p.help("default"),r,0)}function o(t,n,r,a){e.stdout.write("Usage: "+t+" [-options] class [args...]\n        (to execute a class)\nor  "+t+" [-options] -jar jarfile [args...]\n        (to execute a jar file)\nwhere options include:\n"+n),r(a)}function s(t,n,r,a){e.stdout.write(n+"\n\nThe -X options are non-standard and subject to change without notice.\n"),r(a)}var i=n(49),l=n(5),u=n(7),c=n(16),p=new i.OptionParser({"default":{classpath:{type:3,alias:"cp",optDesc:" <class search path of directories and zip/jar files>",desc:"A : separated list of directories, JAR archives, and ZIP archives to search for class files."},D:{type:4,optDesc:"<name>=<value>",desc:"set a system property"},jar:{type:3,stopParsing:!0},help:{alias:"?",desc:"print this help message"},X:{desc:"print help on non-standard options"},enableassertions:{type:2,optDesc:"[:<packagename>...|:<classname>]",alias:"ea",desc:"enable assertions with specified granularity"},disableassertions:{type:2,optDesc:"[:<packagename>...|:<classname>]",alias:"da",desc:"disable assertions with specified granularity"},enablesystemassertions:{alias:"esa",desc:"enable system assertions"},disablesystemassertions:{alias:"dsa",desc:"disable system assertions "}},X:{"int":{desc:"interpreted mode execution only"},"dump-JIT-stats":{desc:"dump JIT statistics",enabled:!1},log:{desc:"log level, [0-10]|vtrace|trace|debug|error",type:3,enabled:!1},"vtrace-methods":{type:3,optDesc:" <java/lang/Object/getHashCode()I:...>",desc:"specify particular methods to vtrace separated by colons",enabled:!1},"list-class-cache":{desc:"list all of the bootstrap loaded classes after execution"},"dump-compiled-code":{type:3,optDesc:" <directory>",desc:"location to dump compiled object definitions",enabled:!1},"native-classpath":{type:3,optDesc:" <class search path of directories>",desc:"A : separated list of directories to search for native mathods in JS files."},"bootclasspath/a":{type:1,optDesc:":<directories and zip/jar files separated by :>",desc:"append to end of bootstrap class path"},"bootclasspath/p":{type:1,optDesc:":<directories and zip/jar files separated by :>",desc:"prepend in front of bootstrap class path"},bootclasspath:{type:1,optDesc:":<directories and zip/jar files separated by :>",desc:"set search path for bootstrap classes and resources"},"X:+PrintCompilation":{desc:"Print JIT compilation details",enabled:!1}}});t.exports=r}).call(e,n(3))},function(t,e){"use strict";function n(t,e){return"default"!==t?""+t+e:e}function r(t,e){for(var n=t,r=e-t.length;r-- >0;)n+=" ";return n}function a(t,e){var n={},a=13;return Object.keys(t).forEach(function(r){var a=t[r];if(!a.stopParsing){var o=[r];null!=a.alias&&o.push(a.alias);var s;s=a.optDesc?o.map(function(t){return"-"+e+t+a.optDesc}).join("\n"):o.map(function(t){return"-"+e+t}).join(" | "),n[s]=a}}),Object.keys(n).map(function(t){var e=n[t];if(e.optDesc){var o=t.split("\n"),s=o.map(function(t){return"    "+t});return s.join("\n")+"\n                  "+e.desc}var i=r(t,a);return i.length===a?"    "+i+" "+e.desc:"    "+i+"\n                  "+e.desc}).join("\n")+"\n"}var o=function(){function t(t,e){void 0===e&&(e=[]),this._result=t,this._unparsedArgs=e}return t.prototype.unparsedArgs=function(){return this._unparsedArgs},t.prototype.flag=function(t,e){var n=this._result[t];return"boolean"==typeof n?n:e},t.prototype.stringOption=function(t,e){var n=this._result[t];return"string"==typeof n?n:e},t.prototype.mapOption=function(t){var e=this._result[t];return"object"==typeof e?e:{}},t}();e.PrefixParseResult=o;var s=function(){function t(t){var e=this;this._parseMap={},this._prefixes=[],this._mapArgs=[],this._rawDesc=t,this._prefixes=Object.keys(t),this._prefixes.forEach(function(r){var a=t[r],o=Object.keys(a);o.slice(0).forEach(function(s){var i=a[s];return i.enabled===!1?void delete t[r][s]:(i.type||(i.type=0),4===i.type&&e._mapArgs.push(s),i.prefix=r,i.name=s,e._parseMap[n(r,s)]=i,void(i.alias&&(o.push(i.alias),e._parseMap[n(r,i.alias)]=i)))})})}return t.prototype.parse=function(t){var e,n=this,r={},a=0;for(this._prefixes.forEach(function(t){return r[t]={}}),t=t.map(function(t){return t.trim()}).filter(function(t){return""!==t}),e=t.length;a<e;){var s=t[a];if("-"!==s[0])break;s=s.slice(1);var i;if(i=this._parseMap[s])switch(i.type){case 0:case 2:r[i.prefix][i.name]=!0;break;case 3:case 1:if(a++,!(a<e))throw Error("-"+s+" requires an argument.");r[i.prefix][i.name]=t[a];break;case 4:break;default:throw Error("INTERNAL ERROR: Invalid parse type for -"+s+".")}else if(this._mapArgs.filter(function(t){return s.slice(0,t.length)===t&&(i=n._parseMap[t],!0)}).length>0){var l=s.slice(i.name.length),u=r[i.prefix][i.name];u||(u=r[i.prefix][i.name]={});var c=l.indexOf("=");c!==-1?u[l.slice(0,c)]=l.slice(c+1):u[l]=""}else{if(s.indexOf(":")===-1||!(i=this._parseMap[s.slice(0,s.indexOf(":"))]))throw Error("Unrecognized option: -"+s);if(1!==i.type&&2!==i.type)throw Error("Unrecognized option: -"+s);r[i.prefix][i.name]=s.slice(s.indexOf(":")+1)}if(i.stopParsing){a++;break}a++}var p=t.slice(a),h={};return Object.keys(r).forEach(function(t){h[t]=new o(r[t],p)}),h},t.prototype.help=function(t){return a(this._rawDesc[t],"default"===t?"":t)},t}();e.OptionParser=s},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}var a=n(23);e.ConstantPool=a;var o=n(12);e.Attributes=o,r(n(21)),r(n(11)),r(n(20)),r(n(26))},function(t,e){"use strict"},function(t,e){"use strict";var n=function(){function t(){}return t.open=function(t,e){this._positions[t]=e},t.getPos=function(t){return this._positions[t]},t.incrementPos=function(t,e){this._positions[t]+=e},t.setPos=function(t,e){this._positions[t]=e},t.close=function(t){delete this._positions[t]},t._positions={},t}();e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var r=n(13);e.Assert=r;var a=n(16);e.Logging=a;var o=n(46);e.Difflib=o}])});

},{"browserfs":2}],2:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.BrowserFS = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (process,global){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.async = global.async || {})));
}(this, function (exports) { 'use strict';

    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */
    function apply(func, thisArg, args) {
      var length = args.length;
      switch (length) {
        case 0: return func.call(thisArg);
        case 1: return func.call(thisArg, args[0]);
        case 2: return func.call(thisArg, args[0], args[1]);
        case 3: return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    var funcTag = '[object Function]';
    var genTag = '[object GeneratorFunction]';
    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8 which returns 'object' for typed array and weak map constructors,
      // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used for built-in method references. */
    var objectProto$1 = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString$1 = objectProto$1.toString;

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
    }

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = isFunction(value.valueOf) ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    var INFINITY = 1 / 0;
    var MAX_INTEGER = 1.7976931348623157e+308;
    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max;

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        switch (start) {
          case 0: return func.call(this, array);
          case 1: return func.call(this, args[0], array);
          case 2: return func.call(this, args[0], args[1], array);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }

    function initialParams (fn) {
        return rest(function (args /*..., callback*/) {
            var callback = args.pop();
            fn.call(this, args, callback);
        });
    }

    function applyEach$1(eachfn) {
        return rest(function (fns, args) {
            var go = initialParams(function (args, callback) {
                var that = this;
                return eachfn(fns, function (fn, cb) {
                    fn.apply(that, args.concat([cb]));
                }, callback);
            });
            if (args.length) {
                return go.apply(this, args);
            } else {
                return go;
            }
        });
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a
     * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
     * Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length,
     *  else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(getLength(value)) && !isFunction(value);
    }

    /**
     * A method that returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    function once(fn) {
        return function () {
            if (fn === null) return;
            var callFn = fn;
            fn = null;
            callFn.apply(this, arguments);
        };
    }

    var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

    function getIterator (coll) {
        return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeGetPrototype = Object.getPrototypeOf;

    /**
     * Gets the `[[Prototype]]` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {null|Object} Returns the `[[Prototype]]`.
     */
    function getPrototype(value) {
      return nativeGetPrototype(Object(value));
    }

    /** Used for built-in method references. */
    var objectProto$2 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto$2.hasOwnProperty;

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
      // that are composed entirely of index properties, return `false` for
      // `hasOwnProperty` checks of them.
      return object != null &&
        (hasOwnProperty.call(object, key) ||
          (typeof object == 'object' && key in object && getPrototype(object) === null));
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = Object.keys;

    /**
     * The base implementation of `_.keys` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      return nativeKeys(Object(object));
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]';

    /** Used for built-in method references. */
    var objectProto$3 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString$2 = objectProto$3.toString;

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @type {Function}
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /** `Object#toString` result references. */
    var stringTag = '[object String]';

    /** Used for built-in method references. */
    var objectProto$4 = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString$3 = objectProto$4.toString;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified,
     *  else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && objectToString$3.call(value) == stringTag);
    }

    /**
     * Creates an array of index keys for `object` values of arrays,
     * `arguments` objects, and strings, otherwise `null` is returned.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array|null} Returns index keys, else `null`.
     */
    function indexKeys(object) {
      var length = object ? object.length : undefined;
      if (isLength(length) &&
          (isArray(object) || isString(object) || isArguments(object))) {
        return baseTimes(length, String);
      }
      return null;
    }

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER$1 = 9007199254740991;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER$1 : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /** Used for built-in method references. */
    var objectProto$5 = Object.prototype;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

      return value === proto;
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      var isProto = isPrototype(object);
      if (!(isProto || isArrayLike(object))) {
        return baseKeys(object);
      }
      var indexes = indexKeys(object),
          skipIndexes = !!indexes,
          result = indexes || [],
          length = result.length;

      for (var key in object) {
        if (baseHas(object, key) &&
            !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
            !(isProto && key == 'constructor')) {
          result.push(key);
        }
      }
      return result;
    }

    function createArrayIterator(coll) {
        var i = -1;
        var len = coll.length;
        return function next() {
            return ++i < len ? { value: coll[i], key: i } : null;
        };
    }

    function createES2015Iterator(iterator) {
        var i = -1;
        return function next() {
            var item = iterator.next();
            if (item.done) return null;
            i++;
            return { value: item.value, key: i };
        };
    }

    function createObjectIterator(obj) {
        var okeys = keys(obj);
        var i = -1;
        var len = okeys.length;
        return function next() {
            var key = okeys[++i];
            return i < len ? { value: obj[key], key: key } : null;
        };
    }

    function iterator(coll) {
        if (isArrayLike(coll)) {
            return createArrayIterator(coll);
        }

        var iterator = getIterator(coll);
        return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
    }

    function onlyOnce(fn) {
        return function () {
            if (fn === null) throw new Error("Callback was already called.");
            var callFn = fn;
            fn = null;
            callFn.apply(this, arguments);
        };
    }

    function _eachOfLimit(limit) {
        return function (obj, iteratee, callback) {
            callback = once(callback || noop);
            if (limit <= 0 || !obj) {
                return callback(null);
            }
            var nextElem = iterator(obj);
            var done = false;
            var running = 0;

            function iterateeCallback(err) {
                running -= 1;
                if (err) {
                    done = true;
                    callback(err);
                } else if (done && running <= 0) {
                    return callback(null);
                } else {
                    replenish();
                }
            }

            function replenish() {
                while (running < limit && !done) {
                    var elem = nextElem();
                    if (elem === null) {
                        done = true;
                        if (running <= 0) {
                            callback(null);
                        }
                        return;
                    }
                    running += 1;
                    iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
                }
            }

            replenish();
        };
    }

    /**
     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name eachOfLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.eachOf]{@link module:Collections.eachOf}
     * @alias forEachOfLimit
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A function to apply to each
     * item in `coll`. The `key` is the item's key, or index in the case of an
     * array. The iteratee is passed a `callback(err)` which must be called once it
     * has completed. If no error has occurred, the callback should be run without
     * arguments or with an explicit `null` argument. Invoked with
     * (item, key, callback).
     * @param {Function} [callback] - A callback which is called when all
     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
     */
    function eachOfLimit(coll, limit, iteratee, callback) {
      _eachOfLimit(limit)(coll, iteratee, callback);
    }

    function doLimit(fn, limit) {
        return function (iterable, iteratee, callback) {
            return fn(iterable, limit, iteratee, callback);
        };
    }

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT$1 = 'Expected a function';

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => allows adding up to 4 contacts to the list
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` invokes `createApplication` once
     */
    function once$1(func) {
      return before(2, func);
    }

    // eachOf implementation optimized for array-likes
    function eachOfArrayLike(coll, iteratee, callback) {
        callback = once$1(callback || noop);
        var index = 0,
            completed = 0,
            length = coll.length;
        if (length === 0) {
            callback(null);
        }

        function iteratorCallback(err) {
            if (err) {
                callback(err);
            } else if (++completed === length) {
                callback(null);
            }
        }

        for (; index < length; index++) {
            iteratee(coll[index], index, onlyOnce(iteratorCallback));
        }
    }

    // a generic version of eachOf which can handle array, object, and iterator cases.
    var eachOfGeneric = doLimit(eachOfLimit, Infinity);

    /**
     * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
     * to the iteratee.
     *
     * @name eachOf
     * @static
     * @memberOf module:Collections
     * @method
     * @alias forEachOf
     * @category Collection
     * @see [async.each]{@link module:Collections.each}
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each
     * item in `coll`. The `key` is the item's key, or index in the case of an
     * array. The iteratee is passed a `callback(err)` which must be called once it
     * has completed. If no error has occurred, the callback should be run without
     * arguments or with an explicit `null` argument. Invoked with
     * (item, key, callback).
     * @param {Function} [callback] - A callback which is called when all
     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
     * @example
     *
     * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
     * var configs = {};
     *
     * async.forEachOf(obj, function (value, key, callback) {
     *     fs.readFile(__dirname + value, "utf8", function (err, data) {
     *         if (err) return callback(err);
     *         try {
     *             configs[key] = JSON.parse(data);
     *         } catch (e) {
     *             return callback(e);
     *         }
     *         callback();
     *     });
     * }, function (err) {
     *     if (err) console.error(err.message);
     *     // configs is now a map of JSON data
     *     doSomethingWith(configs);
     * });
     */
    function eachOf (coll, iteratee, callback) {
        var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
        eachOfImplementation(coll, iteratee, callback);
    }

    function doParallel(fn) {
        return function (obj, iteratee, callback) {
            return fn(eachOf, obj, iteratee, callback);
        };
    }

    function _asyncMap(eachfn, arr, iteratee, callback) {
        callback = once(callback || noop);
        arr = arr || [];
        var results = [];
        var counter = 0;

        eachfn(arr, function (value, _, callback) {
            var index = counter++;
            iteratee(value, function (err, v) {
                results[index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    }

    /**
     * Produces a new collection of values by mapping each value in `coll` through
     * the `iteratee` function. The `iteratee` is called with an item from `coll`
     * and a callback for when it has finished processing. Each of these callback
     * takes 2 arguments: an `error`, and the transformed item from `coll`. If
     * `iteratee` passes an error to its callback, the main `callback` (for the
     * `map` function) is immediately called with the error.
     *
     * Note, that since this function applies the `iteratee` to each item in
     * parallel, there is no guarantee that the `iteratee` functions will complete
     * in order. However, the results array will be in the same order as the
     * original `coll`.
     *
     * If `map` is passed an Object, the results will be an Array.  The results
     * will roughly be in the order of the original Objects' keys (but this can
     * vary across JavaScript engines)
     *
     * @name map
     * @static
     * @memberOf module:Collections
     * @method
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, transformed)` which must be called
     * once it has completed with an error (which can be `null`) and a
     * transformed item. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Results is an Array of the
     * transformed items from the `coll`. Invoked with (err, results).
     * @example
     *
     * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
     *     // results is now an array of stats for each file
     * });
     */
    var map = doParallel(_asyncMap);

    /**
     * Applies the provided arguments to each function in the array, calling
     * `callback` after all functions have completed. If you only provide the first
     * argument, then it will return a function which lets you pass in the
     * arguments as if it were a single function call.
     *
     * @name applyEach
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
     * call with the same arguments
     * @param {...*} [args] - any number of separate arguments to pass to the
     * function.
     * @param {Function} [callback] - the final argument should be the callback,
     * called when all functions have completed processing.
     * @returns {Function} - If only the first argument is provided, it will return
     * a function which lets you pass in the arguments as if it were a single
     * function call.
     * @example
     *
     * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
     *
     * // partial application example:
     * async.each(
     *     buckets,
     *     async.applyEach([enableSearch, updateSchema]),
     *     callback
     * );
     */
    var applyEach = applyEach$1(map);

    function doParallelLimit(fn) {
        return function (obj, limit, iteratee, callback) {
            return fn(_eachOfLimit(limit), obj, iteratee, callback);
        };
    }

    /**
     * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
     *
     * @name mapLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.map]{@link module:Collections.map}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, transformed)` which must be called
     * once it has completed with an error (which can be `null`) and a transformed
     * item. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Results is an array of the
     * transformed items from the `coll`. Invoked with (err, results).
     */
    var mapLimit = doParallelLimit(_asyncMap);

    /**
     * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
     *
     * @name mapSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.map]{@link module:Collections.map}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, transformed)` which must be called
     * once it has completed with an error (which can be `null`) and a
     * transformed item. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Results is an array of the
     * transformed items from the `coll`. Invoked with (err, results).
     */
    var mapSeries = doLimit(mapLimit, 1);

    /**
     * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
     *
     * @name applyEachSeries
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.applyEach]{@link module:ControlFlow.applyEach}
     * @category Control Flow
     * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
     * call with the same arguments
     * @param {...*} [args] - any number of separate arguments to pass to the
     * function.
     * @param {Function} [callback] - the final argument should be the callback,
     * called when all functions have completed processing.
     * @returns {Function} - If only the first argument is provided, it will return
     * a function which lets you pass in the arguments as if it were a single
     * function call.
     */
    var applyEachSeries = applyEach$1(mapSeries);

    /**
     * Creates a continuation function with some arguments already applied.
     *
     * Useful as a shorthand when combined with other control flow functions. Any
     * arguments passed to the returned function are added to the arguments
     * originally passed to apply.
     *
     * @name apply
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} function - The function you want to eventually apply all
     * arguments to. Invokes with (arguments...).
     * @param {...*} arguments... - Any number of arguments to automatically apply
     * when the continuation is called.
     * @example
     *
     * // using apply
     * async.parallel([
     *     async.apply(fs.writeFile, 'testfile1', 'test1'),
     *     async.apply(fs.writeFile, 'testfile2', 'test2')
     * ]);
     *
     *
     * // the same process without using apply
     * async.parallel([
     *     function(callback) {
     *         fs.writeFile('testfile1', 'test1', callback);
     *     },
     *     function(callback) {
     *         fs.writeFile('testfile2', 'test2', callback);
     *     }
     * ]);
     *
     * // It's possible to pass any number of additional arguments when calling the
     * // continuation:
     *
     * node> var fn = async.apply(sys.puts, 'one');
     * node> fn('two', 'three');
     * one
     * two
     * three
     */
    var apply$1 = rest(function (fn, args) {
        return rest(function (callArgs) {
            return fn.apply(null, args.concat(callArgs));
        });
    });

    /**
     * Take a sync function and make it async, passing its return value to a
     * callback. This is useful for plugging sync functions into a waterfall,
     * series, or other async functions. Any arguments passed to the generated
     * function will be passed to the wrapped function (except for the final
     * callback argument). Errors thrown will be passed to the callback.
     *
     * If the function passed to `asyncify` returns a Promise, that promises's
     * resolved/rejected state will be used to call the callback, rather than simply
     * the synchronous return value.
     *
     * This also means you can asyncify ES2016 `async` functions.
     *
     * @name asyncify
     * @static
     * @memberOf module:Utils
     * @method
     * @alias wrapSync
     * @category Util
     * @param {Function} func - The synchronous function to convert to an
     * asynchronous function.
     * @returns {Function} An asynchronous wrapper of the `func`. To be invoked with
     * (callback).
     * @example
     *
     * // passing a regular synchronous function
     * async.waterfall([
     *     async.apply(fs.readFile, filename, "utf8"),
     *     async.asyncify(JSON.parse),
     *     function (data, next) {
     *         // data is the result of parsing the text.
     *         // If there was a parsing error, it would have been caught.
     *     }
     * ], callback);
     *
     * // passing a function returning a promise
     * async.waterfall([
     *     async.apply(fs.readFile, filename, "utf8"),
     *     async.asyncify(function (contents) {
     *         return db.model.create(contents);
     *     }),
     *     function (model, next) {
     *         // `model` is the instantiated model object.
     *         // If there was an error, this function would be skipped.
     *     }
     * ], callback);
     *
     * // es6 example
     * var q = async.queue(async.asyncify(async function(file) {
     *     var intermediateStep = await processFile(file);
     *     return await somePromise(intermediateStep)
     * }));
     *
     * q.push(files);
     */
    function asyncify(func) {
        return initialParams(function (args, callback) {
            var result;
            try {
                result = func.apply(this, args);
            } catch (e) {
                return callback(e);
            }
            // if result is Promise object
            if (isObject(result) && typeof result.then === 'function') {
                result.then(function (value) {
                    callback(null, value);
                }, function (err) {
                    callback(err.message ? err : new Error(err));
                });
            } else {
                callback(null, result);
            }
        });
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * Gets the index at which the first occurrence of `NaN` is found in `array`.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched `NaN`, else `-1`.
     */
    function indexOfNaN(array, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);

      while ((fromRight ? index-- : ++index < length)) {
        var other = array[index];
        if (other !== other) {
          return index;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return indexOfNaN(array, fromIndex);
      }
      var index = fromIndex - 1,
          length = array.length;

      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Determines the best order for running the functions in `tasks`, based on
     * their requirements. Each function can optionally depend on other functions
     * being completed first, and each function is run as soon as its requirements
     * are satisfied.
     *
     * If any of the functions pass an error to their callback, the `auto` sequence
     * will stop. Further tasks will not execute (so any other functions depending
     * on it will not run), and the main `callback` is immediately called with the
     * error.
     *
     * Functions also receive an object containing the results of functions which
     * have completed so far as the first argument, if they have dependencies. If a
     * task function has no dependencies, it will only be passed a callback.
     *
     * @name auto
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Object} tasks - An object. Each of its properties is either a
     * function or an array of requirements, with the function itself the last item
     * in the array. The object's key of a property serves as the name of the task
     * defined by that property, i.e. can be used when specifying requirements for
     * other tasks. The function receives one or two arguments:
     * * a `results` object, containing the results of the previously executed
     *   functions, only passed if the task has any dependencies,
     * * a `callback(err, result)` function, which must be called when finished,
     *   passing an `error` (which can be `null`) and the result of the function's
     *   execution.
     * @param {number} [concurrency=Infinity] - An optional `integer` for
     * determining the maximum number of tasks that can be run in parallel. By
     * default, as many as possible.
     * @param {Function} [callback] - An optional callback which is called when all
     * the tasks have been completed. It receives the `err` argument if any `tasks`
     * pass an error to their callback. Results are always returned; however, if an
     * error occurs, no further `tasks` will be performed, and the results object
     * will only contain partial results. Invoked with (err, results).
     * @returns undefined
     * @example
     *
     * async.auto({
     *     // this function will just be passed a callback
     *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
     *     showData: ['readData', function(results, cb) {
     *         // results.readData is the file's contents
     *         // ...
     *     }]
     * }, callback);
     *
     * async.auto({
     *     get_data: function(callback) {
     *         console.log('in get_data');
     *         // async code to get some data
     *         callback(null, 'data', 'converted to array');
     *     },
     *     make_folder: function(callback) {
     *         console.log('in make_folder');
     *         // async code to create a directory to store a file in
     *         // this is run at the same time as getting the data
     *         callback(null, 'folder');
     *     },
     *     write_file: ['get_data', 'make_folder', function(results, callback) {
     *         console.log('in write_file', JSON.stringify(results));
     *         // once there is some data and the directory exists,
     *         // write the data to a file in the directory
     *         callback(null, 'filename');
     *     }],
     *     email_link: ['write_file', function(results, callback) {
     *         console.log('in email_link', JSON.stringify(results));
     *         // once the file is written let's email a link to it...
     *         // results.write_file contains the filename returned by write_file.
     *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
     *     }]
     * }, function(err, results) {
     *     console.log('err = ', err);
     *     console.log('results = ', results);
     * });
     */
    function auto (tasks, concurrency, callback) {
        if (typeof concurrency === 'function') {
            // concurrency is optional, shift the args.
            callback = concurrency;
            concurrency = null;
        }
        callback = once(callback || noop);
        var keys$$ = keys(tasks);
        var numTasks = keys$$.length;
        if (!numTasks) {
            return callback(null);
        }
        if (!concurrency) {
            concurrency = numTasks;
        }

        var results = {};
        var runningTasks = 0;
        var hasError = false;

        var listeners = {};

        var readyTasks = [];

        // for cycle detection:
        var readyToCheck = []; // tasks that have been identified as reachable
        // without the possibility of returning to an ancestor task
        var uncheckedDependencies = {};

        baseForOwn(tasks, function (task, key) {
            if (!isArray(task)) {
                // no dependencies
                enqueueTask(key, [task]);
                readyToCheck.push(key);
                return;
            }

            var dependencies = task.slice(0, task.length - 1);
            var remainingDependencies = dependencies.length;
            if (remainingDependencies === 0) {
                enqueueTask(key, task);
                readyToCheck.push(key);
                return;
            }
            uncheckedDependencies[key] = remainingDependencies;

            arrayEach(dependencies, function (dependencyName) {
                if (!tasks[dependencyName]) {
                    throw new Error('async.auto task `' + key + '` has a non-existent dependency in ' + dependencies.join(', '));
                }
                addListener(dependencyName, function () {
                    remainingDependencies--;
                    if (remainingDependencies === 0) {
                        enqueueTask(key, task);
                    }
                });
            });
        });

        checkForDeadlocks();
        processQueue();

        function enqueueTask(key, task) {
            readyTasks.push(function () {
                runTask(key, task);
            });
        }

        function processQueue() {
            if (readyTasks.length === 0 && runningTasks === 0) {
                return callback(null, results);
            }
            while (readyTasks.length && runningTasks < concurrency) {
                var run = readyTasks.shift();
                run();
            }
        }

        function addListener(taskName, fn) {
            var taskListeners = listeners[taskName];
            if (!taskListeners) {
                taskListeners = listeners[taskName] = [];
            }

            taskListeners.push(fn);
        }

        function taskComplete(taskName) {
            var taskListeners = listeners[taskName] || [];
            arrayEach(taskListeners, function (fn) {
                fn();
            });
            processQueue();
        }

        function runTask(key, task) {
            if (hasError) return;

            var taskCallback = onlyOnce(rest(function (err, args) {
                runningTasks--;
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    baseForOwn(results, function (val, rkey) {
                        safeResults[rkey] = val;
                    });
                    safeResults[key] = args;
                    hasError = true;
                    listeners = [];

                    callback(err, safeResults);
                } else {
                    results[key] = args;
                    taskComplete(key);
                }
            }));

            runningTasks++;
            var taskFn = task[task.length - 1];
            if (task.length > 1) {
                taskFn(results, taskCallback);
            } else {
                taskFn(taskCallback);
            }
        }

        function checkForDeadlocks() {
            // Kahn's algorithm
            // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
            // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
            var currentTask;
            var counter = 0;
            while (readyToCheck.length) {
                currentTask = readyToCheck.pop();
                counter++;
                arrayEach(getDependents(currentTask), function (dependent) {
                    if (--uncheckedDependencies[dependent] === 0) {
                        readyToCheck.push(dependent);
                    }
                });
            }

            if (counter !== numTasks) {
                throw new Error('async.auto cannot execute tasks due to a recursive dependency');
            }
        }

        function getDependents(taskName) {
            var result = [];
            baseForOwn(tasks, function (task, key) {
                if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                    result.push(key);
                }
            });
            return result;
        }
    }

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Checks if `value` is a global object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {null|Object} Returns `value` if it's a global object, else `null`.
     */
    function checkGlobal(value) {
      return (value && value.Object === Object) ? value : null;
    }

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = checkGlobal(typeof global == 'object' && global);

    /** Detect free variable `self`. */
    var freeSelf = checkGlobal(typeof self == 'object' && self);

    /** Detect `this` as the global object. */
    var thisGlobal = checkGlobal(typeof this == 'object' && this);

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

    /** Built-in value references. */
    var Symbol$1 = root.Symbol;

    /** Used as references for various `Number` constants. */
    var INFINITY$1 = 1 / 0;

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
    var symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the last unmatched string symbol.
     */
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;

      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
      return index;
    }

    /**
     * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the first unmatched string symbol.
     */
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1,
          length = strSymbols.length;

      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
      return index;
    }

    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff';
    var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
    var rsComboSymbolsRange = '\\u20d0-\\u20f0';
    var rsVarRange = '\\ufe0e\\ufe0f';
    var rsAstral = '[' + rsAstralRange + ']';
    var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
    var rsFitz = '\\ud83c[\\udffb-\\udfff]';
    var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
    var rsNonAstral = '[^' + rsAstralRange + ']';
    var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
    var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
    var rsZWJ = '\\u200d';
    var reOptMod = rsModifier + '?';
    var rsOptVar = '[' + rsVarRange + ']?';
    var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
    var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

    /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function stringToArray(string) {
      return string.match(reComplexSymbol);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /** Used to match leading and trailing whitespace. */
    var reTrim$1 = /^\s+|\s+$/g;

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim$1, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    var FN_ARGS = /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /(=.+)?(\s*)$/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

    function parseParams(func) {
        func = func.toString().replace(STRIP_COMMENTS, '');
        func = func.match(FN_ARGS)[2].replace(' ', '');
        func = func ? func.split(FN_ARG_SPLIT) : [];
        func = func.map(function (arg) {
            return trim(arg.replace(FN_ARG, ''));
        });
        return func;
    }

    /**
     * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
     * tasks are specified as parameters to the function, after the usual callback
     * parameter, with the parameter names matching the names of the tasks it
     * depends on. This can provide even more readable task graphs which can be
     * easier to maintain.
     *
     * If a final callback is specified, the task results are similarly injected,
     * specified as named parameters after the initial error parameter.
     *
     * The autoInject function is purely syntactic sugar and its semantics are
     * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
     *
     * @name autoInject
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.auto]{@link module:ControlFlow.auto}
     * @category Control Flow
     * @param {Object} tasks - An object, each of whose properties is a function of
     * the form 'func([dependencies...], callback). The object's key of a property
     * serves as the name of the task defined by that property, i.e. can be used
     * when specifying requirements for other tasks.
     * * The `callback` parameter is a `callback(err, result)` which must be called
     *   when finished, passing an `error` (which can be `null`) and the result of
     *   the function's execution. The remaining parameters name other tasks on
     *   which the task is dependent, and the results from those tasks are the
     *   arguments of those parameters.
     * @param {Function} [callback] - An optional callback which is called when all
     * the tasks have been completed. It receives the `err` argument if any `tasks`
     * pass an error to their callback, and a `results` object with any completed
     * task results, similar to `auto`.
     * @example
     *
     * //  The example from `auto` can be rewritten as follows:
     * async.autoInject({
     *     get_data: function(callback) {
     *         // async code to get some data
     *         callback(null, 'data', 'converted to array');
     *     },
     *     make_folder: function(callback) {
     *         // async code to create a directory to store a file in
     *         // this is run at the same time as getting the data
     *         callback(null, 'folder');
     *     },
     *     write_file: function(get_data, make_folder, callback) {
     *         // once there is some data and the directory exists,
     *         // write the data to a file in the directory
     *         callback(null, 'filename');
     *     },
     *     email_link: function(write_file, callback) {
     *         // once the file is written let's email a link to it...
     *         // write_file contains the filename returned by write_file.
     *         callback(null, {'file':write_file, 'email':'user@example.com'});
     *     }
     * }, function(err, results) {
     *     console.log('err = ', err);
     *     console.log('email_link = ', results.email_link);
     * });
     *
     * // If you are using a JS minifier that mangles parameter names, `autoInject`
     * // will not work with plain functions, since the parameter names will be
     * // collapsed to a single letter identifier.  To work around this, you can
     * // explicitly specify the names of the parameters your task function needs
     * // in an array, similar to Angular.js dependency injection.
     *
     * // This still has an advantage over plain `auto`, since the results a task
     * // depends on are still spread into arguments.
     * async.autoInject({
     *     //...
     *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
     *         callback(null, 'filename');
     *     }],
     *     email_link: ['write_file', function(write_file, callback) {
     *         callback(null, {'file':write_file, 'email':'user@example.com'});
     *     }]
     *     //...
     * }, function(err, results) {
     *     console.log('err = ', err);
     *     console.log('email_link = ', results.email_link);
     * });
     */
    function autoInject(tasks, callback) {
        var newTasks = {};

        baseForOwn(tasks, function (taskFn, key) {
            var params;

            if (isArray(taskFn)) {
                params = copyArray(taskFn);
                taskFn = params.pop();

                newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
            } else if (taskFn.length === 1) {
                // no dependencies, use the function as-is
                newTasks[key] = taskFn;
            } else {
                params = parseParams(taskFn);
                if (taskFn.length === 0 && params.length === 0) {
                    throw new Error("autoInject task functions require explicit parameters.");
                }

                params.pop();

                newTasks[key] = params.concat(newTask);
            }

            function newTask(results, taskCb) {
                var newArgs = arrayMap(params, function (name) {
                    return results[name];
                });
                newArgs.push(taskCb);
                taskFn.apply(null, newArgs);
            }
        });

        auto(newTasks, callback);
    }

    var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
    var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

    function fallback(fn) {
        setTimeout(fn, 0);
    }

    function wrap(defer) {
        return rest(function (fn, args) {
            defer(function () {
                fn.apply(null, args);
            });
        });
    }

    var _defer;

    if (hasSetImmediate) {
        _defer = setImmediate;
    } else if (hasNextTick) {
        _defer = process.nextTick;
    } else {
        _defer = fallback;
    }

    var setImmediate$1 = wrap(_defer);

    // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
    // used for queues. This implementation assumes that the node provided by the user can be modified
    // to adjust the next and last properties. We implement only the minimal functionality
    // for queue support.
    function DLL() {
        this.head = this.tail = null;
        this.length = 0;
    }

    function setInitial(dll, node) {
        dll.length = 1;
        dll.head = dll.tail = node;
    }

    DLL.prototype.removeLink = function (node) {
        if (node.prev) node.prev.next = node.next;else this.head = node.next;
        if (node.next) node.next.prev = node.prev;else this.tail = node.prev;

        node.prev = node.next = null;
        this.length -= 1;
        return node;
    };

    DLL.prototype.empty = DLL;

    DLL.prototype.insertAfter = function (node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next) node.next.prev = newNode;else this.tail = newNode;
        node.next = newNode;
        this.length += 1;
    };

    DLL.prototype.insertBefore = function (node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        if (node.prev) node.prev.next = newNode;else this.head = newNode;
        node.prev = newNode;
        this.length += 1;
    };

    DLL.prototype.unshift = function (node) {
        if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
    };

    DLL.prototype.push = function (node) {
        if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
    };

    DLL.prototype.shift = function () {
        return this.head && this.removeLink(this.head);
    };

    DLL.prototype.pop = function () {
        return this.tail && this.removeLink(this.tail);
    };

    function queue(worker, concurrency, payload) {
        if (concurrency == null) {
            concurrency = 1;
        } else if (concurrency === 0) {
            throw new Error('Concurrency must not be zero');
        }

        function _insert(data, insertAtFront, callback) {
            if (callback != null && typeof callback !== 'function') {
                throw new Error('task callback must be a function');
            }
            q.started = true;
            if (!isArray(data)) {
                data = [data];
            }
            if (data.length === 0 && q.idle()) {
                // call drain immediately if there are no tasks
                return setImmediate$1(function () {
                    q.drain();
                });
            }
            arrayEach(data, function (task) {
                var item = {
                    data: task,
                    callback: callback || noop
                };

                if (insertAtFront) {
                    q._tasks.unshift(item);
                } else {
                    q._tasks.push(item);
                }
            });
            setImmediate$1(q.process);
        }

        function _next(tasks) {
            return rest(function (args) {
                workers -= 1;

                arrayEach(tasks, function (task) {
                    arrayEach(workersList, function (worker, index) {
                        if (worker === task) {
                            workersList.splice(index, 1);
                            return false;
                        }
                    });

                    task.callback.apply(task, args);

                    if (args[0] != null) {
                        q.error(args[0], task.data);
                    }
                });

                if (workers <= q.concurrency - q.buffer) {
                    q.unsaturated();
                }

                if (q.idle()) {
                    q.drain();
                }
                q.process();
            });
        }

        var workers = 0;
        var workersList = [];
        var q = {
            _tasks: new DLL(),
            concurrency: concurrency,
            payload: payload,
            saturated: noop,
            unsaturated: noop,
            buffer: concurrency / 4,
            empty: noop,
            drain: noop,
            error: noop,
            started: false,
            paused: false,
            push: function (data, callback) {
                _insert(data, false, callback);
            },
            kill: function () {
                q.drain = noop;
                q._tasks.empty();
            },
            unshift: function (data, callback) {
                _insert(data, true, callback);
            },
            process: function () {
                while (!q.paused && workers < q.concurrency && q._tasks.length) {
                    var tasks = [],
                        data = [];
                    var l = q._tasks.length;
                    if (q.payload) l = Math.min(l, q.payload);
                    for (var i = 0; i < l; i++) {
                        var node = q._tasks.shift();
                        tasks.push(node);
                        data.push(node.data);
                    }

                    if (q._tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    workersList.push(tasks[0]);

                    if (workers === q.concurrency) {
                        q.saturated();
                    }

                    var cb = onlyOnce(_next(tasks));
                    worker(data, cb);
                }
            },
            length: function () {
                return q._tasks.length;
            },
            running: function () {
                return workers;
            },
            workersList: function () {
                return workersList;
            },
            idle: function () {
                return q._tasks.length + workers === 0;
            },
            pause: function () {
                q.paused = true;
            },
            resume: function () {
                if (q.paused === false) {
                    return;
                }
                q.paused = false;
                var resumeCount = Math.min(q.concurrency, q._tasks.length);
                // Need to call q.process once per concurrent
                // worker to preserve full concurrency after pause
                for (var w = 1; w <= resumeCount; w++) {
                    setImmediate$1(q.process);
                }
            }
        };
        return q;
    }

    /**
     * A cargo of tasks for the worker function to complete. Cargo inherits all of
     * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
     * @typedef {Object} CargoObject
     * @memberOf module:ControlFlow
     * @property {Function} length - A function returning the number of items
     * waiting to be processed. Invoke like `cargo.length()`.
     * @property {number} payload - An `integer` for determining how many tasks
     * should be process per round. This property can be changed after a `cargo` is
     * created to alter the payload on-the-fly.
     * @property {Function} push - Adds `task` to the `queue`. The callback is
     * called once the `worker` has finished processing the task. Instead of a
     * single task, an array of `tasks` can be submitted. The respective callback is
     * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
     * @property {Function} saturated - A callback that is called when the
     * `queue.length()` hits the concurrency and further tasks will be queued.
     * @property {Function} empty - A callback that is called when the last item
     * from the `queue` is given to a `worker`.
     * @property {Function} drain - A callback that is called when the last item
     * from the `queue` has returned from the `worker`.
     * @property {Function} idle - a function returning false if there are items
     * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
     * @property {Function} pause - a function that pauses the processing of tasks
     * until `resume()` is called. Invoke like `cargo.pause()`.
     * @property {Function} resume - a function that resumes the processing of
     * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
     * @property {Function} kill - a function that removes the `drain` callback and
     * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
     */

    /**
     * Creates a `cargo` object with the specified payload. Tasks added to the
     * cargo will be processed altogether (up to the `payload` limit). If the
     * `worker` is in progress, the task is queued until it becomes available. Once
     * the `worker` has completed some tasks, each callback of those tasks is
     * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
     * for how `cargo` and `queue` work.
     *
     * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
     * at a time, cargo passes an array of tasks to a single worker, repeating
     * when the worker is finished.
     *
     * @name cargo
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.queue]{@link module:ControlFlow.queue}
     * @category Control Flow
     * @param {Function} worker - An asynchronous function for processing an array
     * of queued tasks, which must call its `callback(err)` argument when finished,
     * with an optional `err` argument. Invoked with `(tasks, callback)`.
     * @param {number} [payload=Infinity] - An optional `integer` for determining
     * how many tasks should be processed per round; if omitted, the default is
     * unlimited.
     * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
     * attached as certain properties to listen for specific events during the
     * lifecycle of the cargo and inner queue.
     * @example
     *
     * // create a cargo object with payload 2
     * var cargo = async.cargo(function(tasks, callback) {
     *     for (var i=0; i<tasks.length; i++) {
     *         console.log('hello ' + tasks[i].name);
     *     }
     *     callback();
     * }, 2);
     *
     * // add some items
     * cargo.push({name: 'foo'}, function(err) {
     *     console.log('finished processing foo');
     * });
     * cargo.push({name: 'bar'}, function(err) {
     *     console.log('finished processing bar');
     * });
     * cargo.push({name: 'baz'}, function(err) {
     *     console.log('finished processing baz');
     * });
     */
    function cargo(worker, payload) {
      return queue(worker, 1, payload);
    }

    /**
     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
     *
     * @name eachOfSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.eachOf]{@link module:Collections.eachOf}
     * @alias forEachOfSeries
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`. The
     * `key` is the item's key, or index in the case of an array. The iteratee is
     * passed a `callback(err)` which must be called once it has completed. If no
     * error has occurred, the callback should be run without arguments or with an
     * explicit `null` argument. Invoked with (item, key, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Invoked with (err).
     */
    var eachOfSeries = doLimit(eachOfLimit, 1);

    /**
     * Reduces `coll` into a single value using an async `iteratee` to return each
     * successive step. `memo` is the initial state of the reduction. This function
     * only operates in series.
     *
     * For performance reasons, it may make sense to split a call to this function
     * into a parallel map, and then use the normal `Array.prototype.reduce` on the
     * results. This function is for situations where each step in the reduction
     * needs to be async; if you can get the data before reducing it, then it's
     * probably a good idea to do so.
     *
     * @name reduce
     * @static
     * @memberOf module:Collections
     * @method
     * @alias inject
     * @alias foldl
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {*} memo - The initial state of the reduction.
     * @param {Function} iteratee - A function applied to each item in the
     * array to produce the next step in the reduction. The `iteratee` is passed a
     * `callback(err, reduction)` which accepts an optional error as its first
     * argument, and the state of the reduction as the second. If an error is
     * passed to the callback, the reduction is stopped and the main `callback` is
     * immediately called with the error. Invoked with (memo, item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result is the reduced value. Invoked with
     * (err, result).
     * @example
     *
     * async.reduce([1,2,3], 0, function(memo, item, callback) {
     *     // pointless async:
     *     process.nextTick(function() {
     *         callback(null, memo + item)
     *     });
     * }, function(err, result) {
     *     // result is now equal to the last value of memo, which is 6
     * });
     */
    function reduce(coll, memo, iteratee, callback) {
        callback = once(callback || noop);
        eachOfSeries(coll, function (x, i, callback) {
            iteratee(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    }

    /**
     * Version of the compose function that is more natural to read. Each function
     * consumes the return value of the previous function. It is the equivalent of
     * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
     *
     * Each function is executed with the `this` binding of the composed function.
     *
     * @name seq
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.compose]{@link module:ControlFlow.compose}
     * @category Control Flow
     * @param {...Function} functions - the asynchronous functions to compose
     * @returns {Function} a function that composes the `functions` in order
     * @example
     *
     * // Requires lodash (or underscore), express3 and dresende's orm2.
     * // Part of an app, that fetches cats of the logged user.
     * // This example uses `seq` function to avoid overnesting and error
     * // handling clutter.
     * app.get('/cats', function(request, response) {
     *     var User = request.models.User;
     *     async.seq(
     *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
     *         function(user, fn) {
     *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
     *         }
     *     )(req.session.user_id, function (err, cats) {
     *         if (err) {
     *             console.error(err);
     *             response.json({ status: 'error', message: err.message });
     *         } else {
     *             response.json({ status: 'ok', message: 'Cats found', data: cats });
     *         }
     *     });
     * });
     */
    var seq = rest(function seq(functions) {
        return rest(function (args) {
            var that = this;

            var cb = args[args.length - 1];
            if (typeof cb == 'function') {
                args.pop();
            } else {
                cb = noop;
            }

            reduce(functions, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([rest(function (err, nextargs) {
                    cb(err, nextargs);
                })]));
            }, function (err, results) {
                cb.apply(that, [err].concat(results));
            });
        });
    });

    /**
     * Creates a function which is a composition of the passed asynchronous
     * functions. Each function consumes the return value of the function that
     * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
     * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
     *
     * Each function is executed with the `this` binding of the composed function.
     *
     * @name compose
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {...Function} functions - the asynchronous functions to compose
     * @returns {Function} an asynchronous function that is the composed
     * asynchronous `functions`
     * @example
     *
     * function add1(n, callback) {
     *     setTimeout(function () {
     *         callback(null, n + 1);
     *     }, 10);
     * }
     *
     * function mul3(n, callback) {
     *     setTimeout(function () {
     *         callback(null, n * 3);
     *     }, 10);
     * }
     *
     * var add1mul3 = async.compose(mul3, add1);
     * add1mul3(4, function (err, result) {
     *     // result now equals 15
     * });
     */
    var compose = rest(function (args) {
      return seq.apply(null, args.reverse());
    });

    function concat$1(eachfn, arr, fn, callback) {
        var result = [];
        eachfn(arr, function (x, index, cb) {
            fn(x, function (err, y) {
                result = result.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, result);
        });
    }

    /**
     * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
     * the concatenated list. The `iteratee`s are called in parallel, and the
     * results are concatenated as they return. There is no guarantee that the
     * results array will be returned in the original order of `coll` passed to the
     * `iteratee` function.
     *
     * @name concat
     * @static
     * @memberOf module:Collections
     * @method
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, results)` which must be called once
     * it has completed with an error (which can be `null`) and an array of results.
     * Invoked with (item, callback).
     * @param {Function} [callback(err)] - A callback which is called after all the
     * `iteratee` functions have finished, or an error occurs. Results is an array
     * containing the concatenated results of the `iteratee` function. Invoked with
     * (err, results).
     * @example
     *
     * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
     *     // files is now a list of filenames that exist in the 3 directories
     * });
     */
    var concat = doParallel(concat$1);

    function doSeries(fn) {
        return function (obj, iteratee, callback) {
            return fn(eachOfSeries, obj, iteratee, callback);
        };
    }

    /**
     * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
     *
     * @name concatSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.concat]{@link module:Collections.concat}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, results)` which must be called once
     * it has completed with an error (which can be `null`) and an array of results.
     * Invoked with (item, callback).
     * @param {Function} [callback(err)] - A callback which is called after all the
     * `iteratee` functions have finished, or an error occurs. Results is an array
     * containing the concatenated results of the `iteratee` function. Invoked with
     * (err, results).
     */
    var concatSeries = doSeries(concat$1);

    /**
     * Returns a function that when called, calls-back with the values provided.
     * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
     * [`auto`]{@link module:ControlFlow.auto}.
     *
     * @name constant
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {...*} arguments... - Any number of arguments to automatically invoke
     * callback with.
     * @returns {Function} Returns a function that when invoked, automatically
     * invokes the callback with the previous given arguments.
     * @example
     *
     * async.waterfall([
     *     async.constant(42),
     *     function (value, next) {
     *         // value === 42
     *     },
     *     //...
     * ], callback);
     *
     * async.waterfall([
     *     async.constant(filename, "utf8"),
     *     fs.readFile,
     *     function (fileData, next) {
     *         //...
     *     }
     *     //...
     * ], callback);
     *
     * async.auto({
     *     hostname: async.constant("https://server.net/"),
     *     port: findFreePort,
     *     launchServer: ["hostname", "port", function (options, cb) {
     *         startServer(options, cb);
     *     }],
     *     //...
     * }, callback);
     */
    var constant = rest(function (values) {
        var args = [null].concat(values);
        return initialParams(function (ignoredArgs, callback) {
            return callback.apply(this, args);
        });
    });

    /**
     * This method returns the first argument given to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    function _createTester(eachfn, check, getResult) {
        return function (arr, limit, iteratee, cb) {
            function done(err) {
                if (cb) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, getResult(false));
                    }
                }
            }
            function wrappedIteratee(x, _, callback) {
                if (!cb) return callback();
                iteratee(x, function (err, v) {
                    if (cb) {
                        if (err) {
                            cb(err);
                            cb = iteratee = false;
                        } else if (check(v)) {
                            cb(null, getResult(true, x));
                            cb = iteratee = false;
                        }
                    }
                    callback();
                });
            }
            if (arguments.length > 3) {
                cb = cb || noop;
                eachfn(arr, limit, wrappedIteratee, done);
            } else {
                cb = iteratee;
                cb = cb || noop;
                iteratee = limit;
                eachfn(arr, wrappedIteratee, done);
            }
        };
    }

    function _findGetResult(v, x) {
        return x;
    }

    /**
     * Returns the first value in `coll` that passes an async truth test. The
     * `iteratee` is applied in parallel, meaning the first iteratee to return
     * `true` will fire the detect `callback` with that result. That means the
     * result might not be the first item in the original `coll` (in terms of order)
     * that passes the test.

     * If order within the original `coll` is important, then look at
     * [`detectSeries`]{@link module:Collections.detectSeries}.
     *
     * @name detect
     * @static
     * @memberOf module:Collections
     * @method
     * @alias find
     * @category Collections
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, truthValue)` which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the `iteratee` functions have finished.
     * Result will be the first item in the array that passes the truth test
     * (iteratee) or the value `undefined` if none passed. Invoked with
     * (err, result).
     * @example
     *
     * async.detect(['file1','file2','file3'], function(filePath, callback) {
     *     fs.access(filePath, function(err) {
     *         callback(null, !err)
     *     });
     * }, function(err, result) {
     *     // result now equals the first file in the list that exists
     * });
     */
    var detect = _createTester(eachOf, identity, _findGetResult);

    /**
     * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name detectLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.detect]{@link module:Collections.detect}
     * @alias findLimit
     * @category Collections
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, truthValue)` which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the `iteratee` functions have finished.
     * Result will be the first item in the array that passes the truth test
     * (iteratee) or the value `undefined` if none passed. Invoked with
     * (err, result).
     */
    var detectLimit = _createTester(eachOfLimit, identity, _findGetResult);

    /**
     * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
     *
     * @name detectSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.detect]{@link module:Collections.detect}
     * @alias findSeries
     * @category Collections
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, truthValue)` which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the `iteratee` functions have finished.
     * Result will be the first item in the array that passes the truth test
     * (iteratee) or the value `undefined` if none passed. Invoked with
     * (err, result).
     */
    var detectSeries = _createTester(eachOfSeries, identity, _findGetResult);

    function consoleFunc(name) {
        return rest(function (fn, args) {
            fn.apply(null, args.concat([rest(function (err, args) {
                if (typeof console === 'object') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    } else if (console[name]) {
                        arrayEach(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            })]));
        });
    }

    /**
     * Logs the result of an `async` function to the `console` using `console.dir`
     * to display the properties of the resulting object. Only works in Node.js or
     * in browsers that support `console.dir` and `console.error` (such as FF and
     * Chrome). If multiple arguments are returned from the async function,
     * `console.dir` is called on each argument in order.
     *
     * @name dir
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} function - The function you want to eventually apply all
     * arguments to.
     * @param {...*} arguments... - Any number of arguments to apply to the function.
     * @example
     *
     * // in a module
     * var hello = function(name, callback) {
     *     setTimeout(function() {
     *         callback(null, {hello: name});
     *     }, 1000);
     * };
     *
     * // in the node repl
     * node> async.dir(hello, 'world');
     * {hello: 'world'}
     */
    var dir = consoleFunc('dir');

    /**
     * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
     * the order of operations, the arguments `test` and `fn` are switched.
     *
     * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
     * @name doDuring
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.during]{@link module:ControlFlow.during}
     * @category Control Flow
     * @param {Function} fn - A function which is called each time `test` passes.
     * The function is passed a `callback(err)`, which must be called once it has
     * completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} test - asynchronous truth test to perform before each
     * execution of `fn`. Invoked with (...args, callback), where `...args` are the
     * non-error args from the previous callback of `fn`.
     * @param {Function} [callback] - A callback which is called after the test
     * function has failed and repeated execution of `fn` has stopped. `callback`
     * will be passed an error if one occured, otherwise `null`.
     */
    function doDuring(fn, test, callback) {
        callback = onlyOnce(callback || noop);

        var next = rest(function (err, args) {
            if (err) return callback(err);
            args.push(check);
            test.apply(this, args);
        });

        function check(err, truth) {
            if (err) return callback(err);
            if (!truth) return callback(null);
            fn(next);
        }

        check(null, true);
    }

    /**
     * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
     * the order of operations, the arguments `test` and `iteratee` are switched.
     *
     * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
     *
     * @name doWhilst
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.whilst]{@link module:ControlFlow.whilst}
     * @category Control Flow
     * @param {Function} iteratee - A function which is called each time `test`
     * passes. The function is passed a `callback(err)`, which must be called once
     * it has completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} test - synchronous truth test to perform after each
     * execution of `iteratee`. Invoked with Invoked with the non-error callback
     * results of `iteratee`.
     * @param {Function} [callback] - A callback which is called after the test
     * function has failed and repeated execution of `iteratee` has stopped.
     * `callback` will be passed an error and any arguments passed to the final
     * `iteratee`'s callback. Invoked with (err, [results]);
     */
    function doWhilst(iteratee, test, callback) {
        callback = onlyOnce(callback || noop);
        var next = rest(function (err, args) {
            if (err) return callback(err);
            if (test.apply(this, args)) return iteratee(next);
            callback.apply(null, [null].concat(args));
        });
        iteratee(next);
    }

    /**
     * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
     * argument ordering differs from `until`.
     *
     * @name doUntil
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
     * @category Control Flow
     * @param {Function} fn - A function which is called each time `test` fails.
     * The function is passed a `callback(err)`, which must be called once it has
     * completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} test - synchronous truth test to perform after each
     * execution of `fn`. Invoked with the non-error callback results of `fn`.
     * @param {Function} [callback] - A callback which is called after the test
     * function has passed and repeated execution of `fn` has stopped. `callback`
     * will be passed an error and any arguments passed to the final `fn`'s
     * callback. Invoked with (err, [results]);
     */
    function doUntil(fn, test, callback) {
        doWhilst(fn, function () {
            return !test.apply(this, arguments);
        }, callback);
    }

    /**
     * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
     * is passed a callback in the form of `function (err, truth)`. If error is
     * passed to `test` or `fn`, the main callback is immediately called with the
     * value of the error.
     *
     * @name during
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.whilst]{@link module:ControlFlow.whilst}
     * @category Control Flow
     * @param {Function} test - asynchronous truth test to perform before each
     * execution of `fn`. Invoked with (callback).
     * @param {Function} fn - A function which is called each time `test` passes.
     * The function is passed a `callback(err)`, which must be called once it has
     * completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} [callback] - A callback which is called after the test
     * function has failed and repeated execution of `fn` has stopped. `callback`
     * will be passed an error, if one occured, otherwise `null`.
     * @example
     *
     * var count = 0;
     *
     * async.during(
     *     function (callback) {
     *         return callback(null, count < 5);
     *     },
     *     function (callback) {
     *         count++;
     *         setTimeout(callback, 1000);
     *     },
     *     function (err) {
     *         // 5 seconds have passed
     *     }
     * );
     */
    function during(test, fn, callback) {
        callback = onlyOnce(callback || noop);

        function next(err) {
            if (err) return callback(err);
            test(check);
        }

        function check(err, truth) {
            if (err) return callback(err);
            if (!truth) return callback(null);
            fn(next);
        }

        test(check);
    }

    function _withoutIndex(iteratee) {
        return function (value, index, callback) {
            return iteratee(value, callback);
        };
    }

    /**
     * Applies the function `iteratee` to each item in `coll`, in parallel.
     * The `iteratee` is called with an item from the list, and a callback for when
     * it has finished. If the `iteratee` passes an error to its `callback`, the
     * main `callback` (for the `each` function) is immediately called with the
     * error.
     *
     * Note, that since this function applies `iteratee` to each item in parallel,
     * there is no guarantee that the iteratee functions will complete in order.
     *
     * @name each
     * @static
     * @memberOf module:Collections
     * @method
     * @alias forEach
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item
     * in `coll`. The iteratee is passed a `callback(err)` which must be called once
     * it has completed. If no error has occurred, the `callback` should be run
     * without arguments or with an explicit `null` argument. The array index is not
     * passed to the iteratee. Invoked with (item, callback). If you need the index,
     * use `eachOf`.
     * @param {Function} [callback] - A callback which is called when all
     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
     * @example
     *
     * // assuming openFiles is an array of file names and saveFile is a function
     * // to save the modified contents of that file:
     *
     * async.each(openFiles, saveFile, function(err){
     *   // if any of the saves produced an error, err would equal that error
     * });
     *
     * // assuming openFiles is an array of file names
     * async.each(openFiles, function(file, callback) {
     *
     *     // Perform operation on file here.
     *     console.log('Processing file ' + file);
     *
     *     if( file.length > 32 ) {
     *       console.log('This file name is too long');
     *       callback('File name too long');
     *     } else {
     *       // Do work to process file here
     *       console.log('File processed');
     *       callback();
     *     }
     * }, function(err) {
     *     // if any of the file processing produced an error, err would equal that error
     *     if( err ) {
     *       // One of the iterations produced an error.
     *       // All processing will now stop.
     *       console.log('A file failed to process');
     *     } else {
     *       console.log('All files have been processed successfully');
     *     }
     * });
     */
    function eachLimit(coll, iteratee, callback) {
      eachOf(coll, _withoutIndex(iteratee), callback);
    }

    /**
     * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
     *
     * @name eachLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.each]{@link module:Collections.each}
     * @alias forEachLimit
     * @category Collection
     * @param {Array|Iterable|Object} coll - A colleciton to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A function to apply to each item in `coll`. The
     * iteratee is passed a `callback(err)` which must be called once it has
     * completed. If no error has occurred, the `callback` should be run without
     * arguments or with an explicit `null` argument. The array index is not passed
     * to the iteratee. Invoked with (item, callback). If you need the index, use
     * `eachOfLimit`.
     * @param {Function} [callback] - A callback which is called when all
     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
     */
    function eachLimit$1(coll, limit, iteratee, callback) {
      _eachOfLimit(limit)(coll, _withoutIndex(iteratee), callback);
    }

    /**
     * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
     *
     * @name eachSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.each]{@link module:Collections.each}
     * @alias forEachSeries
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each
     * item in `coll`. The iteratee is passed a `callback(err)` which must be called
     * once it has completed. If no error has occurred, the `callback` should be run
     * without arguments or with an explicit `null` argument. The array index is
     * not passed to the iteratee. Invoked with (item, callback). If you need the
     * index, use `eachOfSeries`.
     * @param {Function} [callback] - A callback which is called when all
     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
     */
    var eachSeries = doLimit(eachLimit$1, 1);

    /**
     * Wrap an async function and ensure it calls its callback on a later tick of
     * the event loop.  If the function already calls its callback on a next tick,
     * no extra deferral is added. This is useful for preventing stack overflows
     * (`RangeError: Maximum call stack size exceeded`) and generally keeping
     * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
     * contained.
     *
     * @name ensureAsync
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} fn - an async function, one that expects a node-style
     * callback as its last argument.
     * @returns {Function} Returns a wrapped function with the exact same call
     * signature as the function passed in.
     * @example
     *
     * function sometimesAsync(arg, callback) {
     *     if (cache[arg]) {
     *         return callback(null, cache[arg]); // this would be synchronous!!
     *     } else {
     *         doSomeIO(arg, callback); // this IO would be asynchronous
     *     }
     * }
     *
     * // this has a risk of stack overflows if many results are cached in a row
     * async.mapSeries(args, sometimesAsync, done);
     *
     * // this will defer sometimesAsync's callback if necessary,
     * // preventing stack overflows
     * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
     */
    function ensureAsync(fn) {
        return initialParams(function (args, callback) {
            var sync = true;
            args.push(function () {
                var innerArgs = arguments;
                if (sync) {
                    setImmediate$1(function () {
                        callback.apply(null, innerArgs);
                    });
                } else {
                    callback.apply(null, innerArgs);
                }
            });
            fn.apply(this, args);
            sync = false;
        });
    }

    function notId(v) {
        return !v;
    }

    /**
     * Returns `true` if every element in `coll` satisfies an async test. If any
     * iteratee call returns `false`, the main `callback` is immediately called.
     *
     * @name every
     * @static
     * @memberOf module:Collections
     * @method
     * @alias all
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in the
     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
     * which must be called with a  boolean argument once it has completed. Invoked
     * with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result will be either `true` or `false`
     * depending on the values of the async tests. Invoked with (err, result).
     * @example
     *
     * async.every(['file1','file2','file3'], function(filePath, callback) {
     *     fs.access(filePath, function(err) {
     *         callback(null, !err)
     *     });
     * }, function(err, result) {
     *     // if result is true then every file exists
     * });
     */
    var every = _createTester(eachOf, notId, notId);

    /**
     * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
     *
     * @name everyLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.every]{@link module:Collections.every}
     * @alias allLimit
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A truth test to apply to each item in the
     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
     * which must be called with a  boolean argument once it has completed. Invoked
     * with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result will be either `true` or `false`
     * depending on the values of the async tests. Invoked with (err, result).
     */
    var everyLimit = _createTester(eachOfLimit, notId, notId);

    /**
     * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
     *
     * @name everySeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.every]{@link module:Collections.every}
     * @alias allSeries
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in the
     * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
     * which must be called with a  boolean argument once it has completed. Invoked
     * with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result will be either `true` or `false`
     * depending on the values of the async tests. Invoked with (err, result).
     */
    var everySeries = doLimit(everyLimit, 1);

    function _filter(eachfn, arr, iteratee, callback) {
        callback = once(callback || noop);
        var results = [];
        eachfn(arr, function (x, index, callback) {
            iteratee(x, function (err, v) {
                if (err) {
                    callback(err);
                } else {
                    if (v) {
                        results.push({ index: index, value: x });
                    }
                    callback();
                }
            });
        }, function (err) {
            if (err) {
                callback(err);
            } else {
                callback(null, arrayMap(results.sort(function (a, b) {
                    return a.index - b.index;
                }), baseProperty('value')));
            }
        });
    }

    /**
     * Returns a new array of all the values in `coll` which pass an async truth
     * test. This operation is performed in parallel, but the results array will be
     * in the same order as the original.
     *
     * @name filter
     * @static
     * @memberOf module:Collections
     * @method
     * @alias select
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results).
     * @example
     *
     * async.filter(['file1','file2','file3'], function(filePath, callback) {
     *     fs.access(filePath, function(err) {
     *         callback(null, !err)
     *     });
     * }, function(err, results) {
     *     // results now equals an array of the existing files
     * });
     */
    var filter = doParallel(_filter);

    /**
     * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name filterLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.filter]{@link module:Collections.filter}
     * @alias selectLimit
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results).
     */
    var filterLimit = doParallelLimit(_filter);

    /**
     * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
     *
     * @name filterSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.filter]{@link module:Collections.filter}
     * @alias selectSeries
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results)
     */
    var filterSeries = doLimit(filterLimit, 1);

    /**
     * Calls the asynchronous function `fn` with a callback parameter that allows it
     * to call itself again, in series, indefinitely.

     * If an error is passed to the
     * callback then `errback` is called with the error, and execution stops,
     * otherwise it will never be called.
     *
     * @name forever
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Function} fn - a function to call repeatedly. Invoked with (next).
     * @param {Function} [errback] - when `fn` passes an error to it's callback,
     * this function will be called, and execution stops. Invoked with (err).
     * @example
     *
     * async.forever(
     *     function(next) {
     *         // next is suitable for passing to things that need a callback(err [, whatever]);
     *         // it will result in this function being called again.
     *     },
     *     function(err) {
     *         // if next is called with a value in its first parameter, it will appear
     *         // in here as 'err', and execution will stop.
     *     }
     * );
     */
    function forever(fn, errback) {
        var done = onlyOnce(errback || noop);
        var task = ensureAsync(fn);

        function next(err) {
            if (err) return done(err);
            task(next);
        }
        next();
    }

    /**
     * Logs the result of an `async` function to the `console`. Only works in
     * Node.js or in browsers that support `console.log` and `console.error` (such
     * as FF and Chrome). If multiple arguments are returned from the async
     * function, `console.log` is called on each argument in order.
     *
     * @name log
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} function - The function you want to eventually apply all
     * arguments to.
     * @param {...*} arguments... - Any number of arguments to apply to the function.
     * @example
     *
     * // in a module
     * var hello = function(name, callback) {
     *     setTimeout(function() {
     *         callback(null, 'hello ' + name);
     *     }, 1000);
     * };
     *
     * // in the node repl
     * node> async.log(hello, 'world');
     * 'hello world'
     */
    var log = consoleFunc('log');

    /**
     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name mapValuesLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.mapValues]{@link module:Collections.mapValues}
     * @category Collection
     * @param {Object} obj - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A function to apply to each value in `obj`.
     * The iteratee is passed a `callback(err, transformed)` which must be called
     * once it has completed with an error (which can be `null`) and a
     * transformed value. Invoked with (value, key, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Result is an object of the
     * transformed values from the `obj`. Invoked with (err, result).
     */
    function mapValuesLimit(obj, limit, iteratee, callback) {
        callback = once(callback || noop);
        var newObj = {};
        eachOfLimit(obj, limit, function (val, key, next) {
            iteratee(val, key, function (err, result) {
                if (err) return next(err);
                newObj[key] = result;
                next();
            });
        }, function (err) {
            callback(err, newObj);
        });
    }

    /**
     * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
     *
     * Produces a new Object by mapping each value of `obj` through the `iteratee`
     * function. The `iteratee` is called each `value` and `key` from `obj` and a
     * callback for when it has finished processing. Each of these callbacks takes
     * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
     * passes an error to its callback, the main `callback` (for the `mapValues`
     * function) is immediately called with the error.
     *
     * Note, the order of the keys in the result is not guaranteed.  The keys will
     * be roughly in the order they complete, (but this is very engine-specific)
     *
     * @name mapValues
     * @static
     * @memberOf module:Collections
     * @method
     * @category Collection
     * @param {Object} obj - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each value and key in
     * `coll`. The iteratee is passed a `callback(err, transformed)` which must be
     * called once it has completed with an error (which can be `null`) and a
     * transformed value. Invoked with (value, key, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Results is an array of the
     * transformed items from the `obj`. Invoked with (err, result).
     * @example
     *
     * async.mapValues({
     *     f1: 'file1',
     *     f2: 'file2',
     *     f3: 'file3'
     * }, function (file, key, callback) {
     *   fs.stat(file, callback);
     * }, function(err, result) {
     *     // results is now a map of stats for each file, e.g.
     *     // {
     *     //     f1: [stats for file1],
     *     //     f2: [stats for file2],
     *     //     f3: [stats for file3]
     *     // }
     * });
     */

    var mapValues = doLimit(mapValuesLimit, Infinity);

    /**
     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
     *
     * @name mapValuesSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.mapValues]{@link module:Collections.mapValues}
     * @category Collection
     * @param {Object} obj - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each value in `obj`.
     * The iteratee is passed a `callback(err, transformed)` which must be called
     * once it has completed with an error (which can be `null`) and a
     * transformed value. Invoked with (value, key, callback).
     * @param {Function} [callback] - A callback which is called when all `iteratee`
     * functions have finished, or an error occurs. Result is an object of the
     * transformed values from the `obj`. Invoked with (err, result).
     */
    var mapValuesSeries = doLimit(mapValuesLimit, 1);

    function has(obj, key) {
        return key in obj;
    }

    /**
     * Caches the results of an `async` function. When creating a hash to store
     * function results against, the callback is omitted from the hash and an
     * optional hash function can be used.
     *
     * If no hash function is specified, the first argument is used as a hash key,
     * which may work reasonably if it is a string or a data type that converts to a
     * distinct string. Note that objects and arrays will not behave reasonably.
     * Neither will cases where the other arguments are significant. In such cases,
     * specify your own hash function.
     *
     * The cache of results is exposed as the `memo` property of the function
     * returned by `memoize`.
     *
     * @name memoize
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} fn - The function to proxy and cache results from.
     * @param {Function} hasher - An optional function for generating a custom hash
     * for storing results. It has all the arguments applied to it apart from the
     * callback, and must be synchronous.
     * @returns {Function} a memoized version of `fn`
     * @example
     *
     * var slow_fn = function(name, callback) {
     *     // do something
     *     callback(null, result);
     * };
     * var fn = async.memoize(slow_fn);
     *
     * // fn can now be used as if it were slow_fn
     * fn('some name', function() {
     *     // callback
     * });
     */
    function memoize(fn, hasher) {
        var memo = Object.create(null);
        var queues = Object.create(null);
        hasher = hasher || identity;
        var memoized = initialParams(function memoized(args, callback) {
            var key = hasher.apply(null, args);
            if (has(memo, key)) {
                setImmediate$1(function () {
                    callback.apply(null, memo[key]);
                });
            } else if (has(queues, key)) {
                queues[key].push(callback);
            } else {
                queues[key] = [callback];
                fn.apply(null, args.concat([rest(function (args) {
                    memo[key] = args;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                        q[i].apply(null, args);
                    }
                })]));
            }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    }

    /**
     * Calls `callback` on a later loop around the event loop. In Node.js this just
     * calls `setImmediate`.  In the browser it will use `setImmediate` if
     * available, otherwise `setTimeout(callback, 0)`, which means other higher
     * priority events may precede the execution of `callback`.
     *
     * This is used internally for browser-compatibility purposes.
     *
     * @name nextTick
     * @static
     * @memberOf module:Utils
     * @method
     * @alias setImmediate
     * @category Util
     * @param {Function} callback - The function to call on a later loop around
     * the event loop. Invoked with (args...).
     * @param {...*} args... - any number of additional arguments to pass to the
     * callback on the next tick.
     * @example
     *
     * var call_order = [];
     * async.nextTick(function() {
     *     call_order.push('two');
     *     // call_order now equals ['one','two']
     * });
     * call_order.push('one');
     *
     * async.setImmediate(function (a, b, c) {
     *     // a, b, and c equal 1, 2, and 3
     * }, 1, 2, 3);
     */
    var _defer$1;

    if (hasNextTick) {
        _defer$1 = process.nextTick;
    } else if (hasSetImmediate) {
        _defer$1 = setImmediate;
    } else {
        _defer$1 = fallback;
    }

    var nextTick = wrap(_defer$1);

    function _parallel(eachfn, tasks, callback) {
        callback = callback || noop;
        var results = isArrayLike(tasks) ? [] : {};

        eachfn(tasks, function (task, key, callback) {
            task(rest(function (err, args) {
                if (args.length <= 1) {
                    args = args[0];
                }
                results[key] = args;
                callback(err);
            }));
        }, function (err) {
            callback(err, results);
        });
    }

    /**
     * Run the `tasks` collection of functions in parallel, without waiting until
     * the previous function has completed. If any of the functions pass an error to
     * its callback, the main `callback` is immediately called with the value of the
     * error. Once the `tasks` have completed, the results are passed to the final
     * `callback` as an array.
     *
     * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
     * parallel execution of code.  If your tasks do not use any timers or perform
     * any I/O, they will actually be executed in series.  Any synchronous setup
     * sections for each task will happen one after the other.  JavaScript remains
     * single-threaded.
     *
     * It is also possible to use an object instead of an array. Each property will
     * be run as a function and the results will be passed to the final `callback`
     * as an object instead of an array. This can be a more readable way of handling
     * results from {@link async.parallel}.
     *
     * @name parallel
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Array|Iterable|Object} tasks - A collection containing functions to run.
     * Each function is passed a `callback(err, result)` which it must call on
     * completion with an error `err` (which can be `null`) and an optional `result`
     * value.
     * @param {Function} [callback] - An optional callback to run once all the
     * functions have completed successfully. This function gets a results array
     * (or object) containing all the result arguments passed to the task callbacks.
     * Invoked with (err, results).
     * @example
     * async.parallel([
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'one');
     *         }, 200);
     *     },
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'two');
     *         }, 100);
     *     }
     * ],
     * // optional callback
     * function(err, results) {
     *     // the results array will equal ['one','two'] even though
     *     // the second function had a shorter timeout.
     * });
     *
     * // an example using an object instead of an array
     * async.parallel({
     *     one: function(callback) {
     *         setTimeout(function() {
     *             callback(null, 1);
     *         }, 200);
     *     },
     *     two: function(callback) {
     *         setTimeout(function() {
     *             callback(null, 2);
     *         }, 100);
     *     }
     * }, function(err, results) {
     *     // results is now equals to: {one: 1, two: 2}
     * });
     */
    function parallelLimit(tasks, callback) {
      _parallel(eachOf, tasks, callback);
    }

    /**
     * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name parallelLimit
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.parallel]{@link module:ControlFlow.parallel}
     * @category Control Flow
     * @param {Array|Collection} tasks - A collection containing functions to run.
     * Each function is passed a `callback(err, result)` which it must call on
     * completion with an error `err` (which can be `null`) and an optional `result`
     * value.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} [callback] - An optional callback to run once all the
     * functions have completed successfully. This function gets a results array
     * (or object) containing all the result arguments passed to the task callbacks.
     * Invoked with (err, results).
     */
    function parallelLimit$1(tasks, limit, callback) {
      _parallel(_eachOfLimit(limit), tasks, callback);
    }

    /**
     * A queue of tasks for the worker function to complete.
     * @typedef {Object} QueueObject
     * @memberOf module:ControlFlow
     * @property {Function} length - a function returning the number of items
     * waiting to be processed. Invoke with `queue.length()`.
     * @property {boolean} started - a boolean indicating whether or not any
     * items have been pushed and processed by the queue.
     * @property {Function} running - a function returning the number of items
     * currently being processed. Invoke with `queue.running()`.
     * @property {Function} workersList - a function returning the array of items
     * currently being processed. Invoke with `queue.workersList()`.
     * @property {Function} idle - a function returning false if there are items
     * waiting or being processed, or true if not. Invoke with `queue.idle()`.
     * @property {number} concurrency - an integer for determining how many `worker`
     * functions should be run in parallel. This property can be changed after a
     * `queue` is created to alter the concurrency on-the-fly.
     * @property {Function} push - add a new task to the `queue`. Calls `callback`
     * once the `worker` has finished processing the task. Instead of a single task,
     * a `tasks` array can be submitted. The respective callback is used for every
     * task in the list. Invoke with `queue.push(task, [callback])`,
     * @property {Function} unshift - add a new task to the front of the `queue`.
     * Invoke with `queue.unshift(task, [callback])`.
     * @property {Function} saturated - a callback that is called when the number of
     * running workers hits the `concurrency` limit, and further tasks will be
     * queued.
     * @property {Function} unsaturated - a callback that is called when the number
     * of running workers is less than the `concurrency` & `buffer` limits, and
     * further tasks will not be queued.
     * @property {number} buffer - A minimum threshold buffer in order to say that
     * the `queue` is `unsaturated`.
     * @property {Function} empty - a callback that is called when the last item
     * from the `queue` is given to a `worker`.
     * @property {Function} drain - a callback that is called when the last item
     * from the `queue` has returned from the `worker`.
     * @property {Function} error - a callback that is called when a task errors.
     * Has the signature `function(error, task)`.
     * @property {boolean} paused - a boolean for determining whether the queue is
     * in a paused state.
     * @property {Function} pause - a function that pauses the processing of tasks
     * until `resume()` is called. Invoke with `queue.pause()`.
     * @property {Function} resume - a function that resumes the processing of
     * queued tasks when the queue is paused. Invoke with `queue.resume()`.
     * @property {Function} kill - a function that removes the `drain` callback and
     * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
     */

    /**
     * Creates a `queue` object with the specified `concurrency`. Tasks added to the
     * `queue` are processed in parallel (up to the `concurrency` limit). If all
     * `worker`s are in progress, the task is queued until one becomes available.
     * Once a `worker` completes a `task`, that `task`'s callback is called.
     *
     * @name queue
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Function} worker - An asynchronous function for processing a queued
     * task, which must call its `callback(err)` argument when finished, with an
     * optional `error` as an argument.  If you want to handle errors from an
     * individual task, pass a callback to `q.push()`. Invoked with
     * (task, callback).
     * @param {number} [concurrency=1] - An `integer` for determining how many
     * `worker` functions should be run in parallel.  If omitted, the concurrency
     * defaults to `1`.  If the concurrency is `0`, an error is thrown.
     * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
     * attached as certain properties to listen for specific events during the
     * lifecycle of the queue.
     * @example
     *
     * // create a queue object with concurrency 2
     * var q = async.queue(function(task, callback) {
     *     console.log('hello ' + task.name);
     *     callback();
     * }, 2);
     *
     * // assign a callback
     * q.drain = function() {
     *     console.log('all items have been processed');
     * };
     *
     * // add some items to the queue
     * q.push({name: 'foo'}, function(err) {
     *     console.log('finished processing foo');
     * });
     * q.push({name: 'bar'}, function (err) {
     *     console.log('finished processing bar');
     * });
     *
     * // add some items to the queue (batch-wise)
     * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
     *     console.log('finished processing item');
     * });
     *
     * // add some items to the front of the queue
     * q.unshift({name: 'bar'}, function (err) {
     *     console.log('finished processing bar');
     * });
     */
    function queue$1 (worker, concurrency) {
      return queue(function (items, cb) {
        worker(items[0], cb);
      }, concurrency, 1);
    }

    /**
     * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
     * completed in ascending priority order.
     *
     * @name priorityQueue
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.queue]{@link module:ControlFlow.queue}
     * @category Control Flow
     * @param {Function} worker - An asynchronous function for processing a queued
     * task, which must call its `callback(err)` argument when finished, with an
     * optional `error` as an argument.  If you want to handle errors from an
     * individual task, pass a callback to `q.push()`. Invoked with
     * (task, callback).
     * @param {number} concurrency - An `integer` for determining how many `worker`
     * functions should be run in parallel.  If omitted, the concurrency defaults to
     * `1`.  If the concurrency is `0`, an error is thrown.
     * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
     * differences between `queue` and `priorityQueue` objects:
     * * `push(task, priority, [callback])` - `priority` should be a number. If an
     *   array of `tasks` is given, all tasks will be assigned the same priority.
     * * The `unshift` method was removed.
     */
    function priorityQueue (worker, concurrency) {
        // Start with a normal queue
        var q = queue$1(worker, concurrency);

        // Override push to accept second parameter representing priority
        q.push = function (data, priority, callback) {
            if (callback == null) callback = noop;
            if (typeof callback !== 'function') {
                throw new Error('task callback must be a function');
            }
            q.started = true;
            if (!isArray(data)) {
                data = [data];
            }
            if (data.length === 0) {
                // call drain immediately if there are no tasks
                return setImmediate$1(function () {
                    q.drain();
                });
            }

            priority = priority || 0;
            var nextNode = q._tasks.head;
            while (nextNode && priority >= nextNode.priority) {
                nextNode = nextNode.next;
            }

            arrayEach(data, function (task) {
                var item = {
                    data: task,
                    priority: priority,
                    callback: callback
                };

                if (nextNode) {
                    q._tasks.insertBefore(nextNode, item);
                } else {
                    q._tasks.push(item);
                }
            });
            setImmediate$1(q.process);
        };

        // Remove unshift function
        delete q.unshift;

        return q;
    }

    /**
     * Runs the `tasks` array of functions in parallel, without waiting until the
     * previous function has completed. Once any the `tasks` completed or pass an
     * error to its callback, the main `callback` is immediately called. It's
     * equivalent to `Promise.race()`.
     *
     * @name race
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Array} tasks - An array containing functions to run. Each function
     * is passed a `callback(err, result)` which it must call on completion with an
     * error `err` (which can be `null`) and an optional `result` value.
     * @param {Function} callback - A callback to run once any of the functions have
     * completed. This function gets an error or result from the first function that
     * completed. Invoked with (err, result).
     * @returns undefined
     * @example
     *
     * async.race([
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'one');
     *         }, 200);
     *     },
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'two');
     *         }, 100);
     *     }
     * ],
     * // main callback
     * function(err, result) {
     *     // the result will be equal to 'two' as it finishes earlier
     * });
     */
    function race(tasks, callback) {
        callback = once(callback || noop);
        if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
        if (!tasks.length) return callback();
        arrayEach(tasks, function (task) {
            task(callback);
        });
    }

    var slice = Array.prototype.slice;

    /**
     * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
     *
     * @name reduceRight
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.reduce]{@link module:Collections.reduce}
     * @alias foldr
     * @category Collection
     * @param {Array} array - A collection to iterate over.
     * @param {*} memo - The initial state of the reduction.
     * @param {Function} iteratee - A function applied to each item in the
     * array to produce the next step in the reduction. The `iteratee` is passed a
     * `callback(err, reduction)` which accepts an optional error as its first
     * argument, and the state of the reduction as the second. If an error is
     * passed to the callback, the reduction is stopped and the main `callback` is
     * immediately called with the error. Invoked with (memo, item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result is the reduced value. Invoked with
     * (err, result).
     */
    function reduceRight(array, memo, iteratee, callback) {
      var reversed = slice.call(array).reverse();
      reduce(reversed, memo, iteratee, callback);
    }

    /**
     * Wraps the function in another function that always returns data even when it
     * errors.
     *
     * The object returned has either the property `error` or `value`.
     *
     * @name reflect
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} fn - The function you want to wrap
     * @returns {Function} - A function that always passes null to it's callback as
     * the error. The second argument to the callback will be an `object` with
     * either an `error` or a `value` property.
     * @example
     *
     * async.parallel([
     *     async.reflect(function(callback) {
     *         // do some stuff ...
     *         callback(null, 'one');
     *     }),
     *     async.reflect(function(callback) {
     *         // do some more stuff but error ...
     *         callback('bad stuff happened');
     *     }),
     *     async.reflect(function(callback) {
     *         // do some more stuff ...
     *         callback(null, 'two');
     *     })
     * ],
     * // optional callback
     * function(err, results) {
     *     // values
     *     // results[0].value = 'one'
     *     // results[1].error = 'bad stuff happened'
     *     // results[2].value = 'two'
     * });
     */
    function reflect(fn) {
        return initialParams(function reflectOn(args, reflectCallback) {
            args.push(rest(function callback(err, cbArgs) {
                if (err) {
                    reflectCallback(null, {
                        error: err
                    });
                } else {
                    var value = null;
                    if (cbArgs.length === 1) {
                        value = cbArgs[0];
                    } else if (cbArgs.length > 1) {
                        value = cbArgs;
                    }
                    reflectCallback(null, {
                        value: value
                    });
                }
            }));

            return fn.apply(this, args);
        });
    }

    function reject$1(eachfn, arr, iteratee, callback) {
        _filter(eachfn, arr, function (value, cb) {
            iteratee(value, function (err, v) {
                if (err) {
                    cb(err);
                } else {
                    cb(null, !v);
                }
            });
        }, callback);
    }

    /**
     * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
     *
     * @name reject
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.filter]{@link module:Collections.filter}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results).
     * @example
     *
     * async.reject(['file1','file2','file3'], function(filePath, callback) {
     *     fs.access(filePath, function(err) {
     *         callback(null, !err)
     *     });
     * }, function(err, results) {
     *     // results now equals an array of missing files
     *     createFiles(results);
     * });
     */
    var reject = doParallel(reject$1);

    /**
     * A helper function that wraps an array or an object of functions with reflect.
     *
     * @name reflectAll
     * @static
     * @memberOf module:Utils
     * @method
     * @see [async.reflect]{@link module:Utils.reflect}
     * @category Util
     * @param {Array} tasks - The array of functions to wrap in `async.reflect`.
     * @returns {Array} Returns an array of functions, each function wrapped in
     * `async.reflect`
     * @example
     *
     * let tasks = [
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'one');
     *         }, 200);
     *     },
     *     function(callback) {
     *         // do some more stuff but error ...
     *         callback(new Error('bad stuff happened'));
     *     },
     *     function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'two');
     *         }, 100);
     *     }
     * ];
     *
     * async.parallel(async.reflectAll(tasks),
     * // optional callback
     * function(err, results) {
     *     // values
     *     // results[0].value = 'one'
     *     // results[1].error = Error('bad stuff happened')
     *     // results[2].value = 'two'
     * });
     *
     * // an example using an object instead of an array
     * let tasks = {
     *     one: function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'one');
     *         }, 200);
     *     },
     *     two: function(callback) {
     *         callback('two');
     *     },
     *     three: function(callback) {
     *         setTimeout(function() {
     *             callback(null, 'three');
     *         }, 100);
     *     }
     * };
     *
     * async.parallel(async.reflectAll(tasks),
     * // optional callback
     * function(err, results) {
     *     // values
     *     // results.one.value = 'one'
     *     // results.two.error = 'two'
     *     // results.three.value = 'three'
     * });
     */
    function reflectAll(tasks) {
        var results;
        if (isArray(tasks)) {
            results = arrayMap(tasks, reflect);
        } else {
            results = {};
            baseForOwn(tasks, function (task, key) {
                results[key] = reflect.call(this, task);
            });
        }
        return results;
    }

    /**
     * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name rejectLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.reject]{@link module:Collections.reject}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results).
     */
    var rejectLimit = doParallelLimit(reject$1);

    /**
     * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
     *
     * @name rejectSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.reject]{@link module:Collections.reject}
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
     * with a boolean argument once it has completed. Invoked with (item, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Invoked with (err, results).
     */
    var rejectSeries = doLimit(rejectLimit, 1);

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant$1(value) {
      return function() {
        return value;
      };
    }

    /**
     * Attempts to get a successful response from `task` no more than `times` times
     * before returning an error. If the task is successful, the `callback` will be
     * passed the result of the successful task. If all attempts fail, the callback
     * will be passed the error and result (if any) of the final attempt.
     *
     * @name retry
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
     * object with `times` and `interval` or a number.
     * * `times` - The number of attempts to make before giving up.  The default
     *   is `5`.
     * * `interval` - The time to wait between retries, in milliseconds.  The
     *   default is `0`. The interval may also be specified as a function of the
     *   retry count (see example).
     * * If `opts` is a number, the number specifies the number of times to retry,
     *   with the default interval of `0`.
     * @param {Function} task - A function which receives two arguments: (1) a
     * `callback(err, result)` which must be called when finished, passing `err`
     * (which can be `null`) and the `result` of the function's execution, and (2)
     * a `results` object, containing the results of the previously executed
     * functions (if nested inside another control flow). Invoked with
     * (callback, results).
     * @param {Function} [callback] - An optional callback which is called when the
     * task has succeeded, or after the final failed attempt. It receives the `err`
     * and `result` arguments of the last attempt at completing the `task`. Invoked
     * with (err, results).
     * @example
     *
     * // The `retry` function can be used as a stand-alone control flow by passing
     * // a callback, as shown below:
     *
     * // try calling apiMethod 3 times
     * async.retry(3, apiMethod, function(err, result) {
     *     // do something with the result
     * });
     *
     * // try calling apiMethod 3 times, waiting 200 ms between each retry
     * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
     *     // do something with the result
     * });
     *
     * // try calling apiMethod 10 times with exponential backoff
     * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
     * async.retry({
     *   times: 10,
     *   interval: function(retryCount) {
     *     return 50 * Math.pow(2, retryCount);
     *   }
     * }, apiMethod, function(err, result) {
     *     // do something with the result
     * });
     *
     * // try calling apiMethod the default 5 times no delay between each retry
     * async.retry(apiMethod, function(err, result) {
     *     // do something with the result
     * });
     *
     * // It can also be embedded within other control flow functions to retry
     * // individual methods that are not as reliable, like this:
     * async.auto({
     *     users: api.getUsers.bind(api),
     *     payments: async.retry(3, api.getPayments.bind(api))
     * }, function(err, results) {
     *     // do something with the results
     * });
     */
    function retry(opts, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;

        var options = {
            times: DEFAULT_TIMES,
            intervalFunc: constant$1(DEFAULT_INTERVAL)
        };

        function parseTimes(acc, t) {
            if (typeof t === 'object') {
                acc.times = +t.times || DEFAULT_TIMES;

                acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
            } else if (typeof t === 'number' || typeof t === 'string') {
                acc.times = +t || DEFAULT_TIMES;
            } else {
                throw new Error("Invalid arguments for async.retry");
            }
        }

        if (arguments.length < 3 && typeof opts === 'function') {
            callback = task || noop;
            task = opts;
        } else {
            parseTimes(options, opts);
            callback = callback || noop;
        }

        if (typeof task !== 'function') {
            throw new Error("Invalid arguments for async.retry");
        }

        var attempt = 1;
        function retryAttempt() {
            task(function (err) {
                if (err && attempt++ < options.times) {
                    setTimeout(retryAttempt, options.intervalFunc(attempt));
                } else {
                    callback.apply(null, arguments);
                }
            });
        }

        retryAttempt();
    }

    /**
     * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method wraps a task and makes it
     * retryable, rather than immediately calling it with retries.
     *
     * @name retryable
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.retry]{@link module:ControlFlow.retry}
     * @category Control Flow
     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
     * options, exactly the same as from `retry`
     * @param {Function} task - the asynchronous function to wrap
     * @returns {Functions} The wrapped function, which when invoked, will retry on
     * an error, based on the parameters specified in `opts`.
     * @example
     *
     * async.auto({
     *     dep1: async.retryable(3, getFromFlakyService),
     *     process: ["dep1", async.retryable(3, function (results, cb) {
     *         maybeProcessData(results.dep1, cb);
     *     })]
     * }, callback);
     */
    function retryable (opts, task) {
        if (!task) {
            task = opts;
            opts = null;
        }
        return initialParams(function (args, callback) {
            function taskFn(cb) {
                task.apply(null, args.concat([cb]));
            }

            if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
        });
    }

    /**
     * Run the functions in the `tasks` collection in series, each one running once
     * the previous function has completed. If any functions in the series pass an
     * error to its callback, no more functions are run, and `callback` is
     * immediately called with the value of the error. Otherwise, `callback`
     * receives an array of results when `tasks` have completed.
     *
     * It is also possible to use an object instead of an array. Each property will
     * be run as a function, and the results will be passed to the final `callback`
     * as an object instead of an array. This can be a more readable way of handling
     *  results from {@link async.series}.
     *
     * **Note** that while many implementations preserve the order of object
     * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
     * explicitly states that
     *
     * > The mechanics and order of enumerating the properties is not specified.
     *
     * So if you rely on the order in which your series of functions are executed,
     * and want this to work on all platforms, consider using an array.
     *
     * @name series
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Array|Iterable|Object} tasks - A collection containing functions to run, each
     * function is passed a `callback(err, result)` it must call on completion with
     * an error `err` (which can be `null`) and an optional `result` value.
     * @param {Function} [callback] - An optional callback to run once all the
     * functions have completed. This function gets a results array (or object)
     * containing all the result arguments passed to the `task` callbacks. Invoked
     * with (err, result).
     * @example
     * async.series([
     *     function(callback) {
     *         // do some stuff ...
     *         callback(null, 'one');
     *     },
     *     function(callback) {
     *         // do some more stuff ...
     *         callback(null, 'two');
     *     }
     * ],
     * // optional callback
     * function(err, results) {
     *     // results is now equal to ['one', 'two']
     * });
     *
     * async.series({
     *     one: function(callback) {
     *         setTimeout(function() {
     *             callback(null, 1);
     *         }, 200);
     *     },
     *     two: function(callback){
     *         setTimeout(function() {
     *             callback(null, 2);
     *         }, 100);
     *     }
     * }, function(err, results) {
     *     // results is now equal to: {one: 1, two: 2}
     * });
     */
    function series(tasks, callback) {
      _parallel(eachOfSeries, tasks, callback);
    }

    /**
     * Returns `true` if at least one element in the `coll` satisfies an async test.
     * If any iteratee call returns `true`, the main `callback` is immediately
     * called.
     *
     * @name some
     * @static
     * @memberOf module:Collections
     * @method
     * @alias any
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in the array
     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
     * be called with a boolean argument once it has completed. Invoked with
     * (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the iteratee functions have finished.
     * Result will be either `true` or `false` depending on the values of the async
     * tests. Invoked with (err, result).
     * @example
     *
     * async.some(['file1','file2','file3'], function(filePath, callback) {
     *     fs.access(filePath, function(err) {
     *         callback(null, !err)
     *     });
     * }, function(err, result) {
     *     // if result is true then at least one of the files exists
     * });
     */
    var some = _createTester(eachOf, Boolean, identity);

    /**
     * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
     *
     * @name someLimit
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.some]{@link module:Collections.some}
     * @alias anyLimit
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - A truth test to apply to each item in the array
     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
     * be called with a boolean argument once it has completed. Invoked with
     * (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the iteratee functions have finished.
     * Result will be either `true` or `false` depending on the values of the async
     * tests. Invoked with (err, result).
     */
    var someLimit = _createTester(eachOfLimit, Boolean, identity);

    /**
     * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
     *
     * @name someSeries
     * @static
     * @memberOf module:Collections
     * @method
     * @see [async.some]{@link module:Collections.some}
     * @alias anySeries
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A truth test to apply to each item in the array
     * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
     * be called with a boolean argument once it has completed. Invoked with
     * (item, callback).
     * @param {Function} [callback] - A callback which is called as soon as any
     * iteratee returns `true`, or after all the iteratee functions have finished.
     * Result will be either `true` or `false` depending on the values of the async
     * tests. Invoked with (err, result).
     */
    var someSeries = doLimit(someLimit, 1);

    /**
     * Sorts a list by the results of running each `coll` value through an async
     * `iteratee`.
     *
     * @name sortBy
     * @static
     * @memberOf module:Collections
     * @method
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {Function} iteratee - A function to apply to each item in `coll`.
     * The iteratee is passed a `callback(err, sortValue)` which must be called once
     * it has completed with an error (which can be `null`) and a value to use as
     * the sort criteria. Invoked with (item, callback).
     * @param {Function} callback - A callback which is called after all the
     * `iteratee` functions have finished, or an error occurs. Results is the items
     * from the original `coll` sorted by the values returned by the `iteratee`
     * calls. Invoked with (err, results).
     * @example
     *
     * async.sortBy(['file1','file2','file3'], function(file, callback) {
     *     fs.stat(file, function(err, stats) {
     *         callback(err, stats.mtime);
     *     });
     * }, function(err, results) {
     *     // results is now the original array of files sorted by
     *     // modified date
     * });
     *
     * // By modifying the callback parameter the
     * // sorting order can be influenced:
     *
     * // ascending order
     * async.sortBy([1,9,3,5], function(x, callback) {
     *     callback(null, x);
     * }, function(err,result) {
     *     // result callback
     * });
     *
     * // descending order
     * async.sortBy([1,9,3,5], function(x, callback) {
     *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
     * }, function(err,result) {
     *     // result callback
     * });
     */
    function sortBy(coll, iteratee, callback) {
        map(coll, function (x, callback) {
            iteratee(x, function (err, criteria) {
                if (err) return callback(err);
                callback(null, { value: x, criteria: criteria });
            });
        }, function (err, results) {
            if (err) return callback(err);
            callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
        });

        function comparator(left, right) {
            var a = left.criteria,
                b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        }
    }

    /**
     * Sets a time limit on an asynchronous function. If the function does not call
     * its callback within the specified milliseconds, it will be called with a
     * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
     *
     * @name timeout
     * @static
     * @memberOf module:Utils
     * @method
     * @category Util
     * @param {Function} asyncFn - The asynchronous function you want to set the
     * time limit.
     * @param {number} milliseconds - The specified time limit.
     * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
     * to timeout Error for more information..
     * @returns {Function} Returns a wrapped function that can be used with any of
     * the control flow functions.
     * @example
     *
     * async.timeout(function(callback) {
     *     doAsyncTask(callback);
     * }, 1000);
     */
    function timeout(asyncFn, milliseconds, info) {
        var originalCallback, timer;
        var timedOut = false;

        function injectedCallback() {
            if (!timedOut) {
                originalCallback.apply(null, arguments);
                clearTimeout(timer);
            }
        }

        function timeoutCallback() {
            var name = asyncFn.name || 'anonymous';
            var error = new Error('Callback function "' + name + '" timed out.');
            error.code = 'ETIMEDOUT';
            if (info) {
                error.info = info;
            }
            timedOut = true;
            originalCallback(error);
        }

        return initialParams(function (args, origCallback) {
            originalCallback = origCallback;
            // setup timer and call original function
            timer = setTimeout(timeoutCallback, milliseconds);
            asyncFn.apply(null, args.concat(injectedCallback));
        });
    }

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil;
    var nativeMax$1 = Math.max;
    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments to numbers.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
     * time.
     *
     * @name timesLimit
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.times]{@link module:ControlFlow.times}
     * @category Control Flow
     * @param {number} count - The number of times to run the function.
     * @param {number} limit - The maximum number of async operations at a time.
     * @param {Function} iteratee - The function to call `n` times. Invoked with the
     * iteration index and a callback (n, next).
     * @param {Function} callback - see [async.map]{@link module:Collections.map}.
     */
    function timeLimit(count, limit, iteratee, callback) {
      mapLimit(baseRange(0, count, 1), limit, iteratee, callback);
    }

    /**
     * Calls the `iteratee` function `n` times, and accumulates results in the same
     * manner you would use with [map]{@link module:Collections.map}.
     *
     * @name times
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.map]{@link module:Collections.map}
     * @category Control Flow
     * @param {number} n - The number of times to run the function.
     * @param {Function} iteratee - The function to call `n` times. Invoked with the
     * iteration index and a callback (n, next).
     * @param {Function} callback - see {@link module:Collections.map}.
     * @example
     *
     * // Pretend this is some complicated async factory
     * var createUser = function(id, callback) {
     *     callback(null, {
     *         id: 'user' + id
     *     });
     * };
     *
     * // generate 5 users
     * async.times(5, function(n, next) {
     *     createUser(n, function(err, user) {
     *         next(err, user);
     *     });
     * }, function(err, users) {
     *     // we should now have 5 users
     * });
     */
    var times = doLimit(timeLimit, Infinity);

    /**
     * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
     *
     * @name timesSeries
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.times]{@link module:ControlFlow.times}
     * @category Control Flow
     * @param {number} n - The number of times to run the function.
     * @param {Function} iteratee - The function to call `n` times. Invoked with the
     * iteration index and a callback (n, next).
     * @param {Function} callback - see {@link module:Collections.map}.
     */
    var timesSeries = doLimit(timeLimit, 1);

    /**
     * A relative of `reduce`.  Takes an Object or Array, and iterates over each
     * element in series, each step potentially mutating an `accumulator` value.
     * The type of the accumulator defaults to the type of collection passed in.
     *
     * @name transform
     * @static
     * @memberOf module:Collections
     * @method
     * @category Collection
     * @param {Array|Iterable|Object} coll - A collection to iterate over.
     * @param {*} [accumulator] - The initial state of the transform.  If omitted,
     * it will default to an empty Object or Array, depending on the type of `coll`
     * @param {Function} iteratee - A function applied to each item in the
     * collection that potentially modifies the accumulator. The `iteratee` is
     * passed a `callback(err)` which accepts an optional error as its first
     * argument. If an error is passed to the callback, the transform is stopped
     * and the main `callback` is immediately called with the error.
     * Invoked with (accumulator, item, key, callback).
     * @param {Function} [callback] - A callback which is called after all the
     * `iteratee` functions have finished. Result is the transformed accumulator.
     * Invoked with (err, result).
     * @example
     *
     * async.transform([1,2,3], function(acc, item, index, callback) {
     *     // pointless async:
     *     process.nextTick(function() {
     *         acc.push(item * 2)
     *         callback(null)
     *     });
     * }, function(err, result) {
     *     // result is now equal to [2, 4, 6]
     * });
     *
     * @example
     *
     * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
     *     setImmediate(function () {
     *         obj[key] = val * 2;
     *         callback();
     *     })
     * }, function (err, result) {
     *     // result is equal to {a: 2, b: 4, c: 6}
     * })
     */
    function transform(coll, accumulator, iteratee, callback) {
        if (arguments.length === 3) {
            callback = iteratee;
            iteratee = accumulator;
            accumulator = isArray(coll) ? [] : {};
        }
        callback = once(callback || noop);

        eachOf(coll, function (v, k, cb) {
            iteratee(accumulator, v, k, cb);
        }, function (err) {
            callback(err, accumulator);
        });
    }

    /**
     * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
     * unmemoized form. Handy for testing.
     *
     * @name unmemoize
     * @static
     * @memberOf module:Utils
     * @method
     * @see [async.memoize]{@link module:Utils.memoize}
     * @category Util
     * @param {Function} fn - the memoized function
     * @returns {Function} a function that calls the original unmemoized function
     */
    function unmemoize(fn) {
        return function () {
            return (fn.unmemoized || fn).apply(null, arguments);
        };
    }

    /**
     * Repeatedly call `fn`, while `test` returns `true`. Calls `callback` when
     * stopped, or an error occurs.
     *
     * @name whilst
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Function} test - synchronous truth test to perform before each
     * execution of `fn`. Invoked with ().
     * @param {Function} iteratee - A function which is called each time `test` passes.
     * The function is passed a `callback(err)`, which must be called once it has
     * completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} [callback] - A callback which is called after the test
     * function has failed and repeated execution of `fn` has stopped. `callback`
     * will be passed an error and any arguments passed to the final `fn`'s
     * callback. Invoked with (err, [results]);
     * @returns undefined
     * @example
     *
     * var count = 0;
     * async.whilst(
     *     function() { return count < 5; },
     *     function(callback) {
     *         count++;
     *         setTimeout(function() {
     *             callback(null, count);
     *         }, 1000);
     *     },
     *     function (err, n) {
     *         // 5 seconds have passed, n = 5
     *     }
     * );
     */
    function whilst(test, iteratee, callback) {
        callback = onlyOnce(callback || noop);
        if (!test()) return callback(null);
        var next = rest(function (err, args) {
            if (err) return callback(err);
            if (test()) return iteratee(next);
            callback.apply(null, [null].concat(args));
        });
        iteratee(next);
    }

    /**
     * Repeatedly call `fn` until `test` returns `true`. Calls `callback` when
     * stopped, or an error occurs. `callback` will be passed an error and any
     * arguments passed to the final `fn`'s callback.
     *
     * The inverse of [whilst]{@link module:ControlFlow.whilst}.
     *
     * @name until
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @see [async.whilst]{@link module:ControlFlow.whilst}
     * @category Control Flow
     * @param {Function} test - synchronous truth test to perform before each
     * execution of `fn`. Invoked with ().
     * @param {Function} fn - A function which is called each time `test` fails.
     * The function is passed a `callback(err)`, which must be called once it has
     * completed with an optional `err` argument. Invoked with (callback).
     * @param {Function} [callback] - A callback which is called after the test
     * function has passed and repeated execution of `fn` has stopped. `callback`
     * will be passed an error and any arguments passed to the final `fn`'s
     * callback. Invoked with (err, [results]);
     */
    function until(test, fn, callback) {
        whilst(function () {
            return !test.apply(this, arguments);
        }, fn, callback);
    }

    /**
     * Runs the `tasks` array of functions in series, each passing their results to
     * the next in the array. However, if any of the `tasks` pass an error to their
     * own callback, the next function is not executed, and the main `callback` is
     * immediately called with the error.
     *
     * @name waterfall
     * @static
     * @memberOf module:ControlFlow
     * @method
     * @category Control Flow
     * @param {Array} tasks - An array of functions to run, each function is passed
     * a `callback(err, result1, result2, ...)` it must call on completion. The
     * first argument is an error (which can be `null`) and any further arguments
     * will be passed as arguments in order to the next task.
     * @param {Function} [callback] - An optional callback to run once all the
     * functions have completed. This will be passed the results of the last task's
     * callback. Invoked with (err, [results]).
     * @returns undefined
     * @example
     *
     * async.waterfall([
     *     function(callback) {
     *         callback(null, 'one', 'two');
     *     },
     *     function(arg1, arg2, callback) {
     *         // arg1 now equals 'one' and arg2 now equals 'two'
     *         callback(null, 'three');
     *     },
     *     function(arg1, callback) {
     *         // arg1 now equals 'three'
     *         callback(null, 'done');
     *     }
     * ], function (err, result) {
     *     // result now equals 'done'
     * });
     *
     * // Or, with named functions:
     * async.waterfall([
     *     myFirstFunction,
     *     mySecondFunction,
     *     myLastFunction,
     * ], function (err, result) {
     *     // result now equals 'done'
     * });
     * function myFirstFunction(callback) {
     *     callback(null, 'one', 'two');
     * }
     * function mySecondFunction(arg1, arg2, callback) {
     *     // arg1 now equals 'one' and arg2 now equals 'two'
     *     callback(null, 'three');
     * }
     * function myLastFunction(arg1, callback) {
     *     // arg1 now equals 'three'
     *     callback(null, 'done');
     * }
     */
    function waterfall (tasks, callback) {
        callback = once(callback || noop);
        if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
        if (!tasks.length) return callback();
        var taskIndex = 0;

        function nextTask(args) {
            if (taskIndex === tasks.length) {
                return callback.apply(null, [null].concat(args));
            }

            var taskCallback = onlyOnce(rest(function (err, args) {
                if (err) {
                    return callback.apply(null, [err].concat(args));
                }
                nextTask(args);
            }));

            args.push(taskCallback);

            var task = tasks[taskIndex++];
            task.apply(null, args);
        }

        nextTask([]);
    }

    var index = {
      applyEach: applyEach,
      applyEachSeries: applyEachSeries,
      apply: apply$1,
      asyncify: asyncify,
      auto: auto,
      autoInject: autoInject,
      cargo: cargo,
      compose: compose,
      concat: concat,
      concatSeries: concatSeries,
      constant: constant,
      detect: detect,
      detectLimit: detectLimit,
      detectSeries: detectSeries,
      dir: dir,
      doDuring: doDuring,
      doUntil: doUntil,
      doWhilst: doWhilst,
      during: during,
      each: eachLimit,
      eachLimit: eachLimit$1,
      eachOf: eachOf,
      eachOfLimit: eachOfLimit,
      eachOfSeries: eachOfSeries,
      eachSeries: eachSeries,
      ensureAsync: ensureAsync,
      every: every,
      everyLimit: everyLimit,
      everySeries: everySeries,
      filter: filter,
      filterLimit: filterLimit,
      filterSeries: filterSeries,
      forever: forever,
      log: log,
      map: map,
      mapLimit: mapLimit,
      mapSeries: mapSeries,
      mapValues: mapValues,
      mapValuesLimit: mapValuesLimit,
      mapValuesSeries: mapValuesSeries,
      memoize: memoize,
      nextTick: nextTick,
      parallel: parallelLimit,
      parallelLimit: parallelLimit$1,
      priorityQueue: priorityQueue,
      queue: queue$1,
      race: race,
      reduce: reduce,
      reduceRight: reduceRight,
      reflect: reflect,
      reflectAll: reflectAll,
      reject: reject,
      rejectLimit: rejectLimit,
      rejectSeries: rejectSeries,
      retry: retry,
      retryable: retryable,
      seq: seq,
      series: series,
      setImmediate: setImmediate$1,
      some: some,
      someLimit: someLimit,
      someSeries: someSeries,
      sortBy: sortBy,
      timeout: timeout,
      times: times,
      timesLimit: timeLimit,
      timesSeries: timesSeries,
      transform: transform,
      unmemoize: unmemoize,
      until: until,
      waterfall: waterfall,
      whilst: whilst,

      // aliases
      all: every,
      any: some,
      forEach: eachLimit,
      forEachSeries: eachSeries,
      forEachLimit: eachLimit$1,
      forEachOf: eachOf,
      forEachOfSeries: eachOfSeries,
      forEachOfLimit: eachOfLimit,
      inject: reduce,
      foldl: reduce,
      foldr: reduceRight,
      select: filter,
      selectLimit: filterLimit,
      selectSeries: filterSeries,
      wrapSync: asyncify
    };

    exports['default'] = index;
    exports.applyEach = applyEach;
    exports.applyEachSeries = applyEachSeries;
    exports.apply = apply$1;
    exports.asyncify = asyncify;
    exports.auto = auto;
    exports.autoInject = autoInject;
    exports.cargo = cargo;
    exports.compose = compose;
    exports.concat = concat;
    exports.concatSeries = concatSeries;
    exports.constant = constant;
    exports.detect = detect;
    exports.detectLimit = detectLimit;
    exports.detectSeries = detectSeries;
    exports.dir = dir;
    exports.doDuring = doDuring;
    exports.doUntil = doUntil;
    exports.doWhilst = doWhilst;
    exports.during = during;
    exports.each = eachLimit;
    exports.eachLimit = eachLimit$1;
    exports.eachOf = eachOf;
    exports.eachOfLimit = eachOfLimit;
    exports.eachOfSeries = eachOfSeries;
    exports.eachSeries = eachSeries;
    exports.ensureAsync = ensureAsync;
    exports.every = every;
    exports.everyLimit = everyLimit;
    exports.everySeries = everySeries;
    exports.filter = filter;
    exports.filterLimit = filterLimit;
    exports.filterSeries = filterSeries;
    exports.forever = forever;
    exports.log = log;
    exports.map = map;
    exports.mapLimit = mapLimit;
    exports.mapSeries = mapSeries;
    exports.mapValues = mapValues;
    exports.mapValuesLimit = mapValuesLimit;
    exports.mapValuesSeries = mapValuesSeries;
    exports.memoize = memoize;
    exports.nextTick = nextTick;
    exports.parallel = parallelLimit;
    exports.parallelLimit = parallelLimit$1;
    exports.priorityQueue = priorityQueue;
    exports.queue = queue$1;
    exports.race = race;
    exports.reduce = reduce;
    exports.reduceRight = reduceRight;
    exports.reflect = reflect;
    exports.reflectAll = reflectAll;
    exports.reject = reject;
    exports.rejectLimit = rejectLimit;
    exports.rejectSeries = rejectSeries;
    exports.retry = retry;
    exports.retryable = retryable;
    exports.seq = seq;
    exports.series = series;
    exports.setImmediate = setImmediate$1;
    exports.some = some;
    exports.someLimit = someLimit;
    exports.someSeries = someSeries;
    exports.sortBy = sortBy;
    exports.timeout = timeout;
    exports.times = times;
    exports.timesLimit = timeLimit;
    exports.timesSeries = timesSeries;
    exports.transform = transform;
    exports.unmemoize = unmemoize;
    exports.until = until;
    exports.waterfall = waterfall;
    exports.whilst = whilst;
    exports.all = every;
    exports.allLimit = everyLimit;
    exports.allSeries = everySeries;
    exports.any = some;
    exports.anyLimit = someLimit;
    exports.anySeries = someSeries;
    exports.find = detect;
    exports.findLimit = detectLimit;
    exports.findSeries = detectSeries;
    exports.forEach = eachLimit;
    exports.forEachSeries = eachSeries;
    exports.forEachLimit = eachLimit$1;
    exports.forEachOf = eachOf;
    exports.forEachOfSeries = eachOfSeries;
    exports.forEachOfLimit = eachOfLimit;
    exports.inject = reduce;
    exports.foldl = reduce;
    exports.foldr = reduceRight;
    exports.select = filter;
    exports.selectLimit = filterLimit;
    exports.selectSeries = filterSeries;
    exports.wrapSync = asyncify;

}));
}).call(this,_dereq_('bfs-process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bfs-process":11}],2:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Buffer module. Exports an appropriate version of Buffer for the current
 * platform.
 */
var buffer_core = _dereq_('./buffer_core');
var BufferCoreArray = _dereq_('./buffer_core_array');
var BufferCoreArrayBuffer = _dereq_('./buffer_core_arraybuffer');
var BufferCoreImageData = _dereq_('./buffer_core_imagedata');
var string_util_1 = _dereq_('./string_util');
var util_1 = _dereq_('./util');
// BC implementations earlier in the array are preferred.
var BufferCorePreferences = [
    BufferCoreArrayBuffer,
    BufferCoreImageData,
    BufferCoreArray
];
var PreferredBufferCore = (function () {
    var i, bci;
    for (i = 0; i < BufferCorePreferences.length; i++) {
        bci = BufferCorePreferences[i];
        if (bci.isAvailable())
            return bci;
    }
    // Should never happen; Array works in all browsers.
    throw new Error("This browser does not support any available BufferCore implementations.");
})();
/**
 * Checks integer writes.
 */
function checkInt(buffer, value, offset, ext, max, min) {
    if (value > max || value < min) {
        throw new TypeError('value is out of bounds');
    }
    else if (offset + ext > buffer.length) {
        throw new RangeError('index out of range');
    }
}
/**
 * Checks floating point writes.
 */
function checkFloat(buffer, value, offset, ext) {
    if (offset + ext > buffer.length) {
        throw new RangeError('index out of range');
    }
}
/**
 * Check offset into buffer.
 */
function checkOffset(offset, ext, length) {
    if (offset + ext > length) {
        throw new RangeError('index out of range');
    }
}
var byte2maxint = {};
byte2maxint[0] = 0 /* INT0 */;
byte2maxint[1] = 127 /* INT8 */;
byte2maxint[2] = 32767 /* INT16 */;
byte2maxint[3] = 8388607 /* INT24 */;
byte2maxint[4] = 2147483647 /* INT32 */;
byte2maxint[5] = 549755813887 /* INT40 */;
byte2maxint[6] = 140737488355327 /* INT48 */;
var byte2minint = {};
byte2minint[0] = 0 /* INT0 */;
byte2minint[1] = -128 /* INT8 */;
byte2minint[2] = -32768 /* INT16 */;
byte2minint[3] = -8388608 /* INT24 */;
byte2minint[4] = -2147483648 /* INT32 */;
byte2minint[5] = -549755813888 /* INT40 */;
byte2minint[6] = -140737488355328 /* INT48 */;
var byte2maxuint = {};
byte2maxuint[0] = 0 /* INT0 */;
byte2maxuint[1] = 255 /* INT8 */;
byte2maxuint[2] = 65535 /* INT16 */;
byte2maxuint[3] = 16777215 /* INT24 */;
byte2maxuint[4] = 4294967295 /* INT32 */;
byte2maxuint[5] = 1099511627775 /* INT40 */;
byte2maxuint[6] = 281474976710655 /* INT48 */;
/**
 * Emulates Node's Buffer API. Wraps a BufferCore object that is responsible
 * for actually writing/reading data from some data representation in memory.
 */
var Buffer = (function () {
    function Buffer(arg1, arg2, arg3) {
        if (arg2 === void 0) { arg2 = 'utf8'; }
        var i;
        // Node apparently allows you to construct buffers w/o 'new'.
        if (!(this instanceof Buffer)) {
            return new Buffer(arg1, arg2);
        }
        this.offset = 0;
        if (arg1 instanceof buffer_core.BufferCoreCommon) {
            // constructor (data: buffer_core.BufferCore, start?: number, end?: number)
            this.data = arg1;
            var start = typeof arg2 === 'number' ? arg2 : 0;
            var end = typeof arg3 === 'number' ? arg3 : this.data.getLength();
            this.offset = start;
            this.length = end - start;
        }
        else if (typeof arg1 === 'number') {
            // constructor (size: number);
            if (arg1 !== (arg1 >>> 0)) {
                throw new RangeError('Buffer size must be a uint32.');
            }
            this.length = arg1;
            this.data = new PreferredBufferCore(arg1);
        }
        else if (util_1.isArrayBufferView(arg1)) {
            // constructor (data: ArrayBufferView);
            this.data = new BufferCoreArrayBuffer(arg1);
            this.length = arg1.byteLength;
        }
        else if (util_1.isArrayBuffer(arg1)) {
            // constructor (data: ArrayBuffer);
            // Note: Can't do 'instanceof ArrayBuffer' in Safari in some cases. :|
            this.data = new BufferCoreArrayBuffer(arg1);
            this.length = arg1.byteLength;
        }
        else if (arg1 instanceof Buffer) {
            // constructor (data: Buffer);
            var argBuff = arg1;
            this.data = new PreferredBufferCore(arg1.length);
            this.length = arg1.length;
            argBuff.copy(this);
        }
        else if (Array.isArray(arg1) || (arg1 != null && typeof arg1 === 'object' && typeof arg1[0] === 'number')) {
            // constructor (data: number[]);
            this.data = new PreferredBufferCore(arg1.length);
            for (i = 0; i < arg1.length; i++) {
                this.data.writeUInt8(i, arg1[i]);
            }
            this.length = arg1.length;
        }
        else if (typeof arg1 === 'string') {
            // constructor (data: string, encoding?: string);
            this.length = Buffer.byteLength(arg1, arg2);
            this.data = new PreferredBufferCore(this.length);
            this.write(arg1, 0, this.length, arg2);
        }
        else {
            // constructor (data: {type: string; data: number[]}, encoding?: string)
            if (arg1['type'] === 'Buffer' && Array.isArray(arg1['data'])) {
                this.data = new PreferredBufferCore(arg1.data.length);
                for (i = 0; i < arg1.data.length; i++) {
                    this.data.writeUInt8(i, arg1.data[i]);
                }
                this.length = arg1.data.length;
            }
            else {
                throw new Error("Invalid argument to Buffer constructor: " + arg1);
            }
        }
    }
    /* TEST METHODS BEGIN */
    Buffer.getAvailableBufferCores = function () {
        return BufferCorePreferences.filter(function (bci) { return bci.isAvailable(); });
    };
    Buffer.getPreferredBufferCore = function () {
        return PreferredBufferCore;
    };
    Buffer.setPreferredBufferCore = function (bci) {
        PreferredBufferCore = bci;
    };
    /* TEST METHODS END */
    Buffer.prototype.getBufferCore = function () {
        return this.data;
    };
    Buffer.prototype.getOffset = function () {
        return this.offset;
    };
    /**
     * **NONSTANDARD**: Set the octet at index. Emulates NodeJS buffer's index
     * operation. Octet can be signed or unsigned.
     * @param {number} index - the index to set the value at
     * @param {number} value - the value to set at the given index
     */
    Buffer.prototype.set = function (index, value) {
        // In Node, the following happens:
        // buffer[0] = -1;
        // buffer[0]; // 255
        if (value < 0) {
            return this.writeInt8(value, index);
        }
        else {
            return this.writeUInt8(value, index);
        }
    };
    /**
     * **NONSTANDARD**: Get the octet at index.
     * @param {number} index - index to fetch the value at
     * @return {number} the value at the given index
     */
    Buffer.prototype.get = function (index) {
        return this.readUInt8(index);
    };
    /**
     * Writes string to the buffer at offset using the given encoding.
     * If buffer did not contain enough space to fit the entire string, it will
     * write a partial amount of the string.
     * @param {string} str - Data to be written to buffer
     * @param {number} [offset=0] - Offset in the buffer to write to
     * @param {number} [length=this.length] - Number of bytes to write
     * @param {string} [encoding=utf8] - Character encoding
     * @return {number} Number of octets written.
     */
    Buffer.prototype.write = function (str, offset, length, encoding) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = this.length; }
        if (encoding === void 0) { encoding = 'utf8'; }
        // I hate Node's optional arguments.
        if (typeof offset === 'string') {
            // 'str' and 'encoding' specified
            encoding = "" + offset;
            offset = 0;
            length = this.length;
        }
        else if (typeof length === 'string') {
            // 'str', 'offset', and 'encoding' specified
            encoding = "" + length;
            length = this.length;
        }
        // Check for invalid offsets.
        if (offset > this.length || offset < 0) {
            throw new RangeError("Invalid offset.");
        }
        var strUtil = string_util_1.FindUtil(encoding);
        // Are we trying to write past the buffer?
        length = length + offset > this.length ? this.length - offset : length;
        offset += this.offset;
        return strUtil.str2byte(str, 
        // Avoid creating a slice unless it's needed.
        offset === 0 && length === this.length ? this : new Buffer(this.data, offset, length + offset));
    };
    /**
     * Decodes a portion of the Buffer into a String.
     * @param {string} encoding - Character encoding to decode to
     * @param {number} [start=0] - Start position in the buffer
     * @param {number} [end=this.length] - Ending position in the buffer
     * @return {string} A string from buffer data encoded with encoding, beginning
     *   at start, and ending at end.
     */
    Buffer.prototype.toString = function (encoding, start, end) {
        if (encoding === void 0) { encoding = 'utf8'; }
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = this.length; }
        if (!(start <= end)) {
            throw new Error("Invalid start/end positions: " + start + " - " + end);
        }
        if (start === end) {
            return '';
        }
        if (end > this.length) {
            end = this.length;
        }
        var strUtil = string_util_1.FindUtil(encoding);
        // Get the string representation of the given slice. Create a new buffer
        // if need be.
        return strUtil.byte2str(start === 0 && end === this.length ? this : new Buffer(this.data, start + this.offset, end + this.offset));
    };
    /**
     * Returns a JSON-representation of the Buffer instance, which is identical to
     * the output for JSON Arrays. JSON.stringify implicitly calls this function
     * when stringifying a Buffer instance.
     * @return {object} An object that can be used for JSON stringification.
     */
    Buffer.prototype.toJSON = function () {
        // Construct a byte array for the JSON 'data'.
        var len = this.length;
        var byteArr = new Array(len);
        for (var i = 0; i < len; i++) {
            byteArr[i] = this.readUInt8(i);
        }
        return {
            type: 'Buffer',
            data: byteArr
        };
    };
    /**
     * Returns a string with the first 50 hexadecimal values of the Buffer.
     */
    Buffer.prototype.inspect = function () {
        var digits = [], i, len = this.length < exports.INSPECT_MAX_BYTES ? this.length : exports.INSPECT_MAX_BYTES;
        for (i = 0; i < len; i++) {
            digits.push(this.readUInt8(i).toString(16));
        }
        return "<Buffer " + digits.join(" ") + (this.length > len ? " ... " : "") + ">";
    };
    /**
     * Converts the buffer into an ArrayBuffer. Will attempt to use an underlying
     * ArrayBuffer, but will need to copy the data if the underlaying object is an
     * ArrayBufferView or not an ArrayBuffer.
     */
    Buffer.prototype.toArrayBuffer = function () {
        var buffCore = this.getBufferCore();
        if (buffCore instanceof BufferCoreArrayBuffer) {
            var dv = buffCore.getDataView(), ab = dv.buffer;
            // Ensure 1-1 mapping from AB to Buffer.
            if (this.offset === 0 && dv.byteOffset === 0 && dv.byteLength === ab.byteLength && this.length === dv.byteLength) {
                return ab;
            }
            else {
                return ab.slice(this.offset + dv.byteOffset, this.length);
            }
        }
        else {
            var ab = new ArrayBuffer(this.length), newBuff = new Buffer(ab);
            this.copy(newBuff, 0, 0, this.length);
            return ab;
        }
    };
    /**
     * Converts the buffer into a Uint8Array. Will attempt to use an underlying
     * ArrayBuffer, but will need to copy the data if the Buffer is not backed
     * by an ArrayBuffer.
     */
    Buffer.prototype.toUint8Array = function () {
        var buffCore = this.getBufferCore();
        if (buffCore instanceof BufferCoreArrayBuffer) {
            var dv = buffCore.getDataView(), ab = dv.buffer, offset = this.offset + dv.byteOffset, length = this.length;
            return new Uint8Array(ab).subarray(offset, offset + length);
        }
        else {
            var ab = new ArrayBuffer(this.length), newBuff = new Buffer(ab);
            this.copy(newBuff, 0, 0, this.length);
            return new Uint8Array(ab);
        }
    };
    /**
     * Operates similar to Array#indexOf(). Accepts a String, Buffer or Number.
     * Strings are interpreted as UTF8. Buffers will use the entire buffer. So in order
     * to compare a partial Buffer use Buffer#slice(). Numbers can range from 0 to 255.
     */
    Buffer.prototype.indexOf = function (value, byteOffset) {
        if (byteOffset === void 0) { byteOffset = 0; }
        var normalizedValue;
        if (typeof (value) === 'string') {
            normalizedValue = new Buffer(value, 'utf8');
        }
        else if (Buffer.isBuffer(value)) {
            normalizedValue = value;
        }
        else if (typeof (value) === 'number') {
            normalizedValue = new Buffer([value]);
        }
        else {
            throw new TypeError("indexOf only operates on strings, buffers, and numbers.");
        }
        // Node's normalization code.
        if (byteOffset > 0x7fffffff) {
            byteOffset = 0x7fffffff;
        }
        else if (byteOffset < -0x80000000) {
            byteOffset = -0x80000000;
        }
        byteOffset >>= 0;
        // Negative offsets are from the end of the array.
        if (byteOffset < 0) {
            byteOffset = this.length + byteOffset;
            if (byteOffset < 0) {
                // If the calculated index is less than 0, then the whole array will be searched.
                byteOffset = 0;
            }
        }
        var valOffset = 0, currentVal, valLen = normalizedValue.length, bufLen = this.length;
        // Edge-case: Can't indexOf with zero-length data.
        if (valLen === 0) {
            return -1;
        }
        while (valOffset < valLen && byteOffset < bufLen) {
            if (normalizedValue.readUInt8(valOffset) == this.readUInt8(byteOffset)) {
                valOffset++;
            }
            else {
                // Doesn't match. Restart search.
                valOffset = 0;
            }
            byteOffset++;
        }
        if (valOffset == valLen) {
            return byteOffset - valLen;
        }
        else {
            return -1;
        }
    };
    /**
     * Does copy between buffers. The source and target regions can be overlapped.
     * All values passed that are undefined/NaN or are out of bounds are set equal
     * to their respective defaults.
     * @param {Buffer} target - Buffer to copy into
     * @param {number} [targetStart=0] - Index to start copying to in the targetBuffer
     * @param {number} [sourceStart=0] - Index in this buffer to start copying from
     * @param {number} [sourceEnd=this.length] - Index in this buffer stop copying at
     * @return {number} The number of bytes copied into the target buffer.
     */
    Buffer.prototype.copy = function (target, targetStart, sourceStart, sourceEnd) {
        if (targetStart === void 0) { targetStart = 0; }
        if (sourceStart === void 0) { sourceStart = 0; }
        if (sourceEnd === void 0) { sourceEnd = this.length; }
        if (sourceStart < 0) {
            throw new RangeError('sourceStart out of bounds');
        }
        if (sourceEnd < 0) {
            throw new RangeError('sourceEnd out of bounds');
        }
        if (targetStart < 0) {
            throw new RangeError("targetStart out of bounds");
        }
        if (sourceEnd <= sourceStart || sourceStart >= this.length || targetStart > target.length) {
            return 0;
        }
        var bytesCopied = Math.min(sourceEnd - sourceStart, target.length - targetStart, this.length - sourceStart);
        // Fast path.
        if (target instanceof Buffer && this.data instanceof BufferCoreArrayBuffer) {
            var targetCore = target.getBufferCore();
            if (targetCore instanceof BufferCoreArrayBuffer) {
                return this.data.copyTo(targetCore, targetStart + target.offset, sourceStart + this.offset, sourceStart + bytesCopied + this.offset);
            }
        }
        // Copy as many 32-bit chunks as possible.
        // TODO: Alignment.
        for (var i = 0; i < bytesCopied - 3; i += 4) {
            target.writeInt32LE(this.readInt32LE(sourceStart + i), targetStart + i);
        }
        // Copy any remaining bytes, if applicable
        for (var i = bytesCopied & 0xFFFFFFFC; i < bytesCopied; i++) {
            target.writeUInt8(this.readUInt8(sourceStart + i), targetStart + i);
        }
        return bytesCopied;
    };
    /**
     * Returns a slice of this buffer.
     * @param {number} [start=0] - Index to start slicing from
     * @param {number} [end=this.length] - Index to stop slicing at
     * @return {Buffer} A new buffer which references the same
     *   memory as the old, but offset and cropped by the start (defaults to 0) and
     *   end (defaults to buffer.length) indexes. Negative indexes start from the end
     *   of the buffer.
     */
    Buffer.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = this.length; }
        start = start >> 0;
        end = end >> 0;
        // Translate negative indices to positive ones.
        if (start < 0) {
            start += this.length;
            if (start < 0) {
                start = 0;
            }
        }
        if (end < 0) {
            end += this.length;
            if (end < 0) {
                end = 0;
            }
        }
        if (end > this.length) {
            end = this.length;
        }
        if (start > end) {
            start = end;
        }
        // Sanity check.
        if (start < 0 || end < 0 || start > this.length || end > this.length) {
            throw new Error("Invalid slice indices.");
        }
        // Create a new buffer backed by the same BufferCore.
        return new Buffer(this.data, start + this.offset, end + this.offset);
    };
    /**
     * [NONSTANDARD] A copy-based version of Buffer.slice.
     */
    Buffer.prototype.sliceCopy = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = this.length; }
        // Translate negative indices to positive ones.
        if (start < 0) {
            start += this.length;
            if (start < 0) {
                start = 0;
            }
        }
        if (end < 0) {
            end += this.length;
            if (end < 0) {
                end = 0;
            }
        }
        if (end > this.length) {
            end = this.length;
        }
        if (start > end) {
            start = end;
        }
        // Sanity check.
        if (start < 0 || end < 0 || start >= this.length || end > this.length) {
            throw new Error("Invalid slice indices.");
        }
        // Copy the BufferCore.
        return new Buffer(this.data.copy(start + this.offset, end + this.offset));
    };
    /**
     * Fills the buffer with the specified value. If the offset and end are not
     * given it will fill the entire buffer.
     * @param {(string|number)} value - The value to fill the buffer with
     * @param {number} [offset=0]
     * @param {number} [end=this.length]
     */
    Buffer.prototype.fill = function (value, offset, end) {
        if (offset === void 0) { offset = 0; }
        if (end === void 0) { end = this.length; }
        var i;
        offset = offset >> 0;
        end = end >> 0;
        if (offset < 0 || end > this.length) {
            throw new RangeError('out of range index');
        }
        else if (end <= offset) {
            return this;
        }
        if (typeof value !== 'string') {
            // Coerces various things to numbers. Node does this.
            value = value >>> 0;
        }
        else if (value.length === 1) {
            var code = value.charCodeAt(0);
            if (code < 256) {
                value = code;
            }
        }
        if (typeof value === 'number') {
            offset += this.offset;
            end += this.offset;
            this.data.fill(value, offset, end);
        }
        else if (value.length > 0) {
            var byteLen = Buffer.byteLength(value, 'utf8'), lastBulkWrite = end - byteLen;
            while (offset < lastBulkWrite) {
                this.write(value, offset, byteLen, 'utf8');
                offset += byteLen;
            }
            if (offset < end) {
                this.write(value, offset, end - offset, 'utf8');
            }
        }
        return this;
    };
    Buffer.prototype.readUIntLE = function (offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        offset += this.offset;
        var value = 0;
        switch (byteLength) {
            case 1:
                return this.data.readUInt8(offset);
            case 2:
                return this.data.readUInt16LE(offset);
            case 3:
                return this.data.readUInt8(offset) | (this.data.readUInt16LE(offset + 1) << 8);
            case 4:
                return this.data.readUInt32LE(offset);
            case 6:
                // Shift right by 40 bits.
                // (Note: We shift by 23 to avoid introducing a sign bit!)
                value += (this.data.readUInt8(offset + 5) << 23) * 0x20000;
            // FALL-THRU
            case 5:
                // Shift right by 32 bits.
                value += (this.data.readUInt8(offset + 4) << 23) * 0x200;
                return value + this.data.readUInt32LE(offset);
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
    };
    Buffer.prototype.readUIntBE = function (offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        offset += this.offset;
        var value = 0;
        switch (byteLength) {
            case 1:
                return this.data.readUInt8(offset);
            case 2:
                return this.data.readUInt16BE(offset);
            case 3:
                return this.data.readUInt8(offset + 2) | (this.data.readUInt16BE(offset) << 8);
            case 4:
                return this.data.readUInt32BE(offset);
            case 6:
                // Shift right by 40 bits.
                // (Note: We shift by 23 to avoid introducing a sign bit!)
                value += (this.data.readUInt8(offset) << 23) * 0x20000;
                offset++;
            // FALL-THRU
            case 5:
                // Shift right by 32 bits.
                value += (this.data.readUInt8(offset) << 23) * 0x200;
                return value + this.data.readUInt32BE(offset + 1);
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
    };
    Buffer.prototype.readIntLE = function (offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        offset += this.offset;
        switch (byteLength) {
            case 1:
                return this.data.readInt8(offset);
            case 2:
                return this.data.readInt16LE(offset);
            case 3:
                return this.data.readUInt8(offset) | (this.data.readInt16LE(offset + 1) << 8);
            case 4:
                return this.data.readInt32LE(offset);
            case 6:
                // Shift right by 40 bits.
                // (Note: We shift by 23 to avoid introducing a sign bit!)
                return ((this.data.readInt8(offset + 5) << 23) * 0x20000) + this.readUIntLE(offset - this.offset, 5, noAssert);
            case 5:
                // Shift right by 32 bits.
                return ((this.data.readInt8(offset + 4) << 23) * 0x200) + this.data.readUInt32LE(offset);
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
    };
    Buffer.prototype.readIntBE = function (offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
        }
        offset += this.offset;
        switch (byteLength) {
            case 1:
                return this.data.readInt8(offset);
            case 2:
                return this.data.readInt16BE(offset);
            case 3:
                return this.data.readUInt8(offset + 2) | (this.data.readInt16BE(offset) << 8);
            case 4:
                return this.data.readInt32BE(offset);
            case 6:
                // Shift right by 40 bits.
                // (Note: We shift by 23 to avoid introducing a sign bit!)
                return ((this.data.readInt8(offset) << 23) * 0x20000) + this.readUIntBE(offset - this.offset + 1, 5, noAssert);
            case 5:
                // Shift right by 32 bits.
                return ((this.data.readInt8(offset) << 23) * 0x200) + this.data.readUInt32BE(offset + 1);
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
    };
    Buffer.prototype.readUInt8 = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 1, this.length);
        }
        offset += this.offset;
        return this.data.readUInt8(offset);
    };
    Buffer.prototype.readUInt16LE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 2, this.length);
        }
        offset += this.offset;
        return this.data.readUInt16LE(offset);
    };
    Buffer.prototype.readUInt16BE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 2, this.length);
        }
        offset += this.offset;
        return this.data.readUInt16BE(offset);
    };
    Buffer.prototype.readUInt32LE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readUInt32LE(offset);
    };
    Buffer.prototype.readUInt32BE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readUInt32BE(offset);
    };
    Buffer.prototype.readInt8 = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 1, this.length);
        }
        offset += this.offset;
        return this.data.readInt8(offset);
    };
    Buffer.prototype.readInt16LE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 2, this.length);
        }
        offset += this.offset;
        return this.data.readInt16LE(offset);
    };
    Buffer.prototype.readInt16BE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 2, this.length);
        }
        offset += this.offset;
        return this.data.readInt16BE(offset);
    };
    Buffer.prototype.readInt32LE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readInt32LE(offset);
    };
    Buffer.prototype.readInt32BE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readInt32BE(offset);
    };
    Buffer.prototype.readFloatLE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readFloatLE(offset);
    };
    Buffer.prototype.readFloatBE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 4, this.length);
        }
        offset += this.offset;
        return this.data.readFloatBE(offset);
    };
    Buffer.prototype.readDoubleLE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 8, this.length);
        }
        offset += this.offset;
        return this.data.readDoubleLE(offset);
    };
    Buffer.prototype.readDoubleBE = function (offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkOffset(offset, 8, this.length);
        }
        offset += this.offset;
        return this.data.readDoubleBE(offset);
    };
    Buffer.prototype.writeUIntLE = function (value, offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, byteLength, byte2maxuint[byteLength], 0);
        }
        var rv = offset + byteLength;
        offset += this.offset;
        switch (byteLength) {
            case 1:
                this.data.writeUInt8(offset, value);
                break;
            case 2:
                this.data.writeUInt16LE(offset, value);
                break;
            case 3:
                this.data.writeUInt8(offset, value & 0xFF);
                this.data.writeUInt16LE(offset + 1, value >> 8);
                break;
            case 4:
                this.data.writeUInt32LE(offset, value);
                break;
            case 6:
                this.data.writeUInt8(offset, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                offset++;
            // FALL-THRU
            case 5:
                this.data.writeUInt8(offset, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                this.data.writeUInt32LE(offset + 1, value);
                break;
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
        return rv;
    };
    Buffer.prototype.writeUIntBE = function (value, offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, byteLength, byte2maxuint[byteLength], 0);
        }
        var rv = offset + byteLength;
        offset += this.offset;
        switch (byteLength) {
            case 1:
                this.data.writeUInt8(offset, value);
                break;
            case 2:
                this.data.writeUInt16BE(offset, value);
                break;
            case 3:
                this.data.writeUInt8(offset + 2, value & 0xFF);
                this.data.writeUInt16BE(offset, value >> 8);
                break;
            case 4:
                this.data.writeUInt32BE(offset, value);
                break;
            case 6:
                this.data.writeUInt8(offset + 5, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
            // FALL-THRU
            case 5:
                this.data.writeUInt8(offset + 4, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                this.data.writeUInt32BE(offset, value);
                break;
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
        return rv;
    };
    Buffer.prototype.writeIntLE = function (value, offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, byteLength, byte2maxint[byteLength], byte2minint[byteLength]);
        }
        var rv = offset + byteLength;
        offset += this.offset;
        switch (byteLength) {
            case 1:
                this.data.writeInt8(offset, value);
                break;
            case 2:
                this.data.writeInt16LE(offset, value);
                break;
            case 3:
                this.data.writeUInt8(offset, value & 0xFF);
                this.data.writeInt16LE(offset + 1, value >> 8);
                break;
            case 4:
                this.data.writeInt32LE(offset, value);
                break;
            case 6:
                this.data.writeUInt8(offset, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                offset++;
            // FALL-THRU
            case 5:
                this.data.writeUInt8(offset, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                this.data.writeInt32LE(offset + 1, value);
                break;
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
        return rv;
    };
    Buffer.prototype.writeIntBE = function (value, offset, byteLength, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, byteLength, byte2maxint[byteLength], byte2minint[byteLength]);
        }
        var rv = offset + byteLength;
        offset += this.offset;
        switch (byteLength) {
            case 1:
                this.data.writeInt8(offset, value);
                break;
            case 2:
                this.data.writeInt16BE(offset, value);
                break;
            case 3:
                this.data.writeUInt8(offset + 2, value & 0xFF);
                this.data.writeInt16BE(offset, value >> 8);
                break;
            case 4:
                this.data.writeInt32BE(offset, value);
                break;
            case 6:
                this.data.writeUInt8(offset + 5, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
            // FALL-THRU
            case 5:
                this.data.writeUInt8(offset + 4, value & 0xFF);
                // "Bit shift", since we're over 32-bits.
                value = Math.floor(value / 256);
                this.data.writeInt32BE(offset, value);
                break;
            default:
                throw new Error("Invalid byteLength: " + byteLength);
        }
        return rv;
    };
    Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 1, 255 /* INT8 */, 0);
        }
        this.data.writeUInt8(offset + this.offset, value);
        return offset + 1;
    };
    Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 2, 65535 /* INT16 */, 0);
        }
        this.data.writeUInt16LE(offset + this.offset, value);
        return offset + 2;
    };
    Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 2, 65535 /* INT16 */, 0);
        }
        this.data.writeUInt16BE(offset + this.offset, value);
        return offset + 2;
    };
    Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 4, 4294967295 /* INT32 */, 0);
        }
        this.data.writeUInt32LE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 4, 4294967295 /* INT32 */, 0);
        }
        this.data.writeUInt32BE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 1, 127 /* INT8 */, -128 /* INT8 */);
        }
        this.data.writeInt8(offset + this.offset, value);
        return offset + 1;
    };
    Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 2, 32767 /* INT16 */, -32768 /* INT16 */);
        }
        this.data.writeInt16LE(offset + this.offset, value);
        return offset + 2;
    };
    Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 2, 32767 /* INT16 */, -32768 /* INT16 */);
        }
        this.data.writeInt16BE(offset + this.offset, value);
        return offset + 2;
    };
    Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 4, 2147483647 /* INT32 */, -2147483648 /* INT32 */);
        }
        this.data.writeInt32LE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkInt(this, value, offset, 4, 2147483647 /* INT32 */, -2147483648 /* INT32 */);
        }
        this.data.writeInt32BE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkFloat(this, value, offset, 4);
        }
        this.data.writeFloatLE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkFloat(this, value, offset, 4);
        }
        this.data.writeFloatBE(offset + this.offset, value);
        return offset + 4;
    };
    Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkFloat(this, value, offset, 8);
        }
        this.data.writeDoubleLE(offset + this.offset, value);
        return offset + 8;
    };
    Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
        if (noAssert === void 0) { noAssert = false; }
        offset = offset >>> 0;
        if (!noAssert) {
            checkFloat(this, value, offset, 8);
        }
        this.data.writeDoubleBE(offset + this.offset, value);
        return offset + 8;
    };
    ///**************************STATIC METHODS********************************///
    /**
     * Checks if enc is a valid string encoding type.
     * @param {string} enc - Name of a string encoding type.
     * @return {boolean} Whether or not enc is a valid encoding type.
     */
    Buffer.isEncoding = function (enc) {
        try {
            string_util_1.FindUtil(enc);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    Buffer.compare = function (a, b) {
        if (a === b) {
            return 0;
        }
        else {
            var i, aLen = a.length, bLen = b.length, cmpLength = Math.min(aLen, bLen), u1, u2;
            for (i = 0; i < cmpLength; i++) {
                u1 = a.readUInt8(i);
                u2 = b.readUInt8(i);
                if (u1 !== u2) {
                    return u1 > u2 ? 1 : -1;
                }
            }
            if (aLen === bLen) {
                return 0;
            }
            else {
                return aLen > bLen ? 1 : -1;
            }
        }
    };
    /**
     * Tests if obj is a Buffer.
     * @param {object} obj - An arbitrary object
     * @return {boolean} True if this object is a Buffer.
     */
    Buffer.isBuffer = function (obj) {
        return obj instanceof Buffer;
    };
    /**
     * Gives the actual byte length of a string. This is not the same as
     * String.prototype.length since that returns the number of characters in a
     * string.
     * @param {string} str - The string to get the byte length of
     * @param {string} [encoding=utf8] - Character encoding of the string
     * @return {number} The number of bytes in the string
     */
    Buffer.byteLength = function (str, encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        var strUtil;
        try {
            strUtil = string_util_1.FindUtil(encoding);
        }
        catch (e) {
            // Default to UTF8.
            strUtil = string_util_1.FindUtil('utf8');
        }
        if (typeof (str) !== 'string') {
            str = "" + str;
        }
        return strUtil.byteLength(str);
    };
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the
     * list together.
     * If the list has no items, or if the totalLength is 0, then it returns a
     * zero-length buffer.
     * If the list has exactly one item, then the first item of the list is
     * returned.
     * If the list has more than one item, then a new Buffer is created.
     * If totalLength is not provided, it is read from the buffers in the list.
     * However, this adds an additional loop to the function, so it is faster to
     * provide the length explicitly.
     * @param {Buffer[]} list - List of Buffer objects to concat
     * @param {number} [totalLength] - Total length of the buffers when concatenated
     * @return {Buffer}
     */
    Buffer.concat = function (list, totalLength) {
        var item;
        if (list.length === 0 || totalLength === 0) {
            return new Buffer(0);
        }
        else {
            if (totalLength === undefined) {
                // Calculate totalLength
                totalLength = 0;
                for (var i = 0; i < list.length; i++) {
                    item = list[i];
                    if (!Buffer.isBuffer(item)) {
                        throw new TypeError("Concat only operates on Buffer objects.");
                    }
                    totalLength += item.length;
                }
            }
            var buf = new Buffer(totalLength);
            var curPos = 0;
            for (var j = 0; j < list.length; j++) {
                item = list[j];
                if (!Buffer.isBuffer(item)) {
                    throw new TypeError("Concat only operates on Buffer objects.");
                }
                curPos += item.copy(buf, curPos);
            }
            return buf;
        }
    };
    /**
     * Returns a boolean of whether this and otherBuffer have the same bytes.
     */
    Buffer.prototype.equals = function (buffer) {
        if (Buffer.isBuffer(buffer)) {
            var i;
            if (buffer.length !== this.length) {
                return false;
            }
            else {
                // TODO: Bigger strides.
                for (i = 0; i < this.length; i++) {
                    if (this.readUInt8(i) !== buffer.readUInt8(i)) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            throw new TypeError("Argument must be a buffer.");
        }
    };
    /**
     * Returns a number indicating whether this comes before or after or is
     * the same as the otherBuffer in sort order.
     */
    Buffer.prototype.compare = function (buffer) {
        return Buffer.compare(this, buffer);
    };
    return Buffer;
}());
exports.Buffer = Buffer;
// Type-check the class.
var _ = Buffer;
/**
 * Emulation of Node's SlowBuffer. We don't differentiate between the two.
 */
var SlowBuffer = (function (_super) {
    __extends(SlowBuffer, _super);
    function SlowBuffer(length, arg2, arg3) {
        // Logic copied from Node; its constructor is simpler.
        _super.call(this, +length != length ? 0 : +length);
        // Node apparently allows you to construct buffers w/o 'new'.
        if (!(this instanceof SlowBuffer)) {
            return new SlowBuffer(length, arg2, arg3);
        }
    }
    SlowBuffer.isBuffer = function (obj) {
        return Buffer.isBuffer(obj);
    };
    SlowBuffer.byteLength = function (str, encoding) {
        return Buffer.byteLength(str, encoding);
    };
    SlowBuffer.concat = function (list, totalLength) {
        return Buffer.concat(list, totalLength);
    };
    return SlowBuffer;
}(Buffer));
exports.SlowBuffer = SlowBuffer;
// Type-check the class.
_ = SlowBuffer;
/**
 * Determines how many bytes to print via inspect().
 */
exports.INSPECT_MAX_BYTES = 50;

},{"./buffer_core":3,"./buffer_core_array":4,"./buffer_core_arraybuffer":5,"./buffer_core_imagedata":6,"./string_util":8,"./util":9}],3:[function(_dereq_,module,exports){
/**
 * !!!NOTE: This file should not depend on any other file!!!
 *
 * Buffers are referenced everywhere, so it can cause a circular dependency.
 */
"use strict";
var FLOAT_POS_INFINITY = Math.pow(2, 128);
var FLOAT_NEG_INFINITY = -1 * FLOAT_POS_INFINITY;
var FLOAT_POS_INFINITY_AS_INT = 0x7F800000;
var FLOAT_NEG_INFINITY_AS_INT = -8388608;
var FLOAT_NaN_AS_INT = 0x7fc00000;
/**
 * Contains common definitions for most of the BufferCore classes.
 * Subclasses only need to implement write/readUInt8 for full functionality.
 */
var BufferCoreCommon = (function () {
    function BufferCoreCommon() {
    }
    BufferCoreCommon.prototype.getLength = function () {
        throw new Error('BufferCore implementations should implement getLength.');
    };
    BufferCoreCommon.prototype.writeInt8 = function (i, data) {
        // Pack the sign bit as the highest bit.
        // Note that we keep the highest bit in the value byte as the sign bit if it
        // exists.
        this.writeUInt8(i, (data & 0xFF) | ((data & 0x80000000) >>> 24));
    };
    BufferCoreCommon.prototype.writeInt16LE = function (i, data) {
        this.writeUInt8(i, data & 0xFF);
        // Pack the sign bit as the highest bit.
        // Note that we keep the highest bit in the value byte as the sign bit if it
        // exists.
        this.writeUInt8(i + 1, ((data >>> 8) & 0xFF) | ((data & 0x80000000) >>> 24));
    };
    BufferCoreCommon.prototype.writeInt16BE = function (i, data) {
        this.writeUInt8(i + 1, data & 0xFF);
        // Pack the sign bit as the highest bit.
        // Note that we keep the highest bit in the value byte as the sign bit if it
        // exists.
        this.writeUInt8(i, ((data >>> 8) & 0xFF) | ((data & 0x80000000) >>> 24));
    };
    BufferCoreCommon.prototype.writeInt32LE = function (i, data) {
        this.writeUInt8(i, data & 0xFF);
        this.writeUInt8(i + 1, (data >>> 8) & 0xFF);
        this.writeUInt8(i + 2, (data >>> 16) & 0xFF);
        this.writeUInt8(i + 3, (data >>> 24) & 0xFF);
    };
    BufferCoreCommon.prototype.writeInt32BE = function (i, data) {
        this.writeUInt8(i + 3, data & 0xFF);
        this.writeUInt8(i + 2, (data >>> 8) & 0xFF);
        this.writeUInt8(i + 1, (data >>> 16) & 0xFF);
        this.writeUInt8(i, (data >>> 24) & 0xFF);
    };
    BufferCoreCommon.prototype.writeUInt8 = function (i, data) {
        throw new Error('BufferCore implementations should implement writeUInt8.');
    };
    BufferCoreCommon.prototype.writeUInt16LE = function (i, data) {
        this.writeUInt8(i, data & 0xFF);
        this.writeUInt8(i + 1, (data >> 8) & 0xFF);
    };
    BufferCoreCommon.prototype.writeUInt16BE = function (i, data) {
        this.writeUInt8(i + 1, data & 0xFF);
        this.writeUInt8(i, (data >> 8) & 0xFF);
    };
    BufferCoreCommon.prototype.writeUInt32LE = function (i, data) {
        this.writeInt32LE(i, data | 0);
    };
    BufferCoreCommon.prototype.writeUInt32BE = function (i, data) {
        this.writeInt32BE(i, data | 0);
    };
    BufferCoreCommon.prototype.writeFloatLE = function (i, data) {
        this.writeInt32LE(i, this.float2intbits(data));
    };
    BufferCoreCommon.prototype.writeFloatBE = function (i, data) {
        this.writeInt32BE(i, this.float2intbits(data));
    };
    BufferCoreCommon.prototype.writeDoubleLE = function (i, data) {
        var doubleBits = this.double2longbits(data);
        this.writeInt32LE(i, doubleBits[0]);
        this.writeInt32LE(i + 4, doubleBits[1]);
    };
    BufferCoreCommon.prototype.writeDoubleBE = function (i, data) {
        var doubleBits = this.double2longbits(data);
        this.writeInt32BE(i + 4, doubleBits[0]);
        this.writeInt32BE(i, doubleBits[1]);
    };
    BufferCoreCommon.prototype.readInt8 = function (i) {
        var val = this.readUInt8(i);
        if (val & 0x80) {
            // Sign bit is set, so perform sign extension.
            return val | 0xFFFFFF80;
        }
        else {
            return val;
        }
    };
    BufferCoreCommon.prototype.readInt16LE = function (i) {
        var val = this.readUInt16LE(i);
        if (val & 0x8000) {
            // Sign bit is set, so perform sign extension.
            return val | 0xFFFF8000;
        }
        else {
            return val;
        }
    };
    BufferCoreCommon.prototype.readInt16BE = function (i) {
        var val = this.readUInt16BE(i);
        if (val & 0x8000) {
            // Sign bit is set, so perform sign extension.
            return val | 0xFFFF8000;
        }
        else {
            return val;
        }
    };
    BufferCoreCommon.prototype.readInt32LE = function (i) {
        return this.readUInt32LE(i) | 0;
    };
    BufferCoreCommon.prototype.readInt32BE = function (i) {
        return this.readUInt32BE(i) | 0;
    };
    BufferCoreCommon.prototype.readUInt8 = function (i) {
        throw new Error('BufferCore implementations should implement readUInt8.');
    };
    BufferCoreCommon.prototype.readUInt16LE = function (i) {
        return (this.readUInt8(i + 1) << 8) | this.readUInt8(i);
    };
    BufferCoreCommon.prototype.readUInt16BE = function (i) {
        return (this.readUInt8(i) << 8) | this.readUInt8(i + 1);
    };
    BufferCoreCommon.prototype.readUInt32LE = function (i) {
        return ((this.readUInt8(i + 3) << 24) | (this.readUInt8(i + 2) << 16) | (this.readUInt8(i + 1) << 8) | this.readUInt8(i)) >>> 0;
    };
    BufferCoreCommon.prototype.readUInt32BE = function (i) {
        return ((this.readUInt8(i) << 24) | (this.readUInt8(i + 1) << 16) | (this.readUInt8(i + 2) << 8) | this.readUInt8(i + 3)) >>> 0;
    };
    BufferCoreCommon.prototype.readFloatLE = function (i) {
        return this.intbits2float(this.readInt32LE(i));
    };
    BufferCoreCommon.prototype.readFloatBE = function (i) {
        return this.intbits2float(this.readInt32BE(i));
    };
    BufferCoreCommon.prototype.readDoubleLE = function (i) {
        return this.longbits2double(this.readInt32LE(i + 4), this.readInt32LE(i));
    };
    BufferCoreCommon.prototype.readDoubleBE = function (i) {
        return this.longbits2double(this.readInt32BE(i), this.readInt32BE(i + 4));
    };
    BufferCoreCommon.prototype.copy = function (start, end) {
        throw new Error('BufferCore implementations should implement copy.');
    };
    BufferCoreCommon.prototype.fill = function (value, start, end) {
        // Stupid unoptimized fill: Byte-by-byte.
        for (var i = start; i < end; i++) {
            this.writeUInt8(i, value);
        }
    };
    BufferCoreCommon.prototype.float2intbits = function (f_val) {
        var exp, f_view, i_view, sig, sign;
        // Special cases!
        if (f_val === 0) {
            return 0;
        }
        // We map the infinities to JavaScript infinities. Map them back.
        if (f_val === Number.POSITIVE_INFINITY) {
            return FLOAT_POS_INFINITY_AS_INT;
        }
        if (f_val === Number.NEGATIVE_INFINITY) {
            return FLOAT_NEG_INFINITY_AS_INT;
        }
        // Convert JavaScript NaN to Float NaN value.
        if (isNaN(f_val)) {
            return FLOAT_NaN_AS_INT;
        }
        // We have more bits of precision than a float, so below we round to
        // the nearest significand. This appears to be what the x86
        // Java does for normal floating point operations.
        sign = f_val < 0 ? 1 : 0;
        f_val = Math.abs(f_val);
        // Subnormal zone!
        // (−1)^signbits×2^−126×0.significandbits
        // Largest subnormal magnitude:
        // 0000 0000 0111 1111 1111 1111 1111 1111
        // Smallest subnormal magnitude:
        // 0000 0000 0000 0000 0000 0000 0000 0001
        if (f_val <= 1.1754942106924411e-38 && f_val >= 1.4012984643248170e-45) {
            exp = 0;
            sig = Math.round((f_val / Math.pow(2, -126)) * Math.pow(2, 23));
            return (sign << 31) | (exp << 23) | sig;
        }
        else {
            // Regular FP numbers
            exp = Math.floor(Math.log(f_val) / Math.LN2);
            sig = Math.round((f_val / Math.pow(2, exp) - 1) * Math.pow(2, 23));
            return (sign << 31) | ((exp + 127) << 23) | sig;
        }
    };
    BufferCoreCommon.prototype.double2longbits = function (d_val) {
        var d_view, exp, high_bits, i_view, sig, sign;
        // Special cases
        if (d_val === 0) {
            return [0, 0];
        }
        if (d_val === Number.POSITIVE_INFINITY) {
            // High bits: 0111 1111 1111 0000 0000 0000 0000 0000
            //  Low bits: 0000 0000 0000 0000 0000 0000 0000 0000
            return [0, 2146435072];
        }
        else if (d_val === Number.NEGATIVE_INFINITY) {
            // High bits: 1111 1111 1111 0000 0000 0000 0000 0000
            //  Low bits: 0000 0000 0000 0000 0000 0000 0000 0000
            return [0, -1048576];
        }
        else if (isNaN(d_val)) {
            // High bits: 0111 1111 1111 1000 0000 0000 0000 0000
            //  Low bits: 0000 0000 0000 0000 0000 0000 0000 0000
            return [0, 2146959360];
        }
        sign = d_val < 0 ? 1 << 31 : 0;
        d_val = Math.abs(d_val);
        // Check if it is a subnormal number.
        // (-1)s × 0.f × 2-1022
        // Largest subnormal magnitude:
        // 0000 0000 0000 1111 1111 1111 1111 1111
        // 1111 1111 1111 1111 1111 1111 1111 1111
        // Smallest subnormal magnitude:
        // 0000 0000 0000 0000 0000 0000 0000 0000
        // 0000 0000 0000 0000 0000 0000 0000 0001
        if (d_val <= 2.2250738585072010e-308 && d_val >= 5.0000000000000000e-324) {
            exp = 0;
            sig = (d_val / Math.pow(2, -1022)) * Math.pow(2, 52);
        }
        else {
            exp = Math.floor(Math.log(d_val) / Math.LN2);
            // If d_val is close to a power of two, there's a chance that exp
            // will be 1 greater than it should due to loss of accuracy in the
            // log result.
            if (d_val < Math.pow(2, exp)) {
                exp = exp - 1;
            }
            sig = (d_val / Math.pow(2, exp) - 1) * Math.pow(2, 52);
            exp = (exp + 1023) << 20;
        }
        // Simulate >> 32
        high_bits = ((sig * Math.pow(2, -32)) | 0) | sign | exp;
        return [sig & 0xFFFF, high_bits];
    };
    BufferCoreCommon.prototype.intbits2float = function (int32) {
        // Map +/- infinity to JavaScript equivalents
        if (int32 === FLOAT_POS_INFINITY_AS_INT) {
            return Number.POSITIVE_INFINITY;
        }
        else if (int32 === FLOAT_NEG_INFINITY_AS_INT) {
            return Number.NEGATIVE_INFINITY;
        }
        var sign = (int32 & 0x80000000) >>> 31;
        var exponent = (int32 & 0x7F800000) >>> 23;
        var significand = int32 & 0x007FFFFF;
        var value;
        if (exponent === 0) {
            value = Math.pow(-1, sign) * significand * Math.pow(2, -149);
        }
        else {
            value = Math.pow(-1, sign) * (1 + significand * Math.pow(2, -23)) * Math.pow(2, exponent - 127);
        }
        // NaN check
        if (value < FLOAT_NEG_INFINITY || value > FLOAT_POS_INFINITY) {
            value = NaN;
        }
        return value;
    };
    BufferCoreCommon.prototype.longbits2double = function (uint32_a, uint32_b) {
        var sign = (uint32_a & 0x80000000) >>> 31;
        var exponent = (uint32_a & 0x7FF00000) >>> 20;
        var significand = ((uint32_a & 0x000FFFFF) * Math.pow(2, 32)) + uint32_b;
        // Special values!
        if (exponent === 0 && significand === 0) {
            return 0;
        }
        if (exponent === 2047) {
            if (significand === 0) {
                if (sign === 1) {
                    return Number.NEGATIVE_INFINITY;
                }
                return Number.POSITIVE_INFINITY;
            }
            else {
                return NaN;
            }
        }
        if (exponent === 0)
            return Math.pow(-1, sign) * significand * Math.pow(2, -1074);
        return Math.pow(-1, sign) * (1 + significand * Math.pow(2, -52)) * Math.pow(2, exponent - 1023);
    };
    return BufferCoreCommon;
}());
exports.BufferCoreCommon = BufferCoreCommon;

},{}],4:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var buffer_core_1 = _dereq_('./buffer_core');
// Used to clear segments of an array index.
var clearMasks = [0xFFFFFF00, 0xFFFF00FF, 0xFF00FFFF, 0x00FFFFFF];
/**
 * Implementation of BufferCore that is backed by an array of 32-bit ints.
 * Data is stored little endian.
 * Example: Bytes 0 through 3 are present in the first int:
 *  BYTE 3      BYTE 2      BYTE 1      BYTE 0
 * 0000 0000 | 0000 0000 | 0000 0000 | 0000 0000
 */
var BufferCoreArray = (function (_super) {
    __extends(BufferCoreArray, _super);
    function BufferCoreArray(length) {
        _super.call(this);
        this.length = length;
        this.buff = new Array(Math.ceil(length / 4));
        // Zero-fill the array.
        var bufflen = this.buff.length;
        for (var i = 0; i < bufflen; i++) {
            this.buff[i] = 0;
        }
    }
    BufferCoreArray.isAvailable = function () {
        return true;
    };
    BufferCoreArray.prototype.getLength = function () {
        return this.length;
    };
    BufferCoreArray.prototype.writeUInt8 = function (i, data) {
        data &= 0xFF;
        // Which int? (Equivalent to (i/4)|0)
        var arrIdx = i >> 2;
        // Which offset? (Equivalent to i - arrIdx*4)
        var intIdx = i & 3;
        this.buff[arrIdx] = this.buff[arrIdx] & clearMasks[intIdx];
        this.buff[arrIdx] = this.buff[arrIdx] | (data << (intIdx << 3));
    };
    BufferCoreArray.prototype.readUInt8 = function (i) {
        // Which int?
        var arrIdx = i >> 2;
        // Which offset?
        var intIdx = i & 3;
        // Bring the data we want into the lowest 8 bits, and truncate.
        return (this.buff[arrIdx] >> (intIdx << 3)) & 0xFF;
    };
    BufferCoreArray.prototype.copy = function (start, end) {
        // Stupid unoptimized copy. Later, we could do optimizations when aligned.
        var newBC = new BufferCoreArray(end - start);
        for (var i = start; i < end; i++) {
            newBC.writeUInt8(i - start, this.readUInt8(i));
        }
        return newBC;
    };
    BufferCoreArray.bufferType = "Array";
    return BufferCoreArray;
}(buffer_core_1.BufferCoreCommon));
// Type-check the class.
var _ = BufferCoreArray;
module.exports = BufferCoreArray;

},{"./buffer_core":3}],5:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var buffer_core_1 = _dereq_('./buffer_core');
var util_1 = _dereq_('./util');
/**
 * Represents data using an ArrayBuffer.
 */
var BufferCoreArrayBuffer = (function (_super) {
    __extends(BufferCoreArrayBuffer, _super);
    function BufferCoreArrayBuffer(arg1) {
        _super.call(this);
        if (typeof arg1 === 'number') {
            this.buff = new DataView(new ArrayBuffer(arg1));
        }
        else if (arg1 instanceof DataView) {
            this.buff = arg1;
        }
        else if (util_1.isArrayBufferView(arg1)) {
            this.buff = new DataView(arg1.buffer, arg1.byteOffset, arg1.byteLength);
        }
        else if (util_1.isArrayBuffer(arg1)) {
            this.buff = new DataView(arg1);
        }
        else {
            throw new TypeError("Invalid argument.");
        }
        this.length = this.buff.byteLength;
    }
    BufferCoreArrayBuffer.isAvailable = function () {
        return typeof DataView !== 'undefined';
    };
    BufferCoreArrayBuffer.prototype.getLength = function () {
        return this.length;
    };
    BufferCoreArrayBuffer.prototype.writeInt8 = function (i, data) {
        this.buff.setInt8(i, data);
    };
    BufferCoreArrayBuffer.prototype.writeInt16LE = function (i, data) {
        this.buff.setInt16(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeInt16BE = function (i, data) {
        this.buff.setInt16(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.writeInt32LE = function (i, data) {
        this.buff.setInt32(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeInt32BE = function (i, data) {
        this.buff.setInt32(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.writeUInt8 = function (i, data) {
        this.buff.setUint8(i, data);
    };
    BufferCoreArrayBuffer.prototype.writeUInt16LE = function (i, data) {
        this.buff.setUint16(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeUInt16BE = function (i, data) {
        this.buff.setUint16(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.writeUInt32LE = function (i, data) {
        this.buff.setUint32(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeUInt32BE = function (i, data) {
        this.buff.setUint32(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.writeFloatLE = function (i, data) {
        this.buff.setFloat32(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeFloatBE = function (i, data) {
        this.buff.setFloat32(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.writeDoubleLE = function (i, data) {
        this.buff.setFloat64(i, data, true);
    };
    BufferCoreArrayBuffer.prototype.writeDoubleBE = function (i, data) {
        this.buff.setFloat64(i, data, false);
    };
    BufferCoreArrayBuffer.prototype.readInt8 = function (i) {
        return this.buff.getInt8(i);
    };
    BufferCoreArrayBuffer.prototype.readInt16LE = function (i) {
        return this.buff.getInt16(i, true);
    };
    BufferCoreArrayBuffer.prototype.readInt16BE = function (i) {
        return this.buff.getInt16(i, false);
    };
    BufferCoreArrayBuffer.prototype.readInt32LE = function (i) {
        return this.buff.getInt32(i, true);
    };
    BufferCoreArrayBuffer.prototype.readInt32BE = function (i) {
        return this.buff.getInt32(i, false);
    };
    BufferCoreArrayBuffer.prototype.readUInt8 = function (i) {
        return this.buff.getUint8(i);
    };
    BufferCoreArrayBuffer.prototype.readUInt16LE = function (i) {
        return this.buff.getUint16(i, true);
    };
    BufferCoreArrayBuffer.prototype.readUInt16BE = function (i) {
        return this.buff.getUint16(i, false);
    };
    BufferCoreArrayBuffer.prototype.readUInt32LE = function (i) {
        return this.buff.getUint32(i, true);
    };
    BufferCoreArrayBuffer.prototype.readUInt32BE = function (i) {
        return this.buff.getUint32(i, false);
    };
    BufferCoreArrayBuffer.prototype.readFloatLE = function (i) {
        return this.buff.getFloat32(i, true);
    };
    BufferCoreArrayBuffer.prototype.readFloatBE = function (i) {
        return this.buff.getFloat32(i, false);
    };
    BufferCoreArrayBuffer.prototype.readDoubleLE = function (i) {
        return this.buff.getFloat64(i, true);
    };
    BufferCoreArrayBuffer.prototype.readDoubleBE = function (i) {
        return this.buff.getFloat64(i, false);
    };
    BufferCoreArrayBuffer.prototype.copy = function (start, end) {
        var aBuff = this.buff.buffer;
        var aBuffOff = this.buff.byteOffset;
        var newBuff;
        // Some ArrayBuffer implementations (IE10) do not have 'slice'.
        if (ArrayBuffer.prototype.slice) {
            // ArrayBuffer.slice is copying; exactly what we want.
            newBuff = aBuff.slice(aBuffOff + start, aBuffOff + end);
        }
        else {
            var len = end - start;
            newBuff = new ArrayBuffer(len);
            // Copy the old contents in.
            var newUintArray = new Uint8Array(newBuff);
            var oldUintArray = new Uint8Array(aBuff, aBuffOff);
            newUintArray.set(oldUintArray.subarray(start, end));
        }
        return new BufferCoreArrayBuffer(newBuff);
    };
    /**
     * (Nonstandard) Copy [start, end) to [offset+start, offset+end) in target.
     */
    BufferCoreArrayBuffer.prototype.copyTo = function (target, offset, start, end) {
        var targetU8 = new Uint8Array(target.buff.buffer, target.buff.byteOffset);
        var sourceU8 = new Uint8Array(this.buff.buffer, this.buff.byteOffset + start, end - start);
        targetU8.set(sourceU8, offset);
        return end - start;
    };
    BufferCoreArrayBuffer.prototype.fill = function (value, start, end) {
        // Value must be a byte wide.
        value = value & 0xFF;
        var i;
        var len = end - start;
        var intBytes = (((len) / 4) | 0) * 4;
        // Optimization: Write 4 bytes at a time.
        // TODO: Could we copy 8 bytes at a time using Float64, or could we
        //       lose precision?
        var intVal = (value << 24) | (value << 16) | (value << 8) | value;
        for (i = 0; i < intBytes; i += 4) {
            this.writeInt32LE(i + start, intVal);
        }
        for (i = intBytes; i < len; i++) {
            this.writeUInt8(i + start, value);
        }
    };
    /**
     * Custom method for this buffer core. Get the backing object.
     */
    BufferCoreArrayBuffer.prototype.getDataView = function () {
        return this.buff;
    };
    BufferCoreArrayBuffer.bufferType = "ArrayBuffer";
    return BufferCoreArrayBuffer;
}(buffer_core_1.BufferCoreCommon));
// Type-check the class.
var _ = BufferCoreArrayBuffer;
module.exports = BufferCoreArrayBuffer;

},{"./buffer_core":3,"./util":9}],6:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var buffer_core_1 = _dereq_('./buffer_core');
/**
 * Implementation of BufferCore that is backed by an ImageData object.
 * Useful in browsers with HTML5 canvas support, but no TypedArray support
 * (IE9).
 */
var BufferCoreImageData = (function (_super) {
    __extends(BufferCoreImageData, _super);
    function BufferCoreImageData(length) {
        _super.call(this);
        this.length = length;
        this.buff = BufferCoreImageData.getCanvasPixelArray(length);
    }
    /**
     * Constructs a CanvasPixelArray that represents the given amount of bytes.
     */
    BufferCoreImageData.getCanvasPixelArray = function (bytes) {
        var ctx = BufferCoreImageData.imageDataFactory;
        // Lazily initialize, otherwise every browser (even those that will never
        // use this code) will create a canvas on script load.
        if (ctx === undefined) {
            BufferCoreImageData.imageDataFactory = ctx = document.createElement('canvas').getContext('2d');
        }
        // You cannot create image data with size 0, so up it to size 1.
        if (bytes === 0)
            bytes = 1;
        return ctx.createImageData(Math.ceil(bytes / 4), 1).data;
    };
    BufferCoreImageData.isAvailable = function () {
        // Modern browsers have removed this deprecated API, so it is not always around.
        // NOTE: IE11 in IE8 compat. mode has CanvasPixelArray defined, but you can't
        // use it! Hence the check for getContext.
        return typeof (CanvasPixelArray) !== 'undefined' && document.createElement('canvas')['getContext'] !== undefined;
    };
    BufferCoreImageData.prototype.getLength = function () {
        return this.length;
    };
    BufferCoreImageData.prototype.writeUInt8 = function (i, data) {
        this.buff[i] = data;
    };
    BufferCoreImageData.prototype.readUInt8 = function (i) {
        return this.buff[i];
    };
    BufferCoreImageData.prototype.copy = function (start, end) {
        // AFAIK, there's no efficient way to clone ImageData.
        var newBC = new BufferCoreImageData(end - start);
        for (var i = start; i < end; i++) {
            newBC.writeUInt8(i - start, this.buff[i]);
        }
        return newBC;
    };
    BufferCoreImageData.bufferType = "ImageData";
    return BufferCoreImageData;
}(buffer_core_1.BufferCoreCommon));
// Type-check the class.
var _ = BufferCoreImageData;
module.exports = BufferCoreImageData;

},{"./buffer_core":3}],7:[function(_dereq_,module,exports){
"use strict";
/**
 * (Nonstandard) String utility function for 8-bit ASCII with the extended
 * character set. Unlike the ASCII above, we do not mask the high bits.
 *
 * Placed into a separate file so it can be used with other Buffer implementations.
 * @see http://en.wikipedia.org/wiki/Extended_ASCII
 */
var ExtendedASCII = (function () {
    function ExtendedASCII() {
    }
    ExtendedASCII.str2byte = function (str, buf) {
        var length = str.length > buf.length ? buf.length : str.length;
        for (var i = 0; i < length; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode > 0x7F) {
                // Check if extended ASCII.
                var charIdx = ExtendedASCII.extendedChars.indexOf(str.charAt(i));
                if (charIdx > -1) {
                    charCode = charIdx + 0x80;
                }
            }
            buf.writeUInt8(charCode, i);
        }
        return length;
    };
    ExtendedASCII.byte2str = function (buff) {
        var chars = new Array(buff.length);
        for (var i = 0; i < buff.length; i++) {
            var charCode = buff.readUInt8(i);
            if (charCode > 0x7F) {
                chars[i] = ExtendedASCII.extendedChars[charCode - 128];
            }
            else {
                chars[i] = String.fromCharCode(charCode);
            }
        }
        return chars.join('');
    };
    ExtendedASCII.byteLength = function (str) { return str.length; };
    ExtendedASCII.extendedChars = ['\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4',
        '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB', '\u00E8', '\u00EF',
        '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6',
        '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6',
        '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1',
        '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
        '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB',
        '\u00BB', '_', '_', '_', '\u00A6', '\u00A6', '\u00C1', '\u00C2', '\u00C0',
        '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-',
        '-', '+', '-', '+', '\u00E3', '\u00C3', '+', '+', '-', '-', '\u00A6', '-',
        '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i',
        '\u00CD', '\u00CE', '\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_',
        '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5',
        '\u00FE', '\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD',
        '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
        '\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3',
        '\u00B2', '_', ' '];
    return ExtendedASCII;
}());
exports.__esModule = true;
exports["default"] = ExtendedASCII;

},{}],8:[function(_dereq_,module,exports){
"use strict";
var extended_ascii_1 = _dereq_('./extended_ascii');
var fromCharCode = String.fromCharCode;
/**
 * Efficiently converts an array of character codes into a JS string.
 * Avoids an issue with String.fromCharCode when the number of arguments is too large.
 */
function fromCharCodes(charCodes) {
    // 8K blocks.
    var numChars = charCodes.length, numChunks = ((numChars - 1) >> 13) + 1, chunks = new Array(numChunks), i;
    for (i = 0; i < numChunks; i++) {
        chunks[i] = fromCharCode.apply(String, charCodes.slice(i * 0x2000, (i + 1) * 0x2000));
    }
    return chunks.join("");
}
exports.fromCharCodes = fromCharCodes;
/**
 * Find the 'utility' object for the given string encoding. Throws an exception
 * if the encoding is invalid.
 * @param [String] encoding a string encoding
 * @return [BrowserFS.StringUtil.*] The StringUtil object for the given encoding
 */
function FindUtil(encoding) {
    encoding = (function () {
        switch (typeof encoding) {
            case 'object':
                return "" + encoding; // Implicitly calls toString on any object (Node does this)
            case 'string':
                return encoding; // No transformation needed.
            default:
                throw new TypeError('Invalid encoding argument specified');
        }
    })();
    encoding = encoding.toLowerCase();
    // This is the same logic as Node's source code.
    switch (encoding) {
        case 'utf8':
        case 'utf-8':
            return UTF8;
        case 'ascii':
            return ASCII;
        case 'binary':
            return BINARY;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return UCS2;
        case 'hex':
            return HEX;
        case 'base64':
            return BASE64;
        // Custom BFS: For efficiently representing data as JavaScript UTF-16
        // strings.
        case 'binary_string':
            return BINSTR;
        case 'binary_string_ie':
            return BINSTRIE;
        case 'extended_ascii':
            return extended_ascii_1["default"];
        default:
            throw new TypeError("Unknown encoding: " + encoding);
    }
}
exports.FindUtil = FindUtil;
/**
 * String utility functions for UTF-8. Note that some UTF-8 strings *cannot* be
 * expressed in terms of JavaScript UTF-16 strings.
 * @see http://en.wikipedia.org/wiki/UTF-8
 */
var UTF8 = (function () {
    function UTF8() {
    }
    UTF8.str2byte = function (str, buf) {
        var maxJ = buf.length, i = 0, j = 0, strLen = str.length;
        while (i < strLen && j < maxJ) {
            var code = str.charCodeAt(i++);
            if (0xD800 <= code && code <= 0xDBFF) {
                // 4 bytes: Surrogate pairs! UTF-16 fun time.
                if (j + 3 >= maxJ || i >= strLen) {
                    break;
                }
                // Get the next UTF16 character.
                var next = str.charCodeAt(i);
                if (0xDC00 <= next && next <= 0xDFFF) {
                    // First pair: 10 bits of data, with an implicitly set 11th bit
                    // Second pair: 10 bits of data
                    var codePoint = (((code & 0x3FF) | 0x400) << 10) | (next & 0x3FF);
                    // Highest 3 bits in first byte
                    buf.writeUInt8((codePoint >> 18) | 0xF0, j++);
                    // Rest are all 6 bits
                    buf.writeUInt8(((codePoint >> 12) & 0x3F) | 0x80, j++);
                    buf.writeUInt8(((codePoint >> 6) & 0x3F) | 0x80, j++);
                    buf.writeUInt8((codePoint & 0x3F) | 0x80, j++);
                    i++;
                }
                else {
                    // This surrogate pair is missing a friend!
                    // Write unicode replacement character.
                    buf.writeUInt8(0xef, j++);
                    buf.writeUInt8(0xbf, j++);
                    buf.writeUInt8(0xbd, j++);
                }
            }
            else if (0xDC00 <= code && code <= 0xDFFF) {
                // Unmatched second surrogate!
                // Write unicode replacement character.
                buf.writeUInt8(0xef, j++);
                buf.writeUInt8(0xbf, j++);
                buf.writeUInt8(0xbd, j++);
            }
            else if (code < 0x80) {
                // One byte
                buf.writeUInt8(code, j++);
            }
            else if (code < 0x800) {
                // Two bytes
                if (j + 1 >= maxJ) {
                    break;
                }
                // Highest 5 bits in first byte
                buf.writeUInt8((code >> 6) | 0xC0, j++);
                // Lower 6 bits in second byte
                buf.writeUInt8((code & 0x3F) | 0x80, j++);
            }
            else if (code < 0x10000) {
                // Three bytes
                if (j + 2 >= maxJ) {
                    break;
                }
                // Highest 4 bits in first byte
                buf.writeUInt8((code >> 12) | 0xE0, j++);
                // Middle 6 bits in second byte
                buf.writeUInt8(((code >> 6) & 0x3F) | 0x80, j++);
                // Lowest 6 bits in third byte
                buf.writeUInt8((code & 0x3F) | 0x80, j++);
            }
        }
        return j;
    };
    UTF8.byte2str = function (buff) {
        var chars = [];
        var i = 0;
        while (i < buff.length) {
            var code = buff.readUInt8(i++);
            if (code < 0x80) {
                chars.push(code);
            }
            else if (code < 0xC0) {
                // This is the second byte of a multibyte character. This shouldn't be
                // possible.
                throw new Error('Found incomplete part of character in string.');
            }
            else if (code < 0xE0) {
                // 2 bytes: 5 and 6 bits
                chars.push(((code & 0x1F) << 6) | (buff.readUInt8(i++) & 0x3F));
            }
            else if (code < 0xF0) {
                // 3 bytes: 4, 6, and 6 bits
                chars.push(((code & 0xF) << 12) | ((buff.readUInt8(i++) & 0x3F) << 6) | (buff.readUInt8(i++) & 0x3F));
            }
            else if (code < 0xF8) {
                // 4 bytes: 3, 6, 6, 6 bits; surrogate pairs time!
                // First 11 bits; remove 11th bit as per UTF-16 standard
                var byte3 = buff.readUInt8(i + 2);
                chars.push(((((code & 0x7) << 8) | ((buff.readUInt8(i++) & 0x3F) << 2) | ((buff.readUInt8(i++) & 0x3F) >> 4)) & 0x3FF) | 0xD800);
                // Final 10 bits
                chars.push((((byte3 & 0xF) << 6) | (buff.readUInt8(i++) & 0x3F)) | 0xDC00);
            }
            else {
                throw new Error('Unable to represent UTF-8 string as UTF-16 JavaScript string.');
            }
        }
        return fromCharCodes(chars);
    };
    // From http://stackoverflow.com/a/23329386
    UTF8.byteLength = function (str) {
        var s = str.length;
        for (var i = str.length - 1; i >= 0; i--) {
            var code = str.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                s++;
            else if (code > 0x7ff && code <= 0xffff)
                s += 2;
            if (code >= 0xDC00 && code <= 0xDFFF)
                i--; //trail surrogate
        }
        return s;
    };
    return UTF8;
}());
exports.UTF8 = UTF8;
/**
 * String utility functions for 8-bit ASCII. Like Node, we mask the high bits of
 * characters in JavaScript UTF-16 strings.
 * @see http://en.wikipedia.org/wiki/ASCII
 */
var ASCII = (function () {
    function ASCII() {
    }
    ASCII.str2byte = function (str, buf) {
        var length = str.length > buf.length ? buf.length : str.length;
        for (var i = 0; i < length; i++) {
            buf.writeUInt8(str.charCodeAt(i) % 256, i);
        }
        return length;
    };
    ASCII.byte2str = function (buff) {
        var chars = new Array(buff.length);
        for (var i = 0; i < buff.length; i++) {
            chars[i] = buff.readUInt8(i) & 0x7F;
        }
        return fromCharCodes(chars);
    };
    ASCII.byteLength = function (str) { return str.length; };
    return ASCII;
}());
exports.ASCII = ASCII;
/**
 * String utility functions for Node's BINARY strings, which represent a single
 * byte per character.
 */
var BINARY = (function () {
    function BINARY() {
    }
    BINARY.str2byte = function (str, buf) {
        var length = str.length > buf.length ? buf.length : str.length;
        for (var i = 0; i < length; i++) {
            buf.writeUInt8(str.charCodeAt(i) & 0xFF, i);
        }
        return length;
    };
    BINARY.byte2str = function (buff) {
        var chars = new Array(buff.length);
        for (var i = 0; i < buff.length; i++) {
            chars[i] = buff.readUInt8(i) & 0xFF;
        }
        return fromCharCodes(chars);
    };
    BINARY.byteLength = function (str) { return str.length; };
    return BINARY;
}());
exports.BINARY = BINARY;
/**
 * Contains string utility functions for base-64 encoding.
 *
 * Adapted from the StackOverflow comment linked below.
 * @see http://stackoverflow.com/questions/246801/how-can-you-encode-to-base64-using-javascript#246813
 * @see http://en.wikipedia.org/wiki/Base64
 * @todo Bake in support for btoa() and atob() if available.
 */
var BASE64 = (function () {
    function BASE64() {
    }
    BASE64.byte2str = function (buff) {
        var output = '';
        var i = 0;
        while (i < buff.length) {
            var chr1 = buff.readUInt8(i++);
            var chr2 = i < buff.length ? buff.readUInt8(i++) : NaN;
            var chr3 = i < buff.length ? buff.readUInt8(i++) : NaN;
            var enc1 = chr1 >> 2;
            var enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            var enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            var enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + BASE64.num2b64[enc1] + BASE64.num2b64[enc2] + BASE64.num2b64[enc3] + BASE64.num2b64[enc4];
        }
        return output;
    };
    BASE64.str2byte = function (str, buf) {
        var length = buf.length;
        var output = '';
        var i = 0;
        str = str.replace(/[^A-Za-z0-9\+\/\=\-\_]/g, '');
        var j = 0;
        while (i < str.length && j < buf.length) {
            var enc1 = BASE64.b642num[str.charAt(i++)];
            var enc2 = BASE64.b642num[str.charAt(i++)];
            var enc3 = BASE64.b642num[str.charAt(i++)];
            var enc4 = BASE64.b642num[str.charAt(i++)];
            var chr1 = (enc1 << 2) | (enc2 >> 4);
            var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            var chr3 = ((enc3 & 3) << 6) | enc4;
            buf.writeUInt8(chr1, j++);
            if (j === length) {
                break;
            }
            if (enc3 !== 64) {
                output += buf.writeUInt8(chr2, j++);
            }
            if (j === length) {
                break;
            }
            if (enc4 !== 64) {
                output += buf.writeUInt8(chr3, j++);
            }
            if (j === length) {
                break;
            }
        }
        return j;
    };
    BASE64.byteLength = function (str) {
        return Math.floor(((str.replace(/[^A-Za-z0-9\+\/\-\_]/g, '')).length * 6) / 8);
    };
    BASE64.b64chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '='];
    BASE64.num2b64 = (function () {
        var obj = new Array(BASE64.b64chars.length);
        for (var idx = 0; idx < BASE64.b64chars.length; idx++) {
            var i = BASE64.b64chars[idx];
            obj[idx] = i;
        }
        return obj;
    })();
    BASE64.b642num = (function () {
        var obj = {};
        for (var idx = 0; idx < BASE64.b64chars.length; idx++) {
            var i = BASE64.b64chars[idx];
            obj[i] = idx;
        }
        obj['-'] = 62;
        obj['_'] = 63;
        return obj;
    })();
    return BASE64;
}());
exports.BASE64 = BASE64;
/**
 * String utility functions for the UCS-2 encoding. Note that our UCS-2 handling
 * is identical to our UTF-16 handling.
 *
 * Note: UCS-2 handling is identical to UTF-16.
 * @see http://en.wikipedia.org/wiki/UCS2
 */
var UCS2 = (function () {
    function UCS2() {
    }
    UCS2.str2byte = function (str, buf) {
        var len = str.length;
        // Clip length to longest string of valid characters that can fit in the
        // byte range.
        if (len * 2 > buf.length) {
            len = buf.length % 2 === 1 ? (buf.length - 1) / 2 : buf.length / 2;
        }
        for (var i = 0; i < len; i++) {
            buf.writeUInt16LE(str.charCodeAt(i), i * 2);
        }
        return len * 2;
    };
    UCS2.byte2str = function (buff) {
        if (buff.length % 2 !== 0) {
            throw new Error('Invalid UCS2 byte array.');
        }
        var chars = new Array(buff.length / 2);
        for (var i = 0; i < buff.length; i += 2) {
            chars[i / 2] = String.fromCharCode(buff.readUInt8(i) | (buff.readUInt8(i + 1) << 8));
        }
        return chars.join('');
    };
    UCS2.byteLength = function (str) {
        return str.length * 2;
    };
    return UCS2;
}());
exports.UCS2 = UCS2;
/**
 * Contains string utility functions for hex encoding.
 * @see http://en.wikipedia.org/wiki/Hexadecimal
 */
var HEX = (function () {
    function HEX() {
    }
    HEX.str2byte = function (str, buf) {
        if (str.length % 2 === 1) {
            throw new Error('Invalid hex string');
        }
        // Each character is 1 byte encoded as two hex characters; so 1 byte becomes
        // 2 bytes.
        var numBytes = str.length >> 1;
        if (numBytes > buf.length) {
            numBytes = buf.length;
        }
        for (var i = 0; i < numBytes; i++) {
            var char1 = this.hex2num[str.charAt(i << 1)];
            var char2 = this.hex2num[str.charAt((i << 1) + 1)];
            buf.writeUInt8((char1 << 4) | char2, i);
        }
        return numBytes;
    };
    HEX.byte2str = function (buff) {
        var len = buff.length;
        var chars = new Array(len << 1);
        var j = 0;
        for (var i = 0; i < len; i++) {
            var hex2 = buff.readUInt8(i) & 0xF;
            var hex1 = buff.readUInt8(i) >> 4;
            chars[j++] = this.num2hex[hex1];
            chars[j++] = this.num2hex[hex2];
        }
        return chars.join('');
    };
    HEX.byteLength = function (str) {
        // Assuming a valid string.
        return str.length >> 1;
    };
    HEX.HEXCHARS = '0123456789abcdef';
    HEX.num2hex = (function () {
        var obj = new Array(HEX.HEXCHARS.length);
        for (var idx = 0; idx < HEX.HEXCHARS.length; idx++) {
            var i = HEX.HEXCHARS[idx];
            obj[idx] = i;
        }
        return obj;
    })();
    HEX.hex2num = (function () {
        var idx, i;
        var obj = {};
        for (idx = 0; idx < HEX.HEXCHARS.length; idx++) {
            i = HEX.HEXCHARS[idx];
            obj[i] = idx;
        }
        var capitals = 'ABCDEF';
        for (idx = 0; idx < capitals.length; idx++) {
            i = capitals[idx];
            obj[i] = idx + 10;
        }
        return obj;
    })();
    return HEX;
}());
exports.HEX = HEX;
/**
 * Contains string utility functions for binary string encoding. This is where we
 * pack arbitrary binary data as a UTF-16 string.
 *
 * Each character in the string is two bytes. The first character in the string
 * is special: The first byte specifies if the binary data is of odd byte length.
 * If it is, then it is a 1 and the second byte is the first byte of data; if
 * not, it is a 0 and the second byte is 0.
 *
 * Everything is little endian.
 */
var BINSTR = (function () {
    function BINSTR() {
    }
    BINSTR.str2byte = function (str, buf) {
        // Special case: Empty string
        if (str.length === 0) {
            return 0;
        }
        var numBytes = BINSTR.byteLength(str);
        if (numBytes > buf.length) {
            numBytes = buf.length;
        }
        var j = 0;
        var startByte = 0;
        var endByte = startByte + numBytes;
        // Handle first character separately
        var firstChar = str.charCodeAt(j++);
        if (firstChar !== 0) {
            buf.writeUInt8(firstChar & 0xFF, 0);
            startByte = 1;
        }
        for (var i = startByte; i < endByte; i += 2) {
            var chr = str.charCodeAt(j++);
            if (endByte - i === 1) {
                // Write first byte of character
                buf.writeUInt8(chr >> 8, i);
            }
            if (endByte - i >= 2) {
                // Write both bytes in character
                buf.writeUInt16BE(chr, i);
            }
        }
        return numBytes;
    };
    BINSTR.byte2str = function (buff) {
        var len = buff.length;
        // Special case: Empty string
        if (len === 0) {
            return '';
        }
        var charLen = (len >> 1) + 1, chars = new Array(charLen), j = 0, i;
        // Even or odd length?
        if ((len & 1) === 1) {
            chars[0] = 0x100 | buff.readUInt8(j++);
        }
        else {
            chars[0] = 0;
        }
        for (i = 1; i < charLen; i++) {
            chars[i] = buff.readUInt16BE(j);
            j += 2;
        }
        return fromCharCodes(chars);
    };
    BINSTR.byteLength = function (str) {
        if (str.length === 0) {
            // Special case: Empty string.
            return 0;
        }
        var firstChar = str.charCodeAt(0);
        var bytelen = (str.length - 1) << 1;
        if (firstChar !== 0) {
            bytelen++;
        }
        return bytelen;
    };
    return BINSTR;
}());
exports.BINSTR = BINSTR;
/**
 * IE/older FF version of binary string. One byte per character, offset by 0x20.
 */
var BINSTRIE = (function () {
    function BINSTRIE() {
    }
    BINSTRIE.str2byte = function (str, buf) {
        var length = str.length > buf.length ? buf.length : str.length;
        for (var i = 0; i < length; i++) {
            buf.writeUInt8(str.charCodeAt(i) - 0x20, i);
        }
        return length;
    };
    BINSTRIE.byte2str = function (buff) {
        var chars = new Array(buff.length);
        for (var i = 0; i < buff.length; i++) {
            chars[i] = String.fromCharCode(buff.readUInt8(i) + 0x20);
        }
        return chars.join('');
    };
    BINSTRIE.byteLength = function (str) {
        return str.length;
    };
    return BINSTRIE;
}());
exports.BINSTRIE = BINSTRIE;

},{"./extended_ascii":7}],9:[function(_dereq_,module,exports){
"use strict";
if (typeof (ArrayBuffer) === 'undefined') {
    exports.isArrayBufferView = function (ab) { return false; };
    exports.isArrayBuffer = function (ab) { return false; };
}
else {
    exports.isArrayBuffer = function (ab) {
        return typeof ab.byteLength === 'number';
    };
    if (ArrayBuffer['isView']) {
        exports.isArrayBufferView = function (ab) {
            return ArrayBuffer.isView(ab);
        };
    }
    else {
        exports.isArrayBufferView = function (ab) {
            return exports.isArrayBuffer(ab['buffer']);
        };
    }
}

},{}],10:[function(_dereq_,module,exports){
(function (process){
"use strict";
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function posixSplitPath(filename) {
    var out = splitPathRe.exec(filename);
    out.shift();
    return out;
}
/**
 * Emulates Node's `path` module. This module contains utilities for handling and
 * transforming file paths. **All** of these methods perform only string
 * transformations. The file system is not consulted to check whether paths are
 * valid.
 * @see http://nodejs.org/api/path.html
 * @class
 */
var path = (function () {
    function path() {
    }
    /**
     * Normalize a string path, taking care of '..' and '.' parts.
     *
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     * @example Usage example
     *   path.normalize('/foo/bar//baz/asdf/quux/..')
     *   // returns
     *   '/foo/bar/baz/asdf'
     * @param [String] p The path to normalize.
     * @return [String]
     */
    path.normalize = function (p) {
        // Special case: '' -> '.'
        if (p === '') {
            p = '.';
        }
        // It's very important to know if the path is relative or not, since it
        // changes how we process .. and reconstruct the split string.
        var absolute = p.charAt(0) === path.sep;
        // Remove repeated //s
        p = path._removeDuplicateSeps(p);
        // Try to remove as many '../' as possible, and remove '.' completely.
        var components = p.split(path.sep);
        var goodComponents = [];
        for (var idx = 0; idx < components.length; idx++) {
            var c = components[idx];
            if (c === '.') {
                continue;
            }
            else if (c === '..' && (absolute || (!absolute && goodComponents.length > 0 && goodComponents[0] !== '..'))) {
                // In the absolute case: Path is relative to root, so we may pop even if
                // goodComponents is empty (e.g. /../ => /)
                // In the relative case: We're getting rid of a directory that preceded
                // it (e.g. /foo/../bar -> /bar)
                goodComponents.pop();
            }
            else {
                goodComponents.push(c);
            }
        }
        // Add in '.' when it's a relative path with no other nonempty components.
        // Possible results: '.' and './' (input: [''] or [])
        // @todo Can probably simplify this logic.
        if (!absolute && goodComponents.length < 2) {
            switch (goodComponents.length) {
                case 1:
                    if (goodComponents[0] === '') {
                        goodComponents.unshift('.');
                    }
                    break;
                default:
                    goodComponents.push('.');
            }
        }
        p = goodComponents.join(path.sep);
        if (absolute && p.charAt(0) !== path.sep) {
            p = path.sep + p;
        }
        return p;
    };
    /**
     * Join all arguments together and normalize the resulting path.
     *
     * Arguments must be strings.
     * @example Usage
     *   path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
     *   // returns
     *   '/foo/bar/baz/asdf'
     *
     *   path.join('foo', {}, 'bar')
     *   // throws exception
     *   TypeError: Arguments to path.join must be strings
     * @param [String,...] paths Each component of the path
     * @return [String]
     */
    path.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i - 0] = arguments[_i];
        }
        // Required: Prune any non-strings from the path. I also prune empty segments
        // so we can do a simple join of the array.
        var processed = [];
        for (var i = 0; i < paths.length; i++) {
            var segment = paths[i];
            if (typeof segment !== 'string') {
                throw new TypeError("Invalid argument type to path.join: " + (typeof segment));
            }
            else if (segment !== '') {
                processed.push(segment);
            }
        }
        return path.normalize(processed.join(path.sep));
    };
    /**
     * Resolves to to an absolute path.
     *
     * If to isn't already absolute from arguments are prepended in right to left
     * order, until an absolute path is found. If after using all from paths still
     * no absolute path is found, the current working directory is used as well.
     * The resulting path is normalized, and trailing slashes are removed unless
     * the path gets resolved to the root directory. Non-string arguments are
     * ignored.
     *
     * Another way to think of it is as a sequence of cd commands in a shell.
     *
     *     path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
     *
     * Is similar to:
     *
     *     cd foo/bar
     *     cd /tmp/file/
     *     cd ..
     *     cd a/../subfile
     *     pwd
     *
     * The difference is that the different paths don't need to exist and may also
     * be files.
     * @example Usage example
     *   path.resolve('/foo/bar', './baz')
     *   // returns
     *   '/foo/bar/baz'
     *
     *   path.resolve('/foo/bar', '/tmp/file/')
     *   // returns
     *   '/tmp/file'
     *
     *   path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
     *   // if currently in /home/myself/node, it returns
     *   '/home/myself/node/wwwroot/static_files/gif/image.gif'
     * @param [String,...] paths
     * @return [String]
     */
    path.resolve = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i - 0] = arguments[_i];
        }
        // Monitor for invalid paths, throw out empty paths, and look for the *last*
        // absolute path that we see.
        var processed = [];
        for (var i = 0; i < paths.length; i++) {
            var p = paths[i];
            if (typeof p !== 'string') {
                throw new TypeError("Invalid argument type to path.join: " + (typeof p));
            }
            else if (p !== '') {
                // Remove anything that has occurred before this absolute path, as it
                // doesn't matter.
                if (p.charAt(0) === path.sep) {
                    processed = [];
                }
                processed.push(p);
            }
        }
        // Special: Remove trailing slash unless it's the root
        var resolved = path.normalize(processed.join(path.sep));
        if (resolved.length > 1 && resolved.charAt(resolved.length - 1) === path.sep) {
            return resolved.substr(0, resolved.length - 1);
        }
        // Special: If it doesn't start with '/', it's relative and we need to append
        // the current directory.
        if (resolved.charAt(0) !== path.sep) {
            // Remove ./, since we're going to append the current directory.
            if (resolved.charAt(0) === '.' && (resolved.length === 1 || resolved.charAt(1) === path.sep)) {
                resolved = resolved.length === 1 ? '' : resolved.substr(2);
            }
            // Append the current directory, which *must* be an absolute path.
            var cwd = process.cwd();
            if (resolved !== '') {
                // cwd will never end in a /... unless it's the root.
                resolved = this.normalize(cwd + (cwd !== '/' ? path.sep : '') + resolved);
            }
            else {
                resolved = cwd;
            }
        }
        return resolved;
    };
    /**
     * Solve the relative path from from to to.
     *
     * At times we have two absolute paths, and we need to derive the relative path
     * from one to the other. This is actually the reverse transform of
     * path.resolve, which means we see that:
     *
     *    path.resolve(from, path.relative(from, to)) == path.resolve(to)
     *
     * @example Usage example
     *   path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
     *   // returns
     *   '..\\..\\impl\\bbb'
     *
     *   path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
     *   // returns
     *   '../../impl/bbb'
     * @param [String] from
     * @param [String] to
     * @return [String]
     */
    path.relative = function (from, to) {
        var i;
        // Alright. Let's resolve these two to absolute paths and remove any
        // weirdness.
        from = path.resolve(from);
        to = path.resolve(to);
        var fromSegs = from.split(path.sep);
        var toSegs = to.split(path.sep);
        // Remove the first segment on both, as it's '' (both are absolute paths)
        toSegs.shift();
        fromSegs.shift();
        // There are two segments to this path:
        // * Going *up* the directory hierarchy with '..'
        // * Going *down* the directory hierarchy with foo/baz/bat.
        var upCount = 0;
        var downSegs = [];
        // Figure out how many things in 'from' are shared with 'to'.
        for (i = 0; i < fromSegs.length; i++) {
            var seg = fromSegs[i];
            if (seg === toSegs[i]) {
                continue;
            }
            // The rest of 'from', including the current element, indicates how many
            // directories we need to go up.
            upCount = fromSegs.length - i;
            break;
        }
        // The rest of 'to' indicates where we need to change to. We place this
        // outside of the loop, as toSegs.length may be greater than fromSegs.length.
        downSegs = toSegs.slice(i);
        // Special case: If 'from' is '/'
        if (fromSegs.length === 1 && fromSegs[0] === '') {
            upCount = 0;
        }
        // upCount can't be greater than the number of fromSegs
        // (cd .. from / is still /)
        if (upCount > fromSegs.length) {
            upCount = fromSegs.length;
        }
        // Create the final string!
        var rv = '';
        for (i = 0; i < upCount; i++) {
            rv += '../';
        }
        rv += downSegs.join(path.sep);
        // Special case: Remove trailing '/'. Happens if it's all up and no down.
        if (rv.length > 1 && rv.charAt(rv.length - 1) === path.sep) {
            rv = rv.substr(0, rv.length - 1);
        }
        return rv;
    };
    /**
     * Return the directory name of a path. Similar to the Unix `dirname` command.
     *
     * Note that BrowserFS does not validate if the path is actually a valid
     * directory.
     * @example Usage example
     *   path.dirname('/foo/bar/baz/asdf/quux')
     *   // returns
     *   '/foo/bar/baz/asdf'
     * @param [String] p The path to get the directory name of.
     * @return [String]
     */
    path.dirname = function (p) {
        // We get rid of //, but we don't modify anything else (e.g. any extraneous .
        // and ../ are kept intact)
        p = path._removeDuplicateSeps(p);
        var absolute = p.charAt(0) === path.sep;
        var sections = p.split(path.sep);
        // Do 1 if it's /foo/bar, 2 if it's /foo/bar/
        if (sections.pop() === '' && sections.length > 0) {
            sections.pop();
        }
        // # of sections needs to be > 1 if absolute, since the first section is '' for '/'.
        // If not absolute, the first section is the first part of the path, and is OK
        // to return.
        if (sections.length > 1 || (sections.length === 1 && !absolute)) {
            return sections.join(path.sep);
        }
        else if (absolute) {
            return path.sep;
        }
        else {
            return '.';
        }
    };
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * @example Usage example
     *   path.basename('/foo/bar/baz/asdf/quux.html')
     *   // returns
     *   'quux.html'
     *
     *   path.basename('/foo/bar/baz/asdf/quux.html', '.html')
     *   // returns
     *   'quux'
     * @param [String] p
     * @param [String?] ext
     * @return [String]
     */
    path.basename = function (p, ext) {
        if (ext === void 0) { ext = ""; }
        // Special case: Normalize will modify this to '.'
        if (p === '') {
            return p;
        }
        // Normalize the string first to remove any weirdness.
        p = path.normalize(p);
        // Get the last part of the string.
        var sections = p.split(path.sep);
        var lastPart = sections[sections.length - 1];
        // Special case: If it's empty, then we have a string like so: foo/
        // Meaning, 'foo' is guaranteed to be a directory.
        if (lastPart === '' && sections.length > 1) {
            return sections[sections.length - 2];
        }
        // Remove the extension, if need be.
        if (ext.length > 0) {
            var lastPartExt = lastPart.substr(lastPart.length - ext.length);
            if (lastPartExt === ext) {
                return lastPart.substr(0, lastPart.length - ext.length);
            }
        }
        return lastPart;
    };
    /**
     * Return the extension of the path, from the last '.' to end of string in the
     * last portion of the path. If there is no '.' in the last portion of the path
     * or the first character of it is '.', then it returns an empty string.
     * @example Usage example
     *   path.extname('index.html')
     *   // returns
     *   '.html'
     *
     *   path.extname('index.')
     *   // returns
     *   '.'
     *
     *   path.extname('index')
     *   // returns
     *   ''
     * @param [String] p
     * @return [String]
     */
    path.extname = function (p) {
        p = path.normalize(p);
        var sections = p.split(path.sep);
        p = sections.pop();
        // Special case: foo/file.ext/ should return '.ext'
        if (p === '' && sections.length > 0) {
            p = sections.pop();
        }
        if (p === '..') {
            return '';
        }
        var i = p.lastIndexOf('.');
        if (i === -1 || i === 0) {
            return '';
        }
        return p.substr(i);
    };
    /**
     * Checks if the given path is an absolute path.
     *
     * Despite not being documented, this is a tested part of Node's path API.
     * @param [String] p
     * @return [Boolean] True if the path appears to be an absolute path.
     */
    path.isAbsolute = function (p) {
        return p.length > 0 && p.charAt(0) === path.sep;
    };
    /**
     * Unknown. Undocumented.
     */
    path._makeLong = function (p) {
        return p;
    };
    /**
     * Returns an object from a path string.
     */
    path.parse = function (p) {
        var allParts = posixSplitPath(p);
        return {
            root: allParts[0],
            dir: allParts[0] + allParts[1].slice(0, -1),
            base: allParts[2],
            ext: allParts[3],
            name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
        };
    };
    path.format = function (pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
            throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
        }
        var root = pathObject.root || '';
        if (typeof root !== 'string') {
            throw new TypeError("'pathObject.root' must be a string or undefined, not " +
                typeof pathObject.root);
        }
        var dir = pathObject.dir ? pathObject.dir + path.sep : '';
        var base = pathObject.base || '';
        return dir + base;
    };
    path._removeDuplicateSeps = function (p) {
        p = p.replace(this._replaceRegex, this.sep);
        return p;
    };
    // The platform-specific file separator. BrowserFS uses `/`.
    path.sep = '/';
    path._replaceRegex = new RegExp("//+", 'g');
    // The platform-specific path delimiter. BrowserFS uses `:`.
    path.delimiter = ':';
    path.posix = path;
    // XXX: Typing hack. We don't actually support win32.
    path.win32 = path;
    return path;
}());
var _ = path;
module.exports = path;

}).call(this,_dereq_('bfs-process'))

},{"bfs-process":11}],11:[function(_dereq_,module,exports){
"use strict";
var Process = _dereq_('./process');
var process = new Process(), processProxy = {};
function defineKey(key) {
    if (processProxy[key]) {
        // Probably a builtin Object property we don't care about.
        return;
    }
    if (typeof process[key] === 'function') {
        processProxy[key] = function () {
            return process[key].apply(process, arguments);
        };
    }
    else {
        processProxy[key] = process[key];
    }
}
for (var key in process) {
    // Don't check if process.hasOwnProperty; we want to also expose objects
    // up the prototype hierarchy.
    defineKey(key);
}
// Special key: Ensure we update public-facing values of stdin/stdout/stderr.
processProxy.initializeTTYs = function () {
    if (process.stdin === null) {
        process.initializeTTYs();
        processProxy.stdin = process.stdin;
        processProxy.stdout = process.stdout;
        processProxy.stderr = process.stderr;
    }
};
process.nextTick(function () {
    processProxy.initializeTTYs();
});
module.exports = processProxy;

},{"./process":12}],12:[function(_dereq_,module,exports){
(function (__dirname){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events = _dereq_('events');
// Path depends on process. Avoid a circular reference by dynamically including path when we need it.
var path = null;
var Item = (function () {
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    return Item;
}());
/**
 * Contains a queue of Items for process.nextTick.
 * Inspired by node-process: https://github.com/defunctzombie/node-process
 */
var NextTickQueue = (function () {
    function NextTickQueue() {
        this._queue = [];
        this._draining = false;
        // Used/assigned by the drainQueue function.
        this._currentQueue = null;
        this._queueIndex = -1;
    }
    NextTickQueue.prototype.push = function (item) {
        var _this = this;
        if (this._queue.push(item) === 1 && !this._draining) {
            setTimeout(function () { return _this._drainQueue(); }, 0);
        }
    };
    NextTickQueue.prototype._cleanUpNextTick = function () {
        this._draining = false;
        if (this._currentQueue && this._currentQueue.length) {
            this._queue = this._currentQueue.concat(this._queue);
        }
        else {
            this._queueIndex = -1;
        }
        if (this._queue.length) {
            this._drainQueue();
        }
    };
    NextTickQueue.prototype._drainQueue = function () {
        var _this = this;
        if (this._draining) {
            return;
        }
        // If an Item throws an unhandled exception, this function will clean things up.
        var timeout = setTimeout(function () { return _this._cleanUpNextTick(); });
        this._draining = true;
        var len = this._queue.length;
        while (len) {
            this._currentQueue = this._queue;
            this._queue = [];
            while (++this._queueIndex < len) {
                if (this._currentQueue) {
                    this._currentQueue[this._queueIndex].run();
                }
            }
            this._queueIndex = -1;
            len = this._queue.length;
        }
        this._currentQueue = null;
        this._draining = false;
        clearTimeout(timeout);
    };
    return NextTickQueue;
}());
/**
 * Partial implementation of Node's `process` module.
 * We implement the portions that are relevant for the filesystem.
 * @see http://nodejs.org/api/process.html
 * @class
 */
var Process = (function (_super) {
    __extends(Process, _super);
    function Process() {
        _super.apply(this, arguments);
        this.startTime = Date.now();
        this._cwd = '/';
        /**
         * Returns what platform you are running on.
         * @return [String]
         */
        this.platform = 'browser';
        this.argv = [];
        this.execArgv = [];
        this.stdout = null;
        this.stderr = null;
        this.stdin = null;
        this.domain = null;
        this._queue = new NextTickQueue();
        this.execPath = __dirname;
        this.env = {};
        this.exitCode = 0;
        this._gid = 1;
        this._uid = 1;
        this.version = 'v5.0';
        this.versions = {
            http_parser: '0.0',
            node: '5.0',
            v8: '0.0',
            uv: '0.0',
            zlib: '0.0',
            ares: '0.0',
            icu: '0.0',
            modules: '0',
            openssl: '0.0'
        };
        this.config = {
            target_defaults: { cflags: [],
                default_configuration: 'Release',
                defines: [],
                include_dirs: [],
                libraries: [] },
            variables: { clang: 0,
                host_arch: 'x32',
                node_install_npm: false,
                node_install_waf: false,
                node_prefix: '',
                node_shared_cares: false,
                node_shared_http_parser: false,
                node_shared_libuv: false,
                node_shared_zlib: false,
                node_shared_v8: false,
                node_use_dtrace: false,
                node_use_etw: false,
                node_use_openssl: false,
                node_shared_openssl: false,
                strict_aliasing: false,
                target_arch: 'x32',
                v8_use_snapshot: false,
                v8_no_strict_aliasing: 0,
                visibility: '' } };
        this.pid = (Math.random() * 1000) | 0;
        this.title = 'node';
        this.arch = 'x32';
        this._mask = 18;
        // Undefined in main thread. Worker-only.
        this.connected = undefined;
    }
    /**
     * Changes the current working directory.
     *
     * **Note**: BrowserFS does not validate that the directory actually exists.
     *
     * @example Usage example
     *   console.log('Starting directory: ' + process.cwd());
     *   process.chdir('/tmp');
     *   console.log('New directory: ' + process.cwd());
     * @param [String] dir The directory to change to.
     */
    Process.prototype.chdir = function (dir) {
        // XXX: Circular dependency hack.
        if (path === null) {
            path = _dereq_('path');
        }
        this._cwd = path.resolve(dir);
    };
    /**
     * Returns the current working directory.
     * @example Usage example
     *   console.log('Current directory: ' + process.cwd());
     * @return [String] The current working directory.
     */
    Process.prototype.cwd = function () {
        return this._cwd;
    };
    /**
     * Number of seconds BrowserFS has been running.
     * @return [Number]
     */
    Process.prototype.uptime = function () {
        return ((Date.now() - this.startTime) / 1000) | 0;
    };
    Process.prototype.nextTick = function (fun) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._queue.push(new Item(fun, args));
    };
    Process.prototype.abort = function () {
        this.emit('abort');
    };
    Process.prototype.exit = function (code) {
        this.exitCode = code;
        this.emit('exit', [code]);
    };
    Process.prototype.getgid = function () {
        return this._gid;
    };
    Process.prototype.setgid = function (gid) {
        if (typeof gid === 'number') {
            this._gid = gid;
        }
        else {
            this._gid = 1;
        }
    };
    Process.prototype.getuid = function () {
        return this._uid;
    };
    Process.prototype.setuid = function (uid) {
        if (typeof uid === 'number') {
            this._uid = uid;
        }
        else {
            this._uid = 1;
        }
    };
    Process.prototype.kill = function (pid, signal) {
        this.emit('kill', [pid, signal]);
    };
    Process.prototype.memoryUsage = function () {
        return { rss: 0, heapTotal: 0, heapUsed: 0 };
    };
    Process.prototype.umask = function (mask) {
        if (mask === void 0) { mask = this._mask; }
        var oldMask = this._mask;
        this._mask = mask;
        this.emit('umask', [mask]);
        return oldMask;
    };
    Process.prototype.hrtime = function () {
        var timeinfo;
        if (typeof performance !== 'undefined') {
            timeinfo = performance.now();
        }
        else if (Date['now']) {
            timeinfo = Date.now();
        }
        else {
            timeinfo = (new Date()).getTime();
        }
        var secs = (timeinfo / 1000) | 0;
        timeinfo -= secs * 1000;
        timeinfo = (timeinfo * 1000000) | 0;
        return [secs, timeinfo];
    };
    /**
     * [BFS only] Initialize the TTY devices.
     */
    Process.prototype.initializeTTYs = function () {
        // Guard against multiple invocations.
        if (this.stdout === null) {
            var TTY = _dereq_('./tty');
            this.stdout = new TTY();
            this.stderr = new TTY();
            this.stdin = new TTY();
        }
    };
    /**
     * Worker-only function; irrelevant here.
     */
    Process.prototype.disconnect = function () {
    };
    return Process;
}(events.EventEmitter));
module.exports = Process;

}).call(this,"/node_modules/bfs-process/js")

},{"./tty":13,"events":17,"path":10}],13:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stream = _dereq_('stream');
var TTY = (function (_super) {
    __extends(TTY, _super);
    function TTY() {
        _super.call(this);
        this.isRaw = false;
        this.columns = 80;
        this.rows = 120;
        this.isTTY = true;
        this._bufferedWrites = [];
        this._waitingForWrites = false;
    }
    /**
     * Toggle raw mode.
     */
    TTY.prototype.setRawMode = function (mode) {
        if (this.isRaw !== mode) {
            this.isRaw = mode;
            // [BFS] TTY implementations can use this to change their event emitting
            //       patterns.
            this.emit('modeChange');
        }
    };
    /**
     * [BFS] Update the number of columns available on the terminal.
     */
    TTY.prototype.changeColumns = function (columns) {
        if (columns !== this.columns) {
            this.columns = columns;
            // Resize event.
            this.emit('resize');
        }
    };
    /**
     * [BFS] Update the number of rows available on the terminal.
     */
    TTY.prototype.changeRows = function (rows) {
        if (rows !== this.rows) {
            this.rows = rows;
            // Resize event.
            this.emit('resize');
        }
    };
    /**
     * Returns 'true' if the given object is a TTY.
     */
    TTY.isatty = function (fd) {
        return fd && fd instanceof TTY;
    };
    TTY.prototype._write = function (chunk, encoding, cb) {
        var error;
        try {
            var data;
            if (typeof (chunk) === 'string') {
                data = new Buffer(chunk, encoding);
            }
            else {
                data = chunk;
            }
            this._bufferedWrites.push(data);
            if (this._waitingForWrites) {
                this._read(1024);
            }
        }
        catch (e) {
            error = e;
        }
        finally {
            cb(error);
        }
    };
    TTY.prototype._read = function (size) {
        // Size is advisory -- we can ignore it.
        if (this._bufferedWrites.length === 0) {
            this._waitingForWrites = true;
        }
        else {
            while (this._bufferedWrites.length > 0) {
                this._waitingForWrites = this.push(this._bufferedWrites.shift());
                if (!this._waitingForWrites) {
                    break;
                }
            }
        }
    };
    return TTY;
}(stream.Duplex));
module.exports = TTY;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"bfs-buffer":2,"stream":34}],14:[function(_dereq_,module,exports){

},{}],15:[function(_dereq_,module,exports){
(function (global){
'use strict';

var buffer = _dereq_('buffer');
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"buffer":2}],16:[function(_dereq_,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":_dereq_("../../is-buffer/index.js")})

},{"../../is-buffer/index.js":19}],17:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],18:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],19:[function(_dereq_,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],20:[function(_dereq_,module,exports){
(function (global){
/* pako 1.0.3 nodeca/pako */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.pako=e()}}(function(){return function e(t,i,n){function a(o,s){if(!i[o]){if(!t[o]){var f="function"==typeof _dereq_&&_dereq_;if(!s&&f)return f(o,!0);if(r)return r(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[o]={exports:{}};t[o][0].call(d.exports,function(e){var i=t[o][1][e];return a(i?i:e)},d,d.exports,e,t,i,n)}return i[o].exports}for(var r="function"==typeof _dereq_&&_dereq_,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,i){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,i,n,a){if(t.subarray&&e.subarray)return void e.set(t.subarray(i,i+n),a);for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){var t,i,n,a,r,o;for(n=0,t=0,i=e.length;t<i;t++)n+=e[t].length;for(o=new Uint8Array(n),a=0,t=0,i=e.length;t<i;t++)r=e[t],o.set(r,a),a+=r.length;return o}},r={arraySet:function(e,t,i,n,a){for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,r))},i.setTyped(n)},{}],2:[function(e,t,i){"use strict";function n(e,t){if(t<65537&&(e.subarray&&o||!e.subarray&&r))return String.fromCharCode.apply(null,a.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}var a=e("./common"),r=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch(e){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){o=!1}for(var s=new a.Buf8(256),f=0;f<256;f++)s[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;s[254]=s[254]=1,i.string2buf=function(e){var t,i,n,r,o,s=e.length,f=0;for(r=0;r<s;r++)i=e.charCodeAt(r),55296===(64512&i)&&r+1<s&&(n=e.charCodeAt(r+1),56320===(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),r++)),f+=i<128?1:i<2048?2:i<65536?3:4;for(t=new a.Buf8(f),o=0,r=0;o<f;r++)i=e.charCodeAt(r),55296===(64512&i)&&r+1<s&&(n=e.charCodeAt(r+1),56320===(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),r++)),i<128?t[o++]=i:i<2048?(t[o++]=192|i>>>6,t[o++]=128|63&i):i<65536?(t[o++]=224|i>>>12,t[o++]=128|i>>>6&63,t[o++]=128|63&i):(t[o++]=240|i>>>18,t[o++]=128|i>>>12&63,t[o++]=128|i>>>6&63,t[o++]=128|63&i);return t},i.buf2binstring=function(e){return n(e,e.length)},i.binstring2buf=function(e){for(var t=new a.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,a,r,o,f=t||e.length,l=new Array(2*f);for(a=0,i=0;i<f;)if(r=e[i++],r<128)l[a++]=r;else if(o=s[r],o>4)l[a++]=65533,i+=o-1;else{for(r&=2===o?31:3===o?15:7;o>1&&i<f;)r=r<<6|63&e[i++],o--;o>1?l[a++]=65533:r<65536?l[a++]=r:(r-=65536,l[a++]=55296|r>>10&1023,l[a++]=56320|1023&r)}return n(l,a)},i.utf8border=function(e,t){var i;for(t=t||e.length,t>e.length&&(t=e.length),i=t-1;i>=0&&128===(192&e[i]);)i--;return i<0?t:0===i?t:i+s[e[i]]>t?i:t}},{"./common":1}],3:[function(e,t,i){"use strict";function n(e,t,i,n){for(var a=65535&e|0,r=e>>>16&65535|0,o=0;0!==i;){o=i>2e3?2e3:i,i-=o;do a=a+t[n++]|0,r=r+a|0;while(--o);a%=65521,r%=65521}return a|r<<16|0}t.exports=n},{}],4:[function(e,t,i){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,i){"use strict";function n(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}function a(e,t,i,n){var a=r,o=n+i;e^=-1;for(var s=n;s<o;s++)e=e>>>8^a[255&(e^t[s])];return e^-1}var r=n();t.exports=a},{}],6:[function(e,t,i){"use strict";function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}t.exports=n},{}],7:[function(e,t,i){"use strict";var n=30,a=12;t.exports=function(e,t){var i,r,o,s,f,l,d,u,c,h,b,w,m,k,_,g,v,p,x,y,S,E,B,Z,A;i=e.state,r=e.next_in,Z=e.input,o=r+(e.avail_in-5),s=e.next_out,A=e.output,f=s-(t-e.avail_out),l=s+(e.avail_out-257),d=i.dmax,u=i.wsize,c=i.whave,h=i.wnext,b=i.window,w=i.hold,m=i.bits,k=i.lencode,_=i.distcode,g=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{m<15&&(w+=Z[r++]<<m,m+=8,w+=Z[r++]<<m,m+=8),p=k[w&g];t:for(;;){if(x=p>>>24,w>>>=x,m-=x,x=p>>>16&255,0===x)A[s++]=65535&p;else{if(!(16&x)){if(0===(64&x)){p=k[(65535&p)+(w&(1<<x)-1)];continue t}if(32&x){i.mode=a;break e}e.msg="invalid literal/length code",i.mode=n;break e}y=65535&p,x&=15,x&&(m<x&&(w+=Z[r++]<<m,m+=8),y+=w&(1<<x)-1,w>>>=x,m-=x),m<15&&(w+=Z[r++]<<m,m+=8,w+=Z[r++]<<m,m+=8),p=_[w&v];i:for(;;){if(x=p>>>24,w>>>=x,m-=x,x=p>>>16&255,!(16&x)){if(0===(64&x)){p=_[(65535&p)+(w&(1<<x)-1)];continue i}e.msg="invalid distance code",i.mode=n;break e}if(S=65535&p,x&=15,m<x&&(w+=Z[r++]<<m,m+=8,m<x&&(w+=Z[r++]<<m,m+=8)),S+=w&(1<<x)-1,S>d){e.msg="invalid distance too far back",i.mode=n;break e}if(w>>>=x,m-=x,x=s-f,S>x){if(x=S-x,x>c&&i.sane){e.msg="invalid distance too far back",i.mode=n;break e}if(E=0,B=b,0===h){if(E+=u-x,x<y){y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}}else if(h<x){if(E+=u+h-x,x-=h,x<y){y-=x;do A[s++]=b[E++];while(--x);if(E=0,h<y){x=h,y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}}}else if(E+=h-x,x<y){y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}for(;y>2;)A[s++]=B[E++],A[s++]=B[E++],A[s++]=B[E++],y-=3;y&&(A[s++]=B[E++],y>1&&(A[s++]=B[E++]))}else{E=s-S;do A[s++]=A[E++],A[s++]=A[E++],A[s++]=A[E++],y-=3;while(y>2);y&&(A[s++]=A[E++],y>1&&(A[s++]=A[E++]))}break}}break}}while(r<o&&s<l);y=m>>3,r-=y,m-=y<<3,w&=(1<<m)-1,e.next_in=r,e.next_out=s,e.avail_in=r<o?5+(o-r):5-(r-o),e.avail_out=s<l?257+(l-s):257-(s-l),i.hold=w,i.bits=m}},{}],8:[function(e,t,i){"use strict";function n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new _.Buf16(320),this.work=new _.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new _.Buf32(we),t.distcode=t.distdyn=new _.Buf32(me),t.sane=1,t.back=-1,z):C}function o(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,r(e)):C}function s(e,t){var i,n;return e&&e.state?(n=e.state,t<0?(i=0,t=-t):(i=(t>>4)+1,t<48&&(t&=15)),t&&(t<8||t>15)?C:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,o(e))):C}function f(e,t){var i,n;return e?(n=new a,e.state=n,n.window=null,i=s(e,t),i!==z&&(e.state=null),i):C}function l(e){return f(e,_e)}function d(e){if(ge){var t;for(m=new _.Buf32(512),k=new _.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(x(S,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;x(E,e.lens,0,32,k,0,e.work,{bits:5}),ge=!1}e.lencode=m,e.lenbits=9,e.distcode=k,e.distbits=5}function u(e,t,i,n){var a,r=e.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new _.Buf8(r.wsize)),n>=r.wsize?(_.arraySet(r.window,t,i-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(a=r.wsize-r.wnext,a>n&&(a=n),_.arraySet(r.window,t,i-n,a,r.wnext),n-=a,n?(_.arraySet(r.window,t,i-n,n,0),r.wnext=n,r.whave=r.wsize):(r.wnext+=a,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=a))),0}function c(e,t){var i,a,r,o,s,f,l,c,h,b,w,m,k,we,me,ke,_e,ge,ve,pe,xe,ye,Se,Ee,Be=0,Ze=new _.Buf8(4),Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return C;i=e.state,i.mode===X&&(i.mode=W),s=e.next_out,r=e.output,l=e.avail_out,o=e.next_in,a=e.input,f=e.avail_in,c=i.hold,h=i.bits,b=f,w=l,ye=z;e:for(;;)switch(i.mode){case D:if(0===i.wrap){i.mode=W;break}for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(2&i.wrap&&35615===c){i.check=0,Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0),c=0,h=0,i.mode=F;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",i.mode=ce;break}if((15&c)!==U){e.msg="unknown compression method",i.mode=ce;break}if(c>>>=4,h-=4,xe=(15&c)+8,0===i.wbits)i.wbits=xe;else if(xe>i.wbits){e.msg="invalid window size",i.mode=ce;break}i.dmax=1<<xe,e.adler=i.check=1,i.mode=512&c?q:X,c=0,h=0;break;case F:for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(i.flags=c,(255&i.flags)!==U){e.msg="unknown compression method",i.mode=ce;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=ce;break}i.head&&(i.head.text=c>>8&1),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0,i.mode=L;case L:for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.head&&(i.head.time=c),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,Ze[2]=c>>>16&255,Ze[3]=c>>>24&255,i.check=v(i.check,Ze,4,0)),c=0,h=0,i.mode=H;case H:for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.head&&(i.head.xflags=255&c,i.head.os=c>>8),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0,i.mode=M;case M:if(1024&i.flags){for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.length=c,i.head&&(i.head.extra_len=c),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0}else i.head&&(i.head.extra=null);i.mode=j;case j:if(1024&i.flags&&(m=i.length,m>f&&(m=f),m&&(i.head&&(xe=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),_.arraySet(i.head.extra,a,o,m,xe)),512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,i.length-=m),i.length))break e;i.length=0,i.mode=K;case K:if(2048&i.flags){if(0===f)break e;m=0;do xe=a[o+m++],i.head&&xe&&i.length<65536&&(i.head.name+=String.fromCharCode(xe));while(xe&&m<f);if(512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,xe)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=P;case P:if(4096&i.flags){if(0===f)break e;m=0;do xe=a[o+m++],i.head&&xe&&i.length<65536&&(i.head.comment+=String.fromCharCode(xe));while(xe&&m<f);if(512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,xe)break e}else i.head&&(i.head.comment=null);i.mode=Y;case Y:if(512&i.flags){for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c!==(65535&i.check)){e.msg="header crc mismatch",i.mode=ce;break}c=0,h=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=X;break;case q:for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}e.adler=i.check=n(c),c=0,h=0,i.mode=G;case G:if(0===i.havedict)return e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,N;e.adler=i.check=1,i.mode=X;case X:if(t===Z||t===A)break e;case W:if(i.last){c>>>=7&h,h-=7&h,i.mode=le;break}for(;h<3;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}switch(i.last=1&c,c>>>=1,h-=1,3&c){case 0:i.mode=J;break;case 1:if(d(i),i.mode=ie,t===A){c>>>=2,h-=2;break e}break;case 2:i.mode=$;break;case 3:e.msg="invalid block type",i.mode=ce}c>>>=2,h-=2;break;case J:for(c>>>=7&h,h-=7&h;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if((65535&c)!==(c>>>16^65535)){e.msg="invalid stored block lengths",i.mode=ce;break}if(i.length=65535&c,c=0,h=0,i.mode=Q,t===A)break e;case Q:i.mode=V;case V:if(m=i.length){if(m>f&&(m=f),m>l&&(m=l),0===m)break e;_.arraySet(r,a,o,m,s),f-=m,o+=m,l-=m,s+=m,i.length-=m;break}i.mode=X;break;case $:for(;h<14;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(i.nlen=(31&c)+257,c>>>=5,h-=5,i.ndist=(31&c)+1,c>>>=5,h-=5,i.ncode=(15&c)+4,c>>>=4,h-=4,i.nlen>286||i.ndist>30){e.msg="too many length or distance symbols",i.mode=ce;break}i.have=0,i.mode=ee;case ee:for(;i.have<i.ncode;){for(;h<3;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.lens[Ae[i.have++]]=7&c,c>>>=3,h-=3}for(;i.have<19;)i.lens[Ae[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,Se={bits:i.lenbits},ye=x(y,i.lens,0,19,i.lencode,0,i.work,Se),i.lenbits=Se.bits,ye){e.msg="invalid code lengths set",i.mode=ce;break}i.have=0,i.mode=te;case te:for(;i.have<i.nlen+i.ndist;){for(;Be=i.lencode[c&(1<<i.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(_e<16)c>>>=me,h-=me,i.lens[i.have++]=_e;else{if(16===_e){for(Ee=me+2;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c>>>=me,h-=me,0===i.have){e.msg="invalid bit length repeat",i.mode=ce;break}xe=i.lens[i.have-1],m=3+(3&c),c>>>=2,h-=2}else if(17===_e){for(Ee=me+3;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=me,h-=me,xe=0,m=3+(7&c),c>>>=3,h-=3}else{for(Ee=me+7;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=me,h-=me,xe=0,m=11+(127&c),c>>>=7,h-=7}if(i.have+m>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=ce;break}for(;m--;)i.lens[i.have++]=xe}}if(i.mode===ce)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=ce;break}if(i.lenbits=9,Se={bits:i.lenbits},ye=x(S,i.lens,0,i.nlen,i.lencode,0,i.work,Se),i.lenbits=Se.bits,ye){e.msg="invalid literal/lengths set",i.mode=ce;break}if(i.distbits=6,i.distcode=i.distdyn,Se={bits:i.distbits},ye=x(E,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,Se),i.distbits=Se.bits,ye){e.msg="invalid distances set",i.mode=ce;break}if(i.mode=ie,t===A)break e;case ie:i.mode=ne;case ne:if(f>=6&&l>=258){e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,p(e,w),s=e.next_out,r=e.output,l=e.avail_out,o=e.next_in,a=e.input,f=e.avail_in,c=i.hold,h=i.bits,i.mode===X&&(i.back=-1);break}for(i.back=0;Be=i.lencode[c&(1<<i.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(ke&&0===(240&ke)){for(ge=me,ve=ke,pe=_e;Be=i.lencode[pe+((c&(1<<ge+ve)-1)>>ge)],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(ge+me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=ge,h-=ge,i.back+=ge}if(c>>>=me,h-=me,i.back+=me,i.length=_e,0===ke){i.mode=fe;break}if(32&ke){i.back=-1,i.mode=X;break}if(64&ke){e.msg="invalid literal/length code",i.mode=ce;break}i.extra=15&ke,i.mode=ae;case ae:if(i.extra){for(Ee=i.extra;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.length+=c&(1<<i.extra)-1,c>>>=i.extra,h-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=re;case re:for(;Be=i.distcode[c&(1<<i.distbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(0===(240&ke)){for(ge=me,ve=ke,pe=_e;Be=i.distcode[pe+((c&(1<<ge+ve)-1)>>ge)],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(ge+me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=ge,h-=ge,i.back+=ge}if(c>>>=me,h-=me,i.back+=me,64&ke){e.msg="invalid distance code",i.mode=ce;break}i.offset=_e,i.extra=15&ke,i.mode=oe;case oe:if(i.extra){for(Ee=i.extra;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.offset+=c&(1<<i.extra)-1,c>>>=i.extra,h-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=ce;break}i.mode=se;case se:if(0===l)break e;if(m=w-l,i.offset>m){if(m=i.offset-m,m>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=ce;break}m>i.wnext?(m-=i.wnext,k=i.wsize-m):k=i.wnext-m,m>i.length&&(m=i.length),we=i.window}else we=r,k=s-i.offset,m=i.length;m>l&&(m=l),l-=m,i.length-=m;do r[s++]=we[k++];while(--m);0===i.length&&(i.mode=ne);break;case fe:if(0===l)break e;r[s++]=i.length,l--,i.mode=ne;break;case le:if(i.wrap){for(;h<32;){if(0===f)break e;f--,c|=a[o++]<<h,h+=8}if(w-=l,e.total_out+=w,i.total+=w,w&&(e.adler=i.check=i.flags?v(i.check,r,w,s-w):g(i.check,r,w,s-w)),w=l,(i.flags?c:n(c))!==i.check){e.msg="incorrect data check",i.mode=ce;break}c=0,h=0}i.mode=de;case de:if(i.wrap&&i.flags){for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=ce;break}c=0,h=0}i.mode=ue;case ue:ye=R;break e;case ce:ye=O;break e;case he:return I;case be:default:return C}return e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,(i.wsize||w!==e.avail_out&&i.mode<ce&&(i.mode<le||t!==B))&&u(e,e.output,e.next_out,w-e.avail_out)?(i.mode=he,I):(b-=e.avail_in,w-=e.avail_out,e.total_in+=b,e.total_out+=w,i.total+=w,i.wrap&&w&&(e.adler=i.check=i.flags?v(i.check,r,w,e.next_out-w):g(i.check,r,w,e.next_out-w)),e.data_type=i.bits+(i.last?64:0)+(i.mode===X?128:0)+(i.mode===ie||i.mode===Q?256:0),(0===b&&0===w||t===B)&&ye===z&&(ye=T),ye)}function h(e){if(!e||!e.state)return C;var t=e.state;return t.window&&(t.window=null),e.state=null,z}function b(e,t){var i;return e&&e.state?(i=e.state,0===(2&i.wrap)?C:(i.head=t,t.done=!1,z)):C}function w(e,t){var i,n,a,r=t.length;return e&&e.state?(i=e.state,0!==i.wrap&&i.mode!==G?C:i.mode===G&&(n=1,n=g(n,t,r,0),n!==i.check)?O:(a=u(e,t,r,r))?(i.mode=he,I):(i.havedict=1,z)):C}var m,k,_=e("../utils/common"),g=e("./adler32"),v=e("./crc32"),p=e("./inffast"),x=e("./inftrees"),y=0,S=1,E=2,B=4,Z=5,A=6,z=0,R=1,N=2,C=-2,O=-3,I=-4,T=-5,U=8,D=1,F=2,L=3,H=4,M=5,j=6,K=7,P=8,Y=9,q=10,G=11,X=12,W=13,J=14,Q=15,V=16,$=17,ee=18,te=19,ie=20,ne=21,ae=22,re=23,oe=24,se=25,fe=26,le=27,de=28,ue=29,ce=30,he=31,be=32,we=852,me=592,ke=15,_e=ke,ge=!0;i.inflateReset=o,i.inflateReset2=s,i.inflateResetKeep=r,i.inflateInit=l,i.inflateInit2=f,i.inflate=c,i.inflateEnd=h,i.inflateGetHeader=b,i.inflateSetDictionary=w,i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,i){"use strict";var n=e("../utils/common"),a=15,r=852,o=592,s=0,f=1,l=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,b,w,m,k,_){var g,v,p,x,y,S,E,B,Z,A=_.bits,z=0,R=0,N=0,C=0,O=0,I=0,T=0,U=0,D=0,F=0,L=null,H=0,M=new n.Buf16(a+1),j=new n.Buf16(a+1),K=null,P=0;for(z=0;z<=a;z++)M[z]=0;for(R=0;R<b;R++)M[t[i+R]]++;for(O=A,C=a;C>=1&&0===M[C];C--);if(O>C&&(O=C),0===C)return w[m++]=20971520,w[m++]=20971520,_.bits=1,0;for(N=1;N<C&&0===M[N];N++);for(O<N&&(O=N),U=1,z=1;z<=a;z++)if(U<<=1,U-=M[z],U<0)return-1;if(U>0&&(e===s||1!==C))return-1;for(j[1]=0,z=1;z<a;z++)j[z+1]=j[z]+M[z];for(R=0;R<b;R++)0!==t[i+R]&&(k[j[t[i+R]]++]=R);if(e===s?(L=K=k,S=19):e===f?(L=d,H-=257,K=u,P-=257,S=256):(L=c,K=h,S=-1),F=0,R=0,z=N,y=m,I=O,T=0,p=-1,D=1<<O,x=D-1,e===f&&D>r||e===l&&D>o)return 1;for(var Y=0;;){Y++,E=z-T,k[R]<S?(B=0,Z=k[R]):k[R]>S?(B=K[P+k[R]],Z=L[H+k[R]]):(B=96,Z=0),g=1<<z-T,v=1<<I,N=v;do v-=g,w[y+(F>>T)+v]=E<<24|B<<16|Z|0;while(0!==v);for(g=1<<z-1;F&g;)g>>=1;if(0!==g?(F&=g-1,F+=g):F=0,R++,0===--M[z]){if(z===C)break;z=t[i+k[R]]}if(z>O&&(F&x)!==p){for(0===T&&(T=O),y+=N,I=z-T,U=1<<I;I+T<C&&(U-=M[I+T],!(U<=0));)I++,U<<=1;if(D+=1<<I,e===f&&D>r||e===l&&D>o)return 1;p=F&x,w[p]=O<<24|I<<16|y-m|0}}return 0!==F&&(w[y+F]=z-T<<24|64<<16|0),_.bits=O,0}},{"../utils/common":1}],10:[function(e,t,i){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,i){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=n},{}],"/lib/inflate.js":[function(e,t,i){"use strict";function n(e){if(!(this instanceof n))return new n(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0===(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var i=o.inflateInit2(this.strm,t.windowBits);if(i!==l.Z_OK)throw new Error(d[i]);this.header=new c,o.inflateGetHeader(this.strm,this.header)}function a(e,t){var i=new n(t);if(i.push(e,!0),i.err)throw i.msg;return i.result}function r(e,t){return t=t||{},t.raw=!0,a(e,t)}var o=e("./zlib/inflate"),s=e("./utils/common"),f=e("./utils/strings"),l=e("./zlib/constants"),d=e("./zlib/messages"),u=e("./zlib/zstream"),c=e("./zlib/gzheader"),h=Object.prototype.toString;n.prototype.push=function(e,t){var i,n,a,r,d,u,c=this.strm,b=this.options.chunkSize,w=this.options.dictionary,m=!1;if(this.ended)return!1;n=t===~~t?t:t===!0?l.Z_FINISH:l.Z_NO_FLUSH,"string"==typeof e?c.input=f.binstring2buf(e):"[object ArrayBuffer]"===h.call(e)?c.input=new Uint8Array(e):c.input=e,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new s.Buf8(b),c.next_out=0,c.avail_out=b),i=o.inflate(c,l.Z_NO_FLUSH),i===l.Z_NEED_DICT&&w&&(u="string"==typeof w?f.string2buf(w):"[object ArrayBuffer]"===h.call(w)?new Uint8Array(w):w,i=o.inflateSetDictionary(this.strm,u)),i===l.Z_BUF_ERROR&&m===!0&&(i=l.Z_OK,m=!1),i!==l.Z_STREAM_END&&i!==l.Z_OK)return this.onEnd(i),this.ended=!0,!1;c.next_out&&(0!==c.avail_out&&i!==l.Z_STREAM_END&&(0!==c.avail_in||n!==l.Z_FINISH&&n!==l.Z_SYNC_FLUSH)||("string"===this.options.to?(a=f.utf8border(c.output,c.next_out),r=c.next_out-a,d=f.buf2string(c.output,a),c.next_out=r,c.avail_out=b-r,r&&s.arraySet(c.output,c.output,a,r,0),this.onData(d)):this.onData(s.shrinkBuf(c.output,c.next_out)))),0===c.avail_in&&0===c.avail_out&&(m=!0)}while((c.avail_in>0||0===c.avail_out)&&i!==l.Z_STREAM_END);return i===l.Z_STREAM_END&&(n=l.Z_FINISH),n===l.Z_FINISH?(i=o.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===l.Z_OK):n!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),c.avail_out=0,!0)},n.prototype.onData=function(e){this.chunks.push(e)},n.prototype.onEnd=function(e){e===l.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=n,i.inflate=a,i.inflateRaw=r,i.ungzip=a},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],21:[function(_dereq_,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

}).call(this,_dereq_('bfs-process'))

},{"bfs-process":11}],22:[function(_dereq_,module,exports){
module.exports = _dereq_("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":23}],23:[function(_dereq_,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

var Readable = _dereq_('./_stream_readable');
var Writable = _dereq_('./_stream_writable');

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
},{"./_stream_readable":25,"./_stream_writable":27,"core-util-is":16,"inherits":18,"process-nextick-args":21}],24:[function(_dereq_,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = _dereq_('./_stream_transform');

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":26,"core-util-is":16,"inherits":18}],25:[function(_dereq_,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = _dereq_('isarray');
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = _dereq_('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = _dereq_('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = _dereq_('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = _dereq_('buffer').Buffer;
/*<replacement>*/
var bufferShim = _dereq_('buffer-shims');
/*</replacement>*/

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = _dereq_('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = _dereq_('./internal/streams/BufferList');
var StringDecoder;

util.inherits(Readable, Stream);

function prependListener(emitter, event, fn) {
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

var Duplex;
function ReadableState(options, stream) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = _dereq_('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

var Duplex;
function Readable(options) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = _dereq_('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,_dereq_('bfs-process'))

},{"./_stream_duplex":23,"./internal/streams/BufferList":28,"bfs-process":11,"buffer":2,"buffer-shims":15,"core-util-is":16,"events":17,"inherits":18,"isarray":29,"process-nextick-args":21,"string_decoder/":35,"util":14}],26:[function(_dereq_,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = _dereq_('./_stream_duplex');

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":23,"core-util-is":16,"inherits":18}],27:[function(_dereq_,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = _dereq_('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = _dereq_('core-util-is');
util.inherits = _dereq_('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: _dereq_('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = _dereq_('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = _dereq_('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = _dereq_('buffer').Buffer;
/*<replacement>*/
var bufferShim = _dereq_('buffer-shims');
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

var Duplex;
function WritableState(options, stream) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

var Duplex;
function Writable(options) {
  Duplex = Duplex || _dereq_('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,_dereq_('bfs-process'))

},{"./_stream_duplex":23,"bfs-process":11,"buffer":2,"buffer-shims":15,"core-util-is":16,"events":17,"inherits":18,"process-nextick-args":21,"util-deprecate":36}],28:[function(_dereq_,module,exports){
'use strict';

var Buffer = _dereq_('buffer').Buffer;
/*<replacement>*/
var bufferShim = _dereq_('buffer-shims');
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};
},{"buffer":2,"buffer-shims":15}],29:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],30:[function(_dereq_,module,exports){
module.exports = _dereq_("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":24}],31:[function(_dereq_,module,exports){
(function (process){
var Stream = (function (){
  try {
    return _dereq_('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = _dereq_('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = _dereq_('./lib/_stream_writable.js');
exports.Duplex = _dereq_('./lib/_stream_duplex.js');
exports.Transform = _dereq_('./lib/_stream_transform.js');
exports.PassThrough = _dereq_('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream;
}

}).call(this,_dereq_('bfs-process'))

},{"./lib/_stream_duplex.js":23,"./lib/_stream_passthrough.js":24,"./lib/_stream_readable.js":25,"./lib/_stream_transform.js":26,"./lib/_stream_writable.js":27,"bfs-process":11}],32:[function(_dereq_,module,exports){
module.exports = _dereq_("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":26}],33:[function(_dereq_,module,exports){
module.exports = _dereq_("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":27}],34:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = _dereq_('events').EventEmitter;
var inherits = _dereq_('inherits');

inherits(Stream, EE);
Stream.Readable = _dereq_('readable-stream/readable.js');
Stream.Writable = _dereq_('readable-stream/writable.js');
Stream.Duplex = _dereq_('readable-stream/duplex.js');
Stream.Transform = _dereq_('readable-stream/transform.js');
Stream.PassThrough = _dereq_('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":17,"inherits":18,"readable-stream/duplex.js":22,"readable-stream/passthrough.js":30,"readable-stream/readable.js":31,"readable-stream/transform.js":32,"readable-stream/writable.js":33}],35:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = _dereq_('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":2}],36:[function(_dereq_,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],37:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var file_flag = _dereq_('../core/file_flag');
var preload_file = _dereq_('../generic/preload_file');
var path = _dereq_('path');
var MirrorFile = (function (_super) {
    __extends(MirrorFile, _super);
    function MirrorFile(fs, path, flag, stat, data) {
        _super.call(this, fs, path, flag, stat, data);
    }
    MirrorFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    MirrorFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return MirrorFile;
}(preload_file.PreloadFile));
var AsyncMirror = (function (_super) {
    __extends(AsyncMirror, _super);
    function AsyncMirror(sync, async) {
        _super.call(this);
        this._queue = [];
        this._queueRunning = false;
        this._isInitialized = false;
        this._initializeCallbacks = [];
        this._sync = sync;
        this._async = async;
        if (!sync.supportsSynch()) {
            throw new Error("Expected synchronous storage.");
        }
        if (async.supportsSynch()) {
            throw new Error("Expected asynchronous storage.");
        }
    }
    AsyncMirror.prototype.getName = function () {
        return "AsyncMirror";
    };
    AsyncMirror.isAvailable = function () {
        return true;
    };
    AsyncMirror.prototype._syncSync = function (fd) {
        this._sync.writeFileSync(fd.getPath(), fd.getBuffer(), null, file_flag.FileFlag.getFileFlag('w'), fd.getStats().mode);
        this.enqueueOp({
            apiMethod: 'writeFile',
            arguments: [fd.getPath(), fd.getBuffer(), null, fd.getFlag(), fd.getStats().mode]
        });
    };
    AsyncMirror.prototype.initialize = function (userCb) {
        var _this = this;
        var callbacks = this._initializeCallbacks;
        var end = function (e) {
            _this._isInitialized = !e;
            _this._initializeCallbacks = [];
            callbacks.forEach(function (cb) { return cb(e); });
        };
        if (!this._isInitialized) {
            if (callbacks.push(userCb) === 1) {
                var copyDirectory_1 = function (p, mode, cb) {
                    if (p !== '/') {
                        _this._sync.mkdirSync(p, mode);
                    }
                    _this._async.readdir(p, function (err, files) {
                        var i = 0;
                        function copyNextFile(err) {
                            if (err) {
                                cb(err);
                            }
                            else if (i < files.length) {
                                copyItem_1(path.join(p, files[i]), copyNextFile);
                                i++;
                            }
                            else {
                                cb();
                            }
                        }
                        if (err) {
                            cb(err);
                        }
                        else {
                            copyNextFile();
                        }
                    });
                }, copyFile_1 = function (p, mode, cb) {
                    _this._async.readFile(p, null, file_flag.FileFlag.getFileFlag('r'), function (err, data) {
                        if (err) {
                            cb(err);
                        }
                        else {
                            try {
                                _this._sync.writeFileSync(p, data, null, file_flag.FileFlag.getFileFlag('w'), mode);
                            }
                            catch (e) {
                                err = e;
                            }
                            finally {
                                cb(err);
                            }
                        }
                    });
                }, copyItem_1 = function (p, cb) {
                    _this._async.stat(p, false, function (err, stats) {
                        if (err) {
                            cb(err);
                        }
                        else if (stats.isDirectory()) {
                            copyDirectory_1(p, stats.mode, cb);
                        }
                        else {
                            copyFile_1(p, stats.mode, cb);
                        }
                    });
                };
                copyDirectory_1('/', 0, end);
            }
        }
        else {
            userCb();
        }
    };
    AsyncMirror.prototype.checkInitialized = function () {
        if (!this._isInitialized) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "AsyncMirrorFS is not initialized. Please initialize AsyncMirrorFS using its initialize() method before using it.");
        }
    };
    AsyncMirror.prototype.isReadOnly = function () { return false; };
    AsyncMirror.prototype.supportsSynch = function () { return true; };
    AsyncMirror.prototype.supportsLinks = function () { return false; };
    AsyncMirror.prototype.supportsProps = function () { return this._sync.supportsProps() && this._async.supportsProps(); };
    AsyncMirror.prototype.enqueueOp = function (op) {
        var _this = this;
        this._queue.push(op);
        if (!this._queueRunning) {
            this._queueRunning = true;
            var doNextOp = function (err) {
                if (err) {
                    console.error("WARNING: File system has desynchronized. Received following error: " + err + "\n$");
                }
                if (_this._queue.length > 0) {
                    var op = _this._queue.shift(), args = op.arguments;
                    args.push(doNextOp);
                    _this._async[op.apiMethod].apply(_this._async, args);
                }
                else {
                    _this._queueRunning = false;
                }
            };
            doNextOp();
        }
    };
    AsyncMirror.prototype.renameSync = function (oldPath, newPath) {
        this.checkInitialized();
        this._sync.renameSync(oldPath, newPath);
        this.enqueueOp({
            apiMethod: 'rename',
            arguments: [oldPath, newPath]
        });
    };
    AsyncMirror.prototype.statSync = function (p, isLstat) {
        this.checkInitialized();
        return this._sync.statSync(p, isLstat);
    };
    AsyncMirror.prototype.openSync = function (p, flag, mode) {
        this.checkInitialized();
        var fd = this._sync.openSync(p, flag, mode);
        fd.closeSync();
        return new MirrorFile(this, p, flag, this._sync.statSync(p, false), this._sync.readFileSync(p, null, file_flag.FileFlag.getFileFlag('r')));
    };
    AsyncMirror.prototype.unlinkSync = function (p) {
        this.checkInitialized();
        this._sync.unlinkSync(p);
        this.enqueueOp({
            apiMethod: 'unlink',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.rmdirSync = function (p) {
        this.checkInitialized();
        this._sync.rmdirSync(p);
        this.enqueueOp({
            apiMethod: 'rmdir',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.mkdirSync = function (p, mode) {
        this.checkInitialized();
        this._sync.mkdirSync(p, mode);
        this.enqueueOp({
            apiMethod: 'mkdir',
            arguments: [p, mode]
        });
    };
    AsyncMirror.prototype.readdirSync = function (p) {
        this.checkInitialized();
        return this._sync.readdirSync(p);
    };
    AsyncMirror.prototype.existsSync = function (p) {
        this.checkInitialized();
        return this._sync.existsSync(p);
    };
    AsyncMirror.prototype.chmodSync = function (p, isLchmod, mode) {
        this.checkInitialized();
        this._sync.chmodSync(p, isLchmod, mode);
        this.enqueueOp({
            apiMethod: 'chmod',
            arguments: [p, isLchmod, mode]
        });
    };
    AsyncMirror.prototype.chownSync = function (p, isLchown, uid, gid) {
        this.checkInitialized();
        this._sync.chownSync(p, isLchown, uid, gid);
        this.enqueueOp({
            apiMethod: 'chown',
            arguments: [p, isLchown, uid, gid]
        });
    };
    AsyncMirror.prototype.utimesSync = function (p, atime, mtime) {
        this.checkInitialized();
        this._sync.utimesSync(p, atime, mtime);
        this.enqueueOp({
            apiMethod: 'utimes',
            arguments: [p, atime, mtime]
        });
    };
    return AsyncMirror;
}(file_system.SynchronousFileSystem));
exports.__esModule = true;
exports["default"] = AsyncMirror;

},{"../core/api_error":51,"../core/file_flag":55,"../core/file_system":56,"../generic/preload_file":67,"path":10}],38:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preload_file = _dereq_('../generic/preload_file');
var file_system = _dereq_('../core/file_system');
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var api_error_1 = _dereq_('../core/api_error');
var async = _dereq_('async');
var path = _dereq_('path');
var util_1 = _dereq_('../core/util');
var errorCodeLookup = null;
function constructErrorCodeLookup() {
    if (errorCodeLookup !== null) {
        return;
    }
    errorCodeLookup = {};
    errorCodeLookup[Dropbox.ApiError.NETWORK_ERROR] = api_error_1.ErrorCode.EIO;
    errorCodeLookup[Dropbox.ApiError.INVALID_PARAM] = api_error_1.ErrorCode.EINVAL;
    errorCodeLookup[Dropbox.ApiError.INVALID_TOKEN] = api_error_1.ErrorCode.EPERM;
    errorCodeLookup[Dropbox.ApiError.OAUTH_ERROR] = api_error_1.ErrorCode.EPERM;
    errorCodeLookup[Dropbox.ApiError.NOT_FOUND] = api_error_1.ErrorCode.ENOENT;
    errorCodeLookup[Dropbox.ApiError.INVALID_METHOD] = api_error_1.ErrorCode.EINVAL;
    errorCodeLookup[Dropbox.ApiError.NOT_ACCEPTABLE] = api_error_1.ErrorCode.EINVAL;
    errorCodeLookup[Dropbox.ApiError.CONFLICT] = api_error_1.ErrorCode.EINVAL;
    errorCodeLookup[Dropbox.ApiError.RATE_LIMITED] = api_error_1.ErrorCode.EBUSY;
    errorCodeLookup[Dropbox.ApiError.SERVER_ERROR] = api_error_1.ErrorCode.EBUSY;
    errorCodeLookup[Dropbox.ApiError.OVER_QUOTA] = api_error_1.ErrorCode.ENOSPC;
}
function isFileInfo(cache) {
    return cache && cache.stat.isFile;
}
function isDirInfo(cache) {
    return cache && cache.stat.isFolder;
}
function isArrayBuffer(ab) {
    return ab === null || ab === undefined || (typeof (ab) === 'object' && typeof (ab['byteLength']) === 'number');
}
var CachedDropboxClient = (function () {
    function CachedDropboxClient(client) {
        this._cache = {};
        this._client = client;
    }
    CachedDropboxClient.prototype.getCachedInfo = function (p) {
        return this._cache[p.toLowerCase()];
    };
    CachedDropboxClient.prototype.putCachedInfo = function (p, cache) {
        this._cache[p.toLowerCase()] = cache;
    };
    CachedDropboxClient.prototype.deleteCachedInfo = function (p) {
        delete this._cache[p.toLowerCase()];
    };
    CachedDropboxClient.prototype.getCachedDirInfo = function (p) {
        var info = this.getCachedInfo(p);
        if (isDirInfo(info)) {
            return info;
        }
        else {
            return null;
        }
    };
    CachedDropboxClient.prototype.getCachedFileInfo = function (p) {
        var info = this.getCachedInfo(p);
        if (isFileInfo(info)) {
            return info;
        }
        else {
            return null;
        }
    };
    CachedDropboxClient.prototype.updateCachedDirInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        var cachedInfo = this.getCachedInfo(p);
        if (stat.contentHash !== null && (cachedInfo === undefined || cachedInfo.stat.contentHash !== stat.contentHash)) {
            this.putCachedInfo(p, {
                stat: stat,
                contents: contents
            });
        }
    };
    CachedDropboxClient.prototype.updateCachedFileInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        var cachedInfo = this.getCachedInfo(p);
        if (stat.versionTag !== null && (cachedInfo === undefined || cachedInfo.stat.versionTag !== stat.versionTag)) {
            this.putCachedInfo(p, {
                stat: stat,
                contents: contents
            });
        }
    };
    CachedDropboxClient.prototype.updateCachedInfo = function (p, stat, contents) {
        if (contents === void 0) { contents = null; }
        if (stat.isFile && isArrayBuffer(contents)) {
            this.updateCachedFileInfo(p, stat, contents);
        }
        else if (stat.isFolder && Array.isArray(contents)) {
            this.updateCachedDirInfo(p, stat, contents);
        }
    };
    CachedDropboxClient.prototype.readdir = function (p, cb) {
        var _this = this;
        var cacheInfo = this.getCachedDirInfo(p);
        this._wrap(function (interceptCb) {
            if (cacheInfo !== null && cacheInfo.contents) {
                _this._client.readdir(p, {
                    contentHash: cacheInfo.stat.contentHash
                }, interceptCb);
            }
            else {
                _this._client.readdir(p, interceptCb);
            }
        }, function (err, filenames, stat, folderEntries) {
            if (err) {
                if (err.status === Dropbox.ApiError.NO_CONTENT && cacheInfo !== null) {
                    cb(null, cacheInfo.contents.slice(0));
                }
                else {
                    cb(err);
                }
            }
            else {
                _this.updateCachedDirInfo(p, stat, filenames.slice(0));
                folderEntries.forEach(function (entry) {
                    _this.updateCachedInfo(path.join(p, entry.name), entry);
                });
                cb(null, filenames);
            }
        });
    };
    CachedDropboxClient.prototype.remove = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.remove(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat);
            }
            cb(err);
        });
    };
    CachedDropboxClient.prototype.move = function (src, dest, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.move(src, dest, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.deleteCachedInfo(src);
                _this.updateCachedInfo(dest, stat);
            }
            cb(err);
        });
    };
    CachedDropboxClient.prototype.stat = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.stat(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat);
            }
            cb(err, stat);
        });
    };
    CachedDropboxClient.prototype.readFile = function (p, cb) {
        var _this = this;
        var cacheInfo = this.getCachedFileInfo(p);
        if (cacheInfo !== null && cacheInfo.contents !== null) {
            this.stat(p, function (error, stat) {
                if (error) {
                    cb(error);
                }
                else if (stat.contentHash === cacheInfo.stat.contentHash) {
                    cb(error, cacheInfo.contents.slice(0), cacheInfo.stat);
                }
                else {
                    _this.readFile(p, cb);
                }
            });
        }
        else {
            this._wrap(function (interceptCb) {
                _this._client.readFile(p, { arrayBuffer: true }, interceptCb);
            }, function (err, contents, stat) {
                if (!err) {
                    _this.updateCachedInfo(p, stat, contents.slice(0));
                }
                cb(err, contents, stat);
            });
        }
    };
    CachedDropboxClient.prototype.writeFile = function (p, contents, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.writeFile(p, contents, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat, contents.slice(0));
            }
            cb(err, stat);
        });
    };
    CachedDropboxClient.prototype.mkdir = function (p, cb) {
        var _this = this;
        this._wrap(function (interceptCb) {
            _this._client.mkdir(p, interceptCb);
        }, function (err, stat) {
            if (!err) {
                _this.updateCachedInfo(p, stat, []);
            }
            cb(err);
        });
    };
    CachedDropboxClient.prototype._wrap = function (performOp, cb) {
        var numRun = 0, interceptCb = function (error) {
            var timeoutDuration = 2;
            if (error && 3 > (++numRun)) {
                switch (error.status) {
                    case Dropbox.ApiError.SERVER_ERROR:
                    case Dropbox.ApiError.NETWORK_ERROR:
                    case Dropbox.ApiError.RATE_LIMITED:
                        setTimeout(function () {
                            performOp(interceptCb);
                        }, timeoutDuration * 1000);
                        break;
                    default:
                        cb.apply(null, arguments);
                        break;
                }
            }
            else {
                cb.apply(null, arguments);
            }
        };
        performOp(interceptCb);
    };
    return CachedDropboxClient;
}());
var DropboxFile = (function (_super) {
    __extends(DropboxFile, _super);
    function DropboxFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
    }
    DropboxFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            var buffer = this.getBuffer(), arrayBuffer = util_1.buffer2ArrayBuffer(buffer);
            this._fs._writeFileStrict(this.getPath(), arrayBuffer, function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    DropboxFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return DropboxFile;
}(preload_file.PreloadFile));
exports.DropboxFile = DropboxFile;
var DropboxFileSystem = (function (_super) {
    __extends(DropboxFileSystem, _super);
    function DropboxFileSystem(client) {
        _super.call(this);
        this._client = new CachedDropboxClient(client);
        constructErrorCodeLookup();
    }
    DropboxFileSystem.prototype.getName = function () {
        return 'Dropbox';
    };
    DropboxFileSystem.isAvailable = function () {
        return typeof Dropbox !== 'undefined';
    };
    DropboxFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsSymlinks = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsProps = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsSynch = function () {
        return false;
    };
    DropboxFileSystem.prototype.empty = function (mainCb) {
        var _this = this;
        this._client.readdir('/', function (error, files) {
            if (error) {
                mainCb(_this.convert(error, '/'));
            }
            else {
                var deleteFile = function (file, cb) {
                    var p = path.join('/', file);
                    _this._client.remove(p, function (err) {
                        cb(err ? _this.convert(err, p) : null);
                    });
                };
                var finished = function (err) {
                    if (err) {
                        mainCb(err);
                    }
                    else {
                        mainCb();
                    }
                };
                async.each(files, deleteFile, finished);
            }
        });
    };
    DropboxFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        this._client.move(oldPath, newPath, function (error) {
            if (error) {
                _this._client.stat(newPath, function (error2, stat) {
                    if (error2 || stat.isFolder) {
                        var missingPath = error.response.error.indexOf(oldPath) > -1 ? oldPath : newPath;
                        cb(_this.convert(error, missingPath));
                    }
                    else {
                        _this._client.remove(newPath, function (error2) {
                            if (error2) {
                                cb(_this.convert(error2, newPath));
                            }
                            else {
                                _this.rename(oldPath, newPath, cb);
                            }
                        });
                    }
                });
            }
            else {
                cb();
            }
        });
    };
    DropboxFileSystem.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        this._client.stat(path, function (error, stat) {
            if (error) {
                cb(_this.convert(error, path));
            }
            else if ((stat != null) && stat.isRemoved) {
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, path));
            }
            else {
                var stats = new node_fs_stats_1["default"](_this._statType(stat), stat.size);
                return cb(null, stats);
            }
        });
    };
    DropboxFileSystem.prototype.open = function (path, flags, mode, cb) {
        var _this = this;
        this._client.readFile(path, function (error, content, dbStat) {
            if (error) {
                if (flags.isReadable()) {
                    cb(_this.convert(error, path));
                }
                else {
                    switch (error.status) {
                        case Dropbox.ApiError.NOT_FOUND:
                            var ab = new ArrayBuffer(0);
                            return _this._writeFileStrict(path, ab, function (error2, stat) {
                                if (error2) {
                                    cb(error2);
                                }
                                else {
                                    var file = _this._makeFile(path, flags, stat, util_1.arrayBuffer2Buffer(ab));
                                    cb(null, file);
                                }
                            });
                        default:
                            return cb(_this.convert(error, path));
                    }
                }
            }
            else {
                var buffer;
                if (content === null) {
                    buffer = new Buffer(0);
                }
                else {
                    buffer = util_1.arrayBuffer2Buffer(content);
                }
                var file = _this._makeFile(path, flags, dbStat, buffer);
                return cb(null, file);
            }
        });
    };
    DropboxFileSystem.prototype._writeFileStrict = function (p, data, cb) {
        var _this = this;
        var parent = path.dirname(p);
        this.stat(parent, false, function (error, stat) {
            if (error) {
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, parent));
            }
            else {
                _this._client.writeFile(p, data, function (error2, stat) {
                    if (error2) {
                        cb(_this.convert(error2, p));
                    }
                    else {
                        cb(null, stat);
                    }
                });
            }
        });
    };
    DropboxFileSystem.prototype._statType = function (stat) {
        return stat.isFile ? node_fs_stats_1.FileType.FILE : node_fs_stats_1.FileType.DIRECTORY;
    };
    DropboxFileSystem.prototype._makeFile = function (path, flag, stat, buffer) {
        var type = this._statType(stat);
        var stats = new node_fs_stats_1["default"](type, stat.size);
        return new DropboxFile(this, path, flag, stats, buffer);
    };
    DropboxFileSystem.prototype._remove = function (path, cb, isFile) {
        var _this = this;
        this._client.stat(path, function (error, stat) {
            if (error) {
                cb(_this.convert(error, path));
            }
            else {
                if (stat.isFile && !isFile) {
                    cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOTDIR, path));
                }
                else if (!stat.isFile && isFile) {
                    cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EISDIR, path));
                }
                else {
                    _this._client.remove(path, function (error) {
                        if (error) {
                            cb(_this.convert(error, path));
                        }
                        else {
                            cb(null);
                        }
                    });
                }
            }
        });
    };
    DropboxFileSystem.prototype.unlink = function (path, cb) {
        this._remove(path, cb, true);
    };
    DropboxFileSystem.prototype.rmdir = function (path, cb) {
        this._remove(path, cb, false);
    };
    DropboxFileSystem.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        var parent = path.dirname(p);
        this._client.stat(parent, function (error, stat) {
            if (error) {
                cb(_this.convert(error, parent));
            }
            else {
                _this._client.mkdir(p, function (error) {
                    if (error) {
                        cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EEXIST, p));
                    }
                    else {
                        cb(null);
                    }
                });
            }
        });
    };
    DropboxFileSystem.prototype.readdir = function (path, cb) {
        var _this = this;
        this._client.readdir(path, function (error, files) {
            if (error) {
                return cb(_this.convert(error));
            }
            else {
                return cb(null, files);
            }
        });
    };
    DropboxFileSystem.prototype.convert = function (err, path) {
        if (path === void 0) { path = null; }
        var errorCode = errorCodeLookup[err.status];
        if (errorCode === undefined) {
            errorCode = api_error_1.ErrorCode.EIO;
        }
        if (path == null) {
            return new api_error_1.ApiError(errorCode);
        }
        else {
            return api_error_1.ApiError.FileError(errorCode, path);
        }
    };
    return DropboxFileSystem;
}(file_system.BaseFileSystem));
exports.__esModule = true;
exports["default"] = DropboxFileSystem;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/file_system":56,"../core/node_fs_stats":59,"../core/util":60,"../generic/preload_file":67,"async":1,"bfs-buffer":2,"path":10}],39:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system_1 = _dereq_('../core/file_system');
var path = _dereq_('path');
var api_error_1 = _dereq_('../core/api_error');
var FolderAdapter = (function (_super) {
    __extends(FolderAdapter, _super);
    function FolderAdapter(folder, wrapped) {
        _super.call(this);
        this._folder = folder;
        this._wrapped = wrapped;
    }
    FolderAdapter.prototype.initialize = function (cb) {
        var _this = this;
        this._wrapped.exists(this._folder, function (exists) {
            if (exists) {
                cb();
            }
            else if (_this._wrapped.isReadOnly()) {
                cb(api_error_1.ApiError.ENOENT(_this._folder));
            }
            else {
                _this._wrapped.mkdir(_this._folder, 0x1ff, cb);
            }
        });
    };
    FolderAdapter.prototype.getName = function () { return this._wrapped.getName(); };
    FolderAdapter.prototype.isReadOnly = function () { return this._wrapped.isReadOnly(); };
    FolderAdapter.prototype.supportsProps = function () { return this._wrapped.supportsProps(); };
    FolderAdapter.prototype.supportsSynch = function () { return this._wrapped.supportsSynch(); };
    FolderAdapter.prototype.supportsLinks = function () { return false; };
    FolderAdapter.isAvailable = function () {
        return true;
    };
    return FolderAdapter;
}(file_system_1.BaseFileSystem));
exports.__esModule = true;
exports["default"] = FolderAdapter;
function translateError(folder, e) {
    if (e !== null && typeof e === 'object') {
        var err = e;
        var p = err.path;
        if (p) {
            p = '/' + path.relative(folder, p);
            err.message = err.message.replace(err.path, p);
            err.path = p;
        }
    }
    return e;
}
function wrapCallback(folder, cb) {
    if (typeof cb === 'function') {
        return function (err) {
            if (arguments.length > 0) {
                arguments[0] = translateError(folder, err);
            }
            cb.apply(null, arguments);
        };
    }
    else {
        return cb;
    }
}
function wrapFunction(name, wrapFirst, wrapSecond) {
    if (name.slice(name.length - 4) !== 'Sync') {
        return function () {
            if (arguments.length > 0) {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                arguments[arguments.length - 1] = wrapCallback(this._folder, arguments[arguments.length - 1]);
            }
            return this._wrapped[name].apply(this._wrapped, arguments);
        };
    }
    else {
        return function () {
            try {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                return this._wrapped[name].apply(this._wrapped, arguments);
            }
            catch (e) {
                throw translateError(this._folder, e);
            }
        };
    }
}
['diskSpace', 'stat', 'statSync', 'open', 'openSync', 'unlink', 'unlinkSync',
    'rmdir', 'rmdirSync', 'mkdir', 'mkdirSync', 'readdir', 'readdirSync', 'exists',
    'existsSync', 'realpath', 'realpathSync', 'truncate', 'truncateSync', 'readFile',
    'readFileSync', 'writeFile', 'writeFileSync', 'appendFile', 'appendFileSync',
    'chmod', 'chmodSync', 'chown', 'chownSync', 'utimes', 'utimeSync', 'readlink',
    'readlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, false);
});
['rename', 'renameSync', 'link', 'linkSync', 'symlink', 'symlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, true);
});

},{"../core/api_error":51,"../core/file_system":56,"path":10}],40:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preload_file = _dereq_('../generic/preload_file');
var file_system = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var file_flag_1 = _dereq_('../core/file_flag');
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var path = _dereq_('path');
var global = _dereq_('../core/global');
var async = _dereq_('async');
var util_1 = _dereq_('../core/util');
function isDirectoryEntry(entry) {
    return entry.isDirectory;
}
var _getFS = global.webkitRequestFileSystem || global.requestFileSystem || null;
function _requestQuota(type, size, success, errorCallback) {
    if (typeof navigator['webkitPersistentStorage'] !== 'undefined') {
        switch (type) {
            case global.PERSISTENT:
                navigator.webkitPersistentStorage.requestQuota(size, success, errorCallback);
                break;
            case global.TEMPORARY:
                navigator.webkitTemporaryStorage.requestQuota(size, success, errorCallback);
                break;
            default:
                errorCallback(new TypeError("Invalid storage type: " + type));
                break;
        }
    }
    else {
        global.webkitStorageInfo.requestQuota(type, size, success, errorCallback);
    }
}
function _toArray(list) {
    return Array.prototype.slice.call(list || [], 0);
}
var HTML5FSFile = (function (_super) {
    __extends(HTML5FSFile, _super);
    function HTML5FSFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
    }
    HTML5FSFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            var opts = {
                create: false
            };
            var _fs = this._fs;
            var success = function (entry) {
                entry.createWriter(function (writer) {
                    var buffer = _this.getBuffer();
                    var blob = new Blob([util_1.buffer2ArrayBuffer(buffer)]);
                    var length = blob.size;
                    writer.onwriteend = function () {
                        writer.onwriteend = null;
                        writer.truncate(length);
                        _this.resetDirty();
                        cb();
                    };
                    writer.onerror = function (err) {
                        cb(_fs.convert(err, _this.getPath(), false));
                    };
                    writer.write(blob);
                });
            };
            var error = function (err) {
                cb(_fs.convert(err, _this.getPath(), false));
            };
            _fs.fs.root.getFile(this.getPath(), opts, success, error);
        }
        else {
            cb();
        }
    };
    HTML5FSFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return HTML5FSFile;
}(preload_file.PreloadFile));
exports.HTML5FSFile = HTML5FSFile;
var HTML5FS = (function (_super) {
    __extends(HTML5FS, _super);
    function HTML5FS(size, type) {
        if (size === void 0) { size = 5; }
        if (type === void 0) { type = global.PERSISTENT; }
        _super.call(this);
        this.size = 1024 * 1024 * size;
        this.type = type;
    }
    HTML5FS.prototype.getName = function () {
        return 'HTML5 FileSystem';
    };
    HTML5FS.isAvailable = function () {
        return _getFS != null;
    };
    HTML5FS.prototype.isReadOnly = function () {
        return false;
    };
    HTML5FS.prototype.supportsSymlinks = function () {
        return false;
    };
    HTML5FS.prototype.supportsProps = function () {
        return false;
    };
    HTML5FS.prototype.supportsSynch = function () {
        return false;
    };
    HTML5FS.prototype.convert = function (err, p, expectedDir) {
        switch (err.name) {
            case "PathExistsError":
                return api_error_1.ApiError.EEXIST(p);
            case 'QuotaExceededError':
                return api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOSPC, p);
            case 'NotFoundError':
                return api_error_1.ApiError.ENOENT(p);
            case 'SecurityError':
                return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EACCES, p);
            case 'InvalidModificationError':
                return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EPERM, p);
            case 'TypeMismatchError':
                return api_error_1.ApiError.FileError(expectedDir ? api_error_1.ErrorCode.ENOTDIR : api_error_1.ErrorCode.EISDIR, p);
            case "EncodingError":
            case "InvalidStateError":
            case "NoModificationAllowedError":
            default:
                return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, p);
        }
    };
    HTML5FS.prototype.allocate = function (cb) {
        var _this = this;
        if (cb === void 0) { cb = function () { }; }
        var success = function (fs) {
            _this.fs = fs;
            cb();
        };
        var error = function (err) {
            cb(_this.convert(err, "/", true));
        };
        if (this.type === global.PERSISTENT) {
            _requestQuota(this.type, this.size, function (granted) {
                _getFS(_this.type, granted, success, error);
            }, error);
        }
        else {
            _getFS(this.type, this.size, success, error);
        }
    };
    HTML5FS.prototype.empty = function (mainCb) {
        var _this = this;
        this._readdir('/', function (err, entries) {
            if (err) {
                console.error('Failed to empty FS');
                mainCb(err);
            }
            else {
                var finished = function (er) {
                    if (err) {
                        console.error("Failed to empty FS");
                        mainCb(err);
                    }
                    else {
                        mainCb();
                    }
                };
                var deleteEntry = function (entry, cb) {
                    var succ = function () {
                        cb();
                    };
                    var error = function (err) {
                        cb(_this.convert(err, entry.fullPath, !entry.isDirectory));
                    };
                    if (isDirectoryEntry(entry)) {
                        entry.removeRecursively(succ, error);
                    }
                    else {
                        entry.remove(succ, error);
                    }
                };
                async.each(entries, deleteEntry, finished);
            }
        });
    };
    HTML5FS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        var semaphore = 2, successCount = 0, root = this.fs.root, currentPath = oldPath, error = function (err) {
            if (--semaphore <= 0) {
                cb(_this.convert(err, currentPath, false));
            }
        }, success = function (file) {
            if (++successCount === 2) {
                return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Something was identified as both a file and a directory. This should never happen."));
            }
            if (oldPath === newPath) {
                return cb();
            }
            currentPath = path.dirname(newPath);
            root.getDirectory(currentPath, {}, function (parentDir) {
                currentPath = path.basename(newPath);
                file.moveTo(parentDir, currentPath, function (entry) { cb(); }, function (err) {
                    if (file.isDirectory) {
                        currentPath = newPath;
                        _this.unlink(newPath, function (e) {
                            if (e) {
                                error(err);
                            }
                            else {
                                _this.rename(oldPath, newPath, cb);
                            }
                        });
                    }
                    else {
                        error(err);
                    }
                });
            }, error);
        };
        root.getFile(oldPath, {}, success, error);
        root.getDirectory(oldPath, {}, success, error);
    };
    HTML5FS.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        var opts = {
            create: false
        };
        var loadAsFile = function (entry) {
            var fileFromEntry = function (file) {
                var stat = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, file.size);
                cb(null, stat);
            };
            entry.file(fileFromEntry, failedToLoad);
        };
        var loadAsDir = function (dir) {
            var size = 4096;
            var stat = new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, size);
            cb(null, stat);
        };
        var failedToLoad = function (err) {
            cb(_this.convert(err, path, false));
        };
        var failedToLoadAsFile = function () {
            _this.fs.root.getDirectory(path, opts, loadAsDir, failedToLoad);
        };
        this.fs.root.getFile(path, opts, loadAsFile, failedToLoadAsFile);
    };
    HTML5FS.prototype.open = function (p, flags, mode, cb) {
        var _this = this;
        var error = function (err) {
            if (err.name === 'InvalidModificationError' && flags.isExclusive()) {
                cb(api_error_1.ApiError.EEXIST(p));
            }
            else {
                cb(_this.convert(err, p, false));
            }
        };
        this.fs.root.getFile(p, {
            create: flags.pathNotExistsAction() === file_flag_1.ActionType.CREATE_FILE,
            exclusive: flags.isExclusive()
        }, function (entry) {
            entry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    var bfs_file = _this._makeFile(p, flags, file, reader.result);
                    cb(null, bfs_file);
                };
                reader.onerror = function (ev) {
                    error(reader.error);
                };
                reader.readAsArrayBuffer(file);
            }, error);
        }, error);
    };
    HTML5FS.prototype._statType = function (stat) {
        return stat.isFile ? node_fs_stats_1.FileType.FILE : node_fs_stats_1.FileType.DIRECTORY;
    };
    HTML5FS.prototype._makeFile = function (path, flag, stat, data) {
        if (data === void 0) { data = new ArrayBuffer(0); }
        var stats = new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, stat.size);
        var buffer = util_1.arrayBuffer2Buffer(data);
        return new HTML5FSFile(this, path, flag, stats, buffer);
    };
    HTML5FS.prototype._remove = function (path, cb, isFile) {
        var _this = this;
        var success = function (entry) {
            var succ = function () {
                cb();
            };
            var err = function (err) {
                cb(_this.convert(err, path, !isFile));
            };
            entry.remove(succ, err);
        };
        var error = function (err) {
            cb(_this.convert(err, path, !isFile));
        };
        var opts = {
            create: false
        };
        if (isFile) {
            this.fs.root.getFile(path, opts, success, error);
        }
        else {
            this.fs.root.getDirectory(path, opts, success, error);
        }
    };
    HTML5FS.prototype.unlink = function (path, cb) {
        this._remove(path, cb, true);
    };
    HTML5FS.prototype.rmdir = function (path, cb) {
        var _this = this;
        this.readdir(path, function (e, files) {
            if (e) {
                cb(e);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(path));
            }
            else {
                _this._remove(path, cb, false);
            }
        });
    };
    HTML5FS.prototype.mkdir = function (path, mode, cb) {
        var _this = this;
        var opts = {
            create: true,
            exclusive: true
        };
        var success = function (dir) {
            cb();
        };
        var error = function (err) {
            cb(_this.convert(err, path, true));
        };
        this.fs.root.getDirectory(path, opts, success, error);
    };
    HTML5FS.prototype._readdir = function (path, cb) {
        var _this = this;
        var error = function (err) {
            cb(_this.convert(err, path, true));
        };
        this.fs.root.getDirectory(path, { create: false }, function (dirEntry) {
            var reader = dirEntry.createReader();
            var entries = [];
            var readEntries = function () {
                reader.readEntries((function (results) {
                    if (results.length) {
                        entries = entries.concat(_toArray(results));
                        readEntries();
                    }
                    else {
                        cb(null, entries);
                    }
                }), error);
            };
            readEntries();
        }, error);
    };
    HTML5FS.prototype.readdir = function (path, cb) {
        this._readdir(path, function (e, entries) {
            if (e) {
                return cb(e);
            }
            var rv = [];
            for (var i = 0; i < entries.length; i++) {
                rv.push(entries[i].name);
            }
            cb(null, rv);
        });
    };
    return HTML5FS;
}(file_system.BaseFileSystem));
exports.__esModule = true;
exports["default"] = HTML5FS;

},{"../core/api_error":51,"../core/file_flag":55,"../core/file_system":56,"../core/global":57,"../core/node_fs_stats":59,"../core/util":60,"../generic/preload_file":67,"async":1,"path":10}],41:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var kvfs = _dereq_('../generic/key_value_filesystem');
var InMemoryStore = (function () {
    function InMemoryStore() {
        this.store = {};
    }
    InMemoryStore.prototype.name = function () { return 'In-memory'; };
    InMemoryStore.prototype.clear = function () { this.store = {}; };
    InMemoryStore.prototype.beginTransaction = function (type) {
        return new kvfs.SimpleSyncRWTransaction(this);
    };
    InMemoryStore.prototype.get = function (key) {
        return this.store[key];
    };
    InMemoryStore.prototype.put = function (key, data, overwrite) {
        if (!overwrite && this.store.hasOwnProperty(key)) {
            return false;
        }
        this.store[key] = data;
        return true;
    };
    InMemoryStore.prototype.del = function (key) {
        delete this.store[key];
    };
    return InMemoryStore;
}());
exports.InMemoryStore = InMemoryStore;
var InMemoryFileSystem = (function (_super) {
    __extends(InMemoryFileSystem, _super);
    function InMemoryFileSystem() {
        _super.call(this, { store: new InMemoryStore() });
    }
    return InMemoryFileSystem;
}(kvfs.SyncKeyValueFileSystem));
exports.__esModule = true;
exports["default"] = InMemoryFileSystem;

},{"../generic/key_value_filesystem":64}],42:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var kvfs = _dereq_('../generic/key_value_filesystem');
var api_error_1 = _dereq_('../core/api_error');
var global = _dereq_('../core/global');
var util_1 = _dereq_('../core/util');
var indexedDB = global.indexedDB ||
    global.mozIndexedDB ||
    global.webkitIndexedDB ||
    global.msIndexedDB;
function convertError(e, message) {
    if (message === void 0) { message = e.toString(); }
    switch (e.name) {
        case "NotFoundError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOENT, message);
        case "QuotaExceededError":
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, message);
        default:
            return new api_error_1.ApiError(api_error_1.ErrorCode.EIO, message);
    }
}
function onErrorHandler(cb, code, message) {
    if (code === void 0) { code = api_error_1.ErrorCode.EIO; }
    if (message === void 0) { message = null; }
    return function (e) {
        e.preventDefault();
        cb(new api_error_1.ApiError(code, message));
    };
}
var IndexedDBROTransaction = (function () {
    function IndexedDBROTransaction(tx, store) {
        this.tx = tx;
        this.store = store;
    }
    IndexedDBROTransaction.prototype.get = function (key, cb) {
        try {
            var r = this.store.get(key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                var result = event.target.result;
                if (result === undefined) {
                    cb(null, result);
                }
                else {
                    cb(null, util_1.arrayBuffer2Buffer(result));
                }
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    return IndexedDBROTransaction;
}());
exports.IndexedDBROTransaction = IndexedDBROTransaction;
var IndexedDBRWTransaction = (function (_super) {
    __extends(IndexedDBRWTransaction, _super);
    function IndexedDBRWTransaction(tx, store) {
        _super.call(this, tx, store);
    }
    IndexedDBRWTransaction.prototype.put = function (key, data, overwrite, cb) {
        try {
            var arraybuffer = util_1.buffer2ArrayBuffer(data), r;
            if (overwrite) {
                r = this.store.put(arraybuffer, key);
            }
            else {
                r = this.store.add(arraybuffer, key);
            }
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb(null, true);
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.del = function (key, cb) {
        try {
            var r = this.store['delete'](key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb();
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.commit = function (cb) {
        setTimeout(cb, 0);
    };
    IndexedDBRWTransaction.prototype.abort = function (cb) {
        var _e;
        try {
            this.tx.abort();
        }
        catch (e) {
            _e = convertError(e);
        }
        finally {
            cb(_e);
        }
    };
    return IndexedDBRWTransaction;
}(IndexedDBROTransaction));
exports.IndexedDBRWTransaction = IndexedDBRWTransaction;
var IndexedDBStore = (function () {
    function IndexedDBStore(cb, storeName) {
        var _this = this;
        if (storeName === void 0) { storeName = 'browserfs'; }
        this.storeName = storeName;
        var openReq = indexedDB.open(this.storeName, 1);
        openReq.onupgradeneeded = function (event) {
            var db = event.target.result;
            if (db.objectStoreNames.contains(_this.storeName)) {
                db.deleteObjectStore(_this.storeName);
            }
            db.createObjectStore(_this.storeName);
        };
        openReq.onsuccess = function (event) {
            _this.db = event.target.result;
            cb(null, _this);
        };
        openReq.onerror = onErrorHandler(cb, api_error_1.ErrorCode.EACCES);
    }
    IndexedDBStore.prototype.name = function () {
        return "IndexedDB - " + this.storeName;
    };
    IndexedDBStore.prototype.clear = function (cb) {
        try {
            var tx = this.db.transaction(this.storeName, 'readwrite'), objectStore = tx.objectStore(this.storeName), r = objectStore.clear();
            r.onsuccess = function (event) {
                setTimeout(cb, 0);
            };
            r.onerror = onErrorHandler(cb);
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBStore.prototype.beginTransaction = function (type) {
        if (type === void 0) { type = 'readonly'; }
        var tx = this.db.transaction(this.storeName, type), objectStore = tx.objectStore(this.storeName);
        if (type === 'readwrite') {
            return new IndexedDBRWTransaction(tx, objectStore);
        }
        else if (type === 'readonly') {
            return new IndexedDBROTransaction(tx, objectStore);
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid transaction type.');
        }
    };
    return IndexedDBStore;
}());
exports.IndexedDBStore = IndexedDBStore;
var IndexedDBFileSystem = (function (_super) {
    __extends(IndexedDBFileSystem, _super);
    function IndexedDBFileSystem(cb, storeName) {
        var _this = this;
        _super.call(this);
        new IndexedDBStore(function (e, store) {
            if (e) {
                cb(e);
            }
            else {
                _this.init(store, function (e) {
                    cb(e, _this);
                });
            }
        }, storeName);
    }
    IndexedDBFileSystem.isAvailable = function () {
        try {
            return typeof indexedDB !== 'undefined' && null !== indexedDB.open("__browserfs_test__");
        }
        catch (e) {
            return false;
        }
    };
    return IndexedDBFileSystem;
}(kvfs.AsyncKeyValueFileSystem));
exports.__esModule = true;
exports["default"] = IndexedDBFileSystem;

},{"../core/api_error":51,"../core/global":57,"../core/util":60,"../generic/key_value_filesystem":64}],43:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var kvfs = _dereq_('../generic/key_value_filesystem');
var api_error_1 = _dereq_('../core/api_error');
var global = _dereq_('../core/global');
var supportsBinaryString = false, binaryEncoding;
try {
    global.localStorage.setItem("__test__", String.fromCharCode(0xD800));
    supportsBinaryString = global.localStorage.getItem("__test__") === String.fromCharCode(0xD800);
}
catch (e) {
    supportsBinaryString = false;
}
binaryEncoding = supportsBinaryString ? 'binary_string' : 'binary_string_ie';
if (!Buffer.isEncoding(binaryEncoding)) {
    binaryEncoding = "base64";
}
var LocalStorageStore = (function () {
    function LocalStorageStore() {
    }
    LocalStorageStore.prototype.name = function () {
        return 'LocalStorage';
    };
    LocalStorageStore.prototype.clear = function () {
        global.localStorage.clear();
    };
    LocalStorageStore.prototype.beginTransaction = function (type) {
        return new kvfs.SimpleSyncRWTransaction(this);
    };
    LocalStorageStore.prototype.get = function (key) {
        try {
            var data = global.localStorage.getItem(key);
            if (data !== null) {
                return new Buffer(data, binaryEncoding);
            }
        }
        catch (e) {
        }
        return undefined;
    };
    LocalStorageStore.prototype.put = function (key, data, overwrite) {
        try {
            if (!overwrite && global.localStorage.getItem(key) !== null) {
                return false;
            }
            global.localStorage.setItem(key, data.toString(binaryEncoding));
            return true;
        }
        catch (e) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, "LocalStorage is full.");
        }
    };
    LocalStorageStore.prototype.del = function (key) {
        try {
            global.localStorage.removeItem(key);
        }
        catch (e) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unable to delete key " + key + ": " + e);
        }
    };
    return LocalStorageStore;
}());
exports.LocalStorageStore = LocalStorageStore;
var LocalStorageFileSystem = (function (_super) {
    __extends(LocalStorageFileSystem, _super);
    function LocalStorageFileSystem() {
        _super.call(this, { store: new LocalStorageStore() });
    }
    LocalStorageFileSystem.isAvailable = function () {
        return typeof global.localStorage !== 'undefined';
    };
    return LocalStorageFileSystem;
}(kvfs.SyncKeyValueFileSystem));
exports.__esModule = true;
exports["default"] = LocalStorageFileSystem;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/global":57,"../generic/key_value_filesystem":64,"bfs-buffer":2}],44:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system = _dereq_('../core/file_system');
var InMemory_1 = _dereq_('./InMemory');
var api_error_1 = _dereq_('../core/api_error');
var fs = _dereq_('../core/node_fs');
var path = _dereq_('path');
var util_1 = _dereq_('../core/util');
var MountableFileSystem = (function (_super) {
    __extends(MountableFileSystem, _super);
    function MountableFileSystem() {
        _super.call(this);
        this.mountList = [];
        this.mntMap = {};
        this.rootFs = new InMemory_1["default"]();
    }
    MountableFileSystem.prototype.mount = function (mountPoint, fs) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already taken.");
        }
        util_1.mkdirpSync(mountPoint, 0x1ff, this.rootFs);
        this.mntMap[mountPoint] = fs;
        this.mountList.push(mountPoint);
        this.mountList = this.mountList.sort(function (a, b) { return b.length - a.length; });
    };
    MountableFileSystem.prototype.umount = function (mountPoint) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (!this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already unmounted.");
        }
        delete this.mntMap[mountPoint];
        this.mountList.splice(this.mountList.indexOf(mountPoint), 1);
        while (mountPoint !== '/') {
            if (this.rootFs.readdirSync(mountPoint).length === 0) {
                this.rootFs.rmdirSync(mountPoint);
                mountPoint = path.dirname(mountPoint);
            }
            else {
                break;
            }
        }
    };
    MountableFileSystem.prototype._getFs = function (path) {
        var mountList = this.mountList, len = mountList.length;
        for (var i_1 = 0; i_1 < len; i_1++) {
            var mountPoint = mountList[i_1];
            if (mountPoint.length <= path.length && path.indexOf(mountPoint) === 0) {
                path = path.substr(mountPoint.length > 1 ? mountPoint.length : 0);
                if (path === '') {
                    path = '/';
                }
                return { fs: this.mntMap[mountPoint], path: path };
            }
        }
        return { fs: this.rootFs, path: path };
    };
    MountableFileSystem.prototype.getName = function () {
        return 'MountableFileSystem';
    };
    MountableFileSystem.isAvailable = function () {
        return true;
    };
    MountableFileSystem.prototype.diskSpace = function (path, cb) {
        cb(0, 0);
    };
    MountableFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsLinks = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsProps = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsSynch = function () {
        return true;
    };
    MountableFileSystem.prototype.standardizeError = function (err, path, realPath) {
        var index;
        if (-1 !== (index = err.message.indexOf(path))) {
            err.message = err.message.substr(0, index) + realPath + err.message.substr(index + path.length);
            err.path = realPath;
        }
        return err;
    };
    MountableFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var fs1_rv = this._getFs(oldPath);
        var fs2_rv = this._getFs(newPath);
        if (fs1_rv.fs === fs2_rv.fs) {
            var _this = this;
            return fs1_rv.fs.rename(fs1_rv.path, fs2_rv.path, function (e) {
                if (e)
                    _this.standardizeError(_this.standardizeError(e, fs1_rv.path, oldPath), fs2_rv.path, newPath);
                cb(e);
            });
        }
        return fs.readFile(oldPath, function (err, data) {
            if (err) {
                return cb(err);
            }
            fs.writeFile(newPath, data, function (err) {
                if (err) {
                    return cb(err);
                }
                fs.unlink(oldPath, cb);
            });
        });
    };
    MountableFileSystem.prototype.renameSync = function (oldPath, newPath) {
        var fs1_rv = this._getFs(oldPath);
        var fs2_rv = this._getFs(newPath);
        if (fs1_rv.fs === fs2_rv.fs) {
            try {
                return fs1_rv.fs.renameSync(fs1_rv.path, fs2_rv.path);
            }
            catch (e) {
                this.standardizeError(this.standardizeError(e, fs1_rv.path, oldPath), fs2_rv.path, newPath);
                throw e;
            }
        }
        var data = fs.readFileSync(oldPath);
        fs.writeFileSync(newPath, data);
        return fs.unlinkSync(oldPath);
    };
    MountableFileSystem.prototype.readdirSync = function (p) {
        var fsInfo = this._getFs(p);
        var rv = null;
        if (fsInfo.fs !== this.rootFs) {
            try {
                rv = this.rootFs.readdirSync(p);
            }
            catch (e) {
            }
        }
        try {
            var rv2_1 = fsInfo.fs.readdirSync(fsInfo.path);
            if (rv === null) {
                return rv2_1;
            }
            else {
                return rv2_1.concat(rv.filter(function (val) { return rv2_1.indexOf(val) === -1; }));
            }
        }
        catch (e) {
            if (rv === null) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
            else {
                return rv;
            }
        }
    };
    MountableFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        fsInfo.fs.readdir(fsInfo.path, function (err, files) {
            if (fsInfo.fs !== _this.rootFs) {
                try {
                    var rv = _this.rootFs.readdirSync(p);
                    if (files) {
                        files = files.concat(rv.filter(function (val) { return files.indexOf(val) === -1; }));
                    }
                    else {
                        files = rv;
                    }
                }
                catch (e) {
                    if (err) {
                        return cb(_this.standardizeError(err, fsInfo.path, p));
                    }
                }
            }
            else if (err) {
                return cb(_this.standardizeError(err, fsInfo.path, p));
            }
            cb(null, files);
        });
    };
    MountableFileSystem.prototype.rmdirSync = function (p) {
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            try {
                fsInfo.fs.rmdirSync(fsInfo.path);
            }
            catch (e) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
        }
    };
    MountableFileSystem.prototype._containsMountPt = function (p) {
        var mountPoints = this.mountList, len = mountPoints.length;
        for (var i_2 = 0; i_2 < len; i_2++) {
            var pt = mountPoints[i_2];
            if (pt.length >= p.length && pt.slice(0, p.length) === p) {
                return true;
            }
        }
        return false;
    };
    MountableFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            cb(api_error_1.ApiError.ENOTEMPTY(p));
        }
        else {
            fsInfo.fs.rmdir(fsInfo.path, function (err) {
                cb(err ? _this.standardizeError(err, fsInfo.path, p) : null);
            });
        }
    };
    return MountableFileSystem;
}(file_system.BaseFileSystem));
exports.__esModule = true;
exports["default"] = MountableFileSystem;
function defineFcn(name, isSync, numArgs) {
    if (isSync) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var self = this;
            var path = args[0];
            var rv = self._getFs(path);
            args[0] = rv.path;
            try {
                return rv.fs[name].apply(rv.fs, args);
            }
            catch (e) {
                self.standardizeError(e, rv.path, path);
                throw e;
            }
        };
    }
    else {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var self = this;
            var path = args[0];
            var rv = self._getFs(path);
            args[0] = rv.path;
            if (typeof args[args.length - 1] === 'function') {
                var cb = args[args.length - 1];
                args[args.length - 1] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    if (args.length > 0 && args[0] instanceof api_error_1.ApiError) {
                        self.standardizeError(args[0], rv.path, path);
                    }
                    cb.apply(null, args);
                };
            }
            return rv.fs[name].apply(rv.fs, args);
        };
    }
}
var fsCmdMap = [
    ['exists', 'unlink', 'readlink'],
    ['stat', 'mkdir', 'realpath', 'truncate'],
    ['open', 'readFile', 'chmod', 'utimes'],
    ['chown'],
    ['writeFile', 'appendFile']];
for (var i = 0; i < fsCmdMap.length; i++) {
    var cmds = fsCmdMap[i];
    for (var j = 0; j < cmds.length; j++) {
        var fnName = cmds[j];
        MountableFileSystem.prototype[fnName] = defineFcn(fnName, false, i + 1);
        MountableFileSystem.prototype[fnName + 'Sync'] = defineFcn(fnName + 'Sync', true, i + 1);
    }
}

},{"../core/api_error":51,"../core/file_system":56,"../core/node_fs":58,"../core/util":60,"./InMemory":41,"path":10}],45:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system_1 = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var file_flag_1 = _dereq_('../core/file_flag');
var preload_file_1 = _dereq_('../generic/preload_file');
var locked_fs_1 = _dereq_('../generic/locked_fs');
var path = _dereq_('path');
var deletionLogPath = '/.deletedFiles.log';
function makeModeWritable(mode) {
    return 146 | mode;
}
function getFlag(f) {
    return file_flag_1.FileFlag.getFileFlag(f);
}
var OverlayFile = (function (_super) {
    __extends(OverlayFile, _super);
    function OverlayFile(fs, path, flag, stats, data) {
        _super.call(this, fs, path, flag, stats, data);
    }
    OverlayFile.prototype.sync = function (cb) {
        var _this = this;
        if (!this.isDirty()) {
            cb(null);
            return;
        }
        this._fs._syncAsync(this, function (err) {
            _this.resetDirty();
            cb(err);
        });
    };
    OverlayFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    OverlayFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    OverlayFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return OverlayFile;
}(preload_file_1.PreloadFile));
var UnlockedOverlayFS = (function (_super) {
    __extends(UnlockedOverlayFS, _super);
    function UnlockedOverlayFS(writable, readable) {
        _super.call(this);
        this._isInitialized = false;
        this._initializeCallbacks = [];
        this._deletedFiles = {};
        this._deleteLog = null;
        this._writable = writable;
        this._readable = readable;
        if (this._writable.isReadOnly()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Writable file system must be writable.");
        }
    }
    UnlockedOverlayFS.prototype.checkInitialized = function () {
        if (!this._isInitialized) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
        }
    };
    UnlockedOverlayFS.prototype.checkInitAsync = function (cb) {
        if (!this._isInitialized) {
            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it."));
            return false;
        }
        return true;
    };
    UnlockedOverlayFS.prototype.getOverlayedFileSystems = function () {
        return {
            readable: this._readable,
            writable: this._writable
        };
    };
    UnlockedOverlayFS.prototype.createParentDirectoriesAsync = function (p, cb) {
        var parent = path.dirname(p);
        var toCreate = [];
        var _this = this;
        this._writable.stat(parent, false, statDone);
        function statDone(err, stat) {
            if (err) {
                toCreate.push(parent);
                parent = path.dirname(parent);
                _this._writable.stat(parent, false, statDone);
            }
            else {
                createParents();
            }
        }
        function createParents() {
            if (!toCreate.length) {
                return cb();
            }
            var dir = toCreate.pop();
            _this._readable.stat(dir, false, function (err, stats) {
                if (!stats) {
                    return cb();
                }
                _this._writable.mkdir(dir, stats.mode, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    createParents();
                });
            });
        }
    };
    UnlockedOverlayFS.prototype.createParentDirectories = function (p) {
        var _this = this;
        var parent = path.dirname(p), toCreate = [];
        while (!this._writable.existsSync(parent)) {
            toCreate.push(parent);
            parent = path.dirname(parent);
        }
        toCreate = toCreate.reverse();
        toCreate.forEach(function (p) {
            _this._writable.mkdirSync(p, _this.statSync(p, false).mode);
        });
    };
    UnlockedOverlayFS.isAvailable = function () {
        return true;
    };
    UnlockedOverlayFS.prototype._syncAsync = function (file, cb) {
        var _this = this;
        this.createParentDirectoriesAsync(file.getPath(), function (err) {
            if (err) {
                return cb(err);
            }
            _this._writable.writeFile(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode, cb);
        });
    };
    UnlockedOverlayFS.prototype._syncSync = function (file) {
        this.createParentDirectories(file.getPath());
        this._writable.writeFileSync(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode);
    };
    UnlockedOverlayFS.prototype.getName = function () {
        return "OverlayFS";
    };
    UnlockedOverlayFS.prototype.initialize = function (cb) {
        var _this = this;
        var callbackArray = this._initializeCallbacks;
        var end = function (e) {
            _this._isInitialized = !e;
            _this._initializeCallbacks = [];
            callbackArray.forEach((function (cb) { return cb(e); }));
        };
        if (this._isInitialized) {
            return cb();
        }
        callbackArray.push(cb);
        if (callbackArray.length !== 1) {
            return;
        }
        this._writable.readFile(deletionLogPath, 'utf8', getFlag('r'), function (err, data) {
            if (err) {
                if (err.errno !== api_error_1.ErrorCode.ENOENT) {
                    return end(err);
                }
            }
            else {
                data.split('\n').forEach(function (path) {
                    _this._deletedFiles[path.slice(1)] = path.slice(0, 1) === 'd';
                });
            }
            _this._writable.open(deletionLogPath, getFlag('a'), 420, function (err, fd) {
                if (!err) {
                    _this._deleteLog = fd;
                }
                end(err);
            });
        });
    };
    UnlockedOverlayFS.prototype.isReadOnly = function () { return false; };
    UnlockedOverlayFS.prototype.supportsSynch = function () { return this._readable.supportsSynch() && this._writable.supportsSynch(); };
    UnlockedOverlayFS.prototype.supportsLinks = function () { return false; };
    UnlockedOverlayFS.prototype.supportsProps = function () { return this._readable.supportsProps() && this._writable.supportsProps(); };
    UnlockedOverlayFS.prototype.deletePath = function (p) {
        this._deletedFiles[p] = true;
        var buff = new Buffer("d" + p + "\n");
        this._deleteLog.writeSync(buff, 0, buff.length, null);
        this._deleteLog.syncSync();
    };
    UnlockedOverlayFS.prototype.undeletePath = function (p) {
        if (this._deletedFiles[p]) {
            this._deletedFiles[p] = false;
            var buff = new Buffer("u" + p);
            this._deleteLog.writeSync(buff, 0, buff.length, null);
            this._deleteLog.syncSync();
        }
    };
    UnlockedOverlayFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        if (oldPath === newPath) {
            return cb();
        }
        this.stat(oldPath, false, function (oldErr, oldStats) {
            if (oldErr) {
                return cb(oldErr);
            }
            return _this.stat(newPath, false, function (newErr, newStats) {
                function copyDirContents(files) {
                    var file = files.shift();
                    if (!file) {
                        return cb();
                    }
                    var oldFile = path.resolve(oldPath, file);
                    var newFile = path.resolve(newPath, file);
                    this.rename(oldFile, newFile, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        copyDirContents(files);
                    });
                }
                var mode = 511;
                if (oldStats.isDirectory()) {
                    if (newErr) {
                        if (newErr.errno !== api_error_1.ErrorCode.ENOENT) {
                            return cb(newErr);
                        }
                        return _this._writable.exists(oldPath, function (exists) {
                            if (exists) {
                                return _this._writable.rename(oldPath, newPath, cb);
                            }
                            _this._writable.mkdir(newPath, mode, function (mkdirErr) {
                                if (mkdirErr) {
                                    return cb(mkdirErr);
                                }
                                _this._readable.readdir(oldPath, function (err, files) {
                                    if (err) {
                                        return cb();
                                    }
                                    copyDirContents(files);
                                });
                            });
                        });
                    }
                    mode = newStats.mode;
                    if (!newStats.isDirectory()) {
                        return cb(api_error_1.ApiError.ENOTDIR(newPath));
                    }
                    _this.readdir(newPath, function (readdirErr, files) {
                        if (files && files.length) {
                            return cb(api_error_1.ApiError.ENOTEMPTY(newPath));
                        }
                        _this._readable.readdir(oldPath, function (err, files) {
                            if (err) {
                                return cb();
                            }
                            copyDirContents(files);
                        });
                    });
                }
                if (newStats && newStats.isDirectory()) {
                    return cb(api_error_1.ApiError.EISDIR(newPath));
                }
                _this.readFile(oldPath, null, getFlag('r'), function (err, data) {
                    if (err) {
                        return cb(err);
                    }
                    return _this.writeFile(newPath, data, null, getFlag('w'), oldStats.mode, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        return _this.unlink(oldPath, cb);
                    });
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.renameSync = function (oldPath, newPath) {
        var _this = this;
        this.checkInitialized();
        var oldStats = this.statSync(oldPath, false);
        if (oldStats.isDirectory()) {
            if (oldPath === newPath) {
                return;
            }
            var mode = 511;
            if (this.existsSync(newPath)) {
                var stats = this.statSync(newPath, false), mode = stats.mode;
                if (stats.isDirectory()) {
                    if (this.readdirSync(newPath).length > 0) {
                        throw api_error_1.ApiError.ENOTEMPTY(newPath);
                    }
                }
                else {
                    throw api_error_1.ApiError.ENOTDIR(newPath);
                }
            }
            if (this._writable.existsSync(oldPath)) {
                this._writable.renameSync(oldPath, newPath);
            }
            else if (!this._writable.existsSync(newPath)) {
                this._writable.mkdirSync(newPath, mode);
            }
            if (this._readable.existsSync(oldPath)) {
                this._readable.readdirSync(oldPath).forEach(function (name) {
                    _this.renameSync(path.resolve(oldPath, name), path.resolve(newPath, name));
                });
            }
        }
        else {
            if (this.existsSync(newPath) && this.statSync(newPath, false).isDirectory()) {
                throw api_error_1.ApiError.EISDIR(newPath);
            }
            this.writeFileSync(newPath, this.readFileSync(oldPath, null, getFlag('r')), null, getFlag('w'), oldStats.mode);
        }
        if (oldPath !== newPath && this.existsSync(oldPath)) {
            this.unlinkSync(oldPath);
        }
    };
    UnlockedOverlayFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this._writable.stat(p, isLstat, function (err, stat) {
            if (err && err.errno === api_error_1.ErrorCode.ENOENT) {
                if (_this._deletedFiles[p]) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                _this._readable.stat(p, isLstat, function (err, stat) {
                    if (stat) {
                        stat = stat.clone();
                        stat.mode = makeModeWritable(stat.mode);
                    }
                    cb(err, stat);
                });
            }
            else {
                cb(err, stat);
            }
        });
    };
    UnlockedOverlayFS.prototype.statSync = function (p, isLstat) {
        this.checkInitialized();
        try {
            return this._writable.statSync(p, isLstat);
        }
        catch (e) {
            if (this._deletedFiles[p]) {
                throw api_error_1.ApiError.ENOENT(p);
            }
            var oldStat = this._readable.statSync(p, isLstat).clone();
            oldStat.mode = makeModeWritable(oldStat.mode);
            return oldStat;
        }
    };
    UnlockedOverlayFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.stat(p, false, function (err, stats) {
            if (stats) {
                switch (flag.pathExistsAction()) {
                    case file_flag_1.ActionType.TRUNCATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            _this._writable.open(p, flag, mode, cb);
                        });
                    case file_flag_1.ActionType.NOP:
                        return _this._writable.exists(p, function (exists) {
                            if (exists) {
                                _this._writable.open(p, flag, mode, cb);
                            }
                            else {
                                stats = stats.clone();
                                stats.mode = mode;
                                _this._readable.readFile(p, null, getFlag('r'), function (readFileErr, data) {
                                    if (readFileErr) {
                                        return cb(readFileErr);
                                    }
                                    if (stats.size === -1) {
                                        stats.size = data.length;
                                    }
                                    var f = new OverlayFile(_this, p, flag, stats, data);
                                    cb(null, f);
                                });
                            }
                        });
                    default:
                        return cb(api_error_1.ApiError.EEXIST(p));
                }
            }
            else {
                switch (flag.pathNotExistsAction()) {
                    case file_flag_1.ActionType.CREATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            return _this._writable.open(p, flag, mode, cb);
                        });
                    default:
                        return cb(api_error_1.ApiError.ENOENT(p));
                }
            }
        });
    };
    UnlockedOverlayFS.prototype.openSync = function (p, flag, mode) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            switch (flag.pathExistsAction()) {
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                case file_flag_1.ActionType.NOP:
                    if (this._writable.existsSync(p)) {
                        return this._writable.openSync(p, flag, mode);
                    }
                    else {
                        var stats = this._readable.statSync(p, false).clone();
                        stats.mode = mode;
                        return new OverlayFile(this, p, flag, stats, this._readable.readFileSync(p, null, getFlag('r')));
                    }
                default:
                    throw api_error_1.ApiError.EEXIST(p);
            }
        }
        else {
            switch (flag.pathNotExistsAction()) {
                case file_flag_1.ActionType.CREATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                default:
                    throw api_error_1.ApiError.ENOENT(p);
            }
        }
    };
    UnlockedOverlayFS.prototype.unlink = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.exists(p, function (exists) {
            if (!exists)
                return cb(api_error_1.ApiError.ENOENT(p));
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    return _this._writable.unlink(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this.exists(p, function (readableExists) {
                            if (readableExists) {
                                _this.deletePath(p);
                            }
                            cb(null);
                        });
                    });
                }
                else {
                    _this.deletePath(p);
                    cb(null);
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.unlinkSync = function (p) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.unlinkSync(p);
            }
            if (this.existsSync(p)) {
                this.deletePath(p);
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        var rmdirLower = function () {
            _this.readdir(p, function (err, files) {
                if (err) {
                    return cb(err);
                }
                if (files.length) {
                    return cb(api_error_1.ApiError.ENOTEMPTY(p));
                }
                _this.deletePath(p);
                cb(null);
            });
        };
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    _this._writable.rmdir(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this._readable.exists(p, function (readableExists) {
                            if (readableExists) {
                                rmdirLower();
                            }
                            else {
                                cb();
                            }
                        });
                    });
                }
                else {
                    rmdirLower();
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.rmdirSync = function (p) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.rmdirSync(p);
            }
            if (this.existsSync(p)) {
                if (this.readdirSync(p).length > 0) {
                    throw api_error_1.ApiError.ENOTEMPTY(p);
                }
                else {
                    this.deletePath(p);
                }
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.exists(p, function (exists) {
            if (exists) {
                return cb(api_error_1.ApiError.EEXIST(p));
            }
            _this.createParentDirectoriesAsync(p, function (err) {
                if (err) {
                    return cb(err);
                }
                _this._writable.mkdir(p, mode, cb);
            });
        });
    };
    UnlockedOverlayFS.prototype.mkdirSync = function (p, mode) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        else {
            this.createParentDirectories(p);
            this._writable.mkdirSync(p, mode);
        }
    };
    UnlockedOverlayFS.prototype.readdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.stat(p, false, function (err, dirStats) {
            if (err) {
                return cb(err);
            }
            if (!dirStats.isDirectory()) {
                return cb(api_error_1.ApiError.ENOTDIR(p));
            }
            _this._writable.readdir(p, function (err, wFiles) {
                if (err && err.code !== 'ENOENT') {
                    return cb(err);
                }
                else if (err || !wFiles) {
                    wFiles = [];
                }
                _this._readable.readdir(p, function (err, rFiles) {
                    if (err || !rFiles) {
                        rFiles = [];
                    }
                    var contents = wFiles.concat(rFiles);
                    var seenMap = {};
                    var filtered = contents.filter(function (fPath) {
                        var result = !seenMap[fPath] && !_this._deletedFiles[p + "/" + fPath];
                        seenMap[fPath] = true;
                        return result;
                    });
                    cb(null, filtered);
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.readdirSync = function (p) {
        var _this = this;
        this.checkInitialized();
        var dirStats = this.statSync(p, false);
        if (!dirStats.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        var contents = [];
        try {
            contents = contents.concat(this._writable.readdirSync(p));
        }
        catch (e) {
        }
        try {
            contents = contents.concat(this._readable.readdirSync(p));
        }
        catch (e) {
        }
        var seenMap = {};
        return contents.filter(function (fileP) {
            var result = seenMap[fileP] === undefined && _this._deletedFiles[p + "/" + fileP] !== true;
            seenMap[fileP] = true;
            return result;
        });
    };
    UnlockedOverlayFS.prototype.exists = function (p, cb) {
        var _this = this;
        this.checkInitialized();
        this._writable.exists(p, function (existsWritable) {
            if (existsWritable) {
                return cb(true);
            }
            _this._readable.exists(p, function (existsReadable) {
                cb(existsReadable && _this._deletedFiles[p] !== true);
            });
        });
    };
    UnlockedOverlayFS.prototype.existsSync = function (p) {
        this.checkInitialized();
        return this._writable.existsSync(p) || (this._readable.existsSync(p) && this._deletedFiles[p] !== true);
    };
    UnlockedOverlayFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chmod(p, isLchmod, mode, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chmodSync = function (p, isLchmod, mode) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chmodSync(p, isLchmod, mode);
        });
    };
    UnlockedOverlayFS.prototype.chown = function (p, isLchmod, uid, gid, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chown(p, isLchmod, uid, gid, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chownSync(p, isLchown, uid, gid);
        });
    };
    UnlockedOverlayFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb))
            return;
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.utimes(p, atime, mtime, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.utimesSync = function (p, atime, mtime) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.utimesSync(p, atime, mtime);
        });
    };
    UnlockedOverlayFS.prototype.operateOnWritable = function (p, f) {
        if (this.existsSync(p)) {
            if (!this._writable.existsSync(p)) {
                this.copyToWritable(p);
            }
            f();
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.operateOnWritableAsync = function (p, cb) {
        var _this = this;
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (existsWritable) {
                if (existsWritable) {
                    cb();
                }
                else {
                    return _this.copyToWritableAsync(p, cb);
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.copyToWritable = function (p) {
        var pStats = this.statSync(p, false);
        if (pStats.isDirectory()) {
            this._writable.mkdirSync(p, pStats.mode);
        }
        else {
            this.writeFileSync(p, this._readable.readFileSync(p, null, getFlag('r')), null, getFlag('w'), this.statSync(p, false).mode);
        }
    };
    UnlockedOverlayFS.prototype.copyToWritableAsync = function (p, cb) {
        var _this = this;
        this.stat(p, false, function (err, pStats) {
            if (err) {
                return cb(err);
            }
            if (pStats.isDirectory()) {
                return _this._writable.mkdir(p, pStats.mode, cb);
            }
            _this._readable.readFile(p, null, getFlag('r'), function (err, data) {
                if (err) {
                    return cb(err);
                }
                _this.writeFile(p, data, null, getFlag('w'), pStats.mode, cb);
            });
        });
    };
    return UnlockedOverlayFS;
}(file_system_1.BaseFileSystem));
exports.UnlockedOverlayFS = UnlockedOverlayFS;
var OverlayFS = (function (_super) {
    __extends(OverlayFS, _super);
    function OverlayFS(writable, readable) {
        _super.call(this, new UnlockedOverlayFS(writable, readable));
    }
    OverlayFS.prototype.initialize = function (cb) {
        _super.prototype.initialize.call(this, cb);
    };
    OverlayFS.isAvailable = function () {
        return UnlockedOverlayFS.isAvailable();
    };
    OverlayFS.prototype.getOverlayedFileSystems = function () {
        return _super.prototype.getFSUnlocked.call(this).getOverlayedFileSystems();
    };
    return OverlayFS;
}(locked_fs_1["default"]));
exports.__esModule = true;
exports["default"] = OverlayFS;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/file_flag":55,"../core/file_system":56,"../generic/locked_fs":65,"../generic/preload_file":67,"bfs-buffer":2,"path":10}],46:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var file_flag = _dereq_('../core/file_flag');
var util_1 = _dereq_('../core/util');
var file = _dereq_('../core/file');
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var preload_file = _dereq_('../generic/preload_file');
var global = _dereq_('../core/global');
var fs = _dereq_('../core/node_fs');
var SpecialArgType;
(function (SpecialArgType) {
    SpecialArgType[SpecialArgType["CB"] = 0] = "CB";
    SpecialArgType[SpecialArgType["FD"] = 1] = "FD";
    SpecialArgType[SpecialArgType["API_ERROR"] = 2] = "API_ERROR";
    SpecialArgType[SpecialArgType["STATS"] = 3] = "STATS";
    SpecialArgType[SpecialArgType["PROBE"] = 4] = "PROBE";
    SpecialArgType[SpecialArgType["FILEFLAG"] = 5] = "FILEFLAG";
    SpecialArgType[SpecialArgType["BUFFER"] = 6] = "BUFFER";
    SpecialArgType[SpecialArgType["ERROR"] = 7] = "ERROR";
})(SpecialArgType || (SpecialArgType = {}));
var CallbackArgumentConverter = (function () {
    function CallbackArgumentConverter() {
        this._callbacks = {};
        this._nextId = 0;
    }
    CallbackArgumentConverter.prototype.toRemoteArg = function (cb) {
        var id = this._nextId++;
        this._callbacks[id] = cb;
        return {
            type: SpecialArgType.CB,
            id: id
        };
    };
    CallbackArgumentConverter.prototype.toLocalArg = function (id) {
        var cb = this._callbacks[id];
        delete this._callbacks[id];
        return cb;
    };
    return CallbackArgumentConverter;
}());
var FileDescriptorArgumentConverter = (function () {
    function FileDescriptorArgumentConverter() {
        this._fileDescriptors = {};
        this._nextId = 0;
    }
    FileDescriptorArgumentConverter.prototype.toRemoteArg = function (fd, p, flag, cb) {
        var id = this._nextId++, data, stat, argsLeft = 2;
        this._fileDescriptors[id] = fd;
        fd.stat(function (err, stats) {
            if (err) {
                cb(err);
            }
            else {
                stat = bufferToTransferrableObject(stats.toBuffer());
                if (flag.isReadable()) {
                    fd.read(new Buffer(stats.size), 0, stats.size, 0, function (err, bytesRead, buff) {
                        if (err) {
                            cb(err);
                        }
                        else {
                            data = bufferToTransferrableObject(buff);
                            cb(null, {
                                type: SpecialArgType.FD,
                                id: id,
                                data: data,
                                stat: stat,
                                path: p,
                                flag: flag.getFlagString()
                            });
                        }
                    });
                }
                else {
                    cb(null, {
                        type: SpecialArgType.FD,
                        id: id,
                        data: new ArrayBuffer(0),
                        stat: stat,
                        path: p,
                        flag: flag.getFlagString()
                    });
                }
            }
        });
    };
    FileDescriptorArgumentConverter.prototype._applyFdChanges = function (remoteFd, cb) {
        var fd = this._fileDescriptors[remoteFd.id], data = transferrableObjectToBuffer(remoteFd.data), remoteStats = node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(remoteFd.stat));
        var flag = file_flag.FileFlag.getFileFlag(remoteFd.flag);
        if (flag.isWriteable()) {
            fd.write(data, 0, data.length, flag.isAppendable() ? fd.getPos() : 0, function (e) {
                function applyStatChanges() {
                    fd.stat(function (e, stats) {
                        if (e) {
                            cb(e);
                        }
                        else {
                            if (stats.mode !== remoteStats.mode) {
                                fd.chmod(remoteStats.mode, function (e) {
                                    cb(e, fd);
                                });
                            }
                            else {
                                cb(e, fd);
                            }
                        }
                    });
                }
                if (e) {
                    cb(e);
                }
                else {
                    if (!flag.isAppendable()) {
                        fd.truncate(data.length, function () {
                            applyStatChanges();
                        });
                    }
                    else {
                        applyStatChanges();
                    }
                }
            });
        }
        else {
            cb(null, fd);
        }
    };
    FileDescriptorArgumentConverter.prototype.applyFdAPIRequest = function (request, cb) {
        var _this = this;
        var fdArg = request.args[0];
        this._applyFdChanges(fdArg, function (err, fd) {
            if (err) {
                cb(err);
            }
            else {
                fd[request.method](function (e) {
                    if (request.method === 'close') {
                        delete _this._fileDescriptors[fdArg.id];
                    }
                    cb(e);
                });
            }
        });
    };
    return FileDescriptorArgumentConverter;
}());
function apiErrorLocal2Remote(e) {
    return {
        type: SpecialArgType.API_ERROR,
        errorData: bufferToTransferrableObject(e.writeToBuffer())
    };
}
function apiErrorRemote2Local(e) {
    return api_error_1.ApiError.fromBuffer(transferrableObjectToBuffer(e.errorData));
}
function errorLocal2Remote(e) {
    return {
        type: SpecialArgType.ERROR,
        name: e.name,
        message: e.message,
        stack: e.stack
    };
}
function errorRemote2Local(e) {
    var cnstr = global[e.name];
    if (typeof (cnstr) !== 'function') {
        cnstr = Error;
    }
    var err = new cnstr(e.message);
    err.stack = e.stack;
    return err;
}
function statsLocal2Remote(stats) {
    return {
        type: SpecialArgType.STATS,
        statsData: bufferToTransferrableObject(stats.toBuffer())
    };
}
function statsRemote2Local(stats) {
    return node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(stats.statsData));
}
function fileFlagLocal2Remote(flag) {
    return {
        type: SpecialArgType.FILEFLAG,
        flagStr: flag.getFlagString()
    };
}
function fileFlagRemote2Local(remoteFlag) {
    return file_flag.FileFlag.getFileFlag(remoteFlag.flagStr);
}
function bufferToTransferrableObject(buff) {
    return util_1.buffer2ArrayBuffer(buff);
}
function transferrableObjectToBuffer(buff) {
    return util_1.arrayBuffer2Buffer(buff);
}
function bufferLocal2Remote(buff) {
    return {
        type: SpecialArgType.BUFFER,
        data: bufferToTransferrableObject(buff)
    };
}
function bufferRemote2Local(buffArg) {
    return transferrableObjectToBuffer(buffArg.data);
}
function isAPIRequest(data) {
    return data != null && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
function isAPIResponse(data) {
    return data != null && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
var WorkerFile = (function (_super) {
    __extends(WorkerFile, _super);
    function WorkerFile(_fs, _path, _flag, _stat, remoteFdId, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
        this._remoteFdId = remoteFdId;
    }
    WorkerFile.prototype.getRemoteFdId = function () {
        return this._remoteFdId;
    };
    WorkerFile.prototype.toRemoteArg = function () {
        return {
            type: SpecialArgType.FD,
            id: this._remoteFdId,
            data: bufferToTransferrableObject(this.getBuffer()),
            stat: bufferToTransferrableObject(this.getStats().toBuffer()),
            path: this.getPath(),
            flag: this.getFlag().getFlagString()
        };
    };
    WorkerFile.prototype._syncClose = function (type, cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs.syncClose(type, this, function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    WorkerFile.prototype.sync = function (cb) {
        this._syncClose('sync', cb);
    };
    WorkerFile.prototype.close = function (cb) {
        this._syncClose('close', cb);
    };
    return WorkerFile;
}(preload_file.PreloadFile));
var WorkerFS = (function (_super) {
    __extends(WorkerFS, _super);
    function WorkerFS(worker) {
        var _this = this;
        _super.call(this);
        this._callbackConverter = new CallbackArgumentConverter();
        this._isInitialized = false;
        this._isReadOnly = false;
        this._supportLinks = false;
        this._supportProps = false;
        this._outstandingRequests = {};
        this._worker = worker;
        this._worker.addEventListener('message', function (e) {
            var resp = e.data;
            if (isAPIResponse(resp)) {
                var i, args = resp.args, fixedArgs = new Array(args.length);
                for (i = 0; i < fixedArgs.length; i++) {
                    fixedArgs[i] = _this._argRemote2Local(args[i]);
                }
                _this._callbackConverter.toLocalArg(resp.cbId).apply(null, fixedArgs);
            }
        });
    }
    WorkerFS.isAvailable = function () {
        return typeof (importScripts) !== 'undefined' || typeof (Worker) !== 'undefined';
    };
    WorkerFS.prototype.getName = function () {
        return 'WorkerFS';
    };
    WorkerFS.prototype._argRemote2Local = function (arg) {
        if (arg == null) {
            return arg;
        }
        switch (typeof arg) {
            case 'object':
                if (arg['type'] != null && typeof arg['type'] === 'number') {
                    var specialArg = arg;
                    switch (specialArg.type) {
                        case SpecialArgType.API_ERROR:
                            return apiErrorRemote2Local(specialArg);
                        case SpecialArgType.FD:
                            var fdArg = specialArg;
                            return new WorkerFile(this, fdArg.path, file_flag.FileFlag.getFileFlag(fdArg.flag), node_fs_stats_1["default"].fromBuffer(transferrableObjectToBuffer(fdArg.stat)), fdArg.id, transferrableObjectToBuffer(fdArg.data));
                        case SpecialArgType.STATS:
                            return statsRemote2Local(specialArg);
                        case SpecialArgType.FILEFLAG:
                            return fileFlagRemote2Local(specialArg);
                        case SpecialArgType.BUFFER:
                            return bufferRemote2Local(specialArg);
                        case SpecialArgType.ERROR:
                            return errorRemote2Local(specialArg);
                        default:
                            return arg;
                    }
                }
                else {
                    return arg;
                }
            default:
                return arg;
        }
    };
    WorkerFS.prototype._argLocal2Remote = function (arg) {
        if (arg == null) {
            return arg;
        }
        switch (typeof arg) {
            case "object":
                if (arg instanceof node_fs_stats_1["default"]) {
                    return statsLocal2Remote(arg);
                }
                else if (arg instanceof api_error_1.ApiError) {
                    return apiErrorLocal2Remote(arg);
                }
                else if (arg instanceof WorkerFile) {
                    return arg.toRemoteArg();
                }
                else if (arg instanceof file_flag.FileFlag) {
                    return fileFlagLocal2Remote(arg);
                }
                else if (arg instanceof Buffer) {
                    return bufferLocal2Remote(arg);
                }
                else if (arg instanceof Error) {
                    return errorLocal2Remote(arg);
                }
                else {
                    return "Unknown argument";
                }
            case "function":
                return this._callbackConverter.toRemoteArg(arg);
            default:
                return arg;
        }
    };
    WorkerFS.prototype.initialize = function (cb) {
        var _this = this;
        if (!this._isInitialized) {
            var message = {
                browserfsMessage: true,
                method: 'probe',
                args: [this._argLocal2Remote(new Buffer(0)), this._callbackConverter.toRemoteArg(function (probeResponse) {
                        _this._isInitialized = true;
                        _this._isReadOnly = probeResponse.isReadOnly;
                        _this._supportLinks = probeResponse.supportsLinks;
                        _this._supportProps = probeResponse.supportsProps;
                        cb();
                    })]
            };
            this._worker.postMessage(message);
        }
        else {
            cb();
        }
    };
    WorkerFS.prototype.isReadOnly = function () { return this._isReadOnly; };
    WorkerFS.prototype.supportsSynch = function () { return false; };
    WorkerFS.prototype.supportsLinks = function () { return this._supportLinks; };
    WorkerFS.prototype.supportsProps = function () { return this._supportProps; };
    WorkerFS.prototype._rpc = function (methodName, args) {
        var message = {
            browserfsMessage: true,
            method: methodName,
            args: null
        }, fixedArgs = new Array(args.length), i;
        for (i = 0; i < args.length; i++) {
            fixedArgs[i] = this._argLocal2Remote(args[i]);
        }
        message.args = fixedArgs;
        this._worker.postMessage(message);
    };
    WorkerFS.prototype.rename = function (oldPath, newPath, cb) {
        this._rpc('rename', arguments);
    };
    WorkerFS.prototype.stat = function (p, isLstat, cb) {
        this._rpc('stat', arguments);
    };
    WorkerFS.prototype.open = function (p, flag, mode, cb) {
        this._rpc('open', arguments);
    };
    WorkerFS.prototype.unlink = function (p, cb) {
        this._rpc('unlink', arguments);
    };
    WorkerFS.prototype.rmdir = function (p, cb) {
        this._rpc('rmdir', arguments);
    };
    WorkerFS.prototype.mkdir = function (p, mode, cb) {
        this._rpc('mkdir', arguments);
    };
    WorkerFS.prototype.readdir = function (p, cb) {
        this._rpc('readdir', arguments);
    };
    WorkerFS.prototype.exists = function (p, cb) {
        this._rpc('exists', arguments);
    };
    WorkerFS.prototype.realpath = function (p, cache, cb) {
        this._rpc('realpath', arguments);
    };
    WorkerFS.prototype.truncate = function (p, len, cb) {
        this._rpc('truncate', arguments);
    };
    WorkerFS.prototype.readFile = function (fname, encoding, flag, cb) {
        this._rpc('readFile', arguments);
    };
    WorkerFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('writeFile', arguments);
    };
    WorkerFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('appendFile', arguments);
    };
    WorkerFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        this._rpc('chmod', arguments);
    };
    WorkerFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        this._rpc('chown', arguments);
    };
    WorkerFS.prototype.utimes = function (p, atime, mtime, cb) {
        this._rpc('utimes', arguments);
    };
    WorkerFS.prototype.link = function (srcpath, dstpath, cb) {
        this._rpc('link', arguments);
    };
    WorkerFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        this._rpc('symlink', arguments);
    };
    WorkerFS.prototype.readlink = function (p, cb) {
        this._rpc('readlink', arguments);
    };
    WorkerFS.prototype.syncClose = function (method, fd, cb) {
        this._worker.postMessage({
            browserfsMessage: true,
            method: method,
            args: [fd.toRemoteArg(), this._callbackConverter.toRemoteArg(cb)]
        });
    };
    WorkerFS.attachRemoteListener = function (worker) {
        var fdConverter = new FileDescriptorArgumentConverter();
        function argLocal2Remote(arg, requestArgs, cb) {
            switch (typeof arg) {
                case 'object':
                    if (arg instanceof node_fs_stats_1["default"]) {
                        cb(null, statsLocal2Remote(arg));
                    }
                    else if (arg instanceof api_error_1.ApiError) {
                        cb(null, apiErrorLocal2Remote(arg));
                    }
                    else if (arg instanceof file.BaseFile) {
                        cb(null, fdConverter.toRemoteArg(arg, requestArgs[0], requestArgs[1], cb));
                    }
                    else if (arg instanceof file_flag.FileFlag) {
                        cb(null, fileFlagLocal2Remote(arg));
                    }
                    else if (arg instanceof Buffer) {
                        cb(null, bufferLocal2Remote(arg));
                    }
                    else if (arg instanceof Error) {
                        cb(null, errorLocal2Remote(arg));
                    }
                    else {
                        cb(null, arg);
                    }
                    break;
                default:
                    cb(null, arg);
                    break;
            }
        }
        function argRemote2Local(arg, fixedRequestArgs) {
            if (arg == null) {
                return arg;
            }
            switch (typeof arg) {
                case 'object':
                    if (typeof arg['type'] === 'number') {
                        var specialArg = arg;
                        switch (specialArg.type) {
                            case SpecialArgType.CB:
                                var cbId = arg.id;
                                return function () {
                                    var i, fixedArgs = new Array(arguments.length), message, countdown = arguments.length;
                                    function abortAndSendError(err) {
                                        if (countdown > 0) {
                                            countdown = -1;
                                            message = {
                                                browserfsMessage: true,
                                                cbId: cbId,
                                                args: [apiErrorLocal2Remote(err)]
                                            };
                                            worker.postMessage(message);
                                        }
                                    }
                                    for (i = 0; i < arguments.length; i++) {
                                        (function (i, arg) {
                                            argLocal2Remote(arg, fixedRequestArgs, function (err, fixedArg) {
                                                fixedArgs[i] = fixedArg;
                                                if (err) {
                                                    abortAndSendError(err);
                                                }
                                                else if (--countdown === 0) {
                                                    message = {
                                                        browserfsMessage: true,
                                                        cbId: cbId,
                                                        args: fixedArgs
                                                    };
                                                    worker.postMessage(message);
                                                }
                                            });
                                        })(i, arguments[i]);
                                    }
                                    if (arguments.length === 0) {
                                        message = {
                                            browserfsMessage: true,
                                            cbId: cbId,
                                            args: fixedArgs
                                        };
                                        worker.postMessage(message);
                                    }
                                };
                            case SpecialArgType.API_ERROR:
                                return apiErrorRemote2Local(specialArg);
                            case SpecialArgType.STATS:
                                return statsRemote2Local(specialArg);
                            case SpecialArgType.FILEFLAG:
                                return fileFlagRemote2Local(specialArg);
                            case SpecialArgType.BUFFER:
                                return bufferRemote2Local(specialArg);
                            case SpecialArgType.ERROR:
                                return errorRemote2Local(specialArg);
                            default:
                                return arg;
                        }
                    }
                    else {
                        return arg;
                    }
                default:
                    return arg;
            }
        }
        worker.addEventListener('message', function (e) {
            var request = e.data;
            if (isAPIRequest(request)) {
                var args = request.args, fixedArgs = new Array(args.length), i;
                switch (request.method) {
                    case 'close':
                    case 'sync':
                        (function () {
                            var remoteCb = args[1];
                            fdConverter.applyFdAPIRequest(request, function (err) {
                                var response = {
                                    browserfsMessage: true,
                                    cbId: remoteCb.id,
                                    args: err ? [apiErrorLocal2Remote(err)] : []
                                };
                                worker.postMessage(response);
                            });
                        })();
                        break;
                    case 'probe':
                        (function () {
                            var rootFs = fs.getRootFS(), remoteCb = args[1], probeResponse = {
                                type: SpecialArgType.PROBE,
                                isReadOnly: rootFs.isReadOnly(),
                                supportsLinks: rootFs.supportsLinks(),
                                supportsProps: rootFs.supportsProps()
                            }, response = {
                                browserfsMessage: true,
                                cbId: remoteCb.id,
                                args: [probeResponse]
                            };
                            worker.postMessage(response);
                        })();
                        break;
                    default:
                        for (i = 0; i < args.length; i++) {
                            fixedArgs[i] = argRemote2Local(args[i], fixedArgs);
                        }
                        var rootFS = fs.getRootFS();
                        rootFS[request.method].apply(rootFS, fixedArgs);
                        break;
                }
            }
        });
    };
    return WorkerFS;
}(file_system.BaseFileSystem));
exports.__esModule = true;
exports["default"] = WorkerFS;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/file":54,"../core/file_flag":55,"../core/file_system":56,"../core/global":57,"../core/node_fs":58,"../core/node_fs_stats":59,"../core/util":60,"../generic/preload_file":67,"bfs-buffer":2}],47:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var file_flag_1 = _dereq_('../core/file_flag');
var util_1 = _dereq_('../core/util');
var preload_file = _dereq_('../generic/preload_file');
var xhr = _dereq_('../generic/xhr');
var file_index_1 = _dereq_('../generic/file_index');
function tryToString(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
var XmlHttpRequest = (function (_super) {
    __extends(XmlHttpRequest, _super);
    function XmlHttpRequest(listingUrlOrObj, prefixUrl) {
        if (prefixUrl === void 0) { prefixUrl = ''; }
        _super.call(this);
        if (!listingUrlOrObj) {
            listingUrlOrObj = 'index.json';
        }
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        this.prefixUrl = prefixUrl;
        var listing = null;
        if (typeof (listingUrlOrObj) === "string") {
            listing = this._requestFileSync(listingUrlOrObj, 'json');
            if (!listing) {
                throw new Error("Unable to find listing at URL: ${listingUrlOrObj}");
            }
        }
        else {
            listing = listingUrlOrObj;
        }
        this._index = file_index_1.FileIndex.fromListing(listing);
    }
    XmlHttpRequest.prototype.empty = function () {
        this._index.fileIterator(function (file) {
            file.file_data = null;
        });
    };
    XmlHttpRequest.prototype.getXhrPath = function (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    XmlHttpRequest.prototype._requestFileSizeAsync = function (path, cb) {
        xhr.getFileSizeAsync(this.getXhrPath(path), cb);
    };
    XmlHttpRequest.prototype._requestFileSizeSync = function (path) {
        return xhr.getFileSizeSync(this.getXhrPath(path));
    };
    XmlHttpRequest.prototype._requestFileAsync = function (p, type, cb) {
        xhr.asyncDownloadFile(this.getXhrPath(p), type, cb);
    };
    XmlHttpRequest.prototype._requestFileSync = function (p, type) {
        return xhr.syncDownloadFile(this.getXhrPath(p), type);
    };
    XmlHttpRequest.prototype.getName = function () {
        return 'XmlHttpRequest';
    };
    XmlHttpRequest.isAvailable = function () {
        return typeof XMLHttpRequest !== "undefined" && XMLHttpRequest !== null;
    };
    XmlHttpRequest.prototype.diskSpace = function (path, cb) {
        cb(0, 0);
    };
    XmlHttpRequest.prototype.isReadOnly = function () {
        return true;
    };
    XmlHttpRequest.prototype.supportsLinks = function () {
        return false;
    };
    XmlHttpRequest.prototype.supportsProps = function () {
        return false;
    };
    XmlHttpRequest.prototype.supportsSynch = function () {
        return true;
    };
    XmlHttpRequest.prototype.preloadFile = function (path, buffer) {
        var inode = this._index.getInode(path);
        if (file_index_1.isFileInode(inode)) {
            if (inode === null) {
                throw api_error_1.ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.file_data = buffer;
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    XmlHttpRequest.prototype.stat = function (path, isLstat, cb) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(api_error_1.ApiError.ENOENT(path));
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData();
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    stats.size = size;
                    cb(null, stats.clone());
                });
            }
            else {
                cb(null, stats.clone());
            }
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, path));
        }
    };
    XmlHttpRequest.prototype.statSync = function (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData();
            if (stats.size < 0) {
                stats.size = this._requestFileSizeSync(path);
            }
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, path);
        }
        return stats;
    };
    XmlHttpRequest.prototype.open = function (path, flags, mode, cb) {
        if (flags.isWriteable()) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path));
        }
        var _this = this;
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(api_error_1.ApiError.ENOENT(path));
        }
        if (file_index_1.isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    return cb(api_error_1.ApiError.EEXIST(path));
                case file_flag_1.ActionType.NOP:
                    if (stats.file_data != null) {
                        return cb(null, new preload_file.NoSyncFile(_this, path, flags, stats.clone(), stats.file_data));
                    }
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        stats.size = buffer.length;
                        stats.file_data = buffer;
                        return cb(null, new preload_file.NoSyncFile(_this, path, flags, stats.clone(), buffer));
                    });
                    break;
                default:
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(api_error_1.ApiError.EISDIR(path));
        }
    };
    XmlHttpRequest.prototype.openSync = function (path, flags, mode) {
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        if (file_index_1.isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(path);
                case file_flag_1.ActionType.NOP:
                    if (stats.file_data != null) {
                        return new preload_file.NoSyncFile(this, path, flags, stats.clone(), stats.file_data);
                    }
                    var buffer = this._requestFileSync(path, 'buffer');
                    stats.size = buffer.length;
                    stats.file_data = buffer;
                    return new preload_file.NoSyncFile(this, path, flags, stats.clone(), buffer);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    XmlHttpRequest.prototype.readdir = function (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    XmlHttpRequest.prototype.readdirSync = function (path) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    XmlHttpRequest.prototype.readFile = function (fname, encoding, flag, cb) {
        var oldCb = cb;
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err, arg) {
                fd.close(function (err2) {
                    if (err == null) {
                        err = err2;
                    }
                    return oldCb(err, arg);
                });
            };
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                cb(err, util_1.copyingSlice(fdBuff));
            }
            else {
                tryToString(fdBuff, encoding, cb);
            }
        });
    };
    XmlHttpRequest.prototype.readFileSync = function (fname, encoding, flag) {
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return util_1.copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    return XmlHttpRequest;
}(file_system.BaseFileSystem));
exports.__esModule = true;
exports["default"] = XmlHttpRequest;

},{"../core/api_error":51,"../core/file_flag":55,"../core/file_system":56,"../core/util":60,"../generic/file_index":62,"../generic/preload_file":67,"../generic/xhr":68}],48:[function(_dereq_,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var api_error_1 = _dereq_('../core/api_error');
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var file_system = _dereq_('../core/file_system');
var file_flag_1 = _dereq_('../core/file_flag');
var preload_file = _dereq_('../generic/preload_file');
var util_1 = _dereq_('../core/util');
var extended_ascii_1 = _dereq_('bfs-buffer/js/extended_ascii');
var inflateRaw = _dereq_('pako/dist/pako_inflate.min').inflateRaw;
var file_index_1 = _dereq_('../generic/file_index');
(function (ExternalFileAttributeType) {
    ExternalFileAttributeType[ExternalFileAttributeType["MSDOS"] = 0] = "MSDOS";
    ExternalFileAttributeType[ExternalFileAttributeType["AMIGA"] = 1] = "AMIGA";
    ExternalFileAttributeType[ExternalFileAttributeType["OPENVMS"] = 2] = "OPENVMS";
    ExternalFileAttributeType[ExternalFileAttributeType["UNIX"] = 3] = "UNIX";
    ExternalFileAttributeType[ExternalFileAttributeType["VM_CMS"] = 4] = "VM_CMS";
    ExternalFileAttributeType[ExternalFileAttributeType["ATARI_ST"] = 5] = "ATARI_ST";
    ExternalFileAttributeType[ExternalFileAttributeType["OS2_HPFS"] = 6] = "OS2_HPFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MAC"] = 7] = "MAC";
    ExternalFileAttributeType[ExternalFileAttributeType["Z_SYSTEM"] = 8] = "Z_SYSTEM";
    ExternalFileAttributeType[ExternalFileAttributeType["CP_M"] = 9] = "CP_M";
    ExternalFileAttributeType[ExternalFileAttributeType["NTFS"] = 10] = "NTFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MVS"] = 11] = "MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["VSE"] = 12] = "VSE";
    ExternalFileAttributeType[ExternalFileAttributeType["ACORN_RISC"] = 13] = "ACORN_RISC";
    ExternalFileAttributeType[ExternalFileAttributeType["VFAT"] = 14] = "VFAT";
    ExternalFileAttributeType[ExternalFileAttributeType["ALT_MVS"] = 15] = "ALT_MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["BEOS"] = 16] = "BEOS";
    ExternalFileAttributeType[ExternalFileAttributeType["TANDEM"] = 17] = "TANDEM";
    ExternalFileAttributeType[ExternalFileAttributeType["OS_400"] = 18] = "OS_400";
    ExternalFileAttributeType[ExternalFileAttributeType["OSX"] = 19] = "OSX";
})(exports.ExternalFileAttributeType || (exports.ExternalFileAttributeType = {}));
var ExternalFileAttributeType = exports.ExternalFileAttributeType;
(function (CompressionMethod) {
    CompressionMethod[CompressionMethod["STORED"] = 0] = "STORED";
    CompressionMethod[CompressionMethod["SHRUNK"] = 1] = "SHRUNK";
    CompressionMethod[CompressionMethod["REDUCED_1"] = 2] = "REDUCED_1";
    CompressionMethod[CompressionMethod["REDUCED_2"] = 3] = "REDUCED_2";
    CompressionMethod[CompressionMethod["REDUCED_3"] = 4] = "REDUCED_3";
    CompressionMethod[CompressionMethod["REDUCED_4"] = 5] = "REDUCED_4";
    CompressionMethod[CompressionMethod["IMPLODE"] = 6] = "IMPLODE";
    CompressionMethod[CompressionMethod["DEFLATE"] = 8] = "DEFLATE";
    CompressionMethod[CompressionMethod["DEFLATE64"] = 9] = "DEFLATE64";
    CompressionMethod[CompressionMethod["TERSE_OLD"] = 10] = "TERSE_OLD";
    CompressionMethod[CompressionMethod["BZIP2"] = 12] = "BZIP2";
    CompressionMethod[CompressionMethod["LZMA"] = 14] = "LZMA";
    CompressionMethod[CompressionMethod["TERSE_NEW"] = 18] = "TERSE_NEW";
    CompressionMethod[CompressionMethod["LZ77"] = 19] = "LZ77";
    CompressionMethod[CompressionMethod["WAVPACK"] = 97] = "WAVPACK";
    CompressionMethod[CompressionMethod["PPMD"] = 98] = "PPMD";
})(exports.CompressionMethod || (exports.CompressionMethod = {}));
var CompressionMethod = exports.CompressionMethod;
function msdos2date(time, date) {
    var day = date & 0x1F;
    var month = ((date >> 5) & 0xF) - 1;
    var year = (date >> 9) + 1980;
    var second = time & 0x1F;
    var minute = (time >> 5) & 0x3F;
    var hour = time >> 11;
    return new Date(year, month, day, hour, minute, second);
}
function safeToString(buff, useUTF8, start, length) {
    if (length === 0) {
        return "";
    }
    else if (useUTF8) {
        return buff.toString('utf8', start, start + length);
    }
    else {
        return extended_ascii_1["default"].byte2str(buff.slice(start, start + length));
    }
}
var FileHeader = (function () {
    function FileHeader(data) {
        this.data = data;
        if (data.readUInt32LE(0) !== 0x04034b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0));
        }
    }
    FileHeader.prototype.versionNeeded = function () { return this.data.readUInt16LE(4); };
    FileHeader.prototype.flags = function () { return this.data.readUInt16LE(6); };
    FileHeader.prototype.compressionMethod = function () { return this.data.readUInt16LE(8); };
    FileHeader.prototype.lastModFileTime = function () {
        return msdos2date(this.data.readUInt16LE(10), this.data.readUInt16LE(12));
    };
    FileHeader.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(10);
    };
    FileHeader.prototype.crc32 = function () { return this.data.readUInt32LE(14); };
    FileHeader.prototype.fileNameLength = function () { return this.data.readUInt16LE(26); };
    FileHeader.prototype.extraFieldLength = function () { return this.data.readUInt16LE(28); };
    FileHeader.prototype.fileName = function () {
        return safeToString(this.data, this.useUTF8(), 30, this.fileNameLength());
    };
    FileHeader.prototype.extraField = function () {
        var start = 30 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    FileHeader.prototype.totalSize = function () { return 30 + this.fileNameLength() + this.extraFieldLength(); };
    FileHeader.prototype.useUTF8 = function () { return (this.flags() & 0x800) === 0x800; };
    return FileHeader;
}());
exports.FileHeader = FileHeader;
var FileData = (function () {
    function FileData(header, record, data) {
        this.header = header;
        this.record = record;
        this.data = data;
    }
    FileData.prototype.decompress = function () {
        var compressionMethod = this.header.compressionMethod();
        switch (compressionMethod) {
            case CompressionMethod.DEFLATE:
                var data = inflateRaw(util_1.buffer2Arrayish(this.data.slice(0, this.record.compressedSize())), { chunkSize: this.record.uncompressedSize() });
                return util_1.arrayish2Buffer(data);
            case CompressionMethod.STORED:
                return util_1.copyingSlice(this.data, 0, this.record.uncompressedSize());
            default:
                var name = CompressionMethod[compressionMethod];
                name = name ? name : "Unknown: " + compressionMethod;
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid compression method on file '" + this.header.fileName() + "': " + name);
        }
    };
    FileData.prototype.getHeader = function () {
        return this.header;
    };
    FileData.prototype.getRecord = function () {
        return this.record;
    };
    FileData.prototype.getRawData = function () {
        return this.data;
    };
    return FileData;
}());
exports.FileData = FileData;
var DataDescriptor = (function () {
    function DataDescriptor(data) {
        this.data = data;
    }
    DataDescriptor.prototype.crc32 = function () { return this.data.readUInt32LE(0); };
    DataDescriptor.prototype.compressedSize = function () { return this.data.readUInt32LE(4); };
    DataDescriptor.prototype.uncompressedSize = function () { return this.data.readUInt32LE(8); };
    return DataDescriptor;
}());
exports.DataDescriptor = DataDescriptor;
var ArchiveExtraDataRecord = (function () {
    function ArchiveExtraDataRecord(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x08064b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid archive extra data record signature: " + this.data.readUInt32LE(0));
        }
    }
    ArchiveExtraDataRecord.prototype.length = function () { return this.data.readUInt32LE(4); };
    ArchiveExtraDataRecord.prototype.extraFieldData = function () { return this.data.slice(8, 8 + this.length()); };
    return ArchiveExtraDataRecord;
}());
exports.ArchiveExtraDataRecord = ArchiveExtraDataRecord;
var DigitalSignature = (function () {
    function DigitalSignature(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x05054b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid digital signature signature: " + this.data.readUInt32LE(0));
        }
    }
    DigitalSignature.prototype.size = function () { return this.data.readUInt16LE(4); };
    DigitalSignature.prototype.signatureData = function () { return this.data.slice(6, 6 + this.size()); };
    return DigitalSignature;
}());
exports.DigitalSignature = DigitalSignature;
var CentralDirectory = (function () {
    function CentralDirectory(zipData, data) {
        this.zipData = zipData;
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x02014b50)
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Central directory record has invalid signature: " + this.data.readUInt32LE(0));
        this._filename = this.produceFilename();
    }
    CentralDirectory.prototype.versionMadeBy = function () { return this.data.readUInt16LE(4); };
    CentralDirectory.prototype.versionNeeded = function () { return this.data.readUInt16LE(6); };
    CentralDirectory.prototype.flag = function () { return this.data.readUInt16LE(8); };
    CentralDirectory.prototype.compressionMethod = function () { return this.data.readUInt16LE(10); };
    CentralDirectory.prototype.lastModFileTime = function () {
        return msdos2date(this.data.readUInt16LE(12), this.data.readUInt16LE(14));
    };
    CentralDirectory.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(12);
    };
    CentralDirectory.prototype.crc32 = function () { return this.data.readUInt32LE(16); };
    CentralDirectory.prototype.compressedSize = function () { return this.data.readUInt32LE(20); };
    CentralDirectory.prototype.uncompressedSize = function () { return this.data.readUInt32LE(24); };
    CentralDirectory.prototype.fileNameLength = function () { return this.data.readUInt16LE(28); };
    CentralDirectory.prototype.extraFieldLength = function () { return this.data.readUInt16LE(30); };
    CentralDirectory.prototype.fileCommentLength = function () { return this.data.readUInt16LE(32); };
    CentralDirectory.prototype.diskNumberStart = function () { return this.data.readUInt16LE(34); };
    CentralDirectory.prototype.internalAttributes = function () { return this.data.readUInt16LE(36); };
    CentralDirectory.prototype.externalAttributes = function () { return this.data.readUInt32LE(38); };
    CentralDirectory.prototype.headerRelativeOffset = function () { return this.data.readUInt32LE(42); };
    CentralDirectory.prototype.produceFilename = function () {
        var fileName = safeToString(this.data, this.useUTF8(), 46, this.fileNameLength());
        return fileName.replace(/\\/g, "/");
    };
    CentralDirectory.prototype.fileName = function () {
        return this._filename;
    };
    CentralDirectory.prototype.rawFileName = function () {
        return this.data.slice(46, 46 + this.fileNameLength());
    };
    CentralDirectory.prototype.extraField = function () {
        var start = 44 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    CentralDirectory.prototype.fileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return safeToString(this.data, this.useUTF8(), start, this.fileCommentLength());
    };
    CentralDirectory.prototype.rawFileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return this.data.slice(start, start + this.fileCommentLength());
    };
    CentralDirectory.prototype.totalSize = function () {
        return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength();
    };
    CentralDirectory.prototype.isDirectory = function () {
        var fileName = this.fileName();
        return (this.externalAttributes() & 0x10 ? true : false) || (fileName.charAt(fileName.length - 1) === '/');
    };
    CentralDirectory.prototype.isFile = function () { return !this.isDirectory(); };
    CentralDirectory.prototype.useUTF8 = function () { return (this.flag() & 0x800) === 0x800; };
    CentralDirectory.prototype.isEncrypted = function () { return (this.flag() & 0x1) === 0x1; };
    CentralDirectory.prototype.getFileData = function () {
        var start = this.headerRelativeOffset();
        var header = new FileHeader(this.zipData.slice(start));
        return new FileData(header, this, this.zipData.slice(start + header.totalSize()));
    };
    CentralDirectory.prototype.getData = function () {
        return this.getFileData().decompress();
    };
    CentralDirectory.prototype.getRawData = function () {
        return this.getFileData().getRawData();
    };
    CentralDirectory.prototype.getStats = function () {
        return new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, this.uncompressedSize(), 0x16D, new Date(), this.lastModFileTime());
    };
    return CentralDirectory;
}());
exports.CentralDirectory = CentralDirectory;
var EndOfCentralDirectory = (function () {
    function EndOfCentralDirectory(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x06054b50)
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: End of central directory record has invalid signature: " + this.data.readUInt32LE(0));
    }
    EndOfCentralDirectory.prototype.diskNumber = function () { return this.data.readUInt16LE(4); };
    EndOfCentralDirectory.prototype.cdDiskNumber = function () { return this.data.readUInt16LE(6); };
    EndOfCentralDirectory.prototype.cdDiskEntryCount = function () { return this.data.readUInt16LE(8); };
    EndOfCentralDirectory.prototype.cdTotalEntryCount = function () { return this.data.readUInt16LE(10); };
    EndOfCentralDirectory.prototype.cdSize = function () { return this.data.readUInt32LE(12); };
    EndOfCentralDirectory.prototype.cdOffset = function () { return this.data.readUInt32LE(16); };
    EndOfCentralDirectory.prototype.cdZipCommentLength = function () { return this.data.readUInt16LE(20); };
    EndOfCentralDirectory.prototype.cdZipComment = function () {
        return safeToString(this.data, true, 22, this.cdZipCommentLength());
    };
    EndOfCentralDirectory.prototype.rawCdZipComment = function () {
        return this.data.slice(22, 22 + this.cdZipCommentLength());
    };
    return EndOfCentralDirectory;
}());
exports.EndOfCentralDirectory = EndOfCentralDirectory;
var ZipTOC = (function () {
    function ZipTOC(index, directoryEntries, eocd, data) {
        this.index = index;
        this.directoryEntries = directoryEntries;
        this.eocd = eocd;
        this.data = data;
    }
    return ZipTOC;
}());
exports.ZipTOC = ZipTOC;
var ZipFS = (function (_super) {
    __extends(ZipFS, _super);
    function ZipFS(input, name) {
        if (name === void 0) { name = ''; }
        _super.call(this);
        this.input = input;
        this.name = name;
        this._index = new file_index_1.FileIndex();
        this._directoryEntries = [];
        this._eocd = null;
        if (input instanceof ZipTOC) {
            this._index = input.index;
            this._directoryEntries = input.directoryEntries;
            this._eocd = input.eocd;
            this.data = input.data;
        }
        else {
            this.data = input;
            this.populateIndex();
        }
    }
    ZipFS.prototype.getName = function () {
        return 'ZipFS' + (this.name !== '' ? ' ' + this.name : '');
    };
    ZipFS.prototype.getCentralDirectoryEntry = function (path) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        if (file_index_1.isFileInode(inode)) {
            return inode.getData();
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getData();
        }
    };
    ZipFS.prototype.getCentralDirectoryEntryAt = function (index) {
        var dirEntry = this._directoryEntries[index];
        if (!dirEntry) {
            throw new RangeError("Invalid directory index: " + index + ".");
        }
        return dirEntry;
    };
    ZipFS.prototype.getNumberOfCentralDirectoryEntries = function () {
        return this._directoryEntries.length;
    };
    ZipFS.prototype.getEndOfCentralDirectory = function () {
        return this._eocd;
    };
    ZipFS.isAvailable = function () { return true; };
    ZipFS.prototype.diskSpace = function (path, cb) {
        cb(this.data.length, 0);
    };
    ZipFS.prototype.isReadOnly = function () {
        return true;
    };
    ZipFS.prototype.supportsLinks = function () {
        return false;
    };
    ZipFS.prototype.supportsProps = function () {
        return false;
    };
    ZipFS.prototype.supportsSynch = function () {
        return true;
    };
    ZipFS.prototype.statSync = function (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        var stats;
        if (file_index_1.isFileInode(inode)) {
            stats = inode.getData().getStats();
        }
        else if (file_index_1.isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid inode.");
        }
        return stats;
    };
    ZipFS.prototype.openSync = function (path, flags, mode) {
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isFileInode(inode)) {
            var cdRecord = inode.getData();
            var stats = cdRecord.getStats();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(path);
                case file_flag_1.ActionType.NOP:
                    return new preload_file.NoSyncFile(this, path, flags, stats, cdRecord.getData());
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    ZipFS.prototype.readdirSync = function (path) {
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (file_index_1.isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    ZipFS.prototype.readFileSync = function (fname, encoding, flag) {
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return util_1.copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    ZipFS.getEOCD = function (data) {
        var startOffset = 22;
        var endOffset = Math.min(startOffset + 0xFFFF, data.length - 1);
        for (var i = startOffset; i < endOffset; i++) {
            if (data.readUInt32LE(data.length - i) === 0x06054b50) {
                return new EndOfCentralDirectory(data.slice(data.length - i));
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.");
    };
    ZipFS.addToIndex = function (cd, index) {
        var filename = cd.fileName();
        if (filename.charAt(0) === '/')
            throw new Error("WHY IS THIS ABSOLUTE");
        if (filename.charAt(filename.length - 1) === '/') {
            filename = filename.substr(0, filename.length - 1);
        }
        if (cd.isDirectory()) {
            index.addPathFast('/' + filename, new file_index_1.DirInode(cd));
        }
        else {
            index.addPathFast('/' + filename, new file_index_1.FileInode(cd));
        }
    };
    ZipFS.computeIndexResponsive = function (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        if (cdPtr < cdEnd) {
            var count = 0;
            while (count++ < 200 && cdPtr < cdEnd) {
                var cd = new CentralDirectory(data, data.slice(cdPtr));
                ZipFS.addToIndex(cd, index);
                cdPtr += cd.totalSize();
                cdEntries.push(cd);
            }
            setImmediate(function () {
                ZipFS.computeIndexResponsive(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
            });
        }
        else {
            cb(new ZipTOC(index, cdEntries, eocd, data));
        }
    };
    ZipFS.computeIndex = function (data, cb) {
        var index = new file_index_1.FileIndex();
        var eocd = ZipFS.getEOCD(data);
        if (eocd.diskNumber() !== eocd.cdDiskNumber())
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support spanned zip files.");
        var cdPtr = eocd.cdOffset();
        if (cdPtr === 0xFFFFFFFF)
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support Zip64.");
        var cdEnd = cdPtr + eocd.cdSize();
        ZipFS.computeIndexResponsive(data, index, cdPtr, cdEnd, cb, [], eocd);
    };
    ZipFS.prototype.populateIndex = function () {
        var eocd = this._eocd = ZipFS.getEOCD(this.data);
        if (eocd.diskNumber() !== eocd.cdDiskNumber())
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support spanned zip files.");
        var cdPtr = eocd.cdOffset();
        if (cdPtr === 0xFFFFFFFF)
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support Zip64.");
        var cdEnd = cdPtr + eocd.cdSize();
        while (cdPtr < cdEnd) {
            var cd = new CentralDirectory(this.data, this.data.slice(cdPtr));
            cdPtr += cd.totalSize();
            ZipFS.addToIndex(cd, this._index);
            this._directoryEntries.push(cd);
        }
    };
    return ZipFS;
}(file_system.SynchronousFileSystem));
exports.__esModule = true;
exports["default"] = ZipFS;

},{"../core/api_error":51,"../core/file_flag":55,"../core/file_system":56,"../core/node_fs_stats":59,"../core/util":60,"../generic/file_index":62,"../generic/preload_file":67,"bfs-buffer/js/extended_ascii":7,"pako/dist/pako_inflate.min":20}],49:[function(_dereq_,module,exports){
"use strict";
module.exports = _dereq_('./main');

},{"./main":69}],50:[function(_dereq_,module,exports){
(function (Buffer,RELEASE){
"use strict";
var api_error_1 = _dereq_('./api_error');
var file_flag_1 = _dereq_('./file_flag');
var path = _dereq_('path');
var node_fs_stats_1 = _dereq_('./node_fs_stats');
var global = _dereq_('./global');
function wrapCb(cb, numArgs) {
    if (RELEASE) {
        return cb;
    }
    else {
        if (typeof cb !== 'function') {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Callback must be a function.');
        }
        if (typeof __numWaiting === 'undefined') {
            global.__numWaiting = 0;
        }
        __numWaiting++;
        switch (numArgs) {
            case 1:
                return function (arg1) {
                    setImmediate(function () {
                        __numWaiting--;
                        return cb(arg1);
                    });
                };
            case 2:
                return function (arg1, arg2) {
                    setImmediate(function () {
                        __numWaiting--;
                        return cb(arg1, arg2);
                    });
                };
            case 3:
                return function (arg1, arg2, arg3) {
                    setImmediate(function () {
                        __numWaiting--;
                        return cb(arg1, arg2, arg3);
                    });
                };
            default:
                throw new Error('Invalid invocation of wrapCb.');
        }
    }
}
function normalizeMode(mode, def) {
    switch (typeof mode) {
        case 'number':
            return mode;
        case 'string':
            var trueMode = parseInt(mode, 8);
            if (trueMode !== NaN) {
                return trueMode;
            }
        default:
            return def;
    }
}
function normalizeTime(time) {
    if (time instanceof Date) {
        return time;
    }
    else if (typeof time === 'number') {
        return new Date(time * 1000);
    }
    else {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid time.");
    }
}
function normalizePath(p) {
    if (p.indexOf('\u0000') >= 0) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must be a string without null bytes.');
    }
    else if (p === '') {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must not be empty.');
    }
    return path.resolve(p);
}
function normalizeOptions(options, defEnc, defFlag, defMode) {
    switch (typeof options) {
        case 'object':
            return {
                encoding: typeof options['encoding'] !== 'undefined' ? options['encoding'] : defEnc,
                flag: typeof options['flag'] !== 'undefined' ? options['flag'] : defFlag,
                mode: normalizeMode(options['mode'], defMode)
            };
        case 'string':
            return {
                encoding: options,
                flag: defFlag,
                mode: defMode
            };
        default:
            return {
                encoding: defEnc,
                flag: defFlag,
                mode: defMode
            };
    }
}
function nopCb() { }
;
var FS = (function () {
    function FS() {
        this.root = null;
        this.fdMap = {};
        this.nextFd = 100;
        this.F_OK = 0;
        this.R_OK = 4;
        this.W_OK = 2;
        this.X_OK = 1;
        this._wrapCb = wrapCb;
    }
    FS.prototype.getFdForFile = function (file) {
        var fd = this.nextFd++;
        this.fdMap[fd] = file;
        return fd;
    };
    FS.prototype.fd2file = function (fd) {
        var rv = this.fdMap[fd];
        if (rv) {
            return rv;
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, 'Invalid file descriptor.');
        }
    };
    FS.prototype.closeFd = function (fd) {
        delete this.fdMap[fd];
    };
    FS.prototype.initialize = function (rootFS) {
        if (!rootFS.constructor.isAvailable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Tried to instantiate BrowserFS with an unavailable file system.');
        }
        return this.root = rootFS;
    };
    FS.prototype._toUnixTimestamp = function (time) {
        if (typeof time === 'number') {
            return time;
        }
        else if (time instanceof Date) {
            return time.getTime() / 1000;
        }
        throw new Error("Cannot parse time: " + time);
    };
    FS.prototype.getRootFS = function () {
        if (this.root) {
            return this.root;
        }
        else {
            return null;
        }
    };
    FS.prototype.rename = function (oldPath, newPath, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.root.rename(normalizePath(oldPath), normalizePath(newPath), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.renameSync = function (oldPath, newPath) {
        this.root.renameSync(normalizePath(oldPath), normalizePath(newPath));
    };
    FS.prototype.exists = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            return this.root.exists(normalizePath(path), newCb);
        }
        catch (e) {
            return newCb(false);
        }
    };
    FS.prototype.existsSync = function (path) {
        try {
            return this.root.existsSync(normalizePath(path));
        }
        catch (e) {
            return false;
        }
    };
    FS.prototype.stat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return this.root.stat(normalizePath(path), false, newCb);
        }
        catch (e) {
            return newCb(e, null);
        }
    };
    FS.prototype.statSync = function (path) {
        return this.root.statSync(normalizePath(path), false);
    };
    FS.prototype.lstat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return this.root.stat(normalizePath(path), true, newCb);
        }
        catch (e) {
            return newCb(e, null);
        }
    };
    FS.prototype.lstatSync = function (path) {
        return this.root.statSync(normalizePath(path), true);
    };
    FS.prototype.truncate = function (path, arg2, cb) {
        if (arg2 === void 0) { arg2 = 0; }
        if (cb === void 0) { cb = nopCb; }
        var len = 0;
        if (typeof arg2 === 'function') {
            cb = arg2;
        }
        else if (typeof arg2 === 'number') {
            len = arg2;
        }
        var newCb = wrapCb(cb, 1);
        try {
            if (len < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            return this.root.truncate(normalizePath(path), len, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.truncateSync = function (path, len) {
        if (len === void 0) { len = 0; }
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        return this.root.truncateSync(normalizePath(path), len);
    };
    FS.prototype.unlink = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            return this.root.unlink(normalizePath(path), newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.unlinkSync = function (path) {
        return this.root.unlinkSync(normalizePath(path));
    };
    FS.prototype.open = function (path, flag, arg2, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var mode = normalizeMode(arg2, 0x1a4);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            this.root.open(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), mode, function (e, file) {
                if (file) {
                    newCb(e, _this.getFdForFile(file));
                }
                else {
                    newCb(e);
                }
            });
        }
        catch (e) {
            newCb(e, null);
        }
    };
    FS.prototype.openSync = function (path, flag, mode) {
        if (mode === void 0) { mode = 0x1a4; }
        return this.getFdForFile(this.root.openSync(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), normalizeMode(mode, 0x1a4)));
    };
    FS.prototype.readFile = function (filename, arg2, cb) {
        if (arg2 === void 0) { arg2 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg2, null, 'r', null);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options['flag']);
            if (!flag.isReadable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.'));
            }
            return this.root.readFile(normalizePath(filename), options.encoding, flag, newCb);
        }
        catch (e) {
            return newCb(e, null);
        }
    };
    FS.prototype.readFileSync = function (filename, arg2) {
        if (arg2 === void 0) { arg2 = {}; }
        var options = normalizeOptions(arg2, null, 'r', null);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.');
        }
        return this.root.readFileSync(normalizePath(filename), options.encoding, flag);
    };
    FS.prototype.writeFile = function (filename, data, arg3, cb) {
        if (arg3 === void 0) { arg3 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isWriteable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.'));
            }
            return this.root.writeFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.writeFileSync = function (filename, data, arg3) {
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.');
        }
        return this.root.writeFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    FS.prototype.appendFile = function (filename, data, arg3, cb) {
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isAppendable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.'));
            }
            this.root.appendFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.appendFileSync = function (filename, data, arg3) {
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isAppendable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.');
        }
        return this.root.appendFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    FS.prototype.fstat = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            var file = this.fd2file(fd);
            file.stat(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.fstatSync = function (fd) {
        return this.fd2file(fd).statSync();
    };
    FS.prototype.close = function (fd, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).close(function (e) {
                if (!e) {
                    _this.closeFd(fd);
                }
                newCb(e);
            });
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.closeSync = function (fd) {
        this.fd2file(fd).closeSync();
        this.closeFd(fd);
    };
    FS.prototype.ftruncate = function (fd, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var length = typeof arg2 === 'number' ? arg2 : 0;
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (length < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            file.truncate(length, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.ftruncateSync = function (fd, len) {
        if (len === void 0) { len = 0; }
        var file = this.fd2file(fd);
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        file.truncateSync(len);
    };
    FS.prototype.fsync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).sync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.fsyncSync = function (fd) {
        this.fd2file(fd).syncSync();
    };
    FS.prototype.fdatasync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).datasync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.fdatasyncSync = function (fd) {
        this.fd2file(fd).datasyncSync();
    };
    FS.prototype.write = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var buffer, offset, length, position = null;
        if (typeof arg2 === 'string') {
            var encoding = 'utf8';
            switch (typeof arg3) {
                case 'function':
                    cb = arg3;
                    break;
                case 'number':
                    position = arg3;
                    encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
                    cb = typeof arg5 === 'function' ? arg5 : cb;
                    break;
                default:
                    cb = typeof arg4 === 'function' ? arg4 : typeof arg5 === 'function' ? arg5 : cb;
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid arguments.'));
            }
            buffer = new Buffer(arg2, encoding);
            offset = 0;
            length = buffer.length;
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
            cb = typeof arg5 === 'function' ? arg5 : cb;
        }
        var newCb = wrapCb(cb, 3);
        try {
            var file = this.fd2file(fd);
            if (position == null) {
                position = file.getPos();
            }
            file.write(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.writeSync = function (fd, arg2, arg3, arg4, arg5) {
        var buffer, offset = 0, length, position;
        if (typeof arg2 === 'string') {
            position = typeof arg3 === 'number' ? arg3 : null;
            var encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
            offset = 0;
            buffer = new Buffer(arg2, encoding);
            length = buffer.length;
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
        }
        var file = this.fd2file(fd);
        if (position == null) {
            position = file.getPos();
        }
        return file.writeSync(buffer, offset, length, position);
    };
    FS.prototype.read = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var position, offset, length, buffer, newCb;
        if (typeof arg2 === 'number') {
            length = arg2;
            position = arg3;
            var encoding = arg4;
            cb = typeof arg5 === 'function' ? arg5 : cb;
            offset = 0;
            buffer = new Buffer(length);
            newCb = wrapCb((function (err, bytesRead, buf) {
                if (err) {
                    return cb(err);
                }
                cb(err, buf.toString(encoding), bytesRead);
            }), 3);
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
            newCb = wrapCb(cb, 3);
        }
        try {
            var file = this.fd2file(fd);
            if (position == null) {
                position = file.getPos();
            }
            file.read(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.readSync = function (fd, arg2, arg3, arg4, arg5) {
        var shenanigans = false;
        var buffer, offset, length, position;
        if (typeof arg2 === 'number') {
            length = arg2;
            position = arg3;
            var encoding = arg4;
            offset = 0;
            buffer = new Buffer(length);
            shenanigans = true;
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
        }
        var file = this.fd2file(fd);
        if (position == null) {
            position = file.getPos();
        }
        var rv = file.readSync(buffer, offset, length, position);
        if (!shenanigans) {
            return rv;
        }
        else {
            return [buffer.toString(encoding), rv];
        }
    };
    FS.prototype.fchown = function (fd, uid, gid, callback) {
        if (callback === void 0) { callback = nopCb; }
        var newCb = wrapCb(callback, 1);
        try {
            this.fd2file(fd).chown(uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.fchownSync = function (fd, uid, gid) {
        this.fd2file(fd).chownSync(uid, gid);
    };
    FS.prototype.fchmod = function (fd, mode, cb) {
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
            this.fd2file(fd).chmod(numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.fchmodSync = function (fd, mode) {
        var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
        this.fd2file(fd).chmodSync(numMode);
    };
    FS.prototype.futimes = function (fd, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (typeof atime === 'number') {
                atime = new Date(atime * 1000);
            }
            if (typeof mtime === 'number') {
                mtime = new Date(mtime * 1000);
            }
            file.utimes(atime, mtime, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.futimesSync = function (fd, atime, mtime) {
        this.fd2file(fd).utimesSync(normalizeTime(atime), normalizeTime(mtime));
    };
    FS.prototype.rmdir = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            this.root.rmdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.rmdirSync = function (path) {
        path = normalizePath(path);
        return this.root.rmdirSync(path);
    };
    FS.prototype.mkdir = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        if (typeof mode === 'function') {
            cb = mode;
            mode = 0x1ff;
        }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            this.root.mkdir(path, mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.mkdirSync = function (path, mode) {
        this.root.mkdirSync(normalizePath(path), normalizeMode(mode, 0x1ff));
    };
    FS.prototype.readdir = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            this.root.readdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.readdirSync = function (path) {
        path = normalizePath(path);
        return this.root.readdirSync(path);
    };
    FS.prototype.link = function (srcpath, dstpath, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            this.root.link(srcpath, dstpath, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.linkSync = function (srcpath, dstpath) {
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return this.root.linkSync(srcpath, dstpath);
    };
    FS.prototype.symlink = function (srcpath, dstpath, arg3, cb) {
        if (cb === void 0) { cb = nopCb; }
        var type = typeof arg3 === 'string' ? arg3 : 'file';
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            if (type !== 'file' && type !== 'dir') {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type));
            }
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            this.root.symlink(srcpath, dstpath, type, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (type == null) {
            type = 'file';
        }
        else if (type !== 'file' && type !== 'dir') {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type);
        }
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return this.root.symlinkSync(srcpath, dstpath, type);
    };
    FS.prototype.readlink = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            this.root.readlink(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.readlinkSync = function (path) {
        path = normalizePath(path);
        return this.root.readlinkSync(path);
    };
    FS.prototype.chown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            this.root.chown(path, false, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.chownSync = function (path, uid, gid) {
        path = normalizePath(path);
        this.root.chownSync(path, false, uid, gid);
    };
    FS.prototype.lchown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            this.root.chown(path, true, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.lchownSync = function (path, uid, gid) {
        path = normalizePath(path);
        this.root.chownSync(path, true, uid, gid);
    };
    FS.prototype.chmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            this.root.chmod(normalizePath(path), false, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.chmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        path = normalizePath(path);
        this.root.chmodSync(path, false, numMode);
    };
    FS.prototype.lchmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            this.root.chmod(normalizePath(path), true, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.lchmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 1) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        this.root.chmodSync(normalizePath(path), true, numMode);
    };
    FS.prototype.utimes = function (path, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.root.utimes(normalizePath(path), normalizeTime(atime), normalizeTime(mtime), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.utimesSync = function (path, atime, mtime) {
        this.root.utimesSync(normalizePath(path), normalizeTime(atime), normalizeTime(mtime));
    };
    FS.prototype.realpath = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var cache = typeof arg2 === 'object' ? arg2 : {};
        cb = typeof arg2 === 'function' ? arg2 : nopCb;
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            this.root.realpath(path, cache, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.realpathSync = function (path, cache) {
        if (cache === void 0) { cache = {}; }
        path = normalizePath(path);
        return this.root.realpathSync(path, cache);
    };
    FS.prototype.watchFile = function (filename, arg2, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.unwatchFile = function (filename, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.watch = function (filename, arg2, listener) {
        if (listener === void 0) { listener = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.access = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.accessSync = function (path, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createReadStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createWriteStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.Stats = node_fs_stats_1["default"];
    return FS;
}());
exports.__esModule = true;
exports["default"] = FS;
var _ = new FS();

}).call(this,_dereq_('bfs-buffer').Buffer,true)

},{"./api_error":51,"./file_flag":55,"./global":57,"./node_fs_stats":59,"bfs-buffer":2,"path":10}],51:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (ErrorCode) {
    ErrorCode[ErrorCode["EPERM"] = 0] = "EPERM";
    ErrorCode[ErrorCode["ENOENT"] = 1] = "ENOENT";
    ErrorCode[ErrorCode["EIO"] = 2] = "EIO";
    ErrorCode[ErrorCode["EBADF"] = 3] = "EBADF";
    ErrorCode[ErrorCode["EACCES"] = 4] = "EACCES";
    ErrorCode[ErrorCode["EBUSY"] = 5] = "EBUSY";
    ErrorCode[ErrorCode["EEXIST"] = 6] = "EEXIST";
    ErrorCode[ErrorCode["ENOTDIR"] = 7] = "ENOTDIR";
    ErrorCode[ErrorCode["EISDIR"] = 8] = "EISDIR";
    ErrorCode[ErrorCode["EINVAL"] = 9] = "EINVAL";
    ErrorCode[ErrorCode["EFBIG"] = 10] = "EFBIG";
    ErrorCode[ErrorCode["ENOSPC"] = 11] = "ENOSPC";
    ErrorCode[ErrorCode["EROFS"] = 12] = "EROFS";
    ErrorCode[ErrorCode["ENOTEMPTY"] = 13] = "ENOTEMPTY";
    ErrorCode[ErrorCode["ENOTSUP"] = 14] = "ENOTSUP";
})(exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorCode = exports.ErrorCode;
var ErrorStrings = {};
ErrorStrings[ErrorCode.EPERM] = 'Operation not permitted.';
ErrorStrings[ErrorCode.ENOENT] = 'No such file or directory.';
ErrorStrings[ErrorCode.EIO] = 'Input/output error.';
ErrorStrings[ErrorCode.EBADF] = 'Bad file descriptor.';
ErrorStrings[ErrorCode.EACCES] = 'Permission denied.';
ErrorStrings[ErrorCode.EBUSY] = 'Resource busy or locked.';
ErrorStrings[ErrorCode.EEXIST] = 'File exists.';
ErrorStrings[ErrorCode.ENOTDIR] = 'File is not a directory.';
ErrorStrings[ErrorCode.EISDIR] = 'File is a directory.';
ErrorStrings[ErrorCode.EINVAL] = 'Invalid argument.';
ErrorStrings[ErrorCode.EFBIG] = 'File is too big.';
ErrorStrings[ErrorCode.ENOSPC] = 'No space left on disk.';
ErrorStrings[ErrorCode.EROFS] = 'Cannot modify a read-only file system.';
ErrorStrings[ErrorCode.ENOTEMPTY] = 'Directory is not empty.';
ErrorStrings[ErrorCode.ENOTSUP] = 'Operation is not supported.';
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    function ApiError(type, message, path) {
        if (message === void 0) { message = ErrorStrings[type]; }
        if (path === void 0) { path = null; }
        _super.call(this, message);
        this.syscall = "";
        this.errno = type;
        this.code = ErrorCode[type];
        this.path = path;
        this.stack = (new Error()).stack;
        this.message = "Error: " + this.code + ": " + message + (this.path ? ", '" + this.path + "'" : '');
    }
    ApiError.prototype.toString = function () {
        return this.message;
    };
    ApiError.prototype.toJSON = function () {
        return {
            errno: this.errno,
            code: this.code,
            path: this.path,
            stack: this.stack,
            message: this.message
        };
    };
    ApiError.fromJSON = function (json) {
        var err = new ApiError(0);
        err.errno = json.errno;
        err.code = json.code;
        err.path = json.path;
        err.stack = json.stack;
        err.message = json.message;
        return err;
    };
    ApiError.prototype.writeToBuffer = function (buffer, i) {
        if (buffer === void 0) { buffer = new Buffer(this.bufferSize()); }
        if (i === void 0) { i = 0; }
        var bytesWritten = buffer.write(JSON.stringify(this.toJSON()), i + 4);
        buffer.writeUInt32LE(bytesWritten, i);
        return buffer;
    };
    ApiError.fromBuffer = function (buffer, i) {
        if (i === void 0) { i = 0; }
        return ApiError.fromJSON(JSON.parse(buffer.toString('utf8', i + 4, i + 4 + buffer.readUInt32LE(i))));
    };
    ApiError.prototype.bufferSize = function () {
        return 4 + Buffer.byteLength(JSON.stringify(this.toJSON()));
    };
    ApiError.FileError = function (code, p) {
        return new ApiError(code, ErrorStrings[code], p);
    };
    ApiError.ENOENT = function (path) {
        return this.FileError(ErrorCode.ENOENT, path);
    };
    ApiError.EEXIST = function (path) {
        return this.FileError(ErrorCode.EEXIST, path);
    };
    ApiError.EISDIR = function (path) {
        return this.FileError(ErrorCode.EISDIR, path);
    };
    ApiError.ENOTDIR = function (path) {
        return this.FileError(ErrorCode.ENOTDIR, path);
    };
    ApiError.EPERM = function (path) {
        return this.FileError(ErrorCode.EPERM, path);
    };
    ApiError.ENOTEMPTY = function (path) {
        return this.FileError(ErrorCode.ENOTEMPTY, path);
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"bfs-buffer":2}],52:[function(_dereq_,module,exports){
"use strict";
var AsyncMirror_1 = _dereq_('../backend/AsyncMirror');
exports.AsyncMirror = AsyncMirror_1["default"];
var Dropbox_1 = _dereq_('../backend/Dropbox');
exports.Dropbox = Dropbox_1["default"];
var FolderAdapter_1 = _dereq_('../backend/FolderAdapter');
exports.FolderAdapter = FolderAdapter_1["default"];
var HTML5FS_1 = _dereq_('../backend/HTML5FS');
exports.HTML5FS = HTML5FS_1["default"];
var InMemory_1 = _dereq_('../backend/InMemory');
exports.InMemory = InMemory_1["default"];
var IndexedDB_1 = _dereq_('../backend/IndexedDB');
exports.IndexedDB = IndexedDB_1["default"];
var LocalStorage_1 = _dereq_('../backend/LocalStorage');
exports.LocalStorage = LocalStorage_1["default"];
var MountableFileSystem_1 = _dereq_('../backend/MountableFileSystem');
exports.MountableFileSystem = MountableFileSystem_1["default"];
var OverlayFS_1 = _dereq_('../backend/OverlayFS');
exports.OverlayFS = OverlayFS_1["default"];
var WorkerFS_1 = _dereq_('../backend/WorkerFS');
exports.WorkerFS = WorkerFS_1["default"];
var XmlHttpRequest_1 = _dereq_('../backend/XmlHttpRequest');
exports.XmlHttpRequest = XmlHttpRequest_1["default"];
var ZipFS_1 = _dereq_('../backend/ZipFS');
exports.ZipFS = ZipFS_1["default"];

},{"../backend/AsyncMirror":37,"../backend/Dropbox":38,"../backend/FolderAdapter":39,"../backend/HTML5FS":40,"../backend/InMemory":41,"../backend/IndexedDB":42,"../backend/LocalStorage":43,"../backend/MountableFileSystem":44,"../backend/OverlayFS":45,"../backend/WorkerFS":46,"../backend/XmlHttpRequest":47,"../backend/ZipFS":48}],53:[function(_dereq_,module,exports){
(function (process,Buffer){
"use strict";
var buffer = _dereq_('buffer');
var fs = _dereq_('./node_fs');
var path = _dereq_('path');
var emscripten_fs_1 = _dereq_('../generic/emscripten_fs');
exports.EmscriptenFS = emscripten_fs_1["default"];
var FileSystem = _dereq_('./backends');
exports.FileSystem = FileSystem;
var BFSUtils = _dereq_('./util');
if (process['initializeTTYs']) {
    process['initializeTTYs']();
}
function install(obj) {
    obj.Buffer = Buffer;
    obj.process = process;
    var oldRequire = obj.require != null ? obj.require : null;
    obj.require = function (arg) {
        var rv = BFSRequire(arg);
        if (rv == null) {
            return oldRequire.apply(null, Array.prototype.slice.call(arguments, 0));
        }
        else {
            return rv;
        }
    };
}
exports.install = install;
function registerFileSystem(name, fs) {
    FileSystem[name] = fs;
}
exports.registerFileSystem = registerFileSystem;
function BFSRequire(module) {
    switch (module) {
        case 'fs':
            return fs;
        case 'path':
            return path;
        case 'buffer':
            return buffer;
        case 'process':
            return process;
        case 'bfs_utils':
            return BFSUtils;
        default:
            return FileSystem[module];
    }
}
exports.BFSRequire = BFSRequire;
function initialize(rootfs) {
    return fs.initialize(rootfs);
}
exports.initialize = initialize;

}).call(this,_dereq_('bfs-process'),_dereq_('bfs-buffer').Buffer)

},{"../generic/emscripten_fs":61,"./backends":52,"./node_fs":58,"./util":60,"bfs-buffer":2,"bfs-process":11,"buffer":2,"path":10}],54:[function(_dereq_,module,exports){
"use strict";
var api_error_1 = _dereq_('./api_error');
var BaseFile = (function () {
    function BaseFile() {
    }
    BaseFile.prototype.sync = function (cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.syncSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.datasync = function (cb) {
        this.sync(cb);
    };
    BaseFile.prototype.datasyncSync = function () {
        return this.syncSync();
    };
    BaseFile.prototype.chown = function (uid, gid, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.chownSync = function (uid, gid) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.chmod = function (mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.chmodSync = function (mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFile.prototype.utimes = function (atime, mtime, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFile.prototype.utimesSync = function (atime, mtime) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    return BaseFile;
}());
exports.BaseFile = BaseFile;

},{"./api_error":51}],55:[function(_dereq_,module,exports){
"use strict";
var api_error = _dereq_('./api_error');
(function (ActionType) {
    ActionType[ActionType["NOP"] = 0] = "NOP";
    ActionType[ActionType["THROW_EXCEPTION"] = 1] = "THROW_EXCEPTION";
    ActionType[ActionType["TRUNCATE_FILE"] = 2] = "TRUNCATE_FILE";
    ActionType[ActionType["CREATE_FILE"] = 3] = "CREATE_FILE";
})(exports.ActionType || (exports.ActionType = {}));
var ActionType = exports.ActionType;
var FileFlag = (function () {
    function FileFlag(flagStr) {
        this.flagStr = flagStr;
        if (FileFlag.validFlagStrs.indexOf(flagStr) < 0) {
            throw new api_error.ApiError(api_error.ErrorCode.EINVAL, "Invalid flag: " + flagStr);
        }
    }
    FileFlag.getFileFlag = function (flagStr) {
        if (FileFlag.flagCache.hasOwnProperty(flagStr)) {
            return FileFlag.flagCache[flagStr];
        }
        return FileFlag.flagCache[flagStr] = new FileFlag(flagStr);
    };
    FileFlag.prototype.getFlagString = function () {
        return this.flagStr;
    };
    FileFlag.prototype.isReadable = function () {
        return this.flagStr.indexOf('r') !== -1 || this.flagStr.indexOf('+') !== -1;
    };
    FileFlag.prototype.isWriteable = function () {
        return this.flagStr.indexOf('w') !== -1 || this.flagStr.indexOf('a') !== -1 || this.flagStr.indexOf('+') !== -1;
    };
    FileFlag.prototype.isTruncating = function () {
        return this.flagStr.indexOf('w') !== -1;
    };
    FileFlag.prototype.isAppendable = function () {
        return this.flagStr.indexOf('a') !== -1;
    };
    FileFlag.prototype.isSynchronous = function () {
        return this.flagStr.indexOf('s') !== -1;
    };
    FileFlag.prototype.isExclusive = function () {
        return this.flagStr.indexOf('x') !== -1;
    };
    FileFlag.prototype.pathExistsAction = function () {
        if (this.isExclusive()) {
            return ActionType.THROW_EXCEPTION;
        }
        else if (this.isTruncating()) {
            return ActionType.TRUNCATE_FILE;
        }
        else {
            return ActionType.NOP;
        }
    };
    FileFlag.prototype.pathNotExistsAction = function () {
        if ((this.isWriteable() || this.isAppendable()) && this.flagStr !== 'r+') {
            return ActionType.CREATE_FILE;
        }
        else {
            return ActionType.THROW_EXCEPTION;
        }
    };
    FileFlag.flagCache = {};
    FileFlag.validFlagStrs = ['r', 'r+', 'rs', 'rs+', 'w', 'wx', 'w+', 'wx+', 'a', 'ax', 'a+', 'ax+'];
    return FileFlag;
}());
exports.FileFlag = FileFlag;

},{"./api_error":51}],56:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var api_error_1 = _dereq_('./api_error');
var file_flag_1 = _dereq_('./file_flag');
var path = _dereq_('path');
var BaseFileSystem = (function () {
    function BaseFileSystem() {
    }
    BaseFileSystem.prototype.supportsLinks = function () {
        return false;
    };
    BaseFileSystem.prototype.diskSpace = function (p, cb) {
        cb(0, 0);
    };
    BaseFileSystem.prototype.openFile = function (p, flag, cb) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        var must_be_file = function (e, stats) {
            if (e) {
                switch (flag.pathNotExistsAction()) {
                    case file_flag_1.ActionType.CREATE_FILE:
                        return _this.stat(path.dirname(p), false, function (e, parentStats) {
                            if (e) {
                                cb(e);
                            }
                            else if (!parentStats.isDirectory()) {
                                cb(api_error_1.ApiError.ENOTDIR(path.dirname(p)));
                            }
                            else {
                                _this.createFile(p, flag, mode, cb);
                            }
                        });
                    case file_flag_1.ActionType.THROW_EXCEPTION:
                        return cb(api_error_1.ApiError.ENOENT(p));
                    default:
                        return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.'));
                }
            }
            else {
                if (stats.isDirectory()) {
                    return cb(api_error_1.ApiError.EISDIR(p));
                }
                switch (flag.pathExistsAction()) {
                    case file_flag_1.ActionType.THROW_EXCEPTION:
                        return cb(api_error_1.ApiError.EEXIST(p));
                    case file_flag_1.ActionType.TRUNCATE_FILE:
                        return _this.openFile(p, flag, function (e, fd) {
                            if (e) {
                                cb(e);
                            }
                            else {
                                fd.truncate(0, function () {
                                    fd.sync(function () {
                                        cb(null, fd);
                                    });
                                });
                            }
                        });
                    case file_flag_1.ActionType.NOP:
                        return _this.openFile(p, flag, cb);
                    default:
                        return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.'));
                }
            }
        };
        this.stat(p, false, must_be_file);
    };
    BaseFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.renameSync = function (oldPath, newPath) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.stat = function (p, isLstat, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.statSync = function (p, isLstat) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.openFileSync = function (p, flag) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.createFileSync = function (p, flag, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.openSync = function (p, flag, mode) {
        var stats;
        try {
            stats = this.statSync(p, false);
        }
        catch (e) {
            switch (flag.pathNotExistsAction()) {
                case file_flag_1.ActionType.CREATE_FILE:
                    var parentStats = this.statSync(path.dirname(p), false);
                    if (!parentStats.isDirectory()) {
                        throw api_error_1.ApiError.ENOTDIR(path.dirname(p));
                    }
                    return this.createFileSync(p, flag, mode);
                case file_flag_1.ActionType.THROW_EXCEPTION:
                    throw api_error_1.ApiError.ENOENT(p);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.');
            }
        }
        if (stats.isDirectory()) {
            throw api_error_1.ApiError.EISDIR(p);
        }
        switch (flag.pathExistsAction()) {
            case file_flag_1.ActionType.THROW_EXCEPTION:
                throw api_error_1.ApiError.EEXIST(p);
            case file_flag_1.ActionType.TRUNCATE_FILE:
                this.unlinkSync(p);
                return this.createFileSync(p, flag, stats.mode);
            case file_flag_1.ActionType.NOP:
                return this.openFileSync(p, flag);
            default:
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileFlag object.');
        }
    };
    BaseFileSystem.prototype.unlink = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.unlinkSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.rmdir = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.rmdirSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.mkdir = function (p, mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.mkdirSync = function (p, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.readdir = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.readdirSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.exists = function (p, cb) {
        this.stat(p, null, function (err) {
            cb(err == null);
        });
    };
    BaseFileSystem.prototype.existsSync = function (p) {
        try {
            this.statSync(p, true);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    BaseFileSystem.prototype.realpath = function (p, cache, cb) {
        if (this.supportsLinks()) {
            var splitPath = p.split(path.sep);
            for (var i = 0; i < splitPath.length; i++) {
                var addPaths = splitPath.slice(0, i + 1);
                splitPath[i] = path.join.apply(null, addPaths);
            }
        }
        else {
            this.exists(p, function (doesExist) {
                if (doesExist) {
                    cb(null, p);
                }
                else {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
            });
        }
    };
    BaseFileSystem.prototype.realpathSync = function (p, cache) {
        if (this.supportsLinks()) {
            var splitPath = p.split(path.sep);
            for (var i = 0; i < splitPath.length; i++) {
                var addPaths = splitPath.slice(0, i + 1);
                splitPath[i] = path.join.apply(null, addPaths);
            }
        }
        else {
            if (this.existsSync(p)) {
                return p;
            }
            else {
                throw api_error_1.ApiError.ENOENT(p);
            }
        }
    };
    BaseFileSystem.prototype.truncate = function (p, len, cb) {
        this.open(p, file_flag_1.FileFlag.getFileFlag('r+'), 0x1a4, (function (er, fd) {
            if (er) {
                return cb(er);
            }
            fd.truncate(len, (function (er) {
                fd.close((function (er2) {
                    cb(er || er2);
                }));
            }));
        }));
    };
    BaseFileSystem.prototype.truncateSync = function (p, len) {
        var fd = this.openSync(p, file_flag_1.FileFlag.getFileFlag('r+'), 0x1a4);
        try {
            fd.truncateSync(len);
        }
        catch (e) {
            throw e;
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.readFile = function (fname, encoding, flag, cb) {
        var oldCb = cb;
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err, arg) {
                fd.close(function (err2) {
                    if (err == null) {
                        err = err2;
                    }
                    return oldCb(err, arg);
                });
            };
            fd.stat(function (err, stat) {
                if (err != null) {
                    return cb(err);
                }
                var buf = new Buffer(stat.size);
                fd.read(buf, 0, stat.size, 0, function (err) {
                    if (err != null) {
                        return cb(err);
                    }
                    else if (encoding === null) {
                        return cb(err, buf);
                    }
                    try {
                        cb(null, buf.toString(encoding));
                    }
                    catch (e) {
                        cb(e);
                    }
                });
            });
        });
    };
    BaseFileSystem.prototype.readFileSync = function (fname, encoding, flag) {
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var stat = fd.statSync();
            var buf = new Buffer(stat.size);
            fd.readSync(buf, 0, stat.size, 0);
            fd.closeSync();
            if (encoding === null) {
                return buf;
            }
            return buf.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        var oldCb = cb;
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err != null) {
                return cb(err);
            }
            cb = function (err) {
                fd.close(function (err2) {
                    oldCb(err != null ? err : err2);
                });
            };
            try {
                if (typeof data === 'string') {
                    data = new Buffer(data, encoding);
                }
            }
            catch (e) {
                return cb(e);
            }
            fd.write(data, 0, data.length, 0, cb);
        });
    };
    BaseFileSystem.prototype.writeFileSync = function (fname, data, encoding, flag, mode) {
        var fd = this.openSync(fname, flag, mode);
        try {
            if (typeof data === 'string') {
                data = new Buffer(data, encoding);
            }
            fd.writeSync(data, 0, data.length, 0);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        var oldCb = cb;
        this.open(fname, flag, mode, function (err, fd) {
            if (err != null) {
                return cb(err);
            }
            cb = function (err) {
                fd.close(function (err2) {
                    oldCb(err != null ? err : err2);
                });
            };
            if (typeof data === 'string') {
                data = new Buffer(data, encoding);
            }
            fd.write(data, 0, data.length, null, cb);
        });
    };
    BaseFileSystem.prototype.appendFileSync = function (fname, data, encoding, flag, mode) {
        var fd = this.openSync(fname, flag, mode);
        try {
            if (typeof data === 'string') {
                data = new Buffer(data, encoding);
            }
            fd.writeSync(data, 0, data.length, null);
        }
        finally {
            fd.closeSync();
        }
    };
    BaseFileSystem.prototype.chmod = function (p, isLchmod, mode, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.chmodSync = function (p, isLchmod, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.chown = function (p, isLchown, uid, gid, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.chownSync = function (p, isLchown, uid, gid) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.utimes = function (p, atime, mtime, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.utimesSync = function (p, atime, mtime) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.link = function (srcpath, dstpath, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.linkSync = function (srcpath, dstpath) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.symlink = function (srcpath, dstpath, type, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.symlinkSync = function (srcpath, dstpath, type) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    BaseFileSystem.prototype.readlink = function (p, cb) {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP));
    };
    BaseFileSystem.prototype.readlinkSync = function (p) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    return BaseFileSystem;
}());
exports.BaseFileSystem = BaseFileSystem;
var SynchronousFileSystem = (function (_super) {
    __extends(SynchronousFileSystem, _super);
    function SynchronousFileSystem() {
        _super.apply(this, arguments);
    }
    SynchronousFileSystem.prototype.supportsSynch = function () {
        return true;
    };
    SynchronousFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        try {
            this.renameSync(oldPath, newPath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.stat = function (p, isLstat, cb) {
        try {
            cb(null, this.statSync(p, isLstat));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.open = function (p, flags, mode, cb) {
        try {
            cb(null, this.openSync(p, flags, mode));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.unlink = function (p, cb) {
        try {
            this.unlinkSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.rmdir = function (p, cb) {
        try {
            this.rmdirSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.mkdir = function (p, mode, cb) {
        try {
            this.mkdirSync(p, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readdir = function (p, cb) {
        try {
            cb(null, this.readdirSync(p));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chmod = function (p, isLchmod, mode, cb) {
        try {
            this.chmodSync(p, isLchmod, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chown = function (p, isLchown, uid, gid, cb) {
        try {
            this.chownSync(p, isLchown, uid, gid);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.utimes = function (p, atime, mtime, cb) {
        try {
            this.utimesSync(p, atime, mtime);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.link = function (srcpath, dstpath, cb) {
        try {
            this.linkSync(srcpath, dstpath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.symlink = function (srcpath, dstpath, type, cb) {
        try {
            this.symlinkSync(srcpath, dstpath, type);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readlink = function (p, cb) {
        try {
            cb(null, this.readlinkSync(p));
        }
        catch (e) {
            cb(e);
        }
    };
    return SynchronousFileSystem;
}(BaseFileSystem));
exports.SynchronousFileSystem = SynchronousFileSystem;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"./api_error":51,"./file_flag":55,"bfs-buffer":2,"path":10}],57:[function(_dereq_,module,exports){
(function (global){
"use strict";
var toExport;
if (typeof (window) !== 'undefined') {
    toExport = window;
}
else if (typeof (self) !== 'undefined') {
    toExport = self;
}
else {
    toExport = global;
}
module.exports = toExport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],58:[function(_dereq_,module,exports){
"use strict";
var FS_1 = _dereq_('./FS');
var fs = new FS_1["default"]();
var _fsMock = {};
var FSProto = FS_1["default"].prototype;
Object.keys(FSProto).forEach(function (key) {
    if (typeof fs[key] === 'function') {
        _fsMock[key] = function () {
            return fs[key].apply(fs, arguments);
        };
    }
    else {
        _fsMock[key] = fs[key];
    }
});
_fsMock['changeFSModule'] = function (newFs) {
    fs = newFs;
};
_fsMock['getFSModule'] = function () {
    return fs;
};
_fsMock['_wrapCb'] = function (cb, numArgs) {
    return fs._wrapCb(cb, numArgs);
};
_fsMock['FS'] = FS_1["default"];
module.exports = _fsMock;

},{"./FS":50}],59:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(exports.FileType || (exports.FileType = {}));
var FileType = exports.FileType;
var Stats = (function () {
    function Stats(item_type, size, mode, atime, mtime, ctime) {
        if (atime === void 0) { atime = new Date(); }
        if (mtime === void 0) { mtime = new Date(); }
        if (ctime === void 0) { ctime = new Date(); }
        this.size = size;
        this.mode = mode;
        this.atime = atime;
        this.mtime = mtime;
        this.ctime = ctime;
        this.dev = 0;
        this.ino = 0;
        this.rdev = 0;
        this.nlink = 1;
        this.blksize = 4096;
        this.uid = 0;
        this.gid = 0;
        this.birthtime = new Date(0);
        this.file_data = null;
        if (this.mode == null) {
            switch (item_type) {
                case FileType.FILE:
                    this.mode = 0x1a4;
                    break;
                case FileType.DIRECTORY:
                default:
                    this.mode = 0x1ff;
            }
        }
        this.blocks = Math.ceil(size / 512);
        if (this.mode < 0x1000) {
            this.mode |= item_type;
        }
    }
    Stats.prototype.toBuffer = function () {
        var buffer = new Buffer(32);
        buffer.writeUInt32LE(this.size, 0);
        buffer.writeUInt32LE(this.mode, 4);
        buffer.writeDoubleLE(this.atime.getTime(), 8);
        buffer.writeDoubleLE(this.mtime.getTime(), 16);
        buffer.writeDoubleLE(this.ctime.getTime(), 24);
        return buffer;
    };
    Stats.fromBuffer = function (buffer) {
        var size = buffer.readUInt32LE(0), mode = buffer.readUInt32LE(4), atime = buffer.readDoubleLE(8), mtime = buffer.readDoubleLE(16), ctime = buffer.readDoubleLE(24);
        return new Stats(mode & 0xF000, size, mode & 0xFFF, new Date(atime), new Date(mtime), new Date(ctime));
    };
    Stats.prototype.clone = function () {
        return new Stats(this.mode & 0xF000, this.size, this.mode & 0xFFF, this.atime, this.mtime, this.ctime);
    };
    Stats.prototype.isFile = function () {
        return (this.mode & 0xF000) === FileType.FILE;
    };
    Stats.prototype.isDirectory = function () {
        return (this.mode & 0xF000) === FileType.DIRECTORY;
    };
    Stats.prototype.isSymbolicLink = function () {
        return (this.mode & 0xF000) === FileType.SYMLINK;
    };
    Stats.prototype.chmod = function (mode) {
        this.mode = (this.mode & 0xF000) | mode;
    };
    Stats.prototype.isSocket = function () {
        return false;
    };
    Stats.prototype.isBlockDevice = function () {
        return false;
    };
    Stats.prototype.isCharacterDevice = function () {
        return false;
    };
    Stats.prototype.isFIFO = function () {
        return false;
    };
    return Stats;
}());
exports.__esModule = true;
exports["default"] = Stats;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"bfs-buffer":2}],60:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var path = _dereq_('path');
var SUPPORTS_TYPED_ARRAYS = typeof (ArrayBuffer) !== 'undefined';
exports.isIE = typeof navigator !== "undefined" && (/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) != null || navigator.userAgent.indexOf('Trident') !== -1);
exports.isWebWorker = typeof window === "undefined";
function mkdirpSync(p, mode, fs) {
    if (!fs.existsSync(p)) {
        mkdirpSync(path.dirname(p), mode, fs);
        fs.mkdirSync(p, mode);
    }
}
exports.mkdirpSync = mkdirpSync;
function buffer2ArrayBuffer(buff) {
    var u8 = buffer2Uint8array(buff), u8offset = u8.byteOffset, u8Len = u8.byteLength;
    if (u8offset === 0 && u8Len === u8.buffer.byteLength) {
        return u8.buffer;
    }
    else {
        return u8.buffer.slice(u8offset, u8offset + u8Len);
    }
}
exports.buffer2ArrayBuffer = buffer2ArrayBuffer;
function buffer2Uint8array(buff) {
    if (buff['toUint8Array']) {
        return buff.toUint8Array();
    }
    else if (buff instanceof Uint8Array) {
        return buff;
    }
    else {
        return new Uint8Array(buff);
    }
}
exports.buffer2Uint8array = buffer2Uint8array;
function buffer2Arrayish(buff) {
    if (typeof (buff[0]) === 'number') {
        return buff;
    }
    else if (SUPPORTS_TYPED_ARRAYS) {
        return buffer2Uint8array(buff);
    }
    else {
        return buff.toJSON().data;
    }
}
exports.buffer2Arrayish = buffer2Arrayish;
function arrayish2Buffer(arr) {
    if (SUPPORTS_TYPED_ARRAYS && arr instanceof Uint8Array) {
        return uint8Array2Buffer(arr);
    }
    else if (arr instanceof Buffer) {
        return arr;
    }
    else {
        return new Buffer(arr);
    }
}
exports.arrayish2Buffer = arrayish2Buffer;
function uint8Array2Buffer(u8) {
    if (u8.byteOffset === 0 && u8.byteLength === u8.buffer.byteLength) {
        return arrayBuffer2Buffer(u8);
    }
    else {
        return new Buffer(u8);
    }
}
exports.uint8Array2Buffer = uint8Array2Buffer;
function arrayBuffer2Buffer(ab) {
    try {
        return new Buffer(ab);
    }
    catch (e) {
        return new Buffer(new Uint8Array(ab));
    }
}
exports.arrayBuffer2Buffer = arrayBuffer2Buffer;
if (typeof (ArrayBuffer) !== 'undefined' && typeof (Uint8Array) !== 'undefined') {
    if (!Uint8Array.prototype['slice']) {
        Uint8Array.prototype.slice = function (start, end) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = this.length; }
            var self = this;
            if (start < 0) {
                start = this.length + start;
                if (start < 0) {
                    start = 0;
                }
            }
            if (end < 0) {
                end = this.length + end;
                if (end < 0) {
                    end = 0;
                }
            }
            if (end < start) {
                end = start;
            }
            return new Uint8Array(self.buffer, self.byteOffset + start, end - start);
        };
    }
}
function copyingSlice(buff, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = buff.length; }
    if (start < 0 || end < 0 || end > buff.length || start > end) {
        throw new TypeError("Invalid slice bounds on buffer of length " + buff.length + ": [" + start + ", " + end + "]");
    }
    if (buff.length === 0) {
        return new Buffer(0);
    }
    else if (SUPPORTS_TYPED_ARRAYS) {
        var u8 = buffer2Uint8array(buff), s0 = buff.readUInt8(0), newS0 = (s0 + 1) % 0xFF;
        buff.writeUInt8(newS0, 0);
        if (u8[0] === newS0) {
            u8[0] = s0;
            return uint8Array2Buffer(u8.slice(start, end));
        }
        else {
            buff.writeUInt8(s0, 0);
            return uint8Array2Buffer(u8.subarray(start, end));
        }
    }
    else {
        var buffSlice = new Buffer(end - start);
        buff.copy(buffSlice, 0, start, end);
        return buffSlice;
    }
}
exports.copyingSlice = copyingSlice;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"bfs-buffer":2,"path":10}],61:[function(_dereq_,module,exports){
"use strict";
var BrowserFS = _dereq_('../core/browserfs');
var fs = _dereq_('../core/node_fs');
var util_1 = _dereq_('../core/util');
var BFSEmscriptenStreamOps = (function () {
    function BFSEmscriptenStreamOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenStreamOps.prototype.open = function (stream) {
        var path = this.fs.realPath(stream.node), FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode)) {
                stream.nfd = this.nodefs.openSync(path, this.fs.flagsToPermissionString(stream.flags));
            }
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.close = function (stream) {
        var FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
                this.nodefs.closeSync(stream.nfd);
            }
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.read = function (stream, buffer, offset, length, position) {
        try {
            return this.nodefs.readSync(stream.nfd, util_1.uint8Array2Buffer(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.write = function (stream, buffer, offset, length, position) {
        try {
            return this.nodefs.writeSync(stream.nfd, util_1.uint8Array2Buffer(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.llseek = function (stream, offset, whence) {
        var position = offset;
        if (whence === 1) {
            position += stream.position;
        }
        else if (whence === 2) {
            if (this.FS.isFile(stream.node.mode)) {
                try {
                    var stat = this.nodefs.fstatSync(stream.nfd);
                    position += stat.size;
                }
                catch (e) {
                    throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
                }
            }
        }
        if (position < 0) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        stream.position = position;
        return position;
    };
    return BFSEmscriptenStreamOps;
}());
var BFSEmscriptenNodeOps = (function () {
    function BFSEmscriptenNodeOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenNodeOps.prototype.getattr = function (node) {
        var path = this.fs.realPath(node);
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
        };
    };
    BFSEmscriptenNodeOps.prototype.setattr = function (node, attr) {
        var path = this.fs.realPath(node);
        try {
            if (attr.mode !== undefined) {
                this.nodefs.chmodSync(path, attr.mode);
                node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
                var date = new Date(attr.timestamp);
                this.nodefs.utimesSync(path, date, date);
            }
        }
        catch (e) {
            if (!e.code)
                throw e;
            if (e.code !== "ENOTSUP") {
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
        if (attr.size !== undefined) {
            try {
                this.nodefs.truncateSync(path, attr.size);
            }
            catch (e) {
                if (!e.code)
                    throw e;
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
    };
    BFSEmscriptenNodeOps.prototype.lookup = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        var mode = this.fs.getMode(path);
        return this.fs.createNode(parent, name, mode);
    };
    BFSEmscriptenNodeOps.prototype.mknod = function (parent, name, mode, dev) {
        var node = this.fs.createNode(parent, name, mode, dev);
        var path = this.fs.realPath(node);
        try {
            if (this.FS.isDir(node.mode)) {
                this.nodefs.mkdirSync(path, node.mode);
            }
            else {
                this.nodefs.writeFileSync(path, '', { mode: node.mode });
            }
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return node;
    };
    BFSEmscriptenNodeOps.prototype.rename = function (oldNode, newDir, newName) {
        var oldPath = this.fs.realPath(oldNode);
        var newPath = this.PATH.join2(this.fs.realPath(newDir), newName);
        try {
            this.nodefs.renameSync(oldPath, newPath);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.unlink = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.unlinkSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.rmdir = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.rmdirSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readdir = function (node) {
        var path = this.fs.realPath(node);
        try {
            return this.nodefs.readdirSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.symlink = function (parent, newName, oldPath) {
        var newPath = this.PATH.join2(this.fs.realPath(parent), newName);
        try {
            this.nodefs.symlinkSync(oldPath, newPath);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readlink = function (node) {
        var path = this.fs.realPath(node);
        try {
            return this.nodefs.readlinkSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    return BFSEmscriptenNodeOps;
}());
var BFSEmscriptenFS = (function () {
    function BFSEmscriptenFS(_FS, _PATH, _ERRNO_CODES, nodefs) {
        if (_FS === void 0) { _FS = self['FS']; }
        if (_PATH === void 0) { _PATH = self['PATH']; }
        if (_ERRNO_CODES === void 0) { _ERRNO_CODES = self['ERRNO_CODES']; }
        if (nodefs === void 0) { nodefs = fs; }
        this.flagsToPermissionStringMap = {
            0: 'r',
            1: 'r+',
            2: 'r+',
            64: 'r',
            65: 'r+',
            66: 'r+',
            129: 'rx+',
            193: 'rx+',
            514: 'w+',
            577: 'w',
            578: 'w+',
            705: 'wx',
            706: 'wx+',
            1024: 'a',
            1025: 'a',
            1026: 'a+',
            1089: 'a',
            1090: 'a+',
            1153: 'ax',
            1154: 'ax+',
            1217: 'ax',
            1218: 'ax+',
            4096: 'rs',
            4098: 'rs+'
        };
        if (typeof BrowserFS === 'undefined') {
            throw new Error("BrowserFS is not loaded. Please load it before this library.");
        }
        this.nodefs = nodefs;
        this.FS = _FS;
        this.PATH = _PATH;
        this.ERRNO_CODES = _ERRNO_CODES;
        this.node_ops = new BFSEmscriptenNodeOps(this);
        this.stream_ops = new BFSEmscriptenStreamOps(this);
    }
    BFSEmscriptenFS.prototype.mount = function (mount) {
        return this.createNode(null, '/', this.getMode(mount.opts.root), 0);
    };
    BFSEmscriptenFS.prototype.createNode = function (parent, name, mode, dev) {
        var FS = this.FS;
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
            throw new FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = this.node_ops;
        node.stream_ops = this.stream_ops;
        return node;
    };
    BFSEmscriptenFS.prototype.getMode = function (path) {
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code)
                throw e;
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return stat.mode;
    };
    BFSEmscriptenFS.prototype.realPath = function (node) {
        var parts = [];
        while (node.parent !== node) {
            parts.push(node.name);
            node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return this.PATH.join.apply(null, parts);
    };
    BFSEmscriptenFS.prototype.flagsToPermissionString = function (flags) {
        var parsedFlags = (typeof flags === "string") ? parseInt(flags, 10) : flags;
        parsedFlags &= 0x1FFF;
        if (parsedFlags in this.flagsToPermissionStringMap) {
            return this.flagsToPermissionStringMap[parsedFlags];
        }
        else {
            return flags;
        }
    };
    BFSEmscriptenFS.prototype.getNodeFS = function () {
        return this.nodefs;
    };
    BFSEmscriptenFS.prototype.getFS = function () {
        return this.FS;
    };
    BFSEmscriptenFS.prototype.getPATH = function () {
        return this.PATH;
    };
    BFSEmscriptenFS.prototype.getERRNO_CODES = function () {
        return this.ERRNO_CODES;
    };
    return BFSEmscriptenFS;
}());
exports.__esModule = true;
exports["default"] = BFSEmscriptenFS;

},{"../core/browserfs":53,"../core/node_fs":58,"../core/util":60}],62:[function(_dereq_,module,exports){
"use strict";
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var path = _dereq_('path');
var FileIndex = (function () {
    function FileIndex() {
        this._index = {};
        this.addPath('/', new DirInode());
    }
    FileIndex.prototype._split_path = function (p) {
        var dirpath = path.dirname(p);
        var itemname = p.substr(dirpath.length + (dirpath === "/" ? 0 : 1));
        return [dirpath, itemname];
    };
    FileIndex.prototype.fileIterator = function (cb) {
        for (var path in this._index) {
            var dir = this._index[path];
            var files = dir.getListing();
            for (var i = 0; i < files.length; i++) {
                var item = dir.getItem(files[i]);
                if (isFileInode(item)) {
                    cb(item.getData());
                }
            }
        }
    };
    FileIndex.prototype.addPath = function (path, inode) {
        if (inode == null) {
            throw new Error('Inode must be specified');
        }
        if (path[0] !== '/') {
            throw new Error('Path must be absolute, got: ' + path);
        }
        if (this._index.hasOwnProperty(path)) {
            return this._index[path] === inode;
        }
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        var parent = this._index[dirpath];
        if (parent === undefined && path !== '/') {
            parent = new DirInode();
            if (!this.addPath(dirpath, parent)) {
                return false;
            }
        }
        if (path !== '/') {
            if (!parent.addItem(itemname, inode)) {
                return false;
            }
        }
        if (isDirInode(inode)) {
            this._index[path] = inode;
        }
        return true;
    };
    FileIndex.prototype.addPathFast = function (path, inode) {
        var itemNameMark = path.lastIndexOf('/');
        var parentPath = itemNameMark == 0 ? "/" : path.substring(0, itemNameMark);
        var itemName = path.substring(itemNameMark + 1);
        var parent = this._index[parentPath];
        if (parent === undefined) {
            parent = new DirInode();
            this.addPathFast(parentPath, parent);
        }
        if (!parent.addItem(itemName, inode)) {
            return false;
        }
        if (inode.isDir()) {
            this._index[path] = inode;
        }
        return true;
    };
    FileIndex.prototype.removePath = function (path) {
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        var parent = this._index[dirpath];
        if (parent === undefined) {
            return null;
        }
        var inode = parent.remItem(itemname);
        if (inode === null) {
            return null;
        }
        if (isDirInode(inode)) {
            var children = inode.getListing();
            for (var i = 0; i < children.length; i++) {
                this.removePath(path + '/' + children[i]);
            }
            if (path !== '/') {
                delete this._index[path];
            }
        }
        return inode;
    };
    FileIndex.prototype.ls = function (path) {
        var item = this._index[path];
        if (item === undefined) {
            return null;
        }
        return item.getListing();
    };
    FileIndex.prototype.getInode = function (path) {
        var splitPath = this._split_path(path);
        var dirpath = splitPath[0];
        var itemname = splitPath[1];
        var parent = this._index[dirpath];
        if (parent === undefined) {
            return null;
        }
        if (dirpath === path) {
            return parent;
        }
        return parent.getItem(itemname);
    };
    FileIndex.fromListing = function (listing) {
        var idx = new FileIndex();
        var rootInode = new DirInode();
        idx._index['/'] = rootInode;
        var queue = [['', listing, rootInode]];
        while (queue.length > 0) {
            var inode;
            var next = queue.pop();
            var pwd = next[0];
            var tree = next[1];
            var parent = next[2];
            for (var node in tree) {
                var children = tree[node];
                var name = "" + pwd + "/" + node;
                if (children != null) {
                    idx._index[name] = inode = new DirInode();
                    queue.push([name, children, inode]);
                }
                else {
                    inode = new FileInode(new node_fs_stats_1["default"](node_fs_stats_1.FileType.FILE, -1, 0x16D));
                }
                if (parent != null) {
                    parent._ls[node] = inode;
                }
            }
        }
        return idx;
    };
    return FileIndex;
}());
exports.FileIndex = FileIndex;
var FileInode = (function () {
    function FileInode(data) {
        this.data = data;
    }
    FileInode.prototype.isFile = function () { return true; };
    FileInode.prototype.isDir = function () { return false; };
    FileInode.prototype.getData = function () { return this.data; };
    FileInode.prototype.setData = function (data) { this.data = data; };
    return FileInode;
}());
exports.FileInode = FileInode;
var DirInode = (function () {
    function DirInode(data) {
        if (data === void 0) { data = null; }
        this.data = data;
        this._ls = {};
    }
    DirInode.prototype.isFile = function () {
        return false;
    };
    DirInode.prototype.isDir = function () {
        return true;
    };
    DirInode.prototype.getData = function () { return this.data; };
    DirInode.prototype.getStats = function () {
        return new node_fs_stats_1["default"](node_fs_stats_1.FileType.DIRECTORY, 4096, 0x16D);
    };
    DirInode.prototype.getListing = function () {
        return Object.keys(this._ls);
    };
    DirInode.prototype.getItem = function (p) {
        var _ref;
        return (_ref = this._ls[p]) != null ? _ref : null;
    };
    DirInode.prototype.addItem = function (p, inode) {
        if (p in this._ls) {
            return false;
        }
        this._ls[p] = inode;
        return true;
    };
    DirInode.prototype.remItem = function (p) {
        var item = this._ls[p];
        if (item === undefined) {
            return null;
        }
        delete this._ls[p];
        return item;
    };
    return DirInode;
}());
exports.DirInode = DirInode;
function isFileInode(inode) {
    return inode && inode.isFile();
}
exports.isFileInode = isFileInode;
function isDirInode(inode) {
    return inode && inode.isDir();
}
exports.isDirInode = isDirInode;

},{"../core/node_fs_stats":59,"path":10}],63:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var Inode = (function () {
    function Inode(id, size, mode, atime, mtime, ctime) {
        this.id = id;
        this.size = size;
        this.mode = mode;
        this.atime = atime;
        this.mtime = mtime;
        this.ctime = ctime;
    }
    Inode.prototype.toStats = function () {
        return new node_fs_stats_1["default"]((this.mode & 0xF000) === node_fs_stats_1.FileType.DIRECTORY ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE, this.size, this.mode, new Date(this.atime), new Date(this.mtime), new Date(this.ctime));
    };
    Inode.prototype.getSize = function () {
        return 30 + this.id.length;
    };
    Inode.prototype.toBuffer = function (buff) {
        if (buff === void 0) { buff = new Buffer(this.getSize()); }
        buff.writeUInt32LE(this.size, 0);
        buff.writeUInt16LE(this.mode, 4);
        buff.writeDoubleLE(this.atime, 6);
        buff.writeDoubleLE(this.mtime, 14);
        buff.writeDoubleLE(this.ctime, 22);
        buff.write(this.id, 30, this.id.length, 'ascii');
        return buff;
    };
    Inode.prototype.update = function (stats) {
        var hasChanged = false;
        if (this.size !== stats.size) {
            this.size = stats.size;
            hasChanged = true;
        }
        if (this.mode !== stats.mode) {
            this.mode = stats.mode;
            hasChanged = true;
        }
        var atimeMs = stats.atime.getTime();
        if (this.atime !== atimeMs) {
            this.atime = atimeMs;
            hasChanged = true;
        }
        var mtimeMs = stats.mtime.getTime();
        if (this.mtime !== mtimeMs) {
            this.mtime = mtimeMs;
            hasChanged = true;
        }
        var ctimeMs = stats.ctime.getTime();
        if (this.ctime !== ctimeMs) {
            this.ctime = ctimeMs;
            hasChanged = true;
        }
        return hasChanged;
    };
    Inode.fromBuffer = function (buffer) {
        if (buffer === undefined) {
            throw new Error("NO");
        }
        return new Inode(buffer.toString('ascii', 30), buffer.readUInt32LE(0), buffer.readUInt16LE(4), buffer.readDoubleLE(6), buffer.readDoubleLE(14), buffer.readDoubleLE(22));
    };
    Inode.prototype.isFile = function () {
        return (this.mode & 0xF000) === node_fs_stats_1.FileType.FILE;
    };
    Inode.prototype.isDirectory = function () {
        return (this.mode & 0xF000) === node_fs_stats_1.FileType.DIRECTORY;
    };
    return Inode;
}());
module.exports = Inode;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/node_fs_stats":59,"bfs-buffer":2}],64:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_system = _dereq_('../core/file_system');
var api_error_1 = _dereq_('../core/api_error');
var node_fs_stats_1 = _dereq_('../core/node_fs_stats');
var path = _dereq_('path');
var Inode = _dereq_('../generic/inode');
var preload_file = _dereq_('../generic/preload_file');
var ROOT_NODE_ID = "/";
function GenerateRandomID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function noError(e, cb) {
    if (e) {
        cb(e);
        return false;
    }
    return true;
}
function noErrorTx(e, tx, cb) {
    if (e) {
        tx.abort(function () {
            cb(e);
        });
        return false;
    }
    return true;
}
var SimpleSyncRWTransaction = (function () {
    function SimpleSyncRWTransaction(store) {
        this.store = store;
        this.originalData = {};
        this.modifiedKeys = [];
    }
    SimpleSyncRWTransaction.prototype.stashOldValue = function (key, value) {
        if (!this.originalData.hasOwnProperty(key)) {
            this.originalData[key] = value;
        }
    };
    SimpleSyncRWTransaction.prototype.markModified = function (key) {
        if (this.modifiedKeys.indexOf(key) === -1) {
            this.modifiedKeys.push(key);
            if (!this.originalData.hasOwnProperty(key)) {
                this.originalData[key] = this.store.get(key);
            }
        }
    };
    SimpleSyncRWTransaction.prototype.get = function (key) {
        var val = this.store.get(key);
        this.stashOldValue(key, val);
        return val;
    };
    SimpleSyncRWTransaction.prototype.put = function (key, data, overwrite) {
        this.markModified(key);
        return this.store.put(key, data, overwrite);
    };
    SimpleSyncRWTransaction.prototype.del = function (key) {
        this.markModified(key);
        this.store.del(key);
    };
    SimpleSyncRWTransaction.prototype.commit = function () { };
    SimpleSyncRWTransaction.prototype.abort = function () {
        var i, key, value;
        for (i = 0; i < this.modifiedKeys.length; i++) {
            key = this.modifiedKeys[i];
            value = this.originalData[key];
            if (value === null) {
                this.store.del(key);
            }
            else {
                this.store.put(key, value, true);
            }
        }
    };
    return SimpleSyncRWTransaction;
}());
exports.SimpleSyncRWTransaction = SimpleSyncRWTransaction;
var SyncKeyValueFile = (function (_super) {
    __extends(SyncKeyValueFile, _super);
    function SyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
    }
    SyncKeyValueFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats());
            this.resetDirty();
        }
    };
    SyncKeyValueFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return SyncKeyValueFile;
}(preload_file.PreloadFile));
exports.SyncKeyValueFile = SyncKeyValueFile;
var SyncKeyValueFileSystem = (function (_super) {
    __extends(SyncKeyValueFileSystem, _super);
    function SyncKeyValueFileSystem(options) {
        _super.call(this);
        this.store = options.store;
        this.makeRootDirectory();
    }
    SyncKeyValueFileSystem.isAvailable = function () { return true; };
    SyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    SyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSynch = function () { return true; };
    SyncKeyValueFileSystem.prototype.makeRootDirectory = function () {
        var tx = this.store.beginTransaction('readwrite');
        if (tx.get(ROOT_NODE_ID) === undefined) {
            var currTime = (new Date()).getTime(), dirInode = new Inode(GenerateRandomID(), 4096, 511 | node_fs_stats_1.FileType.DIRECTORY, currTime, currTime, currTime);
            tx.put(dirInode.id, new Buffer("{}"), false);
            tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false);
            tx.commit();
        }
    };
    SyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename) {
        var _this = this;
        var read_directory = function (inode) {
            var dirList = _this.getDirListing(tx, parent, inode);
            if (dirList[filename]) {
                return dirList[filename];
            }
            else {
                throw api_error_1.ApiError.ENOENT(path.resolve(parent, filename));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                return ROOT_NODE_ID;
            }
            else {
                return read_directory(this.getINode(tx, parent, ROOT_NODE_ID));
            }
        }
        else {
            return read_directory(this.getINode(tx, parent + path.sep + filename, this._findINode(tx, path.dirname(parent), path.basename(parent))));
        }
    };
    SyncKeyValueFileSystem.prototype.findINode = function (tx, p) {
        return this.getINode(tx, p, this._findINode(tx, path.dirname(p), path.basename(p)));
    };
    SyncKeyValueFileSystem.prototype.getINode = function (tx, p, id) {
        var inode = tx.get(id);
        if (inode === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return Inode.fromBuffer(inode);
    };
    SyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode) {
        if (!inode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        var data = tx.get(inode.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return JSON.parse(data.toString());
    };
    SyncKeyValueFileSystem.prototype.addNewNode = function (tx, data) {
        var retries = 0, currId;
        while (retries < 5) {
            try {
                currId = GenerateRandomID();
                tx.put(currId, data, false);
                return currId;
            }
            catch (e) {
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.');
    };
    SyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data) {
        var parentDir = path.dirname(p), fname = path.basename(p), parentNode = this.findINode(tx, parentDir), dirListing = this.getDirListing(tx, parentDir, parentNode), currTime = (new Date()).getTime();
        if (p === '/') {
            throw api_error_1.ApiError.EEXIST(p);
        }
        if (dirListing[fname]) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        try {
            var dataId = this.addNewNode(tx, data), fileNode = new Inode(dataId, data.length, mode | type, currTime, currTime, currTime), fileNodeId = this.addNewNode(tx, fileNode.toBuffer());
            dirListing[fname] = fileNodeId;
            tx.put(parentNode.id, new Buffer(JSON.stringify(dirListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
        return fileNode;
    };
    SyncKeyValueFileSystem.prototype.empty = function () {
        this.store.clear();
        this.makeRootDirectory();
    };
    SyncKeyValueFileSystem.prototype.renameSync = function (oldPath, newPath) {
        var tx = this.store.beginTransaction('readwrite'), oldParent = path.dirname(oldPath), oldName = path.basename(oldPath), newParent = path.dirname(newPath), newName = path.basename(newPath), oldDirNode = this.findINode(tx, oldParent), oldDirList = this.getDirListing(tx, oldParent, oldDirNode);
        if (!oldDirList[oldName]) {
            throw api_error_1.ApiError.ENOENT(oldPath);
        }
        var nodeId = oldDirList[oldName];
        delete oldDirList[oldName];
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent);
        }
        var newDirNode, newDirList;
        if (newParent === oldParent) {
            newDirNode = oldDirNode;
            newDirList = oldDirList;
        }
        else {
            newDirNode = this.findINode(tx, newParent);
            newDirList = this.getDirListing(tx, newParent, newDirNode);
        }
        if (newDirList[newName]) {
            var newNameNode = this.getINode(tx, newPath, newDirList[newName]);
            if (newNameNode.isFile()) {
                try {
                    tx.del(newNameNode.id);
                    tx.del(newDirList[newName]);
                }
                catch (e) {
                    tx.abort();
                    throw e;
                }
            }
            else {
                throw api_error_1.ApiError.EPERM(newPath);
            }
        }
        newDirList[newName] = nodeId;
        try {
            tx.put(oldDirNode.id, new Buffer(JSON.stringify(oldDirList)), true);
            tx.put(newDirNode.id, new Buffer(JSON.stringify(newDirList)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    SyncKeyValueFileSystem.prototype.statSync = function (p, isLstat) {
        return this.findINode(this.store.beginTransaction('readonly'), p).toStats();
    };
    SyncKeyValueFileSystem.prototype.createFileSync = function (p, flag, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = new Buffer(0), newFile = this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data);
        return new SyncKeyValueFile(this, p, flag, newFile.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.openFileSync = function (p, flag) {
        var tx = this.store.beginTransaction('readonly'), node = this.findINode(tx, p), data = tx.get(node.id);
        if (data === undefined) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return new SyncKeyValueFile(this, p, flag, node.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir) {
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), parentNode = this.findINode(tx, parent), parentListing = this.getDirListing(tx, parent, parentNode), fileName = path.basename(p);
        if (!parentListing[fileName]) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        var fileNodeId = parentListing[fileName];
        delete parentListing[fileName];
        var fileNode = this.getINode(tx, p, fileNodeId);
        if (!isDir && fileNode.isDirectory()) {
            throw api_error_1.ApiError.EISDIR(p);
        }
        else if (isDir && !fileNode.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        try {
            tx.del(fileNode.id);
            tx.del(fileNodeId);
            tx.put(parentNode.id, new Buffer(JSON.stringify(parentListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    SyncKeyValueFileSystem.prototype.unlinkSync = function (p) {
        this.removeEntry(p, false);
    };
    SyncKeyValueFileSystem.prototype.rmdirSync = function (p) {
        if (this.readdirSync(p).length > 0) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            this.removeEntry(p, true);
        }
    };
    SyncKeyValueFileSystem.prototype.mkdirSync = function (p, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = new Buffer('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data);
    };
    SyncKeyValueFileSystem.prototype.readdirSync = function (p) {
        var tx = this.store.beginTransaction('readonly');
        return Object.keys(this.getDirListing(tx, p, this.findINode(tx, p)));
    };
    SyncKeyValueFileSystem.prototype._syncSync = function (p, data, stats) {
        var tx = this.store.beginTransaction('readwrite'), fileInodeId = this._findINode(tx, path.dirname(p), path.basename(p)), fileInode = this.getINode(tx, p, fileInodeId), inodeChanged = fileInode.update(stats);
        try {
            tx.put(fileInode.id, data, true);
            if (inodeChanged) {
                tx.put(fileInodeId, fileInode.toBuffer(), true);
            }
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    return SyncKeyValueFileSystem;
}(file_system.SynchronousFileSystem));
exports.SyncKeyValueFileSystem = SyncKeyValueFileSystem;
var AsyncKeyValueFile = (function (_super) {
    __extends(AsyncKeyValueFile, _super);
    function AsyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
    }
    AsyncKeyValueFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (e) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    AsyncKeyValueFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return AsyncKeyValueFile;
}(preload_file.PreloadFile));
exports.AsyncKeyValueFile = AsyncKeyValueFile;
var AsyncKeyValueFileSystem = (function (_super) {
    __extends(AsyncKeyValueFileSystem, _super);
    function AsyncKeyValueFileSystem() {
        _super.apply(this, arguments);
    }
    AsyncKeyValueFileSystem.prototype.init = function (store, cb) {
        this.store = store;
        this.makeRootDirectory(cb);
    };
    AsyncKeyValueFileSystem.isAvailable = function () { return true; };
    AsyncKeyValueFileSystem.prototype.getName = function () { return this.store.name(); };
    AsyncKeyValueFileSystem.prototype.isReadOnly = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSymlinks = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsProps = function () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSynch = function () { return false; };
    AsyncKeyValueFileSystem.prototype.makeRootDirectory = function (cb) {
        var tx = this.store.beginTransaction('readwrite');
        tx.get(ROOT_NODE_ID, function (e, data) {
            if (e || data === undefined) {
                var currTime = (new Date()).getTime(), dirInode = new Inode(GenerateRandomID(), 4096, 511 | node_fs_stats_1.FileType.DIRECTORY, currTime, currTime, currTime);
                tx.put(dirInode.id, new Buffer("{}"), false, function (e) {
                    if (noErrorTx(e, tx, cb)) {
                        tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false, function (e) {
                            if (e) {
                                tx.abort(function () { cb(e); });
                            }
                            else {
                                tx.commit(cb);
                            }
                        });
                    }
                });
            }
            else {
                tx.commit(cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype._findINode = function (tx, parent, filename, cb) {
        var _this = this;
        var handle_directory_listings = function (e, inode, dirList) {
            if (e) {
                cb(e);
            }
            else if (dirList[filename]) {
                cb(null, dirList[filename]);
            }
            else {
                cb(api_error_1.ApiError.ENOENT(path.resolve(parent, filename)));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                cb(null, ROOT_NODE_ID);
            }
            else {
                this.getINode(tx, parent, ROOT_NODE_ID, function (e, inode) {
                    if (noError(e, cb)) {
                        _this.getDirListing(tx, parent, inode, function (e, dirList) {
                            handle_directory_listings(e, inode, dirList);
                        });
                    }
                });
            }
        }
        else {
            this.findINodeAndDirListing(tx, parent, handle_directory_listings);
        }
    };
    AsyncKeyValueFileSystem.prototype.findINode = function (tx, p, cb) {
        var _this = this;
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, id) {
            if (noError(e, cb)) {
                _this.getINode(tx, p, id, cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.getINode = function (tx, p, id, cb) {
        tx.get(id, function (e, data) {
            if (noError(e, cb)) {
                if (data === undefined) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                else {
                    cb(null, Inode.fromBuffer(data));
                }
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.getDirListing = function (tx, p, inode, cb) {
        if (!inode.isDirectory()) {
            cb(api_error_1.ApiError.ENOTDIR(p));
        }
        else {
            tx.get(inode.id, function (e, data) {
                if (noError(e, cb)) {
                    try {
                        cb(null, JSON.parse(data.toString()));
                    }
                    catch (e) {
                        cb(api_error_1.ApiError.ENOENT(p));
                    }
                }
            });
        }
    };
    AsyncKeyValueFileSystem.prototype.findINodeAndDirListing = function (tx, p, cb) {
        var _this = this;
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, listing) {
                    if (noError(e, cb)) {
                        cb(null, inode, listing);
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.addNewNode = function (tx, data, cb) {
        var retries = 0, currId, reroll = function () {
            if (++retries === 5) {
                cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, 'Unable to commit data to key-value store.'));
            }
            else {
                currId = GenerateRandomID();
                tx.put(currId, data, false, function (e, committed) {
                    if (e || !committed) {
                        reroll();
                    }
                    else {
                        cb(null, currId);
                    }
                });
            }
        };
        reroll();
    };
    AsyncKeyValueFileSystem.prototype.commitNewFile = function (tx, p, type, mode, data, cb) {
        var _this = this;
        var parentDir = path.dirname(p), fname = path.basename(p), currTime = (new Date()).getTime();
        if (p === '/') {
            return cb(api_error_1.ApiError.EEXIST(p));
        }
        this.findINodeAndDirListing(tx, parentDir, function (e, parentNode, dirListing) {
            if (noErrorTx(e, tx, cb)) {
                if (dirListing[fname]) {
                    tx.abort(function () {
                        cb(api_error_1.ApiError.EEXIST(p));
                    });
                }
                else {
                    _this.addNewNode(tx, data, function (e, dataId) {
                        if (noErrorTx(e, tx, cb)) {
                            var fileInode = new Inode(dataId, data.length, mode | type, currTime, currTime, currTime);
                            _this.addNewNode(tx, fileInode.toBuffer(), function (e, fileInodeId) {
                                if (noErrorTx(e, tx, cb)) {
                                    dirListing[fname] = fileInodeId;
                                    tx.put(parentNode.id, new Buffer(JSON.stringify(dirListing)), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            tx.commit(function (e) {
                                                if (noErrorTx(e, tx, cb)) {
                                                    cb(null, fileInode);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.empty = function (cb) {
        var _this = this;
        this.store.clear(function (e) {
            if (noError(e, cb)) {
                _this.makeRootDirectory(cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), oldParent = path.dirname(oldPath), oldName = path.basename(oldPath), newParent = path.dirname(newPath), newName = path.basename(newPath), inodes = {}, lists = {}, errorOccurred = false;
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, oldParent));
        }
        var theOleSwitcharoo = function () {
            if (errorOccurred || !lists.hasOwnProperty(oldParent) || !lists.hasOwnProperty(newParent)) {
                return;
            }
            var oldParentList = lists[oldParent], oldParentINode = inodes[oldParent], newParentList = lists[newParent], newParentINode = inodes[newParent];
            if (!oldParentList[oldName]) {
                cb(api_error_1.ApiError.ENOENT(oldPath));
            }
            else {
                var fileId = oldParentList[oldName];
                delete oldParentList[oldName];
                var completeRename = function () {
                    newParentList[newName] = fileId;
                    tx.put(oldParentINode.id, new Buffer(JSON.stringify(oldParentList)), true, function (e) {
                        if (noErrorTx(e, tx, cb)) {
                            if (oldParent === newParent) {
                                tx.commit(cb);
                            }
                            else {
                                tx.put(newParentINode.id, new Buffer(JSON.stringify(newParentList)), true, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.commit(cb);
                                    }
                                });
                            }
                        }
                    });
                };
                if (newParentList[newName]) {
                    _this.getINode(tx, newPath, newParentList[newName], function (e, inode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (inode.isFile()) {
                                tx.del(inode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.del(newParentList[newName], function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                completeRename();
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                tx.abort(function (e) {
                                    cb(api_error_1.ApiError.EPERM(newPath));
                                });
                            }
                        }
                    });
                }
                else {
                    completeRename();
                }
            }
        };
        var processInodeAndListings = function (p) {
            _this.findINodeAndDirListing(tx, p, function (e, node, dirList) {
                if (e) {
                    if (!errorOccurred) {
                        errorOccurred = true;
                        tx.abort(function () {
                            cb(e);
                        });
                    }
                }
                else {
                    inodes[p] = node;
                    lists[p] = dirList;
                    theOleSwitcharoo();
                }
            });
        };
        processInodeAndListings(oldParent);
        if (oldParent !== newParent) {
            processInodeAndListings(newParent);
        }
    };
    AsyncKeyValueFileSystem.prototype.stat = function (p, isLstat, cb) {
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                cb(null, inode.toStats());
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.createFile = function (p, flag, mode, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), data = new Buffer(0);
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.FILE, mode, data, function (e, newFile) {
            if (noError(e, cb)) {
                cb(null, new AsyncKeyValueFile(_this, p, flag, newFile.toStats(), data));
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.openFile = function (p, flag, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                tx.get(inode.id, function (e, data) {
                    if (noError(e, cb)) {
                        if (data === undefined) {
                            cb(api_error_1.ApiError.ENOENT(p));
                        }
                        else {
                            cb(null, new AsyncKeyValueFile(_this, p, flag, inode.toStats(), data));
                        }
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.removeEntry = function (p, isDir, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), fileName = path.basename(p);
        this.findINodeAndDirListing(tx, parent, function (e, parentNode, parentListing) {
            if (noErrorTx(e, tx, cb)) {
                if (!parentListing[fileName]) {
                    tx.abort(function () {
                        cb(api_error_1.ApiError.ENOENT(p));
                    });
                }
                else {
                    var fileNodeId = parentListing[fileName];
                    delete parentListing[fileName];
                    _this.getINode(tx, p, fileNodeId, function (e, fileNode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (!isDir && fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.EISDIR(p));
                                });
                            }
                            else if (isDir && !fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(api_error_1.ApiError.ENOTDIR(p));
                                });
                            }
                            else {
                                tx.del(fileNode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.del(fileNodeId, function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                tx.put(parentNode.id, new Buffer(JSON.stringify(parentListing)), true, function (e) {
                                                    if (noErrorTx(e, tx, cb)) {
                                                        tx.commit(cb);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.unlink = function (p, cb) {
        this.removeEntry(p, false, cb);
    };
    AsyncKeyValueFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        this.readdir(p, function (err, files) {
            if (err) {
                cb(err);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(p));
            }
            else {
                _this.removeEntry(p, true, cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.mkdir = function (p, mode, cb) {
        var tx = this.store.beginTransaction('readwrite'), data = new Buffer('{}');
        this.commitNewFile(tx, p, node_fs_stats_1.FileType.DIRECTORY, mode, data, cb);
    };
    AsyncKeyValueFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                _this.getDirListing(tx, p, inode, function (e, dirListing) {
                    if (noError(e, cb)) {
                        cb(null, Object.keys(dirListing));
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype._sync = function (p, data, stats, cb) {
        var _this = this;
        var tx = this.store.beginTransaction('readwrite');
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, fileInodeId) {
            if (noErrorTx(e, tx, cb)) {
                _this.getINode(tx, p, fileInodeId, function (e, fileInode) {
                    if (noErrorTx(e, tx, cb)) {
                        var inodeChanged = fileInode.update(stats);
                        tx.put(fileInode.id, data, true, function (e) {
                            if (noErrorTx(e, tx, cb)) {
                                if (inodeChanged) {
                                    tx.put(fileInodeId, fileInode.toBuffer(), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            tx.commit(cb);
                                        }
                                    });
                                }
                                else {
                                    tx.commit(cb);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    return AsyncKeyValueFileSystem;
}(file_system.BaseFileSystem));
exports.AsyncKeyValueFileSystem = AsyncKeyValueFileSystem;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/file_system":56,"../core/node_fs_stats":59,"../generic/inode":63,"../generic/preload_file":67,"bfs-buffer":2,"path":10}],65:[function(_dereq_,module,exports){
"use strict";
var mutex_1 = _dereq_('./mutex');
var LockedFS = (function () {
    function LockedFS(fs) {
        this._fs = fs;
        this._mu = new mutex_1["default"]();
    }
    LockedFS.prototype.getName = function () {
        return 'LockedFS<' + this._fs.getName() + '>';
    };
    LockedFS.prototype.getFSUnlocked = function () {
        return this._fs;
    };
    LockedFS.prototype.initialize = function (cb) {
        this._fs.initialize(cb);
    };
    LockedFS.prototype.diskSpace = function (p, cb) {
        this._fs.diskSpace(p, cb);
    };
    LockedFS.prototype.isReadOnly = function () {
        return this._fs.isReadOnly();
    };
    LockedFS.prototype.supportsLinks = function () {
        return this._fs.supportsLinks();
    };
    LockedFS.prototype.supportsProps = function () {
        return this._fs.supportsProps();
    };
    LockedFS.prototype.supportsSynch = function () {
        return this._fs.supportsSynch();
    };
    LockedFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rename(oldPath, newPath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.renameSync = function (oldPath, newPath) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.renameSync(oldPath, newPath);
    };
    LockedFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.stat(p, isLstat, function (err, stat) {
                _this._mu.unlock();
                cb(err, stat);
            });
        });
    };
    LockedFS.prototype.statSync = function (p, isLstat) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.statSync(p, isLstat);
    };
    LockedFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.open(p, flag, mode, function (err, fd) {
                _this._mu.unlock();
                cb(err, fd);
            });
        });
    };
    LockedFS.prototype.openSync = function (p, flag, mode) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.openSync(p, flag, mode);
    };
    LockedFS.prototype.unlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.unlink(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.unlinkSync = function (p) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.unlinkSync(p);
    };
    LockedFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rmdir(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.rmdirSync = function (p) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.rmdirSync(p);
    };
    LockedFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.mkdir(p, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.mkdirSync = function (p, mode) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.mkdirSync(p, mode);
    };
    LockedFS.prototype.readdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readdir(p, function (err, files) {
                _this._mu.unlock();
                cb(err, files);
            });
        });
    };
    LockedFS.prototype.readdirSync = function (p) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.readdirSync(p);
    };
    LockedFS.prototype.exists = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.exists(p, function (exists) {
                _this._mu.unlock();
                cb(exists);
            });
        });
    };
    LockedFS.prototype.existsSync = function (p) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.existsSync(p);
    };
    LockedFS.prototype.realpath = function (p, cache, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.realpath(p, cache, function (err, resolvedPath) {
                _this._mu.unlock();
                cb(err, resolvedPath);
            });
        });
    };
    LockedFS.prototype.realpathSync = function (p, cache) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.realpathSync(p, cache);
    };
    LockedFS.prototype.truncate = function (p, len, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.truncate(p, len, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.truncateSync = function (p, len) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.truncateSync(p, len);
    };
    LockedFS.prototype.readFile = function (fname, encoding, flag, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readFile(fname, encoding, flag, function (err, data) {
                _this._mu.unlock();
                cb(err, data);
            });
        });
    };
    LockedFS.prototype.readFileSync = function (fname, encoding, flag) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.readFileSync(fname, encoding, flag);
    };
    LockedFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.writeFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.writeFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.writeFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.appendFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.appendFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.appendFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chmod(p, isLchmod, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chmodSync = function (p, isLchmod, mode) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.chmodSync(p, isLchmod, mode);
    };
    LockedFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chown(p, isLchown, uid, gid, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.chownSync(p, isLchown, uid, gid);
    };
    LockedFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.utimes(p, atime, mtime, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.utimesSync = function (p, atime, mtime) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.utimesSync(p, atime, mtime);
    };
    LockedFS.prototype.link = function (srcpath, dstpath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.link(srcpath, dstpath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.linkSync = function (srcpath, dstpath) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.linkSync(srcpath, dstpath);
    };
    LockedFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.symlink(srcpath, dstpath, type, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.symlinkSync(srcpath, dstpath, type);
    };
    LockedFS.prototype.readlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readlink(p, function (err, linkString) {
                _this._mu.unlock();
                cb(err, linkString);
            });
        });
    };
    LockedFS.prototype.readlinkSync = function (p) {
        if (this._mu.isLocked())
            throw new Error('invalid sync call');
        return this._fs.readlinkSync(p);
    };
    return LockedFS;
}());
exports.__esModule = true;
exports["default"] = LockedFS;

},{"./mutex":66}],66:[function(_dereq_,module,exports){
"use strict";
var Mutex = (function () {
    function Mutex() {
        this._locked = false;
        this._waiters = [];
    }
    Mutex.prototype.lock = function (cb) {
        if (this._locked) {
            this._waiters.push(cb);
            return;
        }
        this._locked = true;
        cb();
    };
    Mutex.prototype.unlock = function () {
        if (!this._locked)
            throw new Error('unlock of a non-locked mutex');
        var next = this._waiters.shift();
        if (next) {
            setImmediate(next);
            return;
        }
        this._locked = false;
    };
    Mutex.prototype.tryLock = function () {
        if (this._locked)
            return false;
        this._locked = true;
        return true;
    };
    Mutex.prototype.isLocked = function () {
        return this._locked;
    };
    return Mutex;
}());
exports.__esModule = true;
exports["default"] = Mutex;

},{}],67:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file = _dereq_('../core/file');
var api_error_1 = _dereq_('../core/api_error');
var fs = _dereq_('../core/node_fs');
var PreloadFile = (function (_super) {
    __extends(PreloadFile, _super);
    function PreloadFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this);
        this._pos = 0;
        this._dirty = false;
        this._fs = _fs;
        this._path = _path;
        this._flag = _flag;
        this._stat = _stat;
        if (contents != null) {
            this._buffer = contents;
        }
        else {
            this._buffer = new Buffer(0);
        }
        if (this._stat.size !== this._buffer.length && this._flag.isReadable()) {
            throw new Error("Invalid buffer: Buffer is " + this._buffer.length + " long, yet Stats object specifies that file is " + this._stat.size + " long.");
        }
    }
    PreloadFile.prototype.isDirty = function () {
        return this._dirty;
    };
    PreloadFile.prototype.resetDirty = function () {
        this._dirty = false;
    };
    PreloadFile.prototype.getBuffer = function () {
        return this._buffer;
    };
    PreloadFile.prototype.getStats = function () {
        return this._stat;
    };
    PreloadFile.prototype.getFlag = function () {
        return this._flag;
    };
    PreloadFile.prototype.getPath = function () {
        return this._path;
    };
    PreloadFile.prototype.getPos = function () {
        if (this._flag.isAppendable()) {
            return this._stat.size;
        }
        return this._pos;
    };
    PreloadFile.prototype.advancePos = function (delta) {
        return this._pos += delta;
    };
    PreloadFile.prototype.setPos = function (newPos) {
        return this._pos = newPos;
    };
    PreloadFile.prototype.sync = function (cb) {
        try {
            this.syncSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.syncSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    PreloadFile.prototype.close = function (cb) {
        try {
            this.closeSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.closeSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    PreloadFile.prototype.stat = function (cb) {
        try {
            cb(null, this._stat.clone());
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.statSync = function () {
        return this._stat.clone();
    };
    PreloadFile.prototype.truncate = function (len, cb) {
        try {
            this.truncateSync(len);
            if (this._flag.isSynchronous() && !fs.getRootFS().supportsSynch()) {
                this.sync(cb);
            }
            cb();
        }
        catch (e) {
            return cb(e);
        }
    };
    PreloadFile.prototype.truncateSync = function (len) {
        this._dirty = true;
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        this._stat.mtime = new Date();
        if (len > this._buffer.length) {
            var buf = new Buffer(len - this._buffer.length);
            buf.fill(0);
            this.writeSync(buf, 0, buf.length, this._buffer.length);
            if (this._flag.isSynchronous() && fs.getRootFS().supportsSynch()) {
                this.syncSync();
            }
            return;
        }
        this._stat.size = len;
        var newBuff = new Buffer(len);
        this._buffer.copy(newBuff, 0, 0, len);
        this._buffer = newBuff;
        if (this._flag.isSynchronous() && fs.getRootFS().supportsSynch()) {
            this.syncSync();
        }
    };
    PreloadFile.prototype.write = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.writeSync = function (buffer, offset, length, position) {
        this._dirty = true;
        if (position == null) {
            position = this.getPos();
        }
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        var endFp = position + length;
        if (endFp > this._stat.size) {
            this._stat.size = endFp;
            if (endFp > this._buffer.length) {
                var newBuff = new Buffer(endFp);
                this._buffer.copy(newBuff);
                this._buffer = newBuff;
            }
        }
        var len = buffer.copy(this._buffer, position, offset, offset + length);
        this._stat.mtime = new Date();
        if (this._flag.isSynchronous()) {
            this.syncSync();
            return len;
        }
        this.setPos(position + len);
        return len;
    };
    PreloadFile.prototype.read = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.readSync = function (buffer, offset, length, position) {
        if (!this._flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a readable mode.');
        }
        if (position == null) {
            position = this.getPos();
        }
        var endRead = position + length;
        if (endRead > this._stat.size) {
            length = this._stat.size - position;
        }
        var rv = this._buffer.copy(buffer, offset, position, position + length);
        this._stat.atime = new Date();
        this._pos = position + length;
        return rv;
    };
    PreloadFile.prototype.chmod = function (mode, cb) {
        try {
            this.chmodSync(mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    PreloadFile.prototype.chmodSync = function (mode) {
        if (!this._fs.supportsProps()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
        }
        this._dirty = true;
        this._stat.chmod(mode);
        this.syncSync();
    };
    return PreloadFile;
}(file.BaseFile));
exports.PreloadFile = PreloadFile;
var NoSyncFile = (function (_super) {
    __extends(NoSyncFile, _super);
    function NoSyncFile(_fs, _path, _flag, _stat, contents) {
        _super.call(this, _fs, _path, _flag, _stat, contents);
    }
    NoSyncFile.prototype.sync = function (cb) {
        cb();
    };
    NoSyncFile.prototype.syncSync = function () { };
    NoSyncFile.prototype.close = function (cb) {
        cb();
    };
    NoSyncFile.prototype.closeSync = function () { };
    return NoSyncFile;
}(PreloadFile));
exports.NoSyncFile = NoSyncFile;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/file":54,"../core/node_fs":58,"bfs-buffer":2}],68:[function(_dereq_,module,exports){
(function (Buffer){
"use strict";
var util = _dereq_('../core/util');
var api_error_1 = _dereq_('../core/api_error');
function getIEByteArray(IEByteArray) {
    var rawBytes = IEBinaryToArray_ByteStr(IEByteArray);
    var lastChr = IEBinaryToArray_ByteStr_Last(IEByteArray);
    var data_str = rawBytes.replace(/[\s\S]/g, function (match) {
        var v = match.charCodeAt(0);
        return String.fromCharCode(v & 0xff, v >> 8);
    }) + lastChr;
    var data_array = new Array(data_str.length);
    for (var i = 0; i < data_str.length; i++) {
        data_array[i] = data_str.charCodeAt(i);
    }
    return data_array;
}
function downloadFileIE(async, p, type, cb) {
    switch (type) {
        case 'buffer':
        case 'json':
            break;
        default:
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type));
    }
    var req = new XMLHttpRequest();
    req.open('GET', p, async);
    req.setRequestHeader("Accept-Charset", "x-user-defined");
    req.onreadystatechange = function (e) {
        var data_array;
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        data_array = getIEByteArray(req.responseBody);
                        return cb(null, new Buffer(data_array));
                    case 'json':
                        return cb(null, JSON.parse(req.responseText));
                }
            }
            else {
                return cb(new api_error_1.ApiError(req.status, "XHR error."));
            }
        }
    };
    req.send();
}
function asyncDownloadFileIE(p, type, cb) {
    downloadFileIE(true, p, type, cb);
}
function syncDownloadFileIE(p, type) {
    var rv;
    downloadFileIE(false, p, type, function (err, data) {
        if (err)
            throw err;
        rv = data;
    });
    return rv;
}
function asyncDownloadFileModern(p, type, cb) {
    var req = new XMLHttpRequest();
    req.open('GET', p, true);
    var jsonSupported = true;
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            try {
                req.responseType = 'json';
                jsonSupported = req.responseType === 'json';
            }
            catch (e) {
                jsonSupported = false;
            }
            break;
        default:
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type));
    }
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        return cb(null, new Buffer(req.response ? req.response : 0));
                    case 'json':
                        if (jsonSupported) {
                            return cb(null, req.response);
                        }
                        else {
                            return cb(null, JSON.parse(req.responseText));
                        }
                }
            }
            else {
                return cb(new api_error_1.ApiError(req.status, "XHR error."));
            }
        }
    };
    req.send();
}
function syncDownloadFileModern(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    var data = null;
    var err = null;
    req.overrideMimeType('text/plain; charset=x-user-defined');
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        var text = req.responseText;
                        data = new Buffer(text.length);
                        for (var i = 0; i < text.length; i++) {
                            data.writeUInt8(text.charCodeAt(i), i);
                        }
                        return;
                    case 'json':
                        data = JSON.parse(req.responseText);
                        return;
                }
            }
            else {
                err = new api_error_1.ApiError(req.status, "XHR error.");
                return;
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
function syncDownloadFileIE10(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            break;
        default:
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid download type: " + type);
    }
    var data;
    var err;
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        data = new Buffer(req.response);
                        break;
                    case 'json':
                        data = JSON.parse(req.response);
                        break;
                }
            }
            else {
                err = new api_error_1.ApiError(req.status, "XHR error.");
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
function getFileSize(async, p, cb) {
    var req = new XMLHttpRequest();
    req.open('HEAD', p, async);
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status == 200) {
                try {
                    return cb(null, parseInt(req.getResponseHeader('Content-Length') || '-1', 10));
                }
                catch (e) {
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "XHR HEAD error: Could not read content-length."));
                }
            }
            else {
                return cb(new api_error_1.ApiError(req.status, "XHR HEAD error."));
            }
        }
    };
    req.send();
}
exports.asyncDownloadFile = (util.isIE && typeof Blob === 'undefined') ? asyncDownloadFileIE : asyncDownloadFileModern;
exports.syncDownloadFile = (util.isIE && typeof Blob === 'undefined') ? syncDownloadFileIE : (util.isIE && typeof Blob !== 'undefined') ? syncDownloadFileIE10 : syncDownloadFileModern;
function getFileSizeSync(p) {
    var rv;
    getFileSize(false, p, function (err, size) {
        if (err) {
            throw err;
        }
        rv = size;
    });
    return rv;
}
exports.getFileSizeSync = getFileSizeSync;
function getFileSizeAsync(p, cb) {
    getFileSize(true, p, cb);
}
exports.getFileSizeAsync = getFileSizeAsync;

}).call(this,_dereq_('bfs-buffer').Buffer)

},{"../core/api_error":51,"../core/util":60,"bfs-buffer":2}],69:[function(_dereq_,module,exports){
"use strict";
var global = _dereq_('./core/global');
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}
if (!Array.isArray) {
    Array.isArray = function (vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    };
}
if (!Object.keys) {
    Object.keys = (function () {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'), dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ], dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                throw new TypeError('Object.keys called on non-object');
            }
            var result = [], prop, i;
            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}
if ('ab'.substr(-1) !== 'b') {
    String.prototype.substr = function (substr) {
        return function (start, length) {
            if (start < 0)
                start = this.length + start;
            return substr.call(this, start, length);
        };
    }(String.prototype.substr);
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        for (var i = 0; i < this.length; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun) {
        'use strict';
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }
        return res;
    };
}
if (typeof setImmediate === 'undefined') {
    var gScope = global;
    var timeouts = [];
    var messageName = "zero-timeout-message";
    var canUsePostMessage = function () {
        if (typeof gScope.importScripts !== 'undefined' || !gScope.postMessage) {
            return false;
        }
        var postMessageIsAsync = true;
        var oldOnMessage = gScope.onmessage;
        gScope.onmessage = function () {
            postMessageIsAsync = false;
        };
        gScope.postMessage('', '*');
        gScope.onmessage = oldOnMessage;
        return postMessageIsAsync;
    };
    if (canUsePostMessage()) {
        gScope.setImmediate = function (fn) {
            timeouts.push(fn);
            gScope.postMessage(messageName, "*");
        };
        var handleMessage = function (event) {
            if (event.source === self && event.data === messageName) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
                if (timeouts.length > 0) {
                    var fn = timeouts.shift();
                    return fn();
                }
            }
        };
        if (gScope.addEventListener) {
            gScope.addEventListener('message', handleMessage, true);
        }
        else {
            gScope.attachEvent('onmessage', handleMessage);
        }
    }
    else if (gScope.MessageChannel) {
        var channel = new gScope.MessageChannel();
        channel.port1.onmessage = function (event) {
            if (timeouts.length > 0) {
                return timeouts.shift()();
            }
        };
        gScope.setImmediate = function (fn) {
            timeouts.push(fn);
            channel.port2.postMessage('');
        };
    }
    else {
        gScope.setImmediate = function (fn) {
            return setTimeout(fn, 0);
        };
    }
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (!this) {
            throw new TypeError();
        }
        var length = this.length;
        if (length === 0 || pivot >= length) {
            return -1;
        }
        var pivot = fromIndex;
        if (pivot < 0) {
            pivot = length + pivot;
        }
        for (var i = pivot; i < length; i++) {
            if (this[i] === searchElement) {
                return i;
            }
        }
        return -1;
    };
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        var i, len;
        for (i = 0, len = this.length; i < len; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}
if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        var T, A, k;
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        if (thisArg) {
            T = thisArg;
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}
if (typeof (document) !== 'undefined' && typeof (window) !== 'undefined' && window['chrome'] === undefined) {
    var VBFunction = "Function IEBinaryToArray_ByteStr(Binary)\r\n" +
        " IEBinaryToArray_ByteStr = CStr(Binary)\r\n" +
        "End Function\r\n" +
        "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" +
        " Dim lastIndex\r\n" +
        " lastIndex = LenB(Binary)\r\n" +
        " if lastIndex mod 2 Then\r\n" +
        " IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" +
        " Else\r\n" +
        " IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" +
        " End If\r\n" +
        "End Function\r\n";
    if (document.readyState === 'loading') {
        document.write("<script type='text/vbscript'>\r\n" + VBFunction + "</script>\r\n");
    }
    else {
        var scriptElement = document.createElement('script');
        scriptElement.type = "text/vbscript";
        scriptElement.innerHTML = VBFunction;
        document.head.appendChild(scriptElement);
    }
}
var bfs = _dereq_('./core/browserfs');
module.exports = bfs;

},{"./core/browserfs":53,"./core/global":57}]},{},[49])(49)
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";

var _doppiojvm = require('doppiojvm');

var _doppiojvm2 = _interopRequireDefault(_doppiojvm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = _doppiojvm2.default.VM.Util;

registerNatives({
  'com/javapoly/XHRHttpURLConnection': {

    'getResponse([Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;[B)Lcom/javapoly/XHRResponse;': function getResponseLjavaLangStringLjavaLangStringLjavaLangStringBLcomJavapolyXHRResponse(thread, headers, method, url, outputBytes) {
      var methodStr = method.toString();
      var urlStr = url.toString();
      var myRequest = new XMLHttpRequest();
      myRequest.open(methodStr, urlStr);

      // Set the headers
      {
        var headerArray = headers.array;
        var headerCount = headerArray.length / 2;
        for (var i = 0; i < headerCount; i++) {
          myRequest.setRequestHeader(headerArray[2 * i], headerArray[2 * i + 1]);
        }
      }

      myRequest.responseType = "arraybuffer";
      myRequest.addEventListener("load", function () {
        thread.getLoader().initializeClass(thread, 'Lcom/javapoly/XHRResponse;', function () {
          var responseObj = util.newObject(thread, thread.getLoader(), 'Lcom/javapoly/XHRResponse;');
          responseObj['<init>(Ljava/lang/Object;)V'](thread, [myRequest], function (e) {
            if (e) {
              thread.throwException(e);
            } else {
              thread.asyncReturn(responseObj);
            }
          });
        });
      });

      thread.setStatus(6); // ASYNC_WAITING

      if (outputBytes == null) {
        myRequest.send();
      } else {
        myRequest.send(outputBytes.array);
      }
    }
  },

  'com/javapoly/XHRResponse': {

    'getResponseBytes(Ljava/lang/Object;)[B': function getResponseBytesLjavaLangObjectB(thread, xhrObj) {
      var array = Array.from(new Uint8Array(xhrObj.response));
      return util.newArrayFromData(thread, thread.getBsCl(), "[B", array);
    },

    'getHeaderField(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String;': function getHeaderFieldLjavaLangObjectLjavaLangStringLjavaLangString(thread, xhrObj, name) {
      return util.initString(thread.getBsCl(), xhrObj.getResponseHeader(name));
    }
  }
});

},{"doppiojvm":1}]},{},[3]);
