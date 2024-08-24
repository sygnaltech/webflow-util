(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date())
            return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2)
            return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1)
              return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2))
            return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2)
                return new Date(NaN);
              if (b.u(e2))
                return new Date();
              if (e2 instanceof Date)
                return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else
              l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c)
              return this.set(c, this.$M + r2);
            if ($2 === h)
              return this.set(h, this.$y + r2);
            if ($2 === a)
              return y2(1);
            if ($2 === o)
              return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid())
              return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, function(t3, r3) {
              return r3 || function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              }(t3) || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2)
              return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      });
    }
  });

  // node_modules/dayjs/plugin/localizedFormat.js
  var require_localizedFormat = __commonJS({
    "node_modules/dayjs/plugin/localizedFormat.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
      }(exports, function() {
        "use strict";
        var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
        return function(t, o, n) {
          var r = o.prototype, i = r.format;
          n.en.formats = e, r.format = function(t2) {
            void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
            var o2 = this.$locale().formats, n2 = function(t3, o3) {
              return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r2) {
                var i2 = r2 && r2.toUpperCase();
                return n3 || o3[r2] || e[r2] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t5, o4) {
                  return t5 || o4.slice(1);
                });
              });
            }(t2, void 0 === o2 ? {} : o2);
            return i.call(this, n2);
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/customParseFormat.js
  var require_customParseFormat = __commonJS({
    "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
      }(exports, function() {
        "use strict";
        var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
          return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
        };
        var f = function(e2) {
          return function(t2) {
            this[e2] = +t2;
          };
        }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
          (this.zone || (this.zone = {})).offset = function(e3) {
            if (!e3)
              return 0;
            if ("Z" === e3)
              return 0;
            var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
            return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
          }(e2);
        }], u = function(e2) {
          var t2 = s[e2];
          return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
        }, d = function(e2, t2) {
          var n2, r2 = s.meridiem;
          if (r2) {
            for (var i2 = 1; i2 <= 24; i2 += 1)
              if (e2.indexOf(r2(i2, 0, t2)) > -1) {
                n2 = i2 > 12;
                break;
              }
          } else
            n2 = e2 === (t2 ? "pm" : "PM");
          return n2;
        }, c = { A: [o, function(e2) {
          this.afternoon = d(e2, false);
        }], a: [o, function(e2) {
          this.afternoon = d(e2, true);
        }], Q: [n, function(e2) {
          this.month = 3 * (e2 - 1) + 1;
        }], S: [n, function(e2) {
          this.milliseconds = 100 * +e2;
        }], SS: [r, function(e2) {
          this.milliseconds = 10 * +e2;
        }], SSS: [/\d{3}/, function(e2) {
          this.milliseconds = +e2;
        }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
          var t2 = s.ordinal, n2 = e2.match(/\d+/);
          if (this.day = n2[0], t2)
            for (var r2 = 1; r2 <= 31; r2 += 1)
              t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
        }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
          var t2 = u("months"), n2 = (u("monthsShort") || t2.map(function(e3) {
            return e3.slice(0, 3);
          })).indexOf(e2) + 1;
          if (n2 < 1)
            throw new Error();
          this.month = n2 % 12 || n2;
        }], MMMM: [o, function(e2) {
          var t2 = u("months").indexOf(e2) + 1;
          if (t2 < 1)
            throw new Error();
          this.month = t2 % 12 || t2;
        }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
          this.year = a(e2);
        }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
        function l(n2) {
          var r2, i2;
          r2 = n2, i2 = s && s.formats;
          for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
            var o3 = r3 && r3.toUpperCase();
            return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
              return t3 || n4.slice(1);
            });
          })).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
            var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
            o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
          }
          return function(e2) {
            for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
              var i3 = o2[n3];
              if ("string" == typeof i3)
                r3 += i3.length;
              else {
                var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
                f3.call(t2, u3), e2 = e2.replace(u3, "");
              }
            }
            return function(e3) {
              var t3 = e3.afternoon;
              if (void 0 !== t3) {
                var n4 = e3.hours;
                t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
              }
            }(t2), t2;
          };
        }
        return function(e2, t2, n2) {
          n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
          var r2 = t2.prototype, i2 = r2.parse;
          r2.parse = function(e3) {
            var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
            this.$u = r3;
            var a2 = o2[1];
            if ("string" == typeof a2) {
              var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
              h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = function(e4, t4, n3, r4) {
                try {
                  if (["x", "X"].indexOf(t4) > -1)
                    return new Date(("X" === t4 ? 1e3 : 1) * e4);
                  var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                  o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                  var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                  return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
                } catch (e5) {
                  return new Date("");
                }
              }(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = new Date("")), s = {};
            } else if (a2 instanceof Array)
              for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
                o2[1] = a2[m - 1];
                var M = n2.apply(this, o2);
                if (M.isValid()) {
                  this.$d = M.$d, this.$L = M.$L, this.init();
                  break;
                }
                m === c2 && (this.$d = new Date(""));
              }
            else
              i2.call(this, e3);
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/localeData.js
  var require_localeData = __commonJS({
    "node_modules/dayjs/plugin/localeData.js"(exports, module) {
      !function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
      }(exports, function() {
        "use strict";
        return function(n, e, t) {
          var r = e.prototype, o = function(n2) {
            return n2 && (n2.indexOf ? n2 : n2.s);
          }, u = function(n2, e2, t2, r2, u2) {
            var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
              return n3.slice(0, r2);
            });
            if (!u2)
              return f;
            var d = i2.weekStart;
            return f.map(function(n3, e3) {
              return f[(e3 + (d || 0)) % 7];
            });
          }, i = function() {
            return t.Ls[t.locale()];
          }, a = function(n2, e2) {
            return n2.formats[e2] || function(n3) {
              return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
                return e3 || t2.slice(1);
              });
            }(n2.formats[e2.toUpperCase()]);
          }, s = function() {
            var n2 = this;
            return { months: function(e2) {
              return e2 ? e2.format("MMMM") : u(n2, "months");
            }, monthsShort: function(e2) {
              return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
            }, firstDayOfWeek: function() {
              return n2.$locale().weekStart || 0;
            }, weekdays: function(e2) {
              return e2 ? e2.format("dddd") : u(n2, "weekdays");
            }, weekdaysMin: function(e2) {
              return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
            }, weekdaysShort: function(e2) {
              return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
            }, longDateFormat: function(e2) {
              return a(n2.$locale(), e2);
            }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
          };
          r.localeData = function() {
            return s.bind(this)();
          }, t.localeData = function() {
            var n2 = i();
            return { firstDayOfWeek: function() {
              return n2.weekStart || 0;
            }, weekdays: function() {
              return t.weekdays();
            }, weekdaysShort: function() {
              return t.weekdaysShort();
            }, weekdaysMin: function() {
              return t.weekdaysMin();
            }, months: function() {
              return t.months();
            }, monthsShort: function() {
              return t.monthsShort();
            }, longDateFormat: function(e2) {
              return a(n2, e2);
            }, meridiem: n2.meridiem, ordinal: n2.ordinal };
          }, t.months = function() {
            return u(i(), "months");
          }, t.monthsShort = function() {
            return u(i(), "monthsShort", "months", 3);
          }, t.weekdays = function(n2) {
            return u(i(), "weekdays", null, null, n2);
          }, t.weekdaysShort = function(n2) {
            return u(i(), "weekdaysShort", "weekdays", 3, n2);
          }, t.weekdaysMin = function(n2) {
            return u(i(), "weekdaysMin", "weekdays", 2, n2);
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/advancedFormat.js
  var require_advancedFormat = __commonJS({
    "node_modules/dayjs/plugin/advancedFormat.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
      }(exports, function() {
        "use strict";
        return function(e, t) {
          var r = t.prototype, n = r.format;
          r.format = function(e2) {
            var t2 = this, r2 = this.$locale();
            if (!this.isValid())
              return n.bind(this)(e2);
            var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
              switch (e3) {
                case "Q":
                  return Math.ceil((t2.$M + 1) / 3);
                case "Do":
                  return r2.ordinal(t2.$D);
                case "gggg":
                  return t2.weekYear();
                case "GGGG":
                  return t2.isoWeekYear();
                case "wo":
                  return r2.ordinal(t2.week(), "W");
                case "w":
                case "ww":
                  return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
                case "W":
                case "WW":
                  return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
                case "k":
                case "kk":
                  return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
                case "X":
                  return Math.floor(t2.$d.getTime() / 1e3);
                case "x":
                  return t2.$d.getTime();
                case "z":
                  return "[" + t2.offsetName() + "]";
                case "zzz":
                  return "[" + t2.offsetName("long") + "]";
                default:
                  return e3;
              }
            });
            return n.bind(this)(a);
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/relativeTime.js
  var require_relativeTime = __commonJS({
    "node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
      !function(r, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
      }(exports, function() {
        "use strict";
        return function(r, e, t) {
          r = r || {};
          var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
          function i(r2, e2, t2, o2) {
            return n.fromToBase(r2, e2, t2, o2);
          }
          t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
            for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
              var y = h[c];
              y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
              var p = (r.rounding || Math.round)(Math.abs(f));
              if (s = f > 0, p <= y.r || !y.r) {
                p <= 1 && c > 0 && (y = h[c - 1]);
                var v = l[y.l];
                u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
                break;
              }
            }
            if (n2)
              return a;
            var M = s ? l.future : l.past;
            return "function" == typeof M ? M(a) : M.replace("%s", a);
          }, n.to = function(r2, e2) {
            return i(r2, e2, this, true);
          }, n.from = function(r2, e2) {
            return i(r2, e2, this);
          };
          var d = function(r2) {
            return r2.$u ? t.utc() : t();
          };
          n.toNow = function(r2) {
            return this.to(d(this), r2);
          }, n.fromNow = function(r2) {
            return this.from(d(this), r2);
          };
        };
      });
    }
  });

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return Boolean(localStorage.getItem(this.localStorageDebugFlag));
    }
    set persistentDebug(active) {
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
      }
    }
    get enabled() {
      var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag));
      wfuDebugValue = wfuDebugValue || this._enabled;
      return wfuDebugValue;
    }
    set enabled(active) {
      this._enabled = active;
    }
    group(name) {
      if (this.enabled)
        console.group(name);
    }
    groupEnd() {
      if (this.enabled)
        console.groupEnd();
    }
    debug(...args) {
      if (this.enabled)
        console.debug(this._label, ...args);
    }
    static getStyleString(elem) {
      let styleString = "";
      for (let i = 0; i < elem.style.length; i++) {
        const property = elem.style[i];
        const value = elem.style.getPropertyValue(property);
        styleString += `${property}: ${value}; `;
      }
      return styleString;
    }
  };

  // src/webflow-format/date-handler/date-handler.ts
  var import_dayjs = __toESM(require_dayjs_min());
  var WfuDateHandler = class {
    constructor(config = {}) {
      this.mode = "date";
      this.suffix = true;
      this.debug = new Sa5Debug("sa5-date-handler");
      this.debug.debug("Initializing");
    }
    compareToday(date, timeframeScale) {
      return this.compare(date, new Date(), timeframeScale);
    }
    compare(date1, date2, timeframeScale) {
      const h = (0, import_dayjs.default)(date1);
      if (!date1)
        return null;
      if (!date2)
        return null;
      switch (timeframeScale) {
        case 4 /* year */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          return 1 /* present */;
        case 2 /* quarter */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          let quarter1 = Math.floor(date1.getMonth() / 3);
          let quarter2 = Math.floor(date2.getMonth() / 3);
          if (quarter1 < quarter2)
            return 0 /* past */;
          if (quarter1 > quarter2)
            return 2 /* future */;
          return 1 /* present */;
        case 3 /* month */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          if (date1.getMonth() < date2.getMonth())
            return 0 /* past */;
          if (date1.getMonth() > date2.getMonth())
            return 2 /* future */;
          return 1 /* present */;
        case 1 /* week */:
          const dayOfWeek1 = date1.getUTCDay();
          const dayOfWeek2 = date2.getUTCDay();
          const adjustedDate1 = new Date(date1.getTime());
          const adjustedDate2 = new Date(date2.getTime());
          adjustedDate1.setUTCDate(date1.getUTCDate() - dayOfWeek1);
          adjustedDate2.setUTCDate(date2.getUTCDate() - dayOfWeek2);
          adjustedDate1.setUTCHours(0, 0, 0, 0);
          adjustedDate2.setUTCHours(0, 0, 0, 0);
          if (+adjustedDate1 < +adjustedDate2)
            return 0 /* past */;
          if (+adjustedDate1 > +adjustedDate2)
            return 2 /* future */;
          return 1 /* present */;
        case 0 /* day */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          if (date1.getMonth() < date2.getMonth())
            return 0 /* past */;
          if (date1.getMonth() > date2.getMonth())
            return 2 /* future */;
          if (date1.getDate() < date2.getDate())
            return 0 /* past */;
          if (date1.getDate() > date2.getDate())
            return 2 /* future */;
          return 1 /* present */;
        case 5 /* hour */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          if (date1.getMonth() < date2.getMonth())
            return 0 /* past */;
          if (date1.getMonth() > date2.getMonth())
            return 2 /* future */;
          if (date1.getDate() < date2.getDate())
            return 0 /* past */;
          if (date1.getDate() > date2.getDate())
            return 2 /* future */;
          if (date1.getHours() < date2.getHours())
            return 0 /* past */;
          if (date1.getHours() > date2.getHours())
            return 2 /* future */;
          return 1 /* present */;
        case 6 /* minute */:
          if (date1.getFullYear() < date2.getFullYear())
            return 0 /* past */;
          if (date1.getFullYear() > date2.getFullYear())
            return 2 /* future */;
          if (date1.getMonth() < date2.getMonth())
            return 0 /* past */;
          if (date1.getMonth() > date2.getMonth())
            return 2 /* future */;
          if (date1.getDate() < date2.getDate())
            return 0 /* past */;
          if (date1.getDate() > date2.getDate())
            return 2 /* future */;
          if (date1.getHours() < date2.getHours())
            return 0 /* past */;
          if (date1.getHours() > date2.getHours())
            return 2 /* future */;
          if (date1.getMinutes() < date2.getMinutes())
            return 0 /* past */;
          if (date1.getMinutes() > date2.getMinutes())
            return 2 /* future */;
          return 1 /* present */;
      }
    }
    async formatDate(date) {
      return null;
    }
  };

  // src/webflow-format/date-handler/date-handler-dayjs.ts
  var import_dayjs2 = __toESM(require_dayjs_min());
  var import_localizedFormat = __toESM(require_localizedFormat());
  var import_customParseFormat = __toESM(require_customParseFormat());
  var import_localeData = __toESM(require_localeData());
  var import_advancedFormat = __toESM(require_advancedFormat());
  var import_relativeTime = __toESM(require_relativeTime());
  import_dayjs2.default.extend(import_advancedFormat.default);
  import_dayjs2.default.extend(import_relativeTime.default);
  import_dayjs2.default.extend(import_localizedFormat.default);
  import_dayjs2.default.extend(import_customParseFormat.default);
  import_dayjs2.default.extend(import_localeData.default);
  var WfuDateHandler_DayJs = class extends WfuDateHandler {
    constructor(config) {
      super(config);
    }
    calculateAge(date) {
      const diff = new Date().getTime() - date.getTime();
      return Math.floor(diff / 315576e5);
    }
    async formatDate(jsDate) {
      const date = (0, import_dayjs2.default)(jsDate);
      const past = jsDate < new Date();
      let relative;
      let abs;
      var formattedDate;
      switch (this.mode) {
        case "age":
          relative = this.calculateAge(jsDate);
          abs = Math.abs(relative);
          formattedDate = relative.toString();
          if (this.suffix) {
            if (abs == 1)
              formattedDate = `${relative} year`;
            else
              formattedDate = `${relative} years`;
          }
          break;
        case "from":
          formattedDate = date.fromNow(!this.suffix);
          break;
        case "to":
          formattedDate = date.toNow(!this.suffix);
          break;
        case "relative":
          formattedDate = "rel";
          break;
        case "date":
        default:
          if (this.locale) {
            console.log(`Current locale: ${import_dayjs2.default.locale()}`);
            console.log("Loading locale for", this.locale, "with format", this.formatString);
            console.log("date1", this.locale, this.formatString);
            await this.loadLocale(this.locale);
            console.log("current locale", import_dayjs2.default.locale());
            console.log(`Locale after loading: ${import_dayjs2.default.locale()}`);
          }
          formattedDate = date.format(this.formatString);
          console.log("Using format string:", this.formatString);
          console.log("Final formatted date:", formattedDate);
          formattedDate = date.format(this.formatString);
          console.log(this.formatString, formattedDate);
          break;
      }
      return formattedDate;
    }
    async loadLocale(locale) {
      try {
        const response = await fetch(`https://unpkg.com/dayjs/locale/${locale}.js`);
        const scriptText = await response.text();
        console.log(scriptText);
        const scriptWrapper = new Function("require", "module", "exports", "define", "globalThis", scriptText);
        scriptWrapper(
          (mod) => mod === "dayjs" ? import_dayjs2.default : {},
          { exports: {} },
          {},
          void 0,
          globalThis
        );
        import_dayjs2.default.locale(locale);
        console.log("locale SET AS", locale);
      } catch (error) {
        console.error(`Locale ${locale} could not be loaded, falling back to default.`);
        import_dayjs2.default.locale("en");
      }
    }
  };
})();
//# sourceMappingURL=date-handler-dayjs.js.map
