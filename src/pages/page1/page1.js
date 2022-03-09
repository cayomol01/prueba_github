import './page1.css'
import { Structure1 } from "../../app/structure1/structure1";
let newDiv = document.createElement('div');
newDiv.style.height= '100px';
newDiv.style.width = '300px';
newDiv.style.background = 'red';

let description = document.createElement('p');
description.innerHTML = 'Text on page 1';

newDiv.appendChild(description);

document.getElementById('page1').appendChild(newDiv);