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
