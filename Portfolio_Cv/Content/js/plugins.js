window.Modernizr = function(t, e, i) {
    function o(t) {
      y.cssText = t
    }

    function r(t, e) {
      return typeof t === e
    }

    function n(t, e) {
      return !!~("" + t).indexOf(e)
    }

    function s(t, e) {
      for (var o in t) {
        var r = t[o];
        if (!n(r, "-") && y[r] !== i) return "pfx" == e ? r : !0
      }
      return !1
    }

    function a(t, e, o) {
      for (var n in t) {
        var s = e[t[n]];
        if (s !== i) return o === !1 ? t[n] : r(s, "function") ? s.bind(o || e) : s
      }
      return !1
    }

    function l(t, e, i) {
      var o = t.charAt(0).toUpperCase() + t.slice(1),
        n = (t + " " + b.join(o + " ") + o).split(" ");
      return r(e, "string") || r(e, "undefined") ? s(n, e) : (n = (t + " " + k.join(o + " ") + o).split(" "), a(n, e, i))
    }
    var c, h, u, d = "2.6.2",
      p = {},
      f = !0,
      m = e.documentElement,
      g = "modernizr",
      v = e.createElement(g),
      y = v.style,
      w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      x = "Webkit Moz O ms",
      b = x.split(" "),
      k = x.toLowerCase().split(" "),
      S = {},
      T = [],
      z = T.slice,
      C = function(t, i, o, r) {
        var n, s, a, l, c = e.createElement("div"),
          h = e.body,
          u = h || e.createElement("body");
        if (parseInt(o, 10))
          for (; o--;) a = e.createElement("div"), a.id = r ? r[o] : g + (o + 1), c.appendChild(a);
        return n = ["&#173;", '<style id="s', g, '">', t, "</style>"].join(""), c.id = g, (h ? c : u).innerHTML += n, u.appendChild(c), h || (u.style.background = "", u.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(u)), s = i(c, t), h ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u), m.style.overflow = l), !!s
      },
      _ = {}.hasOwnProperty;
    u = r(_, "undefined") || r(_.call, "undefined") ? function(t, e) {
      return e in t && r(t.constructor.prototype[e], "undefined")
    } : function(t, e) {
      return _.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
      var e = this;
      if ("function" != typeof e) throw new TypeError;
      var i = z.call(arguments, 1),
        o = function() {
          if (this instanceof o) {
            var r = function() {};
            r.prototype = e.prototype;
            var n = new r,
              s = e.apply(n, i.concat(z.call(arguments)));
            return Object(s) === s ? s : n
          }
          return e.apply(t, i.concat(z.call(arguments)))
        };
      return o
    }), S.csstransforms3d = function() {
      var t = !!l("perspective");
      return t && "webkitPerspective" in m.style && C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
        t = 9 === e.offsetLeft && 3 === e.offsetHeight
      }), t
    }, S.csstransitions = function() {
      return l("transition")
    };
    for (var M in S) u(S, M) && (h = M.toLowerCase(), p[h] = S[M](), T.push((p[h] ? "" : "no-") + h));
    return p.addTest = function(t, e) {
        if ("object" == typeof t)
          for (var o in t) u(t, o) && p.addTest(o, t[o]);
        else {
          if (t = t.toLowerCase(), p[t] !== i) return p;
          e = "function" == typeof e ? e() : e, "undefined" != typeof f && f && (m.className += " " + (e ? "" : "no-") + t), p[t] = e
        }
        return p
      }, o(""), v = c = null,
      function(t, e) {
        function i(t, e) {
          var i = t.createElement("p"),
            o = t.getElementsByTagName("head")[0] || t.documentElement;
          return i.innerHTML = "x<style>" + e + "</style>", o.insertBefore(i.lastChild, o.firstChild)
        }

        function o() {
          var t = v.elements;
          return "string" == typeof t ? t.split(" ") : t
        }

        function r(t) {
          var e = g[t[f]];
          return e || (e = {}, m++, t[f] = m, g[m] = e), e
        }

        function n(t, i, o) {
          if (i || (i = e), h) return i.createElement(t);
          o || (o = r(i));
          var n;
          return n = o.cache[t] ? o.cache[t].cloneNode() : p.test(t) ? (o.cache[t] = o.createElem(t)).cloneNode() : o.createElem(t), n.canHaveChildren && !d.test(t) ? o.frag.appendChild(n) : n
        }

        function s(t, i) {
          if (t || (t = e), h) return t.createDocumentFragment();
          i = i || r(t);
          for (var n = i.frag.cloneNode(), s = 0, a = o(), l = a.length; l > s; s++) n.createElement(a[s]);
          return n
        }

        function a(t, e) {
          e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
            return v.shivMethods ? n(i, t, e) : e.createElem(i)
          }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/\w+/g, function(t) {
            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
          }) + ");return n}")(v, e.frag)
        }

        function l(t) {
          t || (t = e);
          var o = r(t);
          return v.shivCSS && !c && !o.hasCSS && (o.hasCSS = !!i(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), h || a(t, o), t
        }
        var c, h, u = t.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f = "_html5shiv",
          m = 0,
          g = {};
        ! function() {
          try {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>", c = "hidden" in t, h = 1 == t.childNodes.length || function() {
              e.createElement("a");
              var t = e.createDocumentFragment();
              return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
            }()
          } catch (i) {
            c = !0, h = !0
          }
        }();
        var v = {
          elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: u.shivCSS !== !1,
          supportsUnknownElements: h,
          shivMethods: u.shivMethods !== !1,
          type: "default",
          shivDocument: l,
          createElement: n,
          createDocumentFragment: s
        };
        t.html5 = v, l(e)
      }(this, e), p._version = d, p._prefixes = w, p._domPrefixes = k, p._cssomPrefixes = b, p.testProp = function(t) {
        return s([t])
      }, p.testAllProps = l, p.testStyles = C, p.prefixed = function(t, e, i) {
        return e ? l(t, e, i) : l(t, "pfx")
      }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + T.join(" ") : ""), p
  }(this, this.document),
  function(t, e, i) {
    function o(t) {
      return "[object Function]" == g.call(t)
    }

    function r(t) {
      return "string" == typeof t
    }

    function n() {}

    function s(t) {
      return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function a() {
      var t = v.shift();
      y = 1, t ? t.t ? f(function() {
        ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
      }, 0) : (t(), a()) : y = 0
    }

    function l(t, i, o, r, n, l, c) {
      function h(e) {
        if (!p && s(u.readyState) && (w.r = p = 1, !y && a(), u.onload = u.onreadystatechange = null, e)) {
          "img" != t && f(function() {
            b.removeChild(u)
          }, 50);
          for (var o in C[i]) C[i].hasOwnProperty(o) && C[i][o].onload()
        }
      }
      var c = c || d.errorTimeout,
        u = e.createElement(t),
        p = 0,
        g = 0,
        w = {
          t: o,
          s: i,
          e: n,
          a: l,
          x: c
        };
      1 === C[i] && (g = 1, C[i] = []), "object" == t ? u.data = i : (u.src = i, u.type = t), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
        h.call(this, g)
      }, v.splice(r, 0, w), "img" != t && (g || 2 === C[i] ? (b.insertBefore(u, x ? null : m), f(h, c)) : C[i].push(u))
    }

    function c(t, e, i, o, n) {
      return y = 0, e = e || "j", r(t) ? l("c" == e ? S : k, t, e, this.i++, i, o, n) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
    }

    function h() {
      var t = d;
      return t.loader = {
        load: c,
        i: 0
      }, t
    }
    var u, d, p = e.documentElement,
      f = t.setTimeout,
      m = e.getElementsByTagName("script")[0],
      g = {}.toString,
      v = [],
      y = 0,
      w = "MozAppearance" in p.style,
      x = w && !!e.createRange().compareNode,
      b = x ? p : m.parentNode,
      p = t.opera && "[object Opera]" == g.call(t.opera),
      p = !!e.attachEvent && !p,
      k = w ? "object" : p ? "script" : "img",
      S = p ? "script" : k,
      T = Array.isArray || function(t) {
        return "[object Array]" == g.call(t)
      },
      z = [],
      C = {},
      _ = {
        timeout: function(t, e) {
          return e.length && (t.timeout = e[0]), t
        }
      };
    d = function(t) {
      function e(t) {
        var e, i, o, t = t.split("!"),
          r = z.length,
          n = t.pop(),
          s = t.length,
          n = {
            url: n,
            origUrl: n,
            prefixes: t
          };
        for (i = 0; s > i; i++) o = t[i].split("="), (e = _[o.shift()]) && (n = e(n, o));
        for (i = 0; r > i; i++) n = z[i](n);
        return n
      }

      function s(t, r, n, s, a) {
        var l = e(t),
          c = l.autoCallback;
        l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = o(r) ? r : r[t] || r[s] || r[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, r, n, s, a) : (C[l.url] ? l.noexec = !0 : C[l.url] = 1, n.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (o(r) || o(c)) && n.load(function() {
          h(), r && r(l.origUrl, a, s), c && c(l.origUrl, a, s), C[l.url] = 2
        })))
      }

      function a(t, e) {
        function i(t, i) {
          if (t) {
            if (r(t)) i || (u = function() {
              var t = [].slice.call(arguments);
              d.apply(this, t), p()
            }), s(t, u, e, 0, c);
            else if (Object(t) === t)
              for (l in a = function() {
                  var e, i = 0;
                  for (e in t) t.hasOwnProperty(e) && i++;
                  return i
                }(), t) t.hasOwnProperty(l) && (!i && !--a && (o(u) ? u = function() {
                var t = [].slice.call(arguments);
                d.apply(this, t), p()
              } : u[l] = function(t) {
                return function() {
                  var e = [].slice.call(arguments);
                  t && t.apply(this, e), p()
                }
              }(d[l])), s(t[l], u, e, l, c))
          } else !i && p()
        }
        var a, l, c = !!t.test,
          h = t.load || t.both,
          u = t.callback || n,
          d = u,
          p = t.complete || n;
        i(c ? t.yep : t.nope, !!h), h && i(h)
      }
      var l, c, u = this.yepnope.loader;
      if (r(t)) s(t, 0, u, 0);
      else if (T(t))
        for (l = 0; l < t.length; l++) c = t[l], r(c) ? s(c, 0, u, 0) : T(c) ? d(c) : Object(c) === c && a(c, u);
      else Object(t) === t && a(t, u)
    }, d.addPrefix = function(t, e) {
      _[t] = e
    }, d.addFilter = function(t) {
      z.push(t)
    }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", u = function() {
      e.removeEventListener("DOMContentLoaded", u, 0), e.readyState = "complete"
    }, 0)), t.yepnope = h(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, o, r, l, c) {
      var h, u, p = e.createElement("script"),
        r = r || d.errorTimeout;
      p.src = t;
      for (u in o) p.setAttribute(u, o[u]);
      i = c ? a : i || n, p.onreadystatechange = p.onload = function() {
        !h && s(p.readyState) && (h = 1, i(), p.onload = p.onreadystatechange = null)
      }, f(function() {
        h || (h = 1, i(1))
      }, r), l ? p.onload() : m.parentNode.insertBefore(p, m)
    }, t.yepnope.injectCss = function(t, i, o, r, s, l) {
      var c, r = e.createElement("link"),
        i = l ? a : i || n;
      r.href = t, r.rel = "stylesheet", r.type = "text/css";
      for (c in o) r.setAttribute(c, o[c]);
      s || (m.parentNode.insertBefore(r, m), f(i, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  },
  function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
  }(function(t) {
    var e = !1,
      i = !1,
      o = 5e3,
      r = 2e3,
      n = 0,
      s = ["ms", "moz", "webkit", "o"],
      a = window.requestAnimationFrame || !1,
      l = window.cancelAnimationFrame || !1;
    if (!a)
      for (var c in s) {
        var h = s[c];
        a || (a = window[h + "RequestAnimationFrame"]), l || (l = window[h + "CancelAnimationFrame"] || window[h + "CancelRequestAnimationFrame"])
      }
    var u = window.MutationObserver || window.WebKitMutationObserver || !1,
      d = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
          var t = document.getElementsByTagName("script"),
            t = t[t.length - 1].src.split("?")[0];
          return 0 < t.split("/").length ? t.split("/").slice(0, -1).join("/") + "/" : ""
        }()
      },
      p = !1,
      f = function() {
        if (p) return p;
        var t = document.createElement("DIV"),
          e = {
            haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
          };
        e.isopera = "opera" in window, e.isopera12 = e.isopera && "getUserMedia" in navigator, e.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), e.isie = "all" in document && "attachEvent" in t && !e.isopera, e.isieold = e.isie && !("msInterpolationMode" in t.style), e.isie7 = !(!e.isie || e.isieold || "documentMode" in document && 7 != document.documentMode), e.isie8 = e.isie && "documentMode" in document && 8 == document.documentMode, e.isie9 = e.isie && "performance" in window && 9 <= document.documentMode, e.isie10 = e.isie && "performance" in window && 10 <= document.documentMode, e.isie9mobile = /iemobile.9/i.test(navigator.userAgent), e.isie9mobile && (e.isie9 = !1), e.isie7mobile = !e.isie9mobile && e.isie7 && /iemobile/i.test(navigator.userAgent), e.ismozilla = "MozAppearance" in t.style, e.iswebkit = "WebkitAppearance" in t.style, e.ischrome = "chrome" in window, e.ischrome22 = e.ischrome && e.haspointerlock, e.ischrome26 = e.ischrome && "transition" in t.style, e.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, e.hasmstouch = window.navigator.msPointerEnabled || !1, e.ismac = /^mac$/i.test(navigator.platform), e.isios = e.cantouch && /iphone|ipad|ipod/i.test(navigator.platform), e.isios4 = e.isios && !("seal" in Object), e.isandroid = /android/i.test(navigator.userAgent), e.trstyle = !1, e.hastransform = !1, e.hastranslate3d = !1, e.transitionstyle = !1, e.hastransition = !1, e.transitionend = !1;
        for (var i = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], o = 0; o < i.length; o++)
          if ("undefined" != typeof t.style[i[o]]) {
            e.trstyle = i[o];
            break
          }
        e.hastransform = 0 != e.trstyle, e.hastransform && (t.style[e.trstyle] = "translate3d(1px,2px,3px)", e.hastranslate3d = /translate3d/.test(t.style[e.trstyle])), e.transitionstyle = !1, e.prefixstyle = "", e.transitionend = !1;
        for (var i = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), r = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), n = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), o = 0; o < i.length; o++)
          if (i[o] in t.style) {
            e.transitionstyle = i[o], e.prefixstyle = r[o], e.transitionend = n[o];
            break
          }
        e.ischrome26 && (e.prefixstyle = r[1]), e.hastransition = e.transitionstyle;
        t: {
          for (i = ["-moz-grab", "-webkit-grab", "grab"], (e.ischrome && !e.ischrome22 || e.isie) && (i = []), o = 0; o < i.length; o++)
            if (r = i[o], t.style.cursor = r, t.style.cursor == r) {
              i = r;
              break t
            }
          i = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
        }
        return e.cursorgrabvalue = i, e.hasmousecapture = "setCapture" in t, e.hasMutationObserver = !1 !== u, p = e
      },
      m = function(s, c) {
        function h() {
          var t = y.win;
          if ("zIndex" in t) return t.zIndex();
          for (; 0 < t.length && 9 != t[0].nodeType;) {
            var e = t.css("zIndex");
            if (!isNaN(e) && 0 != e) return parseInt(e);
            t = t.parent()
          }
          return !1
        }

        function p(t, e, i) {
          return e = t.css(e), t = parseFloat(e), isNaN(t) ? (t = S[e] || 0, i = 3 == t ? i ? y.win.outerHeight() - y.win.innerHeight() : y.win.outerWidth() - y.win.innerWidth() : 1, y.isie8 && t && (t += 1), i ? t : 0) : t
        }

        function m(t, e, i, o) {
          y._bind(t, e, function(o) {
            o = o ? o : window.event;
            var r = {
              original: o,
              target: o.target || o.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == o.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function() {
                return o.preventDefault ? o.preventDefault() : o.returnValue = !1, !1
              },
              stopImmediatePropagation: function() {
                o.stopImmediatePropagation ? o.stopImmediatePropagation() : o.cancelBubble = !0
              }
            };
            return "mousewheel" == e ? (r.deltaY = -.025 * o.wheelDelta, o.wheelDeltaX && (r.deltaX = -.025 * o.wheelDeltaX)) : r.deltaY = o.detail, i.call(t, r)
          }, o)
        }

        function v(t, e, i) {
          var o, r;
          if (0 == t.deltaMode ? (o = -Math.floor(t.deltaX * (y.opt.mousescrollstep / 54)), r = -Math.floor(t.deltaY * (y.opt.mousescrollstep / 54))) : 1 == t.deltaMode && (o = -Math.floor(t.deltaX * y.opt.mousescrollstep), r = -Math.floor(t.deltaY * y.opt.mousescrollstep)), e && y.opt.oneaxismousemode && 0 == o && r && (o = r, r = 0), o && (y.scrollmom && y.scrollmom.stop(), y.lastdeltax += o, y.debounced("mousewheelx", function() {
              var t = y.lastdeltax;
              y.lastdeltax = 0, y.rail.drag || y.doScrollLeftBy(t)
            }, 15)), r) {
            if (y.opt.nativeparentscrolling && i && !y.ispage && !y.zoomactive)
              if (0 > r) {
                if (y.getScrollTop() >= y.page.maxh) return !0
              } else if (0 >= y.getScrollTop()) return !0;
            y.scrollmom && y.scrollmom.stop(), y.lastdeltay += r, y.debounced("mousewheely", function() {
              var t = y.lastdeltay;
              y.lastdeltay = 0, y.rail.drag || y.doScrollBy(t)
            }, 15)
          }
          return t.stopImmediatePropagation(), t.preventDefault()
        }
        var y = this;
        if (this.version = "3.5.4", this.name = "nicescroll", this.me = c, this.opt = {
            doc: t("body"),
            win: !1
          }, t.extend(this.opt, d), this.opt.snapbackspeed = 80, s)
          for (var w in y.opt) "undefined" != typeof s[w] && (y.opt[w] = s[w]);
        this.iddoc = (this.doc = y.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== y.opt.win, this.win = y.opt.win || (this.ispage ? t(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? t(window) : this.win, this.body = t("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != y.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
          x: 0,
          y: 0
        }, this.scrollratio = {
          x: 0,
          y: 0
        }, this.cursorheight = 20, this.scrollvaluemax = 0, this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.isrtlmode = !1;
        do this.id = "ascrail" + r++; while (document.getElementById(this.id));
        this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = y.opt.overflowx, this.overflowy = y.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = f();
        var x = t.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = x.hastransform && y.opt.hwacceleration) && y.haswrapper, this.istouchcapable = !1, x.cantouch && x.ischrome && !x.isios && !x.isandroid && (this.istouchcapable = !0, x.cantouch = !1), x.cantouch && x.ismozilla && !x.isios && !x.isandroid && (this.istouchcapable = !0, x.cantouch = !1), y.opt.enablemouselockapi || (x.hasmousecapture = !1, x.haspointerlock = !1), this.delayed = function(t, e, i, o) {
          var r = y.delaylist[t],
            n = (new Date).getTime();
          return !o && r && r.tt ? !1 : (r && r.tt && clearTimeout(r.tt), void(r && r.last + i > n && !r.tt ? y.delaylist[t] = {
            last: n + i,
            tt: setTimeout(function() {
              y && (y.delaylist[t].tt = 0, e.call())
            }, i)
          } : r && r.tt || (y.delaylist[t] = {
            last: n,
            tt: 0
          }, setTimeout(function() {
            e.call()
          }, 0))))
        }, this.debounced = function(t, e, i) {
          var o = y.delaylist[t];
          (new Date).getTime(), y.delaylist[t] = e, o || setTimeout(function() {
            var e = y.delaylist[t];
            y.delaylist[t] = !1, e.call()
          }, i)
        };
        var b = !1;
        if (this.synched = function(t, e) {
            return y.synclist[t] = e,
              function() {
                b || (a(function() {
                  b = !1;
                  for (t in y.synclist) {
                    var e = y.synclist[t];
                    e && e.call(y), y.synclist[t] = !1
                  }
                }), b = !0)
              }(), t
          }, this.unsynched = function(t) {
            y.synclist[t] && (y.synclist[t] = !1)
          }, this.css = function(t, e) {
            for (var i in e) y.saved.css.push([t, i, t.css(i)]), t.css(i, e[i])
          }, this.scrollTop = function(t) {
            return "undefined" == typeof t ? y.getScrollTop() : y.setScrollTop(t)
          }, this.scrollLeft = function(t) {
            return "undefined" == typeof t ? y.getScrollLeft() : y.setScrollLeft(t)
          }, BezierClass = function(t, e, i, o, r, n, s) {
            this.st = t, this.ed = e, this.spd = i, this.p1 = o || 0, this.p2 = r || 1, this.p3 = n || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
          }, BezierClass.prototype = {
            B2: function(t) {
              return 3 * t * t * (1 - t)
            },
            B3: function(t) {
              return 3 * t * (1 - t) * (1 - t)
            },
            B4: function(t) {
              return (1 - t) * (1 - t) * (1 - t)
            },
            getNow: function() {
              var t = 1 - ((new Date).getTime() - this.ts) / this.spd,
                e = this.B2(t) + this.B3(t) + this.B4(t);
              return 0 > t ? this.ed : this.st + Math.round(this.df * e)
            },
            update: function(t, e) {
              return this.st = this.getNow(), this.ed = t, this.spd = e, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
            }
          }, this.ishwscroll) {
          this.doc.translate = {
            x: 0,
            y: 0,
            tx: "0px",
            ty: "0px"
          }, x.hastranslate3d && x.isios && this.doc.css("-webkit-backface-visibility", "hidden");
          var k = function() {
            var t = y.doc.css(x.trstyle);
            return t && "matrix" == t.substr(0, 6) ? t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
          };
          this.getScrollTop = function(t) {
            if (!t) {
              if (t = k()) return 16 == t.length ? -t[13] : -t[5];
              if (y.timerscroll && y.timerscroll.bz) return y.timerscroll.bz.getNow()
            }
            return y.doc.translate.y
          }, this.getScrollLeft = function(t) {
            if (!t) {
              if (t = k()) return 16 == t.length ? -t[12] : -t[4];
              if (y.timerscroll && y.timerscroll.bh) return y.timerscroll.bh.getNow()
            }
            return y.doc.translate.x
          }, this.notifyScrollEvent = document.createEvent ? function(t) {
            var e = document.createEvent("UIEvents");
            e.initUIEvent("scroll", !1, !0, window, 1), t.dispatchEvent(e)
          } : document.fireEvent ? function(t) {
            var e = document.createEventObject();
            t.fireEvent("onscroll"), e.cancelBubble = !0
          } : function() {}, x.hastranslate3d && y.opt.enabletranslate3d ? (this.setScrollTop = function(t, e) {
            y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
          }, this.setScrollLeft = function(t, e) {
            y.doc.translate.x = t, y.doc.translate.tx = -1 * t + "px", y.doc.css(x.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
          }) : (this.setScrollTop = function(t, e) {
            y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
          }, this.setScrollLeft = function(t, e) {
            y.doc.translate.x = t, y.doc.translate.tx = -1 * t + "px", y.doc.css(x.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
          })
        } else this.getScrollTop = function() {
          return y.docscroll.scrollTop()
        }, this.setScrollTop = function(t) {
          return y.docscroll.scrollTop(t)
        }, this.getScrollLeft = function() {
          return y.docscroll.scrollLeft()
        }, this.setScrollLeft = function(t) {
          return y.docscroll.scrollLeft(t)
        };
        this.getTarget = function(t) {
          return t ? t.target ? t.target : t.srcElement ? t.srcElement : !1 : !1
        }, this.hasParent = function(t, e) {
          if (!t) return !1;
          for (var i = t.target || t.srcElement || t || !1; i && i.id != e;) i = i.parentNode || !1;
          return !1 !== i
        };
        var S = {
          thin: 1,
          medium: 3,
          thick: 5
        };
        this.getOffset = function() {
          if (y.isfixed) return {
            top: parseFloat(y.win.css("top")),
            left: parseFloat(y.win.css("left"))
          };
          if (!y.viewport) return y.win.offset();
          var t = y.win.offset(),
            e = y.viewport.offset();
          return {
            top: t.top - e.top + y.viewport.scrollTop(),
            left: t.left - e.left + y.viewport.scrollLeft()
          }
        }, this.updateScrollBar = function(t) {
          if (y.ishwscroll) y.rail.css({
            height: y.win.innerHeight()
          }), y.railh && y.railh.css({
            width: y.win.innerWidth()
          });
          else {
            var e = y.getOffset(),
              i = e.top,
              o = e.left,
              i = i + p(y.win, "border-top-width", !0);
            y.win.outerWidth(), y.win.innerWidth();
            var o = o + (y.rail.align ? y.win.outerWidth() - p(y.win, "border-right-width") - y.rail.width : p(y.win, "border-left-width")),
              r = y.opt.railoffset;
            r && (r.top && (i += r.top), y.rail.align && r.left && (o += r.left)), y.locked || y.rail.css({
              top: i,
              left: o,
              height: t ? t.h : y.win.innerHeight()
            }), y.zoom && y.zoom.css({
              top: i + 1,
              left: 1 == y.rail.align ? o - 20 : o + y.rail.width + 4
            }), y.railh && !y.locked && (i = e.top, o = e.left, t = y.railh.align ? i + p(y.win, "border-top-width", !0) + y.win.innerHeight() - y.railh.height : i + p(y.win, "border-top-width", !0), o += p(y.win, "border-left-width"), y.railh.css({
              top: t,
              left: o,
              width: y.railh.width
            }))
          }
        }, this.doRailClick = function(t, e, i) {
          var o;
          y.locked || (y.cancelEvent(t), e ? (e = i ? y.doScrollLeft : y.doScrollTop, o = i ? (t.pageX - y.railh.offset().left - y.cursorwidth / 2) * y.scrollratio.x : (t.pageY - y.rail.offset().top - y.cursorheight / 2) * y.scrollratio.y, e(o)) : (e = i ? y.doScrollLeftBy : y.doScrollBy, o = i ? y.scroll.x : y.scroll.y, t = i ? t.pageX - y.railh.offset().left : t.pageY - y.rail.offset().top, i = i ? y.view.w : y.view.h, e(o >= t ? i : -i)))
        }, y.hasanimationframe = a, y.hascancelanimationframe = l, y.hasanimationframe ? y.hascancelanimationframe || (l = function() {
          y.cancelAnimationFrame = !0
        }) : (a = function(t) {
          return setTimeout(t, 15 - Math.floor(+new Date / 1e3) % 16)
        }, l = clearInterval), this.init = function() {
          if (y.saved.css = [], x.isie7mobile || x.isoperamini) return !0;
          if (x.hasmstouch && y.css(y.ispage ? t("html") : y.win, {
              "-ms-touch-action": "none"
            }), y.zindex = "auto", y.zindex = y.ispage || "auto" != y.opt.zindex ? y.opt.zindex : h() || "auto", !y.ispage && "auto" != y.zindex && y.zindex > n && (n = y.zindex), y.isie && 0 == y.zindex && "auto" == y.opt.zindex && (y.zindex = "auto"), !y.ispage || !x.cantouch && !x.isieold && !x.isie9mobile) {
            var r = y.docscroll;
            y.ispage && (r = y.haswrapper ? y.win : y.doc), x.isie9mobile || y.css(r, {
              "overflow-y": "hidden"
            }), y.ispage && x.isie7 && ("BODY" == y.doc[0].nodeName ? y.css(t("html"), {
              "overflow-y": "hidden"
            }) : "HTML" == y.doc[0].nodeName && y.css(t("body"), {
              "overflow-y": "hidden"
            })), x.isios && !y.ispage && !y.haswrapper && y.css(t("body"), {
              "-webkit-overflow-scrolling": "touch"
            });
            var s = t(document.createElement("div"));
            s.css({
              position: "relative",
              top: 0,
              "float": "right",
              width: y.opt.cursorwidth,
              height: "0px",
              "background-color": y.opt.cursorcolor,
              border: y.opt.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": y.opt.cursorborderradius,
              "-moz-border-radius": y.opt.cursorborderradius,
              "border-radius": y.opt.cursorborderradius
            }), s.hborder = parseFloat(s.outerHeight() - s.innerHeight()), y.cursor = s;
            var a = t(document.createElement("div"));
            a.attr("id", y.id), a.addClass("nicescroll-rails");
            var l, c, d, p = ["left", "right"];
            for (d in p) c = p[d], (l = y.opt.railpadding[c]) ? a.css("padding-" + c, l + "px") : y.opt.railpadding[c] = 0;
            if (a.append(s), a.width = Math.max(parseFloat(y.opt.cursorwidth), s.outerWidth()) + y.opt.railpadding.left + y.opt.railpadding.right, a.css({
                width: a.width + "px",
                zIndex: y.zindex,
                background: y.opt.background,
                cursor: "default"
              }), a.visibility = !0, a.scrollable = !0, a.align = "left" == y.opt.railalign ? 0 : 1, y.rail = a, s = y.rail.drag = !1, y.opt.boxzoom && !y.ispage && !x.isieold && (s = document.createElement("div"), y.bind(s, "click", y.doZoom), y.zoom = t(s), y.zoom.css({
                cursor: "pointer",
                "z-index": y.zindex,
                backgroundImage: "url(" + y.opt.scriptpath + "zoomico.png)",
                height: 18,
                width: 18,
                backgroundPosition: "0px 0px"
              }), y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom), x.cantouch && y.opt.gesturezoom && (y.ongesturezoom = function(t) {
                return 1.5 < t.scale && y.doZoomIn(t), .8 > t.scale && y.doZoomOut(t), y.cancelEvent(t)
              }, y.bind(y.win, "gestureend", y.ongesturezoom))), y.railh = !1, y.opt.horizrailenabled) {
              y.css(r, {
                "overflow-x": "hidden"
              }), s = t(document.createElement("div")), s.css({
                position: "relative",
                top: 0,
                height: y.opt.cursorwidth,
                width: "0px",
                "background-color": y.opt.cursorcolor,
                border: y.opt.cursorborder,
                "background-clip": "padding-box",
                "-webkit-border-radius": y.opt.cursorborderradius,
                "-moz-border-radius": y.opt.cursorborderradius,
                "border-radius": y.opt.cursorborderradius
              }), s.wborder = parseFloat(s.outerWidth() - s.innerWidth()), y.cursorh = s;
              var f = t(document.createElement("div"));
              f.attr("id", y.id + "-hr"), f.addClass("nicescroll-rails"), f.height = Math.max(parseFloat(y.opt.cursorwidth), s.outerHeight()), f.css({
                height: f.height + "px",
                zIndex: y.zindex,
                background: y.opt.background
              }), f.append(s), f.visibility = !0, f.scrollable = !0, f.align = "top" == y.opt.railvalign ? 0 : 1, y.railh = f, y.railh.drag = !1
            }
            if (y.ispage ? (a.css({
                position: "fixed",
                top: "0px",
                height: "100%"
              }), a.css(a.align ? {
                right: "0px"
              } : {
                left: "0px"
              }), y.body.append(a), y.railh && (f.css({
                position: "fixed",
                left: "0px",
                width: "100%"
              }), f.css(f.align ? {
                bottom: "0px"
              } : {
                top: "0px"
              }), y.body.append(f))) : (y.ishwscroll ? ("static" == y.win.css("position") && y.css(y.win, {
                position: "relative"
              }), r = "HTML" == y.win[0].nodeName ? y.body : y.win, y.zoom && (y.zoom.css({
                position: "absolute",
                top: 1,
                right: 0,
                "margin-right": a.width + 4
              }), r.append(y.zoom)), a.css({
                position: "absolute",
                top: 0
              }), a.css(a.align ? {
                right: 0
              } : {
                left: 0
              }), r.append(a), f && (f.css({
                position: "absolute",
                left: 0,
                bottom: 0
              }), f.css(f.align ? {
                bottom: 0
              } : {
                top: 0
              }), r.append(f))) : (y.isfixed = "fixed" == y.win.css("position"), r = y.isfixed ? "fixed" : "absolute", y.isfixed || (y.viewport = y.getViewport(y.win[0])), y.viewport && (y.body = y.viewport, 0 == /fixed|relative|absolute/.test(y.viewport.css("position")) && y.css(y.viewport, {
                position: "relative"
              })), a.css({
                position: r
              }), y.zoom && y.zoom.css({
                position: r
              }), y.updateScrollBar(), y.body.append(a), y.zoom && y.body.append(y.zoom), y.railh && (f.css({
                position: r
              }), y.body.append(f))), x.isios && y.css(y.win, {
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                "-webkit-touch-callout": "none"
              }), x.isie && y.opt.disableoutline && y.win.attr("hideFocus", "true"), x.iswebkit && y.opt.disableoutline && y.win.css({
                outline: "none"
              })), !1 === y.opt.autohidemode ? (y.autohidedom = !1, y.rail.css({
                opacity: y.opt.cursoropacitymax
              }), y.railh && y.railh.css({
                opacity: y.opt.cursoropacitymax
              })) : !0 === y.opt.autohidemode || "leave" === y.opt.autohidemode ? (y.autohidedom = t().add(y.rail), x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)), y.railh && (y.autohidedom = y.autohidedom.add(y.railh)), y.railh && x.isie8 && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "scroll" == y.opt.autohidemode ? (y.autohidedom = t().add(y.rail), y.railh && (y.autohidedom = y.autohidedom.add(y.railh))) : "cursor" == y.opt.autohidemode ? (y.autohidedom = t().add(y.cursor), y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "hidden" == y.opt.autohidemode && (y.autohidedom = !1, y.hide(), y.locked = !1), x.isie9mobile) y.scrollmom = new g(y), y.onmangotouch = function(t) {
              t = y.getScrollTop();
              var e = y.getScrollLeft();
              if (t == y.scrollmom.lastscrolly && e == y.scrollmom.lastscrollx) return !0;
              var i = t - y.mangotouch.sy,
                o = e - y.mangotouch.sx;
              if (0 != Math.round(Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2)))) {
                var r = 0 > i ? -1 : 1,
                  n = 0 > o ? -1 : 1,
                  s = +new Date;
                y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy), 80 < s - y.mangotouch.tm || y.mangotouch.dry != r || y.mangotouch.drx != n ? (y.scrollmom.stop(), y.scrollmom.reset(e, t), y.mangotouch.sy = t, y.mangotouch.ly = t, y.mangotouch.sx = e, y.mangotouch.lx = e, y.mangotouch.dry = r, y.mangotouch.drx = n, y.mangotouch.tm = s) : (y.scrollmom.stop(), y.scrollmom.update(y.mangotouch.sx - o, y.mangotouch.sy - i), y.mangotouch.tm = s, i = Math.max(Math.abs(y.mangotouch.ly - t), Math.abs(y.mangotouch.lx - e)), y.mangotouch.ly = t, y.mangotouch.lx = e, i > 2 && (y.mangotouch.lazy = setTimeout(function() {
                  y.mangotouch.lazy = !1, y.mangotouch.dry = 0, y.mangotouch.drx = 0, y.mangotouch.tm = 0, y.scrollmom.doMomentum(30)
                }, 100)))
              }
            }, a = y.getScrollTop(), f = y.getScrollLeft(), y.mangotouch = {
              sy: a,
              ly: a,
              dry: 0,
              sx: f,
              lx: f,
              drx: 0,
              lazy: !1,
              tm: 0
            }, y.bind(y.docscroll, "scroll", y.onmangotouch);
            else {
              if (x.cantouch || y.istouchcapable || y.opt.touchbehavior || x.hasmstouch) {
                y.scrollmom = new g(y), y.ontouchstart = function(e) {
                  if (e.pointerType && 2 != e.pointerType) return !1;
                  if (y.hasmoving = !1, !y.locked) {
                    if (x.hasmstouch)
                      for (var i = e.target ? e.target : !1; i;) {
                        var o = t(i).getNiceScroll();
                        if (0 < o.length && o[0].me == y.me) break;
                        if (0 < o.length) return !1;
                        if ("DIV" == i.nodeName && i.id == y.id) break;
                        i = i.parentNode ? i.parentNode : !1
                      }
                    if (y.cancelScroll(), (i = y.getTarget(e)) && /INPUT/i.test(i.nodeName) && /range/i.test(i.type)) return y.stopPropagation(e);
                    if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen && (o = e, e = {
                        original: e.original ? e.original : e
                      }, e.clientX = o.screenX, e.clientY = o.screenY), y.rail.drag = {
                        x: e.clientX,
                        y: e.clientY,
                        sx: y.scroll.x,
                        sy: y.scroll.y,
                        st: y.getScrollTop(),
                        sl: y.getScrollLeft(),
                        pt: 2,
                        dl: !1
                      }, y.ispage || !y.opt.directionlockdeadzone) y.rail.drag.dl = "f";
                    else {
                      var o = t(window).width(),
                        r = t(window).height(),
                        n = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                        s = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                        r = Math.max(0, s - r),
                        o = Math.max(0, n - o);
                      y.rail.drag.ck = !y.rail.scrollable && y.railh.scrollable ? r > 0 ? "v" : !1 : y.rail.scrollable && !y.railh.scrollable && o > 0 ? "h" : !1, y.rail.drag.ck || (y.rail.drag.dl = "f")
                    }
                    if (y.opt.touchbehavior && y.isiframe && x.isie && (o = y.win.position(), y.rail.drag.x += o.left, y.rail.drag.y += o.top), y.hasmoving = !1, y.lastmouseup = !1, y.scrollmom.reset(e.clientX, e.clientY), !x.cantouch && !this.istouchcapable && !x.hasmstouch) {
                      if (!i || !/INPUT|SELECT|TEXTAREA/i.test(i.nodeName)) return !y.ispage && x.hasmousecapture && i.setCapture(), y.opt.touchbehavior ? (i.onclick && !i._onclick && (i._onclick = i.onclick, i.onclick = function(t) {
                        return y.hasmoving ? !1 : void i._onclick.call(this, t)
                      }), y.cancelEvent(e)) : y.stopPropagation(e);
                      /SUBMIT|CANCEL|BUTTON/i.test(t(i).attr("type")) && (pc = {
                        tg: i,
                        click: !1
                      }, y.preventclick = pc)
                    }
                  }
                }, y.ontouchend = function(t) {
                  return t.pointerType && 2 != t.pointerType ? !1 : y.rail.drag && 2 == y.rail.drag.pt && (y.scrollmom.doMomentum(), y.rail.drag = !1, y.hasmoving && (y.lastmouseup = !0, y.hideCursor(), x.hasmousecapture && document.releaseCapture(), !x.cantouch)) ? y.cancelEvent(t) : void 0
                };
                var m = y.opt.touchbehavior && y.isiframe && !x.hasmousecapture;
                y.ontouchmove = function(e, i) {
                  if (e.pointerType && 2 != e.pointerType) return !1;
                  if (y.rail.drag && 2 == y.rail.drag.pt) {
                    if (x.cantouch && "undefined" == typeof e.original) return !0;
                    if (y.hasmoving = !0, y.preventclick && !y.preventclick.click && (y.preventclick.click = y.preventclick.tg.onclick || !1, y.preventclick.tg.onclick = y.onpreventclick), e = t.extend({
                        original: e
                      }, e), "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), y.forcescreen) {
                      var o = e;
                      e = {
                        original: e.original ? e.original : e
                      }, e.clientX = o.screenX, e.clientY = o.screenY
                    }
                    if (o = ofy = 0, m && !i) {
                      var r = y.win.position(),
                        o = -r.left;
                      ofy = -r.top
                    }
                    var n = e.clientY + ofy,
                      r = n - y.rail.drag.y,
                      s = e.clientX + o,
                      a = s - y.rail.drag.x,
                      l = y.rail.drag.st - r;
                    if (y.ishwscroll && y.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > y.page.maxh && (l = y.page.maxh + Math.round((l - y.page.maxh) / 2)) : (0 > l && (n = l = 0), l > y.page.maxh && (l = y.page.maxh, n = 0)), y.railh && y.railh.scrollable) {
                      var c = y.rail.drag.sl - a;
                      y.ishwscroll && y.opt.bouncescroll ? 0 > c ? c = Math.round(c / 2) : c > y.page.maxw && (c = y.page.maxw + Math.round((c - y.page.maxw) / 2)) : (0 > c && (s = c = 0), c > y.page.maxw && (c = y.page.maxw, s = 0))
                    }
                    if (o = !1, y.rail.drag.dl) o = !0, "v" == y.rail.drag.dl ? c = y.rail.drag.sl : "h" == y.rail.drag.dl && (l = y.rail.drag.st);
                    else {
                      var r = Math.abs(r),
                        a = Math.abs(a),
                        h = y.opt.directionlockdeadzone;
                      if ("v" == y.rail.drag.ck) {
                        if (r > h && .3 * r >= a) return y.rail.drag = !1, !0;
                        a > h && (y.rail.drag.dl = "f", t("body").scrollTop(t("body").scrollTop()))
                      } else if ("h" == y.rail.drag.ck) {
                        if (a > h && .3 * a >= r) return y.rail.drag = !1, !0;
                        r > h && (y.rail.drag.dl = "f", t("body").scrollLeft(t("body").scrollLeft()))
                      }
                    }
                    if (y.synched("touchmove", function() {
                        y.rail.drag && 2 == y.rail.drag.pt && (y.prepareTransition && y.prepareTransition(0), y.rail.scrollable && y.setScrollTop(l), y.scrollmom.update(s, n), y.railh && y.railh.scrollable ? (y.setScrollLeft(c), y.showCursor(l, c)) : y.showCursor(l), x.isie10 && document.selection.clear())
                      }), x.ischrome && y.istouchcapable && (o = !1), o) return y.cancelEvent(e)
                  }
                }
              }
              if (y.onmousedown = function(t, e) {
                  if (!y.rail.drag || 1 == y.rail.drag.pt) {
                    if (y.locked) return y.cancelEvent(t);
                    y.cancelScroll(), y.rail.drag = {
                      x: t.clientX,
                      y: t.clientY,
                      sx: y.scroll.x,
                      sy: y.scroll.y,
                      pt: 1,
                      hr: !!e
                    };
                    var i = y.getTarget(t);
                    return !y.ispage && x.hasmousecapture && i.setCapture(), y.isiframe && !x.hasmousecapture && (y.saved.csspointerevents = y.doc.css("pointer-events"), y.css(y.doc, {
                      "pointer-events": "none"
                    })), y.hasmoving = !1, y.cancelEvent(t)
                  }
                }, y.onmouseup = function(t) {
                  return y.rail.drag && (x.hasmousecapture && document.releaseCapture(), y.isiframe && !x.hasmousecapture && y.doc.css("pointer-events", y.saved.csspointerevents), 1 == y.rail.drag.pt) ? (y.rail.drag = !1, y.hasmoving && y.triggerScrollEnd(), y.cancelEvent(t)) : void 0
                }, y.onmousemove = function(t) {
                  if (y.rail.drag && 1 == y.rail.drag.pt) {
                    if (x.ischrome && 0 == t.which) return y.onmouseup(t);
                    if (y.cursorfreezed = !0, y.hasmoving = !0, y.rail.drag.hr) {
                      y.scroll.x = y.rail.drag.sx + (t.clientX - y.rail.drag.x), 0 > y.scroll.x && (y.scroll.x = 0);
                      var e = y.scrollvaluemaxw;
                      y.scroll.x > e && (y.scroll.x = e)
                    } else y.scroll.y = y.rail.drag.sy + (t.clientY - y.rail.drag.y), 0 > y.scroll.y && (y.scroll.y = 0), e = y.scrollvaluemax, y.scroll.y > e && (y.scroll.y = e);
                    return y.synched("mousemove", function() {
                      y.rail.drag && 1 == y.rail.drag.pt && (y.showCursor(), y.rail.drag.hr ? y.doScrollLeft(Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollTop(Math.round(y.scroll.y * y.scrollratio.y), y.opt.cursordragspeed))
                    }), y.cancelEvent(t)
                  }
                }, x.cantouch || y.opt.touchbehavior) y.onpreventclick = function(t) {
                return y.preventclick ? (y.preventclick.tg.onclick = y.preventclick.click, y.preventclick = !1, y.cancelEvent(t)) : void 0
              }, y.bind(y.win, "mousedown", y.ontouchstart), y.onclick = x.isios ? !1 : function(t) {
                return y.lastmouseup ? (y.lastmouseup = !1, y.cancelEvent(t)) : !0
              }, y.opt.grabcursorenabled && x.cursorgrabvalue && (y.css(y.ispage ? y.doc : y.win, {
                cursor: x.cursorgrabvalue
              }), y.css(y.rail, {
                cursor: x.cursorgrabvalue
              }));
              else {
                var v = function(t) {
                  if (y.selectiondrag) {
                    if (t) {
                      var e = y.win.outerHeight();
                      t = t.pageY - y.selectiondrag.top, t > 0 && e > t && (t = 0), t >= e && (t -= e), y.selectiondrag.df = t
                    }
                    0 != y.selectiondrag.df && (y.doScrollBy(2 * -Math.floor(y.selectiondrag.df / 6)), y.debounced("doselectionscroll", function() {
                      v()
                    }, 50))
                  }
                };
                y.hasTextSelected = "getSelection" in document ? function() {
                  return 0 < document.getSelection().rangeCount
                } : "selection" in document ? function() {
                  return "None" != document.selection.type
                } : function() {
                  return !1
                }, y.onselectionstart = function() {
                  y.ispage || (y.selectiondrag = y.win.offset())
                }, y.onselectionend = function() {
                  y.selectiondrag = !1
                }, y.onselectiondrag = function(t) {
                  y.selectiondrag && y.hasTextSelected() && y.debounced("selectionscroll", function() {
                    v(t)
                  }, 250)
                }
              }
              x.hasmstouch && (y.css(y.rail, {
                "-ms-touch-action": "none"
              }), y.css(y.cursor, {
                "-ms-touch-action": "none"
              }), y.bind(y.win, "MSPointerDown", y.ontouchstart), y.bind(document, "MSPointerUp", y.ontouchend), y.bind(document, "MSPointerMove", y.ontouchmove), y.bind(y.cursor, "MSGestureHold", function(t) {
                t.preventDefault()
              }), y.bind(y.cursor, "contextmenu", function(t) {
                t.preventDefault()
              })), this.istouchcapable && (y.bind(y.win, "touchstart", y.ontouchstart), y.bind(document, "touchend", y.ontouchend), y.bind(document, "touchcancel", y.ontouchend), y.bind(document, "touchmove", y.ontouchmove)), y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.railh && (y.bind(y.cursorh, "mousedown", function(t) {
                y.onmousedown(t, !0)
              }), y.bind(y.cursorh, "mouseup", y.onmouseup)), (y.opt.cursordragontouch || !x.cantouch && !y.opt.touchbehavior) && (y.rail.css({
                cursor: "default"
              }), y.railh && y.railh.css({
                cursor: "default"
              }), y.jqbind(y.rail, "mouseenter", function() {
                return y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
              }), y.jqbind(y.rail, "mouseleave", function() {
                y.rail.active = !1, y.rail.drag || y.hideCursor()
              }), y.opt.sensitiverail && (y.bind(y.rail, "click", function(t) {
                y.doRailClick(t, !1, !1)
              }), y.bind(y.rail, "dblclick", function(t) {
                y.doRailClick(t, !0, !1)
              }), y.bind(y.cursor, "click", function(t) {
                y.cancelEvent(t)
              }), y.bind(y.cursor, "dblclick", function(t) {
                y.cancelEvent(t)
              })), y.railh && (y.jqbind(y.railh, "mouseenter", function() {
                return y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
              }), y.jqbind(y.railh, "mouseleave", function() {
                y.rail.active = !1, y.rail.drag || y.hideCursor()
              }), y.opt.sensitiverail && (y.bind(y.railh, "click", function(t) {
                y.doRailClick(t, !1, !0)
              }), y.bind(y.railh, "dblclick", function(t) {
                y.doRailClick(t, !0, !0)
              }), y.bind(y.cursorh, "click", function(t) {
                y.cancelEvent(t)
              }), y.bind(y.cursorh, "dblclick", function(t) {
                y.cancelEvent(t)
              })))), x.cantouch || y.opt.touchbehavior ? (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.ontouchend), y.bind(document, "mousemove", y.ontouchmove), y.onclick && y.bind(document, "click", y.onclick), y.opt.cursordragontouch && (y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mousemove", y.onmousemove), y.cursorh && y.bind(y.cursorh, "mousedown", function(t) {
                y.onmousedown(t, !0)
              }), y.cursorh && y.bind(y.cursorh, "mousemove", y.onmousemove))) : (y.bind(x.hasmousecapture ? y.win : document, "mouseup", y.onmouseup), y.bind(document, "mousemove", y.onmousemove), y.onclick && y.bind(document, "click", y.onclick), !y.ispage && y.opt.enablescrollonselection && (y.bind(y.win[0], "mousedown", y.onselectionstart), y.bind(document, "mouseup", y.onselectionend), y.bind(y.cursor, "mouseup", y.onselectionend), y.cursorh && y.bind(y.cursorh, "mouseup", y.onselectionend), y.bind(document, "mousemove", y.onselectiondrag)), y.zoom && (y.jqbind(y.zoom, "mouseenter", function() {
                y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
              }), y.jqbind(y.zoom, "mouseleave", function() {
                y.rail.active = !1, y.rail.drag || y.hideCursor()
              }))), y.opt.enablemousewheel && (y.isiframe || y.bind(x.isie && y.ispage ? document : y.win, "mousewheel", y.onmousewheel), y.bind(y.rail, "mousewheel", y.onmousewheel), y.railh && y.bind(y.railh, "mousewheel", y.onmousewheelhr)), !y.ispage && !x.cantouch && !/HTML|^BODY/.test(y.win[0].nodeName) && (y.win.attr("tabindex") || y.win.attr({
                tabindex: o++
              }), y.jqbind(y.win, "focus", function(t) {
                e = y.getTarget(t).id || !0, y.hasfocus = !0, y.canshowonmouseevent && y.noticeCursor()
              }), y.jqbind(y.win, "blur", function() {
                e = !1, y.hasfocus = !1
              }), y.jqbind(y.win, "mouseenter", function(t) {
                i = y.getTarget(t).id || !0, y.hasmousefocus = !0, y.canshowonmouseevent && y.noticeCursor()
              }), y.jqbind(y.win, "mouseleave", function() {
                i = !1, y.hasmousefocus = !1, y.rail.drag || y.hideCursor()
              }))
            }
            if (y.onkeypress = function(o) {
                if (y.locked && 0 == y.page.maxh) return !0;
                o = o ? o : window.e;
                var r = y.getTarget(o);
                if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!r.getAttribute("type") && !r.type || !/submit|button|cancel/i.tp) || t(r).attr("contenteditable")) return !0;
                if (y.hasfocus || y.hasmousefocus && !e || y.ispage && !e && !i) {
                  if (r = o.keyCode, y.locked && 27 != r) return y.cancelEvent(o);
                  var n = o.ctrlKey || !1,
                    s = o.shiftKey || !1,
                    a = !1;
                  switch (r) {
                    case 38:
                    case 63233:
                      y.doScrollBy(72), a = !0;
                      break;
                    case 40:
                    case 63235:
                      y.doScrollBy(-72), a = !0;
                      break;
                    case 37:
                    case 63232:
                      y.railh && (n ? y.doScrollLeft(0) : y.doScrollLeftBy(72), a = !0);
                      break;
                    case 39:
                    case 63234:
                      y.railh && (n ? y.doScrollLeft(y.page.maxw) : y.doScrollLeftBy(-72), a = !0);
                      break;
                    case 33:
                    case 63276:
                      y.doScrollBy(y.view.h), a = !0;
                      break;
                    case 34:
                    case 63277:
                      y.doScrollBy(-y.view.h), a = !0;
                      break;
                    case 36:
                    case 63273:
                      y.railh && n ? y.doScrollPos(0, 0) : y.doScrollTo(0), a = !0;
                      break;
                    case 35:
                    case 63275:
                      y.railh && n ? y.doScrollPos(y.page.maxw, y.page.maxh) : y.doScrollTo(y.page.maxh), a = !0;
                      break;
                    case 32:
                      y.opt.spacebarenabled && (y.doScrollBy(s ? y.view.h : -y.view.h), a = !0);
                      break;
                    case 27:
                      y.zoomactive && (y.doZoom(), a = !0)
                  }
                  if (a) return y.cancelEvent(o)
                }
              }, y.opt.enablekeyboard && y.bind(document, x.isopera && !x.isopera12 ? "keypress" : "keydown", y.onkeypress), y.bind(document, "keydown", function(t) {
                t.ctrlKey && (y.wheelprevented = !0)
              }), y.bind(document, "keyup", function(t) {
                t.ctrlKey || (y.wheelprevented = !1)
              }), y.bind(window, "resize", y.lazyResize), y.bind(window, "orientationchange", y.lazyResize), y.bind(window, "load", y.lazyResize), x.ischrome && !y.ispage && !y.haswrapper) {
              var w = y.win.attr("style"),
                a = parseFloat(y.win.css("width")) + 1;
              y.win.css("width", a), y.synched("chromefix", function() {
                y.win.attr("style", w)
              })
            }
            y.onAttributeChange = function() {
              y.lazyResize(250)
            }, !y.ispage && !y.haswrapper && (!1 !== u ? (y.observer = new u(function(t) {
              t.forEach(y.onAttributeChange)
            }), y.observer.observe(y.win[0], {
              childList: !0,
              characterData: !1,
              attributes: !0,
              subtree: !1
            }), y.observerremover = new u(function(t) {
              t.forEach(function(t) {
                if (0 < t.removedNodes.length)
                  for (var e in t.removedNodes)
                    if (t.removedNodes[e] == y.win[0]) return y.remove()
              })
            }), y.observerremover.observe(y.win[0].parentNode, {
              childList: !0,
              characterData: !1,
              attributes: !1,
              subtree: !1
            })) : (y.bind(y.win, x.isie && !x.isie9 ? "propertychange" : "DOMAttrModified", y.onAttributeChange), x.isie9 && y.win[0].attachEvent("onpropertychange", y.onAttributeChange), y.bind(y.win, "DOMNodeRemoved", function(t) {
              t.target == y.win[0] && y.remove()
            }))), !y.ispage && y.opt.boxzoom && y.bind(window, "resize", y.resizeZoom), y.istextarea && y.bind(y.win, "mouseup", y.lazyResize), y.lazyResize(30)
          }
          if ("IFRAME" == this.doc[0].nodeName) {
            var b = function(e) {
              y.iframexd = !1;
              try {
                var i = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
              } catch (o) {
                y.iframexd = !0, i = !1
              }
              return y.iframexd ? ("console" in window && console.log("NiceScroll error: policy restriced iframe"), !0) : (y.forcescreen = !0, y.isiframe && (y.iframe = {
                doc: t(i),
                html: y.doc.contents().find("html")[0],
                body: y.doc.contents().find("body")[0]
              }, y.getContentSize = function() {
                return {
                  w: Math.max(y.iframe.html.scrollWidth, y.iframe.body.scrollWidth),
                  h: Math.max(y.iframe.html.scrollHeight, y.iframe.body.scrollHeight)
                }
              }, y.docscroll = t(y.iframe.body)), !x.isios && y.opt.iframeautoresize && !y.isiframe && (y.win.scrollTop(0), y.doc.height(""), e = Math.max(i.getElementsByTagName("html")[0].scrollHeight, i.body.scrollHeight), y.doc.height(e)), y.lazyResize(30), x.isie7 && y.css(t(y.iframe.html), {
                "overflow-y": "hidden"
              }), y.css(t(y.iframe.body), {
                "overflow-y": "hidden"
              }), x.isios && y.haswrapper && y.css(t(i.body), {
                "-webkit-transform": "translate3d(0,0,0)"
              }), "contentWindow" in this ? y.bind(this.contentWindow, "scroll", y.onscroll) : y.bind(i, "scroll", y.onscroll), y.opt.enablemousewheel && y.bind(i, "mousewheel", y.onmousewheel), y.opt.enablekeyboard && y.bind(i, x.isopera ? "keypress" : "keydown", y.onkeypress), (x.cantouch || y.opt.touchbehavior) && (y.bind(i, "mousedown", y.ontouchstart), y.bind(i, "mousemove", function(t) {
                y.ontouchmove(t, !0)
              }), y.opt.grabcursorenabled && x.cursorgrabvalue && y.css(t(i.body), {
                cursor: x.cursorgrabvalue
              })), y.bind(i, "mouseup", y.ontouchend), void(y.zoom && (y.opt.dblclickzoom && y.bind(i, "dblclick", y.doZoom), y.ongesturezoom && y.bind(i, "gestureend", y.ongesturezoom))))
            };
            this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
              b.call(y.doc[0], !1)
            }, 500), y.bind(this.doc, "load", b)
          }
        }, this.showCursor = function(t, e) {
          y.cursortimeout && (clearTimeout(y.cursortimeout), y.cursortimeout = 0), y.rail && (y.autohidedom && (y.autohidedom.stop().css({
            opacity: y.opt.cursoropacitymax
          }), y.cursoractive = !0), y.rail.drag && 1 == y.rail.drag.pt || ("undefined" != typeof t && !1 !== t && (y.scroll.y = Math.round(1 * t / y.scrollratio.y)), "undefined" != typeof e && (y.scroll.x = Math.round(1 * e / y.scrollratio.x))), y.cursor.css({
            height: y.cursorheight,
            top: y.scroll.y
          }), y.cursorh && (y.cursorh.css(!y.rail.align && y.rail.visibility ? {
            width: y.cursorwidth,
            left: y.scroll.x + y.rail.width
          } : {
            width: y.cursorwidth,
            left: y.scroll.x
          }), y.cursoractive = !0), y.zoom && y.zoom.stop().css({
            opacity: y.opt.cursoropacitymax
          }))
        }, this.hideCursor = function(t) {
          !y.cursortimeout && y.rail && y.autohidedom && !(y.hasmousefocus && "leave" == y.opt.autohidemode) && (y.cursortimeout = setTimeout(function() {
            y.rail.active && y.showonmouseevent || (y.autohidedom.stop().animate({
              opacity: y.opt.cursoropacitymin
            }), y.zoom && y.zoom.stop().animate({
              opacity: y.opt.cursoropacitymin
            }), y.cursoractive = !1), y.cursortimeout = 0
          }, t || y.opt.hidecursordelay))
        }, this.noticeCursor = function(t, e, i) {
          y.showCursor(e, i), y.rail.active || y.hideCursor(t)
        }, this.getContentSize = y.ispage ? function() {
          return {
            w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
            h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }
        } : y.haswrapper ? function() {
          return {
            w: y.doc.outerWidth() + parseInt(y.win.css("paddingLeft")) + parseInt(y.win.css("paddingRight")),
            h: y.doc.outerHeight() + parseInt(y.win.css("paddingTop")) + parseInt(y.win.css("paddingBottom"))
          }
        } : function() {
          return {
            w: y.docscroll[0].scrollWidth,
            h: y.docscroll[0].scrollHeight
          }
        }, this.onResize = function(t, e) {
          if (!y || !y.win) return !1;
          if (!y.haswrapper && !y.ispage) {
            if ("none" == y.win.css("display")) return y.visibility && y.hideRail().hideRailHr(), !1;
            !y.hidden && !y.visibility && y.showRail().showRailHr()
          }
          var i = y.page.maxh,
            o = y.page.maxw,
            r = y.view.w;
          if (y.view = {
              w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
              h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight)
            }, y.page = e ? e : y.getContentSize(), y.page.maxh = Math.max(0, y.page.h - y.view.h), y.page.maxw = Math.max(0, y.page.w - y.view.w), y.page.maxh == i && y.page.maxw == o && y.view.w == r) {
            if (y.ispage) return y;
            if (i = y.win.offset(), y.lastposition && (o = y.lastposition, o.top == i.top && o.left == i.left)) return y;
            y.lastposition = i
          }
          return 0 == y.page.maxh ? (y.hideRail(), y.scrollvaluemax = 0, y.scroll.y = 0, y.scrollratio.y = 0, y.cursorheight = 0, y.setScrollTop(0), y.rail.scrollable = !1) : y.rail.scrollable = !0, 0 == y.page.maxw ? (y.hideRailHr(), y.scrollvaluemaxw = 0, y.scroll.x = 0, y.scrollratio.x = 0, y.cursorwidth = 0, y.setScrollLeft(0), y.railh.scrollable = !1) : y.railh.scrollable = !0, y.locked = 0 == y.page.maxh && 0 == y.page.maxw, y.locked ? (y.ispage || y.updateScrollBar(y.view), !1) : (y.hidden || y.visibility ? !y.hidden && !y.railh.visibility && y.showRailHr() : y.showRail().showRailHr(), y.istextarea && y.win.css("resize") && "none" != y.win.css("resize") && (y.view.h -= 20), y.cursorheight = Math.min(y.view.h, Math.round(y.view.h * (y.view.h / y.page.h))), y.cursorheight = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorheight), y.cursorwidth = Math.min(y.view.w, Math.round(y.view.w * (y.view.w / y.page.w))), y.cursorwidth = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorwidth), y.scrollvaluemax = y.view.h - y.cursorheight - y.cursor.hborder, y.railh && (y.railh.width = 0 < y.page.maxh ? y.view.w - y.rail.width : y.view.w, y.scrollvaluemaxw = y.railh.width - y.cursorwidth - y.cursorh.wborder), y.ispage || y.updateScrollBar(y.view), y.scrollratio = {
            x: y.page.maxw / y.scrollvaluemaxw,
            y: y.page.maxh / y.scrollvaluemax
          }, y.getScrollTop() > y.page.maxh ? y.doScrollTop(y.page.maxh) : (y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x)), y.cursoractive && y.noticeCursor()), y.scroll.y && 0 == y.getScrollTop() && y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)), y)
        }, this.resize = y.onResize, this.lazyResize = function(t) {
          return t = isNaN(t) ? 30 : t, y.delayed("resize", y.resize, t), y
        }, this._bind = function(t, e, i, o) {
          y.events.push({
            e: t,
            n: e,
            f: i,
            b: o,
            q: !1
          }), t.addEventListener ? t.addEventListener(e, i, o || !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        }, this.jqbind = function(e, i, o) {
          y.events.push({
            e: e,
            n: i,
            f: o,
            q: !0
          }), t(e).bind(i, o)
        }, this.bind = function(t, e, i, o) {
          var r = "jquery" in t ? t[0] : t;
          "mousewheel" == e ? "onwheel" in y.win ? y._bind(r, "wheel", i, o || !1) : (t = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", m(r, t, i, o || !1), "DOMMouseScroll" == t && m(r, "MozMousePixelScroll", i, o || !1)) : r.addEventListener ? (x.cantouch && /mouseup|mousedown|mousemove/.test(e) && y._bind(r, "mousedown" == e ? "touchstart" : "mouseup" == e ? "touchend" : "touchmove", function(t) {
            if (t.touches) {
              if (2 > t.touches.length) {
                var e = t.touches.length ? t.touches[0] : t;
                e.original = t, i.call(this, e)
              }
            } else t.changedTouches && (e = t.changedTouches[0], e.original = t, i.call(this, e))
          }, o || !1), y._bind(r, e, i, o || !1), x.cantouch && "mouseup" == e && y._bind(r, "touchcancel", i, o || !1)) : y._bind(r, e, function(t) {
            return (t = t || window.event || !1) && t.srcElement && (t.target = t.srcElement), "pageY" in t || (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop), !1 === i.call(r, t) || !1 === o ? y.cancelEvent(t) : !0
          })
        }, this._unbind = function(t, e, i, o) {
          t.removeEventListener ? t.removeEventListener(e, i, o) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = !1
        }, this.unbindAll = function() {
          for (var t = 0; t < y.events.length; t++) {
            var e = y.events[t];
            e.q ? e.e.unbind(e.n, e.f) : y._unbind(e.e, e.n, e.f, e.b)
          }
        }, this.cancelEvent = function(t) {
          return (t = t.original ? t.original : t ? t : window.event || !1) ? (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.preventManipulation && t.preventManipulation(), t.cancelBubble = !0, t.cancel = !0, t.returnValue = !1) : !1
        }, this.stopPropagation = function(t) {
          return (t = t.original ? t.original : t ? t : window.event || !1) ? t.stopPropagation ? t.stopPropagation() : (t.cancelBubble && (t.cancelBubble = !0), !1) : !1
        }, this.showRail = function() {
          return 0 == y.page.maxh || !y.ispage && "none" == y.win.css("display") || (y.visibility = !0, y.rail.visibility = !0, y.rail.css("display", "block")), y
        }, this.showRailHr = function() {
          return y.railh ? (0 == y.page.maxw || !y.ispage && "none" == y.win.css("display") || (y.railh.visibility = !0, y.railh.css("display", "block")), y) : y
        }, this.hideRail = function() {
          return y.visibility = !1, y.rail.visibility = !1, y.rail.css("display", "none"), y
        }, this.hideRailHr = function() {
          return y.railh ? (y.railh.visibility = !1, y.railh.css("display", "none"), y) : y
        }, this.show = function() {
          return y.hidden = !1, y.locked = !1, y.showRail().showRailHr()
        }, this.hide = function() {
          return y.hidden = !0, y.locked = !0, y.hideRail().hideRailHr()
        }, this.toggle = function() {
          return y.hidden ? y.show() : y.hide()
        }, this.remove = function() {
          y.stop(), y.cursortimeout && clearTimeout(y.cursortimeout), y.doZoomOut(), y.unbindAll(), x.isie9 && y.win[0].detachEvent("onpropertychange", y.onAttributeChange), !1 !== y.observer && y.observer.disconnect(), !1 !== y.observerremover && y.observerremover.disconnect(), y.events = null, y.cursor && y.cursor.remove(), y.cursorh && y.cursorh.remove(), y.rail && y.rail.remove(), y.railh && y.railh.remove(), y.zoom && y.zoom.remove();
          for (var e = 0; e < y.saved.css.length; e++) {
            var i = y.saved.css[e];
            i[0].css(i[1], "undefined" == typeof i[2] ? "" : i[2])
          }
          y.saved = !1, y.me.data("__nicescroll", "");
          var o = t.nicescroll;
          o.each(function(t) {
            if (this && this.id === y.id) {
              delete o[t];
              for (var e = ++t; e < o.length; e++, t++) o[t] = o[e];
              o.length--, o.length && delete o[o.length]
            }
          });
          for (var r in y) y[r] = null, delete y[r];
          y = null
        }, this.scrollstart = function(t) {
          return this.onscrollstart = t, y
        }, this.scrollend = function(t) {
          return this.onscrollend = t, y
        }, this.scrollcancel = function(t) {
          return this.onscrollcancel = t, y
        }, this.zoomin = function(t) {
          return this.onzoomin = t, y
        }, this.zoomout = function(t) {
          return this.onzoomout = t, y
        }, this.isScrollable = function(e) {
          if (e = e.target ? e.target : e, "OPTION" == e.nodeName) return !0;
          for (; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
            var i = t(e),
              i = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
            if (/scroll|auto/.test(i)) return e.clientHeight != e.scrollHeight;
            e = e.parentNode ? e.parentNode : !1
          }
          return !1
        }, this.getViewport = function(e) {
          for (e = e && e.parentNode ? e.parentNode : !1; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
            var i = t(e);
            if (/fixed|absolute/.test(i.css("position"))) return i;
            var o = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
            if (/scroll|auto/.test(o) && e.clientHeight != e.scrollHeight || 0 < i.getNiceScroll().length) return i;
            e = e.parentNode ? e.parentNode : !1
          }
          return e ? t(e) : !1
        }, this.triggerScrollEnd = function() {
          if (y.onscrollend) {
            var t = y.getScrollLeft(),
              e = y.getScrollTop();
            y.onscrollend.call(y, {
              type: "scrollend",
              current: {
                x: t,
                y: e
              },
              end: {
                x: t,
                y: e
              }
            })
          }
        }, this.onmousewheel = function(t) {
          if (!y.wheelprevented) {
            if (y.locked) return y.debounced("checkunlock", y.resize, 250), !0;
            if (y.rail.drag) return y.cancelEvent(t);
            if ("auto" == y.opt.oneaxismousemode && 0 != t.deltaX && (y.opt.oneaxismousemode = !1), y.opt.oneaxismousemode && 0 == t.deltaX && !y.rail.scrollable) return y.railh && y.railh.scrollable ? y.onmousewheelhr(t) : !0;
            var e = +new Date,
              i = !1;
            return y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), i = !0), y.checkarea = e, y.nativescrollingarea ? !0 : ((t = v(t, !1, i)) && (y.checkarea = 0), t)
          }
        }, this.onmousewheelhr = function(t) {
          if (!y.wheelprevented) {
            if (y.locked || !y.railh.scrollable) return !0;
            if (y.rail.drag) return y.cancelEvent(t);
            var e = +new Date,
              i = !1;
            return y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), i = !0), y.checkarea = e, y.nativescrollingarea ? !0 : y.locked ? y.cancelEvent(t) : v(t, !0, i)
          }
        }, this.stop = function() {
          return y.cancelScroll(), y.scrollmon && y.scrollmon.stop(), y.cursorfreezed = !1, y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.noticeCursor(), y
        }, this.getTransitionSpeed = function(t) {
          var e = Math.round(10 * y.opt.scrollspeed);
          return t = Math.min(e, Math.round(t / 20 * y.opt.scrollspeed)), t > 20 ? t : 0
        }, y.opt.smoothscroll ? y.ishwscroll && x.hastransition && y.opt.usetransition ? (this.prepareTransition = function(t, e) {
          var i = e ? t > 20 ? t : 0 : y.getTransitionSpeed(t),
            o = i ? x.prefixstyle + "transform " + i + "ms ease-out" : "";
          return y.lasttransitionstyle && y.lasttransitionstyle == o || (y.lasttransitionstyle = o, y.doc.css(x.transitionstyle, o)), i
        }, this.doScrollLeft = function(t, e) {
          var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
          y.doScrollPos(t, i, e)
        }, this.doScrollTop = function(t, e) {
          var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
          y.doScrollPos(i, t, e)
        }, this.doScrollPos = function(t, e, i) {
          var o = y.getScrollTop(),
            r = y.getScrollLeft();
          return (0 > (y.newscrolly - o) * (e - o) || 0 > (y.newscrollx - r) * (t - r)) && y.cancelScroll(), 0 == y.opt.bouncescroll && (0 > e ? e = 0 : e > y.page.maxh && (e = y.page.maxh), 0 > t ? t = 0 : t > y.page.maxw && (t = y.page.maxw)), y.scrollrunning && t == y.newscrollx && e == y.newscrolly ? !1 : (y.newscrolly = e, y.newscrollx = t, y.newscrollspeed = i || !1, y.timer ? !1 : void(y.timer = setTimeout(function() {
            var i, o, r = y.getScrollTop(),
              n = y.getScrollLeft();
            i = t - n, o = e - r, i = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))), i = y.newscrollspeed && 1 < y.newscrollspeed ? y.newscrollspeed : y.getTransitionSpeed(i), y.newscrollspeed && 1 >= y.newscrollspeed && (i *= y.newscrollspeed), y.prepareTransition(i, !0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), i > 0 && (!y.scrollrunning && y.onscrollstart && y.onscrollstart.call(y, {
              type: "scrollstart",
              current: {
                x: n,
                y: r
              },
              request: {
                x: t,
                y: e
              },
              end: {
                x: y.newscrollx,
                y: y.newscrolly
              },
              speed: i
            }), x.transitionend ? y.scrollendtrapped || (y.scrollendtrapped = !0, y.bind(y.doc, x.transitionend, y.onScrollTransitionEnd, !1)) : (y.scrollendtrapped && clearTimeout(y.scrollendtrapped), y.scrollendtrapped = setTimeout(y.onScrollTransitionEnd, i)), y.timerscroll = {
              bz: new BezierClass(r, y.newscrolly, i, 0, 0, .58, 1),
              bh: new BezierClass(n, y.newscrollx, i, 0, 0, .58, 1)
            }, y.cursorfreezed || (y.timerscroll.tm = setInterval(function() {
              y.showCursor(y.getScrollTop(), y.getScrollLeft())
            }, 60))), y.synched("doScroll-set", function() {
              y.timer = 0, y.scrollendtrapped && (y.scrollrunning = !0), y.setScrollTop(y.newscrolly), y.setScrollLeft(y.newscrollx), y.scrollendtrapped || y.onScrollTransitionEnd()
            })
          }, 50)))
        }, this.cancelScroll = function() {
          if (!y.scrollendtrapped) return !0;
          var t = y.getScrollTop(),
            e = y.getScrollLeft();
          return y.scrollrunning = !1, x.transitionend || clearTimeout(x.transitionend), y.scrollendtrapped = !1, y._unbind(y.doc, x.transitionend, y.onScrollTransitionEnd), y.prepareTransition(0), y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1, y.cursorfreezed = !1, y.showCursor(t, e), y
        }, this.onScrollTransitionEnd = function() {
          y.scrollendtrapped && y._unbind(y.doc, x.transitionend, y.onScrollTransitionEnd), y.scrollendtrapped = !1, y.prepareTransition(0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1;
          var t = y.getScrollTop(),
            e = y.getScrollLeft();
          return y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.noticeCursor(!1, t, e), y.cursorfreezed = !1, 0 > t ? t = 0 : t > y.page.maxh && (t = y.page.maxh), 0 > e ? e = 0 : e > y.page.maxw && (e = y.page.maxw), t != y.newscrolly || e != y.newscrollx ? y.doScrollPos(e, t, y.opt.snapbackspeed) : (y.onscrollend && y.scrollrunning && y.triggerScrollEnd(), void(y.scrollrunning = !1))
        }) : (this.doScrollLeft = function(t, e) {
          var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
          y.doScrollPos(t, i, e)
        }, this.doScrollTop = function(t, e) {
          var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
          y.doScrollPos(i, t, e)
        }, this.doScrollPos = function(t, e, i) {
          function o() {
            if (y.cancelAnimationFrame) return !0;
            if (y.scrollrunning = !0, u = 1 - u) return y.timer = a(o) || 1;
            var t = 0,
              e = sy = y.getScrollTop();
            if (y.dst.ay) {
              var e = y.bzscroll ? y.dst.py + y.bzscroll.getNow() * y.dst.ay : y.newscrolly,
                i = e - sy;
              (0 > i && e < y.newscrolly || i > 0 && e > y.newscrolly) && (e = y.newscrolly), y.setScrollTop(e), e == y.newscrolly && (t = 1)
            } else t = 1;
            var r = sx = y.getScrollLeft();
            y.dst.ax ? (r = y.bzscroll ? y.dst.px + y.bzscroll.getNow() * y.dst.ax : y.newscrollx, i = r - sx, (0 > i && r < y.newscrollx || i > 0 && r > y.newscrollx) && (r = y.newscrollx), y.setScrollLeft(r), r == y.newscrollx && (t += 1)) : t += 1, 2 == t ? (y.timer = 0, y.cursorfreezed = !1, y.bzscroll = !1, y.scrollrunning = !1, 0 > e ? e = 0 : e > y.page.maxh && (e = y.page.maxh), 0 > r ? r = 0 : r > y.page.maxw && (r = y.page.maxw), r != y.newscrollx || e != y.newscrolly ? y.doScrollPos(r, e) : y.onscrollend && y.triggerScrollEnd()) : y.timer = a(o) || 1
          }
          if (e = "undefined" == typeof e || !1 === e ? y.getScrollTop(!0) : e, y.timer && y.newscrolly == e && y.newscrollx == t) return !0;
          y.timer && l(y.timer), y.timer = 0;
          var r = y.getScrollTop(),
            n = y.getScrollLeft();
          (0 > (y.newscrolly - r) * (e - r) || 0 > (y.newscrollx - n) * (t - n)) && y.cancelScroll(), y.newscrolly = e, y.newscrollx = t, y.bouncescroll && y.rail.visibility || (0 > y.newscrolly ? y.newscrolly = 0 : y.newscrolly > y.page.maxh && (y.newscrolly = y.page.maxh)), y.bouncescroll && y.railh.visibility || (0 > y.newscrollx ? y.newscrollx = 0 : y.newscrollx > y.page.maxw && (y.newscrollx = y.page.maxw)), y.dst = {}, y.dst.x = t - n, y.dst.y = e - r, y.dst.px = n, y.dst.py = r;
          var s = Math.round(Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2)));
          y.dst.ax = y.dst.x / s, y.dst.ay = y.dst.y / s;
          var c = 0,
            h = s;
          if (0 == y.dst.x ? (c = r, h = e, y.dst.ay = 1, y.dst.py = 0) : 0 == y.dst.y && (c = n, h = t, y.dst.ax = 1, y.dst.px = 0), s = y.getTransitionSpeed(s), i && 1 >= i && (s *= i), y.bzscroll = s > 0 ? y.bzscroll ? y.bzscroll.update(h, s) : new BezierClass(c, h, s, 0, 1, 0, 1) : !1, !y.timer) {
            (r == y.page.maxh && e >= y.page.maxh || n == y.page.maxw && t >= y.page.maxw) && y.checkContentSize();
            var u = 1;
            y.cancelAnimationFrame = !1, y.timer = 1, y.onscrollstart && !y.scrollrunning && y.onscrollstart.call(y, {
              type: "scrollstart",
              current: {
                x: n,
                y: r
              },
              request: {
                x: t,
                y: e
              },
              end: {
                x: y.newscrollx,
                y: y.newscrolly
              },
              speed: s
            }), o(), (r == y.page.maxh && e >= r || n == y.page.maxw && t >= n) && y.checkContentSize(), y.noticeCursor()
          }
        }, this.cancelScroll = function() {
          return y.timer && l(y.timer), y.timer = 0, y.bzscroll = !1, y.scrollrunning = !1, y
        }) : (this.doScrollLeft = function(t, e) {
          var i = y.getScrollTop();
          y.doScrollPos(t, i, e)
        }, this.doScrollTop = function(t, e) {
          var i = y.getScrollLeft();
          y.doScrollPos(i, t, e)
        }, this.doScrollPos = function(t, e) {
          var i = t > y.page.maxw ? y.page.maxw : t;
          0 > i && (i = 0);
          var o = e > y.page.maxh ? y.page.maxh : e;
          0 > o && (o = 0), y.synched("scroll", function() {
            y.setScrollTop(o), y.setScrollLeft(i)
          })
        }, this.cancelScroll = function() {}), this.doScrollBy = function(t, e) {
          var i = 0,
            i = e ? Math.floor((y.scroll.y - t) * y.scrollratio.y) : (y.timer ? y.newscrolly : y.getScrollTop(!0)) - t;
          if (y.bouncescroll) {
            var o = Math.round(y.view.h / 2); - o > i ? i = -o : i > y.page.maxh + o && (i = y.page.maxh + o)
          }
          return y.cursorfreezed = !1, py = y.getScrollTop(!0), 0 > i && 0 >= py ? y.noticeCursor() : i > y.page.maxh && py >= y.page.maxh ? (y.checkContentSize(), y.noticeCursor()) : void y.doScrollTop(i)
        }, this.doScrollLeftBy = function(t, e) {
          var i = 0,
            i = e ? Math.floor((y.scroll.x - t) * y.scrollratio.x) : (y.timer ? y.newscrollx : y.getScrollLeft(!0)) - t;
          if (y.bouncescroll) {
            var o = Math.round(y.view.w / 2); - o > i ? i = -o : i > y.page.maxw + o && (i = y.page.maxw + o)
          }
          return y.cursorfreezed = !1, px = y.getScrollLeft(!0), 0 > i && 0 >= px || i > y.page.maxw && px >= y.page.maxw ? y.noticeCursor() : void y.doScrollLeft(i)
        }, this.doScrollTo = function(t, e) {
          e && Math.round(t * y.scrollratio.y), y.cursorfreezed = !1, y.doScrollTop(t)
        }, this.checkContentSize = function() {
          var t = y.getContentSize();
          (t.h != y.page.h || t.w != y.page.w) && y.resize(!1, t)
        }, y.onscroll = function() {
          y.rail.drag || y.cursorfreezed || y.synched("scroll", function() {
            y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.railh && (y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x))), y.noticeCursor()
          })
        }, y.bind(y.docscroll, "scroll", y.onscroll), this.doZoomIn = function(e) {
          if (!y.zoomactive) {
            y.zoomactive = !0, y.zoomrestore = {
              style: {}
            };
            var i, o = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
              r = y.win[0].style;
            for (i in o) {
              var s = o[i];
              y.zoomrestore.style[s] = "undefined" != typeof r[s] ? r[s] : ""
            }
            return y.zoomrestore.style.width = y.win.css("width"), y.zoomrestore.style.height = y.win.css("height"), y.zoomrestore.padding = {
              w: y.win.outerWidth() - y.win.width(),
              h: y.win.outerHeight() - y.win.height()
            }, x.isios4 && (y.zoomrestore.scrollTop = t(window).scrollTop(), t(window).scrollTop(0)), y.win.css({
              position: x.isios4 ? "absolute" : "fixed",
              top: 0,
              left: 0,
              "z-index": n + 100,
              margin: "0px"
            }), o = y.win.css("backgroundColor"), ("" == o || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(o)) && y.win.css("backgroundColor", "#fff"), y.rail.css({
              "z-index": n + 101
            }), y.zoom.css({
              "z-index": n + 102
            }), y.zoom.css("backgroundPosition", "0px -18px"), y.resizeZoom(), y.onzoomin && y.onzoomin.call(y), y.cancelEvent(e)
          }
        }, this.doZoomOut = function(e) {
          return y.zoomactive ? (y.zoomactive = !1, y.win.css("margin", ""), y.win.css(y.zoomrestore.style), x.isios4 && t(window).scrollTop(y.zoomrestore.scrollTop), y.rail.css({
            "z-index": y.zindex
          }), y.zoom.css({
            "z-index": y.zindex
          }), y.zoomrestore = !1, y.zoom.css("backgroundPosition", "0px 0px"), y.onResize(), y.onzoomout && y.onzoomout.call(y), y.cancelEvent(e)) : void 0
        }, this.doZoom = function(t) {
          return y.zoomactive ? y.doZoomOut(t) : y.doZoomIn(t)
        }, this.resizeZoom = function() {
          if (y.zoomactive) {
            var e = y.getScrollTop();
            y.win.css({
              width: t(window).width() - y.zoomrestore.padding.w + "px",
              height: t(window).height() - y.zoomrestore.padding.h + "px"
            }), y.onResize(), y.setScrollTop(Math.min(y.page.maxh, e))
          }
        }, this.init(), t.nicescroll.push(this)
      },
      g = function(t) {
        var e = this;
        this.nc = t, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function() {
          return +new Date
        }, this.reset = function(t, i) {
          e.stop();
          var o = e.time();
          e.steptime = 0, e.lasttime = o, e.speedx = 0, e.speedy = 0, e.lastx = t, e.lasty = i, e.lastscrollx = -1, e.lastscrolly = -1
        }, this.update = function(t, i) {
          var o = e.time();
          e.steptime = o - e.lasttime, e.lasttime = o;
          var o = i - e.lasty,
            r = t - e.lastx,
            n = e.nc.getScrollTop(),
            s = e.nc.getScrollLeft(),
            n = n + o,
            s = s + r;
          e.snapx = 0 > s || s > e.nc.page.maxw, e.snapy = 0 > n || n > e.nc.page.maxh, e.speedx = r, e.speedy = o, e.lastx = t, e.lasty = i
        }, this.stop = function() {
          e.nc.unsynched("domomentum2d"), e.timer && clearTimeout(e.timer), e.timer = 0, e.lastscrollx = -1, e.lastscrolly = -1
        }, this.doSnapy = function(t, i) {
          var o = !1;
          0 > i ? (i = 0, o = !0) : i > e.nc.page.maxh && (i = e.nc.page.maxh, o = !0), 0 > t ? (t = 0, o = !0) : t > e.nc.page.maxw && (t = e.nc.page.maxw, o = !0), o ? e.nc.doScrollPos(t, i, e.nc.opt.snapbackspeed) : e.nc.triggerScrollEnd()
        }, this.doMomentum = function(t) {
          var i = e.time(),
            o = t ? i + t : e.lasttime;
          t = e.nc.getScrollLeft();
          var r = e.nc.getScrollTop(),
            n = e.nc.page.maxh,
            s = e.nc.page.maxw;
          if (e.speedx = s > 0 ? Math.min(60, e.speedx) : 0, e.speedy = n > 0 ? Math.min(60, e.speedy) : 0, o = o && 60 >= i - o, (0 > r || r > n || 0 > t || t > s) && (o = !1), t = e.speedx && o ? e.speedx : !1, e.speedy && o && e.speedy || t) {
            var a = Math.max(16, e.steptime);
            a > 50 && (t = a / 50, e.speedx *= t, e.speedy *= t, a = 50), e.demulxy = 0, e.lastscrollx = e.nc.getScrollLeft(), e.chkx = e.lastscrollx, e.lastscrolly = e.nc.getScrollTop(), e.chky = e.lastscrolly;
            var l = e.lastscrollx,
              c = e.lastscrolly,
              h = function() {
                var t = 600 < e.time() - i ? .04 : .02;
                e.speedx && (l = Math.floor(e.lastscrollx - e.speedx * (1 - e.demulxy)), e.lastscrollx = l, 0 > l || l > s) && (t = .1), e.speedy && (c = Math.floor(e.lastscrolly - e.speedy * (1 - e.demulxy)), e.lastscrolly = c, 0 > c || c > n) && (t = .1), e.demulxy = Math.min(1, e.demulxy + t), e.nc.synched("domomentum2d", function() {
                  e.speedx && (e.nc.getScrollLeft() != e.chkx && e.stop(), e.chkx = l, e.nc.setScrollLeft(l)), e.speedy && (e.nc.getScrollTop() != e.chky && e.stop(), e.chky = c, e.nc.setScrollTop(c)), e.timer || (e.nc.hideCursor(), e.doSnapy(l, c))
                }), 1 > e.demulxy ? e.timer = setTimeout(h, a) : (e.stop(), e.nc.hideCursor(), e.doSnapy(l, c))
              };
            h()
          } else e.doSnapy(e.nc.getScrollLeft(), e.nc.getScrollTop())
        }
      },
      v = t.fn.scrollTop;
    t.cssHooks.pageYOffset = {
      get: function(e, i) {
        return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollTop() : v.call(e)
      },
      set: function(e, i) {
        var o = t.data(e, "__nicescroll") || !1;
        return o && o.ishwscroll ? o.setScrollTop(parseInt(i)) : v.call(e, i), this
      }
    }, t.fn.scrollTop = function(e) {
      if ("undefined" == typeof e) {
        var i = this[0] ? t.data(this[0], "__nicescroll") || !1 : !1;
        return i && i.ishwscroll ? i.getScrollTop() : v.call(this)
      }
      return this.each(function() {
        var i = t.data(this, "__nicescroll") || !1;
        i && i.ishwscroll ? i.setScrollTop(parseInt(e)) : v.call(t(this), e)
      })
    };
    var y = t.fn.scrollLeft;
    t.cssHooks.pageXOffset = {
      get: function(e, i) {
        return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollLeft() : y.call(e)
      },
      set: function(e, i) {
        var o = t.data(e, "__nicescroll") || !1;
        return o && o.ishwscroll ? o.setScrollLeft(parseInt(i)) : y.call(e, i), this
      }
    }, t.fn.scrollLeft = function(e) {
      if ("undefined" == typeof e) {
        var i = this[0] ? t.data(this[0], "__nicescroll") || !1 : !1;
        return i && i.ishwscroll ? i.getScrollLeft() : y.call(this)
      }
      return this.each(function() {
        var i = t.data(this, "__nicescroll") || !1;
        i && i.ishwscroll ? i.setScrollLeft(parseInt(e)) : y.call(t(this), e)
      })
    };
    var w = function(e) {
      var i = this;
      if (this.length = 0, this.name = "nicescrollarray", this.each = function(t) {
          for (var e = 0, o = 0; e < i.length; e++) t.call(i[e], o++);
          return i
        }, this.push = function(t) {
          i[i.length] = t, i.length++
        }, this.eq = function(t) {
          return i[t]
        }, e)
        for (var o = 0; o < e.length; o++) {
          var r = t.data(e[o], "__nicescroll") || !1;
          r && (this[this.length] = r, this.length++)
        }
      return this
    };
    ! function(t, e, i) {
      for (var o = 0; o < e.length; o++) i(t, e[o])
    }(w.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(t, e) {
      t[e] = function() {
        var t = arguments;
        return this.each(function() {
          this[e].apply(this, t)
        })
      }
    }), t.fn.getNiceScroll = function(e) {
      return "undefined" == typeof e ? new w(this) : this[e] && t.data(this[e], "__nicescroll") || !1
    }, t.extend(t.expr[":"], {
      nicescroll: function(e) {
        return t.data(e, "__nicescroll") ? !0 : !1
      }
    }), t.fn.niceScroll = function(e, i) {
      "undefined" == typeof i && "object" == typeof e && !("jquery" in e) && (i = e, e = !1);
      var o = new w;
      "undefined" == typeof i && (i = {}), e && (i.doc = t(e), i.win = t(this));
      var r = !("doc" in i);
      return !r && !("win" in i) && (i.win = t(this)), this.each(function() {
        var e = t(this).data("__nicescroll") || !1;
        e || (i.doc = r ? t(this) : i.doc, e = new m(i, t(this)), t(this).data("__nicescroll", e)), o.push(e)
      }), 1 == o.length ? o[0] : o
    }, window.NiceScroll = {
      getjQuery: function() {
        return t
      }
    }, t.nicescroll || (t.nicescroll = new w, t.nicescroll.options = d)
  }),
  function() {
    function t() {
      if (t.is(arguments[0], H)) {
        for (var e = arguments[0], i = Ve[y](t, e.splice(0, 3 + t.is(e[0], O))), o = i.set(), r = 0, n = e[M]; n > r; r++) {
          var s = e[r] || {};
          c[d](s.type) && o[$](i[s.type]().attr(s))
        }
        return o
      }
      return Ve[y](t, arguments)
    }

    function e() {
      for (var t = [], e = 0; 32 > e; e++) t[e] = (~~(16 * A.random()))[j](16);
      return t[12] = 4, t[16] = (3 & t[16] | 8)[j](16), "r-" + t[_]("")
    }

    function i(t, e, i) {
      function o() {
        var r = Array[u].slice.call(arguments, 0),
          n = r[_]("►"),
          s = o.cache = o.cache || {},
          a = o.count = o.count || [];
        return s[d](n) ? i ? i(s[n]) : s[n] : (a[M] >= 1e3 && delete s[a.shift()], a[$](n), s[n] = t[y](e, r), i ? i(s[n]) : s[n])
      }
      return o
    }

    function o(e, i, o, r, n) {
      return n ? t.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", e + n, i, o - 2 * n, n, -n, r - 2 * n, 2 * n - o, 2 * n - r) : t.format("M{0},{1}l{2},0,0,{3},{4},0z", e, i, o, r, -o)
    }

    function r() {
      return this.x + k + this.y
    }

    function n(e) {
      return function(i, o, r, n) {
        var s = {
          back: e
        };
        return t.is(r, "function") ? n = r : s.rot = r, i && i.constructor == $e && (i = i.attrs.path), i && (s.along = i), this.animate(s, o, n)
      }
    }

    function s(t, e, i, o, r, n) {
      function s(t) {
        return ((u * t + h) * t + c) * t
      }

      function a(t, e) {
        var i = l(t, e);
        return ((f * i + p) * i + d) * i
      }

      function l(t, e) {
        var i, o, r, n, a, l;
        for (r = t, l = 0; 8 > l; l++) {
          if (n = s(r) - t, N(n) < e) return r;
          if (a = (3 * u * r + 2 * h) * r + c, N(a) < 1e-6) break;
          r -= n / a
        }
        if (i = 0, o = 1, r = t, i > r) return i;
        if (r > o) return o;
        for (; o > i;) {
          if (n = s(r), N(n - t) < e) return r;
          t > n ? i = r : o = r, r = (o - i) / 2 + i
        }
        return r
      }
      var c = 3 * e,
        h = 3 * (o - e) - c,
        u = 1 - c - h,
        d = 3 * i,
        p = 3 * (r - i) - d,
        f = 1 - d - p;
      return a(t, 1 / (200 * n))
    }
    t.version = "1.5.2";
    var a, l = /[, ]+/,
      c = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
      },
      h = /\{(\d+)\}/g,
      u = "prototype",
      d = "hasOwnProperty",
      p = document,
      f = window,
      m = {
        was: Object[u][d].call(f, "Raphael"),
        is: f.Raphael
      },
      g = function() {
        this.customAttributes = {}
      },
      v = "appendChild",
      y = "apply",
      w = "concat",
      x = "createTouch" in p,
      b = "",
      k = " ",
      S = String,
      T = "split",
      z = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend" [T](k),
      C = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      },
      _ = "join",
      M = "length",
      E = S[u].toLowerCase,
      A = Math,
      L = A.max,
      B = A.min,
      N = A.abs,
      P = A.pow,
      R = A.PI,
      O = "number",
      I = "string",
      H = "array",
      j = "toString",
      D = "fill",
      W = Object[u][j],
      $ = "push",
      F = /^url\(['"]?([^\)]+?)['"]?\)$/i,
      q = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
      Y = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
      },
      G = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
      X = A.round,
      Q = "setAttribute",
      U = parseFloat,
      V = parseInt,
      Z = " progid:DXImageTransform.Microsoft",
      K = S[u].toUpperCase,
      J = {
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        opacity: 1,
        path: "M0,0",
        r: 0,
        rotation: 0,
        rx: 0,
        ry: 0,
        scale: "1 1",
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        translation: "0 0",
        width: 0,
        x: 0,
        y: 0
      },
      te = {
        along: "along",
        blur: O,
        "clip-rect": "csv",
        cx: O,
        cy: O,
        fill: "colour",
        "fill-opacity": O,
        "font-size": O,
        height: O,
        opacity: O,
        path: "path",
        r: O,
        rotation: "csv",
        rx: O,
        ry: O,
        scale: "csv",
        stroke: "colour",
        "stroke-opacity": O,
        "stroke-width": O,
        translation: "csv",
        width: O,
        x: O,
        y: O
      },
      ee = "replace",
      ie = /^(from|to|\d+%?)$/,
      oe = /\s*,\s*/,
      re = {
        hs: 1,
        rg: 1
      },
      ne = /,?([achlmqrstvxz]),?/gi,
      se = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/gi,
      ae = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/gi,
      le = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
      ce = function(t, e) {
        return t.key - e.key
      };
    if (t.type = f.SVGAngle || p.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == t.type) {
      var he, ue = p.createElement("div");
      if (ue.innerHTML = '<v:shape adj="1"/>', he = ue.firstChild, he.style.behavior = "url(#default#VML)", !he || "object" != typeof he.adj) return t.type = null;
      ue = null
    }
    t.svg = !(t.vml = "VML" == t.type), g[u] = t[u], a = g[u], t._id = 0, t._oid = 0, t.fn = {}, t.is = function(t, e) {
      return e = E.call(e), "finite" == e ? !Y[d](+t) : "null" == e && null === t || e == typeof t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || W.call(t).slice(8, -1).toLowerCase() == e
    }, t.angle = function(e, i, o, r, n, s) {
      if (null == n) {
        var a = e - o,
          l = i - r;
        return a || l ? (180 * (0 > a) + 180 * A.atan(-l / -a) / R + 360) % 360 : 0
      }
      return t.angle(e, i, n, s) - t.angle(o, r, n, s)
    }, t.rad = function(t) {
      return t % 360 * R / 180
    }, t.deg = function(t) {
      return 180 * t / R % 360
    }, t.snapTo = function(e, i, o) {
      if (o = t.is(o, "finite") ? o : 10, t.is(e, H)) {
        for (var r = e.length; r--;)
          if (N(e[r] - i) <= o) return e[r]
      } else {
        e = +e;
        var n = i % e;
        if (o > n) return i - n;
        if (n > e - o) return i - n + e
      }
      return i
    }, t.setWindow = function(t) {
      f = t, p = f.document
    };
    var de = function(t) {
        if (n.vml) {
          var e, o = /^\s+|\s+$/g;
          try {
            var r = new ActiveXObject("htmlfile");
            r.write("<body>"), r.close(), e = r.body
          } catch (n) {
            e = createPopup().document.body
          }
          var s = e.createTextRange();
          de = i(function(t) {
            try {
              e.style.color = S(t)[ee](o, b);
              var i = s.queryCommandValue("ForeColor");
              return i = (255 & i) << 16 | 65280 & i | (16711680 & i) >>> 16, "#" + ("000000" + i[j](16)).slice(-6)
            } catch (t) {
              return "none"
            }
          })
        } else {
          var a = p.createElement("i");
          a.title = "Raphaël Colour Picker", a.style.display = "none", p.body[v](a), de = i(function(t) {
            return a.style.color = t, p.defaultView.getComputedStyle(a, b).getPropertyValue("color")
          })
        }
        return de(t)
      },
      pe = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
      },
      fe = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
      },
      me = function() {
        return this.hex
      };
    t.hsb2rgb = function(e, i, o, r) {
      return t.is(e, "object") && "h" in e && "s" in e && "b" in e && (o = e.b, i = e.s, e = e.h, r = e.o), t.hsl2rgb(e, i, o / 2, r)
    }, t.hsl2rgb = function(e, i, o, r) {
      t.is(e, "object") && "h" in e && "s" in e && "l" in e && (o = e.l, i = e.s, e = e.h), (e > 1 || i > 1 || o > 1) && (e /= 360, i /= 100, o /= 100);
      var n, s, a, l = {},
        c = ["r", "g", "b"];
      if (i) {
        n = .5 > o ? o * (1 + i) : o + i - o * i, s = 2 * o - n;
        for (var h = 0; 3 > h; h++) a = e + 1 / 3 * -(h - 1), 0 > a && a++, a > 1 && a--, l[c[h]] = 1 > 6 * a ? s + 6 * (n - s) * a : 1 > 2 * a ? n : 2 > 3 * a ? s + (n - s) * (2 / 3 - a) * 6 : s
      } else l = {
        r: o,
        g: o,
        b: o
      };
      return l.r *= 255, l.g *= 255, l.b *= 255, l.hex = "#" + (16777216 | l.b | l.g << 8 | l.r << 16).toString(16).slice(1), t.is(r, "finite") && (l.opacity = r), l.toString = me, l
    }, t.rgb2hsb = function(e, i, o) {
      if (null == i && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (o = e.b, i = e.g, e = e.r), null == i && t.is(e, I)) {
        var r = t.getRGB(e);
        e = r.r, i = r.g, o = r.b
      }(e > 1 || i > 1 || o > 1) && (e /= 255, i /= 255, o /= 255);
      var n, s, a = L(e, i, o),
        l = B(e, i, o),
        c = a;
      if (l == a) return {
        h: 0,
        s: 0,
        b: a,
        toString: pe
      };
      var h = a - l;
      return s = h / a, n = e == a ? (i - o) / h : i == a ? 2 + (o - e) / h : 4 + (e - i) / h, n /= 6, 0 > n && n++, n > 1 && n--, {
        h: n,
        s: s,
        b: c,
        toString: pe
      }
    }, t.rgb2hsl = function(e, i, o) {
      if (null == i && t.is(e, "object") && "r" in e && "g" in e && "b" in e && (o = e.b, i = e.g, e = e.r), null == i && t.is(e, I)) {
        var r = t.getRGB(e);
        e = r.r, i = r.g, o = r.b
      }(e > 1 || i > 1 || o > 1) && (e /= 255, i /= 255, o /= 255);
      var n, s, a, l = L(e, i, o),
        c = B(e, i, o),
        h = (l + c) / 2;
      if (c == l) a = {
        h: 0,
        s: 0,
        l: h
      };
      else {
        var u = l - c;
        s = .5 > h ? u / (l + c) : u / (2 - l - c), n = e == l ? (i - o) / u : i == l ? 2 + (o - e) / u : 4 + (e - i) / u, n /= 6, 0 > n && n++, n > 1 && n--, a = {
          h: n,
          s: s,
          l: h
        }
      }
      return a.toString = fe, a
    }, t._path2string = function() {
      return this.join(",")[ee](ne, "$1")
    }, t.getRGB = i(function(e) {
      if (!e || (e = S(e)).indexOf("-") + 1) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1
      };
      if ("none" == e) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none"
      };
      !(re[d](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = de(e));
      var i, o, r, n, s, a, l = e.match(q);
      return l ? (l[2] && (r = V(l[2].substring(5), 16), o = V(l[2].substring(3, 5), 16), i = V(l[2].substring(1, 3), 16)), l[3] && (r = V((s = l[3].charAt(3)) + s, 16), o = V((s = l[3].charAt(2)) + s, 16), i = V((s = l[3].charAt(1)) + s, 16)), l[4] && (a = l[4][T](oe), i = U(a[0]), "%" == a[0].slice(-1) && (i *= 2.55), o = U(a[1]), "%" == a[1].slice(-1) && (o *= 2.55), r = U(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (n = U(a[3])), a[3] && "%" == a[3].slice(-1) && (n /= 100)), l[5] ? (a = l[5][T](oe), i = U(a[0]), "%" == a[0].slice(-1) && (i *= 2.55), o = U(a[1]), "%" == a[1].slice(-1) && (o *= 2.55), r = U(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (i /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (n = U(a[3])), a[3] && "%" == a[3].slice(-1) && (n /= 100), t.hsb2rgb(i, o, r, n)) : l[6] ? (a = l[6][T](oe), i = U(a[0]), "%" == a[0].slice(-1) && (i *= 2.55), o = U(a[1]), "%" == a[1].slice(-1) && (o *= 2.55), r = U(a[2]), "%" == a[2].slice(-1) && (r *= 2.55), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (i /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (n = U(a[3])), a[3] && "%" == a[3].slice(-1) && (n /= 100), t.hsl2rgb(i, o, r, n)) : (l = {
        r: i,
        g: o,
        b: r
      }, l.hex = "#" + (16777216 | r | o << 8 | i << 16).toString(16).slice(1), t.is(n, "finite") && (l.opacity = n), l)) : {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1
      }
    }, t), t.getColor = function(t) {
      var e = this.getColor.start = this.getColor.start || {
          h: 0,
          s: 1,
          b: t || .75
        },
        i = this.hsb2rgb(e.h, e.s, e.b);
      return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
        h: 0,
        s: 1,
        b: e.b
      })), i.hex
    }, t.getColor.reset = function() {
      delete this.start
    }, t.parsePathString = i(function(e) {
      if (!e) return null;
      var i = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0
        },
        o = [];
      return t.is(e, H) && t.is(e[0], H) && (o = ve(e)), o[M] || S(e)[ee](se, function(t, e, r) {
        var n = [],
          s = E.call(e);
        for (r[ee](ae, function(t, e) {
            e && n[$](+e)
          }), "m" == s && n[M] > 2 && (o[$]([e][w](n.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"); n[M] >= i[s] && (o[$]([e][w](n.splice(0, i[s]))), i[s]););
      }), o[j] = t._path2string, o
    }), t.findDotsAtSegment = function(t, e, i, o, r, n, s, a, l) {
      var c = 1 - l,
        h = P(c, 3) * t + 3 * P(c, 2) * l * i + 3 * c * l * l * r + P(l, 3) * s,
        u = P(c, 3) * e + 3 * P(c, 2) * l * o + 3 * c * l * l * n + P(l, 3) * a,
        d = t + 2 * l * (i - t) + l * l * (r - 2 * i + t),
        p = e + 2 * l * (o - e) + l * l * (n - 2 * o + e),
        f = i + 2 * l * (r - i) + l * l * (s - 2 * r + i),
        m = o + 2 * l * (n - o) + l * l * (a - 2 * n + o),
        g = (1 - l) * t + l * i,
        v = (1 - l) * e + l * o,
        y = (1 - l) * r + l * s,
        w = (1 - l) * n + l * a,
        x = 90 - 180 * A.atan((d - f) / (p - m)) / R;
      return (d > f || m > p) && (x += 180), {
        x: h,
        y: u,
        m: {
          x: d,
          y: p
        },
        n: {
          x: f,
          y: m
        },
        start: {
          x: g,
          y: v
        },
        end: {
          x: y,
          y: w
        },
        alpha: x
      }
    };
    var ge = i(function(t) {
        if (!t) return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        t = ze(t);
        for (var e, i = 0, o = 0, r = [], n = [], s = 0, a = t[M]; a > s; s++)
          if (e = t[s], "M" == e[0]) i = e[1], o = e[2], r[$](i), n[$](o);
          else {
            var l = Te(i, o, e[1], e[2], e[3], e[4], e[5], e[6]);
            r = r[w](l.min.x, l.max.x), n = n[w](l.min.y, l.max.y), i = e[5], o = e[6]
          }
        var c = B[y](0, r),
          h = B[y](0, n);
        return {
          x: c,
          y: h,
          width: L[y](0, r) - c,
          height: L[y](0, n) - h
        }
      }),
      ve = function(e) {
        var i = [];
        t.is(e, H) && t.is(e && e[0], H) || (e = t.parsePathString(e));
        for (var o = 0, r = e[M]; r > o; o++) {
          i[o] = [];
          for (var n = 0, s = e[o][M]; s > n; n++) i[o][n] = e[o][n]
        }
        return i[j] = t._path2string, i
      },
      ye = i(function(e) {
        t.is(e, H) && t.is(e && e[0], H) || (e = t.parsePathString(e));
        var i = [],
          o = 0,
          r = 0,
          n = 0,
          s = 0,
          a = 0;
        "M" == e[0][0] && (o = e[0][1], r = e[0][2], n = o, s = r, a++, i[$](["M", o, r]));
        for (var l = a, c = e[M]; c > l; l++) {
          var h = i[l] = [],
            u = e[l];
          if (u[0] != E.call(u[0])) switch (h[0] = E.call(u[0]), h[0]) {
            case "a":
              h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5], h[6] = +(u[6] - o).toFixed(3), h[7] = +(u[7] - r).toFixed(3);
              break;
            case "v":
              h[1] = +(u[1] - r).toFixed(3);
              break;
            case "m":
              n = u[1], s = u[2];
            default:
              for (var d = 1, p = u[M]; p > d; d++) h[d] = +(u[d] - (d % 2 ? o : r)).toFixed(3)
          } else {
            h = i[l] = [], "m" == u[0] && (n = u[1] + o, s = u[2] + r);
            for (var f = 0, m = u[M]; m > f; f++) i[l][f] = u[f]
          }
          var g = i[l][M];
          switch (i[l][0]) {
            case "z":
              o = n, r = s;
              break;
            case "h":
              o += +i[l][g - 1];
              break;
            case "v":
              r += +i[l][g - 1];
              break;
            default:
              o += +i[l][g - 2], r += +i[l][g - 1]
          }
        }
        return i[j] = t._path2string, i
      }, 0, ve),
      we = i(function(e) {
        t.is(e, H) && t.is(e && e[0], H) || (e = t.parsePathString(e));
        var i = [],
          o = 0,
          r = 0,
          n = 0,
          s = 0,
          a = 0;
        "M" == e[0][0] && (o = +e[0][1], r = +e[0][2], n = o, s = r, a++, i[0] = ["M", o, r]);
        for (var l = a, c = e[M]; c > l; l++) {
          var h = i[l] = [],
            u = e[l];
          if (u[0] != K.call(u[0])) switch (h[0] = K.call(u[0]), h[0]) {
            case "A":
              h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5], h[6] = +(u[6] + o), h[7] = +(u[7] + r);
              break;
            case "V":
              h[1] = +u[1] + r;
              break;
            case "H":
              h[1] = +u[1] + o;
              break;
            case "M":
              n = +u[1] + o, s = +u[2] + r;
            default:
              for (var d = 1, p = u[M]; p > d; d++) h[d] = +u[d] + (d % 2 ? o : r)
          } else
            for (var f = 0, m = u[M]; m > f; f++) i[l][f] = u[f];
          switch (h[0]) {
            case "Z":
              o = n, r = s;
              break;
            case "H":
              o = h[1];
              break;
            case "V":
              r = h[1];
              break;
            case "M":
              n = i[l][i[l][M] - 2], s = i[l][i[l][M] - 1];
            default:
              o = i[l][i[l][M] - 2], r = i[l][i[l][M] - 1]
          }
        }
        return i[j] = t._path2string, i
      }, null, ve),
      xe = function(t, e, i, o) {
        return [t, e, i, o, i, o]
      },
      be = function(t, e, i, o, r, n) {
        var s = 1 / 3,
          a = 2 / 3;
        return [s * t + a * i, s * e + a * o, s * r + a * i, s * n + a * o, r, n]
      },
      ke = function(t, e, o, r, n, s, a, l, c, h) {
        var u, d = 120 * R / 180,
          p = R / 180 * (+n || 0),
          f = [],
          m = i(function(t, e, i) {
            var o = t * A.cos(i) - e * A.sin(i),
              r = t * A.sin(i) + e * A.cos(i);
            return {
              x: o,
              y: r
            }
          });
        if (h) C = h[0], E = h[1], S = h[2], z = h[3];
        else {
          u = m(t, e, -p), t = u.x, e = u.y, u = m(l, c, -p), l = u.x, c = u.y;
          var g = (A.cos(R / 180 * n), A.sin(R / 180 * n), (t - l) / 2),
            v = (e - c) / 2,
            y = g * g / (o * o) + v * v / (r * r);
          y > 1 && (y = A.sqrt(y), o = y * o, r = y * r);
          var x = o * o,
            b = r * r,
            k = (s == a ? -1 : 1) * A.sqrt(N((x * b - x * v * v - b * g * g) / (x * v * v + b * g * g))),
            S = k * o * v / r + (t + l) / 2,
            z = k * -r * g / o + (e + c) / 2,
            C = A.asin(((e - z) / r).toFixed(9)),
            E = A.asin(((c - z) / r).toFixed(9));
          C = S > t ? R - C : C, E = S > l ? R - E : E, 0 > C && (C = 2 * R + C), 0 > E && (E = 2 * R + E), a && C > E && (C -= 2 * R), !a && E > C && (E -= 2 * R)
        }
        var L = E - C;
        if (N(L) > d) {
          var B = E,
            P = l,
            O = c;
          E = C + d * (a && E > C ? 1 : -1), l = S + o * A.cos(E), c = z + r * A.sin(E), f = ke(l, c, o, r, n, 0, a, P, O, [E, B, S, z])
        }
        L = E - C;
        var I = A.cos(C),
          H = A.sin(C),
          j = A.cos(E),
          D = A.sin(E),
          W = A.tan(L / 4),
          $ = 4 / 3 * o * W,
          F = 4 / 3 * r * W,
          q = [t, e],
          Y = [t + $ * H, e - F * I],
          G = [l + $ * D, c - F * j],
          X = [l, c];
        if (Y[0] = 2 * q[0] - Y[0], Y[1] = 2 * q[1] - Y[1], h) return [Y, G, X][w](f);
        f = [Y, G, X][w](f)[_]()[T](",");
        for (var Q = [], U = 0, V = f[M]; V > U; U++) Q[U] = U % 2 ? m(f[U - 1], f[U], p).y : m(f[U], f[U + 1], p).x;
        return Q
      },
      Se = function(t, e, i, o, r, n, s, a, l) {
        var c = 1 - l;
        return {
          x: P(c, 3) * t + 3 * P(c, 2) * l * i + 3 * c * l * l * r + P(l, 3) * s,
          y: P(c, 3) * e + 3 * P(c, 2) * l * o + 3 * c * l * l * n + P(l, 3) * a
        }
      },
      Te = i(function(t, e, i, o, r, n, s, a) {
        var l, c = r - 2 * i + t - (s - 2 * r + i),
          h = 2 * (i - t) - 2 * (r - i),
          u = t - i,
          d = (-h + A.sqrt(h * h - 4 * c * u)) / 2 / c,
          p = (-h - A.sqrt(h * h - 4 * c * u)) / 2 / c,
          f = [e, a],
          m = [t, s];
        return N(d) > "1e12" && (d = .5), N(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Se(t, e, i, o, r, n, s, a, d), m[$](l.x), f[$](l.y)), p > 0 && 1 > p && (l = Se(t, e, i, o, r, n, s, a, p), m[$](l.x), f[$](l.y)), c = n - 2 * o + e - (a - 2 * n + o), h = 2 * (o - e) - 2 * (n - o), u = e - o, d = (-h + A.sqrt(h * h - 4 * c * u)) / 2 / c, p = (-h - A.sqrt(h * h - 4 * c * u)) / 2 / c, N(d) > "1e12" && (d = .5), N(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Se(t, e, i, o, r, n, s, a, d), m[$](l.x), f[$](l.y)), p > 0 && 1 > p && (l = Se(t, e, i, o, r, n, s, a, p), m[$](l.x), f[$](l.y)), {
          min: {
            x: B[y](0, m),
            y: B[y](0, f)
          },
          max: {
            x: L[y](0, m),
            y: L[y](0, f)
          }
        }
      }),
      ze = i(function(t, e) {
        for (var i = we(t), o = e && we(e), r = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          }, n = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          }, s = (function(t, e) {
            var i, o;
            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
            switch (!(t[0] in {
              T: 1,
              Q: 1
            }) && (e.qx = e.qy = null), t[0]) {
              case "M":
                e.X = t[1], e.Y = t[2];
                break;
              case "A":
                t = ["C"][w](ke[y](0, [e.x, e.y][w](t.slice(1))));
                break;
              case "S":
                i = e.x + (e.x - (e.bx || e.x)), o = e.y + (e.y - (e.by || e.y)), t = ["C", i, o][w](t.slice(1));
                break;
              case "T":
                e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][w](be(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                break;
              case "Q":
                e.qx = t[1], e.qy = t[2], t = ["C"][w](be(e.x, e.y, t[1], t[2], t[3], t[4]));
                break;
              case "L":
                t = ["C"][w](xe(e.x, e.y, t[1], t[2]));
                break;
              case "H":
                t = ["C"][w](xe(e.x, e.y, t[1], e.y));
                break;
              case "V":
                t = ["C"][w](xe(e.x, e.y, e.x, t[1]));
                break;
              case "Z":
                t = ["C"][w](xe(e.x, e.y, e.X, e.Y))
            }
            return t
          }), a = function(t, e) {
            if (t[e][M] > 7) {
              t[e].shift();
              for (var r = t[e]; r[M];) t.splice(e++, 0, ["C"][w](r.splice(0, 6)));
              t.splice(e, 1), h = L(i[M], o && o[M] || 0)
            }
          }, l = function(t, e, r, n, s) {
            t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", n.x, n.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], h = L(i[M], o && o[M] || 0))
          }, c = 0, h = L(i[M], o && o[M] || 0); h > c; c++) {
          i[c] = s(i[c], r), a(i, c), o && (o[c] = s(o[c], n)), o && a(o, c), l(i, o, r, n, c), l(o, i, n, r, c);
          var u = i[c],
            d = o && o[c],
            p = u[M],
            f = o && d[M];
          r.x = u[p - 2], r.y = u[p - 1], r.bx = U(u[p - 4]) || r.x, r.by = U(u[p - 3]) || r.y, n.bx = o && (U(d[f - 4]) || n.x), n.by = o && (U(d[f - 3]) || n.y), n.x = o && d[f - 2], n.y = o && d[f - 1]
        }
        return o ? [i, o] : i
      }, null, ve),
      Ce = i(function(e) {
        for (var i = [], o = 0, r = e[M]; r > o; o++) {
          var n = {},
            s = e[o].match(/^([^:]*):?([\d\.]*)/);
          if (n.color = t.getRGB(s[1]), n.color.error) return null;
          n.color = n.color.hex, s[2] && (n.offset = s[2] + "%"), i[$](n)
        }
        for (o = 1, r = i[M] - 1; r > o; o++)
          if (!i[o].offset) {
            for (var a = U(i[o - 1].offset || 0), l = 0, c = o + 1; r > c; c++)
              if (i[c].offset) {
                l = i[c].offset;
                break
              }
            l || (l = 100, c = r), l = U(l);
            for (var h = (l - a) / (c - o + 1); c > o; o++) a += h, i[o].offset = a + "%"
          }
        return i
      }),
      _e = function(e, i, o, r) {
        var n;
        return t.is(e, I) || t.is(e, "object") ? (n = t.is(e, I) ? p.getElementById(e) : e, n.tagName ? null == i ? {
          container: n,
          width: n.style.pixelWidth || n.offsetWidth,
          height: n.style.pixelHeight || n.offsetHeight
        } : {
          container: n,
          width: i,
          height: o
        } : void 0) : {
          container: 1,
          x: e,
          y: i,
          width: o,
          height: r
        }
      },
      Me = function(t, e) {
        var i = this;
        for (var o in e)
          if (e[d](o) && !(o in t)) switch (typeof e[o]) {
            case "function":
              ! function(e) {
                t[o] = t === i ? e : function() {
                  return e[y](i, arguments)
                }
              }(e[o]);
              break;
            case "object":
              t[o] = t[o] || {}, Me.call(this, t[o], e[o]);
              break;
            default:
              t[o] = e[o]
          }
      },
      Ee = function(t, e) {
        t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
      },
      Ae = function(t, e) {
        e.top !== t && (Ee(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
      },
      Le = function(t, e) {
        e.bottom !== t && (Ee(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
      },
      Be = function(t, e, i) {
        Ee(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
      },
      Ne = function(t, e, i) {
        Ee(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
      },
      Pe = function(t) {
        return function() {
          throw new Error("Raphaël: you are calling to method “" + t + "” of removed object")
        }
      };
    if (t.pathToRelative = ye, t.svg) {
      a.svgns = "http://www.w3.org/2000/svg", a.xlink = "http://www.w3.org/1999/xlink", X = function(t) {
        return +t + .5 * (~~t === t)
      };
      var Re = function(t, e) {
        if (!e) return t = p.createElementNS(a.svgns, t), t.style.webkitTapHighlightColor = "rgba(0,0,0,0)", t;
        for (var i in e) e[d](i) && t[Q](i, S(e[i]))
      };
      t[j] = function() {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
      };
      var Oe = function(t, e) {
          var i = Re("path");
          e.canvas && e.canvas[v](i);
          var o = new $e(i, e);
          return o.type = "path", je(o, {
            fill: "none",
            stroke: "#000",
            path: t
          }), o
        },
        Ie = function(t, i, o) {
          var r = "linear",
            n = .5,
            s = .5,
            a = t.style;
          if (i = S(i)[ee](le, function(t, e, i) {
              if (r = "radial", e && i) {
                n = U(e), s = U(i);
                var o = 2 * (s > .5) - 1;
                P(n - .5, 2) + P(s - .5, 2) > .25 && (s = A.sqrt(.25 - P(n - .5, 2)) * o + .5) && .5 != s && (s = s.toFixed(5) - 1e-5 * o)
              }
              return b
            }), i = i[T](/\s*\-\s*/), "linear" == r) {
            var l = i.shift();
            if (l = -U(l), isNaN(l)) return null;
            var c = [0, 0, A.cos(l * R / 180), A.sin(l * R / 180)],
              h = 1 / (L(N(c[2]), N(c[3])) || 1);
            c[2] *= h, c[3] *= h, c[2] < 0 && (c[0] = -c[2], c[2] = 0), c[3] < 0 && (c[1] = -c[3], c[3] = 0)
          }
          var u = Ce(i);
          if (!u) return null;
          var d = t.getAttribute(D);
          d = d.match(/^url\(#(.*)\)$/), d && o.defs.removeChild(p.getElementById(d[1]));
          var f = Re(r + "Gradient");
          f.id = e(), Re(f, "radial" == r ? {
            fx: n,
            fy: s
          } : {
            x1: c[0],
            y1: c[1],
            x2: c[2],
            y2: c[3]
          }), o.defs[v](f);
          for (var m = 0, g = u[M]; g > m; m++) {
            var y = Re("stop");
            Re(y, {
              offset: u[m].offset ? u[m].offset : m ? "100%" : "0%",
              "stop-color": u[m].color || "#fff"
            }), f[v](y)
          }
          return Re(t, {
            fill: "url(#" + f.id + ")",
            opacity: 1,
            "fill-opacity": 1
          }), a.fill = b, a.opacity = 1, a.fillOpacity = 1, 1
        },
        He = function(e) {
          var i = e.getBBox();
          Re(e.pattern, {
            patternTransform: t.format("translate({0},{1})", i.x, i.y)
          })
        },
        je = function(i, o) {
          var r = {
              "": [0],
              none: [0],
              "-": [3, 1],
              ".": [1, 1],
              "-.": [3, 1, 1, 1],
              "-..": [3, 1, 1, 1, 1, 1],
              ". ": [1, 3],
              "- ": [4, 3],
              "--": [8, 3],
              "- .": [4, 3, 1, 3],
              "--.": [8, 3, 1, 3],
              "--..": [8, 3, 1, 3, 1, 3]
            },
            n = i.node,
            s = i.attrs,
            a = i.rotate(),
            c = function(t, e) {
              if (e = r[E.call(e)]) {
                for (var i = t.attrs["stroke-width"] || "1", s = {
                    round: i,
                    square: i,
                    butt: 0
                  }[t.attrs["stroke-linecap"] || o["stroke-linecap"]] || 0, a = [], l = e[M]; l--;) a[l] = e[l] * i + (l % 2 ? 1 : -1) * s;
                Re(n, {
                  "stroke-dasharray": a[_](",")
                })
              }
            };
          o[d]("rotation") && (a = o.rotation);
          var h = S(a)[T](l);
          h.length - 1 ? (h[1] = +h[1], h[2] = +h[2]) : h = null, U(a) && i.rotate(0, !0);
          for (var u in o)
            if (o[d](u)) {
              if (!J[d](u)) continue;
              var f = o[u];
              switch (s[u] = f, u) {
                case "blur":
                  i.blur(f);
                  break;
                case "rotation":
                  i.rotate(f, !0);
                  break;
                case "href":
                case "title":
                case "target":
                  var m = n.parentNode;
                  if ("a" != E.call(m.tagName)) {
                    var g = Re("a");
                    m.insertBefore(g, n), g[v](n), m = g
                  }
                  "target" == u && "blank" == f ? m.setAttributeNS(i.paper.xlink, "show", "new") : m.setAttributeNS(i.paper.xlink, u, f);
                  break;
                case "cursor":
                  n.style.cursor = f;
                  break;
                case "clip-rect":
                  var y = S(f)[T](l);
                  if (4 == y[M]) {
                    i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                    var w = Re("clipPath"),
                      x = Re("rect");
                    w.id = e(), Re(x, {
                      x: y[0],
                      y: y[1],
                      width: y[2],
                      height: y[3]
                    }), w[v](x), i.paper.defs[v](w), Re(n, {
                      "clip-path": "url(#" + w.id + ")"
                    }), i.clip = x
                  }
                  if (!f) {
                    var z = p.getElementById(n.getAttribute("clip-path")[ee](/(^url\(#|\)$)/g, b));
                    z && z.parentNode.removeChild(z), Re(n, {
                      "clip-path": b
                    }), delete i.clip
                  }
                  break;
                case "path":
                  "path" == i.type && Re(n, {
                    d: f ? s.path = we(f) : "M0,0"
                  });
                  break;
                case "width":
                  if (n[Q](u, f), !s.fx) break;
                  u = "x", f = s.x;
                case "x":
                  s.fx && (f = -s.x - (s.width || 0));
                case "rx":
                  if ("rx" == u && "rect" == i.type) break;
                case "cx":
                  h && ("x" == u || "cx" == u) && (h[1] += f - s[u]), n[Q](u, f), i.pattern && He(i);
                  break;
                case "height":
                  if (n[Q](u, f), !s.fy) break;
                  u = "y", f = s.y;
                case "y":
                  s.fy && (f = -s.y - (s.height || 0));
                case "ry":
                  if ("ry" == u && "rect" == i.type) break;
                case "cy":
                  h && ("y" == u || "cy" == u) && (h[2] += f - s[u]), n[Q](u, f), i.pattern && He(i);
                  break;
                case "r":
                  "rect" == i.type ? Re(n, {
                    rx: f,
                    ry: f
                  }) : n[Q](u, f);
                  break;
                case "src":
                  "image" == i.type && n.setAttributeNS(i.paper.xlink, "href", f);
                  break;
                case "stroke-width":
                  n.style.strokeWidth = f, n[Q](u, f), s["stroke-dasharray"] && c(i, s["stroke-dasharray"]);
                  break;
                case "stroke-dasharray":
                  c(i, f);
                  break;
                case "translation":
                  var C = S(f)[T](l);
                  C[0] = +C[0] || 0, C[1] = +C[1] || 0, h && (h[1] += C[0], h[2] += C[1]), _i.call(i, C[0], C[1]);
                  break;
                case "scale":
                  C = S(f)[T](l), i.scale(+C[0] || 1, +C[1] || +C[0] || 1, isNaN(U(C[2])) ? null : +C[2], isNaN(U(C[3])) ? null : +C[3]);
                  break;
                case D:
                  var A = S(f).match(F);
                  if (A) {
                    w = Re("pattern");
                    var L = Re("image");
                    w.id = e(), Re(w, {
                      x: 0,
                      y: 0,
                      patternUnits: "userSpaceOnUse",
                      height: 1,
                      width: 1
                    }), Re(L, {
                      x: 0,
                      y: 0
                    }), L.setAttributeNS(i.paper.xlink, "href", A[1]), w[v](L);
                    var B = p.createElement("img");
                    B.style.cssText = "position:absolute;left:-9999em;top-9999em", B.onload = function() {
                      Re(w, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                      }), Re(L, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                      }), p.body.removeChild(this), i.paper.safari()
                    }, p.body[v](B), B.src = A[1], i.paper.defs[v](w), n.style.fill = "url(#" + w.id + ")", Re(n, {
                      fill: "url(#" + w.id + ")"
                    }), i.pattern = w, i.pattern && He(i);
                    break
                  }
                  var N = t.getRGB(f);
                  if (N.error) {
                    if (({
                        circle: 1,
                        ellipse: 1
                      }[d](i.type) || "r" != S(f).charAt()) && Ie(n, f, i.paper)) {
                      s.gradient = f, s.fill = "none";
                      break
                    }
                    delete o.gradient, delete s.gradient, !t.is(s.opacity, "undefined") && t.is(o.opacity, "undefined") && Re(n, {
                      opacity: s.opacity
                    }), !t.is(s["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && Re(n, {
                      "fill-opacity": s["fill-opacity"]
                    })
                  }
                  N[d]("opacity") && Re(n, {
                    "fill-opacity": N.opacity > 1 ? N.opacity / 100 : N.opacity
                  });
                case "stroke":
                  N = t.getRGB(f), n[Q](u, N.hex), "stroke" == u && N[d]("opacity") && Re(n, {
                    "stroke-opacity": N.opacity > 1 ? N.opacity / 100 : N.opacity
                  });
                  break;
                case "gradient":
                  (({
                    circle: 1,
                    ellipse: 1
                  })[d](i.type) || "r" != S(f).charAt()) && Ie(n, f, i.paper);
                  break;
                case "opacity":
                  s.gradient && !s[d]("stroke-opacity") && Re(n, {
                    "stroke-opacity": f > 1 ? f / 100 : f
                  });
                case "fill-opacity":
                  if (s.gradient) {
                    var P = p.getElementById(n.getAttribute(D)[ee](/^url\(#|\)$/g, b));
                    if (P) {
                      var R = P.getElementsByTagName("stop");
                      R[R[M] - 1][Q]("stop-opacity", f)
                    }
                    break
                  }
                default:
                  "font-size" == u && (f = V(f, 10) + "px");
                  var O = u[ee](/(\-.)/g, function(t) {
                    return K.call(t.substring(1))
                  });
                  n.style[O] = f, n[Q](u, f)
              }
            }
          We(i, o), h ? i.rotate(h.join(k)) : U(a) && i.rotate(a, !0)
        },
        De = 1.2,
        We = function(e, i) {
          if ("text" == e.type && (i[d]("text") || i[d]("font") || i[d]("font-size") || i[d]("x") || i[d]("y"))) {
            var o = e.attrs,
              r = e.node,
              n = r.firstChild ? V(p.defaultView.getComputedStyle(r.firstChild, b).getPropertyValue("font-size"), 10) : 10;
            if (i[d]("text")) {
              for (o.text = i.text; r.firstChild;) r.removeChild(r.firstChild);
              for (var s = S(i.text)[T]("\n"), a = 0, l = s[M]; l > a; a++)
                if (s[a]) {
                  var c = Re("tspan");
                  a && Re(c, {
                    dy: n * De,
                    x: o.x
                  }), c[v](p.createTextNode(s[a])), r[v](c)
                }
            } else
              for (s = r.getElementsByTagName("tspan"), a = 0, l = s[M]; l > a; a++) a && Re(s[a], {
                dy: n * De,
                x: o.x
              });
            Re(r, {
              y: o.y
            });
            var h = e.getBBox(),
              u = o.y - (h.y + h.height / 2);
            u && t.is(u, "finite") && Re(r, {
              y: o.y + u
            })
          }
        },
        $e = function(e, i) {
          this[0] = e, this.id = t._oid++, this.node = e, e.raphael = this, this.paper = i, this.attrs = this.attrs || {}, this.transformations = [], this._ = {
            tx: 0,
            ty: 0,
            rt: {
              deg: 0,
              cx: 0,
              cy: 0
            },
            sx: 1,
            sy: 1
          }, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null
        },
        Fe = $e[u];
      $e[u].rotate = function(e, i, o) {
        if (this.removed) return this;
        if (null == e) return this._.rt.cx ? [this._.rt.deg, this._.rt.cx, this._.rt.cy][_](k) : this._.rt.deg;
        var r = this.getBBox();
        return e = S(e)[T](l), e[M] - 1 && (i = U(e[1]), o = U(e[2])), e = U(e[0]), null != i && i !== !1 ? this._.rt.deg = e : this._.rt.deg += e, null == o && (i = null), this._.rt.cx = i, this._.rt.cy = o, i = null == i ? r.x + r.width / 2 : i, o = null == o ? r.y + r.height / 2 : o, this._.rt.deg ? (this.transformations[0] = t.format("rotate({0} {1} {2})", this._.rt.deg, i, o), this.clip && Re(this.clip, {
          transform: t.format("rotate({0} {1} {2})", -this._.rt.deg, i, o)
        })) : (this.transformations[0] = b, this.clip && Re(this.clip, {
          transform: b
        })), Re(this.node, {
          transform: this.transformations[_](k)
        }), this
      }, $e[u].hide = function() {
        return !this.removed && (this.node.style.display = "none"), this
      }, $e[u].show = function() {
        return !this.removed && (this.node.style.display = ""), this
      }, $e[u].remove = function() {
        if (!this.removed) {
          Ee(this, this.paper), this.node.parentNode.removeChild(this.node);
          for (var t in this) delete this[t];
          this.removed = !0
        }
      }, $e[u].getBBox = function() {
        if (this.removed) return this;
        if ("path" == this.type) return ge(this.attrs.path);
        if ("none" == this.node.style.display) {
          this.show();
          var t = !0
        }
        var e = {};
        try {
          e = this.node.getBBox()
        } catch (t) {} finally {
          e = e || {}
        }
        if ("text" == this.type) {
          e = {
            x: e.x,
            y: 1 / 0,
            width: 0,
            height: 0
          };
          for (var i = 0, o = this.node.getNumberOfChars(); o > i; i++) {
            var r = this.node.getExtentOfChar(i);
            r.y < e.y && (e.y = r.y), r.y + r.height - e.y > e.height && (e.height = r.y + r.height - e.y), r.x + r.width - e.x > e.width && (e.width = r.x + r.width - e.x)
          }
        }
        return t && this.hide(), e
      }, $e[u].attr = function(e, i) {
        if (this.removed) return this;
        if (null == e) {
          var o = {};
          for (var r in this.attrs) this.attrs[d](r) && (o[r] = this.attrs[r]);
          return this._.rt.deg && (o.rotation = this.rotate()), (1 != this._.sx || 1 != this._.sy) && (o.scale = this.scale()), o.gradient && "none" == o.fill && (o.fill = o.gradient) && delete o.gradient, o
        }
        if (null == i && t.is(e, I)) return "translation" == e ? _i.call(this) : "rotation" == e ? this.rotate() : "scale" == e ? this.scale() : e == D && "none" == this.attrs.fill && this.attrs.gradient ? this.attrs.gradient : this.attrs[e];
        if (null == i && t.is(e, H)) {
          for (var n = {}, s = 0, a = e.length; a > s; s++) n[e[s]] = this.attr(e[s]);
          return n
        }
        if (null != i) {
          var l = {};
          l[e] = i
        } else null != e && t.is(e, "object") && (l = e);
        for (var c in this.paper.customAttributes)
          if (this.paper.customAttributes[d](c) && l[d](c) && t.is(this.paper.customAttributes[c], "function")) {
            var h = this.paper.customAttributes[c].apply(this, [][w](l[c]));
            this.attrs[c] = l[c];
            for (var u in h) h[d](u) && (l[u] = h[u])
          }
        return je(this, l), this
      }, $e[u].toFront = function() {
        if (this.removed) return this;
        this.node.parentNode[v](this.node);
        var t = this.paper;
        return t.top != this && Ae(this, t), this
      }, $e[u].toBack = function() {
        if (this.removed) return this;
        if (this.node.parentNode.firstChild != this.node) {
          this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), Le(this, this.paper); {
            this.paper
          }
        }
        return this
      }, $e[u].insertAfter = function(t) {
        if (this.removed) return this;
        var e = t.node || t[t.length - 1].node;
        return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode[v](this.node), Be(this, t, this.paper), this
      }, $e[u].insertBefore = function(t) {
        if (this.removed) return this;
        var e = t.node || t[0].node;
        return e.parentNode.insertBefore(this.node, e), Ne(this, t, this.paper), this
      }, $e[u].blur = function(t) {
        var i = this;
        if (0 !== +t) {
          var o = Re("filter"),
            r = Re("feGaussianBlur");
          i.attrs.blur = t, o.id = e(), Re(r, {
            stdDeviation: +t || 1.5
          }), o.appendChild(r), i.paper.defs.appendChild(o), i._blur = o, Re(i.node, {
            filter: "url(#" + o.id + ")"
          })
        } else i._blur && (i._blur.parentNode.removeChild(i._blur), delete i._blur, delete i.attrs.blur), i.node.removeAttribute("filter")
      };
      var qe = function(t, e, i, o) {
          var r = Re("circle");
          t.canvas && t.canvas[v](r);
          var n = new $e(r, t);
          return n.attrs = {
            cx: e,
            cy: i,
            r: o,
            fill: "none",
            stroke: "#000"
          }, n.type = "circle", Re(r, n.attrs), n
        },
        Ye = function(t, e, i, o, r, n) {
          var s = Re("rect");
          t.canvas && t.canvas[v](s);
          var a = new $e(s, t);
          return a.attrs = {
            x: e,
            y: i,
            width: o,
            height: r,
            r: n || 0,
            rx: n || 0,
            ry: n || 0,
            fill: "none",
            stroke: "#000"
          }, a.type = "rect", Re(s, a.attrs), a
        },
        Ge = function(t, e, i, o, r) {
          var n = Re("ellipse");
          t.canvas && t.canvas[v](n);
          var s = new $e(n, t);
          return s.attrs = {
            cx: e,
            cy: i,
            rx: o,
            ry: r,
            fill: "none",
            stroke: "#000"
          }, s.type = "ellipse", Re(n, s.attrs), s
        },
        Xe = function(t, e, i, o, r, n) {
          var s = Re("image");
          Re(s, {
            x: i,
            y: o,
            width: r,
            height: n,
            preserveAspectRatio: "none"
          }), s.setAttributeNS(t.xlink, "href", e), t.canvas && t.canvas[v](s);
          var a = new $e(s, t);
          return a.attrs = {
            x: i,
            y: o,
            width: r,
            height: n,
            src: e
          }, a.type = "image", a
        },
        Qe = function(t, e, i, o) {
          var r = Re("text");
          Re(r, {
            x: e,
            y: i,
            "text-anchor": "middle"
          }), t.canvas && t.canvas[v](r);
          var n = new $e(r, t);
          return n.attrs = {
            x: e,
            y: i,
            "text-anchor": "middle",
            text: o,
            font: J.font,
            stroke: "none",
            fill: "#000"
          }, n.type = "text", je(n, n.attrs), n
        },
        Ue = function(t, e) {
          return this.width = t || this.width, this.height = e || this.height, this.canvas[Q]("width", this.width), this.canvas[Q]("height", this.height), this
        },
        Ve = function() {
          var e = _e[y](0, arguments),
            i = e && e.container,
            o = e.x,
            r = e.y,
            n = e.width,
            s = e.height;
          if (!i) throw new Error("SVG container not found.");
          var a = Re("svg");
          return o = o || 0, r = r || 0, n = n || 512, s = s || 342, Re(a, {
            xmlns: "http://www.w3.org/2000/svg",
            version: 1.1,
            width: n,
            height: s
          }), 1 == i ? (a.style.cssText = "position:absolute;left:" + o + "px;top:" + r + "px", p.body[v](a)) : i.firstChild ? i.insertBefore(a, i.firstChild) : i[v](a), i = new g, i.width = n, i.height = s, i.canvas = a, Me.call(i, i, t.fn), i.clear(), i
        };
      a.clear = function() {
        for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
        this.bottom = this.top = null, (this.desc = Re("desc"))[v](p.createTextNode("Created with Raphaël")), t[v](this.desc), t[v](this.defs = Re("defs"))
      }, a.remove = function() {
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var t in this) this[t] = Pe(t)
      }
    }
    if (t.vml) {
      var Ze = {
          M: "m",
          L: "l",
          C: "c",
          Z: "x",
          m: "t",
          l: "r",
          c: "v",
          z: "x"
        },
        Ke = /([clmz]),?([^clmz]*)/gi,
        Je = / progid:\S+Blur\([^\)]+\)/g,
        ti = /-?[^,\s-]+/g,
        ei = 1e3 + k + 1e3,
        oi = 10,
        ri = {
          path: 1,
          rect: 1
        },
        ni = function(t) {
          var e = /[ahqstv]/gi,
            i = we;
          if (S(t).match(e) && (i = ze), e = /[clmz]/g, i == we && !S(t).match(e)) {
            var o = S(t)[ee](Ke, function(t, e, i) {
              var o = [],
                r = "m" == E.call(e),
                n = Ze[e];
              return i[ee](ti, function(t) {
                r && 2 == o[M] && (n += o + Ze["m" == e ? "l" : "L"], o = []), o[$](X(t * oi))
              }), n + o
            });
            return o
          }
          var r, n, s = i(t);
          o = [];
          for (var a = 0, l = s[M]; l > a; a++) {
            r = s[a], n = E.call(s[a][0]), "z" == n && (n = "x");
            for (var c = 1, h = r[M]; h > c; c++) n += X(r[c] * oi) + (c != h - 1 ? "," : b);
            o[$](n)
          }
          return o[_](k)
        };
      t[j] = function() {
        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
      }, Oe = function(t, e) {
        var i = si("group");
        i.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px", i.coordsize = e.coordsize, i.coordorigin = e.coordorigin;
        var o = si("shape"),
          r = o.style;
        r.width = e.width + "px", r.height = e.height + "px", o.coordsize = ei, o.coordorigin = e.coordorigin, i[v](o);
        var n = new $e(o, i, e),
          s = {
            fill: "none",
            stroke: "#000"
          };
        return t && (s.path = t), n.type = "path", n.path = [], n.Path = b, je(n, s), e.canvas[v](i), n
      }, je = function(e, i) {
        e.attrs = e.attrs || {};
        var r, n = e.node,
          s = e.attrs,
          a = n.style,
          c = (i.x != s.x || i.y != s.y || i.width != s.width || i.height != s.height || i.r != s.r) && "rect" == e.type,
          h = e;
        for (var u in i) i[d](u) && (s[u] = i[u]);
        if (c && (s.path = o(s.x, s.y, s.width, s.height, s.r), e.X = s.x, e.Y = s.y, e.W = s.width, e.H = s.height), i.href && (n.href = i.href), i.title && (n.title = i.title), i.target && (n.target = i.target), i.cursor && (a.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || c) && (n.path = ni(s.path)), null != i.rotation && e.rotate(i.rotation, !0), i.translation && (r = S(i.translation)[T](l), _i.call(e, r[0], r[1]), null != e._.rt.cx && (e._.rt.cx += +r[0], e._.rt.cy += +r[1], e.setBox(e.attrs, r[0], r[1]))), i.scale && (r = S(i.scale)[T](l), e.scale(+r[0] || 1, +r[1] || +r[0] || 1, +r[2] || null, +r[3] || null)), "clip-rect" in i) {
          var f = S(i["clip-rect"])[T](l);
          if (4 == f[M]) {
            f[2] = +f[2] + +f[0], f[3] = +f[3] + +f[1];
            var m = n.clipRect || p.createElement("div"),
              g = m.style,
              y = n.parentNode;
            g.clip = t.format("rect({1}px {2}px {3}px {0}px)", f), n.clipRect || (g.position = "absolute", g.top = 0, g.left = 0, g.width = e.paper.width + "px", g.height = e.paper.height + "px", y.parentNode.insertBefore(m, y), m[v](y), n.clipRect = m)
          }
          i["clip-rect"] || n.clipRect && (n.clipRect.style.clip = b)
        }
        if ("image" == e.type && i.src && (n.src = i.src), "image" == e.type && i.opacity && (n.filterOpacity = Z + ".Alpha(opacity=" + 100 * i.opacity + ")", a.filter = (n.filterMatrix || b) + (n.filterOpacity || b)), i.font && (a.font = i.font), i["font-family"] && (a.fontFamily = '"' + i["font-family"][T](",")[0][ee](/^['"]+|['"]+$/g, b) + '"'), i["font-size"] && (a.fontSize = i["font-size"]), i["font-weight"] && (a.fontWeight = i["font-weight"]), i["font-style"] && (a.fontStyle = i["font-style"]), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
          n = e.shape || n;
          var w = n.getElementsByTagName(D) && n.getElementsByTagName(D)[0],
            x = !1;
          if (!w && (x = w = si(D)), "fill-opacity" in i || "opacity" in i) {
            var k = ((+s["fill-opacity"] + 1 || 2) - 1) * ((+s.opacity + 1 || 2) - 1) * ((+t.getRGB(i.fill).o + 1 || 2) - 1);
            k = B(L(k, 0), 1), w.opacity = k
          }
          if (i.fill && (w.on = !0), (null == w.on || "none" == i.fill) && (w.on = !1), w.on && i.fill) {
            var z = i.fill.match(F);
            z ? (w.src = z[1], w.type = "tile") : (w.color = t.getRGB(i.fill).hex, w.src = b, w.type = "solid", t.getRGB(i.fill).error && (h.type in {
              circle: 1,
              ellipse: 1
            } || "r" != S(i.fill).charAt()) && Ie(h, i.fill) && (s.fill = "none", s.gradient = i.fill))
          }
          x && n[v](w);
          var C = n.getElementsByTagName("stroke") && n.getElementsByTagName("stroke")[0],
            _ = !1;
          !C && (_ = C = si("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (C.on = !0), ("none" == i.stroke || null == C.on || 0 == i.stroke || 0 == i["stroke-width"]) && (C.on = !1);
          var E = t.getRGB(i.stroke);
          C.on && i.stroke && (C.color = E.hex), k = ((+s["stroke-opacity"] + 1 || 2) - 1) * ((+s.opacity + 1 || 2) - 1) * ((+E.o + 1 || 2) - 1);
          var A = .75 * (U(i["stroke-width"]) || 1);
          if (k = B(L(k, 0), 1), null == i["stroke-width"] && (A = s["stroke-width"]), i["stroke-width"] && (C.weight = A), A && 1 > A && (k *= A) && (C.weight = 1), C.opacity = k, i["stroke-linejoin"] && (C.joinstyle = i["stroke-linejoin"] || "miter"), C.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (C.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
            var N = {
              "-": "shortdash",
              ".": "shortdot",
              "-.": "shortdashdot",
              "-..": "shortdashdotdot",
              ". ": "dot",
              "- ": "dash",
              "--": "longdash",
              "- .": "dashdot",
              "--.": "longdashdot",
              "--..": "longdashdotdot"
            };
            C.dashstyle = N[d](i["stroke-dasharray"]) ? N[i["stroke-dasharray"]] : b
          }
          _ && n[v](C)
        }
        if ("text" == h.type) switch (a = h.paper.span.style, s.font && (a.font = s.font), s["font-family"] && (a.fontFamily = s["font-family"]), s["font-size"] && (a.fontSize = s["font-size"]), s["font-weight"] && (a.fontWeight = s["font-weight"]), s["font-style"] && (a.fontStyle = s["font-style"]), h.node.string && (h.paper.span.innerHTML = S(h.node.string)[ee](/</g, "&#60;")[ee](/&/g, "&#38;")[ee](/\n/g, "<br>")), h.W = s.w = h.paper.span.offsetWidth, h.H = s.h = h.paper.span.offsetHeight, h.X = s.x, h.Y = s.y + X(h.H / 2), s["text-anchor"]) {
          case "start":
            h.node.style["v-text-align"] = "left", h.bbx = X(h.W / 2);
            break;
          case "end":
            h.node.style["v-text-align"] = "right", h.bbx = -X(h.W / 2);
            break;
          default:
            h.node.style["v-text-align"] = "center"
        }
      }, Ie = function(t, e) {
        t.attrs = t.attrs || {};
        var i, o = (t.attrs, "linear"),
          r = ".5 .5";
        if (t.attrs.gradient = e, e = S(e)[ee](le, function(t, e, i) {
            return o = "radial", e && i && (e = U(e), i = U(i), P(e - .5, 2) + P(i - .5, 2) > .25 && (i = A.sqrt(.25 - P(e - .5, 2)) * (2 * (i > .5) - 1) + .5), r = e + k + i), b
          }), e = e[T](/\s*\-\s*/), "linear" == o) {
          var n = e.shift();
          if (n = -U(n), isNaN(n)) return null
        }
        var s = Ce(e);
        if (!s) return null;
        if (t = t.shape || t.node, i = t.getElementsByTagName(D)[0] || si(D), !i.parentNode && t.appendChild(i), s[M]) {
          i.on = !0, i.method = "none", i.color = s[0].color, i.color2 = s[s[M] - 1].color;
          for (var a = [], l = 0, c = s[M]; c > l; l++) s[l].offset && a[$](s[l].offset + k + s[l].color);
          i.colors && (i.colors.value = a[M] ? a[_]() : "0% " + i.color), "radial" == o ? (i.type = "gradientradial", i.focus = "100%", i.focussize = r, i.focusposition = r) : (i.type = "gradient", i.angle = (270 - n) % 360)
        }
        return 1
      }, $e = function(e, i, o) {
        this[0] = e, this.id = t._oid++, this.node = e, e.raphael = this, this.X = 0, this.Y = 0, this.attrs = {}, this.Group = i, this.paper = o, this._ = {
          tx: 0,
          ty: 0,
          rt: {
            deg: 0
          },
          sx: 1,
          sy: 1
        }, !o.bottom && (o.bottom = this), this.prev = o.top, o.top && (o.top.next = this), o.top = this, this.next = null
      }, Fe = $e[u], Fe.rotate = function(t, e, i) {
        return this.removed ? this : null == t ? this._.rt.cx ? [this._.rt.deg, this._.rt.cx, this._.rt.cy][_](k) : this._.rt.deg : (t = S(t)[T](l), t[M] - 1 && (e = U(t[1]), i = U(t[2])), t = U(t[0]), null != e ? this._.rt.deg = t : this._.rt.deg += t, null == i && (e = null), this._.rt.cx = e, this._.rt.cy = i, this.setBox(this.attrs, e, i), this.Group.style.rotation = this._.rt.deg, this)
      }, Fe.setBox = function(t, e, i) {
        if (this.removed) return this;
        var o = this.Group.style,
          r = this.shape && this.shape.style || this.node.style;
        t = t || {};
        for (var n in t) t[d](n) && (this.attrs[n] = t[n]);
        e = e || this._.rt.cx, i = i || this._.rt.cy;
        var s, a, l, c, h = this.attrs;
        switch (this.type) {
          case "circle":
            s = h.cx - h.r, a = h.cy - h.r, l = c = 2 * h.r;
            break;
          case "ellipse":
            s = h.cx - h.rx, a = h.cy - h.ry, l = 2 * h.rx, c = 2 * h.ry;
            break;
          case "image":
            s = +h.x, a = +h.y, l = h.width || 0, c = h.height || 0;
            break;
          case "text":
            this.textpath.v = ["m", X(h.x), ", ", X(h.y - 2), "l", X(h.x) + 1, ", ", X(h.y - 2)][_](b), s = h.x - X(this.W / 2), a = h.y - this.H / 2, l = this.W, c = this.H;
            break;
          case "rect":
          case "path":
            if (this.attrs.path) {
              var u = ge(this.attrs.path);
              s = u.x, a = u.y, l = u.width, c = u.height
            } else s = 0, a = 0, l = this.paper.width, c = this.paper.height;
            break;
          default:
            s = 0, a = 0, l = this.paper.width, c = this.paper.height
        }
        e = null == e ? s + l / 2 : e, i = null == i ? a + c / 2 : i;
        var p, f = e - this.paper.width / 2,
          m = i - this.paper.height / 2;
        o.left != (p = f + "px") && (o.left = p), o.top != (p = m + "px") && (o.top = p), this.X = ri[d](this.type) ? -f : s, this.Y = ri[d](this.type) ? -m : a, this.W = l, this.H = c, ri[d](this.type) ? (r.left != (p = -f * oi + "px") && (r.left = p), r.top != (p = -m * oi + "px") && (r.top = p)) : "text" == this.type ? (r.left != (p = -f + "px") && (r.left = p), r.top != (p = -m + "px") && (r.top = p)) : (o.width != (p = this.paper.width + "px") && (o.width = p), o.height != (p = this.paper.height + "px") && (o.height = p), r.left != (p = s - f + "px") && (r.left = p), r.top != (p = a - m + "px") && (r.top = p), r.width != (p = l + "px") && (r.width = p), r.height != (p = c + "px") && (r.height = p))
      }, Fe.hide = function() {
        return !this.removed && (this.Group.style.display = "none"), this
      }, Fe.show = function() {
        return !this.removed && (this.Group.style.display = "block"), this
      }, Fe.getBBox = function() {
        return this.removed ? this : ri[d](this.type) ? ge(this.attrs.path) : {
          x: this.X + (this.bbx || 0),
          y: this.Y,
          width: this.W,
          height: this.H
        }
      }, Fe.remove = function() {
        if (!this.removed) {
          Ee(this, this.paper), this.node.parentNode.removeChild(this.node), this.Group.parentNode.removeChild(this.Group), this.shape && this.shape.parentNode.removeChild(this.shape);
          for (var t in this) delete this[t];
          this.removed = !0
        }
      }, Fe.attr = function(e, i) {
        if (this.removed) return this;
        if (null == e) {
          var o = {};
          for (var r in this.attrs) this.attrs[d](r) && (o[r] = this.attrs[r]);
          return this._.rt.deg && (o.rotation = this.rotate()), (1 != this._.sx || 1 != this._.sy) && (o.scale = this.scale()), o.gradient && "none" == o.fill && (o.fill = o.gradient) && delete o.gradient, o
        }
        if (null == i && t.is(e, "string")) return "translation" == e ? _i.call(this) : "rotation" == e ? this.rotate() : "scale" == e ? this.scale() : e == D && "none" == this.attrs.fill && this.attrs.gradient ? this.attrs.gradient : this.attrs[e];
        if (this.attrs && null == i && t.is(e, H)) {
          var n, s = {};
          for (r = 0, n = e[M]; n > r; r++) s[e[r]] = this.attr(e[r]);
          return s
        }
        var a;
        if (null != i && (a = {}, a[e] = i), null == i && t.is(e, "object") && (a = e), a) {
          for (var l in this.paper.customAttributes)
            if (this.paper.customAttributes[d](l) && a[d](l) && t.is(this.paper.customAttributes[l], "function")) {
              var c = this.paper.customAttributes[l].apply(this, [][w](a[l]));
              this.attrs[l] = a[l];
              for (var h in c) c[d](h) && (a[h] = c[h])
            }
          a.text && "text" == this.type && (this.node.string = a.text), je(this, a), a.gradient && ({
            circle: 1,
            ellipse: 1
          }[d](this.type) || "r" != S(a.gradient).charAt()) && Ie(this, a.gradient), (!ri[d](this.type) || this._.rt.deg) && this.setBox(this.attrs)
        }
        return this
      }, Fe.toFront = function() {
        return !this.removed && this.Group.parentNode[v](this.Group), this.paper.top != this && Ae(this, this.paper), this
      }, Fe.toBack = function() {
        return this.removed ? this : (this.Group.parentNode.firstChild != this.Group && (this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild), Le(this, this.paper)), this)
      }, Fe.insertAfter = function(t) {
        return this.removed ? this : (t.constructor == Mi && (t = t[t.length - 1]), t.Group.nextSibling ? t.Group.parentNode.insertBefore(this.Group, t.Group.nextSibling) : t.Group.parentNode[v](this.Group), Be(this, t, this.paper), this)
      }, Fe.insertBefore = function(t) {
        return this.removed ? this : (t.constructor == Mi && (t = t[0]), t.Group.parentNode.insertBefore(this.Group, t.Group), Ne(this, t, this.paper), this)
      }, Fe.blur = function(e) {
        var i = this.node.runtimeStyle,
          o = i.filter;
        o = o.replace(Je, b), 0 !== +e ? (this.attrs.blur = e, i.filter = o + k + Z + ".Blur(pixelradius=" + (+e || 1.5) + ")", i.margin = t.format("-{0}px 0 0 -{0}px", X(+e || 1.5))) : (i.filter = o, i.margin = 0, delete this.attrs.blur)
      }, qe = function(t, e, i, o) {
        {
          var r = si("group"),
            n = si("oval");
          n.style
        }
        r.style.cssText = "position:absolute;left:0;top:0;width:" + t.width + "px;height:" + t.height + "px", r.coordsize = ei, r.coordorigin = t.coordorigin, r[v](n);
        var s = new $e(n, r, t);
        return s.type = "circle", je(s, {
          stroke: "#000",
          fill: "none"
        }), s.attrs.cx = e, s.attrs.cy = i, s.attrs.r = o, s.setBox({
          x: e - o,
          y: i - o,
          width: 2 * o,
          height: 2 * o
        }), t.canvas[v](r), s
      }, Ye = function(t, e, i, r, n, s) {
        var a = o(e, i, r, n, s),
          l = t.path(a),
          c = l.attrs;
        return l.X = c.x = e, l.Y = c.y = i, l.W = c.width = r, l.H = c.height = n, c.r = s, c.path = a, l.type = "rect", l
      }, Ge = function(t, e, i, o, r) {
        {
          var n = si("group"),
            s = si("oval");
          s.style
        }
        n.style.cssText = "position:absolute;left:0;top:0;width:" + t.width + "px;height:" + t.height + "px", n.coordsize = ei, n.coordorigin = t.coordorigin, n[v](s);
        var a = new $e(s, n, t);
        return a.type = "ellipse", je(a, {
          stroke: "#000"
        }), a.attrs.cx = e, a.attrs.cy = i, a.attrs.rx = o, a.attrs.ry = r, a.setBox({
          x: e - o,
          y: i - r,
          width: 2 * o,
          height: 2 * r
        }), t.canvas[v](n), a
      }, Xe = function(t, e, i, o, r, n) {
        var s = si("group"),
          a = si("image");
        s.style.cssText = "position:absolute;left:0;top:0;width:" + t.width + "px;height:" + t.height + "px", s.coordsize = ei, s.coordorigin = t.coordorigin, a.src = e, s[v](a);
        var l = new $e(a, s, t);
        return l.type = "image", l.attrs.src = e, l.attrs.x = i, l.attrs.y = o, l.attrs.w = r, l.attrs.h = n, l.setBox({
          x: i,
          y: o,
          width: r,
          height: n
        }), t.canvas[v](s), l
      }, Qe = function(e, i, o, r) {
        var n = si("group"),
          s = si("shape"),
          a = s.style,
          l = si("path"),
          c = (l.style, si("textpath"));
        n.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px", n.coordsize = ei, n.coordorigin = e.coordorigin, l.v = t.format("m{0},{1}l{2},{1}", X(10 * i), X(10 * o), X(10 * i) + 1), l.textpathok = !0, a.width = e.width, a.height = e.height, c.string = S(r), c.on = !0, s[v](c), s[v](l), n[v](s);
        var h = new $e(c, n, e);
        return h.shape = s, h.textpath = l, h.type = "text", h.attrs.text = r, h.attrs.x = i, h.attrs.y = o, h.attrs.w = 1, h.attrs.h = 1, je(h, {
          font: J.font,
          stroke: "none",
          fill: "#000"
        }), h.setBox(), e.canvas[v](n), h
      }, Ue = function(t, e) {
        var i = this.canvas.style;
        return t == +t && (t += "px"), e == +e && (e += "px"), i.width = t, i.height = e, i.clip = "rect(0 " + t + " " + e + " 0)", this
      };
      var si;
      p.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
      try {
        !p.namespaces.rvml && p.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), si = function(t) {
          return p.createElement("<rvml:" + t + ' class="rvml">')
        }
      } catch (t) {
        si = function(t) {
          return p.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
        }
      }
      Ve = function() {
        var e = _e[y](0, arguments),
          i = e.container,
          o = e.height,
          r = e.width,
          n = e.x,
          s = e.y;
        if (!i) throw new Error("VML container not found.");
        var a = new g,
          l = a.canvas = p.createElement("div"),
          c = l.style;
        return n = n || 0, s = s || 0, r = r || 512, o = o || 342, r == +r && (r += "px"), o == +o && (o += "px"), a.width = 1e3, a.height = 1e3, a.coordsize = 1e3 * oi + k + 1e3 * oi, a.coordorigin = "0 0", a.span = p.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", l[v](a.span), c.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, o), 1 == i ? (p.body[v](l), c.left = n + "px", c.top = s + "px", c.position = "absolute") : i.firstChild ? i.insertBefore(l, i.firstChild) : i[v](l), Me.call(a, a, t.fn), a
      }, a.clear = function() {
        this.canvas.innerHTML = b, this.span = p.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas[v](this.span), this.bottom = this.top = null
      }, a.remove = function() {
        this.canvas.parentNode.removeChild(this.canvas);
        for (var t in this) this[t] = Pe(t);
        return !0
      }
    }
    var ai = navigator.userAgent.match(/Version\\x2f(.*?)\s/);
    a.safari = "Apple Computer, Inc." == navigator.vendor && (ai && ai[1] < 4 || "iP" == navigator.platform.slice(0, 2)) ? function() {
      var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
        stroke: "none"
      });
      f.setTimeout(function() {
        t.remove()
      })
    } : function() {};
    for (var li = function() {
        this.returnValue = !1
      }, ci = function() {
        return this.originalEvent.preventDefault()
      }, hi = function() {
        this.cancelBubble = !0
      }, ui = function() {
        return this.originalEvent.stopPropagation()
      }, di = function() {
        return p.addEventListener ? function(t, e, i, o) {
          var r = x && C[e] ? C[e] : e,
            n = function(r) {
              if (x && C[d](e))
                for (var n = 0, s = r.targetTouches && r.targetTouches.length; s > n; n++)
                  if (r.targetTouches[n].target == t) {
                    var a = r;
                    r = r.targetTouches[n], r.originalEvent = a, r.preventDefault = ci, r.stopPropagation = ui;
                    break
                  }
              return i.call(o, r)
            };
          return t.addEventListener(r, n, !1),
            function() {
              return t.removeEventListener(r, n, !1), !0
            }
        } : p.attachEvent ? function(t, e, i, o) {
          var r = function(t) {
            return t = t || f.event, t.preventDefault = t.preventDefault || li, t.stopPropagation = t.stopPropagation || hi, i.call(o, t)
          };
          t.attachEvent("on" + e, r);
          var n = function() {
            return t.detachEvent("on" + e, r), !0
          };
          return n
        } : void 0
      }(), pi = [], fi = function(t) {
        for (var e, i = t.clientX, o = t.clientY, r = p.documentElement.scrollTop || p.body.scrollTop, n = p.documentElement.scrollLeft || p.body.scrollLeft, s = pi.length; s--;) {
          if (e = pi[s], x) {
            for (var a, l = t.touches.length; l--;)
              if (a = t.touches[l], a.identifier == e.el._drag.id) {
                i = a.clientX, o = a.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                break
              }
          } else t.preventDefault();
          i += n, o += r, e.move && e.move.call(e.move_scope || e.el, i - e.el._drag.x, o - e.el._drag.y, i, o, t)
        }
      }, mi = function(e) {
        t.unmousemove(fi).unmouseup(mi);
        for (var i, o = pi.length; o--;) i = pi[o], i.el._drag = {}, i.end && i.end.call(i.end_scope || i.start_scope || i.move_scope || i.el, e);
        pi = []
      }, gi = z[M]; gi--;)(function(e) {
      t[e] = $e[u][e] = function(i, o) {
        return t.is(i, "function") && (this.events = this.events || [], this.events.push({
          name: e,
          f: i,
          unbind: di(this.shape || this.node || p, e, i, o || this)
        })), this
      }, t["un" + e] = $e[u]["un" + e] = function(t) {
        for (var i = this.events, o = i[M]; o--;)
          if (i[o].name == e && i[o].f == t) return i[o].unbind(), i.splice(o, 1), !i.length && delete this.events, this;
        return this
      }
    })(z[gi]);
    Fe.hover = function(t, e, i, o) {
      return this.mouseover(t, i).mouseout(e, o || i)
    }, Fe.unhover = function(t, e) {
      return this.unmouseover(t).unmouseout(e)
    }, Fe.drag = function(e, i, o, r, n, s) {
      return this._drag = {}, this.mousedown(function(a) {
        (a.originalEvent || a).preventDefault();
        var l = p.documentElement.scrollTop || p.body.scrollTop,
          c = p.documentElement.scrollLeft || p.body.scrollLeft;
        this._drag.x = a.clientX + c, this._drag.y = a.clientY + l, this._drag.id = a.identifier, i && i.call(n || r || this, a.clientX + c, a.clientY + l, a), !pi.length && t.mousemove(fi).mouseup(mi), pi.push({
          el: this,
          move: e,
          end: o,
          move_scope: r,
          start_scope: n,
          end_scope: s
        })
      }), this
    }, Fe.undrag = function(e, i, o) {
      for (var r = pi.length; r--;) pi[r].el == this && pi[r].move == e && pi[r].end == o && pi.splice(r++, 1);
      !pi.length && t.unmousemove(fi).unmouseup(mi)
    }, a.circle = function(t, e, i) {
      return qe(this, t || 0, e || 0, i || 0)
    }, a.rect = function(t, e, i, o, r) {
      return Ye(this, t || 0, e || 0, i || 0, o || 0, r || 0)
    }, a.ellipse = function(t, e, i, o) {
      return Ge(this, t || 0, e || 0, i || 0, o || 0)
    }, a.path = function(e) {
      return e && !t.is(e, I) && !t.is(e[0], H) && (e += b), Oe(t.format[y](t, arguments), this)
    }, a.image = function(t, e, i, o, r) {
      return Xe(this, t || "about:blank", e || 0, i || 0, o || 0, r || 0)
    }, a.text = function(t, e, i) {
      return Qe(this, t || 0, e || 0, S(i))
    }, a.set = function(t) {
      return arguments[M] > 1 && (t = Array[u].splice.call(arguments, 0, arguments[M])), new Mi(t)
    }, a.setSize = Ue, a.top = a.bottom = null, a.raphael = t, Fe.resetScale = function() {
      return this.removed ? this : (this._.sx = 1, this._.sy = 1, void(this.attrs.scale = "1 1"))
    }, Fe.scale = function(t, e, i, o) {
      if (this.removed) return this;
      if (null == t && null == e) return {
        x: this._.sx,
        y: this._.sy,
        toString: r
      };
      e = e || t, !+e && (e = t);
      var n, s, a = this.attrs;
      if (0 != t) {
        var l = this.getBBox(),
          c = l.x + l.width / 2,
          h = l.y + l.height / 2,
          u = N(t / this._.sx),
          d = N(e / this._.sy);
        i = +i || 0 == i ? i : c, o = +o || 0 == o ? o : h;
        var p = this._.sx > 0,
          f = this._.sy > 0,
          m = ~~(t / N(t)),
          g = ~~(e / N(e)),
          v = u * m,
          y = d * g,
          x = this.node.style,
          S = i + N(c - i) * v * (c > i == p ? 1 : -1),
          T = o + N(h - o) * y * (h > o == f ? 1 : -1),
          z = t * m > e * g ? d : u;
        switch (this.type) {
          case "rect":
          case "image":
            var C = a.width * u,
              E = a.height * d;
            this.attr({
              height: E,
              r: a.r * z,
              width: C,
              x: S - C / 2,
              y: T - E / 2
            });
            break;
          case "circle":
          case "ellipse":
            this.attr({
              rx: a.rx * u,
              ry: a.ry * d,
              r: a.r * z,
              cx: S,
              cy: T
            });
            break;
          case "text":
            this.attr({
              x: S,
              y: T
            });
            break;
          case "path":
            for (var A = ye(a.path), L = !0, B = p ? v : u, P = f ? y : d, R = 0, O = A[M]; O > R; R++) {
              var I = A[R],
                H = K.call(I[0]);
              if ("M" != H || !L)
                if (L = !1, "A" == H) I[A[R][M] - 2] *= B, I[A[R][M] - 1] *= P, I[1] *= u, I[2] *= d, I[5] = +(m + g ? !!+I[5] : !+I[5]);
                else if ("H" == H)
                for (var j = 1, D = I[M]; D > j; j++) I[j] *= B;
              else if ("V" == H)
                for (j = 1, D = I[M]; D > j; j++) I[j] *= P;
              else
                for (j = 1, D = I[M]; D > j; j++) I[j] *= j % 2 ? B : P
            }
            var W = ge(A);
            n = S - W.x - W.width / 2, s = T - W.y - W.height / 2, A[0][1] += n, A[0][2] += s, this.attr({
              path: A
            })
        }
        this.type in {
          text: 1,
          image: 1
        } && (1 != m || 1 != g) ? this.transformations ? (this.transformations[2] = "scale(" [w](m, ",", g, ")"), this.node[Q]("transform", this.transformations[_](k)), n = -1 == m ? -a.x - (C || 0) : a.x, s = -1 == g ? -a.y - (E || 0) : a.y, this.attr({
          x: n,
          y: s
        }), a.fx = m - 1, a.fy = g - 1) : (this.node.filterMatrix = Z + ".Matrix(M11=" [w](m, ", M12=0, M21=0, M22=", g, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')"), x.filter = (this.node.filterMatrix || b) + (this.node.filterOpacity || b)) : this.transformations ? (this.transformations[2] = b, this.node[Q]("transform", this.transformations[_](k)), a.fx = 0, a.fy = 0) : (this.node.filterMatrix = b, x.filter = (this.node.filterMatrix || b) + (this.node.filterOpacity || b)), a.scale = [t, e, i, o][_](k), this._.sx = t, this._.sy = e
      }
      return this
    }, Fe.clone = function() {
      if (this.removed) return null;
      var t = this.attr();
      return delete t.scale, delete t.translation, this.paper[this.type]().attr(t)
    };
    var vi = {},
      yi = function(e, i, o, r, n, s, a, l, c) {
        var h, u, d = 0,
          p = 100,
          f = [e, i, o, r, n, s, a, l].join(),
          m = vi[f];
        if (!m && (vi[f] = m = {
            data: []
          }), m.timer && clearTimeout(m.timer), m.timer = setTimeout(function() {
            delete vi[f]
          }, 2e3), null != c) {
          var g = yi(e, i, o, r, n, s, a, l);
          p = 10 * ~~g
        }
        for (var v = 0; p + 1 > v; v++) {
          if (m.data[c] > v ? u = m.data[v * p] : (u = t.findDotsAtSegment(e, i, o, r, n, s, a, l, v / p), m.data[v] = u), v && (d += P(P(h.x - u.x, 2) + P(h.y - u.y, 2), .5)), null != c && d >= c) return u;
          h = u
        }
        return null == c ? d : void 0
      },
      wi = function(e, i) {
        return function(o, r, n) {
          o = ze(o);
          for (var s, a, l, c, h, u = "", d = {}, p = 0, f = 0, m = o.length; m > f; f++) {
            if (l = o[f], "M" == l[0]) s = +l[1], a = +l[2];
            else {
              if (c = yi(s, a, l[1], l[2], l[3], l[4], l[5], l[6]), p + c > r) {
                if (i && !d.start) {
                  if (h = yi(s, a, l[1], l[2], l[3], l[4], l[5], l[6], r - p), u += ["C", h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y], n) return u;
                  d.start = u, u = ["M", h.x, h.y + "C", h.n.x, h.n.y, h.end.x, h.end.y, l[5], l[6]][_](), p += c, s = +l[5], a = +l[6];
                  continue
                }
                if (!e && !i) return h = yi(s, a, l[1], l[2], l[3], l[4], l[5], l[6], r - p), {
                  x: h.x,
                  y: h.y,
                  alpha: h.alpha
                }
              }
              p += c, s = +l[5], a = +l[6]
            }
            u += l
          }
          return d.end = u, h = e ? p : i ? d : t.findDotsAtSegment(s, a, l[1], l[2], l[3], l[4], l[5], l[6], 1), h.alpha && (h = {
            x: h.x,
            y: h.y,
            alpha: h.alpha
          }), h
        }
      },
      xi = wi(1),
      bi = wi(),
      ki = wi(0, 1);
    Fe.getTotalLength = function() {
      return "path" == this.type ? this.node.getTotalLength ? this.node.getTotalLength() : xi(this.attrs.path) : void 0
    }, Fe.getPointAtLength = function(t) {
      return "path" == this.type ? bi(this.attrs.path, t) : void 0
    }, Fe.getSubpath = function(t, e) {
      if ("path" == this.type) {
        if (N(this.getTotalLength() - e) < "1e-6") return ki(this.attrs.path, t).end;
        var i = ki(this.attrs.path, e, 1);
        return t ? ki(i, t).end : i
      }
    }, t.easing_formulas = {
      linear: function(t) {
        return t
      },
      "<": function(t) {
        return P(t, 3)
      },
      ">": function(t) {
        return P(t - 1, 3) + 1
      },
      "<>": function(t) {
        return t = 2 * t, 1 > t ? P(t, 3) / 2 : (t -= 2, (P(t, 3) + 2) / 2)
      },
      backIn: function(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      },
      backOut: function(t) {
        t -= 1;
        var e = 1.70158;
        return t * t * ((e + 1) * t + e) + 1
      },
      elastic: function(t) {
        if (0 == t || 1 == t) return t;
        var e = .3,
          i = e / 4;
        return P(2, -10 * t) * A.sin(2 * (t - i) * R / e) + 1
      },
      bounce: function(t) {
        var e, i = 7.5625,
          o = 2.75;
        return 1 / o > t ? e = i * t * t : 2 / o > t ? (t -= 1.5 / o, e = i * t * t + .75) : 2.5 / o > t ? (t -= 2.25 / o, e = i * t * t + .9375) : (t -= 2.625 / o, e = i * t * t + .984375), e
      }
    };
    var Si = [],
      Ti = function() {
        for (var e = +new Date, i = 0; i < Si[M]; i++) {
          var o = Si[i];
          if (!o.stop && !o.el.removed) {
            var r, n = e - o.start,
              s = o.ms,
              a = o.easing,
              l = o.from,
              c = o.diff,
              h = o.to,
              u = o.t,
              p = o.el,
              f = {};
            if (s > n) {
              var m = a(n / s);
              for (var g in l)
                if (l[d](g)) {
                  switch (te[g]) {
                    case "along":
                      r = m * s * c[g], h.back && (r = h.len - r);
                      var v = bi(h[g], r);
                      p.translate(c.sx - c.x || 0, c.sy - c.y || 0), c.x = v.x, c.y = v.y, p.translate(v.x - c.sx, v.y - c.sy), h.rot && p.rotate(c.r + v.alpha, v.x, v.y);
                      break;
                    case O:
                      r = +l[g] + m * s * c[g];
                      break;
                    case "colour":
                      r = "rgb(" + [Ci(X(l[g].r + m * s * c[g].r)), Ci(X(l[g].g + m * s * c[g].g)), Ci(X(l[g].b + m * s * c[g].b))][_](",") + ")";
                      break;
                    case "path":
                      r = [];
                      for (var y = 0, w = l[g][M]; w > y; y++) {
                        r[y] = [l[g][y][0]];
                        for (var x = 1, S = l[g][y][M]; S > x; x++) r[y][x] = +l[g][y][x] + m * s * c[g][y][x];
                        r[y] = r[y][_](k)
                      }
                      r = r[_](k);
                      break;
                    case "csv":
                      switch (g) {
                        case "translation":
                          var T = m * s * c[g][0] - u.x,
                            z = m * s * c[g][1] - u.y;
                          u.x += T, u.y += z, r = T + k + z;
                          break;
                        case "rotation":
                          r = +l[g][0] + m * s * c[g][0], l[g][1] && (r += "," + l[g][1] + "," + l[g][2]);
                          break;
                        case "scale":
                          r = [+l[g][0] + m * s * c[g][0], +l[g][1] + m * s * c[g][1], 2 in h[g] ? h[g][2] : b, 3 in h[g] ? h[g][3] : b][_](k);
                          break;
                        case "clip-rect":
                          for (r = [], y = 4; y--;) r[y] = +l[g][y] + m * s * c[g][y]
                      }
                      break;
                    default:
                      var C = [].concat(l[g]);
                      for (r = [], y = p.paper.customAttributes[g].length; y--;) r[y] = +C[y] + m * s * c[g][y]
                  }
                  f[g] = r
                }
              p.attr(f), p._run && p._run.call(p)
            } else h.along && (v = bi(h.along, h.len * !h.back), p.translate(c.sx - (c.x || 0) + v.x - c.sx, c.sy - (c.y || 0) + v.y - c.sy), h.rot && p.rotate(c.r + v.alpha, v.x, v.y)), (u.x || u.y) && p.translate(-u.x, -u.y), h.scale && (h.scale += b), p.attr(h), Si.splice(i--, 1)
          }
        }
        t.svg && p && p.paper && p.paper.safari(), Si[M] && setTimeout(Ti)
      },
      zi = function(e, i, o, r, n) {
        var s = o - r;
        i.timeouts.push(setTimeout(function() {
          t.is(n, "function") && n.call(i), i.animate(e, s, e.easing)
        }, r))
      },
      Ci = function(t) {
        return L(B(t, 255), 0)
      },
      _i = function(t, e) {
        if (null == t) return {
          x: this._.tx,
          y: this._.ty,
          toString: r
        };
        switch (this._.tx += +t, this._.ty += +e, this.type) {
          case "circle":
          case "ellipse":
            this.attr({
              cx: +t + this.attrs.cx,
              cy: +e + this.attrs.cy
            });
            break;
          case "rect":
          case "image":
          case "text":
            this.attr({
              x: +t + this.attrs.x,
              y: +e + this.attrs.y
            });
            break;
          case "path":
            var i = ye(this.attrs.path);
            i[0][1] += +t, i[0][2] += +e, this.attr({
              path: i
            })
        }
        return this
      };
    Fe.animateWith = function(t, e, i, o, r) {
      for (var n = 0, s = Si.length; s > n; n++) Si[n].el.id == t.id && (e.start = Si[n].start);
      return this.animate(e, i, o, r)
    }, Fe.animateAlong = n(), Fe.animateAlongBack = n(1), Fe.onAnimation = function(t) {
      return this._run = t || 0, this
    }, Fe.animate = function(e, i, o, r) {
      var n = this;
      if (n.timeouts = n.timeouts || [], (t.is(o, "function") || !o) && (r = o || null), n.removed) return r && r.call(n), n;
      var a = {},
        c = {},
        h = !1,
        u = {};
      for (var p in e)
        if (e[d](p) && (te[d](p) || n.paper.customAttributes[d](p))) switch (h = !0, a[p] = n.attr(p), null == a[p] && (a[p] = J[p]), c[p] = e[p], te[p]) {
          case "along":
            var f = xi(e[p]),
              m = bi(e[p], f * !!e.back),
              g = n.getBBox();
            u[p] = f / i, u.tx = g.x, u.ty = g.y, u.sx = m.x, u.sy = m.y, c.rot = e.rot, c.back = e.back, c.len = f, e.rot && (u.r = U(n.rotate()) || 0);
            break;
          case O:
            u[p] = (c[p] - a[p]) / i;
            break;
          case "colour":
            a[p] = t.getRGB(a[p]);
            var v = t.getRGB(c[p]);
            u[p] = {
              r: (v.r - a[p].r) / i,
              g: (v.g - a[p].g) / i,
              b: (v.b - a[p].b) / i
            };
            break;
          case "path":
            var y = ze(a[p], c[p]);
            a[p] = y[0];
            var w = y[1];
            u[p] = [];
            for (var x = 0, b = a[p][M]; b > x; x++) {
              u[p][x] = [0];
              for (var k = 1, z = a[p][x][M]; z > k; k++) u[p][x][k] = (w[x][k] - a[p][x][k]) / i
            }
            break;
          case "csv":
            var C = S(e[p])[T](l),
              _ = S(a[p])[T](l);
            switch (p) {
              case "translation":
                a[p] = [0, 0], u[p] = [C[0] / i, C[1] / i];
                break;
              case "rotation":
                a[p] = _[1] == C[1] && _[2] == C[2] ? _ : [0, C[1], C[2]], u[p] = [(C[0] - a[p][0]) / i, 0, 0];
                break;
              case "scale":
                e[p] = C, a[p] = S(a[p])[T](l), u[p] = [(C[0] - a[p][0]) / i, (C[1] - a[p][1]) / i, 0, 0];
                break;
              case "clip-rect":
                for (a[p] = S(a[p])[T](l), u[p] = [], x = 4; x--;) u[p][x] = (C[x] - a[p][x]) / i
            }
            c[p] = C;
            break;
          default:
            for (C = [].concat(e[p]), _ = [].concat(a[p]), u[p] = [], x = n.paper.customAttributes[p][M]; x--;) u[p][x] = ((C[x] || 0) - (_[x] || 0)) / i
        }
      if (h) {
        var E = t.easing_formulas[o];
        if (!E)
          if (E = S(o).match(G), E && 5 == E[M]) {
            var A = E;
            E = function(t) {
              return s(t, +A[1], +A[2], +A[3], +A[4], i)
            }
          } else E = function(t) {
            return t
          };
        Si.push({
          start: e.start || +new Date,
          ms: i,
          easing: E,
          from: a,
          diff: u,
          to: c,
          el: n,
          t: {
            x: 0,
            y: 0
          }
        }), t.is(r, "function") && (n._ac = setTimeout(function() {
          r.call(n)
        }, i)), 1 == Si[M] && setTimeout(Ti)
      } else {
        var L, B = [];
        for (var N in e) e[d](N) && ie.test(N) && (p = {
          value: e[N]
        }, "from" == N && (N = 0), "to" == N && (N = 100), p.key = V(N, 10), B.push(p));
        for (B.sort(ce), B[0].key && B.unshift({
            key: 0,
            value: n.attrs
          }), x = 0, b = B[M]; b > x; x++) zi(B[x].value, n, i / 100 * B[x].key, i / 100 * (B[x - 1] && B[x - 1].key || 0), B[x - 1] && B[x - 1].value.callback);
        L = B[B[M] - 1].value.callback, L && n.timeouts.push(setTimeout(function() {
          L.call(n)
        }, i))
      }
      return this
    }, Fe.stop = function() {
      for (var t = 0; t < Si.length; t++) Si[t].el.id == this.id && Si.splice(t--, 1);
      for (t = 0, ii = this.timeouts && this.timeouts.length; ii > t; t++) clearTimeout(this.timeouts[t]);
      return this.timeouts = [], clearTimeout(this._ac), delete this._ac, this
    }, Fe.translate = function(t, e) {
      return this.attr({
        translation: t + " " + e
      })
    }, Fe[j] = function() {
      return "Raphaël’s object"
    }, t.ae = Si;
    var Mi = function(t) {
      if (this.items = [], this[M] = 0, this.type = "set", t)
        for (var e = 0, i = t[M]; i > e; e++) !t[e] || t[e].constructor != $e && t[e].constructor != Mi || (this[this.items[M]] = this.items[this.items[M]] = t[e], this[M]++)
    };
    Mi[u][$] = function() {
      for (var t, e, i = 0, o = arguments[M]; o > i; i++) t = arguments[i], !t || t.constructor != $e && t.constructor != Mi || (e = this.items[M], this[e] = this.items[e] = t, this[M]++);
      return this
    }, Mi[u].pop = function() {
      return delete this[this[M]--], this.items.pop()
    };
    for (var Ei in Fe) Fe[d](Ei) && (Mi[u][Ei] = function(t) {
      return function() {
        for (var e = 0, i = this.items[M]; i > e; e++) this.items[e][t][y](this.items[e], arguments);
        return this
      }
    }(Ei));
    Mi[u].attr = function(e, i) {
      if (e && t.is(e, H) && t.is(e[0], "object"))
        for (var o = 0, r = e[M]; r > o; o++) this.items[o].attr(e[o]);
      else
        for (var n = 0, s = this.items[M]; s > n; n++) this.items[n].attr(e, i);
      return this
    }, Mi[u].animate = function(e, i, o, r) {
      (t.is(o, "function") || !o) && (r = o || null);
      var n, s, a = this.items[M],
        l = a,
        c = this;
      for (r && (s = function() {
          !--a && r.call(c)
        }), o = t.is(o, I) ? o : s, n = this.items[--l].animate(e, i, o, s); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(n, e, i, o, s);
      return this
    }, Mi[u].insertAfter = function(t) {
      for (var e = this.items[M]; e--;) this.items[e].insertAfter(t);
      return this
    }, Mi[u].getBBox = function() {
      for (var t = [], e = [], i = [], o = [], r = this.items[M]; r--;) {
        var n = this.items[r].getBBox();
        t[$](n.x), e[$](n.y), i[$](n.x + n.width), o[$](n.y + n.height)
      }
      return t = B[y](0, t), e = B[y](0, e), {
        x: t,
        y: e,
        width: L[y](0, i) - t,
        height: L[y](0, o) - e
      }
    }, Mi[u].clone = function(t) {
      t = new Mi;
      for (var e = 0, i = this.items[M]; i > e; e++) t[$](this.items[e].clone());
      return t
    }, t.registerFont = function(t) {
      if (!t.face) return t;
      this.fonts = this.fonts || {};
      var e = {
          w: t.w,
          face: {},
          glyphs: {}
        },
        i = t.face["font-family"];
      for (var o in t.face) t.face[d](o) && (e.face[o] = t.face[o]);
      if (this.fonts[i] ? this.fonts[i][$](e) : this.fonts[i] = [e], !t.svg) {
        e.face["units-per-em"] = V(t.face["units-per-em"], 10);
        for (var r in t.glyphs)
          if (t.glyphs[d](r)) {
            var n = t.glyphs[r];
            if (e.glyphs[r] = {
                w: n.w,
                k: {},
                d: n.d && "M" + n.d[ee](/[mlcxtrv]/g, function(t) {
                  return {
                    l: "L",
                    c: "C",
                    x: "z",
                    t: "m",
                    r: "l",
                    v: "c"
                  }[t] || "M"
                }) + "z"
              }, n.k)
              for (var s in n.k) n[d](s) && (e.glyphs[r].k[s] = n.k[s])
          }
      }
      return t
    }, a.getFont = function(e, i, o, r) {
      if (r = r || "normal", o = o || "normal", i = +i || {
          normal: 400,
          bold: 700,
          lighter: 300,
          bolder: 800
        }[i] || 400, t.fonts) {
        var n = t.fonts[e];
        if (!n) {
          var s = new RegExp("(^|\\s)" + e[ee](/[^\w\d\s+!~.:_-]/g, b) + "(\\s|$)", "i");
          for (var a in t.fonts)
            if (t.fonts[d](a) && s.test(a)) {
              n = t.fonts[a];
              break
            }
        }
        var l;
        if (n)
          for (var c = 0, h = n[M]; h > c && (l = n[c], l.face["font-weight"] != i || l.face["font-style"] != o && l.face["font-style"] || l.face["font-stretch"] != r); c++);
        return l
      }
    }, a.print = function(e, i, o, r, n, s, a) {
      s = s || "middle", a = L(B(a || 0, 1), -1);
      var c, h = this.set(),
        u = S(o)[T](b),
        d = 0;
      if (t.is(r, o) && (r = this.getFont(r)), r) {
        c = (n || 16) / r.face["units-per-em"];
        for (var p = r.face.bbox.split(l), f = +p[0], m = +p[1] + ("baseline" == s ? p[3] - p[1] + +r.face.descent : (p[3] - p[1]) / 2), g = 0, v = u[M]; v > g; g++) {
          var y = g && r.glyphs[u[g - 1]] || {},
            w = r.glyphs[u[g]];
          d += g ? (y.w || r.w) + (y.k && y.k[u[g]] || 0) + r.w * a : 0, w && w.d && h[$](this.path(w.d).attr({
            fill: "#000",
            stroke: "none",
            translation: [d, 0]
          }))
        }
        h.scale(c, c, f, m).translate(e - f, i - m)
      }
      return h
    }, t.format = function(e, i) {
      var o = t.is(i, H) ? [0][w](i) : arguments;
      return e && t.is(e, I) && o[M] - 1 && (e = e[ee](h, function(t, e) {
        return null == o[++e] ? b : o[e]
      })), e || b
    }, t.ninja = function() {
      return m.was ? f.Raphael = m.is : delete Raphael, t
    }, t.el = Fe, t.st = Mi[u], m.was ? f.Raphael = t : Raphael = t
  }(),
  function(t, e, i) {
    "use strict";
    var o = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    t.fn.imagesLoaded = function(e) {
      function r() {
        var i = t(d),
          o = t(p);
        l && (p.length ? l.reject(h, i, o) : l.resolve(h)), t.isFunction(e) && e.call(a, h, i, o)
      }

      function n(t) {
        s(t.target, "error" === t.type)
      }

      function s(e, i) {
        e.src !== o && -1 === t.inArray(e, u) && (u.push(e), i ? p.push(e) : d.push(e), t.data(e, "imagesLoaded", {
          isBroken: i,
          src: e.src
        }), c && l.notifyWith(t(e), [i, h, t(d), t(p)]), h.length === u.length && (setTimeout(r), h.unbind(".imagesLoaded", n)))
      }
      var a = this,
        l = t.isFunction(t.Deferred) ? t.Deferred() : 0,
        c = t.isFunction(l.notify),
        h = a.find("img").add(a.filter("img")),
        u = [],
        d = [],
        p = [];
      return t.isPlainObject(e) && t.each(e, function(t, i) {
        "callback" === t ? e = i : l && l[t](i)
      }), h.length ? h.bind("load.imagesLoaded error.imagesLoaded", n).each(function(e, r) {
        var n = r.src,
          a = t.data(r, "imagesLoaded");
        return a && a.src === n ? void s(r, a.isBroken) : r.complete && r.naturalWidth !== i ? void s(r, 0 === r.naturalWidth || 0 === r.naturalHeight) : void((r.readyState || r.complete) && (r.src = o, r.src = n))
      }) : r(), l ? l.promise(a) : a
    };
    var r = e.Modernizr;
    t.Flipshow = function(e, i) {
      this.$el = t(i), this._init(e)
    }, t.Flipshow.defaults = {
      speed: 700,
      easing: "cubic-bezier(.29,1.44,.86,1.06)"
    }, t.Flipshow.prototype = {
      _init: function(e) {
        this.options = t.extend(!0, {}, t.Flipshow.defaults, e), this.support = r.csstransitions && r.csstransforms3d;
        var i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
          },
          o = {
            WebkitTransform: "-webkit-transform",
            MozTransform: "-moz-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            transform: "transform"
          };
        this.support && (this.transEndEventName = i[r.prefixed("transition")] + ".cbpFWSlider", this.transformName = o[r.prefixed("transform")]), this.transitionProperties = this.transformName + " " + this.options.speed + "ms " + this.options.easing, this.$listItems = this.$el.children("ul.fc-slides"), this.$items = this.$listItems.children("li").hide(), this.itemsCount = this.$items.length, this.current = 0, this.$listItems.imagesLoaded(t.proxy(function() {
          this.$items.eq(this.current).show(), this.itemsCount > 0 && (this._addNav(), this.support && this._layout())
        }, this))
      },
      _addNav: function() {
        var e = this,
          i = t('<div class="fc-left"><span></span><span></span><span></span><i class="icon-arrow-left"></i></div>'),
          o = t('<div class="fc-right"><span></span><span></span><span></span><i class="icon-arrow-right"></i></div>');
        t("<nav></nav>").append(i, o).appendTo(this.$el), i.find("span").on("click.flipshow touchstart.flipshow", function() {
          e._navigate(t(this), "left")
        }), o.find("span").on("click.flipshow touchstart.flipshow", function() {
          e._navigate(t(this), "right")
        })
      },
      _layout: function() {
        this.$flipFront = t('<div class="fc-front"><div></div></div>'), this.$frontContent = this.$flipFront.children("div:first"), this.$flipBack = t('<div class="fc-back"><div></div></div>'), this.$backContent = this.$flipBack.children("div:first"), this.$flipEl = t('<div class="fc-flip"></div>').append(this.$flipFront, this.$flipBack).hide().appendTo(this.$el)
      },
      _navigate: function(t, e) {
        if (this.isAnimating && this.support) return !1;
        this.isAnimating = !0;
        var i = this.$items.eq(this.current).hide();
        "right" === e ? this.current < this.itemsCount - 1 ? ++this.current : this.current = 0 : "left" === e && (this.current > 0 ? --this.current : this.current = this.itemsCount - 1);
        var o = this.$items.eq(this.current);
        this.support ? this._flip(i, o, e, t.index()) : o.show()
      },
      _flip: function(e, i, o, r) {
        var n = "",
          s = t('<div class="fc-overlay-light"></div>'),
          a = t('<div class="fc-overlay-dark"></div>');
        this.$flipEl.css("transition", this.transitionProperties), this.$flipFront.find("div.fc-overlay-light, div.fc-overlay-dark").remove(), this.$flipBack.find("div.fc-overlay-light, div.fc-overlay-dark").remove(), "right" === o ? (this.$flipFront.append(s), this.$flipBack.append(a), a.css("opacity", 1)) : "left" === o && (this.$flipFront.append(a), this.$flipBack.append(s), s.css("opacity", 1));
        var l = {
          transition: "opacity " + this.options.speed / 1.3 + "ms"
        };
        switch (s.css(l), a.css(l), r) {
          case 0:
            n = "left" === o ? "rotate3d(-1,1,0,-179deg) rotate3d(-1,1,0,-1deg)" : "rotate3d(1,1,0,180deg)";
            break;
          case 1:
            n = "left" === o ? "rotate3d(0,1,0,-179deg) rotate3d(0,1,0,-1deg)" : "rotate3d(0,1,0,180deg)";
            break;
          case 2:
            n = "left" === o ? "rotate3d(1,1,0,-179deg) rotate3d(1,1,0,-1deg)" : "rotate3d(-1,1,0,179deg) rotate3d(-1,1,0,1deg)"
        }
        this.$flipBack.css("transform", n), this.$frontContent.empty().html(e.html()), this.$backContent.empty().html(i.html()), this.$flipEl.show();
        var c = this;
        setTimeout(function() {
          c.$flipEl.css("transform", n), s.css("opacity", "right" === o ? 1 : 0), a.css("opacity", "right" === o ? 0 : 1), c.$flipEl.on(c.transEndEventName, function(t) {
            "fc-overlay-light" !== t.target.className && "fc-overlay-dark" !== t.target.className && c._ontransitionend(i)
          })
        }, 25)
      },
      _ontransitionend: function(t) {
        t.show(), this.$flipEl.off(this.transEndEventName).css({
          transition: "none",
          transform: "none"
        }).hide(), this.isAnimating = !1
      }
    };
    var n = function(t) {
      e.console && e.console.error(t)
    };
    t.fn.flipshow = function(e) {
      if ("string" == typeof e) {
        var i = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var o = t.data(this, "flipshow");
          return o ? t.isFunction(o[e]) && "_" !== e.charAt(0) ? void o[e].apply(o, i) : void n("no such method '" + e + "' for flipshow instance") : void n("cannot call methods on flipshow prior to initialization; attempted to call method '" + e + "'")
        })
      } else this.each(function() {
        var i = t.data(this, "flipshow");
        i ? i._init() : i = t.data(this, "flipshow", new t.Flipshow(e, this))
      });
      return this
    }
  }(jQuery, window),
  function(t, e) {
    "use strict";
    var i, o = t.document,
      r = t.Modernizr,
      n = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      },
      s = "Moz Webkit O Ms".split(" "),
      a = function(t) {
        var e, i = o.documentElement.style;
        if ("string" == typeof i[t]) return t;
        t = n(t);
        for (var r = 0, a = s.length; a > r; r++)
          if (e = s[r] + t, "string" == typeof i[e]) return e
      },
      l = a("transform"),
      c = a("transitionProperty"),
      h = {
        csstransforms: function() {
          return !!l
        },
        csstransforms3d: function() {
          var t = !!a("perspective");
          if (t) {
            var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
              o = "@media (" + i.join("transform-3d),(") + "modernizr)",
              r = e("<style>" + o + "{#modernizr{height:3px}}</style>").appendTo("head"),
              n = e('<div id="modernizr" />').appendTo("html");
            t = 3 === n.height(), n.remove(), r.remove()
          }
          return t
        },
        csstransitions: function() {
          return !!c
        }
      };
    if (r)
      for (i in h) r.hasOwnProperty(i) || r.addTest(i, h[i]);
    else {
      r = t.Modernizr = {
        _version: "1.6ish: miniModernizr for Isotope"
      };
      var u, d = " ";
      for (i in h) u = h[i](), r[i] = u, d += " " + (u ? "" : "no-") + i;
      e("html").addClass(d)
    }
    if (r.csstransforms) {
      var p = r.csstransforms3d ? {
          translate: function(t) {
            return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
          },
          scale: function(t) {
            return "scale3d(" + t + ", " + t + ", 1) "
          }
        } : {
          translate: function(t) {
            return "translate(" + t[0] + "px, " + t[1] + "px) "
          },
          scale: function(t) {
            return "scale(" + t + ") "
          }
        },
        f = function(t, i, o) {
          var r, n, s = e.data(t, "isoTransform") || {},
            a = {},
            c = {};
          a[i] = o, e.extend(s, a);
          for (r in s) n = s[r], c[r] = p[r](n);
          var h = c.translate || "",
            u = c.scale || "",
            d = h + u;
          e.data(t, "isoTransform", s), t.style[l] = d
        };
      e.cssNumber.scale = !0, e.cssHooks.scale = {
        set: function(t, e) {
          f(t, "scale", e)
        },
        get: function(t) {
          var i = e.data(t, "isoTransform");
          return i && i.scale ? i.scale : 1
        }
      }, e.fx.step.scale = function(t) {
        e.cssHooks.scale.set(t.elem, t.now + t.unit)
      }, e.cssNumber.translate = !0, e.cssHooks.translate = {
        set: function(t, e) {
          f(t, "translate", e)
        },
        get: function(t) {
          var i = e.data(t, "isoTransform");
          return i && i.translate ? i.translate : [0, 0]
        }
      }
    }
    var m, g;
    r.csstransitions && (m = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend"
    }[c], g = a("transitionDuration"));
    var v, y = e.event,
      w = e.event.handle ? "handle" : "dispatch";
    y.special.smartresize = {
      setup: function() {
        e(this).bind("resize", y.special.smartresize.handler)
      },
      teardown: function() {
        e(this).unbind("resize", y.special.smartresize.handler)
      },
      handler: function(t, e) {
        var i = this,
          o = arguments;
        t.type = "smartresize", v && clearTimeout(v), v = setTimeout(function() {
          y[w].apply(i, o)
        }, "execAsap" === e ? 0 : 100)
      }
    }, e.fn.smartresize = function(t) {
      return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, e.Isotope = function(t, i, o) {
      this.element = e(i), this._create(t), this._init(o)
    };
    var x = ["width", "height"],
      b = e(t);
    e.Isotope.settings = {
      resizable: !0,
      layoutMode: "masonry",
      containerClass: "isotope",
      itemClass: "isotope-item",
      hiddenClass: "isotope-hidden",
      hiddenStyle: {
        opacity: 0,
        scale: .001
      },
      visibleStyle: {
        opacity: 1,
        scale: 1
      },
      containerStyle: {
        position: "relative",
        overflow: "hidden"
      },
      animationEngine: "best-available",
      animationOptions: {
        queue: !1,
        duration: 800
      },
      sortBy: "original-order",
      sortAscending: !0,
      resizesContainer: !0,
      transformsEnabled: !0,
      itemPositionDataEnabled: !1
    }, e.Isotope.prototype = {
      _create: function(t) {
        this.options = e.extend({}, e.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
        var i = this.element[0].style;
        this.originalStyle = {};
        var o = x.slice(0);
        for (var r in this.options.containerStyle) o.push(r);
        for (var n = 0, s = o.length; s > n; n++) r = o[n], this.originalStyle[r] = i[r] || "";
        this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
        var a = {
          "original-order": function(t, e) {
            return e.elemCount++, e.elemCount
          },
          random: function() {
            return Math.random()
          }
        };
        this.options.getSortData = e.extend(this.options.getSortData, a), this.reloadItems(), this.offset = {
          left: parseInt(this.element.css("padding-left") || 0, 10),
          top: parseInt(this.element.css("padding-top") || 0, 10)
        };
        var l = this;
        setTimeout(function() {
          l.element.addClass(l.options.containerClass)
        }, 0), this.options.resizable && b.bind("smartresize.isotope", function() {
          l.resize()
        }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
          return !1
        })
      },
      _getAtoms: function(t) {
        var e = this.options.itemSelector,
          i = e ? t.filter(e).add(t.find(e)) : t,
          o = {
            position: "absolute"
          };
        return i = i.filter(function(t, e) {
          return 1 === e.nodeType
        }), this.usingTransforms && (o.left = 0, o.top = 0), i.css(o).addClass(this.options.itemClass), this.updateSortData(i, !0), i
      },
      _init: function(t) {
        this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
      },
      option: function(t) {
        if (e.isPlainObject(t)) {
          this.options = e.extend(!0, this.options, t);
          var i;
          for (var o in t) i = "_update" + n(o), this[i] && this[i]()
        }
      },
      _updateAnimationEngine: function() {
        var t, e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
        switch (e) {
          case "css":
          case "none":
            t = !1;
            break;
          case "jquery":
            t = !0;
            break;
          default:
            t = !r.csstransitions
        }
        this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
      },
      _updateTransformsEnabled: function() {
        this._updateUsingTransforms()
      },
      _updateUsingTransforms: function() {
        var t = this.usingTransforms = this.options.transformsEnabled && r.csstransforms && r.csstransitions && !this.isUsingJQueryAnimation;
        t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
      },
      _filter: function(t) {
        var e = "" === this.options.filter ? "*" : this.options.filter;
        if (!e) return t;
        var i = this.options.hiddenClass,
          o = "." + i,
          r = t.filter(o),
          n = r;
        if ("*" !== e) {
          n = r.filter(e);
          var s = t.not(o).not(e).addClass(i);
          this.styleQueue.push({
            $el: s,
            style: this.options.hiddenStyle
          })
        }
        return this.styleQueue.push({
          $el: n,
          style: this.options.visibleStyle
        }), n.removeClass(i), t.filter(e)
      },
      updateSortData: function(t, i) {
        var o, r, n = this,
          s = this.options.getSortData;
        t.each(function() {
          o = e(this), r = {};
          for (var t in s) r[t] = i || "original-order" !== t ? s[t](o, n) : e.data(this, "isotope-sort-data")[t];
          e.data(this, "isotope-sort-data", r)
        })
      },
      _sort: function() {
        var t = this.options.sortBy,
          e = this._getSorter,
          i = this.options.sortAscending ? 1 : -1,
          o = function(o, r) {
            var n = e(o, t),
              s = e(r, t);
            return n === s && "original-order" !== t && (n = e(o, "original-order"), s = e(r, "original-order")), (n > s ? 1 : s > n ? -1 : 0) * i
          };
        this.$filteredAtoms.sort(o)
      },
      _getSorter: function(t, i) {
        return e.data(t, "isotope-sort-data")[i]
      },
      _translate: function(t, e) {
        return {
          translate: [t, e]
        }
      },
      _positionAbs: function(t, e) {
        return {
          left: t,
          top: e
        }
      },
      _pushPosition: function(t, e, i) {
        e = Math.round(e + this.offset.left), i = Math.round(i + this.offset.top);
        var o = this.getPositionStyles(e, i);
        this.styleQueue.push({
          $el: t,
          style: o
        }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
          x: e,
          y: i
        })
      },
      layout: function(t, e) {
        var i = this.options.layoutMode;
        if (this["_" + i + "Layout"](t), this.options.resizesContainer) {
          var o = this["_" + i + "GetContainerSize"]();
          this.styleQueue.push({
            $el: this.element,
            style: o
          })
        }
        this._processStyleQueue(t, e), this.isLaidOut = !0
      },
      _processStyleQueue: function(t, i) {
        var o, n, s, a, l = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
          c = this.options.animationOptions,
          h = this.options.onLayout;
        if (n = function(t, e) {
            e.$el[l](e.style, c)
          }, this._isInserting && this.isUsingJQueryAnimation) n = function(t, e) {
          o = e.$el.hasClass("no-transition") ? "css" : l, e.$el[o](e.style, c)
        };
        else if (i || h || c.complete) {
          var u = !1,
            d = [i, h, c.complete],
            p = this;
          if (s = !0, a = function() {
              if (!u) {
                for (var e, i = 0, o = d.length; o > i; i++) e = d[i], "function" == typeof e && e.call(p.element, t, p);
                u = !0
              }
            }, this.isUsingJQueryAnimation && "animate" === l) c.complete = a, s = !1;
          else if (r.csstransitions) {
            for (var f, v = 0, y = this.styleQueue[0], w = y && y.$el; !w || !w.length;) {
              if (f = this.styleQueue[v++], !f) return;
              w = f.$el
            }
            var x = parseFloat(getComputedStyle(w[0])[g]);
            x > 0 && (n = function(t, e) {
              e.$el[l](e.style, c).one(m, a)
            }, s = !1)
          }
        }
        e.each(this.styleQueue, n), s && a(), this.styleQueue = []
      },
      resize: function() {
        this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
      },
      reLayout: function(t) {
        this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
      },
      addItems: function(t, e) {
        var i = this._getAtoms(t);
        this.$allAtoms = this.$allAtoms.add(i), e && e(i)
      },
      insert: function(t, e) {
        this.element.append(t);
        var i = this;
        this.addItems(t, function(t) {
          var o = i._filter(t);
          i._addHideAppended(o), i._sort(), i.reLayout(), i._revealAppended(o, e)
        })
      },
      appended: function(t, e) {
        var i = this;
        this.addItems(t, function(t) {
          i._addHideAppended(t), i.layout(t), i._revealAppended(t, e)
        })
      },
      _addHideAppended: function(t) {
        this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
          $el: t,
          style: this.options.hiddenStyle
        })
      },
      _revealAppended: function(t, e) {
        var i = this;
        setTimeout(function() {
          t.removeClass("no-transition"), i.styleQueue.push({
            $el: t,
            style: i.options.visibleStyle
          }), i._isInserting = !1, i._processStyleQueue(t, e)
        }, 10)
      },
      reloadItems: function() {
        this.$allAtoms = this._getAtoms(this.element.children())
      },
      remove: function(t, e) {
        this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
        var i = this,
          o = function() {
            t.remove(), e && e.call(i.element)
          };
        t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
          $el: t,
          style: this.options.hiddenStyle
        }), this._sort(), this.reLayout(o)) : o()
      },
      shuffle: function(t) {
        this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
      },
      destroy: function() {
        var t = this.usingTransforms,
          e = this.options;
        this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function() {
          var e = this.style;
          e.position = "", e.top = "", e.left = "", e.opacity = "", t && (e[l] = "")
        });
        var i = this.element[0].style;
        for (var o in this.originalStyle) i[o] = this.originalStyle[o];
        this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"), b.unbind(".isotope")
      },
      _getSegments: function(t) {
        var e, i = this.options.layoutMode,
          o = t ? "rowHeight" : "columnWidth",
          r = t ? "height" : "width",
          s = t ? "rows" : "cols",
          a = this.element[r](),
          l = this.options[i] && this.options[i][o] || this.$filteredAtoms["outer" + n(r)](!0) || a;
        e = Math.floor(a / l), e = Math.max(e, 1), this[i][s] = e, this[i][o] = l
      },
      _checkIfSegmentsChanged: function(t) {
        var e = this.options.layoutMode,
          i = t ? "rows" : "cols",
          o = this[e][i];
        return this._getSegments(t), this[e][i] !== o
      },
      _masonryReset: function() {
        this.masonry = {}, this._getSegments();
        var t = this.masonry.cols;
        for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
      },
      _masonryLayout: function(t) {
        var i = this,
          o = i.masonry;
        t.each(function() {
          var t = e(this),
            r = Math.ceil(t.outerWidth(!0) / o.columnWidth);
          if (r = Math.min(r, o.cols), 1 === r) i._masonryPlaceBrick(t, o.colYs);
          else {
            var n, s, a = o.cols + 1 - r,
              l = [];
            for (s = 0; a > s; s++) n = o.colYs.slice(s, s + r), l[s] = Math.max.apply(Math, n);
            i._masonryPlaceBrick(t, l)
          }
        })
      },
      _masonryPlaceBrick: function(t, e) {
        for (var i = Math.min.apply(Math, e), o = 0, r = 0, n = e.length; n > r; r++)
          if (e[r] === i) {
            o = r;
            break
          }
        var s = this.masonry.columnWidth * o,
          a = i;
        this._pushPosition(t, s, a);
        var l = i + t.outerHeight(!0),
          c = this.masonry.cols + 1 - n;
        for (r = 0; c > r; r++) this.masonry.colYs[o + r] = l
      },
      _masonryGetContainerSize: function() {
        var t = Math.max.apply(Math, this.masonry.colYs);
        return {
          height: t
        }
      },
      _masonryResizeChanged: function() {
        return this._checkIfSegmentsChanged()
      },
      _fitRowsReset: function() {
        this.fitRows = {
          x: 0,
          y: 0,
          height: 0
        }
      },
      _fitRowsLayout: function(t) {
        var i = this,
          o = this.element.width(),
          r = this.fitRows;
        t.each(function() {
          var t = e(this),
            n = t.outerWidth(!0),
            s = t.outerHeight(!0);
          0 !== r.x && n + r.x > o && (r.x = 0, r.y = r.height), i._pushPosition(t, r.x, r.y), r.height = Math.max(r.y + s, r.height), r.x += n
        })
      },
      _fitRowsGetContainerSize: function() {
        return {
          height: this.fitRows.height
        }
      },
      _fitRowsResizeChanged: function() {
        return !0
      },
      _cellsByRowReset: function() {
        this.cellsByRow = {
          index: 0
        }, this._getSegments(), this._getSegments(!0)
      },
      _cellsByRowLayout: function(t) {
        var i = this,
          o = this.cellsByRow;
        t.each(function() {
          var t = e(this),
            r = o.index % o.cols,
            n = Math.floor(o.index / o.cols),
            s = (r + .5) * o.columnWidth - t.outerWidth(!0) / 2,
            a = (n + .5) * o.rowHeight - t.outerHeight(!0) / 2;
          i._pushPosition(t, s, a), o.index++
        })
      },
      _cellsByRowGetContainerSize: function() {
        return {
          height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
        }
      },
      _cellsByRowResizeChanged: function() {
        return this._checkIfSegmentsChanged()
      },
      _straightDownReset: function() {
        this.straightDown = {
          y: 0
        }
      },
      _straightDownLayout: function(t) {
        var i = this;
        t.each(function() {
          var t = e(this);
          i._pushPosition(t, 0, i.straightDown.y), i.straightDown.y += t.outerHeight(!0)
        })
      },
      _straightDownGetContainerSize: function() {
        return {
          height: this.straightDown.y
        }
      },
      _straightDownResizeChanged: function() {
        return !0
      },
      _masonryHorizontalReset: function() {
        this.masonryHorizontal = {}, this._getSegments(!0);
        var t = this.masonryHorizontal.rows;
        for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
      },
      _masonryHorizontalLayout: function(t) {
        var i = this,
          o = i.masonryHorizontal;
        t.each(function() {
          var t = e(this),
            r = Math.ceil(t.outerHeight(!0) / o.rowHeight);
          if (r = Math.min(r, o.rows), 1 === r) i._masonryHorizontalPlaceBrick(t, o.rowXs);
          else {
            var n, s, a = o.rows + 1 - r,
              l = [];
            for (s = 0; a > s; s++) n = o.rowXs.slice(s, s + r), l[s] = Math.max.apply(Math, n);
            i._masonryHorizontalPlaceBrick(t, l)
          }
        })
      },
      _masonryHorizontalPlaceBrick: function(t, e) {
        for (var i = Math.min.apply(Math, e), o = 0, r = 0, n = e.length; n > r; r++)
          if (e[r] === i) {
            o = r;
            break
          }
        var s = i,
          a = this.masonryHorizontal.rowHeight * o;
        this._pushPosition(t, s, a);
        var l = i + t.outerWidth(!0),
          c = this.masonryHorizontal.rows + 1 - n;
        for (r = 0; c > r; r++) this.masonryHorizontal.rowXs[o + r] = l
      },
      _masonryHorizontalGetContainerSize: function() {
        var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
        return {
          width: t
        }
      },
      _masonryHorizontalResizeChanged: function() {
        return this._checkIfSegmentsChanged(!0)
      },
      _fitColumnsReset: function() {
        this.fitColumns = {
          x: 0,
          y: 0,
          width: 0
        }
      },
      _fitColumnsLayout: function(t) {
        var i = this,
          o = this.element.height(),
          r = this.fitColumns;
        t.each(function() {
          var t = e(this),
            n = t.outerWidth(!0),
            s = t.outerHeight(!0);
          0 !== r.y && s + r.y > o && (r.x = r.width, r.y = 0), i._pushPosition(t, r.x, r.y), r.width = Math.max(r.x + n, r.width), r.y += s
        })
      },
      _fitColumnsGetContainerSize: function() {
        return {
          width: this.fitColumns.width
        }
      },
      _fitColumnsResizeChanged: function() {
        return !0
      },
      _cellsByColumnReset: function() {
        this.cellsByColumn = {
          index: 0
        }, this._getSegments(), this._getSegments(!0)
      },
      _cellsByColumnLayout: function(t) {
        var i = this,
          o = this.cellsByColumn;
        t.each(function() {
          var t = e(this),
            r = Math.floor(o.index / o.rows),
            n = o.index % o.rows,
            s = (r + .5) * o.columnWidth - t.outerWidth(!0) / 2,
            a = (n + .5) * o.rowHeight - t.outerHeight(!0) / 2;
          i._pushPosition(t, s, a), o.index++
        })
      },
      _cellsByColumnGetContainerSize: function() {
        return {
          width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
        }
      },
      _cellsByColumnResizeChanged: function() {
        return this._checkIfSegmentsChanged(!0)
      },
      _straightAcrossReset: function() {
        this.straightAcross = {
          x: 0
        }
      },
      _straightAcrossLayout: function(t) {
        var i = this;
        t.each(function() {
          var t = e(this);
          i._pushPosition(t, i.straightAcross.x, 0), i.straightAcross.x += t.outerWidth(!0)
        })
      },
      _straightAcrossGetContainerSize: function() {
        return {
          width: this.straightAcross.x
        }
      },
      _straightAcrossResizeChanged: function() {
        return !0
      }
    }, e.fn.imagesLoaded = function(t) {
      function i() {
        t.call(r, n)
      }

      function o(t) {
        var r = t.target;
        r.src !== a && -1 === e.inArray(r, l) && (l.push(r), --s <= 0 && (setTimeout(i), n.unbind(".imagesLoaded", o)))
      }
      var r = this,
        n = r.find("img").add(r.filter("img")),
        s = n.length,
        a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        l = [];
      return s || i(), n.bind("load.imagesLoaded error.imagesLoaded", o).each(function() {
        var t = this.src;
        this.src = a, this.src = t
      }), r
    };
    var k = function(e) {
      t.console && t.console.error(e)
    };
    e.fn.isotope = function(t, i) {
      if ("string" == typeof t) {
        var o = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var i = e.data(this, "isotope");
          return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, o) : void k("no such method '" + t + "' for isotope instance") : void k("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
        })
      } else this.each(function() {
        var o = e.data(this, "isotope");
        o ? (o.option(t), o._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i))
      });
      return this
    }
  }(window, jQuery), ! function(t, e, i) {
    t.fn.scrollUp = function(e) {
      t.data(i.body, "scrollUp") || (t.data(i.body, "scrollUp", !0), t.fn.scrollUp.init(e))
    }, t.fn.scrollUp.init = function(o) {
      var r, n = t.fn.scrollUp.settings = t.extend({}, t.fn.scrollUp.defaults, o);
      r = n.scrollTrigger ? t(n.scrollTrigger) : t("<a/>", {
        id: n.scrollName,
        href: "#top"
      }), n.scrollTitle && r.attr("title", n.scrollTitle), r.appendTo("body"), n.scrollImg || n.scrollTrigger || r.html(n.scrollText), r.css({
        display: "none",
        position: "fixed",
        zIndex: n.zIndex
      }), n.activeOverlay && t("<div/>", {
        id: n.scrollName + "-active"
      }).css({
        position: "absolute",
        top: n.scrollDistance + "px",
        width: "100%",
        borderTop: "1px dotted" + n.activeOverlay,
        zIndex: n.zIndex
      }).appendTo("body");
      var s, a, l, c;
      switch (n.animation) {
        case "fade":
          s = "fadeIn", a = "fadeOut", l = n.animationSpeed;
          break;
        case "slide":
          s = "slideDown", a = "slideUp", l = n.animationSpeed;
          break;
        default:
          s = "show", a = "hide", l = 0
      }
      c = "top" === n.scrollFrom ? n.scrollDistance : t(i).height() - t(e).height() - n.scrollDistance;
      var h = !1;
      scrollEvent = t(e).scroll(function() {
        t(e).scrollTop() > c ? h || (r[s](l), h = !0) : h && (r[a](l), h = !1)
      });
      var u;
      n.scrollTarget ? "number" == typeof n.scrollTarget ? u = n.scrollTarget : "string" == typeof n.scrollTarget && (u = Math.floor(t(n.scrollTarget).offset().top)) : u = 0, r.click(function(e) {
        e.preventDefault(), t("html, body").animate({
          scrollTop: u
        }, n.scrollSpeed, n.easingType)
      })
    }, t.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647
    }, t.fn.scrollUp.destroy = function(o) {
      t.removeData(i.body, "scrollUp"), t("#" + t.fn.scrollUp.settings.scrollName).remove(), t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(), t.fn.jquery.split(".")[1] >= 7 ? t(e).off("scroll", o) : t(e).unbind("scroll", o)
    }, t.scrollUp = t.fn.scrollUp
  }(jQuery, window, document),
  function(t, e, i, o) {
    "use strict";
    var r = i("html"),
      n = i(t),
      s = i(e),
      a = i.fancybox = function() {
        a.open.apply(this, arguments)
      },
      l = navigator.userAgent.match(/msie/i),
      c = null,
      h = e.createTouch !== o,
      u = function(t) {
        return t && t.hasOwnProperty && t instanceof i
      },
      d = function(t) {
        return t && "string" === i.type(t)
      },
      p = function(t) {
        return d(t) && t.indexOf("%") > 0
      },
      f = function(t) {
        return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
      },
      m = function(t, e) {
        var i = parseInt(t, 10) || 0;
        return e && p(t) && (i = a.getViewport()[e] / 100 * i), Math.ceil(i)
      },
      g = function(t, e) {
        return m(t, e) + "px"
      };
    i.extend(a, {
      version: "2.1.5",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !h,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: .5,
        leftRatio: .5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: {
          dataType: "html",
          headers: {
            "X-fancyBox": !0
          }
        },
        iframe: {
          scrolling: "auto",
          preload: !0
        },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always"
        },
        keys: {
          next: {
            13: "left",
            34: "up",
            39: "left",
            40: "up"
          },
          prev: {
            8: "right",
            33: "down",
            37: "right",
            38: "down"
          },
          close: [27],
          play: [32],
          toggle: [70]
        },
        direction: {
          next: "left",
          prev: "right"
        },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
          error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: {
          overlay: !0,
          title: !0
        },
        onCancel: i.noop,
        beforeLoad: i.noop,
        afterLoad: i.noop,
        beforeShow: i.noop,
        afterShow: i.noop,
        beforeChange: i.noop,
        beforeClose: i.noop,
        afterClose: i.noop
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: {
        timer: null,
        isActive: !1
      },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function(t, e) {
        return t && (i.isPlainObject(e) || (e = {}), !1 !== a.close(!0)) ? (i.isArray(t) || (t = u(t) ? i(t).get() : [t]), i.each(t, function(r, n) {
          var s, l, c, h, p, f, m, g = {};
          "object" === i.type(n) && (n.nodeType && (n = i(n)), u(n) ? (g = {
            href: n.data("fancybox-href") || n.attr("href"),
            title: n.data("fancybox-title") || n.attr("title"),
            isDom: !0,
            element: n
          }, i.metadata && i.extend(!0, g, n.metadata())) : g = n), s = e.href || g.href || (d(n) ? n : null), l = e.title !== o ? e.title : g.title || "", c = e.content || g.content, h = c ? "html" : e.type || g.type, !h && g.isDom && (h = n.data("fancybox-type"), h || (p = n.prop("class").match(/fancybox\.(\w+)/), h = p ? p[1] : null)), d(s) && (h || (a.isImage(s) ? h = "image" : a.isSWF(s) ? h = "swf" : "#" === s.charAt(0) ? h = "inline" : d(n) && (h = "html", c = n)), "ajax" === h && (f = s.split(/\s+/, 2), s = f.shift(), m = f.shift())), c || ("inline" === h ? s ? c = i(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : g.isDom && (c = n) : "html" === h ? c = s : h || s || !g.isDom || (h = "inline", c = n)), i.extend(g, {
            href: s,
            type: h,
            content: c,
            title: l,
            selector: m
          }), t[r] = g
        }), a.opts = i.extend(!0, {}, a.defaults, e), e.keys !== o && (a.opts.keys = e.keys ? i.extend({}, a.defaults.keys, e.keys) : !1), a.group = t, a._start(a.opts.index)) : void 0
      },
      cancel: function() {
        var t = a.coming;
        t && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
      },
      close: function(t) {
        a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && t !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
      },
      play: function(t) {
        var e = function() {
            clearTimeout(a.player.timer)
          },
          i = function() {
            e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
          },
          o = function() {
            e(), s.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
          },
          r = function() {
            a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, s.bind({
              "onCancel.player beforeClose.player": o,
              "onUpdate.player": i,
              "beforeLoad.player": e
            }), i(), a.trigger("onPlayStart"))
          };
        t === !0 || !a.player.isActive && t !== !1 ? r() : o()
      },
      next: function(t) {
        var e = a.current;
        e && (d(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
      },
      prev: function(t) {
        var e = a.current;
        e && (d(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
      },
      jumpto: function(t, e, i) {
        var r = a.current;
        r && (t = m(t), a.direction = e || r.direction[t >= r.index ? "next" : "prev"], a.router = i || "jumpto", r.loop && (0 > t && (t = r.group.length + t % r.group.length), t %= r.group.length), r.group[t] !== o && (a.cancel(), a._start(t)))
      },
      reposition: function(t, e) {
        var o, r = a.current,
          n = r ? r.wrap : null;
        n && (o = a._getPosition(e), t && "scroll" === t.type ? (delete o.position, n.stop(!0, !0).animate(o, 200)) : (n.css(o), r.pos = i.extend({}, r.dim, o)))
      },
      update: function(t) {
        var e = t && t.type,
          i = !e || "orientationchange" === e;
        i && (clearTimeout(c), c = null), a.isOpen && !c && (c = setTimeout(function() {
          var o = a.current;
          o && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && o.autoResize) && a._setDimension(), "scroll" === e && o.canShrink || a.reposition(t), a.trigger("onUpdate"), c = null)
        }, i && !h ? 0 : 300))
      },
      toggle: function(t) {
        a.isOpen && (a.current.fitToView = "boolean" === i.type(t) ? t : !a.current.fitToView, h && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
      },
      hideLoading: function() {
        s.unbind(".loading"), i("#fancybox-loading").remove()
      },
      showLoading: function() {
        var t, e;
        a.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), s.bind("keydown.loading", function(t) {
          27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel())
        }), a.defaults.fixed || (e = a.getViewport(), t.css({
          position: "absolute",
          top: .5 * e.h + e.y,
          left: .5 * e.w + e.x
        }))
      },
      getViewport: function() {
        var e = a.current && a.current.locked || !1,
          i = {
            x: n.scrollLeft(),
            y: n.scrollTop()
          };
        return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = h && t.innerWidth ? t.innerWidth : n.width(), i.h = h && t.innerHeight ? t.innerHeight : n.height()), i
      },
      unbindEvents: function() {
        a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), s.unbind(".fb"), n.unbind(".fb")
      },
      bindEvents: function() {
        var t, e = a.current;
        e && (n.bind("orientationchange.fb" + (h ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update), t = e.keys, t && s.bind("keydown.fb", function(r) {
          var n = r.which || r.keyCode,
            s = r.target || r.srcElement;
          return 27 === n && a.coming ? !1 : void(r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || s && (s.type || i(s).is("[contenteditable]")) || i.each(t, function(t, s) {
            return e.group.length > 1 && s[n] !== o ? (a[t](s[n]), r.preventDefault(), !1) : i.inArray(n, s) > -1 ? (a[t](), r.preventDefault(), !1) : void 0
          }))
        }), i.fn.mousewheel && e.mouseWheel && a.wrap.bind("mousewheel.fb", function(t, o, r, n) {
          for (var s = t.target || null, l = i(s), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = f(l[0]), l = i(l).parent();
          0 === o || c || a.group.length > 1 && !e.canShrink && (n > 0 || r > 0 ? a.prev(n > 0 ? "down" : "left") : (0 > n || 0 > r) && a.next(0 > n ? "up" : "right"), t.preventDefault())
        }))
      },
      trigger: function(t, e) {
        var o, r = e || a.coming || a.current;
        if (r) {
          if (i.isFunction(r[t]) && (o = r[t].apply(r, Array.prototype.slice.call(arguments, 1))), o === !1) return !1;
          r.helpers && i.each(r.helpers, function(e, o) {
            o && a.helpers[e] && i.isFunction(a.helpers[e][t]) && a.helpers[e][t](i.extend(!0, {}, a.helpers[e].defaults, o), r)
          }), s.trigger(t)
        }
      },
      isImage: function(t) {
        return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
      },
      isSWF: function(t) {
        return d(t) && t.match(/\.(swf)((\?|#).*)?$/i)
      },
      _start: function(t) {
        var e, o, r, n, s, l = {};
        if (t = m(t), e = a.group[t] || null, !e) return !1;
        if (l = i.extend(!0, {}, a.opts, e), n = l.margin, s = l.padding, "number" === i.type(n) && (l.margin = [n, n, n, n]), "number" === i.type(s) && (l.padding = [s, s, s, s]), l.modal && i.extend(!0, l, {
            closeBtn: !1,
            closeClick: !1,
            nextClick: !1,
            arrows: !1,
            mouseWheel: !1,
            keys: null,
            helpers: {
              overlay: {
                closeClick: !1
              }
            }
          }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = t, a.coming = l, !1 === a.trigger("beforeLoad")) return void(a.coming = null);
        if (r = l.type, o = l.href, !r) return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = t, a[a.router](a.direction)) : !1;
        if (a.isActive = !0, ("image" === r || "swf" === r) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === r && (l.aspectRatio = !0), "iframe" === r && h && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (h ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
            skin: i(".fancybox-skin", l.wrap),
            outer: i(".fancybox-outer", l.wrap),
            inner: i(".fancybox-inner", l.wrap)
          }), i.each(["Top", "Right", "Bottom", "Left"], function(t, e) {
            l.skin.css("padding" + e, g(l.padding[t]))
          }), a.trigger("onReady"), "inline" === r || "html" === r) {
          if (!l.content || !l.content.length) return a._error("content")
        } else if (!o) return a._error("href");
        "image" === r ? a._loadImage() : "ajax" === r ? a._loadAjax() : "iframe" === r ? a._loadIframe() : a._afterLoad()
      },
      _error: function(t) {
        i.extend(a.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: t,
          content: a.coming.tpl.error
        }), a._afterLoad()
      },
      _loadImage: function() {
        var t = a.imgPreload = new Image;
        t.onload = function() {
          this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
        }, t.onerror = function() {
          this.onload = this.onerror = null, a._error("image")
        }, t.src = a.coming.href, t.complete !== !0 && a.showLoading()
      },
      _loadAjax: function() {
        var t = a.coming;
        a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, t.ajax, {
          url: t.href,
          error: function(t, e) {
            a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
          },
          success: function(e, i) {
            "success" === i && (t.content = e, a._afterLoad())
          }
        }))
      },
      _loadIframe: function() {
        var t = a.coming,
          e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", h ? "auto" : t.iframe.scrolling).attr("src", t.href);
        i(t.wrap).bind("onReset", function() {
          try {
            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
          } catch (t) {}
        }), t.iframe.preload && (a.showLoading(), e.one("load", function() {
          i(this).data("ready", 1), h || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
      },
      _preloadImages: function() {
        var t, e, i = a.group,
          o = a.current,
          r = i.length,
          n = o.preload ? Math.min(o.preload, r - 1) : 0;
        for (e = 1; n >= e; e += 1) t = i[(o.index + e) % r], "image" === t.type && t.href && ((new Image).src = t.href)
      },
      _afterLoad: function() {
        var t, e, o, r, n, s, l = a.coming,
          c = a.current,
          h = "fancybox-placeholder";
        if (a.hideLoading(), l && a.isActive !== !1) {
          if (!1 === a.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
          switch (c && (a.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), t = l, e = l.content, o = l.type, r = l.scrolling, i.extend(a, {
            wrap: t.wrap,
            skin: t.skin,
            outer: t.outer,
            inner: t.inner,
            current: t,
            previous: c
          }), n = t.href, o) {
            case "inline":
            case "ajax":
            case "html":
              t.selector ? e = i("<div>").html(e).find(t.selector) : u(e) && (e.data(h) || e.data(h, i('<div class="' + h + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function() {
                i(this).find(e).length && e.hide().replaceAll(e.data(h)).data(h, !1)
              }));
              break;
            case "image":
              e = t.tpl.image.replace("{href}", n);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>', s = "", i.each(t.swf, function(t, i) {
                e += '<param name="' + t + '" value="' + i + '"></param>', s += " " + t + '="' + i + '"'
              }), e += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
          }
          u(e) && e.parent().is(t.inner) || t.inner.append(e), a.trigger("beforeShow"), t.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? c.prevMethod && a.transitions[c.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? t.nextMethod : t.openMethod](), a._preloadImages()
        }
      },
      _setDimension: function() {
        var t, e, o, r, n, s, l, c, h, u, d, f, v, y, w, x = a.getViewport(),
          b = 0,
          k = !1,
          S = !1,
          T = a.wrap,
          z = a.skin,
          C = a.inner,
          _ = a.current,
          M = _.width,
          E = _.height,
          A = _.minWidth,
          L = _.minHeight,
          B = _.maxWidth,
          N = _.maxHeight,
          P = _.scrolling,
          R = _.scrollOutside ? _.scrollbarWidth : 0,
          O = _.margin,
          I = m(O[1] + O[3]),
          H = m(O[0] + O[2]);
        if (T.add(z).add(C).width("auto").height("auto").removeClass("fancybox-tmp"), t = m(z.outerWidth(!0) - z.width()), e = m(z.outerHeight(!0) - z.height()), o = I + t, r = H + e, n = p(M) ? (x.w - o) * m(M) / 100 : M, s = p(E) ? (x.h - r) * m(E) / 100 : E, "iframe" === _.type) {
          if (y = _.content, _.autoHeight && 1 === y.data("ready")) try {
            y[0].contentWindow.document.location && (C.width(n).height(9999), w = y.contents().find("body"), R && w.css("overflow-x", "hidden"), s = w.outerHeight(!0))
          } catch (j) {}
        } else(_.autoWidth || _.autoHeight) && (C.addClass("fancybox-tmp"), _.autoWidth || C.width(n), _.autoHeight || C.height(s), _.autoWidth && (n = C.width()), _.autoHeight && (s = C.height()), C.removeClass("fancybox-tmp"));
        if (M = m(n), E = m(s), h = n / s, A = m(p(A) ? m(A, "w") - o : A), B = m(p(B) ? m(B, "w") - o : B), L = m(p(L) ? m(L, "h") - r : L), N = m(p(N) ? m(N, "h") - r : N), l = B, c = N, _.fitToView && (B = Math.min(x.w - o, B), N = Math.min(x.h - r, N)), f = x.w - I, v = x.h - H, _.aspectRatio ? (M > B && (M = B, E = m(M / h)), E > N && (E = N, M = m(E * h)), A > M && (M = A, E = m(M / h)), L > E && (E = L, M = m(E * h))) : (M = Math.max(A, Math.min(M, B)), _.autoHeight && "iframe" !== _.type && (C.width(M), E = C.height()), E = Math.max(L, Math.min(E, N))), _.fitToView)
          if (C.width(M).height(E), T.width(M + t), u = T.width(), d = T.height(), _.aspectRatio)
            for (;
              (u > f || d > v) && M > A && E > L && !(b++ > 19);) E = Math.max(L, Math.min(N, E - 10)), M = m(E * h), A > M && (M = A, E = m(M / h)), M > B && (M = B, E = m(M / h)), C.width(M).height(E), T.width(M + t), u = T.width(), d = T.height();
          else M = Math.max(A, Math.min(M, M - (u - f))), E = Math.max(L, Math.min(E, E - (d - v)));
        R && "auto" === P && s > E && f > M + t + R && (M += R), C.width(M).height(E), T.width(M + t), u = T.width(), d = T.height(), k = (u > f || d > v) && M > A && E > L, S = _.aspectRatio ? l > M && c > E && n > M && s > E : (l > M || c > E) && (n > M || s > E), i.extend(_, {
          dim: {
            width: g(u),
            height: g(d)
          },
          origWidth: n,
          origHeight: s,
          canShrink: k,
          canExpand: S,
          wPadding: t,
          hPadding: e,
          wrapSpace: d - z.outerHeight(!0),
          skinSpace: z.height() - E
        }), !y && _.autoHeight && E > L && N > E && !S && C.height("auto")
      },
      _getPosition: function(t) {
        var e = a.current,
          i = a.getViewport(),
          o = e.margin,
          r = a.wrap.width() + o[1] + o[3],
          n = a.wrap.height() + o[0] + o[2],
          s = {
            position: "absolute",
            top: o[0],
            left: o[3]
          };
        return e.autoCenter && e.fixed && !t && n <= i.h && r <= i.w ? s.position = "fixed" : e.locked || (s.top += i.y, s.left += i.x), s.top = g(Math.max(s.top, s.top + (i.h - n) * e.topRatio)), s.left = g(Math.max(s.left, s.left + (i.w - r) * e.leftRatio)), s
      },
      _afterZoomIn: function() {
        var t = a.current;
        t && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function(e) {
          i(e.target).is("a") || i(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(t) {
          t.preventDefault(), a.close()
        }), t.arrows && a.group.length > 1 && ((t.loop || t.index > 0) && i(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && i(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
      },
      _afterZoomOut: function(t) {
        t = t || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {
          group: {},
          opts: {},
          router: !1,
          current: null,
          isActive: !1,
          isOpened: !1,
          isOpen: !1,
          isClosing: !1,
          wrap: null,
          skin: null,
          outer: null,
          inner: null
        }), a.trigger("afterClose", t)
      }
    }), a.transitions = {
      getOrigPosition: function() {
        var t = a.current,
          e = t.element,
          i = t.orig,
          o = {},
          r = 50,
          n = 50,
          s = t.hPadding,
          l = t.wPadding,
          c = a.getViewport();
        return !i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), u(i) ? (o = i.offset(), i.is("img") && (r = i.outerWidth(), n = i.outerHeight())) : (o.top = c.y + (c.h - n) * t.topRatio, o.left = c.x + (c.w - r) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (o.top -= c.y, o.left -= c.x), o = {
          top: g(o.top - s * t.topRatio),
          left: g(o.left - l * t.leftRatio),
          width: g(r + l),
          height: g(n + s)
        }
      },
      step: function(t, e) {
        var i, o, r, n = e.prop,
          s = a.current,
          l = s.wrapSpace,
          c = s.skinSpace;
        ("width" === n || "height" === n) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (i = 1 - i), o = "width" === n ? s.wPadding : s.hPadding, r = t - o, a.skin[n](m("width" === n ? r : r - l * i)), a.inner[n](m("width" === n ? r : r - l * i - c * i)))
      },
      zoomIn: function() {
        var t = a.current,
          e = t.pos,
          o = t.openEffect,
          r = "elastic" === o,
          n = i.extend({
            opacity: 1
          }, e);
        delete n.position, r ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === o && (e.opacity = .1), a.wrap.css(e).animate(n, {
          duration: "none" === o ? 0 : t.openSpeed,
          easing: t.openEasing,
          step: r ? this.step : null,
          complete: a._afterZoomIn
        })
      },
      zoomOut: function() {
        var t = a.current,
          e = t.closeEffect,
          i = "elastic" === e,
          o = {
            opacity: .1
          };
        i && (o = this.getOrigPosition(), t.closeOpacity && (o.opacity = .1)), a.wrap.animate(o, {
          duration: "none" === e ? 0 : t.closeSpeed,
          easing: t.closeEasing,
          step: i ? this.step : null,
          complete: a._afterZoomOut
        })
      },
      changeIn: function() {
        var t, e = a.current,
          i = e.nextEffect,
          o = e.pos,
          r = {
            opacity: 1
          },
          n = a.direction,
          s = 200;
        o.opacity = .1, "elastic" === i && (t = "down" === n || "up" === n ? "top" : "left", "down" === n || "right" === n ? (o[t] = g(m(o[t]) - s), r[t] = "+=" + s + "px") : (o[t] = g(m(o[t]) + s), r[t] = "-=" + s + "px")), "none" === i ? a._afterZoomIn() : a.wrap.css(o).animate(r, {
          duration: e.nextSpeed,
          easing: e.nextEasing,
          complete: a._afterZoomIn
        })
      },
      changeOut: function() {
        var t = a.previous,
          e = t.prevEffect,
          o = {
            opacity: .1
          },
          r = a.direction,
          n = 200;
        "elastic" === e && (o["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=" + n + "px"), t.wrap.animate(o, {
          duration: "none" === e ? 0 : t.prevSpeed,
          easing: t.prevEasing,
          complete: function() {
            i(this).trigger("onReset").remove()
          }
        })
      }
    }, a.helpers.overlay = {
      defaults: {
        closeClick: !0,
        speedOut: 200,
        showEarly: !0,
        css: {},
        locked: !h,
        fixed: !0
      },
      overlay: null,
      fixed: !1,
      el: i("html"),
      create: function(t) {
        t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed = !1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
      },
      open: function(t) {
        var e = this;
        t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (n.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
          return i(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0
        }), this.overlay.css(t.css).show()
      },
      close: function() {
        var t, e;
        n.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = n.scrollTop(), e = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
          overlay: null,
          fixed: !1
        })
      },
      update: function() {
        var t, i = "100%";
        this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), s.width() > t && (i = s.width())) : s.width() > n.width() && (i = s.width()), this.overlay.width(i).height(s.height())
      },
      onReady: function(t, e) {
        var o = this.overlay;
        i(".fancybox-overlay").stop(!0, !0), o || this.create(t), t.locked && this.fixed && e.fixed && (o || (this.margin = s.height() > n.height() ? i("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
      },
      beforeShow: function(t, e) {
        var o, r;
        e.locked && (this.margin !== !1 && (i("*").filter(function() {
          return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), o = n.scrollTop(), r = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(o).scrollLeft(r)), this.open(t)
      },
      onUpdate: function() {
        this.fixed || this.update()
      },
      afterClose: function(t) {
        this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
      }
    }, a.helpers.title = {
      defaults: {
        type: "float",
        position: "bottom"
      },
      beforeShow: function(t) {
        var e, o, r = a.current,
          n = r.title,
          s = t.type;
        if (i.isFunction(n) && (n = n.call(r.element, r)), d(n) && "" !== i.trim(n)) {
          switch (e = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + n + "</div>"), s) {
            case "inside":
              o = a.skin;
              break;
            case "outside":
              o = a.wrap;
              break;
            case "over":
              o = a.inner;
              break;
            default:
              o = a.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(m(e.css("margin-bottom")))
          }
          e["top" === t.position ? "prependTo" : "appendTo"](o)
        }
      }
    }, i.fn.fancybox = function(t) {
      var e, o = i(this),
        r = this.selector || "",
        n = function(n) {
          var s, l, c = i(this).blur(),
            h = e;
          n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || c.is(".fancybox-wrap") || (s = t.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = r.length ? i(r) : o, c = c.filter("[" + s + '="' + l + '"]'), h = c.index(this)), t.index = h, a.open(c, t) !== !1 && n.preventDefault())
        };
      return t = t || {}, e = t.index || 0, r && t.live !== !1 ? s.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", n) : o.unbind("click.fb-start").bind("click.fb-start", n), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, s.ready(function() {
      var e, n;
      i.scrollbarWidth === o && (i.scrollbarWidth = function() {
        var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
          e = t.children(),
          o = e.innerWidth() - e.height(99).innerWidth();
        return t.remove(), o
      }), i.support.fixedPosition === o && (i.support.fixedPosition = function() {
        var t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
          e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
        return t.remove(), e
      }()), i.extend(a.defaults, {
        scrollbarWidth: i.scrollbarWidth(),
        fixed: i.support.fixedPosition,
        parent: i("body")
      }), e = i(t).width(), r.addClass("fancybox-lock-test"), n = i(t).width(), r.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (n - e) + "px;}</style>").appendTo("head")
    })
  }(window, document, jQuery),
  function(t) {
    var e = t.fancybox;
    e.helpers.buttons = {
      defaults: {
        skipSingle: !1,
        position: "top",
        tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
      },
      list: null,
      buttons: null,
      beforeLoad: function(t, e) {
        return t.skipSingle && e.group.length < 2 ? (e.helpers.buttons = !1, void(e.closeBtn = !0)) : void(e.margin["bottom" === t.position ? 2 : 0] += 30)
      },
      onPlayStart: function() {
        this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
      },
      onPlayEnd: function() {
        this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
      },
      afterShow: function(i, o) {
        var r = this.buttons;
        r || (this.list = t(i.tpl).addClass(i.position).appendTo("body"), r = {
          prev: this.list.find(".btnPrev").click(e.prev),
          next: this.list.find(".btnNext").click(e.next),
          play: this.list.find(".btnPlay").click(e.play),
          toggle: this.list.find(".btnToggle").click(e.toggle),
          close: this.list.find(".btnClose").click(e.close)
        }), o.index > 0 || o.loop ? r.prev.removeClass("btnDisabled") : r.prev.addClass("btnDisabled"), o.loop || o.index < o.group.length - 1 ? (r.next.removeClass("btnDisabled"), r.play.removeClass("btnDisabled")) : (r.next.addClass("btnDisabled"), r.play.addClass("btnDisabled")), this.buttons = r, this.onUpdate(i, o)
      },
      onUpdate: function(t, e) {
        var i;
        this.buttons && (i = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), e.canShrink ? i.addClass("btnToggleOn") : e.canExpand || i.addClass("btnDisabled"))
      },
      beforeClose: function() {
        this.list && this.list.remove(), this.list = null, this.buttons = null
      }
    }
  }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, i, o, r) {
      return jQuery.easing[jQuery.easing.def](t, e, i, o, r)
    },
    easeInQuad: function(t, e, i, o, r) {
      return o * (e /= r) * e + i
    },
    easeOutQuad: function(t, e, i, o, r) {
      return -o * (e /= r) * (e - 2) + i
    },
    easeInOutQuad: function(t, e, i, o, r) {
      return (e /= r / 2) < 1 ? o / 2 * e * e + i : -o / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function(t, e, i, o, r) {
      return o * (e /= r) * e * e + i
    },
    easeOutCubic: function(t, e, i, o, r) {
      return o * ((e = e / r - 1) * e * e + 1) + i
    },
    easeInOutCubic: function(t, e, i, o, r) {
      return (e /= r / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function(t, e, i, o, r) {
      return o * (e /= r) * e * e * e + i
    },
    easeOutQuart: function(t, e, i, o, r) {
      return -o * ((e = e / r - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function(t, e, i, o, r) {
      return (e /= r / 2) < 1 ? o / 2 * e * e * e * e + i : -o / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function(t, e, i, o, r) {
      return o * (e /= r) * e * e * e * e + i
    },
    easeOutQuint: function(t, e, i, o, r) {
      return o * ((e = e / r - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function(t, e, i, o, r) {
      return (e /= r / 2) < 1 ? o / 2 * e * e * e * e * e + i : o / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function(t, e, i, o, r) {
      return -o * Math.cos(e / r * (Math.PI / 2)) + o + i
    },
    easeOutSine: function(t, e, i, o, r) {
      return o * Math.sin(e / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function(t, e, i, o, r) {
      return -o / 2 * (Math.cos(Math.PI * e / r) - 1) + i
    },
    easeInExpo: function(t, e, i, o, r) {
      return 0 == e ? i : o * Math.pow(2, 10 * (e / r - 1)) + i
    },
    easeOutExpo: function(t, e, i, o, r) {
      return e == r ? i + o : o * (-Math.pow(2, -10 * e / r) + 1) + i
    },
    easeInOutExpo: function(t, e, i, o, r) {
      return 0 == e ? i : e == r ? i + o : (e /= r / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + i : o / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    },
    easeInCirc: function(t, e, i, o, r) {
      return -o * (Math.sqrt(1 - (e /= r) * e) - 1) + i
    },
    easeOutCirc: function(t, e, i, o, r) {
      return o * Math.sqrt(1 - (e = e / r - 1) * e) + i
    },
    easeInOutCirc: function(t, e, i, o, r) {
      return (e /= r / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + i : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function(t, e, i, o, r) {
      var n = 1.70158,
        s = 0,
        a = o;
      if (0 == e) return i;
      if (1 == (e /= r)) return i + o;
      if (s || (s = .3 * r), a < Math.abs(o)) {
        a = o;
        var n = s / 4
      } else var n = s / (2 * Math.PI) * Math.asin(o / a);
      return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - n) * Math.PI / s)) + i
    },
    easeOutElastic: function(t, e, i, o, r) {
      var n = 1.70158,
        s = 0,
        a = o;
      if (0 == e) return i;
      if (1 == (e /= r)) return i + o;
      if (s || (s = .3 * r), a < Math.abs(o)) {
        a = o;
        var n = s / 4
      } else var n = s / (2 * Math.PI) * Math.asin(o / a);
      return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - n) * Math.PI / s) + o + i
    },
    easeInOutElastic: function(t, e, i, o, r) {
      var n = 1.70158,
        s = 0,
        a = o;
      if (0 == e) return i;
      if (2 == (e /= r / 2)) return i + o;
      if (s || (s = .3 * r * 1.5), a < Math.abs(o)) {
        a = o;
        var n = s / 4
      } else var n = s / (2 * Math.PI) * Math.asin(o / a);
      return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - n) * Math.PI / s) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - n) * Math.PI / s) * .5 + o + i
    },
    easeInBack: function(t, e, i, o, r, n) {
      return void 0 == n && (n = 1.70158), o * (e /= r) * e * ((n + 1) * e - n) + i
    },
    easeOutBack: function(t, e, i, o, r, n) {
      return void 0 == n && (n = 1.70158), o * ((e = e / r - 1) * e * ((n + 1) * e + n) + 1) + i
    },
    easeInOutBack: function(t, e, i, o, r, n) {
      return void 0 == n && (n = 1.70158), (e /= r / 2) < 1 ? o / 2 * e * e * (((n *= 1.525) + 1) * e - n) + i : o / 2 * ((e -= 2) * e * (((n *= 1.525) + 1) * e + n) + 2) + i
    },
    easeInBounce: function(t, e, i, o, r) {
      return o - jQuery.easing.easeOutBounce(t, r - e, 0, o, r) + i
    },
    easeOutBounce: function(t, e, i, o, r) {
      return (e /= r) < 1 / 2.75 ? 7.5625 * o * e * e + i : 2 / 2.75 > e ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function(t, e, i, o, r) {
      return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, o, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, o, r) + .5 * o + i
    }
  }), window.scrollReveal = function(t) {
    "use strict";

    function e(e) {
      this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), 1 == this.options.init && this.init()
    }
    return e.prototype = {
      defaults: {
        after: "0s",
        enter: "bottom",
        move: "24px",
        over: "0.66s",
        easing: "ease-in-out",
        viewportFactor: .33,
        reset: !1,
        init: !0
      },
      init: function() {
        this.scrolled = !1;
        var e = this;
        this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scrollReveal]")), this.elems.forEach(function(t) {
          e.update(t)
        });
        var i = function() {
            e.scrolled || (e.scrolled = !0, setTimeout(function() {
              e._scrollPage()
            }, 60))
          },
          o = function() {
            function t() {
              e._scrollPage(), e.resizeTimeout = null
            }
            e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
          };
        t.addEventListener("scroll", i, !1), t.addEventListener("resize", o, !1)
      },
      _scrollPage: function() {
        var t = this;
        this.elems.forEach(function(e) {
          t.update(e)
        }), this.scrolled = !1
      },
      parseLanguage: function(t) {
        function e(t) {
          var e = [],
            i = ["from", "the", "and", "then", "but", "with"];
          return t.forEach(function(t) {
            i.indexOf(t) > -1 || e.push(t)
          }), e
        }
        var i = t.getAttribute("data-scrollreveal").split(/[, ]+/),
          o = {};
        return i = e(i), i.forEach(function(t, e) {
          switch (t) {
            case "enter":
              return void(o.enter = i[e + 1]);
            case "after":
              return void(o.after = i[e + 1]);
            case "wait":
              return void(o.after = i[e + 1]);
            case "move":
              return void(o.move = i[e + 1]);
            case "ease":
              return o.move = i[e + 1], void(o.ease = "ease");
            case "ease-in":
              return o.move = i[e + 1], void(o.easing = "ease-in");
            case "ease-in-out":
              return o.move = i[e + 1], void(o.easing = "ease-in-out");
            case "ease-out":
              return o.move = i[e + 1], void(o.easing = "ease-out");
            case "over":
              return void(o.over = i[e + 1]);
            default:
              return
          }
        }), o
      },
      update: function(t) {
        var e = this.genCSS(t);
        return t.getAttribute("data-scrollReveal-initialized") || (t.setAttribute("style", e.initial), t.setAttribute("data-scrollReveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scrollReveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", e.target + e.transition), void(this.options.reset || setTimeout(function() {
          t.removeAttribute("style"), t.setAttribute("data-scrollReveal-complete", !0)
        }, e.totalDuration))) : void 0 : void(this.options.reset && t.setAttribute("style", e.initial + e.reset))
      },
      genCSS: function(t) {
        var e, i, o = this.parseLanguage(t);
        o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move = "-" + this.options.move);
        var r = o.move || this.options.move,
          n = o.over || this.options.over,
          s = o.after || this.options.after,
          a = o.easing || this.options.easing,
          l = "-webkit-transition: all " + n + " " + a + " " + s + ";-moz-transition: all " + n + " " + a + " " + s + ";-o-transition: all " + n + " " + a + " " + s + ";transition: all " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
          c = "-webkit-transition: all " + n + " " + a + " 0s;-moz-transition: all " + n + " " + a + " 0s;-o-transition: all " + n + " " + a + " 0s;transition: all " + n + " " + a + " 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
          h = "-webkit-transform: translate" + i + "(" + r + ");-moz-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: 0;",
          u = "-webkit-transform: translate" + i + "(0);-moz-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
        return {
          transition: l,
          initial: h,
          target: u,
          reset: c,
          totalDuration: 1e3 * (parseFloat(n) + parseFloat(s))
        }
      },
      getViewportH: function() {
        var e = this.docElem.clientHeight,
          i = t.innerHeight;
        return i > e ? i : e
      },
      getOffset: function(t) {
        var e = 0,
          i = 0;
        do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
        return {
          top: e,
          left: i
        }
      },
      isElementInViewport: function(e, i) {
        var o = t.pageYOffset,
          r = o + this.getViewportH(),
          n = e.offsetHeight,
          s = this.getOffset(e).top,
          a = s + n,
          i = i || 0;
        return r >= s + n * i && a >= o
      },
      extend: function(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
      }
    }, e
  }(window);