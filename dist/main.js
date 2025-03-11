!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var c = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          n.d(
            a,
            c,
            function (t) {
              return e[t];
            }.bind(null, c)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(1);
    const { menuTab: a } = n(2),
      { backstory: c } = n(3),
      { createHnLTable: l } = n(4);
    document.querySelectorAll(".tablinks").forEach((e) => {
      e.addEventListener("click", () => {
        let t = document.getElementsByClassName("tabContent");
        for (let e = 0; e < t.length; e++) t[e].style.display = "none";
        let n = document.getElementsByClassName("tablinks");
        for (let e = 0; e < n.length; e++)
          n[e].className = n[e].className.replace("active", "");
        e.classList.add("active"),
          e.classList.contains("menu") && a(),
          e.classList.contains("about") && (e.classList.add("active"), c()),
          e.classList.contains("contact") && l();
      });
    });
  },
  function (e, t, n) {
    "use strict";
    const a = document.getElementById("content");
    (() => {
      let e = document.createElement("img");
      (e.className = "logo"), (e.src = "../img/logo.png"), a.appendChild(e);
      let t = document.createElement("div");
      (t.className = "topNav"), a.appendChild(t);
      let n = document.createElement("a");
      (n.classList = "tablinks home"),
        (n.href = "#home"),
        (n.innerHTML = "Home"),
        t.appendChild(n);
      let c = document.createElement("a");
      (c.classList = "tablinks about"),
        (c.href = "#about"),
        (c.innerHTML = "About"),
        t.appendChild(c);
      let l = document.createElement("a");
      (l.classList = "tablinks menu"),
        (l.href = "#menu"),
        (l.innerHTML = "Menu"),
        t.appendChild(l);
      let o = document.createElement("a");
      (o.classList = "tablinks contact"),
        (o.href = "#Contact"),
        (o.innerHTML = "Contact"),
        t.appendChild(o);
    })();
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      menuTab: function () {
        const e = document.getElementById("content");
        let t = document.createElement("div");
        (t.className = "menus tabContent"), e.appendChild(t);
        let n = document.createElement("div");
        (n.className = "menuContainer"), t.appendChild(n);
        let a = document.createElement("h2");
        (a.className = "subHeadText"),
          (a.innerHTML = "Arrogant Chicken Grub"),
          t.appendChild(a);
        let c = document.createElement("img");
        (c.className = "chicken menu"),
          (c.src = "../img/ChickenMenu.jpg"),
          t.appendChild(c);
        let l = document.createElement("img");
        (l.className = "side menu"),
          (l.src = "../img/SideMenu.jpg"),
          t.appendChild(l);
      },
    };
  },
  function (e, t) {
    e.exports = {
      backstory: function () {
        console.log("backstory");
        const e = document.getElementById("content");
        let t = document.createElement("div");
        (t.classList = "about tabContent"), e.appendChild(t);
        let n = document.createElement("h2");
        (n.className = "about title"),
          (n.innerHTML = "Backstory - Tulum Inspired Fry Truck"),
          t.appendChild(n);
        let a = document.createElement("div");
        (a.className = "about paragraph body"),
          (a.innerHTML =
            "Chick Fiesta began as a truck and a Chic. Although we are now a brick and mortar shop in North Denver, not much has changed. Chic now has some superstar peers and they continue to focus on ingredients and people. "),
          t.appendChild(a);
      },
    };
  },
  function (e, t) {
    const n = document.getElementById("content");
    e.exports = {
      createHnLTable: function () {
        let e = document.createElement("div");
        (e.className = "contact tabContent"), n.appendChild(e);
        let t = document.createElement("h2");
        (t.className = "subHeadText"),
          (t.innerHTML = "Location"),
          e.appendChild(t);
        let a = document.createElement("h3");
        (a.className = "body"),
          (a.innerHTML = "52nd and Pecos, Denver, CO 80221"),
          e.appendChild(a);
        let c = document.createElement("h2");
        (c.className = "subHeadText"),
          (c.innerHTML = "Hours"),
          e.appendChild(c);
        let l = document.createElement("h3");
        (l.className = "body"),
          (l.innerHTML = "Monday - Saturday"),
          e.appendChild(l);
        let o = document.createElement("h3");
        (o.className = "body"), (o.innerHTML = "9am - 10pm"), e.appendChild(o);
      },
    };
  },
]);
