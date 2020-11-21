"use strict";function getFieldInfo(a,b,c,d){var e,f,g,h,i=c.getClass(),j=b.getClass().getConstructor(a),k=1;return"Ljava/lang/Object;"===i.getInternalName()?(g=c.$staticFieldBase,f=g.getConstructor(a),e=g.getStaticFieldFromVMIndex(d.toInt()).fullName):i instanceof ArrayClassData?(h=util.internal2external[i.getInternalName()[1]],h||(h="OBJECT"),h=h.toUpperCase(),k=j["sun/misc/Unsafe/ARRAY_"+h+"_INDEX_SCALE"],k||(k=1),f=c.array,e=""+d.toInt()/k):(g=c.getClass(),f=c,e=g.getObjectFieldFromVMIndex(d.toInt()).fullName),[f,e]}function unsafeCompareAndSwap(a,b,c,d,e,f){var g=getFieldInfo(a,b,c,d),h=g[0][g[1]];return h===e&&(g[0][g[1]]=f,!0)}function getFromVMIndex(a,b,c,d){var e=getFieldInfo(a,b,c,d);return e[0][e[1]]}function setFromVMIndex(a,b,c,d,e){var f=getFieldInfo(a,b,c,d);f[0][f[1]]=e}var Doppio=require("../doppiojvm"),ReferenceClassData=Doppio.VM.ClassFile.ReferenceClassData,ArrayClassData=Doppio.VM.ClassFile.ArrayClassData,util=Doppio.VM.Util,Long=Doppio.VM.Long,ThreadStatus=Doppio.VM.Enums.ThreadStatus,assert=Doppio.Debug.Assert,sun_misc_GC=function(){function a(){}return a["maxObjectInspectionAge()J"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a}(),sun_misc_MessageUtils=function(){function a(){}return a["toStderr(Ljava/lang/String;)V"]=function(a,b){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["toStdout(Ljava/lang/String;)V"]=function(a,b){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),sun_misc_NativeSignalHandler=function(){function a(){}return a["handle0(IJ)V"]=function(a,b,c){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),sun_misc_Perf=function(){function a(){}return a["attach(Ljava/lang/String;II)Ljava/nio/ByteBuffer;"]=function(a,b,c,d,e){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["detach(Ljava/nio/ByteBuffer;)V"]=function(a,b,c){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["createLong(Ljava/lang/String;IIJ)Ljava/nio/ByteBuffer;"]=function(a,b,c,d,e,f){a["import"]("Ljava/nio/DirectByteBuffer;",function(b){var c=new b(a),d=a.getJVM().getHeap(),e=d.malloc(8);c["<init>(JI)V"](a,[Long.fromNumber(e),null,8],function(b){b?a.throwException(b):(d.store_word(e,f.getLowBits()),d.store_word(e+4,f.getHighBits()),a.asyncReturn(c))})})},a["createByteArray(Ljava/lang/String;II[BI)Ljava/nio/ByteBuffer;"]=function(a,b,c,d,e,f,g){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["highResCounter()J"]=function(a,b){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["highResFrequency()J"]=function(a,b){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["registerNatives()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),sun_misc_Signal=function(){function a(){}return a["findSignal(Ljava/lang/String;)I"]=function(a,b){return-1},a["handle0(IJ)J"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["raise0(I)V"]=function(a,b){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),sun_misc_Unsafe=function(){function a(){}return a["getByte(J)B"]=function(a,b,c){var d=a.getJVM().getHeap();return d.get_signed_byte(c.toNumber())},a["putByte(JB)V"]=function(a,b,c,d){var e=a.getJVM().getHeap();e.set_signed_byte(c.toNumber(),d)},a["getShort(J)S"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["putShort(JS)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getChar(J)C"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["putChar(JC)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getInt(J)I"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["putInt(JI)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getLong(J)J"]=function(a,b,c){var d=a.getJVM().getHeap(),e=c.toNumber();return new Long(d.get_word(e),d.get_word(e+4))},a["putLong(JJ)V"]=function(a,b,c,d){var e=a.getJVM().getHeap(),f=c.toNumber();e.store_word(f,d.getLowBits()),e.store_word(f+4,d.getHighBits())},a["getFloat(J)F"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["putFloat(JF)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getDouble(J)D"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["putDouble(JD)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["getAddress(J)J"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["putAddress(JJ)V"]=function(a,b,c,d){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["allocateMemory(J)J"]=function(a,b,c){var d=a.getJVM().getHeap();return Long.fromNumber(d.malloc(c.toNumber()))},a["reallocateMemory(JJ)J"]=function(a,b,c,d){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["setMemory(Ljava/lang/Object;JJB)V"]=function(a,b,c,d,e,f){if(null===c){var g,h=d.toNumber(),i=e.toNumber(),j=a.getJVM().getHeap();for(g=0;g<i;g++)j.set_signed_byte(h+g,f)}else a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["copyMemory(Ljava/lang/Object;JLjava/lang/Object;JJ)V"]=function(a,b,c,d,e,f,g){var h=a.getJVM().getHeap(),i=d.toNumber(),j=f.toNumber(),k=g.toNumber();if(null===c&&null===e)h.memcpy(i,j,k);else if(null===c&&null!==e)if(util.is_array_type(e.getClass().getInternalName())&&util.is_primitive_type(e.getClass().getComponentClass().getInternalName())){var l=e;switch(l.getClass().getComponentClass().getInternalName()){case"B":for(var m=0;m<k;m++)l.array[j+m]=h.get_signed_byte(i+m);break;default:a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented. destArray type: "+l.getClass().getComponentClass().getInternalName())}}else a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.");else if(null!==c&&null===e)if(util.is_array_type(c.getClass().getInternalName())&&util.is_primitive_type(c.getClass().getComponentClass().getInternalName())){var n=c;switch(n.getClass().getComponentClass().getInternalName()){case"B":case"C":for(var m=0;m<k;m++)h.set_signed_byte(j+m,n.array[i+m]);break;default:a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented. srcArray:"+n.getClass().getComponentClass().getInternalName())}}else a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.");else a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented. Both src and dest are arrays?")},a["freeMemory(J)V"]=function(a,b,c){var d=a.getJVM().getHeap();d.free(c.toNumber())},a["staticFieldOffset(Ljava/lang/reflect/Field;)J"]=function(a,b,c){var d=c["java/lang/reflect/Field/clazz"].$cls;return Long.fromNumber(d.getVMIndexForField(d.getFieldFromSlot(c["java/lang/reflect/Field/slot"])))},a["objectFieldOffset(Ljava/lang/reflect/Field;)J"]=function(a,b,c){var d=c["java/lang/reflect/Field/clazz"].$cls;return Long.fromNumber(d.getVMIndexForField(d.getFieldFromSlot(c["java/lang/reflect/Field/slot"])))},a["staticFieldBase(Ljava/lang/reflect/Field;)Ljava/lang/Object;"]=function(a,b,c){var d=new(a.getBsCl().getInitializedClass(a,"Ljava/lang/Object;").getConstructor(a))(a);return d.$staticFieldBase=c["java/lang/reflect/Field/clazz"].$cls,d},a["ensureClassInitialized(Ljava/lang/Class;)V"]=function(a,b,c){c.$cls.isInitialized(a)||(a.setStatus(ThreadStatus.ASYNC_WAITING),c.$cls.initialize(a,function(b){null!=b&&a.asyncReturn()},!0))},a["arrayBaseOffset(Ljava/lang/Class;)I"]=function(a,b,c){return 0},a["arrayIndexScale(Ljava/lang/Class;)I"]=function(a,b,c){var d=c.$cls;if(!(d instanceof ArrayClassData))return-1;switch(d.getComponentClass().getInternalName()[0]){case"L":case"[":case"F":case"I":return 4;case"B":case"Z":return 1;case"C":case"S":return 2;case"D":case"J":return 8;default:return-1}},a["addressSize()I"]=function(a,b){return 4},a["pageSize()I"]=function(a,b){return 4096},a["defineClass(Ljava/lang/String;[BIILjava/lang/ClassLoader;Ljava/security/ProtectionDomain;)Ljava/lang/Class;"]=function(a,b,c,d,e,f,g,h){var i=util.getLoader(a,g),j=i.defineClass(a,util.int_classname(c.toString()),util.byteArray2Buffer(d.array,e,f),h);null!==j&&(a.setStatus(ThreadStatus.ASYNC_WAITING),j.resolve(a,function(b){null!==b&&a.asyncReturn(b.getClassObject(a))}))},a["allocateInstance(Ljava/lang/Class;)Ljava/lang/Object;"]=function(a,b,c){var d=c.$cls;return d.isInitialized(a)?new(d.getConstructor(a))(a):(a.setStatus(ThreadStatus.ASYNC_WAITING),void d.initialize(a,function(){a.asyncReturn(new(d.getConstructor(a))(a))}))},a["monitorEnter(Ljava/lang/Object;)V"]=function(a,b,c){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["monitorExit(Ljava/lang/Object;)V"]=function(a,b,c){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a["tryMonitorEnter(Ljava/lang/Object;)Z"]=function(a,b,c){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["throwException(Ljava/lang/Throwable;)V"]=function(a,b,c){a.throwException(c)},a["unpark(Ljava/lang/Object;)V"]=function(a,b,c){a.getJVM().getParker().unpark(c.$thread)},a["park(ZJ)V"]=function(a,b,c,d){var e=1/0,f=a.getJVM().getParker();c?(e=d.toNumber()-(new Date).getTime(),e<0&&(e=0)):d.toNumber()>0&&(e=d.toNumber()/1e6);var g;e!==1/0&&(g=setTimeout(function(){f.completelyUnpark(a)},e)),f.park(a,function(){clearTimeout(g),a.asyncReturn()})},a["getLoadAverage([DI)I"]=function(a,b,c,d){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["shouldBeInitialized(Ljava/lang/Class;)Z"]=function(a,b,c){return c.$cls.isInitialized(a)?0:1},a["defineAnonymousClass(Ljava/lang/Class;[B[Ljava/lang/Object;)Ljava/lang/Class;"]=function(a,b,c,d,e){return new ReferenceClassData(new Buffer(d.array),null,c.$cls.getLoader(),e).getClassObject(a)},a["loadFence()V"]=function(a,b){},a["storeFence()V"]=function(a,b){},a["fullFence()V"]=function(a,b){},a["getInt(Ljava/lang/Object;J)I"]=getFromVMIndex,a["putInt(Ljava/lang/Object;JI)V"]=setFromVMIndex,a["getObject(Ljava/lang/Object;J)Ljava/lang/Object;"]=getFromVMIndex,a["putObject(Ljava/lang/Object;JLjava/lang/Object;)V"]=setFromVMIndex,a["getBoolean(Ljava/lang/Object;J)Z"]=getFromVMIndex,a["putBoolean(Ljava/lang/Object;JZ)V"]=setFromVMIndex,a["getByte(Ljava/lang/Object;J)B"]=getFromVMIndex,a["putByte(Ljava/lang/Object;JB)V"]=setFromVMIndex,a["getShort(Ljava/lang/Object;J)S"]=getFromVMIndex,a["putShort(Ljava/lang/Object;JS)V"]=setFromVMIndex,a["getChar(Ljava/lang/Object;J)C"]=getFromVMIndex,a["putChar(Ljava/lang/Object;JC)V"]=setFromVMIndex,a["getLong(Ljava/lang/Object;J)J"]=getFromVMIndex,a["putLong(Ljava/lang/Object;JJ)V"]=setFromVMIndex,a["getFloat(Ljava/lang/Object;J)F"]=getFromVMIndex,a["putFloat(Ljava/lang/Object;JF)V"]=setFromVMIndex,a["getDouble(Ljava/lang/Object;J)D"]=getFromVMIndex,a["putDouble(Ljava/lang/Object;JD)V"]=setFromVMIndex,a["compareAndSwapObject(Ljava/lang/Object;JLjava/lang/Object;Ljava/lang/Object;)Z"]=unsafeCompareAndSwap,a["compareAndSwapInt(Ljava/lang/Object;JII)Z"]=unsafeCompareAndSwap,a["compareAndSwapLong(Ljava/lang/Object;JJJ)Z"]=unsafeCompareAndSwap,a["getObjectVolatile(Ljava/lang/Object;J)Ljava/lang/Object;"]=getFromVMIndex,a["putObjectVolatile(Ljava/lang/Object;JLjava/lang/Object;)V"]=setFromVMIndex,a["getIntVolatile(Ljava/lang/Object;J)I"]=getFromVMIndex,a["putIntVolatile(Ljava/lang/Object;JI)V"]=setFromVMIndex,a["getBooleanVolatile(Ljava/lang/Object;J)Z"]=getFromVMIndex,a["putBooleanVolatile(Ljava/lang/Object;JZ)V"]=setFromVMIndex,a["getByteVolatile(Ljava/lang/Object;J)B"]=getFromVMIndex,a["putByteVolatile(Ljava/lang/Object;JB)V"]=setFromVMIndex,a["getShortVolatile(Ljava/lang/Object;J)S"]=getFromVMIndex,a["putShortVolatile(Ljava/lang/Object;JS)V"]=setFromVMIndex,a["getCharVolatile(Ljava/lang/Object;J)C"]=getFromVMIndex,a["putCharVolatile(Ljava/lang/Object;JC)V"]=setFromVMIndex,a["getLongVolatile(Ljava/lang/Object;J)J"]=getFromVMIndex,a["putLongVolatile(Ljava/lang/Object;JJ)V"]=setFromVMIndex,a["getFloatVolatile(Ljava/lang/Object;J)F"]=getFromVMIndex,a["putFloatVolatile(Ljava/lang/Object;JF)V"]=setFromVMIndex,a["getDoubleVolatile(Ljava/lang/Object;J)D"]=getFromVMIndex,a["putDoubleVolatile(Ljava/lang/Object;JD)V"]=setFromVMIndex,a["putOrderedObject(Ljava/lang/Object;JLjava/lang/Object;)V"]=setFromVMIndex,a["putOrderedInt(Ljava/lang/Object;JI)V"]=setFromVMIndex,a["putOrderedLong(Ljava/lang/Object;JJ)V"]=setFromVMIndex,a}(),sun_misc_Version=function(){function a(){}return a["getJvmSpecialVersion()Ljava/lang/String;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["getJdkSpecialVersion()Ljava/lang/String;"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a["getJvmVersionInfo()Z"]=function(a){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),0},a["getJdkVersionInfo()V"]=function(a){a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented.")},a}(),sun_misc_VM=function(){function a(){}return a["initialize()V"]=function(a){},a["latestUserDefinedLoader()Ljava/lang/ClassLoader;"]=function(a){var b,c,d=a.getStackTrace(),e=a.getBsCl();for(b=d.length-1;b>=0;b--)if(c=d[b].method.cls.getLoader(),c!==e)return c.getLoaderObject();return null},a}(),sun_misc_VMSupport=function(){function a(){}return a["initAgentProperties(Ljava/util/Properties;)Ljava/util/Properties;"]=function(a,b){return a.throwNewException("Ljava/lang/UnsatisfiedLinkError;","Native method not implemented."),null},a}(),sun_misc_URLClassPath=function(){function a(){}return a["getLookupCacheURLs(Ljava/lang/ClassLoader;)[Ljava/net/URL;"]=function(a,b){return null},a["getLookupCacheForClassLoader(Ljava/lang/ClassLoader;Ljava/lang/String;)[I"]=function(a,b,c){return null},a["knownToNotExist0(Ljava/lang/ClassLoader;Ljava/lang/String;)Z"]=function(a,b,c){return!1},a}();registerNatives({"sun/misc/GC":sun_misc_GC,"sun/misc/MessageUtils":sun_misc_MessageUtils,"sun/misc/NativeSignalHandler":sun_misc_NativeSignalHandler,"sun/misc/Perf":sun_misc_Perf,"sun/misc/Signal":sun_misc_Signal,"sun/misc/Unsafe":sun_misc_Unsafe,"sun/misc/Version":sun_misc_Version,"sun/misc/VM":sun_misc_VM,"sun/misc/VMSupport":sun_misc_VMSupport,"sun/misc/URLClassPath":sun_misc_URLClassPath});
//# sourceMappingURL=sun_misc.js.map