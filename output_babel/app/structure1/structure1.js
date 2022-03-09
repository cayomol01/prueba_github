"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Structure1 = void 0;

var _newCard = require("../card/newCard");

const Structure1 = () => {
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
  row.appendChild(col4);
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  row.appendChild(col4);
  return row;
};

exports.Structure1 = Structure1;