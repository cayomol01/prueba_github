"use strict";

require("./page3.css");

require("../page2/page2.css");

let newDiv = document.createElement('div');
newDiv.style.height = '100px';
newDiv.style.width = '300px';
newDiv.style.background = 'green';
let description = document.createElement('p');
description.innerHTML = 'Text on page 3';
newDiv.appendChild(description);
document.getElementById('page3').appendChild(newDiv);