import { Structure1 } from "./structure1/structure1";
import { Structure2 } from "./structure2/structure2";

export const startApp = () => {


  let cities = {
    city: 'Guatemala',
    zone: '2',
    address: {
      primary: 'zona 2',
      secondary: 'Torre C'
    }
  }
  let person = {
    name: 'Ludwing',
    description: 'Software Engineer'
  }
  document.getElementById("structure").appendChild(Structure1());
  document.getElementById("structure2").appendChild(Structure2());
  let city = cities.address?.primaryAddress ?? 'No Address';
  let newDivCity = document.createElement("div").innerHTML(city);
  let user = person?.name ?? 'Otto';
  let newDivUser = document.createElement("div").innerHTML(user);
  document.body.appendChild(newDivCity);
  document.body.appendChild(newDivUser);
}