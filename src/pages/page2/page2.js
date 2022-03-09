import './page2.css'
let newDiv = document.createElement('div');
newDiv.style.height= '100px';
newDiv.style.width = '300px';
newDiv.style.color = 'white';
newDiv.style.background = 'blue';

let description = document.createElement('p');
description.innerHTML = 'Text on page 2';

newDiv.appendChild(description);

document.getElementById('page2').appendChild(newDiv);