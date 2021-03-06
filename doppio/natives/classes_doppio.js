"use strict";var Doppio=require("../doppiojvm"),logging=Doppio.Debug.Logging,util=Doppio.VM.Util,classes_doppio_Debug=function(){function a(){}return a["SetLogLevel(Lclasses/doppio/Debug$LogLevel;)V"]=function(a,b){logging.log_level=b["classes/doppio/Debug$LogLevel/level"]},a["GetLogLevel()Lclasses/doppio/Debug$LogLevel;"]=function(a){var b=a.getBsCl().getInitializedClass(a,"Lclasses/doppio/Debug$LogLevel;").getConstructor(a);switch(logging.log_level){case 10:return b["classes/doppio/Debug$LogLevel/VTRACE"];case 9:return b["classes/doppio/Debug$LogLevel/TRACE"];case 5:return b["classes/doppio/Debug$LogLevel/DEBUG"];default:return b["classes/doppio/Debug$LogLevel/ERROR"]}},a}(),classes_doppio_JavaScript=function(){function classes_doppio_JavaScript(){}return classes_doppio_JavaScript["eval(Ljava/lang/String;)Ljava/lang/String;"]=function(thread,to_eval){try{var rv=eval(to_eval.toString());return null!=rv?util.initString(thread.getBsCl(),""+rv):null}catch(e){thread.throwNewException("Ljava/lang/Exception;","Error evaluating string: "+e)}},classes_doppio_JavaScript}();registerNatives({"classes/doppio/Debug":classes_doppio_Debug,"classes/doppio/JavaScript":classes_doppio_JavaScript});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9uYXRpdmVzL2NsYXNzZXNfZG9wcGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJZQUNBLElBQVksUUFBTSxRQUFNLGdCQUdqQixRQUFVLE9BQU8sTUFBTSxRQUN2QixLQUFPLE9BQU8sR0FBRyxLQUd4QixxQkFBQSxXQUFBLFFBQUEsTUFvQkEsTUFsQmdCLEdBQUEsaURBQWQsU0FBOEQsRUFBbUIsR0FDL0UsUUFBUSxVQUFZLEVBQVMsd0NBR2pCLEVBQUEsZ0RBQWQsU0FBNkQsR0FDM0QsR0FBSSxHQUF1SCxFQUFPLFVBQVUsb0JBQW9CLEVBQVEsbUNBQW9DLGVBQWUsRUFDM04sUUFBUSxRQUFRLFdBQ2QsSUFBSyxJQUNILE1BQU8sR0FBTyx1Q0FDaEIsS0FBSyxHQUNILE1BQU8sR0FBTyxzQ0FDaEIsS0FBSyxHQUNILE1BQU8sR0FBTyxzQ0FDaEIsU0FDRSxNQUFPLEdBQU8seUNBSXRCLEtBRUEsMEJBQUEsV0FBQSxRQUFBLDhCQWdCQSxNQWRnQiwyQkFBQSw4Q0FBZCxTQUEyRCxPQUFtQixTQUM1RSxJQUNFLEdBQUksSUFBSyxLQUFLLFFBQVEsV0FFdEIsT0FBVSxPQUFOLEdBQ0ssS0FBSyxXQUFXLE9BQU8sVUFBVyxHQUFLLElBRXZDLEtBRVQsTUFBTyxHQUNQLE9BQU8sa0JBQWtCLHdCQUF5Qiw0QkFBNEIsS0FJcEYsNEJBRUEsa0JBQ0UsdUJBQXdCLHFCQUN4Qiw0QkFBNkIiLCJmaWxlIjoiY2xhc3Nlc19kb3BwaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSlZNVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmNsdWRlcy9KVk1UeXBlcycpO1xuaW1wb3J0ICogYXMgRG9wcGlvIGZyb20gJy4uL2RvcHBpb2p2bSc7XG5pbXBvcnQgSlZNVGhyZWFkID0gRG9wcGlvLlZNLlRocmVhZGluZy5KVk1UaHJlYWQ7XG5pbXBvcnQgUmVmZXJlbmNlQ2xhc3NEYXRhID0gRG9wcGlvLlZNLkNsYXNzRmlsZS5SZWZlcmVuY2VDbGFzc0RhdGE7XG5pbXBvcnQgbG9nZ2luZyA9IERvcHBpby5EZWJ1Zy5Mb2dnaW5nO1xuaW1wb3J0IHV0aWwgPSBEb3BwaW8uVk0uVXRpbDtcbmRlY2xhcmUgdmFyIHJlZ2lzdGVyTmF0aXZlczogKGRlZnM6IGFueSkgPT4gdm9pZDtcblxuY2xhc3MgY2xhc3Nlc19kb3BwaW9fRGVidWcge1xuXG4gIHB1YmxpYyBzdGF0aWMgJ1NldExvZ0xldmVsKExjbGFzc2VzL2RvcHBpby9EZWJ1ZyRMb2dMZXZlbDspVicodGhyZWFkOiBKVk1UaHJlYWQsIGxvZ2xldmVsOiBKVk1UeXBlcy5jbGFzc2VzX2RvcHBpb19EZWJ1ZyRMb2dMZXZlbCk6IHZvaWQge1xuICAgIGxvZ2dpbmcubG9nX2xldmVsID0gbG9nbGV2ZWxbJ2NsYXNzZXMvZG9wcGlvL0RlYnVnJExvZ0xldmVsL2xldmVsJ107XG4gIH1cblxuICBwdWJsaWMgc3RhdGljICdHZXRMb2dMZXZlbCgpTGNsYXNzZXMvZG9wcGlvL0RlYnVnJExvZ0xldmVsOycodGhyZWFkOiBKVk1UaHJlYWQpOiBKVk1UeXBlcy5jbGFzc2VzX2RvcHBpb19EZWJ1ZyRMb2dMZXZlbCB7XG4gICAgdmFyIGxsX2NscyA9IDx0eXBlb2YgSlZNVHlwZXMuY2xhc3Nlc19kb3BwaW9fRGVidWckTG9nTGV2ZWw+ICg8UmVmZXJlbmNlQ2xhc3NEYXRhPEpWTVR5cGVzLmNsYXNzZXNfZG9wcGlvX0RlYnVnJExvZ0xldmVsPj4gdGhyZWFkLmdldEJzQ2woKS5nZXRJbml0aWFsaXplZENsYXNzKHRocmVhZCwgJ0xjbGFzc2VzL2RvcHBpby9EZWJ1ZyRMb2dMZXZlbDsnKSkuZ2V0Q29uc3RydWN0b3IodGhyZWFkKTtcbiAgICBzd2l0Y2ggKGxvZ2dpbmcubG9nX2xldmVsKSB7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICByZXR1cm4gbGxfY2xzWydjbGFzc2VzL2RvcHBpby9EZWJ1ZyRMb2dMZXZlbC9WVFJBQ0UnXTtcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgcmV0dXJuIGxsX2Nsc1snY2xhc3Nlcy9kb3BwaW8vRGVidWckTG9nTGV2ZWwvVFJBQ0UnXTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIGxsX2Nsc1snY2xhc3Nlcy9kb3BwaW8vRGVidWckTG9nTGV2ZWwvREVCVUcnXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsbF9jbHNbJ2NsYXNzZXMvZG9wcGlvL0RlYnVnJExvZ0xldmVsL0VSUk9SJ107XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgY2xhc3Nlc19kb3BwaW9fSmF2YVNjcmlwdCB7XG5cbiAgcHVibGljIHN0YXRpYyAnZXZhbChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7Jyh0aHJlYWQ6IEpWTVRocmVhZCwgdG9fZXZhbDogSlZNVHlwZXMuamF2YV9sYW5nX1N0cmluZyk6IEpWTVR5cGVzLmphdmFfbGFuZ19TdHJpbmcge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcnYgPSBldmFsKHRvX2V2YWwudG9TdHJpbmcoKSk7XG4gICAgICAvLyBDb2VyY2UgdG8gc3RyaW5nLCBpZiBwb3NzaWJsZS5cbiAgICAgIGlmIChydiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmluaXRTdHJpbmcodGhyZWFkLmdldEJzQ2woKSwgXCJcIiArIHJ2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocmVhZC50aHJvd05ld0V4Y2VwdGlvbignTGphdmEvbGFuZy9FeGNlcHRpb247JywgYEVycm9yIGV2YWx1YXRpbmcgc3RyaW5nOiAke2V9YCk7XG4gICAgfVxuICB9XG5cbn1cblxucmVnaXN0ZXJOYXRpdmVzKHtcbiAgJ2NsYXNzZXMvZG9wcGlvL0RlYnVnJzogY2xhc3Nlc19kb3BwaW9fRGVidWcsXG4gICdjbGFzc2VzL2RvcHBpby9KYXZhU2NyaXB0JzogY2xhc3Nlc19kb3BwaW9fSmF2YVNjcmlwdFxufSk7XG4iXX0=