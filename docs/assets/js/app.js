/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*

In this JS document, you'll find the following types of scripts: 

-- Style guide-only scripts, which are vendor scripts that are used only within the style guide. 
-- Vendor scripts, which are scripts or libraries that are downloaded from another developer.
-- Custom scripts, which are written specifically for this site by the PMG digital team. 

Please follow the order above when deciding where to place your scripts. For vendor scripts, please document what the script is being used for and link to the vendor's website or github as shown below.


STYLE GUIDE SCRIPTS

1. Prism
    -- Used for code snippet styling
    -- https://prismjs.com

2. Scrollspy
    -- Highlights where you are in the navigation according based on scroll position
    -- https://github.com/r3plica/Scrollspy


VENDOR SCRIPTS

1. An example vendor script
    -- Short description of what the script is used for
    -- http://linktoscript.com


CUSTOM SCRIPTS

1. Style guide custom scripts
    -- These include initialization and simple jquery scripts used to make the style guide work correctly.

2. Site-specific custom scripts
    -- This is where the digital team will write custom jquery scripts and initalize vendor scripts.
    -- It's not necessary to name every custom script you create here, but make sure to add a comment above each script that describes what it is for easy reference.

*/

/* ~~~~~~~~~~~~~~~~~~~~ PRISM ~~~~~~~~~~~~~~~~~~~~

PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+scss */

