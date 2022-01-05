fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((pokemonList) => {
    console.log(pokemonList);
    pokemonList.results.forEach((pokemon) => {
      document.querySelector("#list").innerHTML += `
      <div class="poki">
       <div>
         <h4>${pokemon.name}</h4>
         <button onclick="getData('${pokemon.url}')"></button>
       </div>  
      </div>
      `;
    });
  });

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#image").innerHTML = `
    <div class="card">
      <div class="picture">
        <img src="${data.sprites.front_default}" >
        <h1>${data.name}</h1>
      </div>
      <div class=" info">
       
        <h4>Abilities:</h4>
        <p> ${data.abilities[0].ability.name},  ${data.abilities[1].ability.name}</P>
        <h4>Weight:</h4>
        <p>${data.weight}</p>
        <h4>Height:</h4>
        <p> ${data.height}</p>
      </div>
      <h4>Statistics:</h4>
      <p>
        ${data.stats[0].stat.name}: ${data.stats[0].base_stat}
        <br>${data.stats[1].stat.name}: ${data.stats[1].base_stat}
        <br>${data.stats[2].stat.name}: ${data.stats[2].base_stat}
        <br>${data.stats[3].stat.name}: ${data.stats[3].base_stat}
        <br>${data.stats[4].stat.name}: ${data.stats[4].base_stat}
        <br>${data.stats[5].stat.name}: ${data.stats[5].base_stat}
      </p>
    </div>
`;
    });
}
getData("https://pokeapi.co/api/v2/pokemon/charizard");
