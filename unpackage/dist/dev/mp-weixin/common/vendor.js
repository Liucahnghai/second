(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "",
    appName: "惊喜app",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.4.18",
    uniRuntimeVersion: "3.4.18",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "",
      appName: "惊喜app",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'receive',
        data: normalizePushMessage(args.message) });

    });
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientid(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  getPushCidCallbacks.push(function (cid, errMsg) {
    var res;
    if (cid) {
      res = {
        errMsg: 'getPushClientid:ok',
        cid: cid };

      hasSuccess && success(res);
    } else {
      res = {
        errMsg: 'getPushClientid:fail' + (errMsg ? ' ' + errMsg : '') };

      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  if (typeof cid !== 'undefined') {
    Promise.resolve().then(function () {return invokeGetPushCidCallbacks(cid, cidErrMsg);});
  }
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientid: getPushClientid,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"惊喜app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"惊喜app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"惊喜app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"惊喜app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"惊喜app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!***************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/pages.json ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!***********************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 13));

var _mpMixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mpMixin.js */ 14));

var _luchRequest = _interopRequireDefault(__webpack_require__(/*! ./libs/luch-request */ 15));


var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/util/route.js */ 33));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 37));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 38));

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 39));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 40));

var _index = _interopRequireDefault(__webpack_require__(/*! ./libs/function/index.js */ 41));


var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 43));

var _props = _interopRequireDefault(__webpack_require__(/*! ./libs/config/props.js */ 44));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 134));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 92));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./libs/function/platform */ 135));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 看到此报错，是因为没有配置vue.config.js的【transpileDependencies】，详见：https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置
var pleaseSetTranspileDependencies = {},babelTest = pleaseSetTranspileDependencies === null || pleaseSetTranspileDependencies === void 0 ? void 0 : pleaseSetTranspileDependencies.test; // 引入全局mixin
var $u = _objectSpread(_objectSpread({
  route: _route.default,
  date: _index.default.timeFormat, // 另名date
  colorGradient: _colorGradient.default.colorGradient,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  colorToRgba: _colorGradient.default.colorToRgba,
  test: _test.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new _luchRequest.default(),
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  mixin: _mixin.default,
  mpMixin: _mpMixin.default,
  props: _props.default },
_index.default), {}, {
  color: _color.default,
  platform: _platform.default });


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  Vue.filter('date', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {return uni.$u.timeFrom(timestamp, format);});
  // 同时挂载到uni和Vue.prototype中

  // 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
  Vue.prototype.$u = $u;
  Vue.mixin(_mixin.default);

};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!**********************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {return {};} },

    customClass: {
      type: String,
      default: '' },

    // 跳转的页面路径
    url: {
      type: String,
      default: '' },

    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo' } },


  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$u
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
    // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
    // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
    $u: function $u() {

      // 在非nvue端，移除props，http，mixin等对象，避免在小程序setData时数据过大影响性能
      return uni.$u.deepMerge(uni.$u, {
        props: undefined,
        http: undefined,
        mixin: undefined });





    },
    /**
        * 生成bem规则类名
        * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
        * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
        * @param {String} name 组件名称
        * @param {Array} fixed 一直会存在的类名
        * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
        * @returns {Array|string}
        */
    bem: function bem() {
      return function (name, fixed, change) {var _this = this;
        // 类名前缀
        var prefix = "u-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



      };
    } },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url });

      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this2)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this3 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似u-radio的父组件u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件u-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/mixin/mpMixin.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {

  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true } };exports.default = _default;

/***/ }),
/* 15 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

_Request.default;exports.default = _default;

/***/ }),
/* 16 */
/*!************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/Request.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 17));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 25));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 26));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 27));
var _utils = __webpack_require__(/*! ../utils */ 20);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Request = /*#__PURE__*/function () {
  /**
                                    * @param {Object} arg - 全局配置
                                    * @param {String} arg.baseURL - 全局根路径
                                    * @param {Object} arg.header - 全局header
                                    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
                                    * @param {String} arg.dataType = [json] - 全局默认的dataType
                                    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
                                    * @param {Object} arg.custom - 全局默认的自定义参数
                                    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
                                    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
                                    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
                                    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
                                    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
                                    */
  function Request() {var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      console.warn('设置全局参数必须接收一个Object');
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default() };

  }

  /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */_createClass(Request, [{ key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    } }, { key: "middleware", value: function middleware(

    config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function (interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function (interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    /**
      * @Function
      * @param {Object} config - 请求配置项
      * @prop {String} options.url - 请求路径
      * @prop {Object} options.data - 请求参数
      * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
      * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
      * @prop {Object} [options.header = config.header] - 请求header
      * @prop {Object} [options.method = config.method] - 请求方法
      * @returns {Promise<unknown>}
      */ }, { key: "request", value: function request()
    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    } }, { key: "get", value: function get(

    url) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "connect", value: function connect(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT' },
      options));

    } }, { key: "head", value: function head(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD' },
      options));

    } }, { key: "options", value: function options(




    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "trace", value: function trace(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE' },
      options));

    } }, { key: "upload", value: function upload(



    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    } }, { key: "download", value: function download(

    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    } }]);return Request;}();


/**
                               * setConfig回调
                               * @return {Object} - 返回操作后的config
                               * @callback Request~setConfigCallback
                               * @param {Object} config - 全局默认config
                               */exports.default = Request;

/***/ }),
/* 17 */
/*!********************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/dispatchRequest.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

function _default(config) {return (0, _index.default)(config);};exports.default = _default;

/***/ }),
/* 18 */
/*!**************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/adapters/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 19));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 21));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 24));
var _utils = __webpack_require__(/*! ../utils */ 20);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 返回可选值存在的配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Array} keys - 可选值数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Object} config2 - 配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {{}} - 存在的配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};var _default =
function _default(config) {return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {
        }
        (0, _settle.default)(resolve, reject, response);
      } };

    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {



        filePath: config.filePath,
        name: config.name };

      var optionalKeys = [









      'formData'];

      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {





      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = [
      'data',
      'method',

      'timeout',

      'dataType',

      'responseType'];











      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 19 */
/*!****************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/helpers/buildURL.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 20));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
function buildURL(url, params) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams;
  if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = "".concat(key, "[]");
      } else {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push("".concat(encode(key), "=").concat(encode(v)));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),
/* 20 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/utils.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isObject = isObject;exports.isDate = isDate;exports.isURLSearchParams = isURLSearchParams;exports.forEach = forEach;exports.isBoolean = isBoolean;exports.isPlainObject = isPlainObject;exports.deepMerge = deepMerge;exports.isUndefined = isUndefined;var
toString = Object.prototype.toString;

/**
                                       * Determine if a value is an Array
                                       *
                                       * @param {Object} val The value to test
                                       * @returns {boolean} True if value is an Array, otherwise false
                                       */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * 是否为boolean 值
   * @param val
   * @returns {boolean}
   */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
   * 是否为真正的对象{} new Object
   * @param {any} obj - 检测的对象
   * @returns {boolean}
   */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),
/* 21 */
/*!******************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/buildFullPath.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildFullPath;

var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 22));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                            * Creates a new URL by combining the baseURL with the requestedURL,
                                                                                                                                                                            * only when the requestedURL is not already an absolute URL.
                                                                                                                                                                            * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                                                                                                                                            *
                                                                                                                                                                            * @param {string} baseURL The base URL
                                                                                                                                                                            * @param {string} requestedURL Absolute or relative URL to combine
                                                                                                                                                                            * @returns {string} The combined full path
                                                                                                                                                                            */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 22 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/helpers/isAbsoluteURL.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 23 */
/*!*******************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/helpers/combineURLs.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? "".concat(
  baseURL.replace(/\/+$/, ''), "/").concat(relativeURL.replace(/^\/+/, '')) :
  baseURL;
}

/***/ }),
/* 24 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/settle.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = settle; /**
                                                                                                      * Resolve or reject a Promise based on response status.
                                                                                                      *
                                                                                                      * @param {Function} resolve A function that resolves the promise.
                                                                                                      * @param {Function} reject A function that rejects the promise.
                                                                                                      * @param {object} response The response.
                                                                                                      */
function settle(resolve, reject, response) {var
  validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),
/* 25 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/InterceptorManager.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};var _default =

InterceptorManager;exports.default = _default;

/***/ }),
/* 26 */
/*!****************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/mergeConfig.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 20);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Array} keys - 配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} globalsConfig - 当前的全局配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config2 - 局部配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
    *
    * @param globalsConfig - 当前实例的全局配置
    * @param config2 - 当前的局部配置
    * @return - 合并后的配置
    */var _default =
function _default(globalsConfig) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {}) };

  var defaultToConfig2Keys = ['getTask', 'validateStatus'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {







  } else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = [









    'filePath',
    'name',



    'formData'];

    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });





  } else {
    var defaultsKeys = [
    'data',

    'timeout',

    'dataType',

    'responseType'];











    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }

  return config;
};exports.default = _default;

/***/ }),
/* 27 */
/*!*************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/core/defaults.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 默认的全局配置
                                                                                                      */var _default =

{
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',

  responseType: 'text',

  custom: {},

  timeout: 60000,










  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };exports.default = _default;

/***/ }),
/* 28 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/luch-request/utils/clone.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
     */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined')
    circular = true;

    if (typeof depth == 'undefined')
    depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
      return null;

      if (depth === 0)
      return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else
        {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }

        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }

      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
    return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();var _default =

clone;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ 29).Buffer))

/***/ }),
/* 29 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 30)
var ieee754 = __webpack_require__(/*! ieee754 */ 31)
var isArray = __webpack_require__(/*! isarray */ 32)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 2)))

