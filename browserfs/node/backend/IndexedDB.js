"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var kvfs = require('../generic/key_value_filesystem');
var api_error_1 = require('../core/api_error');
var global = require('../core/global');
var util_1 = require('../core/util');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhlZERCLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JhY2tlbmQvSW5kZXhlZERCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU8sSUFBSSxXQUFXLGlDQUFpQyxDQUFDLENBQUM7QUFDekQsMEJBQWtDLG1CQUFtQixDQUFDLENBQUE7QUFDdEQsSUFBTyxNQUFNLFdBQVcsZ0JBQWdCLENBQUMsQ0FBQztBQUMxQyxxQkFBcUQsY0FBYyxDQUFDLENBQUE7QUFJcEUsSUFBSSxTQUFTLEdBQWUsTUFBTSxDQUFDLFNBQVM7SUFDWixNQUFPLENBQUMsWUFBWTtJQUNwQixNQUFPLENBQUMsZUFBZTtJQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDO0FBTTdDLHNCQUFzQixDQUFpQixFQUFFLE9BQThCO0lBQTlCLHVCQUE4QixHQUE5QixVQUFrQixDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ3JFLE1BQU0sQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxlQUFlO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLG9CQUFRLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsS0FBSyxvQkFBb0I7WUFDdkIsTUFBTSxDQUFDLElBQUksb0JBQVEsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRDtZQUVFLE1BQU0sQ0FBQyxJQUFJLG9CQUFRLENBQUMscUJBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztBQUNILENBQUM7QUFPRCx3QkFBd0IsRUFBeUIsRUFDL0MsSUFBK0IsRUFBRSxPQUFzQjtJQUF2RCxvQkFBK0IsR0FBL0IsT0FBa0IscUJBQVMsQ0FBQyxHQUFHO0lBQUUsdUJBQXNCLEdBQXRCLGNBQXNCO0lBQ3ZELE1BQU0sQ0FBQyxVQUFVLENBQU87UUFFdEIsQ0FBQyxDQUFD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QyxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFYSwrQkFBVyxHQUF6QjtRQUtFLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRixDQUFFO1FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFpRCxJQUFJLENBQUMsdUJBQXVCLEdBeUI1RTtBQXpCRDt3Q0F5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrdmZzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9rZXlfdmFsdWVfZmlsZXN5c3RlbScpO1xuaW1wb3J0IHtBcGlFcnJvciwgRXJyb3JDb2RlfSBmcm9tICcuLi9jb3JlL2FwaV9lcnJvcic7XG5pbXBvcnQgZ2xvYmFsID0gcmVxdWlyZSgnLi4vY29yZS9nbG9iYWwnKTtcbmltcG9ydCB7YXJyYXlCdWZmZXIyQnVmZmVyLCBidWZmZXIyQXJyYXlCdWZmZXJ9IGZyb20gJy4uL2NvcmUvdXRpbCc7XG4vKipcbiAqIEdldCB0aGUgaW5kZXhlZERCIGNvbnN0cnVjdG9yIGZvciB0aGUgY3VycmVudCBicm93c2VyLlxuICovXG52YXIgaW5kZXhlZERCOiBJREJGYWN0b3J5ID0gZ2xvYmFsLmluZGV4ZWREQiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5nbG9iYWwpLm1vekluZGV4ZWREQiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5nbG9iYWwpLndlYmtpdEluZGV4ZWREQiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwubXNJbmRleGVkREI7XG5cbi8qKlxuICogQ29udmVydHMgYSBET01FeGNlcHRpb24gb3IgYSBET01FcnJvciBmcm9tIGFuIEluZGV4ZWREQiBldmVudCBpbnRvIGFcbiAqIHN0YW5kYXJkaXplZCBCcm93c2VyRlMgQVBJIGVycm9yLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0RXJyb3IoZToge25hbWU6IHN0cmluZ30sIG1lc3NhZ2U6IHN0cmluZyA9IGUudG9TdHJpbmcoKSk6IEFwaUVycm9yIHtcbiAgc3dpdGNoKGUubmFtZSkge1xuICAgIGNhc2UgXCJOb3RGb3VuZEVycm9yXCI6XG4gICAgICByZXR1cm4gbmV3IEFwaUVycm9yKEVycm9yQ29kZS5FTk9FTlQsIG1lc3NhZ2UpO1xuICAgIGNhc2UgXCJRdW90YUV4Y2VlZGVkRXJyb3JcIjpcbiAgICAgIHJldHVybiBuZXcgQXBpRXJyb3IoRXJyb3JDb2RlLkVOT1NQQywgbWVzc2FnZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFRoZSByZXN0IGRvIG5vdCBzZWVtIHRvIG1hcCBjbGVhbmx5IHRvIHN0YW5kYXJkIGVycm9yIGNvZGVzLlxuICAgICAgcmV0dXJuIG5ldyBBcGlFcnJvcihFcnJvckNvZGUuRUlPLCBtZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IG9uZXJyb3IgaGFuZGxlciBmb3IgSURCLiBPdXIgZXJyb3JzIGFyZSBhbHdheXMgZmF0YWwsIHNvIHdlXG4gKiBoYW5kbGUgdGhlbSBnZW5lcmljYWxseTogQ2FsbCB0aGUgdXNlci1zdXBwbGllZCBjYWxsYmFjayB3aXRoIGEgdHJhbnNsYXRlZFxuICogdmVyc2lvbiBvZiB0aGUgZXJyb3IsIGFuZCBsZXQgdGhlIGVycm9yIGJ1YmJsZSB1cC5cbiAqL1xuZnVuY3Rpb24gb25FcnJvckhhbmRsZXIoY2I6IChlOiBBcGlFcnJvcikgPT4gdm9pZCxcbiAgY29kZTogRXJyb3JDb2RlID0gRXJyb3JDb2RlLkVJTywgbWVzc2FnZTogc3RyaW5nID0gbnVsbCk6IChlPzogYW55KSA9PiB2b2lkIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlPzogYW55KTogdm9pZCB7XG4gICAgLy8gUHJldmVudCB0aGUgZXJyb3IgZnJvbSBjYW5jZWxpbmcgdGhlIHRyYW5zYWN0aW9uLlxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjYihuZXcgQXBpRXJyb3IoY29kZSwgbWVzc2FnZSkpO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSW5kZXhlZERCUk9UcmFuc2FjdGlvbiBpbXBsZW1lbnRzIGt2ZnMuQXN5bmNLZXlWYWx1ZVJPVHJhbnNhY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHg6IElEQlRyYW5zYWN0aW9uLCBwdWJsaWMgc3RvcmU6IElEQk9iamVjdFN0b3JlKSB7IH1cblxuICBnZXQoa2V5OiBzdHJpbmcsIGNiOiAoZTogQXBpRXJyb3IsIGRhdGE/OiBOb2RlQnVmZmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByOiBJREJSZXF1ZXN0ID0gdGhpcy5zdG9yZS5nZXQoa2V5KTtcbiAgICAgIHIub25lcnJvciA9IG9uRXJyb3JIYW5kbGVyKGNiKTtcbiAgICAgIHIub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIElEQiByZXR1cm5zIHRoZSB2YWx1ZSAndW5kZWZpbmVkJyB3aGVuIHlvdSB0cnkgdG8gZ2V0IGtleXMgdGhhdFxuICAgICAgICAvLyBkb24ndCBleGlzdC4gVGhlIGNhbGxlciBleHBlY3RzIHRoaXMgYmVoYXZpb3IuXG4gICAgICAgIHZhciByZXN1bHQ6IGFueSA9ICg8YW55PmV2ZW50LnRhcmdldCkucmVzdWx0O1xuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYihudWxsLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElEQiBkYXRhIGlzIHN0b3JlZCBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAgICAgIGNiKG51bGwsIGFycmF5QnVmZmVyMkJ1ZmZlcihyZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYihjb252ZXJ0RXJyb3IoZSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5kZXhlZERCUldUcmFuc2FjdGlvbiBleHRlbmRzIEluZGV4ZWREQlJPVHJhbnNhY3Rpb24gaW1wbGVtZW50cyBrdmZzLkFzeW5jS2V5VmFsdWVSV1RyYW5zYWN0aW9uLCBrdmZzLkFzeW5jS2V5VmFsdWVST1RyYW5zYWN0aW9uIHtcbiAgY29uc3RydWN0b3IodHg6IElEQlRyYW5zYWN0aW9uLCBzdG9yZTogSURCT2JqZWN0U3RvcmUpIHtcbiAgICBzdXBlcih0eCwgc3RvcmUpO1xuICB9XG5cbiAgcHVibGljIHB1dChrZXk6IHN0cmluZywgZGF0YTogTm9kZUJ1ZmZlciwgb3ZlcndyaXRlOiBib29sZWFuLCBjYjogKGU6IEFwaUVycm9yLCBjb21taXR0ZWQ/OiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhcnJheWJ1ZmZlciA9IGJ1ZmZlcjJBcnJheUJ1ZmZlcihkYXRhKSxcbiAgICAgICAgcjogSURCUmVxdWVzdDtcbiAgICAgIGlmIChvdmVyd3JpdGUpIHtcbiAgICAgICAgciA9IHRoaXMuc3RvcmUucHV0KGFycmF5YnVmZmVyLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJ2FkZCcgd2lsbCBuZXZlciBvdmVyd3JpdGUgYW4gZXhpc3Rpbmcga2V5LlxuICAgICAgICByID0gdGhpcy5zdG9yZS5hZGQoYXJyYXlidWZmZXIsIGtleSk7XG4gICAgICB9XG4gICAgICAvLyBYWFg6IE5FRUQgVE8gUkVUVVJOIEZBTFNFIFdIRU4gQUREIEhBUyBBIEtFWSBDT05GTElDVC4gTk8gRVJST1IuXG4gICAgICByLm9uZXJyb3IgPSBvbkVycm9ySGFuZGxlcihjYik7XG4gICAgICByLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBjYihudWxsLCB0cnVlKTtcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoY29udmVydEVycm9yKGUpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVsKGtleTogc3RyaW5nLCBjYjogKGU/OiBBcGlFcnJvcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICAvLyBOT1RFOiBJRTggaGFzIGEgYnVnIHdpdGggaWRlbnRpZmllcnMgbmFtZWQgJ2RlbGV0ZScgdW5sZXNzIHVzZWQgYXMgYSBzdHJpbmdcbiAgICAgIC8vIGxpa2UgdGhpcy5cbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NDc5MTUyXG4gICAgICB2YXIgcjogSURCUmVxdWVzdCA9IHRoaXMuc3RvcmVbJ2RlbGV0ZSddKGtleSk7XG4gICAgICByLm9uZXJyb3IgPSBvbkVycm9ySGFuZGxlcihjYik7XG4gICAgICByLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBjYigpO1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYihjb252ZXJ0RXJyb3IoZSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21taXQoY2I6IChlPzogQXBpRXJyb3IpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyBSZXR1cm4gdG8gdGhlIGV2ZW50IGxvb3AgdG8gY29tbWl0IHRoZSB0cmFuc2FjdGlvbi5cbiAgICBzZXRUaW1lb3V0KGNiLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBhYm9ydChjYjogKGU/OiBBcGlFcnJvcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHZhciBfZTogQXBpRXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudHguYWJvcnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBfZSA9IGNvbnZlcnRFcnJvcihlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY2IoX2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5kZXhlZERCU3RvcmUgaW1wbGVtZW50cyBrdmZzLkFzeW5jS2V5VmFsdWVTdG9yZSB7XG4gIHByaXZhdGUgZGI6IElEQkRhdGFiYXNlO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuIEluZGV4ZWREQiBmaWxlIHN5c3RlbS5cbiAgICogQHBhcmFtIGNiIENhbGxlZCBvbmNlIHRoZSBkYXRhYmFzZSBpcyBpbnN0YW50aWF0ZWQgYW5kIHJlYWR5IGZvciB1c2UuXG4gICAqICAgUGFzc2VzIGFuIGVycm9yIGlmIHRoZXJlIHdhcyBhbiBpc3N1ZSBpbnN0YW50aWF0aW5nIHRoZSBkYXRhYmFzZS5cbiAgICogQHBhcmFtIG9iamVjdFN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGlzIGZpbGUgc3lzdGVtLiBZb3UgY2FuIGhhdmVcbiAgICogICBtdWx0aXBsZSBJbmRleGVkREIgZmlsZSBzeXN0ZW1zIG9wZXJhdGluZyBhdCBvbmNlLCBidXQgZWFjaCBtdXN0IGhhdmVcbiAgICogICBhIGRpZmZlcmVudCBuYW1lLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY2I6IChlOiBBcGlFcnJvciwgc3RvcmU/OiBJbmRleGVkREJTdG9yZSkgPT4gdm9pZCwgcHJpdmF0ZSBzdG9yZU5hbWU6IHN0cmluZyA9ICdicm93c2VyZnMnKSB7XG4gICAgdmFyIG9wZW5SZXE6IElEQk9wZW5EQlJlcXVlc3QgPSBpbmRleGVkREIub3Blbih0aGlzLnN0b3JlTmFtZSwgMSk7XG5cbiAgICBvcGVuUmVxLm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgdmFyIGRiOiBJREJEYXRhYmFzZSA9ICg8YW55PmV2ZW50LnRhcmdldCkucmVzdWx0O1xuICAgICAgLy8gSHVoLiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW47IHdlJ3JlIGF0IHZlcnNpb24gMS4gV2h5IGRvZXMgYW5vdGhlclxuICAgICAgLy8gZGF0YWJhc2UgZXhpc3Q/XG4gICAgICBpZiAoZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyh0aGlzLnN0b3JlTmFtZSkpIHtcbiAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpO1xuICAgICAgfVxuICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpO1xuICAgIH07XG5cbiAgICBvcGVuUmVxLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kYiA9ICg8YW55PmV2ZW50LnRhcmdldCkucmVzdWx0O1xuICAgICAgY2IobnVsbCwgdGhpcyk7XG4gICAgfTtcblxuICAgIG9wZW5SZXEub25lcnJvciA9IG9uRXJyb3JIYW5kbGVyKGNiLCBFcnJvckNvZGUuRUFDQ0VTKTtcbiAgfVxuXG4gIHB1YmxpYyBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiSW5kZXhlZERCIC0gXCIgKyB0aGlzLnN0b3JlTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcihjYjogKGU/OiBBcGlFcnJvcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCAncmVhZHdyaXRlJyksXG4gICAgICAgIG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpLFxuICAgICAgICByOiBJREJSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuY2xlYXIoKTtcbiAgICAgIHIub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFVzZSBzZXRUaW1lb3V0IHRvIGNvbW1pdCB0cmFuc2FjdGlvbi5cbiAgICAgICAgc2V0VGltZW91dChjYiwgMCk7XG4gICAgICB9O1xuICAgICAgci5vbmVycm9yID0gb25FcnJvckhhbmRsZXIoY2IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNiKGNvbnZlcnRFcnJvcihlKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJlZ2luVHJhbnNhY3Rpb24odHlwZTogc3RyaW5nID0gJ3JlYWRvbmx5Jyk6IGt2ZnMuQXN5bmNLZXlWYWx1ZVJPVHJhbnNhY3Rpb24ge1xuICAgIHZhciB0eCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWUsIHR5cGUpLFxuICAgICAgb2JqZWN0U3RvcmUgPSB0eC5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSk7XG4gICAgaWYgKHR5cGUgPT09ICdyZWFkd3JpdGUnKSB7XG4gICAgICByZXR1cm4gbmV3IEluZGV4ZWREQlJXVHJhbnNhY3Rpb24odHgsIG9iamVjdFN0b3JlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZWFkb25seScpIHtcbiAgICAgIHJldHVybiBuZXcgSW5kZXhlZERCUk9UcmFuc2FjdGlvbih0eCwgb2JqZWN0U3RvcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoRXJyb3JDb2RlLkVJTlZBTCwgJ0ludmFsaWQgdHJhbnNhY3Rpb24gdHlwZS4nKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIGZpbGUgc3lzdGVtIHRoYXQgdXNlcyB0aGUgSW5kZXhlZERCIGtleSB2YWx1ZSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhlZERCRmlsZVN5c3RlbSBleHRlbmRzIGt2ZnMuQXN5bmNLZXlWYWx1ZUZpbGVTeXN0ZW0ge1xuICBjb25zdHJ1Y3RvcihjYjogKGU6IEFwaUVycm9yLCBmcz86IEluZGV4ZWREQkZpbGVTeXN0ZW0pID0+IHZvaWQsIHN0b3JlTmFtZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgbmV3IEluZGV4ZWREQlN0b3JlKChlLCBzdG9yZT8pOiB2b2lkID0+IHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNiKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0KHN0b3JlLCAoZT8pID0+IHtcbiAgICAgICAgICBjYihlLCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgc3RvcmVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgLy8gSW4gU2FmYXJpJ3MgcHJpdmF0ZSBicm93c2luZyBtb2RlLCBpbmRleGVkREIub3BlbiByZXR1cm5zIE5VTEwuXG4gICAgLy8gSW4gRmlyZWZveCwgaXQgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICAvLyBJbiBDaHJvbWUsIGl0IFwianVzdCB3b3Jrc1wiLCBhbmQgY2xlYXJzIHRoZSBkYXRhYmFzZSB3aGVuIHlvdSBsZWF2ZSB0aGUgcGFnZS5cbiAgICAvLyBVbnRlc3RlZDogT3BlcmEsIElFLlxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiYgbnVsbCAhPT0gaW5kZXhlZERCLm9wZW4oXCJfX2Jyb3dzZXJmc190ZXN0X19cIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19