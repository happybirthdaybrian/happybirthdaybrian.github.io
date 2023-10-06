(this["webpackJsonpcathy-christmas"] = this["webpackJsonpcathy-christmas"] || []).push([
    [0],
    {
      23: function (e, t, n) {
        e.exports = n(41);
      },
      28: function (e, t, n) {},
      29: function (e, t, n) {},
      30: function (e, t, n) {},
      36: function (e, t, n) {},
      37: function (e, t, n) {},
      38: function (e, t, n) {},
      39: function (e, t, n) {},
      40: function (e, t, n) {},
      41: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0),
          o = n.n(a),
          s = n(20),
          i = n.n(s),
          c = (n(28), n(11)),
          r = n(14),
          l = n(4),
          h = n(5),
          u = n(8),
          p = n(6),
          m = n(10),
          d = n(7),
          f =
            (n(29),
            function (e) {
              var t = "Button";
              return e.className && (t = "".concat(t, " ").concat(e.className)), e.disabled && (t = "".concat(t, " Button-disabled")), o.a.createElement("button", { className: t, onClick: e.onClick }, e.title);
            }),
          v =
            (n(30),
            (function (e) {
              function t(e) {
                var n;
                return Object(l.a)(this, t), ((n = Object(u.a)(this, Object(p.a)(t).call(this, e))).onStartClick = n._onStartClick.bind(Object(m.a)(n))), n;
              }
              return (
                Object(d.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: "_onStartClick",
                    value: function () {
                      this.props.history.push(this.props.firstStepPath);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return o.a.createElement(
                        "div",
                        { className: "Welcome" },
                        o.a.createElement(
                          "div",
                          { className: "Welcome-content" },
                          o.a.createElement("header", { className: "Welcome-merry-christmas" }, "Happy Birthday, Brian!"),
                          o.a.createElement("div", { className: "Welcome-description" }, "Prepare to answer some questions!"),
                          o.a.createElement(f, { className: "Welcome-start-button", onClick: this.onStartClick, title: "Start" })
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(o.a.Component)),
          k = Object(c.f)(v),
          S =
            (n(36),
            (function (e) {
              function t(e) {
                var n;
                return Object(l.a)(this, t), ((n = Object(u.a)(this, Object(p.a)(t).call(this, e))).onShowHintClick = n._onShowHintClick.bind(Object(m.a)(n))), (n.state = { hintsToShow: 0 }), n;
              }
              return (
                Object(d.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: "_onShowHintClick",
                    value: function () {
                      console.log("yo", this._disabled, this.state.hintsToShow), this._disabled() || this.setState({ hintsToShow: this.state.hintsToShow + 1 });
                    },
                  },
                  {
                    key: "_disabled",
                    value: function () {
                      return this.state.hintsToShow >= this.props.hints.length;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      for (var e = [], t = 0; t < this.state.hintsToShow; t++)
                        e.push(o.a.createElement("div", { className: "Hint-hint-item", key: "Hint ".concat(t) }, o.a.createElement("header", { className: "Hint-hint-header" }, "Hint ", t + 1, ":"), this.props.hints[t]));
                      var n = ["Show a Hint", "Show Another Hint", "Another hint? Lol"],
                        a = "",
                        s = !1;
                      this._disabled() ? ((a = "C'mon clever clogs!"), (s = !0)) : (a = n[Math.min(this.state.hintsToShow, n.length - 1)]);
                      return o.a.createElement("div", { className: "Hint" }, e, o.a.createElement(f, { className: "Hint-show-button", disabled: s, title: a, onClick: this.onShowHintClick }));
                    },
                  },
                ]),
                t
              );
            })(o.a.Component)),
          b =
            (n(37),
            (function (e) {
              function t(e) {
                var n;
                return (
                  Object(l.a)(this, t),
                  ((n = Object(u.a)(this, Object(p.a)(t).call(this, e))).componentDidMount = function () {
                    n.input.current.focus();
                  }),
                  (n.handleClick = function () {
                    n.input.current.focus();
                  }),
                  (n.handleFocus = function () {
                    n.setState({ focused: !0 });
                  }),
                  (n.handleBlur = function () {
                    n.input.current.focus();
                  }),
                  (n.handleKeyUp = function (e) {
                    "Backspace" === e.key &&
                      n.setState(function (e) {
                        return { value: e.value.slice(0, e.value.length - 1) };
                      });
                  }),
                  (n.handleChange = function (e) {
                    var t = e.target.value,
                      a = n.props.secret.length,
                      o = (n.state.value + t).slice(0, a),
                      s = o.toLowerCase() === n.props.secret.toLowerCase();
                    s && n.props.onSecretComplete(),
                      n.setState(function (e) {
                        return e.value.length >= a ? null : { value: o, isComplete: s };
                      });
                  }),
                  (n.input = o.a.createRef()),
                  (n.state = { value: "", focused: !1, isComplete: "" === n.props.secret }),
                  n
                );
              }
              return (
                Object(d.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: "render",
                    value: function () {
                      for (var e = this.state, t = e.value, n = e.focused, a = this.props.secret.length, s = t.split(""), i = s.length < a ? s.length : a - 1, c = !(s.length < a), r = [], l = s.length === a, h = 0; h < a; h++) {
                        var u = s.length === h,
                          p = l && h === a - 1,
                          m = "SecretInput-display";
                        this.state.isComplete ? (m = "".concat(m, " SecretInput-display-complete")) : l ? (m = "".concat(m, " SecretInput-display-incorrect")) : (u || p) && n && (m = "".concat(m, " SecretInput-display-selected")),
                          r.push(o.a.createElement("div", { className: m, key: "display-".concat(h) }, s[h], (u || p) && n && o.a.createElement("div", { className: "SecretInput-shadows" })));
                      }
                      var d = "SecretInput-wrap";
                      this.state.isComplete ? (d = "".concat(d, " SecretInput-wrap-complete")) : l && (d = "".concat(d, " SecretInput-wrap-incorrect"));
                      var f = "SecretInput";
                      return (
                        this.props.className && (f = "".concat(f, " ").concat(this.props.className)),
                        o.a.createElement(
                          "div",
                          { className: f },
                          o.a.createElement(
                            "div",
                            { className: d, onClick: this.handleClick },
                            o.a.createElement("input", {
                              value: "",
                              ref: this.input,
                              onChange: this.handleChange,
                              onKeyUp: this.handleKeyUp,
                              onFocus: this.handleFocus,
                              onBlur: this.handleBlur,
                              className: "SecretInput-input",
                              style: { width: "32px", top: "0px", bottom: "0px", left: "".concat(32 * i, "px"), opacity: c ? 0 : 1 },
                            }),
                            r
                          )
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(o.a.Component)),
          y =
            (n(38),
            (function (e) {
              function t(e) {
                var n;
                return (
                  Object(l.a)(this, t),
                  ((n = Object(u.a)(this, Object(p.a)(t).call(this, e))).onSecretComplete = n._onSecretComplete.bind(Object(m.a)(n))),
                  (n.onNextClick = n._onNextClick.bind(Object(m.a)(n))),
                  (n.state = { isComplete: !1 }),
                  n
                );
              }
              return (
                Object(d.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: "_onSecretComplete",
                    value: function () {
                      this.setState({ isComplete: !0 });
                    },
                  },
                  {
                    key: "_onNextClick",
                    value: function () {
                      this.state.isComplete && this.props.history.push(this.props.nextStepPath);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return o.a.createElement(
                        "div",
                        { className: "Step" },
                        o.a.createElement(
                          "div",
                          { className: "Step-content" },
                          o.a.createElement("header", { className: "Step-title" }, this.props.step.title),
                          o.a.createElement("div", { className: "Step-description" }, this.props.step.description),
                          o.a.createElement(b, { className: "Step-secret-input", secret: this.props.step.secret, onSecretComplete: this.onSecretComplete }),
                          o.a.createElement(S, { hints: this.props.step.hints }),
                          o.a.createElement(f, { className: "Step-start-button", onClick: this.onNextClick, title: this.props.nextButtonContent, disabled: !this.state.isComplete })
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(o.a.Component)),
          g = Object(c.f)(y),
          w =
            (n(39),
            (function (e) {
              function t() {
                return Object(l.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments));
              }
              return (
                Object(d.a)(t, e),
                Object(h.a)(t, [
                  {
                    key: "render",
                    value: function () {
                      return o.a.createElement(
                        "div",
                        { className: "End" },
                        o.a.createElement(
                          "div",
                          { className: "End-content" },
                          o.a.createElement("header", { className: "End-header" }, "That's All!"),
                          o.a.createElement("div", { className: "End-description" }, "Happy 55th, love and miss you so much!")
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(o.a.Component)),
          C = (n(40), "/end-lkasdfnoieknaloa"),
          E = [
            { path: "/1-soiasndklfoiaksnf", title: "Step One", description: "You sit between haggis and tatties, what are you?", secret: "neep", hints: ["Luna's one too!", "That's the only hint yer gettin", "Still one at 55!"] },
            { path: "/2-ljkasi23ksdmfnall", title: "Step Two", description: "Who gets more greetings than anyone else in the house?", secret: "sky", hints: ["Luna's trigger", "When you walk in a room", "To watch Below Deck"] },
            { path: "/3-l0alm2kannzlvnsks", title: "Step Three", description: "What's your favorite food that Luna also eats?", secret: "hamandcheese", hints: ["Two words", "Try an & in the middle of the words", "Charlie likes it too!"] },
            { path: "/4-ananvpppwoeoeksn3", title: "Step Four", description: "Have the best birthday ever, we ____ you!", secret: "love", hints: ["Really?", "It's not hate!", "LOVE!!!!"] },
          ];
        var N = function () {
          return o.a.createElement(
            r.a,
            null,
            o.a.createElement(
              c.c,
              null,
              (function () {
                for (var e = [], t = 0; t < E.length; t++) {
                  var n = E[t],
                    a = t === E.length - 1,
                    s = a ? C : E[t + 1].path,
                    i = a ? "Finish" : "Next";
                  e.push(o.a.createElement(c.a, { path: n.path, key: "path ".concat(n.path) }, o.a.createElement(g, { step: n, nextStepPath: s, nextButtonContent: i })));
                }
                return e;
              })(),
              o.a.createElement(c.a, { path: C }, o.a.createElement(w, null)),
              o.a.createElement(c.a, { path: "" }, o.a.createElement(k, { firstStepPath: E[0].path }))
            )
          );
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        i.a.render(o.a.createElement(N, null), document.getElementById("root")),
          "serviceWorker" in navigator &&
            navigator.serviceWorker.ready.then(function (e) {
              e.unregister();
            });
      },
    },
    [[23, 1, 2]],
  ]);
  //# sourceMappingURL=main.bf703757.chunk.js.map
  