/***/ }),
/* 30 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 31 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 32 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 33 */
/*!*********************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/util/route.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = uni.$u.queryParams(params);
      return url += query;
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === uni.$u.page())) {_context.next = 6;break;}return _context.abrupt("return");case 6:

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 16;break;}_context.next = 12;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 12:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 17;break;case 16:

                this.openPage(mergeConfig);case 17:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 34 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 35);

/***/ }),
/* 35 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 36);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 37 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB *
    i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {return Number(val);});
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }

  return sColor;
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 38 */
/*!************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/test.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证字符串
   */
function string(value) {
  return typeof value === 'string';
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);

}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
   * 是否函数方法
   * @param {Object} value
   */
function func(value) {
  return typeof value === 'function';
}

/**
   * 是否promise对象
   * @param {Object} value
   */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
   * @param {Object} value
   */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
   * 是否视频格式
   * @param {Object} value
   */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
   * 是否为正则对象
   * @param {Object}
   * @return {Boolean}
   */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string };exports.default = _default;

/***/ }),
/* 39 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/debounce.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         *
                                                                                                                         * @param {Function} func 要执行的回调函数
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 40 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/throttle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer;var
flag;
/**
       * 节流原理：在一定时间内，只能触发一次
       *
       * @param {Function} func 要执行的回调函数
       * @param {Number} wait 延时的时间
       * @param {Boolean} immediate 是否立即执行
       * @return null
       */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =
throttle;exports.default = _default;

/***/ }),
/* 41 */
/*!*************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 38));
var _digit = __webpack_require__(/*! ./digit.js */ 42);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 如果value小于min，取min；如果value大于max，取max
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} min 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} max 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
function range() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
   * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
   * @param {number|string} value 用户传递值的px值
   * @param {boolean} unit 
   * @returns {number|string}
   */
function getPx(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (_test.default.number(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
   * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
   * @param {number} value 堵塞时间 单位ms 毫秒
   * @returns {Promise} 返回promise
   */
function sleep() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
   * @description 运行期判断平台
   * @returns {string} 返回所在平台(小写) 
   * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
   */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
   * @description 获取系统信息同步接口
   * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
   */
function sys() {
  return uni.getSystemInfoSync();
}

/**
   * @description 取一个区间数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
  * @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
     this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
     这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
     值(默认为undefined)，就是查找最顶层的$parent
  *  @param {string|undefined} name 父组件的参数名
  */
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
   * @description 样式转换
   * 对象转字符串，或者字符串转对象
   * @param {object | string} customStyle 需要转换的目标
   * @param {String} target 转换的目的，object-转为对象，string-转为字符串
   * @returns {object|string}
   */
function addStyle(customStyle) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || typeof customStyle === 'object' && target === 'object' || target === 'string' &&
  typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
   * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
   * @param {string|number} value 需要添加单位的值
   * @param {string} unit 添加的单位名 比如px
   */
function addUnit() {var _uni$$u$config$unit, _uni, _uni$$u, _uni$$u$config;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni$$u$config$unit = (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$u = _uni.$u) === null || _uni$$u === void 0 ? void 0 : (_uni$$u$config = _uni$$u.config) === null || _uni$$u$config === void 0 ? void 0 : _uni$$u$config.unit) !== null && _uni$$u$config$unit !== void 0 ? _uni$$u$config$unit : 'px';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/**
   * @description 深度克隆
   * @param {object} obj 需要深度克隆的对象
   * @returns {*} 克隆后的对象或者原值（不是对象）
   */
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  var o = _test.default.array(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

/**
   * @description JS对象深度合并
   * @param {object} target 需要拷贝的对象
   * @param {object} source 拷贝的来源对象
   * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
   */
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

/**
   * @description error提示
   * @param {*} err 错误内容
   */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    console.error("uView\u63D0\u793A\uFF1A".concat(err));
  }
}

/**
   * @description 打乱数组
   * @param {array} array 需要打乱的数组
   * @returns {array} 打乱后的数组
   */
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
      'fillString must be String');

    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
   * @description 格式化时间
   * @param {String|Number} dateTime 需要格式化的时间戳
   * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
   * @returns {string} 返回格式化后的字符串
   */
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1000);
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime));
      }
      // 其他都认为符合 RFC 2822 规范
      else {
          // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
          date = new Date(
          typeof dateTime === 'string' ?
          dateTime.replace(/-/g, '/') :
          dateTime);

        }

  var timeSource = {
    'y': date.getFullYear().toString(), // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    'd': date.getDate().toString().padStart(2, '0'), // 日
    'h': date.getHours().toString().padStart(2, '0'), // 时
    'M': date.getMinutes().toString().padStart(2, '0'), // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {var _ref =
    new RegExp("".concat(key, "+")).exec(formatStr) || [],_ref2 = _slicedToArray(_ref, 1),ret = _ref2[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }

  return formatStr;
}

/**
   * @description 时间戳转为多久之前
   * @param {String|Number} timestamp 时间戳
   * @param {String|Boolean} format 
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }}

  return tips;
}

/**
   * @description 去除空格
   * @param String str 需要去除空格的字符串
   * @param String pos both(左右)|left|right|all 默认both
   */
function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
   * @description 对象转url参数
   * @param {object} data,对象
   * @param {Boolean} isPrefix,是否自动加上"?"
   * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
   */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });}

    } else {
      _result.push("".concat(key, "=").concat(value));
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
   * 显示消息提示框
   * @param {String} title 提示的内容，长度与 icon 取值有关。
   * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
   */
function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration });

}

/**
   * @description 根据主题type值,获取对应的图标
   * @param {String} type 主题名称,primary|info|error|warning|success
   * @param {boolean} fill 是否使用fill填充实体的图标
   */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
   * @description 数字格式化
   * @param {number|string} number 要格式化的数字
   * @param {number} decimals 保留几位小数
   * @param {string} decimalPoint 小数点符号
   * @param {string} thousandsSeparator 千分位符号
   * @returns {string} 格式化后的数字
   */
function priceFormat(number) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';

  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
   * @description 获取duration值
   * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
   * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
   * @param {String|number} value 比如: "1s"|"100ms"|1|100
   * @param {boolean} unit  提示: 如果是false 默认返回number
   * @return {string|number} 
   */
function getDuration(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
   * @description 日期的月或日补零操作
   * @param {String} value 需要补零的值
   */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
   * @description 在u-form的子组件内容发生变化，或者失去焦点时，尝试通知u-form执行校验方法
   * @param {*} instance
   * @param {*} event
   */
function formValidate(instance, event) {
  var formItem = uni.$u.$parent.call(instance, 'u-form-item');
  var form = uni.$u.$parent.call(instance, 'u-form');
  // 如果发生变化的input或者textarea等，其父组件中有u-form-item或者u-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
   * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
   * @param {object} obj 对象
   * @param {string} key 需要获取的属性字段
   * @returns {*}
   */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};

    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
   * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
   * @param {object} obj 对象
   * @param {string} key 需要设置的属性
   * @param {string} value 设置的值
   */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) {// 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
   * @description 获取当前页面路径
   */
function page() {var _pages$route, _pages;
  var pages = getCurrentPages();
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat((_pages$route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route) !== null && _pages$route !== void 0 ? _pages$route : '');
}

/**
   * @description 获取当前路由栈实例数组
   */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
   * @description 修改uView内置属性值
   * @param {object} props 修改内置props属性
   * @param {object} config 修改内置config属性
   * @param {object} color 修改内置color属性
   * @param {object} zIndex 修改内置zIndex属性
   */
function setConfig(_ref3)




{var _ref3$props = _ref3.props,props = _ref3$props === void 0 ? {} : _ref3$props,_ref3$config = _ref3.config,config = _ref3$config === void 0 ? {} : _ref3$config,_ref3$color = _ref3.color,color = _ref3$color === void 0 ? {} : _ref3$color,_ref3$zIndex = _ref3.zIndex,zIndex = _ref3$zIndex === void 0 ? {} : _ref3$zIndex;var

  deepMerge =
  uni.$u.deepMerge;
  uni.$u.config = deepMerge(uni.$u.config, config);
  uni.$u.props = deepMerge(uni.$u.props, props);
  uni.$u.color = deepMerge(uni.$u.color, color);
  uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex);
}var _default =

{
  range: range,
  getPx: getPx,
  sleep: sleep,
  os: os,
  sys: sys,
  random: random,
  guid: guid,
  $parent: $parent,
  addStyle: addStyle,
  addUnit: addUnit,
  deepClone: deepClone,
  deepMerge: deepMerge,
  error: error,
  randomArray: randomArray,
  timeFormat: timeFormat,
  timeFrom: timeFrom,
  trim: trim,
  queryParams: queryParams,
  toast: toast,
  type2icon: type2icon,
  priceFormat: priceFormat,
  getDuration: getDuration,
  padZero: padZero,
  formValidate: formValidate,
  getProperty: getProperty,
  setProperty: setProperty,
  page: page,
  pages: pages,
  setConfig: setConfig };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 42 */
/*!*************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/digit.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.plus = plus;exports.minus = minus;exports.divide = divide;exports.round = round;exports.enableBoundaryChecking = enableBoundaryChecking;exports.default = void 0;function _toArray(arr) {return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
   * Return digits length of a number
   * @private
   * @param {*number} num Input number
   */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
   * 把小数转成整数,如果是小数则放大成整数
   * @private
   * @param {*number} num 输入数
   */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
   * 检测数字是否越界，如果越界给出提示
   * @private
   * @param {*number} num 输入数
   */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"));
    }
  }
}

/**
   * 把递归操作扁平迭代化
   * @param {number[]} arr 要操作的数字数组
   * @param {function} operation 迭代操作
   * @private
   */
function iteratorOperation(arr, operation) {var _arr = _toArray(
  arr),num1 = _arr[0],num2 = _arr[1],others = _arr.slice(2);
  var res = operation(num1, num2);

  others.forEach(function (num) {
    res = operation(res, num);
  });

  return res;
}

/**
   * 高精度乘法
   * @export
   */