var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
    var e = /\blang(?:uage)?-([\w-]+)\b/i,
        t = 0,
        n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler, util: { encode: function encode(e) {
                return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }, type: function type(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
            }, objId: function objId(e) {
                return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
            }, clone: function clone(e, t) {
                var r = n.util.type(e);switch (t = t || {}, r) {case "Object":
                        if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = {};t[n.util.objId(e)] = a;for (var l in e) {
                            e.hasOwnProperty(l) && (a[l] = n.util.clone(e[l], t));
                        }return a;case "Array":
                        if (t[n.util.objId(e)]) return t[n.util.objId(e)];var a = [];return t[n.util.objId(e)] = a, e.forEach(function (e, r) {
                            a[r] = n.util.clone(e, t);
                        }), a;}return e;
            } }, languages: { extend: function extend(e, t) {
                var r = n.util.clone(n.languages[e]);for (var a in t) {
                    r[a] = t[a];
                }return r;
            }, insertBefore: function insertBefore(e, t, r, a) {
                a = a || n.languages;var l = a[e];if (2 == arguments.length) {
                    r = arguments[1];for (var i in r) {
                        r.hasOwnProperty(i) && (l[i] = r[i]);
                    }return l;
                }var o = {};for (var s in l) {
                    if (l.hasOwnProperty(s)) {
                        if (s == t) for (var i in r) {
                            r.hasOwnProperty(i) && (o[i] = r[i]);
                        }o[s] = l[s];
                    }
                }return n.languages.DFS(n.languages, function (t, n) {
                    n === a[e] && t != e && (this[t] = o);
                }), a[e] = o;
            }, DFS: function DFS(e, t, r, a) {
                a = a || {};for (var l in e) {
                    e.hasOwnProperty(l) && (t.call(e, l, e[l], r || l), "Object" !== n.util.type(e[l]) || a[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || a[n.util.objId(e[l])] || (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, a)) : (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, a)));
                }
            } }, plugins: {}, highlightAll: function highlightAll(e, t) {
            n.highlightAllUnder(document, e, t);
        }, highlightAllUnder: function highlightAllUnder(e, t, r) {
            var a = { callback: r, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var l, i = a.elements || e.querySelectorAll(a.selector), o = 0; l = i[o++];) {
                n.highlightElement(l, t === !0, a.callback);
            }
        }, highlightElement: function highlightElement(t, r, a) {
            for (var l, i, o = t; o && !e.test(o.className);) {
                o = o.parentNode;
            }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l));var s = t.textContent,
                u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), r && _self.Worker) {
                var g = new Worker(n.filename);g.onmessage = function (e) {
                    u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
                }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
            } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        }, highlight: function highlight(e, t, a) {
            var l = { code: e, grammar: t, language: a };return n.hooks.run("before-tokenize", l), l.tokens = n.tokenize(l.code, l.grammar), n.hooks.run("after-tokenize", l), r.stringify(n.util.encode(l.tokens), l.language);
        }, matchGrammar: function matchGrammar(e, t, r, a, l, i, o) {
            var s = n.Token;for (var u in r) {
                if (r.hasOwnProperty(u) && r[u]) {
                    if (u == o) return;var g = r[u];g = "Array" === n.util.type(g) ? g : [g];for (var c = 0; c < g.length; ++c) {
                        var h = g[c],
                            f = h.inside,
                            d = !!h.lookbehind,
                            m = !!h.greedy,
                            p = 0,
                            y = h.alias;if (m && !h.pattern.global) {
                            var v = h.pattern.toString().match(/[imuy]*$/)[0];h.pattern = RegExp(h.pattern.source, v + "g");
                        }h = h.pattern || h;for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
                            var w = t[b];if (t.length > e.length) return;if (!(w instanceof s)) {
                                if (m && b != t.length - 1) {
                                    h.lastIndex = k;var _ = h.exec(e);if (!_) break;for (var j = _.index + (d ? _[1].length : 0), P = _.index + _[0].length, A = b, x = k, O = t.length; O > A && (P > x || !t[A].type && !t[A - 1].greedy); ++A) {
                                        x += t[A].length, j >= x && (++b, k = x);
                                    }if (t[b] instanceof s) continue;I = A - b, w = e.slice(k, x), _.index -= k;
                                } else {
                                    h.lastIndex = 0;var _ = h.exec(w),
                                        I = 1;
                                }if (_) {
                                    d && (p = _[1] ? _[1].length : 0);var j = _.index + p,
                                        _ = _[0].slice(p),
                                        P = j + _.length,
                                        N = w.slice(0, j),
                                        S = w.slice(P),
                                        C = [b, I];N && (++b, k += N.length, C.push(N));var E = new s(u, f ? n.tokenize(_, f) : _, y, _, m);if (C.push(E), S && C.push(S), Array.prototype.splice.apply(t, C), 1 != I && n.matchGrammar(e, t, r, b, k, !0, u), i) break;
                                } else if (i) break;
                            }
                        }
                    }
                }
            }
        }, tokenize: function tokenize(e, t) {
            var r = [e],
                a = t.rest;if (a) {
                for (var l in a) {
                    t[l] = a[l];
                }delete t.rest;
            }return n.matchGrammar(e, r, t, 0, 0, !1), r;
        }, hooks: { all: {}, add: function add(e, t) {
                var r = n.hooks.all;r[e] = r[e] || [], r[e].push(t);
            }, run: function run(e, t) {
                var r = n.hooks.all[e];if (r && r.length) for (var a, l = 0; a = r[l++];) {
                    a(t);
                }
            } } },
        r = n.Token = function (e, t, n, r, a) {
        this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!a;
    };if (r.stringify = function (e, t, a) {
        if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
            return r.stringify(n, t, e);
        }).join("");var l = { type: e.type, content: r.stringify(e.content, t, a), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: a };if (e.alias) {
            var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
        }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
            return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
    }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
        var t = JSON.parse(e.data),
            r = t.language,
            a = t.code,
            l = t.immediateClose;_self.postMessage(n.highlight(a, n.languages[r], r)), l && _self.close();
    }, !1), _self.Prism) : _self.Prism;var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return a && (n.filename = a.src, n.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^{}\s][^{};]*?(?=\s*\{)/, string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css", greedy: !0 } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(?:true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, "function": /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i, alias: "function" }, constant: /\b[A-Z][A-Z\d_]*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } } }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript", greedy: !0 } }), Prism.languages.js = Prism.languages.javascript;
Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.scss.property = { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, "boolean": /\b(?:true|false)\b/, "null": /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;

/* ~~~~~~~~~~~~~~~~~~~~ SCROLLSPY ~~~~~~~~~~~~~~~~~~~~ */

!function (t, e) {
    t.fn.extend({ scrollspy: function scrollspy(n) {
            var a = { namespace: "scrollspy", activeClass: "active", animate: !1, offset: 0, container: e };n = t.extend({}, a, n);var o = function o(t, e) {
                return parseInt(t, 10) + parseInt(e, 10);
            },
                r = function r(e) {
                for (var n = [], a = 0; a < e.length; a++) {
                    var o = e[a],
                        r = t(o).attr("href"),
                        f = t(r);if (f.length > 0) {
                        var s = Math.floor(f.offset().top),
                            i = s + Math.floor(f.outerHeight());n.push({ element: f, hash: r, top: s, bottom: i });
                    }
                }return n;
            },
                f = function f(e, n) {
                for (var a = 0; a < e.length; a++) {
                    var o = t(e[a]);if (o.attr("href") === n) return o;
                }
            },
                s = function s(e) {
                for (var a = 0; a < e.length; a++) {
                    var o = t(e[a]);o.parent().removeClass(n.activeClass);
                }
            };return this.each(function () {
                for (var a = this, i = t(n.container), l = t(a).find("a"), c = 0; c < l.length; c++) {
                    var h = l[c];t(h).on("click", function (a) {
                        var r = t(this).attr("href"),
                            f = t(r);if (f.length > 0) {
                            var s = o(f.offset().top, n.offset);n.animate ? t("html, body").animate({ scrollTop: s }, 1e3) : e.scrollTo(0, s), a.preventDefault();
                        }
                    });
                }var v = r(l);i.bind("scroll." + n.namespace, function () {
                    for (var e, r = { top: o(t(this).scrollTop(), Math.abs(n.offset)), left: t(this).scrollLeft() }, i = 0; i < v.length; i++) {
                        var c = v[i];if (r.top >= c.top && r.top < c.bottom) {
                            var h = c.hash;if (e = f(l, h)) {
                                n.onChange && n.onChange(c.element, t(a), r), s(l), e.parent().addClass(n.activeClass);break;
                            }
                        }
                    }!e && n.onExit && n.onExit(t(a), r);
                });
            });
        } });
}(jQuery, window, document, void 0);

/* ~~~~~~~~~~~~~~~~~~~~ STYLE GUIDE CUSTOM SCRIPTS ~~~~~~~~~~~~~~~~~~~~ */

$(document).ready(function () {

    // back to top smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': 0 + $target.offset().top
        }, 900, 'swing', function () {});
    });

    // toggle the style guide nav menu
    $('.sg-menu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-is-open');
    });

    // show/hide the style guide header depending on scroll position
    function init() {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = window.innerHeight - 83,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                $('header').addClass('is-scrolled').removeClass('not-scrolled');
            } else if ($('header').hasClass('is-scrolled')) {
                $('header').addClass('not-scrolled').removeClass('is-scrolled');
            }
        });
    }
    window.onload = init();

    // scrollspy
    $(".sg-nav").scrollspy({
        activeClass: 'is-active'
    });

    // template and wireframe sliders
    $('.sg-templates').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // click to copy buttons
    new ClipboardJS('.copy-btn');
});

/* ~~~~~~~~~~~~~~~~~~~~ SITE-SPECIFIC CUSTOM SCRIPTS ~~~~~~~~~~~~~~~~~~~~ */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);