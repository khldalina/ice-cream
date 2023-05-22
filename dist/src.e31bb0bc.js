// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/mobile/hero-ice@1x.png":[["hero-ice@1x.0b8035d7.png","images/mobile/hero-ice@1x.png"],"images/mobile/hero-ice@1x.png"],"./../images/mobile/hero-ice@2x.png":[["hero-ice@2x.819698a6.png","images/mobile/hero-ice@2x.png"],"images/mobile/hero-ice@2x.png"],"./../images/check.svg":[["check.4b7c2681.svg","images/check.svg"],"images/check.svg"],"./../images/top.png":[["top.9a364590.png","images/top.png"],"images/top.png"],"./../images/dotes@2x-min.png":[["dotes@2x-min.18c6823d.png","images/dotes@2x-min.png"],"images/dotes@2x-min.png"],"./../images/mobile/ice-cream@2x.png":[["ice-cream@2x.164e3415.png","images/mobile/ice-cream@2x.png"],"images/mobile/ice-cream@2x.png"],"./../images/mobile/ice-coffe@2x.png":[["ice-coffe@2x.85f27093.png","images/mobile/ice-coffe@2x.png"],"images/mobile/ice-coffe@2x.png"],"./../images/mobile/milkshakes@2x.png":[["milkshakes@2x.2f371bee.png","images/mobile/milkshakes@2x.png"],"images/mobile/milkshakes@2x.png"],"./../images/mobile/milk@1x.png":[["milk@1x.da59bc8b.png","images/mobile/milk@1x.png"],"images/mobile/milk@1x.png"],"./../images/mobile/milk@2x.png":[["milk@2x.f7fa75b4.png","images/mobile/milk@2x.png"],"images/mobile/milk@2x.png"],"./../images/pc/about-milk@1x.png":[["about-milk@1x.85532000.png","images/pc/about-milk@1x.png"],"images/pc/about-milk@1x.png"],"./../images/pc/about-milk@2x.png":[["about-milk@2x.1975358a.png","images/pc/about-milk@2x.png"],"images/pc/about-milk@2x.png"],"./../images/bucket@1x-min.png":[["bucket@1x-min.f8cfa546.png","images/bucket@1x-min.png"],"images/bucket@1x-min.png"],"./../images/bucket@2x-min.png":[["bucket@2x-min.49fe8c48.png","images/bucket@2x-min.png"],"images/bucket@2x-min.png"],"./../images/bucket-apples@1x-min.png":[["bucket-apples@1x-min.47e669a0.png","images/bucket-apples@1x-min.png"],"images/bucket-apples@1x-min.png"],"./../images/bucket-apples@2x-min.png":[["bucket-apples@2x-min.5f9c1d19.png","images/bucket-apples@2x-min.png"],"images/bucket-apples@2x-min.png"],"./../images/candy@1x-min.png":[["candy@1x-min.b3a2784a.png","images/candy@1x-min.png"],"images/candy@1x-min.png"],"./../images/candy@2x-min.png":[["candy@2x-min.ba627123.png","images/candy@2x-min.png"],"images/candy@2x-min.png"],"./../images/gallery/gallery-1.jpg":[["gallery-1.bece99f0.jpg","images/gallery/gallery-1.jpg"],"images/gallery/gallery-1.jpg"],"./../images/gallery/gallery-2.jpg":[["gallery-2.26137493.jpg","images/gallery/gallery-2.jpg"],"images/gallery/gallery-2.jpg"],"./../images/gallery/gallery-3.jpg":[["gallery-3.80e99b3f.jpg","images/gallery/gallery-3.jpg"],"images/gallery/gallery-3.jpg"],"./../images/gallery/gallery-4.jfif":[["gallery-4.97098520.jfif","images/gallery/gallery-4.jfif"],"images/gallery/gallery-4.jfif"],"./../images/gallery/gallery-5.jpg":[["gallery-5.3a27363f.jpg","images/gallery/gallery-5.jpg"],"images/gallery/gallery-5.jpg"],"./../images/gallery/gallery-6.jpg":[["gallery-6.fdfe79d4.jpg","images/gallery/gallery-6.jpg"],"images/gallery/gallery-6.jpg"],"./../images/gallery/gallery-7.jpg":[["gallery-7.8843a91d.jpg","images/gallery/gallery-7.jpg"],"images/gallery/gallery-7.jpg"],"./../images/gallery/gallery-8.jpg":[["gallery-8.60dcbc1f.jpg","images/gallery/gallery-8.jpg"],"images/gallery/gallery-8.jpg"],"./../images/gallery/gallery-9.jpg":[["gallery-9.456ed896.jpg","images/gallery/gallery-9.jpg"],"images/gallery/gallery-9.jpg"],"./../images/gallery/gallery-10.jpg":[["gallery-10.74483bb2.jpg","images/gallery/gallery-10.jpg"],"images/gallery/gallery-10.jpg"],"./../images/gallery/gallery-11.jpg":[["gallery-11.12527999.jpg","images/gallery/gallery-11.jpg"],"images/gallery/gallery-11.jpg"],"./../images/slider/emily@1x-min.png":[["emily@1x-min.b872f9c2.png","images/slider/emily@1x-min.png"],"images/slider/emily@1x-min.png"],"./../images/slider/cara@1x-min.png":[["cara@1x-min.de5fd67d.png","images/slider/cara@1x-min.png"],"images/slider/cara@1x-min.png"],"./../images/slider/lora@1x-min.png":[["lora@1x-min.a01168a7.png","images/slider/lora@1x-min.png"],"images/slider/lora@1x-min.png"],"./../images/quotes.svg":[["quotes.4d7be276.svg","images/quotes.svg"],"images/quotes.svg"],"./../images/pc/contact-background@1x.png":[["contact-background@1x.93ec74ed.png","images/pc/contact-background@1x.png"],"images/pc/contact-background@1x.png"],"./../images/pc/contact-background@2x.png":[["contact-background@2x.c1d3daef.png","images/pc/contact-background@2x.png"],"images/pc/contact-background@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58925" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map