function times() {for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {nums[_key] = arguments[_key];}
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
   * 高精度加法
   * @export
   */
function plus() {for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {nums[_key2] = arguments[_key2];}
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }var

  num1 = nums[0],num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
   * 高精度减法
   * @export
   */
function minus() {for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {nums[_key3] = arguments[_key3];}
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }var

  num1 = nums[0],num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
   * 高精度除法
   * @export
   */
function divide() {for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {nums[_key4] = arguments[_key4];}
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
   * 四舍五入
   * @export
   */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
   * 是否进行边界检查，默认开启
   * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
   * @export
   */
function enableBoundaryChecking() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}var _default =


{
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking };exports.default = _default;

/***/ }),
/* 43 */
/*!************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/config.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2022-06-17
var version = '2.0.33';

// 开发环境才提示，生产环境不会提示
if (true) {
  console.log("\n %c uView V".concat(version, " %c https://www.uviewui.com/ \n\n"), 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #3c9cff;background: #ffffff; padding:5px 0;');
}var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'],

  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    'u-primary': '#2979ff',
    'u-warning': '#ff9900',
    'u-success': '#19be6b',
    'u-error': '#fa3534',
    'u-info': '#909399',
    'u-main-color': '#303133',
    'u-content-color': '#606266',
    'u-tips-color': '#909399',
    'u-light-color': '#c0c4cc' },

  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: 'px' };exports.default = _default;

/***/ }),
/* 44 */
/*!***********************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ 43));

var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./props/actionSheet.js */ 45));
var _album = _interopRequireDefault(__webpack_require__(/*! ./props/album.js */ 46));
var _alert = _interopRequireDefault(__webpack_require__(/*! ./props/alert.js */ 47));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./props/avatar */ 48));
var _avatarGroup = _interopRequireDefault(__webpack_require__(/*! ./props/avatarGroup */ 49));
var _backtop = _interopRequireDefault(__webpack_require__(/*! ./props/backtop */ 50));
var _badge = _interopRequireDefault(__webpack_require__(/*! ./props/badge */ 51));
var _button = _interopRequireDefault(__webpack_require__(/*! ./props/button */ 52));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./props/calendar */ 53));
var _carKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/carKeyboard */ 54));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./props/cell */ 55));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./props/cellGroup */ 56));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./props/checkbox */ 57));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./props/checkboxGroup */ 58));
var _circleProgress = _interopRequireDefault(__webpack_require__(/*! ./props/circleProgress */ 59));
var _code = _interopRequireDefault(__webpack_require__(/*! ./props/code */ 60));
var _codeInput = _interopRequireDefault(__webpack_require__(/*! ./props/codeInput */ 61));
var _col = _interopRequireDefault(__webpack_require__(/*! ./props/col */ 62));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./props/collapse */ 63));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./props/collapseItem */ 64));
var _columnNotice = _interopRequireDefault(__webpack_require__(/*! ./props/columnNotice */ 65));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./props/countDown */ 66));
var _countTo = _interopRequireDefault(__webpack_require__(/*! ./props/countTo */ 67));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./props/datetimePicker */ 68));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./props/divider */ 69));
var _empty = _interopRequireDefault(__webpack_require__(/*! ./props/empty */ 70));
var _form = _interopRequireDefault(__webpack_require__(/*! ./props/form */ 71));
var _formItem = _interopRequireDefault(__webpack_require__(/*! ./props/formItem */ 72));
var _gap = _interopRequireDefault(__webpack_require__(/*! ./props/gap */ 73));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./props/grid */ 74));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./props/gridItem */ 75));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./props/icon */ 76));
var _image = _interopRequireDefault(__webpack_require__(/*! ./props/image */ 77));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./props/indexAnchor */ 78));
var _indexList = _interopRequireDefault(__webpack_require__(/*! ./props/indexList */ 79));
var _input = _interopRequireDefault(__webpack_require__(/*! ./props/input */ 80));
var _keyboard = _interopRequireDefault(__webpack_require__(/*! ./props/keyboard */ 81));
var _line = _interopRequireDefault(__webpack_require__(/*! ./props/line */ 82));
var _lineProgress = _interopRequireDefault(__webpack_require__(/*! ./props/lineProgress */ 83));
var _link = _interopRequireDefault(__webpack_require__(/*! ./props/link */ 84));
var _list = _interopRequireDefault(__webpack_require__(/*! ./props/list */ 85));
var _listItem = _interopRequireDefault(__webpack_require__(/*! ./props/listItem */ 86));
var _loadingIcon = _interopRequireDefault(__webpack_require__(/*! ./props/loadingIcon */ 87));
var _loadingPage = _interopRequireDefault(__webpack_require__(/*! ./props/loadingPage */ 88));
var _loadmore = _interopRequireDefault(__webpack_require__(/*! ./props/loadmore */ 89));
var _modal = _interopRequireDefault(__webpack_require__(/*! ./props/modal */ 90));
var _navbar = _interopRequireDefault(__webpack_require__(/*! ./props/navbar */ 91));
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ./props/noNetwork */ 93));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./props/noticeBar */ 94));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./props/notify */ 95));
var _numberBox = _interopRequireDefault(__webpack_require__(/*! ./props/numberBox */ 96));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/numberKeyboard */ 97));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./props/overlay */ 98));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./props/parse */ 99));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./props/picker */ 100));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./props/popup */ 101));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./props/radio */ 102));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./props/radioGroup */ 103));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./props/rate */ 104));
var _readMore = _interopRequireDefault(__webpack_require__(/*! ./props/readMore */ 105));
var _row = _interopRequireDefault(__webpack_require__(/*! ./props/row */ 106));
var _rowNotice = _interopRequireDefault(__webpack_require__(/*! ./props/rowNotice */ 107));
var _scrollList = _interopRequireDefault(__webpack_require__(/*! ./props/scrollList */ 108));
var _search = _interopRequireDefault(__webpack_require__(/*! ./props/search */ 109));
var _section = _interopRequireDefault(__webpack_require__(/*! ./props/section */ 110));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./props/skeleton */ 111));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./props/slider */ 112));
var _statusBar = _interopRequireDefault(__webpack_require__(/*! ./props/statusBar */ 113));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./props/steps */ 114));
var _stepsItem = _interopRequireDefault(__webpack_require__(/*! ./props/stepsItem */ 115));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./props/sticky */ 116));
var _subsection = _interopRequireDefault(__webpack_require__(/*! ./props/subsection */ 117));
var _swipeAction = _interopRequireDefault(__webpack_require__(/*! ./props/swipeAction */ 118));
var _swipeActionItem = _interopRequireDefault(__webpack_require__(/*! ./props/swipeActionItem */ 119));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./props/swiper */ 120));
var _swipterIndicator = _interopRequireDefault(__webpack_require__(/*! ./props/swipterIndicator */ 121));
var _switch2 = _interopRequireDefault(__webpack_require__(/*! ./props/switch */ 122));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./props/tabbar */ 123));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./props/tabbarItem */ 124));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./props/tabs */ 125));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./props/tag */ 126));
var _text = _interopRequireDefault(__webpack_require__(/*! ./props/text */ 127));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./props/textarea */ 128));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./props/toast */ 129));
var _toolbar = _interopRequireDefault(__webpack_require__(/*! ./props/toolbar */ 130));
var _tooltip = _interopRequireDefault(__webpack_require__(/*! ./props/tooltip */ 131));
var _transition = _interopRequireDefault(__webpack_require__(/*! ./props/transition */ 132));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./props/upload */ 133));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var


color =
_config.default.color;var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},


_actionSheet.default),
_album.default),
_alert.default),
_avatar.default),
_avatarGroup.default),
_backtop.default),
_badge.default),
_button.default),
_calendar.default),
_carKeyboard.default),
_cell.default),
_cellGroup.default),
_checkbox.default),
_checkboxGroup.default),
_circleProgress.default),
_code.default),
_codeInput.default),
_col.default),
_collapse.default),
_collapseItem.default),
_columnNotice.default),
_countDown.default),
_countTo.default),
_datetimePicker.default),
_divider.default),
_empty.default),
_form.default),
_formItem.default),
_gap.default),
_grid.default),
_gridItem.default),
_icon.default),
_image.default),
_indexAnchor.default),
_indexList.default),
_input.default),
_keyboard.default),
_line.default),
_lineProgress.default),
_link.default),
_list.default),
_listItem.default),
_loadingIcon.default),
_loadingPage.default),
_loadmore.default),
_modal.default),
_navbar.default),
_noNetwork.default),
_noticeBar.default),
_notify.default),
_numberBox.default),
_numberKeyboard.default),
_overlay.default),
_parse.default),
_picker.default),
_popup.default),
_radio.default),
_radioGroup.default),
_rate.default),
_readMore.default),
_row.default),
_rowNotice.default),
_scrollList.default),
_search.default),
_section.default),
_skeleton.default),
_slider.default),
_statusBar.default),
_steps.default),
_stepsItem.default),
_sticky.default),
_subsection.default),
_swipeAction.default),
_swipeActionItem.default),
_swiper.default),
_swipterIndicator.default),
_switch2.default),
_tabbar.default),
_tabbarItem.default),
_tabs.default),
_tag.default),
_text.default),
_textarea.default),
_toast.default),
_toolbar.default),
_tooltip.default),
_transition.default),
_upload.default);exports.default = _default;

/***/ }),
/* 45 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/actionSheet.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:44:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/actionSheet.js
                                                                                                      */var _default =
{
  // action-sheet组件
  actionSheet: {
    show: false,
    title: '',
    description: '',
    actions: function actions() {return [];},
    index: '',
    cancelText: '',
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: '',
    closeOnClickOverlay: true,
    round: 0 } };exports.default = _default;

/***/ }),
/* 46 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/album.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:47:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/album.js
                                                                                                      */var _default =
{
  // album 组件
  album: {
    urls: function urls() {return [];},
    keyName: '',
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: 'scaleToFill',
    multipleMode: 'aspectFill',
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true } };exports.default = _default;

