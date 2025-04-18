var L0 = Object.defineProperty
var z0 = (n, o, l) =>
  o in n
    ? L0(n, o, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (n[o] = l)
var He = (n, o, l) => z0(n, typeof o != 'symbol' ? o + '' : o, l)
;(function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a)
  new MutationObserver(a => {
    for (const f of a)
      if (f.type === 'childList')
        for (const d of f.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d)
  }).observe(document, { childList: !0, subtree: !0 })
  function l(a) {
    const f = {}
    return (
      a.integrity && (f.integrity = a.integrity),
      a.referrerPolicy && (f.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : a.crossOrigin === 'anonymous'
        ? (f.credentials = 'omit')
        : (f.credentials = 'same-origin'),
      f
    )
  }
  function s(a) {
    if (a.ep) return
    a.ep = !0
    const f = l(a)
    fetch(a.href, f)
  }
})()
function Ep(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n
}
var Pa = { exports: {} },
  ae = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd
function F0() {
  if (Pd) return ae
  Pd = 1
  var n = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator
  function S(P) {
    return P === null || typeof P != 'object'
      ? null
      : ((P = (v && P[v]) || P['@@iterator']),
        typeof P == 'function' ? P : null)
  }
  var O = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    A = {}
  function R(P, I, ie) {
    ;(this.props = P),
      (this.context = I),
      (this.refs = A),
      (this.updater = ie || O)
  }
  ;(R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (P, I) {
      if (typeof P != 'object' && typeof P != 'function' && P != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, P, I, 'setState')
    }),
    (R.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, 'forceUpdate')
    })
  function L() {}
  L.prototype = R.prototype
  function F(P, I, ie) {
    ;(this.props = P),
      (this.context = I),
      (this.refs = A),
      (this.updater = ie || O)
  }
  var B = (F.prototype = new L())
  ;(B.constructor = F), k(B, R.prototype), (B.isPureReactComponent = !0)
  var b = Array.isArray,
    V = Object.prototype.hasOwnProperty,
    J = { current: null },
    te = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Y(P, I, ie) {
    var ue,
      fe = {},
      de = null,
      we = null
    if (I != null)
      for (ue in (I.ref !== void 0 && (we = I.ref),
      I.key !== void 0 && (de = '' + I.key),
      I))
        V.call(I, ue) && !te.hasOwnProperty(ue) && (fe[ue] = I[ue])
    var he = arguments.length - 2
    if (he === 1) fe.children = ie
    else if (1 < he) {
      for (var Ce = Array(he), ut = 0; ut < he; ut++) Ce[ut] = arguments[ut + 2]
      fe.children = Ce
    }
    if (P && P.defaultProps)
      for (ue in ((he = P.defaultProps), he))
        fe[ue] === void 0 && (fe[ue] = he[ue])
    return {
      $$typeof: n,
      type: P,
      key: de,
      ref: we,
      props: fe,
      _owner: J.current,
    }
  }
  function se(P, I) {
    return {
      $$typeof: n,
      type: P.type,
      key: I,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    }
  }
  function xe(P) {
    return typeof P == 'object' && P !== null && P.$$typeof === n
  }
  function We(P) {
    var I = { '=': '=0', ':': '=2' }
    return (
      '$' +
      P.replace(/[=:]/g, function (ie) {
        return I[ie]
      })
    )
  }
  var Ke = /\/+/g
  function Ue(P, I) {
    return typeof P == 'object' && P !== null && P.key != null
      ? We('' + P.key)
      : I.toString(36)
  }
  function ye(P, I, ie, ue, fe) {
    var de = typeof P
    ;(de === 'undefined' || de === 'boolean') && (P = null)
    var we = !1
    if (P === null) we = !0
    else
      switch (de) {
        case 'string':
        case 'number':
          we = !0
          break
        case 'object':
          switch (P.$$typeof) {
            case n:
            case o:
              we = !0
          }
      }
    if (we)
      return (
        (we = P),
        (fe = fe(we)),
        (P = ue === '' ? '.' + Ue(we, 0) : ue),
        b(fe)
          ? ((ie = ''),
            P != null && (ie = P.replace(Ke, '$&/') + '/'),
            ye(fe, I, ie, '', function (ut) {
              return ut
            }))
          : fe != null &&
            (xe(fe) &&
              (fe = se(
                fe,
                ie +
                  (!fe.key || (we && we.key === fe.key)
                    ? ''
                    : ('' + fe.key).replace(Ke, '$&/') + '/') +
                  P
              )),
            I.push(fe)),
        1
      )
    if (((we = 0), (ue = ue === '' ? '.' : ue + ':'), b(P)))
      for (var he = 0; he < P.length; he++) {
        de = P[he]
        var Ce = ue + Ue(de, he)
        we += ye(de, I, ie, Ce, fe)
      }
    else if (((Ce = S(P)), typeof Ce == 'function'))
      for (P = Ce.call(P), he = 0; !(de = P.next()).done; )
        (de = de.value), (Ce = ue + Ue(de, he++)), (we += ye(de, I, ie, Ce, fe))
    else if (de === 'object')
      throw (
        ((I = String(P)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (I === '[object Object]'
              ? 'object with keys {' + Object.keys(P).join(', ') + '}'
              : I) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    return we
  }
  function Le(P, I, ie) {
    if (P == null) return P
    var ue = [],
      fe = 0
    return (
      ye(P, ue, '', '', function (de) {
        return I.call(ie, de, fe++)
      }),
      ue
    )
  }
  function Oe(P) {
    if (P._status === -1) {
      var I = P._result
      ;(I = I()),
        I.then(
          function (ie) {
            ;(P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = ie))
          },
          function (ie) {
            ;(P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = ie))
          }
        ),
        P._status === -1 && ((P._status = 0), (P._result = I))
    }
    if (P._status === 1) return P._result.default
    throw P._result
  }
  var ve = { current: null },
    H = { transition: null },
    ne = {
      ReactCurrentDispatcher: ve,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: J,
    }
  function K() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (ae.Children = {
      map: Le,
      forEach: function (P, I, ie) {
        Le(
          P,
          function () {
            I.apply(this, arguments)
          },
          ie
        )
      },
      count: function (P) {
        var I = 0
        return (
          Le(P, function () {
            I++
          }),
          I
        )
      },
      toArray: function (P) {
        return (
          Le(P, function (I) {
            return I
          }) || []
        )
      },
      only: function (P) {
        if (!xe(P))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return P
      },
    }),
    (ae.Component = R),
    (ae.Fragment = l),
    (ae.Profiler = a),
    (ae.PureComponent = F),
    (ae.StrictMode = s),
    (ae.Suspense = h),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (ae.act = K),
    (ae.cloneElement = function (P, I, ie) {
      if (P == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            P +
            '.'
        )
      var ue = k({}, P.props),
        fe = P.key,
        de = P.ref,
        we = P._owner
      if (I != null) {
        if (
          (I.ref !== void 0 && ((de = I.ref), (we = J.current)),
          I.key !== void 0 && (fe = '' + I.key),
          P.type && P.type.defaultProps)
        )
          var he = P.type.defaultProps
        for (Ce in I)
          V.call(I, Ce) &&
            !te.hasOwnProperty(Ce) &&
            (ue[Ce] = I[Ce] === void 0 && he !== void 0 ? he[Ce] : I[Ce])
      }
      var Ce = arguments.length - 2
      if (Ce === 1) ue.children = ie
      else if (1 < Ce) {
        he = Array(Ce)
        for (var ut = 0; ut < Ce; ut++) he[ut] = arguments[ut + 2]
        ue.children = he
      }
      return {
        $$typeof: n,
        type: P.type,
        key: fe,
        ref: de,
        props: ue,
        _owner: we,
      }
    }),
    (ae.createContext = function (P) {
      return (
        (P = {
          $$typeof: d,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: f, _context: P }),
        (P.Consumer = P)
      )
    }),
    (ae.createElement = Y),
    (ae.createFactory = function (P) {
      var I = Y.bind(null, P)
      return (I.type = P), I
    }),
    (ae.createRef = function () {
      return { current: null }
    }),
    (ae.forwardRef = function (P) {
      return { $$typeof: m, render: P }
    }),
    (ae.isValidElement = xe),
    (ae.lazy = function (P) {
      return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: Oe }
    }),
    (ae.memo = function (P, I) {
      return { $$typeof: y, type: P, compare: I === void 0 ? null : I }
    }),
    (ae.startTransition = function (P) {
      var I = H.transition
      H.transition = {}
      try {
        P()
      } finally {
        H.transition = I
      }
    }),
    (ae.unstable_act = K),
    (ae.useCallback = function (P, I) {
      return ve.current.useCallback(P, I)
    }),
    (ae.useContext = function (P) {
      return ve.current.useContext(P)
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (P) {
      return ve.current.useDeferredValue(P)
    }),
    (ae.useEffect = function (P, I) {
      return ve.current.useEffect(P, I)
    }),
    (ae.useId = function () {
      return ve.current.useId()
    }),
    (ae.useImperativeHandle = function (P, I, ie) {
      return ve.current.useImperativeHandle(P, I, ie)
    }),
    (ae.useInsertionEffect = function (P, I) {
      return ve.current.useInsertionEffect(P, I)
    }),
    (ae.useLayoutEffect = function (P, I) {
      return ve.current.useLayoutEffect(P, I)
    }),
    (ae.useMemo = function (P, I) {
      return ve.current.useMemo(P, I)
    }),
    (ae.useReducer = function (P, I, ie) {
      return ve.current.useReducer(P, I, ie)
    }),
    (ae.useRef = function (P) {
      return ve.current.useRef(P)
    }),
    (ae.useState = function (P) {
      return ve.current.useState(P)
    }),
    (ae.useSyncExternalStore = function (P, I, ie) {
      return ve.current.useSyncExternalStore(P, I, ie)
    }),
    (ae.useTransition = function () {
      return ve.current.useTransition()
    }),
    (ae.version = '18.3.1'),
    ae
  )
}
var Nd
function wi() {
  return Nd || ((Nd = 1), (Pa.exports = F0())), Pa.exports
}
var _ = wi()
const ui = Ep(_)
var Jl = {},
  Na = { exports: {} },
  lt = {},
  Ta = { exports: {} },
  Oa = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td
function M0() {
  return (
    Td ||
      ((Td = 1),
      (function (n) {
        function o(H, ne) {
          var K = H.length
          H.push(ne)
          e: for (; 0 < K; ) {
            var P = (K - 1) >>> 1,
              I = H[P]
            if (0 < a(I, ne)) (H[P] = ne), (H[K] = I), (K = P)
            else break e
          }
        }
        function l(H) {
          return H.length === 0 ? null : H[0]
        }
        function s(H) {
          if (H.length === 0) return null
          var ne = H[0],
            K = H.pop()
          if (K !== ne) {
            H[0] = K
            e: for (var P = 0, I = H.length, ie = I >>> 1; P < ie; ) {
              var ue = 2 * (P + 1) - 1,
                fe = H[ue],
                de = ue + 1,
                we = H[de]
              if (0 > a(fe, K))
                de < I && 0 > a(we, fe)
                  ? ((H[P] = we), (H[de] = K), (P = de))
                  : ((H[P] = fe), (H[ue] = K), (P = ue))
              else if (de < I && 0 > a(we, K))
                (H[P] = we), (H[de] = K), (P = de)
              else break e
            }
          }
          return ne
        }
        function a(H, ne) {
          var K = H.sortIndex - ne.sortIndex
          return K !== 0 ? K : H.id - ne.id
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var f = performance
          n.unstable_now = function () {
            return f.now()
          }
        } else {
          var d = Date,
            m = d.now()
          n.unstable_now = function () {
            return d.now() - m
          }
        }
        var h = [],
          y = [],
          g = 1,
          v = null,
          S = 3,
          O = !1,
          k = !1,
          A = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function B(H) {
          for (var ne = l(y); ne !== null; ) {
            if (ne.callback === null) s(y)
            else if (ne.startTime <= H)
              s(y), (ne.sortIndex = ne.expirationTime), o(h, ne)
            else break
            ne = l(y)
          }
        }
        function b(H) {
          if (((A = !1), B(H), !k))
            if (l(h) !== null) (k = !0), Oe(V)
            else {
              var ne = l(y)
              ne !== null && ve(b, ne.startTime - H)
            }
        }
        function V(H, ne) {
          ;(k = !1), A && ((A = !1), L(Y), (Y = -1)), (O = !0)
          var K = S
          try {
            for (
              B(ne), v = l(h);
              v !== null && (!(v.expirationTime > ne) || (H && !We()));

            ) {
              var P = v.callback
              if (typeof P == 'function') {
                ;(v.callback = null), (S = v.priorityLevel)
                var I = P(v.expirationTime <= ne)
                ;(ne = n.unstable_now()),
                  typeof I == 'function'
                    ? (v.callback = I)
                    : v === l(h) && s(h),
                  B(ne)
              } else s(h)
              v = l(h)
            }
            if (v !== null) var ie = !0
            else {
              var ue = l(y)
              ue !== null && ve(b, ue.startTime - ne), (ie = !1)
            }
            return ie
          } finally {
            ;(v = null), (S = K), (O = !1)
          }
        }
        var J = !1,
          te = null,
          Y = -1,
          se = 5,
          xe = -1
        function We() {
          return !(n.unstable_now() - xe < se)
        }
        function Ke() {
          if (te !== null) {
            var H = n.unstable_now()
            xe = H
            var ne = !0
            try {
              ne = te(!0, H)
            } finally {
              ne ? Ue() : ((J = !1), (te = null))
            }
          } else J = !1
        }
        var Ue
        if (typeof F == 'function')
          Ue = function () {
            F(Ke)
          }
        else if (typeof MessageChannel < 'u') {
          var ye = new MessageChannel(),
            Le = ye.port2
          ;(ye.port1.onmessage = Ke),
            (Ue = function () {
              Le.postMessage(null)
            })
        } else
          Ue = function () {
            R(Ke, 0)
          }
        function Oe(H) {
          ;(te = H), J || ((J = !0), Ue())
        }
        function ve(H, ne) {
          Y = R(function () {
            H(n.unstable_now())
          }, ne)
        }
        ;(n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (H) {
            H.callback = null
          }),
          (n.unstable_continueExecution = function () {
            k || O || ((k = !0), Oe(V))
          }),
          (n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (se = 0 < H ? Math.floor(1e3 / H) : 5)
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h)
          }),
          (n.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var ne = 3
                break
              default:
                ne = S
            }
            var K = S
            S = ne
            try {
              return H()
            } finally {
              S = K
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (H, ne) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                H = 3
            }
            var K = S
            S = H
            try {
              return ne()
            } finally {
              S = K
            }
          }),
          (n.unstable_scheduleCallback = function (H, ne, K) {
            var P = n.unstable_now()
            switch (
              (typeof K == 'object' && K !== null
                ? ((K = K.delay),
                  (K = typeof K == 'number' && 0 < K ? P + K : P))
                : (K = P),
              H)
            ) {
              case 1:
                var I = -1
                break
              case 2:
                I = 250
                break
              case 5:
                I = 1073741823
                break
              case 4:
                I = 1e4
                break
              default:
                I = 5e3
            }
            return (
              (I = K + I),
              (H = {
                id: g++,
                callback: ne,
                priorityLevel: H,
                startTime: K,
                expirationTime: I,
                sortIndex: -1,
              }),
              K > P
                ? ((H.sortIndex = K),
                  o(y, H),
                  l(h) === null &&
                    H === l(y) &&
                    (A ? (L(Y), (Y = -1)) : (A = !0), ve(b, K - P)))
                : ((H.sortIndex = I), o(h, H), k || O || ((k = !0), Oe(V))),
              H
            )
          }),
          (n.unstable_shouldYield = We),
          (n.unstable_wrapCallback = function (H) {
            var ne = S
            return function () {
              var K = S
              S = ne
              try {
                return H.apply(this, arguments)
              } finally {
                S = K
              }
            }
          })
      })(Oa)),
    Oa
  )
}
var Od
function I0() {
  return Od || ((Od = 1), (Ta.exports = M0())), Ta.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad
function j0() {
  if (Ad) return lt
  Ad = 1
  var n = wi(),
    o = I0()
  function l(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var s = new Set(),
    a = {}
  function f(e, t) {
    d(e, t), d(e + 'Capture', t)
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e])
  }
  var m = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {}
  function S(e) {
    return h.call(v, e)
      ? !0
      : h.call(g, e)
      ? !1
      : y.test(e)
      ? (v[e] = !0)
      : ((g[e] = !0), !1)
  }
  function O(e, t, r, i) {
    if (r !== null && r.type === 0) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return i
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function k(e, t, r, i) {
    if (t === null || typeof t > 'u' || O(e, t, r, i)) return !0
    if (i) return !1
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function A(e, t, r, i, u, c, p) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p)
  }
  var R = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      R[e] = new A(e, 0, !1, e, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      R[t] = new A(t, 1, !1, e[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      R[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      R[e] = new A(e, 2, !1, e, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        R[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      R[e] = new A(e, 3, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      R[e] = new A(e, 4, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      R[e] = new A(e, 6, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      R[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var L = /[\-:]([a-z])/g
  function F(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(L, F)
      R[t] = new A(t, 1, !1, e, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(L, F)
        R[t] = new A(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(L, F)
      R[t] = new A(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      R[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (R.xlinkHref = new A(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      R[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function B(e, t, r, i) {
    var u = R.hasOwnProperty(t) ? R[t] : null
    ;(u !== null
      ? u.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (k(t, r, u, i) && (r = null),
      i || u === null
        ? S(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : '') : r)
        : ((t = u.attributeName),
          (i = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? '' : '' + r),
              i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))))
  }
  var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    V = Symbol.for('react.element'),
    J = Symbol.for('react.portal'),
    te = Symbol.for('react.fragment'),
    Y = Symbol.for('react.strict_mode'),
    se = Symbol.for('react.profiler'),
    xe = Symbol.for('react.provider'),
    We = Symbol.for('react.context'),
    Ke = Symbol.for('react.forward_ref'),
    Ue = Symbol.for('react.suspense'),
    ye = Symbol.for('react.suspense_list'),
    Le = Symbol.for('react.memo'),
    Oe = Symbol.for('react.lazy'),
    ve = Symbol.for('react.offscreen'),
    H = Symbol.iterator
  function ne(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (H && e[H]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var K = Object.assign,
    P
  function I(e) {
    if (P === void 0)
      try {
        throw Error()
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/)
        P = (t && t[1]) || ''
      }
    return (
      `
` +
      P +
      e
    )
  }
  var ie = !1
  function ue(e, t) {
    if (!e || ie) return ''
    ie = !0
    var r = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (D) {
            var i = D
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (D) {
            i = D
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (D) {
          i = D
        }
        e()
      }
    } catch (D) {
      if (D && i && typeof D.stack == 'string') {
        for (
          var u = D.stack.split(`
`),
            c = i.stack.split(`
`),
            p = u.length - 1,
            w = c.length - 1;
          1 <= p && 0 <= w && u[p] !== c[w];

        )
          w--
        for (; 1 <= p && 0 <= w; p--, w--)
          if (u[p] !== c[w]) {
            if (p !== 1 || w !== 1)
              do
                if ((p--, w--, 0 > w || u[p] !== c[w])) {
                  var E =
                    `
` + u[p].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      E.includes('<anonymous>') &&
                      (E = E.replace('<anonymous>', e.displayName)),
                    E
                  )
                }
              while (1 <= p && 0 <= w)
            break
          }
      }
    } finally {
      ;(ie = !1), (Error.prepareStackTrace = r)
    }
    return (e = e ? e.displayName || e.name : '') ? I(e) : ''
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return I(e.type)
      case 16:
        return I('Lazy')
      case 13:
        return I('Suspense')
      case 19:
        return I('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = ue(e.type, !1)), e
      case 11:
        return (e = ue(e.type.render, !1)), e
      case 1:
        return (e = ue(e.type, !0)), e
      default:
        return ''
    }
  }
  function de(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case te:
        return 'Fragment'
      case J:
        return 'Portal'
      case se:
        return 'Profiler'
      case Y:
        return 'StrictMode'
      case Ue:
        return 'Suspense'
      case ye:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case We:
          return (e.displayName || 'Context') + '.Consumer'
        case xe:
          return (e._context.displayName || 'Context') + '.Provider'
        case Ke:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case Le:
          return (
            (t = e.displayName || null), t !== null ? t : de(e.type) || 'Memo'
          )
        case Oe:
          ;(t = e._payload), (e = e._init)
          try {
            return de(e(t))
          } catch {}
      }
    return null
  }
  function we(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (t.displayName || 'Context') + '.Consumer'
      case 10:
        return (t._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return t
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return de(t)
      case 8:
        return t === Y ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null
        if (typeof t == 'string') return t
    }
    return null
  }
  function he(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function Ce(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function ut(e) {
    var t = Ce(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var u = r.get,
        c = r.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this)
          },
          set: function (p) {
            ;(i = '' + p), c.call(this, p)
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i
          },
          setValue: function (p) {
            i = '' + p
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function Bo(e) {
    e._valueTracker || (e._valueTracker = ut(e))
  }
  function Du(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var r = t.getValue(),
      i = ''
    return (
      e && (i = Ce(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = i),
      e !== r ? (t.setValue(e), !0) : !1
    )
  }
  function Uo(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function zi(e, t) {
    var r = t.checked
    return K({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    })
  }
  function Lu(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked
    ;(r = he(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      })
  }
  function zu(e, t) {
    ;(t = t.checked), t != null && B(e, 'checked', t, !1)
  }
  function Fi(e, t) {
    zu(e, t)
    var r = he(t.value),
      i = t.type
    if (r != null)
      i === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r)
    else if (i === 'submit' || i === 'reset') {
      e.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? Mi(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Mi(e, t.type, he(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked)
  }
  function Fu(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var i = t.type
      if (
        !(
          (i !== 'submit' && i !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return
      ;(t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r)
  }
  function Mi(e, t, r) {
    ;(t !== 'number' || Uo(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
  }
  var Lr = Array.isArray
  function Gn(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {}
      for (var u = 0; u < r.length; u++) t['$' + r[u]] = !0
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && i && (e[r].defaultSelected = !0)
    } else {
      for (r = '' + he(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          ;(e[u].selected = !0), i && (e[u].defaultSelected = !0)
          return
        }
        t !== null || e[u].disabled || (t = e[u])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Ii(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91))
    return K({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function Mu(e, t) {
    var r = t.value
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92))
        if (Lr(r)) {
          if (1 < r.length) throw Error(l(93))
          r = r[0]
        }
        t = r
      }
      t == null && (t = ''), (r = t)
    }
    e._wrapperState = { initialValue: he(r) }
  }
  function Iu(e, t) {
    var r = he(t.value),
      i = he(t.defaultValue)
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      i != null && (e.defaultValue = '' + i)
  }
  function ju(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t)
  }
  function Bu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function ji(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Bu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  var $o,
    Uu = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, i, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, i, u)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t
      else {
        for (
          $o = $o || document.createElement('div'),
            $o.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = $o.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function zr(e, t) {
    if (t) {
      var r = e.firstChild
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Fr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ih = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(Fr).forEach(function (e) {
    Ih.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fr[t] = Fr[e])
    })
  })
  function $u(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (Fr.hasOwnProperty(e) && Fr[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  function bu(e, t) {
    e = e.style
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf('--') === 0,
          u = $u(r, t[r], i)
        r === 'float' && (r = 'cssFloat'), i ? e.setProperty(r, u) : (e[r] = u)
      }
  }
  var jh = K(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function Bi(e, t) {
    if (t) {
      if (jh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60))
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61))
      }
      if (t.style != null && typeof t.style != 'object') throw Error(l(62))
    }
  }
  function Ui(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var $i = null
  function bi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Hi = null,
    Yn = null,
    Zn = null
  function Hu(e) {
    if ((e = ro(e))) {
      if (typeof Hi != 'function') throw Error(l(280))
      var t = e.stateNode
      t && ((t = cl(t)), Hi(e.stateNode, e.type, t))
    }
  }
  function Vu(e) {
    Yn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Yn = e)
  }
  function Wu() {
    if (Yn) {
      var e = Yn,
        t = Zn
      if (((Zn = Yn = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e])
    }
  }
  function Ku(e, t) {
    return e(t)
  }
  function qu() {}
  var Vi = !1
  function Qu(e, t, r) {
    if (Vi) return e(t, r)
    Vi = !0
    try {
      return Ku(e, t, r)
    } finally {
      ;(Vi = !1), (Yn !== null || Zn !== null) && (qu(), Wu())
    }
  }
  function Mr(e, t) {
    var r = e.stateNode
    if (r === null) return null
    var i = cl(r)
    if (i === null) return null
    r = i[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !i)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (r && typeof r != 'function') throw Error(l(231, t, typeof r))
    return r
  }
  var Wi = !1
  if (m)
    try {
      var Ir = {}
      Object.defineProperty(Ir, 'passive', {
        get: function () {
          Wi = !0
        },
      }),
        window.addEventListener('test', Ir, Ir),
        window.removeEventListener('test', Ir, Ir)
    } catch {
      Wi = !1
    }
  function Bh(e, t, r, i, u, c, p, w, E) {
    var D = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(r, D)
    } catch (j) {
      this.onError(j)
    }
  }
  var jr = !1,
    bo = null,
    Ho = !1,
    Ki = null,
    Uh = {
      onError: function (e) {
        ;(jr = !0), (bo = e)
      },
    }
  function $h(e, t, r, i, u, c, p, w, E) {
    ;(jr = !1), (bo = null), Bh.apply(Uh, arguments)
  }
  function bh(e, t, r, i, u, c, p, w, E) {
    if (($h.apply(this, arguments), jr)) {
      if (jr) {
        var D = bo
        ;(jr = !1), (bo = null)
      } else throw Error(l(198))
      Ho || ((Ho = !0), (Ki = D))
    }
  }
  function On(e) {
    var t = e,
      r = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? r : null
  }
  function Ju(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function Xu(e) {
    if (On(e) !== e) throw Error(l(188))
  }
  function Hh(e) {
    var t = e.alternate
    if (!t) {
      if (((t = On(e)), t === null)) throw Error(l(188))
      return t !== e ? null : e
    }
    for (var r = e, i = t; ; ) {
      var u = r.return
      if (u === null) break
      var c = u.alternate
      if (c === null) {
        if (((i = u.return), i !== null)) {
          r = i
          continue
        }
        break
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === r) return Xu(u), e
          if (c === i) return Xu(u), t
          c = c.sibling
        }
        throw Error(l(188))
      }
      if (r.return !== i.return) (r = u), (i = c)
      else {
        for (var p = !1, w = u.child; w; ) {
          if (w === r) {
            ;(p = !0), (r = u), (i = c)
            break
          }
          if (w === i) {
            ;(p = !0), (i = u), (r = c)
            break
          }
          w = w.sibling
        }
        if (!p) {
          for (w = c.child; w; ) {
            if (w === r) {
              ;(p = !0), (r = c), (i = u)
              break
            }
            if (w === i) {
              ;(p = !0), (i = c), (r = u)
              break
            }
            w = w.sibling
          }
          if (!p) throw Error(l(189))
        }
      }
      if (r.alternate !== i) throw Error(l(190))
    }
    if (r.tag !== 3) throw Error(l(188))
    return r.stateNode.current === r ? e : t
  }
  function Gu(e) {
    return (e = Hh(e)), e !== null ? Yu(e) : null
  }
  function Yu(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = Yu(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var Zu = o.unstable_scheduleCallback,
    ec = o.unstable_cancelCallback,
    Vh = o.unstable_shouldYield,
    Wh = o.unstable_requestPaint,
    Ae = o.unstable_now,
    Kh = o.unstable_getCurrentPriorityLevel,
    qi = o.unstable_ImmediatePriority,
    tc = o.unstable_UserBlockingPriority,
    Vo = o.unstable_NormalPriority,
    qh = o.unstable_LowPriority,
    nc = o.unstable_IdlePriority,
    Wo = null,
    It = null
  function Qh(e) {
    if (It && typeof It.onCommitFiberRoot == 'function')
      try {
        It.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : Gh,
    Jh = Math.log,
    Xh = Math.LN2
  function Gh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jh(e) / Xh) | 0)) | 0
  }
  var Ko = 64,
    qo = 4194304
  function Br(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Qo(e, t) {
    var r = e.pendingLanes
    if (r === 0) return 0
    var i = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      p = r & 268435455
    if (p !== 0) {
      var w = p & ~u
      w !== 0 ? (i = Br(w)) : ((c &= p), c !== 0 && (i = Br(c)))
    } else (p = r & ~u), p !== 0 ? (i = Br(p)) : c !== 0 && (i = Br(c))
    if (i === 0) return 0
    if (
      t !== 0 &&
      t !== i &&
      !(t & u) &&
      ((u = i & -i), (c = t & -t), u >= c || (u === 16 && (c & 4194240) !== 0))
    )
      return t
    if ((i & 4 && (i |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (r = 31 - kt(t)), (u = 1 << r), (i |= e[r]), (t &= ~u)
    return i
  }
  function Yh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Zh(e, t) {
    for (
      var r = e.suspendedLanes,
        i = e.pingedLanes,
        u = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var p = 31 - kt(c),
        w = 1 << p,
        E = u[p]
      E === -1
        ? (!(w & r) || w & i) && (u[p] = Yh(w, t))
        : E <= t && (e.expiredLanes |= w),
        (c &= ~w)
    }
  }
  function Qi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function rc() {
    var e = Ko
    return (Ko <<= 1), !(Ko & 4194240) && (Ko = 64), e
  }
  function Ji(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e)
    return t
  }
  function Ur(e, t, r) {
    ;(e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = r)
  }
  function em(e, t) {
    var r = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements)
    var i = e.eventTimes
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - kt(r),
        c = 1 << u
      ;(t[u] = 0), (i[u] = -1), (e[u] = -1), (r &= ~c)
    }
  }
  function Xi(e, t) {
    var r = (e.entangledLanes |= t)
    for (e = e.entanglements; r; ) {
      var i = 31 - kt(r),
        u = 1 << i
      ;(u & t) | (e[i] & t) && (e[i] |= t), (r &= ~u)
    }
  }
  var me = 0
  function oc(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var lc,
    Gi,
    ic,
    sc,
    ac,
    Yi = !1,
    Jo = [],
    sn = null,
    an = null,
    un = null,
    $r = new Map(),
    br = new Map(),
    cn = [],
    tm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function uc(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        sn = null
        break
      case 'dragenter':
      case 'dragleave':
        an = null
        break
      case 'mouseover':
      case 'mouseout':
        un = null
        break
      case 'pointerover':
      case 'pointerout':
        $r.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        br.delete(t.pointerId)
    }
  }
  function Hr(e, t, r, i, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [u],
        }),
        t !== null && ((t = ro(t)), t !== null && Gi(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
  }
  function nm(e, t, r, i, u) {
    switch (t) {
      case 'focusin':
        return (sn = Hr(sn, e, t, r, i, u)), !0
      case 'dragenter':
        return (an = Hr(an, e, t, r, i, u)), !0
      case 'mouseover':
        return (un = Hr(un, e, t, r, i, u)), !0
      case 'pointerover':
        var c = u.pointerId
        return $r.set(c, Hr($r.get(c) || null, e, t, r, i, u)), !0
      case 'gotpointercapture':
        return (
          (c = u.pointerId), br.set(c, Hr(br.get(c) || null, e, t, r, i, u)), !0
        )
    }
    return !1
  }
  function cc(e) {
    var t = An(e.target)
    if (t !== null) {
      var r = On(t)
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Ju(r)), t !== null)) {
            ;(e.blockedOn = t),
              ac(e.priority, function () {
                ic(r)
              })
            return
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Xo(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = es(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (r === null) {
        r = e.nativeEvent
        var i = new r.constructor(r.type, r)
        ;($i = i), r.target.dispatchEvent(i), ($i = null)
      } else return (t = ro(r)), t !== null && Gi(t), (e.blockedOn = r), !1
      t.shift()
    }
    return !0
  }
  function fc(e, t, r) {
    Xo(e) && r.delete(t)
  }
  function rm() {
    ;(Yi = !1),
      sn !== null && Xo(sn) && (sn = null),
      an !== null && Xo(an) && (an = null),
      un !== null && Xo(un) && (un = null),
      $r.forEach(fc),
      br.forEach(fc)
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Yi ||
        ((Yi = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, rm)))
  }
  function Wr(e) {
    function t(u) {
      return Vr(u, e)
    }
    if (0 < Jo.length) {
      Vr(Jo[0], e)
      for (var r = 1; r < Jo.length; r++) {
        var i = Jo[r]
        i.blockedOn === e && (i.blockedOn = null)
      }
    }
    for (
      sn !== null && Vr(sn, e),
        an !== null && Vr(an, e),
        un !== null && Vr(un, e),
        $r.forEach(t),
        br.forEach(t),
        r = 0;
      r < cn.length;
      r++
    )
      (i = cn[r]), i.blockedOn === e && (i.blockedOn = null)
    for (; 0 < cn.length && ((r = cn[0]), r.blockedOn === null); )
      cc(r), r.blockedOn === null && cn.shift()
  }
  var er = b.ReactCurrentBatchConfig,
    Go = !0
  function om(e, t, r, i) {
    var u = me,
      c = er.transition
    er.transition = null
    try {
      ;(me = 1), Zi(e, t, r, i)
    } finally {
      ;(me = u), (er.transition = c)
    }
  }
  function lm(e, t, r, i) {
    var u = me,
      c = er.transition
    er.transition = null
    try {
      ;(me = 4), Zi(e, t, r, i)
    } finally {
      ;(me = u), (er.transition = c)
    }
  }
  function Zi(e, t, r, i) {
    if (Go) {
      var u = es(e, t, r, i)
      if (u === null) gs(e, t, i, Yo, r), uc(e, i)
      else if (nm(u, e, t, r, i)) i.stopPropagation()
      else if ((uc(e, i), t & 4 && -1 < tm.indexOf(e))) {
        for (; u !== null; ) {
          var c = ro(u)
          if (
            (c !== null && lc(c),
            (c = es(e, t, r, i)),
            c === null && gs(e, t, i, Yo, r),
            c === u)
          )
            break
          u = c
        }
        u !== null && i.stopPropagation()
      } else gs(e, t, i, null, r)
    }
  }
  var Yo = null
  function es(e, t, r, i) {
    if (((Yo = null), (e = bi(i)), (e = An(e)), e !== null))
      if (((t = On(e)), t === null)) e = null
      else if (((r = t.tag), r === 13)) {
        if (((e = Ju(t)), e !== null)) return e
        e = null
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (Yo = e), null
  }
  function dc(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (Kh()) {
          case qi:
            return 1
          case tc:
            return 4
          case Vo:
          case qh:
            return 16
          case nc:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var fn = null,
    ts = null,
    Zo = null
  function pc() {
    if (Zo) return Zo
    var e,
      t = ts,
      r = t.length,
      i,
      u = 'value' in fn ? fn.value : fn.textContent,
      c = u.length
    for (e = 0; e < r && t[e] === u[e]; e++);
    var p = r - e
    for (i = 1; i <= p && t[r - i] === u[c - i]; i++);
    return (Zo = u.slice(e, 1 < i ? 1 - i : void 0))
  }
  function el(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function tl() {
    return !0
  }
  function hc() {
    return !1
  }
  function ct(e) {
    function t(r, i, u, c, p) {
      ;(this._reactName = r),
        (this._targetInst = u),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null)
      for (var w in e)
        e.hasOwnProperty(w) && ((r = e[w]), (this[w] = r ? r(c) : c[w]))
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? tl
          : hc),
        (this.isPropagationStopped = hc),
        this
      )
    }
    return (
      K(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var r = this.nativeEvent
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = tl))
        },
        stopPropagation: function () {
          var r = this.nativeEvent
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = tl))
        },
        persist: function () {},
        isPersistent: tl,
      }),
      t
    )
  }
  var tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ns = ct(tr),
    Kr = K({}, tr, { view: 0, detail: 0 }),
    im = ct(Kr),
    rs,
    os,
    qr,
    nl = K({}, Kr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: is,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== qr &&
              (qr && e.type === 'mousemove'
                ? ((rs = e.screenX - qr.screenX), (os = e.screenY - qr.screenY))
                : (os = rs = 0),
              (qr = e)),
            rs)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : os
      },
    }),
    mc = ct(nl),
    sm = K({}, nl, { dataTransfer: 0 }),
    am = ct(sm),
    um = K({}, Kr, { relatedTarget: 0 }),
    ls = ct(um),
    cm = K({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fm = ct(cm),
    dm = K({}, tr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    pm = ct(dm),
    hm = K({}, tr, { data: 0 }),
    yc = ct(hm),
    mm = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    ym = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    gm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function vm(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gm[e])
      ? !!t[e]
      : !1
  }
  function is() {
    return vm
  }
  var wm = K({}, Kr, {
      key: function (e) {
        if (e.key) {
          var t = mm[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = el(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? ym[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: is,
      charCode: function (e) {
        return e.type === 'keypress' ? el(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? el(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    _m = ct(wm),
    Sm = K({}, nl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    gc = ct(Sm),
    Em = K({}, Kr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: is,
    }),
    xm = ct(Em),
    Cm = K({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    km = ct(Cm),
    Rm = K({}, nl, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pm = ct(Rm),
    Nm = [9, 13, 27, 32],
    ss = m && 'CompositionEvent' in window,
    Qr = null
  m && 'documentMode' in document && (Qr = document.documentMode)
  var Tm = m && 'TextEvent' in window && !Qr,
    vc = m && (!ss || (Qr && 8 < Qr && 11 >= Qr)),
    wc = ' ',
    _c = !1
  function Sc(e, t) {
    switch (e) {
      case 'keyup':
        return Nm.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Ec(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var nr = !1
  function Om(e, t) {
    switch (e) {
      case 'compositionend':
        return Ec(t)
      case 'keypress':
        return t.which !== 32 ? null : ((_c = !0), wc)
      case 'textInput':
        return (e = t.data), e === wc && _c ? null : e
      default:
        return null
    }
  }
  function Am(e, t) {
    if (nr)
      return e === 'compositionend' || (!ss && Sc(e, t))
        ? ((e = pc()), (Zo = ts = fn = null), (nr = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return vc && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var Dm = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!Dm[e.type] : t === 'textarea'
  }
  function Cc(e, t, r, i) {
    Vu(i),
      (t = sl(t, 'onChange')),
      0 < t.length &&
        ((r = new ns('onChange', 'change', null, r, i)),
        e.push({ event: r, listeners: t }))
  }
  var Jr = null,
    Xr = null
  function Lm(e) {
    bc(e, 0)
  }
  function rl(e) {
    var t = sr(e)
    if (Du(t)) return e
  }
  function zm(e, t) {
    if (e === 'change') return t
  }
  var kc = !1
  if (m) {
    var as
    if (m) {
      var us = 'oninput' in document
      if (!us) {
        var Rc = document.createElement('div')
        Rc.setAttribute('oninput', 'return;'),
          (us = typeof Rc.oninput == 'function')
      }
      as = us
    } else as = !1
    kc = as && (!document.documentMode || 9 < document.documentMode)
  }
  function Pc() {
    Jr && (Jr.detachEvent('onpropertychange', Nc), (Xr = Jr = null))
  }
  function Nc(e) {
    if (e.propertyName === 'value' && rl(Xr)) {
      var t = []
      Cc(t, Xr, e, bi(e)), Qu(Lm, t)
    }
  }
  function Fm(e, t, r) {
    e === 'focusin'
      ? (Pc(), (Jr = t), (Xr = r), Jr.attachEvent('onpropertychange', Nc))
      : e === 'focusout' && Pc()
  }
  function Mm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return rl(Xr)
  }
  function Im(e, t) {
    if (e === 'click') return rl(t)
  }
  function jm(e, t) {
    if (e === 'input' || e === 'change') return rl(t)
  }
  function Bm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Rt = typeof Object.is == 'function' ? Object.is : Bm
  function Gr(e, t) {
    if (Rt(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var r = Object.keys(e),
      i = Object.keys(t)
    if (r.length !== i.length) return !1
    for (i = 0; i < r.length; i++) {
      var u = r[i]
      if (!h.call(t, u) || !Rt(e[u], t[u])) return !1
    }
    return !0
  }
  function Tc(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Oc(e, t) {
    var r = Tc(e)
    e = 0
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t))
          return { node: r, offset: t - e }
        e = i
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling
            break e
          }
          r = r.parentNode
        }
        r = void 0
      }
      r = Tc(r)
    }
  }
  function Ac(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ac(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function Dc() {
    for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string'
      } catch {
        r = !1
      }
      if (r) e = t.contentWindow
      else break
      t = Uo(e.document)
    }
    return t
  }
  function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function Um(e) {
    var t = Dc(),
      r = e.focusedElem,
      i = e.selectionRange
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Ac(r.ownerDocument.documentElement, r)
    ) {
      if (i !== null && cs(r)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var u = r.textContent.length,
            c = Math.min(i.start, u)
          ;(i = i.end === void 0 ? c : Math.min(i.end, u)),
            !e.extend && c > i && ((u = i), (i = c), (c = u)),
            (u = Oc(r, c))
          var p = Oc(r, i)
          u &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)))
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top)
    }
  }
  var $m = m && 'documentMode' in document && 11 >= document.documentMode,
    rr = null,
    fs = null,
    Yr = null,
    ds = !1
  function Lc(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
    ds ||
      rr == null ||
      rr !== Uo(i) ||
      ((i = rr),
      'selectionStart' in i && cs(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Yr && Gr(Yr, i)) ||
        ((Yr = i),
        (i = sl(fs, 'onSelect')),
        0 < i.length &&
          ((t = new ns('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: i }),
          (t.target = rr))))
  }
  function ol(e, t) {
    var r = {}
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    )
  }
  var or = {
      animationend: ol('Animation', 'AnimationEnd'),
      animationiteration: ol('Animation', 'AnimationIteration'),
      animationstart: ol('Animation', 'AnimationStart'),
      transitionend: ol('Transition', 'TransitionEnd'),
    },
    ps = {},
    zc = {}
  m &&
    ((zc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete or.animationend.animation,
      delete or.animationiteration.animation,
      delete or.animationstart.animation),
    'TransitionEvent' in window || delete or.transitionend.transition)
  function ll(e) {
    if (ps[e]) return ps[e]
    if (!or[e]) return e
    var t = or[e],
      r
    for (r in t) if (t.hasOwnProperty(r) && r in zc) return (ps[e] = t[r])
    return e
  }
  var Fc = ll('animationend'),
    Mc = ll('animationiteration'),
    Ic = ll('animationstart'),
    jc = ll('transitionend'),
    Bc = new Map(),
    Uc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function dn(e, t) {
    Bc.set(e, t), f(t, [e])
  }
  for (var hs = 0; hs < Uc.length; hs++) {
    var ms = Uc[hs],
      bm = ms.toLowerCase(),
      Hm = ms[0].toUpperCase() + ms.slice(1)
    dn(bm, 'on' + Hm)
  }
  dn(Fc, 'onAnimationEnd'),
    dn(Mc, 'onAnimationIteration'),
    dn(Ic, 'onAnimationStart'),
    dn('dblclick', 'onDoubleClick'),
    dn('focusin', 'onFocus'),
    dn('focusout', 'onBlur'),
    dn(jc, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    f(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var Zr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Vm = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Zr)
    )
  function $c(e, t, r) {
    var i = e.type || 'unknown-event'
    ;(e.currentTarget = r), bh(i, t, void 0, e), (e.currentTarget = null)
  }
  function bc(e, t) {
    t = (t & 4) !== 0
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        u = i.event
      i = i.listeners
      e: {
        var c = void 0
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var w = i[p],
              E = w.instance,
              D = w.currentTarget
            if (((w = w.listener), E !== c && u.isPropagationStopped())) break e
            $c(u, w, D), (c = E)
          }
        else
          for (p = 0; p < i.length; p++) {
            if (
              ((w = i[p]),
              (E = w.instance),
              (D = w.currentTarget),
              (w = w.listener),
              E !== c && u.isPropagationStopped())
            )
              break e
            $c(u, w, D), (c = E)
          }
      }
    }
    if (Ho) throw ((e = Ki), (Ho = !1), (Ki = null), e)
  }
  function Se(e, t) {
    var r = t[xs]
    r === void 0 && (r = t[xs] = new Set())
    var i = e + '__bubble'
    r.has(i) || (Hc(t, e, 2, !1), r.add(i))
  }
  function ys(e, t, r) {
    var i = 0
    t && (i |= 4), Hc(r, e, i, t)
  }
  var il = '_reactListening' + Math.random().toString(36).slice(2)
  function eo(e) {
    if (!e[il]) {
      ;(e[il] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (Vm.has(r) || ys(r, !1, e), ys(r, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[il] || ((t[il] = !0), ys('selectionchange', !1, t))
    }
  }
  function Hc(e, t, r, i) {
    switch (dc(t)) {
      case 1:
        var u = om
        break
      case 4:
        u = lm
        break
      default:
        u = Zi
    }
    ;(r = u.bind(null, t, r, e)),
      (u = void 0),
      !Wi ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (u = !0),
      i
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1)
  }
  function gs(e, t, r, i, u) {
    var c = i
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return
        var p = i.tag
        if (p === 3 || p === 4) {
          var w = i.stateNode.containerInfo
          if (w === u || (w.nodeType === 8 && w.parentNode === u)) break
          if (p === 4)
            for (p = i.return; p !== null; ) {
              var E = p.tag
              if (
                (E === 3 || E === 4) &&
                ((E = p.stateNode.containerInfo),
                E === u || (E.nodeType === 8 && E.parentNode === u))
              )
                return
              p = p.return
            }
          for (; w !== null; ) {
            if (((p = An(w)), p === null)) return
            if (((E = p.tag), E === 5 || E === 6)) {
              i = c = p
              continue e
            }
            w = w.parentNode
          }
        }
        i = i.return
      }
    Qu(function () {
      var D = c,
        j = bi(r),
        U = []
      e: {
        var M = Bc.get(e)
        if (M !== void 0) {
          var W = ns,
            Q = e
          switch (e) {
            case 'keypress':
              if (el(r) === 0) break e
            case 'keydown':
            case 'keyup':
              W = _m
              break
            case 'focusin':
              ;(Q = 'focus'), (W = ls)
              break
            case 'focusout':
              ;(Q = 'blur'), (W = ls)
              break
            case 'beforeblur':
            case 'afterblur':
              W = ls
              break
            case 'click':
              if (r.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              W = mc
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = am
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = xm
              break
            case Fc:
            case Mc:
            case Ic:
              W = fm
              break
            case jc:
              W = km
              break
            case 'scroll':
              W = im
              break
            case 'wheel':
              W = Pm
              break
            case 'copy':
            case 'cut':
            case 'paste':
              W = pm
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = gc
          }
          var X = (t & 4) !== 0,
            De = !X && e === 'scroll',
            N = X ? (M !== null ? M + 'Capture' : null) : M
          X = []
          for (var x = D, T; x !== null; ) {
            T = x
            var $ = T.stateNode
            if (
              (T.tag === 5 &&
                $ !== null &&
                ((T = $),
                N !== null &&
                  (($ = Mr(x, N)), $ != null && X.push(to(x, $, T)))),
              De)
            )
              break
            x = x.return
          }
          0 < X.length &&
            ((M = new W(M, Q, null, r, j)), U.push({ event: M, listeners: X }))
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((M = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            M &&
              r !== $i &&
              (Q = r.relatedTarget || r.fromElement) &&
              (An(Q) || Q[Wt]))
          )
            break e
          if (
            (W || M) &&
            ((M =
              j.window === j
                ? j
                : (M = j.ownerDocument)
                ? M.defaultView || M.parentWindow
                : window),
            W
              ? ((Q = r.relatedTarget || r.toElement),
                (W = D),
                (Q = Q ? An(Q) : null),
                Q !== null &&
                  ((De = On(Q)), Q !== De || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((W = null), (Q = D)),
            W !== Q)
          ) {
            if (
              ((X = mc),
              ($ = 'onMouseLeave'),
              (N = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((X = gc),
                ($ = 'onPointerLeave'),
                (N = 'onPointerEnter'),
                (x = 'pointer')),
              (De = W == null ? M : sr(W)),
              (T = Q == null ? M : sr(Q)),
              (M = new X($, x + 'leave', W, r, j)),
              (M.target = De),
              (M.relatedTarget = T),
              ($ = null),
              An(j) === D &&
                ((X = new X(N, x + 'enter', Q, r, j)),
                (X.target = T),
                (X.relatedTarget = De),
                ($ = X)),
              (De = $),
              W && Q)
            )
              t: {
                for (X = W, N = Q, x = 0, T = X; T; T = lr(T)) x++
                for (T = 0, $ = N; $; $ = lr($)) T++
                for (; 0 < x - T; ) (X = lr(X)), x--
                for (; 0 < T - x; ) (N = lr(N)), T--
                for (; x--; ) {
                  if (X === N || (N !== null && X === N.alternate)) break t
                  ;(X = lr(X)), (N = lr(N))
                }
                X = null
              }
            else X = null
            W !== null && Vc(U, M, W, X, !1),
              Q !== null && De !== null && Vc(U, De, Q, X, !0)
          }
        }
        e: {
          if (
            ((M = D ? sr(D) : window),
            (W = M.nodeName && M.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && M.type === 'file'))
          )
            var G = zm
          else if (xc(M))
            if (kc) G = jm
            else {
              G = Mm
              var Z = Fm
            }
          else
            (W = M.nodeName) &&
              W.toLowerCase() === 'input' &&
              (M.type === 'checkbox' || M.type === 'radio') &&
              (G = Im)
          if (G && (G = G(e, D))) {
            Cc(U, G, r, j)
            break e
          }
          Z && Z(e, M, D),
            e === 'focusout' &&
              (Z = M._wrapperState) &&
              Z.controlled &&
              M.type === 'number' &&
              Mi(M, 'number', M.value)
        }
        switch (((Z = D ? sr(D) : window), e)) {
          case 'focusin':
            ;(xc(Z) || Z.contentEditable === 'true') &&
              ((rr = Z), (fs = D), (Yr = null))
            break
          case 'focusout':
            Yr = fs = rr = null
            break
          case 'mousedown':
            ds = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(ds = !1), Lc(U, r, j)
            break
          case 'selectionchange':
            if ($m) break
          case 'keydown':
          case 'keyup':
            Lc(U, r, j)
        }
        var ee
        if (ss)
          e: {
            switch (e) {
              case 'compositionstart':
                var oe = 'onCompositionStart'
                break e
              case 'compositionend':
                oe = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                oe = 'onCompositionUpdate'
                break e
            }
            oe = void 0
          }
        else
          nr
            ? Sc(e, r) && (oe = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (oe = 'onCompositionStart')
        oe &&
          (vc &&
            r.locale !== 'ko' &&
            (nr || oe !== 'onCompositionStart'
              ? oe === 'onCompositionEnd' && nr && (ee = pc())
              : ((fn = j),
                (ts = 'value' in fn ? fn.value : fn.textContent),
                (nr = !0))),
          (Z = sl(D, oe)),
          0 < Z.length &&
            ((oe = new yc(oe, e, null, r, j)),
            U.push({ event: oe, listeners: Z }),
            ee
              ? (oe.data = ee)
              : ((ee = Ec(r)), ee !== null && (oe.data = ee)))),
          (ee = Tm ? Om(e, r) : Am(e, r)) &&
            ((D = sl(D, 'onBeforeInput')),
            0 < D.length &&
              ((j = new yc('onBeforeInput', 'beforeinput', null, r, j)),
              U.push({ event: j, listeners: D }),
              (j.data = ee)))
      }
      bc(U, t)
    })
  }
  function to(e, t, r) {
    return { instance: e, listener: t, currentTarget: r }
  }
  function sl(e, t) {
    for (var r = t + 'Capture', i = []; e !== null; ) {
      var u = e,
        c = u.stateNode
      u.tag === 5 &&
        c !== null &&
        ((u = c),
        (c = Mr(e, r)),
        c != null && i.unshift(to(e, c, u)),
        (c = Mr(e, t)),
        c != null && i.push(to(e, c, u))),
        (e = e.return)
    }
    return i
  }
  function lr(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Vc(e, t, r, i, u) {
    for (var c = t._reactName, p = []; r !== null && r !== i; ) {
      var w = r,
        E = w.alternate,
        D = w.stateNode
      if (E !== null && E === i) break
      w.tag === 5 &&
        D !== null &&
        ((w = D),
        u
          ? ((E = Mr(r, c)), E != null && p.unshift(to(r, E, w)))
          : u || ((E = Mr(r, c)), E != null && p.push(to(r, E, w)))),
        (r = r.return)
    }
    p.length !== 0 && e.push({ event: t, listeners: p })
  }
  var Wm = /\r\n?/g,
    Km = /\u0000|\uFFFD/g
  function Wc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Wm,
        `
`
      )
      .replace(Km, '')
  }
  function al(e, t, r) {
    if (((t = Wc(t)), Wc(e) !== t && r)) throw Error(l(425))
  }
  function ul() {}
  var vs = null,
    ws = null
  function _s(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var Ss = typeof setTimeout == 'function' ? setTimeout : void 0,
    qm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Kc = typeof Promise == 'function' ? Promise : void 0,
    Qm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Kc < 'u'
        ? function (e) {
            return Kc.resolve(null).then(e).catch(Jm)
          }
        : Ss
  function Jm(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Es(e, t) {
    var r = t,
      i = 0
    do {
      var u = r.nextSibling
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === '/$')) {
          if (i === 0) {
            e.removeChild(u), Wr(t)
            return
          }
          i--
        } else (r !== '$' && r !== '$?' && r !== '$!') || i++
      r = u
    } while (r)
    Wr(t)
  }
  function pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  function qc(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e
          t--
        } else r === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var ir = Math.random().toString(36).slice(2),
    jt = '__reactFiber$' + ir,
    no = '__reactProps$' + ir,
    Wt = '__reactContainer$' + ir,
    xs = '__reactEvents$' + ir,
    Xm = '__reactListeners$' + ir,
    Gm = '__reactHandles$' + ir
  function An(e) {
    var t = e[jt]
    if (t) return t
    for (var r = e.parentNode; r; ) {
      if ((t = r[Wt] || r[jt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = qc(e); e !== null; ) {
            if ((r = e[jt])) return r
            e = qc(e)
          }
        return t
      }
      ;(e = r), (r = e.parentNode)
    }
    return null
  }
  function ro(e) {
    return (
      (e = e[jt] || e[Wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function sr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(l(33))
  }
  function cl(e) {
    return e[no] || null
  }
  var Cs = [],
    ar = -1
  function hn(e) {
    return { current: e }
  }
  function Ee(e) {
    0 > ar || ((e.current = Cs[ar]), (Cs[ar] = null), ar--)
  }
  function _e(e, t) {
    ar++, (Cs[ar] = e.current), (e.current = t)
  }
  var mn = {},
    qe = hn(mn),
    et = hn(!1),
    Dn = mn
  function ur(e, t) {
    var r = e.type.contextTypes
    if (!r) return mn
    var i = e.stateNode
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext
    var u = {},
      c
    for (c in r) u[c] = t[c]
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    )
  }
  function tt(e) {
    return (e = e.childContextTypes), e != null
  }
  function fl() {
    Ee(et), Ee(qe)
  }
  function Qc(e, t, r) {
    if (qe.current !== mn) throw Error(l(168))
    _e(qe, t), _e(et, r)
  }
  function Jc(e, t, r) {
    var i = e.stateNode
    if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
      return r
    i = i.getChildContext()
    for (var u in i) if (!(u in t)) throw Error(l(108, we(e) || 'Unknown', u))
    return K({}, r, i)
  }
  function dl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        mn),
      (Dn = qe.current),
      _e(qe, e),
      _e(et, et.current),
      !0
    )
  }
  function Xc(e, t, r) {
    var i = e.stateNode
    if (!i) throw Error(l(169))
    r
      ? ((e = Jc(e, t, Dn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Ee(et),
        Ee(qe),
        _e(qe, e))
      : Ee(et),
      _e(et, r)
  }
  var Kt = null,
    pl = !1,
    ks = !1
  function Gc(e) {
    Kt === null ? (Kt = [e]) : Kt.push(e)
  }
  function Ym(e) {
    ;(pl = !0), Gc(e)
  }
  function yn() {
    if (!ks && Kt !== null) {
      ks = !0
      var e = 0,
        t = me
      try {
        var r = Kt
        for (me = 1; e < r.length; e++) {
          var i = r[e]
          do i = i(!0)
          while (i !== null)
        }
        ;(Kt = null), (pl = !1)
      } catch (u) {
        throw (Kt !== null && (Kt = Kt.slice(e + 1)), Zu(qi, yn), u)
      } finally {
        ;(me = t), (ks = !1)
      }
    }
    return null
  }
  var cr = [],
    fr = 0,
    hl = null,
    ml = 0,
    gt = [],
    vt = 0,
    Ln = null,
    qt = 1,
    Qt = ''
  function zn(e, t) {
    ;(cr[fr++] = ml), (cr[fr++] = hl), (hl = e), (ml = t)
  }
  function Yc(e, t, r) {
    ;(gt[vt++] = qt), (gt[vt++] = Qt), (gt[vt++] = Ln), (Ln = e)
    var i = qt
    e = Qt
    var u = 32 - kt(i) - 1
    ;(i &= ~(1 << u)), (r += 1)
    var c = 32 - kt(t) + u
    if (30 < c) {
      var p = u - (u % 5)
      ;(c = (i & ((1 << p) - 1)).toString(32)),
        (i >>= p),
        (u -= p),
        (qt = (1 << (32 - kt(t) + u)) | (r << u) | i),
        (Qt = c + e)
    } else (qt = (1 << c) | (r << u) | i), (Qt = e)
  }
  function Rs(e) {
    e.return !== null && (zn(e, 1), Yc(e, 1, 0))
  }
  function Ps(e) {
    for (; e === hl; )
      (hl = cr[--fr]), (cr[fr] = null), (ml = cr[--fr]), (cr[fr] = null)
    for (; e === Ln; )
      (Ln = gt[--vt]),
        (gt[vt] = null),
        (Qt = gt[--vt]),
        (gt[vt] = null),
        (qt = gt[--vt]),
        (gt[vt] = null)
  }
  var ft = null,
    dt = null,
    ke = !1,
    Pt = null
  function Zc(e, t) {
    var r = Et(5, null, null, 0)
    ;(r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
  }
  function ef(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ft = e), (dt = pn(t.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Ln !== null ? { id: qt, overflow: Qt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Et(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ft = e),
              (dt = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Ns(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function Ts(e) {
    if (ke) {
      var t = dt
      if (t) {
        var r = t
        if (!ef(e, t)) {
          if (Ns(e)) throw Error(l(418))
          t = pn(r.nextSibling)
          var i = ft
          t && ef(e, t)
            ? Zc(i, r)
            : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (ft = e))
        }
      } else {
        if (Ns(e)) throw Error(l(418))
        ;(e.flags = (e.flags & -4097) | 2), (ke = !1), (ft = e)
      }
    }
  }
  function tf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return
    ft = e
  }
  function yl(e) {
    if (e !== ft) return !1
    if (!ke) return tf(e), (ke = !0), !1
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !_s(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if (Ns(e)) throw (nf(), Error(l(418)))
      for (; t; ) Zc(e, t), (t = pn(t.nextSibling))
    }
    if ((tf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data
            if (r === '/$') {
              if (t === 0) {
                dt = pn(e.nextSibling)
                break e
              }
              t--
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++
          }
          e = e.nextSibling
        }
        dt = null
      }
    } else dt = ft ? pn(e.stateNode.nextSibling) : null
    return !0
  }
  function nf() {
    for (var e = dt; e; ) e = pn(e.nextSibling)
  }
  function dr() {
    ;(dt = ft = null), (ke = !1)
  }
  function Os(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e)
  }
  var Zm = b.ReactCurrentBatchConfig
  function oo(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309))
          var i = r.stateNode
        }
        if (!i) throw Error(l(147, e))
        var u = i,
          c = '' + e
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var w = u.refs
              p === null ? delete w[c] : (w[c] = p)
            }),
            (t._stringRef = c),
            t)
      }
      if (typeof e != 'string') throw Error(l(284))
      if (!r._owner) throw Error(l(290, e))
    }
    return e
  }
  function gl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    )
  }
  function rf(e) {
    var t = e._init
    return t(e._payload)
  }
  function of(e) {
    function t(N, x) {
      if (e) {
        var T = N.deletions
        T === null ? ((N.deletions = [x]), (N.flags |= 16)) : T.push(x)
      }
    }
    function r(N, x) {
      if (!e) return null
      for (; x !== null; ) t(N, x), (x = x.sibling)
      return null
    }
    function i(N, x) {
      for (N = new Map(); x !== null; )
        x.key !== null ? N.set(x.key, x) : N.set(x.index, x), (x = x.sibling)
      return N
    }
    function u(N, x) {
      return (N = Cn(N, x)), (N.index = 0), (N.sibling = null), N
    }
    function c(N, x, T) {
      return (
        (N.index = T),
        e
          ? ((T = N.alternate),
            T !== null
              ? ((T = T.index), T < x ? ((N.flags |= 2), x) : T)
              : ((N.flags |= 2), x))
          : ((N.flags |= 1048576), x)
      )
    }
    function p(N) {
      return e && N.alternate === null && (N.flags |= 2), N
    }
    function w(N, x, T, $) {
      return x === null || x.tag !== 6
        ? ((x = Sa(T, N.mode, $)), (x.return = N), x)
        : ((x = u(x, T)), (x.return = N), x)
    }
    function E(N, x, T, $) {
      var G = T.type
      return G === te
        ? j(N, x, T.props.children, $, T.key)
        : x !== null &&
          (x.elementType === G ||
            (typeof G == 'object' &&
              G !== null &&
              G.$$typeof === Oe &&
              rf(G) === x.type))
        ? (($ = u(x, T.props)), ($.ref = oo(N, x, T)), ($.return = N), $)
        : (($ = $l(T.type, T.key, T.props, null, N.mode, $)),
          ($.ref = oo(N, x, T)),
          ($.return = N),
          $)
    }
    function D(N, x, T, $) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== T.containerInfo ||
        x.stateNode.implementation !== T.implementation
        ? ((x = Ea(T, N.mode, $)), (x.return = N), x)
        : ((x = u(x, T.children || [])), (x.return = N), x)
    }
    function j(N, x, T, $, G) {
      return x === null || x.tag !== 7
        ? ((x = bn(T, N.mode, $, G)), (x.return = N), x)
        : ((x = u(x, T)), (x.return = N), x)
    }
    function U(N, x, T) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (x = Sa('' + x, N.mode, T)), (x.return = N), x
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case V:
            return (
              (T = $l(x.type, x.key, x.props, null, N.mode, T)),
              (T.ref = oo(N, null, x)),
              (T.return = N),
              T
            )
          case J:
            return (x = Ea(x, N.mode, T)), (x.return = N), x
          case Oe:
            var $ = x._init
            return U(N, $(x._payload), T)
        }
        if (Lr(x) || ne(x))
          return (x = bn(x, N.mode, T, null)), (x.return = N), x
        gl(N, x)
      }
      return null
    }
    function M(N, x, T, $) {
      var G = x !== null ? x.key : null
      if ((typeof T == 'string' && T !== '') || typeof T == 'number')
        return G !== null ? null : w(N, x, '' + T, $)
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case V:
            return T.key === G ? E(N, x, T, $) : null
          case J:
            return T.key === G ? D(N, x, T, $) : null
          case Oe:
            return (G = T._init), M(N, x, G(T._payload), $)
        }
        if (Lr(T) || ne(T)) return G !== null ? null : j(N, x, T, $, null)
        gl(N, T)
      }
      return null
    }
    function W(N, x, T, $, G) {
      if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
        return (N = N.get(T) || null), w(x, N, '' + $, G)
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case V:
            return (
              (N = N.get($.key === null ? T : $.key) || null), E(x, N, $, G)
            )
          case J:
            return (
              (N = N.get($.key === null ? T : $.key) || null), D(x, N, $, G)
            )
          case Oe:
            var Z = $._init
            return W(N, x, T, Z($._payload), G)
        }
        if (Lr($) || ne($)) return (N = N.get(T) || null), j(x, N, $, G, null)
        gl(x, $)
      }
      return null
    }
    function Q(N, x, T, $) {
      for (
        var G = null, Z = null, ee = x, oe = (x = 0), Be = null;
        ee !== null && oe < T.length;
        oe++
      ) {
        ee.index > oe ? ((Be = ee), (ee = null)) : (Be = ee.sibling)
        var pe = M(N, ee, T[oe], $)
        if (pe === null) {
          ee === null && (ee = Be)
          break
        }
        e && ee && pe.alternate === null && t(N, ee),
          (x = c(pe, x, oe)),
          Z === null ? (G = pe) : (Z.sibling = pe),
          (Z = pe),
          (ee = Be)
      }
      if (oe === T.length) return r(N, ee), ke && zn(N, oe), G
      if (ee === null) {
        for (; oe < T.length; oe++)
          (ee = U(N, T[oe], $)),
            ee !== null &&
              ((x = c(ee, x, oe)),
              Z === null ? (G = ee) : (Z.sibling = ee),
              (Z = ee))
        return ke && zn(N, oe), G
      }
      for (ee = i(N, ee); oe < T.length; oe++)
        (Be = W(ee, N, oe, T[oe], $)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              ee.delete(Be.key === null ? oe : Be.key),
            (x = c(Be, x, oe)),
            Z === null ? (G = Be) : (Z.sibling = Be),
            (Z = Be))
      return (
        e &&
          ee.forEach(function (kn) {
            return t(N, kn)
          }),
        ke && zn(N, oe),
        G
      )
    }
    function X(N, x, T, $) {
      var G = ne(T)
      if (typeof G != 'function') throw Error(l(150))
      if (((T = G.call(T)), T == null)) throw Error(l(151))
      for (
        var Z = (G = null), ee = x, oe = (x = 0), Be = null, pe = T.next();
        ee !== null && !pe.done;
        oe++, pe = T.next()
      ) {
        ee.index > oe ? ((Be = ee), (ee = null)) : (Be = ee.sibling)
        var kn = M(N, ee, pe.value, $)
        if (kn === null) {
          ee === null && (ee = Be)
          break
        }
        e && ee && kn.alternate === null && t(N, ee),
          (x = c(kn, x, oe)),
          Z === null ? (G = kn) : (Z.sibling = kn),
          (Z = kn),
          (ee = Be)
      }
      if (pe.done) return r(N, ee), ke && zn(N, oe), G
      if (ee === null) {
        for (; !pe.done; oe++, pe = T.next())
          (pe = U(N, pe.value, $)),
            pe !== null &&
              ((x = c(pe, x, oe)),
              Z === null ? (G = pe) : (Z.sibling = pe),
              (Z = pe))
        return ke && zn(N, oe), G
      }
      for (ee = i(N, ee); !pe.done; oe++, pe = T.next())
        (pe = W(ee, N, oe, pe.value, $)),
          pe !== null &&
            (e &&
              pe.alternate !== null &&
              ee.delete(pe.key === null ? oe : pe.key),
            (x = c(pe, x, oe)),
            Z === null ? (G = pe) : (Z.sibling = pe),
            (Z = pe))
      return (
        e &&
          ee.forEach(function (D0) {
            return t(N, D0)
          }),
        ke && zn(N, oe),
        G
      )
    }
    function De(N, x, T, $) {
      if (
        (typeof T == 'object' &&
          T !== null &&
          T.type === te &&
          T.key === null &&
          (T = T.props.children),
        typeof T == 'object' && T !== null)
      ) {
        switch (T.$$typeof) {
          case V:
            e: {
              for (var G = T.key, Z = x; Z !== null; ) {
                if (Z.key === G) {
                  if (((G = T.type), G === te)) {
                    if (Z.tag === 7) {
                      r(N, Z.sibling),
                        (x = u(Z, T.props.children)),
                        (x.return = N),
                        (N = x)
                      break e
                    }
                  } else if (
                    Z.elementType === G ||
                    (typeof G == 'object' &&
                      G !== null &&
                      G.$$typeof === Oe &&
                      rf(G) === Z.type)
                  ) {
                    r(N, Z.sibling),
                      (x = u(Z, T.props)),
                      (x.ref = oo(N, Z, T)),
                      (x.return = N),
                      (N = x)
                    break e
                  }
                  r(N, Z)
                  break
                } else t(N, Z)
                Z = Z.sibling
              }
              T.type === te
                ? ((x = bn(T.props.children, N.mode, $, T.key)),
                  (x.return = N),
                  (N = x))
                : (($ = $l(T.type, T.key, T.props, null, N.mode, $)),
                  ($.ref = oo(N, x, T)),
                  ($.return = N),
                  (N = $))
            }
            return p(N)
          case J:
            e: {
              for (Z = T.key; x !== null; ) {
                if (x.key === Z)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === T.containerInfo &&
                    x.stateNode.implementation === T.implementation
                  ) {
                    r(N, x.sibling),
                      (x = u(x, T.children || [])),
                      (x.return = N),
                      (N = x)
                    break e
                  } else {
                    r(N, x)
                    break
                  }
                else t(N, x)
                x = x.sibling
              }
              ;(x = Ea(T, N.mode, $)), (x.return = N), (N = x)
            }
            return p(N)
          case Oe:
            return (Z = T._init), De(N, x, Z(T._payload), $)
        }
        if (Lr(T)) return Q(N, x, T, $)
        if (ne(T)) return X(N, x, T, $)
        gl(N, T)
      }
      return (typeof T == 'string' && T !== '') || typeof T == 'number'
        ? ((T = '' + T),
          x !== null && x.tag === 6
            ? (r(N, x.sibling), (x = u(x, T)), (x.return = N), (N = x))
            : (r(N, x), (x = Sa(T, N.mode, $)), (x.return = N), (N = x)),
          p(N))
        : r(N, x)
    }
    return De
  }
  var pr = of(!0),
    lf = of(!1),
    vl = hn(null),
    wl = null,
    hr = null,
    As = null
  function Ds() {
    As = hr = wl = null
  }
  function Ls(e) {
    var t = vl.current
    Ee(vl), (e._currentValue = t)
  }
  function zs(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break
      e = e.return
    }
  }
  function mr(e, t) {
    ;(wl = e),
      (As = hr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (nt = !0), (e.firstContext = null))
  }
  function wt(e) {
    var t = e._currentValue
    if (As !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
        if (wl === null) throw Error(l(308))
        ;(hr = e), (wl.dependencies = { lanes: 0, firstContext: e })
      } else hr = hr.next = e
    return t
  }
  var Fn = null
  function Fs(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e)
  }
  function sf(e, t, r, i) {
    var u = t.interleaved
    return (
      u === null ? ((r.next = r), Fs(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      Jt(e, i)
    )
  }
  function Jt(e, t) {
    e.lanes |= t
    var r = e.alternate
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return)
    return r.tag === 3 ? r.stateNode : null
  }
  var gn = !1
  function Ms(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function af(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function Xt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function vn(e, t, r) {
    var i = e.updateQueue
    if (i === null) return null
    if (((i = i.shared), ce & 2)) {
      var u = i.pending
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (i.pending = t),
        Jt(e, r)
      )
    }
    return (
      (u = i.interleaved),
      u === null ? ((t.next = t), Fs(i)) : ((t.next = u.next), (u.next = t)),
      (i.interleaved = t),
      Jt(e, r)
    )
  }
  function _l(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var i = t.lanes
      ;(i &= e.pendingLanes), (r |= i), (t.lanes = r), Xi(e, r)
    }
  }
  function uf(e, t) {
    var r = e.updateQueue,
      i = e.alternate
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var u = null,
        c = null
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }
          c === null ? (u = c = p) : (c = c.next = p), (r = r.next)
        } while (r !== null)
        c === null ? (u = c = t) : (c = c.next = t)
      } else u = c = t
      ;(r = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = r)
      return
    }
    ;(e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t)
  }
  function Sl(e, t, r, i) {
    var u = e.updateQueue
    gn = !1
    var c = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      w = u.shared.pending
    if (w !== null) {
      u.shared.pending = null
      var E = w,
        D = E.next
      ;(E.next = null), p === null ? (c = D) : (p.next = D), (p = E)
      var j = e.alternate
      j !== null &&
        ((j = j.updateQueue),
        (w = j.lastBaseUpdate),
        w !== p &&
          (w === null ? (j.firstBaseUpdate = D) : (w.next = D),
          (j.lastBaseUpdate = E)))
    }
    if (c !== null) {
      var U = u.baseState
      ;(p = 0), (j = D = E = null), (w = c)
      do {
        var M = w.lane,
          W = w.eventTime
        if ((i & M) === M) {
          j !== null &&
            (j = j.next =
              {
                eventTime: W,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null,
              })
          e: {
            var Q = e,
              X = w
            switch (((M = t), (W = r), X.tag)) {
              case 1:
                if (((Q = X.payload), typeof Q == 'function')) {
                  U = Q.call(W, U, M)
                  break e
                }
                U = Q
                break e
              case 3:
                Q.flags = (Q.flags & -65537) | 128
              case 0:
                if (
                  ((Q = X.payload),
                  (M = typeof Q == 'function' ? Q.call(W, U, M) : Q),
                  M == null)
                )
                  break e
                U = K({}, U, M)
                break e
              case 2:
                gn = !0
            }
          }
          w.callback !== null &&
            w.lane !== 0 &&
            ((e.flags |= 64),
            (M = u.effects),
            M === null ? (u.effects = [w]) : M.push(w))
        } else
          (W = {
            eventTime: W,
            lane: M,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            j === null ? ((D = j = W), (E = U)) : (j = j.next = W),
            (p |= M)
        if (((w = w.next), w === null)) {
          if (((w = u.shared.pending), w === null)) break
          ;(M = w),
            (w = M.next),
            (M.next = null),
            (u.lastBaseUpdate = M),
            (u.shared.pending = null)
        }
      } while (!0)
      if (
        (j === null && (E = U),
        (u.baseState = E),
        (u.firstBaseUpdate = D),
        (u.lastBaseUpdate = j),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t
        do (p |= u.lane), (u = u.next)
        while (u !== t)
      } else c === null && (u.shared.lanes = 0)
      ;(jn |= p), (e.lanes = p), (e.memoizedState = U)
    }
  }
  function cf(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          u = i.callback
        if (u !== null) {
          if (((i.callback = null), (i = r), typeof u != 'function'))
            throw Error(l(191, u))
          u.call(i)
        }
      }
  }
  var lo = {},
    Bt = hn(lo),
    io = hn(lo),
    so = hn(lo)
  function Mn(e) {
    if (e === lo) throw Error(l(174))
    return e
  }
  function Is(e, t) {
    switch ((_e(so, t), _e(io, e), _e(Bt, lo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ji(null, '')
        break
      default:
        ;(e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ji(t, e))
    }
    Ee(Bt), _e(Bt, t)
  }
  function yr() {
    Ee(Bt), Ee(io), Ee(so)
  }
  function ff(e) {
    Mn(so.current)
    var t = Mn(Bt.current),
      r = ji(t, e.type)
    t !== r && (_e(io, e), _e(Bt, r))
  }
  function js(e) {
    io.current === e && (Ee(Bt), Ee(io))
  }
  var Pe = hn(0)
  function El(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var Bs = []
  function Us() {
    for (var e = 0; e < Bs.length; e++)
      Bs[e]._workInProgressVersionPrimary = null
    Bs.length = 0
  }
  var xl = b.ReactCurrentDispatcher,
    $s = b.ReactCurrentBatchConfig,
    In = 0,
    Ne = null,
    Fe = null,
    Ie = null,
    Cl = !1,
    ao = !1,
    uo = 0,
    e0 = 0
  function Qe() {
    throw Error(l(321))
  }
  function bs(e, t) {
    if (t === null) return !1
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Rt(e[r], t[r])) return !1
    return !0
  }
  function Hs(e, t, r, i, u, c) {
    if (
      ((In = c),
      (Ne = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (xl.current = e === null || e.memoizedState === null ? o0 : l0),
      (e = r(i, u)),
      ao)
    ) {
      c = 0
      do {
        if (((ao = !1), (uo = 0), 25 <= c)) throw Error(l(301))
        ;(c += 1),
          (Ie = Fe = null),
          (t.updateQueue = null),
          (xl.current = i0),
          (e = r(i, u))
      } while (ao)
    }
    if (
      ((xl.current = Pl),
      (t = Fe !== null && Fe.next !== null),
      (In = 0),
      (Ie = Fe = Ne = null),
      (Cl = !1),
      t)
    )
      throw Error(l(300))
    return e
  }
  function Vs() {
    var e = uo !== 0
    return (uo = 0), e
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return Ie === null ? (Ne.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie
  }
  function _t() {
    if (Fe === null) {
      var e = Ne.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Fe.next
    var t = Ie === null ? Ne.memoizedState : Ie.next
    if (t !== null) (Ie = t), (Fe = e)
    else {
      if (e === null) throw Error(l(310))
      ;(Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        Ie === null ? (Ne.memoizedState = Ie = e) : (Ie = Ie.next = e)
    }
    return Ie
  }
  function co(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function Ws(e) {
    var t = _t(),
      r = t.queue
    if (r === null) throw Error(l(311))
    r.lastRenderedReducer = e
    var i = Fe,
      u = i.baseQueue,
      c = r.pending
    if (c !== null) {
      if (u !== null) {
        var p = u.next
        ;(u.next = c.next), (c.next = p)
      }
      ;(i.baseQueue = u = c), (r.pending = null)
    }
    if (u !== null) {
      ;(c = u.next), (i = i.baseState)
      var w = (p = null),
        E = null,
        D = c
      do {
        var j = D.lane
        if ((In & j) === j)
          E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: D.action,
                hasEagerState: D.hasEagerState,
                eagerState: D.eagerState,
                next: null,
              }),
            (i = D.hasEagerState ? D.eagerState : e(i, D.action))
        else {
          var U = {
            lane: j,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }
          E === null ? ((w = E = U), (p = i)) : (E = E.next = U),
            (Ne.lanes |= j),
            (jn |= j)
        }
        D = D.next
      } while (D !== null && D !== c)
      E === null ? (p = i) : (E.next = w),
        Rt(i, t.memoizedState) || (nt = !0),
        (t.memoizedState = i),
        (t.baseState = p),
        (t.baseQueue = E),
        (r.lastRenderedState = i)
    }
    if (((e = r.interleaved), e !== null)) {
      u = e
      do (c = u.lane), (Ne.lanes |= c), (jn |= c), (u = u.next)
      while (u !== e)
    } else u === null && (r.lanes = 0)
    return [t.memoizedState, r.dispatch]
  }
  function Ks(e) {
    var t = _t(),
      r = t.queue
    if (r === null) throw Error(l(311))
    r.lastRenderedReducer = e
    var i = r.dispatch,
      u = r.pending,
      c = t.memoizedState
    if (u !== null) {
      r.pending = null
      var p = (u = u.next)
      do (c = e(c, p.action)), (p = p.next)
      while (p !== u)
      Rt(c, t.memoizedState) || (nt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c)
    }
    return [c, i]
  }
  function df() {}
  function pf(e, t) {
    var r = Ne,
      i = _t(),
      u = t(),
      c = !Rt(i.memoizedState, u)
    if (
      (c && ((i.memoizedState = u), (nt = !0)),
      (i = i.queue),
      qs(yf.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || c || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        fo(9, mf.bind(null, r, i, u, t), void 0, null),
        je === null)
      )
        throw Error(l(349))
      In & 30 || hf(r, t, u)
    }
    return u
  }
  function hf(e, t, r) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
  }
  function mf(e, t, r, i) {
    ;(t.value = r), (t.getSnapshot = i), gf(t) && vf(e)
  }
  function yf(e, t, r) {
    return r(function () {
      gf(t) && vf(e)
    })
  }
  function gf(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var r = t()
      return !Rt(e, r)
    } catch {
      return !0
    }
  }
  function vf(e) {
    var t = Jt(e, 1)
    t !== null && At(t, e, 1, -1)
  }
  function wf(e) {
    var t = Ut()
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: co,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = r0.bind(null, Ne, e)),
      [t.memoizedState, e]
    )
  }
  function fo(e, t, r, i) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
      (t = Ne.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ne.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e))),
      e
    )
  }
  function _f() {
    return _t().memoizedState
  }
  function kl(e, t, r, i) {
    var u = Ut()
    ;(Ne.flags |= e),
      (u.memoizedState = fo(1 | t, r, void 0, i === void 0 ? null : i))
  }
  function Rl(e, t, r, i) {
    var u = _t()
    i = i === void 0 ? null : i
    var c = void 0
    if (Fe !== null) {
      var p = Fe.memoizedState
      if (((c = p.destroy), i !== null && bs(i, p.deps))) {
        u.memoizedState = fo(t, r, c, i)
        return
      }
    }
    ;(Ne.flags |= e), (u.memoizedState = fo(1 | t, r, c, i))
  }
  function Sf(e, t) {
    return kl(8390656, 8, e, t)
  }
  function qs(e, t) {
    return Rl(2048, 8, e, t)
  }
  function Ef(e, t) {
    return Rl(4, 2, e, t)
  }
  function xf(e, t) {
    return Rl(4, 4, e, t)
  }
  function Cf(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function kf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Rl(4, 4, Cf.bind(null, t, e), r)
    )
  }
  function Qs() {}
  function Rf(e, t) {
    var r = _t()
    t = t === void 0 ? null : t
    var i = r.memoizedState
    return i !== null && t !== null && bs(t, i[1])
      ? i[0]
      : ((r.memoizedState = [e, t]), e)
  }
  function Pf(e, t) {
    var r = _t()
    t = t === void 0 ? null : t
    var i = r.memoizedState
    return i !== null && t !== null && bs(t, i[1])
      ? i[0]
      : ((e = e()), (r.memoizedState = [e, t]), e)
  }
  function Nf(e, t, r) {
    return In & 21
      ? (Rt(r, t) ||
          ((r = rc()), (Ne.lanes |= r), (jn |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = r))
  }
  function t0(e, t) {
    var r = me
    ;(me = r !== 0 && 4 > r ? r : 4), e(!0)
    var i = $s.transition
    $s.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(me = r), ($s.transition = i)
    }
  }
  function Tf() {
    return _t().memoizedState
  }
  function n0(e, t, r) {
    var i = En(e)
    if (
      ((r = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Of(e))
    )
      Af(t, r)
    else if (((r = sf(e, t, r, i)), r !== null)) {
      var u = Ze()
      At(r, e, i, u), Df(r, t, i)
    }
  }
  function r0(e, t, r) {
    var i = En(e),
      u = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (Of(e)) Af(t, u)
    else {
      var c = e.alternate
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            w = c(p, r)
          if (((u.hasEagerState = !0), (u.eagerState = w), Rt(w, p))) {
            var E = t.interleaved
            E === null
              ? ((u.next = u), Fs(t))
              : ((u.next = E.next), (E.next = u)),
              (t.interleaved = u)
            return
          }
        } catch {
        } finally {
        }
      ;(r = sf(e, t, u, i)),
        r !== null && ((u = Ze()), At(r, e, i, u), Df(r, t, i))
    }
  }
  function Of(e) {
    var t = e.alternate
    return e === Ne || (t !== null && t === Ne)
  }
  function Af(e, t) {
    ao = Cl = !0
    var r = e.pending
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t)
  }
  function Df(e, t, r) {
    if (r & 4194240) {
      var i = t.lanes
      ;(i &= e.pendingLanes), (r |= i), (t.lanes = r), Xi(e, r)
    }
  }
  var Pl = {
      readContext: wt,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    o0 = {
      readContext: wt,
      useCallback: function (e, t) {
        return (Ut().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: wt,
      useEffect: Sf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          kl(4194308, 4, Cf.bind(null, t, e), r)
        )
      },
      useLayoutEffect: function (e, t) {
        return kl(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return kl(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var r = Ut()
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        )
      },
      useReducer: function (e, t, r) {
        var i = Ut()
        return (
          (t = r !== void 0 ? r(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = n0.bind(null, Ne, e)),
          [i.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = Ut()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: wf,
      useDebugValue: Qs,
      useDeferredValue: function (e) {
        return (Ut().memoizedState = e)
      },
      useTransition: function () {
        var e = wf(!1),
          t = e[0]
        return (e = t0.bind(null, e[1])), (Ut().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var i = Ne,
          u = Ut()
        if (ke) {
          if (r === void 0) throw Error(l(407))
          r = r()
        } else {
          if (((r = t()), je === null)) throw Error(l(349))
          In & 30 || hf(i, t, r)
        }
        u.memoizedState = r
        var c = { value: r, getSnapshot: t }
        return (
          (u.queue = c),
          Sf(yf.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          fo(9, mf.bind(null, i, c, r, t), void 0, null),
          r
        )
      },
      useId: function () {
        var e = Ut(),
          t = je.identifierPrefix
        if (ke) {
          var r = Qt,
            i = qt
          ;(r = (i & ~(1 << (32 - kt(i) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = uo++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':')
        } else (r = e0++), (t = ':' + t + 'r' + r.toString(32) + ':')
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    l0 = {
      readContext: wt,
      useCallback: Rf,
      useContext: wt,
      useEffect: qs,
      useImperativeHandle: kf,
      useInsertionEffect: Ef,
      useLayoutEffect: xf,
      useMemo: Pf,
      useReducer: Ws,
      useRef: _f,
      useState: function () {
        return Ws(co)
      },
      useDebugValue: Qs,
      useDeferredValue: function (e) {
        var t = _t()
        return Nf(t, Fe.memoizedState, e)
      },
      useTransition: function () {
        var e = Ws(co)[0],
          t = _t().memoizedState
        return [e, t]
      },
      useMutableSource: df,
      useSyncExternalStore: pf,
      useId: Tf,
      unstable_isNewReconciler: !1,
    },
    i0 = {
      readContext: wt,
      useCallback: Rf,
      useContext: wt,
      useEffect: qs,
      useImperativeHandle: kf,
      useInsertionEffect: Ef,
      useLayoutEffect: xf,
      useMemo: Pf,
      useReducer: Ks,
      useRef: _f,
      useState: function () {
        return Ks(co)
      },
      useDebugValue: Qs,
      useDeferredValue: function (e) {
        var t = _t()
        return Fe === null ? (t.memoizedState = e) : Nf(t, Fe.memoizedState, e)
      },
      useTransition: function () {
        var e = Ks(co)[0],
          t = _t().memoizedState
        return [e, t]
      },
      useMutableSource: df,
      useSyncExternalStore: pf,
      useId: Tf,
      unstable_isNewReconciler: !1,
    }
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ;(t = K({}, t)), (e = e.defaultProps)
      for (var r in e) t[r] === void 0 && (t[r] = e[r])
      return t
    }
    return t
  }
  function Js(e, t, r, i) {
    ;(t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : K({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r)
  }
  var Nl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? On(e) === e : !1
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals
      var i = Ze(),
        u = En(e),
        c = Xt(i, u)
      ;(c.payload = t),
        r != null && (c.callback = r),
        (t = vn(e, c, u)),
        t !== null && (At(t, e, u, i), _l(t, e, u))
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals
      var i = Ze(),
        u = En(e),
        c = Xt(i, u)
      ;(c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = vn(e, c, u)),
        t !== null && (At(t, e, u, i), _l(t, e, u))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var r = Ze(),
        i = En(e),
        u = Xt(r, i)
      ;(u.tag = 2),
        t != null && (u.callback = t),
        (t = vn(e, u, i)),
        t !== null && (At(t, e, i, r), _l(t, e, i))
    },
  }
  function Lf(e, t, r, i, u, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(i, c, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Gr(r, i) || !Gr(u, c)
        : !0
    )
  }
  function zf(e, t, r) {
    var i = !1,
      u = mn,
      c = t.contextType
    return (
      typeof c == 'object' && c !== null
        ? (c = wt(c))
        : ((u = tt(t) ? Dn : qe.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? ur(e, u) : mn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Nl),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    )
  }
  function Ff(e, t, r, i) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && Nl.enqueueReplaceState(t, t.state, null)
  }
  function Xs(e, t, r, i) {
    var u = e.stateNode
    ;(u.props = r), (u.state = e.memoizedState), (u.refs = {}), Ms(e)
    var c = t.contextType
    typeof c == 'object' && c !== null
      ? (u.context = wt(c))
      : ((c = tt(t) ? Dn : qe.current), (u.context = ur(e, c))),
      (u.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == 'function' && (Js(e, t, c, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' &&
          typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Nl.enqueueReplaceState(u, u.state, null),
        Sl(e, r, u, i),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function gr(e, t) {
    try {
      var r = '',
        i = t
      do (r += fe(i)), (i = i.return)
      while (i)
      var u = r
    } catch (c) {
      u =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack
    }
    return { value: e, source: t, stack: u, digest: null }
  }
  function Gs(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null }
  }
  function Ys(e, t) {
    try {
      console.error(t.value)
    } catch (r) {
      setTimeout(function () {
        throw r
      })
    }
  }
  var s0 = typeof WeakMap == 'function' ? WeakMap : Map
  function Mf(e, t, r) {
    ;(r = Xt(-1, r)), (r.tag = 3), (r.payload = { element: null })
    var i = t.value
    return (
      (r.callback = function () {
        Fl || ((Fl = !0), (pa = i)), Ys(e, t)
      }),
      r
    )
  }
  function If(e, t, r) {
    ;(r = Xt(-1, r)), (r.tag = 3)
    var i = e.type.getDerivedStateFromError
    if (typeof i == 'function') {
      var u = t.value
      ;(r.payload = function () {
        return i(u)
      }),
        (r.callback = function () {
          Ys(e, t)
        })
    }
    var c = e.stateNode
    return (
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (r.callback = function () {
          Ys(e, t),
            typeof i != 'function' &&
              (_n === null ? (_n = new Set([this])) : _n.add(this))
          var p = t.stack
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : '',
          })
        }),
      r
    )
  }
  function jf(e, t, r) {
    var i = e.pingCache
    if (i === null) {
      i = e.pingCache = new s0()
      var u = new Set()
      i.set(t, u)
    } else (u = i.get(t)), u === void 0 && ((u = new Set()), i.set(t, u))
    u.has(r) || (u.add(r), (e = S0.bind(null, e, t, r)), t.then(e, e))
  }
  function Bf(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Uf(e, t, r, i, u) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = u), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Xt(-1, 1)), (t.tag = 2), vn(r, t, 1))),
            (r.lanes |= 1)),
        e)
  }
  var a0 = b.ReactCurrentOwner,
    nt = !1
  function Ye(e, t, r, i) {
    t.child = e === null ? lf(t, null, r, i) : pr(t, e.child, r, i)
  }
  function $f(e, t, r, i, u) {
    r = r.render
    var c = t.ref
    return (
      mr(t, u),
      (i = Hs(e, t, r, i, c, u)),
      (r = Vs()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Gt(e, t, u))
        : (ke && r && Rs(t), (t.flags |= 1), Ye(e, t, i, u), t.child)
    )
  }
  function bf(e, t, r, i, u) {
    if (e === null) {
      var c = r.type
      return typeof c == 'function' &&
        !_a(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Hf(e, t, c, i, u))
        : ((e = $l(r.type, null, i, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((c = e.child), !(e.lanes & u))) {
      var p = c.memoizedProps
      if (
        ((r = r.compare), (r = r !== null ? r : Gr), r(p, i) && e.ref === t.ref)
      )
        return Gt(e, t, u)
    }
    return (
      (t.flags |= 1),
      (e = Cn(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Hf(e, t, r, i, u) {
    if (e !== null) {
      var c = e.memoizedProps
      if (Gr(c, i) && e.ref === t.ref)
        if (((nt = !1), (t.pendingProps = i = c), (e.lanes & u) !== 0))
          e.flags & 131072 && (nt = !0)
        else return (t.lanes = e.lanes), Gt(e, t, u)
    }
    return Zs(e, t, r, i, u)
  }
  function Vf(e, t, r) {
    var i = t.pendingProps,
      u = i.children,
      c = e !== null ? e.memoizedState : null
    if (i.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          _e(wr, pt),
          (pt |= r)
      else {
        if (!(r & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            _e(wr, pt),
            (pt |= e),
            null
          )
        ;(t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : r),
          _e(wr, pt),
          (pt |= i)
      }
    else
      c !== null ? ((i = c.baseLanes | r), (t.memoizedState = null)) : (i = r),
        _e(wr, pt),
        (pt |= i)
    return Ye(e, t, u, r), t.child
  }
  function Wf(e, t) {
    var r = t.ref
    ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function Zs(e, t, r, i, u) {
    var c = tt(r) ? Dn : qe.current
    return (
      (c = ur(t, c)),
      mr(t, u),
      (r = Hs(e, t, r, i, c, u)),
      (i = Vs()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Gt(e, t, u))
        : (ke && i && Rs(t), (t.flags |= 1), Ye(e, t, r, u), t.child)
    )
  }
  function Kf(e, t, r, i, u) {
    if (tt(r)) {
      var c = !0
      dl(t)
    } else c = !1
    if ((mr(t, u), t.stateNode === null))
      Ol(e, t), zf(t, r, i), Xs(t, r, i, u), (i = !0)
    else if (e === null) {
      var p = t.stateNode,
        w = t.memoizedProps
      p.props = w
      var E = p.context,
        D = r.contextType
      typeof D == 'object' && D !== null
        ? (D = wt(D))
        : ((D = tt(r) ? Dn : qe.current), (D = ur(t, D)))
      var j = r.getDerivedStateFromProps,
        U =
          typeof j == 'function' ||
          typeof p.getSnapshotBeforeUpdate == 'function'
      U ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof p.componentWillReceiveProps != 'function') ||
        ((w !== i || E !== D) && Ff(t, p, i, D)),
        (gn = !1)
      var M = t.memoizedState
      ;(p.state = M),
        Sl(t, i, p, u),
        (E = t.memoizedState),
        w !== i || M !== E || et.current || gn
          ? (typeof j == 'function' && (Js(t, r, j, i), (E = t.memoizedState)),
            (w = gn || Lf(t, r, w, i, M, E, D))
              ? (U ||
                  (typeof p.UNSAFE_componentWillMount != 'function' &&
                    typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = E)),
            (p.props = i),
            (p.state = E),
            (p.context = D),
            (i = w))
          : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308),
            (i = !1))
    } else {
      ;(p = t.stateNode),
        af(e, t),
        (w = t.memoizedProps),
        (D = t.type === t.elementType ? w : Nt(t.type, w)),
        (p.props = D),
        (U = t.pendingProps),
        (M = p.context),
        (E = r.contextType),
        typeof E == 'object' && E !== null
          ? (E = wt(E))
          : ((E = tt(r) ? Dn : qe.current), (E = ur(t, E)))
      var W = r.getDerivedStateFromProps
      ;(j =
        typeof W == 'function' ||
        typeof p.getSnapshotBeforeUpdate == 'function') ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof p.componentWillReceiveProps != 'function') ||
        ((w !== U || M !== E) && Ff(t, p, i, E)),
        (gn = !1),
        (M = t.memoizedState),
        (p.state = M),
        Sl(t, i, p, u)
      var Q = t.memoizedState
      w !== U || M !== Q || et.current || gn
        ? (typeof W == 'function' && (Js(t, r, W, i), (Q = t.memoizedState)),
          (D = gn || Lf(t, r, D, i, M, Q, E) || !1)
            ? (j ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' &&
                  typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' &&
                  p.componentWillUpdate(i, Q, E),
                typeof p.UNSAFE_componentWillUpdate == 'function' &&
                  p.UNSAFE_componentWillUpdate(i, Q, E)),
              typeof p.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (w === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (w === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Q)),
          (p.props = i),
          (p.state = Q),
          (p.context = E),
          (i = D))
        : (typeof p.componentDidUpdate != 'function' ||
            (w === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (w === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1))
    }
    return ea(e, t, r, i, c, u)
  }
  function ea(e, t, r, i, u, c) {
    Wf(e, t)
    var p = (t.flags & 128) !== 0
    if (!i && !p) return u && Xc(t, r, !1), Gt(e, t, c)
    ;(i = t.stateNode), (a0.current = t)
    var w =
      p && typeof r.getDerivedStateFromError != 'function' ? null : i.render()
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = pr(t, e.child, null, c)), (t.child = pr(t, null, w, c)))
        : Ye(e, t, w, c),
      (t.memoizedState = i.state),
      u && Xc(t, r, !0),
      t.child
    )
  }
  function qf(e) {
    var t = e.stateNode
    t.pendingContext
      ? Qc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Qc(e, t.context, !1),
      Is(e, t.containerInfo)
  }
  function Qf(e, t, r, i, u) {
    return dr(), Os(u), (t.flags |= 256), Ye(e, t, r, i), t.child
  }
  var ta = { dehydrated: null, treeContext: null, retryLane: 0 }
  function na(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Jf(e, t, r) {
    var i = t.pendingProps,
      u = Pe.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      w
    if (
      ((w = p) ||
        (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      w
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      _e(Pe, u & 1),
      e === null)
    )
      return (
        Ts(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((p = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (p = { mode: 'hidden', children: p }),
                !(i & 1) && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = bl(p, i, 0, null)),
                (e = bn(e, i, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = na(r)),
                (t.memoizedState = ta),
                e)
              : ra(t, p))
      )
    if (((u = e.memoizedState), u !== null && ((w = u.dehydrated), w !== null)))
      return u0(e, t, p, i, w, u, r)
    if (c) {
      ;(c = i.fallback), (p = t.mode), (u = e.child), (w = u.sibling)
      var E = { mode: 'hidden', children: i.children }
      return (
        !(p & 1) && t.child !== u
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = E),
            (t.deletions = null))
          : ((i = Cn(u, E)), (i.subtreeFlags = u.subtreeFlags & 14680064)),
        w !== null ? (c = Cn(w, c)) : ((c = bn(c, p, r, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? na(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = ta),
        i
      )
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = Cn(c, { mode: 'visible', children: i.children })),
      !(t.mode & 1) && (i.lanes = r),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    )
  }
  function ra(e, t) {
    return (
      (t = bl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    )
  }
  function Tl(e, t, r, i) {
    return (
      i !== null && Os(i),
      pr(t, e.child, null, r),
      (e = ra(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function u0(e, t, r, i, u, c, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (i = Gs(Error(l(422)))), Tl(e, t, p, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (u = t.mode),
          (i = bl({ mode: 'visible', children: i.children }, u, 0, null)),
          (c = bn(c, u, p, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          t.mode & 1 && pr(t, e.child, null, p),
          (t.child.memoizedState = na(p)),
          (t.memoizedState = ta),
          c)
    if (!(t.mode & 1)) return Tl(e, t, p, null)
    if (u.data === '$!') {
      if (((i = u.nextSibling && u.nextSibling.dataset), i)) var w = i.dgst
      return (
        (i = w), (c = Error(l(419))), (i = Gs(c, i, void 0)), Tl(e, t, p, i)
      )
    }
    if (((w = (p & e.childLanes) !== 0), nt || w)) {
      if (((i = je), i !== null)) {
        switch (p & -p) {
          case 4:
            u = 2
            break
          case 16:
            u = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32
            break
          case 536870912:
            u = 268435456
            break
          default:
            u = 0
        }
        ;(u = u & (i.suspendedLanes | p) ? 0 : u),
          u !== 0 &&
            u !== c.retryLane &&
            ((c.retryLane = u), Jt(e, u), At(i, e, u, -1))
      }
      return wa(), (i = Gs(Error(l(421)))), Tl(e, t, p, i)
    }
    return u.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = E0.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (dt = pn(u.nextSibling)),
        (ft = t),
        (ke = !0),
        (Pt = null),
        e !== null &&
          ((gt[vt++] = qt),
          (gt[vt++] = Qt),
          (gt[vt++] = Ln),
          (qt = e.id),
          (Qt = e.overflow),
          (Ln = t)),
        (t = ra(t, i.children)),
        (t.flags |= 4096),
        t)
  }
  function Xf(e, t, r) {
    e.lanes |= t
    var i = e.alternate
    i !== null && (i.lanes |= t), zs(e.return, t, r)
  }
  function oa(e, t, r, i, u) {
    var c = e.memoizedState
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = r),
        (c.tailMode = u))
  }
  function Gf(e, t, r) {
    var i = t.pendingProps,
      u = i.revealOrder,
      c = i.tail
    if ((Ye(e, t, i.children, r), (i = Pe.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xf(e, r, t)
          else if (e.tag === 19) Xf(e, r, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      i &= 1
    }
    if ((_e(Pe, i), !(t.mode & 1))) t.memoizedState = null
    else
      switch (u) {
        case 'forwards':
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && El(e) === null && (u = r),
              (r = r.sibling)
          ;(r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            oa(t, !1, u, r, c)
          break
        case 'backwards':
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && El(e) === null)) {
              t.child = u
              break
            }
            ;(e = u.sibling), (u.sibling = r), (r = u), (u = e)
          }
          oa(t, !0, r, null, c)
          break
        case 'together':
          oa(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function Ol(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function Gt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (jn |= t.lanes),
      !(r & t.childLanes))
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(l(153))
    if (t.child !== null) {
      for (
        e = t.child, r = Cn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (r = r.sibling = Cn(e, e.pendingProps)), (r.return = t)
      r.sibling = null
    }
    return t.child
  }
  function c0(e, t, r) {
    switch (t.tag) {
      case 3:
        qf(t), dr()
        break
      case 5:
        ff(t)
        break
      case 1:
        tt(t.type) && dl(t)
        break
      case 4:
        Is(t, t.stateNode.containerInfo)
        break
      case 10:
        var i = t.type._context,
          u = t.memoizedProps.value
        _e(vl, i._currentValue), (i._currentValue = u)
        break
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (_e(Pe, Pe.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Jf(e, t, r)
            : (_e(Pe, Pe.current & 1),
              (e = Gt(e, t, r)),
              e !== null ? e.sibling : null)
        _e(Pe, Pe.current & 1)
        break
      case 19:
        if (((i = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return Gf(e, t, r)
          t.flags |= 128
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          _e(Pe, Pe.current),
          i)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), Vf(e, t, r)
    }
    return Gt(e, t, r)
  }
  var Yf, la, Zf, ed
  ;(Yf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
      else if (r.tag !== 4 && r.child !== null) {
        ;(r.child.return = r), (r = r.child)
        continue
      }
      if (r === t) break
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return
        r = r.return
      }
      ;(r.sibling.return = r.return), (r = r.sibling)
    }
  }),
    (la = function () {}),
    (Zf = function (e, t, r, i) {
      var u = e.memoizedProps
      if (u !== i) {
        ;(e = t.stateNode), Mn(Bt.current)
        var c = null
        switch (r) {
          case 'input':
            ;(u = zi(e, u)), (i = zi(e, i)), (c = [])
            break
          case 'select':
            ;(u = K({}, u, { value: void 0 })),
              (i = K({}, i, { value: void 0 })),
              (c = [])
            break
          case 'textarea':
            ;(u = Ii(e, u)), (i = Ii(e, i)), (c = [])
            break
          default:
            typeof u.onClick != 'function' &&
              typeof i.onClick == 'function' &&
              (e.onclick = ul)
        }
        Bi(r, i)
        var p
        r = null
        for (D in u)
          if (!i.hasOwnProperty(D) && u.hasOwnProperty(D) && u[D] != null)
            if (D === 'style') {
              var w = u[D]
              for (p in w) w.hasOwnProperty(p) && (r || (r = {}), (r[p] = ''))
            } else
              D !== 'dangerouslySetInnerHTML' &&
                D !== 'children' &&
                D !== 'suppressContentEditableWarning' &&
                D !== 'suppressHydrationWarning' &&
                D !== 'autoFocus' &&
                (a.hasOwnProperty(D)
                  ? c || (c = [])
                  : (c = c || []).push(D, null))
        for (D in i) {
          var E = i[D]
          if (
            ((w = u != null ? u[D] : void 0),
            i.hasOwnProperty(D) && E !== w && (E != null || w != null))
          )
            if (D === 'style')
              if (w) {
                for (p in w)
                  !w.hasOwnProperty(p) ||
                    (E && E.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ''))
                for (p in E)
                  E.hasOwnProperty(p) &&
                    w[p] !== E[p] &&
                    (r || (r = {}), (r[p] = E[p]))
              } else r || (c || (c = []), c.push(D, r)), (r = E)
            else
              D === 'dangerouslySetInnerHTML'
                ? ((E = E ? E.__html : void 0),
                  (w = w ? w.__html : void 0),
                  E != null && w !== E && (c = c || []).push(D, E))
                : D === 'children'
                ? (typeof E != 'string' && typeof E != 'number') ||
                  (c = c || []).push(D, '' + E)
                : D !== 'suppressContentEditableWarning' &&
                  D !== 'suppressHydrationWarning' &&
                  (a.hasOwnProperty(D)
                    ? (E != null && D === 'onScroll' && Se('scroll', e),
                      c || w === E || (c = []))
                    : (c = c || []).push(D, E))
        }
        r && (c = c || []).push('style', r)
        var D = c
        ;(t.updateQueue = D) && (t.flags |= 4)
      }
    }),
    (ed = function (e, t, r, i) {
      r !== i && (t.flags |= 4)
    })
  function po(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling)
          r === null ? (e.tail = null) : (r.sibling = null)
          break
        case 'collapsed':
          r = e.tail
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling)
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null)
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags & 14680064),
          (i |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling)
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags),
          (i |= u.flags),
          (u.return = e),
          (u = u.sibling)
    return (e.subtreeFlags |= i), (e.childLanes = r), t
  }
  function f0(e, t, r) {
    var i = t.pendingProps
    switch ((Ps(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null
      case 1:
        return tt(t.type) && fl(), Je(t), null
      case 3:
        return (
          (i = t.stateNode),
          yr(),
          Ee(et),
          Ee(qe),
          Us(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Pt !== null && (ya(Pt), (Pt = null)))),
          la(e, t),
          Je(t),
          null
        )
      case 5:
        js(t)
        var u = Mn(so.current)
        if (((r = t.type), e !== null && t.stateNode != null))
          Zf(e, t, r, i, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166))
            return Je(t), null
          }
          if (((e = Mn(Bt.current)), yl(t))) {
            ;(i = t.stateNode), (r = t.type)
            var c = t.memoizedProps
            switch (((i[jt] = t), (i[no] = c), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                Se('cancel', i), Se('close', i)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Se('load', i)
                break
              case 'video':
              case 'audio':
                for (u = 0; u < Zr.length; u++) Se(Zr[u], i)
                break
              case 'source':
                Se('error', i)
                break
              case 'img':
              case 'image':
              case 'link':
                Se('error', i), Se('load', i)
                break
              case 'details':
                Se('toggle', i)
                break
              case 'input':
                Lu(i, c), Se('invalid', i)
                break
              case 'select':
                ;(i._wrapperState = { wasMultiple: !!c.multiple }),
                  Se('invalid', i)
                break
              case 'textarea':
                Mu(i, c), Se('invalid', i)
            }
            Bi(r, c), (u = null)
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var w = c[p]
                p === 'children'
                  ? typeof w == 'string'
                    ? i.textContent !== w &&
                      (c.suppressHydrationWarning !== !0 &&
                        al(i.textContent, w, e),
                      (u = ['children', w]))
                    : typeof w == 'number' &&
                      i.textContent !== '' + w &&
                      (c.suppressHydrationWarning !== !0 &&
                        al(i.textContent, w, e),
                      (u = ['children', '' + w]))
                  : a.hasOwnProperty(p) &&
                    w != null &&
                    p === 'onScroll' &&
                    Se('scroll', i)
              }
            switch (r) {
              case 'input':
                Bo(i), Fu(i, c, !0)
                break
              case 'textarea':
                Bo(i), ju(i)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof c.onClick == 'function' && (i.onclick = ul)
            }
            ;(i = u), (t.updateQueue = i), i !== null && (t.flags |= 4)
          } else {
            ;(p = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Bu(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = p.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == 'string'
                  ? (e = p.createElement(r, { is: i.is }))
                  : ((e = p.createElement(r)),
                    r === 'select' &&
                      ((p = e),
                      i.multiple
                        ? (p.multiple = !0)
                        : i.size && (p.size = i.size)))
                : (e = p.createElementNS(e, r)),
              (e[jt] = t),
              (e[no] = i),
              Yf(e, t, !1, !1),
              (t.stateNode = e)
            e: {
              switch (((p = Ui(r, i)), r)) {
                case 'dialog':
                  Se('cancel', e), Se('close', e), (u = i)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  Se('load', e), (u = i)
                  break
                case 'video':
                case 'audio':
                  for (u = 0; u < Zr.length; u++) Se(Zr[u], e)
                  u = i
                  break
                case 'source':
                  Se('error', e), (u = i)
                  break
                case 'img':
                case 'image':
                case 'link':
                  Se('error', e), Se('load', e), (u = i)
                  break
                case 'details':
                  Se('toggle', e), (u = i)
                  break
                case 'input':
                  Lu(e, i), (u = zi(e, i)), Se('invalid', e)
                  break
                case 'option':
                  u = i
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                    (u = K({}, i, { value: void 0 })),
                    Se('invalid', e)
                  break
                case 'textarea':
                  Mu(e, i), (u = Ii(e, i)), Se('invalid', e)
                  break
                default:
                  u = i
              }
              Bi(r, u), (w = u)
              for (c in w)
                if (w.hasOwnProperty(c)) {
                  var E = w[c]
                  c === 'style'
                    ? bu(e, E)
                    : c === 'dangerouslySetInnerHTML'
                    ? ((E = E ? E.__html : void 0), E != null && Uu(e, E))
                    : c === 'children'
                    ? typeof E == 'string'
                      ? (r !== 'textarea' || E !== '') && zr(e, E)
                      : typeof E == 'number' && zr(e, '' + E)
                    : c !== 'suppressContentEditableWarning' &&
                      c !== 'suppressHydrationWarning' &&
                      c !== 'autoFocus' &&
                      (a.hasOwnProperty(c)
                        ? E != null && c === 'onScroll' && Se('scroll', e)
                        : E != null && B(e, c, E, p))
                }
              switch (r) {
                case 'input':
                  Bo(e), Fu(e, i, !1)
                  break
                case 'textarea':
                  Bo(e), ju(e)
                  break
                case 'option':
                  i.value != null && e.setAttribute('value', '' + he(i.value))
                  break
                case 'select':
                  ;(e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? Gn(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        Gn(e, !!i.multiple, i.defaultValue, !0)
                  break
                default:
                  typeof u.onClick == 'function' && (e.onclick = ul)
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  i = !!i.autoFocus
                  break e
                case 'img':
                  i = !0
                  break e
                default:
                  i = !1
              }
            }
            i && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return Je(t), null
      case 6:
        if (e && t.stateNode != null) ed(e, t, e.memoizedProps, i)
        else {
          if (typeof i != 'string' && t.stateNode === null) throw Error(l(166))
          if (((r = Mn(so.current)), Mn(Bt.current), yl(t))) {
            if (
              ((i = t.stateNode),
              (r = t.memoizedProps),
              (i[jt] = t),
              (c = i.nodeValue !== r) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  al(i.nodeValue, r, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    al(i.nodeValue, r, (e.mode & 1) !== 0)
              }
            c && (t.flags |= 4)
          } else
            (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i)),
              (i[jt] = t),
              (t.stateNode = i)
        }
        return Je(t), null
      case 13:
        if (
          (Ee(Pe),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ke && dt !== null && t.mode & 1 && !(t.flags & 128))
            nf(), dr(), (t.flags |= 98560), (c = !1)
          else if (((c = yl(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318))
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317))
              c[jt] = t
            } else
              dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
            Je(t), (c = !1)
          } else Pt !== null && (ya(Pt), (Pt = null)), (c = !0)
          if (!c) return t.flags & 65536 ? t : null
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Pe.current & 1 ? Me === 0 && (Me = 3) : wa())),
            t.updateQueue !== null && (t.flags |= 4),
            Je(t),
            null)
      case 4:
        return (
          yr(),
          la(e, t),
          e === null && eo(t.stateNode.containerInfo),
          Je(t),
          null
        )
      case 10:
        return Ls(t.type._context), Je(t), null
      case 17:
        return tt(t.type) && fl(), Je(t), null
      case 19:
        if ((Ee(Pe), (c = t.memoizedState), c === null)) return Je(t), null
        if (((i = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (i) po(c, !1)
          else {
            if (Me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((p = El(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      po(c, !1),
                      i = p.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = i),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling)
                  return _e(Pe, (Pe.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            c.tail !== null &&
              Ae() > _r &&
              ((t.flags |= 128), (i = !0), po(c, !1), (t.lanes = 4194304))
          }
        else {
          if (!i)
            if (((e = El(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                po(c, !0),
                c.tail === null &&
                  c.tailMode === 'hidden' &&
                  !p.alternate &&
                  !ke)
              )
                return Je(t), null
            } else
              2 * Ae() - c.renderingStartTime > _r &&
                r !== 1073741824 &&
                ((t.flags |= 128), (i = !0), po(c, !1), (t.lanes = 4194304))
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = c.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (c.last = p))
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ae()),
            (t.sibling = null),
            (r = Pe.current),
            _e(Pe, i ? (r & 1) | 2 : r & 1),
            t)
          : (Je(t), null)
      case 22:
      case 23:
        return (
          va(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && t.mode & 1
            ? pt & 1073741824 &&
              (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Je(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(l(156, t.tag))
  }
  function d0(e, t) {
    switch ((Ps(t), t.tag)) {
      case 1:
        return (
          tt(t.type) && fl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          yr(),
          Ee(et),
          Ee(qe),
          Us(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 5:
        return js(t), null
      case 13:
        if (
          (Ee(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340))
          dr()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return Ee(Pe), null
      case 4:
        return yr(), null
      case 10:
        return Ls(t.type._context), null
      case 22:
      case 23:
        return va(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var Al = !1,
    Xe = !1,
    p0 = typeof WeakSet == 'function' ? WeakSet : Set,
    q = null
  function vr(e, t) {
    var r = e.ref
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null)
        } catch (i) {
          Te(e, t, i)
        }
      else r.current = null
  }
  function ia(e, t, r) {
    try {
      r()
    } catch (i) {
      Te(e, t, i)
    }
  }
  var td = !1
  function h0(e, t) {
    if (((vs = Go), (e = Dc()), cs(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window
          var i = r.getSelection && r.getSelection()
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode
            var u = i.anchorOffset,
              c = i.focusNode
            i = i.focusOffset
            try {
              r.nodeType, c.nodeType
            } catch {
              r = null
              break e
            }
            var p = 0,
              w = -1,
              E = -1,
              D = 0,
              j = 0,
              U = e,
              M = null
            t: for (;;) {
              for (
                var W;
                U !== r || (u !== 0 && U.nodeType !== 3) || (w = p + u),
                  U !== c || (i !== 0 && U.nodeType !== 3) || (E = p + i),
                  U.nodeType === 3 && (p += U.nodeValue.length),
                  (W = U.firstChild) !== null;

              )
                (M = U), (U = W)
              for (;;) {
                if (U === e) break t
                if (
                  (M === r && ++D === u && (w = p),
                  M === c && ++j === i && (E = p),
                  (W = U.nextSibling) !== null)
                )
                  break
                ;(U = M), (M = U.parentNode)
              }
              U = W
            }
            r = w === -1 || E === -1 ? null : { start: w, end: E }
          } else r = null
        }
      r = r || { start: 0, end: 0 }
    } else r = null
    for (
      ws = { focusedElem: e, selectionRange: r }, Go = !1, q = t;
      q !== null;

    )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (q = e)
      else
        for (; q !== null; ) {
          t = q
          try {
            var Q = t.alternate
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (Q !== null) {
                    var X = Q.memoizedProps,
                      De = Q.memoizedState,
                      N = t.stateNode,
                      x = N.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? X : Nt(t.type, X),
                        De
                      )
                    N.__reactInternalSnapshotBeforeUpdate = x
                  }
                  break
                case 3:
                  var T = t.stateNode.containerInfo
                  T.nodeType === 1
                    ? (T.textContent = '')
                    : T.nodeType === 9 &&
                      T.documentElement &&
                      T.removeChild(T.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(l(163))
              }
          } catch ($) {
            Te(t, t.return, $)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (q = e)
            break
          }
          q = t.return
        }
    return (Q = td), (td = !1), Q
  }
  function ho(e, t, r) {
    var i = t.updateQueue
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var u = (i = i.next)
      do {
        if ((u.tag & e) === e) {
          var c = u.destroy
          ;(u.destroy = void 0), c !== void 0 && ia(t, r, c)
        }
        u = u.next
      } while (u !== i)
    }
  }
  function Dl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next)
      do {
        if ((r.tag & e) === e) {
          var i = r.create
          r.destroy = i()
        }
        r = r.next
      } while (r !== t)
    }
  }
  function sa(e) {
    var t = e.ref
    if (t !== null) {
      var r = e.stateNode
      switch (e.tag) {
        case 5:
          e = r
          break
        default:
          e = r
      }
      typeof t == 'function' ? t(e) : (t.current = e)
    }
  }
  function nd(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), nd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[jt],
          delete t[no],
          delete t[xs],
          delete t[Xm],
          delete t[Gm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function rd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function od(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || rd(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function aa(e, t, r) {
    var i = e.tag
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = ul))
    else if (i !== 4 && ((e = e.child), e !== null))
      for (aa(e, t, r), e = e.sibling; e !== null; )
        aa(e, t, r), (e = e.sibling)
  }
  function ua(e, t, r) {
    var i = e.tag
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
    else if (i !== 4 && ((e = e.child), e !== null))
      for (ua(e, t, r), e = e.sibling; e !== null; )
        ua(e, t, r), (e = e.sibling)
  }
  var $e = null,
    Tt = !1
  function wn(e, t, r) {
    for (r = r.child; r !== null; ) ld(e, t, r), (r = r.sibling)
  }
  function ld(e, t, r) {
    if (It && typeof It.onCommitFiberUnmount == 'function')
      try {
        It.onCommitFiberUnmount(Wo, r)
      } catch {}
    switch (r.tag) {
      case 5:
        Xe || vr(r, t)
      case 6:
        var i = $e,
          u = Tt
        ;($e = null),
          wn(e, t, r),
          ($e = i),
          (Tt = u),
          $e !== null &&
            (Tt
              ? ((e = $e),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : $e.removeChild(r.stateNode))
        break
      case 18:
        $e !== null &&
          (Tt
            ? ((e = $e),
              (r = r.stateNode),
              e.nodeType === 8
                ? Es(e.parentNode, r)
                : e.nodeType === 1 && Es(e, r),
              Wr(e))
            : Es($e, r.stateNode))
        break
      case 4:
        ;(i = $e),
          (u = Tt),
          ($e = r.stateNode.containerInfo),
          (Tt = !0),
          wn(e, t, r),
          ($e = i),
          (Tt = u)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Xe &&
          ((i = r.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          u = i = i.next
          do {
            var c = u,
              p = c.destroy
            ;(c = c.tag),
              p !== void 0 && (c & 2 || c & 4) && ia(r, t, p),
              (u = u.next)
          } while (u !== i)
        }
        wn(e, t, r)
        break
      case 1:
        if (
          !Xe &&
          (vr(r, t),
          (i = r.stateNode),
          typeof i.componentWillUnmount == 'function')
        )
          try {
            ;(i.props = r.memoizedProps),
              (i.state = r.memoizedState),
              i.componentWillUnmount()
          } catch (w) {
            Te(r, t, w)
          }
        wn(e, t, r)
        break
      case 21:
        wn(e, t, r)
        break
      case 22:
        r.mode & 1
          ? ((Xe = (i = Xe) || r.memoizedState !== null), wn(e, t, r), (Xe = i))
          : wn(e, t, r)
        break
      default:
        wn(e, t, r)
    }
  }
  function id(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var r = e.stateNode
      r === null && (r = e.stateNode = new p0()),
        t.forEach(function (i) {
          var u = x0.bind(null, e, i)
          r.has(i) || (r.add(i), i.then(u, u))
        })
    }
  }
  function Ot(e, t) {
    var r = t.deletions
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var u = r[i]
        try {
          var c = e,
            p = t,
            w = p
          e: for (; w !== null; ) {
            switch (w.tag) {
              case 5:
                ;($e = w.stateNode), (Tt = !1)
                break e
              case 3:
                ;($e = w.stateNode.containerInfo), (Tt = !0)
                break e
              case 4:
                ;($e = w.stateNode.containerInfo), (Tt = !0)
                break e
            }
            w = w.return
          }
          if ($e === null) throw Error(l(160))
          ld(c, p, u), ($e = null), (Tt = !1)
          var E = u.alternate
          E !== null && (E.return = null), (u.return = null)
        } catch (D) {
          Te(u, t, D)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) sd(t, e), (t = t.sibling)
  }
  function sd(e, t) {
    var r = e.alternate,
      i = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(t, e), $t(e), i & 4)) {
          try {
            ho(3, e, e.return), Dl(3, e)
          } catch (X) {
            Te(e, e.return, X)
          }
          try {
            ho(5, e, e.return)
          } catch (X) {
            Te(e, e.return, X)
          }
        }
        break
      case 1:
        Ot(t, e), $t(e), i & 512 && r !== null && vr(r, r.return)
        break
      case 5:
        if (
          (Ot(t, e),
          $t(e),
          i & 512 && r !== null && vr(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode
          try {
            zr(u, '')
          } catch (X) {
            Te(e, e.return, X)
          }
        }
        if (i & 4 && ((u = e.stateNode), u != null)) {
          var c = e.memoizedProps,
            p = r !== null ? r.memoizedProps : c,
            w = e.type,
            E = e.updateQueue
          if (((e.updateQueue = null), E !== null))
            try {
              w === 'input' && c.type === 'radio' && c.name != null && zu(u, c),
                Ui(w, p)
              var D = Ui(w, c)
              for (p = 0; p < E.length; p += 2) {
                var j = E[p],
                  U = E[p + 1]
                j === 'style'
                  ? bu(u, U)
                  : j === 'dangerouslySetInnerHTML'
                  ? Uu(u, U)
                  : j === 'children'
                  ? zr(u, U)
                  : B(u, j, U, D)
              }
              switch (w) {
                case 'input':
                  Fi(u, c)
                  break
                case 'textarea':
                  Iu(u, c)
                  break
                case 'select':
                  var M = u._wrapperState.wasMultiple
                  u._wrapperState.wasMultiple = !!c.multiple
                  var W = c.value
                  W != null
                    ? Gn(u, !!c.multiple, W, !1)
                    : M !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Gn(u, !!c.multiple, c.defaultValue, !0)
                        : Gn(u, !!c.multiple, c.multiple ? [] : '', !1))
              }
              u[no] = c
            } catch (X) {
              Te(e, e.return, X)
            }
        }
        break
      case 6:
        if ((Ot(t, e), $t(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162))
          ;(u = e.stateNode), (c = e.memoizedProps)
          try {
            u.nodeValue = c
          } catch (X) {
            Te(e, e.return, X)
          }
        }
        break
      case 3:
        if (
          (Ot(t, e), $t(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Wr(t.containerInfo)
          } catch (X) {
            Te(e, e.return, X)
          }
        break
      case 4:
        Ot(t, e), $t(e)
        break
      case 13:
        Ot(t, e),
          $t(e),
          (u = e.child),
          u.flags & 8192 &&
            ((c = u.memoizedState !== null),
            (u.stateNode.isHidden = c),
            !c ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (da = Ae())),
          i & 4 && id(e)
        break
      case 22:
        if (
          ((j = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Xe = (D = Xe) || j), Ot(t, e), (Xe = D)) : Ot(t, e),
          $t(e),
          i & 8192)
        ) {
          if (
            ((D = e.memoizedState !== null),
            (e.stateNode.isHidden = D) && !j && e.mode & 1)
          )
            for (q = e, j = e.child; j !== null; ) {
              for (U = q = j; q !== null; ) {
                switch (((M = q), (W = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ho(4, M, M.return)
                    break
                  case 1:
                    vr(M, M.return)
                    var Q = M.stateNode
                    if (typeof Q.componentWillUnmount == 'function') {
                      ;(i = M), (r = M.return)
                      try {
                        ;(t = i),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount()
                      } catch (X) {
                        Te(i, r, X)
                      }
                    }
                    break
                  case 5:
                    vr(M, M.return)
                    break
                  case 22:
                    if (M.memoizedState !== null) {
                      cd(U)
                      continue
                    }
                }
                W !== null ? ((W.return = M), (q = W)) : cd(U)
              }
              j = j.sibling
            }
          e: for (j = null, U = e; ; ) {
            if (U.tag === 5) {
              if (j === null) {
                j = U
                try {
                  ;(u = U.stateNode),
                    D
                      ? ((c = u.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty('display', 'none', 'important')
                          : (c.display = 'none'))
                      : ((w = U.stateNode),
                        (E = U.memoizedProps.style),
                        (p =
                          E != null && E.hasOwnProperty('display')
                            ? E.display
                            : null),
                        (w.style.display = $u('display', p)))
                } catch (X) {
                  Te(e, e.return, X)
                }
              }
            } else if (U.tag === 6) {
              if (j === null)
                try {
                  U.stateNode.nodeValue = D ? '' : U.memoizedProps
                } catch (X) {
                  Te(e, e.return, X)
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              ;(U.child.return = U), (U = U.child)
              continue
            }
            if (U === e) break e
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e
              j === U && (j = null), (U = U.return)
            }
            j === U && (j = null),
              (U.sibling.return = U.return),
              (U = U.sibling)
          }
        }
        break
      case 19:
        Ot(t, e), $t(e), i & 4 && id(e)
        break
      case 21:
        break
      default:
        Ot(t, e), $t(e)
    }
  }
  function $t(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (rd(r)) {
              var i = r
              break e
            }
            r = r.return
          }
          throw Error(l(160))
        }
        switch (i.tag) {
          case 5:
            var u = i.stateNode
            i.flags & 32 && (zr(u, ''), (i.flags &= -33))
            var c = od(e)
            ua(e, c, u)
            break
          case 3:
          case 4:
            var p = i.stateNode.containerInfo,
              w = od(e)
            aa(e, w, p)
            break
          default:
            throw Error(l(161))
        }
      } catch (E) {
        Te(e, e.return, E)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function m0(e, t, r) {
    ;(q = e), ad(e)
  }
  function ad(e, t, r) {
    for (var i = (e.mode & 1) !== 0; q !== null; ) {
      var u = q,
        c = u.child
      if (u.tag === 22 && i) {
        var p = u.memoizedState !== null || Al
        if (!p) {
          var w = u.alternate,
            E = (w !== null && w.memoizedState !== null) || Xe
          w = Al
          var D = Xe
          if (((Al = p), (Xe = E) && !D))
            for (q = u; q !== null; )
              (p = q),
                (E = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? fd(u)
                  : E !== null
                  ? ((E.return = p), (q = E))
                  : fd(u)
          for (; c !== null; ) (q = c), ad(c), (c = c.sibling)
          ;(q = u), (Al = w), (Xe = D)
        }
        ud(e)
      } else
        u.subtreeFlags & 8772 && c !== null ? ((c.return = u), (q = c)) : ud(e)
    }
  }
  function ud(e) {
    for (; q !== null; ) {
      var t = q
      if (t.flags & 8772) {
        var r = t.alternate
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Xe || Dl(5, t)
                break
              case 1:
                var i = t.stateNode
                if (t.flags & 4 && !Xe)
                  if (r === null) i.componentDidMount()
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Nt(t.type, r.memoizedProps)
                    i.componentDidUpdate(
                      u,
                      r.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var c = t.updateQueue
                c !== null && cf(t, c, i)
                break
              case 3:
                var p = t.updateQueue
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode
                        break
                      case 1:
                        r = t.child.stateNode
                    }
                  cf(t, p, r)
                }
                break
              case 5:
                var w = t.stateNode
                if (r === null && t.flags & 4) {
                  r = w
                  var E = t.memoizedProps
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      E.autoFocus && r.focus()
                      break
                    case 'img':
                      E.src && (r.src = E.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var D = t.alternate
                  if (D !== null) {
                    var j = D.memoizedState
                    if (j !== null) {
                      var U = j.dehydrated
                      U !== null && Wr(U)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(l(163))
            }
          Xe || (t.flags & 512 && sa(t))
        } catch (M) {
          Te(t, t.return, M)
        }
      }
      if (t === e) {
        q = null
        break
      }
      if (((r = t.sibling), r !== null)) {
        ;(r.return = t.return), (q = r)
        break
      }
      q = t.return
    }
  }
  function cd(e) {
    for (; q !== null; ) {
      var t = q
      if (t === e) {
        q = null
        break
      }
      var r = t.sibling
      if (r !== null) {
        ;(r.return = t.return), (q = r)
        break
      }
      q = t.return
    }
  }
  function fd(e) {
    for (; q !== null; ) {
      var t = q
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return
            try {
              Dl(4, t)
            } catch (E) {
              Te(t, r, E)
            }
            break
          case 1:
            var i = t.stateNode
            if (typeof i.componentDidMount == 'function') {
              var u = t.return
              try {
                i.componentDidMount()
              } catch (E) {
                Te(t, u, E)
              }
            }
            var c = t.return
            try {
              sa(t)
            } catch (E) {
              Te(t, c, E)
            }
            break
          case 5:
            var p = t.return
            try {
              sa(t)
            } catch (E) {
              Te(t, p, E)
            }
        }
      } catch (E) {
        Te(t, t.return, E)
      }
      if (t === e) {
        q = null
        break
      }
      var w = t.sibling
      if (w !== null) {
        ;(w.return = t.return), (q = w)
        break
      }
      q = t.return
    }
  }
  var y0 = Math.ceil,
    Ll = b.ReactCurrentDispatcher,
    ca = b.ReactCurrentOwner,
    St = b.ReactCurrentBatchConfig,
    ce = 0,
    je = null,
    ze = null,
    be = 0,
    pt = 0,
    wr = hn(0),
    Me = 0,
    mo = null,
    jn = 0,
    zl = 0,
    fa = 0,
    yo = null,
    rt = null,
    da = 0,
    _r = 1 / 0,
    Yt = null,
    Fl = !1,
    pa = null,
    _n = null,
    Ml = !1,
    Sn = null,
    Il = 0,
    go = 0,
    ha = null,
    jl = -1,
    Bl = 0
  function Ze() {
    return ce & 6 ? Ae() : jl !== -1 ? jl : (jl = Ae())
  }
  function En(e) {
    return e.mode & 1
      ? ce & 2 && be !== 0
        ? be & -be
        : Zm.transition !== null
        ? (Bl === 0 && (Bl = rc()), Bl)
        : ((e = me),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dc(e.type))),
          e)
      : 1
  }
  function At(e, t, r, i) {
    if (50 < go) throw ((go = 0), (ha = null), Error(l(185)))
    Ur(e, r, i),
      (!(ce & 2) || e !== je) &&
        (e === je && (!(ce & 2) && (zl |= r), Me === 4 && xn(e, be)),
        ot(e, i),
        r === 1 && ce === 0 && !(t.mode & 1) && ((_r = Ae() + 500), pl && yn()))
  }
  function ot(e, t) {
    var r = e.callbackNode
    Zh(e, t)
    var i = Qo(e, e === je ? be : 0)
    if (i === 0)
      r !== null && ec(r), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((r != null && ec(r), t === 1))
        e.tag === 0 ? Ym(pd.bind(null, e)) : Gc(pd.bind(null, e)),
          Qm(function () {
            !(ce & 6) && yn()
          }),
          (r = null)
      else {
        switch (oc(i)) {
          case 1:
            r = qi
            break
          case 4:
            r = tc
            break
          case 16:
            r = Vo
            break
          case 536870912:
            r = nc
            break
          default:
            r = Vo
        }
        r = Sd(r, dd.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = r)
    }
  }
  function dd(e, t) {
    if (((jl = -1), (Bl = 0), ce & 6)) throw Error(l(327))
    var r = e.callbackNode
    if (Sr() && e.callbackNode !== r) return null
    var i = Qo(e, e === je ? be : 0)
    if (i === 0) return null
    if (i & 30 || i & e.expiredLanes || t) t = Ul(e, i)
    else {
      t = i
      var u = ce
      ce |= 2
      var c = md()
      ;(je !== e || be !== t) && ((Yt = null), (_r = Ae() + 500), Un(e, t))
      do
        try {
          w0()
          break
        } catch (w) {
          hd(e, w)
        }
      while (!0)
      Ds(),
        (Ll.current = c),
        (ce = u),
        ze !== null ? (t = 0) : ((je = null), (be = 0), (t = Me))
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = Qi(e)), u !== 0 && ((i = u), (t = ma(e, u)))),
        t === 1)
      )
        throw ((r = mo), Un(e, 0), xn(e, i), ot(e, Ae()), r)
      if (t === 6) xn(e, i)
      else {
        if (
          ((u = e.current.alternate),
          !(i & 30) &&
            !g0(u) &&
            ((t = Ul(e, i)),
            t === 2 && ((c = Qi(e)), c !== 0 && ((i = c), (t = ma(e, c)))),
            t === 1))
        )
          throw ((r = mo), Un(e, 0), xn(e, i), ot(e, Ae()), r)
        switch (((e.finishedWork = u), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(l(345))
          case 2:
            $n(e, rt, Yt)
            break
          case 3:
            if (
              (xn(e, i),
              (i & 130023424) === i && ((t = da + 500 - Ae()), 10 < t))
            ) {
              if (Qo(e, 0) !== 0) break
              if (((u = e.suspendedLanes), (u & i) !== i)) {
                Ze(), (e.pingedLanes |= e.suspendedLanes & u)
                break
              }
              e.timeoutHandle = Ss($n.bind(null, e, rt, Yt), t)
              break
            }
            $n(e, rt, Yt)
            break
          case 4:
            if ((xn(e, i), (i & 4194240) === i)) break
            for (t = e.eventTimes, u = -1; 0 < i; ) {
              var p = 31 - kt(i)
              ;(c = 1 << p), (p = t[p]), p > u && (u = p), (i &= ~c)
            }
            if (
              ((i = u),
              (i = Ae() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * y0(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = Ss($n.bind(null, e, rt, Yt), i)
              break
            }
            $n(e, rt, Yt)
            break
          case 5:
            $n(e, rt, Yt)
            break
          default:
            throw Error(l(329))
        }
      }
    }
    return ot(e, Ae()), e.callbackNode === r ? dd.bind(null, e) : null
  }
  function ma(e, t) {
    var r = yo
    return (
      e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
      (e = Ul(e, t)),
      e !== 2 && ((t = rt), (rt = r), t !== null && ya(t)),
      e
    )
  }
  function ya(e) {
    rt === null ? (rt = e) : rt.push.apply(rt, e)
  }
  function g0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue
        if (r !== null && ((r = r.stores), r !== null))
          for (var i = 0; i < r.length; i++) {
            var u = r[i],
              c = u.getSnapshot
            u = u.value
            try {
              if (!Rt(c(), u)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function xn(e, t) {
    for (
      t &= ~fa,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - kt(t),
        i = 1 << r
      ;(e[r] = -1), (t &= ~i)
    }
  }
  function pd(e) {
    if (ce & 6) throw Error(l(327))
    Sr()
    var t = Qo(e, 0)
    if (!(t & 1)) return ot(e, Ae()), null
    var r = Ul(e, t)
    if (e.tag !== 0 && r === 2) {
      var i = Qi(e)
      i !== 0 && ((t = i), (r = ma(e, i)))
    }
    if (r === 1) throw ((r = mo), Un(e, 0), xn(e, t), ot(e, Ae()), r)
    if (r === 6) throw Error(l(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      $n(e, rt, Yt),
      ot(e, Ae()),
      null
    )
  }
  function ga(e, t) {
    var r = ce
    ce |= 1
    try {
      return e(t)
    } finally {
      ;(ce = r), ce === 0 && ((_r = Ae() + 500), pl && yn())
    }
  }
  function Bn(e) {
    Sn !== null && Sn.tag === 0 && !(ce & 6) && Sr()
    var t = ce
    ce |= 1
    var r = St.transition,
      i = me
    try {
      if (((St.transition = null), (me = 1), e)) return e()
    } finally {
      ;(me = i), (St.transition = r), (ce = t), !(ce & 6) && yn()
    }
  }
  function va() {
    ;(pt = wr.current), Ee(wr)
  }
  function Un(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var r = e.timeoutHandle
    if ((r !== -1 && ((e.timeoutHandle = -1), qm(r)), ze !== null))
      for (r = ze.return; r !== null; ) {
        var i = r
        switch ((Ps(i), i.tag)) {
          case 1:
            ;(i = i.type.childContextTypes), i != null && fl()
            break
          case 3:
            yr(), Ee(et), Ee(qe), Us()
            break
          case 5:
            js(i)
            break
          case 4:
            yr()
            break
          case 13:
            Ee(Pe)
            break
          case 19:
            Ee(Pe)
            break
          case 10:
            Ls(i.type._context)
            break
          case 22:
          case 23:
            va()
        }
        r = r.return
      }
    if (
      ((je = e),
      (ze = e = Cn(e.current, null)),
      (be = pt = t),
      (Me = 0),
      (mo = null),
      (fa = zl = jn = 0),
      (rt = yo = null),
      Fn !== null)
    ) {
      for (t = 0; t < Fn.length; t++)
        if (((r = Fn[t]), (i = r.interleaved), i !== null)) {
          r.interleaved = null
          var u = i.next,
            c = r.pending
          if (c !== null) {
            var p = c.next
            ;(c.next = u), (i.next = p)
          }
          r.pending = i
        }
      Fn = null
    }
    return e
  }
  function hd(e, t) {
    do {
      var r = ze
      try {
        if ((Ds(), (xl.current = Pl), Cl)) {
          for (var i = Ne.memoizedState; i !== null; ) {
            var u = i.queue
            u !== null && (u.pending = null), (i = i.next)
          }
          Cl = !1
        }
        if (
          ((In = 0),
          (Ie = Fe = Ne = null),
          (ao = !1),
          (uo = 0),
          (ca.current = null),
          r === null || r.return === null)
        ) {
          ;(Me = 1), (mo = t), (ze = null)
          break
        }
        e: {
          var c = e,
            p = r.return,
            w = r,
            E = t
          if (
            ((t = be),
            (w.flags |= 32768),
            E !== null && typeof E == 'object' && typeof E.then == 'function')
          ) {
            var D = E,
              j = w,
              U = j.tag
            if (!(j.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var M = j.alternate
              M
                ? ((j.updateQueue = M.updateQueue),
                  (j.memoizedState = M.memoizedState),
                  (j.lanes = M.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null))
            }
            var W = Bf(p)
            if (W !== null) {
              ;(W.flags &= -257),
                Uf(W, p, w, c, t),
                W.mode & 1 && jf(c, D, t),
                (t = W),
                (E = D)
              var Q = t.updateQueue
              if (Q === null) {
                var X = new Set()
                X.add(E), (t.updateQueue = X)
              } else Q.add(E)
              break e
            } else {
              if (!(t & 1)) {
                jf(c, D, t), wa()
                break e
              }
              E = Error(l(426))
            }
          } else if (ke && w.mode & 1) {
            var De = Bf(p)
            if (De !== null) {
              !(De.flags & 65536) && (De.flags |= 256),
                Uf(De, p, w, c, t),
                Os(gr(E, w))
              break e
            }
          }
          ;(c = E = gr(E, w)),
            Me !== 4 && (Me = 2),
            yo === null ? (yo = [c]) : yo.push(c),
            (c = p)
          do {
            switch (c.tag) {
              case 3:
                ;(c.flags |= 65536), (t &= -t), (c.lanes |= t)
                var N = Mf(c, E, t)
                uf(c, N)
                break e
              case 1:
                w = E
                var x = c.type,
                  T = c.stateNode
                if (
                  !(c.flags & 128) &&
                  (typeof x.getDerivedStateFromError == 'function' ||
                    (T !== null &&
                      typeof T.componentDidCatch == 'function' &&
                      (_n === null || !_n.has(T))))
                ) {
                  ;(c.flags |= 65536), (t &= -t), (c.lanes |= t)
                  var $ = If(c, w, t)
                  uf(c, $)
                  break e
                }
            }
            c = c.return
          } while (c !== null)
        }
        gd(r)
      } catch (G) {
        ;(t = G), ze === r && r !== null && (ze = r = r.return)
        continue
      }
      break
    } while (!0)
  }
  function md() {
    var e = Ll.current
    return (Ll.current = Pl), e === null ? Pl : e
  }
  function wa() {
    ;(Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      je === null || (!(jn & 268435455) && !(zl & 268435455)) || xn(je, be)
  }
  function Ul(e, t) {
    var r = ce
    ce |= 2
    var i = md()
    ;(je !== e || be !== t) && ((Yt = null), Un(e, t))
    do
      try {
        v0()
        break
      } catch (u) {
        hd(e, u)
      }
    while (!0)
    if ((Ds(), (ce = r), (Ll.current = i), ze !== null)) throw Error(l(261))
    return (je = null), (be = 0), Me
  }
  function v0() {
    for (; ze !== null; ) yd(ze)
  }
  function w0() {
    for (; ze !== null && !Vh(); ) yd(ze)
  }
  function yd(e) {
    var t = _d(e.alternate, e, pt)
    ;(e.memoizedProps = e.pendingProps),
      t === null ? gd(e) : (ze = t),
      (ca.current = null)
  }
  function gd(e) {
    var t = e
    do {
      var r = t.alternate
      if (((e = t.return), t.flags & 32768)) {
        if (((r = d0(r, t)), r !== null)) {
          ;(r.flags &= 32767), (ze = r)
          return
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(Me = 6), (ze = null)
          return
        }
      } else if (((r = f0(r, t, pt)), r !== null)) {
        ze = r
        return
      }
      if (((t = t.sibling), t !== null)) {
        ze = t
        return
      }
      ze = t = e
    } while (t !== null)
    Me === 0 && (Me = 5)
  }
  function $n(e, t, r) {
    var i = me,
      u = St.transition
    try {
      ;(St.transition = null), (me = 1), _0(e, t, r, i)
    } finally {
      ;(St.transition = u), (me = i)
    }
    return null
  }
  function _0(e, t, r, i) {
    do Sr()
    while (Sn !== null)
    if (ce & 6) throw Error(l(327))
    r = e.finishedWork
    var u = e.finishedLanes
    if (r === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(l(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var c = r.lanes | r.childLanes
    if (
      (em(e, c),
      e === je && ((ze = je = null), (be = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Ml ||
        ((Ml = !0),
        Sd(Vo, function () {
          return Sr(), null
        })),
      (c = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || c)
    ) {
      ;(c = St.transition), (St.transition = null)
      var p = me
      me = 1
      var w = ce
      ;(ce |= 4),
        (ca.current = null),
        h0(e, r),
        sd(r, e),
        Um(ws),
        (Go = !!vs),
        (ws = vs = null),
        (e.current = r),
        m0(r),
        Wh(),
        (ce = w),
        (me = p),
        (St.transition = c)
    } else e.current = r
    if (
      (Ml && ((Ml = !1), (Sn = e), (Il = u)),
      (c = e.pendingLanes),
      c === 0 && (_n = null),
      Qh(r.stateNode),
      ot(e, Ae()),
      t !== null)
    )
      for (i = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), i(u.value, { componentStack: u.stack, digest: u.digest })
    if (Fl) throw ((Fl = !1), (e = pa), (pa = null), e)
    return (
      Il & 1 && e.tag !== 0 && Sr(),
      (c = e.pendingLanes),
      c & 1 ? (e === ha ? go++ : ((go = 0), (ha = e))) : (go = 0),
      yn(),
      null
    )
  }
  function Sr() {
    if (Sn !== null) {
      var e = oc(Il),
        t = St.transition,
        r = me
      try {
        if (((St.transition = null), (me = 16 > e ? 16 : e), Sn === null))
          var i = !1
        else {
          if (((e = Sn), (Sn = null), (Il = 0), ce & 6)) throw Error(l(331))
          var u = ce
          for (ce |= 4, q = e.current; q !== null; ) {
            var c = q,
              p = c.child
            if (q.flags & 16) {
              var w = c.deletions
              if (w !== null) {
                for (var E = 0; E < w.length; E++) {
                  var D = w[E]
                  for (q = D; q !== null; ) {
                    var j = q
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, j, c)
                    }
                    var U = j.child
                    if (U !== null) (U.return = j), (q = U)
                    else
                      for (; q !== null; ) {
                        j = q
                        var M = j.sibling,
                          W = j.return
                        if ((nd(j), j === D)) {
                          q = null
                          break
                        }
                        if (M !== null) {
                          ;(M.return = W), (q = M)
                          break
                        }
                        q = W
                      }
                  }
                }
                var Q = c.alternate
                if (Q !== null) {
                  var X = Q.child
                  if (X !== null) {
                    Q.child = null
                    do {
                      var De = X.sibling
                      ;(X.sibling = null), (X = De)
                    } while (X !== null)
                  }
                }
                q = c
              }
            }
            if (c.subtreeFlags & 2064 && p !== null) (p.return = c), (q = p)
            else
              e: for (; q !== null; ) {
                if (((c = q), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ho(9, c, c.return)
                  }
                var N = c.sibling
                if (N !== null) {
                  ;(N.return = c.return), (q = N)
                  break e
                }
                q = c.return
              }
          }
          var x = e.current
          for (q = x; q !== null; ) {
            p = q
            var T = p.child
            if (p.subtreeFlags & 2064 && T !== null) (T.return = p), (q = T)
            else
              e: for (p = x; q !== null; ) {
                if (((w = q), w.flags & 2048))
                  try {
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(9, w)
                    }
                  } catch (G) {
                    Te(w, w.return, G)
                  }
                if (w === p) {
                  q = null
                  break e
                }
                var $ = w.sibling
                if ($ !== null) {
                  ;($.return = w.return), (q = $)
                  break e
                }
                q = w.return
              }
          }
          if (
            ((ce = u),
            yn(),
            It && typeof It.onPostCommitFiberRoot == 'function')
          )
            try {
              It.onPostCommitFiberRoot(Wo, e)
            } catch {}
          i = !0
        }
        return i
      } finally {
        ;(me = r), (St.transition = t)
      }
    }
    return !1
  }
  function vd(e, t, r) {
    ;(t = gr(r, t)),
      (t = Mf(e, t, 1)),
      (e = vn(e, t, 1)),
      (t = Ze()),
      e !== null && (Ur(e, 1, t), ot(e, t))
  }
  function Te(e, t, r) {
    if (e.tag === 3) vd(e, e, r)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vd(t, e, r)
          break
        } else if (t.tag === 1) {
          var i = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof i.componentDidCatch == 'function' &&
              (_n === null || !_n.has(i)))
          ) {
            ;(e = gr(r, e)),
              (e = If(t, e, 1)),
              (t = vn(t, e, 1)),
              (e = Ze()),
              t !== null && (Ur(t, 1, e), ot(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function S0(e, t, r) {
    var i = e.pingCache
    i !== null && i.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & r),
      je === e &&
        (be & r) === r &&
        (Me === 4 || (Me === 3 && (be & 130023424) === be && 500 > Ae() - da)
          ? Un(e, 0)
          : (fa |= r)),
      ot(e, t)
  }
  function wd(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = qo), (qo <<= 1), !(qo & 130023424) && (qo = 4194304))
        : (t = 1))
    var r = Ze()
    ;(e = Jt(e, t)), e !== null && (Ur(e, t, r), ot(e, r))
  }
  function E0(e) {
    var t = e.memoizedState,
      r = 0
    t !== null && (r = t.retryLane), wd(e, r)
  }
  function x0(e, t) {
    var r = 0
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          u = e.memoizedState
        u !== null && (r = u.retryLane)
        break
      case 19:
        i = e.stateNode
        break
      default:
        throw Error(l(314))
    }
    i !== null && i.delete(t), wd(e, r)
  }
  var _d
  _d = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || et.current) nt = !0
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (nt = !1), c0(e, t, r)
        nt = !!(e.flags & 131072)
      }
    else (nt = !1), ke && t.flags & 1048576 && Yc(t, ml, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type
        Ol(e, t), (e = t.pendingProps)
        var u = ur(t, qe.current)
        mr(t, r), (u = Hs(null, t, i, e, u, r))
        var c = Vs()
        return (
          (t.flags |= 1),
          typeof u == 'object' &&
          u !== null &&
          typeof u.render == 'function' &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              tt(i) ? ((c = !0), dl(t)) : (c = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ms(t),
              (u.updater = Nl),
              (t.stateNode = u),
              (u._reactInternals = t),
              Xs(t, i, e, r),
              (t = ea(null, t, i, !0, c, r)))
            : ((t.tag = 0), ke && c && Rs(t), Ye(null, t, u, r), (t = t.child)),
          t
        )
      case 16:
        i = t.elementType
        e: {
          switch (
            (Ol(e, t),
            (e = t.pendingProps),
            (u = i._init),
            (i = u(i._payload)),
            (t.type = i),
            (u = t.tag = k0(i)),
            (e = Nt(i, e)),
            u)
          ) {
            case 0:
              t = Zs(null, t, i, e, r)
              break e
            case 1:
              t = Kf(null, t, i, e, r)
              break e
            case 11:
              t = $f(null, t, i, e, r)
              break e
            case 14:
              t = bf(null, t, i, Nt(i.type, e), r)
              break e
          }
          throw Error(l(306, i, ''))
        }
        return t
      case 0:
        return (
          (i = t.type),
          (u = t.pendingProps),
          (u = t.elementType === i ? u : Nt(i, u)),
          Zs(e, t, i, u, r)
        )
      case 1:
        return (
          (i = t.type),
          (u = t.pendingProps),
          (u = t.elementType === i ? u : Nt(i, u)),
          Kf(e, t, i, u, r)
        )
      case 3:
        e: {
          if ((qf(t), e === null)) throw Error(l(387))
          ;(i = t.pendingProps),
            (c = t.memoizedState),
            (u = c.element),
            af(e, t),
            Sl(t, i, null, r)
          var p = t.memoizedState
          if (((i = p.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ;(u = gr(Error(l(423)), t)), (t = Qf(e, t, i, r, u))
              break e
            } else if (i !== u) {
              ;(u = gr(Error(l(424)), t)), (t = Qf(e, t, i, r, u))
              break e
            } else
              for (
                dt = pn(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  ke = !0,
                  Pt = null,
                  r = lf(t, null, i, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
          else {
            if ((dr(), i === u)) {
              t = Gt(e, t, r)
              break e
            }
            Ye(e, t, i, r)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          ff(t),
          e === null && Ts(t),
          (i = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = u.children),
          _s(i, u) ? (p = null) : c !== null && _s(i, c) && (t.flags |= 32),
          Wf(e, t),
          Ye(e, t, p, r),
          t.child
        )
      case 6:
        return e === null && Ts(t), null
      case 13:
        return Jf(e, t, r)
      case 4:
        return (
          Is(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = pr(t, null, i, r)) : Ye(e, t, i, r),
          t.child
        )
      case 11:
        return (
          (i = t.type),
          (u = t.pendingProps),
          (u = t.elementType === i ? u : Nt(i, u)),
          $f(e, t, i, u, r)
        )
      case 7:
        return Ye(e, t, t.pendingProps, r), t.child
      case 8:
        return Ye(e, t, t.pendingProps.children, r), t.child
      case 12:
        return Ye(e, t, t.pendingProps.children, r), t.child
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (u = t.pendingProps),
            (c = t.memoizedProps),
            (p = u.value),
            _e(vl, i._currentValue),
            (i._currentValue = p),
            c !== null)
          )
            if (Rt(c.value, p)) {
              if (c.children === u.children && !et.current) {
                t = Gt(e, t, r)
                break e
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var w = c.dependencies
                if (w !== null) {
                  p = c.child
                  for (var E = w.firstContext; E !== null; ) {
                    if (E.context === i) {
                      if (c.tag === 1) {
                        ;(E = Xt(-1, r & -r)), (E.tag = 2)
                        var D = c.updateQueue
                        if (D !== null) {
                          D = D.shared
                          var j = D.pending
                          j === null
                            ? (E.next = E)
                            : ((E.next = j.next), (j.next = E)),
                            (D.pending = E)
                        }
                      }
                      ;(c.lanes |= r),
                        (E = c.alternate),
                        E !== null && (E.lanes |= r),
                        zs(c.return, r, t),
                        (w.lanes |= r)
                      break
                    }
                    E = E.next
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(l(341))
                  ;(p.lanes |= r),
                    (w = p.alternate),
                    w !== null && (w.lanes |= r),
                    zs(p, r, t),
                    (p = c.sibling)
                } else p = c.child
                if (p !== null) p.return = c
                else
                  for (p = c; p !== null; ) {
                    if (p === t) {
                      p = null
                      break
                    }
                    if (((c = p.sibling), c !== null)) {
                      ;(c.return = p.return), (p = c)
                      break
                    }
                    p = p.return
                  }
                c = p
              }
          Ye(e, t, u.children, r), (t = t.child)
        }
        return t
      case 9:
        return (
          (u = t.type),
          (i = t.pendingProps.children),
          mr(t, r),
          (u = wt(u)),
          (i = i(u)),
          (t.flags |= 1),
          Ye(e, t, i, r),
          t.child
        )
      case 14:
        return (
          (i = t.type),
          (u = Nt(i, t.pendingProps)),
          (u = Nt(i.type, u)),
          bf(e, t, i, u, r)
        )
      case 15:
        return Hf(e, t, t.type, t.pendingProps, r)
      case 17:
        return (
          (i = t.type),
          (u = t.pendingProps),
          (u = t.elementType === i ? u : Nt(i, u)),
          Ol(e, t),
          (t.tag = 1),
          tt(i) ? ((e = !0), dl(t)) : (e = !1),
          mr(t, r),
          zf(t, i, u),
          Xs(t, i, u, r),
          ea(null, t, i, !0, e, r)
        )
      case 19:
        return Gf(e, t, r)
      case 22:
        return Vf(e, t, r)
    }
    throw Error(l(156, t.tag))
  }
  function Sd(e, t) {
    return Zu(e, t)
  }
  function C0(e, t, r, i) {
    ;(this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function Et(e, t, r, i) {
    return new C0(e, t, r, i)
  }
  function _a(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function k0(e) {
    if (typeof e == 'function') return _a(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === Ke)) return 11
      if (e === Le) return 14
    }
    return 2
  }
  function Cn(e, t) {
    var r = e.alternate
    return (
      r === null
        ? ((r = Et(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    )
  }
  function $l(e, t, r, i, u, c) {
    var p = 2
    if (((i = e), typeof e == 'function')) _a(e) && (p = 1)
    else if (typeof e == 'string') p = 5
    else
      e: switch (e) {
        case te:
          return bn(r.children, u, c, t)
        case Y:
          ;(p = 8), (u |= 8)
          break
        case se:
          return (
            (e = Et(12, r, t, u | 2)), (e.elementType = se), (e.lanes = c), e
          )
        case Ue:
          return (e = Et(13, r, t, u)), (e.elementType = Ue), (e.lanes = c), e
        case ye:
          return (e = Et(19, r, t, u)), (e.elementType = ye), (e.lanes = c), e
        case ve:
          return bl(r, u, c, t)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case xe:
                p = 10
                break e
              case We:
                p = 9
                break e
              case Ke:
                p = 11
                break e
              case Le:
                p = 14
                break e
              case Oe:
                ;(p = 16), (i = null)
                break e
            }
          throw Error(l(130, e == null ? e : typeof e, ''))
      }
    return (
      (t = Et(p, r, t, u)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    )
  }
  function bn(e, t, r, i) {
    return (e = Et(7, e, i, t)), (e.lanes = r), e
  }
  function bl(e, t, r, i) {
    return (
      (e = Et(22, e, i, t)),
      (e.elementType = ve),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function Sa(e, t, r) {
    return (e = Et(6, e, null, t)), (e.lanes = r), e
  }
  function Ea(e, t, r) {
    return (
      (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function R0(e, t, r, i, u) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ji(0)),
      (this.expirationTimes = Ji(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ji(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null)
  }
  function xa(e, t, r, i, u, c, p, w, E) {
    return (
      (e = new R0(e, t, r, w, E)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Et(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ms(c),
      e
    )
  }
  function P0(e, t, r) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: J,
      key: i == null ? null : '' + i,
      children: e,
      containerInfo: t,
      implementation: r,
    }
  }
  function Ed(e) {
    if (!e) return mn
    e = e._reactInternals
    e: {
      if (On(e) !== e || e.tag !== 1) throw Error(l(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(l(171))
    }
    if (e.tag === 1) {
      var r = e.type
      if (tt(r)) return Jc(e, r, t)
    }
    return t
  }
  function xd(e, t, r, i, u, c, p, w, E) {
    return (
      (e = xa(r, i, !0, e, u, c, p, w, E)),
      (e.context = Ed(null)),
      (r = e.current),
      (i = Ze()),
      (u = En(r)),
      (c = Xt(i, u)),
      (c.callback = t ?? null),
      vn(r, c, u),
      (e.current.lanes = u),
      Ur(e, u, i),
      ot(e, i),
      e
    )
  }
  function Hl(e, t, r, i) {
    var u = t.current,
      c = Ze(),
      p = En(u)
    return (
      (r = Ed(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Xt(c, p)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = vn(u, t, p)),
      e !== null && (At(e, u, p, c), _l(e, u, p)),
      p
    )
  }
  function Vl(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function Cd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane
      e.retryLane = r !== 0 && r < t ? r : t
    }
  }
  function Ca(e, t) {
    Cd(e, t), (e = e.alternate) && Cd(e, t)
  }
  function N0() {
    return null
  }
  var kd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function ka(e) {
    this._internalRoot = e
  }
  ;(Wl.prototype.render = ka.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(l(409))
      Hl(e, t, null, null)
    }),
    (Wl.prototype.unmount = ka.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          Bn(function () {
            Hl(null, e, null, null)
          }),
            (t[Wt] = null)
        }
      })
  function Wl(e) {
    this._internalRoot = e
  }
  Wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = sc()
      e = { blockedOn: null, target: e, priority: t }
      for (var r = 0; r < cn.length && t !== 0 && t < cn[r].priority; r++);
      cn.splice(r, 0, e), r === 0 && cc(e)
    }
  }
  function Ra(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function Kl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function Rd() {}
  function T0(e, t, r, i, u) {
    if (u) {
      if (typeof i == 'function') {
        var c = i
        i = function () {
          var D = Vl(p)
          c.call(D)
        }
      }
      var p = xd(t, i, e, 0, null, !1, !1, '', Rd)
      return (
        (e._reactRootContainer = p),
        (e[Wt] = p.current),
        eo(e.nodeType === 8 ? e.parentNode : e),
        Bn(),
        p
      )
    }
    for (; (u = e.lastChild); ) e.removeChild(u)
    if (typeof i == 'function') {
      var w = i
      i = function () {
        var D = Vl(E)
        w.call(D)
      }
    }
    var E = xa(e, 0, !1, null, null, !1, !1, '', Rd)
    return (
      (e._reactRootContainer = E),
      (e[Wt] = E.current),
      eo(e.nodeType === 8 ? e.parentNode : e),
      Bn(function () {
        Hl(t, E, r, i)
      }),
      E
    )
  }
  function ql(e, t, r, i, u) {
    var c = r._reactRootContainer
    if (c) {
      var p = c
      if (typeof u == 'function') {
        var w = u
        u = function () {
          var E = Vl(p)
          w.call(E)
        }
      }
      Hl(t, p, e, u)
    } else p = T0(r, t, e, u, i)
    return Vl(p)
  }
  ;(lc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var r = Br(t.pendingLanes)
          r !== 0 &&
            (Xi(t, r | 1), ot(t, Ae()), !(ce & 6) && ((_r = Ae() + 500), yn()))
        }
        break
      case 13:
        Bn(function () {
          var i = Jt(e, 1)
          if (i !== null) {
            var u = Ze()
            At(i, e, 1, u)
          }
        }),
          Ca(e, 1)
    }
  }),
    (Gi = function (e) {
      if (e.tag === 13) {
        var t = Jt(e, 134217728)
        if (t !== null) {
          var r = Ze()
          At(t, e, 134217728, r)
        }
        Ca(e, 134217728)
      }
    }),
    (ic = function (e) {
      if (e.tag === 13) {
        var t = En(e),
          r = Jt(e, t)
        if (r !== null) {
          var i = Ze()
          At(r, e, t, i)
        }
        Ca(e, t)
      }
    }),
    (sc = function () {
      return me
    }),
    (ac = function (e, t) {
      var r = me
      try {
        return (me = e), t()
      } finally {
        me = r
      }
    }),
    (Hi = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Fi(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode
            for (
              r = r.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var i = r[t]
              if (i !== e && i.form === e.form) {
                var u = cl(i)
                if (!u) throw Error(l(90))
                Du(i), Fi(i, u)
              }
            }
          }
          break
        case 'textarea':
          Iu(e, r)
          break
        case 'select':
          ;(t = r.value), t != null && Gn(e, !!r.multiple, t, !1)
      }
    }),
    (Ku = ga),
    (qu = Bn)
  var O0 = { usingClientEntryPoint: !1, Events: [ro, sr, cl, Vu, Wu, ga] },
    vo = {
      findFiberByHostInstance: An,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    A0 = {
      bundleType: vo.bundleType,
      version: vo.version,
      rendererPackageName: vo.rendererPackageName,
      rendererConfig: vo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Gu(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: vo.findFiberByHostInstance || N0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        ;(Wo = Ql.inject(A0)), (It = Ql)
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0),
    (lt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!Ra(t)) throw Error(l(200))
      return P0(e, t, null, r)
    }),
    (lt.createRoot = function (e, t) {
      if (!Ra(e)) throw Error(l(299))
      var r = !1,
        i = '',
        u = kd
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = xa(e, 1, !1, null, null, r, !1, i, u)),
        (e[Wt] = t.current),
        eo(e.nodeType === 8 ? e.parentNode : e),
        new ka(t)
      )
    }),
    (lt.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)))
      return (e = Gu(t)), (e = e === null ? null : e.stateNode), e
    }),
    (lt.flushSync = function (e) {
      return Bn(e)
    }),
    (lt.hydrate = function (e, t, r) {
      if (!Kl(t)) throw Error(l(200))
      return ql(null, e, t, !0, r)
    }),
    (lt.hydrateRoot = function (e, t, r) {
      if (!Ra(e)) throw Error(l(405))
      var i = (r != null && r.hydratedSources) || null,
        u = !1,
        c = '',
        p = kd
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = xd(t, null, e, 1, r ?? null, u, !1, c, p)),
        (e[Wt] = t.current),
        eo(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (r = i[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u)
      return new Wl(t)
    }),
    (lt.render = function (e, t, r) {
      if (!Kl(t)) throw Error(l(200))
      return ql(null, e, t, !1, r)
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!Kl(e)) throw Error(l(40))
      return e._reactRootContainer
        ? (Bn(function () {
            ql(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Wt] = null)
            })
          }),
          !0)
        : !1
    }),
    (lt.unstable_batchedUpdates = ga),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
      if (!Kl(r)) throw Error(l(200))
      if (e == null || e._reactInternals === void 0) throw Error(l(38))
      return ql(e, t, r, !1, i)
    }),
    (lt.version = '18.3.1-next-f1338f8080-20240426'),
    lt
  )
}
var Dd
function B0() {
  if (Dd) return Na.exports
  Dd = 1
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
      } catch (o) {
        console.error(o)
      }
  }
  return n(), (Na.exports = j0()), Na.exports
}
var Ld
function U0() {
  if (Ld) return Jl
  Ld = 1
  var n = B0()
  return (Jl.createRoot = n.createRoot), (Jl.hydrateRoot = n.hydrateRoot), Jl
}
var $0 = U0()
const b0 = Ep($0)
var Aa = { exports: {} },
  Da = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd
function H0() {
  if (zd) return Da
  zd = 1
  var n = wi()
  function o(h, y) {
    return (h === y && (h !== 0 || 1 / h === 1 / y)) || (h !== h && y !== y)
  }
  var l = typeof Object.is == 'function' ? Object.is : o,
    s = n.useSyncExternalStore,
    a = n.useRef,
    f = n.useEffect,
    d = n.useMemo,
    m = n.useDebugValue
  return (
    (Da.useSyncExternalStoreWithSelector = function (h, y, g, v, S) {
      var O = a(null)
      if (O.current === null) {
        var k = { hasValue: !1, value: null }
        O.current = k
      } else k = O.current
      O = d(
        function () {
          function R(V) {
            if (!L) {
              if (((L = !0), (F = V), (V = v(V)), S !== void 0 && k.hasValue)) {
                var J = k.value
                if (S(J, V)) return (B = J)
              }
              return (B = V)
            }
            if (((J = B), l(F, V))) return J
            var te = v(V)
            return S !== void 0 && S(J, te) ? ((F = V), J) : ((F = V), (B = te))
          }
          var L = !1,
            F,
            B,
            b = g === void 0 ? null : g
          return [
            function () {
              return R(y())
            },
            b === null
              ? void 0
              : function () {
                  return R(b())
                },
          ]
        },
        [y, g, v, S]
      )
      var A = s(h, O[0], O[1])
      return (
        f(
          function () {
            ;(k.hasValue = !0), (k.value = A)
          },
          [A]
        ),
        m(A),
        A
      )
    }),
    Da
  )
}
var Fd
function V0() {
  return Fd || ((Fd = 1), (Aa.exports = H0())), Aa.exports
}
var W0 = V0(),
  La = { exports: {} },
  wo = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md
function K0() {
  if (Md) return wo
  Md = 1
  var n = wi(),
    o = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 }
  function d(m, h, y) {
    var g,
      v = {},
      S = null,
      O = null
    y !== void 0 && (S = '' + y),
      h.key !== void 0 && (S = '' + h.key),
      h.ref !== void 0 && (O = h.ref)
    for (g in h) s.call(h, g) && !f.hasOwnProperty(g) && (v[g] = h[g])
    if (m && m.defaultProps)
      for (g in ((h = m.defaultProps), h)) v[g] === void 0 && (v[g] = h[g])
    return { $$typeof: o, type: m, key: S, ref: O, props: v, _owner: a.current }
  }
  return (wo.Fragment = l), (wo.jsx = d), (wo.jsxs = d), wo
}
var Id
function q0() {
  return Id || ((Id = 1), (La.exports = K0())), La.exports
}
var cu = q0()
const Ct = cu.Fragment,
  C = cu.jsx,
  re = cu.jsxs
function Q0(n) {
  n()
}
function J0() {
  let n = null,
    o = null
  return {
    clear() {
      ;(n = null), (o = null)
    },
    notify() {
      Q0(() => {
        let l = n
        for (; l; ) l.callback(), (l = l.next)
      })
    },
    get() {
      const l = []
      let s = n
      for (; s; ) l.push(s), (s = s.next)
      return l
    },
    subscribe(l) {
      let s = !0
      const a = (o = { callback: l, next: null, prev: o })
      return (
        a.prev ? (a.prev.next = a) : (n = a),
        function () {
          !s ||
            n === null ||
            ((s = !1),
            a.next ? (a.next.prev = a.prev) : (o = a.prev),
            a.prev ? (a.prev.next = a.next) : (n = a.next))
        }
      )
    },
  }
}
var jd = { notify() {}, get: () => [] }
function X0(n, o) {
  let l,
    s = jd,
    a = 0,
    f = !1
  function d(A) {
    g()
    const R = s.subscribe(A)
    let L = !1
    return () => {
      L || ((L = !0), R(), v())
    }
  }
  function m() {
    s.notify()
  }
  function h() {
    k.onStateChange && k.onStateChange()
  }
  function y() {
    return f
  }
  function g() {
    a++, l || ((l = n.subscribe(h)), (s = J0()))
  }
  function v() {
    a--, l && a === 0 && (l(), (l = void 0), s.clear(), (s = jd))
  }
  function S() {
    f || ((f = !0), g())
  }
  function O() {
    f && ((f = !1), v())
  }
  const k = {
    addNestedSub: d,
    notifyNestedSubs: m,
    handleChangeWrapper: h,
    isSubscribed: y,
    trySubscribe: S,
    tryUnsubscribe: O,
    getListeners: () => s,
  }
  return k
}
var G0 = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Y0 = G0(),
  Z0 = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  ey = Z0(),
  ty = () => (Y0 || ey ? _.useLayoutEffect : _.useEffect),
  ny = ty(),
  za = Symbol.for('react-redux-context'),
  Fa = typeof globalThis < 'u' ? globalThis : {}
function ry() {
  if (!_.createContext) return {}
  const n = Fa[za] ?? (Fa[za] = new Map())
  let o = n.get(_.createContext)
  return o || ((o = _.createContext(null)), n.set(_.createContext, o)), o
}
var Nn = ry()
function oy(n) {
  const { children: o, context: l, serverState: s, store: a } = n,
    f = _.useMemo(() => {
      const h = X0(a)
      return { store: a, subscription: h, getServerState: s ? () => s : void 0 }
    }, [a, s]),
    d = _.useMemo(() => a.getState(), [a])
  return (
    ny(() => {
      const { subscription: h } = f
      return (
        (h.onStateChange = h.notifyNestedSubs),
        h.trySubscribe(),
        d !== a.getState() && h.notifyNestedSubs(),
        () => {
          h.tryUnsubscribe(), (h.onStateChange = void 0)
        }
      )
    }, [f, d]),
    C((l || Nn).Provider, { value: f, children: o })
  )
}
var ly = oy
function fu(n = Nn) {
  return function () {
    return _.useContext(n)
  }
}
var xp = fu()
function Cp(n = Nn) {
  const o = n === Nn ? xp : fu(n),
    l = () => {
      const { store: s } = o()
      return s
    }
  return Object.assign(l, { withTypes: () => l }), l
}
var iy = Cp()
function sy(n = Nn) {
  const o = n === Nn ? iy : Cp(n),
    l = () => o().dispatch
  return Object.assign(l, { withTypes: () => l }), l
}
var du = sy(),
  ay = (n, o) => n === o
function uy(n = Nn) {
  const o = n === Nn ? xp : fu(n),
    l = (s, a = {}) => {
      const { equalityFn: f = ay } =
          typeof a == 'function' ? { equalityFn: a } : a,
        d = o(),
        { store: m, subscription: h, getServerState: y } = d
      _.useRef(!0)
      const g = _.useCallback(
          {
            [s.name](S) {
              return s(S)
            },
          }[s.name],
          [s]
        ),
        v = W0.useSyncExternalStoreWithSelector(
          h.addNestedSub,
          m.getState,
          y || m.getState,
          g,
          f
        )
      return _.useDebugValue(v), v
    }
  return Object.assign(l, { withTypes: () => l }), l
}
var pu = uy(),
  _o = {},
  Bd
function cy() {
  if (Bd) return _o
  ;(Bd = 1),
    Object.defineProperty(_o, '__esModule', { value: !0 }),
    (_o.parse = d),
    (_o.serialize = y)
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    f = (() => {
      const S = function () {}
      return (S.prototype = Object.create(null)), S
    })()
  function d(S, O) {
    const k = new f(),
      A = S.length
    if (A < 2) return k
    const R = (O == null ? void 0 : O.decode) || g
    let L = 0
    do {
      const F = S.indexOf('=', L)
      if (F === -1) break
      const B = S.indexOf(';', L),
        b = B === -1 ? A : B
      if (F > b) {
        L = S.lastIndexOf(';', F - 1) + 1
        continue
      }
      const V = m(S, L, F),
        J = h(S, F, V),
        te = S.slice(V, J)
      if (k[te] === void 0) {
        let Y = m(S, F + 1, b),
          se = h(S, b, Y)
        const xe = R(S.slice(Y, se))
        k[te] = xe
      }
      L = b + 1
    } while (L < A)
    return k
  }
  function m(S, O, k) {
    do {
      const A = S.charCodeAt(O)
      if (A !== 32 && A !== 9) return O
    } while (++O < k)
    return k
  }
  function h(S, O, k) {
    for (; O > k; ) {
      const A = S.charCodeAt(--O)
      if (A !== 32 && A !== 9) return O + 1
    }
    return k
  }
  function y(S, O, k) {
    const A = (k == null ? void 0 : k.encode) || encodeURIComponent
    if (!n.test(S)) throw new TypeError(`argument name is invalid: ${S}`)
    const R = A(O)
    if (!o.test(R)) throw new TypeError(`argument val is invalid: ${O}`)
    let L = S + '=' + R
    if (!k) return L
    if (k.maxAge !== void 0) {
      if (!Number.isInteger(k.maxAge))
        throw new TypeError(`option maxAge is invalid: ${k.maxAge}`)
      L += '; Max-Age=' + k.maxAge
    }
    if (k.domain) {
      if (!l.test(k.domain))
        throw new TypeError(`option domain is invalid: ${k.domain}`)
      L += '; Domain=' + k.domain
    }
    if (k.path) {
      if (!s.test(k.path))
        throw new TypeError(`option path is invalid: ${k.path}`)
      L += '; Path=' + k.path
    }
    if (k.expires) {
      if (!v(k.expires) || !Number.isFinite(k.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${k.expires}`)
      L += '; Expires=' + k.expires.toUTCString()
    }
    if (
      (k.httpOnly && (L += '; HttpOnly'),
      k.secure && (L += '; Secure'),
      k.partitioned && (L += '; Partitioned'),
      k.priority)
    )
      switch (
        typeof k.priority == 'string' ? k.priority.toLowerCase() : void 0
      ) {
        case 'low':
          L += '; Priority=Low'
          break
        case 'medium':
          L += '; Priority=Medium'
          break
        case 'high':
          L += '; Priority=High'
          break
        default:
          throw new TypeError(`option priority is invalid: ${k.priority}`)
      }
    if (k.sameSite)
      switch (
        typeof k.sameSite == 'string' ? k.sameSite.toLowerCase() : k.sameSite
      ) {
        case !0:
        case 'strict':
          L += '; SameSite=Strict'
          break
        case 'lax':
          L += '; SameSite=Lax'
          break
        case 'none':
          L += '; SameSite=None'
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)
      }
    return L
  }
  function g(S) {
    if (S.indexOf('%') === -1) return S
    try {
      return decodeURIComponent(S)
    } catch {
      return S
    }
  }
  function v(S) {
    return a.call(S) === '[object Date]'
  }
  return _o
}
cy()
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ud = 'popstate'
function fy(n = {}) {
  function o(s, a) {
    let { pathname: f, search: d, hash: m } = s.location
    return qa(
      '',
      { pathname: f, search: d, hash: m },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    )
  }
  function l(s, a) {
    return typeof a == 'string' ? a : To(a)
  }
  return py(o, l, null, n)
}
function Re(n, o) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(o)
}
function zt(n, o) {
  if (!n) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function dy() {
  return Math.random().toString(36).substring(2, 10)
}
function $d(n, o) {
  return { usr: n.state, key: n.key, idx: o }
}
function qa(n, o, l = null, s) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? Pr(o) : o),
    state: l,
    key: (o && o.key) || s || dy(),
  }
}
function To({ pathname: n = '/', search: o = '', hash: l = '' }) {
  return (
    o && o !== '?' && (n += o.charAt(0) === '?' ? o : '?' + o),
    l && l !== '#' && (n += l.charAt(0) === '#' ? l : '#' + l),
    n
  )
}
function Pr(n) {
  let o = {}
  if (n) {
    let l = n.indexOf('#')
    l >= 0 && ((o.hash = n.substring(l)), (n = n.substring(0, l)))
    let s = n.indexOf('?')
    s >= 0 && ((o.search = n.substring(s)), (n = n.substring(0, s))),
      n && (o.pathname = n)
  }
  return o
}
function py(n, o, l, s = {}) {
  let { window: a = document.defaultView, v5Compat: f = !1 } = s,
    d = a.history,
    m = 'POP',
    h = null,
    y = g()
  y == null && ((y = 0), d.replaceState({ ...d.state, idx: y }, ''))
  function g() {
    return (d.state || { idx: null }).idx
  }
  function v() {
    m = 'POP'
    let R = g(),
      L = R == null ? null : R - y
    ;(y = R), h && h({ action: m, location: A.location, delta: L })
  }
  function S(R, L) {
    m = 'PUSH'
    let F = qa(A.location, R, L)
    y = g() + 1
    let B = $d(F, y),
      b = A.createHref(F)
    try {
      d.pushState(B, '', b)
    } catch (V) {
      if (V instanceof DOMException && V.name === 'DataCloneError') throw V
      a.location.assign(b)
    }
    f && h && h({ action: m, location: A.location, delta: 1 })
  }
  function O(R, L) {
    m = 'REPLACE'
    let F = qa(A.location, R, L)
    y = g()
    let B = $d(F, y),
      b = A.createHref(F)
    d.replaceState(B, '', b),
      f && h && h({ action: m, location: A.location, delta: 0 })
  }
  function k(R) {
    let L = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      F = typeof R == 'string' ? R : To(R)
    return (
      (F = F.replace(/ $/, '%20')),
      Re(
        L,
        `No window.location.(origin|href) available to create URL for href: ${F}`
      ),
      new URL(F, L)
    )
  }
  let A = {
    get action() {
      return m
    },
    get location() {
      return n(a, d)
    },
    listen(R) {
      if (h) throw new Error('A history only accepts one active listener')
      return (
        a.addEventListener(Ud, v),
        (h = R),
        () => {
          a.removeEventListener(Ud, v), (h = null)
        }
      )
    },
    createHref(R) {
      return o(a, R)
    },
    createURL: k,
    encodeLocation(R) {
      let L = k(R)
      return { pathname: L.pathname, search: L.search, hash: L.hash }
    },
    push: S,
    replace: O,
    go(R) {
      return d.go(R)
    },
  }
  return A
}
function kp(n, o, l = '/') {
  return hy(n, o, l, !1)
}
function hy(n, o, l, s) {
  let a = typeof o == 'string' ? Pr(o) : o,
    f = Tn(a.pathname || '/', l)
  if (f == null) return null
  let d = Rp(n)
  my(d)
  let m = null
  for (let h = 0; m == null && h < d.length; ++h) {
    let y = Ry(f)
    m = Cy(d[h], y, s)
  }
  return m
}
function Rp(n, o = [], l = [], s = '') {
  let a = (f, d, m) => {
    let h = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    }
    h.relativePath.startsWith('/') &&
      (Re(
        h.relativePath.startsWith(s),
        `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (h.relativePath = h.relativePath.slice(s.length)))
    let y = tn([s, h.relativePath]),
      g = l.concat(h)
    f.children &&
      f.children.length > 0 &&
      (Re(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Rp(f.children, o, g, y)),
      !(f.path == null && !f.index) &&
        o.push({ path: y, score: Ey(y, f.index), routesMeta: g })
  }
  return (
    n.forEach((f, d) => {
      var m
      if (f.path === '' || !((m = f.path) != null && m.includes('?'))) a(f, d)
      else for (let h of Pp(f.path)) a(f, d, h)
    }),
    o
  )
}
function Pp(n) {
  let o = n.split('/')
  if (o.length === 0) return []
  let [l, ...s] = o,
    a = l.endsWith('?'),
    f = l.replace(/\?$/, '')
  if (s.length === 0) return a ? [f, ''] : [f]
  let d = Pp(s.join('/')),
    m = []
  return (
    m.push(...d.map(h => (h === '' ? f : [f, h].join('/')))),
    a && m.push(...d),
    m.map(h => (n.startsWith('/') && h === '' ? '/' : h))
  )
}
function my(n) {
  n.sort((o, l) =>
    o.score !== l.score
      ? l.score - o.score
      : xy(
          o.routesMeta.map(s => s.childrenIndex),
          l.routesMeta.map(s => s.childrenIndex)
        )
  )
}
var yy = /^:[\w-]+$/,
  gy = 3,
  vy = 2,
  wy = 1,
  _y = 10,
  Sy = -2,
  bd = n => n === '*'
function Ey(n, o) {
  let l = n.split('/'),
    s = l.length
  return (
    l.some(bd) && (s += Sy),
    o && (s += vy),
    l
      .filter(a => !bd(a))
      .reduce((a, f) => a + (yy.test(f) ? gy : f === '' ? wy : _y), s)
  )
}
function xy(n, o) {
  return n.length === o.length && n.slice(0, -1).every((s, a) => s === o[a])
    ? n[n.length - 1] - o[o.length - 1]
    : 0
}
function Cy(n, o, l = !1) {
  let { routesMeta: s } = n,
    a = {},
    f = '/',
    d = []
  for (let m = 0; m < s.length; ++m) {
    let h = s[m],
      y = m === s.length - 1,
      g = f === '/' ? o : o.slice(f.length) || '/',
      v = ci(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: y },
        g
      ),
      S = h.route
    if (
      (!v &&
        y &&
        l &&
        !s[s.length - 1].route.index &&
        (v = ci(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          g
        )),
      !v)
    )
      return null
    Object.assign(a, v.params),
      d.push({
        params: a,
        pathname: tn([f, v.pathname]),
        pathnameBase: Oy(tn([f, v.pathnameBase])),
        route: S,
      }),
      v.pathnameBase !== '/' && (f = tn([f, v.pathnameBase]))
  }
  return d
}
function ci(n, o) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 })
  let [l, s] = ky(n.path, n.caseSensitive, n.end),
    a = o.match(l)
  if (!a) return null
  let f = a[0],
    d = f.replace(/(.)\/+$/, '$1'),
    m = a.slice(1)
  return {
    params: s.reduce((y, { paramName: g, isOptional: v }, S) => {
      if (g === '*') {
        let k = m[S] || ''
        d = f.slice(0, f.length - k.length).replace(/(.)\/+$/, '$1')
      }
      const O = m[S]
      return (
        v && !O ? (y[g] = void 0) : (y[g] = (O || '').replace(/%2F/g, '/')), y
      )
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  }
}
function ky(n, o = !1, l = !0) {
  zt(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      '/*'
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      '/*'
    )}".`
  )
  let s = [],
    a =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (
            s.push({ paramName: m, isOptional: h != null }),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    n.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (a += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : l
      ? (a += '\\/*$')
      : n !== '' && n !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, o ? void 0 : 'i'), s]
  )
}
function Ry(n) {
  try {
    return n
      .split('/')
      .map(o => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/')
  } catch (o) {
    return (
      zt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      n
    )
  }
}
function Tn(n, o) {
  if (o === '/') return n
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null
  let l = o.endsWith('/') ? o.length - 1 : o.length,
    s = n.charAt(l)
  return s && s !== '/' ? null : n.slice(l) || '/'
}
function Py(n, o = '/') {
  let {
    pathname: l,
    search: s = '',
    hash: a = '',
  } = typeof n == 'string' ? Pr(n) : n
  return {
    pathname: l ? (l.startsWith('/') ? l : Ny(l, o)) : o,
    search: Ay(s),
    hash: Dy(a),
  }
}
function Ny(n, o) {
  let l = o.replace(/\/+$/, '').split('/')
  return (
    n.split('/').forEach(a => {
      a === '..' ? l.length > 1 && l.pop() : a !== '.' && l.push(a)
    }),
    l.length > 1 ? l.join('/') : '/'
  )
}
function Ma(n, o, l, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Ty(n) {
  return n.filter(
    (o, l) => l === 0 || (o.route.path && o.route.path.length > 0)
  )
}
function hu(n) {
  let o = Ty(n)
  return o.map((l, s) => (s === o.length - 1 ? l.pathname : l.pathnameBase))
}
function mu(n, o, l, s = !1) {
  let a
  typeof n == 'string'
    ? (a = Pr(n))
    : ((a = { ...n }),
      Re(
        !a.pathname || !a.pathname.includes('?'),
        Ma('?', 'pathname', 'search', a)
      ),
      Re(
        !a.pathname || !a.pathname.includes('#'),
        Ma('#', 'pathname', 'hash', a)
      ),
      Re(!a.search || !a.search.includes('#'), Ma('#', 'search', 'hash', a)))
  let f = n === '' || a.pathname === '',
    d = f ? '/' : a.pathname,
    m
  if (d == null) m = l
  else {
    let v = o.length - 1
    if (!s && d.startsWith('..')) {
      let S = d.split('/')
      for (; S[0] === '..'; ) S.shift(), (v -= 1)
      a.pathname = S.join('/')
    }
    m = v >= 0 ? o[v] : '/'
  }
  let h = Py(a, m),
    y = d && d !== '/' && d.endsWith('/'),
    g = (f || d === '.') && l.endsWith('/')
  return !h.pathname.endsWith('/') && (y || g) && (h.pathname += '/'), h
}
var tn = n => n.join('/').replace(/\/\/+/g, '/'),
  Oy = n => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ay = n => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  Dy = n => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n)
function Ly(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  )
}
var Np = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(Np)
var zy = ['GET', ...Np]
new Set(zy)
var Nr = _.createContext(null)
Nr.displayName = 'DataRouter'
var _i = _.createContext(null)
_i.displayName = 'DataRouterState'
var Tp = _.createContext({ isTransitioning: !1 })
Tp.displayName = 'ViewTransition'
var Fy = _.createContext(new Map())
Fy.displayName = 'Fetchers'
var My = _.createContext(null)
My.displayName = 'Await'
var Ft = _.createContext(null)
Ft.displayName = 'Navigation'
var zo = _.createContext(null)
zo.displayName = 'Location'
var Vt = _.createContext({ outlet: null, matches: [], isDataRoute: !1 })
Vt.displayName = 'Route'
var yu = _.createContext(null)
yu.displayName = 'RouteError'
function Iy(n, { relative: o } = {}) {
  Re(Tr(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: l, navigator: s } = _.useContext(Ft),
    { hash: a, pathname: f, search: d } = Fo(n, { relative: o }),
    m = f
  return (
    l !== '/' && (m = f === '/' ? l : tn([l, f])),
    s.createHref({ pathname: m, search: d, hash: a })
  )
}
function Tr() {
  return _.useContext(zo) != null
}
function on() {
  return (
    Re(
      Tr(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    _.useContext(zo).location
  )
}
var Op =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Ap(n) {
  _.useContext(Ft).static || _.useLayoutEffect(n)
}
function ln() {
  let { isDataRoute: n } = _.useContext(Vt)
  return n ? Xy() : jy()
}
function jy() {
  Re(
    Tr(),
    'useNavigate() may be used only in the context of a <Router> component.'
  )
  let n = _.useContext(Nr),
    { basename: o, navigator: l } = _.useContext(Ft),
    { matches: s } = _.useContext(Vt),
    { pathname: a } = on(),
    f = JSON.stringify(hu(s)),
    d = _.useRef(!1)
  return (
    Ap(() => {
      d.current = !0
    }),
    _.useCallback(
      (h, y = {}) => {
        if ((zt(d.current, Op), !d.current)) return
        if (typeof h == 'number') {
          l.go(h)
          return
        }
        let g = mu(h, JSON.parse(f), a, y.relative === 'path')
        n == null &&
          o !== '/' &&
          (g.pathname = g.pathname === '/' ? o : tn([o, g.pathname])),
          (y.replace ? l.replace : l.push)(g, y.state, y)
      },
      [o, l, f, a, n]
    )
  )
}
_.createContext(null)
function Fo(n, { relative: o } = {}) {
  let { matches: l } = _.useContext(Vt),
    { pathname: s } = on(),
    a = JSON.stringify(hu(l))
  return _.useMemo(() => mu(n, JSON.parse(a), s, o === 'path'), [n, a, s, o])
}
function By(n, o) {
  return Dp(n, o)
}
function Dp(n, o, l, s) {
  var L
  Re(
    Tr(),
    'useRoutes() may be used only in the context of a <Router> component.'
  )
  let { navigator: a } = _.useContext(Ft),
    { matches: f } = _.useContext(Vt),
    d = f[f.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : '/',
    y = d ? d.pathnameBase : '/',
    g = d && d.route
  {
    let F = (g && g.path) || ''
    Lp(
      h,
      !g || F.endsWith('*') || F.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${
        F === '/' ? '*' : `${F}/*`
      }">.`
    )
  }
  let v = on(),
    S
  if (o) {
    let F = typeof o == 'string' ? Pr(o) : o
    Re(
      y === '/' || ((L = F.pathname) == null ? void 0 : L.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${F.pathname}" was given in the \`location\` prop.`
    ),
      (S = F)
  } else S = v
  let O = S.pathname || '/',
    k = O
  if (y !== '/') {
    let F = y.replace(/^\//, '').split('/')
    k = '/' + O.replace(/^\//, '').split('/').slice(F.length).join('/')
  }
  let A = kp(n, { pathname: k })
  zt(
    g || A != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ),
    zt(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    )
  let R = Vy(
    A &&
      A.map(F =>
        Object.assign({}, F, {
          params: Object.assign({}, m, F.params),
          pathname: tn([
            y,
            a.encodeLocation
              ? a.encodeLocation(F.pathname).pathname
              : F.pathname,
          ]),
          pathnameBase:
            F.pathnameBase === '/'
              ? y
              : tn([
                  y,
                  a.encodeLocation
                    ? a.encodeLocation(F.pathnameBase).pathname
                    : F.pathnameBase,
                ]),
        })
      ),
    f,
    l,
    s
  )
  return o && R
    ? _.createElement(
        zo.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...S,
            },
            navigationType: 'POP',
          },
        },
        R
      )
    : R
}
function Uy() {
  let n = Jy(),
    o = Ly(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: s },
    f = { padding: '2px 4px', backgroundColor: s },
    d = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (d = _.createElement(
      _.Fragment,
      null,
      _.createElement('p', null, '💿 Hey developer 👋'),
      _.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        _.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        _.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement('h2', null, 'Unexpected Application Error!'),
      _.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      l ? _.createElement('pre', { style: a }, l) : null,
      d
    )
  )
}
var $y = _.createElement(Uy, null),
  by = class extends _.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        })
    }
    static getDerivedStateFromError(n) {
      return { error: n }
    }
    static getDerivedStateFromProps(n, o) {
      return o.location !== n.location ||
        (o.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : o.error,
            location: o.location,
            revalidation: n.revalidation || o.revalidation,
          }
    }
    componentDidCatch(n, o) {
      console.error(
        'React Router caught the following error during render',
        n,
        o
      )
    }
    render() {
      return this.state.error !== void 0
        ? _.createElement(
            Vt.Provider,
            { value: this.props.routeContext },
            _.createElement(yu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children
    }
  }
function Hy({ routeContext: n, match: o, children: l }) {
  let s = _.useContext(Nr)
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    _.createElement(Vt.Provider, { value: n }, l)
  )
}
function Vy(n, o = [], l = null, s = null) {
  if (n == null) {
    if (!l) return null
    if (l.errors) n = l.matches
    else if (o.length === 0 && !l.initialized && l.matches.length > 0)
      n = l.matches
    else return null
  }
  let a = n,
    f = l == null ? void 0 : l.errors
  if (f != null) {
    let h = a.findIndex(
      y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0
    )
    Re(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(',')}`
    ),
      (a = a.slice(0, Math.min(a.length, h + 1)))
  }
  let d = !1,
    m = -1
  if (l)
    for (let h = 0; h < a.length; h++) {
      let y = a[h]
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = h),
        y.route.id)
      ) {
        let { loaderData: g, errors: v } = l,
          S =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!v || v[y.route.id] === void 0)
        if (y.route.lazy || S) {
          ;(d = !0), m >= 0 ? (a = a.slice(0, m + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((h, y, g) => {
    let v,
      S = !1,
      O = null,
      k = null
    l &&
      ((v = f && y.route.id ? f[y.route.id] : void 0),
      (O = y.route.errorElement || $y),
      d &&
        (m < 0 && g === 0
          ? (Lp(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (S = !0),
            (k = null))
          : m === g &&
            ((S = !0), (k = y.route.hydrateFallbackElement || null))))
    let A = o.concat(a.slice(0, g + 1)),
      R = () => {
        let L
        return (
          v
            ? (L = O)
            : S
            ? (L = k)
            : y.route.Component
            ? (L = _.createElement(y.route.Component, null))
            : y.route.element
            ? (L = y.route.element)
            : (L = h),
          _.createElement(Hy, {
            match: y,
            routeContext: { outlet: h, matches: A, isDataRoute: l != null },
            children: L,
          })
        )
      }
    return l && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? _.createElement(by, {
          location: l.location,
          revalidation: l.revalidation,
          component: O,
          error: v,
          children: R(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : R()
  }, null)
}
function gu(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Wy(n) {
  let o = _.useContext(Nr)
  return Re(o, gu(n)), o
}
function Ky(n) {
  let o = _.useContext(_i)
  return Re(o, gu(n)), o
}
function qy(n) {
  let o = _.useContext(Vt)
  return Re(o, gu(n)), o
}
function vu(n) {
  let o = qy(n),
    l = o.matches[o.matches.length - 1]
  return (
    Re(
      l.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    l.route.id
  )
}
function Qy() {
  return vu('useRouteId')
}
function Jy() {
  var s
  let n = _.useContext(yu),
    o = Ky('useRouteError'),
    l = vu('useRouteError')
  return n !== void 0 ? n : (s = o.errors) == null ? void 0 : s[l]
}
function Xy() {
  let { router: n } = Wy('useNavigate'),
    o = vu('useNavigate'),
    l = _.useRef(!1)
  return (
    Ap(() => {
      l.current = !0
    }),
    _.useCallback(
      async (a, f = {}) => {
        zt(l.current, Op),
          l.current &&
            (typeof a == 'number'
              ? n.navigate(a)
              : await n.navigate(a, { fromRouteId: o, ...f }))
      },
      [n, o]
    )
  )
}
var Hd = {}
function Lp(n, o, l) {
  !o && !Hd[n] && ((Hd[n] = !0), zt(!1, l))
}
_.memo(Gy)
function Gy({ routes: n, future: o, state: l }) {
  return Dp(n, void 0, l, o)
}
function Yy({ to: n, replace: o, state: l, relative: s }) {
  Re(
    Tr(),
    '<Navigate> may be used only in the context of a <Router> component.'
  )
  let { static: a } = _.useContext(Ft)
  zt(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  )
  let { matches: f } = _.useContext(Vt),
    { pathname: d } = on(),
    m = ln(),
    h = mu(n, hu(f), d, s === 'path'),
    y = JSON.stringify(h)
  return (
    _.useEffect(() => {
      m(JSON.parse(y), { replace: o, state: l, relative: s })
    }, [m, y, s, o, l]),
    null
  )
}
function zp(n) {
  Re(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function Zy({
  basename: n = '/',
  children: o = null,
  location: l,
  navigationType: s = 'POP',
  navigator: a,
  static: f = !1,
}) {
  Re(
    !Tr(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  )
  let d = n.replace(/^\/*/, '/'),
    m = _.useMemo(
      () => ({ basename: d, navigator: a, static: f, future: {} }),
      [d, a, f]
    )
  typeof l == 'string' && (l = Pr(l))
  let {
      pathname: h = '/',
      search: y = '',
      hash: g = '',
      state: v = null,
      key: S = 'default',
    } = l,
    O = _.useMemo(() => {
      let k = Tn(h, d)
      return k == null
        ? null
        : {
            location: { pathname: k, search: y, hash: g, state: v, key: S },
            navigationType: s,
          }
    }, [d, h, y, g, v, S, s])
  return (
    zt(
      O != null,
      `<Router basename="${d}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : C(Ft.Provider, {
          value: m,
          children: C(zo.Provider, { children: o, value: O }),
        })
  )
}
function eg({ children: n, location: o }) {
  return By(Qa(n), o)
}
function Qa(n, o = []) {
  let l = []
  return (
    _.Children.forEach(n, (s, a) => {
      if (!_.isValidElement(s)) return
      let f = [...o, a]
      if (s.type === _.Fragment) {
        l.push.apply(l, Qa(s.props.children, f))
        return
      }
      Re(
        s.type === zp,
        `[${
          typeof s.type == 'string' ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Re(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.'
        )
      let d = {
        id: s.props.id || f.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      }
      s.props.children && (d.children = Qa(s.props.children, f)), l.push(d)
    }),
    l
  )
}
var ni = 'get',
  ri = 'application/x-www-form-urlencoded'
function Si(n) {
  return n != null && typeof n.tagName == 'string'
}
function tg(n) {
  return Si(n) && n.tagName.toLowerCase() === 'button'
}
function ng(n) {
  return Si(n) && n.tagName.toLowerCase() === 'form'
}
function rg(n) {
  return Si(n) && n.tagName.toLowerCase() === 'input'
}
function og(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function lg(n, o) {
  return n.button === 0 && (!o || o === '_self') && !og(n)
}
var Xl = null
function ig() {
  if (Xl === null)
    try {
      new FormData(document.createElement('form'), 0), (Xl = !1)
    } catch {
      Xl = !0
    }
  return Xl
}
var sg = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
])
function Ia(n) {
  return n != null && !sg.has(n)
    ? (zt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`
      ),
      null)
    : n
}
function ag(n, o) {
  let l, s, a, f, d
  if (ng(n)) {
    let m = n.getAttribute('action')
    ;(s = m ? Tn(m, o) : null),
      (l = n.getAttribute('method') || ni),
      (a = Ia(n.getAttribute('enctype')) || ri),
      (f = new FormData(n))
  } else if (tg(n) || (rg(n) && (n.type === 'submit' || n.type === 'image'))) {
    let m = n.form
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      )
    let h = n.getAttribute('formaction') || m.getAttribute('action')
    if (
      ((s = h ? Tn(h, o) : null),
      (l = n.getAttribute('formmethod') || m.getAttribute('method') || ni),
      (a =
        Ia(n.getAttribute('formenctype')) ||
        Ia(m.getAttribute('enctype')) ||
        ri),
      (f = new FormData(m, n)),
      !ig())
    ) {
      let { name: y, type: g, value: v } = n
      if (g === 'image') {
        let S = y ? `${y}.` : ''
        f.append(`${S}x`, '0'), f.append(`${S}y`, '0')
      } else y && f.append(y, v)
    }
  } else {
    if (Si(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;(l = ni), (s = null), (a = ri), (d = n)
  }
  return (
    f && a === 'text/plain' && ((d = f), (f = void 0)),
    { action: s, method: l.toLowerCase(), encType: a, formData: f, body: d }
  )
}
function wu(n, o) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(o)
}
async function ug(n, o) {
  if (n.id in o) return o[n.id]
  try {
    let l = await import(n.module)
    return (o[n.id] = l), l
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function cg(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === 'preload' &&
      typeof n.imageSrcSet == 'string' &&
      typeof n.imageSizes == 'string'
    : typeof n.rel == 'string' && typeof n.href == 'string'
}
async function fg(n, o, l) {
  let s = await Promise.all(
    n.map(async a => {
      let f = o.routes[a.route.id]
      if (f) {
        let d = await ug(f, l)
        return d.links ? d.links() : []
      }
      return []
    })
  )
  return mg(
    s
      .flat(1)
      .filter(cg)
      .filter(a => a.rel === 'stylesheet' || a.rel === 'preload')
      .map(a =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' }
      )
  )
}
function Vd(n, o, l, s, a, f) {
  let d = (h, y) => (l[y] ? h.route.id !== l[y].route.id : !0),
    m = (h, y) => {
      var g
      return (
        l[y].pathname !== h.pathname ||
        (((g = l[y].route.path) == null ? void 0 : g.endsWith('*')) &&
          l[y].params['*'] !== h.params['*'])
      )
    }
  return f === 'assets'
    ? o.filter((h, y) => d(h, y) || m(h, y))
    : f === 'data'
    ? o.filter((h, y) => {
        var v
        let g = s.routes[h.route.id]
        if (!g || !g.hasLoader) return !1
        if (d(h, y) || m(h, y)) return !0
        if (h.route.shouldRevalidate) {
          let S = h.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams: ((v = l[0]) == null ? void 0 : v.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: h.params,
            defaultShouldRevalidate: !0,
          })
          if (typeof S == 'boolean') return S
        }
        return !0
      })
    : []
}
function dg(n, o) {
  return pg(
    n
      .map(l => {
        let s = o.routes[l.route.id]
        if (!s) return []
        let a = [s.module]
        return s.imports && (a = a.concat(s.imports)), a
      })
      .flat(1)
  )
}
function pg(n) {
  return [...new Set(n)]
}
function hg(n) {
  let o = {},
    l = Object.keys(n).sort()
  for (let s of l) o[s] = n[s]
  return o
}
function mg(n, o) {
  let l = new Set()
  return (
    new Set(o),
    n.reduce((s, a) => {
      let f = JSON.stringify(hg(a))
      return l.has(f) || (l.add(f), s.push({ key: f, link: a })), s
    }, [])
  )
}
function yg(n) {
  let o =
    typeof n == 'string'
      ? new URL(
          n,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : n
  return (
    o.pathname === '/'
      ? (o.pathname = '_root.data')
      : (o.pathname = `${o.pathname.replace(/\/$/, '')}.data`),
    o
  )
}
function gg() {
  let n = _.useContext(Nr)
  return (
    wu(
      n,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    n
  )
}
function vg() {
  let n = _.useContext(_i)
  return (
    wu(
      n,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    n
  )
}
var _u = _.createContext(void 0)
_u.displayName = 'FrameworkContext'
function Fp() {
  let n = _.useContext(_u)
  return (
    wu(n, 'You must render this element inside a <HydratedRouter> element'), n
  )
}
function wg(n, o) {
  let l = _.useContext(_u),
    [s, a] = _.useState(!1),
    [f, d] = _.useState(!1),
    {
      onFocus: m,
      onBlur: h,
      onMouseEnter: y,
      onMouseLeave: g,
      onTouchStart: v,
    } = o,
    S = _.useRef(null)
  _.useEffect(() => {
    if ((n === 'render' && d(!0), n === 'viewport')) {
      let A = L => {
          L.forEach(F => {
            d(F.isIntersecting)
          })
        },
        R = new IntersectionObserver(A, { threshold: 0.5 })
      return (
        S.current && R.observe(S.current),
        () => {
          R.disconnect()
        }
      )
    }
  }, [n]),
    _.useEffect(() => {
      if (s) {
        let A = setTimeout(() => {
          d(!0)
        }, 100)
        return () => {
          clearTimeout(A)
        }
      }
    }, [s])
  let O = () => {
      a(!0)
    },
    k = () => {
      a(!1), d(!1)
    }
  return l
    ? n !== 'intent'
      ? [f, S, {}]
      : [
          f,
          S,
          {
            onFocus: So(m, O),
            onBlur: So(h, k),
            onMouseEnter: So(y, O),
            onMouseLeave: So(g, k),
            onTouchStart: So(v, O),
          },
        ]
    : [!1, S, {}]
}
function So(n, o) {
  return l => {
    n && n(l), l.defaultPrevented || o(l)
  }
}
function _g({ page: n, ...o }) {
  let { router: l } = gg(),
    s = _.useMemo(() => kp(l.routes, n, l.basename), [l.routes, n, l.basename])
  return s ? _.createElement(Eg, { page: n, matches: s, ...o }) : null
}
function Sg(n) {
  let { manifest: o, routeModules: l } = Fp(),
    [s, a] = _.useState([])
  return (
    _.useEffect(() => {
      let f = !1
      return (
        fg(n, o, l).then(d => {
          f || a(d)
        }),
        () => {
          f = !0
        }
      )
    }, [n, o, l]),
    s
  )
}
function Eg({ page: n, matches: o, ...l }) {
  let s = on(),
    { manifest: a, routeModules: f } = Fp(),
    { loaderData: d, matches: m } = vg(),
    h = _.useMemo(() => Vd(n, o, m, a, s, 'data'), [n, o, m, a, s]),
    y = _.useMemo(() => Vd(n, o, m, a, s, 'assets'), [n, o, m, a, s]),
    g = _.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return []
      let O = new Set(),
        k = !1
      if (
        (o.forEach(R => {
          var F
          let L = a.routes[R.route.id]
          !L ||
            !L.hasLoader ||
            ((!h.some(B => B.route.id === R.route.id) &&
              R.route.id in d &&
              (F = f[R.route.id]) != null &&
              F.shouldRevalidate) ||
            L.hasClientLoader
              ? (k = !0)
              : O.add(R.route.id))
        }),
        O.size === 0)
      )
        return []
      let A = yg(n)
      return (
        k &&
          O.size > 0 &&
          A.searchParams.set(
            '_routes',
            o
              .filter(R => O.has(R.route.id))
              .map(R => R.route.id)
              .join(',')
          ),
        [A.pathname + A.search]
      )
    }, [d, s, a, h, o, n, f]),
    v = _.useMemo(() => dg(y, a), [y, a]),
    S = Sg(y)
  return _.createElement(
    _.Fragment,
    null,
    g.map(O =>
      _.createElement('link', {
        key: O,
        rel: 'prefetch',
        as: 'fetch',
        href: O,
        ...l,
      })
    ),
    v.map(O =>
      _.createElement('link', { key: O, rel: 'modulepreload', href: O, ...l })
    ),
    S.map(({ key: O, link: k }) => _.createElement('link', { key: O, ...k }))
  )
}
function xg(...n) {
  return o => {
    n.forEach(l => {
      typeof l == 'function' ? l(o) : l != null && (l.current = o)
    })
  }
}
var Mp =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u'
try {
  Mp && (window.__reactRouterVersion = '7.1.3')
} catch {}
function Cg({ basename: n, children: o, window: l }) {
  let s = _.useRef()
  s.current == null && (s.current = fy({ window: l, v5Compat: !0 }))
  let a = s.current,
    [f, d] = _.useState({ action: a.action, location: a.location }),
    m = _.useCallback(
      h => {
        _.startTransition(() => d(h))
      },
      [d]
    )
  return (
    _.useLayoutEffect(() => a.listen(m), [a, m]),
    _.createElement(Zy, {
      basename: n,
      children: o,
      location: f.location,
      navigationType: f.action,
      navigator: a,
    })
  )
}
var Ip = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xt = _.forwardRef(function (
    {
      onClick: o,
      discover: l = 'render',
      prefetch: s = 'none',
      relative: a,
      reloadDocument: f,
      replace: d,
      state: m,
      target: h,
      to: y,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    O
  ) {
    let { basename: k } = _.useContext(Ft),
      A = typeof y == 'string' && Ip.test(y),
      R,
      L = !1
    if (typeof y == 'string' && A && ((R = y), Mp))
      try {
        let se = new URL(window.location.href),
          xe = y.startsWith('//') ? new URL(se.protocol + y) : new URL(y),
          We = Tn(xe.pathname, k)
        xe.origin === se.origin && We != null
          ? (y = We + xe.search + xe.hash)
          : (L = !0)
      } catch {
        zt(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        )
      }
    let F = Iy(y, { relative: a }),
      [B, b, V] = wg(s, S),
      J = Ng(y, {
        replace: d,
        state: m,
        target: h,
        preventScrollReset: g,
        relative: a,
        viewTransition: v,
      })
    function te(se) {
      o && o(se), se.defaultPrevented || J(se)
    }
    let Y = _.createElement('a', {
      ...S,
      ...V,
      href: R || F,
      onClick: L || f ? o : te,
      ref: xg(O, b),
      target: h,
      'data-discover': !A && l === 'render' ? 'true' : void 0,
    })
    return B && !A
      ? _.createElement(_.Fragment, null, Y, _.createElement(_g, { page: F }))
      : Y
  })
xt.displayName = 'Link'
var kg = _.forwardRef(function (
  {
    'aria-current': o = 'page',
    caseSensitive: l = !1,
    className: s = '',
    end: a = !1,
    style: f,
    to: d,
    viewTransition: m,
    children: h,
    ...y
  },
  g
) {
  let v = Fo(d, { relative: y.relative }),
    S = on(),
    O = _.useContext(_i),
    { navigator: k, basename: A } = _.useContext(Ft),
    R = O != null && Lg(v) && m === !0,
    L = k.encodeLocation ? k.encodeLocation(v).pathname : v.pathname,
    F = S.pathname,
    B =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null
  l ||
    ((F = F.toLowerCase()),
    (B = B ? B.toLowerCase() : null),
    (L = L.toLowerCase())),
    B && A && (B = Tn(B, A) || B)
  const b = L !== '/' && L.endsWith('/') ? L.length - 1 : L.length
  let V = F === L || (!a && F.startsWith(L) && F.charAt(b) === '/'),
    J =
      B != null &&
      (B === L || (!a && B.startsWith(L) && B.charAt(L.length) === '/')),
    te = { isActive: V, isPending: J, isTransitioning: R },
    Y = V ? o : void 0,
    se
  typeof s == 'function'
    ? (se = s(te))
    : (se = [
        s,
        V ? 'active' : null,
        J ? 'pending' : null,
        R ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '))
  let xe = typeof f == 'function' ? f(te) : f
  return _.createElement(
    xt,
    {
      ...y,
      'aria-current': Y,
      className: se,
      ref: g,
      style: xe,
      to: d,
      viewTransition: m,
    },
    typeof h == 'function' ? h(te) : h
  )
})
kg.displayName = 'NavLink'
var Rg = _.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: o,
      navigate: l,
      reloadDocument: s,
      replace: a,
      state: f,
      method: d = ni,
      action: m,
      onSubmit: h,
      relative: y,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    O
  ) => {
    let k = Ag(),
      A = Dg(m, { relative: y }),
      R = d.toLowerCase() === 'get' ? 'get' : 'post',
      L = typeof m == 'string' && Ip.test(m),
      F = B => {
        if ((h && h(B), B.defaultPrevented)) return
        B.preventDefault()
        let b = B.nativeEvent.submitter,
          V = (b == null ? void 0 : b.getAttribute('formmethod')) || d
        k(b || B.currentTarget, {
          fetcherKey: o,
          method: V,
          navigate: l,
          replace: a,
          state: f,
          relative: y,
          preventScrollReset: g,
          viewTransition: v,
        })
      }
    return _.createElement('form', {
      ref: O,
      method: R,
      action: A,
      onSubmit: s ? h : F,
      ...S,
      'data-discover': !L && n === 'render' ? 'true' : void 0,
    })
  }
)
Rg.displayName = 'Form'
function Pg(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function jp(n) {
  let o = _.useContext(Nr)
  return Re(o, Pg(n)), o
}
function Ng(
  n,
  {
    target: o,
    replace: l,
    state: s,
    preventScrollReset: a,
    relative: f,
    viewTransition: d,
  } = {}
) {
  let m = ln(),
    h = on(),
    y = Fo(n, { relative: f })
  return _.useCallback(
    g => {
      if (lg(g, o)) {
        g.preventDefault()
        let v = l !== void 0 ? l : To(h) === To(y)
        m(n, {
          replace: v,
          state: s,
          preventScrollReset: a,
          relative: f,
          viewTransition: d,
        })
      }
    },
    [h, m, y, l, s, o, n, a, f, d]
  )
}
var Tg = 0,
  Og = () => `__${String(++Tg)}__`
function Ag() {
  let { router: n } = jp('useSubmit'),
    { basename: o } = _.useContext(Ft),
    l = Qy()
  return _.useCallback(
    async (s, a = {}) => {
      let { action: f, method: d, encType: m, formData: h, body: y } = ag(s, o)
      if (a.navigate === !1) {
        let g = a.fetcherKey || Og()
        await n.fetch(g, l, a.action || f, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: y,
          formMethod: a.method || d,
          formEncType: a.encType || m,
          flushSync: a.flushSync,
        })
      } else
        await n.navigate(a.action || f, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: y,
          formMethod: a.method || d,
          formEncType: a.encType || m,
          replace: a.replace,
          state: a.state,
          fromRouteId: l,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        })
    },
    [n, o, l]
  )
}
function Dg(n, { relative: o } = {}) {
  let { basename: l } = _.useContext(Ft),
    s = _.useContext(Vt)
  Re(s, 'useFormAction must be used inside a RouteContext')
  let [a] = s.matches.slice(-1),
    f = { ...Fo(n || '.', { relative: o }) },
    d = on()
  if (n == null) {
    f.search = d.search
    let m = new URLSearchParams(f.search),
      h = m.getAll('index')
    if (h.some(g => g === '')) {
      m.delete('index'), h.filter(v => v).forEach(v => m.append('index', v))
      let g = m.toString()
      f.search = g ? `?${g}` : ''
    }
  }
  return (
    (!n || n === '.') &&
      a.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    l !== '/' && (f.pathname = f.pathname === '/' ? l : tn([l, f.pathname])),
    To(f)
  )
}
function Lg(n, o = {}) {
  let l = _.useContext(Tp)
  Re(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: s } = jp('useViewTransitionState'),
    a = Fo(n, { relative: o.relative })
  if (!l.isTransitioning) return !1
  let f = Tn(l.currentLocation.pathname, s) || l.currentLocation.pathname,
    d = Tn(l.nextLocation.pathname, s) || l.nextLocation.pathname
  return ci(a.pathname, d) != null || ci(a.pathname, f) != null
}
new TextEncoder()
const Bp = '/assets/fixiki-DROgPND0.png',
  zg = '_pageError_kgr7o_2',
  Fg = '_pageError__img_kgr7o_11',
  Mg = '_pageError__title_kgr7o_18',
  Ig = '_pageError__message_kgr7o_21',
  Eo = {
    pageError: zg,
    pageError__img: Fg,
    'pageError__img--rounded': '_pageError__img--rounded_kgr7o_15',
    pageError__title: Mg,
    pageError__message: Ig,
  },
  Ja = ({ code: n, message: o, image: l, rounded: s }) => {
    const a = `${Eo.pageError__img} ${s ? Eo['pageError__img--rounded'] : ''}`
    return re('div', {
      className: Eo.pageError,
      children: [
        C('img', { src: l, className: a, alt: 'Error' }),
        C('h1', { className: Eo.pageError__title, children: n }),
        C('p', { className: Eo.pageError__message, children: o }),
      ],
    })
  },
  Up = ({ error: n, resetErrorBoundary: o }) =>
    re('div', {
      style: { padding: '20px', textAlign: 'center' },
      children: [
        C(Ja, { code: 500, message: n.message, image: Bp }),
        C('button', {
          onClick: o,
          style: { padding: '10px 20px' },
          children: 'Retry',
        }),
      ],
    }),
  $p = _.createContext(void 0),
  jg = ({ children: n }) => {
    const [o, l] = _.useState(null),
      s = (f, d) => {
        l(f), console.error('Error Info:', d)
      },
      a = () => {
        l(null)
      }
    return o
      ? C(Up, { error: o, resetErrorBoundary: a })
      : C($p.Provider, {
          value: { showBoundary: s, resetBoundary: a },
          children: n,
        })
  },
  Bg = () => {
    const n = _.useContext($p)
    if (!n)
      throw new Error(
        'useErrorBoundaryContext must be used within an ErrorBoundaryProvider'
      )
    return n
  },
  Ug = _.createContext(null),
  ja = { didCatch: !1, error: null }
class $g extends _.Component {
  constructor(o) {
    super(o),
      (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
      (this.state = ja)
  }
  static getDerivedStateFromError(o) {
    return { didCatch: !0, error: o }
  }
  resetErrorBoundary() {
    const { error: o } = this.state
    if (o !== null) {
      for (var l, s, a = arguments.length, f = new Array(a), d = 0; d < a; d++)
        f[d] = arguments[d]
      ;(l = (s = this.props).onReset) === null ||
        l === void 0 ||
        l.call(s, { args: f, reason: 'imperative-api' }),
        this.setState(ja)
    }
  }
  componentDidCatch(o, l) {
    var s, a
    ;(s = (a = this.props).onError) === null || s === void 0 || s.call(a, o, l)
  }
  componentDidUpdate(o, l) {
    const { didCatch: s } = this.state,
      { resetKeys: a } = this.props
    if (s && l.error !== null && bg(o.resetKeys, a)) {
      var f, d
      ;(f = (d = this.props).onReset) === null ||
        f === void 0 ||
        f.call(d, { next: a, prev: o.resetKeys, reason: 'keys' }),
        this.setState(ja)
    }
  }
  render() {
    const {
        children: o,
        fallbackRender: l,
        FallbackComponent: s,
        fallback: a,
      } = this.props,
      { didCatch: f, error: d } = this.state
    let m = o
    if (f) {
      const h = { error: d, resetErrorBoundary: this.resetErrorBoundary }
      if (typeof l == 'function') m = l(h)
      else if (s) m = _.createElement(s, h)
      else if (a !== void 0) m = a
      else throw d
    }
    return _.createElement(
      Ug.Provider,
      {
        value: {
          didCatch: f,
          error: d,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      m
    )
  }
}
function bg() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
  return n.length !== o.length || n.some((l, s) => !Object.is(l, o[s]))
}
const Hg = ({ children: n }) =>
    C($g, {
      FallbackComponent: Up,
      onError: (o, l) => {
        console.error('Caught an error:', o, l)
      },
      children: n,
    }),
  Oo = 'https://ya-praktikum.tech/api/v2',
  kr = 'http://localhost:3001/game',
  Vg = '_loader_rxwpb_2',
  Wg = '_loader_container_rxwpb_10',
  Wd = { loader: Vg, loader_container: Wg },
  Kg = () =>
    C('div', {
      className: Wd.loader_container,
      children: C('div', { className: Wd.loader }),
    })
function bp(n, o) {
  return function () {
    return n.apply(o, arguments)
  }
}
const { toString: qg } = Object.prototype,
  { getPrototypeOf: Su } = Object,
  Ei = (n => o => {
    const l = qg.call(o)
    return n[l] || (n[l] = l.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Mt = n => ((n = n.toLowerCase()), o => Ei(o) === n),
  xi = n => o => typeof o === n,
  { isArray: Or } = Array,
  Ao = xi('undefined')
function Qg(n) {
  return (
    n !== null &&
    !Ao(n) &&
    n.constructor !== null &&
    !Ao(n.constructor) &&
    ht(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  )
}
const Hp = Mt('ArrayBuffer')
function Jg(n) {
  let o
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(n))
      : (o = n && n.buffer && Hp(n.buffer)),
    o
  )
}
const Xg = xi('string'),
  ht = xi('function'),
  Vp = xi('number'),
  Ci = n => n !== null && typeof n == 'object',
  Gg = n => n === !0 || n === !1,
  oi = n => {
    if (Ei(n) !== 'object') return !1
    const o = Su(n)
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in n) &&
      !(Symbol.iterator in n)
    )
  },
  Yg = Mt('Date'),
  Zg = Mt('File'),
  e1 = Mt('Blob'),
  t1 = Mt('FileList'),
  n1 = n => Ci(n) && ht(n.pipe),
  r1 = n => {
    let o
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        (ht(n.append) &&
          ((o = Ei(n)) === 'formdata' ||
            (o === 'object' &&
              ht(n.toString) &&
              n.toString() === '[object FormData]'))))
    )
  },
  o1 = Mt('URLSearchParams'),
  [l1, i1, s1, a1] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Mt
  ),
  u1 = n =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function Mo(n, o, { allOwnKeys: l = !1 } = {}) {
  if (n === null || typeof n > 'u') return
  let s, a
  if ((typeof n != 'object' && (n = [n]), Or(n)))
    for (s = 0, a = n.length; s < a; s++) o.call(null, n[s], s, n)
  else {
    const f = l ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = f.length
    let m
    for (s = 0; s < d; s++) (m = f[s]), o.call(null, n[m], m, n)
  }
}
function Wp(n, o) {
  o = o.toLowerCase()
  const l = Object.keys(n)
  let s = l.length,
    a
  for (; s-- > 0; ) if (((a = l[s]), o === a.toLowerCase())) return a
  return null
}
const Kn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  Kp = n => !Ao(n) && n !== Kn
function Xa() {
  const { caseless: n } = (Kp(this) && this) || {},
    o = {},
    l = (s, a) => {
      const f = (n && Wp(o, a)) || a
      oi(o[f]) && oi(s)
        ? (o[f] = Xa(o[f], s))
        : oi(s)
        ? (o[f] = Xa({}, s))
        : Or(s)
        ? (o[f] = s.slice())
        : (o[f] = s)
    }
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && Mo(arguments[s], l)
  return o
}
const c1 = (n, o, l, { allOwnKeys: s } = {}) => (
    Mo(
      o,
      (a, f) => {
        l && ht(a) ? (n[f] = bp(a, l)) : (n[f] = a)
      },
      { allOwnKeys: s }
    ),
    n
  ),
  f1 = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  d1 = (n, o, l, s) => {
    ;(n.prototype = Object.create(o.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, 'super', { value: o.prototype }),
      l && Object.assign(n.prototype, l)
  },
  p1 = (n, o, l, s) => {
    let a, f, d
    const m = {}
    if (((o = o || {}), n == null)) return o
    do {
      for (a = Object.getOwnPropertyNames(n), f = a.length; f-- > 0; )
        (d = a[f]), (!s || s(d, n, o)) && !m[d] && ((o[d] = n[d]), (m[d] = !0))
      n = l !== !1 && Su(n)
    } while (n && (!l || l(n, o)) && n !== Object.prototype)
    return o
  },
  h1 = (n, o, l) => {
    ;(n = String(n)),
      (l === void 0 || l > n.length) && (l = n.length),
      (l -= o.length)
    const s = n.indexOf(o, l)
    return s !== -1 && s === l
  },
  m1 = n => {
    if (!n) return null
    if (Or(n)) return n
    let o = n.length
    if (!Vp(o)) return null
    const l = new Array(o)
    for (; o-- > 0; ) l[o] = n[o]
    return l
  },
  y1 = (
    n => o =>
      n && o instanceof n
  )(typeof Uint8Array < 'u' && Su(Uint8Array)),
  g1 = (n, o) => {
    const s = (n && n[Symbol.iterator]).call(n)
    let a
    for (; (a = s.next()) && !a.done; ) {
      const f = a.value
      o.call(n, f[0], f[1])
    }
  },
  v1 = (n, o) => {
    let l
    const s = []
    for (; (l = n.exec(o)) !== null; ) s.push(l)
    return s
  },
  w1 = Mt('HTMLFormElement'),
  _1 = n =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, s, a) {
      return s.toUpperCase() + a
    }),
  Kd = (
    ({ hasOwnProperty: n }) =>
    (o, l) =>
      n.call(o, l)
  )(Object.prototype),
  S1 = Mt('RegExp'),
  qp = (n, o) => {
    const l = Object.getOwnPropertyDescriptors(n),
      s = {}
    Mo(l, (a, f) => {
      let d
      ;(d = o(a, f, n)) !== !1 && (s[f] = d || a)
    }),
      Object.defineProperties(n, s)
  },
  E1 = n => {
    qp(n, (o, l) => {
      if (ht(n) && ['arguments', 'caller', 'callee'].indexOf(l) !== -1)
        return !1
      const s = n[l]
      if (ht(s)) {
        if (((o.enumerable = !1), 'writable' in o)) {
          o.writable = !1
          return
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'")
          })
      }
    })
  },
  x1 = (n, o) => {
    const l = {},
      s = a => {
        a.forEach(f => {
          l[f] = !0
        })
      }
    return Or(n) ? s(n) : s(String(n).split(o)), l
  },
  C1 = () => {},
  k1 = (n, o) => (n != null && Number.isFinite((n = +n)) ? n : o)
function R1(n) {
  return !!(
    n &&
    ht(n.append) &&
    n[Symbol.toStringTag] === 'FormData' &&
    n[Symbol.iterator]
  )
}
const P1 = n => {
    const o = new Array(10),
      l = (s, a) => {
        if (Ci(s)) {
          if (o.indexOf(s) >= 0) return
          if (!('toJSON' in s)) {
            o[a] = s
            const f = Or(s) ? [] : {}
            return (
              Mo(s, (d, m) => {
                const h = l(d, a + 1)
                !Ao(h) && (f[m] = h)
              }),
              (o[a] = void 0),
              f
            )
          }
        }
        return s
      }
    return l(n, 0)
  },
  N1 = Mt('AsyncFunction'),
  T1 = n => n && (Ci(n) || ht(n)) && ht(n.then) && ht(n.catch),
  Qp = ((n, o) =>
    n
      ? setImmediate
      : o
      ? ((l, s) => (
          Kn.addEventListener(
            'message',
            ({ source: a, data: f }) => {
              a === Kn && f === l && s.length && s.shift()()
            },
            !1
          ),
          a => {
            s.push(a), Kn.postMessage(l, '*')
          }
        ))(`axios@${Math.random()}`, [])
      : l => setTimeout(l))(
    typeof setImmediate == 'function',
    ht(Kn.postMessage)
  ),
  O1 =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Kn)
      : (typeof process < 'u' && process.nextTick) || Qp,
  z = {
    isArray: Or,
    isArrayBuffer: Hp,
    isBuffer: Qg,
    isFormData: r1,
    isArrayBufferView: Jg,
    isString: Xg,
    isNumber: Vp,
    isBoolean: Gg,
    isObject: Ci,
    isPlainObject: oi,
    isReadableStream: l1,
    isRequest: i1,
    isResponse: s1,
    isHeaders: a1,
    isUndefined: Ao,
    isDate: Yg,
    isFile: Zg,
    isBlob: e1,
    isRegExp: S1,
    isFunction: ht,
    isStream: n1,
    isURLSearchParams: o1,
    isTypedArray: y1,
    isFileList: t1,
    forEach: Mo,
    merge: Xa,
    extend: c1,
    trim: u1,
    stripBOM: f1,
    inherits: d1,
    toFlatObject: p1,
    kindOf: Ei,
    kindOfTest: Mt,
    endsWith: h1,
    toArray: m1,
    forEachEntry: g1,
    matchAll: v1,
    isHTMLForm: w1,
    hasOwnProperty: Kd,
    hasOwnProp: Kd,
    reduceDescriptors: qp,
    freezeMethods: E1,
    toObjectSet: x1,
    toCamelCase: _1,
    noop: C1,
    toFiniteNumber: k1,
    findKey: Wp,
    global: Kn,
    isContextDefined: Kp,
    isSpecCompliantForm: R1,
    toJSONObject: P1,
    isAsyncFn: N1,
    isThenable: T1,
    setImmediate: Qp,
    asap: O1,
  }
function le(n, o, l, s, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = 'AxiosError'),
    o && (this.code = o),
    l && (this.config = l),
    s && (this.request = s),
    a && ((this.response = a), (this.status = a.status ? a.status : null))
}
z.inherits(le, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    }
  },
})
const Jp = le.prototype,
  Xp = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach(n => {
  Xp[n] = { value: n }
})
Object.defineProperties(le, Xp)
Object.defineProperty(Jp, 'isAxiosError', { value: !0 })
le.from = (n, o, l, s, a, f) => {
  const d = Object.create(Jp)
  return (
    z.toFlatObject(
      n,
      d,
      function (h) {
        return h !== Error.prototype
      },
      m => m !== 'isAxiosError'
    ),
    le.call(d, n.message, o, l, s, a),
    (d.cause = n),
    (d.name = n.name),
    f && Object.assign(d, f),
    d
  )
}
const A1 = null
function Ga(n) {
  return z.isPlainObject(n) || z.isArray(n)
}
function Gp(n) {
  return z.endsWith(n, '[]') ? n.slice(0, -2) : n
}
function qd(n, o, l) {
  return n
    ? n
        .concat(o)
        .map(function (a, f) {
          return (a = Gp(a)), !l && f ? '[' + a + ']' : a
        })
        .join(l ? '.' : '')
    : o
}
function D1(n) {
  return z.isArray(n) && !n.some(Ga)
}
const L1 = z.toFlatObject(z, {}, null, function (o) {
  return /^is[A-Z]/.test(o)
})
function ki(n, o, l) {
  if (!z.isObject(n)) throw new TypeError('target must be an object')
  ;(o = o || new FormData()),
    (l = z.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (A, R) {
        return !z.isUndefined(R[A])
      }
    ))
  const s = l.metaTokens,
    a = l.visitor || g,
    f = l.dots,
    d = l.indexes,
    h = (l.Blob || (typeof Blob < 'u' && Blob)) && z.isSpecCompliantForm(o)
  if (!z.isFunction(a)) throw new TypeError('visitor must be a function')
  function y(k) {
    if (k === null) return ''
    if (z.isDate(k)) return k.toISOString()
    if (!h && z.isBlob(k))
      throw new le('Blob is not supported. Use a Buffer instead.')
    return z.isArrayBuffer(k) || z.isTypedArray(k)
      ? h && typeof Blob == 'function'
        ? new Blob([k])
        : Buffer.from(k)
      : k
  }
  function g(k, A, R) {
    let L = k
    if (k && !R && typeof k == 'object') {
      if (z.endsWith(A, '{}'))
        (A = s ? A : A.slice(0, -2)), (k = JSON.stringify(k))
      else if (
        (z.isArray(k) && D1(k)) ||
        ((z.isFileList(k) || z.endsWith(A, '[]')) && (L = z.toArray(k)))
      )
        return (
          (A = Gp(A)),
          L.forEach(function (B, b) {
            !(z.isUndefined(B) || B === null) &&
              o.append(
                d === !0 ? qd([A], b, f) : d === null ? A : A + '[]',
                y(B)
              )
          }),
          !1
        )
    }
    return Ga(k) ? !0 : (o.append(qd(R, A, f), y(k)), !1)
  }
  const v = [],
    S = Object.assign(L1, {
      defaultVisitor: g,
      convertValue: y,
      isVisitable: Ga,
    })
  function O(k, A) {
    if (!z.isUndefined(k)) {
      if (v.indexOf(k) !== -1)
        throw Error('Circular reference detected in ' + A.join('.'))
      v.push(k),
        z.forEach(k, function (L, F) {
          ;(!(z.isUndefined(L) || L === null) &&
            a.call(o, L, z.isString(F) ? F.trim() : F, A, S)) === !0 &&
            O(L, A ? A.concat(F) : [F])
        }),
        v.pop()
    }
  }
  if (!z.isObject(n)) throw new TypeError('data must be an object')
  return O(n), o
}
function Qd(n) {
  const o = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return o[s]
  })
}
function Eu(n, o) {
  ;(this._pairs = []), n && ki(n, this, o)
}
const Yp = Eu.prototype
Yp.append = function (o, l) {
  this._pairs.push([o, l])
}
Yp.toString = function (o) {
  const l = o
    ? function (s) {
        return o.call(this, s, Qd)
      }
    : Qd
  return this._pairs
    .map(function (a) {
      return l(a[0]) + '=' + l(a[1])
    }, '')
    .join('&')
}
function z1(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Zp(n, o, l) {
  if (!o) return n
  const s = (l && l.encode) || z1
  z.isFunction(l) && (l = { serialize: l })
  const a = l && l.serialize
  let f
  if (
    (a
      ? (f = a(o, l))
      : (f = z.isURLSearchParams(o) ? o.toString() : new Eu(o, l).toString(s)),
    f)
  ) {
    const d = n.indexOf('#')
    d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + f)
  }
  return n
}
class Jd {
  constructor() {
    this.handlers = []
  }
  use(o, l, s) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: l,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(o) {
    z.forEach(this.handlers, function (s) {
      s !== null && o(s)
    })
  }
}
const eh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  F1 = typeof URLSearchParams < 'u' ? URLSearchParams : Eu,
  M1 = typeof FormData < 'u' ? FormData : null,
  I1 = typeof Blob < 'u' ? Blob : null,
  j1 = {
    isBrowser: !0,
    classes: { URLSearchParams: F1, FormData: M1, Blob: I1 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  xu = typeof window < 'u' && typeof document < 'u',
  Ya = (typeof navigator == 'object' && navigator) || void 0,
  B1 =
    xu &&
    (!Ya || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ya.product) < 0),
  U1 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  $1 = (xu && window.location.href) || 'http://localhost',
  b1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: xu,
        hasStandardBrowserEnv: B1,
        hasStandardBrowserWebWorkerEnv: U1,
        navigator: Ya,
        origin: $1,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ge = { ...b1, ...j1 }
function H1(n, o) {
  return ki(
    n,
    new Ge.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, s, a, f) {
          return Ge.isNode && z.isBuffer(l)
            ? (this.append(s, l.toString('base64')), !1)
            : f.defaultVisitor.apply(this, arguments)
        },
      },
      o
    )
  )
}
function V1(n) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, n)
    .map(o => (o[0] === '[]' ? '' : o[1] || o[0]))
}
function W1(n) {
  const o = {},
    l = Object.keys(n)
  let s
  const a = l.length
  let f
  for (s = 0; s < a; s++) (f = l[s]), (o[f] = n[f])
  return o
}
function th(n) {
  function o(l, s, a, f) {
    let d = l[f++]
    if (d === '__proto__') return !0
    const m = Number.isFinite(+d),
      h = f >= l.length
    return (
      (d = !d && z.isArray(a) ? a.length : d),
      h
        ? (z.hasOwnProp(a, d) ? (a[d] = [a[d], s]) : (a[d] = s), !m)
        : ((!a[d] || !z.isObject(a[d])) && (a[d] = []),
          o(l, s, a[d], f) && z.isArray(a[d]) && (a[d] = W1(a[d])),
          !m)
    )
  }
  if (z.isFormData(n) && z.isFunction(n.entries)) {
    const l = {}
    return (
      z.forEachEntry(n, (s, a) => {
        o(V1(s), a, l, 0)
      }),
      l
    )
  }
  return null
}
function K1(n, o, l) {
  if (z.isString(n))
    try {
      return (o || JSON.parse)(n), z.trim(n)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (l || JSON.stringify)(n)
}
const Io = {
  transitional: eh,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (o, l) {
      const s = l.getContentType() || '',
        a = s.indexOf('application/json') > -1,
        f = z.isObject(o)
      if ((f && z.isHTMLForm(o) && (o = new FormData(o)), z.isFormData(o)))
        return a ? JSON.stringify(th(o)) : o
      if (
        z.isArrayBuffer(o) ||
        z.isBuffer(o) ||
        z.isStream(o) ||
        z.isFile(o) ||
        z.isBlob(o) ||
        z.isReadableStream(o)
      )
        return o
      if (z.isArrayBufferView(o)) return o.buffer
      if (z.isURLSearchParams(o))
        return (
          l.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          o.toString()
        )
      let m
      if (f) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return H1(o, this.formSerializer).toString()
        if ((m = z.isFileList(o)) || s.indexOf('multipart/form-data') > -1) {
          const h = this.env && this.env.FormData
          return ki(m ? { 'files[]': o } : o, h && new h(), this.formSerializer)
        }
      }
      return f || a ? (l.setContentType('application/json', !1), K1(o)) : o
    },
  ],
  transformResponse: [
    function (o) {
      const l = this.transitional || Io.transitional,
        s = l && l.forcedJSONParsing,
        a = this.responseType === 'json'
      if (z.isResponse(o) || z.isReadableStream(o)) return o
      if (o && z.isString(o) && ((s && !this.responseType) || a)) {
        const d = !(l && l.silentJSONParsing) && a
        try {
          return JSON.parse(o)
        } catch (m) {
          if (d)
            throw m.name === 'SyntaxError'
              ? le.from(m, le.ERR_BAD_RESPONSE, this, null, this.response)
              : m
        }
      }
      return o
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ge.classes.FormData, Blob: Ge.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
z.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], n => {
  Io.headers[n] = {}
})
const q1 = z.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Q1 = n => {
    const o = {}
    let l, s, a
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (d) {
            ;(a = d.indexOf(':')),
              (l = d.substring(0, a).trim().toLowerCase()),
              (s = d.substring(a + 1).trim()),
              !(!l || (o[l] && q1[l])) &&
                (l === 'set-cookie'
                  ? o[l]
                    ? o[l].push(s)
                    : (o[l] = [s])
                  : (o[l] = o[l] ? o[l] + ', ' + s : s))
          }),
      o
    )
  },
  Xd = Symbol('internals')
function xo(n) {
  return n && String(n).trim().toLowerCase()
}
function li(n) {
  return n === !1 || n == null ? n : z.isArray(n) ? n.map(li) : String(n)
}
function J1(n) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let s
  for (; (s = l.exec(n)); ) o[s[1]] = s[2]
  return o
}
const X1 = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim())
function Ba(n, o, l, s, a) {
  if (z.isFunction(s)) return s.call(this, o, l)
  if ((a && (o = l), !!z.isString(o))) {
    if (z.isString(s)) return o.indexOf(s) !== -1
    if (z.isRegExp(s)) return s.test(o)
  }
}
function G1(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, s) => l.toUpperCase() + s)
}
function Y1(n, o) {
  const l = z.toCamelCase(' ' + o)
  ;['get', 'set', 'has'].forEach(s => {
    Object.defineProperty(n, s + l, {
      value: function (a, f, d) {
        return this[s].call(this, o, a, f, d)
      },
      configurable: !0,
    })
  })
}
let at = class {
  constructor(o) {
    o && this.set(o)
  }
  set(o, l, s) {
    const a = this
    function f(m, h, y) {
      const g = xo(h)
      if (!g) throw new Error('header name must be a non-empty string')
      const v = z.findKey(a, g)
      ;(!v || a[v] === void 0 || y === !0 || (y === void 0 && a[v] !== !1)) &&
        (a[v || h] = li(m))
    }
    const d = (m, h) => z.forEach(m, (y, g) => f(y, g, h))
    if (z.isPlainObject(o) || o instanceof this.constructor) d(o, l)
    else if (z.isString(o) && (o = o.trim()) && !X1(o)) d(Q1(o), l)
    else if (z.isHeaders(o)) for (const [m, h] of o.entries()) f(h, m, s)
    else o != null && f(l, o, s)
    return this
  }
  get(o, l) {
    if (((o = xo(o)), o)) {
      const s = z.findKey(this, o)
      if (s) {
        const a = this[s]
        if (!l) return a
        if (l === !0) return J1(a)
        if (z.isFunction(l)) return l.call(this, a, s)
        if (z.isRegExp(l)) return l.exec(a)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(o, l) {
    if (((o = xo(o)), o)) {
      const s = z.findKey(this, o)
      return !!(s && this[s] !== void 0 && (!l || Ba(this, this[s], s, l)))
    }
    return !1
  }
  delete(o, l) {
    const s = this
    let a = !1
    function f(d) {
      if (((d = xo(d)), d)) {
        const m = z.findKey(s, d)
        m && (!l || Ba(s, s[m], m, l)) && (delete s[m], (a = !0))
      }
    }
    return z.isArray(o) ? o.forEach(f) : f(o), a
  }
  clear(o) {
    const l = Object.keys(this)
    let s = l.length,
      a = !1
    for (; s--; ) {
      const f = l[s]
      ;(!o || Ba(this, this[f], f, o, !0)) && (delete this[f], (a = !0))
    }
    return a
  }
  normalize(o) {
    const l = this,
      s = {}
    return (
      z.forEach(this, (a, f) => {
        const d = z.findKey(s, f)
        if (d) {
          ;(l[d] = li(a)), delete l[f]
          return
        }
        const m = o ? G1(f) : String(f).trim()
        m !== f && delete l[f], (l[m] = li(a)), (s[m] = !0)
      }),
      this
    )
  }
  concat(...o) {
    return this.constructor.concat(this, ...o)
  }
  toJSON(o) {
    const l = Object.create(null)
    return (
      z.forEach(this, (s, a) => {
        s != null && s !== !1 && (l[a] = o && z.isArray(s) ? s.join(', ') : s)
      }),
      l
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, l]) => o + ': ' + l).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(o) {
    return o instanceof this ? o : new this(o)
  }
  static concat(o, ...l) {
    const s = new this(o)
    return l.forEach(a => s.set(a)), s
  }
  static accessor(o) {
    const s = (this[Xd] = this[Xd] = { accessors: {} }).accessors,
      a = this.prototype
    function f(d) {
      const m = xo(d)
      s[m] || (Y1(a, d), (s[m] = !0))
    }
    return z.isArray(o) ? o.forEach(f) : f(o), this
  }
}
at.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
z.reduceDescriptors(at.prototype, ({ value: n }, o) => {
  let l = o[0].toUpperCase() + o.slice(1)
  return {
    get: () => n,
    set(s) {
      this[l] = s
    },
  }
})
z.freezeMethods(at)
function Ua(n, o) {
  const l = this || Io,
    s = o || l,
    a = at.from(s.headers)
  let f = s.data
  return (
    z.forEach(n, function (m) {
      f = m.call(l, f, a.normalize(), o ? o.status : void 0)
    }),
    a.normalize(),
    f
  )
}
function nh(n) {
  return !!(n && n.__CANCEL__)
}
function Ar(n, o, l) {
  le.call(this, n ?? 'canceled', le.ERR_CANCELED, o, l),
    (this.name = 'CanceledError')
}
z.inherits(Ar, le, { __CANCEL__: !0 })
function rh(n, o, l) {
  const s = l.config.validateStatus
  !l.status || !s || s(l.status)
    ? n(l)
    : o(
        new le(
          'Request failed with status code ' + l.status,
          [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l
        )
      )
}
function Z1(n) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n)
  return (o && o[1]) || ''
}
function ev(n, o) {
  n = n || 10
  const l = new Array(n),
    s = new Array(n)
  let a = 0,
    f = 0,
    d
  return (
    (o = o !== void 0 ? o : 1e3),
    function (h) {
      const y = Date.now(),
        g = s[f]
      d || (d = y), (l[a] = h), (s[a] = y)
      let v = f,
        S = 0
      for (; v !== a; ) (S += l[v++]), (v = v % n)
      if (((a = (a + 1) % n), a === f && (f = (f + 1) % n), y - d < o)) return
      const O = g && y - g
      return O ? Math.round((S * 1e3) / O) : void 0
    }
  )
}
function tv(n, o) {
  let l = 0,
    s = 1e3 / o,
    a,
    f
  const d = (y, g = Date.now()) => {
    ;(l = g), (a = null), f && (clearTimeout(f), (f = null)), n.apply(null, y)
  }
  return [
    (...y) => {
      const g = Date.now(),
        v = g - l
      v >= s
        ? d(y, g)
        : ((a = y),
          f ||
            (f = setTimeout(() => {
              ;(f = null), d(a)
            }, s - v)))
    },
    () => a && d(a),
  ]
}
const fi = (n, o, l = 3) => {
    let s = 0
    const a = ev(50, 250)
    return tv(f => {
      const d = f.loaded,
        m = f.lengthComputable ? f.total : void 0,
        h = d - s,
        y = a(h),
        g = d <= m
      s = d
      const v = {
        loaded: d,
        total: m,
        progress: m ? d / m : void 0,
        bytes: h,
        rate: y || void 0,
        estimated: y && m && g ? (m - d) / y : void 0,
        event: f,
        lengthComputable: m != null,
        [o ? 'download' : 'upload']: !0,
      }
      n(v)
    }, l)
  },
  Gd = (n, o) => {
    const l = n != null
    return [s => o[0]({ lengthComputable: l, total: n, loaded: s }), o[1]]
  },
  Yd =
    n =>
    (...o) =>
      z.asap(() => n(...o)),
  nv = Ge.hasStandardBrowserEnv
    ? ((n, o) => l => (
        (l = new URL(l, Ge.origin)),
        n.protocol === l.protocol &&
          n.host === l.host &&
          (o || n.port === l.port)
      ))(
        new URL(Ge.origin),
        Ge.navigator && /(msie|trident)/i.test(Ge.navigator.userAgent)
      )
    : () => !0,
  rv = Ge.hasStandardBrowserEnv
    ? {
        write(n, o, l, s, a, f) {
          const d = [n + '=' + encodeURIComponent(o)]
          z.isNumber(l) && d.push('expires=' + new Date(l).toGMTString()),
            z.isString(s) && d.push('path=' + s),
            z.isString(a) && d.push('domain=' + a),
            f === !0 && d.push('secure'),
            (document.cookie = d.join('; '))
        },
        read(n) {
          const o = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          )
          return o ? decodeURIComponent(o[3]) : null
        },
        remove(n) {
          this.write(n, '', Date.now() - 864e5)
        },
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
function ov(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}
function lv(n, o) {
  return o ? n.replace(/\/?\/$/, '') + '/' + o.replace(/^\/+/, '') : n
}
function oh(n, o, l) {
  let s = !ov(o)
  return (n && s) || l == !1 ? lv(n, o) : o
}
const Zd = n => (n instanceof at ? { ...n } : n)
function Qn(n, o) {
  o = o || {}
  const l = {}
  function s(y, g, v, S) {
    return z.isPlainObject(y) && z.isPlainObject(g)
      ? z.merge.call({ caseless: S }, y, g)
      : z.isPlainObject(g)
      ? z.merge({}, g)
      : z.isArray(g)
      ? g.slice()
      : g
  }
  function a(y, g, v, S) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(y)) return s(void 0, y, v, S)
    } else return s(y, g, v, S)
  }
  function f(y, g) {
    if (!z.isUndefined(g)) return s(void 0, g)
  }
  function d(y, g) {
    if (z.isUndefined(g)) {
      if (!z.isUndefined(y)) return s(void 0, y)
    } else return s(void 0, g)
  }
  function m(y, g, v) {
    if (v in o) return s(y, g)
    if (v in n) return s(void 0, y)
  }
  const h = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: m,
    headers: (y, g, v) => a(Zd(y), Zd(g), v, !0),
  }
  return (
    z.forEach(Object.keys(Object.assign({}, n, o)), function (g) {
      const v = h[g] || a,
        S = v(n[g], o[g], g)
      ;(z.isUndefined(S) && v !== m) || (l[g] = S)
    }),
    l
  )
}
const lh = n => {
    const o = Qn({}, n)
    let {
      data: l,
      withXSRFToken: s,
      xsrfHeaderName: a,
      xsrfCookieName: f,
      headers: d,
      auth: m,
    } = o
    ;(o.headers = d = at.from(d)),
      (o.url = Zp(oh(o.baseURL, o.url), n.params, n.paramsSerializer)),
      m &&
        d.set(
          'Authorization',
          'Basic ' +
            btoa(
              (m.username || '') +
                ':' +
                (m.password ? unescape(encodeURIComponent(m.password)) : '')
            )
        )
    let h
    if (z.isFormData(l)) {
      if (Ge.hasStandardBrowserEnv || Ge.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0)
      else if ((h = d.getContentType()) !== !1) {
        const [y, ...g] = h
          ? h
              .split(';')
              .map(v => v.trim())
              .filter(Boolean)
          : []
        d.setContentType([y || 'multipart/form-data', ...g].join('; '))
      }
    }
    if (
      Ge.hasStandardBrowserEnv &&
      (s && z.isFunction(s) && (s = s(o)), s || (s !== !1 && nv(o.url)))
    ) {
      const y = a && f && rv.read(f)
      y && d.set(a, y)
    }
    return o
  },
  iv = typeof XMLHttpRequest < 'u',
  sv =
    iv &&
    function (n) {
      return new Promise(function (l, s) {
        const a = lh(n)
        let f = a.data
        const d = at.from(a.headers).normalize()
        let { responseType: m, onUploadProgress: h, onDownloadProgress: y } = a,
          g,
          v,
          S,
          O,
          k
        function A() {
          O && O(),
            k && k(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener('abort', g)
        }
        let R = new XMLHttpRequest()
        R.open(a.method.toUpperCase(), a.url, !0), (R.timeout = a.timeout)
        function L() {
          if (!R) return
          const B = at.from(
              'getAllResponseHeaders' in R && R.getAllResponseHeaders()
            ),
            V = {
              data:
                !m || m === 'text' || m === 'json'
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: B,
              config: n,
              request: R,
            }
          rh(
            function (te) {
              l(te), A()
            },
            function (te) {
              s(te), A()
            },
            V
          ),
            (R = null)
        }
        'onloadend' in R
          ? (R.onloadend = L)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf('file:') === 0)) ||
                setTimeout(L)
            }),
          (R.onabort = function () {
            R &&
              (s(new le('Request aborted', le.ECONNABORTED, n, R)), (R = null))
          }),
          (R.onerror = function () {
            s(new le('Network Error', le.ERR_NETWORK, n, R)), (R = null)
          }),
          (R.ontimeout = function () {
            let b = a.timeout
              ? 'timeout of ' + a.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const V = a.transitional || eh
            a.timeoutErrorMessage && (b = a.timeoutErrorMessage),
              s(
                new le(
                  b,
                  V.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
                  n,
                  R
                )
              ),
              (R = null)
          }),
          f === void 0 && d.setContentType(null),
          'setRequestHeader' in R &&
            z.forEach(d.toJSON(), function (b, V) {
              R.setRequestHeader(V, b)
            }),
          z.isUndefined(a.withCredentials) ||
            (R.withCredentials = !!a.withCredentials),
          m && m !== 'json' && (R.responseType = a.responseType),
          y && (([S, k] = fi(y, !0)), R.addEventListener('progress', S)),
          h &&
            R.upload &&
            (([v, O] = fi(h)),
            R.upload.addEventListener('progress', v),
            R.upload.addEventListener('loadend', O)),
          (a.cancelToken || a.signal) &&
            ((g = B => {
              R &&
                (s(!B || B.type ? new Ar(null, n, R) : B),
                R.abort(),
                (R = null))
            }),
            a.cancelToken && a.cancelToken.subscribe(g),
            a.signal &&
              (a.signal.aborted ? g() : a.signal.addEventListener('abort', g)))
        const F = Z1(a.url)
        if (F && Ge.protocols.indexOf(F) === -1) {
          s(new le('Unsupported protocol ' + F + ':', le.ERR_BAD_REQUEST, n))
          return
        }
        R.send(f || null)
      })
    },
  av = (n, o) => {
    const { length: l } = (n = n ? n.filter(Boolean) : [])
    if (o || l) {
      let s = new AbortController(),
        a
      const f = function (y) {
        if (!a) {
          ;(a = !0), m()
          const g = y instanceof Error ? y : this.reason
          s.abort(
            g instanceof le ? g : new Ar(g instanceof Error ? g.message : g)
          )
        }
      }
      let d =
        o &&
        setTimeout(() => {
          ;(d = null), f(new le(`timeout ${o} of ms exceeded`, le.ETIMEDOUT))
        }, o)
      const m = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach(y => {
            y.unsubscribe ? y.unsubscribe(f) : y.removeEventListener('abort', f)
          }),
          (n = null))
      }
      n.forEach(y => y.addEventListener('abort', f))
      const { signal: h } = s
      return (h.unsubscribe = () => z.asap(m)), h
    }
  },
  uv = function* (n, o) {
    let l = n.byteLength
    if (l < o) {
      yield n
      return
    }
    let s = 0,
      a
    for (; s < l; ) (a = s + o), yield n.slice(s, a), (s = a)
  },
  cv = async function* (n, o) {
    for await (const l of fv(n)) yield* uv(l, o)
  },
  fv = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n
      return
    }
    const o = n.getReader()
    try {
      for (;;) {
        const { done: l, value: s } = await o.read()
        if (l) break
        yield s
      }
    } finally {
      await o.cancel()
    }
  },
  ep = (n, o, l, s) => {
    const a = cv(n, o)
    let f = 0,
      d,
      m = h => {
        d || ((d = !0), s && s(h))
      }
    return new ReadableStream(
      {
        async pull(h) {
          try {
            const { done: y, value: g } = await a.next()
            if (y) {
              m(), h.close()
              return
            }
            let v = g.byteLength
            if (l) {
              let S = (f += v)
              l(S)
            }
            h.enqueue(new Uint8Array(g))
          } catch (y) {
            throw (m(y), y)
          }
        },
        cancel(h) {
          return m(h), a.return()
        },
      },
      { highWaterMark: 2 }
    )
  },
  Ri =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  ih = Ri && typeof ReadableStream == 'function',
  dv =
    Ri &&
    (typeof TextEncoder == 'function'
      ? (
          n => o =>
            n.encode(o)
        )(new TextEncoder())
      : async n => new Uint8Array(await new Response(n).arrayBuffer())),
  sh = (n, ...o) => {
    try {
      return !!n(...o)
    } catch {
      return !1
    }
  },
  pv =
    ih &&
    sh(() => {
      let n = !1
      const o = new Request(Ge.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (n = !0), 'half'
        },
      }).headers.has('Content-Type')
      return n && !o
    }),
  tp = 64 * 1024,
  Za = ih && sh(() => z.isReadableStream(new Response('').body)),
  di = { stream: Za && (n => n.body) }
Ri &&
  (n => {
    ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(o => {
      !di[o] &&
        (di[o] = z.isFunction(n[o])
          ? l => l[o]()
          : (l, s) => {
              throw new le(
                `Response type '${o}' is not supported`,
                le.ERR_NOT_SUPPORT,
                s
              )
            })
    })
  })(new Response())
const hv = async n => {
    if (n == null) return 0
    if (z.isBlob(n)) return n.size
    if (z.isSpecCompliantForm(n))
      return (
        await new Request(Ge.origin, { method: 'POST', body: n }).arrayBuffer()
      ).byteLength
    if (z.isArrayBufferView(n) || z.isArrayBuffer(n)) return n.byteLength
    if ((z.isURLSearchParams(n) && (n = n + ''), z.isString(n)))
      return (await dv(n)).byteLength
  },
  mv = async (n, o) => {
    const l = z.toFiniteNumber(n.getContentLength())
    return l ?? hv(o)
  },
  yv =
    Ri &&
    (async n => {
      let {
        url: o,
        method: l,
        data: s,
        signal: a,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: m,
        onUploadProgress: h,
        responseType: y,
        headers: g,
        withCredentials: v = 'same-origin',
        fetchOptions: S,
      } = lh(n)
      y = y ? (y + '').toLowerCase() : 'text'
      let O = av([a, f && f.toAbortSignal()], d),
        k
      const A =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe()
        })
      let R
      try {
        if (
          h &&
          pv &&
          l !== 'get' &&
          l !== 'head' &&
          (R = await mv(g, s)) !== 0
        ) {
          let V = new Request(o, { method: 'POST', body: s, duplex: 'half' }),
            J
          if (
            (z.isFormData(s) &&
              (J = V.headers.get('content-type')) &&
              g.setContentType(J),
            V.body)
          ) {
            const [te, Y] = Gd(R, fi(Yd(h)))
            s = ep(V.body, tp, te, Y)
          }
        }
        z.isString(v) || (v = v ? 'include' : 'omit')
        const L = 'credentials' in Request.prototype
        k = new Request(o, {
          ...S,
          signal: O,
          method: l.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: L ? v : void 0,
        })
        let F = await fetch(k)
        const B = Za && (y === 'stream' || y === 'response')
        if (Za && (m || (B && A))) {
          const V = {}
          ;['status', 'statusText', 'headers'].forEach(se => {
            V[se] = F[se]
          })
          const J = z.toFiniteNumber(F.headers.get('content-length')),
            [te, Y] = (m && Gd(J, fi(Yd(m), !0))) || []
          F = new Response(
            ep(F.body, tp, te, () => {
              Y && Y(), A && A()
            }),
            V
          )
        }
        y = y || 'text'
        let b = await di[z.findKey(di, y) || 'text'](F, n)
        return (
          !B && A && A(),
          await new Promise((V, J) => {
            rh(V, J, {
              data: b,
              headers: at.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: n,
              request: k,
            })
          })
        )
      } catch (L) {
        throw (
          (A && A(),
          L && L.name === 'TypeError' && /fetch/i.test(L.message)
            ? Object.assign(new le('Network Error', le.ERR_NETWORK, n, k), {
                cause: L.cause || L,
              })
            : le.from(L, L && L.code, n, k))
        )
      }
    }),
  eu = { http: A1, xhr: sv, fetch: yv }
z.forEach(eu, (n, o) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: o })
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: o })
  }
})
const np = n => `- ${n}`,
  gv = n => z.isFunction(n) || n === null || n === !1,
  ah = {
    getAdapter: n => {
      n = z.isArray(n) ? n : [n]
      const { length: o } = n
      let l, s
      const a = {}
      for (let f = 0; f < o; f++) {
        l = n[f]
        let d
        if (
          ((s = l),
          !gv(l) && ((s = eu[(d = String(l)).toLowerCase()]), s === void 0))
        )
          throw new le(`Unknown adapter '${d}'`)
        if (s) break
        a[d || '#' + f] = s
      }
      if (!s) {
        const f = Object.entries(a).map(
          ([m, h]) =>
            `adapter ${m} ` +
            (h === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let d = o
          ? f.length > 1
            ? `since :
` +
              f.map(np).join(`
`)
            : ' ' + np(f[0])
          : 'as no adapter specified'
        throw new le(
          'There is no suitable adapter to dispatch the request ' + d,
          'ERR_NOT_SUPPORT'
        )
      }
      return s
    },
    adapters: eu,
  }
function $a(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Ar(null, n)
}
function rp(n) {
  return (
    $a(n),
    (n.headers = at.from(n.headers)),
    (n.data = Ua.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    ah
      .getAdapter(n.adapter || Io.adapter)(n)
      .then(
        function (s) {
          return (
            $a(n),
            (s.data = Ua.call(n, n.transformResponse, s)),
            (s.headers = at.from(s.headers)),
            s
          )
        },
        function (s) {
          return (
            nh(s) ||
              ($a(n),
              s &&
                s.response &&
                ((s.response.data = Ua.call(
                  n,
                  n.transformResponse,
                  s.response
                )),
                (s.response.headers = at.from(s.response.headers)))),
            Promise.reject(s)
          )
        }
      )
  )
}
const uh = '1.8.1',
  Pi = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, o) => {
    Pi[n] = function (s) {
      return typeof s === n || 'a' + (o < 1 ? 'n ' : ' ') + n
    }
  }
)
const op = {}
Pi.transitional = function (o, l, s) {
  function a(f, d) {
    return (
      '[Axios v' +
      uh +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (s ? '. ' + s : '')
    )
  }
  return (f, d, m) => {
    if (o === !1)
      throw new le(
        a(d, ' has been removed' + (l ? ' in ' + l : '')),
        le.ERR_DEPRECATED
      )
    return (
      l &&
        !op[d] &&
        ((op[d] = !0),
        console.warn(
          a(
            d,
            ' has been deprecated since v' +
              l +
              ' and will be removed in the near future'
          )
        )),
      o ? o(f, d, m) : !0
    )
  }
}
Pi.spelling = function (o) {
  return (l, s) => (console.warn(`${s} is likely a misspelling of ${o}`), !0)
}
function vv(n, o, l) {
  if (typeof n != 'object')
    throw new le('options must be an object', le.ERR_BAD_OPTION_VALUE)
  const s = Object.keys(n)
  let a = s.length
  for (; a-- > 0; ) {
    const f = s[a],
      d = o[f]
    if (d) {
      const m = n[f],
        h = m === void 0 || d(m, f, n)
      if (h !== !0)
        throw new le('option ' + f + ' must be ' + h, le.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (l !== !0) throw new le('Unknown option ' + f, le.ERR_BAD_OPTION)
  }
}
const ii = { assertOptions: vv, validators: Pi },
  bt = ii.validators
let qn = class {
  constructor(o) {
    ;(this.defaults = o),
      (this.interceptors = { request: new Jd(), response: new Jd() })
  }
  async request(o, l) {
    try {
      return await this._request(o, l)
    } catch (s) {
      if (s instanceof Error) {
        let a = {}
        Error.captureStackTrace ? Error.captureStackTrace(a) : (a = new Error())
        const f = a.stack ? a.stack.replace(/^.+\n/, '') : ''
        try {
          s.stack
            ? f &&
              !String(s.stack).endsWith(f.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + f)
            : (s.stack = f)
        } catch {}
      }
      throw s
    }
  }
  _request(o, l) {
    typeof o == 'string' ? ((l = l || {}), (l.url = o)) : (l = o || {}),
      (l = Qn(this.defaults, l))
    const { transitional: s, paramsSerializer: a, headers: f } = l
    s !== void 0 &&
      ii.assertOptions(
        s,
        {
          silentJSONParsing: bt.transitional(bt.boolean),
          forcedJSONParsing: bt.transitional(bt.boolean),
          clarifyTimeoutError: bt.transitional(bt.boolean),
        },
        !1
      ),
      a != null &&
        (z.isFunction(a)
          ? (l.paramsSerializer = { serialize: a })
          : ii.assertOptions(
              a,
              { encode: bt.function, serialize: bt.function },
              !0
            )),
      l.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (l.allowAbsoluteUrls = !0)),
      ii.assertOptions(
        l,
        {
          baseUrl: bt.spelling('baseURL'),
          withXsrfToken: bt.spelling('withXSRFToken'),
        },
        !0
      ),
      (l.method = (l.method || this.defaults.method || 'get').toLowerCase())
    let d = f && z.merge(f.common, f[l.method])
    f &&
      z.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        k => {
          delete f[k]
        }
      ),
      (l.headers = at.concat(d, f))
    const m = []
    let h = !0
    this.interceptors.request.forEach(function (A) {
      ;(typeof A.runWhen == 'function' && A.runWhen(l) === !1) ||
        ((h = h && A.synchronous), m.unshift(A.fulfilled, A.rejected))
    })
    const y = []
    this.interceptors.response.forEach(function (A) {
      y.push(A.fulfilled, A.rejected)
    })
    let g,
      v = 0,
      S
    if (!h) {
      const k = [rp.bind(this), void 0]
      for (
        k.unshift.apply(k, m),
          k.push.apply(k, y),
          S = k.length,
          g = Promise.resolve(l);
        v < S;

      )
        g = g.then(k[v++], k[v++])
      return g
    }
    S = m.length
    let O = l
    for (v = 0; v < S; ) {
      const k = m[v++],
        A = m[v++]
      try {
        O = k(O)
      } catch (R) {
        A.call(this, R)
        break
      }
    }
    try {
      g = rp.call(this, O)
    } catch (k) {
      return Promise.reject(k)
    }
    for (v = 0, S = y.length; v < S; ) g = g.then(y[v++], y[v++])
    return g
  }
  getUri(o) {
    o = Qn(this.defaults, o)
    const l = oh(o.baseURL, o.url, o.allowAbsoluteUrls)
    return Zp(l, o.params, o.paramsSerializer)
  }
}
z.forEach(['delete', 'get', 'head', 'options'], function (o) {
  qn.prototype[o] = function (l, s) {
    return this.request(
      Qn(s || {}, { method: o, url: l, data: (s || {}).data })
    )
  }
})
z.forEach(['post', 'put', 'patch'], function (o) {
  function l(s) {
    return function (f, d, m) {
      return this.request(
        Qn(m || {}, {
          method: o,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: f,
          data: d,
        })
      )
    }
  }
  ;(qn.prototype[o] = l()), (qn.prototype[o + 'Form'] = l(!0))
})
let wv = class ch {
  constructor(o) {
    if (typeof o != 'function')
      throw new TypeError('executor must be a function.')
    let l
    this.promise = new Promise(function (f) {
      l = f
    })
    const s = this
    this.promise.then(a => {
      if (!s._listeners) return
      let f = s._listeners.length
      for (; f-- > 0; ) s._listeners[f](a)
      s._listeners = null
    }),
      (this.promise.then = a => {
        let f
        const d = new Promise(m => {
          s.subscribe(m), (f = m)
        }).then(a)
        return (
          (d.cancel = function () {
            s.unsubscribe(f)
          }),
          d
        )
      }),
      o(function (f, d, m) {
        s.reason || ((s.reason = new Ar(f, d, m)), l(s.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason)
      return
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o])
  }
  unsubscribe(o) {
    if (!this._listeners) return
    const l = this._listeners.indexOf(o)
    l !== -1 && this._listeners.splice(l, 1)
  }
  toAbortSignal() {
    const o = new AbortController(),
      l = s => {
        o.abort(s)
      }
    return (
      this.subscribe(l),
      (o.signal.unsubscribe = () => this.unsubscribe(l)),
      o.signal
    )
  }
  static source() {
    let o
    return {
      token: new ch(function (a) {
        o = a
      }),
      cancel: o,
    }
  }
}
function _v(n) {
  return function (l) {
    return n.apply(null, l)
  }
}
function Sv(n) {
  return z.isObject(n) && n.isAxiosError === !0
}
const tu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(tu).forEach(([n, o]) => {
  tu[o] = n
})
function fh(n) {
  const o = new qn(n),
    l = bp(qn.prototype.request, o)
  return (
    z.extend(l, qn.prototype, o, { allOwnKeys: !0 }),
    z.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (a) {
      return fh(Qn(n, a))
    }),
    l
  )
}
const ge = fh(Io)
ge.Axios = qn
ge.CanceledError = Ar
ge.CancelToken = wv
ge.isCancel = nh
ge.VERSION = uh
ge.toFormData = ki
ge.AxiosError = le
ge.Cancel = ge.CanceledError
ge.all = function (o) {
  return Promise.all(o)
}
ge.spread = _v
ge.isAxiosError = Sv
ge.mergeConfig = Qn
ge.AxiosHeaders = at
ge.formToJSON = n => th(z.isHTMLForm(n) ? new FormData(n) : n)
ge.getAdapter = ah.getAdapter
ge.HttpStatusCode = tu
ge.default = ge
const {
    Axios: pS,
    AxiosError: hS,
    CanceledError: mS,
    isCancel: yS,
    CancelToken: gS,
    VERSION: vS,
    all: wS,
    Cancel: _S,
    isAxiosError: SS,
    spread: ES,
    toFormData: xS,
    AxiosHeaders: CS,
    HttpStatusCode: kS,
    formToJSON: RS,
    getAdapter: PS,
    mergeConfig: NS,
  } = ge,
  Ev = 'http://localhost:3001/api/v2'
class dh {
  constructor() {
    He(this, 'axiosInstance')
    this.axiosInstance = ge.create({
      baseURL: Ev,
      withCredentials: !0,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  async getCurrentUser() {
    var o, l
    try {
      const s = await this.axiosInstance.get('/auth/user')
      return console.log('Получаем данные о пользователе', s), s.data
    } catch (s) {
      throw new Error(
        ge.isAxiosError(s) &&
        (l = (o = s.response) == null ? void 0 : o.data) != null &&
        l.reason
          ? s.response.data.reason
          : 'Ошибка получения данных пользователя'
      )
    }
  }
  async loginWithCode(o) {
    var l, s
    try {
      await this.axiosInstance.post('/oauth/yandex', {
        code: o,
        redirect_uri: 'http://localhost:3000/signin',
      })
    } catch (a) {
      throw new Error(
        ge.isAxiosError(a) &&
        (s = (l = a.response) == null ? void 0 : l.data) != null &&
        s.reason
          ? a.response.data.reason
          : 'Ошибка авторизации через код'
      )
    }
  }
  async signup(o) {
    var l, s
    try {
      return (await this.axiosInstance.post('/auth/signup', o)).data
    } catch (a) {
      throw new Error(
        ge.isAxiosError(a) &&
        (s = (l = a.response) == null ? void 0 : l.data) != null &&
        s.reason
          ? a.response.data.reason
          : 'Ошибка регистрации'
      )
    }
  }
  async signin(o) {
    var l, s
    try {
      await this.axiosInstance.post('/auth/signin', o)
    } catch (a) {
      throw new Error(
        ge.isAxiosError(a) &&
        (s = (l = a.response) == null ? void 0 : l.data) != null &&
        s.reason
          ? a.response.data.reason
          : 'Ошибка авторизации'
      )
    }
  }
  async signinWithCookie(o) {
    var l, s
    try {
      return (
        await this.axiosInstance.get('/auth/user', {
          headers: o ? { Cookie: o } : {},
        })
      ).data
    } catch (a) {
      throw (
        (console.error(`signinWithCookie error: ${a}`),
        new Error(
          ge.isAxiosError(a) &&
          (s = (l = a.response) == null ? void 0 : l.data) != null &&
          s.reason
            ? a.response.data.reason
            : 'Ошибка авторизации по куке'
        ))
      )
    }
  }
  async signinWithYandex(o) {
    var l, s
    try {
      const a = await ge.post(
        'http://localhost:3001/api/v2/oauth/yandex',
        JSON.stringify(o),
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(a)
    } catch (a) {
      throw (
        (console.error(`signinWithYandex error: ${a}`),
        new Error(
          ge.isAxiosError(a) &&
          (s = (l = a.response) == null ? void 0 : l.data) != null &&
          s.reason
            ? a.response.data.reason
            : 'Ошибка авторизации через Яндекс'
        ))
      )
    }
  }
}
const Dr = ({ children: n }) => {
    const [o, l] = _.useState(!1),
      [s, a] = _.useState(!0),
      f = pu(h => h.auth.user),
      d = _.useCallback(() => {
        l(!0), a(!1)
      }, []),
      m = _.useCallback(() => {
        l(!1), a(!1)
      }, [])
    return (
      _.useEffect(() => {
        f ? d() : new dh().getCurrentUser().then(d).catch(m)
      }, [d, m]),
      s
        ? C(Kg, {})
        : o
        ? C(Ct, { children: n })
        : C(Yy, { to: '/signin', replace: !0 })
    )
  },
  xv = '_avatarProfile_h1jbl_1',
  Cv = { avatarProfile: xv },
  Cu = n => C('img', { className: Cv.avatarProfile, ...n }),
  ku =
    "data:image/svg+xml,%3csvg%20width='130'%20height='130'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36%202H4C2.89543%202%202%202.89543%202%204V25.2667L14.6547%2022.3139C15.5486%2022.1053%2016.4635%2022%2017.3814%2022H22.6186C23.5365%2022%2024.4514%2022.1053%2025.3453%2022.3139L38%2025.2667V4C38%202.89543%2037.1046%202%2036%202ZM4%200C1.79086%200%200%201.79086%200%204V36C0%2038.2091%201.79086%2040%204%2040H36C38.2091%2040%2040%2038.2091%2040%2036V4C40%201.79086%2038.2091%200%2036%200H4ZM10.9091%2014.5455C12.9174%2014.5455%2014.5455%2012.9174%2014.5455%2010.9091C14.5455%208.90079%2012.9174%207.27273%2010.9091%207.27273C8.90082%207.27273%207.27276%208.90079%207.27276%2010.9091C7.27276%2012.9174%208.90082%2014.5455%2010.9091%2014.5455Z'%20fill='%23CDCDCD'/%3e%3c/svg%3e",
  kv = '_label_186wi_1',
  Rv = { label: kv },
  ph = ({ text: n }) => C('div', { className: Rv.label, children: n }),
  Pv = '_input_yfe8a_2',
  Nv = { input: Pv },
  Tv = n => C('input', { className: Nv.input, ...n }),
  Ov = '_error__ChangeData_14tae_1',
  Av = { error__ChangeData: Ov },
  Dt = ({ message: n }) =>
    n ? C('span', { className: Av.error__ChangeData, children: n }) : null,
  Hn = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
    name: /^[A-Za-zА-Яа-я]{1}[a-zA-Zа-яА-Я-]*$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    phone: /^\+?\d{10,15}$/,
  },
  Vn = (n, o, l, s) => {
    l.test(n) ? o('') : o(s)
  },
  Dv = ({ event: n, setData: o, setDataError: l }) => {
    const { target: s } = n
    if (!s) return
    const { id: a, value: f } = s
    switch ((o(f), a)) {
      case 'email':
        Vn(f, l, Hn.email, 'Некорректный email')
        break
      case 'login':
        Vn(f, l, Hn.login, 'Некорректный login')
        break
      case 'first_name':
        Vn(f, l, Hn.name, 'Некорректное имя')
        break
      case 'second_name':
        Vn(f, l, Hn.name, 'Некорректная фамилия')
        break
      case 'display_name':
        l(f === '' ? 'Имя в чате не может быть пустым' : '')
        break
      case 'phone':
        Vn(f, l, Hn.phone, 'Некорректный телефон')
        break
      case 'oldPassword':
      case 'newPassword':
        Vn(f, l, Hn.password, 'Неккоректный пароль')
        break
      case 'repeatPassword':
        const d = document.querySelector('#newPassword')
        d && d.value !== f
          ? l('Пароли не совпадают')
          : Vn(f, l, Hn.password, 'Неккоректный пароль')
        break
    }
  },
  Lv = '_form__content_v2j3d_1',
  zv = '_input__span_v2j3d_11',
  lp = { form__content: Lv, input__span: zv },
  Fv = ({
    text: n,
    type: o,
    id: l,
    name: s,
    value: a,
    DataDirty: f,
    DataError: d,
    setData: m,
    setDataError: h,
    setDataDirty: y,
  }) => {
    const g = () => {
      y(!0)
    }
    return re('div', {
      className: lp.form__content,
      children: [
        C(ph, { text: n }),
        re('div', {
          className: lp.input__span,
          children: [
            f && d && C(Dt, { message: d }),
            C(Tv, {
              type: o,
              id: l,
              name: s,
              onBlur: g,
              onChange: v => Dv({ event: v, setData: m, setDataError: h }),
              value: a,
            }),
          ],
        }),
      ],
    })
  },
  Mv = '_link_kvebi_2',
  hh = { link: Mv },
  Iv = ({ children: n, customClass: o, onClick: l, ...s }) =>
    C('button', {
      className: `${hh.link} ${o || ''}`,
      onClick: l,
      ...s,
      children: n,
    }),
  jv = '_form_u6rxk_1',
  Bv = { form: jv },
  Uv = (n, o) =>
    fetch(`${Oo}/user/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(n),
    })
      .then(l => l.json())
      .then(l => {
        o(l), console.log(l)
      })
      .catch(l => console.log(l)),
  mh = ({ formValid: n, formData: o }) => {
    function l(a) {
      console.log('----', a),
        o.forEach(f => {
          f.id == 'email' && (console.log(f, a.email), f.setData(a.email))
        })
    }
    const s = a => {
      a.preventDefault()
      const f = {}
      o.forEach(d => {
        f[d.name] = d.value
      }),
        Uv(f, l)
    }
    return re('form', {
      className: Bv.form,
      id: 'Form',
      children: [
        o.map((a, f) => _.createElement(Fv, { ...a, key: f })),
        C(Iv, {
          type: 'submit',
          disabled: !n,
          className: hh.link,
          onClick: s,
          style: { marginTop: '15px' },
          children: 'Сохранить',
        }),
      ],
    })
  },
  $v = () => {
    const [n, o] = _.useState(''),
      [l, s] = _.useState(!1),
      [a, f] = _.useState('Email не может быть пустым'),
      [d, m] = _.useState(''),
      [h, y] = _.useState(!1),
      [g, v] = _.useState('Логин не может быть пустым'),
      [S, O] = _.useState(''),
      [k, A] = _.useState(!1),
      [R, L] = _.useState('Имя не может быть пустым'),
      [F, B] = _.useState(''),
      [b, V] = _.useState(!1),
      [J, te] = _.useState('Фамилия не может быть пустой'),
      [Y, se] = _.useState(''),
      [xe, We] = _.useState(!1),
      [Ke, Ue] = _.useState('Имя в чате не может быть пустым'),
      [ye, Le] = _.useState(''),
      [Oe, ve] = _.useState(!1),
      [H, ne] = _.useState('Номер не может быть пустым'),
      [K, P] = _.useState(!1)
    return (
      _.useEffect(() => {
        P(!(a || g || R || J || Ke || H))
      }, [a, g, R, J, Ke, H]),
      {
        formData: [
          {
            text: 'Почта',
            type: 'email',
            id: 'email',
            name: 'email',
            value: n,
            DataDirty: l,
            DataError: a,
            setData: o,
            setDataError: f,
            setDataDirty: s,
          },
          {
            text: 'Логин',
            type: 'text',
            id: 'login',
            name: 'login',
            value: d,
            DataDirty: h,
            DataError: g,
            setData: m,
            setDataError: v,
            setDataDirty: y,
          },
          {
            text: 'Имя',
            type: 'text',
            id: 'first_name',
            name: 'first_name',
            value: S,
            DataDirty: k,
            DataError: R,
            setData: O,
            setDataError: L,
            setDataDirty: A,
          },
          {
            text: 'Фамилия',
            type: 'text',
            id: 'second_name',
            name: 'second_name',
            value: F,
            DataDirty: b,
            DataError: J,
            setData: B,
            setDataError: te,
            setDataDirty: V,
          },
          {
            text: 'Имя в чате',
            type: 'text',
            id: 'display_name',
            name: 'display_name',
            value: Y,
            DataDirty: xe,
            DataError: Ke,
            setData: se,
            setDataError: Ue,
            setDataDirty: We,
          },
          {
            text: 'Телефон',
            type: 'text',
            id: 'phone',
            name: 'phone',
            value: ye,
            DataDirty: Oe,
            DataError: H,
            setData: Le,
            setDataError: ne,
            setDataDirty: ve,
          },
        ],
        formValid: K,
      }
    )
  },
  bv = '_container_4qvlt_2',
  Hv = '_content_4qvlt_18',
  Vv = '_container__link_4qvlt_36',
  Wv = '_link_4qvlt_49',
  en = { container: bv, content: Hv, container__link: Vv, link: Wv },
  Kv =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHUlEQVR4nO2aTRKDIAxGvyPVI8VVb9Blu/TSSqc7p/6CkID53gwLNwQeoBIACCGEEEK2CZlKK3EXUAA4A8AlgKWECcAT9giA0eodMBlLOOp8EQHjynMPffqNthQXICuBtGfCXhuKC4CxhKPYKgKsJJyJqSZAW8LZWKoCtCTExFAXUFpCbN0mAkpJSKnTTMDet7lDPF3iP4epgLVReyOdV8JsMhcwl3Cl83MJMUupCgE/HshHTF3ZBRBCCCGEEEJ8ErxvhsKF7fCQIf6nte2w/CVEhoudbyoh0ntOiYnnpKh4TouL54MR8Xw0Jp4PR8Xz8bh4vyAxJnybb3VFJhiOfBWXpEIlna/imlyIKK3EXUAB4AyA6yVACCGEENySL27XAZYjpTstAAAAAElFTkSuQmCC',
  qv =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEOElEQVR42u2by3LiRhSG/wNaeGWchzHwBIGx1S3NVMVVqXmTLJCRn2E2uayyy0rqpiqQWWVnk5cxzsaLqZwskBJJ6I7Ag9C/sxBI39fqdjecBhIxTdkXwvrRNOUYe0ZK+76Bz3D2/QwhrKEQ1s+mKY3kaxSHF32i3q9E9D0zb5h5uliox3o3bt0D5Cjl0Z4CGMBcKa+WzNvb98Nej1dEuGLm35j542KhvuwIiMKHx+pKCOEBoCEBAHiulF9Jws3Nh2G//8+KCFcRppgECh97IorBRyUAmGrtP1aFb1ZANQm3tx+GvV4cPioB4I9aqy8khOwD6fCRt2wATJXKl5CEb15AOQlSvh8x84oIg0yiQIIB0Kd8eACgAcBLKa1MCcGAt/eAVRxypLSQJUFKewTkwwMAEd0x428DwC/MuCPCN3UlSGnPAcxwtJAjpY3kwCiENQKwAvLhI137J9q+0b4GsCqWsNsdiuCb7wKxuEp5DgBYlj1mxrIMPMAbZky09p8oYu+aCCuASkjABsAU4HcA5bb8gQUAYBeg34Gy8Ngw80Rr/2lnHiCldQ3QH8DuyJly4VeALorOOryA8vcSNNxEKe8pPGDEb9b/S0r7WwAlJJS64LHGhBL3ws9beH8dPWqktFgFCacRZjwDmGgdh08V0DYJefCZAiISJsG/lavThvfWWecYBQPYOpDwJ4CLE4N/LYIvFBCuKU4NfjvTwwUz3wCoL+B409tDScifNucK2C5sThe+7NrBKLuqa6sEo/3w+RKM84DPXkUabRnwKiQmwTgz+B0JxhnCRyUwunTp0qVLly5dunTp0qVLly5nFxLCcojo/lAXOM7P4/XCzI6htT8XwmIimp9TyzOzo7XvGgCgte8KYeGMJDha+y4Q+VZYa9+V0gaAebtbHo7Wnhv+nagQ8VwhbBC1U0L42EeP7fwypLXXyu6QBp8qoI1jAjPPtPYf0l7L/HU4kMBE5J44fyZ8roBAwkMwMLqn2fKYae095J1TpkLkM4AfcIIlMkT4XHReroBI+elJlsgAWEppT5XyHisLqFZ7+9VmUCTBaDF8KQlGy+ELJSQqROxRWXhmfiX6OuqFS95LKCG9WLpiyz8DmDDz9K0nS8zsAFgyI3V/UIqElRDWf3ugwgqRyvBB7e36LdcO0elthbLeAYClacrJYqGeyDTlqNfrrarAKxUvPxXCnmVJONQXIslVXXDusKQEMPOGiCZGMNWtDf//AuqoT8IOfCB7XfZJIKIBgLkB0HfBG8Z14N9gFeko5WVOzUMJJcaERwB34aapS2w3TY3rwMe7gzWLSmi4C+TCJ7rlMGC6yoCfKOW9RDdNBRJoHOlnhfX2RRKaEpC1nq8qgXkLr7X3AiQ2TUUlMPMzQJXhkxKaEFAHPk0CMwfw/kvejV8KYS2FsIb7dtaGtr7PGviMYcB0mXztX9ggo3iRNFwbAAAAAElFTkSuQmCC',
  Qv = n => {
    const [o, l] = _.useState(!1),
      s = _.useCallback(() => {
        document.fullscreenElement
          ? document
              .exitFullscreen()
              .then(() => {
                l(!1)
              })
              .catch(a =>
                console.error('Ошибка выхода из полноэкранного режима:', a)
              )
          : document.documentElement
              .requestFullscreen()
              .then(() => {
                l(!0)
              })
              .catch(a =>
                console.error('Ошибка активации полноэкранного режима:', a)
              )
      }, [])
    return (
      _.useEffect(() => {
        const a = f => {
          f.key === n && s()
        }
        return (
          window.addEventListener('keydown', a),
          () => {
            window.removeEventListener('keydown', a)
          }
        )
      }, [n, s]),
      { isFullscreen: o, toggleFullscreen: s }
    )
  },
  Jv = '_iconFullscreen_anlmw_2',
  Xv = { iconFullscreen: Jv },
  Ru = () => {
    const { isFullscreen: n, toggleFullscreen: o } = Qv('')
    return C('img', {
      className: Xv.iconFullscreen,
      src: n ? qv : Kv,
      alt: '',
      onClick: o,
    })
  },
  Gv = () => {
    const { formData: n, formValid: o } = $v(),
      l = ln()
    return re('div', {
      className: en.container,
      children: [
        C('button', {
          className: 'back-button',
          onClick: () => l(-1),
          children: '❮',
        }),
        re('div', {
          className: en.content,
          children: [
            C(Ru, {}),
            C(Cu, { id: 'avatar', src: ku, alt: 'Добавьте картинку' }),
            C(mh, { formData: n, formValid: o }),
          ],
        }),
      ],
    })
  },
  Yv = () => C(Ct, { children: C(Dr, { children: C(Gv, {}) }) }),
  Zv = () => {
    const [n, o] = _.useState(''),
      [l, s] = _.useState(!1),
      [a, f] = _.useState('Неккоректный пароль'),
      [d, m] = _.useState(''),
      [h, y] = _.useState(!1),
      [g, v] = _.useState('Неккоректный пароль'),
      [S, O] = _.useState(''),
      [k, A] = _.useState(!1),
      [R, L] = _.useState('Неккоректный пароль'),
      [F, B] = _.useState(!1)
    return (
      _.useEffect(() => {
        B(!(a || g || R))
      }, [a, g, R]),
      {
        formData: [
          {
            text: 'Старый пароль',
            type: 'password',
            id: 'oldPassword',
            name: 'oldPassword',
            value: n,
            DataDirty: l,
            DataError: a,
            setData: o,
            setDataError: f,
            setDataDirty: s,
          },
          {
            text: 'Новый пароль',
            type: 'password',
            id: 'newPassword',
            name: 'newPassword',
            value: d,
            DataDirty: h,
            DataError: g,
            setData: m,
            setDataError: v,
            setDataDirty: y,
          },
          {
            text: 'Повторите новый пароль',
            type: 'password',
            id: 'repeatPassword',
            name: 'repeatPassword',
            value: S,
            DataDirty: k,
            DataError: R,
            setData: O,
            setDataError: L,
            setDataDirty: A,
          },
        ],
        formValid: F,
      }
    )
  },
  e2 = () => {
    const { formData: n, formValid: o } = Zv(),
      l = ln()
    return re('div', {
      className: en.container,
      children: [
        C('button', {
          className: 'back-button',
          onClick: () => l(-1),
          children: '❮',
        }),
        re('div', {
          className: en.content,
          children: [
            C(Ru, {}),
            C(Cu, { id: 'avatar', src: ku, alt: 'Добавьте картинку' }),
            C(mh, { formData: n, formValid: o }),
          ],
        }),
      ],
    })
  },
  t2 = () => C(Ct, { children: C(Dr, { children: C(e2, {}) }) }),
  n2 = ({ addReaction: n }) => {
    const o = ['👍', '❤️', '😂', '😲', '😢', '🔥'],
      [l, s] = _.useState(!1),
      a = d => {
        s(!l), d.stopPropagation()
      },
      f = (d, m) => {
        d.stopPropagation(), n(m), s(!1)
      }
    return re(Ct, {
      children: [
        C('button', { className: 'button', onClick: a, children: '➕' }),
        l &&
          o.map(d =>
            C(
              'button',
              {
                onClick: m => {
                  f(m, d)
                },
                children: d,
              },
              d
            )
          ),
      ],
    })
  },
  r2 = '_button_hajsb_1',
  o2 = { button: r2 },
  ip = ({ text: n, onClick: o }) =>
    C('button', { className: o2.button, onClick: o, children: n }),
  l2 =
    "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20viewBox='0,0,256,256'%3e%3cg%20fill='%23696969'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='translate(-0.0504,0)%20scale(0.5,0.5)'%3e%3cg%3e%3cpath%20d='M116.352,205.952c-4.715,-45.077%20-30.741,-71.168%20-60.501,-71.168v0.043c-1.796,-0.002%20-3.59,0.09%20-5.376,0.277c-31.936,3.285%20-54.741,35.157%20-49.792,82.923c4.779,45.696%2032.405,80.64%2062.763,80.64c1.375,0.003%202.75,-0.069%204.117,-0.213c32,-3.329%2053.781,-44.801%2048.789,-92.502zM63.104,255.744c-12.471,-10.48%20-18.467,-25.173%20-19.989,-42.155c0,-10.743%20-0.102,-21.343%204.672,-30.891c2.653,-4.99%205.888,-5.077%207.125,-5.205l0.943,-0.016c7.189,0%2015.91,12.282%2018.065,32.89c1.476,16.051%20-0.799,32.537%20-10.816,45.377z'%3e%3c/path%3e%3cpath%20d='M180.629,180.267c1.515,0%203.008,0%204.523,-0.235c35.136,-3.669%2059.157,-49.237%2053.675,-101.76c-5.184,-49.557%20-33.814,-78.272%20-66.539,-78.272v0c-1.967,0.002%20-3.932,0.108%20-5.888,0.32c-35.157,3.648%20-60.288,38.699%20-54.805,91.243c5.269,50.261%2035.605,88.704%2069.034,88.704zM159.808,50.347c2.149,-4.235%206.271,-7.117%2010.987,-7.68c0.497,-0.031%200.996,-0.031%201.493,0v0c9.899,0%2021.333,13.76%2024.107,40.043c1.993,15.287%20-0.404,30.825%20-6.912,44.8c-3.883,7.36%20-7.787,9.92%20-8.853,10.027c-5.483,0%20-23.125,-17.365%20-26.603,-50.475c-2.224,-12.541%20-0.189,-25.465%205.781,-36.715z'%3e%3c/path%3e%3cpath%20d='M327.765,180.032c1.515,0.149%203.029,0.235%204.523,0.235c33.387,0%2063.787,-38.4%2069.035,-88.704c5.483,-52.544%20-19.648,-87.595%20-54.763,-91.243c-1.963,-0.212%20-3.935,-0.319%20-5.909,-0.32c-32.747,0%20-61.376,28.715%20-66.56,78.272c-5.483,52.523%2018.538,98.133%2053.674,101.76zM316.544,82.688c2.731,-26.261%2014.123,-40.021%2024.107,-40.021c0.49,-0.032%200.982,-0.032%201.472,0c4.711,0.558%208.833,3.432%2010.987,7.659c5.992,11.243%208.029,24.174%205.781,36.715c-3.456,33.109%20-21.12,50.475%20-26.688,50.475c-0.981,0%20-4.885,-2.667%20-8.768,-10.027c-6.51,-13.975%20-8.901,-29.516%20-6.891,-44.801z'%3e%3c/path%3e%3cpath%20d='M256,234.667c-96.896,0%20-192,99.008%20-192.128,199.872c-2.645,68.245%2055.467,92.971%20125.867,67.797c42.918,-14.635%2089.477,-14.635%20132.395,0c16.535,5.583%2033.767,8.835%2051.2,9.664c61.717,0%2074.666,-42.133%2074.666,-77.461c0,-100.864%20-95.104,-199.872%20-192,-199.872zM256,448c-48.085,-7.616%20-154.112,60.437%20-149.333,-13.461c0,-77.867%2075.371,-157.205%20149.333,-157.205c73.962,0%20149.333,79.339%20149.333,157.205c4.822,73.834%20-101.013,5.93%20-149.333,13.461z'%3e%3c/path%3e%3cpath%20d='M468.711,157.666l-0.01,0.042c-1.747,-0.417%20-3.514,-0.74%20-5.295,-0.971c-31.832,-4.172%20-61.376,21.579%20-67.581,69.197c-5.894,45.566%2012.925,85.941%2042.464,92.945c1.338,0.32%202.691,0.568%204.056,0.742c31.904,4.145%2062.667,-31.182%2068.815,-78.749c5.813,-44.948%20-13.492,-76.34%20-42.449,-83.206zM468.854,235.38c-2.267,15.957%20-8.284,31.474%20-20.994,41.656c-9.716,-13.075%20-12.16,-28.754%20-9.724,-45.629c2.479,-10.453%204.826,-20.791%2011.673,-28.979c3.733,-4.243%206.901,-3.582%208.134,-3.421l0.921,0.203c6.996,1.658%2012.648,15.621%209.99,36.17z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  i2 =
    "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20viewBox='0,0,256,256'%3e%3cg%20fill='%23696969'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='translate(-0.0686,2.07307)%20scale(10.66667,10.66667)'%3e%3cpath%20d='M23.836,8.794c-0.42,-1.33686%20-1.6658,-2.24105%20-3.067,-2.226h-4.369l-1.327,-4.136c-0.42817,-1.33581%20-1.67025,-2.24201%20-3.073,-2.24201c-1.40275,0%20-2.64483,0.9062%20-3.073,2.24201l-1.327,4.136h-4.369c-1.39539,0.00199%20-2.63144,0.90063%20-3.06368,2.22739c-0.43224,1.32676%200.03724,2.78104%201.16368,3.60461l3.556,2.6l-1.352,4.187c-0.44871,1.33364%200.033,2.80359%201.184,3.613c1.13127,0.83539%202.67714,0.82766%203.8,-0.019l3.481,-2.562l3.482,2.559c1.1281,0.82979%202.66263,0.83726%203.79877,0.01851c1.13613,-0.81875%201.61451,-2.27684%201.18423,-3.60951l-1.352,-4.187l3.56,-2.6c1.14043,-0.81403%201.61292,-2.27905%201.163,-3.606zM21.493,10.785l-4.144,3.029c-0.34914,0.2547%20-0.49516,0.70486%20-0.362,1.116l1.575,4.87c0.16351,0.50676%20-0.0185,1.06115%20-0.45057,1.37238c-0.43207,0.31123%20-1.01556,0.30825%20-1.44443,-0.00738l-4.075,-3c-0.35226,-0.25875%20-0.83174,-0.25875%20-1.184,0l-4.075,3c-0.42872,0.31995%20-1.01532,0.32527%20-1.44977,0.01315c-0.43445,-0.31212%20-0.61662,-0.86974%20-0.45023,-1.37815l1.58,-4.87c0.13316,-0.41114%20-0.01286,-0.8613%20-0.362,-1.116l-4.144,-3.029c-0.42809,-0.31344%20-0.60622,-0.86654%20-0.44152,-1.3709c0.16471,-0.50436%200.63494,-0.84572%201.16552,-0.8461h5.1c0.43438,-0.00001%200.81908,-0.28045%200.952,-0.694l1.55,-4.831c0.16324,-0.50721%200.63517,-0.85109%201.168,-0.85109c0.53283,0%201.00476,0.34388%201.168,0.85109l1.55,4.831c0.13292,0.41355%200.51762,0.69399%200.952,0.694h5.1c0.53058,0.00037%201.00081,0.34173%201.16552,0.8461c0.16471,0.50436%20-0.01342,1.05746%20-0.44152,1.3709z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  s2 =
    "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='24px'%20height='24px'%20viewBox='0,0,256,256'%3e%3cg%20fill='%23696969'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='translate(0,0.07174)%20scale(10.66667,10.66667)'%3e%3cpath%20d='M24,16v5c0,1.657%20-1.343,3%20-3,3h-5c-2.955,0%20-5.535,-1.615%20-6.92,-4.004c0.769,-0.006%201.518,-0.091%202.242,-0.248c1.101,1.371%202.787,2.252%204.678,2.252h5c0.552,0%201,-0.448%201,-1v-5c0,-1.891%20-0.881,-3.577%20-2.252,-4.678c0.156,-0.724%200.242,-1.473%200.248,-2.242c2.389,1.385%204.004,3.965%204.004,6.92zM8.138,18h-4.477c-2.019,0%20-3.661,-1.645%20-3.661,-3.666v-5.038c0,-4.707%203.823,-8.953%208.349,-9.273c5.315,-0.505%2010.126,4.315%209.628,9.628c-0.331,4.682%20-4.652,8.349%20-9.839,8.349zM15.982,9.511c0.367,-3.95%20-3.037,-7.597%20-6.994,-7.511c-3.735,-0.038%20-6.987,3.423%20-6.988,7.296v5.038c0,0.919%200.745,1.666%201.661,1.666h4.477c4.073,0%207.592,-2.911%207.844,-6.489zM9,7.5c-0.828,0%20-1.5,0.672%20-1.5,1.5c0,0.828%200.672,1.5%201.5,1.5c0.828,0%201.5,-0.672%201.5,-1.5c0,-0.828%20-0.672,-1.5%20-1.5,-1.5zM5,7.5c-0.828,0%20-1.5,0.672%20-1.5,1.5c0,0.828%200.672,1.5%201.5,1.5c0.828,0%201.5,-0.672%201.5,-1.5c0,-0.828%20-0.672,-1.5%20-1.5,-1.5zM13,7.5c-0.828,0%20-1.5,0.672%20-1.5,1.5c0,0.828%200.672,1.5%201.5,1.5c0.828,0%201.5,-0.672%201.5,-1.5c0,-0.828%20-0.672,-1.5%20-1.5,-1.5z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  a2 =
    "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='24px'%20height='24px'%20viewBox='0,0,256,256'%3e%3cg%20fill='%23696969'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='translate(0,0.672)%20scale(10.66667,10.66667)'%3e%3cpath%20d='M24,12c0,4.307%20-3.503,7.81%20-7.81,7.81c-4.307,0%20-7.81,-3.503%20-7.81,-7.81h2c0,3.203%202.606,5.81%205.81,5.81c3.204,0%205.81,-2.606%205.81,-5.81c0,-0.893%20-0.129,-1.755%20-0.35,-2.58l1.588,-1.588c0.484,1.3%200.762,2.701%200.762,4.168zM2,12c0,-5.514%204.486,-10%2010,-10c0.893,0%201.755,0.129%202.58,0.35l1.588,-1.588c-1.301,-0.484%20-2.701,-0.762%20-4.168,-0.762c-6.617,0%20-12,5.383%20-12,12c0,4.96%202.669,9.288%207.324,11.874l0.972,-1.748c-4.001,-2.223%20-6.295,-5.913%20-6.295,-10.126zM12,7.758l6.879,-6.879c1.133,-1.133%203.109,-1.133%204.243,0c1.169,1.17%201.169,3.072%200,4.242l-6.878,6.879h-4.243v-4.242zM14,10h1.415l6.292,-6.293c0.39,-0.39%200.39,-1.024%200,-1.414c-0.378,-0.379%20-1.037,-0.379%20-1.414,0l-6.293,6.293z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  u2 = '_choose_wmytd_44',
  c2 = '_game__main_wmytd_49',
  Rn = {
    'game__top-navigation': '_game__top-navigation_wmytd_2',
    'game__bottom-navigation': '_game__bottom-navigation_wmytd_9',
    choose: u2,
    game__main: c2,
  },
  Ni = ({ children: n }) => {
    const o = ln(),
      { showBoundary: l } = Bg(),
      s = () => {
        l(new Error('Intentional error to test ErrorBoundary'), {})
      },
      a = () => {
        o('/profile')
      },
      f = on().pathname
    return re('div', {
      className: Rn.game,
      children: [
        re('nav', {
          className: Rn['game__top-navigation'],
          children: [
            C(ip, { onClick: a, text: 'Профиль' }),
            C(ip, { onClick: s, text: 'Выйти' }),
          ],
        }),
        re('main', {
          className: Rn.game__main,
          children: [
            n,
            C('nav', {
              className: Rn['game__bottom-navigation'],
              children: re('ul', {
                children: [
                  C('li', {
                    children: re(xt, {
                      to: '/game',
                      className: f === '/game' ? Rn.choose : '',
                      children: [
                        C('img', { src: l2 }),
                        C('span', { children: 'Хомяк' }),
                      ],
                    }),
                  }),
                  C('li', {
                    children: re(xt, {
                      to: '/forum',
                      className: f === '/forum' ? Rn.choose : '',
                      children: [
                        C('img', { src: s2 }),
                        C('span', { children: 'Форум' }),
                      ],
                    }),
                  }),
                  C('li', {
                    children: re(xt, {
                      to: '/leaderboard',
                      className: f === '/leaderboard' ? Rn.choose : '',
                      children: [
                        C('img', { src: i2 }),
                        C('span', { children: 'Лидборд' }),
                      ],
                    }),
                  }),
                  C('li', {
                    children: re(xt, {
                      to: '/settings',
                      className: f === '/settings' ? Rn.choose : '',
                      children: [
                        C('img', { src: a2 }),
                        C('span', { children: 'Настройки' }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  }
var yh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  sp = ui.createContext && ui.createContext(yh),
  f2 = ['attr', 'size', 'title']
function d2(n, o) {
  if (n == null) return {}
  var l = p2(n, o),
    s,
    a
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n)
    for (a = 0; a < f.length; a++)
      (s = f[a]),
        !(o.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, s) &&
          (l[s] = n[s])
  }
  return l
}
function p2(n, o) {
  if (n == null) return {}
  var l = {}
  for (var s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      if (o.indexOf(s) >= 0) continue
      l[s] = n[s]
    }
  return l
}
function ap(n, o) {
  var l = Object.keys(n)
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n)
    o &&
      (s = s.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable
      })),
      l.push.apply(l, s)
  }
  return l
}
function pi(n) {
  for (var o = 1; o < arguments.length; o++) {
    var l = arguments[o] != null ? arguments[o] : {}
    o % 2
      ? ap(Object(l), !0).forEach(function (s) {
          h2(n, s, l[s])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
      : ap(Object(l)).forEach(function (s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s))
        })
  }
  return n
}
function h2(n, o, l) {
  return (
    (o = m2(o)),
    o in n
      ? Object.defineProperty(n, o, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[o] = l),
    n
  )
}
function m2(n) {
  var o = y2(n, 'string')
  return typeof o == 'symbol' ? o : o + ''
}
function y2(n, o) {
  if (typeof n != 'object' || !n) return n
  var l = n[Symbol.toPrimitive]
  if (l !== void 0) {
    var s = l.call(n, o)
    if (typeof s != 'object') return s
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (o === 'string' ? String : Number)(n)
}
function gh(n) {
  return (
    n &&
    n.map((o, l) =>
      ui.createElement(o.tag, pi({ key: l }, o.attr), gh(o.child))
    )
  )
}
function Ti(n) {
  return o => C(g2, { attr: pi({}, n.attr), ...o, children: gh(n.child) })
}
function g2(n) {
  var o = l => {
    var { attr: s, size: a, title: f } = n,
      d = d2(n, f2),
      m = a || l.size || '1em',
      h
    return (
      l.className && (h = l.className),
      n.className && (h = (h ? h + ' ' : '') + n.className),
      re('svg', {
        stroke: 'currentColor',
        fill: 'currentColor',
        strokeWidth: '0',
        ...l.attr,
        ...s,
        ...d,
        className: h,
        style: pi(pi({ color: n.color || l.color }, l.style), n.style),
        height: m,
        width: m,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [f && C('title', { children: f }), n.children],
      })
    )
  }
  return sp !== void 0 ? C(sp.Consumer, { children: l => o(l) }) : o(yh)
}
function v2(n) {
  return Ti({
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Chat_2' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M12,19.937a1.243,1.243,0,0,1-.833-.319L9.281,17.932a1.531,1.531,0,0,0-1.08-.458H4.561a2.5,2.5,0,0,1-2.5-2.5l.006-8.41a2.5,2.5,0,0,1,2.5-2.5H19.439a2.5,2.5,0,0,1,2.5,2.5v8.411a2.5,2.5,0,0,1-2.5,2.5H15.79a1.483,1.483,0,0,0-1.062.441l-1.895,1.7A1.243,1.243,0,0,1,12,19.937ZM4.567,5.063a1.5,1.5,0,0,0-1.5,1.5l-.006,8.411a1.5,1.5,0,0,0,1.5,1.5H8.2a2.483,2.483,0,0,1,1.767.732l1.864,1.667a.248.248,0,0,0,.333,0l1.874-1.682a2.5,2.5,0,0,1,1.751-.716h3.649a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z',
            },
            child: [],
          },
        ],
      },
    ],
  })(n)
}
function w2(n) {
  return Ti({
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeWidth: '2',
          d: 'M22,3 L2,11 L20.5,19 L22,3 Z M10,20.5 L13,16 M15.5,9.5 L9,14 L9.85884537,20.0119176 C9.93680292,20.5576204 10.0751625,20.5490248 10.1651297,20.009222 L11,15 L15.5,9.5 Z',
        },
        child: [],
      },
    ],
  })(n)
}
function _2(n) {
  return Ti({
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z' },
        child: [],
      },
    ],
  })(n)
}
const S2 = '_uploadContainer_hplev_1',
  E2 = '_hiddenInput_hplev_6',
  x2 = '_fileUpload_hplev_10',
  C2 = '_fileSelected_hplev_20',
  Co = {
    uploadContainer: S2,
    hiddenInput: E2,
    fileUpload: x2,
    fileSelected: C2,
  },
  k2 = ({ onFileSelect: n, accept: o, className: l, selectedFile: s }) => {
    const a = d => {
        var h
        const m = ((h = d.target.files) == null ? void 0 : h[0]) || null
        m && n(m)
      },
      f = Array.isArray(o) ? o.join(', ') : o
    return re('div', {
      className: `${Co.uploadContainer} ${l}`,
      children: [
        C('input', {
          type: 'file',
          id: 'file-upload',
          accept: f,
          className: Co.hiddenInput,
          onChange: a,
        }),
        C('label', {
          htmlFor: 'file-upload',
          className: Co.uploadIcon,
          children: C(_2, {
            className: `${Co.fileUpload} ${s ? Co.fileSelected : ''}`,
          }),
        }),
      ],
    })
  },
  R2 = '_MessageInputContainer_13gsr_2',
  P2 = '_textarea_13gsr_14',
  N2 = '_sendButton_13gsr_28',
  Er = { MessageInputContainer: R2, textarea: P2, sendButton: N2 },
  vh = ({
    placeholder: n,
    className: o,
    onSend: l,
    onCreateTopic: s,
    isTopicModalOpen: a,
  }) => {
    console.log(`isTopicModalOpen: ${a}`)
    const f = _.useRef(a)
    _.useEffect(() => {
      f.current !== a &&
        ((f.current = a), console.log('isTopicModalOpen изменилось:', a))
    }, [a])
    const [d, m] = _.useState(''),
      [h, y] = _.useState(null),
      g = ['.docx', '.png', '.jpeg', '.pdf', '.zip', '.jpg'],
      v = R => {
        m(R.target.value)
      },
      S = () => {
        ;(d.trim() || h) && (l({ text: d, file: h }), m(''), y(null))
      },
      O = () => {
        ;(d.trim() || h) &&
          (s == null || s({ text: d, file: h }), m(''), y(null))
      },
      k = R => {
        y(R), console.log('Выбранный файл:', R)
      },
      A = !d.trim() && !h
    return re('div', {
      className: `${Er.MessageInputContainer} ${o}`,
      children: [
        C(k2, { onFileSelect: k, accept: g, selectedFile: h }),
        C('textarea', {
          placeholder: n,
          onChange: v,
          className: Er.textarea,
          value: d,
        }),
        C('button', {
          onClick: S,
          className: `${Er.sendButton} ${A ? Er.disabled : ''}`,
          disabled: A,
          children: C(w2, {}),
        }),
        a !== !0 &&
          C('button', {
            onClick: O,
            className: `${Er.sendButton} ${A ? Er.disabled : ''}`,
            disabled: A,
            children: C(v2, {}),
          }),
      ],
    })
  },
  T2 = '_modalOverlay_ov6k2_2',
  O2 = '_modalContent_ov6k2_15',
  A2 = '_closeButton_ov6k2_28',
  D2 = '_topicTitle_ov6k2_44',
  L2 = '_commentsContainer_ov6k2_51',
  z2 = '_fileAttachment_ov6k2_71',
  F2 = '_comment_ov6k2_51',
  M2 = '_commentText_ov6k2_90',
  I2 = '_commentDate_ov6k2_96',
  Zt = {
    modalOverlay: T2,
    modalContent: O2,
    closeButton: A2,
    topicTitle: D2,
    commentsContainer: L2,
    fileAttachment: z2,
    comment: F2,
    commentText: M2,
    commentDate: I2,
  },
  j2 = ({ topic: n, onClose: o, onAddComment: l, comments: s }) =>
    C('div', {
      className: Zt.modalOverlay,
      children: re('div', {
        className: Zt.modalContent,
        children: [
          C('button', { className: Zt.closeButton, onClick: o, children: '×' }),
          C('h2', { className: Zt.topicTitle, children: n.text }),
          C('div', {
            className: Zt.commentsContainer,
            children: s.map((a, f) =>
              re(
                'div',
                {
                  className: Zt.comment,
                  children: [
                    C('p', { className: Zt.commentText, children: a.text }),
                    a.file &&
                      C('div', {
                        className: Zt.fileAttachment,
                        children: C('a', {
                          href: URL.createObjectURL(a.file),
                          download: a.file.name,
                          children: a.file.name,
                        }),
                      }),
                    C('span', {
                      className: Zt.commentDate,
                      children: a.timestamp,
                    }),
                  ],
                },
                f
              )
            ),
          }),
          C(vh, {
            placeholder: 'Добавить комментарий',
            onSend: ({ text: a, file: f }) => {
              ;(a.trim() || f) && l({ text: a, file: f })
            },
            isTopicModalOpen: !0,
          }),
        ],
      }),
    }),
  Pu = 'http://localhost:3001',
  B2 = async () => (await fetch(`${Pu}/topics`, {})).json(),
  U2 = async n =>
    (
      await fetch(`${Pu}/topics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: n }),
      })
    ).json(),
  $2 = async (n, o) =>
    (
      await fetch(`${Pu}/topics/${n}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: o }),
      })
    ).json()
function b2(n) {
  return Ti({
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z',
        },
        child: [],
      },
    ],
  })(n)
}
const H2 = '_forum__container_1gjot_1',
  V2 = '_forum__messagesList_1gjot_7',
  W2 = '_forum__message_1gjot_7',
  K2 = '_forum__topic_1gjot_25',
  q2 = '_forum__messageText_1gjot_29',
  Q2 = '_forum__messageDate_1gjot_32',
  J2 = '_fileAttachment_1gjot_50',
  X2 = '_fileIcon_1gjot_60',
  G2 = '_imagePreview_1gjot_65',
  it = {
    forum__container: H2,
    forum__messagesList: V2,
    forum__message: W2,
    forum__topic: K2,
    forum__messageText: q2,
    forum__messageDate: Q2,
    'message--own': '_message--own_1gjot_37',
    'message--other': '_message--other_1gjot_44',
    fileAttachment: J2,
    fileIcon: X2,
    imagePreview: G2,
  },
  Y2 = () => {
    const n = [
        { text: 'Привет! Это обычное сообщение', sender: 'own' },
        {
          text: 'Добро пожаловать в топик! Обсуждаем интересные темы.',
          sender: 'own',
          fileURL: '',
          isTopic: !0,
          comments: [
            {
              text: 'Спасибо за информацию!',
              file: new File(['image content'], 'image.png', {
                type: 'image/png',
              }),
              timestamp: '28/01/2025, 15:00:00',
            },
            {
              text: 'Это очень полезно.',
              file: null,
              timestamp: '28/01/2025, 15:05:00',
            },
          ],
        },
        { text: 'Здесь можно поделиться файлами.', sender: 'other' },
      ],
      o = (v, S) => {
        v.reactions || (v.reactions = {}),
          v.reactions && v.reactions[S]
            ? (v.reactions[S] = v.reactions[S] + 1)
            : (v.reactions[S] = 1)
      }
    _.useEffect(() => {
      B2().then(v => {
        s(
          v.map(S => ({
            text: S.text,
            sender: 'own',
            isTopic: !0,
            comments: S.comments || [],
          }))
        )
      })
    }, [])
    const [l, s] = _.useState([...n]),
      [a, f] = _.useState(null),
      d = v => {
        let S = ''
        v.file &&
          v.file.type.startsWith('image/') &&
          (S = URL.createObjectURL(v.file)),
          s([...l, { ...v, sender: 'own', fileURL: S }])
      },
      m = async v => {
        let S = ''
        v.file &&
          v.file.type.startsWith('image/') &&
          (S = URL.createObjectURL(v.file))
        const O = await U2(v.text)
        s([...l, { text: O.text, sender: 'own', fileURL: S, isTopic: !0 }])
      },
      h = async (v, S) => {
        const O = [...l],
          k = l[v],
          A = await $2(k.text, S.text),
          R = y()
        ;(O[v].comments = O[v].comments || []),
          O[v].comments.push({ text: A.text, timestamp: R }),
          s(O)
      },
      y = () => {
        const v = new Date(),
          S = v.getDate(),
          O = v.getMonth() + 1,
          k = v.getFullYear(),
          A = v.getHours(),
          R = v.getMinutes(),
          L = v.getSeconds()
        return `${S}/${O}/${k}, ${A}:${R}:${L}`
      },
      g = v => {
        if (v.reactions)
          return Object.keys(v.reactions).map(S => {
            var O
            return re(
              'span',
              { children: [S, ' ', (O = v.reactions) == null ? void 0 : O[S]] },
              S
            )
          })
      }
    return (
      console.log('Selected Topic:', a),
      re(Ni, {
        children: [
          C('div', {
            className: it.forum,
            children: re('div', {
              className: it.forum__container,
              children: [
                C('div', {
                  className: it.forum__messagesList,
                  children: l.map((v, S) =>
                    re(
                      'div',
                      {
                        className: `${it.forum__message} ${
                          v.sender === 'own'
                            ? it['message--own']
                            : it['message--other']
                        } ${v.isTopic ? it['message--topic'] : ''}`,
                        onClick: () => v.isTopic && f(v),
                        children: [
                          v.text &&
                            re(Ct, {
                              children: [
                                v.isTopic
                                  ? C('h3', {
                                      className: it.forum__topic,
                                      children: 'Топик',
                                    })
                                  : '',
                                C('p', {
                                  className: it.forum__messageText,
                                  children: v.text,
                                }),
                              ],
                            }),
                          v.file &&
                            C('div', {
                              className: it.fileAttachment,
                              children: v.fileURL
                                ? C('img', {
                                    src: v.fileURL,
                                    alt: 'attachment',
                                    className: it.imagePreview,
                                  })
                                : re(Ct, {
                                    children: [
                                      C(b2, { className: it.fileIcon }),
                                      C('span', {
                                        className: it.forum__messageText,
                                        children: C('a', {
                                          href: URL.createObjectURL(v.file),
                                          download: v.file.name,
                                          children: v.file.name,
                                        }),
                                      }),
                                    ],
                                  }),
                            }),
                          C('span', {
                            className: it.forum__messageDate,
                            children: y(),
                          }),
                          C(n2, { addReaction: O => o(v, O) }),
                          v.reactions && g(v),
                        ],
                      },
                      S
                    )
                  ),
                }),
                C(vh, {
                  placeholder: 'Введите сообщение',
                  onSend: d,
                  onCreateTopic: m,
                  isTopicModalOpen: !!a,
                }),
              ],
            }),
          }),
          a &&
            C(j2, {
              topic: a,
              onClose: () => f(null),
              onAddComment: v =>
                h(
                  l.findIndex(S => S === a),
                  v
                ),
              comments: a.comments || [],
            }),
        ],
      })
    )
  },
  Z2 = () => C(Ct, { children: C(Dr, { children: C(Y2, {}) }) }),
  Gl = {
    'final-page': '_final-page_13nyj_2',
    'final-page__label': '_final-page__label_13nyj_11',
    'final-page__profit': '_final-page__profit_13nyj_15',
    'final-page__restart': '_final-page__restart_13nyj_19',
  },
  ew = ({ gameCounter: n, setIsGameEnded: o }) => {
    const l = _.useCallback(() => {
      o(!1)
    }, [])
    return re('div', {
      className: Gl['final-page'],
      children: [
        C('label', {
          className: Gl['final-page__label'],
          children: 'Игра закончена!',
        }),
        re('label', {
          className: Gl['final-page__profit'],
          children: ['Вы успели заработать ', n, ' монет'],
        }),
        C(xt, {
          onClick: l,
          to: '/game',
          className: Gl['final-page__restart'],
          children: 'Пройти еще раз',
        }),
      ],
    })
  }
function Ve(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `
}
var tw = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  up = tw,
  ba = () => Math.random().toString(36).substring(7).split('').join('.'),
  nw = {
    INIT: `@@redux/INIT${ba()}`,
    REPLACE: `@@redux/REPLACE${ba()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ba()}`,
  },
  hi = nw
function Nu(n) {
  if (typeof n != 'object' || n === null) return !1
  let o = n
  for (; Object.getPrototypeOf(o) !== null; ) o = Object.getPrototypeOf(o)
  return Object.getPrototypeOf(n) === o || Object.getPrototypeOf(n) === null
}
function wh(n, o, l) {
  if (typeof n != 'function') throw new Error(Ve(2))
  if (
    (typeof o == 'function' && typeof l == 'function') ||
    (typeof l == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Ve(0))
  if (
    (typeof o == 'function' && typeof l > 'u' && ((l = o), (o = void 0)),
    typeof l < 'u')
  ) {
    if (typeof l != 'function') throw new Error(Ve(1))
    return l(wh)(n, o)
  }
  let s = n,
    a = o,
    f = new Map(),
    d = f,
    m = 0,
    h = !1
  function y() {
    d === f &&
      ((d = new Map()),
      f.forEach((R, L) => {
        d.set(L, R)
      }))
  }
  function g() {
    if (h) throw new Error(Ve(3))
    return a
  }
  function v(R) {
    if (typeof R != 'function') throw new Error(Ve(4))
    if (h) throw new Error(Ve(5))
    let L = !0
    y()
    const F = m++
    return (
      d.set(F, R),
      function () {
        if (L) {
          if (h) throw new Error(Ve(6))
          ;(L = !1), y(), d.delete(F), (f = null)
        }
      }
    )
  }
  function S(R) {
    if (!Nu(R)) throw new Error(Ve(7))
    if (typeof R.type > 'u') throw new Error(Ve(8))
    if (typeof R.type != 'string') throw new Error(Ve(17))
    if (h) throw new Error(Ve(9))
    try {
      ;(h = !0), (a = s(a, R))
    } finally {
      h = !1
    }
    return (
      (f = d).forEach(F => {
        F()
      }),
      R
    )
  }
  function O(R) {
    if (typeof R != 'function') throw new Error(Ve(10))
    ;(s = R), S({ type: hi.REPLACE })
  }
  function k() {
    const R = v
    return {
      subscribe(L) {
        if (typeof L != 'object' || L === null) throw new Error(Ve(11))
        function F() {
          const b = L
          b.next && b.next(g())
        }
        return F(), { unsubscribe: R(F) }
      },
      [up]() {
        return this
      },
    }
  }
  return (
    S({ type: hi.INIT }),
    { dispatch: S, subscribe: v, getState: g, replaceReducer: O, [up]: k }
  )
}
function rw(n) {
  Object.keys(n).forEach(o => {
    const l = n[o]
    if (typeof l(void 0, { type: hi.INIT }) > 'u') throw new Error(Ve(12))
    if (typeof l(void 0, { type: hi.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Ve(13))
  })
}
function ow(n) {
  const o = Object.keys(n),
    l = {}
  for (let f = 0; f < o.length; f++) {
    const d = o[f]
    typeof n[d] == 'function' && (l[d] = n[d])
  }
  const s = Object.keys(l)
  let a
  try {
    rw(l)
  } catch (f) {
    a = f
  }
  return function (d = {}, m) {
    if (a) throw a
    let h = !1
    const y = {}
    for (let g = 0; g < s.length; g++) {
      const v = s[g],
        S = l[v],
        O = d[v],
        k = S(O, m)
      if (typeof k > 'u') throw (m && m.type, new Error(Ve(14)))
      ;(y[v] = k), (h = h || k !== O)
    }
    return (h = h || s.length !== Object.keys(d).length), h ? y : d
  }
}
function mi(...n) {
  return n.length === 0
    ? o => o
    : n.length === 1
    ? n[0]
    : n.reduce(
        (o, l) =>
          (...s) =>
            o(l(...s))
      )
}
function lw(...n) {
  return o => (l, s) => {
    const a = o(l, s)
    let f = () => {
      throw new Error(Ve(15))
    }
    const d = { getState: a.getState, dispatch: (h, ...y) => f(h, ...y) },
      m = n.map(h => h(d))
    return (f = mi(...m)(a.dispatch)), { ...a, dispatch: f }
  }
}
function iw(n) {
  return Nu(n) && 'type' in n && typeof n.type == 'string'
}
var _h = Symbol.for('immer-nothing'),
  cp = Symbol.for('immer-draftable'),
  mt = Symbol.for('immer-state')
function Lt(n, ...o) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Rr = Object.getPrototypeOf
function Jn(n) {
  return !!n && !!n[mt]
}
function rn(n) {
  var o
  return n
    ? Sh(n) ||
        Array.isArray(n) ||
        !!n[cp] ||
        !!((o = n.constructor) != null && o[cp]) ||
        Ai(n) ||
        Di(n)
    : !1
}
var sw = Object.prototype.constructor.toString()
function Sh(n) {
  if (!n || typeof n != 'object') return !1
  const o = Rr(n)
  if (o === null) return !0
  const l = Object.hasOwnProperty.call(o, 'constructor') && o.constructor
  return l === Object
    ? !0
    : typeof l == 'function' && Function.toString.call(l) === sw
}
function yi(n, o) {
  Oi(n) === 0
    ? Reflect.ownKeys(n).forEach(l => {
        o(l, n[l], n)
      })
    : n.forEach((l, s) => o(s, l, n))
}
function Oi(n) {
  const o = n[mt]
  return o ? o.type_ : Array.isArray(n) ? 1 : Ai(n) ? 2 : Di(n) ? 3 : 0
}
function nu(n, o) {
  return Oi(n) === 2 ? n.has(o) : Object.prototype.hasOwnProperty.call(n, o)
}
function Eh(n, o, l) {
  const s = Oi(n)
  s === 2 ? n.set(o, l) : s === 3 ? n.add(l) : (n[o] = l)
}
function aw(n, o) {
  return n === o ? n !== 0 || 1 / n === 1 / o : n !== n && o !== o
}
function Ai(n) {
  return n instanceof Map
}
function Di(n) {
  return n instanceof Set
}
function Wn(n) {
  return n.copy_ || n.base_
}
function ru(n, o) {
  if (Ai(n)) return new Map(n)
  if (Di(n)) return new Set(n)
  if (Array.isArray(n)) return Array.prototype.slice.call(n)
  const l = Sh(n)
  if (o === !0 || (o === 'class_only' && !l)) {
    const s = Object.getOwnPropertyDescriptors(n)
    delete s[mt]
    let a = Reflect.ownKeys(s)
    for (let f = 0; f < a.length; f++) {
      const d = a[f],
        m = s[d]
      m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
        (m.get || m.set) &&
          (s[d] = {
            configurable: !0,
            writable: !0,
            enumerable: m.enumerable,
            value: n[d],
          })
    }
    return Object.create(Rr(n), s)
  } else {
    const s = Rr(n)
    if (s !== null && l) return { ...n }
    const a = Object.create(s)
    return Object.assign(a, n)
  }
}
function Tu(n, o = !1) {
  return (
    Li(n) ||
      Jn(n) ||
      !rn(n) ||
      (Oi(n) > 1 && (n.set = n.add = n.clear = n.delete = uw),
      Object.freeze(n),
      o && Object.entries(n).forEach(([l, s]) => Tu(s, !0))),
    n
  )
}
function uw() {
  Lt(2)
}
function Li(n) {
  return Object.isFrozen(n)
}
var cw = {}
function Xn(n) {
  const o = cw[n]
  return o || Lt(0, n), o
}
var Do
function xh() {
  return Do
}
function fw(n, o) {
  return {
    drafts_: [],
    parent_: n,
    immer_: o,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  }
}
function fp(n, o) {
  o &&
    (Xn('Patches'),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = o))
}
function ou(n) {
  lu(n), n.drafts_.forEach(dw), (n.drafts_ = null)
}
function lu(n) {
  n === Do && (Do = n.parent_)
}
function dp(n) {
  return (Do = fw(Do, n))
}
function dw(n) {
  const o = n[mt]
  o.type_ === 0 || o.type_ === 1 ? o.revoke_() : (o.revoked_ = !0)
}
function pp(n, o) {
  o.unfinalizedDrafts_ = o.drafts_.length
  const l = o.drafts_[0]
  return (
    n !== void 0 && n !== l
      ? (l[mt].modified_ && (ou(o), Lt(4)),
        rn(n) && ((n = gi(o, n)), o.parent_ || vi(o, n)),
        o.patches_ &&
          Xn('Patches').generateReplacementPatches_(
            l[mt].base_,
            n,
            o.patches_,
            o.inversePatches_
          ))
      : (n = gi(o, l, [])),
    ou(o),
    o.patches_ && o.patchListener_(o.patches_, o.inversePatches_),
    n !== _h ? n : void 0
  )
}
function gi(n, o, l) {
  if (Li(o)) return o
  const s = o[mt]
  if (!s) return yi(o, (a, f) => hp(n, s, o, a, f, l)), o
  if (s.scope_ !== n) return o
  if (!s.modified_) return vi(n, s.base_, !0), s.base_
  if (!s.finalized_) {
    ;(s.finalized_ = !0), s.scope_.unfinalizedDrafts_--
    const a = s.copy_
    let f = a,
      d = !1
    s.type_ === 3 && ((f = new Set(a)), a.clear(), (d = !0)),
      yi(f, (m, h) => hp(n, s, a, m, h, l, d)),
      vi(n, a, !1),
      l &&
        n.patches_ &&
        Xn('Patches').generatePatches_(s, l, n.patches_, n.inversePatches_)
  }
  return s.copy_
}
function hp(n, o, l, s, a, f, d) {
  if (Jn(a)) {
    const m =
        f && o && o.type_ !== 3 && !nu(o.assigned_, s) ? f.concat(s) : void 0,
      h = gi(n, a, m)
    if ((Eh(l, s, h), Jn(h))) n.canAutoFreeze_ = !1
    else return
  } else d && l.add(a)
  if (rn(a) && !Li(a)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return
    gi(n, a),
      (!o || !o.scope_.parent_) &&
        typeof s != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(l, s) &&
        vi(n, a)
  }
}
function vi(n, o, l = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Tu(o, l)
}
function pw(n, o) {
  const l = Array.isArray(n),
    s = {
      type_: l ? 1 : 0,
      scope_: o ? o.scope_ : xh(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: o,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    }
  let a = s,
    f = Ou
  l && ((a = [s]), (f = Lo))
  const { revoke: d, proxy: m } = Proxy.revocable(a, f)
  return (s.draft_ = m), (s.revoke_ = d), m
}
var Ou = {
    get(n, o) {
      if (o === mt) return n
      const l = Wn(n)
      if (!nu(l, o)) return hw(n, l, o)
      const s = l[o]
      return n.finalized_ || !rn(s)
        ? s
        : s === Ha(n.base_, o)
        ? (Va(n), (n.copy_[o] = su(s, n)))
        : s
    },
    has(n, o) {
      return o in Wn(n)
    },
    ownKeys(n) {
      return Reflect.ownKeys(Wn(n))
    },
    set(n, o, l) {
      const s = Ch(Wn(n), o)
      if (s != null && s.set) return s.set.call(n.draft_, l), !0
      if (!n.modified_) {
        const a = Ha(Wn(n), o),
          f = a == null ? void 0 : a[mt]
        if (f && f.base_ === l)
          return (n.copy_[o] = l), (n.assigned_[o] = !1), !0
        if (aw(l, a) && (l !== void 0 || nu(n.base_, o))) return !0
        Va(n), iu(n)
      }
      return (
        (n.copy_[o] === l && (l !== void 0 || o in n.copy_)) ||
          (Number.isNaN(l) && Number.isNaN(n.copy_[o])) ||
          ((n.copy_[o] = l), (n.assigned_[o] = !0)),
        !0
      )
    },
    deleteProperty(n, o) {
      return (
        Ha(n.base_, o) !== void 0 || o in n.base_
          ? ((n.assigned_[o] = !1), Va(n), iu(n))
          : delete n.assigned_[o],
        n.copy_ && delete n.copy_[o],
        !0
      )
    },
    getOwnPropertyDescriptor(n, o) {
      const l = Wn(n),
        s = Reflect.getOwnPropertyDescriptor(l, o)
      return (
        s && {
          writable: !0,
          configurable: n.type_ !== 1 || o !== 'length',
          enumerable: s.enumerable,
          value: l[o],
        }
      )
    },
    defineProperty() {
      Lt(11)
    },
    getPrototypeOf(n) {
      return Rr(n.base_)
    },
    setPrototypeOf() {
      Lt(12)
    },
  },
  Lo = {}
yi(Ou, (n, o) => {
  Lo[n] = function () {
    return (arguments[0] = arguments[0][0]), o.apply(this, arguments)
  }
})
Lo.deleteProperty = function (n, o) {
  return Lo.set.call(this, n, o, void 0)
}
Lo.set = function (n, o, l) {
  return Ou.set.call(this, n[0], o, l, n[0])
}
function Ha(n, o) {
  const l = n[mt]
  return (l ? Wn(l) : n)[o]
}
function hw(n, o, l) {
  var a
  const s = Ch(o, l)
  return s
    ? 'value' in s
      ? s.value
      : (a = s.get) == null
      ? void 0
      : a.call(n.draft_)
    : void 0
}
function Ch(n, o) {
  if (!(o in n)) return
  let l = Rr(n)
  for (; l; ) {
    const s = Object.getOwnPropertyDescriptor(l, o)
    if (s) return s
    l = Rr(l)
  }
}
function iu(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && iu(n.parent_))
}
function Va(n) {
  n.copy_ || (n.copy_ = ru(n.base_, n.scope_.immer_.useStrictShallowCopy_))
}
var mw = class {
  constructor(n) {
    ;(this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (o, l, s) => {
        if (typeof o == 'function' && typeof l != 'function') {
          const f = l
          l = o
          const d = this
          return function (h = f, ...y) {
            return d.produce(h, g => l.call(this, g, ...y))
          }
        }
        typeof l != 'function' && Lt(6),
          s !== void 0 && typeof s != 'function' && Lt(7)
        let a
        if (rn(o)) {
          const f = dp(this),
            d = su(o, void 0)
          let m = !0
          try {
            ;(a = l(d)), (m = !1)
          } finally {
            m ? ou(f) : lu(f)
          }
          return fp(f, s), pp(a, f)
        } else if (!o || typeof o != 'object') {
          if (
            ((a = l(o)),
            a === void 0 && (a = o),
            a === _h && (a = void 0),
            this.autoFreeze_ && Tu(a, !0),
            s)
          ) {
            const f = [],
              d = []
            Xn('Patches').generateReplacementPatches_(o, a, f, d), s(f, d)
          }
          return a
        } else Lt(1, o)
      }),
      (this.produceWithPatches = (o, l) => {
        if (typeof o == 'function')
          return (d, ...m) => this.produceWithPatches(d, h => o(h, ...m))
        let s, a
        return [
          this.produce(o, l, (d, m) => {
            ;(s = d), (a = m)
          }),
          s,
          a,
        ]
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy)
  }
  createDraft(n) {
    rn(n) || Lt(8), Jn(n) && (n = yw(n))
    const o = dp(this),
      l = su(n, void 0)
    return (l[mt].isManual_ = !0), lu(o), l
  }
  finishDraft(n, o) {
    const l = n && n[mt]
    ;(!l || !l.isManual_) && Lt(9)
    const { scope_: s } = l
    return fp(s, o), pp(void 0, s)
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n
  }
  applyPatches(n, o) {
    let l
    for (l = o.length - 1; l >= 0; l--) {
      const a = o[l]
      if (a.path.length === 0 && a.op === 'replace') {
        n = a.value
        break
      }
    }
    l > -1 && (o = o.slice(l + 1))
    const s = Xn('Patches').applyPatches_
    return Jn(n) ? s(n, o) : this.produce(n, a => s(a, o))
  }
}
function su(n, o) {
  const l = Ai(n)
    ? Xn('MapSet').proxyMap_(n, o)
    : Di(n)
    ? Xn('MapSet').proxySet_(n, o)
    : pw(n, o)
  return (o ? o.scope_ : xh()).drafts_.push(l), l
}
function yw(n) {
  return Jn(n) || Lt(10, n), kh(n)
}
function kh(n) {
  if (!rn(n) || Li(n)) return n
  const o = n[mt]
  let l
  if (o) {
    if (!o.modified_) return o.base_
    ;(o.finalized_ = !0), (l = ru(n, o.scope_.immer_.useStrictShallowCopy_))
  } else l = ru(n, !0)
  return (
    yi(l, (s, a) => {
      Eh(l, s, kh(a))
    }),
    o && (o.finalized_ = !1),
    l
  )
}
var yt = new mw(),
  Rh = yt.produce
yt.produceWithPatches.bind(yt)
yt.setAutoFreeze.bind(yt)
yt.setUseStrictShallowCopy.bind(yt)
yt.applyPatches.bind(yt)
yt.createDraft.bind(yt)
yt.finishDraft.bind(yt)
function Ph(n) {
  return ({ dispatch: l, getState: s }) =>
    a =>
    f =>
      typeof f == 'function' ? f(l, s, n) : a(f)
}
var gw = Ph(),
  vw = Ph,
  ww =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? mi
              : mi.apply(null, arguments)
        },
  _w = n => n && typeof n.match == 'function'
function Po(n, o) {
  function l(...s) {
    if (o) {
      let a = o(...s)
      if (!a) throw new Error(nn(0))
      return {
        type: n,
        payload: a.payload,
        ...('meta' in a && { meta: a.meta }),
        ...('error' in a && { error: a.error }),
      }
    }
    return { type: n, payload: s[0] }
  }
  return (
    (l.toString = () => `${n}`),
    (l.type = n),
    (l.match = s => iw(s) && s.type === n),
    l
  )
}
var Nh = class Ro extends Array {
  constructor(...o) {
    super(...o), Object.setPrototypeOf(this, Ro.prototype)
  }
  static get [Symbol.species]() {
    return Ro
  }
  concat(...o) {
    return super.concat.apply(this, o)
  }
  prepend(...o) {
    return o.length === 1 && Array.isArray(o[0])
      ? new Ro(...o[0].concat(this))
      : new Ro(...o.concat(this))
  }
}
function mp(n) {
  return rn(n) ? Rh(n, () => {}) : n
}
function yp(n, o, l) {
  return n.has(o) ? n.get(o) : n.set(o, l(o)).get(o)
}
function Sw(n) {
  return typeof n == 'boolean'
}
var Ew = () =>
    function (o) {
      const {
        thunk: l = !0,
        immutableCheck: s = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: f = !0,
      } = o ?? {}
      let d = new Nh()
      return l && (Sw(l) ? d.push(gw) : d.push(vw(l.extraArgument))), d
    },
  xw = 'RTK_autoBatch',
  gp = n => o => {
    setTimeout(o, n)
  },
  Cw =
    (n = { type: 'raf' }) =>
    o =>
    (...l) => {
      const s = o(...l)
      let a = !0,
        f = !1,
        d = !1
      const m = new Set(),
        h =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
            ? typeof window < 'u' && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : gp(10)
            : n.type === 'callback'
            ? n.queueNotification
            : gp(n.timeout),
        y = () => {
          ;(d = !1), f && ((f = !1), m.forEach(g => g()))
        }
      return Object.assign({}, s, {
        subscribe(g) {
          const v = () => a && g(),
            S = s.subscribe(v)
          return (
            m.add(g),
            () => {
              S(), m.delete(g)
            }
          )
        },
        dispatch(g) {
          var v
          try {
            return (
              (a = !((v = g == null ? void 0 : g.meta) != null && v[xw])),
              (f = !a),
              f && (d || ((d = !0), h(y))),
              s.dispatch(g)
            )
          } finally {
            a = !0
          }
        },
      })
    },
  kw = n =>
    function (l) {
      const { autoBatch: s = !0 } = l ?? {}
      let a = new Nh(n)
      return s && a.push(Cw(typeof s == 'object' ? s : void 0)), a
    }
function Rw(n) {
  const o = Ew(),
    {
      reducer: l = void 0,
      middleware: s,
      devTools: a = !0,
      preloadedState: f = void 0,
      enhancers: d = void 0,
    } = n || {}
  let m
  if (typeof l == 'function') m = l
  else if (Nu(l)) m = ow(l)
  else throw new Error(nn(1))
  let h
  typeof s == 'function' ? (h = s(o)) : (h = o())
  let y = mi
  a && (y = ww({ trace: !1, ...(typeof a == 'object' && a) }))
  const g = lw(...h),
    v = kw(g)
  let S = typeof d == 'function' ? d(v) : v()
  const O = y(...S)
  return wh(m, f, O)
}
function Th(n) {
  const o = {},
    l = []
  let s
  const a = {
    addCase(f, d) {
      const m = typeof f == 'string' ? f : f.type
      if (!m) throw new Error(nn(28))
      if (m in o) throw new Error(nn(29))
      return (o[m] = d), a
    },
    addMatcher(f, d) {
      return l.push({ matcher: f, reducer: d }), a
    },
    addDefaultCase(f) {
      return (s = f), a
    },
  }
  return n(a), [o, l, s]
}
function Pw(n) {
  return typeof n == 'function'
}
function Nw(n, o) {
  let [l, s, a] = Th(o),
    f
  if (Pw(n)) f = () => mp(n())
  else {
    const m = mp(n)
    f = () => m
  }
  function d(m = f(), h) {
    let y = [
      l[h.type],
      ...s.filter(({ matcher: g }) => g(h)).map(({ reducer: g }) => g),
    ]
    return (
      y.filter(g => !!g).length === 0 && (y = [a]),
      y.reduce((g, v) => {
        if (v)
          if (Jn(g)) {
            const O = v(g, h)
            return O === void 0 ? g : O
          } else {
            if (rn(g)) return Rh(g, S => v(S, h))
            {
              const S = v(g, h)
              if (S === void 0) {
                if (g === null) return g
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                )
              }
              return S
            }
          }
        return g
      }, m)
    )
  }
  return (d.getInitialState = f), d
}
var Tw = (n, o) => (_w(n) ? n.match(o) : n(o))
function Ow(...n) {
  return o => n.some(l => Tw(l, o))
}
var Aw = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Dw = (n = 21) => {
    let o = '',
      l = n
    for (; l--; ) o += Aw[(Math.random() * 64) | 0]
    return o
  },
  Lw = ['name', 'message', 'stack', 'code'],
  Wa = class {
    constructor(n, o) {
      He(this, '_type')
      ;(this.payload = n), (this.meta = o)
    }
  },
  vp = class {
    constructor(n, o) {
      He(this, '_type')
      ;(this.payload = n), (this.meta = o)
    }
  },
  zw = n => {
    if (typeof n == 'object' && n !== null) {
      const o = {}
      for (const l of Lw) typeof n[l] == 'string' && (o[l] = n[l])
      return o
    }
    return { message: String(n) }
  },
  jo = (() => {
    function n(o, l, s) {
      const a = Po(o + '/fulfilled', (h, y, g, v) => ({
          payload: h,
          meta: {
            ...(v || {}),
            arg: g,
            requestId: y,
            requestStatus: 'fulfilled',
          },
        })),
        f = Po(o + '/pending', (h, y, g) => ({
          payload: void 0,
          meta: {
            ...(g || {}),
            arg: y,
            requestId: h,
            requestStatus: 'pending',
          },
        })),
        d = Po(o + '/rejected', (h, y, g, v, S) => ({
          payload: v,
          error: ((s && s.serializeError) || zw)(h || 'Rejected'),
          meta: {
            ...(S || {}),
            arg: g,
            requestId: y,
            rejectedWithValue: !!v,
            requestStatus: 'rejected',
            aborted: (h == null ? void 0 : h.name) === 'AbortError',
            condition: (h == null ? void 0 : h.name) === 'ConditionError',
          },
        }))
      function m(h) {
        return (y, g, v) => {
          const S = s != null && s.idGenerator ? s.idGenerator(h) : Dw(),
            O = new AbortController()
          let k, A
          function R(F) {
            ;(A = F), O.abort()
          }
          const L = (async function () {
            var b, V
            let F
            try {
              let J =
                (b = s == null ? void 0 : s.condition) == null
                  ? void 0
                  : b.call(s, h, { getState: g, extra: v })
              if ((Mw(J) && (J = await J), J === !1 || O.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.',
                }
              const te = new Promise((Y, se) => {
                ;(k = () => {
                  se({ name: 'AbortError', message: A || 'Aborted' })
                }),
                  O.signal.addEventListener('abort', k)
              })
              y(
                f(
                  S,
                  h,
                  (V = s == null ? void 0 : s.getPendingMeta) == null
                    ? void 0
                    : V.call(
                        s,
                        { requestId: S, arg: h },
                        { getState: g, extra: v }
                      )
                )
              ),
                (F = await Promise.race([
                  te,
                  Promise.resolve(
                    l(h, {
                      dispatch: y,
                      getState: g,
                      extra: v,
                      requestId: S,
                      signal: O.signal,
                      abort: R,
                      rejectWithValue: (Y, se) => new Wa(Y, se),
                      fulfillWithValue: (Y, se) => new vp(Y, se),
                    })
                  ).then(Y => {
                    if (Y instanceof Wa) throw Y
                    return Y instanceof vp
                      ? a(Y.payload, S, h, Y.meta)
                      : a(Y, S, h)
                  }),
                ]))
            } catch (J) {
              F =
                J instanceof Wa ? d(null, S, h, J.payload, J.meta) : d(J, S, h)
            } finally {
              k && O.signal.removeEventListener('abort', k)
            }
            return (
              (s &&
                !s.dispatchConditionRejection &&
                d.match(F) &&
                F.meta.condition) ||
                y(F),
              F
            )
          })()
          return Object.assign(L, {
            abort: R,
            requestId: S,
            arg: h,
            unwrap() {
              return L.then(Fw)
            },
          })
        }
      }
      return Object.assign(m, {
        pending: f,
        rejected: d,
        fulfilled: a,
        settled: Ow(d, a),
        typePrefix: o,
      })
    }
    return (n.withTypes = () => n), n
  })()
function Fw(n) {
  if (n.meta && n.meta.rejectedWithValue) throw n.payload
  if (n.error) throw n.error
  return n.payload
}
function Mw(n) {
  return n !== null && typeof n == 'object' && typeof n.then == 'function'
}
var Iw = Symbol.for('rtk-slice-createasyncthunk')
function jw(n, o) {
  return `${n}/${o}`
}
function Bw({ creators: n } = {}) {
  var l
  const o = (l = n == null ? void 0 : n.asyncThunk) == null ? void 0 : l[Iw]
  return function (a) {
    const { name: f, reducerPath: d = f } = a
    if (!f) throw new Error(nn(11))
    const m =
        (typeof a.reducers == 'function' ? a.reducers($w()) : a.reducers) || {},
      h = Object.keys(m),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(B, b) {
          const V = typeof B == 'string' ? B : B.type
          if (!V) throw new Error(nn(12))
          if (V in y.sliceCaseReducersByType) throw new Error(nn(13))
          return (y.sliceCaseReducersByType[V] = b), g
        },
        addMatcher(B, b) {
          return y.sliceMatchers.push({ matcher: B, reducer: b }), g
        },
        exposeAction(B, b) {
          return (y.actionCreators[B] = b), g
        },
        exposeCaseReducer(B, b) {
          return (y.sliceCaseReducersByName[B] = b), g
        },
      }
    h.forEach(B => {
      const b = m[B],
        V = {
          reducerName: B,
          type: jw(f, B),
          createNotation: typeof a.reducers == 'function',
        }
      Hw(b) ? Ww(V, b, g, o) : bw(V, b, g)
    })
    function v() {
      const [B = {}, b = [], V = void 0] =
          typeof a.extraReducers == 'function'
            ? Th(a.extraReducers)
            : [a.extraReducers],
        J = { ...B, ...y.sliceCaseReducersByType }
      return Nw(a.initialState, te => {
        for (let Y in J) te.addCase(Y, J[Y])
        for (let Y of y.sliceMatchers) te.addMatcher(Y.matcher, Y.reducer)
        for (let Y of b) te.addMatcher(Y.matcher, Y.reducer)
        V && te.addDefaultCase(V)
      })
    }
    const S = B => B,
      O = new Map()
    let k
    function A(B, b) {
      return k || (k = v()), k(B, b)
    }
    function R() {
      return k || (k = v()), k.getInitialState()
    }
    function L(B, b = !1) {
      function V(te) {
        let Y = te[B]
        return typeof Y > 'u' && b && (Y = R()), Y
      }
      function J(te = S) {
        const Y = yp(O, b, () => new WeakMap())
        return yp(Y, te, () => {
          const se = {}
          for (const [xe, We] of Object.entries(a.selectors ?? {}))
            se[xe] = Uw(We, te, R, b)
          return se
        })
      }
      return {
        reducerPath: B,
        getSelectors: J,
        get selectors() {
          return J(V)
        },
        selectSlice: V,
      }
    }
    const F = {
      name: f,
      reducer: A,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: R,
      ...L(d),
      injectInto(B, { reducerPath: b, ...V } = {}) {
        const J = b ?? d
        return (
          B.inject({ reducerPath: J, reducer: A }, V), { ...F, ...L(J, !0) }
        )
      },
    }
    return F
  }
}
function Uw(n, o, l, s) {
  function a(f, ...d) {
    let m = o(f)
    return typeof m > 'u' && s && (m = l()), n(m, ...d)
  }
  return (a.unwrapped = n), a
}
var Oh = Bw()
function $w() {
  function n(o, l) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: o, ...l }
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(o) {
        return Object.assign(
          {
            [o.name](...l) {
              return o(...l)
            },
          }[o.name],
          { _reducerDefinitionType: 'reducer' }
        )
      },
      preparedReducer(o, l) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: o,
          reducer: l,
        }
      },
      asyncThunk: n,
    }
  )
}
function bw({ type: n, reducerName: o, createNotation: l }, s, a) {
  let f, d
  if ('reducer' in s) {
    if (l && !Vw(s)) throw new Error(nn(17))
    ;(f = s.reducer), (d = s.prepare)
  } else f = s
  a.addCase(n, f)
    .exposeCaseReducer(o, f)
    .exposeAction(o, d ? Po(n, d) : Po(n))
}
function Hw(n) {
  return n._reducerDefinitionType === 'asyncThunk'
}
function Vw(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare'
}
function Ww({ type: n, reducerName: o }, l, s, a) {
  if (!a) throw new Error(nn(18))
  const {
      payloadCreator: f,
      fulfilled: d,
      pending: m,
      rejected: h,
      settled: y,
      options: g,
    } = l,
    v = a(n, f, g)
  s.exposeAction(o, v),
    d && s.addCase(v.fulfilled, d),
    m && s.addCase(v.pending, m),
    h && s.addCase(v.rejected, h),
    y && s.addMatcher(v.settled, y),
    s.exposeCaseReducer(o, {
      fulfilled: d || Yl,
      pending: m || Yl,
      rejected: h || Yl,
      settled: y || Yl,
    })
}
function Yl() {}
function nn(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `
}
const No = jo('auth/loadSignin', async (n, o) => o.extra.getCurrentUser())
jo('auth/authByCode', async (n, { dispatch: o, extra: l }) => {
  await l.loginWithCode(n), o(No())
})
const au = n => {
    if (typeof localStorage > 'u') return null
    try {
      const o = localStorage.getItem(n)
      return o ? JSON.parse(o) : null
    } catch (o) {
      return console.error(`Ошибка парсинга localStorage ключа ${n}:`, o), null
    }
  },
  Kw = { user: au('user'), loading: !1, error: null },
  si = jo(
    'auth/signin',
    async ({ login: n, password: o }, { extra: l, rejectWithValue: s }) => {
      const a = l
      try {
        return (
          await a.signin({ login: n, password: o }), await a.getCurrentUser()
        )
      } catch (f) {
        return s(f.message)
      }
    }
  ),
  uu = jo(
    'auth/signinWithYandex',
    async ({ CodeAndCid: n }, { extra: o, rejectWithValue: l }) => {
      const s = o
      try {
        return await s.signinWithYandex(n), await s.getCurrentUser()
      } catch (a) {
        return l(a.message)
      }
    }
  ),
  Ah = Oh({
    name: 'auth',
    initialState: Kw,
    reducers: {
      logout: n => {
        ;(n.user = null),
          typeof localStorage < 'u' && localStorage.removeItem('user')
      },
      setUser: (n, o) => {
        n.user = o.payload
      },
    },
    extraReducers: n => {
      n.addCase(No.pending, o => {
        ;(o.loading = !0), (o.error = null)
      })
        .addCase(No.fulfilled, (o, l) => {
          ;(o.loading = !1),
            (o.user = l.payload),
            localStorage.setItem('user', JSON.stringify(l.payload))
        })
        .addCase(No.rejected, (o, l) => {
          ;(o.loading = !1), (o.error = l.payload)
        })
        .addCase(si.pending, o => {
          ;(o.loading = !0), (o.error = null)
        })
        .addCase(si.fulfilled, (o, l) => {
          ;(o.loading = !1),
            (o.user = l.payload),
            localStorage.setItem('user', JSON.stringify(l.payload))
        })
        .addCase(si.rejected, (o, l) => {
          ;(o.loading = !1), (o.error = l.payload)
        })
        .addCase(uu.fulfilled, (o, l) => {
          ;(o.loading = !1),
            (o.user = l.payload),
            localStorage.setItem('user', JSON.stringify(l.payload))
        })
        .addCase(uu.pending, o => {
          ;(o.loading = !0), (o.error = null)
        })
    },
  }),
  { setUser: TS } = Ah.actions,
  qw = Ah.reducer,
  Qw = '/assets/humster-birthday-DCwPXhLJ.png',
  Jw = '/assets/humster-grey-BtdYWjPC.png',
  wp = '/assets/humster-TM_28XnI.png',
  Ht = {
    'base-dark': {
      humster: wp,
      color: {
        text: '#ffffff',
        block: '#32363c',
        large_circle_top: '#5155DA',
        large_circle_bottom: '#282D74',
        small_circle_top: '#35389e',
        small_circle_bottom: '#1c2848',
        background: '#2c2f35',
        blok_background: '#32363c',
        border: '#F9D838',
        button: '#464ab7',
      },
    },
    'base-light': {
      humster: wp,
      color: {
        text: '#2c2f35',
        block: '#dde1e9',
        large_circle_top: '#5155DA',
        large_circle_bottom: '#282D74',
        small_circle_top: '#35389e',
        small_circle_bottom: '#1c2848',
        background: '#ECEFF1',
        blok_background: '#dde1e9',
        border: '#F9D838',
        button: '#464ab7',
      },
    },
    'birthday-light': {
      humster: Qw,
      color: {
        text: '#3e3b32',
        block: '#dde1e9',
        large_circle_top: '#c5f9d6',
        large_circle_bottom: '#aedfbe',
        small_circle_top: '#c5f9d6',
        small_circle_bottom: '#aedfbe',
        background: '#ECEFF1',
        blok_background: '#dde1e9',
        border: '#aa96da',
        button: '#feffd3',
      },
    },
    'grey-dark': {
      humster: Jw,
      color: {
        text: '#ffffff',
        block: '#32363c',
        large_circle_top: '#969696',
        large_circle_bottom: '#393939',
        small_circle_top: '#969696',
        small_circle_bottom: '#393939',
        background: '#2c2f35',
        blok_background: '#32363c',
        border: '#969696',
        button: '#484848',
      },
    },
  },
  Au = _.createContext({})
function _p(n) {
  return Math.floor(Math.random() * n)
}
const Xw = '/assets/emerald-B9P6pWKr.png'
class Gw {
  constructor(o, l) {
    He(this, 'animationFrameId', null)
    He(this, 'model')
    He(this, 'theme')
    He(this, 'circle_x')
    He(this, 'circle_y')
    He(this, 'circle_size')
    He(this, 'humster_img')
    He(this, 'emerald_img')
    He(this, 'context')
    He(this, 'isEmeraldLoaded', !1)
    He(this, 'needsRedraw', !0)
    He(this, 'animation', () => {
      if (
        ((this.animationFrameId = window.requestAnimationFrame(this.animation)),
        this.model.expectation > 0)
      ) {
        this.model.expectation--, (this.needsRedraw = !0)
        return
      }
      this.model.height === this.model.emerald_y || this.model.dop_count === 0
        ? (this.drawCanvas(),
          (this.model.emerald_x = 0),
          (this.model.emerald_y = 0),
          (this.model.dop_count = 50),
          (this.model.expectation = _p(50) * 100),
          (this.needsRedraw = !0))
        : this.redraw(),
        this.needsRedraw &&
          (this.drawCanvas(), this.drawEmerald(), (this.needsRedraw = !1))
    })
    const s = document.getElementById('canvas')
    if (
      ((this.context = s.getContext('2d')),
      (this.theme = l),
      console.log('this.theme!.humster', l),
      !this.theme.humster)
    )
      throw new Error('Theme is missing humster image URL')
    ;(this.circle_x = o.width / 2),
      (this.circle_y = o.height / 2),
      (this.circle_size = Math.min(o.width, o.height - 100)),
      (this.model = o),
      (this.humster_img = new Image()),
      (this.humster_img.src = this.theme.humster),
      (this.humster_img.onload = () => {
        console.log('Humster image loaded successfully'),
          (this.needsRedraw = !0)
      }),
      (this.humster_img.onerror = () => {
        console.error('Failed to load humster image:', this.theme.humster)
      }),
      (this.emerald_img = new Image()),
      (this.emerald_img.src = Xw),
      (this.emerald_img.onload = () => {
        console.log('Emerald image loaded successfully'),
          (this.isEmeraldLoaded = !0),
          (this.needsRedraw = !0)
      }),
      (this.emerald_img.onerror = () => {
        console.error('Failed to load emerald image:', this.emerald_img.src),
          (this.isEmeraldLoaded = !1)
      }),
      console.log(this.humster_img),
      this.animation()
  }
  drawCanvas() {
    this.context.clearRect(0, 0, this.model.width, this.model.height),
      this.topMenu(),
      this.drawCircle(),
      this.context.drawImage(
        this.humster_img,
        this.circle_x - this.humster_img.width / 2,
        this.circle_y - this.humster_img.height / 2
      ),
      this.bottomMenu()
  }
  topMenu() {
    ;(this.context.fillStyle = this.theme.color.block),
      this.context.fillRect(
        this.model.width * 0.055,
        20,
        this.model.width * 0.25,
        50
      ),
      (this.context.font = '14px Arial'),
      (this.context.fillStyle = '#F79841')
    const o = this.model.width * 0.055 + this.model.width * 0.12
    this.context.fillText('Монет за клик', o - 45, 40),
      (this.context.fillStyle = this.theme.color.text),
      this.context.fillText(`+${this.model.per}`, o, 60),
      this.drawDolar(o, 60, 12),
      (this.context.fillStyle = this.theme.color.block),
      this.context.fillRect(
        this.model.width * 0.355,
        20,
        this.model.width * 0.25,
        50
      ),
      (this.context.font = '14px Arial'),
      (this.context.fillStyle = '#6F72E2')
    const l = this.model.width * 0.355 + this.model.width * 0.12
    this.context.fillText(
      `До ${this.model.current_level + 1} уровня`,
      l - 35,
      40
    ),
      (this.context.fillStyle = this.theme.color.text)
    const s =
      this.model.transitional_meaning -
      this.model.current_meaning -
      this.model.counter
    this.context.fillText(`${s}`, l - 10, 60),
      (this.context.fillStyle = this.theme.color.block),
      this.context.fillRect(
        this.model.width * 0.655,
        20,
        this.model.width * 0.25,
        50
      ),
      (this.context.font = '14px Arial'),
      (this.context.fillStyle = '#84CB69')
    const a = this.model.width * 0.655 + this.model.width * 0.12
    this.context.fillText('Доход в час', a - 35, 40),
      (this.context.fillStyle = this.theme.color.text),
      this.context.fillText(`+${this.model.per_hour}`, a, 60),
      this.drawDolar(a, 60, 12),
      (this.context.font = '50px Arial'),
      (this.context.fillStyle = this.theme.color.text)
    const f = (this.model.counter + '').length * 10
    this.context.fillText(
      this.model.counter.toString(),
      this.model.width / 2 - f,
      130
    ),
      this.drawDolar(this.model.width / 2 - f, 130, 30)
  }
  drawDolar(o, l, s) {
    this.context.beginPath(),
      (this.context.fillStyle = '#f9e160'),
      this.context.arc(o - s, l - s / 2, s * 0.7, 0, 360),
      this.context.closePath(),
      this.context.fill(),
      this.context.beginPath()
    const a = this.context.createRadialGradient(
      o - s,
      l - s / 2,
      0,
      o - s,
      l - s / 2,
      s / 2
    )
    a.addColorStop(0.5, '#fec51c'),
      a.addColorStop(1, '#fe891ca5'),
      (this.context.fillStyle = a),
      this.context.arc(o - s, l - s / 2, s / 2, 0, 360),
      this.context.closePath(),
      this.context.fill(),
      (this.context.font = `${s * 0.8}px Arial`),
      (this.context.fillStyle = this.theme.color.text),
      this.context.fillText('$', o - s * 1.2, l - s / 4)
  }
  drawEmerald() {
    this.isEmeraldLoaded &&
    this.emerald_img.complete &&
    this.emerald_img.naturalWidth !== 0
      ? this.context.drawImage(
          this.emerald_img,
          this.model.emerald_x,
          this.model.emerald_y
        )
      : console.warn('Emerald image is not loaded yet or is broken')
  }
  drawCircle() {
    this.context.beginPath()
    const o =
        this.model.height > this.model.width
          ? this.circle_size * 0.4
          : this.circle_size * 0.3,
      l = this.context.createLinearGradient(
        0,
        this.circle_y - o,
        0,
        this.circle_y + o
      )
    l.addColorStop(0.2, this.theme.color.large_circle_top),
      l.addColorStop(1, this.theme.color.large_circle_bottom),
      (this.context.fillStyle = l),
      this.context.arc(this.circle_x, this.circle_y, o, 0, 360),
      this.context.closePath(),
      this.context.fill(),
      this.context.beginPath()
    const s =
        this.model.height > this.model.width
          ? this.circle_size * 0.35
          : this.circle_size * 0.25,
      a = this.context.createRadialGradient(
        this.circle_x,
        this.circle_y,
        0,
        this.circle_x,
        this.circle_y,
        s
      )
    a.addColorStop(0.6, this.theme.color.small_circle_top),
      a.addColorStop(1, this.theme.color.small_circle_bottom),
      (this.context.fillStyle = a),
      this.context.arc(this.circle_x, this.circle_y, s, 0, 360),
      this.context.closePath(),
      this.context.fill()
  }
  bottomMenu() {
    ;(this.context.font = '14px Arial'),
      (this.context.fillStyle = '#f7c243'),
      this.context.fillText('⚡️', 40, this.model.height - 40),
      (this.context.fillStyle = this.theme.color.text),
      this.context.fillText(
        `${this.model.current_meaning + this.model.counter} / ${
          this.model.transitional_meaning
        }`,
        60,
        this.model.height - 40
      ),
      this.context.fillText(
        `${this.model.current_level} уровень`,
        this.model.width - 110,
        this.model.height - 40
      )
  }
  redraw() {
    this.model.emerald_x === 0 &&
      this.model.emerald_y === 0 &&
      ((this.model.emerald_x = _p(this.model.width - 100)),
      (this.needsRedraw = !0)),
      (this.model.emerald_y = this.model.emerald_y + 1),
      (this.needsRedraw = !0)
  }
}
let st = {
  emerald_y: 0,
  emerald_x: 0,
  expectation: 0,
  dop_count: 50,
  counter: 0,
  width: 0,
  height: 0,
  per: 1,
  per_hour: 643,
  current_level: 1,
  current_meaning: 100,
  transitional_meaning: 6500,
}
class Yw {
  constructor(o, l, s) {
    He(this, 'view')
    ;(st.width = o), (st.height = l), (this.view = new Gw(st, s))
    const a = document.getElementById('canvas')
    a.onclick = f => {
      const d = a.getBoundingClientRect(),
        m = f.clientX - d.left,
        h = f.clientY - d.top
      ;(st.counter = st.counter + st.per),
        Math.abs(st.emerald_x + 40 - m) < 40 &&
          Math.abs(st.emerald_y + 30 - h) < 60 &&
          ((st.dop_count = st.dop_count - 10), (st.counter = st.counter + 10)),
        this.view.drawCanvas()
    }
  }
}
const Zw = '_humster_canvas_1t12g_1',
  e_ = { humster_canvas: Zw },
  t_ = ({
    setIsGameStarted: n,
    setIsGameEnded: o,
    setGameCounter: l,
    isGameStarted: s,
  }) => {
    const [a, f] = _.useState(window.innerWidth),
      [d, m] = _.useState(Math.round(window.innerHeight * 0.95 - 20)),
      h = () => {
        fetch(`${Oo}/leaderboard`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: {
              id: au('user').id,
              hamsterScore: st.counter,
              userName: au('user').first_name,
            },
            ratingFieldName: 'hamsterScore',
          }),
        })
          .then(g => g)
          .catch(g => console.error('Ошибка:', g))
      },
      { theme: y } = _.useContext(Au)
    return (
      console.log('Theme in HumsterPage:', y),
      y
        ? (_.useEffect(() => {
            const g = new Yw(a, d, y)
            s &&
              setTimeout(() => {
                n(!1), o(!0), l(st.counter), h()
              }, 3e4),
              window.addEventListener('beforeunload', () =>
                window.cancelAnimationFrame(g.view.animationFrameId)
              ),
              window.addEventListener('resize', () => {
                f(window.innerWidth), m(window.innerHeight * 0.9 - 20)
              })
          }, []),
          C(Ct, {
            children: C('canvas', {
              id: 'canvas',
              width: a,
              height: d,
              className: e_.humster_canvas,
            }),
          }))
        : C('div', {
            children: 'Тема не загружена. Пожалуйста, обновите страницу.',
          })
    )
  },
  Ka = {
    'start-page': '_start-page_1fpi7_2',
    'start-page__button': '_start-page__button_1fpi7_8',
    'button-text': '_button-text_1fpi7_24',
  },
  n_ = ({ setIsGameStarted: n }) => {
    _.useEffect(() => {
      n(!1)
    }, [])
    const o = _.useCallback(() => {
      n(!0)
    }, [])
    return C('div', {
      className: Ka['start-page'],
      children: C('div', {
        className: Ka['start-page__button'],
        children: C(xt, {
          onClick: o,
          to: '/game',
          className: Ka['button-text'],
          children: 'СТАРТ',
        }),
      }),
    })
  },
  r_ = () => {
    const [n, o] = _.useState(!1),
      [l, s] = _.useState(!1),
      [a, f] = _.useState(0)
    return C(Ct, {
      children: C(Dr, {
        children: C(Ni, {
          children: n
            ? C(t_, {
                setIsGameStarted: o,
                setIsGameEnded: s,
                setGameCounter: f,
                isGameStarted: n,
              })
            : l
            ? C(ew, { gameCounter: a, setIsGameEnded: s })
            : C(n_, { setIsGameStarted: o }),
        }),
      }),
    })
  },
  o_ = '_leaderboard_1kzep_2',
  l_ = '_leaderboard__title_1kzep_8',
  i_ = '_leaderboard__header_1kzep_13',
  s_ = '_leaderboard__pagination_1kzep_22',
  Zl = {
    leaderboard: o_,
    leaderboard__title: l_,
    leaderboard__header: i_,
    leaderboard__pagination: s_,
  },
  a_ = '_leaderboardElement_1bdpo_2',
  u_ = { leaderboardElement: a_ },
  c_ = ({ userName: n, userScore: o }) =>
    re('div', {
      className: u_.leaderboardElement,
      children: [C('div', { children: n }), C('div', { children: o })],
    }),
  f_ = () => {
    const [n, o] = _.useState([]),
      [l, s] = _.useState(0),
      a = 8,
      f = () => {
        s(l + a)
      },
      d = () => {
        s(l - a)
      },
      m = h => {
        fetch(`${Oo}/leaderboard/all`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ratingFieldName: 'hamsterScore',
            cursor: h,
            limit: a,
          }),
        })
          .then(y => y.json())
          .then(y => o(y))
          .catch(y => console.error('Ошибка:', y))
      }
    return (
      _.useEffect(() => {
        m(l)
      }, [l]),
      C(Ni, {
        children: re('div', {
          className: Zl.leaderboard,
          children: [
            C('div', {
              className: Zl.leaderboard__title,
              children: 'Leaderboard',
            }),
            re('div', {
              className: Zl.leaderboard__header,
              children: [
                C('div', { children: 'Name' }),
                C('div', { children: 'Score' }),
              ],
            }),
            n.map(h =>
              C(
                c_,
                { userName: h.data.userName, userScore: h.data.hamsterScore },
                h.data.id
              )
            ),
            re('div', {
              className: Zl.leaderboard__pagination,
              children: [
                C('button', {
                  onClick: d,
                  disabled: l === 0,
                  children: 'Назад',
                }),
                C('button', {
                  onClick: f,
                  disabled: n.length < a,
                  children: 'Вперед',
                }),
              ],
            }),
          ],
        }),
      })
    )
  },
  d_ = () => C(Ct, { children: C(Dr, { children: C(f_, {}) }) }),
  p_ = '_name_segal_2',
  h_ = { name: p_ },
  m_ = ({ title: n }) => C('div', { className: h_.name, children: n }),
  y_ = '_description_120yt_1',
  g_ = { description: y_ },
  v_ = ({ description: n }) =>
    C('div', { className: g_.description, children: n }),
  w_ = '_section_1omun_1',
  __ = { section: w_ },
  S_ = ({ text: n, description: o }) =>
    re('div', {
      className: __.section,
      children: [C(ph, { text: n }), C(v_, { description: o })],
    }),
  E_ = ({ dataUser: n = [] }) =>
    C(Ct, {
      children: n.map((o, l) =>
        C(S_, { text: o.text, description: o.description }, l)
      ),
    }),
  x_ = '_geolocation_1o5zt_2',
  Sp = {
    geolocation: x_,
    'geolocation__serch-button': '_geolocation__serch-button_1o5zt_13',
  },
  C_ = n => {
    const [o, l] = _.useState(''),
      s = _.useCallback(() => {
        function a(d) {
          const m = d.coords.latitude,
            h = d.coords.longitude
          l(m + ', ' + h)
        }
        function f() {
          l('Не получилось получить информацию')
        }
        navigator.geolocation
          ? (l('Ищем'), navigator.geolocation.getCurrentPosition(a, f))
          : l('Не поддерживается браузером')
      }, [])
    return { location: o, getLocation: s }
  },
  k_ = () => {
    const { location: n, getLocation: o } = C_()
    return re('div', {
      className: Sp.geolocation,
      children: [
        C('label', { children: ' Mестoположение: ' }),
        re('label', { children: [' ', n] }),
        C('button', {
          onClick: o,
          className: Sp['geolocation__serch-button'],
          children: n ? 'Обновить' : 'Найти',
        }),
      ],
    })
  },
  R_ = () => {
    const n = ln(),
      o = [
        { text: 'Почта', description: 'qazxswrfvqqqdcQ@mail.ru' },
        { text: 'Логин', description: 'zxcvbnm' },
        { text: 'Имя', description: 'vncncjchjc' },
        { text: 'Фамилия', description: 'awdwaw' },
        { text: 'Имя в чате', description: 'adawdwa' },
        { text: 'Телефон', description: '76567456300' },
      ]
    return re('div', {
      className: en.container,
      children: [
        C('button', {
          className: 'back-button',
          onClick: () => n(-1),
          children: '❮',
        }),
        re('div', {
          className: en.content,
          children: [
            C(k_, {}),
            C(Ru, {}),
            C(Cu, { id: 'avatar', src: ku, alt: 'Добавьте картинку' }),
            C(m_, { title: 'vncncjchjc' }),
            C(E_, { dataUser: o }),
            re('div', {
              className: en.container__link,
              children: [
                C(xt, {
                  className: en.link,
                  to: '/profile/editData',
                  children: 'Изменить данные',
                }),
                C(xt, {
                  className: en.link,
                  to: '/profile/editPassword',
                  children: 'Изменить пароль',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  P_ = () => C(Ct, { children: C(Dr, { children: C(R_, {}) }) }),
  N_ = '_button_1xfi6_2',
  T_ = { button: N_ },
  Dh = ({ text: n, disabled: o, onClick: l }) => {
    const s = _.useCallback(
      a => {
        a.preventDefault(), l()
      },
      [l]
    )
    return C('button', {
      className: T_.button,
      disabled: o,
      onClick: s,
      children: n,
    })
  },
  O_ = '_input_8aaho_2',
  A_ = '_input__wrapper_8aaho_13',
  D_ = '_input__cut_8aaho_18',
  L_ = '_input__placeholder_8aaho_29',
  ei = {
    input: O_,
    input__wrapper: A_,
    input__cut: D_,
    input__placeholder: L_,
  },
  Pn = ({
    onBlur: n,
    placeholder: o,
    onChange: l,
    value: s = '',
    type: a,
    name: f,
  }) =>
    re('div', {
      className: ei.input__wrapper,
      children: [
        C('input', {
          className: ei.input,
          type: a,
          value: s,
          onChange: l,
          onBlur: n,
          placeholder: ' ',
          name: f,
        }),
        C('div', { className: ei.input__cut }),
        C('label', { className: ei.input__placeholder, children: o }),
      ],
    }),
  z_ = '_form_g4l0m_2',
  F_ = { form: z_ },
  Lh = ({ children: n }) => C('form', { className: F_.form, children: n }),
  M_ = '_container_sq9pz_1',
  I_ = '_container__title_sq9pz_10',
  j_ = '_oauth_sq9pz_14',
  B_ = '_link_sq9pz_27',
  ko = { container: M_, container__title: I_, oauth: j_, link: B_ },
  U_ = () => {
    const n = du(),
      { loading: o, error: l, user: s } = pu(ye => ye.auth),
      a = {
        login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
        password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
      },
      [f, d] = _.useState(''),
      [m, h] = _.useState(!1),
      [y, g] = _.useState('Логин не может быть пустым'),
      [v, S] = _.useState(!1),
      [O, k] = _.useState('Некорректный пароль'),
      A = async ye => {
        ye.preventDefault()
        try {
          console.log(`${Oo} + /oauth/yandex/service-id?redirect_uri=${kr}`)
          const Le = await fetch(
            `${Oo}/oauth/yandex/service-id?redirect_uri=${kr}`
          )
          if (!Le.ok) throw new Error(`Ошибка: ${Le.status}`)
          const Oe = await Le.json()
          if ((console.log('Service ID:', Oe), Oe.service_id)) {
            console.log(Oe.service_id, '------', kr)
            const ve = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${Oe.service_id}&redirect_uri=${kr}`
            console.log(ve), (window.location.href = ve)
          } else throw new Error('Нет service_id в ответе')
        } catch (Le) {
          console.error('Ошибка при получении service-id:', Le)
        }
      },
      [R, L] = _.useState(''),
      F = ln(),
      B = _.useCallback(
        ye => {
          d(ye.target.value),
            a.login.test(ye.target.value) ? g('') : g('Некорректный login')
        },
        [f]
      ),
      [b, V] = _.useState(''),
      J = _.useCallback(
        ye => {
          const Le = ye.target.value
          V(ye.target.value),
            a.password.test(Le) ? k('') : k('Некорректный пароль')
        },
        [b]
      ),
      te = _.useCallback(
        ye => {
          if (ye.includes('400')) {
            F('/')
            return
          }
          L(ye)
        },
        [F]
      ),
      Y = _.useCallback(
        ye => {
          F('/game')
        },
        [F]
      ),
      se = _.useCallback(() => {
        n(si({ login: f, password: b }))
          .unwrap()
          .then(Y)
          .catch(te)
      }, [n, f, b, Y, te]),
      [xe, We] = _.useState(!1)
    _.useEffect(() => {
      We(!y && !O)
    }, [y, O])
    const Ke = () => {
        h(!0)
      },
      Ue = () => {
        S(!0)
      }
    return re('div', {
      className: ko.container,
      children: [
        C('h1', { className: ko.container__title, children: 'Авторизация' }),
        re(Lh, {
          children: [
            C(Pn, {
              name: 'login',
              value: f,
              onChange: B,
              onBlur: Ke,
              placeholder: 'Логин',
              type: 'text',
            }),
            m && y && C(Dt, { message: y }),
            C(Pn, {
              name: 'password',
              value: b,
              onChange: J,
              onBlur: Ue,
              placeholder: 'Пароль',
              type: 'password',
            }),
            v && O && C(Dt, { message: O }),
            C(Dh, {
              disabled: !xe || o,
              text: o ? 'Вход...' : 'Войти',
              onClick: se,
            }),
            R && C(Dt, { message: R }),
            re('span', {
              className: ko.container__hint,
              children: [
                'Еще нет аккаунта?',
                ' ',
                C('span', {
                  className: ko.link,
                  children: C(xt, {
                    to: '/signup',
                    children: 'Зарегистрируйтесь!',
                  }),
                }),
              ],
            }),
            C('a', {
              className: ko.oauth,
              href: '#',
              onClick: A,
              children: 'Авторизоваться через Яндекс ID',
            }),
          ],
        }),
      ],
    })
  },
  $_ = { loading: !1, error: null, success: !1, user: null },
  ai = jo(
    'registration/registerUser',
    async (n, { rejectWithValue: o, extra: l }) => {
      const s = l
      try {
        return await s.signup(n)
      } catch (a) {
        return (
          console.error('Ошибка при регистрации пользователя:', a.message),
          o(a.message)
        )
      }
    }
  ),
  zh = Oh({
    name: 'registration',
    initialState: $_,
    reducers: {
      resetRegistration: n => {
        ;(n.loading = !1), (n.error = null), (n.success = !1), (n.user = null)
      },
    },
    extraReducers: n => {
      n.addCase(ai.pending, o => {
        ;(o.loading = !0), (o.error = null)
      })
        .addCase(ai.fulfilled, (o, l) => {
          ;(o.loading = !1), (o.success = !0), (o.user = l.payload)
        })
        .addCase(ai.rejected, (o, l) => {
          ;(o.loading = !1), (o.error = l.payload)
        })
    },
  }),
  b_ = zh.reducer,
  { resetRegistration: H_ } = zh.actions,
  V_ = '_container_1eieh_2',
  W_ = '_container__title_1eieh_10',
  K_ = '_container__hint_1eieh_14',
  q_ = '_link_1eieh_18',
  ti = { container: V_, container__title: W_, container__hint: K_, link: q_ },
  xr = (n, o, l, s) => {
    const [a, f] = _.useState(n),
      [d, m] = _.useState(!1),
      [h, y] = _.useState(o),
      g = _.useCallback(
        S => {
          const O = S.target.value
          f(O), l.test(O) ? y('') : y(s)
        },
        [l, s]
      ),
      v = _.useCallback(() => {
        m(!0)
      }, [])
    return { value: a, setValue: f, dirty: d, error: h, onChange: g, onBlur: v }
  },
  Q_ = () => {
    const n = du(),
      { loading: o } = pu(L => L.registration),
      l = ln(),
      s = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
        name: /^[A-Za-zА-Яа-я]{1}[a-zA-Zа-яА-Я-]*$/,
        password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
        phone: /^\+?\d{10,15}$/,
      },
      a = xr('', 'Логин не может быть пустым', s.login, 'Некорректный login'),
      f = xr('', 'Имя не может быть пустым', s.name, 'Неккоректное имя'),
      d = xr(
        '',
        'Фамилия не может быть пустой',
        s.name,
        'Неккоректная фамилия'
      ),
      m = xr('', 'Email не может быть пустым', s.email, 'Неккоректный email'),
      h = xr(
        '',
        'Пароль не может быть пустым',
        s.password,
        'Добавьте заглавную букву или цифру.'
      ),
      y = xr(
        '',
        'Номер телефона не может быть пустым',
        s.phone,
        'Неккоректный телефон'
      ),
      [g, v] = _.useState(''),
      S = _.useCallback(() => {
        l('/game')
      }, [l]),
      O = _.useCallback(
        L => {
          if (L.includes('400')) {
            l('/')
            return
          }
          v(L)
        },
        [l]
      ),
      k = _.useCallback(() => {
        const L = {
          login: a.value,
          password: h.value,
          phone: y.value,
          first_name: f.value,
          second_name: d.value,
          email: m.value,
        }
        n(ai(L)).unwrap().then(S).catch(O)
      }, [n, a.value, h.value, y.value, f.value, d.value, m.value, S, O]),
      [A, R] = _.useState(!1)
    return (
      _.useEffect(() => {
        a.error || f.error || d.error || m.error || h.error || y.error
          ? R(!1)
          : R(!0)
      }, [a.error, f.error, d.error, m.error, h.error, y.error]),
      _.useEffect(() => {
        n(H_())
      }, [n]),
      re('div', {
        className: ti.container,
        children: [
          C('h1', { className: ti.container__title, children: 'Регистрация' }),
          re(Lh, {
            children: [
              C(Pn, {
                name: 'first_name',
                value: f.value,
                onBlur: f.onBlur,
                onChange: f.onChange,
                placeholder: 'Имя',
                type: 'text',
              }),
              f.dirty && f.error && C(Dt, { message: f.error }),
              C(Pn, {
                name: 'second_name',
                value: d.value,
                onBlur: d.onBlur,
                onChange: d.onChange,
                placeholder: 'Фамилия',
                type: 'text',
              }),
              d.dirty && d.error && C(Dt, { message: d.error }),
              C(Pn, {
                name: 'login',
                value: a.value,
                onBlur: a.onBlur,
                onChange: a.onChange,
                placeholder: 'Логин',
                type: 'text',
              }),
              a.dirty && a.error && C(Dt, { message: a.error }),
              C(Pn, {
                name: 'email',
                value: m.value,
                onBlur: m.onBlur,
                onChange: m.onChange,
                placeholder: 'Почта',
                type: 'email',
              }),
              m.dirty && m.error && C(Dt, { message: m.error }),
              C(Pn, {
                name: 'password',
                value: h.value,
                onBlur: h.onBlur,
                onChange: h.onChange,
                placeholder: 'Пароль',
                type: 'password',
              }),
              h.dirty && h.error && C(Dt, { message: h.error }),
              C(Pn, {
                name: 'phone',
                value: y.value,
                onBlur: y.onBlur,
                onChange: y.onChange,
                placeholder: 'Телефон',
                type: 'tel',
              }),
              y.dirty && y.error && C(Dt, { message: y.error }),
              C(Dh, {
                disabled: !A || o,
                text: 'Зарегистрироваться',
                onClick: k,
              }),
              g && C(Dt, { message: g }),
              re('span', {
                className: ti.container__hint,
                children: [
                  'Уже есть аккаунт?',
                  ' ',
                  C('span', {
                    className: ti.link,
                    children: C(xt, {
                      to: '/signin',
                      children: 'Авторизуйтесь!',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    )
  },
  J_ = '_settings_7rb0q_1',
  X_ = '_settings__flex_7rb0q_5',
  G_ = '_name_7rb0q_17',
  Cr = {
    settings: J_,
    settings__flex: X_,
    'theme-blok': '_theme-blok_7rb0q_10',
    name: G_,
    'small-circle': '_small-circle_7rb0q_23',
    'large-circle': '_large-circle_7rb0q_29',
  },
  Fh = 'http://localhost:3001',
  Y_ = async n => (await fetch(`${Fh}/themes${n}`, {})).json(),
  Z_ = async n =>
    (
      await fetch(`${Fh}/user-theme`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme_name: n }),
      })
    ).json(),
  eS = () => {
    Y_()
    const n = s => {
        o(Ht[s]), Z_(s)
      },
      { setTheme: o } = _.useContext(Au),
      l = Object.keys(Ht).map(s =>
        re(
          'div',
          {
            onClick: () => n(s),
            className: Cr['theme-blok'],
            style: {
              background: Ht[s].color.background,
              border: `3px solid ${Ht[s].color.border} `,
            },
            children: [
              C('div', {
                style: { color: Ht[s].color.text },
                className: Cr.name,
                children: s,
              }),
              C('div', {
                style: { background: Ht[s].color.large_circle_top },
                className: Cr['large-circle'],
                children: C('div', {
                  style: { background: Ht[s].color.small_circle_bottom },
                  className: Cr['small-circle'],
                  children: C('img', { src: Ht[s].humster }),
                }),
              }),
            ],
          },
          s
        )
      )
    return C(Ni, {
      children: C('div', {
        className: Cr.settings,
        children: C('div', { className: Cr.settings__flex, children: l }),
      }),
    })
  },
  tS = '/assets/404-DxTLwMTa.png',
  nS = [
    { path: '/signup', exact: !0, component: Q_ },
    { path: '/signin', exact: !0, component: U_, loader: n => n(No()) },
    { path: '/game', exact: !0, component: r_ },
    { path: '/profile', exact: !0, component: P_ },
    { path: '/profile/editData', exact: !0, component: Yv },
    { path: '/profile/editPassword', exact: !0, component: t2 },
    { path: '/leaderboard', exact: !0, component: d_ },
    { path: '/forum', exact: !0, component: Z2 },
    { path: '/settings', exact: !0, component: eS },
    {
      path: '/error',
      exact: !0,
      component: C(Ja, {
        code: 500,
        message: 'Всё сломалось, но мы уже летим чинить',
        image: Bp,
      }),
    },
    {
      path: '*',
      exact: !0,
      component: C(Ja, {
        code: 404,
        message: 'Такой страницы не существует :(',
        image: tS,
        rounded: !0,
      }),
    },
  ]
function rS() {
  'serviceWorker' in navigator &&
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(n => {
          console.log(n.scope)
        })
        .catch(n => {
          console.error('ServiceWorker registration failed: ', n)
        })
    })
}
const Mh = (n = {}, o) =>
  Rw({
    reducer: { auth: qw, registration: b_ },
    preloadedState: n,
    middleware: l => l({ thunk: { extraArgument: o } }),
  })
Mh()
const oS = () => {
    var s
    const n = `${
      (s = window == null ? void 0 : window.localStorage) == null
        ? void 0
        : s.getItem('theme')
    }`
    if (n && n !== 'null') return JSON.parse(n)
    const l = window.matchMedia('(prefers-color-scheme: ligth)')
      ? 'base-light'
      : 'base-dark'
    return console.log(Ht[l]), Ht[l]
  },
  lS = ({ children: n }) => {
    const [o, l] = _.useState(oS)
    return (
      _.useEffect(() => {
        ;(document.getElementById('root').style.cssText += `
    --background-color: ${o.color.background};
    --blok-background-color: ${o.color.blok_background};
    --border-color: ${o.color.border};
    --text-color:${o.color.text};
    --button-color: ${o.color.button};
   
  `),
          localStorage.setItem('theme', JSON.stringify(o))
      }, [o]),
      C(Au.Provider, { value: { theme: o, setTheme: l }, children: n })
    )
  },
  iS = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__
const sS = new dh(),
  aS = Mh(iS, sS),
  uS = () => {
    const n = s => (typeof s == 'function' ? C(s, {}) : s),
      o = ln(),
      l = du()
    return (
      _.useEffect(() => {
        function s() {
          const f = new URLSearchParams(window.location.search),
            d = f.get('code'),
            m = f.get('cid')
          return console.log(d, m), { code: d }
        }
        const a = s()
        if (((a.redirect_uri = kr), console.log(a), a.code !== null)) {
          const f = { code: a.code, redirect_uri: kr }
          l(uu({ CodeAndCid: f }))
            .unwrap()
            .then(() => {
              console.log('Успех'), o('/game')
            })
            .catch(() => {
              console.log('Не успех')
            })
        }
      }, []),
      C(jg, {
        children: C(Hg, {
          children: C(lS, {
            children: C(eg, {
              children: nS.map(s =>
                C(zp, { path: s.path, element: n(s.component) }, s.path)
              ),
            }),
          }),
        }),
      })
    )
  }
b0.hydrateRoot(
  document.getElementById('root'),
  C(ui.StrictMode, {
    children: C(Cg, { children: C(ly, { store: aS, children: C(uS, {}) }) }),
  })
)
rS()
