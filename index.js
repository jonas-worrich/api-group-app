
    const rickApi = 'https://rickandmortyapi.com/api/character';
  fetch(rickApi)
  .then((response) => 
    response.json())
    .then((data) =>
    createRickList(data.results));

    console.log(rickApi);

function createRickList(character){




character.forEach((datas) => {
    const characterCard = document.createElement("article");
    characterCard.classList.add("character_card");
  
    const characterName = document.createElement("h2");
    characterName.innerText = datas.name;
  
    const characterGender = document.createElement("p");
    characterGender.innerText = datas.species;


  //classList for p//
  
    document.body.append(characterCard);
  
    characterCard.append(characterName,characterGender);
  
  });
  
}