/***/ }),
/* 47 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/alert.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:48:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/alert.js
                                                                                                      */var _default =
{
  // alert警告组件
  alert: {
    title: '',
    type: 'warning',
    description: '',
    closable: false,
    showIcon: false,
    effect: 'light',
    center: false,
    fontSize: 14 } };exports.default = _default;

/***/ }),
/* 48 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/avatar.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:22
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatar.js
                                                                                                      */var _default =
{
  // avatar 组件
  avatar: {
    src: '',
    shape: 'circle',
    size: 40,
    mode: 'scaleToFill',
    text: '',
    bgColor: '#c0c4cc',
    color: '#ffffff',
    fontSize: 18,
    icon: '',
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: '',
    colorIndex: '',
    name: '' } };exports.default = _default;

/***/ }),
/* 49 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/avatarGroup.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatarGroup.js
                                                                                                      */var _default =
{
  // avatarGroup 组件
  avatarGroup: {
    urls: function urls() {return [];},
    maxCount: 5,
    shape: 'circle',
    mode: 'scaleToFill',
    showMore: true,
    size: 40,
    keyName: '',
    gap: 0.5,
    extraValue: 0 } };exports.default = _default;

/***/ }),
/* 50 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/backtop.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:50:18
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/backtop.js
                                                                                                      */var _default =
{
  // backtop组件
  backtop: {
    mode: 'circle',
    icon: 'arrow-upward',
    text: '',
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: function iconStyle() {return {
        color: '#909399',
        fontSize: '19px' };} } };exports.default = _default;

/***/ }),
/* 51 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/badge.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 19:51:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/badge.js
                                                                                                      */var _default =
{
  // 徽标数组件
  badge: {
    isDot: false,
    value: '',
    show: true,
    max: 999,
    type: 'error',
    showZero: false,
    bgColor: null,
    color: null,
    shape: 'circle',
    numberType: 'overflow',
    offset: function offset() {return [];},
    inverted: false,
    absolute: false } };exports.default = _default;

/***/ }),
/* 52 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/button.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:51:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/button.js
                                                                                                      */var _default =
{
  // button组件
  button: {
    hairline: false,
    type: 'info',
    size: 'normal',
    shape: 'square',
    plain: false,
    disabled: false,
    loading: false,
    loadingText: '',
    loadingMode: 'spinner',
    loadingSize: 15,
    openType: '',
    formType: '',
    appParameter: '',
    hoverStopPropagation: true,
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    dataName: '',
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: '',
    icon: '',
    iconColor: '',
    color: '' } };exports.default = _default;

/***/ }),
/* 53 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/calendar.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:52:43
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/calendar.js
                                                                                                      */var _default =
{
  // calendar 组件
  calendar: {
    title: '日期选择',
    showTitle: true,
    showSubtitle: true,
    mode: 'single',
    startText: '开始',
    endText: '结束',
    customList: function customList() {return [];},
    color: '#3c9cff',
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER, // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: '确定',
    confirmDisabledText: '确定',
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER, // Infinity
    rangePrompt: '',
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3 } };exports.default = _default;

/***/ }),
/* 54 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/carKeyboard.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:53:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/carKeyboard.js
                                                                                                      */var _default =
{
  // 车牌号键盘
  carKeyboard: {
    random: false } };exports.default = _default;

/***/ }),
/* 55 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/cell.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 20:53:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cell.js
                                                                                                      */var _default =
{
  // cell组件的props
  cell: {
    customClass: '',
    title: '',
    label: '',
    value: '',
    icon: '',
    disabled: false,
    border: true,
    center: false,
    url: '',
    linkType: 'navigateTo',
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: '',
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: 'arrow-right',
    titleStyle: {},
    size: '',
    stop: true,
    name: '' } };exports.default = _default;

/***/ }),
/* 56 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/cellGroup.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cellGroup.js
                                                                                                      */var _default =
{
  // cell-group组件的props
  cellGroup: {
    title: '',
    border: true,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 57 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/checkbox.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 21:06:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkbox.js
                                                                                                      */var _default =
{
  // checkbox组件
  checkbox: {
    name: '',
    shape: '',
    size: '',
    checkbox: false,
    disabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    iconColor: '',
    label: '',
    labelSize: '',
    labelColor: '',
    labelDisabled: '' } };exports.default = _default;

/***/ }),
/* 58 */
/*!*************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/checkboxGroup.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:47
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkboxGroup.js
                                                                                                      */var _default =
{
  // checkbox-group组件
  checkboxGroup: {
    name: '',
    value: function value() {return [];},
    shape: 'square',
    disabled: false,
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    size: 18,
    placement: 'row',
    labelSize: 14,
    labelColor: '#303133',
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    iconPlacement: 'left',
    borderBottom: false } };exports.default = _default;

/***/ }),
/* 59 */
/*!**************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/circleProgress.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:02
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/circleProgress.js
                                                                                                      */var _default =
{
  // circleProgress 组件
  circleProgress: {
    percentage: 30 } };exports.default = _default;

/***/ }),
/* 60 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/code.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/code.js
                                                                                                      */var _default =

{
  // code 组件
  code: {
    seconds: 60,
    startText: '获取验证码',
    changeText: 'X秒重新获取',
    endText: '重新获取',
    keepRunning: false,
    uniqueKey: '' } };exports.default = _default;

/***/ }),
/* 61 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/codeInput.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/codeInput.js
                                                                                                      */var _default =
{
  // codeInput 组件
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: 'box',
    hairline: false,
    space: 10,
    value: '',
    focus: false,
    bold: false,
    color: '#606266',
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: '#c9cacc',
    disabledDot: true } };exports.default = _default;

/***/ }),
/* 62 */
/*!***************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/col.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/col.js
                                                                                                      */var _default =
{
  // col 组件
  col: {
    span: 12,
    offset: 0,
    justify: 'start',
    align: 'stretch',
    textAlign: 'left' } };exports.default = _default;

/***/ }),
/* 63 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/collapse.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapse.js
                                                                                                      */var _default =
{
  // collapse 组件
  collapse: {
    value: null,
    accordion: false,
    border: true } };exports.default = _default;

/***/ }),
/* 64 */
/*!************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/collapseItem.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapseItem.js
                                                                                                      */var _default =
{
  // collapseItem 组件
  collapseItem: {
    title: '',
    value: '',
    label: '',
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: 'left',
    name: '',
    icon: '',
    duration: 300 } };exports.default = _default;

/***/ }),
/* 65 */
/*!************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/columnNotice.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/columnNotice.js
                                                                                                      */var _default =
{
  // columnNotice 组件
  columnNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true } };exports.default = _default;

/***/ }),
/* 66 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/countDown.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:29
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countDown.js
                                                                                                      */var _default =
{
  // u-count-down 计时器组件
  countDown: {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
    millisecond: false } };exports.default = _default;

/***/ }),
/* 67 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/countTo.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countTo.js
                                                                                                      */var _default =
{
  // countTo 组件
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2000,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: '.',
    color: '#606266',
    fontSize: 22,
    bold: false,
    separator: '' } };exports.default = _default;

/***/ }),
/* 68 */
/*!**************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/datetimePicker.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:48
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/datetimePicker.js
                                                                                                      */var _default =
{
  // datetimePicker 组件
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: '',
    title: '',
    mode: 'datetime',
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];} } };exports.default = _default;

/***/ }),
/* 69 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/divider.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:58:03
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/divider.js
                                                                                                      */var _default =
{
  // divider组件
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: 'center',
    text: '',
    textSize: 14,
    textColor: '#909399',
    lineColor: '#dcdfe6' } };exports.default = _default;

/***/ }),
/* 70 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/empty.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/empty.js
                                                                                                      */var _default =
{
  // empty组件
  empty: {
    icon: '',
    text: '',
    textColor: '#c0c4cc',
    textSize: 14,
    iconColor: '#c0c4cc',
    iconSize: 90,
    mode: 'data',
    width: 160,
    height: 160,
    show: true,
    marginTop: 0 } };exports.default = _default;

/***/ }),
/* 71 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/form.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/form.js
                                                                                                      */var _default =
{
  // form 组件
  form: {
    model: function model() {return {};},
    rules: function rules() {return {};},
    errorType: 'message',
    borderBottom: true,
    labelPosition: 'left',
    labelWidth: 45,
    labelAlign: 'left',
    labelStyle: function labelStyle() {return {};} } };exports.default = _default;

/***/ }),
/* 72 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/formItem.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/formItem.js
                                                                                                      */var _default =
{
  // formItem 组件
  formItem: {
    label: '',
    prop: '',
    borderBottom: '',
    labelWidth: '',
    rightIcon: '',
    leftIcon: '',
    required: false,
    leftIconStyle: '' } };exports.default = _default;

/***/ }),
/* 73 */
/*!***************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/gap.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gap.js
                                                                                                      */var _default =
{
  // gap组件
  gap: {
    bgColor: 'transparent',
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 74 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/grid.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:57
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/grid.js
                                                                                                      */var _default =
{
  // grid组件
  grid: {
    col: 3,
    border: false,
    align: 'left' } };exports.default = _default;

/***/ }),
/* 75 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/gridItem.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gridItem.js
                                                                                                      */var _default =
{
  // grid-item组件
  gridItem: {
    name: null,
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 76 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/icon.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 18:00:14
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/icon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // icon组件
  icon: { name: '', color: color['u-content-color'],
    size: '16px',
    bold: false,
    index: '',
    hoverClass: '',
    customPrefix: 'uicon',
    label: '',
    labelPos: 'right',
    labelSize: '15px',
    labelColor: color['u-content-color'],
    space: '3px',
    imgMode: '',
    width: '',
    height: '',
    top: 0,
    stop: false } };exports.default = _default;

/***/ }),
/* 77 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/image.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:51
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/image.js
                                                                                                      */var _default =
{
  // image组件
  image: {
    src: '',
    mode: 'aspectFill',
    width: '300',
    height: '225',
    shape: 'square',
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: '#f3f4f6' } };exports.default = _default;

