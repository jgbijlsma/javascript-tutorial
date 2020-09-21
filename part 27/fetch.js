async function getPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    console.log(data);
    showPokemon(data);
  } catch (err) {
    const div = document.querySelector("#info-container");
    div.innerHTML = "<p><b>Something went wrong, please try again</b></p>";
  }
}

function showPokemon(pokemon) {
  const div = document.querySelector("#info-container");
  div.innerHTML = `<h1>${pokemon.name}</h1><img src="${pokemon.sprites.front_default}">`;

  for (let i = 0; i < pokemon.types.length; i++) {
    const typeEl = document.createElement("p");
    typeEl.innerText = pokemon.types[i].type.name;
    div.appendChild(typeEl);
  }

  document.body.appendChild(div);
}

function searchClick() {}

document.querySelector("#search-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#search-name").value;
  getPokemon(name);
});
