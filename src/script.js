let parent = document.getElementById('card-container');
let elem = parent.querySelector('.figma-card');

for (let i = 0; i < 11; i++) { 
    

    let clone = elem.cloneNode(true);
    parent.appendChild(clone);
  }

console.log('hello world')