/***/ }),
/* 78 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/indexAnchor.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:15
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexAnchor.js
                                                                                                      */var _default =
{
  // indexAnchor 组件
  indexAnchor: {
    text: '',
    color: '#606266',
    size: 14,
    bgColor: '#dedede',
    height: 32 } };exports.default = _default;

/***/ }),
/* 79 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/indexList.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexList.js
                                                                                                      */var _default =
{
  // indexList 组件
  indexList: {
    inactiveColor: '#606266',
    activeColor: '#5677fc',
    indexList: function indexList() {return [];},
    sticky: true,
    customNavHeight: 0 } };exports.default = _default;

/***/ }),
/* 80 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/input.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/input.js
                                                                                                      */var _default =
{
  // index 组件
  input: {
    value: '',
    type: 'text',
    fixed: false,
    disabled: false,
    disabledColor: '#f5f7fa',
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: 'input-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    showWordLimit: false,
    confirmType: 'done',
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: 'left',
    fontSize: '15px',
    color: '#303133',
    prefixIcon: '',
    prefixIconStyle: '',
    suffixIcon: '',
    suffixIconStyle: '',
    border: 'surround',
    readonly: false,
    shape: 'square',
    formatter: null } };exports.default = _default;

/***/ }),
/* 81 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/keyboard.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/keyboard.js
                                                                                                      */var _default =
{
  // 键盘组件
  keyboard: {
    mode: 'number',
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: '',
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: '取消',
    confirmText: '确定',
    autoChange: false } };exports.default = _default;

/***/ }),
/* 82 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/line.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/line.js
                                                                                                      */var _default =
{
  // line组件
  line: {
    color: '#d6d7d9',
    length: '100%',
    direction: 'row',
    hairline: true,
    margin: 0,
    dashed: false } };exports.default = _default;

/***/ }),
/* 83 */
/*!************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/lineProgress.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:11
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/lineProgress.js
                                                                                                      */var _default =
{
  // lineProgress 组件
  lineProgress: {
    activeColor: '#19be6b',
    inactiveColor: '#ececec',
    percentage: 0,
    showText: true,
    height: 12 } };exports.default = _default;

/***/ }),
/* 84 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/link.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:36
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/link.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // link超链接组件props参数
  link: { color: color['u-primary'], fontSize: 15,
    underLine: false,
    href: '',
    mpTips: '链接已复制，请在浏览器打开',
    lineColor: '',
    text: '' } };exports.default = _default;

/***/ }),
/* 85 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/list.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/list.js
                                                                                                      */var _default =
{
  // list 组件
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: '',
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1 } };exports.default = _default;

/***/ }),
/* 86 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/listItem.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/listItem.js
                                                                                                      */var _default =
{
  // listItem 组件
  listItem: {
    anchor: '' } };exports.default = _default;

/***/ }),
/* 87 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/loadingIcon.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:47
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingIcon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // loading-icon加载中图标组件
  loadingIcon: { show: true, color: color['u-tips-color'],
    textColor: color['u-tips-color'],
    vertical: false,
    mode: 'spinner',
    size: 24,
    textSize: 15,
    text: '',
    timingFunction: 'ease-in-out',
    duration: 1200,
    inactiveColor: '' } };exports.default = _default;

/***/ }),
/* 88 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/loadingPage.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:23
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingPage.js
                                                                                                      */var _default =
{
  // loading-page组件
  loadingPage: {
    loadingText: '正在加载',
    image: '',
    loadingMode: 'circle',
    loading: false,
    bgColor: '#ffffff',
    color: '#C8C8C8',
    fontSize: 19,
    iconSize: 28,
    loadingColor: '#C8C8C8' } };exports.default = _default;

/***/ }),
/* 89 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/loadmore.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:26
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadmore.js
                                                                                                      */var _default =
{
  // loadmore 组件
  loadmore: {
    status: 'loadmore',
    bgColor: 'transparent',
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: '#606266',
    loadingIcon: 'spinner',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了',
    isDot: false,
    iconColor: '#b7b7b7',
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    line: false,
    lineColor: '#E6E8EB',
    dashed: false } };exports.default = _default;

/***/ }),
/* 90 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/modal.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/modal.js
                                                                                                      */var _default =
{
  // modal 组件
  modal: {
    show: false,
    title: '',
    content: '',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '' } };exports.default = _default;

/***/ }),
/* 91 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/navbar.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _color = _interopRequireDefault(__webpack_require__(/*! ../color */ 92));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                        * @Author       : LQ
                                                                                                                                                        * @Description  :
                                                                                                                                                        * @version      : 1.0
                                                                                                                                                        * @Date         : 2021-08-20 16:44:21
                                                                                                                                                        * @LastAuthor   : LQ
                                                                                                                                                        * @lastTime     : 2021-08-20 17:16:18
                                                                                                                                                        * @FilePath     : /u-view2.0/uview-ui/libs/config/props/navbar.js
                                                                                                                                                        */var _default = { // navbar 组件
  navbar: { safeAreaInsetTop: true, placeholder: false, fixed: true, border: false, leftIcon: 'arrow-left', leftText: '',
    rightText: '',
    rightIcon: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: 20,
    leftIconColor: _color.default.mainColor,
    autoBack: false,
    titleStyle: '' } };exports.default = _default;

/***/ }),
/* 92 */
/*!***********************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/color.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: '#3c9cff',
  info: '#909399',
  default: '#909399',
  warning: '#f9ae3d',
  error: '#f56c6c',
  success: '#5ac725',
  mainColor: '#303133',
  contentColor: '#606266',
  tipsColor: '#909399',
  lightColor: '#c0c4cc',
  borderColor: '#e4e7ed' };var _default =


color;exports.default = _default;

/***/ }),
/* 93 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/noNetwork.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:16:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noNetwork.js
                                                                                                      */var _default =
{
  // noNetwork
  noNetwork: {
    tips: '哎呀，网络信号丢失',
    zIndex: '',
    image: 'data:image/png;base64,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' } };exports.default = _default;

/***/ }),
/* 94 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/noticeBar.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noticeBar.js
                                                                                                      */var _default =
{
  // noticeBar
  noticeBar: {
    text: function text() {return [];},
    direction: 'row',
    step: false,
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    speed: 80,
    fontSize: 14,
    duration: 2000,
    disableTouch: true,
    url: '',
    linkType: 'navigateTo' } };exports.default = _default;

/***/ }),
/* 95 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/notify.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:10:21
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/notify.js
                                                                                                      */var _default =
{
  // notify组件
  notify: {
    top: 0,
    type: 'primary',
    color: '#ffffff',
    bgColor: '',
    message: '',
    duration: 3000,
    fontSize: 15,
    safeAreaInsetTop: false } };exports.default = _default;

/***/ }),
/* 96 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/numberBox.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:46
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberBox.js
                                                                                                      */var _default =
{
  // 步进器组件
  numberBox: {
    name: '',
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: '#323233',
    buttonSize: 30,
    bgColor: '#EBECEE',
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: '' } };exports.default = _default;

/***/ }),
/* 97 */
/*!**************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/numberKeyboard.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:05
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberKeyboard.js
                                                                                                      */var _default =
{
  // 数字键盘
  numberKeyboard: {
    mode: 'number',
    dotDisabled: false,
    random: false } };exports.default = _default;

/***/ }),
/* 98 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/overlay.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/overlay.js
                                                                                                      */var _default =
{
  // overlay组件
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5 } };exports.default = _default;

/***/ }),
/* 99 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/parse.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/parse.js
                                                                                                      */var _default =
{
  // parse
  parse: {
    copyLink: true,
    errorImg: '',
    lazyLoad: false,
    loadingImg: '',
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true } };exports.default = _default;

/***/ }),
/* 100 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/picker.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/picker.js
                                                                                                      */var _default =
{
  // picker
  picker: {
    show: false,
    showToolbar: true,
    title: '',
    columns: function columns() {return [];},
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确定',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    keyName: 'text',
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];},
    immediateChange: false } };exports.default = _default;

/***/ }),
/* 101 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/popup.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/popup.js
                                                                                                      */var _default =
{
  // popup组件
  popup: {
    show: false,
    overlay: true,
    mode: 'bottom',
    duration: 300,
    closeable: false,
    overlayStyle: function overlayStyle() {},
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: 'top-right',
    round: 0,
    zoom: true,
    bgColor: '',
    overlayOpacity: 0.5 } };exports.default = _default;

/***/ }),
/* 102 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/radio.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:02:34
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radio.js
                                                                                                      */var _default =
{
  // radio组件
  radio: {
    name: '',
    shape: '',
    disabled: '',
    labelDisabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    labelSize: '',
    label: '',
    labelColor: '',
    size: '',
    iconColor: '',
    placement: '' } };exports.default = _default;

/***/ }),
/* 103 */
/*!**********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/radioGroup.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radioGroup.js
                                                                                                      */var _default =
{
  // radio-group组件
  radioGroup: {
    value: '',
    disabled: false,
    shape: 'circle',
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    name: '',
    size: 18,
    placement: 'row',
    label: '',
    labelColor: '#303133',
    labelSize: 14,
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    borderBottom: false,
    iconPlacement: 'left' } };exports.default = _default;

/***/ }),
/* 104 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/rate.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rate.js
                                                                                                      */var _default =
{
  // rate组件
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: '#b2b2b2',
    activeColor: '#FA3534',
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: 'star-fill',
    inactiveIcon: 'star',
    touchable: true } };exports.default = _default;

/***/ }),
/* 105 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/readMore.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:41
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/readMore.js
                                                                                                      */var _default =
{
  // readMore
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: '展开阅读全文',
    openText: '收起',
    color: '#2979ff',
    fontSize: 14,
    textIndent: '2em',
    name: '' } };exports.default = _default;

/***/ }),
/* 106 */
/*!***************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/row.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/row.js
                                                                                                      */var _default =
{
  // row
  row: {
    gutter: 0,
    justify: 'start',
    align: 'center' } };exports.default = _default;

