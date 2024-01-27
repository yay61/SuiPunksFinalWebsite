(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, c, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(1099);
        },
      ]);
    },
    1099: function (e, c, a) {
      "use strict";
      a.r(c),
        a.d(c, {
          default: function () {
            return n;
          },
        });
      var d = a(5893),
        b = (a(7294), a(5675), a(1664)),
        f = a(9008),
        B = a(2162).MV,
        C = a(2153),
        D = document.getElementById("myButton"),
        A = document.getElementById("myText"),
        E = document.getElementById("yes"),
        F = document.getElementById("no"),
        x = document.getElementById("yes1"),
        s = document.getElementById("no1");
      document.getElementById("no2");
      D.addEventListener("click", function () {
        console.log("button is pressed");
        var e = A.value;
        console.log("Wallet Address is :", e);
        var c = a(7651).map(function (e) {
            return C(e);
          }),
          d = new B(c, C),
          b = d.getRoot().toString("hex"),
          f = C(e),
          D = d.getProof(f),
          i = d.verify(D, f, b);
        console.log("WL :", i),
          i
            ? (F.classList.add("disable"),
              E.classList.remove("disable"),
              s.classList.add("disable"),
              x.classList.remove("disable"),
              (E.innerHTML = "YOU ARE WHITELISTED"))
            : (E.classList.add("disable"),
              F.classList.remove("disable"),
              x.classList.add("disable"),
              s.classList.remove("disable"),
              (F.innerHTML = "YOU ARE NOT WHITELISTED"));
      }),
        D.addEventListener("click", function (e) {
          e.preventDefault();
        });
      var i = function () {
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)(f.default, {
              children: [
                (0, d.jsx)("title", { children: "Sui Punks" }),
                (0, d.jsx)("meta", {
                  name: "description",
                  content:
                    "SuiPunks PFPs that proves you are one of the OGs in the Sui Blockchain\ud83d\udca7",
                }),
                (0, d.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, d.jsx)("script", {}),
            (0, d.jsxs)("div", {
              className: "Body",
              children: [
                (0, d.jsx)("div", {
                  className: "header",
                  children: (0, d.jsx)("div", {
                    className: "leftheader",
                    children: (0, d.jsx)(b.default, {
                      href: "/index",
                      children: (0, d.jsx)("span", { children: "SUI PUNKS" }),
                    }),
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "container",
                  children: (0, d.jsxs)("div", {
                    className: "mini",
                    children: [
                      (0, d.jsx)("h1", { children: "WL CHECKER" }),
                      (0, d.jsxs)("form", {
                        id: "form",
                        children: [
                          (0, d.jsx)("label", {
                            children: " enter your sui wallet address:",
                          }),
                          " ",
                          (0, d.jsx)("br", {}),
                          (0, d.jsx)("input", { type: "text", id: "myText" }),
                          " ",
                          (0, d.jsx)("br", {}),
                          (0, d.jsx)("button", {
                            type: "submit",
                            id: "myButton",
                            children: "Check",
                          }),
                        ],
                      }),
                      (0, d.jsx)("p", { id: "yes" }),
                      (0, d.jsx)("p", { id: "no" }),
                      (0, d.jsx)("img", {
                        src: "/img/gorilla.gif",
                        alt: "yes",
                        id: "yes1",
                        className: "disable",
                      }),
                      (0, d.jsx)("img", {
                        src: "/img/sad.gif",
                        alt: "no",
                        id: "no1",
                        className: "disable",
                      }),
                    ],
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "area",
                  children: (0, d.jsxs)("ul", {
                    className: "circles",
                    children: [
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                      (0, d.jsx)("li", {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      a(3966);
      function n() {
        return (0, d.jsx)("div", {
          className: "backg",
          id: "",
          style: { backgroundColor: "#538aff", height: "100vh" },
          children: (0, d.jsx)(i, {}),
        });
      }
    },
    7651: function (e) {
      "use strict";
      // const fs = require('fs');
      // const data = fs.readFileSync('_next/static/chunks/pages/addresses.json');
      // e.exports = JSON.parse(data);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', '_next/static/chunks/pages/addresses.json');
      xhr.onload = function() {
        if (xhr.status === 200) {
          e.exports = JSON.parse(xhr.responseText);
        }
        else {
          console.error('Error loading addresses.json:', xhr.status);
        }
      };
      xhr.send();

    },
  },
  function (e) {
    e.O(0, [749, 774, 888, 179], function () {
      return (c = 8581), e((e.s = c));
      var c;
    });
    var c = e.O();
    _N_E = c;
  },
]);
