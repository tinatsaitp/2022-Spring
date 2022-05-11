const container01 = document.getElementById('container01');
const pokemon_monster = document.getElementById('pokemon_monster');
pokemon_monster.addEventListener('click', groupPokemons01);

let num01 = 0;

function clearContainer01() {
      document.getElementById('container01').innerHTML = "";
      num01 = 0;
};

function groupPokemons01() {
    if (num01 != 0)
    {
      clearContainer01();
    }

    fetch(`https://pokeapi.co/api/v2/egg-group/1/`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          const poke_name = data.pokemon_species.map(pokename => pokename.name);

          //const poke_1 = poke_name.at(0);
          //createPokemonCard(poke_1);
          //const poke_2 = poke_name.at(1);
          //createPokemonCard(poke_2);
          //const poke_3 = poke_name.at(2);
          //createPokemonCard(poke_3);
          
          for (let i = 0; i < 3; i++) {
              const random = Math.floor(Math.random() * poke_name.length);
              let poke = poke_name.at(random)
              console.log(random, poke)
              $('#container01').append(createPokemonCard01(poke))
          }
      }); 

      num01++;
};


function createPokemonCard01(pokemon) {

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

        container01.appendChild(pokemonEl);
      });
};