/***/ }),
/* 107 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/rowNotice.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rowNotice.js
                                                                                                      */var _default =
{
  // rowNotice
  rowNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80 } };exports.default = _default;

/***/ }),
/* 108 */
/*!**********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/scrollList.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:28
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/scrollList.js
                                                                                                      */var _default =
{
  // scrollList
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: '#f2f2f2',
    indicatorActiveColor: '#3c9cff',
    indicatorStyle: '' } };exports.default = _default;

/***/ }),
/* 109 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/search.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:45
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/search.js
                                                                                                      */var _default =
{
  // search
  search: {
    shape: 'round',
    bgColor: '#f2f2f2',
    placeholder: '请输入关键字',
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: function actionStyle() {return {};},
    actionText: '搜索',
    inputAlign: 'left',
    inputStyle: function inputStyle() {return {};},
    disabled: false,
    borderColor: 'transparent',
    searchIconColor: '#909399',
    searchIconSize: 22,
    color: '#606266',
    placeholderColor: '#909399',
    searchIcon: 'search',
    margin: '0',
    animation: false,
    value: '',
    maxlength: '-1',
    height: 32,
    label: null } };exports.default = _default;

/***/ }),
/* 110 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/section.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/section.js
                                                                                                      */var _default =
{
  // u-section组件
  section: {
    title: '',
    subTitle: '更多',
    right: true,
    fontSize: 15,
    bold: true,
    color: '#303133',
    subColor: '#909399',
    showLine: true,
    lineColor: '',
    arrow: true } };exports.default = _default;

/***/ }),
/* 111 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/skeleton.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/skeleton.js
                                                                                                      */var _default =
{
  // skeleton
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: '100%',
    rowsHeight: 18,
    title: true,
    titleWidth: '50%',
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: 'circle' } };exports.default = _default;

/***/ }),
/* 112 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/slider.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/slider.js
                                                                                                      */var _default =
{
  // slider组件
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: '#2979ff',
    inactiveColor: '#c0c4cc',
    blockColor: '#ffffff',
    showValue: false,
    disabled: false,
    blockStyle: function blockStyle() {} } };exports.default = _default;

/***/ }),
/* 113 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/statusBar.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/statusBar.js
                                                                                                      */var _default =
{
  // statusBar
  statusBar: {
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 114 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/steps.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/steps.js
                                                                                                      */var _default =
{
  // steps组件
  steps: {
    direction: 'row',
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#969799',
    activeIcon: '',
    inactiveIcon: '',
    dot: false } };exports.default = _default;

/***/ }),
/* 115 */
/*!*********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/stepsItem.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/stepsItem.js
                                                                                                      */var _default =
{
  // steps-item组件
  stepsItem: {
    title: '',
    desc: '',
    iconSize: 17,
    error: false } };exports.default = _default;

/***/ }),
/* 116 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/sticky.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/sticky.js
                                                                                                      */var _default =
{
  // sticky组件
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: 'transparent',
    zIndex: '',
    index: '' } };exports.default = _default;

/***/ }),
/* 117 */
/*!**********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/subsection.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/subsection.js
                                                                                                      */var _default =
{
  // subsection组件
  subsection: {
    list: [],
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#303133',
    mode: 'button',
    fontSize: 12,
    bold: true,
    bgColor: '#eeeeef',
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 118 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/swipeAction.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeAction.js
                                                                                                      */var _default =
{
  // swipe-action组件
  swipeAction: {
    autoClose: true } };exports.default = _default;

/***/ }),
/* 119 */
/*!***************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/swipeActionItem.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeActionItem.js
                                                                                                      */var _default =
{
  // swipeActionItem 组件
  swipeActionItem: {
    show: false,
    name: '',
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300 } };exports.default = _default;

/***/ }),
/* 120 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/swiper.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:21:38
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiper.js
                                                                                                      */var _default =
{
  // swiper 组件
  swiper: {
    list: function list() {return [];},
    indicator: false,
    indicatorActiveColor: '#FFFFFF',
    indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)',
    indicatorStyle: '',
    indicatorMode: 'line',
    autoplay: true,
    current: 0,
    currentItemId: '',
    interval: 3000,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: 'default',
    keyName: 'url',
    imgMode: 'aspectFill',
    height: 130,
    bgColor: '#f3f4f6',
    radius: 4,
    loading: false,
    showTitle: false } };exports.default = _default;

/***/ }),
/* 121 */
/*!****************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/swipterIndicator.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiperIndicator.js
                                                                                                      */var _default =
{
  // swiperIndicator 组件
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: '',
    indicatorInactiveColor: '',
    indicatorMode: 'line' } };exports.default = _default;

/***/ }),
/* 122 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/switch.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/switch.js
                                                                                                      */var _default =
{
  // switch
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: '#2979ff',
    inactiveColor: '#ffffff',
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0 } };exports.default = _default;

/***/ }),
/* 123 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/tabbar.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbar.js
                                                                                                      */var _default =
{
  // tabbar
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    fixed: true,
    placeholder: true } };exports.default = _default;

/***/ }),
/* 124 */
/*!**********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/tabbarItem.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbarItem.js
                                                                                                      */var _default =
{
  //
  tabbarItem: {
    name: null,
    icon: '',
    badge: null,
    dot: false,
    text: '',
    badgeStyle: 'top: 6px;right:2px;' } };exports.default = _default;

/***/ }),
/* 125 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/tabs.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
                                                                                                      */var _default =
{
  //
  tabs: {
    duration: 300,
    list: function list() {return [];},
    lineColor: '#3c9cff',
    activeStyle: function activeStyle() {return {
        color: '#303133' };},

    inactiveStyle: function inactiveStyle() {return {
        color: '#606266' };},

    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: 'cover',
    itemStyle: function itemStyle() {return {
        height: '44px' };},

    scrollable: true,
    current: 0,
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 126 */
/*!***************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/tag.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tag.js
                                                                                                      */var _default =
{
  // tag 组件
  tag: {
    type: 'primary',
    disabled: false,
    size: 'medium',
    shape: 'square',
    text: '',
    bgColor: '',
    color: '',
    borderColor: '',
    closeColor: '#C6C7CB',
    name: '',
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: '' } };exports.default = _default;

/***/ }),
/* 127 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/text.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/text.js
                                                                                                      */var _default =
{
  // text 组件
  text: {
    type: '',
    show: true,
    text: '',
    prefixIcon: '',
    suffixIcon: '',
    mode: '',
    href: '',
    format: '',
    call: false,
    openType: '',
    bold: false,
    block: false,
    lines: '',
    color: '#303133',
    size: 15,
    iconStyle: function iconStyle() {return {
        fontSize: '15px' };},

    decoration: 'none',
    margin: 0,
    lineHeight: '',
    align: 'left',
    wordWrap: 'normal' } };exports.default = _default;

/***/ }),
/* 128 */
/*!********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/textarea.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/textarea.js
                                                                                                      */var _default =
{
  // textarea 组件
  textarea: {
    value: '',
    placeholder: '',
    placeholderClass: 'textarea-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    height: 70,
    confirmType: '',
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: '',
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: 'surround',
    formatter: null } };exports.default = _default;

/***/ }),
/* 129 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/toast.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toast.js
                                                                                                      */var _default =
{
  // toast组件
  toast: {
    zIndex: 10090,
    loading: false,
    text: '',
    icon: '',
    type: '',
    loadingMode: '',
    show: '',
    overlay: false,
    position: 'center',
    params: function params() {},
    duration: 2000,
    isTab: false,
    url: '',
    callback: null,
    back: false } };exports.default = _default;

/***/ }),
/* 130 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/toolbar.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toolbar.js
                                                                                                      */var _default =
{
  // toolbar 组件
  toolbar: {
    show: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    title: '' } };exports.default = _default;

/***/ }),
/* 131 */
/*!*******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/tooltip.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:25:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tooltip.js
                                                                                                      */var _default =
{
  // tooltip 组件
  tooltip: {
    text: '',
    copyText: '',
    size: 14,
    color: '#606266',
    bgColor: 'transparent',
    direction: 'top',
    zIndex: 10071,
    showCopy: true,
    buttons: function buttons() {return [];},
    overlay: true,
    showToast: true } };exports.default = _default;

/***/ }),
/* 132 */
/*!**********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/transition.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:59:00
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/transition.js
                                                                                                      */var _default =
{
  // transition动画组件的props
  transition: {
    show: false,
    mode: 'fade',
    duration: '300',
    timingFunction: 'ease-out' } };exports.default = _default;

/***/ }),
/* 133 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/props/upload.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:09:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/upload.js
                                                                                                      */var _default =
{
  // upload组件
  upload: {
    accept: 'image',
    capture: function capture() {return ['album', 'camera'];},
    compressed: true,
    camera: 'back',
    maxDuration: 60,
    uploadIcon: 'camera-fill',
    uploadIconColor: '#D3D4D6',
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: 'aspectFill',
    name: '',
    sizeType: function sizeType() {return ['original', 'compressed'];},
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: function fileList() {return [];},
    uploadText: '',
    width: 80,
    height: 80,
    previewImage: true } };exports.default = _default;

/***/ }),
/* 134 */
/*!************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/config/zIndex.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 135 */
/*!****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/libs/function/platform.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 注意：
                                                                                                      * 此部分内容，在vue-cli模式下，需要在vue.config.js加入如下内容才有效：
                                                                                                      * module.exports = {
                                                                                                      *     transpileDependencies: ['uview-v2']
                                                                                                      * }
                                                                                                      */

var platform = 'none';






platform = 'vue2';















platform = 'weixin';



























platform = 'mp';var _default =














