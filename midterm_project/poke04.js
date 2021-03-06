const container04 = document.getElementById('container04');
const pokemon_water01 = document.getElementById('pokemon_water01');
pokemon_water01.addEventListener('click', groupPokemons04);

let num04 = 0;

function clearContainer04() {
      document.getElementById('container04').innerHTML = "";
      num04 = 0;
};

function groupPokemons04() {
    if (num04 != 0)
    {
      clearContainer04();
    }

    fetch(`https://pokeapi.co/api/v2/egg-group/2/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const poke_name = data.pokemon_species.map(pokename => pokename.name);

          for (let i = 0; i < 3; i++) {
              const random = Math.floor(Math.random() * poke_name.length);
              let poke = poke_name.at(random)
              console.log(random, poke)
              $('#container04').append(createPokemonCard04(poke))
          }
      });

      num04++;
};


function createPokemonCard04(pokemon) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const pokemonEl = document.createElement('div');
          pokemonEl.classList.add('pokemon');
          
          const name = data.name[0].toUpperCase() + data.name.slice(1);
          const poke_types = data.types.map(type => type.type.name);
          const type = main_types.find(type => poke_types.indexOf(type) > -1);
          const color = colors[type];
  
          pokemonEl.style.backgroundColor = color;
          pokemonEl.style.borderRadius = "20px";


          const pokeInnerHTML = `
          <div class="box-container">
                <span class="number">Pokedex: ${data.id}</span>
                <h2 class="name">${name}</h2>
                <img src=${data.sprites.front_default} alt=""/>
                <h3 class="type">Type: <span>${type}</span></h3>
          </div>
        `;

        pokemonEl.innerHTML = pokeInnerHTML;

        container04.appendChild(pokemonEl); 
      });
};