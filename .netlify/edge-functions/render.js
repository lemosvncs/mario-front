var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function is_promise(value) {
  return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_current_component(component8) {
  current_component = component8;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component8, name) {
  if (!component8 || !component8.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component8;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index8 = 0;
      while (index8 < str.length) {
        var eqIdx = str.indexOf("=", index8);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index8);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index8 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index8, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index8 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options2.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.js
var layout_exports = {};
var init_layout = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets,
  universal: () => layout_exports
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-383e951f.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-383e951f.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/modules/pages/_layout.js-4ed993c7.js"];
    stylesheets = ["_app/immutable/assets/_layout-2fa2c027.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-3d5abacb.js";
    imports2 = ["_app/immutable/components/error.svelte-3d5abacb.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/singletons-0ee7c03a.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<i>All your data are belong to us</i>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-1879ec7b.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-1879ec7b.js", "_app/immutable/chunks/index-5932b100.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/chunks/header.js
var Header;
var init_header = __esm({
  ".svelte-kit/output/server/chunks/header.js"() {
    init_chunks();
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<nav class="${"relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-black"}"><div class="${"flex w-full flex-wrap items-center justify-between px-6"}"><div><a class="${"mt-2 mr-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0"}" href="${"#"}"><svg width="${"140"}" height="${"40"}" viewBox="${"0 0 140 40"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M50.468 24.3997H47.5126L48.1999 20.4133H51.1553L51.3615 19.2793C51.7281 17.3319 52.5643 15.8656 53.8702 14.8805C55.1761 13.8724 56.9287 13.3684 59.1281 13.3684H61.568L60.8464 17.3548H58.4752C57.8337 17.3548 57.2953 17.5037 56.86 17.8015C56.4476 18.0765 56.1727 18.5919 56.0352 19.348L55.829 20.4133H59.9529L59.2656 24.3997H55.1417L52.8049 37.5616H48.1312L50.468 24.3997ZM65.8605 18.7981C65.1044 18.7981 64.4973 18.592 64.0391 18.1796C63.5809 17.7672 63.3518 17.2288 63.3518 16.5644C63.3518 15.5563 63.6611 14.743 64.2797 14.1245C64.9212 13.483 65.7688 13.1622 66.8227 13.1622C67.5788 13.1622 68.1859 13.3684 68.6441 13.7808C69.1023 14.1932 69.3314 14.7316 69.3314 15.396C69.3314 16.404 69.0106 17.2288 68.3692 17.8703C67.7506 18.4889 66.9144 18.7981 65.8605 18.7981ZM63.2144 20.4133H67.888L64.8639 37.5616H60.1902L63.2144 20.4133ZM75.9668 37.8365C73.9966 37.8365 72.4272 37.3898 71.2588 36.4963C70.1133 35.6028 69.5405 34.4 69.5405 32.8879C69.5405 32.5443 69.5749 32.2006 69.6436 31.857H74.2486C74.2257 31.9486 74.2142 32.0746 74.2142 32.235C74.2142 32.7619 74.386 33.1743 74.7297 33.4721C75.0733 33.77 75.5545 33.9189 76.173 33.9189H79.2659C79.9303 33.9189 80.4573 33.8272 80.8467 33.644C81.2362 33.4378 81.4653 33.1514 81.534 32.7848L81.6371 32.2006C81.6829 31.9715 81.6028 31.7653 81.3966 31.582C81.2133 31.3759 80.9384 31.2384 80.5718 31.1697L74.7984 30.1387C73.5842 29.9096 72.6334 29.4858 71.9461 28.8672C71.2588 28.2257 70.9151 27.4582 70.9151 26.5647C70.9151 26.4272 70.9381 26.2211 70.9839 25.9461L71.1901 24.8121C71.4421 23.3458 72.1981 22.2003 73.4582 21.3755C74.7412 20.5508 76.3792 20.1384 78.3724 20.1384H81.0529C82.9086 20.1384 84.3749 20.5622 85.4517 21.4099C86.5514 22.2347 87.1012 23.3458 87.1012 24.7433C87.1012 25.0412 87.0669 25.3619 86.9981 25.7056H82.3932C82.4161 25.6368 82.4275 25.5337 82.4275 25.3963C82.4275 24.9839 82.2786 24.6632 81.9808 24.4341C81.7059 24.182 81.3278 24.056 80.8467 24.056H78.235C77.5477 24.056 76.9864 24.1477 76.5511 24.331C76.1387 24.5142 75.8981 24.7663 75.8294 25.087L75.7263 25.6368C75.6805 25.8659 75.7377 26.0721 75.8981 26.2554C76.0585 26.4387 76.322 26.5647 76.6885 26.6334L82.7368 27.7675C83.8823 27.9966 84.7758 28.4319 85.4173 29.0734C86.0817 29.692 86.4139 30.4136 86.4139 31.2384C86.4139 31.4675 86.4025 31.6393 86.3795 31.7539L86.1734 32.991C85.9213 34.526 85.1653 35.7173 83.9052 36.565C82.6681 37.4127 81.0529 37.8365 79.0597 37.8365H75.9668ZM90.4287 37.9053C89.7185 37.9053 89.1458 37.6991 88.7105 37.2867C88.2752 36.8743 88.0575 36.3359 88.0575 35.6715C88.0575 34.6635 88.3554 33.8502 88.951 33.2316C89.5696 32.5901 90.3829 32.2694 91.391 32.2694C92.1012 32.2694 92.6739 32.4755 93.1092 32.8879C93.5445 33.3003 93.7622 33.8387 93.7622 34.5031C93.7622 35.5112 93.4529 36.3359 92.8343 36.9774C92.2387 37.596 91.4368 37.9053 90.4287 37.9053ZM111.984 31.9601H102.946L99.8529 37.5616H94.7325L108.376 13.5059H110.506C111.995 13.5059 112.889 14.1932 113.187 15.5678L117.86 37.5616H113.084L111.984 31.9601ZM104.939 27.9737H111.4L109.75 19.3136H109.716L104.939 27.9737ZM124.687 13.5059H129.43L125.203 37.5616H120.461L124.687 13.5059Z"}" fill="${"white"}"></path><path d="${"M13.3639 27.0128L17.3265 35.4394L12.5116 40L4.60533 36.9651L0.602743 29.4873L4.51115 24.1262L13.3639 27.0128ZM19.7092 20.4438L14.1268 26.702L18.0729 35.138L27.4766 38.4861L34.2221 33.245L30.4715 23.5917L19.7092 20.4438ZM4.4052 6.91742L0 14.3458L4.50174 23.328L13.4204 26.1934L19.0005 19.7963L14.5435 9.4367L4.4052 6.91742ZM22.1696 0L15.4994 9.07411L19.9353 19.4879L30.8435 22.6029L39.0535 14.8896L34.9167 2.58991L22.1696 0Z"}" fill="${"white"}"></path></svg></a></div>
    <div><svg width="${"280"}" height="${"20"}" viewBox="${"0 0 280 20"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8.89186 7.39147C9.5185 7.88394 9.83108 8.57988 9.8296 9.47929C9.8296 10.7783 9.41012 11.7816 8.57116 12.4894C7.7322 13.1971 6.57992 13.551 5.11432 13.551H2.05115L1.38765 16.9039H0.631256L2.68148 6.65277H6.25554C7.38792 6.65277 8.26669 6.899 8.89186 7.39147ZM8.04257 12.036C8.72672 11.4698 9.06879 10.6397 9.06879 9.54564C9.08586 9.23338 9.02744 8.92161 8.89847 8.63672C8.7695 8.35183 8.57378 8.10221 8.32788 7.909C7.83541 7.52564 7.12989 7.3347 6.21131 7.33618H3.29632L2.17943 12.8764H5.11432C6.38382 12.8764 7.3599 12.5933 8.04257 12.0271V12.036Z"}" fill="${"white"}"></path><path d="${"M13.2135 16.4505C12.5426 16.1294 11.9839 15.6138 11.61 14.9709C11.2325 14.296 11.0424 13.5324 11.0593 12.7592C11.0506 11.6856 11.3098 10.6266 11.8135 9.67839C12.3107 8.74285 13.056 7.96234 13.9676 7.42248C14.9455 6.84909 16.0633 6.55816 17.1967 6.58205C18.0733 6.55892 18.9432 6.73988 19.7379 7.11064C20.4116 7.43092 20.9734 7.94646 21.3502 8.59025C21.726 9.26576 21.9153 10.0291 21.8987 10.8019C21.9073 11.876 21.6448 12.9348 21.1357 13.8806C20.6385 14.814 19.896 15.594 18.9881 16.1365C18.0061 16.7116 16.8836 17.0026 15.7458 16.9769C14.8722 17.0013 14.005 16.821 13.2135 16.4505ZM18.6033 15.5504C19.3998 15.0721 20.0488 14.3833 20.4788 13.5599C20.9211 12.7178 21.149 11.7796 21.1423 10.8285C21.1423 9.73368 20.7995 8.86892 20.1117 8.22753C19.4238 7.58615 18.4286 7.26766 17.1392 7.26766C16.1603 7.24947 15.1958 7.50534 14.3547 8.00636C13.5571 8.48527 12.9061 9.17374 12.4726 9.99687C12.0274 10.8379 11.7994 11.7768 11.809 12.7283C11.809 13.812 12.1555 14.676 12.8485 15.3204C13.5415 15.9647 14.5324 16.2869 15.821 16.2869C16.7989 16.3053 17.7626 16.0502 18.6033 15.5504Z"}" fill="${"white"}"></path><path d="${"M38.8313 6.65277L33.3021 16.9039H32.5103L31.1634 7.73649L26.1318 16.9039H25.3401L23.9047 6.65277H24.6522L25.9416 15.9086L31.0108 6.65277H31.7119L33.061 15.9086L38.0705 6.65277H38.8313Z"}" fill="${"white"}"></path><path d="${"M41.598 7.32516L40.7929 11.3681H46.2425L46.1098 12.0316H40.6624L39.8131 16.2338H46.1385L45.9926 16.8973H38.9329L40.9831 6.64618H47.8393L47.6911 7.30968L41.598 7.32516Z"}" fill="${"white"}"></path><path d="${"M57.0886 12.0648C56.4704 12.7662 55.6305 13.2345 54.7088 13.3918L56.6861 16.9061H55.8655L53.948 13.509C53.634 13.5289 53.3951 13.5378 53.2292 13.5378H50.1528L49.4893 16.9061H48.744L50.7942 6.65503H54.3749C55.5102 6.65503 56.3868 6.90126 57.0046 7.39373C57.6224 7.88619 57.9327 8.58213 57.9357 9.48155C57.9327 10.5343 57.6504 11.3954 57.0886 12.0648ZM56.1575 12.0272C56.8402 11.461 57.1822 10.6309 57.1837 9.53684C57.1996 9.22623 57.1408 8.91634 57.0123 8.63312C56.8838 8.3499 56.6892 8.10161 56.445 7.90905C55.9518 7.52643 55.2441 7.33622 54.3284 7.33622H51.398L50.2921 12.8875H53.2359C54.5009 12.8802 55.4748 12.5934 56.1575 12.0272Z"}" fill="${"white"}"></path><path d="${"M61.9432 7.32516L61.1382 11.3681H66.5855L66.455 12.0316H61.0099L60.1606 16.2338H66.4882L66.3422 16.8973H59.2782L61.3284 6.64618H68.1846L68.0386 7.30968L61.9432 7.32516Z"}" fill="${"white"}"></path><path d="${"M71.126 6.65278H74.9433C75.8324 6.62878 76.7157 6.80331 77.5288 7.16368C78.2014 7.47361 78.7649 7.97926 79.1455 8.61454C79.5272 9.27763 79.7199 10.0326 79.7029 10.7975C79.7254 11.9017 79.4569 12.9925 78.9244 13.9602C78.4018 14.8833 77.6238 15.6359 76.6839 16.1276C75.6479 16.6624 74.4945 16.9293 73.3288 16.9039H69.0758L71.126 6.65278ZM73.3686 16.2315C74.3943 16.2543 75.4091 16.0177 76.319 15.5437C77.1388 15.1057 77.8135 14.4387 78.2609 13.624C78.7243 12.7653 78.9589 11.8018 78.942 10.8262C78.942 9.74249 78.5956 8.88805 77.9026 8.26288C77.2096 7.63772 76.1893 7.32513 74.8416 7.32513H71.7453L69.9582 16.2315H73.3686Z"}" fill="${"white"}"></path><path d="${"M93.4066 12.3567C93.729 12.7441 93.8954 13.2377 93.8733 13.7412C93.8961 14.1975 93.8035 14.6521 93.604 15.063C93.4046 15.474 93.1047 15.828 92.7321 16.0922C91.9683 16.6378 90.9089 16.9106 89.5539 16.9106H84.9381L86.9906 6.65945H91.237C92.2035 6.65945 92.9599 6.84081 93.4995 7.20795C93.7613 7.37873 93.9741 7.6148 94.1168 7.89289C94.2595 8.17097 94.3273 8.48146 94.3134 8.79372C94.3372 9.45579 94.1186 10.1038 93.6986 10.6161C93.2668 11.1132 92.6947 11.4679 92.0575 11.6335C92.5733 11.7231 93.0465 11.9768 93.4066 12.3567ZM92.219 15.6145C92.5145 15.4094 92.7529 15.1325 92.912 14.8098C93.071 14.4871 93.1453 14.1293 93.128 13.77C93.128 13.1551 92.9127 12.7128 92.4822 12.443C92.0516 12.1732 91.4021 12.036 90.5337 12.0316H86.6655L85.8162 16.2648H89.6247C90.7482 16.2618 91.613 16.0451 92.219 15.6145ZM86.7849 11.3836H90.286C91.2606 11.3836 92.0465 11.1713 92.6436 10.7466C92.9337 10.5393 93.1668 10.2622 93.3214 9.941C93.476 9.61977 93.5472 9.26474 93.5283 8.90873C93.5409 8.66915 93.4891 8.43057 93.3782 8.21781C93.2674 8.00504 93.1015 7.82587 92.898 7.69894C92.4777 7.43133 91.8784 7.29642 91.0954 7.29642H87.6054L86.7849 11.3836Z"}" fill="${"white"}"></path><path d="${"M99.5704 13.4625L98.8826 16.9039H98.1351L98.8384 13.3652L96.0561 6.65277H96.839L99.3426 12.7172L104.25 6.65277H105.084L99.5704 13.4625Z"}" fill="${"white"}"></path><path d="${"M110.994 3.09863H114.9V16.9039H110.994V3.09863Z"}" fill="${"white"}"></path><path d="${"M130.806 3.09863V16.9039H127.581L121.495 9.54787V16.9039H117.669V3.09863H120.884L126.978 10.4547V3.09863H130.806Z"}" fill="${"white"}"></path><path d="${"M133.568 3.09863H137.472V16.9039H133.568V3.09863Z"}" fill="${"white"}"></path><path d="${"M143.24 16.2647C142.118 15.6783 141.18 14.7936 140.528 13.708C139.863 12.5874 139.522 11.3043 139.542 10.0012C139.522 8.69751 139.863 7.41371 140.528 6.29224C141.18 5.20763 142.118 4.32429 143.24 3.73997C144.443 3.11547 145.782 2.80004 147.137 2.82213C148.308 2.80198 149.471 3.02803 150.55 3.48563C151.536 3.91404 152.403 4.57774 153.073 5.41863L150.583 7.67454C149.688 6.59524 148.603 6.0556 147.327 6.0556C146.632 6.04539 145.946 6.21531 145.337 6.5488C144.758 6.87149 144.285 7.35459 143.974 7.93994C143.644 8.57608 143.478 9.28467 143.492 10.0012C143.478 10.7178 143.644 11.4264 143.974 12.0625C144.284 12.6483 144.757 13.1316 145.337 13.4536C145.946 13.7871 146.632 13.9571 147.327 13.9468C148.613 13.9468 149.698 13.4087 150.583 12.3323L153.066 14.5816C152.396 15.4225 151.529 16.0862 150.543 16.5146C149.464 16.9722 148.302 17.1982 147.13 17.1781C145.778 17.1998 144.441 16.886 143.24 16.2647Z"}" fill="${"white"}"></path><path d="${"M154.809 3.09863H158.715V16.9039H154.809V3.09863Z"}" fill="${"white"}"></path><path d="${"M170.744 14.2211H164.908L163.822 16.9039H159.841L165.932 3.09863H169.778L175.893 16.9039H171.83L170.744 14.2211ZM169.601 11.346L167.832 6.92262L166.062 11.346H169.601Z"}" fill="${"white"}"></path><path d="${"M179.246 6.19498H175.006V3.09863H187.374V6.19498H183.152V16.9039H179.246V6.19498Z"}" fill="${"white"}"></path><path d="${"M188.845 3.09863H192.737V16.9039H188.845V3.09863Z"}" fill="${"white"}"></path><path d="${"M209.482 3.09863L203.565 16.9039H199.719L193.821 3.09863H198.043L201.789 12.0913L205.616 3.09863H209.482Z"}" fill="${"white"}"></path><path d="${"M219.07 14.2211H213.231L212.147 16.9039H208.166L214.257 3.09863H218.103L224.218 16.9039H220.156L219.07 14.2211ZM217.926 11.346L216.157 6.92262L214.387 11.346H217.926Z"}" fill="${"white"}"></path><path d="${"M229.227 6.11536V9.15419H235.323V12.1709H229.227V16.9039H225.322V3.09863H236.159V6.11536H229.227Z"}" fill="${"white"}"></path><path d="${"M237.986 3.09863H241.889V16.9039H237.986V3.09863Z"}" fill="${"white"}"></path><path d="${"M246.268 16.7668C245.355 16.5523 244.488 16.1779 243.705 15.6609L244.986 12.7858C245.651 13.2157 246.375 13.5478 247.135 13.7722C247.914 14.0166 248.725 14.1434 249.542 14.1482C251.041 14.1482 251.791 13.7729 251.791 13.0224C251.791 12.6287 251.577 12.3338 251.15 12.1377C250.482 11.875 249.792 11.6736 249.088 11.5362C248.205 11.3551 247.336 11.1142 246.485 10.8152C245.793 10.5615 245.175 10.1379 244.689 9.58326C244.189 9.01707 243.94 8.25405 243.942 7.29418C243.932 6.48197 244.173 5.68655 244.632 5.01616C245.149 4.29364 245.864 3.73604 246.691 3.41048C247.761 2.9881 248.905 2.78793 250.055 2.82218C250.958 2.82166 251.858 2.92406 252.738 3.12739C253.554 3.30673 254.339 3.60952 255.064 4.02533L253.868 6.92483C252.702 6.25489 251.386 5.88835 250.042 5.8588C249.265 5.8588 248.701 5.97381 248.345 6.20383C248.185 6.29328 248.052 6.4235 247.959 6.58122C247.866 6.73894 247.816 6.91855 247.814 7.10177C247.814 7.47111 248.036 7.74536 248.445 7.93114C249.102 8.18357 249.782 8.37459 250.475 8.50175C251.363 8.67933 252.236 8.92028 253.089 9.22276C253.778 9.47822 254.394 9.89808 254.883 10.4458C255.389 11.0061 255.642 11.7654 255.644 12.7238C255.652 13.5262 255.41 14.3112 254.954 14.9709C254.43 15.6923 253.712 16.2499 252.884 16.5788C251.818 17.0075 250.676 17.2122 249.528 17.1804C248.428 17.1838 247.333 17.0448 246.268 16.7668Z"}" fill="${"white"}"></path><path d="${"M264.828 14.7373L261.464 11.373C261.386 11.2952 261.329 11.1992 261.299 11.0938C261.268 10.9883 261.264 10.8768 261.288 10.7696C261.311 10.6623 261.361 10.5627 261.434 10.4799C261.506 10.3971 261.598 10.3338 261.701 10.2958L265.432 8.78586"}" stroke="${"white"}" stroke-width="${"0.5"}"></path><path d="${"M269.833 18.4289L270.068 18.5153L270.068 18.5153L269.833 18.4289ZM269.649 18.6961L269.814 18.8845L269.814 18.8845L269.649 18.6961ZM269.36 18.8421L269.413 19.0863V19.0863L269.36 18.8421ZM269.035 18.8312L268.965 19.0712H268.965L269.035 18.8312ZM268.756 18.6659L268.579 18.8427L268.579 18.8428L268.756 18.6659ZM270.691 16.0998L270.459 16.0048L270.456 16.0134L270.691 16.0998ZM271.6 14.5424C271.653 14.4146 271.591 14.2686 271.464 14.2162C271.336 14.1637 271.19 14.2248 271.138 14.3525L271.6 14.5424ZM269.599 18.3425C269.575 18.4062 269.536 18.463 269.485 18.5077L269.814 18.8845C269.928 18.7847 270.015 18.6577 270.068 18.5153L269.599 18.3425ZM269.485 18.5077C269.434 18.5523 269.372 18.5834 269.306 18.5979L269.413 19.0863C269.561 19.0536 269.699 18.9842 269.814 18.8845L269.485 18.5077ZM269.306 18.5979C269.239 18.6125 269.171 18.6102 269.105 18.5912L268.965 19.0712C269.111 19.1137 269.265 19.1189 269.413 19.0863L269.306 18.5979ZM269.105 18.5912C269.04 18.5722 268.981 18.537 268.933 18.489L268.579 18.8428C268.687 18.9501 268.82 19.0286 268.965 19.0712L269.105 18.5912ZM268.933 18.4892L265.569 15.1248L265.215 15.4784L268.579 18.8427L268.933 18.4892ZM270.456 16.0134L269.599 18.3425L270.068 18.5153L270.925 16.1862L270.456 16.0134ZM271.138 14.3525L270.459 16.0049L270.922 16.1947L271.6 14.5424L271.138 14.3525Z"}" fill="${"white"}"></path><path d="${"M274.097 1.92303C274.115 1.91592 274.134 1.91424 274.153 1.9182C274.172 1.92216 274.189 1.93158 274.203 1.94529L278.056 5.82821C278.07 5.84183 278.079 5.85914 278.083 5.878C278.087 5.89686 278.085 5.91643 278.078 5.93429C277.155 8.19987 275.883 10.6095 274.179 12.3133C272.52 13.9725 269.714 15.3862 267.18 16.426L263.584 12.8299C264.624 10.2959 266.038 7.49007 267.697 5.83083C269.406 4.12182 271.825 2.84694 274.096 1.92368L274.097 1.92303Z"}" stroke="${"white"}" stroke-width="${"0.5"}"></path><path d="${"M274.972 6.85031C274.976 7.07601 274.935 7.30022 274.851 7.50986C274.768 7.71951 274.643 7.91039 274.485 8.07138C274.327 8.23236 274.138 8.36023 273.93 8.44751C273.722 8.53479 273.498 8.57974 273.272 8.57974C273.047 8.57974 272.823 8.53479 272.615 8.44751C272.407 8.36023 272.218 8.23236 272.06 8.07138C271.902 7.91039 271.777 7.71951 271.693 7.50986C271.61 7.30022 271.569 7.07601 271.573 6.85031C271.58 6.40456 271.763 5.97967 272.081 5.66716C272.399 5.35465 272.827 5.17953 273.272 5.17953C273.718 5.17953 274.146 5.35465 274.464 5.66716C274.782 5.97967 274.965 6.40456 274.972 6.85031Z"}" stroke="${"white"}"></path><path d="${"M261.623 15.6238C261.845 15.2541 262.126 14.9771 262.469 14.8397L262.471 14.839L262.482 14.8349C262.492 14.8311 262.508 14.8254 262.529 14.8183C262.571 14.804 262.634 14.7842 262.713 14.7633C262.871 14.7214 263.092 14.6758 263.342 14.6607C263.845 14.6302 264.435 14.7237 264.892 15.1778C265.368 15.6501 265.493 16.1427 265.505 16.5145C265.511 16.7027 265.488 16.8617 265.464 16.9726C265.452 17.0279 265.439 17.0707 265.43 17.0985C265.426 17.1124 265.422 17.1225 265.42 17.1285L265.418 17.1343C265.418 17.1344 265.418 17.1344 265.418 17.1345C265.418 17.1345 265.418 17.1348 265.418 17.1348C265.418 17.1348 265.418 17.1348 265.418 17.1348L265.416 17.1406L265.413 17.1477C265.212 17.7519 264.671 18.196 264.121 18.4643C263.85 18.5968 263.589 18.6796 263.389 18.7159C263.324 18.7276 263.27 18.7339 263.225 18.7361C263.237 18.7004 263.251 18.6516 263.258 18.6045C263.268 18.5298 263.266 18.4012 263.162 18.2967L262.985 18.4735L263.162 18.2973C263.089 18.224 262.996 18.186 262.895 18.1857C262.809 18.1856 262.729 18.2126 262.667 18.2378C262.59 18.2694 262.489 18.3219 262.372 18.3822C262.311 18.4136 262.247 18.4472 262.179 18.481C262.042 18.5496 261.787 18.6475 261.549 18.7049C261.429 18.7337 261.325 18.7494 261.248 18.7501C261.214 18.7504 261.193 18.7478 261.182 18.7458C261.167 18.7224 261.141 18.6718 261.116 18.5792C261.086 18.467 261.063 18.319 261.053 18.1422C261.032 17.7891 261.061 17.3457 261.154 16.8942C261.247 16.4421 261.401 15.9935 261.623 15.6238ZM263.12 18.7308C263.12 18.7308 263.121 18.7309 263.122 18.7313L263.12 18.7308Z"}" stroke="${"white"}" stroke-width="${"0.5"}"></path><path d="${"M261.623 15.6238C261.845 15.2541 262.126 14.9771 262.469 14.8397L262.471 14.839L262.482 14.8349C262.492 14.8311 262.508 14.8254 262.529 14.8183C262.571 14.804 262.634 14.7842 262.713 14.7633C262.871 14.7214 263.092 14.6758 263.342 14.6607C263.845 14.6302 264.435 14.7237 264.892 15.1778C265.368 15.6501 265.493 16.1427 265.505 16.5145C265.511 16.7027 265.488 16.8617 265.464 16.9726C265.452 17.0279 265.439 17.0707 265.43 17.0985C265.426 17.1124 265.422 17.1225 265.42 17.1285L265.418 17.1343C265.418 17.1344 265.418 17.1344 265.418 17.1345C265.418 17.1345 265.418 17.1348 265.418 17.1348C265.418 17.1348 265.418 17.1348 265.418 17.1348L265.416 17.1406L265.413 17.1477C265.212 17.7519 264.671 18.196 264.121 18.4643C263.85 18.5968 263.589 18.6796 263.389 18.7159C263.324 18.7276 263.27 18.7339 263.225 18.7361C263.237 18.7004 263.251 18.6516 263.258 18.6045C263.268 18.5298 263.266 18.4012 263.162 18.2967L262.985 18.4735L263.162 18.2973C263.089 18.224 262.996 18.186 262.895 18.1857C262.809 18.1856 262.729 18.2126 262.667 18.2378C262.59 18.2694 262.489 18.3219 262.372 18.3822C262.311 18.4136 262.247 18.4472 262.179 18.481C262.042 18.5496 261.787 18.6475 261.549 18.7049C261.429 18.7337 261.325 18.7494 261.248 18.7501C261.214 18.7504 261.193 18.7478 261.182 18.7458C261.167 18.7224 261.141 18.6718 261.116 18.5792C261.086 18.467 261.063 18.319 261.053 18.1422C261.032 17.7891 261.061 17.3457 261.154 16.8942C261.247 16.4421 261.401 15.9935 261.623 15.6238ZM263.12 18.7308C263.12 18.7308 263.121 18.7309 263.122 18.7313L263.12 18.7308Z"}" stroke="${"white"}" stroke-width="${"0.5"}"></path><path d="${"M262.99 13.8347L262.99 13.8346C263.058 13.7666 263.139 13.7126 263.228 13.6758C263.317 13.6389 263.412 13.62 263.508 13.62C263.604 13.62 263.7 13.6389 263.788 13.6758C263.877 13.7126 263.958 13.7666 264.026 13.8346L264.026 13.8346L266.338 16.1474C266.468 16.2856 266.539 16.4688 266.536 16.6583C266.534 16.849 266.457 17.0311 266.322 17.166C266.187 17.3008 266.005 17.3778 265.815 17.3805C265.625 17.3831 265.442 17.3122 265.304 17.1826L262.99 14.8705L262.99 14.8705C262.922 14.8025 262.868 14.7218 262.831 14.6329C262.794 14.5441 262.776 14.4488 262.776 14.3526C262.776 14.2564 262.794 14.1612 262.831 14.0723C262.868 13.9835 262.922 13.9027 262.99 13.8347Z"}" fill="${"white"}" stroke="${"white"}" stroke-width="${"0.5"}"></path><path d="${"M278.531 1.47828C277.911 0.858187 276.824 0.92825 276.031 1.20064C275.434 1.4055 274.841 1.62536 274.254 1.86002C274.244 1.86404 274.235 1.87047 274.228 1.87874C274.222 1.88701 274.217 1.89686 274.215 1.90742C274.212 1.91798 274.213 1.92893 274.216 1.93928C274.219 1.94963 274.224 1.95907 274.232 1.96675L278.036 5.79663C278.044 5.80408 278.053 5.80954 278.064 5.81255C278.074 5.81556 278.085 5.81601 278.095 5.81388C278.106 5.81175 278.115 5.8071 278.124 5.80033C278.132 5.79355 278.138 5.78487 278.142 5.77502C278.38 5.18208 278.603 4.58319 278.81 3.97893C279.078 3.19711 279.294 2.24111 278.531 1.47828V1.47828Z"}" stroke="${"white"}" stroke-width="${"0.4"}"></path><path d="${"M268.41 10.7799L268.41 10.7799C268.995 10.5643 269.565 11.1336 269.349 11.7201L269.349 11.7201L267.635 16.3783L267.635 16.3784C267.611 16.4422 267.572 16.4991 267.521 16.5438L267.686 16.7321L267.521 16.5438C267.47 16.5885 267.408 16.6196 267.342 16.6342C267.276 16.6488 267.207 16.6464 267.141 16.6273C267.076 16.6082 267.017 16.573 266.969 16.525L266.969 16.5249L263.604 13.1607C263.556 13.1126 263.521 13.0533 263.502 12.9881C263.483 12.9229 263.481 12.854 263.495 12.7877C263.51 12.7213 263.541 12.6598 263.586 12.6086C263.63 12.5574 263.687 12.5183 263.751 12.4948C263.751 12.4948 263.751 12.4948 263.751 12.4948L268.41 10.7799Z"}" stroke="${"white"}" stroke-width="${"0.5"}"></path></svg></div></div></nav>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/luide/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/luide/_page.svelte.js"() {
    init_chunks();
    init_header();
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"dark bg-black"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <iframe class="${"w-full"}" width="${"600"}" height="${"800"}" src="${"https://lookerstudio.google.com/embed/reporting/320faa37-bbda-41c1-ab2c-95729a3464d1/page/BwBKD"}" frameborder="${"0"}" style="${"border:0"}" allowfullscreen></iframe></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/luide/_page.svelte-bb20e9f5.js";
    imports4 = ["_app/immutable/components/pages/luide/_page.svelte-bb20e9f5.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/header-aa277db2.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/Icon.js
var css, Icon;
var init_Icon = __esm({
  ".svelte-kit/output/server/chunks/Icon.js"() {
    init_chunks();
    css = {
      code: ".fa-svelte.svelte-qwu10m{width:1em;height:1em;overflow:visible;display:inline-block}",
      map: null
    };
    Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { icon } = $$props;
      let path = [];
      let classes = "";
      let viewBox = "";
      if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
        $$bindings.icon(icon);
      $$result.css.add(css);
      viewBox = "0 0 " + icon.icon[0] + " " + icon.icon[1];
      classes = "fa-svelte " + ($$props.class ? $$props.class : "");
      path = icon.icon[4];
      return `<svg aria-hidden="${"true"}" class="${escape(null_to_empty(classes), true) + " svelte-qwu10m"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"${add_attribute("viewBox", viewBox, 0)}><path fill="${"currentColor"}"${add_attribute("d", path, 0)}></path></svg>`;
    });
  }
});

// node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faPaperPlane.js
var require_faPaperPlane = __commonJS({
  "node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faPaperPlane.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "paper-plane";
    var width = 512;
    var height = 512;
    var aliases = [61913];
    var unicode = "f1d8";
    var svgPathData = "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faPaperPlane = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faAnglesDown.js
var require_faAnglesDown = __commonJS({
  "node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faAnglesDown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "angles-down";
    var width = 384;
    var height = 512;
    var aliases = ["angle-double-down"];
    var unicode = "f103";
    var svgPathData = "M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faAnglesDown = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js
var require_faSpinner = __commonJS({
  "node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "spinner";
    var width = 512;
    var height = 512;
    var aliases = [];
    var unicode = "f110";
    var svgPathData = "M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        aliases,
        unicode,
        svgPathData
      ]
    };
    exports.faSpinner = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  }
});

// .svelte-kit/output/server/entries/pages/mario/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var import_faPaperPlane, import_faAnglesDown, import_faSpinner, Emocoes, texto_feedback_pos, texto_feedback_neg, placeholder, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/mario/_page.svelte.js"() {
    init_chunks();
    init_Icon();
    init_header();
    import_faPaperPlane = __toESM(require_faPaperPlane(), 1);
    import_faAnglesDown = __toESM(require_faAnglesDown(), 1);
    import_faSpinner = __toESM(require_faSpinner(), 1);
    Emocoes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { alegria } = $$props;
      let { tristeza } = $$props;
      let { medo } = $$props;
      let { nojo } = $$props;
      let { raiva } = $$props;
      let { surpresa } = $$props;
      let { scaleFactor } = $$props;
      if ($$props.alegria === void 0 && $$bindings.alegria && alegria !== void 0)
        $$bindings.alegria(alegria);
      if ($$props.tristeza === void 0 && $$bindings.tristeza && tristeza !== void 0)
        $$bindings.tristeza(tristeza);
      if ($$props.medo === void 0 && $$bindings.medo && medo !== void 0)
        $$bindings.medo(medo);
      if ($$props.nojo === void 0 && $$bindings.nojo && nojo !== void 0)
        $$bindings.nojo(nojo);
      if ($$props.raiva === void 0 && $$bindings.raiva && raiva !== void 0)
        $$bindings.raiva(raiva);
      if ($$props.surpresa === void 0 && $$bindings.surpresa && surpresa !== void 0)
        $$bindings.surpresa(surpresa);
      if ($$props.scaleFactor === void 0 && $$bindings.scaleFactor && scaleFactor !== void 0)
        $$bindings.scaleFactor(scaleFactor);
      return `<div class="${"dark:text-white flex flex-row flex-wrap lg:flex-no-wrap py-16 justify-center"}"><span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(alegria) + Number(scaleFactor), true)}"><h2>Alegria</h2>
        <img class="${"mx-auto"}" src="${"img/noto_grinning-face-with-smiling-eyes.svg"}" alt="${"Emoji sorrindo"}">
        <p>${escape((Number(alegria) * 100).toFixed(2))}%</p>
        </span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(tristeza) + Number(scaleFactor), true)}"><h2>Tristeza</h2>
        <img class="${"mx-auto"}" src="${"img/noto_disappointed-face.svg"}" alt="${"Emoji triste"}">
        <p>${escape((Number(tristeza) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(medo) + Number(scaleFactor), true)}"><h2>Medo</h2>
        <img class="${"mx-auto"}" src="${"img/noto_anxious-face-with-sweat.svg"}" alt="${"Emoji com cara de assustado"}"> 
        <p>${escape((Number(medo) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(nojo) + Number(scaleFactor), true)}"><h2>Nojo</h2>
        <img class="${"mx-auto"}" src="${"img/noto_nauseated-face.svg"}" alt="${"Emoji enjoado"}">
        <p>${escape((Number(nojo) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(raiva) + Number(scaleFactor), true)}"><h2>Raiva</h2>
        <img class="${"mx-auto"}" src="${"img/noto_enraged-face.svg"}" alt="${"Emoji com raiva"}">
        <p>${escape((Number(raiva) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(surpresa) + Number(scaleFactor), true)}"><h2>Surpresa</h2>
        <img class="${"mx-auto"}" src="${"img/noto_astonished-face.svg"}" alt="${"Emoji surpreso"}">
        <p>${escape((Number(surpresa) * 100).toFixed(2))}%</p></span></div>`;
    });
    texto_feedback_pos = "Acertou";
    texto_feedback_neg = "Errou";
    placeholder = "Escreva uma frase e clique em enviar";
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let paperPlane = import_faPaperPlane.faPaperPlane;
      let hideButtonIcon = import_faAnglesDown.faAnglesDown;
      let spinner = import_faSpinner.faSpinner;
      let hideButtonText = "Saiba mais";
      let frase = "";
      let promise = getEmocao("");
      async function getEmocao(frase2) {
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase2;
        console.log(url);
        const res = await fetch(url, {
          mode: "cors",
          headers: { dataType: "json" }
        });
        const mariores = await res.json();
        if (res.ok) {
          let mario = mariores;
          estado_botao = true;
          return mario;
        } else {
          throw new Error(mariores);
        }
      }
      let estado_botao = true;
      return `<div class="${"dark bg-black container min-w-full min-h-full"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"container mx-auto px-10"}"><div class="${"py-12 mx-auto"}">

            <div class="${"flex justify-center mb-10"}"><img class="${"rounded-full w-60 h-60 border-white border-4"}" src="${"img/mario.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">
                </div>

            <div class="${"text-white"}">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
                    <div class="${"text-center animate-spin"}">${validate_component(Icon, "Icon").$$render($$result, { icon: spinner }, {}, {})}</div>
                    ${validate_component(Emocoes, "Emocoes").$$render(
            $$result,
            {
              alegria: "0.0",
              tristeza: "0.0",
              medo: "0.0",
              nojo: "0.0",
              raiva: "0.0",
              surpresa: "0.0",
              scaleFactor: "1.0"
            },
            {},
            {}
          )}
                    <div class="${"mb-6 dark: bg-black"}"><label class="${"inline-flex w-full"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("value", frase, 0)}>
    
                                <button type="${"button"}" class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                                        </button></label></div>
                    <div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                            <button class="${"p-2 ml-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>

                `;
        }
        return function(mario) {
          return `
                    <div class="${"text-center opacity-0"}">${validate_component(Icon, "Icon").$$render($$result, { icon: spinner }, {}, {})}</div>
                    ${validate_component(Emocoes, "Emocoes").$$render(
            $$result,
            {
              alegria: mario.mario.emocoes.alegria,
              tristeza: mario.mario.emocoes.tristeza,
              medo: mario.mario.emocoes.medo,
              nojo: mario.mario.emocoes.nojo,
              raiva: mario.mario.emocoes.raiva,
              surpresa: mario.mario.emocoes.surpresa,
              scaleFactor: "0.8"
            },
            {},
            {}
          )}
                                <div class="${"mb-6 dark: bg-black"}"><label class="${"inline-flex w-full"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("value", frase, 0)}>
                
                                            <button type="${"button"}" class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                                                    </button></label></div>
                                ${estado_botao === true ? `<div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                                            <button class="${"p-2 ml-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>` : ``}
                                ${estado_botao === false ? `<div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                                            <button class="${"p-2 ml-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>` : ``}
                `;
        }(__value);
      }(promise)}</div>

        

        </div>
        <div class="${"container grid place-items-center"}"><button class="${"text-white"}">${escape(hideButtonText)} ${validate_component(Icon, "Icon").$$render($$result, { icon: hideButtonIcon }, {}, {})}</button></div>
        
        
        
        
        ${``}</div>
    This is the end.
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file5 = "_app/immutable/components/pages/mario/_page.svelte-7cfe2326.js";
    imports5 = ["_app/immutable/components/pages/mario/_page.svelte-7cfe2326.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/faPaperPlane-decf859b.js", "_app/immutable/chunks/header-aa277db2.js"];
    stylesheets5 = ["_app/immutable/assets/Icon-51b1667c.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/reinaldo/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
async function reinaldoIsBack(idade = 48.92, sexo = "homem", peso = 73.4, altura = 165, exc_dias_por_semana = 3.61, exc_qual = "caminhada", idade_comecou_fumar = 17.34, diag_doenca_mental = "nao", diag_colesterol = "nao", cigarro = "nao") {
  let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app/?idade=" + idade + "&sexo=" + sexo + "&peso=" + peso + "&altura=" + altura + "&exc_dias_por_semana=" + exc_dias_por_semana + "&exc_qual=" + exc_qual + "&idade_comecou_fumar=" + idade_comecou_fumar + "&diag_doenca_mental=" + diag_doenca_mental + "&diag_colesterol=" + diag_colesterol + "&cigarro=" + cigarro;
  const res = await fetch(url, {
    mode: "cors",
    headers: { dataType: "json" }
  });
  const reinaldo_res = await res.json();
  if (res.ok) {
    let reinaldo = reinaldo_res;
    console.log(reinaldo);
    return reinaldo;
  } else {
    throw new Error(reinaldo_res);
  }
}
var placeholder2, inputstyle, Reinaldo2, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/reinaldo/_page.svelte.js"() {
    init_chunks();
    init_header();
    placeholder2 = "1";
    inputstyle = "mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    Reinaldo2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let idade = 48.92;
      let sexo = "homem";
      let peso = 73.4;
      let altura = 165;
      let exc_dias_por_semana = 3.61;
      let promise = reinaldoIsBack();
      console.log(idade, sexo, peso, altura);
      return `<div id="${"top"}"></div>

<div class="${"mx-auto text-center border-white border-4 w-80 rounded-md p-4"}">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
        <p>Probabilidade de voc\xEA ser diagnosticado com hipertens\xE3o:</p>
        <h2 class="${"text-2xl"}">${escape(0)}%</h2>
    `;
        }
        return function(reinaldo) {
          return ` 
        <p>Probabilidade de voc\xEA ser diagnosticado com hipertens\xE3o:</p>
        <h2 class="${"text-2xl"}">${escape((100 - reinaldo.reinaldo.probabilidade_nao * 100).toFixed(2))}%</h2>
    `;
        }(__value);
      }(promise)}</div>

<div class="${"flex"}"><div class="${"px-8 float-left"}"><input type="${"hidden"}" name="${"form-name"}" value="${"name_of_my_form"}">
        <form class="${"flex-column w-full max-w-md ml-10 mt-10 mb-10"}"><p>Qual sua idade?</p><input placeholder="${"48"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", idade, 0)}>
            <p class="${"my-4"}">Como voc\xEA se identifica?</p>    
            <div class="${"flex"}"><label class="${"m-2"}"><input name="${"sexo"}" value="${"mulher"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Mulher</p></label>
                <label class="${"m-2"}"><input name="${"sexo"}" value="${"homem"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                    <p>Homem</p></label>
                <label class="${"m-2"}"><input name="${"sexo"}" value="${"outro"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Outro</p></label></div>
            <p class="${"my-4"}">Qual seu peso em Kg?:</p><input placeholder="${"80"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", peso, 0)}>
            <p class="${"my-4"}">Qual sua altura em cent\xEDmetros?</p><input placeholder="${"180"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", altura, 0)}>
            <p class="${"my-4"}">Em quantos dias da semana voc\xEA costuma praticar exerc\xEDcios f\xEDsicos ou esporte?</p><input placeholder="${"2"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", exc_dias_por_semana, 0)}>    
            <p class="${"my-4"}">Qual o exercicio f\xEDsico ou esporte que voc\xEA pratica com mais frequ\xEAncia?</p>
            <div class="${"flex flex-col"}"><label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"caminhada"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                    <p>Caminhada</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"caminhada_esteira"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Caminhada em esteira</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"corrida"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Corrida</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"musculacao"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Muscula\xE7\xE3o</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"ginastica_aerobica"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Gin\xE1stica aer\xF3bica/spinning/step/jump</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"hidro"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Hidrogin\xE1stica</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"ginastica"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Gin\xE1stica / localizada/pilates/alongamento/ioga</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"natacao"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Nata\xE7\xE3o</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"luta"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Artes marciais e luta</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"bicicleta"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Bicicleta/bicicleta ergom\xE9trica</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"futebol"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Futebol</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"basquete"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Basquetebol</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"volei"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Voleibol</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"tenis"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>T\xEAnis</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"danca"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Dan\xE7a (com o objetivo de praticar atividade f\xEDsica)</p></label>
                <label class="${"m-2 flex inline-flex"}"><input name="${"exc_qual"}" value="${"outro"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Outro</p></label></div>
            <p class="${"my-4"}">Voc\xEA fuma ou j\xE1 fumou algum produto de tabaco?</p>
            <div class="${"flex"}"><label class="${"m-2"}"><input name="${"cigarro"}" value="${"sim"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Sim</p></label>
                <label class="${"m-2"}"><input name="${"cigarro"}" value="${"nao"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                    <p>N\xE3o</p></label></div>
            ${``}
            <p class="${"my-4"}">Voc\xEA j\xE1 foi diagnosticado com algum tipo de doen\xE7a mental, como ansiedade ou depress\xE3o?</p>
            <div class="${"flex"}"><label class="${"m-2"}"><input name="${"diag_doenca_mental"}" value="${"sim"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Sim</p></label>
                <label class="${"m-2"}"><input name="${"diag_doenca_mental"}" value="${"nao"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                    <p>N\xE3o</p></label></div>
            <p class="${"my-4"}">Voc\xEA j\xE1 foi diagnosticado colesterol alto?</p>
            <div class="${"flex"}"><label class="${"m-2"}"><input name="${"diag_colesterol"}" value="${"sim"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                    <p>Sim</p></label>
                <label class="${"m-2"}"><input name="${"diag_colesterol"}" value="${"nao"}" type="${"radio"}"${add_attribute("placeholder", placeholder2, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                    <p>N\xE3o</p></label></div>
            <div class="${"flex inline-flex mt-4"}"><button type="${"button"}" class="${"w-64 h-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">
                    Enviar
                </button></div></form>
        <div class="${"mx-auto text-center mb-10"}"><a href="${"#top"}" class="${"border-white border-4 w-80 rounded-md p-4"}"><button type="${"button"}">Voltar ao topo</button></a></div></div>
    
    <div class="${"float-right mx-auto"}"></div></div>`;
    });
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"dark bg-black container min-w-full min-h-full text-white"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"container mx-auto px-10 py-12"}"><div class="${"flex justify-center mb-10"}"><img class="${"rounded-full w-60 h-60 border-white border-4"}" src="${"img/reinaldo3.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">
            </div></div>
        ${validate_component(Reinaldo2, "Reinaldob").$$render($$result, {}, {}, {})}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file6 = "_app/immutable/components/pages/reinaldo/_page.svelte-4f51bcfd.js";
    imports6 = ["_app/immutable/components/pages/reinaldo/_page.svelte-4f51bcfd.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/header-aa277db2.js"];
    stylesheets6 = ["_app/immutable/assets/Icon-51b1667c.css"];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/reinaldo_old/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
async function reinaldoIsBack2(idade = 48.92, sexo = "homem", peso = 73.4, altura = 165, exc_dias_por_semana = 3.61, exc_qual = "caminhada", idade_comecou_fumar = 17.34, diag_doenca_mental = "nao", diag_colesterol = "nao", cigarro = "nao") {
  let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app/reinaldo?idade=" + idade + "&sexo=" + sexo + "&peso=" + peso + "&altura=" + altura + "&exc_dias_por_semana=" + exc_dias_por_semana + "&exc_qual=" + exc_qual + "&idade_comecou_fumar=" + idade_comecou_fumar + "&diag_doenca_mental=" + diag_doenca_mental + "&diag_colesterol=" + diag_colesterol + "&cigarro=" + cigarro;
  console.log(url);
  const res = await fetch(url, {
    mode: "cors",
    headers: { dataType: "json" }
  });
  const reinaldo_res = await res.json();
  if (res.ok) {
    let reinaldo = reinaldo_res;
    console.log(reinaldo);
    return reinaldo;
  } else {
    throw new Error(reinaldo_res);
  }
}
var import_faPaperPlane2, placeholder3, inputstyle2, Reinaldo, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/reinaldo_old/_page.svelte.js"() {
    init_chunks();
    init_header();
    init_Icon();
    import_faPaperPlane2 = __toESM(require_faPaperPlane(), 1);
    placeholder3 = "1";
    inputstyle2 = "mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    Reinaldo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let paperPlane = import_faPaperPlane2.faPaperPlane;
      let idade;
      let peso;
      let altura;
      let exc_dias_por_semana;
      let reinaldo = 0;
      reinaldoIsBack2();
      return `<div class="${"mx-auto text-center"}"><p>Probabilidade de voc\xEA <b>N\xC3O</b> ser diagnosticado com hipertens\xE3o:</p>
    <h2 class="${"text-2xl"}">${escape(reinaldo.toFixed(2) * 100)}%</h2></div>

<div class="${"px-8"}"><input type="${"hidden"}" name="${"form-name"}" value="${"name_of_my_form"}">
    <f class="${"flex-column w-full max-w-md"}"><p>Qual sua idade?</p><input placeholder="${"48"}"${add_attribute("class", inputstyle2, 0)}${add_attribute("value", idade, 0)}>
        <p class="${"my-4"}">Como voc\xEA se identifica?</p>    
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", "mulher", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Mulher</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "homem", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Homem</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "outro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Outro</p></label></div>
        <p class="${"my-4"}">Qual seu peso em Kg?:</p><input placeholder="${"80"}"${add_attribute("class", inputstyle2, 0)}${add_attribute("value", peso, 0)}>
        <p class="${"my-4"}">Qual sua altura em cent\xEDmetros?</p><input placeholder="${"180"}"${add_attribute("class", inputstyle2, 0)}${add_attribute("value", altura, 0)}>
        <p class="${"my-4"}">Em quantos dias da semana voc\xEA costuma praticar exerc\xEDcios f\xEDsicos ou esporte?</p><input placeholder="${"2"}"${add_attribute("class", inputstyle2, 0)}${add_attribute("value", exc_dias_por_semana, 0)}>    
        <p class="${"my-4"}">Qual o exercicio f\xEDsico ou esporte que voc\xEA pratica com mais frequ\xEAncia?</p>
        <div class="${"flex flex-col"}"><label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "caminhada", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Caminhada</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "caminhada_esteira", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Caminhada em esteira</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "corrida", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Corrida</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "musculacao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Muscula\xE7\xE3o</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "ginastica_aerobica", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Gin\xE1stica aer\xF3bica/spinning/step/jump</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "hidro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Hidrogin\xE1stica</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "ginastica", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Gin\xE1stica / localizada/pilates/alongamento/ioga</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "natacao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Nata\xE7\xE3o</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "luta", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Artes marciais e luta</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "bicicleta", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Bicicleta/bicicleta ergom\xE9trica</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "futebol", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Futebol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "basquete", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Basquetebol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "volei", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Voleibol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "tenis", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>T\xEAnis</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "danca", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Dan\xE7a (com o objetivo de praticar atividade f\xEDsica)</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "outro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Outro</p></label></div>
        <p class="${"my-4"}">Voc\xEA fuma ou j\xE1 fumou algum produto de tabaco?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", "sim", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "nao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                <p>N\xE3o</p></label></div>
        ${``}
        <p class="${"my-4"}">Voc\xEA j\xE1 foi diagnosticado com algum tipo de doen\xE7a mental, como ansiedade ou depress\xE3o?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", 0, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", 1, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>N\xE3o</p></label></div>
        <p class="${"my-4"}">Voc\xEA j\xE1 foi diagnosticado colesterol alto?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", 0, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", 1, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder3, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>N\xE3o</p></label></div>
        <div class="${"flex inline-flex mt-4"}"><button type="${"button"}" class="${"w-64 h-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                Enviar
            </button></div></f>
    sv
</div>`;
    });
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"dark bg-black container min-w-full min-h-full text-white"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"container mx-auto px-10 py-12"}"><div class="${"flex justify-center mb-10"}"><img class="${"rounded-full w-60 h-60 border-white border-4"}" src="${"img/reinaldo3.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">
            </div></div>
        ${validate_component(Reinaldo, "Reinaldo").$$render($$result, {}, {}, {})}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file7 = "_app/immutable/components/pages/reinaldo_old/_page.svelte-cea7aaf7.js";
    imports7 = ["_app/immutable/components/pages/reinaldo_old/_page.svelte-cea7aaf7.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/header-aa277db2.js", "_app/immutable/chunks/faPaperPlane-decf859b.js"];
    stylesheets7 = ["_app/immutable/assets/Icon-51b1667c.css"];
    fonts7 = [];
  }
});

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index9 = p++;
    indexes.set(thing, index9);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index9] = `["${key2}",${flatten(value2)}]`;
        return index9;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index9] = str;
    return index9;
  }
  const index8 = flatten(value);
  if (index8 < 0)
    return `${index8}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();

// .svelte-kit/output/server/chunks/internal.js
init_chunks();
var base = "";
var assets = base;
var version = "";
var public_env = {};
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
set_version("1679940396066");
var options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + '\n		<script src="https://kit.fontawesome.com/8be503461d.js" crossorigin="anonymous"><\/script>\n	</head>\n	<body data-sveltekit-preload-data="hover" class="bg-black">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return {};
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var HttpError = class HttpError2 {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class Redirect2 {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class ActionFailure2 {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$1.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$1 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$1.encode(body).byteLength.toString());
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method of ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  return text(options2.templates.error({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_data_node(node) {
  if (!node)
    return "null";
  if (node.type === "error" || node.type === "skip") {
    return JSON.stringify(node);
  }
  const stringified = stringify(node.data);
  const uses = [];
  if (node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses.parent)
    uses.push(`"parent":1`);
  if (node.uses.route)
    uses.push(`"route":1`);
  if (node.uses.url)
    uses.push(`"url":1`);
  return `{"type":"data","data":${stringified},"uses":{${uses.join(",")}}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
}
async function render_endpoint(event, route, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  state.initiator = route;
  try {
    const response = await handler2(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: err.status,
        location: err.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      uses.dependencies.add(url2.href);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: {
      get id() {
        uses.route = true;
        return event.route.id;
      }
    },
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  validate_load_response(
    data,
    /** @type {string} */
    event.route.id
  );
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: init2?.headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function validate_load_response(data, routeId) {
  if (data != null && Object.getPrototypeOf(data) !== Object.prototype) {
    throw new Error(
      `a load function related to route '${routeId}' returned ${typeof data !== "object" ? `a ${typeof data}` : data instanceof Response ? "a Response object" : Array.isArray(data) ? "an array" : "a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`
    );
  }
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let vary = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
    if (key2 === "vary")
      vary = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !vary) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = manifest2._;
  const stylesheets8 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const fonts8 = new Set(manifest2._.entry.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data,
      form: form_value
    };
    {
      rendered = options2.root.render(props);
    }
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets8.add(url));
      }
      if (node.fonts) {
        node.fonts.forEach((url) => fonts8.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let resolved_assets;
  if (assets) {
    resolved_assets = assets;
  } else if (state.prerendering?.fallback) {
    resolved_assets = base;
  } else {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    resolved_assets = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${resolved_assets}/${path}`;
  };
  const serialized = { data: "", form: "null", error: "null" };
  try {
    serialized.data = `[${branch.map(({ server_data }) => {
      if (server_data?.type === "data") {
        const data = uneval(server_data.data);
        const uses = [];
        if (server_data.uses.dependencies.size > 0) {
          uses.push(`dependencies:${s(Array.from(server_data.uses.dependencies))}`);
        }
        if (server_data.uses.params.size > 0) {
          uses.push(`params:${s(Array.from(server_data.uses.params))}`);
        }
        if (server_data.uses.parent)
          uses.push(`parent:1`);
        if (server_data.uses.route)
          uses.push(`route:1`);
        if (server_data.uses.url)
          uses.push(`url:1`);
        return `{type:"data",data:${data},uses:{${uses.join(",")}}${server_data.slash ? `,slash:${s(server_data.slash)}` : ""}}`;
      }
      return s(server_data);
    }).join(",")}]`;
  } catch (e) {
    const error3 = (
      /** @type {any} */
      e
    );
    throw new Error(clarify_devalue_error(event, error3));
  }
  if (form_value) {
    serialized.form = uneval_action_response(
      form_value,
      /** @type {string} */
      event.route.id
    );
  }
  if (error2) {
    serialized.error = uneval(error2);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets8) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "css", path })) {
      const attributes = ['rel="stylesheet"'];
      if (inline_styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      } else {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
      head += `
		<link href="${path}" ${attributes.join(" ")}>`;
    }
  }
  for (const dep of fonts8) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  if (page_config.csr) {
    const opts = [
      `assets: ${s(assets)}`,
      `env: ${s(public_env)}`,
      `target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode`,
      `version: ${s(version)}`
    ];
    if (page_config.ssr) {
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${serialized.data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      opts.push(`hydrate: {
					${hydrate.join(",\n					")}
				}`);
    }
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				${opts.join(",\n				")}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      if (resolve_opts.preload({ type: "js", path })) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options2.service_worker) {
    const opts = "";
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: resolved_assets,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(transformed)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return text(transformed, {
    status,
    headers
  });
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {any} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
async function render_page(event, route, page2, options2, manifest2, state, resolve_opts) {
  if (state.initiator === route) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender");
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      if (should_prerender !== false && get_option(nodes, "ssr") === false && !leaf_node.server?.actions) {
        return await render_response({
          branch: [],
          fetched: [],
          page_config: {
            ssr: false,
            csr: get_option(nodes, "csr") ?? true
          },
          status,
          error: null,
          event,
          options: options2,
          manifest: manifest2,
          state,
          resolve_opts
        });
      }
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index8 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index8]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `{"type":"data","nodes":[${branch.map((node) => serialize_data_node(node?.server_data)).join(",")}]}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: text(body),
        body
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    const value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      result[param.name] = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
      continue;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  state.initiator = route;
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    try {
      const stubs = nodes.slice(0, length).map(serialize_data_node);
      const json2 = `{"type":"data","nodes":[${stubs.join(",")}]}`;
      return json_response(json2);
    } catch (e) {
      const error2 = (
        /** @type {any} */
        e
      );
      return json_response(JSON.stringify(clarify_devalue_error(event, error2)), 500);
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(JSON.stringify(await handle_error_and_jsonify(event, options2, error2)));
    }
  }
}
function json_response(json2, status = 200) {
  return text(json2, {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response(
    JSON.stringify({
      type: "redirect",
      location: redirect.location
    })
  );
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      {
        return cookie;
      }
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2?.body;
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        let response;
        const prefix2 = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file8 = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file8), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options2, manifest2, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module, route_id) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] !== "_" && !set.has(key2)) {
        const valid = expected.join(", ");
        throw new Error(
          `Invalid export '${key2}'${route_id ? ` in ${route_id}` : ""} (valid exports are ${valid}, or anything with a '_' prefix)`
        );
      }
    }
  }
  return validate;
}
var validate_common_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var validate_page_server_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash",
  "config"
]);
var validate_server_exports = validator([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "prerender",
  "trailingSlash",
  "config"
]);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options2, manifest2, state) {
  let url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !state.prerendering?.fallback) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (
              // ensure paths starting with '//' are not treated as protocol-relative
              (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
            )
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, route, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(
            event2,
            route,
            route.page,
            options2,
            manifest2,
            state,
            resolve_opts
          );
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var _options, _manifest;
var Server = class {
  /** @param {import('types').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('types').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    const entries = Object.entries(env);
    const prefix2 = __privateGet(this, _options).env_public_prefix;
    Object.fromEntries(entries.filter(([k]) => !k.startsWith(prefix2)));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith(prefix2)));
    set_public_env(pub);
    if (!__privateGet(this, _options).hooks) {
      const module = await get_hooks();
      __privateGet(this, _options).hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        // @ts-expect-error
        handleError: module.handleError || (({ error: error2 }) => console.error(error2?.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), options2);
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["PoweredByIniciativaFIS.svg", "favicon.png", "fisAI.svg", "img/mario.png", "img/mariobu.png", "img/noto_anxious-face-with-sweat.svg", "img/noto_astonished-face.svg", "img/noto_disappointed-face.svg", "img/noto_enraged-face.svg", "img/noto_grinning-face-with-smiling-eyes.svg", "img/noto_nauseated-face.svg", "img/reinaldo.png", "img/reinaldo2.png", "img/reinaldo3.png", "img/reinaldo4.png"]),
  mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-1d0d0f24.js", "imports": ["_app/immutable/start-1d0d0f24.js", "_app/immutable/chunks/index-5932b100.js", "_app/immutable/chunks/singletons-0ee7c03a.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "/luide",
        pattern: /^\/luide\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "/mario",
        pattern: /^\/mario\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "/reinaldo_old",
        pattern: /^\/reinaldo_old\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      },
      {
        id: "/reinaldo",
        pattern: /^\/reinaldo\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appPath}/`;
var initialized = server.init({
  // @ts-ignore
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file8 = pathname.substring(1);
  try {
    file8 = decodeURIComponent(file8);
  } catch (err) {
  }
  return manifest.assets.has(file8) || manifest.assets.has(file8 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=render.js.map
