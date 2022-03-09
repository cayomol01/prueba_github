"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Structure2 = void 0;

var _newCard = require("../card/newCard");

const Structure2 = () => {
  var row = document.createElement("div");
  row.classList.add("row"); // Adding small cards

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  (0, _newCard.newCard)("Index.html", "Index page", col4);
  (0, _newCard.newCard)("Style.css", "Style for index page", col4);
  (0, _newCard.newCard)("Bootstrap.js", "Styling library", col4);
  (0, _newCard.newCard)("Script.js", "Script element creator", col4);
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";
  col4.style.textAlign = "center";
  var imgWebpack = document.createElement("img");
  imgWebpack.src = "https://thumbs.gfycat.com/HighlevelWindingGemsbok-size_restricted.gif"; //   imgWebpack.width="250";

  col4.appendChild(imgWebpack);
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  col4.style.margin = "auto";
  (0, _newCard.newCard)("app.bundle.js", "Webpack bundle with all our assets (style.css, script.js, bootstrap.css.min", col4);
  row.appendChild(col4);
  return row;
};

exports.Structure2 = Structure2;