platform;exports.default = _default;

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/*!****************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/static/62af3ac40985111a04920282.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-image/props.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 图片地址
    src: {
      type: String,
      default: uni.$u.props.image.src },

    // 裁剪模式
    mode: {
      type: String,
      default: uni.$u.props.image.mode },

    // 宽度，单位任意
    width: {
      type: [String, Number],
      default: uni.$u.props.image.width },

    // 高度，单位任意
    height: {
      type: [String, Number],
      default: uni.$u.props.image.height },

    // 图片形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: uni.$u.props.image.shape },

    // 圆角，单位任意
    radius: {
      type: [String, Number],
      default: uni.$u.props.image.radius },

    // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
    lazyLoad: {
      type: Boolean,
      default: uni.$u.props.image.lazyLoad },

    // 开启长按图片显示识别微信小程序码菜单
    showMenuByLongpress: {
      type: Boolean,
      default: uni.$u.props.image.showMenuByLongpress },

    // 加载中的图标，或者小图片
    loadingIcon: {
      type: String,
      default: uni.$u.props.image.loadingIcon },

    // 加载失败的图标，或者小图片
    errorIcon: {
      type: String,
      default: uni.$u.props.image.errorIcon },

    // 是否显示加载中的图标或者自定义的slot
    showLoading: {
      type: Boolean,
      default: uni.$u.props.image.showLoading },

    // 是否显示加载错误的图标或者自定义的slot
    showError: {
      type: Boolean,
      default: uni.$u.props.image.showError },

    // 是否需要淡入效果
    fade: {
      type: Boolean,
      default: uni.$u.props.image.fade },

    // 只支持网络资源，只对微信小程序有效
    webp: {
      type: Boolean,
      default: uni.$u.props.image.webp },

    // 过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.image.duration },

    // 背景颜色，用于深色页面加载图片时，为了和背景色融合
    bgColor: {
      type: String,
      default: uni.$u.props.image.bgColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-tabs/props.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 滑块的移动过渡时间，单位ms
    duration: {
      type: Number,
      default: uni.$u.props.tabs.duration },

    // tabs标签数组
    list: {
      type: Array,
      default: uni.$u.props.tabs.list },

    // 滑块颜色
    lineColor: {
      type: String,
      default: uni.$u.props.tabs.lineColor },

    // 菜单选择中时的样式
    activeStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.activeStyle },

    // 菜单非选中时的样式
    inactiveStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.inactiveStyle },

    // 滑块长度
    lineWidth: {
      type: [String, Number],
      default: uni.$u.props.tabs.lineWidth },

    // 滑块高度
    lineHeight: {
      type: [String, Number],
      default: uni.$u.props.tabs.lineHeight },

    // 滑块背景显示大小，当滑块背景设置为图片时使用
    lineBgSize: {
      type: String,
      default: uni.$u.props.tabs.lineBgSize },

    // 菜单item的样式
    itemStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.itemStyle },

    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: uni.$u.props.tabs.scrollable },

    // 当前选中标签的索引
    current: {
      type: [Number, String],
      default: uni.$u.props.tabs.current },

    // 默认读取的键名
    keyName: {
      type: String,
      default: uni.$u.props.tabs.keyName } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/*!****************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/static/62af3ae10902617e04920282.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 209 */
/*!****************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/static/62af3afe09dd77b604920282.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 210 */
/*!****************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/static/62af3b5a09cddc4704920282.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 211 */
/*!****************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/static/62c64f8208d00dd504920282.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
/*!******************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-badge/props.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: uni.$u.props.badge.isDot },

    // 显示的内容
    value: {
      type: [Number, String],
      default: uni.$u.props.badge.value },

    // 是否显示
    show: {
      type: Boolean,
      default: uni.$u.props.badge.show },

    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: uni.$u.props.badge.max },

    // 主题类型，error|warning|success|primary
    type: {
      type: String,
      default: uni.$u.props.badge.type },

    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: uni.$u.props.badge.showZero },

    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: [String, null],
      default: uni.$u.props.badge.bgColor },

    // 字体颜色
    color: {
      type: [String, null],
      default: uni.$u.props.badge.color },

    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: String,
      default: uni.$u.props.badge.shape },

    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: String,
      default: uni.$u.props.badge.numberType },

    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: uni.$u.props.badge.offset },

    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: uni.$u.props.badge.inverted },

    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: uni.$u.props.badge.absolute } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/*!***********************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-transition/props.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: uni.$u.props.transition.show },

    // 使用的动画模式
    mode: {
      type: String,
      default: uni.$u.props.transition.mode },

    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.transition.duration },

    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: uni.$u.props.transition.timingFunction } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 241 */
/*!****************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-transition/transition.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));


var _nvueAniMap = _interopRequireDefault(__webpack_require__(/*! ./nvue.ani-map.js */ 242));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} // 定义一个一定时间后自动成功的promise，让调用nextTick方法处，进入下一个then方法
var nextTick = function nextTick() {return new Promise(function (resolve) {return setTimeout(resolve, 1000 / 50);});}; // nvue动画模块实现细节抽离在外部文件

// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
var getClassNames = function getClassNames(name) {return {
    enter: "u-".concat(name, "-enter u-").concat(name, "-enter-active"),
    'enter-to': "u-".concat(name, "-enter-to u-").concat(name, "-enter-active"),
    leave: "u-".concat(name, "-leave u-").concat(name, "-leave-active"),
    'leave-to': "u-".concat(name, "-leave-to u-").concat(name, "-leave-active") };};var _default =










{
  methods: {
    // 组件被点击发出事件
    clickHandler: function clickHandler() {
      this.$emit('click');
    },

    // vue版本的组件进场处理
    vueEnter: function vueEnter() {var _this = this;
      // 动画进入时的类名
      var classNames = getClassNames(this.mode);
      // 定义状态和发出动画进入前事件
      this.status = 'enter';
      this.$emit('beforeEnter');
      this.inited = true;
      this.display = true;
      this.classes = classNames.enter;
      this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:



                // 标识动画尚未结束
                _this.$emit('enter');
                _this.transitionEnded = false;
                // 组件动画进入后触发的事件
                _this.$emit('afterEnter');
                // 赋予组件enter-to类名
                _this.classes = classNames['enter-to'];case 4:case "end":return _context.stop();}}}, _callee);})));

    },
    // 动画离场处理
    vueLeave: function vueLeave() {var _this2 = this;
      // 如果不是展示状态，无需执行逻辑
      if (!this.display) return;
      var classNames = getClassNames(this.mode);
      // 标记离开状态和发出事件
      this.status = 'leave';
      this.$emit('beforeLeave');
      // 获得类名
      this.classes = classNames.leave;

      this.$nextTick(function () {
        // 动画正在离场的状态
        _this2.transitionEnded = false;
        _this2.$emit('leave');
        // 组件执行动画，到了执行的执行时间后，执行一些额外处理
        setTimeout(_this2.onTransitionEnd, _this2.duration);
        _this2.classes = classNames['leave-to'];
      });
    },







































































    // 完成过渡后触发
    onTransitionEnd: function onTransitionEnd() {
      // 如果已经是结束的状态，无需再处理
      if (this.transitionEnded) return;
      this.transitionEnded = true;
      // 发出组件动画执行后的事件
      this.$emit(this.status === 'leave' ? 'afterLeave' : 'afterEnter');
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    } } };exports.default = _default;

