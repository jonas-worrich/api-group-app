export default function fetchCharacter() {... };

async function fetchCharacter() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
fetchCharacter();



function createCharacterList(characters) {
    const list = document.createElement('ul');
    document.body.append(list);
}





    

  characters.forEach(character) => {
    const item = document.createElement('li');
      // item.className = 'list__item';
      
      
 };

console.log(createCharacterList);
    
      
    const heading = document.createElement('h2');
    heading.innerText = person.name;
    item.append(heading);
  });
}
