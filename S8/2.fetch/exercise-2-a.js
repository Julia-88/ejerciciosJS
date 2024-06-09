const baseUrl = 'https://api.nationalize.io?name=';

async function getName(name) {
    try {
      const response = await fetch(baseUrl+name);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  let input = document.querySelector('input');

let button = document.querySelector('button');

button.addEventListener('click', () => {
    getName(input.value);
});