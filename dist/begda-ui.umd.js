/*!
  * begda-ui v0.0.16
  * (c) 2022-10-1
  * @license ISC
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.begdaUI = factory(global.Vue));
})(this, (function (require$$0$1) { 'use strict';

  var version = "0.0.17";

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function () {
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var icon = {};

  var interopRequireDefault = {exports: {}};

  (function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);

  var helper;
  var hasRequiredHelper;
  function requireHelper() {
    if (hasRequiredHelper) return helper;
    hasRequiredHelper = 1;
    function _extends() {
      return _extends = Object.assign ? Object.assign.bind() : function (a) {
        for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        return a;
      }, _extends.apply(this, arguments);
    }
    var normalMerge = ["attrs", "props", "domProps"],
      toArrayMerge = ["class", "style", "directives"],
      functionalMerge = ["on", "nativeOn"],
      mergeJsxProps = function (a) {
        return a.reduce(function (c, a) {
          for (var b in a) if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
            var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
            c[b] = [].concat(d, e);
          } else if (-1 !== functionalMerge.indexOf(b)) {
            for (var f in a[b]) if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = [].concat(g, h);
            } else c[b][f] = a[b][f];
          } else if ("hook" === b) for (var i in a[b]) c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];else c[b] = a[b];
          return c;
        }, {});
      },
      mergeFn = function (a, b) {
        return function () {
          a && a.apply(this, arguments), b && b.apply(this, arguments);
        };
      };
    helper = mergeJsxProps;
    return helper;
  }

  var utils = {};

  var create = {};

  var bem$5 = {};

  var hasRequiredBem;
  function requireBem() {
    if (hasRequiredBem) return bem$5;
    hasRequiredBem = 1;
    bem$5.__esModule = true;
    bem$5.createBEM = createBEM;

    /**
     * bem helper
     * b() // 'button'
     * b('text') // 'button__text'
     * b({ disabled }) // 'button button--disabled'
     * b('text', { disabled }) // 'button__text button__text--disabled'
     * b(['disabled', 'primary']) // 'button button--disabled button--primary'
     */
    function gen(name, mods) {
      if (!mods) {
        return '';
      }
      if (typeof mods === 'string') {
        return " " + name + "--" + mods;
      }
      if (Array.isArray(mods)) {
        return mods.reduce(function (ret, item) {
          return ret + gen(name, item);
        }, '');
      }
      return Object.keys(mods).reduce(function (ret, key) {
        return ret + (mods[key] ? gen(name, key) : '');
      }, '');
    }
    function createBEM(name) {
      return function (el, mods) {
        if (el && typeof el !== 'string') {
          mods = el;
          el = '';
        }
        el = el ? name + "__" + el : name;
        return "" + el + gen(el, mods);
      };
    }
    return bem$5;
  }

  var component = {};

  var locale$2 = {};

  var deepAssign = {};

  var hasRequiredDeepAssign;
  function requireDeepAssign() {
    if (hasRequiredDeepAssign) return deepAssign;
    hasRequiredDeepAssign = 1;
    deepAssign.__esModule = true;
    deepAssign.deepAssign = deepAssign$1;
    var _ = requireUtils();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function assignKey(to, from, key) {
      var val = from[key];
      if (!(0, _.isDef)(val)) {
        return;
      }
      if (!hasOwnProperty.call(to, key) || !(0, _.isObject)(val)) {
        to[key] = val;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        to[key] = deepAssign$1(Object(to[key]), from[key]);
      }
    }
    function deepAssign$1(to, from) {
      Object.keys(from).forEach(function (key) {
        assignKey(to, from, key);
      });
      return to;
    }
    return deepAssign;
  }

  var zhCN$1 = {};

  var hasRequiredZhCN$1;
  function requireZhCN$1() {
    if (hasRequiredZhCN$1) return zhCN$1;
    hasRequiredZhCN$1 = 1;
    zhCN$1.__esModule = true;
    zhCN$1.default = void 0;
    var _default = {
      name: '姓名',
      tel: '电话',
      save: '保存',
      confirm: '确认',
      cancel: '取消',
      delete: '删除',
      complete: '完成',
      loading: '加载中...',
      telEmpty: '请填写电话',
      nameEmpty: '请填写姓名',
      nameInvalid: '请输入正确的姓名',
      confirmDelete: '确定要删除吗',
      telInvalid: '请输入正确的手机号',
      vanCalendar: {
        end: '结束',
        start: '开始',
        title: '日期选择',
        confirm: '确定',
        startEnd: '开始/结束',
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        monthTitle: function monthTitle(year, month) {
          return year + "\u5E74" + month + "\u6708";
        },
        rangePrompt: function rangePrompt(maxRange) {
          return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
        }
      },
      vanCascader: {
        select: '请选择'
      },
      vanContactCard: {
        addText: '添加联系人'
      },
      vanContactList: {
        addText: '新建联系人'
      },
      vanPagination: {
        prev: '上一页',
        next: '下一页'
      },
      vanPullRefresh: {
        pulling: '下拉即可刷新...',
        loosing: '释放即可刷新...'
      },
      vanSubmitBar: {
        label: '合计：'
      },
      vanCoupon: {
        unlimited: '无使用门槛',
        discount: function discount(_discount) {
          return _discount + "\u6298";
        },
        condition: function condition(_condition) {
          return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
        }
      },
      vanCouponCell: {
        title: '优惠券',
        tips: '暂无可用',
        count: function count(_count) {
          return _count + "\u5F20\u53EF\u7528";
        }
      },
      vanCouponList: {
        empty: '暂无优惠券',
        exchange: '兑换',
        close: '不使用优惠券',
        enable: '可用',
        disabled: '不可用',
        placeholder: '请输入优惠码'
      },
      vanAddressEdit: {
        area: '地区',
        postal: '邮政编码',
        areaEmpty: '请选择地区',
        addressEmpty: '请填写详细地址',
        postalEmpty: '邮政编码格式不正确',
        defaultAddress: '设为默认收货地址',
        telPlaceholder: '收货人手机号',
        namePlaceholder: '收货人姓名',
        areaPlaceholder: '选择省 / 市 / 区'
      },
      vanAddressEditDetail: {
        label: '详细地址',
        placeholder: '街道门牌、楼层房间号等信息'
      },
      vanAddressList: {
        add: '新增地址'
      }
    };
    zhCN$1.default = _default;
    return zhCN$1;
  }

  var hasRequiredLocale$2;
  function requireLocale$2() {
    if (hasRequiredLocale$2) return locale$2;
    hasRequiredLocale$2 = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    locale$2.__esModule = true;
    locale$2.default = void 0;
    var _vue = _interopRequireDefault(require$$0$1);
    var _deepAssign = requireDeepAssign();
    var _zhCN = _interopRequireDefault(requireZhCN$1());
    var proto = _vue.default.prototype;
    var defineReactive = _vue.default.util.defineReactive;
    defineReactive(proto, '$vantLang', 'zh-CN');
    defineReactive(proto, '$vantMessages', {
      'zh-CN': _zhCN.default
    });
    var _default = {
      messages: function messages() {
        return proto.$vantMessages[proto.$vantLang];
      },
      use: function use(lang, messages) {
        var _this$add;
        proto.$vantLang = lang;
        this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
      },
      add: function add(messages) {
        if (messages === void 0) {
          messages = {};
        }
        (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
      }
    };
    locale$2.default = _default;
    return locale$2;
  }

  var string = {};

  var hasRequiredString;
  function requireString() {
    if (hasRequiredString) return string;
    hasRequiredString = 1;
    string.__esModule = true;
    string.camelize = camelize;
    string.padZero = padZero;
    var camelizeRE = /-(\w)/g;
    function camelize(str) {
      return str.replace(camelizeRE, function (_, c) {
        return c.toUpperCase();
      });
    }
    function padZero(num, targetLength) {
      if (targetLength === void 0) {
        targetLength = 2;
      }
      var str = num + '';
      while (str.length < targetLength) {
        str = '0' + str;
      }
      return str;
    }
    return string;
  }

  var slots = {};

  var hasRequiredSlots;
  function requireSlots() {
    if (hasRequiredSlots) return slots;
    hasRequiredSlots = 1;
    slots.__esModule = true;
    slots.SlotsMixin = void 0;

    /**
     * Use scopedSlots in Vue 2.6+
     * downgrade to slots in lower version
     */
    var SlotsMixin = {
      methods: {
        slots: function slots(name, props) {
          if (name === void 0) {
            name = 'default';
          }
          var $slots = this.$slots,
            $scopedSlots = this.$scopedSlots;
          var scopedSlot = $scopedSlots[name];
          if (scopedSlot) {
            return scopedSlot(props);
          }
          return $slots[name];
        }
      }
    };
    slots.SlotsMixin = SlotsMixin;
    return slots;
  }

  var hasRequiredComponent;
  function requireComponent() {
    if (hasRequiredComponent) return component;
    hasRequiredComponent = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    component.__esModule = true;
    component.unifySlots = unifySlots;
    component.createComponent = createComponent;
    requireLocale$2();
    var _ = requireUtils();
    var _string = requireString();
    var _slots = requireSlots();
    _interopRequireDefault(require$$0$1);

    /**
     * Create a basic component with common options
     */
    function install(Vue) {
      var name = this.name;
      Vue.component(name, this);
      Vue.component((0, _string.camelize)("-" + name), this);
    } // unify slots & scopedSlots

    function unifySlots(context) {
      // use data.scopedSlots in lower Vue version
      var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
      var slots = context.slots();
      Object.keys(slots).forEach(function (key) {
        if (!scopedSlots[key]) {
          scopedSlots[key] = function () {
            return slots[key];
          };
        }
      });
      return scopedSlots;
    } // should be removed after Vue 3

    function transformFunctionComponent(pure) {
      return {
        functional: true,
        props: pure.props,
        model: pure.model,
        render: function render(h, context) {
          return pure(h, context.props, unifySlots(context), context);
        }
      };
    }
    function createComponent(name) {
      return function (sfc) {
        if ((0, _.isFunction)(sfc)) {
          sfc = transformFunctionComponent(sfc);
        }
        if (!sfc.functional) {
          sfc.mixins = sfc.mixins || [];
          sfc.mixins.push(_slots.SlotsMixin);
        }
        sfc.name = name;
        sfc.install = install;
        return sfc;
      };
    }
    return component;
  }

  var i18n = {};

  var hasRequiredI18n;
  function requireI18n() {
    if (hasRequiredI18n) return i18n;
    hasRequiredI18n = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    i18n.__esModule = true;
    i18n.createI18N = createI18N;
    var _ = requireUtils();
    var _string = requireString();
    var _locale = _interopRequireDefault(requireLocale$2());
    function createI18N(name) {
      var prefix = (0, _string.camelize)(name) + '.';
      return function (path) {
        var messages = _locale.default.messages();
        var message = (0, _.get)(messages, prefix + path) || (0, _.get)(messages, path);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return (0, _.isFunction)(message) ? message.apply(void 0, args) : message;
      };
    }
    return i18n;
  }

  var hasRequiredCreate;
  function requireCreate() {
    if (hasRequiredCreate) return create;
    hasRequiredCreate = 1;
    create.__esModule = true;
    create.createNamespace = createNamespace;
    var _bem = requireBem();
    var _component = requireComponent();
    var _i18n = requireI18n();
    function createNamespace(name) {
      name = 'van-' + name;
      return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
    }
    return create;
  }

  var unit = {};

  var number$1 = {};

  var hasRequiredNumber$1;
  function requireNumber$1() {
    if (hasRequiredNumber$1) return number$1;
    hasRequiredNumber$1 = 1;
    number$1.__esModule = true;
    number$1.isNumeric = isNumeric;
    number$1.isNaN = isNaN;
    function isNumeric(val) {
      return /^\d+(\.\d+)?$/.test(val);
    }
    function isNaN(val) {
      if (Number.isNaN) {
        return Number.isNaN(val);
      } // eslint-disable-next-line no-self-compare

      return val !== val;
    }
    return number$1;
  }

  var hasRequiredUnit;
  function requireUnit() {
    if (hasRequiredUnit) return unit;
    hasRequiredUnit = 1;
    unit.__esModule = true;
    unit.addUnit = addUnit;
    unit.unitToPx = unitToPx;
    var _ = requireUtils();
    var _number = requireNumber$1();
    function addUnit(value) {
      if (!(0, _.isDef)(value)) {
        return undefined;
      }
      value = String(value);
      return (0, _number.isNumeric)(value) ? value + "px" : value;
    } // cache

    var rootFontSize;
    function getRootFontSize() {
      if (!rootFontSize) {
        var doc = document.documentElement;
        var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
        rootFontSize = parseFloat(fontSize);
      }
      return rootFontSize;
    }
    function convertRem(value) {
      value = value.replace(/rem/g, '');
      return +value * getRootFontSize();
    }
    function convertVw(value) {
      value = value.replace(/vw/g, '');
      return +value * window.innerWidth / 100;
    }
    function convertVh(value) {
      value = value.replace(/vh/g, '');
      return +value * window.innerHeight / 100;
    }
    function unitToPx(value) {
      if (typeof value === 'number') {
        return value;
      }
      if (_.inBrowser) {
        if (value.indexOf('rem') !== -1) {
          return convertRem(value);
        }
        if (value.indexOf('vw') !== -1) {
          return convertVw(value);
        }
        if (value.indexOf('vh') !== -1) {
          return convertVh(value);
        }
      }
      return parseFloat(value);
    }
    return unit;
  }

  var hasRequiredUtils;
  function requireUtils() {
    if (hasRequiredUtils) return utils;
    hasRequiredUtils = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    utils.__esModule = true;
    utils.noop = noop;
    utils.isDef = isDef;
    utils.isFunction = isFunction;
    utils.isObject = isObject;
    utils.isPromise = isPromise;
    utils.get = get;
    utils.isEmpty = isEmpty;
    utils.isServer = utils.inBrowser = utils.addUnit = utils.createNamespace = void 0;
    var _vue = _interopRequireDefault(require$$0$1);
    var _create = requireCreate();
    utils.createNamespace = _create.createNamespace;
    var _unit = requireUnit();
    utils.addUnit = _unit.addUnit;
    var inBrowser = typeof window !== 'undefined';
    utils.inBrowser = inBrowser;
    var isServer = _vue.default.prototype.$isServer; // eslint-disable-next-line @typescript-eslint/no-empty-function

    utils.isServer = isServer;
    function noop() {}
    function isDef(val) {
      return val !== undefined && val !== null;
    }
    function isFunction(val) {
      return typeof val === 'function';
    }
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }
    function isPromise(val) {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    }
    function get(object, path) {
      var keys = path.split('.');
      var result = object;
      keys.forEach(function (key) {
        var _result$key;
        result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : '';
      });
      return result;
    }
    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @function isEmpty
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */

    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (typeof value !== 'object') {
        return true;
      }
      return Object.keys(value).length === 0;
    }
    return utils;
  }

  var functional = {};

  var _extends = {exports: {}};

  var hasRequired_extends;
  function require_extends() {
    if (hasRequired_extends) return _extends.exports;
    hasRequired_extends = 1;
    (function (module) {
      function _extends() {
        module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _extends.apply(this, arguments);
      }
      module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_extends);
    return _extends.exports;
  }

  var hasRequiredFunctional;
  function requireFunctional() {
    if (hasRequiredFunctional) return functional;
    hasRequiredFunctional = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    functional.__esModule = true;
    functional.inherit = inherit;
    functional.emit = emit;
    functional.mount = mount;
    var _extends2 = _interopRequireDefault(require_extends());
    var _vue = _interopRequireDefault(require$$0$1);
    var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
    var mapInheritKey = {
      nativeOn: 'on'
    }; // inherit partial context, map nativeOn to on

    function inherit(context, inheritListeners) {
      var result = inheritKey.reduce(function (obj, key) {
        if (context.data[key]) {
          obj[mapInheritKey[key] || key] = context.data[key];
        }
        return obj;
      }, {});
      if (inheritListeners) {
        result.on = result.on || {};
        (0, _extends2.default)(result.on, context.data.on);
      }
      return result;
    } // emit event

    function emit(context, eventName) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      var listeners = context.listeners[eventName];
      if (listeners) {
        if (Array.isArray(listeners)) {
          listeners.forEach(function (listener) {
            listener.apply(void 0, args);
          });
        } else {
          listeners.apply(void 0, args);
        }
      }
    } // mount functional component

    function mount(Component, data) {
      var instance = new _vue.default({
        el: document.createElement('div'),
        props: Component.props,
        render: function render(h) {
          return h(Component, (0, _extends2.default)({
            props: this.$props
          }, data));
        }
      });
      document.body.appendChild(instance.$el);
      return instance;
    }
    return functional;
  }

  var info = {};

  var hasRequiredInfo;
  function requireInfo() {
    if (hasRequiredInfo) return info;
    hasRequiredInfo = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    info.__esModule = true;
    info.default = void 0;
    var _babelHelperVueJsxMergeProps = _interopRequireDefault(requireHelper());
    var _utils = requireUtils();
    var _functional = requireFunctional();

    // Utils
    var _createNamespace = (0, _utils.createNamespace)('info'),
      createComponent = _createNamespace[0],
      bem = _createNamespace[1];
    function Info(h, props, slots, ctx) {
      var dot = props.dot,
        info = props.info;
      var showInfo = (0, _utils.isDef)(info) && info !== '';
      if (!dot && !showInfo) {
        return;
      }
      return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
        "class": bem({
          dot: dot
        })
      }, (0, _functional.inherit)(ctx, true)]), [dot ? '' : props.info]);
    }
    Info.props = {
      dot: Boolean,
      info: [Number, String]
    };
    var _default = createComponent(Info);
    info.default = _default;
    return info;
  }

  var _interopRequireDefault$5 = interopRequireDefault.exports;
  icon.__esModule = true;
  var default_1$4 = icon.default = void 0;
  var _babelHelperVueJsxMergeProps$4 = _interopRequireDefault$5(requireHelper());
  var _utils$4 = requireUtils();
  var _functional$3 = requireFunctional();
  var _info = _interopRequireDefault$5(requireInfo());

  // Utils
  // Components
  var _createNamespace$4 = (0, _utils$4.createNamespace)('icon'),
    createComponent$4 = _createNamespace$4[0],
    bem$4 = _createNamespace$4[1];
  function isImage(name) {
    return name ? name.indexOf('/') !== -1 : false;
  } // compatible with legacy usage, should be removed in next major version

  var LEGACY_MAP = {
    medel: 'medal',
    'medel-o': 'medal-o',
    'calender-o': 'calendar-o'
  };
  function correctName(name) {
    return name && LEGACY_MAP[name] || name;
  }
  function Icon(h, props, slots, ctx) {
    var _props$badge;
    var name = correctName(props.name);
    var imageIcon = isImage(name);
    if (process.env.NODE_ENV === 'development' && props.info) {
      console.warn('[Vant] Icon: "info" prop is deprecated, use "badge" prop instead.');
    }
    return h(props.tag, (0, _babelHelperVueJsxMergeProps$4.default)([{
      "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
      "style": {
        color: props.color,
        fontSize: (0, _utils$4.addUnit)(props.size)
      }
    }, (0, _functional$3.inherit)(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
      "class": bem$4('image'),
      "attrs": {
        "src": name
      }
    }), h(_info.default, {
      "attrs": {
        "dot": props.dot,
        "info": (_props$badge = props.badge) != null ? _props$badge : props.info
      }
    })]);
  }
  Icon.props = {
    dot: Boolean,
    name: String,
    size: [Number, String],
    // @deprecated
    // should be removed in next major version
    info: [Number, String],
    badge: [Number, String],
    color: String,
    tag: {
      type: String,
      default: 'i'
    },
    classPrefix: {
      type: String,
      default: bem$4()
    }
  };
  var _default$4 = createComponent$4(Icon);
  default_1$4 = icon.default = _default$4;

  var cell = {};

  var router = {};

  var hasRequiredRouter;
  function requireRouter() {
    if (hasRequiredRouter) return router;
    hasRequiredRouter = 1;
    router.__esModule = true;
    router.route = route;
    router.functionalRoute = functionalRoute;
    router.routeProps = void 0;

    /**
     * Vue Router support
     */
    function isRedundantNavigation(err) {
      return err.name === 'NavigationDuplicated' ||
      // compatible with vue-router@3.3
      err.message && err.message.indexOf('redundant navigation') !== -1;
    }
    function route(router, config) {
      var to = config.to,
        url = config.url,
        replace = config.replace;
      if (to && router) {
        var promise = router[replace ? 'replace' : 'push'](to);
        /* istanbul ignore else */

        if (promise && promise.catch) {
          promise.catch(function (err) {
            if (err && !isRedundantNavigation(err)) {
              throw err;
            }
          });
        }
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
    function functionalRoute(context) {
      route(context.parent && context.parent.$router, context.props);
    }
    var routeProps = {
      url: String,
      replace: Boolean,
      to: [String, Object]
    };
    router.routeProps = routeProps;
    return router;
  }

  var shared$1 = {};

  var hasRequiredShared$1;
  function requireShared$1() {
    if (hasRequiredShared$1) return shared$1;
    hasRequiredShared$1 = 1;
    shared$1.__esModule = true;
    shared$1.cellProps = void 0;
    var cellProps = {
      icon: String,
      size: String,
      center: Boolean,
      isLink: Boolean,
      required: Boolean,
      iconPrefix: String,
      titleStyle: null,
      titleClass: null,
      valueClass: null,
      labelClass: null,
      title: [Number, String],
      value: [Number, String],
      label: [Number, String],
      arrowDirection: String,
      border: {
        type: Boolean,
        default: true
      },
      clickable: {
        type: Boolean,
        default: null
      }
    };
    shared$1.cellProps = cellProps;
    return shared$1;
  }

  var _interopRequireDefault$4 = interopRequireDefault.exports;
  cell.__esModule = true;
  var default_1$3 = cell.default = void 0;
  var _extends2$2 = _interopRequireDefault$4(require_extends());
  var _babelHelperVueJsxMergeProps$3 = _interopRequireDefault$4(requireHelper());
  var _utils$3 = requireUtils();
  var _functional$2 = requireFunctional();
  var _router = requireRouter();
  var _shared$1 = requireShared$1();
  var _icon$2 = _interopRequireDefault$4(icon);

  // Utils
  // Components
  var _createNamespace$3 = (0, _utils$3.createNamespace)('cell'),
    createComponent$3 = _createNamespace$3[0],
    bem$3 = _createNamespace$3[1];
  function Cell(h, props, slots, ctx) {
    var _props$clickable;
    var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink;
    var showTitle = slots.title || (0, _utils$3.isDef)(title);
    function Label() {
      var showLabel = slots.label || (0, _utils$3.isDef)(label);
      if (showLabel) {
        return h("div", {
          "class": [bem$3('label'), props.labelClass]
        }, [slots.label ? slots.label() : label]);
      }
    }
    function Title() {
      if (showTitle) {
        return h("div", {
          "class": [bem$3('title'), props.titleClass],
          "style": props.titleStyle
        }, [slots.title ? slots.title() : h("span", [title]), Label()]);
      }
    }
    function Value() {
      var showValue = slots.default || (0, _utils$3.isDef)(value);
      if (showValue) {
        return h("div", {
          "class": [bem$3('value', {
            alone: !showTitle
          }), props.valueClass]
        }, [slots.default ? slots.default() : h("span", [value])]);
      }
    }
    function LeftIcon() {
      if (slots.icon) {
        return slots.icon();
      }
      if (icon) {
        return h(_icon$2.default, {
          "class": bem$3('left-icon'),
          "attrs": {
            "name": icon,
            "classPrefix": props.iconPrefix
          }
        });
      }
    }
    function RightIcon() {
      var rightIconSlot = slots['right-icon'];
      if (rightIconSlot) {
        return rightIconSlot();
      }
      if (isLink) {
        var arrowDirection = props.arrowDirection;
        return h(_icon$2.default, {
          "class": bem$3('right-icon'),
          "attrs": {
            "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
          }
        });
      }
    }
    function onClick(event) {
      (0, _functional$2.emit)(ctx, 'click', event);
      (0, _router.functionalRoute)(ctx);
    }
    var clickable = (_props$clickable = props.clickable) != null ? _props$clickable : isLink;
    var classes = {
      clickable: clickable,
      center: props.center,
      required: props.required,
      borderless: !props.border
    };
    if (size) {
      classes[size] = size;
    }
    return h("div", (0, _babelHelperVueJsxMergeProps$3.default)([{
      "class": bem$3(classes),
      "attrs": {
        "role": clickable ? 'button' : null,
        "tabindex": clickable ? 0 : null
      },
      "on": {
        "click": onClick
      }
    }, (0, _functional$2.inherit)(ctx)]), [LeftIcon(), Title(), Value(), RightIcon(), slots.extra == null ? void 0 : slots.extra()]);
  }
  Cell.props = (0, _extends2$2.default)({}, _shared$1.cellProps, _router.routeProps);
  var _default$3 = createComponent$3(Cell);
  default_1$3 = cell.default = _default$3;

  var constant = {};

  var hasRequiredConstant;
  function requireConstant() {
    if (hasRequiredConstant) return constant;
    hasRequiredConstant = 1;
    constant.__esModule = true;
    constant.BORDER_UNSET_TOP_BOTTOM = constant.BORDER_TOP_BOTTOM = constant.BORDER_SURROUND = constant.BORDER_BOTTOM = constant.BORDER_LEFT = constant.BORDER_TOP = constant.BORDER = constant.RED = void 0;
    // color
    var RED = '#ee0a24'; // border

    constant.RED = RED;
    var BORDER = 'van-hairline';
    constant.BORDER = BORDER;
    var BORDER_TOP = BORDER + "--top";
    constant.BORDER_TOP = BORDER_TOP;
    var BORDER_LEFT = BORDER + "--left";
    constant.BORDER_LEFT = BORDER_LEFT;
    var BORDER_BOTTOM = BORDER + "--bottom";
    constant.BORDER_BOTTOM = BORDER_BOTTOM;
    var BORDER_SURROUND = BORDER + "--surround";
    constant.BORDER_SURROUND = BORDER_SURROUND;
    var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
    constant.BORDER_TOP_BOTTOM = BORDER_TOP_BOTTOM;
    var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";
    constant.BORDER_UNSET_TOP_BOTTOM = BORDER_UNSET_TOP_BOTTOM;
    return constant;
  }

  var _interopRequireDefault$3 = interopRequireDefault.exports;
  var default_1$2 = void 0;
  var _babelHelperVueJsxMergeProps$2 = _interopRequireDefault$3(requireHelper());
  var _utils$2 = requireUtils();
  var _functional$1 = requireFunctional();
  var _constant = requireConstant();

  // Utils
  var _createNamespace$2 = (0, _utils$2.createNamespace)('cell-group'),
    createComponent$2 = _createNamespace$2[0],
    bem$2 = _createNamespace$2[1];
  function CellGroup(h, props, slots, ctx) {
    var _ref;
    var Group = h("div", (0, _babelHelperVueJsxMergeProps$2.default)([{
      "class": [bem$2({
        inset: props.inset
      }), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = props.border, _ref)]
    }, (0, _functional$1.inherit)(ctx, true)]), [slots.default == null ? void 0 : slots.default()]);
    if (props.title || slots.title) {
      return h("div", {
        "key": ctx.data.key
      }, [h("div", {
        "class": bem$2('title', {
          inset: props.inset
        })
      }, [slots.title ? slots.title() : props.title]), Group]);
    }
    return Group;
  }
  CellGroup.props = {
    title: String,
    inset: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  };
  var _default$2 = createComponent$2(CellGroup);
  default_1$2 = _default$2;

  var resetScroll = {};

  var system = {};

  var hasRequiredSystem;
  function requireSystem() {
    if (hasRequiredSystem) return system;
    hasRequiredSystem = 1;
    system.__esModule = true;
    system.isAndroid = isAndroid;
    system.isIOS = isIOS;
    var _ = requireUtils();
    function isAndroid() {
      /* istanbul ignore next */
      return _.isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
    }
    function isIOS() {
      /* istanbul ignore next */
      return _.isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    }
    return system;
  }

  var scroll = {};

  var hasRequiredScroll;
  function requireScroll() {
    if (hasRequiredScroll) return scroll;
    hasRequiredScroll = 1;
    scroll.__esModule = true;
    scroll.getScroller = getScroller;
    scroll.getScrollTop = getScrollTop;
    scroll.setScrollTop = setScrollTop;
    scroll.getRootScrollTop = getRootScrollTop;
    scroll.setRootScrollTop = setRootScrollTop;
    scroll.getElementTop = getElementTop;
    scroll.getVisibleHeight = getVisibleHeight;
    scroll.getVisibleTop = getVisibleTop;
    function isWindow(val) {
      return val === window;
    } // get nearest scroll element
    // https://github.com/vant-ui/vant/issues/3823

    var overflowScrollReg = /scroll|auto|overlay/i;
    function getScroller(el, root) {
      if (root === void 0) {
        root = window;
      }
      var node = el;
      while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
        var _window$getComputedSt = window.getComputedStyle(node),
          overflowY = _window$getComputedSt.overflowY;
        if (overflowScrollReg.test(overflowY)) {
          return node;
        }
        node = node.parentNode;
      }
      return root;
    }
    function getScrollTop(el) {
      var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

      return Math.max(top, 0);
    }
    function setScrollTop(el, value) {
      if ('scrollTop' in el) {
        el.scrollTop = value;
      } else {
        el.scrollTo(el.scrollX, value);
      }
    }
    function getRootScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    function setRootScrollTop(value) {
      setScrollTop(window, value);
      setScrollTop(document.body, value);
    } // get distance from element top to page top or scroller top

    function getElementTop(el, scroller) {
      if (isWindow(el)) {
        return 0;
      }
      var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
      return el.getBoundingClientRect().top + scrollTop;
    }
    function getVisibleHeight(el) {
      if (isWindow(el)) {
        return el.innerHeight;
      }
      return el.getBoundingClientRect().height;
    }
    function getVisibleTop(el) {
      if (isWindow(el)) {
        return 0;
      }
      return el.getBoundingClientRect().top;
    }
    return scroll;
  }

  var hasRequiredResetScroll;
  function requireResetScroll() {
    if (hasRequiredResetScroll) return resetScroll;
    hasRequiredResetScroll = 1;
    resetScroll.__esModule = true;
    resetScroll.resetScroll = resetScroll$1;
    var _system = requireSystem();
    var _scroll = requireScroll();

    /**
     * Hack for iOS12 page scroll
     * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
     */
    var isIOS = (0, _system.isIOS)();
    /* istanbul ignore next */

    function resetScroll$1() {
      if (isIOS) {
        (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)());
      }
    }
    return resetScroll;
  }

  var number = {};

  var hasRequiredNumber;
  function requireNumber() {
    if (hasRequiredNumber) return number;
    hasRequiredNumber = 1;
    number.__esModule = true;
    number.range = range;
    number.formatNumber = formatNumber;
    number.addNumber = addNumber;
    function range(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    function trimExtraChar(value, _char, regExp) {
      var index = value.indexOf(_char);
      var prefix = '';
      if (index === -1) {
        return value;
      }
      if (_char === '-' && index !== 0) {
        return value.slice(0, index);
      }
      if (_char === '.' && value.match(/^(\.|-\.)/)) {
        prefix = index ? '-0' : '0';
      }
      return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
    }
    function formatNumber(value, allowDot, allowMinus) {
      if (allowDot === void 0) {
        allowDot = true;
      }
      if (allowMinus === void 0) {
        allowMinus = true;
      }
      if (allowDot) {
        value = trimExtraChar(value, '.', /\./g);
      } else {
        value = value.split('.')[0];
      }
      if (allowMinus) {
        value = trimExtraChar(value, '-', /-/g);
      } else {
        value = value.replace(/-/, '');
      }
      var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
      return value.replace(regExp, '');
    } // add num and avoid float number

    function addNumber(num1, num2) {
      var cardinal = Math.pow(10, 10);
      return Math.round((num1 + num2) * cardinal) / cardinal;
    }
    return number;
  }

  var event = {};

  var hasRequiredEvent;
  function requireEvent() {
    if (hasRequiredEvent) return event;
    hasRequiredEvent = 1;
    event.__esModule = true;
    event.on = on;
    event.off = off;
    event.stopPropagation = stopPropagation;
    event.preventDefault = preventDefault;
    event.supportsPassive = void 0;
    var _ = requireUtils();

    // eslint-disable-next-line import/no-mutable-exports
    var supportsPassive = false;
    event.supportsPassive = supportsPassive;
    if (!_.isServer) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
          // eslint-disable-next-line getter-return
          get: function get() {
            /* istanbul ignore next */
            event.supportsPassive = supportsPassive = true;
          }
        });
        window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    function on(target, event, handler, passive) {
      if (passive === void 0) {
        passive = false;
      }
      if (!_.isServer) {
        target.addEventListener(event, handler, supportsPassive ? {
          capture: false,
          passive: passive
        } : false);
      }
    }
    function off(target, event, handler) {
      if (!_.isServer) {
        target.removeEventListener(event, handler);
      }
    }
    function stopPropagation(event) {
      event.stopPropagation();
    }
    function preventDefault(event, isStopPropagation) {
      /* istanbul ignore else */
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
      }
      if (isStopPropagation) {
        stopPropagation(event);
      }
    }
    return event;
  }

  var _interopRequireDefault$2 = interopRequireDefault.exports;
  var default_1$1 = void 0;
  var _babelHelperVueJsxMergeProps$1 = _interopRequireDefault$2(requireHelper());
  var _extends2$1 = _interopRequireDefault$2(require_extends());
  var _resetScroll = requireResetScroll();
  var _number = requireNumber();
  var _event = requireEvent();
  var _scroll = requireScroll();
  var _utils$1 = requireUtils();
  var _icon$1 = _interopRequireDefault$2(icon);
  var _cell = _interopRequireDefault$2(cell);
  var _shared = requireShared$1();

  // Utils
  // Components
  var _createNamespace$1 = (0, _utils$1.createNamespace)('field'),
    createComponent$1 = _createNamespace$1[0],
    bem$1 = _createNamespace$1[1];
  var _default$1 = createComponent$1({
    inheritAttrs: false,
    provide: function provide() {
      return {
        vanField: this
      };
    },
    inject: {
      vanForm: {
        default: null
      }
    },
    props: (0, _extends2$1.default)({}, _shared.cellProps, {
      name: String,
      rules: Array,
      disabled: {
        type: Boolean,
        default: null
      },
      readonly: {
        type: Boolean,
        default: null
      },
      autosize: [Boolean, Object],
      leftIcon: String,
      rightIcon: String,
      clearable: Boolean,
      formatter: Function,
      maxlength: [Number, String],
      labelWidth: [Number, String],
      labelClass: null,
      labelAlign: String,
      inputAlign: String,
      placeholder: String,
      errorMessage: String,
      errorMessageAlign: String,
      showWordLimit: Boolean,
      value: {
        type: [Number, String],
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      error: {
        type: Boolean,
        default: null
      },
      colon: {
        type: Boolean,
        default: null
      },
      clearTrigger: {
        type: String,
        default: 'focus'
      },
      formatTrigger: {
        type: String,
        default: 'onChange'
      }
    }),
    data: function data() {
      return {
        focused: false,
        validateFailed: false,
        validateMessage: ''
      };
    },
    watch: {
      value: function value() {
        this.updateValue(this.value);
        this.resetValidation();
        this.validateWithTrigger('onChange');
        this.$nextTick(this.adjustSize);
      }
    },
    mounted: function mounted() {
      this.updateValue(this.value, this.formatTrigger);
      this.$nextTick(this.adjustSize);
      if (this.vanForm) {
        this.vanForm.addField(this);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.vanForm) {
        this.vanForm.removeField(this);
      }
    },
    computed: {
      showClear: function showClear() {
        var readonly = this.getProp('readonly');
        if (this.clearable && !readonly) {
          var hasValue = (0, _utils$1.isDef)(this.value) && this.value !== '';
          var trigger = this.clearTrigger === 'always' || this.clearTrigger === 'focus' && this.focused;
          return hasValue && trigger;
        }
      },
      showError: function showError() {
        if (this.error !== null) {
          return this.error;
        }
        if (this.vanForm && this.vanForm.showError && this.validateFailed) {
          return true;
        }
      },
      listeners: function listeners() {
        return (0, _extends2$1.default)({}, this.$listeners, {
          blur: this.onBlur,
          focus: this.onFocus,
          input: this.onInput,
          click: this.onClickInput,
          keypress: this.onKeypress
        });
      },
      labelStyle: function labelStyle() {
        var labelWidth = this.getProp('labelWidth');
        if (labelWidth) {
          return {
            width: (0, _utils$1.addUnit)(labelWidth)
          };
        }
      },
      formValue: function formValue() {
        if (this.children && (this.$scopedSlots.input || this.$slots.input)) {
          return this.children.value;
        }
        return this.value;
      }
    },
    methods: {
      // @exposed-api
      focus: function focus() {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      },
      // @exposed-api
      blur: function blur() {
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
      },
      runValidator: function runValidator(value, rule) {
        return new Promise(function (resolve) {
          var returnVal = rule.validator(value, rule);
          if ((0, _utils$1.isPromise)(returnVal)) {
            return returnVal.then(resolve);
          }
          resolve(returnVal);
        });
      },
      isEmptyValue: function isEmptyValue(value) {
        if (Array.isArray(value)) {
          return !value.length;
        }
        if (value === 0) {
          return false;
        }
        return !value;
      },
      runSyncRule: function runSyncRule(value, rule) {
        if (rule.required && this.isEmptyValue(value)) {
          return false;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          return false;
        }
        return true;
      },
      getRuleMessage: function getRuleMessage(value, rule) {
        var message = rule.message;
        if ((0, _utils$1.isFunction)(message)) {
          return message(value, rule);
        }
        return message;
      },
      runRules: function runRules(rules) {
        var _this = this;
        return rules.reduce(function (promise, rule) {
          return promise.then(function () {
            if (_this.validateFailed) {
              return;
            }
            var value = _this.formValue;
            if (rule.formatter) {
              value = rule.formatter(value, rule);
            }
            if (!_this.runSyncRule(value, rule)) {
              _this.validateFailed = true;
              _this.validateMessage = _this.getRuleMessage(value, rule);
              return;
            }
            if (rule.validator) {
              return _this.runValidator(value, rule).then(function (result) {
                if (result === false) {
                  _this.validateFailed = true;
                  _this.validateMessage = _this.getRuleMessage(value, rule);
                }
              });
            }
          });
        }, Promise.resolve());
      },
      validate: function validate(rules) {
        var _this2 = this;
        if (rules === void 0) {
          rules = this.rules;
        }
        return new Promise(function (resolve) {
          if (!rules) {
            resolve();
          }
          _this2.resetValidation();
          _this2.runRules(rules).then(function () {
            if (_this2.validateFailed) {
              resolve({
                name: _this2.name,
                message: _this2.validateMessage
              });
            } else {
              resolve();
            }
          });
        });
      },
      validateWithTrigger: function validateWithTrigger(trigger) {
        if (this.vanForm && this.rules) {
          var defaultTrigger = this.vanForm.validateTrigger === trigger;
          var rules = this.rules.filter(function (rule) {
            if (rule.trigger) {
              return rule.trigger === trigger;
            }
            return defaultTrigger;
          });
          if (rules.length) {
            this.validate(rules);
          }
        }
      },
      resetValidation: function resetValidation() {
        if (this.validateFailed) {
          this.validateFailed = false;
          this.validateMessage = '';
        }
      },
      updateValue: function updateValue(value, trigger) {
        if (trigger === void 0) {
          trigger = 'onChange';
        }
        value = (0, _utils$1.isDef)(value) ? String(value) : ''; // native maxlength have incorrect line-break counting
        // see: https://github.com/vant-ui/vant/issues/5033

        var maxlength = this.maxlength;
        if ((0, _utils$1.isDef)(maxlength) && value.length > maxlength) {
          if (this.value && this.value.length === +maxlength) {
            value = this.value;
          } else {
            value = value.slice(0, maxlength);
          }
        }
        if (this.type === 'number' || this.type === 'digit') {
          var isNumber = this.type === 'number';
          value = (0, _number.formatNumber)(value, isNumber, isNumber);
        }
        if (this.formatter && trigger === this.formatTrigger) {
          value = this.formatter(value);
        }
        var input = this.$refs.input;
        if (input && value !== input.value) {
          input.value = value;
        }
        if (value !== this.value) {
          this.$emit('input', value);
        }
      },
      onInput: function onInput(event) {
        // not update v-model when composing
        if (event.target.composing) {
          return;
        }
        this.updateValue(event.target.value);
      },
      onFocus: function onFocus(event) {
        this.focused = true;
        this.$emit('focus', event); // https://github.com/vant-ui/vant/issues/9715

        this.$nextTick(this.adjustSize); // readonly not work in legacy mobile safari

        /* istanbul ignore if */

        if (this.getProp('readonly')) {
          this.blur();
        }
      },
      onBlur: function onBlur(event) {
        if (this.getProp('readonly')) {
          return;
        }
        this.focused = false;
        this.updateValue(this.value, 'onBlur');
        this.$emit('blur', event);
        this.validateWithTrigger('onBlur');
        this.$nextTick(this.adjustSize);
        (0, _resetScroll.resetScroll)();
      },
      onClick: function onClick(event) {
        this.$emit('click', event);
      },
      onClickInput: function onClickInput(event) {
        this.$emit('click-input', event);
      },
      onClickLeftIcon: function onClickLeftIcon(event) {
        this.$emit('click-left-icon', event);
      },
      onClickRightIcon: function onClickRightIcon(event) {
        this.$emit('click-right-icon', event);
      },
      onClear: function onClear(event) {
        (0, _event.preventDefault)(event);
        this.$emit('input', '');
        this.$emit('clear', event);
      },
      onKeypress: function onKeypress(event) {
        var ENTER_CODE = 13;
        if (event.keyCode === ENTER_CODE) {
          var submitOnEnter = this.getProp('submitOnEnter');
          if (!submitOnEnter && this.type !== 'textarea') {
            (0, _event.preventDefault)(event);
          } // trigger blur after click keyboard search button

          if (this.type === 'search') {
            this.blur();
          }
        }
        this.$emit('keypress', event);
      },
      adjustSize: function adjustSize() {
        var input = this.$refs.input;
        if (!(this.type === 'textarea' && this.autosize) || !input) {
          return;
        }
        var scrollTop = (0, _scroll.getRootScrollTop)();
        input.style.height = 'auto';
        var height = input.scrollHeight;
        if ((0, _utils$1.isObject)(this.autosize)) {
          var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;
          if (maxHeight) {
            height = Math.min(height, maxHeight);
          }
          if (minHeight) {
            height = Math.max(height, minHeight);
          }
        }
        if (height) {
          input.style.height = height + 'px'; // https://github.com/vant-ui/vant/issues/9178

          (0, _scroll.setRootScrollTop)(scrollTop);
        }
      },
      genInput: function genInput() {
        var h = this.$createElement;
        var type = this.type;
        var disabled = this.getProp('disabled');
        var readonly = this.getProp('readonly');
        var inputSlot = this.slots('input');
        var inputAlign = this.getProp('inputAlign');
        if (inputSlot) {
          return h("div", {
            "class": bem$1('control', [inputAlign, 'custom']),
            "on": {
              "click": this.onClickInput
            }
          }, [inputSlot]);
        }
        var inputProps = {
          ref: 'input',
          class: bem$1('control', inputAlign),
          domProps: {
            value: this.value
          },
          attrs: (0, _extends2$1.default)({}, this.$attrs, {
            name: this.name,
            disabled: disabled,
            readonly: readonly,
            placeholder: this.placeholder
          }),
          on: this.listeners,
          // add model directive to skip IME composition
          directives: [{
            name: 'model',
            value: this.value
          }]
        };
        if (type === 'textarea') {
          return h("textarea", (0, _babelHelperVueJsxMergeProps$1.default)([{}, inputProps]));
        }
        var inputType = type;
        var inputMode; // type="number" is weird in iOS, and can't prevent dot in Android
        // so use inputmode to set keyboard in modern browsers

        if (type === 'number') {
          inputType = 'text';
          inputMode = 'decimal';
        }
        if (type === 'digit') {
          inputType = 'tel';
          inputMode = 'numeric';
        }
        return h("input", (0, _babelHelperVueJsxMergeProps$1.default)([{
          "attrs": {
            "type": inputType,
            "inputmode": inputMode
          }
        }, inputProps]));
      },
      genLeftIcon: function genLeftIcon() {
        var h = this.$createElement;
        var showLeftIcon = this.slots('left-icon') || this.leftIcon;
        if (showLeftIcon) {
          return h("div", {
            "class": bem$1('left-icon'),
            "on": {
              "click": this.onClickLeftIcon
            }
          }, [this.slots('left-icon') || h(_icon$1.default, {
            "attrs": {
              "name": this.leftIcon,
              "classPrefix": this.iconPrefix
            }
          })]);
        }
      },
      genRightIcon: function genRightIcon() {
        var h = this.$createElement;
        var slots = this.slots;
        var showRightIcon = slots('right-icon') || this.rightIcon;
        if (showRightIcon) {
          return h("div", {
            "class": bem$1('right-icon'),
            "on": {
              "click": this.onClickRightIcon
            }
          }, [slots('right-icon') || h(_icon$1.default, {
            "attrs": {
              "name": this.rightIcon,
              "classPrefix": this.iconPrefix
            }
          })]);
        }
      },
      genWordLimit: function genWordLimit() {
        var h = this.$createElement;
        if (this.showWordLimit && this.maxlength) {
          var count = (this.value || '').length;
          return h("div", {
            "class": bem$1('word-limit')
          }, [h("span", {
            "class": bem$1('word-num')
          }, [count]), "/", this.maxlength]);
        }
      },
      genMessage: function genMessage() {
        var h = this.$createElement;
        if (this.vanForm && this.vanForm.showErrorMessage === false) {
          return;
        }
        var message = this.errorMessage || this.validateMessage;
        if (message) {
          var errorMessageAlign = this.getProp('errorMessageAlign');
          return h("div", {
            "class": bem$1('error-message', errorMessageAlign)
          }, [message]);
        }
      },
      getProp: function getProp(key) {
        if ((0, _utils$1.isDef)(this[key])) {
          return this[key];
        }
        if (this.vanForm && (0, _utils$1.isDef)(this.vanForm[key])) {
          return this.vanForm[key];
        }
      },
      genLabel: function genLabel() {
        var h = this.$createElement;
        var colon = this.getProp('colon') ? ':' : '';
        if (this.slots('label')) {
          return [this.slots('label'), colon];
        }
        if (this.label) {
          return h("span", [this.label + colon]);
        }
      }
    },
    render: function render() {
      var _bem;
      var h = arguments[0];
      var slots = this.slots;
      var disabled = this.getProp('disabled');
      var labelAlign = this.getProp('labelAlign');
      var scopedSlots = {
        icon: this.genLeftIcon
      };
      var Label = this.genLabel();
      if (Label) {
        scopedSlots.title = function () {
          return Label;
        };
      }
      var extra = this.slots('extra');
      if (extra) {
        scopedSlots.extra = function () {
          return extra;
        };
      }
      return h(_cell.default, {
        "attrs": {
          "icon": this.leftIcon,
          "size": this.size,
          "center": this.center,
          "border": this.border,
          "isLink": this.isLink,
          "required": this.required,
          "clickable": this.clickable,
          "titleStyle": this.labelStyle,
          "valueClass": bem$1('value'),
          "titleClass": [bem$1('label', labelAlign), this.labelClass],
          "arrowDirection": this.arrowDirection
        },
        "scopedSlots": scopedSlots,
        "class": bem$1((_bem = {
          error: this.showError,
          disabled: disabled
        }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
        "on": {
          "click": this.onClick
        }
      }, [h("div", {
        "class": bem$1('body')
      }, [this.genInput(), this.showClear && h(_icon$1.default, {
        "attrs": {
          "name": "clear"
        },
        "class": bem$1('clear'),
        "on": {
          "touchstart": this.onClear
        }
      }), this.genRightIcon(), slots('button') && h("div", {
        "class": bem$1('button')
      }, [slots('button')])]), this.genWordLimit(), this.genMessage()]);
    }
  });
  default_1$1 = _default$1;

  var popup$2 = {};

  var context = {};

  var hasRequiredContext;
  function requireContext() {
    if (hasRequiredContext) return context;
    hasRequiredContext = 1;
    context.__esModule = true;
    context.context = void 0;
    var context$1 = {
      zIndex: 2000,
      lockCount: 0,
      stack: [],
      find: function find(vm) {
        return this.stack.filter(function (item) {
          return item.vm === vm;
        })[0];
      },
      remove: function remove(vm) {
        var item = this.find(vm);
        if (!item) return;
        item.vm = null;
        item.overlay = null;
        var index = this.stack.indexOf(item);
        this.stack.splice(index, 1);
      }
    };
    context.context = context$1;
    return context;
  }

  var overlay$1 = {};

  var overlay = {};

  var hasRequiredOverlay$1;
  function requireOverlay$1() {
    if (hasRequiredOverlay$1) return overlay;
    hasRequiredOverlay$1 = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    overlay.__esModule = true;
    overlay.default = void 0;
    var _babelHelperVueJsxMergeProps = _interopRequireDefault(requireHelper());
    var _extends2 = _interopRequireDefault(require_extends());
    var _utils = requireUtils();
    var _functional = requireFunctional();
    var _event = requireEvent();

    // Utils
    var _createNamespace = (0, _utils.createNamespace)('overlay'),
      createComponent = _createNamespace[0],
      bem = _createNamespace[1];
    function preventTouchMove(event) {
      (0, _event.preventDefault)(event, true);
    }
    function Overlay(h, props, slots, ctx) {
      var style = (0, _extends2.default)({
        zIndex: props.zIndex
      }, props.customStyle);
      if ((0, _utils.isDef)(props.duration)) {
        style.animationDuration = props.duration + "s";
      }
      return h("transition", {
        "attrs": {
          "name": "van-fade"
        }
      }, [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
        "directives": [{
          name: "show",
          value: props.show
        }],
        "style": style,
        "class": [bem(), props.className],
        "on": {
          "touchmove": props.lockScroll ? preventTouchMove : _utils.noop
        }
      }, (0, _functional.inherit)(ctx, true)]), [slots.default == null ? void 0 : slots.default()])]);
    }
    Overlay.props = {
      show: Boolean,
      zIndex: [Number, String],
      duration: [Number, String],
      className: null,
      customStyle: Object,
      lockScroll: {
        type: Boolean,
        default: true
      }
    };
    var _default = createComponent(Overlay);
    overlay.default = _default;
    return overlay;
  }

  var node = {};

  var hasRequiredNode;
  function requireNode() {
    if (hasRequiredNode) return node;
    hasRequiredNode = 1;
    node.__esModule = true;
    node.removeNode = removeNode;
    function removeNode(el) {
      var parent = el.parentNode;
      if (parent) {
        parent.removeChild(el);
      }
    }
    return node;
  }

  var hasRequiredOverlay;
  function requireOverlay() {
    if (hasRequiredOverlay) return overlay$1;
    hasRequiredOverlay = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    overlay$1.__esModule = true;
    overlay$1.updateOverlay = updateOverlay;
    overlay$1.openOverlay = openOverlay;
    overlay$1.closeOverlay = closeOverlay;
    overlay$1.removeOverlay = removeOverlay;
    var _extends2 = _interopRequireDefault(require_extends());
    var _overlay = _interopRequireDefault(requireOverlay$1());
    var _context = requireContext();
    var _functional = requireFunctional();
    var _node = requireNode();
    var defaultConfig = {
      className: '',
      customStyle: {}
    };
    function mountOverlay(vm) {
      return (0, _functional.mount)(_overlay.default, {
        on: {
          // close popup when overlay clicked & closeOnClickOverlay is true
          click: function click() {
            vm.$emit('click-overlay');
            if (vm.closeOnClickOverlay) {
              if (vm.onClickOverlay) {
                vm.onClickOverlay();
              } else {
                vm.close();
              }
            }
          }
        }
      });
    }
    function updateOverlay(vm) {
      var item = _context.context.find(vm);
      if (item) {
        var el = vm.$el;
        var config = item.config,
          overlay = item.overlay;
        if (el && el.parentNode) {
          el.parentNode.insertBefore(overlay.$el, el);
        }
        (0, _extends2.default)(overlay, defaultConfig, config, {
          show: true
        });
      }
    }
    function openOverlay(vm, config) {
      var item = _context.context.find(vm);
      if (item) {
        item.config = config;
      } else {
        var overlay = mountOverlay(vm);
        _context.context.stack.push({
          vm: vm,
          config: config,
          overlay: overlay
        });
      }
      updateOverlay(vm);
    }
    function closeOverlay(vm) {
      var item = _context.context.find(vm);
      if (item) {
        item.overlay.show = false;
      }
    }
    function removeOverlay(vm) {
      var item = _context.context.find(vm);
      if (item) {
        (0, _node.removeNode)(item.overlay.$el);
        _context.context.remove(vm);
      }
    }
    return overlay$1;
  }

  var touch = {};

  var hasRequiredTouch;
  function requireTouch() {
    if (hasRequiredTouch) return touch;
    hasRequiredTouch = 1;
    touch.__esModule = true;
    touch.TouchMixin = void 0;
    var _event = requireEvent();
    function getDirection(x, y) {
      if (x > y) {
        return 'horizontal';
      }
      if (y > x) {
        return 'vertical';
      }
      return '';
    }
    var TouchMixin = {
      data: function data() {
        return {
          direction: ''
        };
      },
      methods: {
        touchStart: function touchStart(event) {
          this.resetTouchStatus();
          this.startX = event.touches[0].clientX;
          this.startY = event.touches[0].clientY;
        },
        touchMove: function touchMove(event) {
          var touch = event.touches[0]; // safari back will set clientX to negative number

          this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
          this.deltaY = touch.clientY - this.startY;
          this.offsetX = Math.abs(this.deltaX);
          this.offsetY = Math.abs(this.deltaY); // lock direction when distance is greater than a certain value

          var LOCK_DIRECTION_DISTANCE = 10;
          if (!this.direction || this.offsetX < LOCK_DIRECTION_DISTANCE && this.offsetY < LOCK_DIRECTION_DISTANCE) {
            this.direction = getDirection(this.offsetX, this.offsetY);
          }
        },
        resetTouchStatus: function resetTouchStatus() {
          this.direction = '';
          this.deltaX = 0;
          this.deltaY = 0;
          this.offsetX = 0;
          this.offsetY = 0;
        },
        // avoid Vue 2.6 event bubble issues by manually binding events
        // https://github.com/vant-ui/vant/issues/3015
        bindTouchEvent: function bindTouchEvent(el) {
          var onTouchStart = this.onTouchStart,
            onTouchMove = this.onTouchMove,
            onTouchEnd = this.onTouchEnd;
          (0, _event.on)(el, 'touchstart', onTouchStart);
          (0, _event.on)(el, 'touchmove', onTouchMove);
          if (onTouchEnd) {
            (0, _event.on)(el, 'touchend', onTouchEnd);
            (0, _event.on)(el, 'touchcancel', onTouchEnd);
          }
        }
      }
    };
    touch.TouchMixin = TouchMixin;
    return touch;
  }

  var portal = {};

  var hasRequiredPortal;
  function requirePortal() {
    if (hasRequiredPortal) return portal;
    hasRequiredPortal = 1;
    portal.__esModule = true;
    portal.PortalMixin = PortalMixin;
    function getElement(selector) {
      if (typeof selector === 'string') {
        return document.querySelector(selector);
      }
      return selector();
    }
    function PortalMixin(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        ref = _ref.ref,
        afterPortal = _ref.afterPortal;
      return {
        props: {
          getContainer: [String, Function]
        },
        watch: {
          getContainer: 'portal'
        },
        mounted: function mounted() {
          if (this.getContainer) {
            this.portal();
          }
        },
        methods: {
          portal: function portal() {
            var getContainer = this.getContainer;
            var el = ref ? this.$refs[ref] : this.$el;
            var container;
            if (getContainer) {
              container = getElement(getContainer);
            } else if (this.$parent) {
              container = this.$parent.$el;
            }
            if (container && container !== el.parentNode) {
              container.appendChild(el);
            }
            if (afterPortal) {
              afterPortal.call(this);
            }
          }
        }
      };
    }
    return portal;
  }

  var closeOnPopstate = {};

  var bindEvent = {};

  var hasRequiredBindEvent;
  function requireBindEvent() {
    if (hasRequiredBindEvent) return bindEvent;
    hasRequiredBindEvent = 1;
    bindEvent.__esModule = true;
    bindEvent.BindEventMixin = BindEventMixin;
    var _event = requireEvent();

    /**
     * Bind event when mounted or activated
     */
    var uid = 0;
    function BindEventMixin(handler) {
      var key = "binded_" + uid++;
      function bind() {
        if (!this[key]) {
          handler.call(this, _event.on, true);
          this[key] = true;
        }
      }
      function unbind() {
        if (this[key]) {
          handler.call(this, _event.off, false);
          this[key] = false;
        }
      }
      return {
        mounted: bind,
        activated: bind,
        deactivated: unbind,
        beforeDestroy: unbind
      };
    }
    return bindEvent;
  }

  var hasRequiredCloseOnPopstate;
  function requireCloseOnPopstate() {
    if (hasRequiredCloseOnPopstate) return closeOnPopstate;
    hasRequiredCloseOnPopstate = 1;
    closeOnPopstate.__esModule = true;
    closeOnPopstate.CloseOnPopstateMixin = void 0;
    var _event = requireEvent();
    var _bindEvent = requireBindEvent();
    var CloseOnPopstateMixin = {
      mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
        this.handlePopstate(isBind && this.closeOnPopstate);
      })],
      props: {
        closeOnPopstate: Boolean
      },
      data: function data() {
        return {
          bindStatus: false
        };
      },
      watch: {
        closeOnPopstate: function closeOnPopstate(val) {
          this.handlePopstate(val);
        }
      },
      methods: {
        onPopstate: function onPopstate() {
          this.close();
          this.shouldReopen = false;
        },
        handlePopstate: function handlePopstate(bind) {
          /* istanbul ignore if */
          if (this.$isServer) {
            return;
          }
          if (this.bindStatus !== bind) {
            this.bindStatus = bind;
            var action = bind ? _event.on : _event.off;
            action(window, 'popstate', this.onPopstate);
          }
        }
      }
    };
    closeOnPopstate.CloseOnPopstateMixin = CloseOnPopstateMixin;
    return closeOnPopstate;
  }

  var hasRequiredPopup$2;
  function requirePopup$2() {
    if (hasRequiredPopup$2) return popup$2;
    hasRequiredPopup$2 = 1;
    popup$2.__esModule = true;
    popup$2.PopupMixin = PopupMixin;
    popup$2.popupMixinProps = void 0;
    var _context = requireContext();
    var _overlay = requireOverlay();
    var _event = requireEvent();
    var _node = requireNode();
    var _scroll = requireScroll();
    var _touch = requireTouch();
    var _portal = requirePortal();
    var _closeOnPopstate = requireCloseOnPopstate();

    // Context
    // Utils
    // Mixins
    var popupMixinProps = {
      // Initial rendering animation
      transitionAppear: Boolean,
      // whether to show popup
      value: Boolean,
      // whether to show overlay
      overlay: Boolean,
      // overlay custom style
      overlayStyle: Object,
      // overlay custom class name
      overlayClass: String,
      // whether to close popup when overlay is clicked
      closeOnClickOverlay: Boolean,
      // z-index
      zIndex: [Number, String],
      // prevent body scroll
      lockScroll: {
        type: Boolean,
        default: true
      },
      // whether to lazy render
      lazyRender: {
        type: Boolean,
        default: true
      }
    };
    popup$2.popupMixinProps = popupMixinProps;
    function PopupMixin(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        mixins: [_touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin, (0, _portal.PortalMixin)({
          afterPortal: function afterPortal() {
            if (this.overlay) {
              (0, _overlay.updateOverlay)();
            }
          }
        })],
        provide: function provide() {
          return {
            vanPopup: this
          };
        },
        props: popupMixinProps,
        data: function data() {
          this.onReopenCallback = [];
          return {
            inited: this.value
          };
        },
        computed: {
          shouldRender: function shouldRender() {
            return this.inited || !this.lazyRender;
          }
        },
        watch: {
          value: function value(val) {
            var type = val ? 'open' : 'close';
            this.inited = this.inited || this.value;
            this[type]();
            if (!options.skipToggleEvent) {
              this.$emit(type);
            }
          },
          overlay: 'renderOverlay'
        },
        mounted: function mounted() {
          if (this.value) {
            this.open();
          }
        },
        /* istanbul ignore next */
        activated: function activated() {
          if (this.shouldReopen) {
            this.$emit('input', true);
            this.shouldReopen = false;
          }
        },
        beforeDestroy: function beforeDestroy() {
          (0, _overlay.removeOverlay)(this);
          if (this.opened) {
            this.removeLock();
          }
          if (this.getContainer) {
            (0, _node.removeNode)(this.$el);
          }
        },
        /* istanbul ignore next */
        deactivated: function deactivated() {
          if (this.value) {
            this.close();
            this.shouldReopen = true;
          }
        },
        methods: {
          open: function open() {
            /* istanbul ignore next */
            if (this.$isServer || this.opened) {
              return;
            } // cover default zIndex

            if (this.zIndex !== undefined) {
              _context.context.zIndex = this.zIndex;
            }
            this.opened = true;
            this.renderOverlay();
            this.addLock();
            this.onReopenCallback.forEach(function (callback) {
              callback();
            });
          },
          addLock: function addLock() {
            if (this.lockScroll) {
              (0, _event.on)(document, 'touchstart', this.touchStart);
              (0, _event.on)(document, 'touchmove', this.onTouchMove);
              if (!_context.context.lockCount) {
                document.body.classList.add('van-overflow-hidden');
              }
              _context.context.lockCount++;
            }
          },
          removeLock: function removeLock() {
            if (this.lockScroll && _context.context.lockCount) {
              _context.context.lockCount--;
              (0, _event.off)(document, 'touchstart', this.touchStart);
              (0, _event.off)(document, 'touchmove', this.onTouchMove);
              if (!_context.context.lockCount) {
                document.body.classList.remove('van-overflow-hidden');
              }
            }
          },
          close: function close() {
            if (!this.opened) {
              return;
            }
            (0, _overlay.closeOverlay)(this);
            this.opened = false;
            this.removeLock();
            this.$emit('input', false);
          },
          onTouchMove: function onTouchMove(event) {
            this.touchMove(event);
            var direction = this.deltaY > 0 ? '10' : '01';
            var el = (0, _scroll.getScroller)(event.target, this.$el);
            var scrollHeight = el.scrollHeight,
              offsetHeight = el.offsetHeight,
              scrollTop = el.scrollTop;
            var status = '11';
            /* istanbul ignore next */

            if (scrollTop === 0) {
              status = offsetHeight >= scrollHeight ? '00' : '01';
            } else if (scrollTop + offsetHeight >= scrollHeight) {
              status = '10';
            }
            /* istanbul ignore next */

            if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
              (0, _event.preventDefault)(event, true);
            }
          },
          renderOverlay: function renderOverlay() {
            var _this = this;
            if (this.$isServer || !this.value) {
              return;
            }
            this.$nextTick(function () {
              _this.updateZIndex(_this.overlay ? 1 : 0);
              if (_this.overlay) {
                (0, _overlay.openOverlay)(_this, {
                  zIndex: _context.context.zIndex++,
                  duration: _this.duration,
                  className: _this.overlayClass,
                  customStyle: _this.overlayStyle
                });
              } else {
                (0, _overlay.closeOverlay)(_this);
              }
            });
          },
          updateZIndex: function updateZIndex(value) {
            if (value === void 0) {
              value = 0;
            }
            this.$el.style.zIndex = ++_context.context.zIndex + value;
          },
          onReopen: function onReopen(callback) {
            this.onReopenCallback.push(callback);
          }
        }
      };
    }
    return popup$2;
  }

  var popup$1 = {};

  var hasRequiredPopup$1;
  function requirePopup$1() {
    if (hasRequiredPopup$1) return popup$1;
    hasRequiredPopup$1 = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    popup$1.__esModule = true;
    popup$1.default = void 0;
    var _utils = requireUtils();
    var _popup = requirePopup$2();
    var _icon = _interopRequireDefault(icon);
    var _createNamespace = (0, _utils.createNamespace)('popup'),
      createComponent = _createNamespace[0],
      bem = _createNamespace[1];
    var _default = createComponent({
      mixins: [(0, _popup.PopupMixin)()],
      props: {
        round: Boolean,
        duration: [Number, String],
        closeable: Boolean,
        transition: String,
        safeAreaInsetBottom: Boolean,
        closeIcon: {
          type: String,
          default: 'cross'
        },
        closeIconPosition: {
          type: String,
          default: 'top-right'
        },
        position: {
          type: String,
          default: 'center'
        },
        overlay: {
          type: Boolean,
          default: true
        },
        closeOnClickOverlay: {
          type: Boolean,
          default: true
        }
      },
      beforeCreate: function beforeCreate() {
        var _this = this;
        var createEmitter = function createEmitter(eventName) {
          return function (event) {
            return _this.$emit(eventName, event);
          };
        };
        this.onClick = createEmitter('click');
        this.onOpened = createEmitter('opened');
        this.onClosed = createEmitter('closed');
      },
      methods: {
        onClickCloseIcon: function onClickCloseIcon(event) {
          this.$emit('click-close-icon', event);
          this.close();
        }
      },
      render: function render() {
        var _bem;
        var h = arguments[0];
        if (!this.shouldRender) {
          return;
        }
        var round = this.round,
          position = this.position,
          duration = this.duration;
        var isCenter = position === 'center';
        var transitionName = this.transition || (isCenter ? 'van-fade' : "van-popup-slide-" + position);
        var style = {};
        if ((0, _utils.isDef)(duration)) {
          var key = isCenter ? 'animationDuration' : 'transitionDuration';
          style[key] = duration + "s";
        }
        return h("transition", {
          "attrs": {
            "appear": this.transitionAppear,
            "name": transitionName
          },
          "on": {
            "afterEnter": this.onOpened,
            "afterLeave": this.onClosed
          }
        }, [h("div", {
          "directives": [{
            name: "show",
            value: this.value
          }],
          "style": style,
          "class": bem((_bem = {
            round: round
          }, _bem[position] = position, _bem['safe-area-inset-bottom'] = this.safeAreaInsetBottom, _bem)),
          "on": {
            "click": this.onClick
          }
        }, [this.slots(), this.closeable && h(_icon.default, {
          "attrs": {
            "role": "button",
            "tabindex": "0",
            "name": this.closeIcon
          },
          "class": bem('close-icon', this.closeIconPosition),
          "on": {
            "click": this.onClickCloseIcon
          }
        })])]);
      }
    });
    popup$1.default = _default;
    return popup$1;
  }

  var loading$1 = {};

  var hasRequiredLoading;
  function requireLoading() {
    if (hasRequiredLoading) return loading$1;
    hasRequiredLoading = 1;
    var _interopRequireDefault = interopRequireDefault.exports;
    loading$1.__esModule = true;
    loading$1.default = void 0;
    var _babelHelperVueJsxMergeProps = _interopRequireDefault(requireHelper());
    var _utils = requireUtils();
    var _functional = requireFunctional();

    // Utils
    var _createNamespace = (0, _utils.createNamespace)('loading'),
      createComponent = _createNamespace[0],
      bem = _createNamespace[1];
    function LoadingIcon(h, props) {
      if (props.type === 'spinner') {
        var Spin = [];
        for (var i = 0; i < 12; i++) {
          Spin.push(h("i"));
        }
        return Spin;
      }
      return h("svg", {
        "class": bem('circular'),
        "attrs": {
          "viewBox": "25 25 50 50"
        }
      }, [h("circle", {
        "attrs": {
          "cx": "50",
          "cy": "50",
          "r": "20",
          "fill": "none"
        }
      })]);
    }
    function LoadingText(h, props, slots) {
      if (slots.default) {
        var _props$textColor;
        var style = {
          fontSize: (0, _utils.addUnit)(props.textSize),
          color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
        };
        return h("span", {
          "class": bem('text'),
          "style": style
        }, [slots.default()]);
      }
    }
    function Loading(h, props, slots, ctx) {
      var color = props.color,
        size = props.size,
        type = props.type;
      var style = {
        color: color
      };
      if (size) {
        var iconSize = (0, _utils.addUnit)(size);
        style.width = iconSize;
        style.height = iconSize;
      }
      return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
        "class": bem([type, {
          vertical: props.vertical
        }])
      }, (0, _functional.inherit)(ctx, true)]), [h("span", {
        "class": bem('spinner', type),
        "style": style
      }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
    }
    Loading.props = {
      color: String,
      size: [Number, String],
      vertical: Boolean,
      textSize: [Number, String],
      textColor: String,
      type: {
        type: String,
        default: 'circular'
      }
    };
    var _default = createComponent(Loading);
    loading$1.default = _default;
    return loading$1;
  }

  var _interopRequireDefault$1 = interopRequireDefault.exports;
  var default_1 = void 0;
  var _extends2 = _interopRequireDefault$1(require_extends());
  var _babelHelperVueJsxMergeProps = _interopRequireDefault$1(requireHelper());
  var _vue = _interopRequireDefault$1(require$$0$1);
  var _utils = requireUtils();
  var _functional = requireFunctional();
  var _popup = requirePopup$2();
  var _icon = _interopRequireDefault$1(icon);
  var _popup2 = _interopRequireDefault$1(requirePopup$1());
  var _loading = _interopRequireDefault$1(requireLoading());

  // Utils
  // Mixins
  // Components
  var _createNamespace = (0, _utils.createNamespace)('action-sheet'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];
  function ActionSheet(h, props, slots, ctx) {
    var title = props.title,
      cancelText = props.cancelText,
      closeable = props.closeable;
    function onCancel() {
      (0, _functional.emit)(ctx, 'input', false);
      (0, _functional.emit)(ctx, 'cancel');
    }
    function Header() {
      if (title) {
        return h("div", {
          "class": bem('header')
        }, [title, closeable && h(_icon.default, {
          "attrs": {
            "name": props.closeIcon
          },
          "class": bem('close'),
          "on": {
            "click": onCancel
          }
        })]);
      }
    }
    function Option(item, index) {
      var disabled = item.disabled,
        loading = item.loading,
        callback = item.callback;
      function onClickOption(event) {
        event.stopPropagation();
        if (disabled || loading) {
          return;
        }
        if (callback) {
          callback(item);
        }
        if (props.closeOnClickAction) {
          (0, _functional.emit)(ctx, 'input', false);
        }
        _vue.default.nextTick(function () {
          (0, _functional.emit)(ctx, 'select', item, index);
        });
      }
      function OptionContent() {
        if (loading) {
          return h(_loading.default, {
            "class": bem('loading-icon')
          });
        }
        return [h("span", {
          "class": bem('name')
        }, [item.name]), item.subname && h("div", {
          "class": bem('subname')
        }, [item.subname])];
      }
      return h("button", {
        "attrs": {
          "type": "button"
        },
        "class": [bem('item', {
          disabled: disabled,
          loading: loading
        }), item.className],
        "style": {
          color: item.color
        },
        "on": {
          "click": onClickOption
        }
      }, [OptionContent()]);
    }
    function CancelText() {
      if (cancelText) {
        return [h("div", {
          "class": bem('gap')
        }), h("button", {
          "attrs": {
            "type": "button"
          },
          "class": bem('cancel'),
          "on": {
            "click": onCancel
          }
        }, [cancelText])];
      }
    }
    function Description() {
      var description = (slots.description == null ? void 0 : slots.description()) || props.description;
      if (description) {
        return h("div", {
          "class": bem('description')
        }, [description]);
      }
    }
    return h(_popup2.default, (0, _babelHelperVueJsxMergeProps.default)([{
      "class": bem(),
      "attrs": {
        "position": "bottom",
        "round": props.round,
        "value": props.value,
        "overlay": props.overlay,
        "duration": props.duration,
        "lazyRender": props.lazyRender,
        "lockScroll": props.lockScroll,
        "getContainer": props.getContainer,
        "closeOnPopstate": props.closeOnPopstate,
        "closeOnClickOverlay": props.closeOnClickOverlay,
        "safeAreaInsetBottom": props.safeAreaInsetBottom
      }
    }, (0, _functional.inherit)(ctx, true)]), [Header(), Description(), h("div", {
      "class": bem('content')
    }, [props.actions && props.actions.map(Option), slots.default == null ? void 0 : slots.default()]), CancelText()]);
  }
  ActionSheet.props = (0, _extends2.default)({}, _popup.popupMixinProps, {
    title: String,
    actions: Array,
    duration: [Number, String],
    cancelText: String,
    description: String,
    getContainer: [String, Function],
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    round: {
      type: Boolean,
      default: true
    },
    closeable: {
      type: Boolean,
      default: true
    },
    closeIcon: {
      type: String,
      default: 'cross'
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  });
  var _default = createComponent(ActionSheet);
  default_1 = _default;

  function debounce$1(delay, callback) {
    let lastTime;
    return function () {
      clearTimeout(lastTime);
      const [that, args] = [this, arguments];
      lastTime = setTimeout(() => {
        callback.apply(that, args);
      }, delay);
    };
  }
  function observerDomResize(dom, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    const observer = new MutationObserver(callback);
    observer.observe(dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    });
    return observer;
  }
  function uuid(hasHyphen) {
    return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  var autoResize = {
    data() {
      return {
        dom: '',
        width: 0,
        height: 0,
        debounceInitWHFun: '',
        domObserver: ''
      };
    },
    methods: {
      async autoResizeMixinInit() {
        const {
          initWH,
          getDebounceInitWHFun,
          bindDomResizeCallback,
          afterAutoResizeMixinInit
        } = this;
        await initWH(false);
        getDebounceInitWHFun();
        bindDomResizeCallback();
        if (typeof afterAutoResizeMixinInit === 'function') afterAutoResizeMixinInit();
      },
      initWH(resize = true) {
        const {
          $nextTick,
          $refs,
          ref,
          onResize
        } = this;
        return new Promise(resolve => {
          $nextTick(_ => {
            const dom = this.dom = $refs[ref];
            this.width = dom ? dom.clientWidth : 0;
            this.height = dom ? dom.clientHeight : 0;
            if (!dom) {
              console.warn('DataV: Failed to get dom node, component rendering may be abnormal!');
            } else if (!this.width || !this.height) {
              console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!');
            }
            if (typeof onResize === 'function' && resize) onResize();
            resolve();
          });
        });
      },
      getDebounceInitWHFun() {
        const {
          initWH
        } = this;
        this.debounceInitWHFun = debounce$1(100, initWH);
      },
      bindDomResizeCallback() {
        const {
          dom,
          debounceInitWHFun
        } = this;
        this.domObserver = observerDomResize(dom, debounceInitWHFun);
        window.addEventListener('resize', debounceInitWHFun);
      },
      unbindDomResizeCallback() {
        let {
          domObserver,
          debounceInitWHFun
        } = this;
        if (!domObserver) return;
        domObserver.disconnect();
        domObserver.takeRecords();
        domObserver = null;
        window.removeEventListener('resize', debounceInitWHFun);
      }
    },
    mounted() {
      const {
        autoResizeMixinInit
      } = this;
      autoResizeMixinInit();
    },
    beforeDestroy() {
      const {
        unbindDomResizeCallback
      } = this;
      unbindDomResizeCallback();
    }
  };

  var util$2 = {};

  var toConsumableArray = {exports: {}};

  var arrayWithoutHoles = {exports: {}};

  var arrayLikeToArray = {exports: {}};

  var hasRequiredArrayLikeToArray;
  function requireArrayLikeToArray() {
    if (hasRequiredArrayLikeToArray) return arrayLikeToArray.exports;
    hasRequiredArrayLikeToArray = 1;
    (function (module) {
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(arrayLikeToArray);
    return arrayLikeToArray.exports;
  }

  var hasRequiredArrayWithoutHoles;
  function requireArrayWithoutHoles() {
    if (hasRequiredArrayWithoutHoles) return arrayWithoutHoles.exports;
    hasRequiredArrayWithoutHoles = 1;
    (function (module) {
      var arrayLikeToArray = requireArrayLikeToArray();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return arrayLikeToArray(arr);
      }
      module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(arrayWithoutHoles);
    return arrayWithoutHoles.exports;
  }

  var iterableToArray = {exports: {}};

  var hasRequiredIterableToArray;
  function requireIterableToArray() {
    if (hasRequiredIterableToArray) return iterableToArray.exports;
    hasRequiredIterableToArray = 1;
    (function (module) {
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(iterableToArray);
    return iterableToArray.exports;
  }

  var unsupportedIterableToArray = {exports: {}};

  var hasRequiredUnsupportedIterableToArray;
  function requireUnsupportedIterableToArray() {
    if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArray.exports;
    hasRequiredUnsupportedIterableToArray = 1;
    (function (module) {
      var arrayLikeToArray = requireArrayLikeToArray();
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(unsupportedIterableToArray);
    return unsupportedIterableToArray.exports;
  }

  var nonIterableSpread = {exports: {}};

  var hasRequiredNonIterableSpread;
  function requireNonIterableSpread() {
    if (hasRequiredNonIterableSpread) return nonIterableSpread.exports;
    hasRequiredNonIterableSpread = 1;
    (function (module) {
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(nonIterableSpread);
    return nonIterableSpread.exports;
  }

  var hasRequiredToConsumableArray;
  function requireToConsumableArray() {
    if (hasRequiredToConsumableArray) return toConsumableArray.exports;
    hasRequiredToConsumableArray = 1;
    (function (module) {
      var arrayWithoutHoles = requireArrayWithoutHoles();
      var iterableToArray = requireIterableToArray();
      var unsupportedIterableToArray = requireUnsupportedIterableToArray();
      var nonIterableSpread = requireNonIterableSpread();
      function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
      }
      module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(toConsumableArray);
    return toConsumableArray.exports;
  }

  var _typeof = {exports: {}};

  var hasRequired_typeof;
  function require_typeof() {
    if (hasRequired_typeof) return _typeof.exports;
    hasRequired_typeof = 1;
    (function (module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_typeof);
    return _typeof.exports;
  }

  var util$1 = {};

  var slicedToArray = {exports: {}};

  var arrayWithHoles = {exports: {}};

  var hasRequiredArrayWithHoles;
  function requireArrayWithHoles() {
    if (hasRequiredArrayWithHoles) return arrayWithHoles.exports;
    hasRequiredArrayWithHoles = 1;
    (function (module) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(arrayWithHoles);
    return arrayWithHoles.exports;
  }

  var iterableToArrayLimit = {exports: {}};

  var hasRequiredIterableToArrayLimit;
  function requireIterableToArrayLimit() {
    if (hasRequiredIterableToArrayLimit) return iterableToArrayLimit.exports;
    hasRequiredIterableToArrayLimit = 1;
    (function (module) {
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(iterableToArrayLimit);
    return iterableToArrayLimit.exports;
  }

  var nonIterableRest = {exports: {}};

  var hasRequiredNonIterableRest;
  function requireNonIterableRest() {
    if (hasRequiredNonIterableRest) return nonIterableRest.exports;
    hasRequiredNonIterableRest = 1;
    (function (module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(nonIterableRest);
    return nonIterableRest.exports;
  }

  var hasRequiredSlicedToArray;
  function requireSlicedToArray() {
    if (hasRequiredSlicedToArray) return slicedToArray.exports;
    hasRequiredSlicedToArray = 1;
    (function (module) {
      var arrayWithHoles = requireArrayWithHoles();
      var iterableToArrayLimit = requireIterableToArrayLimit();
      var unsupportedIterableToArray = requireUnsupportedIterableToArray();
      var nonIterableRest = requireNonIterableRest();
      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(slicedToArray);
    return slicedToArray.exports;
  }

  (function (exports) {

    var _interopRequireDefault = interopRequireDefault.exports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.deepClone = deepClone;
    exports.eliminateBlur = eliminateBlur;
    exports.checkPointIsInCircle = checkPointIsInCircle;
    exports.getTwoPointDistance = getTwoPointDistance;
    exports.checkPointIsInPolygon = checkPointIsInPolygon;
    exports.checkPointIsInSector = checkPointIsInSector;
    exports.checkPointIsNearPolyline = checkPointIsNearPolyline;
    exports.checkPointIsInRect = checkPointIsInRect;
    exports.getRotatePointPos = getRotatePointPos;
    exports.getScalePointPos = getScalePointPos;
    exports.getTranslatePointPos = getTranslatePointPos;
    exports.getDistanceBetweenPointAndLine = getDistanceBetweenPointAndLine;
    exports.getCircleRadianPoint = getCircleRadianPoint;
    exports.getRegularPolygonPoints = getRegularPolygonPoints;
    exports["default"] = void 0;
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _slicedToArray2 = _interopRequireDefault(requireSlicedToArray());
    var _typeof2 = _interopRequireDefault(require_typeof());
    var abs = Math.abs,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      max = Math.max,
      min = Math.min,
      PI = Math.PI;
    /**
     * @description Clone an object or array
     * @param {Object|Array} object Cloned object
     * @param {Boolean} recursion   Whether to use recursive cloning
     * @return {Object|Array} Clone object
     */

    function deepClone(object) {
      var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!object) return object;
      var parse = JSON.parse,
        stringify = JSON.stringify;
      if (!recursion) return parse(stringify(object));
      var clonedObj = object instanceof Array ? [] : {};
      if (object && (0, _typeof2["default"])(object) === 'object') {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            if (object[key] && (0, _typeof2["default"])(object[key]) === 'object') {
              clonedObj[key] = deepClone(object[key], true);
            } else {
              clonedObj[key] = object[key];
            }
          }
        }
      }
      return clonedObj;
    }
    /**
     * @description Eliminate line blur due to 1px line width
     * @param {Array} points Line points
     * @return {Array} Line points after processed
     */

    function eliminateBlur(points) {
      return points.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];
        return [parseInt(x) + 0.5, parseInt(y) + 0.5];
      });
    }
    /**
     * @description Check if the point is inside the circle
     * @param {Array} point Postion of point
     * @param {Number} rx   Circle x coordinate
     * @param {Number} ry   Circle y coordinate
     * @param {Number} r    Circle radius
     * @return {Boolean} Result of check
     */

    function checkPointIsInCircle(point, rx, ry, r) {
      return getTwoPointDistance(point, [rx, ry]) <= r;
    }
    /**
     * @description Get the distance between two points
     * @param {Array} point1 point1
     * @param {Array} point2 point2
     * @return {Number} Distance between two points
     */

    function getTwoPointDistance(_ref3, _ref4) {
      var _ref5 = (0, _slicedToArray2["default"])(_ref3, 2),
        xa = _ref5[0],
        ya = _ref5[1];
      var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2),
        xb = _ref6[0],
        yb = _ref6[1];
      var minusX = abs(xa - xb);
      var minusY = abs(ya - yb);
      return sqrt(minusX * minusX + minusY * minusY);
    }
    /**
     * @description Check if the point is inside the polygon
     * @param {Array} point  Postion of point
     * @param {Array} points The points that makes up a polyline
     * @return {Boolean} Result of check
     */

    function checkPointIsInPolygon(point, polygon) {
      var counter = 0;
      var _point = (0, _slicedToArray2["default"])(point, 2),
        x = _point[0],
        y = _point[1];
      var pointNum = polygon.length;
      for (var i = 1, p1 = polygon[0]; i <= pointNum; i++) {
        var p2 = polygon[i % pointNum];
        if (x > min(p1[0], p2[0]) && x <= max(p1[0], p2[0])) {
          if (y <= max(p1[1], p2[1])) {
            if (p1[0] !== p2[0]) {
              var xinters = (x - p1[0]) * (p2[1] - p1[1]) / (p2[0] - p1[0]) + p1[1];
              if (p1[1] === p2[1] || y <= xinters) {
                counter++;
              }
            }
          }
        }
        p1 = p2;
      }
      return counter % 2 === 1;
    }
    /**
     * @description Check if the point is inside the sector
     * @param {Array} point       Postion of point
     * @param {Number} rx         Sector x coordinate
     * @param {Number} ry         Sector y coordinate
     * @param {Number} r          Sector radius
     * @param {Number} startAngle Sector start angle
     * @param {Number} endAngle   Sector end angle
     * @param {Boolean} clockWise Whether the sector angle is clockwise
     * @return {Boolean} Result of check
     */

    function checkPointIsInSector(point, rx, ry, r, startAngle, endAngle, clockWise) {
      if (!point) return false;
      if (getTwoPointDistance(point, [rx, ry]) > r) return false;
      if (!clockWise) {
        var _deepClone = deepClone([endAngle, startAngle]);
        var _deepClone2 = (0, _slicedToArray2["default"])(_deepClone, 2);
        startAngle = _deepClone2[0];
        endAngle = _deepClone2[1];
      }
      var reverseBE = startAngle > endAngle;
      if (reverseBE) {
        var _ref7 = [endAngle, startAngle];
        startAngle = _ref7[0];
        endAngle = _ref7[1];
      }
      var minus = endAngle - startAngle;
      if (minus >= PI * 2) return true;
      var _point2 = (0, _slicedToArray2["default"])(point, 2),
        x = _point2[0],
        y = _point2[1];
      var _getCircleRadianPoint = getCircleRadianPoint(rx, ry, r, startAngle),
        _getCircleRadianPoint2 = (0, _slicedToArray2["default"])(_getCircleRadianPoint, 2),
        bx = _getCircleRadianPoint2[0],
        by = _getCircleRadianPoint2[1];
      var _getCircleRadianPoint3 = getCircleRadianPoint(rx, ry, r, endAngle),
        _getCircleRadianPoint4 = (0, _slicedToArray2["default"])(_getCircleRadianPoint3, 2),
        ex = _getCircleRadianPoint4[0],
        ey = _getCircleRadianPoint4[1];
      var vPoint = [x - rx, y - ry];
      var vBArm = [bx - rx, by - ry];
      var vEArm = [ex - rx, ey - ry];
      var reverse = minus > PI;
      if (reverse) {
        var _deepClone3 = deepClone([vEArm, vBArm]);
        var _deepClone4 = (0, _slicedToArray2["default"])(_deepClone3, 2);
        vBArm = _deepClone4[0];
        vEArm = _deepClone4[1];
      }
      var inSector = isClockWise(vBArm, vPoint) && !isClockWise(vEArm, vPoint);
      if (reverse) inSector = !inSector;
      if (reverseBE) inSector = !inSector;
      return inSector;
    }
    /**
     * @description Determine if the point is in the clockwise direction of the vector
     * @param {Array} vArm   Vector
     * @param {Array} vPoint Point
     * @return {Boolean} Result of check
     */

    function isClockWise(vArm, vPoint) {
      var _vArm = (0, _slicedToArray2["default"])(vArm, 2),
        ax = _vArm[0],
        ay = _vArm[1];
      var _vPoint = (0, _slicedToArray2["default"])(vPoint, 2),
        px = _vPoint[0],
        py = _vPoint[1];
      return -ay * px + ax * py > 0;
    }
    /**
     * @description Check if the point is inside the polyline
     * @param {Array} point      Postion of point
     * @param {Array} polyline   The points that makes up a polyline
     * @param {Number} lineWidth Polyline linewidth
     * @return {Boolean} Result of check
     */

    function checkPointIsNearPolyline(point, polyline, lineWidth) {
      var halfLineWidth = lineWidth / 2;
      var moveUpPolyline = polyline.map(function (_ref8) {
        var _ref9 = (0, _slicedToArray2["default"])(_ref8, 2),
          x = _ref9[0],
          y = _ref9[1];
        return [x, y - halfLineWidth];
      });
      var moveDownPolyline = polyline.map(function (_ref10) {
        var _ref11 = (0, _slicedToArray2["default"])(_ref10, 2),
          x = _ref11[0],
          y = _ref11[1];
        return [x, y + halfLineWidth];
      });
      var polygon = [].concat((0, _toConsumableArray2["default"])(moveUpPolyline), (0, _toConsumableArray2["default"])(moveDownPolyline.reverse()));
      return checkPointIsInPolygon(point, polygon);
    }
    /**
     * @description Check if the point is inside the rect
     * @param {Array} point   Postion of point
     * @param {Number} x      Rect start x coordinate
     * @param {Number} y      Rect start y coordinate
     * @param {Number} width  Rect width
     * @param {Number} height Rect height
     * @return {Boolean} Result of check
     */

    function checkPointIsInRect(_ref12, x, y, width, height) {
      var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
        px = _ref13[0],
        py = _ref13[1];
      if (px < x) return false;
      if (py < y) return false;
      if (px > x + width) return false;
      if (py > y + height) return false;
      return true;
    }
    /**
     * @description Get the coordinates of the rotated point
     * @param {Number} rotate Degree of rotation
     * @param {Array} point   Postion of point
     * @param {Array} origin  Rotation center
     * @param {Array} origin  Rotation center
     * @return {Number} Coordinates after rotation
     */

    function getRotatePointPos() {
      var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var point = arguments.length > 1 ? arguments[1] : undefined;
      var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
      if (!point) return false;
      if (rotate % 360 === 0) return point;
      var _point3 = (0, _slicedToArray2["default"])(point, 2),
        x = _point3[0],
        y = _point3[1];
      var _origin = (0, _slicedToArray2["default"])(origin, 2),
        ox = _origin[0],
        oy = _origin[1];
      rotate *= PI / 180;
      return [(x - ox) * cos(rotate) - (y - oy) * sin(rotate) + ox, (x - ox) * sin(rotate) + (y - oy) * cos(rotate) + oy];
    }
    /**
     * @description Get the coordinates of the scaled point
     * @param {Array} scale  Scale factor
     * @param {Array} point  Postion of point
     * @param {Array} origin Scale center
     * @return {Number} Coordinates after scale
     */

    function getScalePointPos() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 1];
      var point = arguments.length > 1 ? arguments[1] : undefined;
      var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
      if (!point) return false;
      if (scale === 1) return point;
      var _point4 = (0, _slicedToArray2["default"])(point, 2),
        x = _point4[0],
        y = _point4[1];
      var _origin2 = (0, _slicedToArray2["default"])(origin, 2),
        ox = _origin2[0],
        oy = _origin2[1];
      var _scale = (0, _slicedToArray2["default"])(scale, 2),
        xs = _scale[0],
        ys = _scale[1];
      var relativePosX = x - ox;
      var relativePosY = y - oy;
      return [relativePosX * xs + ox, relativePosY * ys + oy];
    }
    /**
     * @description Get the coordinates of the scaled point
     * @param {Array} translate Translation distance
     * @param {Array} point     Postion of point
     * @return {Number} Coordinates after translation
     */

    function getTranslatePointPos(translate, point) {
      if (!translate || !point) return false;
      var _point5 = (0, _slicedToArray2["default"])(point, 2),
        x = _point5[0],
        y = _point5[1];
      var _translate = (0, _slicedToArray2["default"])(translate, 2),
        tx = _translate[0],
        ty = _translate[1];
      return [x + tx, y + ty];
    }
    /**
     * @description Get the distance from the point to the line
     * @param {Array} point     Postion of point
     * @param {Array} lineBegin Line start position
     * @param {Array} lineEnd   Line end position
     * @return {Number} Distance between point and line
     */

    function getDistanceBetweenPointAndLine(point, lineBegin, lineEnd) {
      if (!point || !lineBegin || !lineEnd) return false;
      var _point6 = (0, _slicedToArray2["default"])(point, 2),
        x = _point6[0],
        y = _point6[1];
      var _lineBegin = (0, _slicedToArray2["default"])(lineBegin, 2),
        x1 = _lineBegin[0],
        y1 = _lineBegin[1];
      var _lineEnd = (0, _slicedToArray2["default"])(lineEnd, 2),
        x2 = _lineEnd[0],
        y2 = _lineEnd[1];
      var a = y2 - y1;
      var b = x1 - x2;
      var c = y1 * (x2 - x1) - x1 * (y2 - y1);
      var molecule = abs(a * x + b * y + c);
      var denominator = sqrt(a * a + b * b);
      return molecule / denominator;
    }
    /**
     * @description Get the coordinates of the specified radian on the circle
     * @param {Number} x      Circle x coordinate
     * @param {Number} y      Circle y coordinate
     * @param {Number} radius Circle radius
     * @param {Number} radian Specfied radian
     * @return {Array} Postion of point
     */

    function getCircleRadianPoint(x, y, radius, radian) {
      return [x + cos(radian) * radius, y + sin(radian) * radius];
    }
    /**
     * @description Get the points that make up a regular polygon
     * @param {Number} x     X coordinate of the polygon inscribed circle
     * @param {Number} y     Y coordinate of the polygon inscribed circle
     * @param {Number} r     Radius of the polygon inscribed circle
     * @param {Number} side  Side number
     * @param {Number} minus Radian offset
     * @return {Array} Points that make up a regular polygon
     */

    function getRegularPolygonPoints(rx, ry, r, side) {
      var minus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PI * -0.5;
      var radianGap = PI * 2 / side;
      var radians = new Array(side).fill('').map(function (t, i) {
        return i * radianGap + minus;
      });
      return radians.map(function (radian) {
        return getCircleRadianPoint(rx, ry, r, radian);
      });
    }
    var _default = {
      deepClone: deepClone,
      eliminateBlur: eliminateBlur,
      checkPointIsInCircle: checkPointIsInCircle,
      checkPointIsInPolygon: checkPointIsInPolygon,
      checkPointIsInSector: checkPointIsInSector,
      checkPointIsNearPolyline: checkPointIsNearPolyline,
      getTwoPointDistance: getTwoPointDistance,
      getRotatePointPos: getRotatePointPos,
      getScalePointPos: getScalePointPos,
      getTranslatePointPos: getTranslatePointPos,
      getCircleRadianPoint: getCircleRadianPoint,
      getRegularPolygonPoints: getRegularPolygonPoints,
      getDistanceBetweenPointAndLine: getDistanceBetweenPointAndLine
    };
    exports["default"] = _default;
  })(util$1);

  var _interopRequireDefault = interopRequireDefault.exports;
  Object.defineProperty(util$2, "__esModule", {
    value: true
  });
  util$2.filterNonNumber = filterNonNumber;
  var deepMerge_1 = util$2.deepMerge = deepMerge;
  util$2.mulAdd = mulAdd;
  util$2.mergeSameStackData = mergeSameStackData;
  util$2.getTwoPointDistance = getTwoPointDistance;
  util$2.getLinearGradientColor = getLinearGradientColor;
  util$2.getPolylineLength = getPolylineLength;
  util$2.getPointToLineDistance = getPointToLineDistance;
  util$2.initNeedSeries = initNeedSeries;
  util$2.radianToAngle = radianToAngle;
  var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
  var _typeof2 = _interopRequireDefault(require_typeof());
  var _util = util$1;
  function filterNonNumber(array) {
    return array.filter(function (n) {
      return typeof n === 'number';
    });
  }
  function deepMerge(target, merged) {
    for (var key in merged) {
      if (target[key] && (0, _typeof2["default"])(target[key]) === 'object') {
        deepMerge(target[key], merged[key]);
        continue;
      }
      if ((0, _typeof2["default"])(merged[key]) === 'object') {
        target[key] = (0, _util.deepClone)(merged[key], true);
        continue;
      }
      target[key] = merged[key];
    }
    return target;
  }
  function mulAdd(nums) {
    nums = filterNonNumber(nums);
    return nums.reduce(function (all, num) {
      return all + num;
    }, 0);
  }
  function mergeSameStackData(item, series) {
    var stack = item.stack;
    if (!stack) return (0, _toConsumableArray2["default"])(item.data);
    var stacks = series.filter(function (_ref) {
      var s = _ref.stack;
      return s === stack;
    });
    var index = stacks.findIndex(function (_ref2) {
      var d = _ref2.data;
      return d === item.data;
    });
    var datas = stacks.splice(0, index + 1).map(function (_ref3) {
      var data = _ref3.data;
      return data;
    });
    var dataLength = datas[0].length;
    return new Array(dataLength).fill(0).map(function (foo, i) {
      return mulAdd(datas.map(function (d) {
        return d[i];
      }));
    });
  }
  function getTwoPointDistance(pointOne, pointTwo) {
    var minusX = Math.abs(pointOne[0] - pointTwo[0]);
    var minusY = Math.abs(pointOne[1] - pointTwo[1]);
    return Math.sqrt(minusX * minusX + minusY * minusY);
  }
  function getLinearGradientColor(ctx, begin, end, color) {
    if (!ctx || !begin || !end || !color.length) return;
    var colors = color;
    typeof colors === 'string' && (colors = [color, color]);
    var linearGradientColor = ctx.createLinearGradient.apply(ctx, (0, _toConsumableArray2["default"])(begin).concat((0, _toConsumableArray2["default"])(end)));
    var colorGap = 1 / (colors.length - 1);
    colors.forEach(function (c, i) {
      return linearGradientColor.addColorStop(colorGap * i, c);
    });
    return linearGradientColor;
  }
  function getPolylineLength(points) {
    var lineSegments = new Array(points.length - 1).fill(0).map(function (foo, i) {
      return [points[i], points[i + 1]];
    });
    var lengths = lineSegments.map(function (item) {
      return getTwoPointDistance.apply(void 0, (0, _toConsumableArray2["default"])(item));
    });
    return mulAdd(lengths);
  }
  function getPointToLineDistance(point, linePointOne, linePointTwo) {
    var a = getTwoPointDistance(point, linePointOne);
    var b = getTwoPointDistance(point, linePointTwo);
    var c = getTwoPointDistance(linePointOne, linePointTwo);
    return 0.5 * Math.sqrt((a + b + c) * (a + b - c) * (a + c - b) * (b + c - a)) / c;
  }
  function initNeedSeries(series, config, type) {
    series = series.filter(function (_ref4) {
      var st = _ref4.type;
      return st === type;
    });
    series = series.map(function (item) {
      return deepMerge((0, _util.deepClone)(config, true), item);
    });
    return series.filter(function (_ref5) {
      var show = _ref5.show;
      return show;
    });
  }
  function radianToAngle(radian) {
    return radian / Math.PI * 180;
  }

  var lib = {};

  var keywords = {};

  var hasRequiredKeywords;
  function requireKeywords() {
    if (hasRequiredKeywords) return keywords;
    hasRequiredKeywords = 1;
    (function (exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _default = new Map([['transparent', 'rgba(0,0,0,0)'], ['black', '#000000'], ['silver', '#C0C0C0'], ['gray', '#808080'], ['white', '#FFFFFF'], ['maroon', '#800000'], ['red', '#FF0000'], ['purple', '#800080'], ['fuchsia', '#FF00FF'], ['green', '#008000'], ['lime', '#00FF00'], ['olive', '#808000'], ['yellow', '#FFFF00'], ['navy', '#000080'], ['blue', '#0000FF'], ['teal', '#008080'], ['aqua', '#00FFFF'], ['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['blanchedalmond', '#ffebcd'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgreen', '#006400'], ['darkgrey', '#a9a9a9'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['greenyellow', '#adff2f'], ['grey', '#808080'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred', '#cd5c5c'], ['indigo', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightgrey', '#d3d3d3'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['oldlace', '#fdf5e6'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['whitesmoke', '#f5f5f5'], ['yellowgreen', '#9acd32']]);
      exports["default"] = _default;
    })(keywords);
    return keywords;
  }

  (function (exports) {

    var _interopRequireDefault = interopRequireDefault.exports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRgbValue = getRgbValue;
    exports.getRgbaValue = getRgbaValue;
    exports.getOpacity = getOpacity;
    exports.toRgb = toRgb;
    exports.toHex = toHex;
    exports.getColorFromRgbValue = getColorFromRgbValue;
    exports.darken = darken;
    exports.lighten = lighten;
    exports.fade = fade;
    exports["default"] = void 0;
    var _toConsumableArray2 = _interopRequireDefault(requireToConsumableArray());
    var _keywords = _interopRequireDefault(requireKeywords());
    var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
    var rgbaReg = /^(rgba|RGBA)/;
    /**
     * @description Color validator
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {String|Boolean} Valid color Or false
     */

    function validator(color) {
      var isHex = hexReg.test(color);
      var isRgb = rgbReg.test(color);
      if (isHex || isRgb) return color;
      color = getColorByKeyword(color);
      if (!color) {
        console.error('Color: Invalid color!');
        return false;
      }
      return color;
    }
    /**
     * @description Get color by keyword
     * @param {String} keyword Color keyword like red, green and etc.
     * @return {String|Boolean} Hex or rgba color (Invalid keyword will return false)
     */

    function getColorByKeyword(keyword) {
      if (!keyword) {
        console.error('getColorByKeywords: Missing parameters!');
        return false;
      }
      if (!_keywords["default"].has(keyword)) return false;
      return _keywords["default"].get(keyword);
    }
    /**
     * @description Get the Rgb value of the color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {Array<Number>|Boolean} Rgb value of the color (Invalid input will return false)
     */

    function getRgbValue(color) {
      if (!color) {
        console.error('getRgbValue: Missing parameters!');
        return false;
      }
      color = validator(color);
      if (!color) return false;
      var isHex = hexReg.test(color);
      var isRgb = rgbReg.test(color);
      var lowerColor = color.toLowerCase();
      if (isHex) return getRgbValueFromHex(lowerColor);
      if (isRgb) return getRgbValueFromRgb(lowerColor);
    }
    /**
     * @description Get the rgb value of the hex color
     * @param {String} color Hex color
     * @return {Array<Number>} Rgb value of the color
     */

    function getRgbValueFromHex(color) {
      color = color.replace('#', '');
      if (color.length === 3) color = Array.from(color).map(function (hexNum) {
        return hexNum + hexNum;
      }).join('');
      color = color.split('');
      return new Array(3).fill(0).map(function (t, i) {
        return parseInt("0x".concat(color[i * 2]).concat(color[i * 2 + 1]));
      });
    }
    /**
     * @description Get the rgb value of the rgb/rgba color
     * @param {String} color Hex color
     * @return {Array} Rgb value of the color
     */

    function getRgbValueFromRgb(color) {
      return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
        return parseInt(n);
      });
    }
    /**
     * @description Get the Rgba value of the color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {Array<Number>|Boolean} Rgba value of the color (Invalid input will return false)
     */

    function getRgbaValue(color) {
      if (!color) {
        console.error('getRgbaValue: Missing parameters!');
        return false;
      }
      var colorValue = getRgbValue(color);
      if (!colorValue) return false;
      colorValue.push(getOpacity(color));
      return colorValue;
    }
    /**
     * @description Get the opacity of color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {Number|Boolean} Color opacity (Invalid input will return false)
     */

    function getOpacity(color) {
      if (!color) {
        console.error('getOpacity: Missing parameters!');
        return false;
      }
      color = validator(color);
      if (!color) return false;
      var isRgba = rgbaReg.test(color);
      if (!isRgba) return 1;
      color = color.toLowerCase();
      return Number(color.split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
    }
    /**
     * @description Convert color to Rgb|Rgba color
     * @param {String} color   Hex|Rgb|Rgba color or color keyword
     * @param {Number} opacity The opacity of color
     * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
     */

    function toRgb(color, opacity) {
      if (!color) {
        console.error('toRgb: Missing parameters!');
        return false;
      }
      var rgbValue = getRgbValue(color);
      if (!rgbValue) return false;
      var addOpacity = typeof opacity === 'number';
      if (addOpacity) return 'rgba(' + rgbValue.join(',') + ",".concat(opacity, ")");
      return 'rgb(' + rgbValue.join(',') + ')';
    }
    /**
     * @description Convert color to Hex color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {String|Boolean} Hex color (Invalid input will return false)
     */

    function toHex(color) {
      if (!color) {
        console.error('toHex: Missing parameters!');
        return false;
      }
      if (hexReg.test(color)) return color;
      color = getRgbValue(color);
      if (!color) return false;
      return '#' + color.map(function (n) {
        return Number(n).toString(16);
      }).map(function (n) {
        return n === '0' ? '00' : n;
      }).join('');
    }
    /**
     * @description Get Color from Rgb|Rgba value
     * @param {Array<Number>} value Rgb|Rgba color value
     * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
     */

    function getColorFromRgbValue(value) {
      if (!value) {
        console.error('getColorFromRgbValue: Missing parameters!');
        return false;
      }
      var valueLength = value.length;
      if (valueLength !== 3 && valueLength !== 4) {
        console.error('getColorFromRgbValue: Value is illegal!');
        return false;
      }
      var color = valueLength === 3 ? 'rgb(' : 'rgba(';
      color += value.join(',') + ')';
      return color;
    }
    /**
     * @description Deepen color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {Number} Percent of Deepen (1-100)
     * @return {String|Boolean} Rgba color (Invalid input will return false)
     */

    function darken(color) {
      var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!color) {
        console.error('darken: Missing parameters!');
        return false;
      }
      var rgbaValue = getRgbaValue(color);
      if (!rgbaValue) return false;
      rgbaValue = rgbaValue.map(function (v, i) {
        return i === 3 ? v : v - Math.ceil(2.55 * percent);
      }).map(function (v) {
        return v < 0 ? 0 : v;
      });
      return getColorFromRgbValue(rgbaValue);
    }
    /**
     * @description Brighten color
     * @param {String} color Hex|Rgb|Rgba color or color keyword
     * @return {Number} Percent of brighten (1-100)
     * @return {String|Boolean} Rgba color (Invalid input will return false)
     */

    function lighten(color) {
      var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!color) {
        console.error('lighten: Missing parameters!');
        return false;
      }
      var rgbaValue = getRgbaValue(color);
      if (!rgbaValue) return false;
      rgbaValue = rgbaValue.map(function (v, i) {
        return i === 3 ? v : v + Math.ceil(2.55 * percent);
      }).map(function (v) {
        return v > 255 ? 255 : v;
      });
      return getColorFromRgbValue(rgbaValue);
    }
    /**
     * @description Adjust color opacity
     * @param {String} color   Hex|Rgb|Rgba color or color keyword
     * @param {Number} Percent of opacity
     * @return {String|Boolean} Rgba color (Invalid input will return false)
     */

    function fade(color) {
      var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      if (!color) {
        console.error('fade: Missing parameters!');
        return false;
      }
      var rgbValue = getRgbValue(color);
      if (!rgbValue) return false;
      var rgbaValue = [].concat((0, _toConsumableArray2["default"])(rgbValue), [percent / 100]);
      return getColorFromRgbValue(rgbaValue);
    }
    var _default = {
      fade: fade,
      toHex: toHex,
      toRgb: toRgb,
      darken: darken,
      lighten: lighten,
      getOpacity: getOpacity,
      getRgbValue: getRgbValue,
      getRgbaValue: getRgbaValue,
      getColorFromRgbValue: getColorFromRgbValue
    };
    exports["default"] = _default;
  })(lib);

  //

  var script$9 = {
    name: 'DvBorderBox11',
    mixins: [autoResize],
    props: {
      color: {
        type: Array,
        default: () => ([])
      },
      titleWidth: {
        type: Number,
        default: 250
      },
      title: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data () {
      const id = uuid();
      return {
        ref: 'border-box-11',
        filterId: `border-box-11-filterId-${id}`,

        defaultColor: ['#8aaafb', '#1f33a2'],

        mergedColor: []
      }
    },
    watch: {
      color () {
        const { mergeColor } = this;

        mergeColor();
      }
    },
    methods: {
      mergeColor () {
        const { color, defaultColor } = this;

        this.mergedColor = deepMerge_1(util$1.deepClone(defaultColor, true), color || []);
      },
      fade: lib.fade
    },
    mounted () {
      const { mergeColor } = this;

      mergeColor();
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true;
      // functional template
      if (isFunctionalTemplate) {
        options.functional = true;
      }
    }
    // scopedId
    if (scopeId) {
      options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
      // server build
      hook = function (context) {
        // 2.3 injection
        context = context ||
        // cached call
        this.$vnode && this.$vnode.ssrContext ||
        // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        }
        // inject component styles
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        // register component module identifier for async chunk inference
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        const originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return script;
  }

  /* script */
  const __vue_script__$9 = script$9;
  /* template */
  var __vue_render__$9 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: _vm.ref, staticClass: "dv-border-box-11" }, [
      _c(
        "svg",
        {
          staticClass: "dv-border-svg-container",
          attrs: { width: _vm.width, height: _vm.height },
        },
        [
          _c("defs", [
            _c(
              "filter",
              {
                attrs: {
                  id: _vm.filterId,
                  height: "150%",
                  width: "150%",
                  x: "-25%",
                  y: "-25%",
                },
              },
              [
                _c("feMorphology", {
                  attrs: {
                    operator: "dilate",
                    radius: "2",
                    in: "SourceAlpha",
                    result: "thicken",
                  },
                }),
                _vm._v(" "),
                _c("feGaussianBlur", {
                  attrs: { in: "thicken", stdDeviation: "3", result: "blurred" },
                }),
                _vm._v(" "),
                _c("feFlood", {
                  attrs: {
                    "flood-color": _vm.mergedColor[1],
                    result: "glowColor",
                  },
                }),
                _vm._v(" "),
                _c("feComposite", {
                  attrs: {
                    in: "glowColor",
                    in2: "blurred",
                    operator: "in",
                    result: "softGlowColored",
                  },
                }),
                _vm._v(" "),
                _c(
                  "feMerge",
                  [
                    _c("feMergeNode", { attrs: { in: "softGlowColored" } }),
                    _vm._v(" "),
                    _c("feMergeNode", { attrs: { in: "SourceGraphic" } }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: _vm.backgroundColor,
              points:
                "\n      20, 32 " +
                (_vm.width * 0.5 - _vm.titleWidth / 2) +
                ", 32 " +
                (_vm.width * 0.5 - _vm.titleWidth / 2 + 20) +
                ", 53\n      " +
                (_vm.width * 0.5 + _vm.titleWidth / 2 - 20) +
                ", 53 " +
                (_vm.width * 0.5 + _vm.titleWidth / 2) +
                ", 32\n      " +
                (_vm.width - 20) +
                ", 32 " +
                (_vm.width - 8) +
                ", 48 " +
                (_vm.width - 8) +
                ", " +
                (_vm.height - 25) +
                " " +
                (_vm.width - 20) +
                ", " +
                (_vm.height - 8) +
                "\n      20, " +
                (_vm.height - 8) +
                " 8, " +
                (_vm.height - 25) +
                " 8, 50\n    ",
            },
          }),
          _vm._v(" "),
          _c("polyline", {
            attrs: {
              stroke: _vm.mergedColor[0],
              filter: "url(#" + _vm.filterId + ")",
              points:
                "\n        " +
                (_vm.width - _vm.titleWidth) / 2 +
                ", 30\n        20, 30 7, 50 7, " +
                (50 + (_vm.height - 167) / 2) +
                "\n        13, " +
                (55 + (_vm.height - 167) / 2) +
                " 13, " +
                (135 + (_vm.height - 167) / 2) +
                "\n        7, " +
                (140 + (_vm.height - 167) / 2) +
                " 7, " +
                (_vm.height - 27) +
                "\n        20, " +
                (_vm.height - 7) +
                " " +
                (_vm.width - 20) +
                ", " +
                (_vm.height - 7) +
                " " +
                (_vm.width - 7) +
                ", " +
                (_vm.height - 27) +
                "\n        " +
                (_vm.width - 7) +
                ", " +
                (140 + (_vm.height - 167) / 2) +
                " " +
                (_vm.width - 13) +
                ", " +
                (135 + (_vm.height - 167) / 2) +
                "\n        " +
                (_vm.width - 13) +
                ", " +
                (55 + (_vm.height - 167) / 2) +
                " " +
                (_vm.width - 7) +
                ", " +
                (50 + (_vm.height - 167) / 2) +
                "\n        " +
                (_vm.width - 7) +
                ", 50 " +
                (_vm.width - 20) +
                ", 30 " +
                (_vm.width + _vm.titleWidth) / 2 +
                ", 30\n        " +
                ((_vm.width + _vm.titleWidth) / 2 - 20) +
                ", 7 " +
                ((_vm.width - _vm.titleWidth) / 2 + 20) +
                ", 7\n        " +
                (_vm.width - _vm.titleWidth) / 2 +
                ", 30 " +
                ((_vm.width - _vm.titleWidth) / 2 + 20) +
                ", 52\n        " +
                ((_vm.width + _vm.titleWidth) / 2 - 20) +
                ", 52 " +
                (_vm.width + _vm.titleWidth) / 2 +
                ", 30\n      ",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              stroke: _vm.mergedColor[0],
              fill: "transparent",
              points:
                "\n        " +
                ((_vm.width + _vm.titleWidth) / 2 - 5) +
                ", 30 " +
                ((_vm.width + _vm.titleWidth) / 2 - 21) +
                ", 11\n        " +
                ((_vm.width + _vm.titleWidth) / 2 - 27) +
                ", 11 " +
                ((_vm.width + _vm.titleWidth) / 2 - 8) +
                ", 34\n      ",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              stroke: _vm.mergedColor[0],
              fill: "transparent",
              points:
                "\n        " +
                ((_vm.width - _vm.titleWidth) / 2 + 5) +
                ", 30 " +
                ((_vm.width - _vm.titleWidth) / 2 + 22) +
                ", 49\n        " +
                ((_vm.width - _vm.titleWidth) / 2 + 28) +
                ", 49 " +
                ((_vm.width - _vm.titleWidth) / 2 + 8) +
                ", 26\n      ",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              stroke: _vm.mergedColor[0],
              fill: _vm.fade(_vm.mergedColor[1] || _vm.defaultColor[1], 30),
              filter: "url(#" + _vm.filterId + ")",
              points:
                "\n        " +
                ((_vm.width + _vm.titleWidth) / 2 - 11) +
                ", 37 " +
                ((_vm.width + _vm.titleWidth) / 2 - 32) +
                ", 11\n        " +
                ((_vm.width - _vm.titleWidth) / 2 + 23) +
                ", 11 " +
                ((_vm.width - _vm.titleWidth) / 2 + 11) +
                ", 23\n        " +
                ((_vm.width - _vm.titleWidth) / 2 + 33) +
                ", 49 " +
                ((_vm.width + _vm.titleWidth) / 2 - 22) +
                ", 49\n      ",
            },
          }),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "1",
                points:
                  "\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 10) +
                  ", 37 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 31) +
                  ", 37\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 25) +
                  ", 46 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 4) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "1;0.7;1",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "0.7",
                points:
                  "\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 40) +
                  ", 37 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 61) +
                  ", 37\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 55) +
                  ", 46 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 34) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "0.7;0.4;0.7",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "0.5",
                points:
                  "\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 70) +
                  ", 37 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 91) +
                  ", 37\n        " +
                  ((_vm.width - _vm.titleWidth) / 2 - 85) +
                  ", 46 " +
                  ((_vm.width - _vm.titleWidth) / 2 - 64) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "0.5;0.2;0.5",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "1",
                points:
                  "\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 30) +
                  ", 37 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 9) +
                  ", 37\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 3) +
                  ", 46 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 24) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "1;0.7;1",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "0.7",
                points:
                  "\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 60) +
                  ", 37 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 39) +
                  ", 37\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 33) +
                  ", 46 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 54) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "0.7;0.4;0.7",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "polygon",
            {
              attrs: {
                filter: "url(#" + _vm.filterId + ")",
                fill: _vm.mergedColor[0],
                opacity: "0.5",
                points:
                  "\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 90) +
                  ", 37 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 69) +
                  ", 37\n        " +
                  ((_vm.width + _vm.titleWidth) / 2 + 63) +
                  ", 46 " +
                  ((_vm.width + _vm.titleWidth) / 2 + 84) +
                  ", 46\n      ",
              },
            },
            [
              _c("animate", {
                attrs: {
                  attributeName: "opacity",
                  values: "0.5;0.2;0.5",
                  dur: "2s",
                  begin: "0s",
                  repeatCount: "indefinite",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "text",
            {
              staticClass: "dv-border-box-11-title",
              attrs: {
                x: "" + _vm.width / 2,
                y: "32",
                fill: "#fff",
                "font-size": "18",
                "text-anchor": "middle",
                "dominant-baseline": "middle",
              },
            },
            [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
          ),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: _vm.mergedColor[0],
              filter: "url(#" + _vm.filterId + ")",
              points:
                "\n        7, " +
                (53 + (_vm.height - 167) / 2) +
                " 11, " +
                (57 + (_vm.height - 167) / 2) +
                "\n        11, " +
                (133 + (_vm.height - 167) / 2) +
                " 7, " +
                (137 + (_vm.height - 167) / 2) +
                "\n      ",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: _vm.mergedColor[0],
              filter: "url(#" + _vm.filterId + ")",
              points:
                "\n        " +
                (_vm.width - 7) +
                ", " +
                (53 + (_vm.height - 167) / 2) +
                " " +
                (_vm.width - 11) +
                ", " +
                (57 + (_vm.height - 167) / 2) +
                "\n        " +
                (_vm.width - 11) +
                ", " +
                (133 + (_vm.height - 167) / 2) +
                " " +
                (_vm.width - 7) +
                ", " +
                (137 + (_vm.height - 167) / 2) +
                "\n      ",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border-box-content" }, [_vm._t("default")], 2),
    ])
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      false,
      undefined,
      undefined,
      undefined
    );

  function borderBox11 (Vue) {
    Vue.component(__vue_component__$9.name, __vue_component__$9);
  }

  //

  var script$8 = {
    name: 'DvBorderBox12',
    mixins: [autoResize],
    props: {
      color: {
        type: Array,
        default: () => ([])
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data () {
      const id = uuid();
      return {
        ref: 'border-box-12',
        filterId: `borderr-box-12-filterId-${id}`,

        defaultColor: ['#2e6099', '#7ce7fd'],

        mergedColor: []
      }
    },
    watch: {
      color () {
        const { mergeColor } = this;

        mergeColor();
      }
    },
    methods: {
      mergeColor () {
        const { color, defaultColor } = this;

        this.mergedColor = deepMerge_1(util$1.deepClone(defaultColor, true), color || []);
      },
      fade: lib.fade
    },
    mounted () {
      const { mergeColor } = this;

      mergeColor();
    }
  };

  /* script */
  const __vue_script__$8 = script$8;
  /* template */
  var __vue_render__$8 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: _vm.ref, staticClass: "dv-border-box-12" }, [
      _c(
        "svg",
        {
          staticClass: "dv-border-svg-container",
          attrs: { width: _vm.width, height: _vm.height },
        },
        [
          _c("defs", [
            _c(
              "filter",
              {
                attrs: {
                  id: _vm.filterId,
                  height: "150%",
                  width: "150%",
                  x: "-25%",
                  y: "-25%",
                },
              },
              [
                _c("feMorphology", {
                  attrs: {
                    operator: "dilate",
                    radius: "1",
                    in: "SourceAlpha",
                    result: "thicken",
                  },
                }),
                _vm._v(" "),
                _c("feGaussianBlur", {
                  attrs: { in: "thicken", stdDeviation: "2", result: "blurred" },
                }),
                _vm._v(" "),
                _c(
                  "feFlood",
                  {
                    attrs: {
                      "flood-color": _vm.fade(
                        _vm.mergedColor[1] || _vm.defaultColor[1],
                        70
                      ),
                      result: "glowColor",
                    },
                  },
                  [
                    _c("animate", {
                      attrs: {
                        attributeName: "flood-color",
                        values:
                          "\n              " +
                          _vm.fade(
                            _vm.mergedColor[1] || _vm.defaultColor[1],
                            70
                          ) +
                          ";\n              " +
                          _vm.fade(
                            _vm.mergedColor[1] || _vm.defaultColor[1],
                            30
                          ) +
                          ";\n              " +
                          _vm.fade(
                            _vm.mergedColor[1] || _vm.defaultColor[1],
                            70
                          ) +
                          ";\n            ",
                        dur: "3s",
                        begin: "0s",
                        repeatCount: "indefinite",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("feComposite", {
                  attrs: {
                    in: "glowColor",
                    in2: "blurred",
                    operator: "in",
                    result: "softGlowColored",
                  },
                }),
                _vm._v(" "),
                _c(
                  "feMerge",
                  [
                    _c("feMergeNode", { attrs: { in: "softGlowColored" } }),
                    _vm._v(" "),
                    _c("feMergeNode", { attrs: { in: "SourceGraphic" } }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _vm.width && _vm.height
            ? _c("path", {
                attrs: {
                  fill: _vm.backgroundColor,
                  "stroke-width": "2",
                  stroke: _vm.mergedColor[0],
                  d:
                    "\n        M15 5 L " +
                    (_vm.width - 15) +
                    " 5 Q " +
                    (_vm.width - 5) +
                    " 5, " +
                    (_vm.width - 5) +
                    " 15\n        L " +
                    (_vm.width - 5) +
                    " " +
                    (_vm.height - 15) +
                    " Q " +
                    (_vm.width - 5) +
                    " " +
                    (_vm.height - 5) +
                    ", " +
                    (_vm.width - 15) +
                    " " +
                    (_vm.height - 5) +
                    "\n        L 15, " +
                    (_vm.height - 5) +
                    " Q 5 " +
                    (_vm.height - 5) +
                    " 5 " +
                    (_vm.height - 15) +
                    " L 5 15\n        Q 5 5 15 5\n      ",
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c("path", {
            attrs: {
              "stroke-width": "2",
              fill: "transparent",
              "stroke-linecap": "round",
              filter: "url(#" + _vm.filterId + ")",
              stroke: _vm.mergedColor[1],
              d: "M 20 5 L 15 5 Q 5 5 5 15 L 5 20",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              "stroke-width": "2",
              fill: "transparent",
              "stroke-linecap": "round",
              filter: "url(#" + _vm.filterId + ")",
              stroke: _vm.mergedColor[1],
              d:
                "M " +
                (_vm.width - 20) +
                " 5 L " +
                (_vm.width - 15) +
                " 5 Q " +
                (_vm.width - 5) +
                " 5 " +
                (_vm.width - 5) +
                " 15 L " +
                (_vm.width - 5) +
                " 20",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              "stroke-width": "2",
              fill: "transparent",
              "stroke-linecap": "round",
              filter: "url(#" + _vm.filterId + ")",
              stroke: _vm.mergedColor[1],
              d:
                "\n        M " +
                (_vm.width - 20) +
                " " +
                (_vm.height - 5) +
                " L " +
                (_vm.width - 15) +
                " " +
                (_vm.height - 5) +
                "\n        Q " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 5) +
                " " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 15) +
                "\n        L " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 20) +
                "\n      ",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              "stroke-width": "2",
              fill: "transparent",
              "stroke-linecap": "round",
              filter: "url(#" + _vm.filterId + ")",
              stroke: _vm.mergedColor[1],
              d:
                "\n        M 20 " +
                (_vm.height - 5) +
                " L 15 " +
                (_vm.height - 5) +
                "\n        Q 5 " +
                (_vm.height - 5) +
                " 5 " +
                (_vm.height - 15) +
                "\n        L 5 " +
                (_vm.height - 20) +
                "\n      ",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border-box-content" }, [_vm._t("default")], 2),
    ])
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  function borderBox12 (Vue) {
    Vue.component(__vue_component__$8.name, __vue_component__$8);
  }

  //

  var script$7 = {
    name: 'DvBorderBox13',
    mixins: [autoResize],
    props: {
      color: {
        type: Array,
        default: () => ([])
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data () {
      return {
        ref: 'border-box-13',

        defaultColor: ['#6586ec', '#2cf7fe'],

        mergedColor: []
      }
    },
    watch: {
      color () {
        const { mergeColor } = this;

        mergeColor();
      }
    },
    methods: {
      mergeColor () {
        const { color, defaultColor } = this;

        this.mergedColor = deepMerge_1(util$1.deepClone(defaultColor, true), color || []);
      }
    },
    mounted () {
      const { mergeColor } = this;

      mergeColor();
    }
  };

  /* script */
  const __vue_script__$7 = script$7;
  /* template */
  var __vue_render__$7 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: _vm.ref, staticClass: "dv-border-box-13" }, [
      _c(
        "svg",
        {
          staticClass: "dv-border-svg-container",
          attrs: { width: _vm.width, height: _vm.height },
        },
        [
          _c("path", {
            attrs: {
              fill: _vm.backgroundColor,
              stroke: _vm.mergedColor[0],
              d:
                "\n        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10\n        L " +
                (_vm.width - 20) +
                " 10 L " +
                (_vm.width - 5) +
                " 25\n        L " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 5) +
                " L 20 " +
                (_vm.height - 5) +
                "\n        L 5 " +
                (_vm.height - 20) +
                " L 5 20\n      ",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              fill: "transparent",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-dasharray": "10, 5",
              stroke: _vm.mergedColor[0],
              d: "M 16 9 L 61 9",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              fill: "transparent",
              stroke: _vm.mergedColor[1],
              d: "M 5 20 L 5 10 L 12 3  L 60 3 L 68 10",
            },
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              fill: "transparent",
              stroke: _vm.mergedColor[1],
              d:
                "M " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 30) +
                " L " +
                (_vm.width - 5) +
                " " +
                (_vm.height - 5) +
                " L " +
                (_vm.width - 30) +
                " " +
                (_vm.height - 5),
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border-box-content" }, [_vm._t("default")], 2),
    ])
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  function borderBox13 (Vue) {
    Vue.component(__vue_component__$7.name, __vue_component__$7);
  }

  //

  var script$6 = {
    name: 'DvBorderBox9',
    mixins: [autoResize],
    props: {
      color: {
        type: Array,
        default: () => ([])
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data () {
      const id = uuid();
      return {
        ref: 'border-box-9',

        gradientId: `border-box-9-gradient-${id}`,
        maskId: `border-box-9-mask-${id}`,

        defaultColor: ['#11eefd', '#0078d2'],

        mergedColor: []
      }
    },
    watch: {
      color () {
        const { mergeColor } = this;

        mergeColor();
      }
    },
    methods: {
      mergeColor () {
        const { color, defaultColor } = this;

        this.mergedColor = deepMerge_1(util$1.deepClone(defaultColor, true), color || []);
      }
    },
    mounted () {
      const { mergeColor } = this;

      mergeColor();
    }
  };

  /* script */
  const __vue_script__$6 = script$6;
  /* template */
  var __vue_render__$6 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: _vm.ref, staticClass: "dv-border-box-9" }, [
      _c(
        "svg",
        {
          staticClass: "dv-border-svg-container",
          attrs: { width: _vm.width, height: _vm.height },
        },
        [
          _c(
            "defs",
            [
              _c(
                "linearGradient",
                {
                  attrs: {
                    id: _vm.gradientId,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                  },
                },
                [
                  _c("animate", {
                    attrs: {
                      attributeName: "x1",
                      values: "0%;100%;0%",
                      dur: "10s",
                      begin: "0s",
                      repeatCount: "indefinite",
                    },
                  }),
                  _vm._v(" "),
                  _c("animate", {
                    attrs: {
                      attributeName: "x2",
                      values: "100%;0%;100%",
                      dur: "10s",
                      begin: "0s",
                      repeatCount: "indefinite",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "stop",
                    { attrs: { offset: "0%", "stop-color": _vm.mergedColor[0] } },
                    [
                      _c("animate", {
                        attrs: {
                          attributeName: "stop-color",
                          values:
                            _vm.mergedColor[0] +
                            ";" +
                            _vm.mergedColor[1] +
                            ";" +
                            _vm.mergedColor[0],
                          dur: "10s",
                          begin: "0s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "stop",
                    {
                      attrs: { offset: "100%", "stop-color": _vm.mergedColor[1] },
                    },
                    [
                      _c("animate", {
                        attrs: {
                          attributeName: "stop-color",
                          values:
                            _vm.mergedColor[1] +
                            ";" +
                            _vm.mergedColor[0] +
                            ";" +
                            _vm.mergedColor[1],
                          dur: "10s",
                          begin: "0s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("mask", { attrs: { id: _vm.maskId } }, [
                _c("polyline", {
                  attrs: {
                    stroke: "#fff",
                    "stroke-width": "3",
                    fill: "transparent",
                    points:
                      "8, " +
                      _vm.height * 0.4 +
                      " 8, 3, " +
                      (_vm.width * 0.4 + 7) +
                      ", 3",
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    fill: "#fff",
                    points:
                      "8, " +
                      _vm.height * 0.15 +
                      " 8, 3, " +
                      (_vm.width * 0.1 + 7) +
                      ", 3\n            " +
                      _vm.width * 0.1 +
                      ", 8 14, 8 14, " +
                      (_vm.height * 0.15 - 7) +
                      "\n          ",
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    stroke: "#fff",
                    "stroke-width": "3",
                    fill: "transparent",
                    points:
                      _vm.width * 0.5 +
                      ", 3 " +
                      (_vm.width - 3) +
                      ", 3, " +
                      (_vm.width - 3) +
                      ", " +
                      _vm.height * 0.25,
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    fill: "#fff",
                    points:
                      "\n            " +
                      _vm.width * 0.52 +
                      ", 3 " +
                      _vm.width * 0.58 +
                      ", 3\n            " +
                      (_vm.width * 0.58 - 7) +
                      ", 9 " +
                      (_vm.width * 0.52 + 7) +
                      ", 9\n          ",
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    fill: "#fff",
                    points:
                      "\n            " +
                      _vm.width * 0.9 +
                      ", 3 " +
                      (_vm.width - 3) +
                      ", 3 " +
                      (_vm.width - 3) +
                      ", " +
                      _vm.height * 0.1 +
                      "\n            " +
                      (_vm.width - 9) +
                      ", " +
                      (_vm.height * 0.1 - 7) +
                      " " +
                      (_vm.width - 9) +
                      ", 9 " +
                      (_vm.width * 0.9 + 7) +
                      ", 9\n          ",
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    stroke: "#fff",
                    "stroke-width": "3",
                    fill: "transparent",
                    points:
                      "8, " +
                      _vm.height * 0.5 +
                      " 8, " +
                      (_vm.height - 3) +
                      " " +
                      (_vm.width * 0.3 + 7) +
                      ", " +
                      (_vm.height - 3),
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    fill: "#fff",
                    points:
                      "\n            8, " +
                      _vm.height * 0.55 +
                      " 8, " +
                      _vm.height * 0.7 +
                      "\n            2, " +
                      (_vm.height * 0.7 - 7) +
                      " 2, " +
                      (_vm.height * 0.55 + 7) +
                      "\n          ",
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    stroke: "#fff",
                    "stroke-width": "3",
                    fill: "transparent",
                    points:
                      _vm.width * 0.35 +
                      ", " +
                      (_vm.height - 3) +
                      " " +
                      (_vm.width - 3) +
                      ", " +
                      (_vm.height - 3) +
                      " " +
                      (_vm.width - 3) +
                      ", " +
                      _vm.height * 0.35,
                  },
                }),
                _vm._v(" "),
                _c("polyline", {
                  attrs: {
                    fill: "#fff",
                    points:
                      "\n            " +
                      _vm.width * 0.92 +
                      ", " +
                      (_vm.height - 3) +
                      " " +
                      (_vm.width - 3) +
                      ", " +
                      (_vm.height - 3) +
                      " " +
                      (_vm.width - 3) +
                      ", " +
                      _vm.height * 0.8 +
                      "\n            " +
                      (_vm.width - 9) +
                      ", " +
                      (_vm.height * 0.8 + 7) +
                      " " +
                      (_vm.width - 9) +
                      ", " +
                      (_vm.height - 9) +
                      " " +
                      (_vm.width * 0.92 + 7) +
                      ", " +
                      (_vm.height - 9) +
                      "\n          ",
                  },
                }),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: _vm.backgroundColor,
              points:
                "\n      15, 9 " +
                (_vm.width * 0.1 + 1) +
                ", 9 " +
                (_vm.width * 0.1 + 4) +
                ", 6 " +
                (_vm.width * 0.52 + 2) +
                ", 6\n      " +
                (_vm.width * 0.52 + 6) +
                ", 10 " +
                (_vm.width * 0.58 - 7) +
                ", 10 " +
                (_vm.width * 0.58 - 2) +
                ", 6\n      " +
                (_vm.width * 0.9 + 2) +
                ", 6 " +
                (_vm.width * 0.9 + 6) +
                ", 10 " +
                (_vm.width - 10) +
                ", 10 " +
                (_vm.width - 10) +
                ", " +
                (_vm.height * 0.1 - 6) +
                "\n      " +
                (_vm.width - 6) +
                ", " +
                (_vm.height * 0.1 - 1) +
                " " +
                (_vm.width - 6) +
                ", " +
                (_vm.height * 0.8 + 1) +
                " " +
                (_vm.width - 10) +
                ", " +
                (_vm.height * 0.8 + 6) +
                "\n      " +
                (_vm.width - 10) +
                ", " +
                (_vm.height - 10) +
                " " +
                (_vm.width * 0.92 + 7) +
                ", " +
                (_vm.height - 10) +
                "  " +
                (_vm.width * 0.92 + 2) +
                ", " +
                (_vm.height - 6) +
                "\n      11, " +
                (_vm.height - 6) +
                " 11, " +
                (_vm.height * 0.15 - 2) +
                " 15, " +
                (_vm.height * 0.15 - 7) +
                "\n    ",
            },
          }),
          _vm._v(" "),
          _c("rect", {
            attrs: {
              x: "0",
              y: "0",
              width: _vm.width,
              height: _vm.height,
              fill: "url(#" + _vm.gradientId + ")",
              mask: "url(#" + _vm.maskId + ")",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border-box-content" }, [_vm._t("default")], 2),
    ])
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      undefined,
      undefined,
      undefined
    );

  function borderBox9 (Vue) {
    Vue.component(__vue_component__$6.name, __vue_component__$6);
  }

  var scrollbar = {exports: {}};

  var resizeEvent = {};

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = function () {
    if (typeof Map !== 'undefined') {
      return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index;
          return true;
        }
        return false;
      });
      return result;
    }
    return (/** @class */function () {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function () {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
          var index = getIndex(this.__entries__, key);
          var entry = this.__entries__[index];
          return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
          var index = getIndex(this.__entries__, key);
          if (~index) {
            this.__entries__[index][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
          var entries = this.__entries__;
          var index = getIndex(entries, key);
          if (~index) {
            entries.splice(index, 1);
          }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
          return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
          this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

  // Returns global object of a current environment.
  var global$1 = function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
      return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
      return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
  }();

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1);
    }
    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now());
      }, 1000 / 60);
    };
  }();

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2;
  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  function throttle$1(callback, delay) {
    var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20;
  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined';
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false;
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */
      this.mutationEventsAdded_ = false;
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */
      this.mutationsObserver_ = null;
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
        this.connect_();
      }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer);
      // Remove observer if it's present in registry.
      if (~index) {
        observers.splice(index, 1);
      }
      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
        this.disconnect_();
      }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_();
      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
        this.refresh();
      }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return;
      }
      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_);
      window.addEventListener('resize', this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b;
      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
      }
      return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
  }();

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
  };

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0);
  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width'];
      return size + toFloat(value);
    }, 0);
  }
  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles['padding-' + position];
      paddings[position] = toFloat(value);
    }
    return paddings;
  }
  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
      height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
      }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
  }();
  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(_a) {
    var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
      x: x,
      y: y,
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = /** @class */function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0;
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */
      this.broadcastHeight = 0;
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation;
  }();
  var ResizeObserverEntry = /** @class */function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, {
        target: target,
        contentRect: contentRect
      });
    }
    return ResizeObserverEntry;
  }();
  var ResizeObserverSPI = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = [];
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */
      this.observations_ = new MapShim();
      if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      // Do nothing if element is already being observed.
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      // Force the update of observations.
      this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
  }();

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver = /** @class */function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
      }
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver;
  }();
  // Expose public methods of ResizeObserver.
  ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
      var _a;
      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });
  var index$1 = function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver;
    }
    return ResizeObserver;
  }();

  var ResizeObserver_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: index$1
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(ResizeObserver_es);

  /* eslint-disable no-undefined,no-param-reassign,no-shadow */
  var throttle;
  var hasRequiredThrottle;
  function requireThrottle() {
    if (hasRequiredThrottle) return throttle;
    hasRequiredThrottle = 1;
    /**
     * Throttle execution of a function. Especially useful for rate limiting
     * execution of handlers on events like resize and scroll.
     *
     * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
     * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
     *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
     *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
     *                                    the internal counter is reset)
     * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
     *                                    to `callback` when the throttled-function is executed.
     * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
     *                                    schedule `callback` to execute after `delay` ms.
     *
     * @return {Function}  A new, throttled, function.
     */
    throttle = function (delay, noTrailing, callback, debounceMode) {
      // After wrapper has stopped being called, this timeout ensures that
      // `callback` is executed at the proper times in `throttle` and `end`
      // debounce modes.
      var timeoutID;

      // Keep track of the last time `callback` was executed.
      var lastExec = 0;

      // `noTrailing` defaults to falsy.
      if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
      }

      // The `wrapper` function encapsulates all of the throttling / debouncing
      // functionality and when executed will limit the rate at which `callback`
      // is executed.
      function wrapper() {
        var self = this;
        var elapsed = Number(new Date()) - lastExec;
        var args = arguments;

        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
          lastExec = Number(new Date());
          callback.apply(self, args);
        }

        // If `debounceMode` is true (at begin) this is used to clear the flag
        // to allow future `callback` executions.
        function clear() {
          timeoutID = undefined;
        }
        if (debounceMode && !timeoutID) {
          // Since `wrapper` is being called for the first time and
          // `debounceMode` is true (at begin), execute `callback`.
          exec();
        }

        // Clear any existing timeout.
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
        if (debounceMode === undefined && elapsed > delay) {
          // In throttle mode, if `delay` time has been exceeded, execute
          // `callback`.
          exec();
        } else if (noTrailing !== true) {
          // In trailing throttle mode, since `delay` time has not been
          // exceeded, schedule `callback` to execute `delay` ms after most
          // recent execution.
          //
          // If `debounceMode` is true (at begin), schedule `clear` to execute
          // after `delay` ms.
          //
          // If `debounceMode` is false (at end), schedule `callback` to
          // execute after `delay` ms.
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
      }

      // Return the wrapper function.
      return wrapper;
    };
    return throttle;
  }

  /* eslint-disable no-undefined */
  var debounce;
  var hasRequiredDebounce;
  function requireDebounce() {
    if (hasRequiredDebounce) return debounce;
    hasRequiredDebounce = 1;
    var throttle = requireThrottle();

    /**
     * Debounce execution of a function. Debouncing, unlike throttling,
     * guarantees that a function is only executed a single time, either at the
     * very beginning of a series of calls, or at the very end.
     *
     * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
     * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
     *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
     *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
     * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
     *                                  to `callback` when the debounced-function is executed.
     *
     * @return {Function} A new, debounced function.
     */
    debounce = function (delay, atBegin, callback) {
      return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
    };
    return debounce;
  }

  var throttleDebounce;
  var hasRequiredThrottleDebounce;
  function requireThrottleDebounce() {
    if (hasRequiredThrottleDebounce) return throttleDebounce;
    hasRequiredThrottleDebounce = 1;
    var throttle = requireThrottle();
    var debounce = requireDebounce();
    throttleDebounce = {
      throttle: throttle,
      debounce: debounce
    };
    return throttleDebounce;
  }

  var hasRequiredResizeEvent;
  function requireResizeEvent() {
    if (hasRequiredResizeEvent) return resizeEvent;
    hasRequiredResizeEvent = 1;
    resizeEvent.__esModule = true;
    resizeEvent.removeResizeListener = resizeEvent.addResizeListener = undefined;
    var _resizeObserverPolyfill = require$$0;
    var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);
    var _throttleDebounce = requireThrottleDebounce();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var isServer = typeof window === 'undefined';

    /* istanbul ignore next */
    var resizeHandler = function resizeHandler(entries) {
      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }
        var entry = _ref;
        var listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
          listeners.forEach(function (fn) {
            fn();
          });
        }
      }
    };

    /* istanbul ignore next */
    resizeEvent.addResizeListener = function addResizeListener(element, fn) {
      if (isServer) return;
      if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new _resizeObserverPolyfill2.default((0, _throttleDebounce.debounce)(16, resizeHandler));
        element.__ro__.observe(element);
      }
      element.__resizeListeners__.push(fn);
    };

    /* istanbul ignore next */
    resizeEvent.removeResizeListener = function removeResizeListener(element, fn) {
      if (!element || !element.__resizeListeners__) return;
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
      }
    };
    return resizeEvent;
  }

  var dom = {};

  var hasRequiredDom;
  function requireDom() {
    if (hasRequiredDom) return dom;
    hasRequiredDom = 1;
    dom.__esModule = true;
    dom.isInContainer = dom.getScrollContainer = dom.isScroll = dom.getStyle = dom.once = dom.off = dom.on = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }; /* istanbul ignore next */

    dom.hasClass = hasClass;
    dom.addClass = addClass;
    dom.removeClass = removeClass;
    dom.setStyle = setStyle;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var isServer = _vue2.default.prototype.$isServer;
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
    var MOZ_HACK_REGEXP = /^moz([A-Z])/;
    var ieVersion = isServer ? 0 : Number(document.documentMode);

    /* istanbul ignore next */
    var trim = function trim(string) {
      return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
    };
    /* istanbul ignore next */
    var camelCase = function camelCase(name) {
      return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).replace(MOZ_HACK_REGEXP, 'Moz$1');
    };

    /* istanbul ignore next */
    var on = dom.on = function () {
      if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.addEventListener(event, handler, false);
          }
        };
      } else {
        return function (element, event, handler) {
          if (element && event && handler) {
            element.attachEvent('on' + event, handler);
          }
        };
      }
    }();

    /* istanbul ignore next */
    var off = dom.off = function () {
      if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
          if (element && event) {
            element.removeEventListener(event, handler, false);
          }
        };
      } else {
        return function (element, event, handler) {
          if (element && event) {
            element.detachEvent('on' + event, handler);
          }
        };
      }
    }();

    /* istanbul ignore next */
    dom.once = function once(el, event, fn) {
      var listener = function listener() {
        if (fn) {
          fn.apply(this, arguments);
        }
        off(el, event, listener);
      };
      on(el, event, listener);
    };

    /* istanbul ignore next */
    function hasClass(el, cls) {
      if (!el || !cls) return false;
      if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
      if (el.classList) {
        return el.classList.contains(cls);
      } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }
    }

    /* istanbul ignore next */
    function addClass(el, cls) {
      if (!el) return;
      var curClass = el.className;
      var classes = (cls || '').split(' ');
      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;
        if (el.classList) {
          el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
          curClass += ' ' + clsName;
        }
      }
      if (!el.classList) {
        el.setAttribute('class', curClass);
      }
    }

    /* istanbul ignore next */
    function removeClass(el, cls) {
      if (!el || !cls) return;
      var classes = cls.split(' ');
      var curClass = ' ' + el.className + ' ';
      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;
        if (el.classList) {
          el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
          curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
      }
      if (!el.classList) {
        el.setAttribute('class', trim(curClass));
      }
    }

    /* istanbul ignore next */
    var getStyle = dom.getStyle = ieVersion < 9 ? function (element, styleName) {
      if (isServer) return;
      if (!element || !styleName) return null;
      styleName = camelCase(styleName);
      if (styleName === 'float') {
        styleName = 'styleFloat';
      }
      try {
        switch (styleName) {
          case 'opacity':
            try {
              return element.filters.item('alpha').opacity / 100;
            } catch (e) {
              return 1.0;
            }
          default:
            return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
        }
      } catch (e) {
        return element.style[styleName];
      }
    } : function (element, styleName) {
      if (isServer) return;
      if (!element || !styleName) return null;
      styleName = camelCase(styleName);
      if (styleName === 'float') {
        styleName = 'cssFloat';
      }
      try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
      } catch (e) {
        return element.style[styleName];
      }
    };

    /* istanbul ignore next */
    function setStyle(element, styleName, value) {
      if (!element || !styleName) return;
      if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
        for (var prop in styleName) {
          if (styleName.hasOwnProperty(prop)) {
            setStyle(element, prop, styleName[prop]);
          }
        }
      } else {
        styleName = camelCase(styleName);
        if (styleName === 'opacity' && ieVersion < 9) {
          element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
        } else {
          element.style[styleName] = value;
        }
      }
    }
    var isScroll = dom.isScroll = function isScroll(el, vertical) {
      if (isServer) return;
      var determinedDirection = vertical !== null && vertical !== undefined;
      var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');
      return overflow.match(/(scroll|auto|overlay)/);
    };
    dom.getScrollContainer = function getScrollContainer(el, vertical) {
      if (isServer) return;
      var parent = el;
      while (parent) {
        if ([window, document, document.documentElement].includes(parent)) {
          return window;
        }
        if (isScroll(parent, vertical)) {
          return parent;
        }
        parent = parent.parentNode;
      }
      return parent;
    };
    dom.isInContainer = function isInContainer(el, container) {
      if (isServer || !el || !container) return false;
      var elRect = el.getBoundingClientRect();
      var containerRect = void 0;
      if ([window, document, document.documentElement, null, undefined].includes(container)) {
        containerRect = {
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
          left: 0
        };
      } else {
        containerRect = container.getBoundingClientRect();
      }
      return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
    };
    return dom;
  }

  var util = {};

  var types = {};

  var hasRequiredTypes;
  function requireTypes() {
    if (hasRequiredTypes) return types;
    hasRequiredTypes = 1;
    types.__esModule = true;
    types.isDefined = types.isUndefined = types.isFunction = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    types.isString = isString;
    types.isObject = isObject;
    types.isHtmlElement = isHtmlElement;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    }
    function isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    }
    function isHtmlElement(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }

    /**
     *  - Inspired:
     *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
     */
    var isFunction = function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    };
    if (typeof /./ !== 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) !== 'object' && (_vue2.default.prototype.$isServer || typeof document.childNodes !== 'function')) {
      types.isFunction = isFunction = function isFunction(obj) {
        return typeof obj === 'function' || false;
      };
    }
    types.isFunction = isFunction;
    types.isUndefined = function isUndefined(val) {
      return val === void 0;
    };
    types.isDefined = function isDefined(val) {
      return val !== undefined && val !== null;
    };
    return types;
  }

  var hasRequiredUtil;
  function requireUtil() {
    if (hasRequiredUtil) return util;
    hasRequiredUtil = 1;
    util.__esModule = true;
    util.isEmpty = util.isEqual = util.arrayEquals = util.looseEqual = util.capitalize = util.kebabCase = util.autoprefixer = util.isFirefox = util.isEdge = util.isIE = util.coerceTruthyValueToArray = util.arrayFind = util.arrayFindIndex = util.escapeRegexpString = util.valueEquals = util.generateId = util.getValueByPath = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    util.noop = noop;
    util.hasOwn = hasOwn;
    util.toObject = toObject;
    util.getPropByPath = getPropByPath;
    util.rafThrottle = rafThrottle;
    util.objToArray = objToArray;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _types = requireTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function noop() {}
    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }
    function extend(to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to;
    }
    function toObject(arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res;
    }
    util.getValueByPath = function getValueByPath(object, prop) {
      prop = prop || '';
      var paths = prop.split('.');
      var current = object;
      var result = null;
      for (var i = 0, j = paths.length; i < j; i++) {
        var path = paths[i];
        if (!current) break;
        if (i === j - 1) {
          result = current[path];
          break;
        }
        current = current[path];
      }
      return result;
    };
    function getPropByPath(obj, path, strict) {
      var tempObj = obj;
      path = path.replace(/\[(\w+)\]/g, '.$1');
      path = path.replace(/^\./, '');
      var keyArr = path.split('.');
      var i = 0;
      for (var len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        var key = keyArr[i];
        if (key in tempObj) {
          tempObj = tempObj[key];
        } else {
          if (strict) {
            throw new Error('please transfer a valid prop path to form item!');
          }
          break;
        }
      }
      return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
      };
    }
    util.generateId = function generateId() {
      return Math.floor(Math.random() * 10000);
    };
    util.valueEquals = function valueEquals(a, b) {
      // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
      if (a === b) return true;
      if (!(a instanceof Array)) return false;
      if (!(b instanceof Array)) return false;
      if (a.length !== b.length) return false;
      for (var i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    };
    util.escapeRegexpString = function escapeRegexpString() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    };

    // TODO: use native Array.find, Array.findIndex when IE support is dropped
    var arrayFindIndex = util.arrayFindIndex = function arrayFindIndex(arr, pred) {
      for (var i = 0; i !== arr.length; ++i) {
        if (pred(arr[i])) {
          return i;
        }
      }
      return -1;
    };
    util.arrayFind = function arrayFind(arr, pred) {
      var idx = arrayFindIndex(arr, pred);
      return idx !== -1 ? arr[idx] : undefined;
    };

    // coerce truthy value to array
    util.coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
      if (Array.isArray(val)) {
        return val;
      } else if (val) {
        return [val];
      } else {
        return [];
      }
    };
    util.isIE = function isIE() {
      return !_vue2.default.prototype.$isServer && !isNaN(Number(document.documentMode));
    };
    util.isEdge = function isEdge() {
      return !_vue2.default.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
    };
    util.isFirefox = function isFirefox() {
      return !_vue2.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
    };
    util.autoprefixer = function autoprefixer(style) {
      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') return style;
      var rules = ['transform', 'transition', 'animation'];
      var prefixes = ['ms-', 'webkit-'];
      rules.forEach(function (rule) {
        var value = style[rule];
        if (rule && value) {
          prefixes.forEach(function (prefix) {
            style[prefix + rule] = value;
          });
        }
      });
      return style;
    };
    util.kebabCase = function kebabCase(str) {
      var hyphenateRE = /([^-])([A-Z])/g;
      return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
    };
    util.capitalize = function capitalize(str) {
      if (!(0, _types.isString)(str)) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var looseEqual = util.looseEqual = function looseEqual(a, b) {
      var isObjectA = (0, _types.isObject)(a);
      var isObjectB = (0, _types.isObject)(b);
      if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b);
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
      } else {
        return false;
      }
    };
    var arrayEquals = util.arrayEquals = function arrayEquals(arrayA, arrayB) {
      arrayA = arrayA || [];
      arrayB = arrayB || [];
      if (arrayA.length !== arrayB.length) {
        return false;
      }
      for (var i = 0; i < arrayA.length; i++) {
        if (!looseEqual(arrayA[i], arrayB[i])) {
          return false;
        }
      }
      return true;
    };
    util.isEqual = function isEqual(value1, value2) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        return arrayEquals(value1, value2);
      }
      return looseEqual(value1, value2);
    };
    var isEmpty = util.isEmpty = function isEmpty(val) {
      // null or undefined
      if (val == null) return true;
      if (typeof val === 'boolean') return false;
      if (typeof val === 'number') return !val;
      if (val instanceof Error) return val.message === '';
      switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
          return !val.length;

        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]':
          {
            return !val.size;
          }
        // Plain Object
        case '[object Object]':
          {
            return !Object.keys(val).length;
          }
      }
      return false;
    };
    function rafThrottle(fn) {
      var locked = false;
      return function () {
        var _this = this;
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (locked) return;
        locked = true;
        window.requestAnimationFrame(function (_) {
          fn.apply(_this, args);
          locked = false;
        });
      };
    }
    function objToArray(obj) {
      if (Array.isArray(obj)) {
        return obj;
      }
      return isEmpty(obj) ? [] : [obj];
    }
    return util;
  }

  var scrollbarWidth = {};

  var hasRequiredScrollbarWidth;
  function requireScrollbarWidth() {
    if (hasRequiredScrollbarWidth) return scrollbarWidth;
    hasRequiredScrollbarWidth = 1;
    scrollbarWidth.__esModule = true;
    scrollbarWidth.default = function () {
      if (_vue2.default.prototype.$isServer) return 0;
      if (scrollBarWidth !== undefined) return scrollBarWidth;
      var outer = document.createElement('div');
      outer.className = 'el-scrollbar__wrap';
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.position = 'absolute';
      outer.style.top = '-9999px';
      document.body.appendChild(outer);
      var widthNoScroll = outer.offsetWidth;
      outer.style.overflow = 'scroll';
      var inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
      var widthWithScroll = inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      scrollBarWidth = widthNoScroll - widthWithScroll;
      return scrollBarWidth;
    };
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var scrollBarWidth = void 0;
    return scrollbarWidth;
  }

  (function (module) {
    module.exports = /******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 131);
      /******/
    }
    /************************************************************************/
    /******/({
      /***/131: /***/function (module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
        var resize_event_ = __webpack_require__(16);

        // EXTERNAL MODULE: external "element-ui/lib/utils/scrollbar-width"
        var scrollbar_width_ = __webpack_require__(38);
        var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/util"
        var util_ = __webpack_require__(3);

        // EXTERNAL MODULE: external "element-ui/lib/utils/dom"
        var dom_ = __webpack_require__(2);

        // CONCATENATED MODULE: ./packages/scrollbar/src/util.js
        var BAR_MAP = {
          vertical: {
            offset: 'offsetHeight',
            scroll: 'scrollTop',
            scrollSize: 'scrollHeight',
            size: 'height',
            key: 'vertical',
            axis: 'Y',
            client: 'clientY',
            direction: 'top'
          },
          horizontal: {
            offset: 'offsetWidth',
            scroll: 'scrollLeft',
            scrollSize: 'scrollWidth',
            size: 'width',
            key: 'horizontal',
            axis: 'X',
            client: 'clientX',
            direction: 'left'
          }
        };
        function renderThumbStyle(_ref) {
          var move = _ref.move,
            size = _ref.size,
            bar = _ref.bar;
          var style = {};
          var translate = 'translate' + bar.axis + '(' + move + '%)';
          style[bar.size] = size;
          style.transform = translate;
          style.msTransform = translate;
          style.webkitTransform = translate;
          return style;
        }
        // CONCATENATED MODULE: ./packages/scrollbar/src/bar.js

        /* istanbul ignore next */
        /* harmony default export */
        var src_bar = {
          name: 'Bar',
          props: {
            vertical: Boolean,
            size: String,
            move: Number
          },
          computed: {
            bar: function bar() {
              return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
            },
            wrap: function wrap() {
              return this.$parent.wrap;
            }
          },
          render: function render(h) {
            var size = this.size,
              move = this.move,
              bar = this.bar;
            return h('div', {
              'class': ['el-scrollbar__bar', 'is-' + bar.key],
              on: {
                'mousedown': this.clickTrackHandler
              }
            }, [h('div', {
              ref: 'thumb',
              'class': 'el-scrollbar__thumb',
              on: {
                'mousedown': this.clickThumbHandler
              },
              style: renderThumbStyle({
                size: size,
                move: move,
                bar: bar
              })
            })]);
          },
          methods: {
            clickThumbHandler: function clickThumbHandler(e) {
              // prevent click event of right button
              if (e.ctrlKey || e.button === 2) {
                return;
              }
              this.startDrag(e);
              this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
            },
            clickTrackHandler: function clickTrackHandler(e) {
              var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
              var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
              var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            startDrag: function startDrag(e) {
              e.stopImmediatePropagation();
              this.cursorDown = true;
              Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
              Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
              document.onselectstart = function () {
                return false;
              };
            },
            mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
              if (this.cursorDown === false) return;
              var prevPage = this[this.bar.axis];
              if (!prevPage) return;
              var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
              var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
              var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
              this.cursorDown = false;
              this[this.bar.axis] = 0;
              Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
              document.onselectstart = null;
            }
          },
          destroyed: function destroyed() {
            Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
          }
        };
        // CONCATENATED MODULE: ./packages/scrollbar/src/main.js
        // reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

        /* istanbul ignore next */
        /* harmony default export */
        var main = {
          name: 'ElScrollbar',
          components: {
            Bar: src_bar
          },
          props: {
            native: Boolean,
            wrapStyle: {},
            wrapClass: {},
            viewClass: {},
            viewStyle: {},
            noresize: Boolean,
            // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
            tag: {
              type: String,
              default: 'div'
            }
          },
          data: function data() {
            return {
              sizeWidth: '0',
              sizeHeight: '0',
              moveX: 0,
              moveY: 0
            };
          },
          computed: {
            wrap: function wrap() {
              return this.$refs.wrap;
            }
          },
          render: function render(h) {
            var gutter = scrollbar_width_default()();
            var style = this.wrapStyle;
            if (gutter) {
              var gutterWith = '-' + gutter + 'px';
              var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';
              if (Array.isArray(this.wrapStyle)) {
                style = Object(util_["toObject"])(this.wrapStyle);
                style.marginRight = style.marginBottom = gutterWith;
              } else if (typeof this.wrapStyle === 'string') {
                style += gutterStyle;
              } else {
                style = gutterStyle;
              }
            }
            var view = h(this.tag, {
              class: ['el-scrollbar__view', this.viewClass],
              style: this.viewStyle,
              ref: 'resize'
            }, this.$slots.default);
            var wrap = h('div', {
              ref: 'wrap',
              style: style,
              on: {
                'scroll': this.handleScroll
              },
              'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default']
            }, [[view]]);
            var nodes = void 0;
            if (!this.native) {
              nodes = [wrap, h(src_bar, {
                attrs: {
                  move: this.moveX,
                  size: this.sizeWidth
                }
              }), h(src_bar, {
                attrs: {
                  vertical: true,
                  move: this.moveY,
                  size: this.sizeHeight
                }
              })];
            } else {
              nodes = [h('div', {
                ref: 'wrap',
                'class': [this.wrapClass, 'el-scrollbar__wrap'],
                style: style
              }, [[view]])];
            }
            return h('div', {
              class: 'el-scrollbar'
            }, nodes);
          },
          methods: {
            handleScroll: function handleScroll() {
              var wrap = this.wrap;
              this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
              this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
            },
            update: function update() {
              var heightPercentage = void 0,
                widthPercentage = void 0;
              var wrap = this.wrap;
              if (!wrap) return;
              heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
              widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
              this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
              this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
            }
          },
          mounted: function mounted() {
            if (this.native) return;
            this.$nextTick(this.update);
            !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
          },
          beforeDestroy: function beforeDestroy() {
            if (this.native) return;
            !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
          }
        };
        // CONCATENATED MODULE: ./packages/scrollbar/index.js

        /* istanbul ignore next */
        main.install = function (Vue) {
          Vue.component(main.name, main);
        };

        /* harmony default export */
        __webpack_exports__["default"] = main;

        /***/
      },

      /***/16: /***/function (module, exports) {
        module.exports = requireResizeEvent();

        /***/
      },

      /***/2: /***/function (module, exports) {
        module.exports = requireDom();

        /***/
      },

      /***/3: /***/function (module, exports) {
        module.exports = requireUtil();

        /***/
      },

      /***/38: /***/function (module, exports) {
        module.exports = requireScrollbarWidth();

        /***/
      }

      /******/
    });
  })(scrollbar);
  var Scrollbar = /*@__PURE__*/getDefaultExportFromCjs(scrollbar.exports);

  var loading = {exports: {}};

  var popup = {};

  var merge = {};

  var hasRequiredMerge;
  function requireMerge() {
    if (hasRequiredMerge) return merge;
    hasRequiredMerge = 1;
    merge.__esModule = true;
    merge.default = function (target) {
      for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i] || {};
        for (var prop in source) {
          if (source.hasOwnProperty(prop)) {
            var value = source[prop];
            if (value !== undefined) {
              target[prop] = value;
            }
          }
        }
      }
      return target;
    };
    return merge;
  }

  var popupManager = {};

  var hasRequiredPopupManager;
  function requirePopupManager() {
    if (hasRequiredPopupManager) return popupManager;
    hasRequiredPopupManager = 1;
    popupManager.__esModule = true;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _dom = requireDom();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasModal = false;
    var hasInitZIndex = false;
    var zIndex = void 0;
    var getModal = function getModal() {
      if (_vue2.default.prototype.$isServer) return;
      var modalDom = PopupManager.modalDom;
      if (modalDom) {
        hasModal = true;
      } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;
        modalDom.addEventListener('touchmove', function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
        modalDom.addEventListener('click', function () {
          PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
      }
      return modalDom;
    };
    var instances = {};
    var PopupManager = {
      modalFade: true,
      getInstance: function getInstance(id) {
        return instances[id];
      },
      register: function register(id, instance) {
        if (id && instance) {
          instances[id] = instance;
        }
      },
      deregister: function deregister(id) {
        if (id) {
          instances[id] = null;
          delete instances[id];
        }
      },
      nextZIndex: function nextZIndex() {
        return PopupManager.zIndex++;
      },
      modalStack: [],
      doOnModalClick: function doOnModalClick() {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;
        var instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
          instance.close();
        }
      },
      openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
        if (_vue2.default.prototype.$isServer) return;
        if (!id || zIndex === undefined) return;
        this.modalFade = modalFade;
        var modalStack = this.modalStack;
        for (var i = 0, j = modalStack.length; i < j; i++) {
          var item = modalStack[i];
          if (item.id === id) {
            return;
          }
        }
        var modalDom = getModal();
        (0, _dom.addClass)(modalDom, 'v-modal');
        if (this.modalFade && !hasModal) {
          (0, _dom.addClass)(modalDom, 'v-modal-enter');
        }
        if (modalClass) {
          var classArr = modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return (0, _dom.addClass)(modalDom, item);
          });
        }
        setTimeout(function () {
          (0, _dom.removeClass)(modalDom, 'v-modal-enter');
        }, 200);
        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
          dom.parentNode.appendChild(modalDom);
        } else {
          document.body.appendChild(modalDom);
        }
        if (zIndex) {
          modalDom.style.zIndex = zIndex;
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({
          id: id,
          zIndex: zIndex,
          modalClass: modalClass
        });
      },
      closeModal: function closeModal(id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();
        if (modalStack.length > 0) {
          var topItem = modalStack[modalStack.length - 1];
          if (topItem.id === id) {
            if (topItem.modalClass) {
              var classArr = topItem.modalClass.trim().split(/\s+/);
              classArr.forEach(function (item) {
                return (0, _dom.removeClass)(modalDom, item);
              });
            }
            modalStack.pop();
            if (modalStack.length > 0) {
              modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
            }
          } else {
            for (var i = modalStack.length - 1; i >= 0; i--) {
              if (modalStack[i].id === id) {
                modalStack.splice(i, 1);
                break;
              }
            }
          }
        }
        if (modalStack.length === 0) {
          if (this.modalFade) {
            (0, _dom.addClass)(modalDom, 'v-modal-leave');
          }
          setTimeout(function () {
            if (modalStack.length === 0) {
              if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
              modalDom.style.display = 'none';
              PopupManager.modalDom = undefined;
            }
            (0, _dom.removeClass)(modalDom, 'v-modal-leave');
          }, 200);
        }
      }
    };
    Object.defineProperty(PopupManager, 'zIndex', {
      configurable: true,
      get: function get() {
        if (!hasInitZIndex) {
          zIndex = zIndex || (_vue2.default.prototype.$ELEMENT || {}).zIndex || 2000;
          hasInitZIndex = true;
        }
        return zIndex;
      },
      set: function set(value) {
        zIndex = value;
      }
    });
    var getTopPopup = function getTopPopup() {
      if (_vue2.default.prototype.$isServer) return;
      if (PopupManager.modalStack.length > 0) {
        var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topPopup) return;
        var instance = PopupManager.getInstance(topPopup.id);
        return instance;
      }
    };
    if (!_vue2.default.prototype.$isServer) {
      // handle `esc` key when the popup is shown
      window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
          var topPopup = getTopPopup();
          if (topPopup && topPopup.closeOnPressEscape) {
            topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
          }
        }
      });
    }
    popupManager.default = PopupManager;
    return popupManager;
  }

  var hasRequiredPopup;
  function requirePopup() {
    if (hasRequiredPopup) return popup;
    hasRequiredPopup = 1;
    popup.__esModule = true;
    popup.PopupManager = undefined;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _merge = requireMerge();
    var _merge2 = _interopRequireDefault(_merge);
    var _popupManager = requirePopupManager();
    var _popupManager2 = _interopRequireDefault(_popupManager);
    var _scrollbarWidth = requireScrollbarWidth();
    var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);
    var _dom = requireDom();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var idSeed = 1;
    var scrollBarWidth = void 0;
    popup.default = {
      props: {
        visible: {
          type: Boolean,
          default: false
        },
        openDelay: {},
        closeDelay: {},
        zIndex: {},
        modal: {
          type: Boolean,
          default: false
        },
        modalFade: {
          type: Boolean,
          default: true
        },
        modalClass: {},
        modalAppendToBody: {
          type: Boolean,
          default: false
        },
        lockScroll: {
          type: Boolean,
          default: true
        },
        closeOnPressEscape: {
          type: Boolean,
          default: false
        },
        closeOnClickModal: {
          type: Boolean,
          default: false
        }
      },
      beforeMount: function beforeMount() {
        this._popupId = 'popup-' + idSeed++;
        _popupManager2.default.register(this._popupId, this);
      },
      beforeDestroy: function beforeDestroy() {
        _popupManager2.default.deregister(this._popupId);
        _popupManager2.default.closeModal(this._popupId);
        this.restoreBodyStyle();
      },
      data: function data() {
        return {
          opened: false,
          bodyPaddingRight: null,
          computedBodyPaddingRight: 0,
          withoutHiddenClass: true,
          rendered: false
        };
      },
      watch: {
        visible: function visible(val) {
          var _this = this;
          if (val) {
            if (this._opening) return;
            if (!this.rendered) {
              this.rendered = true;
              _vue2.default.nextTick(function () {
                _this.open();
              });
            } else {
              this.open();
            }
          } else {
            this.close();
          }
        }
      },
      methods: {
        open: function open(options) {
          var _this2 = this;
          if (!this.rendered) {
            this.rendered = true;
          }
          var props = (0, _merge2.default)({}, this.$props || this, options);
          if (this._closeTimer) {
            clearTimeout(this._closeTimer);
            this._closeTimer = null;
          }
          clearTimeout(this._openTimer);
          var openDelay = Number(props.openDelay);
          if (openDelay > 0) {
            this._openTimer = setTimeout(function () {
              _this2._openTimer = null;
              _this2.doOpen(props);
            }, openDelay);
          } else {
            this.doOpen(props);
          }
        },
        doOpen: function doOpen(props) {
          if (this.$isServer) return;
          if (this.willOpen && !this.willOpen()) return;
          if (this.opened) return;
          this._opening = true;
          var dom = this.$el;
          var modal = props.modal;
          var zIndex = props.zIndex;
          if (zIndex) {
            _popupManager2.default.zIndex = zIndex;
          }
          if (modal) {
            if (this._closing) {
              _popupManager2.default.closeModal(this._popupId);
              this._closing = false;
            }
            _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
            if (props.lockScroll) {
              this.withoutHiddenClass = !(0, _dom.hasClass)(document.body, 'el-popup-parent--hidden');
              if (this.withoutHiddenClass) {
                this.bodyPaddingRight = document.body.style.paddingRight;
                this.computedBodyPaddingRight = parseInt((0, _dom.getStyle)(document.body, 'paddingRight'), 10);
              }
              scrollBarWidth = (0, _scrollbarWidth2.default)();
              var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
              var bodyOverflowY = (0, _dom.getStyle)(document.body, 'overflowY');
              if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
                document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
              }
              (0, _dom.addClass)(document.body, 'el-popup-parent--hidden');
            }
          }
          if (getComputedStyle(dom).position === 'static') {
            dom.style.position = 'absolute';
          }
          dom.style.zIndex = _popupManager2.default.nextZIndex();
          this.opened = true;
          this.onOpen && this.onOpen();
          this.doAfterOpen();
        },
        doAfterOpen: function doAfterOpen() {
          this._opening = false;
        },
        close: function close() {
          var _this3 = this;
          if (this.willClose && !this.willClose()) return;
          if (this._openTimer !== null) {
            clearTimeout(this._openTimer);
            this._openTimer = null;
          }
          clearTimeout(this._closeTimer);
          var closeDelay = Number(this.closeDelay);
          if (closeDelay > 0) {
            this._closeTimer = setTimeout(function () {
              _this3._closeTimer = null;
              _this3.doClose();
            }, closeDelay);
          } else {
            this.doClose();
          }
        },
        doClose: function doClose() {
          this._closing = true;
          this.onClose && this.onClose();
          if (this.lockScroll) {
            setTimeout(this.restoreBodyStyle, 200);
          }
          this.opened = false;
          this.doAfterClose();
        },
        doAfterClose: function doAfterClose() {
          _popupManager2.default.closeModal(this._popupId);
          this._closing = false;
        },
        restoreBodyStyle: function restoreBodyStyle() {
          if (this.modal && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.bodyPaddingRight;
            (0, _dom.removeClass)(document.body, 'el-popup-parent--hidden');
          }
          this.withoutHiddenClass = true;
        }
      }
    };
    popup.PopupManager = _popupManager2.default;
    return popup;
  }

  var afterLeave = {};

  var hasRequiredAfterLeave;
  function requireAfterLeave() {
    if (hasRequiredAfterLeave) return afterLeave;
    hasRequiredAfterLeave = 1;
    afterLeave.__esModule = true;
    afterLeave.default = function (instance, callback) {
      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (!instance || !callback) throw new Error('instance & callback is required');
      var called = false;
      var afterLeaveCallback = function afterLeaveCallback() {
        if (called) return;
        called = true;
        if (callback) {
          callback.apply(null, arguments);
        }
      };
      if (once) {
        instance.$once('after-leave', afterLeaveCallback);
      } else {
        instance.$on('after-leave', afterLeaveCallback);
      }
      setTimeout(function () {
        afterLeaveCallback();
      }, speed + 100);
    };
    return afterLeave;
  }

  (function (module) {
    module.exports = /******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 72);
      /******/
    }
    /************************************************************************/
    /******/({
      /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }
          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context = context ||
              // cached call
              this.$vnode && this.$vnode.ssrContext ||
              // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }
          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functioal component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
          return {
            exports: scriptExports,
            options: options
          };
        }

        /***/
      },

      /***/13: /***/function (module, exports) {
        module.exports = requirePopup();

        /***/
      },

      /***/2: /***/function (module, exports) {
        module.exports = requireDom();

        /***/
      },

      /***/41: /***/function (module, exports) {
        module.exports = requireAfterLeave();

        /***/
      },

      /***/7: /***/function (module, exports) {
        module.exports = require$$0$1;

        /***/
      },

      /***/72: /***/function (module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "vue"
        var external_vue_ = __webpack_require__(7);
        var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("transition", {
            attrs: {
              name: "el-loading-fade"
            },
            on: {
              "after-leave": _vm.handleAfterLeave
            }
          }, [_c("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }],
            staticClass: "el-loading-mask",
            class: [_vm.customClass, {
              "is-fullscreen": _vm.fullscreen
            }],
            style: {
              backgroundColor: _vm.background || ""
            }
          }, [_c("div", {
            staticClass: "el-loading-spinner"
          }, [!_vm.spinner ? _c("svg", {
            staticClass: "circular",
            attrs: {
              viewBox: "25 25 50 50"
            }
          }, [_c("circle", {
            staticClass: "path",
            attrs: {
              cx: "50",
              cy: "50",
              r: "20",
              fill: "none"
            }
          })]) : _c("i", {
            class: _vm.spinner
          }), _vm.text ? _c("p", {
            staticClass: "el-loading-text"
          }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])])]);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        // CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var loadingvue_type_script_lang_js_ = {
          data: function data() {
            return {
              text: null,
              spinner: null,
              background: null,
              fullscreen: true,
              visible: false,
              customClass: ''
            };
          },
          methods: {
            handleAfterLeave: function handleAfterLeave() {
              this.$emit('after-leave');
            },
            setText: function setText(text) {
              this.text = text;
            }
          }
        };
        // CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_loadingvue_type_script_lang_js_ = loadingvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        var componentNormalizer = __webpack_require__(0);

        // CONCATENATED MODULE: ./packages/loading/src/loading.vue

        /* normalize component */

        var component = Object(componentNormalizer["a" /* default */])(src_loadingvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        component.options.__file = "packages/loading/src/loading.vue";
        /* harmony default export */
        var loading = component.exports;
        // EXTERNAL MODULE: external "element-ui/lib/utils/dom"
        var dom_ = __webpack_require__(2);

        // EXTERNAL MODULE: external "element-ui/lib/utils/popup"
        var popup_ = __webpack_require__(13);

        // EXTERNAL MODULE: external "element-ui/lib/utils/after-leave"
        var after_leave_ = __webpack_require__(41);
        var after_leave_default = /*#__PURE__*/__webpack_require__.n(after_leave_);

        // CONCATENATED MODULE: ./packages/loading/src/directive.js

        var Mask = external_vue_default.a.extend(loading);
        var loadingDirective = {};
        loadingDirective.install = function (Vue) {
          if (Vue.prototype.$isServer) return;
          var toggleLoading = function toggleLoading(el, binding) {
            if (binding.value) {
              Vue.nextTick(function () {
                if (binding.modifiers.fullscreen) {
                  el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
                  el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
                  el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
                  Object(dom_["addClass"])(el.mask, 'is-fullscreen');
                  insertDom(document.body, el, binding);
                } else {
                  Object(dom_["removeClass"])(el.mask, 'is-fullscreen');
                  if (binding.modifiers.body) {
                    el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
                    ['top', 'left'].forEach(function (property) {
                      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                      el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, 'margin-' + property), 10) + 'px';
                    });
                    ['height', 'width'].forEach(function (property) {
                      el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                    });
                    insertDom(document.body, el, binding);
                  } else {
                    el.originalPosition = Object(dom_["getStyle"])(el, 'position');
                    insertDom(el, el, binding);
                  }
                }
              });
            } else {
              after_leave_default()(el.instance, function (_) {
                if (!el.instance.hiding) return;
                el.domVisible = false;
                var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
                Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
                Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
                el.instance.hiding = false;
              }, 300, true);
              el.instance.visible = false;
              el.instance.hiding = true;
            }
          };
          var insertDom = function insertDom(parent, el, binding) {
            if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
              Object.keys(el.maskStyle).forEach(function (property) {
                el.mask.style[property] = el.maskStyle[property];
              });
              if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed' && el.originalPosition !== 'sticky') {
                Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
              }
              if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
              }
              el.domVisible = true;
              parent.appendChild(el.mask);
              Vue.nextTick(function () {
                if (el.instance.hiding) {
                  el.instance.$emit('after-leave');
                } else {
                  el.instance.visible = true;
                }
              });
              el.domInserted = true;
            } else if (el.domVisible && el.instance.hiding === true) {
              el.instance.visible = true;
              el.instance.hiding = false;
            }
          };
          Vue.directive('loading', {
            bind: function bind(el, binding, vnode) {
              var textExr = el.getAttribute('element-loading-text');
              var spinnerExr = el.getAttribute('element-loading-spinner');
              var backgroundExr = el.getAttribute('element-loading-background');
              var customClassExr = el.getAttribute('element-loading-custom-class');
              var vm = vnode.context;
              var mask = new Mask({
                el: document.createElement('div'),
                data: {
                  text: vm && vm[textExr] || textExr,
                  spinner: vm && vm[spinnerExr] || spinnerExr,
                  background: vm && vm[backgroundExr] || backgroundExr,
                  customClass: vm && vm[customClassExr] || customClassExr,
                  fullscreen: !!binding.modifiers.fullscreen
                }
              });
              el.instance = mask;
              el.mask = mask.$el;
              el.maskStyle = {};
              binding.value && toggleLoading(el, binding);
            },
            update: function update(el, binding) {
              el.instance.setText(el.getAttribute('element-loading-text'));
              if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
              }
            },
            unbind: function unbind(el, binding) {
              if (el.domInserted) {
                el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
                toggleLoading(el, {
                  value: false,
                  modifiers: binding.modifiers
                });
              }
              el.instance && el.instance.$destroy();
            }
          });
        };

        /* harmony default export */
        var directive = loadingDirective;
        // EXTERNAL MODULE: external "element-ui/lib/utils/merge"
        var merge_ = __webpack_require__(9);
        var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

        // CONCATENATED MODULE: ./packages/loading/src/index.js

        var LoadingConstructor = external_vue_default.a.extend(loading);
        var defaults = {
          text: null,
          fullscreen: true,
          body: false,
          lock: false,
          customClass: ''
        };
        var fullscreenLoading = void 0;
        LoadingConstructor.prototype.originalPosition = '';
        LoadingConstructor.prototype.originalOverflow = '';
        LoadingConstructor.prototype.close = function () {
          var _this = this;
          if (this.fullscreen) {
            fullscreenLoading = undefined;
          }
          after_leave_default()(this, function (_) {
            var target = _this.fullscreen || _this.body ? document.body : _this.target;
            Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
            Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
            if (_this.$el && _this.$el.parentNode) {
              _this.$el.parentNode.removeChild(_this.$el);
            }
            _this.$destroy();
          }, 300);
          this.visible = false;
        };
        var src_addStyle = function addStyle(options, parent, instance) {
          var maskStyle = {};
          if (options.fullscreen) {
            instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
            instance.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
            maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
          } else if (options.body) {
            instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
            });
          } else {
            instance.originalPosition = Object(dom_["getStyle"])(parent, 'position');
          }
          Object.keys(maskStyle).forEach(function (property) {
            instance.$el.style[property] = maskStyle[property];
          });
        };
        var src_Loading = function Loading() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (external_vue_default.a.prototype.$isServer) return;
          options = merge_default()({}, defaults, options);
          if (typeof options.target === 'string') {
            options.target = document.querySelector(options.target);
          }
          options.target = options.target || document.body;
          if (options.target !== document.body) {
            options.fullscreen = false;
          } else {
            options.body = true;
          }
          if (options.fullscreen && fullscreenLoading) {
            return fullscreenLoading;
          }
          var parent = options.body ? document.body : options.target;
          var instance = new LoadingConstructor({
            el: document.createElement('div'),
            data: options
          });
          src_addStyle(options, parent, instance);
          if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed' && instance.originalPosition !== 'sticky') {
            Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
          }
          if (options.fullscreen && options.lock) {
            Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
          }
          parent.appendChild(instance.$el);
          external_vue_default.a.nextTick(function () {
            instance.visible = true;
          });
          if (options.fullscreen) {
            fullscreenLoading = instance;
          }
          return instance;
        };

        /* harmony default export */
        var src = src_Loading;
        // CONCATENATED MODULE: ./packages/loading/index.js

        /* harmony default export */
        __webpack_exports__["default"] = {
          install: function install(Vue) {
            Vue.use(directive);
            Vue.prototype.$loading = src;
          },
          directive: directive,
          service: src
        };

        /***/
      },

      /***/9: /***/function (module, exports) {
        module.exports = requireMerge();

        /***/
      }

      /******/
    });
  })(loading);
  var Loading = /*@__PURE__*/getDefaultExportFromCjs(loading.exports);

  var select = {exports: {}};

  var input = {exports: {}};

  var migrating = {};

  var hasRequiredMigrating;
  function requireMigrating() {
    if (hasRequiredMigrating) return migrating;
    hasRequiredMigrating = 1;
    migrating.__esModule = true;
    var _util = requireUtil();

    /**
     * Show migrating guide in browser console.
     *
     * Usage:
     * import Migrating from 'element-ui/src/mixins/migrating';
     *
     * mixins: [Migrating]
     *
     * add getMigratingConfig method for your component.
     *  getMigratingConfig() {
     *    return {
     *      props: {
     *        'allow-no-selection': 'allow-no-selection is removed.',
     *        'selection-mode': 'selection-mode is removed.'
     *      },
     *      events: {
     *        selectionchange: 'selectionchange is renamed to selection-change.'
     *      }
     *    };
     *  },
     */
    migrating.default = {
      mounted: function mounted() {
        if (process.env.NODE_ENV === 'production') return;
        if (!this.$vnode) return;
        var _getMigratingConfig = this.getMigratingConfig(),
          _getMigratingConfig$p = _getMigratingConfig.props,
          props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
          _getMigratingConfig$e = _getMigratingConfig.events,
          events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;
        var _$vnode = this.$vnode,
          data = _$vnode.data,
          componentOptions = _$vnode.componentOptions;
        var definedProps = data.attrs || {};
        var definedEvents = componentOptions.listeners || {};
        for (var propName in definedProps) {
          propName = (0, _util.kebabCase)(propName); // compatible with camel case
          if (props[propName]) {
            console.warn('[Element Migrating][' + this.$options.name + '][Attribute]: ' + props[propName]);
          }
        }
        for (var eventName in definedEvents) {
          eventName = (0, _util.kebabCase)(eventName); // compatible with camel case
          if (events[eventName]) {
            console.warn('[Element Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
          }
        }
      },
      methods: {
        getMigratingConfig: function getMigratingConfig() {
          return {
            props: {},
            events: {}
          };
        }
      }
    };
    return migrating;
  }

  var shared = {};

  var hasRequiredShared;
  function requireShared() {
    if (hasRequiredShared) return shared;
    hasRequiredShared = 1;
    shared.__esModule = true;
    shared.isDef = isDef;
    shared.isKorean = isKorean;
    function isDef(val) {
      return val !== undefined && val !== null;
    }
    function isKorean(text) {
      var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
      return reg.test(text);
    }
    return shared;
  }

  var emitter = {};

  var hasRequiredEmitter;
  function requireEmitter() {
    if (hasRequiredEmitter) return emitter;
    hasRequiredEmitter = 1;
    emitter.__esModule = true;
    function _broadcast(componentName, eventName, params) {
      this.$children.forEach(function (child) {
        var name = child.$options.componentName;
        if (name === componentName) {
          child.$emit.apply(child, [eventName].concat(params));
        } else {
          _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
      });
    }
    emitter.default = {
      methods: {
        dispatch: function dispatch(componentName, eventName, params) {
          var parent = this.$parent || this.$root;
          var name = parent.$options.componentName;
          while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;
            if (parent) {
              name = parent.$options.componentName;
            }
          }
          if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params));
          }
        },
        broadcast: function broadcast(componentName, eventName, params) {
          _broadcast.call(this, componentName, eventName, params);
        }
      }
    };
    return emitter;
  }

  var hasRequiredInput;
  function requireInput() {
    if (hasRequiredInput) return input.exports;
    hasRequiredInput = 1;
    (function (module) {
      module.exports = /******/function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
          /******/
          /******/ // Check if module is in cache
          /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/
          var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/
          };
          /******/
          /******/ // Execute the module function
          /******/
          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          /******/ // Flag the module as loaded
          /******/
          module.l = true;
          /******/
          /******/ // Return the exports of the module
          /******/
          return module.exports;
          /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
          /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
              enumerable: true,
              get: getter
            });
            /******/
          }
          /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function (value, mode) {
          /******/if (mode & 1) value = __webpack_require__(value);
          /******/
          if (mode & 8) return value;
          /******/
          if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
          /******/
          var ns = Object.create(null);
          /******/
          __webpack_require__.r(ns);
          /******/
          Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
          });
          /******/
          if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
          /******/
          return ns;
          /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function getDefault() {
            return module['default'];
          } : /******/function getModuleExports() {
            return module;
          };
          /******/
          __webpack_require__.d(getter, 'a', getter);
          /******/
          return getter;
          /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "/dist/";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 74);
        /******/
      }
      /************************************************************************/
      /******/({
        /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

          /* harmony export (binding) */
          __webpack_require__.d(__webpack_exports__, "a", function () {
            return normalizeComponent;
          });
          /* globals __VUE_SSR_CONTEXT__ */

          // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
          // This module is a runtime utility for cleaner component module output and will
          // be included in the final webpack user bundle.

          function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
          shadowMode /* vue-cli only */) {
            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

            // render functions
            if (render) {
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              options._compiled = true;
            }

            // functional template
            if (functionalTemplate) {
              options.functional = true;
            }

            // scopedId
            if (scopeId) {
              options._scopeId = 'data-v-' + scopeId;
            }
            var hook;
            if (moduleIdentifier) {
              // server build
              hook = function (context) {
                // 2.3 injection
                context = context ||
                // cached call
                this.$vnode && this.$vnode.ssrContext ||
                // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (injectStyles) {
                  injectStyles.call(this, context);
                }
                // register component module identifier for async chunk inferrence
                if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
                }
              };
              // used by ssr in case component is cached and beforeCreate
              // never gets called
              options._ssrRegister = hook;
            } else if (injectStyles) {
              hook = shadowMode ? function () {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              } : injectStyles;
            }
            if (hook) {
              if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook;
                // register for functioal component in vue file
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
                };
              } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }
            return {
              exports: scriptExports,
              options: options
            };
          }

          /***/
        },

        /***/11: /***/function (module, exports) {
          module.exports = requireMigrating();

          /***/
        },

        /***/21: /***/function (module, exports) {
          module.exports = requireShared();

          /***/
        },

        /***/4: /***/function (module, exports) {
          module.exports = requireEmitter();

          /***/
        },

        /***/74: /***/function (module, __webpack_exports__, __webpack_require__) {

          __webpack_require__.r(__webpack_exports__);

          // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
          var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
              class: [_vm.type === "textarea" ? "el-textarea" : "el-input", _vm.inputSize ? "el-input--" + _vm.inputSize : "", {
                "is-disabled": _vm.inputDisabled,
                "is-exceed": _vm.inputExceed,
                "el-input-group": _vm.$slots.prepend || _vm.$slots.append,
                "el-input-group--append": _vm.$slots.append,
                "el-input-group--prepend": _vm.$slots.prepend,
                "el-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
                "el-input--suffix": _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.showPassword
              }],
              on: {
                mouseenter: function ($event) {
                  _vm.hovering = true;
                },
                mouseleave: function ($event) {
                  _vm.hovering = false;
                }
              }
            }, [_vm.type !== "textarea" ? [_vm.$slots.prepend ? _c("div", {
              staticClass: "el-input-group__prepend"
            }, [_vm._t("prepend")], 2) : _vm._e(), _vm.type !== "textarea" ? _c("input", _vm._b({
              ref: "input",
              staticClass: "el-input__inner",
              attrs: {
                tabindex: _vm.tabindex,
                type: _vm.showPassword ? _vm.passwordVisible ? "text" : "password" : _vm.type,
                disabled: _vm.inputDisabled,
                readonly: _vm.readonly,
                autocomplete: _vm.autoComplete || _vm.autocomplete,
                "aria-label": _vm.label
              },
              on: {
                compositionstart: _vm.handleCompositionStart,
                compositionupdate: _vm.handleCompositionUpdate,
                compositionend: _vm.handleCompositionEnd,
                input: _vm.handleInput,
                focus: _vm.handleFocus,
                blur: _vm.handleBlur,
                change: _vm.handleChange
              }
            }, "input", _vm.$attrs, false)) : _vm._e(), _vm.$slots.prefix || _vm.prefixIcon ? _c("span", {
              staticClass: "el-input__prefix"
            }, [_vm._t("prefix"), _vm.prefixIcon ? _c("i", {
              staticClass: "el-input__icon",
              class: _vm.prefixIcon
            }) : _vm._e()], 2) : _vm._e(), _vm.getSuffixVisible() ? _c("span", {
              staticClass: "el-input__suffix"
            }, [_c("span", {
              staticClass: "el-input__suffix-inner"
            }, [!_vm.showClear || !_vm.showPwdVisible || !_vm.isWordLimitVisible ? [_vm._t("suffix"), _vm.suffixIcon ? _c("i", {
              staticClass: "el-input__icon",
              class: _vm.suffixIcon
            }) : _vm._e()] : _vm._e(), _vm.showClear ? _c("i", {
              staticClass: "el-input__icon el-icon-circle-close el-input__clear",
              on: {
                mousedown: function ($event) {
                  $event.preventDefault();
                },
                click: _vm.clear
              }
            }) : _vm._e(), _vm.showPwdVisible ? _c("i", {
              staticClass: "el-input__icon el-icon-view el-input__clear",
              on: {
                click: _vm.handlePasswordVisible
              }
            }) : _vm._e(), _vm.isWordLimitVisible ? _c("span", {
              staticClass: "el-input__count"
            }, [_c("span", {
              staticClass: "el-input__count-inner"
            }, [_vm._v("\n            " + _vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit) + "\n          ")])]) : _vm._e()], 2), _vm.validateState ? _c("i", {
              staticClass: "el-input__icon",
              class: ["el-input__validateIcon", _vm.validateIcon]
            }) : _vm._e()]) : _vm._e(), _vm.$slots.append ? _c("div", {
              staticClass: "el-input-group__append"
            }, [_vm._t("append")], 2) : _vm._e()] : _c("textarea", _vm._b({
              ref: "textarea",
              staticClass: "el-textarea__inner",
              style: _vm.textareaStyle,
              attrs: {
                tabindex: _vm.tabindex,
                disabled: _vm.inputDisabled,
                readonly: _vm.readonly,
                autocomplete: _vm.autoComplete || _vm.autocomplete,
                "aria-label": _vm.label
              },
              on: {
                compositionstart: _vm.handleCompositionStart,
                compositionupdate: _vm.handleCompositionUpdate,
                compositionend: _vm.handleCompositionEnd,
                input: _vm.handleInput,
                focus: _vm.handleFocus,
                blur: _vm.handleBlur,
                change: _vm.handleChange
              }
            }, "textarea", _vm.$attrs, false)), _vm.isWordLimitVisible && _vm.type === "textarea" ? _c("span", {
              staticClass: "el-input__count"
            }, [_vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))]) : _vm._e()], 2);
          };
          var staticRenderFns = [];
          render._withStripped = true;

          // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

          // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
          var emitter_ = __webpack_require__(4);
          var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

          // EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
          var migrating_ = __webpack_require__(11);
          var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

          // CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
          var hiddenTextarea = void 0;
          var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
          var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
          function calculateNodeStyling(targetElement) {
            var style = window.getComputedStyle(targetElement);
            var boxSizing = style.getPropertyValue('box-sizing');
            var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
            var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
            var contextStyle = CONTEXT_STYLE.map(function (name) {
              return name + ':' + style.getPropertyValue(name);
            }).join(';');
            return {
              contextStyle: contextStyle,
              paddingSize: paddingSize,
              borderSize: borderSize,
              boxSizing: boxSizing
            };
          }
          function calcTextareaHeight(targetElement) {
            var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (!hiddenTextarea) {
              hiddenTextarea = document.createElement('textarea');
              document.body.appendChild(hiddenTextarea);
            }
            var _calculateNodeStyling = calculateNodeStyling(targetElement),
              paddingSize = _calculateNodeStyling.paddingSize,
              borderSize = _calculateNodeStyling.borderSize,
              boxSizing = _calculateNodeStyling.boxSizing,
              contextStyle = _calculateNodeStyling.contextStyle;
            hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
            hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
            var height = hiddenTextarea.scrollHeight;
            var result = {};
            if (boxSizing === 'border-box') {
              height = height + borderSize;
            } else if (boxSizing === 'content-box') {
              height = height - paddingSize;
            }
            hiddenTextarea.value = '';
            var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
            if (minRows !== null) {
              var minHeight = singleRowHeight * minRows;
              if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
              }
              height = Math.max(minHeight, height);
              result.minHeight = minHeight + 'px';
            }
            if (maxRows !== null) {
              var maxHeight = singleRowHeight * maxRows;
              if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
              }
              height = Math.min(maxHeight, height);
            }
            result.height = height + 'px';
            hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
            hiddenTextarea = null;
            return result;
          }
          // EXTERNAL MODULE: external "element-ui/lib/utils/merge"
          var merge_ = __webpack_require__(9);
          var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

          // EXTERNAL MODULE: external "element-ui/lib/utils/shared"
          var shared_ = __webpack_require__(21);

          // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //

          /* harmony default export */
          var inputvue_type_script_lang_js_ = {
            name: 'ElInput',
            componentName: 'ElInput',
            mixins: [emitter_default.a, migrating_default.a],
            inheritAttrs: false,
            inject: {
              elForm: {
                default: ''
              },
              elFormItem: {
                default: ''
              }
            },
            data: function data() {
              return {
                textareaCalcStyle: {},
                hovering: false,
                focused: false,
                isComposing: false,
                passwordVisible: false
              };
            },
            props: {
              value: [String, Number],
              size: String,
              resize: String,
              form: String,
              disabled: Boolean,
              readonly: Boolean,
              type: {
                type: String,
                default: 'text'
              },
              autosize: {
                type: [Boolean, Object],
                default: false
              },
              autocomplete: {
                type: String,
                default: 'off'
              },
              /** @Deprecated in next major version */
              autoComplete: {
                type: String,
                validator: function validator(val) {
                  return true;
                }
              },
              validateEvent: {
                type: Boolean,
                default: true
              },
              suffixIcon: String,
              prefixIcon: String,
              label: String,
              clearable: {
                type: Boolean,
                default: false
              },
              showPassword: {
                type: Boolean,
                default: false
              },
              showWordLimit: {
                type: Boolean,
                default: false
              },
              tabindex: String
            },
            computed: {
              _elFormItemSize: function _elFormItemSize() {
                return (this.elFormItem || {}).elFormItemSize;
              },
              validateState: function validateState() {
                return this.elFormItem ? this.elFormItem.validateState : '';
              },
              needStatusIcon: function needStatusIcon() {
                return this.elForm ? this.elForm.statusIcon : false;
              },
              validateIcon: function validateIcon() {
                return {
                  validating: 'el-icon-loading',
                  success: 'el-icon-circle-check',
                  error: 'el-icon-circle-close'
                }[this.validateState];
              },
              textareaStyle: function textareaStyle() {
                return merge_default()({}, this.textareaCalcStyle, {
                  resize: this.resize
                });
              },
              inputSize: function inputSize() {
                return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
              },
              inputDisabled: function inputDisabled() {
                return this.disabled || (this.elForm || {}).disabled;
              },
              nativeInputValue: function nativeInputValue() {
                return this.value === null || this.value === undefined ? '' : String(this.value);
              },
              showClear: function showClear() {
                return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
              },
              showPwdVisible: function showPwdVisible() {
                return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
              },
              isWordLimitVisible: function isWordLimitVisible() {
                return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
              },
              upperLimit: function upperLimit() {
                return this.$attrs.maxlength;
              },
              textLength: function textLength() {
                if (typeof this.value === 'number') {
                  return String(this.value).length;
                }
                return (this.value || '').length;
              },
              inputExceed: function inputExceed() {
                // show exceed style if length of initial value greater then maxlength
                return this.isWordLimitVisible && this.textLength > this.upperLimit;
              }
            },
            watch: {
              value: function value(val) {
                this.$nextTick(this.resizeTextarea);
                if (this.validateEvent) {
                  this.dispatch('ElFormItem', 'el.form.change', [val]);
                }
              },
              // native input value is set explicitly
              // do not use v-model / :value in template
              // see: https://github.com/ElemeFE/element/issues/14521
              nativeInputValue: function nativeInputValue() {
                this.setNativeInputValue();
              },
              // when change between <input> and <textarea>,
              // update DOM dependent value and styles
              // https://github.com/ElemeFE/element/issues/14857
              type: function type() {
                var _this = this;
                this.$nextTick(function () {
                  _this.setNativeInputValue();
                  _this.resizeTextarea();
                  _this.updateIconOffset();
                });
              }
            },
            methods: {
              focus: function focus() {
                this.getInput().focus();
              },
              blur: function blur() {
                this.getInput().blur();
              },
              getMigratingConfig: function getMigratingConfig() {
                return {
                  props: {
                    'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
                    'on-icon-click': 'on-icon-click is removed.'
                  },
                  events: {
                    'click': 'click is removed.'
                  }
                };
              },
              handleBlur: function handleBlur(event) {
                this.focused = false;
                this.$emit('blur', event);
                if (this.validateEvent) {
                  this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
                }
              },
              select: function select() {
                this.getInput().select();
              },
              resizeTextarea: function resizeTextarea() {
                if (this.$isServer) return;
                var autosize = this.autosize,
                  type = this.type;
                if (type !== 'textarea') return;
                if (!autosize) {
                  this.textareaCalcStyle = {
                    minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                  };
                  return;
                }
                var minRows = autosize.minRows;
                var maxRows = autosize.maxRows;
                this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
              },
              setNativeInputValue: function setNativeInputValue() {
                var input = this.getInput();
                if (!input) return;
                if (input.value === this.nativeInputValue) return;
                input.value = this.nativeInputValue;
              },
              handleFocus: function handleFocus(event) {
                this.focused = true;
                this.$emit('focus', event);
              },
              handleCompositionStart: function handleCompositionStart(event) {
                this.$emit('compositionstart', event);
                this.isComposing = true;
              },
              handleCompositionUpdate: function handleCompositionUpdate(event) {
                this.$emit('compositionupdate', event);
                var text = event.target.value;
                var lastCharacter = text[text.length - 1] || '';
                this.isComposing = !Object(shared_["isKorean"])(lastCharacter);
              },
              handleCompositionEnd: function handleCompositionEnd(event) {
                this.$emit('compositionend', event);
                if (this.isComposing) {
                  this.isComposing = false;
                  this.handleInput(event);
                }
              },
              handleInput: function handleInput(event) {
                // should not emit input during composition
                // see: https://github.com/ElemeFE/element/issues/10516
                if (this.isComposing) return;

                // hack for https://github.com/ElemeFE/element/issues/8548
                // should remove the following line when we don't support IE
                if (event.target.value === this.nativeInputValue) return;
                this.$emit('input', event.target.value);

                // ensure native input value is controlled
                // see: https://github.com/ElemeFE/element/issues/12850
                this.$nextTick(this.setNativeInputValue);
              },
              handleChange: function handleChange(event) {
                this.$emit('change', event.target.value);
              },
              calcIconOffset: function calcIconOffset(place) {
                var elList = [].slice.call(this.$el.querySelectorAll('.el-input__' + place) || []);
                if (!elList.length) return;
                var el = null;
                for (var i = 0; i < elList.length; i++) {
                  if (elList[i].parentNode === this.$el) {
                    el = elList[i];
                    break;
                  }
                }
                if (!el) return;
                var pendantMap = {
                  suffix: 'append',
                  prefix: 'prepend'
                };
                var pendant = pendantMap[place];
                if (this.$slots[pendant]) {
                  el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)';
                } else {
                  el.removeAttribute('style');
                }
              },
              updateIconOffset: function updateIconOffset() {
                this.calcIconOffset('prefix');
                this.calcIconOffset('suffix');
              },
              clear: function clear() {
                this.$emit('input', '');
                this.$emit('change', '');
                this.$emit('clear');
              },
              handlePasswordVisible: function handlePasswordVisible() {
                var _this2 = this;
                this.passwordVisible = !this.passwordVisible;
                this.$nextTick(function () {
                  _this2.focus();
                });
              },
              getInput: function getInput() {
                return this.$refs.input || this.$refs.textarea;
              },
              getSuffixVisible: function getSuffixVisible() {
                return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
              }
            },
            created: function created() {
              this.$on('inputSelect', this.select);
            },
            mounted: function mounted() {
              this.setNativeInputValue();
              this.resizeTextarea();
              this.updateIconOffset();
            },
            updated: function updated() {
              this.$nextTick(this.updateIconOffset);
            }
          };
          // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
          /* harmony default export */
          var src_inputvue_type_script_lang_js_ = inputvue_type_script_lang_js_;
          // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
          var componentNormalizer = __webpack_require__(0);

          // CONCATENATED MODULE: ./packages/input/src/input.vue

          /* normalize component */

          var component = Object(componentNormalizer["a" /* default */])(src_inputvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
          component.options.__file = "packages/input/src/input.vue";
          /* harmony default export */
          var input = component.exports;
          // CONCATENATED MODULE: ./packages/input/index.js

          /* istanbul ignore next */
          input.install = function (Vue) {
            Vue.component(input.name, input);
          };

          /* harmony default export */
          __webpack_exports__["default"] = input;

          /***/
        },

        /***/9: /***/function (module, exports) {
          module.exports = requireMerge();

          /***/
        }

        /******/
      });
    })(input);
    return input.exports;
  }

  var clickoutside = {};

  var hasRequiredClickoutside;
  function requireClickoutside() {
    if (hasRequiredClickoutside) return clickoutside;
    hasRequiredClickoutside = 1;
    clickoutside.__esModule = true;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _dom = requireDom();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var nodeList = [];
    var ctx = '@@clickoutsideContext';
    var startClick = void 0;
    var seed = 0;
    !_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mousedown', function (e) {
      return startClick = e;
    });
    !_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mouseup', function (e) {
      nodeList.forEach(function (node) {
        return node[ctx].documentHandler(e, startClick);
      });
    });
    function createDocumentHandler(el, binding, vnode) {
      return function () {
        var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;
        if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
          vnode.context[el[ctx].methodName]();
        } else {
          el[ctx].bindingFn && el[ctx].bindingFn();
        }
      };
    }

    /**
     * v-clickoutside
     * @desc 点击元素外面才会触发的事件
     * @example
     * ```vue
     * <div v-element-clickoutside="handleClose">
     * ```
     */
    clickoutside.default = {
      bind: function bind(el, binding, vnode) {
        nodeList.push(el);
        var id = seed++;
        el[ctx] = {
          id: id,
          documentHandler: createDocumentHandler(el, binding, vnode),
          methodName: binding.expression,
          bindingFn: binding.value
        };
      },
      update: function update(el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
      },
      unbind: function unbind(el) {
        var len = nodeList.length;
        for (var i = 0; i < len; i++) {
          if (nodeList[i][ctx].id === el[ctx].id) {
            nodeList.splice(i, 1);
            break;
          }
        }
        delete el[ctx];
      }
    };
    return clickoutside;
  }

  var focus = {};

  var hasRequiredFocus;
  function requireFocus() {
    if (hasRequiredFocus) return focus;
    hasRequiredFocus = 1;
    focus.__esModule = true;
    focus.default = function (ref) {
      return {
        methods: {
          focus: function focus() {
            this.$refs[ref].focus();
          }
        }
      };
    };
    return focus;
  }

  var scrollIntoView = {};

  var hasRequiredScrollIntoView;
  function requireScrollIntoView() {
    if (hasRequiredScrollIntoView) return scrollIntoView;
    hasRequiredScrollIntoView = 1;
    scrollIntoView.__esModule = true;
    scrollIntoView.default = scrollIntoView$1;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function scrollIntoView$1(container, selected) {
      if (_vue2.default.prototype.$isServer) return;
      if (!selected) {
        container.scrollTop = 0;
        return;
      }
      var offsetParents = [];
      var pointer = selected.offsetParent;
      while (pointer && container !== pointer && container.contains(pointer)) {
        offsetParents.push(pointer);
        pointer = pointer.offsetParent;
      }
      var top = selected.offsetTop + offsetParents.reduce(function (prev, curr) {
        return prev + curr.offsetTop;
      }, 0);
      var bottom = top + selected.offsetHeight;
      var viewRectTop = container.scrollTop;
      var viewRectBottom = viewRectTop + container.clientHeight;
      if (top < viewRectTop) {
        container.scrollTop = top;
      } else if (bottom > viewRectBottom) {
        container.scrollTop = bottom - container.clientHeight;
      }
    }
    return scrollIntoView;
  }

  var tag = {exports: {}};

  var hasRequiredTag;
  function requireTag() {
    if (hasRequiredTag) return tag.exports;
    hasRequiredTag = 1;
    (function (module) {
      module.exports = /******/function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
          /******/
          /******/ // Check if module is in cache
          /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/
          var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/
          };
          /******/
          /******/ // Execute the module function
          /******/
          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          /******/ // Flag the module as loaded
          /******/
          module.l = true;
          /******/
          /******/ // Return the exports of the module
          /******/
          return module.exports;
          /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
          /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
              enumerable: true,
              get: getter
            });
            /******/
          }
          /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = function (exports) {
          /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function (value, mode) {
          /******/if (mode & 1) value = __webpack_require__(value);
          /******/
          if (mode & 8) return value;
          /******/
          if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
          /******/
          var ns = Object.create(null);
          /******/
          __webpack_require__.r(ns);
          /******/
          Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
          });
          /******/
          if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
          /******/
          return ns;
          /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
          /******/var getter = module && module.__esModule ? /******/function getDefault() {
            return module['default'];
          } : /******/function getModuleExports() {
            return module;
          };
          /******/
          __webpack_require__.d(getter, 'a', getter);
          /******/
          return getter;
          /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "/dist/";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 130);
        /******/
      }
      /************************************************************************/
      /******/({
        /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

          /* harmony export (binding) */
          __webpack_require__.d(__webpack_exports__, "a", function () {
            return normalizeComponent;
          });
          /* globals __VUE_SSR_CONTEXT__ */

          // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
          // This module is a runtime utility for cleaner component module output and will
          // be included in the final webpack user bundle.

          function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
          shadowMode /* vue-cli only */) {
            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

            // render functions
            if (render) {
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              options._compiled = true;
            }

            // functional template
            if (functionalTemplate) {
              options.functional = true;
            }

            // scopedId
            if (scopeId) {
              options._scopeId = 'data-v-' + scopeId;
            }
            var hook;
            if (moduleIdentifier) {
              // server build
              hook = function (context) {
                // 2.3 injection
                context = context ||
                // cached call
                this.$vnode && this.$vnode.ssrContext ||
                // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (injectStyles) {
                  injectStyles.call(this, context);
                }
                // register component module identifier for async chunk inferrence
                if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
                }
              };
              // used by ssr in case component is cached and beforeCreate
              // never gets called
              options._ssrRegister = hook;
            } else if (injectStyles) {
              hook = shadowMode ? function () {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              } : injectStyles;
            }
            if (hook) {
              if (options.functional) {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                options._injectStyles = hook;
                // register for functioal component in vue file
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
                };
              } else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }
            return {
              exports: scriptExports,
              options: options
            };
          }

          /***/
        },

        /***/130: /***/function (module, __webpack_exports__, __webpack_require__) {

          __webpack_require__.r(__webpack_exports__);

          // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=script&lang=js&

          /* harmony default export */
          var tagvue_type_script_lang_js_ = {
            name: 'ElTag',
            props: {
              text: String,
              closable: Boolean,
              type: String,
              hit: Boolean,
              disableTransitions: Boolean,
              color: String,
              size: String,
              effect: {
                type: String,
                default: 'light',
                validator: function validator(val) {
                  return ['dark', 'light', 'plain'].indexOf(val) !== -1;
                }
              }
            },
            methods: {
              handleClose: function handleClose(event) {
                event.stopPropagation();
                this.$emit('close', event);
              },
              handleClick: function handleClick(event) {
                this.$emit('click', event);
              }
            },
            computed: {
              tagSize: function tagSize() {
                return this.size || (this.$ELEMENT || {}).size;
              }
            },
            render: function render(h) {
              var type = this.type,
                tagSize = this.tagSize,
                hit = this.hit,
                effect = this.effect;
              var classes = ['el-tag', type ? 'el-tag--' + type : '', tagSize ? 'el-tag--' + tagSize : '', effect ? 'el-tag--' + effect : '', hit && 'is-hit'];
              var tagEl = h('span', {
                'class': classes,
                style: {
                  backgroundColor: this.color
                },
                on: {
                  'click': this.handleClick
                }
              }, [this.$slots.default, this.closable && h('i', {
                'class': 'el-tag__close el-icon-close',
                on: {
                  'click': this.handleClose
                }
              })]);
              return this.disableTransitions ? tagEl : h('transition', {
                attrs: {
                  name: 'el-zoom-in-center'
                }
              }, [tagEl]);
            }
          };
          // CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=script&lang=js&
          /* harmony default export */
          var src_tagvue_type_script_lang_js_ = tagvue_type_script_lang_js_;
          // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
          var componentNormalizer = __webpack_require__(0);

          // CONCATENATED MODULE: ./packages/tag/src/tag.vue
          var render, staticRenderFns;

          /* normalize component */

          var component = Object(componentNormalizer["a" /* default */])(src_tagvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
          component.options.__file = "packages/tag/src/tag.vue";
          /* harmony default export */
          var tag = component.exports;
          // CONCATENATED MODULE: ./packages/tag/index.js

          /* istanbul ignore next */
          tag.install = function (Vue) {
            Vue.component(tag.name, tag);
          };

          /* harmony default export */
          __webpack_exports__["default"] = tag;

          /***/
        }

        /******/
      });
    })(tag);
    return tag.exports;
  }

  var vuePopper = {};

  var popper = {exports: {}};

  var hasRequiredPopper;
  function requirePopper() {
    if (hasRequiredPopper) return popper.exports;
    hasRequiredPopper = 1;
    (function (module) {

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      (function (root, factory) {
        if ((_typeof(module)) === 'object' && module.exports) {
          // Node. Does not work with strict CommonJS, but
          // only CommonJS-like environments that support module.exports,
          // like Node.
          module.exports = factory();
        } else {
          // Browser globals (root is window)
          root.Popper = factory();
        }
      })(undefined, function () {

        var root = window;

        // default options
        var DEFAULTS = {
          // placement of the popper
          placement: 'bottom',
          gpuAcceleration: true,
          // shift popper from its origin by the given amount of pixels (can be negative)
          offset: 0,
          // the element which will act as boundary of the popper
          boundariesElement: 'viewport',
          // amount of pixel used to define a minimum distance between the boundaries and the popper
          boundariesPadding: 5,
          // popper will try to prevent overflow following this order,
          // by default, then, it could overflow on the left and on top of the boundariesElement
          preventOverflowOrder: ['left', 'right', 'top', 'bottom'],
          // the behavior used by flip to change the placement of the popper
          flipBehavior: 'flip',
          arrowElement: '[x-arrow]',
          arrowOffset: 0,
          // list of functions used to modify the offsets before they are applied to the popper
          modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],
          modifiersIgnored: [],
          forceAbsolute: false
        };

        /**
         * Create a new Popper.js instance
         * @constructor Popper
         * @param {HTMLElement} reference - The reference element used to position the popper
         * @param {HTMLElement|Object} popper
         *      The HTML element used as popper, or a configuration used to generate the popper.
         * @param {String} [popper.tagName='div'] The tag name of the generated popper.
         * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
         * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
         * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
         * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
         * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
         * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
         * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
         * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
         * @param {Object} options
         * @param {String} [options.placement=bottom]
         *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
         *      left(-start, -end)`
         *
         * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
         *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
         *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
         *      reference element.
         *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
         *
         * @param {Boolean} [options.gpuAcceleration=true]
         *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
         *      browser to use the GPU to accelerate the rendering.
         *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
         *
         * @param {Number} [options.offset=0]
         *      Amount of pixels the popper will be shifted (can be negative).
         *
         * @param {String|Element} [options.boundariesElement='viewport']
         *      The element which will define the boundaries of the popper position, the popper will never be placed outside
         *      of the defined boundaries (except if `keepTogether` is enabled)
         *
         * @param {Number} [options.boundariesPadding=5]
         *      Additional padding for the boundaries
         *
         * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
         *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
         *      this means that the last ones will never overflow
         *
         * @param {String|Array} [options.flipBehavior='flip']
         *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
         *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
         *      its axis (`right - left`, `top - bottom`).
         *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
         *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
         *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
         *
         * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
         *      List of functions used to modify the data before they are applied to the popper, add your custom functions
         *      to this array to edit the offsets and placement.
         *      The function should reflect the @params and @returns of preventOverflow
         *
         * @param {Array} [options.modifiersIgnored=[]]
         *      Put here any built-in modifier name you want to exclude from the modifiers list
         *      The function should reflect the @params and @returns of preventOverflow
         *
         * @param {Boolean} [options.removeOnDestroy=false]
         *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
         */
        function Popper(reference, popper, options) {
          this._reference = reference.jquery ? reference[0] : reference;
          this.state = {};

          // if the popper variable is a configuration object, parse it to generate an HTMLElement
          // generate a default popper if is not defined
          var isNotDefined = typeof popper === 'undefined' || popper === null;
          var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
          if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
          }
          // otherwise, use the given HTMLElement as popper
          else {
            this._popper = popper.jquery ? popper[0] : popper;
          }

          // with {} we create a new object with the options inside it
          this._options = Object.assign({}, DEFAULTS, options);

          // refactoring modifiers' list
          this._options.modifiers = this._options.modifiers.map(function (modifier) {
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
              this._popper.setAttribute('x-placement', this._options.placement);
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier;
          }.bind(this));

          // make sure to apply the popper position before any computation
          this.state.position = this._getPosition(this._popper, this._reference);
          setStyle(this._popper, {
            position: this.state.position,
            top: 0
          });

          // fire the first update to position the popper in the right place
          this.update();

          // setup event listeners, they will take care of update the position in specific situations
          this._setupEventListeners();
          return this;
        }

        //
        // Methods
        //
        /**
         * Destroy the popper
         * @method
         * @memberof Popper
         */
        Popper.prototype.destroy = function () {
          this._popper.removeAttribute('x-placement');
          this._popper.style.left = '';
          this._popper.style.position = '';
          this._popper.style.top = '';
          this._popper.style[getSupportedPropertyName('transform')] = '';
          this._removeEventListeners();

          // remove the popper if user explicity asked for the deletion on destroy
          if (this._options.removeOnDestroy) {
            this._popper.remove();
          }
          return this;
        };

        /**
         * Updates the position of the popper, computing the new offsets and applying the new style
         * @method
         * @memberof Popper
         */
        Popper.prototype.update = function () {
          var data = {
            instance: this,
            styles: {}
          };

          // store placement inside the data object, modifiers will be able to edit `placement` if needed
          // and refer to _originalPlacement to know the original value
          data.placement = this._options.placement;
          data._originalPlacement = this._options.placement;

          // compute the popper and reference offsets and put them inside data.offsets
          data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

          // get boundaries
          data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);
          data = this.runModifiers(data, this._options.modifiers);
          if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
          }
        };

        /**
         * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
         * @method
         * @memberof Popper
         * @param {Function} callback
         */
        Popper.prototype.onCreate = function (callback) {
          // the createCallbacks return as first argument the popper instance
          callback(this);
          return this;
        };

        /**
         * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
         * used to style popper and its arrow.
         * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
         * @method
         * @memberof Popper
         * @param {Function} callback
         */
        Popper.prototype.onUpdate = function (callback) {
          this.state.updateCallback = callback;
          return this;
        };

        /**
         * Helper used to generate poppers from a configuration file
         * @method
         * @memberof Popper
         * @param config {Object} configuration
         * @returns {HTMLElement} popper
         */
        Popper.prototype.parse = function (config) {
          var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
          };
          config = Object.assign({}, defaultConfig, config);
          var d = root.document;
          var popper = d.createElement(config.tagName);
          addClassNames(popper, config.classNames);
          addAttributes(popper, config.attributes);
          if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
          } else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
          } else {
            popper.textContent = config.content;
          }
          if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
          }
          var parent = config.parent.jquery ? config.parent[0] : config.parent;

          // if the given parent is a string, use it to match an element
          // if more than one element is matched, the first one will be used as parent
          // if no elements are matched, the script will throw an error
          if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
              console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
              throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
          }
          // if the given parent is a DOM nodes list or an array of nodes with more than one element,
          // the first one will be used as parent
          if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
          }

          // append the generated popper to its parent
          parent.appendChild(popper);
          return popper;

          /**
           * Adds class names to the given element
           * @function
           * @ignore
           * @param {HTMLElement} target
           * @param {Array} classes
           */
          function addClassNames(element, classNames) {
            classNames.forEach(function (className) {
              element.classList.add(className);
            });
          }

          /**
           * Adds attributes to the given element
           * @function
           * @ignore
           * @param {HTMLElement} target
           * @param {Array} attributes
           * @example
           * addAttributes(element, [ 'data-info:foobar' ]);
           */
          function addAttributes(element, attributes) {
            attributes.forEach(function (attribute) {
              element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
          }
        };

        /**
         * Helper used to get the position which will be applied to the popper
         * @method
         * @memberof Popper
         * @param config {HTMLElement} popper element
         * @param reference {HTMLElement} reference element
         * @returns {String} position
         */
        Popper.prototype._getPosition = function (popper, reference) {
          getOffsetParent(reference);
          if (this._options.forceAbsolute) {
            return 'absolute';
          }

          // Decide if the popper will be fixed
          // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
          var isParentFixed = isFixed(reference);
          return isParentFixed ? 'fixed' : 'absolute';
        };

        /**
         * Get offsets to the popper
         * @method
         * @memberof Popper
         * @access private
         * @param {Element} popper - the popper element
         * @param {Element} reference - the reference element (the popper will be relative to this)
         * @returns {Object} An object containing the offsets which will be applied to the popper
         */
        Popper.prototype._getOffsets = function (popper, reference, placement) {
          placement = placement.split('-')[0];
          var popperOffsets = {};
          popperOffsets.position = this.state.position;
          var isParentFixed = popperOffsets.position === 'fixed';

          //
          // Get reference element position
          //
          var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

          //
          // Get popper sizes
          //
          var popperRect = getOuterSizes(popper);

          //
          // Compute offsets of popper
          //

          // depending by the popper placement we have to compute its offsets slightly differently
          if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
              popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
              popperOffsets.left = referenceOffsets.right;
            }
          } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
              popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
              popperOffsets.top = referenceOffsets.bottom;
            }
          }

          // Add width and height to our offsets object
          popperOffsets.width = popperRect.width;
          popperOffsets.height = popperRect.height;
          return {
            popper: popperOffsets,
            reference: referenceOffsets
          };
        };

        /**
         * Setup needed event listeners used to update the popper position
         * @method
         * @memberof Popper
         * @access private
         */
        Popper.prototype._setupEventListeners = function () {
          // NOTE: 1 DOM access here
          this.state.updateBound = this.update.bind(this);
          root.addEventListener('resize', this.state.updateBound);
          // if the boundariesElement is window we don't need to listen for the scroll event
          if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
              target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = target;
          }
        };

        /**
         * Remove event listeners used to update the popper position
         * @method
         * @memberof Popper
         * @access private
         */
        Popper.prototype._removeEventListeners = function () {
          // NOTE: 1 DOM access here
          root.removeEventListener('resize', this.state.updateBound);
          if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = null;
          }
          this.state.updateBound = null;
        };

        /**
         * Computed the boundaries limits and return them
         * @method
         * @memberof Popper
         * @access private
         * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
         * @param {Number} padding - Boundaries padding
         * @param {Element} boundariesElement - Element used to define the boundaries
         * @returns {Object} Coordinates of the boundaries
         */
        Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
          // NOTE: 1 DOM access here
          var boundaries = {};
          var width, height;
          if (boundariesElement === 'window') {
            var body = root.document.body,
              html = root.document.documentElement;
            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
            boundaries = {
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
          } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function getScrollTopValue(element) {
              return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
            };
            var getScrollLeftValue = function getScrollLeftValue(element) {
              return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
            };

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);
            boundaries = {
              top: 0 - (offsetParentRect.top - scrollTop),
              right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
              bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
              left: 0 - (offsetParentRect.left - scrollLeft)
            };
          } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
              boundaries = {
                top: 0,
                left: 0,
                right: boundariesElement.clientWidth,
                bottom: boundariesElement.clientHeight
              };
            } else {
              boundaries = getOffsetRect(boundariesElement);
            }
          }
          boundaries.left += padding;
          boundaries.right -= padding;
          boundaries.top = boundaries.top + padding;
          boundaries.bottom = boundaries.bottom - padding;
          return boundaries;
        };

        /**
         * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
         * @method
         * @memberof Popper
         * @access public
         * @param {Object} data
         * @param {Array} modifiers
         * @param {Function} ends
         */
        Popper.prototype.runModifiers = function (data, modifiers, ends) {
          var modifiersToRun = modifiers.slice();
          if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
          }
          modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
              data = modifier.call(this, data);
            }
          }.bind(this));
          return data;
        };

        /**
         * Helper used to know if the given modifier depends from another one.
         * @method
         * @memberof Popper
         * @param {String} requesting - name of requesting modifier
         * @param {String} requested - name of requested modifier
         * @returns {Boolean}
         */
        Popper.prototype.isModifierRequired = function (requesting, requested) {
          var index = getArrayKeyIndex(this._options.modifiers, requesting);
          return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested;
          }).length;
        };

        //
        // Modifiers
        //

        /**
         * Modifiers list
         * @namespace Popper.modifiers
         * @memberof Popper
         * @type {Object}
         */
        Popper.prototype.modifiers = {};

        /**
         * Apply the computed styles to the popper element
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @returns {Object} The same data object
         */
        Popper.prototype.modifiers.applyStyle = function (data) {
          // apply the final offsets to the popper
          // NOTE: 1 DOM access here
          var styles = {
            position: data.offsets.popper.position
          };

          // round top and left to avoid blurry text
          var left = Math.round(data.offsets.popper.left);
          var top = Math.round(data.offsets.popper.top);

          // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
          // we automatically use the supported prefixed version if needed
          var prefixedProperty;
          if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
          }
          // othwerise, we use the standard `left` and `top` properties
          else {
            styles.left = left;
            styles.top = top;
          }

          // any property present in `data.styles` will be applied to the popper,
          // in this way we can make the 3rd party modifiers add custom styles to it
          // Be aware, modifiers could override the properties defined in the previous
          // lines of this modifier!
          Object.assign(styles, data.styles);
          setStyle(this._popper, styles);

          // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
          // NOTE: 1 DOM access here
          this._popper.setAttribute('x-placement', data.placement);

          // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
          if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
          }
          return data;
        };

        /**
         * Modifier used to shift the popper on the start or end of its reference element side
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.shift = function (data) {
          var placement = data.placement;
          var basePlacement = placement.split('-')[0];
          var shiftVariation = placement.split('-')[1];

          // if shift shiftVariation is specified, run the modifier
          if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);
            var shiftOffsets = {
              y: {
                start: {
                  top: reference.top
                },
                end: {
                  top: reference.top + reference.height - popper.height
                }
              },
              x: {
                start: {
                  left: reference.left
                },
                end: {
                  left: reference.left + reference.width - popper.width
                }
              }
            };
            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';
            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
          }
          return data;
        };

        /**
         * Modifier used to make sure the popper does not overflows from it's boundaries
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by `update` method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.preventOverflow = function (data) {
          var order = this._options.preventOverflowOrder;
          var popper = getPopperClientRect(data.offsets.popper);
          var check = {
            left: function left() {
              var left = popper.left;
              if (popper.left < data.boundaries.left) {
                left = Math.max(popper.left, data.boundaries.left);
              }
              return {
                left: left
              };
            },
            right: function right() {
              var left = popper.left;
              if (popper.right > data.boundaries.right) {
                left = Math.min(popper.left, data.boundaries.right - popper.width);
              }
              return {
                left: left
              };
            },
            top: function top() {
              var top = popper.top;
              if (popper.top < data.boundaries.top) {
                top = Math.max(popper.top, data.boundaries.top);
              }
              return {
                top: top
              };
            },
            bottom: function bottom() {
              var top = popper.top;
              if (popper.bottom > data.boundaries.bottom) {
                top = Math.min(popper.top, data.boundaries.bottom - popper.height);
              }
              return {
                top: top
              };
            }
          };
          order.forEach(function (direction) {
            data.offsets.popper = Object.assign(popper, check[direction]());
          });
          return data;
        };

        /**
         * Modifier used to make sure the popper is always near its reference
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by _update method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.keepTogether = function (data) {
          var popper = getPopperClientRect(data.offsets.popper);
          var reference = data.offsets.reference;
          var f = Math.floor;
          if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
          }
          if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
          }
          if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
          }
          if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
          }
          return data;
        };

        /**
         * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
         * Requires the `preventOverflow` modifier before it in order to work.
         * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by _update method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.flip = function (data) {
          // check if preventOverflow is in the list of modifiers before the flip modifier.
          // otherwise flip would not work as expected.
          if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
          }
          if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
          }
          var placement = data.placement.split('-')[0];
          var placementOpposite = getOppositePlacement(placement);
          var variation = data.placement.split('-')[1] || '';
          var flipOrder = [];
          if (this._options.flipBehavior === 'flip') {
            flipOrder = [placement, placementOpposite];
          } else {
            flipOrder = this._options.flipBehavior;
          }
          flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
              return;
            }
            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);
            var popperOffsets = getPopperClientRect(data.offsets.popper);

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
              // we'll use this boolean to detect any flip loop
              data.flipped = true;
              data.placement = flipOrder[index + 1];
              if (variation) {
                data.placement += '-' + variation;
              }
              data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;
              data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
          }.bind(this));
          return data;
        };

        /**
         * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
         * The offsets will shift the popper on the side of its reference element.
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by _update method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.offset = function (data) {
          var offset = this._options.offset;
          var popper = data.offsets.popper;
          if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset;
          } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
          } else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset;
          } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
          }
          return data;
        };

        /**
         * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
         * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
         * @method
         * @memberof Popper.modifiers
         * @argument {Object} data - The data object generated by _update method
         * @returns {Object} The data object, properly modified
         */
        Popper.prototype.modifiers.arrow = function (data) {
          var arrow = this._options.arrowElement;
          var arrowOffset = this._options.arrowOffset;

          // if the arrowElement is a string, suppose it's a CSS selector
          if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
          }

          // if arrow element is not found, don't run the modifier
          if (!arrow) {
            return data;
          }

          // the arrow element must be child of its popper
          if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
          }

          // arrow depends on keepTogether in order to work
          if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
          }
          var arrowStyle = {};
          var placement = data.placement.split('-')[0];
          var popper = getPopperClientRect(data.offsets.popper);
          var reference = data.offsets.reference;
          var isVertical = ['left', 'right'].indexOf(placement) !== -1;
          var len = isVertical ? 'height' : 'width';
          var side = isVertical ? 'top' : 'left';
          var altSide = isVertical ? 'left' : 'top';
          var opSide = isVertical ? 'bottom' : 'right';
          var arrowSize = getOuterSizes(arrow)[len];

          //
          // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
          //

          // top/left side
          if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
          }
          // bottom/right side
          if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
          }

          // compute center of the popper
          var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);
          var sideValue = center - popper[side];

          // prevent arrow from being placed not contiguously to its popper
          sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
          arrowStyle[side] = sideValue;
          arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

          data.offsets.arrow = arrowStyle;
          data.arrowElement = arrow;
          return data;
        };

        //
        // Helpers
        //

        /**
         * Get the outer sizes of the given element (offset size + margins)
         * @function
         * @ignore
         * @argument {Element} element
         * @returns {Object} object containing width and height properties
         */
        function getOuterSizes(element) {
          // NOTE: 1 DOM access here
          var _display = element.style.display,
            _visibility = element.style.visibility;
          element.style.display = 'block';
          element.style.visibility = 'hidden';
          element.offsetWidth;

          // original method
          var styles = root.getComputedStyle(element);
          var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
          var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
          var result = {
            width: element.offsetWidth + y,
            height: element.offsetHeight + x
          };

          // reset element styles
          element.style.display = _display;
          element.style.visibility = _visibility;
          return result;
        }

        /**
         * Get the opposite placement of the given one/
         * @function
         * @ignore
         * @argument {String} placement
         * @returns {String} flipped placement
         */
        function getOppositePlacement(placement) {
          var hash = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
          };
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
          });
        }

        /**
         * Given the popper offsets, generate an output similar to getBoundingClientRect
         * @function
         * @ignore
         * @argument {Object} popperOffsets
         * @returns {Object} ClientRect like output
         */
        function getPopperClientRect(popperOffsets) {
          var offsets = Object.assign({}, popperOffsets);
          offsets.right = offsets.left + offsets.width;
          offsets.bottom = offsets.top + offsets.height;
          return offsets;
        }

        /**
         * Given an array and the key to find, returns its index
         * @function
         * @ignore
         * @argument {Array} arr
         * @argument keyToFind
         * @returns index or null
         */
        function getArrayKeyIndex(arr, keyToFind) {
          var i = 0,
            key;
          for (key in arr) {
            if (arr[key] === keyToFind) {
              return i;
            }
            i++;
          }
          return null;
        }

        /**
         * Get CSS computed property of the given element
         * @function
         * @ignore
         * @argument {Eement} element
         * @argument {String} property
         */
        function getStyleComputedProperty(element, property) {
          // NOTE: 1 DOM access here
          var css = root.getComputedStyle(element, null);
          return css[property];
        }

        /**
         * Returns the offset parent of the given element
         * @function
         * @ignore
         * @argument {Element} element
         * @returns {Element} offset parent
         */
        function getOffsetParent(element) {
          // NOTE: 1 DOM access here
          var offsetParent = element.offsetParent;
          return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
        }

        /**
         * Returns the scrolling parent of the given element
         * @function
         * @ignore
         * @argument {Element} element
         * @returns {Element} offset parent
         */
        function getScrollParent(element) {
          var parent = element.parentNode;
          if (!parent) {
            return element;
          }
          if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
              return root.document.body;
            } else {
              return root.document.documentElement;
            }
          }

          // Firefox want us to check `-x` and `-y` variations as well
          if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent;
          }
          return getScrollParent(element.parentNode);
        }

        /**
         * Check if the given element is fixed or is inside a fixed parent
         * @function
         * @ignore
         * @argument {Element} element
         * @argument {Element} customContainer
         * @returns {Boolean} answer to "isFixed?"
         */
        function isFixed(element) {
          if (element === root.document.body) {
            return false;
          }
          if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
          }
          return element.parentNode ? isFixed(element.parentNode) : element;
        }

        /**
         * Set the style to the given popper
         * @function
         * @ignore
         * @argument {Element} element - Element to apply the style to
         * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
         */
        function setStyle(element, styles) {
          function is_numeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
          }
          Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
              unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
          });
        }

        /**
         * Check if the given variable is a function
         * @function
         * @ignore
         * @argument {*} functionToCheck - variable to check
         * @returns {Boolean} answer to: is a function?
         */
        function isFunction(functionToCheck) {
          var getType = {};
          return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }

        /**
         * Get the position of the given element, relative to its offset parent
         * @function
         * @ignore
         * @param {Element} element
         * @return {Object} position - Coordinates of the element and its `scrollTop`
         */
        function getOffsetRect(element) {
          var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
          };
          elementRect.right = elementRect.left + elementRect.width;
          elementRect.bottom = elementRect.top + elementRect.height;

          // position
          return elementRect;
        }

        /**
         * Get bounding client rect of given element
         * @function
         * @ignore
         * @param {HTMLElement} element
         * @return {Object} client rect
         */
        function getBoundingClientRect(element) {
          var rect = element.getBoundingClientRect();

          // whether the IE version is lower than 11
          var isIE = navigator.userAgent.indexOf("MSIE") != -1;

          // fix ie document bounding top always 0 bug
          var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;
          return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
          };
        }

        /**
         * Given an element and one of its parents, return the offset
         * @function
         * @ignore
         * @param {HTMLElement} element
         * @param {HTMLElement} parent
         * @return {Object} rect
         */
        function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
          var elementRect = getBoundingClientRect(element);
          var parentRect = getBoundingClientRect(parent);
          if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
          }
          var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: elementRect.top - parentRect.top + elementRect.height,
            right: elementRect.left - parentRect.left + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
          };
          return rect;
        }

        /**
         * Get the prefixed supported property name
         * @function
         * @ignore
         * @argument {String} property (camelCase)
         * @returns {String} prefixed property (camelCase)
         */
        function getSupportedPropertyName(property) {
          var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];
          for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
              return toCheck;
            }
          }
          return null;
        }

        /**
         * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
         * objects to a target object. It will return the target object.
         * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
         * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
         * @function
         * @ignore
         */
        if (!Object.assign) {
          Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function value(target) {
              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
              }
              var to = Object(target);
              for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                  continue;
                }
                nextSource = Object(nextSource);
                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                  var nextKey = keysArray[nextIndex];
                  var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                  if (desc !== undefined && desc.enumerable) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
              return to;
            }
          });
        }
        return Popper;
      });
    })(popper);
    return popper.exports;
  }

  var hasRequiredVuePopper;
  function requireVuePopper() {
    if (hasRequiredVuePopper) return vuePopper;
    hasRequiredVuePopper = 1;
    vuePopper.__esModule = true;
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _popup = requirePopup();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var PopperJS = _vue2.default.prototype.$isServer ? function () {} : requirePopper();
    var stop = function stop(e) {
      return e.stopPropagation();
    };

    /**
     * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
     * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
     * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
     * @param {Boolean} [visible=false] Visibility of the popup element.
     * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
     */
    vuePopper.default = {
      props: {
        transformOrigin: {
          type: [Boolean, String],
          default: true
        },
        placement: {
          type: String,
          default: 'bottom'
        },
        boundariesPadding: {
          type: Number,
          default: 5
        },
        reference: {},
        popper: {},
        offset: {
          default: 0
        },
        value: Boolean,
        visibleArrow: Boolean,
        arrowOffset: {
          type: Number,
          default: 35
        },
        appendToBody: {
          type: Boolean,
          default: true
        },
        popperOptions: {
          type: Object,
          default: function _default() {
            return {
              gpuAcceleration: false
            };
          }
        }
      },
      data: function data() {
        return {
          showPopper: false,
          currentPlacement: ''
        };
      },
      watch: {
        value: {
          immediate: true,
          handler: function handler(val) {
            this.showPopper = val;
            this.$emit('input', val);
          }
        },
        showPopper: function showPopper(val) {
          if (this.disabled) return;
          val ? this.updatePopper() : this.destroyPopper();
          this.$emit('input', val);
        }
      },
      methods: {
        createPopper: function createPopper() {
          var _this = this;
          if (this.$isServer) return;
          this.currentPlacement = this.currentPlacement || this.placement;
          if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
            return;
          }
          var options = this.popperOptions;
          var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
          var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
          if (!reference && this.$slots.reference && this.$slots.reference[0]) {
            reference = this.referenceElm = this.$slots.reference[0].elm;
          }
          if (!popper || !reference) return;
          if (this.visibleArrow) this.appendArrow(popper);
          if (this.appendToBody) document.body.appendChild(this.popperElm);
          if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy();
          }
          options.placement = this.currentPlacement;
          options.offset = this.offset;
          options.arrowOffset = this.arrowOffset;
          this.popperJS = new PopperJS(reference, popper, options);
          this.popperJS.onCreate(function (_) {
            _this.$emit('created', _this);
            _this.resetTransformOrigin();
            _this.$nextTick(_this.updatePopper);
          });
          if (typeof options.onUpdate === 'function') {
            this.popperJS.onUpdate(options.onUpdate);
          }
          this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
          this.popperElm.addEventListener('click', stop);
        },
        updatePopper: function updatePopper() {
          var popperJS = this.popperJS;
          if (popperJS) {
            popperJS.update();
            if (popperJS._popper) {
              popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
            }
          } else {
            this.createPopper();
          }
        },
        doDestroy: function doDestroy(forceDestroy) {
          /* istanbul ignore if */
          if (!this.popperJS || this.showPopper && !forceDestroy) return;
          this.popperJS.destroy();
          this.popperJS = null;
        },
        destroyPopper: function destroyPopper() {
          if (this.popperJS) {
            this.resetTransformOrigin();
          }
        },
        resetTransformOrigin: function resetTransformOrigin() {
          if (!this.transformOrigin) return;
          var placementMap = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
          };
          var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
          var origin = placementMap[placement];
          this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
        },
        appendArrow: function appendArrow(element) {
          var hash = void 0;
          if (this.appended) {
            return;
          }
          this.appended = true;
          for (var item in element.attributes) {
            if (/^_v-/.test(element.attributes[item].name)) {
              hash = element.attributes[item].name;
              break;
            }
          }
          var arrow = document.createElement('div');
          if (hash) {
            arrow.setAttribute(hash, '');
          }
          arrow.setAttribute('x-arrow', '');
          arrow.className = 'popper__arrow';
          element.appendChild(arrow);
        }
      },
      beforeDestroy: function beforeDestroy() {
        this.doDestroy(true);
        if (this.popperElm && this.popperElm.parentNode === document.body) {
          this.popperElm.removeEventListener('click', stop);
          document.body.removeChild(this.popperElm);
        }
      },
      // call destroy in keep-alive mode
      deactivated: function deactivated() {
        this.$options.beforeDestroy[0].call(this);
      }
    };
    return vuePopper;
  }

  var locale$1 = {};

  var locale = {};

  var zhCN = {};

  var hasRequiredZhCN;
  function requireZhCN() {
    if (hasRequiredZhCN) return zhCN;
    hasRequiredZhCN = 1;
    zhCN.__esModule = true;
    zhCN.default = {
      el: {
        colorpicker: {
          confirm: '确定',
          clear: '清空'
        },
        datepicker: {
          now: '此刻',
          today: '今天',
          cancel: '取消',
          clear: '清空',
          confirm: '确定',
          selectDate: '选择日期',
          selectTime: '选择时间',
          startDate: '开始日期',
          startTime: '开始时间',
          endDate: '结束日期',
          endTime: '结束时间',
          prevYear: '前一年',
          nextYear: '后一年',
          prevMonth: '上个月',
          nextMonth: '下个月',
          year: '年',
          month1: '1 月',
          month2: '2 月',
          month3: '3 月',
          month4: '4 月',
          month5: '5 月',
          month6: '6 月',
          month7: '7 月',
          month8: '8 月',
          month9: '9 月',
          month10: '10 月',
          month11: '11 月',
          month12: '12 月',
          // week: '周次',
          weeks: {
            sun: '日',
            mon: '一',
            tue: '二',
            wed: '三',
            thu: '四',
            fri: '五',
            sat: '六'
          },
          months: {
            jan: '一月',
            feb: '二月',
            mar: '三月',
            apr: '四月',
            may: '五月',
            jun: '六月',
            jul: '七月',
            aug: '八月',
            sep: '九月',
            oct: '十月',
            nov: '十一月',
            dec: '十二月'
          }
        },
        select: {
          loading: '加载中',
          noMatch: '无匹配数据',
          noData: '无数据',
          placeholder: '请选择'
        },
        cascader: {
          noMatch: '无匹配数据',
          loading: '加载中',
          placeholder: '请选择',
          noData: '暂无数据'
        },
        pagination: {
          goto: '前往',
          pagesize: '条/页',
          total: '共 {total} 条',
          pageClassifier: '页'
        },
        messagebox: {
          title: '提示',
          confirm: '确定',
          cancel: '取消',
          error: '输入的数据不合法!'
        },
        upload: {
          deleteTip: '按 delete 键可删除',
          delete: '删除',
          preview: '查看图片',
          continue: '继续上传'
        },
        table: {
          emptyText: '暂无数据',
          confirmFilter: '筛选',
          resetFilter: '重置',
          clearFilter: '全部',
          sumText: '合计'
        },
        tree: {
          emptyText: '暂无数据'
        },
        transfer: {
          noMatch: '无匹配数据',
          noData: '无数据',
          titles: ['列表 1', '列表 2'],
          filterPlaceholder: '请输入搜索内容',
          noCheckedFormat: '共 {total} 项',
          hasCheckedFormat: '已选 {checked}/{total} 项'
        },
        image: {
          error: '加载失败'
        },
        pageHeader: {
          title: '返回'
        },
        popconfirm: {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        },
        empty: {
          description: '暂无数据'
        }
      }
    };
    return zhCN;
  }

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
  }
  function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function (e, i) {
      if (typeof destination[i] === 'undefined') {
        destination[i] = cloneIfNecessary(e, optionsArgument);
      } else if (isMergeableObject(e)) {
        destination[i] = deepmerge(target[i], e, optionsArgument);
      } else if (target.indexOf(e) === -1) {
        destination.push(cloneIfNecessary(e, optionsArgument));
      }
    });
    return destination;
  }
  function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
      Object.keys(target).forEach(function (key) {
        destination[key] = cloneIfNecessary(target[key], optionsArgument);
      });
    }
    Object.keys(source).forEach(function (key) {
      if (!isMergeableObject(source[key]) || !target[key]) {
        destination[key] = cloneIfNecessary(source[key], optionsArgument);
      } else {
        destination[key] = deepmerge(target[key], source[key], optionsArgument);
      }
    });
    return destination;
  }
  function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || {
      arrayMerge: defaultArrayMerge
    };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneIfNecessary(source, optionsArgument);
    } else if (sourceIsArray) {
      var arrayMerge = options.arrayMerge || defaultArrayMerge;
      return arrayMerge(target, source, optionsArgument);
    } else {
      return mergeObject(target, source, optionsArgument);
    }
  }
  deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
      throw new Error('first argument should be an array with at least two elements');
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, optionsArgument);
    });
  };
  var deepmerge_1 = deepmerge;

  var es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: deepmerge_1
  });

  var require$$2 = /*@__PURE__*/getAugmentedNamespace(es);

  var format = {};

  var hasRequiredFormat;
  function requireFormat() {
    if (hasRequiredFormat) return format;
    hasRequiredFormat = 1;
    format.__esModule = true;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    format.default = function (Vue) {
      /**
       * template
       *
       * @param {String} string
       * @param {Array} ...args
       * @return {String}
       */

      function template(string) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (args.length === 1 && _typeof(args[0]) === 'object') {
          args = args[0];
        }
        if (!args || !args.hasOwnProperty) {
          args = {};
        }
        return string.replace(RE_NARGS, function (match, prefix, i, index) {
          var result = void 0;
          if (string[index - 1] === '{' && string[index + match.length] === '}') {
            return i;
          } else {
            result = (0, _util.hasOwn)(args, i) ? args[i] : null;
            if (result === null || result === undefined) {
              return '';
            }
            return result;
          }
        });
      }
      return template;
    };
    var _util = requireUtil();
    var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
    /**
     *  String format template
     *  - Inspired:
     *    https://github.com/Matt-Esch/string-template/index.js
     */
    return format;
  }

  var hasRequiredLocale$1;
  function requireLocale$1() {
    if (hasRequiredLocale$1) return locale;
    hasRequiredLocale$1 = 1;
    locale.__esModule = true;
    locale.i18n = locale.use = locale.t = undefined;
    var _zhCN = requireZhCN();
    var _zhCN2 = _interopRequireDefault(_zhCN);
    var _vue = require$$0$1;
    var _vue2 = _interopRequireDefault(_vue);
    var _deepmerge = require$$2;
    var _deepmerge2 = _interopRequireDefault(_deepmerge);
    var _format = requireFormat();
    var _format2 = _interopRequireDefault(_format);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var format = (0, _format2.default)(_vue2.default);
    var lang = _zhCN2.default;
    var merged = false;
    var i18nHandler = function i18nHandler() {
      var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
      if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
        if (!merged) {
          merged = true;
          _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, {
            clone: true
          }));
        }
        return vuei18n.apply(this, arguments);
      }
    };
    var t = locale.t = function t(path, options) {
      var value = i18nHandler.apply(this, arguments);
      if (value !== null && value !== undefined) return value;
      var array = path.split('.');
      var current = lang;
      for (var i = 0, j = array.length; i < j; i++) {
        var property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
      }
      return '';
    };
    var use = locale.use = function use(l) {
      lang = l || lang;
    };
    var i18n = locale.i18n = function i18n(fn) {
      i18nHandler = fn || i18nHandler;
    };
    locale.default = {
      use: use,
      t: t,
      i18n: i18n
    };
    return locale;
  }

  var hasRequiredLocale;
  function requireLocale() {
    if (hasRequiredLocale) return locale$1;
    hasRequiredLocale = 1;
    locale$1.__esModule = true;
    var _locale = requireLocale$1();
    locale$1.default = {
      methods: {
        t: function t() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _locale.t.apply(this, args);
        }
      }
    };
    return locale$1;
  }

  (function (module) {
    module.exports = /******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 61);
      /******/
    }
    /************************************************************************/
    /******/({
      /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }
          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context = context ||
              // cached call
              this.$vnode && this.$vnode.ssrContext ||
              // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }
          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functioal component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
          return {
            exports: scriptExports,
            options: options
          };
        }

        /***/
      },

      /***/10: /***/function (module, exports) {
        module.exports = requireInput();

        /***/
      },

      /***/12: /***/function (module, exports) {
        module.exports = requireClickoutside();

        /***/
      },

      /***/15: /***/function (module, exports) {
        module.exports = scrollbar.exports;

        /***/
      },

      /***/16: /***/function (module, exports) {
        module.exports = requireResizeEvent();

        /***/
      },

      /***/19: /***/function (module, exports) {
        module.exports = requireDebounce();

        /***/
      },

      /***/21: /***/function (module, exports) {
        module.exports = requireShared();

        /***/
      },

      /***/22: /***/function (module, exports) {
        module.exports = requireFocus();

        /***/
      },

      /***/3: /***/function (module, exports) {
        module.exports = requireUtil();

        /***/
      },

      /***/31: /***/function (module, exports) {
        module.exports = requireScrollIntoView();

        /***/
      },

      /***/33: /***/function (module, __webpack_exports__, __webpack_require__) {

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("li", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }],
            staticClass: "el-select-dropdown__item",
            class: {
              selected: _vm.itemSelected,
              "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
              hover: _vm.hover
            },
            on: {
              mouseenter: _vm.hoverItem,
              click: function ($event) {
                $event.stopPropagation();
                return _vm.selectOptionClick($event);
              }
            }
          }, [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])], 2);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        // CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

        // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
        var emitter_ = __webpack_require__(4);
        var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/util"
        var util_ = __webpack_require__(3);

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var optionvue_type_script_lang_js_ = {
          mixins: [emitter_default.a],
          name: 'ElOption',
          componentName: 'ElOption',
          inject: ['select'],
          props: {
            value: {
              required: true
            },
            label: [String, Number],
            created: Boolean,
            disabled: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              index: -1,
              groupDisabled: false,
              visible: true,
              hitState: false,
              hover: false
            };
          },
          computed: {
            isObject: function isObject() {
              return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
            },
            currentLabel: function currentLabel() {
              return this.label || (this.isObject ? '' : this.value);
            },
            currentValue: function currentValue() {
              return this.value || this.label || '';
            },
            itemSelected: function itemSelected() {
              if (!this.select.multiple) {
                return this.isEqual(this.value, this.select.value);
              } else {
                return this.contains(this.select.value, this.value);
              }
            },
            limitReached: function limitReached() {
              if (this.select.multiple) {
                return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
              } else {
                return false;
              }
            }
          },
          watch: {
            currentLabel: function currentLabel() {
              if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
            },
            value: function value(val, oldVal) {
              var _select = this.select,
                remote = _select.remote,
                valueKey = _select.valueKey;
              if (!this.created && !remote) {
                if (valueKey && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : _typeof(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
                  return;
                }
                this.dispatch('ElSelect', 'setSelected');
              }
            }
          },
          methods: {
            isEqual: function isEqual(a, b) {
              if (!this.isObject) {
                return a === b;
              } else {
                var valueKey = this.select.valueKey;
                return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
              }
            },
            contains: function contains() {
              var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var target = arguments[1];
              if (!this.isObject) {
                return arr && arr.indexOf(target) > -1;
              } else {
                var valueKey = this.select.valueKey;
                return arr && arr.some(function (item) {
                  return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
                });
              }
            },
            handleGroupDisabled: function handleGroupDisabled(val) {
              this.groupDisabled = val;
            },
            hoverItem: function hoverItem() {
              if (!this.disabled && !this.groupDisabled) {
                this.select.hoverIndex = this.select.options.indexOf(this);
              }
            },
            selectOptionClick: function selectOptionClick() {
              if (this.disabled !== true && this.groupDisabled !== true) {
                this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
              }
            },
            queryChange: function queryChange(query) {
              this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
              if (!this.visible) {
                this.select.filteredOptionsCount--;
              }
            }
          },
          created: function created() {
            this.select.options.push(this);
            this.select.cachedOptions.push(this);
            this.select.optionsCount++;
            this.select.filteredOptionsCount++;
            this.$on('queryChange', this.queryChange);
            this.$on('handleGroupDisabled', this.handleGroupDisabled);
          },
          beforeDestroy: function beforeDestroy() {
            var _select2 = this.select,
              selected = _select2.selected,
              multiple = _select2.multiple;
            var selectedOptions = multiple ? selected : [selected];
            var index = this.select.cachedOptions.indexOf(this);
            var selectedIndex = selectedOptions.indexOf(this);

            // if option is not selected, remove it from cache
            if (index > -1 && selectedIndex < 0) {
              this.select.cachedOptions.splice(index, 1);
            }
            this.select.onOptionDestroy(this.select.options.indexOf(this));
          }
        };
        // CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_optionvue_type_script_lang_js_ = optionvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        var componentNormalizer = __webpack_require__(0);

        // CONCATENATED MODULE: ./packages/select/src/option.vue

        /* normalize component */

        var component = Object(componentNormalizer["a" /* default */])(src_optionvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        component.options.__file = "packages/select/src/option.vue";
        /* harmony default export */
        __webpack_exports__["a"] = component.exports;

        /***/
      },

      /***/37: /***/function (module, exports) {
        module.exports = requireTag();

        /***/
      },

      /***/4: /***/function (module, exports) {
        module.exports = requireEmitter();

        /***/
      },

      /***/5: /***/function (module, exports) {
        module.exports = requireVuePopper();

        /***/
      },

      /***/6: /***/function (module, exports) {
        module.exports = requireLocale();

        /***/
      },

      /***/61: /***/function (module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", {
            directives: [{
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.handleClose,
              expression: "handleClose"
            }],
            staticClass: "el-select",
            class: [_vm.selectSize ? "el-select--" + _vm.selectSize : ""],
            on: {
              click: function ($event) {
                $event.stopPropagation();
                return _vm.toggleMenu($event);
              }
            }
          }, [_vm.multiple ? _c("div", {
            ref: "tags",
            staticClass: "el-select__tags",
            style: {
              "max-width": _vm.inputWidth - 32 + "px",
              width: "100%"
            }
          }, [_vm.collapseTags && _vm.selected.length ? _c("span", [_c("el-tag", {
            attrs: {
              closable: !_vm.selectDisabled,
              size: _vm.collapseTagSize,
              hit: _vm.selected[0].hitState,
              type: "info",
              "disable-transitions": ""
            },
            on: {
              close: function ($event) {
                _vm.deleteTag($event, _vm.selected[0]);
              }
            }
          }, [_c("span", {
            staticClass: "el-select__tags-text"
          }, [_vm._v(_vm._s(_vm.selected[0].currentLabel))])]), _vm.selected.length > 1 ? _c("el-tag", {
            attrs: {
              closable: false,
              size: _vm.collapseTagSize,
              type: "info",
              "disable-transitions": ""
            }
          }, [_c("span", {
            staticClass: "el-select__tags-text"
          }, [_vm._v("+ " + _vm._s(_vm.selected.length - 1))])]) : _vm._e()], 1) : _vm._e(), !_vm.collapseTags ? _c("transition-group", {
            on: {
              "after-leave": _vm.resetInputHeight
            }
          }, _vm._l(_vm.selected, function (item) {
            return _c("el-tag", {
              key: _vm.getValueKey(item),
              attrs: {
                closable: !_vm.selectDisabled,
                size: _vm.collapseTagSize,
                hit: item.hitState,
                type: "info",
                "disable-transitions": ""
              },
              on: {
                close: function ($event) {
                  _vm.deleteTag($event, item);
                }
              }
            }, [_c("span", {
              staticClass: "el-select__tags-text"
            }, [_vm._v(_vm._s(item.currentLabel))])]);
          }), 1) : _vm._e(), _vm.filterable ? _c("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.query,
              expression: "query"
            }],
            ref: "input",
            staticClass: "el-select__input",
            class: [_vm.selectSize ? "is-" + _vm.selectSize : ""],
            style: {
              "flex-grow": "1",
              width: _vm.inputLength / (_vm.inputWidth - 32) + "%",
              "max-width": _vm.inputWidth - 42 + "px"
            },
            attrs: {
              type: "text",
              disabled: _vm.selectDisabled,
              autocomplete: _vm.autoComplete || _vm.autocomplete
            },
            domProps: {
              value: _vm.query
            },
            on: {
              focus: _vm.handleFocus,
              blur: function ($event) {
                _vm.softFocus = false;
              },
              keyup: _vm.managePlaceholder,
              keydown: [_vm.resetInputState, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
                  return null;
                }
                $event.preventDefault();
                _vm.handleNavigate("next");
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
                  return null;
                }
                $event.preventDefault();
                _vm.handleNavigate("prev");
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }
                $event.preventDefault();
                return _vm.selectOption($event);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
                  return null;
                }
                $event.stopPropagation();
                $event.preventDefault();
                _vm.visible = false;
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
                  return null;
                }
                return _vm.deletePrevTag($event);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
                  return null;
                }
                _vm.visible = false;
              }],
              compositionstart: _vm.handleComposition,
              compositionupdate: _vm.handleComposition,
              compositionend: _vm.handleComposition,
              input: [function ($event) {
                if ($event.target.composing) {
                  return;
                }
                _vm.query = $event.target.value;
              }, _vm.debouncedQueryChange]
            }
          }) : _vm._e()], 1) : _vm._e(), _c("el-input", {
            ref: "reference",
            class: {
              "is-focus": _vm.visible
            },
            attrs: {
              type: "text",
              placeholder: _vm.currentPlaceholder,
              name: _vm.name,
              id: _vm.id,
              autocomplete: _vm.autoComplete || _vm.autocomplete,
              size: _vm.selectSize,
              disabled: _vm.selectDisabled,
              readonly: _vm.readonly,
              "validate-event": false,
              tabindex: _vm.multiple && _vm.filterable ? "-1" : null
            },
            on: {
              focus: _vm.handleFocus,
              blur: _vm.handleBlur,
              input: _vm.debouncedOnInputChange,
              compositionstart: _vm.handleComposition,
              compositionupdate: _vm.handleComposition,
              compositionend: _vm.handleComposition
            },
            nativeOn: {
              keydown: [function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
                  return null;
                }
                $event.stopPropagation();
                $event.preventDefault();
                _vm.handleNavigate("next");
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
                  return null;
                }
                $event.stopPropagation();
                $event.preventDefault();
                _vm.handleNavigate("prev");
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }
                $event.preventDefault();
                return _vm.selectOption($event);
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
                  return null;
                }
                $event.stopPropagation();
                $event.preventDefault();
                _vm.visible = false;
              }, function ($event) {
                if (!("button" in $event) && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
                  return null;
                }
                _vm.visible = false;
              }],
              mouseenter: function ($event) {
                _vm.inputHovering = true;
              },
              mouseleave: function ($event) {
                _vm.inputHovering = false;
              }
            },
            model: {
              value: _vm.selectedLabel,
              callback: function ($$v) {
                _vm.selectedLabel = $$v;
              },
              expression: "selectedLabel"
            }
          }, [_vm.$slots.prefix ? _c("template", {
            slot: "prefix"
          }, [_vm._t("prefix")], 2) : _vm._e(), _c("template", {
            slot: "suffix"
          }, [_c("i", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !_vm.showClose,
              expression: "!showClose"
            }],
            class: ["el-select__caret", "el-input__icon", "el-icon-" + _vm.iconClass]
          }), _vm.showClose ? _c("i", {
            staticClass: "el-select__caret el-input__icon el-icon-circle-close",
            on: {
              click: _vm.handleClearClick
            }
          }) : _vm._e()])], 2), _c("transition", {
            attrs: {
              name: "el-zoom-in-top"
            },
            on: {
              "before-enter": _vm.handleMenuEnter,
              "after-leave": _vm.doDestroy
            }
          }, [_c("el-select-menu", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.visible && _vm.emptyText !== false,
              expression: "visible && emptyText !== false"
            }],
            ref: "popper",
            attrs: {
              "append-to-body": _vm.popperAppendToBody
            }
          }, [_c("el-scrollbar", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.options.length > 0 && !_vm.loading,
              expression: "options.length > 0 && !loading"
            }],
            ref: "scrollbar",
            class: {
              "is-empty": !_vm.allowCreate && _vm.query && _vm.filteredOptionsCount === 0
            },
            attrs: {
              tag: "ul",
              "wrap-class": "el-select-dropdown__wrap",
              "view-class": "el-select-dropdown__list"
            }
          }, [_vm.showNewOption ? _c("el-option", {
            attrs: {
              value: _vm.query,
              created: ""
            }
          }) : _vm._e(), _vm._t("default")], 2), _vm.emptyText && (!_vm.allowCreate || _vm.loading || _vm.allowCreate && _vm.options.length === 0) ? [_vm.$slots.empty ? _vm._t("empty") : _c("p", {
            staticClass: "el-select-dropdown__empty"
          }, [_vm._v("\n          " + _vm._s(_vm.emptyText) + "\n        ")])] : _vm._e()], 2)], 1)], 1);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        // CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

        // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
        var emitter_ = __webpack_require__(4);
        var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

        // EXTERNAL MODULE: external "element-ui/lib/mixins/focus"
        var focus_ = __webpack_require__(22);
        var focus_default = /*#__PURE__*/__webpack_require__.n(focus_);

        // EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
        var locale_ = __webpack_require__(6);
        var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

        // EXTERNAL MODULE: external "element-ui/lib/input"
        var input_ = __webpack_require__(10);
        var input_default = /*#__PURE__*/__webpack_require__.n(input_);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&
        var select_dropdownvue_type_template_id_06828748_render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", {
            staticClass: "el-select-dropdown el-popper",
            class: [{
              "is-multiple": _vm.$parent.multiple
            }, _vm.popperClass],
            style: {
              minWidth: _vm.minWidth
            }
          }, [_vm._t("default")], 2);
        };
        var select_dropdownvue_type_template_id_06828748_staticRenderFns = [];
        select_dropdownvue_type_template_id_06828748_render._withStripped = true;

        // CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&

        // EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"
        var vue_popper_ = __webpack_require__(5);
        var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var select_dropdownvue_type_script_lang_js_ = {
          name: 'ElSelectDropdown',
          componentName: 'ElSelectDropdown',
          mixins: [vue_popper_default.a],
          props: {
            placement: {
              default: 'bottom-start'
            },
            boundariesPadding: {
              default: 0
            },
            popperOptions: {
              default: function _default() {
                return {
                  gpuAcceleration: false
                };
              }
            },
            visibleArrow: {
              default: true
            },
            appendToBody: {
              type: Boolean,
              default: true
            }
          },
          data: function data() {
            return {
              minWidth: ''
            };
          },
          computed: {
            popperClass: function popperClass() {
              return this.$parent.popperClass;
            }
          },
          watch: {
            '$parent.inputWidth': function $parentInputWidth() {
              this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
            }
          },
          mounted: function mounted() {
            var _this = this;
            this.referenceElm = this.$parent.$refs.reference.$el;
            this.$parent.popperElm = this.popperElm = this.$el;
            this.$on('updatePopper', function () {
              if (_this.$parent.visible) _this.updatePopper();
            });
            this.$on('destroyPopper', this.destroyPopper);
          }
        };
        // CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_select_dropdownvue_type_script_lang_js_ = select_dropdownvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        var componentNormalizer = __webpack_require__(0);

        // CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue

        /* normalize component */

        var component = Object(componentNormalizer["a" /* default */])(src_select_dropdownvue_type_script_lang_js_, select_dropdownvue_type_template_id_06828748_render, select_dropdownvue_type_template_id_06828748_staticRenderFns, false, null, null, null);
        component.options.__file = "packages/select/src/select-dropdown.vue";
        /* harmony default export */
        var select_dropdown = component.exports;
        // EXTERNAL MODULE: ./packages/select/src/option.vue + 4 modules
        var src_option = __webpack_require__(33);

        // EXTERNAL MODULE: external "element-ui/lib/tag"
        var tag_ = __webpack_require__(37);
        var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

        // EXTERNAL MODULE: external "element-ui/lib/scrollbar"
        var scrollbar_ = __webpack_require__(15);
        var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

        // EXTERNAL MODULE: external "throttle-debounce/debounce"
        var debounce_ = __webpack_require__(19);
        var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
        var clickoutside_ = __webpack_require__(12);
        var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
        var resize_event_ = __webpack_require__(16);

        // EXTERNAL MODULE: external "element-ui/lib/utils/scroll-into-view"
        var scroll_into_view_ = __webpack_require__(31);
        var scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(scroll_into_view_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/util"
        var util_ = __webpack_require__(3);

        // CONCATENATED MODULE: ./packages/select/src/navigation-mixin.js
        /* harmony default export */
        var navigation_mixin = {
          data: function data() {
            return {
              hoverOption: -1
            };
          },
          computed: {
            optionsAllDisabled: function optionsAllDisabled() {
              return this.options.filter(function (option) {
                return option.visible;
              }).every(function (option) {
                return option.disabled;
              });
            }
          },
          watch: {
            hoverIndex: function hoverIndex(val) {
              var _this = this;
              if (typeof val === 'number' && val > -1) {
                this.hoverOption = this.options[val] || {};
              }
              this.options.forEach(function (option) {
                option.hover = _this.hoverOption === option;
              });
            }
          },
          methods: {
            navigateOptions: function navigateOptions(direction) {
              var _this2 = this;
              if (!this.visible) {
                this.visible = true;
                return;
              }
              if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
              if (!this.optionsAllDisabled) {
                if (direction === 'next') {
                  this.hoverIndex++;
                  if (this.hoverIndex === this.options.length) {
                    this.hoverIndex = 0;
                  }
                } else if (direction === 'prev') {
                  this.hoverIndex--;
                  if (this.hoverIndex < 0) {
                    this.hoverIndex = this.options.length - 1;
                  }
                }
                var option = this.options[this.hoverIndex];
                if (option.disabled === true || option.groupDisabled === true || !option.visible) {
                  this.navigateOptions(direction);
                }
                this.$nextTick(function () {
                  return _this2.scrollToOption(_this2.hoverOption);
                });
              }
            }
          }
        };
        // EXTERNAL MODULE: external "element-ui/lib/utils/shared"
        var shared_ = __webpack_require__(21);

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var selectvue_type_script_lang_js_ = {
          mixins: [emitter_default.a, locale_default.a, focus_default()('reference'), navigation_mixin],
          name: 'ElSelect',
          componentName: 'ElSelect',
          inject: {
            elForm: {
              default: ''
            },
            elFormItem: {
              default: ''
            }
          },
          provide: function provide() {
            return {
              'select': this
            };
          },
          computed: {
            _elFormItemSize: function _elFormItemSize() {
              return (this.elFormItem || {}).elFormItemSize;
            },
            readonly: function readonly() {
              return !this.filterable || this.multiple || !Object(util_["isIE"])() && !Object(util_["isEdge"])() && !this.visible;
            },
            showClose: function showClose() {
              var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
              var criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue;
              return criteria;
            },
            iconClass: function iconClass() {
              return this.remote && this.filterable ? '' : this.visible ? 'arrow-up is-reverse' : 'arrow-up';
            },
            debounce: function debounce() {
              return this.remote ? 300 : 0;
            },
            emptyText: function emptyText() {
              if (this.loading) {
                return this.loadingText || this.t('el.select.loading');
              } else {
                if (this.remote && this.query === '' && this.options.length === 0) return false;
                if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
                  return this.noMatchText || this.t('el.select.noMatch');
                }
                if (this.options.length === 0) {
                  return this.noDataText || this.t('el.select.noData');
                }
              }
              return null;
            },
            showNewOption: function showNewOption() {
              var _this = this;
              var hasExistingOption = this.options.filter(function (option) {
                return !option.created;
              }).some(function (option) {
                return option.currentLabel === _this.query;
              });
              return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
            },
            selectSize: function selectSize() {
              return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            },
            selectDisabled: function selectDisabled() {
              return this.disabled || (this.elForm || {}).disabled;
            },
            collapseTagSize: function collapseTagSize() {
              return ['small', 'mini'].indexOf(this.selectSize) > -1 ? 'mini' : 'small';
            },
            propPlaceholder: function propPlaceholder() {
              return typeof this.placeholder !== 'undefined' ? this.placeholder : this.t('el.select.placeholder');
            }
          },
          components: {
            ElInput: input_default.a,
            ElSelectMenu: select_dropdown,
            ElOption: src_option["a" /* default */],
            ElTag: tag_default.a,
            ElScrollbar: scrollbar_default.a
          },
          directives: {
            Clickoutside: clickoutside_default.a
          },
          props: {
            name: String,
            id: String,
            value: {
              required: true
            },
            autocomplete: {
              type: String,
              default: 'off'
            },
            /** @Deprecated in next major version */
            autoComplete: {
              type: String,
              validator: function validator(val) {
                return true;
              }
            },
            automaticDropdown: Boolean,
            size: String,
            disabled: Boolean,
            clearable: Boolean,
            filterable: Boolean,
            allowCreate: Boolean,
            loading: Boolean,
            popperClass: String,
            remote: Boolean,
            loadingText: String,
            noMatchText: String,
            noDataText: String,
            remoteMethod: Function,
            filterMethod: Function,
            multiple: Boolean,
            multipleLimit: {
              type: Number,
              default: 0
            },
            placeholder: {
              type: String,
              required: false
            },
            defaultFirstOption: Boolean,
            reserveKeyword: Boolean,
            valueKey: {
              type: String,
              default: 'value'
            },
            collapseTags: Boolean,
            popperAppendToBody: {
              type: Boolean,
              default: true
            }
          },
          data: function data() {
            return {
              options: [],
              cachedOptions: [],
              createdLabel: null,
              createdSelected: false,
              selected: this.multiple ? [] : {},
              inputLength: 20,
              inputWidth: 0,
              initialInputHeight: 0,
              cachedPlaceHolder: '',
              optionsCount: 0,
              filteredOptionsCount: 0,
              visible: false,
              softFocus: false,
              selectedLabel: '',
              hoverIndex: -1,
              query: '',
              previousQuery: null,
              inputHovering: false,
              currentPlaceholder: '',
              menuVisibleOnFocus: false,
              isOnComposition: false,
              isSilentBlur: false
            };
          },
          watch: {
            selectDisabled: function selectDisabled() {
              var _this2 = this;
              this.$nextTick(function () {
                _this2.resetInputHeight();
              });
            },
            propPlaceholder: function propPlaceholder(val) {
              this.cachedPlaceHolder = this.currentPlaceholder = val;
            },
            value: function value(val, oldVal) {
              if (this.multiple) {
                this.resetInputHeight();
                if (val && val.length > 0 || this.$refs.input && this.query !== '') {
                  this.currentPlaceholder = '';
                } else {
                  this.currentPlaceholder = this.cachedPlaceHolder;
                }
                if (this.filterable && !this.reserveKeyword) {
                  this.query = '';
                  this.handleQueryChange(this.query);
                }
              }
              this.setSelected();
              if (this.filterable && !this.multiple) {
                this.inputLength = 20;
              }
              if (!Object(util_["valueEquals"])(val, oldVal)) {
                this.dispatch('ElFormItem', 'el.form.change', val);
              }
            },
            visible: function visible(val) {
              var _this3 = this;
              if (!val) {
                this.broadcast('ElSelectDropdown', 'destroyPopper');
                if (this.$refs.input) {
                  this.$refs.input.blur();
                }
                this.query = '';
                this.previousQuery = null;
                this.selectedLabel = '';
                this.inputLength = 20;
                this.menuVisibleOnFocus = false;
                this.resetHoverIndex();
                this.$nextTick(function () {
                  if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
                    _this3.currentPlaceholder = _this3.cachedPlaceHolder;
                  }
                });
                if (!this.multiple) {
                  if (this.selected) {
                    if (this.filterable && this.allowCreate && this.createdSelected && this.createdLabel) {
                      this.selectedLabel = this.createdLabel;
                    } else {
                      this.selectedLabel = this.selected.currentLabel;
                    }
                    if (this.filterable) this.query = this.selectedLabel;
                  }
                  if (this.filterable) {
                    this.currentPlaceholder = this.cachedPlaceHolder;
                  }
                }
              } else {
                this.broadcast('ElSelectDropdown', 'updatePopper');
                if (this.filterable) {
                  this.query = this.remote ? '' : this.selectedLabel;
                  this.handleQueryChange(this.query);
                  if (this.multiple) {
                    this.$refs.input.focus();
                  } else {
                    if (!this.remote) {
                      this.broadcast('ElOption', 'queryChange', '');
                      this.broadcast('ElOptionGroup', 'queryChange');
                    }
                    if (this.selectedLabel) {
                      this.currentPlaceholder = this.selectedLabel;
                      this.selectedLabel = '';
                    }
                  }
                }
              }
              this.$emit('visible-change', val);
            },
            options: function options() {
              var _this4 = this;
              if (this.$isServer) return;
              this.$nextTick(function () {
                _this4.broadcast('ElSelectDropdown', 'updatePopper');
              });
              if (this.multiple) {
                this.resetInputHeight();
              }
              var inputs = this.$el.querySelectorAll('input');
              if ([].indexOf.call(inputs, document.activeElement) === -1) {
                this.setSelected();
              }
              if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
                this.checkDefaultFirstOption();
              }
            }
          },
          methods: {
            handleNavigate: function handleNavigate(direction) {
              if (this.isOnComposition) return;
              this.navigateOptions(direction);
            },
            handleComposition: function handleComposition(event) {
              var _this5 = this;
              var text = event.target.value;
              if (event.type === 'compositionend') {
                this.isOnComposition = false;
                this.$nextTick(function (_) {
                  return _this5.handleQueryChange(text);
                });
              } else {
                var lastCharacter = text[text.length - 1] || '';
                this.isOnComposition = !Object(shared_["isKorean"])(lastCharacter);
              }
            },
            handleQueryChange: function handleQueryChange(val) {
              var _this6 = this;
              if (this.previousQuery === val || this.isOnComposition) return;
              if (this.previousQuery === null && (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')) {
                this.previousQuery = val;
                return;
              }
              this.previousQuery = val;
              this.$nextTick(function () {
                if (_this6.visible) _this6.broadcast('ElSelectDropdown', 'updatePopper');
              });
              this.hoverIndex = -1;
              if (this.multiple && this.filterable) {
                this.$nextTick(function () {
                  var length = _this6.$refs.input.value.length * 15 + 20;
                  _this6.inputLength = _this6.collapseTags ? Math.min(50, length) : length;
                  _this6.managePlaceholder();
                  _this6.resetInputHeight();
                });
              }
              if (this.remote && typeof this.remoteMethod === 'function') {
                this.hoverIndex = -1;
                this.remoteMethod(val);
              } else if (typeof this.filterMethod === 'function') {
                this.filterMethod(val);
                this.broadcast('ElOptionGroup', 'queryChange');
              } else {
                this.filteredOptionsCount = this.optionsCount;
                this.broadcast('ElOption', 'queryChange', val);
                this.broadcast('ElOptionGroup', 'queryChange');
              }
              if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
                this.checkDefaultFirstOption();
              }
            },
            scrollToOption: function scrollToOption(option) {
              var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
              if (this.$refs.popper && target) {
                var menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
                scroll_into_view_default()(menu, target);
              }
              this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
            },
            handleMenuEnter: function handleMenuEnter() {
              var _this7 = this;
              this.$nextTick(function () {
                return _this7.scrollToOption(_this7.selected);
              });
            },
            emitChange: function emitChange(val) {
              if (!Object(util_["valueEquals"])(this.value, val)) {
                this.$emit('change', val);
              }
            },
            getOption: function getOption(value) {
              var option = void 0;
              var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
              var isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
              var isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';
              for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
                var cachedOption = this.cachedOptions[i];
                var isEqual = isObject ? Object(util_["getValueByPath"])(cachedOption.value, this.valueKey) === Object(util_["getValueByPath"])(value, this.valueKey) : cachedOption.value === value;
                if (isEqual) {
                  option = cachedOption;
                  break;
                }
              }
              if (option) return option;
              var label = !isObject && !isNull && !isUndefined ? String(value) : '';
              var newOption = {
                value: value,
                currentLabel: label
              };
              if (this.multiple) {
                newOption.hitState = false;
              }
              return newOption;
            },
            setSelected: function setSelected() {
              var _this8 = this;
              if (!this.multiple) {
                var option = this.getOption(this.value);
                if (option.created) {
                  this.createdLabel = option.currentLabel;
                  this.createdSelected = true;
                } else {
                  this.createdSelected = false;
                }
                this.selectedLabel = option.currentLabel;
                this.selected = option;
                if (this.filterable) this.query = this.selectedLabel;
                return;
              }
              var result = [];
              if (Array.isArray(this.value)) {
                this.value.forEach(function (value) {
                  result.push(_this8.getOption(value));
                });
              }
              this.selected = result;
              this.$nextTick(function () {
                _this8.resetInputHeight();
              });
            },
            handleFocus: function handleFocus(event) {
              if (!this.softFocus) {
                if (this.automaticDropdown || this.filterable) {
                  if (this.filterable && !this.visible) {
                    this.menuVisibleOnFocus = true;
                  }
                  this.visible = true;
                }
                this.$emit('focus', event);
              } else {
                this.softFocus = false;
              }
            },
            blur: function blur() {
              this.visible = false;
              this.$refs.reference.blur();
            },
            handleBlur: function handleBlur(event) {
              var _this9 = this;
              setTimeout(function () {
                if (_this9.isSilentBlur) {
                  _this9.isSilentBlur = false;
                } else {
                  _this9.$emit('blur', event);
                }
              }, 50);
              this.softFocus = false;
            },
            handleClearClick: function handleClearClick(event) {
              this.deleteSelected(event);
            },
            doDestroy: function doDestroy() {
              this.$refs.popper && this.$refs.popper.doDestroy();
            },
            handleClose: function handleClose() {
              this.visible = false;
            },
            toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
              if (!Array.isArray(this.selected)) return;
              var option = this.selected[this.selected.length - 1];
              if (!option) return;
              if (hit === true || hit === false) {
                option.hitState = hit;
                return hit;
              }
              option.hitState = !option.hitState;
              return option.hitState;
            },
            deletePrevTag: function deletePrevTag(e) {
              if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
                var value = this.value.slice();
                value.pop();
                this.$emit('input', value);
                this.emitChange(value);
              }
            },
            managePlaceholder: function managePlaceholder() {
              if (this.currentPlaceholder !== '') {
                this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
              }
            },
            resetInputState: function resetInputState(e) {
              if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
              this.inputLength = this.$refs.input.value.length * 15 + 20;
              this.resetInputHeight();
            },
            resetInputHeight: function resetInputHeight() {
              var _this10 = this;
              if (this.collapseTags && !this.filterable) return;
              this.$nextTick(function () {
                if (!_this10.$refs.reference) return;
                var inputChildNodes = _this10.$refs.reference.$el.childNodes;
                var input = [].filter.call(inputChildNodes, function (item) {
                  return item.tagName === 'INPUT';
                })[0];
                var tags = _this10.$refs.tags;
                var tagsHeight = tags ? Math.round(tags.getBoundingClientRect().height) : 0;
                var sizeInMap = _this10.initialInputHeight || 40;
                input.style.height = _this10.selected.length === 0 ? sizeInMap + 'px' : Math.max(tags ? tagsHeight + (tagsHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px';
                if (_this10.visible && _this10.emptyText !== false) {
                  _this10.broadcast('ElSelectDropdown', 'updatePopper');
                }
              });
            },
            resetHoverIndex: function resetHoverIndex() {
              var _this11 = this;
              setTimeout(function () {
                if (!_this11.multiple) {
                  _this11.hoverIndex = _this11.options.indexOf(_this11.selected);
                } else {
                  if (_this11.selected.length > 0) {
                    _this11.hoverIndex = Math.min.apply(null, _this11.selected.map(function (item) {
                      return _this11.options.indexOf(item);
                    }));
                  } else {
                    _this11.hoverIndex = -1;
                  }
                }
              }, 300);
            },
            handleOptionSelect: function handleOptionSelect(option, byClick) {
              var _this12 = this;
              if (this.multiple) {
                var value = (this.value || []).slice();
                var optionIndex = this.getValueIndex(value, option.value);
                if (optionIndex > -1) {
                  value.splice(optionIndex, 1);
                } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
                  value.push(option.value);
                }
                this.$emit('input', value);
                this.emitChange(value);
                if (option.created) {
                  this.query = '';
                  this.handleQueryChange('');
                  this.inputLength = 20;
                }
                if (this.filterable) this.$refs.input.focus();
              } else {
                this.$emit('input', option.value);
                this.emitChange(option.value);
                this.visible = false;
              }
              this.isSilentBlur = byClick;
              this.setSoftFocus();
              if (this.visible) return;
              this.$nextTick(function () {
                _this12.scrollToOption(option);
              });
            },
            setSoftFocus: function setSoftFocus() {
              this.softFocus = true;
              var input = this.$refs.input || this.$refs.reference;
              if (input) {
                input.focus();
              }
            },
            getValueIndex: function getValueIndex() {
              var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var value = arguments[1];
              var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
              if (!isObject) {
                return arr.indexOf(value);
              } else {
                var valueKey = this.valueKey;
                var index = -1;
                arr.some(function (item, i) {
                  if (Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(value, valueKey)) {
                    index = i;
                    return true;
                  }
                  return false;
                });
                return index;
              }
            },
            toggleMenu: function toggleMenu() {
              if (!this.selectDisabled) {
                if (this.menuVisibleOnFocus) {
                  this.menuVisibleOnFocus = false;
                } else {
                  this.visible = !this.visible;
                }
                if (this.visible) {
                  (this.$refs.input || this.$refs.reference).focus();
                }
              }
            },
            selectOption: function selectOption() {
              if (!this.visible) {
                this.toggleMenu();
              } else {
                if (this.options[this.hoverIndex]) {
                  this.handleOptionSelect(this.options[this.hoverIndex]);
                }
              }
            },
            deleteSelected: function deleteSelected(event) {
              event.stopPropagation();
              var value = this.multiple ? [] : '';
              this.$emit('input', value);
              this.emitChange(value);
              this.visible = false;
              this.$emit('clear');
            },
            deleteTag: function deleteTag(event, tag) {
              var index = this.selected.indexOf(tag);
              if (index > -1 && !this.selectDisabled) {
                var value = this.value.slice();
                value.splice(index, 1);
                this.$emit('input', value);
                this.emitChange(value);
                this.$emit('remove-tag', tag.value);
              }
              event.stopPropagation();
            },
            onInputChange: function onInputChange() {
              if (this.filterable && this.query !== this.selectedLabel) {
                this.query = this.selectedLabel;
                this.handleQueryChange(this.query);
              }
            },
            onOptionDestroy: function onOptionDestroy(index) {
              if (index > -1) {
                this.optionsCount--;
                this.filteredOptionsCount--;
                this.options.splice(index, 1);
              }
            },
            resetInputWidth: function resetInputWidth() {
              this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
            },
            handleResize: function handleResize() {
              this.resetInputWidth();
              if (this.multiple) this.resetInputHeight();
            },
            checkDefaultFirstOption: function checkDefaultFirstOption() {
              this.hoverIndex = -1;
              // highlight the created option
              var hasCreated = false;
              for (var i = this.options.length - 1; i >= 0; i--) {
                if (this.options[i].created) {
                  hasCreated = true;
                  this.hoverIndex = i;
                  break;
                }
              }
              if (hasCreated) return;
              for (var _i = 0; _i !== this.options.length; ++_i) {
                var option = this.options[_i];
                if (this.query) {
                  // highlight first options that passes the filter
                  if (!option.disabled && !option.groupDisabled && option.visible) {
                    this.hoverIndex = _i;
                    break;
                  }
                } else {
                  // highlight currently selected option
                  if (option.itemSelected) {
                    this.hoverIndex = _i;
                    break;
                  }
                }
              }
            },
            getValueKey: function getValueKey(item) {
              if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
                return item.value;
              } else {
                return Object(util_["getValueByPath"])(item.value, this.valueKey);
              }
            }
          },
          created: function created() {
            var _this13 = this;
            this.cachedPlaceHolder = this.currentPlaceholder = this.propPlaceholder;
            if (this.multiple && !Array.isArray(this.value)) {
              this.$emit('input', []);
            }
            if (!this.multiple && Array.isArray(this.value)) {
              this.$emit('input', '');
            }
            this.debouncedOnInputChange = debounce_default()(this.debounce, function () {
              _this13.onInputChange();
            });
            this.debouncedQueryChange = debounce_default()(this.debounce, function (e) {
              _this13.handleQueryChange(e.target.value);
            });
            this.$on('handleOptionClick', this.handleOptionSelect);
            this.$on('setSelected', this.setSelected);
          },
          mounted: function mounted() {
            var _this14 = this;
            if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
              this.currentPlaceholder = '';
            }
            Object(resize_event_["addResizeListener"])(this.$el, this.handleResize);
            var reference = this.$refs.reference;
            if (reference && reference.$el) {
              var sizeMap = {
                medium: 36,
                small: 32,
                mini: 28
              };
              var input = reference.$el.querySelector('input');
              this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize];
            }
            if (this.remote && this.multiple) {
              this.resetInputHeight();
            }
            this.$nextTick(function () {
              if (reference && reference.$el) {
                _this14.inputWidth = reference.$el.getBoundingClientRect().width;
              }
            });
            this.setSelected();
          },
          beforeDestroy: function beforeDestroy() {
            if (this.$el && this.handleResize) Object(resize_event_["removeResizeListener"])(this.$el, this.handleResize);
          }
        };
        // CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_selectvue_type_script_lang_js_ = selectvue_type_script_lang_js_;
        // CONCATENATED MODULE: ./packages/select/src/select.vue

        /* normalize component */

        var select_component = Object(componentNormalizer["a" /* default */])(src_selectvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        select_component.options.__file = "packages/select/src/select.vue";
        /* harmony default export */
        var src_select = select_component.exports;
        // CONCATENATED MODULE: ./packages/select/index.js

        /* istanbul ignore next */
        src_select.install = function (Vue) {
          Vue.component(src_select.name, src_select);
        };

        /* harmony default export */
        __webpack_exports__["default"] = src_select;

        /***/
      }

      /******/
    });
  })(select);
  var Select = /*@__PURE__*/getDefaultExportFromCjs(select.exports);

  var option = {exports: {}};

  (function (module) {
    module.exports = /******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 53);
      /******/
    }
    /************************************************************************/
    /******/({
      /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }
          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context = context ||
              // cached call
              this.$vnode && this.$vnode.ssrContext ||
              // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }
          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functioal component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
          return {
            exports: scriptExports,
            options: options
          };
        }

        /***/
      },

      /***/3: /***/function (module, exports) {
        module.exports = requireUtil();

        /***/
      },

      /***/33: /***/function (module, __webpack_exports__, __webpack_require__) {

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("li", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }],
            staticClass: "el-select-dropdown__item",
            class: {
              selected: _vm.itemSelected,
              "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
              hover: _vm.hover
            },
            on: {
              mouseenter: _vm.hoverItem,
              click: function ($event) {
                $event.stopPropagation();
                return _vm.selectOptionClick($event);
              }
            }
          }, [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])], 2);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        // CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

        // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
        var emitter_ = __webpack_require__(4);
        var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

        // EXTERNAL MODULE: external "element-ui/lib/utils/util"
        var util_ = __webpack_require__(3);

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var optionvue_type_script_lang_js_ = {
          mixins: [emitter_default.a],
          name: 'ElOption',
          componentName: 'ElOption',
          inject: ['select'],
          props: {
            value: {
              required: true
            },
            label: [String, Number],
            created: Boolean,
            disabled: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              index: -1,
              groupDisabled: false,
              visible: true,
              hitState: false,
              hover: false
            };
          },
          computed: {
            isObject: function isObject() {
              return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
            },
            currentLabel: function currentLabel() {
              return this.label || (this.isObject ? '' : this.value);
            },
            currentValue: function currentValue() {
              return this.value || this.label || '';
            },
            itemSelected: function itemSelected() {
              if (!this.select.multiple) {
                return this.isEqual(this.value, this.select.value);
              } else {
                return this.contains(this.select.value, this.value);
              }
            },
            limitReached: function limitReached() {
              if (this.select.multiple) {
                return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
              } else {
                return false;
              }
            }
          },
          watch: {
            currentLabel: function currentLabel() {
              if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
            },
            value: function value(val, oldVal) {
              var _select = this.select,
                remote = _select.remote,
                valueKey = _select.valueKey;
              if (!this.created && !remote) {
                if (valueKey && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : _typeof(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
                  return;
                }
                this.dispatch('ElSelect', 'setSelected');
              }
            }
          },
          methods: {
            isEqual: function isEqual(a, b) {
              if (!this.isObject) {
                return a === b;
              } else {
                var valueKey = this.select.valueKey;
                return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
              }
            },
            contains: function contains() {
              var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var target = arguments[1];
              if (!this.isObject) {
                return arr && arr.indexOf(target) > -1;
              } else {
                var valueKey = this.select.valueKey;
                return arr && arr.some(function (item) {
                  return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
                });
              }
            },
            handleGroupDisabled: function handleGroupDisabled(val) {
              this.groupDisabled = val;
            },
            hoverItem: function hoverItem() {
              if (!this.disabled && !this.groupDisabled) {
                this.select.hoverIndex = this.select.options.indexOf(this);
              }
            },
            selectOptionClick: function selectOptionClick() {
              if (this.disabled !== true && this.groupDisabled !== true) {
                this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
              }
            },
            queryChange: function queryChange(query) {
              this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
              if (!this.visible) {
                this.select.filteredOptionsCount--;
              }
            }
          },
          created: function created() {
            this.select.options.push(this);
            this.select.cachedOptions.push(this);
            this.select.optionsCount++;
            this.select.filteredOptionsCount++;
            this.$on('queryChange', this.queryChange);
            this.$on('handleGroupDisabled', this.handleGroupDisabled);
          },
          beforeDestroy: function beforeDestroy() {
            var _select2 = this.select,
              selected = _select2.selected,
              multiple = _select2.multiple;
            var selectedOptions = multiple ? selected : [selected];
            var index = this.select.cachedOptions.indexOf(this);
            var selectedIndex = selectedOptions.indexOf(this);

            // if option is not selected, remove it from cache
            if (index > -1 && selectedIndex < 0) {
              this.select.cachedOptions.splice(index, 1);
            }
            this.select.onOptionDestroy(this.select.options.indexOf(this));
          }
        };
        // CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_optionvue_type_script_lang_js_ = optionvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        var componentNormalizer = __webpack_require__(0);

        // CONCATENATED MODULE: ./packages/select/src/option.vue

        /* normalize component */

        var component = Object(componentNormalizer["a" /* default */])(src_optionvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        component.options.__file = "packages/select/src/option.vue";
        /* harmony default export */
        __webpack_exports__["a"] = component.exports;

        /***/
      },

      /***/4: /***/function (module, exports) {
        module.exports = requireEmitter();

        /***/
      },

      /***/53: /***/function (module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _select_src_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);

        /* istanbul ignore next */
        _select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].install = function (Vue) {
          Vue.component(_select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].name, _select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"]);
        };

        /* harmony default export */
        __webpack_exports__["default"] = _select_src_option__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"];

        /***/
      }

      /******/
    });
  })(option);
  var Option = /*@__PURE__*/getDefaultExportFromCjs(option.exports);

  var optionGroup = {exports: {}};

  (function (module) {
    module.exports = /******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 94);
      /******/
    }
    /************************************************************************/
    /******/({
      /***/0: /***/function (module, __webpack_exports__, __webpack_require__) {

        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return normalizeComponent;
        });
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
        shadowMode /* vue-cli only */) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

          // render functions
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }
          var hook;
          if (moduleIdentifier) {
            // server build
            hook = function (context) {
              // 2.3 injection
              context = context ||
              // cached call
              this.$vnode && this.$vnode.ssrContext ||
              // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }
          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook;
              // register for functioal component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
          return {
            exports: scriptExports,
            options: options
          };
        }

        /***/
      },

      /***/4: /***/function (module, exports) {
        module.exports = requireEmitter();

        /***/
      },

      /***/94: /***/function (module, __webpack_exports__, __webpack_require__) {

        __webpack_require__.r(__webpack_exports__);

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&
        var render = function () {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("ul", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }],
            staticClass: "el-select-group__wrap"
          }, [_c("li", {
            staticClass: "el-select-group__title"
          }, [_vm._v(_vm._s(_vm.label))]), _c("li", [_c("ul", {
            staticClass: "el-select-group"
          }, [_vm._t("default")], 2)])]);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        // CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&

        // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
        var emitter_ = __webpack_require__(4);
        var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

        // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */
        var option_groupvue_type_script_lang_js_ = {
          mixins: [emitter_default.a],
          name: 'ElOptionGroup',
          componentName: 'ElOptionGroup',
          props: {
            label: String,
            disabled: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              visible: true
            };
          },
          watch: {
            disabled: function disabled(val) {
              this.broadcast('ElOption', 'handleGroupDisabled', val);
            }
          },
          methods: {
            queryChange: function queryChange() {
              this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(function (option) {
                return option.visible === true;
              });
            }
          },
          created: function created() {
            this.$on('queryChange', this.queryChange);
          },
          mounted: function mounted() {
            if (this.disabled) {
              this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
            }
          }
        };
        // CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=script&lang=js&
        /* harmony default export */
        var src_option_groupvue_type_script_lang_js_ = option_groupvue_type_script_lang_js_;
        // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
        var componentNormalizer = __webpack_require__(0);

        // CONCATENATED MODULE: ./packages/select/src/option-group.vue

        /* normalize component */

        var component = Object(componentNormalizer["a" /* default */])(src_option_groupvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        component.options.__file = "packages/select/src/option-group.vue";
        /* harmony default export */
        var option_group = component.exports;
        // CONCATENATED MODULE: ./packages/option-group/index.js

        /* istanbul ignore next */
        option_group.install = function (Vue) {
          Vue.component(option_group.name, option_group);
        };

        /* harmony default export */
        __webpack_exports__["default"] = option_group;

        /***/
      }

      /******/
    });
  })(optionGroup);
  var OptionGroup = /*@__PURE__*/getDefaultExportFromCjs(optionGroup.exports);

  const domRef = ref => {
    //定义dom操作接口
    let Api = {
      height() {
        return ref.clientHeight;
      },
      width() {
        return ref.clientWidth;
      }
    };

    if (!ref) {
      // console.error(ref, 'domRef库方法的 ref 参数未定义');
      //页面元素不存在的时候 ,防止在外面报错
      for (const item in Api) {
        Api[item] = () => {
          return 0;
        };
      }
    }
    return Api;
  };

  //

  var script$5 = {
    name: 'Panel',
    data() {
      return {
        show: true,
        actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
        value: 'ssss',
        scrollStyle: { height: '' },
        bodyStyle: { height: '' },
        panelStyle: { height: '' }
      };
    },
    props: {
      isNavbar: { type: Boolean, default: true },
      title: { type: String, default: '' },
      titlePosition: { type: String, default: 'center' }, //标题位置, left center right 三个方向
      leftText: { type: String, default: '' }, //左侧文字
      rightText: { type: String, default: '' }, //右侧文字
      leftArrow: { type: Boolean, default: false }, //左侧箭头
      rightArrow: { type: Boolean, default: false }, //右侧箭头
      scroll: { type: Boolean, default: true }, //是否滚动,默认是滚动的
      fullWindow: { type: Boolean, default: false }, //充满窗口,
      height: { type: Number, default: null }, //设置高度
      loading: { type: Boolean, default: false }, //设置高度
      padding: { type: Boolean, default: true }, //中间区域默认填充
      className: { type: String, default: 'begda-panel' }, //中间区域默认填充

      shadow: { type: String, default: 'always' } //显示阴影
    },
    computed: {
      isShadow() {
        switch (this.shadow) {
          case 'always':
            return 'shadow-md';

          case 'hover':
            return ' hover:shadow-md';

          case 'never':
            return '';
        }
      },
      titlePositionClass() {
        switch (this.titlePosition) {
          case 'left':
            return 'text-left';

          case 'center':
            return 'text-center';

          case 'right':
            return 'text-right';
        }
      }
    },
    created: function () {},
    mounted: function () {
      this.viewResize();
    },
    methods: {
      view() {
        let self = this;
        const winHeight = window.innerHeight; // 窗口高度

        const headerHeight = domRef(this.$refs.header).height(); // header高度
        const topHeight = domRef(this.$refs.top).height();
        const bottomHeight = domRef(this.$refs.bottom).height();
        const bottombarHeight = domRef(this.$refs.bottombar).height();
        const otherHeight = headerHeight + topHeight + bottomHeight + bottombarHeight; //上面所有高度的和
        if (!self.padding) {
          // 设置padding
          self.bodyStyle.padding = 0;
        }
        //窗口全屏,才设置panel的高度为整个窗口的高度
        if (self.fullWindow) {
          self.panelStyle.height = `${winHeight}px`; //设置为当前窗口的高度
        } else {
          self.panelStyle.height = `${self.height}px`;
        }

        self.scrollStyle.height = `calc(100% - ${otherHeight}px)`; //设置中间区域高度
        const bodyHeight = domRef(this.$refs.body).height(); //获取中间区域的高
        const bodyWidth = domRef(this.$refs.body).width(); //获取中间区域的宽
        self.$emit('resize', bodyHeight, bodyWidth); //获取面板宽高事件
      },
      // 根据窗口大小实时改变
      viewResize() {
        this.view();
        window.addEventListener('resize', () => {
          this.view();
        });
      }
    }
  };

  /* script */
  const __vue_script__$5 = script$5;
  /* template */
  var __vue_render__$5 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c(
        "div",
        {
          ref: "panel",
          class: [_vm.className, _vm.isShadow],
          style: _vm.panelStyle,
        },
        [
          _vm.isNavbar
            ? [
                _vm.$slots.header
                  ? [_c("div", { ref: "header" }, [_vm._t("header")], 2)]
                  : [
                      _c(
                        "div",
                        { ref: "header", staticClass: "begda-panel__header" },
                        [
                          _vm.leftText
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "begda-panel__header-left",
                                    on: {
                                      click: function ($event) {
                                        return _vm.$emit("left")
                                      },
                                    },
                                  },
                                  [
                                    _vm.leftArrow
                                      ? _c("i", {
                                          staticClass: "el-icon-arrow-left",
                                        })
                                      : _vm._e(),
                                    _vm._v(
                                      _vm._s(_vm.leftText) + "\n            "
                                    ),
                                  ]
                                ),
                              ]
                            : [_vm._t("left")],
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class: [
                                "begda-panel__header-title",
                                _vm.titlePositionClass,
                              ],
                            },
                            [_vm._v(_vm._s(_vm.title))]
                          ),
                          _vm._v(" "),
                          _vm.rightText
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "begda-panel__header-right",
                                    on: {
                                      click: function ($event) {
                                        return _vm.$emit("right")
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n              " + _vm._s(_vm.rightText)
                                    ),
                                    _vm.rightArrow
                                      ? _c("i", {
                                          staticClass: "el-icon-arrow-right",
                                        })
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            : [_vm._t("right")],
                        ],
                        2
                      ),
                    ],
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.$slots.top
            ? _c("div", { ref: "top", staticClass: "top" }, [_vm._t("top")], 2)
            : _vm._e(),
          _vm._v(" "),
          _vm.scroll
            ? [
                _c(
                  "ba-scrollbar",
                  { staticClass: "begda-scrollbar", style: _vm.scrollStyle },
                  [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: _vm.loading,
                            expression: "loading",
                          },
                        ],
                        ref: "body",
                        staticClass: "begda-panel__body",
                        style: _vm.bodyStyle,
                      },
                      [_vm._t("default")],
                      2
                    ),
                  ]
                ),
              ]
            : [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "loading",
                        rawName: "v-loading",
                        value: _vm.loading,
                        expression: "loading",
                      },
                    ],
                    ref: "body",
                    staticClass: "begda-panel__body",
                    style: _vm.bodyStyle,
                  },
                  [_vm._t("default")],
                  2
                ),
              ],
          _vm._v(" "),
          _vm.$slots.bottom
            ? _c("div", { ref: "bottom" }, [_vm._t("bottom")], 2)
            : _vm._e(),
          _vm._v(" "),
          _vm.$slots.bottombar
            ? _c("div", { ref: "bottombar" }, [_vm._t("bottombar")], 2)
            : _vm._e(),
        ],
        2
      ),
    ])
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = "data-v-2ca3fed5";
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$4 = {
    name: 'BaPanelData',
    data() {
      return {
        className: 'begda-panel-data',
        componentName: 'dv-border-box-11'
      };
    },
    props: {
      theme: { type: String, default: 'panel-1' }
    },
    watch: {
      theme(newData, oldData) {
        this.onTheme(newData);
      }
    },
    created: function () {
      this.onTheme(this.theme);
    },
    mounted: function () {},
    methods: {
      onTheme(data) {
        switch (data) {
          case 'panel-1':
            this.className = 'begda-panel-data';
            this.componentName = 'dv-border-box-12';
            break;
          case 'panel-2':
            this.className = 'begda-panel-data-2';
            this.componentName = 'dv-border-box-11';
            break;
          case 'panel-3':
            this.className = 'begda-panel-data-3';
            this.componentName = 'dv-border-box-13';
            break;
          case 'panel-4':
            this.className = 'begda-panel-data-4';
            this.componentName = 'dv-border-box-9';
            break;
        }
      }
    }
  };

  /* script */
  const __vue_script__$4 = script$4;
  /* template */
  var __vue_render__$4 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          _vm.componentName,
          { tag: "component" },
          [
            _c(
              "panel",
              _vm._g(
                _vm._b(
                  { attrs: { className: _vm.className, shadow: "never" } },
                  "panel",
                  _vm.$attrs,
                  false
                ),
                _vm.$listeners
              ),
              [
                _vm._l(_vm.$slots, function (item, key) {
                  return [_c("template", { slot: key }, [_vm._t(key)], 2)]
                }),
              ],
              2
            ),
          ],
          1
        ),
      ],
      1
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  let BaPanel = { ...__vue_component__$5, name: 'BaPanel' }; //重新设置组件名字
  const components$5 = [__vue_component__$5, BaPanel, __vue_component__$4];
  const install$5 = function (Vue, opts = {}) {
    components$5.forEach(component => {
      Vue.component(component.name, component);
    });
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install$5(window.Vue);
  }

  //
  //
  //
  //
  //
  //

  var script$3 = {
    name: 'BaScrollbar',
    data() {
      return {
        // scrollWrapper:0
      };
    },
    computed: {
      // scrollWrapper() {
      //   return this.$refs.scrollContainer.$refs.wrap
      // }
    },
    mounted() {
      // this.scrollStyle.height = `calc(100% - 40px)`  //设置滚动条高度
    },
    methods: {
      // 当鼠标滚轮滚动时，控制滚动条移动
      handleScroll(e) {
        // console.log(e)
        // const eventDelta = e.wheelDelta || -e.deltaY * 40
        // const $scrollWrapper = this.$refs.scrollContainer
        // $scrollWrapper.scrollTop = e.deltaY
        this.$emit('scroll');
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;
  /* template */
  var __vue_render__$3 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "el-scrollbar",
      { staticClass: "begda-scrollbar" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = "data-v-e1e3804a";
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  const components$4 = [__vue_component__$3];
  const install$4 = function (Vue, opts = {}) {
    components$4.forEach(component => {
      Vue.component(component.name, component);
    });
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install$4(window.Vue);
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$2 = {
    name: 'BaSelect',
    props: {
      // 输入框的 v-model绑定值
      value: { type: String, default: '' },
      // 在定义上拉菜单内容时候需要用这个参数来控制 菜单的展示和隐藏, 'show'是显示,'hide'是隐藏
      selectShow: { type: String, default: null },
      // 上拉菜单传入的配置参数
      selectOptions: { type: Object, default: null }
    },
    data() {
      return {
        show: false, //这里是直接使用上拉菜单的数据赋值的上拉菜单的显示隐藏参数
        show2: false //这里显示的是自定义内容的上拉菜单的显示隐藏控制参数
      };
    },
    computed: {
      // 在这里改变 输入框的 v-model
      model: {
        get() {
          return this.value;
        },
        set(newVal) {
          this.value = newVal;
        }
      },

      showIcon() {
        if (this.show) {
          return 'arrow-up';
        } else {
          return 'arrow-down';
        }
      }
    },
    watch: {
      // 监控 自定义上拉菜单显示隐藏参数,并且把值传给 show2,开控制上拉菜单的显示隐藏
      selectShow(newData, oldData) {
        if (newData === 'show') {
          this.show2 = true;
        } else if (newData === 'hide') {
          this.show2 = false;
        } else {
          this.show2 = false;
        }
      }
    },
    mounted() {},
    methods: {
      // 输入框点击以后的事件,主要用于展示和隐藏上拉菜单
      onClick() {
        this.show = !this.show;
        this.show2 = !this.show2;
        if (this.show || this.show2) {
          return 'arrow-up';
        } else {
          return 'arrow-down';
        }
      },
      // 默认上拉菜单 点击菜单项以后触发的事件
      onSelect(obj) {
        this.show = false;
        this.$emit('select', obj);
      },
      onClose() {
        this.$emit('close');
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;
  /* template */
  var __vue_render__$2 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "begda-select-input" },
      [
        _c(
          "van-field",
          _vm._g(
            _vm._b(
              {
                attrs: { "right-icon": _vm.showIcon, readonly: "" },
                on: { click: _vm.onClick },
                model: {
                  value: _vm.model,
                  callback: function ($$v) {
                    _vm.model = $$v;
                  },
                  expression: "model",
                },
              },
              "van-field",
              _vm.$attrs,
              false
            ),
            _vm.$listeners
          )
        ),
        _vm._v(" "),
        _vm.selectShow
          ? [
              _c(
                "van-action-sheet",
                _vm._b(
                  {
                    attrs: { round: false },
                    on: { close: _vm.onClose },
                    model: {
                      value: _vm.show2,
                      callback: function ($$v) {
                        _vm.show2 = $$v;
                      },
                      expression: "show2",
                    },
                  },
                  "van-action-sheet",
                  _vm.$props.selectOptions,
                  false
                ),
                [_vm._t("default")],
                2
              ),
            ]
          : [
              _c(
                "van-action-sheet",
                _vm._b(
                  {
                    attrs: { round: false },
                    on: {
                      select: _vm.onSelect,
                      cancel: function ($event) {
                        return _vm.$emit("cancel")
                      },
                    },
                    model: {
                      value: _vm.show,
                      callback: function ($$v) {
                        _vm.show = $$v;
                      },
                      expression: "show",
                    },
                  },
                  "van-action-sheet",
                  _vm.$props.selectOptions,
                  false
                ),
                [_vm._t("default")],
                2
              ),
            ],
      ],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  const components$3 = [__vue_component__$2];
  const install$3 = function (Vue, opts = {}) {
    components$3.forEach(component => {
      Vue.component(component.name, component);
    });
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install$3(window.Vue);
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
    name: 'BaCell',
    props: {
      title: { type: String, default: '' },
      value: { type: String, default: '' },
      label: { type: String, default: '' },
      isLink: { type: Boolean, default: false }
    },
    computed: {},
    mounted() {}
  };

  /* script */
  const __vue_script__$1 = script$1;
  /* template */
  var __vue_render__$1 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "van-cell",
      { staticClass: "cell-box", attrs: { "is-link": _vm.isLink } },
      [
        _c("div", { staticClass: "cell-box-header" }, [
          _c("div", { staticClass: "cell-box-title" }, [
            _vm._v(_vm._s(_vm.title)),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "cell-box-value" }, [
            _vm._v(_vm._s(_vm.value)),
          ]),
        ]),
        _vm._v(" "),
        _vm.$slots.default
          ? _c("div", { staticClass: "cell-box-label" }, [_vm._t("default")], 2)
          : _c("div", { staticClass: "cell-box-label" }, [
              _vm._v("\n    " + _vm._s(_vm.label) + "\n  "),
            ]),
      ]
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = "data-v-b3aa811a";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  const components$2 = [__vue_component__$1];
  const install$2 = function (Vue, opts = {}) {
    components$2.forEach(component => {
      Vue.component(component.name, component);
    });
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install$2(window.Vue);
  }

  //
  //
  //
  //
  //
  //

  var script = {
    name: 'BaWebView',
    data() {
      return {
        webviewStyle: {
          width: '100%',
          padding: 0,
          margin: 0,
          border: 'none',
          height: '0'
        }
      };
    },
    props: {
      src: { type: String, default: null },
      height: { type: Number, default: 0 }
    },
    computed: {},
    mounted() {
      this.$nextTick(() => {
        this.view();
      });
    },
    methods: {
      load() {
        this.$emit('load', 'load');
      },
      view() {
        let self = this;
        let webview = this.$refs.webview;
        webview.style.height = `${self.height}px`;
      }
    }
  };

  /* script */
  const __vue_script__ = script;
  /* template */
  var __vue_render__ = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "ba-web-view" }, [
      _c("iframe", {
        ref: "webview",
        style: _vm.webviewStyle,
        attrs: { src: _vm.src },
        on: { load: _vm.load },
      }),
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = "data-v-03b725d1";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  const components$1 = [__vue_component__];
  const install$1 = function (Vue, opts = {}) {
    components$1.forEach(component => {
      Vue.component(component.name, component);
    });
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install$1(window.Vue);
  }

  const components = [__vue_component__$5, BaPanel, __vue_component__$4, __vue_component__$3, __vue_component__$2, __vue_component__$1, __vue_component__];

  const install = function (Vue, opts = {}) {
    //datav组件库
    Vue.use(borderBox11);
    Vue.use(borderBox12);
    Vue.use(borderBox13);
    Vue.use(borderBox9);
    //element-ui组件库
    Vue.use(Scrollbar);
    Vue.use(Loading);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    //vant组件库
    Vue.use(default_1$4);
    Vue.use(default_1$3);
    Vue.use(default_1$2);
    Vue.use(default_1$1);
    // Vue.use(Popup);
    Vue.use(default_1);
    // Vue.use(DatetimePicker);

    //加载自己的组件
    components.forEach(component => {
      Vue.component(component.name, component);
    });

    // Vue.use(borderBox1);

    // Vue.prototype.$ELEMENT = {
    //     size: opts.size || '',
    //     zIndex: opts.zIndex || 2000
    // };

    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;
  };

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);

    //下面这个是,配合tailwindcss 做暗色模式的js
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');
  }

  /***
   在es模块中， 能被按需引入的变量需要用这些方式导出：
   export const a = 1
   export function a(){}
   export { a, b }
   而不能使用export default
   ***/
  var index = {
    install,
    version: version,
    BaScrollbar: __vue_component__$3,
    Panel: __vue_component__$5,
    BaPanel,
    BaPanelData: __vue_component__$4
  };

  return index;

}));
