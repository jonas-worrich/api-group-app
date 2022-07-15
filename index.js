let datalist = [];
const statusFilterButton = document.createElement("button") 
statusFilterButton.classList.add("filter_button_status")
statusFilterButton.innerText = "Status Filter"
document.body.append(statusFilterButton);
statusFilterButton.addEventListener("click",() =>  {

const charactersDead = datalist.filter((character)=> {

  return character.status === "Dead";

});

createRickList (charactersDead)

console.log(charactersDead)

})
const rickApi = 'https://rickandmortyapi.com/api/character';
  fetch(rickApi)
  .then((response) => 
    response.json())
    .then((data) => {
      datalist = data.results
    createRickList(data.results)});

    console.log(rickApi);

function createRickList(character){

character.forEach((datas) => {
  
    const characterCard = document.createElement("article");
    characterCard.classList.add("character_card");
   
    const characterName = document.createElement("h2");
    characterName.classList.add("character_name");
    characterName.innerText = datas.name;
  
    const characterList = document.createElement("ul");
     characterList.classList.add("character_list");

    
    const characterSpecies = document.createElement('li')
     characterSpecies.innerText = "species: " + datas.species;
      characterSpecies.classList.add("character_list_item");

     const characterStatus = document.createElement('li')
     characterStatus.innerText = "status: " + datas.status;
     characterStatus.classList.add("character_list_item");
    

      const characterGender = document.createElement('li')
      characterGender.innerText = "gender: " + datas.gender;
      characterGender.classList.add("character_list_item");




  
     // Append: 
    document.body.append(characterCard);
    characterList.append(characterSpecies,characterStatus,characterGender);
  
    characterCard.append(characterName,characterList);
  
  });
  
}

