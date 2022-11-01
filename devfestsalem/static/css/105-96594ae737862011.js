(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [105], {
        9361: function(e, t) {
            "use strict";
            t.Z = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        6010: function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n, o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e) {
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
                    else
                        for (t in e) e[t] && (o && (o += " "), o += t)
                }
                return o
            }
            t.Z = function() {
                for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = r(e)) && (o && (o += " "), o += t);
                return o
            }
        },
        8461: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(9361).Z,
                o = n(4941).Z,
                a = n(3929).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, n, l, u = e.src,
                    m = e.sizes,
                    _ = e.unoptimized,
                    w = void 0 !== _ && _,
                    x = e.priority,
                    S = void 0 !== x && x,
                    P = e.loading,
                    C = e.className,
                    E = e.quality,
                    T = e.width,
                    R = e.height,
                    I = e.fill,
                    L = e.style,
                    k = e.onLoadingComplete,
                    A = e.placeholder,
                    N = void 0 === A ? "empty" : A,
                    M = e.blurDataURL,
                    z = s(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoadingComplete", "placeholder", "blurDataURL"]),
                    D = c.useContext($.ImageConfigContext),
                    F = c.useMemo(function() {
                        var e = g || D || p.imageConfigDefault,
                            t = a(e.deviceSizes).concat(a(e.imageSizes)).sort(function(e, t) {
                                return e - t
                            }),
                            n = e.deviceSizes.sort(function(e, t) {
                                return e - t
                            });
                        return i({}, e, {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }, [D]),
                    O = z,
                    U = b;
                if ("loader" in O) {
                    if (O.loader) {
                        var j = O.loader;
                        U = function(e) {
                            e.config;
                            var t = s(e, ["config"]);
                            return j(t)
                        }
                    }
                    delete O.loader
                }
                var H, W, Z = "",
                    q = h(T),
                    B = h(R);
                if (H = u, "object" == typeof H && (v(H) || void 0 !== (W = H).src)) {
                    var G = v(u) ? u.default : u;
                    if (!G.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));
                    if (!G.height || !G.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));
                    if (t = G.blurWidth, n = G.blurHeight, M = M || G.blurDataURL, Z = G.src, !I) {
                        if (q || B) {
                            if (q && !B) {
                                var K = q / G.width;
                                B = Math.round(G.height * K)
                            } else if (!q && B) {
                                var V = B / G.height;
                                q = Math.round(G.width * V)
                            }
                        } else q = G.width, B = G.height
                    }
                }
                u = "string" == typeof u ? u : Z;
                var Y = !S && ("lazy" === P || void 0 === P);
                (u.startsWith("data:") || u.startsWith("blob:")) && (w = !0, Y = !1), F.unoptimized && (w = !0);
                var J = o(c.useState(!1), 2),
                    Q = J[0],
                    X = J[1],
                    ee = o(c.useState(!1), 2),
                    et = ee[0],
                    en = ee[1],
                    er = h(E),
                    eo = Object.assign(I ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    } : {}, et ? {} : {
                        color: "transparent"
                    }, L),
                    ea = "blur" === N && M && !Q ? {
                        backgroundSize: eo.objectFit || "cover",
                        backgroundPosition: eo.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({
                            widthInt: q,
                            heightInt: B,
                            blurWidth: t,
                            blurHeight: n,
                            blurDataURL: M
                        }), '")')
                    } : {},
                    ei = function(e) {
                        var t = e.config,
                            n = e.src,
                            r = e.unoptimized,
                            o = e.width,
                            i = e.quality,
                            l = e.sizes,
                            u = e.loader;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        var s = function(e, t, n) {
                                var r = e.deviceSizes,
                                    o = e.allSizes;
                                if (n) {
                                    for (var i = /(^|\s)(1?\d?\d)vw/g, l = []; u = i.exec(n); u) l.push(parseInt(u[2]));
                                    if (l.length) {
                                        var u, s, c = .01 * (s = Math).min.apply(s, a(l));
                                        return {
                                            widths: o.filter(function(e) {
                                                return e >= r[0] * c
                                            }),
                                            kind: "w"
                                        }
                                    }
                                    return {
                                        widths: o,
                                        kind: "w"
                                    }
                                }
                                return "number" != typeof t ? {
                                    widths: r,
                                    kind: "w"
                                } : {
                                    widths: a(new Set([t, 2 * t].map(function(e) {
                                        return o.find(function(t) {
                                            return t >= e
                                        }) || o[o.length - 1]
                                    }))),
                                    kind: "x"
                                }
                            }(t, o, l),
                            c = s.widths,
                            f = s.kind,
                            d = c.length - 1;
                        return {
                            sizes: l || "w" !== f ? l : "100vw",
                            srcSet: c.map(function(e, r) {
                                return "".concat(u({
                                    config: t,
                                    src: n,
                                    quality: i,
                                    width: e
                                }), " ").concat("w" === f ? e : r + 1).concat(f)
                            }).join(", "),
                            src: u({
                                config: t,
                                src: n,
                                quality: i,
                                width: c[d]
                            })
                        }
                    }({
                        config: F,
                        src: u,
                        unoptimized: w,
                        width: q,
                        quality: er,
                        sizes: m,
                        loader: U
                    }),
                    el = u,
                    eu = "imagesizes";
                eu = "imageSizes";
                var es = (r(l = {}, "imageSrcSet", ei.srcSet), r(l, eu, ei.sizes), l),
                    ec = c.useRef(k);
                c.useEffect(function() {
                    ec.current = k
                }, [k]);
                var ef = i({
                    isLazy: Y,
                    imgAttributes: ei,
                    heightInt: B,
                    widthInt: q,
                    qualityInt: er,
                    className: C,
                    imgStyle: eo,
                    blurStyle: ea,
                    loading: P,
                    config: F,
                    fill: I,
                    unoptimized: w,
                    placeholder: N,
                    loader: U,
                    srcString: el,
                    onLoadingCompleteRef: ec,
                    setBlurComplete: X,
                    setShowAltText: en
                }, O);
                return c.default.createElement(c.default.Fragment, null, c.default.createElement(y, Object.assign({}, ef)), S ? c.default.createElement(f.default, null, c.default.createElement("link", Object.assign({
                    key: "__nimg-" + ei.src + ei.srcSet + ei.sizes,
                    rel: "preload",
                    as: "image",
                    href: ei.srcSet ? void 0 : ei.src
                }, es))) : null)
            };
            var i = n(6495).Z,
                l = n(2648).Z,
                u = n(1598).Z,
                s = n(7273).Z,
                c = u(n(7294)),
                f = l(n(5443)),
                d = n(2730),
                p = n(9309),
                $ = n(9977);
            n(3794);
            var g = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function v(e) {
                return void 0 !== e.default
            }

            function h(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function m(e, t, n, r, o) {
                e && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                    e.parentNode && ("blur" === n && o(!0), (null == r ? void 0 : r.current) && r.current(e))
                }))
            }
            var y = function(e) {
                var t = e.imgAttributes,
                    n = e.heightInt,
                    r = e.widthInt,
                    o = (e.qualityInt, e.className),
                    a = e.imgStyle,
                    l = e.blurStyle,
                    u = e.isLazy,
                    f = e.fill,
                    d = e.placeholder,
                    p = e.loading,
                    $ = e.srcString,
                    g = (e.config, e.unoptimized, e.loader, e.onLoadingCompleteRef),
                    v = e.setBlurComplete,
                    h = e.setShowAltText,
                    y = e.onLoad,
                    b = e.onError,
                    _ = s(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                return p = u ? "lazy" : p, c.default.createElement(c.default.Fragment, null, c.default.createElement("img", Object.assign({}, _, t, {
                    width: r,
                    height: n,
                    decoding: "async",
                    "data-nimg": "future".concat(f ? "-fill" : ""),
                    className: o,
                    loading: p,
                    style: i({}, a, l),
                    ref: c.useCallback(function(e) {
                        e && (b && (e.src = e.src), e.complete && m(e, $, d, g, v))
                    }, [$, d, g, v, b, ]),
                    onLoad: function(e) {
                        m(e.currentTarget, $, d, g, v), y && y(e)
                    },
                    onError: function(e) {
                        h(!0), "blur" === d && v(!0), b && b(e)
                    }
                })))
            };

            function b(e) {
                var t = e.config,
                    n = e.src,
                    r = e.width,
                    o = e.quality;
                return n.endsWith(".svg") && !t.dangerouslyAllowSVG ? n : "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1210: function(e, t) {
            "use strict";

            function n(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(2648).Z,
                a = n(7273).Z,
                i = o(n(7294)),
                l = n(6273),
                u = n(2725),
                s = n(3462),
                c = n(1018),
                f = n(7190),
                d = n(1210),
                p = n(8684),
                $ = void 0 !== i.default.useTransition,
                g = {};

            function v(e, t, n, r) {
                if (e && l.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, r)).catch(function(e) {});
                    var o = r && void 0 !== r.locale ? r.locale : e && e.locale;
                    g[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var h = i.default.forwardRef(function(e, t) {
                var n, o, h = e.href,
                    m = e.as,
                    y = e.children,
                    b = e.prefetch,
                    _ = e.passHref,
                    w = e.replace,
                    x = e.shallow,
                    S = e.scroll,
                    P = e.locale,
                    C = e.onClick,
                    E = e.onMouseEnter,
                    T = e.onTouchStart,
                    R = e.legacyBehavior,
                    I = void 0 === R ? !0 !== Boolean(!0) : R,
                    L = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = y, I && ("string" == typeof n || "number" == typeof n) && (n = i.default.createElement("a", null, n));
                var k = !1 !== b,
                    A = r($ ? i.default.useTransition() : [], 2)[1],
                    N = i.default.useContext(s.RouterContext),
                    M = i.default.useContext(c.AppRouterContext);
                M && (N = M);
                var z = i.default.useMemo(function() {
                        var e = r(l.resolveHref(N, h, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: m ? l.resolveHref(N, m) : n || t
                        }
                    }, [N, h, m]),
                    D = z.href,
                    F = z.as,
                    O = i.default.useRef(D),
                    U = i.default.useRef(F);
                I && (o = i.default.Children.only(n));
                var j = I ? o && "object" == typeof o && o.ref : t,
                    H = r(f.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    W = H[0],
                    Z = H[1],
                    q = H[2],
                    B = i.default.useCallback(function(e) {
                        (U.current !== F || O.current !== D) && (q(), U.current = F, O.current = D), W(e), j && ("function" == typeof j ? j(e) : "object" == typeof j && (j.current = e))
                    }, [F, j, D, q, W]);
                i.default.useEffect(function() {
                    var e = Z && k && l.isLocalURL(D),
                        t = void 0 !== P ? P : N && N.locale,
                        n = g[D + "%" + F + (t ? "%" + t : "")];
                    e && !n && v(N, D, F, {
                        locale: t
                    })
                }, [F, D, Z, P, k, N]);
                var G = {
                    ref: B,
                    onClick: function(e) {
                        I || "function" != typeof C || C(e), I && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, a, i, u, s, c) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(d = (f = e).currentTarget.target) || "_self" === d) && !f.metaKey && !f.ctrlKey && !f.shiftKey && !f.altKey && (!f.nativeEvent || 2 !== f.nativeEvent.which) && l.isLocalURL(n)) {
                                e.preventDefault();
                                var f, d, p = function() {
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: a,
                                        locale: u,
                                        scroll: i
                                    }) : t[o ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !c
                                    })
                                };
                                s ? s(p) : p()
                            }
                        }(e, N, D, F, w, x, S, P, M ? A : void 0, k)
                    },
                    onMouseEnter: function(e) {
                        I || "function" != typeof E || E(e), I && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), !(!k && M) && l.isLocalURL(D) && v(N, D, F, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        I || "function" != typeof T || T(e), I && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), !(!k && M) && l.isLocalURL(D) && v(N, D, F, {
                            priority: !0
                        })
                    }
                };
                if (!I || _ || "a" === o.type && !("href" in o.props)) {
                    var K = void 0 !== P ? P : N && N.locale,
                        V = N && N.isLocaleDomain && d.getDomainLocale(F, K, N.locales, N.domainLocales);
                    G.href = V || p.addBasePath(u.addLocale(F, K, N && N.defaultLocale))
                }
                return I ? i.default.cloneElement(o, G) : i.default.createElement("a", Object.assign({}, L, G), n)
            });
            t.default = h, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7190: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(4941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    s = e.disabled || !i,
                    c = r(o.useState(!1), 2),
                    f = c[0],
                    d = c[1],
                    p = r(o.useState(null), 2),
                    $ = p[0],
                    g = p[1];
                return o.useEffect(function() {
                    if (i) {
                        if (!s && !f && $ && $.tagName) {
                            var e, r, o, c, p, g, v;
                            return e = $, r = function(e) {
                                    return e && d(e)
                                }, p = (c = function(e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = u.find(function(e) {
                                            return e.root === n.root && e.margin === n.margin
                                        });
                                    if (r && (t = l.get(r))) return t;
                                    var o = new Map;
                                    return t = {
                                        id: n,
                                        observer: new IntersectionObserver(function(e) {
                                            e.forEach(function(e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e),
                                        elements: o
                                    }, u.push(n), l.set(n, t), t
                                }(o = {
                                    root: null == t ? void 0 : t.current,
                                    rootMargin: n
                                })).id, g = c.observer, (v = c.elements).set(e, r), g.observe(e),
                                function() {
                                    if (v.delete(e), g.unobserve(e), 0 === v.size) {
                                        g.disconnect(), l.delete(p);
                                        var t = u.findIndex(function(e) {
                                            return e.root === p.root && e.margin === p.margin
                                        });
                                        t > -1 && u.splice(t, 1)
                                    }
                                }
                        }
                    } else if (!f) {
                        var h = a.requestIdleCallback(function() {
                            return d(!0)
                        });
                        return function() {
                            return a.cancelIdleCallback(h)
                        }
                    }
                }, [$, s, n, t, f]), [g, f, o.useCallback(function() {
                    d(!1)
                }, [])]
            };
            var o = n(7294),
                a = n(9311),
                i = "function" == typeof IntersectionObserver,
                l = new Map,
                u = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var r = (0, n(2648).Z)(n(7294)),
                o = r.default.createContext(null);
            t.AppRouterContext = o;
            var a = r.default.createContext(null);
            t.LayoutRouterContext = a;
            var i = r.default.createContext(null);
            t.GlobalLayoutRouterContext = i
        },
        2730: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getImageBlurSvg = function(e) {
                var t = e.widthInt,
                    n = e.heightInt,
                    r = e.blurWidth,
                    o = e.blurHeight,
                    a = e.blurDataURL,
                    i = a.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r || t, " ").concat(o || n, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(i, "%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a, "'/%3E%3C/svg%3E")
            }
        },
        1608: function(e, t, n) {
            e.exports = n(8461)
        },
        9008: function(e, t, n) {
            e.exports = n(5443)
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        4298: function(e, t, n) {
            e.exports = n(699)
        },
        6910: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return el
                }
            });
            var r, o = n(7294);

            function a(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let o = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(o, a), o
            }
            var i, l, u = ((i = u || {})[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i),
                s = ((l = s || {})[l.Unmount = 0] = "Unmount", l[l.Hidden = 1] = "Hidden", l);

            function c({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: o,
                visible: i = !0,
                name: l
            }) {
                let u = d(t, e);
                if (i) return f(u, n, r, l);
                let s = null != o ? o : 0;
                if (2 & s) {
                    let {
                        static: c = !1,
                        ...p
                    } = u;
                    if (c) return f(p, n, r, l)
                }
                if (1 & s) {
                    let {
                        unmount: $ = !0,
                        ...g
                    } = u;
                    return a($ ? 0 : 1, {
                        0: () => null,
                        1: () => f({
                            ...g,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, l)
                    })
                }
                return f(u, n, r, l)
            }

            function f(e, t = {}, n, r) {
                let {
                    as: a = n,
                    children: i,
                    refName: l = "ref",
                    ...u
                } = g(e, ["unmount", "static"]), s = void 0 !== e.ref ? {
                    [l]: e.ref
                } : {}, c = "function" == typeof i ? i(t) : i;
                u.className && "function" == typeof u.className && (u.className = u.className(t));
                let f = {};
                if (t) {
                    let p = !1,
                        v = [];
                    for (let [h, m] of Object.entries(t)) "boolean" == typeof m && (p = !0), !0 === m && v.push(h);
                    p && (f["data-headlessui-state"] = v.join(" "))
                }
                if (a === o.Fragment && Object.keys($(u)).length > 0) {
                    if (!(0, o.isValidElement)(c) || Array.isArray(c) && c.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    return (0, o.cloneElement)(c, Object.assign({}, d(c.props, $(g(u, ["ref"]))), f, s, function(...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(c.ref, s.ref)))
                }
                return (0, o.createElement)(a, Object.assign({}, g(u, ["ref"]), a !== o.Fragment && s, a !== o.Fragment && f), c)
            }

            function d(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let o in r) o.startsWith("on") && "function" == typeof r[o] ? (null != n[o] || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
                for (let a in n) Object.assign(t, {
                    [a](e, ...t) {
                        let r = n[a];
                        for (let o of r) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                            o(e, ...t)
                        }
                    }
                });
                return t
            }

            function p(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function $(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function g(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
            let v = "undefined" == typeof window || "undefined" == typeof document,
                h = v ? o.useEffect : o.useLayoutEffect,
                m = {
                    serverHandoffComplete: !1
                },
                y = 0;

            function b() {
                return ++y
            }
            let _ = null != (r = o.useId) ? r : function() {
                let e = function() {
                        let [e, t] = (0, o.useState)(m.serverHandoffComplete);
                        return (0, o.useEffect)(() => {
                            !0 !== e && t(!0)
                        }, [e]), (0, o.useEffect)(() => {
                            !1 === m.serverHandoffComplete && (m.serverHandoffComplete = !0)
                        }, []), e
                    }(),
                    [t, n] = o.useState(e ? b : null);
                return h(() => {
                    null === t && n(b())
                }, [t]), null != t ? "" + t : void 0
            };
            var w, x = ((w = x || {}).Space = " ", w.Enter = "Enter", w.Escape = "Escape", w.Backspace = "Backspace", w.Delete = "Delete", w.ArrowLeft = "ArrowLeft", w.ArrowUp = "ArrowUp", w.ArrowRight = "ArrowRight", w.ArrowDown = "ArrowDown", w.Home = "Home", w.End = "End", w.PageUp = "PageUp", w.PageDown = "PageDown", w.Tab = "Tab", w);
            let S = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var P, C, E, T, R = ((P = R || {})[P.First = 1] = "First", P[P.Previous = 2] = "Previous", P[P.Next = 4] = "Next", P[P.Last = 8] = "Last", P[P.WrapAround = 16] = "WrapAround", P[P.NoScroll = 32] = "NoScroll", P),
                I = ((C = I || {})[C.Error = 0] = "Error", C[C.Overflow = 1] = "Overflow", C[C.Success = 2] = "Success", C[C.Underflow = 3] = "Underflow", C),
                L = ((E = L || {})[E.Previous = -1] = "Previous", E[E.Next = 1] = "Next", E),
                k = ((T = k || {})[T.Strict = 0] = "Strict", T[T.Loose = 1] = "Loose", T);

            function A(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let a = r.compareDocumentPosition(o);
                    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function N(e, t, n = !0, r = null) {
                var o, a, i;
                let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    u = Array.isArray(e) ? n ? A(e) : e : function(e = document.body) {
                        return null == e ? [] : Array.from(e.querySelectorAll(S))
                    }(e);
                r = null != r ? r : l.activeElement;
                let s = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
                        if (8 & t) return u.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    d = 0,
                    p = u.length,
                    $;
                do {
                    if (d >= p || d + p <= 0) return 0;
                    let g = c + d;
                    if (16 & t) g = (g + p) % p;
                    else {
                        if (g < 0) return 3;
                        if (g >= p) return 1
                    }
                    null == ($ = u[g]) || $.focus(f), d += s
                } while ($ !== l.activeElement);
                return 6 & t && null != (i = null == (a = null == (o = $) ? void 0 : o.matches) ? void 0 : a.call(o, "textarea,input")) && i && $.select(), $.hasAttribute("tabindex") || $.setAttribute("tabindex", "0"), 2
            }

            function M(e) {
                let t = (0, o.useRef)(e);
                return h(() => {
                    t.current = e
                }, [e]), t
            }
            let z = function(e) {
                    let t = M(e);
                    return o.useCallback((...e) => t.current(...e), [t])
                },
                D = Symbol();

            function F(...e) {
                let t = (0, o.useRef)(e);
                (0, o.useEffect)(() => {
                    t.current = e
                }, [e]);
                let n = z(e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[D])) ? void 0 : n
            }

            function O(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }
            var U, j = ((U = j || {})[U.None = 1] = "None", U[U.Focusable = 2] = "Focusable", U[U.Hidden = 4] = "Hidden", U);
            let H = p(function(e, t) {
                let {
                    features: n = 1,
                    ...r
                } = e;
                return c({
                    ourProps: {
                        ref: t,
                        "aria-hidden": (2 & n) == 2 || void 0,
                        style: {
                            position: "fixed",
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...(4 & n) == 4 && (2 & n) != 2 && {
                                display: "none"
                            }
                        }
                    },
                    theirProps: r,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            });

            function W({
                onFocus: e
            }) {
                let [t, n] = (0, o.useState)(!0);
                return t ? o.createElement(H, {
                    as: "button",
                    type: "button",
                    features: j.Focusable,
                    onFocus(t) {
                        t.preventDefault();
                        let r, o = 50;

                        function a() {
                            if (o-- <= 0) {
                                r && cancelAnimationFrame(r);
                                return
                            }
                            if (e()) {
                                n(!1), cancelAnimationFrame(r);
                                return
                            }
                            r = requestAnimationFrame(a)
                        }
                        r = requestAnimationFrame(a)
                    }
                }) : null
            }
            var Z, q = ((Z = q || {})[Z.SetSelectedIndex = 0] = "SetSelectedIndex", Z[Z.RegisterTab = 1] = "RegisterTab", Z[Z.UnregisterTab = 2] = "UnregisterTab", Z[Z.RegisterPanel = 3] = "RegisterPanel", Z[Z.UnregisterPanel = 4] = "UnregisterPanel", Z[Z.ForceRerender = 5] = "ForceRerender", Z);
            let B = {
                    0(e, t) {
                        let n = e.tabs.filter(e => {
                            var t;
                            return !(null != (t = e.current) && t.hasAttribute("disabled"))
                        });
                        if (t.index < 0) return {
                            ...e,
                            selectedIndex: e.tabs.indexOf(n[0])
                        };
                        if (t.index > e.tabs.length) return {
                            ...e,
                            selectedIndex: e.tabs.indexOf(n[n.length - 1])
                        };
                        let r = e.tabs.slice(0, t.index),
                            o = [...e.tabs.slice(t.index), ...r].find(e => n.includes(e));
                        return o ? {
                            ...e,
                            selectedIndex: e.tabs.indexOf(o)
                        } : e
                    },
                    1: (e, t) => e.tabs.includes(t.tab) ? e : {
                        ...e,
                        tabs: A([...e.tabs, t.tab], e => e.current)
                    },
                    2: (e, t) => ({
                        ...e,
                        tabs: A(e.tabs.filter(e => e !== t.tab), e => e.current)
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : {
                        ...e,
                        panels: [...e.panels, t.panel]
                    },
                    4: (e, t) => ({
                        ...e,
                        panels: e.panels.filter(e => e !== t.panel)
                    }),
                    5: e => ({
                        ...e
                    })
                },
                G = (0, o.createContext)(null);

            function K(e) {
                let t = (0, o.useContext)(G);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, K), n
                }
                return t
            }
            G.displayName = "TabsSSRContext";
            let V = (0, o.createContext)(null);

            function Y(e) {
                let t = (0, o.useContext)(V);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n
                }
                return t
            }
            V.displayName = "TabsDataContext";
            let J = (0, o.createContext)(null);

            function Q(e) {
                let t = (0, o.useContext)(J);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, Q), n
                }
                return t
            }

            function X(e, t) {
                return a(t.type, B, e, t)
            }
            J.displayName = "TabsActionsContext";
            let ee = o.Fragment,
                et = p(function(e, t) {
                    let {
                        defaultIndex: n = 0,
                        vertical: r = !1,
                        manual: a = !1,
                        onChange: i,
                        selectedIndex: l = null,
                        ...u
                    } = e, s = r ? "vertical" : "horizontal", f = a ? "manual" : "auto", d = null !== l, p = F(t), [$, g] = (0, o.useReducer)(X, {
                        selectedIndex: null != l ? l : n,
                        tabs: [],
                        panels: []
                    }), v = (0, o.useMemo)(() => ({
                        selectedIndex: $.selectedIndex
                    }), [$.selectedIndex]), m = M(i || (() => {})), y = M($.tabs), b = (0, o.useMemo)(() => ({
                        orientation: s,
                        activation: f,
                        ...$
                    }), [s, f, $]), _ = M(d ? e.selectedIndex : $.selectedIndex), w = (0, o.useMemo)(() => ({
                        registerTab: e => (g({
                            type: 1,
                            tab: e
                        }), () => g({
                            type: 2,
                            tab: e
                        })),
                        registerPanel: e => (g({
                            type: 3,
                            panel: e
                        }), () => g({
                            type: 4,
                            panel: e
                        })),
                        forceRerender() {
                            g({
                                type: 5
                            })
                        },
                        change(e) {
                            _.current !== e && m.current(e), d || g({
                                type: 0,
                                index: e
                            })
                        }
                    }), [g, d]);
                    h(() => {
                        g({
                            type: 0,
                            index: null != l ? l : n
                        })
                    }, [l]);
                    let x = (0, o.useRef)({
                        tabs: [],
                        panels: []
                    });
                    return o.createElement(G.Provider, {
                        value: x
                    }, o.createElement(J.Provider, {
                        value: w
                    }, o.createElement(V.Provider, {
                        value: b
                    }, b.tabs.length <= 0 && o.createElement(W, {
                        onFocus() {
                            var e, t;
                            for (let n of y.current)
                                if ((null == (e = n.current) ? void 0 : e.tabIndex) === 0) return null == (t = n.current) || t.focus(), !0;
                            return !1
                        }
                    }), c({
                        ourProps: {
                            ref: p
                        },
                        theirProps: u,
                        slot: v,
                        defaultTag: ee,
                        name: "Tabs"
                    }))))
                }),
                en = p(function(e, t) {
                    let {
                        orientation: n,
                        selectedIndex: r
                    } = Y("Tab.List"), o = F(t);
                    return c({
                        ourProps: {
                            ref: o,
                            role: "tablist",
                            "aria-orientation": n
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: r
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                }),
                er = p(function(e, t) {
                    var n, r;
                    let i = `headlessui-tabs-tab-${_()}`,
                        {
                            orientation: l,
                            activation: u,
                            selectedIndex: s,
                            tabs: f,
                            panels: d
                        } = Y("Tab"),
                        p = Q("Tab"),
                        $ = K("Tab"),
                        g = (0, o.useRef)(null),
                        v = F(g, t, e => {
                            e && requestAnimationFrame(() => p.forceRerender())
                        });
                    h(() => p.registerTab(g), [p, g]);
                    let m = $.current.tabs.indexOf(i); - 1 === m && (m = $.current.tabs.push(i) - 1);
                    let y = f.indexOf(g); - 1 === y && (y = m);
                    let b = y === s,
                        w = z(e => {
                            let t = f.map(e => e.current).filter(Boolean);
                            if (e.key === x.Space || e.key === x.Enter) {
                                e.preventDefault(), e.stopPropagation(), p.change(y);
                                return
                            }
                            switch (e.key) {
                                case x.Home:
                                case x.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), N(t, R.First);
                                case x.End:
                                case x.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), N(t, R.Last)
                            }
                            if (a(l, {
                                    vertical: () => e.key === x.ArrowUp ? N(t, R.Previous | R.WrapAround) : e.key === x.ArrowDown ? N(t, R.Next | R.WrapAround) : void 0,
                                    horizontal: () => e.key === x.ArrowLeft ? N(t, R.Previous | R.WrapAround) : e.key === x.ArrowRight ? N(t, R.Next | R.WrapAround) : void 0
                                })) return e.preventDefault()
                        }),
                        S = z(() => {
                            var e;
                            null == (e = g.current) || e.focus()
                        }),
                        P = (0, o.useRef)(!1),
                        C = z(() => {
                            var e, t;
                            P.current || (P.current = !0, null == (e = g.current) || e.focus(), p.change(y), t = () => {
                                P.current = !1
                            }, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch(e => setTimeout(() => {
                                throw e
                            })))
                        }),
                        E = z(e => {
                            e.preventDefault()
                        }),
                        T = (0, o.useMemo)(() => ({
                            selected: b
                        }), [b]),
                        I = {
                            ref: v,
                            onKeyDown: w,
                            onFocus: "manual" === u ? S : C,
                            onMouseDown: E,
                            onClick: C,
                            id: i,
                            role: "tab",
                            type: function(e, t) {
                                let [n, r] = (0, o.useState)(() => O(e));
                                return h(() => {
                                    r(O(e))
                                }, [e.type, e.as]), h(() => {
                                    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                }, [n, t]), n
                            }(e, g),
                            "aria-controls": null == (r = null == (n = d[y]) ? void 0 : n.current) ? void 0 : r.id,
                            "aria-selected": b,
                            tabIndex: b ? 0 : -1
                        };
                    return c({
                        ourProps: I,
                        theirProps: e,
                        slot: T,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                }),
                eo = p(function(e, t) {
                    let {
                        selectedIndex: n
                    } = Y("Tab.Panels"), r = F(t);
                    return c({
                        ourProps: {
                            ref: r
                        },
                        theirProps: e,
                        slot: (0, o.useMemo)(() => ({
                            selectedIndex: n
                        }), [n]),
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                }),
                ea = u.RenderStrategy | u.Static,
                ei = p(function(e, t) {
                    var n, r;
                    let {
                        selectedIndex: a,
                        tabs: i,
                        panels: l
                    } = Y("Tab.Panel"), u = Q("Tab.Panel"), s = K("Tab.Panel"), f = `headlessui-tabs-panel-${_()}`, d = (0, o.useRef)(null), p = F(d, t, e => {
                        e && requestAnimationFrame(() => u.forceRerender())
                    });
                    h(() => u.registerPanel(d), [u, d]);
                    let $ = s.current.panels.indexOf(f); - 1 === $ && ($ = s.current.panels.push(f) - 1);
                    let g = l.indexOf(d); - 1 === g && (g = $);
                    let v = g === a,
                        m = (0, o.useMemo)(() => ({
                            selected: v
                        }), [v]),
                        y = {
                            ref: p,
                            id: f,
                            role: "tabpanel",
                            "aria-labelledby": null == (r = null == (n = i[g]) ? void 0 : n.current) ? void 0 : r.id,
                            tabIndex: v ? 0 : -1
                        };
                    return c({
                        ourProps: y,
                        theirProps: e,
                        slot: m,
                        defaultTag: "div",
                        features: ea,
                        visible: v,
                        name: "Tabs.Panel"
                    })
                }),
                el = Object.assign(er, {
                    Group: et,
                    List: en,
                    Panels: eo,
                    Panel: ei
                })
        },
        9396: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        9534: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);