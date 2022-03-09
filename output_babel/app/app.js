"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = void 0;

var _structure = require("./structure1/structure1");

var _structure2 = require("./structure2/structure2");

const startApp = () => {
  var _cities$address$prima, _cities$address, _person$name;

  let cities = {
    city: 'Guatemala',
    zone: '2',
    address: {
      primary: 'zona 2',
      secondary: 'Torre C'
    }
  };
  let person = {
    name: 'Ludwing',
    description: 'Software Engineer'
  };
  document.getElementById("structure").appendChild((0, _structure.Structure1)());
  document.getElementById("structure2").appendChild((0, _structure2.Structure2)());
  let city = (_cities$address$prima = (_cities$address = cities.address) === null || _cities$address === void 0 ? void 0 : _cities$address.primaryAddress) !== null && _cities$address$prima !== void 0 ? _cities$address$prima : 'No Address';
  let newDivCity = document.createElement("div").innerHTML(city);
  let user = (_person$name = person === null || person === void 0 ? void 0 : person.name) !== null && _person$name !== void 0 ? _person$name : 'Otto';
  let newDivUser = document.createElement("div").innerHTML(user);
  document.body.appendChild(newDivCity);
  document.body.appendChild(newDivUser);
};

exports.startApp = startApp;