/***/ }),
/* 242 */
/*!******************************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-transition/nvue.ani-map.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  fade: {
    enter: { opacity: 0 },
    'enter-to': { opacity: 1 },
    leave: { opacity: 1 },
    'leave-to': { opacity: 0 } },

  'fade-up': {
    enter: { opacity: 0, transform: 'translateY(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(100%)' } },

  'fade-down': {
    enter: { opacity: 0, transform: 'translateY(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(-100%)' } },

  'fade-left': {
    enter: { opacity: 0, transform: 'translateX(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(-100%)' } },

  'fade-right': {
    enter: { opacity: 0, transform: 'translateX(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(100%)' } },

  'slide-up': {
    enter: { transform: 'translateY(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(100%)' } },

  'slide-down': {
    enter: { transform: 'translateY(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(-100%)' } },

  'slide-left': {
    enter: { transform: 'translateX(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(-100%)' } },

  'slide-right': {
    enter: { transform: 'translateX(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(100%)' } },

  zoom: {
    enter: { transform: 'scale(0.95)' },
    'enter-to': { transform: 'scale(1)' },
    leave: { transform: 'scale(1)' },
    'leave-to': { transform: 'scale(0.95)' } },

  'fade-zoom': {
    enter: { opacity: 0, transform: 'scale(0.95)' },
    'enter-to': { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 1, transform: 'scale(1)' },
    'leave-to': { opacity: 0, transform: 'scale(0.95)' } } };exports.default = _default;

/***/ }),
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-icon/icons.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  'uicon-level': "\uE693",
  'uicon-column-line': "\uE68E",
  'uicon-checkbox-mark': "\uE807",
  'uicon-folder': "\uE7F5",
  'uicon-movie': "\uE7F6",
  'uicon-star-fill': "\uE669",
  'uicon-star': "\uE65F",
  'uicon-phone-fill': "\uE64F",
  'uicon-phone': "\uE622",
  'uicon-apple-fill': "\uE881",
  'uicon-chrome-circle-fill': "\uE885",
  'uicon-backspace': "\uE67B",
  'uicon-attach': "\uE632",
  'uicon-cut': "\uE948",
  'uicon-empty-car': "\uE602",
  'uicon-empty-coupon': "\uE682",
  'uicon-empty-address': "\uE646",
  'uicon-empty-favor': "\uE67C",
  'uicon-empty-permission': "\uE686",
  'uicon-empty-news': "\uE687",
  'uicon-empty-search': "\uE664",
  'uicon-github-circle-fill': "\uE887",
  'uicon-rmb': "\uE608",
  'uicon-person-delete-fill': "\uE66A",
  'uicon-reload': "\uE788",
  'uicon-order': "\uE68F",
  'uicon-server-man': "\uE6BC",
  'uicon-search': "\uE62A",
  'uicon-fingerprint': "\uE955",
  'uicon-more-dot-fill': "\uE630",
  'uicon-scan': "\uE662",
  'uicon-share-square': "\uE60B",
  'uicon-map': "\uE61D",
  'uicon-map-fill': "\uE64E",
  'uicon-tags': "\uE629",
  'uicon-tags-fill': "\uE651",
  'uicon-bookmark-fill': "\uE63B",
  'uicon-bookmark': "\uE60A",
  'uicon-eye': "\uE613",
  'uicon-eye-fill': "\uE641",
  'uicon-mic': "\uE64A",
  'uicon-mic-off': "\uE649",
  'uicon-calendar': "\uE66E",
  'uicon-calendar-fill': "\uE634",
  'uicon-trash': "\uE623",
  'uicon-trash-fill': "\uE658",
  'uicon-play-left': "\uE66D",
  'uicon-play-right': "\uE610",
  'uicon-minus': "\uE618",
  'uicon-plus': "\uE62D",
  'uicon-info': "\uE653",
  'uicon-info-circle': "\uE7D2",
  'uicon-info-circle-fill': "\uE64B",
  'uicon-question': "\uE715",
  'uicon-error': "\uE6D3",
  'uicon-close': "\uE685",
  'uicon-checkmark': "\uE6A8",
  'uicon-android-circle-fill': "\uE67E",
  'uicon-android-fill': "\uE67D",
  'uicon-ie': "\uE87B",
  'uicon-IE-circle-fill': "\uE889",
  'uicon-google': "\uE87A",
  'uicon-google-circle-fill': "\uE88A",
  'uicon-setting-fill': "\uE872",
  'uicon-setting': "\uE61F",
  'uicon-minus-square-fill': "\uE855",
  'uicon-plus-square-fill': "\uE856",
  'uicon-heart': "\uE7DF",
  'uicon-heart-fill': "\uE851",
  'uicon-camera': "\uE7D7",
  'uicon-camera-fill': "\uE870",
  'uicon-more-circle': "\uE63E",
  'uicon-more-circle-fill': "\uE645",
  'uicon-chat': "\uE620",
  'uicon-chat-fill': "\uE61E",
  'uicon-bag-fill': "\uE617",
  'uicon-bag': "\uE619",
  'uicon-error-circle-fill': "\uE62C",
  'uicon-error-circle': "\uE624",
  'uicon-close-circle': "\uE63F",
  'uicon-close-circle-fill': "\uE637",
  'uicon-checkmark-circle': "\uE63D",
  'uicon-checkmark-circle-fill': "\uE635",
  'uicon-question-circle-fill': "\uE666",
  'uicon-question-circle': "\uE625",
  'uicon-share': "\uE631",
  'uicon-share-fill': "\uE65E",
  'uicon-shopping-cart': "\uE621",
  'uicon-shopping-cart-fill': "\uE65D",
  'uicon-bell': "\uE609",
  'uicon-bell-fill': "\uE640",
  'uicon-list': "\uE650",
  'uicon-list-dot': "\uE616",
  'uicon-zhihu': "\uE6BA",
  'uicon-zhihu-circle-fill': "\uE709",
  'uicon-zhifubao': "\uE6B9",
  'uicon-zhifubao-circle-fill': "\uE6B8",
  'uicon-weixin-circle-fill': "\uE6B1",
  'uicon-weixin-fill': "\uE6B2",
  'uicon-twitter-circle-fill': "\uE6AB",
  'uicon-twitter': "\uE6AA",
  'uicon-taobao-circle-fill': "\uE6A7",
  'uicon-taobao': "\uE6A6",
  'uicon-weibo-circle-fill': "\uE6A5",
  'uicon-weibo': "\uE6A4",
  'uicon-qq-fill': "\uE6A1",
  'uicon-qq-circle-fill': "\uE6A0",
  'uicon-moments-circel-fill': "\uE69A",
  'uicon-moments': "\uE69B",
  'uicon-qzone': "\uE695",
  'uicon-qzone-circle-fill': "\uE696",
  'uicon-baidu-circle-fill': "\uE680",
  'uicon-baidu': "\uE681",
  'uicon-facebook-circle-fill': "\uE68A",
  'uicon-facebook': "\uE689",
  'uicon-car': "\uE60C",
  'uicon-car-fill': "\uE636",
  'uicon-warning-fill': "\uE64D",
  'uicon-warning': "\uE694",
  'uicon-clock-fill': "\uE638",
  'uicon-clock': "\uE60F",
  'uicon-edit-pen': "\uE612",
  'uicon-edit-pen-fill': "\uE66B",
  'uicon-email': "\uE611",
  'uicon-email-fill': "\uE642",
  'uicon-minus-circle': "\uE61B",
  'uicon-minus-circle-fill': "\uE652",
  'uicon-plus-circle': "\uE62E",
  'uicon-plus-circle-fill': "\uE661",
  'uicon-file-text': "\uE663",
  'uicon-file-text-fill': "\uE665",
  'uicon-pushpin': "\uE7E3",
  'uicon-pushpin-fill': "\uE86E",
  'uicon-grid': "\uE673",
  'uicon-grid-fill': "\uE678",
  'uicon-play-circle': "\uE647",
  'uicon-play-circle-fill': "\uE655",
  'uicon-pause-circle-fill': "\uE654",
  'uicon-pause': "\uE8FA",
  'uicon-pause-circle': "\uE643",
  'uicon-eye-off': "\uE648",
  'uicon-eye-off-outline': "\uE62B",
  'uicon-gift-fill': "\uE65C",
  'uicon-gift': "\uE65B",
  'uicon-rmb-circle-fill': "\uE657",
  'uicon-rmb-circle': "\uE677",
  'uicon-kefu-ermai': "\uE656",
  'uicon-server-fill': "\uE751",
  'uicon-coupon-fill': "\uE8C4",
  'uicon-coupon': "\uE8AE",
  'uicon-integral': "\uE704",
  'uicon-integral-fill': "\uE703",
  'uicon-home-fill': "\uE964",
  'uicon-home': "\uE965",
  'uicon-hourglass-half-fill': "\uE966",
  'uicon-hourglass': "\uE967",
  'uicon-account': "\uE628",
  'uicon-plus-people-fill': "\uE626",
  'uicon-minus-people-fill': "\uE615",
  'uicon-account-fill': "\uE614",
  'uicon-thumb-down-fill': "\uE726",
  'uicon-thumb-down': "\uE727",
  'uicon-thumb-up': "\uE733",
  'uicon-thumb-up-fill': "\uE72F",
  'uicon-lock-fill': "\uE979",
  'uicon-lock-open': "\uE973",
  'uicon-lock-opened-fill': "\uE974",
  'uicon-lock': "\uE97A",
  'uicon-red-packet-fill': "\uE690",
  'uicon-photo-fill': "\uE98B",
  'uicon-photo': "\uE98D",
  'uicon-volume-off-fill': "\uE659",
  'uicon-volume-off': "\uE644",
  'uicon-volume-fill': "\uE670",
  'uicon-volume': "\uE633",
  'uicon-red-packet': "\uE691",
  'uicon-download': "\uE63C",
  'uicon-arrow-up-fill': "\uE6B0",
  'uicon-arrow-down-fill': "\uE600",
  'uicon-play-left-fill': "\uE675",
  'uicon-play-right-fill': "\uE676",
  'uicon-rewind-left-fill': "\uE679",
  'uicon-rewind-right-fill': "\uE67A",
  'uicon-arrow-downward': "\uE604",
  'uicon-arrow-leftward': "\uE601",
  'uicon-arrow-rightward': "\uE603",
  'uicon-arrow-upward': "\uE607",
  'uicon-arrow-down': "\uE60D",
  'uicon-arrow-right': "\uE605",
  'uicon-arrow-left': "\uE60E",
  'uicon-arrow-up': "\uE606",
  'uicon-skip-back-left': "\uE674",
  'uicon-skip-forward-right': "\uE672",
  'uicon-rewind-right': "\uE66F",
  'uicon-rewind-left': "\uE671",
  'uicon-arrow-right-double': "\uE68D",
  'uicon-arrow-left-double': "\uE68C",
  'uicon-wifi-off': "\uE668",
  'uicon-wifi': "\uE667",
  'uicon-empty-data': "\uE62F",
  'uicon-empty-history': "\uE684",
  'uicon-empty-list': "\uE68B",
  'uicon-empty-page': "\uE627",
  'uicon-empty-order': "\uE639",
  'uicon-man': "\uE697",
  'uicon-woman': "\uE69C",
  'uicon-man-add': "\uE61C",
  'uicon-man-add-fill': "\uE64C",
  'uicon-man-delete': "\uE61A",
  'uicon-man-delete-fill': "\uE66A",
  'uicon-zh': "\uE70A",
  'uicon-en': "\uE692" };exports.default = _default;

/***/ }),
/* 251 */
/*!*****************************************************************************************!*\
  !*** C:/Users/刘秊/Desktop/seec1/second/node_modules/uview-ui/components/u-icon/props.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 图标类名
    name: {
      type: String,
      default: uni.$u.props.icon.name },

    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: uni.$u.props.icon.color },

    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: uni.$u.props.icon.size },

    // 是否显示粗体
    bold: {
      type: Boolean,
      default: uni.$u.props.icon.bold },

    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: uni.$u.props.icon.index },

    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: uni.$u.props.icon.hoverClass },

    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: uni.$u.props.icon.customPrefix },

    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: uni.$u.props.icon.label },

    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: uni.$u.props.icon.labelPos },

    // label的大小
    labelSize: {
      type: [String, Number],
      default: uni.$u.props.icon.labelSize },

    // label的颜色
    labelColor: {
      type: String,
      default: uni.$u.props.icon.labelColor },

    // label与图标的距离
    space: {
      type: [String, Number],
      default: uni.$u.props.icon.space },

    // 图片的mode
    imgMode: {
      type: String,
      default: uni.$u.props.icon.imgMode },

    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: uni.$u.props.icon.width },

    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: uni.$u.props.icon.height },

    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: uni.$u.props.icon.top },

    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: uni.$u.props.icon.stop } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map